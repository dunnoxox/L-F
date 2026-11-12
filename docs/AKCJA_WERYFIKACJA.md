# AKCJA I WERYFIKACJA: co robimy rękami przy okienku

Zlecenie Tommy'ego (12.11.2026, 00:01): „musimy popracować nad akcją: oprócz odpowiedzi klientom co robimy, wydajemy, co i jak, gdzie się możemy pomylić, jak możemy to zweryfikować, może fotografie przedmiotów”.
Podstawa: prompty/CD2_master_prompt.md (prawa 2, 4, 5, 6.3, 6.8, 7.5, 3.6), prompty/CD2_analiza_gier.md, docs/UX_PROWADZENIE.md (układ 3:2, reguły R1-R8), prompty/styl_linoryt_sodowy.md, skill „realizm biura zgub” (drabina dowodów, rejestr, wzorce oszustw).
Prompt na fotografie: prompty/zdjecia_przedmiotow_JEDEN_CZAT.md. Narzędzie spójności: docs/tools/check_spojnosc.py.

---

## 0. Diagnoza w pięciu zdaniach

1. **Dziś wizyta to rozmowa plus dwa kliknięcia.** W `pile()` rzecz gościa ma klasę `target`, a po 2 pudłach gra sama podświetla zakładkę i slot; w `decide()` wybierasz gest z listy. Nie da się pomylić rzeczy ani człowieka inaczej niż wyborem przycisku.
2. **Dowody już leżą w dialogach, ale gra ich nie używa.** Thomas mówi „położyć je kciukami do siebie: w prawej nitka czarna, w lewej biała”, Rosa „przeliczę przy szybie”, Hana „rączka owinięta czerwoną taśmą”, Bree „R.O. pod osłoną baterii”. Gracz nie ma czym tego sprawdzić.
3. **Świat kłamie bez powodu (to jest „odpowiedzi niespójne”).** `check_spojnosc.py`: w **22 z 50 wizyt** gość mówi „zgubiłem w jedenastce”, a gra wkłada rzecz do skrzynki innej linii (Gus: 11 → skrzynka 6; Kit: 4 → 11; Bree: 11 → 4 …). Gracz, który słucha, szuka w złym miejscu i dostaje karę za uważność.
4. **Bliźniaki nie istnieją.** `addDay()` dodaje „podobną” rzecz (`SIM`), ale zaraz potem pętla podmienia każdy wypełniacz o tym samym sprite'cie co cel, więc podobna znika.
5. **Kradzież sprawdza los, a nie świat.** Audyt w sobotę to `rng() < 0.45 × kradzieże`; CD2 7.5 wymaga, żeby wynik zależał od tego, „kto patrzy i co jest w rzeczy”.

---

## 1. Idea: trzy ruchy rąk, jedna prawda sprawy

Każda wizyta dostaje **TECZKĘ SPRAWY**: jeden zestaw faktów (linia, godzina, miejsce, cechy, zawartość, numer kwitu, półka, kto jest właścicielem). Z niej czytają **jednocześnie** dialog, magazyn, księga, zdjęcia i oględziny. Jeśli zdanie gościa nie zgadza się z teczką, to jest **kłamstwo z dowodem** albo **błąd do naprawy**. Trzeciej możliwości nie ma.

Gracz robi trzy ruchy. Każdy ma swój dźwięk, swój obraz i swoją pomyłkę.

| Ruch | Gdzie | Co robisz | Nagroda (CD2 6.2) | Możliwa pomyłka |
|---|---|---|---|---|
| **1. KWIT** | szuflada z prawej: Księga przyjęć | szukasz wpisu z nocy i linii, które podał gość; dostajesz numer i półkę | szelest kartek, stuk palca w wiersz | zły wpis = zła rzecz (bliźniak) |
| **2. BLAT** | blat pod lampą | kładziesz rzecz, oglądasz (lupa, światło, nos, para, zdjęcie), **przykładasz słowo gościa do śladu** | „klik” lupy, buczenie lampy, nowe pytanie | przeoczony ślad = wydanie kłamcy |
| **3. SZYBA** | okienko | wydajesz gestem: rzecz przez szparę, odcinek kwitu, podpis w księdze wydań | stuk rzeczy o blachę, mina za szybą | niepełne wydanie, brak wpisu, zły podpis |

Czas: każdy ruch poniżej 60 s (CD2 prawo 2). Całość wizyty z rozmową ok. 2-3 min, czyli tyle, ile dziś.

**Zmiana kolejności rozmowy (najważniejsza decyzja projektu):** tura 1 rozmowy (kto, co, gdzie, kiedy) zostaje przy zamkniętej rzeczy. **Tury 2 i 3 odbywają się z rzeczą na blacie.** Pytania gracza mogą wtedy dotyczyć tego, co widzi („W mankiecie jest kwit. Skąd?”), a gość odpowiada o rzeczy, która leży przed nim. To jest dziś najprostszy sposób, żeby odpowiedzi „pasowały do tego, co się dzieje”: rozmowa toczy się nad przedmiotem, a nie w próżni.

---

## 2. Rzeczy biura (nośniki prawdy)

Wszystkie są fizyczne, leżą w świecie, nie są modalem (CD2 8.6, UX R4). Teksty nakłada gra (styl: bez liter na grafikach).

### 2.1 Zawieszka i kwit (numer)
- Każda przyjęta rzecz ma **zawieszkę na sznurku** z numerem porządkowym i kolorem linii (4 = jedno nacięcie, 6 = dwa, 11 = trzy: czytelne bez koloru, bo paleta to czerń/krem/pomarańcz).
- **Numer jest porządkowy w roku i rośnie co noc.** Dzień 1 zaczyna się od **0561**, każda noc dodaje 6-9 numerów. Dzięki temu kwit 0417 z mankietu Thomasa jest „sprzed trzech tygodni” dla każdego, kto spojrzy w Księgę (zgodne z kanonem d1). Numer kwitu **nie jest** datą, więc nie myli się z żetonami Skrytki (mm/dd, fabula_25_dni_v2 §3.2).
- Zawieszka ma **odcinek** (perforacja). Przy wydaniu odrywasz odcinek i dajesz gościowi; grzbiet zostaje w księdze. Brak odcinka w księdze = rzecz wyszła bez wpisu.

### 2.2 Księga przyjęć (rejestr)
Jedna strona na noc. Kolumny: **nr · godz. · linia · miejsce (wagon, siedzenie, pętla) · opis (3-5 słów) · półka · kto przyniósł**.
- Wpisy robi konduktor przy dostawie 23:40 (Leo, Dana, nocna zmiana); gracz je czyta, nie pisze.
- Opis w księdze jest **krótki i urzędowy** („rękawiczka skórz. lewa, brąz.”), więc nigdy nie zdradza szczegółu prywatnego (zasada urzędnika: nie podpowiadaj). Szczegół prywatny musi przyjść od gościa.
- Księga to też **ślad kłamstwa**: godzina znalezienia wcześniejsza niż godzina, o której gość „zgubił”; inna linia; „przyniósł: Leo M.”, a gość mówi, że był sam.

### 2.3 Karta zgłoszenia (wypełnia się sama z rozmowy)
- Pod napisami gościa **słowa-cechy są lekko podkreślone** (kolor, znak, linia, godzina, zawartość). Kliknięcie słowa kładzie je na Karcie zgłoszenia, małej kartce przy krawędzi blatu. Maks. 5 pól: CO · GDZIE · KIEDY · ZNAK SZCZEGÓLNY · W ŚRODKU.
- Dni 1-2: karta wypełnia się automatycznie (nauka). Od dnia 3 gracz sam wybiera słowa (to jest „słuchanie” jako mechanika).
- Karta **nie świeci na zielono ani na czerwono**. Porównujesz sam (CD2 6.8, lekcja Obra Dinn). Czerwień w palecie jest tylko dla decyzji.

### 2.4 Kartoteka fotograficzna (polaroidy przyjęcia)
- Rzeczy cenne (gotówka, dokumenty, biżuteria, elektronika, zegarki) dostają przy przyjęciu **polaroid** w kartotece: zdjęcie z góry na blacie, z zawartością rozłożoną obok. Tak robią realne biura i hotele (dowód stanu przy przyjęciu).
- Polaroid odpowiada na trzy pytania: **czy to ta rzecz**, **czy czegoś brakuje**, **czy ktoś podmienił**.
- Polaroid jest **świadkiem**: Urząd porównuje go w sobotę z tym, co wyszło. To zastępuje losowy audyt (sekcja 6).
- Wchodzi od dnia 11 jako ulepszenie po sobocie 2 (fizyczna szuflada kartoteki z aparatem na sznurku: namacalna zmiana biura, CD2 6.6). Do dnia 10 polaroidy istnieją tylko dla rzeczy, które wcześniej przyjął Sam (jego kartoteka, niekompletna, z dziurami po wyrwanych zdjęciach: trop do wątku Poprzednik, bez zdradzania łańcucha, CD2 3.7b).

### 2.5 Zdjęcie od gościa (dowód sprzed zgubienia)
- Gość może położyć na ladzie **własne zdjęcie** rzeczy (odbitka z ząbkowanym brzegiem, inna niż polaroid biura). W drabinie dowodów to szczebel wyżej niż opis, ale **zdjęcie dowodzi posiadania, nie własności** (lekcja Hany: grała na tych skrzypcach siedem lat, ale są Konserwatorium).
- Zdjęcie może kłamać detalem: róg etui jeszcze cały (zdjęcie starsze niż uszkodzenie), wstążka w innym miejscu, zegarek z drugą wskazówką. Gracz przykłada zdjęcie do rzeczy (gest PARA).
- Dziecko zamiast zdjęcia przynosi **rysunek** (Ada, d6): czułość i humor w jednym (CD2 5.8).

### 2.6 Księga wydań (podpis)
- Przy wydaniu gość podpisuje się w Księdze wydań. Od dnia 10 gracz może **porównać podpis** z dokumentem lub z wcześniejszym wpisem (gest PARA). Kanon: pętla w literze „K” Very wraca w d10 (pokwitowanie pudełka) i w d24 (fabula_25_dni_v2 §3.3). Ten trop dostaje wreszcie mechanikę: gracz sam zauważa, że pętla jest ta sama co na umowie z prologu.

---

## 3. Narzędzia oględzin na blacie (jedno nowe co kilka dni)

Na blacie rzecz można: obrócić (przeciągnięcie), otworzyć (już jest: `inspect()`), i użyć jednego z pięciu narzędzi. Narzędzia to przedmioty w pasie akcji (x 1100-1600), nigdy nakładka na okienko. Każde użycie daje **ślad**: jedno zdanie na pasku kartki przy blacie i, jeśli trzeba, odblokowanie pytania (pole `wymaga` w danych działa już dziś, wystarczy, że narzędzie ustawia `secrets[id]`).

| Narzędzie | Gest | Co ujawnia | Wchodzi | Pierwsza sprawa (z istniejących danych) |
|---|---|---|---|---|
| **PARA** | przyłóż jedno do drugiego | różnicę między dwiema rzeczami, rzeczą a zdjęciem, podpisem a podpisem | d1 | Thomas: prawa z kieszeni + lewa z magazynu, nitka czarna / biała |
| **PRZELICZ** | przesuwanie banknotów palcem, gość liczy na głos | kwotę i braki | d1 | Rosa: 129 $ = 3 × 43 $, liczy przy szybie (jej tik) |
| **LUPA** | najedź, krążek powiększenia | grawer, wydrapane litery, numer seryjny, nitka, ślady kleju | d2 | Hana: etykieta lutnika w skrzypcach („Konserwatorium”); Jonah: pęknięcie klamry świeże czy stare |
| **NOS** | zbliż rzecz do twarzy (krótki oddech, dźwięk) | zapach jednym słowem: ryba z Doków, smar zajezdni, szpitalny spirytus, tytoń, perfumy | d5 | Gus: portfel pachnie smarem i rybą (Doki, szóstka), choć gość mówi „jedenastka”: kłamie, bo wstydzi się, dokąd jeździ |
| **ŚWIATŁO** | podnieś pod lampę sodową | to, co prześwituje: wywabiony napis, znak wodny, kartka pod podszewką, zszyty szew | d6 (po sobocie 1: wymiana żarówki na mocniejszą) | Ada: pod światłem widać, że ucho królika doszyto dwa razy, drugą nitką cieńszą: ktoś go już kiedyś zwracał |

Zasady:
- **Reguły rosną po jednej** (CD2 2.5, 6.5): d1 PARA i PRZELICZ wynikają z rozmowy (gość mówi „proszę przyłożyć”), d2 lupa, d5 nos, d6 światło, d8 zdjęcie od gościa, d10 podpis, d11 kartoteka. Po d11 nic nowego w narzędziach, za to sprawy łączą kilka narzędzi.
- **Uczciwość (CD2 3.6):** każda sprawa z kłamstwem ma co najmniej **jeden dowód osiągalny w najwyżej dwóch ruchach** i podpowiedź w świecie (gość sam o czymś wspomina, rzecz ma widoczny detal, Leo coś mamrocze przy dostawie).
- **Mikrogag przy każdym ruchu** (CD2 6.3, Hidden Folks): lupa na pustym miejscu pokazuje okruszek albo mrówkę; nos na parasolu „deszcz, co za niespodzianka”; światło na kopercie z pieniędzmi „nie, nie widać, ile”. Jedno zdanie, rotowane, nigdy dwa razy w tej samej nocy.
- **Ślad nie jest werdyktem.** Narzędzie mówi „pachnie rybą”, nie „kłamie”. Wniosek należy do gracza.

### 3.1 Przyłóż słowo do śladu (konfrontacja)
To jest główne nowe „weryfikuj”. Gracz przeciąga słowo z Karty zgłoszenia (np. „jedenastka”) na ślad (np. wpis w księdze „linia 6” albo zapach „Doki”).
- **Trafne przyłożenie** otwiera pytanie konfrontacyjne: „Mówisz jedenastka, a w księdze stoi szóstka.” Gość odpowiada prawdą albo drugim kłamstwem (wtedy jego tik się zmienia, CD2 4.4).
- **Nietrafne przyłożenie** (słowo i ślad się zgadzają) daje gościowi zdanie zniecierpliwienia i zabiera 1 kropkę cierpliwości (`ST.pat`). Bez ekranu porażki.
- Maks. jedna konfrontacja na turę: konfrontacja zastępuje jedno z trzech pytań, nie dokłada czwartego (tempo rozmowy zostaje).

---

## 4. Co wydajemy (i jak)

Wydanie to sekwencja trzech mikrogestów, każdy z dźwiękiem: **(1) rzecz przez szparę** (już jest: przeciągnięcie na szybę), **(2) oderwanie odcinka** (szarpnięcie w dół, „trrrk”), **(3) gość podpisuje** (skrobanie pióra za szybą, ręka gościa wchodzi w kadr). Dni 1-3: kroki 2-3 robią się same, gracz tylko je widzi i słyszy. Od d4 odcinek trzeba oderwać samemu (zapomnisz = „wydanie bez wpisu”, patrz 5).

Co może wyjść przez okienko:

| Wydanie | Kiedy | Przykład z danych |
|---|---|---|
| **Całość** | właściciel potwierdzony | Thomas: rękawiczka |
| **Rzecz bez zawartości** (zawartość do sejfu lub do właściwej osoby) | rzecz i zawartość mają różnych właścicieli | Bree: aparat wraca, ale **pełny film 36/36 zostaje** do wyjaśnienia (zdjęcia Cooper Street); Sylvia: szachy tak, koperta „wycieczka 3b” do szkoły |
| **Zawartość bez rzeczy** | rzecz należy do instytucji | Hana: nuty i kalafonia tak, skrzypce Konserwatorium nie |
| **Odpis / zaświadczenie** zamiast rzeczy | gość potrzebuje dowodu, nie przedmiotu | Hugo: zaświadczenie, że wędka jest w biurze (alibi); Grace: odpis legitymacji |
| **Kwit oczekiwania** (zatrzymaj) | brakuje dowodu, gość ma wrócić | Thomas „zatrzymaj_sprawdz”: dostaje kwit z datą, wraca w d24 (już w kanonie) |
| **Nic (zasuń okienko)** | odmowa | Evan d3, jeśli gracz zauważy kłamstwo |

To daje „trzecią opcję” CD2 7.3 bez dopisywania nowych gałęzi fabuły: część istniejących akcji (`kopia_osobno`, `kartka_odpis`, `zaswiadczenie`, `wydaj_lenie_cala`, `przechowaj_z_kwitem`) już jest takim częściowym wydaniem; gest tylko je urealnia.

---

## 5. Gdzie można się pomylić (tabela błędów)

Każdy błąd ma **przyczynę w świecie**, **sposób wykrycia przed decyzją**, **moment ujawnienia** (opóźniony, CD2 3.4 i 6.8) i **koszt w trzech walutach**.

| # | Błąd | Jak uniknąć | Kiedy wychodzi | Kasa | Urząd | Ludzie |
|---|---|---|---|---|---|---|
| B1 | **Zły bliźniak** (wydana podobna rzecz z innym numerem) | numer z Księgi przyjęć vs zawieszka; lupa na znaku | za 1-2 dni: właściciel prawdziwej rzeczy przychodzi, a jego rzecz już wyszła | potrącenie wartości rzeczy (15-120 $) | −1 przy audycie | −1 |
| B2 | **Właściwa rzecz, zły człowiek** (kłamca) | przyłożenie słowa do śladu; zdjęcie vs rzecz; podpis | za 1-3 dni: prawdziwy właściciel w okienku albo list | 0 $ (chyba że rzecz miała polaroid: −30 $ protokół) | −1 | −2 (pokrzywdzony opowiada na ulicy) |
| B3 | **Odmowa prawdziwemu właścicielowi** | jak B2 | następnej nocy wraca z mocniejszym dowodem (zdjęcie, świadek): można naprawić | 0 $ | 0 | −1 |
| B4 | **Niepełne wydanie** (zawartość została albo zniknęła) | PRZELICZ, polaroid przyjęcia | od razu, jeśli gość liczy przy szybie (Rosa, Gus); w sobotę, jeśli jest polaroid | brakująca kwota z kieszeni | −1 | −1 |
| B5 | **Wydanie bez wpisu** (nieoderwany odcinek) | oderwij odcinek | sobota: rozbieżność księgi | 1. w tygodniu: upomnienie Victora (list, 0 $); kolejne: −15 $ | −1 | 0 |
| B6 | **Pełnomocnik bez pełnomocnictwa** (siostra, mąż, dziecko) | pytanie „na kogo wpisać”, podpis | jak B2 | jak B2 | −1 | zależnie od sprawy (Evan/Lena d3) |
| B7 | **Pośpiech** (dzwonek, „masz 40 s”) | nie da się zawsze: to świadoma presja (CD2 7.6) | jak w błędzie, który z niej wynika | | | |

Zasady kar (CD2 11.3 „kary bez nauki zakazane”):
- **Pierwsza rozbieżność tygodnia jest darmowa** (upomnienie w liście od Victora, napisane po ludzku). Potem dopiero pieniądze. Lekcja Papers, Please: ostrzeżenia przed mandatem.
- **Każdy błąd jest opowiedziany przez człowieka, nie przez licznik** (CD2 7.7): „Przyszła kobieta po swój czarny parasol. Twój ma pękniętą szprychę, jej nie.”
- **Naprawa jest możliwa** w B1, B3, B5 (rzecz wraca, gość wraca z dowodem, wpis wsteczny `wpisz_wstecz` istnieje już w d24). Gracz uczy się, a nie traci dnia.
- **Brak natychmiastowego „DOBRZE/ŹLE” po wydaniu.** Mina za szybą i zdanie reakcji tak (już są), werdykt nie.

---

## 6. Konsekwencje: kasa, Urząd, Ludzie

**Kasa.** Dniówka 40 $ za wizytę zostaje. Nowe: potrącenia z tabeli 5 i **znaleźne**: uczciwy znalazca (Ada, Pruitt) może dostać 10 % wartości rzeczy, jeśli właściciel się zgłosi (realizm: Japonia 5-20 %). To nie jest nagroda za moralność gracza, tylko pieniądze dla postaci, które gracz widzi w liście wieczornym.

**Kradzież przestaje być losowaniem (zastępuje `rng` audytu w `saturday()`):**

| Skąd bierzesz | Kto patrzy | Wynik |
|---|---|---|
| z rzeczy **z polaroidem** | Urząd (kartoteka) | sobota: wykryte zawsze; kara 2 × kwota, Urząd −2, list od Victora z kopią polaroidu |
| z rzeczy, którą gość **liczy przy szybie** (tik Rosy, Gusa) | gość | od razu: „Brakuje dwudziestu.” Gość wychodzi bez słowa, Ludzie −2, wraca w echu |
| z rzeczy **bez polaroidu i bez liczenia** (sterta po burzy, rzeczy Sama) | nikt | nie wychodzi nigdy w pieniądzach; wychodzi w ludziach (np. dziecko pyta, czemu misiowi brakuje oka) |

Dzięki temu pokusa jest **decyzją o ryzyku, którą da się zrozumieć**, a polaroid (ulepszenie biura d11) zmienia grę: od tej nocy kraść się da już tylko ze sterty. Pętla „chciwy gracz zarabia 2 439 $ bez konsekwencji” (docs/QA_NOC.md) się zamyka.

**Urząd.** Rozbieżności z księgi i kartoteki zbiera Victor (jest neutralny i chce czystego protokołu, kanon v2 §3.1). Sobota pokazuje **raport rozbieżności jako stronę z jego notesu**: 0-3 linijki, każda z numerem kwitu i kwotą. Wysoki Urząd = mniej kontroli; niski = Victor przychodzi w tygodniu z dodatkową kontrolą (wizyta, a nie liczba).

**Ludzie.** Pokrzywdzony właściciel (B1-B3) **wraca do okienka albo pisze**. Dobre wydanie wraca jako czułość: Thomas w niedzielę z obiema rękawiczkami; Ada przynosi drugi rysunek. Licznik Ludzi spada, ale gracz widzi twarz.

---

## 7. Magazyn: bliźniaki i numer

- Od d4 na półce leży **bliźniak** celu: ten sam sprite, inny numer i jeden inny detal (lupa). Naprawić w `addDay()`: podobna rzecz (`s:` + id) nie może być podmieniana przez pętlę „zamień wypełniacz o tym samym sprite”.
- Szukanie zaczyna się od Księgi: wiersz z nocy i linii daje numer i **kod półki** (4-A, 6-B…). Zakładki skrzyń zostają, ale dochodzi numer na zawieszce (widoczny na hover i w lupie).
- **Pomoc fabularna zamiast podświetlenia** (CD2 6.3): po 2 pudłach gość doprecyzowuje („Ta z białą nitką, mówiłem”), po 4 Leo z zaplecza woła numer półki. Obecne `hintp` na slocie celu zostaje tylko w trybie „mniej trudności” w ustawieniach.
- **Burza** przesuwa skrzynki (już jest w `ST.storm`), ale **księga zapisuje przesunięcie** („sk. 11 przeniesiona do 6, przeciek”). Gość mówi prawdę, magazyn jest w bałaganie z powodu, który widać.

---

## 8. Teczka sprawy: schemat danych (dla wątku dialogów i build_data.py)

Nowe pole `sprawa` w każdej wizycie. Wszystko, co mówi gość, musi się z nią zgadzać, chyba że odpowiedź ma `mina: "klamie"` i wskazuje dowód.

```json
"sprawa": {
  "nr": "0563",
  "linia": "4",
  "przyjeto": {"noc": 1, "godz": "22:50", "miejsce": "wagon 2, pod siedzeniem", "przyniosl": "Leo M."},
  "polka": "4-A",
  "opis_ksiegi": "rękawiczka skórz. lewa, brąz.",
  "cechy": {"kolor": "brąz", "znak": "biała nitka przy kciuku", "w_srodku": "kwit 0417 w mankiecie"},
  "blizniak": {"nr": "0566", "roznica": "nitka ciemna, rozmiar większy"},
  "slady": [
    {"narzedzie": "para", "id": "d1_para_nitka", "tekst": "W prawej nitka czarna, w lewej biała.", "odblokowuje": null},
    {"narzedzie": "lupa", "id": "d1_kwit_0417", "tekst": "W mankiecie kwit 0417.", "odblokowuje": "d1_kwit_0417"}
  ],
  "zdjecie_przyjecia": null,
  "zdjecie_goscia": null,
  "wlasciciel": "Ellen Ward (zm.), odbiera mąż Thomas",
  "klamstwa": [
    {"pytanie": "Czy to pierwsza wizyta w tym biurze?", "fakt": "kwit 0417 sprzed 3 tygodni", "dowod": "lupa:d1_kwit_0417"}
  ],
  "wydanie": {"calosc": ["rękawiczka"], "czesciowe": []}
}
```

Reguły walidatora (dopisać do docs/tools/validate_dialogs.py; zalążek już działa w check_spojnosc.py):
1. Linia podana w `wejscie` i turze 1 (bez `klamie`) == `sprawa.linia` == `line` w data.js.
2. Każda odpowiedź `klamie` ma wpis w `klamstwa` z `dowod`, który wskazuje istniejący ślad (CD2 4: „kłamstwo jest sprawdzalne”).
3. Godzina z dialogu nie jest wcześniejsza niż `przyjeto.godz`, chyba że to kłamstwo z dowodem.
4. Każda sprawa z kłamstwem ma dowód osiągalny narzędziem, które jest już odblokowane w tym dniu (tabela 3).
5. `opis_ksiegi` nie zawiera żadnej wartości z `cechy.znak` ani `cechy.w_srodku` (księga nie podpowiada).

---

## 9. Pierwsze 10 dni w nowej akcji (bez zmiany fabuły, tylko na istniejących danych)

| Dzień | Sprawa | Nowa czynność | Jak można się pomylić | Moment (docs/MOMENTY.md) |
|---|---|---|---|---|
| 1 | Thomas | PARA: dwie rękawiczki kciukami do siebie | brak (nauka) | ŁZA: rękawiczki „trzymają się za ręce” na blacie |
| 1 | Rosa | PRZELICZ: 129 $ przy szybie, odcinek zbiorczy na I. Bell | `wez_20`: Rosa liczy i mówi „Brakuje dwudziestu.” | DYLEMAT: widz widzi, że ona liczy co do centa |
| 2 | Jonah | LUPA na klamrze i w kieszeni (pierścionek, rata 200 $) | `wez_pierscionek` przy pełnej świadomości, że to oświadczyny | ŚMIECH/ŁZA: trzy wersje oświadczyn na serwetce |
| 2 | Hana | LUPA: etykieta lutnika = Konserwatorium | wydanie całości osobie, której wypożyczenie wygasło | 50/50: wydać skrzypce czy tylko nuty? |
| 3 | Evan i Lena | KSIĘGA: godzina i linia; PARA: zdjęcie Evana vs etui (róg cały na zdjęciu = zdjęcie stare) | wydanie mężowi | DYLEMAT NA ŻYWO: SMS 21:48 na ekranie |
| 4 | Iris | BLIŹNIAK: dwie płaskie paczki w płótnie, numer decyduje | wydanie złej paczki = Skrytka dostaje cudzy towar | ZASKOCZENIE |
| 5 | Gus | NOS: smar i ryba (Doki) vs „jedenastka”; dwa dowody w portfelu | wydanie bez pytania o drugi dowód | ŚMIECH: szlafrok + „portfel pachnie rybą, a ja nie” |
| 6 | Ada | ŚWIATŁO: ucho doszyte dwa razy; rysunek królika zamiast zdjęcia | brak kwitu dla znalazcy (Ada chce kwit!) | ŁZA: rysunek przypięty do szyby |
| 8 | Bree | ZDJĘCIE (paragon z komisu) vs LUPA (R.O. pod baterią): kupno ≠ własność dziś | wydanie z filmem 36/36 | 50/50: wydać aparat bez filmu? |
| 10 | Vera | PODPIS: pętla „K” na pokwitowaniu = pętla z umowy z prologu | brak (trop) | „A przecież mówiłem!” w d24 |

Uwaga dla wątku fabuły: zdjęcie Evana (d3), zapach portfela Gusa (d5), podwójnie doszyte ucho królika (d6) i bliźniacza paczka Iris (d4) to **nowe fakty**. Dopisać je w teczce sprawy i w dialogu albo wymienić na fakt już istniejący. Reszta tabeli używa tylko faktów z obecnych danych.

---

## 10. Układ na ekranie (zgodnie z UX_PROWADZENIE, scena 1620×1080, 3:2)

- **Okienko (x 280-1090, y 56-770) zostaje święte.** Żadne narzędzie, kartka ani ślad tam nie leży.
- **Blat (y 770-1000):** rzecz w środku (x ~700), Karta zgłoszenia przy lewej krawędzi blatu (x 300-460), zdjęcie od gościa przy prawej (x 900-1060) dopiero, gdy gość je położy. To scena (L2), nie interfejs.
- **Pas akcji (x 1100-1600):** w fazie BLAT pięć ikon narzędzi jako przedmioty (lupa, nos jako dłoń przy twarzy, lampa, para jako dwie dłonie, banknot), aktywne tylko te odblokowane; w fazie SZYBA gesty wydania.
- **Szuflada z prawej (x 1100-1620):** trzy zakładki zamiast jednej: Notatnik · Księga przyjęć · Kartoteka. Otwarcie pauzuje rozmowę (UX L6), poza scenami z zegarem (R6).
- **Ślad** pojawia się jako pasek papieru w pasie tekstu, 1 zdanie, zostaje do końca wizyty (R5: informacja do decyzji nie jest toastem).
- Klawiatura: 1-5 wybiera narzędzie, Enter używa, Tab przechodzi po słowach na Karcie (R8).

---

## 11. Fotografie: co trzeba wygenerować

Pełny prompt: **prompty/zdjecia_przedmiotow_JEDEN_CZAT.md** (jeden czat, 26 obrazów, referencje na końcu pierwszej wiadomości). Zawiera:
- 4 blankiety bez tekstu (KB1-KB4): strona Księgi przyjęć, Karta zgłoszenia, zawieszka z odcinkiem, karta kartoteki;
- arkusz narzędzi (KN1): lupa, banknoty, odcinki, pióro, sznurek z zawieszkami i inne;
- 12 polaroidów przyjęcia (FP01-FP12) z zawartością rozłożoną obok;
- 9 zdjęć i rysunków od gości (FG01-FG09), w tym zdjęcia-pułapki.
Wyniki zapisać do `/mnt/project-files/lostfraud_art7/` pod nazwami z promptu.

---

## 12. Self-review CD2 (trzy role)

**GRACZ.** Wiem, co robić: znaleźć numer, położyć rzecz, obejrzeć, wydać. Każdy ruch coś daje (dźwięk, ślad, nowe pytanie). Nuda groziłaby, gdyby każda sprawa wymagała wszystkich narzędzi, dlatego d1-d10 używa jednego nowego narzędzia na dzień, a reszta jest opcjonalna.

**RECENZENT STEAM.** „Kolejny klon Papers, Please z lupą.” Odpowiedź: nie sprawdzamy dokumentów według regulaminu; sprawdzamy, czy opowieść człowieka zgadza się z rzeczą, a werdykt należy do gracza (zdjęcie dowodzi posiadania, nie własności; ślad nie mówi „kłamie”). „Kary z dupy.” Odpowiedź: pierwsza rozbieżność darmowa, każdy błąd ma dowód osiągalny w 2 ruchach i da się go naprawić. „Pixel hunting lupą.” Odpowiedź: lupa pokazuje tylko 1-2 miejsca na rzeczy, każde zaznaczone fakturą jaśniejszą niż reszta.

**STREAMER.** Krzyk na czacie: Rosa liczy przy szybie, a streamer właśnie wziął dwadzieścia. 50/50: Hana (skrzypce czy nuty), Bree (aparat bez filmu). Śmiech: zdjęcie Hugo z rybą, która jest za duża, żeby była prawdziwa. Łza: rękawiczki kciukami do siebie, rysunek Ady na szybie.

**ZWERYFIKOWANE:** przeczytany kod `pile()`, `decide()`, `addDay()`, `saturday()`, `bump()` w game/game.js na main (9ccb1ad); dane 50 wizyt z game/data.js; `check_spojnosc.py` uruchomiony: 22 niezgodności (lista w sekcji 13).
**NIEZWERYFIKOWANE:** nic z tego nie jest jeszcze zaimplementowane ani zagrane; czasy ruchów (≤ 60 s) to szacunek; brzmienie dźwięków narzędzi; czytelność numerów na zawieszce w 64 px.

---

## 13. Załącznik: niespójności linii (wynik check_spojnosc.py na main)

Gość podaje linię zgubienia, gra wkłada rzecz do innej skrzynki. Poprawka w danych: `line` w `game/build_data.py` ma wynikać z dialogu (albo dialog z `sprawa.linia`), nie odwrotnie.

| Wizyta | Gość mówi | Skrzynka w grze |
|---|---|---|
| d2_hana | 4 | 6 |
| d3_dana | 6 | 11 |
| d5_noah | 11 | 4 |
| d5_gus | 11 | 6 (wyjątek: jeśli zostaje NOS z §9, Gus kłamie o linii i potrzebuje `mina: klamie` + dowodu) |
| d7_kit | 4 | 11 |
| d8_bree | 11 | 4 |
| d9_stahl | 4 | 11 |
| d10_dario | 11 | 4 |
| d13_elias | „wróciła szóstką” | 4 |
| d14_noah | 6 | 4 |
| d14_billie | 4 | 11 |
| d15_pruitt | 11 | 4 |
| d16_dorian | 11 | 4 |
| d17_evan | 4 | 6 |
| d17_sylvia | 4 | 6 |
| d18_iris_nora | 6 | 11 |
| d18_hugo | 6 | 4 |
| d19_ada_leo | 6 | 4 |
| d22_jonah | 4 | 6 |
| d23_iris_nora_victor | 6 | 4 |
| d23_rosa | 11 | 6 |
| d24_leo | 6 | 4 |

Uruchomienie: `python3 -I docs/tools/check_spojnosc.py` (kod wyjścia 1 przy niezgodnościach, gotowe do QA przed publikacją).
