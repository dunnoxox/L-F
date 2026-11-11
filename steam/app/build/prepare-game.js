// Kopiuje ../../game do ./game (bez narzędzi deweloperskich), żeby electron-builder spakował jeden folder.
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', '..', '..', 'game'), dst = path.join(__dirname, '..', 'game');
const skip = new Set(['build_data.py', 'cut_items.py', '__pycache__']);
fs.rmSync(dst, { recursive: true, force: true });
(function cp(a, b) { fs.mkdirSync(b, { recursive: true }); for (const n of fs.readdirSync(a)) { if (skip.has(n)) continue; const s = path.join(a, n), d = path.join(b, n); fs.statSync(s).isDirectory() ? cp(s, d) : fs.copyFileSync(s, d); } })(src, dst);
console.log('game/ skopiowane do', dst);
