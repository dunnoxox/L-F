# Okienko e1: raport balansu i narracji, dni 1-10

Źródła: `/tmp/qa/e1/okienko_e1/data.js` (13 gości, 130 pytań, 34 decyzje), `game.js`, obsada/kalendarz, walidator (`validate_dialogs.py`: 5 ostrzeżeń "pan/pani", 0 błędów schematu). Liczby pochodzą z skryptów node (`/tmp/qa/an2.js`, `sim.js`, `crate.js`) i jednego testu układu w headless Chrome. Gdzie używam symulacji przypadkowego klikania, jest to oznaczone. Pliki gry nie były edytowane.

## 0. Wniosek główny

Gra ma bardzo dobrą warstwę tekstową i prawie żadnej warstwy mechanicznej. Cztery rzeczy, które mają robić z niej grę, nie mają żadnego skutku:

1. **Decyzja nie zależy od niczego.** `decide()` czyta wyłącznie `g.decyzje`. Ani `ST.secrets`, ani to, czy gracz usłyszał kłamstwo, nie zmienia ani opcji, ani reakcji, ani echa.
2. **Pieniądze to licznik kosmetyczny.** `ST.money += 40` za każdą decyzję, niezależnie od wyboru. Saldo nigdy nie spada poniżej 170.
3. **Szukanie nie ma stawki.** Brak limitu czasu, brak kary za złe kliknięcie (tylko toast "To nie to."), brak limitu przełączania skrzyń.
4. **Burza jest niewidoczna.** Gracz widzi już przestawione skrzynie, nie ma punktu odniesienia, a w dialogach dni 3 i 8 żadna linia nie pada.

## 1. Rozmowy: pytania, miny, kłamstwa, sekrety

### 1.1 Struktura
- Każdy gość ma 3 tury. T1 i T3 mają po 3 pytania, T2 ma 4 (czwarte to pytanie z sekretem). Każda tura ma dokładnie po jednym pytaniu tonu `uprzejme`, `rzeczowe`, `niewygodne` (plus sekretne `niewygodne` w T2). **Wybór pytania to więc zawsze wybór tonu.**
- W `questions()` każdy klik zużywa całą turę (`ST.turn++`). Gracz zadaje 3 pytania z ok. 10 na gościa (30%), czyli widzi około jednej trzeciej treści.
- Sekret jest w T2 u wszystkich 13 gości (jeden `wnetrze` na gościa). Odpowiedź na pytanie sekretne to zawsze `emocja`.

### 1.2 Miny i tony (130 pytań)

| ton \ mina | mowi | neutralna | emocja | klamie | razem | % kłamstw |
|---|---|---|---|---|---|---|
| uprzejme | 31 | 8 | 0 | **0** | 39 | 0% |
| rzeczowe | 18 | 18 | 0 | 3 | 39 | 7,7% |
| niewygodne | 15 | 1 | 28 | 8 | 52 | 15,4% |

Wniosek: ton jest wskazówką. Pytania uprzejme nigdy nie kłamią. Pytania niewygodne kłamią dwa razy częściej niż rzeczowe. Wszystkie `emocja` to `niewygodne` (28 z 28). Gracz, który zawsze wybiera `niewygodne`, trafia na kłamstwo u 7 z 13 gości (54%), ten, który zawsze wybiera `uprzejme`, na żadne.

### 1.3 Gość po gościu

Kolumny `P(klam)` to szansa usłyszenia kłamstwa przy losowym wyborze pytań (1 z 3 w każdej turze), bez sekretu i z sekretem. "Zastąpione" to pytanie, które sekret wypycha z T2 (`qlist`: pytanie z sekretem zastępuje ostatnie pytanie o tym samym tonie).

| dzień | gość | pytań T1/T2/T3 | min mowi/neutr/emocja/klamie | kłamstwa (tura:ton) | zastąpione przez sekret | P(klam) bez sekretu | P(klam) z sekretem |
|---|---|---|---|---|---|---|---|
| 1 | wdowiec | 3/4/3 | 4/2/3/1 | T2:niewyg. | **samo kłamstwo** | 0,33 | **0** |
| 1 | praczka | 3/4/3 | 6/3/1/0 | brak | "Koperta jest na pani nazwisko?" | 0 | 0 |
| 2 | chłopak | 3/4/3 | 5/0/4/1 | T2:rzecz. | pytanie o June (emocja) | 0,33 | 0,33 |
| 2 | kucharz | 3/4/3 | 6/3/1/0 | brak | "Ben pana tu przysłał?" | 0 | 0 |
| 3 | mąż i siostra | 3/4/3 | 6/0/3/1 | T1:niewyg. | pytanie o odbiór razem | 0,33 | 0,33 |
| 3 | mechaniczka | 3/4/3 | 6/2/2/0 | brak | "Ktoś inny będzie go szukał?" | 0 | 0 |
| 4 | dama | 3/4/3 | 6/3/1/0 | brak (zatajanie) | "Za którą usługę pani płaci?" | 0 | 0 |
| 5 | inspektor | 3/4/3 | 6/2/1/1 | T1:niewyg. | "Kto odpowiada za brak strony?" | 0,33 | 0,33 |
| 6 | Ada | 3/4/3 | 4/3/2/1 | T1:niewyg. | "Skąd znasz tę panią?" | 0,33 | 0,33 |
| 7 | Evan | 3/4/3 | 4/2/3/1 | T2:rzecz. | "Skąd to etui u pana?" | 0,33 | 0,33 |
| 8 | Lena | 3/4/3 | 4/2/3/1 | T2:niewyg. | **samo kłamstwo** | 0,33 | **0** |
| 9 | dama (Iris) | 3/4/3 | 4/2/2/2 | T2:rzecz. + T2:niewyg. | **jedno z dwóch kłamstw** | 0,67 | 0,33 |
| 10 | Vera | 3/4/3 | 3/3/2/2 | T1:niewyg. + T2:niewyg. | **jedno z dwóch kłamstw** | 0,56 | 0,33 |

Łącznie 11 kłamliwych odpowiedzi na 130 pytań (8,5%).

### 1.4 Rozkład kłamstw (cel ok. 30%)

- **Goście, którzy kłamią: 9 z 13 (69%).** To 2,3 razy więcej niż cel. Z "zatajającą" damą z dnia 4 jest 10 z 13 (77%).
- **Dni z co najmniej jednym kłamcą: 9 z 10.** Od dnia 5 do 10 każdy gość kłamie (6 z 6). Jedyny dzień bez kłamstwa to dzień 4.
- **Wzór jest w pełni przewidywalny:**
  - W dniach 1-3 pierwszy gość kłamie (wdowiec, chłopak, mąż i siostra), a drugi nigdy (praczka, kucharz, mechaniczka). To 3 z 3 par.
  - Od dnia 5 gość kłamie zawsze.
  - Liczba kłamstw rośnie: 1,1,1,0,1,1,1,1,2,2.
  - Wszyscy "uczciwi" to drugi gość dnia lub dzień 4.
  - Kłamstwo jest zawsze w T1 lub T2, nigdy w T3.
- **Doświadczone** kłamstwa (przy losowych wyborach) wychodzą ok. **27%** rozmów (3,54 / 13), czyli prawie dokładnie cel. To przypadek wynikający z tego, że gracz widzi tylko 1/3 pytań. Z sekretem spada do 18% (2,31 / 13). Przy strategii "zawsze niewygodne" rośnie do 54%.
- Rekomendacja: kłamie 4 z 13 gości (ok. 30%) plus 2-3 zatajające (zmiana `klamie` na `neutralna` z uchylaniem się w treści). Rozmieścić kłamstwa także w T3 i u gości drugiego w dniu.

### 1.5 Wykrywalność kłamstwa

- Kłamstwo jest **w pełni wykrywalne bez sekretu**, jeśli gracz zada to pytanie. Sygnał to mina `klamie` (twarz), `A.sting('klamstwo')` i muzyka `tension` przez 9 s. Nie wymaga to żadnej umiejętności ani porównania zeznań.
- Kłamstwo jest **niewykrywalne**, gdy gracz zadał inne pytanie. Wtedy nie ma żadnego śladu (67% przypadków na kłamstwo).
- **Sekret nie służy do wykrywania kłamstw.** Sekret nie ujawnia, że ktoś kłamał, tylko daje dodatkowe pytanie `emocja`.
- **Kolizja sekretu z kłamstwem:** u wdowca i Leny (a częściowo u Iris i Very) pytanie sekretne wypycha dokładnie pytanie z kłamstwem. Gracz, który zajrzał do rzeczy, nigdy nie usłyszy kłamstwa, bo T2 ma jedną turę. Nagradzane jest zatem nieprzeglądanie, wbrew intencji.
- Brak twarzy w assetach (**5 z 13 gości**: praczka, kucharz, mechaniczka, Ada, Vera) powoduje, że `setFace` wypisuje na ekranie dosłownie tekst miny, np. `klamie` (Ada i Vera to kłamcy). To spoiler i placeholder w jednym.

### 1.5a Czy sekret zmienia odpowiedź i czy da się go przegapić

- **Zmienia odpowiedź:** tak, w tej jednej turze (T2). Odpowiedź ujawnia fakt ze środka rzeczy. Nie zmienia nic poza tym: ani decyzji, ani echa, ani pieniędzy.
- **Można go przegapić z losu, nie z braku wiedzy.** Gracz ma jedno zajrzenie na dzień (`ST.inspected`) i robi je **przed** wejściem gościa. Skrzynie pokazują tylko sprite, bez nazw (`T.look` = "Zajrzyj"), więc nie wie, która rzecz należy do kogo.
  - Dni 1-3: 3 rzeczy (2 gości + dodatek `zwykła rzecz`). Szansa na sekret któregoś gościa w ten dzień to 2/3, ale tylko jednego (po 1/3 na gościa).
  - Dni 4-10: 2 rzeczy (gość + dodatek). **Rzut monetą 50/50.**
  - Oczekiwana liczba sekretów przy losowych wyborach: 2,0 (dni 1-3) + 3,5 (dni 4-10) = **5,5 z 13 gości (42%)**.
  - Dodatek jest przypadkowy z 77 sprite'ów (te same, co rzeczy gości), więc gracz bez wiedzy z poprzedniej gry nie ma jak wnioskować. Przy powtórnym podejściu wie wszystko, bo seed domyślny jest stały (patrz 3.4).
- Zajrzenie do dodatku daje tekst "Zwykła rzecz. Czasem parasol jest po prostu parasolem." i zużywa jedyną szansę.

## 2. Decyzje

### 2.1 Opcje, zysk, strata, echo

Skróty: `W` wydaj, `O` odmów, `Z` zatrzymaj, `D` zadzwoń. W nawiasie `+N` to `za_dni`, znak to moja ocena tonu echa (`+` dobry, `0` neutralny, `-` zły). Zysk i strata to tylko tekst, nie zmieniają stanu gry.

| gość | opcja (echo) | ocena | dominacja |
|---|---|---|---|
| wdowiec (d1) | W(+2) + zgoda córki, obie rękawiczki, O(+2) 0 rodzina przyjdzie razem | W lekko lepsza | brak, obie ok |
| praczka (d1) | W(+1) + wypłata, O(+2) - kurier, 4 dol. mniej | **W dominuje** (potwierdza ją sekret Iris) | tak |
| chłopak (d2) | W(+2) + zwrot przyjęty, O(+2) - zwrot odrzucony, lombard | **W dominuje** (sekret: pierścionek wraca do sklepu) | tak |
| kucharz (d2) | W(+1) +, O(+1) 0 | W lekko lepsza | prawie |
| mąż i siostra (d3) | W(+2) +, Z(+2) +, D(+2) - gazeta "całe miasto szuka Mai" | **D najgorsza zawsze** | D zdominowana |
| mechaniczka (d3) | W(+1) +, Z(+1) - zaspał o 7 min | W dominuje | tak |
| dama (d4) | Z(+1) 0 (+ "20 dol." tylko w tekście), O(+1) 0, D(+2) 0 | brak, ale to jedyny dylemat moralny dnia 4 i **nie ma żadnego skutku mechanicznego** | nie |
| inspektor (d5) | W(+2) + rozliczenie zatwierdzone, O(+1) - wypłata odłożona (**nie wdrożone**), D(+3) 0/- drugi podpis (**nie wdrożone**) | **W dominuje** | tak |
| Ada (d6) | W(+2) + (odmawia cukierka), Z(+2) - Ada zostawia rzeczy pod drzwiami, O(+1) - puszka znika | W dominuje | tak |
| Evan (d7) | W(+2) 0, Z(+2) + (list), O(+1) - szuka u Leny | Z (jasna granica) wg obsady | nie |
| Lena (d8) | W(+2) 0, Z(+3) - "zatrzymał to, co nie jest pańskie", O(+1) 0 | Z karana, ale jej echo wypada po d10 | nie |
| dama/Iris (d9) | W(+2) + (koperta 30 dol., tylko tekst), Z(+2) -, D(+3) - | W najlepsza, ale **wszystkie 3 echa wypadają po d10** | |
| Vera (d10) | W(+2), Z(+3), O(+1) | brak, **wszystkie 3 echa po d10** | |

### 2.2 Czy jest "poprawna" decyzja

- **Wydaj jest opcją domyślną:** oferowana u 12 z 13 gości (brak tylko w dniu 4), odmów 10, zatrzymaj 8, zadzwoń 4.
- **Wydaj ma najlepsze lub równe echo u 9 z 12 gości.** Zadzwoń ma najgorsze lub neutralne echo u 4 z 4. To wzorzec, który gracz zauważy po dniu 3: "wydaj, chyba że rzecz jest sporna; nigdy dyżurny".
- Dylematy faktycznie wartościowe to d3, d4, d7, d8. W pozostałych jedna opcja dominuje.
- **Sekret nie wchodzi do wyboru.** U praczki i chłopaka sekret mówi, że wydanie jest właściwe, ale gracz bez sekretu ma identyczną i równie opłacalną opcję. U wdowca i Leny sekret "ukrywa" kłamstwo (patrz 1.5).
- Reakcje `reakcja` są stałe i nie nawiązują do tego, co gracz wiedział.

### 2.3 Ekonomia w kodzie

- `finish()` w `decide()`: `ST.money += 40` bez względu na wybór. W grze nie ma żadnego innego przychodu. Brak wywołania `T.pay` (klucz "Wypłata" jest w LANG, ale nieużywany).
- Czynsz 150 w `saturday()` (po dniach 5 i 10). Ulepszenia: lampa 60, drzwi 80, regał 70. Jedno na sobotę (po zakupie wszystkie przyciski są `disabled`).
- Saldo jest widoczne tylko w "Świt" (`$` + liczba, bez etykiety) i w sobotę.
- **Obietnice pieniężne w danych nie są wdrożone:** d4 Z "dostajesz 20 dolarów", d9 W "kopertę z 30 dolarami", d5 O "wypłatę odłożono", d1 praczka "4 dol. za tramwaj". Gra zawsze daje 40.

### 2.4 Symulacja 10 dni

Decyzji jest 13 (2+2+2+1+1+1+1+1+1+1), więc przychód to 13 × 40 = **520 dol.** Wydatki obowiązkowe: 2 × 150 = 300. Wynik netto bez ulepszeń: **+220**.

| moment | saldo |
|---|---|
| po dniu 5, przed czynszem | 8 × 40 = 320 |
| po czynszu (dzień 5) | **170** (minimum w całej grze) |
| po dniu 10, przed czynszem | 170 − ulepszenie1 + 200 |
| po czynszu (dzień 10), bez ulepszeń | 220 |

| para ulepszeń (po jednym w obu sobotach) | koszt | saldo końcowe |
|---|---|---|
| lampa + drzwi | 140 | 80 |
| lampa + regał | 130 | 90 |
| drzwi + regał | 150 | 70 |
| brak | 0 | 220 |

Wnioski:
- **Saldo nigdy nie jest ujemne** (min. 170). Każde ulepszenie jest stać już w pierwszą sobotę. Wybór ograniczają sloty ("jedno na sobotę"), a nie pieniądze.
- Pieniądze nie mają żadnej konsekwencji: brak ujemnego salda, brak zadłużenia, brak końca gry, brak warunków zależnych od sumy. Końcowe saldo 70-220 jest wyświetlane i niczemu nie służy.
- Ulepszenia: **regał** jest jedynym o skutku mechanicznym (12 na 7 sprite'ów w skrzyni, `slice(0,7)`), dotyczy jednak wyłącznie dni 6-10 (5 szukań), bo kupuje się go najwcześniej w dniu 5. **Lampa** (przestaje mrugać) i **drzwi** (cichszy deszcz) to czysta atmosfera. **Zakup w dniu 10 jest martwy:** po nim jest tylko ekran końca dema.
- Regał dominuje mechanicznie. Wybór lampa/drzwi to wybór klimatu. To akceptowalne, ale dziś kosztuje zero i nie ma co poświęcać.

## 3. Trudność dni 1-10

### 3.1 Krzywa

Znaki liczone dla losowego wyboru pytań (suma średnich odpowiedzi + `wejscie`).

| dzień | gości | znaków do czytania | decyzje (opcje) | szukań (skrzynia 13/8 sprite'ów, 3 zakładki) | burza | zajrzenie |
|---|---|---|---|---|---|---|
| 1 | 2 | 478 | 2+2 | 2 | - | 1/3 rzeczy |
| 2 | 2 | 468 | 2+2 | 2 | - | 1/3 |
| 3 | 2 | **646** | 3+2 | 2 | +1/+2 | 1/3 |
| 4 | 1 | 316 | 3 | 1 | - | 1/2 |
| 5 | 1 | 355 | 3 | 1 | - | 1/2 |
| 6 | 1 | 311 | 3 | 1 | - | 1/2 |
| 7 | 1 | 320 | 3 | 1 | - | 1/2 |
| 8 | 1 | 321 | 3 | 1 | +1/+2 | 1/2 |
| 9 | 1 | 309 | 3 | 1 | - | 1/2 |
| 10 | 1 | 296 | 3 | 1 | - | 1/2 |

- **Krzywa jest odwrócona:** szczyt jest w dniu 3 (2 gości, 646 znaków, burza, para rozmówców w jednym oknie), potem obciążenie spada o połowę i trzyma płasko do dnia 10. Rośnie tylko liczba opcji decyzji (2 do 3) i liczba kłamstw (do 2), czyli złożoność tekstowa, nie praca gracza.
- Długość rozmów: średnia odpowiedź 49-88 znaków (max 445 znaków łącznie w d3). Wypisywanie 16 ms/znak daje ok. 1 s na odpowiedź, czyli rozmowa to ok. 4-6 s tekstu plus czytanie. Cała gra to szacunkowo 20-25 minut.
- Praca fizyczna to jedyne "szukanie" (poniżej).

### 3.2 Szukanie w skrzyni

- Kod `pile()`: 3 zakładki (linie 4, 6, 11). Dla każdej `FILL.slice().sort(...).slice(0, regał?7:12)` plus cel `unshift` w poprawnej linii (cel ma więc 13 lub 8 sprite'ów). Cel ma `zIndex` 1, czyli **leży na samym dole stosu**. Pozycja celu: lewo 200-700, góra 250-430 (środek pola 900×700). Rzeczy można przeciągać.
- Symulacja Monte Carlo (300 ziaren × 13 gości, ok. 3900 układów, przybliżone położenia):

| wariant | średnie przykrycie celu | mediana | P90 | cel przykryty >80% |
|---|---|---|---|---|
| 12 + cel | 58% | 61% | 95% | **27%** |
| 7 + cel (regał) | 39% | 37% | 83% | 12% |

  Szukanie to więc faktyczne odsłanianie (przeciąganie przykrywających rzeczy), ale bez żadnej presji.
- **Stawka: zero.**
  - Brak timera.
  - Zły klik: `msg(T.wrong)`, toast na 1 s. Klucz `T.wrong_line` ("Tu tej rzeczy nie ma. Spróbuj inną linię.") jest zdefiniowany, ale nigdzie nie użyty.
  - Brak limitu przełączania zakładek, brak kosztu czasu, brak wpływu na rozmowę, pieniądze czy echo.
  - Cel jest widoczny w skrzyni już na ekranie dostawy (ten sam sprite), więc linia to tylko pamięć obrazu, nie wiedza z dialogu.
- **Linie prawie nie padają w dialogach.** Poszukiwana linia pojawia się wprost tylko w jednym opcjonalnym pytaniu: wdowiec ("Która linia?" = czwórka), plus "z szóstki" w `wejscie` damy (dzień 4). Pozostałe wystąpienia ("przy szóstce", "linia szósta") to przystanek lub adres, nie skrzynia. Dla większości gości linia dialogowa nie mówi nic o skrzyni.

### 3.3 Burza (dni 3 i 8)

- `ST.storm[day] = 1 + (rng < .5 ? 1 : 0)`, a `effLine = LINES[(idx + s) % 3]` przesuwa wszystkie rzeczy o jedno lub dwa miejsca w cyklu [4, 6, 11] (rozkład 296:304 na 600 ziaren, czyli 50:50).
- **Informacja dla gracza:** tak, jest. `T.storm` ("Grom zrzucił skrzynie z półki: rzeczy leżą w innych skrzyniach niż zapisano") plus grzmot i sting.
- **Czytelność:** tekst jest zrozumiały, ale nie ma co do czego go odnieść ("zapisano" w czym?). Gracz nigdy nie widzi stanu "przed", bo ekran dostawy od razu pokazuje stan po przesunięciu.
- **Uczciwość:** w pełni uczciwa, bo widoczne skrzynie są prawdą. Ale burza **nie zmienia nic**: w dniach 3 i 8 żaden dialog nie podaje linii (`d3_maz_i_siostra`, `d3_mechaniczka`, `d8_lena`). Czyli to fabularny napis bez skutku. Przesunięcie nie jest też zapowiedziane w skrzyni (zakładka domyślna to zawsze "4").
- Domyślny seed = 1, więc **obie burze mają przesunięcie +2** w każdej rozgrywce (d3: 11 do 6, 6 do 4; d8: 4 do 11).

### 3.4 Inne problemy trudności i uczciwości

- **Seed domyślny jest stały (`SEED=1`):** ten sam dodatek dnia, te same układy stosów, te same burze w każdej rozgrywce. Replay jest identyczny, nauczone wiadomości (które rzeczy są gości) działają za drugim razem.
- **Identyczny sprite-wabik:** `FILL` zawiera 10 sprite'ów rzeczy gości (plecak, termos, telefon, klucze, puszka, paczka, teczka, piórnik, pudełko blaszane, torba narzędziowa). Szansa, że w skrzyni z celem leży wabik identyczny z celem: **8,8%** na gościa (4,8% z regałem). W domyślnym seedzie dotyczy to **d6 Ady i d8 Leny** (cel i wabik wyglądają tak samo, gracz zgaduje bez kary). Szansa, że identyczny sprite leży w którejkolwiek skrzyni, ok. 40% (25% z regałem), np. d6 ma go w dwóch liniach.
- **Przycięcie:** `.crate` ma `max-height:640; overflow:hidden`. Test w headless Chrome (dzień 7, seed 1: klucze + dodatek w skrzyni 11): przycisk "Zajrzyj" drugiej rzeczy jest przycięty (677/640). Dotyczy tylko dodatku, bo rzeczy gości są pierwsze, a goście dni 1-3 nigdy nie dzielą skrzyni, więc w praktyce to P3. Szacunkowo 5,8% skrzyń ma zawartość powyżej 520 px.

## 4. Narracja

### 4.1 Imiona i ciągłość (wg obsady)

| sprawa | ocena |
|---|---|
| Maya, Lena, Evan | zgodne z obsadą. Mąż d3 i d7 nigdy nie jest nazwany w grze przed d8 ("Evan nie. Przysięgam" w ustach Leny). Evan pojawia się z imienia w `zysk` d7. |
| **Iris użyta dla dwóch osób** | d1: Iris Bell (pracownica pralni, 7 wystąpień). d9: Iris (dama z kopertą, wg obsady). Kolizja imion. |
| **Victor** | inspektor z d5 nie przedstawia się. "Victor" pada jedyny raz w `zysk` d9 ("dowód dla Victora"), bez wprowadzenia. |
| Noah, Nora, Leo, Sam, Elias | w dniach 1-10 nie występują (Noah d5, Leo d6, Nora d8 z kalendarza nie ma). Elias miał pytać codziennie w kolejce (1-25), w grze go brak, czyli bieg gag nie istnieje. "Sam" pada tylko w d10 T3. |
| Kalendarz vs dane | d2: kalendarz ma szalik Mai, dane plecak (brak szalika i brak nitki Mai w d2). d5: kalendarz portfel, dane teczka inspektora. d1: dzień 1 miał "Elias w kolejce". |
| Ciągłość gałęzi | d5 inspektor mówi "Gazetę z Mają na pierwszej stronie" i "Telefon Mai idzie do wykazu" **niezależnie od decyzji z d3** (gazeta jest tylko echem opcji D). Wykaz zawiera "prawą rękawiczkę Thomasa Warda" niezależnie od d1. d6 sekret mówi, że kasetkę "w czwartek zostawiła u Ciebie dama", a to prawda tylko po opcji Z w d4 (przy O i D kasetki nie było). |
| Rejestr | d3 i d8: Lena jest w d3 "Pani Leno", w d8 mówi się do niej "ty" (zmiana formy, może zamierzona). |
| Wspólny motyw | wykaz, księga, wyrwana strona, szuflada i klucz dobrze spinają dni 1, 5, 10. Wątek Ada i dama oraz Maya i Lena jest spójny. |

### 4.2 Echa

- 34 echa: `list` 25, `gosc` 8, `gazeta` 1. **Pole `forma` jest ignorowane:** `evening()` wypisuje każde echo jako list ("Poczta na ladzie"). 8 ech `gosc` to wypowiedzi gościa przy okienku ("Po termos, Ben. ...", "Po budzik, Lou Holt. ...") wyświetlone jak list, bez nagłówka i bez sceny.
- **Echa po dniu 10:** 7 z 34 (21%) ma `due > 10`: d8 zatrzymaj (+3), d9 wszystkie trzy (+2,+2,+3), d10 wszystkie trzy (+1,+2,+3, ale d10 odmów +1 wypada na 11). Wieczorem dnia 10 `evening()` ich nie pokaże. **Nie znikają całkiem:** `week()` wypisuje `left.slice(0,3)` na ekranie końca dema (maks. 3, a w tej grze zawsze ≤3, bo tylko d8-d10 mają echa po 10). Tam pojawiają się bez nagłówka dni, z etykietą `rzecz · akcja`.
  - Treść brzmi poprawnie jako epilog ("Piórnik zostaje u was. Ja zostaję bez pytań. Proszę nie pisać do mnie więcej."), ale 3 echa z końcowych dni zawsze trafią na jeden ekran obok finału.
  - Ostatnie dwa dni (d9, d10) **nigdy** nie dają poczty w grze, tylko w epilogu. Gracz przez dni 9-10 nie widzi skutków decyzji.
- **Etykieta ekranu poczty pokazuje surowe identyfikatory akcji:** `rękawiczka · odmow`, `piórnik · zadzwon` (bez ogonków, `p.a` zamiast `T.odmow`). To wygląda jak literówka.
- Poczta dnia N pokazuje echo `+1` dopiero wieczorem dnia N+1 (po kolejnym gościu). Dobre dla d4 Z ("przyszedł dziś do pana w sprawie księgi", d5), niezręczne dla d2 chłopak W (+2: zwrot "gdy gasili witrynę" w dniu 2).
- "Od poniedziałku wszystkie nocne wydania wymagają drugiego podpisu" (d5 D, +3) wypada w dniu 8, czyli środa; "po weekendzie" (d5 O, +1) w poniedziałek wieczorem. Drobne rozminięcie dni tygodnia. Drugi podpis nie jest wdrożony.

### 4.3 Ortografia, interpunkcja, placeholdery

Skan 413 stringów (regexy + lektura). Dane są czyste: brak podwójnych spacji, brak ASCII-cudzysłowów, brak "zł" (kwoty wyłącznie w dolarach: 86, 240, 20, 30, "sześćdziesiąt dolarów"; UI używa `$`). Znaleziono:

| gdzie | błąd | poprawka |
|---|---|---|
| `d2_chlopak` W echo | "June przelałem jej połowę i odpisała jednym słowem" | "Przelałem June połowę, a ona odpisała jednym słowem." |
| `d7_evan` W echo | "czy ona byłaby tu przed świtem" | "czy ona nie była tu przed świtem" |
| `d9_iris` `wnetrze` | "ma wżerę po kwasie" | "ma ślad po kwasie" (lub "wżer") |
| `d7_evan` T2 | "Jaki drugi? ...Czy" (spacja przed wielokropkiem, brak po) | "Jaki drugi?… Czy mógłby pan powtórzyć to pytanie?" |
| `d8_lena` T2 | "...Pan go zobaczył" (brak spacji po wielokropku) | "… Pan go zobaczył." |
| `d6_ada` `wejscie` | "Dał ją pan wczoraj na półkę?" (niejasne: o co pyta dziecko) | np. "Czy to pan ją wczoraj odłożył na półkę?" |
| `d9_iris` W echo | "Koperta była za mała. Proszę to uznać za przeprosiny." (sprzeczne z zysk "30 dolarów"; niejasne) | doprecyzować: koperta za mała na to, o co prosiła |
| `d1_praczka` | "Iris" (patrz kolizja imion) | zmienić imię (np. "Irma") |
| UI poczta | `odmow`, `zadzwon` jako etykiety | użyć `T.odmow`, `T.zadzwon` |
| walidator | 5 ostrzeżeń "pan/pani" do gracza (d3 `wejscie`, d4 dwie reakcje, d10 odpowiedź) i `d3_maz_i_siostra.decyzja zadzwon: echo.forma` | do decyzji autora |

**Placeholder "zwykła rzecz":** `dayItems()` tworzy dodatek z `itemName:'zwykła rzecz'`. W oknie zajrzenia na etykiecie pojawia się dokładnie ten napis (a pod spodem i tak `T.nothing`: "Zwykła rzecz. Czasem parasol..."), niezależnie od tego, czy sprite to paszport, lalka czy telefon. Dodatkowo `itemName:n` w stosie (`czapka_zimowa`, `rekawiczka_welna`) to id plików, używane jako `alt`. `T.wrong_line`, `T.pay`, `T.rent2` są martwe.

## 5. Błędy w kodzie wpływające na grę

| # | opis | skutek |
|---|---|---|
| B1 | `save()` w kliknięciu ulepszenia zapisuje `ST.day` jeszcze równe 5 (lub 10), a `day++` jest dopiero po "Następny tydzień". | "Kontynuuj" wraca do dnia 5/10 z już zapłaconym czynszem i kupionym ulepszeniem: dzień gra się drugi raz (+40 za każdą decyzję, drugi czynsz, kolejne ulepszenie). |
| B2 | `ST.shown` przechowuje obiekty z `ST.pending`; po `JSON.parse` w `load()` referencje są inne, więc `!ST.shown.includes(p)` jest zawsze prawdą. | Po "Kontynuuj" starsze echa wracają co wieczór. |
| B3 | `setFace` dla gości bez `face` wypisuje `<div class="phmina">klamie</div>`. | Spoiler kłamstwa dla Ady i Very, dosłowny debug-text dla 5 gości. |
| B4 | `T.wrong_line`, `T.pay`, `T.rent2` nieużywane; pole `echo.forma` nieczytane. | Zamierzone treści nie docierają do gracza. |
| B5 | `ST.money` jest wyświetlane jako samo `$170` bez etykiety. | Gracz nie wie, co to za liczba. |

## 6. Propozycje poprawek

### 6.1 (a) Małe: liczby w kodzie/danych, ortografia (godziny pracy)

**P1**
1. **Rozkład kłamstw:** zostaw `klamie` u 4 gości (np. chłopak d2, inspektor d5, Iris d9, Vera d10). U pozostałych (wdowiec, Ada, Evan, Lena, mąż i siostra) zmień na `neutralna` z uchylającą treścią (zatajanie). Dodaj jedno kłamstwo w T3 i jedno u drugiego gościa dnia (np. kucharz d2 lub mechaniczka d3). Cel: 4 kłamców + 3 zatajających na 13 (ok. 30%).
2. **Sekret nie może wypychać kłamstwa:** w danych przenieś kłamstwa na inne tony niż `niewygodne` w T2, albo w `qlist` zastępuj pytanie o tonie `uprzejme`/`rzeczowe` zamiast ostatniego `niewygodne`. Dodatkowo dodaj kłamstwa do 1-2 pytań `uprzejme`, żeby ton przestał zdradzać.
3. **Napraw B1** (zapisz stan po `ST.day++`, a nie przy kliknięciu ulepszenia) i **B2** (kluczuj `shown` po indeksie `due+item+a`, nie po referencji).
4. **Zakaz tekstowych obietnic bez skutku:** albo wdroż, albo wytnij z `zysk`/`strata`: "dostajesz 20 dolarów" (d4), "30 dolarami" (d9), "wypłatę odłożono" (d5), "drugi podpis" (d5).
5. **Etykiety poczty:** `T[ p.a ]` zamiast surowego `p.a`; dodaj etykietę do salda (`T.balance`).

**P2**
6. **Zaświeć wskazówkę o rzeczy gościa:** na ekranie dostawy dopisz krótkie "Dzwoniła dama z szóstki" lub podobne (gracz wie, której rzeczy szuka) albo **wymuś, że rzeczy gości mają inny odcień ramki**. Bez tego 50% szans na sekret w d4-d10 to los, nie decyzja. Alternatywa: pozwól zajrzeć po wejściu gościa (jedna skrzynia).
7. **Wabiki:** usuń z `FILL` 10 sprite'ów rzeczy gości (plecak, termos, telefon, klucze, puszka, paczka, teczka, piórnik, pudelko_blaszane, torba_narzedzia), żeby nie było wabików identycznych z celem (8,8% gości). Albo wyklucz sprite celu przy losowaniu `set`.
8. **Burza:** w `wejscie` lub odpowiedzi gości dni 3 i 8 dodaj nazwę linii (np. "z szóstki" w d3 mechaniczka, "z czwórki" w d8 Lena), żeby przesunięcie było do wykrycia. Do `T.storm` dopisz "o jedną/dwie skrzynie" zależnie od `s`. Pokaż w zakładkach nominalną linię rzeczy w nawiasie.
9. **Zmień seed domyślny** na `Date.now()&0xffff` (przy zachowaniu `?seed=` do testów). Dodatkowo `show(LINES[0])` zawsze otwiera zakładkę "4": zacznij od linii, w której gracz widział rzecz (albo od losowej).
10. **Zakup w dniu 10 jest martwy:** w sobotę 10 pokaż "ulepszenia obowiązują od dnia 11" albo ukryj je do wersji pełnej.
11. **Pola `forma`:** wyświetl `gosc` jako cytat ("Gość: ...") i `gazeta` jako wycinek, żeby poczta nie była monotonna.
12. **Placeholdery:** twarze dla 5 gości (praczka, kucharz, mechaniczka, Ada, Vera) lub ukryj `phmina`. Nazwij rzeczy dodatkowe po ludzku zamiast `zwykła rzecz`/`czapka_zimowa`.
13. **Imiona:** zmień Iris Bell (d1) na inne imię; dopisz Victora do wypowiedzi inspektora d5 w T1 ("Victor Hale, kontrola wydań").
14. **Echa po d10:** nagłówek "Poczta z następnych dni" na ekranie końca dema (`week()`), zamiast gołych listów.

**P3**
15. Popraw ortografię z tabeli 4.3 (9 pozycji).
16. Skróć przycinane skrzynie: `max-height:640px; overflow:auto` lub zmniejsz sprite do 140 px.
17. Usuń martwe klucze LANG lub użyj ich (`wrong_line` przy kliknięciu rzeczy z innej linii).
18. Wyrównaj formę zwracania się do Leny (d3 "Pani Leno" vs d8 "ty").
19. Dopisz rozbieżności kalendarza (szalik d2, Noah d5, Elias) do listy do decyzji autora.

### 6.2 (b) Duże: zmiana projektu

**P1: pieniądze i kara za decyzję**
- Dziś +40 niezależnie od wyboru. Zaproponuj stawkę bazową **30/gość** oraz modyfikatory wynikające z echa: `+20` (dobra decyzja, np. d4 Z "koperta" 20 dol., d9 W 30 dol.), `−20…−40` za złą (d5 O "wypłata odłożona" −40, d3 D −30, d6 O −20, d2 chłopak O −30). Efekt: tydzień 1 ok. 240 baz + modyfikatory − 150 czynszu = ok. 90, tydzień 2 ok. 150 − 150 = ok. 0. Wtedy ulepszenie (60-80) w pierwszą sobotę jest realnym wyborem, a drugie możliwe tylko przy bezbłędnym tygodniu. Ujemne saldo = dopłata z następnej wypłaty (nie game over), żeby nie karać początkujących.
- Alternatywa: czynsz 150 do 180-200 w tygodniu 2 przy stałym +40.
- Dodaj **wyświetlanie przychodu** ("+ 40 dol." na ekranie podsumowania decyzji) i wynagrodzenie jako osobną linię w sobotę (użyj `T.pay`).

**P1: stawka szukania**
- Licznik **cierpliwości gościa** (np. 3 złe kliknięcia = gość traci jedno pytanie lub spada napiwek o 10 dol.), albo **limit czasu** (np. 60 s, krótszy bez regału).
- Użyj `T.wrong_line`: błędne kliknięcie rzeczy z innej linii kosztuje więcej niż błędne w poprawnej linii, żeby linia coś znaczyła.
- Regał (12 do 7) ma wtedy realną wartość i uzasadnia 70 dol.; lampa i drzwi można powiązać z innymi mechanikami (np. lampa: mniej zakłóceń podczas rozmowy, drzwi: +1 pytanie w turze w deszczowe noce) zamiast czystej atmosfery.

**P1: decyzja zależna od wiedzy**
- Wprowadź warianty decyzji zależne od `ST.secrets` i od tego, czy gracz słyszał kłamstwo (np. u praczki z sekretem opcja W daje dodatkowy wpis "potwierdzono odbiór", bez sekretu skutek bliższy odmowie). Dziś sekret jest "dekoracją": warto, żeby kosztował jedyną szansę zajrzenia i faktycznie zmieniał wynik.
- Wprowadź błąd, który boli: wydanie rzeczy złej osobie (d3 W bez zgody Mai, d9 W przy tokenach) powinno kosztować (pieniądze, zaufanie, utracona opcja w późniejszym dniu).

**P2: seed i powtarzalność**
- Zapis i oznaczenie gałęzi (`ST.log` istnieje, ale nic go nie czyta): echa i dialogi dni 5-10 powinny sprawdzać `ST.log` (np. d5 inspektor mówi o gazecie tylko po d3 D).

**P2: zapowiedź echa**
- Wydłuż poczekalnię: dla dni 8-10 zmniejsz `za_dni` do 1, żeby echa dotarły przed końcem dema, albo dodaj ekran "tydzień 3" z pocztą dni 11-13.

**P3: dni, w których brakuje obsady**
- Dopisz epizody Eliasa (krótka wizyta tła) i wcześniejszy Noah/Leo/Nora, jeśli demo ma obiecywać tę obsadę.

## 7. Podsumowanie priorytetów

| P | pozycja |
|---|---|
| P1 | Pieniądze bez konsekwencji (+40 płasko, min. saldo 170, obietnice dolarów niewdrożone). |
| P1 | Szukanie bez stawki, linia prawie nie padająca w dialogu, burza bez skutku. |
| P1 | Kłamstwa: 69% gości kłamie (cel 30%), wzór przewidywalny (pierwszy gość dnia, od d5 zawsze), ton zdradza kłamstwo, sekret wypycha kłamstwo u 4 z 9 kłamców. |
| P1 | Decyzje: wydaj dominuje, dyżurny zawsze najgorszy, żadna nie zależy od sekretu ani kłamstwa. |
| P1 | Błędy B1, B2 (zapis i powtarzanie ech po "Kontynuuj"). |
| P2 | Zajrzenie 50/50 bez informacji, wabiki identyczne z celem (8,8%), stały seed, echa `gosc` jak listy, 7 z 34 ech po d10, `odmow`/`klamie` na ekranie, kolizja imion Iris, Victor bez wprowadzenia, ciągłość gałęzi (gazeta, telefon, kasetka). |
| P3 | Ortografia (9 pozycji), przycięta skrzynia, martwe klucze LANG, `zwykła rzecz`, forma do Leny, brakująca obsada tła. |
