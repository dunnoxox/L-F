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
