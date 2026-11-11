'use strict';

const fx = window.LF_FX;
const ui = id => document.getElementById(id);
const stage = ui('stage'), guest = ui('guest'), item = ui('item'), glass = ui('glass');
const spriteBase = '../sprites/ppl/';
const media = matchMedia('(prefers-reduced-motion: reduce)');
const button = (parent, text, activate, title = '') => {
  const node = document.createElement('button');
  node.textContent = text;
  node.title = title;
  node.addEventListener('click', activate);
  ui(parent).append(node);
  return node;
};

function sizeScene() {
  stage.style.transform = `scale(${ui('viewport').clientWidth / 1536})`;
}
new ResizeObserver(sizeScene).observe(ui('viewport'));
sizeScene();
function mountGuest() {
  const profile = ui('character').value;
  guest.style.backgroundImage = ui('enabled').checked ? 'none' : `url("${spriteBase}${profile}_neutralna.jpg")`;
  fx.guest.mount(guest, { profile, spriteBase });
}
function setBackground() {
  stage.style.backgroundImage = `url("../sprites/bg/${ui('background').value}.jpg")`;
}
function resetScene() {
  fx.stop();
  mountGuest();
  setBackground();
}
fx.init({ stage });
fx.onCue(name => { ui('cue').textContent = name; });
ui('reduced').checked = media.matches;
media.addEventListener('change', event => { ui('reduced').checked = event.matches; resetScene(); });
ui('character').onchange = resetScene;
ui('background').onchange = resetScene;
ui('seed').onchange = () => { fx.seed(Number(ui('seed').value)); resetScene(); };
ui('intensity').oninput = event => fx.setIntensity(Number(event.target.value));
ui('flashes').onchange = event => fx.setFlashes(!event.target.checked);
ui('enabled').onchange = event => { fx.setEnabled(event.target.checked); resetScene(); };
ui('reduced').onchange = event => { fx.setReduced(event.target.checked); resetScene(); };

const cases = {
  shake: [null, { preset: 'thunder' }],
  'guest.liar_tell': [guest, { lie: true }],
  'guest.enter': [guest, { from: 'left' }],
  'item.pull': [item], 'item.hand_over': [item],
  'item.inspect_in': [item], 'item.inspect_out': [item], 'item.reject_push': [item],
  'decide.give': [item], 'decide.keep': [item],
  'pile.dig': [ui('desk')], 'pile.collapse': [ui('desk')],
  'toast.pop': [ui('toast')],
  'cash.roll': [ui('cash'), { from: 120, to: 140, format: amount => `${amount} $` }],
  'day.start': [null, { label: 'Dzień 1', holdMs: 700 }]
};
for (const { name, description } of fx.list()) {
  const control = button('effects', name, () => {
    const [target, options] = cases[name] || [name.startsWith('button.') ? control : null];
    fx.play(name, target, options);
  }, description);
}

resetScene();

let sequence = 0;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const handoff = { dx: -160, dy: -208 };
cases['item.hand_over'] = [item, handoff];
cases['decide.give'] = [item, handoff];

function setupAmbient() {
  fx.rain.setLevel(2);
  fx.ambient.start('lamp', { mode: 'buzz' });
  fx.ambient.start('dust');
  fx.ambient.start('tram_light');
  fx.clock.mount(ui('clock'), { hh: 23, mm: 40, size: 106 });
}
function freshScene() {
  sequence++;
  item.hidden = false;
  guest.hidden = false;
  item.style.translate = '';
  resetScene();
  setupAmbient();
}
for (const id of ['character', 'background', 'seed', 'enabled', 'reduced']) {
  const previous = ui(id).onchange;
  ui(id).onchange = event => { previous(event); freshScene(); };
}
media.addEventListener('change', freshScene);
for (const level of [0, 1, 2, 3]) button('ambientControls', `Deszcz ${level}`, () => fx.rain.setLevel(level));
for (const mode of ['steady','buzz','flicker','dying','out','on']) {
  button('ambientControls', `Lampa · ${mode}`, () => fx.ambient.set('lamp', { mode }));
}
button('ambientControls', 'Odtwórz scenę', freshScene);
button('ambientControls', 'Zatrzymaj efekty', () => { sequence++; fx.stop(); fx.guest.unmount(); });
button('ambientControls', 'Przyspiesz zegar', () => fx.clock.advance(25));
button('ambientControls', 'Głos postaci', () => fx.guest.speak({ chars: 80, cps: 55 }));

async function visit(refused) {
  ui('character').value = 'wdowiec';
  ui('background').value = 'T1';
  freshScene();
  const current = sequence;
  const steps = [
    () => fx.play('guest.enter', guest, { from: 'left', weight: 'limp' }).finished,
    () => fx.guest.speak({ chars: 105, cps: 48 }).finished,
    () => fx.play('guest.tic', guest).finished,
    () => wait(1150),
    () => fx.play('item.pull', item).finished,
    () => wait(950),
    () => fx.play('item.hand_over', item, handoff).finished.then(() => {
      if (current === sequence) item.style.translate = `${handoff.dx}px ${handoff.dy}px`;
    }),
    () => wait(800),
    () => fx.play(refused ? 'decide.refuse' : 'decide.give', refused ? null : item, { dx: 0, dy: -90 }).finished,
    () => { if (!refused) item.hidden = true; },
    () => fx.play('guest.leave', guest, { refused }).finished,
    () => { guest.hidden = true; },
    () => fx.clock.advance(25).finished
  ];
  for (const step of steps) {
    if (current !== sequence) return;
    await step();
  }
}
async function storm() {
  freshScene();
  const current = sequence;
  fx.rain.setLevel(3);
  await wait(1900);
  if (current !== sequence) return;
  const flinch = fx.onCue(name => { if (name === 'thunder') fx.play('guest.flinch', guest); });
  try { await fx.play('storm.flash').finished; } finally { flinch(); }
  if (current !== sequence) return;
  await fx.play('power.out').finished;
  await wait(2200);
  if (current !== sequence) return;
  await fx.play('power.on').finished;
}
button('scenes', 'Wizyta · wydaj', () => visit(false));
button('scenes', 'Wizyta · odmów', () => visit(true));
button('scenes', 'Burza', storm);
freshScene();

let frames = 0, fpsStart = performance.now();
const updateFps = now => {
  frames++;
  if (now - fpsStart >= 1000) {
    const fps = Math.round(frames * 1000 / (now - fpsStart));
    ui('fps').textContent = `${fps} FPS`;
    frames = 0;
    fpsStart = now;
  }
  requestAnimationFrame(updateFps);
};
requestAnimationFrame(updateFps);
