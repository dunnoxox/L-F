# POPRAWKI FABUŁY I DIALOGÓW (audyt 12.11.2026)

Dla wątku dialogów (nie edytowałem `koncept/okienko_rozmowy_*` ani `game/`). Kanon: `koncept/fabula_25_dni_v3.md`. Pełne raporty z cytatami i gotowymi tekstami: `docs/audyt_fabula/` (A1 ciągłość, A2 perspektywa gracza, A3 logika, S1-S4 spójność odpowiedzi dni 1-6 / 7-13 / 14-19 / 20-25). Numery w tabelach (C-, G-, L-, S1-…S4-) odsyłają do tych raportów.

## 0. Na czym oparty audyt i co sprawdzone ponownie

- Audyt robiono na kopii dialogów z projektu z **11.11 23:49**. Od tego czasu `main` dostał „czwartą falę” (PR #15: mniej kłamców, goście d20/d21, Iris, pola plakietki; ok. 660 zmienionych linii w dniach 11-25 i 300 w 1-10). Część pozycji mogła być już naprawiona. **Przed wprowadzeniem poprawki zgrepuj `id` dialogu w aktualnym pliku.**
- **Sprawdzone ponownie na aktualnym `main` (potwierdzone, nadal występują):** „Siedziałam w tym fotelu” w `wejscie` d23 (wszystkie 4 warianty) i w turze 3; „poniedziałek 6:10” w d16 i kwit „jutro 6:10” w d22 (Stahl); echa Thomasa „W niedzielę pojechałem…”, Hany „W poniedziałek komisja…”, Jonaha „Jutro o siódmej” (dni 1-2); brak `wejscie_jesli` w d16, d17, d20, d21 i d22_noah (sprawdzone parserem JSON), a w d18 są tylko gałęzie `wydaj_iris` i `zabezpiecz` (brak `sprawdz_z_nora`, `wyloz_400`); brak kwestii Evana o szarym kapeluszu w d17 JSON (jest w nagłówku, nie w turach); „dwudziestego drugiego / czwartego” w d12, d14.
- **Nie sprawdzone ponownie:** pozostałe pozycje (zakładaj, że istnieją, aż grep pokaże inaczej). Nie uruchamiałem walidatora ani silnika; gałęzie `wymaga` oceniane z samego JSON-a.
- Wszystkie cytaty w raportach to cytaty z kopii 11.11, więc mogą się różnić brzmieniem.

## A. Zasady przekrojowe (stosować wszędzie)

1. **Czas (v3 §1):** dzień gry = noc; zakaz gołych liczb („dwudziestego drugiego”) i „jutro rano”. Terminy: „do wtorku, siódmego września” (Noah), „w czwartek dziewiątego” (14 rodzin), „do piątku dziesiątego” (Sam). Soboty bez wizyt; `za_dni` nigdy na d26. Zamiana „dzień” na „zmiana/noc” w mowie postaci.
2. **Liczby (v3 §3):** 4 papiery + 1 bilet (nie „pięć osób”); 14 rodzin (nie „dwadzieścia” w d4/d8); 21 $ × 4 = 84 (Elias); rata Marlowa 60 $; Noah ma 42 lata (wszędzie), Hana 24, Thomas „sześć tygodni” (kwit), Victor „pięć tygodni” dopisał.
3. **Echa mają wariant na każdą gałąź** poprzedniej decyzji. Wzorzec: `wejscie_jesli` + `wymaga` zamiast jednego `wejscie`. Najwięcej braków: d14 Noah (4 gałęzie z d11), d16 Maya/Lena, d17 Evan, d18 Iris/Nora, d20 Sam, d21, d22 Noah, d23 Iris/Nora/Victor.
4. **Każda odpowiedź o rzeczy zgodna z jej wnętrzem** albo `mina: "klamie"` plus dowód w przedmiocie lub księdze (patrz sekcja G i pole `sprawa` z `docs/AKCJA_WERYFIKACJA.md` §8).
5. **Nikt przed d23 nie mówi o łańcuchu** (zostaje reguła v2). Wyjątki do usunięcia: Leo d19 „od jedenastu lat” (S3-26); `glos`/`typ` ze spoilerami (G-27) jeśli UI je pokazuje.
6. **Język (S1-S4):** usuń aforyzmy i zdania niezrozumiałe (np. „Nie ma jak w domu. Czyli nie.”, „mam wędkę i rybę, ryby nie mam”); tik „Czyli” zostaje tylko u Noaha; bez „pan/pani” wobec gracza; „Dzień dobry” w nocy → „Dobry wieczór”.

## B. Decyzje kanoniczne i skąd się biorą zmiany

| # | Decyzja v3 | Konsekwencja dla dialogów |
|---|---|---|
| R1 | Kalendarz i zasada zmiany nocnej (v3 §1) | C-01, C-02, C-08, C-10, S1-01..04, S3-05, S4-10, S4-15, S2-02, S2-13, S2-17 |
| R2 | Skrytka ma 11 lat, Sam jest nr 5 (od ok. 2 lat), nie założycielem | C-09, L-10: usunąć „T-7 miesięcy” z tekstów postaci; v1 Poprzednik C przeczytać jako „piąty” |
| R3 | Dyżurny = bezpiecznik audytu (podpis w księdze, niedobór na zmianie) | L-01: dopisać kwestię Very d24 (v3 §2.2) i jedną linię Victora d23 |
| R4 | Bilet po podpisie następcy; można odejść bez biletu | L-02, L-05, L-08, G-02: poprawić d20 (Sam), d23 (Iris), d25 (reakcje `wpisz_siebie`, etykiety), epilogi |
| R5 | Kryterium Very: brak zgłoszenia, rodziny i referencji; dług nie liczy się | L-06: dopisać jedno zdanie Very d24; Marlow nie zna nazwiska, tylko pokój |
| R6 | Iris wyszła zwykłym biletem za nr 4; 6 800 $ to spłata długu wobec Very | L-09, S4-24: jedna wersja „wykupu” w d4/d12/d23 |
| R7 | Kopie: Kancelaria + wgląd za 60 $ + pośrednik Marlow; karta Kopie z konkretnymi nazwiskami | L-13, L-14, C-16, S4-47, G-04: tabela v3 §4, karta wieczorna d23-24 |
| R8 | Stahl wynajęty po d3; źródło wiedzy o walizce: Evan | S3-04, C-12, L-12: poprawić d9 (mini-karta), d17, d22 |
| R9 | Zakończenia v3 (v3 §7) | L-03, L-04, L-15, L-16, G-02, C-14, C-15 |
| R10 | Pieniądze: 6 800 $ wydane; zakończenia Skrytki operują „uznaniem długu” | L-03 |
| R11 | Marlow = dług gracza + pośrednik wglądów | S4-20, G-24, L-06 |
| R12 | Fotel ≠ kanał | L-04: Rotacja przy Skrytce B z „kartką bez adresu” |

## C. P0: krytyczne (gracz zobaczy sprzeczność wprost)

### Dni 1-6 (S1, C, G)
| ID | Dialog | Problem | Poprawka (gotowa) |
|---|---|---|---|
| S1-01 | `d2_hana` wydaj.echo | „W poniedziałek komisja” w liście na d3 (poniedziałek to 16.08) | `za_dni: 6` albo zmienić na „w piątek komisja przedłużyła…” (piątek 13.08) |
| S1-02 | `d1_thomas` wydaj.echo | „W niedzielę pojechałem na cmentarz” w d3 (niedziela jest za 5 dni) | czas przyszły („W niedzielę pojadę…”) albo `za_dni: 6` |
| S1-03 | `d2_jonah` echo | „Jutro o siódmej” po oświadczynach | przeszły: „Zdążyłem. O siódmej powiedziałem.” |
| G-01 | d9 Iris, d15 Sam | 0809 pada bez bramki dopiero w d24 | Iris d9: „Piąty żeton to 0809. Jeszcze bez opisu.” Sam d15 `wejscie`: „Ta szósta linia: 0809, prawda?” |
| C-04 / S1-07 / S4-35 | d1 Thomas, d5 Victor, d24 Thomas | trzy różne okresy rękawiczki | jeden: Sam wydał **sześć tygodni** temu, Victor dopisał **pięć tygodni** temu; echo Victora „trzy tygodnie” → „pięć” |
| S1-12 | extra d2 szalik | „Maya… którą mąż zgłosił jako zaginioną” w d2, zanim ktoś o niej mówi | „zostawiła go w tramwaju linii 4” |

### Dni 7-13 (S2, C)
| ID | Dialog | Problem | Poprawka |
|---|---|---|---|
| S2-01 | `d11_maya` decyzja `szept_lenie` | Maya reaguje na szept, którego nie mogła zobaczyć; przejęzyczenie „skąd on… skąd ona” | reakcja przez Norę/echo następnego dnia albo Maya dowiaduje się z listu Leny; usunąć przejęzyczenie |
| S2-02 / C-10 | d9 `depozyt`, d12 Linh/Iris | dwa różne „jutro 5:40”; „sobota” już minęła | d9: „w czwartek rano, dziewiętnastego, o 5:40” → Linh dojeżdża w d12 (wtorek 24.08): „dziś o 5:40”; wycofać „jutro” |
| S2-03 | `d12_iris_nora` | Iris mówi o „papierach pięciu osób”, po czym odmawia odpowiedzi na to samo | zostawić jedną odpowiedź: „cztery papiery i jeden bilet bez opisu” |
| S2-04 | `d11_grace` `kartka_odpis` | Grace prosi „bez nazwiska”, echo Nory cytuje „Okoye” | echo bez nazwiska albo Grace się zgadza |

### Dni 14-19 (S3, C)
| ID | Dialog | Problem | Poprawka |
|---|---|---|---|
| S3-01 / C-03 | `d18_iris_nora` | gałęzie d12 `wydaj_iris` i `wyloz_400` nie mają oryginałów w biurze | `wymaga` flagi `oryginaly_w_biurze` (ustawia `zabezpiecz`/`sprawdz_z_nora`); dla pozostałych: decyzje `nora_kopia`, `do_kontroli` |
| S3-02, S3-03 | `d16_maya_lena` | Lena „gdzie jest siostra” gdy Maya stoi obok; brak gałęzi d11 | `wejscie_jesli` na `przez_okienko`, `powiadom_rodzine`, `szept_lenie`; Lena: „…dokąd Maya chce, żebym ją zawiozła” |
| S3-04 / C-12 | `d17_evan` | „wynajmę” vs „zaliczka zapłacona”; brak „szary kapelusz” | v3 §5: „Mam już detektywa…”; dopisać kwestię o kapeluszu |
| S3-05 / C-01 | d12, d14, d15, d17, d18 | „dwudziestego drugiego/czwartego” | v3 §1 (terminy słowne) |

### Dni 20-25 (S4, C, G, L)
| ID | Dialog | Problem | Poprawka |
|---|---|---|---|
| S4-01, C-11 | d21, `d22_noah`, d16 Noah | brak gałęzi d11 `powiadom_rodzine`, d14 `bez`, d16 `lena_zalatwia`, d17 `zdradz_szczegol` (Maya nadal ufa, Noah ma oświadczenie wbrew zakończeniu C) | `wejscie_jesli` na te flagi: Maya przychodzi **bez rozmów**, tylko po walizkę; Noah bez oświadczenia |
| S4-02 | d20 Sam | nie rozróżnia d15 `victor_od_razu` / `oddaj_samowi` | trzy warianty `wejscie_jesli` (uzgodnij / victor_od_razu / oddaj_samowi) |
| S4-03 | d20 Sam | zegarek „Vera go przyniosła”, a w d15 Sam odebrał termos przy graczu | „zegarek miałem przy sobie od d15” |
| S4-07 | d21 rzecz | „żółta wstążka” przypisana walizce Mai zamiast Priyi; d22 Stahl „zna żółty zamek” | wstążka tylko u Priyi; zamek żółty opisać w d21 (Evan/Lena) |
| S4-10 / C-02 | d22 Stahl | kwit „jutro 6:10” z wczoraj; „w poniedziałek” | v3 §5: bez kwitu „jutro”; Maya wyjechała **dziś o 6:10 (wtorek 7.09)**; w d16 Maya mówi „we wtorek o 6:10” |
| S4-15 | d22 Noah | „dziś do osiemnastej” w nocnym biurze | „do szóstej rano” |
| S4-22 / C-05 | d23 Iris/Nora/Victor | „Siedziałam w tym fotelu” w `wejscie` (przy wszystkich) i powtórzone w turze 3 | **usunąć z wejścia wszystkich czterech wariantów**; zostaje w turze 3, z `wymaga` „zostajesz z Iris sama” (v2 §8) |
| S4-23 / C-03 | d23 | brak gałęzi d12 `wydaj_iris` i d18 `oferta_iris`; `wydaj_nora` „zgodnie z rezerwacją”, której nie ma | dodać `wejscie_jesli` i `wymaga` na `wydaj_nora`; wzajemne wykluczenie |
| S4-27 / S4-28 | d24 Vera, extra szafka | „nikt nie otwierał” vs list „pisany w niedzielę”; list bez `otworz_szafke` | usunąć sprzeczne zdanie; list w extra z `wymaga: otworz_szafke` |
| G-02 | d25 `wpisz_siebie` | Elias „dobry początek”, a `zysk`: „Iris wręcza bilet”; reguła d23 „dopóki ktoś nie usiądzie” | v3 §7.2: Iris: „Bilet jest, czeka na peronie, aż ktoś podpisze po Tobie. Do poniedziałku.”; zysk przepisać |
| C-14 | d25 `list` | echo zawsze „Jak się nazywasz?”, sprzeczne z `epilogi_elias`; `wpisz_siebie` nie używa imienia | echo zależne od gałęzi; w `wpisz_siebie` imię z d20 wstawione w pytaniu Eliasa |
| S4-47 / C-16 | `d25_karta_kopie` | min(4,N), a 3 nazwiska | karta z tabeli v3 §4 |

### Logika fabuły (A3)
| ID | Co | Poprawka |
|---|---|---|
| L-01 | funkcja dyżurnego | v3 §2.2; kwestia Very w d24 (gotowa tam) |
| L-02, L-05 | egzekutor rotacji | v3 §2.4; zmienić „dopóki ktoś nie usiądzie” na „dopóki ktoś nie podpisze” w d23, d25; „przez miesiąc” → „do poniedziałku” |
| L-03 | 6 800 $ w zakończeniach | v3 §7.1 (uznanie długu) w `epilogi`, kartach finalnych |
| L-04 | Odebrany × Zaginiona C, × kopie | v3 §7.3 (warunki) w `LICZNIKI.md` i opisie zakończeń |
| L-07 | Vera bez ceny | d24 Vera, 3. pytanie o nr 4 (v3 §8.1) |
| L-08 | Sam nie użył biletu | d20 kwestia (v3 §2.4) |
| L-09 | trzy wersje „wykupu” Iris | jedna wersja v3 §2.4 |
| L-11 | Urząd nie zauważył | jedna linia Victora d23: „Pierwszy raz zestawiłem zmiany z pięciu lat” |
| L-17, G-28 | Maya zna „bilet Iris” bez źródła | Maya d21: „Lena słyszała od Iris o biletach; nie biorę z jej ręki” albo przesunąć do Iris d23 |

## D. WAŻNE (pokrótce; szczegóły w raportach)

- **S1:** S1-04 (kartka Hany „do 9 sierpnia”), S1-05 (kwit 0417 „jakby zgubił drugą, wydać tak samo”), S1-06 (`wydaj_bez_wpisu` bez `wymaga: d1_kwit_0417`), S1-08/09/10/11/13/14/15 (echa i miny).
- **S2:** S2-05 (Kit „w czwartek, zeszły tydzień”: dwa tygodnie), S2-06 (Kit nie wskazuje, że to Evan i Maya), S2-08 (brak wejść Evana dla `wydaj_evan`/`zatrzymaj`), S2-10 (Lena „jedyna rzecz po niej”), S2-12 (brak obcęgów/miary w `wnetrze`), S2-14 (Iris „nie przy Crane” po czym mówi przy Victorze), S2-16/18 (klucz Very, szafka „zamknięta”), S2-19/20 (Grace nocki vs „o 6:00 na oddział”; Maya „z naszej kamienicy”), S2-22/28 (kwit i wykaz w piórniku).
- **S3:** S3-06/07 (saszetka Mai), S3-08 (list Evana), S3-09 (hulajnoga/kask), S3-10 (parasole Pruitta: liczby 11/2/9 i rok 1979), S3-11 (Ada „mamy dzień na spakowanie” przed decyzją), S3-12/13/14 (echa Leo, Kofi, Hugo), S3-15/16 (Nora data; pytania z faktami spoza wiedzy gracza), S3-17 (Noah 41/42).
- **S4:** S4-04, 05, 08, 12, 13, 14, 17, 19, 20, 24, 25, 29, 30, 31 (torba Leo: jeden opis), 38 (Elias pyta o Sama, który stoi obok), 39, 40, 41, 42.
- **A1:** C-06 (Nora zna „4 × 6 800” przed Iris), C-07 (kalka zawiera 0731 i 0809, a strona wyrwana ok. 5.07: kalka ma tylko pozycje do T-5 tyg.; dodać żetony do „notatki po wyrwaniu”), C-13 (14 vs 20 rodzin), C-17 (d5 `wykaz_paczke`/`potwierdz_wpis`), C-18..C-24.
- **A2:** G-03 (strona 41 od d1), G-04 (karta d23-24 o wycieku), G-05 (karty wieczorne bez haków v2 §6), G-06 (martwe d16-19: wypełnić wątkami Kanał/Nazwiska/Rewizor), G-08 (list z lukami zaznacza notatkę), G-09, G-10 (trzy zwroty w d23-25: rozłożyć: Iris d23, Vera d24, księga d25 już jest), G-11 (Zaginiona bez sceny w d23-25: karta wieczorna), G-12 (Nora: 400 vs 6 800), G-13..G-31.

## E. Nowe sceny do dopisania (wątki dodatkowe, v3 §8)

| Wątek | Dzień | Co dopisać | Typ |
|---|---|---|---|
| Kanał | 3 | Leo: skrzynka z kanału; extra: zegarek „T.R. — od T.”, klucz, karta z numerem szafki | extra + 2 zdania Leo |
| Kanał | 6, 17 | Noah: pytanie o skrzynkę (d6), identyfikacja (d17) | echo / wizyta |
| Kanał | 10 | Dario: człowiek przy kanale sprzed dwóch lat | 2 pytania |
| Kanał | 13 | **Tess Rusk, 41** (nowa postać, rzecz: zegarek) | nowa wizyta |
| Kanał | 20, 24, 25 | Sam: „Tobias”; Vera: odpowiedź o nr 4; karta epilogu Tess | pytania + epilog |
| Ogłoszenie | 2 | **Ines Calloway, 36**: statystyki; wizytówka | nowa wizyta (krótka) |
| Ogłoszenie | 9, 14, 18, 22, 25 | archiwum ogłoszeń; prośba o potwierdzenie; artykuł; reakcja Victora; drugi artykuł | wizyty/karty |
| Dług | 9 lub 15, 22-25 | pieczątka „wgląd Kancelarii, K.M.” na kwicie; karta „Opłata 60 $, K.M.” | detal + karta wieczorna |
| Nazwiska | 1-3 | instrukcja „dokumenty po terminie do Very” (karta/Leo) | detal |
| Nazwiska | 15 | kalka: przy żetonach dwa nazwiska | detal |
| Nazwiska | 17-19 | **Mario Ferro, 48** (nowa postać, portfel) | nowa wizyta |
| Nazwiska | 24-25 | Vera: „ludzie, którzy nie odebrali”; karta: nazwisko z archiwum w Rotacji | pytanie + epilog |
| Rewizor | 9, 15, 22, 25 | telefon „z centrali”; kartka Voss; Voss w kolejce (milczy); protokół | detale + finał |

**Nowych postaci z twarzą: pięć** (Tess, Ines, Ferro, Voss, ew. Ruth tylko w tekście). Portrety wg `prompty/portrety_goscie.md`; do czasu wgrania bez powtórzeń twarzy w tym samym dniu.

## F. Weryfikowalność: czego brakuje w `wnetrze` (gracz nie ma czym sprawdzić)

Z raportów S1-S4: Dana i Ada mają `wnetrze: []` (naklejka „Mama”, wgniecenie); Thomas bez „białej nitki” w wnętrzu; Hana bez etykiety lutnika; Jonah bez ładowarki, książki, biletów; Leo bez numeru w puszce; obcęgi z żółtą izolacją, „M” na miarze i nazwisko Okoye na kopii nie są w `wnetrze`; Grace/Linh; parasole Pruitta; torba Leo (jeden opis: S4-31); „numer 411 i stempel” w kasetce; zaliczka detektywa. Każdy z tych faktów dostaje wpis w `wnetrze` albo wychodzi z dialogu. Wspólne z wątkiem akcji: pole `sprawa`.

## G. Dla wątku gry (silnik; bez zmian w `game/` z tego wątku)

1. Flagi nowe: `kanal_tess`, `ines_potwierdz`, `ferro`, `dlug_marlow`, `marlow_wglad`, `oryginaly_w_biurze` (wspólny stan d12→d18/d23).
2. Karta „Kopie” liczy z tabeli v3 §4, nie `min(4,N)`; karta wieczorna d23-24 z pieczątką K.M.
3. Zakończenia v3 §7.3 (Odebrany: `kopie ≤ 1`, Zaginiona ≠ C; Rotacja: odejście w poniedziałek 13.09; Referent: karta Victora z nazwiskiem).
4. `D7`: reakcje i etykiety wg v3 §7.2 (G-02).
5. Kalendarz: nagłówek dnia „pon 9.08 … pt 10.09”; zmiana nocna: koniec zmiany o 6:10.

## H. Kolejność pracy (sugestia)

1. Najpierw **przekrojowe** (sekcja A: kalendarz, liczby, czas) skryptem/grepem.
2. Potem **P0 po dniach** (sekcja C).
3. Potem brakujące gałęzie `wejscie_jesli` (sekcja A.3).
4. Potem **nowe sceny** (sekcja E) po akceptacji Tommy'ego (wątki dodatkowe są propozycją).
5. Na końcu `check_spojnosc.py` i `validate_dialogs.py`; zasada z DECISIONS: dialog wygrywa, chyba że kłamstwo ma dowód.
