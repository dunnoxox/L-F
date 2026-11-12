# Spójność dialogów: raport automatu

Wygenerowane przez `node qa/spojnosc_dialogow.js`. Automat tylko wskazuje podejrzane miejsca; o tym, czy para pytanie/odpowiedź gra, decyduje czytanie (`--pelny PLIK` daje wypis wszystkich węzłów).

Scen: 55, par pytanie/odpowiedź: 647. W nowym zapisie (drzewo wątków): 37 scen, w starym (trzy sztywne tury): 18.

| flaga | drzewa | stare tury | co znaczy |
|---|---|---|---|
| PROZNIA | 33 | 69 | opcja nie zaczepia się o poprzednią kwestię gościa na którejś ścieżce |
| WIEDZA | 2 | 109 | opcja zakłada nazwę albo liczbę, której gracz nie musiał usłyszeć |
| LUZNE | 138 | 34 | opcja nawiązuje do rozmowy, ale nie do końcówki żadnej odpowiedzi (miękkie) |
| OBOK | 288 | 136 | odpowiedź bez wspólnego słowa z pytaniem (miękkie, sprawdzić ręcznie) |
| KALKA | 0 | 0 | zwrot jak z tłumaczenia |
| PLEC | 1 | 0 | gracz dostaje płeć albo pan/pani |
| DLUGIE | 0 | 0 | za długa kwestia |

## d1_thomas (dzień 1, Thomas Ward, 71, drzewo)

- **OBOK** 1: „Jak wygląda ta rękawiczka?” -> „Brązowa skóra, damska, mały rozmiar. Przy kciuku zszyłem ją białą nitką, bo ciemnej w domu…”
- **OBOK** 1.1: „Biała nitka na brązowej skórze? Czemu nie u kaletnika?” -> „Bo tym razem to ja miałem zszyć. Ellen przez czterdzieści lat cerowała po mnie wszystko, r…”
- **OBOK** 1.2: „Jak sprawdzić, że to ta, a nie podobna?” -> „Drugą mam w kieszeni, o. Wystarczy położyć je kciukami do siebie: w prawej nitka czarna, w…”
- **LUZNE** 1.2: dopytanie „Jak sprawdzić, że to ta, a nie podobna?” nie zaczepia się o: „…Przy kciuku zszyłem ją białą nitką, bo ciemnej w domu nie było. Krzywo, ale trzyma.”
- **OBOK** 2: „Gdzie i kiedy zginęła?” -> „W czwórce, wczoraj wieczorem, jak jechałem do Doków. Leżała mi na kolanie i na zakręcie zs…”
- **OBOK** 2.1: „Po co wieczorem do Doków?” -> „Do córki, do Claire. W czwartki gotuje rosół i udaje, że przypadkiem wyszło za dużo. Ona n…”
- **LUZNE** 2.1: dopytanie „Po co wieczorem do Doków?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Leżała mi na kolanie i na zakręcie zsunęła się pod siedzenie. Zauważyłem dopiero w domu.”
- **OBOK** 2.1.1: „Czemu Claire ma nie wiedzieć?” -> „O to już proszę nie pytać. To sprawa między mną a córką, nie między mną a okienkiem.…”
- **LUZNE** 2.1.1: dopytanie „Czemu Claire ma nie wiedzieć?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…W czwartki gotuje rosół i udaje, że przypadkiem wyszło za dużo. Ona nie wie, że rękawiczka zginęła, i wolałbym, żeby tak zostało.”
- **OBOK** 2.1.2: „A jeśli Claire sama tu przyjdzie pytać?” -> „To proszę jej powiedzieć, że wszystko się znalazło. Ona martwi się o mnie bardziej niż ja …”
- **OBOK** 3: „Po co wozić rękawiczki żony tramwajem?” -> „Noszę je w kieszeni płaszcza, jedną w drugiej. Jakbym trzymał ją za rękę. Głupie, wiem.…”
- **OBOK** 3.1: „Wcale nie głupie. Długo byliście razem?” -> „Czterdzieści cztery lata. Poznaliśmy się w tramwaju, w dwójce, której już nie ma. Dlatego …”
- **OBOK** 4.1: „To skąd w mankiecie kwit z tego biura, numer 0417?” -> „No dobrze, byłem tu. Sześć tygodni temu zgubiłem prawą. Taki młody człowiek, Sam, oddał mi…”
- **OBOK** 4.1.1: „Sam mówił coś jeszcze?” -> „Że lewa też kiedyś przyjdzie, bo rękawiczki chodzą parami. I żebym o nim za dużo nie opowi…”
- **LUZNE** 4.1.1: dopytanie „Sam mówił coś jeszcze?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Powiedział, że wpisu nie trzeba, bo to pamiątka, a nie zguba. Wstyd mi było, że gubię drugi raz.”
- **OBOK** 5: „W mankiecie jest kwit z tego biura, numer 0417. Skąd?” -> „No dobrze, byłem tu już. Sześć tygodni temu zgubiłem prawą. Taki młody człowiek, Sam, odda…”
- **OBOK** 5.1: „Sam mówił coś jeszcze?” -> „Że lewa też kiedyś przyjdzie, bo rękawiczki chodzą parami. I żebym o nim za dużo nie opowi…”
- **LUZNE** 5.1: dopytanie „Sam mówił coś jeszcze?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Powiedział, że wpisu nie trzeba, bo to pamiątka, a nie zguba. Wstyd mi było, że gubię drugi raz.”
- **OBOK** 5.2: „Nie ma się czego wstydzić. Każdy coś gubi.” -> „Ale nie dwa razy to samo, po jednej naraz. Ellen by powiedziała, że robię to specjalnie, ż…”

## d1_rosa (dzień 1, Rosa Vale, 33, drzewo)

- **OBOK** 1: „Jak wygląda ta koperta?” -> „Brązowa, z jedną zszywką. Zszywka wbita krzywo, bo kierownik zszywa na stojąco i w biegu.…”
- **OBOK** 1.1: „Jest na niej jakieś nazwisko?” -> „Moje, ołówkiem: Vale, przez V. I kwota w rogu, 129. Dziewiątka wygląda jak ósemka, ale to …”
- **LUZNE** 1.1: dopytanie „Jest na niej jakieś nazwisko?” nie zaczepia się o: „…Brązowa, z jedną zszywką. Zszywka wbita krzywo, bo kierownik zszywa na stojąco i w biegu.”
- **OBOK** 1.2: „Co jest w środku oprócz pieniędzy?” -> „Kartka z naszymi nocami, złożona na pół. Kierownik wypisuje na niej, kto ile przerobił.…”
- **LUZNE** 1.2: dopytanie „Co jest w środku oprócz pieniędzy?” nie zaczepia się o: „…Brązowa, z jedną zszywką. Zszywka wbita krzywo, bo kierownik zszywa na stojąco i w biegu.”
- **OBOK** 2: „Gdzie i o której ją zgubiłaś?” -> „W jedenastce, o szóstej rano, po nocce. Położyłam ją obok, żeby zapiąć torbę, i przysnęłam…”
- **OBOK** 2.1: „Po nocce? To od której jesteś na nogach?” -> „Od wczoraj, od dziewiątej wieczorem. Potem mała do szkoły, potem tutaj. Śpię w tramwajach …”
- **LUZNE** 2.1: dopytanie „Po nocce? To od której jesteś na nogach?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Położyłam ją obok, żeby zapiąć torbę, i przysnęłam. Obudziłam się na pętli, już bez koperty.”
- **OBOK** 3: „Skąd pewność, że było w niej równo 129 dolarów?” -> „Bo liczyłam. Trzy noce po czterdzieści trzy, razem sto dwadzieścia dziewięć. Przeliczyłam …”
- **OBOK** 3.1: „Tylko trzy noce? Tydzień ma więcej.” -> „Miałam cztery. Za czwartą nie dostałam. To długa historia, a ja nie mam siły na długie.…”
- **OBOK** 3.1.1: „Kto zdecydował, że za czwartą nie dostaniesz?” -> „Iris Bell. Zarządza naszą kamienicą, odbiera za nas wypłaty z pralni i rozdaje w kopertach…”
- **OBOK** 3.2: „Na co pójdą te pieniądze?” -> „Na czynsz, jutro termin. Za spóźnienie zarządczyni dolicza dwadzieścia dolarów kary. Czyli…”
- **LUZNE** 3.2: dopytanie „Na co pójdą te pieniądze?” nie zaczepia się o: „…Trzy noce po czterdzieści trzy, razem sto dwadzieścia dziewięć. Przeliczyłam trzy razy, zanim wsiadłam.”
- **OBOK** 4.1: „Czemu się z nią nie kłóciłaś?” -> „Bo wynajmuje mi pokój i załatwiła mi tę pralnię. Jak się pokłócę, nie mam ani jednego, ani…”
- **PROZNIA** 4.1: dopytanie „Czemu się z nią nie kłóciłaś?” nie zaczepia się o: „…Iris Bell, nasza zarządczyni, skreśliła mi całą noc, nie pół. Cztery godziny przerobiłam za darmo.”
- **LUZNE** 4.2: dopytanie „A córka? Już zdrowa?” nie zaczepia się o: „…Iris Bell, nasza zarządczyni, skreśliła mi całą noc, nie pół. Cztery godziny przerobiłam za darmo.”
- **OBOK** 4.2.1: „Kto zostaje z małą, kiedy masz nockę?” -> „A to już nie twoja sprawa. Zgubiłam kopertę, nie dziecko.…”
- **PROZNIA** 4.2.1: dopytanie „Kto zostaje z małą, kiedy masz nockę?” nie zaczepia się o: „…Dziś sama zrobiła sobie kanapki do szkoły. I mnie też.”

## d2_jonah (dzień 2, Jonah Pike, 22, drzewo)

- **OBOK** 1: „Co jest w tym plecaku?” -> „Ładowarka, książka, kupa starych biletów. I pudełko, w kieszeni od strony pleców. Pudełko …”
- **OBOK** 1.1: „Co jest w pudełku?” -> „Prezent. Niespodzianka. Więcej nie powiem, bo zapeszę.…”
- **OBOK** 1.1.1: „Dla kogo ta niespodzianka?” -> „Dla June. To moja dziewczyna, pracuje w piekarni, wstaje o czwartej. O siódmej wpada do do…”
- **OBOK** 1.2: „Po co ci kupa starych biletów?” -> „Każdy jest z kursu, którym jechałem z June. Na odwrocie piszę datę. Wiem, że to dziwne. Zn…”
- **LUZNE** 1.2: dopytanie „Po co ci kupa starych biletów?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…I pudełko, w kieszeni od strony pleców. Pudełko jest najważniejsze.”
- **OBOK** 2: „Gdzie i kiedy go zostawiłeś?” -> „W jedenastce, wczoraj wieczorem. Wcisnąłem go nogą pod składane siedzenie przy drzwiach, ż…”
- **OBOK** 2.1: „Wysiadłeś bez plecaka i nic cię nie tknęło?” -> „Patrzyłem na nią, nie na plecak. Skapnąłem się w domu, jak chciałem sprawdzić, czy pudełko…”
- **OBOK** 2.2: „Kim jest June?” -> „Moją dziewczyną. Dwa lata i trzy miesiące, liczę. Pracuje w piekarni, pachnie drożdżówką n…”
- **OBOK** 3.1: „A jak powie „nie”?” -> „To będzie najgorszy poranek w moim życiu. Ale wolę usłyszeć „nie”, niż dalej nie wiedzieć.…”
- **LUZNE** 3.1: dopytanie „A jak powie „nie”?” nie zaczepia się o: „…O coś, o co pyta się raz w życiu. Dlatego potrzebuję plecaka.”
- **OBOK** 3.2: „Wiesz już, jak ją zapytasz?” -> „Mam trzy wersje na serwetce. Dwie skreśliłem. Trzeciej się boję, bo jest krótka i nie ma s…”
- **LUZNE** 3.2: dopytanie „Wiesz już, jak ją zapytasz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…O coś, o co pyta się raz w życiu. Dlatego potrzebuję plecaka.”
- **PROZNIA** 4.1: dopytanie „June wie, że pierścionek jest na raty?” nie zaczepia się o: „…Ale jak nie teraz, to kiedy? I tak, wiem, jak to brzmi.”

## d2_hana (dzień 2, Hana Moreau, 26, drzewo)

- **OBOK** 1: „Jak wygląda futerał?” -> „Czarny, sztywny, mosiężne zamki. Na wierzchu zielona naklejka, a rączka owinięta czerwoną …”
- **OBOK** 1.2: „Co jest w środku oprócz skrzypiec?” -> „Kalafonia, jedwabna szmatka i nuty Mendelssohna z moimi zapiskami ołówkiem. Po tych zapisk…”
- **LUZNE** 1.2: dopytanie „Co jest w środku oprócz skrzypiec?” nie zaczepia się o: „…Czarny, sztywny, mosiężne zamki. Na wierzchu zielona naklejka, a rączka owinięta czerwoną taśmą, bo skóra się przetarła.”
- **OBOK** 2: „Gdzie go zostawiłaś?” -> „W czwórce, w ostatnim kursie. Postawiłam między nogami, zadzwoniła mama i wysiadłam z tele…”
- **LUZNE** 2.2: dopytanie „Skrzypaczka zapomina skrzypiec?” nie zaczepia się o: „…Postawiłam między nogami, zadzwoniła mama i wysiadłam z telefonem przy uchu. Bez futerału.”
- **OBOK** 3.2: „W środku powinna być etykieta lutnika. Co na niej jest?” -> „Jest jakaś, mała. Nazwiska nie pamiętam. Od lat tam nie zaglądałam.…”
- **LUZNE** 3.2: dopytanie „W środku powinna być etykieta lutnika. Co na niej jest?” nie zaczepia się o: „…Oczywiście, że moje. Gram na nich od siedmiu lat.”
- **OBOK** 4: „Co się stanie, jeśli nie dostaniesz ich przed ósmą?” -> „Zagra ktoś inny. Weszłam z listy rezerwowej, drugiego terminu nie będzie. Bez skrzypiec ni…”
- **PROZNIA** 4.1: dopytanie „Daleko masz stąd do filharmonii?” nie zaczepia się o: „…Weszłam z listy rezerwowej, drugiego terminu nie będzie. Bez skrzypiec nie mam po co tam iść.”
- **OBOK** 5: „Pod pokrywą jest kartka: „Wypożyczone do 7 sierpnia”. Dziś jest dziesiąty.” -> „Termin minął w sobotę. Komisja, która przedłuża, zbiera się dopiero w czwartek. Nie jestem…”
- **LUZNE** 5.1: dopytanie „Konserwatorium wie, że skrzypce jeździły po nocy tramwajem?” nie zaczepia się o: „…Nie jestem złodziejką. Spóźniłam się trzy dni, a przesłuchanie mam za parę godzin.”

## d2_ines (dzień 2, Ines Calloway, 61, drzewo)

- **OBOK** 1: „Jak wygląda ten parasol?” -> „Czarny, automatyczny, z drewnianą rączką w kształcie kaczki. Kaczka ma odłamany dziób z le…”
- **OBOK** 2: „Gdzie go zostawiłaś?” -> „W czwórce, na haczyku przy tylnych drzwiach. Wysiadałam na pętli z torbami w obu rękach. P…”
- **OBOK** 3: „O jakie ogłoszenie pytasz?” -> „„Szukam kota, rudego, od zimy. Odpowiedzi na słupie przy wejściu”. Wasz słup stoi w dobrym…”
- **LUZNE** 3.1: dopytanie „Jak się wabi ten kot?” nie zaczepia się o: „…Wasz słup stoi w dobrym miejscu. Wolę zapytać, niż żeby mi je ktoś zrywał.”
- **OBOK** 3.2: „Od zimy? Po takim czasie koty raczej nie wracają.” -> „Wiem, ile żyje kot na ulicy. Ale na te ogłoszenia ktoś odpisuje. Zostawia kartki, nocą. Ni…”
- **LUZNE** 3.2: dopytanie „Od zimy? Po takim czasie koty raczej nie wracają.” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wasz słup stoi w dobrym miejscu. Wolę zapytać, niż żeby mi je ktoś zrywał.”
- **OBOK** 3.2.1: „Co jest na tych kartkach?” -> „Godziny. Numery linii. Raz samo „jeszcze nie”. O kocie ani razu. Proszę z tego nie wyciąga…”
- **LUZNE** 3.2.1: dopytanie „Co jest na tych kartkach?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Nie widziałam kto. Dopóki odpisuje, wieszam dalej.”
- **LUZNE** 4.1: dopytanie „To na pewno jest ogłoszenie o kocie?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Żeby mieć przy sobie, kiedy deszcz rozmoczy tamte. Nic więcej.”

## d3_maz_i_siostra (dzień 3, Evan Doyle, 37, i Lena Brandt, 31, drzewo)

- **OBOK** 1: „Jak wygląda ten telefon?” -> „Czarny, w skórzanym etui. Róg etui się odkleja. Kupiłem je Mai na rocznicę i sto razy mówi…”
- **LUZNE** 1.1: dopytanie „Znasz kod do tego telefonu?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Róg etui się odkleja. Kupiłem je Mai na rocznicę i sto razy mówiłem, żeby podkleiła.”
- **WIEDZA** 2: „Kiedy Maya go zgubiła?” używa „may”, a gracz nie musiał tego usłyszeć na tej ścieżce
- **OBOK** 2.2: „Evan, skąd wiecie, że akurat w jedenastce?” -> „Od policji. Motorniczy oddał telefon do zajezdni i zapamiętał kurs. Posterunkowy Reyes pow…”
- **LUZNE** 2.2: dopytanie „Evan, skąd wiecie, że akurat w jedenastce?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Tylko że Maya nie gubi rzeczy. Zostawia je tam, gdzie ktoś przechowa i nie będzie pytał po co.”
- **OBOK** 3.1: „Do pracy po kolacji? Na noc?” -> „Jest elektryczką, bierze nocne awarie. Wychodziła o różnych porach. Nie pilnowałem jej, je…”
- **OBOK** 3.3: „Lena, tak to wyglądało?” -> „Mnie przy tej kolacji nie było. Evan mówi, że zwyczajnie, to pewnie tak mu się wydawało.…”
- **LUZNE** 3.3: dopytanie „Lena, tak to wyglądało?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Żadnej kłótni. Zjedliśmy kolację, Maya poszła do pracy i nie wróciła.”
- **OBOK** 4: „Evan, co zrobisz z telefonem, jeśli go dostaniesz?” -> „Zaniosę Reyesowi na komisariat przy Rynku. Jeszcze tej nocy.…”
- **OBOK** 4.1: „A jeśli telefon zostanie u nas w depozycie?” -> „To policja dostanie go za późno. Zróbmy inaczej: sto dolarów od ręki i niczego nie trzeba …”
- **LUZNE** 4.1: dopytanie „A jeśli telefon zostanie u nas w depozycie?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zaniosę Reyesowi na komisariat przy Rynku. Jeszcze tej nocy.”
- **OBOK** 4.2: „Lena, a ty co byś z nim zrobiła?” -> „Schowałabym u siebie, aż Maya się odezwie. To jej rzecz. Nie Evana i nie policji.…”
- **LUZNE** 4.2: dopytanie „Lena, a ty co byś z nim zrobiła?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zaniosę Reyesowi na komisariat przy Rynku. Jeszcze tej nocy.”

## d3_dana (dzień 3, Dana Ruiz, 38, drzewo)

- **OBOK** 1: „Jak wygląda ten budzik?” -> „Blaszany, okrągły, dwa dzwonki na górze. Mam go dwanaście lat. Dzwoni tak, że sąsiad zza ś…”
- **OBOK** 1.1: „Ma jakiś znak szczególny?” -> „Od spodu naklejkę „Mama”, bo od mamy go dostałam. I wgniecenie przy prawym dzwonku, jak zl…”
- **PROZNIA** 1.1: dopytanie „Ma jakiś znak szczególny?” nie zaczepia się o: „…Mam go dwanaście lat. Dzwoni tak, że sąsiad zza ściany wstaje razem ze mną.”
- **OBOK** 1.2: „Sąsiad się nie skarży?” -> „Raz przyszedł. Powiedziałam, że ma budzenie gratis, i od tej pory zostawia mi pod drzwiami…”
- **OBOK** 2: „Na którą jest nastawiony?” -> „Na czwartą piętnaście. Wskazówka od budzenia jest czerwona i krzywa, sama ją prostowałam k…”
- **LUZNE** 2.1.1: dopytanie „Długo już pracujesz w zajezdni?” nie zaczepia się o: „…Jak wstanę kwadrans po czwartej, zdążę na kawę. Jak nie, to na nic.”
- **OBOK** 3: „Po co wozisz budzik tramwajem?” -> „Bo nocowałam u siostry i wzięłam go ze sobą. Samego w domu nie zostawię. Śmiej się, proszę…”
- **OBOK** 3.1: „Co robiłaś u siostry?” -> „Pilnowałam jej dzieciaków, bo miała nockę. Trójka. Po takim wieczorze człowiek zostawiłby …”
- **LUZNE** 3.1: dopytanie „Co robiłaś u siostry?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Samego w domu nie zostawię. Śmiej się, proszę bardzo.”
- **OBOK** 3.1.1: „A ich ojciec gdzie był?” -> „Hola. Przyszłam po budzik, nie do spowiedzi. O siostrę pytaj siostrę.…”
- **LUZNE** 3.1.1: dopytanie „A ich ojciec gdzie był?” nie zaczepia się o: „…Trójka. Po takim wieczorze człowiek zostawiłby w tramwaju własną głowę.”

## d4_iris (dzień 4, Iris Bell, 56, drzewo)

- **OBOK** 1: „Jak wygląda ta paczka?” -> „Płaska, w szarym płótnie, przewiązana sznureczkiem. W środku nieduża kasetka na kłódkę. Ni…”
- **OBOK** 1.1.1: „Pokwitowania pod kłódką?” -> „Ludzie są wścibscy, a cudze długi to ulubiona lektura sąsiadów. Kłódeczka kosztuje dolara,…”
- **OBOK** 2: „Gdzie dokładnie została?” -> „W szóstce, w ostatnim kursie, na półce nad siedzeniem. Zawsze tam kładę i zawsze pamiętam.…”
- **LUZNE** 2.1: dopytanie „Wozisz papiery lokatorów nocnym tramwajem?” nie zaczepia się o: „…Zawsze tam kładę i zawsze pamiętam. Wczoraj pierwszy raz nie.”
- **OBOK** 2.2: „Co cię wczoraj tak rozproszyło?” -> „Jedna lokatorka spóźnia się z czynszem i liczyłam w głowie jej karę. Człowiek zamyśli się …”
- **OBOK** 3: „Kim są lokatorzy, którzy na nią czekają?” -> „Dwadzieścia rodzin spod dziewiątki. Zbieram od nich zaliczki na remont i trzymam ich dokum…”
- **LUZNE** 3.1: dopytanie „Czemu nikt z nich nie przyszedł po nią sam?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zabawne, prawda? Akurat mnie się zgubiło.”
- **OBOK** 3.2: „Do kiedy paczka musi do nich wrócić?” -> „Najlepiej jeszcze dziś. Nie lubię naciskać, ale moi lokatorzy źle śpią, kiedy ich sprawy l…”
- **LUZNE** 3.2: dopytanie „Do kiedy paczka musi do nich wrócić?” nie zaczepia się o: „…Zabawne, prawda? Akurat mnie się zgubiło.”
- **OBOK** 4.1: „Poprzednik brał takie kopertki?” -> „Sam był bardzo życzliwym człowiekiem. Rozumiał, że nie wszystko musi mieć numerek. Szkoda,…”
- **LUZNE** 4.1: dopytanie „Poprzednik brał takie kopertki?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…To nie opłata, tylko wyraz uznania. Sto dwadzieścia dolarów.”
- **OBOK** 4.2: „A jeśli wpis mimo wszystko będzie?” -> „To będzie. Poczekam na kwit jak każdy. Tylko że nowi zwykle sami odchodzą po pierwszym tyg…”
- **LUZNE** 4.2: dopytanie „A jeśli wpis mimo wszystko będzie?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…To nie opłata, tylko wyraz uznania. Sto dwadzieścia dolarów.”
- **OBOK** 5: „W kasetce widać paszport z wyciętą stroną. Czyj?” -> „Kogoś, kto w tym tygodniu wyjeżdża. Jeśli paczka tu zostanie, nie wyjedzie. Więcej wiedzie…”
- **OBOK** 5.1: „Na blankiecie stoi: „dla nocnej zmiany, bez wpisu”. Kto to pisał?” -> „Twój poprzednik. Ładny charakter pisma, prawda? Umowa była prosta: ja nie pytam, co on rob…”
- **LUZNE** 5.1: dopytanie „Na blankiecie stoi: „dla nocnej zmiany, bez wpisu”. Kto to pisał?” nie zaczepia się o: „…Jeśli paczka tu zostanie, nie wyjedzie. Więcej wiedzieć nie trzeba, uwierz starszej kobiecie.”

## d5_noah (dzień 5, Noah Reyes, 42, drzewo)

- **OBOK** 1: „Jak wygląda ten notes?” -> „Czarny, na spirali, do kieszeni. Wgnieciony z lewej strony, bo noszę go pod kaburą.…”
- **OBOK** 1.1: „Co w nim jest?” -> „Notatki ze służby. Godziny, nazwiska. Nic, co wolno czytać przy okienku. To moje zmartwien…”
- **LUZNE** 1.1: dopytanie „Co w nim jest?” nie zaczepia się o: „…Czarny, na spirali, do kieszeni. Wgnieciony z lewej strony, bo noszę go pod kaburą.”
- **OBOK** 2: „Gdzie go zostawiłeś?” -> „W jedenastce, po dyżurze, na siedzeniu obok. Zagadałem się z motorniczym i wysiadłem bez n…”
- **LUZNE** 2.1: dopytanie „Policjant wraca z dyżuru tramwajem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zagadałem się z motorniczym i wysiadłem bez notesu. Pierwszy raz od piętnastu lat.”
- **OBOK** 2.2: „O czym rozmawiałeś z motorniczym?” -> „O czwartkowym kursie. To on znalazł pod siedzeniem telefon Mai Doyle. Czyli: pytałem, kto …”
- **OBOK** 3: „Jak idzie sprawa Mai Doyle?” -> „Powoli. Mąż zgłosił zaginięcie, siostra twierdzi, że nic nie wie. Czyli: dwoje ludzi i żad…”
- **OBOK** 3.1: „Do kiedy masz na nią czas?” -> „Do wtorku, siódmego września, do szóstej rano. Potem akta idą do wydziału, a tam nikt nie …”
- **PROZNIA** 3.1: dopytanie „Do kiedy masz na nią czas?” nie zaczepia się o: „…Mąż zgłosił zaginięcie, siostra twierdzi, że nic nie wie. Czyli: dwoje ludzi i żadnego konkretu.”
- **OBOK** 3.2: „Wierzysz mężowi?” -> „Wierzę godzinom. Na razie jego godziny mi się nie składają. Resztę zostawiam dla siebie.…”
- **LUZNE** 3.2: dopytanie „Wierzysz mężowi?” nie zaczepia się o: „…Mąż zgłosił zaginięcie, siostra twierdzi, że nic nie wie. Czyli: dwoje ludzi i żadnego konkretu.”
- **OBOK** 3.2.1: „Można ci jakoś pomóc?” -> „Można. Jak przy tym okienku zdarzy się coś dziwnego, zapisz godzinę i powiedz mi. Najlepie…”
- **PROZNIA** 3.2.1: dopytanie „Można ci jakoś pomóc?” nie zaczepia się o: „…Na razie jego godziny mi się nie składają. Resztę zostawiam dla siebie.”
- **OBOK** 4: „Evan dostał od nas telefon. Co z nim zrobił?” -> „Przyniósł mi go rano. Zablokowany. Kodu podobno nie zna, bo żona „nigdy nie miała kodu”. C…”
- **OBOK** 7.1: „Skąd wiedział w czwartek, że żona nie wróci?” -> „Dobre pytanie. Zadam mu je sam, jak będę miał notes w ręku. A na razie umówmy się, że nikt…”
- **LUZNE** 7.1: dopytanie „Skąd wiedział w czwartek, że żona nie wróci?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Może zbieg okoliczności. To moje zmartwienie.”

## d5_victor (dzień 5, Victor Crane, 51, drzewo)

- **OBOK** 1: „Jak wygląda ta teczka?” -> „Szary skaj, klamra z przodu, na rogu naklejka inspekcji. Na klapie inicjały V.C. i numer c…”
- **OBOK** 1.1: „Co jest w środku?” -> „Formularze, pieczątka, wykaz wydań z tego biura. Nikt spoza inspekcji nie ma prawa tam zag…”
- **LUZNE** 1.1: dopytanie „Co jest w środku?” nie zaczepia się o: „…Na klapie inicjały V.C. i numer czterdzieści siedem.”
- **OBOK** 2: „Gdzie ją zostawiłeś?” -> „W szóstce, o 4:10, na siedzeniu obok. Wysiadłem przy zajezdni bez teczki. Nie zdarza mi si…”
- **LUZNE** 2.1: dopytanie „Inspektor jeździ nocnym tramwajem?” nie zaczepia się o: „…Wysiadłem przy zajezdni bez teczki. Nie zdarza mi się to.”
- **OBOK** 2.1.1: „Nikt. To było ogłoszenie w gazecie.” -> „„Bez referencji”. Czytałem. Poprzedni dyżurny też był bez referencji. Zapiszę to sobie.…”
- **LUZNE** 2.1.1: dopytanie „Nikt. To było ogłoszenie w gazecie.” nie zaczepia się o: „…A skoro już pytamy: kto cię tu skierował? W aktach nie mam żadnego skierowania.”
- **OBOK** 3: „Co właściwie kontrolujesz w tym biurze?” -> „Czy księga wydań zgadza się z magazynem i z kwitami. Wpis, kwit, podpis. Czasem któregoś b…”
- **LUZNE** 3.2: dopytanie „Za poprzednika wydania były w porządku?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Czasem któregoś brakuje. W tej księdze brakuje całej strony czterdzieści jeden.”
- **OBOK** 3.2.1: „Co będzie, jeśli teczki rano nie będzie?” -> „Audyt przesunie się o tydzień. Przez tydzień ktoś zdąży poprawić księgę. Nie chcę nikomu d…”
- **OBOK** 4: „W wykazie dwie pozycje są dopisane innym tuszem, z parafą V.C. Kto dopisywał?” -> „Ja. Pięć tygodni temu, z pamięci, po rozmowie z poprzednikiem. Bez dowodu. To niezgodne z …”
- **OBOK** 4.1: „Inspektor poprawia papiery po fakcie?” -> „Raz. Żeby wydania Holta w ogóle gdzieś istniały. Jeśli to wyjdzie, moja kontrola jest niew…”
- **LUZNE** 4.1: dopytanie „Inspektor poprawia papiery po fakcie?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Bez dowodu. To niezgodne z regulaminem, więc proszę tego nie powtarzać.”

## d5_gus (dzień 5, Gus Pell, 55, drzewo)

- **OBOK** 1: „Jak wygląda ten portfel?” -> „Brązowy, wytarty, na zatrzask. Mam go jedenaście lat, wygiął się pod moją kieszeń. Tylko o…”
- **OBOK** 1.1: „Z jakiego „tamtego życia”?” -> „Przejęzyczyłem się. Tylko tyle. Człowiek o tej porze gada, co mu ślina na język przyniesie…”
- **OBOK** 2.1: „Ile lat ma córka?” -> „Siedem. Na zdjęciu ma pięć, nowszego nie mam. Tylko nie pytaj, kiedy ją ostatnio widziałem…”
- **OBOK** 2.2: „Na jakie nazwisko jest prawo jazdy?” -> „Pell. Gustaw Pell. Gus. Tylko proszę nie zapisywać, że byłem w szlafroku.…”
- **PROZNIA** 2.2.1: dopytanie „Adres do wpisu?” nie zaczepia się o: „…Gus. Tylko proszę nie zapisywać, że byłem w szlafroku.”
- **LUZNE** 3.1: dopytanie „Może zadzwonić do domu, że nic ci nie jest?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Z żoną, z teściową, z obiema naraz. Tylko o rodzinie nie rozmawiajmy.”
- **PROZNIA** 3.2: dopytanie „Dokąd jedziesz o 5:40?” nie zaczepia się o: „…Z żoną, z teściową, z obiema naraz. Tylko o rodzinie nie rozmawiajmy.”
- **OBOK** 3.2.1: „A kto miałby pytać?” -> „Ci, co znaleźli mnie poprzednim razem. Wtedy urzędnik wydał mnie z pieczątką, nawet z dwie…”
- **OBOK** 4: „W portfelu są dwa dowody: Pell i Ferro. To samo zdjęcie. Który jest twój?” -> „Dwa? To się da wytłumaczyć. Jeden po dziadku. A który mój, nie powiem, bo to się zawsze źl…”
- **OBOK** 4.1: „Dziadek miał twoją twarz?” -> „Dobrze, już dobrze. Jeden jest stary, drugi nowy. Ktoś mi pomógł zacząć od początku i o 5:…”
- **OBOK** 5: „Za zdjęciem córki leży 250 dolarów. Skąd tyle?” -> „To nie na życie, tylko na wyjazd. Wszystko, co mam. Tylko nie mów nikomu, ile.…”

## d6_ada (dzień 6, Ada Vale, 10, drzewo)

- **OBOK** 1: „Jak wygląda ten królik?” -> „Szary, pluszowy. Jedno ucho ma doszyte czerwoną nitką. I dziurkę w nosie, jakby miał katar…”
- **OBOK** 1.1: „Ktoś go bardzo naprawiał. Myślisz, że jest czyjś ulubiony?” -> „Na pewno. Jak się komuś nie chce, to nie przyszywa ucha, tylko kupuje nowego. Dlatego nie …”
- **LUZNE** 1.1: dopytanie „Ktoś go bardzo naprawiał. Myślisz, że jest czyjś ulubiony?” nie zaczepia się o: „…Jedno ucho ma doszyte czerwoną nitką. I dziurkę w nosie, jakby miał katar.”
- **OBOK** 2: „Gdzie dokładnie go znalazłaś?” -> „Na ławce przy pętli szóstki, trzy kroki od słupka. Liczyłam. Siedział sam, jakby na kogoś …”
- **LUZNE** 2.1: dopytanie „Co robisz sama w nocy na pętli?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Liczyłam. Siedział sam, jakby na kogoś czekał.”
- **OBOK** 2.2: „Ktoś jeszcze był wtedy przy ławce?” -> „Pan konduktor z szóstki palił przy budce. Patrzył na zegarek, którego nie miał. I jakaś pa…”
- **LUZNE** 2.2: dopytanie „Ktoś jeszcze był wtedy przy ławce?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Liczyłam. Siedział sam, jakby na kogoś czekał.”
- **OBOK** 3.1: „Co ma być na tym kwicie?” -> „Że Ada Vale, dziesięć lat, znalazła królika. Dużymi literami, bo pani w szkole czyta tylko…”
- **LUZNE** 3.1: dopytanie „Co ma być na tym kwicie?” nie zaczepia się o: „…Pani w szkole mówi, że to duża różnica. A mama mówi, że bez kwitu nikt nie uwierzy.”
- **PROZNIA** 3.2: dopytanie „Jaki adres wpisać?” nie zaczepia się o: „…Pani w szkole mówi, że to duża różnica. A mama mówi, że bez kwitu nikt nie uwierzy.”

## d6_leo (dzień 6, Leo Marsh, 46, drzewo)

- **OBOK** 1: „Jak wygląda ten zegarek?” -> „Mosiężny, kieszonkowy, na łańcuszku. Na wieczku grawer: „za trzydzieści lat”. Żona mówi, ż…”
- **OBOK** 1.1: „Trzydzieści lat czego?” -> „Służby. Ale nie mojej. To zegarek dziadka mojej żony, też jeździł na szóstce. Przeżył trze…”
- **OBOK** 1.2: „Konduktor bez zegarka. Jak pilnujesz kursów?” -> „Na oko. I źle. Dziś dwa razy odjechałem za wcześnie, a raz ktoś biegł i nie zdążył. Nie lu…”
- **LUZNE** 1.2: dopytanie „Konduktor bez zegarka. Jak pilnujesz kursów?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Na wieczku grawer: za trzydzieści lat. Żona mówi, że za trzydzieści lat to ja już nie będę wiedział, która godzina.”
- **OBOK** 2: „Kiedy go zgubiłeś?” -> „O 22:47, na pętli. Wiem co do minuty, bo spojrzałem, która godzina, i odłożyłem go na ławk…”
- **LUZNE** 2.1: dopytanie „Na ławce przy pętli szóstki? Kto tam wtedy był?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wiem co do minuty, bo spojrzałem, która godzina, i odłożyłem go na ławkę. I tyle go widziałem.”
- **LUZNE** 2.2: dopytanie „Co wiozłeś tym ostatnim kursem?” nie zaczepia się o: „…Wiem co do minuty, bo spojrzałem, która godzina, i odłożyłem go na ławkę. I tyle go widziałem.”
- **PROZNIA** 2.2.1: dopytanie „Nikt cię nie prosił, żebyś o czymś nie mówił?” nie zaczepia się o: „…Normalny kurs. Nic ponad to.”
- **OBOK** 3.1: „Kto dzwoni o drugiej z pretensjami?” -> „Żona. Sprawdza, czy zjadłem. Trzydzieści lat po ślubie, a ona dalej myśli, że bez niej umr…”
- **OBOK** 4.1: „To nie pierwsza taka puszka, prawda?” -> „Trzecia w tym miesiącu. Zawsze ostatni kurs, zawsze pod ławką po lewej. Rano już jej nie m…”
- **LUZNE** 4.1: dopytanie „To nie pierwsza taka puszka, prawda?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Dopisałem do wykazu, żeby nie mieć kłopotów, jakby co. Nie pytam, kto ma ją odebrać.”

## d7_kit (dzień 7, Kit Navarro, 17, drzewo)

- **OBOK** 1: „Jak wyglądają te słuchawki?” -> „Czarne, nauszne. Lewa muszla oklejona taśmą, na prawej naklejka: kot w kasku. Kupiłem ją z…”
- **OBOK** 1.1: „Czemu kot ma kask?” -> „Bo jedzie na rowerze, a jest odpowiedzialny. W przeciwieństwie do mnie, co widać po tym, ż…”
- **OBOK** 2: „Gdzie je zostawiłeś?” -> „W czwórce, na siedzeniu przy oknie, jak wracałem z roboty. Przysnąłem na pół minuty i wysi…”
- **OBOK** 2.1: „Wracasz z roboty w środku nocy? Gdzie pracujesz?” -> „W kopiarni na Rynku, na praktykach. Mam siedemnaście lat, po nocach niby nie wolno, więc o…”
- **OBOK** 2.1.1: „Co się robi w kopiarni po nocach?” -> „Ksero, laminowanie, bindowanie. Ulotki, plakaty, dyplomy. W nocy przychodzą tacy, co wolą,…”
- **OBOK** 2.1.1.1: „Na przykład kto? Pamiętasz kogoś z zeszłego tygodnia?” -> „W czwartek, 22:15. Facet w szarym płaszczu zamówił tysiąc ulotek z twarzą kobiety. „Zaginę…”
- **LUZNE** 2.1.1.1.1: dopytanie „Jak się nazywał ten facet?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zapłacił gotówką i powiedział, że to żona. Serio, uśmiechał się przy tym.”
- **OBOK** 3: „Co ci zrobi szef, jak się dowie o słuchawkach?” -> „Zdejmie mi dziesięć dolarów z wypłaty i palnie pogadankę. Pogadankę przeżyję. Dziesięć dol…”
- **OBOK** 3.1: „Co mu przeszkadza w słuchawkach?” -> „Mówi, że ksero ma być słychać, a ja mam słyszeć klientów. Słyszę. Tylko z muzyką mniej bol…”
- **OBOK** 4: „Czemu powiedziałeś mi o tych ulotkach?” -> „Bo patrzysz, jakby cię to serio obchodziło. Mało kto tak patrzy. No i ten facet był dziwny…”
- **OBOK** 4.1: „Zostaje u was jakiś ślad po takim zamówieniu?” -> „Kopia w segregatorze, z datą i godziną. Szef kocha segregatory bardziej niż ludzi. Nikomu …”
- **PROZNIA** 4.1: dopytanie „Zostaje u was jakiś ślad po takim zamówieniu?” nie zaczepia się o: „…Mało kto tak patrzy. No i ten facet był dziwny, a komuś musiałem to powiedzieć.”
- **OBOK** 5: „Pod taśmą na muszli jest banknot i karteczka „za ciszę”. Co to?” -> „Dwa dolary dla szefa, jakby mnie przyłapał. Raz zadziałało. Nie mów mu, serio, bo następny…”

## d7_evan (dzień 7, Evan Doyle, 37, drzewo)

- **OBOK** 1: „Jak wygląda to etui?” -> „Brązowa skóra, zatrzask. W środku kartonik z inicjałami M.D. i znaczkiem nieskończoności. …”
- **LUZNE** 1.1: dopytanie „Ile kluczy jest w środku?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…i znaczkiem nieskończoności. To jej pismo.”
- **OBOK** 1.1.1: „W etui są dwa klucze. Drugi ma wybite „14”.” -> „Drugiego nie znam. Maya miała swoje sprawy. Powiesz mi, do czego on jest? Bo ja chciałbym …”
- **OBOK** 2.1: „Po co ci numer linii?” -> „Będę wiedział, gdzie ona wsiada. Stanę na pętli i poczekam. Chcę tylko porozmawiać.…”
- **LUZNE** 2.1: dopytanie „Po co ci numer linii?” nie zaczepia się o: „…W czwórce albo w jedenastce. Dlatego pytam: którym tramwajem przyjechały?”
- **LUZNE** 2.1.1: dopytanie „A jeśli ona nie chce rozmawiać?” nie zaczepia się o: „…Stanę na pętli i poczekam. Chcę tylko porozmawiać.”
- **LUZNE** 2.2: dopytanie „Policja nie może ci tego powiedzieć?” nie zaczepia się o: „…W czwórce albo w jedenastce. Dlatego pytam: którym tramwajem przyjechały?”
- **LUZNE** 3.1: dopytanie „Powiedziała ci wcześniej, że odchodzi?” nie zaczepia się o: „…Od czwartku wieczorem. Zgłosiłem jeszcze tej samej nocy, jak tylko zrozumiałem, że nie wraca.”
- **OBOK** 3.2: „Co zrobisz, kiedy ją znajdziesz?” -> „Zabiorę ją do domu i zrobię jej herbaty. Wszystko wróci na swoje miejsce. U mnie wszystko …”
- **PROZNIA** 3.2: dopytanie „Co zrobisz, kiedy ją znajdziesz?” nie zaczepia się o: „…Od czwartku wieczorem. Zgłosiłem jeszcze tej samej nocy, jak tylko zrozumiałem, że nie wraca.”
- **OBOK** 4: „W etui są dwa klucze: zwykły i mały, z numerem 14. Do czego ten drugi?” -> „Drugiego nie znam. Maya miała swoje sprawy. Powiesz mi, do czego on jest? Bo ja chciałbym …”

## d8_lena_i_nora (dzień 8, Lena Brandt i Nora Vance, drzewo)

- **OBOK** 1: „Lena, czyja jest ta torba?” -> „Mai, mojej siostry. Sama jej ją kupiłam na urodziny. Narzędzia dla kobiety, dziwny prezent…”
- **OBOK** 1.1: „Po czym ją poznasz?” -> „Po obcęgach z żółtą izolacją i miarce z literą „M”. Ale... no właśnie. Nora też wie, co je…”
- **PROZNIA** 1.1: dopytanie „Po czym ją poznasz?” nie zaczepia się o: „…Narzędzia dla kobiety, dziwny prezent, wiem. Teraz to jedyna jej rzecz, jakiej mogę dotknąć.”
- **OBOK** 1.2: „Co zrobisz z torbą, jeśli ją dostaniesz?” -> „Zabiorę do siebie. A jak Maya wróci, to jej oddam. Przecież to jej.…”
- **LUZNE** 1.2: dopytanie „Co zrobisz z torbą, jeśli ją dostaniesz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Narzędzia dla kobiety, dziwny prezent, wiem. Teraz to jedyna jej rzecz, jakiej mogę dotknąć.”
- **OBOK** 2: „Nora, czego szukasz w cudzej torbie?” -> „Po kolei: rzecz, osoba, skutek. Papier w podszewce. Rodzina Okoye. Bez tego papieru nie ma…”
- **OBOK** 2.1: „Skąd wiesz, że w podszewce jest papier?” -> „Z mojego zeszytu. Spisuję numery wszystkich pokwitowań w kamienicy. Jednej kopii brakuje, …”
- **OBOK** 2.2: „O jakiej wpłacie mówimy?” -> „Czternaście rodzin, każda po czterysta dolarów zaliczki na remont. Termin rozliczenia: czw…”
- **OBOK** 2.2.1: „Kto brał te zaliczki?” -> „Zarządczyni, Iris Bell. Bierze gotówkę, wydaje kwit, oryginał zostawia sobie. A potem bywa…”
- **LUZNE** 2.2.1: dopytanie „Kto brał te zaliczki?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Termin rozliczenia: czwartek, dziewiąty września. Kto nie pokaże kwitu, płaci drugi raz albo się wyprowadza.”
- **OBOK** 4: „Która z was ustąpi?” -> „Ja nie. Za mną stoi czternaście rodzin. Lena pewnie też nie, bo za nią stoi siostra. Dlate…”
- **OBOK** 5: „W podszewce jest żółta kopia: 400 dolarów, podpis „I.”. Czyj to podpis?” -> „Iris Bell. Znam go z dwudziestu pokwitowań. Czyli Okoye zapłacili, a Maya schowała dowód. …”

## d8_bree (dzień 8, Bree Halm, 29, drzewo)

- **PROZNIA** 1.1: dopytanie „Ma jakieś znaki? Coś wydrapanego, podpis?” nie zaczepia się o: „…Brat upuścił go na schodach. Mówi, że teraz aparat ma charakter.”
- **LUZNE** 1.2: dopytanie „Co jest na filmie w środku?” nie zaczepia się o: „…Brat upuścił go na schodach. Mówi, że teraz aparat ma charakter.”
- **OBOK** 2: „Gdzie go zostawiłaś?” -> „W jedenastce, na siedzeniu. Rozmawiałam przez telefon z lekarzem brata i wysiadłam, nie og…”
- **OBOK** 2.1: „Co z bratem?” -> „Teo, Teodor Halm. Leży na ortopedii z nogą w gipsie. Rower. Twierdzi, że to nie jego wina,…”
- **LUZNE** 2.1.1: dopytanie „Po co mu w szpitalu aparat na kliszę?” nie zaczepia się o: „…Rower. Twierdzi, że to nie jego wina, czyli jego.”
- **OBOK** 3: „Mówisz, że masz paragon. Jaki?” -> „Z komisu na Rynku, sprzed dwóch lat. Mam zdjęcie w telefonie. Słuchaj, jest cena, jest dat…”
- **LUZNE** 3.1: dopytanie „Na paragonie jest numer seryjny?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Słuchaj, jest cena, jest data, jest napisane srebrny. Czego chcieć więcej?”
- **LUZNE** 3.2: dopytanie „Paragon bez numeru to za mało. Aparat może tu poczekać.” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Słuchaj, jest cena, jest data, jest napisane srebrny. Czego chcieć więcej?”
- **OBOK** 4: „Pod klapką baterii jest wydrapane „R.O.”. Czyje to inicjały?” -> „No dobra. Raf Okoye, sąsiad z Cooper Street. Pożyczył bratu aparat. Ale to się nie liczy, …”

## d9_iris (dzień 9, Iris Bell i Victor Crane, drzewo)

- **LUZNE** 1.1: dopytanie „Co znaczą numery na tych żetonach?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Pięć sztuk, nic więcej. Nudy, kochanie.”
- **OBOK** 1.2: „Czyje to skrzynki?” -> „Moich lokatorów. Nazwisk nie podam, to ich sprawa. Są ludzie, którzy chcą mieć po prostu ś…”
- **LUZNE** 1.2: dopytanie „Czyje to skrzynki?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Pięć sztuk, nic więcej. Nudy, kochanie.”
- **OBOK** 2: „Czego chce od piórnika inspekcja?” -> „Numeru odbioru i podpisu. Kto to podpisze? Pokwitowanie w dwóch egzemplarzach, jeden idzie…”
- **OBOK** 2.1: „Co się nie zgadza w księdze?” -> „Numery. Piórnik przyjechał szóstką, a wpisu nie ma. Brakuje też trzech kwitów z zeszłego m…”
- **PROZNIA** 2.1: dopytanie „Co się nie zgadza w księdze?” nie zaczepia się o: „…Kto to podpisze? Pokwitowanie w dwóch egzemplarzach, jeden idzie do Urzędu.”
- **OBOK** 2.2: „Co będzie, kiedy piórnik trafi do Urzędu?” -> „Zostanie opisany w protokole. Ktoś ten protokół przeczyta i wyciągnie wnioski. Ja nie wyci…”
- **OBOK** 2.2.1: „Iris, co ty na to?” -> „Że protokoły czyta więcej osób, niż pan Crane sądzi. A ja nie lubię, jak nazwiska moich lo…”
- **LUZNE** 2.2.1: dopytanie „Iris, co ty na to?” nie zaczepia się o: „…Ja nie wyciągam. Ja zapisuję.”
- **OBOK** 3: „Czemu oboje przyszliście po to samo?” -> „Bo żetony przyjechały szóstką, a pan Crane lubi wszystko, co przyjeżdża. Mnie wystarczy, ż…”
- **PROZNIA** 3.1: dopytanie „Czemu mam wierzyć tobie, a nie jemu?” nie zaczepia się o: „…Bo żetony przyjechały szóstką, a pan Crane lubi wszystko, co przyjeżdża. Mnie wystarczy, że wrócą tam, skąd wyjechały.”
- **OBOK** 4: „Na odwrocie żetonów są karteczki: „kobieta z walizką”, „matka z synem”. Co to?” -> „Opisy. Żeby goniec wiedział, komu oddać paczkę. Więcej przy panu Crane nie powiem.…”
- **OBOK** 4.1: „Co jest w tych paczkach?” -> „Papiery na nowe życie. Dla ludzi, których ktoś bije albo ściga. Biorę za to pieniądze i ni…”
- **LUZNE** 4.2: dopytanie „Piąty żeton, 0809, nie ma opisu. Dla kogo jest?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Żeby goniec wiedział, komu oddać paczkę. Więcej przy panu Crane nie powiem.”

## d9_stahl (dzień 9, Marek Stahl, ok. 50, drzewo)

- **LUZNE** 1.1: dopytanie „Jest w nim metka producenta?” nie zaczepia się o: „…Szary, filcowy, granatowa wstążka, rozmiar pięćdziesiąt osiem. Zgodnie z regulaminem podaję wszystko od razu.”
- **LUZNE** 1.2: dopytanie „Jakieś inicjały w środku?” nie zaczepia się o: „…Szary, filcowy, granatowa wstążka, rozmiar pięćdziesiąt osiem. Zgodnie z regulaminem podaję wszystko od razu.”
- **LUZNE** 2.1: dopytanie „Na pewno sam?” nie zaczepia się o: „…Wczoraj, czwórka, około dwudziestej drugiej. Siedziałem sam, kapelusz leżał na półce nad oknem.”
- **OBOK** 2.2: „O dwudziestej drugiej? Dokąd jechałeś?” -> „Do domu. Z kancelarii. Dużo ostatnio pracuję przy cudzych papierach.…”
- **OBOK** 2.2.1: „Przy czyich papierach?” -> „Tego regulamin nie każe mi podawać. A czego nie każe, tego nie podaję. Dobra zasada, polec…”
- **OBOK** 3.2: „A jeśli kapelusz zostanie u nas?” -> „To odejdę. Ale nie od razu. Postoję chwilę, jeśli wolno. Lubię patrzeć, jak ktoś pracuje. …”
- **OBOK** 4.1: „Po co to sprawdzasz? Dla kogo?” -> „Dla siebie. I dla ludzi, którzy płacą za wiedzę, jak pracuje nocna zmiana. Proszę się nie …”
- **LUZNE** 4.1: dopytanie „Po co to sprawdzasz? Dla kogo?” nie zaczepia się o: „…Kapelusz nie jest mój. Chciałem zobaczyć, czy to okienko wyda rzecz za sam ładny opis.”

## d10_vera (dzień 10, Vera Kovacs, 62, drzewo)

- **OBOK** 1: „Jak wygląda to pudełko?” -> „Blaszane, na sprzączkę. Na wieczku wgniecenie, bo raz na nim usiadłam w poczekalni. Zapina…”
- **OBOK** 1.1: „Co jest w środku?” -> „Pasek od zegarka i kartka z inwentarza. Nic, co miałoby cenę.…”
- **LUZNE** 1.1: dopytanie „Co jest w środku?” nie zaczepia się o: „…Na wieczku wgniecenie, bo raz na nim usiadłam w poczekalni. Zapina się z oporem.”
- **OBOK** 2: „Gdzie dokładnie je zgubiłaś?” -> „W jedenastce, wczoraj, ostatni kurs. Położyłam obok siebie i wysiadłam bez niego. Zoriento…”
- **LUZNE** 2.1: dopytanie „Po co wozisz do domu pudełko z cudzej szafki?” nie zaczepia się o: „…Położyłam obok siebie i wysiadłam bez niego. Zorientowałam się, bo klucze dzwoniły, a ręce miałam puste.”
- **OBOK** 3: „Kim był dla ciebie Sam Holt?” -> „Kolegą z nocy. Siedział przy tej szybie, ja zamykałam zaplecze. Odszedł ponad miesiąc temu…”
- **OBOK** 3.1: „Dlaczego akurat ty?” -> „Bo mnie prosił. Powiedział: trzymaj, aż wrócę. Dopóki szafka jest zajęta, nikt jej nie lik…”
- **LUZNE** 3.1: dopytanie „Dlaczego akurat ty?” nie zaczepia się o: „…Odszedł ponad miesiąc temu, bez słowa. Tylko ja jeszcze pilnuję jego szafki.”
- **OBOK** 3.2.1.1: „Dokąd pisałaś? Masz jego adres?” -> „Tego nie powiem nikomu, kto siedzi na jego krześle krócej niż miesiąc. Bez obrazy.…”
- **LUZNE** 3.2.1.1: dopytanie „Dokąd pisałaś? Masz jego adres?” nie zaczepia się o: „…On nigdy nie odpisuje, on przychodzi. To znaczy, powinien przyjść.”
- **LUZNE** 4.1: dopytanie „Na wieczku ktoś napisał: „Teczka jest pusta. Tak ma być”. O jaką teczkę chodzi?” nie zaczepia się o: „…Klucz dostałam od Sama i zostawiłam w tej szufladzie, żeby następny nie musiał go szukać. Czyli żeby nie musiało szukać to, co teraz siedzi na jego krześle.”

## d10_dario (dzień 10, Dario Ruiz, 29, drzewo)

- **OBOK** 1: „Jak wygląda ten zeszyt?” -> „Gruby, okładka tłusta, bo noszę go razem z kanapką. Gumka ledwo trzyma. Pachnie cebulą, up…”
- **OBOK** 1.1: „Co w nim jest oprócz grafiku?” -> „Przepisy na zupy i numery telefonów. I parę długów, cudzych. Chcesz kanapkę? Mam drugą.…”
- **LUZNE** 1.1: dopytanie „Co w nim jest oprócz grafiku?” nie zaczepia się o: „…Gumka ledwo trzyma. Pachnie cebulą, uprzedzam.”
- **OBOK** 1.1.1: „Czyje to długi?” -> „O nie. Kto mi wisi, wie on i ja. Jakbym rozpowiadał, nikt by u mnie więcej nie pożyczył.…”
- **LUZNE** 1.1.1: dopytanie „Czyje to długi?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Chcesz kanapkę? Mam drugą.”
- **OBOK** 2: „Gdzie go zgubiłeś?” -> „W jedenastce, na pętli, jak jadłem. Położyłem zeszyt obok kanapki. Kanapkę zjadłem, a zesz…”
- **OBOK** 3: „Pytałeś o Sama. Kim on dla ciebie jest?” -> „Kolegą. Siedział przy tym okienku przed tobą. Zawsze miał dla mnie herbatę i dobre słowo. …”
- **OBOK** 3.1: „Od kiedy go nie ma?” -> „Ponad miesiąc. Powiedział, że idzie do portu coś załatwić. Potem przestał odbierać telefon…”
- **LUZNE** 3.1.1: dopytanie „Co miał do załatwienia w porcie?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Potem przestał odbierać telefon. Pytam po całej zajezdni.”
- **OBOK** 3.2: „Czemu pytasz akurat tutaj?” -> „Bo to jego miejsce. Jak ktoś ma coś wiedzieć, to ten, kto siedzi na jego krześle.…”
- **LUZNE** 3.2: dopytanie „Czemu pytasz akurat tutaj?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zawsze miał dla mnie herbatę i dobre słowo. Teraz go nie ma i nikt nie wie, gdzie jest.”
- **OBOK** 3.2.1: „A jak nikt ci nie odpowie?” -> „To będę pytał dalej. Aż ktoś powie albo aż mi się znudzi. To drugie mi się nie zdarza.…”
- **LUZNE** 3.2.1: dopytanie „A jak nikt ci nie odpowie?” nie zaczepia się o: „…Bo to jego miejsce. Jak ktoś ma coś wiedzieć, to ten, kto siedzi na jego krześle.”

## d11_maya (dzień 11, Maya Doyle, 34, drzewo)

- **OBOK** 1: „Jak wygląda ten pokrowiec?” -> „Czarny, twardy. Gumkę z boku zszyłam sama. W środku łatka przyszyta niebieską nitką, bo cz…”
- **OBOK** 1.1: „Opisujesz go bardzo dokładnie. Jakby ci zależało, żeby nikt się nie pomylił.” -> „Zależy mi. Mój mąż też umie opisać moje rzeczy. Ale tylko z wierzchu. Łatki w środku nie w…”
- **LUZNE** 1.1: dopytanie „Opisujesz go bardzo dokładnie. Jakby ci zależało, żeby nikt się nie pomylił.” nie zaczepia się o: „…W środku łatka przyszyta niebieską nitką, bo czarna mi się skończyła. Sprawdź, to chwila.”
- **OBOK** 2.1: „Celowo? Po co zostawiać własne rzeczy w tramwaju?” -> „Telefon, klucze, torba, teraz pokrowiec. Sprawdzam, czy ktoś po tej stronie szyby wytrzyma…”
- **OBOK** 2.1.1: „I gdzie iskrzyło?” -> „Zapisuję sobie. Każdą rzecz: komu poszła i kto potem o niej wiedział. Dziś sprawdzam ostat…”
- **OBOK** 3: „Czego od nas potrzebujesz?” -> „Trzech rzeczy. Nikt nie wie, gdzie jestem. Policjant dostaje jedno zdanie: „Żyje. Nie wróc…”
- **LUZNE** 3.1: dopytanie „A rodzina? Nie śpią od tygodni.” nie zaczepia się o: „…Nie szukać. Wszystko inne dopiero, jak powiem tak.”
- **LUZNE** 3.2: dopytanie „Co z twoimi rzeczami, które u nas leżą?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Nie szukać. Wszystko inne dopiero, jak powiem tak.”
- **OBOK** 3.3: „Lena ci pomagała?” -> „Na początku, z mieszkaniem. Potem zaczęła decydować, co mi wolno. Od jednego, który decydo…”
- **PROZNIA** 3.3: dopytanie „Lena ci pomagała?” nie zaczepia się o: „…Nie szukać. Wszystko inne dopiero, jak powiem tak.”
- **OBOK** 4: „Czemu tak patrzysz na moje ręce?” -> „Sprawdzam, co z nimi robisz. Ten, co siedział tu przed tobą, też nie wiedział, gdzie je po…”
- **OBOK** 4.1: „Znałaś Sama?” -> „Z widzenia, przez szybę. Raz przetrzymał mi torbę przez tydzień i nie zapytał, co w niej j…”
- **PROZNIA** 4.1: dopytanie „Znałaś Sama?” nie zaczepia się o: „…Ten, co siedział tu przed tobą, też nie wiedział, gdzie je podziać. A siedział dłużej.”
- **OBOK** 6: „Twój telefon dostał od nas Evan. Wiesz, co z nim zrobił?” -> „Wiem od Leny. Przeczytał jej wiadomość i poszedł do niej z awanturą. Zwarcie. Nie mam żalu…”
- **OBOK** 9: „Pod łatką jest karteczka z trzema punktami. Kto je układał?” -> „Ja, przez trzy noce. W kolejności, w jakiej coś może się zepsuć. Pierwszy: nikt nie wie, g…”

## d11_grace (dzień 11, Grace Okoye, 35, drzewo)

- **OBOK** 1: „Jak wygląda ta torebka?” -> „Granatowa, skórzana, na ramię. Pasek przetarty od smyczy z kartą. Na legitymacji mam zdjęc…”
- **OBOK** 1.1: „Co jest w środku oprócz legitymacji?” -> „Klucze, tabletki na głowę i kartka z zakupami. Nic więcej.…”
- **OBOK** 2: „Gdzie i kiedy ją zostawiłaś?” -> „W jedenastce, koło wpół do pierwszej. Zdjęłam ją z ramienia, bo bark mnie rwał po dźwigani…”
- **OBOK** 2.1: „Wpół do pierwszej? To nie byłaś wtedy na dyżurze?” -> „Wyskoczyłam na godzinę do domu, bo młodszy miał gorączkę. Dzieci śpią u sąsiadki. Oddział …”
- **LUZNE** 2.1: dopytanie „Wpół do pierwszej? To nie byłaś wtedy na dyżurze?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zdjęłam ją z ramienia, bo bark mnie rwał po dźwiganiu pacjenta. Wysiadłam na Rynku bez niej.”
- **OBOK** 3.1: „Ktoś może potwierdzić, że torebka jest twoja?” -> „Hollis, dyżurny z oddziału. Zadzwoń. Odbierze po trzecim sygnale i dwie minuty będzie gada…”
- **LUZNE** 3.1: dopytanie „Ktoś może potwierdzić, że torebka jest twoja?” nie zaczepia się o: „…Ma rację. Dziś mnie ta jego racja boli.”

## d12_iris_nora (dzień 12, Iris Bell, Nora Vance, Ada Vale, drzewo)

- **OBOK** 1.1: „Nora, ty mówisz co innego?” -> „Mówię: oryginały pokwitowań. Czternaście rodzin, po czterysta dolarów zaliczki. Bez nich O…”
- **LUZNE** 1.1: dopytanie „Nora, ty mówisz co innego?” nie zaczepia się o: „…Karty rozliczeń kamienicy, nic ponad to. Sprawy moje i lokatorów.”
- **OBOK** 2: „Nora, po czym poznasz oryginał?” -> „Po kolei: numer z mojego wykazu, podpis „I.”, zielony stempel kamienicy. Jak wszystkie trz…”
- **OBOK** 2.1: „Co się stanie w czwartek, dziewiątego września?” -> „Mija termin. Kto nie pokaże kwitu, wpłaca zaliczkę drugi raz albo się wyprowadza. Czternaś…”
- **LUZNE** 2.1: dopytanie „Co się stanie w czwartek, dziewiątego września?” nie zaczepia się o: „…Po kolei: numer z mojego wykazu, podpis I., zielony stempel kamienicy. Jak wszystkie trzy się zgadzają, wiem.”
- **OBOK** 2.2: „Żółta kopia poszła z torbą do Leny. Czym teraz udowodnisz wpłatę?” -> „Numerem z wykazu: czterysta jedenaście. Papier można zgubić, liczby nie. Ale numer bez ory…”
- **OBOK** 2.3: „Żółta kopia leży u nas. To nie wystarczy?” -> „Potwierdza jedną wpłatę, Okoye. I tylko wtedy, gdy da się ją przyłożyć do oryginału. Dlate…”
- **OBOK** 3: „Ada, czemu pokazujesz na tę puszkę?” -> „Bo ma numerek z tego samego bloczka co papiery pani Iris. Mama mówi, że nie wolno gadać. A…”
- **OBOK** 3.1: „Co jeszcze widziałaś u pani Iris?” -> „Że otwiera tę szufladę, co się zacina, bez patrzenia. Ja muszę kopnąć w lewy róg. Ona ma t…”
- **LUZNE** 3.1: dopytanie „Co jeszcze widziałaś u pani Iris?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Mama mówi, że nie wolno gadać. Ale tu można, bo tu mówią do mnie ładnie.”
- **OBOK** 3.2: „Iris, mała mówi prawdę?” -> „Dzieci widzą dużo i rozumieją po swojemu. Ada to dobra dziewczynka. Szkoda by było, gdyby …”
- **LUZNE** 3.2: dopytanie „Iris, mała mówi prawdę?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Mama mówi, że nie wolno gadać. Ale tu można, bo tu mówią do mnie ładnie.”
- **OBOK** 4: „Czemu nie oddasz Norze oryginałów?” -> „Bo jak Nora pokaże je w Urzędzie, wyjdzie też to, co leży obok: papiery czworga ludzi, któ…”
- **OBOK** 4.2: „Piórnik poszedł do Victora. Co teraz z ludźmi z żetonów?” -> „Są na liście inspekcji. Dla niego drobiazg, dla nich wyrok. Dlatego dziś nie mam już z cze…”
- **OBOK** 4.4: „Piórnik leży u nas w depozycie. Co z ludźmi z żetonów?” -> „Czekają. Do soboty żadne z czworga nie dostanie dokumentu, a jedna rodzina ma pociąg o 5:4…”

## d12_linh (dzień 12, Linh Tran, 33, drzewo)

- **OBOK** 1: „Jak wygląda ta pozytywka?” -> „Drewniana, mała, z gwiazdką na wieczku. Gra kołysankę, ale jedną nutę zacina. Milo mówi, ż…”
- **OBOK** 1.1: „Co jest w środku?” -> „Mechanizm. I coś, czego wolałabym nie pokazywać. Proszę nie zdejmować dna.…”
- **LUZNE** 1.1: dopytanie „Co jest w środku?” nie zaczepia się o: „…Gra kołysankę, ale jedną nutę zacina. Milo mówi, że gwiazdka kaszle.”
- **OBOK** 2: „Gdzie ją zgubiłaś?” -> „W jedenastce, na siedzeniu, kiedy zdejmowałam Milo z kolan. Zasnął mi na rękach i zapomnia…”
- **OBOK** 2.1: „Ile lat ma Milo?” -> „Sześć, skończył w maju. Do szkoły jeszcze nie chodzi. W szkole trzeba podać adres.…”
- **OBOK** 3: „Dokąd jedziecie tym rannym pociągiem?” -> „Proszę, nie. Nie dlatego, że nie ufam. Dlatego, że mi nie wolno.…”
- **PROZNIA** 3.1: dopytanie „Ktoś was szuka?” nie zaczepia się o: „…Nie dlatego, że nie ufam. Dlatego, że mi nie wolno.”
- **OBOK** 3.2: „Kto wam pomaga wyjechać?” -> „Ktoś, kto bierze za to pieniądze i nie lubi, kiedy się o tym mówi. Proszę, więcej nie powi…”
- **PROZNIA** 3.2: dopytanie „Kto wam pomaga wyjechać?” nie zaczepia się o: „…Nie dlatego, że nie ufam. Dlatego, że mi nie wolno.”
- **OBOK** 3.3: „Czego ci teraz najbardziej trzeba?” -> „Żeby Milo zasnął w pociągu. I żeby nikt nie zapisał mojego nazwiska obok jego imienia.…”
- **PROZNIA** 3.3: dopytanie „Czego ci teraz najbardziej trzeba?” nie zaczepia się o: „…Nie dlatego, że nie ufam. Dlatego, że mi nie wolno.”
- **OBOK** 4: „Pod dnem jest bilet i kartonik z numerem 0623. Co to?” -> „Proszę, nie pytaj. To wszystko, co mam po trzech latach odkładania. Jak ktoś się dowie, ni…”
- **OBOK** 4.2: „Numer 0623 jest na liście inspektora.” -> „Wiem, Iris mi powiedziała. Wsiądę. Ale będę się oglądać do ostatniej stacji.…”

## d13_elias (dzień 13, Elias Wren, 73, drzewo)

- **OBOK** 1: „Jak wygląda ta oprawka?” -> „Złota, cieniutka, jedno ucho wygięte. Żona prostowała je kciukiem, a ono i tak wracało. Cz…”
- **OBOK** 1.1: „Sama oprawka, bez szkieł?” -> „Szkła pękły, kiedy spadły. Zostało samo złoto i to krzywe ucho. Mnie wystarczy.…”
- **LUZNE** 1.1: dopytanie „Sama oprawka, bez szkieł?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Żona prostowała je kciukiem, a ono i tak wracało. Czterdzieści jeden lat tak się z nim siłowała.”
- **OBOK** 2: „Gdzie i kiedy zginęła?” -> „W czwórce, tuż przed Bożym Narodzeniem, jak wracaliśmy od szwagierki. Potem żona zachorowa…”
- **OBOK** 2.1: „To już osiem miesięcy. Czemu to nadal takie ważne?” -> „Bo jej obiecałem, że się znajdą. Ona już nie sprawdzi, ale ja wiem, co obiecałem. Dziękuję…”
- **LUZNE** 2.1: dopytanie „To już osiem miesięcy. Czemu to nadal takie ważne?” nie zaczepia się o: „…W czwórce, tuż przed Bożym Narodzeniem, jak wracaliśmy od szwagierki. Potem żona zachorowała i okularów już nie włożyła.”
- **OBOK** 3.1: „Skąd znasz Sama?” -> „Z tego okienka. Pan Holt przez dwa lata nie miał nazwiska na tabliczce. Potem dopisał ołów…”
- **LUZNE** 3.1: dopytanie „Skąd znasz Sama?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Osiemdziesiąt cztery dolary. Dowiedziałem się, jak już było po wszystkim.”
- **OBOK** 3.1.1: „Kiedy widziałeś go ostatni raz?” -> „Ponad miesiąc temu. Powiedział: „jeszcze nie, panie Eliasie”. A potem przestał przychodzić…”
- **LUZNE** 3.1.1: dopytanie „Kiedy widziałeś go ostatni raz?” nie zaczepia się o: „…Holt. Chyba sam sobie przypominał.”
- **OBOK** 3.2: „Co chcesz zrobić z tym długiem?” -> „Oddać mu do ręki. Cztery tygodnie odkładałem po dwadzieścia jeden dolarów z emerytury. Nie…”
- **LUZNE** 3.2: dopytanie „Co chcesz zrobić z tym długiem?” nie zaczepia się o: „…Osiemdziesiąt cztery dolary. Dowiedziałem się, jak już było po wszystkim.”
- **OBOK** 3.2.1: „A jeśli Sam nie weźmie?” -> „Odmówi, wiem. A ja nie ustąpię. On jest młodszy, ale to ja mam mniej czasu.…”
- **LUZNE** 3.2.1: dopytanie „A jeśli Sam nie weźmie?” nie zaczepia się o: „…Nie listem, nie przez kogoś. Do ręki.”
- **LUZNE** 4.1: dopytanie „Co ma się stać z tym kwitem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wziąłem. Do dziś mi wstyd.”
- **OBOK** 4.2: „Wiesz coś o paczkach, które jeżdżą szóstką?” -> „Tyle, że konduktor ich nie lubi. Więcej nie wiem i wolę nie wiedzieć.…”
- **LUZNE** 4.2: dopytanie „Wiesz coś o paczkach, które jeżdżą szóstką?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wziąłem. Do dziś mi wstyd.”
- **PROZNIA** 5.1: dopytanie „Na tabliczce nic nie ma.” nie zaczepia się o: „…A ja do dziś nie wiem, jak ci na imię. Pytałem już raz.”

## d13_odile (dzień 13, Odile Faber, 68, drzewo)

- **OBOK** 1: „Jak wygląda to pudełko?” -> „Okrągłe, niebieskie, po duńskich herbatnikach. Wieczko pogięte, bo siadam na nim na przyst…”
- **LUZNE** 1.1: dopytanie „Czemu trzymasz protezę w pudełku po herbatnikach?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wieczko pogięte, bo siadam na nim na przystanku. W środku serwetka w kwiatki, a na serwetce moja uroda.”
- **OBOK** 1.2: „Po czym poznać, że proteza jest twoja?” -> „Od spodu wygrawerowane O.F. Dentysta mówił: żeby nikt nie zabrał. Dziecko, kto by to zabra…”
- **LUZNE** 1.2: dopytanie „Po czym poznać, że proteza jest twoja?” nie zaczepia się o: „…Wieczko pogięte, bo siadam na nim na przystanku. W środku serwetka w kwiatki, a na serwetce moja uroda.”
- **OBOK** 2: „Jak to się stało, że została w szóstce?” -> „Jechałam rano do fryzjera, wyjęłam, bo uwierała, i położyłam pudełko obok. A potem zobaczy…”
- **LUZNE** 2.1: dopytanie „Jechałaś z biletem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…A potem zobaczyłam swój przystanek i poleciałam. W moim wieku się nie lata, to i głowa nie nadążyła.”
- **OBOK** 2.1.1: „Dziś nie. A zwykle?” -> „Będziemy liczyć? Wesele za dwie godziny, nie zdążysz. Często, dziecko. Ale zawsze z szacun…”
- **LUZNE** 2.1.1: dopytanie „Dziś nie. A zwykle?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Spieszyłam się i nie skasowałam. Zapłacę mandat, kochanie, jak trzeba.”
- **OBOK** 3: „Na czyj ślub się spieszysz?” -> „Wnuczki, Fridy. Kościół świętej Łucji, dziesiąta. Narzeczony ma wąsy jak szczotka do butów…”
- **LUZNE** 3.1: dopytanie „Rodzina wie, że nie masz zębów?” nie zaczepia się o: „…Kościół świętej Łucji, dziesiąta. Narzeczony ma wąsy jak szczotka do butów, ale ona go kocha, przysięgam.”
- **OBOK** 3.2: „A jak nie zdążysz ich odzyskać?” -> „To będę się uśmiechać wewnętrznie. Frida się popłacze, ja się popłaczę, a wąsaty zacznie m…”
- **LUZNE** 3.2: dopytanie „A jak nie zdążysz ich odzyskać?” nie zaczepia się o: „…Kościół świętej Łucji, dziesiąta. Narzeczony ma wąsy jak szczotka do butów, ale ona go kocha, przysięgam.”
- **OBOK** 4: „W pudełku jest mandat bez pieczątki, z dopiskiem konduktora: „zdarza się”.” -> „Dziecko, emerytura to czterysta dolarów i zęby na raty. Bilet kosztuje tyle co obiad. A Le…”

## d13_tess (dzień 13, Tess Rusk, 33, drzewo)

- **OBOK** 1: „Jak wygląda ta skrzynka?” -> „Zielona, metalowa, z trójką wybitą na wieczku. Zamek się zacina, otwiera się go płaskim śr…”
- **OBOK** 1.1: „Co powinno być w środku?” -> „Narzędzia. Zegarek, jeśli go tam schował. I klucz z numerkiem do jakiejś szafki, o której …”
- **LUZNE** 1.1: dopytanie „Co powinno być w środku?” nie zaczepia się o: „…Zamek się zacina, otwiera się go płaskim śrubokrętem. Tobias dostał ją od ojca razem z zawodem.”
- **OBOK** 2: „Jak trafiła do nas?” -> „Pogłębiarka wyciągnęła ją z mułu w tym miesiącu. Policja rzeczna odesłała tramwajem jako r…”
- **LUZNE** 2.1: dopytanie „Ktoś jeszcze pytał o tę skrzynkę?” nie zaczepia się o: „…Policja rzeczna odesłała tramwajem jako rzecz bez właściciela. Zobaczyłam wykaz na słupie i poznałam wieczko po opisie.”
- **OBOK** 3: „Kim był twój brat?” -> „Tobias Rusk, elektryk. Cichy, punktualny, nie pytał o więcej, niż trzeba. Brał nocne zmian…”
- **OBOK** 3.2: „Policja mówi: wypadek. Nie wierzysz?” -> „Tobias pływał jak ryba. I kiedy go wyłowili, nie miał zegarka, a nie zdejmował go nawet do…”
- **LUZNE** 3.2: dopytanie „Policja mówi: wypadek. Nie wierzysz?” nie zaczepia się o: „…Cichy, punktualny, nie pytał o więcej, niż trzeba. Brał nocne zmiany i nigdy nie mówił gdzie.”
- **PROZNIA** 3.2.1: dopytanie „Czemu przychodzisz dopiero teraz?” nie zaczepia się o: „…To żaden dowód. Ale ja tym żyję od dwóch lat.”
- **OBOK** 4: „Na zegarku jest grawer: „T.R. — od T.”. Od kogo?” -> „Ode mnie. T. jak Tess. Dałam mu go na trzydzieste urodziny. Nosił na lewej ręce i nie zdej…”
- **OBOK** 4.1: „Wskazówki stoją na 23:15. Co z tym zrobisz?” -> „Zawiozę do zegarmistrza, który jest biegłym. Chcę mieć na papierze, o której stanął. Z pap…”
- **LUZNE** 4.1: dopytanie „Wskazówki stoją na 23:15. Co z tym zrobisz?” nie zaczepia się o: „…Dałam mu go na trzydzieste urodziny. Nosił na lewej ręce i nie zdejmował.”

## d14_noah (dzień 14, Noah Reyes, 42, drzewo)

- **OBOK** 1: „Jak wygląda ten organizer?” -> „Czarny, skórzany, z gumką na grzbiecie. Noszę go pół roku, róg wytarł się na szaro.…”
- **OBOK** 1.1: „Co w nim jest?” -> „Terminy, numery, adres Leny Brandt. I kalendarz, w którym wtorek, siódmy września, jest za…”
- **LUZNE** 1.1: dopytanie „Co w nim jest?” nie zaczepia się o: „…Czarny, skórzany, z gumką na grzbiecie. Noszę go pół roku, róg wytarł się na szaro.”
- **OBOK** 3.1: „Mogę jej to przekazać, jeśli się tu pojawi?” -> „Tylko jeśli przyjdzie sama. Nie proszę, żeby jej szukać. Proszę, żeby kartka tu leżała, na…”
- **LUZNE** 3.1: dopytanie „Mogę jej to przekazać, jeśli się tu pojawi?” nie zaczepia się o: „…Jej podpis zamyka sprawę. Tylko nie mam pewności, że ta kartka w ogóle do niej trafi.”
- **OBOK** 3.2: „Co się stanie we wtorek, jeśli podpisu nie będzie?” -> „Sprawa idzie do wydziału, a tam nikt nie pyta, czy ktoś chce być znaleziony. A Doyle wynaj…”
- **OBOK** 3.2.1: „Czemu wersja Evana ci nie pasuje?” -> „To moje zmartwienie. Powiem tyle: ktoś nie mówi mi wszystkiego, a ja wolę pytać po cichu.…”
- **PROZNIA** 3.2.1: dopytanie „Czemu wersja Evana ci nie pasuje?” nie zaczepia się o: „…A Doyle wynajmie detektywa. Podobno za tysiąc dwieście dolarów.”
- **OBOK** 4: „Czemu patrzysz na moją tabliczkę?” -> „Bo jest pusta. Nie ma na niej nazwiska. Masz przy sobie jakiś dokument? Nie? Zapisuję: dyż…”
- **OBOK** 4.1: „Poprzedni dyżurny też nie miał nazwiska?” -> „Miał, ołówkiem: Holt. Też bez skierowania, też z ogłoszenia. Czyli: ktoś lubi sadzać przy …”

## d14_billie (dzień 14, Billie Cross, drzewo)

- **OBOK** 1: „Jak wygląda ten kask?” -> „Różowy, z nalepką z gwiazdką. Z tyłu pęknięty, bo spadłam ze schodów. No, może dwa razy.…”
- **OBOK** 2: „Gdzie dokładnie go zostawiłaś?” -> „W czwórce, miałam go na kolanach. Gadałam przez telefon i wysiadłam bez niego. Serio, nawe…”
- **OBOK** 2.1: „Co robisz w czwórce w środku nocy?” -> „Jeżdżę. Hulajnogą, tramwajem, byle tam, gdzie nie ma nauczycieli. Raz konduktor z szóstki …”
- **LUZNE** 2.1: dopytanie „Co robisz w czwórce w środku nocy?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Gadałam przez telefon i wysiadłam bez niego. Serio, nawet nie poczułam.”
- **LUZNE** 2.1.1: dopytanie „Czemu nie siedzisz w domu?” nie zaczepia się o: „…Hulajnogą, tramwajem, byle tam, gdzie nie ma nauczycieli. Raz konduktor z szóstki dał mi herbatę i nawet nie spytał, ile mam lat.”
- **LUZNE** 3.1: dopytanie „Do egzaminu z fizyki potrzebny jest kask?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…No, poprawkowy. Wiesz, o co chodzi.”
- **LUZNE** 3.2: dopytanie „Ile ty naprawdę masz lat?” nie zaczepia się o: „…No, poprawkowy. Wiesz, o co chodzi.”
- **OBOK** 3.2.1: „Czego się boisz, że tak kręcisz?” -> „Że zadzwonicie do szkoły. Mam trzy dni nieobecności i bardzo ładne usprawiedliwienie. Podr…”
- **PROZNIA** 3.2.1: dopytanie „Czego się boisz, że tak kręcisz?” nie zaczepia się o: „…Dobra, szesnaście i pół. Ale w środku jestem dorosła.”
- **OBOK** 4: „Pod wyściółką jest legitymacja szkolna. Klasa 2B.” -> „Moja. Rocznik dwa tysiące dziewiąty. No dobra, już nie kłamię. Tylko nie dzwońcie, serio.…”

## d15_sam (dzień 15, Sam Holt, 44 i Vera Kovacs, 62, drzewo)

- **OBOK** 1: „Jak wygląda ten termos?” -> „Stalowy, zielony, z wgnieceniem na pokrywce. Spadł mi kiedyś z ciężarówki. Klamra jest lew…”
- **OBOK** 2: „Czemu przychodzisz dopiero teraz?” -> „Bo Vera napisała, że zamykają szafkę. Inaczej bym nie przyszedł. Nie lubię tego miejsca.…”
- **OBOK** 2.1: „Vera, czemu go wezwałaś?” -> „Bo zamykają szafkę, a on przez miesiąc nie przyszedł po nic. I wolałam, żeby ktoś przy tym…”
- **LUZNE** 2.1: dopytanie „Vera, czemu go wezwałaś?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Inaczej bym nie przyszedł. Nie lubię tego miejsca.”
- **OBOK** 2.2: „Gdzie byłeś przez ten miesiąc?” -> „W porcie. Kolega załatwił mi robotę przy przeładunku. Potrzebuję referencji do piątku, dzi…”
- **LUZNE** 2.2: dopytanie „Gdzie byłeś przez ten miesiąc?” nie zaczepia się o: „…Inaczej bym nie przyszedł. Nie lubię tego miejsca.”
- **OBOK** 3: „Co się stało ze stroną czterdzieści jeden?” -> „Wyrwałem ją. Żeby nikt nie miał tych nazwisk. Nie pytaj więcej, bo powiem za dużo.…”
- **OBOK** 3.1: „Mówisz, że w szufladzie została kalka. Co mam z nią zrobić?” -> „Zasłoń nazwiska albo oddaj ją mnie. Jak pokażesz bez zasłony, Nora ma swój dowód, ale czte…”
- **LUZNE** 3.1: dopytanie „Mówisz, że w szufladzie została kalka. Co mam z nią zrobić?” nie zaczepia się o: „…Żeby nikt nie miał tych nazwisk. Nie pytaj więcej, bo powiem za dużo.”
- **OBOK** 3.1.1: „Czemu Victor nie może jej zobaczyć?” -> „Bo nie wierzę w drugie egzemplarze. Każda kartka, która idzie dalej, trafia w końcu do kog…”
- **LUZNE** 3.1.1: dopytanie „Czemu Victor nie może jej zobaczyć?” nie zaczepia się o: „…Jak pokażesz bez zasłony, Nora ma swój dowód, ale czternaście rodzin ląduje na biurku Urzędu. Wybieraj: oni albo ja.”
- **OBOK** 3.2: „Czyje nazwiska na niej były?” -> „Ludzi, którzy wyjechali. I lokatorów, którzy zapłacili za coś, czego nie dostali. Na jedne…”
- **LUZNE** 4.1: dopytanie „Ile rzeczy wydałeś w ten sposób?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wpis robi z niej zgubę. A on stracił już dość.”
- **OBOK** 5: „W termosie jest kartonik: „Nie pytaj, od czego uciekasz. Nikt nie pyta”. Do kogo to pisałeś?” -> „Do siebie. Tak myślałem. Teraz widzę, że to pasuje do każdego, kto usiądzie na tym krześle…”
- **OBOK** 6: „W szufladzie jest zatwierdzenie z podpisem Victora. Co to?” -> „Rozliczenie, które Victor zamknął. Potem ktoś dopisał pozycje innym tuszem. Myślę, że nie …”

## d15_pruitt (dzień 15, Pan Pruitt, 80, drzewo)

- **OBOK** 1.1: „Co robisz, kiedy ktoś się po któryś zgłosi?” -> „Oddaję z uśmiechem i o nic nie pytam. Raz przyszła kobieta po parasol w kwiatki i popłakał…”
- **PROZNIA** 1.1: dopytanie „Co robisz, kiedy ktoś się po któryś zgłosi?” nie zaczepia się o: „…Padało cały tydzień, ludzie zostawiają. Zbieram, bo parasol bez człowieka to smutny widok.”
- **OBOK** 1.1.1: „Często ktoś się zgłasza?” -> „Dwa razy w tym roku. Reszta czeka. Nikt nie przychodzi, więc wszystko w porządku. Tak sobi…”
- **PROZNIA** 1.1.1: dopytanie „Często ktoś się zgłasza?” nie zaczepia się o: „…Nie wiem czemu. Ale było miło.”
- **OBOK** 2: „Czemu oddajesz je dopiero dzisiaj?” -> „Bo wcześniej było ich dziesięć. Jedenaście to ładniejsza liczba. A przy okazji: nikt mnie …”
- **LUZNE** 2.1: dopytanie „Nie prościej zostawić je na przystanku?” nie zaczepia się o: „…Jedenaście to ładniejsza liczba. A przy okazji: nikt mnie nie pytał, to się nie narzucałem.”
- **OBOK** 3: „Po co właściwie je zbierasz?” -> „Ktoś musi. Moja żona mówiła, że kto nie oddaje cudzych rzeczy, nie zasługuje na własne.…”
- **OBOK** 3.1: „Który jest najstarszy?” -> „Ten czarny, z drewnianą rączką, z siedemdziesiątego dziewiątego. Ma krzywy drut. Jego nie …”
- **OBOK** 4: „Do siatki jest przypięta lista: gdzie i kiedy który znaleziony. Po co ją prowadzisz?” -> „Żeby wiedzieć, który skąd. Każdy, kto wraca po parasol, mówi: „zostawiłem na pętli”. A ja …”
- **LUZNE** 4.1: dopytanie „Przy jednym stoi: „ulubiony, E.W. na rączce”. Czyj to?” nie zaczepia się o: „…A ja wiem, na której i o której. To też jest kwit, tylko mój.”

## d16_maya_lena (dzień 16, Maya Doyle i Lena Brandt, drzewo)

- **OBOK** 1: „Jak wygląda ta saszetka?” -> „Granatowa, na zamek, w rogu haft: M.D. Dwie przegródki. W jednej rzeczy na drogę, w drugie…”
- **OBOK** 1.1: „Co jest w tej drugiej przegródce?” -> „Kartka dla Leny i dwa żetony bagażowe. Moja walizka stoi w przechowalni, nie tutaj. Do nie…”
- **OBOK** 2: „Lena, czemu mówisz, że saszetka jest twoja?” -> „Bo ja ją kupiłam. Tydzień temu, Mai na drogę. Maya zostawiła ją w tramwaju, a ja przyszłam…”
- **OBOK** 2.1: „Czego chcesz od Mai?” -> „Żeby powiedziała, gdzie jest. Ale... nie, inaczej. Chcę tylko wiedzieć, czy jest bezpieczn…”
- **LUZNE** 2.1: dopytanie „Czego chcesz od Mai?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…no dobrze. Kupiłam ją dla niej.”
- **OBOK** 3: „Maya, co chcesz powiedzieć siostrze?” -> „Że ma przestać mnie ratować. Pomogła, dziękuję. Ale od tygodnia to ona decyduje, gdzie śpi…”
- **OBOK** 3.1: „To czego od niej chcesz?” -> „Jednej rzeczy. Żeby we wtorek o 6:10 postawiła moją walizkę w czwórce. Tylko tyle, nic wię…”
- **OBOK** 3.1.1: „A jeśli Lena zrobi po swojemu?” -> „To nie przyjdę. Jeśli wybierze mnie, a nie swój plan, będę. Ważne okienko sprawdza się trz…”
- **LUZNE** 3.1.1: dopytanie „A jeśli Lena zrobi po swojemu?” nie zaczepia się o: „…Żeby we wtorek o 6:10 postawiła moją walizkę w czwórce. Tylko tyle, nic więcej.”
- **OBOK** 3.2: „Lena, słyszysz to?” -> „Słyszę. Ale... ja chciałam dobrze. Ktoś musiał myśleć za nią, kiedy uciekała z jedną torbą…”
- **LUZNE** 3.2: dopytanie „Lena, słyszysz to?” nie zaczepia się o: „…Pomogła, dziękuję. Ale od tygodnia to ona decyduje, gdzie śpię i z kim rozmawiam.”
- **OBOK** 5: „W saszetce jest umowa najmu na nazwisko Mai, podpisana przez Lenę. Co to?” -> „Moje. To znaczy... ja załatwiłam. Tydzień temu. Miała być niespodzianka. Ale... ona nic o …”
- **OBOK** 5.1: „Wynajęłaś jej mieszkanie bez pytania?” -> „Bo wiedziałam, że sama nie poprosi. Ale... tak, wiem. Ona ma prawo sama wybrać. Muszę prze…”
- **LUZNE** 5.1: dopytanie „Wynajęłaś jej mieszkanie bez pytania?” nie zaczepia się o: „…Ale... ona nic o tym nie wiedziała.”
- **OBOK** 6: „Na kartce stoi: „Jak wybierzesz ją zamiast mnie, nie przyjdę”. Kogo: ją?” -> „Walizkę. Czyli rzeczy, mieszkanie, cały porządek, który Lena dla mnie ułożyła. Albo przywi…”

## d16_dorian (dzień 16, Dorian Lund, 45, drzewo)

- **OBOK** 1: „Jak wygląda ta kaseta?” -> „Przezroczysta, z naklejką w paski, podpisana długopisem: „na pożegnanie”. W pudełku z ziel…”
- **OBOK** 1.1: „Co jest na niej nagrane?” -> „Jedna piosenka. W kółko, na obu stronach. Która, nie powiem. To osobiste.…”
- **LUZNE** 1.1: dopytanie „Co jest na niej nagrane?” nie zaczepia się o: „…Przezroczysta, z naklejką w paski, podpisana długopisem: na pożegnanie. W pudełku z zielonym grzbietem.”
- **OBOK** 1.1.1: „Kto ją dla ciebie nagrał?” -> „Ktoś, do kogo nie dzwonię. I komu obiecałem, że będę jej słuchał. Słuchałem, aż taśma zacz…”
- **OBOK** 2: „Gdzie ją zgubiłeś?” -> „W jedenastce, ostatni kurs, ostatnie siedzenie przy tylnych drzwiach. Całą drogę trzymałem…”
- **OBOK** 3.1: „Co takiego załatwiasz w sobotę?” -> „Odbieram coś, po czym będę kimś trochę innym. Więcej nie powiem. Naprawdę nie pytaj.…”
- **OBOK** 3.2: „Od czego uciekasz?” -> „Od ludzi, którzy pytają, czemu nie dzwonię. To moja sprawa.…”
- **PROZNIA** 3.2: dopytanie „Od czego uciekasz?” nie zaczepia się o: „…Bo w sobotę mam coś do załatwienia. Wolałbym do tego czasu nie nosić jej przy sobie.”
- **PROZNIA** 3.3: dopytanie „Na jakie nazwisko wystawić kwit?” nie zaczepia się o: „…Bo w sobotę mam coś do załatwienia. Wolałbym do tego czasu nie nosić jej przy sobie.”
- **OBOK** 4: „Pod naklejką jest karteczka z numerem 0731 i słowem „kasetowiec”.” -> „To mój numer. Nie pytaj. Naprawdę. Od niego się zaczęło i nie wiem, jak to skończyć.…”
- **OBOK** 4.1: „Taki sam numer był na żetonie w piórniku Iris Bell.” -> „To wiesz już więcej, niż powinno się wiedzieć po tamtej stronie szyby. W sobotę odbieram p…”

## d17_evan (dzień 17, Evan Doyle, 37, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda to etui?” -> odpowiedź „Czarne, skórzane, z miękką podszewką. W środku stary aparat i list. Aparat jest jej, od te…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda to etui?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie je zostawiłeś?” -> odpowiedź „W czwórce, na siedzeniu przy oknie. Jechałem do niej, a właściwie na pętlę, jak ostatnio. …”
- **WIEDZA** tura 1, pytanie 2: „Gdzie je zostawiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 1, pytanie 3: „Czemu piszesz list, zamiast zadzwonić?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Co jest w liście?” -> odpowiedź „Prośba, żeby odpisała. Adres zwrotny, mój numer i jedno zdanie: „Wiem, że byłem niesprawie…”
- **PROZNIA** tura 2, pytanie 1: „Co jest w liście?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **LUZNE** tura 2, pytanie 2: „Ile detektyw naprawdę kosztuje?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Ile detektyw naprawdę kosztuje?” używa „ile”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 3: „Dlaczego uważasz, że żona potrzebuje ratunku?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Dlaczego uważasz, że żona potrzebuje ratunku?” używa „dla”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 4: pytanie „Na kopercie jest data sprzed dwudziestu sześciu dni. Co to znaczy?” -> odpowiedź „Że list napisałem wcześniej, niż zgłosiłem zaginięcie. Usłyszałem „odchodzę”. Nie zgłosiłe…”
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jeśli Maya nie odpisze?” -> odpowiedź „Przyjdę jeszcze raz. I jeszcze raz. Ale nie z pretensją, tylko z kopertą, która czeka.…”
- **PROZNIA** tura 3, pytanie 1: „Co zrobisz, jeśli Maya nie odpisze?” nie zaczepia się o: odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 1: „Co zrobisz, jeśli Maya nie odpisze?” używa „may”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 2: pytanie „Odbiór wymaga podpisu. Podpiszesz?” -> odpowiedź „Evan Doyle. Z kropką po „E”. Zawsze.…”
- **PROZNIA** tura 3, pytanie 2: „Odbiór wymaga podpisu. Podpiszesz?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Odbiór wymaga podpisu. Podpiszesz?” używa „odb”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czemu mankiet masz dziś pomięty?” -> odpowiedź „Bo ręce mi się trzęsą. Zwykle prasuję. Dziś nie miałem siły, a to już jest informacja.…”
- **PROZNIA** tura 3, pytanie 3: „Czemu mankiet masz dziś pomięty?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Czemu mankiet masz dziś pomięty?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć

## d17_sylvia (dzień 17, Sylvia Okafor, 52, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wyglądają te szachy?” -> odpowiedź „Składana plansza, pionki wyrzeźbione ręcznie, trochę nierówne. Białego króla nie ma od lut…”
- **WIEDZA** tura 1, pytanie 1: „Jak wyglądają te szachy?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie je zostawiłaś?” -> odpowiedź „W czwórce, po zajęciach. Położyłam pudełko obok i zaczęłam rozmawiać z kierowcą o remoncie…”
- **PROZNIA** tura 1, pytanie 2: „Gdzie je zostawiłaś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie je zostawiłaś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Czemu gracie bez króla?” -> odpowiedź „Bo uczę, że gra toczy się dalej, nawet jeśli czegoś brakuje. Zwykle dzieci rozumieją to sz…”
- **WIEDZA** tura 1, pytanie 3: „Czemu gracie bez króla?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Czego uczysz dzieci?” -> odpowiedź „Szachów, logiki i cierpliwości. Cierpliwość idzie najgorzej. Uczę też, że czasem trzeba po…”
- **WIEDZA** tura 2, pytanie 1: „Czego uczysz dzieci?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 2: „Czy ktoś wie, gdzie jest król?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 3: pytanie „Czy brak króla to kłopot?” -> odpowiedź „Czasem. Przeciwnik zawsze wie, czego nie masz. Ale zwykle nie wie, co z tym zrobisz.…”
- **WIEDZA** tura 2, pytanie 3: „Czy brak króla to kłopot?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 4: pytanie „W pudełku jest koperta „wycieczka 3b”. Co to?” -> odpowiedź „Pieniądze rodziców, sto dwadzieścia dolarów. Zapomniałam, że je tam włożyłam. Jak zginą, z…”
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jak je odzyskasz?” -> odpowiedź „Zagram z kimś, kto nie zna zasad. To zawsze interesujące.…”
- **PROZNIA** tura 3, pytanie 1: „Co zrobisz, jak je odzyskasz?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Podpiszesz odbiór?” -> odpowiedź „S. Okafor. Przez „k”, nie „c”. Dzieci pytają, czy to szachowy skrót.…”
- **PROZNIA** tura 3, pytanie 2: „Podpiszesz odbiór?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Podpiszesz odbiór?” używa „pod”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czy to ważne, że szachy wróciły?” -> odpowiedź „Dla mnie to tylko pionki. Dla dzieci to pierwsze wrażenie, że rzeczy wracają.…”
- **LUZNE** tura 3, pytanie 3: „Czy to ważne, że szachy wróciły?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Czy to ważne, że szachy wróciły?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d18_iris_nora (dzień 18, Iris Bell i Nora Vance, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w tej teczce?” -> odpowiedź „Plan Cooper Street dziewięć z dopiskiem „do wyburzenia” i lista terminów rozliczenia zalic…”
- **OBOK** tura 1, pytanie 2: pytanie „Nora, po co ci ta teczka?” -> odpowiedź „Po kolei: rzecz, osoba, skutek. Lista terminów, czternaście rodzin, czwartek, dziewiąty wr…”
- **OBOK** tura 1, pytanie 3: pytanie „Czemu stoicie tu razem?” -> odpowiedź „Bo przyszłyśmy w tej samej sprawie. Niektóre sprawy lepiej ustalać przy świadkach.…”
- **PROZNIA** tura 1, pytanie 3: „Czemu stoicie tu razem?” nie zaczepia się o: wejście; wejście (wariant 1); wejście (wariant 2); wejście (wariant 3); wejście (wariant 4)
- **WIEDZA** tura 1, pytanie 3: „Czemu stoicie tu razem?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Iris, ile wynosi twoja oferta?” -> odpowiedź „Trzysta dolarów. Za zwrot kasetki i za zwolnienie z formalności. To nie łapówka, tylko wyk…”
- **LUZNE** tura 2, pytanie 1: „Iris, ile wynosi twoja oferta?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 2, pytanie 2: pytanie „Nora, co proponujesz?” -> odpowiedź „Pokwitowanie z pieczęcią biura i terminem wydania oryginałów. Formalnie czyste. Wiem, że t…”
- **LUZNE** tura 2, pytanie 2: „Nora, co proponujesz?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **LUZNE** tura 2, pytanie 3: „Czemu Nora odmówiła Iris rok temu?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 3: „Czemu Nora odmówiła Iris rok temu?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 2, pytanie 4: „Iris, skąd wiesz, gdzie jest mój pokój?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jeśli oryginały trafią do Nory?” -> odpowiedź „Będę musiała się z nimi rozliczyć. I z tymi, którzy pomagają. To ludzie, nie liczby.…”
- **PROZNIA** tura 3, pytanie 1: „Co zrobisz, jeśli oryginały trafią do Nory?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Co zrobisz, jeśli oryginały trafią do Iris?” -> odpowiedź „Okoye zapłacą drugi raz. Termin w czwartek, dziewiątego września, jest sztywny. Powiem to …”
- **OBOK** tura 3, pytanie 3: pytanie „Co się stanie, jeśli materiały pójdą do kontroli?” -> odpowiedź „Czyli do Victora. Wyjdzie wszystko: papiery, nazwiska, kasetki. Wtedy nikt nie będzie woln…”
- **PROZNIA** tura 3, pytanie 3: „Co się stanie, jeśli materiały pójdą do kontroli?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4

## d18_hugo (dzień 18, Hugo Lang, 40, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ta wędka?” -> odpowiedź „Czarna, teleskopowa, z pokrowcem na zamek. Na rączce naklejka „Najlepszy tata”. Dostałem o…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta wędka?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie ją zostawiłeś?” -> odpowiedź „W szóstce, pod siedzeniem. Wracałem znad rzeki, a raczej znad stolika. Wysiadłem w pośpiec…”
- **PROZNIA** tura 1, pytanie 2: „Gdzie ją zostawiłeś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie ją zostawiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Czy złowiłeś coś w życiu?” -> odpowiedź „Raz leszcza. Wypuściłem, bo był podejrzanie podobny do teścia.…”
- **PROZNIA** tura 2, pytanie 1: „Czy złowiłeś coś w życiu?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 1: „Czy złowiłeś coś w życiu?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 2, pytanie 2: „Ile razy w tygodniu „łowisz”?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Ile razy w tygodniu „łowisz”?” używa „ile”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 3: pytanie „Czemu nie powiesz żonie prawdy?” -> odpowiedź „Bo ona mnie kocha za rybę. Co bym zrobił, gdyby się dowiedziała, że kocha mnie za nic?…”
- **PROZNIA** tura 2, pytanie 3: „Czemu nie powiesz żonie prawdy?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czemu nie powiesz żonie prawdy?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Czego chcesz od biura?” -> odpowiedź „Wędki. I żeby ktoś w razie czego powiedział, że wędka tu była, więc ryby też.…”
- **PROZNIA** tura 3, pytanie 1: „Czego chcesz od biura?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 1: „Czego chcesz od biura?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 2: pytanie „Podpiszesz odbiór?” -> odpowiedź „Hugo Lang. Z wężykiem na końcu, jak rura.…”
- **PROZNIA** tura 3, pytanie 2: „Podpiszesz odbiór?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Podpiszesz odbiór?” używa „pod”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 3, pytanie 3: „Czy ktoś może potwierdzić, że łowisz?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Czy ktoś może potwierdzić, że łowisz?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d19_ada_leo (dzień 19, Ada Vale i Leo Marsh, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ta torba?” -> odpowiedź „Skórzana, na pasku, z niebieską taśmą na rączce. W środku dwa wykazy: oficjalny i poprawio…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta torba?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Ada, po co tu jesteś?” -> odpowiedź „Bo wiem, skąd jest puszka. Mama mówi, że nie wolno, ale pan Leo mówi, że tu można. I tu mó…”
- **OBOK** tura 1, pytanie 3: pytanie „Leo, czemu wybrałeś tę zmianę?” -> odpowiedź „Bo na zmianie jest dużo ludzi, a mało rzeczy. A ja jestem człowiek, który lubi wiedzieć, k…”
- **OBOK** tura 2, pytanie 1: pytanie „Ada, co wiesz o puszce?” -> odpowiedź „Że stała u pani Iris nad czajnikiem, a potem pan Leo ją wsunął pod ławkę. Zapisał w wykazi…”
- **LUZNE** tura 2, pytanie 1: „Ada, co wiesz o puszce?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 2, pytanie 2: pytanie „Leo, czym różnią się wykazy?” -> odpowiedź „W drugim dopisałem numer puszki odręcznie. Oficjalny jest czysty. Wolałem mieć coś na włas…”
- **OBOK** tura 2, pytanie 3: pytanie „Czy wy się boicie?” -> odpowiedź „Ja trochę. Ale ja się boję zawsze, od dawna. Ada nie wie, że się boi, i to jest groźniejsz…”
- **PROZNIA** tura 2, pytanie 3: „Czy wy się boicie?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czy wy się boicie?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Ada, co się stanie, jeśli wystąpisz jako świadek?” -> odpowiedź „Że mama będzie płakać. Pani Iris powiedziała, że mamy dzień na spakowanie się. To jest dzi…”
- **OBOK** tura 3, pytanie 2: pytanie „Leo, co mam zapisać?” -> odpowiedź „Sprostowanie. Że jedna puszka jechała moim kursem bez nadawcy i ja za to odpowiadam. Własn…”
- **OBOK** tura 3, pytanie 3: pytanie „Dlaczego chcesz brać winę na siebie?” -> odpowiedź „Bo wolę, żeby ktoś oberwał za puszkę, niż żeby całą zmianę wyrzucili. Wolę ja niż oni.…”
- **PROZNIA** tura 3, pytanie 3: „Dlaczego chcesz brać winę na siebie?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Dlaczego chcesz brać winę na siebie?” używa „dla”, a gracz nie musiał tego wcześniej usłyszeć

## d19_kofi (dzień 19, Kofi Mensah, 26, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ten powerbank?” -> odpowiedź „Czerwony, prostokątny, z pęknięciem na rogu. Naklejka z trasą: Port, Rynek, Cooper Street.…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ten powerbank?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie go zostawiłeś?” -> odpowiedź „W szóstce, na ładowarce przy oknie. Wysiadłem w biegu, bo zlecenie piszczało.…”
- **PROZNIA** tura 1, pytanie 2: „Gdzie go zostawiłeś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie go zostawiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Co woziłeś na tej trasie?” -> odpowiedź „Płaskie paczki w szarym płótnie. Adres: Cooper Street dziewięć, drugie piętro. Nie wiedzia…”
- **OBOK** tura 2, pytanie 2: pytanie „Kto ci płacił?” -> odpowiedź „Kobieta w jasnych rękawiczkach. Nigdy nie dotykała mojej ręki, tylko kładła pieniądze na t…”
- **PROZNIA** tura 2, pytanie 2: „Kto ci płacił?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 2: „Kto ci płacił?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 3: „Czemu przestałeś wozić paczki?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2
- **OBOK** tura 2, pytanie 4: pytanie „Pod naklejką jest zlecenie „cisza w cenie”. Co to znaczy?” -> odpowiedź „Że płacili za to, żebym nie pytał. Ostatni kurs: osiemdziesiąt dolarów. Mam je jeszcze, ni…”
- **OBOK** tura 3, pytanie 1: pytanie „Czego chcesz od biura?” -> odpowiedź „Powerbanku. I żeby moje stare kursy nie wracały jak echo.…”
- **PROZNIA** tura 3, pytanie 1: „Czego chcesz od biura?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Podpiszesz odbiór?” -> odpowiedź „Kofi Mensah, przez „K”. Dużymi, bo kurier nie ma czasu na ozdoby.…”
- **PROZNIA** tura 3, pytanie 2: „Podpiszesz odbiór?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Podpiszesz odbiór?” używa „pod”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czy opowiesz to komuś jeszcze?” -> odpowiedź „Jeśli ktoś zapyta, powiem prawdę. Ale mało kto pyta kuriera, co wiezie.…”
- **PROZNIA** tura 3, pytanie 3: „Czy opowiesz to komuś jeszcze?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Czy opowiesz to komuś jeszcze?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d19_ferro (dzień 19, Mario Ferro, 47, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ta teczka?” -> odpowiedź „Brązowa, sztywna, z gumką na rogu. Dwie przegródki. W jednej akt urodzenia, w drugiej poli…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta teczka?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 1, pytanie 2: „Gdzie dokładnie ją zostawiłeś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie dokładnie ją zostawiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Co to znaczy, że ktoś chodzi po mieście jako Ty?” -> odpowiedź „Dostałem wezwanie na sprawę o długi, których nie miałem. Dowód wydano w duplikacie, pod in…”
- **OBOK** tura 1, pytanie 4: pytanie „W teczce jest adnotacja o duplikacie. Co to dla Ciebie znaczy?” -> odpowiedź „Że ktoś poszedł do urzędu i powiedział, że to ja. Z moim zdjęciem z lat dwudziestych. Dowó…”
- **OBOK** tura 2, pytanie 1: pytanie „Kim jesteś z zawodu?” -> odpowiedź „Fryzjer. Własny zakład przy Rynku. Dwa foteliki, kolejka rano. Nie widzę, żeby moje nazwis…”
- **PROZNIA** tura 2, pytanie 1: „Kim jesteś z zawodu?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3; odpowiedź 1.4
- **WIEDZA** tura 2, pytanie 1: „Kim jesteś z zawodu?” używa „kim”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Co jeszcze jest w teczce?” -> odpowiedź „Zaświadczenie o niekaralności, polisa i zdjęcie z komunii. Zdjęcie jest ostatnią rzeczą, o…”
- **LUZNE** tura 2, pytanie 2: „Co jeszcze jest w teczce?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 2, pytanie 3: pytanie „Czemu przyszedłeś właśnie tu?” -> odpowiedź „Bo adwokat powiedział: sprawdź, czy ktoś u was nie ma dwóch dowodów. W biurach rzeczy znal…”
- **PROZNIA** tura 2, pytanie 3: „Czemu przyszedłeś właśnie tu?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3; odpowiedź 1.4
- **WIEDZA** tura 2, pytanie 3: „Czemu przyszedłeś właśnie tu?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 3, pytanie 1: „Co zrobisz, jeśli dowiesz się, kto Cię udaje?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3
- **WIEDZA** tura 3, pytanie 1: „Co zrobisz, jeśli dowiesz się, kto Cię udaje?” używa „cie”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 3, pytanie 2: „Podpiszesz odbiór teczki?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 2: „Podpiszesz odbiór teczki?” używa „pod”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czy masz tu jakiś dowód, że to Ty jesteś prawdziwym Ferro?” -> odpowiedź „Teczkę. Akt urodzenia, polisę i zdjęcie. A jeśli to za mało, proszę zadzwonić do adwokata.…”
- **LUZNE** tura 3, pytanie 3: „Czy masz tu jakiś dowód, że to Ty jesteś prawdziwym Ferro?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Czy masz tu jakiś dowód, że to Ty jesteś prawdziwym Ferro?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d20_elias_sam (dzień 20, Elias Wren, Sam Holt i Victor Crane, drzewo)

- **OBOK** 1: „Sam, jak wygląda ten zegarek?” -> „Złoty, kieszonkowy, mały. Szkło pęknięte na trzeciej. Na pokrywce inicjały S.H. Po dziadku…”
- **LUZNE** 1.1: dopytanie „Czemu nosisz go w cudzym etui?” nie zaczepia się o: „…Po dziadku. Jedyna rzecz, którą miałem, zanim tu usiadłem.”
- **OBOK** 2: „Elias, co jest w tej kopercie?” -> „Osiemdziesiąt cztery dolary. Tyle pan Holt zapłacił mi z własnej kieszeni za oprawkę, któr…”
- **OBOK** 2.1: „Sam, czemu nie weźmiesz?” -> „Bo to nie był dług. Obiecałem, że znajdę, i nie znalazłem. Zapłaciłem za własne słowo. Jak…”
- **PROZNIA** 2.1: dopytanie „Sam, czemu nie weźmiesz?” nie zaczepia się o: „…Odkładałem cztery tygodnie. Chcę oddać do ręki.”
- **OBOK** 2.1.1: „Elias, a jeśli nie weźmie nigdy?” -> „To koperta zostanie tutaj, na jego nazwisko. Dług bez nazwiska jest gorszy niż dług z nazw…”
- **OBOK** 3.1: „Co się dzieje z twoim drugim egzemplarzem?” -> „Idzie do Urzędu, jak każdy. Tam czyta go każdy uprawniony. Nie pytaj mnie, kto jest uprawn…”
- **PROZNIA** 3.1: dopytanie „Co się dzieje z twoim drugim egzemplarzem?” nie zaczepia się o: „…Chcę dwóch zeznań i dowodu wpłaty. Albo zamknę tak, jak jest.”
- **OBOK** 4.1: „Czego chcesz ode mnie teraz?” -> „Jednej rzeczy. Elias od tygodni pyta, kto tu siedzi, a ja nie umiem odpowiedzieć. Jak cię …”
- **LUZNE** 4.1: dopytanie „Czego chcesz ode mnie teraz?” nie zaczepia się o: „…Bilet leżał u Iris od twojej pierwszej nocy. Nie brałem, bo wziąć znaczyło zostawić cię z niczym.”
- **OBOK** 5.1: „Odcinek ma tę samą datę co kwit Eliasa. Czyje to były pieniądze?” -> „Moje. Nie z kasy, nie od Iris, nie z żadnego funduszu. To jedyna czysta rzecz w całej tej …”
- **LUZNE** 5.1: dopytanie „Odcinek ma tę samą datę co kwit Eliasa. Czyje to były pieniądze?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Każdy wpis w dwóch egzemplarzach to jeden adres więcej w Urzędzie. A imię powiedziane na głos nie idzie nigdzie.”

## d20_tobias (dzień 20, Milo Reed, 29, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ten breloczek?” -> odpowiedź „Syrena z blachy, niebieska, z odłamanym ogonem. Dostałem od córki. Kluczyki są trzy, na kó…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ten breloczek?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie ich szukać?” -> odpowiedź „W szóstce, na ostatnim siedzeniu przy oknie. Położyłem, jak zdejmowałem plecak, i wysiadłe…”
- **PROZNIA** tura 1, pytanie 2: „Gdzie ich szukać?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie ich szukać?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Co jest w tym vanie, że tak Ci się spieszy?” -> odpowiedź „Towar dla sklepu: chleb, jajka i dwie skrzynki mleka. Jak nie dowiozę do szóstej, sklep ni…”
- **PROZNIA** tura 1, pytanie 3: „Co jest w tym vanie, że tak Ci się spieszy?” nie zaczepia się o: wejście
- **OBOK** tura 2, pytanie 1: pytanie „Od jak dawna jeździsz?” -> odpowiedź „Cztery lata. Prawie nie widuję dnia. Córka mówi, że jestem jak nietoperz z prawem jazdy.…”
- **PROZNIA** tura 2, pytanie 1: „Od jak dawna jeździsz?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **OBOK** tura 2, pytanie 2: pytanie „Kto może potwierdzić, że van jest Twój?” -> odpowiedź „Firma. Dyspozytor Mick, numer jest na karcie. Ale o tej porze śpi i nie odbierze.…”
- **LUZNE** tura 2, pytanie 2: „Kto może potwierdzić, że van jest Twój?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Kto może potwierdzić, że van jest Twój?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 2: „Kto może potwierdzić, że van jest Twój?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 3: „Czemu spieszysz się tak, jakby coś Cię goniło?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czemu spieszysz się tak, jakby coś Cię goniło?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 3: „Czemu spieszysz się tak, jakby coś Cię goniło?” używa „cie”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 4: pytanie „Czemu ten breloczek jest taki ciężki?” -> odpowiedź „Bo w środku jest schowek. Trzymam tam napiwki od klientów, żeby ich nie wydać. Sześćdziesi…”
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jak odzyskasz kluczyki?” -> odpowiedź „Pojadę po bułki. Potem na stację, wypiję kawę i poczuję się jak człowiek.…”
- **LUZNE** tura 3, pytanie 1: „Co zrobisz, jak odzyskasz kluczyki?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 2: pytanie „Jak zapisać Twoje nazwisko?” -> odpowiedź „Reed, przez dwa e. Milo, krótko, jak klakson.…”
- **PROZNIA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 3, pytanie 3: „Czy ktoś mógłby chcieć tych kluczyków?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Czy ktoś mógłby chcieć tych kluczyków?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d21_maya_lena_priya (dzień 21, Maya Doyle, Lena Brandt i Priya Nair, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Priya, jak wygląda Twoja walizka?” -> odpowiedź „Szara, twarda, z żółtą wstążką na rączce. W środku suknia, buty i welon w osobnej torbie, …”
- **WIEDZA** tura 1, pytanie 1: „Priya, jak wygląda Twoja walizka?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Maya, co jest w Twojej walizce?” -> odpowiedź „Suknia. Moja, sprzed siedmiu lat. Nie na ślub, na oddanie. Raz, dwa, trzy. Evan ma ją dost…”
- **WIEDZA** tura 1, pytanie 2: „Maya, co jest w Twojej walizce?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Lena, czemu przyszłaś razem z Mayą?” -> odpowiedź „Bo wiem, że to dziś. Nie chcę, żeby poszła sama. Ale… nie sama, tylko obok. Ona mówi, że o…”
- **OBOK** tura 1, pytanie 4: pytanie „W kieszeni walizki Mai jest bilet 0517. Skąd on jest?” -> odpowiedź „Dostałam go w kopercie, bez słowa. Nie wiem od kogo, wiem od czego. Pytaj, czemu nie użyła…”
- **OBOK** tura 2, pytanie 1: pytanie „Maya, czemu oddajesz suknię Evanowi?” -> odpowiedź „Bo to jego pamiątka, nie moja. Nie chcę od niego niczego, ani żalu, ani rzeczy. Oddam i bę…”
- **WIEDZA** tura 2, pytanie 1: „Maya, czemu oddajesz suknię Evanowi?” używa „eva”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Lena, co chcesz przekazać Mai?” -> odpowiedź „Że jest mi przykro, że dopiero jej zniknięcie mnie ruszyło. Że mogłam pytać. Ale ona nie c…”
- **LUZNE** tura 2, pytanie 2: „Lena, co chcesz przekazać Mai?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Lena, co chcesz przekazać Mai?” używa „mai”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 2, pytanie 3: „Priya, wesele o jedenastej. Co, jeśli walizki się pomylą?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 1: pytanie „Maya, jak się czujesz przed oddaniem sukni?” -> odpowiedź „Jak po wyłączeniu prądu. Nic nie iskrzy. Ciszej, niż myślałam. Chyba lepiej.…”
- **OBOK** tura 3, pytanie 3: pytanie „Lena, wolisz przekazać wiadomość sama czy przeze mnie?” -> odpowiedź „Przez Ciebie, jeśli Maya pozwoli. Sama zepsuję. Zawsze mówię o dwa zdania za dużo.…”
- **LUZNE** tura 3, pytanie 3: „Lena, wolisz przekazać wiadomość sama czy przeze mnie?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 4: pytanie „Priya, bardzo Ci się spieszy?” -> odpowiedź „Strasznie. Mam pięćdziesiąt dolarów w kopercie na taksówkę. Dam je, jeśli wydacie obie wal…”
- **LUZNE** tura 3, pytanie 4: „Priya, bardzo Ci się spieszy?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi

## d21_mina (dzień 21, Mina Oh, 68, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda Twój koszyk?” -> odpowiedź „Wiklinowy, z pokrywką na rzemyk. Rzemyk zawiązałam podwójnym węzłem, bo pierwszy zawsze si…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda Twój koszyk?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda Twój koszyk?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Co jest w środku?” -> odpowiedź „Leki, jedno opakowanie na miesiąc. Słoik śliwek z pestkami, wnuczka nie lubi bez pestek. I…”
- **PROZNIA** tura 1, pytanie 2: „Co jest w środku?” nie zaczepia się o: wejście
- **OBOK** tura 1, pytanie 3: pytanie „Czemu nie wzięłaś koszyka z tramwaju od razu?” -> odpowiedź „Bo zasnęłam. Człowiek w moim wieku zasypia, jak mu się pozwoli. Teraz pamiętam, że pozwoli…”
- **WIEDZA** tura 1, pytanie 3: „Czemu nie wzięłaś koszyka z tramwaju od razu?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Dla kogo jest ten słoik?” -> odpowiedź „Dla Zoe, wnuczki. Ma siedem lat i twierdzi, że śliwki to owoce, które się przebrały za win…”
- **PROZNIA** tura 2, pytanie 1: „Dla kogo jest ten słoik?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.3; odpowiedź 1.4
- **WIEDZA** tura 2, pytanie 1: „Dla kogo jest ten słoik?” używa „dla”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Kto może potwierdzić, że koszyk jest Twój?” -> odpowiedź „Apteka na Rynku, farmaceutka Anja. Zna mnie od lat, ale o tej porze już śpi.…”
- **LUZNE** tura 2, pytanie 2: „Kto może potwierdzić, że koszyk jest Twój?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Kto może potwierdzić, że koszyk jest Twój?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 2: „Kto może potwierdzić, że koszyk jest Twój?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 3: pytanie „Czemu boisz się cudzego koszyka?” -> odpowiedź „Bo raz wzięłam cudzy i wzięłam cudze tabletki. Dobrze, że to były witaminy. Od tamtej pory…”
- **LUZNE** tura 2, pytanie 3: „Czemu boisz się cudzego koszyka?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 3: „Czemu boisz się cudzego koszyka?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz po odzyskaniu koszyka?” -> odpowiedź „Wezmę lek, a potem zrobię sobie herbatę. Zoe przyjdzie na śniadanie z mamą, więc słoik mus…”
- **LUZNE** tura 3, pytanie 1: „Co zrobisz po odzyskaniu koszyka?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 2: pytanie „Jak zapisać Twoje nazwisko?” -> odpowiedź „Oh, przez „h” na końcu. Mina, od Wilhelminy. Tak mnie nazwano przed wojną, której nie pami…”
- **PROZNIA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3
- **WIEDZA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Co, jeśli koszyk się nie znajdzie?” -> odpowiedź „To pójdę do Anji o ósmej i poproszę na kreskę. Nie pierwszy raz, a Anja nie pyta.…”
- **LUZNE** tura 3, pytanie 3: „Co, jeśli koszyk się nie znajdzie?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi

## d22_noah (dzień 22, Noah Reyes, 42, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co dokładnie jest w kopercie?” -> odpowiedź „Czyli: oświadczenie Mai, jedna strona, podpis, data. I kartka z zakresem zgody, żeby nikt …”
- **OBOK** tura 1, pytanie 2: pytanie „Co zrobisz z oświadczeniem?” -> odpowiedź „Czyli: dołączę do akt i zamknę zgłoszenie. Dziś mija termin. Potem to już nie poszukiwanie…”
- **PROZNIA** tura 1, pytanie 3: „Czemu tak Ci zależy na terminie?” nie zaczepia się o: wejście; wejście (wariant 2); wejście (wariant 3)
- **WIEDZA** tura 1, pytanie 3: „Czemu tak Ci zależy na terminie?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Od kiedy prowadzisz tę sprawę?” -> odpowiedź „Od czwartku sprzed pięciu tygodni. Czyli od dnia zgłoszenia. Najpierw myślałem, że zwykła.…”
- **PROZNIA** tura 2, pytanie 1: „Od kiedy prowadzisz tę sprawę?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **OBOK** tura 2, pytanie 2: pytanie „Do której złożysz papiery?” -> odpowiedź „Do szóstej rano. Czyli jeśli się spóźnię, sprawa idzie wyżej i nic z tego nie zależy ode m…”
- **PROZNIA** tura 2, pytanie 2: „Do której złożysz papiery?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **OBOK** tura 2, pytanie 3: pytanie „Co dokładnie mogę przekazać z tej koperty?” -> odpowiedź „Czyli: że żyje i jest bezpieczna. Nie wolno: miasto, nazwisko, linia, praca. Napisała to s…”
- **WIEDZA** tura 2, pytanie 4: „Czy Evan wie, że to oświadczenie istnieje?” używa „czy”, a gracz słyszał to tylko po: odpowiedź 1.1; odpowiedź 1.2
- **WIEDZA** tura 2, pytanie 4: „Czy Evan wie, że to oświadczenie istnieje?” używa „eva”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Co pomogło Ci w tej sprawie?” -> odpowiedź „Czyli: że ktoś odmówił powiedzenia za dużo. Mało kto to potrafi, zwłaszcza po nocy.…”
- **PROZNIA** tura 3, pytanie 1: „Co pomogło Ci w tej sprawie?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Co się stanie, jeśli nic nie przekażę?” -> odpowiedź „Czyli: zgłoszenie wisi. Maya jest bezpieczna, ale detektyw rusza, a ja go nie zatrzymam.…”
- **PROZNIA** tura 3, pytanie 2: „Co się stanie, jeśli nic nie przekażę?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 3: pytanie „Co dostanie Evan, jeśli oświadczenie do niego dotrze?” -> odpowiedź „Czyli: jedno zdanie. Żyje i nie wróci. Nic więcej. Chyba że ktoś dopisze od siebie, a wted…”
- **LUZNE** tura 3, pytanie 3: „Co dostanie Evan, jeśli oświadczenie do niego dotrze?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Co dostanie Evan, jeśli oświadczenie do niego dotrze?” używa „eva”, a gracz nie musiał tego wcześniej usłyszeć

## d22_stahl (dzień 22, Marek Stahl, ok. 50, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ta walizka?” -> odpowiedź „Szara, twarda, z żółtym zamkiem. Zgodnie z regulaminem dodam, że w środku jest biała sukni…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta walizka?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 1, pytanie 2: „Kiedy ją zgubiłeś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Kiedy ją zgubiłeś?” używa „kie”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 1, pytanie 3: „Skąd tak dokładnie znasz opis sukni?” używa „ska”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Czego dokładnie od okienka potrzebujesz?” -> odpowiedź „Jednej rzeczy. Kopii pokwitowania wydania z wczoraj, ze wskazaniem, kto odebrał walizkę i …”
- **PROZNIA** tura 2, pytanie 1: „Czego dokładnie od okienka potrzebujesz?” nie zaczepia się o: odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 1: „Czego dokładnie od okienka potrzebujesz?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 2: „Na jakiej podstawie to żądasz?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czy to Ty stałeś wczoraj na końcu kolejki?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Jak długo szukasz tej osoby?” -> odpowiedź „Ponad miesiąc. Zgodnie z regulaminem nie podaję, kto płaci. Ludzie bywają wdzięczni za dob…”
- **PROZNIA** tura 3, pytanie 1: „Jak długo szukasz tej osoby?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 1: „Jak długo szukasz tej osoby?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 3, pytanie 2: „Czego byś się nie dowiedział, gdyby okienko odmówiło?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Czego byś się nie dowiedział, gdyby okienko odmówiło?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Ile jesteś gotów zapłacić za kopię kwitu?” -> odpowiedź „Zgodnie z regulaminem to nie jest łapówka, tylko opłata manipulacyjna. Dwieście dolarów, o…”
- **PROZNIA** tura 3, pytanie 3: „Ile jesteś gotów zapłacić za kopię kwitu?” nie zaczepia się o: odpowiedź 2.2; odpowiedź 2.3
- **WIEDZA** tura 3, pytanie 3: „Ile jesteś gotów zapłacić za kopię kwitu?” używa „ile”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 4: pytanie „Do walizki jest przypięta karteczka z depozytem detektywa. Co to?” -> odpowiedź „Zaliczka, sześćset dolarów, na wypadek, gdyby pełnomocnictwo nie przyszło na czas. To zgod…”

## d22_jonah (dzień 22, Jonah Pike, 22, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w tej kopercie?” -> odpowiedź „Dziewięćdziesiąt dolarów w banknotach i kartka z podpisem. Rata dla człowieka, którego nie…”
- **WIEDZA** tura 1, pytanie 2: „Kiedy ją zgubiłeś?” używa „kie”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Komu jesteś winien te pieniądze?” -> odpowiedź „Marlowowi. Kubie Marlowowi. Pożyczył na pierścionek i na wesele. Teraz mówi, że rata rośni…”
- **PROZNIA** tura 1, pytanie 3: „Komu jesteś winien te pieniądze?” nie zaczepia się o: wejście; wejście (wariant 1); wejście (wariant 2); wejście (wariant 3)
- **WIEDZA** tura 1, pytanie 3: „Komu jesteś winien te pieniądze?” używa „kom”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Jak poszły oświadczyny z June?” -> odpowiedź „Powiedziała tak. Jeszcze raz: tak! Płakała i śmiała się naraz. Ślub w czerwcu. Zapraszam, …”
- **WIEDZA** tura 2, pytanie 1: „Jak poszły oświadczyny z June?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 1: „Jak poszły oświadczyny z June?” używa „jun”, a gracz słyszał to tylko po: odpowiedź 1.2
- **OBOK** tura 2, pytanie 2: pytanie „Ile jeszcze jesteś winien Marlowowi?” -> odpowiedź „Z tą ratą zostanie jeszcze trzysta sześćdziesiąt. Czyli sześć sobót. Liczę na ślub, bo goś…”
- **PROZNIA** tura 2, pytanie 2: „Ile jeszcze jesteś winien Marlowowi?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2
- **WIEDZA** tura 2, pytanie 2: „Ile jeszcze jesteś winien Marlowowi?” używa „ile”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 2: „Ile jeszcze jesteś winien Marlowowi?” używa „mar”, a gracz słyszał to tylko po: odpowiedź 1.3
- **OBOK** tura 2, pytanie 3: pytanie „Co, jeśli koperty nie ma w biurze?” -> odpowiedź „To spłacę z czynszu. June się dowie, bo musi. Kuba nie przyjmuje wymówek, tylko pieniądze.…”
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jeśli odzyskasz kopertę?” -> odpowiedź „Pobiegnę do Kuby, zanim się rozmyślę. A potem pojadę do June i powiem jej o długu. Wszystk…”
- **OBOK** tura 3, pytanie 2: pytanie „Czy kto inny wie o tym długu?” -> odpowiedź „June nie. Moja matka tak, ale jej nie mówię, że to Marlow. Bo ona zna jego matkę i będzie …”
- **PROZNIA** tura 3, pytanie 2: „Czy kto inny wie o tym długu?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Czy kto inny wie o tym długu?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Co Ci przeszkadza w mówieniu June?” -> odpowiedź „Że będzie patrzyła na pierścionek jak na kredyt. Że spytam, czy kocha mnie, czy ratę. Głup…”
- **WIEDZA** tura 3, pytanie 3: „Co Ci przeszkadza w mówieniu June?” używa „jun”, a gracz nie musiał tego wcześniej usłyszeć

## d23_iris_nora_victor (dzień 23, Iris Bell, Nora Vance i Victor Crane, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w kasetce?” -> odpowiedź „Karta rozliczenia z moim podpisem i pokwitowanie dopłaty. Nora chce oryginałów, Victor lis…”
- **OBOK** tura 1, pytanie 2: pytanie „Nora, czego chcesz od kasetki?” -> odpowiedź „Po kolei: oryginały zaliczek, bo lokatorzy ich potrzebują. Okoye wpłaciła czterysta dolaró…”
- **WIEDZA** tura 1, pytanie 3: „Victor, co weźmiesz, jeśli kasetka trafi do Ciebie?” używa „cie”, a gracz słyszał to tylko po: wejście (wariant 3)
- **OBOK** tura 2, pytanie 1: pytanie „Iris, mogę zapytać o coś na osobności?” -> odpowiedź „Jeśli Victor i Nora poczekają. Pytaj.…”
- **PROZNIA** tura 2, pytanie 1: „Iris, mogę zapytać o coś na osobności?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3; odpowiedź 1.4
- **OBOK** tura 2, pytanie 2: pytanie „Nora, co się stanie, jeśli oryginały trafią do Victora?” -> odpowiedź „Po kolei: Urząd je zatrzyma, lokatorzy zostaną bez dowodu, kamienica pójdzie pod młot. Rod…”
- **PROZNIA** tura 2, pytanie 3: „Victor, dla kogo naprawdę liczysz tę kopię?” nie zaczepia się o: odpowiedź 1.2; odpowiedź 1.4
- **OBOK** tura 2, pytanie 4: pytanie „Iris, na stronie rejestru są nazwiska klientów. Skąd je masz?” -> odpowiedź „Z kopii Urzędu. Proszę zobaczyć: wszystko, co zapisano w dwóch egzemplarzach, jest tutaj. …”
- **PROZNIA** tura 3, pytanie 1: „Iris, co będzie po dzisiejszym dniu?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Iris, ile wydałaś na papiery dla czterech osób?” -> odpowiedź „Tysiąc siedemset za sztukę. Sześć tysięcy osiemset. Wzięłam je od miasta, bo skąd mam wzią…”
- **PROZNIA** tura 3, pytanie 2: „Iris, ile wydałaś na papiery dla czterech osób?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 4: pytanie „Iris, ile zapłacisz, żeby tej kasetki nie było w protokole?” -> odpowiedź „Pięćset dolarów. Lubię porządek. Wsunę kopertę pod szybę i nikt nie musi nic mówić.…”
- **LUZNE** tura 3, pytanie 4: „Iris, ile zapłacisz, żeby tej kasetki nie było w protokole?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi

## d23_rosa (dzień 23, Rosa Vale, 33, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ten portfel?” -> odpowiedź „Czarny, cienki, zatrzask pękł z lewej. W środku bilet miesięczny i sześćdziesiąt dolarów w…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ten portfel?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie go zgubiłaś?” -> odpowiedź „W jedenastce, po nocnej zmianie. Wyjęłam go, żeby sprawdzić godzinę odjazdu, i położyłam o…”
- **WIEDZA** tura 1, pytanie 2: „Gdzie go zgubiłaś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Skąd masz pieniądze na czynsz, skoro pracujesz za grosze?” -> odpowiedź „Z nocy w pralni i z tego, że nie jem w poniedziałki. To nie jest historia na chwałę, tylko…”
- **WIEDZA** tura 1, pytanie 3: „Skąd masz pieniądze na czynsz, skoro pracujesz za grosze?” używa „ska”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 1: „Słyszałaś, co się dzieje w kamienicy Cooper?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 1: „Słyszałaś, co się dzieje w kamienicy Cooper?” używa „sly”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 1: „Słyszałaś, co się dzieje w kamienicy Cooper?” używa „coo”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Co zrobisz z pieniędzmi, jeśli je odzyskasz?” -> odpowiedź „Zapłacę czynsz. A jak zostanie reszta, to kupię Adzie lalkę. Pytała o tę z różowym warkocz…”
- **PROZNIA** tura 2, pytanie 2: „Co zrobisz z pieniędzmi, jeśli je odzyskasz?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **PROZNIA** tura 2, pytanie 3: „Czy ktoś ze Skrytki prosił Cię kiedyś o przysługę?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czy ktoś ze Skrytki prosił Cię kiedyś o przysługę?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 3: „Czy ktoś ze Skrytki prosił Cię kiedyś o przysługę?” używa „skr”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Rosa, co chcesz, żeby się stało po dzisiejszym dniu?” -> odpowiedź „Żeby było cicho. Żebym rano wsiadła do tramwaju i nikt nie pytał, skąd mam czynsz. Dobrze …”
- **LUZNE** tura 3, pytanie 1: „Rosa, co chcesz, żeby się stało po dzisiejszym dniu?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 2: pytanie „Co zrobisz, jeśli portfela nie ma?” -> odpowiedź „Pożyczę. Pożyczać umiem. Tylko że potem trzeba oddawać, a ja już teraz oddaję więcej, niż …”
- **LUZNE** tura 3, pytanie 2: „Co zrobisz, jeśli portfela nie ma?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 3: pytanie „Czy komuś ufasz bardziej niż nam?” -> odpowiedź „Nikomu. Ufam kartce i długopisowi. Jak jest zapisane, to wiem, że nikt nie zmieni zdania.…”
- **PROZNIA** tura 3, pytanie 3: „Czy komuś ufasz bardziej niż nam?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Czy komuś ufasz bardziej niż nam?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d24_vera (dzień 24, Vera Kovacs, 62, drzewo)

- **OBOK** 1: „Co to za teczka?” -> „Szara, tekturowa, wiązana tasiemką. Pusta. Od lat stoi w szafce jako „zajęte”, żeby nikt t…”
- **OBOK** 1.1: „Co jest na kartoniku?” -> „Numer: 0809. Ołówkiem, pismo Sama. To szafka dla tego, kto siedzi przy szybie. Dla ciebie.…”
- **LUZNE** 1.1.1: dopytanie „Czemu dla mnie? Nikt mi nie mówił o żadnej szafce.” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Dla ciebie. Klucz mam przy pasie, słychać.”
- **OBOK** 2: „Skąd wzięłaś ten kartonik?” -> „Z szuflady numer sześć, tej, którą Sam zostawił dla następnego. Wyjęłam wczoraj. Od wczora…”
- **OBOK** 3: „Czemu przyszłaś bez Sama?” -> „Bo on by mi przerwał. Powiedziałby, że to nie moja wina. A to jest moja wina i chcę to pow…”
- **OBOK** 3.1: „Jaka wina?” -> „To ja wybieram, kto siada na tym fotelu. Od jedenastu lat. Patrzę na ludzi przy słupie z o…”
- **OBOK** 3.1.2: „Ilu było przede mną?” -> „Pięcioro. Sam był piąty. Iris trzecia, tak, ta Iris. Czwartego znaleźli w kanale portowym.…”
- **PROZNIA** 3.1.2: dopytanie „Ilu było przede mną?” nie zaczepia się o: „…Patrzę na ludzi przy słupie z ogłoszeniem i nie pytam, co umieją. Patrzę, czy ktoś by ich szukał.”
- **OBOK** 4: „Co ty właściwie robisz w tym biurze?” -> „Klucze, teczki, pudełka. Zamykam, co otwarte, i pilnuję, żeby nic nie stało niczyje. A raz…”
- **LUZNE** 4.1.1: dopytanie „Jak się z tego fotela odchodzi?” nie zaczepia się o: „…Zmieniam tylko odcinek z numerem. Twój był 0809.”
- **OBOK** 5: „Na mojej umowie jest podpis z pętlą w literze K. Czyj?” -> „Mój. Podpisałam za Zarząd Cooper, nieczytelnie, żeby nikt nie szukał, kto za tym stoi. Wsz…”
- **OBOK** 5.1: „Czemu mówisz mi to teraz?” -> „Bo Sam odszedł i nie umiał tego powiedzieć. Ktoś musi wiedzieć, że nie jest pierwszy. I że…”
- **LUZNE** 6.1: dopytanie „Co znajdę w tej szafce oprócz listu?” nie zaczepia się o: „…Sam napisał to ołówkiem, ale reguła nie była jego. Dostał ją tak jak ty: cudzą, do udawania, że własna.”

## d24_leo (dzień 24, Leo Marsh, 46, stare tury)

- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta torba?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie dokładnie ją zgubiłeś?” -> odpowiedź „Na pętli szóstki, o czwartej. Położyłem na ławce, bo musiałem zapalić. Zazwyczaj zabieram,…”
- **WIEDZA** tura 1, pytanie 2: „Gdzie dokładnie ją zgubiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Co to za wpis, którego nie rozumiesz?” -> odpowiedź „Pozycja ostatnia: „0809, dokumenty, paczka w płótnie, nieodebrana”. Tego numeru nigdy nie …”
- **OBOK** tura 1, pytanie 4: pytanie „W wykazie obok pozycji 0809 ktoś dopisał „dyżurny”. Co to znaczy?” -> odpowiedź „Że paczka nie jest dla klienta. Jest dla tego, kto stoi po tej stronie szyby. Nie wiem, cz…”
- **OBOK** tura 2, pytanie 2: pytanie „Co zwykle jest w paczce?” -> odpowiedź „Dokumenty, trochę gotówki w kopercie, czasem klucz. Nigdy nie zaglądam. Płótno jest zszyte…”
- **WIEDZA** tura 2, pytanie 3: „Czy wiesz, kto wysłał paczkę 0809?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 3: „Czy wiesz, kto wysłał paczkę 0809?” używa „0809”, a gracz słyszał to tylko po: odpowiedź 1.3
- **OBOK** tura 3, pytanie 1: pytanie „Jak się czujesz, wożąc paczki, o których nic nie wiesz?” -> odpowiedź „Jak maszynista z ręką na hamulcu, który nie widzi, co jest przed nim. Jadę, bo tak mam. I …”
- **LUZNE** tura 3, pytanie 1: „Jak się czujesz, wożąc paczki, o których nic nie wiesz?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 1: „Jak się czujesz, wożąc paczki, o których nic nie wiesz?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 2: pytanie „Co zrobisz z wykazem po dzisiejszym dniu?” -> odpowiedź „Oddam okienku, jeśli ktoś wpisze. Jeśli nie, zachowam. Nie potrzebuję się z nikim dzielić,…”
- **LUZNE** tura 3, pytanie 2: „Co zrobisz z wykazem po dzisiejszym dniu?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **LUZNE** tura 3, pytanie 3: „Kto naprawdę czeka na tę paczkę?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Kto naprawdę czeka na tę paczkę?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć

## d24_thomas (dzień 24, Thomas Ward, 71, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w tej kopercie?” -> odpowiedź „Jedna kartka, pisana moją ręką. Że rzecz, którą młody człowiek mi kiedyś oddał, oddał bez …”
- **OBOK** tura 1, pytanie 2: pytanie „Kiedy to było?” -> odpowiedź „Sześć tygodni temu. Prawą oddał od razu. Lewa czekała, jak powiedział. Przyszedłem wtedy p…”
- **PROZNIA** tura 1, pytanie 2: „Kiedy to było?” nie zaczepia się o: wejście; wejście (wariant 1); wejście (wariant 2); wejście (wariant 3)
- **WIEDZA** tura 1, pytanie 2: „Kiedy to było?” używa „kie”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Czemu piszesz świadectwo, skoro nikt o nie nie prosi?” -> odpowiedź „Bo ktoś powinien zapisać, że ten człowiek nie robił nic złego. Zrobił wyjątek, i dobrze. N…”
- **WIEDZA** tura 1, pytanie 3: „Czemu piszesz świadectwo, skoro nikt o nie nie prosi?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Jak sobie radzisz od śmierci żony?” -> odpowiedź „Dwa razy w tygodniu na cmentarz. Rozmawiam z nią o rękawiczce. Mówi, że byłem leniwy, skor…”
- **PROZNIA** tura 2, pytanie 1: „Jak sobie radzisz od śmierci żony?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 1: „Jak sobie radzisz od śmierci żony?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Kto jeszcze zna tę historię?” -> odpowiedź „Córka, Claire. I ten młody człowiek, Sam. Powiedział mi kiedyś: lewa czeka. Nie wiedziałem…”
- **PROZNIA** tura 2, pytanie 2: „Kto jeszcze zna tę historię?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 2: „Kto jeszcze zna tę historię?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 3: pytanie „Czy Sam kiedyś Ci coś obiecał?” -> odpowiedź „Że lewa poczeka. Dotrzymał. To więcej, niż potrafią niektórzy w rodzinie.…”
- **PROZNIA** tura 2, pytanie 3: „Czy Sam kiedyś Ci coś obiecał?” nie zaczepia się o: odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czy Sam kiedyś Ci coś obiecał?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 3: „Czy Sam kiedyś Ci coś obiecał?” używa „sam”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Co chcesz, żeby się stało z tym świadectwem?” -> odpowiedź „Żeby ktoś je przeczytał. I żeby nikt nie wyrzucił. Jeśli to nie jest dla księgi, to chocia…”
- **LUZNE** tura 3, pytanie 1: „Co chcesz, żeby się stało z tym świadectwem?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **LUZNE** tura 3, pytanie 2: „Czy świadectwo ma jakieś znaczenie prawne?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 2: „Czy świadectwo ma jakieś znaczenie prawne?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czego się boisz?” -> odpowiedź „Że ten młody człowiek odchodzi, a ja nie zdążyłem podziękować. Że za rok to ja zniknę, a n…”
- **PROZNIA** tura 3, pytanie 3: „Czego się boisz?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Czego się boisz?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć

## d25_sam_elias (dzień 25, Sam Holt, Elias Wren i Victor Crane, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w tym etui?” -> odpowiedź „Okulary, które nie są moje, i kartka z decyzją o odejściu, z wpisem o niedoborze na zmiani…”
- **OBOK** tura 1, pytanie 2: pytanie „Victor, czemu zamykasz audyt dziś?” -> odpowiedź „Bo dziś kończy się okres. Protokół musi mieć podpis i daty. Kto to podpisze? Ja, jeśli kop…”
- **PROZNIA** tura 1, pytanie 2: „Victor, czemu zamykasz audyt dziś?” nie zaczepia się o: wejście
- **PROZNIA** tura 1, pytanie 3: „Sam, czemu zostawiłeś Verze pustą teczkę?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 3: „Sam, czemu zostawiłeś Verze pustą teczkę?” używa „ver”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Elias, po co dziś przyszedłeś?” -> odpowiedź „Zapytać, czy Sam się odezwał. I zdążyć, zanim ktoś zamknie księgę. Księgi się zamyka, kied…”
- **LUZNE** tura 2, pytanie 1: „Elias, po co dziś przyszedłeś?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 2, pytanie 2: pytanie „Sam, co będziesz robił po odejściu?” -> odpowiedź „Kolega z portu dzwoni dziś na biuro o piątej trzydzieści po referencje. Jeśli ktoś potwier…”
- **PROZNIA** tura 2, pytanie 2: „Sam, co będziesz robił po odejściu?” nie zaczepia się o: odpowiedź 1.2; odpowiedź 1.3; odpowiedź 1.4
- **OBOK** tura 2, pytanie 3: pytanie „Victor, co się stanie, jeśli kopia nie zostanie dołączona?” -> odpowiedź „Protokół będzie niepełny. Referencje wątpliwe. Kto to podpisze? Nie ja. Wolę komplet, bo k…”
- **WIEDZA** tura 2, pytanie 4: „Sam, czy kopia decyzji powinna trafić do Urzędu?” używa „urz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Sam, jak się czujesz, kiedy odchodzisz?” -> odpowiedź „Lekko, z jednym wyjątkiem. Zostawiam komuś ciężką rzecz i nie zapytałem, czy chce.…”
- **PROZNIA** tura 3, pytanie 1: „Sam, jak się czujesz, kiedy odchodzisz?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Elias, co powiesz Samowi na pożegnanie?” -> odpowiedź „Że dziękuję za oprawkę. I że oddawałem pieniądze ludziom, którzy nie prosili. Zacząłem od …”
- **LUZNE** tura 3, pytanie 2: „Elias, co powiesz Samowi na pożegnanie?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **PROZNIA** tura 3, pytanie 3: „Sam, kto usiądzie tu po mnie?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **PROZNIA** tura 3, pytanie 4: „Victor, czemu pytasz o referencje Sama, skoro to nie Twoja sprawa?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 4: „Victor, czemu pytasz o referencje Sama, skoro to nie Twoja sprawa?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć

## d25_ksiega (dzień 25, Elias Wren, drzewo)

- **OBOK** 1: „Co to za linia?” -> „Zero osiem zero dziewięć. Wąska, pusta, z miejscem na imię. Pan Holt mówił, że czeka na na…”
- **LUZNE** 1.1: dopytanie „W rogu ktoś dopisał tuszem „0913”. Co to?” nie zaczepia się o: „…Pan Holt mówił, że czeka na następnego. Dziś pierwszy raz widzę ją z bliska.”
- **WIEDZA** 1.1: „W rogu ktoś dopisał tuszem „0913”. Co to?” używa „0913”, a gracz nie musiał tego usłyszeć na tej ścieżce
- **OBOK** 1.2: „Co się stanie, jeśli wpiszę tu swoje imię?” -> „Będzie zapisane, że ktoś tu siedział. Pani Bell mówi, że wtedy czeka bilet. Ale ktoś musi …”
- **LUZNE** 1.2: dopytanie „Co się stanie, jeśli wpiszę tu swoje imię?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Pan Holt mówił, że czeka na następnego. Dziś pierwszy raz widzę ją z bliska.”
- **OBOK** 2: „A jeśli wyrwę tę stronę, jak Sam?” -> „To nikt już nikogo nie wpisze. Ani ciebie, ani następnego. Kartka zniknie ze słupa. Nie wi…”
- **OBOK** 4: „Czemu zawsze pytasz o imię?” -> „Bo oprawkę żony znalazł mi człowiek, którego nie zapytałem, jak się nazywa. Przez dwa lata…”
- **PLEC** 4: odpowiedź: „pana”
- **OBOK** 4.1: „Po co ci moje imię, skoro zaraz wyjdziesz?” -> „Żeby jutro powiedzieć „dobry wieczór” komuś, a nie szybie.…”
- **LUZNE** 4.1: dopytanie „Po co ci moje imię, skoro zaraz wyjdziesz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Przez dwa lata mówiłem do niego proszę pana. Potem zniknął i nie miałem nawet kogo wołać.”
- **OBOK** 5: „Czemu to ma być moja decyzja?” -> „Bo po tej stronie szyby siedzi jedna osoba. Ja mogę tylko stać i trzymać numerek. Przykro …”
