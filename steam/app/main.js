const { app, BrowserWindow, ipcMain, Menu, globalShortcut } = require('electron');
const fs = require('fs');
const path = require('path');
const { ACH } = require('./achievements');

// --- ustawienia silnika ---
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.commandLine.appendSwitch('in-process-gpu');            // wymagane przez overlay Steam
app.commandLine.appendSwitch('disable-direct-composition'); // jw. (Windows)

// --- Steam (opcjonalny: bez Steama gra działa normalnie, osiągnięcia tylko logowane) ---
let steam = null;
const APPID = parseInt(process.env.LF_STEAM_APPID || readAppId() || '480', 10); // 480 = Spacewar (test); podmień na własny AppID
function readAppId() { try { return fs.readFileSync(path.join(__dirname, 'steam_appid.txt'), 'utf8').trim(); } catch (e) { return null; } }
try {
  steam = require('steamworks.js');
  steam.init(APPID);
  steam.electronEnableSteamOverlay();
  console.log('[steam] init OK, appid', APPID);
} catch (e) { steam = null; console.log('[steam] niedostępny:', e.message); }

// --- zapis w userData (Steam Auto-Cloud wskazuje ten plik: patrz steam/STEAM_PLAN_WYDANIA.md) ---
const saveFile = () => path.join(app.getPath('userData'), 'savegame.json');
ipcMain.on('lf:save-read', e => { try { e.returnValue = JSON.parse(fs.readFileSync(saveFile(), 'utf8')); } catch (x) { e.returnValue = null; } });
ipcMain.on('lf:save-write', (e, s) => { try { fs.writeFileSync(saveFile() + '.tmp', s); fs.renameSync(saveFile() + '.tmp', saveFile()); } catch (x) { console.warn('save write', x.message); } });

// --- osiągnięcia ---
const unlockedFile = () => path.join(app.getPath('userData'), 'achievements.json');
let unlocked = new Set();
function loadUnlocked() { try { unlocked = new Set(JSON.parse(fs.readFileSync(unlockedFile(), 'utf8'))); } catch (e) {} }
function unlock(id) {
  if (unlocked.has(id)) return;
  unlocked.add(id);
  try { fs.writeFileSync(unlockedFile(), JSON.stringify([...unlocked])); } catch (e) {}
  try { if (steam) steam.achievement.activate(id); } catch (e) { console.warn('[steam] ach', id, e.message); }
  console.log('[ach]', id);
}
ipcMain.handle('lf:fullscreen', () => toggleFs());
ipcMain.handle('lf:quit', () => app.quit());

let win;
function toggleFs() { if (win) win.setFullScreen(!win.isFullScreen()); }
function gamePath() {
  const bundled = path.join(__dirname, 'game', 'index.html');
  return fs.existsSync(bundled) ? bundled : path.join(__dirname, '..', '..', 'game', 'index.html');
}
function create() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({
    width: 1536, height: 1024, minWidth: 960, minHeight: 640, backgroundColor: '#000000',
    fullscreen: !process.argv.includes('--windowed') && !process.env.LF_WINDOWED, autoHideMenuBar: true, title: 'LOST & FRAUD',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: false, backgroundThrottling: false },
  });
  win.loadFile(gamePath());
  win.webContents.on('console-message', (e, level, msg) => { if (level >= 2) console.log('[game]', msg); });
  // F11 / Alt+Enter = pełny ekran (Esc zostaje dla ustawień w grze)
  win.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && (i.key === 'F11' || (i.alt && i.key === 'Enter'))) { toggleFs(); e.preventDefault(); }
  });
  // osiągnięcia: odczyt stanu gry z głównego świata strony co 2 s
  setInterval(async () => {
    if (!win || win.isDestroyed()) return;
    try {
      const raw = await win.webContents.executeJavaScript('JSON.stringify(window.__G ? window.__G() : null)');
      const ST = raw && JSON.parse(raw); if (!ST) return;
      for (const a of ACH) if (!unlocked.has(a.id)) { let ok = false; try { ok = !!a.test(ST); } catch (e) {} if (ok) unlock(a.id); }
    } catch (e) {}
  }, 2000);
}
if (!app.requestSingleInstanceLock()) app.quit();
else app.whenReady().then(() => { loadUnlocked(); create(); });
app.on('window-all-closed', () => app.quit());
