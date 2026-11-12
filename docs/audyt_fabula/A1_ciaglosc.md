# A1: CIĄGŁOŚĆ, CHRONOLOGIA, LICZBY, DOWODY (audyt LOST & FRAUD / Okienko)

Zakres: fabula_25_dni.md (v1), fabula_25_dni_v2.md (v2), dialogi dni 1-10 i 11-25 (wszystkie 47 plików JSON sparsowane skryptem, referencje `wymaga`/`wejscie_jesli`/`ustawia` sprawdzone mechanicznie), LICZNIKI.md, okienko_obsada_i_kalendarz.md. Skróty: „d12_linh" = id dialogu, „v1 §x" = fabula_25_dni.md.

## 0. Mapa kalendarza (przyjęta do sprawdzenia)
Dzień n = n-ty dzień roboczy (pn-pt), soboty = rozliczenie bez wizyt. d1 pn 9.08; d5 pt 13.08 (sob 14.08); d6 pn 16.08; d10 pt 20.08 (sob 21.08); d11 pn 23.08; d12 wt 24.08; d15 pt 27.08 (sob 28.08); d16 pn 30.08; d20 pt 3.09 (sob 4.09); d21 pn 6.09; d22 wt 7.09 (!); d24 czw 9.09; d25 pt 10.09 (sob 11.09). 0913 = pn 13.09. Uwaga: v1/dialogi mówią „termin 22/24/25" jako NUMERY DNI, a dzień 22 to **wtorek 7.09** (nie 8.09), dzień 24 = czw 9.09, dzień 25 = pt 10.09. (Poprawka względem szkicu: d21=pn 6.09, więc d22=wt 7.09.)

---
## KRYTYCZNE

### C-01 Numery dni zapisane jako „dwudziestego drugiego/czwartego/piątego" kolidują z kalendarzem v2
- Miejsca: d3_maz_i_siostra wejscie „Dwudziestego drugiego policja zamyka sprawę"; d5_noah „Do dwudziestego drugiego"; d8 wieczor (extra) „lokatorzy mają czas do dwudziestego czwartego"; d8_lena_i_nora „termin do dwudziestego czwartego"; d12_iris_nora (Nora) „Mam czternaście rodzin i dwanaście dni"; d14_noah „dwudziesty drugi jest zakreślony na czerwono"; d15_sam „Referencje z portu mam do dwudziestego piątego"; d17_evan echo „do dwudziestego drugiego"; d18_* „dwudziesty czwarty podkreślony dwa razy"; wieczor d14 „podpis do dwudziestego drugiego".
- Problem: v2 §13 każe pokazywać graczowi datę dnia (pn 9.08 … pt 10.09). Zwykłe „dwudziestego drugiego" czyta się jako 22.08 (niedziela między d10 a d11: sprawa Mai zamknęłaby się, zanim gracz zobaczy d11), „dwudziestego czwartego" = 24.08 = wtorek d12 (w d12 Nora mówi o nim jako o przyszłości, w d18 jako nadal przyszłym), „dwudziestego piątego" = 25.08 (d13, przed d15 Sama). Wewnętrznie: d12 „dwanaście dni" pasuje do numerów dni (d12→d24), nie do dat.
- Poprawka: zamienić wszystkie na daty lub nazwy dni: „22" → „do wtorku 7 września" (Noah/Evan: „za pięć tygodni od zgłoszenia"); „24" → „do czwartku 9 września"; „25" → „do piątku 10 września". W d12: „dwanaście dni" → „dwanaście zmian" albo „do 9 września". Dotyczy też v1 §3,5,6,7 (zostawić numer dnia tylko w tekstach dla autorów) i tytułów decyzji (`rezerwacja_d22`, `zatrzymaj_do_15` są OK jako identyfikatory).

### C-02 Odjazd Mai „w poniedziałek o 6:10" jest niewykonalny, a d22 (Stahl) wskazuje inny termin
- Miejsca: d16_maya_lena wnetrze „Walizkę do czwórki, poniedziałek 6:10"; d16 wieczor „Walizka w poniedziałek"; d21 (walizka odbierana przy okienku wieczorem pn); d22_stahl wnetrze kwit „wydana wczoraj. Dalej: jutro 6:10, linia 4"; d22_stahl `stahl_wydaj` strata „jedzie za nią o 6:10 w poniedziałek" vs reakcja „Jutro, 6:10, czwórka".
- Problem: okienko pracuje wieczór-noc; walizka wydawana w d21 (pn wieczór) nie może jechać „w poniedziałek o 6:10" (to rano przed zmianą, a poprzednia zmiana to piątek). Jeśli jedzie we wtorek 6:10, to Stahl w d22 (wtorek wieczór) jest spóźniony i „jutro 6:10" jest fałszem. Sama d22 ma wewnętrzną sprzeczność („jutro" vs „w poniedziałek"; d22 to wtorek).
- Poprawka: ustalić odjazd Mai na **środę 6:10 (koniec zmiany d22)**. d16: „Walizkę odbieram w poniedziałek. Jadę w środę o 6:10." (wnetrze, tura3 Maya, wieczor kartka „Walizka w poniedziałek. Nie spóźnij się." zostaje jako odbiór). d22 kwit „jutro 6:10" OK; strata `stahl_wydaj`: „jedzie za nią jutro o 6:10". v1 §6 d16/d21 („dzień 21, godzina 6:10"; „Maya znika w tramwaju" w wieczorze d21) i v2 hak d16 poprawić tak samo.

### C-03 Opcje d18/d23 dostępne mimo że stan świata je wyklucza (oryginały już u Iris)
- Miejsca: d18_iris_nora decyzja `rezerwacja_nora` ma `wymaga=None`, a wejscie_jesli[d12:wydaj_iris] mówi „Kasetkę biuro wydało już jakiś czas temu"; d23_iris_nora_victor `wydaj_nora` ma `wymaga=None`, echo „Sąd przyjął oryginały", mimo `oferta_iris` („Oryginały odpływają bez śladu") i d12 `wydaj_iris`.
- Problem: v1 §8.2 wprost: „Opcja wydaj_nora w d23 jest zablokowana, gdy S6=oferta_iris albo S5=wydaj_iris"; v1 d23 „Odebranego oryginału nie da się wpisać do nowego depozytu". W dialogach nie ma blokady, więc gracz może wydać Norze oryginały, których nie ma, a echo to potwierdza.
- Poprawka: d23 `wydaj_nora`: `wymaga` = „d18_iris_nora:rezerwacja_nora" **i** brak `d12:wydaj_iris` (jeśli walidator nie ma negacji, dodać wymagane `d12_iris_nora:zabezpiecz|d12_iris_nora:sprawdz_z_nora`). d18 `rezerwacja_nora`: to samo wymaganie z d12. Przy zablokowanej opcji dać wariant „kopie z d8" (odpis), nie oryginał.

### C-04 Data rękawiczki Thomasa nie zgadza się z audytem Victora, wyrwaniem strony 41 i d24
- Miejsca: d1_thomas wnetrze „numer 0417, sprzed trzech tygodni… W księdze… w tym miejscu wyrwano stronę" + Q „Trzy tygodnie temu zgubiłem prawą"; d5_victor Q „Pięć tygodni temu dopisałem to ręką" (pozycje „prawa rękawiczka T. Ward"); d24_thomas Q „Ponad dwa miesiące temu"; d24_thomas `wpisz_wstecz` strata „wydanie sprzed dwóch miesięcy" vs echo Victora „wpis wsteczny, trzy tygodnie temu"; v1 §2.1 strona 41 wyrwana T-5 tyg.
- Problem: Victor 5 tygodni temu (≈5.07) nie mógł dopisać wydania, które nastąpiło 3 tygodnie przed 9.08 (≈19.07). Wydanie z 19.07 nie mogło być na stronie wyrwanej 5.07. d24 „ponad dwa miesiące" i echo „trzy tygodnie" kłócą się z d1 i ze sobą.
- Poprawka: d1 → „sprzed sześciu tygodni" (wnetrze i Q); wtedy wydanie (≈28.06) jest przed audytem T-5 i może być na str. 41, Victor dopisał je „pięć tygodni temu" poprawnie, d24 „ponad dwa miesiące" (≈10,5 tyg. do 9.09) OK. Echo Victora w d24 → „sprzed dwóch miesięcy". Sam „odszedł ponad miesiąc temu" (d10, d13, d15) zostaje prawdziwe.

### C-05 Odsłona „Siedziałam w tym fotelu" (MEGA #1) wypowiedziana przy Norze i Victorze, już w `wejscie`, i powtórzona
- Miejsca: d23_iris_nora_victor wejscie (4 warianty) „Iris dodaje cicho: „Siedziałam w tym fotelu. Osiem lat temu."" oraz tura3 Q „skąd wiesz, jak się naciska od środka?" („Siedziałam w tym fotelu. Osiem lat temu. Nikt mnie nie szukał…"); wnetrze d23_karta_rozliczenia „data sprzed ośmiu lat".
- Problem: v2 §8 d23: MEGA #1 pada „gdy gracz zostaje z nią sam". Tu pada w pierwszym zdaniu, przy świadkach (Victor, który wg v2 §3.4 „nie wie, że fotel to łańcuch"), a potem drugi raz w tura3 (zużyta puenta). Dodatkowo „Dlatego mnie wybrali" mówi o wybieraniu, zanim Vera się przyzna (d24), co jest zamierzone, ale przy Victorze zdradza łańcuch Urzędowi.
- Poprawka: usunąć zdanie z 4 wariantów `wejscie`; zostawić tylko tura3 i bramkować ją „po wyjściu Nory i Victora" (np. osobna tura 4 / pytanie dostępne po decyzji, albo scena „Iris zostaje sama": tekst `echo`/`reakcja` decyzji). Zostaje karta rozliczenia sprzed 8 lat jako trop rzeczowy.

---
## WAŻNE

### C-06 Kto co wie: Nora zna „cztery papiery za 6 800" zanim Iris to ujawni; kartka „6 800 / 4" w portfelu Rosy bez nadawcy
- d23_iris_nora_victor tura1 Nora: „Iris ma cztery papiery za sześć tysięcy osiemset." Iris dopiero w tura3: „Tysiąc siedemset za sztukę. Sześć tysięcy osiemset." v1 §2.4: Nora „Nie wie… że w obiegu jest Skrytka"; v2 §3.4 tak samo. d12 pokazuje tylko „6 800 $ od miasta" (bez „cztery papiery"). d23_rosa wnetrze „6 800 / 4… Nie jej pismo" w dniu, w którym liczbę ujawnia Iris: nikt, kto mógłby to napisać, nie jest wskazany.
- Poprawka: Nora tura1: „Iris ma jeszcze sześć tysięcy osiemset od miasta i nie wiemy, na co poszły." Rosa: albo usunąć trop, albo wskazać nośnik (np. kartka od Iris jako „tygodniówka", dopisać w odpowiedzi Rosy „pani Bell pisała mi rachunek"), albo przenieść „6 800 / 4" na kasetkę (d23_karta_rozliczenia).

### C-07 Kalka strony 41 zawiera numery, które nie mogły istnieć w dniu wyrwania; „linia 0809 od lat pusta"
- Miejsca: v2 §3.2 żetony = data zamówienia (07/31 Dorian, 08/09 gracz); v2 §3.3 strona 41 wyrwana T-5 tyg (≈5.07); d15 extra kalka „cztery pozycje klientów i czternaście wpłat… szósta zaklejona: „0809 / dyżurny nast."" ; d25_ksiega Elias „Linia 0809. Wąska, od lat pusta."
- Problem: żeton 0731 (zamówienie 31.07) nie mógł być na stronie wyrwanej 5.07; 0809 (data pierwszego dnia, która wynika z odpowiedzi na ogłoszenie z T-3 tyg) tym bardziej. „Od lat pusta" kłóci się z „linia dopisana T-5 tyg".
- Poprawka (najmniej kosztowna): przenieść żeton Doriana na datę <5.07 (np. 0702) we wszystkich miejscach (d9_iris, d16_dorian, v1/v2 tabele), a linię następcy zapisać w kalce jako „08__ / dyżurny nast. / ____" albo „____ / dyżurny nast." i numer 0809 dopisać na kartoniku/szafce dopiero w d24 (d24_kartonik: „0809" ołówkiem). d25 Elias: „od lat" → „od tygodni".

### C-08 v1 ↔ dialogi: godziny zgłoszenia i SMS
- v1 §2.1: Lena pisze „23:48", Evan zgłasza „w piątek o 6:10"; v1 §2.4 Noah: „22:15 vs 6:10". Dialogi: d3_maz_i_siostra wnetrze „czwartku, 21:48"; d5_noah wnetrze/d14_noah „Zgłoszenie… o 23:30" (czwartek).
- Problem: dwa kanony. W dialogach SMS (21:48) poprzedza ulotki (22:15) i zgłoszenie (23:30), w v1 jest odwrotnie. Dialogi są wewnętrznie spójne (d5, d7, d14, d17: ulotki 75 min przed zgłoszeniem, „Wiedział, że żona odeszła").
- Poprawka: zmienić v1 §2.1, §2.4, §6 d3/d5 na 21:48 / 22:15 / 23:30 (czwartek 5.08). Uwaga: Evan twierdzi „poszła do pracy i nie wróciła" (d3), więc zgłoszenie o 23:30 jest wczesne; to dobry tell, warto go nazwać w v1.

### C-09 v1 §2.1 i §8.2 (Skrytka, 6 800 $) kłócą się z v2 §3
- v1 §2.1: Skrytka T-7 mies. (Sam), Iris wchodzi T-6 mies. v2 §3.1: Skrytka 11 lat, Iris dyżurna nr 3 8 lat temu, Sam nr 5; dialogi idą za v2 (Vera/Leo „jedenaście lat", Iris „osiem lat temu", Elias d13 „Pan Holt nie miał nazwiska na karcie przez dwa lata").
- v1 §8.2: A „Iris podpisuje rozliczenie i oddaje 6 800 $", B „Victor… zajmuje 6 800 $ jako dowód", C „Iris zabiera… 6 800 $". v2 §3.2: 6 800 $ „wydała na ich papiery". Wydanych pieniędzy nikt nie odda ani nie zajmie.
- Poprawka: w v1 dodać baner „§2.1 pierwszy podpunkt (T-7/T-6 mies.) unieważniony przez v2 §3.1"; v1 §8.2: A „Iris podpisuje brakującą wpłatę i bierze dług na siebie", B „Victor zajmuje rejestr i dokumenty (nie gotówkę)", C „Iris wyjeżdża z tym, co jej zostało (kasetką i sobą)". d23 dialogi nie wymieniają 6 800 w echach, więc zmiana tylko w dokumentach.

### C-10 Depozyt „do soboty" i „jutro o 5:40" w d9 (chronologia d9-d13)
- Miejsca: d9_iris `depozyt` [„Zostaw piórnik w depozycie do soboty"] strata „jedna rodzina jedzie jutro o 5:40"; echo (za_dni 2): „jeden z moich ludzi ma jutro pociąg"; d12_iris_nora tura3 (wymaga d9:depozyt) „Do soboty żaden z czterech… jedna rodzina jedzie jutro o 5:40"; d12_linh Q „Pociąg jest jutro, depozyt do soboty".
- Problem: d9 = czw 19.08, „sobota" = 21.08, więc w d12 (wt 24.08) depozyt już wygasł; Linh jedzie dopiero w d13 (śr 25.08), nie „jutro" od d9/d11. v1 mówiło „do soboty 15" (= sob 28.08), co pasuje do d12, ale tekst dialogu tego nie mówi.
- Poprawka: d9 przycisk → „Zostaw piórnik w depozycie do soboty 28.08"; strata d9 → „w przyszłym tygodniu jedna rodzina jedzie o 5:40"; echo za_dni 2 → „jeden z moich ludzi ma pociąg we wtorek". d12 wersje OK po tej zmianie (tam „jutro" jest poprawne).

### C-11 Stan Mai niewłaściwie warunkowany (d16, d21, d22 Noah)
- d11 `powiadom_rodzine`: Maya „Wrócę już tylko po swoje rzeczy i bez słowa" (v1: Zaginiona C, bez rozmów). d16_maya_lena i d21_maya_lena_priya nie mają `wejscie_jesli`: Maya prowadzi pełne rozmowy z Leną, liczy „raz, dwa, trzy". d16 `lena_zalatwia` echo Mai „Nie w poniedziałek" a d21 ją pokazuje w poniedziałek. d21 `wiadomosc_zatwierdzona`: „Okienko wytrzymało trzy razy z rzędu" niezależnie od d11/d16 (maya_testy może być 1). d22_noah wnetrze (oświadczenie Mai z „zakresem zgody") i wejscie nie mają wariantu, a v1: koperta „pojawia się tylko, jeśli Maya zdecydowała się je dostarczyć".
- Poprawka: dodać `wejscie_jesli` w d16/d21 dla `d11:powiadom_rodzine` (Maya sama, krótko, bez Leny; pomija pytania o relacje) i `d16:lena_zalatwia`/`bez_decyzji` (Maya przychodzi, ale w d21 odmawia pośrednictwa); „trzy razy z rzędu" → warunek `maya_testy_2`, inaczej „Okienko wytrzymało." d22_noah: `wejscie_jesli` dla `d11:powiadom_rodzine` (koperty nie ma, sprawa zostaje otwarta).

### C-12 Stahl/d22: dowody bez źródła i niezgodność z Evanem
- (a) d22_stahl: Stahl zna opis „biała suknia, bilet i kartka z numerem" („od klienta, który ją pakował"). v2 §8: „opis zna od Evana", ale Evan nie widział biletu 0517 ani kartki (d21 „Wyjście. Raz."). Kwit „jutro 6:10, linia 4" (wnetrze d22_kwit_maya) nie powstaje w żadnej decyzji d21 (Maya odmawia podania adresu).
- (b) d17_evan wejscie „Jeśli policja nic nie ustali, wynajmę detektywa za tysiąc dwieście dolarów" vs Q „Zaliczka jest już zapłacona"; d22_stahl Q „Ponad miesiąc [szukam]"; Noah d14/d22: rodzina „może wynająć" dopiero po terminie. Stahl stoi w kolejce od d5.
- (c) d22_noah `zostaw_otwarte` echo (d24): „Dostałem wskazówkę z biura rzeczy znalezionych", także gdy w d22_stahl gracz wybrał `stahl_odeslij` (echo cudzej decyzji).
- (d) v2 §6 d17: Evan „Szary kapelusz. Mówią, że nie wygląda." (rozpoznanie Q8) nie występuje w d17_evan (jest tylko karta wieczorna bez identyfikacji).
- Poprawki: (a) wskazać źródło opisu: Lena (zna walizkę, pęka pod naciskiem) lub Evan + „bilet" usunąć z opisu Stahla; kwit: dodać w d21 reakcjach `wiadomosc_zatwierdzona`/`bez_posrednictwa` zdanie „Maya dyktuje: odbiór, jutro 6:10, czwórka" albo zmienić wnetrze d22 na „Rzecz: walizka szara, wydana wczoraj. Odbiorca: M.D." bez godziny (godzinę Stahl wywnioskuje innym tropem). (b) d17: „Detektyw ma już zaliczkę. Resztę, tysiąc dwieście, płacę, jak ją znajdzie." i Noah d14 „Evan już rozmawia z detektywem". (c) echo warunkować na `d22_stahl:stahl_wydaj`, w przeciwnym razie „Dokument właściciela mam. Wystawił go ktoś, kto nie powinien." (d) dopisać w d17_evan Q: „Czy ktoś Ci pomaga? Mężczyzna w szarym kapeluszu. Mówią, że nie wygląda na detektywa."

### C-13 Liczba rodzin i pokwitowań: 20 vs 14
- d4_iris tura2 „Dwadzieścia rodzin z kamienicy. Zbieram od nich zaliczki"; d8_lena_i_nora „znam z dwudziestu pokwitowań"; wszędzie indziej „czternaście rodzin" (d8, d12, d18, d23, v1, v2).
- Poprawka: d4 → „Czternaście rodzin"; d8 → „z czternastu pokwitowań". Dodatkowo d4: „zaliczki na remont" vs v1 „kaucja w nowych mieszkaniach": ujednolicić na „zaliczki na kaucję w nowych mieszkaniach".

### C-14 d25: echo `list` zawsze „Jak się nazywasz?"; epilogi_elias mają warianty
- d25_ksiega `list` echo „Jak się nazywasz?… Dziękuję, [imię]. Jutro." vs blok `epilogi_elias` (odebrany = to samo; rotacja_list_bez_warunkow = „pyta następcę o oprawkę"). `list` wymaga tylko `notatki_3`, więc Odebrany (też `maya_testy`≥2, `P4=uzgodnij`, Skrytka A/B) i Rotacja z listem dają ten sam echo-tekst.
- `wpisz_siebie` reakcja „Wpisane. Dziękuję" nie używa imienia z d20 (v2 §8: „Wpisz siebie (imię z d20)").
- v1 §8.6 (tabela) „zostaje" wg v2 §10, ale `epilogi_elias` pomija wiersze Poprzednik A/B/C i dla „Nowy Sam" ma „pyta o brakującą stronę" zamiast „Czy Sam już był?".
- Poprawka: `list` echo → bez słów Eliasa (przenieść do `epilogi_elias` wg warunków); `wpisz_siebie` reakcja: „Wpisane: {imię}."; dopisać do `epilogi_elias` wiersze v1 §8.6 lub jawnie je uchylić w v2.

### C-15 Nazwy akcji i flagi: niedopasowania i luki w mapowaniu zakończeń
- v1 §7 S8 `victor` vs dialog `wydaj_victor` (d23). v1 warunki zakończeń odwołują się do `victor`.
- Nowe akcje bez miejsca w v1 §7/v2 §9/LICZNIKI i w warunkach zakończeń: `d4/d5 potwierdz_wpis` (też „dwa egzemplarze": czy +kopie?), `d11 szept_lenie` (Maya traci ufność, v1 C nie wymienia), `d14 list_od_mai`, `d16 bez_decyzji`, `d22_noah przekaz_calosc`, `d19 sprostowanie_bez_ady` (czy liczy się jako S7=przyjmij_sprostowanie, v1 §8.2 A?), `d20 czesc_zeznan`, `d24_vera otworz_szafke`, `d25 zniszcz_kopie` (jest w LICZNIKI), `d12 wydaj_zapisz`, `d16 przechowaj_z_kwitem`, `d23 wez_500_iris` (jest w LICZNIKI).
- v2 §9 D4 (`zerwij_nalepke`/`zostaw`) w dialogach nie jest akcją, tylko sekretem `d15_szosta_linia` (extra kalka); to wymaga ustalenia po stronie silnika (LICZNIKI „Wątek gry").
- LICZNIKI: `przechowaj_bez_kwitu` figuruje tylko jako d24_leo, a istnieje też w d16_dorian (+bez_wpisu); `bez_wpisu` rośnie także przy d1 `wydaj_bez_wpisu`, d6 `wydaj_bez_wpisu`, d13 `wydaj_i_zniszcz_mandat`, d15 `przyjmij_bez_wpisu`: brak ich na liście.
- Poprawka: dopisać tabelę mapowania (akcja → flaga v1/v2 → licznik) w LICZNIKI; dla S8 przemianować w v1 na `wydaj_victor` (łatwiej niż w JSON).

### C-16 Karta „Kopie": liczba odnalezionych a lista nazwisk
- d25 extra `d25_karta_kopie`: „Klienci odnalezieni: {min(4, kopie)}" + lista „Linh, potem Gus i Dorian; Maya tylko wtedy, gdy nie została odebrana". Maya jest odebrana w każdej ścieżce d21, więc przy kopie ≥4 karta pisze „4" i pokazuje 3 nazwiska. Mapowanie N→nazwisko jest arbitralne (kopie rosną od S2/S4/P4/S6/P6, które z klientami nie mają związku, np. P6 dotyczy Sama i Eliasa).
- Poprawka: albo „min(3, kopie)", albo przypisać nazwiska do konkretnych akcji: Gus ← `S2 wykaz_paczke/potwierdz_wpis` i `S4 zetony_victor`, Linh ← `d12 wydaj_zapisz`, Dorian ← `d16 przechowaj_z_kwitem`, Maya ← `d22 stahl_wydaj`.

### C-17 Stan akcji d5 `wykaz_paczke`/`potwierdz_wpis` a `koperta`
- d5_victor: `wykaz_paczke` wymaga `d4:odmow_zglos`, `potwierdz_wpis` wymaga `d4:rejestr`; po `d4:koperta` jest tylko `spis_bez_paczki`. v1 §7 S2 (`wykaz_paczke`/`spis_bez_paczki`) i warunek Skrytka B („`S2=wykaz_paczke`") zakłada wybór niezależny. To zgodne z logiką (paczka w depozycie vs wpisana vs poza księgą), ale kopie i warunek B zależą od `d4`; udokumentować w v1 §7 oraz sprawdzić, że po `d4:rejestr` Skrytka B nadal osiągalna (`potwierdz_wpis` ≠ `wykaz_paczke`).

---
## DROBNE

### C-18 Echa i terminy „sobotnie" w dniach bez wizyt
- d1_thomas `wydaj` echo za_dni 2 (d3, śr 11.08): „W niedzielę pojechałem z Claire na cmentarz" (niedziela 15.08 jeszcze nie było) → za_dni 6.
- d2_hana `wydaj` echo za_dni 2 (d4): „W poniedziałek komisja przedłużyła" (pn 16.08) → za_dni 4; wnetrze „skończyło się wczoraj" vs Hana „termin minął w sobotę" (7.08, 3 dni) → wnetrze „w sobotę".
- d16_dorian: „przechowaj do soboty… Przyjdę w sobotę"; v obsada: soboty bez wizyt; echo za_dni 4 = d20 (pt 3.09), przed sobotą 4.09 → zmienić na „do piątku", echo OK.
- d7_kit Q „zamówienie z zeszłego tygodnia" (czwartek 5.08 jest w tygodniu sprzed poprzedniego od wt 17.08) → „sprzed dwóch tygodni".
- d11_grace: „Nocki od dwudziestej" vs „O szóstej muszę wejść na oddział" (po zgubie o 0:30) → „Poranna zmiana od szóstej".
- d22_noah: echo d14 „dwudziestego drugiego rano sprawdzam" vs d22 „Dziś do osiemnastej" → „dwudziestego drugiego do osiemnastej".

### C-19 Kwoty i arytmetyka
- OK: 4×1 700 = 6 800; 14×400 = 5 600; 3×43 = 129 i 129−20 = 109; portfel Rosy 2×20+2×10 = 60; Gus 2×100+50 = 250; rata 60 ×5 = 300; 120 „prawie czynsz" (150), 400 „prawie trzy czynsze" (450), 80 „ponad pół czynszu".
- d18 wieczor Marlow: „Trzysta dolarów. Równo tyle, ile jesteś mi winien" (po trzech sobotach rat 60 zostaje 120) → „Trzysta. Tyle, ile byłeś mi winien na początku."
- d3 `wez_100_evan` zysk „większość raty dla Kuby" (100 > rata 60) → „więcej niż rata". d18 `oferta_iris` „spłacasz większość długu" przy długu 300 i ofercie 300 → „spłacasz cały dług (jeśli nie spłaciłeś go ratami)".
- d22_jonah: rata „dziewięćdziesiąt" vs „trzysta sześćdziesiąt… sześć sobót" (360/90 = 4); `wez_90_marlow` zysk „o jedną ratę" → rata 60 albo „cztery soboty".
- d13 Elias „cztery tygodnie po dwadzieścia jeden dolarów" = 84, nie 85 → „po dwadzieścia jeden i jeden dolar ekstra" lub „84 i grosze" albo „odkładałem po dwadzieścia dolarów, resztę dołożyłem".
- Pensja: v1 §3 „40 $ za wizytę"; dialogi mają 2 wizyty/dzień, obsada 5-7 wizyt. Przy ≥2 wizytach/dzień wypłata tygodniowa ≥400 $ >> czynsz 150 + rata 60; teksty „120 $ prawie czynsz" tracą sens kasowy. **Nie sprawdzone w silniku**; do ustalenia: stała wypłata/ liczba wizyt.
- Marlow (300 $, rata 60) nie występuje w v1/v2/obsada (tylko w dialogach). Dodać do kanonu.

### C-20 Wiek, drobiazgi
- Noah „42" (d5, v1, obsada) vs „41" (d14, d22) → 42.
- d14_billie „rocznik 2009" przy „szesnaście i pół" wymusza rok gry ≥2025/2026; pn 9.08 wypada w 2021 i 2027, więc wiek się nie zgadza → usunąć „rocznik".
- d12 Ada „tę zacinającą się szufladę… kopnąć w lewy róg": niejasne, czy to szuflada w biurze (v2 §6 d12 mówi o szufladzie, którą Iris otwiera w biurze) czy w kuchni Iris; doprecyzować „w biurze".
- d3_dana: „W gazecie ciągle to samo ogłoszenie" już w d3 (v2: dopiero d5, Elias „Ciągle to samo").
- d5_gus wnetrze sekret `d5_gotowka_400` (treść: 250 $) → przemianować `d5_gotowka_250` (id widoczne w `wymaga` decyzji).
- d9_iris Q: „Nie zadaję takich pytań, kiedy ktoś płaci" o 0809, a 0809 „nie płaci" (v2 §3.2): zmienić na „kiedy ktoś ma papier".

### C-21 Teczka/szafka Sama: kierunek i numeracja
- v1 §2.1: Vera zostawia pustą teczkę w szafce Sama; d10_vera: „Sam… prosił: trzymaj, aż wrócę"; d24_vera: „Sam zostawił mi pustą teczkę"; d25_sam_elias: „Dlaczego zostawiłeś Verze pustą teczkę?". Kierunek niespójny (Vera→Sam vs Sam→Vera).
- Szafka Sama (d10, „zamykają w piątek", karta szuflady „6") a „szafka 0809… od zawsze zajęta" (d24, v2 §8): niejasne, czy to ta sama. Numer 0809 jako numer szafki „od zawsze" kłóci się z numerem = data pierwszego dnia gracza.
- d24_vera Q „Skąd masz ten kartonik? Z szuflady numer sześć… wzięłam wczoraj": gracz otwierał szufladę 6 w d15 i kartonika nie widział (extra d15 go nie zawiera).
- Poprawka: d24: „Zostawiłam w jego szafce pustą teczkę, żeby była zajęta" (Vera) i Sam d25: „Bo ktoś musiał zostawić coś nikomu" (zostaje), ale bez „zostawiłeś Verze". Kartonik 0809: dodać do extra d15 (kartonik w szufladzie 6, nieodczytany) albo Vera: „Kartonik Sam zostawił u mnie".

### C-22 Podpis Very (pętla w „K")
- v2 §13: „pętla w K" w grafice umowy (d1), pokwitowaniu pudełka (d10), umowie (d24). Dialogi: d1 prolog „Podpisana nieczytelnie" (bez K), d10 tylko w reakcji `pokwituj_osobista` („tutaj, przy K"), d24_umowa ✓ („pętlą w literze K"). Dwie z trzech opcji d10 nie dają nośnika trop Q7.
- Poprawka: dodać do d10 wnetrze zdanie „Na pokwitowaniu przyjęcia pudełka podpis V. Kovacs z pętlą w K" (niezależnie od wyboru) i do prologu d1 „z pętlą w literze K".

### C-23 d25: drobne niespójności
- d25_sam_elias wejscie „Elias z pytaniem, czy Sam już się odezwał" przy Samie stojącym obok, a Elias rozmawiał z Samem w d15/d20 (d20: „Przyszedłem z panem Holtem") → „czy Sam już wyszedł".
- v1 §6 d13 „po dniu 13 pytanie zmienia się na „Czy Sam już był?"": w dialogach Elias nadal pyta o oprawkę (d16, d18 „Nawyk", d21), a „Czy Sam już był?" tylko w epilogu; uchylić w v1.
- d25_ksiega wnetrze „Tuszem w rogu: „0913"" widoczne przed wyborem (spoiler zakończenia Rotacja, v2 §10 ma to na końcowym słupie). Przenieść do sceny końcowej.
- v2 §8 d25 „Iris czeka na peronie 5:40 z biletem": brak w dialogach (tylko w tekście `wpisz_siebie` zysk).
- d24_vera: v2 chce wyznania „po dopytaniu, trzy pytania"; dialog daje je w `wejscie` i powtarza w tura3 (to samo zdanie dwa razy). Przenieść `wejscie` na „Mam kartonik i jedną rzecz do powiedzenia."

### C-24 Obsada vs dialogi: brakujący goście
- obsada: Noah d10, Vera d13, Leo d13, Nora d24, Victor d15; v1 d13 „Leo i Vera potwierdzają, że paczka jechała w jednym kursie" (drugie źródło oprawka→Skrytka). W dialogach ich nie ma; oprawka łączy się ze Skrytką tylko przez „numer paczki zgadza się z wykazem z piórnika" (piórnik ma tylko żetony). Dodać jedną linię Leo w d13 lub zmienić wnetrze d13.

---
## ZWERYFIKOWANE OK (sprawdzone i zgodne)
- Kalendarz: d1 = pn 9.08; soboty 14.08/21.08/28.08/4.09/11.09 po d5/10/15/20/25; d25 = pt 10.09; 0913 = pn 13.09; Hana „7 sierpnia" = sobota; d2 „10 sierpnia"; d17 „sprzed dwudziestu sześciu dni" = czw 5.08; Noah d22 „czwartek sprzed pięciu tygodni"; Vera d10 „przyszły piątek" = d15; Victor „pięć tygodni temu" = audyt T-5.
- Kwoty: 4×1 700 = 6 800; 14×400 = 5 600; 3×43; 2×100+50; 2×20+2×10; 85 $ = ok. ⅕ z 410 $; rata 60 ×5 = 300.
- Żetony vs piórnik d9: 0412 Gus (ojciec z dzieckiem, zdjęcie córki), 0517 Maya (kobieta z walizką), 0623 Linh (matka z synem), 0731 Dorian (kasetowiec), 0809 „jeszcze bez opisu"; d21 bilet 0517 pasuje do v1 §2.3.
- Notatki S.H. N1-N5 realizują v2 §6: d1 kwit 0417, d6 puszka (extra), d10 wieko, d15 termos, d20 odcinek zegarka; tekst listu w d24_list_pelny identyczny z v2 §8.
- Kalka z 6 liniami (d15 extra, szósta zaklejona, ołówek Sama), pole imienia D5 w d20 (`pole: imie` w trzech decyzjach), Stahl d22 z `stahl_odeslij`/`stahl_wydaj`, D7 z czterema gestami i nazwami zgodnymi z v2 §9, karta Kopie, `epilogi_elias` istnieje.
- Walidacja mechaniczna: wszystkie odwołania `wymaga`/`wejscie_jesli` wskazują istniejące decyzje i sekrety; 8 flag `ustawia` jest konsumowanych; odwołania „w przód" wyłącznie w obrębie tego samego dnia (d5 Victor→Gus, d10 Vera→Dario, d23 Iris→Rosa).
- Ukryte metadane z v2 §12 („test inspekcji", „kontroler") nie występują w polach widocznych; brak form „pan/pani" i rodzajowych wobec gracza.
- Imiona i wiek (poza Noahem) zgodne z obsadą; „jedenaście lat" (Vera, Leo), „osiem lat" (Iris) spójne między dialogami a v2 §3.

## NIE SPRAWDZONE
- Model ekonomii w silniku (wypłata za wizytę, rata Marlowa jako mechanika).
- Czy silnik wspiera negację w `wymaga` (C-03), czy `extra` (d24 szafka) jest dostępne bez `otworz_szafke`.
- Grafiki (podpis Very, „W7" piórnik, odcinek z zamazanym numerem), prolog w NG+, `ostatni_list`, pasek „Zabrakło".
- Zgodność warunków zakończeń z flagami po stronie kodu (sprawdziłem tylko dokumenty i nazwy akcji).
- Dokładne brzmienie wszystkich 156 `echo` pod kątem warunków wejścia (sprawdzone wyrywkowo: d1-d3, d8-d10, d16-d25).
- MOMENTY.md i CD2_master_prompt.md (poza zakresem).
