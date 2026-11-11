# OKIENKO: prompty audio (Suno / Udio / ElevenLabs SFX)

Zasady wspólne: wszystko po angielsku (generatory lepiej rozumieją), bez wokalu, bez perkusji "z automatu", brud i szum są celowe. Generuj po 3 do 4 podejść każdego promptu i wybieraj najgorszy-ładniejszy, czyli ten najmniej wygładzony.

---

## CZĘŚĆ 1: MUZYKA (Suno / Udio)

### Jak pracować (loop)
1. Generuj w trybie instrumentalnym (Suno: Instrumental ON, pole Lyrics puste lub `[Instrumental]`).
2. Bierz wersje 2 do 3 minut, wycinasz środek 60 do 90 s w miejscu, gdzie nie ma wyraźnego początku ani końca.
3. W Audacity/Reaper: zrób pętlę przez crossfade 2 s (ogon wygasa, początek narasta).
4. Jeśli masz Suno Studio lub dostęp do stemów: wyeksportuj stemy osobno (drone/bed, piano, napięcie). Jeśli nie: użyj promptów A, B i C poniżej, każdy w tej samej tonacji i tempie (dopisz do wszystkich `key of D minor, 58 BPM`), wtedy da się je nakładać.

### A. BED (podkład, gra zawsze)
**Style (wklej):**
```
dark ambient, lo-fi, tape hiss, vinyl crackle, deep drone, distant muted piano chord, key of D minor, 58 BPM, minimalist, desolate, lonely, rainy night, dirty, no drums, no vocals, no melody, slow evolving
```
**Exclude / negative:** `vocals, drums, beat, upbeat, happy, major key, orchestral swell, synth lead, EDM`

### B. PIANO (warstwa rozmowy)
**Style:**
```
sparse solo upright piano, felt piano, detuned, muted hammers, long sustain pedal, tape hiss, room noise, very slow, long silences between notes, sad, tired, unresolved, key of D minor, 58 BPM, intimate, dirty lo-fi recording, no drums, no vocals
```
Wariant z wiolonczelą (też B):
```
solo cello, low register, slow bowing, breathy bow noise, sparse long notes, tape hiss, dark, melancholy, unresolved, key of D minor, 58 BPM, lo-fi recording, no vocals, no drums
```
**Exclude:** `vocals, drums, bright, cheerful, strings section, orchestra, full melody, arpeggio runs`

### C. TENSION (napięcie, kłamstwo, decyzja)
**Style:**
```
dark ambient tension, low strings, slow pulse, dissonant minor second, sub bass rumble, tape hiss, noir, paranoid, distant metallic scrapes, key of D minor, 58 BPM, minimal, no melody, no vocals, no beat
```
**Exclude:** `vocals, melody, drums, trailer boom, orchestral hit, epic, cinematic swell`

### D. MENU GŁÓWNE (osobny utwór, 90 s)
```
lonely solo piano with distant rain, lo-fi, tape saturation, slow, wistful, minor key, slightly detuned, dark ambient pad underneath, late night, sad but quiet, no vocals, no drums, 60 BPM
```

### E. SOBOTA / ROZLICZENIE (bez rytmu)
```
ambient, solo piano, very soft, room reverb, rain far away, tape hiss, tired, resigned, quiet acceptance, slow single notes, minor key, no drums, no vocals, 52 BPM
```

### F. STINGERY (2 do 6 s; w Suno wpisz jako krótki utwór i potnij w edytorze)
| Nazwa | Prompt |
| --- | --- |
| Początek dnia | `single low piano note, distant door lock click, rain begins, soft drone swells in, 5 seconds, dark ambient, no melody` |
| Koniec dnia | `a long low drone fading out, one muted piano note, lamp hum, tape hiss, 6 seconds, lonely` |
| Sekret w rzeczy | `sudden silence then a single dissonant piano cluster with long reverb tail, tape hiss, 4 seconds, uneasy, noir` |
| Kłamstwo wykryte | `low cello scrape rising a semitone, quiet sub thud, sharp breath of air, 3 seconds, tense, no melody` |
| Decyzja podjęta | `one heavy low piano note struck and left to decay, wooden thud, long dark reverb, 5 seconds, grave, no melody` |
| Wielkie wydarzenie | `all sound drops out, then a deep sub-bass boom with a slow metallic ring, distant thunder underneath, 6 seconds, ominous` |
| Koniec gry / zwolnienie | `low cello note slides down and dies away, rain remains, one last muted piano chord, 6 seconds, desolate` |

---

## CZĘŚĆ 2: SFX (ElevenLabs Sound Effects, duration w nawiasie; "loop" tam, gdzie zaznaczono)

Ustawienie ogólne: Prompt influence wysoki (0.7 do 0.9), długość jak w nawiasie. Dopisuj na końcu `no music, no voices, dry close recording` tam, gdzie chcesz czysty efekt bez pogłosu. Pogłos dodaje gra.

### Ambient (pętle)
| ID | Prompt | Długość |
| --- | --- | --- |
| `amb_rain_glass` | `steady rain hitting a window glass up close, small drops, dense, no thunder, seamless loop` | 20 s, loop |
| `amb_rain_tin` | `heavy rain on a tin roof and metal windowsill, granular, with occasional single metallic plinks, seamless loop` | 20 s, loop |
| `amb_rain_heavy_far` | `heavy rain heard through a closed window from inside a small room, muffled, low rumble of water, seamless loop` | 25 s, loop |
| `amb_gutter_drip` | `water dripping from a gutter into a puddle at night, irregular drips, rain softly in the background, seamless loop` | 20 s, loop |
| `amb_traffic_distant` | `distant city traffic at night in the rain, muffled low rumble, occasional car passing on wet road far away, seamless loop` | 25 s, loop |
| `amb_car_pass_wet` | `a single car passing on a wet road at night, tires hissing on wet asphalt, left to right` | 6 s |
| `amb_sodium_hum` | `old sodium street lamp electrical hum, 100 Hz buzz with faint crackle, close, seamless loop` | 15 s, loop |
| `amb_vent` | `old building ventilation shaft, low airy drone with faint whistle, dusty, seamless loop` | 20 s, loop |
| `amb_clock_tick` | `slow wall clock ticking once per second in a quiet empty room, wooden case, dry` | 20 s, loop |
| `amb_thunder_far` | `very distant rolling thunder, low rumble only, no crack, long decay, in rain` | 10 s |
| `amb_wind_gap` | `cold wind whistling through a gap in a window frame, thin, intermittent` | 15 s, loop |
| `amb_building_creak` | `old building settling at night, wood creak, pipe knock, quiet` | 8 s |
| `amb_footsteps_corridor_far` | `a single person's footsteps in a distant echoing corridor, slow, wet shoes` | 8 s |
| `amb_tram_far` | `distant tram braking on wet rails, long metal squeal, fades away, rain` | 8 s |

### Interakcja
| ID | Prompt | Długość |
| --- | --- | --- |
| `sfx_bell_window` | `small brass service bell with spring, single ring, slightly out of tune, close` | 2 s |
| `sfx_knock_polite` | `three timid knocks with knuckles on glass and wooden frame, close` | 2 s |
| `sfx_knock_impatient` | `four sharp impatient knocks on window glass and wood, close` | 2 s |
| `sfx_knock_insistent` | `heavy insistent pounding on a glass window with the flat of a hand, close` | 3 s |
| `sfx_window_up` | `old wooden sash window sliding up in its frame, dry wood friction, soft thud at the end` | 2 s |
| `sfx_window_down` | `old wooden sash window sliding down and closing with a hollow knock` | 2 s |
| `sfx_drawer_big` | `heavy wooden drawer sliding out on a metal runner, scraping, stopped with a thud` | 3 s |
| `sfx_drawer_small` | `small wooden drawer opening, light wood scrape, little rattle inside` | 2 s |
| `sfx_lock_small` | `small padlock key turning and opening, metallic click` | 2 s |
| `sfx_lock_large` | `heavy door lock, key turns twice, bolt slides, heavy metal` | 3 s |
| `sfx_wallet_open` | `leather wallet opening, coins shifting inside, a card sliding out, close` | 2 s |
| `sfx_bag_zip` | `zipper opening on a canvas bag, items rustling inside, close` | 3 s |
| `sfx_slide_heavy` | `heavy object dragged across a wooden counter, scrape, thud at the end` | 2 s |
| `sfx_slide_light` | `light object slid across a wooden counter, short soft scrape` | 1 s |
| `sfx_pile_dig` | `rummaging through a pile of old objects, clacks, rustles, cloth, plastic, metal, a few things sliding off` | 5 s |
| `sfx_pile_collapse` | `small avalanche of lost-and-found items, bags and shoes tumbling off a pile, thuds and clatter` | 3 s |
| `sfx_trapdoor` | `heavy metal lever pulled, mechanical clunk, a wooden trapdoor falls open, distant thud below` | 4 s |
| `sfx_handover` | `an object set down gently on a wooden counter, small soft thud, glass partition vibrates` | 1 s |
| `sfx_refuse` | `sliding shutter closes hard on a counter window, wooden slam, heavy and final` | 2 s |
| `sfx_steps_heels` | `slow footsteps of a woman in heels on wet stone floor, approaching and stopping` | 4 s |
| `sfx_steps_sneakers` | `quick rubber sneakers squeaking on wet floor, approaching and stopping` | 4 s |
| `sfx_steps_boots` | `heavy boots walking on wet tiled floor, slow, approaching and stopping` | 4 s |
| `sfx_door_lock_day_end` | `a key locking a heavy old office door from inside, bolt, slow, final` | 3 s |
| `sfx_delivery_tram` | `crates dropped from a hand cart onto a wooden floor, a tram brakes outside, boxes shifting` | 6 s |
| `sfx_newspaper` | `newspaper unfolded and flattened on a table, paper rustle` | 3 s |
| `sfx_phone_old_ring` | `old rotary desk telephone ringing, two rings, in an empty room` | 4 s |
| `sfx_lamp_flicker` | `fluorescent or sodium lamp flickering and humming, buzzing, short crackles` | 3 s |
| `sfx_power_out` | `electrical hum winding down slowly to silence, a click, then a pop and hum returning` | 6 s |

### Głos: mamrotanie (jeśli generator głosu pozwala; inaczej nagraj sam)
Prompt do generatora głosu/SFX:
```
quiet mumbling voice speaking an unintelligible language, short syllables, low and tired, muffled as if heard through a glass partition, no clear words
```
Warianty: starszy mężczyzna (niski, wolny), młoda kobieta (jasna, szybka), dziecko (wysoki, cichy), zdenerwowany (urywany), kłamca (z potknięciami). Po 8 krótkich sylab (0,3 do 0,7 s) na postać, do składania przez grę.

---

## CZĘŚĆ 3: do Suno/Udio, jeśli nie podoba się rezultat
- Za ładne i filmowe: dopisz `lo-fi, cassette recording, imperfect, amateur, bedroom, no mastering`.
- Za dużo melodii: dopisz `no melody, no motif, random sparse notes`.
- Za jasne: dopisz `low register, muffled, dark, lowpass filtered`.
- Ucieka w rytm: wpisz w Exclude `drums, percussion, beat, groove, rhythm`.
- Chcesz brudu: `tape saturation, wow and flutter, dust, vinyl noise, distortion on peaks`.
