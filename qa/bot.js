/* Bot QA LOST & FRAUD: przechodzi tytuł + dni 1-25 w headless Chromium,
   robi screenshoty kluczowych momentów i zbiera usterki (konsola, 404, nakładanie, wyjście poza scenę, martwe kliki).
   Użycie: node qa/bot.js [--url http://localhost:8765/] [--out qa/out] [--strategy first|last|random|steal|ostrozny|chciwy] [--seed 7] [--w 1600 --h 900] */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d };
const URL0 = arg('url', 'http://localhost:8765/'), OUT = arg('out', 'qa/out'), STRAT = arg('strategy', 'first'), SEED = +arg('seed', 7);
const MAXDAY = +arg('days', 99), W = +arg('w', 1600), H = +arg('h', 900), MOBILE = process.argv.includes('--mobile');
fs.mkdirSync(OUT, { recursive: true });
const issues = [], seen = new Set(), shots = [];
const add = (kind, msg, where) => { const k = kind + '|' + msg; if (seen.has(k)) return; seen.add(k); issues.push({ kind, msg, where }); fs.writeFileSync(path.join(OUT, 'usterki_live.json'), JSON.stringify(issues, null, 1)); };
let rs = SEED; const rnd = () => (rs = (rs * 1103515245 + 12345) % 2147483648) / 2147483648;

(async () => {
  const br = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
  const ctx = await br.newContext(MOBILE ? { viewport: { width: 844, height: 390 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true } : { viewport: { width: W, height: H } });
  const page = await ctx.newPage();
  let where = 'start';
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') add('konsola', m.type() + ': ' + m.text().slice(0, 200), where) });
  page.on('pageerror', e => add('wyjątek JS', e.message.slice(0, 300), where));
  page.on('requestfailed', r => add('sieć', 'nie wczytano ' + r.url().replace(URL0, ''), where));
  page.on('response', r => { if (r.status() >= 400) add('404', r.status() + ' ' + r.url().replace(URL0, ''), where) });
  await page.goto(URL0 + '?fast=1&seed=' + SEED);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  const sleep = ms => page.waitForTimeout(ms);
  const shot = async (name) => { const f = path.join(OUT, String(shots.length).padStart(3, '0') + '_' + name + '.png'); await page.screenshot({ path: f }); shots.push({ name, f, where }); };
  const shotOnce = async (key, name) => { if (seen.has('shot|' + key)) return; seen.add('shot|' + key); await shot(name || key) };
  /* audyt układu: przyciski/teksty poza sceną, nakładanie się klikalnych, zbyt mały tekst, zasłonięte przyciski */
  const audit = async (tag) => {
    const r = await page.evaluate(() => {
      const st = document.getElementById('stage').getBoundingClientRect(), out = [];
      const vis = e => { const s = getComputedStyle(e); const b = e.getBoundingClientRect(); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05 && b.width > 2 && b.height > 2 };
      const lab = e => (e.id ? '#' + e.id : '') + '.' + String(e.className).split(' ')[0] + ' "' + (e.innerText || e.alt || '').trim().slice(0, 40).replace(/\n/g, ' ') + '"';
      const vw = innerWidth, vh = innerHeight;
      const cl = [...document.querySelectorAll('#stage button, #stage input, #stage [role=button]')].filter(vis);
      cl.forEach(e => { const b = e.getBoundingClientRect();
        if (b.right > vw + 1 || b.bottom > vh + 1 || b.left < -1 || b.top < -1) out.push(['poza ekranem', lab(e)]);
        const cx = Math.min(vw - 1, Math.max(0, b.left + b.width / 2)), cy = Math.min(vh - 1, Math.max(0, b.top + b.height / 2));
        const top = document.elementFromPoint(cx, cy);
        if (top && top !== e && !e.contains(top) && !top.contains(e) && !top.closest('#set,#sortp,.tut,#nb,#bk,#rot')) out.push(['zasłonięty klik', lab(e) + ' przykryty przez ' + lab(top)]);
        if (b.height < 28 * (+document.getElementById('stage').dataset.s || 1) * 0.9 && !/hot|cat/.test(e.className)) out.push(['mały cel kliku', lab(e) + ' ' + Math.round(b.width) + 'x' + Math.round(b.height)]);
      });
      for (let i = 0; i < cl.length; i++) for (let j = i + 1; j < cl.length; j++) { const a = cl[i].getBoundingClientRect(), b = cl[j].getBoundingClientRect();
        if (cl[i].contains(cl[j]) || cl[j].contains(cl[i])) continue;
        const M = '#set,#sortp,.tut,#nb,#bk,#rot'; if (!!cl[i].closest(M) !== !!cl[j].closest(M)) continue;
        const ox = Math.min(a.right, b.right) - Math.max(a.left, b.left), oy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (ox > 6 && oy > 6) out.push(['nakładanie', lab(cl[i]) + ' × ' + lab(cl[j])]); }
      /* tekst ucięty (overflow) */
      [...document.querySelectorAll('#stage .letter, #stage #say, #stage .q, #stage .btn, #stage .zone, #stage .sub, #stage .top p, #stage .toast')].filter(vis).forEach(e => { if (e.scrollHeight > e.clientHeight + 4 && getComputedStyle(e).overflowY !== 'auto' && getComputedStyle(e).overflowY !== 'scroll' && getComputedStyle(e).overflow !== 'visible') out.push(['ucięty tekst', lab(e)]) });
      /* najmniejsza czcionka na ekranie (px po skalowaniu) */
      let minF = 99, minE = null; [...document.querySelectorAll('#stage *')].filter(e => e.childNodes.length && [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())).filter(vis).forEach(e => { const f = parseFloat(getComputedStyle(e).fontSize) * (+document.getElementById('stage').dataset.s || 1); if (f < minF) { minF = f; minE = e } });
      if (minF < 11) out.push(['drobny tekst', Math.round(minF * 10) / 10 + 'px: ' + lab(minE)]);
      return out;
    });
    r.forEach(([k, m]) => add(k, m, tag));
  };
  const has = s => page.$(s).then(e => !!e && e.isVisible());
  const click = async (sel, tag) => {
    const before = await page.evaluate(() => document.getElementById('layer').innerHTML.length + '|' + document.body.innerHTML.length + '|' + (window.__S && JSON.stringify(window.__G()).length));
    const el = await page.$(sel); if (!el) return false;
    try { await el.click({ timeout: 3000 }); } catch (e) { const why = (e.message.match(/[^\n]*intercepts pointer events[^\n]*/) || e.message.match(/element is not [^\n]*/) || [e.message.split('\n')[0]])[0]; if (!/not stable|not visible/.test(why)) add('martwy klik', 'nie da się kliknąć ' + sel + ': ' + why.trim().slice(0, 220), tag); await el.click({ force: true }).catch(() => {}); }
    await sleep(120);
    const after = await page.evaluate(() => document.getElementById('layer').innerHTML.length + '|' + document.body.innerHTML.length + '|' + (window.__S && JSON.stringify(window.__G()).length));
    if (before === after) { await sleep(700); const a2 = await page.evaluate(() => document.getElementById('layer').innerHTML.length + '|' + document.body.innerHTML.length + '|' + (window.__S && JSON.stringify(window.__G()).length)); if (a2 === before) add('martwy klik', sel + ' nic nie zmienił', tag); }
    return true;
  };
  let stoleWeek = 0; const kradzieze = [], ekonomia = [];
  const S = () => page.evaluate(() => { const s = window.__G(); return { day: s.day, gi: s.gi, money: s.money, c: s.c } });
  const txt = s => page.$eval(s, e => e.innerText).catch(() => '');

  /* EKRAN TYTUŁOWY */
  await sleep(1500); where = 'tytuł';
  await page.mouse.click(5, 5); await sleep(900); // bramka dźwięku: pierwszy gest tylko włącza dźwięk
  await shot('tytul'); await audit(where);
  { const bs = await page.$$('.tmenu .trow button'); if (bs[0]) { await bs[0].click(); await sleep(300); if (await has('#set')) { await shot('ustawienia'); await audit('ustawienia'); const tb = await page.$$('#set .stab'); for (let i = 1; i < tb.length; i++) { await tb[i].click(); await sleep(150); await shot('ustawienia_zakladka' + i); await audit('ustawienia ' + i) } await page.keyboard.press('Escape'); await sleep(200); if (await has('#set')) add('UX', 'Escape nie zamyka ustawień', 'ustawienia'); } } }
  await click('.tmenu .mcard', where); await sleep(900);
  where = 'prolog'; await shot('prolog_1'); await audit(where);
  if (await has('.strip')) await click('.strip', where);
  await sleep(900); await shot('prolog_2'); await audit(where);
  if (await has('.pen')) await click('.pen', where);
  await sleep(1200);

  let guard = 0, lastKey = '', stuck = 0, endedWith = null;
  const transcript = [];
  while (guard++ < 4000) {
    await sleep(80);
    const st = await S().catch(() => null); if (!st) continue;
    where = 'dzień ' + st.day; if (st.day > MAXDAY) { endedWith = 'limit dni ' + MAXDAY; break }
    const k = await page.evaluate(() => document.getElementById('layer').innerHTML.length + (document.querySelector('#layer .center h1,#layer .top .lab')?.innerText || ''));
    if (k === lastKey) { if (++stuck > 150) { add('ZACIĘCIE', 'gra stoi > 12 s bez zmian', where); await shot('zaciecie_d' + st.day); break } } else { stuck = 0; lastKey = k }
    if (await has('.fade.on, #fade.on')) continue;
    // tutorial overlay
    if (await has('.daycard')) { await shotOnce('karta_dnia'); await page.click('.daycard').catch(() => {}); await sleep(300); continue }
    if (await has('.tut button')) { await shotOnce('tutorial'); await click('.tut button', where); continue }
    // dostawa
    if (await has('.crate .zguba')) { await shotOnce('dostawa_d' + st.day, 'magazyn_dostawa_d' + st.day); if (st.day <= 2 || st.day % 5 === 0) await audit(where + ' dostawa'); await click('.crate .zguba', where); await sleep(600); continue }
    // oględziny
    if (await has('.inspect .hot:not(.found)')) { if (st.day <= 3) await shotOnce('inspect_d' + st.day, 'ogledziny_d' + st.day); await audit(where + ' oględziny'); await click('.inspect .hot', where); await sleep(150); await shotOnce('inspect_found_d' + st.day, 'ogledziny_znalezione_d' + st.day); continue }
    if (await has('.inspect .nextrow button')) { await click('.inspect .nextrow button', where); await sleep(600); continue }
    // pauza / czekanie
    if (await has('.pauza')) { await shotOnce('pauza', 'pauza'); if (!seen.has('sortp')) { seen.add('sortp'); await click('.wrow button.btn', where); await sleep(300); if (await has('#sortp')) { await shot('pauza_sortowanie'); await audit('pauza sortowanie'); const b = await page.$$('#sortp .srow button:not([disabled])'); if (b.length) await b[0].click().catch(() => {}); await click('#sortp .panel > button.btn:last-child', where) } } await sleep(300); continue }
    // pukanie
    if (await has('#guest.sil') && await has('.curtain')) { await sleep(400); await shotOnce('szyba_pukanie_d' + st.day, 'szyba_pukanie_d' + st.day); await audit(where + ' pukanie'); await click('.curtain', where); await sleep(600); continue }
    // rozmowa
    if (await has('#qs button.q')) {
      await sleep(250); const n = (await page.$$('#qs button.q')).length;
      const sayT = await txt('#say'); transcript.push(where + ' | ' + sayT.replace(/\n/g, ' ').slice(0, 300));
      if (!seen.has('talk' + st.day)) { seen.add('talk' + st.day); await shot('blat_rozmowa_d' + st.day); await audit(where + ' rozmowa') }
      const i = STRAT === 'last' ? n - 1 : STRAT === 'random' ? Math.floor(rnd() * n) : 0;
      await page.$$eval('#qs button.q', (b, i) => b[i].click(), i); await sleep(200);
      // czekaj aż tekst się wypisze
      await page.waitForFunction(() => { const s = document.querySelector('#say span:last-child'); return !s || s.textContent.length > 0 }, null, { timeout: 4000 }).catch(() => {});
      await sleep(250);
      continue
    }
    if (await has('#qs button.btn') && !(await has('.zones')) && !(await has('.sum'))) { await click('#qs button.btn', where); await sleep(600); continue }
    // magazyn (szukanie)
    if (await has('.field .grid')) {
      await shotOnce('magazyn_d' + st.day, 'magazyn_szukanie_d' + st.day); if (st.day <= 3 || st.day % 6 === 0) await audit(where + ' magazyn');
      // jeden pudło celowo (toast), raz na grę
      if (!seen.has('toast')) { seen.add('toast'); const wr = await page.$('.slot:not([data-target])'); if (wr) { await wr.click(); await sleep(150); await shot('toast_pomylka'); await audit('toast') } }
      if (await has('.ogl')) { await page.click(await has('.ogl .take[data-target]') ? '.ogl .take[data-target]' : '.ogl .btn.ghost'); await sleep(500); continue } /* karta oględzin (tropy) */
      if (await has('.slot[data-target]')) { await click('.slot[data-target]', where); await sleep(700); continue }
      // przejdź po zakładkach
      const tabs = await page.$$('.tabs .tab'); let found = false;
      for (const t of tabs) { await t.click(); await sleep(150); if (await has('.slot[data-target]')) { found = true; break } }
      if (!found) { add('BLOKADA', 'brak szukanej rzeczy w żadnej linii magazynu', where); await shot('brak_rzeczy_d' + st.day); const s0 = await page.$('.slot'); if (s0) { for (let i = 0; i < 6 && await has('.slot'); i++) { await page.click('.slot').catch(() => {}); await sleep(200) } } }
      continue
    }
    if (STRAT === 'chciwy') await page.evaluate(() => { const s = window.__G && window.__G(); if (s && s.secrets) for (const g of window.DATA) for (const d of g.decyzje) if (/^wez_|przywlaszcz/.test(d.akcja) && d.wymaga) String(d.wymaga).split('|').forEach(k => s.secrets[k] = 1) }).catch(() => {});
    // decyzja
    if (await has('.zones .zone')) {
      await shotOnce('decyzja_d' + st.day, 'blat_decyzja_d' + st.day); await audit(where + ' decyzja');
      const zs = await page.$$eval('.zones .zone', z => z.map(x => x.dataset.a));
      let i = 0; if (STRAT === 'last') i = zs.length - 1; else if (STRAT === 'random') i = Math.floor(rnd() * zs.length); else if (STRAT === 'steal' || STRAT === 'chciwy' || (STRAT === 'ostrozny' && stoleWeek !== Math.ceil(st.day / 5))) { let j = zs.findIndex(a => /^wez_|przywlaszcz/.test(a)); if (j < 0 && STRAT === 'steal') j = zs.findIndex(a => /koperta|bez/.test(a)); if (j >= 0 && /^wez_|przywlaszcz/.test(zs[j])) { stoleWeek = Math.ceil(st.day / 5); kradzieze.push({ day: st.day, a: zs[j] }) } i = j >= 0 ? j : 0 }
      // co drugi dzień przeciągnij przedmiot zamiast klikać (test drag&drop)
      if (st.day % 2 === 0) { const it = await page.$('#onDesk'), z = (await page.$$('.zones .zone'))[i]; const a = await it.boundingBox(), b = await z.boundingBox();
        await page.mouse.move(a.x + a.width / 2, a.y + a.height / 2); await page.mouse.down(); await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2, { steps: 8 }); await page.mouse.up(); await sleep(300);
        if (await has('.zones .zone')) { add('drag&drop', 'upuszczenie rzeczy na strefę "' + zs[i] + '" nic nie zrobiło', where); await page.$$eval('.zones .zone', (z, i) => z[i].click(), i) } }
      else await page.$$eval('.zones .zone', (z, i) => z[i].click(), i);
      await sleep(400); if (/^wez_|przywlaszcz/.test(zs[i])) await shot('kradziez_d' + st.day + '_' + zs[i]); await shotOnce('wynik_d' + st.day, 'blat_wynik_d' + st.day); await audit(where + ' wynik'); await sleep(1300);
      if (await has('#qs button.btn')) await click('#qs button.btn', where); await sleep(700); continue
    }
    if (await has('.sum') && await has('#qs button.btn')) { await click('#qs button.btn', where); await sleep(700); continue }
    // imię (dzień 20)
    if (await has('input.nameinp')) { await shot('imie_d20'); await audit('imię'); await page.fill('input.nameinp', 'Tommy'); await click('.center button.btn', where); await sleep(700); continue }
    // wieczór
    if (await has('.letters') && await has('.foot button')) { if (st.day <= 2 || st.day % 5 === 0 || st.day >= 24) { await shot('wieczor_d' + st.day); await audit(where + ' wieczór') } await click('.foot button', where); await sleep(700); continue }
    // sobota / zakończenia
    const h1 = await txt('.center h1');
    if (h1 && await has('.ups')) { { const s0 = await S(); ekonomia.push({ day: s0.day, money: s0.money, urzad: s0.c.urzad, audyt: await txt('.center .audit') }); console.log('SOBOTA', s0.day, s0.money, (await txt('.center .audit')) || '') } await shot('sobota_d' + st.day); await audit(where + ' sobota'); const ub = await page.$$('.ups button:not([disabled])'); if (ub.length > 1) await ub[0].click(); await click('.center > button.btn.pulse', where); await sleep(700); continue }
    if (h1 && await has('.threads')) { endedWith = 'finał'; await shot('zakonczenie'); await page.evaluate(() => { const c = document.querySelector('.center'); c.scrollTop = c.scrollHeight }); await sleep(200); await shot('zakonczenie_dol'); await audit('zakończenie'); break }
    if (h1 && await has('.center button.btn')) { const t = h1.trim(); await shot('plansza_' + t.slice(0, 20).replace(/\W+/g, '_')); await audit('plansza ' + t); if (/eksmis|zwolnien/i.test(t + (await txt('.center')))) { endedWith = t.toLowerCase() + ' d' + st.day; break } if (await has('.center > button.btn.pulse')) await click('.center > button.btn.pulse', where); else { endedWith = 'plansza: ' + t; break } await sleep(700); continue }
    if (await has('#leave, .center.dark button.btn.pulse')) { await click('.center.dark button.btn.pulse', where); await sleep(600); continue }
  }
  const st = await S().catch(() => ({}));
  const E = await page.evaluate(() => window.__E && window.__E()).catch(() => null);
  // TELEFON: pion i poziom
  for (const [nm, vp] of [['telefon_pion', { width: 390, height: 844 }], ['telefon_poziom', { width: 844, height: 390 }]]) { await page.setViewportSize(vp); await sleep(400); await shot(nm); await audit(nm) }
  fs.writeFileSync(path.join(OUT, 'wynik.json'), JSON.stringify({ strategia: STRAT, seed: SEED, koniec: endedWith, stan: st, ekonomia, kradzieze, zakonczenia: E, kroki: guard, usterki: issues, screeny: shots.map(s => path.basename(s.f)), dialog: transcript }, null, 1));
  console.log('KONIEC', endedWith, JSON.stringify(st), 'usterek:', issues.length, 'screenów:', shots.length);
  const byK = {}; issues.forEach(i => byK[i.kind] = (byK[i.kind] || 0) + 1); console.log(byK);
  await br.close();
})();
