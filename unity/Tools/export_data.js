// Eksport danych z przeglądarkowego dema do JSON dla Unity.
// Użycie: node export_data.js <ścieżka/okienko_e1> <katalog_wyjściowy_unity>
// Zapisuje: Data/guests.json, Data/items.json, Data/calendar.json, Assets/StreamingAssets/lang/pl.json, Data/rng_vectors.json
const fs = require('fs'), path = require('path');
const [src, out] = process.argv.slice(2);
if (!src || !out) { console.error('node export_data.js <okienko_e1> <unity_dir>'); process.exit(2); }
global.window = {};
require(path.resolve(src, 'data.js'));
const D = window.DATA, LANG = window.LANG;
const game = fs.readFileSync(path.join(src, 'game.js'), 'utf8');
const grab = (re) => { const m = game.match(re); if (!m) throw new Error('brak w game.js: ' + re); return m[1]; };
const ev = (s) => (new Function('return (' + s + ')'))();
const DAYS = ev(grab(/const DAYS=(\{[^}]*\})/));
const FILL = ev(grab(/const FILL=(\[[^\]]*\])/));
const LINES = ev(grab(/const LINES=(\[[^\]]*\])/));
const UP = ev(grab(/UP=(\{[^}]*\})/));
const STORM_DAYS = ev(grab(/STORM_DAYS=(\[[^\]]*\])/));
const LASTDAY = +grab(/const LASTDAY=(\d+)/);
const meta = JSON.parse(fs.readFileSync(path.join(src, 'assets/items/meta.json'), 'utf8'));
let nowe = {}; try { nowe = JSON.parse(fs.readFileSync(path.join(src, 'assets/items/_nowe.json'), 'utf8')); } catch (e) {}
const w = (f, o) => { fs.mkdirSync(path.dirname(path.join(out, f)), { recursive: true }); fs.writeFileSync(path.join(out, f), JSON.stringify(o, null, 2)); };

// guests.json: 1:1 z data.js, pola przemianowane na angielskie klucze zgodne z klasami C# (JsonUtility nie ma aliasów)
const guests = D.map(g => ({
  id: g.id, day: g.dzien, name: g.postac, voice: g.glos, itemDescription: g.rzecz, itemName: g.itemName,
  itemSprite: g.sprite, face: g.face || '', line: +g.line, opening: g.wejscie,
  inside: g.inside ? { image: g.inside.img, x: g.inside.x, y: g.inside.y } : { image: '', x: 0, y: 0 },
  secrets: (g.wnetrze || []).map(s => ({ id: s.sekret_id, whatYouSee: s.co_widac, whatItMeans: s.co_z_tego_wynika })),
  turns: g.tury.map(t => ({ questions: t.pytania.map(q => ({ text: q.tekst, tone: q.ton, requires: q.wymaga || '', answer: q.odpowiedz, mood: q.mina })) })),
  decisions: g.decyzje.map(d => ({ action: d.akcja, reaction: d.reakcja, gain: d.zysk, loss: d.strata, echoAfterDays: d.echo.za_dni || 1, echoForm: d.echo.forma, echoText: d.echo.tekst })),
}));
w('Data/guests.json', { guests });
// items.json: rzeczy "wypełniacz" + rzeczy gości; rozmiar sprite'a z meta (px)
const itemIds = new Set([...FILL, ...D.map(g => g.sprite)]);
w('Data/items.json', { items: [...itemIds].map(id => ({ id, width: (meta[id] || nowe[id] || [0, 0])[0], height: (meta[id] || nowe[id] || [0, 0])[1], isFiller: FILL.includes(id) })) });
w('Data/calendar.json', { lastDay: LASTDAY, stormDays: STORM_DAYS, lines: LINES.map(Number), fillerPool: FILL,
  days: Object.entries(DAYS).map(([d, ids]) => ({ day: +d, guests: ids })),
  upgrades: Object.entries(UP).map(([id, cost]) => ({ id, cost })), rentPerWeek: 150, payPerGuest: 40 });
w('Assets/StreamingAssets/lang/pl.json', { entries: Object.entries(LANG).map(([key, value]) => ({ key, value })) });

// Wektory testowe PRNG: ten sam kod co w game.js (mulberry32 + hash FNV-1a z SEED)
const rng = (a) => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const hash = (SEED, s) => { let h = SEED * 2654435761 >>> 0; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const vec = [];
for (const seed of [1, 42, 1337]) for (const key of ['fill1', 'burza3', 'd1_wdowiecp4', 'd4_damahot']) {
  const h = hash(seed, key), r = rng(h); vec.push({ seed, key, hash: h, first: [r(), r(), r()].map(x => +x.toFixed(10)) });
}
w('Data/rng_vectors.json', { vectors: vec });
console.log('OK:', guests.length, 'gości,', itemIds.size, 'rzeczy,', Object.keys(LANG).length, 'kluczy pl.json,', vec.length, 'wektorów');
