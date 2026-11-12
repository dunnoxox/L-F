# Prototyp sterty (LOST & FRAUD, kierunek „lotnisko”)

Jedna plansza, bez fabuły i dialogów. Sprawdza tylko rdzeń: gość podaje kształt, kolor i znak, gracz kopie w fizycznej stercie, ściera kurz ze znaku, wydaje albo odmawia.

- Graj: otwórz `index.html` (jeden plik, wszystko w środku).
- Zasady: `WYDAJ` wydaje rzecz położoną na ladzie jako ostatnią. Ok. 30% gości kłamie: prosi o znak, którego nie ma żaden bliźniak; wtedy `ODMÓW` (zapadnia). Karta podaje liczbę bliźniaków w stercie.
- Sterta: dwie warstwy głębi (przód zasłania tył), fizyka Matter.js 0.20 (MIT, `src/matter.min.js`).
- Budowanie: `python3 -I build.py [folder lostfraud_play/assets]`. Rzeczy z `items_pipeline/gotowe_96`, SFX z `game/assets/snd`, znaki, goście, lada i półka z pierwszej wersji gry (`lostfraud_play/assets` w plikach projektu).
- Stara gra w `game/` nie jest ruszana.
