# DO CHATGPT: jedno wklejenie na czat (stan 12.11.2026)

Trzy paczki, każda w OSOBNYM, NOWYM czacie ChatGPT. W każdej robisz jedno: kopiujesz cały blok z kodu i wklejasz. Nic nie załączasz i nic nie dopisujesz: referencje (ścieżki z GitHuba), prompt i instrukcja zapisu wyniku do repo są w tym samym bloku. Czwarta paczka to dźwięki (ElevenLabs, nie ChatGPT).

| # | Paczka | Wynik trafia do repo |
|---|--------|----------------------|
| 1 | Poprawki portretów + Ines i Evan (6 obrazów) | `art/gpt_wyniki/portrety/` |
| 2 | Fotografie przedmiotów, blankiety, narzędzia (26 obrazów) | `art/gpt_wyniki/fotografie/` |
| 3 | Kask, koszyk, księga wydań, kot (2 arkusze) | `art/gpt_wyniki/brakujace/` |
| 4 | Dźwięki (16 + 8 mamrotań) | ElevenLabs, robi osobny wątek |

Jeśli ChatGPT napisze, że nie umie otworzyć obrazu z repo albo zapisać do niego, załącz plik ręcznie / pobierz wyniki i wrzuć do folderu projektu. Jeśli się zatnie, napisz "dalej". Jeśli wyjdzie sepia, szarość albo litery: "Popraw obraz N: tylko czerń i krem (pomarańcz tylko jako światło), zero półtonów, bez liter".

---

## 1. PORTRETY: poprawki + Ines i Evan

Nowy czat, JEDNO wklejenie (nic nie załączasz, wszystko jest w bloku):

```
REFERENCJE: otwórz z GitHuba dunnoxox/L-F (branch main) te 8 obrazów i traktuj jako załączniki: art/portrety_goscie/G06-ada.png, G15-grace.png, G19-billie.png, G23-sylvia.png, G25-kofi.png, G11-stahl.png oraz art/portrety_referencje/L4-twarze.png i art/lostfraud_art5/B1-wdowiec.png.

Jesteś dyrektorem artystycznym gry. W tej rozmowie wygeneruj 6 obrazów, jeden po drugim, bez pytania o zgodę i bez streszczeń: 4 poprawione portrety i 2 nowe. Pod każdym obrazem napisz tylko etykietę, np. "G15 gotowe 1/6". Jeśli system każe Ci się zatrzymać, napisz "Wpisz: dalej" i kontynuuj od następnego.

STYL (bez zmian względem załączonych portretów): odbitka z linorytu, trzy farby: czerń płyty, kremowa biel papieru i brudny pomarańcz lampy sodowej. Formy to pełne kremowe plamy światła wycięte z czerni, cień to czysta czerń, faktura to krótkie cięcia dłuta. Zero szarości, brązu, sepii, gradientów i rastra. Pomarańcz tylko jako dwa lub trzy małe odblaski lampy z prawej strony, nigdy kolor ubrania czy skóry. Bez tekstu, liter, cyfr i logo.

UKŁAD (jak w załączonych G*.png i B1-wdowiec.png): poziomo 1536x1024, tło czysta czerń, cztery popiersia tej samej osoby w czterech równych kolumnach, kadr od czubka głowy po pas, głowa w górnej połowie kolumny, rekwizyt nisko przed piersią w widocznej dłoni. NIC nie wychodzi poza swoją kolumnę ani nie dotyka krawędzi obrazu, między kolumnami czarny odstęp. Miny od lewej: 1 NEUTRALNA, 2 MÓWI, 3 KŁAMIE (albo przemilcza), 4 EMOCJA. Mimika subtelna, ludzka.

CIEMNA SKÓRA: oddajemy ją WYŁĄCZNIE proporcją czerni do kremu. Twarz jest w większości czarna, krem zostaje tylko na kościach policzkowych, czole, grzbiecie nosa, dolnej wardze i brodzie, jak u G25-kofi.png. Ciemnej skóry nie wolno zostawić kremowo-białej ani wypełnić kremem z kreskowaniem.

POPRAWKI (ta sama osoba, ta sama poza, ubranie, rekwizyt i miny co w załączonym pliku o tym numerze; zmieniasz tylko to, co opisane):

G15 GRACE OKOYE (załączony G15-grace.png): twarz jest teraz za jasna. Przerób skórę według zasady CIEMNA SKÓRA, wzór G25-kofi.png. Dłonie i szyja tak samo ciemne jak twarz. Reszta bez zmian.

G23 SYLVIA OKAFOR (załączony G23-sylvia.png): twarz jest teraz za jasna. Przerób skórę według zasady CIEMNA SKÓRA, wzór G25-kofi.png; okulary na łańcuszku zostają, szkła błyszczą kremem. Dłonie tak samo ciemne jak twarz. Reszta bez zmian.

G06 ADA VALE (załączony G06-ada.png): żółta peleryna z kapturem wyszła ciemna. Peleryna ma być najjaśniejszą plamą na obrazie: pełny krem z drobnymi nacięciami dłuta, wyraźnie jaśniejsza od twarzy i królika. Czapka, królik i miny bez zmian.

G19 BILLIE CROSS (załączony G19-billie.png): kierownica hulajnogi wychodzi poza kolumny. Usuń hulajnogę z kadru: Billie trzyma kask w pandy oburącz przed piersią, nisko, ochraniacz na kolanie nie jest potrzebny. Każde popiersie mieści się w swojej kolumnie z wyraźnym czarnym odstępem. Twarz, fryzura, bluza i miny bez zmian.

NOWE TWARZE (zupełnie nowe osoby, niepodobne do żadnej z załączonych):

G27 INES CALLOWAY: 61 lat, emerytowana urzędniczka, która rozwiesza ogłoszenia o zaginionym kocie. Szczupła, wyprostowana, siwe włosy obcięte równo na pazia, wąskie usta, okulary w cienkiej oprawie zsunięte na czubek nosa, zapięty pod szyję kardigan pod starym płaszczem. Rekwizyt: czarny parasol z rączką w kształcie kaczej głowy, trzymany pionowo jak laska, w drugiej dłoni plik kartek z samą sylwetką kota (bez liter). Mina 2: poprawia rozmówcę, palec lekko uniesiony, usta w pół słowa. Mina 3 (ukryty cel): poprawia okulary i patrzy ponad nimi, uprzejmie, ale za długo. Mina 4: wzruszenie, które próbuje ukryć, zaciśnięte usta i mokre oczy, dłoń mocniej ściska parasol.

G28 EVAN DOYLE: 37 lat, mąż, grzeczny kłamca. Gładko zaczesane ciemne włosy z przedziałkiem, BEZ kapelusza, BEZ wąsów, gładko ogolony, miękka linia szczęki, porządna koszula i krawat pod rozpiętym płaszczem, jeden mankiet wygnieciony. Ma być wyraźnie młodszy i zupełnie inny niż G11-stahl.png. Rekwizyt: jedna dłoń poprawia mankiet drugiej ręki, w tej drugiej brązowe skórzane etui na klucze z zatrzaskiem. Mina 2: mówi grzecznie, pełnym zdaniem, lekki uprzejmy uśmiech. Mina 3: za gładki uśmiech, wzrok ucieka na mankiet. Mina 4: strach, gdy plan się sypie, oczy szeroko, usta rozchylone, dłoń zamarła na mankiecie.

NA KOŃCU: spakuj 6 obrazów do jednego ZIP-a o nazwach: G15-grace.png, G23-sylvia.png, G06-ada.png, G19-billie.png, G27-ines.png, G28-evan.png. Jeśli nie możesz zrobić ZIP-a, wypisz te nazwy w kolejności obrazów. Potem napisz, które obrazy odbiegają od zasad.

REFERENCJE (załączone): G06-ada.png, G15-grace.png, G19-billie.png, G23-sylvia.png to obrazy do poprawki. G25-kofi.png to wzór ciemnej skóry. G11-stahl.png pokazuje, do kogo Evan NIE może być podobny. L4-twarze.png to wzorzec rzeźbienia twarzy, B1-wdowiec.png to wzorzec układu czterech popiersi.

WYNIK: gdy skończysz wszystkie obrazy, zapisz je w repo dunnoxox/L-F na nowym branchu gpt/wyniki-portrety (nie na main), w folderze art/gpt_wyniki/portrety/, pod nazwami: G15-grace.png, G23-sylvia.png, G06-ada.png, G19-billie.png, G27-ines.png, G28-evan.png, i otwórz Pull Request do main. Jeśli nie możesz zapisywać do repo, napisz to i podaj obrazy do pobrania.
```

---

## 2. FOTOGRAFIE PRZEDMIOTÓW, BLANKIETY, NARZĘDZIA (26 obrazów)

Nowy czat, JEDNO wklejenie (nic nie załączasz, wszystko jest w bloku):

```
REFERENCJE: otwórz z GitHuba dunnoxox/L-F (branch main) te 5 obrazów i traktuj jako załączniki, w tej kolejności: art/lostfraud_art6/Z1.png, art/lostfraud_art6/W3.png, art/lostfraud_art5/C4.png, codex/okienko_fx/refs_visual/K4-portfel.jpg, art/portrety_referencje/L4-twarze.png.

Generuję komplet zasobów do gry: 26 obrazów, wszystkie po kolei w tym jednym czacie. Pracuj samodzielnie: generuj jeden obraz po drugim, bez pytania o zgodę, bez streszczeń, bez łączenia obrazów, niczego nie pomijaj. Pod każdym obrazem tylko etykieta, np. "FP03 gotowe 8/26". Jeśli system każe Ci się zatrzymać, napisz "Wpisz: dalej" i po mojej odpowiedzi kontynuuj od następnego. Kolejność: KB1-KB4, KN1, FP01-FP12, FG01-FG09. Na końcu wypisz listę etykiet i które obrazy wyszły niezgodnie ze stylem.

STYL dla wszystkich: LINORYT SODOWY, dopasuj się dokładnie do załączonych referencji. Odbitka z linorytu. Trzy farby i ani jednej więcej: czerń płyty, kremowa biel papieru, brudny pomarańcz lampy sodowej. Formy z pełnych kremowych plam światła wyciętych z czerni, cień to czysta czerń, krawędź w cieniu znika w tle. Bez konturów i cienkich równych linii. Faktura z krótkich cięć dłuta, kropek i zadrapań. Zero szarości, brązu, sepii, gradientów i rastra. Pomarańcz wyłącznie jako światło (plama lampy, odblask), nigdy jako kolor rzeczy. Rzeczy stare i zniszczone. Bez tekstu, liter, cyfr i logo: kartki, kwity i rubryki mają puste pola albo same poziome cięcia. Bez smugi w tle i bez pomarańczowej smugi w rogu.

TŁO DO WYCINANIA (KB, KN, FP, FG): jednolita czysta zieleń #00FF00, bez cienia, bez faktury. Zieleń nie pojawia się na samych obiektach. Obiekt nie dotyka krawędzi obrazu, ma duży margines.

=== CZĘŚĆ A: BLANKIETY KB1-KB4 (format 1536x1024, jeden obiekt na środku, lekko obrócony) ===
KB1 STRONA KSIĘGI PRZYJĘĆ: jedna otwarta prawa strona grubej księgi, kremowy papier z zagiętym rogiem i plamą po kubku. Siedem pustych kolumn (wąska, wąska, wąska, szeroka, szeroka, wąska, średnia) i czternaście pustych wierszy wyciętych dłutem. Zero znaków w rubrykach.
KB2 KARTA ZGŁOSZENIA: mała pionowa kartka z bloczka z perforacją u góry, pięć pustych pól jedno pod drugim, ostatnie większe. Róg przybrudzony odciskiem kciuka.
KB3 ZAWIESZKA Z ODCINKIEM: kartonowa zawieszka bagażowa z metalowym oczkiem i kawałkiem sznurka, w dolnej części perforacja oddzielająca odcinek. Puste pole na numer. Trzy wersje obok siebie w jednym obrazie: z jednym, dwoma i trzema nacięciami na górnej krawędzi.
KB4 KARTA KARTOTEKI: pozioma karta katalogowa z dziurką na dole, po lewej puste prostokątne miejsce na przyklejone zdjęcie z dwoma paskami taśmy, po prawej sześć pustych linii.

=== CZĘŚĆ B: ARKUSZ NARZĘDZI KN1 (1536x1024, 8 przedmiotów, 4 kolumny x 2 rzędy, duże odstępy, sylwetka czytelna w 64 px, tylko czerń i krem) ===
KN1: lupa z drewnianą rączką i pękniętą obwódką; plik złożonych banknotów spiętych gumką (bez cyfr i portretów, same cięcia); oderwany odcinek kwitu z poszarpaną perforacją; stare pióro wieczne z odpryśniętym lakierem; kłębek sznurka z trzema pustymi zawieszkami; pęseta; mała latarka kieszonkowa z wgnieceniem; gumowa pieczątka bez napisu, sam okrągły trzonek (leży na boku).

=== CZĘŚĆ C: POLAROIDY PRZYJĘCIA FP01-FP12 (format 1024x1024) ===
Każdy obraz: jedno zdjęcie natychmiastowe (polaroid) leżące płasko na zieleni, lekko obrócone. Ramka kremowa, gruba, szersza na dole, pusta (bez podpisu). W środku ramki kadr z góry na ciemny drewniany blat biura w stylu załączonego W3.png: rzecz w środku, jej zawartość rozłożona obok, plama sodowego światła z prawego górnego rogu kadru. Kadr ma wyglądać jak urzędowa dokumentacja: płasko, z góry, wszystko widoczne, nic artystycznego. Bez dłoni.
FP01 KOPERTA Z WYPŁATĄ: brązowa koperta z jedną krzywą zszywką, obok rozłożone banknoty w trzech równych kupkach i złożona kartka z czterema poziomymi kreskami, czwarta przekreślona.
FP02 PLECAK: czarny plecak z pękniętą klamrą, obok małe pudełko na pierścionek (zamknięte), złożony paragon, serwetka z trzema blokami linii, dwa przekreślone.
FP03 FUTERAŁ NA SKRZYPCE: sztywny otwarty futerał, w środku skrzypce, rączka owinięta taśmą, w wieku jasna naklejka i przyklejona pusta kartka; obok kostka kalafonii, szmatka, plik nut.
FP04 TELEFON W ETUI: czarny telefon w skórzanym etui z wyraźnie odklejonym jednym rogiem, obok złożone stare zdjęcie dwóch małych dziewczynek (twarze proste, w stylu L4).
FP05 PORTFEL: wytarty portfel na zatrzask rozłożony, obok DWA dokumenty tożsamości z tym samym zacienionym zdjęciem twarzy mężczyzny, zdjęcie dziewczynki, bilet z dziurką, zwinięte banknoty.
FP06 ZEGAREK KIESZONKOWY: mosiężny zegarek na łańcuszku z otwartym wieczkiem, pod wieczkiem wsunięta wąska karteczka; obok nic więcej.
FP07 APARAT ANALOGOWY: srebrny aparat z wgnieceniem w lewym górnym rogu, osłona baterii zdjęta i odwrócona (na niej dwie wydrapane kreski jak inicjały, bez liter), pasek z zawieszką i małym kluczem.
FP08 TOREBKA NA RAMIĘ: granatowa torebka (w druku: czerń z kremowym światłem), obok identyfikator szpitalny na smyczy ze zdjęciem kobiety, złożona kartka z jedną krótką linią.
FP09 POZYTYWKA: drewniana pozytywka z wyciętą gwiazdką na wieczku, ruchome dno wyjęte i oparte obok, pod nim bilet kolejowy i mały kartonik.
FP10 SZACHY SKŁADANE: otwarta drewniana szachownica, figury rozstawione w dwóch rzędach z jedną wyraźnie pustą przegródką po królu, obok gruba koperta z banknotami.
FP11 DWIE SZARE WALIZKI: dwie identyczne twarde walizki obok siebie, na rączce jednej wstążka i metka (pusta), druga ma pusty uchwyt na metkę. To ma być zagadka: różnią się tylko tym.
FP12 KASETKA NA RACHUNKI: stalowa kasetka z kluczykiem w zamku, otwarta, w środku plik pokwitowań z pustymi polami i karta z pustymi kolumnami.

=== CZĘŚĆ D: ZDJĘCIA OD GOŚCI FG01-FG09 (format 1024x1024) ===
Każdy obraz: stara, wywołana papierowa odbitka (NIE polaroid) z białym ząbkowanym brzegiem, trochę zagięta, z pęknięciem emulsji, leżąca na zieleni. Kadr w środku to prywatne zdjęcie zrobione przez zwykłego człowieka: krzywo, z bliska, z kawałkiem codziennego życia. Ludzie w stylu L4-twarze.png. Twarze mogą być ucięte kadrem.
FG01 SKRZYPACZKA: młoda kobieta w ciasnym pokoju trzyma futerał na skrzypce za rączkę owiniętą taśmą, widać tylko jej dłoń, ramię i pół twarzy w uśmiechu.
FG02 STARE ZDJĘCIE ETUI (pułapka): czarny telefon w skórzanym etui na stoliku kawiarni, etui ma WSZYSTKIE rogi całe i równe. Obok filiżanka.
FG03 RYSUNEK DZIECKA: zamiast zdjęcia kartka z zeszytu w kratkę z dziecięcym rysunkiem królika z jednym uchem przyszytym grubymi ściegami, rysunek zrobiony niezgrabnie, ale wciąż w trzech farbach i fakturze linorytu. Krzywo oderwany brzeg zamiast ząbkowanego.
FG04 KOT NA SŁUCHAWKACH: nastolatek z nausznymi słuchawkami, na muszli naklejka kota w kasku (kot wycięty prosto, bez napisu), selfie z ręką w kadrze.
FG05 PARAGON Z KOMISU (pułapka „kupno to nie własność”): sfotografowany z bliska paragon na ladzie komisu, same poziome cięcia zamiast tekstu, obok niego leży srebrny aparat BEZ wgniecenia (zdjęcie sprzed lat).
FG06 WĘDKARZ: mężczyzna w kaloszach dumnie trzyma ogromną rybę i teleskopową wędkę, ryba jest podejrzanie idealna, jak sklepowa, z metką z boku (pusta). Twarz ucięta na wysokości wąsów. To ma być zabawne.
FG07 KASK I HULAJNOGA: różowy (w druku: kremowe światło na czerni) kask rowerowy z naklejką gwiazdki zawieszony na kierownicy hulajnogi przy furtce szkoły.
FG08 POWERBANK NA KIEROWNICY: rower kurierski z torbą termiczną, na kierownicy przypięty powerbank z naklejką trasy w postaci linii z kropkami (mapa bez napisów).
FG09 PRAWA RĘKAWICZKA: starsza dłoń trzyma jedną skórzaną rękawiczkę zszytą przy kciuku ciemną nitką, na tle czarnego płaszcza, w kadrze kawałek cmentarnego płotu.

WYNIK: gdy skończysz wszystkie obrazy, zapisz je w repo dunnoxox/L-F na nowym branchu gpt/wyniki-fotografie (nie na main), w folderze art/gpt_wyniki/fotografie/, pod nazwami: KB1.png-KB4.png, KN1.png, FP01.png-FP12.png, FG01.png-FG09.png, i otwórz Pull Request do main. Jeśli nie możesz zapisywać do repo, napisz to i podaj obrazy do pobrania.
```

---

## 3. CZTERY BRAKUJĄCE GRAFIKI (kask, koszyk, księga wydań, kot)

Nowy czat, JEDNO wklejenie (nic nie załączasz, wszystko jest w bloku):

```
REFERENCJE: otwórz z GitHuba dunnoxox/L-F (branch main) te 4 obrazy i traktuj jako załączniki: art/lostfraud_art5/C1.png, art/lostfraud_art5/C2.png, codex/okienko_fx/refs_visual/K4-portfel.jpg, art/lostfraud_art5/T1.png.

Generuję dwa ostatnie arkusze zasobów do gry, po kolei w tym jednym czacie. Pracuj samodzielnie: wygeneruj obraz 1, potem obraz 2, bez pytania o zgodę, bez streszczeń, bez łączenia obrazów. Pod każdym obrazem tylko etykieta: "Z8 gotowe 1/2", "KOT gotowe 2/2". Jeśli system każe Ci się zatrzymać, napisz "Wpisz: dalej" i po mojej odpowiedzi kontynuuj. Na końcu napisz jednym zdaniem, czy któryś obraz odszedł od stylu.

STYL: LINORYT SODOWY, dokładnie jak w załączonych C1.png i C2.png (arkusze rzeczy na zielonym tle) oraz K4-portfel.png (rzeźbienie plamą światła). Odbitka z linorytu. Na tych arkuszach tylko dwie farby: czerń płyty i kremowa biel papieru. Zero pomarańczu, zero szarości, brązu, sepii, gradientów i rastra. Formy powstają z pełnych kremowych plam światła wyciętych z czerni, cień to czysta czerń. Bez linii obrysu i bez cienkich równych konturów. Faktura to krótkie cięcia dłuta, kropki i zadrapania na granicy światła i cienia. Rzeczy są stare i zniszczone, nic nie jest ładne, symetryczne ani ikoniczne. Bez tekstu, liter, cyfr, logo i znaków wodnych: kartki, etykiety i nalepki mają puste pola albo same poziome cięcia.

UKŁAD (ważne dla wycinania): format poziomy 1536x1024. Tło to jednolita czysta zieleń #00FF00, bez cienia, bez faktury, bez smugi w rogu. Zieleń nie pojawia się na samych rzeczach. Każdy obiekt ma własną zwartą czarno-kremową bryłę, duży odstęp od sąsiadów, nic nie dotyka krawędzi kadru. Sylwetka czytelna w 64 px.

=== OBRAZ 1: ARKUSZ Z8 (4 rzeczy, 2 kolumny x 2 rzędy) ===
Rzeczy leżą pod lekkim kątem, tak jak spadły na ladę biura rzeczy znalezionych.
1. KASK ROWEROWY nastolatki: miejski kask z otworami wentylacyjnymi, widok z boku i lekko z góry, porysowana skorupa, rozpięty pasek z klamrą zwisa luźno, z boku odklejająca się okrągła nalepka z prostym kształtem gwiazdki (bez liter), w środku widać brzeg miękkiej wyściółki.
2. WIKLINOWY KOSZYK starszej pani: owalny koszyk z pałąkiem, wyraźny splot wikliny, jeden pręt pęknięty i odstający. W środku przykryte kraciastą ściereczką: dwa pudełka leków, brązowa buteleczka i słoik śliwek z zakrętką przewiązaną sznurkiem. Etykiety puste.
3. KSIĘGA WYDAŃ OTWARTA: gruba urzędowa księga w płóciennej oprawie, otwarta mniej więcej w połowie, widok z góry pod kątem. Strony w rubrykach (same poziome i pionowe cięcia zamiast pisma), górne wiersze zapełnione krótkimi cięciami, jeden wiersz w połowie strony wyraźnie PUSTY. Przy grzbiecie widać poszarpany ślad po jednej wyrwanej kartce. Zagięte rogi, tasiemka zakładki.
4. KSIĘGA WYDAŃ ZAMKNIĘTA: ta sama księga zamknięta, leży skosem. Wytarte narożniki okute blachą, pęknięty grzbiet, na okładce pusta wklejona etykieta (bez liter), z boku wystaje tasiemka zakładki.

=== OBRAZ 2: ARKUSZ KOT (3 pozy, jeden rząd) ===
Ten sam kot w trzech pozach, każda jako osobna zwarta bryła na zielonym tle. Świat i nastrój jak w załączonym T1.png: nocne biuro, deszcz za szybą. Dachowiec, chudy, mokry od deszczu, sierść w krótkich cięciach dłuta, jedno ucho naderwane, bez obroży. Kremowe światło pada na niego z prawej strony (od lampy), lewa strona ginie w czerni. Oczy to dwa małe kremowe punkty. Kot realistyczny, nie kreskówkowy i nie słodki.
1. SIEDZI bokiem na wąskim parapecie (sam fragment parapetu pod łapami, krótki, czarno-kremowy), ogon owinięty wokół łap, głowa zwrócona w prawo i lekko w górę, patrzy na lampę.
2. SIEDZI przodem do widza, ta sama postura, głowa przechylona, oczy przymknięte (mruczy).
3. LEŻY zwinięty w kłębek na parapecie, ogon przy nosie, jedno oko otwarte.

WYNIK: gdy skończysz wszystkie obrazy, zapisz je w repo dunnoxox/L-F na nowym branchu gpt/wyniki-brakujace (nie na main), w folderze art/gpt_wyniki/brakujace/, pod nazwami: Z8.png, KOT.png, i otwórz Pull Request do main. Jeśli nie możesz zapisywać do repo, napisz to i podaj obrazy do pobrania.
```

---

## 4. DŹWIĘKI: 16 brakujących SFX (SZLIF_WOW F + BACKLOG_JAKOSCI §4)

Tych plików nie ma w `game/assets/snd/` (jest 42 SFX i 14 ambientów), a gra ich potrzebuje. To NIE jest ChatGPT, tylko **ElevenLabs → Sound Effects**. Nic nie załączasz. Jeśli wolisz, napisz w wątku, a wygeneruję je sam przez konektor ElevenLabs.

**Gdzie wrzucić:** `/mnt/project-files/audio/sfx_nowe/`, nazwy jak w pierwszej kolumnie. Ustawienia: 1-4 s, bez muzyki i bez mowy, 2 warianty i wybierz lepszy.

| Plik | Prompt (wklej) | P |
|------|----------------|---|
| `sfx_doorbell_shop.mp3` | small brass shop door bell, two quick ding-ding chimes, spring on a wooden door, dry room | P0 |
| `sfx_door_open_close.mp3` | old wooden door creak open and soft thud shut, wet wood, rain outside | P0 |
| `sfx_coins_paper_money.mp3` | counting paper bills and putting a few coins in a metal tin, quiet | P0 |
| `sfx_trace_pin.mp3` | a single sharp metal pin pressed into a cork board, short, dry, close | P0 |
| `sfx_pen_scratch.mp3` | ballpoint pen writing in a paper ledger, 2 seconds, close | P1 |
| `sfx_paper_envelope.mp3` | rustling an envelope being opened, paper tearing softly | P1 |
| `sfx_cloth_inside_bag.mp3` | hand rummaging in a leather bag, keys jingle, zipper | P1 |
| `sfx_umbrella_shake.mp3` | wet umbrella being shaken and folded | P1 |
| `sfx_glass_tap.mp3` | fingertip tapping glass window twice, rain behind | P1 |
| `sfx_police_radio_far.mp3` | police radio crackle with muffled dispatcher voice, no intelligible words, far away, rainy street | P1 |
| `sfx_cat_meow_window.mp3` | small cat meowing quietly behind window glass, rain | P1 |
| `sfx_radio_tune.mp3` | old radio dial turning between stations, static and fragments of music, no speech | P1 |
| `sfx_siren_pass.mp3` | single distant police siren passing through wet streets, fading, 4 seconds | P2 |
| `sfx_kettle_click.mp3` | electric kettle click off and a ceramic mug set on wood | P2 |
| `sfx_heartbeat_low.mp3` | slow low heartbeat, felt more than heard, 3 seconds, no music | P2 |
| `sfx_typewriter_key.mp3` | old typewriter, 5 keys and carriage bell | P2 |

**Mamrotania** (8 plików po 2 s, bez słów): `mumble_old_man.mp3` "older man throat clearing and sigh"; `mumble_young_woman.mp3` "young woman nervous sniff and quiet hm"; `mumble_heavy_man.mp3` "heavy man grunting low laugh"; `mumble_child.mp3` "child whisper breath"; `mumble_old_woman.mp3` "old woman cough"; `mumble_teen.mp3` "teen mumbling"; `mumble_clerk.mp3` "stern clerk exhale"; `mumble_crying.mp3` "woman crying quietly, stifled".

## Sprawdzone: czego jeszcze brakuje poza tym
- Rzeczy z sekcji B audytu: `kask`, `koszyk`, `ksiega` w paczce 3; reszta przypadków ma już sprite'y w grze.
- Wolne popiersia kolejki 2, 5, 6, 7: gra ich nie potrzebuje.
- C4 (jeden język rzeczy, bez cienkiego konturu): obchodzone w kodzie, nowy arkusz dopiero po paczce 2.
- C10 (osadzony krój): nie ChatGPT; wrzuć plik fontu OFL, jeśli chcesz, wątek gry go wpnie.
