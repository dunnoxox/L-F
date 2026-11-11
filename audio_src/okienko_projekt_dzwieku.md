# OKIENKO: projekt dźwięku

Wersja 1, 2026-11-11. Styl obrazu: Linoryt sodowy (czerń, kremowa biel, pomarańcz lampy sodowej). Dźwięk ma być jego odpowiednikiem: **czarna płyta z kilkoma wyciętymi jasnymi plamami**. Większość czasu jest ciemno i cicho, a to, co słychać, jest szorstkie i blisko.

## 1. Zasady (co robi ten dźwięk)

1. **Deszcz jest podłogą, nie dekoracją.** Nigdy nie milknie. Gdy wszystko inne znika, zostaje deszcz i brzęczenie lampy.
2. **Cisza też jest dźwiękiem.** Między wizytami ambient robi się prawie pusty. To wtedy gracz słyszy zegar.
3. **Brud zamiast czystości.** Szum, trzask, rozstrojenie, lekki clipping na uderzeniach. Żadnych lśniących syntezatorów i orkiestrowych wzlotów.
4. **Smutek bez melodramatu.** Muzyka nie mówi graczowi, co ma czuć. Jedna fraza, długo, bez rozwiązania.
5. **Dźwięk niesie informację.** Po samym dźwięku wiadomo: czy okienko jest otwarte, czy ktoś stoi za szybą, która jest mniej więcej godzina, czy jest dobrze.
6. **Jedna kolorystyka:** barwa ciemna, środek pasma wycięty, góra tylko jako drobne cieknące krople. Cała mieszanka lekko stłumiona, jakby słuchać przez szybę.
7. **Jedno źródło ciepła:** lampa sodowa to jedyny dźwięk „elektryczny". Reszta jest mokra, metalowa albo drewniana.

## 2. Szyny miksu (jedna konfiguracja, Unity AudioMixer)

```
Master (limiter -1 dBTP)
 ├─ Music
 │    ├─ MusicBed      (pętla główna)
 │    └─ MusicStingers (krótkie akcenty)
 ├─ Ambience
 │    ├─ Outside       (deszcz, ruch, grzmoty; filtr dolnoprzepustowy sterowany OKIENKIEM)
 │    └─ Inside        (lampa, wentylacja, zegar, szafy)
 ├─ SFX                (rzeczy, szuflady, portfel, zamki, stemple/gesty)
 ├─ Voice              (mamrotanie petenta)
 └─ UI                 (dzwonek, kliknięcia menu)
```

- Suwaki gracza: Master, Muzyka, Efekty (SFX+UI), Ambient, Głosy. Każdy suwak działa w dB: `dB = 20·log10(v²)`, a przy 0 pełne wyciszenie.
- **Ducking:** Voice i ważne SFX przyciszają Music o 4 do 6 dB, Ambience o 3 dB. Release 400 ms, żeby nie „oddychało".
- **Poziomy docelowe** (zgodnie z zaleceniami dla gier na PC): całość -24 LUFS ±2, peak maks. -1 dBTP. Ambient sam w sobie ok. -30 LUFS, muzyka ok. -28 LUFS, stingery do -18 LUFS krótkoterminowo.
- Pogłos: jeden wspólny send „Pokój" (mała ciemna kanciapa, RT60 ok. 0,7 s, filtr dolnoprzepustowy ok. 3 kHz na ogonie). Rzeczy i głos w pokoju mają go dużo, deszcz na zewnątrz mało.

## 3. Ambient: warstwy

Wszystko stereo, pętle 30 do 90 s (szum nie wymaga dłuższych), zapętlone przez crossfade. Poniższe warstwy są zaimplementowane w prototypie jako synteza z szumu, żeby można było dopasować proporcje. W produkcji każdą warstwę można zastąpić nagraniem (prompty w pliku z promptami).

### Zewnątrz (szyna Outside)

| Warstwa | Opis | Pasmo | Zachowanie |
| --- | --- | --- | --- |
| Deszcz na szybie | Jasny, gęsty syk tuż przed twarzą | 1,7 do 9 kHz | Porywy: głośność faluje 0,7 do 1,2× co 2 do 6 s |
| Deszcz na blasze/parapecie | Ziarnisty środek, jak groch na pokrywie | 500 do 1500 Hz | Podąża za siłą deszczu |
| Ciężar deszczu | Niski, mokry dudniący podkład | 100 do 400 Hz | Daje wrażenie ściany wody za oknem |
| Krople na szybie | Pojedyncze tyknięcia, losowe, panorama losowa | 2 do 6,5 kHz | 3 do 30/s zależnie od siły deszczu |
| Plinki o parapet | Metal: pojedyncze „tink", 2 częstotliwości, rozstrojone | 300 do 800 Hz | 0,3 do 4,5/s |
| Kapanie z rynny | Kropla do kałuży: sinus w górę 380→800 Hz, 70 ms | 400 do 900 Hz | Co 0,7 do 2,6 s, nieregularnie |
| Odległy ruch | Brązowy szum, pomruk miasta | poniżej 250 Hz | Maleje z godziną (do 14%) |
| Przejazdy aut | Syk opon po mokrym asfalcie + niski silnik, pan z lewej do prawej lub odwrotnie | 100 do 2200 Hz | Co 9 do 24 s, w nocy rzadziej (do 5× rzadziej) |
| Grzmoty | Bardzo odległe, tylko dudnienie, bez trzasku | 50 do 300 Hz | Co 60 do 150 s, można wyłączyć |

**Okienko jako filtr.** Szyna Outside przechodzi przez filtr dolnoprzepustowy:
- okienko **zamknięte**: 1,9 kHz, -4,5 dB (słychać deszcz jak przez ścianę),
- okienko **otwarte**: 11 kHz, 0 dB (deszcz i ulica wchodzą do pokoju, zimno słychać).

Przejście trwa 180 ms i dodaje krótkie „stuknięcie" suwanej szyby. To daje graczowi fizyczny feedback rozmowy.

### Wewnątrz (szyna Inside)

| Warstwa | Opis | Zachowanie |
| --- | --- | --- |
| Lampa sodowa | 100 Hz (podwójna sieć) plus harmoniczne 200, 300, 500, delikatny piłokształtny przydźwięk, dryf ±0,3 centa | Co 15 do 55 s drobne mrugnięcie (4 szybkie spadki, trzaski). Awaria: patrz sekcja 5 |
| Wentylacja | Brązowy szum <150 Hz plus cienki gwizd kratki ok. 380 Hz | Filtr falowany co ok. 14 s, zmęczony oddech budynku |
| Zegar | Tik-tak raz na sekundę, dwie wysokości (tik wyższy, tok niższy), lekko z lewej | Głośniejszy późną nocą. Gdy zegar jest ciszej niż wszystko, to znaczy, że jest wizyta |
| Szafy i magazyn za plecami | Skrzypnięcie metalu, tarcie kartonu, przesuwane pudło, rzadko (co 40 do 120 s) | Tylko do podkreślenia, że magazyn żyje. Prompty w pliku z promptami |
| Dalekie kroki na korytarzu | Echo kroków, jedna osoba, powoli | Zapowiedź następnego petenta lub fałszywy alarm |

## 4. Adaptacja: godzina nocy i napięcie

Dwa parametry sterowane z gry, oba płynne (0 do 1):

**Godzina nocy (0 = 22:00, 1 = 05:00)**
- ruch uliczny 100% → 14%, przejazdy rzadsze,
- zegar 50% → 100%, lampa 60% → 100%, wentylacja 70% → 100%,
- barwa całości: dolnoprzepustowy 10 kHz → 4,2 kHz („zmęczenie", świat gaśnie),
- muzyka: tempo bez zmian, ale zostają coraz mniej warstw (patrz sekcja 6).

**Siła deszczu (0,1 do 1)**: skaluje deszcz, krople, plinki i ciężar. Zmienia się z wydarzeniami fabuły (np. dzień po dramacie jest ulewa, dzień ulgi to kapanie i cisza).

**Napięcie wizyty (0 do 1)**, ustawiane przez grę podczas rozmowy:
- 0: normalny ambient,
- 0,5: ruch uliczny i przejazdy ściszone o 4 dB, zegar głośniej, muzyka wchodzi drugą warstwą,
- 1: ambient prawie zanika poza lampą i zegarem, nagle głośne, pojedyncze uderzenie, w ciszy.

Zasada: **napięcie to wycinanie, nie dokładanie.** Zamiast dosypywać dźwięków, zabieramy deszcz i miasto, żeby gracz został sam z człowiekiem po drugiej stronie szyby.

## 5. Dźwięki interakcji (SFX)

Wszystkie powtarzalne dźwięki: 4 do 6 wariantów, losowy pitch ±4%, losowa głośność ±2 dB, bez powtórzenia tego samego wariantu dwa razy z rzędu.

| Zdarzenie | Charakter | Uwagi |
| --- | --- | --- |
| Dzwonek okienka | Mosiężny dzwonek na sprężynie, krótki, trochę rozstrojony | Zapowiada petenta. Rzadki, więc ma być charakterystyczny |
| Pukanie w szybę | 3 knykcie, drewno plus szkło | Warianty: nieśmiałe, niecierpliwe, natarczywe. Charakter pukania zdradza człowieka |
| Okienko w górę/w dół | Szyba w drewnianej ramie, tarcie, stuknięcie | Wspólny dźwięk z filtrem okienka |
| Szuflada na zguby | Ciężka drewniana szuflada, szyna | 2 rozmiary |
| Zamek / kłódka / klucz | Metal, mały i duży, obrót | Do rzeczy z wnętrzem |
| Portfel / torebka | Skóra, suwak, bilon w środku | Krótkie, intymne, blisko |
| Szuranie rzeczami po blacie | Ciężka rzecz po drewnie, lekka rzecz po drewnie | Wyciąganie rzeczy ze sterty to dźwięk, który gracz usłyszy najczęściej, więc 8 wariantów |
| Sterta | Zsuw rzeczy, pojedyncze stuknięcia, plastik, metal | Podczas przekopywania |
| Zapadnia | Mechaniczny stukot, klapa, głuchy łoskot w dole | Gesty zamiast stempli: dźwignia i klapa |
| Wręczenie rzeczy | Miękkie położenie na ladzie, szkło szyby w tle | Wynik decyzji |
| Odmowa | Okienko zasuwa się, krótkie ciężkie stuknięcie | Bez fanfary |
| Kroki petenta | Mokre buty na posadzce, 3 typy (obcasy, trampki, ciężkie buty) | Pozwala poznać gościa z daleka |
| Zamek w drzwiach biura | Klucz, ciężkie zasuwanie | Na początek i koniec dnia |
| Dostawa z tramwaju | Hamowanie szyn z daleka, skrzynie na wózku, rzut paczek | Dźwięk wpadających zgub |
| Gazeta wieczorem | Szelest papieru | Echo decyzji |
| Telefon w biurze | Stary aparat, tylko w kluczowych momentach | Nie więcej niż kilka razy w grze |

### Głos: mamrotanie

Postacie nie mają pełnego voice-actingu. Każde zdanie dialogu jest poprzedzone **mamrotaniem w stylu „Animal Crossing / Papers, Please"**, ale bardziej mrocznie: niezrozumiały szept w miękkim filtrze, przetwarzany tak, jakby szedł przez szybę.

- Każda postać ma **własną wysokość i tempo** (7 do 12 wariantów krótkich sylab), z których gra składa „zdanie" proporcjonalnie do długości tekstu.
- Barwa: wycięte powyżej 4 kHz, lekkie tłumienie przez szybę (okienko zamknięte: dolnoprzepustowy 1,4 kHz), lekki pogłos pokoju.
- Emocja przez kontur, nie przez słowa: pytanie idzie w górę, kłamstwo gubi tempo, strach drży, złość ma twardy atak.
- **Zero nagrań w języku:** mamrotanie jest niezależne od języka, więc nie komplikuje tłumaczeń. Teksty dialogów zostają w plikach językowych (klucze `dialogue.*`), a dźwięk w osobnych kluczach `audio.voice.*`.

## 6. Muzyka

**Tu nie używamy syntezy.** Syntezowana muzyka została odrzucona, więc muzykę robimy w Suno/Udio (prompty w osobnym pliku) i obrabiamy w edytorze (Audacity lub Reaper).

### Charakter
Brudny dark ambient z samotnym instrumentem: **fortepian preparowany/stłumiony** lub **wiolonczela**. Tempo 54 do 62 BPM albo bez tempa. Tonacja moll, zawieszone kwinty, żadnej radosnej melodii. Fortepian jak z opuszczonego pokoju: rozstrojony, z szumem taśmy, stukaniem młotków, długim pedałem. Pod spodem drone i szum.

### System: 3 warstwy pionowe
Jeden utwór, trzy stemy (wszystkie na tej samej tonacji i długości, żeby dały się dowolnie łączyć):

| Warstwa | Zawartość | Kiedy gra |
| --- | --- | --- |
| **Bed** | drone, szum taśmy, bardzo cichy akord | zawsze, nawet gdy nikogo nie ma |
| **Piano/Cello** | rzadka fraza, długie przerwy | podczas rozmowy, przy wzmożonej uwadze |
| **Tension** | niskie smyczki, pulsujące uderzenia, dysonans | przy kłamstwie, groźbie, decyzji bez odwrotu |

Zasady: warstwy wchodzą i wychodzą na granicy taktu (kwantyzacja do 4 uderzeń), crossfade 2 do 4 s. Gdy nikogo nie ma w okienku, gra tylko Bed albo nic.

### Pętle
- Bed: pętla 60 do 90 s bez wyraźnego początku i końca (długi fade, brak „startu").
- Piano/Cello: pętla 60 do 90 s, ta sama długość co Bed, ale z wolnymi miejscami.
- Tension: 30 do 60 s.
- Menu główne: osobny utwór, 90 s, trochę jaśniejszy, ale nadal smutny.
- Sobota (rozliczenie): bez rytmu, tylko fortepian i szum.

### Stingery (do 6 s, na szynie MusicStingers)
Początek dnia, koniec dnia, odkrycie sekretu w rzeczy, kłamstwo wykryte, ważna decyzja podjęta, wielkie wydarzenie fabuły, wyrzucenie z pracy / koniec gry. Prompty w pliku z promptami.

## 7. Kluczowe wydarzenia: dźwięk wielkich chwil

Zasada: wielkie wydarzenie to **zatrzymanie świata**, nie fanfara.
1. Ambient robi cięcie: wszystko poza lampą i zegarem znika w 150 ms.
2. Jedno uderzenie (stinger), długi pogłos.
3. Ambient wraca wolno, 3 do 6 s, już odrobinę inny (np. deszcz mocniejszy, jeden element nowy).

Przykłady: zatrzymanie zegara przy odkryciu sekretu, zgaszenie lampy (awaria: ton lampy opada w 1,3 s, cisza 3 s, powrót z trzaskiem i narastaniem), grzmot tuż przed groźną sceną, dzwonek telefonu.

## 8. Wielojęzyczność

- Dźwięki są niezależne od języka. Jedyne teksty związane z dźwiękiem (napisy do nagrań, nazwy suwaków) idą do plików językowych: `audio.mixer.master`, `audio.mixer.music`, `audio.mixer.sfx`, `audio.mixer.ambience`, `audio.mixer.voice`.
- Identyfikatory zdarzeń dźwiękowych po angielsku, ASCII: `sfx_bell_window`, `sfx_knock_polite`, `amb_rain_glass`, `mus_bed_01` i tak dalej. Takie same konwencje jak w przedmiotach.

## 9. Lista zasobów do zrobienia

| Pakiet | Zawartość | Narzędzie | Ile |
| --- | --- | --- | --- |
| Muzyka | Bed, Piano/Cello, Tension, Menu, Sobota | Suno/Udio | 5 utworów (po 2 do 4 podejścia) |
| Stingery | 7 akcentów | Suno/Udio lub ElevenLabs SFX | 7 |
| Ambient | pętle deszczu, ruch, lampa, wentylacja, dalekie dźwięki | ElevenLabs SFX / nagrania / prototyp syntezowany | ok. 12 |
| SFX zdarzeń | dzwonek, pukanie, okienko, szuflady, zamki, portfel, sterta, zapadnia, kroki, tramwaj | ElevenLabs SFX | ok. 60 (z wariantami) |
| Mamrotanie | 6 postaci × 8 sylab | nagranie własne lub generator głosu, obróbka | ok. 50 |

Kolejność: najpierw 1 utwór (Bed + Piano) i pętle deszczu, wstawić do prototypu gry, ocenić miks z grafiką, dopiero potem reszta.

## 10. Prototyp

Plik `okienko_deszcz_prototyp.html` (ten sam folder): działający ambient z suwakami, godziną nocy, siłą deszczu, okienkiem otwartym/zamkniętym i testowymi dźwiękami (pukanie, dzwonek, grzmot, awaria lampy). Cały dźwięk to filtrowany szum i proste oscylatory. Służy do dopasowania proporcji warstw, nie do wypuszczenia w grze: finalne pętle deszczu lepiej nagrać albo wygenerować, a prototyp daje wartości docelowe (głośności względne, pasma, rytm zdarzeń).
