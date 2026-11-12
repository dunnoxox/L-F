#!/usr/bin/env node
/* Spójność dialogów: dla każdego węzła rozmowy wypisuje ostatnią kwestię gościa,
   opcje gracza i odpowiedź po każdej opcji, i zaznacza podejrzane pary.

   Rozmowa to drzewo (pole "rozmowa"): tematy są dostępne zawsze, więc muszą pasować po samym wejściu gościa;
   dopytania ("dalej") widać tylko zaraz po odpowiedzi, pod którą wiszą, więc muszą reagować na jej końcówkę.
   Sceny w starym zapisie ("tury": trzy sztywne tury, jedno pytanie na turę) sprawdzane są po staremu: każde pytanie
   tury N musi pasować po KAŻDEJ odpowiedzi tury N-1, co prawie nigdy się nie udaje. Dlatego te sceny czekają na przepisanie.

   Użycie:
     node qa/spojnosc_dialogow.js                 raport docs/SPOJNOSC_DIALOGOW.md
     node qa/spojnosc_dialogow.js --pelny PLIK    pełny wypis wszystkich węzłów (do czytania ręcznego)
     node qa/spojnosc_dialogow.js --dzien 7       tylko jeden dzień
     node qa/spojnosc_dialogow.js --strict        kod wyjścia 1, gdy w scenach-drzewach są flagi twarde (WIEDZA, KALKA, PLEC, PROZNIA)

   Flagi:
     PROZNIA  opcja nie zaczepia się o nic, co gość powiedział w poprzedniej odpowiedzi (dla którejś ścieżki)
     WIEDZA   opcja używa nazwy własnej albo liczby, której gracz na tej ścieżce nie musiał usłyszeć
     OBOK     odpowiedź nie dzieli z pytaniem żadnego słowa-klucza (do sprawdzenia ręcznie: unik czy zgrzyt)
     KALKA    zwrot brzmiący jak tłumaczenie z angielskiego
     PLEC     gracz dostaje płeć albo „pan/pani”
     DLUGIE   pytanie gracza powyżej 95 znaków (stare tury: 110) albo odpowiedź powyżej 330
*/
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const arg = k => { const i = process.argv.indexOf(k); return i < 0 ? null : (process.argv[i + 1] || true); };
const ONLY = arg('--dzien') ? +arg('--dzien') : null, FULL = arg('--pelny'), STRICT = !!arg('--strict');

const STOP = new Set(('ale albo ani aby bez bo byc byl byla bylo byly bym byscie cala caly cie ciebie co cos czego czemu czy czyj czyja czyje dla dlaczego do dobrze dzis gdy gdzie go ich im ile jak jaka jaki jakie jakis jakas jakies jeden jedna jedno jego jej jesli jest jestem jeszcze juz kiedy kim kto ktora ktore ktory ktos ma maja mam masz mi mial miala mnie moj moja moje moze mozna mu my na nad nam nas nasz nawet nic nich nie niego niej niz no od on ona one oni oraz po pod prosze przed przez przy sa sam sama sie skad sobie soba ta tak takie taki tam te tego tej ten tez to tobie toba tu tutaj twoj twoja twoje ty tych tylko tym wam was wiec wiem wiesz wlasnie wszystko za ze zeby znaczy bedzie beda byscie chce chcesz cos mowi mowisz powiedz powiedziec trzeba teraz wtedy potem zaraz bardzo troche kazdy kazda razy raz dwa trzy ktorej ktorego czym tyle tamta tamten tamto').split(' '));
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l');
const words = s => norm(s).replace(/\[[^\]]*\]/g, ' ').split(/[^a-z0-9]+/).filter(w => w.length >= 3 && !STOP.has(w));
const stem = w => /^\d/.test(w) ? w : w.slice(0, Math.max(4, Math.min(5, w.length - 2)));
const stems = s => new Set(words(s).map(stem));
const share = (a, b) => [...a].filter(x => b.has(x));
const lastSent = s => { const p = s.replace(/[„”"]/g, '').split(/(?<=[.!?…])\s+/).filter(x => x.trim().length > 2); return p.slice(-2).join(' '); };
// nazwy własne i liczby w tekście (bez pierwszego słowa zdania)
const facts = s => { const out = new Set(); s.split(/(?<=[.!?…:„])\s*/).forEach(z => { z.split(/\s+/).forEach((w, i) => { const c = w.replace(/[^\p{L}\p{N}$]/gu, ''); if (!c) return; if (/\d/.test(c)) out.add(c.replace(/\D/g, '')); else if (i > 0 && /^\p{Lu}\p{Ll}{2,}/u.test(c)) out.add(norm(c).slice(0, 3)); }); }); return out; };

const KALKI = [
  [/\bmam na myśli\b|\bco masz na myśli\b/i, 'I mean / what do you mean'],
  [/\bto nie tak, że\b/i, "it's not that"], [/\bna koniec dnia\b/i, 'at the end of the day'],
  [/\bobawiam się, że\b/i, "I'm afraid that"], [/\brobi(ć)? różnicę\b/i, 'make a difference'],
  [/\b(to )?ma sens\b|\bnie ma (to )?sensu\b/i, 'makes sense'], [/[,.!] w porządku\?/i, 'okay?'],
  [/\bprzykro mi to słyszeć\b|\bprzykro mi z powodu\b/i, "I'm sorry to hear / for"],
  [/\bdaj mi znać\b/i, 'let me know'], [/\bzaufaj mi\b|\bwierz mi\b/i, 'trust me'],
  [/\bspójrz,/i, 'look,'], [/\bwykona(ć|ł|ła|m) telefon\b/i, 'make a call'],
  [/\bto jest to\b/i, "that's it"], [/\bjestem w porządku\b|\bwszystko w porządku\?/i, "I'm fine / are you okay"],
  [/(^|[.!?…] )Dokładnie\.(\s|$)/, 'Exactly.'], [/\bdefinitywnie\b|\baktualnie\b|\bgeneralnie\b/i, 'definitely / actually / generally'],
  [/\bw rzeczy samej\b|\bnie ma mowy\b.*\bsposobu\b/i, 'indeed / no way'], [/\bmieć (dobrą|złą) noc\b|\bmiłego dnia\b/i, 'have a good night'],
  [/\bpo prostu\b.*\bpo prostu\b/i, 'just… just'], [/\bbyć w stanie\b|\bjestem w stanie\b|\bnie jestem w stanie\b/i, 'be able to'],
  [/\bbrać odpowiedzialność za\b|\bwziąć odpowiedzialność\b/i, 'take responsibility'], [/\bw tym punkcie\b|\bw tym momencie czasu\b/i, 'at this point'],
  [/\bto działa (dla mnie|w obie strony)\b/i, 'works for me / both ways'], [/\bczuję, że\b|\bczuję się, jakby\b/i, 'I feel like'],
  [/\bpotrzebuję, żeby(ś)?\b|\bpotrzebuję cię\b/i, 'I need you to'], [/\bnie mogę pomóc, ale\b/i, "can't help but"],
  [/\bzrobi(ć|ł|ła|sz) (mi )?przysługę\b/i, 'do me a favor'], [/\bi tak dalej, i tak dalej\b|\bbla bla\b/i, 'and so on'],
  [/\bto nie jest (moja|twoja) (sprawa|wina)\b/i, "it's not my/your business (sprawdź szyk)"],
  [/\bco jest nie tak\b|\bcoś jest nie tak\b/i, "what's wrong"], [/\bmoje kondolencje\b|\bprzykro mi z powodu straty\b/i, 'sorry for your loss'],
  [/\bczy mogę dostać\b|\bczy mogę mieć\b/i, 'can I have'], [/\bpodążaj\b|\bpodążać za\b/i, 'follow'],
  [/\bto zajmie\b.*\b(minut|chwil)/i, 'it will take'], [/\bw ogóle nie\b.*\bw ogóle\b/i, 'at all… at all'],
];
const PLEC = [/\b(pan|pani|panu|pana|panią|panie)\b(?! [A-ZŁŚŻ])/, /\b(zrobił|zrobiła|wziął|wzięła|powiedział|powiedziała|widział|widziała|był|była)(eś|aś)\b/i];

function load() {
  const dir = path.join(ROOT, 'koncept'), out = [];
  fs.readdirSync(dir).filter(f => /^okienko_rozmowy_v3.*\.md$/.test(f)).sort().forEach(f => {
    const t = fs.readFileSync(path.join(dir, f), 'utf8'); let m; const re = /```json\n([\s\S]*?)```/g;
    while ((m = re.exec(t))) { const g = JSON.parse(m[1]); if (g.id) out.push(Object.assign(g, { _plik: f })); }
  });
  return out.sort((a, b) => a.dzien - b.dzien);
}

// osoby trzecie („pani w szkole”) to nie zwrot do gracza
const o3 = t => t.replace(/\b(jakaś|jakiś|ta|ten|tamta|tamten|starsza|starszy|nasza|nasz|moja) pan(i)?\b|\bpan(i|ią|a|u)? (w|z|od|ze|konduktor\p{L}*|motornicz\p{L}*|doktor\p{L}*|kierownik\p{L}*|inspektor\p{L}*)\b/giu, ' ');
function lint(q, G, add) {
  KALKI.forEach(([re, co]) => { [['pytanie', q.tekst], ['odpowiedź', q.odpowiedz]].forEach(([k, s]) => { if (re.test(s)) add('KALKA', G, `${k}: „${s.match(re)[0]}” (${co})`); }); });
  q = { tekst: q.tekst, odpowiedz: o3(q.odpowiedz) };
  PLEC.forEach(re => { if (re.test(q.odpowiedz)) add('PLEC', G, `odpowiedź: „${q.odpowiedz.match(re)[0]}”`); if (re.test(q.tekst)) add('PLEC', G, `pytanie: „${q.tekst.match(re)[0]}”`); });
  if (q.tekst.length > 95) add('DLUGIE', G, `pytanie ma ${q.tekst.length} znaków`);
  if (q.odpowiedz.length > 330) add('DLUGIE', G, `odpowiedź ma ${q.odpowiedz.length} znaków`);
}
// zaczepienie odporne na odmianę: wspólny rdzeń 4 liter albo wspólna nazwa/liczba
const pre4 = s => new Set(norm(s).split(/[^a-z0-9]+/).filter(w => w.length >= 4 && !STOP.has(w)).map(w => w.slice(0, 4)));
const hook = (a, b) => share(pre4(a), pre4(b)).length > 0 || share(facts(' ' + a), facts(' ' + b)).length > 0;
const ZNANE = {};
// dopytanie zaczepione zaimkiem albo elipsą („na niej”, „w środku”, „A jak…”) wisi na odpowiedzi gościa
const ZAIMEK = /^(A |I |To |Czyli |Na pewno|Dlaczego akurat|Czemu dopiero)|\b(niej|nim|nią|nich|nimi|jej|jego|go|ją|je|ich|tym|tego|tej|ten|ta|to|te|tam|wtedy|w środku|taki|takie|taka)\b/i;
function checkTree(g) {
  const flags = [], add = (typ, gdzie, opis) => flags.push({ typ, gdzie, opis });
  const wej = [g.wejscie, ...Object.values(g.wejscie_jesli || {})];
  const stale = [g.rzecz, g.postac, ...Object.keys(g.ludzie || {}), ...Object.values(g.ludzie || {}).map(x => typeof x === 'string' ? x : JSON.stringify(x))].join(' ');
  const sekrety = (g.wnetrze || []).map(w => w.co_widac + ' ' + w.co_z_tego_wynika).join(' ');
  const baza = new Set([...facts(' ' + wej[0])].filter(f => wej.every(w => facts(' ' + w).has(f))));
  facts(' ' + stale).forEach(f => baza.add(f)); words(stale).forEach(w => baza.add(stem(w)));
  (ZNANE[g.dzien] || []).forEach(f => baza.add(f));
  const ctx = stems(wej.join(' ') + ' ' + stale);
  (function walk(list, path, anc, parent, sekret) {
    list.forEach((q, i) => {
      const G = path.concat(i + 1).join('.'), qs = stems(q.tekst), as = stems(q.odpowiedz);
      if (!share(qs, as).length && !/^(tak|nie|nikt|nic|nigdy|zawsze|wczoraj|dzis|jutro|\d)/.test(norm(q.odpowiedz)) && q.mina !== 'klamie')
        add('OBOK', G, `„${q.tekst}” -> „${q.odpowiedz.slice(0, 90)}…”`);
      // dopytanie musi zaczepiać się o odpowiedź, pod którą wisi
      if (parent && !q.wymaga) {
        if (!qs.size) { /* dopytanie eliptyczne („A dla kogo?”) wisi na odpowiedzi z definicji */ }
        else if (hook(q.tekst, parent.odpowiedz + ' ' + parent.tekst)) { if (!share(qs, stems(lastSent(parent.odpowiedz))).length && !hook(q.tekst, lastSent(parent.odpowiedz))) add('LUZNE', G, `dopytanie „${q.tekst}” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…${lastSent(parent.odpowiedz)}”`); }
        else if (!share(qs, stems(parent.odpowiedz + ' ' + parent.tekst)).length) add(share(qs, ctx).length || ZAIMEK.test(q.tekst) ? 'LUZNE' : 'PROZNIA', G, `dopytanie „${q.tekst}” nie zaczepia się o: „…${lastSent(parent.odpowiedz)}”`);
        else if (!share(qs, stems(lastSent(parent.odpowiedz))).length) add('LUZNE', G, `dopytanie „${q.tekst}” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…${lastSent(parent.odpowiedz)}”`);
      }
      // nazwy i liczby, których gracz na tej ścieżce nie słyszał (wymaga = wiedza ze środka rzeczy albo z wcześniejszych dni)
      if (!q.wymaga && !sekret) [...facts(q.tekst)].filter(f => !baza.has(f) && !anc.has(f)).forEach(f => add('WIEDZA', G, `„${q.tekst}” używa „${f}”, a gracz nie musiał tego usłyszeć na tej ścieżce`));
      lint(q, G, add);
      if (q.dalej) { const a2 = new Set(anc); facts(' ' + q.tekst + ' ' + q.odpowiedz).forEach(f => a2.add(f)); walk(q.dalej, path.concat(i + 1), a2, q, sekret || !!q.wymaga); }
    });
  })(g.rozmowa, [], new Set(), null);
  (g.decyzje || []).forEach(d => { KALKI.forEach(([re, co]) => { if (d.reakcja && re.test(d.reakcja)) add('KALKA', 'decyzja ' + d.akcja, `reakcja: „${d.reakcja.match(re)[0]}” (${co})`); }); PLEC.forEach(re => { const r = o3(d.reakcja || ''); if (re.test(r)) add('PLEC', 'decyzja ' + d.akcja, `reakcja: „${r.match(re)[0]}”`); }); });
  return flags;
}
function dumpTree(g, flags) {
  const L = [`## ${g.id} (dzień ${g.dzien}) ${g.postac}`, `Rzecz: ${g.rzecz}`, `Głos: ${g.glos}`, '', `WEJŚCIE: ${g.wejscie}`];
  Object.entries(g.wejscie_jesli || {}).forEach(([k, v]) => L.push(`WEJŚCIE jeśli ${k}: ${v}`));
  L.push('', '### Tematy (dostępne zawsze) i dopytania (tylko zaraz po odpowiedzi wyżej)');
  (function walk(list, path) { list.forEach((q, i) => { const G = path.concat(i + 1).join('.'), pad = '  '.repeat(path.length), f = [...new Set(flags.filter(x => x.gdzie === G).map(x => x.typ))];
    L.push(`${pad}${G} [${q.ton}${q.wymaga ? ', wymaga ' + q.wymaga : ''}${q.kto ? ', mówi ' + q.kto : ''}${q.mina === 'klamie' ? ', KŁAMIE' : ''}]${f.length ? ' ⚑ ' + f.join(',') : ''}`, `${pad}   GRACZ: ${q.tekst}`, `${pad}   GOŚĆ:  ${q.odpowiedz}`);
    if (q.dalej) walk(q.dalej, path.concat(i + 1)); }); })(g.rozmowa, []);
  L.push('', '### Decyzje');
  (g.decyzje || []).forEach(d => L.push(`- ${d.akcja}${d.etykieta ? ' („' + d.etykieta + '”)' : ''}${d.wymaga ? ' [wymaga ' + d.wymaga + ']' : ''}`, `   GOŚĆ: ${d.reakcja}`));
  return L.join('\n');
}
function check(g) {
  if (g.rozmowa) return checkTree(g);
  const flags = [], add = (typ, gdzie, opis) => flags.push({ typ, gdzie, opis });
  const wej = [g.wejscie, ...Object.values(g.wejscie_jesli || {})];
  const stale = [g.rzecz, g.postac, ...Object.keys(g.ludzie || {}), ...Object.values(g.ludzie || {}).map(x => typeof x === 'string' ? x : JSON.stringify(x))].join(' ');
  const sekrety = (g.wnetrze || []).map(w => w.co_widac + ' ' + w.co_z_tego_wynika).join(' ');
  let pewne = new Set([...facts(wej.join(' ')).values()].filter(f => wej.every(w => facts(w).has(f))));
  facts(stale).forEach(f => pewne.add(f)); facts(' ' + stale).forEach(f => pewne.add(f));
  words(stale).forEach(w => pewne.add(stem(w)));
  let prev = wej.map((w, i) => ({ skad: i ? 'wejście (wariant ' + i + ')' : 'wejście', tekst: w }));
  g.tury.forEach((t, ti) => {
    const T = 'tura ' + (ti + 1);
    t.pytania.forEach((q, qi) => {
      const G = `${T}, pytanie ${qi + 1}`;
      const qs = stems(q.tekst), as = stems(q.odpowiedz);
      // OBOK
      if (!share(qs, as).length && !/^(tak|nie|nikt|nic|nigdy|zawsze|wczoraj|dzis|jutro|\d)/.test(norm(q.odpowiedz)) && q.mina !== 'klamie')
        add('OBOK', G, `pytanie „${q.tekst}” -> odpowiedź „${q.odpowiedz.slice(0, 90)}…”`);
      // PROZNIA: po której poprzedniej kwestii opcja wisi w powietrzu
      if (!q.wymaga || /:/.test(q.wymaga)) {
        const bez = prev.filter(p => !share(qs, stems(p.tekst)).length && !share(qs, stems(wej[0])).length);
        const slabe = prev.filter(p => !share(qs, stems(lastSent(p.tekst))).length);
        if (bez.length) add('PROZNIA', G, `„${q.tekst}” nie zaczepia się o: ${bez.map(p => p.skad).join('; ')}`);
        else if (ti > 0 && slabe.length === prev.length) add('LUZNE', G, `„${q.tekst}” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi`);
        // WIEDZA
        const zna = new Set([...pewne]);
        const niepewne = [...facts(' ' + q.tekst)].filter(f => !zna.has(f) && !(q.wymaga && facts(sekrety).has(f)));
        niepewne.forEach(f => { const gdzies = prev.filter(p => facts(' ' + p.tekst).has(f)); if (gdzies.length < prev.length) add('WIEDZA', G, `„${q.tekst}” używa „${f}”, a gracz ${gdzies.length ? 'słyszał to tylko po: ' + gdzies.map(p => p.skad).join('; ') : 'nie musiał tego wcześniej usłyszeć'}`); });
      }
      KALKI.forEach(([re, co]) => { [['pytanie', q.tekst], ['odpowiedź', q.odpowiedz]].forEach(([k, s]) => { if (re.test(s)) add('KALKA', G, `${k}: „${s.match(re)[0]}” (${co})`); }); });
      PLEC.forEach(re => { if (re.test(q.odpowiedz)) add('PLEC', G, `odpowiedź: „${q.odpowiedz.match(re)[0]}”`); if (re.test(q.tekst)) add('PLEC', G, `pytanie: „${q.tekst.match(re)[0]}”`); });
      if (q.tekst.length > 110) add('DLUGIE', G, `pytanie ma ${q.tekst.length} znaków`);
      if (q.odpowiedz.length > 330) add('DLUGIE', G, `odpowiedź ma ${q.odpowiedz.length} znaków`);
    });
    // fakty, które padły w KAŻDEJ odpowiedzi tury, gracz zna na pewno
    const wsp = t.pytania.filter(q => !q.wymaga).map(q => facts(' ' + q.tekst + ' ' + q.odpowiedz));
    if (wsp.length) [...wsp[0]].filter(f => wsp.every(s => s.has(f))).forEach(f => pewne.add(f));
    prev = t.pytania.map((q, qi) => ({ skad: `odpowiedź ${ti + 1}.${qi + 1}`, tekst: q.odpowiedz }));
  });
  (g.decyzje || []).forEach(d => { KALKI.forEach(([re, co]) => { if (d.reakcja && re.test(d.reakcja)) add('KALKA', 'decyzja ' + d.akcja, `reakcja: „${d.reakcja.match(re)[0]}” (${co})`); }); PLEC.forEach(re => { const r = o3(d.reakcja || ''); if (re.test(r)) add('PLEC', 'decyzja ' + d.akcja, `reakcja: „${r.match(re)[0]}”`); }); });
  return flags;
}

function dump(g, flags) {
  if (g.rozmowa) return dumpTree(g, flags);
  const L = [`## ${g.id} (dzień ${g.dzien}) ${g.postac}`, `Rzecz: ${g.rzecz}`, `Głos: ${g.glos}`, '', `WEJŚCIE: ${g.wejscie}`];
  Object.entries(g.wejscie_jesli || {}).forEach(([k, v]) => L.push(`WEJŚCIE jeśli ${k}: ${v}`));
  g.tury.forEach((t, ti) => {
    L.push('', `### Tura ${ti + 1}`);
    if (ti > 0) { L.push('Gość mógł właśnie skończyć na:'); g.tury[ti - 1].pytania.forEach((q, qi) => L.push(`  (${ti}.${qi + 1}) …${lastSent(q.odpowiedz)}`)); }
    t.pytania.forEach((q, qi) => {
      const f = flags.filter(x => x.gdzie === `tura ${ti + 1}, pytanie ${qi + 1}`).map(x => x.typ);
      L.push(`${ti + 1}.${qi + 1} [${q.ton}${q.wymaga ? ', wymaga ' + q.wymaga : ''}${q.kto ? ', mówi ' + q.kto : ''}${q.mina === 'klamie' ? ', KŁAMIE' : ''}]${f.length ? ' ⚑ ' + [...new Set(f)].join(',') : ''}`, `   GRACZ: ${q.tekst}`, `   GOŚĆ:  ${q.odpowiedz}`);
    });
  });
  L.push('', '### Decyzje');
  (g.decyzje || []).forEach(d => L.push(`- ${d.akcja}${d.etykieta ? ' („' + d.etykieta + '”)' : ''}${d.wymaga ? ' [wymaga ' + d.wymaga + ']' : ''}`, `   GOŚĆ: ${d.reakcja}`));
  return L.join('\n');
}

const ALL = load();
{ // nazwy i liczby, które padły w poprzednich dniach, gracz już zna
  const txt = g => { const o = [g.postac, g.wejscie]; (function w(l) { (l || []).forEach(q => { o.push(q.tekst, q.odpowiedz); w(q.dalej); }); })(g.rozmowa || (g.tury || []).flatMap(t => t.pytania)); return o.join(' '); };
  const acc = new Set(); let d = 0;
  ALL.forEach(g => { if (g.dzien !== d) { d = g.dzien; ZNANE[d] = new Set(acc); } facts(' ' + txt(g)).forEach(f => acc.add(f)); });
}
const G = ALL.filter(g => !ONLY || g.dzien === ONLY);
const all = G.map(g => ({ g, flags: check(g) }));
const TW = ['PROZNIA', 'WIEDZA', 'KALKA', 'PLEC'], cnt = {};
const cntOld = {};
all.forEach(({ g, flags }) => flags.forEach(f => { const c = g.rozmowa ? cnt : cntOld; c[f.typ] = (c[f.typ] || 0) + 1; }));
const cntQ = l => (l || []).reduce((n, q) => n + 1 + cntQ(q.dalej), 0);
const nq = G.reduce((s, g) => s + (g.rozmowa ? cntQ(g.rozmowa) : g.tury.reduce((a, t) => a + t.pytania.length, 0)), 0);
const nTree = G.filter(g => g.rozmowa).length;
if (FULL) { fs.writeFileSync(FULL, all.map(({ g, flags }) => dump(g, flags)).join('\n\n---\n\n') + '\n'); console.log('pełny wypis:', FULL); }
const R = ['# Spójność dialogów: raport automatu', '',
  'Wygenerowane przez `node qa/spojnosc_dialogow.js`. Automat tylko wskazuje podejrzane miejsca; o tym, czy para pytanie/odpowiedź gra, decyduje czytanie (`--pelny PLIK` daje wypis wszystkich węzłów).', '',
  `Scen: ${G.length}, par pytanie/odpowiedź: ${nq}. W nowym zapisie (drzewo wątków): ${nTree} scen, w starym (trzy sztywne tury): ${G.length - nTree}.`, '', '| flaga | drzewa | stare tury | co znaczy |', '|---|---|---|---|',
  ...[['PROZNIA', 'opcja nie zaczepia się o poprzednią kwestię gościa na którejś ścieżce'], ['WIEDZA', 'opcja zakłada nazwę albo liczbę, której gracz nie musiał usłyszeć'], ['LUZNE', 'opcja nawiązuje do rozmowy, ale nie do końcówki żadnej odpowiedzi (miękkie)'], ['OBOK', 'odpowiedź bez wspólnego słowa z pytaniem (miękkie, sprawdzić ręcznie)'], ['KALKA', 'zwrot jak z tłumaczenia'], ['PLEC', 'gracz dostaje płeć albo pan/pani'], ['DLUGIE', 'za długa kwestia']].map(([k, o]) => `| ${k} | ${cnt[k] || 0} | ${cntOld[k] || 0} | ${o} |`), ''];
all.forEach(({ g, flags }) => { if (!flags.length) return; R.push(`## ${g.id} (dzień ${g.dzien}, ${g.postac}, ${g.rozmowa ? 'drzewo' : 'stare tury'})`, ''); flags.forEach(f => R.push(`- **${f.typ}** ${f.gdzie}: ${f.opis}`)); R.push(''); });
if (!ONLY) fs.writeFileSync(path.join(ROOT, 'docs', 'SPOJNOSC_DIALOGOW.md'), R.join('\n'));
console.log(`scen ${G.length} (drzewa ${nTree}), par ${nq}; flagi w drzewach:`, cnt, '| w starych turach:', cntOld);
if (STRICT && TW.some(k => cnt[k])) process.exit(1);
