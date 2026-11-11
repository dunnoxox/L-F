# ZADANIE DLA CODEXA: moduł „LF_FX” (animacje i juice) do gry OKIENKO

Pracujesz w jednej, ciągłej sesji. Wykonaj części A → B → C → D po kolei, po każdej zrób commit (`git init`, jeśli nie ma repo) i krótki log w `NOTES.md`. Nie pytaj o nic: gdy coś jest niejasne, wybierz rozsądną opcję, zapisz decyzję w `NOTES.md` w sekcji „Decyzje” i jedź dalej. Komentarze w kodzie i dokumentację pisz **po polsku**, identyfikatory po angielsku.

## 0. Kontekst w pigułce
OKIENKO to gra za 9,99 USD (Steam, docelowo Unity, teraz mockup w przeglądarce HTML/JS). Gracz siedzi sam za okienkiem nocnego biura rzeczy znalezionych przy zajezdni tramwajowej. Przychodzą ludzie (goście), rozmawiasz, szukasz ich rzeczy w skrzyniach, decydujesz gestem: wydaj / odmów / zatrzymaj / zadzwoń. Jest deszcz, lampa sodowa, burze, 25 dni po 2 wizyty plus soboty. Gra ma być **wciągająca i klipowalna** (streamerzy), a nie „ładna”.

**Twoje zadanie to osobny, samodzielny moduł warstwy animacji i juice**, który inny wątek wepnie do głównego pliku gry. **Nie edytujesz plików gry** (`game_src/` jest tylko do czytania, to migawka do referencji). Moduł ma działać sam (własne demo) i integrować się jednym `<script>` + jednym `<link>`.

## 1. Co jest w paczce (wgraj całość do repo; przeczytaj w tej kolejności)
1. `READ_ME.md` – mapa paczki.
2. `docs/CD2_master_prompt.md` – **nadrzędne zasady produkcji**. Obowiązują cię szczególnie: §0 test (czy ktoś powie o tym znajomemu), §8.4–8.7 (min. 18 px, dostępność, **wejścia i wyjścia ≤300 ms**), §11 lista zakazów (żadnego pustego „ozdobnika”, który spowalnia), §12 raport w 3 rolach.
3. `docs/styl_linoryt_sodowy.md` – styl wizualny (patrz pkt 2 poniżej).
4. `docs/okienko_obsada_i_kalendarz.md` – 12 postaci głównych (wygląd, sposób mówienia). Z tego robisz **profile ruchu** (pkt 5.2).
5. `docs/MOMENTY.md` – klipowalne momenty dni 1–10 (do zaplanowania efektów-akcentów).
6. `game_src/` – migawka gry: `index.html`, `game.js`, `game.css`, `audio.js`, `data.js`. Czytaj `game.css` (linie z `#stage`, `#guest`, `#glass`, `.zone`, `.zguba`, `.pit`, `.toast`) oraz `game.js` (`scene()` ~l.27, `setFace()` ~l.41) – to jedyne miejsca, które twój moduł musi „rozumieć”.
7. `sprites/ppl/{id}_{mina}.jpg` – postacie. `id` ∈ wdowiec, chlopak, maz, siostra, dama, inspektor; `mina` ∈ neutralna, mowi, emocja, klamie. **To jednowarstwowe, nieprzezroczyste JPG-i (384×~700–890 px) na czarnym tle**; w grze wyświetla je `#guest` z `mix-blend-mode:screen` (czerń znika). Nie ma osobnych warstw rąk, ust, oczu. Dlatego animujesz **całe ciało** (transformacje), przełączasz miny i dodajesz nakładki (patrz 5.2). Dodaj w API opcjonalny tryb warstwowy (`layers: {body, hands, mouth}`) na przyszłość, ale demo ma działać na tych JPG-ach.
8. `sprites/bg/T1..T5.jpg` – tła (1536×1024). `sprites/items/*.png` – kilka rzeczy z przezroczystością (do wyciągania).
9. `refs_visual/` – K1 (świat i światło), L4 (twarze), K4 (rzeczy na blacie), L2 (scena sodowa). Obejrzyj, żeby złapać nastrój, zanim ruszysz z efektami.

## 2. Styl (Linoryt sodowy), przełożony na ruch i rysowane efekty
- Paleta tylko: czerń `#0a0a0a`, krem `#efe3c8`, pomarańcz lampy `#f28c1e`. **Pomarańcz = wyłącznie światło** (plama lampy, odblask), nigdy kolor przedmiotu czy UI-ozdoby. Czerwień nie występuje w efektach.
- **Zero półtonów w rysowanych efektach**: bez gradientów, bez rozmyć, bez miękkich cieni, bez `box-shadow` z blur. Krawędzie twarde. Cień = czysta czerń. Kropla deszczu = krótkie, twarde cięcie kremowe. Pył = kremowe kwadraciki/ziarna 2–5 px. Plama lampy = wielokąt o twardej krawędzi (`clip-path`/canvas), jej „pulsowanie” to zmiana wielkości/krycia skokami, nie gładki glow.
- **Ruch ma charakter odbitki**: skokowe 2–3 klatki (stepped) dla detali (migotanie lampy, kropelki, tiki), gładki ruch tylko dla ciała i przedmiotów. Dozwolone drżenie „linorytowe” (przesunięcie 1–2 px co 80–120 ms) na pyle i deszczu.
- Bez tekstu, cyfr i liter w grafikach efektów. Wszelkie napisy (np. „Dzień 3”) przychodzą z gry jako argument; moduł **nie ma żadnych tekstów widocznych dla gracza**.

## 3. Wymagania techniczne (twarde)
- Czysty **JS ES2019 + CSS**, zero zależności, zero buildu. Jeden globalny obiekt `window.LF_FX`; wersja UMD (działa też w node dla testów logiki).
- Układ gry: `#stage` 1536×1024 skalowany `transform` do okna. Wszystko liczysz **we współrzędnych sceny** (bez `getBoundingClientRect` w pętli; skalę pobieraj raz/na resize).
- **Nie nadpisuj `style.transform`, `opacity` ani `transition` elementów gry** (gra ma własne, np. `#guest` ma `transition:opacity .7s,transform .7s`). Używaj Web Animations API oraz niezależnych właściwości `translate`, `rotate`, `scale` (CSS Individual Transforms), albo własnych elementów-nakładek. Po zakończeniu efektu element ma wrócić **dokładnie** do stanu sprzed (test: snapshot `style.cssText` i `className` przed/po).
- Animujesz wyłącznie `transform`/`translate`/`rotate`/`scale`/`opacity`/`filter` (filter tylko `brightness`/`contrast`, bez blur). **Żadnych właściwości układu** (width/height/top/left) w pętli.
- Jedna wspólna pętla `requestAnimationFrame`, pauza gdy `document.hidden`, budżet ≤1 ms/klatkę na efektach ambientowych przy 1536×1024. Canvas deszczu: DPR ≤1,5, rysowanie wsadowe (jeden `stroke` na kolor).
- **Własny PRNG** (mulberry32) z `LF_FX.seed(n)`; moduł nigdy nie wywołuje `Math.random` (gra ma własny RNG dla układu skrzyń, nie wolno go zaburzać). Efekty są deterministyczne przy tym samym seedzie.
- **Zero dźwięku w module**, ale każdy efekt emituje **sygnały** (`cue`), które gra podepnie pod `audio.js`: `LF_FX.onCue((cueName, info) => ...)`, np. `thud`, `thunder`, `lamp_flicker`, `door_bolt`, `rain_gust`, `item_land`, `window_bang`. Nazwy cue wylistuj w dokumentacji (tabela efekt → cue).
- **Dostępność (CD2 §8.5)**: 
  - `LF_FX.setEnabled(false)` wyłącza wszystko i natychmiast sprzątanie (efekty kończą się w stanie końcowym, promisy się rozwiązują);
  - `LF_FX.setFlashes(false)` (opcja „ogranicz błyski”): zero rozbłysków jasności, zero migotania >3 Hz, piorun i lampa zamieniają się w wolne przyciemnienie/rozjaśnienie ≥400 ms;
  - szanuj `prefers-reduced-motion` (domyślnie włącza tryb ograniczony: bez shake’a, bez tików, tylko fade/zmiana miny; ambient deszcz statyczny lub bardzo wolny);
  - `LF_FX.setIntensity(0..1)` skaluje amplitudy (shake, sway, cząstki).
- Wejścia/wyjścia elementów UI ≤300 ms (CD2 §8.7). Wejście gościa (scena) do 600 ms, ale nie blokuje gracza (klikalność od pierwszej klatki).
- Każdy efekt zwraca **obiekt-obietnicę** `{ finished: Promise, cancel() }`; `cancel()` kończy natychmiast w stanie końcowym; brak wycieku węzłów DOM, listenerów i animacji (test w części D).
- Przeglądarki: aktualny Chromium (Electron/Steam), Firefox, Safari 16+. Dotyk: efekty nie zależą od hovera.

## 4. API (kontrakt; nazw nie zmieniaj, możesz dodawać)
```js
LF_FX.init({ stage: '#stage', seed: 1, flashes: true, intensity: 1, enabled: true });
LF_FX.play(name, target, opts) -> { finished: Promise<void>, cancel(): void }   // target: element | selektor | null (efekt sceniczny)
LF_FX.stop(name?, target?)           // zatrzymaj efekt(y) i przywróć stan
LF_FX.ambient.start(name, opts)      // rain, lamp, dust, tram_light (pętle w tle) ; ambient.stop(name) ; ambient.set(name, opts)
LF_FX.guest.mount(el, { profile })   // oddech/sway/tiki dla elementu gościa; unmount()
LF_FX.guest.setMood(mina)            // neutralna|mowi|emocja|klamie z crossfade'em ≤120 ms (sprite-swap przez dwie warstwy)
LF_FX.guest.speak({ chars, cps })    // „mówienie”: 2-klatkowy bob w rytm tekstu; guest.stopSpeak()
LF_FX.clock.mount(el, { hh, mm })    // zegar analogowy SVG w palecie; clock.set(hh, mm, {animate}); clock.advance(min)
LF_FX.rain.setLevel(0..3)            // 0 brak, 1 mżawka, 2 deszcz, 3 burza
LF_FX.shake(preset | {trauma})       // model „traumy”: amplituda = trauma² ; presety: knock, thud, thunder, collapse
LF_FX.onCue(fn) ; LF_FX.setEnabled(b) ; LF_FX.setFlashes(b) ; LF_FX.setIntensity(x) ; LF_FX.seed(n)
LF_FX.list() -> lista nazw efektów z opisem (do panelu demo)
```
Wszystkie efekty poniżej wywołujesz przez `LF_FX.play('nazwa', target, opts)` (poza ambient/guest/clock/rain, które mają osobne metody).

## 5. Zakres funkcjonalny

### 5.1 Efekty sceniczne i UI (`play`)
| nazwa | co robi | ważne |
|---|---|---|
| `guest.enter` | gość podchodzi do okienka: wsuw z boku/dołu z lekkim „dojściem” (krok-ruch: 2–3 mikro-podskoki, nie ślizg), dociągnięcie do pozycji, 1 mikro-przesadzenie i usadzenie | opts: `from: 'left'|'right'|'bottom'`, `weight: 'light'|'heavy'|'limp'` (np. Vera ciężko, Ada lekko); cue `steps_*` |
| `guest.leave` | odwrócenie (scale -x na 80 ms), odejście, zanik ≤300 ms | gdy odmowa: szybciej i „ciężej” |
| `guest.breathe` | ambient postaci: oddech przez `scaleY` 1→1,012 od dołu (cykl 4–5 s, losowa faza z seedu) + sway ±3 px | włączane przez `guest.mount` |
| `guest.tic` | pojedynczy tik wg profilu (5.2) | zmienia się, gdy `opts.broken: true` (np. przestaje liczyć) |
| `guest.lean` | pochylenie ku szybie (zaufanie/presja) lub cofnięcie się (strach) | opts: `dir: +1|-1`, `amount` |
| `guest.flinch` | drgnięcie po wyrazistym zdarzeniu (piorun, trzaśnięcie) | + zmiana miny na `emocja` |
| `guest.liar_tell` | **subtelna** wskazówka przy kłamstwie: mina `klamie` + mikro-rytm (np. zatrzymanie oddechu 600 ms, oczy „uciekają” = krótki przesuw 2 px). Ma być **do zauważenia, nie do przeoczenia i nie oczywista** (kłamstwo w grze jest sprawdzalne dowodem, nie miną: efekt nie może zdradzać prawdy jednoznacznie, ma losową fałszywą wskazówkę przy prawdzie z p=0,25 – parametr `falseRate`) | zgodnie z CD2 §4 („nigdy zła mina bez dowodu”) |
| `item.pull` | wyciąganie rzeczy ze skrzyni: wynurzenie z przesadą (overshoot), 6–10 kremowych ziaren pyłu, lekkie obrócenie, cue `item_land` | target = `<img>` rzeczy |
| `item.hand_over` | rzecz sunie przez ladę do szyby (łuk, przyspieszenie, miękkie lądowanie), twardy cień-prostokąt pod spodem (czarny, bez blur) | |
| `item.inspect_in/out` | wejście/wyjście oglądania (zbliżenie ≤300 ms, obrót o kilka stopni) | |
| `item.reject_push` | odepchnięcie rzeczy od szyby (odrzut), „stuk” | |
| `decide.give` | gest WYDAJ: rzecz → szyba → zanik, krótkie `shake('thud')` o niskiej amplitudzie, gość `lean` ku szybie | |
| `decide.refuse` | ODMÓW: okienko „zatrzaskuje” (opuszczona zasłona/klapa ≤200 ms, cue `window_bang`), shake `knock` | |
| `decide.keep` | ZATRZYMAJ: rzecz wjeżdża do szuflady (clip + przesuw), cue `drawer_small` | |
| `decide.call` | ZADZWOŃ: słuchawka-telefon „podskakuje” 3× (stepped), tło lekko przyciemnione | nie dodajemy nowej grafiki, jeśli brak: prosty twardy prostokąt-kształt w kremie |
| `pile.dig` | przekopywanie sterty: przedmioty przesuwają się o kilka px, ziarna pyłu, minimalny shake; `pile.collapse` – osunięcie się sterty (większy shake `collapse`, cue `pile_collapse`) | target = kontener sterty |
| `toast.pop` | dymek informacji (np. „+20 $”): wejście ≤200 ms z przeregulowaniem, wyjście ≤300 ms | |
| `cash.roll` | licznik dolarów „toczy się” do nowej wartości (cyfry skokami co 60 ms, bez rozmycia); wartość i format dostaje z gry | |
| `button.hover/press` | hover z przeregulowaniem `cubic-bezier(.34,1.56,.64,1)` (≤150 ms), wciśnięcie `scale(.96)` 60 ms | działa przez delegację na `.btn,.q,.zone` – opcjonalnie `LF_FX.autoButtons(true)` |

### 5.2 Profile postaci (`data-driven`)
Plik `fx/profiles.json` (i fallback w kodzie): per `id` postaci parametry oddechu/sway/tików/wejścia. Zrób profile dla **sześciu sprite’ów z paczki** (wdowiec, chlopak, maz, siostra, dama, inspektor) oraz dla 12 postaci z `okienko_obsada_i_kalendarz.md` (Maya, Evan, Lena, Noah, Iris, Ada, Leo, Victor, Elias, Sam, Nora, Vera; tam, gdzie nie ma sprite’a, profil czeka na grafikę). Z opisu wyciągnij tiki i temperament (np. Evan wygładza mankiet; Noah układa notes zawsze w tym samym miejscu; Ada kołysze się na piętach; Vera ociężale, kluczami przy pasie; Iris sztywno, rękawiczki). Każdy tik to krótka sekwencja transformacji (rotate/translate całego ciała lub nakładki), 300–900 ms, z `intervalMs: [min,max]` losowanym z seedu. Reguła CD2 §4: **tik wraca co wizytę i zmienia się, gdy postać się łamie** – zaimplementuj `opts.broken` (inny wariant lub wyciszenie tiku).

### 5.3 Środowisko (`ambient`, `rain`, `lamp`, `clock`)
- **Deszcz na szybie** (canvas nad `#glass`/tłem, `pointer-events:none`): poziomy 0–3. Krople: twarde kremowe kreski; spływają ze zmienną prędkością, część „zatrzymuje się” i łączy (efekt kropli na szkle), poziom 3 = ukośna ulewa + okazjonalne uderzenie wiatru (`rain_gust`: nagły przechył kropel + cue). Maks. 400 elementów na poziomie 3. Linorytowe drżenie 1–2 px.
- **Lampa sodowa**: `ambient.start('lamp', {x,y,r})` rysuje twardokrawędziową plamę pomarańczu na blacie/podłodze (źródło: wielokąt o kilku wierzchołkach, lekko deformowany „drżeniem”), tryby: `steady`, `buzz` (rzadkie mikro-spadki), `flicker`, `dying` (seria spadków, która kończy się zgaszeniem), `out` i powrót `on`. Przy `flashes:false` tylko wolne przyciemnienie. Cue: `lamp_flicker`, `power_out`.
- **Pył w świetle lampy**: ambient, kremowe ziarna wędrujące w obrębie plamy, 20–40 sztuk.
- **Światło tramwaju**: prostokątne, twarde pasy pomarańczu przesuwające się po ścianie/szybie (okna przejeżdżającego tramwaju) co 40–90 s losowo z seedu, cue `tram_pass`.
- **Zegar** (`clock.mount`): analogowy, SVG, kreska i czerń/krem, wskazówka sekundowa tyka skokiem z minimalnym „odbiciem” (stepped), co 60 s przeskok minutowej z `cue tick_big`; `clock.advance(min)` przewija z przyspieszeniem (do przejść między wizytami). Brak cyfr. Rozmiar i położenie ustawia gra (`opts.size`).
- **Burza**: `play('storm.flash')` – piorun to dwa błyski (cień-krem-cień) + `shake('thunder')` po opóźnieniu 300–900 ms (cue `thunder`); `play('power.out')` – lampa gaśnie, ekran ciemnieje do ≈85% czerni, rzeczy widoczne tylko w obrysie plamy awaryjnej; `play('power.on')` – powrót ze „zacięciem”.

### 5.4 Przejścia i wstrząsy
- `play('day.start', null, {label})` – karta „Dzień N” (tekst z gry, np. przez `opts.label`) wjeżdża ≤300 ms i znika po `opts.holdMs`; rozjaśnienie sceny.
- `play('day.end')` – lampa przygasa, rygiel drzwi (prostokąt przesuwa się w zamek, cue `door_bolt`), przejście do czerni; `play('saturday')` – wolniejsza, „ciepła” wersja (łagodniejsza lampa, brak deszczu).
- `play('scene.cut')` – twarde cięcie (1 klatka czerni, bez fade’u), dla momentów-szoku.
- **Screen shake** przez „traumę”: `shake({trauma:0..1})`, `amplituda = trauma²`, zanik liniowy; przesunięcie + rotacja do ±1,5°, szum z seedowanego PRNG (nie `Math.random`), nakładany na `#stage` przez `translate`/`rotate` (nie `transform`, żeby nie zepsuć skalowania!). Presety: `knock` (0,25), `thud` (0,35), `thunder` (0,6), `collapse` (0,8). Przy `intensity` 0 lub trybie ograniczonym: brak.
- **Hit-stop/„czucie”**: opcjonalny `LF_FX.hitstop(ms)` – zamraża tylko animacje efektów (nie grę) na 40–90 ms przy dużych zdarzeniach.

### 5.5 Momenty klipowalne (po jednym przykładzie, jako gotowe „sceny” w demo)
Zbuduj w demo **„scenariusz wizyty”** (`demo/scenario.js`), który pokazuje pełny cykl: deszcz poziomu 2 + lampa `buzz` → `guest.enter` (np. wdowiec, `weight:'limp'`) → `guest.speak` ze zmianami min → `guest.tic` → `item.pull` → `item.hand_over` → `decide.give` albo `decide.refuse` → `guest.leave` → `clock.advance(25)`. Dodatkowo scenariusz „burza”: piorun → `guest.flinch` → `power.out` → `power.on`. To ma wyglądać jak fragment gry, który ktoś nagra na 15 s.

## 6. Dokumentacja integracji (to, co wątek gry dostanie)
Plik `docs/INTEGRACJA.md` (po polsku, konkretny, z gotowymi fragmentami kodu), obowiązkowo:
1. Jak dodać moduł do `index.html` (2 linijki) i `LF_FX.init` po `DOMContentLoaded`.
2. **Dokładne punkty wpięcia w istniejący kod** (odnośniki do migawki): `scene()` (zawsze `LF_FX.stop()` + ambient wg tła/dnia), `setFace()` (wywołaj `LF_FX.guest.setMood(m)` obok ustawienia `backgroundImage`; opisz, jak zamienić pojedynczy `background-image` na dwie warstwy bez zmiany wyglądu), wejście gościa (`#guest.in`), strefy decyzji `.zone` i przeciągnięcie `.zguba` na `#glass`, toast, licznik kasy, burze w dniach 3/8/13/18/23, soboty co 5 dni.
3. Tabela **zdarzenie gry → wywołanie LF_FX → cue → sugerowany klip audio** (klipy z `audio.js`/`assets/snd`, np. `sfx_knock_polite`, `sfx_trapdoor`, `sfx_lamp_flicker`, `amb_thunder_far`, `sfx_door_lock_day_end`; nazwy zweryfikuj w `game_src/audio.js`).
4. Ustawienia: jak podpiąć opcje gry („ogranicz błyski”, intensywność) do `setFlashes`/`setIntensity`/`setEnabled`; domyślnie szanować `prefers-reduced-motion`.
5. **Pułapki**: skalowanie `#stage`; kolizja z `transition` na `#guest`; `mix-blend-mode:screen` (nakładki nad gościem nie mogą go rozjaśniać nieprzewidzianie); kolejność z-index (`#layer`, `#dim`, `#fade`); co robić przy `scene()` (sprzątanie).
6. Jak dodać nowy efekt i nowy profil postaci (3 kroki).
7. Znane ograniczenia (np. brak warstw rąk w sprite’ach).

## 7. Struktura wyniku (utwórz dokładnie tak)
```
okienko_fx/
  fx/lf_fx.js            # rdzeń (jeden plik, UMD) – ewentualnie modułowo w src/, ale build do jednego pliku skryptem node bez zależności
  fx/lf_fx.css           # style nakładek (tylko klasy z prefiksem lfx-)
  fx/profiles.json
  demo/index.html        # samodzielne demo z panelem: przyciski każdego efektu, przełączniki (enabled/flashes/intensity/reduced), seed, licznik FPS, wybór postaci i tła
  demo/scenario.js
  tests/unit.test.js     # node, bez zależności: PRNG, trauma, easing, scheduler, profile (schemat), determinizm przy seedzie
  tests/smoke.spec.js    # Playwright (jeśli dostępny; instrukcja instalacji w README): każdy efekt z `LF_FX.list()` uruchomiony, bez błędów w konsoli, sprzątanie, 3 tryby (pełny/flashes off/reduced), screenshoty do tests/out/
  docs/INTEGRACJA.md
  README.md              # 1 ekran: czym jest, jak uruchomić demo/testy, lista efektów
  NOTES.md               # decyzje, log, zweryfikowane / niezweryfikowane
  package.json           # skrypty: test, test:unit, test:smoke, build (jeśli użyty)
  sprites/               # kopia z paczki, dla demo (ścieżki względne)
```

## 8. Plan sesji i kryteria ukończenia
**Część A – rdzeń (commit A):** pętla rAF, PRNG, scheduler efektów, `play/stop/cancel`, `setEnabled/Flashes/Intensity`, cue, shake z traumą, sprzątanie. Test unit zielony. Demo z jednym przyciskiem shake działa.
**Część B – postacie i przedmioty (commit B):** `guest.*` (enter/leave/breathe/tic/lean/flinch/liar_tell/setMood/speak), profile (6 sprite’ów + 12 postaci), `item.*`, `decide.*`, `pile.*`, `toast`, `cash`, `button.*`. Zdjęcia z demo sprawdzone wzrokowo.
**Część C – środowisko i przejścia (commit C):** deszcz canvas (0–3), lampa (wszystkie tryby), pył, tramwaj, zegar, burza/power, `day.start/end`, `saturday`, `scene.cut`, hitstop, scenariusze demo.
**Część D – jakość i dokumentacja (commit D):** testy smoke, pomiar FPS, `INTEGRACJA.md`, `README.md`, raport.

**Gotowe, gdy (wszystko sprawdź i odhacz w `NOTES.md`):**
1. `npm test` przechodzi (unit zawsze; smoke gdy Playwright dostępny, inaczej udokumentuj, że nie uruchomiono).
2. Każdy efekt z tabel 5.1/5.3/5.4 istnieje w `LF_FX.list()` i da się go odpalić z panelu demo bez błędów w konsoli.
3. Po `play` + zakończeniu/`cancel` elementy gry wracają do stanu sprzed (snapshot `cssText`/`className` zgodny); 0 osieroconych węzłów `.lfx-*` i animacji (`document.getAnimations().length` wraca do stanu wyjściowego, poza ambientami).
4. `setFlashes(false)`: żaden efekt nie zmienia jasności całego kadru szybciej niż 400 ms ani nie miga >3 Hz (test na zapisanej sekwencji klatek lub inspekcja parametrów, opisz metodę).
5. `prefers-reduced-motion` (emulacja w Playwright): brak shake’a i tików, gra pozostaje czytelna.
6. Determinizm: te same `seed` + te same wywołania = identyczne parametry losowe (test unit).
7. Wydajność: ambient (deszcz poziom 2 + lampa + pył) ≤1 ms/klatkę średnio na 1536×1024 (zmierz `performance.now` w pętli, wynik wpisz w NOTES.md; jeśli środowisko bez GPU, napisz to szczerze).
8. Żadnych tekstów dla gracza w module; żadnego `Math.random`; żadnych zależności; żadnych właściwości układu w animacjach (grep w testach).
9. Wizualnie zgodne z Linorytem sodowym: tylko 3 kolory, twarde krawędzie, brak gradientów i blur (grep `gradient|blur|box-shadow` w `fx/` ma zwracać tylko uzasadnione wyjątki opisane w NOTES.md, np. `filter: brightness/contrast`).
10. Demo otwiera się z `file://` i po prostym serwerze statycznym bez błędów 404.

## 9. Czego NIE robić
- Nie edytuj `game_src/*` i nie przepisuj gry. Nie dodawaj dialogów, fabuły ani nowej grafiki (jeśli czegoś brakuje, narysuj twardy prostokąt-zaślepkę w kremie i opisz w NOTES.md).
- Nie dodawaj dźwięku ani bibliotek (GSAP, Howler, Pixi itp.).
- Nie rób „ładnych” efektów kosztem czytelności: gracz musi w 2 sekundy wiedzieć, kto, co robi i co się stanie po kliknięciu (CD2 §8.1). Efekt ma wzmacniać decyzję i emocję, nie opóźniać gracza (nie blokuj inputu dłużej niż 200 ms).
- Nie kopiuj stylu cudzych gier (Papers, Please itd.); ruch ma być swój: deszcz, lampa, tramwaj.

## 10. Raport końcowy (w `NOTES.md` i w ostatniej wiadomości; format CD2 §12)
1) co zrobiono (3–5 zdań); 2) trzy role po 2–3 zdania: **GRACZ** (czy efekty pomagają, czy przeszkadzają), **RECENZENT STEAM** (3 najgorsze zdania recenzji o animacjach i jak im zapobiegłeś), **STREAMER** (które 3 efekty dają „klipowalny” moment); 3) lista klipowalnych momentów; 4) ZWERYFIKOWANE (co uruchomiłeś, z liczbami) i NIEZWERYFIKOWANE (np. wygląd na GPU Steam Decka, dotyk, Safari); 5) co dalej.
