# KOLEJKA ITERACJI

Wykonanie `docs/STRATEGIA_GRY.md`. Zasada: jedna mała zmiana, przejście jako gracz (ręcznie, w przeglądarce), szczera ocena, poprawka, publikacja pod stałym linkiem. Dziennik wyników na dole.

| Nr | Cel | Zmiana | Kryterium (sprawdzane graniem) | Co zobaczy Tommy |
|---|---|---|---|---|
| I1 | Rozmowa ma być potrzebna do szukania | Dni 1 do 3: kartka „Z rozmowy” zamiast gotowego opisu, 2 do 3 bliźniaki przy każdej rzeczy, oględziny po kliknięciu, dopytanie przez szybę za kratkę cierpliwości | Bez pytania o wygląd nie umiem wskazać rzeczy inaczej niż zgadując. Z pytaniem trafiam i czuję, że to moja zasługa. | W skrzyni trzy rękawiczki. Trzeba pamiętać, co powiedział Thomas. |
| I2 | Kłamstwo wykrywa gracz, nie silnik | Usunięty sting i mignięcie przy kłamstwie. Cechy, które gość podał, stoją obok cech rzeczy na ladzie. Zła rzecz wydana wraca echem. | Hana i Evan: umiem powiedzieć, co się nie zgadza, wskazując konkretną cechę. | Na ladzie widać „mówił: … / jest: …”. Nikt nie podpowiada. |
| I3 | Wybór ma koszt | Zegar nocy: oględziny i dopytania zjadają minuty, trzeci gość wchodzi tylko, gdy zdążysz. Wyjście gościa to brak 40 $. | W sobotę brakuje mi do czynszu, jeśli grałem niedbale. | Licznik „do soboty” zaczyna boleć. |
| I4 | Gra ma 10 dni | Tabela „stary dzień → nowy dzień”, warunki silnika przepięte z numerów dni na wizyty, 3 do 4 wizyty dziennie, zwrot w dniu 8, finał w dniu 10 | Przechodzę 10 dni do zakończenia bez urwanego wątku i bez tekstu o czymś, czego nie widziałem | Gra kończy się po 10 dniach, ok. 3 godzin |
| I5 | Tydzień 1 w całości na nowym rdzeniu | Tropy i bliźniaki dla dni 4 i 5, opis niepasujący do niczego, bałagan po burzy | Dni 1 do 5 jednym ciągiem bez nudy w żadnej wizycie | Pierwszy tydzień jako demo |
| I6 | Sobota bez miernika | Zamiast „Urząd x/10” skutki: kto przyszedł, co napisał zarządca | Nie wiem, „ile mam punktów”, wiem, kto mi ufa | Sobota jako kwit i dwa zdania |
| I7 | Tydzień 2 | Tropy dla dni 6 do 10, rzeczy poza księgą, kłamstwa bliskich | Pełne przejście z notatką, w której wizycie chciałem przestać | Cała gra na nowym rdzeniu |

## Dziennik

### I1 (12.11): rozmowa daje tropy do magazynu, dni 1 do 3

Zmiana: `game/tropy.js` (7 gości), kartka „Z rozmowy”, 2 bliźniaki przy każdej rzeczy, oględziny po kliknięciu, dopytanie przez szybę za kratkę cierpliwości, pomyłka na ladzie: 2 kratki i 15 $.

Granie: Thomas ręcznie, dwa razy. Raz pytałem tylko o historię i zostałem z dwiema rękawiczkami z białą nitką (duża i mała): pierwszy prawdziwy wybór w tej grze, zgadywać czy dopytać. Dni 1 do 3 przeszedłem też uważnym graczem: 7 z 7 trafień, 0 błędów JS.

Ocena szczera:
- Działa: bez rozmowy nie da się trafić inaczej niż zgadując, a zgadywanie kosztuje.
- Pierwsza wersja miała dziurę: trzy rzeczy i pięć kratek, więc dało się brać po kolei. Stąd kara 15 $ za pomyłkę.
- Za łatwe dla uważnego: pytanie „Jak wygląda?” załatwia sprawę u 5 z 7 gości. Na dni 1 do 3 to dobre (nauka), od dnia 4 cechy muszą być rozrzucone po różnych tematach, tak jak już jest u Dany (wskazówka w jednym pytaniu, naklejka w drugim).
- Bliźniaki różnią się tylko tekstem na karcie oględzin, obrazek jest ten sam. Na razie wystarcza. Jeśli po I2 dalej będzie czuć „czytanie tabelki”, potrzebne będą warianty grafik.
- Kłamstwo dalej ogłasza sting. To I2.

### I2 (12.11): kłamstwo wykrywa gracz, uważny gracz ma trudniej

Zmiana: usunięty sting, mignięcie lampy i bicie serca przy kłamstwie (zostaje mina na portrecie). Czwarta cecha z zawieszki (kiedy przyjęto, gdzie znaleziono) i trzeci bliźniak, który wygląda identycznie i różni się tylko zawieszką. W oględzinach linia „Rzuca się w oczy”: każda rzecz, także bliźniak, ma jeden ślad cudzego życia. U Hany tym śladem jest numer inwentarzowy na naklejce, czyli dowód przeciw jej „oczywiście, że moje”. Pierwsza pomyłka w grze jest darmowa i tłumaczy karę. Scalone z rozmową-drzewem z wątku dialogów (5 pytań na gościa).

Granie: Thomas ręcznie na scalonej wersji. Dni 1 do 3 uważnym graczem: 7 z 7, ale przy 5 gościach zostawały dwie pasujące rzeczy i trzeba było dopytać albo wywnioskować. Niedbały gracz (pyta tylko o historię, bierze pierwszą z brzegu): po dwóch dniach minus 140 $, trzech gości wyszło.

Ocena szczera:
- Najlepszy moment: dwie identyczne rękawiczki, jedna „przyjęta w piątek” z napisem „rekwizytornia”, druga ze starszym szwem pod białą nicią. Da się to rozstrzygnąć głową, bez płacenia cierpliwością. Tego w grze nie było.
- Budżet 5 pytań z wątku dialogów i tropy dobrze się zazębiają: dopytanie o Sama zjada pytanie, którego potem brakuje na zawieszkę.
- Słabe: Hana opisuje futerał poprawnie, więc jej kłamstwo wychodzi dopiero z linii „Rzuca się w oczy”. To czytanie, nie dedukcja. Prawdziwy test przyjdzie z gościem, którego opis nie pasuje do żadnej rzeczy (plan: dzień 4).
- Niedbały gracz jest karany mocno (minus 45 $ na wizycie wartej 40 $). Zostawiam, bo samouczek mówi wprost, co robić, a pierwsza pomyłka jest darmowa. Do sprawdzenia w I3 razem z czynszem.
- Kary za wyjście gościa i pomyłki jeszcze nie spotykają się z sobotą. To I3.

### I3 (12.11): zegar nocy i ludzie z kolejki

Zmiana: zegar w rogu wreszcie coś znaczy. Pytanie 10 minut, oględziny 3, dopytanie przez szybę 10, pomyłka 15. Po gościach z imieniem, jeśli do szóstej zostało co najmniej 45 minut, puka ktoś z kolejki (od dnia 2, najwyżej trzech na noc): jedno zdanie z dwiema cechami, trzecią trzeba dopytać albo zaryzykować, 20 $ za znalezienie. Osiem typów rzeczy losowanych z tabeli `TLUM` w `game/tropy.js`, twarze z istniejących portretów kolejki. Kolejność zmieniona względem pierwotnej kolejki: „trzeci gość tylko, gdy zdążysz” groził urwaniem fabuły, więc czas decyduje o tłumie, nie o ludziach z imieniem.

Granie: dzień 2 z dwoma pytaniami na gościa: po trzech wizytach była 3:34 i zmieściło się trzech ludzi z kolejki (plus 60 $). Sprawa z kluczami ręcznie: dwie pasujące sztuki, kotwica albo piłka, 20 sekund.

Ocena szczera:
- To jest ta „akcja z hałdy”, o którą chodziło w pierwszej wersji gry, i wreszcie ma powód: czynsz.
- Znalazłem i usunąłem własny błąd: zapis gry w środku dnia psuł wznowienie (rzecz wydana, dzień od nowa). Zapis zostaje tylko na początku dnia, jak było.
- Słabe: sprawa z kolejki to dziś rzut monetą albo zapłata cierpliwością. Brakuje trzeciej drogi, czyli wnioskowania (np. zdanie gościa zdradza coś pośrednio). Do poprawy przy I5.
- Słabe: obrazek kluczy pokazuje trzy sztuki, a karta mówi „dwa klucze”. Cechy liczbowe trzeba wyrzucić z tabeli albo dorobić warianty grafik.
- Niesprawdzone graniem: cały tydzień z sobotą. Wyliczenie: uważny gracz ma ok. 440 $ z wizyt i do 60 $ z kolejki na noc, czynsz z ratą to 310 $. Trzeba to zagrać po I4, bo liczba wizyt się zmieni.

### I3b: uwagi Tommy'ego z grania (12.11 wieczór)

Trzy uwagi, każda sprawdzona graniem dnia 1, zanim cokolwiek zmieniłem.

| Uwaga | Werdykt | Co zrobione |
|---|---|---|
| „Odsuń zasłonkę / przez szybę, a tego nie widać” | Słuszna. Zasłonka była niewidzialnym polem kliknięcia, a w magazynie tekst kazał „dopytać przez szybę”, choć stoimy tyłem do okna. | Zasłonka jest teraz rzeczą: płótno w oknie z zawieszką, drga przy pukaniu i odjeżdża w bok. W magazynie na kartce jest twarz gościa „czeka przy okienku”, a przycisk brzmi „zapytaj gościa”. Krok 6 mówi o polach po prawej, nie o szybie. |
| „Klik w rzecz, żeby się czegoś dowiedzieć, jest nieczytelny” | Słuszna. Przy dostawie szukało się niewidocznego punktu na obrazku obok pustej kartki. | Lupa ciepło-zimno: kółko chodzi za kursorem i świeci mocniej przy śladzie. Kartka od początku mówi, co robić. Podpowiedź po 3,5 s w dniu 1 (było 9 s). W magazynie każda rzecz ma napis „obejrzyj”. |
| „Wytłumacz, czemu tyle wypytujemy, a gość powinien umieć powiedzieć mocne nie” | Słuszna w obu częściach. Druga jest lepsza, niż brzmi: odmowa daje pytaniom cenę. | Przy oknie wisi regulamin (trzy paragrafy: nie pokazuj przed wydaniem, dostaje ten, kto opisze, złe wydanie z pensji). Gość raz na wizytę odmawia przy drugim niewygodnym pytaniu, które nie dotyczy rzeczy. Można nacisnąć: odpowiedź pada, ale w magazynie jest o kratkę cierpliwości mniej. |

Granie: Thomas na pytanie „Po co wieczorem do Doków?” mówi „Nie. Stoję tu po swoją rzecz, nie na przesłuchanie.”, po naciśnięciu opowiada o córce i rosole. Działa lepiej niż sama odpowiedź, bo trzeba było o nią zawalczyć.

Ocena szczera:
- Pierwsza wersja miała regułę ogólną z trzema zdaniami wspólnymi dla wszystkich. Wycofałem ją tego samego wieczoru: w próbie dnia 9 Sam Holt odpowiedział ogólnym „Nie. Tego nie powiem.” na pytanie o wyrwaną stronę 41, czyli na pytanie, które niesie fabułę. Odmowa działa teraz tylko tam, gdzie pytanie ma pole `odmowa` napisane głosem postaci. Wątek dialogów dopisał je do 19 scen z dni 1-10.
- Lupa nie działa na dotyk bez przeciągania palcem. Na telefonie zostaje podpowiedź kropkowanym kółkiem po dwóch pudłach.
- Regulamin widać w dniach 1-3, potem znika. Nie sprawdziłem, czy ktoś go w ogóle czyta przy pierwszej rozmowie.


### I4: gra w 10 dni, na razie jako próba (12.11 wieczór)

Stan: silnik gotowy i zagrany do zakończenia, ale wyłączony domyślnie. Włącza się w Ustawieniach, zakładka Dane, „Próba: gra w 10 dni”. Czeka na decyzję Tommy'ego z karty (dni 1-8 plus finał, pełne zagęszczenie albo dni 1-10 bez zwrotu).

Zmiana: plan w `window.PLAN10` (`game/tropy.js`). Dni 1-8 bez zmian. Dzień 9: Iris z piórnikiem, Vera z pudełkiem Sama, Sam Holt. Dzień 10: Elias z Samem i Victorem (tu pada pytanie o imię), Sam po etui, księga na linii 0809. Warunki fabularne w silniku liczą się teraz po dniu, z którego scena pochodzi, więc przeniesiona scena dalej je spełnia. Sobota wypada po dniu 5 i 10, potem zakończenie. W dniach 9-10 nie ma ludzi z kolejki, żeby nie rozmywać finału.

Granie (dni 9-10 od zapisu, do karty zakończenia): przechodzi bez błędów, kończy „Rotacją” z imieniem w księdze.

Ocena szczera, czyli dlaczego to jeszcze nie jest wersja dla gracza:
- Elias wchodzi w dniu 10 jako ktoś nowy, a scena zakłada, że znamy go od dawna („uzgodniliśmy to w zeszłym tygodniu”, żart z oprawką). W dniach 1-8 go nie ma. Trzeba go wprowadzić wcześniej albo przepisać wejście.
- Dzień 10 to trzy sceny pod rząd z tymi samymi trzema mężczyznami i papierami (komplet zeznań, kopia decyzji, protokół). Mechanicznie się zamyka, dramatycznie to gruda. Finał potrzebuje jednej sceny z papierami, nie dwóch.
- Vera w dniu 9 mówi, że Sam „dalej się nie zgłasza”, a Sam puka godzinę później. Albo to jest zamierzony zwrot i trzeba go zagrać (Vera wraca z nim), albo zgrzyt.
- Epilog mówi o poniedziałku 13.09 i zamyka wątki Mai i Iris, które w 10 dniach nie zdążyły się rozegrać. Daty i dwa akapity do przepisania.
- Zakończenie „Odebrany” wymagało trzech notatek S.H. i wątku skrytki. W próbie wystarczą dwie notatki i ugoda z Samem. To moja decyzja robocza, nie fabularna.
- Nagłówek świtu pokazuje numer dnia. To stary błąd wbrew zasadzie tekstu, nie z tej iteracji.

Wniosek: opcja „dni 1-8 plus finał” jest wykonalna bez pisania gry od nowa, ale wymaga czterech poprawek treści wyżej. To robota wątku dialogów po decyzji.


### I5: dni 4-5 na nowym rdzeniu (12.11 wieczór)

Zmiana: tropy dla Iris (paczka), Noaha (notes), Victora (teczka) i Gusa (portfel). Trzy nowe rzeczy w mechanice:
- **Liczba słownie.** Victor mówi „numer czterdzieści siedem”, w skrzyni leżą teczki V.C. 47, V.C. 74 i W.C. 47. Pasuje do postaci: pedant sprawdza, czy ty też nim jesteś.
- **Opis, który nie pasuje do żadnej rzeczy.** Gus mówi, że w portfelu jest prawo jazdy, 20 $ i zdjęcie córki. Portfel, który zgadza się z wyglądu, ma w środku dwa dowody i zwitek banknotów. Bliźniak, który zgadza się ze słowami, ma inne zapięcie i kształt. Kłamstwo wychodzi w magazynie, z rzeczy, a nie z dźwięku.
- **Oględziny w magazynie odkrywają sekret.** Kto obejrzy portfel Gusa, widzi 250 $ za zdjęciem i przy ladzie dostaje opcję „zatrzymaj 250 $”. Wcześniej ta opcja zależała od tego, czy przy dostawie akurat zajrzało się do tej jednej rzeczy.

Granie: dzień 5 ręcznie, trzy wizyty. Victor: cztery teczki, różnica w jednej cyfrze, znalezione po przeczytaniu kart. Gus: po wzięciu właściwego portfela lada mówi „w środku jest co innego, niż mówił gość” i jest pięć opcji, w tym dwie z kradzieżą.

Ocena szczera:
- Gus to pierwsza wizyta, w której szukanie zmienia decyzję. To jest to, czego brakowało: dylemat „ukraść czy nie” pojawia się, bo coś znalazłem, a nie dlatego, że gra dała przycisk.
- Iris i Noah to wciąż ten sam schemat co dni 1-3, tylko z inną rzeczą. Poprawne, bez nowej myśli. Iris zasługuje na więcej: jej paczka ma blankiet „bez wpisu”, który powinien wychodzić w oględzinach tak jak u Gusa.
- Komunikat o niezgodności pojawia się tylko, gdy gracz zapytał „Co w nim jest?”. Kto nie zapytał, dostaje opcję 250 $ bez zdania o kłamstwie. Uznaję to za uczciwe: nie słyszał kłamstwa, więc nie ma czego porównać.
- Klucze z kolejki: zamiast liczby kluczy (grafika pokazuje trzy) jest plakietka. Błąd z I3 naprawiony.
- Dalej brakuje wnioskowania u ludzi z kolejki. Nie ruszone.
- Cały tydzień z sobotą nadal niezagrany ręcznie.

Dopisek do I4 (ten sam wieczór): wątek dialogów przepisał plan na dni 8-10 (Vera z pudełkiem w dniu 8, Elias przy szybie w dniu 9 przed finałem, wyznanie Very w dniu 9, dzień 10 w dwóch scenach, epilog bez dat). To usuwa cztery braki z listy wyżej. Zagrałem dni 8-10 od zapisu do karty zakończenia na nowej treści: bez błędów, zakończenie „Rotacja”. Po mojej stronie poprawione: nagłówek świtu pokazuje datę zamiast numeru dnia, pasek nitek w 10 dniach nie pokazuje wątków Mai i Skrytki, które nie mają jak się rozegrać. Niesprawdzone: przejście dni 1-10 w całości jednym ciągiem.


### Pomiar: ekonomia tygodnia 1 (12.11 wieczór)

Przejście dni 1-5 z sobotą graczem bezbłędnym i uczciwym (pyta o wygląd i miejsce, zawsze bierze właściwą rzecz, zawsze „wydaj”, obsługuje wszystkich z kolejki). To górna granica, nie typowy gracz.

| Świt | pon. | wt. | śr. | czw. | pt. | po sobocie |
|---|---|---|---|---|---|---|
| Gotówka | 80 $ | 260 $ | 400 $ | 500 $ | 680 $ | 310 $ |

Skąd: 11 wizyt po 40 $ to 440 $, ludzie z kolejki dali 240 $ (po trzech na noc od wtorku). Sobota zabiera 370 $ (czynsz 150, rachunki 160, rata Marlowa 60).

Wniosek szczery: to za dużo. Bezbłędny uczciwy gracz kończy tydzień z 310 $ na plusie i nie ma żadnego powodu, żeby wziąć 250 $ od Gusa. Dylemat „ukraść czy nie”, o który Tommy prosił, nie ma podstawy w liczbach. Bez kolejki zostaje 70 $, czyli kolejka z I3 rozbroiła presję, którą sama miała tworzyć.

Czego nie wiem: ile zarabia zwykły gracz, który się myli (15 $ kary, gość wychodzi) i nie zdąża z kolejką. Bot tego nie powie.

Propozycja do I6 (sobota), do sprawdzenia graniem, nie do wprowadzenia na ślepo:
- człowiek z kolejki płaci 10 $ zamiast 20 $ (bezbłędny: plus 190 $),
- albo zostaje 20 $, ale kolejka wchodzi tylko wtedy, gdy rozmowy były krótkie (próg czasu 60 min zamiast 45), żeby dociekliwość naprawdę kosztowała pieniądze,
- cel: bezbłędny uczciwy kończy tydzień 1 w okolicy plus 100 $, typowy koło zera, tak żeby 250 $ Gusa było tygodniem spokoju.


### I6, krok 1: człowiek z kolejki płaci 10 $ (12.11 wieczór)

Zmiana: `TRT.tl_pay` 20 na 10. Nic więcej.

Pomiar tym samym bezbłędnym graczem: piątek o świcie 560 $, po sobocie 190 $ (było 310 $). Gracz dociekliwy, który zadaje wszystkie pytania, przy starej stawce miał 230 $, czyli dociekliwość kosztowała 80 $ na tydzień. Przy nowej różnica spada do ok. 40 $.

Ocena szczera:
- 190 $ nadwyżki u bezbłędnego to wciąż luz, ale 250 $ Gusa jest już większe niż cały zapas z tygodnia. Typowego gracza z dwiema pomyłkami i jednym gościem, który wyszedł, szacuję na 70-100 $. To szacunek, nie pomiar.
- Próg czasu dla kolejki sprawdziłem na liczbach i odrzuciłem: noc ma 370 minut, trzy wizyty zajmują 180-255, więc podniesienie progu z 45 do 70 minut zabiera najwyżej jedną osobę i tylko dociekliwemu. Za słaba dźwignia.
- Prawdziwa presja powinna przyjść z soboty tygodnia 2 (rachunki, rata) i z tego, że pomyłki bolą. To reszta I6, nieruszona.


### I7, część 1: dni 6-8 na nowym rdzeniu (12.11 wieczór)

Zmiana: tropy dla Leo (zegarek), Kita (słuchawki), Evana (etui), Leny z Norą (torba) i Bree (aparat). Ada zostaje po staremu, bo ona rzecz przynosi, a nie szuka.
- Leo: obejrzenie zegarka pokazuje dopisek „+ puszka” i odblokowuje decyzję „wpisz puszkę”. Wcześniej wymagało to zajrzenia akurat do tej rzeczy przy dostawie.
- Kit: taśma na lewej muszli, kot na prawej. Bliźniak ma odwrotnie.
- Evan mówi, że w etui jest jeden klucz. Są dwa, mały z numerem 14. Na zawieszce stoi numer linii, o który Evan pyta, więc gracz trzyma w ręku dokładnie tę wiedzę, której gość chce.
- Torba: miarka z literą „M”, bliźniak ma „W”.
- Bree mówi, że aparat nie ma znaków. Ma wydrapane R.O. i pełny film.

Granie: dni 6-8 przejściem kontrolnym od zapisu, bez błędów, wszystkie sześć sekretów odkrytych z oględzin w magazynie. Pełnej ręcznej rozmowy z każdym z pięciu gości nie robiłem.

Ocena szczera:
- Trzech kłamców (Gus, Evan, Bree) działa na tej samej sztuczce: słowa kontra rzecz. Za trzecim razem gracz będzie tego szukał z góry. To dobre jako nauka wzorca w tygodniu 1-2, ale finał potrzebuje kłamstwa innego rodzaju.
- Sekret z oględzin w magazynie sprawia, że zaglądanie przy dostawie traci sens: po co zgadywać jedną rzecz o 23:40, skoro i tak obejrzę ją przy gościu. Dostawa powinna dawać coś, czego magazyn nie da (np. czas na spokojne obejrzenie, zanim gość zacznie się niecierpliwić). Do przemyślenia, nie ruszone.
- Ada bez zmian to dziura w rytmie dnia 6: jedyna wizyta bez szukania.


### Przejście dni 1-10 jednym ciągiem w próbie 10 dni (12.11 wieczór)

Gracz bezbłędny i uczciwy, od nowej gry do karty zakończenia: 24 wizyty z imieniem, zero błędów w konsoli, pytanie o imię pada w dniu 10, księga zamyka grę.

| Świt | pon. | wt. | śr. | czw. | pt. | sob. 1 | pon. | wt. | śr. | czw. | pt. | sob. 2 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Gotówka | 80 | 230 | 340 | 410 | 560 | 190 | 300 | 410 | 560 | 720 | 800 | 410 |

Ocena szczera:
- Silnik i treść spinają się w całość. To pierwszy raz, kiedy gra w 10 dni przeszła od ogłoszenia na słupie do epilogu.
- Tydzień 2 jest finansowo jeszcze luźniejszy niż tydzień 1: bezbłędny gracz kończy z 410 $. W finale pieniądze nie grają żadnej roli. Jeśli dług u Marlowa ma coś znaczyć na końcu, sobota 2 musi boleć albo rata musi rosnąć.
- 24 wizyty to według moich czasów z grania ręcznego 3-4 minuty na wizytę, czyli 70-95 minut plus kolejka i świty. Blisko dwóch godzin, ale bez zapasu. Próg zwrotu Steam dalej jest ryzykiem.
- To przejście robił automat, który zawsze wybiera pierwszą decyzję. Nie mówi nic o tym, czy dni 8-10 trzymają napięcie. Tego nie umiem ocenić bez człowieka przy grze.
