'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { mulberry32, traumaAt, ease } = require('../fx/lf_fx').internals;
test('mulberry32 odtwarza sekwencję po ponownym ustawieniu ziarna', () => {
  const a = mulberry32(42), b = mulberry32(42), c = mulberry32(43);
  const take = fn => Array.from({ length: 30 }, fn);
  const expected = take(a);
  assert.deepEqual(take(b), expected);
  assert.notDeepEqual(take(c), expected);
  assert.ok(expected.every(n => n >= 0 && n < 1));
});
test('trauma zanika liniowo przed podniesieniem do kwadratu', () => {
  assert.equal(traumaAt(.8, 0), .8 ** 2);
  assert.equal(traumaAt(.8, .5), .4 ** 2);
  assert.equal(traumaAt(.8, 1), 0);
});
test('wygaszenie ruchu zachowuje krańce', () => {
  assert.equal(ease(0), 0);
  assert.equal(ease(1), 1);
  assert.ok(ease(.5) > .5);
});

test('fallback zawiera te same osiemnaście profili co JSON', () => {
  const profiles = require('../fx/profiles.json');
  assert.deepEqual(require('../fx/lf_fx').internals.profiles, profiles);
  assert.equal(Object.keys(profiles).length, 18);
  for (const profile of Object.values(profiles)) {
    assert.ok(['heavy', 'light', 'limp'].includes(profile.weight));
    assert.ok(profile.breathMs >= 4000 && profile.breathMs <= 5000);
    assert.ok(profile.sway >= 0 && profile.sway <= 3);
    assert.ok(profile.duration >= 300 && profile.duration <= 900);
    assert.ok(profile.intervalMs[0] < profile.intervalMs[1]);
    for (const frames of [profile.tic, profile.broken].filter(Boolean)) {
      assert.ok(frames.length >= 2 && frames.every(Number.isFinite));
    }
  }
});

test('rdzeń nie używa RNG gry, miękkich efektów ani współczesnej składni spoza ES2019', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const core = fs.readFileSync(path.join(__dirname, '../fx/lf_fx.js'), 'utf8');
  const css = fs.readFileSync(path.join(__dirname, '../fx/lf_fx.css'), 'utf8');
  assert.doesNotMatch(core, /Math\.random|\.replaceAll\(|\?\?|\?\./);
  assert.doesNotMatch(core + css, /gradient|blur|box-shadow/);
  assert.deepEqual([...new Set((core + css).match(/#[\da-f]{6}\b/gi))].sort(), ['#0a0a0a', '#efe3c8', '#f28c1e']);
});

test('scheduler rozwiązuje anulowanie, kończy animację i wstrzymuje ją w ukrytej karcie', async () => {
  const fx = require('../fx/lf_fx');
  const callbacks = new Map();
  let id = 0;
  let animation;
  const listeners = new Map();
  global.document = {
    hidden: false,
    addEventListener(name, fn) { listeners.set(name, fn); },
    removeEventListener(name) { listeners.delete(name); }
  };
  global.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  global.requestAnimationFrame = callback => { callbacks.set(++id, callback); return id; };
  global.cancelAnimationFrame = id => callbacks.delete(id);
  const stage = {
    animate(frames, { duration }) {
      animation = { frames, duration, pause() {}, cancel() { this.cancelled = true; } };
      return animation;
    }
  };
  const step = now => {
    assert.equal(callbacks.size, 1);
    const [[key, fn]] = callbacks;
    callbacks.delete(key);
    fn(now);
  };
  try {
    fx.init({ stage });
    let ended = false;
    const shake = fx.shake('thunder');
    shake.finished.then(() => { ended = true; });
    step(0);
    step(30);
    assert.equal(animation.currentTime, 30);
    document.hidden = true;
    listeners.get('visibilitychange')();
    assert.equal(callbacks.size, 0);
    document.hidden = false;
    listeners.get('visibilitychange')();
    step(3000);
    assert.equal(animation.currentTime, 30);
    await Promise.resolve();
    assert.equal(ended, false);
    for (let now = 3050; now <= 3350; now += 50) step(now);
    await shake.finished;
    assert.equal(ended, true);
    assert.equal(animation.cancelled, true);
    assert.equal(callbacks.size, 0);

    const cancelled = fx.shake('collapse');
    cancelled.cancel();
    cancelled.cancel();
    await cancelled.finished;
    assert.equal(animation.cancelled, true);
    fx.setEnabled(false);
    assert.equal(callbacks.size, 0);
  } finally {
    fx.destroy();
    for (const key of ['document', 'matchMedia', 'requestAnimationFrame', 'cancelAnimationFrame']) delete global[key];
  }
  assert.equal(listeners.size, 0);
});
