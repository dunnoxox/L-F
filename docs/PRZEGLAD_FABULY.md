# Przegląd fabuły: 25 dni oczami gracza

Stan na 12.11.2026. Trzy pełne przejścia gry w przeglądarce (dni 1-25, każde z finałem), czytane dialog po dialogu razem ze skrzynką, kartkami o świcie i sobotami. Zapis każdego przejścia robi `qa/fabula.js` (opis na końcu).

| Gracz | Jak gra | Zakończenie | Kasa | Urząd / Ludzie |
|---|---|---|---|---|
| Uczciwy | wydaje właścicielom, nie bierze kopert, pyta uprzejmie | Rotacja (Zaginiona A, Skrytka B, Poprzednik B) | 90 $ | 10 / 10 |
| Złodziej | bierze każdą kopertę i każdą „pokusę” | Rotacja (Zaginiona C, Skrytka C, Poprzednik B) | 1489 $ | 0 / 6 |
| Ciekawski | zagląda do rzeczy z wątku Sama, pyta „ze środka”, zbiera kartki S.H. | Odebrany (Zaginiona A, Skrytka A, Poprzednik B) | 90 $ | 10 / 10 |

Legenda statusu: **naprawione** = poprawka jest w tym PR. **otwarte** = wymaga decyzji albo większej roboty, opis w części 6.

## 1. Dziury w logice i sprzeczności

### Czas i kalendarz

| Dzień | Co nie grało | Status |
|---|---|---|
| 1 | Thomas pisał w środę o świcie, że „w niedzielę pojechał” na cmentarz. Niedziela jeszcze nie minęła. | naprawione (czas przyszły) |
| 3 | Evan w wejściu: „dwudziestego drugiego policja zamyka sprawę”. Dwa pytania dalej i w całym kanonie termin to wtorek, 7 września. | naprawione |
| 3, 5, 6, 14, 20, 23, 24 | Numery dni w tekście widocznym dla gracza: „w dniu 7 przyjdzie po więcej”, „wpis z dnia 4”, „rozmowa na dzień 22”, „od piętnastego dnia”, „rezerwacja z osiemnastego”, „puszka z dnia 6”. Gracz widzi daty i dni tygodnia, nie numery. | naprawione (dni tygodnia i daty) |
| 13 | Tess: skrzynka „leży tu od dwóch lat” i „ktoś znalazł ją w tramwaju”. Ta sama skrzynka przyjeżdża tramwajem w dniu 3, a kanon mówi o pogłębiarce i policji rzecznej. | naprawione (wejście, odpowiedź i opis skrzynki z dnia 3) |

### Tekst techniczny w świecie gry

| Gdzie | Co | Status |
|---|---|---|
| Skutki decyzji d15, d16, d17, d18, d19, d20, d21, d22, d23 | „Urząd +2”, „kopie +1”, „licznik bez wpisu rośnie”, „liczy się do zakończenia Nowy Sam”, „wraca w zakończeniu”. To notatki projektanta, nie skutki. | naprawione (przepisane na to, co się stanie w świecie) |
| d21, reakcja Mai | „Trzeci test zaliczony. Okienko wytrzymało trzy razy z rzędu”, także gdy gracz oblał wcześniejsze. | naprawione |
| Kartki, echa, finał | Dosłowne „[imię]” zamiast imienia gracza (podstawianie działało tylko w oględzinach). | naprawione w silniku |

### Dialog kontra to, co gracz wie

| Dzień | Co nie grało | Status |
|---|---|---|
| 10 | Vera prosi o „pudełko z szafki”, a w trzeciej turze gracz pyta „co, jeśli Sam nie przyjdzie”. Nikt wcześniej nie powiedział, że to szafka Sama. | naprawione (Vera mówi to w wejściu) |
| 11 | Decyzja „Zgoda: kontakt tylko przez okienko” i reakcja Mai odwołują się do trzech warunków, których gracz mógł nie usłyszeć. | naprawione (warunki w wejściu) |
| 12, 21, 23, 25 | Wejścia pisane jako didaskalia w trzeciej osobie („Iris prosi o kasetkę… Stoją razem przy szybie”), wyświetlane jako kwestia mówiona. W d25 Elias „pyta, czy Sam już się odezwał”, stojąc obok Sama. | naprawione (mówi jedna osoba: Iris, Priya, Nora, Sam; w scenach wieloosobowych wejście ma teraz twarz i podpis mówiącego) |
| 14 | Podpis „Billie Cross, 16” zdradza kłamstwo, zanim Billie powie „osiemnaście lat”. | naprawione (bez wieku) |
| 15 | Wszystkie trzy decyzje dotyczą „kalki”, o której gracz wie tylko wtedy, gdy zajrzał do szuflady. | naprawione (Sam mówi o kalce w wejściu) |
| 15 | „Wybieraj: oni albo ja. Przykład: Okoye.” | naprawione |
| 16 | Dorian: „Dobrze. „Nie ma jak w domu.” Czyli nie. Wystaw.” Nie do zrozumienia. | naprawione |
| 19 | Ferro: opcje „powiedz o duplikacie dowodu” i „kopia wpisu o dowodzie Gusa” dostępne także wtedy, gdy gracz nigdy nie widział dwóch dowodów Gusa. | naprawione (wymagają sekretu z dnia 5) |
| 23 | W dniu 12 kasetka mogła pójść do Iris, a w dniu 23 trójka znów przychodzi „po kasetkę”. To druga kasetka (na rachunki), ale nikt tego nie mówił. | naprawione (Nora mówi to wprost) |
| 24 | Vera: „To ja wybieram. Od jedenastu lat.” Bez dopełnienia. | naprawione („kto siada na tym fotelu”) |
| 24 | Thomas: „ten młody człowiek zrobił mi dobrze”. | naprawione |
| 25 | Kwestia Victora („Kto to podpisze? Ja.”) przypisana Samowi. Pytanie „Sam, kto zajmie Twoje miejsce?” do człowieka, którego miejsce gracz zajmuje od 25 dni. | naprawione |

### Kartki o świcie kontra stan gry

| Dzień | Co nie grało | Status |
|---|---|---|
| 8, 12 | Marlow dolicza „piętnaście odsetek za spóźnienie”, chociaż rata zeszła w sobotę co do dolara. | naprawione |
| 9 | Ines cytuje ogłoszenie „Bez referencji. Dyskrecja.”, a w prologu na słupie wisi inny tekst. W dniu 5 gazeta dodaje „zaplecze tramwajowe, wejście od podwórza”. | naprawione (jedno ogłoszenie w prologu, gazecie, u Ines i w finale) |
| 11 | Iris: „czterech moich lokatorów dostało pisma”. Ludzie z żetonów nie są jej lokatorami. | naprawione |
| 14 | Elias zna termin Noaha („podpis do wtorku”) i bierze numerek dzień po tym, jak zapytał, czy może przyjść bez numerka. | naprawione |
| 16, 21 | Elias dalej „pyta o oprawkę”, którą odebrał w dniu 13. W dniu 16 opisuje Maję, której nie widział. | naprawione (d18 „Nawyk” zostaje jako jedyny raz) |
| 17 | „Mężczyzna w szarym kapeluszu poprawił mankiet”: mankiet to tik Evana, kartka obok jest właśnie o nim. | naprawione |
| 18 | Marlow: „trzysta, równo tyle, ile jesteś mi winien” (po trzech ratach dług wynosi 120) „jakby wiedział o ofercie Iris” (gracz mógł jej nie usłyszeć). | naprawione |
| 19 | Ada z kartonem i rysunek „mamy dzień na spakowanie” pojawiają się też wtedy, gdy gracz zostawił Adę poza sprawą. Wypowiedzenie przychodzi dopiero w dniu 21. | naprawione (kartki zależne od decyzji) |
| 20 | Kartka „Sam napisał: Jak Cię zapisać?” przychodzi po ekranie z imieniem, czyli po fakcie. | naprawione (patrz część 4) |

### Gracz bez płci

„Oderwałeś pasek”, „Ty usiadłeś”, „wziąłeś pieniądze”, „jesteś mi winien”, „Przyjdź sam” (dwa razy, w dodatku brzmi jak imię Sama), „WIESZ COŚ, CZEGO NIE POWINIENEŚ”, „nic tu nie wpisałeś”, „których chroniłeś”, „wychodzisz wolny”, „jaki widziałeś”, „Ty jesteś pierwszy”, „Gracz wie, że zostało wszystko”. Wszystko **naprawione**.

### Finał

| Co | Status |
|---|---|
| Zaginiona A („pocztówka: Dziękuję”) wyświetlana razem z kartą Kopii, na której Maya jest „odnaleziona”. | naprawione (osobny tekst: Stahl kładzie Evanowi adres przepisany z kopii) |
| Zakończenie Odebrany: scena „Jak się nazywasz? Dziękuję, [imię]. Jutro.” trzy razy pod rząd (echo, akapit „Ty”, epilog Eliasa). | naprawione (zostaje raz, w epilogu) |
| Koperta Thomasa z dnia 24 ma tę samą kartkę S.H. co rękawiczka z dnia 1 i podbijała licznik kartek do 3. Tak tanio otwierał się „list” i zakończenie Odebrany. | naprawione (ta sama kartka liczy się raz) |
| Złodziej po 25 dniach miał 1489 $, zero eksmisji i to samo zakończenie co uczciwy. | naprawione poza tym PR: w trakcie przeglądu wątek gry dodał sobotnie audyty. Ten sam złodziej po poprawkach traci wszystko w dwóch audytach i wylatuje z eksmisją po dniu 10 (dług 427 $). Skutek uboczny w części 6. |

## 2. Czy po 3 dniach gracz wie, w co się wkręcić

Tak, w dwa wątki z trzech, i to bez tłumaczenia.

- **Zaginiona (Maya)** jest od dnia 3 postawiona na ladzie: mąż i siostra chcą tego samego telefonu, a szalik z inicjałami leży w skrzynce od dnia 2. To najmocniejszy haczyk pierwszego tygodnia.
- **Poprzednik (Sam, strona 41)** wchodzi w dniu 1 przez jedyną rzecz, do której wolno zajrzeć: kwit 0417, „Prawa wydana bez wpisu. Lewa czeka. S.H.” i wyrwana strona. Dobre, bo wymuszone.
- **Własna skóra**: dług u Marlowa od dnia 2 i kapelusz w oknie naprzeciwko w ostatnim kadrze dnia 3. Gracz wie, że ktoś patrzy.
- **Skrytka (Iris)** zaczyna się dopiero w dniu 4. Po trzech dniach gracz o niej nie wie i nie musi.

Słabe ogniwo to **dzień 2**: Jonah, Hana i Ines są osobnymi anegdotami. Spina je tylko szalik Mai, i to wyłącznie wtedy, gdy gracz akurat do niego zajrzy. Gracz, który wybierze inną rzecz, ma dzień bez haczyka (otwarte, część 6).

## 3. Gdzie nudno, gdzie za gęsto

**Za gęsto: świty w ostatnim tygodniu.** Liczba kartek do przeczytania naraz: dzień 12 i 16 po 7, dzień 20 i 24 po 8, dzień 22 i 25 po 9. Przy dziewięciu kartkach gracz przestaje czytać dokładnie wtedy, gdy kartki są najważniejsze. Naprawione: wyleciało pięć kartek-wypełniaczy (Marlow d16, d20, d24, Elias d25, a Marlow d23 ustąpił miejsca wyznaniu Iris), a silnik pokazuje najwyżej 6 kartek naraz. Stałe kartki dnia mają pierwszeństwo, nadwyżka listów od gości przechodzi na następny świt, a to, co zostanie po dniu 25, trafia do kart finału.

**Nudno: dni 13-19 dla gracza uczciwego.** Odile, Billie, Pruitt, Dorian, Sylvia, Hugo i Kofi to dobre miniatury, ale siedem dni z rzędu główny wątek (Fotel) stoi. Między kalką Sama (d15) a pytaniem o imię (d20) uczciwy gracz nie dostaje ani jednej nowej informacji o własnym położeniu. Otwarte.

**Liczniki przestają grać.** Uczciwy gracz ma Urząd 10 i Ludzi 10 od dnia 10 do końca. Od tej chwili sobotnie rozliczenie nie mówi mu nic nowego. Otwarte (balans).

**Meta-pytanie „niewygodne”** jest w praktyce zawsze najlepszym wyborem, bo odsłania najwięcej. Uprzejme i rzeczowe rzadko dają coś, czego nie da niewygodne. Otwarte (balans dialogów).

## 4. Zwrot w dniu 20 i zakończenia

**Pomysł jest mocny, wykonanie go rozbrajało.** Trzy problemy:

1. **Pytanie o imię było ekranem interfejsu, nie sceną.** Wyskakiwało po drugim gościu dnia (Milo, dostawca chleba), bez nadawcy, a kartka „Sam napisał: Jak Cię zapisać?” przychodziła po nim. Teraz: Sam kończy swoją scenę, przesuwa pod szybą numerek z pytaniem ołówkiem, gracz odpowiada, a o świcie numerek leży odwrócony, z imieniem gracza pod pytaniem Sama. Naprawione.
2. **Wszystkie cztery odsłony zwrotu dało się przegapić.** Ostrzeżenie Mai („nie bierz biletu z ręki Iris”, d21) było jednym z pytań do wyboru. Wyznanie Iris („siedziałam w tym fotelu”, d23) też. List Sama (d24) czytał tylko ten, kto zajrzał do szafki albo wybrał „Otwórz szafkę”, a i wtedy dostawał opis „w szafce leży list”, bez treści. Uczciwy gracz doszedł do księgi w dniu 25, nie wiedząc, że jest szóstym w łańcuchu. Teraz każda odsłona ma gwarantowaną kartkę o świcie: bilet od Mai (jeśli gracz zdał jej próby), Iris w drzwiach, list Sama pełny przy trzech kartkach S.H. albo z lukami, gdy ich brak. Kto przeczytał wcześniej, nie czyta drugi raz. Naprawione.
3. **Imię nie wracało.** W finale stało „[imię]”. Teraz wraca w decyzji dnia 25 („Wpisz „Tommy” w linię 0809”), w echu Eliasa i w epilogu. Naprawione.

**Zakończenia.** Rotacja jest najlepsza: „Joan Alder, zgubiona w tramwaju 6 w 2019. Nieodebrana. Od dziś to Ty.” To zdanie niesie całą grę. Odebrany działa, po usunięciu potrójnej sceny z Eliasem kończy się czysto. Wyrwana strona jest uczciwie gorzka. Słabsze są Referent i Zostajesz: jedno zdanie, bez obrazu. Otwarte.

**Rozjazd wagi.** Uczciwy i złodziej kończą tą samą Rotacją. Różnią ich akapity nitek (Maya wolna albo wydana, Nora z papierami albo bez), ale nagłówek i epilog są te same. Gracz, który porówna dwa przejścia, pomyśli, że decyzje o pieniądzach nic nie zmieniły. Otwarte.

## 5. Wielowątkowość

**Co się przeplata i ma wypłatę:**

- Jonah (d2, pierścionek) wraca w d22 z kopertą „K.M.”: ten sam Marlow, u którego gracz ma dług. Najlepsze spięcie pobocznego wątku z własnym.
- Gus (d5, dwa dowody) i Ferro (d19, „ktoś chodzi po mieście jako ja”). Działa, o ile gracz widział dowody, stąd poprawka z punktu 1.
- Tess (d13) i jej brat Tobias, czwarty dyżurny. Wypłata w d17 (Noah) i d25 (grób z imieniem albo brama cmentarza). Bardzo dobre, a po poprawce skrzynka ma jedną historię zamiast trzech.
- Ines (d2) i dwa teksty w „Kurierze” (d18, d25). Dzięki ujednoliceniu ogłoszenia gracz może sam zauważyć, że kartka ze słupa wisi od jedenastu lat, czyli tyle, ile Vera „wybiera”.
- Kit (d7, ulotki o 22:15) i Evan: kłamstwo męża da się złapać cudzym zeznaniem.
- Rosa (d1) i Ada (d6, d12, d19), z osobną wersją wejścia Ady dla każdej decyzji z dnia 1. Brakowało wersji dla kradzieży całej wypłaty: dodana.
- Leo (d6, d19, d24): puszka, sprostowanie, torba z pozycją 0809. Spina Skrytkę z Fotelem.

**Co wisi:**

- **Voss (Rewizor)**: telefon w d9, kartka w d15, kolejka w d22, a w d25 protokół z jednego zdania. Trzy zapowiedzi i brak sceny. Najsłabsza wypłata w grze. Otwarte.
- **Stahl**: echo „dokument wystawił ktoś, kto nie powinien” nie prowadziło nigdzie. Teraz Stahl mówi, że kupił wgląd w Kancelarii za 60 $, czyli tą samą drogą, którą idą kopie gracza. Naprawione.
- **Marlow**: dużo kartek, mało sceny. Propozycja „można się dogadać inaczej” (d10, d12) nigdy nie staje się decyzją przy ladzie. Otwarte.
- **Dario (d10)**: pyta, czy Sam żyje, i znika. Sam wraca w d15, a Dario się o tym nie dowiaduje. Otwarte, tanie do domknięcia jedną kartką.

## 6. Otwarte, do decyzji albo na osobny wątek

1. **Dzień 2 bez haczyka** dla gracza, który nie zajrzy do szalika. Propozycja: Hana albo Ines wspomina kobietę, która liczyła do trzech na przystanku.
2. **Dołek 13-19.** Propozycja: w d17 (Sylvia, szachy bez króla) dołożyć do pudełka kartkę S.H. o „pustym polu”, żeby Fotel dawał znak co dwa-trzy dni.
3. **Złodziej nie widzi już drugiej połowy gry.** Po nowych audytach gracz, który bierze wszystko, odpada po dniu 10. To uczciwa kara, ale wersje wejść i echa pisane pod kradzieże z dni 11-25 (Milo, Sylvia, Hugo, Kofi, Priya, Stahl, Iris) zobaczy tylko ktoś, kto kradnie rzadko. Do sprawdzenia osobnym przejściem „kradnę raz na tydzień”.
4. **Voss**: jedna scena przy ladzie w d22 albo d24 zamiast kartek.
5. **Marlow**: jedna decyzja przy ladzie („rata za wgląd w skrzynkę”).
6. **Zakończenie złodzieja**: osobny epilog albo nitka „Szuflada”, żeby pieniądze zmieniały ostatnie zdanie gry.
7. **Liczniki 10/10** od połowy gry.
8. **Oferta Iris w d18** (300 $, tytuł dnia) nadal jest widoczna tylko po jednym pytaniu. Marlow teraz ją zapowiada o świcie, ale koperta mogłaby leżeć na ladzie od wejścia.
9. **Referent i Zostajesz**: dopisać po jednym obrazie.

Decyzje kanonu, które zostają bez zmian: zdanie o audycie w dniu 2, kapelusz Stahla w ostatnim kadrze dnia 3, pole na imię w dniu 20.

## 7. Weryfikacja po poprawkach

Po zmianach gra przeszła jeszcze raz w całości:

| Przejście | Wynik |
|---|---|
| Uczciwy, dni 1-25 | finał Rotacja, 0 błędów JS, imię gracza w decyzji dnia 25 i w echu Eliasa, list Sama z lukami o świcie dnia 24, kartek S.H. 2/5 (wcześniej 3 przez zdublowany kwit) |
| Ciekawski (wątek Sama), dni 1-25 | finał Odebrany, 0 błędów JS, scena „Jak się nazywasz?” jeden raz |
| Złodziej | eksmisja po dniu 10 (nowe audyty), 0 błędów JS |
| `validate_dialogs.py`, `check_spojnosc.py` | bez nowych uwag (zostają trzy stare o kluczach specjalnych i jedna o akcji z pliku pokus) |
| `qa/bot.js`, 25 dni, desktop | finał, 205 zrzutów, 0 błędów JS. Trzy uwagi tylko w podglądzie telefonu na ekranie finału (przycisk pod zgięciem przewijanej listy), znane wcześniej |
| `qa/bot.js`, 6 dni, telefon | tylko znane wcześniej drobiazgi: podpisy stref decyzji 6-7 px i szuflady magazynu poza ekranem |

## 8. Jak to powtórzyć

```
cd game && python3 -m http.server 8765 &
node qa/fabula.js --gracz uczciwy   --out /tmp/fabula/uczciwy
node qa/fabula.js --gracz zlodziej  --out /tmp/fabula/zlodziej
node qa/fabula.js --gracz ciekawski --watek sam --out /tmp/fabula/ciekawski
```

Każdy przebieg zostawia `przebieg.md` (wszystko, co gracz przeczytał: wejścia, pytania, odpowiedzi, dostępne i ukryte decyzje, skutki, kartki o świcie, soboty, finał), `wynik.json` i zrzuty ekranu. Opcje: `--watek sam|maya|skrytka`, `--days N`, `--imie`, `--bez-kadrow`. `qa/bot.js` sprawdza układ ekranu, `qa/fabula.js` sprawdza sens.
