# MUZYKA Okienka: jeden pakiet do Suno/Udio (z prompty audio, część 1)

**Cel:** 6 utworów + 7 stingerów. Wszystko instrumentalne, w D moll, 58 BPM (stemy mają się nakładać). Generuj po 3–4 podejścia, wybieraj najmniej wygładzone. Pole Lyrics puste lub `[Instrumental]`. Exclude/negative wklejaj w pole wykluczeń.

Zapis plików do `/mnt/project-files/audio/muzyka/` pod nazwami z tabeli (mp3, każdy 90–150 s, utwory do pętli; ja tnę i robię crossfade 2 s):

| Plik | Do czego | Style (wklej) | Exclude |
|---|---|---|---|
| `bed.mp3` | podkład, gra zawsze | `dark ambient, lo-fi, tape hiss, vinyl crackle, deep drone, distant muted piano chord, key of D minor, 58 BPM, minimalist, desolate, lonely, rainy night, dirty, no drums, no vocals, no melody, slow evolving` | `vocals, drums, beat, upbeat, happy, major key, orchestral swell, synth lead, EDM` |
| `piano.mp3` | warstwa rozmowy | `sparse solo upright piano, felt piano, detuned, muted hammers, long sustain pedal, tape hiss, room noise, very slow, long silences between notes, sad, tired, unresolved, key of D minor, 58 BPM, intimate, dirty lo-fi recording, no drums, no vocals` | `vocals, drums, bright, cheerful, strings section, orchestra, full melody, arpeggio runs` |
| `cello.mp3` | wariant warstwy rozmowy | `solo cello, low register, slow bowing, breathy bow noise, sparse long notes, tape hiss, dark, melancholy, unresolved, key of D minor, 58 BPM, lo-fi recording, no vocals, no drums` | `vocals, drums, bright, cheerful, strings section, orchestra, full melody` |
| `tension.mp3` | kłamstwo, decyzja | `dark ambient tension, low strings, slow pulse, dissonant minor second, sub bass rumble, tape hiss, noir, paranoid, distant metallic scrapes, key of D minor, 58 BPM, minimal, no melody, no vocals, no beat` | `vocals, melody, drums, trailer boom, orchestral hit, epic, cinematic swell` |
| `menu.mp3` | ekran startowy | `lonely solo piano with distant rain, lo-fi, tape saturation, slow, wistful, minor key, slightly detuned, dark ambient pad underneath, late night, sad but quiet, no vocals, no drums, 60 BPM` | `vocals, drums, upbeat` |
| `sobota.mp3` | rozliczenie soboty | `ambient, solo piano, very soft, room reverb, rain far away, tape hiss, tired, resigned, quiet acceptance, slow single notes, minor key, no drums, no vocals, 52 BPM` | `vocals, drums, upbeat` |

## Stingery (krótkie, 2–6 s; w Suno krótki utwór i potnę)
| Plik | Prompt |
|---|---|
| `st_dzien_start.mp3` | `single low piano note, distant door lock click, rain begins, soft drone swells in, 5 seconds, dark ambient, no melody` |
| `st_dzien_koniec.mp3` | `a long low drone fading out, one muted piano note, lamp hum, tape hiss, 6 seconds, lonely` |
| `st_sekret.mp3` | `sudden silence then a single dissonant piano cluster with long reverb tail, tape hiss, 4 seconds, uneasy, noir` |
| `st_klamstwo.mp3` | `low cello scrape rising a semitone, quiet sub thud, sharp breath of air, 3 seconds, tense, no melody` |
| `st_decyzja.mp3` | `one heavy low piano note struck and left to decay, wooden thud, long dark reverb, 5 seconds, grave, no melody` |
| `st_wydarzenie.mp3` | `all sound drops out, then a deep sub-bass boom with a slow metallic ring, distant thunder underneath, 6 seconds, ominous` |
| `st_koniec.mp3` | `low cello note slides down and dies away, rain remains, one last muted piano chord, 6 seconds, desolate` |

Gra już ma w kodzie ładowanie tych plików (jeśli plik istnieje, gra go zagra: bed ciągle, piano w rozmowie, tension przy decyzji, menu na starcie, sobota w rozliczeniu, stingery przy zdarzeniach). Wrzuć pliki do wątku, a wepnę je od ręki.
