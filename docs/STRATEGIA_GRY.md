# STRATEGIA GRY: LOST & FRAUD

Stan na 12.11.2026. Podstawa: ręczne przejście dnia 1 w przeglądarce (klik po kliku, ze zrzutami), zapis pełnych 25 dni z `qa/fabula.js`, czytanie `game/game.js` i `game/data.js`, CD2 (`prompty/CD2_master_prompt.md`, `prompty/CD2_analiza_gier.md`). Wykonanie: `docs/KOLEJKA_ITERACJI.md`.

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
| „25 dni” | **Podtrzymuję liczbę, podważam kolejność pracy** | 55 wizyt po ok. 4 minuty to 4 do 5 godzin, uczciwie za 9,99 $ (Unpacking: 3 do 4 h za 20 $). Błąd był inny: szlifowano 25 dni naraz, zanim pierwszy tydzień był dobry. Dni 6 do 25 zamrażam, dopóki dni 1 do 5 nie przejdą testu „chcę zagrać jutro”. Tydzień 1 to zarazem demo na Steam. |
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

## 6. Krzywa napięcia 25 dni (jedna nowa reguła na tydzień)

| Dni | Reguła szukania | Napięcie fabuły |
|---|---|---|
| 1 do 5 | Bliźniaki 2, potem 3. Tropy z rozmowy. Dzień 3: dwoje ludzi chce jednej rzeczy. Dzień 5: pierwszy, którego opis nie pasuje do niczego. | Strona 41, Maya, koperta Rosy. Koniec tygodnia: pierwszy czynsz. |
| 6 do 10 | Bałagan: po burzy rzeczy leżą w złych skrzyniach, hałda rośnie. Oszust zna wierzch, nie zna środka. | Skrytka się odsłania. Złodziej zaczyna płacić. |
| 11 do 15 | Rzeczy poza księgą: nie ma zawieszki, zostaje tylko rozmowa. | Maya przy okienku, Sam w dniu 15. |
| 16 do 20 | Kłamią ci, których lubię. Tropy przeczą sympatii. | Zwrot z fotelem w dniu 20. |
| 21 do 25 | Bez nowych reguł. Wypłaty. | Odsłony i finał. |

Dołek z przeglądu fabuły (dni 13 do 19) zasypuje nowa reguła szukania co tydzień, nie nowy tekst.

## 7. Co wycinamy, bo przeszkadza

- Pełny opis rzeczy nad magazynem i samopodświetlanie właściwej rzeczy (poza samouczkiem w dniu 1).
- Sting i mignięcie lampy na kłamstwie.
- Sztywne trzy tury z dziewięcioma pytaniami (robi wątek dialogów).
- Ściana kartek o świcie (robi wątek dialogów).
- Liczniki „Urząd 7/10, Ludzie 5/10” w sobotę. To miernik moralny. Zostają skutki: kto przyszedł, kto nie, co napisał zarządca.
- Dalsze szlifowanie dni 6 do 25, dopóki tydzień 1 nie jest dobry.
- Nowe grafiki i dźwięki, o ile nie wymaga ich iteracja z kolejki.

## 8. Podział z wątkiem dialogów (żeby się nie dublować)

- Wątek dialogów: treść rozmów, silnik pytań (`questions`, `qlist`, `say`), świt (`evening`), pliki `koncept/okienko_rozmowy_v3_*.md`, `game/build_data.py`.
- Ten wątek: magazyn (`pile`), oględziny, tropy (`game/tropy.js`), koszt pomyłki, krzywa reguł.
- Styk: `game/tropy.js` rozpoznaje tropy po słowach, które gość faktycznie wypowiedział (wyrażenia regularne na tekście kwestii). Przepisanie dialogu nie psuje tropów, o ile znak szczególny rzeczy dalej pada w rozmowie. **Prośba do wątku dialogów: każda rozmowa musi dawać się zapytać o wygląd rzeczy i o znak szczególny.**
