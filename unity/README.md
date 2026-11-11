# Okienko: szkielet portu do Unity

- `Docs/PLAN_PORTU.md`: architektura, mapowanie warstw, lista kodu, kolejność prac, ryzyka.
- `Docs/STEAM_WYMAGANIA.md`: lista kontrolna Steam (strona sklepu, osiągnięcia, build, cena 9,99 USD).
- `Assets/`: kod C# (Core, Runtime, Editor, Tests), `StreamingAssets/lang/pl.json`.
- `Data/`: JSON dla importera (guests, items, calendar, rng_vectors), wygenerowane z dema E1.
- `Tools/export_data.js`: regeneracja JSON z dema (`node Tools/export_data.js <okienko_e1> .`).
- `Tools/CoreHarness/Harness.cs`: sprawdzian rdzenia poza Unity. Uruchomienie (Linux/Mono): `mcs -r:System.Web.Extensions.dll -out:h.exe Tools/CoreHarness/Harness.cs Assets/Scripts/Okienko/Core/*.cs && mono h.exe` (katalog Data zmienną OKIENKO_DATA, domyślnie ścieżka z Biblioteki).

## Instalacja w projekcie Unity
1. Skopiuj `Assets/*` do projektu. `Data/*.json` do `Assets/Okienko/Data/`; grafiki dema do `Assets/Okienko/Art/{ppl,items,in,bg}`; mp3 do `Assets/Okienko/Audio/`.
2. Pakiety: TextMeshPro, Input System. Popraw nazwy w `Okienko.Runtime.asmdef`, jeśli Unity zgłosi brak referencji.
3. Menu `Okienko > Importuj dane`, potem `Okienko > Importuj audio`. Raport brakujących grafik trafia do Console.
4. Test Runner > EditMode > uruchom wszystko.

Status: Core zweryfikowany (kompilacja Mono + pełny przebieg dni 1–10); reszta nieprzetestowana w Unity.
