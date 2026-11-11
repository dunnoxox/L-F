# Steam: wymagania i lista kontrolna (LOST & FRAUD / Okienko, 9,99 USD)

Źródło: skill `steam-publish` (opis procesu Steamworks) plus wiedza ogólna. **Rozmiary grafik i progi czasowe sprawdź w partner.steamgames.com/doc przed produkcją grafik: nie pobierałem dokumentacji w tej sesji.** Nie dotyczy to Tommy'ego: konta, płatności i podpisy robi on sam.

## Kroki, które musi zrobić Tommy (konta i pieniądze)
1. Konto partnera Steamworks: dane prawne, bank, podatki (weryfikacja podatkowa potrafi trwać do 30 dni).
2. Opłata Steam Direct: 100 USD za aplikację (bezzwrotna, odzyskiwana po 1000 USD przychodu brutto); dla pierwszych tytułów obowiązuje 21 dni od zapłaty do premiery.
3. Konto build (nie administrator) z uprawnieniami Edit App Metadata i Publish App Changes; do ceny i premiery dodatkowo Manage pricing and discounts. Uwierzytelnianie mobilne potrzebne do ustawienia builda na `default`.
4. Zdobycie **App ID**: wpisać go potem w `steam_appid.txt` (tylko do testów lokalnych) i w skryptach SteamPipe.

## Strona sklepu (zakładka "obecność")
- **Cena:** 9,99 USD jako cena bazowa; Steam proponuje ceny regionalne (przejrzeć, zwłaszcza PLN/EUR). Prowizja Steam 30% do 10 mln USD przychodu.
- Wersja językowa: polski (interfejs i pełne napisy); angielski dopiero po tłumaczeniu (`guests_en.json`). Zadeklarować w sklepie tylko języki, które faktycznie są w grze.
- Opis krótki i długi, tagi (np. Narrative, Detective, Choices Matter, 2D, Atmospheric, Dark Humor), kategorie (single-player, Steam Achievements, Steam Cloud, pełne wsparcie kontrolera jeśli prawdziwe).
- **Grafiki sklepowe (rozmiary zweryfikować w dokumentacji):** header ~460×215, small capsule ~231×87, main capsule ~616×353, vertical capsule ~374×448, library capsule 600×900, library hero 3840×1240, logo PNG z alfą, tło strony, minimum 5 zrzutów ekranu 1920×1080, trailer zalecany. Bez liter w samych grafikach wnętrza gry: logo i napisy sklepowe zgodnie ze stylem Linorytu sodowego.
- **Content Survey:** treści (ankieta generuje oceny wiekowe), treści dla dorosłych, oraz **generative AI**: pre-generated ujawnić dla grafik z ChatGPT/Gemini, dźwięków SFX z ElevenLabs i muzyki z Suno/Udio, jeśli trafiają do wydanej gry. Nie ma treści generowanych w trakcie gry. Część odpowiedzi nie edytuje się po akceptacji bez Supportu, więc wypełnić po finalnych assetach.
- Strona sklepu do przeglądu: min. 7 dni roboczych przed planowaną datą; po akceptacji kliknąć **Post as Coming Soon**; Coming Soon musi trwać co najmniej 2 tygodnie przed premierą.

## Osiągnięcia (Steamworks > Stats & Achievements)
Kod w grze: `Platform/IPlatformServices.cs` (`Achievements`). API Name musi się zgadzać. Każde potrzebuje nazwy, opisu i ikony 256×256 (wersja odblokowana i szara), tekst po polsku.

| API Name | Nazwa robocza | Warunek | Ukryte |
|---|---|---|---|
| ACH_FIRST_WEEK | Pierwsza sobota | ukończony tydzień 1 | nie |
| ACH_STORM | Grzmot w skrzyni | przetrwana burza (dni 3/8) | nie |
| ACH_SECRET | Coś ze środka | pierwszy sekret z wnętrza rzeczy | nie |
| ACH_LIE | Szyba nie kłamie | wychwycone kłamstwo (pytanie "klamie" + odmowa) | tak |
| ACH_UPGRADES | Remont | wszystkie ulepszenia biura | nie |
| ACH_ENDING | Ostatnia zmiana | zakończenie dnia 25 (po E3) | tak |

W kodzie obecnie podpięte jest tylko `ACH_FIRST_WEEK` (WeekEnd); pozostałe wymagają zdarzeń w `GameSession` (do zrobienia przy U5).

## Build (SteamPipe)
- Windows 64-bit pierwszy; Mac/Linux tylko jeśli faktycznie przetestowane (strona sklepu nie może obiecywać OS-ów, na których build nie działa).
- Depoty: jeden "Windows Content"; dodać do pakietu na stronie Associated Packages & DLC (inaczej nic się nie zainstaluje). Opublikować konfigurację aplikacji.
- Skrypt `app_build_<AppID>.vdf` z `Preview "1"` do próby, potem upload; `SetLive` tylko na gałąź beta (`default` ustawia się ręcznie).
- Przed uploadem: `python scripts/check_steam_build.py app_build.vdf` ze skilla.
- Steamworks.NET: instalacja przez UPM z GitHuba (zweryfikuj aktualny adres/wersję), define `STEAMWORKS_NET`, `SteamManager` wywołuje `RunCallbacks`. Steam Cloud: Auto-Cloud na `okienko_save.json` (ścieżka `persistentDataPath`).
- Sekrety: hasła konta build i `config.vdf` nigdy do repozytorium.

## Przegląd i premiera
1. Strona sklepu: Mark as ready for review (3–5 dni roboczych).
2. Build: checklista Game Build, potem review (3–5 dni); build musi działać na każdym OS z strony i mieć każdą deklarowaną funkcję (osiągnięcia, Cloud).
3. Post as Coming Soon, odczekać 2 tygodnie.
4. **Release App** ręcznie (nie publikuje się sam).
5. Steam Deck: osobny przegląd po przeglądzie builda; wymagania: pełna obsługa pada i glify, domyślny czytelny rozmiar tekstu, brak pola tekstowego wymagającego klawiatury (gra go nie ma).
6. Demo: osobna aplikacja "Demo" w Steamworks (WebGL zostaje na itch.io/stronie, na Steam idzie build natywny); tydzień 1 (dni 1–5) jako wycinek.

## Czego brakuje do startu
Konto/App ID, finalne grafiki sklepowe, trailer, ikony osiągnięć, pełna treść (dni 11–25), pomiary audio, test na Steam Deck lub w trybie Big Picture, polityka prywatności nie jest wymagana (gra nie zbiera danych), ocena wiekowa z ankiety.
