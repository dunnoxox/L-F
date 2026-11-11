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
