# Paczka referencji dla Codexa: moduł LF_FX (animacje i juice) do gry OKIENKO

**Start:** rozpakuj do katalogu repo, otwórz `codex_prompt.md` i wykonaj go w całości (części A–D, jedna sesja).

## Zawartość
| Ścieżka | Po co |
|---|---|
| `codex_prompt.md` | Pełne zadanie, API, kryteria ukończenia. |
| `docs/CD2_master_prompt.md` | Nadrzędne zasady produkcji (UI ≤300 ms, dostępność, lista zakazów, raport w 3 rolach). |
| `docs/styl_linoryt_sodowy.md` | Styl: czerń, krem, pomarańcz lampy; bez półtonów i obrysów. |
| `docs/okienko_obsada_i_kalendarz.md` | 12 postaci (wygląd, sposób mówienia) do profili ruchu i tików. |
| `docs/MOMENTY.md` | Klipowalne momenty dni 1–10. |
| `game_src/` | Migawka gry (TYLKO DO CZYTANIA): `index.html`, `game.js`, `game.css`, `audio.js`, `data.js`. Kluczowe: `#stage` 1536×1024 skalowany, `#guest` (640×650, `mix-blend-mode:screen`), `#glass`, `scene()` w game.js ~l.27, `setFace()` ~l.41. |
| `sprites/ppl/` | 6 postaci × 4 miny (`neutralna`, `mowi`, `emocja`, `klamie`), JPG na czarnym tle, jedna warstwa (brak osobnych rąk/ust). |
| `sprites/bg/` | Tła T1–T5 (1536×1024). |
| `sprites/items/` | Kilka rzeczy PNG z przezroczystością. |
| `refs_visual/` | K1 (świat/światło), L4 (twarze), K4 (rzeczy), L2 (scena sodowa): nastrój wizualny. |

## Ważne fakty
- Moduł ma być samodzielny: nie edytuje gry, wpina się jednym `<script>` i `<link>`.
- Pliki gry używają polskich nazw (`wdowiec`, `klamie`, `zguba`); w API modułu identyfikatory są po angielsku.
- Aktualna, pełna wersja gry żyje w osobnym wątku; ta migawka (okienko_e1_v3) wystarcza do zaprojektowania integracji.
