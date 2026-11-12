# 24 nowe dźwięki z ElevenLabs (12.11)

Źródło: flow ElevenLabs `fCQ3yO3Mfo6FgqO2qOpf` (11.11, 2 warianty na dźwięk) oraz `kYHwHlpKSGnvsPjq95Oe` (12.11, z niego tylko `trace_pin`, którego wcześniej nie było). Nic nie generowano drugi raz.
Wszystkie warianty surowe: `audio_src/elevenlabs_2026-11-11/` (nazwa_1 / nazwa_2). Gotowe pliki: `game/assets/snd/` i `assets_audio/`.

Obróbka: przycięcie ciszy, fade 5 ms / 80 ms, mono 44,1 kHz 96 kb/s (jak 42 stare SFX), głośność -24 LUFS albo mniej, gdy szczyt przekroczyłby -2,5 dB. Wariant wybrany po pomiarze (głośność, przerwy, długość), nie na słuch: **do odsłuchu przez Tommy'ego**. Podmiana = wrzucić drugi wariant pod tą samą nazwą.

| Plik | Wariant | Długość | Gdzie gra |
|---|---|---|---|
| sfx_doorbell_shop | doorbell_a1 | 1,75 s | wejście gościa (dzwonek nad drzwiami, „dzyń-dzyń”) |
| sfx_door_open_close | door_open_close_1 | 3,3 s | razem z dzwonkiem, ciszej (drzwi do holu) |
| sfx_coins_paper_money | coins_paper_money_1 | 3,0 s | każda wypłata na plus (zamiast syntezowanego brzęku) |
| sfx_trace_pin | trace_pin_2 (flow 12.11) | 0,6 s | trop S.H. przypięty do notesu |
| sfx_pen_scratch | pen_scratch_2 | 2,3 s | podpis w prologu, decyzje z wpisem (wpisz/zapisz/pokwituj/rejestr), imię w księdze d25 |
| sfx_paper_envelope | paper_envelope_2 | 2,4 s | decyzje „koperta”/„list…”, list do szuflady w d25 |
| sfx_cloth_inside_bag | cloth_inside_bag_1 | 2,9 s | po wpuszczeniu gościa (50%): grzebie w torbie |
| sfx_umbrella_shake | umbrella_shake_2 | 2,2 s | gość pod drzwiami: zawsze w burzę, inaczej 35% |
| sfx_glass_tap | glass_tap_2 | 1,3 s | pauza: „szyba” |
| sfx_cat_meow_window | cat_meow_window_2 | 2,5 s | kot za szybą (pojawienie się i klik) |
| sfx_kettle_click | kettle_click_1 | 2,3 s | pauza: „herbata” |
| sfx_radio_tune | radio_tune_1 | 4,0 s | pauza: „radio” |
| sfx_siren_pass | siren_pass_1 | 4,0 s | pauza: nowe zdarzenie `w_e7` |
| sfx_police_radio_far | police_radio_far_2 | 3,6 s | pauza: nowe zdarzenie `w_e8` |
| sfx_heartbeat_low | heartbeat_low_1 | 2,8 s | gość skłamał (razem ze stingiem) |
| sfx_typewriter_key | typewriter_key_1 | 2,9 s | karta dnia |
| sfx_mumble_old_man | old_man_2 | 1,6 s | Thomas, Elias, Pruitt |
| sfx_mumble_young_woman | young_woman_1 | 1,9 s | Rosa, Hana, Lena, Dana, Nora, Bree, Maya, Grace, Linh, Tess, Priya |
| sfx_mumble_heavy_man | heavy_man_2 | 2,0 s | Noah, Gus, Leo, Dario, Sam, Hugo, Ferro |
| sfx_mumble_child | child_2 | 1,8 s | Ada |
| sfx_mumble_old_woman | old_woman_1 | 2,0 s | Ines, Iris, Vera, Odile, Sylvia, Mina |
| sfx_mumble_teen | teen_2 | 2,0 s | Jonah, Kit, Billie, Kofi, Milo |
| sfx_mumble_clerk | stern_clerk_1 | 1,5 s | Victor, Stahl, Evan, Dorian |
| sfx_mumble_crying | crying_woman_2 | 1,9 s | kobieta z miną „emocja” |

Głosy: klip postaci gra przy pierwszej kwestii gościa (wejście), potem w 40% kwestii, najwyżej raz na 6 s; pozostałe kwestie mają dawny szum mamrotania. Mapa imion: `VOX` w `game/game.js`.
Brak pliku = stary dźwięk albo synteza (gra działa bez nich).
