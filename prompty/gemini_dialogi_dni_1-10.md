# Prompt dla Gemini: rozbudowa rozmów, dni 1–10

**Jak użyć**

1. Otwórz nowy czat w Gemini (najlepiej model Pro, długi kontekst).
2. Załącz pięć plików z repo:
   - `prompty/gemini_karty_dni_1-10.md` (karty gości: głos, rzecz, sekrety, decyzje)
   - `koncept/rozmowy_dsl/dni01-05.txt` (obecne rozmowy, dni 1–5)
   - `koncept/rozmowy_dsl/dni06-10.txt` (obecne rozmowy, dni 6–10)
   - `game/tropy.js` (cechy rzeczy, które muszą paść w rozmowie)
   - `docs/STRATEGIA_GRY.md` (po co rozmowa i jak łączy się z magazynem)
3. Wklej wszystko spod linii „PROMPT” poniżej.
4. Gemini odda trzy bloki kodu: `dni01-05.txt`, `dni06-10.txt` i `nowi_goscie.txt`. Zapisz je pod tymi nazwami i wrzuć do wątku dialogów (albo wklej treść). Dwa pierwsze wczytują się od razu. Nowi goście wchodzą do gry dopiero po dorobieniu portretu i grafiki rzeczy, to robi wątek.

**Wczytanie wyniku (dla wątku albo ręcznie)**

```
# podmień oba pliki w koncept/rozmowy_dsl/ na wynik z Gemini, potem:
python3 -I koncept/rozmowy_dsl/wstaw.py          # musi wypisać: nieznane id: []
cd game && python3 -I build_data.py && cd ..     # przebudowuje game/data.js
python3 -I docs/tools/validate_dialogs.py        # musi wypisać OK
node qa/tropy_test.js                            # cechy rzeczy z dni 1–3 nadal padają w rozmowie
node qa/spojnosc_dialogow.js                     # raport docs/SPOJNOSC_DIALOGOW.md; WIEDZA, KALKA, PLEC mają być na zerze
```

Pliki z wynikiem ZASTĘPUJĄ stare o tej samej nazwie. Nie dokładaj trzeciego pliku z tymi samymi scenami, bo rozmowy się zdublują.

---

## PROMPT

Jesteś polskim scenarzystą gier narracyjnych. Piszesz po polsku od zera, nie tłumaczysz z angielskiego. Twoim zadaniem jest rozbudować i poprawić rozmowy w grze LOST & FRAUD w dniach 1–10. W załącznikach masz karty gości, obecne rozmowy w zapisie tekstowym, plik z cechami rzeczy i strategię gry. Masz dużo miejsca i masz go użyć: oddajesz te same dwa pliki rozmów, w tym samym zapisie, tylko wyraźnie głębsze, do tego nowe reakcje i kartki o świcie oraz trzeci plik z nowymi gośćmi rozpisanymi w całości.

### 1. Gra w trzech zdaniach

Nocna zmiana w biurze rzeczy znalezionych przy zajezdni tramwajowej. Gracz siedzi za szybą okienka: ktoś puka, mówi, co zgubił, gracz wypytuje, idzie do magazynu, szuka rzeczy w stercie i decyduje, czy wydać, odmówić, czy coś wziąć dla siebie. Nastrój: brudny, cichy noir, deszcz, lampa sodowa, ludzie zmęczeni po nocce. Wzorem jest Papers, Please: krótko, konkretnie, każda wizyta to mały dylemat.

Świat: miasto bez nazwy, tramwaje numer 4, 6 i 11, pętla, Doki, zajezdnia. Imiona są angielskie i to jest kanon, waluta to dolary. Język jest w pełni polski.

Czerwona nić dni 1–10: poprzedni dyżurny Sam Holt wydawał rzeczy bez wpisu i zniknął. Iris Bell zarządza kamienicą przy Cooper Street, odbiera lokatorom wypłaty i sprzedaje „papiery na nowe życie”. Maya Doyle zniknęła i nie chce być znaleziona przez męża Evana. Inspektor Victor Crane sprawdza księgę. Policjant Noah Reyes ma czas do wtorku, siódmego września. Nie dopisuj nowych faktów do tej intrygi. Możesz pogłębiać to, co już jest w kartach i w obecnych rozmowach.

### 2. Jak silnik gra rozmowę (to wyznacza formę)

- Gość wchodzi i mówi kwestię „Wejście” z karty. Tego nie zmieniasz.
- Gracz widzi do 4 przycisków naraz. **Tematy** (poziom 0) są dostępne przez całą rozmowę. **Dopytania** (poziom 1, 2, 3) pojawiają się tylko raz, zaraz po odpowiedzi, pod którą wiszą, najwyżej dwa naraz, i znikają, jeśli gracz wybierze co innego.
- Gracz może zadać najwyżej 5 pytań jednemu gościowi. Dlatego drzewo ma być szersze, niż da się przejść za jednym razem: gracz wybiera, w co się wgryźć, i przy następnym podejściu znajdzie coś innego.
- Pytanie z `@sekret` widać tylko wtedy, gdy gracz wcześniej obejrzał rzecz i znalazł w niej ten ślad. To jest sposób na złapanie kłamstwa.

### 3. Najważniejszy wymóg: spójność

To był główny zarzut do poprzedniej wersji, więc traktuj to jak twardy test.

- **Dopytanie reaguje na ostatnie zdania odpowiedzi, pod którą wisi.** Łapie słowo, liczbę, wahanie, niedopowiedzenie. Gość mówi „miałam cztery noce, za czwartą nie dostałam”, to dopytanie brzmi „Kto zdecydował, że za czwartą nie dostaniesz?”, a nie „Gdzie pracujesz?”.
- **Odpowiedź odpowiada dokładnie na to pytanie.** Jeśli gość robi unik, to widać, że to unik wobec tego pytania („Tylko nie pytaj dokąd”), a nie tekst z innej rozmowy.
- **Temat z poziomu 0 opiera się tylko na Wejściu i na tym, co widać.** Nie może używać imienia, liczby ani faktu, który pada dopiero w jakiejś odpowiedzi. Taka wiedza należy do dopytania pod tą odpowiedzią.
- **Dopytanie może używać tylko wiedzy ze swojej ścieżki**: Wejście plus odpowiedzi wyżej w tej samej gałęzi.
- Postaci z wcześniejszych dni gracz już zna (Sam, Iris, Maya, Evan, Noah), więc w późniejszych dniach wolno o nie pytać wprost.
- Każde dopytanie ma odsłaniać coś nowego o człowieku albo o rzeczy. Żadnych pytań-wypełniaczy w rodzaju „Odbiór wymaga podpisu. Podpiszesz?”.

### 4. Ile i jak głęboko

Dla każdej z 21 scen:

- 6 do 8 tematów na poziomie 0 (nie licząc pytań z `@`).
- Pod każdym tematem 2 do 3 dopytania, a pod większością z nich kolejny poziom. Głębokość do 4 poziomów pod tematem tam, gdzie człowiek ma co ukrywać.
- Razem 30 do 45 par pytanie–odpowiedź na scenę. Obecne mają około 10 do 14. Nie oszczędzaj: gracz i tak zada tylko 5 pytań, więc bogactwo drzewa to powód, żeby zagrać drugi raz.
- Goście, którzy wracają (Iris, Evan, Noah, Lena, Victor), mają w późniejszej wizycie pamiętać wcześniejszą: dodaj tematy z `@id_sceny:akcja`, które reagują na to, co gracz wtedy zrobił. Lista dozwolonych akcji jest w kartach.
- Różne nitki, nie jedna: rzecz (wygląd, znak szczególny, co w środku), okoliczności zguby, człowiek (praca, rodzina, wstyd, strach), powiązania (kto go przysłał, kogo zna z biura, co wie o Samie albo Iris), stawka (co się stanie, jeśli nie dostanie rzeczy).
- Co najmniej jedna gałąź, w której gość mówi więcej, niż chciał, i jedna, w której się zamyka.
- Zachowaj to, co w obecnych rozmowach działa. Możesz przepisać każde zdanie, ale nie gub faktów.

### 5. Rozmowa musi pomagać w magazynie

- Każda scena ma temat o wyglądzie rzeczy i dopytanie o znak szczególny. W odpowiedziach muszą zostać te same rzeczowniki, co dziś (biała nitka, czerwona wskazówka, naklejka „Mama”, odłamany dziób, pęknięta klamra itd.), bo gra rozpoznaje je po słowach.
- Dla dni 1–3 obowiązuje plik `tropy.js`: każde wyrażenie z pola `re` musi dalej pasować do jakiejś odpowiedzi gościa bez `@`, na poziomie 0 albo 1. Nie zmieniaj tych sformułowań.
- Dla dni 4–10 wpleć w odpowiedzi trzy konkretne cechy rzeczy (kolor albo materiał, kształt albo rozmiar, znak szczególny), każdą w osobnej odpowiedzi, tak żeby gracz, który nie dopytał, wiedział mniej.
- Osobno, w odpowiedzi na temat „gdzie i kiedy”, gość podaje linię tramwaju i porę zguby (dzień albo godzinę). To czwarta cecha: w magazynie rzecz ma zawieszkę z linią i datą. Nie przenoś tej informacji do innej odpowiedzi i nie zmieniaj linii ani pory w dniach 1–3.
- Kłamca albo ktoś, kto przyszedł po cudzą rzecz, zna ją tylko z wierzchu. Właściciel zna środek, ale mówi po swojemu i czasem się myli w drobiazgu. Uczciwy, który słabo pamięta, nie może wyjść na oszusta.
- Gracz nigdy nie podpowiada cechy w pytaniu, jeśli jej wcześniej nie usłyszał albo nie znalazł (`@`).

### 6. Polszczyzna

- Mówiona, potoczna, krótka. Zdania, jakie padają przy okienku o piątej rano: „No dobra.”, „Skąd mam wiedzieć?”, „Daj spokój.”, „Policz sobie.”
- Zakaz kalk z angielskiego: „mam na myśli”, „to ma sens”, „obawiam się, że”, „daj mi znać”, „zaufaj mi”, „przykro mi to słyszeć”, „co jest nie tak”, „jestem w stanie”, „na koniec dnia”, „potrzebuję, żebyś”, „czuję, że”, „Dokładnie.” jako samodzielna odpowiedź, „robić różnicę”, „wziąć odpowiedzialność”, „spójrz,”.
- Naturalny polski szyk, podmiot domyślny („Zgubiłam”, a nie „Ja zgubiłam”), partykuły (no, przecież, akurat, niby, chyba, w końcu).
- Każdy gość ma własny głos z karty (pola Głos i Tik) i trzyma go w każdej kwestii. Dziecko mówi jak dziecko, motorniczy jak motorniczy, urzędnik jak urzędnik. Po zasłonięciu imion ma być słychać, kto mówi.
- Bez morałów, bez poetyckich podsumowań, bez wyjaśniania własnych uczuć. Niech wynikają z konkretu („W czwartki gotuje rosół i udaje, że wyszło za dużo”).
- Humor suchy, z sytuacji. Nie w każdej kwestii.

### 7. Twarde reguły tekstu

- Gracz nie ma płci. W pytaniach gracza żadnych form „zrobiłem/zrobiłam”, „byłem/byłam”. Goście nie zwracają się do gracza „pan/pani” ani formami z płcią („widziałeś/widziałaś”). Mówią na ty w czasie teraźniejszym i przyszłym, w trybie rozkazującym albo bezosobowo („Proszę zapisać”, „Zrób, jak uważasz”).
- Gracz zwraca się do gości na ty. Wyjątek: Thomas i Vera mogą mówić „proszę…”.
- Pytanie gracza: jedna linia, najwyżej 95 znaków. Odpowiedź gościa: 1 do 4 zdań, najwyżej 330 znaków.
- Żadnych numerów dni ani liczników („dzień 3”, „jeszcze dwa dni”). Daty tylko te, które już są w materiale.
- Kwoty w dolarach, takie jak w kartach. Nazwy własne i fakty z kart bez zmian.
- Cudzysłowy polskie „ ”. Bez myślników długich, bez emoji, bez didaskaliów w nawiasach.

### 8. Zapis (nie zmieniaj go, wczytuje go skrypt)

```
# id_sceny
? T [znaczniki] Pytanie gracza
= M Odpowiedź gościa
 ? T Dopytanie (jedna spacja wcięcia na każdy poziom głębiej)
 = M Odpowiedź
  ? T Dopytanie do dopytania
  = M Odpowiedź
! akcja Reakcja gościa na decyzję gracza
```

- `T` to ton pytania: `u` uprzejme, `r` rzeczowe, `n` niewygodne.
- `M` to mina gościa: `m` mówi, `n` neutralna, `e` emocja, `k` kłamie. Przy `k` treść odpowiedzi jest kłamstwem.
- Po każdym `?` idzie dokładnie jedno `=` na tym samym wcięciu. Wcięcie to wyłącznie spacje, po jednej na poziom.
- Znaczniki stoją między tonem a tekstem, oddzielone spacjami:
  - `@id` pytanie widać tylko, gdy gracz zna sekret albo podjął decyzję. Używaj wyłącznie identyfikatorów, które są w kartach (pole „W środku rzeczy”) albo już występują w obecnych plikach. Zapis `@a|b` znaczy „a albo b”.
  - `+flaga` pytanie ustawia flagę. Zostaw tylko te, które już są (`+d3_evan_oferta`, `+d4_koperta_oferta`, `+d7_kit_ulotki`, `+d8_bree_oferta`), przy pytaniach o tym samym sensie.
  - `~kto` w scenach z dwiema osobami: kto odpowiada. Wartości z karty, pole „Mówiący”.
  - `#klucz` dwa pytania o to samo (zadanie jednego chowa drugie). `%klucz` pytanie znika, gdy padło pytanie z tym kluczem. Używaj tak, jak w obecnych plikach, przy parze „kłamstwo i jego rozbicie”.
- Wzór łapania kłamstwa (zachowaj wszędzie, gdzie już jest, i dodaj tam, gdzie karta ma sekret, a gość kłamie): temat, na który gość kłamie (`= k`), pod nim dopytanie z `@sekret`, które kłamstwo rozbija, oraz ten sam sekret jako osobny temat na poziomie 0 z tym samym `#kluczem`.
- Linia `! akcja tekst` to reakcja gościa na decyzję gracza. Napisz ją od nowa dla KAŻDEJ akcji z karty: 1 do 2 zdań głosem gościa, z konkretem, bez dziękowania formułką. Nazwa akcji musi istnieć w karcie tej sceny.
- Linia `> akcja tekst` to kartka, którą gracz znajduje o świcie po tej decyzji. Napisz ją od nowa dla każdej akcji, która w karcie ma „kartka o świcie”, i tylko dla takich. Najwyżej 2 zdania i 200 znaków. Zachowaj formę: jeśli obecny tekst zaczyna się od „Imię Nazwisko: „…””, zostaw ten początek; jeśli kończy się podpisem, zostaw podpis. Kartka mówi o skutku decyzji dla konkretnego człowieka, nie streszcza rozmowy.
- Nagłówki `# id_sceny` zostają dokładnie takie, jak są. Nie dodawaj i nie usuwaj scen. Linie zaczynające się od `//` to komentarze, możesz je pominąć.

Przykład (fragment sceny, tak ma to wyglądać):

```
# d1_thomas
? u Jak wygląda ta rękawiczka?
= m Brązowa skóra, damska, mały rozmiar. Przy kciuku zszyłem ją białą nitką, bo ciemnej w domu nie było. Krzywo, ale trzyma.
 ? r Biała nitka na brązowej skórze? Czemu nie u kaletnika?
 = e Bo tym razem to ja miałem zszyć. Ellen przez czterdzieści lat cerowała po mnie wszystko, raz mogłem ja.
? n %kwit To pierwsza wizyta w tym biurze?
= k Pierwsza. Z urzędami się nie zadaję.
 ? n @d1_kwit_0417 #kwit To skąd w mankiecie kwit z tego biura, numer 0417?
 = e No dobrze, byłem tu. Sześć tygodni temu zgubiłem prawą. Taki młody człowiek, Sam, oddał mi ją od ręki.
  ? r Sam mówił coś jeszcze?
  = n Że lewa też kiedyś przyjdzie, bo rękawiczki chodzą parami. I żebym o nim za dużo nie opowiadał.
```

### 9. Tryb pracy

1. Najpierw przeczytaj wszystkie załączniki.
2. Pracuj scena po scenie. Przed oddaniem każdej sceny sprawdź ją sam:
   - czy każde dopytanie da się zrozumieć, znając tylko odpowiedź nad nim,
   - czy żaden temat z poziomu 0 nie zakłada wiedzy z odpowiedzi,
   - czy cechy rzeczy padają w odpowiedziach tymi samymi słowami,
   - czy nie ma „pan/pani” do gracza ani form z płcią,
   - czy limity znaków się zgadzają,
   - czy każde `?` ma swoje `=`.
3. Oddaj **trzy bloki kodu**, nic więcej w ich środku:
   - pierwszy z podpisem `dni01-05.txt` (sceny z dni 1–5, w kolejności jak w oryginale),
   - drugi z podpisem `dni06-10.txt` (sceny z dni 6–10),
   - trzeci z podpisem `nowi_goscie.txt` (opis w punkcie 10).
   Jeśli odpowiedź nie mieści się w jednej wiadomości, przerwij na granicy sceny, napisz „CIĄG DALSZY” i kontynuuj po mojej wiadomości „dalej”. Nie skracaj scen, żeby się zmieścić.

### 10. Nowi goście (trzeci plik)

Dziś dzień ma 2 do 3 wizyt. Dopisz 12 do 15 nowych gości tak, żeby każdy z dni 1–10 miał 3 do 4 wizyt. Rozpisz ich w całości, tym samym rzemiosłem co resztę.

Zasady doboru:
- Zwykli ludzie i zwykłe zguby: klucze, legitymacja, termos, aparat słuchowy, torba z zakupami, zeszyt, proteza zębowa w pudełku, bilet miesięczny, lalka, okulary. Bez agentów, walizek z pieniędzmi i zbiegów okoliczności.
- Różnorodność: wiek, zawód, temperament, uczciwość. W tej partii co najmniej: trzech kłamców różnego typu (zgadywacz, podsłuchiwacz spod okienka, profesjonalista z fałszywym dowodem), dwóch „bliźniaków” (uczciwa pomyłka, opisują podobną, ale inną rzecz), jeden pełnomocnik, jeden znalazca, który chce nagrody, dwóch uczciwych, którzy słabo pamiętają.
- Połowa nowych gości ma cienką nitkę do obsady (lokator z Cooper Street, pracownica pralni, motorniczy z jedenastki, sąsiad Thomasa). Nie wiedzą nic o intrydze, znają tylko swój kawałek.
- Każdy dylemat jest inny i mały: komu wydać, czy wziąć, czy przymknąć oko, czy zapisać.
- W dniach 1–2 goście prości, uczą gry. Od dnia 5 trudniejsi.

Zapis każdego gościa (pola w tej kolejności, każde w jednej linii):

```
## NOWY d<dzień>_<imie>
dzien: <1–10>
postac: Imię Nazwisko, wiek
glos: jak mówi, w jednym zdaniu
tik: powtarzalny nawyk w mowie
typ: uczciwy | kłamca: <typ> | bliźniak | pełnomocnik | znalazca | uczciwy, słabo pamięta
rzecz: nazwa rzeczy z jedną cechą widoczną z daleka
cechy: kolor albo materiał | kształt albo rozmiar | znak szczególny
blizniaki: czym różni się podobna rzecz nr 1 | czym różni się podobna rzecz nr 2
sekret: co widać w środku rzeczy => co z tego wynika
powiazanie: z kim z obsady i jak (albo „brak”)
wejscie: pierwsza kwestia gościa, 2 do 4 zdań
decyzja: akcja | etykieta przycisku | kasa dla gracza w $ (0, jeśli brak) | reakcja gościa | zysk | strata | kartka o świcie
decyzja: ...
rozmowa:
? u ...
= m ...
```

- 2 do 3 linie `decyzja:`. Akcje: `wydaj`, `odmow`, `zatrzymaj`, `zadzwon` albo własna nazwa małymi literami z podkreślnikami. Najwyżej jedna decyzja z kasą dla gracza.
- Rozmowa w tym samym zapisie co w punkcie 8, 20 do 30 par. Pytanie o sekret oznacz `@sekret` (dosłownie to słowo).
- Trzy cechy z pola `cechy` muszą paść w odpowiedziach tymi samymi słowami, każda w innej odpowiedzi. Kłamca zna najwyżej dwie. Linia tramwaju i pora zguby padają osobno, w odpowiedzi na pytanie „gdzie i kiedy”.

### 11. Na koniec, zwykłym tekstem

Po trzech blokach dopisz krótko (do 15 punktów): które fakty z kart wydały ci się sprzeczne albo nielogiczne i w których scenach musiałeś coś obejść. Bez pochwał i bez streszczania własnej pracy.
