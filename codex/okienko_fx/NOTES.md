# LF_FX

## Decyzje

- Repozytorium modułu jest samodzielne, w katalogu wynikowym `outputs/okienko_fx/`. Migawka i referencje są zachowane w repozytorium.
- Jedna pętla steruje również czasem animacji WAAPI. Sprzątanie wycofuje animacje, a stan gry pozostaje własnością wywołującego.

## Log

- A — rdzeń UMD, rAF, uchwyty, PRNG, trauma i demo wstrząsu. Trzy testy jednostkowe.
- B — gesty postaci, zgub, sterty i UI. Fallback oraz JSON zawierają 18 profili. Zrzut T1 z wdowcem i rękawiczką obejrzany w Chromium. Sześć prób gestów w demie z `file://` bez błędów JS.
- C — deszcz, lampa, pył, tramwaj, zegar, burza, przejścia i scenariusze. Pomiar i pełny test przeglądarkowy zaplanowane w części D.

## D — jakość, pomiar i integracja

- Opcja „ogranicz błyski” zastępuje dwa skoki pioruna symetrycznym przyciemnieniem. Na jedno przejście przypada 460 ms. Przejścia zasilania trwają po 500 ms, wejście dnia, sobota i przyciemnienie przy telefonie po 450 ms na kierunek. Lampa w trybie ograniczonym interpoluje przez 500 ms. Twarde cięcie jest wtedy pomijane.
- `power.out` i `day.end` utrzymują zasłonę do powrotu światła, kolejnego dnia lub `stop()`. Gra zatwierdza pozycję zguby po wydaniu i widoczność gościa po wyjściu. Wyłączenie efektów rozwiązuje uchwyty i usuwa zasłony.
- Początkowe commity przeniesiono do klonu `dunnoxox/L-F` na `feat/lf-fx` od `origin/main`. Kopia `game_src/` jest migawką do odczytu.
- Pełne JPG mają czerń za postacią. Użyłem dwóch wewnętrznych warstw portretu pod kontenerem `screen`. Tiki opisujące dłonie lub przedmioty wykorzystują ruch sylwetki w demie. Profile z gotową grafiką otrzymały aliasy; pozostałe czekają na sprite’y.

## Raport CD2

Powstał moduł UMD z warstwą efektów oraz niezależne demo. Panel pozwala uruchomić każdy efekt, a trzy scenariusze pokazują gesty w kontekście wizyty i burzy. Moduł publikuje sygnały do istniejącej warstwy audio. Instrukcja integracji odnosi się do konkretnych funkcji w migawce.

**GRACZ.** Rękawiczka na ladzie i ruch klapy rozróżniają wydanie i odmowę bez patrzenia na podpis. Wejście postaci przebiega równolegle z interakcją, a ograniczenie ruchu zachowuje portret, minę i stany sceny.

**RECENZENT STEAM.** „Muszę przeczekać każdą animację” — nakładki przepuszczają zdarzenia, a wejścia i wyjścia UI trwają do 300 ms. „Każdy klient rusza się identycznie” — różne tempo kroków, oddech i tiki odpowiadają profilom. „Piorun przeszkadza mi patrzeć na ekran” — przełącznik zastępuje go powolnym przyciemnieniem, a opcja systemowa usuwa wstrząs.

**STREAMER.** Tik wdowca przed decyzją, zatrzaśnięcie okienka i zanik prądu z plamą awaryjną dają trzy punkty cięcia. W scenariuszach wydania i odmowy widz może porównać reakcje na tę samą zgubę.

### Momenty

- Dzień 1 — wdowiec podchodzi nierównym krokiem, zatrzymuje się przy szybie, a rękawiczka wynurza się z kremowym pyłem.
- Dni 3 i 7 — telefon trafia ku szybie, gest lub tik ustępują po pojawieniu się dowodu w grze.
- Dzień 4 — zguba albo koperta znika w szufladzie po decyzji zatrzymania.
- Dzień 8 — błysk, reakcja sylwetki, grzmot i zanik prądu; po pauzie wraca światło.
- Sobota — zamknięcie rygla i powrót do spokojniejszego światła przy rozliczeniu.

### NIEZWERYFIKOWANE

- Safari 16+, Firefox, Steam Deck, urządzenia dotykowe i wydajność na GPU docelowego sprzętu.
- Integracja uruchomieniowa z pełną grą oraz odsłuch klipów. Nazwy sprawdzono w tablicy audio migawki.
- Test błysków sprawdza parametry przejść uruchomionych w trybie ograniczonym. Brak pomiaru luminancji na monitorze i przebiegu przełączenia opcji w połowie trwającego błysku.

### Co dalej

Wpiąć moduł w aktywną wersję gry według `docs/INTEGRACJA.md`, sprawdzić odsłuch bez podwójnych cue i wykonać przejście burzy na Steam Decku oraz w Safari.

### ZWERYFIKOWANE

- [x] `npm test` z Playwright i Chrome headless na macOS: 6 testów Node, 36 efektów w panelu i 216 prób zakończenia lub anulowania w trzech trybach.
- [x] Snapshoty `style.cssText` i `className` celów zgodne. Po sprzątnięciu sceny 0 węzłów efektów i 0 animacji WAAPI. Pętle i trwałe zasłony sprawdzono także przez globalne wyłączenie.
- [x] Sekwencje wydania, odmowy i burzy uruchomione z `file://`. Demo i testy trybu pełnego oraz bez błysków uruchomione przez HTTP. 0 błędów JS, konsoli i 404. Obejrzane kadry T1 i zaniku zasilania.
- [x] Ograniczone błyski: inspekcja klatek kluczowych i odstępów w 7 efektach pełnoekranowych, trybu lampy w kodzie oraz braku twardego cięcia. Emulacja `prefers-reduced-motion`: bez animacji wstrząsu i tiku.
- [x] Determinizm PRNG w Node i identyczne klatki dwóch wstrząsów w Chromium po ponownym ustawieniu ziarna. Scheduler sprawdzony z emulacją ukrytej karty.
- [x] Deszcz 2, lampa i pył w scenie 1536×1024: średnio **0,091 ms/klatkę** przez 211 klatek, 60 FPS w panelu. Pomiar `performance.now()` obejmuje wykonywanie kodu ambientu, w tym zlecanie rysowania canvas. Nie obejmuje osobnego pomiaru pracy GPU.
- [x] Bez bibliotek wykonawczych, tekstu interfejsu gracza zaszytego w efektach i wywołań RNG gry. Przegląd klatek kluczowych i pomiarów geometrii: animowane są transformacje i krycie. Warstwa graficzna używa trzech kolorów, twardych krawędzi i prostych kształtów. Migawka `game_src/` zgodna bajtowo z paczką.
