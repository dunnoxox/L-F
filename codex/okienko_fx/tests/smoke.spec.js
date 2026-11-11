'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

let chromium;
try { ({ chromium } = require('playwright')); } catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND' || !error.message.includes("'playwright'")) throw error;
  console.log('POMINIĘTO smoke: brak Playwright. Instrukcja instalacji w README.md.');
  process.exit(0);
}
const root = path.resolve(__dirname, '..');
const out = path.join(__dirname, 'out');
const files = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
  if (file === path.join(root, 'favicon.ico')) { res.writeHead(204).end(); return; }
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404).end(); return;
  }
  res.writeHead(200, { 'Content-Type': files[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

async function open(browser, url, reducedMotion = 'no-preference') {
  const page = await browser.newPage({ reducedMotion, viewport: { width: 1440, height: 1050 } });
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('requestfailed', req => errors.push(req.url()));
  page.on('response', response => { if (response.status() >= 400) errors.push(response.url()); });
  await page.goto(url);
  return { page, errors };
}

async function mode(browser, url, name) {
  const { page, errors } = await open(browser, url, name === 'reduced' ? 'reduce' : 'no-preference');
  if (name === 'flashes-off') await page.locator('#flashes').check();
  const list = await page.evaluate(() => LF_FX.list().map(x => x.name));
  assert.ok(list.length >= 30);
  assert.equal(await page.locator('#effects button').count(), list.length);
  await page.locator('#viewport').screenshot({ path: path.join(out, name + '.png') });
  await page.evaluate(() => {
    window.capture = () => ({
      nodes: document.querySelectorAll('#stage [class*="lfx-"]').length,
      animations: document.getAnimations().length,
      elements: Array.from(document.querySelectorAll('#stage, #guest, #desk, #item, #toast, #cash, #clock, #effects button'),
        el => [el.style.cssText, el.className])
    });
    window.before = capture();
  });
  for (const effect of list) {
    await page.getByRole('button', { name: effect, exact: true }).click();
    await page.evaluate(effect => {
      LF_FX.stop(effect);
      if (effect === 'day.end' || effect === 'power.out' || effect === 'saturday') document.querySelector('#reset-scene').click();
    }, effect);
  }
  const outcomes = await page.evaluate(async ({ list, name }) => {
    const target = effect => {
      if (effect.startsWith('guest.')) return '#guest';
      if (effect.startsWith('item.') || ['decide.give', 'decide.keep'].includes(effect)) return '#item';
      if (effect.startsWith('pile.')) return '#desk';
      if (effect.startsWith('button.')) return '#effects button';
      if (effect === 'cash.roll') return '#cash';
      if (effect === 'toast.pop') return '#toast';
      return null;
    };
    const opts = { preset: 'collapse', lie: true, from: 9, to: 11, holdMs: 10, label: 'Dzień 3', delay: 300 };
    const persistent = new Set(['guest.breathe', 'rain', 'lamp', 'dust', 'tram_light']);
    const results = [];
    for (const method of ['naturalnie', 'cancel']) {
      for (const effect of list) {
        LF_FX.stop();
        LF_FX.guest.mount('#guest', { profile: 'wdowiec', spriteBase: '../sprites/ppl/' });
        LF_FX.clock.mount('#clock');
        if (effect === 'power.on') await LF_FX.play('power.out').finished;
        const before = capture();
        const handle = LF_FX.play(effect, target(effect), opts);
        if (name === 'reduced' && ['shake', 'guest.tic'].includes(effect) &&
            document.getAnimations().length !== before.animations) throw Error(effect + ': ruch w trybie ograniczonym');
        if (method === 'cancel' || persistent.has(effect)) { handle.cancel(); handle.cancel(); }
        await handle.finished;
        const after = capture();
        if (method === 'naturalnie' && !persistent.has(effect) && !['day.end','power.out','power.on','saturday'].includes(effect) &&
            (before.nodes !== after.nodes || before.animations !== after.animations)) {
          throw Error(effect + ': sprzątanie po zakończeniu ' + JSON.stringify([before.nodes, after.nodes, before.animations, after.animations]));
        }
        results.push({ method, effect, styleSame: JSON.stringify(after.elements) === JSON.stringify(before.elements) });
        LF_FX.stop();
        LF_FX.guest.unmount();
        if (capture().nodes || capture().animations) throw Error(effect + ': wyciek DOM/WAAPI po ' + method);
      }
    }
    const paused = LF_FX.play('day.start', null, { label: 'Dzień', holdMs: 1200 });
    LF_FX.ambient.start('rain', { level: 3 });
    const hit = LF_FX.hitstop();
    LF_FX.setEnabled(false);
    await Promise.all([paused.finished, hit.finished]);
    if (capture().nodes || capture().animations) throw Error('Wyłączenie zostawiło węzły lub animacje');
    LF_FX.setEnabled(true);
    return results;
  }, { list, name });
  for (const result of outcomes) assert.equal(result.styleSame, true, result.effect + ' ' + result.method);
  assert.deepEqual(errors, []);
  console.log(`${name}: ${list.length} przycisków, ${outcomes.length} prób zakończenia/anulowania`);
  await page.close();
}

async function measurements(browser, url) {
  const { page, errors } = await open(browser, url);
  await page.evaluate(() => {
    LF_FX.stop();
    const stage = document.querySelector('#stage');
    stage.style.transform = 'none';
    LF_FX.rain.setLevel(2);
    LF_FX.ambient.start('lamp', { mode: 'buzz' });
    LF_FX.ambient.start('dust');
    LF_FX.metrics(true);
  });
  await page.waitForTimeout(3500);
  const metrics = await page.evaluate(() => LF_FX.metrics());
  assert.ok(metrics.frames > 90, JSON.stringify(metrics));
  assert.ok(metrics.averageMs <= 1, JSON.stringify(metrics));
  console.log('Ambient 1536×1024:', JSON.stringify(metrics), 'FPS panelu:', await page.locator('#fps').textContent());
  await page.evaluate(() => {
    LF_FX.stop();
    LF_FX.seed(77);
    const first = LF_FX.shake('collapse');
    const params = () => document.getAnimations()[0].effect.getKeyframes();
    const before = JSON.stringify(params());
    first.cancel();
    LF_FX.seed(77);
    const second = LF_FX.shake('collapse');
    if (before !== JSON.stringify(params())) throw Error('Brak determinizmu wstrząsu');
    second.cancel();
  });
  await page.evaluate(() => {
    LF_FX.setFlashes(false);
    window.samples = [];
    const nativeAnimate = Element.prototype.animate;
    const recorded = [];
    Element.prototype.animate = function (frames, options) {
      if (this.classList.contains('lfx-overlay')) recorded.push({ frames, duration: options.duration });
      return nativeAnimate.call(this, frames, options);
    };
    const check = (effect, duration) => {
      const record = recorded.pop();
      if (!record || record.duration !== duration) throw Error(effect + ': nieoczekiwany czas ' + JSON.stringify(record));
      if (!record.frames.every(frame => frame.easing == null || frame.easing === 'linear')) throw Error(effect + ': zmiana skokowa');
      if (duration / (record.frames.length - 1) < 400) throw Error(effect + ': zmiana szybsza niż 400 ms');
      window.samples.push([effect, duration]);
    };
    LF_FX.play('storm.flash', null, { delay: 300 }); check('storm.flash', 920);
    LF_FX.stop();
    LF_FX.play('power.out'); check('power.out', 500);
    LF_FX.stop('power.out');
    LF_FX.play('power.on'); check('power.on', 500);
    LF_FX.stop();
    LF_FX.play('day.start'); check('day.start', 900);
    LF_FX.stop();
    LF_FX.play('day.end'); check('day.end', 500);
    LF_FX.stop();
    LF_FX.play('saturday'); check('saturday', 900);
    LF_FX.stop();
    LF_FX.play('decide.call'); check('decide.call', 900);
    LF_FX.stop();
    LF_FX.play('scene.cut');
    if (document.querySelector('.lfx-blackout')) throw Error('scene.cut bez błysków');
    Element.prototype.animate = nativeAnimate;
  });
  console.log('Czasy ograniczonych zmian jasności:', JSON.stringify(await page.evaluate(() => samples)));
  assert.deepEqual(errors, []);
  await page.close();
}

async function main() {
  fs.mkdirSync(out, { recursive: true });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}/demo/index.html`;
  const file = pathToFileURL(path.join(root, 'demo/index.html')).href;
  const browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ?
    { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE } : {});
  try {
    await mode(browser, url, 'full');
    await mode(browser, url, 'flashes-off');
    await mode(browser, file, 'reduced');
    await measurements(browser, url);
    const { page, errors } = await open(browser, file);
    await page.getByRole('button', { name: 'Wizyta · wydaj' }).click();
    await page.waitForFunction(() => document.querySelector('#guest').hidden && document.querySelector('#item').hidden);
    await page.getByRole('button', { name: 'Wizyta · odmów' }).click();
    await page.waitForFunction(() => document.querySelector('#guest').hidden && !document.querySelector('#item').hidden);
    await page.getByRole('button', { name: 'Burza', exact: true }).click();
    await page.waitForFunction(() => Number(getComputedStyle(document.querySelector('.lfx-power') || document.body).opacity) > .82 && document.querySelector('.lfx-power'));
    await page.locator('#viewport').screenshot({ path: path.join(out, 'power-out.png') });
    await page.waitForSelector('.lfx-power', { state: 'detached' });
    assert.deepEqual(errors, []);
    console.log('Scenariusze: wydaj, odmów, burza (file://)');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
