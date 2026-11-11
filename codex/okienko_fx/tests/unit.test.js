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
