# Screenshoty i grafiki sklepu

Steam wymaga min. 5 screenshotów (1920×1080 lub większych), warto dać 8 do 10. Pierwsze 4 widać bez klikania, więc one sprzedają grę.
Nagrywaj bez interfejsu debugowego. Do screenshotów używaj `deviceScaleFactor: 2` (obraz ma być ostry), do wideo 1.

## Lista screenshotów (kolejność na stronie)

| # | Kadr | Ustawienie w grze | Co mówi graczowi |
|---|---|---|---|
| 1 | **Okienko z gościem**: widok zza lady, deszcz na szybie, sylwetka wdowca, lampa sodowa nad głową | Dzień 1, rozmowa, tura 1 | "Siedzisz tu. To jest cały świat." Najważniejszy kadr, wygląda jak okładka |
| 2 | **Wnętrze portfela**: dwa dowody na różne nazwiska, zdjęcie dziecka | Dzień 5, zaglądanie do rzeczy (grafika W) | "Poznajesz cudze sekrety" |
| 3 | **Rozmowa z odblokowanym pytaniem**: trzy karteczki, jedna oznaczona jako pytanie z wiedzy ze środka | Dzień 1, tura 2 (sekret "prawa rękawiczka") | "Wiedza zmienia rozmowę" |
| 4 | **Sterta w magazynie**: odwrócony do tyłu, szukasz rzeczy, światło przesuwa się po sterczących parasolach | Dowolny dzień, widok szukania z seedem | "Fizyczne przekopywanie" |
| 5 | **Dostawa tramwajem**: trzy skrzynie z numerami linii (4, 6, 11), otwarta jedna | Rano dnia 2 | "Wybierasz, czyje rzeczy poznasz" |
| 6 | **Gest decyzji**: rzecz przeciągana przez szybę, strefy odmów/zatrzymaj/zadzwoń | Dowolna decyzja | "Bez stempli: gesty" (też odróżnia od Papers, Please) |
| 7 | **List następnego dnia**: tekst echa na ladzie | Dzień 2, po wydaniu rękawiczki | "Skutki wracają" |
| 8 | **Sobotnie rozliczenie**: wypłata, czynsz, ocena, klucz poprzednika w szufladzie | Sobota po dniu 5 | "To też gra o przetrwaniu" |
| 9 | **Burza**: awaria lampy, błysk, sylwetka w szybie | Dzień 3 lub 8 | Atmosfera, zmienność |
| 10 | **Ulepszanie biura**: nowa półka lub lampa | Sobota po dniu 10 | Progresja |

**Zasady:** każdy kadr musi być czytelny w miniaturze 460×215. Nie pokazuj w kadrach ekranów menu. Nie pokazuj spoilerów (finały, kalka Sama). Nie pokazuj placeholderów twarzy (braki: praczka, kucharz, mechaniczka, Ada, Vera).

## Grafiki wymagane przez Steam (rozmiary zweryfikuj w Steamworks przed produkcją)

| Grafika | Rozmiar | Uwagi |
|---|---|---|
| Header capsule | 920×430 | Pojawia się na stronie i w wyszukiwarce. Logo + sylwetka w oknie, hasło #1 opcjonalnie (tekst w grafice mały) |
| Small capsule | 462×174 | Logo czytelne po zmniejszeniu |
| Main capsule | 1232×706 | Główny kadr z okienkiem |
| Vertical capsule | 748×896 | Rzeczy za szybą, lampa, tytuł pionowo |
| Library capsule | 600×900 | Wersja pionowa bez UI |
| Library hero | 3840×1240 | Szeroka scena bez tekstu, logo osobno |
| Library logo | 1280×720 (przezroczysty PNG) | Logo LOST & FRAUD, pomarańcz lampy na czerni |
| Page background | 1438×810 | Przyciemniony kadr, nie przeszkadza w czytaniu |

**Kierunek wizualny kapsuły:** czerń + kremowa biel + pomarańcz lampy sodowej, rozpoznawalne w jednym kadrze: żółte światło w kwadratowym oknie, ciemna sylwetka wewnątrz, deszcz. Żadnych postaci z twarzami na małych kapsułach, bo styl linorytu gubi emocje w małym rozmiarze (znane ryzyko z konceptu).
Grafiki generuje Tommy w ChatGPT z promptów od Claude: napisz to jako kolejną paczkę promptów, gdy styl kapsuły zostanie zatwierdzony. Dopasuj do `prompty/styl_linoryt_sodowy.md`.
