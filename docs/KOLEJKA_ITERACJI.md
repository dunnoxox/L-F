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
