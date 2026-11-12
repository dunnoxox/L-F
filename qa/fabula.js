/* Gracz fabularny LOST & FRAUD: przechodzi dni 1-25 jak człowiek z konkretnym nastawieniem
   i zapisuje WSZYSTKO, co gracz czyta (wejścia, pytania, odpowiedzi, decyzje, skutki, pocztę o świcie, soboty, finał).
   Służy do przeglądu fabuły, nie układu (od układu jest qa/bot.js).
   Użycie: cd game && python3 -m http.server 8765 &   potem:
     node qa/fabula.js --gracz uczciwy   --out qa/fabula_uczciwy
     node qa/fabula.js --gracz zlodziej  --out qa/fabula_zlodziej
     node qa/fabula.js --gracz ciekawski --out qa/fabula_ciekawski   (śledzi wątek Sama: kartki S.H., strona 41, 0809)
     node qa/fabula.js --gracz ciekawski --watek maya|skrytka|sam
   Wynik: <out>/przebieg.md (zapis), <out>/wynik.json, <out>/*.png (kadry: wejście gościa, skutek decyzji, świt). */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d };
const URL0 = arg('url', 'http://localhost:8765/'), GRACZ = arg('gracz', 'uczciwy'), WATEK = arg('watek', 'sam');
const OUT = arg('out', 'qa/fabula_' + GRACZ), MAXDAY = +arg('days', 99), SEED = +arg('seed', 7), SHOTS = !process.argv.includes('--bez-kadrow');
const IMIE = arg('imie', GRACZ === 'zlodziej' ? 'Nikt' : 'Tommy');
fs.mkdirSync(OUT, { recursive: true });
global.window = {}; require(path.join(__dirname, '..', 'game', 'data.js'));
const DATA = window.DATA, EXTRA = window.EXTRA || {};
const DAYS = {}; DATA.forEach(g => (DAYS[g.dzien] = DAYS[g.dzien] || []).push(g));

/* słowa-klucze wątków: po nich ciekawski wybiera rzecz do obejrzenia, pytania i decyzje */
const KW = {
  sam: /S\.H\.|Sam\b|Sama\b|Samowi|Holt|stron[ayęie]+ 41|0809|poprzedni|Lewa czeka|fotel|dyżurn|kalk|szafk|Vera|Very|Verze|teczk|ogłoszeni/i,
  maya: /May[aieęio]|Doyle|Evan|Len[aieęy]\b|Noah|detektyw|kapelusz|Stahl|walizk|zaginion/i,
  skrytka: /Iris|Bell|żeton|paczk|płót|Nor[aieęy]\b|Okoye|Cooper|kasetk|6 ?800|400 \$|Skrytk|Victor|Crane|kopi/i
}[WATEK];
/* decyzje, które ciekawski bierze, gdy są dostępne (ścieżka człowieka, który ufa Samowi i nie ufa drugiej kopii) */
const LUBI = { sam: ['wydaj_bez_wpisu', 'jeden_egzemplarz', 'zerwij_nalepke', 'uzgodnij', 'otworz_szafke', 'list', 'przez_okienko', 'maya_sama', 'wiadomosc_zatwierdzona', 'przekaz_w_granicach', 'stahl_odeslij', 'zabezpiecz', 'sprawdz_z_nora', 'rezerwacja_nora', 'wydaj_nora', 'odpis_za_zgoda', 'przyjmij_sprostowanie'],
  maya: ['przez_okienko', 'maya_sama', 'wiadomosc_zatwierdzona', 'przekaz_w_granicach', 'stahl_odeslij', 'ostrzez'],
  skrytka: ['zabezpiecz', 'sprawdz_z_nora', 'rezerwacja_nora', 'wydaj_nora', 'kopia_osobno', 'przyjmij_sprostowanie', 'zetony_iris'] }[WATEK];
const U_PLUS = /^(rejestr|odmow_zglos|wykaz_paczke|potwierdz_wpis|wpisz|list_przewozowy|wydaj_zapisz|wydaj_i_zapisz|zetony_victor|depozyt|pokwituj|archiwum|kartka_odpis|do_kontroli|uzgodnij|victor_od_razu|komplet_zeznan|oficjalny|przyjmij_wpis|przyjmij_swiadectwo|dolacz_kopie|zapisz|zabezpiecz|sprawdz|zatrzymaj|zostaw_zamkniety|przechowaj_z_kwitem|odpis_za_zgoda|rezerwacja|stahl_odeslij|odeslij|zaswiadczenie)/;
const BEZ = /^(bez|wydaj_bez_wpisu|wydaj_cicho|oddaj_bez_wpisu|przyjmij_bez_wpisu|przechowaj_bez_kwitu|koperta|oddaj_samowi|poza_audytem|zniszcz_kopie|jeden_egzemplarz|otworz_szafke)/;
const txtOf = o => JSON.stringify(o);

function pickItem(day, items) { // items: [{id, name}]
  const sc = it => { const g = it.id[0] === 'x' ? EXTRA[day] : DATA.find(d => d.id === it.id); const w = txtOf(g.wnetrze || []);
    if (GRACZ === 'ciekawski') return (KW.test(w) ? 10 : 0) + ((g.wnetrze || []).length ? 1 : 0) + (it.id[0] === 'x' ? 2 : 0);
    if (GRACZ === 'zlodziej') return (/\$|dolar|gotówk|banknot|pieniądz|kopert/i.test(w) ? 10 : 0) + (g.decyzje && g.decyzje.some(d => /^wez_|^przywlaszcz/.test(d.akcja)) ? 5 : 0) + ((g.wnetrze || []).length ? 1 : 0);
    return it.id[0] === 'x' ? -1 : 0; }; // uczciwy: rzecz pierwszego gościa, nie grzebie w cudzych
  return items.map((it, i) => [sc(it), -i, it]).sort((a, b) => b[0] - a[0] || b[1] - a[1])[0][2];
}
function pickQ(g, qs) { // qs: [{tekst, sec, ton}]
  const sc = q => GRACZ === 'uczciwy' ? ({ rzeczowe: 3, uprzejme: 2, niewygodne: 1 }[q.ton] || 0) + (q.sec ? .5 : 0)
    : GRACZ === 'zlodziej' ? (q.sec ? 5 : 0) + ({ niewygodne: 3, rzeczowe: 2, uprzejme: 1 }[q.ton] || 0)
    : (q.sec ? 6 : 0) + (KW.test(q.tekst) ? 4 : 0) + ({ niewygodne: 3, rzeczowe: 2, uprzejme: 1 }[q.ton] || 0);
  return qs.map((q, i) => [sc(q), -i, i]).sort((a, b) => b[0] - a[0] || b[1] - a[1])[0][2];
}
function pickD(g, ds) { // ds: [{akcja, kasa}]
  const sc = d => { const a = d.akcja;
    if (GRACZ === 'zlodziej') return (/^wez_|^przywlaszcz/.test(a) ? 100 : 0) + (d.kasa || 0) / 10 + (/^koperta/.test(a) ? 20 : 0) + (BEZ.test(a) ? 5 : 0);
    if (GRACZ === 'uczciwy') return (/^wez_|^przywlaszcz/.test(a) ? -100 : 0) + (BEZ.test(a) ? -20 : 0) + (U_PLUS.test(a) ? 5 : 0) + (/^wydaj/.test(a) ? 6 : 0) - ((d.kasa || 0) > 0 ? 10 : 0);
    const k = LUBI.indexOf(a); return (k >= 0 ? 50 - k : 0) + (/^wez_|^przywlaszcz/.test(a) ? -100 : 0) + (/^wydaj/.test(a) ? 2 : 0) + (/victor|do_kontroli|wykaz_paczke|komplet_zeznan|dolacz_kopie|wpisz_wykaz/.test(a) ? -5 : 0); };
  return ds.map((d, i) => [sc(d), -i, i]).sort((a, b) => b[0] - a[0] || b[1] - a[1])[0][2];
}

(async () => {
  const br = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
  const page = await (await br.newContext({ viewport: { width: 1536, height: 1024 } })).newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error') errs.push(m.text()) });
  await page.goto(URL0 + '?fast=1&seed=' + SEED); await page.evaluate(() => localStorage.clear()); await page.reload();
  const sleep = ms => page.waitForTimeout(ms), has = s => page.$(s).then(e => !!e && e.isVisible()), txt = s => page.$eval(s, e => e.innerText).catch(() => '');
  const md = []; const L = s => { md.push(s); fs.writeFileSync(path.join(OUT, 'przebieg.md'), md.join('\n')) };
  let nshot = 0; const shot = async n => { if (!SHOTS) return; await page.screenshot({ path: path.join(OUT, String(nshot++).padStart(3, '0') + '_' + n + '.jpg'), type: 'jpeg', quality: 70 }) };
  const S = () => page.evaluate(() => { const s = window.__G(); return { day: s.day, gi: s.gi, turn: s.turn, money: s.money, c: s.c, flags: Object.keys(s.flags), secrets: Object.keys(s.secrets), notes: (s.notes || []).length, log: s.log, name: s.name, dlug: s.dlug, thefts: s.thefts } });
  L(`# Przebieg: gracz „${GRACZ}”${GRACZ === 'ciekawski' ? ' (wątek: ' + WATEK + ')' : ''}, seed ${SEED}\n`);
  await sleep(1500); await page.mouse.click(5, 5); await sleep(900); await shot('tytul');
  await page.click('.tmenu .mcard'); await sleep(900);
  L('## Prolog\n' + (await txt('.prolog')).replace(/\n+/g, ' / ')); await shot('prolog');
  if (await has('.strip')) await page.click('.strip'); await sleep(900);
  L((await txt('.contract')).replace(/\n+/g, ' / ')); await shot('umowa');
  if (await has('.pen')) await page.click('.pen'); await sleep(1200);

  let guard = 0, lastKey = '', stuck = 0, koniec = null, curDay = 0, curG = null, entryLogged = '';
  while (guard++ < 6000) {
    await sleep(70);
    const st = await S().catch(() => null); if (!st) continue;
    if (st.day > MAXDAY) { koniec = 'limit dni'; break }
    const k = await page.evaluate(() => document.getElementById('layer').innerHTML.length + (document.querySelector('#layer .center h1,#layer .top .lab')?.innerText || ''));
    if (k === lastKey) { if (++stuck > 170) { koniec = 'ZACIĘCIE d' + st.day; await shot('zaciecie'); break } } else { stuck = 0; lastKey = k }
    if (await has('.fade.on, #fade.on')) continue;
    if (await has('.daycard')) { await page.click('.daycard').catch(() => {}); await sleep(250); continue }
    if (await has('.tut button')) { await page.click('.tut button'); continue }
    if (st.day !== curDay && await has('.top .dtitle')) { curDay = st.day; L(`\n---\n## DZIEŃ ${st.day} · ${(await txt('.top .lab'))} · „${await txt('.top .dtitle')}”\nStan: ${st.money} $, Urząd ${st.c.urzad}, Ludzie ${st.c.ludzie}, bez wpisu ${st.c.bez}, kartki S.H. ${st.notes}/5`) }
    // dostawa: wybór rzeczy do obejrzenia
    if (await has('.crate .zguba')) {
      const items = await page.$$eval('.crate .zguba', (bs) => bs.map((b, i) => ({ i, alt: (b.querySelector('img') || {}).alt || b.innerText, off: b.disabled })));
      const pool = (DAYS[st.day] || []).map(g => ({ id: g.id, name: g.itemName })).concat(EXTRA[st.day] ? [{ id: 'x' + st.day, name: EXTRA[st.day].itemName }] : []);
      const free = items.filter(x => !x.off).map(x => ({ ...x, it: pool.find(p => p.name === x.alt) })).filter(x => x.it);
      L('Dostawa: ' + items.map(x => x.alt + (x.off ? ' (zablokowana)' : '')).join(', ') + '. ' + (await txt('.top p')));
      if (st.day === 1 || st.day % 5 === 0) await shot('d' + st.day + '_dostawa');
      const ch = free.length ? pickItem(st.day, free.map(x => x.it)) : null; const bi = ch ? free.find(x => x.it === ch).i : items.findIndex(x => !x.off);
      L('→ Zaglądam do: **' + (ch ? ch.name : items[bi].alt) + '**');
      await page.$$eval('.crate .zguba', (bs, i) => bs[i].click(), bi); await sleep(600); continue
    }
    if (await has('.inspect .hot:not(.found)')) { await page.click('.inspect .hot', { force: true }).catch(() => {}); await sleep(250); L('Oględziny: ' + (await txt('.inspect .note')).replace(/\n+/g, ' ')); if (st.day <= 2 || st.day === 15) await shot('d' + st.day + '_ogledziny'); continue }
    if (await has('.inspect .nextrow button')) { await page.click('.inspect .nextrow button'); await sleep(500); continue }
    if (await has('.pauza')) { await sleep(250); continue }
    if (await has('#guest.sil') && await has('.curtain')) { await sleep(300); await page.click('.curtain'); await sleep(500); continue }
    // rozmowa
    if (await has('#qs button.q')) {
      await sleep(200); const g = DAYS[st.day][st.gi];
      if (entryLogged !== g.id) { entryLogged = g.id; curG = g; L(`\n### ${g.postac} [${g.id}] · rzecz: ${g.itemName}`); L('**Wejście** (' + (await txt('#say .lab')) + '): ' + (await page.$eval('#say span:last-child', e => e.textContent).catch(() => ''))); await shot('d' + st.day + '_' + g.id + '_wejscie') }
      const qs = await page.$$eval('#qs button.q', bs => bs.map(b => ({ sec: b.classList.contains('sec'), tekst: b.innerText.replace(/^wiesz ze środka\s*/i, '').trim() })));
      const all = g.tury[st.turn].pytania; qs.forEach(q => { const d = all.find(x => q.tekst.endsWith(x.tekst) || x.tekst === q.tekst); q.ton = d ? d.ton : '?'; q.mina = d ? d.mina : '?' });
      const i = pickQ(g, qs);
      L(`Tura ${st.turn + 1}, do wyboru: ` + qs.map((q, j) => (j === i ? '**' : '') + `[${q.ton}${q.sec ? ', wiem ze środka' : ''}] ${q.tekst}` + (j === i ? '**' : '')).join(' | '));
      await page.$$eval('#qs button.q', (b, i) => b[i].click(), i); await sleep(350);
      L(`  — ${(await txt('#say .lab'))}${qs[i].mina === 'klamie' ? ' (KŁAMIE: błysk lampy)' : ''}: ` + (await page.$eval('#say span:last-child', e => e.textContent).catch(() => '')));
      continue
    }
    if (await has('#qs button.btn') && !(await has('.zones')) && !(await has('.sum'))) { await page.click('#qs button.btn'); await sleep(500); continue }
    if (await has('.field .grid')) {
      if (await has('.slot[data-target]')) { await page.click('.slot[data-target]'); await sleep(600); continue }
      const tabs = await page.$$('.tabs .tab'); let f = false; for (const t of tabs) { await t.click(); await sleep(120); if (await has('.slot[data-target]')) { f = true; break } }
      if (!f) { L('!! BLOKADA: rzeczy nie ma w magazynie'); koniec = 'BLOKADA d' + st.day; break } continue
    }
    if (await has('.zones .zone')) {
      const g = DAYS[st.day][st.gi];
      const zs = await page.$$eval('.zones .zone', z => z.map(x => ({ akcja: x.dataset.a, lab: x.innerText.replace(/\n+/g, ' ') })));
      zs.forEach(z => { const d = g.decyzje.find(x => x.akcja === z.akcja); z.kasa = d && d.kasa || 0 });
      const ukryte = g.decyzje.filter(d => !zs.some(z => z.akcja === d.akcja)).map(d => d.akcja + (d.wymaga ? ' (wymaga ' + d.wymaga + ')' : ''));
      const i = pickD(g, zs);
      L('**Decyzja**, do wyboru: ' + zs.map((z, j) => (j === i ? '**' : '') + z.lab + ' {' + z.akcja + (z.kasa ? ', ' + (z.kasa > 0 ? '+' : '') + z.kasa + ' $' : '') + '}' + (j === i ? '**' : '')).join(' | ') + (ukryte.length ? '  · niewidoczne: ' + ukryte.join(', ') : ''));
      await page.$$eval('.zones .zone', (z, i) => z[i].click(), i); await sleep(450);
      L('  — Reakcja (' + (await txt('#say .lab')) + '): ' + (await page.$eval('#say', e => e.lastChild.textContent).catch(() => '')));
      L('  — Skutek: ' + (await txt('.sum')).replace(/\n+/g, ' / ')); await shot('d' + st.day + '_' + g.id + '_skutek'); await sleep(900);
      if (await has('#qs button.btn')) await page.click('#qs button.btn'); await sleep(600); continue
    }
    if (await has('.sum') && await has('#qs button.btn')) { await page.click('#qs button.btn'); await sleep(600); continue }
    if (await has('input.nameinp')) { L('\n**Pytanie o imię:** ' + (await txt('.center')).replace(/\n+/g, ' / ') + ' → wpisuję „' + IMIE + '”'); await shot('d20_imie'); await page.fill('input.nameinp', IMIE); await page.click('.center button.btn'); await sleep(600); continue }
    if (await has('.letters') && await has('.foot button')) {
      const ls = await page.$$eval('.letters .letter', l => l.map(x => { const lab = x.querySelector('.lab'); return (lab ? '[' + lab.innerText + '] ' : '') + [...x.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(' ') }));
      L(`\n#### Świt dnia ${st.day} (${ls.length} kartek, ${st.money} $)`); ls.forEach(l => L('- ' + l)); await shot('d' + st.day + '_swit');
      await page.click('.foot button'); await sleep(600); continue
    }
    const h1 = await txt('.center h1');
    if (h1 && await has('.ups')) { L(`\n#### SOBOTA po dniu ${st.day}\n` + (await page.$$eval('.center .sub', s => s.map(x => x.innerText))).join(' / ')); await shot('sobota_d' + st.day);
      const ub = await page.$$('.ups button:not([disabled])'); if (ub.length > 1 && GRACZ !== 'zlodziej') { L('Kupuję: ' + (await ub[0].innerText())); await ub[0].click() } await page.click('.center > button.btn.pulse'); await sleep(600); continue }
    if (h1 && await has('.threads')) { koniec = 'finał'; await sleep(300); L('\n---\n## FINAŁ\n' + (await txt('.center')).replace(/\n{2,}/g, '\n')); await shot('final_gora'); await page.evaluate(() => { const c = document.querySelector('.center'); c.scrollTop = c.scrollHeight }); await sleep(200); await shot('final_dol'); break }
    if (h1 && await has('.center button.btn')) { const t = (await txt('.center')).replace(/\n+/g, ' / '); L('\n#### Plansza: ' + t); await shot('plansza'); if (/eksmis/i.test(t)) { koniec = 'eksmisja d' + st.day; break } if (await has('.center > button.btn.pulse')) await page.click('.center > button.btn.pulse'); else { koniec = 'plansza: ' + h1; break } await sleep(600); continue }
    if (await has('.center.dark button.btn.pulse')) { await page.click('.center.dark button.btn.pulse'); await sleep(500); continue }
  }
  const st = await S().catch(() => ({})), E = await page.evaluate(() => window.__E && window.__E()).catch(() => null);
  L(`\nKONIEC: ${koniec}. Stan: ${JSON.stringify({ money: st.money, c: st.c, notes: st.notes, name: st.name, dlug: st.dlug })}. Zakończenia: ${JSON.stringify(E)}`);
  L('Decyzje: ' + (st.log || []).map(l => 'd' + l.day + ':' + l.a).join(', '));
  if (errs.length) L('Błędy JS: ' + [...new Set(errs)].join(' | '));
  fs.writeFileSync(path.join(OUT, 'wynik.json'), JSON.stringify({ gracz: GRACZ, watek: WATEK, koniec, stan: st, zakonczenia: E, bledy: errs }, null, 1));
  console.log('KONIEC', koniec, JSON.stringify(E), 'błędów JS:', errs.length);
  await br.close();
})();
