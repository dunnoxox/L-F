# PACZKA 2 dla ChatGPT: brakujące grafiki Okienka (jeden czat, 18 obrazów)

**Narzędzie:** ChatGPT, jeden nowy czat. Wklej CAŁY blok z sekcji „PROMPT” jako pierwszą wiadomość i DOŁĄCZ NA KOŃCU tej samej wiadomości 5 plików referencyjnych (kolejność ma znaczenie):
1. `lostfraud_art5/B1-wdowiec.png` (układ arkusza postaci: 4 miny w 4 kolumnach na czarnym tle)
2. `lostfraud_art4/L4-twarze.png` (wzorzec twarzy)
3. `lostfraud_art6/W6.png` (wzorzec wnętrza rzeczy: rozłożone na blacie z plamą światła)
4. `lostfraud_art5/C1.png` (układ rzeczy na zielonym tle, do arkusza rąk)
5. `lostfraud_art4/K4-portfel.png` (jak rzeźbić ręce i rzeczy plamą światła)

Generator robi po jednym obrazie i czeka na „dalej”. Zapisuj wyniki pod nazwami z listy do `lostfraud_art6/` i wrzuć do wątku w Projekcie. Wynik każdego: PNG 1536x1024, poziomo.

Kolejność obrazów: F1–F11 (11 arkuszy twarzy), R1 (ręce), W24–W29 (6 wnętrz).

Kryteria akceptacji (sprawdzę sam po dostawie): 1) trzy farby i zero szarości/sepii; 2) brak tekstu, liter i cyfr (puste pola zostają puste); 3) w arkuszu twarzy ten sam człowiek w 4 kadrach, zmienia się tylko mina; 4) układ jak w referencji; 5) czytelne w małym rozmiarze.

## PROMPT (wklej w całości)
```
Robię zasoby do gry. Dostarczę 18 obrazów po kolei, każdy 1536x1024 poziomo. Teraz wykonaj OBRAZ F1 i czekaj na moje "dalej". Referencje są na końcu wiadomości: układ arkusza postaci z pierwszej, twarze z drugiej, wnętrza z trzeciej, rzeczy na zielonym tle z czwartej, rzeźbienie z piątej.

STYL: odbitka z linorytu. Trzy farby i ani jednej więcej: czerń płyty, kremowa biel papieru, brudny pomarańcz lampy sodowej.
1. Formy powstają z pełnych kremowych plam światła wyciętych z czerni. Cień to czysta czerń.
2. Żadnych linii obrysu dookoła i żadnych cienkich równych konturów.
3. Faktura: krótkie cięcia dłuta, kropki, zadrapania na granicy światła i cienia. Zero szarości, brązu, sepii, gradientów, rastra.
4. Pomarańcz tylko jako światło (odblask lampy, plama na blacie), nigdy jako kolor ubrania czy rzeczy.
5. Rzeczy i ubrania stare, zniszczone, nic ładnego ani symetrycznego.
6. Twarze i dłonie mają najwięcej detalu, emocja czytelna z daleka.
7. Absolutnie bez tekstu, liter, cyfr, logo. Puste pola na dokumentach zostają puste.
8. Nierówny brzeg odbitki, bez smugi w rogu.

ARKUSZE TWARZY (F1–F11): jedna osoba, bustem do pasa, 4 kolumny obok siebie na czarnym tle, jak w pierwszej referencji. TEN SAM CZŁOWIEK w 4 kolumnach (ta sama twarz, ubranie, fryzura), zmienia się tylko mina i delikatnie głowa. Kolumny od lewej: 1 neutralna, 2 mówi (usta lekko otwarte, patrzy na rozmówcę), 3 kłamie (wzrok ucieka w bok, kącik ust napięty, trudna do zauważenia), 4 emocja (wstyd, smutek albo strach, bez przesady). Krople deszczu mogą spływać po szybie przed postacią, ale każda kolumna ma być czysta i wycięta od sąsiedniej.

Osoby (każdą wykonuję na moje "dalej"):
F1 PRACZKA (Rosa, ok. 50): chustka na włosach, zaczerwienione spracowane dłonie widoczne przy brzegu, fartuch pod rozpiętym płaszczem, zmęczona, uparta.
F2 POMOCNIK KUCHENNY (ok. 22): czapka kuchenna zsunięta, bluza w plamach, chudy, wzrok w dół, ręce splecione.
F3 MECHANICZKA (ok. 36): gogle odsunięte na czoło, ślady smaru na policzku, kombinezon z rozpiętym kołnierzem, krótkie włosy, bezpośrednia.
F4 MAYA (34): krótko obcięte czarne włosy, płaszcz z za długimi rękawami zakrywającymi dłonie, jasny ślad po obrączce na palcu, spokojna twarz osoby, która wszystko zaplanowała.
F5 NOAH (42, policjant): przemoczony granatowy płaszcz, płaska czapka, mały notes w dłoni, zmęczone oczy, wąskie usta.
F6 ADA (10): jasna peleryna z kapturem zsuniętym z czapki, czapka na oczach, pluszowy królik z jednym doszytym uchem przy policzku, poważna jak dorosła.
F7 LEO (46, konduktor): wytarta czapka służbowa, okulary na sznurku, torba z metalowym zapięciem na ramieniu, wąsy, uśmiech którym zagaduje.
F8 ELIAS (73): szerokie okulary, za duży płaszcz, w dłoni papierowy numerek złożony w ciasny prostokąt, powolny, godny.
F9 SAM (44): zapadnięte policzki, bluza pod starą kurtką roboczą, jasny pasek skóry na nadgarstku po zdjętym zegarku, nieogolony, nieufny.
F10 NORA (39): krótkie przystrzyżone włosy, ciemna marynarka pod kurtką przeciwdeszczową, rękawiczki z odsłoniętymi palcami, trzyma teczkę przy piersi, przytomna.
F11 VERA (62): siwe włosy związane gumką, kombinezon z wytartymi kolanami, pęk kluczy przy pasie, szerokie dłonie, cicha.

OBRAZ R1: RĘCE GRACZA (ręce urzędnika zza lady) na płaskim, jednolitym zielonym tle #00B140, 4 kolumny x 2 rzędy, każda dłoń z kawałkiem rękawa roboczej koszuli osobno, z dużymi odstępami (do wycinania). 8 gestów: 1 podaje rzecz do przodu (dłoń płasko), 2 odsuwa dłonią w geście odmowy (dłoń pionowo), 3 przytrzymuje i przyciska rzecz palcami do blatu, 4 sięga po słuchawkę starego telefonu (sama słuchawka z kablem), 5 zasuwa szybę (dłoń na framudze), 6 przerzuca kartki, 7 przekopuje stertę (palce zanurzone, tu bez sterty, tylko dłoń w pozie), 8 wskazuje palcem. Żadnych przedmiotów poza słuchawką, bez cienia na tle.

WNĘTRZA (W24–W29): rzecz rozłożona z góry na ciemnym blacie z plamą pomarańczowego światła, tak jak w trzeciej referencji. Wszystkie dokumenty i ekrany mają puste pola (zero liter i cyfr).
W24 koperta z wypłatą: koperta rozcięta, z wyciągniętym plikiem prostokątnych kartek (banknoty bez żadnych znaków) i pustym kwitem z liniami.
W25 plecak: rozpięty, obok otwarte pudełko na pierścionek z pierścionkiem i paragon z samymi pustymi liniami, bluza wystaje.
W26 termos: stalowy termos z odkręconym kubkiem, z nakrętki wystaje złożona kartka, obok pusta serwetka.
W27 telefon: zepsuty ekran w etui, ekran pokazuje tylko puste dymki (bez liter), spod odklejonego rogu etui wystaje stare zdjęcie dwóch dziewczynek.
W28 budzik: nakręcany budzik z otwartą tylną klapką, w środku zwinięta karteczka, obok klucz do nakręcania.
W29 teczka kontroli: zamknięta teczka z gumką, rozłożony wykaz z rzędami linii, kilka wierszy dopisanych innym pociągnięciem (grubsze, zaciemnione) i dwa parafy w formie bazgrołów.

Zaczynaj od F1.
```

## Zapis wyników
F1 praczka, F2 kucharz, F3 mechaniczka, F4 maya, F5 noah, F6 ada, F7 leo, F8 elias, F9 sam, F10 nora, F11 vera, R1 rece, W24..W29 wnętrza. Wszystko do `/mnt/project-files/lostfraud_art6/` (nazwy: F1.png … F11.png, R1.png, W24.png … W29.png).
Uwaga: W13, W17 i W20 z paczki 1 były tymczasowo użyte w grze do termosu kucharza, inspektora i praczki; po dostawie W24–W29 podmieniam je na właściwe i wracają do dni 15, 19 i 22.
