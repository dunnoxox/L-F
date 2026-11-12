# STRATEGIA GRY: LOST & FRAUD

Stan na 12.11.2026. Podstawa: ręczne przejście dnia 1 w przeglądarce (klik po kliku, ze zrzutami), zapis przejścia z `qa/fabula.js`, czytanie `game/game.js` i `game/data.js`, CD2 (`prompty/CD2_master_prompt.md`, `prompty/CD2_analiza_gier.md`). Wykonanie: `docs/KOLEJKA_ITERACJI.md`.

## 1. Diagnoza w jednym zdaniu

**Gra ma dwie połowy, które się nie znają.** Rozmowa niczego nie daje magazynowi, a magazyn niczego nie sprawdza z rozmowy. Dlatego rozmowę da się przeklikać, a szukanie nie jest szukaniem.

Dowody z grania i z kodu:

- W magazynie na górze wisi pełny opis rzeczy (`g.rzecz`: „Lewa skórzana rękawiczka, zszyta białą nitką przy kciuku”), niezależnie od tego, o co zapytałem. W skrzyni jest dokładnie jedna taka rzecz. Trafiłem w 3 sekundy, nie pamiętając ani słowa Thomasa.
- Pomyłka kosztuje jedną kratkę cierpliwości z pięciu. Po dwóch pomyłkach gra sama podświetla skrzynię, po czterech rzecz. Przegrać się nie da.
- Kłamstwo ogłasza silnik: mignięcie lampy, sting, bicie serca przy odpowiedzi z miną `klamie`. Gracz niczego nie wykrywa, dostaje komunikat. To jest „paragon meter” dla kłamstw, czyli to, czego CD2 zakazuje (prawo 4).
- Kłamie 15 z 55 gości (27%), ale kłamstwo widać tylko wtedy, gdy trafi się w to jedno pytanie z dziewięciu.
- Teksty mają już w sobie znaki rozpoznawcze, których gra nie używa: Dana mówi o czerwonej, krzywej wskazówce i naklejce „Mama”, Thomas o białej i czarnej nitce, Ines o odłamanym dziobie kaczki. **Tropy są napisane. Nie są podłączone.**

## 2. Tezy Tommy'ego i co z nimi robię

| Teza | Werdykt | Dlaczego (dowód) |
|---|---|---|
| „Akcja dowozi, fabuła nie” | **Podtrzymuję w połowie** | Magazyn jest przyjemny przez grafikę, zawieszki i dźwięk, nie przez decyzję. Jako mechanika jest pusty (patrz wyżej). Dowozi obietnica akcji, nie akcja. To da się naprawić szybciej niż fabułę. |
| „Trzy opcje dialogu są bez sensu” | **Podtrzymuję** | Rosa, tura 2: pytanie „Czemu wypłatę odbiera Iris?” pojawia się, zanim ktokolwiek wymienił Iris. Pytania to stała lista przesłuchania, nie reakcja. |
| „Dialog ma być w pełni rozgałęziony” | **Podważam** | Dziś jest 588 pytań i 175 decyzji. Pełne drzewa mnożą to razy 2 do 3 i każda gałąź musi przejść spójność. To miesiąc pisania i największe źródło nowych błędów. Wystarczy „węzeł”: tematy odblokowane tym, co gość powiedział, i limit pytań. Ważniejsze od liczby gałęzi jest to, żeby odpowiedź była do czegoś potrzebna. |
| „Teksty brzmią jak tłumaczenie” | **Podtrzymuję częściowo** | Thomas i Dana brzmią dobrze („Nowy nie będzie mnie lubił”). Słabe są pytania gracza (urzędowe) i sceny wieloosobowe. To robi wątek dialogów. |
| „Koniec dnia to ściana kartek” | **Podtrzymuję** | W dniu 1 są 2 kartki i jest dobrze. Bot QA notował 9 listów w dniu 24. Limit 6 to wciąż za dużo. |
| „10 dni, ale dobrych” (decyzja z 12.11) | **Podtrzymuję, z jednym warunkiem** | Zgadza się z CD2 (prawo 7: krótko i gęsto) i kasuje dołek dni 13 do 19 z przeglądu fabuły. Warunek: dziś dzień ma 2 do 3 wizyt po ok. 4 minuty, więc 10 takich dni to ok. 1,5 godziny. Steam zwraca pieniądze za grę z czasem poniżej 2 godzin, czyli gracz mógłby ją skończyć i oddać. Dlatego 10 dni po 3 do 4 wizyty (35 z 55 istniejących, najlepsze), razem ok. 3 godzin, plus 9 zakończeń jako powód do drugiego przejścia. |
| „Trzeba to zrobić od nowa” | **Odrzucam** | To byłaby trzecia przebudowa. Grafika, dźwięk, silnik dnia, 55 gości i zakończenia zostają. Zmieniamy jeden szew: rozmowa → magazyn. |
| „Miałeś być samograjem” | **Zarzut słuszny** | Noc poszła w assety i balans, bo nikt nie zapisał, czym jest „lepiej”. Od teraz każda iteracja ma kryterium sprawdzane graniem, a nie listą zmian. |

## 3. Rdzeń zabawy

**Zdanie rdzenia:** ktoś opisuje rzecz, której nie widzi, a ja mam ją przed sobą razem z trzema podobnymi. To, co powiedział, jest moim jedynym narzędziem.

- **Minuta 1:** ktoś puka, odsuwam zasłonkę, słyszę jedno zdanie i już wiem, że w skrzyni leżą trzy rękawiczki. Hak: „która?”.
- **Minuta 10:** wiem, że pytań jest mało, więc każde to wybór: pytam o nitkę (pewne trafienie) czy o żonę (historia, sekret)? Pierwszy raz wydaję złą rzecz i widzę skutek.
- **Minuta 60:** rozpoznaję kłamcę po tym, że opisuje rzecz tak, jak widać ją z zewnątrz, a nie zna tego, co w środku. Nikt mi tego nie mówi. Mam też ludzi, którym wierzę wbrew dowodom, i pieniądze, których mi brakuje.

To jest to samo, co robi Papers, Please (porównanie słów z papierem), ale naszym materiałem: słowa kontra przedmiot. Hidden Folks daje zasadę „wskazówka z tekstu, nie z odgadywania”, Unpacking „rzecz opowiada człowieka”, Obra Dinn „nie potwierdzaj od razu, niech gracz ryzykuje”.

## 4. Jak dialog wpływa na magazyn

1. **Tropy.** Każda rzecz gościa ma 3 do 4 cechy (kolor, rozmiar, znak szczególny, zawartość). Cechę znam dopiero wtedy, gdy gość ją wypowie. W magazynie zamiast gotowego opisu widzę kartkę „Z rozmowy” z tym, co usłyszałem, i pustymi polami na resztę.
2. **Bliźniaki.** Obok właściwej rzeczy leżą 2 do 3 podobne, różne jedną cechą. Kliknięcie rzeczy to oględziny (karta z cechami), nie wybór. Wybór to położenie na ladzie.
3. **Koszt wyboru.** Pytań jest mniej niż tematów. Dopytanie przez szybę kosztuje cierpliwość gościa. Zła rzecz na ladzie kosztuje więcej. Gość, który wyjdzie, to brak 40 $.
4. **Kłamstwo wychodzi z rozmowy i z rzeczy.** Bez stingu. Oszust podaje cechy, które nie zgadzają się z żadną rzeczą, albo zna tylko wierzch. Sekret znaleziony przed otwarciem daje pytanie, na które uczciwy odpowie, a kłamca nie.
5. **Pomyłka zostaje w świecie.** Wydana zła rzecz wraca echem (prawdziwy właściciel przy okienku), a nie komunikatem „źle”.

## 5. Pętla dnia (cel: wizyta 3 do 4 minut)

Dostawa i jedno zajrzenie do środka (sekret) → pukanie → rozmowa (tropy albo historia) → magazyn (oględziny bliźniaków) → lada (gest decyzji, pieniądze) → reakcja → następny gość → świt (najwyżej 3 kartki, po jednej) → sobota (czynsz).

Każdy krok musi odpowiadać na pytanie z poprzedniego. Krok, który tego nie robi, wypada.

## 6. Dziesięć dni: krzywa napięcia i co zostaje z 25

Dwa tygodnie po 5 dni, sobota z czynszem po dniu 5, finał po dniu 10. Trzy wątki zostają (Zaginiona, Skrytka, Poprzednik), zwrot z fotelem też, tylko wcześniej. W każdym dniu jedna nowa reguła szukania i jeden moment „na głos”.

| Dzień | Skąd (stare dni) | Reguła szukania | Co się dzieje |
|---|---|---|---|
| 1 | 1, część 2 | Bliźniaki, tropy z rozmowy | Thomas i kwit S.H., koperta Rosy (pierwsza pokusa), Ines i ogłoszenie |
| 2 | 2, 3 | Trzy bliźniaki, pytanie-pułapka, które nic nie daje | Jonah z pierścionkiem, Hana (pierwsze kłamstwo do wykrycia), Dana |
| 3 | 3, 4 | Dwoje ludzi, jedna rzecz | Evan i Lena o telefon Mai, Iris przedstawia się jako władza |
| 4 | 5, 6 | Opis, który nie pasuje do żadnej rzeczy | Noah z policji, Victor, Gus z dwoma dowodami |
| 5 | 7, 8, 9 | Bałagan po burzy, rzeczy w złych skrzyniach | Evan wraca z pieniędzmi, żetony Skrytki, Stahl. Sobota: czynsz i pierwszy audyt |
| 6 | 10, 11, 12 | Rzecz bez zawieszki, poza księgą | Vera i szafka Sama, Maya żyje i staje przy szybie |
| 7 | 15, 16, 18 | Kłamie ktoś, kogo lubię | Sam Holt przy okienku, Maya z Leną, Iris z Norą |
| 8 | 20, 21, 22 | Bez nowej reguły | Zwrot: strona 41 to moja strona, pytanie o imię. Stahl po Mayę |
| 9 | 23, 24 | Wszystkie reguły naraz, najdłuższa noc | Iris płaci albo traci, Vera mówi, kto wybiera dyżurnych, Thomas wraca |
| 10 | 25 | Jedna rzecz: księga | Sam, Elias, gest na księdze, finał i epilogi |

Z 25 dni wypadają w całości stare dni 13, 14, 17, 19 i połowa gości pobocznych (zostają ci, którzy niosą wątek albo mają najlepszą scenę). Zakończeń zostaje 9, bo zależą od decyzji, nie od liczby dni. Zwrot ma zachować trzy ślady na różnych nośnikach (CD2 3.7): kwit w rękawiczce w dniu 1, ogłoszenie Ines, szafka u Very.

Ryzyko techniczne: silnik ma numery dni wpisane na sztywno (dzień 20 pyta o imię, `did(15,...)`, `d25_ksiega`, burze, kartki o świcie). Kondensacja to tabela „stary dzień → nowy dzień” w jednym miejscu i przepięcie warunków z numerów dni na identyfikatory wizyt. To osobna iteracja (I4), po tym, jak rdzeń zadziała na dniach 1 do 3.

## 7. Co wycinamy, bo przeszkadza

- Pełny opis rzeczy nad magazynem i samopodświetlanie właściwej rzeczy (poza samouczkiem w dniu 1).
- Sting i mignięcie lampy na kłamstwie.
- Sztywne trzy tury z dziewięcioma pytaniami (robi wątek dialogów).
- Ściana kartek o świcie (robi wątek dialogów).
- Liczniki „Urząd 7/10, Ludzie 5/10” w sobotę. To miernik moralny. Zostają skutki: kto przyszedł, kto nie, co napisał zarządca.
- Stare dni 13, 14, 17, 19 i goście poboczni bez wątku (gra ma 10 dni).
- Szlifowanie drugiego tygodnia, dopóki dni 1 do 5 nie są dobre.
- Nowe grafiki i dźwięki, o ile nie wymaga ich iteracja z kolejki.

## 8. Podział z wątkiem dialogów (żeby się nie dublować)

- Wątek dialogów: treść rozmów, silnik pytań (`questions`, `qlist`, `say`), świt (`evening`), pliki `koncept/okienko_rozmowy_v3_*.md`, `game/build_data.py`.
- Ten wątek: magazyn (`pile`), oględziny, tropy (`game/tropy.js`), koszt pomyłki, krzywa reguł.
- Styk: `game/tropy.js` rozpoznaje tropy po słowach, które gość faktycznie wypowiedział (wyrażenia regularne na tekście kwestii). Przepisanie dialogu nie psuje tropów, o ile znak szczególny rzeczy dalej pada w rozmowie. **Prośba do wątku dialogów: każda rozmowa musi dawać się zapytać o wygląd rzeczy i o znak szczególny.**
