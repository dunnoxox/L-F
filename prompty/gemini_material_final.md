# Materiał do finału (wyciąg dla Gemini)

Pięć scen ze starej, 25-dniowej wersji, które niosą zwrot „Fotel” i zakończenie. W wersji 10-dniowej trafiają do dni 9–10. Identyfikatory scen, sekretów i akcji zostają bez zmian, bo od nich zależą zakończenia w silniku. Stare rozmowy poniżej są w dawnym układzie trzech tur i odwołują się do dni, których już nie będzie: traktuj je jako surowiec, nie jako wzór.

## d20_elias_sam · stary dzień 20 · Elias Wren, Sam Holt i Victor Crane
- Głos: Elias: powoli, staroświecko, uparcie. Sam: najpierw szczegół techniczny. Victor: krótko, ale dziś zaczyna mówić dłużej.
- Typ: trzej mężczyźni i jedna koperta
- Rzecz: Złoty zegarek kieszonkowy w etui po okularach
- Mówiący (~kto): elias = Elias Wren, sam = Sam Holt, victor = Victor Crane
- Wejście: Elias Wren. Przyszedłem z panem Holtem. Zegarek jest jego, w etui po okularach, bo nie miał gdzie. Pan Holt odmawia pieniędzy, a ja nie odpuszczę. O trzeciej pan Crane odbiera materiały, więc musimy się zmieścić.
- Wejście, gdy `d15_sam:uzgodnij`: Elias Wren. Przyszedłem z panem Holtem, uzgodniliśmy to w zeszłym tygodniu. Zegarek jest jego, w etui po okularach, bo nie miał gdzie. Pan Holt odmawia pieniędzy, a ja nie odpuszczę. O trzeciej pan Crane odbiera materiały, więc musimy się zmieścić.
- Wejście, gdy `d15_sam:victor_od_razu`: Elias Wren. Pan Holt nie chciał tu wracać, odkąd pan Crane dostał jego kalkę, ale przyszedł. Zegarek jest jego, w etui po okularach. Pan Holt odmawia pieniędzy, a ja nie odpuszczę. O trzeciej pan Crane odbiera materiały, więc musimy się zmieścić.
- Wejście, gdy `d15_sam:oddaj_samowi`: Elias Wren. Przyszedłem z panem Holtem, który dostał od Was swoją kalkę i od tamtej pory patrzy na okienko inaczej. Zegarek jest jego, w etui po okularach. Pan Holt odmawia pieniędzy, a ja nie odpuszczę. O trzeciej pan Crane odbiera materiały.
- W środku rzeczy (sekrety):
  - `d20_zegarek_tyl`: Na tyle zegarka odcinek wpłaty z datą zgodną z kwitem Eliasa: 84 $, podpis S. Holt. Na odwrocie ołówkiem: „Wpisuj mało. Pytaj o imiona.” Wniosek: Sam zapłacił Eliasowi z własnej kieszeni. Notatki na odcinku brzmią jak rady dla kogoś innego.
- Decyzje:
  - `komplet_zeznan` (Złóż uzgodniony komplet zeznań i dowodów). Zysk: Victor podpisuje rozliczenie, a Sam zostaje czysty w papierach. Strata: Wszystkie dokumenty idą do Urzędu w dwóch egzemplarzach, a druga kopia zostaje poza twoją kontrolą. Reakcja: „Komplet przyjęty. Zeznania obu stron, dowód wpłaty i pokwitowanie. Wpisuję własny podpis, bo pochodzenie jest czytelne.”
  - `poza_audytem` (Oddaj Samowi zegarek i trzymaj dokumenty poza audytem). Zysk: Sam zachowuje spokój, a Elias nie musi składać zeznań. Strata: Nic się nie zmienia w protokole, a Victor zamyka tydzień bez podpisu na swój koszt. Reakcja: „Zegarek wraca. Dokumenty zostają. Victor, nie patrz tak, tak jest uczciwie.”
  - `czesc_zeznan` (Złóż tylko zeznanie Eliasa, bez Sama). Zysk: Elias wreszcie mówi głośno, że przyjął zwrot, a Sam nie jest pytany. Strata: Dowód zostaje niepełny, a Victor wraca z pytaniem o Sama. Reakcja: „Moje zeznanie przyjęte? Dobrze. Niech zostanie. Pan Holt może się nie zgodzić, ale to moja sprawa.”

Stara rozmowa:
```
(tura 1) ? [sam] Sam, jak wygląda ten zegarek?
= Złoty, mały, z pękniętym szkłem. Na pokrywce inicjały S.H. Wszystko, co mam po dziadku, kiedy go jeszcze miałem.
(tura 1) ? [sam] Sam, gdzie go zostawiłeś?
= Nie zostawiłem. Mam go przy sobie od zeszłego piątku, w kieszeni płaszcza, i nie chcę go nosić. Etui jest Eliasa, bo swoje zgubiłem.
(tura 1) ? [victor] Victor, czemu odbierasz materiały o trzeciej?
= Bo o trzeciej zamykam tydzień. Nikt nie przeszkadza, papiery zachowują się spokojniej, a zmęczeni mówią prawdę. Bez kompletu do tej godziny rozliczenie przesuwa się o dobę, a doba w tej sprawie ma wartość.
(tura 2) ? [sam] Sam, czemu odmawiasz koperty?
= Bo to nie są jego pieniądze. Zwróciłem Eliasowi za oprawkę, bo tak zrobiłem. Nie chcę, żeby mi to oddawał. To wstyd i dla niego, i dla mnie.
(tura 2) ? [elias] Elias, czemu nie odpuszczasz?
= Bo dług bez nazwy jest gorszy od długu z nazwiskiem. Oddam, a pan Holt może to wyrzucić. Ale najpierw musi wziąć.
(tura 2) ? [sam] Sam, czemu odszedłeś tak nagle?
= Nie nagle, odchodziłem sześć tygodni. Bilet leży u Iris od Twojej pierwszej nocy przy tej szybie. Nie wziąłem go. Wziąć znaczyło zostawić Cię i nic nie powiedzieć.
(tura 2) ? [@d20_zegarek_tyl] [sam] Na odcinku jest data wpłaty zgodna z kwitem Eliasa. Co to?
= Dowód, że zapłaciłem. Z własnej kieszeni, nie z żadnego funduszu. To jedyna czysta rzecz w tej historii.
(tura 3) ? [sam] Czego od nas chcesz, Sam?
= Niczego. Chciałem tylko zapytać: jak cię zapisać? Elias pyta o imię od tygodni, a ja nie umiem odpowiedzieć za ciebie.
(tura 3) ? [victor] Victor, co weźmiesz o trzeciej?
= Komplet: zeznanie Eliasa, zeznanie Sama, dowód wpłaty. Jeśli pochodzenie jest czytelne i jest pokwitowanie, wpisuję własny podpis. Jeśli nie, zamykam tak, jak jest.
(tura 3) ? [elias] Elias, co zrobisz z kopertą, jeśli Sam jej nie weźmie?
= Zostawię tu, na jego nazwisko. Niech leży, aż się zmęczy odmawiać.
(tura 3) ? [@d20_zegarek_tyl] [sam] Na odwrocie odcinka: „Wpisuj mało. Pytaj o imiona.” Do kogo to?
= Do mnie, kiedyś. Dziś do ciebie. Nie pytaj, skąd wiem, że ci się przyda.
```

## d23_iris_nora_victor · stary dzień 23 · Iris Bell, Nora Vance i Victor Crane
- Głos: Iris: cicho, uprzejmie, „nie lubię naciskać”, groźbę podaje jak prognozę pogody. Nora: po kolei, rzecz-osoba-skutek. Victor: krótko, „kto to podpisze?”.
- Typ: trzy strony i jedna kasetka
- Rzecz: Stalowa kasetka na rachunki z kluczykiem
- Mówiący (~kto): iris = Iris Bell, nora = Nora Vance, victor = Victor Crane
- Wejście: Nora Vance, z panią Bell i panem Crane’em. Po kolei: druga kasetka, ta na rachunki, z szóstki. W środku są oryginały zaliczek. Pan Crane zamyka dziś rozliczenie, każde z nas chce z nią zrobić co innego, a wersja może być tylko jedna.
- Wejście, gdy `d18_iris_nora:rezerwacja_nora`: Nora Vance, z panią Bell i panem Crane’em. Po kolei: druga kasetka, ta na rachunki, z szóstki. Mam na nią rezerwację z zeszłej środy. Pani Bell i pan Crane mają inne plany, a wersja może być tylko jedna.
- Wejście, gdy `d18_iris_nora:do_kontroli`: Nora Vance, z panią Bell i panem Crane’em. Po kolei: druga kasetka, ta na rachunki, z szóstki. Pan Crane ma już kopię z zeszłej środy. Ja czekałam, pani Bell czeka. Wersja może być tylko jedna.
- Wejście, gdy `d18_iris_nora:oferta_iris`: Nora Vance, z panią Bell i panem Crane’em. Po kolei: druga kasetka, ta na rachunki, z szóstki. Pani Bell wspomina jakąś rozmowę z zeszłej środy i patrzy przy tym na Ciebie. Pan Crane patrzy na was oboje. Wersja może być tylko jedna.
- Wejście, gdy `d12_iris_nora:wydaj_iris`: Nora Vance, z panią Bell i panem Crane’em. Po kolei: tamtą kasetkę z torby na zakupy pani Bell już dostała. Została druga, na rachunki, z szóstki. Każde z nas chce z nią zrobić co innego, a wersja może być tylko jedna.
- W środku rzeczy (sekrety):
  - `d23_karta_rozliczenia`: W kasetce karta rozliczenia z podpisem Iris Bell i datą sprzed ośmiu lat. Pod spodem pokwitowanie dopłaty z okresu, kiedy nie jeździła jeszcze szóstką. Wniosek: Iris podpisywała cudze rozliczenia długo przed objęciem kamienicy. Ma w tym doświadczenie, o którym nie mówi.
- Decyzje:
  - `wydaj_nora` (Wydaj oryginały Norze, zgodnie z rezerwacją). Zysk: Lokatorzy dostają dowód, a Nora może walczyć o czternaście rodzin. Strata: Piórnik z żetonami przestaje być ukryty, a Iris traci wsparcie ludzi, których ukrywała. Reakcja: „Po kolei: oryginały, pokwitowania, podpis. Dziękuję. Lokatorzy mają dowód, a ja mam z czym iść do sądu. To jeszcze nie koniec, ale początek.”
  - `wydaj_victor` (Przekaż kasetkę Victorowi do Urzędu). Zysk: Urząd dostaje komplet, a protokół zamyka się czysto. Strata: Skrytka znika razem z klientami, a nazwiska z kasetki trafiają do rąk, którym nie ufasz. Reakcja: „Dwa egzemplarze: jeden do Urzędu, jeden do akt. Kto to podpisze? Ja. Dziękuję. Protokół zamknięty o szóstej.”
  - `iris_prywatnie` (Domknij prywatne wydanie Iris, bez protokołu). Zysk: Iris wyjeżdża cicho, a Ty zostajesz czysty w protokole i czysty wobec Nory. Strata: Czternaście rodzin zostaje bez dowodu, a w okienku ktoś jeszcze odpowiada za to, co zniknęło. Reakcja: „Dziękuję. Cieszy mnie, że się rozumiemy. Zapomnijmy, że byłam dziś w kolejce. Za godzinę jadę.”
  - `wez_500_iris` (Weź 500 $ od Iris i domknij jej prywatne wydanie). Zysk: 500 $ i spokój w okienku, Iris znika bez śladu. Strata: Czternaście rodzin bez dowodu, Nora składa skargę do Victora, a ta koperta jeszcze do Ciebie wróci. Reakcja: „Dziękuję. Pięćset, na szybie, bez podpisu. Uwielbiam rozumienie. Nikt się nie dowie, że tu byłam.”

Stara rozmowa:
```
(tura 1) ? [iris] Co jest w kasetce?
= Karta rozliczenia z moim podpisem i pokwitowanie dopłaty. Nora chce oryginałów, Victor listy nazwisk. Dopiero wtedy wiadomo, co jest czyje.
(tura 1) ? [nora] Nora, czego chcesz od kasetki?
= Po kolei: oryginały zaliczek, bo lokatorzy ich potrzebują. Okoye wpłaciła czterysta dolarów, wszyscy razem pięć tysięcy sześćset. Albo oni, albo my.
(tura 1) ? [victor] Victor, co weźmiesz, jeśli kasetka trafi do Ciebie?
= Wszystko. Kopię i oryginał. Pierwszy raz zestawiłem zmiany z pięciu lat i kasetka jest jedyną stałą. Kto to podpisze? Ja. Jeden egzemplarz do Urzędu, jeden do akt.
(tura 1) ? [@d23_karta_rozliczenia] [iris] Iris, czemu w kasetce jest karta z Twoim podpisem sprzed ośmiu lat?
= Bo wtedy też podpisywałam. Nie pytaj o szczegóły, bo ich nie pamiętam tak, jak ludzie myślą.
(tura 2) ? [iris] Iris, mogę zapytać o coś na osobności?
= Jeśli Victor i Nora poczekają. Pytaj.
(tura 2) ? [nora] Nora, co się stanie, jeśli oryginały trafią do Victora?
= Po kolei: Urząd je zatrzyma, lokatorzy zostaną bez dowodu, kamienica pójdzie pod młot. Rodzina Okoye wyląduje na ulicy w grudniu.
(tura 2) ? [victor] Victor, dla kogo naprawdę liczysz tę kopię?
= Dla Urzędu. Kto czyta kopie, to nie moja sprawa. Ale każdy, kto płaci, ma dostęp. Nie podpisuję się pod tym, co dzieje się później.
(tura 2) ? [@kopie_2] [iris] Iris, na stronie rejestru są nazwiska klientów. Skąd je masz?
= Z kopii Urzędu. Proszę zobaczyć: wszystko, co zapisano w dwóch egzemplarzach, jest tutaj. To, co się zapisuje, ktoś czyta.
(tura 3) ? [iris] Iris, co będzie po dzisiejszym dniu?
= Dziś każdy dostaje bilet. Ty też. Ale nie z mojej ręki, dopóki ktoś nie podpisze po Tobie. Wolę poczekać.
(tura 3) ? [iris] Iris, ile wydałaś na papiery dla czterech osób?
= Tysiąc siedemset za sztukę. Sześć tysięcy osiemset. Wzięłam je od miasta, bo skąd mam wziąć. Lokatorom dałam ludzi, nie pieniądze. Jedno za drugie.
(tura 3) ? [@d23_iris_sama] [iris] Iris, skąd wiesz, jak się naciska od środka?
= Siedziałam w tym fotelu. Osiem lat temu. Nikt mnie nie szukał. Dlatego mnie wybrali. Nie lubię naciskać, bo wiem, jak to jest, kiedy ktoś naciska od środka.
(tura 3) ? [iris] Iris, ile zapłacisz, żeby tej kasetki nie było w protokole?
= Pięćset dolarów. Lubię porządek. Wsunę kopertę pod szybę i nikt nie musi nic mówić.
```

## d24_vera · stary dzień 24 · Vera Kovacs, 62
- Głos: Najpierw miejsce, potem rzecz, na końcu nazwisko. Dzwoni kluczami przy pasie, kiedy się wstydzi.
- Typ: zaplecze, które przychodzi się przyznać
- Rzecz: Szara teczka z kartonikiem „szafka 0809”
- Mówiący (~kto): vera = Vera Kovacs
- Wejście: Zaplecze, teczka, Vera Kovacs. Przyszłam sama, bez Iris i bez Victora. Mam kartonik z numerem szafki i jedną rzecz do powiedzenia. To ja wybieram, kto siada na tym fotelu. Od jedenastu lat. Wstyd mam od dawna.
- W środku rzeczy (sekrety):
  - `d24_kartonik`: Kartonik: „SZAFKA 0809” ołówkiem. Z tyłu: „nie otwierać do odwołania”, pismo Sama, i pieczątka zaplecza. Wniosek: Szafka 0809 jest zajęta celowo, żeby nikt jej nie likwidował. Tak jak każde miejsce, które czeka na kogoś.
  - `d24_umowa`: Umowa gracza z Zarządem Nieruchomości Cooper. Podpis nieczytelny, z charakterystyczną pętlą w literze K. Data: dziewiąty sierpnia. Wniosek: Podpis na Twojej umowie jest Very, z pierwszego dnia. Ktoś wszystko przygotował, zanim przyszło się po raz pierwszy.
- Decyzje:
  - `dolacz_slad` (Dołącz ślad odejścia Sama za jego zgodą). Zysk: Sam odzyskuje czyste akta, a Vera oficjalnie bierze winę za teczkę. Strata: Ślad trafia do księgi, więc ktoś, kto czyta wszystko, dowie się, że teczka była pusta. Reakcja: „Zapisuję: odejście bez wpisu, z mojej woli. Sam odzyska twarz. Strona 41 jest Twoja.”
  - `koperta_zapieczetowana` (Oddaj dokument Samowi w zapieczętowanej kopercie). Zysk: Sam sam decyduje, co zrobić z dokumentem, a Vera nie musi niczego wyznawać w księdze. Strata: Okienko nie zostawia śladu, więc nikt nie zapisze, że Vera przyszła. Reakcja: „Zapieczętowana. Sam zdecyduje sam. A strona 41 jest Twoja.”
  - `otworz_szafke` (Otwórz szafkę 0809 kluczem Very). Zysk: W szafce leży list od Sama, a w tle brzęczą klucze Very. Strata: Ktoś zobaczy, że szafka była otwarta, a w nocy wszystko jest widoczne dla tego, kto patrzy. Reakcja: „Klucz. Sam zostawił to dla tego, kto siedzi przy szybie. Strona 41 jest Twoja.”

Stara rozmowa:
```
(tura 1) ? [vera] Co jest w szafce 0809?
= Pusta teczka i list. Teczka od zawsze „zajęta”, a list jest pismem Sama, którego nie czytałam. Klucz trzymam ja. Dzwoni, jak widać.
(tura 1) ? [vera] Skąd masz ten kartonik?
= Z szuflady numer sześć, tej, którą Sam zostawił dla następnego. Wzięłam wczoraj. Dziś nie umiem go odłożyć.
(tura 1) ? [vera] Czemu przyszłaś sama?
= Bo to nie jest sprawa dla Victora ani dla Iris. Sam zostawił mi pustą teczkę i nie wiem, co z nią zrobić. Z klucza się nie wymiga.
(tura 1) ? [@d24_umowa] [vera] Na umowie jest pętla w literze K. Czyj to podpis?
= Mój. Podpisałam za Zarząd Cooper, bo ktoś musiał. Nieczytelnie, żeby nikt nie szukał, kto stał za tym podpisem.
(tura 2) ? [vera] Czym tak naprawdę zajmujesz się w tym biurze?
= Kluczami, teczkami, pudełkami. Zapleczem. Fotel nie jest karą. Fotel jest bezpiecznikiem. Najpierw miejsce, potem rzecz. Kiedy ktoś ma gdzie postawić stopę, resztę da się zrobić.
(tura 2) ? [vera] Kto napisał na kartoniku „nie otwierać”?
= Sam, ołówkiem. Jego pismo, ale nie jego decyzja. Dostał to, co dostaje każdy: cudzą regułę, którą musi udawać, że sam wymyślił.
(tura 2) ? [vera] O jaki wstyd Ci chodzi?
= O kryterium. Że od lat patrzę na ludzi i wybieram, kto się nadaje. Nie pytam o kwalifikacje, tylko czy ktoś by go szukał.
(tura 2) ? [@d24_kartonik] [vera] Co jest w szafce poza pustą teczką?
= List. Sam pisał go pięć razy, ostatnio w niedzielę. Nie czytałam. Ma trafić do tego, kto będzie siedział przy szybie po nim.
(tura 3) ? [vera] Co zrobisz z kluczem, jeśli go nie przyjmę?
= Zostawię na ladzie. Nie mam już komu go oddać. Klucz sam się nie otworzy, ale też nie zginie.
(tura 3) ? [vera] Kto wie, że przyszłaś?
= Nikt. Powiedziałam Leo, że idę po szpulę nici. Kłamię słabo, ale on nie sprawdza. To jego cecha, nie moja zasługa.
(tura 3) ? [vera] Kto wybiera ludzi na to miejsce?
= To ja wybieram. Od jedenastu lat. Wybieram tych, których nikt nie szuka, bo fotel to bezpiecznik. Czwarty został znaleziony w kanale. Jego siostra do dziś szuka go po szpitalach.
(tura 3) ? [@d24_umowa] [vera] Czy ktoś kazał Ci to powiedzieć?
= Nikt. Mówię, bo Sam odszedł i ktoś musi wiedzieć, że nie był pierwszym. Przed nim siedzieli inni, a kartoników jest więcej, niż myślisz.
```

## d25_sam_elias · stary dzień 25 · Sam Holt, Elias Wren i Victor Crane
- Głos: Sam: najpierw szczegół techniczny, potem człowiek. Elias: powoli, staroświecko, uparcie. Victor: krótko, „kto to podpisze?”.
- Typ: trzej mężczyźni i jedno etui
- Rzecz: Etui na okulary z kopią decyzji o odejściu
- Mówiący (~kto): sam = Sam Holt, elias = Elias Wren, victor = Victor Crane
- Wejście: Sam Holt. Ostatni raz przy tej szybie. Przyszedłem po etui na okulary, w środku jest kopia jednej decyzji. Elias przyszedł ze mną, a pan Crane stoi za nami z protokołem do zamknięcia. Wszyscy trzej chcemy tego samego: żeby to się dziś skończyło.
- W środku rzeczy (sekrety):
  - `d25_etui_kopia`: W etui kopia decyzji o odejściu Sama i wpis o niedoborze na zmianie. W rubryce „następca” puste pole. Na marginesie ołówkiem: „0809”. Wniosek: Niedobór na zmianie to zwykły sposób zapisania odejścia dyżurnego. Pole następcy zostało puste celowo.
- Decyzje:
  - `dolacz_kopie` (Dołącz kopię do uzgodnionego sprostowania). Zysk: Sam wychodzi czysty, a Victor zamyka audyt bez dziur. Strata: Kopia dokumentu trafia do Urzędu, a w Urzędzie przeczyta ją każdy, kto zapłaci za wgląd. Reakcja: „Dołączone, w dwóch egzemplarzach, jak trzeba. Sam wychodzi czysty, a ja podpisuję. Kto to podpisze? Ja. Dziękuję za sprawność.”
  - `zwroc_etui` (Zwróć Samowi etui z całą zawartością). Zysk: Sam wychodzi z rzeczami, a decyzja jest jego i nikogo więcej. Strata: Protokół zostaje niepełny, a referencje mogą nie przyjść. Reakcja: „Etui, okulary, kartka. Wszystko, jak leżało. Dziękuję. Protokół Victora zostaje, ale ja zostaję ze swoim.”
  - `zniszcz_kopie` (Zniszcz kopię przy Samie, bez wpisu). Zysk: Sam nie ma już śladu w papierach, a Victor nie ma czego kopiować. Strata: Protokół zostaje z dziurą, a Victor zapisze, kto ją zrobił i przy świadkach. Reakcja: „Na oczach wszystkich. Dobrze. Teraz nikt jej nie przeczyta. Dziękuję. Zrobiłbym to samo, tylko ręka mi się trzęsie.”

Stara rozmowa:
```
(tura 1) ? [sam] Co jest w tym etui?
= Okulary, które nie są moje, i kartka z decyzją o odejściu, z wpisem o niedoborze na zmianie. Kopię zrobiłem dla siebie, na wszelki wypadek.
(tura 1) ? [victor] Victor, czemu zamykasz audyt dziś?
= Bo dziś kończy się okres. Protokół musi mieć podpis i daty. Kto to podpisze? Ja, jeśli kopia jest czytelna i kompletna.
(tura 1) ? [sam] Sam, czemu zostawiłeś Verze pustą teczkę?
= Bo ktoś musiał zostawić coś nikomu. Teczkę, list, miejsce. Zostawiłem wszystkie trzy, żeby jedno z nich dotarło.
(tura 1) ? [@d25_etui_kopia] [sam] Na odwrocie kopii jest wpis: „Niedobór: pole następcy puste”. Co to?
= Że ktoś nie ma jeszcze nazwiska w tej kolumnie. Zostawiłem puste, żeby nikt go nie wpisał za niego. Victor, nie patrz tak.
(tura 2) ? [elias] Elias, po co dziś przyszedłeś?
= Zapytać, czy Sam się odezwał. I zdążyć, zanim ktoś zamknie księgę. Księgi się zamyka, kiedy człowiek zasypia.
(tura 2) ? [sam] Sam, co będziesz robił po odejściu?
= Kolega z portu dzwoni dziś na biuro o piątej trzydzieści po referencje. Jeśli ktoś potwierdzi, że byłem uczciwym dyżurnym, dostanę robotę.
(tura 2) ? [victor] Victor, co się stanie, jeśli kopia nie zostanie dołączona?
= Protokół będzie niepełny. Referencje wątpliwe. Kto to podpisze? Nie ja. Wolę komplet, bo komplet nie wraca z pytaniami.
(tura 2) ? [sam] Sam, czy kopia decyzji powinna trafić do Urzędu?
= Nie. Ale jeśli nie dołączę, nikt nie uwierzy, że odszedłem czysto. Taka to praca: obie opcje boli.
(tura 3) ? [sam] Sam, jak się czujesz, kiedy odchodzisz?
= Lekko, z jednym wyjątkiem. Zostawiam komuś ciężką rzecz i nie zapytałem, czy chce.
(tura 3) ? [elias] Elias, co powiesz Samowi na pożegnanie?
= Że dziękuję za oprawkę. I że oddawałem pieniądze ludziom, którzy nie prosili. Zacząłem od niego. Przepraszam, że tak późno.
(tura 3) ? [sam] Sam, kto usiądzie tu po mnie?
= Nie wiem. Vera pewnie już patrzy po przystankach. Wiem tylko, że nikt nie powinien zostać z tym listem bez drugiego człowieka. Dlatego dziś przy okienku są wszyscy, którzy mogli komuś pomóc.
(tura 3) ? [victor] Victor, czemu pytasz o referencje Sama, skoro to nie Twoja sprawa?
= Bo komplet to też referencja. Kto zamyka rozliczenie bez dziur, zostawia po sobie uczciwość. Nawet jeśli nie wie, czyją.
```

## d25_ksiega · stary dzień 25 · Elias Wren
- Głos: Powoli, staroświecko, uparcie. Dziś mówi mniej. Trzyma numerek w obu rękach i patrzy na księgę, nie na szybę.
- Typ: księga wydań, otwarta na pustej linii
- Rzecz: Księga wydań otwarta na linii 0809
- Mówiący (~kto): elias = Elias Wren
- Wejście: Elias Wren, numerek jeden. Księga leży otwarta na linii 0809, pustej, wąskiej. Pan Holt mówił, że linia jest dla następnego. Czekam, bo pytam o imię. Pytam, bo nikt nie pyta.
- W środku rzeczy (sekrety):
  - `d25_linia_0809`: Księga wydań otwarta na linii 0809. Pusta, z wąskim polem na imię. Tuszem w rogu: „0913”. Wniosek: To kolejny odcinek ogłoszenia, czyli kolejny dyżurny. Linia jest pusta, ale już czeka na kogoś.
- Decyzje:
  - `wpisz_siebie` (Wpisz „[imię]” w linię 0809). Zysk: Twoje imię stoi w księdze, a bilet na peronie czeka, aż ktoś podpisze po Tobie. Strata: Rotacja trwa i następnego wybiorą tak, jak wybrano Ciebie. Reakcja: „Iris, od drzwi: „Bilet jest. Czeka na peronie, aż ktoś podpisze po Tobie. Do poniedziałku.” Elias składa numerek: „Dobry początek.””
  - `wyrwij` (Wyrwij stronę, jak Sam). Zysk: Wychodzisz wolny, rotacja się zatrzymuje, a Skrytka traci kanał. Strata: Klienci zostają bez drogi, a Vera zostaje z kluczami do pustych szafek. Reakcja: „Wyrwana. Cicho. Jak Sam. Kanał Skrytki umiera, a ogłoszenia na słupie nie będzie. Nie wiem, czy to uczciwe wobec tych, którzy czekali.”
  - `list` (Zostaw list następnemu, dopisz własne linie). Zysk: Następny dyżurny dostaje całość, a nie tylko puste pole. Strata: List zostaje w szafce, a Ty zostajesz z pytaniem, czy dopisane wystarczy. Reakcja: „List zostaje w szafce 0809. Dopisane linie uzupełniają to, czego brakowało. Ktoś znajdzie to w pierwszy wieczór i ktoś będzie przy nim, żeby mu to powiedzieć.”
  - `zamknij` (Zamknij księgę i nic nie rób). Zysk: Czynsz zapłacony, nikt nie świętuje, a księga leży na swoim miejscu. Strata: Nic się nie zmienia, ale też nic nie wyjaśnia się za Ciebie. Reakcja: „Zamknięta. Linia 0809 zostaje pusta. Dziś nikt nie wchodzi, nikt nie wychodzi. Zostaje tylko czynsz i noc.”

Stara rozmowa:
```
(tura 1) ? [elias] Elias, co to za linia w księdze?
= Linia 0809. Wąska, od lat pusta. Pan Holt mówił, że jest dla następnego. Nie wiem, dla którego. Dziś pierwszy raz widzę ją z bliska.
(tura 1) ? [elias] Kto zapisuje imiona w tej księdze?
= Dyżurny. Tylko on ma prawo. Ja pytam, żeby ktoś zapisał, że ktoś tu był. Bez imienia człowiek jest numerkiem, nawet jeśli stoi przy szybie.
(tura 1) ? [elias] Elias, czemu zawsze pytasz o imię?
= Bo oprawkę znalazł człowiek, którego nie znałem. Żałuję, że nie spytałem o imię wcześniej. Teraz pytam każdego.
(tura 2) ? [elias] Elias, co by się stało, gdyby linia została pusta?
= Nic. Księga leży, a ludzie wchodzą i wychodzą. Ale nikt by nie wiedział, że ktoś tu siedział. A to różnica.
(tura 2) ? [elias] Elias, czy Sam kazał Ci tu być?
= Nie kazał. Mówił, że będzie dziś ktoś ważny, i że wolałby, żeby ktoś go zobaczył. Zostałem, bo nie wypada odchodzić, kiedy ktoś ma wybierać.
(tura 2) ? [elias] Elias, wiesz, co jest w księdze, czego Ci nie pokazywano?
= Wiem, że strona 41 była kiedyś cała. Wiem, że ktoś ją wyrwał. Nie pytam, kto. Wiem, że ktoś ją znowu chciałby mieć.
(tura 3) ? [elias] Elias, co chcesz od tej księgi?
= Żeby linia nie była pusta, kiedy wyjdę. Albo żeby ktoś jej nie wypełnił bez zgody. Nie umiem się zdecydować, więc wybór zostawiam komuś młodszemu.
(tura 3) ? [elias] Elias, co powiesz osobie, która tu zostanie?
= Że dziękuję. Że oprawkę mam. Że imię zapisuję w pamięci, jeśli nie w księdze. To też jest sposób, żeby ktoś był.
(tura 3) ? [elias] Elias, czy jesteś pewien, że chcesz, żeby to była moja decyzja?
= Nie. Ale jest tylko jedna osoba po tej stronie szyby i tylko ona może zdecydować. Przykro mi, że to wypadło na Ciebie.
```
