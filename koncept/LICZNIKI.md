# LICZNIKI: zmiany dla silnika (do wpięcia przez wątek gry)

Źródło: `koncept/okienko_rozmowy_v3_dni11-25.md`. Teksty w dialogach opisują skutki słowami, silnik ma je liczyć.

## Liczone flagi w `wymaga` (walidator je zna)
- `notatki_3`: notatki S.H. ≥ 3. Używane: d25_ksiega/`list`, sekret d24_list_pelny (przy <3 pokazać d24_list_luki).
- `maya_testy_2`: zdane testy Mai ≥ 2 (d11 `przez_okienko`, d16 `maya_sama`, d21 `wiadomosc_zatwierdzona`). Używane: d21, pytanie z radą o bilecie.
- `kopie_2`: licznik kopie ≥ 2. Używane: d23, pytanie Iris o rejestr Urzędu.

## Zmiany liczników z akcji (nowe, wynikają ze strat w tekstach)
| Akcja | Urząd | kopie | bez_wpisu | Uwaga |
|---|---|---|---|---|
| d22_stahl:`wez_200_stahl` | +2 | +1 | 0 | liczyć też jak `stahl_wydaj` (Z10) plus kasa +200 |
| d22_stahl:`stahl_wydaj` | 0 | 0 | 0 | wymusza zakończenie Zaginiona C |
| d23_iris_nora_victor:`wez_500_iris` | +2 | 0 | 0 | skarga Nory do Victora; liczy się do „wez_*” |
| d18_hugo:`wez_100_hugo` | +2 | 0 | 0 | fałszywe zaświadczenie za pieniądze |
| d19_kofi:`wez_80_kofi` | +1 | 0 | 0 | |
| d17_sylvia:`wez_120_wycieczka` | 0 | 0 | 0 | liczy się do „wez_*” (Nowy Sam) |
| d24_leo:`przechowaj_bez_kwitu` | 0 | 0 | +1 | |
| d25_sam_elias:`zniszcz_kopie` | 0 | 0 | +1 | |
| d25_sam_elias:`dolacz_kopie`, d24_leo:`wpisz_wykaz` | 0 | +1 | 0 | |

Wszystkie nowe akcje `wez_*` (d17, d18, d19, d21 `wez_50_priya`, d22, d23 `wez_500_iris`, `wez_20_rosa`, `wez_90_marlow`) zaliczają się do liczników łapówek dla zakończeń.

## Karta „Kopie” (d25, extra)
Sekret `d25_karta_kopie`, placeholdery `{kopie}` i `{min(4, kopie)}`. Lista nazwisk rośnie z N: Linh, Gus, Dorian; Maya tylko gdy nie została odebrana.

## Epilogi Eliasa
Blok `epilogi_elias` na końcu pliku: odebrany, wyrwana_strona, rotacja, rotacja_list_bez_warunkow, nowy_sam, referent, zostajesz.

## Ekran końcowy
Licznik Urząd po finale nazywa się „Ekspozycja” i nie jest pokazywany jako dobro.

## Pola rekordu gościa (do plakietki)
Każdy gość w obu plikach ma teraz pola: `rola` (krótki opis), `watki` (lista: Zaginiona, Skrytka, Poprzednik, Fotel, Urząd, Marlow, kamienica, pieniądze, humor), `tik`, `potrzeba`, `slad` (zdanie 6-10 słów: co po gościu zostaje w historii). Pola nie wpływają na walidator.

## Nowi goście
`d20_tobias` (d20) i `d21_mina` (d21); nowe akcje `wez_60_tobias` (+60 $, jak inne wez_*) i `wyloz_94` (−94 $, jak wyloz_*).
