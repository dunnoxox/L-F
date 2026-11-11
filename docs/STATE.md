# STATE (2026-11-11, E0)
- Etap: E0 Rozpoznanie. Środowisko: brak repo Unity i edytora; praca w Bibliotece /mnt/project-files/. Przeglądarkowe demo Okienko v1 istnieje.
- Zrobione (zweryfikowane): inwentarz assetów (wymiary z plików), mapa, pliki stanu, lista rozszerzeń.
- Niezweryfikowane: treść wszystkich grafik (nie oglądane po kolei), działanie demo v1 w tej sesji.
- Zablokowane: nic krytycznego. Pytania 1–4 rozstrzygnięte (1A 2A 3A 4A).
- Następne 3 kroki: (1) odpowiedź na pytania, (2) plan E1 jako wycinek Okienka (noc 1, 5–6 wizyt), (3) walidator grafu dialogów na JSON z koncept/okienko_rozmowy_tydzien1.md.
- Propozycje (nie robię): ujednolicić imiona i dzień 5; skrytka = paszporty.
- Skille lf-*: dostępne w sesji.
## Plan etapów (dopasowany do Okienka, rekomendacja)
E1: noc 1 grywalna (dni 1–2 z demo), uporządkowana skrzynia/półki, dźwięk drzwi/deszcz/lampa, gesty z czuciem. E2: tydzień 1 + sobotnie rozliczenie. E3: 25 dni, 3 wątki. E4 polish. E5 Steam. Bramki wg master promptu sekcja 5.1.
## Aktualizacja (wieczór 11.11)
- Zrobione: walidator docs/tools/validate_dialogs.py (zweryfikowany: v2 OK, oryginał flaguje stare imiona); koncept/okienko_rozmowy_tydzien1_v2.md (imiona, paszporty w d4).
- Do zrobienia: dzień 5 zdradza kalkę z dnia 15 (przepisać), dialogi dni 6–10, szkielet E1 z placeholderami.
## E1 (wieczór 11.11): wycinek grywalny
- Artifact: https://claude.ai/artifact/UNPJkwSsrMMyiZnMbEK1qN ; źródła: /mnt/project-files/okienko_e1_v1.zip (index.html, game.js, audio.js, data.js, build_data.py, qa/bot.js).
- Zawartość: tydzień 1 (dni 1–5 + sobota), 8 gości z rozmów v2, dostawa w 3 skrzyniach wg linii (4, 6, 11), zaglądanie do jednej rzeczy, rozmowa 3 tury z pytaniami odblokowanymi sekretem, szukanie (wybór skrzyni, potem przekopywanie, seed ?seed=N), decyzje gestem (przeciągnij na szybę = wydaj, strefy = odmów/zatrzymaj/zadzwoń), echo listów w kolejnych dniach, zapis (localStorage), ustawienia głośności w dB, opcja ograniczenia błysków.
- Dźwięk: mikser Master<-Ambience(Outside z filtrem okienka, Inside)/SFX/Voice/UI, ducking, lampa (jedno zdarzenie = obraz + dźwięk, osobny RNG), mamrotanie z parametrem intymności.
- ZWERYFIKOWANE: bot Playwright przeszedł 5 dni dwiema strategiami (wydaj-wszystkim, odmawiaj-wszystkim), 0 błędów w konsoli; walidator rozmów OK; zrzuty ekranu obejrzane (dostawa, rozmowa, szukanie, decyzja).
- NIEZWERYFIKOWANE: brzmienie (nie słyszę), loudness (-24 LUFS nie zmierzony), telefon/dotyk, 30 min bez błędów, determinizm poza seedem układu skrzyń.
- Braki (placeholdery): twarze praczki, kucharza, mechaniczki; rzeczy: koperta, budzik; wnętrza rzeczy (sekret pokazuje tekst, bez grafiki wnętrza). Zob. ASSETS_REQUESTS.md.
- Kolejny krok E2: dni 6–10, burza ze skutkami, sobotnie ulepszenia biura, pozostałe postacie.
- 11.11 22:00: paczka Tommy'ego (Z1–Z7, W1–W23) zintegrowana: 56 nowych rzeczy w pliku sterty i dostawy, wnętrza W1/W2/W13/W17/W20 w ekranie zaglądania. Artifact zaktualizowany (wersja 2). Bot QA przechodzi tydzień bez błędów. Braki: twarze praczki, kucharza, mechaniczki; wnętrza dla chłopaka (plecak), telefonu, budzika.
- 11.11 22:20 E2 (lokalnie, do publikacji): dni 6–10 (koncept/okienko_rozmowy_tydzien2.md, walidator OK), burze w dniach 3 i 8, sobotnie ulepszenia biura (lampa/drzwi/regał), 42 klipy SFX w mikserze, moduł muzyki (czeka na pliki). Bot QA 10 dni, 2 strategie, 0 błędów (wydaj-wszystkim; odmów po poprawkach w toku).
- Do zrobienia: dni 11–25 (dialogi wg kalendarza, wnętrza W9–W23 gotowe), reszta postaci, loudness (pomiar OfflineAudioContext), test na telefonie.

## 2026-11-11 21:21 — publikacja E1 v3
- Opublikowano: dni 1–10 (tydzień 2), burze (d3, d8), ulepszenia w soboty, 42 klipy SFX, moduł muzyki (czeka na pliki; manifest assets/music/manifest.json — wpisać nazwy plików, np. ["bed","piano"]).
- Bot QA: 10 dni (strategie wydaj/odmów), 0 błędów konsoli.
- Niezweryfikowane: brzmienie klipów, głośność (cel −24 LUFS), telefon/dotyk. Placeholdery: twarze praczki, kucharza, mechaniczki, Ady, Very.
- ZIP: /mnt/project-files/okienko_e1_v1.zip (odświeżony).

## 2026-11-11 22:40 — silnik 25 dni (schemat dialogów v3)
- build_data.py czyta wszystkie koncept/okienko_rozmowy_v3*.md (goście + extra + wieczor). Nowe dni dopisywane przez wątek dialogów pojawią się po `python3 -I build_data.py` + publikacji (META dla nowych gości: auto z rzecz; twarze = placeholder).
- Silnik: 2 wizyty/dzień, wejscie_jesli, wymaga (sekret | id:akcja | ustawia | a|b), kto/ludzie (dwie osoby), kasa, własne akcje z etykietą, rzeczy extra, karty wieczorne, liczniki Urząd/Ludzie (heurystyka po nazwie akcji), bez_wpisu, burze 3/8/13/18/23, soboty co 5 dni, gest księgi w d25, zakończenia 3 wątków + epilog + ostatnia kwestia Eliasa wg fabula_25_dni §8 (liczone z nazw akcji z dni 4,5,8,9,11–25; nazwy akcji w nowych dialogach muszą trzymać się fabuły §7).
- Bot QA dni 1–10 (wydaj/odmów): 0 błędów. Endings() sprawdzone na sztucznym logu.
- Niezweryfikowane: dni 11–25 (brak dialogów), nazwy akcji d5/d9 z v3 różnią się od fabuły (d9 ma tylko wydaj/zatrzymaj).

## 2026-11-11 22:20 — muzyka + scalenie silnika
- Wpięto wszystkie 10 mp3 (bed/piano/tension/menu/saturday, warianty _a i _b), warianty rotują przy wejściu w scenę dnia/menu/soboty. Wyrównanie głośności TRIM (bed −14 LUFS → ok. −26). Manifest assets/music/manifest.json.
- Scalono silnik wątku dialogów (.zone.long); mój silnik był nadzbiorem (flagi, liczniki, zakończenia). Źródła: /mnt/project-files/okienko_e1_v3.zip.
- Bot dni 1–10 (wydaj, odmów): 0 błędów; 11 plików muzyki 200 OK. Niezweryfikowane: odsłuch miksu muzyka/ambient/SFX (zbyt głośny bed?), ekran startu odtwarza menu dopiero po pierwszym kliknięciu (polityka autoplay).
