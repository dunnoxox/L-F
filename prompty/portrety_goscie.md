# Portrety gości: paczka promptów do ChatGPT (26 nowych twarzy)

Stan gry: są 6 portretów (`lostfraud_art5/B1`–`B6`). W dialogach występuje **32 różnych osób** (dni 1-15 z plików v3, dni 16-25 z `fabula_25_dni.md`/`v2`). Liczba „50 gości” to wizyty, a nie osoby: część wraca (Evan 3x, Iris 5x, Elias codziennie). Brakuje więc **26 portretów**. Do tego opcjonalny arkusz statystów (S01), żeby kolejka nie miała wiecznie tych samych twarzy.

## Format (taki sam jak B1–B6, bo na nim stoi silnik)

Jeden obraz = **jedna osoba w czterech minach**, 1536x1024, cztery popiersia w czterech równych kolumnach. Kolejność min jest stała i odpowiada polu `mina` w dialogach:

| Kolumna | mina w dialogach | co to jest |
|---|---|---|
| 1 | `neutralna` | patrzy w okienko, twarz w spoczynku |
| 2 | `mowi` | usta otwarte w środku zdania |
| 3 | `klamie` | wzrok ucieka, napięty kącik ust (u każdego inaczej) |
| 4 | `emocja` | najsilniejsze uczucie tej postaci |

Dzięki temu cięcie jest mechaniczne (4 kolumny po 384 px), a gra dostaje od razu komplet min. Grupowanie po 6 na arkusz odrzuciłem celowo: rozbiłoby to układ 4 min na osobę.

## Co załączyć do czatu (5 plików, referencje stylu)

Załącz **na końcu pierwszej wiadomości**, po wklejeniu bloków 1 i 2:

1. `lostfraud_art4/L4-twarze.png` (wzorzec rzeźbienia twarzy)
2. `lostfraud_art5/B1-wdowiec.png` (starszy mężczyzna, ręka z rekwizytem nisko)
3. `lostfraud_art5/B2-chlopak.png` (młody, kaptur, bardzo ekspresyjna mina 4)
4. `lostfraud_art5/B4-siostra.png` (kobieta w średnim wieku)
5. `lostfraud_art5/B5-dama-z-koperta.png` (starsza kobieta, ten sam układ 4 kolumn)

Wszystkie leżą w folderze plików projektu. Jeśli ChatGPT zacznie „dryfować” po kilkunastu obrazach (twarze robią się podobne do siebie albo wpada sepia), wklej w nowej wiadomości: „Wróć do referencji B1 i B5, nie kopiuj poprzednich twarzy” i załącz je ponownie.

## Jak nazwać wyniki

`G01-rosa.png`, `G02-hana.png` … `G26-priya.png` (numer + klucz z tabeli niżej), opcjonalnie `S01-kolejka.png`. Wrzuć je do `art/portrety_goscie/` w repo (albo do `lostfraud_art7/` w folderze projektu). Wątek gry tnie je skryptem `prompty/cut_portrety_goscie.py` na `<klucz>_<mina>.jpg`, tak samo jak B1–B6.

---

## BLOK 1: prompt-matka (wklej jako początek wiadomości)

```
Jesteś dyrektorem artystycznym gry. W tej jednej rozmowie wygeneruj 26 portretów gości biura rzeczy znalezionych, jeden obraz po drugim, bez pytania o zgodę, bez streszczeń, bez łączenia obrazów i niczego nie pomijaj. Pod każdym obrazem napisz tylko etykietę, np. "G03 gotowe 3/26". Jeśli system każe Ci się zatrzymać, napisz "Wpisz: dalej" i po mojej odpowiedzi kontynuuj od następnego numeru. Na końcu wypisz listę etykiet i które obrazy odbiegają od zasad poniżej.

STYL: odbitka z linorytu, trzy farby i ani jednej więcej: czerń płyty, kremowa biel papieru i brudny pomarańcz lampy sodowej. Formy powstają z pełnych kremowych plam światła wyciętych z czerni, cień to czysta czerń. Faktura to krótkie cięcia dłuta, kropki i zadrapania na granicy światła i cienia. Zero szarości, brązu, sepii, gradientów, rastra i cienkich równych konturów dookoła. Pomarańcz to wyłącznie światło lampy z prawej strony: dwa lub trzy małe odblaski na krawędzi włosów, policzka albo kołnierza, nigdy kolor ubrania, skóry czy przedmiotu. Bez smugi pomarańczu w tle i w rogach. Bez tekstu, liter, cyfr, logo i znaków wodnych (naklejki, odznaki i pola na papierze zostają puste lub mają sam symbol bez liter). Ubrania i przedmioty są stare, wytarte i zniszczone, nic nie jest ładne ani symetryczne.

UKŁAD KAŻDEGO OBRAZU (to ważne, bo obraz jest potem cięty na cztery równe kolumny): format poziomy 1536x1024, tło czysta jednolita czerń. Cztery popiersia tej SAMEJ osoby w czterech równych kolumnach obok siebie. We wszystkich czterech ta sama twarz, ten sam wiek, fryzura, ubranie, rekwizyt, proporcje, skala i wysokość głowy. Kadr od czubka głowy po pas, głowa w górnej połowie kolumny, rekwizyt trzymany nisko przed piersią w widocznej dłoni (dłonie rzeźbione tak samo starannie jak twarz). Żadne popiersie nie wchodzi na sąsiednią kolumnę ani nie dotyka krawędzi obrazu, między kolumnami jest czarny odstęp.

CZTERY MINY, zawsze w tej kolejności od lewej: 1 NEUTRALNA: patrzy prosto, twarz w spoczynku. 2 MÓWI: usta otwarte w środku zdania, brwi lekko uniesione. 3 KŁAMIE: wzrok ucieka w bok lub w dół, napięty kącik ust; szczegóły podane przy każdej postaci. 4 EMOCJA: najsilniejsze uczucie tej postaci, czytelne z daleka, szczegóły przy każdej postaci. Mimika ma być subtelna i ludzka, nie karykaturalna.

LUDZIE: każda postać ma wyraźnie inną budowę czaszki, nos, usta, wiek i charakter, nie wolno zrobić dwóch podobnych twarzy. Różne odcienie skóry oddajemy WYŁĄCZNIE proporcją czerni do kremu: im ciemniejsza skóra, tym więcej czerni w twarzy, a światło zostaje tylko na kościach policzkowych, czole, nosie i dolnej wardze. Ciemnej skóry nie wolno zostawić kremowo-białej. Bez masek, bez dziur w ciele, bez nadmiaru ozdób. Ma to wyglądać jak portrety z reportażu, nie jak komiks.

Postacie wypisuję w następnym bloku. Wzorce rzeźbienia i układu są w załączonych referencjach (patrz koniec wiadomości).
```

## BLOK 2: 26 postaci (wklej zaraz pod blokiem 1, potem załącz 5 plików)

```
G01 ROSA VALE: 33 lata, praczka. Zmęczona, wychudzona, spierzchnięte czerwone dłonie od prania, włosy upięte byle jak chustką, z której wypadają kosmyki, cienie pod oczami. Stary rozciągnięty sweter z łatą na łokciu. Rekwizyt: płaska koperta z wypłatą ze zszywką, trzymana oburącz. Mina 3 (nie kłamie, tylko milczy): zaciska usta i patrzy w bok na drzwi, jakby coś przemilczała. Mina 4: oczy pełne łez, które się nie wylewają, dolna warga drży.

G02 HANA MOREAU: 26 lat, skrzypaczka. Prosta postawa, gładko spięty ciasny kok, długa szyja, cienki płaszcz za lekki na tę porę roku, wypielęgnowane dłonie z odciskami na opuszkach lewej ręki. Rekwizyt: sztywny futerał na skrzypce z okrągłą naklejką (puste jasne koło), stawiany ostrożnie jak dziecko. Mina 3: mówi bardzo starannie, każde słowo wyraźne jak recytacja, a oczy patrzą ponad ramieniem rozmówcy. Mina 4: panika ukryta pod uśmiechem, nozdrza rozszerzone.

G03 DANA RUIZ: 38 lat, mechaniczka tramwajowa. Szerokie ramiona, mocna szczęka, krótko ostrzyżone włosy, ślady smaru na policzku i szyi, kombinezon z podwiniętymi rękawami, zmarszczki od śmiechu. Rekwizyt: blaszany budzik z dwoma dzwonkami na górze, przytulony jak kolega z pracy. Mina 2: głośna, szeroko otwarte usta, śmieje się w trakcie zdania. Mina 3 (prawie nie kłamie): udaje powagę, kąciki ust walczą z uśmiechem. Mina 4: czysta ulga i radość, szeroki uśmiech.

G04 NOAH REYES: 42 lata, policjant po służbie. Przemoczony ciemny płaszcz, kropelki wody w krótkich włosach, spokojne zmęczone oczy, twarz człowieka, który słucha więcej, niż mówi. Rekwizyt: mały wgnieciony notes na spirali, trzymany równo, jak do kładzenia na ladzie. Mina 2: powtarza cudze słowa, jedna brew lekko w górze. Mina 3 (nie kłamie, tylko pomija): spojrzenie wprost, ale usta zamknięte o ułamek za wcześnie, jakby ugryzł się w język. Mina 4: cichy gniew, szczęka zaciśnięta, bez podnoszenia głosu.

G05 GUS PELL: 55 lat, mężczyzna w szlafroku. Nieogolony, zmierzwione siwiejące włosy, zapadnięte oczy człowieka, który nie spał, ciągle się rozgląda. Pod starym płaszczem widać wypchany szlafrok z frotte i pasek. Rekwizyt: wytarty portfel na zatrzask, ściskany oburącz. Mina 2: mówi szeptem, głowa wciągnięta w ramiona. Mina 3: zerka na boki, czy nikt nie słucha, uśmiech jak z przymusu. Mina 4: strach graniczący z ulgą, oczy mokre, usta drżą.

G06 ADA VALE: 10 lat, dziewczynka. Chuda buzia, duże poważne oczy, czapka zsunięta na oczy, wyraźna żółta peleryna z kapturem (żółć oddaj jako jasną plamę światła z drobnymi nacięciami), warkocz wystający spod czapki. Rekwizyt: pluszowy szary królik z jednym uchem doszytym grubą nitką, trzymany mocno przy brodzie, mały dziurawy nos. Mina 2: mówi dosłownie, po dziecięcemu, z palcem uniesionym. Mina 3: nie kłamie, ale oczy uciekają, szepcze, przyciska królika do ust. Mina 4: strach i duma naraz, oczy wielkie, broda do góry. Dziecko ma wyglądać jak dziecko z reportażu, bez przesady, bez strasznej miny.

G07 LEO MARSH: 46 lat, konduktor tramwajowy. Okrągła ciepła twarz, wąsik, wytarta służbowa czapka, okulary zawieszone na sznurku na szyi, brzuszek pod kurtką. Rekwizyt: mosiężny zegarek kieszonkowy z łańcuszkiem, trzymany na otwartej dłoni; drugą rękę trzyma uniesioną jak do spojrzenia na nadgarstek, na którym nie ma zegarka. Mina 2: żartuje, mruży oczy, prawie się śmieje. Mina 3: patrzy na pusty nadgarstek zamiast na rozmówcę. Mina 4: wzruszenie, oczy szkliste, usta się uśmiechają i drżą.

G08 KIT NAVARRO: 17 lat, praktykant w kopiarni. Chuda twarz, krzywy sarkastyczny uśmiech, nieułożone włosy, plamy tonera na rękawie bluzy, kolczyk w uchu. Rekwizyt: czarne słuchawki nauszne zawieszone na szyi z małą naklejką kota w kasku (sam symbol, bez liter). Mina 2: mówi z boku ust, wzrok w sufit. Mina 3: unika wzroku, zerka na drzwi, udaje luz. Mina 4: strach, że szef się dowie, oczy szeroko, usta rozchylone, bez sarkazmu.

G09 NORA VANCE: 39 lat, przedstawicielka lokatorów. Krótko przystrzyżone włosy, ostre rysy, ciemna marynarka pod kurtką przeciwdeszczową, rękawiczki z odciętymi palcami, uważne rzeczowe spojrzenie. Rekwizyt: jedna dłoń z uniesionymi palcami, jakby liczyła punkty (rzecz, osoba, skutek), druga trzyma cienką teczkę z gumką. Mina 2: mówi spokojnie, liczy na palcach. Mina 3: nie lubi kłamać, więc mówi zbyt precyzyjnie, wzrok ostry i nieruchomy. Mina 4: zawzięta determinacja, usta w cienką kreskę, oczy mokre ze złości.

G10 BREE HALM: 29 lat, kobieta w dresie. Pewna siebie, wysoki kucyk, dres z rozpiętą bluzą, chytry uśmiech, srebrny kolczyk, spojrzenie człowieka, który ma na wszystko paragon. Rekwizyt: srebrny analogowy aparat z wgnieceniem w lewym rogu w jednej dłoni, w drugiej wymachuje złożonym paragonem (puste pola). Mina 2: szybko, z gestem, brwi w górze. Mina 3: uśmiech zbyt szeroki, zbyt długo patrzy w oczy. Mina 4: zaskoczenie, że ktoś jej nie wierzy, maska pewności pęka.

G11 MAREK STAHL: około 50 lat, tajemniczy gość. Szary filcowy kapelusz z ciemną wstążką noszony na głowie (rondo rzuca cień na górę twarzy, pod nim gładka łysa skroń), gęste przystrzyżone wąsy, gładko ogolone policzki, szary płaszcz zapięty pod szyję. Zbyt starannie przygotowany, uprzejmy jak urzędnik. Rekwizyt: brak, dłonie złożone z przodu jak na lekcji. Mina 2: recytuje, usta wyraźnie artykułują. Mina 3: uprzejmy uśmiech pozostaje na twarzy, ale oczy patrzą zimno i nieruchomo. Mina 4: zaskoczenie, szybko opanowane, tylko jedna brew drgnęła.

G12 VERA KOVACS: 62 lata, pracownica zaplecza tramwajowego. Siwe włosy związane gumką, ostra żylasta twarz, kombinezon z wytartymi kolanami, pęk kluczy przy pasie. Rekwizyt: blaszane pudełko zapinane na sprzączkę, trzymane obiema rękami przy brzuchu, klucze wiszą w kadrze. Mina 2: wylicza, palec w górze, usta w ruchu. Mina 3: wstyd, wzrok w dół i w bok, ręka zaciska się na kluczach. Mina 4: ciężki smutek, głowa lekko opuszczona, oczy pod rzęsami.

G13 DARIO RUIZ: 29 lat, motorniczy. Okrągła pogodna twarz, cień zarostu, kurtka motorniczego, worki pod oczami od nocnych zmian, ciepły uśmiech. Rekwizyt: gruby zeszyt grafiku w tłustej okładce z gumką w jednej dłoni, w drugiej kanapka w papierze wyciągnięta do przodu jak poczęstunek. Mina 2: mówi z pełnymi policzkami, żartuje. Mina 3: żartuje za głośno, żeby przykryć troskę, oczy uciekają. Mina 4: poważna troska o kogoś, brwi ściągnięte, kanapka opuszczona.

G14 MAYA DOYLE: 34 lata, elektryczka. Krótko obcięte czarne włosy, precyzyjne spokojne spojrzenie, płaszcz z rękawami za długimi, widoczny blady ślad po obrączce na palcu. Rekwizyt: czarny pokrowiec na okulary ze zszytą gumką, trzymany w dwóch palcach jak bezpiecznik. Mina 2: mówi wolno, liczy w myślach do trzech. Mina 3: nie kłamie, tylko ukrywa plan: wzrok spokojny, ale usta lekko przymknięte, kąciki nieruchome. Mina 4: rzadkie wzruszenie, dolna warga drży, oczy błyszczą.

G15 GRACE OKOYE: 35 lat, pielęgniarka z nocnej zmiany. Ciemna skóra (światło tylko na kościach policzkowych, czole, nosie), krótkie naturalne loki, bardzo zmęczone oczy z cieniami, kitel pod rozpiętym płaszczem, smycz z kartą identyfikacyjną na szyi (karta bez napisów). Rekwizyt: granatowa torebka na ramię, trzymana pod pachą. Mina 2: mówi krótko, rzeczowo, z lekkim cierpkim uśmiechem. Mina 3: oczy uciekają do zegara, usta mówią „to zakupy”. Mina 4: ulga i wyczerpanie, powieki opadają.

G16 LINH TRAN: 33 lata, matka, klientka Skrytki. Szczupła, bardzo cicha, włosy przeczesane na bok, wypłowiały szal, oczy dużej uwagi i dużego strachu. Rekwizyt: drewniana pozytywka z gwiazdką na wieczku, trzymana przy piersi jak dziecko. Mina 2: mówi bardzo cicho, usta ledwo się otwierają. Mina 3: „w środku nic nie ma”, wzrok w dół, ramiona sztywne. Mina 4: ulga i strach razem, oczy mokre, usta zaciśnięte, żeby nie płakać.

G17 ELIAS WREN: 73 lata, emeryt. Szerokie grube okulary, zbyt duży płaszcz zwisający z ramion, rzadkie siwe włosy zaczesane na bok, staroświecka uprzejmość w twarzy. Rekwizyt: papierowy numerek złożony w ciasny prostokąt, trzymany w palcach jak bilet. Mina 2: mówi powoli, uprzejmie, z lekkim ukłonem głowy. Mina 3: uprzejmy uśmiech zasłania wstyd, wzrok spuszczony. Mina 4: pierwszy raz rozumie coś ważnego, oczy szeroko za szkłami, usta lekko otwarte.

G18 ODILE FABER: 68 lat, babcia. Okrągła rumiana twarz, głęboki śmiech, siwe loki pod beretem, wydatne policzki, widać że brakuje jej zębów (uśmiech wciągnięty). Rekwizyt: pudełko po herbatnikach z okrągłym wzorem na wieku, trzymane pod pachą. Mina 2: głośno, plotkarsko, pochylona jakby szeptała na cały korytarz. Mina 3: zbyt niewinne oczy, „jechałam z biletem”. Mina 4: radość z powodu ślubu wnuczki, ale łzy w kącikach oczu.

G19 BILLIE CROSS: 16 lat, nastolatka na hulajnodze. Szczupła buzia, grzywka na czoło, luźna bluza, wygłupia się mimiką, pod bluzą widać kolano ochraniacza. Rekwizyt: kask z naklejkami w pandy (same kształty zwierzaków, bez liter) pod ramieniem. Mina 2: „no weź”, oczy wywrócone, usta szeroko. Mina 3: udaje dorosłą, brodę do przodu, ale oczy uciekają. Mina 4: strach, że wyda się wagarowanie, z udawanym żartem na ustach.

G20 SAM HOLT: 44 lata, pracownik portu, poprzednik. Zapadnięte policzki, zmęczone oczy, bluza z kapturem pod starą kurtką roboczą, blady pasek skóry na nadgarstku po zegarku, rzadko się uśmiecha. Rekwizyt: szary termos z pokrywką, trzymany jak coś cennego, drugą ręką pokazuje klucz. Mina 2: mówi technicznie, krótko, palec wskazuje szczegół. Mina 3: nie kłamie, tylko zasłania się szczegółami: patrzy na termos zamiast na rozmówcę. Mina 4: ciężka ulga i wina, oczy mokre, wzrok w bok.

G21 PRUITT: 80 lat, emeryt. Drobny, pogodny, gęste białe brwi, prosty ciepły uśmiech, kapelusz nasunięty do tyłu, kurtka z kołnierzem. Rekwizyt: na przedramieniu jedenaście parasoli powieszonych za rączki jak gałęzie. Mina 2: powoli, z uśmiechem, upewnia się: „wszystko w porządku, prawda?”. Mina 3: nie kłamie, ale spojrzenie błądzi, jakby szukał kogoś za drzwiami. Mina 4: ukryta samotność, uśmiech zostaje, ale oczy smutne.

G22 DORIAN LUND: 45 lat, klient Skrytki. Wysoki, przygarbiony, siwiejąca broda, kurtka z podniesionym kołnierzem, wzrok człowieka, który nie śpi. Rekwizyt: kaseta magnetofonowa trzymana w palcach jak karta, drugą ręką naciąga kaptur/kołnierz. Mina 2: mówi półgłosem, zerka na drzwi. Mina 3: „przechowajcie do soboty”, uśmiech za krótki. Mina 4: strach, który próbuje przykryć uprzejmością.

G23 SYLVIA OKAFOR: 52 lata, nauczycielka. Ciemna skóra (światło na kościach policzkowych i czole), krótkie siwiejące włosy, okulary na łańcuszku, spokojne ironiczne spojrzenie, kardigan z łatami na łokciach. Rekwizyt: składana szachownica pod pachą, w drugiej dłoni mały hetman (figura szachowa) trzymany jak monetę. Mina 2: mówi cierpliwie, jakby tłumaczyła dzieciom, brew w górze. Mina 3: nie kłamie, tylko mruży oczy z lekkim żartem. Mina 4: rozbawienie, szczery śmiech z odrzuconą głową.

G24 HUGO LANG: 40 lat, hydraulik. Szeroka, mocna budowa, brudny nos, robocza kurtka, czapka robotnicza, zmęczony nerwowy uśmiech. Rekwizyt: składana wędka na ramieniu jak na wyprawie (alibi), z kieszeni kurtki wystaje talia kart. Mina 2: mówi z gestem, jakby tłumaczył rybę wielkości ręki. Mina 3: kłamie tak niezdarnie, że sam się uśmiecha, wzrok w sufit. Mina 4: panika, że żona się dowie, oczy szeroko.

G25 KOFI MENSAH: 26 lat, kurier rowerowy. Ciemna skóra (światło na kościach policzkowych, czole, nosie), krótkie włosy, opaska odblaskowa na czole, torba kurierska przez ramię, zmęczone ostrożne oczy. Rekwizyt: powerbank z kablem owiniętym wokół dłoni. Mina 2: mówi szybko i rzeczowo. Mina 3: nie kłamie, ale waha się, spojrzenie ucieka na trasę, której nie chce nazwać. Mina 4: ciężka świadomość, że coś zawiózł nieświadomie, szczęka zaciśnięta.

G26 PRIYA NAIR: 31 lat, panna młoda w pośpiechu. Upięte wysoko włosy z kilkoma wsuwkami i jednym luźnym kosmykiem, szal na ramionach, wyrazista twarz z cieniem makijażu rozmazanego od biegu, nerwowy uśmiech. Rekwizyt: jedna dłoń zaciska rączkę walizki, widać fragment białej koronki wystający z zamka. Mina 2: mówi szybko, zdyszana, o godzinie. Mina 3: nie kłamie, ale rozgląda się na zegar, usta zaciśnięte. Mina 4: radość pomieszana z paniką, oczy szeroko, uśmiech i drżąca warga naraz.
```

## BLOK 3 (opcjonalny): S01 kolejka statystów

Ośmiu różnych ludzi z poczekalni do losowych wizyt w dniach bez głównego gościa. Układ inny niż wyżej, więc wklej to jako **osobną** wiadomość (nowy czat nie jest potrzebny), z tymi samymi referencjami.

```
S01 KOLEJKA: obraz poziomy 1536x1024, tło czysta czerń, ten sam styl linorytu co w poprzednich obrazach. Osiem różnych popiersi (od głowy po pas) w dwóch rzędach po cztery, wszystkie w minie neutralnej, między popiersiami czarny odstęp, nic nie dotyka krawędzi. Osiem zupełnie różnych ludzi: 1 mężczyzna w kaszkiecie z wąsami i siatką zakupów, 2 młoda kobieta ze słuchawkami na szyi i plecakiem, 3 starsza kobieta w chuście z koszykiem wiklinowym, 4 mężczyzna w garniturze z teczką i zmęczoną twarzą, 5 chłopiec w czapce z daszkiem z hulajnogą pod pachą, 6 kobieta w mundurze sprzątaczki z wiadrem, 7 siwy mężczyzna w okularach z laską, 8 kobieta w płaszczu z walizką na kółkach. Różne wieki i odcienie skóry (ciemniejsza skóra to więcej czerni w twarzy, światło tylko na kościach policzkowych i nosie). Bez tekstu i bez smugi pomarańczu w tle.
```

---

## Mapa postaci → pliki → dialogi (dla wątku, który wpina grafiki)

Plik `B1`–`B6` już istnieją i **nie są generowane ponownie**. Klucz z kolumny „klucz w grze” to nazwa przedrostka `<klucz>_<mina>.jpg` po cięciu.

| Plik | klucz w grze | Osoba | ID dialogów (dzień) |
|---|---|---|---|
| B1-wdowiec | `wdowiec` | Thomas Ward, 71 | d1_thomas (1), wraca w 24 |
| B2-chlopak | `chlopak` | Jonah Pike, 22 | d2_jonah (2), wraca w 22 |
| B3-maz | `maz` | Evan Doyle, 37 | d3_maz_i_siostra (3), d7_evan (7), 17 |
| B4-siostra | `siostra` | Lena Brandt, 31 | d3_maz_i_siostra (3), d8_lena_i_nora (8), 16, 21 |
| B5-dama-z-koperta | `dama` | Iris Bell, 56 | d4_iris (4), d9_iris (9), d12_iris_nora (12), 18, 23 |
| B6-inspektor | `inspektor` | Victor Crane, 51 | d5_victor (5), d9_iris (9), 15, 20, 23, 25 |
| G01-rosa | `rosa` | Rosa Vale, 33 | d1_rosa (1), wraca w 23 |
| G02-hana | `hana` | Hana Moreau, 26 | d2_hana (2) |
| G03-dana | `dana` | Dana Ruiz, 38 | d3_dana (3) |
| G04-noah | `noah` | Noah Reyes, 42 | d5_noah (5), d14_noah (14), 10, 22 |
| G05-gus | `gus` | Gus Pell, 55 | d5_gus (5) |
| G06-ada | `ada` | Ada Vale, 10 | d6_ada (6), d12_iris_nora (12), 19 |
| G07-leo | `leo` | Leo Marsh, 46 | d6_leo (6), 13, 19, 24 |
| G08-kit | `kit` | Kit Navarro, 17 | d7_kit (7) |
| G09-nora | `nora` | Nora Vance, 39 | d8_lena_i_nora (8), d12_iris_nora (12), 18, 23, 24 |
| G10-bree | `bree` | Bree Halm, 29 | d8_bree (8) |
| G11-stahl | `stahl` | Marek Stahl, ok. 50 | d9_stahl (9), tło w 5 i 17, 22 |
| G12-vera | `vera` | Vera Kovacs, 62 | d10_vera (10), 13, 15, 24 |
| G13-dario | `dario` | Dario Ruiz, 29 | d10_dario (10) |
| G14-maya | `maya` | Maya Doyle, 34 | d11_maya (11), 16, 21 |
| G15-grace | `grace` | Grace Okoye, 35 | d11_grace (11), 23 |
| G16-linh | `linh` | Linh Tran, 33 | d12_linh (12) |
| G17-elias | `elias` | Elias Wren, 73 | d13_elias (13), tło w 1–25, 20, 25 |
| G18-odile | `odile` | Odile Faber, 68 | d13_odile (13) |
| G19-billie | `billie` | Billie Cross, 16 | d14_billie (14) |
| G20-sam | `sam` | Sam Holt, 44 | d15_sam (15), 20, 24, 25 |
| G21-pruitt | `pruitt` | Pruitt, 80 | d15_pruitt (15) |
| G22-dorian | `dorian` | Dorian Lund, 45 | dzień 16 (dialog w toku, wg wzoru d16_dorian) |
| G23-sylvia | `sylvia` | Sylvia Okafor, 52 | dzień 17 (d17_sylvia) |
| G24-hugo | `hugo` | Hugo Lang, 40 | dzień 18 (d18_hugo) |
| G25-kofi | `kofi` | Kofi Mensah, 26 | dzień 19 (d19_kofi) |
| G26-priya | `priya` | Priya Nair, 31 | dzień 21 (d21_priya) |
| S01-kolejka | `kolejka` | statyści (8 twarzy, 4x2, jedna mina) | losowe wizyty tła |

Dialogi dni 16-25 nie są jeszcze w repo (plik `okienko_rozmowy_v3_dni11-25.md` kończy się na dniu 15), więc ID G22–G26 są wzorcowe. Jeśli zmienią się imiona, zmienia się tylko klucz w tej tabeli.

## Uwagi do wątku gry

- **Spójność z fabułą.** Stahl ma kapelusz **na głowie**, bo gracz ma go rozpoznać w dniu 17 po „szarym kapeluszu” (fabuła v2, Q8). Elias, Ada i Maya są opisani wg tabeli obsady (`okienko_obsada_i_kalendarz.md`). Nic w promptach nie zdradza zwrotu „Fotel”.
- **Rekwizyty bez koloru.** Wszystko, co w dialogach ma kolor (zielona naklejka na futerale, żółta peleryna Ady), jest w promptach przełożone na światło i fakturę, bo gra ma tylko czerń, krem i pomarańcz lampy.
- **Echo w twarzy.** Mina 4 jest zaprojektowana pod ekran „echo”: powracający goście (Evan, Iris, Elias) pokazują ją, gdy gracz ich skrzywdził lub uratował.
- **Znane potknięcia generatora** (z `styl_linoryt_sodowy.md`): sepia, kopiowanie pomarańczowej smugi z referencji, dryf twarzy po kilkunastu obrazach. Przy takiej wpadce wygeneruj tylko ten numer jeszcze raz (z dopiskiem „bez sepii, bez smugi w tle”).
- **Kontrola po wygenerowaniu** (30 sekund na obraz): cztery kolumny równe i bez nakładania, ta sama osoba we wszystkich czterech, brak tekstu, pomarańcz tylko jako drobne odblaski, mina 3 różni się od 1 samym spojrzeniem.
