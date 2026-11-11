// Most gra <-> Steam. Gra (game/) o niczym nie wie: obserwujemy jej stan (window.__G())
// a osiągnięcia liczy proces główny (main.js). Tu: lustrujemy zapis do pliku (Steam Auto-Cloud).
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('LF_STEAM', {
  isSteam: true,
  fullscreen: () => ipcRenderer.invoke('lf:fullscreen'),
  quit: () => ipcRenderer.invoke('lf:quit'),
});

// --- zapis: plik w userData <-> localStorage (klucze okienko_*) ---
let restored = false;
try {
  const saved = ipcRenderer.sendSync('lf:save-read');
  if (saved && typeof saved === 'object') {
    for (const k of Object.keys(saved)) if (k.startsWith('okienko_') && localStorage.getItem(k) == null) localStorage.setItem(k, saved[k]);
    restored = true;
  }
} catch (e) { console.warn('save restore failed', e); }

const dump = () => { const o = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('okienko_')) o[k] = localStorage.getItem(k); } return o; };
let lastDump = '';
setInterval(() => {
  try { const s = JSON.stringify(dump()); if (s !== lastDump) { lastDump = s; ipcRenderer.send('lf:save-write', s); } } catch (e) {}
}, 3000);
