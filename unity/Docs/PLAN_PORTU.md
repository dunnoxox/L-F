# Okienko: plan portu z przeglądarki do Unity 2D

Stan na 2026-11-11. Źródło: demo E1 v3 (`/mnt/project-files/okienko_e1_v1.zip`: game.js, audio.js, data.js, 13 gości, dni 1–10).
Wszystko, co niżej oznaczone **[zweryfikowane]**, uruchomiono; **[nieprzetestowane]** to kod napisany bez edytora Unity.

## 1. Co jest zrobione w tej paczce

| Element | Status |
|---|---|
| Eksport danych demo -> JSON (`Tools/export_data.js`), 13 gości, 80 rzeczy, kalendarz, `lang/pl.json` (54 klucze) | **zweryfikowane** (uruchomione, pliki w `Data/`) |
| `Okienko.Core` (PRNG, planer dnia, reguły rozmowy, maszyna stanów `GameSession`, `SaveData`) | **zweryfikowane**: skompilowane Mono `mcs` bez błędów i uruchomione w `Tools/CoreHarness`: pełne przejście dni 1–10 dwiema strategiami (wydaj-wszystkim, odmów-wszystkim), 13 gości, saldo $220 zgodne, 12/12 wektorów PRNG z game.js |
| `Okienko.Runtime` (SO, audio, lokalizacja, zapis, widoki, Steam) | **nieprzetestowane**: nie kompilowane (brak Unity w środowisku) |
| Importer Editor, testy EditMode (`CoreTests.cs`) | **nieprzetestowane** w Unity (logika testów sprawdzona harnessem) |

## 2. Architektura

Zasada: reguły gry są w czystym C# bez UnityEngine (`Okienko.Core`, asmdef `noEngineReferences`), więc testuje się je bez sceny, a port Steam/WebGL nie dotyka logiki. Widoki tylko pokazują stan i wołają komendy.

```
Okienko.Core (czysty C#)      Okienko.Runtime (Unity)                 Okienko.Editor
 Models (DTO z JSON)    <---   GameDatabase (ScriptableObjecty)  <---  OkienkoImporter (JSON -> SO)
 SaveData                      GameBootstrap (składa całość)           SpriteImportPreset
 DayPlanner (seed, burze,      ScreenRouter + ScreenView (fazy)
   sterta)                     WindowScreen, DragItem, LampController
 DialogueRules                 AudioDirector + AudioLibrary + AudioMixer
 GameSession (maszyna stanów)  Loc (lang/pl.json), SaveService
                               IPlatformServices (Null / Steamworks.NET)
```

### Dane: ScriptableObjecty
- `GuestDefinition` (postać, tury rozmowy, sekret, decyzje + echo, twarze 4 min, sprite rzeczy, wnętrze, puk, kroki), `ItemDefinition`, `CalendarDefinition`, `GameDatabase` (korzeń).
- Treść żyje w JSON (`Data/guests.json`), bo Tommy i Claude piszą dialogi w Markdown/JSON, a nie w inspektorze. Importer (`Okienko > Importuj dane`) jest idempotentny i zachowuje GUID-y.
- Wielojęzyczność: UI w `StreamingAssets/lang/{kod}.json` (`Loc.T("klucz")`, brak klucza pokazuje `[klucz]`). Dialogi: osobny plik `guests_{kod}.json` na język (do zrobienia w U4, dziś tylko PL). Waluta `$` jest w `lang`.

### Maszyna stanów dnia (`GameSession`)
`Title -> Delivery -> [Inspect] -> Window -> Search -> Decide -> (następny gość: Window) -> Evening -> (Saturday) -> Delivery ... -> WeekEnd`
- Komendy poza dozwoloną fazą rzucają wyjątek (test `Commands_OutOfPhase_Throw`).
- Zdarzenia: `PhaseChanged`, `Autosave` (początek dnia, wieczór, sobota, zakup), `Sting` (audio), `StormStarted`.
- Zasady z dema zachowane: jedna rzecz do zajrzenia dziennie; 3 tury po 3 pytania; pytanie z sekretem zastępuje ostatnie o tym samym tonie; burze w dniach 3 i 8 przesuwają rzeczy o 1–2 skrzynie; echo decyzji po `echoAfterDays`; sobota: czynsz $150 + jedno ulepszenie (lampa $60, drzwi $80, regał $70); $40 za gościa.
- Seed: własny mulberry32 + hash FNV-1a, identyczny z przeglądarką. Wyjątek: tasowanie sterty to Fisher-Yates, bo w demie `sort(()=>r()-.5)` zależy od silnika JS, więc układ skrzyń w Unity będzie inny niż w przeglądarce (celowo, udokumentowane w `Rng.cs`).
- Losowość kosmetyczna (lampa, ruch aut, grzmoty) używa osobnego `System.Random`, nie seeda gry.

### Audio (odpowiednik audio.js)
`AudioMixer` ze strukturą (nazwy parametrów to kontrakt z `AudioDirector`):
```
Master [MasterVol]
 ├ Music   [MusicVol]
 ├ Ambience [AmbVol]  + Duck Volume (sidechain z Voice)
 │   ├ Outside [OutsideVol] + Lowpass Simple [OutsideCutoff]
 │   └ Inside  [InsideVol]
 ├ Sfx   [SfxVol]
 ├ Voice [VoiceVol]  (Send -> Duck Volume Ambience)
 └ Ui    [UiVol]
```
Każdy parametr trzeba wystawić (prawy klik na suwaku głośności > Expose). Okienko = `OutsideCutoff` 1900/1100 (drzwi uszczelnione)/5000/11000 Hz i `OutsideVol`. Suwaki gracza: dB = 40·log10(v) jak w demie. Muzyka: stemy bed/piano/cello/tension/menu/sobota miksowane po scenach (stała czasowa 1,2 s), stingery `st_*`. Brak pliku muzyki = cisza, bez błędu. Mamrotanie: krótkie klipy `voiceBlips` z pitchem wg intymności (zamiennik głosów). Cel głośności -24 LUFS, peak -1 dBTP: **niezmierzone**, do zrobienia w U5 na zbudowanej grze.

## 3. Mapowanie warstw demo -> Unity

Układ odniesienia: scena 1536×1024 (jak `fit()` w game.js). Canvas Scaler: Scale With Screen Size, referencja 1536×1024, Match 0,5; Canvas Screen Space - Camera, kamera ortograficzna.

| Demo (DOM/CSS) | Unity | Uwagi |
|---|---|---|
| `bg` `assets/bg/T1..T5.jpg` | `Image` na dole canvasu, sprite z `CalendarDefinition.backgrounds` | T1 okienko, T2 tytuł, T3 sterta, T4 dostawa, T5 wieczór/sobota |
| `#guest` + `assets/ppl/{face}_{mina}.jpg` | `WindowScreen.guestImage`, 4 sprite'y (neutralna/mowi/emocja/klamie) | brak twarzy = placeholder TMP z imieniem (jest w kodzie) |
| `#glass` (szyba, cel "wydaj") | `RectTransform glass` w `DragItem` | tint + połysk jako osobny `Image` z materiałem UI Default, alfa 0,15 |
| `.crate` / `.zguba` (dostawa, 3 skrzynie wg linii) | `VerticalLayoutGroup` w 3 kolumnach, przycisk `Zajrzyj` | linia z `GameSession.EffectiveLine` |
| `.inspect .pic` + `.hot` (przeszukanie rzeczy) | `Image` rzeczy/wnętrza + niewidzialny `Button` w pozycji z `inside.x/y` lub `HotSpot(seed,id)` | po 3 pudłach klasa `warm` = delikatna poświata (Animator, bool) |
| `.pit` (rzeczy na stercie, drag + klik) | `Image` + `DragItem` (`onClick` = wybór, drag = przekopywanie) | pozycje/obrót/rozmiar z `DayPlanner.BuildCrate`, z-order: `SetAsLastSibling` |
| strefy decyzji `.zone` | 3 `RectTransform` + `DragItem.zones/zoneActions` | działa na mysz, dotyk, pad (Input System) |
| `#fade` (450 ms) | `ScreenRouter` (zgaszenie 225 + rozjaśnienie 225 ms) | `fadeSeconds` w inspektorze |
| `#dim` (mruganie lampy) | `LampController.dimOverlay` | opcja "Ogranicz błyski i wstrząsy" przełącza na miękkie przygaszenie |
| typewriter 16 ms/znak | `WindowScreen.Type` | `typeSpeed`; skrót: klik = dopisz resztę (TODO U2) |
| `localStorage okienko_e1_save` | `SaveService` (plik JSON + PlayerPrefs) | wersja zapisu 3; zapis z dema (v2) nie jest migrowany |
| `localStorage okienko_vol` | `PlayerPrefs okienko_vol_*` | |

Import grafik: `SpriteImportPreset` ustawia Sprite (2D and UI), PPU 100, bez mipmap; rzeczy max 512 px z alfą, tła/twarze max 2048. Struktura: `Assets/Okienko/Art/{ppl,items,in,bg}`. Rzeczy mają tło zielone w oryginałach (C1–C7): trzeba je wyciąć do PNG z alfą (zrobił to `cut_items.py` dema; pliki w `okienko_e1/assets/items/` są już wycięte).

## 4. Lista kodu do napisania (po tym szkielecie)

| # | Plik | Co | Status |
|---|---|---|---|
| 1 | `TitleScreen`, `SettingsPanel` | menu, suwaki dB, język, "ogranicz błyski" | do napisania |
| 2 | `DeliveryScreen` | 3 skrzynie, wybór rzeczy do zajrzenia, `Skip` | do napisania |
| 3 | `InspectScreen` | hotspot, 3 pudła = poświata, notatka sekretu | do napisania |
| 4 | `PileScreen` | zakładki linii, rzeczy z `BuildCrate`, toast "To nie to" | do napisania |
| 5 | `DecideScreen` | `DragItem` + strefy, podsumowanie zysk/strata | do napisania |
| 6 | `EveningScreen`, `SaturdayScreen`, `WeekEndScreen` | listy z echem, czynsz, ulepszenia, koniec | do napisania |
| 7 | `ShakeTrauma` | wstrząs kamery (trauma², zgodnie z zasadami projektu), respektuje opcję dostępności | do napisania |
| 8 | `Rng`, `DayPlanner`, `DialogueRules`, `GameSession`, `SaveData`, `Models` | rdzeń | **gotowe, zweryfikowane harnessem** |
| 9 | `AudioDirector`, `AudioLibrary`, `Loc`, `SaveService`, `GameDatabase` | infrastruktura | gotowe, nieprzetestowane w Unity |
| 10 | `WindowScreen`, `ScreenRouter`, `ScreenView`, `DragItem`, `LampController`, `GameBootstrap` | widoki bazowe | gotowe, nieprzetestowane w Unity |
| 11 | `OkienkoImporter`, `SpriteImportPreset`, `CoreTests` | narzędzia | gotowe, nieprzetestowane w Unity |
| 12 | `SteamPlatform` + osiągnięcia | Steamworks.NET za `#if STEAMWORKS_NET` | gotowe, nieprzetestowane |
| 13 | `QaBot` (EditMode/PlayMode) | odpowiednik bota Playwright: pełne dni obiema strategiami + sprawdzenie konsoli | rdzeń pokryty `FullPlaythrough_NoExceptions`; PlayMode do napisania |

## 5. Kolejność prac

1. **U0, setup (pół dnia):** nowy projekt Unity 2D z aktualnego LTS (zweryfikuj w Hub, nie zakładam wersji), URP 2D z szablonu lub Built-in; Input System, TextMeshPro (Essentials), UI. Wrzuć `Assets/` z tej paczki. `Data/*.json` skopiuj do `Assets/Okienko/Data/`, grafiki z dema do `Assets/Okienko/Art/`, 42 klipy SFX i `amb_*` do `Assets/Okienko/Audio/`. `Edit > Project Settings > Player`: Color Space Linear.
2. **U1, rdzeń w edytorze (1 dzień):** Test Runner > EditMode, wszystkie testy `CoreTests` zielone. Okienko > Importuj dane, przeczytaj raport brakujących grafik.
3. **U2, wycinek pionowy (2–3 dni):** widoki 1–6 z listy; scena Main = Canvas + `GameBootstrap` + `ScreenRouter`; przejście dnia 1 myszą od początku do soboty.
4. **U3, audio (1–2 dni):** zbuduj AudioMixer wg schematu, wystaw parametry, Okienko > Importuj audio, podpięcie suwaków; test okienka (filtr), lampa (obraz+dźwięk razem). Muzyka dopiero gdy Tommy dostarczy pliki z Suno/Udio.
5. **U4, treść do dnia 25 (równolegle, bez kodu):** dialogi dni 11–25 w tym samym schemacie JSON, walidacja `OkienkoImporter.Validate` + `docs/tools/validate_dialogs.py`; trzy wątki (Zaginiona, Skrytka, Poprzednik); dialogi per język: `guests_{kod}.json`.
6. **U5, polish i dostępność (2 dni):** shake, hit-stop na decyzji, opcja ograniczenia błysków, pad, rozmiar tekstu pod Steam Deck, pomiar loudness (cel -24 LUFS), test dotyku.
7. **U6, WebGL demo + Steam (zależne od Tommy'ego):** zob. `STEAM_WYMAGANIA.md`. WebGL: brak wątków, audio po geście (ekran "Zacznij zmianę" go zapewnia), kompresja Brotli, test na telefonie.

Bramka przed Steamem (zgodnie z decyzją Tommy'ego z 11.11): najpierw pokazać mu zbudowaną wersję, dopiero potem strona sklepu.

## 6. Ryzyka i luki
- Brak twarzy: praczka, kucharz, mechaniczka, Ada, Vera (placeholdery); brak wnętrz dla chłopaka, telefonu, budzika (`docs/ASSETS_REQUESTS.md`).
- Kod runtime nie był kompilowany w Unity: spodziewaj się drobnych poprawek (nazwy referencji asmdef `Unity.TextMeshPro`, `Unity.InputSystem` zależą od wersji pakietów).
- 42 klipy SFX z ElevenLabs: brzmienia nie oceniono, pobrane pliki mp3 leżą w Bibliotece (`sfx_*.mp3`, `amb_*.mp3`, `lf_sfx_42.zip`).
- Zapis z dema (v2) nie przechodzi do Unity (inna wersja).
- Wątek Unity w master prompcie zakłada limit 24 załączników na wątek: dane są w JSON w tym katalogu, nie w załącznikach.
