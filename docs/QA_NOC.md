# QA NOC: balans 25 dni, zakończenia, liczniki, rytm, język

Data: noc 11/12.11.2026. Testowany stan: `main` @ `ea20082` (silnik `game/game.js` + dialogi `koncept/okienko_rozmowy_v3*.md` zbudowane świeżo przez `build_data.py`).
Narzędzia i surowe wyniki: `docs/tools/qa_noc/` (uruchom `bash docs/tools/qa_noc/run_all.sh`).

## Jak testowano (i czego NIE sprawdzono)

- **Symulator bez przeglądarki** (`sim.js`): logika przepisana 1:1 z `game.js` (bump liczników, `has()`, `qlist()` z podmianą pytań sekretnych, `entry()`, magazyn i sztorm, soboty, audyt, `endings()`). Gra dni 1-25 na pełnych danych (50 gości, 159 decyzji, 528 pytań).
- **10 strategii x 300 seedów**: uczciwy, ludzki, chciwy, kradnący, odmawiający, wydający, urzędnik, zawsze-pierwsza opcja, zawsze-ostatnia, losowy. Pytania: pierwsze / losowe / niewygodne / z sekretem; inspekcja: żadna / losowa / zawsze rzecz z sekretem; ulepszenia kupowane w obu kolejnościach.
- **1,5 mln losowych przebiegów** samej warstwy decyzji do liczenia osiągalności zakończeń.
- **Analiza statyczna** danych i silnika (kto ustawia flagę, kto jej wymaga, które klucze `LANG` istnieją).
- **Próbka 40 scen** (pytanie + odpowiedź, losowana ziarnem) czytana ręcznie + lint całego korpusu (ok. 1 000 tekstów).
- **Nie sprawdzone**: render, dźwięk, dotyk/telefon, animacje, faktyczny czas gry człowieka (czas to estymata z liczby znaków). Symulator odwzorowuje kod z `main`; opublikowany artefakt Claude może być nowszy.

## Wynik w jednym akapicie

Gra w repo **kończy się na dniu 15** (nieaktualny `data.js`). Po jego odświeżeniu da się przejść 25 dni bez błędów konsoli, ale **zakończenia są słabo połączone z fabułą v2**: Skrytka B jest nieosiągalna, „Odebrany” i „Rotacja” nie istnieją, 47% decyzji nie rusza żadnego licznika, wszystkie łapówki są bezkarne i zawsze widoczne, a kasa nie ma żadnego zastosowania poza trzema ulepszeniami. Dialogi są po polsku dobre, z kilkoma wpadkami rejestru (ty/pan) i logiki.

---

## Lista bugów wg ważności

### KRYTYCZNE

**K1. `game/data.js` na main jest nieaktualny: gra urywa się po dniu 15.**
`data.js` ma 30 gości (dni 1-15); `koncept/` ma 50 (dni 1-25). `build_data.py` na świeżo daje 50 gości, 5 extra, 25 kart wieczornych.
Kroki: otwórz `game/index.html`, „Zacznij zmianę”, zagraj do soboty dnia 15, kliknij przycisk tygodnia → ekran „Koniec dostępnych dni”. Dni 16-25, `ledger()`, `endings()` i zakończenia nie są wtedy osiągalne.
Naprawa: `cd game && python3 -I build_data.py` (skrypt ma ścieżkę `/mnt/project-files/koncept`; w repo trzeba ją wskazać na `../koncept`), commit nowego `data.js`. Warto dodać test CI „liczba gości w data.js == liczba bloków JSON w koncept”.

**K2. Zakończenie Skrytka B jest nieosiągalne; dwa inne odwołania do nieistniejących akcji.**
W `endings()`: `did(23,'victor')` – takiej akcji w d23 nie ma (jest `wydaj_victor`); `did(13,'odpis_za_zgode')` – w danych `odpis_za_zgoda`; `did(4,'wydaj_cicho')` – nie istnieje (jest `koperta`).
Dowód: w 1 500 000 losowych przebiegach `skr=B` = 0 trafień; wszystkie pozostałe wartości zakończeń padają. Poprzednik A działa tylko przez drugą gałąź (`przyjmij_sprostowanie`).
Naprawa: popraw nazwy akcji w `endings()` (`wydaj_victor`, `odpis_za_zgoda`), dodaj test w `validate_dialogs.py`, że każda akcja z `did()` istnieje w danych danego dnia (robi to `static.js`).

**K3. Silnik nie zna zakończeń i liczników z fabuły v2 (§9-10) ani z `koncept/LICZNIKI.md`.**
- Brak zakończenia „Odebrany” (list + `notatki`≥3 + `maya_testy`≥2 + `uzgodnij` + Skrytka A/B) i „Rotacja” (`wpisz_siebie` / list bez warunków). Gest z `ledger()` dodaje tylko jedno zdanie `gest_*`, nie zmienia zakończenia.
- „Referent” nie wymaga `kopie`≥2, „Zostajesz” wypada w **0,2%** przebiegów (próg Urząd≥7 osiąga prawie każdy).
- Liczniki `notatki_3`, `maya_testy_2`, `kopie_2` nigdzie nie są liczone; warunki `wymaga` na nich są stale fałszywe (pytanie d21 T3 „Maya, powiedz jeszcze coś”, pytanie d23 T2 o rejestr Urzędu, decyzja d25 `list`).
- Ekran końcowy pokazuje „Urząd X/10” (fabuła: po finale licznik nazywa się „Ekspozycja” i nie jest dobrem). Blok `epilogi_elias` z końca pliku dialogów nie jest wpięty.

**K4. Dzień 25: podwójny wybór gestu.**
W danych `d25_ksiega` jest drugim gościem dnia 25 z decyzjami `wpisz_siebie / wyrwij / list / zamknij`, a po nim `ledger()` pyta o te same 4 gesty. Zakończenie czyta wyłącznie flagi `gest:*` ustawiane przez `ledger()`; wybór w scenie gościa nic nie zmienia. Gracz decyduje dwa razy, a pierwsza decyzja jest pusta.

### WYSOKIE

**W1. Decyzje z `wymaga` są zawsze widoczne (19 przypadków, w tym 18 łapówek `wez_*`).**
`decide()` buduje strefy z `g.decyzje` bez sprawdzania `wymaga`. Np. `d2_jonah/wez_pierscionek` ma `wymaga: d2_paragon_raty`, a gracz widzi „Weź pierścionek”, nawet nie zaglądając do rzeczy. Zasada „łapówka tylko, gdy wiesz” (i gra informacją z inspekcji) nie działa. Dotyczy też `d5_victor/wykaz_paczke`, `potwierdz_wpis`, `d10_dario/powiedz_dario`, `d25_ksiega/list`.

**W2. 75 z 159 decyzji (47%) nie rusza żadnego licznika; w dniach 16-25 aż 43 z 65 (66%).**
Silnik zgaduje skutek z nazwy akcji (regex). Nowe nazwy z dialogów v3/v4 nie pasują do żadnego wzorca. Wśród „zerowych” są **wszystkie `wez_*`** (łapówki dają tylko $; nie dotykają Urzędu, `bez_wpisu` ani audytu) oraz większość dylematów z fabuły (np. `maya_sama`, `zdradz_szczegol`, `przekaz_calosc`, `stahl_wydaj`). `LICZNIKI.md` opisuje właściwe zmiany, ale nie są wdrożone. Lista pełna w `wyniki/02_...`.

**W3. Martwe sekrety i pytania (silnik czyta tylko `wnetrze[0]`).**
Drugi sekret w rzeczy nigdy nie jest do zdobycia: `d5_gotowka_400` (Gus), `d16_najem_lena`, `d21_metka`, `d24_umowa` (Vera), extra d15 `d15_zatwierdzenie_victora` i `d15_szosta_linia`, extra d24 `d24_list_luki`. Skutek: **7 pytań nigdy się nie pokazuje** (d5_gus T3, d15_sam T2 i T3, d16_maya_lena T2, d21 T2, d24_vera T1 i T3); do tego 2 pytania zależne od brakujących liczników (K3: d21 T3, d23 T2) i 1 bazowe d5_noah T2. Razem 10 z 528 pytań jest nieosiągalnych. Dodatkowo `d5_noah` T2: pytanie bazowe jest zawsze podmieniane przez jedno z trzech warunkowych (martwy tekst, bez szkody); 6 wejść `default` (d5_noah, d9_iris, d22_jonah, d23 x2, d24_thomas) nigdy nie gra, bo zawsze któryś `wejscie_jesli` jest prawdziwy.
Naprawa: pozwolić na zajrzenie do 2 sekretów (np. dwa punkty w obrazku) albo przenieść drugi sekret do osobnej rzeczy (extra dnia).

**W4. Pieniądze nie mają konsekwencji.**
Dochód: 40 $ za gościa + `kasa`. Koszt soboty: 150 $ + 160-240 $ (czynsz + rachunki). Bilans przy czystej grze (liczba gości w tygodniu x 40 − koszt): tydz.1 +90, tydz.2 +70, tydz.3 +50, tydz.4 −10, tydz.5 +50 → po 25 dniach ok. **+250 $** (z ulepszeniem ok. 180 $). Wyniki strategii (mediana, N=300):

| strategia | kasa końcowa | Urząd/Ludzie | audyty/run | epilog |
|---|---|---|---|---|
| uczciwy | 180 $ | 10/10 | 0 | Referent |
| ludzki (wydawaj, wykładaj) | 180 $ | 10/10 | 0 | Referent |
| odmawiający | 460 $ (25% runów z długiem po sobocie) | 10/0 | 0,25 | Referent |
| losowy | 720 $ | 9/8 | 0,58 | Referent 63% / Nowy Sam 36% |
| kradnący (`przywlaszcz`/`wez_*`) | 2 189 $ | 5/4 | 1,85 | Nowy Sam |
| chciwy (max kasa) | **2 439 $** | 6/10 | 1,47 | Nowy Sam |

- Chciwy kończy z **13x** większą gotówką niż uczciwy; jedyna kara to epilog „Nowy Sam” (jedno zdanie) i −60 $ / −2 Urząd za audyt, który dotyczy tylko `przywlaszcz` (nie `wez_*`, nie `koperta`).
- Dostępne łapówki to łącznie **2 469 $** (18 opcji) przy łącznym budżecie uczciwej gry 250 $. Dylemat „weź czy nie” nie kosztuje: w testach wzięcie łapówki nie zamykało żadnej ścieżki poza epilogiem „Nowy Sam”.
- Dług nie ma żadnego skutku (tylko napis). Pieniądze nie mają zastosowania poza 3 ulepszeniami (60/70/80 $), jedno na sobotę; po zakupie wszystkich trzech kasa jest bezużyteczna (a chciwy ma ich 2 439 $). Boty kupowały ulepszenie w 100% runów (symulator: jedno na run).
- Propozycja (do decyzji wątku gry/Tommy'ego): dług → zwolnienie lub przymusowa łapówka; kradzież → ryzyko inspekcji rosnące z liczbą `wez_*`; więcej wydatków (leki dla Eliasa, depozyt Mai, wykup rzeczy dla gościa), żeby kasa miała ciężar także dla uczciwych.

**W5. Nazwy rzeczy: szukanie jest dwuznaczne, a część nazw kłamie.**
- W **35% szukań (177/500)** w magazynie leży co najmniej jedna inna rzecz o tej samej widocznej nazwie (do **4** równocześnie, d24_thomas, d24_vera). Slot pokazuje tylko nazwę, a opis gościa („zszyta białą nitką”) nie jest widoczny na przedmiocie, więc wybór bywa losowy. Błąd nic nie kosztuje, a po 3 pomyłkach gra podpowiada skrzynię (po 6 – cel), więc „szukanie” nie ma stawki.
- Dla ok. 11 gości z dni 14-25 heurystyka `auto()` w `build_data.py` dobiera sprite niezgodny z opisem: Księga wydań → „pudełko”, szachy → „pudełko”, kasetka na rachunki → „klucze”, torba konduktora → „torba narzędziowa” (x3), kask rowerowy → „czapka z daszkiem”, 11 parasoli → „parasol”, etui na okulary → „okulary”, kaseta → „blaszane pudełko”. Gracz szuka „Księgi wydań” wśród rzeczy podpisanych „pudełko”.
- 22 pola `itemName` są **uciętymi** opisami (`Etui na aparat z zamkniętym li`, `Pudełko po kasecie magnetofono`, `Brązowy`, `Blaszany budzik z dwoma dzwonk`). Pole trafia do nagłówków listów porannych („{rzecz} · {akcja}”).

### ŚREDNIE

**S1. Magazyn rośnie bez limitu.** Rzeczy niewydane zostają na zawsze, a wypychane są tylko wypełniacze. Maks. rzeczy w jednej skrzyni: uczciwy **23**, wydający 18, odmawiający **30**, losowy 28 (limit „cap” 7/9 dotyczy wyłącznie wypełniaczy). Widok ma 4 kolumny i ok. 12 pozycji bez przewijania; po dniu ok. 15 szukanie to przekopywanie 20+ rzeczy (połączone z W5). To dokładnie skarga Tommy'ego „magazyn w bałaganie”.

**S2. Liczniki Urząd/Ludzie wchodzą w sufit 10/10.** Uczciwy i ludzki są pod koniec tygodnia 2 na 10/10 i do końca nie niosą informacji. Licznik **Ludzie nie wpływa na żadne zakończenie**; Urząd tylko na „Referent” (próg 7).

**S3. Rozkład zakończeń jest skrajny.** Przy losowych wyborach: Skrytka C **96%**, Poprzednik B **88%**, Zaginiona C **80%**; A-warianty 1-2%. Uczciwy/ludzki dostaje **Skrytkę C w 100%**. Zaginiona C ma 4 niezależne wyzwalacze (OR), a A wymaga trzech konkretnych. Epilogi: Nowy Sam 34%, Referent 66%, Zostajesz 0,2%. Do poprawy po wdrożeniu K2-K3.

**S4. Rytm dnia.**
- Przejście między gośćmi to tylko ok. 1,7 s (500 ms + fade 450 ms + pukanie po 700 ms); brak „oddechu”, a zegar w nagłówku dostawy stoi na **23:40** przez cały dzień. Propozycja: zegar przesuwa się z każdym gościem (23:40 → 3:10), a pauza „ktoś odchodzi, deszcz, lampa” 2-3 s.
- Gości na dzień: 2 w większości, ale **d4, d20, d21 po jednym**, a **d5, d22, d24 po trzech** (tekst do przeczytania: d4 ok. 0,9k znaków, d24 ok. 3,1k). Najkrótsze dni wypadają w **szczycie fabuły** (d20-21), co psuje rozpędzenie przed finałem.
- Estymata czasu (1 000 znaków/min, 35 s szukania): ok. **4,5 min/dzień, ok. 2,1 h całości**; Tommy planował ok. 4 h. Za krótko na 9,99 $ albo trzeba dodać zawartość (więcej gości w d20-21, dłuższe szukanie).

**S5. Echa po dniu 25 nigdy się nie pokazują (12 szt.)**: wszystkie decyzje d24/d25 mają `za_dni` 1-2, a po d25 jest tylko ekran końcowy.

**S6. Placeholdery bez podmiany.** `{kopie}` i `{min(4, kopie)}` w karcie „Kopie” (d25 extra) wyświetlą się dosłownie (brak liczenia `kopie`).

### NISKIE (język i logika; polszczyzna ogólnie dobra)

- **J1. Rejestr ty/pan.** Pytania gracza: 184 z 528 w formie „ty” i 2 w „Pan/Pani”. Starszym gościom (Elias d13: „Z czego żyjesz?”; Odile: „Czy rodzina wie, że ją zgubiłaś?”; Linh) mówimy „ty”, a goście do gracza i o sobie „pan Holt”, „pani Iris”. Ton „uprzejme” z pytaniem „Z czego żyjesz?” zgrzyta. Decyzja stylu: gracz do dorosłych „Pan/Pani”, do dzieci „ty”.
- **J2. Wielkie litery zaimków tylko w d21-25** („Twoja walizka”, „Ci się spieszy”, „Czy to Ty stałeś”; 16 miejsc), małe w d1-20. Ujednolicić (zalecam małe).
- **J3. Tik Iris „Nie lubię naciskać, ale…”**: 26 razy w 6 wizytach, w d23 aż 7 razy. Postać do zdarcia na końcu, ale po drugim razie śmieszy.
- **J4. Niedopasowane odpowiedzi:** d5_victor T3 „Podpiszesz?” → „Victor Crane. Dwa egzemplarze…” (nie odpowiada tak/nie); d15_pruitt T1 „Czemu dopiero teraz je oddajesz?” → „Bo wcześniej były krótsze” (co było krótsze?); d10_dario T1 „Gruby, tłusta okładka” (składnia: „z tłustą okładką”). Niektóre odpowiedzi powtarzają motyw tej samej nitki (d1 Thomas / d11 Maya „bo czarna się skończyła”), jeśli celowe, warto zaznaczyć.
- **J5. Duplikat sceny w danych**: d5_noah ma identyczne `wejscie_jesli` dla `wydaj_evan` i `wez_100_evan` (bez szkody, ale zbędne).

Próbka 40 scen (`wyniki/06_probka_scen.txt`, losowanie ziarnem; 2 duplikaty, czyli 38 unikalnych; dodatkowe 3 sceny czytane osobno): uwagi do 5 (#6 i #32 logika odpowiedzi, #19 składnia, #27 i #29 rejestr ty/pan), reszta bez zastrzeżeń. W próbce nie znalazłem błędów ortograficznych ani anglicyzmów (to ocena z czytania, nie ze słownika). Lint całego korpusu: brak podwójnych spacji i prostych cudzysłowów; 9 razy ASCII „...” zamiast „…” w reakcjach gości.

---

## Pokrycie

| Obszar | Wynik |
|---|---|
| Decyzje (159) | wszystkie wybrane co najmniej raz |
| Pytania (528) | 10 nigdy nie pokazanych (W3, K3) |
| Wejścia `wejscie_jesli` (86 wariantów) | 6 domyślnych nigdy nie gra (nieszkodliwe) |
| Zakończenia | Zaginiona A/B/C, Skrytka A/A2/C, Poprzednik A/B/C, epilog 3, Eliasa A/B/C/N osiągalne; **Skrytka B nieosiągalna**; „Odebrany”/„Rotacja” nie zaimplementowane |
| Momenty klipowe (`docs/MOMENTY.md`) | gość i decyzje każdego momentu istnieją w danych; treść momentów nie weryfikowana; d16-25 zależne od K1 |
| Pętle bez wyjścia | brak: każdy gość ma ≥2 decyzje, ścieżka zawsze dochodzi do decyzji, soboty zawsze do następnego dnia; jedyne „utknięcie” to koniec gry w dniu 15 (K1) |
| Błędy flag | kolejność w dniu poprawna (d5_gus po d5_victor, d23_rosa po d23_iris_nora_victor); brak flag ustawianych za późno |

## TOP 10 do przekazania wątkowi gry

1. K1: zbudować `data.js` od nowa (50 gości), bo gra urywa się w dniu 15.
2. K2: poprawić nazwy akcji w `endings()` (`wydaj_victor`, `odpis_za_zgoda`); Skrytka B jest nieosiągalna.
3. K3: wdrożyć zakończenia „Odebrany”, „Rotacja”, „Referent z kopie≥2” i liczniki `notatki/maya_testy/kopie` z `LICZNIKI.md`.
4. K4: usunąć podwójny wybór gestu w d25 (albo `d25_ksiega` jako scena z wyborem, albo `ledger()`).
5. W1: respektować `wymaga` w decyzjach (18 łapówek zawsze widocznych).
6. W2: dopisać skutki liczników do 75 „zerowych” decyzji (jawna tabela akcja → Urząd/Ludzie/kopie/bez_wpisu zamiast regexa).
7. W4: dać kasie konsekwencje (dług → zwolnienie, ryzyko inspekcji za `wez_*`, nowe wydatki), bo chciwy ma 13x więcej niż uczciwy bez kary.
8. W3: umożliwić zdobycie 2. sekretu albo go przenieść; 10 pytań jest nieosiągalnych.
9. W5 + S1: nazwy sprite'ów zgodne z opisem, widoczny opis na przedmiocie, limit zapasu w skrzyni (szukanie 35% dwuznaczne, skrzynie do 30 rzeczy).
10. S4: rytm: ruszający się zegar zamiast stałego 23:40, więcej gości w d20-21 (najkrótsze dni w szczycie fabuły), całość ok. 2,1 h to za mało.
