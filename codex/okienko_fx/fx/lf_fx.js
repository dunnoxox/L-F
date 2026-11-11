(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LF_FX = factory();
}(typeof window === 'object' ? window : globalThis, function () {
  'use strict';

  const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
  const ease = value => 1 - Math.pow(1 - value, 3);
  const mulberry32 = seed => () => {
    seed = (seed + 0x6D2B79F5) | 0;
    let value = Math.imul(seed ^ seed >>> 15, seed | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
  const traumaAt = (trauma, progress) => Math.pow(clamp(trauma) * (1 - clamp(progress)), 2);
  const presets = { knock: .25, thud: .35, thunder: .6, collapse: .8 };
  const effects = new Map(), jobs = new Set(), cues = new Set();
  const tasks = new Set(), ambientJobs = new Map();
  let stage, raf = 0, previous = null, random = mulberry32(1);
  let enabled = true, flashes = true, intensity = 1, reduced = false, media;
  let sample = { frames: 0, total: 0 };
  const idle = () => ({ finished: Promise.resolve(), cancel() {} });
  const resolve = target => typeof target === 'string' ? document.querySelector(target) : target;
  const range = (min, max) => min + random() * (max - min);
  const cue = (name, info = {}) => {
    for (const listener of [...cues]) {
      try { listener(name, info); } catch (error) { globalThis.reportError ? globalThis.reportError(error) : console.error(error); }
    }
  };
  const add = (name, description, run) => effects.set(name, { name, description, run });
  const schedule = () => {
    if (!raf && enabled && !document.hidden && (tasks.size || ambientJobs.size)) raf = requestAnimationFrame(frame);
  };
  function frame(now) {
    raf = 0;
    const delta = previous === null ? 0 : Math.min(50, now - previous);
    previous = now;
    if (ambientJobs.size) {
      const start = performance.now();
      for (const ambient of [...ambientJobs.values()]) ambient.step(delta);
      sample.frames++;
      sample.total += performance.now() - start;
    }
    for (const task of [...tasks]) task(delta);
    if (!tasks.size && !ambientJobs.size) previous = null;
    schedule();
  }
  function visibility() {
    previous = null;
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
    else schedule();
  }
  function job(name, target, setup) {
    if (!stage || !enabled) return idle();
    let done = false, settle;
    const cleanups = [];
    const handle = { name, target, finished: new Promise(resolve => { settle = resolve; }), cancel() {
      if (done) return;
      done = true;
      jobs.delete(handle);
      for (const cleanup of cleanups.reverse()) cleanup();
      settle();
    }};
    jobs.add(handle);
    const context = {
      get done() { return done; },
      cleanup(fn) { if (done) fn(); else cleanups.push(fn); },
      end: handle.cancel,
      time(duration, update, end = handle.cancel) {
        let elapsed = 0;
        const tick = delta => {
          elapsed += delta;
          update(clamp(elapsed / duration), elapsed);
          if (elapsed >= duration) { tasks.delete(tick); if (!done) end(); }
        };
        context.cleanup(() => tasks.delete(tick));
        if (!done) { tasks.add(tick); update(0, 0); schedule(); }
      },
      animate(el, frames, duration, options = {}) {
        if (!el || done) return;
        const animation = el.animate(frames, { duration, fill: 'both', ...options });
        animation.pause();
        context.cleanup(() => animation.cancel());
        return animation;
      },
      motion(el, frames, duration, options, end) {
        const animation = context.animate(el, frames, duration, options);
        context.time(duration, (_, elapsed) => { if (animation) animation.currentTime = elapsed; }, end);
      }
    };
    try { setup(context); } catch (error) { handle.cancel(); throw error; }
    return handle;
  }
  function stop(name, target) {
    const el = resolve(target);
    for (const handle of [...jobs]) {
      if ((!name || handle.name === name) && (target == null || el === handle.target)) handle.cancel();
    }
  }
  function shake(preset = 'knock') {
    const trauma = typeof preset === 'string' ? presets[preset] || 0 : clamp(Number(preset.trauma) || 0);
    if (!stage || !enabled) return idle();
    if (typeof preset === 'string') cue(preset === 'collapse' ? 'pile_collapse' : preset, { trauma });
    if (!trauma || reduced || !intensity) return idle();
    stop('shake', stage);
    return job('shake', stage, ctx => {
      const noise = Array.from({ length: 21 }, () => [range(-1, 1), range(-1, 1), range(-1, 1)]);
      const animation = ctx.animate(stage, noise.map(([x, y, r], i) => {
        const a = traumaAt(trauma, i / 20) * intensity;
        return { translate: `${x * a * 22}px ${y * a * 17}px`, rotate: `${r * a * 1.5}deg` };
      }), 340);
      ctx.time(340, (_, elapsed) => { animation.currentTime = elapsed; });
    });
  }
  add('shake', 'Wstrząs sceny', (target, options) => shake(options.preset || options));
  function play(name, target, options = {}) {
    if (!stage || !enabled || !effects.has(name)) return idle();
    const el = resolve(target);
    if (target != null && !el) return idle();
    return effects.get(name).run(el, options);
  }
  function motionPreference(event) {
    reduced = event.matches;
    stop();
  }
  const resetExtensions = [];
  function reset() {
    stop();
    resetExtensions.forEach(clean => clean());
    cancelAnimationFrame(raf);
    raf = 0;
    previous = null;
  }
  const api = {
    init(options = {}) {
      const next = resolve(options.stage || '#stage');
      if (!next) throw new Error('LF_FX: brak sceny');
      if (stage) reset();
      stage = next;
      media = matchMedia('(prefers-reduced-motion: reduce)');
      media.addEventListener('change', motionPreference);
      document.addEventListener('visibilitychange', visibility);
      reduced = options.reduced == null ? media.matches : Boolean(options.reduced);
      random = mulberry32(options.seed == null ? 1 : options.seed);
      flashes = options.flashes !== false;
      intensity = options.intensity == null ? 1 : clamp(options.intensity);
      enabled = options.enabled !== false;
      return api;
    },
    destroy() {
      if (!stage) return;
      reset();
      document.removeEventListener('visibilitychange', visibility);
      media.removeEventListener('change', motionPreference);
      stage = null;
      cues.clear();
    },
    play, stop, shake,
    seed(n) { random = mulberry32(n); },
    onCue(fn) { cues.add(fn); return () => cues.delete(fn); },
    setEnabled(value) { enabled = Boolean(value); if (!enabled && stage) reset(); },
    setFlashes(value) { flashes = Boolean(value); },
    setIntensity(value) { intensity = clamp(Number(value) || 0); if (!intensity) stop('shake'); },
    setReduced(value) { motionPreference({ matches: value == null ? media.matches : Boolean(value) }); },
    list() { return [...effects.values()].map(({ name, description }) => ({ name, description })); },
    metrics(resetSample = false) {
      const result = { ...sample, averageMs: sample.frames ? sample.total / sample.frames : 0 };
      if (resetSample) sample = { frames: 0, total: 0 };
      return result;
    },
    internals: { mulberry32, traumaAt, ease }
  };

  const profiles = {
    "wdowiec": {
      "habit": "Wygładza mankiet rękawiczki",
      "weight": "limp",
      "breathMs": 4900,
      "sway": 2.6,
      "duration": 720,
      "tic": [
        -3,
        2,
        -1
      ],
      "broken": null,
      "intervalMs": [
        3400,
        6800
      ]
    },
    "chlopak": {
      "habit": "Przerzuca ciężar z nogi na nogę",
      "weight": "light",
      "breathMs": 4100,
      "sway": 3,
      "duration": 430,
      "tic": [
        4,
        -3,
        1
      ],
      "broken": [
        -2,
        1,
        0
      ],
      "intervalMs": [
        3500,
        6970
      ]
    },
    "maya": {
      "habit": "Zastyga, czekając na powtórzenie warunku",
      "weight": "light",
      "breathMs": 4850,
      "sway": 1.2,
      "duration": 760,
      "tic": [
        0,
        -3,
        0
      ],
      "broken": null,
      "intervalMs": [
        3600,
        7140
      ]
    },
    "evan": {
      "habit": "Wygładza mankiet, pod presją powtarza gest",
      "weight": "heavy",
      "breathMs": 4400,
      "sway": 1.8,
      "duration": 590,
      "tic": [
        -2,
        3,
        1
      ],
      "broken": [
        -4,
        3,
        -2
      ],
      "intervalMs": [
        3700,
        7310
      ]
    },
    "lena": {
      "habit": "Rusza ku szybie i urywa gest w pół słowa",
      "weight": "light",
      "breathMs": 4150,
      "sway": 2.8,
      "duration": 380,
      "tic": [
        2,
        4,
        0
      ],
      "broken": [
        0,
        3,
        -1
      ],
      "intervalMs": [
        3800,
        7480
      ]
    },
    "noah": {
      "habit": "Odkłada notes dokładnie na to samo miejsce",
      "weight": "heavy",
      "breathMs": 4800,
      "sway": 1.4,
      "duration": 650,
      "tic": [
        2,
        5,
        2
      ],
      "broken": [
        -3,
        2,
        0
      ],
      "intervalMs": [
        3900,
        7650
      ]
    },
    "iris": {
      "habit": "Przyciska palce rękawiczek",
      "weight": "heavy",
      "breathMs": 4950,
      "sway": 0.8,
      "duration": 700,
      "tic": [
        -1,
        1,
        0
      ],
      "broken": null,
      "intervalMs": [
        4000,
        7820
      ]
    },
    "ada": {
      "habit": "Kołysze się na piętach",
      "weight": "light",
      "breathMs": 4050,
      "sway": 3,
      "duration": 460,
      "tic": [
        -4,
        5,
        -3
      ],
      "broken": null,
      "intervalMs": [
        4100,
        7990
      ]
    },
    "leo": {
      "habit": "Sprawdza metalowe zapięcie torby",
      "weight": "heavy",
      "breathMs": 4700,
      "sway": 2,
      "duration": 600,
      "tic": [
        3,
        1,
        -2
      ],
      "broken": [
        0,
        -3,
        2
      ],
      "intervalMs": [
        4200,
        8160
      ]
    },
    "victor": {
      "habit": "Usztywnia się przed pytaniem o podpis",
      "weight": "heavy",
      "breathMs": 4600,
      "sway": 0.9,
      "duration": 530,
      "tic": [
        1,
        1,
        0
      ],
      "broken": [
        -2,
        3,
        0
      ],
      "intervalMs": [
        4300,
        8330
      ]
    },
    "elias": {
      "habit": "Składa numerek, po pytaniu czeka bez ruchu",
      "weight": "limp",
      "breathMs": 4990,
      "sway": 1.5,
      "duration": 880,
      "tic": [
        2,
        1,
        0
      ],
      "broken": null,
      "intervalMs": [
        4400,
        8500
      ]
    },
    "sam": {
      "habit": "Zerka na ślad po zegarku",
      "weight": "heavy",
      "breathMs": 4600,
      "sway": 2,
      "duration": 630,
      "tic": [
        -3,
        0,
        1
      ],
      "broken": null,
      "intervalMs": [
        4500,
        8670
      ]
    },
    "nora": {
      "habit": "Odhacza kolejne pozycje gestem",
      "weight": "light",
      "breathMs": 4270,
      "sway": 1.7,
      "duration": 500,
      "tic": [
        1,
        4,
        2
      ],
      "broken": [
        0,
        2,
        -3
      ],
      "intervalMs": [
        4600,
        8840
      ]
    },
    "vera": {
      "habit": "Osadza ciężar, zanim sięgnie do kluczy",
      "weight": "heavy",
      "breathMs": 4980,
      "sway": 2.5,
      "duration": 800,
      "tic": [
        4,
        2,
        -1
      ],
      "broken": [
        1,
        0,
        0
      ],
      "intervalMs": [
        4700,
        9010
      ]
    },
    "maz": {
      "habit": "Wygładza mankiet, pod presją powtarza gest",
      "weight": "heavy",
      "breathMs": 4400,
      "sway": 1.8,
      "duration": 590,
      "tic": [
        -2,
        3,
        1
      ],
      "broken": [
        -4,
        3,
        -2
      ],
      "intervalMs": [
        3700,
        7310
      ]
    },
    "siostra": {
      "habit": "Rusza ku szybie i urywa gest w pół słowa",
      "weight": "light",
      "breathMs": 4150,
      "sway": 2.8,
      "duration": 380,
      "tic": [
        2,
        4,
        0
      ],
      "broken": [
        0,
        3,
        -1
      ],
      "intervalMs": [
        3800,
        7480
      ]
    },
    "dama": {
      "habit": "Przyciska palce rękawiczek",
      "weight": "heavy",
      "breathMs": 4950,
      "sway": 0.8,
      "duration": 700,
      "tic": [
        -1,
        1,
        0
      ],
      "broken": null,
      "intervalMs": [
        4000,
        7820
      ]
    },
    "inspektor": {
      "habit": "Usztywnia się przed pytaniem o podpis",
      "weight": "heavy",
      "breathMs": 4600,
      "sway": 0.9,
      "duration": 530,
      "tic": [
        1,
        1,
        0
      ],
      "broken": [
        -2,
        3,
        0
      ],
      "intervalMs": [
        4300,
        8330
      ]
    }
  };

  const moods = ['neutralna', 'mowi', 'emocja', 'klamie'];
  const guestState = { el: null };
  const profileFor = (id = 'wdowiec') => profiles[id.toLowerCase()] || profiles.wdowiec;
  const place = (parent, className, tag = 'div') => {
    const el = document.createElement(tag);
    el.className = className;
    el.setAttribute('aria-hidden', 'true');
    parent.append(el);
    return el;
  };
  const layer = (ctx, className) => {
    const el = place(stage, className);
    ctx.cleanup(() => el.remove());
    return el;
  };
  const move = (x = 0, y = 0, r = 0, s = 1) => ({
    translate: `${x}px ${y}px`, rotate: `${r}deg`, scale: String(s)
  });
  const fadeFrames = duration => [{ opacity: 0 }, { opacity: 1, offset: .4 }, { opacity: 1, offset: duration > 250 ? .85 : .7 }];
  function animateEffect(name, target, frames, duration, opts = {}) {
    if (!target) return idle();
    stop(name, target);
    return job(name, target, ctx => ctx.motion(target,
      reduced && !opts.allowReduced ? (opts.fade ? [{ opacity: opts.fade[0] }, { opacity: opts.fade[1] }] : [{}, {}]) : frames,
      reduced && !opts.allowReduced ? Math.min(duration, 120) : duration, opts.animation, opts.finish ? () => {
        opts.finish();
        ctx.end();
      } : undefined));
  }
  function guestUnmount() {
    const { el, body, faces, images, frame } = guestState;
    if (!el) return;
    stop(undefined, el);
    if (body !== el) stop(undefined, body);
    if (faces) faces.forEach(face => face.remove());
    if (frame) frame.remove();
    if (images) images.clear();
    Object.keys(guestState).forEach(key => delete guestState[key]);
  }
  function guestMount(target, options = {}) {
    guestUnmount();
    const el = resolve(target);
    if (!stage || !enabled || !el) return idle();
    const body = resolve(options.layers && options.layers.body) || el;
    const id = options.profile || 'wdowiec';
    const profile = typeof id === 'string' ? profileFor(id) : id;
    Object.assign(guestState, { el, body, profile, layers: options.layers || {}, mood: options.mood || 'neutralna', broken: Boolean(options.broken) });
    const sprite = options.sprite || (typeof id === 'string' && ['wdowiec','chlopak','maz','siostra','dama','inspektor'].includes(id) ? id : null);
    const urlFor = options.spriteUrl || (sprite && (mood => `${options.spriteBase || 'assets/ppl/'}${sprite}_${mood}.jpg`));
    if (urlFor) {
      guestState.frame = place(body, 'lfx-portrait');
      guestState.faces = [place(guestState.frame, 'lfx-face'), place(guestState.frame, 'lfx-face')];
      guestState.slot = 0;
      guestState.images = new Map(moods.map(mood => {
        const image = new Image();
        image.src = urlFor(mood);
        return [mood, image];
      }));
      guestState.faces[0].style.backgroundImage = `url("${guestState.images.get(guestState.mood).src}")`;
      guestState.faces[0].style.opacity = '1';
    }
    play('guest.breathe', body);
    return job('guest.mount', el, ctx => {
      const repeat = () => {
        if (!ctx.done) ctx.time(range(...profile.intervalMs), () => {}, () => {
          if (!reduced) play('guest.tic', body, { broken: guestState.broken });
          repeat();
        });
      };
      repeat();
    });
  }
  function setMood(mood) {
    const { el, faces, images } = guestState;
    if (!el || !enabled || !faces || !moods.includes(mood) || mood === guestState.mood) return idle();
    stop('guest.mood', el);
    const previous = faces[guestState.slot];
    const current = faces[1 - guestState.slot];
    guestState.slot = 1 - guestState.slot;
    guestState.mood = mood;
    current.style.backgroundImage = `url("${images.get(mood).src}")`;
    current.style.opacity = '1';
    previous.style.opacity = '0';
    return job('guest.mood', el, ctx => {
      const incoming = ctx.animate(current, [{ opacity: 0 }, { opacity: 1 }], 110);
      const outgoing = ctx.animate(previous, [{ opacity: 1 }, { opacity: 0 }], 110);
      ctx.time(110, (_, elapsed) => { incoming.currentTime = outgoing.currentTime = elapsed; });
    });
  }
  function speak({ chars = 0, cps = 60 } = {}) {
    const { el, body, layers } = guestState;
    if (!el || !enabled) return idle();
    stop('guest.speak', el);
    setMood('mowi');
    const duration = clamp(1000 * chars / Math.max(1, cps), 100, 30000);
    return job('guest.speak', el, ctx => {
      const mouth = resolve(layers.mouth) || body;
      const animation = !reduced && ctx.animate(mouth, [move(), move(0, -1.8 * intensity), move()], 180,
        { iterations: Infinity, easing: 'steps(2, end)', composite: 'add' });
      ctx.cleanup(() => { if (enabled && guestState.el === el) setMood('neutralna'); });
      ctx.time(duration, (_, elapsed) => { if (animation) animation.currentTime = elapsed; });
    });
  }
  api.guest = { mount: guestMount, unmount: guestUnmount, setMood, speak,
    stopSpeak() { stop('guest.speak'); },
    setBroken(value) { guestState.broken = Boolean(value); }
  };
  resetExtensions.push(guestUnmount);

  const guestTarget = el => el || guestState.body || guestState.el;
  const currentProfile = options => options.profile ? profileFor(options.profile) : guestState.profile || profiles.wdowiec;
  add('guest.enter', 'Podejście do szyby', (el, opts) => {
    el = guestTarget(el);
    const weight = opts.weight || currentProfile(opts).weight;
    const x = (opts.from === 'left' ? -175 : opts.from === 'bottom' ? 0 : 175) * intensity;
    const y = opts.from === 'bottom' ? 100 * intensity : 10 * intensity;
    const duration = weight === 'light' ? 440 : weight === 'limp' ? 595 : 550;
    if (!el) return idle();
    cue(weight === 'light' ? 'steps_sneakers' : weight === 'heavy' ? 'steps_boots' : 'steps_limp');
    return animateEffect('guest.enter', el, [
      { ...move(x, y), opacity: 0 }, { ...move(x * .68, y * .7 - 8 * intensity), opacity: 1, offset: .25 },
      { ...move(x * .51, y * .5), offset: .43 }, { ...move(x * .26, y * .24 - 6 * intensity), offset: .62 },
      { ...move(-x * .035, 2 * intensity), offset: .85 }, move()
    ], duration, { fade: [0, 1], animation: { easing: weight === 'limp' ? 'linear' : 'ease-out' } });
  });
  add('guest.leave', 'Odwrót od okienka', (el, opts) => {
    const duration = opts.refused ? 200 : 290;
    return animateEffect('guest.leave', guestTarget(el), [
      { ...move(), opacity: 1 }, { ...move(0, 0, 0, -1), scale: '-1 1', opacity: 1, offset: 80 / duration },
      { ...move((opts.refused ? 120 : 78) * intensity, 12 * intensity), scale: '-1 1', opacity: 0 }
    ], duration, { fade: [1, 0], animation: { easing: 'ease-in' } });
  });
  add('guest.breathe', 'Oddech i kołysanie', (el, opts) => {
    el = guestTarget(el);
    if (!el || reduced) return idle();
    const profile = currentProfile(opts), phase = range(0, profile.breathMs);
    stop('guest.breathe', el);
    return job('guest.breathe', el, ctx => {
      const animation = ctx.animate(el, [{}, {}], profile.breathMs, { iterations: Infinity, composite: 'add' });
      let time = phase;
      ctx.time(Infinity, (_, elapsed) => {
        if (elapsed - time > 250 || time === phase) {
          time = elapsed;
          const sway = profile.sway * intensity;
          animation.effect.setKeyframes([
            { translate: `${-sway}px 0px`, scale: '1 1', transformOrigin: '50% 100%' },
            { translate: `${sway}px 0px`, scale: `1 ${1 + .012 * intensity}`, transformOrigin: '50% 100%' },
            { translate: `${-sway}px 0px`, scale: '1 1', transformOrigin: '50% 100%' }
          ]);
        }
        animation.currentTime = elapsed + phase;
      });
    });
  });
  add('guest.tic', 'Nawyk postaci', (el, opts) => {
    if (reduced || !intensity) return idle();
    const profile = currentProfile(opts);
    const sequence = opts.broken ? profile.broken : profile.tic;
    if (!sequence) return idle();
    const hands = resolve(guestState.layers && guestState.layers.hands);
    const frames = [move(), ...sequence.map(x => move(x * intensity, Math.abs(x) * .8 * intensity, x * .23 * intensity)), move()];
    return animateEffect('guest.tic', hands || guestTarget(el), frames, profile.duration,
      { animation: { composite: 'add', easing: 'steps(5, end)' } });
  });
  add('guest.lean', 'Pochylenie ku szybie', (el, opts) => {
    const a = (opts.dir < 0 ? -1 : 1) * clamp(opts.amount == null ? 1 : opts.amount, 0, 2) * intensity;
    return animateEffect('guest.lean', guestTarget(el), [move(), move(2 * a, 4 * a, a, 1 + .023 * a), move()],
      280, { animation: { composite: 'add', easing: 'ease-in-out' } });
  });
  add('guest.flinch', 'Reakcja na nagły bodziec', el => {
    setMood('emocja');
    return animateEffect('guest.flinch', guestTarget(el), [move(), move(-8 * intensity, -9 * intensity, -1.5 * intensity), move()],
      210, { animation: { composite: 'add' } });
  });
  add('guest.liar_tell', 'Niejednoznaczne zawahanie', (el, opts) => {
    el = guestTarget(el);
    if (!el || (!opts.lie && random() >= clamp(opts.falseRate == null ? .25 : opts.falseRate))) return idle();
    const prior = guestState.mood;
    setMood('klamie');
    stop('guest.breathe', el);
    return job('guest.liar_tell', el, ctx => {
      const animation = !reduced && ctx.animate(el, [move(), move(2 * intensity), move(2 * intensity), move()], 600,
        { easing: 'steps(3, end)', composite: 'add' });
      ctx.cleanup(() => {
        if (!ctx.completed || !enabled || guestState.body !== el) return;
        if (guestState.mood === 'klamie') setMood(prior);
        play('guest.breathe', el);
      });
      ctx.time(600, (_, elapsed) => { if (animation) animation.currentTime = elapsed; }, () => { ctx.completed = true; ctx.end(); });
    });
  });

  // Pomiar odbywa się przy uruchomieniu gestu, we współrzędnych sceny.
  function bounds(el) {
    const base = stage.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const scale = base.width / stage.offsetWidth || 1;
    return { x: (rect.left - base.left) / scale, y: (rect.top - base.top) / scale, w: rect.width / scale, h: rect.height / scale };
  }
  function box(el, x, y, w, h) {
    Object.assign(el.style, { left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px` });
    return el;
  }
  function grains(ctx, x, y, count, duration) {
    if (reduced || !intensity) return;
    const particles = Array.from({ length: Math.max(1, Math.round(count * intensity)) }, () => {
      const size = Math.floor(range(2, 6));
      const el = box(layer(ctx, 'lfx-grain'), x + range(-22, 22), y, size, size);
      return ctx.animate(el, [{ ...move(), opacity: 1 }, { ...move(range(-48, 48), range(-55, -18)), opacity: 0 }],
        duration, { easing: 'steps(3, end)' });
    });
    ctx.time(duration, (_, elapsed) => particles.forEach(particle => { particle.currentTime = elapsed; }), () => {});
  }
  add('item.pull', 'Wyjęcie zguby ze skrzyni', el => {
    if (!el) return idle();
    stop('item.pull', el);
    const p = bounds(el);
    return job('item.pull', el, ctx => {
      grains(ctx, p.x + p.w / 2, p.y + p.h * .8, Math.floor(range(6, 11)), 260);
      const frames = reduced ? [{ opacity: 0 }, { opacity: 1 }] :
        [move(0, 65 * intensity, -6 * intensity, .92), move(0, -12 * intensity, 3 * intensity, 1.04), move()];
      ctx.motion(el, frames, reduced ? 120 : 285, { easing: 'ease-out' }, () => { ctx.end(); cue('item_land'); });
    });
  });
  function slideItem(name, el, opts, give) {
    if (!el) return idle();
    stop(name, el);
    const p = bounds(el);
    const x = opts.dx == null ? 115 : opts.dx;
    const y = opts.dy == null ? -95 : opts.dy;
    const duration = reduced ? 120 : 280;
    return job(name, el, ctx => {
      if (!reduced) {
        const shadow = box(layer(ctx, 'lfx-shadow'), p.x + p.w * .12, p.y + p.h * .85, p.w * .76, Math.max(4, p.h * .08));
        ctx.motion(shadow, [move(), move(x, y), move(x, y)], duration, {}, () => {});
      }
      const frames = reduced ? [{ opacity: 1 }, { opacity: give ? 0 : 1 }] : [
        { ...move(), opacity: 1 }, { ...move(x * .6, y * .6 - 26, -3), opacity: 1, offset: .62 },
        { ...move(x, y, 0, .86), opacity: give ? 0 : 1 }
      ];
      ctx.motion(el, frames, duration, { easing: 'cubic-bezier(.55,.12,.3,1)' }, () => {
        ctx.end();
        cue(give ? 'thud' : 'item_land', { handover: true });
        if (give) shake({ trauma: .21 });
      });
    });
  }
  add('item.hand_over', 'Przesunięcie zguby przez ladę', (el, opts) => slideItem('item.hand_over', el, opts, false));
  add('decide.give', 'Wydanie zguby', (el, opts) => {
    const main = slideItem('decide.give', el, opts, true);
    const lean = play('guest.lean', null, { dir: 1 });
    return { finished: Promise.all([main.finished, lean.finished]).then(() => {}), cancel() { main.cancel(); lean.cancel(); } };
  });
  for (const direction of ['in', 'out']) {
    const name = `item.inspect_${direction}`;
    const normal = { ...move(), opacity: 1 };
    const close = { ...move(0, 12, -5, .82), opacity: 0 };
    add(name, 'Oględziny zguby', el => animateEffect(name, el,
      direction === 'in' ? [close, { ...move(0, -2, 2, 1.045), opacity: 1 }, normal] : [normal, close], 230,
      { fade: direction === 'in' ? [0, 1] : [1, 0], animation: { easing: 'ease-out' } }));
  }
  add('item.reject_push', 'Odepchnięcie zguby', el => {
    if (el) cue('thud');
    return animateEffect('item.reject_push', el, [move(), move(-28, 23, -7), move(6, -4, 2), move()], 190);
  });
  add('decide.keep', 'Wsunięcie zguby do szuflady', el => {
    if (!el) return idle();
    cue('drawer_small');
    return animateEffect('decide.keep', el, [{ ...move(), opacity: 1 }, { ...move(0, 24, 0, .89), opacity: .8 },
      { ...move(0, 68, 0, .55), opacity: 0 }], 245, { fade: [1, 0] });
  });
  add('decide.refuse', 'Zatrzaśnięcie okienka', (el, opts) => job('decide.refuse', el, ctx => {
    const glass = resolve(opts.glass || '#glass');
    const p = glass ? bounds(glass) : { x: 258, y: 20, w: 640, h: 660 };
    const frame = box(layer(ctx, 'lfx-clip'), p.x, p.y, p.w, p.h);
    const shutter = place(frame, 'lfx-shutter');
    cue('window_bang');
    const shakeHandle = shake({ trauma: .25 });
    ctx.cleanup(shakeHandle.cancel);
    ctx.motion(shutter, reduced ? [{ opacity: 0 }, { opacity: .55 }, { opacity: 0 }] :
      [move(0, -p.h), { ...move(), offset: .5 }, { ...move(), opacity: 0 }], 195, { easing: 'ease-in' });
  }));
  add('decide.call', 'Dzwonek telefonu', (el, opts) => job('decide.call', el, ctx => {
    const dim = layer(ctx, 'lfx-overlay lfx-dim');
    const phone = resolve(opts.phone) || box(layer(ctx, 'lfx-phone'), 1110, 676, 85, 23);
    cue('phone_ring');
    ctx.motion(dim, [{ opacity: 0 }, { opacity: .25 }, { opacity: 0 }], 750, {}, () => {});
    ctx.motion(phone, reduced ? [{ opacity: .65 }, { opacity: 1 }] :
      [move(), move(0, -9, -4), move(), move(0, -9, 4), move(), move(0, -9, -4), move()],
      750, { easing: reduced ? 'linear' : 'steps(6, end)' });
  }));
  for (const collapse of [false, true]) {
    const name = collapse ? 'pile.collapse' : 'pile.dig';
    add(name, collapse ? 'Osunięcie sterty' : 'Przekopanie sterty', el => {
      if (!el) return idle();
      stop(name, el);
      const p = bounds(el);
      return job(name, el, ctx => {
        cue(collapse ? 'pile_collapse' : 'pile_dig');
        const shakeHandle = shake({ trauma: collapse ? .8 : .17 });
        ctx.cleanup(shakeHandle.cancel);
        const duration = collapse ? 440 : 295;
        grains(ctx, p.x + p.w / 2, p.y + p.h / 2, collapse ? 15 : 8, duration);
        const animations = reduced ? [] : Array.from(el.children).slice(0, 24).map(child =>
          ctx.animate(child, [move(), move(range(-1, 1) * (collapse ? 34 : 8) * intensity,
            range(-4, collapse ? 30 : 5) * intensity, range(-5, 5) * intensity), move()], duration));
        ctx.time(duration, (_, elapsed) => animations.forEach(animation => { animation.currentTime = elapsed; }));
      });
    });
  }
  add('toast.pop', 'Wejście i wyjście komunikatu', (el, opts) => {
    if (!el) return idle();
    stop('toast.pop', el);
    const hold = Math.max(0, opts.holdMs == null ? 850 : opts.holdMs);
    return job('toast.pop', el, ctx => {
      const duration = 165 + hold + 205;
      ctx.motion(el, [
        { ...move(0, reduced ? 0 : 12, 0, reduced ? 1 : .94), opacity: 0 },
        { ...move(0, 0, 0, reduced ? 1 : 1.025), opacity: 1, offset: 120 / duration },
        { ...move(), opacity: 1, offset: 165 / duration },
        { ...move(), opacity: 1, offset: (165 + hold) / duration },
        { ...move(0, reduced ? 0 : -8), opacity: 0 }
      ], duration);
    });
  });
  add('cash.roll', 'Przeliczenie kasy', (el, opts) => {
    if (!el || !Number.isFinite(opts.to)) return idle();
    stop('cash.roll', el);
    const from = Number.isFinite(opts.from) ? opts.from : opts.to;
    const format = opts.format || String;
    if (reduced) { el.textContent = format(opts.to); return idle(); }
    return job('cash.roll', el, ctx => {
      let last;
      ctx.cleanup(() => { el.textContent = format(opts.to); });
      ctx.time(300, (_, elapsed) => {
        const tick = Math.min(5, Math.floor(elapsed / 60));
        if (tick !== last) {
          last = tick;
          el.textContent = format(Math.round(from + (opts.to - from) * ease(tick / 5)));
        }
      });
    });
  });
  add('button.hover', 'Reakcja na wskazanie', el => animateEffect('button.hover', el,
    [move(), move(0, 0, 0, 1.025), move()], 145, { animation: { easing: 'cubic-bezier(.34,1.56,.64,1)' } }));
  add('button.press', 'Wciśnięcie przycisku', el => animateEffect('button.press', el,
    [move(), { ...move(0, 0, 0, .96), offset: .25 }, { ...move(0, 0, 0, .96), offset: .75 }, move()], 120));
  let buttonStage;
  const buttonHover = event => {
    const button = event.target.closest('.btn,.q,.zone');
    if (button && event.pointerType !== 'touch' && !button.contains(event.relatedTarget)) play('button.hover', button);
  };
  const buttonPress = event => {
    const button = event.target.closest('.btn,.q,.zone');
    if (button) play('button.press', button);
  };
  api.autoButtons = value => {
    if (buttonStage) {
      buttonStage.removeEventListener('pointerover', buttonHover);
      buttonStage.removeEventListener('click', buttonPress);
      buttonStage = null;
    }
    if (value && stage) {
      buttonStage = stage;
      stage.addEventListener('pointerover', buttonHover);
      stage.addEventListener('click', buttonPress);
    }
  };
  resetExtensions.push(() => api.autoButtons(false));
  Object.assign(api.internals, { profiles });

  return api;
}));
