# Raport dźwięku – „Okienko” (audio.js + 42 klipy)

Data: 2026-11-11. Pliki gry NIE były edytowane. Wyniki: `/tmp/qa/reports/audio/` (pomiary JSON, `norm/`, `norm.json`, `audio.proposed.js` + `.diff`, `scripts/`).
Metodyka: ffmpeg `ebur128=peak=true` (LUFS-I, LRA, true peak, M-max = maks. loudness momentary 400 ms), `astats` (RMS, DC, clipping), `silencedetect` (-50 dB, 0,1 s), analiza szwu pętli w numpy. Wszystkie klipy: mp3 CBR 96 kb/s, mono, 44,1 kHz. „Dł.” = czas z kontenera (ffprobe, zawiera padding enkodera ~0,036 s); po zdekodowaniu klipy mają równe 2/3/4/6/8/10/15/20/25 s.

## 0. Wnioski w pigułce

1. **Miks jest o ~27 LU za cichy w ambiencie i niespójny w SFX.** Ambient (tło) przy ustawieniach domyślnych wychodzi **-50,7 LUFS** (okno zamknięte), a cel to -24. Jednocześnie SFX wychodzą w grze na M-max -21…-41 LUFS, czyli **+10…+30 LU ponad tłem** (cel: ≤ +6). Efekt: każdy dźwięk „wystrzeliwuje” z ciszy, deszcz i brzęczenie lampy są prawie niesłyszalne.
2. Klipy są normalizowane **peakiem** (SFX TP ≈ -3,5 dBTP), a nie głośnością: LUFS-I SFX rozrzuca się od **-33,1 do -12,2 (21 LU)**. Tabela `GAIN` w kodzie tylko częściowo to kompensuje (po GAIN nadal 20 LU rozrzutu).
3. **4 pętle mają słyszalny klik na szwie** (amb_vent, amb_rain_heavy_far, amb_wind_gap, amb_clock_tick), 2 kolejne skok HF (rain_tin, gutter_drip). Wypiekłem crossfade 1,5 s w plikach `norm/`.
4. Kod: crash przy uszkodzonym `localStorage`, brak `resume()` AudioContext, błąd `sweep()` (fallback przy throttlingu), brak limitu głosów, brak stop pętli/timerów, „mumble” głosu o -69 LUFS (niesłyszalny).
5. Brak clippingu w żadnym pliku (maks. TP -2,4 dBTP – sfx_delivery_tram), DC pomijalny (|DC| ≤ 7,2e-4 ≈ -63 dBFS, maks. sfx_knock_insistent).

## 1. Pomiary 42 klipów (posortowane po LUFS-I)

| plik | dł. [s] | LUFS-I | LRA [LU] | TP [dBTP] | M-max | RMS [dBFS] | DC | uwagi |
|---|---|---|---|---|---|---|---|---|
| amb_gutter_drip | 20.04 | -56.3 | 5.7 | -24.1 | -48.1 | -59.7 | -7.0e-06 | crest 32 dB (b. szpiczasty); b. cichy (<-47) |
| amb_clock_tick | 20.04 | -50.4 | 3.2 | -22.5 | -43.0 | -45.9 | -4.2e-04 | crest 28 dB (b. szpiczasty); b. cichy (<-47) |
| amb_wind_gap | 15.05 | -48.9 | 12.6 | -28.9 | -37.1 | -50.0 | 0.0e+00 | b. cichy (<-47) |
| amb_vent | 20.04 | -48.6 | 1.9 | -29.7 | -46.6 | -43.3 | 2.9e-05 | b. cichy (<-47) |
| amb_footsteps_corridor_far | 8.05 | -47.8 | 5.8 | -19.5 | -43.3 | -49.3 | -2.0e-05 | cisza na końcu 1.67 s; crest 28 dB (b. szpiczasty); b. cichy (<-47) |
| amb_sodium_hum | 15.05 | -47.4 | 2.0 | -27.0 | -44.8 | -36.2 | -3.2e-04 | b. cichy (<-47) |
| amb_rain_tin | 20.04 | -44.1 | 1.2 | -20.4 | -41.0 | -45.1 | -6.0e-05 | crest 24 dB (b. szpiczasty) |
| amb_traffic_distant | 25.05 | -42.7 | 1.5 | -24.6 | -41.0 | -39.0 | -5.4e-05 | - |
| amb_building_creak | 8.05 | -42.1 | 9.3 | -19.0 | -35.2 | -46.8 | 1.2e-05 | cisza na pocz. 2.20 s; cisza na końcu 1.22 s; crest 23 dB (b. szpiczasty) |
| amb_rain_heavy_far | 25.05 | -37.8 | 1.3 | -17.7 | -35.6 | -31.4 | -2.4e-04 | - |
| amb_rain_glass | 20.04 | -35.9 | 1.9 | -11.4 | -31.0 | -38.2 | -5.7e-05 | crest 24 dB (b. szpiczasty) |
| sfx_steps_heels | 4.05 | -33.1 | 1.5 | -3.6 | -31.6 | -34.9 | -4.6e-05 | cisza na pocz. 0.29 s; crest 30 dB (b. szpiczasty); CICHY wzgl. kategorii |
| sfx_lamp_flicker | 3.03 | -31.7 | 20.0 | -3.3 | -27.5 | -37.2 | -4.4e-04 | LRA niemiarodajne (krótki transjent); crest 28 dB (b. szpiczasty); CICHY wzgl. kategorii |
| amb_thunder_far | 10.03 | -31.3 | 19.9 | -10.6 | -25.6 | -32.0 | -1.7e-04 | cisza na końcu 0.59 s; LRA niemiarodajne (krótki transjent) |
| sfx_lock_large | 3.03 | -31.0 | 20.0 | -6.1 | -26.9 | -35.5 | -1.0e-04 | LRA niemiarodajne (krótki transjent); crest 25 dB (b. szpiczasty); CICHY wzgl. kategorii |
| sfx_door_lock_day_end | 3.03 | -29.6 | 20.0 | -3.1 | -25.9 | -32.3 | 4.0e-06 | LRA niemiarodajne (krótki transjent); crest 26 dB (b. szpiczasty) |
| sfx_steps_sneakers | 4.05 | -29.4 | 1.4 | -3.6 | -25.6 | -34.9 | -4.1e-04 | crest 26 dB (b. szpiczasty) |
| amb_tram_far | 8.05 | -29.0 | 26.5 | -17.0 | -25.9 | -35.7 | -2.8e-05 | cisza na końcu 1.52 s; LRA niemiarodajne (krótki transjent) |
| sfx_newspaper | 3.03 | -29.0 | 20.0 | -3.5 | -24.8 | -34.0 | -2.6e-05 | cisza na końcu 0.52 s; LRA niemiarodajne (krótki transjent); crest 26 dB (b. szpiczasty) |
| sfx_drawer_small | 2.04 | -28.7 | 0.0 | -3.8 | -26.7 | -30.4 | -1.4e-04 | crest 25 dB (b. szpiczasty) |
| sfx_lock_small | 2.04 | -28.6 | 0.0 | -2.8 | -27.5 | -33.9 | -4.3e-05 | crest 26 dB (b. szpiczasty) |
| sfx_wallet_open | 2.04 | -28.5 | 0.0 | -3.4 | -25.0 | -33.2 | 1.8e-04 | crest 25 dB (b. szpiczasty) |
| sfx_pile_dig | 5.04 | -27.8 | 2.8 | -3.5 | -23.0 | -32.0 | -2.1e-05 | cisza na końcu 0.87 s; crest 24 dB (b. szpiczasty) |
| sfx_drawer_big | 3.03 | -27.5 | 20.0 | -3.6 | -23.5 | -30.9 | 2.1e-05 | cisza na pocz. 0.52 s; cisza na końcu 1.07 s; LRA niemiarodajne (krótki transjent); crest 24 dB (b. szpiczasty) |
| sfx_steps_boots | 4.05 | -26.4 | 0.7 | -3.4 | -23.5 | -26.1 | -1.9e-04 | crest 23 dB (b. szpiczasty) |
| sfx_handover | 1.04 | -26.1 | 0.0 | -3.5 | -26.1 | -29.3 | -1.5e-04 | crest 23 dB (b. szpiczasty) |
| sfx_knock_impatient | 2.04 | -26.1 | 0.0 | -4.6 | -24.2 | -26.8 | -2.7e-04 | cisza na pocz. 0.14 s; cisza na końcu 0.53 s |
| sfx_refuse | 2.04 | -25.8 | 0.0 | -5.9 | -22.9 | -29.6 | -5.0e-05 | cisza na pocz. 0.21 s; cisza na końcu 0.73 s |
| sfx_pile_collapse | 3.03 | -25.5 | 20.0 | -3.5 | -22.1 | -28.9 | -1.7e-04 | LRA niemiarodajne (krótki transjent); crest 22 dB (b. szpiczasty) |
| amb_car_pass_wet | 6.03 | -25.3 | 12.4 | -13.6 | -22.2 | -31.6 | -5.8e-05 | cisza na pocz. 0.23 s; cisza na końcu 1.04 s |
| sfx_knock_polite | 2.04 | -25.0 | 0.0 | -3.5 | -24.3 | -28.8 | -8.0e-05 | cisza na końcu 0.52 s |
| sfx_window_up | 2.04 | -24.3 | 0.0 | -4.5 | -20.0 | -25.3 | 1.6e-04 | cisza na pocz. 0.24 s |
| sfx_trapdoor | 4.05 | -23.3 | 19.0 | -3.4 | -20.4 | -27.7 | 3.3e-05 | cisza na pocz. 0.11 s; cisza na końcu 1.26 s; LRA niemiarodajne (krótki transjent) |
| sfx_window_down | 2.04 | -23.3 | 0.0 | -3.5 | -19.3 | -25.0 | -7.6e-05 | - |
| sfx_delivery_tram | 6.03 | -22.3 | 9.5 | -2.4 | -14.5 | -25.6 | 1.3e-05 | cisza na końcu 0.87 s |
| sfx_slide_light | 1.04 | -20.9 | 0.0 | -3.4 | -18.8 | -22.6 | 1.0e-05 | - |
| sfx_slide_heavy | 2.04 | -20.2 | 0.0 | -3.9 | -17.1 | -21.3 | -3.1e-05 | cisza na pocz. 0.29 s |
| sfx_bag_zip | 3.03 | -19.6 | 20.0 | -3.2 | -15.9 | -20.7 | 1.2e-05 | LRA niemiarodajne (krótki transjent); GŁOŚNY wzgl. kategorii |
| sfx_knock_insistent | 3.03 | -19.5 | 20.0 | -3.5 | -17.6 | -18.1 | -7.2e-04 | LRA niemiarodajne (krótki transjent); DC ~-63 dBFS (pomijalne); GŁOŚNY wzgl. kategorii |
| sfx_power_out | 6.03 | -17.0 | 11.0 | -3.6 | -12.8 | -17.9 | -2.4e-04 | GŁOŚNY wzgl. kategorii |
| sfx_bell_window | 2.04 | -13.5 | 0.0 | -3.3 | -11.1 | -20.5 | -3.9e-05 | cisza na końcu 0.87 s; GŁOŚNY wzgl. kategorii |
| sfx_phone_old_ring | 4.05 | -12.2 | 7.3 | -3.9 | -11.2 | -19.5 | -1.3e-04 | GŁOŚNY wzgl. kategorii |

Legenda: M-max = najgłośniejsze momentary (400 ms) – dla krótkich SFX lepsza miara niż LUFS-I; LRA 20,0 dla krótkich SFX to artefakt bramkowania (niemiarodajne). Crest = TP − LUFS-I.

Cisza na początku >0,1 s (opóźnienie względem akcji/animacji, P3): sfx_drawer_big 0,52; sfx_slide_heavy 0,29; sfx_steps_heels 0,29; sfx_window_up 0,24; sfx_refuse 0,21; sfx_knock_impatient 0,14; sfx_trapdoor 0,11 (amb_building_creak 2,2 s – zdarzenie ambientowe, nie ma znaczenia). Nie przycinałem w `norm/`, żeby nie rozjechać synchronizacji z grafiką; do decyzji projektanta.

Odstępstwa w kategoriach (LUFS-I klipu):
- **SFX za głośne**: sfx_phone_old_ring (-12,2), sfx_bell_window (-13,5), sfx_power_out (-17,0), sfx_knock_insistent (-19,5), sfx_bag_zip (-19,6), sfx_slide_heavy/light (-20,2/-20,9). Mediana kategorii ≈ -27.
- **SFX za ciche**: sfx_steps_heels (-33,1), sfx_lamp_flicker (-31,7), sfx_lock_large (-31,0), sfx_door_lock_day_end (-29,6) – to zarazem klipy o największym crest factorze (26-30 dB), więc LUFS-I je „zaniża”, ale M-max też jest niskie (-26…-32).
- **Ambienty**: rozrzut LUFS-I -56,3…-35,9 (20 LU). Tylko rain_glass (-35,9) i rain_heavy_far (-37,8) są w zasięgu celu; hum, vent, clock, drip, wind, tin leżą w -44…-56.

## 2. Tor sygnału i efektywna głośność w grze (ustawienia domyślne)

Tor z audio.js: klip → gain klipu → (Outside: gain okna 0,6 + LP 1900 Hz | Inside: 1,0) → `amb` (suwak lin(0,8)=0,64 = -3,9 dB) → `master` (0,64 = -3,9 dB) → DynamicsCompressor („limiter” thr -3 dB, ratio 20) → wyjście. SFX: gain `GAIN[n]` (×rnd 1,0) → `sfx` (0,64) → `master` (0,64). UI (`tick`) → `ui` (też suwak sfx). Voice → `voice` (0,64) → `master`. Ducking: tylko `mumble()` – `amb` ×0,7 (-3,1 dB), attack 0,05 s, release 0,4 s.
Dla stereo: mono rozdzielone na L=R daje +3 dB LUFS (dodane w obliczeniach); klipy z `pan` (StereoPanner, równa moc) bez +3.
Stan okna zmienia poziom: Outside gain closed 0,6 / ajar 0,85 / open 1,0 (+LP 1900/5000/11000 Hz), drzwi: 0,3 + LP 1100.

**Ambient bed (suma pętli, okno closed, domyślne suwaki), symulacja 60 s:** closed **-50,7 LUFS**, door **-57,8**, ajar **-45,9**, open **-43,9** (cel -24: brakuje 26,7 LU). Kompresor dodatkowo (Chrome) ma automatyczny makeup rzędu +1-2 dB – nie wliczone.
Warstwy (I każdej z osobna): deszcz glass -55,2, heavy_far -53,1, a **tin -68, drip -70, traffic -66, wind -68, hum -69, vent -70, clock -69** – czyli 13-17 dB pod deszczem i praktycznie poza słyszalnością. Wynika to z tego, że gainy pętli (0,1-0,55) były dobrane pod klipy znormalizowane peakiem, a nie pod głośność.

| klip | ścieżka | gain w kodzie | tor [dB] | LUFS-M(max) w grze | TP w grze | M vs bed (-50,7) |
|---|---|---|---|---|---|---|
| amb_rain_glass (pętla) | Outside | 0.55 | -14.4 | I=-55.2 | - | -4.5 LU (I) |
| amb_rain_tin (pętla) | Outside | 0.2 | -23.2 | I=-68.3 | - | -17.6 LU (I) |
| amb_rain_heavy_far (pętla) | Outside | 0.5 | -15.2 | I=-53.1 | - | -2.4 LU (I) |
| amb_gutter_drip (pętla) | Outside | 0.18 | -24.1 | I=-70.0 | - | -19.3 LU (I) |
| amb_traffic_distant (pętla) | Outside | 0.2 | -23.2 | I=-65.8 | - | -15.1 LU (I) |
| amb_wind_gap (pętla) | Outside | 0.1 | -29.2 | I=-68.0 | - | -17.3 LU (I) |
| amb_sodium_hum (pętla) | Inside | 0.12 | -23.2 | I=-68.8 | - | -18.1 LU (I) |
| amb_vent (pętla) | Inside | 0.1 | -24.7 | I=-70.0 | - | -19.3 LU (I) |
| amb_clock_tick (pętla) | Inside | 0.1 | -24.7 | I=-68.8 | - | -18.1 LU (I) |
| amb_car_pass_wet (zdarz.) | Outside+pan | 0.22 | - | -53.0 | -42.6 | -2.3 |
| amb_tram_far (zdarz.) | Outside+pan | 0.14 | - | -58.0 | -49.2 | -7.3 |
| amb_thunder_far (zdarz.) | Outside | 0.5 | - | -40.8 | -25.8 | +9.9 |
| amb_building_creak (zdarz.) | Inside | 0.2 | - | -53.9 | -37.7 | -3.2 |
| amb_footsteps_corridor_far (zdarz.) | Inside+pan | 0.14 | - | -68.1 | -44.3 | -17.4 |
| sfx_steps_heels | SFX | 0.6 | -9.2 | -40.7 | -12.8 | +10.0 |
| sfx_lock_small | SFX | 0.5 | -10.8 | -38.3 | -13.5 | +12.4 |
| sfx_lamp_flicker | SFX | 0.6 | -9.2 | -36.7 | -12.4 | +14.0 |
| sfx_lock_large | SFX | 0.6 | -9.2 | -36.1 | -15.3 | +14.6 |
| sfx_drawer_small | SFX | 0.6 | -9.2 | -35.9 | -13.0 | +14.8 |
| sfx_newspaper | SFX | 0.5 | -10.8 | -35.6 | -14.2 | +15.1 |
| sfx_steps_sneakers | SFX | 0.6 | -9.2 | -34.8 | -12.8 | +15.9 |
| sfx_pile_dig | SFX | 0.45 | -11.7 | -34.6 | -15.2 | +16.1 |
| sfx_wallet_open | SFX | 0.6 | -9.2 | -34.2 | -12.6 | +16.5 |
| sfx_handover | SFX | 0.7 | -7.8 | -34.0 | -11.4 | +16.7 |
| sfx_door_lock_day_end | SFX | 0.7 | -7.8 | -33.7 | -10.9 | +17.0 |
| sfx_steps_boots | SFX | 0.6 | -9.2 | -32.7 | -12.6 | +18.0 |
| sfx_drawer_big | SFX | 0.6 | -9.2 | -32.7 | -12.8 | +18.0 |
| sfx_knock_polite | SFX | 0.7 | -7.8 | -32.1 | -11.3 | +18.6 |
| sfx_knock_impatient | SFX | 0.7 | -7.8 | -32.1 | -12.5 | +18.6 |
| sfx_refuse | SFX | 0.6 | -9.2 | -32.1 | -15.1 | +18.6 |
| sfx_window_up | SFX | 0.5 | -10.8 | -30.7 | -15.2 | +20.0 |
| sfx_window_down | SFX | 0.5 | -10.8 | -30.0 | -14.3 | +20.7 |
| sfx_pile_collapse | SFX | 0.7 | -7.8 | -29.9 | -11.3 | +20.8 |
| sfx_slide_light | SFX | 0.5 | -10.8 | -29.6 | -14.2 | +21.1 |
| sfx_trapdoor | SFX | 0.6 | -9.2 | -29.6 | -12.6 | +21.1 |
| sfx_slide_heavy | SFX | 0.5 | -10.8 | -27.9 | -14.7 | +22.8 |
| sfx_bag_zip | SFX | 0.5 | -10.8 | -26.7 | -13.9 | +24.0 |
| sfx_knock_insistent | SFX | 0.7 | -7.8 | -25.4 | -11.3 | +25.3 |
| sfx_delivery_tram | SFX | 0.5 | -10.8 | -25.2 | -13.2 | +25.5 |
| sfx_phone_old_ring | SFX | 0.4 | -12.7 | -23.9 | -16.6 | +26.8 |
| sfx_power_out | SFX | 0.6 | -9.2 | -21.9 | -12.7 | +28.8 |
| sfx_bell_window | SFX | 0.55 | -9.9 | -21.0 | -13.2 | +29.7 |

Wnioski: SFX +10…+30 LU nad tłem; zdarzenia ambientowe niespójne (grzmot +9,9 LU nad tłem, footsteps_far -17 LU, tram -7 LU); `mumble()` (voice, szum pasmowy v=0,05, Q=3) ≈ **-69 LUFS** (M) – niesłyszalny nawet przy obecnym tle; `tick()` -45 LUFS, `stamp()` -29 LUFS (także za cichy względem SFX -20…-30).

## 3. Pętle – szwy

Kod pętli: `loopStart=0,05`, `loopEnd=dur-0,05`, losowy start. Pętle: 9 plików (długości 15 / 20 / 25 s: wind_gap, hum 15,0; glass, tin, drip, vent, clock 20,0; heavy_far, traffic 25,0). Test szwu: energia HF (druga różnica próbek, okno 64 próbek) na złączeniu koniec→początek w porównaniu z oknami wnętrza pliku. „vs p99” > 0 dB = klik głośniejszy niż 99% okien pliku.

| pętla | długość pliku [s] | pętla po obcięciu 0,05 s [s] | poziom pocz./koniec (0,5 s) [dB] | skok próbki | szew HF vs mediana okien (przed→po) | szew HF vs p99 okien (przed→po) | werdykt |
|---|---|---|---|---|---|---|---|
| amb_rain_glass | 20.0 | 19.9 | -36.7/-39.8 | 0.0064 | -1.8→0.2 | -16.7→-14.3 | ok |
| amb_rain_tin | 20.0 | 19.9 | -47.1/-47.5 | 0.0108 | 14.3→1.8 | -8.6→-20.5 | słyszalny skok HF |
| amb_rain_heavy_far | 25.0 | 24.9 | -32.2/-32.4 | 0.0389 | 25.3→-2.1 | 14.1→-13.0 | KLIK (zły szew) |
| amb_gutter_drip | 20.0 | 19.9 | -57.1/-64.1 | 0.0 | 11.9→-1.4 | -13.2→-25.8 | słyszalny skok HF |
| amb_traffic_distant | 25.0 | 24.9 | -38.7/-39.1 | 0.001 | -0.1→-2.5 | -4.3→-6.6 | ok |
| amb_wind_gap | 15.0 | 14.9 | -52.0/-57.0 | 0.0052 | 27.1→-10.1 | 6.6→-31.5 | KLIK (zły szew) |
| amb_sodium_hum | 15.0 | 14.9 | -37.3/-36.2 | 0.0035 | -2.6→5.9 | -9.8→-0.2 | ok |
| amb_vent | 20.0 | 19.9 | -44.9/-44.6 | 0.0024 | 38.9→1.8 | 34.0→-3.1 | KLIK (zły szew) |
| amb_clock_tick | 20.0 | 19.9 | -46.6/-49.5 | 0.0063 | 13.1→4.3 | 4.1→-4.5 | KLIK (zły szew) |

Wniosek: **crossfade/wypieczenie szwu potrzebne** dla vent (+34 dB ponad p99: wyraźny trzask), heavy_far (+14), wind_gap (+6,6, plus skok poziomu ~5 dB między początkiem a końcem), clock_tick (+4); drip i rain_tin mają skok widma/poziomu (drip: -57/-64 dB początek/koniec), mniej słyszalny. Pliki w `norm/` mają szew wypieczony: crossfade equal-power 1,5 s + 50 ms cyklicznego zawinięcia z obu stron (długość pętli = długość oryginału − 1,5 s, wartości w `LOOP_LEN`). Po wypieczeniu wszystkie szwy < p99 (hum +5,9 dB nad medianą, ale -0,2 dB względem p99 – akceptowalne, tonalny). **Uwaga**: pętlę trzeba zapętlić na `loopStart=0,05`, `loopEnd=0,05+LOOP_LEN` (a nie `duration-0,05`), bo mp3 po dekodowaniu ma ±kilka–kilkanaście próbek paddingu, a to wystarcza, by szew znów kliknął. W `audio.proposed.js` zrobione.

## 4. Normalizacja

Założenia (zgodnie z zadaniem): pętle ambientu → -24 LUFS-I; zdarzenia ambientowe → M-max -24; SFX → M-max -20 LUFS (spójna głośność momentary, nie peak); TP ≤ -1 dBTP (twarde ograniczenie gainu: przy TP-cap pętle o dużym crest, tj. rain_glass, rain_tin, gutter_drip, clock_tick, nie osiągają -24; SFX capowane do -2 dBTP – to klipy-transjenty). Normalizacja = proste `volume` (bez kompresji/limitera, bez zmiany charakteru), enkodowanie ponownie libmp3lame 96k mono 44,1k; po enkodowaniu zmierzone TP ≤ -1,9 dBTP we wszystkich 42 plikach.

**Użyj ALBO plików z `norm/` ALBO oryginałów z mnożnikiem NORM (`norm.json`, gain_dB) – nie oba naraz.** Pliki z `norm/` mają dodatkowo wypieczone szwy pętli.

| plik | klasa | gain_dB (NORM) | LUFS-I przed→po | M-max przed→po | TP przed→po | uwagi |
|---|---|---|---|---|---|---|
| amb_building_creak | amb_event | +11.20 | -42.1→-31.6 | -35.2→-24.4 | -19.0→-8.2 | - |
| amb_car_pass_wet | amb_event | -1.80 | -25.3→-27.6 | -22.2→-24.5 | -13.6→-15.3 | - |
| amb_clock_tick | loop | +21.00 | -50.4→-29.6 | -43.0→-22.5 | -22.5→-2.0 | szew: crossfade equal-power 1.5 s + 50 ms wrap; ogr. true-peak |
| amb_footsteps_corridor_far | amb_event | +18.00 | -47.8→-30.3 | -43.3→-25.8 | -19.5→-1.9 | ogr. true-peak |
| amb_gutter_drip | loop | +22.60 | -56.3→-34.1 | -48.1→-25.9 | -24.1→-1.9 | szew: crossfade equal-power 1.5 s + 50 ms wrap; ogr. true-peak |
| amb_rain_glass | loop | +10.80 | -35.9→-25.5 | -31.0→-20.7 | -11.4→-2.0 | szew: crossfade equal-power 1.5 s + 50 ms wrap; ogr. true-peak |
| amb_rain_heavy_far | loop | +13.70 | -37.8→-24.5 | -35.6→-22.5 | -17.7→-4.5 | szew: crossfade equal-power 1.5 s + 50 ms wrap |
| amb_rain_tin | loop | +18.90 | -44.1→-25.6 | -41.0→-22.3 | -20.4→-1.9 | szew: crossfade equal-power 1.5 s + 50 ms wrap; ogr. true-peak |
| amb_sodium_hum | loop | +23.40 | -47.4→-24.4 | -44.8→-22.0 | -27.0→-4.1 | szew: crossfade equal-power 1.5 s + 50 ms wrap |
| amb_thunder_far | amb_event | +1.60 | -31.3→-30.2 | -25.6→-24.5 | -10.6→-9.4 | - |
| amb_traffic_distant | loop | +18.70 | -42.7→-24.5 | -41.0→-22.8 | -24.6→-6.3 | szew: crossfade equal-power 1.5 s + 50 ms wrap |
| amb_tram_far | amb_event | +1.90 | -29.0→-27.5 | -25.9→-24.4 | -17.0→-15.5 | - |
| amb_vent | loop | +24.50 | -48.6→-24.5 | -46.6→-22.3 | -29.7→-5.7 | szew: crossfade equal-power 1.5 s + 50 ms wrap |
| amb_wind_gap | loop | +24.40 | -48.9→-24.5 | -37.1→-13.2 | -28.9→-4.9 | szew: crossfade equal-power 1.5 s + 50 ms wrap |
| sfx_bag_zip | sfx | -4.10 | -19.6→-24.2 | -15.9→-20.6 | -3.2→-7.8 | - |
| sfx_bell_window | sfx | -8.90 | -13.5→-22.8 | -11.1→-20.4 | -3.3→-12.3 | - |
| sfx_delivery_tram | sfx | -5.50 | -22.3→-28.5 | -14.5→-20.7 | -2.4→-8.2 | - |
| sfx_door_lock_day_end | sfx | +1.10 | -29.6→-29.0 | -25.9→-25.2 | -3.1→-2.5 | ogr. true-peak |
| sfx_drawer_big | sfx | +1.60 | -27.5→-26.3 | -23.5→-22.4 | -3.6→-2.4 | ogr. true-peak |
| sfx_drawer_small | sfx | +1.80 | -28.7→-27.3 | -26.7→-25.3 | -3.8→-2.4 | ogr. true-peak |
| sfx_handover | sfx | +1.50 | -26.1→-25.1 | -26.1→-25.1 | -3.5→-2.4 | ogr. true-peak |
| sfx_knock_impatient | sfx | +2.60 | -26.1→-24.0 | -24.2→-22.1 | -4.6→-2.5 | ogr. true-peak |
| sfx_knock_insistent | sfx | -2.40 | -19.5→-22.3 | -17.6→-20.4 | -3.5→-6.3 | - |
| sfx_knock_polite | sfx | +1.50 | -25.0→-24.0 | -24.3→-23.2 | -3.5→-2.5 | ogr. true-peak |
| sfx_lamp_flicker | sfx | +1.30 | -31.7→-30.9 | -27.5→-26.8 | -3.3→-2.3 | ogr. true-peak |
| sfx_lock_large | sfx | +4.10 | -31.0→-27.7 | -26.9→-23.3 | -6.1→-2.3 | ogr. true-peak |
| sfx_lock_small | sfx | +0.80 | -28.6→-29.1 | -27.5→-27.8 | -2.8→-2.2 | ogr. true-peak |
| sfx_newspaper | sfx | +1.50 | -29.0→-28.0 | -24.8→-23.8 | -3.5→-2.5 | ogr. true-peak |
| sfx_phone_old_ring | sfx | -8.80 | -12.2→-21.4 | -11.2→-20.4 | -3.9→-13.1 | - |
| sfx_pile_collapse | sfx | +1.50 | -25.5→-24.5 | -22.1→-21.0 | -3.5→-2.4 | ogr. true-peak |
| sfx_pile_dig | sfx | +1.50 | -27.8→-26.8 | -23.0→-22.0 | -3.5→-2.6 | ogr. true-peak |
| sfx_power_out | sfx | -7.20 | -17.0→-24.6 | -12.8→-20.4 | -3.6→-11.2 | - |
| sfx_refuse | sfx | +2.90 | -25.8→-23.4 | -22.9→-20.5 | -5.9→-3.4 | - |
| sfx_slide_heavy | sfx | -2.90 | -20.2→-23.6 | -17.1→-20.5 | -3.9→-7.3 | - |
| sfx_slide_light | sfx | -1.20 | -20.9→-22.5 | -18.8→-20.4 | -3.4→-5.1 | - |
| sfx_steps_boots | sfx | +1.40 | -26.4→-25.4 | -23.5→-22.6 | -3.4→-2.5 | ogr. true-peak |
| sfx_steps_heels | sfx | +1.60 | -33.1→-31.9 | -31.6→-30.4 | -3.6→-2.4 | ogr. true-peak |
| sfx_steps_sneakers | sfx | +1.60 | -29.4→-28.2 | -25.6→-24.4 | -3.6→-2.4 | ogr. true-peak |
| sfx_trapdoor | sfx | +0.40 | -23.3→-23.4 | -20.4→-20.5 | -3.4→-3.4 | - |
| sfx_wallet_open | sfx | +1.40 | -28.5→-27.7 | -25.0→-24.1 | -3.4→-2.5 | ogr. true-peak |
| sfx_window_down | sfx | -0.70 | -23.3→-24.5 | -19.3→-20.4 | -3.5→-4.6 | - |
| sfx_window_up | sfx | +0.00 | -24.3→-24.7 | -20.0→-20.4 | -4.5→-5.0 | - |

### 4b. Nowe gainy w kodzie (policzone pod pliki z `norm/`, domyślne suwaki, okno closed)

Po normalizacji plików stare gainy w `audio.js` przestają mieć sens (stare `GAIN` kompensowały nierówność peakową). Proponowane (zaimplementowane w `audio.proposed.js`):

- Pętle (`LOOP_G`): rain_glass 3,31; rain_heavy_far 1,92; rain_tin 0,97; traffic 0,84; wind 0,58; hum 0,56; vent 0,40; clock 0,57; drip 1,0 (drip i clock dobrane pod peak, nie LUFS – to rzadkie transjenty). Wynik: **bed closed -23,9 LUFS (TP -7,8), door -28,9, ajar(0,7) -20,8, open(0,65) -20,6 (TP +1,2 przed limiterem)**. Dla `open` zmniejszyłem gain okna z 1,0 do 0,65 (ajar 0,85→0,7), bo przy 1,0 bed wychodził -17,1 LUFS z TP +4,8 dBFS (clipping w kompresorze).
- Zdarzenia (`EV_G`, M-max względem bedu): car_pass 8,17 (0 LU), tram_far 4,80 (-2), thunder 4,89 (+4; `thunder()` ×1,6), building_creak 2,30 (+2), footsteps_far 1,91 (-4). Uwaga: `rare()` losuje ×0,7-1,0 (do -3 dB).
- SFX: jedna stała `SFX_REF=1,73` (+4,75 dB: odrabia suwaki 0,8×0,8 = -7,8 dB i +3 dB mono→stereo), z offsetami w dB: kroki (boots/sneakers) -2, pile_dig -2, slide_light -2, lamp_flicker -2, okno up/down -3 (setWindow używał twardego 0,5).
- `tick` 0,07→0,56, `stamp` 0,5→1,25, `mumble` v 0,05→8 (+ducking ×0,5 zamiast ×0,7, z `cancelScheduledValues`) – inaczej po podniesieniu tła zginą.

Wynik SFX w grze (domyślne suwaki, M-max; bed = -24):

| klip | gain w kodzie (nowy) | M w grze | TP w grze | M vs bed (-24) |
|---|---|---|---|---|
| sfx_steps_heels | 1.73 | -30.4 | -2.4 | -6.4 |
| sfx_lock_small | 1.73 | -27.8 | -2.2 | -3.8 |
| sfx_lamp_flicker | 1.37 | -28.8 | -4.3 | -4.8 |
| sfx_drawer_small | 1.73 | -25.3 | -2.4 | -1.3 |
| sfx_door_lock_day_end | 1.73 | -25.2 | -2.5 | -1.2 |
| sfx_handover | 1.73 | -25.1 | -2.4 | -1.1 |
| sfx_steps_sneakers | 1.37 | -26.4 | -4.4 | -2.4 |
| sfx_wallet_open | 1.73 | -24.1 | -2.5 | -0.1 |
| sfx_newspaper | 1.73 | -23.8 | -2.5 | +0.2 |
| sfx_lock_large | 1.73 | -23.3 | -2.3 | +0.7 |
| sfx_knock_polite | 1.73 | -23.2 | -2.5 | +0.8 |
| sfx_steps_boots | 1.37 | -24.6 | -4.5 | -0.6 |
| sfx_drawer_big | 1.73 | -22.4 | -2.4 | +1.6 |
| sfx_knock_impatient | 1.73 | -22.1 | -2.5 | +1.9 |
| sfx_pile_dig | 1.37 | -24.0 | -4.6 | +0.0 |
| sfx_pile_collapse | 1.73 | -21.0 | -2.4 | +3.0 |
| sfx_delivery_tram | 1.73 | -20.7 | -8.2 | +3.3 |
| sfx_bag_zip | 1.73 | -20.6 | -7.8 | +3.4 |
| sfx_refuse | 1.73 | -20.5 | -3.4 | +3.5 |
| sfx_slide_heavy | 1.73 | -20.5 | -7.3 | +3.5 |
| sfx_trapdoor | 1.73 | -20.5 | -3.4 | +3.5 |
| sfx_bell_window | 1.73 | -20.4 | -12.3 | +3.6 |
| sfx_knock_insistent | 1.73 | -20.4 | -6.3 | +3.6 |
| sfx_phone_old_ring | 1.73 | -20.4 | -13.1 | +3.6 |
| sfx_power_out | 1.73 | -20.4 | -11.2 | +3.6 |
| sfx_slide_light | 1.37 | -22.4 | -7.1 | +1.6 |
| sfx_window_down | 1.22 | -23.4 | -7.6 | +0.6 |
| sfx_window_up | 1.22 | -23.4 | -8.0 | +0.6 |

Rozrzut M po poprawce: -20,4…-28,8 LUFS (poza sfx_steps_heels -30,4, klip o crest 30 dB – na TP-capie nie da się go podnieść bez limitera). Szczyty SFX: TP -2,2…-13 dBFS w grze; max M = bed + 3,6 LU (limit +6 spełniony). Przy suwakach na 1,0 SFX przekraczają 0 dBFS o ok. +5 dB i łapie je kompresor – rozważyć max suwaka ≤ 0,9.

## 5. Błędy / ryzyka w audio.js

| # | Pr. | Linia | Problem | Poprawka (w `audio.proposed.js`) |
|---|---|---|---|---|
| 1 | P1 | – | Poziomy: bed -50,7 vs -24; SFX +10…+30 LU nad bedem; warstwy hum/vent/clock/drip/wind/tin niesłyszalne; mumble -69 LUFS | pliki `norm/` + tabele LOOP_G / EV_G / sg() / mumble×160 |
| 2 | P1 | 12 | Szwy pętli: klik w vent, heavy_far, wind_gap, clock_tick | pliki `norm/` (crossfade) + `loopEnd=0,05+LOOP_LEN[n]` |
| 3 | P2 | 5, 37 | `JSON.parse(localStorage…)` poza try/catch: uszkodzony wpis albo zablokowany storage (SecurityError) rzuca przy ładowaniu modułu → `window.AUD` niezdefiniowane → game.js l.2/24 rzuca TypeError, gra bez dźwięku i z błędem. Sprawdzone w node (SyntaxError przy wczytaniu). `setVol` też bez try | try/catch przy odczycie i zapisie |
| 4 | P2 | 21 | Brak obsługi zablokowanego/przerwanego AudioContext: nigdzie `resume()`, `onstatechange`, ani `state`. `init()` jest wołane z kliknięć (OK dla Chrome), ale nie ma obsługi iOS „interrupted”, ukrytej karty, zawieszenia przez przeglądarkę; timery `rare()`/`scheduleDrops` planują dźwięki na zatrzymanym zegarze (wybuch po wznowieniu) | `ac.resume()` w init + `statechange` + `visibilitychange` + pierwsze `pointerdown/keydown`; `rare()` gra tylko gdy `state==='running'`; eksport `resume()`/`state()` |
| 5 | P2 | 54 | `sweep()`: `sfx('pile_dig',500)` zwraca false także przy throttlingu → przy każdym szybkim ponowieniu gra dodatkowy syntetyczny szum (`burst` 1200 Hz) zamiast ciszy | `sfx` zwraca true przy throttlingu |
| 6 | P2 | 13 | Brak limitu równoczesnych głosów: `slide_light` na każdym kliknięciu (game.js l.82), `tick`, `knock` itd.; spam klików nakłada dziesiątki źródeł, kompresor „pompuje” | licznik `nv`, `MAXV=16`, nowy głos odrzucany po przekroczeniu |
| 7 | P2 | 10, 25 | Ładowanie: 42 fetch+decode naraz (3,67 MB mp3 → ok. 54-58 MB PCM float32, ~305 s audio), `start()` czeka na wszystkie; `catch(()=>{})` połyka błąd bez logu, brak `r.ok` (404 → HTML trafia do decodera), brak timeoutu i retry; zawieszony fetch blokuje start ambientu na zawsze (brak syntetycznego fallbacku, bo `start()` się nie wywoła) | ambienty najpierw (`start()` po 14 plikach), SFX sekwencyjnie w tle; `r.ok`, timeout 15 s (AbortController), 1 retry, `console.warn` |
| 8 | P2 | 56-57 | `mumble()`: ducking bez `cancelScheduledValues`; zmiana suwaka `amb` w trakcie dialogu jest cofana przez zaplanowane `setTargetAtTime`; głębokość duck -3,1 dB mała | `cancelScheduledValues`, ×0,5 |
| 9 | P2 | 42-44 | Stan okna `open` (gain 1,0, brak LP): przy nowym poziomie bed -17,1 LUFS, TP +4,8 dBFS | gain okna closed 0,6 / ajar 0,7 / open 0,65 |
| 10 | P3 | 13 | One-shoty bez `disconnect()`. Realnego wycieku nie ma (źródło+gain nie są nigdzie trzymane i są GC po `ended`), ale warto domknąć graf | `s.onended` → `disconnect` |
| 11 | P3 | 12, 30-32, 40 | Brak stop pętli/timerów: `loop()` nie zachowuje `source`, łańcuchy `setTimeout` w `rare()`, `setInterval` (zegar syntetyczny, `scheduleDrops`) nie są czyszczone; ambient gra także na ekranie tytułowym i po zakończeniu gry. Wielokrotne uruchomienie ambientu po powrocie do tytułu NIE występuje (`init()` ma `if(ac)return`, `start()` raz) – sprawdzone. Stan `B.door` też zostaje po wyjściu do menu (do resetu w game.js l.47) | `stopAmbient()` (zbiera timery `TM` i źródła `LS`) do wołania przy świadomym wyciszeniu; wołać tylko jeśli chcemy ciszę na tytule |
| 12 | P3 | 40 | `scheduleDrops()` gra syntetyczne sinusy 2,4-5,4 kHz co ~0,8 s nawet gdy klip gutter_drip jest załadowany – sztuczny „pik” przy otwartym oknie | pominąć gdy `S.amb_gutter_drip` istnieje (nie zmieniałem w proponowanym pliku) |
| 13 | P3 | 22 | „Limiter” to DynamicsCompressor ze domyślnym knee 30 dB (miękki, nie brickwall) + automatyczny makeup w Chrome | `lim.knee.value=0` (zrobione); docelowo osobny limiter/waveshaper |
| 14 | P3 | 36 | Suwaki 0…1 step 0,05, prawo `v²` (nie dB mimo komentarza): 0,05 = -52 dB, 0 = mute, góra bardzo płaska (0,95 → -0,45 dB); suwak `sfx` steruje też `ui`; efektywnie master×bus = v⁴ (domyślnie -7,8 dB) | ok jako prawo logarytmopodobne; ewentualnie mapowanie dB (-60…0) + osobny suwak UI; maks. suwaków ≤ 0,9 daje zapas na szczyty |
| 15 | P3 | 59-61 | `lampBlink` przywraca hum do twardego 0,12 (po zmianie gainu pętli hum wróci do złej wartości); `thunder()` używa `pile_collapse` jako trzasku piorunu | `HUM_G` (zrobione) |
| 16 | P3 | 42 | `setWindow(s)` z nieznanym stanem daje `undefined` w `frequency` | walidacja stanu |
| 17 | P3 | – | Pierwsze dźwięki przed końcem dekodowania (SFX przed `S[n]`) idą syntetycznym fallbackiem o innym poziomie niż klipy – tony/szumy bez kalibracji | ładowanie ambientów przed SFX skraca to okno |

Nie ruszałem: muzyki (`assets/music/manifest.json` = `[]`, brak plików; ścieżka muzyki w kodzie działa na ciszy), logiki gry w game.js.

## 6. Pliki wyjściowe

- `/tmp/qa/reports/audio/norm/` – 42 znormalizowane mp3 (te same nazwy, 96 kb/s mono 44,1 kHz; pętle z wypieczonym szwem).
- `/tmp/qa/reports/audio/norm.json` – nazwa → gain_dB zastosowany (NORM dla wariantu „oryginały + mnożnik”). `norm_detail.json` – przed/po (I, M, TP, LRA), `loop_len_s`.
- `/tmp/qa/reports/audio/audio.proposed.js` + `audio.proposed.diff` – proponowana wersja audio.js (składnia OK, smoke-test w node z mockiem WebAudio: init, ładowanie z 404, SFX, mumble, okno, grzmot, stopAmbient – bez wyjątków; oryginał na tym samym teście wywala się na uszkodzonym localStorage). Wdrożenie: skopiować `norm/*.mp3` do `assets/snd/` i podmienić audio.js (NORMALIZED_FILES=true), albo zostawić oryginalne pliki i ustawić NORMALIZED_FILES=false (NORM_DB aplikuje gain, ale szwy pozostają niepoprawione).
- Surowe pomiary: `measure.json`, `momentary.json`, `seam.json`, `click.json`, `effective*.json`, `proposed_gains.json`, skrypty w `scripts/`.

## 7. Czego nie zmierzono

Brak odsłuchu (tylko metryki), brak testu w przeglądarce (makeup kompresora, dekoder mp3 w Safari/Firefox, faktyczne zachowanie autoplay). Poziomy w grze to symulacja toru w ffmpeg/numpy (biquad LP 2. rzędu zamiast dokładnego Q WebAudio – błąd rzędu <1 dB). Priorytety względem gry: P1 = zrobić przed wydaniem; P2 = zrobić w tym sprincie; P3 = porządki.
