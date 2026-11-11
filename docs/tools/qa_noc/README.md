# qa_noc: symulator i analizy balansu LOST & FRAUD

Bez przeglądarki: `sim.js` przepisuje logikę z `game/game.js` (bump liczników, `has()`, `qlist()`, `entry()`, magazyn, soboty, audyt, `endings()`) i gra dni 1-25 na świeżo zbudowanych danych.
Uruchom: `bash docs/tools/qa_noc/run_all.sh` (Node 18+, Python 3). Wyniki w `wyniki/`.
Uwaga: po zmianie logiki w `game/game.js` trzeba ją zsynchronizować w `sim.js` (sekcje oznaczone jak w oryginale).
