# OKIENKO: paczka muzyki do wklejenia w Suno / Udio

Wersja 1, 2026-11-11. Źródła: okienko_projekt_dzwieku.md i okienko_prompty_audio.md. Wszystko wklejasz po angielsku. Nastrój: brudny, deszczowy, lekko depresyjny. Napięcie przez ujmowanie: muzyka się cofa, zostają lampa i zegar (to robi gra, muzyka ma tylko umieć zniknąć).

## 0. Ustawienia wspólne (każdy utwór)
- Suno: Custom mode, **Instrumental ON**, pole Lyrics puste (albo `[Instrumental]`). Model: najnowszy v-X. Weirdness ok. 60%, Style Influence ok. 75%.
- Udio: Manual mode, Instrumental ON, długość: najdłuższa możliwa (potem tniesz).
- Wspólna tonacja i tempo dla A, B, C: **D minor, 58 BPM**. Dzięki temu warstwy da się nakładać w grze.
- Generuj **3 do 4 podejść** na prompt. Bierz to **najmniej wygładzone** (z szumem, rozstrojone, z dziurami ciszy).
- Jeśli wychodzi za ładne i filmowe: dopisz `lo-fi, cassette recording, imperfect, bedroom, no mastering`. Za dużo melodii: `no melody, no motif, random sparse notes`. Za jasne: `low register, muffled, dark, lowpass filtered`. Ucieka w rytm: do Exclude `drums, percussion, beat, groove`.

## 1. Kolejność generowania
1. **mus_bed_01** (A) i **mus_piano_01** (B): wstaw do prototypu, oceń miks z grafiką.
2. **mus_tension_01** (C).
3. **mus_menu_01** (D) i **mus_saturday_01** (E).
4. Stingery (F), na końcu; można je też zrobić w ElevenLabs.

## 2. Utwory

### A. `mus_bed_01`: podkład (gra zawsze, nawet gdy nikogo nie ma)
- Długość: generuj 2 do 3 min, wytnij **90 s**.
- Style:
```
dark ambient, lo-fi, tape hiss, vinyl crackle, deep drone, distant muted piano chord, key of D minor, 58 BPM, minimalist, desolate, lonely, rainy night, dirty, no drums, no vocals, no melody, slow evolving
```
- Exclude: `vocals, drums, beat, upbeat, happy, major key, orchestral swell, synth lead, EDM`
- Tekst: `[Instrumental]`
- Pętla: środek bez startu i końca, crossfade 2 s (ogon wygasa, początek narasta).

### B. `mus_piano_01`: warstwa rozmowy (rzadka fraza, długie przerwy)
- Długość: wytnij **90 s**, tyle samo co A.
- Style (wersja fortepian):
```
sparse solo upright piano, felt piano, detuned, muted hammers, long sustain pedal, tape hiss, room noise, very slow, long silences between notes, sad, tired, unresolved, key of D minor, 58 BPM, intimate, dirty lo-fi recording, no drums, no vocals
```
- Wariant `mus_cello_01` (ta sama rola, wiolonczela):
```
solo cello, low register, slow bowing, breathy bow noise, sparse long notes, tape hiss, dark, melancholy, unresolved, key of D minor, 58 BPM, lo-fi recording, no vocals, no drums
```
- Exclude: `vocals, drums, bright, cheerful, strings section, orchestra, full melody, arpeggio runs`
- Tekst: `[Instrumental]`
- Pętla: jak A. Zostaw wolne miejsca ciszy, to one dają napięcie.

### C. `mus_tension_01`: napięcie (kłamstwo, groźba, decyzja bez odwrotu)
- Długość: wytnij **30 do 60 s**.
- Style:
```
dark ambient tension, low strings, slow pulse, dissonant minor second, sub bass rumble, tape hiss, noir, paranoid, distant metallic scrapes, key of D minor, 58 BPM, minimal, no melody, no vocals, no beat
```
- Exclude: `vocals, melody, drums, trailer boom, orchestral hit, epic, cinematic swell`
- Tekst: `[Instrumental]`
- Pętla: crossfade 2 s. Ma się dać wyciszyć do zera w 2 do 4 s.

### D. `mus_menu_01`: menu główne
- Długość: **90 s**, trochę jaśniejszy, nadal smutny.
```
lonely solo piano with distant rain, lo-fi, tape saturation, slow, wistful, minor key, slightly detuned, dark ambient pad underneath, late night, sad but quiet, no vocals, no drums, 60 BPM
```
- Exclude: `vocals, drums, beat, uplifting, major key`
- Pętla: crossfade 2 s.

### E. `mus_saturday_01`: sobota, rozliczenie (bez rytmu)
- Długość: **90 s**.
```
ambient, solo piano, very soft, room reverb, rain far away, tape hiss, tired, resigned, quiet acceptance, slow single notes, minor key, no drums, no vocals, 52 BPM
```
- Exclude: `vocals, drums, beat, bright, melody runs`
- Pętla: crossfade 2 s.

### F. Stingery (bez pętli, 2 do 6 s)
W Suno wpisz jako krótki utwór, potnij w edytorze, dodaj fade-out 0,3 s. Tekst: `[Instrumental]`.

| Plik | Prompt |
| --- | --- |
| `sting_day_start` | `single low piano note, distant door lock click, rain begins, soft drone swells in, 5 seconds, dark ambient, no melody` |
| `sting_day_end` | `a long low drone fading out, one muted piano note, lamp hum, tape hiss, 6 seconds, lonely` |
| `sting_secret` | `sudden silence then a single dissonant piano cluster with long reverb tail, tape hiss, 4 seconds, uneasy, noir` |
| `sting_lie` | `low cello scrape rising a semitone, quiet sub thud, sharp breath of air, 3 seconds, tense, no melody` |
| `sting_decision` | `one heavy low piano note struck and left to decay, wooden thud, long dark reverb, 5 seconds, grave, no melody` |
| `sting_big_event` | `all sound drops out, then a deep sub-bass boom with a slow metallic ring, distant thunder underneath, 6 seconds, ominous` |
| `sting_game_over` | `low cello note slides down and dies away, rain remains, one last muted piano chord, 6 seconds, desolate` |

## 3. Obróbka po pobraniu (Audacity / Reaper)
1. Wytnij fragment bez wyraźnego początku i końca.
2. Pętla: skopiuj fragment, nałóż początek na koniec z crossfade 2 s, sprawdź słuchawkami, czy nie ma „szwu".
3. Normalizacja: muzyka ok. **-28 LUFS**, stingery do -18 LUFS, peak maks. **-1 dBTP**.
4. Eksport: **OGG Vorbis** (Unity) lub WAV do dalszej pracy. Nazwy plików dokładnie jak ID powyżej (`mus_bed_01.ogg`).
5. Stemy: jeśli Suno Studio daje stemy, wyeksportuj drone / piano / napięcie osobno. Jeśli nie, A, B, C w jednej tonacji i tempie nakładają się same.

## 4. ElevenLabs Music (próba równoległa)
Flow: https://elevenlabs.io/app/flows/4yp1pmRUgjALvvaazjkM (model eleven_music_v2_5, instrumental, po 2 podejścia na utwór: A, B, D, E po 90 s, C 60 s). Prompty tam są przerobione na opis brzmienia, bo ten model woli opisy niż tagi. Brzmienie do porównania z Suno/Udio.
