# QA przeglądarkowe: Okienko (okienko_e1)

Środowisko: Playwright/chromium headless, serwer http.server :8765, dsf 1, seed=1. Pliki gry NIE były edytowane. Kopia z poprawką fit() do weryfikacji: /tmp/qa/work/fixed (:8766). Skrypty: /tmp/qa/work/*.js. Zrzuty: /tmp/qa/reports/shots/.

## Podsumowanie (co działa)
- Pełne dni 1-10 botem (strategia "wydaj" i "odmów"): 0 console.error, 0 pageerror, 0 requestfailed, 0 odpowiedzi 404. Gra dochodzi do ekranu końcowego, brak scen bez wyjścia. Bez podwójnych kliknięć: brak zduplikowanych list w wieczorach, saldo bez anomalii (+40 za decyzję, czynsz 150, końcowo $220 w obu strategiach).
- Waga: start 361 KB (html/css/js 90 KB + tło), po "Zacznij" ładuje się naraz ~3,6 MB mp3 (42 pliki), dzień 1 to ok. 3,3 MB PNG. Całość assets 21 MB (items 9,2, in 4,2, snd 3,6, ppl 2,6, bg 1,4). Serwer bez gzip. assets/music/manifest.json = [] (brak muzyki, bez błędu).
- Resize w trakcie sceny: skala poprawna, stan nie ginie. Karta w tle 6 s: stan i timery OK.

## Błędy

### P1-1. Telefon (isMobile): scena obcięta, gra niegrywalna
Kroki: emulacja isMobile+hasTouch 390x844 lub 844x390, otwórz stronę. Na mobile `innerWidth/innerHeight` są zawyżone przez 1536px-owy #stage (390x844 -> iw 975, ih 2110; 844x390 -> iw 1101), więc `fit()` liczy skalę 0.63 / 0.88 zamiast 0.254 / 0.381. Scena jest przycięta (tytuł "OKIENK", brak ⚙, przyciski poza ekranem), body ma overflow:hidden więc nie da się przesunąć. Dowód: shots/mobile_orig_844x390_title.png, mobile_390x844 (porównanie: mobile_fixed_*).
Poprawka (zweryfikowana): w game.js
`function fit(){const de=document.documentElement,vw=de.clientWidth,vh=de.clientHeight;const s=Math.min(vw/1536,vh/1024);...}`
oraz do CSS: `html,body{position:fixed;inset:0;width:100%;height:100%;overflow:hidden;overscroll-behavior:none;touch-action:manipulation}`. Po tym iw=390, skala 0.254, scena cała (shots/mobile_fixed_*).

### P1-2. Podwójne kliknięcie na przyciskach przejść psuje stan
Przyczyna: `scene()` ma 450 ms opóźnienia, a handlery zmieniają stan od razu, bez blokady. Stary przycisk żyje w DOM przez fade.
- "Następny dzień" (wieczór): dwuklik -> dzień 1 przeskakuje na 3 (test 9). Dzień 2 przepada.
- Wieczór w piątek/dzień 5 -> "Tydzień": dwuklik = `saturday()` dwa razy, czynsz pobrany 2x (40 -> -260 zamiast -110; test 10).
- "Dalej" po decyzji: dwuklik daje `ST.gi++` x2, drugi gość przepada, gra idzie od razu do wieczoru (gi=2; test 7). Na ostatnim gościu gi=3 i `evening()` x2 (test 8).
Poprawka: globalna blokada przejścia, np. `let busy=false; function scene(img,build){if(busy)return;busy=true;fade.classList.add('on');setTimeout(()=>{...;busy=false},450)}` i w handlerach przycisków `if(busy)return;`. Dodatkowo `btn()` może samo wyłączać przycisk po pierwszym kliknięciu (`b.disabled=true`). Nie licząc `A.stamp;` bez nawiasów (patrz P3).

### P1-3. Szukanie w skrzyni niemożliwe z klawiatury
`.pit` to img/div bez tabindex/role, handler tylko pointer. Zrzut: Tab w scenie pile przechodzi tylko Linia 4/6/11 + ⚙ i wychodzi z dokumentu; pits tabbable = 0. Pętla gry nie przechodzi samą klawiaturą. Poprawka: dla każdego `.pit` ustaw `tabIndex=0`, `role='button'`, `aria-label=itemName` i obsługuj Enter/Space (`keydown` -> to samo co tap: `it.target?decide(g):msg(T.wrong)`); fokus ring jest już zdefiniowany tylko dla `button:focus-visible`, dodać `.pit:focus-visible{outline:4px solid var(--sod)}` (uwaga: filter drop-shadow, outline OK). Strzałki do przesuwania warstw opcjonalnie.

### P2-1. Zapis/Kontynuuj: powtarzane listy ech
`evening()` filtruje `!ST.shown.includes(p)` po obiekcie. Po `JSON.parse` `ST.shown` i `ST.pending` są osobnymi kopiami, więc `includes` zawsze false. Dowód (save.js): reload na starcie dnia 4 po wieczorze dnia 3 -> wieczór dnia 4 pokazuje ponownie "rękawiczka", "koperta", "termos" (5 listów zamiast 2), `shown` rośnie 4 -> 9. Reload na starcie dnia 3 jest czysty (shown jeszcze puste).
Poprawka: nadaj ech id i trzymaj w shown identyfikatory: przy `ST.pending.push({id:ST.log.length+':'+g.id,...})`, `ST.shown.push(p.id)`, `!ST.shown.includes(p.id)`; w `load()` migracja starych zapisów (`shown` obiekty -> `p.due+p.item+p.a`). To samo w `week()` (`left`).

### P2-2. Zapis w sobotę podwaja czynsz
`save()` wywołane przy zakupie ulepszenia zapisuje `day:5` (początek tygodnia) z saldem już po czynszu. "Kontynuuj: dzień 5" odtwarza dzień 5 i ponownie pobiera czynsz (110 -> 0, sat.js). Zapis na dniu startu nie zawiera też postępu w dniu (reload w środku dnia = restart dnia, to akceptowalne). Poprawka: zapisywać stan z oznaczeniem fazy (`ST.phase='saturday'`) i wznawiać `saturday()` bez ponownego odejmowania czynszu, albo odjąć czynsz dopiero przy kliknięciu "Tydzień 2".

### P2-3. Dwuklik/auto-powtórka zjada pytania
"Wpuść" -> druga połowa dwukliku trafia w pierwsze pytanie (turn=1 bez woli gracza; test 3). Dwuklik na pytaniu = turn+2 (test 4); szybkie klikanie może przeskoczyć całą rozmowę do szukania. Rozwiązanie jak P1-2 (blokada ~300 ms po zbudowaniu `#qs`: `qs.style.pointerEvents='none'` i włączenie po timeoutcie).

### P2-4. Decyzje nie mają skutków liczbowych
`ST.money+=40` bez względu na wybór, `d.zysk` / `d.strata` to tylko tekst. Boty "wydaj" i "odmów" kończą z identycznym $220 po 10 dniach. Czynsz 150 nie grozi bankructwem, brak game over, ulepszenia kupuje się raz na sobotę (pozostałe przyciski wyłączane, także "Nic nie kupuję" bez handlera). Do decyzji projektowej.

### P2-5. Focus i ustawienia (Esc)
Esc otwiera panel, ale fokus nie przechodzi do panelu, brak role="dialog"/aria-modal, brak pułapki fokusa (Tab wędruje: panel -> tło -> panel; fokus-in-panel per Tab: true x7, false x5), po zamknięciu fokus ląduje na BODY (nie wraca na poprzedni element). Focus ring jest (outline 4px na button, input auto 1px). Poprawka: zapamiętać `document.activeElement`, po otwarciu `focus()` na pierwszy input, pętla Tab w keydown, po zamknięciu `prev.focus()`; Esc nie powinien działać gdy fokus w `input[type=range]`? (OK, jedynie uwaga).

### P2-6. Małe cele dotykowe i czytelność tekstu po skalowaniu
Efektywny rozmiar tekstu (mediana / minimum): 1920x1080 31,6 / 17 px; 1366x768 22,5 / 12 px (podpisy "Zajrzyj", nazwa postaci); 1024x768 20 / 10,7 px; 2560x1080 jak 1920 (pasy czarne po 470 px); 800x1280 15,6 / 8,3 px; 390x844 portret 7,6 / 4,1 px (nieczytelne; 65% ekranu to czarne pasy, 292 px góra/dół); 844x390 landscape 11,4 / 6,1 px. Cele dotykowe po poprawce fit(): pytania 18 px (portret) / 26 px (landscape) wysokości, strefy decyzji 33 / 50 px, `.hot` 38 / 57 px, cel w skrzyni 49x60 / 74x89 px. Poniżej 44 px. Zalecenie: portret telefonu wymaga układu innego niż 3:2 (lub wymuś obrót, komunikat "obróć telefon" gdy innerHeight>innerWidth), na landscape zwiększyć minimalne fonty i przyciski (min 44 px po skali, np. `font-size:max(24px, 14/s px)` z CSS var `--s`).

### P2-7. Cel w skrzyni często prawie niewidoczny
Widoczność celu (część bounding-boxa niezasłonięta, 20x20 próbek): dzień 1: 16%/38%, dz.7: 0,75%, dz.10: 1,25% (pozostałe 10-35%). Zasłaniają go pity o wyższym z-index (`el.style.zIndex=i+1`, cel ma index 0, najniżej). Gracz musi kopać (przeciągać), co jest mechaniką, ale w dniach 7 i 10 cel jest praktycznie schowany i na telefonie to uciążliwe. Poprawka prosta: `set.push(target)` zamiast `unshift` (cel na górze) albo ograniczenie nakładania.

### P3 (kosmetyka)
- `A.stamp;` w handlerze "Dalej" po decyzji (brak `()`: dźwięk nigdy nie gra); `window.__S=ST` zostaje przestarzałe po `ST=fresh()`.
- Domyślny fokus w dostawie to "Nie zaglądam, otwieram okienko" (pierwszy `button.btn`), więc Enter od razu omija zaglądanie (sekrety). Fokus lepiej na pierwszym `.zguba`.
- `.hot` bez nazwy dostępnej (button bez aria-label), focus ring na nim ujawnia ukryty punkt; `#say` bez `aria-live`.
- `lampLoop()` jest wołane przy każdym Start/Kontynuuj, a po "Zacznij od nowa" kolejna pętla zaczyna się obok starej (z czasem częstsze mrugania lampy). Sprawdzone w kodzie, nie w teście.
- `scene()` nie blokuje wejścia podczas fade; dwuklik "Nie zaglądam" buduje scenę okienka 2x (podwójny dźwięk pukania).
- Brak respektowania `prefers-reduced-motion` (tylko własny przełącznik w ustawieniach).
- Pasy czarne na ultrawide (2560x1080: po 470 px) i 4:3; `.toast` (opacity 0) nachodzi na `.top` o 48x15 px, przy wyświetleniu "To nie to." częściowo schowany pod panelem (`.top` z-index 500).
- Brak wywołania podczas "Zacznij zmianę" ostrzeżenia, że nadpisze zapis.
- Brak preloadera: pierwszy Start ładuje 3,6 MB mp3 bez wskaźnika.

## Dotyk (po poprawce fit(), bez niej gra niegrywalna, patrz P1-1)
Tap na przyciskach (Start, Zajrzyj, hot, Wpuść, pytania, Dalej, tab, cel w skrzyni) działa. Przeciąganie pitów w skrzyni dotykiem (CDP touch) działa: `touch-action:none` na `.pit` (CSS), strona się nie przewija (scroll 0,0, visualViewport.scale 1, dokument = viewport). Przeciągnięcie rzeczy na strefę "Wydaj" w decyzji dotykiem działa (log: wydaj), `#onDesk` ma `touchAction='none'` z JS. Pinch-zoom nie jest wyłączony (meta viewport bez maximum-scale; `touch-action:manipulation` w poprawce ogranicza double-tap zoom). Uwaga: tap blisko krawędzi bounding-boxa obróconego celu trafia czasem w sąsiedni przedmiot ("To nie to."): przy małych celach na telefonie to realny problem trafialności.

## Klawiatura (reszta)
Tytuł, dostawa (zguby są button), zaglądanie (.hot jest button, Enter działa i fokus przechodzi na "Otwórz okienko"), okienko, rozmowa (fokus na pierwsze pytanie), decyzja (strefy to button, Tab/Enter działają; startowy fokus BODY), wieczór (fokus na "Następny dzień") przechodzą samą klawiaturą. Blokuje tylko szukanie w skrzyni (P1-3). Focus ring widoczny wszędzie gdzie są buttony.

## Zrzuty
shots/vp_<WxH>_<scena>.png dla 1920x1080, 1366x768, 1024x768, 2560x1080, 800x1280, 390x844, 844x390 i scen: title, delivery, inspect, window, talk, pile, decide, evening. Dodatkowo mobile_orig_*/mobile_fixed_* (P1-1), touch_*_decide/afterdrop, end_wydaj/end_odmow, saturday_after_buy, resize_back.
