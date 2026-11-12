# A2: audyt z perspektywy gracza (LOST & FRAUD / Okienko, dialogi v3 + fabuła v2)

Zakres: tylko to, co gracz widzi w dialogach (`okienko_rozmowy_v3_dni1-10.md`, `dni11-25.md`): `rzecz`, `wejscie`, pytania i odpowiedzi, `wnetrze.co_widac`, etykiety decyzji, echa, karty wieczorne (`wieczor`), `prolog`, `extra`. Fabuła v1/v2 służyła tylko do porównania („deklaruje, ale nie ma w dialogach").

Założenia robocze (do potwierdzenia w silniku):
- `wnetrze.co_widac` = widoczne po zajrzeniu do rzeczy (akcja opcjonalna, „miękka" bramka). `wymaga` na decyzji / `wejscie_jesli` / liczniki (`kopie_2`, `maya_testy_2`, `notatki_3`) = „twarda" bramka.
- Pole `co_z_tego_wynika` traktuję jako wniosek pokazywany graczowi (jeśli nie jest pokazywane, kilka tropów poniżej słabnie dodatkowo).
- Pola `glos` i `typ` traktuję jako notatki autorskie. Jeśli UI je pokazuje, część z nich spoileruje (patrz G-27).

---

## 0. Mapa odsłon na osi dni (licznik wzmianek w widocznym tekście; 0 = martwy dzień dla wątku)

| Dz. | Zagin. | Skrytka | Poprzednik | Victor | Stahl | Fotel/gracz |
|---|---|---|---|---|---|---|
| 1 | 0 | 13 | 5 | 0 | 0 | 2 |
| 2 | 1 | 1 | 1 | 0 | 0 | 2 |
| 3 | 37 | 0 | 0 | 0 | 0 | 1 |
| 4 | 0 | 34 | 2 | 1 | 0 | 0 |
| 5 | 19 | 24 | 8 | 28 | 1 | 3 |
| 6 | 0 | 12 | 3 | 2 | 0 | 1 |
| 7 | 26 | 0 | 0 | 0 | 0 | 0 |
| 8 | 18 | 32 | 1 | 0 | 0 | 2 |
| 9 | 0 | 46 | 1 | 42 | 16 | 1 |
| 10 | 0 | 0 | 44 | 5 | 0 | 0 |
| 11 | 24 | 16 | 1 | 0 | 0 | 2 |
| 12 | 1 | 61 | 5 | 7 | 0 | 9 |
| 13 | 0 | 12 | 17 | 1 | 0 | 4 |
| 14 | 22 | 0 | 0 | 0 | 2 | 3 |
| 15 | 0 | 8 | 27 | 16 | 0 | 2 |
| 16 | 34 | 6 | 1 | 0 | 0 | 1 |
| 17 | 22 | 0 | 1 | 0 | 5 | 0 |
| 18 | 0 | 38 | **0** | 7 | 0 | 2 |
| 19 | 0 | 16 | **0** | 1 | 0 | 2 |
| 20 | 0 | 0 | 26 | 18 | 0 | 4 |
| 21 | 40 | 4 | 1 | 0 | 0 | 4 |
| 22 | 20 | 0 | 1 | 2 | 13 | 3 |
| 23 | 0 | 60 | 0 | 34 | 0 | 7 |
| 24 | 0 | 27 | 43 | 10 | 1 | 9 |
| 25 | 1 | 9 | 36 | 23 | 0 | 15 |

Dni martwe (>3 dni bez ruchu): Poprzednik d16-d19 (4 dni, zero postaci Sama/Very w dialogach; jedyny ślad to karty Eliasa); Stahl d10-d13 i d18-d21 (po 4 dni); Skrytka i Zaginiona bez przerw >3 dni (Zaginiona: d18-d20 dokładnie 3 dni i d23-d25 w ogóle bez sceny, same echa).

---

## A-D. Wątki

### Zaginiona (Maya / Evan / Lena / Noah)
**A. Hak d1-3: 3/3.** d3, `d3_maz_i_siostra`: „Oboje przyszliśmy po telefon Mai, która zaginęła w czwartek… Dwudziestego drugiego policja zamyka sprawę.” + Lena: „Ona nie gubi rzeczy. Zostawia je tam, gdzie ktoś je przechowa i nie zapyta, po co.” + Evan: „sto dolarów od ręki, i nikt nie musi tego wpisywać.” Dwie sprzeczne wersje, termin, łapówka. Gracz chce wiedzieć, kto kłamie. (Dodatkowo d2 `extra` szalik M.D.: wcześniej, ale tylko po zajrzeniu.)
**B. Eskalacja:** d2 szalik (nazwisko, bilet imienny); d3 telefon, SMS „Nie wracaj do domu” (po zajrzeniu), oferta 100 $; d5 Noah: ulotki 22:15 vs zgłoszenie 23:30, termin 22; d7 Kit (ulotki), Evan (dwa klucze, nr 14, linia czwórki); d8 torba, „elektryczka na Cooper 9” (most do Skrytki); d11 Maya żyje, trzy warunki (przewrót: ofiara jest podmiotem); d14 oświadczenie do podpisu, detektyw 1200 $; d16 drugi test, „poniedziałek 6:10”; d17 list Evana sprzed 26 dni; d21 trzeci test, bilet 0517; d22 Noah „zakres zgody” + Stahl. Każda odsłona zmienia wiedzę lub stawkę, z jednym wyjątkiem: fakt „ulotki 22:15” pada **pięć razy** (Kit d7 bez bramki, Noah d5, Evan d7, Noah d14, Evan d17 po zajrzeniu). Po d7 gracz nie dowiaduje się nic nowego o Evanie aż do d17 (G-19). Luki: d9-10, d12-13, d18-20, d23-25.
**C. Wypłata:** częściowo pokazana. Pożegnanie Mai jest sceną (d21: suknia, bilet, szept). Konsekwencja Stahla (jedzie za nią o 6:10) i los Mai są tylko echami (d22: „Detektyw wie, którą linią i o której”). Maya nie pojawia się po d21; pocztówka „Odebrane.” z v2 §10 nie istnieje w danych dialogów (G-17).
**D. Składalność:** 3/3. „Maya odeszła sama” składa się z ≥4 niezależnych źródeł bez bramki (Lena d3, Noah d5, Kit d7, Maya d11). Dead-endów brak.

### Skrytka (Iris / Nora / Victor / żetony / Okoye / Linh / Gus / Dorian)
**A. Hak d1-3: 1/3.** Tylko drobna wredota: d1 `d1_rosa`: „Iris skreśliła całą noc, nie połowę” (po zajrzeniu) i bez bramki „Iris liczy za to dwadzieścia dolarów kary”; d3 Dana: „W gazecie ciągle to samo ogłoszenie, że szukają kogoś do nocnego okienka.” Pierwsze **pytanie-zagadka** to dopiero d4 (`d4_iris`: kłamstwo o kasetce + „brzeg paszportu z wyciętą stroną” po zajrzeniu).
**B. Eskalacja:** d4 kasetka/paszport/koperta 120 $; d5 Gus (dwa dowody, 5:40); d6 puszka (Ada, Leo, „Nie ufaj drugiej kopii”); d8 torba/aparat Okoye (14 rodzin × 400 $); d9 piórnik z żetonami („czterech ludzi kupiło bilet”); d11 Grace; d12 oryginały + 6 800 $ + Linh; d15 kalka (cztery pozycje + 14 wpłat); d16 Dorian 0731; d18 Iris/Nora (oferta 300 $, groźba pokojem); d19 Kofi (trasa paczek, „jasne rękawiczki”) + Ada/Leo; d21 bilet 0517; d23 finał; d24 wykaz 0809. Każda zmienia wiedzę lub stawkę. Luki ≤2 dni (d7, d10, d14, d17, d20, d22 po jednym).
**C. Wypłata:** pokazana. d23: Iris mówi wprost (cztery papiery, 6 800 $, „Albo oni, albo my”), trzy decyzje. Losy czworga klientów pokazane echami w czasie (Gus d9 pocztówka, Linh d16, Dorian d20, Maya d21). Słabość: mechanizm krzywdy rodzin jest niezrozumiały (G-12).
**D. Składalność:** 2/3. „Iris przemyca ludzi za pieniądze” składa się bez bramek: Iris d9 „czterech ludzi kupiło bilet”, Iris d12 „papiery pięciu osób, które już kupiły bilet”, Kofi d19 „ktoś gdzieś dostaje z niej nowe życie”, Iris d23 „Tysiąc siedemset za sztukę”. Wyznanie „Papier na nowe życie… Biorę za to pieniądze” (d9) jest za bramką `d9_zetony_numery`, ale d9/d12/d19/d23 je zastępują, więc nie ma dead-endu. Problem składalności to liczby i model żetonów (G-12, G-13).

### Poprzednik (Sam / Elias / Vera / Leo / strona 41)
**A. Hak d1-3: 2/3.** d1 `d1_thomas`, po zajrzeniu: „Prawa wydana bez wpisu. Lewa czeka. S.H.” + „w tym miejscu wyrwano stronę”. Bez bramki: etykieta decyzji „Wydaj bez wpisu, tak jak zrobił to Sam” oraz karta d2 („czy poprzedni pracownik zostawił jakąś notatkę”). Brak: **„strona 41” nie pada w żadnym tekście d1-14** (G-03).
**B. Eskalacja:** d1 kwit; d2 karta Eliasa; d4 Iris „Poprzednik nie wpisywał i wszystkim było wygodnie”; d5 Victor „jedna rękawiczka bez księgi”; d6 puszka S.H.; d10 Vera + Dario („Czy on żyje?”) + pudełko „Teczka jest pusta”; d11 Maya „Tamten też nie wiedział, co z nimi zrobić, a siedział tu dłużej”; d13 Elias o karcie Sama; d15 Sam; d20 „jak cię zapisać?”; d24-25 list, kartonik, księga. **Dziura d16-d19** (4 dni), potem d21-d23 prawie nic (3 dni).
**C. Wypłata:** pokazana (d24 Vera/kartonik, d24 Thomas, d25 Sam/Elias/księga). Pełny list Sama jest za licznikiem `notatki_3`; wersja z lukami zjada akurat zdanie „Twoja linia” (G-08).
**D. Składalność:** 2/3. Notatki N1-N5 leżą w pięciu osobnych `wnetrze` (zajrzenie opcjonalne). Gracz, który zajrzy do ≤2, dostaje list z lukami i traci przycisk „Zostaw list” oraz zakończenie Odebrany bez zamiennika w tekście; same dialogi finałowe (Elias d25) tłumaczą jednak sens linii 0809 bez bramki, więc to dead-end nagrody, nie wiedzy.

### Fotel (zwrot; gracz = szósty dyżurny)
**A. Hak d1-3: 2/3.** Prolog (d1): „Numer na twoim odcinku rozmył deszcz.” oraz „Karta pracownika: stanowisko „dyżurny”, pole nazwiska puste.” Karta d2 (Marlow): „Nie wiesz, skąd wiedział, gdzie mieszkasz.” Dana d3: „ciągle to samo ogłoszenie”. Jest osobisty niepokój, ale **nie ma sformułowanego pytania do rozwiązania** (kim jestem dla nich, czemu „bez referencji”); numer 0809 gracz zobaczy dopiero w d9 przez zajrzenie (G-01).
**B. Eskalacja:** prolog d1; Dana d3; Elias d5 („Ciągle to samo”); Iris d4 („nowi zwykle odchodzą w pierwszym tygodniu”, za bramką); Ada d6 „Nad nami mieszka nowy, w jego pokoju jest zimno”; Elias d6 „jak nazywa się osoba za szybą”; Evan d7 „każdy ma nazwisko na karcie, a tu pusto”; karta d8 „Twój pokój służbowy jest pod tym samym adresem”; d9 żeton 0809; Maya d11; Ada d12 szuflada; Elias d13; Noah d14; d15 szósta linia; d18 słup „Pokój służbowy do wynajęcia od zaraz. Bez referencji.”; Sam d20; Maya d21; Iris d23; Vera d24; Elias d25. Rytm równy, luki 1-2 dni. 
**C. Wypłata:** pokazana głównie dialogiem (Iris d23 WEJ, Vera d24 tura3, Elias d25), plus rzeczy (kartonik, umowa z pętlą K, wykaz 0809, księga 0913). Finałowy wybór D7 jest semantycznie niejasny (G-02).
**D. Składalność:** 2/3. Bez bramek gracz dostaje: Iris „Siedziałam w tym fotelu. Osiem lat temu.” (WEJ d23), „nie z mojej ręki, dopóki ktoś nie usiądzie” (d23), Vera „To ja wybieram… Wybieram tych, których nikt nie szuka” (d24), Elias „jest tylko jedna osoba po tej stronie szyby” (d25). To wystarcza, by złożyć „jestem następny w łańcuchu”. Za bramkami: 0809 (d9, d15), pętla K (d24 `d24_umowa`), „Lewa czeka” (d1), pełny list.

### Stahl (detektyw)
**A. Hak d1-3: 0** (pierwsza wzmianka d5, karta: „Mężczyzna w szarym kapeluszu… nic nie powiedział”). Hak właściwy: d9 (`d9_stahl`: „Opis mam bardzo dokładny… Lubię patrzeć na ludzi przy pracy”).
**B. Eskalacja:** d5 karta; d9 scena (kłamie o rozmiarze 58 vs 56, inicjały J.K.); d14 Noah i d17 Evan zapowiadają detektywa 1200 $; d17 karta (kapelusz, Evan patrzy); d22 Noah („człowiek w szarym kapeluszu… przeczyta wszystko”); d22 Stahl; d24 Leo („człowiek w szarym kapeluszu… patrzy na każdą torbę”). Luki d10-13 i d18-21.
**C. Wypłata:** słaba. Brak sceny po d22; echo „Dokument właściciela mam. Wystawił go ktoś, kto nie powinien.” (po `stahl_odeslij`) nigdy się nie wyjaśnia (G-22). Domknięciem jest tylko karta Kopie.
**D. Składalność:** 2/3. Tożsamość „Stahl = detektyw Evana” wynika z d14/d17 (detektyw) + d22 (Stahl: „Ponad miesiąc” szukam, „nie podaję, kto płaci”). Brak kwestii łączących kapelusz z detektywem w d17 (G-21).

### Victor
**A. Hak d1-3: 0** (pierwszy raz d5, `d5_victor`: „kto cię tu skierował? W aktach nie widzę skierowania.” – bez bramki; to jedyny hak).
**B. Eskalacja:** d5 teczka, dopisek „innym tuszem”; d9 „Drugi egzemplarz do Urzędu”; listy V.C. jako echa; d15 zatwierdzenie; d18 `do_kontroli`; d20 „zmęczeni mówią prawdę”, 3:00; d23 „każdy, kto płaci, ma dostęp”; d25 zamyka audyt. Luka d10-d14 (5 dni bez sceny, tylko echa-listy).
**C. Wypłata:** d23 (bez bramki) „Dla Urzędu. Kto czyta kopie, to nie moja sprawa. Ale każdy, kto płaci, ma dostęp.” To jest domknięcie neutralności. Brakuje konkretnego przypadku wycieku, który gracz widzi (G-07).
**D. Składalność:** 2/3. Tusz z d5/d15 („innym tuszem”) to osierocona nitka (G-23).

---

## E. Uczciwość zwrotu „Fotel”: tropy d1-22 faktycznie obecne w dialogach

| # | Trop (cytat ≤15 słów) | Dzień/id | Widoczny? | Uwagi |
|---|---|---|---|---|
| 1 | „Numer na twoim odcinku rozmył deszcz.” | d1 prolog | tak, bez bramki | |
| 2 | „stanowisko „dyżurny”, pole nazwiska puste” | d1 prolog | tak | pole nazwiska wraca 6 razy (v2 §12 chciało 2) |
| 3 | „ciągle to samo ogłoszenie, że szukają kogoś do nocnego okienka” | d3 Dana | tak (tura2) | |
| 4 | „Ciągle to samo”, kontakt „zaplecze tramwajowe, wejście od podwórza” | d5 karta | tak | |
| 5 | „nowi zwykle odchodzą w pierwszym tygodniu” | d4 Iris | **za bramką** `d4_blankiet_kasetka` | |
| 6 | „Poprzednim razem urzędnik wydał mnie z pieczątką. Z dwiema.” | d5 Gus | tak | trop „druga kopia” |
| 7 | „Nie ufaj drugiej kopii. S.H.” | d6 extra puszka | po zajrzeniu | |
| 8 | „Nad nami mieszka nowy, w jego pokoju jest zimno.” | d6 Ada | tak | |
| 9 | „jak nazywa się osoba za szybą” | d6 karta | tak | |
| 10 | „U nas w firmie każdy ma nazwisko na karcie, a tu pusto.” | d7 Evan | tak | |
| 11 | „Twój pokój służbowy jest pod tym samym adresem.” | d8 karta | tak | |
| 12 | „Pokwitowanie w dwóch egzemplarzach, jeden do Urzędu.” | d9 Victor | tak | |
| 13 | „czterech ludzi kupiło bilet” | d9 Iris | tak | |
| 14 | żeton 0809 „jeszcze bez opisu” | d9 wnetrze | **za zajrzeniem** | pytanie o „piąty żeton” bez bramki, ale bez numeru |
| 15 | „Zaplecze tramwajowe, pudełko z szafki, Vera Kovacs.” | d10 WEJ | tak | spina Verę z ogłoszeniem |
| 16 | „Teczka jest pusta. Tak ma być. S.H.” | d10 wnetrze | po zajrzeniu | |
| 17 | „Tamten też nie wiedział, co z nimi zrobić, a siedział tu dłużej.” | d11 Maya | tak | |
| 18 | „otwiera tę zacinającą się szufladę bez patrzenia” | d12 Ada | tak | szuflada nigdzie wcześniej nie pokazana (G-15) |
| 19 | „Pan Holt nie miał nazwiska na karcie przez dwa lata.” | d13 Elias | tak | |
| 20 | „Zapisuję: dyżurny, bez nazwiska.” | d14 Noah | tak | |
| 21 | „0809 / dyżurny nast. / ____” | d15 extra kalka | po zajrzeniu | |
| 22 | „Wybieraj: oni albo ja.” + „nie ufam drugiej kopii” | d15 Sam | tak | |
| 23 | „Pokój służbowy do wynajęcia od zaraz. Bez referencji.” | d18 karta | tak | trop wymiany dyżurnego |
| 24 | „pokój służbowy też bywa wypowiadany” | d18 Iris | tak | |
| 25 | „Kobieta w jasnych rękawiczkach. Nigdy nie dotykała mojej ręki” | d19 Kofi | tak | związek z Iris tylko w `glos` |
| 26 | „Do mnie, kiedyś. Dziś do ciebie.” | d20 Sam | za zajrzeniem | tu notatka jest już jawnie „dla ciebie” |
| 27 | „Iris ma dla Ciebie jeden bilet. Nie bierz go z jej ręki.” | d21 Maya | **warunek `maya_testy_2`** (czyli oba testy d11 i d16 zdane) | zamiennik: Iris d23 |
| 28 | „Siedziałam w tym fotelu. Osiem lat temu.” | d23 WEJ | tak (nawet bez kliknięcia) | |

**Tropy, które v2 deklaruje, a w dialogach NIE MA:** (a) d1 „klucz od Very”; (b) d5 hak „Pod wkładem szuflady leży klucz bez zamka” (klucz bez zamka pojawia się tylko w `co_z_tego_wynika` d10); (c) d10 „podpis Very ma tę samą pętlę w K” (w tekście tylko „tutaj, przy K”; pętla opisana dopiero w d24 `d24_umowa`; ewentualnie grafika, niesprawdzalne); (d) d9 Stahl „potem stoi i patrzy na Iris i Victora” (jest tylko ogólne „Lubię patrzeć na ludzi przy pracy”); (e) d17 Evan: „Szary kapelusz. Mówią, że nie wygląda” (w `d17_evan` brak; jest tylko karta d17 i Elias d22); (f) jasne rękawiczki Iris jako cecha Iris (są w `glos` d9/d12/d23, nie w kwestiach); (g) „pusty bilet bez numeru” z zakończenia Sama (v1) w dialogach nie występuje; (h) hak końca dnia z v2 §6 w kartach d1-d10 (G-05).
Wyjątek niezgodny z v2: zasada „Notatki brzmią jak Sam o sobie, dopiero list z d24 obraca je ku następcy” jest złamana: `d15` `co_z_tego_wynika` mówi „rady dla kogoś innego”, `d20` Sam: „Dziś do ciebie” (G-25).

## F. Wabiki W1-W6

| Wabik | Działa? | Rozwiązanie |
|---|---|---|
| W1 gracz = wtyczka Urzędu (d5-) | **Słabo.** Victor d5: „W aktach nie widzę skierowania” sugeruje raczej „zatrudniony bokiem” niż „agent”. Noah d14 pyta o dokument, nikt nie traktuje gracza jak inspektora. | Nigdy wprost zamknięty. Zamyka go dopiero umowa Very d24. Do uznania za teksturę, nie wabik (G-26). |
| W2 gracz = klient 0809 (d9-) | Działa przy zajrzeniu do piórnika (prolog + 0809). | Rozwiązuje się sensownie (d15 „dyżurny nast.”, d24 wykaz „dyżurny”, d23 „nie z mojej ręki, dopóki ktoś nie usiądzie”). Psuje go Iris d12: „papiery pięciu osób, które już kupiły bilet” (G-13). |
| W3 Evan oprawca (d1-10) | Działa: kłamstwa d3/d7, stanie na pętli (echo Leo). | Rozwiązanie d11/d16/d17 (Lena też kontroluje; list „Wiem, że chcesz odejść”) i d22 echo „Dziękuję”. Dobre. |
| W4 Victor wróg (d5-9) | Działa („Drugi egzemplarz do Urzędu”, Iris: „wtedy nikt nie będzie wolny”). | Rozwiązanie d23 bez bramki, sensowne, ale bez konkretnego przypadku wycieku (G-07). |
| W5 Iris chciwa (d4-12) | Działa mocno (Rosa d1, Ada d6, wypowiedzenie d19). | Rozwiązanie d23 jest, ale „wykup własnego wyjścia” (v2 §3.2) nie jest wypowiedziane; zostaje „papiery dla czterech osób” (G-12). |
| W6 Elias ofiara/tło (d1-13) | Działa (karty, oprawka). | Rozwiązanie d20/d25, dobre, ale d25 oparte na jednym mówcy (G-02). |

## G. Czy gracz wie, że jest „szóstym dyżurnym”?

Z własnych doświadczeń: tak jako „dyżurny” i „nowy w pokoju służbowym” (prolog: słup z ogłoszeniem, umowa, karta z pustym nazwiskiem; Ada d6; karta d8; Noah d14; slup d18). **Liczby „szósty” nigdzie nie ma** (Vera d24: „Czwarty został znaleziony w kanale”; Sam: „miejsce miał ktoś przede mną i ktoś przed nim”; Iris „osiem lat temu”). To wystarcza dla zwrotu, numer nie jest potrzebny. Zwrot dotyka mechaniki: pole `imie` d20 (wraca w epilogu Odebrany), czterogest d25, licznik Urząd/`kopie` (karta Kopie), ukryty `notatki`. Nie dotyka: długu u Marlowa (osobista nitka gracza z d2 bez związku z Fotelem, G-24) ani ekonomii czynszu.

---

## ZNALEZISKA

**KRYTYCZNE**

**G-01. Numer 0809 (hak osobisty, Q6, wabik W2) nie występuje w widocznym tekście bez bramki aż do d24.**
Miejsca: `d9_iris` (0809 tylko w `wnetrze` `d9_zetony_numery`: „piąty żeton, 0809, ma karteczkę „jeszcze bez opisu””); d15 (`d15_szosta_linia` tylko po zajrzeniu do `extra` kalka); pierwsza wzmianka bez bramki to `d24_vera` rzecz „szafka 0809”. Bez bramki są tylko „piąty żeton” (Iris d9, d12) i prolog „numer rozmył deszcz”, ale gracz nie zna numeru. Gracz, który nie zajrzy do piórnika d9 i kalki d15, dostaje 0809 po raz pierwszy w d24 jako zimną liczbę. 
Poprawka: dopisać liczbę do kwestii bez bramki: d9 Iris na „Czemu piąty żeton nie ma opisu?”: „Zero osiem zero dziewięć. Opisu jeszcze nie ma. Papier przyjdzie, jak przyjdzie.” oraz d15 `wejscie` Sama: „…Pod numerem 0809 leży coś, co czeka.” oraz powtórzyć w karcie d9 („Elias oddał żeton z liczbą 0809”) lub w karcie d15.

**G-02. Finałowy wybór D7 jest semantycznie sprzeczny i nieczytelny dla gracza (`d25_ksiega`).**
Etykieta „Wpisz siebie w linię 0809” + reakcja Eliasa „Nie wiem, czy to dobry początek” (czyli zostajesz) kontra `zysk`: „Akceptujesz fotel, Iris wręcza bilet” i `strata`: „Ktoś inny usiądzie w fotelu za Ciebie” (czyli odchodzisz) oraz reguła z d23 („bilet… nie z mojej ręki, dopóki ktoś nie usiądzie”). Epilog „rotacja” pokazuje odejście gracza i następcę, a następca (0913) jeszcze nie usiadł. Dodatkowo Elias jest jedynym mówcą sceny, a jego odpowiedzi nie tłumaczą skutków trzech gestów. 
Poprawka: (1) zmienić etykietę na „Wpisz swoje imię w linię 0809 (zostajesz w łańcuchu)” i dodać zdanie do reakcji Eliasa: „Teraz jesteś w księdze. Odejdziesz, kiedy ktoś wpisze się po tobie.”; (2) dopisać w d25 jedną kwestię bez bramki, w której Sam albo Iris opisuje trzy skutki jednym zdaniem każdy; (3) jeśli „Rotacja” ma oznaczać odejście, to bilet wręcza Iris dopiero po wpisie 0913 (scena, nie `zysk`).

**WAŻNE**

**G-03. „Strona 41” pojawia się pierwszy raz w d15 jako tekst pytania gracza** (`d15_sam`: „Co się stało ze stroną czterdzieści jeden?”). W d1-14 jest tylko „wyrwano stronę” (d1 `wnetrze`, bez numeru, za zajrzeniem). Q1 (v2 §5: „otwarte d1”) nie ma bramkowo-wolnego nośnika w d1-14, więc finałowe „Strona 41 jest Twoja” (d24, ×3 w reakcjach + karta) nie ma kotwicy. Poprawka: d5 Victor (bez bramki): „W księdze brakuje strony czterdzieści jeden, a numeracja idzie ciągiem”; d1 `co_widac`: „wyrwano stronę 41”; d10 Vera: „strona czterdzieści jeden”.

**G-04. Sumienność = wyciek (MEGA #4) ma wypłatę głównie liczbową.** Karta Kopie (d25 `extra`: „Kopie wysłane do Urzędu: {kopie}. Klienci odnalezieni: {min(4, kopie)}”) jest jedynym miejscem, gdzie wyciek dosięga konkretnych ludzi; wcześniejsze skutki to listy z Urzędu do lokatorów (d6, d9 echa), nie kontakt Stahla z kopią. Echa Gusa/Linh/Dorian były pozytywne („Pell już nie istnieje”, „Milo zasnął”), więc karta „odnalezieni” je cofa bez sceny. Dla gracza z `kopie`=0 karta pokazuje „0” i nie ma efektu. Poprawka: jedna karta wieczorna d23-24 warunkowa od `kopie`: „Kartka od Gusa: „Ktoś zapukał o świcie, znał nazwisko z kwitu.”” lub kwestia Stahla w d22 cytująca dosłownie linię z kopii pokwitowania gracza; karta d25 pokazywana z imionami tylko dla `kopie`≥1.

**G-05. Karty wieczorne d1-d10 nie niosą haków z v2 §6.** Planowane hooki („W księdze brakuje strony…”, „Nie wracaj do domu. Jadę po ciebie w sobotę.”, „Ktoś jutro o świcie wyjedzie…”, „Pod wkładem szuflady leży klucz bez zamka”, „To numery ludzi, którzy już kupili bilet”, „Za pięć dni stanie przed Tobą Sam”) nie występują; d1, d3, d4, d7, d9, d10 kończą się Eliasem i oprawką (retencja d1-3 opiera się na `wnetrze` za zajrzeniem). W kartach d11-25 hook jest wdrożony (d12 pociąg 5:40, d14 „podpis do 22”, d20 „Jak Cię zapisać?”, d24 „Strona 41 jest Twoja”). Poprawka: dopisać do kart d1, d3, d4, d9, d10 jedno zdanie-hak (cytaty z v2 §6), np. d3: „Telefon odblokował się sam: „Nie wracaj do domu. Jadę po ciebie w sobotę.””.

**G-06. Poprzednik: dziura d16-d19 (4 dni) bez Sama/Very/strony 41**, potem d21-23 (3 dni). Karty d16-19 niosą tylko oprawkę/„Nawyk”. Poprawka: d17 karta „Pod szybą leżała karta Sama: „Wpisuj mało.”” albo przesunąć N5 do d18; d19 Leo/Ada: kwestia o szafce 6.

**G-07. Konkretny przypadek wycieku przez Victora brakuje** (W4/Q10). Gracz słyszy teorię (d15 „nie ufam drugiej kopii”, d23 „każdy, kto płaci, ma dostęp”), a nie widzi czytelnika kopii. Poprawka: d22 Stahl w `wejscie`/Q: „Kwit… z inspekcji” (jedna linijka identyczna z kopią pokwitowania gracza z d12/d15), lub d24 karta: „Na ladzie leży odpis twojego pokwitowania z d12, nie od ciebie.”

**G-08. Pełny list Sama jest za `notatki_3`; wersja z lukami usuwa wyjaśnienie „Twoja linia”.** `d24_list_luki`: „Wyrwałem stronę 41, bo była na niej […]”. Notatki N1-N5 to pięć osobnych `wnetrze`; brak zamiennika, który zalicza notatkę po przesłuchaniu. Poprawka: zaliczać notatkę także po wysłuchaniu odpowiedniej kwestii (np. d20 Sam: „Wpisuj mało. Pytaj o imiona” w odpowiedzi bez bramki; d15 N4 jako zdanie Sama); w wersji z lukami zostawić „bo była na niej Twoja linia” (resztę ukryć).

**G-09. Brak ungated nośnika „bilet = rotacja” przed d23.** „Pusty bilet” w ogóle nie występuje w d1-22 poza ostrzeżeniem Mai d21 (za `maya_testy_2`, czyli gracz musi zdać oba pierwsze testy). Iris d23 to zastępuje, ale powtarza treść ostrzeżenia, więc ostrzeżenie traci siłę. Poprawka: d12 Iris lub d18 Iris dodać jedno zdanie o „bilecie dla dyżurnego”, np. d18: „Pan/pani też ma swój bilet. Kiedyś.” (bezosobowo).

**G-10. Odsłony d21-25 zbijają trzy wielkie zwroty w trzy dni, a Zaginiona nie ma sceny d23-25.** Iris d23 + Vera/0809/list/strona 41 d24 + Kopie d25. Poprawka: rozsunąć „Siedziałam w tym fotelu” do d22 (karta) albo dodać wcześniejszą sugestię (G-09).

**G-11. Maya: brak sceny końcowej / brak śladu konsekwencji Stahla w d23-25** (zob. C). Poprawka: karta d23 warunkowa od `stahl_wydaj`: „Na pętli czwórki stał człowiek w szarym kapeluszu. Walizka pojechała bez niego.” / „…pojechał za nią.”

**G-12. Skrytka: mechanizm krzywdy rodzin niezrozumiały.** d12 (druga lista „wpłaty miasta… 6 800 $”), d23 Nora: „pięć tysięcy sześćset… Iris ma cztery papiery za sześć tysięcy osiemset”, Iris: „Wzięłam je od miasta… Jedno za drugie.” Gracz nie rozumie, czemu rodziny płacą drugi raz (5 600 vs 6 800, skąd 1 200). Poprawka: jedno zdanie Nory w d12 (bez bramki): „Miasto wypłaciło odszkodowanie na nasze przeprowadzki. Iris je wydała. Czterysta dolarów to nasza kaucja, a bez oryginału nie ma jej kto oddać.”

**DROBNE**

**G-13. Liczba osób „4” vs „5”:** Iris d9 „czterech ludzi kupiło bilet” vs Iris d12 „papiery pięciu osób, które już kupiły bilet” (0809 nie płaci wg v2 §3.2). Poprawka: d12 „pięciu” → „czterech i jedna rezerwacja”.

**G-14. d9 „jedna rodzina jedzie jutro o 5:40”** (`d9_iris` depozyt) kontra Linh d12 (jej pociąg jest w d12-13). Poprawka: „jutro” → „w piątek”/„za trzy dni”. Oraz Gus (0412) wyjechał w d5, więc „cztery czekają na odbiór” (d12 Iris zetony_iris) jest niezgodne.

**G-15. „Zacinająca się szuflada” (d12 Ada) nigdzie wcześniej niepokazana**, więc trop „Iris zna fotel od środka” jest nieczytelny. Poprawka: dodać w d5 lub d10 wzmiankę o zacinającej szufladzie nr 6 (np. `d10_vera` wnetrze: „szuflada zacina się w lewym rogu”).

**G-16. `jeden_egzemplarz` (nowa opcja S4, d9)** nie ma pytań-następstw w d12 (Iris: tylko `zetony_victor`, `zetony_iris`, `depozyt`; Linh: tylko `depozyt`, `zetony_victor`). Poprawka: dodać REQ `d9_iris:jeden_egzemplarz` w d12 Iris i Linh.

**G-17. Pocztówka od Mai „Odebrane.” i inne epilogi** (v2 §10) nie istnieją w pliku dialogów (są tylko `epilogi_elias`). Nie sprawdzam ekranów końcowych (zob. „Nie sprawdzone”), ale d23-25 nie niesie ich zastępnika.

**G-18. Pięć wzmianek o „nazwisku na karcie”** (prolog, d7, d13, d14, d22 reakcja) mimo v2 §12 („zostają 2”). Poprawka: wyciąć d22 reakcję „Zapisuję: dyżurny, bez nazwiska.” (powtórka z d14).

**G-19. Redundancja Zaginionej: fakt „ulotki 22:15” ×5** (Kit d7, Noah d5, Evan d7, Noah d14, Evan d17). Poprawka: zostawić Kita i d17, resztę zastąpić nowymi informacjami (np. d14 Noah: kto płaci detektywowi).

**G-20. Kalendarz: sprzeczność dat.** d2 `d2_hana`: „Dziś jest 10 sierpnia” oraz d24 umowa „dziewiąty sierpnia” (dzień 1 = 9.08), a terminy „dwudziestego drugiego/czwartego” to numery dni gry (d12 Nora: „czternaście rodzin i dwanaście dni”). 24 sierpnia = d16, nie d24. Poprawka: „Dziś jest wtorek” w d2 albo terminy „do końca miesiąca/do pierwszego września”; zagadka 0809 = 9 sierpnia opiera się na umowie d24.

**G-21. Identyfikacja detektywa:** MOMENTY d17 („Mówią, że nie wygląda na detektywa”) nie występuje w `d17_evan`. Poprawka: dodać do Q Evana w d17: „Detektyw już dzwonił. Mówią, że nie wygląda na detektywa. Szary kapelusz.”

**G-22. Osierocone echo Stahla** („Dokument właściciela mam. Wystawił go ktoś, kto nie powinien.”, d22 `stahl_odeslij`) nie ma kontynuacji w d23-25.

**G-23. Osierocony wątek „innym tuszem”** (d5 wykaz dopisany przez Victora; d15 `d15_zatwierdzenie_victora` + Sam: „Ktoś potem dopisał rzeczy innym tuszem. To nie on”). Nikt nie jest wskazany. Poprawka: d25 Victor albo Vera jednym zdaniem.

**G-24. Dług u Marlowa (osobista nitka gracza) nie jest powiązany z Fotelem ani nie ma wypłaty w dialogach** (ostatni ślad: karta d25 „Rata sobotnia. Jutro. Przyjdź sam.”; „Skąd wiedział, gdzie mieszkasz?” d2 bez odpowiedzi). Poprawka: d24 Vera/Iris: „Marlowowi powiedziała Iris, gdzie masz pokój.”

**G-25. Notatki S.H. jawnie adresowane do następcy zbyt wcześnie** (`d15` `co_z_tego_wynika`: „brzmią jak rady dla kogoś innego”; `d20_zegarek_tyl` Sam: „Dziś do ciebie”). Zmniejsza efekt listu d24 (v2 chciało obrót dopiero w d24). Poprawka: zostawić Sama jako mówiącego o sobie.

**G-26. Wabik W1 (wtyczka Urzędu) słaby** i nigdy wprost nie zamknięty. Poprawka: d24 Vera, jedna odpowiedź bez bramki: „Skierowania nie ma, bo nikt cię nie skierował. Ja cię wybrałam.” (spójne z kryterium wyboru Very w d24).

**G-27. Pola `typ` / `glos` ze spoilerami**, jeśli są widoczne: d3 „Evan kłamie, Lena mówi prawdę”, d5_victor „kontroler jawny”, d7 „kłamca, zna godziny, o które nikt nie pytał”, d22_stahl „klient, który wie za dużo”, d9/d12 Iris „nigdy nie dotyka szyby”. Poprawka: ukryć lub zneutralizować.

**G-28. Maya d21: skąd wie o bilecie Iris?** Brak podstawy w dialogach (ostrzeżenie pada, wyjaśnienia nie ma). Poprawka: Q gated `d21_bilet_0517`: „Skąd wiesz? — Siedziałam tu, kiedy tamten odchodził.”

**G-29. d10 `archiwum` nie ma konsekwencji w d15** (Sam wchodzi po termos niezależnie od wyboru; „Sam straci możliwość odebrania ich samodzielnie” nie sprawdza się). Poprawka: `wejscie_jesli` w d15 dla `d10_vera:archiwum`.

**G-30. Numer kwitu 0417 (d1) wygląda jak żeton mm/dd** (0412, 0517, …) mimo że kwit ma „trzy tygodnie”. Poprawka: zmienić na inny format (np. „K-17”).

**G-31. Vera: „klucz bez zamka” nie istnieje w d5** (hak z v2), pojawia się dopiero w d10 w `co_z_tego_wynika`. Poprawka: dodać do `d5_gus`/`d5_victor` wejścia: „W szufladzie pod wkładką leży klucz bez zamka.” lub do karty d5.

---

## MACIERZ (0-3)

| Wątek | Hak (d1-3) | Eskalacja | Wypłata | Składalność |
|---|---|---|---|---|
| Zaginiona | 3: dwie sprzeczne wersje o jednym telefonie + termin + łapówka w d3 | 3: kolejne testy i detektyw, ale fakt „22:15” powtórzony 5 razy | 2: pożegnanie Mai pokazane w d21, Stahl/los Mai tylko echem | 3: Maya odeszła sama składa się z ≥4 źródeł bez bramki |
| Skrytka | 1: do d3 tylko drobna wredota Iris i ogłoszenie, zagadka od d4 | 3: d4/d9/d12/d15/d19/d23 realnie podnoszą stawkę | 2: d23 pokazany scenicznie, ale liczby (5 600/6 800) niezrozumiałe | 2: sens „papiery na nowe życie” składalny, mechanizm krzywdy rodzin nie |
| Poprzednik | 2: kwit „Lewa czeka” po zajrzeniu, brak „strony 41” w d1-14 | 2: dobre d10/d13/d15, dziura d16-19 | 2: d24-25 pokazane, pełny list za licznikiem | 2: pięć notatek za zajrzeniem, `notatki_3` bez zamiennika |
| Fotel | 1: prolog daje niepokój, ale 0809 niewidoczne bez zajrzenia, brak pytania | 2: rytm równy, ale trop jawny dopiero w d23 | 2: d23-25 pokazane, wybór D7 sprzeczny | 2: bez bramek składa się „jestem następny”, 0809 i strona 41 zbyt późno |
| Stahl | 1: pierwszy ślad d5 (karta), hak d9 | 2: d9, d17, d22, ale dziury 4+4 dni | 1: po d22 brak sceny, echo osierocone | 2: tożsamość składalna z d14/d17/d22 |
| Victor | 1: jedna linia d5 („brak skierowania”) | 2: obecny głównie echami-listami | 2: d23 neutralność bez bramki, brak konkretnego wycieku | 2: „kopie” teoretyczne, brak widocznego czytelnika |

---

## ZWERYFIKOWANE OK (sprawdziłem w tekście)

- Hak Zaginionej d3 (cytaty wyżej) i redundancja dowodów, że Maya odeszła sama.
- Kompletność `wejscie_jesli`: d5 Noah (4 warianty d3), d6 Ada (3 d1), d9 Iris (3 d4), d22 Jonah (3 d2), d23 Iris (3 d18), d23 Rosa (4 d23), d24 Thomas (3 d1) pokrywają wszystkie gałęzie poprzedzające. Wyjątki ze zwykłym wejściem są poprawne (generyczne).
- „Siedziałam w tym fotelu” jest w `wejscie` d23 (bez bramki).
- Fotel: prolog (słup, odcinek, umowa, karta „dyżurny” z pustym polem) jest pokazany graczowi tekstem; ogłoszenie powtarzane (d3, d5, d18); pokój służbowy pod wyburzenie (d8).
- Vera d24 „To ja wybieram. Od jedenastu lat.” bez bramki (tura3); „Strona 41 jest Twoja” w każdej z trzech reakcji + w karcie d24.
- Elias d25 bez bramki tłumaczy sens linii 0809 („jest tylko jedna osoba po tej stronie szyby”), więc brak dead-endu wiedzy w finale.
- Q10/Victor: neutralność d23 bez bramki. Pytanie `kopie_2` d23 ma zamiennik (Victor „każdy, kto płaci, ma dostęp”) i kartę Kopie.
- Zero słowa „dyżurny jest ogniwem łańcucha” przed d23 (zasada v2 §13.3 dotrzymana). „fotel” pada pierwszy raz w d23.
- Ostrzeżenie Mai d21 ma zamiennik w Iris d23.
- Pytania warunkowe w d5 Noah, d12 Iris (3 z 4 wariantów d9), d11 Grace, d12 Nora mają zamienniki w pytaniach bez bramki.
- Prolog i karta d8 (pokój gracza też pod wyburzenie) obecne i czytelne.

## NIE SPRAWDZONE

- Ekrany zakończeń (Zaginiona A/B/C, Skrytka A/B/C, Poprzednik A/B/C, 5 zakończeń Fotela), pasek „Zabrakło”, „Ekspozycja”, NG+ (poza `epilogi_elias`): nie ma ich w dostarczonych plikach.
- Elementy graficzne i UI: pętla K na umowie/pokwitowaniu (d1/d10/d24), karta pracownika, Notatnik S.H., gest `zerwij_nalepke` (d15) i pole tekstowe imienia (d20) wzmiankowane w kodzie decyzji, lecz nie ich działanie; czy `co_z_tego_wynika` i `glos`/`typ` są widoczne dla gracza.
- Dokładne reguły liczników (`kopie`, `notatki`, `maya_testy`, Urząd) poza tym, co opisuje `LICZNIKI.md`; czy zajrzenie do `wnetrze` jest wymagane, czy automatyczne.
- Warunki zakończenia Odebrany (pięć koniunkcji), sprawdzone tylko od strony dostępności elementów w dialogach.
- Zgodność z CD2 i płeć gracza (formy „pan/pani”): poza zakresem, wyrywkowo OK.
- Treści `Mini-karta` (proza poza JSON) potraktowałem jako autorskie, nie sprawdzałem.
