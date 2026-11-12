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

## Audyt fabuły v3: nowe flagi i zmiany dla silnika (wątek dialogów)

Kalendarz: dzień 1 = poniedziałek 9.08; noc zaczyna się wieczorem i kończy o świcie; soboty = rozliczenia bez wizyt. d16 = pon. 30.08, d21 = pon. 6.09, d22 = wt. 7.09, d23 = śr. 8.09, d24 = czw. 9.09, d25 = pt. 10.09. Maya odjeżdża we wtorek 7.09 o 6:10 linią 4.

Nowe tokeny `gość:akcja` (silnik musi je znać jako flagi):
- `d13_tess:wydaj_tess`, `d13_tess:zatrzymaj_ekspertyza`, `d13_tess:odeslij_noah` (wątek Kanał, `kanal_tess`)
- `d2_ines:ines_potwierdz`, `d2_ines:ines_odmow`, `d2_ines:ines_zdejmij` (wątek Ogłoszenie, `ines_potwierdz`)
- `d19_ferro:wydaj_ferro`, `d19_ferro:odmow_ferro`, `d19_ferro:ferro_kopia` (wątek Cudze nazwiska, `ferro`)
- `d18_iris_nora:nora_kopia` (wymaga `d12_iris_nora:wydaj_iris|wyloz_400`); `rezerwacja_nora` wymaga `d12_iris_nora:zabezpiecz|sprawdz_z_nora`; `d23:wydaj_nora` wymaga `d18_iris_nora:rezerwacja_nora|nora_kopia`
- nowy znacznik z pytania: `d23_iris_sama` (bramka zdania „Siedziałam w tym fotelu” w d23)

Nowe wejścia warunkowe (`wejscie_jesli`): d14_noah (szept_lenie), d16_maya_lena (d11_maya: przez_okienko / powiadom_rodzine / szept_lenie), d17_evan (d16: lena_zalatwia / maya_sama), d18_iris_nora (d12: sprawdz_z_nora / wyloz_400), d20_elias_sam (d15_sam: uzgodnij / victor_od_razu / oddaj_samowi), d21 (d11 powiadom_rodzine, d14 bez, d16 lena_zalatwia, d17 zdradz_szczegol), d22_noah (d14 bez, d11 powiadom_rodzine, d17 zdradz_szczegol), d23 (d12 wydaj_iris).

Nowe extras: d3 „zielona skrzynka z numerem 3” (sprite `skrzynka`, nowy asset), d9 „karta rozliczeniowa z pieczątką” (Opłata 60 $, K.M.). Karta „Kopie” w d25 zawiera tabelę nazwisk: Gus (d5 wykaz_paczke lub d9 zetony_victor), Maya (d9 zetony_victor lub d22 stahl_wydaj), Linh (d9 zetony_victor lub d15 victor_od_razu), Dorian (d9 zetony_victor lub d18 do_kontroli); stempel „wgląd Kancelarii, K.M.”. Karty wieczorne d23-d24 pokazują stempel K.M. Wątek Helen Voss: wieczory d9, d15, d22, d25.

D7 `wpisz_siebie`: Iris „Bilet jest. Czeka na peronie, aż ktoś podpisze po Tobie. Do poniedziałku.”, Elias „Dobry początek.”; echo ma `[imię]`.

Uwaga: `docs/tools/check_spojnosc.py` zgłasza 22 niezgodności linia kontra skrzynka w grze, identycznie przed i po audycie (to przypisanie skrzynek po stronie gry, nie dialogów).
