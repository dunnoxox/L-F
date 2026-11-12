# DŹWIĘKI: 16 brakujących SFX (ElevenLabs, nie ChatGPT)

Plik pomocniczy; pobieranie i wpięcie robi osobny wątek.


Tych plików nie ma w `game/assets/snd/` (jest 42 SFX i 14 ambientów), a gra ich potrzebuje. To NIE jest ChatGPT, tylko **ElevenLabs → Sound Effects**. Nic nie załączasz. Jeśli wolisz, napisz w wątku, a wygeneruję je sam przez konektor ElevenLabs.

**Gdzie wrzucić:** `/mnt/project-files/audio/sfx_nowe/`, nazwy jak w pierwszej kolumnie. Ustawienia: 1-4 s, bez muzyki i bez mowy, 2 warianty i wybierz lepszy.

| Plik | Prompt (wklej) | P |
|------|----------------|---|
| `sfx_doorbell_shop.mp3` | small brass shop door bell, two quick ding-ding chimes, spring on a wooden door, dry room | P0 |
| `sfx_door_open_close.mp3` | old wooden door creak open and soft thud shut, wet wood, rain outside | P0 |
| `sfx_coins_paper_money.mp3` | counting paper bills and putting a few coins in a metal tin, quiet | P0 |
| `sfx_trace_pin.mp3` | a single sharp metal pin pressed into a cork board, short, dry, close | P0 |
| `sfx_pen_scratch.mp3` | ballpoint pen writing in a paper ledger, 2 seconds, close | P1 |
| `sfx_paper_envelope.mp3` | rustling an envelope being opened, paper tearing softly | P1 |
| `sfx_cloth_inside_bag.mp3` | hand rummaging in a leather bag, keys jingle, zipper | P1 |
| `sfx_umbrella_shake.mp3` | wet umbrella being shaken and folded | P1 |
| `sfx_glass_tap.mp3` | fingertip tapping glass window twice, rain behind | P1 |
| `sfx_police_radio_far.mp3` | police radio crackle with muffled dispatcher voice, no intelligible words, far away, rainy street | P1 |
| `sfx_cat_meow_window.mp3` | small cat meowing quietly behind window glass, rain | P1 |
| `sfx_radio_tune.mp3` | old radio dial turning between stations, static and fragments of music, no speech | P1 |
| `sfx_siren_pass.mp3` | single distant police siren passing through wet streets, fading, 4 seconds | P2 |
| `sfx_kettle_click.mp3` | electric kettle click off and a ceramic mug set on wood | P2 |
| `sfx_heartbeat_low.mp3` | slow low heartbeat, felt more than heard, 3 seconds, no music | P2 |
| `sfx_typewriter_key.mp3` | old typewriter, 5 keys and carriage bell | P2 |

**Mamrotania** (8 plików po 2 s, bez słów): `mumble_old_man.mp3` "older man throat clearing and sigh"; `mumble_young_woman.mp3` "young woman nervous sniff and quiet hm"; `mumble_heavy_man.mp3` "heavy man grunting low laugh"; `mumble_child.mp3` "child whisper breath"; `mumble_old_woman.mp3` "old woman cough"; `mumble_teen.mp3` "teen mumbling"; `mumble_clerk.mp3` "stern clerk exhale"; `mumble_crying.mp3` "woman crying quietly, stifled".

## Sprawdzone: czego jeszcze brakuje poza tym
- Rzeczy z sekcji B audytu: `kask`, `koszyk`, `ksiega` w paczce 3; reszta przypadków ma już sprite'y w grze.
- Wolne popiersia kolejki 2, 5, 6, 7: gra ich nie potrzebuje.
- C4 (jeden język rzeczy, bez cienkiego konturu): obchodzone w kodzie, nowy arkusz dopiero po paczce 2.
- C10 (osadzony krój): nie ChatGPT; wrzuć plik fontu OFL, jeśli chcesz, wątek gry go wpnie.
