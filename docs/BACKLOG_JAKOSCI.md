# BACKLOG JAKOŚCI: LOST & FRAUD (audyt wg CD2, 12.11.2026)

Autor: wątek Steam/jakość. Nie dotykam `game/`; wątek gry bierze pozycje partiami.
Rozmiar: S = do 2 h, M = pół dnia, L = dzień+. Priorytet: P0 = bez tego nie wydajemy, P1 = mocno podnosi ocenę, P2 = miły dodatek.

## Co faktycznie sprawdziłem (i czego nie)
- ZWERYFIKOWANE: bot Playwright przeszedł build z `main` od ekranu tytułowego przez prolog (słup, umowa), dzień 1 (Thomas, Rosa) aż do decyzji; 0 błędów w konsoli; obejrzałem zrzuty rozmowy, magazynu i decyzji. Policzyłem dane w `game/data.js` na `main` (39 gości, dni 1-20, bez dni 21-25).
- NIEZWERYFIKOWANE: dźwięk (nie słyszę, więc ocena dźwięku to analiza listy plików i kodu), telefon, wersja wątku gry z dniami 21-25 i pauzami (jeszcze nie na `main`), dni 3+ grane ręcznie.

## Werdykt w pięciu zdaniach
1. Oprawa jest świetna: kadr okienka z deszczem i pomarańczową lampą to gotowy plakat. Hak wizualny działa.
2. Pętla (puka, rozmowa, szukanie, decyzja) jest czytelna, ale **szukanie to menu, nie szukanie**: kafelki mają podpisy, więc znalezienie rzeczy to czytanie, a pomyłka to tylko toast bez kosztu.
3. **Decyzje mają mało stawki od ręki**: tylko 11 z 121 decyzji w danych niesie dolary, skutek przychodzi dopiero w wieczornym liście. CD2 prawo 4 wymaga ceny w dolarach i konsekwencji.
4. **Postacie się powtarzają**: 30 z 39 gości nie ma własnej twarzy, a 6 portretów obsługuje wszystkich. To najsilniej zabija „wciągające postaci”.
5. **Zwrot „Fotel” nie istnieje w grze**: zakończenia w kodzie liczą wątki v1 (Zaginiona/Skrytka/Poprzednik), gest księgi to 3 przyciski, brak pola na imię (dzień 20), brak Notatek S.H., brak licznika „Ekspozycja”. Najlepszy pomysł fabuły nie wypłaca się graczowi.

---

## 1. FABUŁA
**Stan:** v2 „Fotel” jest świetna na papierze (gracz szóstym dyżurnym, Vera architektką, własna sumienność jako wyciek). W kodzie jej nie ma.
- **F1 (P0, L). Wpiąć zakończenia Fotel (§10 fabuły v2)**: 6 zakończeń wg flagi D7 + ostatnia kwestia Eliasa. Dziś `endings()` zwraca bloki v1. Test: bot przechodzi wszystkie 6 ścieżek.
- **F2 (P0, M). Pole na imię w dniu 20 (D5)** i użycie go w finale („Jak się nazywasz?”). Bez tego zwrot nie boli. Imię wraca też w liście z dnia 24.
- **F3 (P1, M). Notatki S.H. (0-5)** jako znajdźki w rzeczach, pokazane jako stos kartek w szufladzie. To jedyny kolekcjonerski wątek, który naprawdę wypłaca się w finale (warunek „Odebrany”).
- **F4 (P1, S). Licznik „Urząd” zmienić po finale na „Ekspozycja”** (zapis w fabule §9) i na ekranie końcowym pokazać, że sumienność była wyciekiem: lista klientów z „kopii”. Najokrutniejszy moment gry, kosztuje jeden ekran.
- **F5 (P1, S). Tropy uczciwości**: sprawdzić, że ogłoszenie na słupie w prologu, podpis „K” z pętlą i numer 0809 faktycznie wracają (dni 10, 15, 24). Dodać do prologu jedno zdanie-trop, którego nie da się nie zauważyć przy ponownym przejściu.
- **F6 (P2, M). Replay**: po finale wyświetlić „Czego nie zobaczyłeś” (np. „Nie zajrzałeś do 31 z 50 rzeczy”) zamiast samego „Zagraj ponownie”.

## 2. WIRUSOWOŚĆ (CD2 §9)
**Stan:** `docs/MOMENTY.md` ma moment na dni 1-10, brak dni 11-25 w tabeli; brak mechanizmu „udostępnij”.
- **V1 (P1, M). Karta końcowa jako zrzut do wrzucenia**: jeden kadr 1080×1350 z ostatnią kwestią, zakończeniem, liczbą oddanych/zatrzymanych rzeczy i „Twój fotel: …”. Streamerzy i Reddit wrzucają takie karty (jak Wordle). Bez tekstu spoilerowego poza etykietą zakończenia.
- **V2 (P1, S). Cytaty-memy**: każda z 12 postaci głównych ma jeden tik w 3-5 słowach, powtarzany w trzech wizytach (Thomas: „Jak pierwszy raz.”). Wypisać w `docs/MOMENTY.md` i sprawdzić, że występują.
- **V3 (P1, M). Dylemat na żywo (CD2 9.4)**: raz na tydzień decyzja z 15-sekundowym zegarem i podświetleniem „DYLEMAT”, żeby widzowie na czacie podzielili się 50/50. Zegar tylko tu, nigdzie indziej.
- **V4 (P2, S). Tryb streamera**: opcja wyciszająca muzykę z licencją niepewną (jeśli dojdzie) i ukrywająca imię gracza z dnia 20 na ekranie.
- **V5 (P1, S). Kot na parapecie**: mały kot za szybą (sprite 3 klatek), czasem siedzi w oknie, można go „zawołać” klikając szybę. Koty to waluta internetu, jedno stworzenie daje klipy, a kosztuje jeden sprite.

## 3. RZECZY Z MASTER PROMPTÓW (CD2): luki
| Prawo CD2 | Stan | Co brakuje |
|---|---|---|
| 1 Hak w 10 s | Kadr wygrywa, ale przed pierwszym pukaniem 3 ekrany czytania (słup, pasek, umowa) i ekran dnia | Zacząć od okienka (pukanie pod ekranem tytułowym), prolog jako 1 gest + 1 zdanie |
| 2 Pętla < 60 s z nagrodą | Pętla ok, nagroda = dźwięk, ale obraz nie reaguje (twarz, światło) | Nagroda wizualna przy każdym kroku (patrz „mikrointerakcje”) |
| 3 Postacie | 6 twarzy na 39 gości | Portrety (prompty gotowe), do tego czasu sylwetka + inna kwestia powitania per gość |
| 4 Dylemat z ceną | 11/121 decyzji z dolarami | Każdy dzień min. 1 decyzja z kwotą widoczną na przycisku |
| 5 Reguły rosną powoli | Dzień 1 ma 6 „Kroków” w banerze | Baner znika po pierwszej pętli; nowa reguła = nowy 1-zdaniowy dymek |
| 8 Dźwięk to połowa | 42 SFX, 8 ambientów, 10 muzyki | Patrz sekcja 4 |
| 9 Streamowalność | momenty dni 1-10 | Dni 11-25 i V1/V3 |
| 11.6 Pusty początek | prolog 3 ekrany | jw. |
| 11.8 Brak podpowiedzi | Kroki 1-6 to nadmiar, nie niedobór | Zmienić „Krok N” w wskazówki kontekstowe wygaszane po 2 użyciach |

- **C1 (P0, S). Baner „Krok N” po dniu 2 znika**. W grach hitowych instrukcja pojawia się, gdy gracz stanie, a nie zawsze (Papers, Please uczy przez pierwszą wizytę).

## 4. DŹWIĘKI: „idealne”
**Mam:** 8 SFX ruchu (stuki, kroki 3 typów, szuflady, zamki, tramwaj, telefon, trapdoor, gazeta), 14 ambientów (deszcz x4, lampa, wentylacja, tramwaj, ruch, rynna, trzaski budynku, wiatr, grzmot, zegar, auto po kałuży, kroki w korytarzu), 10 utworów (5 x A/B).
**Zasada do wdrożenia (S):** każdy gest ma dźwięk (jest), ale **każda zmiana stanu ma też ciszę lub zmianę ambientu** (przed pukaniem deszcz cichnie o 3 dB, po wejściu gościa dochodzi cisza pokoju). Pauza z oczekiwaniem żyje dźwiękiem, nie muzyką.

**Brakujące dźwięki do wygenerowania w ElevenLabs (SFX), każdy 1-4 s, bez muzyki, dry/close mic:**
1. `sfx_doorbell_shop` (P0): „small brass shop door bell, two quick ‘ding-ding’ chimes, spring on a wooden door, dry room”. (To jest dzwonek przy wejściu, który Tommy chciał; `sfx_bell_window` zostaje do ladowego.)
2. `sfx_door_open_close` (P0): „old wooden door creak open and soft thud shut, wet wood, rain outside”.
3. `sfx_coins_paper_money` (P0): „counting paper bills and putting a few coins in a metal tin, quiet”.
4. `sfx_pen_scratch` (P1): „ballpoint pen writing in a paper ledger, 2 seconds, close”.
5. `sfx_paper_envelope` (P1): „rustling an envelope being opened, paper tearing softly”.
6. `sfx_cloth_inside_bag` (P1): „hand rummaging in a leather bag, keys jingle, zipper”.
7. `sfx_umbrella_shake` (P1): „wet umbrella being shaken and folded”.
8. `sfx_glass_tap` (P1): „fingertip tapping glass window twice, rain behind”.
9. `sfx_police_radio_far` (P1, do wątku policji): „police radio crackle with muffled dispatcher voice, no intelligible words, far away, rainy street”.
10. `sfx_siren_pass` (P2): „single distant police siren passing through wet streets, fading, 4 seconds”.
11. `sfx_kettle_click` (P2): „electric kettle click off and a ceramic mug set on wood”.
12. `sfx_cat_meow_window` (P1, do V5): „small cat meowing quietly behind window glass, rain”.
13. `sfx_heartbeat_low` (P2): „slow low heartbeat, felt more than heard, 3 seconds, no music” (decyzje z zegarem).
14. `sfx_radio_tune` (P1, do pauz): „old radio dial turning between stations, static and fragments of music, no speech”.
15. `sfx_typewriter_key` (P2): „old typewriter, 5 keys and carriage bell”.
16. Mamrotanie per postać (P1, 8 plików po 2 s, bez słów): „older man throat clearing and sigh”, „young woman nervous sniff and quiet ‘hm’”, „heavy man grunting low laugh”, „child whisper breath”, „old woman cough”, „teen mumbling”, „stern clerk exhale”, „woman crying quietly, stifled”.

**Motywy muzyczne per wątek (P2, 3 pętle 30 s):** Zaginiona: pozytywka + niskie smyczki; Skrytka: kontrabas pizzicato + cisza; Fotel: maszyna do pisania + fortepian. Włączane po pierwszej odsłonie wątku, nie wcześniej.

## 5. POSTACIE
- **P-1 (P0, wątek portretów). Twarze dla 30 gości bez portretu.** Prompty w `prompty/portrety_goscie.md`. Do czasu wgrania: nie powtarzać tej samej twarzy w tym samym dniu.
- **P-2 (P1, S). Karta gościa** w nagłówku: imię, wiek i jedno słowo-etykieta, żeby gracz od razu je zapamiętał („Thomas Ward, 71: wdowiec”).
- **P-3 (P1, M). Zwyczaje fizyczne**: każdy główny gość ma tik widoczny w obrazie (Thomas gładzi mankiet, Rosa liczy palcami). Tik = 1-2 klatki CSS, bez sprite'ów, wystarczy przesunięcie i obrót warstwy.
- **P-4 (P1, S). Reakcja przy odejściu**: gdy gość wychodzi, sylwetka znika za szybą z dźwiękiem kroków (jest 3 typy) i zostaje odcisk dłoni na szybie na 2 s. Świetny kadr.
- **P-5 (P2, M). Gość, który wraca z konsekwencją** pokazany na ekranie dostawy (siedzi w kolejce pod drzwiami za szybą), zanim zapuka.

## 6. CHĘĆ GRANIA
- **G1 (P0, M). Stawka od ręki**: po decyzji pokazać natychmiast zmianę (twarz gościa, dźwięk, kwota $ z przyciągnięciem do portfela) zamiast tylko „+ zysk / − strata”. Konsekwencja i tak przyjdzie listem.
- **G2 (P0, M). Szukanie z prawdziwą trudnością**: kafelki bez podpisów (podpis po najechaniu), opis gościa zawiera szczegół do zobaczenia (zszyta nitka). Błąd kosztuje: gość traci cierpliwość (pasek 3 pól) i po zerze odchodzi, a Ty tracisz napiwek. Bez grindu, bez resetu.
- **G3 (P1, M). Zaglądanie do rzeczy w trakcie szukania** (przytrzymaj kafelek = obrót, zobacz wnętrze) zamiast wyłącznie na ekranie dostawy. Wraca „co jest w środku”, najlepszy haczyk fabularny.
- **G4 (P1, S). Pętla dnia ma nowość**: każdy dzień jedna nowa zasada lub rzecz (CD2 10.7). Wypisać „nowość dnia” w `docs/LICZNIKI.md` (plik wymieniony w projekcie, brak go na `main`).
- **G5 (P1, S). Sobotnie rozliczenie jako seria zdarzeń** (czynsz, rachunki, kontrola) zamiast jednej tabelki, z 3 dźwiękami (monety, długopis, szuflada).
- **G6 (P2, M). Cele poboczne**: 3 „zadania dla biura” na tydzień, np. oddać 3 rzeczy bez pomyłki. Bez licznika, w formie karteczek na ścianie.

## 7. CHĘĆ BYCIA W TYM SKLEPIE
Gracz ma chcieć wracać do ciepłego, mokrego pokoju, w którym ktoś na niego czeka. Dziś pokój jest pusty między gośćmi.
- **S1 (P0, M). Pauza z zajęciami** (Tommy: gość nie może przychodzić po gościu). Zmienna długość 15-60 s. Zajęcia do wyboru, każde ma dźwięk i drobny skutek:
  - **Segregowanie**: przeciągnij rzecz do skrzyni z właściwą linią. Efekt: szukanie w tej skrzyni jest potem łatwiejsze (rzeczy lepiej poukładane). Łączy pauzę z pętlą.
  - **Radio**: kręcisz pokrętłem, łapiesz urywki wiadomości (policja szuka kogoś, strajk motorniczych, pogoda). Radio zasila gałęzie fabuły (sekcja 8).
  - **Telefon biura**: dzwoni ktoś z opisem zguby; sprawdzasz skrzynię i obiecujesz „zatrzymam”. Mini-zadanie bez wymogu, ale nagroda $ jeśli rzecz faktycznie jest.
  - **Szyba**: zaparowana, przecierasz ręką i widzisz ulicę (kto idzie, czy świeci się okno naprzeciwko).
  - **Herbata**: czajnik, kubek; w środku nocy daje ciszę i „zdanie z głowy” (myśl postaci).
  - **Notatnik**: dopisujesz sobie hasło o gościu; w finale „Odebrany” liczą się notatki.
- **S2 (P1, M). Kącik gracza** z ulepszeniami kosmetycznymi (roślina, kocyk, radio, czajnik, zdjęcie): kupowane za $ z soboty. Efekt: pokój wygląda inaczej, co gracz widzi w oknie. Zachowuje to, co działa w Unpacking: personalizacja bez grindu.
- **S3 (P1, S). Dzwonek na ladzie klikalny** (dźwięk + wibracja kropel). Gość reaguje: „Słyszę, słyszę.”
- **S4 (P1, S). Cykl nocy**: zegar naprawdę idzie, 23:40 → 6:00, przed świtem muzyka zmienia się, tramwaj rano. Dzień kończy się świtem, nie przyciskiem.
- **S5 (P2, M). Wejście gościa fizyczne**: dzwonek drzwi, kroki, szarpnięcie klamką, a dopiero potem sylwetka za szybą (Tommy: klimat pierwszej minuty zostaje, więc tylko dopełniamy).

## 8. DODATKOWE GAŁĘZIE FABUŁY (nie psują Fotela)
Zasada: gałąź nie zdradza łańcucha dyżurnych, może tylko **dołożyć presję lub trop-wabik**. Każda używa istniejących liczników (Urząd/Ekspozycja, Ludzie, `bez`, `kopie`) i kończy się w ≤ 3 dniach.

| # | Gałąź | Dzień (propozycja) | Scena i wybór | Skutek w licznikach | Bezpieczeństwo dla Fotela |
|---|---|---|---|---|---|
| 1 | **Policja: sierżant Kaplan** sprawdza rejestr zguby „w sprawie telefonu zaginionej” | 13 (burza) | Chce księgę z wpisami z ostatniego miesiąca. Pokaż całą / pokaż wyrywkowo / „kopia jest w Urzędzie”. Jeśli wcześniej „bez wpisu”, zauważa dziury w numeracji | Pokaż całą: Ekspozycja +2, `kopie`+1. Wyrywkowo: kasa 0, ryzyko 50% wpadki. Odeślij: Ludzie −1, wraca w d18 z nakazem | Kaplan szuka nr 4 (kanał), to wabik. Nie dowiaduje się o fotelu |
| 2 | **Kontrola z Urzędu (zaskakująca)** zamiast sobotniej tabelki | 10 lub 15 | Urzędnik liczy skrzynie i porównuje z rejestrem. Mini-scena w magazynie: 20 s na ukrycie jednej paczki w płótnie | Znaleziona: kara $, Ekspozycja +1; ukryta: `bez`+1 | Wzmacnia obraz Urzędu jako wycieku (uderzenie 5) |
| 3 | **Prywatny detektyw: pan Hale** szuka zguby klientki | 11-12 | Płaci 200 $ za informację, kto odebrał rzecz Mai. Sprzedać / odmówić / skłamać | Sprzedaż: +200 $, `maya_testy` −1, Ludzie −2 | Hale nie trafia do Skrytki, kończy w ślepej uliczce |
| 4 | **Dziennikarka: Tess Orlov, „Kurier Wieczorny”** | 14 | Pisze o rzeczach znalezionych w mieście, pyta o ogłoszenie „Bez referencji. Dyskrecja.” Dwa dni później gazeta (jest dźwięk `sfx_newspaper`) | Powiesz o ogłoszeniu: Skrytka ma problem w d18 (Iris zła), Ludzie +1 | Pierwsza osoba z zewnątrz zadająca właściwe pytanie, zapowiedź zwrotu |
| 5 | **Sanepid / BHP** | 8-9 | Wilgoć i pleśń w magazynie; inspektor chce obejrzeć wszystkie skrzynie. Wyniki: dwa dni zamkniętej skrzyni (linia 6) | Utrata dostępu do skrzyni = trudniejsze szukanie przez dwa dni | Czysto mechaniczne, zero fabuły |
| 6 | **Włamanie na zapleczu (pauza)** | 16 (noc) | Hałas w magazynie, w pauzie decydujesz: sprawdzić / zadzwonić / zostać. Ktoś szuka kasetki | Sprawdzić: znajdujesz ślady (znak Veri „K”); zadzwonić: policja przychodzi w d17 | Podaje trop do Very bez zdradzania prawdy |
| 7 | **Księgowy Zarządu Cooper: kontrola kasy** | 19 | Porównuje 40 $/wizyta z Twoimi wpisami. Gdy brały się „pokusy”, rozbieżność | Zależnie od `bez` i `thefts`: kara albo premia, wraca w sobotę | Pokrywa się z „pieniądze zgadzają się” z §3.2 |
| 8 | **Zgubiony mąż** (jednorazowy żart) | 7 lub 12 | Starsza pani zgłasza zgubę męża „w tramwaju 6”. Pytania zabawne, mąż odnajduje się w magazynie (zasnął w skrzyni?) | Ludzie +1, humor (CD2 prawo 6) | Zero konfliktu, oddech po ciężkim dniu |

**Dla wszystkich:** radio w pauzie (S1) zapowiada gałąź na dzień przed wizytą (zapowiedź w wiadomościach: „policja szuka świadków włamania przy Cooper”), co buduje czucie życia miasta.

## 9. TOP 20 (kolejność realizacji)
| # | Pozycja | P | Rozm. |
|---|---|---|---|
| 1 | S1 Pauza z zajęciami (segregowanie + radio + telefon + szyba) | P0 | L |
| 2 | G2 Szukanie z trudnością, bez podpisów, z cierpliwością gościa | P0 | M |
| 3 | G1 Stawka od ręki po decyzji (twarz, dźwięk, kwota) | P0 | M |
| 4 | F1 Zakończenia Fotel wpięte i przetestowane botem | P0 | L |
| 5 | F2 Pole na imię w dniu 20 + użycie w finale | P0 | M |
| 6 | P-1 Portrety dla 30 gości (do tego czasu bez powtórzeń w dniu) | P0 | L |
| 7 | C1 Baner „Krok N” wygaszany; hak od okienka, nie od 3 ekranów prologu | P0 | S |
| 8 | 4.1-4.3 Dzwonek wejścia, drzwi, pieniądze (SFX w ElevenLabs) | P0 | S |
| 9 | Decyzja z kwotą na każdy dzień | P1 | M |
| 10 | F3 Notatki S.H. | P1 | M |
| 11 | F4 Ekspozycja i ekran „kopie” po finale | P1 | S |
| 12 | V1 Karta końcowa do udostępnienia | P1 | M |
| 13 | V5 Kot na parapecie | P1 | S |
| 14 | S3 Dzwonek na ladzie klikalny + reakcje gości | P1 | S |
| 15 | P-3 Tiki fizyczne gości | P1 | M |
| 16 | P-4 Odcisk dłoni na szybie po wyjściu gościa | P1 | S |
| 17 | G3 Zaglądanie do rzeczy w trakcie szukania | P1 | M |
| 18 | S4 Zegar nocy i świt jako koniec dnia | P1 | S |
| 19 | Gałąź 1 Policja + gałąź 4 Dziennikarka (dwie najlepsze) | P1 | M |
| 20 | S2 Kącik gracza (kosmetyka za $) | P1 | M |

## 10. Czego nie robić (z krytyki hitów, CD2 §11)
Nie dokładać grindu (cele poboczne bez liczników), nie dawać kar bez nauki (cierpliwość gościa to sygnał, nie reset), nie rozwlekać pauz (max 60 s, można pominąć), nie pokazywać miernika dobra/zła.
