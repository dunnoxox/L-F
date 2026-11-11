# CD2: MASTER PROMPT PRODUKCJI „OKIENKO” (samowystarczalny)

Nadrzędny dokument dla każdego wątku pracującego nad grą (kod, dialogi, fabuła, grafika, dźwięk, UI, QA). Przy konflikcie z innym promptem wygrywa CD2, poza decyzjami wprost od Tommy'ego w wątku (te wygrywają nad CD2). Podstawa: analiza gier-wzorców w /mnt/project-files/prompty/CD2_analiza_gier.md (Papers, Please; Potion Craft/Permit; Hidden Folks; Unpacking; Moonlighter; Obra Dinn; Beholder; Not Tonight).

---

## 0. Po co to wszystko (cel w jednym akapicie)

Robimy grę, która ma się sprzedać za 9,99 USD na Steamie i rozejść wirusowo. Wygrywają ją trzy rzeczy: **CIEKAWOŚĆ** (gracz musi chcieć wiedzieć, co jest w następnej skrzynce, za następnym zdaniem, w następnym dniu), **LUDZIE** (kilkanaście postaci, które gracz zapamięta, polubi, znienawidzi, będzie o nich opowiadał) i **MOMENTY** (sceny tak mocne, że widz na streamie mówi „NIE WYDAWAJ JEJ TEGO!”). Mechanika jest tylko stołem, na którym leżą ludzie. Lekcja Not Tonight: mechanika bez ludzkich historii jest martwa. Lekcja Papers, Please: nudny opis + ludzie + dylemat z ceną w dolarach = hit.

**Test nadrzędny, stosowany do KAŻDEGO elementu (sceny, rzeczy, dźwięku, przycisku):** czy dzięki temu ktoś (a) chce zagrać jeszcze jedną wizytę, (b) powie o tym znajomemu, (c) skomentuje to na głos na streamie? Jeśli na żadne „tak”, to element jest wypełniaczem: wyrzuć albo przerób.

---

## 1. Kanon gry (streszczenie, żeby wątek nie musiał szukać)

- Gracz (bez określonej płci!) siedzi sam za okienkiem nocnego biura rzeczy znalezionych przy zajezdni tramwajowej. Miasto bez nazwy, waluta: dolary ($), linie 4, 6, 11. Rzeczy realne (legitymacja, plecak, telefon, klucze), bez fantastyki.
- Dzień: 23:40 dostawa skrzynek z linii → przed otwarciem można zajrzeć do jednej rzeczy (sekret) → 2 wizyty (rozmowa 3 tury, szukanie w magazynie, decyzja gestem: wydaj / odmów / zatrzymaj / zadzwoń lub wariant) → karta wieczorna. 5 dni + sobota rozliczenia (czynsz 150 $, ulepszenie biura). Razem 25 dni.
- Trzy wątki: **Zaginiona**, **Skrytka** (paszporty dla ludzi chcących zniknąć), **Poprzednik** (Sam Holt, wyrwana strona 41 księgi). 9 zakończeń + epilog gracza. Wszystko w: koncept/fabula_25_dni.md, koncept/okienko_obsada_i_kalendarz.md, prompty/dialogi_biblia_prompt.md. **Nie zmieniaj kanonu bez powodu, a jeśli zmieniasz, zapisz to w docs/DECISIONS.md.**
- Styl: „Linoryt sodowy”. Dźwięk: deszcz, lampa sodowa, tramwaj w oddali; muzyka z Suno/Udio (pliki w grze).
- To nie jest kopia Papers, Please: gracz nie sprawdza dokumentów wg reguł, tylko rozstrzyga, komu rzecz się należy, znając sekrety, których ludzie nie chcieli ujawnić.

---

## 2. Dziesięć praw CD2 (wszystko poniżej z nich wynika)

1. **Hak w 10 sekund.** Okienko, deszcz, ktoś pukający, jedna rzecz w ręku: zrozumiałe w klipie bez dźwięku.
2. **Pętla poniżej 60 sekund** z nagrodą (dźwięk + obraz + zdanie) przy każdym kroku.
3. **Garstka niezapomnianych ludzi na tle tłumu.** 12 postaci głównych musi dać się odróżnić po jednej kwestii, bez podpisu.
4. **Dylemat z ceną w dolarach i konsekwencją za 1-3 dni.** Żadnego miernika moralnego („dobry/zły”).
5. **Reguły rosną powoli:** jedna nowa zasada na dzień, nigdy ściana tekstu.
6. **Humor i czułość** w każdej wizycie (choć jedno zdanie, które śmieszy albo ściska za gardło), bo sama beznadzieja męczy.
7. **Krótko i gęsto:** 4-6 godzin, zero pustych przebiegów, każdy dzień ma coś, czego nie było wczoraj.
8. **Dźwięk to połowa gry:** każdy gest i każda rzecz ma własny dźwięk.
9. **Streamowalność:** każdy dzień ma co najmniej jeden moment, na który widz zareaguje na głos.
10. **Wypłata:** zakończenia (i drobne wypłaty po drodze) muszą spłacić ciekawość. Słabe zakończenie zabiło oceny Moonlightera i Obra Dinn.

---

## 3. FABUŁA

3.1. **Pytanie dramaturgiczne w każdej warstwie.** Gra: co się stało z Samem i stroną 41? Tydzień: kto kłamie, kto się boi? Wizyta: komu to się należy? Jeśli warstwa nie ma pytania, nie ma ciekawości.
3.2. **Reguła „dawka-odpowiedź”:** każde 2-3 dni pada odpowiedź na jedno stare pytanie i otwiera się nowe. Gracz nigdy nie czeka dłużej niż 3 dni na „aha!”.
3.3. **Rzeczy opowiadają (Unpacking):** każda rzecz w skrzynce ma jedną małą historię (ślad, napis, zapach, nietypowe zużycie). Rzeczy, które wracają w kilku dniach, są nagrodą za uważność.
3.4. **Konsekwencja jest widoczna.** Decyzja z dnia N wraca w dniu N+1…N+3 jako: list, wizyta, brak wizyty, zmiana w biurze, zmiana w tłumie za szybą. Echo ma być zrozumiałe: gracz ma pomyśleć „TO przez to, co zrobiłem”.
3.5. **Nic nie jest „dobrym wyborem”.** Dobre serce kosztuje (pieniądze, czas, bezpieczeństwo), twarde serce kosztuje (relacje, sumienie). Zakaz: nagrody za „moralnie poprawny” wybór z automatu (Papers: brak paragon metera).
3.6. **Zakaz niesprawiedliwych kar:** gracz ma zawsze dość informacji, żeby rozstrzygnąć rozsądnie. Jeśli zły wynik jest nieuchronny, to musi być po tym, jak to widać, nie „z dupy”.
3.7. **Spoiler-bezpieczne zwroty.** Największe odsłony (strona 41, Skrytka, Sam) mają przynajmniej 2 wcześniejsze „ślady” widoczne w rzeczach, żeby gracz po fakcie mógł powiedzieć „a przecież mówiłem!”.
3.8. **Każdy dzień ma tytuł-hak** (jedna linijka na ekranie dnia), który obiecuje wydarzenie.
3.9. **Finał spłaca.** W zakończeniu muszą paść wszystkie obiecane odpowiedzi albo gracz musi dostać świadome „nie dowiesz się” z powodem.

---

## 4. POSTACIE (każda wciągająca)

Każda z 12 postaci głównych musi mieć kartę (w obsadzie lub w docs/): 

1. **Potrzeba**: czego chce teraz od okienka (rzecz, wiadomość, przysługę).
2. **Strach**: czego boi się utracić.
3. **Sekret**: czego nie powie wprost (gracz może go znaleźć w rzeczy lub w rozmowie).
4. **Tik**: powtarzalny, łatwy do usłyszenia nawyk mowy lub gestu (np. liczy na głos; mówi „no więc” przed każdym kłamstwem; zawsze odkłada coś na ladę; poprawia sobie rękaw). Tik wraca co wizytę i **zmienia się, gdy postać się łamie** (np. przestaje liczyć). To jest wiralowy chwyt: widz rozpoznaje tik i zawczasu się cieszy/boi.
5. **Głos**: długość zdania, słownictwo, sposób przerywania (patrz biblia dialogów, sekcja 10). Test: zasłoń imię; można odgadnąć, kto mówi?
6. **Łuk**: co się z nią zmienia przez 25 dni i jakie 2 skrajne zakończenia.
7. **Relacja z graczem**: dlaczego gracz miałby ją lubić (czułość, humor, kompetencja) ORAZ dlaczego mógłby jej nie ufać (lekkie kłamstwo, chciwość).
8. **Moment gwiazdy**: jedna scena w grze, którą widz zapamięta i zacytuje.

Zasady dodatkowe:
- **Kontrast z tłem (Papers):** postaci epizodyczne są prostsze i krótsze, główne mają „dłuższy ogon”. Dzięki temu główne się wyróżniają.
- **Każda postać ma choć jedną cechę, którą gracz lubi, i jedną, która go irytuje.** Bez ludzi jednowymiarowych.
- **Nie ma „czarnych charakterów” bez motywacji.** Nawet inspektor ma powód.
- **Ludzie mówią do kogoś, nie do widza.** Dialog ma cel w świecie (przekonać, ukryć, prosić), a nie „zaprezentować fakt”.
- **Kłamstwo jest sprawdzalne** (zdanie przeczy rzeczy/dacie/wcześniejszej wizycie) i **kłamca ma powód**, który gracz może odkryć. Nigdy „zła mina” bez dowodu.
- **Postacie wracają.** Minimum dwie główne mają cykliczne pojawianie się z narastającą stawką.

---

## 5. DIALOGI (po polsku, naturalnie)

Pełne reguły: prompty/dialogi_biblia_prompt.md (test dwóch zdań, jasność, schemat JSON, walidator docs/tools/validate_dialogs.py). Tu najważniejsze twarde punkty CD2:

5.1. **Pierwsza kwestia = kto, co zgubił, dlaczego dziś** w 3 zdaniach i do 300 znaków, ze stawką w liczbie lub osobie.
5.2. **Pierwsze zdanie odpowiedzi odpowiada na pytanie.** Unik tylko jako świadomy unik postaci.
5.3. **Jedna nowa informacja na odpowiedź.** Zdania 6-18 słów, odpowiedź do 240 znaków.
5.4. **Każda postać mówi inaczej** (długość, rytm, słowa, tiki). Zakaz jednego „aforystycznego” stylu autora.
5.5. **Pytania gracza mają cel**: każde pytanie ujawnia inny aspekt (kto, dlaczego, dowód), a nie trzy tony. Maks. 75 znaków.
5.6. **Gracz bez płci:** nigdy „pan/pani”, nigdy czas przeszły 1. osoby w pytaniach gracza.
5.7. **Polszczyzna mówiona:** „no”, „słuchaj”, „wiesz”, przerwania, poprawki. Zakaz słów biurokratycznych w ustach ludzi (rubryka, kalka, blankiet) poza Inspektorem i Urzędem.
5.8. **Humor i czułość:** każda wizyta ma jedną linię humoru lub czułości; każdy dzień ma przynajmniej jedną kwestię „do zacytowania”.
5.9. **Jeden aforyzm na scenę.** Pointa to przyprawa.
5.10. **Test głośnego czytania i test „babci”** (czyta wizytę osoba, która nie zna gry, i opowiada ją swoimi słowami).
5.11. **Echo-listy i karty wieczorne** są pisane jako ludzie, nie rejestr: „Dziękuję. Nie wiem, co powiedzieć.” zamiast „Zamknięto zgłoszenie”.

---

## 6. PĘTLA ROZGRYWKI

6.1. **Dwie połowy dnia z innym rytmem:** wieczór (dostawa, zaglądanie, spokój) kontra wizyty (presja, rozmowa, decyzja).
6.2. **Nagroda przy każdym kroku:** dźwięk dostawy, odgłos wyjmowania rzeczy, ciężar przy przekopywaniu, stuk przy wydaniu, mina za szybą po decyzji (jak reakcja klienta w Moonlighter).
6.3. **Szukanie (igła w stogu) jest zabawą, a nie harówką:** 
 - każdy ruch odkrywa mikrogag lub detal (jak interakcje Hidden Folks);
 - wskazówka z rozmowy ma realną wartość (kolor, naklejka, zużycie, zapach), a nie „zgadnij”;
 - limit czasu jest miękki (presja przez dźwięk dzwonka, nie przez karę natychmiastową);
 - jeśli gracz nie znajdzie rzeczy w rozsądnym czasie, dostaje pomoc fabularną (rozmówca doprecyzowuje), nie ekran porażki.
6.4. **Zaglądanie do rzeczy (Unpacking):** rzeczy mają wnętrza i ślady; sekret to nagroda za ciekawość, nie obowiązek.
6.5. **Reguły rosną po jednej** (Papers). Dzień 1-2 prowadzi gracza za rękę, od 3 wchodzi niepewność, od 6 nowe narzędzie biura, od 11 konflikty wątków.
6.6. **Ulepszenia biura w soboty** są *namacalne* (nowa półka, nowa lampa, nowy dźwięk) i dają coś, co gracz zauważy w kolejnym dniu.
6.7. **Brak grindu:** zakaz czynności „zrób to samo 15 razy, żeby odblokować”. Postęp bierze się z historii, nie z liczników.
6.8. **Weryfikacja po kilku trafieniach (Obra Dinn):** tam, gdzie gracz zgaduje (np. który z podobnych przedmiotów), potwierdzenie nie przychodzi po każdej pomyłce, żeby zgadywanie nie było trywialne, ale też nie ma kary za jedną próbę.
6.9. **Brak martwych dni.** Każdy dzień ma nową rzecz, nowego człowieka lub nowy zwrot.

---

## 7. DYLEMATY (kasa, kradzież i reszta)

7.1. **Pieniądz jest paliwem dylematu.** Czynsz 150 $, rachunek za leczenie, łapówka, odszkodowanie: ludzie mówią kwotami, nie „dużo/mało”.
7.2. **Typy dylematów (rotuj, nie powtarzaj):**
 - KASA: zatrzymać rzecz i sprzedać / oddać za darmo / przyjąć „kopertę”.
 - KRADZIEŻ: ktoś kradnie rzecz z lady albo prosi o „zniknięcie” rzeczy; gracz sam może wziąć coś z magazynu (świadoma pokusa, z konsekwencją za 2-3 dni).
 - PRAWDA: powiedzieć komuś, co jest w rzeczy, czy nie.
 - LOJALNOŚĆ: Urząd (szef) vs Ludzie vs własne bezpieczeństwo.
 - TAJEMNICA: ujawnić sekret rzeczy czy zachować.
7.3. **Każdy dylemat ma 3 realne opcje** (nie 2): trzecia jest zwykle kreatywna (zatrzymaj, zadzwoń, wydaj częściowo).
7.4. **Każda opcja ma koszt i zysk** widoczne po fakcie, żadna nie jest „czysta”.
7.5. **Pokusa kradzieży:** gracz co najmniej 3 razy w grze dostaje okazję wziąć coś dla siebie. Wynik zależy od tego, kto patrzy i co jest w rzeczy, a nie od losowania.
7.6. **Presja czasu w mikrosytuacji** (Beholder): „dzwonią z góry, masz 40 sekund” raz na 3-4 dni, jako wyjątek, nie reguła.
7.7. **Konsekwencja musi być widoczna w ludziach, nie tylko w liczniku** (kobieta wraca bez płaszcza; chłopak przynosi zdjęcie; ktoś znika z kolejki).

---

## 8. CZYTELNOŚĆ UI

8.1. **Zasada trzech pytań ekranu:** gracz w 2 sekundy wie: (1) kto, (2) co teraz robię, (3) co się stanie, jeśli kliknę.
8.2. **Rzeczy czytelne mimo stylu** (lekcja Unpacking): sylwetka rozpoznawalna w 64 px, kontrast poziomy lub kolor odróżnia je od tła, rzeczy w stercie mają wyraźne różnice (kolor, wielkość, kształt), nie tylko detal.
8.3. **Jedno główne działanie na ekran.** Gesty (przeciągnij, zasuń, dźwignia) mają podpowiedź przy pierwszym użyciu i znikają po opanowaniu.
8.4. **Teksty w grze:** kroje czytelne, minimum 18 px @1080p, kontrast ≥ 4,5:1, brak tekstu na ruchomym tle bez podkładki. Teksty przez klucze t('...') (plik językowy lang/pl.json).
8.5. **Dostępność:** opcja ograniczenia błysków, głośność w dB, tryb tekstu bez efektów, pełne sterowanie klawiaturą i myszą, dotyk jako zapas.
8.6. **Brak pop-upów-ścian.** Samouczek zawsze w świecie gry (rozmowa, szept szefa), nie w modalu.
8.7. **Wejścia i wyjścia animowane krótko (≤300 ms):** nie blokują gracza.

---

## 9. MOMENTY WIRALOWE (streamowalność)

9.1. **Każdy dzień ma „moment”:** jedną scenę zaprojektowaną na reakcję widza. Lista momentów trzymana w docs/MOMENTY.md (autor wątku dopisuje przy tworzeniu dnia). Typ momentu: 
 - ZASKOCZENIE (rzecz w skrzynce okazuje się czymś zupełnie innym);
 - DYLEMAT NA ŻYWO (decyzja z ciężką stawką i zegarem, widz krzyczy „NIE!”);
 - ŚMIECH (absurdalna, ale realna sytuacja, np. dwie osoby przychodzą po ten sam lewy but);
 - ŁZA (rzecz, która wraca; list; pluszak);
 - PRZEBICIE CZWARTEJ ŚCIANY (szef, którego nigdy nie widać, mówi do gracza przez szybę).
9.2. **Zadbaj, żeby moment dał się nagrać w 10-30 sekund** (jedno wejście postaci, jedna kwestia, jedna decyzja, jedna reakcja).
9.3. **Tiki i powtarzalne frazy postaci** są memami: dopilnuj, by były krótkie, łatwe do zacytowania.
9.4. **Sceny „do wyboru przez widza”:** decyzje, w których widzowie na czacie dzielą się 50/50, są cenne; planuj 1 taką na tydzień.
9.5. **Zakończenia różnią się zdecydowanie** (3 wątki × 3 końce + epilog), żeby ludzie porównywali wyniki.
9.6. **Zrzut ekranu = plakat:** kadr okienka z postacią i rzeczą musi dobrze wyglądać na miniaturze 320×180.
9.7. **Dźwięk wirusowy:** dzwonek, stuk stempla/dźwigni, specyficzny odgłos otwarcia skrzynki: krótkie, rozpoznawalne, do powtórzenia.

---

## 10. TEMPO DNI

10.1. **Dzień 1-2 (≈10 min każdy):** nauka gestów i hak. Pierwsza wizyta jest przyjemna i jasna, druga ma pierwszy cień.
10.2. **Dni 3-5:** pierwsze kłamstwa, pierwsza burza, pierwsza pokusa; sobota 1 pokazuje cenę wyborów.
10.3. **Tydzień 2 (dni 6-10):** wchodzą nowe narzędzia i pierwsze konflikty między wątkami.
10.4. **Tydzień 3 (dni 11-15):** zwrot środka: odsłonięcie, które zmienia sens wcześniejszych wizyt.
10.5. **Tydzień 4 (dni 16-20):** narastające koszty; gracz musi wybierać stronę.
10.6. **Tydzień 5 (dni 21-25):** rozstrzygnięcia; każdy dzień w tym tygodniu ma bardzo wysoką stawkę i krótszą rozmowę (tempo rośnie).
10.7. **Dłużej niż 3 dni bez odpowiedzi na stare pytanie = błąd.** Krócej niż 1 nowa rzecz na dzień = błąd.
10.8. **Całość 4-6 godzin.** Lepiej 4 gęste niż 8 rozwodnionych (skarga o długości vs cenie z Unpacking).

---

## 11. ZAKAZY Z KRYTYKI (lista czerwona)

Zakazane, bo ludzie tego nie lubili u poprzedników:
1. **Grind** (zbieranie, odblokowywanie licznikami): Moonlighter, Potion Permit.
2. **Powtarzalność bez zmiany** (to samo co wczoraj): Papers, Not Tonight, Moonlighter.
3. **Kary za pomyłki bez nauki:** Papers, Beholder (checkpointy powodujące powtórki).
4. **Postacie z 2-3 kwestiami:** Potion Permit.
5. **Decyzje bez konsekwencji:** Potion Permit, Moonlighter.
6. **Pusty, wolny początek:** Papers, Moonlighter (godziny grindu). Hak od pierwszej wizyty.
7. **Niejasne reguły „co jest poprawne”:** Unpacking, Obra Dinn.
8. **Brak podpowiedzi zupełny:** Obra Dinn (każda zagadka ma wskazówkę w świecie).
9. **Płytkie zakończenie:** Moonlighter, Obra Dinn.
10. **Nieczytelne rzeczy/postaci:** Unpacking (piksele), Hidden Folks (wskazówki z niczego).
11. **Monetyzacja „na raty”:** Potion Permit (30 DLC). Gra to 9,99 USD, bez DLC-ozdób.
12. **Zbyt krótko za cenę lub zbyt rozwleczone:** Unpacking, Potion Permit.
13. **Czarna beznadzieja bez humoru:** Papers (opinie), Not Tonight.
14. **Klon bez własnej duszy:** Not Tonight. Okienko ma być swoje: deszcz, lampa sodowa, linia 4/6/11, rzeczy z tramwaju.
15. **Zagadki typu „zgadnij, o co chodzi autorowi”.**

---

## 12. KONTROLA JAKOŚCI (obowiązkowa przed oddaniem każdej partii)

Zanim wątek zgłosi cokolwiek jako „gotowe”, wykonuje **self-review w trzech rolach** i zapisuje wynik w odpowiedzi (krótko, z konkretami):

**ROLA 1: GRACZ (nie znam gry).** Czy po pierwszej kwestii wiem kto/co/po co? Czy chcę kliknąć następną? Czy rozumiem, co się stanie po moim wyborze? Czy czuję „jeszcze jedną wizytę”? Gdzie się nudzę (wskaż sekundę/kwestię)?

**ROLA 2: RECENZENT STEAM (negatywny, lubi czepiać się).** Napisz 3 najgorsze zdania recenzji, jakie mogłaby dostać ta partia (powtarzalność? nieczytelność? kara? płaskie postacie? za mało humoru?). Potem popraw tak, żeby tych zdań nie dało się napisać.

**ROLA 3: STREAMER (30 000 widzów).** Gdzie widz krzyknie na czacie? Gdzie podzieli się 50/50? Gdzie się roześmieje? Jeśli nie ma takiego miejsca, partia nie ma momentu: dopisz.

Dodatkowo:
- **Walidator dialogów** (docs/tools/validate_dialogs.py) = 0 błędów.
- **Test dwóch zdań i test „babci”** na losowych 2 wizytach z partii.
- **Bot QA** (qa/bot.js) przechodzi dni bez błędów konsoli, w obu strategiach (wydaj-wszystkim, odmów-wszystkim) plus jedna losowa.
- **Zgodność z kanonem:** imiona, kwoty, flagi, nazwy akcji wg fabula_25_dni.md §7.
- **Raportowanie uczciwe:** napisz osobno ZWERYFIKOWANE (co uruchomiłeś/przeczytałeś) i NIEZWERYFIKOWANE (np. brzmienie, głośność, dotyk). Brak „ok” bez sprawdzenia.

Format zgłoszenia: 
1) co zrobiono (3-5 zdań); 2) wynik trzech ról (po 2-3 zdania); 3) lista momentów wiralowych dodanych; 4) zweryfikowane/niezweryfikowane; 5) co dalej.

---

## 13. JAK PRACOWAĆ (procedura wątku)

1. Przeczytaj: ten plik, prompty/dialogi_biblia_prompt.md, koncept/fabula_25_dni.md, koncept/okienko_obsada_i_kalendarz.md, docs/STATE.md, docs/DECISIONS.md.
2. Przed większą pracą zrób krótki plan (3-6 punktów) i sprawdź go wobec praw CD2 (sekcja 2). Jeśli plan łamie prawo, popraw plan.
3. Pracuj w partiach (np. 1 dzień dialogów, 1 moment, 1 mechanika), po każdej self-review (sekcja 12).
4. Zmieniaj tylko to, o co Tommy prosi, ale zgłaszaj naruszenia CD2 w istniejącym materiale (z propozycją poprawki, nie samowolnie).
5. Zapisuj stan w docs/STATE.md i decyzje w docs/DECISIONS.md (dopisuj, nie nadpisuj cudzych wpisów; pliki w /mnt/project-files/ współdzielone, czytaj tuż przed zapisem).
6. Odpowiadaj po polsku, konkretnie, bez lania wody, do Tommy'ego na „Ty”, bez nadużywania imienia.
7. Samograj: decyduj sam tam, gdzie krok można cofnąć; pytaj tylko o rzeczy nieodwracalne lub zmieniające cel.
8. Pliki dla Tommy'ego: do /mnt/project-files/ w podkatalogach; przy promptach dla ChatGPT/Gemini podawaj dokładnie, jakie pliki załączyć.

---

## 14. SKRÓT NA JEDNĄ KARTKĘ (do wklejenia na początku każdej sesji)

> CD2: ciekawość, wiralowość, ludzie, genialna fabuła. Hak w 10 s. Pętla <60 s z nagrodą dźwiękiem. 12 postaci z tikiem, sekretem, strachem, głosem. Dylematy w dolarach, 3 opcje, żadna czysta, konsekwencja za 1-3 dni. Rzeczy opowiadają. Reguły rosną po jednej. Humor + czułość w każdej wizycie. Każdy dzień ma moment do streamu. Zero grindu, zero niesprawiedliwych kar, zero papierowych postaci, zero nieczytelności. Przed oddaniem: self-review jako GRACZ, RECENZENT STEAM i STREAMER; walidator i bot na zielono; raport „zweryfikowane/niezweryfikowane”.
