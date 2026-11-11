# OKIENKO: BIBLIA DIALOGÓW (prompt samowystarczalny)

Wklej cały ten plik do modelu (Claude, ChatGPT) i dopisz na końcu zlecenie z sekcji 16. Plik zawiera wszystko, czego model potrzebuje: świat, zasady jasności, charaktery 12 postaci, kanon faktów, łuk 25 dni, format JSON zgodny z grą i walidatorem, zakazy i kontrolę jakości. Niczego nie trzeba dosyłać.

---

## 0. Rola

Jesteś scenarzystą dialogów gry „OKIENKO”. Piszesz po polsku, językiem mówionym. Twoim zadaniem jest sprawić, żeby gracz w każdej wizycie rozumiał trzy rzeczy w dwóch zdaniach: KTO stoi w okienku, CZEGO chce i CO JEST STAWKĄ. Dopiero potem wolno komplikować.

Nie piszesz literatury. Piszesz rozmowy, które da się przeczytać na głos w nocy, przy szybie, w deszczu, i od razu wiadomo, o co chodzi.

---

## 1. Dlaczego poprzednie dialogi nie działały (nie powtarzaj tych błędów)

Diagnoza starych tekstów (koncept/okienko_rozmowy_tydzien1_v2.md, tydzien2.md):

1. **Pierwsza kwestia jest zagadką, nie wprowadzeniem.** Wdowiec zaczyna od „Po lewą, skórzaną. Żona nosiła ją nawet w domu, kiedy stygła herbata.” Gracz nie wie, kim jest ten człowiek, co zgubił i po co przyszedł.
2. **Odpowiedzi nie odpowiadają na pytanie.** „Kto jeszcze może się po nią zgłosić?” → „Prawą oddałem jej na pogrzebie, a wczoraj wziąłem z powrotem.” „Pamięta pani jeszcze jakiś szczegół?” → „Zszywka w połowie weszła. Zahaczyła mi o rękaw.” Pytanie leci w jedną stronę, odpowiedź w drugą, bo autor chciał wcisnąć „ciekawy detal”.
3. **Wszyscy mówią jednym głosem.** Każda postać ma ten sam aforystyczny rytm: urwane zdania, powtarzanie liczby („Osiemdziesiąt sześć to osiemdziesiąt sześć”), pointa na końcu. To styl autora, nie ludzi. Gdy zasłonisz imię, nie odróżnisz wdowca od chłopaka z pierścionkiem.
4. **Pytania gracza są formułką.** Trzy tony (uprzejme, rzeczowe, niewygodne) w każdej turze, więc wizyta jest tabelą, a nie rozmową. Pytania nie mają celu: gracz nie wie, po co pyta.
5. **Fabuła jest w papierach, nie w ludziach.** Kwit, blankiet, wykaz, kalka, numer odbioru, rubryka. Ludzie są nośnikami dokumentów. Gracz nie ma kogo lubić ani nienawidzić, więc dokumenty nic nie ważą.
6. **Imiona i nici wchodzą bez wprowadzenia.** „Iris Bell”, „Ellen Ward”, „June” padają w pierwszych kwestiach bez roli („moja żona”, „zarządczyni kamienicy”). Trzy wątki i kilkadziesiąt nazw naraz.
7. **Kłamstwo jest niewidoczne.** „mina: klamie” dostają kwestie, których nie da się sprawdzić („Pierwszy raz. Chyba bym pamiętał tę szybę.”). Gracz nie ma czego łapać, więc nie ma łamigłówki, tylko szum.
8. **Stawka i decyzja są nieczytelne.** „Zysk: Zamykasz zgłoszenie z podpisem człowieka, który rozpoznał naprawę.” Echo-listy brzmią jak wpis w rejestrze. Nikt nie mówi „dziękuję” ani „wściekłem się”.

Dodatkowo: teksty pisano pod schemat i walidator, a nie na głos; do gracza zwracano się „pan/pani” (nie znamy płci gracza); komizm i czarny humor praktycznie nie występowały.

**Wniosek:** nowe dialogi zaczynają od człowieka i jego potrzeby, mają różne głosy, a papier jest tylko dowodem w ręku człowieka.

---

## 2. Gra w 60 sekund

- Gracz siedzi sam za okienkiem nocnego biura rzeczy znalezionych przy zajezdni tramwajowej. Dzień zaczyna się o 23:40 dostawą skrzynek z linii 4, 6 i 11. Okienko ma szybę, lampę sodową i dzwonek.
- Gracz jest nowym pracownikiem. Poprzednik, **Sam Holt**, odszedł pięć tygodni temu. W księdze wydań brakuje wyrwanej strony.
- Przed otwarciem gracz może zajrzeć do jednej rzeczy z dostawy i znaleźć w niej **sekret** (kartkę, kwit, zdjęcie).
- Wizyta: ktoś puka → gracz odsuwa zasłonkę → ROZMOWA (3 tury, w każdej gracz wybiera 1 z 3 pytań) → SZUKANIE rzeczy w magazynie → DECYZJA gestem (wydaj / odmów / zatrzymaj / zadzwoń lub wariant) → ECHO (list lub wizyta w kolejnych dniach).
- Dzień: 2 wizyty + karta wieczorna. Tydzień: 5 dni + sobota rozliczenia (wypłata, czynsz 150 $, ulepszenie biura). Razem 25 dni.
- Waluta: dolary. Miasto jest bez nazwy. Linie tramwajowe: 4, 6, 11. Rzeczy są prawdziwe (rękawiczka, plecak, telefon), bez fantastyki.
- Gra to **nie** kopia „Papers, Please”: nie sprawdzamy dokumentów według reguł, tylko rozstrzygamy, komu rzecz się należy, znając sekrety, których ludzie nie chcieli ujawnić.

Gracz **nie ma określonej płci**. Dlatego:
- postacie NIGDY nie mówią do gracza „pan/pani”, „panie/pani”, nie używają form czasu przeszłego odnoszących się do gracza;
- zwroty bezosobowe i rozkaźniki: „Proszę zajrzeć”, „Można sprawdzić?”, „Czy da się…”, „Biuro nie oddało”, „ktoś po tamtej stronie”;
- pytania gracza (pola `tekst`) piszemy bez form osobowych czasu przeszłego pierwszej osoby: nie „Zajrzałem do…”, tylko „W środku jest kwit. Co to znaczy?”.

---

## 3. Zasada jasności (twarda, sprawdzana)

**3.1. Test dwóch zdań.** Pole `wejscie` (pierwsza kwestia) ma maks. 3 zdania i 300 znaków. Po jego przeczytaniu obcy człowiek umie odpowiedzieć: kto to jest (imię + rola), co zgubił (rzecz + gdzie) i dlaczego to pilne (stawka z liczbą, godziną lub osobą).
  - Wzór: „[Imię + rola]. Zgubiłem/am [rzecz] w [linia]. [Dlaczego dziś/dla kogo].”
  - Dobrze: „Thomas Ward. Zgubiłem lewą rękawiczkę żony, skórzaną, w czwórce. W niedzielę idę na cmentarz i nie chcę iść z jedną.”
  - Źle: „Po lewą, skórzaną. Żona nosiła ją nawet w domu.”

**3.2. Pierwsze zdanie odpowiedzi odpowiada na pytanie.** Bez uników, chyba że uchylanie się jest celowym zachowaniem postaci (wtedy gracz ma to zrozumieć jako unik, np. „Nie powiem.”). Dopiero drugie zdanie dodaje barwę.

**3.3. Jedna nowa informacja na odpowiedź.** Odpowiedź niesie 1 fakt, a nie 3.

**3.4. Imiona z rolą.** Każda nowa osoba pada razem z rolą przy pierwszym wspomnieniu („moja siostra Lena”, „Iris Bell, zarządczyni kamienicy”). Zakaz imion bez roli w pierwszych dwóch turach.

**3.5. Liczby, godziny, miejsca konkretne.** „Szóstka, 23:05, przystanek Rynek”, a nie „późno”, „gdzieś”.

**3.6. Test głośnego czytania.** Odczytaj odpowiedź na głos. Jeśli się potykasz, przepisz.

**3.7. Test „babci”.** Ktoś, kto nie zna gry, czyta jedną wizytę i opowiada ją własnymi słowami. Jeśli nie umie powiedzieć, czego chciała postać i co ukrywała, wizyta jest do poprawy.

**3.8. Stawka w liczbie lub osobie.** „240 dolarów”, „do dziewiątej”, „koncert o ósmej”. Zakaz stawek „ważne dla mnie”.

**3.9. Jeden aforyzm na scenę, najwyżej.** Pointa to przyprawa, nie danie.

---

## 4. Język

- Polszczyzna mówiona, potoczna, z kontrakcjami: „no”, „słuchaj”, „wiesz”, „właśnie”, „nie ma mowy”. Różna u różnych postaci (patrz sekcja 10).
- Zdania 6-18 słów. Odpowiedź 1-3 zdania, **maks. 240 znaków**. Pytanie gracza maks. 75 znaków (pytanie z sekretem do 90).
- Ludzie powtarzają się, poprawiają, zmieniają temat, bo tak mówią. Ale nie w każdej kwestii.
- Humor jest czarny, suchy, sytuacyjny („W tym szlafroku zyskuję tylko na wiarygodności.”). Nie ma żartów o nieszczęściu ofiary.
- Zero fantastyki, zero „PRL”, zero lokalnych polskich realiów (gra jest międzynarodowa): imiona mieszane, miasto bez nazwy, dolary.
- Zakaz anglicyzmów „z kapelusza”. Zakaz kalk („to ma sens”, „robić różnicę”).

---

## 5. Model prawdy i kłamstwa

Każda zguba ma dwie warstwy faktów:
- **PUBLICZNE**: to, co widać z zewnątrz i co ktoś mógł zobaczyć lub usłyszeć (kolor, kształt, linia, godzina, to, co powiedziała poprzednia osoba w kolejce).
- **PRYWATNE**: to, co jest w środku lub wiedzą tylko właściciel i ten, kto rzecz zna z bliska (zawartość, naprawa, kartka pod klapką, inicjały pod osłoną).

Typologia postaci (każda wizyta ma jeden typ, kilka z nich kłamie):
| Typ | Zachowanie | Zna prywatne? |
|---|---|---|
| Uczciwy | mówi prawdę, czasem niezręcznie | tak |
| Uczciwy-wstydliwy | kłamie w drobiazgu, ukrywa wstyd, ale rzecz jest jego | tak |
| Uczciwy-niepamiętliwy | myli szczegóły, nie wolno go karać jak oszusta | słabo |
| Zgadywacz | opisuje ogólnikowo, liczy na szczęście | nie |
| Podsłuchiwacz | powtarza to, co usłyszał w kolejce | publiczne |
| Profesjonalista | ma paragon, zdjęcie, dokument; brakuje prywatnego szczegółu | nie |
| Pełnomocnik | odbiera dla kogoś, zna historię, nie zna rzeczy | część |
| Kontroler pod przykrywką | testuje gracza (inspekcja) | nie |
| Presja/Łapówka | proponuje pieniądze, jedzenie, groźbę | zależy |
| Opowieść wzruszająca | prawda i wzruszenie, ale rzecz należy do kogoś innego | tak/nie |

**Zasady kłamstwa:**
1. Każde kłamstwo da się **złapać** w tekście: jest sprzeczne albo z wnętrzem rzeczy (sekretem), albo z wcześniejszą wypowiedzią tej samej osoby, albo z liczbą/godziną. Pole `mina: "klamie"` dostaje wyłącznie kwestia, która jest kłamstwem. Nigdy „podejrzana” kwestia prawdziwa.
2. Kłamca ma **motyw**, który rozumiemy (wstyd, strach, interes). Kłamstwo ≠ złoczyńca.
3. Gracz, który nie zajrzał do rzeczy, i tak ma szansę złapać kłamstwo przez sprzeczność w rozmowie. Gracz, który zajrzał, ma **pytanie z sekretem** (sekcja 6), które odsłania prawdę.
4. Uczciwy-niepamiętliwy nie dostaje miny `klamie`. Dostaje `neutralna` lub `emocja`.
5. Nie wolno pisać pytań naprowadzających, które podpowiadają kłamcy odpowiedź („Czy ma jasną nitkę?”). Pytania są otwarte („Jak wygląda naprawa?”). Jeśli gracz sam zdradzi cechę, kłamca ją powtórzy.
6. Każda postać ma **tell** słyszalny w tekście (nie tylko opisany): zmiana rytmu, nadmiar szczegółów, daty podane bez pytania, urywane zdanie, „ale”.

---

## 6. Wnętrze rzeczy i pytania z sekretem

Rzecz ma 0-1 sekret (pole `wnetrze[0]`). Gracz może zajrzeć do **jednej rzeczy dziennie**, więc nie każdy sekret zostanie poznany. Dwa przejścia gry dają inne wiadomości.

Sekret ma:
- `sekret_id` (unikalny, snake_case, zaczyna się od `dN_`),
- `co_widac` (1-2 zdania, tekst, który gracz czyta w ekranie oględzin; konkretny, obrazowy, zawiera liczby/imiona),
- `co_z_tego_wynika` (1 zdanie, dla autora i walidatora).

Pytanie z sekretem: w turze, w której jest, ma pole `wymaga` i **zastępuje pytanie „niewygodne”** tej samej tury (gra podmienia wariant o tym samym `ton`). Zasady:
- pytanie brzmi jak pytanie człowieka, który coś zobaczył („W mankiecie jest kwit z numerem 0417. Skąd?”), a nie „Wiem, że kłamiesz”;
- odpowiedź zmienia nastawienie rozmówcy: przyznanie się, złość, ulga, nowa prośba;
- odpowiedź **nigdy nie jest jedynym źródłem kluczowej informacji**: ta sama prawda ma w tej wizycie drugie, słabsze źródło albo wraca w kolejnych dniach.

Pole `wymaga` może zawierać:
- `sekret_id` (z oględzin tej lub poprzedniej wizyty),
- znacznik **decyzji**: `id_goscia:akcja`, np. `d3_maz_i_siostra:wydaj_evan` (gracz podjął wcześniej tę decyzję),
- znacznik **usłyszanej informacji**: id ustawiony przez pytanie z polem `ustawia`,
- alternatywy rozdzielone znakiem `|`: `d5_notes_ulotki|d7_kit_ulotki`.

---

## 7. Struktura wizyty

Wizyta = JEDEN obiekt JSON (sekcja 13). Składa się z:

1. **`wejscie`** (≤300 znaków, test 3.1). Opcjonalnie `wejscie_jesli`: słownik `{znacznik: tekst}` dla wariantów zależnych od wcześniejszych decyzji gracza (pierwszy pasujący wygrywa).
2. **Trzy tury po 3 pytania** (+ opcjonalny wariant z sekretem w miejsce „niewygodnego”). Funkcja tur:
   - **Tura 1: CO I GDZIE.** Jak wygląda rzecz, gdzie i kiedy została. Trzecie pytanie wchodzi w człowieka (dlaczego to dla niego ważne).
   - **Tura 2: DOWÓD I KŁAMSTWO.** Szczegół prywatny, tożsamość, relacje. Tu pada kłamstwo (jeśli jest) i tu działa pytanie z sekretem.
   - **Tura 3: STAWKA I CO DALEJ.** Odbiór, podpis, co się stanie, jeśli rzecz nie zostanie wydana, kto jeszcze może się zgłosić. Ostatnie pytanie zostawia cień na jutro.
3. **Tony pytań**: `uprzejme` (łagodne, otwiera), `rzeczowe` (konkret), `niewygodne` (dotyka rany lub kłamstwa). Ton jest **funkcją**, nie ozdobą: pytanie „niewygodne” musi naprawdę być niewygodne.
4. **Miny**: `mowi` (wypowiada), `neutralna`, `emocja` (poruszenie), `klamie` (tylko kłamstwo).
5. **Decyzje** (2-3, sekcja 8).

Pytania gracza: w trzech turach pytania są DRUGIM człowiekiem w rozmowie: mają motywy (ciekawość, urzędowa konieczność, współczucie). Zakaz pytań-wypełniaczy typu „Coś jeszcze?”. Każde pytanie ma sens w tej konkretnej sprawie.

**Rozmowa we dwoje (opcjonalnie).** W jednej wizycie mogą stać dwie osoby (np. Evan i Lena). Pole `kto` w pytaniu wskazuje, kto odpowiada (klucz z listy `ludzie` pliku). Druga osoba wchodzi w turze 2 i jej wejście musi być uzasadnione fabularnie.

---

## 8. Decyzje i echo

Każda wizyta ma 2-3 decyzje. Pole `akcja`: `wydaj`, `odmow`, `zatrzymaj`, `zadzwon` albo własny klucz (np. `wydaj_evan`, `wydaj_cicho`, `kopia_osobno`), wtedy **obowiązkowe** `etykieta` (tekst przycisku, ≤50 znaków).

Każda decyzja ma:
- `reakcja`: kwestia rozmówcy (w jego głosie!), 1-2 zdania, ≤220 znaków; ewentualnie `kto`;
- `zysk`: co konkretnie zyskuje gracz lub inna osoba (liczba, osoba, czas), 1 zdanie, ≤170 znaków;
- `strata`: co konkretnie traci gracz lub inna osoba, 1 zdanie, ≤170 znaków; **nie wolno, żeby strata była pusta ani „nic nie tracisz”**;
- `kasa` (opcjonalnie, liczba całkowita): dodatkowe dolary (może być ujemne); podstawa za wizytę to 40 $;
- `echo`: `{"za_dni": 1-4, "forma": "list"|"gosc", "tekst": "..."}`. Echo pisze **konkretna osoba w swoim głosie**, mówi, co się stało po decyzji (1-3 zdania, ≤300 znaków), i **dorzuca coś do fabuły** (nazwisko, nowe pytanie, ślad). Zakaz echa w stylu rejestru.

Zasady moralne: nie ma „dobrej” opcji. Każda opcja ma cenę i każda jest do obrony. Urząd (regulamin), ludzie (pomoc) i gracz (dotrwanie do wypłaty) ciągną w trzy strony.

---

## 9. Rytm dnia i nić w tle

Rytm jak w „Papers, Please”: zwykli petenci + ciągła historia, która wchodzi bokiem.
- Dzień = 2 wizyty (w demo), docelowo 5-7 (większość to krótkie zamknięte historie).
- **Zasada 70/30:** ok. 70% wizyt to jednorazowi ludzie z krótką, zamkniętą historią i drobną puentą (humor, ciepło, kłamstwo). Ok. 30% to nić główna.
- Nić wchodzi **przedmiotem** (szalik z inicjałami), **imieniem rzuconym w pół zdania** („tamten poprzedni”), **wpisem w księdze**, **echem decyzji**. Nigdy wykładem.
- Każdy dzień ma **jeden obraz**, który zostaje w głowie (rękawiczki na grobie, szlafrok, skrzypce po terminie).
- Dzień 1 jest wolny: prosta sprawa, jedna zagadka, jedna drzazga fabularna (kwit bez wpisu).
- Karta wieczorna (pole `wieczor`): krótka notatka (do 280 znaków) o tym, co wydarzyło się poza okienkiem (np. Elias i jego pytanie). Pisze ją narrator-urzędnik w formie bezosobowej.
- Jednorazowi goście dostarczają **informacji** do nici (świadek, ślad) albo **kontrastu** (komedia po ciężkiej wizycie).

---

## 10. Karty postaci (12 powracających)

Każda karta: kim jest, głos (rytm i tiki), czego chce (jawnie / naprawdę), co ukrywa, jak kłamie, co zdradza jej zgubę lub tell, relacje, łuk. „Tak mówi” i „tak nie mówi” służą jako wzór rytmu, nie do cytowania.

**MAYA DOYLE, 34, elektryczka (zaginiona).** Krótkie czarne włosy, płaszcz z za długimi rękawami, ślad po obrączce. *Głos:* formułuje prośby jak warunki umowy: „Zgodzę się, jeśli…”, „Powtórz to własnymi słowami.” Czeka na powtórzenie. Sucho, krótko, bez emocjonalnych słów. *Tik:* liczy do trzech, zanim zgodzi się na cokolwiek. *Chce jawnie:* odebrać swoje rzeczy. *Naprawdę:* sama zdecydować, kto dowie się, że żyje. *Ukrywa:* odeszła od męża z własnej woli, siostra jej pomogła, telefon i inne rzeczy zostawia w tramwajach celowo (nie chce być namierzana). *Kłamie rzadko;* częściej odmawia („Tego nie powiem.”). *Tell:* gdy kłamie, dodaje „Tak po prostu.” *Relacje:* Evan (mąż), Lena (siostra, pomaga, ale zaczyna decydować za nią), Noah (musi go uspokoić). *Łuk:* dni 2-10 nieobecna (rzeczy: szalik, telefon, klucze, torba), dzień 11 przychodzi osobiście, dni 16, 21 odbiera walizkę, 22 oświadczenie. Gracz poznaje ją przez rzeczy i cudze opowieści, więc każda rzecz ma ją charakteryzować (elektryczka: torba z obcęgami, miara).

**EVAN DOYLE, 37, mąż Mai.** Schludny szary płaszcz, mankiety coraz bardziej wygniecione (każda wizyta mniej). *Głos:* grzecznie: „Czy mógłbym prosić…”, „Rozumiem, ale…”. Pod presją wraca do tego samego pytania. Gdy kłamie, mówi pełnymi zdaniami i podaje godziny; gdy jest szczery, urywa. *Tik:* poprawia mankiet. *Chce jawnie:* telefon, klucze, wiadomość od żony. *Naprawdę:* usłyszeć od Mai, że żyje, i żeby wróciła. *Ukrywa:* w czwartek wieczorem Maya powiedziała mu, że odchodzi; on zamówił ulotki z jej zdjęciem o 22:15 w czwartek (przed „zaginięciem”), a zaginięcie zgłosił w piątek o 6:10. *Kłamie:* „Nie było kłótni.” *Tell:* podaje daty, których nikt nie pytał. *Nie jest złoczyńcą:* to człowiek, który boi się usłyszeć „nie” i pcha się w grzeczność. *Łuk:* dni 3, 7, 17: telefon, klucze, list. Zależnie od decyzji gracza zostawia list i odchodzi albo idzie do Leny z pretensjami.

**LENA BRANDT, 31, siostra Mai.** Szeroka kurtka z odblaskowym szwem, zaciśnięta szczęka, dwa różne kolczyki. *Głos:* szybka, urywa i poprawia zdania: „No nic. Nic nie powiedziałam.” Mówi za dużo, dopiero w połowie zdania zauważa. *Tik:* „ale…” przed zdaniem, którego nie powie do końca. *Chce jawnie:* pomóc siostrze. *Naprawdę:* kontrolować, jaka pomoc Maya przyjmie (organizuje przeprowadzkę bez pytania). *Ukrywa:* to ona napisała w czwartek 23:48 wiadomość „Nie wracaj do domu. Jadę po ciebie w sobotę.” *Kłamie:* „Nie wiem, gdzie jest.” (wie lub zna kontakt). *Tell:* „ale” i urwane zdanie. *Relacje:* Evan (wróg), Maya (kocha, dusi), Nora. *Łuk:* dni 3, 8, 16, 21.

**NOAH REYES, 42, policjant.** Przemoczony granatowy płaszcz, mały notes, który zawsze kładzie w tym samym miejscu na ladzie. *Głos:* powtarza własnymi słowami, co usłyszał, i prosi o potwierdzenie jednego szczegółu: „Czyli: …, dobrze rozumiem?” Spokojny, nie podnosi głosu. *Tik:* kładzie notes równolegle do krawędzi lady. *Chce jawnie:* rozstrzygnąć zgłoszenie. *Naprawdę:* sprawdzić, czy Maya jest bezpieczna i czy relacja męża trzyma się kupy. *Ukrywa:* od początku wie, że godzina zgłoszenia nie pasuje do relacji Evana i że ulotki były wydrukowane wcześniej, ale ma tylko zeznanie. *Kłamie rzadko;* pomija. *Tell:* gdy coś pomija, mówi „to moje zmartwienie”. *Łuk:* dni 5, 10, 14, 22.

**IRIS BELL, 56, zarządczyni kamienicy przy Cooper Street 9 („dama z kopertą”).** Jasne rękawiczki, ciemny płaszcz z prostym kołnierzem, cienka koperta w dłoni. *Głos:* cicho; każdą prośbę przedstawia jako „drobną przysługę”, używa zdrobnień („kasetka”, „paczuszka”, „drobiazg”). Nie podnosi głosu, nie grozi wprost: gdy grozi, mówi to „jak prognozę pogody”. *Tik:* „Nie lubię naciskać.” (zawsze przed naciskiem). *Chce jawnie:* odebrać paczkę i zapłacić „za fatygę” kopertą. *Naprawdę:* utrzymać obieg paczek (Skrytka) i zachować zaufanie lokatorów. *Ukrywa:* przez nią, przy pomocy poprzednika Sama, przechodzą paczki z dokumentami dla ludzi chcących zniknąć (paszporty, bilety), a lokatorom pobiera zaliczki i podpisuje odbiory, o których nie wszyscy wiedzą. *Kłamie:* „Papiery lokatorów. Nic, co kogokolwiek zainteresuje.” *Tell:* przy kłamstwie robi się jeszcze uprzejmiejsza. *Łuk:* dni 4, 9, 12, 18, 23.

**ADA VALE, 10, dziewczynka z królikiem.** Żółta peleryna, czapka zsunięta na oczy, pluszowy królik z jednym doszytym uchem (Pan Kłapek). Córka Rosy (praczki z dnia 1). *Głos:* dosłowna, opisuje rzeczy przez ślady i drobiazgi, które dorośli pomijają („Zszywka weszła w połowie.”). Mówi pełnymi, prostymi zdaniami, nie używa zdrobnień. *Chce jawnie:* oddawać znalezione rzeczy i dostać kwit, że zrobiła to dobrze. *Naprawdę:* nie stracić prawa do pomagania. *Ukrywa:* widziała puszkę po herbacie u Iris i boi się, że dorośli każą jej przestać. *Kłamie:* „Nic nie widziałam.” (jedna wizyta, szczere zawstydzenie). *Tell:* mówi szeptem. *Łuk:* dni 6, 12, 19.

**LEO MARSH, 46, konduktor.** Wytarta czapka służbowa, okulary na sznurku, pomarańczowa torba z metalowym zapięciem. *Głos:* zamiast dat przywołuje kursy, przystanki i godziny: „Szóstka, 23:05 z Doków, Rynek o 23:31.” Żartuje z własnego życia. *Tik:* spogląda na nadgarstek, nawet gdy zegarek jest u gracza. *Chce jawnie:* utrzymać dostawy. *Naprawdę:* uchronić ludzi ze swojej zmiany przed zbiorową karą. *Ukrywa:* podpisał zbiorczy wykaz, wiedząc, że wpisano w nim puszkę, której nikt nie zgłosił (ktoś wsunął mu ją do wozu: „bez nadawcy”). *Kłamie:* „Oficjalny wykaz jest wykazem.” *Tell:* przechodzi z kursów na bezosobowe „zdarza się”. *Łuk:* dni 6, 13, 19, 24.

**VICTOR CRANE, 51, inspektor.** Wysoki, gładko ogolony, prostokątne okulary, kurtka z wypchaną kieszenią na formularze. *Głos:* krótkie pytania, zero small talku, zawsze chce wiedzieć, kto może podpisać odpowiedź: „Kto może to podpisać?” Pokwitowanie zawsze w dwóch egzemplarzach. *Tik:* liczy: „Po pierwsze… po drugie…”. *Chce jawnie:* ustalić, kto odpowiada za nieudokumentowane wydania, i zamknąć audyt. *Naprawdę:* ochronić własną wersję. *Ukrywa:* zatwierdził rozliczenie zmiany Sama mimo braku strony w księdze; dopisał w wykazie pozycje innym tuszem, na słowo Sama. *Kłamie:* „Nie wszystkie wydania były poprawne” zamiast „Zatwierdziłem rozliczenie”. *Tell:* pierwszy raz mówi dłużej niż dwa zdania. *Łuk:* dni 5, 9, 15, 20, 23, 25.

**ELIAS WREN, 73, starszy pan.** Szerokie okulary, zbyt duży płaszcz, papierowy numerek złożony w ciasny prostokąt. *Głos:* grzeczny jak sprzed pół wieku, spokojny; zaczyna zawsze od „Czy jest już oprawka?” i czeka, nie ponagla. *Chce jawnie:* odebrać oprawkę okularów po zmarłej żonie. *Naprawdę:* dowiedzieć się, dlaczego Sam zapłacił za nią z własnej kieszeni i oddać mu pieniądze. *Ukrywa:* przyjął od Sama zwrot ($), choć wiedział, że ten wykłada go z własnych pieniędzy. *Kłamie nigdy;* czasem milczy. *Tell:* przy trudnym fragmencie składa numerek w prostokąt jeszcze ciaśniej. *Rola w grze:* pojawia się **codziennie** (karta wieczorna), a dłuższe rozmowy w dniach 13, 20, 25. Jego pytanie zmienia się zależnie od wiedzy gracza.

**SAM HOLT, 44, poprzednik.** Zapadnięte policzki, bluza pod starą kurtką roboczą, jasny pasek na nadgarstku po zegarku. *Głos:* zaczyna od technicznego szczegółu („Klamra była lewostronna.”) i dopiero po dopytaniu mówi, co sam zrobił. Mówi mało, spokojnie, nie tłumaczy się. *Chce jawnie:* odzyskać swoje rzeczy. *Naprawdę:* samemu zdecydować, czy sprostuje powód odejścia. *Ukrywa:* wyrwał stronę z księgi (zawierała dane lokatorów i klientów Skrytki), zatrzymał kalkę, zapłacił Eliasowi z własnej kieszeni za źle wydaną oprawkę. *Tell:* przestaje patrzeć na rozmówcę. *Łuk:* nieobecny do dnia 15; do tego czasu istnieje w słowach innych (Thomas, Elias, Iris, Vera, Dario, Leo, Victor).

**NORA VANCE, 39, przedstawicielka lokatorów.** Przystrzyżone włosy, ciemna marynarka pod kurtką przeciwdeszczową, rękawiczki z odsłoniętymi palcami. *Głos:* porządkuje rozmowę według nazw rzeczy i osób: „Po kolei: rzecz, osoba, potwierdzenie.” Twardo, spokojnie, bez ozdobników. *Tik:* wylicza na palcach. *Chce jawnie:* odzyskać oryginały pokwitowań przed rozliczeniem zaliczek. *Naprawdę:* nie dopuścić, by jedna rodzina płaciła drugi raz. *Ukrywa:* zgodziła się na jeden nieformalny odbiór paczki przez okienko, gdy wygasł najem ich biura. *Kłamie rzadko.* *Tell:* przestaje wyliczać. *Łuk:* dni 8, 12, 18, 24.

**VERA KOVACS, 62, pracownica zaplecza tramwajowego.** Siwe włosy związane gumką, kombinezon z wytartymi kolanami, pęk kluczy przy pasie. *Głos:* podaje najpierw miejsce, potem przedmiot, na końcu nazwisko: „Hala trzecia, szafka sto czternaście, pudełko, Holt.” Dobrotliwa, praktyczna. *Tik:* dzwoni kluczami, gdy się wstydzi. *Chce jawnie:* zwrócić rzeczy z likwidowanej szafki Sama. *Naprawdę:* ochronić Sama. *Ukrywa:* przez lata trzymała w szafce jego pustą teczkę osobową, żeby szafka wyglądała na zajętą; Sam zostawił jej klucz do szuflady w biurze. *Kłamie:* „Wszystko jest w inwentarzu.” *Tell:* dzwonią klucze. *Łuk:* dni 10, 13, 15, 24.

**Goście jednorazowi** (70% wizyt) mają **mini-kartę**: imię + rola, głos (1 tik), rzecz, typ (sekcja 5), co ukrywa (1 rzecz), czym kłamie (1 zdanie), jaki dylemat daje graczowi, jaki obraz zostawia, jakie echo. Dla każdej wizyty jednorazowej zapisz ją w komentarzu autora przed napisaniem JSON (nie w pliku wynikowym).

---

## 11. Kanon faktów (nie zmieniać bez zgody autora)

**Świat i czas.** Miasto bez nazwy. Biuro: nocna zmiana 23:40-06:00, linie 4, 6, 11. Czynsz 150 $/tydzień, pensja 40 $ za wizytę. Poprzednik Sam Holt odszedł pięć tygodni przed dniem 1. W księdze wydań brakuje strony (wyrwana).

**Zaginiona.**
- Maya Doyle (34), elektryczka, zniknęła w czwartek wieczorem. Powiedziała Evanowi, że odchodzi. Evan zamówił ulotki z jej zdjęciem w czwartek o 22:15 w całodobowej kopiarni na Rynku, a zgłosił zaginięcie w piątek o 6:10.
- Lena napisała do Mai w czwartek 23:48: „Nie wracaj do domu. Jadę po ciebie w sobotę.” Maya zostawiła telefon w tramwaju celowo.
- Rzeczy Mai wracają w tej kolejności: szalik z haftem M.D. (d2, linia 4), telefon (d3), klucze (d7), torba narzędziowa (d8), saszetka (d16), etui na aparat (d17), walizka (d21), oświadczenie (d22).
- Noah prowadzi zgłoszenie, ma zeznanie Evana i niezgodność godzin, nie ma dowodu.

**Skrytka.**
- Iris Bell zarządza kamienicą przy Cooper Street 9 (do wyburzenia, dopisek „do wyburzenia” w planach). Zbiera od lokatorów zaliczki i odbiera zbiorcze wypłaty z pralni. Równolegle (od czasu Sama) przez biuro przechodzą paczki w płótnie z kasetką: dokumenty dla ludzi, którzy chcą zniknąć (paszport z wyciętą stroną, bilety). Numery odbioru są na żetonach (piórnik, dzień 9).
- Tragedia lokatorów: bez oryginałów pokwitowań jedna rodzina (Okoye) musi zapłacić zaliczkę drugi raz (400 $).
- Nora Vance reprezentuje lokatorów. Ada Vale (10) jest córką Rosy Vale, która pracuje w pralni i mieszka w tej kamienicy.
- Gus Pell/August Ferro (dzień 4) to klient Skrytki.

**Poprzednik.**
- Sam odszedł, bo pozostawił niedobór na zmianie (oprawka Eliasa wydana błędnie, zapłacił z własnej kieszeni) i wyrwał stronę z księgi.
- Kwit nr 0417 (dzień 1, Thomas Ward) jest dowodem, że Sam wydawał rzeczy bez wpisu.
- Zegarek Sama, termos, kalka i klucz do szuflady pojawiają się w dniach 10-25.

**Imiona.** Używać wyłącznie: Maya, Evan, Lena, Noah, Iris, Ada, Leo, Victor, Elias, Sam, Nora, Vera. Nazwiska: Doyle, Brandt, Reyes, Bell, Vale, Marsh, Crane, Wren, Holt, Vance, Kovacs. Imiona Mara/Nell są **zakazane** (stare wersje).

---

## 12. Łuk 25 dni i drabina wiedzy

Cele: gracz poznaje wątki stopniowo, dostaje trzy źródła każdej ważnej informacji, a każda decyzja wraca.

| Dni | Zaginiona | Skrytka | Poprzednik |
|---|---|---|---|
| 1-2 | szalik M.D. (oględziny) | Rosa: Iris rozdziela wypłaty | Thomas: kwit 0417 bez wpisu, Elias: oprawka |
| 3-5 | telefon, kłamstwo Evana, Noah: ulotki w notesie | Iris: paczka z kasetką, Gus: dwa dowody | Elias: „płacił z własnej kieszeni”, Victor: dopiski |
| 6-8 | Kit: ulotki (potwierdzenie), Evan: klucze, Lena i Nora: torba | Ada: puszka, Leo: wykaz, Nora: kopia pokwitowania | Leo: „bez nadawcy” |
| 9-10 | | Iris: żetony i numery, Stahl (test inspekcji) | Vera: szuflada i klucz, Dario: „czy Sam żyje” |
| 11-15 | Maya osobiście (d11), Noah (d14) | Iris/Nora (d12), oprawka Eliasa (d13), Ada (d12) | Sam (d15) z kalką |
| 16-20 | Maya i Lena (d16), Evan (d17) | Iris i Nora (d18), Leo (d19) | Elias i Sam (d20) |
| 21-25 | walizka (d21), oświadczenie (d22) | rozliczenie (d23) | Vera/Leo (d24), Sam i Victor (d25) |

**Zakończenia trzech wątków** (dwa-trzy każde) wynikają z decyzji gracza z dni 3, 4, 7, 8, 9, 12. Echo i warianty wejść (`wejscie_jesli`) pokazują skutki wcześniej.

**Przecięcia:** torba Mai (d8) zawiera kopię pokwitowania Iris (łączy Zaginioną i Skrytkę). Oprawka Eliasa (d13) zawiera kwit z numerem paczki Skrytki (łączy Poprzednika i Skrytkę).

---

## 13. Format wyjściowy (zgodny z grą i walidatorem)

Plik Markdown z blokami ```json (po jednym obiekcie na gościa). Zalecany nagłówek pliku: krótki opis dnia. Pola:

```json
{
  "id": "d1_thomas",                      // unikalne, snake_case, zaczyna się od "dN_"
  "dzien": 1,
  "postac": "Thomas Ward, 71",            // etykieta nad kwestią
  "glos": "1 zdanie dla autora: jak mówi",
  "typ": "uczciwy-wstydliwy",             // z tabeli w sekcji 5
  "rzecz": "opis rzeczy",
  "wnetrze": [ {"sekret_id": "d1_kwit_0417", "co_widac": "...", "co_z_tego_wynika": "..."} ],
  "wejscie": "…",                         // ≤300 znaków; test 3.1
  "wejscie_jesli": {"d3_maz_i_siostra:wydaj_evan": "…"},   // opcjonalne
  "ludzie": {"siostra": "Lena"},          // opcjonalne (rozmowa we dwoje)
  "tury": [
    {"pytania": [
      {"tekst": "…", "ton": "uprzejme", "wymaga": null, "odpowiedz": "…", "mina": "mowi"},
      {"tekst": "…", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "…", "mina": "neutralna"},
      {"tekst": "…", "ton": "niewygodne", "wymaga": null, "odpowiedz": "…", "mina": "klamie"},
      {"tekst": "…", "ton": "niewygodne", "wymaga": "d1_kwit_0417", "odpowiedz": "…", "mina": "emocja", "ustawia": "opcjonalny_znacznik", "kto": "opcjonalny klucz z ludzie"}
    ]},
    {"pytania": [ … ]},
    {"pytania": [ … ]}
  ],
  "decyzje": [
    {"akcja": "wydaj", "etykieta": "opcjonalnie dla własnych akcji", "kasa": 0,
     "reakcja": "…", "zysk": "…", "strata": "…",
     "echo": {"za_dni": 2, "forma": "list", "tekst": "…"}}
  ]
}
```

(Komentarze `//` służą tylko do opisu; w pliku wynikowym JSON musi być poprawny, bez komentarzy.)

Reguły walidatora (`docs/tools/validate_dialogs.py`):
- JSON poprawny; każdy gość ma dokładnie 3 tury; w każdej turze minimum 3 pytania bazowe (bez `wymaga`);
- `wymaga` odnosi się do istniejącego `sekret_id`, do znacznika `id_goscia:akcja` (gość i akcja istnieją w pliku lub plikach) albo do `ustawia` innego pytania; dopuszczalne alternatywy `a|b`;
- brak pustych odpowiedzi; każda decyzja ma `akcja, reakcja, zysk, strata, echo`; własna akcja ma `etykieta`;
- limity długości (sekcje 3-4), zakaz zwrotów „pan/pani” skierowanych do gracza, zakaz form osobowych czasu przeszłego 1. osoby w pytaniach gracza (np. „-łem”, „-łam”), zakaz imion Mara/Nell.

---

## 14. Zakazy

- Patos, morał na końcu, wykład („Rozumiesz, w tej grze chodzi o…”), pointa w każdej kwestii.
- Ogólniki: „coś ważnego”, „pewna sprawa”, „ważne dla mnie”, „taka historia”.
- Powtórki: ta sama fraza w dwóch postaciach; ten sam układ pytań w dwóch wizytach; „X to X”.
- Papier zamiast człowieka: scena, w której postać tylko odczytuje dokument.
- Zwracanie się do gracza „pan/pani”; formy płciowe odnoszące się do gracza.
- Pytania naprowadzające i „Wiem, że kłamiesz”.
- Strata „żadna”, echo-rejestr, reakcja bez głosu postaci.
- Przemoc wobec dziecka, wulgaryzmy ponad „cholera”, szyderstwo z ofiary.
- Fantastyka, humor kosztem żałoby, lokalne polskie realia.
- Zapowiadanie fabuły przez postać („Później zobaczysz, że…”).
- Narratorskie opisy w polach dialogu (didaskalia): gest opisuje gra, nie tekst.

---

## 15. Procedura pisania i kontrola jakości

Dla każdej wizyty, w tej kolejności:
1. **Mini-karta** (komentarz): kto, głos, typ, co chce, co ukrywa, czym kłamie, jaki obraz, jaki dylemat.
2. **Sekret** (jeśli jest): konkretny, obrazowy; sprawdź, czy pasuje do grafiki wnętrza (lista w sekcji 17).
3. **`wejscie`** wg wzoru 3.1; przejrzyj test dwóch zdań.
4. **Tura 3, potem 1, potem 2** (od stawki do początku): wiesz, co ma wybrzmieć na końcu.
5. **Pytania z sekretem** i znaczniki decyzji.
6. **Decyzje, reakcje, zysk/strata, echo.** Echo pisze osoba, która zostaje z konsekwencją.
7. **Czytanie na głos** każdej odpowiedzi; skracaj do ≤240 znaków.
8. **Walidator.** Napraw wszystko, co flaguje.

Kontrola partii (zanim oddasz):
- [ ] Każda wizyta spełnia test dwóch zdań i test babci.
- [ ] Zasłoń imiona: czy dwie dowolne postacie da się odróżnić po samym tekście?
- [ ] Każdy tell słychać w tekście.
- [ ] Każde kłamstwo da się złapać; `klamie` tylko przy kłamstwie; uczciwy-niepamiętliwy nie ma `klamie`.
- [ ] Strata każdej decyzji jest realna; nie ma „dobrej” opcji.
- [ ] Echo dorzuca nowy fakt; skutki wcześniejszych decyzji widać w `wejscie_jesli` albo w pytaniach z `wymaga`.
- [ ] Brak „pan/pani” do gracza i form płciowych odnoszących się do gracza.
- [ ] Wątki: dzień zawiera nie więcej niż jedną nową nić naraz; stare nici wracają przedmiotem lub imieniem.
- [ ] Komizm: co najmniej jedna zabawna lub ciepła wizyta w dniu.
- [ ] Walidator przechodzi bez błędów.

---

## 16. Zlecenie (dopisz poniżej i wklej całość do modelu)

> Napisz dialogi dla dni **[od]–[do]** wg powyższej biblii. Dla każdego dnia: 2 wizyty (jedna z nici głównej wg tabeli z sekcji 12 lub kalendarza z `koncept/okienko_obsada_i_kalendarz.md`, druga jednorazowa), 1 kartę wieczorną, ewentualnie rzecz „dodatkową” do oględzin (`EXTRA`) i warianty `wejscie_jesli` zależne od decyzji z wcześniejszych dni. Oddaj wynik jako plik Markdown z blokami ```json, a przed każdym blokiem 3-linijkową mini-kartę gościa. Sprawdź walidatorem. Nie zadawaj pytań, decyduj sam, a założenia wypisz na końcu w 5 punktach.

---

## 17. Zasoby techniczne gry (dla integracji)

Sprite’y rzeczy dostępne w grze (`assets/items/*.png`): album, aparat, apaszka, beret, bilet, budzik, but, czapka_daszek, czapka_zimowa, dyktafon, etui_aparat, farby, futeral, futeral_gitara, grzebien, harmonijka, hulajnoga, kalosz, kapelusz, kasetowiec, klocki, klucze, koperta, krawat, krolik, ksiazka, kubek, kuferek, laska, latarka, latawiec, legitymacja, lornetka, lyzwy, medalik, notes, okulary, okulary_slonce, organizer, paczka, paczka_plotno, pantofel, parasol, pasek, paszport, pilka, plecak, plecak_dzieciecy, portfel, portfel_maly, powerbank, pozytywka, pudelko, pudelko_blaszane, puszka, radio, rekawiczka_skora, rekawiczka_welna, saszetka, skakanka, skrzynka_narzedz, sluchawki, szachy, szalik, teczka, telefon, termos, torba_listonosza, torba_narzedzia, torba_zakupy, torebka, walizka, walizka_mala, wedka, worek, zapalniczka, zegarek, zegarek_reka.

Grafiki wnętrz (`assets/in/`): W1 rękawiczka + kwit; W2 paczka w płótnie, kasetka na kłódkę, blankiet z pieczątką; W4 blaszana puszka z biletem; W5 etui z dwoma kluczami i kartonikiem ze znakiem nieskończoności; W6 torba narzędziowa z żółtą kopią pokwitowania; W7 piórnik z pięcioma żetonami; W8 blaszane pudełko z paskiem zegarka i kartą inwentarza; W13 termos z zegarkiem w środku i szuflada z wyrwaną kartką (zarezerwowane dla Sama, dzień 15); W17 teczka z dwoma wykazami, pieczątką i biletami kontrolnymi; W20 koperta z kartką i listą z odhaczonymi nocami; C4 plecak z pudełkiem na pierścionek, książką, puszką, ładowarką i biletami.

Twarze (`assets/ppl/*_{neutralna,mowi,emocja,klamie}.jpg`): wdowiec, chlopak, maz (Evan), siostra (Lena), dama (Iris), inspektor (Victor). Pozostali mają w demo placeholdery (lista braków w `docs/ASSETS_REQUESTS.md`).
