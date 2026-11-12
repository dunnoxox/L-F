# Raport spójności S1: dni 1-6 (okienko_rozmowy_v3_dni1-10.md, linie 1-1705)

Format: ID | waga | miejsce | co jest sprzeczne z czym | jak gracz zauważy | POPRAWKA | Weryfikowalne w grze?

## KRYTYCZNE

**S1-01 | KRYTYCZNE | d2_hana, decyzje[wydaj].echo (za_dni 2, list), + wnętrze d2_etykieta_wyp + odp. tura 2 pyt. 4**
Echo (dzień 4 = pt 13.08): „W poniedziałek komisja przedłużyła mi wypożyczenie do końca roku.” Poniedziałek to 16.08, dzień 8; list przychodzi w przeszłości o przyszłym zdarzeniu. Hana sama mówi: „komisja zbiera się dopiero w poniedziałek”.
Gracz zauważy: list z dnia 4 opisuje poniedziałek, którego jeszcze nie było.
POPRAWKA (wariant A, bez zmiany terminów): echo `za_dni: 6` (dzień 8, pon.). Wariant B: w odp. zamień „w poniedziałek” na „w piątek”, w reakcji wydaj „W piątek pójdę do komisji”, w echo „W piątek komisja przedłużyła mi wypożyczenie do końca roku.”
Weryfikowalne: kalendarz (daty w księdze). Tak, ale gracz wiedział, że dziś jest 13.08.

**S1-02 | KRYTYCZNE | d1_thomas, decyzje[wydaj].echo (za_dni 2, list)**
Echo w dniu 3 (śr. 11.08): „W niedzielę pojechałem z Claire na cmentarz, obie leżały na kamieniu przez godzinę.” Niedziela to 15.08 (dzień 7); w wejściu Thomas dopiero „w niedzielę idę”.
Gracz zauważy: list z wtorku/środy relacjonuje niedzielę, która nie nadeszła.
POPRAWKA (tekst): „Dziękuję za rękawiczkę. W niedzielę pójdę z Claire na cmentarz, obie będą leżały na kamieniu. Claire pyta, kim jest młody człowiek, który wcześniej oddał mi prawą bez papierka. Powiedziałem, że nie wiem, choć wiem. — T. Ward” albo `za_dni: 6`.
Weryfikowalne: nie dotyczy (data).

**S1-03 | KRYTYCZNE | d2_jonah, decyzje[wydaj].echo (za_dni 1, list)**
Echo w dniu 3 (noc): „Pierścionek jest w kieszeni, serwetka też. Jutro o siódmej.” Ale oświadczyny mają być o 7:00 rano dnia 3, czyli PRZED tą nocą (wejście: „jutro rano”, rozmowa toczy się nocą dnia 2). Echo wyprzedza zdarzenie, o którym mówi, że dopiero będzie.
Gracz zauważy: kolejna noc, a Jonah wciąż pisze „jutro o siódmej”.
POPRAWKA: „Zdążyłem. Pierścionek był w kieszeni, serwetka też, powiedziałem to trzecią wersją. Nie pytaj, co odpowiedziała, dowiesz się, jak wrócę. Trzymałem kciuki za siebie.” (Alternatywa: echo dopiero w dniu 22 z fabuły; v1 tak planuje).
Weryfikowalne: nie. Gracz nie ma jak sprawdzić.

## WAŻNE

**S1-04 | WAŻNE | d2_hana, wnętrze (co_widac, co_z_tego) vs odp. tura 2 pyt. 4**
Kartka: „do 7 sierpnia. Dziś jest 10 sierpnia.” Gracz widzi 3 dni zwłoki, a co_z_tego mówi „skończyło się wczoraj”, Hana: „termin minął w sobotę”, „spóźniłam się o dwa dni”. 7.08 (sob.) do 10.08 (wt.) = 3 dni; „wczoraj” to 9.08. Mini-karta też: „minął wczoraj”.
POPRAWKA: kartka „Wypożyczone H. Moreau do 9 sierpnia. Dziś jest 10 sierpnia.” Odp.: „Że termin minął wczoraj. Konserwatorium nie przedłużyło, bo komisja zbiera się dopiero w piątek. Nie jestem złodziejką, tylko spóźniłam się o dzień. Ale gram jutro.” (wtedy S1-01 wariant B z „piątkiem”, echo `za_dni: 3`).
Weryfikowalne: TAK (data na kartce vs data dnia); to jest sedno dowodu, więc liczba musi się zgadzać.

**S1-05 | WAŻNE | d1_thomas, wnętrze d1_kwit_0417 vs odp. tura 2 pyt. 4**
Kwit sprzed 3 tyg.: „Prawa wydana bez wpisu. Lewa czeka.” Czyli lewa wtedy była w biurze/czekała. Thomas: trzy tygodnie temu zgubił TYLKO prawą, lewą zgubił wczoraj. Gracz czyta „lewa czeka” i nie wie, jaką lewą.
POPRAWKA kwit: „Prawa wydana bez wpisu. Jakby zgubił drugą, wydać tak samo. S.H.” Zmiana pasuje do v2 („następca decyduje, czy wydać bez wpisu”). Alternatywnie Thomas dopowiada: „Lewą miałem wtedy w kieszeni, Sam kazał jej pilnować.” (słabsze).
Weryfikowalne: TAK (tekst kwitu), ale dziś mylący.

**S1-06 | WAŻNE | d1_thomas, decyzje[wydaj_bez_wpisu] (brak `wymaga`) + echo + wydaj.echo**
Reakcja: „Tak samo jak ostatnio: bez papierka. Młody człowiek też tak powiedział.” Thomas przyznaje wizytę, choć w tej rozmowie wciąż może mówić „Pierwsza”, jeśli gracz nie zadał pyt. o kwit 0417. Podobnie Claire (zatrzymaj_sprawdz) pyta o „młodego człowieka, który oddał mu prawą bez papieru”, a w wydaj Thomas „powiedział, że nie wie, choć wie”. Skąd Claire to wie, gdy Thomas tego nie wyznał?
POPRAWKA: dodać `"wymaga": "d1_kwit_0417"` do wydaj_bez_wpisu. W echo zatrzymaj_sprawdz usunąć drugie zdanie lub zastąpić: „Ojciec dwa dni nie wychodził z domu. Proszę oddać mu tę rękawiczkę, podpiszę za niego.”. W echo wydaj: „Claire pyta, skąd mam kwit z tego biura w mankiecie.” (gracz zna kwit nawet bez pytania).
Weryfikowalne: TAK (kwit w mankiecie).

**S1-07 | WAŻNE | d5_victor, odp. tura 3 pyt. 4 vs d1_thomas wnętrze**
Victor: „Pięć tygodni temu dopisałem to ręką” (m.in. „prawa rękawiczka T. Ward”). Kwit 0417 jest sprzed ok. 3 tygodni (dzień 1) i od tego czasu minęło kolejne 4 dni gry, czyli ok. 3,5 tyg. Pięć tygodni temu prawej rękawiczki jeszcze nie wydano; „paczka bez wpisu” z wykazu też nie może być paczką 0412 (dzień 4).
POPRAWKA: „Ja. Trzy tygodnie temu dopisałem to ręką, z pamięci po rozmowie z poprzednikiem. Nie mam na to dowodu...”.
Weryfikowalne: TAK, gracz porównuje kwit 0417 z dnia 1 i odpowiedź.

**S1-08 | WAŻNE | d5_noah, wejscie_jesli[wydaj_evan / wez_100_evan] vs tura 2 pyt. 4**
Wejście: „Wiem, że telefon jego żony wydano jemu, więc muszę wiedzieć, co z nim zrobił.” Potem Noah: „Przyniósł mi go rano.” Noah wie, co z nim zrobił, bo telefon ma od rana.
POPRAWKA wejścia: „...Są w nim zeznania Doyle'a. Telefon jego żony wydaliście Doyle'owi, a mnie obchodzi, co jeszcze o tym wam mówił.” (nie pytać o los telefonu).
Weryfikowalne: nie (rozmowa z Evanem z dnia 3 niczego nie ujawnia).

**S1-09 | WAŻNE | d5_gus, decyzje[odmow]: strata vs echo**
Strata: „Gus ... wraca do domu w szlafroku”. Echo (list): żona dzwoni, „mąż zniknął, zostawił tylko klucze i trzy dolary”. Gus nie wraca do domu.
POPRAWKA straty: „Gus nie wsiądzie do jedenastki i wychodzi w noc w szlafroku, a jego sprawa jest otwarta.” Zmień też echo (żona mówi: „mąż nie wrócił do domu”), „klucze i trzy dolary” zostają.
Weryfikowalne: nie (gracz nie widzi, dokąd idzie).

**S1-10 | WAŻNE | d6_leo, decyzje[wydaj].echo**
Leo odzyskuje zegarek od razu, tej samej nocy (zgubił o 22:47). Echo (za 2 dni): „przez trzy dni byłem człowiekiem bez czasu”.
POPRAWKA: „Zegarek chodzi równo. Żona powiedziała, że przez tę jedną noc byłem człowiekiem bez czasu. Przepraszam, że tyle mówiłem o godzinach.”
Weryfikowalne: nie dotyczy.

**S1-11 | WAŻNE | d2_jonah, decyzje[odmow].echo**
„Odebrałem plecak dopiero rano, spóźniłem się.” Okienko jest nocne i działa w nocy; rano gość odebrać nie może. W reakcji obiecuje „wrócę z kimś”.
POPRAWKA: „Plecak odebrałem dopiero następnej nocy. Oświadczyłem się po południu, nie o siódmej, i June chyba się domyśla. Pierścionek nadal mam.”
Weryfikowalne: nie.

**S1-12 | WAŻNE | d2 extra: szalik (d2_szalik_md), co_z_tego_wynika**
„Szalik należy do Mai Doyle, którą mąż zgłosił jako zaginioną.” W dniu 2 nikt jeszcze nie wspomniał o Mai (Evan i Lena dopiero w dniu 3, gazeta dopiero w wieczorze dnia 5; wieczór dnia 2 nie ma wzmianki). Gracz dostaje informację przed tym, jak może ją zrozumieć.
POPRAWKA: „Szalik należy do Mai Doyle, która zostawiła go w tramwaju linii 4.” Sprawę zaginięcia gracz pozna dnia 3. Dopisać do karty wieczoru dnia 2 jedno zdanie o plakacie lub gazecie (jak zakłada v1), aby gracz miał kontekst.
Weryfikowalne: TAK, imię na bilecie, ale nie ma jak połączyć z faktem zaginięcia.

**S1-13 | WAŻNE | d3_maz_i_siostra, odp. Leny (tura 1 pyt. 2; tura 3 pyt. 1) vs mini-karta/typ**
Mini-karta i `typ`: „Lena mówi prawdę”. Ale mina „klamie” przy „W czwartek wieczorem... Ona nie gubi rzeczy” i przy „Od czwartku nic. Ani słowa. Naprawdę.”. SMS Leny (czwartek 21:48, „Jadę po ciebie w sobotę”) i jej własne słowa „Maya zadzwoniła w czwartek” sugerują, że po czwartku Lena wie więcej. Gracz widzi „klamie” przy odpowiedzi, którą w tej samej wizycie Lena sama potem częściowo odwołuje.
POPRAWKA: zmienić typ na „Evan kłamie, Lena ukrywa” i w pyt. 1 tury 3 odpowiedź: „Od czwartku nic. Ani słowa od niej. Zostawiła telefon, więc nie miała jak.” (mina „klamie”, bo wie, gdzie Maya jest). W tury 1 pyt. 2: mina „neutralna”.
Weryfikowalne: TAK (wiadomość z czwartku 21:48 w telefonie), to dobry test kłamstwa.

**S1-14 | WAŻNE | d3_maz_i_siostra, decyzje[wez_100_evan].zysk**
„100 dolarów, czyli większość raty dla Kuby.” Karta wieczoru dnia 2: rata to 60 $. 100 > 60, to więcej niż rata. Podobnie wez_250_gus: „prawie raty dla Kuby na cztery tygodnie” (250/60 = ponad cztery).
POPRAWKA: „100 dolarów, czyli rata dla Kuby i jeszcze reszta.” oraz „250 dolarów, czyli cztery raty dla Kuby z górką.”
Weryfikowalne: TAK (karta wieczoru dnia 2: „rata sześćdziesiąt”).

**S1-15 | WAŻNE | d2_jonah, odp. tura 2 pyt. 1 („wstaje o czwartej”)**
June „pracuje w piekarni, wstaje o czwartej”, a oświadczyny o siódmej „zanim wyjdzie”. Piekarka wstająca o 4:00 o 7:00 dawno już jest w pracy.
POPRAWKA: „Moją dziewczyną. Pracuje w piekarni, na drugą zmianę, wychodzi z domu o ósmej. Jutro o siódmej, zanim wyjdzie, chcę ją o coś zapytać. Dlatego ten plecak.” (Zachować v1: „zanim pójdzie do pracy”.)
Weryfikowalne: nie.

## DROBNE

**S1-16 | DROBNE | d1_rosa, tura 3 pyt. 3** „Dostanę sto dziewięć zamiast stu dwudziestu dziewięciu” po karze 20 $ za czynsz, który Iris pobiera. Wypłata (129) i czynsz (jutro) to dwie różne rzeczy; „kara za czynsz” obniża wypłatę? Zdanie niejasne. POPRAWKA: „Spóźnię się z czynszem, a Iris liczy za to dwadzieścia dolarów kary. Z wypłaty zostanie mi sto dziewięć.” Weryfikowalne: nie.

**S1-17 | DROBNE | d5_noah, tura 2 pyt. 4 vs wnętrze d3** Noah: telefon „zablokowany kodem”, Evan „mówi, że żona nigdy nie miała kodu”. W dniu 3 wiadomość „wisi na ekranie” (gracz ją czyta). Gracz mógł zobaczyć powiadomienie bez odblokowania, więc to OK, ale zdanie Noaha jest sprzeczne wewnątrz. POPRAWKA: „...Zablokowany. Doyle mówi, że kodu nie zna, bo żona go nie miała. To mi nie pasuje.” Weryfikowalne: częściowo (gracz widział ekran z powiadomieniem).

**S1-18 | DROBNE | d6_ada, wejscie „Dzień dobry”** Wszyscy inni goście nocą mówią „Dobry wieczór”/„Cześć”. Ada może mówić „Dzień dobry” jako dziecko, ale w nocy gracz to odnotuje. POPRAWKA: „Dobry wieczór, jestem Ada...”. Weryfikowalne: nie dotyczy.

**S1-19 | DROBNE | d2_hana wiek** Dialog: 26 lat. fabula_25_dni.md (lista, pkt 9): 24. Ustalić jedno. Weryfikowalne: nie.

**S1-20 | DROBNE | d3_dana, wejście vs odp.** Wejście: „nie wstanę na czwartą”, odp.: budzik na 4:15, „Za pięć piąta” w zajezdni. Mylące. POPRAWKA wejścia: „Bez niego nie wstanę na czwartą piętnaście”. Weryfikowalne: TAK (budzik z czerwoną, krzywą wskazówką) ale wnętrze jest puste.

**S1-21 | DROBNE | d1_thomas, tura 2 pyt. 2 vs echo zatrzymaj_sprawdz** Thomas: „Przyjdę jutro z córką”, a Claire przychodzi dopiero w dniu 3 (`za_dni: 2`). POPRAWKA: reakcja „Przyjdę z córką, jak tylko będzie mogła” albo `za_dni: 1`. Weryfikowalne: nie.

## Luki weryfikacji (gracz nie ma czym sprawdzić, a powinien)
- d1_thomas: brak w `wnetrze` sekretu „biała nitka” (opis rzeczy go ma, ale nie wnętrze), a gracz ma sprawdzić „prawa czarna / lewa biała”. Dodać sekret: „Przy kciuku biała nitka.” Dowód ze zdjęciem „córka poświadczy” nie jest do sprawdzenia.
- d2_hana: oświadczenie „gram od siedmiu lat” jest sprawdzalne tylko przez kartkę; brak etykiety lutnika w wnętrzu (gracz pyta o nią, odpowiedź unika). Dodać sekret: „Etykieta lutnika: rocznik 1938” (żeby kłamstwo o 7 latach i „moje” było sprawdzalne) albo odciąć pytanie.
- d2_jonah: ładowarka, książka, bilety (odp. tura 1) nie są nigdzie widoczne. Dodać do wnętrza „ładowarka, książka, kilkanaście biletów”.
- d3_dana, d6_ada: `wnetrze: []`, więc ani naklejka „Mama”, ani wgniecenie, ani czerwona wskazówka, ani „dziurka w nosie” nie są sprawdzalne. Dodać co_widac z tymi szczegółami, wtedy „Czym potwierdzisz?” ma test.
- d4_iris: „Papiery lokatorów, pokwitowania” kontra wnętrze OK (kasetka z paszportem), weryfikowalne.
- d5_noah: godzina „22:15” tylko w notesie, brak potwierdzenia 23:30 (zgłoszenie) w rzeczy. Źródłem jest samo zeznanie Noaha; można dopisać do notatki „zgł. 23:30”. (Notatka je zawiera. OK.)
- d6_leo: dopisek „+ puszka (b.n.)” a puszka (extra d6) jest sprawdzalna, ale brak połączenia: dopisać w co_widac puszki numer z wykazu Leo.

## Język i forma
Nie znalazłem „pan/pani” kierowanych do gracza w dniach 1-6 (jedyne „pani” to Iris, nauczycielka u Ady). „Proszę” w ustach gości jest grzecznościowe i neutralne. Zdania są w większości potoczne. Dwa zwroty nie-potoczne: Iris „wyraz uznania” (celowo urzędowy, OK), Noah „rozstrzygać przy okienku” (OK).

## Przejrzane OK
d3_dana (poza S1-20), d4_iris (wszystkie tury, decyzje, echo zgodne z wejścia_jesli Victora), d5_victor (poza S1-07), d6_ada (wejscie_jesli pokrywa wszystkie 3 gałęzie Rosy, poza S1-18), d5_gus (poza S1-09, S1-14), karty wieczoru dni 1-6 (spójne z kalendarzem i ratą 60 $/sobota; sobota 14.08 = dzień 6, Kuba pokazuje sześć palców zgodnie), d6_leo (poza S1-10).
Wejścia warunkowe: d5_noah (4 gałęzie d3), d5_victor (2 gałęzie d4), d5_gus (1 gałąź), d6_ada (3 gałęzie d1): kompletne.

## Nieprzejrzane
Nie sprawdzałem: echa z dni 7-10 odnoszące się do dni 1-6 (poza zakresem). Echa w dniach 11-25 (np. Thomas d24, Jonah d22, `d1_thomas`/`d2_jonah` w wejscie_jesli pliku dni11-25) czytałem tylko grepem, bez analizy pełnej. Nie weryfikowałem wiedzy postaci z fabula_25_dni_v2.md §3.4 poza grepem (Thomas, Hana, Jonah) i lekturą v1 dla d1-d3.
