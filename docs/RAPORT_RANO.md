
## Steam
- Wybrane Electron + steamworks.js, opakowanie w `steam/app/` (uruchamia grę, osiągnięcia, zapis do pliku). Plan: `steam/STEAM_PLAN_WYDANIA.md`.
- Niezweryfikowane: prawdziwe Steam, builder, Mac/Win. Blokuje wydanie: konto Steamworks i 100 USD, jakość gry, grafiki sklepu, AppID.

## Testy (noc 11/12.11, symulator 25 dni)
Pełny raport: `docs/QA_NOC.md`; narzędzia i surowe wyniki: `docs/tools/qa_noc/` (`bash docs/tools/qa_noc/run_all.sh`). Symulator odwzorowuje logikę `game/game.js` z main; render, dźwięk i dotyk nie były testowane.
- **Zakres:** 10 strategii x 300 seedów, 1,5 mln losowych przebiegów, analiza statyczna danych (50 gości, 159 decyzji, 528 pytań), próbka 40 scen i lint polszczyzny.
- **Blokery wydania:** (K1) `game/data.js` ma 30 gości, więc gra urywa się po dniu 15; (K2) zakończenie Skrytka B nieosiągalne (literówki w nazwach akcji w `endings()`); (K3) brak zakończeń „Odebrany” i „Rotacja” oraz liczników `notatki/maya_testy/kopie`; (K4) w d25 gracz wybiera gest dwa razy (`d25_ksiega` + `ledger()`).
- **Balans:** uczciwy kończy z ok. 180 $, chciwy z 2 439 $ i bez kary poza epilogiem; łapówki `wez_*` nie ruszają żadnego licznika, 47% decyzji w ogóle nie zmienia liczników; `wymaga` na decyzjach jest ignorowane (łapówki zawsze widoczne).
- **Rytm:** ok. 4,5 min/dzień, ok. 2,1 h całości; d4, d20, d21 mają jednego gościa (najkrótsze dni w szczycie fabuły); zegar stoi na 23:40.
- **Stan po testach:** nie naprawiałem `game/` (właścicielem jest wątek gry); poprawki do wdrożenia wylistowane w sekcji „TOP 10” w `docs/QA_NOC.md`.
