# Wpięcie LF_FX do OKIENKA

Skopiuj `fx/lf_fx.js` i `fx/lf_fx.css` obok gry. W `index.html` dołącz arkusz oraz skrypt przed uruchomieniem kodu gry:

```html
<link rel="stylesheet" href="fx/lf_fx.css">
<script defer src="fx/lf_fx.js"></script>
```

Rejestrację startu wykonaj ze skryptu gry ładowanego po LF_FX. W migawce ostatnie `title()` uruchom wewnątrz tej funkcji.

```js
document.addEventListener('DOMContentLoaded', () => {
  LF_FX.init({ stage: '#stage', seed: 1, flashes: !reduce, intensity: 1 });
  title();
});
```

`play()` zwraca `{finished, cancel}`. `finished` rozwiązuje się po zakończeniu i po anulowaniu. Animacje są tymczasowe. Po geście gra ustawia docelową pozycję, widoczność lub usunięcie elementu. Wyjątki to trwała wartość kasy, mina gościa, czas zegara oraz zasłony `power.out` i `day.end`, czyszczone przy zmianie sceny. Pętle zwracają uchwyt kończący się po `cancel()` albo `stop()`.

## Punkty wpięcia w migawce

### Scena i zegar

W [`game_src/game.js`, wiersz 27](../game_src/game.js#L27) wywołaj `LF_FX.stop()` przed rozpoczęciem wymiany widoku. Po `build()` włącz ambient dla nowej sceny, żeby `#glass` miał już docelowy rozmiar. Przenieś decyzję o typie sceny do parametrów `scene()` lub do wywołujących.

```js
function startSceneFx({ outdoorWindow, storm, saturday, clockEl, hh, mm }) {
  LF_FX.autoButtons(true);
  if (outdoorWindow && !saturday) {
    LF_FX.rain.setLevel(storm ? 3 : 2);
    LF_FX.ambient.start('tram_light');
  }
  LF_FX.ambient.start('lamp', { mode: saturday ? 'steady' : 'buzz' });
  LF_FX.ambient.start('dust');
  if (clockEl) LF_FX.clock.mount(clockEl, { hh, mm, size: 100 });
}
```

W `delivery()` podaj `T.day + ' ' + ST.day` jako `label` efektu `day.start`. W `evening()` odpal `day.end` po opuszczeniu widoku wieczoru, bo efekt zostawia czarną zasłonę. Odtworzenie `day.start` w tej samej scenie rozjaśnia tę zasłonę. W `saturday()` po zbudowaniu widoku odpal `saturday`, po każdym piątym dniu. Dni burz odczytaj z `STORM_DAYS` (3, 8, 13, 18, 23) i `ST.storm`. Zastąp istniejący `A.thunder()` w `delivery()` sekwencją, jeśli podepniesz oddzielne cue audio:

```js
async function stormFx(isCurrentScene) {
  LF_FX.rain.setLevel(3);
  await LF_FX.play('storm.flash').finished;
  if (!isCurrentScene()) return;
  await LF_FX.play('power.out').finished;
  if (!isCurrentScene()) return;
  // Czas powrotu wybiera scenariusz gry.
  await LF_FX.play('power.on').finished;
}
```

### Gość i miny

Punkty startowe to [`addWindow()` i `setFace()`](../game_src/game.js#L41), [`windowScene()` i `say()`](../game_src/game.js#L64) oraz [`decide()`](../game_src/game.js#L96). W gałęzi z grafiką, po obliczeniu istniejącego `fc`, przenieś ustawienie pojedynczego `backgroundImage` do funkcji:

```js
const portraits = new WeakMap();
let animationsEnabled = true;

function paintPortrait(el, fc, mood, profile = fc) {
  el.classList.remove('ph');
  if (!animationsEnabled) {
    el.style.backgroundImage = `url(assets/ppl/${fc}_${mood}.jpg)`;
    return;
  }
  if (portraits.get(el) !== fc || !el.querySelector('.lfx-portrait')) {
    el.textContent = '';
    el.style.backgroundImage = 'none';
    LF_FX.guest.mount(el, { profile, sprite: fc, mood, spriteBase: 'assets/ppl/' });
    portraits.set(el, fc);
  }
  LF_FX.guest.setMood(mood);
}
```

W `setFace()` zachowaj `dataset.mina`. Przy braku `fc` wywołaj `guest.unmount()` przed zbudowaniem istniejącego widoku zastępczego. Dwie warstwy modułu dziedziczą pozycję i rozmiar portretu z kontenera dzięki `inset: 0`. Używają `contain` i `center bottom` jak migawka. Czyszczenie `e.textContent` w gałęzi graficznej wykonuj tylko przed ponownym montażem, inaczej usunie warstwy.

Przy pierwszym dodaniu `#guest.in` dodaj `LF_FX.play('guest.enter', e, { from: 'left' })`. Na ścieżce z LF_FX wyłącz w CSS gry przejścia opacity/transform dla `#guest`, które w migawce trwają 700 ms. `.in` nadal określa stan bazowy. Przed wyjściem odpal `guest.leave`, a po `finished` usuń `.in`, jeżeli scena jest aktualna. Klikalność zależy od gry i nie wymaga czekania na wejście. W `say()` dla miny `mowi` wywołaj `LF_FX.guest.speak({ chars: text.length, cps: 62.5 })` po ustawieniu nowej kwestii. Przed zmianą mówcy zatrzymaj poprzedni bob przez `guest.stopSpeak()`. Po zdarzeniu fabularnym ustaw `guest.setBroken(true)`, żeby następny tik użył zmienionego rytmu lub zamilkł.

### Sterta, oględziny i decyzje

- W [`pile()`](../game_src/game.js#L77) wywołaj `pile.dig` na `.field` przy ruchu w stercie. Wywołaj `item.pull` na img wybranej zguby, kiedy trafia na ladę w `decide()`. Przycisk zajrzenia w `inspect()` może animować `.pic` przez `item.inspect_in`. Przy wyjściu użyj `item.inspect_out`.
- W `msg(m)` ustaw treść jak w migawce i wywołaj `toast.pop` na `.toast`. Usuń stary licznik czasu dla `.on`. Gdy efekty są wyłączone, pokazuj komunikat dotychczasową ścieżką.
- W `decide()` oba wejścia są już zbieżne: `.zone.onclick` oraz `onpointerup` po upuszczeniu `#onDesk` na strefę albo `#glass` wołają `finish(a)`. Tu podepnij mapę poniżej. W innych widokach odpowiednikiem `#onDesk` jest img wewnątrz `.zguba`. Zachowaj istniejący hit-test i ustaw `done` przed animacją. Aktualizuj fabułę i kasę bez czekania. Przeniesienie/usunięcie animowanej rzeczy wykonaj po `finished`, pod warunkiem że `it.isConnected`. Dla upuszczenia już na szybie podaj niewielki `dx/dy`, np. `{dx: 0, dy: -65}`. Przy nieudanym upuszczeniu odtwórz `item.reject_push` na elemencie po przywróceniu pozycji.
- W `finish()` zapisz kwotę przed modyfikacją `ST.money`. Po zmianie przekaż ją do `cash.roll` razem z nową wartością. Migawka wypisuje saldo w kilku ekranach, więc wywołuj efekt na osobnym elemencie liczbowym w tym widoku, który rzeczywiście pokazuje saldo.

```js
const decisionEffect = action => {
  if (/^wydaj/.test(action)) return 'decide.give';
  if (/^odmow/.test(action)) return 'decide.refuse';
  if (/^zatrzymaj|depozyt/.test(action)) return 'decide.keep';
  if (/^zadzwon/.test(action)) return 'decide.call';
  return null;
};
// W finish(a), gdy it jest jeszcze na ladzie.
const name = decisionEffect(a);
const motion = name ? LF_FX.play(name, it, { glass: '#glass' }) : null;
const finalizeItem = () => {
  if (!it.isConnected) return;
  if (/^wydaj/.test(a)) it.remove();
  else it.classList.add('away');
};
if (motion) motion.finished.then(finalizeItem);
else finalizeItem();
```

## Zdarzenie, wywołanie i dźwięk

Nazwy zweryfikowano w tablicy `NAMES` w [`game_src/audio.js`](../game_src/audio.js#L7). `AUD.sfx()` przyjmuje nazwę bez prefiksu `sfx_`. Dla `amb_*` dodaj w warstwie audio wywołanie istniejącego prywatnego `play()` z właściwą szyną, bo `AUD.sfx()` sam dodaje prefiks. Usuń dublujące się wywołania w starych miejscach lub zachowaj tamte dźwięki i pomiń odpowiednie cue.

| Zdarzenie | Wywołanie | Cue | Klip |
| --- | --- | --- | --- |
| Podejście | `guest.enter` | `steps_sneakers`, `steps_boots`, `steps_limp` | `sfx_steps_sneakers`, `sfx_steps_boots` (też dla utykania) |
| Zguba na ladzie | `item.pull`, `item.hand_over` | `item_land` | `sfx_slide_light` |
| Odepchnięcie lub wydanie | `item.reject_push`, `decide.give` | `thud` | `sfx_slide_heavy` albo `sfx_handover` (`info.handover`) |
| Odmowa | `decide.refuse` | `window_bang` | `sfx_trapdoor` |
| Depozyt | `decide.keep` | `drawer_small` | `sfx_drawer_small` |
| Telefon | `decide.call` | `phone_ring` | `sfx_phone_old_ring` |
| Sterta | `pile.dig`, `pile.collapse` | `pile_dig`, `pile_collapse` | `sfx_pile_dig`, `sfx_pile_collapse` |
| Podmuch | `rain.setLevel(3)` | `rain_gust` | `amb_wind_gap` |
| Lampa i prąd | `ambient.set('lamp', {mode})`, `power.out/on` | `lamp_flicker`, `power_out` | `sfx_lamp_flicker`, `sfx_power_out` |
| Tramwaj | `ambient.start('tram_light')` | `tram_pass` | `amb_tram_far` |
| Minuta | `clock.mount`, `clock.advance` | `tick_big` | `amb_clock_tick` lub `AUD.tick()` dla pojedynczego tyknięcia |
| Burza | `storm.flash`, `shake('thunder')` | `thunder` | `amb_thunder_far` |
| Zamknięcie | `day.end` | `door_bolt` | `sfx_door_lock_day_end` |
| Pukanie | `shake('knock')` | `knock` | `sfx_knock_polite` |
| Wstrząs | `shake('thud')`, `shake('collapse')` | `thud`, `pile_collapse` | `sfx_slide_heavy`, `sfx_pile_collapse` |

```js
const clips = { window_bang: 'trapdoor', drawer_small: 'drawer_small', phone_ring: 'phone_old_ring' };
const unsubscribe = LF_FX.onCue((name, info) => {
  if (clips[name]) AUD.sfx(clips[name]);
  if (name === 'thud' && info.handover) AUD.sfx('handover');
});
// Przy odpięciu modułu: unsubscribe(); LF_FX.destroy();
```

Efekty ciągłe emitują cue tylko przy odpowiednim zdarzeniu. Pozostałe gesty wizualne korzystają z dźwięku wejściowego gry, np. `AUD.tick()` na przyciskach.

## Ustawienia i kolejność warstw

W [`settings()`](../game_src/game.js#L31) użyj `LF_FX.setFlashes(!reduce)` przy zmianie istniejącego przełącznika. `setIntensity(0…1)` skaluje ruch i cząstki. `setEnabled(false)` sprząta natychmiast. Po ponownym włączeniu odtwórz stan bieżącej sceny: ambienty, gościa i zegar. Przy wyłączeniu przywróć zwykły portret gry przez `paintPortrait()`. Bez jawnego nadpisania moduł śledzi `prefers-reduced-motion`. W panelu dema można nadpisać go przez `setReduced()`; `setReduced(null)` przywraca wybór systemu.

- `fit()` i skala `#stage` należą do gry. LF_FX mierzy geometrię celu przy starcie gestu, a rAF pracuje we współrzędnych sceny. Wstrząs używa osobnych `translate` i `rotate`.
- `#guest` ma `mix-blend-mode:screen`. Zachowaj go na kontenerze, gdzie czerń JPG znika w tle. W przypadku ręcznie dodanych nakładek użyj warstw wewnątrz portretu lub osobnej warstwy ze zdefiniowanym mieszaniem.
- Ambient ma z-index 2–9, gesty 22–25, a zasłony i karty 79–82. Warstwy o wysokim z-index wewnątrz `#layer` mogą wychodzić nad efekty. Jeżeli trzeba ograniczyć ich zasięg, utwórz kontekst stosu na `#layer` i zweryfikuj strefy oraz warstwy zasilania. Daj `#fade` i ustawieniom wyższy poziom, a stare `#dim.blink` i `lampLoop()` wyłącz po przejęciu lampy. Migawka przełącza sceny z własnym 450 ms fade'em, więc jej czasy skróć w kodzie gry, jeśli mają wejść w limit CD2.
- Przed wymianą DOM wołaj `stop()`. Przerywa uchwyty i usuwa warstwy sceny. Strzeż każdej asynchronicznej kontynuacji identyfikatorem widoku, bo anulowanie także rozwiązuje obietnicę.

## Rozszerzanie

**Efekt.** 1. Zarejestruj nazwę, opis i funkcję przez `add()`. 2. Zbuduj przebieg przez `job()` i jego `ctx.motion()/time()/cleanup()`, uwzględniając ograniczenia ruchu i błysków. 3. Dodaj cel w `demo/scenario.js`, jeżeli efekt go potrzebuje, i uruchom smoke.

**Profil.** 1. W `profiles.json` podaj `weight`, `breathMs`, `sway`, `duration`, `intervalMs`, `tic`, `broken` oraz opis nawyku. 2. Powtórz wpis w fallbacku `lf_fx.js` i wskaż identyfikator przez `guest.mount()`. 3. Sprawdź normalny i złamany tik, a potem uruchom `npm run test:unit`.

**Ograniczenia.** Sprite’y są jednolitymi JPG, więc domyślnie gest porusza sylwetką, a mina jest zmianą obrazka. `guest.mount(el, { layers: {body, hands, mouth} })` przyjmuje gotowe węzły lub selektory. W przypadku własnego ciała ustaw statycznie `transform-origin: 50% 100%`. Profile bez dostarczonej grafiki działają na przekazanym elemencie. Na T1 światło i deszcz są też częścią malowanego tła. Efekty mogą zasłonić obraz warstwą zasilania, a całkowitą kontrolę nad oświetleniem zapewnią dopiero osobne tła lub warstwy. `guest.liar_tell` opisuje zawahanie, które może wystąpić także przy prawdziwej odpowiedzi. Dowód pozostaje w mechanice gry.
