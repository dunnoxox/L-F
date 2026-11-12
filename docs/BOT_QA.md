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
| 3 | losowa (seed 11) | finał | wyrwana strona (C/B/B) | 0 błędów JS, 0 brakujących plików |
| 4 | telefon poziomo 844×390 | finał | rotacja | 0 błędów JS; sobota nie mieściła się na ekranie (naprawione) |

Trzy różne zakończenia osiągnięte. Żaden przebieg nie zaciął się i nie trafił na blokadę. Konsola czysta, wszystkie grafiki i dźwięki się wczytują.

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
| 15 | telefon, sobota | „Następny tydzień” i „Nic nie kupuję” poza ekranem, nagłówek ucięty u góry | ulepszenia w dwóch kolumnach, mniejszy nagłówek, przewijanie |
| 16 | telefon, dostawa | trzecia rzecz w skrzyni wchodziła pod „Nie zaglądam” | dwie kolumny w skrzyni także na telefonie |
| 17 | telefon, wieczór z 4+ listami | listy ściśnięte w paski po 2 słowa | dwie kolumny, przewijanie |
| 18 | telefon, magazyn | „Księga przyjęć” wypadała w lewy górny róg na nagłówek (regresja po poprawce 2, złapana przez bota) | przycisk znowu pozycjonowany |

Część poprawek z pierwszego przebiegu (kartka w dniu 1, przycisk w notce oględzin, cień podtytułu na ekranie tytułowym) okazała się zbędna, bo równolegle wszedł nowy ekran tytułowy i prolog z PR #21.

## Zostaje (nie ruszałem, bo to cudza działka albo decyzja)

- **Telefon, drobiazgi.** Po układzie na telefon (PR #22) gra jest grywalna na 844×390. Zostają drobne napisy poniżej 11 px: „do soboty” w portfelu (8 px), etykieta ogłoszenia w prologu (9 px), metryka na karcie NOWA ZMIANA (11 px). Pasek „Krok…” w dniach 1-2 przykrywa na telefonie nagłówek dnia.
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

## Balans kradzieży (12.11.2026, runda 2)

Bot-złodziej kończył grę z nadwyżką i bez żadnych konsekwencji. Przyczyna: pierwsza wpadka w audycie była darmowa (samo upomnienie), a każda następna kosztowała 60 $ od sztuki, choć z szuflady dało się wziąć 250 $ albo 500 $ naraz. Kradzież była czystym zyskiem.

Nowe zasady (game.js, `auditP()` i `saturday()`):

- Victor w sobotę liczy szufladę, jeśli w tygodniu coś zginęło. Szansa wpadki rośnie: 40% za pierwszą kradzież w tygodniu, +20% za każdą kolejną, +25% za każdą wcześniejszą wpadkę, +15% gdy w tygodniu zginęło 200 $ lub więcej (maks. 95%).
- Wpadka 1: zwrot całej kwoty z tygodnia plus kara (do 200 $), Urząd −1.
- Wpadka 2: zwrot plus 150% kary, Urząd −2, Ludzie −1.
- Wpadka 3: zwolnienie, osobne zakończenie „Zwolnienie”.
- Bez wpadki Victor zostawia ślad: „Tym razem się zgadza. Na razie.”
- Po każdej kradzieży kartka wyniku pokazuje: „Victor liczy szufladę w sobotę. Ryzyko: niewielkie / spore / wysokie / prawie pewne.”
- Kara może wpędzić w dług, a dług w eksmisję. W finale nowa nitka „Szuflada się zgadzała”, szara, gdy cokolwiek zginęło. Kradzieże dalej liczą się do zakończenia „nowy Sam”.

Symulacja ekonomii (4000 gier na strategię, ten sam wzór co w grze, z ratą 60 $ tygodniowo dla Marlowa z PR #26):

| Strategia | Zwolnienie | Eksmisja | Gotówka na koniec (średnio) |
|---|---|---|---|
| uczciwa | 0% | 0% | 150 $ |
| ostrożna (max jedna kradzież w tygodniu) | 0% | 0% | 198 $ (duży rozrzut: raz +300 $, raz −200 $) |
| kradnie wszystko, co dostępne bez odkryć | 0% | 0% | 157 $ (mediana 88 $) |
| chciwa (wszystkie kradzieże, też te po odkryciach) | 3% | 97% | - |

Ostrożna kradzież to zakład z lekko dodatnim wynikiem i dużym ryzykiem, płacony Urzędem, nitką „Szuflada” i drogą do zakończenia „nowy Sam”. Kto kradnie regularnie, wychodzi gorzej niż uczciwy. Chciwość kończy zmianę przed finałem.

Przebiegi bota (po scaleniu z PR #26): uczciwy kończy finał z 90 $, ostrożny ze 165 $ (wpadka w tygodniu 2, −180 $, chwilowy dług), chciwy wpada w dług w tygodniu 1 i zostaje eksmitowany w dniu 10. Przebieg sprzed raty Marlowa doprowadził chciwego do planszy „Zwolnienie” w dniu 20. 0 błędów JS.

Przy okazji: na telefonie portfel zasłaniał pierwszą linię soboty, a przy karze i racie „Następny tydzień” wypadał poza ekran. Poprawione w game.css.

Do obejrzenia (z PR #26, poza tym zadaniem): na telefonie podpisy stref decyzji mają 6-7 px, a w magazynie część szuflad wychodzi poza ekran.

Nowe strategie bota: `--strategy ostrozny` (jedna kradzież na tydzień) i `--strategy chciwy` (bot odblokowuje sobie wszystkie opcje „weź” i bierze każdą).
