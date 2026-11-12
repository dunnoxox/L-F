# Bot QA: zagraj, obejrzyj, napraw

Bot przechodzi całą grę w headless Chromium (Playwright): ekran tytułowy, ustawienia, prolog, dni 1-25, soboty, imię w dniu 20, finał i widok telefonu. W każdym kluczowym momencie robi screenshot, a do tego sam sprawdza:

- błędy JS i ostrzeżenia w konsoli, pliki, które się nie wczytały (404),
- przyciski poza ekranem, zasłonięte przez inny element, nakładające się, za małe,
- ucięty tekst i tekst poniżej 11 px po przeskalowaniu,
- martwe kliki (klik, po którym nic się nie zmienia), przeciąganie rzeczy na strefę decyzji,
- zacięcia (gra stoi ponad 12 s bez zmian) i blokady (szukanej rzeczy nie ma w żadnej skrzyni).

Screeny ogląda człowiek albo Claude i z nich wypisuje usterki, których automat nie złapie (czytelność, układ, niespójności w tekście).

## Jak uruchomić

```
cd game && python3 -m http.server 8765 &
node qa/bot.js --out qa/out                        # wybiera zawsze pierwszą opcję
node qa/bot.js --strategy last --seed 3 --out qa/out_b   # ostatnią opcję (kradzieże, „bez wpisu”)
node qa/bot.js --strategy random --seed 11 --out qa/out_c
node qa/bot.js --days 2 --out qa/out_szybki        # szybki test: tytuł + 2 dni
```

Wynik: `qa/out/*.png` (screeny po kolei), `qa/out/wynik.json` (usterki, zakończenie, zapis dialogów). Pełne 25 dni trwa ok. 15 min. Bot gra z `?fast=1`: pauzy między gośćmi i wypisywanie tekstu są wtedy natychmiastowe, reszta gry działa normalnie.

## Przebiegi (12.11.2026)

| Przebieg | Strategia | Doszedł do | Zakończenie | Usterki automatu |
|---|---|---|---|---|
| 1 | pierwsza opcja | dzień 20 (stary build, przerwany limitem czasu) | - | 14 z oglądania screenów |
| 2A | pierwsza opcja | finał | rotacja (A/A/A) | 0 błędów JS, 0 brakujących plików |
| 2B | ostatnia opcja | finał | nowy Sam (C/C/B) | 0 błędów JS, 0 brakujących plików |
| 3 | losowa | WYNIK_3 | WYNIK_3_END | WYNIK_3_USTERKI |

Żaden przebieg nie zaciął się i nie trafił na blokadę. Konsola czysta, wszystkie grafiki i dźwięki się wczytują.

## Naprawione

| # | Gdzie | Co było źle | Poprawka |
|---|---|---|---|
| 1 | magazyn, toast | „To nie ta rzecz” wjeżdżał na pasek „Krok…” i oba teksty mieszały się w jedną nieczytelną linię | na czas toastu pasek kroku znika |
| 2 | magazyn | przycisk „Księga przyjęć” wchodził pod pole magazynu, napis ucięty | węższy przycisk pod portfelem, nad polem |
| 3 | wszędzie w grze | przycisk „Notatnik” bez stylu: mały szary napis w rogu, wychodzący poza scenę | przycisk w stylu gry, lewy górny róg |
| 4 | blat po decyzji | „Krok 6: przeciągnij rzecz…” zostawał na ekranie po decyzji | pasek znika razem ze strefami |
| 5 | dostawa, dni burzy (3, 8, 13…) | dłuższy opis z burzą zasłaniał nagłówki „LINIA 4/6/11” | skrzynie zsuwają się pod opis |
| 6 | dostawa, 2-3 rzeczy w jednej skrzyni | trzecia (a czasem druga) rzecz ucięta przez dół skrzyni, jej „Zajrzyj” niewidoczne | przy kilku rzeczach skrzynia układa je w dwie kolumny |
| 7 | wieczór z 4+ listami (dni 2, 5, 10, 24) | listy ściśnięte w wąskie paski po 3 słowa w linii, tekst wychodził poza ekran | listy w siatce 3 kolumn, mniejszy krój |
| 8 | sobota | „Nic nie kupuję” był martwym przyciskiem | wyłącza ulepszenia i zaznacza wybór |
| 9 | sobota z upomnieniem audytu | „Następny tydzień” wypadał poza ekran | mniejszy nagłówek i ciaśniejszy układ |
| 10 | blat, rozmowy z dwiema osobami (np. d19) | przy decyzji okienko pokazywało inną twarz niż w rozmowie | decyzja zostaje przy ostatnim rozmówcy |
| 11 | przejścia między scenami | portfel, zębatka i pasek kroku zostawały na wierzchu czarnego przejścia | przejście zasłania wszystko |
| 12 | dzień 20 | pole na imię miało 18 px wysokości, domyślny szary styl | duże pole w stylu kartki |
| 13 | finał | portfel „do soboty $410” i notatnik nachodziły na „Koniec zmiany”, choć gra już się skończyła | finał bez paska gry |
| 14 | finał i koniec tygodnia | ten sam licznik nazywał się „Ekspozycja”, a w soboty „Urząd” | wszędzie „Urząd” |

Część poprawek z pierwszego przebiegu (kartka w dniu 1, przycisk w notce oględzin, cień podtytułu na ekranie tytułowym) okazała się zbędna, bo równolegle wszedł nowy ekran tytułowy i prolog z PR #21.

## Zostaje (nie ruszałem, bo to cudza działka albo decyzja)

- **Telefon.** Scena 1536×1024 skaluje się na telefonie poziomo do ok. 38%: drobne napisy (portfel „do soboty”) mają 5 px, dialogi ok. 11 px. Grywalne tylko na tablecie i większych. To robota dla wątku telefonu (osobny układ albo powiększenie kluczowych elementów przy skali < 0,6).
- **Portrety.** 55 gości dzieli 6 twarzy zastępczych (dama, chłopak, mąż…). W dniu 19 Kit i Leo, w dniu 21 Priya i Lena mają tę samą twarz co inne postacie. Czeka na portrety G01-G26.
- **„+ $40” przy wypłacie** przelatuje przez kartkę z podsumowaniem decyzji. Trwa sekundę, nie przeszkadza w grze.
- **Wieczór dnia 24** ma 9 listów naraz. Mieszczą się, ale to ściana tekstu. Warto rozważyć rozłożenie poczty na dwa wieczory (decyzja fabularna).
- **Martwy kod:** `ledger()` (gest finałowy) nie jest nigdzie wywoływany. Gest działa przez gościa `d25_ksiega`, więc `ledger()` można usunąć.
- **Strategia „ostatnia opcja”** kończy z Ludźmi 0/10 i 13 wpisami „bez wpisu”, a i tak ma 695 $ i nie dostaje eksmisji. Kradzież się opłaca. Do sprawdzenia przy balansie (audyt łapie za rzadko?).

## Co bot robi krok po kroku

1. Tytuł: klik w tło (bramka dźwięku), screen, ustawienia: wszystkie 4 zakładki, Escape zamyka.
2. Prolog: oderwanie paska, podpis.
3. Dzień: karta dnia, dostawa, oględziny (klik w ślad), pauza (raz: „Poukładaj magazyn”), zasłonka, 3 pytania, magazyn (raz celowo zła rzecz, żeby zobaczyć toast), decyzja (w dni parzyste przeciągnięciem rzeczy na strefę), wynik, wieczór.
4. Sobota: kupuje pierwsze dostępne ulepszenie, następny tydzień. Dzień 20: wpisuje imię.
5. Finał: screen góry i dołu, potem widok telefonu pionowo i poziomo.
