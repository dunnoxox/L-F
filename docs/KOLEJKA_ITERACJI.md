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
