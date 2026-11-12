# Stan wątku strategii w chwili wstrzymania (12.11.2026, 19:50 UTC)

Tommy wstrzymał projekt: „sam początek i koncept LOST & FRAUD jest świetny, ale tylko to”. Ten plik mówi, co jest gotowe, co zostało otwarte i od czego zacząć, gdyby gra wróciła.

## Co jest w main i pod linkiem

Gra: https://claude.ai/artifact/UNPJkwSsrMMyiZnMbEK1qN. Nic z tego wątku nie zostało w niezmergowanym PR.

- Rdzeń „rozmowa prowadzi do magazynu” (`game/tropy.js`, `game/tropy.css`): cechy rzeczy pojawiają się na kartce tylko wtedy, gdy gość je wypowie, w skrzyni leżą bliźniaki, oględziny kosztują czas, pomyłka kosztuje cierpliwość. Opisane dni 1-8.
- Kłamstwo wychodzi z rzeczy, nie z komunikatu: pola `mowi`, `niezg`, `odkrywa` (Gus, Evan, Bree, Victor).
- Uwagi Tommy'ego z grania: widoczna zasłonka, lupa przy oględzinach, regulamin okienka, gość odmawia i trzeba go nacisnąć kosztem cierpliwości.
- Gra w 10 dni jako próba: Ustawienia, Dane, „Próba: gra w 10 dni” albo `?dni=10`. Plan w `window.PLAN10`. Domyślnie nadal 25 dni, bo decyzja o kształcie skrótu nie zapadła.
- Ekonomia: kolejka płaci 10 $, w ostatnią sobotę Marlow ściąga resztę długu.

## Co zostało otwarte

- Decyzja, jak skrócić fabułę do 10 dni (dni 1-8 plus finał, pełne zagęszczenie, albo dni 1-10 bez zwrotu). Bez odpowiedzi.
- Trzech kłamców używa tej samej sztuczki. Zaglądanie do rzeczy przy dostawie straciło sens. Ludzie z kolejki nie wymagają wnioskowania. Tydzień 2 jest za luźny dla bezbłędnego gracza.
- Dni 9-10 nie mają tropów i nikt z ludzi nie ocenił, czy finał trzyma napięcie.
- Czas gry w próbie to około 1,5 do 2 godzin, czyli na granicy okna zwrotu Steam.

## Uczciwa ocena

Naprawiałem mechanikę warstwa po warstwie, a werdykt Tommy'ego mówi, że problem leży wyżej: dobre są otwarcie i pomysł, reszta gry nie dowozi tej obietnicy. Automat przechodził dni 1-10 bez błędów, ale to mierzy poprawność, nie przyjemność. Gdyby projekt wrócił, zacząłbym od pytania, co dokładnie działa w pierwszych minutach (pieczątka FRAUD, okienko, pierwsza rzecz), i budował jeden dzień, który trzyma ten poziom, zanim powstanie dziesięć.

## Gdzie szukać

- Strategia: `docs/STRATEGIA_GRY.md`. Dziennik iteracji ze szczerymi ocenami: `docs/KOLEJKA_ITERACJI.md`.
- Testy: `node qa/tropy_test.js`, `node qa/bot.js --days N`, `node qa/fabula.js`.
- Narzędzia pomiaru ekonomii były w katalogu roboczym sesji i nie trafiły do repo.
