# QA: telefon i dźwięk (12.11)

Test: Chromium + Playwright, iPhone 13 poziomo (750×342) i pionowo (390×664), desktop 1440×900. Automatyczny gracz klikał/stukał jak człowiek, ok. 1100 kroków łącznie, w tym jedno przejście przez 4 soboty (dni 1–20). Każde wywołanie dźwięku logowane.

## Co było źle

| # | Problem | Skutek |
|---|---|---|
| 1 | Scena 1536×1024 skalowana do 33% na iPhonie poziomo | przyciski ok. 21 px wysokości, tekst 8–10 px, koło zębate 19 px |
| 2 | Pion = czarna plansza „Obróć telefon” | przy blokadzie obrotu gra była niegrywalna |
| 3 | Szybkie podwójne stuknięcie „Dalej” po decyzji | `ST.gi` rosło o 2, następny gość `undefined`, gra stawała na czarnym ekranie (błąd JS `reading 'face'`) |
| 4 | 7 stingerów (`dzien_start`, `klamstwo`, `decyzja`, `sekret`, `wydarzenie`, `dzien_koniec`, `koniec`) nie ma plików | każdy duży moment był cichy, `sting()` zwracał `false` |
| 5 | Muzyka: 10 plików dekodowanych na starcie, wszystkie grają w pętli z głośnością 0 | ok. 320 MB PCM w pamięci, 10 stale grających źródeł; iOS potrafi zabić kartę |
| 6 | iOS: WebAudio milknie przy przełączniku wyciszenia | „gra nie ma dźwięku na iPhonie” |
| 7 | Dźwięk grał dalej po zablokowaniu telefonu / zmianie karty | bateria |
| 8 | Po „kłamstwie” muzyka po 9 s wracała do `talk` nawet w magazynie lub przy decyzji | zły nastrój w złej scenie |
| 9 | Kasa: przy wypłacie tylko klik zamka | brak satysfakcji przy pieniądzach |
| 10 | Toast „TO NIE TA RZECZ” na tej samej wysokości co podpowiedź kroku | nakładały się |
| 11 | Przycisk „Notatnik” i „Kartka przyklejona do skrzynki” (zasady dnia 1) bez żadnego CSS | goły przycisk przeglądarki w rogu; zasady schowane pod nagłówkiem |
| 12 | Sobota: „Nic nie kupuję” nic nie robiło | wyglądało na zepsuty przycisk |
| 13 | Przeciąganie rzeczy bez `pointercancel` | po przerwanym geście rzecz „wisiała” |
| 14 | Tekst „{g} nie poczekał dłużej i wyszedł” także dla kobiet | „Rosa Vale nie poczekał” |

## Co poprawiłem

- **Telefon (`body.phone`, gdy scena < 62% rozmiaru):** większe przyciski, pytania, dymek rozmowy, magazyn (3 kolumny), strefy decyzji, listy wieczorne, panel ustawień. Na iPhonie: przyciski ok. 37 px, tekst 12–15 px. Podpowiedź kroku znika po 7 s (pulsujące przyciski prowadzą dalej), żeby nie zasłaniała nagłówków. Księga przyjęć w magazynie przeniesiona na dół. Kartka z zasadami na telefonie zwinięta do paska, stuknięcie rozwija.
- **Pion:** scena obraca się o 90°, więc gra działa z blokadą obrotu (wystarczy obrócić telefon). Przeciąganie przelicza ruch palca po obrocie. Krótka podpowiedź na 3 s.
- **Dotyk:** `touch-action: manipulation` (bez zoomu po dwukliku), bez podświetlenia stuknięć, bez menu długiego przytrzymania, hover nie „przykleja się” na ekranach dotykowych.
- **Podwójne stuknięcia:** przyciski ignorują kliknięcia w trakcie przejścia sceny; „Dalej” po decyzji jednorazowe.
- **Stingery:** jeśli brak pliku, gra syntezuje krótki motyw w d-moll (tonacja muzyki): start dnia (D→A), koniec dnia (A→F→D), sekret (wysokie F–A–D), kłamstwo (niski dysonans D/Es), decyzja (niskie D + ciężki zamek), wydarzenie (niski pomruk), koniec tygodnia/gry (akord D–F–A–D). Gdy pliki `st_*.mp3` trafią do `assets/music/` i manifestu, grają zamiast syntezy.
- **Kasa:** brzęk dwóch monet przy wypłacie, trzech przy dużej (> 60 $); dźwięk portfela przy zakupie ulepszenia.
- **Muzyka na żądanie:** ładowane tylko stemy bieżącej sceny, cisza = źródło zatrzymane, bufory LRU (telefon: 3 w mono, desktop: 6). Pierwsze uruchomienie pobiera 1 utwór zamiast 10.
- **iOS:** `navigator.audioSession.type = 'playback'` + cichy element `<audio>` w pętli, żeby gra grała mimo przełącznika wyciszenia; zawieszenie dźwięku w tle, wznowienie po powrocie.
- Poprawki 8, 10–14 z tabeli.

## Zweryfikowane

- 0 błędów JS i 0 błędów sieci w przebiegach telefon poziomo / pion / desktop po poprawkach.
- Przebieg 700 kroków: 4 soboty, czynsz i rachunki liczone poprawnie (160/180/200/220 $), ulepszenia odejmują kasę, 43 decyzje z dźwiękiem, 43 brzęki kasy, wszystkie stingery zwracają `true`.
- 42 SFX ładują się (`AUD.loaded() = 42`), AudioContext `running`.

## Czego nie sprawdziłem (wymaga prawdziwego telefonu)

- Odsłuch na żywo (z chmury nie słyszę): balans syntezowanych stingerów względem muzyki, brzmienie brzęku monet.
- Prawdziwy Safari na iPhonie: przełącznik wyciszenia, pamięć na starszych modelach.
- Pasek adresu Safari zabiera wysokość; najlepiej grać po „Dodaj do ekranu początkowego”.

## Dla innych wątków

- Tekst „WIESZ COŚ, CZEGO NIE POWINIENEŚ” jest tylko w formie męskiej (dialogi/LANG).
- Brakuje plików stingerów `st_*.mp3` (prompty: `audio/okienko_prompty_audio.md`).
