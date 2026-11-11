# LOST & FRAUD

Gra o biurze rzeczy znalezionych: siedzisz za okienkiem, petenci opowiadają historie, a Ty wydajesz im (albo nie) ich rzeczy. Dialogi, ludzie i fabuła ("Fotel", 25 dni) napędzają decyzje. Cel: Steam, 9,99 USD. Styl: "Linoryt sodowy" (czerń, krem, pomarańcz lampy sodowej).

## Struktura

| Katalog | Zawartość |
|---|---|
| `game/` | Grywalna wersja w przeglądarce (HTML/JS, E1 v4). Otwórz `game/index.html` |
| `koncept/` | Fabuła, obsada, kalendarz, dialogi (v3) |
| `prompty/` | Prompty do ChatGPT/Gemini, master prompt CD2, biblia dialogów, styl |
| `docs/` | STATE, DECISIONS, OPEN_QUESTIONS, mapa projektu, walidator dialogów |
| `steam/` | Pakiet Steam: opisy, trailer, konkurencja, wishlisty |
| `unity/` | Szkielet projektu Unity (port docelowy) |
| `codex/` | Prompt i paczka dla Codexa (moduł animacji) |
| `audio_src/` | Projekt dźwięku i prompty audio |
| `assets_audio/` | Muzyka (`lf_music.zip`), 42 SFX (`lf_sfx_42.zip`), ambienty i SFX mp3 |
| `art/` | Grafiki Okienka (art5, art6) i referencje stylu |
| `items_pipeline/` | Pipeline przedmiotów (skrypty cięcia, listy, prompty) |

## Czego tu nie ma
Starsze wersje gry (v3-v8 i E1 v1-v3), stare kierunki grafiki (art, art3, art4), duże paczki ilustracji i uploady. Zostają w folderze plików projektu.

## Zasady
Zmiany z wątków trafiają przez branch + PR do `main`. Bez force-push na `main`.
