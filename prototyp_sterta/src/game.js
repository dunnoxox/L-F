(() => {
'use strict';
const { Engine, Bodies, Body, Composite, Constraint, Vertices } = Matter;
const A = window.A, W = 1920, H = 1080, RES = 1.5;
const $ = id => document.getElementById(id);
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------- dane ----------
const COLORS = [
  { id: 'zolty', hex: '#F5C518', m: 'żółty', f: 'żółtą', ma: 'żółtego', n: 'żółte', ink: 0 },
  { id: 'niebieski', hex: '#2F6FDE', m: 'niebieski', f: 'niebieską', ma: 'niebieskiego', n: 'niebieskie', ink: 1 },
  { id: 'rozowy', hex: '#EE7FA8', m: 'różowy', f: 'różową', ma: 'różowego', n: 'różowe', ink: 0 },
  { id: 'limonkowy', hex: '#7BC043', m: 'limonkowy', f: 'limonkową', ma: 'limonkowego', n: 'limonkowe', ink: 0 },
  { id: 'fioletowy', hex: '#8A5BD1', m: 'fioletowy', f: 'fioletową', ma: 'fioletowego', n: 'fioletowe', ink: 1 },
  { id: 'pomaranczowy', hex: '#F08A24', m: 'pomarańczowy', f: 'pomarańczową', ma: 'pomarańczowego', n: 'pomarańczowe', ink: 0 },
  { id: 'turkusowy', hex: '#23A6A6', m: 'turkusowy', f: 'turkusową', ma: 'turkusowego', n: 'turkusowe', ink: 0 },
];
const MARKS = Object.keys(A.marks);
const MARKTXT = { 'kropka': 'z kropką', 'gwiazdka': 'z gwiazdką', 'pasek': 'z paskiem', 'trójkąt': 'z trójkątem', 'krzyżyk': 'z krzyżykiem', 'fala': 'z falą', 'serce': 'z sercem', 'kółko': 'z kółkiem' };
const OPEN = ['Poproszę {x}.', 'Oddajcie mi {x}!', 'Wydajcie {x}, błagam.', 'Mam tu gdzieś {x}.', 'Samolot odleciał, bagaż został. Dajcie {x}.', 'Dzień dobry, {x} poproszę.', 'Halo, okienko? {x}!'];
const TAIL = [
  'Lot mam za kwadrans. Albo miałem wczoraj.', 'Bez tego pilot nie wystartuje.', 'Teściowa mi nie daruje.',
  'Przysięgam na bagaż podręczny.', 'W środku jest kanapka z zeszłej zimy.', 'To prezent dla kozy. Proszę nie pytać.',
  'Pachnie jeszcze wyspą.', 'Leciało ze mną przez trzy przesiadki.', 'Babcia sama to znakowała.',
  'Bez tego nie wpuszczą mnie do domu.', 'Znak malowałem po ciemku, ale pamiętam.', 'Pingwin na płycie widział, jak spadło.',
  'Jestem tu od wtorku. Który dziś?', 'To pamiątka po wujku z wieży kontrolnej.', 'Na pewno moje. Na dziewięćdziesiąt procent.',
  'Stewardesa mówiła, że u was wszystko się znajduje.', 'Szybko, bo samolot już macha skrzydłem.', 'Nie mam paragonu, mam za to szczerą twarz.',
];
const MUMBLE = ['clerk', 'young_woman', 'old_man', 'young_woman', 'child', 'old_woman', 'heavy_man', 'teen', 'teen', 'old_man', 'young_woman', 'heavy_man', 'clerk', 'old_woman', 'teen', 'young_woman'];

// ---------- obrazy ----------
const IMG = {};
function loadImg(key, src) { return new Promise(r => { const i = new Image(); i.onload = () => { IMG[key] = i; r(); }; i.src = src; }); }
const loading = [];
A.shapes.forEach(s => { loading.push(loadImg(s.id + '_f', s.f), loadImg(s.id + '_o', s.o)); });
MARKS.forEach(m => loading.push(loadImg('m_' + m, A.marks[m])));
A.people.forEach((p, i) => loading.push(loadImg('p' + i, p)));
Object.keys(A.misc).forEach(k => loading.push(loadImg(k, A.misc[k])));

const mkc = (w, h) => { const c = document.createElement('canvas'); c.width = Math.ceil(w); c.height = Math.ceil(h); return c; };
const markCache = {};
function markCanvas(mark, ink) {
  const k = mark + ink; if (markCache[k]) return markCache[k];
  const im = IMG['m_' + mark], c = mkc(im.width, im.height), x = c.getContext('2d');
  x.drawImage(im, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = ink ? '#EDE6D3' : '#1B2440'; x.fillRect(0, 0, c.width, c.height);
  return markCache[k] = c;
}
const markSize = s => clamp(s.ar * 1.5, 40, 74);
function makeSprite(shape, color, mark) {
  const f = IMG[shape.id + '_f'], o = IMG[shape.id + '_o'], c = mkc(f.width, f.height), x = c.getContext('2d');
  x.drawImage(f, 0, 0);
  x.globalCompositeOperation = 'multiply'; x.fillStyle = color.hex; x.fillRect(0, 0, c.width, c.height);
  x.globalCompositeOperation = 'destination-in'; x.drawImage(f, 0, 0);
  x.globalCompositeOperation = 'source-atop';
  if (mark) { const ms = markSize(shape) * RES, mc = markCanvas(mark, color.ink), k = ms / Math.max(mc.width, mc.height);
    x.drawImage(mc, shape.ax * RES - mc.width * k / 2, shape.ay * RES - mc.height * k / 2, mc.width * k, mc.height * k); }
  x.globalCompositeOperation = 'source-over';
  x.drawImage(o, 0, 0);
  return c;
}
function dimSprite(src) {
  const c = mkc(src.width, src.height), x = c.getContext('2d'); x.drawImage(src, 0, 0);
  x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(27,36,64,.15)'; x.fillRect(0, 0, c.width, c.height); return c;
}
function makeDust(shape) {
  const dr = markSize(shape) * 0.74 + 6, S = dr * 2 * RES, c = mkc(S, S), x = c.getContext('2d'), R = S / 2;
  x.fillStyle = '#b9ae97'; x.beginPath();
  for (let i = 0; i <= 18; i++) { const a = i / 18 * Math.PI * 2, r = R * rnd(.8, 1); x.lineTo(R + Math.cos(a) * r, R + Math.sin(a) * r); }
  x.fill();
  for (let i = 0; i < 90; i++) { const a = rnd(0, 6.28), r = R * Math.sqrt(Math.random()) * .95;
    x.fillStyle = pick(['rgba(140,128,104,.5)', 'rgba(210,200,178,.55)', 'rgba(120,112,96,.35)']);
    x.beginPath(); x.arc(R + Math.cos(a) * r, R + Math.sin(a) * r, rnd(2, 9), 0, 6.28); x.fill(); }
  // kurz tylko na powierzchni rzeczy
  x.globalCompositeOperation = 'destination-in';
  x.drawImage(IMG[shape.id + '_f'], -(shape.ax - dr) * RES, -(shape.ay - dr) * RES);
  const o = IMG[shape.id + '_o']; x.globalCompositeOperation = 'source-over';
  return { c, dr };
}

// ---------- dzwiek ----------
let AC = null; const BUF = {}; const lastPlay = {};
function initAudio() {
  try {
    AC = new (window.AudioContext || window.webkitAudioContext)();
    Object.keys(A.snd).forEach(k => {
      const b = atob(A.snd[k].split(',')[1]), u = new Uint8Array(b.length);
      for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
      AC.decodeAudioData(u.buffer, buf => { BUF[k] = buf; }, () => {});
    });
  } catch (e) { AC = null; }
}
function sfx(name, vol = 1, rate = 1, cooldown = 0, maxDur = 0) {
  if (!AC || !BUF[name]) return;
  const now = performance.now(); if (cooldown && now - (lastPlay[name] || 0) < cooldown) return; lastPlay[name] = now;
  const s = AC.createBufferSource(), g = AC.createGain(); s.buffer = BUF[name]; s.playbackRate.value = rate * rnd(.95, 1.05);
  g.gain.value = vol; s.connect(g); g.connect(AC.destination); s.start();
  if (maxDur) { g.gain.setValueAtTime(vol, AC.currentTime + maxDur * .7); g.gain.linearRampToValueAtTime(0, AC.currentTime + maxDur); s.stop(AC.currentTime + maxDur + .05); }
}

// ---------- swiat ----------
const BIN_L = 40, BIN_R = 990, FLOOR = 1040, TRAY_L = 1000, TRAY_R = 1330, TRAY_Y = 500, SHELF = { x: 40, y: 250, w: 380, h: 26 };
const CAT_WALL = 1, CAT_BACK = 2, CAT_FRONT = 4;
let engine, items = [], shelfBody = null;
const stat = (x, y, w, h) => Bodies.rectangle(x + w / 2, y + h / 2, w, h, { isStatic: true, friction: .8, collisionFilter: { category: CAT_WALL } });
function buildWorld() {
  engine = Engine.create({ positionIterations: 10, velocityIterations: 8 });
  engine.gravity.y = 1.15;
  Composite.add(engine.world, [
    stat(BIN_L - 200, FLOOR, TRAY_R - BIN_L + 400, 200),       // podloga
    stat(BIN_L - 200, -6000, 200, 7200),                        // lewa sciana
    stat(TRAY_R, -6000, 200, 7200),                             // prawa sciana (szyba okienka)
    stat(BIN_R, TRAY_Y, TRAY_R - BIN_R + 10, FLOOR - TRAY_Y),   // lada
  ]);
  items = [];
}
function addShelfAndCeiling() {
  shelfBody = stat(SHELF.x, SHELF.y, SHELF.w, SHELF.h);
  Composite.add(engine.world, [shelfBody, stat(BIN_L - 200, -260, TRAY_R - BIN_L + 400, 200)]);
}
let uid = 0;
function spawnItem(shape, color, mark, x, y, layer) {
  const c = Vertices.centre(shape.hull.map(p => ({ x: p[0], y: p[1] })));
  const body = Bodies.fromVertices(x, y, [shape.hull.map(p => ({ x: p[0], y: p[1] }))], {
    friction: .55, frictionStatic: .8, restitution: .04, frictionAir: .012, density: .0012,
    collisionFilter: { category: layer ? CAT_FRONT : CAT_BACK, mask: CAT_WALL | (layer ? CAT_FRONT : CAT_BACK) },
  });
  Body.setAngle(body, rnd(-1.2, 1.2));
  const spr = makeSprite(shape, color, mark), d = makeDust(shape);
  const it = { id: ++uid, shape, color, mark, layer, body, off: c, spr, dim: dimSprite(spr), dust: d.c, dr: d.dr, wiped: 0, clean: false, hs: 1, hv: 0, glow: 0 };
  body.plugin.item = it; items.push(it); Composite.add(engine.world, body); return it;
}
function removeItem(it) { Composite.remove(engine.world, it.body); items.splice(items.indexOf(it), 1); }
const famKey = (s, c) => s.id + '|' + c.id;
function family(shape, color) { return items.filter(i => i.shape === shape && i.color === color); }
function freeMark(shape, color) { const used = family(shape, color).map(i => i.mark); const f = MARKS.filter(m => !used.includes(m)); return f.length ? pick(f) : null; }

// ---------- zmiana ----------
const G = { state: 'menu', shift: 1, money: 0, streak: 0, guestNo: 0, guests: 10, guest: null, stats: null, t: 0 };
window.G = G; G.items = () => items;
let shapesInPlay = [], colorsInPlay = [];
function cfg(n) { return { guests: 8 + 2 * n, items: Math.min(45 + 5 * n, 60), patience: 58 * Math.pow(.9, n - 1), shapes: Math.min(7 + n, 12), colors: Math.min(3 + n, 7), maxFam: Math.min(2 + n, 5) }; }
function startShift(n) {
  const C = cfg(n); G.shift = n; G.cfg = C; G.guests = C.guests; G.guestNo = 0; G.streak = 0;
  G.stats = { ok: 0, caught: 0, cheated: 0, wrongRefuse: 0, timeout: 0, wrongGive: 0, earned: 0 };
  buildWorld();
  shapesInPlay = shuffle(A.shapes.slice()).slice(0, C.shapes); colorsInPlay = COLORS.slice(0, C.colors);
  // rodziny blizniakow + pojedyncze
  const combos = shuffle(shapesInPlay.flatMap(s => colorsInPlay.map(c => [s, c]))), plan = [];
  let left = C.items, ci = 0;
  while (left > 0 && ci < combos.length) {
    const size = Math.min(left, ci < 13 ? (ci < 5 ? C.maxFam : 2) : 1), [s, c] = combos[ci++], ms = shuffle(MARKS.slice());
    for (let k = 0; k < size; k++) plan.push([s, c, ms[k]]); left -= size;
  }
  shuffle(plan).forEach((p, i) => spawnItem(p[0], p[1], p[2], rnd(BIN_L + 110, BIN_R - 110), -150 - i * 90, i % 2));
  const tmp = stat(BIN_R, -6000, 60, 6000 + TRAY_Y); Composite.add(engine.world, tmp);
  for (let i = 0; i < 620; i++) Engine.update(engine, 1000 / 60);
  Composite.remove(engine.world, tmp); addShelfAndCeiling();
  // kolejnosc klamcow: ok. 30%, pierwszy gosc zawsze uczciwy
  const liars = Math.round(C.guests * .3), seq = shuffle(Array.from({ length: C.guests - 1 }, (_, i) => i < liars));
  G.liarSeq = [false, ...seq];
  $('hShift').textContent = n; setMoney(0);
  G.state = 'idle'; nextGuest();
}
function delivery(n) {
  const b = $('banner'); b.classList.add('on'); setTimeout(() => b.classList.remove('on'), 1400);
  sfx('drawer_big', .7);
  for (let k = 0; k < n; k++) setTimeout(() => {
    let s, c, m;
    for (let tries = 0; tries < 20 && !m; tries++) {
      if (Math.random() < .65 && items.length) { const base = pick(items); s = base.shape; c = base.color; } else { s = pick(shapesInPlay); c = pick(colorsInPlay); }
      m = freeMark(s, c);
    }
    if (m) { const it = spawnItem(s, c, m, rnd(BIN_L + 140, BIN_R - 380), -120, Math.random() < .5 ? 1 : 0); Body.setVelocity(it.body, { x: rnd(-2, 2), y: 12 }); }
    if (k === 1) { sfx('pile_collapse', .6); trauma = Math.min(1, trauma + .4); }
  }, 250 + k * 170);
}

// ---------- goscie ----------
function nextGuest() {
  if (G.guestNo >= G.guests) return endShift();
  if (G.guestNo > 0 && (G.guestNo % 3 === 0 || items.length < G.cfg.items - 7)) delivery(Math.min(6, Math.max(3, G.cfg.items - items.length)));
  const liar = G.liarSeq[G.guestNo]; G.guestNo++;
  // cel: wolimy rodziny z blizniakami
  const fams = {}; items.forEach(i => (fams[famKey(i.shape, i.color)] = fams[famKey(i.shape, i.color)] || []).push(i));
  let list = Object.values(fams); const multi = list.filter(f => f.length > 1);
  if (multi.length && Math.random() < .8) list = multi;
  if (liar) list = list.filter(f => f.length < MARKS.length);
  const fam = pick(list), shape = fam[0].shape, color = fam[0].color;
  const mark = liar ? freeMark(shape, color) : pick(fam).mark;
  let person; do { person = Math.floor(Math.random() * A.people.length); } while (G.guest && person === G.guest.person);
  const patience = G.cfg.patience + 9 * (fam.length - 1);
  G.guest = { liar, shape, color, mark, count: fam.length, person, patience, max: patience, x: 2100, y: 0, vy: 0, mood: 0 };
  const acc = `${color[shape.gen]} ${shape.acc} ${MARKTXT[mark]}`;
  $('bubble').innerHTML = pick(OPEN).replace('{x}', acc).replace(/^(.)/, m => m.toUpperCase()).replace(/([.!?] |^)([a-ząćęłńóśźż])/g, (m, a, b) => a + b.toUpperCase()) + `<small>${pick(TAIL)}</small>`;
  const row = $('cardRow'); row.innerHTML = '';
  row.appendChild(makeSprite(shape, color, null));
  const plus = document.createElement('span'); plus.className = 'plus d'; plus.textContent = '+'; row.appendChild(plus);
  const mc = mkc(110, 110), mx = mc.getContext('2d'), src = markCanvas(mark, 0), k = 100 / Math.max(src.width, src.height);
  mx.drawImage(src, 55 - src.width * k / 2, 55 - src.height * k / 2, src.width * k, src.height * k); row.appendChild(mc);
  $('cardCnt').textContent = fam.length === 1 ? 'W stercie: 1 taka rzecz' : `W stercie: ${fam.length} ${fam.length >= 5 ? 'bliźniaków' : 'bliźniaki'}`;
  $('hGuest').textContent = `${G.guestNo}/${G.guests}`;
  $('stampmark').classList.remove('on'); $('verdict').textContent = '';
  G.state = 'arrive'; G.t = 0;
  sfx('doorbell_shop', .5); sfx('steps_sneakers', .35, 1, 0, 1.2);
  setTimeout(() => { $('bubble').classList.remove('off'); $('card').classList.remove('off'); sfx('mumble_' + MUMBLE[person], .7); }, 450);
}
function setMoney(d) {
  G.money += d; if (d > 0) G.stats.earned += d;
  const m = $('money'); m.textContent = (G.money < 0 ? '−$' : '$') + Math.abs(G.money); m.classList.add('pop'); setTimeout(() => m.classList.remove('pop'), 260);
  $('hStreak').textContent = G.streak >= 2 ? `seria ×${G.streak}` : '';
}
function onTray() { return items.filter(i => i !== held && i.body.position.x > TRAY_L && i.body.position.y < TRAY_Y + 5).sort((a, b) => (b.dropT || 0) - (a.dropT || 0)); }
function hint(t, warn) { const h = $('hint'); h.textContent = t; if (warn) { h.classList.remove('warn'); void h.offsetWidth; h.classList.add('warn'); sfx('glass_tap', .5, 1, 200); } }
function stampFx(btn, txt) {
  const b = $(btn); b.classList.add('hit'); setTimeout(() => b.classList.remove('hit'), 160);
  const s = $('stampmark'); s.textContent = txt; s.classList.remove('on'); void s.offsetWidth; s.classList.add('on');
  trauma = Math.min(1, trauma + .55);
}
function resolve(kind, money, text, item) {
  const g = G.guest; G.state = 'resolve'; G.t = 0; g.result = kind; $('hint').textContent = ''; trayPick = null;
  if (money > 0) G.streak++; else G.streak = 0;
  setMoney(money);
  $('verdict').innerHTML = text + ` <span class="d" style="color:${money >= 0 ? '#6F8F72' : '#D8352A'}">${money >= 0 ? '+' : '−'}$${Math.abs(money)}</span>`;
  floatText(1560, 600, (money >= 0 ? '+$' : '−$') + Math.abs(money), money >= 0 ? '#6F8F72' : '#D8352A');
  if (item) { burst(item.body.position.x, item.body.position.y, 14, item.color.hex); removeItem(item); }
  setTimeout(() => { $('bubble').classList.add('off'); $('card').classList.add('off'); }, 900);
}
function give() {
  if (G.state !== 'wait') return;
  const t = onTray();
  if (!t.length) { $('bGive').classList.add('hit'); setTimeout(() => $('bGive').classList.remove('hit'), 160); return hint('Najpierw połóż rzecz na ladzie.', true); }
  const it = t[0], g = G.guest;
  if (!it.clean && dustLeft(it) > .35) return hint('Zetrzyj kurz. Nie wydajemy w ciemno.', true);
  sfx('handover', .9);
  if (g.liar) {
    stampFx('bGive', 'WYDANE'); G.stats.cheated++; g.mood = 2; sfx('refuse', .5);
    return resolve('cheated', -15, 'Oszust! Wyszedł z cudzą rzeczą.', it);
  }
  if (it.shape === g.shape && it.color === g.color && it.mark === g.mark) {
    stampFx('bGive', 'WYDANE'); G.stats.ok++; g.mood = 1; sfx('coins_paper_money', .6, 1, 0, 1.6);
    const tip = 8 + Math.round(8 * g.patience / g.max) + Math.min(G.streak, 5) * 2;
    return resolve('ok', tip, 'Zgadza się. Gość szczęśliwy.', it);
  }
  // nie to: gosc odrzuca rzecz z powrotem w sterte
  G.stats.wrongGive++; G.streak = 0; setMoney(0); g.patience -= 8; trauma = Math.min(1, trauma + .5);
  it.body.collisionFilter.mask = CAT_WALL | (it.layer ? CAT_FRONT : CAT_BACK);
  Body.setVelocity(it.body, { x: rnd(-26, -18), y: rnd(-20, -14) }); Body.setAngularVelocity(it.body, rnd(-.4, .4));
  sfx('refuse', .6); hint(pick(['„To nie moje!” Rzecz wraca do sterty.', '„Przecież mówiłem, jaki znak!”', '„A to co ma być?”']), true);
}
function refuse() {
  if (G.state !== 'wait') return;
  const g = G.guest;
  stampFx('bRefuse', 'ODMOWA');
  if (g.liar) { G.stats.caught++; g.result = 'trap'; sfx('trapdoor', .9); return resolve('trap', 15 + Math.min(G.streak, 5) * 2, 'Kłamczuch! Takiej rzeczy tu nie było.'); }
  G.stats.wrongRefuse++; sfx('refuse', .8); g.mood = 3;
  const real = items.find(i => i.shape === g.shape && i.color === g.color && i.mark === g.mark); if (real) real.glow = 2.2;
  resolve('wrong', -10, 'Mówił prawdę. Jego rzecz świeci w stercie.');
}
function endShift() {
  G.state = 'sum'; const s = G.stats, total = G.guests;
  const good = s.ok + s.caught, r = good / total;
  $('sumT').textContent = `Koniec zmiany ${G.shift}`;
  $('sumS').textContent = r > .89 ? 'Mistrz sterty. Dyrektor lotniska przysyła kwiaty.' : r > .69 ? 'Solidna zmiana. Sterta czuje respekt.' : r > .45 ? 'Bywało lepiej. Sterta wygrała na punkty.' : 'Sterta wygrała przez nokaut.';
  $('sumTab').innerHTML = [['Wydane właściwie', s.ok], ['Kłamcy w zapadni', s.caught], ['Oszukali Cię', s.cheated], ['Uczciwi odprawieni z kwitkiem', s.wrongRefuse], ['Nie doczekali się', s.timeout], ['Podane nie to', s.wrongGive], ['Kasa', (G.money < 0 ? '−$' : '$') + Math.abs(G.money)]]
    .map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('');
  $('sum').classList.remove('off');
}

// ---------- wskaznik ----------
const ptr = { x: 0, y: 0, px: 0, py: 0, down: false };
let trayPick = null, held = null, grab = null, hover = null, shake = 0, scale = 1;
function fit() { scale = Math.min(innerWidth / W, innerHeight / H); const st = $('stage'); st.style.transform = `translate(${(innerWidth - W * scale) / 2}px,${(innerHeight - H * scale) / 2}px) scale(${scale})`; }
addEventListener('resize', fit); fit();
function toWorld(e) { const r = $('stage').getBoundingClientRect(); return { x: (e.clientX - r.left) / scale, y: (e.clientY - r.top) / scale }; }
function topAt(p) {
  for (const layer of [1, 0]) for (let i = items.length - 1; i >= 0; i--) { const it = items[i]; if (it.layer === layer && Vertices.contains(it.body.vertices, p)) return it; }
  return null;
}
function toLocal(it, p) { const b = it.body, dx = p.x - b.position.x, dy = p.y - b.position.y, c = Math.cos(-b.angle), s = Math.sin(-b.angle); return { x: dx * c - dy * s + it.off.x, y: dx * s + dy * c + it.off.y }; }
function dustLeft(it) { // przyblizony udzial kurzu nad znakiem
  const x = it.dust.getContext('2d'), n = it.dust.width, r = Math.floor(n * .3), d = x.getImageData(n / 2 - r, n / 2 - r, r * 2, r * 2).data; let a = 0;
  for (let i = 3; i < d.length; i += 16) a += d[i]; return a / (d.length / 16) / 255;
}
function wipe(it, p, strength) {
  const l = toLocal(it, p), dx = l.x - it.shape.ax, dy = l.y - it.shape.ay;
  if (Math.hypot(dx, dy) > it.dr + 14 || it.clean) return false;
  const x = it.dust.getContext('2d'), cx = (dx + it.dr) * RES, cy = (dy + it.dr) * RES, R = 20 * RES;
  const g = x.createRadialGradient(cx, cy, 2, cx, cy, R); g.addColorStop(0, `rgba(0,0,0,${strength})`); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.globalCompositeOperation = 'destination-out'; x.fillStyle = g; x.beginPath(); x.arc(cx, cy, R, 0, 6.28); x.fill(); x.globalCompositeOperation = 'source-over';
  it.wiped++; if (it.wiped % 5 === 0 && dustLeft(it) < .2) cleaned(it);
  return true;
}
function cleaned(it) { if (it.clean) return; it.clean = true; it.dust.getContext('2d').clearRect(0, 0, it.dust.width, it.dust.height); it.hv += .12; sfx('glass_tap', .25, 1.5, 80); burst(it.body.position.x, it.body.position.y, 8, '#fff'); }
const cv = $('c'), ctx = cv.getContext('2d');
cv.addEventListener('pointerdown', e => {
  if (G.state === 'menu' || G.state === 'sum') return;
  const p = toWorld(e); ptr.x = ptr.px = p.x; ptr.y = ptr.py = p.y; ptr.down = true; cv.setPointerCapture(e.pointerId);
  const it = topAt(p); if (!it) return;
  held = it; items.splice(items.indexOf(it), 1); items.push(it);
  const l = toLocal(it, p);
  grab = Constraint.create({ pointA: { x: p.x, y: p.y }, bodyB: it.body, pointB: rot({ x: l.x - it.off.x, y: l.y - it.off.y }, it.body.angle), stiffness: .09, damping: .12, length: 0 });
  Composite.add(engine.world, grab); it.body.frictionAir = .06; it.hv += .1; shake = 0;
  sfx(Math.random() < .5 ? 'slide_light' : 'cloth_inside_bag', .45, 1, 120, .9);
});
function rot(v, a) { const c = Math.cos(a), s = Math.sin(a); return { x: v.x * c - v.y * s, y: v.x * s + v.y * c }; }
cv.addEventListener('pointermove', e => {
  const p = toWorld(e), dx = p.x - ptr.x, dy = p.y - ptr.y, d = Math.hypot(dx, dy);
  // potrzasanie: zmiana kierunku ruchu trzymanej rzeczy
  if (held && d > 3) { if (dx * ptr.ldx + dy * ptr.ldy < 0 && d > 6) shake = Math.min(1.5, shake + .38); ptr.ldx = dx; ptr.ldy = dy; }
  ptr.x = p.x; ptr.y = p.y;
  if (!held && G.state !== 'menu' && d > 1.5) { const it = topAt(p); hover = it; if (it && wipe(it, p, Math.min(.6, .16 + d * .03))) { if (Math.random() < .5) dustPuff(p.x, p.y); sfx('cloth_inside_bag', .12, 1.6, 900, .5); } }
  cv.style.cursor = held ? 'grabbing' : (hover ? 'grab' : 'default');
});
function release() {
  ptr.down = false; if (!held) return;
  Composite.remove(engine.world, grab); held.body.frictionAir = .012; const v = held.body.velocity, sp = Math.hypot(v.x, v.y);
  if (sp > 38) Body.setVelocity(held.body, { x: v.x * 38 / sp, y: v.y * 38 / sp });
  held.dropT = performance.now(); held = null; grab = null;
}
cv.addEventListener('pointerup', release); cv.addEventListener('pointercancel', release);
$('bGive').onclick = give; $('bRefuse').onclick = refuse;
addEventListener('keydown', e => {
  if (e.repeat) return;
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (G.state === 'menu') $('bStart').click(); else if (G.state === 'sum') $('bNext').click(); else give(); }
  if (e.key === 'x' || e.key === 'X' || e.key === 'Backspace') { e.preventDefault(); refuse(); }
});
$('bStart').onclick = () => { initAudio(); $('start').classList.add('off'); startShift(1); };
$('bNext').onclick = () => { $('sum').classList.add('off'); startShift(G.shift + 1); };

// ---------- czasteczki ----------
let parts = [], floats = [], trauma = 0;
function dustPuff(x, y) { parts.push({ x, y, vx: rnd(-1.5, 1.5), vy: rnd(-2.2, -.4), life: rnd(.4, .8), max: .8, r: rnd(3, 8), col: '#b7ab92', g: .04 }); }
function burst(x, y, n, col) { for (let i = 0; i < n; i++) { const a = rnd(0, 6.28), s = rnd(2, 9); parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2, life: rnd(.4, .9), max: .9, r: rnd(4, 9), col, g: .3 }); } }
function floatText(x, y, t, col) { floats.push({ x, y, t, col, life: 1.3 }); }

// ---------- petla ----------
let last = performance.now(), acc = 0, energyPrev = 0;
function step(dt) {
  // fizyka
  if (held) {
    grab.pointA.x = ptr.x; grab.pointA.y = ptr.y; Body.setAngularVelocity(held.body, held.body.angularVelocity * .9);
    if (shake > .25 && !held.clean) { // strzepywanie kurzu
      const x = held.dust.getContext('2d'); x.globalCompositeOperation = 'destination-out'; x.fillStyle = `rgba(0,0,0,${.09 * shake})`; x.fillRect(0, 0, held.dust.width, held.dust.height); x.globalCompositeOperation = 'source-over';
      if (Math.random() < .5) dustPuff(held.body.position.x + rnd(-30, 30), held.body.position.y + rnd(-30, 30));
      held.wiped++; if (held.wiped % 8 === 0 && dustLeft(held) < .2) cleaned(held);
    }
    shake = Math.max(0, shake - dt * 1.6);
  }
  Engine.update(engine, 1000 / 120); Engine.update(engine, 1000 / 120);
  let energy = 0;
  for (const it of items) {
    const b = it.body, v = b.velocity, sp = Math.hypot(v.x, v.y);
    if (sp > 45) Body.setVelocity(b, { x: v.x * 45 / sp, y: v.y * 45 / sp });
    if (it !== held) energy += sp * sp;
    if (b.position.y > FLOOR + 150 || b.position.x < BIN_L - 80 || b.position.x > TRAY_R + 80) { Body.setPosition(b, { x: rnd(300, 700), y: 100 }); Body.setVelocity(b, { x: 0, y: 0 }); }
    const target = (it === held ? 1.07 : it === hover && !held ? 1.045 : 1);
    it.hv += (target - it.hs) * .28; it.hv *= .68; it.hs += it.hv;
    if (it.glow > 0) it.glow -= dt;
  }
  if (energy - energyPrev > 900 && energy > 1500) { sfx('pile_collapse', clamp(energy / 9000, .25, .8), 1, 1500); trauma = Math.min(1, trauma + clamp(energy / 30000, .08, .35)); }
  else if (energy > 500 && held) sfx('pile_dig', .3, 1, 5200);
  energyPrev = energy * .9 + energyPrev * .1;
  trauma = Math.max(0, trauma - dt * 1.3);
  // gosc
  const g = G.guest; G.t += dt;
  if (g) {
    if (G.state === 'arrive') { g.x += (1800 - g.x) * .14; if (G.t > .7) { G.state = 'wait'; hint('Znajdź rzecz i połóż ją na ladzie.'); } }
    else if (G.state === 'wait') {
      g.patience -= dt; g.x += (1800 - g.x) * .14;
      if (g.patience <= 0) { G.stats.timeout++; sfx('refuse', .5); g.mood = 3; resolve('timeout', -5, 'Nie doczekał się i poszedł.'); }
      const t = onTray(); if (G.state === 'wait' && !$('hint').classList.contains('warn')) $('hint').textContent = t.length ? (t.length > 1 ? 'Wydasz rzecz położoną jako ostatnią (świeci).' : 'Na ladzie leży rzecz. WYDAJ?') : 'Znajdź rzecz i połóż ją na ladzie.';
      trayPick = t[0] || null;
      $('bGive').classList.toggle('dim', !t.length);
    } else if (G.state === 'resolve') {
      if (g.result === 'trap') { if (G.t > .35) { g.vy += 2.2; g.y += g.vy; } }
      else if (G.t > .7) g.x += (2150 - g.x) * .08;
      if (G.t > 1.9) { G.state = 'idle'; $('hint').textContent = ''; nextGuest(); }
    }
    const f = clamp(g.patience / g.max, 0, 1), bar = $('barI'); bar.style.transform = `scaleX(${f})`; bar.style.background = f > .5 ? '#6F8F72' : f > .25 ? '#F5C518' : '#F08A24';
    if (G.state === 'wait' && f < .25 && Math.floor(g.patience) !== Math.floor(g.patience + dt)) sfx('glass_tap', .35, .8);
  }
  for (const p of parts) { p.x += p.vx; p.y += p.vy; p.vy += p.g; p.life -= dt; }
  parts = parts.filter(p => p.life > 0);
  for (const f of floats) { f.y -= 1.4; f.life -= dt; }
  floats = floats.filter(f => f.life > 0);
}
function drawItem(it) {
  const b = it.body; ctx.save(); ctx.translate(b.position.x, b.position.y); ctx.rotate(b.angle); ctx.scale(it.hs, it.hs);
  if (it === held) { ctx.shadowColor = 'rgba(27,36,64,.45)'; ctx.shadowBlur = 22; ctx.shadowOffsetY = 12; }
  if (it.glow > 0 || (it === trayPick && G.state === 'wait')) { ctx.shadowColor = '#F5C518'; ctx.shadowBlur = it.glow > 0 ? 50 : 26; }
  ctx.translate(-it.off.x, -it.off.y); ctx.scale(1 / RES, 1 / RES);
  ctx.drawImage(it.layer || it === held ? it.spr : it.dim, 0, 0);
  if (it.glow > 0) ctx.drawImage(it.spr, 0, 0);
  ctx.shadowColor = 'transparent';
  if (!it.clean) ctx.drawImage(it.dust, (it.shape.ax - it.dr) * RES, (it.shape.ay - it.dr) * RES);
  ctx.restore();
}
function draw() {
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, H);
  const sh = trauma * trauma * 16; ctx.translate(rnd(-sh, sh), rnd(-sh, sh));
  // tlo
  ctx.fillStyle = '#EDE6D3'; ctx.fillRect(-20, -20, W + 40, H + 40);
  ctx.fillStyle = '#dfd6bd'; ctx.fillRect(BIN_L, 300, BIN_R - BIN_L, FLOOR - 300);
  ctx.fillStyle = '#6F8F72'; ctx.fillRect(-20, FLOOR, TRAY_R + 20, 80);
  ctx.strokeStyle = '#1B2440'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(BIN_L, 300); ctx.lineTo(BIN_L, FLOOR); ctx.lineTo(BIN_R, FLOOR); ctx.stroke();
  ctx.fillStyle = 'rgba(27,36,64,.05)'; for (let y = 340; y < FLOOR; y += 70) ctx.fillRect(BIN_L, y, BIN_R - BIN_L, 3);
  ctx.drawImage(IMG.polka, SHELF.x - 6, SHELF.y - 4, SHELF.w + 12, 74);
  ctx.drawImage(IMG.lada, BIN_R - 4, TRAY_Y - 8, TRAY_R - BIN_R + 14, FLOOR - TRAY_Y + 12);
  // panel goscia
  ctx.fillStyle = '#e6dec8'; ctx.fillRect(TRAY_R + 8, -20, W - TRAY_R + 20, H + 40);
  ctx.fillStyle = '#1B2440'; ctx.fillRect(TRAY_R + 4, -20, 8, H + 40);
  const g = G.guest;
  if (g && G.state !== 'idle' && G.state !== 'sum') {
    const im = IMG['p' + g.person]; ctx.save(); ctx.beginPath(); ctx.rect(TRAY_R + 12, 0, W, 568); ctx.clip();
    const bob = G.state === 'wait' ? Math.sin(performance.now() / 300) * 3 * (g.patience / g.max < .3 ? 3 : 1) : 0;
    ctx.drawImage(im, g.x - im.width / 2, 568 - im.height + g.y + bob + 6); ctx.restore();
    if (g.result === 'trap' && G.t > .3) { ctx.fillStyle = '#1B2440'; ctx.fillRect(1720, 560, 170, 12); }
  }
  // rzeczy
  for (const it of items) if (!it.layer && it !== held) drawItem(it);
  for (const it of items) if (it.layer && it !== held) drawItem(it);
  if (held) drawItem(held);
  for (const p of parts) { ctx.globalAlpha = clamp(p.life / p.max, 0, 1); ctx.fillStyle = p.col; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fill(); }
  ctx.globalAlpha = 1; ctx.font = "54px 'Lilita One', sans-serif"; ctx.textAlign = 'center';
  for (const f of floats) { ctx.globalAlpha = clamp(f.life, 0, 1); ctx.lineWidth = 8; ctx.strokeStyle = '#EDE6D3'; ctx.strokeText(f.t, f.x, f.y); ctx.fillStyle = f.col; ctx.fillText(f.t, f.x, f.y); }
  ctx.globalAlpha = 1;
}
function loop(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now; acc += dt;
  if (G.state !== 'menu' && G.state !== 'sum') { let n = 0; while (acc >= 1 / 60 && n++ < 3) { step(1 / 60); acc -= 1 / 60; } if (n >= 3) acc = 0; draw(); } else acc = 0;
  requestAnimationFrame(loop);
}
Promise.all(loading).then(() => { buildWorld(); requestAnimationFrame(loop); });
})();
