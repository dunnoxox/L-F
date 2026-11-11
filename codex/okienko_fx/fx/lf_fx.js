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

  return api;
}));
