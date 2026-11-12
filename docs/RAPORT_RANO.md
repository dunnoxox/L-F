
## Steam
- Wybrane Electron + steamworks.js, opakowanie w `steam/app/` (uruchamia grę, osiągnięcia, zapis do pliku). Plan: `steam/STEAM_PLAN_WYDANIA.md`.
- Niezweryfikowane: prawdziwe Steam, builder, Mac/Win. Blokuje wydanie: konto Steamworks i 100 USD, jakość gry, grafiki sklepu, AppID.

## Testy (noc 11/12.11, symulator 25 dni)
Pełny raport: `docs/QA_NOC.md`; narzędzia i surowe wyniki: `docs/tools/qa_noc/` (`bash docs/tools/qa_noc/run_all.sh`). Symulator odwzorowuje logikę `game/game.js` z main; render, dźwięk i dotyk nie były testowane.
- **Zakres:** 10 strategii x 300 seedów, 1,5 mln losowych przebiegów, analiza statyczna danych (50 gości, 159 decyzji, 528 pytań), próbka 40 scen i lint polszczyzny.
- **Blokery wydania:** (K1) `game/data.js` ma 30 gości, więc gra urywa się po dniu 15; (K2) zakończenie Skrytka B nieosiągalne (literówki w nazwach akcji w `endings()`); (K3) brak zakończeń „Odebrany” i „Rotacja” oraz liczników `notatki/maya_testy/kopie`; (K4) w d25 gracz wybiera gest dwa razy (`d25_ksiega` + `ledger()`).
- **Balans:** uczciwy kończy z ok. 180 $, chciwy z 2 439 $ i bez kary poza epilogiem; łapówki `wez_*` nie ruszają żadnego licznika, 47% decyzji w ogóle nie zmienia liczników; `wymaga` na decyzjach jest ignorowane (łapówki zawsze widoczne).
- **Rytm:** ok. 4,5 min/dzień, ok. 2,1 h całości; d4, d20, d21 mają jednego gościa (najkrótsze dni w szczycie fabuły); zegar stoi na 23:40.
- **Stan po testach:** nie naprawiałem `game/` (właścicielem jest wątek gry); poprawki do wdrożenia wylistowane w sekcji „TOP 10” w `docs/QA_NOC.md`.

## Gra (wątek gry, noc 11-12.11.2026)

Link do wersji grywalnej: https://claude.ai/artifact/UNPJkwSsrMMyiZnMbEK1qN (przeglądarka, 25 dni). Kod w `game/`, dane budowane z `koncept/okienko_rozmowy_v3*.md` przez `game/build_data.py`.

### Co jest w grze
- Pełna pętla dnia 1-25: dostawa, oględziny, pauza z zajęciami, gość (rozmowa, szukanie w magazynie, decyzja), karta wieczorna, sobota z rozliczeniem. 52 gości z dialogów v3.
- Pauza między gośćmi: poukładanie zawieruszonych rzeczy, radio, szyba z kotem, herbata, telefon, losowe zdarzenia, dzwonek wejścia.
- Szukanie: numery zawieszek i Księga przyjęć, nazwy kafelków ukryte po dniu 2, cierpliwość gościa (5 pól), bliźniaki, linie zgodne z dialogami (`check_spojnosc.py`: 0 niezgodności).
- Ekonomia: dniówka, czynsz, rachunki, odsetki od długu, eksmisja, pierwsza rozbieżność tygodnia darmowa, ulepszenia. Kwota leci do portfela po decyzji.
- Fabuła: jawna tabela skutków akcji (Urząd, Ludzie, bez wpisu), liczniki z `LICZNIKI.md`, `wymaga` na decyzjach, karta Kopie z nazwiskami, zakończenia Fotel (Odebrany, Wyrwana strona, Rotacja, Nowy Sam, Referent, Zostajesz) plus pasek nitek, Ekspozycja zamiast Urzędu.
- UX: toast w pasie górnym, notatnik jako szuflada, plakietka NOWY/WRACA, wygaszone podpowiedzi po dniu 2, tytuł z potwierdzeniem nowej zmiany, prolog w jednym ekranie, zegar nocy, hak „Jutro” na karcie wieczornej.

### Zweryfikowane
- Bot Playwright przechodzi dni 1-25 w obu strategiach (wydaj, odmów): 0 błędów konsoli, 0 błędów 404.
- Zrzuty: rozmowa (portret, plakietka), pauza, szuflada notatnika.
- `check_spojnosc.py`: 0 niezgodności; walidator dialogów OK.

### Niezweryfikowane
- Dźwięk na słuchawkach (głośność po normalizacji, szwy pętli), dzwonek wejścia to tymczasowy `bell_window` w dwóch wysokościach.
- Dotyk i układ na telefonie (jest tylko plansza „obróć telefon”).
- Balans pieniędzy i trudności (nie grał człowiek, tylko bot).
- Wygląd pozostałych gości: portrety zastępcze wg archetypu (6 twarzy na 52 gości).
- Pięć wątków dodatkowych z fabuły v3 (Kanał, Ogłoszenie, Dług, Cudze nazwiska, Rewizor): flagi przechodzą przez silnik, ale nie ma osobnych scen ani testów.

### Co blokuje wydanie
1. Portrety gości (prompty gotowe, Tommy generuje) i fotografie przedmiotów.
2. Mechanika z `AKCJA_WERYFIKACJA.md` poza Księgą i numerami: BLAT z narzędziami (PARA, LUPA, NOS, ŚWIATŁO), przykładanie słowa do śladu, wydanie w trzech gestach, polaroidy, deterministyczny audyt.
3. Szósty plik UX: sześć nitek z sygnałem odkrycia, kartoteka LUDZIE, blok „Co nie daje spokoju”, ekran tytułowy w czarnej szybie.
4. 16 brakujących dźwięków (w tym `sfx_doorbell_shop`, monety, pióro).
5. Animacje LF_FX (moduł od Tommy'ego), układ mobilny, karta końcowa do udostępnienia (V1), test z prawdziwym graczem.
