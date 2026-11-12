# A3: Logika zwrotu „Fotel” i motywacje (audyt adwersarialny)

Materiał: `fabula_25_dni_v2.md` (v2), `fabula_25_dni.md` (v1), `okienko_rozmowy_v3_dni11-25.md` (d11-25, czytane: d23, d24, d25, d22 częściowo, d15/d19/d20 fragmentami, grep po całości), `okienko_rozmowy_v3_dni1-10.md` (tylko grep), `okienko_obsada_i_kalendarz.md`, `LICZNIKI.md`.
Zasada poprawek: nie dodawać wątków, naprawiać istniejące. Cytaty „do wklejenia” są gotowym tekstem.

---

## A. WERDYKTY 1-10

| # | Pozycja | Werdykt |
|---|---|---|
| 1 | Po co łańcuch / co robi dyżurny | **DZIURAWE.** Ani v2, ani dialogi nie mówią, czego dyżurny nie zrobi nikt inny. „Nie zeznawać” nie wystarcza, bo dyżurny wie najmniej ze wszystkich (Vera, Iris, Leo wiedzą więcej). |
| 2 | Rotacja: kto wymusza, czym grozi | **PĘKA.** Reguła „bilet tylko jeśli następny siedzi” nie ma egzekutora ani kary; Sam i Wyrwana strona pokazują, że można ją obejść bez kosztu. |
| 3 | Moralność Very / Iris / Sama | **Vera: HOLD z dziurą** (brak ceny nr 4). **Iris: PĘKA** (trzy niezgodne wersje „wykupu”). **Sam: DZIURAWE** (nie powiedział, nie użył biletu, nikt tego nie tłumaczy). |
| 4 | Skąd Vera wie, że nikt nie szuka; gracz z historią | **DZIURAWE.** Gracz ma w dialogach dług 300 $ u Kuby Marlowa, który „wie, gdzie mieszka”, a Noah i Stahl spisują dyżurnego. Kryterium Very jest wprost zaprzeczone przez grę. Naprawialne jednym zdaniem definicji. |
| 5 | Chronologia 11 lat / 5 dyżurnych / Sam | **DZIURAWE.** Arytmetyka się sumuje, ale „8 lat temu” u Iris jest dwuznaczne, a v1 (T-7 mies., Sam założyciel, Iris z żetonem 0809) nadal siedzi w v1 §2.1/§2.3 i w zakończeniu Poprzednik C. |
| 6 | Czemu Urząd nie zauważył 11 lat | **PĘKA.** Brak mechanizmu (zatrudnienie bez nazwiska, „brak skierowania”, 5 protokołów „niedobór na zmianie” w jednym oddziale). Brak też powodu „dlaczego teraz”. |
| 7 | Sumienność = wyciek | **DZIURAWE.** Licznik `kopie` → „min(4, N)” klientów w stałej kolejności jest magią; nie wynika z tego, co gracz faktycznie przekazał. Brak jawnego odbiorcy kopii. |
| 8 | Cztery gesty / sześć zakończeń | **Kolejność sprawdzania HOLD** (każda kombinacja flag trafia w dokładnie jedno zakończenie). **Treść zakończeń PĘKA** w trzech miejscach (Odebrany × Zaginiona C, Rotacja × Skrytka B, Skrytka A/B/C × 6 800 $). |
| 9 | Motywacje drugoplanowe | **Evan, Lena, Noah, Nora: HOLD.** **Victor: PĘKA** (trzy wersje motywu). **Stahl: PĘKA** (chronologia, brak motywu poza Mayą). **Elias: DZIURAWE** (wie za dużo względem tabeli §3.4). |
| 10 | Sieroty | 6 dziur (nr 1/nr 2/nr 4, mąż Linh, Marlow, Stahl spisujący lokatorów, obietnica imienia nr 1), reszta celowa lub jednorazowa. Patrz §C. |

---

## B. ZNALEZISKA (pełna lista)

### KRYTYCZNE

#### L-01 · KRYTYCZNE · Funkcja dyżurnego jest niewyjaśniona
- **Miejsce:** v2 §3.1 („ktoś musi siedzieć przy okienku, przyjmować paczki, nie pytać i nie zeznawać”); d24 Vera.
- **Problem:** Paczki przynosi Leo, klientów obsługuje Iris, fałszywe papiery zamawia Vera. Dyżurny „przyjmuje paczki” i „nie pyta”; to robi każdy. „Nie zeznawać” zadziała tylko wtedy, gdy dyżurny jest kimś, na kim audyt MUSI się zatrzymać. Tego v2 nie mówi. Przy słabej funkcji kryterium „nikt nie szuka” brzmi jak czysty sadyzm autora, nie logika Skrytki.
- **Scenariusz pęknięcia:** Gracz po d24 pyta „po co wam dyżurny, skoro Iris ma klucze?”. Nikt nie ma odpowiedzi; zwrot zamienia się w „bo tak”.
- **Poprawka (jedna reguła, nic nowego):** Dyżurny jest **bezpiecznikiem audytu**. Księga wydań Urzędu wymaga czyjegoś podpisu pod każdym wydaniem; tylko okienko może wydać „zgubę w płótnie” bez pytania. Przy każdym audycie ktoś musi odpowiadać za niedobór. Ten ktoś musi być taki, żeby po audycie dało się go „zamknąć” i żeby nikt nie szukał. To znaczy, że **„niedobór na zmianie” w protokole jest jednocześnie kosztem Skrytki i biletem wyjścia dyżurnego**: odchodzi z nowym nazwiskiem, a Urząd dostaje winnego, który znika.
  Gotowy tekst do d24 (Vera, zamiast pytania „Czym tak naprawdę zajmujesz się w tym biurze?”, odpowiedź):
  > „Kluczami i teczkami. A on, po tej stronie szyby, podpisuje. Każda paczka musi mieć czyjś podpis, a każdy audyt czyjś niedobór. Wolę, żeby to był ktoś, po kogo nikt nie przyjdzie.”
  Wymaga jednej zmiany w v2 §3.1: „dyżurny = podpis w księdze + niedobór przy audycie”.

#### L-02 · KRYTYCZNE · Rotacja bez egzekutora i bez konsekwencji
- **Miejsce:** v2 §2 pkt 1, §3.1 „Reguła rotacji”, §8 (d23 hook, d25 gest 2).
- **Problem:** (a) Nie ma wskazanego, kto zatrzyma dyżurnego, który po prostu wyjdzie. (b) Kara za „nikt nie siądzie” nie istnieje. (c) Sam obchodzi regułę: wyrwał stronę, a mimo to odszedł (następca, gracz, już siedzi). (d) „Wyrwij stronę” = „wychodzisz wolny” bez żadnej ceny dla gracza; „Skrytka traci kanał” to kara dla innych, nie dla niego.
- **Scenariusz:** Gracz wybiera „wyrwij” i widzi, że nic go nie kosztuje; „zamknij” też nie. Bilet jest dekoracją, rotacja grzecznością.
- **Poprawka:** Przypisz bilet i groźbę konkretnym osobom i zasobom:
  1. **Czym grozi (do d23 Iris, 3 zdania, wpiąć w „Dziś każdy dostaje bilet”):**
     > „Bilet to nowe nazwisko, dokumenty i paczka w płótnie z numerem. Dopóki ktoś nie siądzie, leży w szafce u Very i nikt jej nie otworzy. Wyjść bez niego możesz. Tyle że wyjdziesz jako ten, od kogo uciekałeś.”
  2. **Konsekwencja „nikt nie usiądzie”:** pusty fotel = pusty posterunek w oczach Victora = niedobór wpisany imiennie na ostatniego dyżurnego (to już jest „Nowy Sam”, więc reguła ma pokrycie w zakończeniach).
  3. **Wyrwij:** gracz wychodzi **bez biletu** (nowe życie) i zostaje ze starym nazwiskiem. Dopisać do `wyrwij` w d25, pole `strata`: „Wychodzisz z tym, co masz. Nowego nazwiska nie będzie.” To domyka też sens „jak Sam” (patrz L-08).
  4. Zmienić v2 §3.1: „…**tylko jeśli następny już podpisał** (nie: siedzi)”. Powód w L-05.

#### L-03 · KRYTYCZNE · Zakończenia Skrytki operują 6 800 $, który został wydany
- **Miejsce:** v1 §8.2 A/B/C (niezmienione w v2 §10); v2 §3.2; d23 Iris („Sześć tysięcy osiemset. Wzięłam je od miasta… Lokatorom dałam ludzi, nie pieniądze”).
- **Problem:** v2 mówi, że 6 800 $ = 4 × 1 700 $ poszło na papiery czterech klientów. Skrytka A: „Iris… oddaje 6 800 $”. B: „Victor… zajmuje 6 800 $ jako dowód”. C: „Iris zabiera paczkę, oryginały i 6 800 $”. Tych pieniędzy nie ma. Co więcej, Okoye mają 400 $, nie 6 800 $; 5 600 $ kaucji to osobna kwota z pokwitowaniami w kasetce.
- **Scenariusz:** Gracz, który zrozumiał d23, czyta w zakończeniu A, że Iris „oddaje 6 800 $”, i zauważa sprzeczność z własną wiedzą.
- **Poprawka (teksty zakończeń):**
  - **A:** „Iris podpisuje uznanie długu wobec czternastu rodzin na 6 800 $ i zobowiązanie spłaty z pierwszego zwrotu z wyburzenia. Okoye nie płacą drugi raz.” (zamiast „oddaje”).
  - **B:** „Victor zajmuje oryginały pokwitowań i kasetkę jako dowód; kwota 6 800 $ trafia do protokołu jako **wydatek bez pokrycia**.”
  - **C:** „Iris zabiera oryginały i wyjeżdża. Pieniędzy nie ma; nie było ich od lata. Nora ma kopię jednej wpłaty.”
  - W v2 §2 pkt 2 skasować „Pieniądze Okoye i mieszkańców to jej wykup”; zostawić §3.2 (patrz L-09).

#### L-04 · KRYTYCZNE · Zakończenia Fotela kolidują z zakończeniami starych wątków
- **Miejsce:** v2 §10 pkt 1 (Odebrany), pkt 3 (Rotacja); v1 §8.1 C, §8.2 B.
- **Problem (trzy kolizje):**
  1. **Odebrany nie wyklucza Zaginiona C.** Warunki: `maya_testy ≥ 2`, ale Z5=bez / Z7=zdradz_szczegol / Z9=zostaw_otwarte odpalają Zaginiona C niezależnie od testów. Pocztówka „Odebrane.” od Mai jest wtedy nielogiczna (detektyw Stahl jedzie za nią 6:10 w poniedziałek).
  2. **Odebrany/Rotacja × Skrytka B.** B = „Victor zamyka obieg paczek”, więc kanał jest martwy, a Rotacja mówi „Skrytka przechodzi dalej”, ogłoszenie 0913 się pojawia, bilet wręcza Iris. Jedno z dwóch kłamie.
  3. **Odebrany × wysokie `kopie`.** Karta „Kopie” może pokazać wszystkich odnalezionych klientów po „prawdziwym” zakończeniu z pocztówką od Mai.
- **Poprawka:**
  1. Odebrany: dodać `Zaginiona ∈ {A, B}`.
  2. Dodać do v2 §10 jedną regułę: **fotel i kanał to dwa osobne zasoby.** Skrytka A, C: kanał żywy. Skrytka B: kanał martwy, **fotel żyje**, bo Urząd też potrzebuje podpisu (dyżurny bezpiecznik); Rotacja przy B kończy się: „Peron 5:40. Iris nie przychodzi. Bilet leży w szafce u Very.” (Vera wręcza, nie Iris.)
  3. Odebrany: dodać `kopie ≤ 1` albo zmienić kartę „Kopie” w Odebranym na wariant „Kopie wysłane: N. Pocztówka Mai dotarła mimo to.” (jeśli `kopie` ≥ 2). Wybrać (a); (b) tylko jeśli autor chce zachować prawdziwy finał bez warunku na ostrożność.

#### L-05 · KRYTYCZNE · „Bilet tylko jeśli następny siedzi” kłóci się z d25
- **Miejsce:** v2 §3.1; d23 („nie z mojej ręki, dopóki ktoś nie usiądzie”); d25 wpisz_siebie („Iris wręcza bilet”); `rotacja_list_bez_warunkow` („Listu nikt nie znalazł przez miesiąc”).
- **Problem:** W piątek d25 następcy jeszcze nie ma (odcinek 0913 = poniedziałek 13.09). A mimo to Iris wręcza bilet „od razu”. „Listu nikt nie znalazł przez miesiąc” przeczy odcinkowi 0913 (3 dni później).
- **Poprawka:** (1) Reguła: bilet wydaje się, gdy następca **podpisał** (Vera mówi to Iris telefonicznie; tak działał też Sam: wyszedł, bo gracz podpisał w poniedziałek). W d25 `wpisz_siebie`: „Iris wręcza bilet **na poniedziałek 13.09, 5:40**; do tego czasu dyżur jest Twój.” (2) `rotacja_list_bez_warunkow`: zamienić „przez miesiąc” na „przez tydzień (Vera zapomniała dać klucz)”. Albo zachować „miesiąc”, a w ogłoszeniu użyć 1013.

### WAŻNE

#### L-06 · WAŻNE · „Nikt nie szuka” jest zaprzeczone przez grę
- **Miejsce:** v2 §3.1, §2; d24 Vera; dialogi dni 2-25 (Kuba Marlow, `Kuba M.`: gracz winien 300 $, rata 60 $/sob., „nie wiesz, skąd wiedział, gdzie mieszkasz”); d14/d22 Noah („Zapisuję: dyżurny, bez nazwiska”); d22 Marlow („Człowiek w płaszczu spisał dziś, kto mieszka w twoim domu”).
- **Problem:** Gracz ma wierzyciela, który go wytropił; policja zapisuje dyżurnego w notatniku; Stahl spisuje mieszkańców. Kryterium Very („ktoś, kogo nikt nie szuka”) nie obejmuje tych wektorów, a gracz tego nie zauważa jako luki w zwrocie, tylko jako błąd autora. Pytanie „skąd Vera wie?” (pkt 4) pozostaje bez odpowiedzi.
- **Poprawka:** Zdefiniować kryterium na wejściu: **nikt nie zgłosił zaginięcia i nikt nie wystąpił do sądu ani policji; długi i komornicy się nie liczą, bo wierzyciel nie zgłasza osoby, tylko dług.** Wpiąć w d24 jako 1 odpowiedź (zamiast „Kto wie, że przyszłaś?” lub dodatkowo w tej turze):
  > „Szukali Cię tylko o pieniądze. Za długiem nikt nie wzywa policji. Za człowiekiem tak. Sprawdziłam to u Kuby, zanim podpisałam.”
  To domyka też Marlowa jako wektor wyboru Very (nie jako zbieg okoliczności) i usprawiedliwia „nie wiem, przed czym uciekasz” (uciekać można przed długiem). Nic nie dodaje: Marlow już jest w dialogach.

#### L-07 · WAŻNE · Vera: wyznanie bez ceny, nr 4 jako rekwizyt
- **Miejsce:** d24 Vera; v2 §2 pkt 3, §3.1.
- **Problem:** Spójność Very z „zaplecze, klucze, wstyd”: **HOLD**; wybiera sposób, nie rękę; wstyd jest o kryterium. Ale zdanie „Czwarty został znaleziony w kanale” pada w jednej kwestii bez reakcji gracza i bez wyjaśnienia, jak (wyciek kopii?) i dlaczego Vera po śmierci nr 4 wybierała dalej i wybrała nr 5 i gracza. Bez tego gracz „nie ma za co jej nie wybaczyć”: wstyd bez zbrodni. A w d25 nie ma żadnej opcji wobec Very.
- **Poprawka:** Dopisać w d24 jedną pytanie/odpowiedź (3. tura, zamiast „Czy ktoś kazał Ci to powiedzieć?”):
  > Pytanie: „Co się stało z czwartym?”
  > Vera: „Ktoś kupił kopię w Urzędzie, znalazł klienta, a klient miał tylko jedną drogę, przez czwartego. Znaleźli go w kanale pod Portem. Potem wybrałam Sama. Wiedziałam, jakie kryterium mam. Nie zmieniłam go.”
  Wynik: gracz ma i powód do zrozumienia (ciągłość Skrytki, kryterium), i powód do nieprzebaczenia (wiedziała, wybrała dalej). To podnosi też wiarygodność „sumienność = wyciek” (L-13).

#### L-08 · WAŻNE · Sam: dlaczego nie powiedział i dlaczego nie wyszedł
- **Miejsce:** v2 §8 d24, list Sama; d15, d20, d25 (Sam obecny, szuka referencji w porcie).
- **Problem:** Sam przy d15, d20, d25 stoi twarzą w twarz z następcą i nie mówi, tylko zostawia rozproszone notatki (N1-N5) i list w szafce, którą otwiera Vera (a Vera „nie wie, że Sam chce wyciągnąć następcę”). Zachowanie wiarygodne psychologicznie (strach po nr 4), ale tekst tego nie mówi. Ponadto: skoro następca siedzi od d1, Sam od 9.08 mógłby użyć biletu, a szuka pracy w porcie i referencji pod własnym nazwiskiem. Kto go tu trzyma? Brakuje powodu.
- **Poprawka:** Jedna kwestia w d20 (Sam, zamiast „Niczego. Chciałem tylko zapytać…”, albo dopisana po nim):
  > „Bilet dostałem. Nie wsiadłem. Wolę być Holtem, który nie ma nic, niż kimś, kogo nie ma. A powiedzieć Ci wprost nie mogę. Co powiem na głos, Iris wie przed zmrokiem. Dlatego list.”
  To wyjaśnia (a) dlaczego nie użył biletu (odmówił anonimowości; spójne z „S. Holt” ołówkiem na karcie, d13), (b) dlaczego wyrwał stronę (nie dać innym wpisać Twoje imię za Ciebie), (c) dlaczego list i notatki, nie rozmowa. W tabeli v2 §3.4 zmienić Sam: „Nie wie” → „Nie wie, kim będzie następca; wie, że rozmowa jest podsłuchiwana”.
  Dodatkowo `strata` `wyrwij` (L-02) wprost wiąże gest z jego ceną: Sam stracił bilet.

#### L-09 · WAŻNE · Iris: trzy wersje „wykupu”
- **Miejsce:** v2 §2 pkt 2 („Pieniądze Okoye i mieszkańców to jej wykup z łańcucha”) vs §3.2 („nie ukradła dla siebie: sfinansowała Skrytkę”); d23 „potrzeba wyjść z pieniędzmi i bez śladu”; v1 §2.1 (odszkodowanie T-3 mies.).
- **Problem:** Iris wyszła z fotela 8 lat temu (wykupiona), a odszkodowanie przyszło 3 miesiące temu: nie może być jej wykupem sprzed ośmiu lat. Wersja §3.2 (finansowanie czterech papierów) jest spójna z d23, wersja §2 nie. A czego Iris chce teraz: „wyjść z pieniędzmi” = zniknąć, ale jej pieniądze są wydane (L-03).
- **Poprawka:** Kanon: **Iris wykupiła się 8 lat temu zwykłym trybem (bilet, bo następca usiadł) i dostała zarząd kamienicy jako nagrodę. Cztery papiery (6 800 $) to jej obecna próba spłacenia Skrytki, żeby zniknąć naprawdę, bo operatorów nikt nie rotuje.** Karta rozliczenia z podpisem sprzed 8 lat (d23) czyta się wtedy jako „ostatni raz, kiedy podpisała coś w pełni swojego”. Skreślić §2 pkt 2 „wykup”; dać w v2 §2: „Iris chciała wyjść i musiała kogoś posadzić; po latach chce wyjść jeszcze raz, z Cooper Street”. Jej motyw „wyjść z pieniędzmi”: na pieniądze z kaucji (5 600 $), które jako jedyne zostały; stąd d18 „300 $ wykupu zwrotu”.

#### L-10 · WAŻNE · Chronologia: relikty v1 i dwuznaczne „osiem lat”
- **Miejsce:** v1 §2.1 (T-7 mies. Sam zakłada Skrytkę; T-6 mies. Iris wchodzi; „Iris wymyśla żetony”), §2.3, §8.3 C („jako współtwórca Skrytki”), §2.4 (Sam „Wszystko”); v2 §3.1, §3.3, §10 („9 zakończeń bez zmian”).
- **Problem:** v2 jest „nakładką”, ale nie unieważnia jawnie v1 §2.1 T-7/T-6 mies. ani §8.3 C. W v1 Sam jest założycielem, w v2 piątym dyżurnym; Poprzednik C (Sam „współtwórca”, bilet od Iris, nie od następcy) przeczy L-02/L-05.
  Arytmetyka dyżurnych: 11 lat, 5 dyżurnych, Sam ≥ 2 lata (Elias d13), Iris 8 lat. „Osiem lat temu” u Iris (d23) znaczy „zaczęła/odeszła?”. Jeśli odeszła 8 lat temu, to nr 4 i nr 5 mają razem 8 lat (średnio 4), czego nie potwierdza nic; jeśli zaczęła 8 lat temu, to nr 1 i 2 miały 3 lata łącznie. Obie wersje się sumują, ale wymagają deklaracji.
- **Poprawka (jedna tabela do v2 §3.1):**
  | nr | Okres | Uwagi |
  |---|---|---|
  | 1 | T-11 do T-9,5 | pierwsza uciekinierka, która siedziała na fotelu, bo nie było nikogo innego (jedyny wyjątek od kryterium) |
  | 2 | T-9,5 do T-8 | nieznany |
  | 3 Iris | T-8 do T-6 | wyszła przez zarząd kamienicy |
  | 4 | T-6 do T-3,5 | znaleziony w kanale (po odejściu z rotacją, więc „wyciek”) |
  | 5 Sam | T-3,5 do T-0 | od ≥ 2 lat bez nazwiska (zgodnie z Elias d13) |
  | 6 gracz | od 9.08 | |
  Skreślić v1 §2.1 T-7/T-6 mies. i napisać w v2 §3.3 „Uchyla v1 §2.1, §2.3 (T-7 mies., Sam założyciel), §8.3 C (współtwórca)”. Poprawić v1 §8.3 C: „Sam, wystawiony, wykorzystuje bilet, który dostał od Vera wcześniej, i znika” (bez słowa „współtwórca”).

#### L-11 · WAŻNE · Urząd: dlaczego przez 11 lat nic, i co zmieniło się teraz
- **Miejsce:** v2 §3.1, §3.4 (Victor „widzi, że coś przechodzi”); dialogi d5 Victor („Kto cię tu skierował? W aktach nie widzę skierowania”).
- **Problem:** Dyżurny „bez nazwiska na karcie” przez 2 lata (Sam), „brak skierowania” w aktach Victora, 5 protokołów „niedobór na zmianie” z 11 lat; a Urząd (audyt, Victor) nic nie zauważył do T-5 tygodni. Brak powodu „dlaczego teraz”: v2 nie mówi, co wywołało audyt. Cooper Street 9 idzie do wyburzenia (T-3 mies.), ale to dotyczy kamienicy, nie biura.
- **Poprawka (3 zdania, do v2 §3.1 lub Victor d5/d20):**
  1. **Dyżurny jest formalnie podwykonawcą** (umowa z Zarządem Nieruchomości Cooper, nie z Urzędem); Urząd audytuje **księgę, nie pracownika**. Więc „brak skierowania” oznacza tylko „skierowania są u zarządcy”.
  2. **Powód „teraz”:** nowy w oddziale Victor jako pierwszy zestawił pięć protokołów „niedobór na zmianie” i zobaczył wzorzec (co 2 lata, ten sam układ, ten sam brak nazwiska). Audyt T-5 tyg. to kontrola tego wzorca.
  3. Victor d5: „Kto Cię tu skierował? Skierowania są u zarządcy, a zarządca podpisuje nieczytelnie.” (zamiast „W aktach brak skierowania”)
  Wtedy W1 (gracz jako wtyczka) zostaje wabikiem, a jednocześnie prawdą o strukturze.

#### L-12 · WAŻNE · Stahl: chronologia i motyw
- **Miejsce:** v2 §6 d5, d9, d17, d22 (Z10); d9 mini-karta w v3 („To test: Victor sprawdza…”); d17 Evan („Po 22 zadzwonię do detektywa. 1 200 $”); d17 wieczór (Evan patrzy za mężczyzną w szarym kapeluszu bez rozpoznania); d22 Stahl („Dostałem wskazówkę z biura rzeczy znalezionych”).
- **Problem:** (1) Stahl jest w kolejce od d5 i d9, a Evan „zadzwoni po 22”; kto go wtedy wysłał? (2) Mini-karta d9 w v3 nadal ma motyw v1 (test Victora), co zderza się z v2 (detektyw Evana). (3) Evan nie rozpoznaje własnego detektywa w d17. (4) Motyw Stahla zamyka się na Mai; dla Linh, Gusa i Doriana nie ma żadnego powodu kupować kopie Urzędu.
- **Poprawka:** Evan wynajął Stahla już w d4 (po wydaniu telefonu), a kłamstwo „po 22 zadzwonię” jest jego tellem kontroli (poprawia mankiet). W d17: „Detektyw już jest. Kosztuje 1 200. Powiedziałem sobie, że po 22 go zwolnię.” Evan nie zna go z wyglądu, bo kontaktuje się z nim tylko telefonicznie (to wystarcza, żeby d17 „Evan patrzył za nim” było zdziwieniem „że ktoś tak wygląda”). d9 mini-karta: skreślić „To test: Victor sprawdza…”, wstawić „Zleceniodawca nieznany. Wypytuje o walizkę Mai (jeszcze nieznaną), więc zna tylko jej opis.” Motyw Stahla = tylko Maya. Klienci odnalezieni to skutek uboczny (patrz L-13).

#### L-13 · WAŻNE · „Sumienność jako wyciek”: łańcuch przyczynowy niedomknięty
- **Miejsce:** v2 §2 pkt 5, §9 (`kopie`), §8 d25 karta „Kopie”; LICZNIKI („Lista nazwisk rośnie z N: Linh, Gus, Dorian; Maya tylko gdy nie została odebrana”); d23 Victor („Kto czyta kopie, to nie moja sprawa. Ale każdy, kto płaci, ma dostęp.”).
- **Problem:** (a) Kto czyta kopie: nieokreślone („Urząd”, „każdy, kto płaci”). (b) `kopie` liczy decyzje (+1 za S2, S4, P4, S6, P6, d22 `wez_200_stahl`, d25 `dolacz_kopie`, d24 `wpisz_wykaz`), a karta wylicza „min(4, N)” klientów w stałej kolejności, niezależnie od tego, co faktycznie było w danej kopii. Gracz, który dał Victorowi tylko S6+P6 (materiały o lokatorach), zobaczy w karcie, że znaleziono Linh i Gusa, mimo że żadna kopia nie zawierała ich danych. To magia. (c) Maya „tylko gdy nie została odebrana” nie ma związku z kopiami, tylko z Z8.
- **Poprawka:**
  1. **Odbiorca:** kopie trafiają do wspólnej kancelarii Urzędu; wgląd „na wniosek strony zainteresowanej, 12 $” (realistyczny mechanizm bez korupcji). Victor d23: „Kancelaria wydaje wgląd każdemu, kto złoży wniosek i zapłaci opłatę. Nie moja sprawa, kto składa.”
  2. **Mapowanie zamiast `min(4, N)`** (jedna tabela do v2 §9/LICZNIKI):
     | Odnaleziony | Warunek |
     |---|---|
     | Gus | `S2=wykaz_paczke` (paczka 0412 w wykazie) |
     | Linh | `S4=zetony_victor` (piórnik: „matka z synem”) |
     | Dorian | `S4=zetony_victor` ∨ `P4=victor_od_razu` (kalka z listą klientów) |
     | Maya | `Z10=stahl_wydaj` ∨ `d22 wez_200_stahl` |
     Karta: „Kopie wysłane do Urzędu: N. Klienci odnalezieni: [lista wg warunków].” Jeśli N ≥ 1, a lista pusta: „Żaden klient nie był w tych kopiach. Dlatego dziś nikogo nie znaleziono.” To czyni „Ekspozycję” czytelną i sprawiedliwą (gracz widzi, co zrobił), zamiast losowej.
  3. Stahl d22 stahl_wydaj/wez_200 pozostają jedyną ścieżką do Mai, więc motyw Stahla (L-12) się zgadza.

#### L-14 · WAŻNE · Wektory przecieku poza `kopie`
- **Miejsce:** d14/d22 Noah „Zapisuję: dyżurny, bez nazwiska”; d22 Marlow; d7 Kit (kopiarnia, „szary płaszcz wrócił”).
- **Problem:** Policja notuje istnienie dyżurnego, Stahl spisuje mieszkańców kamienicy; żaden z tych wektorów nie wchodzi do `kopie` ani do karty. Gracz, który nigdy nie dał kopii Victorowi, nadal jest „wystawiony” przez Noaha.
- **Poprawka:** Nie liczyć; dopisać jedno zdanie w karcie d25: „Pozostałe ślady (notatnik policjanta, spis mieszkańców) nie wchodzą do tej liczby.” To uczciwie ogranicza tezę karty do kopii i nie zniszczy zwrotu („sumienność wystawiała ludzi”) ani nie wymaga nowych wątków.

#### L-15 · WAŻNE · Odebrany: bramki, dostępność listu i „ktoś przy nim”
- **Miejsce:** v2 §8 d25 gest 3, §10 pkt 1; d24 `otworz_szafke`; d25 `list`.
- **Problem:** (a) `notatki ≥ 3` jest i warunkiem klikalności gestu, i warunkiem zakończenia (redundancja). (b) `maya_testy ≥ 2` nie ma związku z listem Sama (Maya nie zna Sama). (c) Pełny list pojawia się w szafce 0809, ale otworzenie szafki to jedna z trzech wzajemnie wykluczających się decyzji Very w d24 (`dolacz_slad`, `koperta_zapieczetowana`, `otworz_szafke`); jeśli gracz wybierze inną, nigdy nie przeczytał listu, a w d25 może „dopisać do listu”. (d) „Ktoś jest przy nim, żeby mu to powiedzieć”: kto?
- **Poprawka:** (a) usunąć `notatki ≥ 3` z warunku zakończenia (zostaje przy gestcie). (b) Zastąpić `maya_testy ≥ 2` przez `Zaginiona ∈ {A, B}` (L-04): to ten sam efekt dla Mai, bez absurdu. (c) W d24 `otworz_szafke` wykonać automatycznie jako efekt uboczny każdego wyboru (klucz leży pod szybą w wieczorze 24, więc gracz go ma); albo dopisać do d25 wymaganie `d24_list_otwarty`. (d) „Ktoś” = **Vera**: dopisać do reakcji `list`: „Vera czeka przy szafce pierwszego wieczoru. Po raz pierwszy mówi następcy prawdę sama.” To jednocześnie jest odkupieniem Very i odróżnia Odebrany od Rotacji.

#### L-16 · WAŻNE · Epilog gracza: Nowy Sam, Referent, Zostajesz
- **Miejsce:** v1 §8.4 vs v2 §10 pkt 4-6; v2 §9.
- **Problem:** (a) v1 §8.4 mówi, że „Nowy Sam ma pierwszeństwo, a gest wyrwij nie zmienia wyniku”; v2 §10 daje pierwszeństwo `wyrwij`/`wpisz_siebie`/`list`. Gracz z flagami Nowego Sama i `wyrwij` dostaje inny epilog niż w v1. (b) `bez_wpisu` karze (Nowy Sam), a v2 przedstawia „bez wpisu” jako ochronę klientów; `kopie` karze (Referent, najbardziej okrutny), a jest to tryb sumienny. Obie skrajności są złe, a „dobry” wynik to nic (Zostajesz) albo gesty `list`/`wyrwij`: to jest zgodne z tezą, ale nie jest nigdzie nazwane. (c) Referent: „awans na starszego referenta” dla osoby, której Urząd nie ma w aktach (L-11).
- **Poprawka:** (a) Napisać w v2 §10: „v2 §10 uchyla v1 §8.4/8.5 w zakresie pierwszeństwa; Nowy Sam i Referent dotyczą tylko `D7=zamknij`.” (b) Przyjąć jawnie, że to wada celowa i zostawić (pasek „Zabrakło” to uzasadnia). (c) Referent: „Urząd wpisuje Cię do akt pod prawdziwym nazwiskiem. Premia, awans i adres. Teraz każdy, kto zapłaci 12 $ w kancelarii, wie, gdzie Cię znaleźć.” To zamienia absurd w zwrot (gracz staje się nowym klientem „odnalezionym”), spójnie z kartą „Kopie”.

#### L-17 · WAŻNE · Maya zna „bilet Iris” bez źródła i bez alternatywy
- **Miejsce:** v2 §8 d21; d21 odpowiedź Mai („Iris ma dla Ciebie jeden bilet. Nie bierz go z jej ręki.”).
- **Problem:** Skąd Maya wie? Jest klientką, nie członkinią łańcucha. I jaka jest alternatywa dla „z ręki Iris”? Gracz nie dostaje drugiej drogi do biletu.
- **Poprawka:** Dać Mai źródło: jej własny bilet 0517 (d21) był zszyty z kartką „Wyjście. Raz.” Dopisać w d21: „Mój bilet dostałam od Iris. Gdy odbierałam, Iris powiedziała: ‘Zostanie ktoś na fotelu.’ Mnie nie obchodziło. Teraz mnie obchodzi.” Alternatywa: bilet leży w szafce u Very (L-02), co czyni radę wykonalną (list + klucz Very).

### DROBNE

#### L-18 · DROBNE · Elias wie więcej niż pozwala tabela §3.4
- d25: „Pan Holt mówił, że linia jest dla następnego… od lat pusta”; „zostałem, bo nie wypada odchodzić, kiedy ktoś ma wybierać”. v2 §3.4: „Elias nie wie niczego o łańcuchu”. Linia istnieje od T-5 tyg., nie „od lat”. **Poprawka:** tabela §3.4 → „Elias: wie od Sama, że linia jest dla następnego; nic więcej”. d25: „od lat pusta” → „od pięciu tygodni pusta”. Sam spisał Eliasa na posłańca „Pytaj o imiona” (zgodne z N5).

#### L-19 · DROBNE · Victor: trzy wersje motywu
- v1 §2.1/§motywy: dopisał pozycje „za przysługę Iris (awans)”; v3 d5 mini-karta: „na słowo Sama”; v2: neutralny, „widzi, że coś przechodzi”. v2 W4 („neutralny urzędnik”) nie unieważnia v1 jawnie. d23: „Kto czyta kopie, to nie moja sprawa. Ale każdy, kto płaci, ma dostęp” to cynizm, nie neutralność.
- **Poprawka:** Kanon: **Victor dopisał pozycje na słowo Sama, bo chciał zamknąć kwartalny audyt na czas** (wzorzec niedoborów w L-11 to widzi i przepuszcza). Skreślić „za przysługę Iris” w v1 §2.1/§motywy. Victor = urzędnik-oportunista, nie wróg i nie sprzedawca; w d23 zostawić cytat, doprecyzować: „Kancelaria wydaje wgląd każdemu” (L-13).

#### L-20 · DROBNE · Pokój i czynsz po wyburzeniu
- d8: pokój służbowy gracza idzie pod wyburzenie 24.; d18 „pokój służbowy do wynajęcia od zaraz”; d25 `zamknij`/Zostajesz: „czynsz zapłacony”. Dokąd? v2 §6 d8 obiecuje „osobisty hak: dokąd po 24?”. W zakończeniach nie ma odpowiedzi.
- **Poprawka:** Jedno zdanie w epilogach: Zostajesz/Referent: „Vera przeniosła Cię na zaplecze (pokój nad kasą zajezdni).” Wyrwana: „Pokój jest pusty. Ty też.” Rotacja/Odebrany: bilet = nowy adres. Nowy Sam: pudełko, brak adresu.

#### L-21 · DROBNE · „Kanał” (trzy znaczenia) i „Port”
- v2 używa „kanał” jako: ścieżka (kanał Skrytki umiera), kasetka ukryta w „kanale Skrytki” (v2 §3.2), kanał ściekowy (nr 4 „w kanale pod Portem”). Sam szuka pracy w porcie (d25), w miejscu, gdzie znaleziono nr 4.
- **Poprawka:** Rozdzielić: „kanał” = trasa; „kanał ściekowy” = „studzienka pod Portem”; kasetka „w skrytce w kanale” → „w skrytce pod schodami zajezdni”. Jeśli „Port” u Sama jest zamierzonym mrocznym echem, dopisać jedną ironię: „Zawsze wracam tam, gdzie ktoś mnie nie znalazł.” Jeśli nie, zmienić „kolega z portu” na „kolega z zajezdni towarowej”.

#### L-22 · DROBNE · Żetony: daty vs. kolejność finansowania
- Żetony = daty zamówienia (04/12, 05/17, 06/23, 07/31, 08/09). Odszkodowanie (źródło 6 800 $) przyszło T-3 mies., czyli ok. maja. Gus (04/12) zamówił dokument przed otrzymaniem pieniędzy. Iris d12/d9: „pięć osób, które już kupiły bilet”, a 0809 „nie płaci”.
- **Poprawka:** v2 §3.2: „Pierwszy dokument (Gus, 04/12) opłacony z kaucji; od maja pozostałe z odszkodowania.” W d12 Iris: „pięć osób” → „cztery osoby i jedno miejsce” (nie psuje wabika 0809 „jeszcze bez opisu”).
- Dodatkowo: piórnik ma 5 żetonów, a Skrytka działa 11 lat. v2 powinno powiedzieć wprost, że piórnik to **bieżący rejestr** (starsze rozliczone). Jedno zdanie w §3.2.

#### L-23 · DROBNE · d23: MEGA #1 spalone w `wejscie`
- d23 `wejscie` zawiera „Iris dodaje cicho: ‘Siedziałam w tym fotelu. Osiem lat temu.’”, a potem to samo jest w tym samym `wejscie_jesli` i jako odpowiedź na pytanie „Skąd wiesz, jak się naciska od środka?”. Zwrot „bije dwa razy”, a pierwszy raz bez pytania gracza.
- **Poprawka:** Usunąć zdanie z trzech `wejscie`/`wejscie_jesli` i z `wejscie` zostawić „Iris milczy dłużej niż zwykle.” Odpowiedź w turze 3 (na pytanie gracza) pozostaje.

#### L-24 · DROBNE · nr 1 wbrew kryterium; obiecane imię nie istnieje
- v2 §3.1: nr 1 = kobieta od męża („imię w zakończeniu Odebrany”). W v3 epilogu Odebrany imienia nie ma. A kobieta uciekająca przed mężem jest dokładnie osobą, której ktoś szuka; sprzeczność z kryterium.
- **Poprawka:** W tabeli z L-10 oznaczyć nr 1 jako „jedyny wyjątek od kryterium; tak narodziła się reguła”. Do ekranu końcowego Odebrany (v2 §10) dopisać pasek: „Nr 1: [imię z kasetki w szafce 0809]” albo usunąć obietnicę z §3.1.

---

## C. Wątki bez rozwiązania (sieroty)

| Wątek | Status | Rekomendacja |
|---|---|---|
| Dyżurny nr 1 (imię obiecane w Odebranym) | dziura | L-24 |
| Dyżurny nr 2 | celowa tajemnica (v2 §3.1 „nieznany”) | zostawić; Vera d24 „kartoników jest więcej, niż myślisz” to wystarczy |
| Dyżurny nr 4, „znaleziony w kanale” | dziura (brak przyczyny) | L-07 |
| Mąż Linh („że mąż ich znajdzie”) | dziura w v3: Linh jest w karcie „odnalezionych” (`min(4,N)`), mąż nie występuje | L-13: odnaleziona przez kancelarię, nie przez męża; zostawić jako otwarte |
| Gus Pell: „Poprzednim razem urzędnik wydał mnie z pieczątką. Z dwiema.” | niedomknięte; zapowiada, że wyciek kopii był znany wcześniej (Iris i Vera wiedziały) | dopisać w d24 Vera: „Gus już raz uciekał. Wiem, czemu nie ufamy drugiej kopii.” (domyka L-07/L-13) |
| Dorian Lund (0731, d16 „przechowaj do soboty”) | brak finału: nie wiadomo, czy odebrał | zdanie w wieczorze 17 lub karta Kopie |
| Kuba Marlow (300 $ + „nie ja go przysłałem”) | dziura: w żadnym zakończeniu | L-06: w Zostajesz/Referent „rata sobotnia zapłacona/niezapłacona”; Marlow jako wektor wyboru Very |
| Stahl „spisał, kto mieszka w twoim domu” (d22) | dziura | L-12: spisuje lokatorów Cooper 9, by znaleźć Mayę; pasuje do Z10 |
| Kit Navarro, kopiarnia, „szary płaszcz wrócił” | otwarta nić (to kopiarnia, gdzie Evan zamawiał ulotki) | celowa; opcjonalnie echo w Zaginiona C |
| Dario Ruiz (dług Sama 13 $, „czy Sam żyje”) | niedomknięte; Sam pojawia się d15 | jedna linia w d15/d20: Sam: „Dario, 13 $ jest u mnie.” |
| Hana Moreau, Mina i inni goście jednorazowi | celowo jednorazowi (v1 §10); §12 v2 już prosi o powiązanie z Q1-Q11 | zostawić |
| Thomas Ward (rękawiczka) | domknięty w d24 | OK |
| Leo, Vera, Iris po zakończeniach | brak epilogu | zostawić; wystarczy Elias i karta |
| Mina, Hana: brak wzmianki w dialogach d11-25 | celowo | zostawić |
| Sam bez biletu (patrz L-08) | dziura | L-08 |

---

## D. Przegląd kolejności zakończeń (v2 §10) — kombinacje flag

Kolejność: 1 Odebrany, 2 Wyrwana, 3 Rotacja, 4 Nowy Sam, 5 Referent, 6 Zostajesz. Wartości D7: wpisz_siebie, wyrwij, list, zamknij.
- `wpisz_siebie` → pomija 1, 2; trafia 3. Jedno zakończenie.
- `wyrwij` → 2. Jedno.
- `list` → 1 jeśli wszystkie warunki; w przeciwnym razie 3 (z dopiskiem). Jedno.
- `zamknij` → 4 (≥ 2 z trzech), inaczej 5 (Urząd ≥ 7 ∧ kopie ≥ 2), inaczej 6. Jedno.
- **Brak kombinacji trafiających w dwa lub w zero.** Pokrycie pełne z konstrukcji (kolejność + wyczerpujące D7).
- **Nieszczelności niewidoczne w logice flag, widoczne w treści:** L-04 (Zaginiona C, Skrytka B, kopie), L-05 (bilet vs 0913), L-15 (`notatki≥3` duplikat; `list` bez otwarcia szafki), L-16 (precedensja Nowego Sama v1 vs v2).
- **Warunek Odebrany niepokryty przez dialogi:** `D7=list` w d25 wymaga, żeby gracz mógł dopisać do listu, którego mógł nie otworzyć (L-15 c).

---

## E. Zweryfikowane OK

- Arytmetyka: 4 × 1 700 $ = 6 800 $; 14 × 400 $ = 5 600 $; kwoty zgodne między v2, d12, d23.
- Numeracja żetonów = daty mm/dd; 0809 = pon. 9.08 (dzień 1); 0517 Maya (d21), 0623 Linh (d12), 0412 Gus, 0731 Dorian zgodne z v2 i dialogami.
- Pięć notatek S.H. (N1 d1, N2 d6, N3 d10, N4 d15, N5 d20) istnieją w dialogach i składają się w pełny list z d24; kalka z szóstą linią zgodna między v2 §6 d15 a d15 v3.
- Vera 51 → 62 w 11 lat; Leo „od jedenastu lat” (d24) i Iris „osiem lat” (d23, karta rozliczenia sprzed ośmiu lat) są wewnętrznie zgodne.
- Podpis Very (pętla w „K”) potwierdzony w umowie d24; d1 i d10 nie sprawdzane w treści (patrz niżej).
- Kolejność sprawdzania zakończeń jest szczelna (część D).
- Motywacje: Evan (kontrola, zgłoszenie zaginięcia, mankiet), Lena (już zorganizowała przeprowadzkę bez wiedzy Mai, d16), Noah (zamknięcie sprawy, lęk przed zewnętrznym detektywem), Nora (dowód 400 $ i jej własny nieformalny odbiór) — wiarygodne i spójne między v1, v2 i dialogami.
- Vera jako architektka pasuje do „zaplecze, klucze, wstyd”: robi czyjeś miejsce, nie rękę; wstyd o kryterium jest właściwym wstydem.

## F. Nie sprawdzone

- `okienko_rozmowy_v3_dni1-10.md` w całości (tylko grep: d1, d4, d5, d9, d10 fragmenty); `CD2_master_prompt.md`; `MOMENTY.md` (tylko grep).
- d11-14 i d16-19 w dialogach: czytane punktowo (d15 Sam, d16 Maya, d18 Iris/Nora, d19 Leo).
- Czy nazwy akcji w JSON (S2, S4, P4, S6, P6, `wpisz_wykaz`, `przechowaj_bez_kwitu`) dokładnie odpowiadają tabeli `kopie` w LICZNIKI (przeczytałem LICZNIKI, nie porównywałem z każdą decyzją).
- Podpis Very w d1/d10 (pętla w „K”); prolog d1 (odcinek zamazany deszczem).
- Implementacja silnika (walidator flag, szarość przycisku `list`, `d24_list_luki`).
- Kalendarz sobót (14.08-11.09) względem dni tygodnia zgodny z v2, ale nie liczony niezależnie.
