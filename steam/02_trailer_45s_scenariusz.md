# Trailer 45 s: scenariusz i plan realizacji

**Cel:** w 45 sekund gracz ma zrozumieć (1) że siedzi za okienkiem, (2) że zagląda do cudzych rzeczy, (3) że decyzje mają skutki, (4) że to wygląda inaczej niż wszystko. Pierwsze 10 s musi pokazać rozgrywkę, nie logo.

**Format:** 1920×1080, 60 fps, MP4 H.264. Bez voice-over (gra nie ma głosów). Napisy-karty po angielsku, czcionka z gry. Muzyka: jeden loop z Suno/Udio, piano + podkład, wchodzi na ujęciu 2. Dźwięk: prawdziwy miks gry (deszcz, lampa, tramwaj, szelest papieru).
**Wersja 15 s** (do reklam i social): ujęcia 2, 4, 5, 8 + karta końcowa.

## Rozpiska ujęć

| Czas | Ujęcie (z gry) | Karta tekstowa | Dźwięk |
|---|---|---|---|
| 0:00–0:03 | Czerń. Błysk lampy sodowej, na szybie deszcz, za szybą rozmyta sylwetka. Pukanie. | — | Deszcz, buczenie lampy, trzy stuknięcia w szybę |
| 0:03–0:07 | Tramwaj hamuje za oknem, skrzynka wpada na ladę, drewno uderza o blat. Dłoń odsuwa wieczko. | **"Night shift. Lost property."** | Dzwonek tramwaju, stuk skrzynki. Wchodzi pierwszy dźwięk muzyki |
| 0:07–0:14 | Zbliżenie: portfel. Gest otwarcia. Pokazuje się wnętrze (grafika W: dwa dowody, zdjęcie dziecka). Dwa dowody, dwa nazwiska, najazd. | **"You see what they hide."** | Skórzany skrzyp, szelest kart, muzyka narasta |
| 0:14–0:22 | Szyba. Wdowiec z rękawiczką. Trzy pytania pojawiają się jak karteczki. Gracz wybiera to z odblokowanym sekretem. Odpowiedź w dymku: *"Since February, I've been picking things up for her."* | **"Ask what you shouldn't know."** | Mamrotanie postaci (bez słów), pióro po papierze |
| 0:22–0:29 | Odwrót do magazynu. Przekopywanie sterty: parasole, walizki, pluszowy królik. Ręka wyciąga rzecz, światło lampy przesuwa się po stercie. Szybkie cięcia. | **"Dig through the pile."** | Brzęk kluczy, drewno, deszcz na dachu |
| 0:29–0:36 | Gest: przeciągnięcie rzeczy przez szybę (wydaj), potem strefa "odmów". Twarz wdowca: ulga albo zawód (obie wersje, dwa ciecia po 1,5 s). | **"Decide with your hands."** | Szum szyby, rzecz na blacie. Cisza na 0,3 s przed kolejnym ujęciem |
| 0:36–0:41 | Następny dzień, na ladzie list, ręka go otwiera. Wycinek tekstu: *"She showed me both gloves. She left one with me till Sunday."* Cięcie: inspektor z notesem za szybą. | **"Everything comes back."** | Papier, krok inspektora, muzyka na szczycie |
| 0:41–0:45 | Czerń. Pomarańczowy rozbłysk lampy, logo LOST & FRAUD, pod spodem hasło. Ikona Steam "Wishlist now". | **"Return the wallet. Keep the secret. Or don't."** | Uderzenie lampy, wygaszenie muzyki, pojedyncza kropla |

## Zasady montażu

- Zero ujęć z menu i ekranów ustawień. Sam świat i ręce.
- Tempo: cięcia co 2–4 s, tylko ujęcie 5 (sterta) szybsze. Rytm do muzyki, nie do tekstu.
- Karty tekstowe: biała kreska na czerni, jedno zdanie, max 2 s na ekranie. Kolor tylko czerń/kremowa biel/pomarańcz lampy (reguły stylu: `prompty/styl_linoryt_sodowy.md`).
- Czerwień: zarezerwowana dla decyzji, więc nie używać w kartach.
- Nie pokazywać spoilerów wątków (finał Mai, kalka Sama). Zostawić same zapowiedzi.

## Jak to nagrać (samograj)

1. Zbuduj build z trybem testowym: wybór dnia startowego, ustalony seed `?seed=N` dla powtarzalnego układu sterty.
2. Skrypt Playwright (w `qa/bot.js` jest szkielet) odtwarza dokładnie scenariusz ujęć: wejście dnia 1, otwarcie skrzynki, wybór pytania z sekretem, przekopanie, gest wydania. Nagranie `recordVideo` w 1920×1080 (deviceScaleFactor 1 przy nagraniu, bo to materiał wideo; screenshoty dla sklepu osobno w 2×).
3. Ruchy myszy w botcie muszą być "ludzkie": krzywe, krótkie przyspieszenia, bez teleportów. Dodać w skrypcie interpolację ruchu.
4. Na końcu montaż w DaVinci Resolve / ffmpeg: cięcia wg tabeli, muzyka, karty. Eksport 1080p60, bitrate ~35 Mbps, drugi eksport 15 s dla social.
5. Test: pokaż komuś, kto nie zna gry, i zapytaj tylko jedno: "o czym jest ta gra?". Jeśli nie powie "o oddawaniu cudzych rzeczy i sekretach", przerób ujęcia 2–3.

## Czego jeszcze brakuje do zrobienia traila

- Pełna twarz wdowca i wnętrze portfela są w grze, **brakuje twarzy**: praczki, kucharza, mechaniczki, Ady, Very (zob. `docs/ASSETS_REQUESTS.md`). Trailer używa tylko postaci, które mają grafikę.
- Plik muzyki (`assets/music/theme.mp3`) od Tommy'ego z Suno/Udio. Bez niego trailer ma tylko ambient (da się, ale słabszy).
- Ujęcie z listem z następnego dnia wymaga działającego echa, jest w E1.
