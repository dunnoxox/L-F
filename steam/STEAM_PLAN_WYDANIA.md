# Plan wydania na Steam (skrót, 12.11.2026)

Priorytet Tommy'ego: najpierw jakość gry, Steam później. Ten plik zamyka to, co już gotowe.

## Rekomendacja technologiczna: Electron + steamworks.js
- Gra jest w HTML/JS. Electron opakowuje ją bez przepisywania (dni, nie tygodnie), Chromium jest ten sam na Windows/Linux/Mac (spójny dźwięk i CSS), Steam Deck chodzi przez Proton/Linux.
- Tauri: lżejszy, ale WebView różni się per system (Web Audio i CSS), słabsza integracja Steamworks. Unity: pełny port to tygodnie pracy, szkielet w `unity/` zostaje opcją na później.
- Gotowe w `steam/app/`: `main.js` (okno, F11, Steam init, overlay), `preload.js` (zapis do pliku pod Steam Auto-Cloud), `achievements.js` (19 osiągnięć liczonych ze stanu gry bez zmian w `game/`), `build/prepare-game.js`.
- ZWERYFIKOWANE: Electron 45 uruchamia grę pod xvfb, osiągnięcia odpalają się ze stanu (6 testowych), zapis i lista osiągnięć trafiają do userData. NIEZWERYFIKOWANE: Steam (brak klienta), build electron-builder, Mac/Windows.

## Co musi zrobić Tommy ręcznie
1. Konto Steamworks, podatki i bank, opłata Steam Direct 100 USD (start 21 dni zegara, płać wcześnie).
2. Utworzyć app, wpisać AppID do `steam/app/steam_appid.txt`, dodać osiągnięcia z `achievements.js` (klucze API = `id`).
3. Content Survey: ujawnić grafikę i muzykę z AI (sprawdzić licencje komercyjne).
4. Build: `cd steam/app && npm i && npm run dist:win` (i linux), wgrać SteamPipe.
5. Auto-Cloud: ścieżka `{WinAppDataRoaming}/LOST & FRAUD/savegame.json`.

## Ryzyko nazwy
"Lost & Found" (ShaggyBearGames) to inna fraza i inna gra, ryzyko prawne niskie (nazwy opisowe, brak znaku towarowego znanego nam; nie sprawdzono rejestrów EUIPO/USPTO). Ryzyko rynkowe średnie: mylenie w wyszukiwarce. Łagodzenie: zawsze pełne "LOST & FRAUD", wyróżnik wizualny (linoryt, pomarańcz).

## Reszta pakietu
Teksty sklepu, trailer, screenshoty, wishlist: `steam/00-05`. Opis sklepu trzeba zrównać z buildem (liczba godzin, goście) przed review.
