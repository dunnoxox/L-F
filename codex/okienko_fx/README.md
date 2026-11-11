# OKIENKO · LF_FX

Samodzielna warstwa ruchu dla nocnego biura rzeczy znalezionych. Działa w przeglądarce bez buildu, bibliotek i dźwięku. Kod gry dostaje sygnały audio przez `onCue`.

**Demo:** otwórz [demo/index.html](demo/index.html) z dysku albo uruchom `npx http-server .` i przejdź do `/demo/`. Przyciski „Wizyta · wydaj”, „Wizyta · odmów” i „Burza” odtwarzają kompletne sekwencje. Panel pozwala też uruchomić każdy efekt osobno.

**Testy:** Node 18+ i `npm test`. Smoke wykrywa Playwright, a bez niego zgłasza pominięcie. Aby uruchomić go z Chromium:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
npm test
```

Zrzuty z testu trafiają do `tests/out/`. Do istniejącego Chromium można wskazać plik wykonywalny przez `PLAYWRIGHT_CHROMIUM_EXECUTABLE`.

**Efekty**

- Gość — wejście, wyjście, oddech, tik, pochylenie, odruch i zawahanie.
- Rzecz i sterta — wyjęcie, przesunięcie, oględziny, odepchnięcie, przekopanie i osunięcie.
- Decyzje i UI — wydanie, odmowa, szuflada, telefon, toast, kasa, wskazanie i wciśnięcie.
- Scena — deszcz, lampa, pył, tramwaj, zegar, piorun, zasilanie, dzień, sobota, cięcie, wstrząs i hit-stop.

[Integracja z grą](docs/INTEGRACJA.md) · [Decyzje i weryfikacja](NOTES.md)
