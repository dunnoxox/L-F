# Jeden czat ChatGPT: 4 brakujące grafiki (kask, koszyk, księga wydań, kot)

Wynik: 2 obrazy. Arkusz Z8 (rzeczy: kask, koszyk, księga otwarta i zamknięta) oraz arkusz KOT (trzy pozy kota z parapetu).

## Co załączyć
Rozpakuj `referencje_brakujace_4.zip` (leży obok tego pliku w `prompty/` (repo) oraz w folderze projektu `/mnt/project-files/gpt_brakujace_4/`). W środku są 4 pliki, załącz wszystkie na końcu pierwszej wiadomości:

1. `C1.png` (arkusz rzeczy na zielonym tle: wzór układu i rzeźbienia)
2. `C2.png` (drugi arkusz rzeczy: wzór faktury)
3. `K4-portfel.png` (rzeźbienie rzeczy plamą światła)
4. `T1.png` (okienko i poczekalnia: świat, w którym siedzi kot)

Potem wklej cały blok poniżej.

```
Generuję dwa ostatnie arkusze zasobów do gry, po kolei w tym jednym czacie. Pracuj samodzielnie: wygeneruj obraz 1, potem obraz 2, bez pytania o zgodę, bez streszczeń, bez łączenia obrazów. Pod każdym obrazem tylko etykieta: "Z8 gotowe 1/2", "KOT gotowe 2/2". Jeśli system każe Ci się zatrzymać, napisz "Wpisz: dalej" i po mojej odpowiedzi kontynuuj. Na końcu napisz jednym zdaniem, czy któryś obraz odszedł od stylu.

STYL: LINORYT SODOWY, dokładnie jak w załączonych C1.png i C2.png (arkusze rzeczy na zielonym tle) oraz K4-portfel.png (rzeźbienie plamą światła). Odbitka z linorytu. Na tych arkuszach tylko dwie farby: czerń płyty i kremowa biel papieru. Zero pomarańczu, zero szarości, brązu, sepii, gradientów i rastra. Formy powstają z pełnych kremowych plam światła wyciętych z czerni, cień to czysta czerń. Bez linii obrysu i bez cienkich równych konturów. Faktura to krótkie cięcia dłuta, kropki i zadrapania na granicy światła i cienia. Rzeczy są stare i zniszczone, nic nie jest ładne, symetryczne ani ikoniczne. Bez tekstu, liter, cyfr, logo i znaków wodnych: kartki, etykiety i nalepki mają puste pola albo same poziome cięcia.

UKŁAD (ważne dla wycinania): format poziomy 1536x1024. Tło to jednolita czysta zieleń #00FF00, bez cienia, bez faktury, bez smugi w rogu. Zieleń nie pojawia się na samych rzeczach. Każdy obiekt ma własną zwartą czarno-kremową bryłę, duży odstęp od sąsiadów, nic nie dotyka krawędzi kadru. Sylwetka czytelna w 64 px.

=== OBRAZ 1: ARKUSZ Z8 (4 rzeczy, 2 kolumny x 2 rzędy) ===
Rzeczy leżą pod lekkim kątem, tak jak spadły na ladę biura rzeczy znalezionych.
1. KASK ROWEROWY nastolatki: miejski kask z otworami wentylacyjnymi, widok z boku i lekko z góry, porysowana skorupa, rozpięty pasek z klamrą zwisa luźno, z boku odklejająca się okrągła nalepka z prostym kształtem gwiazdki (bez liter), w środku widać brzeg miękkiej wyściółki.
2. WIKLINOWY KOSZYK starszej pani: owalny koszyk z pałąkiem, wyraźny splot wikliny, jeden pręt pęknięty i odstający. W środku przykryte kraciastą ściereczką: dwa pudełka leków, brązowa buteleczka i słoik śliwek z zakrętką przewiązaną sznurkiem. Etykiety puste.
3. KSIĘGA WYDAŃ OTWARTA: gruba urzędowa księga w płóciennej oprawie, otwarta mniej więcej w połowie, widok z góry pod kątem. Strony w rubrykach (same poziome i pionowe cięcia zamiast pisma), górne wiersze zapełnione krótkimi cięciami, jeden wiersz w połowie strony wyraźnie PUSTY. Przy grzbiecie widać poszarpany ślad po jednej wyrwanej kartce. Zagięte rogi, tasiemka zakładki.
4. KSIĘGA WYDAŃ ZAMKNIĘTA: ta sama księga zamknięta, leży skosem. Wytarte narożniki okute blachą, pęknięty grzbiet, na okładce pusta wklejona etykieta (bez liter), z boku wystaje tasiemka zakładki.

=== OBRAZ 2: ARKUSZ KOT (3 pozy, jeden rząd) ===
Ten sam kot w trzech pozach, każda jako osobna zwarta bryła na zielonym tle. Świat i nastrój jak w załączonym T1.png: nocne biuro, deszcz za szybą. Dachowiec, chudy, mokry od deszczu, sierść w krótkich cięciach dłuta, jedno ucho naderwane, bez obroży. Kremowe światło pada na niego z prawej strony (od lampy), lewa strona ginie w czerni. Oczy to dwa małe kremowe punkty. Kot realistyczny, nie kreskówkowy i nie słodki.
1. SIEDZI bokiem na wąskim parapecie (sam fragment parapetu pod łapami, krótki, czarno-kremowy), ogon owinięty wokół łap, głowa zwrócona w prawo i lekko w górę, patrzy na lampę.
2. SIEDZI przodem do widza, ta sama postura, głowa przechylona, oczy przymknięte (mruczy).
3. LEŻY zwinięty w kłębek na parapecie, ogon przy nosie, jedno oko otwarte.
```

## Po wygenerowaniu
Wrzuć oba obrazy do folderu projektu (albo do wątku). Wycięcie z zieleni i wpięcie do gry robi wątek gry: `kask.png`, `koszyk.png`, `ksiega.png`, `ksiega_zamknieta.png` do `game/assets/items/`, kot zastąpi rysunek z kodu w pauzie przy szybie.

Znane potknięcia generatora: sepia i miękkie cieniowanie, pomarańczowa smuga w rogu skopiowana z referencji, litery na etykietach. Jeśli wyjdą, napisz w tym samym czacie: "Popraw obraz N: tylko czerń i krem, zero półtonów, bez smugi, bez liter".
