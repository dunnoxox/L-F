# QA_RAPORT: Okienko E1 (dni 1-10), 2026-11-11

Tester: sesja QA (3 agenci: przeglądarka, balans/dialogi, dźwięk + przegląd kodu). Testowana wersja: okienko_e1_v1.zip (artefakt UNPJkwSsrMMyiZnMbEK1qN). Szczegóły: `docs/qa/przegladarka.md`, `docs/qa/balans.md`, `docs/qa/dzwiek.md`.

## Werdykt
Pętla gry działa: bot przechodzi dni 1-10 (strategie wydaj i odmów), 0 błędów konsoli, 0 zdarzeń 404. Są jednak 3 blokery (telefon, podwójne kliknięcia, klawiatura w skrzyni), błędy zapisu, poziomy dźwięku o ~26 LU za cicho oraz brak jakichkolwiek skutków pieniędzy i decyzji.

## Naprawione (kopia robocza, NIE wgrane do game/; patrz „Wdrożenie”)
| # | Problem | Poprawka |
|---|---|---|
| P1 | Telefon: `fit()` na `innerWidth` zawyża skalę, scena obcięta | `documentElement.clientWidth/Height`; nakładka „obróć telefon” w portrecie |
| P1 | Dwuklik na „Dalej/Następny dzień/Wpuść” przeskakuje dzień/gościa, podwójny czynsz | blokada 700 ms w `btn()` |
| P1 | Szukanie w skrzyni niemożliwe z klawiatury | `.pit` z tabindex, role, Enter/Space, focus ring |
| P2 | „Kontynuuj” powtarza stare listy ech (`shown` po referencji obiektu) | klucz tekstowy `p.k`, migracja starych zapisów |
| P2 | Zapis po zakupie ulepszenia cofa do dnia 5/10 (powtórka dnia, podwójny czynsz) | `save(1)` zapisuje dzień+1 |
| P2 | Ustawienia (Esc): brak fokusa, pułapki, powrotu | fokus na pierwszym suwaku, pułapka Tab, powrót fokusa |
| P2 | Placeholder twarzy wypisuje „klamie” (spoiler) | usunięte `phmina` |
| P2 | Poczta: surowe `odmow`/`zadzwon`; saldo bez etykiety | etykiety po polsku, „Zostaje $X” |
| P2 | Wabiki identyczne z celem w skrzyni (8,8% gości) | wykluczony sprite celu z wypełnienia |
| P2 | Seed domyślny stały (burze zawsze +2) | seed z czasu, `?seed=` nadal działa |
| P1 dźwięk | Ambient -50,7 LUFS zamiast -24, SFX 10-30 LU głośniejsze od tła, szwy pętli klikają (vent, rain_heavy_far, wind_gap, clock_tick) | 42 klipy znormalizowane (pętle -24 LUFS-I, TP ≤ -1,9 dBTP, szew wypieczony crossfade 1,5 s), nowe gainy i `loopEnd` w audio.js |
| P2 dźwięk | uszkodzony localStorage wywala moduł; brak `resume()` AudioContext; brak limitu głosów; ładowanie bez `r.ok`/timeoutu i czekanie na 42 klipy; ducking bez `cancelScheduledValues`; błędny fallback `sweep()` | wdrożone w audio.js (diff w `docs/qa/poprawki_game.diff`) |
| literówki | „wżerę po kwasie”, „byłaby tu przed świtem” | poprawione w data.js (UWAGA: dialogi dni 1-10 są przepisywane w v3, te poprawki mogą być nieaktualne) |

Retest po poprawkach: bot wydaj + odmów, dni 1-10, 0 błędów konsoli (z kolejnym podejściem do skrzyni przez zakładki linii).

## Niezweryfikowane
Brzmienie (nikt nie słuchał), poziomy to symulacja ffmpeg; telefon fizyczny (testowano emulację dotyku Playwright); 30 min ciągłej gry; zachowanie AudioContext na iOS Safari.

## Do wątku E0 / decyzji projektowych (duże)
1. **Pieniądze bez konsekwencji:** każda decyzja = +40, saldo 220 w obu strategiach, nigdy ujemne. Obiecane w tekstach dolary (d4 20, d9 30, d5 wypłata) nie są wdrożone. Nowe dialogi v3 zakładają ujemną kasę (-400) i pokusy: silnik wymaga liczenia zysku/straty z `decyzje`.
2. **Kłamstwa:** kłamie 9/13 gości (69%, cel ok. 30%); pierwszy gość dnia kłamie, drugi nie, od d5 każdy; ton pytania zdradza kłamcę; sekret z zaglądania wypycha pytanie z kłamstwem. Żadna decyzja nie zależy od sekretu ani kłamstwa. Do przeprojektowania razem z dialogami v3.
3. **Szukanie bez stawki:** klikanie dowolnych rzeczy bez kary; zakładka startowa zawsze „4”; w d4-d10 gracz nie wie, którą rzecz gościa zajrzeć (50/50). Burza przesuwa linie, ale żaden dialog tego nie podaje, więc nie da się jej wykryć.
4. **Echa:** pole `forma` ignorowane (8 ech `gosc` wyświetla się jak list); 7/34 ech wypada po d10 i pokazuje się tylko na ekranie końca; dni 9-10 nie dają poczty.
5. **Telefon:** po poprawce skali tekst ma efektywnie 4-11 px, cele dotykowe 18-50 px. Potrzebny osobny układ mobilny albo świadoma decyzja „tylko desktop”.
6. **Cel w skrzyni** bywa prawie zasłonięty (d7: widoczne 0,75%); nakładanie losowe bez gwarancji widoczności.
7. **Placeholdery** twarzy: praczka, kucharz, mechaniczka, Ada, Vera; rzeczy „zwykła rzecz”, id plików jako alt.
8. **Mikser:** zalecany loudness testowy z prawdziwego odsłuchu; muzyka nadal bez plików.
9. Ostrzeżenia walidatora: 5x „pan/pani” do gracza, forma do Leny niespójna; kolizja imion Iris (praczka i dama), Victor bez wprowadzenia.

## Wdrożenie
Poprawki leżą jako diff `docs/qa/poprawki_game.diff` (względem okienko_e1_v1.zip) oraz gotowa paczka `/mnt/project-files/okienko_e1_qa_fix.zip` (z normalizowanymi klipami). Mapa gainów: `docs/qa/dzwiek_norm.json`. Nie nadpisuję `game/`; wymaga uzgodnienia z wątkiem gry (silnik dialogów v3 zmieni DAYS i data.js).
