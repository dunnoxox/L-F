# LF_FX

## Decyzje

- Repozytorium modułu jest samodzielne, w katalogu wynikowym `outputs/okienko_fx/`. Migawka i referencje są zachowane w repozytorium.
- Jedna pętla steruje również czasem animacji WAAPI. Sprzątanie wycofuje animacje, a stan gry pozostaje własnością wywołującego.

## Log

- A — rdzeń UMD, rAF, uchwyty, PRNG, trauma i demo wstrząsu. Trzy testy jednostkowe.
- B — gesty postaci, zgub, sterty i UI. Fallback oraz JSON zawierają 18 profili. Zrzut T1 z wdowcem i rękawiczką obejrzany w Chromium. Sześć prób gestów w demie z `file://` bez błędów JS.
