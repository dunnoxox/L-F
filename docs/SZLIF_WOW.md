# SZLIF WOW: audyt przed Steamem (12.11.2026)

Stan: audyt na `main` @ `57a6891` (PR #20). Edycje `game/` ruszają, gdy w `main` wylądują PR-y wątków: bot QA, E0, ekran tytułowy, telefon. Kanon: `koncept/fabula_25_dni_v3.md` > v2 > v1. Styl: `prompty/styl_linoryt_sodowy.md`. Prawa: `prompty/CD2_master_prompt.md`.

## STAN PO SZLIFIE (12.11.2026, branch `claude/project-thread-o83w9t`)

**Zrobione**
- Fabuła: A1-A16, A18-A20 (kanon v3 w dialogach, zakończeniach Skrytki, epilogach; karty Ruth i Joan Alder; Kopie z nazwiskami; wątki Ines i Tess wypłacone kartami wieczornymi d17, d18, d25; rata Marlowa w soboty; Milo Reed zamiast drugiego Tobiasa; karty d9 nie giną). A17 zrobił bot QA.
- Rzecz kontra obrazek: cała sekcja B (słownik `FIX` w `build_data.py`), poza trzema rzeczami bez własnego obrazka (niżej).
- Grafika: C1 (bot QA), C2 (sylwetka pod portretem), C3 (portrety G01-G26 z PR #23), C5 (czerwień tylko dla decyzji), C7, C8 (PR #21).
- UX: D1, D2 (bot QA, PR #21), D4 (klik dopisuje tekst), D5 (czasownik duży, reszta zwykłym pismem), D7 (finał kartami).
- Wow: gość „wywołuje się” w świetle lampy, lampa przygasa przy kłamstwie i znalezisku, wstrząs sceny (burza, pomyłka, stemple), rzecz przechodzi przez okienko albo znika w kieszeni, portfel dolicza, dzień 25 to gest na księdze (wpis, wyrwanie, zamknięcie), finał: jedna odbitka na raz, nazwiska z Kopii stemplowane, plakat z paskiem 0913 spina koniec z prologiem, karta „Twoja zmiana” do zrzutu ekranu.

**Weryfikacja botem QA (`qa/bot.js`, po rebase na main z PR #25)**: trzy pełne przebiegi 25 dni (pierwsza opcja, ostatnia opcja, losowa seed 11), każdy doszedł do finału, 0 błędów JS, 0 brakujących plików, 0 zacięć. Bot wskazał dwie usterki finału na telefonie (przycisk „Zacznij od nowa” poza ekranem, statystyki 7 px) i jedną z oglądania screenów (`[imię]` w echu Eliasa niepodmienione); wszystkie poprawione.

**Zostaje**
- A21 (`validate_dialogs.py` liczy 0 gości).
- C4 (dwa języki rzeczy), C6 (kot z SVG), C9, C10 (osadzony krój), D3 (pauza jako przedmioty), D6 (sobota jako kwit), D8, D9.
- Telefon: osobny wątek.

**Od Tommy'ego**: sekcja F bez zmian, portrety G27 Ines i G28 Evan wg `prompty/portrety_poprawki_JEDEN_CZAT.md`.

---

## Jak sprawdzałem
- Przeczytane w całości: `game/game.js`, `game.css`, `index.html`, `LANG`, fabuła v3, styl, CD2 §2/§8-11, UX §5/§9/§10, TOP 20 backlogu.
- Skan danych (55 gości, 7 extra, 25 kart wieczornych, 199 kluczy): wzorce zakazane przez v3, tropy wymagane przez v3, długości, mapowanie rzecz-sprite, echa.
- Gra uruchomiona w Chromium (1536x1024, `?fast&seed=7`): dzień 1 krok po kroku + przebieg botem do dnia 15, 54 zrzuty obejrzane. 0 błędów konsoli, 0 błędów 404.
- NIE sprawdzone: dźwięk na ucho, dotyk, dni 16-25 na zrzutach (przebieg w toku), ekran zakończeń na żywo.

Priorytety: **P0** = widać w pierwszych 10 minutach albo łamie kanon w finale; **P1** = psuje wrażenie; **P2** = połysk.

---

## A. Spójność fabularna (dialogi, skrzynki, nitki)

| # | P | Gdzie | Brak | Poprawka |
|---|---|---|---|---|
| A1 | P0 | `d1_thomas` tura 2, pyt. 4 | Thomas mówi „Trzy tygodnie temu zgubiłem prawą”, a kwit w mankiecie i v3 §1: **sześć tygodni**. Sprzeczność w pierwszej rozmowie gry. | „Sześć tygodni temu…” |
| A2 | P0 | `LANG.end_skr_A/B/C` | Iris „oddaje 6 800 $”, Victor „zajmuje 6 800 $”, Iris „zabiera 6 800 $”. v3 §3/§7.1: pieniądze są **już wydane**. | A: uznanie długu + 400 $ dla Okoye; B: Victor zajmuje rejestr przepływu; C: Iris zabiera oryginały i kasetkę. |
| A3 | P0 | `LANG.epi_rotacja_list_bez_warunkow` | „Listu nikt nie znalazł przez miesiąc” vs v3 §7.3 „do poniedziałku” (a `ep_rotacja_lb` mówi już „do poniedziałku”: dwie wersje na jednym ekranie). | ujednolicić |
| A4 | P0 | `d3_maz_i_siostra`, `d5_noah`, `d14_noah`, `d7_evan` | SMS Leny 21:48 (kanon 23:48); zgłoszenie 23:30 (kanon pt. 6:10); „godzinę przed zgłoszeniem” (kanon: prawie osiem godzin). Sześć miejsc. | godziny z v3 §1; d7: „Osiem godzin przed zgłoszeniem.” |
| A5 | P0 | zakończenie Rotacja | Brak wypłaty tytułu: karta z **nazwiskiem z archiwum** („Joan Alder, zgubiona w tramwaju 6 w 2019. Nieodebrana.”, v3 §8.4). „Alder” jest tylko na naklejce kapelusza Stahla (d9), co przy okazji robi fałszywy trop. | dopisać kartę do `ep_rotacja*`; naklejkę kapelusza zmienić na inną firmę albo świadomie spiąć. |
| A6 | P0 | zakończenie Odebrany | Brak Ruth (v3 §6: „Pierwsza dyżurna miała na imię Ruth”). Sierota obiecana w v2. | zdanie w `ep_odebrany*`. |
| A7 | P1 | `d1`, `d5` | „strona 41” pada dopiero w d15. v3 §6 G-03: d1 i d5 mają mówić „brakuje strony 41”. | dopisać w kwicie d1 i u Victora d5. |
| A8 | P1 | `d17_evan` | Brak kwestii „Szary kapelusz. Mówią, że nie wygląda na detektywa.” (v3 §5); tytuł d22 ją zapowiada. | dopisać. |
| A9 | P1 | wątek Ogłoszenie | Ines jest tylko w d2. Brak d9 (archiwum ogłoszeń), d14 (dylemat potwierdź/odmów), d18 (artykuł), d25. Nitka otwarta i porzucona (CD2 10.7). | minimum: 3 karty wieczorne (d9, d14 z wyborem przez flagę z d2, d18 artykuł) albo zamknąć wątek jedną kartą w d5. |
| A10 | P1 | wątek Kanał | Tess tylko w d13; brak eskalacji Noaha d6/d17, zdania Sama d20, Very d24, karty epilogu (grób z imieniem / brama z numerem). | karta wieczorna d17 + linia w epilogu zależna od `d13_tess:*`. |
| A11 | P1 | Elias | 85 $ w czterech miejscach; v3 §3: 21 × 4 = **84 $**. | 84 $ wszędzie. |
| A12 | P1 | dług u Marlowa | 12 kart wieczornych Marlowa, ale sobota nie pobiera **raty 60 $** i nie pokazuje długu 300 $ (v3 §3, §8.3). Karty grożą, mechanika milczy. | rata w rozliczeniu, licznik rat w zapisie. |
| A13 | P1 | echa d24/d25 | 12 ech ma termin „dzień 26”: nigdy się nie pokażą (v3 §1 zakaz). | pokazać je w finale jako karty przed epilogiem. |
| A14 | P1 | karta wieczorna | Etykiety ech: surowe `wydaj`, ucięte nazwy („Brązowy · wydaj”, „Czarny parasol z rączką w kszt”). | `itemName` pełny i z małej litery, akcja jako czasownik po polsku. |
| A15 | P1 | Księga przyjęć | Wpisy mają godziny 02:13-03:12, gdy zegar pokazuje 00:05, a dostawa była o 23:40. | godziny kursów sprzed zmiany (18:00-23:30). |
| A16 | P1 | zegar | „Świt. Poczta na ladzie” przy 01:10. Zmiana trwa do 6:00. | zegar skaluje się do liczby wizyt, karta świtu zawsze ~5:50. |
| A17 | P1 | nazwy liczników | Sobota: „Urząd 7/10”, finał: „Ekspozycja 7/10”. | jedna nazwa. |
| A18 | P2 | `LANG.sub` | „Tydzień pierwszy.” (relikt E1). | usunąć. |
| A19 | P2 | `X25` | `co_z_tego_wynika` trzyma surowe `{kopie}`, `{min(4, kopie)}`. | wyczyścić. |
| A20 | P2 | `d13_tess` | „skrzynka z dnia trzeciego” ma sprite `pudelko`, a ta sama rzecz w d3 to `skrzynka_narzedz`. | ten sam sprite. |
| A21 | P2 | `validate_dialogs.py` | Zwraca „OK: 0 gości”: nie czyta formatu v3, daje fałszywą zieleń. | naprawić wzorzec albo oprzeć na `data.js`. |

Zgodne z kanonem (sprawdzone, bez zmian): kalendarz, „Dobry wieczór”, brak „jutro rano” i gołych liczb dni, 0809 w d9, „jedenaście lat” tylko u Very w d24, karty K.M., Voss w kartach, Ferro w d19, 0913 w d25, brak spoilerów łańcucha przed d23.

## B. Rzecz kontra obrazek (grafika łamie dialog)

Gość opisuje jedno, w skrzyni leży drugie. 14 przypadków:

| Gość | Opis | Sprite dziś | Poprawka |
|---|---|---|---|
| d11_maya, d13_elias | pokrowiec / futerał na okulary | `futeral` (skrzypcowy) | `okulary` |
| d14_billie | kask rowerowy | `czapka_daszek` | nowy sprite (prośba) lub zmiana rzeczy |
| d15_pruitt | jedenaście parasoli w siatce | `parasol` | `torba_zakupy` + wnętrze |
| d17_sylvia | szachy bez króla | `pudelko` | `szachy` (jest w assets) |
| d17_evan | etui na aparat | `aparat` | `etui_aparat` (jest) |
| d21_mina | wiklinowy koszyk | `pudelko` | nowy sprite (prośba) |
| d23_iris_nora_victor | stalowa kasetka | `klucze` | `kuferek` |
| d25_ksiega | Księga wydań | `pudelko` | nowy sprite (prośba), finał gry |
| d16_dorian | pudełko po kasecie | `pudelko_blaszane` | `kasetowiec` |
| d20_elias_sam | zegarek w etui po okularach | `zegarek` | zostaje + wnętrze |
| d24_vera, d19_ferro, d18 | teczki | `teczka` x4 | zostaje (różni numer w Księdze) |
| d22_noah, d22_jonah, d24_thomas | koperty | `koperta` x4 | zostaje |

Do tego opisy rozróżniają rzeczy **kolorem** (różowy, niebieski, zielony, czerwony powerbank), a styl ma trzy farby. Gracz nie ma jak tego sprawdzić. Zasada na szlif: w polu „Znajdź w magazynie” pokazywać cechę widoczną w linorycie (kształt, zniszczenie, numer), kolor zostaje tylko w mowie gościa.

## C. Graficzne wpadki i linia artystyczna

| # | P | Co widać | Poprawka |
|---|---|---|---|
| C1 | P0 | Przyciski `.notes` i `.kartka` nie mają CSS: w lewym górnym rogu systemowy biały guzik „Notatnik 1/5”, na dostawie d1 mikroskopijna lista nachodząca na pas górny. | style w linorycie, kartka jako papier przy skrzyni. |
| C2 | P0 | Gość jest przezroczysty: przez tors Thomasa widać krzesła poczekalni (portret w `screen` na tle T1). | czarna maska sylwetki pod portretem. |
| C3 | P0 | 6 twarzy na 55 gości. Tess ma twarz Iris z kopertą, Evan nosi kapelusz (a „szary kapelusz” to trop Stahla), sceny dwu- i trzyosobowe pokazują jedną osobę. | do czasu portretów: sylwetka-cień z plakietką dla postaci bez twarzy, zakaz tej samej twarzy dwa razy w dniu, druga osoba jako cień w tle. Portrety G01-G26: Tommy. |
| C4 | P1 | Dwa języki rzeczy: wnętrza (kremowa plama, pomarańcz światła) kontra sprite'y (cienki biały kontur na czerni). Kontur łamie regułę 2 stylu. | sprite'y na ladzie i w oględzinach podświetlać plamą sodową od lampy; w skrzyni zostają kreską. Docelowo nowy arkusz. |
| C5 | P1 | Czerwień `#ff5a3c` na portfelu, pomyłce, audycie. Czerwień ma być tylko dla decyzji. | pomyłka i minus kremem/pomarańczem; czerwień tylko na strefach decyzji i geście finałowym. |
| C6 | P1 | Kot z parapetu to SVG rysowany w kodzie (zakaz grafik z kodu), z cienkim konturem. | wyciąć z istniejącej grafiki albo prośba o sprite. |
| C7 | P1 | Strefy decyzji leżą na lampie i półkach, „+ $40” ląduje na liczbie w portfelu, Księga przyjęć chowa się pod polem magazynu. | pas akcji z podkładem, lot kwoty kończy się obok portfela, Księga nad polem. |
| C8 | P1 | Tytuł 150 px przecina ławkę i lampę (zrobi wątek tytułu; sprawdzić po merge). | — |
| C9 | P2 | Poszarpane brzegi tylko na tle; panele UI mają proste krawędzie i równe ramki 3 px. | `clip-path` z nieregularnym brzegiem dla skrzyń, pól, szuflady. |
| C10 | P2 | Georgia + monospace systemowy: na Windows wyjdzie Consolas, na Mac Menlo. | jeden krój osadzony w grze (plik fontu od Tommy'ego albo licencja OFL). |

## D. UX/UI

| # | P | Brak | Poprawka |
|---|---|---|---|
| D1 | P0 | Baner „Krok 3” wisi podczas kroku 4 i po decyzji; pulsuje nad sceną. | podpowiedź fazy w pasie tekstu, znika po wykonaniu. |
| D2 | P0 | Przycisk „Otwórz okienko” wklejony w środek zdania kwitu. | przycisk pod kartą (UX §9.4). |
| D3 | P0 | Pauza: pięć guzików w jednym rzędzie, „Notatnik” wyblakły, tekst nastroju bez podkładu na tle. | trzy zajęcia jako przedmioty na ladzie (radio, kubek, szyba), podkład pod tekst. |
| D4 | P1 | Pisanie tekstu 16 ms/znak bez przyspieszenia klikiem. | klik dopisuje całość. |
| D5 | P1 | Etykiety decyzji do 60 znaków (79 dłuższych niż 38) w fonie 17 px wersalikami. | dwie linie: czasownik duży, reszta małym. |
| D6 | P1 | Sobota: ściana wyśrodkowanego tekstu, nagłówek 150 px. Bez wypłaty tygodnia i bez rachunku w słupku. | kwit: wiersze plus/minus, stempel sumy. |
| D7 | P1 | Zakończenie: sześć kart w przewijanej kolumnie, zero rytmu. | patrz E-finał. |
| D8 | P1 | Brak wskazania, do kogo mówi pytanie w scenach kilku osób. | imię adresata przy pytaniu. |
| D9 | P2 | Po dniu 2 nazwy rzeczy w magazynie znikają, zostaje tylko hover: na dotyku nie do przejścia. | dotknięcie i przytrzymanie pokazuje nazwę. |

## E. Efekt wow (plan)

**Pierwsza minuta (CD2 prawo 1, UX §9).**
1. Tytuł: deszcz na szybie, lampa mruga raz, tramwaj przejeżdża w drzwiach co ~25 s (po merge wątku tytułu tylko dopinam).
2. Prolog gestem: pasek z numerem odrywa się przeciągnięciem, numer rozmywa się kroplą; podpis kreską, pole imienia zostaje puste, stuk pieczątki.
3. Cięcie do biura: czerń, szum lampy, karta dnia wjeżdża jak odbitka („Rękawiczki na grobie”).
4. Kwit 0417: zwolnienie, ściszenie ambientu 300 ms, dźwięk szpilki, kwit przypina się do notatnika.
5. Pukanie: cień za szybą rośnie, zanim odsuniesz zasłonkę; zasłonka jako gest.

**Każda wizyta (prawo 2 i 8).**
- Wejście gościa: sylwetka, potem światło lampy „wywołuje” twarz od dołu.
- Kłamstwo: lampa przygasa na pół sekundy, zamiast samej muzyki.
- Wydanie: rzecz przechodzi przez szczelinę okienka, dłoń gościa ją bierze, dzwonek.
- Odmowa: zasłonka opada, cień stoi sekundę i odchodzi.
- Kwota: monety do szuflady, cyfry w portfelu przewijają się.
- Po wyjściu: odcisk dłoni na szybie, który deszcz zmywa.
- Wstrząs przez malejącą traumę (amplituda = trauma²) przy burzy, szufladzie, stemplu; wyłączany opcją „Ogranicz błyski i wstrząsy”.

**Finał (prawo 10).**
1. d25, gest na księdze naprawdę gestem: wpisz = piszesz imię po linii 0809; wyrwij = przeciągasz stronę, rozdarcie idzie za kursorem; list = kartka do szuflady; zamknij = okładka opada.
2. Zakończenie jako sekwencja kadrów, nie lista: każda nitka to jedna odbitka z jednym zdaniem, klik = następna, cisza między nimi.
3. Karta „Kopie”: nazwiska wbijane po jednym, ze stukiem.
4. Rotacja: karta z nazwiskiem z archiwum (A5). Ostatni kadr: słup, pasek 0913, ten sam gest co w prologu, tylko odrywa go ktoś inny. Klamra z pierwszą minutą.
5. Karta końcowa do zrzutu: imię, sześć nitek, kwota, jedno zdanie Eliasa (V1 z backlogu).
6. Po napisach: tytuł wraca z pustym fotelem i nowym odcinkiem na słupie.

## F. Czego potrzebuję od Tommy'ego (nie blokuje startu)
- Portrety G01-G26 (prompty w `prompty/`), w tym Tess, Ines, Ferro, Maya, Sam, Vera, Noah.
- Trzy sprite'y rzeczy: kask rowerowy, wiklinowy koszyk, księga wydań. Jeden: kot na parapecie.
- Dźwięki: monety, pióro, rozdarcie papieru, szpilka (`sfx_trace_pin`), dzwonek sklepowy.

## G. Kolejność prac po odblokowaniu `game/`
1. A1-A6, C1-C2, D1-D2 (P0, małe).
2. B (mapowanie sprite'ów w `build_data.py`), A7-A17.
3. E pierwsza minuta, potem E wizyta, potem E finał.
4. C3-C7, D3-D8.
5. Pętla z botem z `docs/BOT_QA.md`, publikacja, PR.
