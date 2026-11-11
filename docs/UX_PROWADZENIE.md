# UX I PROWADZENIE GRACZA: LOST & FRAUD (Okienko)

Dokument projektowy dla wątku gry (`game/`) i wątku dialogów. **Nie zmienia kodu.** Podstawa: `prompty/CD2_master_prompt.md` (§2, §3.7, §4, §6, §8), `koncept/fabula_25_dni_v2.md` (§4-§7, §13), `docs/BACKLOG_JAKOSCI.md` (P-2, G1-G2, S1, §8), dialogi z `koncept/` i `game/data.js` (30 gości).

**Uwaga o spoilerach:** sekcje 3 i 5 odwołują się do zwrotu „Fotel”. Tylko dla autorów. **Żaden tekst oznaczony „TEKST W GRZE” nie zdradza zwrotu** (sprawdzone wg CD2 3.7b: nic o łańcuchu dyżurnych przed d23).

Cel jednym zdaniem: gracz w każdej sekundzie wie **kto** stoi w okienku, **co** ma teraz zrobić i **o co warto pytać dalej**, a nic z interfejsu nie leży na okienku ani na rzeczy, którą trzyma.

---

## 0. Stan obecny (co przeczytałem w kodzie, nie uruchamiałem)

Źródło: `game/game.css`, `game/game.js` na `main` (54951968). To są punkty, które łamią cel powyżej:

| # | Co jest | Dlaczego przeszkadza |
|---|---|---|
| 1 | `.toast` stoi `left:50%; top:130px` | Dokładnie nad okienkiem i głową gościa. Komunikat zasłania twarz w chwili reakcji. |
| 2 | `notebook()` otwiera `.tut` (`inset:0`, tło `rgba(0,0,0,.82)`, `z-index:850`) | Notatnik przykrywa cały ekran, w tym gościa. Zawiera tylko płaską listę zdań (`ST.notes`), bez twarzy, ról i wątków. |
| 3 | `.step` (pasek podpowiedzi) środek góry, `animation: stepglow` w nieskończoność, do 1100 px | Pulsuje cały czas nad sceną. To najbardziej rozpraszający element. |
| 4 | `.top` (tekst rozmowy) czarny prostokąt 1100×, lewy górny róg, czcionka 30 px | Zasłania lewą połowę sceny; tekst i podpis postaci w jednym bloku. |
| 5 | `.wallet` + `.gear` + `.step` + `.toast` w jednym pasie górnym (y 10-130) | Cztery elementy walczą o ten sam obszar. |
| 6 | `who(g)` zwraca tylko `g.postac` („Iris Bell, 56”) | Brak roli, brak znacznika wątku, brak informacji „wraca”. 30 gości, a gracz nie ma jak ich odróżnić po zniknięciu z okienka. |
| 7 | Samouczek `tutorial()` jako modal `.tut` na starcie | Ściana tekstu przed pierwszym gościem (CD2 8.6 zabrania modali-samouczków). |

Współrzędne w 1.1 są **propozycją w układzie sceny 1620×1080**, zmierzoną na tle (patrz sekcja 7); reguła jest wiążąca, liczby wątek gry dopasuje.

---

## 1. UKŁAD EKRANU I REGUŁA „NIC NIE ZASŁANIA”

### 1.1 Układ ekranu (scena 1620×1080, proporcje 3:2)

**Oszacowane ze zrzutów gry (Playwright, okno 1920×1080):** scena ma 3:2 i stoi na środku z czarnymi pasami po 150 px; grafika tła jest 1536×1024. Wszystkie współrzędne niżej są we **współrzędnych sceny** (0-1620, 0-1080), nie okna. Okno na grafice zajmuje ok. x 280-1090, y 40-770; lampa i dzwonek po prawej (x 1210-1590, y 450-930), półki z rzeczami po bokach (dekoracja).

```
┌───────────────────────────────────────────────────────────────┐
│ PAS GÓRNY (y 0-56): dzień·godz │ nitki / komunikat │ $ │ ⚙   │
├──────┬──────────────────────────────────────┬─────────────────┤
│ półka│     OKIENKO + GOŚĆ  (ŚWIĘTE)         │ lampa, dzwonek  │
│(deko)│     x 280-1090, y 56-770             │ (deko, żywy     │
│      │                                      │  świat)         │
├──────┴──────────────────────────────────────┴─────────────────┤
│ BLAT (y 770-1000): wybrana rzecz, odbitka lampy (ŚWIĘTE)      │
├───────────────────────────────────────┬───────────────────────┤
│ PAS TEKSTU (y 800-1060, x 20-1060)    │ PAS AKCJI (x 1100-    │
│ napisy + plakietka gościa + podpowiedź│ 1600): pytania/gesty  │
└───────────────────────────────────────┴───────────────────────┘
   Notatnik: szuflada z PRAWEJ (x 1100-1620, y 56-1080)
```

- **Okienko i wybrana rzecz są święte.** Strefa okienka i blatu nie dostaje żadnej nakładki, ciemnego tła ani tekstu. Wyjątki: efekty świata (krople, błysk lampy, ruch gościa), bo są sceną, nie interfejsem.
- **Pas górny (56 px) jest jedynym miejscem na komunikaty systemowe.** Stałe: dzień i godzina (lewo), kasa i ⚙ (prawo, **w jednym rzędzie**, a nie jak teraz w dwóch piętrach y 20-80 i y 86-166, gdzie $ leży na misiu z półki). W środku: glify nitek (3.4); gdy pada toast lub podpowiedź systemowa, **zastępuje glify na 2,5 s** i znika. Urząd/Ekspozycja i ukryte liczniki nie są w pasku.
- **Pas tekstu (dolny lewy)** to napisy rozmowy, jedna linia podpowiedzi fazy i plakietka gościa. Podkładka tylko pod tekstem, czcionka ≥ 26 px, kontrast ≥ 4,5:1 (CD2 8.4). Zastępuje obecne `.top` (czarny prostokąt 1100 px w lewym górnym rogu).
- **Pas akcji (dolny prawy)** to jedno główne działanie fazy (CD2 8.3): trzy pytania, gesty decyzji lub zakładki skrzyń.
- **Notatnik** wysuwa się z prawej (520 px), bo prawa strona sceny to dekoracja (lampa, półki), a nie gość. Okno (do x 1090) zostaje odkryte.

### 1.2 Warstwy (z-index) i kto może leżeć na czym

| Warstwa | Zawartość | Nad okienkiem/blatem? | Zasady |
|---|---|---|---|
| L0 | tło biura, szyba, deszcz | tak (scena) | |
| L1 | gość, okienko, lada | tak (scena) | animacje ≤ 300 ms (CD2 8.7) |
| L2 | wybrana rzecz na blacie, zoom rzeczy | tak (bohater sceny) | zoom do wnętrza rzeczy zostawia widoczną twarz gościa przy krawędzi |
| L3 | pas górny | nie, tylko y 0-56 | stałe, bez ciągłych animacji |
| L4 | pas tekstu, pas akcji | nie | |
| L5 | plakietka gościa | nie, tylko pas tekstu (2.1) | |
| L6 | Notatnik (szuflada z prawej) | nie, tylko x 1100-1620, na żądanie | pauza rozmowy; z zegarem „Nie teraz” |
| L7 | toast / podpowiedź systemowa | nie, tylko pas górny | 1 naraz, kolejka, 2,5 s, bez informacji potrzebnych do decyzji |
| L8 | modale: prolog, karta wieczorna, sobota, finał | cały ekran, **tylko między wizytami** | w wizycie modal zakazany |
| L9 | ustawienia/pauza | cały ekran, na żądanie (Esc) | jedyny modal dozwolony w wizycie |

### 1.3 Reguły twarde (do testów QA)

1. **R1.** Prostokąty „okienko” i „blat” nie przecinają się z żadnym elementem L3-L7 (test: `getBoundingClientRect` w fazach rozmowa/szukanie/decyzja).
2. **R2.** Maks. **1 toast** naraz, tylko w pasie górnym. Żadnych toastów przy decyzji ani przy pytaniu gracza.
3. **R3.** Nic nie pulsuje w nieskończoność. Podpowiedź po pierwszym użyciu gestu znika i wraca po 20 s bezczynności jednym oddechem (nie pętlą). Dotyczy też przycisków `pulse`.
4. **R4.** Modal tylko w przerwach (prolog, karta wieczorna, sobota, finał) i ustawienia. Samouczek jest w świecie (rozmowa, szept szefa, podpowiedź w pasie tekstu).
5. **R5.** Informacja potrzebna do decyzji (kwota, kto patrzy, termin) leży w pasie tekstu/akcji na stałe, nie w toście.
6. **R6.** Notatnik nie zatrzymuje zegara w sytuacjach „z góry dzwonią, masz 40 s”: przycisk szary, podpowiedź „Nie teraz.”
7. **R7.** „Mniej efektów” (jest `reduce`) wyłącza błyski `#dim` i pulsowanie; reszta działa identycznie.
8. **R8.** Każdy ekran ma od razu fokus na pierwszym działaniu; klawiatura (Enter/Space, strzałki) i mysz współistnieją.

### 1.3a Fazy dnia: co gdzie leży

| Faza | Pas tekstu | Okienko/blat | Pas akcji | Jedno główne działanie |
|---|---|---|---|---|
| Dostawa (23:40) | zdanie narratora | skrzynki, zaglądanie do jednej rzeczy | — | „Zajrzyj do jednej rzeczy” |
| Rozmowa | napisy gościa + plakietka | gość za szybą | 3 pytania | wybierz pytanie |
| Szukanie | wskazówka gościa (1 zdanie, stała) | blat z wybraną rzeczą | zakładki skrzyń 4/6/11 + sterta | znajdź i połóż na blacie |
| Decyzja | stawka (kwota, kto, termin) | rzecz na blacie + gość | gesty (wydaj/odmów/zatrzymaj/zadzwoń) | wybierz gest |
| Karta wieczorna | modal L8: wynik, echo, pytania otwarte | | „Dalej” | „Dalej” |
| Sobota | modal L8, seria 3 zdarzeń | | „Dalej” | „Dalej” |

---

## 2. SYSTEM ROZPOZNAWANIA POSTACI

Problem: 30 gości, 12 głównych. Zasada: gracz po 2 sekundach wie **kto**, po 5 zna jego **rolę**, a w razie wątpliwości otwiera kartotekę **bez zasłaniania gościa**.

### 2.1 Plakietka gościa (stała, w pasie tekstu, pod napisami)

Format jednej linii, zawsze ten sam, w obrazie i w Notatniku (BACKLOG P-2):

```
[portret 64 px]  THOMAS WARD, 71
                 wdowiec · [glif wątku]  [WRACA 2/3]
```

- Imię i nazwisko dużymi, wiek, po „·” **jedno słowo-rola** z listy w 2.4. W dialogu podpis mówiącego to samo imię (bez nazwiska) + glif.
- **Pastylka stanu** (jedna z trzech): `NOWY` (pierwsza wizyta), `WRACA 2/3` (która wizyta z ilu planowanych), `OSTATNI RAZ` (jeśli wizyta zamyka jego wątek, np. Sam w d15 i d25). Brak pastylki = jednorazowy przechodzień.
- **Glify wątków**: do 2 na plakietce. Gość bez wątku nie ma glifu (to też informacja: „to zwykły człowiek, ale rzecz ma historię”).
- Najechanie / fokus na plakietce pokazuje **mini-kartę** w pasie tekstu (3 linie: „Co wiem”, „Czego chce”, „Tik”). Nie przykrywa okienka.

### 2.2 Notatnik: szuflada z kartoteką (zamiast płaskiej listy)

Otwierany klawiszem `N`/`Tab` lub przyciskiem z notesem w pasie górnym. Szuflada wysuwa się z prawej (520 px, x 1100-1620), nie zakrywa okienka (do x 1090). Zakładki (3):

1. **LUDZIE** (kartoteka): siatka portretów 3 × n, kolejność wg ostatniej wizyty; pod portretem imię + rola + glify. Klik = karta.
2. **WĄTKI** (patrz 3): lista 6 nitek z etapem i pytaniem.
3. **S.H.** (Notatnik Sama): 5 slotów kartek, puste pokazane jako zagięty róg, licznik niewidoczny. Tu ląduje to, co dziś robi `ST.notes`.

**Karta postaci (stała rama, 7 pól):**

| Pole | Zawartość | Źródło |
|---|---|---|
| Portret | 3 wyrazy: spokojny, poruszony, zamknięty (gra już ma `setFace`) | art / `lostfraud_art5` |
| Imię, wiek, rola | j.w. | `g.postac` + tabela 2.4 |
| **Co o niej wiem** | max 3 punkty, każdy z dniem: „d3: boi się powrotu do domu” | zdania zapisywane przy odkryciu (3.5) |
| **Czego chce teraz** | jedna linia, wypełniana po rozmowie | `g.potrzeba` (do dopisania z obsady) |
| **Znak rozpoznawczy (tik)** | „Gładzi mankiet.” „Liczy na głos.” | CD2 §4 pkt 4, BACKLOG P-3 |
| Rzeczy | miniatury rzeczy, które od niej były w okienku (max 4) | `ST` historia wydań |
| Wątki | glify + etap | 3 |

Pola nieznane są **zaciemnione kreskami**, nie ukryte: gracz widzi, że czegoś brakuje (ciekawość, Unpacking). Pola wypełniają się wyłącznie zdarzeniami z gry (pytanie, rzecz, scena), nigdy automatycznie po czasie.

**Przechodnie** (18-19 gości jednorazowych): mini-karta w tej samej zakładce, z jedną linią o rzeczy i jedną o tym, co się z nimi stało po decyzji. Kontrast głównych i tła (CD2 §4): główni mają pełną kartę, przechodnie mini-kartę.

### 2.3 Rozpoznanie „po uchu” i „po oku” (powroty)

- **Motyw dźwiękowy wejścia** (3-5 plików SFX, 1-2 s, bez słów) dla postaci głównych: Elias: szelest składanego numerka; Iris: skrzyp rękawiczek; Victor: dwa kliknięcia długopisu; Vera: pęk kluczy; Maya: **brak** kroków (cisza w deszczu, tylko drzwi); Stahl: kapelusz o framugę. Gracz poznaje gościa, zanim zobaczy go za szybą. Spełnia CD2 9.3 (tik jako mem) i 9.7.
- **Kolejka pod drzwiami** (BACKLOG P-5): w fazie dostawy, za szybą przed pierwszym pukaniem, widać 1-2 sylwetki z plakietką-cieniem (tylko glif wątku, bez imienia). Gracz widzi, że „ktoś znajomy czeka”, zanim zapuka.
- **Pastylka `WRACA`** (2.1) i **odcisk dłoni na szybie** po wyjściu (BACKLOG P-4) zostają jako świat, nie interfejs.
- **Echo w twarzy:** gdy gość wraca po trudnej decyzji, pierwsza kwestia i portret (wyraz „poruszony”) pokazują skutek (CD2 3.4, 7.7).
- **Ten sam format nazwy wszędzie:** „Iris Bell, 56 · dama z kopertą” w plakietce, kartotece, karcie wieczornej i zakończeniach. Zakaz zmieniania epitetu między ekranami.

### 2.4 Słowo-rola (jedno, stałe) dla postaci głównych

| Postać | Rola | Postać | Rola |
|---|---|---|---|
| Thomas Ward | wdowiec | Victor Crane | inspektor |
| Rosa Vale | (do ustalenia z dialogami) | Elias | czeka na oprawkę |
| Maya | zaginiona | Sam Holt | poprzednik |
| Evan Doyle | mąż Mai | Nora | lokatorzy |
| Lena Brandt | siostra Mai | Vera Kovacs | zaplecze |
| Noah Reyes | policjant | Ada Vale | z królikiem |
| Iris Bell | dama z kopertą | Leo Marsh | konduktor |
| Gus Pell | (z d5, rola po ustaleniu) | Stahl | (nie pokazywać roli, patrz 3.3) |

**Stahl i rola:** pokazywany bez roli („brak opisu”), bo jego tożsamość jest zagadką (Q8, d17). Plakietka: `??? · szary kapelusz`. To celowy wabik, nie błąd.

---

## 3. WĄTKI DO ŚLEDZENIA („nitki”)

### 3.1 Zasady

- **6 nitek**, każda to **pytanie gracza**, nie nazwa fabuły. Gracz widzi w Notatniku pytanie jego słowami (Q z `fabula_25_dni_v2.md` §5).
- **Rozpoznanie glifem, nie kolorem.** Styl „Linoryt sodowy” ma trzy farby (czerń, krem, pomarańcz-światło, `prompty/styl_linoryt_sodowy.md` pkt 3-4), czerwień jest zarezerwowana dla decyzji. Znacznik wątku = **rysunek w linorycie** (6 prostych glifów, krem na czerni) + **wzór ramki** (kropkowana / pełna / podwójna), pomarańcz oznacza tylko „świeży ślad” (światło).
- **Nowa nitka max 1 dziennie** (d1-d6), żeby reguły rosły po jednej (CD2 6.5). Wcześniejsze ślady **zasiewamy po cichu** i wpisujemy do Notatnika **wstecz** w chwili otwarcia nitki („Wcześniej zauważyłeś: …”): gracz ma poczucie „przecież to widziałem”, nie „nikt mi nie powiedział”.
- **Postęp = 4 etapy (kropki), bez procentów i bez „ile zostało”.** Ślad (1) → Trop (2) → Wątek (3) → Rozstrzygnięcie (4). Nie pokazujemy, ile śladów jest w sumie (bez zdradzania głębi).
- **Wspólna zasada spoilerów (CD2 3.7a/3.7b):** nitki mówią, o co gracz pyta, nigdy co za tym stoi. Żaden tekst nitki przed d23 nie zawiera słów „dyżurny”, „łańcuch”, „rotacja”, „następca”, „fotel”, „wybiera”.

### 3.2 Sześć nitek (tabela główna)

| # | Nitka (w Notatniku) | Pytanie gracza (TEKST W GRZE) | Glif | Otwiera się | Hak w d1-3 (konkretna scena) | Kolejne ślady (z kanonu v2) | Rozstrzygnięcie |
|---|---|---|---|---|---|---|---|
| 1 | **KSIĘGA** | „Kto wyrwał stronę z księgi? Co na niej było?” | wyrwana kartka | **d1** po 1. gościu (Thomas) | Thomas, rękawiczka: w mankiecie kwit „Prawa wydana bez wpisu. Lewa czeka. S.H.”, w księdze brak strony (już jest w danych `d1_thomas`) | d6 N2 „Nie ufaj drugiej kopii” · d9 wykaz · d10 N3 · d15 kalka (6 linii) · d20 N5 | d24 list Sama |
| 2 | **MAYA** | „Gdzie jest Maya? Czy jest bezpieczna?” | szalik zawiązany w pętlę | **d2** (po plecaku/szaliku) | d2: inicjały na szaliku i pierścionek w plecaku; d3: SMS Leny „Nie wracaj do domu. Jadę po ciebie w sobotę.” i wymiana Evan/Lena | d7 klucze · d11 Maya przychodzi · d16, d21 testy Mai · d22 Stahl | d21-22 |
| 3 | **PODPIS** | „Czyj jest ten podpis na mojej umowie i skąd to ogłoszenie?” | pętla w literze | **d3** (retro: prolog d1) | d1 prolog: umowa z nieczytelnym podpisem „Zarząd Nieruchomości Cooper”, słup z ogłoszeniem; d2-3: kadr słupa w karcie wieczornej, z nowym odciętym paskiem | d5 gazeta (to samo ogłoszenie) · d10 ta sama pętla pod pokwitowaniem pudełka | d24 |
| 4 | **IRIS** | „Co Iris robi z pieniędzmi i paczkami?” | koperta z zagiętym rogiem | **d4** | **zajawka d3** (Lena: „Siostra zostawia rzeczy tam, gdzie ktoś je przechowa i nie zapyta, po co.”), d4 pierwsza wizyta Iris, koperta 120 $ | d6 puszka · d8 żółta kopia · d9 piórnik z żetonami · d12 kasetka · d23 | d23 |
| 5 | **KTO PATRZY** | „Kto sprawdza biuro i po co?” | oko w prostokącie okienka | **d5** (Victor) | **d2:** karta wieczorna z kartką „W piątek Urząd liczy skrzynie” (hak audytu, zgodny z d5 `Victor sprawdza tydzień`); **d3:** w szybie naprzeciwko ostatni kadr dnia z sylwetką w kapeluszu, bez tekstu (do akceptacji, patrz 5.3) | d5 Victor + Stahl milczy · d9 · d17 detektyw · d20 · d22 · d25 karta „Kopie” | d25 |
| 6 | **ELIAS** | „Dlaczego Elias pyta o moje imię?” | złożony numerek | **d6** (Elias pyta o imię osoby za szybą) | d1-d5: Elias w ogonie kolejki co dzień, „Czy jest już oprawka?”; pastylka `WRACA` zmienia się w licznik „dni czekania” | d13 „Pan Holt napisał ołówkiem: S. Holt” · d20 · d25 | d25 (imię) |

**Jak to czyta gracz:** w d1-d3 widzi 3 nitki (Księga, Maya, Podpis), w d4-d6 dochodzą kolejne. Przez pierwsze 3 dni zawsze ma otwarte 2-4 pytania (zgodnie z v2 §5), nigdy zero i nigdy więcej niż 4 na karcie wieczornej.

### 3.3 Pułapki i wabiki w interfejsie

- **Stahl** nie ma roli i nie ma imienia w nitce KTO PATRZY aż do d17. Pytanie w d5-16 pozostaje „Kto sprawdza biuro i po co?”, a wabik W1 („gracz jako wtyczka Urzędu”) żyje, bo nitka mówi o Urzędzie, nie o graczu.
- **IRIS** pytaniem „co robi z pieniędzmi” podtrzymuje wabik W5 (chciwa właścicielka); prawda wychodzi w d23.
- **PODPIS** daje graczowi szybką, uczciwą wskazówkę (pętla w literze), zgodnie z drabiną odsłon v2 §4 (d10 częściowa odpowiedź), a nie zdradza roli Very.
- Nitki **nie wybierają** za gracza. Nie ma „głównego wątku” na ekranie; KSIĘGA jest tylko pierwsza.

### 3.4 Pasek nitek (pasek górny, x ~820-1100)

Sześć glifów 32 px w jednej linii, zapalone tylko otwarte nitki. Stany glifu: **ciemny** (nie otwarta, w ogóle niewidoczny), **kremowy** (otwarta), **kremowy + pomarańczowa poświata 1,2 s** (świeży ślad). Brak liczb. Najechanie = jedno zdanie z pytaniem nitki. Klik = Notatnik na zakładce WĄTKI.

### 3.5 Sygnał przy odkryciu („trzy rzeczy w 2 sekundy”)

Zawsze ten sam, rozpoznawalny: **dźwięk + obraz + zdanie**, bez zatrzymywania gry.

1. **Dźwięk** `sfx_trace_pin` (nowy, krótki): stukot zszywacza + 300 ms ściszenia ambientu (jak „oddech” przed ciszą).
2. **Obraz:** glif nitki w pasku zapala się światłem sodowym (1,2 s); w pasie górnym zamiast glifów pojawia się na 2,5 s toast.
3. **Zdanie** (TEKST W GRZE, 6-10 słów, w czasie teraźniejszym, bez interpretacji): „Zapisano: w mankiecie kwit podpisany S.H.” / „Zapisano: Maya zostawiła telefon celowo.” / „Zapisano: ta sama pętla w literze K.”

**Nagrody za etapy (drobne, bez grindu, CD2 6.7):**

| Etap | Co gracz dostaje |
|---|---|
| 1 Ślad | Pierwsza karta w Notatniku + sygnał. |
| 2 Trop | **Nowe pytanie** w rozmowie z powiązaną postacią (np. „Zapytaj o S.H.” u Thomasa i Eliasa). Realna wartość informacyjna. |
| 3 Wątek | Zmiana w biurze, którą widać: pinezka + nitka na tablicy za plecami gracza (dekoracja sceny, bez klikania). |
| 4 Rozstrzygnięcie | Karta „Zamknięte:” + jedna linia w zakończeniu; wypełnia pasek „Zabrakło” (v2 §10). |

Brak nagrody w kasie za odkrycia (kasa zostaje paliwem dylematu, CD2 7.1).

### 3.6 Hipotezy („Moja teoria”, P2)

Po etapie 2 nitka pozwala wybrać jedną z 2-3 hipotez (jedna zawsze „Nie wiem”). Przykład KSIĘGA: „Ktoś z Urzędu” / „Ktoś zbliżony do mnie” / „Nie wiem”. Bez wpływu na rozgrywkę; na ekranie końcowym: „Myślałeś: X. Wyszło: Y.” (replay, wartość z Obra Dinn). **Zakaz:** prawdziwa odpowiedź (Fotel) nie może być na liście wyborów, żeby jej nie zdradzić.

### 3.7 Powiązanie z zakończeniami

Pięć nitek paska „Zabrakło” (v2 §10: Sam, Maya, Skrytka, Notatki, List) to **projekcja** nitek tego dokumentu: Sam = KSIĘGA, Maya = MAYA, Skrytka = IRIS+PODPIS, Notatki = zakładka S.H., List = rozstrzygnięcie KSIĘGI. KTO PATRZY i ELIAS mają własne finały (karta „Kopie”, imię).

---

## 4. ONBOARDING PIERWSZYCH TRZECH DNI

Zasada: **jedna nowa rzecz naraz** (CD2 6.5), nauka w świecie (CD2 8.6), pierwszy hak w < 5 minut (CD2 §0).

### 4.1 Po pierwszym gościu (Thomas, d1, ok. 4-6 min)

**Gracz ma wiedzieć (5 rzeczy):**
1. Jestem sam za okienkiem nocnego biura rzeczy znalezionych; ktoś puka, opisuje zgubę.
2. Pętla: posłuchaj, poszukaj w skrzyni, podaj albo odmów.
3. Kto to był: **Thomas Ward, 71, wdowiec**, rzecz **lewa rękawiczka zszyta białą nitką**.
4. Coś nie gra: w mankiecie kwit „Lewa czeka. S.H.”, w księdze brakuje strony.
5. Mam Notatnik i właśnie coś do niego trafiło.

**Co UI robi:** pas tekstu: 1 zdanie podpowiedzi (nie pulsuje), plakietka Thomasa z pastylką `NOWY`, po decyzji **pierwszy sygnał odkrycia** (3.5) i pierwszy raz zapala się glif KSIĘGA w pasku. **Czego jeszcze nie pokazujemy:** kartoteki rozwiniętej, zakładek WĄTKI/S.H., pozostałych nitek.

**TEKST W GRZE (podpowiedzi pasa tekstu, w kolejności faz):**
- Dostawa: „Zajrzyj do jednej rzeczy, zanim otworzysz okienko.”
- Rozmowa: „Zapytaj, co dokładnie zginęło.”
- Szukanie: „Rzecz leży w jednej ze skrzyń. Zacznij od linii, którą wskazał.”
- Decyzja: „Wydać, jeśli opis pasuje. Zatrzymać, jeśli coś się nie zgadza.”
- Po decyzji (pas górny): „Zapisano: w mankiecie kwit podpisany S.H.”

### 4.2 Po pierwszym dniu (Thomas + Rosa, karta wieczorna)

**Gracz ma wiedzieć:** (a) że rzeczy opowiadają historie (wnętrze rękawiczki), (b) że każda decyzja ma cenę i skutek jutro, (c) że **ktoś wyrwał stronę i zostawił podpis S.H.** (otwarte pytanie nr 1), (d) imiona dwóch ludzi i jedno z nich wróci, (e) że w kolejce stoi jeszcze starszy pan z numerkiem (Elias).

**Karta wieczorna d1 (modal L8):** wynik dnia (kasa, kto odszedł z czym), **echo** w formie zdania człowieka (CD2 5.11) i blok „Co nie daje spokoju” z 2 pytaniami otwartymi i glifami:

> ▯ „Kto wyrwał stronę z księgi?”  
> ▯ „Kto podpisał moją umowę tak, że nic nie można odczytać?”  
> Jutro: ktoś znowu pojawi się z rzeczą, której nikt nie zgłosił.

**Dozwolone w d1:** 1 nitka widoczna w pasku (KSIĘGA); PODPIS i ELIAS siedzą w kartotece jako „ślady bez nitki” (cienkie kreski), bez glifu w pasku.

### 4.3 Po drugim dniu

**Gracz ma wiedzieć:** zaginiona kobieta ma imię (Maya) i jej rzeczy trafiły do biura nie przypadkiem; chłopak z plecakiem (Jonah) i Hana mają swoje wątki (każdy z jedną linią łączącą z Q, wg v2 §12); w piątek przychodzi kontrola.

**Co UI robi:** otwiera się nitka MAYA (retro-zapis: „Wcześniej: inicjały na szaliku”), mała nowość mechaniczna dnia 2 (ograniczony czas oględzin przed otwarciem, wg kalendarza), karta wieczorna z kartką „W piątek Urząd liczy skrzynie.”

### 4.4 Po trzecim dniu (granica „teraz się wkręcasz”)

**Gracz ma wiedzieć:** (a) są **trzy żywe pytania** (KSIĘGA, MAYA, PODPIS) i każde ma co najmniej dwa ślady, (b) dwie osoby (Evan i Lena) chcą tej samej rzeczy z przeciwnych powodów: pierwszy dylemat „komu to się należy” bez dobrej opcji, (c) ktoś mówi, że siostra „zostawia rzeczy tam, gdzie nikt nie zapyta”, a jutro przyjdzie dama z kopertą (zajawka IRIS), (d) w oknie naprzeciwko mignęła sylwetka w kapeluszu (jeśli akceptujemy 5.3).

**Test akceptacji d3 (patrz 5.4):** zapytany po d3 „co Cię teraz najbardziej ciekawi?”, nowy gracz podaje **konkretne pytanie** (np. „kto wyrwał stronę”, „gdzie jest Maya”), a nie „nie wiem, o co chodzi w grze”.

### 4.5 Co NIE dzieje się w d1-d3

Brak ścian tekstu, brak pełnej kartoteki, brak wszystkich sześciu nitek naraz, brak modala z regułami. Brak informacji o rotacji, dyżurnych, łańcuchu (CD2 3.7b).

---

## 5. LISTA ZMIAN DLA WĄTKU GRY (priorytety)

Rozmiar: S ≤ 2 h, M = pół dnia, L = dzień+. P0 = bez tego nie wydajemy, P1 = mocno podnosi czytelność, P2 = dodatek. Klucze tekstów do `lang/pl.json`.

### 5.1 Zmiany

| # | Pr. | Rozm. | Zmiana | Element UI / konkret | Klucz i tekst PL |
|---|---|---|---|---|---|
| 1 | P0 | S | **Przenieś `.toast` z `top:130px; left:50%` do pasa górnego** (y 0-56, w miejsce glifów nitek), 1 naraz, kolejka, 2,5 s; wyłącz toasty w fazie decyzji | R1, R2 | `toast.trace`: „Zapisano: {zdanie}” |
| 2 | P0 | S | **Zatrzymaj pulsowanie `.step`**: jedna animacja wejścia, potem statyczny; po 20 s bezczynności jeden oddech; przenieś do pasa tekstu jako podpowiedź fazy | R3 | `hint.deliver`, `hint.talk`, `hint.search`, `hint.decide` (teksty z 4.1) |
| 3 | P0 | M | **Notatnik jako szuflada z prawej (x 1100-1620)** zamiast `.tut` na pełen ekran; pauza rozmowy; „Nie teraz” przy zegarze | L6, R6 | `nb.locked`: „Nie teraz.” |
| 4 | P0 | M | **Plakietka gościa** zamiast samego `g.postac`: portret 64 px, imię, wiek, rola, pastylka NOWY/WRACA/OSTATNI RAZ, do 2 glifów | 2.1; wymaga pola `rola` i `watki` w `data.js` (patrz 5.2) | `badge.new`: „NOWY”, `badge.back`: „WRACA {n}/{m}”, `badge.last`: „OSTATNI RAZ” |
| 5 | P0 | M | **Układ 3:2 z 1.1:** `.top` zamienić na pas tekstu (x 20-1060, y 800-1060), `.zones` na pas akcji (x 1100-1600), pas górny 56 px (dzień, nitki/toast, $, ⚙), `.wallet` i `.gear` w jeden rząd | 1.1, 1.3a | — |
| 6 | P0 | M | **Samouczek w świecie:** usunąć modal `tutorial()`; trzy podpowiedzi fazowe (4.1) + jeden szept szefa przez szybę w d1 | R4 | `hint.*` j.w. |
| 7 | P1 | L | **Kartoteka LUDZIE + karta postaci (7 pól)**, pola zaciemnione do czasu wypełnienia zdarzeniami | 2.2 | `card.knows`: „Co o niej wiem”, `card.wants`: „Czego chce”, `card.tik`: „Znak rozpoznawczy”, `card.unknown`: „??? (jeszcze nie wiesz)” |
| 8 | P1 | L | **Zakładka WĄTKI + 6 nitek** z 4 etapami, pytaniem, glifem; retro-zapis; pasek nitek w pasku górnym | 3.1-3.4 | `thread.q.ksiega` itd. (pytania z 3.2); `thread.stage.1..4`: „Ślad / Trop / Wątek / Rozstrzygnięcie” |
| 9 | P1 | M | **Sygnał odkrycia** (dźwięk + glif + zdanie) wspólny dla wszystkich śladów; 1 nowy SFX `sfx_trace_pin` | 3.5 | `trace.*` zdania per ślad, 6-10 słów |
| 10 | P1 | S | **Karta wieczorna z blokiem „Co nie daje spokoju”**: 2-4 pytania otwarte z glifami (nigdy 0, nigdy >4) | 4.2 | `eve.open_h`: „Co nie daje spokoju”, `eve.next`: „Jutro: {hak z v2 §6}” |
| 11 | P1 | S | **Hak końca dnia z v2 §6 w karcie wieczornej** (ostatnia linia) dla dni 1-25 | v2 §6 kolumna „Hak” | `eve.hook.dN` |
| 12 | P1 | M | **Motywy dźwiękowe wejścia** dla 6 postaci głównych (SFX 1-2 s) + kolejka-cień za szybą przy dostawie | 2.3 | — |
| 13 | P1 | S | **Pasek stanu rozmowy:** trzy pytania gracza zawsze w pasie akcji, każde max 75 znaków, ikona „nowe” przy pytaniu odblokowanym przez trop (etap 2) | CD2 5.5 | `ask.new`: „NOWE” |
| 14 | P1 | S | **Nazwa i rola spójne** w plakietce, kartotece, karcie wieczornej, zakończeniach (jeden słownik ról) | 2.4 | `role.*` |
| 15 | P2 | M | **Tablica z nitkami w tle** (pinezki dla etapu 3) | 3.5 | — |
| 16 | P2 | M | **Hipotezy „Moja teoria”** po etapie 2 + ekran „Myślałeś / Wyszło” w zakończeniu | 3.6 | `theory.h`: „Moja teoria”, `theory.unknown`: „Nie wiem” |
| 17 | P2 | S | **Nitka ELIAS: licznik „dni czekania”** zamiast pastylki WRACA | 3.2 #6 | `elias.days`: „Czeka od {n} dni” |
| 18 | P2 | S | **Odcisk dłoni na szybie** + odgłos kroków po wyjściu (P-4 z backlogu) | 2.3 | — |

### 5.2 Zmiany w danych (dla wątku dialogów i `build_data.py`)

Każdy rekord gościa w `data.js` dostaje pola (bez nich nie ma plakietki ani kartoteki):

- `rola` (jedno słowo z 2.4), `portret` (id), `tik` (jedna linia), `potrzeba` (jedna linia),
- `watki`: lista id (`ksiega`, `maya`, `podpis`, `iris`, `patrzy`, `elias`),
- `slad`: opcjonalny zapis odkrycia `{watek, etap, zdanie}` (zdanie 6-10 słów) przypięty do konkretnego wyboru lub rzeczy; to z niego pochodzi sygnał 3.5,
- `wraca`: `[n, m]` dla gości cyklicznych (n-ta wizyta z m).

Walidator (`docs/tools/validate_dialogs.py`): dodać sprawdzenie, że `zdanie` ma 6-10 słów i nie zawiera słów z listy zakazanej przed d23 (3.1).

### 5.3 Do akceptacji (zmiany kanonu, wpisać w `docs/DECISIONS.md` po zgodzie)

Dwie drobne dodatki hakowe, nie zmieniające prawdy za kulisami:
1. **d2, karta wieczorna:** zdanie „W piątek Urząd liczy skrzynie.” (zasiew audytu Victora z d5).
2. **d3, ostatni kadr dnia:** sylwetka w kapeluszu w oknie naprzeciwko, bez tekstu (zasiew Stahla; v2 §6 d5 mówi o „po raz pierwszy”, więc to **tylko obraz sceny, nie wizyta**). Jeśli Tommy uzna, że to zbyt wcześnie, nitka KTO PATRZY otwiera się w d5 bez zasiewu, a pozostałe pięć działa bez zmian.

### 5.4 Testy akceptacji (kolejność wykonania)

1. **Kolizje (R1):** w fazach rozmowa/szukanie/decyzja żaden element L3-L7 nie przecina okienka ani blatu (skrypt Playwright, zrzut + `getBoundingClientRect`).
2. **Toast:** wywołać 3 sygnały w 1 s; pojawia się 1, reszta w kolejce, żaden nie wchodzi w środek.
3. **Pulsowanie:** po 60 s bezczynności w fazie szukania żaden element nie animuje się ciągle (R3).
4. **Notatnik:** w rozmowie otwiera się bez przykrycia gościa; w sytuacji z zegarem jest zablokowany.
5. **Test nowego gracza (5 min, 3 osoby, jedna nie zna gry):** po d1 wskazuje (a) imię i rolę pierwszego gościa, (b) pierwsze otwarte pytanie; po d3 podaje konkretne pytanie, które go ciekawi (4.4).
6. **Test „zasłoń imię”:** po 2 sekundach od wejścia gościa gracz odróżnia go od poprzedniego bez czytania (dźwięk + portret + plakietka).
7. **Spoiler-grep:** w `lang/pl.json` i `data.js` brak słów „łańcuch”, „rotacja”, „następc”, „fotel”, „wybiera” w polach widocznych przed d23; słowo „dyżurny” wolno tylko w ogłoszeniu i umowie prologu oraz na karcie pracownika (kanon d1).
8. **Mobilny/okno:** scena zachowuje 3:2 i skaluje się; poniżej 900 px szerokości pas tekstu i pas akcji składają się w jeden pas pod sceną, okno nadal wolne.

---

## 6. ZWERYFIKOWANE / NIEZWERYFIKOWANE

**Zweryfikowane (uruchomione):** gra z `main` odpalona w Chromium 1920×1080, przejście ścieżki tytuł → prolog → dostawa → oględziny → pukanie (zrzuty, 0 błędów w konsoli, liczba kliknięć), pomiar kontrastu na zrzucie.

**Zweryfikowane (przeczytane):** `prompty/CD2_master_prompt.md`, `koncept/fabula_25_dni_v2.md` (§1-§13), `docs/BACKLOG_JAKOSCI.md`, `koncept/okienko_obsada_i_kalendarz.md` (obsada, kalendarz d1-17), `prompty/styl_linoryt_sodowy.md` (3 farby), `game/game.css` i `game/game.js` na `main` (selektory z sekcji 0), lista gości d1-6 z `game/data.js`, nazwy i kolejność flag z v2 §9.

**Niezweryfikowane:** rozmowa, szukanie i decyzja w grze (bot zatrzymał się na pukaniu), kolizje w proponowanym układzie (współrzędne z 1.1 oszacowane ze zrzutów tła), brzmienie nowych SFX, pozostałe dialogi d7-d25 (czytałem kanon, nie wszystkie sceny), rola Rosy Vale i Gusa Pella (brak w obsadzie), współrzędne 1.1 (propozycja).

---

## 7. KRYTYKA PROJEKTU (skill `design-critique`)

Krytyka dwóch rzeczy: (A) **stanu obecnego ścieżki startowej** (zrzuty z gry `main` w 1920×1080: tytuł, słup, umowa, dostawa, oględziny rzeczy, pukanie; skrypt Playwright, 0 błędów w konsoli) oraz (B) **tego projektu**, żeby nie przenieść problemów A do nowej wersji. Etap: udoskonalanie (gra grywalna, grafika zamknięta).

### 7.A Stan obecny: tytuł → pierwsze pukanie

#### Pierwsze wrażenie (2 sekundy)
Tytuł i światło lampy robią robotę: to jest **spójny, rozpoznawalny świat** (czerń, krem, pomarańcz lampy, deszcz, tramwaj w drzwiach). Oko idzie na napis LOST & FRAUD, potem na przycisk na ławeczce, potem na lampę. Cel gry (nocne biuro rzeczy znalezionych) czyta się z tytułu i podtytułu, ale **hak („ktoś puka, ktoś kłamie”) nie pada ani razu** przed pierwszym gościem.

#### Użyteczność
| Znalezisko | Waga | Rekomendacja |
|---|---|---|
| Od „Zacznij zmianę” do pierwszego gościa jest **6 kliknięć** (Zacznij zmianę, Oderwij pasek, Idź do biura, Podpisz i zacznij zmianę, Nie zaglądam / Zajrzyj, Otwórz okienko) plus **7.** „Odsuń zasłonkę”. Gracz klika przyciski opisujące to, co się i tak stanie | 🟡 | Zamienić trzy przyciski prologu na dwa gesty w świecie (oderwij pasek, podpisz), usunąć „Idź do biura”, połączyć „Otwórz okienko” i zasłonkę w jedną akcję (patrz 9) |
| Pole „Nie zaglądam, otwieram okienko” w d1 pozwala **pominąć jedyne zaglądanie do rzeczy**, a to w nim leży pierwszy hak (kwit „Lewa czeka. S.H.”) | 🔴 | W d1 zaglądanie jest obowiązkowe (tylko rękawiczka, bez przycisku „Nie zaglądam”); opcja pominięcia dochodzi od d2 |
| „Zacznij zmianę” przy istniejącym zapisie rozpoczyna **od nowa bez potwierdzenia** (`ST=fresh(); prolog()`); „Kontynuuj” jest drugi, ghost, mniejszy | 🔴 | Gdy jest zapis: „Kontynuuj” pierwszy i główny; „Nowa zmiana” zwykły + potwierdzenie w tym samym miejscu (bez modala) |
| Tytuł nie ma menu (tylko 1 przycisk + ⚙). Brak Nowa gra / Wyjście / Dane zapisu / Kredyty | 🟡 | Menu z 3-4 pozycjami (patrz 8) |
| Audio startuje dopiero po kliknięciu (`A.init()` w przycisku): ekran tytułowy jest **niemy**, mimo że muzyka `menu` istnieje | 🟡 | Mikro-podpowiedź „Włącz dźwięk: kliknij gdziekolwiek” + start muzyki po pierwszym kliknięciu/klawiszu; ostrzeżenie o słuchawkach |

#### Hierarchia wizualna
- **Co przyciąga wzrok pierwsze na dostawie:** pomarańczowa belka „Krok 1: kliknij rzecz…” u góry, **nie** rzeczy w skrzyniach. Podpowiedź jest najjaśniejsza na ekranie, a pulsuje bez końca (`stepglow`). To jest odwrócona hierarchia: instrukcja głośniejsza niż świat.
- **Zrzut po „Podpisz i zacznij zmianę”:** tekst samouczka (numerowana lista 1-6) **nakłada się** na nagłówek dnia („DZIEŃ 1 · PON. 9.08 · 23:40”) i jest ucięty pod belką; to ściana tekstu z CD2 8.6 w dodatku z kolizją. Obserwowane w chwili zrzutu (1,8 s po kliknięciu), więc możliwe, że to stan przejścia; nawet wtedy tekst nie powinien pojawiać się dwa razy.
- **Tytuł dnia (hak, CD2 3.8) „Rękawiczki na grobie”** jest drobnym podpisem pod nagłówkiem (ok. 16 px). Najlepsza linijka z hakiem dostaje najmniejszą czcionkę.
- **Oględziny rzeczy:** rękawiczka jest ogromna i świetna (to jest bohater), ale **karta „Wiesz coś, czego nie powinieneś”** ma przycisk „Otwórz okienko” **wciśnięty w środek zdania** („wyrwano ⏎ stronę. [OTWÓRZ OKIENKO]”): tekst zawija się wokół przycisku, przycisk wygląda jak część zdania. Pomarańczowy przerywany krąg na mankiecie jest dobrym wskaźnikiem (uczy, gdzie patrzeć).
- **Kasa:** `$0 · DO SOBOTY: $310` leży na misiu z półki i na pomarańczowej smudze światła; dwa piętra w prawym rogu (⚙ i $).

#### Spójność
| Element | Problem | Rekomendacja |
|---|---|---|
| Przyciski | Trzy style: kartonik-pomarańcz (`pulse`), kartonik-krem (`Zajrzyj`), czarny z ramką („Nie zaglądam…”, „Otwórz okienko”) | Dwa style: główny (kartonik krem, jeden na ekran) i poboczny (czarny z ramką); pomarańcz tylko jako światło/stan |
| Pulsowanie | Prawie każdy przycisk jest `pulse`; gdy wszystko pulsuje, nic nie jest ważne | Pulsuje (raz) tylko główne działanie, tylko do pierwszego użycia danej mechaniki |
| Etykiety `.lab` | 16-17 px w kilku miejscach (karty), 20-26 px w innych | Jedna skala: etykieta 20, tekst karty 28, napisy 30 (≥ 18 px @1080p wymagane CD2 8.4) |
| Język przycisków | Opis czynności („Idź do biura”) vs opis efektu („Otwórz okienko”) | Czasownik + obiekt, jedna konwencja, bez stwierdzeń typu „Podpisz i zacznij zmianę” (dwie czynności) |

#### Dostępność
- **Kontrast:** zmierzone na zrzucie: szary „W SKRZYNI: 6” na czerni ≈ **8,4:1** (OK), nagłówek dnia ≈ **16:1** (OK). Pomarańczowe etykiety na kremie (`#a04f00` na `#EDE6D3`) wychodzą ok. 4,7:1 przy 16-17 px: na granicy, **za małe**.
- **Rozmiar tekstu:** minimum 18 px @1080p jest spełnione dla napisów i przycisków, nie dla etykiet kart i podtytułu dnia.
- **Cele kliknięcia:** przyciski 56-70 px wysokości (OK); kafelki „Zajrzyj” ok. 40 px (na granicy dla dotyku).
- **Ruch:** pulsowanie w nieskończoność i błyski lampy są pod „Mniej efektów”; sprawdzić, czy ta opcja wyłącza także `stepglow` (NIEZWERYFIKOWANE).
- **Klawiatura:** przyciski są natywne (`button`), więc Enter/Space działa; fokus startowy na ekranie nie jest widoczny na zrzutach (NIEZWERYFIKOWANE).

#### Co działa dobrze
- Świat i klimat (linoryt, jedna lampa, deszcz, tramwaj w drzwiach) wyróżniają grę na miniaturze (CD2 9.6).
- Prolog ze słupem i umową **uczy świata fabułą**: ogłoszenie, 40 $ za wizytę, pokój służbowy, pusty „Imię i nazwisko” i nieczytelny podpis; to najlepszy moment startu, bo nic nie tłumaczy, a wszystko zasiewa.
- Przycisk „Zacznij zmianę” stoi **na ławeczce w tle**: diegetyczny, nie lewituje w pustce.
- Oględziny rzeczy: wielka rzecz + okrąg wskazujący szczegół to właściwy język Unpacking.
- Dostawa jako trzy skrzynie (linie 4, 6, 11) jest czytelna w 2 sekundy i pokazuje stan („W SKRZYNI: 6”).

### 7.B Krytyka tego projektu (sekcje 1-6)

| Ryzyko | Waga | Co robię / co do sprawdzenia |
|---|---|---|
| Pasek nitek + plakietka + Notatnik + toast **dokładają** interfejsu, a cel to mniej rozpraszania | 🟡 | Wszystko poza plakietką jest na żądanie; w wizycie gracz widzi dodatkowo tylko plakietkę (1 linia) i glify nitek w pasie górnym. Do sprawdzenia testem 5.4 pkt 5 (czy nowy gracz w ogóle zauważa pasek) |
| Sześć nitek może przytłoczyć | 🟡 | Otwieranie max 1 dziennie (d1-d6), pierwsze 3 dni trzy żywe pytania |
| Glif jako jedyny znacznik: czy 6 glifów da się odróżnić w 32 px w linorycie? | 🟡 | Test odróżnialności (szkic na 32 px, odbitka, test „zasłoń podpis” u 3 osób) przed zamówieniem grafik |
| Współrzędne układu to propozycje na podstawie jednego tła | 🟢 | Reguła R1 jest wiążąca, liczby weryfikuje wątek gry testem kolizji |
| Zasiew Stahla w d3 i zdanie o audycie w d2 zmieniają kanon | 🟡 | Oznaczone do akceptacji (5.3) |
| Wyniki zależą od jednego bota (zrzuty ścieżki startowej), nie od testu z ludźmi | 🟡 | Wpisane w 5.4 pkt 5 |

### 7.C Priorytetowe rekomendacje z krytyki

1. **Odwrócić hierarchię startu:** świat głośniejszy niż instrukcja (belka podpowiedzi cicha, statyczna, w pasie tekstu; rzeczy w skrzyniach i okno są punktem skupienia).
2. **Skrócić drogę do pierwszego gościa do ≤ 4 interakcji i ≤ 60 s** (9), bez utraty prologu, który jest najlepszą częścią.
3. **Zrobić z oględzin rzeczy w d1 obowiązkowy hak** przed pierwszym gościem (kwit „Lewa czeka”), a przycisk akcji ustawić **pod kartą**, nie w tekście.

---

## 8. EKRAN TYTUŁOWY, MENU I USTAWIENIA

### 8.1 Zasady

- **Tytuł jest miejscem, nie plakatem:** napis nie leży na rzeczach (dziś „LOST & FRAUD” przecina okno, tramwaj i lampę). Idzie w czarną dziurę szyby (x 300-1080, y 120-300), gdzie z grafiki nic nie ucierpi.
- **Jedno główne działanie:** gdy jest zapis, głównym jest **KONTYNUUJ**, w innym wypadku **NOWA ZMIANA**. Reszta wtórna, mniejsza.
- **Świat żyje cicho:** deszcz, lampa buczy, raz na ok. 25 s tramwaj przejeżdża w drzwiach (pomarańczowe okna), raz na 30-70 s mignięcie lampy (to już jest, `lampLoop`). Bez ruchu kamery, bez cząsteczek.
- **Dźwięk:** muzyka `menu` + ambient deszczu. Przeglądarka blokuje dźwięk do pierwszego gestu, więc: przy starcie cienka linia na dole „Najlepiej w słuchawkach. Kliknij, żeby włączyć dźwięk.” Pierwszy klik/klawisz uruchamia audio i **nie** wywołuje żadnej akcji (tylko włącza muzykę i znika linijkę).
- **Menu w świecie:** pozycje to kartoniki przypięte na blacie (jak „Zacznij zmianę” na ławeczce), nie pływające przyciski.

### 8.2 Makieta: ekran tytułowy (scena 1620×1080)

```
┌───────────────────────────────────────────────────────────────┐
│                                                  ⚙ (Esc)      │
│            ┌──────────────────────────┐                       │
│            │      LOST & FRAUD        │  <- w czarnej szybie  │
│            │  Nocne biuro rzeczy      │                       │
│            │  znalezionych.           │                       │
│            │  Ktoś puka w szybę.      │                       │
│            └──────────────────────────┘                       │
│                                          [lampa, tramwaj]     │
│                                                               │
│   ┌─────────────────────────────────┐                         │
│   │ KONTYNUUJ                       │  <- główny, kartonik    │
│   │ Dzień 7 · pt. 13.08 · $240      │     krem, fokus         │
│   └─────────────────────────────────┘                         │
│   [ NOWA ZMIANA ]  [ USTAWIENIA ]  [ KREDYTY ]  ( WYJŚCIE )   │
│                                                               │
│   Najlepiej w słuchawkach. Kliknij, żeby włączyć dźwięk.      │
└───────────────────────────────────────────────────────────────┘
```

**Stany:**

| Stan | Co widać |
|---|---|
| Pierwsze uruchomienie (brak zapisu) | Główny: **NOWA ZMIANA** (fokus). Brak „Kontynuuj”. Pod tytułem podtytuł 1 linia |
| Jest zapis | Główny: **KONTYNUUJ** z opisem zapisu (dzień, data, kasa). Poniżej mały rząd: NOWA ZMIANA, USTAWIENIA, KREDYTY |
| Wcześniej ukończona gra | Pod KONTYNUUJ dochodzi „ZAKOŃCZENIA 3/12” (liczba odblokowanych, bez nazw) |
| Wybrano NOWA ZMIANA przy zapisie | Kartonik zmienia się **w miejscu** (bez modala) w: „Zacznąć od nowa? Zapis z dnia 7 zostanie usunięty. [TAK, OD NOWA] [ZOSTAW]” z fokusem na ZOSTAW |
| Wyjście | Tylko w wersji Steam; w przeglądarce ukryte |

**Skróty:** Enter = akcja z fokusu, strzałki ←→↑↓ między pozycjami, Esc = ustawienia, M = wycisz.

### 8.3 Teksty ekranu tytułowego (TEKST W GRZE, `lang/pl.json`)

| Klucz | Tekst |
|---|---|
| `title.name` | LOST & FRAUD |
| `title.sub` | Nocne biuro rzeczy znalezionych. Ktoś puka w szybę. |
| `menu.continue` | KONTYNUUJ |
| `menu.continue.meta` | Dzień {n} · {dzień_tyg}. {data} · ${kasa} |
| `menu.new` | NOWA ZMIANA |
| `menu.new.confirm` | Zacząć od nowa? Zapis z dnia {n} zostanie usunięty. |
| `menu.new.yes` | TAK, OD NOWA |
| `menu.new.no` | ZOSTAW |
| `menu.settings` | USTAWIENIA |
| `menu.credits` | KREDYTY |
| `menu.quit` | WYJŚCIE |
| `menu.endings` | ZAKOŃCZENIA {n}/{m} |
| `title.audio` | Najlepiej w słuchawkach. Kliknij, żeby włączyć dźwięk. |
| `title.loading` | Zapalam lampę… (lampa stopniowo rozjaśnia się od ciemnej do pomarańczowej, bez paska procentów; maks. 3 s) |

**Uwaga:** podtytuł „Tydzień pierwszy” znika (zapowiada mniej niż 25 dni).

### 8.4 Ustawienia (modal L9, dostępny z tytułu i z gry przez Esc)

Panel kremowy na czarnym tle (jak dziś), cztery sekcje w zakładkach: DŹWIĘK / OBRAZ / DOSTĘPNOŚĆ / DANE. Wszystkie opcje działają natychmiast, bez „Zastosuj”.

```
┌──────────── USTAWIENIA ────────────────────────────┐
│ [DŹWIĘK] OBRAZ  DOSTĘPNOŚĆ  DANE                   │
│ Głośność ogólna   ▬▬▬▬▬▬▬▬▬○──  80%                │
│ Muzyka            ▬▬▬▬▬▬○─────  60%                │
│ Ambient (deszcz)  ▬▬▬▬▬▬▬▬○───  75%                │
│ Efekty            ▬▬▬▬▬▬▬▬▬○──  80%                │
│ Głosy postaci     ▬▬▬▬▬▬▬○────  70%                │
│                                      [ ZAMKNIJ ]   │
└────────────────────────────────────────────────────┘
```

| Sekcja | Opcje | Domyślnie | Uwagi |
|---|---|---|---|
| DŹWIĘK | Ogólna, Muzyka, Ambient, Efekty, Głosy (suwaki 0-100%, krok 5, już są: `master/music/amb/sfx/voice`) | 80/60/75/80/70 | próbka dźwięku przy puszczeniu suwaka |
| OBRAZ | Pełny ekran; **Mniej efektów** (błyski lampy, pulsowanie, drżenie); Jasność (0,8-1,2) | wyłączony / 1,0 | „Mniej efektów” wymusza też `prefers-reduced-motion` |
| DOSTĘPNOŚĆ | **Rozmiar tekstu** 100% / 125% / 150% (skaluje napisy i karty, nie scenę); Wysoki kontrast ramek; Pokaż podpowiedzi zawsze (nie znikają po 20 s) | 100% / wył. / wył. | zgodne z CD2 8.5 |
| DANE | Język (PL; angielski wyszarzony: „Wkrótce”); Usuń zapis (z potwierdzeniem w miejscu) | PL | język przez `lang/pl.json` |

**Teksty:** `set.title` USTAWIENIA · `set.sound` DŹWIĘK · `set.image` OBRAZ · `set.access` DOSTĘPNOŚĆ · `set.data` DANE · `set.reduce` Mniej efektów (bez błysków i pulsowania) · `set.textsize` Rozmiar tekstu · `set.hints` Podpowiedzi zawsze widoczne · `set.contrast` Wyraźniejsze ramki · `set.delete` Usuń zapis · `set.delete.confirm` Usunąć zapis z dnia {n}? Nie da się tego cofnąć. · `set.close` ZAMKNIJ.

### 8.5 Pauza w grze (Esc)

Ten sam panel plus trzy działania u dołu: **WRÓĆ**, **MENU GŁÓWNE** (zapis jest automatyczny po każdej wizycie; tekst pod przyciskiem: „Zapisano po ostatniej wizycie: dzień {n}”), **USTAWIENIA**. Pauza zatrzymuje zegar i dźwięk SFX, zostawia deszcz ściszony do 40%.

---

## 9. WEJŚCIE DO GRY: PIERWSZE 60 SEKUND

Cel: **od kliknięcia NOWEJ ZMIANY do pierwszego pukania ≤ 60 s, ≤ 4 interakcje**, a w tym czasie gracz dostaje: miejsce (nocne biuro), rolę (dyżurny bez nazwiska), jedną zasadę (zajrzyj do rzeczy, zanim ktoś zapuka), **pierwszy hak** (kwit „Lewa czeka. S.H.”) i pytanie otwarte KSIĘGA (3). Pierwsza wizyta dalej jak w `data.js` (Thomas Ward).

### 9.1 Oś czasu (propozycja)

| Czas | Ekran / zdarzenie | Gracz robi | Co ma wiedzieć / czuć | Dźwięk |
|---|---|---|---|---|
| 0:00 | Klik NOWA ZMIANA → 0,4 s czerń, lampa gaśnie | — | Zaczyna się | deszcz zostaje, muzyka menu cichnie |
| 0:02 | **Prolog 1: słup** (kartka „POSZUKIWANY DYŻURNY…”, pasek z numerem) | **gest:** chwyta pasek na dole kartki i ściąga w dół (pierwszy gest gry; zamiast przycisku „Oderwij pasek”) | Ktoś szuka człowieka do pracy nocą; ja go oderwałem | `sfx_newspaper`, szarpnięcie, krople |
| 0:08 | Pasek: numer rozmyty deszczem (jak dziś), zdanie „Na pasku jest numer. Deszcz rozlał go tak, że nie da się go odczytać.” | — (auto 1,5 s) | Szczegół, którego nie umiem odczytać = zalążek ciekawości | — |
| 0:11 | **Prolog 2: umowa** (stanowisko „dyżurny”, pole imienia puste, podpis nieczytelny, 40 $ za wizytę, pokój służbowy) | **klik na długopis** („Podpisz”): krótki szkic kreski, pole imienia zostaje puste | Nikt nie zapytał o moje imię. Dziwne, ale potrzebuję roboty | skrobanie długopisu, stuknięcie pieczątki |
| 0:20 | Cięcie do biura, **karta dnia**: „DZIEŃ 1 · PON. 9.08 · 23:40” i tytuł-hak **„Rękawiczki na grobie”** (28 px, nie 16) | — (auto 2 s) | Zmiana trwa 23:40-6:00; dziś jest coś o rękawiczkach | tramwaj, zegar |
| 0:24 | **Dostawa:** dwie rzeczy w skrzyniach (rękawiczka, koperta). Jedna podpowiedź w pasie tekstu: „Tramwaje zostawiają rzeczy w skrzyniach. Zajrzyj do jednej, zanim ktoś zapuka.” | klik **ZAJRZYJ** przy rękawiczce (w d1 jedyna możliwa; „Nie zaglądam” ukryte) | Rzeczy mają wnętrza; mogę coś znaleźć | szelest, drewno skrzyni |
| 0:32 | **Oględziny rękawiczki:** duża rzecz, przerywany krąg na mankiecie | klik w krąg (jak dziś) | Szukam szczegółu | zszywane nici, szmer |
| 0:40 | **Pierwszy hak:** karta „Wiesz coś, czego nie powinieneś.” + tekst kwitu; **sygnał odkrycia** (3.5), zapala się glif KSIĘGA w pasie górnym; Notatnik dostaje wpis | czyta (≈ 8 s), klik **DALEJ** pod kartą (nie w tekście) | Ktoś wyrwał stronę z księgi i zostawił tu ślad. **Chcę wiedzieć, kto** | `sfx_trace_pin`, ściszenie ambientu 300 ms |
| 0:52 | Zasłonka w okienku zasunięta; w pasie tekstu: „Ktoś puka w szybę.” | klik **w zasłonkę** (hotspot) zamiast dwóch przycisków „Otwórz okienko”/„Odsuń zasłonkę” | Teraz zacznie się ktoś prawdziwy | pukanie 3×, dzwonek |
| 0:58 | **Pierwszy gość:** Thomas Ward, 71, wdowiec, pastylka `NOWY`; pierwsza kwestia ≤ 300 znaków: kto, co zgubił, dlaczego dziś (CD2 5.1) — o **tej samej** rękawiczce, którą gracz ma za plecami | wybiera pytanie (3 pytania) | Mam rzecz, którą on opisze, a ja wiem o niej więcej niż on | kroki, drzwi, deszcz głośniej |

Odwrócona ironia („gracz już widział to, czego szuka gość”) jest głównym mechanizmem haka: pierwsza wizyta zaczyna się od przewagi wiedzy, a ciekawość nie dotyczy tego, *czy* rękawiczka jest w skrzyni, tylko tego, *co ten człowiek wie o kwicie*.

### 9.2 Zasady uczone w pierwszych 60 s (tylko trzy)

1. **Rzeczy mają wnętrza** (zaglądanie, 0:24-0:40).
2. **Ktoś zapuka i opisze zgubę** (0:52-0:58).
3. **Coś zapisuje się samo** (sygnał odkrycia, glif w pasie górnym; Notatnik dochodzi dopiero po 1. gościu, patrz 4.1).

Pozostałe zasady (szukanie w skrzyniach, decyzje, kasa, soboty) wchodzą po jednej w kolejnych godzinach (CD2 6.5). **Zero modala z regułami.** Dotychczasowa lista „1-6” z `tutorial()` zostaje usunięta; jej treść rozkładamy na podpowiedzi pasa tekstu, po jednej na fazę (4.1).

### 9.3 Teksty prologu i wejścia (TEKST W GRZE)

Zachowujemy istniejące, bo działają (kropki: tylko zmiany).

| Klucz | Tekst | Zmiana |
|---|---|---|
| `pr1.lab` | SŁUP PRZY ZAJEZDNI · 22:50 | bez zmian |
| `pr1.txt` | POSZUKIWANY DYŻURNY. Nocne biuro rzeczy znalezionych, zmiana 23:40-6:00. 40 $ za wizytę. Pokój służbowy w cenie. Zgłosić się do Zarządu Nieruchomości Cooper. | bez zmian |
| `pr1.strip` | (gest) Ściągnij pasek | było: „Oderwij pasek z numerem” (przycisk) |
| `pr1.num` | Na pasku jest numer. Deszcz rozlał go tak, że nie da się go odczytać. | bez zmian |
| `pr1.step` | Pociągnij pasek w dół. | było: „Kliknij „Oderwij pasek”” |
| `pr2.lab` | UMOWA O PRACĘ NOCNĄ · ZARZĄD NIERUCHOMOŚCI COOPER | bez zmian |
| `pr2.btn` | (klik w długopis) Podpisz | było: „Podpisz i zacznij zmianę” |
| `pr2.step` | Podpisz. Pole na imię zostaje puste. | było: „Kliknij, żeby zacząć pierwszą noc” |
| `day1.title` | Rękawiczki na grobie | bez zmian, ale 28 px |
| `hint.deliver.d1` | Tramwaje zostawiają rzeczy w skrzyniach. Zajrzyj do jednej, zanim ktoś zapuka. | zastępuje listę 1-6 |
| `inspect.done` | DALEJ | było: „Otwórz okienko” w tekście karty |
| `window.knock` | Ktoś puka w szybę. | bez zmian |
| `hint.curtain` | Odsuń zasłonkę. | było: „Krok 2: kliknij „Odsuń zasłonkę”” |

**Uwaga o spoilerach:** słowo „dyżurny” w ogłoszeniu i umowie jest kanonem prologu (v2 §6, d1) i **zostaje**; reguła 7 w 5.4 (spoiler-grep) wyklucza z testu pola prologu i karty pracownika.

### 9.4 Przycisk „Dalej” pod kartą (konkret do wdrożenia)

Obecnie przycisk „Otwórz okienko” jest wstawiany **inline w treść** karty oględzin i zawija się razem ze zdaniem (zrzut 7). Zmiana: przycisk jako osobny element **pod** kartą, wyrównany do prawej, stały rozmiar 64 px, ten sam styl głównego przycisku z 7.A.

### 9.5 Kryteria wejścia („gotowe”)

1. Bot Playwright: od NOWA ZMIANA do pierwszej kwestii gościa ≤ **4 interakcje** i ≤ **60 s** (przy czytaniu bez pośpiechu ≈ 20 s kart, reszta animacje).
2. Gracz, który nie zna gry, po pierwszym gościu potrafi odpowiedzieć na: „Kim jesteś w tej grze?” (dyżurnym w nocnym biurze) i „Co jest nie tak?” (brakuje strony w księdze, ktoś zostawił kwit).
3. W 9.1 nie ma modala z regułami, nie ma elementu pulsującego w nieskończoność, nie ma toastu na okienku.
4. Opcja „Mniej efektów” nie zmienia treści i kolejności zdarzeń.

---

## 10. DODATKOWA LISTA ZMIAN DLA WĄTKU GRY (tytuł, menu, wejście)

Kontynuacja numeracji priorytetów z 5.1 (P0 = bez tego nie wydajemy).

| # | Pr. | Rozm. | Zmiana | Element UI / konkret |
|---|---|---|---|---|
| E1 | P0 | S | **Zapis przy NOWEJ ZMIANIE:** potwierdzenie w miejscu zamiast cichego nadpisania | `menu.new.confirm`, `menu.new.yes/no`; fokus startowy na `ZOSTAW` |
| E2 | P0 | S | **W d1 oględziny są obowiązkowe**, tylko rękawiczka, bez „Nie zaglądam”; od d2 pominięcie dozwolone | pole `skip` ukryte w d1 |
| E3 | P0 | S | **Przycisk „Dalej” pod kartą oględzin**, nie w tekście | 9.4 |
| E4 | P0 | S | **Usunąć modal `tutorial()` z 6-punktową listą**; podpowiedzi fazowe w pasie tekstu | `hint.deliver.d1` itd. |
| E5 | P0 | M | **Ekran tytułowy:** tytuł w czarnej szybie, menu z kartonikami, stany z 8.2, fokus i klawiatura | 8.2-8.3 |
| E6 | P1 | M | **Ustawienia w 4 zakładkach** (dźwięk/obraz/dostępność/dane), rozmiar tekstu 100/125/150% | 8.4 |
| E7 | P1 | S | **Audio przed pierwszym gestem:** linijka „Najlepiej w słuchawkach…”, pierwszy klik uruchamia muzykę menu bez akcji | `title.audio` |
| E8 | P1 | M | **Prolog jako gesty:** ściągnięcie paska, klik w długopis; usunąć „Idź do biura” | 9.1 (0:02-0:20) |
| E9 | P1 | S | **Zasłonka jako hotspot** zamiast dwóch przycisków (Otwórz okienko / Odsuń zasłonkę) | 9.1 (0:52) |
| E10 | P1 | S | **Tytuł dnia 28 px** (dziś ok. 16 px): „Rękawiczki na grobie” jako hak | `day1.title` |
| E11 | P1 | S | **Zlikwidować pulsowanie ciągłe** na przyciskach (`pulse` → jednorazowy oddech przy pierwszym pokazaniu) | R3 |
| E12 | P1 | S | **Dwa style przycisków** (główny / poboczny) zamiast trzech | 7.A Spójność |
| E13 | P2 | M | **Tramwaj w drzwiach co ok. 25 s** na tytule i w pierwszej scenie biura | 8.1 |
| E14 | P2 | S | **Pauza z zapisem informacyjnym** („Zapisano po ostatniej wizycie”) | 8.5 |
| E15 | P2 | S | **ZAKOŃCZENIA n/m** pod KONTYNUUJ po pierwszym ukończeniu gry | 8.2 |

### 10.1 Testy akceptacji (dopisek do 5.4)

9. **Ścieżka startowa:** skrypt Playwright liczy interakcje i czas od NOWEJ ZMIANY do pierwszej kwestii (cel ≤ 4 / ≤ 60 s); zrzuty każdego kroku w `docs/ux/start/`.
10. **Zapis:** z zapisem na dniu 7 klik NOWA ZMIANA nie kasuje zapisu, dopóki gracz nie potwierdzi.
11. **Tytuł:** tytuł i menu nie przecinają się z tramwajem, lampą ani półkami (kolizja prostokątów), kontrast ≥ 4,5:1, pełna obsługa klawiaturą.
12. **d1:** nie da się pominąć oględzin rękawiczki; kwit „Lewa czeka. S.H.” zawsze trafia do Notatnika przed pierwszym gościem.
