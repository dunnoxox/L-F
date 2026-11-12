# Spójność dialogów: raport automatu

Wygenerowane przez `node qa/spojnosc_dialogow.js`. Automat tylko wskazuje podejrzane miejsca; o tym, czy para pytanie/odpowiedź gra, decyduje czytanie (`--pelny PLIK` daje wypis wszystkich węzłów).

Scen: 55, par pytanie/odpowiedź: 1116. W nowym zapisie (drzewo wątków): 37 scen, w starym (trzy sztywne tury): 18.

| flaga | drzewa | stare tury | co znaczy |
|---|---|---|---|
| PROZNIA | 205 | 69 | opcja nie zaczepia się o poprzednią kwestię gościa na którejś ścieżce |
| WIEDZA | 2 | 109 | opcja zakłada nazwę albo liczbę, której gracz nie musiał usłyszeć |
| LUZNE | 294 | 34 | opcja nawiązuje do rozmowy, ale nie do końcówki żadnej odpowiedzi (miękkie) |
| OBOK | 619 | 136 | odpowiedź bez wspólnego słowa z pytaniem (miękkie, sprawdzić ręcznie) |
| KALKA | 0 | 0 | zwrot jak z tłumaczenia |
| PLEC | 2 | 0 | gracz dostaje płeć albo pan/pani |
| DLUGIE | 0 | 0 | za długa kwestia |

## d1_thomas (dzień 1, Thomas Ward, 71, drzewo)

- **OBOK** 1: „Jak wygląda rękawiczka?” -> „Brązowa skóra. Wytarta, ale nie popękana. Ellen mówiła, że dobra skóra ma się zestarzeć ra…”
- **PROZNIA** 1.1: dopytanie „Jaki rozmiar?” nie zaczepia się o: „…Wytarta, ale nie popękana. Ellen mówiła, że dobra skóra ma się zestarzeć razem z człowiekiem.”
- **OBOK** 1.1.1: „Przymierzałeś ją?” -> „Przy szyciu. Musiałem czymś rozepchać środek. Dłoń miałem pod ręką, że tak powiem.…”
- **PROZNIA** 1.1.1: dopytanie „Przymierzałeś ją?” nie zaczepia się o: „…Ellen miała drobne dłonie. Mnie wchodzi tylko do połowy palców.”
- **OBOK** 1.2: „Po czym odróżnić ją od podobnej?” -> „Przy kciuku zszyłem ją białą nitką. Krzywo. Ręka lata, ale nitka trzyma.…”
- **PROZNIA** 1.2: dopytanie „Po czym odróżnić ją od podobnej?” nie zaczepia się o: „…Wytarta, ale nie popękana. Ellen mówiła, że dobra skóra ma się zestarzeć razem z człowiekiem.”
- **OBOK** 1.2.1: „Czemu akurat białą?” -> „Została w pudełku Ellen. Ciemnej już nie było. Nie chciałem kupować całej szpulki na jeden…”
- **LUZNE** 1.2.1: dopytanie „Czemu akurat białą?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Krzywo. Ręka lata, ale nitka trzyma.”
- **OBOK** 2.1: „Dokąd jechałeś?” -> „Do córki, Claire, do Doków. W czwartki gotuje rosół i zawsze wychodzi jej za dużo.…”
- **PROZNIA** 2.1: dopytanie „Dokąd jechałeś?” nie zaczepia się o: „…Rękawiczka leżała na kolanie, na zakręcie spadła. Nie zauważyłem od razu.”
- **LUZNE** 2.1.1: dopytanie „Wie, że szukasz rękawiczki?” nie zaczepia się o: „…Do córki, Claire, do Doków. W czwartki gotuje rosół i zawsze wychodzi jej za dużo.”
- **OBOK** 2.2: „Dlaczego nie była w kieszeni?” -> „Wyjąłem ją, żeby sprawdzić szew. Człowiek raz coś zszyje i zaraz musi oglądać swoje dzieło…”
- **PROZNIA** 2.2: dopytanie „Dlaczego nie była w kieszeni?” nie zaczepia się o: „…Rękawiczka leżała na kolanie, na zakręcie spadła. Nie zauważyłem od razu.”
- **OBOK** 3: „Masz ze sobą drugą?” -> „W kieszeni. Proszę, prawa. Noszę ją osobno, odkąd lewa zginęła.…”
- **OBOK** 3.1: „Czym różnią się szwy?” -> „W prawej nitka czarna, w lewej biała. Czarna skończyła się wcześniej. Obie szyte tą samą, …”
- **PROZNIA** 3.1: dopytanie „Czym różnią się szwy?” nie zaczepia się o: „…Proszę, prawa. Noszę ją osobno, odkąd lewa zginęła.”
- **OBOK** 3.1.1: „Możesz ją zostawić na czas porównania?” -> „Na ladzie, tak. Byle nie w magazynie. Jeszcze mi się zrobi z tego trzecia wizyta... To zna…”
- **PROZNIA** 3.1.1: dopytanie „Możesz ją zostawić na czas porównania?” nie zaczepia się o: „…Czarna skończyła się wcześniej. Obie szyte tą samą, niezbyt pewną ręką.”
- **OBOK** 3.2: „Nosisz je nawet wtedy, gdy jest ciepło?” -> „W płaszczu. Jedną w drugiej. Portfel mam w drugiej kieszeni, żeby nic ich nie drapało.…”
- **LUZNE** 3.2: dopytanie „Nosisz je nawet wtedy, gdy jest ciepło?” nie zaczepia się o: „…Proszę, prawa. Noszę ją osobno, odkąd lewa zginęła.”
- **OBOK** 3.2.1: „A kiedy zmieniasz płaszcz?” -> „Przekładam najpierw rękawiczki. Telefonu czasem zapomnę. Tych nie powinienem.…”
- **LUZNE** 3.2.1: dopytanie „A kiedy zmieniasz płaszcz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Jedną w drugiej. Portfel mam w drugiej kieszeni, żeby nic ich nie drapało.”
- **OBOK** 4: „Co będzie, jeśli lewa się nie znajdzie?” -> „W niedzielę pojadę z jedną. Tylko będę wyglądał, jakbym znowu czegoś nie dopilnował.…”
- **OBOK** 4.1: „Kto pojedzie z tobą?” -> „Claire. Niesie kwiaty, ja wodę. Tak się podzieliliśmy, żeby nie stać oboje z pustymi rękam…”
- **PROZNIA** 4.1: dopytanie „Kto pojedzie z tobą?” nie zaczepia się o: „…W niedzielę pojadę z jedną. Tylko będę wyglądał, jakbym znowu czegoś nie dopilnował.”
- **OBOK** 4.1.1: „Możesz powiedzieć jej o zgubie w drodze.” -> „Mogę. Tylko ona wtedy odłoży swoje sprawy i zacznie załatwiać moje. Nie po to gotuje ten r…”
- **LUZNE** 4.1.1: dopytanie „Możesz powiedzieć jej o zgubie w drodze.” nie zaczepia się o: „…Niesie kwiaty, ja wodę. Tak się podzieliliśmy, żeby nie stać oboje z pustymi rękami.”
- **OBOK** 4.2: „Chcesz zostawić rękawiczki na grobie?” -> „Na chwilę. Obie, obok siebie. Potem schowam, bo Ellen by mnie zrugała za marnowanie dobrej…”
- **LUZNE** 4.2: dopytanie „Chcesz zostawić rękawiczki na grobie?” nie zaczepia się o: „…W niedzielę pojadę z jedną. Tylko będę wyglądał, jakbym znowu czegoś nie dopilnował.”
- **OBOK** 4.2.1: „Zawsze tak pilnowała rzeczy?” -> „Guziki trzymała według kolorów. Ja teraz szukam igły w pięciu pudełkach, a ona trafiała be…”
- **PROZNIA** 4.2.1: dopytanie „Zawsze tak pilnowała rzeczy?” nie zaczepia się o: „…Obie, obok siebie. Potem schowam, bo Ellen by mnie zrugała za marnowanie dobrej skóry.”
- **OBOK** 5.1: „To skąd wiesz, gdzie jest nocne okienko?” -> „Zajezdnię znam. Szyba się świeci, człowiek podchodzi. Jeszcze potrafię trafić tam, gdzie j…”
- **LUZNE** 5.1: dopytanie „To skąd wiesz, gdzie jest nocne okienko?” nie zaczepia się o: „…Pierwsza. Nie mam zwyczaju chodzić po urzędach.”
- **OBOK** 5.1.1: „Trudno było tu przyjść?” -> „Trudniej powiedzieć, że chodzi o jedną rękawiczkę. Przy innych zgubach to wygląda śmieszni…”
- **PROZNIA** 5.1.1: dopytanie „Trudno było tu przyjść?” nie zaczepia się o: „…Szyba się świeci, człowiek podchodzi. Jeszcze potrafię trafić tam, gdzie jasno.”
- **OBOK** 5.2: „W mankiecie jest kwit 0417 sprzed sześciu tygodni. Skąd?” -> „Byłem tu po prawą. Sam oddał bez wpisu. Wstyd mi, że teraz przychodzę po lewą, jakbym nicz…”
- **OBOK** 5.2.1: „Co Sam powiedział o lewej?” -> „Że rękawiczki chodzą parami i ona też kiedyś przyjdzie. Żebym o nim dużo nie opowiadał. Wi…”
- **PROZNIA** 5.2.1: dopytanie „Co Sam powiedział o lewej?” nie zaczepia się o: „…Sam oddał bez wpisu. Wstyd mi, że teraz przychodzę po lewą, jakbym niczego nie umiał upilnować.”
- **OBOK** 5.2.1.1: „Ukrywasz jego pomoc czy własną zgubę?” -> „Teraz już jedno i drugie. O nim prosił Sam, o rękawiczce sam nie chciałem mówić.…”
- **LUZNE** 5.2.1.1: dopytanie „Ukrywasz jego pomoc czy własną zgubę?” nie zaczepia się o: „…Żebym o nim dużo nie opowiadał. Więc nie opowiadałem.”
- **OBOK** 5.2.1.1.1: „Co mogę powiedzieć Claire, jeśli zapyta?” -> „Że lewa się znalazła, jeśli się znajdzie. Resztę spróbuję powiedzieć sam.…”
- **LUZNE** 5.2.1.1.1: dopytanie „Co mogę powiedzieć Claire, jeśli zapyta?” nie zaczepia się o: „…Teraz już jedno i drugie. O nim prosił Sam, o rękawiczce sam nie chciałem mówić.”
- **OBOK** 6: „Dlaczego tak zależy ci na tej jednej parze?” -> „To rękawiczki Ellen. Nowe mogę kupić. Tylko nowych ona nigdy nie miała na rękach.…”
- **OBOK** 6.1: „Długo byliście razem?” -> „Czterdzieści cztery lata. Poznaliśmy się w dwójce, której już nie ma. Miała bilet, ja nie …”
- **PROZNIA** 6.1: dopytanie „Długo byliście razem?” nie zaczepia się o: „…Nowe mogę kupić. Tylko nowych ona nigdy nie miała na rękach.”
- **OBOK** 6.1.1: „Kupiła ci bilet?” -> „Pożyczyła. Bardzo wyraźnie powiedziała: pożyczyła. Musiałem ją potem znaleźć, żeby oddać.…”
- **OBOK** 6.2.1: „Jak zdejmowała?” -> „Najpierw ciągnęła za każdy palec. Ja zawsze szarpałem za mankiet. Dlatego ona rzeczy miała…”
- **OBOK** 7.1: „Dlaczego bez wpisu?” -> „Powiedział, że pamiątka, nie zguba. Nie pytałem, czy wolno. Wziąłem i wyszedłem, zanim się…”
- **LUZNE** 7.1: dopytanie „Dlaczego bez wpisu?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Skłamałem, bo wstyd drugi raz przyjść z tym samym. Tylko rękawiczka inna.”
- **OBOK** 8: „Pod białym szwem jest brązowy. Kto go zrobił?” -> „Ellen. Mój jest na wierzchu. Jej nitka się przecierała, ale nie potrafiłem jej wypruć.…”

## d1_rosa (dzień 1, Rosa Vale, 33, drzewo)

- **OBOK** 1: „Jak rozpoznać kopertę?” -> „Brązowa, z jedną zszywką. Zwykła biurowa, nie żadna na prezenty.…”
- **OBOK** 1.1: „Jak jest zamknięta?” -> „Jedna zszywka, wbita krzywo. Kierownik zszywa na stojąco, więc połowa jest w papierze, poł…”
- **LUZNE** 1.1: dopytanie „Jak jest zamknięta?” nie zaczepia się o: „…Brązowa, z jedną zszywką. Zwykła biurowa, nie żadna na prezenty.”
- **OBOK** 1.1.1: „Rozrywałaś ją przy liczeniu?” -> „Odgięłam róg. Banknoty wysunęłam, zszywka została. Palec pamięta ją do teraz.…”
- **PROZNIA** 1.1.1: dopytanie „Rozrywałaś ją przy liczeniu?” nie zaczepia się o: „…Jedna zszywka, wbita krzywo. Kierownik zszywa na stojąco, więc połowa jest w papierze, połowa sterczy.”
- **OBOK** 1.2: „Co jest w środku oprócz pieniędzy?” -> „Kartka z naszymi nocami. Złożona na pół, inaczej się nie mieści.…”
- **LUZNE** 1.2: dopytanie „Co jest w środku oprócz pieniędzy?” nie zaczepia się o: „…Brązowa, z jedną zszywką. Zwykła biurowa, nie żadna na prezenty.”
- **OBOK** 1.2.1: „Jest podpisana?” -> „Na kopercie Vale, ołówkiem. W rogu 129. Dziewiątka wygląda jak ósemka, kierownik tak pisze…”
- **PROZNIA** 1.2.1: dopytanie „Jest podpisana?” nie zaczepia się o: „…Kartka z naszymi nocami. Złożona na pół, inaczej się nie mieści.”
- **OBOK** 2: „Kiedy została w tramwaju?” -> „O szóstej rano, w jedenastce. Odłożyłam obok, żeby zapiąć torbę. Obudziłam się na pętli.…”
- **OBOK** 2.1: „Po nocnej zmianie?” -> „Od dziewiątej wieczorem na nogach. Potem córka do szkoły, potem szukanie koperty. Sen na r…”
- **PROZNIA** 2.1: dopytanie „Po nocnej zmianie?” nie zaczepia się o: „…Odłożyłam obok, żeby zapiąć torbę. Obudziłam się na pętli.”
- **OBOK** 2.1.1: „Córka poszła sama?” -> „Ada, dziesięć lat. Kanapki zrobiła sobie i mnie. Moja jeszcze leży w torbie, nie mogę prze…”
- **PROZNIA** 2.2.1: dopytanie „Pytałaś na pętli?” nie zaczepia się o: „…Same takie jak ja, głowy pod oknem. Nie będę wybierać złodziejki z zamkniętymi oczami.”
- **OBOK** 3: „Skąd dokładnie kwota 129 dolarów?” -> „Trzy noce po czterdzieści trzy. Liczyłam przed tramwajem. Trzy razy, niestety dobrze.…”
- **OBOK** 3.1: „Niestety?” -> „Bo pracowałam cztery noce. Za czwartą nie dostałam. Liczenie tego nie naprawi.…”
- **OBOK** 3.1.1: „Kto skreślił czwartą?” -> „Iris Bell. Zarządza kamienicą, odbiera nasze wypłaty z pralni. Potem każda dostaje kopertę…”
- **PROZNIA** 3.1.1.1: dopytanie „Możesz sprawdzić rachunek, zanim rozda pieniądze?” nie zaczepia się o: „…Zarządza kamienicą, odbiera nasze wypłaty z pralni. Potem każda dostaje kopertę i ma nie marudzić.”
- **OBOK** 3.1.1.1.1: „Czyli liczenie ma tylko potwierdzić jej wynik?” -> „Liczyć mogę, kłócić się też. Tylko ona potem wraca do kamienicy jako zarządczyni, a ja jak…”
- **LUZNE** 3.1.1.1.1: dopytanie „Czyli liczenie ma tylko potwierdzić jej wynik?” nie zaczepia się o: „…Widzę kartkę, kiedy dostaję kopertę. Wtedy pieniądze są już podzielone, a za mną stoją następne.”
- **LUZNE** 3.2: dopytanie „Dlaczego tak dokładnie je przeliczasz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Liczyłam przed tramwajem. Trzy razy, niestety dobrze.”
- **OBOK** 3.2.1: „Nic nie zostaje na jedzenie?” -> „Z tego nie. W domu jest kasza. Nie przyszłam po litość, tylko po swoje pieniądze.…”
- **PROZNIA** 3.2.1: dopytanie „Nic nie zostaje na jedzenie?” nie zaczepia się o: „…Sto dwadzieścia dziewięć mam, sto dwadzieścia dziewięć muszę oddać. W takim rachunku nawet dolar hałasuje.”
- **OBOK** 4.1: „Kto wręcza koperty?” -> „Iris, zarządczyni. Odbiera zbiorczo. Mówi, że dzięki niej nie musimy stać po wypłatę.…”
- **LUZNE** 4.1: dopytanie „Kto wręcza koperty?” nie zaczepia się o: „…Papier dostaję, pieniędzy na konto nie. Mogę pracować albo pytać, czemu.”
- **OBOK** 4.1.1: „A jeśli chcesz odebrać osobiście?” -> „To zapyta, po co komplikuję. Przy wszystkich. Potem trudno z nią rozmawiać o czynszu.…”
- **LUZNE** 4.1.1: dopytanie „A jeśli chcesz odebrać osobiście?” nie zaczepia się o: „…Odbiera zbiorczo. Mówi, że dzięki niej nie musimy stać po wypłatę.”
- **OBOK** 4.2: „Próbowałaś zmienić pracę?” -> „Przy dziecku potrzebuję tych godzin. W pralni przynajmniej wiem, kiedy wyjdę. Z pieniędzmi…”
- **OBOK** 4.2.1: „Kto zostaje wtedy z córką?” -> „To już moja sprawa. Koperta ma moje nazwisko, nie opis całego mieszkania.…”
- **LUZNE** 4.2.1: dopytanie „Kto zostaje wtedy z córką?” nie zaczepia się o: „…W pralni przynajmniej wiem, kiedy wyjdę. Z pieniędzmi gorzej.”
- **OBOK** 5: „Co się stanie, jeśli nie odzyskasz jej dziś?” -> „Dwadzieścia dolarów kary za czynsz. I nadal trzeba zapłacić sam czynsz. Kara go nie zastęp…”
- **OBOK** 5.1: „Kto nalicza karę?” -> „Iris Bell. Ta sama, która rozdziela wypłaty. Pieniądze robią kółko, ja tylko na chwilę je …”
- **PROZNIA** 5.1: dopytanie „Kto nalicza karę?” nie zaczepia się o: „…I nadal trzeba zapłacić sam czynsz. Kara go nie zastępuje.”
- **OBOK** 5.1.1: „Możesz poprosić o odroczenie?” -> „Mogę. Powie, że wszyscy mają dzieci i nie może robić wyjątków. Już słyszałam.…”
- **PROZNIA** 5.1.1: dopytanie „Możesz poprosić o odroczenie?” nie zaczepia się o: „…Ta sama, która rozdziela wypłaty. Pieniądze robią kółko, ja tylko na chwilę je trzymam.”
- **PROZNIA** 5.2: dopytanie „Masz od kogo pożyczyć?” nie zaczepia się o: „…I nadal trzeba zapłacić sam czynsz. Kara go nie zastępuje.”
- **OBOK** 5.2.1: „A kierownik?” -> „Może potwierdzić kopertę. Pieniędzy drugi raz nie da. Zszywkę pewnie tak.…”
- **LUZNE** 5.2.1: dopytanie „A kierownik?” nie zaczepia się o: „…Jedna mi pożyczy, sama nie zapłaci. Razem wyjdzie drożej.”
- **OBOK** 6: „Jak możesz potwierdzić, że wypłata jest twoja?” -> „Nazwisko, kwota, kartka z nocami. Kierownik mnie zna. Tylko nie odbierze telefonu w środku…”
- **LUZNE** 6.1: dopytanie „Przyjdziesz z nim rano?” nie zaczepia się o: „…Kierownik mnie zna. Tylko nie odbierze telefonu w środku nocy.”
- **OBOK** 6.1.1: „Którą sprawę wybierzesz?” -> „Córkę. Potem tu przyjdę. I proszę nie uznać spóźnienia za dowód, że mi nie zależy.…”
- **PROZNIA** 6.1.1: dopytanie „Którą sprawę wybierzesz?” nie zaczepia się o: „…Ale rano będę też musiała odprowadzić małą. Nie rozdwoję się między pralnią a okienkiem.”
- **OBOK** 6.2: „Czyje nazwisko widnieje na papierach wypłaty?” -> „Jeśli chodzi o zbiorczy, będzie I. Bell. Ona odbiera za wszystkie, ale nie przepracowała z…”
- **LUZNE** 6.2: dopytanie „Czyje nazwisko widnieje na papierach wypłaty?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Kierownik mnie zna. Tylko nie odbierze telefonu w środku nocy.”
- **OBOK** 6.2.1: „Jak oddzielić twoją część od pozostałych?” -> „Vale na kopercie i trzy noce na kartce. Sto dwadzieścia dziewięć, wciąż ta sama suma.…”
- **PROZNIA** 6.2.1: dopytanie „Jak oddzielić twoją część od pozostałych?” nie zaczepia się o: „…Bell. Ona odbiera za wszystkie, ale nie przepracowała za mnie tych nocy.”
- **LUZNE** 7.1: dopytanie „Ada już zdrowa?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Iris skreśliła całą noc. Cztery godziny prania poszły za darmo.”

## d2_jonah (dzień 2, Jonah Pike, 22, drzewo)

- **OBOK** 1: „Jak wygląda plecak?” -> „Czarny, z pękniętą klamrą. Nie odpina się porządnie, trzeba trzymać obie połówki.…”
- **OBOK** 1.1: „Da się go zamknąć?” -> „Da, mimo pękniętej klamry. Pasek przeciągam drugi raz. Jak ktoś pociągnie za klamrę, zosta…”
- **LUZNE** 1.1: dopytanie „Da się go zamknąć?” nie zaczepia się o: „…Czarny, z pękniętą klamrą. Nie odpina się porządnie, trzeba trzymać obie połówki.”
- **OBOK** 1.1.1: „Nie boisz się, że coś wypadnie?” -> „To ważne trzymam od strony pleców. Tam nikt nie sięgnie. Chyba że zostawię cały plecak, ja…”
- **PROZNIA** 1.1.1: dopytanie „Nie boisz się, że coś wypadnie?” nie zaczepia się o: „…Pasek przeciągam drugi raz. Jak ktoś pociągnie za klamrę, zostaje mu w ręce pół zapięcia.”
- **OBOK** 1.2: „Co jest w środku?” -> „Ładowarka, książka, kupa starych biletów. I pudełko, w kieszeni od strony pleców.…”
- **LUZNE** 1.2: dopytanie „Co jest w środku?” nie zaczepia się o: „…Czarny, z pękniętą klamrą. Nie odpina się porządnie, trzeba trzymać obie połówki.”
- **OBOK** 1.2.1: „Co jest w pudełku?” -> „Pierścionek. Dla June. O siódmej chcę zapytać. Tylko nie mów tego tak głośno, bo jeszcze s…”
- **OBOK** 2: „Gdzie go zostawiłeś?” -> „W jedenastce, wczoraj wieczorem, pod składanym siedzeniem przy drzwiach. June stała obok i…”
- **OBOK** 2.1: „June jechała z tobą?” -> „Moja dziewczyna. Wysiadłem za nią, a plecak pojechał dalej. Zachowałem się jak pies za kie…”
- **OBOK** 2.1.1: „Wie, że tu jesteś?” -> „Myśli, że mam kurs. Jestem kurierem, więc to nawet brzmi prawdopodobnie. Poza tym to prawd…”
- **PROZNIA** 2.1.1: dopytanie „Wie, że tu jesteś?” nie zaczepia się o: „…Zachowałem się jak pies za kiełbasą. Nie, źle to brzmi.”
- **OBOK** 2.2: „Kiedy zauważyłeś zgubę?” -> „W domu. Chciałem sprawdzić kieszeń na plecach i złapałem za powietrze. Przez chwilę sprawd…”
- **PROZNIA** 2.2: dopytanie „Kiedy zauważyłeś zgubę?” nie zaczepia się o: „…W jedenastce, wczoraj wieczorem, pod składanym siedzeniem przy drzwiach. June stała obok i chciałem zrobić miejsce.”
- **PROZNIA** 2.2.1: dopytanie „Wracałeś na przystanek?” nie zaczepia się o: „…Chciałem sprawdzić kieszeń na plecach i złapałem za powietrze. Przez chwilę sprawdzałem jeszcze raz.”
- **OBOK** 3: „Co ma się wydarzyć o siódmej?” -> „June wraca z piekarni na kawę. Wtedy poproszę ją o rękę. Znaczy, jeśli będę miał czym.…”
- **OBOK** 3.1: „Czemu akurat podczas kawy?” -> „Wtedy jesteśmy sami i ona jeszcze nie zaczyna opowiadać, co trzeba naprawić. Później się n…”
- **PROZNIA** 3.1: dopytanie „Czemu akurat podczas kawy?” nie zaczepia się o: „…Wtedy poproszę ją o rękę. Znaczy, jeśli będę miał czym.”
- **LUZNE** 3.1.1: dopytanie „Będzie po pracy. Nie lepiej dać jej odpocząć?” nie zaczepia się o: „…Wtedy jesteśmy sami i ona jeszcze nie zaczyna opowiadać, co trzeba naprawić. Później się nie wcisnę z pytaniem.”
- **OBOK** 3.2: „Masz przygotowane słowa?” -> „Na serwetce. Trzy wersje, dwie skreślone. Trzecia jest krótka i przez to najgorsza.…”
- **PROZNIA** 3.2: dopytanie „Masz przygotowane słowa?” nie zaczepia się o: „…Wtedy poproszę ją o rękę. Znaczy, jeśli będę miał czym.”
- **OBOK** 3.2.1: „Co jest złego w krótkiej?” -> „Że potem od razu ona odpowiada. W długich mogłem jeszcze chwilę gadać.…”
- **OBOK** 4: „Dlaczego plecak musi wrócić jeszcze przed ranem?” -> „Mam w nim prezent dla June. Nie zastąpię go po drodze, nawet gdyby sklep był otwarty.…”
- **OBOK** 4.1: „Jest drogi?” -> „Dla mnie tak. Dla jubilera pewnie nie. Patrzył, jakbym kupował baterię, a ja się spociłem.…”
- **PROZNIA** 4.1: dopytanie „Jest drogi?” nie zaczepia się o: „…Mam w nim prezent dla June. Nie zastąpię go po drodze, nawet gdyby sklep był otwarty.”
- **PROZNIA** 4.1.1: dopytanie „Zapłaciłeś już całość?” nie zaczepia się o: „…Dla jubilera pewnie nie. Patrzył, jakbym kupował baterię, a ja się spociłem.”
- **OBOK** 4.2: „June będzie zła za tę zgubę?” -> „Za plecak nie. Za to, że chodzę całą noc i nic nie mówię, już może. Ona lubi wiedzieć, o c…”
- **OBOK** 4.2.1: „Powiesz jej potem?” -> „O plecaku tak. O wszystkim naraz nie. Jeszcze zanim odpowie, będę musiał jej tłumaczyć pół…”
- **LUZNE** 4.2.1: dopytanie „Powiesz jej potem?” nie zaczepia się o: „…Za to, że chodzę całą noc i nic nie mówię, już może. Ona lubi wiedzieć, o co się martwić.”
- **OBOK** 5: „Jak udowodnisz, że plecak jest twój?” -> „Opiszę zawartość. Tylko nie wyciągaj tego małego pudełka na widok wszystkich.…”
- **OBOK** 5.1: „Co ci przeszkadza w pudełku na ladzie?” -> „Ktoś zobaczy, ktoś skojarzy June. Piekarnia jest jak gazeta, tylko szybciej roznoszą wiado…”
- **OBOK** 5.1.1: „Wszyscy ją znają?” -> „Ci, co wstają wcześnie. Ja wcześniej nie wstawałem. Teraz znam nawet ceny bułek, których n…”
- **PROZNIA** 5.1.1: dopytanie „Wszyscy ją znają?” nie zaczepia się o: „…Ktoś zobaczy, ktoś skojarzy June. Piekarnia jest jak gazeta, tylko szybciej roznoszą wiadomości.”
- **OBOK** 5.2: „Co jeszcze jest charakterystycznego w zawartości?” -> „Bilety mają daty na odwrocie. Z kursów z June. To nie makulatura, proszę nie wyrzucać.…”
- **LUZNE** 5.2.1: dopytanie „Ona o nich wie?” nie zaczepia się o: „…Z kursów z June. To nie makulatura, proszę nie wyrzucać.”
- **OBOK** 6: „Co takiego zależy od zawartości plecaka?” -> „Chcę oświadczyć się June. Jeśli odmówi, to odmówi. Tylko chciałbym usłyszeć to od niej, ni…”
- **PROZNIA** 6.1: dopytanie „Rozmawialiście o ślubie?” nie zaczepia się o: „…Jeśli odmówi, to odmówi. Tylko chciałbym usłyszeć to od niej, nie od zamkniętego magazynu.”
- **OBOK** 6.1.1: „Może nie chce niespodzianki?” -> „Może. Wiesz co, tego już tutaj nie rozwiążę. Najpierw odzyskam plecak, potem będę pytał wł…”
- **OBOK** 6.2: „Wrócisz tutaj po wszystkim?” -> „Jeśli się uda, powiem. Jak nie, też pewnie przyjdę, bo nadal mam pękniętą klamrę i głowę g…”
- **PROZNIA** 6.2: dopytanie „Wrócisz tutaj po wszystkim?” nie zaczepia się o: „…Jeśli odmówi, to odmówi. Tylko chciałbym usłyszeć to od niej, nie od zamkniętego magazynu.”
- **LUZNE** 6.2.1: dopytanie „Naprawisz ją wreszcie?” nie zaczepia się o: „…Jeśli się uda, powiem. Jak nie, też pewnie przyjdę, bo nadal mam pękniętą klamrę i głowę gdzie indziej.”
- **OBOK** 7.1: „A raty będziecie płacić razem?” -> „Ja zapłacę. Wezmę kursy. Wiem, brzmi to łatwo, kiedy jeszcze nie trzeba wsiadać na rower.…”
- **LUZNE** 7.1: dopytanie „A raty będziecie płacić razem?” nie zaczepia się o: „…Kazałaby oddać pierścionek i kupić pralkę. Chciałem raz przynieść coś, co nie jest potrzebne do sprzątania.”

## d2_hana (dzień 2, Hana Moreau, 26, drzewo)

- **OBOK** 1: „Jak rozpoznać futerał?” -> „Czarny, sztywny. Rączka owinięta czerwoną taśmą, bo skóra się przetarła.…”
- **OBOK** 1.1: „Ma jakiś znak na zewnątrz?” -> „Zielona naklejka. Z boku trochę zdrapana. Jest na wierzchu futerału, nie na skrzypcach.…”
- **PROZNIA** 1.1: dopytanie „Ma jakiś znak na zewnątrz?” nie zaczepia się o: „…Czarny, sztywny. Rączka owinięta czerwoną taśmą, bo skóra się przetarła.”
- **OBOK** 1.2: „Co leży obok skrzypiec?” -> „Kalafonia, jedwabna szmatka i nuty Mendelssohna. Na nutach moje zapiski ołówkiem.…”
- **LUZNE** 1.2: dopytanie „Co leży obok skrzypiec?” nie zaczepia się o: „…Czarny, sztywny. Rączka owinięta czerwoną taśmą, bo skóra się przetarła.”
- **OBOK** 1.2.1: „Po czym poznasz własne zapiski?” -> „Wszystko poprawiam, a potem ścieram. Papier jest prawie przezroczysty w miejscach, gdzie n…”
- **OBOK** 2.1: „O czym rozmawiałyście?” -> „O przesłuchaniu. Upiekła ciasto na potem. Nie wiem jeszcze, co będzie potem, ale ciasto ju…”
- **PROZNIA** 2.1: dopytanie „O czym rozmawiałyście?” nie zaczepia się o: „…Mama zadzwoniła, wstałam z telefonem przy uchu i wysiadłam. Futerał stał między moimi nogami i został w tramwaju.”
- **OBOK** 2.1.1: „Powiesz jej o zgubie?” -> „Jak odzyskam. Inaczej zadzwoni do wszystkich i będę musiała uspokajać ją zamiast siebie.…”
- **LUZNE** 2.1.1: dopytanie „Powiesz jej o zgubie?” nie zaczepia się o: „…Upiekła ciasto na potem. Nie wiem jeszcze, co będzie potem, ale ciasto już jest.”
- **OBOK** 2.2: „W którym miejscu siedziałaś?” -> „W czwórce, przy oknie. Futerał stał pionowo, rączką do mnie. Wiem, jak go zostawiłam, nie …”
- **PROZNIA** 2.2: dopytanie „W którym miejscu siedziałaś?” nie zaczepia się o: „…Mama zadzwoniła, wstałam z telefonem przy uchu i wysiadłam. Futerał stał między moimi nogami i został w tramwaju.”
- **LUZNE** 3.1: dopytanie „Od kogo je masz?” nie zaczepia się o: „…Gram na nich od siedmiu lat. Proszę nie robić z tego czegoś dziwnego.”
- **PROZNIA** 3.1.1: dopytanie „Pamiętasz nazwisko lutnika?” nie zaczepia się o: „…Dawno temu. Znam każdy dźwięk tego instrumentu.”
- **OBOK** 3.2.1: „Dlaczego od razu nie powiedziałaś?” -> „Bo wtedy patrzy się tylko na datę. A ja przez cały czas pilnowałam tych skrzypiec. Do wczo…”
- **PROZNIA** 3.2.1: dopytanie „Dlaczego od razu nie powiedziałaś?” nie zaczepia się o: „…Termin minął, a komisja zbiera się w czwartek. Bez nich nie zagram przesłuchania.”
- **OBOK** 3.2.1.1: „Znajomość instrumentu nie przedłuża wypożyczenia.” -> „Wiem. Nie udowadniam, że termin nie minął. Proszę, żeby pozwolić mi zagrać mimo tego.…”
- **PROZNIA** 3.2.1.1: dopytanie „Znajomość instrumentu nie przedłuża wypożyczenia.” nie zaczepia się o: „…A ja przez cały czas pilnowałam tych skrzypiec. Do wczoraj.”
- **OBOK** 3.2.1.1.1: „Powiesz komisji, że skłamałaś o własności?” -> „Jeśli zapytają, odpowiem. Nie obiecam teraz, że sama zacznę od najgorszego.…”
- **PROZNIA** 3.2.1.1.1: dopytanie „Powiesz komisji, że skłamałaś o własności?” nie zaczepia się o: „…Nie udowadniam, że termin nie minął. Proszę, żeby pozwolić mi zagrać mimo tego.”
- **OBOK** 4: „Co czeka cię o ósmej?” -> „Przesłuchanie do orkiestry. Weszłam z listy rezerwowej. Ktoś zrezygnował i zadzwonili do m…”
- **PROZNIA** 4.1: dopytanie „Możesz dostać inny termin?” nie zaczepia się o: „…Weszłam z listy rezerwowej. Ktoś zrezygnował i zadzwonili do mnie.”
- **OBOK** 4.1.1: „Masz jak pożyczyć inne skrzypce?” -> „O tej porze nie. Nawet gdybym miała, musiałabym się przyzwyczaić. To nie jest zamiana para…”
- **LUZNE** 4.1.1: dopytanie „Masz jak pożyczyć inne skrzypce?” nie zaczepia się o: „…Albo przyjdę z instrumentem, albo zagra następna osoba. Tam nie zostawia się pustego krzesła.”
- **OBOK** 4.2: „Jak długo się przygotowujesz?” -> „Teraz po dziesięć godzin dziennie. Sąsiedzi wiedzą, w którym miejscu mi nie wychodzi, pewn…”
- **PROZNIA** 4.2: dopytanie „Jak długo się przygotowujesz?” nie zaczepia się o: „…Weszłam z listy rezerwowej. Ktoś zrezygnował i zadzwonili do mnie.”
- **LUZNE** 4.2.1: dopytanie „A dziś udało się przespać choć chwilę?” nie zaczepia się o: „…Teraz po dziesięć godzin dziennie. Sąsiedzi wiedzą, w którym miejscu mi nie wychodzi, pewnie lepiej ode mnie.”
- **OBOK** 5: „Co zrobisz, jeśli znajdzie się podobny futerał?” -> „Poproszę o obejrzenie, nie zabiorę w ciemno. Zewnętrzne ślady można pomylić. Moje nuty roz…”
- **OBOK** 5.1: „A sam instrument?” -> „Też. Sposób, w jaki odpowiada pod smyczkiem. Tego nie potrafię wpisać w rubrykę, ale usłys…”
- **LUZNE** 5.1: dopytanie „A sam instrument?” nie zaczepia się o: „…Zewnętrzne ślady można pomylić. Moje nuty rozpoznam.”
- **OBOK** 5.1.1: „Musiałabyś tu zagrać?” -> „Wystarczy kilka dźwięków. Jeśli nie wolno, pokaż nuty. Nie będę urządzać koncertu kolejce.…”
- **PROZNIA** 5.1.1: dopytanie „Musiałabyś tu zagrać?” nie zaczepia się o: „…Sposób, w jaki odpowiada pod smyczkiem. Tego nie potrafię wpisać w rubrykę, ale usłyszę od razu.”
- **OBOK** 5.2: „Co sprawdzisz najpierw?” -> „Czy mostek stoi. Potem smyczek. Naklejki mogą się odkleić, tego nie naprawię przed ósmą.…”
- **PROZNIA** 5.2: dopytanie „Co sprawdzisz najpierw?” nie zaczepia się o: „…Zewnętrzne ślady można pomylić. Moje nuty rozpoznam.”
- **PROZNIA** 5.2.1: dopytanie „Myślisz, że coś się stało po drodze?” nie zaczepia się o: „…Potem smyczek. Naklejki mogą się odkleić, tego nie naprawię przed ósmą.”
- **OBOK** 6: „Dlaczego właśnie ta orkiestra?” -> „Bo mnie zaprosili. Nie dlatego, że ktoś zna mamę albo nauczycielkę. Chcę wejść i zagrać.…”
- **OBOK** 6.1: „Mama też przyjdzie?” -> „Czeka w domu z ciastem. Będzie dzwoniła, zanim komisja skończy pisać. Już to wiem.…”
- **LUZNE** 6.1: dopytanie „Mama też przyjdzie?” nie zaczepia się o: „…Nie dlatego, że ktoś zna mamę albo nauczycielkę. Chcę wejść i zagrać.”
- **OBOK** 6.1.1: „Co jej powiesz, jeśli nie dostaniesz miejsca?” -> „Że zagrałam. Tyle chcę móc powiedzieć. Resztę da się jakoś przełknąć razem z tym ciastem.…”
- **LUZNE** 6.1.1: dopytanie „Co jej powiesz, jeśli nie dostaniesz miejsca?” nie zaczepia się o: „…Będzie dzwoniła, zanim komisja skończy pisać. Już to wiem.”
- **LUZNE** 6.2: dopytanie „A jeśli trzeba będzie wybrać między przesłuchaniem a oddaniem skrzypiec?” nie zaczepia się o: „…Nie dlatego, że ktoś zna mamę albo nauczycielkę. Chcę wejść i zagrać.”
- **LUZNE** 6.2.1: dopytanie „To obietnica czy prośba o wyjątek?” nie zaczepia się o: „…Chcę je oddać po przesłuchaniu. Nie umiem zrobić obu rzeczy naraz.”
- **PROZNIA** 7.1: dopytanie „Konserwatorium wie o zgubie?” nie zaczepia się o: „…Komisja zbiera się w czwartek. Powinnam była zgłosić to wcześniej, zanim zostałam z cudzym instrumentem i wymówką.”

## d2_ines (dzień 2, Ines Calloway, 61, drzewo)

- **OBOK** 1: „Jak wygląda parasol?” -> „Czarny, automatyczny. Nie składany do torebki, pełny. Proszę nie otwierać nad papierami.…”
- **LUZNE** 1.1: dopytanie „Jaka rączka?” nie zaczepia się o: „…Nie składany do torebki, pełny. Proszę nie otwierać nad papierami.”
- **PROZNIA** 1.1.1: dopytanie „Wygodnie się ją trzyma?” nie zaczepia się o: „…Drewniana, w kształcie kaczki. Kaczka nie jest ozdobą doczepioną do rączki, tylko samą rączką.”
- **OBOK** 1.2: „Co odróżnia go od takiego samego?” -> „Dziób odłamany z lewej strony. Nie od deszczu. Już taki kupiłam, po wichurze.…”
- **LUZNE** 1.2: dopytanie „Co odróżnia go od takiego samego?” nie zaczepia się o: „…Nie składany do torebki, pełny. Proszę nie otwierać nad papierami.”
- **OBOK** 1.2.1: „Kupiłaś uszkodzony?” -> „Tańszy. Deszcz wpada od góry, nie przez kaczy dziób. Do tego łatwiej go rozpoznać.…”
- **PROZNIA** 2.1: dopytanie „Próbowałaś dogonić tramwaj?” nie zaczepia się o: „…Wysiadłam na pętli z torbami. Parasol przypomniał się za zakrętem.”
- **OBOK** 2.1.1: „Co zrobiłaś zamiast tego?” -> „Spytałam, dokąd oddają zguby. Proszę, jestem. Bez parasola, ale bez zadyszki.…”
- **LUZNE** 2.1.1: dopytanie „Co zrobiłaś zamiast tego?” nie zaczepia się o: „…Tramwaj ma szyny. Wynik był do przewidzenia.”
- **OBOK** 2.2: „Po co jechałaś na pętlę?” -> „Rozwiesić ogłoszenia. Ludzie czekają i czytają, nawet jeśli nie zamierzali.…”
- **LUZNE** 2.2.1: dopytanie „Tam też pytasz o zgodę?” nie zaczepia się o: „…Rozwiesić ogłoszenia. Ludzie czekają i czytają, nawet jeśli nie zamierzali.”
- **OBOK** 3: „Co ma być na ogłoszeniu?” -> „„Szukam kota, rudego, od zimy. Odpowiedzi na słupie przy wejściu”. Krótkie. Długich nie cz…”
- **OBOK** 3.1: „Dlaczego odpowiedzi na słupie?” -> „Bo tam ktoś zobaczył ogłoszenie i tam wróci. Nie każdy chce zostawiać telefon obcej osobie…”
- **LUZNE** 3.1: dopytanie „Dlaczego odpowiedzi na słupie?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Krótkie. Długich nie czytają.”
- **OBOK** 3.2: „Jak długo ma wisieć?” -> „Dopóki ktoś odpowiada. Sama zdejmę, kiedy będzie niepotrzebne. Nie zostawię strzępów na zi…”
- **OBOK** 3.2.1: „Jak poznasz, że odpowiedź jest dla ciebie?” -> „Będzie pod moją kartką. Jeśli masz wątpliwość, odłóż. Nie trzeba jej najpierw rozwiązywać …”
- **LUZNE** 3.2.1: dopytanie „Jak poznasz, że odpowiedź jest dla ciebie?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Sama zdejmę, kiedy będzie niepotrzebne. Nie zostawię strzępów na zimę.”
- **OBOK** 4.1: „Od zimy nie ma żadnego śladu?” -> „Są odpowiedzi na kartkach. Dlatego dalej wieszam. Nie dlatego, że lubię obchodzić wszystki…”
- **LUZNE** 4.1: dopytanie „Od zimy nie ma żadnego śladu?” nie zaczepia się o: „…Rudy, z białą łapką. Na wołanie nie przychodzi.”
- **OBOK** 4.1.1: „Co ludzie piszą?” -> „Godziny, numery linii. Raz „jeszcze nie”. O samym kocie niewiele, uprzedzę następne pytani…”
- **PROZNIA** 4.1.1: dopytanie „Co ludzie piszą?” nie zaczepia się o: „…Dlatego dalej wieszam. Nie dlatego, że lubię obchodzić wszystkie pętle.”
- **OBOK** 5: „Dlaczego zależy ci na naszym słupie?” -> „Stoi przy wejściu. Ludzie go mijają, kiedy patrzą na światło okienka. Nikt nie musi się sp…”
- **LUZNE** 5.1: dopytanie „A pieczątka biura co zmieni?” nie zaczepia się o: „…Ludzie go mijają, kiedy patrzą na światło okienka. Nikt nie musi się specjalnie zatrzymywać.”
- **OBOK** 5.1.1: „Chcesz, żeby wyglądało na urzędowe?” -> „Na dozwolone. Nie proszę o podpis pod tym, czego nie wiesz. Proszę o zgodę na słup.…”
- **PROZNIA** 5.1.1: dopytanie „Chcesz, żeby wyglądało na urzędowe?” nie zaczepia się o: „…Mniej chętnie zerwą. Papierek z pieczątką bywa dla niektórych ważniejszy od właściciela papierka.”
- **LUZNE** 5.2: dopytanie „Inne słupy nie wystarczą?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Ludzie go mijają, kiedy patrzą na światło okienka. Nikt nie musi się specjalnie zatrzymywać.”
- **OBOK** 5.2.1: „Kto ma wrócić?” -> „Osoba, która przeczytała kartkę. To nie jest nazwisko, które można wpisać do księgi.…”
- **OBOK** 6: „Co mam robić z odpowiedziami?” -> „Zostawić pod ogłoszeniem albo odłożyć dla mnie, jeśli przemokną. Bez otwierania przy kolej…”
- **OBOK** 6.1: „Jak często je sprawdzasz?” -> „Kiedy przejeżdżam. Nie będę dzwoniła co godzinę. Szyba ma służyć też innym ludziom.…”
- **LUZNE** 6.1: dopytanie „Jak często je sprawdzasz?” nie zaczepia się o: „…Zostawić pod ogłoszeniem albo odłożyć dla mnie, jeśli przemokną. Bez otwierania przy kolejce.”
- **LUZNE** 6.1.1: dopytanie „A jeśli długo nie przyjdziesz?” nie zaczepia się o: „…Nie będę dzwoniła co godzinę. Szyba ma służyć też innym ludziom.”
- **OBOK** 6.2: „A gdy ktoś będzie pytał, kto je odbiera?” -> „Powiedz, że ogłoszenie wisi na słupie. To akurat może sprawdzić sam, bez twojej pomocy.…”
- **LUZNE** 6.2: dopytanie „A gdy ktoś będzie pytał, kto je odbiera?” nie zaczepia się o: „…Zostawić pod ogłoszeniem albo odłożyć dla mnie, jeśli przemokną. Bez otwierania przy kolejce.”
- **PROZNIA** 6.2.1: dopytanie „Mam ukrywać twoje nazwisko?” nie zaczepia się o: „…Powiedz, że ogłoszenie wisi na słupie. To akurat może sprawdzić sam, bez twojej pomocy.”
- **OBOK** 7.1: „Czego mam się spodziewać po odpowiedziach?” -> „Czasem ktoś zostawia coś przy okienku. Jeśli to się stanie, nie pokazuj od razu całej kole…”
- **PROZNIA** 7.1: dopytanie „Czego mam się spodziewać po odpowiedziach?” nie zaczepia się o: „…I nie, to nie tylko sprawa kota. Nie podam cudzych nazwisk, żeby uzasadnić własny parasol.”

## d3_maz_i_siostra (dzień 3, Evan Doyle, 37, i Lena Brandt, 31, drzewo)

- **OBOK** 1: „Jak rozpoznać telefon?” -> „Czarny, w skórzanym etui. Kupiłem to etui Mai na rocznicę.…”
- **OBOK** 1.1: „Ma jakieś uszkodzenie?” -> „Róg etui się odkleja. Mówiłem, żeby podkleiła, ale odkładała. Teraz akurat to się przyda.…”
- **PROZNIA** 1.1: dopytanie „Ma jakieś uszkodzenie?” nie zaczepia się o: „…Czarny, w skórzanym etui. Kupiłem to etui Mai na rocznicę.”
- **LUZNE** 1.1.1: dopytanie „Lena, też je poznasz?” nie zaczepia się o: „…Mówiłem, żeby podkleiła, ale odkładała. Teraz akurat to się przyda.”
- **LUZNE** 1.2: dopytanie „Znasz kod do telefonu?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Czarny, w skórzanym etui. Kupiłem to etui Mai na rocznicę.”
- **OBOK** 1.2.1: „To dlaczego nie chcesz po prostu poczekać na nią z odbiorem?” -> „Bo zaginęła. Nie mogę czekać na osobę, której szukamy. Telefon może pomóc ją znaleźć.…”
- **LUZNE** 1.2.1: dopytanie „To dlaczego nie chcesz po prostu poczekać na nią z odbiorem?” nie zaczepia się o: „…Nie miała kodu. Nie mieliśmy przed sobą tajemnic.”
- **OBOK** 2.1: „Co dokładnie powiedział Reyes?” -> „Że telefon jest w biurze. We wtorek sprawa idzie dalej, więc potrzebuję go teraz, zanim za…”
- **OBOK** 2.1.1: „Dalej czy do zamknięcia? Na wejściu mówisz, że ją zamkną.” -> „Dla mnie to jedno. Przestanę mieć jednego człowieka, do którego mogę zadzwonić. Tak to roz…”
- **LUZNE** 2.2: dopytanie „Maya kontaktowała się z tobą po zaginięciu?” nie zaczepia się o: „…Motorniczy go oddał, policja zna kurs. Evan rozmawiał z Reyesem, ja nie.”
- **OBOK** 3.1: „Pracuje nocami?” -> „Jest elektryczką. Awarie zdarzają się o różnych porach. Nie pytałem o każdą klatkę schodow…”
- **LUZNE** 3.1.1: dopytanie „A o godzinę powrotu?” nie zaczepia się o: „…Awarie zdarzają się o różnych porach. Nie pytałem o każdą klatkę schodową.”
- **LUZNE** 3.2: dopytanie „Lena, co możesz potwierdzić?” nie zaczepia się o: „…Wyszła do pracy. Żadnej kłótni, zwyczajny wieczór.”
- **OBOK** 3.2.1: „W takim razie czemu przyszłaś z nim?” -> „Żeby nie wyszedł stąd z telefonem, zanim zdążę powiedzieć, że to rzecz Mai. Jej, nie jego.…”
- **LUZNE** 3.2.1: dopytanie „W takim razie czemu przyszłaś z nim?” nie zaczepia się o: „…Nie było mnie przy kolacji. Nie będę potwierdzać czegoś tylko dlatego, że Evan mówi pełnymi zdaniami.”
- **OBOK** 4: „Co zrobisz z telefonem po odbiorze?” -> „Zaniosę Reyesowi na komisariat przy Rynku. Jeszcze tej nocy.…”
- **OBOK** 4.1: „A jeśli zostanie tutaj do odbioru przez policję?” -> „Stracimy czas. Sto dolarów od ręki, bez wpisu, i sam go zaniosę. Nie trzeba czekać na papi…”
- **LUZNE** 4.1: dopytanie „A jeśli zostanie tutaj do odbioru przez policję?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zaniosę Reyesowi na komisariat przy Rynku. Jeszcze tej nocy.”
- **OBOK** 4.1.1: „Za co te sto dolarów?” -> „Za kłopot. Za to, że zajmujesz się naszą sprawą po nocy. Nie przypisuj temu od razu czegoś…”
- **OBOK** 4.2: „Lena, co ty zrobisz po odbiorze?” -> „Schowam u siebie. Jak Maya się odezwie, oddam jej. Nie muszę czytać, żeby przechować.…”
- **LUZNE** 4.2: dopytanie „Lena, co ty zrobisz po odbiorze?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zaniosę Reyesowi na komisariat przy Rynku. Jeszcze tej nocy.”
- **LUZNE** 4.2.1: dopytanie „Nawet jeśli policja o niego poprosi?” nie zaczepia się o: „…Jak Maya się odezwie, oddam jej. Nie muszę czytać, żeby przechować.”
- **OBOK** 5: „Dlaczego nie możecie ustalić tego między sobą?” -> „Bo on pyta, gdzie jest Maya, a ja pytam, czego ona chce. I każde uważa, że drugie nie odpo…”
- **OBOK** 5.1.1: „Przed chwilą mówiłeś, że nie było kłótni. Z czego ma się uspokoić?” -> „Ze wszystkiego. Praca, zmęczenie. Nie powiedziałem, że chodzi o mnie.…”
- **LUZNE** 5.2: dopytanie „Możesz mówić za siostrę?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Bo on pyta, gdzie jest Maya, a ja pytam, czego ona chce. I każde uważa, że drugie nie odpowiada.”
- **OBOK** 5.2.1: „Co proponujesz, jeśli telefon zostanie tutaj?” -> „Żeby czekał na nią. Bez obietnicy, że przyjdzie. Ja takiej obietnicy nie złożę.…”
- **LUZNE** 5.2.1: dopytanie „Co proponujesz, jeśli telefon zostanie tutaj?” nie zaczepia się o: „…Nie. Dlatego nie chcę oddawać jej rzeczy komuś, kto twierdzi, że może.”
- **OBOK** 6: „Kto ma podpisać odbiór?” -> „Ja, Evan Doyle. Jestem jej mężem. Nie próbuję się tutaj ukrywać.…”
- **LUZNE** 6.1: dopytanie „Podpis daje ci prawo czy tylko zapisuje, kto zabrał rzecz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Jestem jej mężem. Nie próbuję się tutaj ukrywać.”
- **OBOK** 6.1.1: „Lena, podpiszesz swoim nazwiskiem?” -> „Brandt. Nie Doyle. Nadal jestem jej siostrą, zanim to też zacznie być przeszkodą.…”
- **LUZNE** 6.1.1: dopytanie „Lena, podpiszesz swoim nazwiskiem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Dla mnie to wystarczy. Dla ciebie najwyraźniej nie.”
- **OBOK** 6.2: „A jeśli odbiór wymaga zgody Mai?” -> „To nie wydasz go nikomu. Nie możemy jej spytać, właśnie dlatego tu stoimy.…”
- **LUZNE** 6.2: dopytanie „A jeśli odbiór wymaga zgody Mai?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Jestem jej mężem. Nie próbuję się tutaj ukrywać.”
- **LUZNE** 6.2.1: dopytanie „Potrafisz zaakceptować taki wynik?” nie zaczepia się o: „…To nie wydasz go nikomu. Nie możemy jej spytać, właśnie dlatego tu stoimy.”
- **OBOK** 7: „Lena, dlaczego kazałaś Mai nie wracać do domu?” -> „Zadzwoniła przestraszona. Napisałam, że przyjadę w sobotę. Nie daj mu telefonu, bo wtedy p…”
- **LUZNE** 7.1: dopytanie „Evan, czego Maya się bała?” nie zaczepia się o: „…Napisałam, że przyjadę w sobotę. Nie daj mu telefonu, bo wtedy pójdzie pytać pod moje drzwi.”
- **LUZNE** 7.2: dopytanie „Potwierdzasz, że to twój numer?” nie zaczepia się o: „…Napisałam, że przyjadę w sobotę. Nie daj mu telefonu, bo wtedy pójdzie pytać pod moje drzwi.”

## d3_dana (dzień 3, Dana Ruiz, 38, drzewo)

- **OBOK** 1: „Jak rozpoznać budzik?” -> „Blaszany, okrągły, dwa dzwonki na górze. Wygląda, jakby miał zaraz krzyczeć. I zwykle ma.…”
- **OBOK** 1.1: „Jakiś znak szczególny?” -> „Na spodzie naklejka „Mama”. Od mamy go dostałam, więc podpisałam, żeby nikt nie myślał, że…”
- **PROZNIA** 1.1: dopytanie „Jakiś znak szczególny?” nie zaczepia się o: „…Wygląda, jakby miał zaraz krzyczeć. I zwykle ma.”
- **OBOK** 1.1.1: „Długo ją tam trzymasz?” -> „Dwanaście lat. Naklejka przetrzymała niejedną naprawę, więc nie będę jej teraz zdzierać.…”
- **LUZNE** 1.1.1: dopytanie „Długo ją tam trzymasz?” nie zaczepia się o: „…Na spodzie naklejka Mama. Od mamy go dostałam, więc podpisałam, żeby nikt nie myślał, że to sprzęt zajezdni.”
- **OBOK** 1.2: „Jak wygląda wskazówka alarmu?” -> „Jest czerwona, krzywa. Stoi na czwartą piętnaście. Prostowałam ją kombinerkami, bez konkur…”
- **OBOK** 2: „Po co wozić budzik tramwajem?” -> „Nocowałam u siostry. Wzięłam go, żeby rano nie rozbudzać całego domu szukaniem telefonu.…”
- **OBOK** 2.1: „Czemu u siostry?” -> „Pilnowałam dzieci. Ona miała nockę, ja trójkę na głowie. Budzik chyba miał spokojniejszy w…”
- **LUZNE** 2.1.1: dopytanie „Dzieci nie chciały go zatrzymać?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Ona miała nockę, ja trójkę na głowie. Budzik chyba miał spokojniejszy wieczór.”
- **LUZNE** 2.2: dopytanie „Gdzie został w szóstce?” nie zaczepia się o: „…Nocowałam u siostry. Wzięłam go, żeby rano nie rozbudzać całego domu szukaniem telefonu.”
- **OBOK** 3: „O której zaczynasz pracę?” -> „Za pięć piąta mam już leżeć pod tramwajem. Kwadrans po czwartej pobudka, potem kawa i w dr…”
- **OBOK** 3.1: „Co się stanie, jeśli zaśpisz?” -> „Ktoś zrobi moją robotę i nie będzie zadowolony. Tramwaj nie powie: Dana śpi, pojadę jutro.…”
- **LUZNE** 3.1: dopytanie „Co się stanie, jeśli zaśpisz?” nie zaczepia się o: „…Za pięć piąta mam już leżeć pod tramwajem. Kwadrans po czwartej pobudka, potem kawa i w drogę.”
- **PROZNIA** 3.1.1: dopytanie „Nie mogą zadzwonić?” nie zaczepia się o: „…Ktoś zrobi moją robotę i nie będzie zadowolony. Tramwaj nie powie: Dana śpi, pojadę jutro.”
- **OBOK** 3.2: „Długo jesteś w zajezdni?” -> „Jedenaście lat. Wiem, który zawias zaskrzypi, zanim otworzę drzwi.…”
- **LUZNE** 3.2: dopytanie „Długo jesteś w zajezdni?” nie zaczepia się o: „…Za pięć piąta mam już leżeć pod tramwajem. Kwadrans po czwartej pobudka, potem kawa i w drogę.”
- **OBOK** 3.2.1: „A o tym okienku coś wiesz?” -> „Tyle, że od miesiąca w gazecie wisiało „praca nocna, bez referencji”. Nikt się nie palił. …”
- **LUZNE** 3.2.1: dopytanie „A o tym okienku coś wiesz?” nie zaczepia się o: „…Jedenaście lat. Wiem, który zawias zaskrzypi, zanim otworzę drzwi.”
- **OBOK** 4: „Telefon nie wystarczy do budzenia?” -> „Wyłączam przez sen. Jedną ręką, nawet oczu nie otwieram. Do niczego innego nie mam takiego…”
- **OBOK** 4.1: „A ten czym cię pokonuje?” -> „Skacze po szafce. Trzeba go złapać. Jak już gonię blachę po pokoju, to jestem przytomna.…”
- **LUZNE** 4.1: dopytanie „A ten czym cię pokonuje?” nie zaczepia się o: „…Jedną ręką, nawet oczu nie otwieram. Do niczego innego nie mam takiego talentu.”
- **OBOK** 4.1.1: „Sąsiedzi też?” -> „Jeden tak. Przyszedł się skarżyć, potem przywykł. Teraz zostawia ogórki, budzenie ma grati…”
- **LUZNE** 4.1.1: dopytanie „Sąsiedzi też?” nie zaczepia się o: „…Trzeba go złapać. Jak już gonię blachę po pokoju, to jestem przytomna.”
- **PROZNIA** 4.2: dopytanie „Próbowałaś ustawić kilka alarmów?” nie zaczepia się o: „…Jedną ręką, nawet oczu nie otwieram. Do niczego innego nie mam takiego talentu.”
- **OBOK** 4.2.1: „Upierasz się przy nim, bo go znasz?” -> „Bo działa na mnie. Budzik może być sprawny i bezużyteczny. Tak jak mechanik przed kawą.…”
- **LUZNE** 4.2.1: dopytanie „Upierasz się przy nim, bo go znasz?” nie zaczepia się o: „…Wyłączyłam kilka alarmów. Nie będę płacić za dziesiąty, skoro ten jeden działa.”
- **OBOK** 5: „Skąd masz ten budzik?” -> „Od mamy, dwanaście lat temu. Inni dostają biżuterię, ja urządzenie do przerywania snu.…”
- **LUZNE** 5.1: dopytanie „Sama go wybrała?” nie zaczepia się o: „…Od mamy, dwanaście lat temu. Inni dostają biżuterię, ja urządzenie do przerywania snu.”
- **OBOK** 5.1.1: „Miała taki sam?” -> „Ten stał u niej w kuchni. Teraz u mnie. Dlatego wiem, jak powinien brzmieć.…”
- **PROZNIA** 5.2.1: dopytanie „Naprawa jeszcze się opłaca?” nie zaczepia się o: „…Mechanizm swoje przeszedł. Obudowa nadal daje radę, poza spotkaniem z podłogą.”
- **OBOK** 6: „Kto może potwierdzić, że jest twój?” -> „Siostra, sąsiad, pół zajezdni. Tylko każde będzie miało własną opowieść o tym hałasie.…”
- **LUZNE** 6.1: dopytanie „Przyprowadzisz kogoś, jeśli trzeba?” nie zaczepia się o: „…Siostra, sąsiad, pół zajezdni. Tylko każde będzie miało własną opowieść o tym hałasie.”
- **OBOK** 6.1.1: „Siostra jest teraz w domu?” -> „Wraca z nocki. Nie będę jej wyciągać od dzieci, jeśli wystarczy obejrzeć naklejkę.…”
- **PROZNIA** 6.1.1: dopytanie „Siostra jest teraz w domu?” nie zaczepia się o: „…Zamiast spać będziemy chodzić z papierami. Potem budzik obudzi osobę, która jeszcze nie zasnęła.”
- **OBOK** 6.2: „Co zrobisz, jeśli go nie wydam?” -> „Spróbuję zasnąć przy telefonie. Potem pewnie się spóźnię. Nie będę udawać, że mam tajny dr…”
- **LUZNE** 6.2: dopytanie „Co zrobisz, jeśli go nie wydam?” nie zaczepia się o: „…Siostra, sąsiad, pół zajezdni. Tylko każde będzie miało własną opowieść o tym hałasie.”
- **PROZNIA** 6.2.1: dopytanie „Kupisz nowy?” nie zaczepia się o: „…Potem pewnie się spóźnię. Nie będę udawać, że mam tajny drugi budzik.”
- **OBOK** 7: „Budzik jest gdzieś uszkodzony?” -> „Wgniecenie przy prawym dzwonku. Spadł z lodówki. Dlatego to prawa strona jest krzywa, nie …”
- **LUZNE** 7.1.1: dopytanie „Po upadku nadal dzwonił?” nie zaczepia się o: „…Żebym musiała wstać. Na szafce mogłam go zgasić przez sen, lodówki z łóżka nie dosięgnę.”
- **OBOK** 7.2: „Próbowałaś wyprostować obudowę?” -> „Zostawiłam. Wskazówkę poprawiłam, bo przeszkadzała w ustawianiu. Wgniecenie nie przeszkadz…”
- **PROZNIA** 7.2: dopytanie „Próbowałaś wyprostować obudowę?” nie zaczepia się o: „…Spadł z lodówki. Dlatego to prawa strona jest krzywa, nie obie.”
- **OBOK** 7.2.1: „Czyli nie musi wyglądać jak nowy?” -> „Ma mnie postawić na nogi. Jak przy okazji stoi krzywo, to jakoś wytrzymam.…”
- **LUZNE** 7.2.1: dopytanie „Czyli nie musi wyglądać jak nowy?” nie zaczepia się o: „…Wskazówkę poprawiłam, bo przeszkadzała w ustawianiu. Wgniecenie nie przeszkadza w budzeniu.”

## d4_iris (dzień 4, Iris Bell, 56, drzewo)

- **OBOK** 1: „Jak rozpoznać paczkę?” -> „Szare płótno. Zwykłe, bez wzorków. Nie chciałam, żeby się rzucała w oczy.…”
- **OBOK** 1.1: „Jaki ma kształt?” -> „Płaska. Pod płótnem jest kasetka na kłódkę, więc nie zwija się jak woreczek. Proszę jej ni…”
- **PROZNIA** 1.1: dopytanie „Jaki ma kształt?” nie zaczepia się o: „…Zwykłe, bez wzorków. Nie chciałam, żeby się rzucała w oczy.”
- **OBOK** 1.1.1: „Kasetka jest zamknięta?” -> „Na kłódkę. Cudze papiery, cudze oczy. Wolę oszczędzić wszystkim nieporozumień.…”
- **OBOK** 1.2: „Czym jest przewiązana?” -> „Sznurkiem. Węzeł trzyma płótno, nie samą kasetkę. Rozplątanie wystarczy, bez nożyczek.…”
- **LUZNE** 1.2: dopytanie „Czym jest przewiązana?” nie zaczepia się o: „…Zwykłe, bez wzorków. Nie chciałam, żeby się rzucała w oczy.”
- **OBOK** 1.2.1: „Chcesz sprawdzić, czy ktoś rozwiązywał?” -> „Chcę odebrać w takim stanie, w jakim zostawiłam. Drobna prośba, chyba zrozumiała.…”
- **PROZNIA** 1.2.1: dopytanie „Chcesz sprawdzić, czy ktoś rozwiązywał?” nie zaczepia się o: „…Węzeł trzyma płótno, nie samą kasetkę. Rozplątanie wystarczy, bez nożyczek.”
- **OBOK** 2: „Gdzie została w szóstce?” -> „Na półce nad siedzeniem, ostatni kurs. Zawsze tam kładę. Wczoraj najwyraźniej nie powinnam…”
- **OBOK** 2.1: „Co cię rozproszyło?” -> „Liczyłam karę za spóźniony czynsz jednej lokatorki. Cudze rachunki też potrafią zająć czło…”
- **PROZNIA** 2.1: dopytanie „Co cię rozproszyło?” nie zaczepia się o: „…Zawsze tam kładę. Wczoraj najwyraźniej nie powinnam.”
- **PROZNIA** 2.1.1: dopytanie „Nie mogłaś policzyć w domu?” nie zaczepia się o: „…Liczyłam karę za spóźniony czynsz jednej lokatorki. Cudze rachunki też potrafią zająć człowiekowi głowę.”
- **OBOK** 2.2: „Dlaczego przewozisz to nocą?” -> „Lokatorzy pracują na zmiany. Odbierają, kiedy wracają. Szóstka jeździ, nawet gdy biura już…”
- **LUZNE** 2.2: dopytanie „Dlaczego przewozisz to nocą?” nie zaczepia się o: „…Zawsze tam kładę. Wczoraj najwyraźniej nie powinnam.”
- **OBOK** 2.2.1: „Tramwaj zastępuje ci gońca?” -> „Tańszy i zwykle punktualny. Tylko trzeba pamiętać o własnej paczce, przyznaję.…”
- **LUZNE** 2.2.1: dopytanie „Tramwaj zastępuje ci gońca?” nie zaczepia się o: „…Odbierają, kiedy wracają. Szóstka jeździ, nawet gdy biura już zamknięte.”
- **OBOK** 3.1: „Po co kłódka do zwykłych rozliczeń?” -> „Spróbuj zostawić cudzy dług na stole w kamienicy. Do wieczora każdy zna kwotę, a połowa ją…”
- **PROZNIA** 3.1.1: dopytanie „Kto ma klucz?” nie zaczepia się o: „…Spróbuj zostawić cudzy dług na stole w kamienicy. Do wieczora każdy zna kwotę, a połowa ją podwoi.”
- **OBOK** 3.2: „Przez szparę widać paszport z wyciętą stroną. To pokwitowanie?” -> „To dokument człowieka, który chce wyjechać. Zatrzymasz paczkę, zatrzymasz jego wyjazd. Pro…”
- **OBOK** 3.2.1: „Dlaczego ukrywasz to wśród rozliczeń?” -> „Bo nie każdy, kto pyta o cudzy wyjazd, chce pomóc. Także tutaj, po obu stronach szyby.…”
- **LUZNE** 3.2.1: dopytanie „Dlaczego ukrywasz to wśród rozliczeń?” nie zaczepia się o: „…Zatrzymasz paczkę, zatrzymasz jego wyjazd. Proszę rozważyć całość.”
- **OBOK** 4: „Którzy lokatorzy czekają na paczkę?” -> „Z Cooper Street dziewięć. Zarządzam dwudziestoma rodzinami. Nie będziemy teraz robić listy…”
- **OBOK** 4.1: „Czego od ciebie potrzebują?” -> „Żeby ich sprawy nie utknęły w kolejnej szufladzie. Ja już wiem, co komu oddać. Tobie trzeb…”
- **PROZNIA** 4.1: dopytanie „Czego od ciebie potrzebują?” nie zaczepia się o: „…Zarządzam dwudziestoma rodzinami. Nie będziemy teraz robić listy nazwisk.”
- **LUZNE** 4.1.1: dopytanie „A jeśli ktoś chce odebrać bez ciebie?” nie zaczepia się o: „…Ja już wiem, co komu oddać. Tobie trzeba by tłumaczyć od początku.”
- **LUZNE** 4.2: dopytanie „Do rana naprawdę nie można poczekać?” nie zaczepia się o: „…Zarządzam dwudziestoma rodzinami. Nie będziemy teraz robić listy nazwisk.”
- **OBOK** 5: „Jak chcesz załatwić odbiór?” -> „Sprawnie. Paczkę rozpoznajesz, nazwisko znasz. Nie musimy spędzić nad tym całej zmiany.…”
- **PROZNIA** 5.1: dopytanie „Co proponujesz zamiast zwykłego wpisu?” nie zaczepia się o: „…Paczkę rozpoznajesz, nazwisko znasz. Nie musimy spędzić nad tym całej zmiany.”
- **OBOK** 5.1.1: „Za co dokładnie płacisz: za fatygę czy za brak wpisu?” -> „Za to, żeby ktoś nie musiał jutro tłumaczyć obcej osobie całego życia. Jeśli wolisz nazwać…”
- **OBOK** 5.2: „A jeśli zrobię pełny wpis?” -> „Podpiszę. Iris Bell, czytelnie. Ja tu mieszkam i zostaję, niezależnie od tego, kto siedzi …”
- **LUZNE** 5.2: dopytanie „A jeśli zrobię pełny wpis?” nie zaczepia się o: „…Paczkę rozpoznajesz, nazwisko znasz. Nie musimy spędzić nad tym całej zmiany.”
- **OBOK** 5.2.1: „Po co przypominać, że zostajesz?” -> „Żeby było wiadomo, że można mnie znaleźć. Nie lubię naciskać. Lubię jasne ustalenia.…”
- **OBOK** 6: „Dlaczego właśnie ty trzymasz papiery lokatorów?” -> „Bo przychodzą do mnie, kiedy czegoś potrzebują. Potem wszyscy pytają, czemu mam tyle cudzy…”
- **PROZNIA** 6.1: dopytanie „Mogą odmówić twojej pomocy?” nie zaczepia się o: „…Bo przychodzą do mnie, kiedy czegoś potrzebują. Potem wszyscy pytają, czemu mam tyle cudzych spraw.”
- **OBOK** 6.1.1: „A ty co dostajesz w zamian?” -> „Za czas się płaci. Tobie też ktoś płaci za siedzenie tutaj. Mam nadzieję, że punktualnie.…”
- **LUZNE** 6.1.1: dopytanie „A ty co dostajesz w zamian?” nie zaczepia się o: „…Mogą też stać samodzielnie w kolejkach. Nie zabieram nikomu tej przyjemności.”
- **OBOK** 6.2: „Znasz poprzedniego dyżurnego?” -> „Sama? Znałam. Potrafił załatwić sprawę bez zakładania jej drugiej teczki. Szkoda, że tak n…”
- **PROZNIA** 6.2: dopytanie „Znasz poprzedniego dyżurnego?” nie zaczepia się o: „…Bo przychodzą do mnie, kiedy czegoś potrzebują. Potem wszyscy pytają, czemu mam tyle cudzych spraw.”
- **OBOK** 6.2.1: „Wiesz, dokąd?” -> „Gdybym wiedziała, mogłabym pytać jego o paczkę. A stoję tutaj, prawda?…”
- **PROZNIA** 6.2.1: dopytanie „Wiesz, dokąd?” nie zaczepia się o: „…Potrafił załatwić sprawę bez zakładania jej drugiej teczki. Szkoda, że tak nagle odszedł.”
- **OBOK** 7: „Skąd dopisek „dla nocnej zmiany, bez wpisu” przy blankiecie?” -> „Od twojego poprzednika. Ja nie pytałam o jego noce, on nie pytał o moje paczki. Teraz trze…”
- **PROZNIA** 7.1: dopytanie „Numer 0412 pozwoli znaleźć odbiorcę?” nie zaczepia się o: „…Ja nie pytałam o jego noce, on nie pytał o moje paczki. Teraz trzeba się poznać od początku.”

## d5_noah (dzień 5, Noah Reyes, 42, drzewo)

- **OBOK** 1: „Jak wygląda notes?” -> „Czarny. Służbowy, bez ozdób. Takich jest sporo, więc sam kolor nie wystarczy.…”
- **OBOK** 1.1: „Jak jest oprawiony?” -> „Na spirali, do kieszeni. Kartki da się odwrócić na tył, bez łamania grzbietu.…”
- **PROZNIA** 1.1: dopytanie „Jak jest oprawiony?” nie zaczepia się o: „…Służbowy, bez ozdób. Takich jest sporo, więc sam kolor nie wystarczy.”
- **OBOK** 1.1.1: „Dużo kartek wyrwanych?” -> „Notuję, nie rozdaję. Nie ustalajmy jednak właściciela na podstawie liczby pustych stron.…”
- **OBOK** 1.2: „Ma jakiś ślad używania?” -> „Wgnieciony z lewej strony. Noszę pod kaburą. Czyli: odkształcenie, nie uszkodzenie po znal…”
- **PROZNIA** 1.2: dopytanie „Ma jakiś ślad używania?” nie zaczepia się o: „…Służbowy, bez ozdób. Takich jest sporo, więc sam kolor nie wystarczy.”
- **OBOK** 1.2.1: „Przeszkadza w pisaniu?” -> „Na pierwszych kartkach. Potem się człowiek przyzwyczaja. Do rzeczy łatwiej niż do godzin, …”
- **PROZNIA** 1.2.1: dopytanie „Przeszkadza w pisaniu?” nie zaczepia się o: „…Noszę pod kaburą. Czyli: odkształcenie, nie uszkodzenie po znalezieniu.”
- **OBOK** 2.1: „O czym rozmawialiście?” -> „O kursie, w którym znalazł telefon Mai Doyle. Pytałem, kto z nią wysiadał. Nie zapamiętał.…”
- **LUZNE** 2.1.1: dopytanie „Wierzysz, że nie pamięta?” nie zaczepia się o: „…Pytałem, kto z nią wysiadał. Nie zapamiętał.”
- **OBOK** 2.2: „Często wracasz tramwajem?” -> „Mieszkam na końcu jedenastki. Radiowóz zostaje na komisariacie. Nie jest dodatkiem do wypł…”
- **PROZNIA** 2.2: dopytanie „Często wracasz tramwajem?” nie zaczepia się o: „…Rozmawiałem z motorniczym i wysiadłem bez niego. Pierwszy raz od piętnastu lat.”
- **LUZNE** 2.2.1: dopytanie „Ktoś mógł widzieć notes na siedzeniu?” nie zaczepia się o: „…Radiowóz zostaje na komisariacie. Nie jest dodatkiem do wypłaty.”
- **OBOK** 3: „Jak idzie sprawa Mai?” -> „Mąż zgłasza zaginięcie, siostra mówi, że nic nie wie. Ja mam sprawdzić, czy ktoś potrzebuj…”
- **OBOK** 3.1: „Ile masz czasu?” -> „Do wtorku, siódmego września, do szóstej rano. Potem akta idą do wydziału. Tam sprawa dost…”
- **PROZNIA** 3.1: dopytanie „Ile masz czasu?” nie zaczepia się o: „…Mąż zgłasza zaginięcie, siostra mówi, że nic nie wie. Ja mam sprawdzić, czy ktoś potrzebuje pomocy, a nie rozstrzygać, kto głośniej pyta.”
- **OBOK** 3.2: „Wierzysz Evanowi?” -> „Wierzę godzinom, kiedy da się je potwierdzić. Jego godziny na razie się nie składają.…”
- **PROZNIA** 3.2: dopytanie „Wierzysz Evanowi?” nie zaczepia się o: „…Mąż zgłasza zaginięcie, siostra mówi, że nic nie wie. Ja mam sprawdzić, czy ktoś potrzebuje pomocy, a nie rozstrzygać, kto głośniej pyta.”
- **OBOK** 3.2.1: „Co mam zapisywać, jeśli wróci?” -> „Godzinę i to, o co pyta. Bez własnych dopisków o winie. Wniosek może poczekać, godzina pot…”
- **LUZNE** 3.2.1: dopytanie „Co mam zapisywać, jeśli wróci?” nie zaczepia się o: „…Wierzę godzinom, kiedy da się je potwierdzić. Jego godziny na razie się nie składają.”
- **OBOK** 4: „Jak potwierdzić, że notes należy do ciebie?” -> „Zadzwoń na komisariat przy Rynku. Dyżurny mnie zna. Tylko nie czytaj mu zeznań przez telef…”
- **OBOK** 4.1: „Nie wystarczy odznaka?” -> „Potwierdza, kim jestem. Nie dowodzi, że każda czarna rzecz w magazynie jest moja.…”
- **PROZNIA** 4.1: dopytanie „Nie wystarczy odznaka?” nie zaczepia się o: „…Dyżurny mnie zna. Tylko nie czytaj mu zeznań przez telefon.”
- **LUZNE** 4.1.1: dopytanie „Nie przeszkadza ci sprawdzanie policjanta?” nie zaczepia się o: „…Potwierdza, kim jestem. Nie dowodzi, że każda czarna rzecz w magazynie jest moja.”
- **OBOK** 4.2: „Co powiedzieć dyżurnemu?” -> „Noah Reyes, zgubiony notes służbowy. Resztę ustalę z nim sam. Czyli: nazwisko, rzecz, bez …”
- **OBOK** 4.2.1: „Dlaczego tak pilnujesz zawartości?” -> „Bo zapisuję cudze słowa. Ktoś je powiedział policjantowi, nie całej kolejce do okienka.…”
- **OBOK** 5.1: „A jeśli jej nie ma?” -> „Wtedy trzeba ostrożniej, nie szybciej. Wiem, że przy szybie to brzmi jak prośba o dodatkow…”
- **LUZNE** 5.1.1: dopytanie „Potrafisz zagwarantować jej bezpieczeństwo?” nie zaczepia się o: „…Wtedy trzeba ostrożniej, nie szybciej. Wiem, że przy szybie to brzmi jak prośba o dodatkowy kłopot.”
- **OBOK** 5.2: „Co odróżnia zaginięcie od odejścia z domu?” -> „Czasem jedno zdanie tej osoby. Tylko trzeba je usłyszeć od niej, nie od kogoś, kto zna ją …”
- **PROZNIA** 5.2: dopytanie „Co odróżnia zaginięcie od odejścia z domu?” nie zaczepia się o: „…Rodzina może o nie wystąpić. To nie znaczy, że każdy przedmiot ma wrócić do męża, zanim zapytamy właścicielkę.”
- **OBOK** 5.2.1: „A jeśli nie chce rozmawiać nawet z tobą?” -> „To muszę ustalić, czy może odmówić swobodnie. Reszta to moje zmartwienie.…”
- **LUZNE** 5.2.1: dopytanie „A jeśli nie chce rozmawiać nawet z tobą?” nie zaczepia się o: „…Czasem jedno zdanie tej osoby. Tylko trzeba je usłyszeć od niej, nie od kogoś, kto zna ją najlepiej.”
- **OBOK** 6: „Co się stanie, jeśli notes zostanie tutaj?” -> „Będę odtwarzał zapiski. Z pamięci daty wyglądają pewniej, niż są naprawdę. Wolałbym tego n…”
- **OBOK** 6.1: „Nie masz kopii?” -> „Część informacji jest w aktach. Część jeszcze tutaj. To właśnie różnica między notesem a z…”
- **PROZNIA** 6.1: dopytanie „Nie masz kopii?” nie zaczepia się o: „…Z pamięci daty wyglądają pewniej, niż są naprawdę. Wolałbym tego nie robić.”
- **OBOK** 6.1.1: „Dlaczego nie przepisałeś wszystkiego?” -> „Bo pracowałem, zanim wróciłem z pracy. Nie jest to usprawiedliwienie, tylko kolejność.…”
- **PROZNIA** 6.1.1: dopytanie „Dlaczego nie przepisałeś wszystkiego?” nie zaczepia się o: „…Część jeszcze tutaj. To właśnie różnica między notesem a zamkniętą sprawą.”
- **OBOK** 6.2: „Kto odpowie za zagubienie?” -> „Ja. Dlatego proszę o potwierdzenie odbioru, nie o zniknięcie całej wizyty.…”
- **LUZNE** 6.2: dopytanie „Kto odpowie za zagubienie?” nie zaczepia się o: „…Z pamięci daty wyglądają pewniej, niż są naprawdę. Wolałbym tego nie robić.”
- **OBOK** 6.2.1: „Nawet gdyby ktoś już przeczytał?” -> „Zwłaszcza wtedy. Bez zapisu nie ustalimy potem, kiedy i u kogo notes leżał.…”
- **PROZNIA** 6.2.1: dopytanie „Nawet gdyby ktoś już przeczytał?” nie zaczepia się o: „…Ja. Dlatego proszę o potwierdzenie odbioru, nie o zniknięcie całej wizyty.”
- **OBOK** 7: „Co Evan zrobił z wydanym mu telefonem?” -> „Przyniósł rano. Zablokowany, kodu podobno nie zna. A wcześniej żona rzekomo żadnego kodu n…”
- **OBOK** 10.1: „Może po prostu szukał jej przed zgłoszeniem?” -> „Może. Właśnie dlatego zadaję pytania, zamiast stawiać znak równości między dwoma godzinami…”
- **LUZNE** 10.1: dopytanie „Może po prostu szukał jej przed zgłoszeniem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Muszę spytać, skąd wiedział, że potrzebuje ulotek. Sam odstęp nie odpowie za niego.”

## d5_victor (dzień 5, Victor Crane, 51, drzewo)

- **OBOK** 1: „Jak wygląda teczka?” -> „Szary skaj. Nie skóra. To ma znaczenie przy porównaniu.…”
- **OBOK** 1.1: „Jak się zamyka?” -> „Klamrą z przodu. Bez zamka na klucz. Dokumenty zabezpiecza się obiegiem, nie zaufaniem do …”
- **PROZNIA** 1.1: dopytanie „Jak się zamyka?” nie zaczepia się o: „…Nie skóra. To ma znaczenie przy porównaniu.”
- **OBOK** 1.2: „Co ją wyróżnia?” -> „Na rogu naklejka inspekcji. Na klapie V.C. i numer czterdzieści siedem. Proszę sprawdzić n…”
- **PROZNIA** 1.2: dopytanie „Co ją wyróżnia?” nie zaczepia się o: „…Nie skóra. To ma znaczenie przy porównaniu.”
- **OBOK** 2: „Gdzie została w szóstce?” -> „Na siedzeniu obok, o 4:10. Wysiadłem przy zajezdni. Nie zdarza mi się to.…”
- **OBOK** 2.1: „Po co inspektorowi nocny tramwaj?” -> „Żeby porównać rozkład z przejazdem. Przy biurku oba wyglądają identycznie. Na pętli już ni…”
- **LUZNE** 2.1: dopytanie „Po co inspektorowi nocny tramwaj?” nie zaczepia się o: „…Wysiadłem przy zajezdni. Nie zdarza mi się to.”
- **PROZNIA** 2.1.1: dopytanie „Co się nie zgadzało?” nie zaczepia się o: „…Przy biurku oba wyglądają identycznie. Na pętli już nie.”
- **OBOK** 2.2: „Kiedy zauważyłeś brak?” -> „Po wyjściu. W ręce miałem to, co wyjąłem, teczka została. Jedna rzecz odłożona obok wystar…”
- **PROZNIA** 2.2: dopytanie „Kiedy zauważyłeś brak?” nie zaczepia się o: „…Wysiadłem przy zajezdni. Nie zdarza mi się to.”
- **OBOK** 2.2.1: „Motorniczy może potwierdzić?” -> „Kurs można ustalić. Najpierw sprawdźmy magazyn. Nie trzeba angażować całej zajezdni do odc…”
- **PROZNIA** 2.2.1: dopytanie „Motorniczy może potwierdzić?” nie zaczepia się o: „…W ręce miałem to, co wyjąłem, teczka została. Jedna rzecz odłożona obok wystarczy.”
- **OBOK** 3: „Co sprawdzasz w naszym biurze?” -> „Księgę, magazyn i kwity. Trzy zapisy tej samej rzeczy powinny mówić to samo.…”
- **OBOK** 3.1: „Gdzie się rozchodzą?” -> „W księdze brakuje strony czterdzieści jeden. To nie jest nieczytelny podpis, tylko brak st…”
- **PROZNIA** 3.1: dopytanie „Gdzie się rozchodzą?” nie zaczepia się o: „…Księgę, magazyn i kwity. Trzy zapisy tej samej rzeczy powinny mówić to samo.”
- **PROZNIA** 3.1.1: dopytanie „Wiesz, kto ją wyrwał?” nie zaczepia się o: „…W księdze brakuje strony czterdzieści jeden. To nie jest nieczytelny podpis, tylko brak strony.”
- **OBOK** 3.2: „Co z wydaniami poprzednika?” -> „Prawa rękawiczka i paczka wyszły bez właściwego wpisu. Próbuję ustalić, ile rzeczy można j…”
- **PROZNIA** 3.2: dopytanie „Co z wydaniami poprzednika?” nie zaczepia się o: „…Księgę, magazyn i kwity. Trzy zapisy tej samej rzeczy powinny mówić to samo.”
- **OBOK** 3.2.1: „Kto na tym ucierpiał?” -> „Właśnie tego nie widać w pustej rubryce. Rzecz mogła trafić do właściciela albo do pierwsz…”
- **LUZNE** 3.2.1: dopytanie „Kto na tym ucierpiał?” nie zaczepia się o: „…Prawa rękawiczka i paczka wyszły bez właściwego wpisu. Próbuję ustalić, ile rzeczy można jeszcze odtworzyć.”
- **OBOK** 4: „Dlaczego rozliczenie musi być o siódmej?” -> „Wtedy zamykam kontrolowany okres. Jeśli nie mam dokumentów, wynik jest niepełny.…”
- **OBOK** 4.1: „Co zrobisz bez teczki?” -> „Audyt przesunie się o tydzień. Tydzień wystarczy, żeby księga zaczęła zgadzać się aż za do…”
- **LUZNE** 4.1: dopytanie „Co zrobisz bez teczki?” nie zaczepia się o: „…Wtedy zamykam kontrolowany okres. Jeśli nie mam dokumentów, wynik jest niepełny.”
- **PROZNIA** 4.1.1: dopytanie „Podejrzewasz poprawianie wpisów?” nie zaczepia się o: „…Audyt przesunie się o tydzień. Tydzień wystarczy, żeby księga zaczęła zgadzać się aż za dobrze.”
- **LUZNE** 4.2: dopytanie „Nie możesz rozliczyć tego z pamięci?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wtedy zamykam kontrolowany okres. Jeśli nie mam dokumentów, wynik jest niepełny.”
- **OBOK** 5: „Co jest w teczce?” -> „Formularze, pieczątka, wykaz wydań z tego biura. Treść wykazu nie służy do publicznego spr…”
- **OBOK** 5.1: „Nawet jeśli dotyczy naszego biura?” -> „Wtedy otrzymasz właściwy egzemplarz. Z podpisem. Nie wyciągnięty ukradkiem z cudzej teczki…”
- **OBOK** 5.2: „Dlaczego dwa egzemplarze?” -> „Żeby po miesiącu nie rozmawiać o tym, co ktoś podobno widział. Jeden u mnie, drugi tutaj.…”
- **PROZNIA** 5.2: dopytanie „Dlaczego dwa egzemplarze?” nie zaczepia się o: „…Formularze, pieczątka, wykaz wydań z tego biura. Treść wykazu nie służy do publicznego sprawdzania właściciela.”
- **OBOK** 5.2.1: „A jeśli egzemplarze się różnią?” -> „Zatrzymujemy obieg i ustalamy kiedy. Nie wybieramy wygodniejszego. Nawet jeśli opóźni to z…”
- **LUZNE** 5.2.1: dopytanie „A jeśli egzemplarze się różnią?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Żeby po miesiącu nie rozmawiać o tym, co ktoś podobno widział. Jeden u mnie, drugi tutaj.”
- **OBOK** 6: „Co wiadomo o poprzednim dyżurnym?” -> „Sam Holt. Od kilku tygodni nie mogę go znaleźć. Chcę jego wyjaśnień, nie opowieści kolejki…”
- **OBOK** 6.1: „Jak tu trafił?” -> „Bez referencji. Podobnie jak osoba, która odpowiedziała na obecne ogłoszenie. Czytam także…”
- **PROZNIA** 6.1: dopytanie „Jak tu trafił?” nie zaczepia się o: „…Od kilku tygodni nie mogę go znaleźć. Chcę jego wyjaśnień, nie opowieści kolejki.”
- **OBOK** 6.1.1: „Dlaczego to cię obchodzi?” -> „Ktoś oddaje obcemu klucze, księgę i nocną zmianę. Potem wszyscy mówią, że nie wiedzieli, k…”
- **LUZNE** 6.1.1: dopytanie „Dlaczego to cię obchodzi?” nie zaczepia się o: „…Podobnie jak osoba, która odpowiedziała na obecne ogłoszenie. Czytam także gazety.”
- **LUZNE** 6.2: dopytanie „Chcesz go ukarać czy odtworzyć wydania?” nie zaczepia się o: „…Od kilku tygodni nie mogę go znaleźć. Chcę jego wyjaśnień, nie opowieści kolejki.”
- **OBOK** 6.2.1: „Mówisz mu to samo?” -> „Powiem, kiedy go znajdę. Nie składam za niego zeznań ani za niego nie odpowiadam.…”
- **LUZNE** 6.2.1: dopytanie „Mówisz mu to samo?” nie zaczepia się o: „…Najpierw odtworzyć. Jeśli zacznę od kary, dostanę mniej odpowiedzi i ładniejsze podpisy.”
- **OBOK** 7: „Dopiski innym tuszem mają parafę V.C. To twoje pismo?” -> „Moje. Pięć tygodni temu odtworzyłem dwie pozycje po rozmowie z Holtem. Bez dowodu, z pamię…”
- **LUZNE** 7.1: dopytanie „Po co ryzykować własną kontrolę?” nie zaczepia się o: „…Bez dowodu, z pamięci. Nie powinienem.”
- **LUZNE** 7.2: dopytanie „Czyli twoje papiery też wymagają sprawdzenia?” nie zaczepia się o: „…Bez dowodu, z pamięci. Nie powinienem.”
- **OBOK** 10: „Zatrzymana paczka czeka na kontrolę. Co sprawdzisz?” -> „Numer 0412, stan depozytu, zgłoszenie. Kto może to podpisać? Potrzebuję osoby, która widzi…”

## d5_gus (dzień 5, Gus Pell, 55, drzewo)

- **OBOK** 1: „Jak rozpoznać portfel?” -> „Brązowy, wytarty. Tylko nie taki nowy, co go ktoś specjalnie postarzył. Mój sam to zrobił.…”
- **OBOK** 1.1: „Jak się zamyka?” -> „Na zatrzask. Trzeba docisnąć. Jak zostanie otwarty, rozkłada się w kieszeni.…”
- **PROZNIA** 1.1: dopytanie „Jak się zamyka?” nie zaczepia się o: „…Tylko nie taki nowy, co go ktoś specjalnie postarzył. Mój sam to zrobił.”
- **OBOK** 1.1.1: „Coś z niego wypada?” -> „Monety. Dlatego ich tam nie trzymam. Papier siedzi dobrze, proszę nie potrząsać.…”
- **PROZNIA** 1.1.1: dopytanie „Coś z niego wypada?” nie zaczepia się o: „…Trzeba docisnąć. Jak zostanie otwarty, rozkłada się w kieszeni.”
- **OBOK** 1.2: „Jaki ma znak szczególny?” -> „Wygiął się pod kieszeń. Jedenaście lat tak noszę. Jak położysz płasko, jeden róg odstaje.…”
- **PROZNIA** 1.2: dopytanie „Jaki ma znak szczególny?” nie zaczepia się o: „…Tylko nie taki nowy, co go ktoś specjalnie postarzył. Mój sam to zrobił.”
- **OBOK** 1.2.1: „Jedenaście lat z jednym portfelem?” -> „Tylko on mi został ze starych rzeczy. Z tamtego... Nieważne. Nie trzeba wymieniać, póki tr…”
- **OBOK** 2: „Gdzie go zostawiłeś?” -> „W jedenastce. Wyjmowałem, potem chowałem. Najwyraźniej nie tam, gdzie trzeba. Tylko tyle p…”
- **LUZNE** 2.1: dopytanie „Miałeś wtedy płaszcz na sobie?” nie zaczepia się o: „…Najwyraźniej nie tam, gdzie trzeba. Tylko tyle pamiętam.”
- **OBOK** 2.1.1: „Dlaczego tak się spieszyłeś?” -> „Pokłóciłem się w domu. Z żoną, z teściową, z obiema. Tylko proszę nie pytać, która miała r…”
- **PROZNIA** 2.1.1: dopytanie „Dlaczego tak się spieszyłeś?” nie zaczepia się o: „…I szlafrok pod spodem. Kieszenie się mylą, jak człowiek wychodzi za szybko.”
- **OBOK** 2.2: „Sprawdzałeś obie kieszenie?” -> „Wszystkie. Przy ludziach na przystanku, wyglądało to jeszcze gorzej niż tutaj.…”
- **PROZNIA** 2.2: dopytanie „Sprawdzałeś obie kieszenie?” nie zaczepia się o: „…Najwyraźniej nie tam, gdzie trzeba. Tylko tyle pamiętam.”
- **LUZNE** 2.2.1: dopytanie „Ktoś mógł potwierdzić, że go miałeś?” nie zaczepia się o: „…Wszystkie. Przy ludziach na przystanku, wyglądało to jeszcze gorzej niż tutaj.”
- **OBOK** 3.1: „Ile lat ma córka?” -> „Siedem. Na zdjęciu pięć. Tylko nie pytaj, kiedy ostatnio ją widziałem.…”
- **OBOK** 3.2: „Za zdjęciem leży 250 dolarów. Dlaczego mówisz o dwudziestu?” -> „Bo nie chcę, żeby cała kolejka znała kwotę. To na wyjazd, wszystko, co mam. Tylko nie wyjm…”
- **LUZNE** 3.2.1: dopytanie „To twoje pieniądze?” nie zaczepia się o: „…To na wyjazd, wszystko, co mam. Tylko nie wyjmuj na ladę.”
- **OBOK** 4: „Na jakie nazwisko szukać dokumentów?” -> „Pell. Gustaw Pell. Gus wystarczy w rozmowie, na papierze Gustaw.…”
- **PROZNIA** 4.1: dopytanie „Jaki adres do wpisu?” nie zaczepia się o: „…Gustaw Pell. Gus wystarczy w rozmowie, na papierze Gustaw.”
- **LUZNE** 4.1.1: dopytanie „Który adres mam zapisać?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Piętnaście, przepraszam. Dwanaście to brat, już tam nie mieszka.”
- **LUZNE** 4.2: dopytanie „Jest tylko jeden dokument tożsamości?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Gustaw Pell. Gus wystarczy w rozmowie, na papierze Gustaw.”
- **OBOK** 4.2.1: „Są dwa dowody z twoim zdjęciem: Pell i Ferro. Dlaczego?” -> „Jeden stary, drugi nowy. Ktoś mi pomógł wyjechać. Tylko nie wpisuj obu nazwisk obok siebie…”
- **OBOK** 4.2.1.1.1: „Który zapis potwierdzi odbiór, nie trasę?” -> „Pell. Tak się przedstawiłem. Drugiego proszę nie dopisuj dla porządku.…”
- **PROZNIA** 4.2.1.1.1: dopytanie „Który zapis potwierdzi odbiór, nie trasę?” nie zaczepia się o: „…Tylko tyle. Jeśli wpiszesz oba, sam pokażę drogę tym, przed którymi jadę.”
- **OBOK** 5: „Co będzie, jeśli nie zdążysz na 5:40?” -> „Zostanę tutaj. A tutaj mogą mnie znaleźć. Nie mówię o małej przesiadce, której szkoda.…”
- **OBOK** 5.1: „Kto może cię znaleźć?” -> „Ci, co poprzednio. Urzędnik też chciał tylko wypełnić rubrykę, a potem ktoś wiedział, gdzi…”
- **OBOK** 5.1.1: „Co mogę zapisać, żeby ci nie zaszkodzić?” -> „To, co potrzebne do portfela. Nie dokąd jadę. Tylko o ten jeden szczegół proszę.…”
- **PROZNIA** 5.1.1: dopytanie „Co mogę zapisać, żeby ci nie zaszkodzić?” nie zaczepia się o: „…Ci, co poprzednio. Urzędnik też chciał tylko wypełnić rubrykę, a potem ktoś wiedział, gdzie przyjść.”
- **OBOK** 5.2: „Masz bilet?” -> „W portfelu. Dlatego nie mogę po prostu machnąć ręką i wyjść.…”
- **PROZNIA** 5.2: dopytanie „Masz bilet?” nie zaczepia się o: „…A tutaj mogą mnie znaleźć. Nie mówię o małej przesiadce, której szkoda.”
- **PROZNIA** 5.2.1: dopytanie „Nie kupisz drugiego?” nie zaczepia się o: „…W portfelu. Dlatego nie mogę po prostu machnąć ręką i wyjść.”
- **LUZNE** 6.1: dopytanie „A do kogoś spoza domu?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Telefon został tam, gdzie żona. Tak będzie lepiej.”
- **OBOK** 6.1.1: „Nie masz komu zaufać?” -> „Mam za mało czasu, żeby to sprawdzać. Tylko portfel, potem tramwaj.…”
- **OBOK** 6.2: „Co zrobisz, jeśli trzeba będzie potwierdzić własność?” -> „Przyjdę z kimś. Tak się mówi przy okienku, prawda? Nie wiem, kogo mam teraz przyprowadzić.…”
- **LUZNE** 6.2: dopytanie „Co zrobisz, jeśli trzeba będzie potwierdzić własność?” nie zaczepia się o: „…Telefon został tam, gdzie żona. Tak będzie lepiej.”
- **OBOK** 6.2.1: „Czyli obiecujesz coś, czego nie zrobisz?” -> „Próbuję nie zamknąć sobie ostatnich drzwi. Tylko nie bierz tego za dowód, że portfel nie j…”
- **LUZNE** 6.2.1: dopytanie „Czyli obiecujesz coś, czego nie zrobisz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Tak się mówi przy okienku, prawda? Nie wiem, kogo mam teraz przyprowadzić.”
- **OBOK** 7: „Pell i Ferro, to samo zdjęcie. Którym jesteś?” -> „Tym, który stoi w szlafroku. Jeden dokument był wcześniej, drugi ma być potem. Nie każ mi …”
- **OBOK** 8: „Czemu 250 dolarów jest schowane za zdjęciem?” -> „Bo tam nie wysuną się przy wyjmowaniu drobnych. To cały wyjazd. Tylko nie licz ich głośno.…”

## d6_ada (dzień 6, Ada Vale, 10, drzewo)

- **OBOK** 1: „Jakiego królika przyniosłaś?” -> „Szarego, pluszowego. Nie żywego. Żywego bym nie wkładała pod kurtkę.…”
- **OBOK** 1.1: „Jaki jest duży?” -> „Mieści mi się pod pachą. Jak trzymam za brzuch, nogi wiszą. Nie jest taki malutki do klucz…”
- **PROZNIA** 1.1: dopytanie „Jaki jest duży?” nie zaczepia się o: „…Nie żywego. Żywego bym nie wkładała pod kurtkę.”
- **OBOK** 1.1.1: „Niosłaś go pod kurtką?” -> „Żeby nie moknął. Mnie i tak mama wysuszy, a jego nie wiadomo kto.…”
- **LUZNE** 1.1.1: dopytanie „Niosłaś go pod kurtką?” nie zaczepia się o: „…Jak trzymam za brzuch, nogi wiszą. Nie jest taki malutki do kluczy.”
- **OBOK** 1.2: „Ma coś, po czym właściciel go pozna?” -> „Ucho doszyte czerwoną nitką. I dziurkę w nosie. Wygląda, jakby miał katar, ale suchy.…”
- **LUZNE** 1.2: dopytanie „Ma coś, po czym właściciel go pozna?” nie zaczepia się o: „…Nie żywego. Żywego bym nie wkładała pod kurtkę.”
- **OBOK** 1.2.1: „Skąd wiesz, że ucho było naprawiane?” -> „Bo drugie jest inaczej. Jak ktoś nie lubi królika, nie szyje mu ucha. Dlatego go wzięłam.…”
- **LUZNE** 1.2.1: dopytanie „Skąd wiesz, że ucho było naprawiane?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…I dziurkę w nosie. Wygląda, jakby miał katar, ale suchy.”
- **OBOK** 2: „Gdzie dokładnie leżał?” -> „Na ławce przy pętli szóstki, trzy kroki od słupka. Moje kroki, nie takie wielkie.…”
- **OBOK** 2.1: „Ktoś siedział obok?” -> „Konduktor stał przy budce. Patrzył na rękę, ale nie miał zegarka. Na ławce nikogo.…”
- **PROZNIA** 2.1: dopytanie „Ktoś siedział obok?” nie zaczepia się o: „…Na ławce przy pętli szóstki, trzy kroki od słupka. Moje kroki, nie takie wielkie.”
- **LUZNE** 2.1.1: dopytanie „Pytałaś go o królika?” nie zaczepia się o: „…Patrzył na rękę, ale nie miał zegarka. Na ławce nikogo.”
- **OBOK** 2.2: „Od razu go zabrałaś?” -> „Najpierw patrzyłam, czy ktoś wróci. Była pani z walizką, ale szła w drugą stronę.…”
- **LUZNE** 2.2: dopytanie „Od razu go zabrałaś?” nie zaczepia się o: „…Na ławce przy pętli szóstki, trzy kroki od słupka. Moje kroki, nie takie wielkie.”
- **PROZNIA** 2.2.1: dopytanie „Wołałaś za nią?” nie zaczepia się o: „…Najpierw patrzyłam, czy ktoś wróci. Była pani z walizką, ale szła w drugą stronę.”
- **OBOK** 3: „Po co potrzebujesz kwitu?” -> „Żeby było napisane, że znalazłam. Nie że zabrałam. Mama mówi, że bez papieru ludzie sobie …”
- **OBOK** 3.1: „Co wpisać?” -> „Ada Vale, dziesięć lat. Dużymi literami, żeby pani w szkole zobaczyła od razu.…”
- **PROZNIA** 3.1: dopytanie „Co wpisać?” nie zaczepia się o: „…Nie że zabrałam. Mama mówi, że bez papieru ludzie sobie wybiorą gorsze.”
- **LUZNE** 3.2: dopytanie „Chcesz nagrodę za królika?” nie zaczepia się o: „…Nie że zabrałam. Mama mówi, że bez papieru ludzie sobie wybiorą gorsze.”
- **OBOK** 3.2.1: „A gdy właściciel podziękuje?” -> „To dobrze. Tylko niech go już nie zostawia, bo to ucho nie wytrzyma ciągłego gubienia.…”
- **LUZNE** 3.2.1: dopytanie „A gdy właściciel podziękuje?” nie zaczepia się o: „…Kwit. Jak dostanę pieniądze, mama spyta skąd i znowu będzie trzeba tłumaczyć.”
- **OBOK** 4: „Czemu chodzisz sama po pętli?” -> „Mama ma nocną zmianę w pralni. Nudzi mi się. Liczę kamienie, ostatnio sto dwa.…”
- **LUZNE** 4.1: dopytanie „Mama wie o tych spacerach?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Nudzi mi się. Liczę kamienie, ostatnio sto dwa.”
- **PROZNIA** 4.1.1: dopytanie „Wrócisz teraz prosto do domu?” nie zaczepia się o: „…Mówi, żeby nie brać cudzego, oddawać znalezione i nie łazić po pętli. Dwa robię dobrze.”
- **OBOK** 4.2: „Gdzie mieszkasz?” -> „Cooper Street dziewięć, drugie piętro. Ojej. Pani Iris mówiła, żeby nie podawać adresu.…”
- **PROZNIA** 4.2: dopytanie „Gdzie mieszkasz?” nie zaczepia się o: „…Nudzi mi się. Liczę kamienie, ostatnio sto dwa.”
- **OBOK** 4.2.1: „Dlaczego?” -> „Mama mówi, że pani Iris potrafi zabrać mieszkanie, jak ktoś dużo gada. Mówi to, kiedy myśl…”
- **OBOK** 5.1: „O co go spytać?” -> „O naprawę. Ktoś przecież musiał przytrzymać ucho. Może pamięta, której nitki użył.…”
- **LUZNE** 5.1: dopytanie „O co go spytać?” nie zaczepia się o: „…Niech sam opowie, jaki królik. Jak mu pokażesz, to każdy potrafi powiedzieć, że szary.”
- **OBOK** 5.1.1: „A jeśli nie pamięta?” -> „To może szyła jego mama. Ja też nie wiem, gdzie mama trzyma wszystkie nitki.…”
- **OBOK** 5.2: „A jeśli nikt nie przyjdzie?” -> „To niech zostanie tutaj, gdzie sucho. Nie na ławce. Mogę go czasem zobaczyć?…”
- **LUZNE** 5.2: dopytanie „A jeśli nikt nie przyjdzie?” nie zaczepia się o: „…Niech sam opowie, jaki królik. Jak mu pokażesz, to każdy potrafi powiedzieć, że szary.”
- **OBOK** 5.2.1: „Nie chcesz go wtedy zabrać?” -> „Chcę, ale to nie to samo. Jak ja się spóźnię po swoją rzecz, też ma na mnie czekać.…”
- **LUZNE** 5.2.1: dopytanie „Nie chcesz go wtedy zabrać?” nie zaczepia się o: „…Nie na ławce. Mogę go czasem zobaczyć?”
- **OBOK** 6: „Komu można powiedzieć, że go przyniosłaś?” -> „Mamie i pani w szkole. I właścicielowi, żeby wiedział, że nie leżał już na deszczu.…”
- **OBOK** 6.1: „A wpisać do papierów dla urzędu?” -> „A potem kto czyta? W szkole kartkę czyta pani, a potem wszyscy. W urzędzie też tak?…”
- **LUZNE** 6.1: dopytanie „A wpisać do papierów dla urzędu?” nie zaczepia się o: „…Mamie i pani w szkole. I właścicielowi, żeby wiedział, że nie leżał już na deszczu.”
- **PLEC** 6.1: odpowiedź: „pani”
- **PROZNIA** 6.1.1: dopytanie „Chcesz mieć nazwisko na kwicie czy wszędzie?” nie zaczepia się o: „…W szkole kartkę czyta pani, a potem wszyscy. W urzędzie też tak?”
- **OBOK** 6.2: „Co powiesz mamie po powrocie?” -> „Że oddałam królika. O pętli też, bo przecież jest na kwicie. Tego już nie da się pominąć.…”
- **OBOK** 6.2.1: „Nie boisz się, że będzie zła?” -> „Będzie. Ale mniej niż wtedy, gdy znajdzie królika w moim łóżku.…”
- **PROZNIA** 6.2.1: dopytanie „Nie boisz się, że będzie zła?” nie zaczepia się o: „…O pętli też, bo przecież jest na kwicie. Tego już nie da się pominąć.”
- **LUZNE** 7.1: dopytanie „Dlaczego tata schował kartkę pod uchem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Jak się zgubi, niech ktoś odda. No to oddaję, tylko Zuzi nie znam.”
- **OBOK** 8: „Znasz puszkę z takim odcinkiem z bloczka Iris?” -> „Widziałam u niej w kuchni, nad czajnikiem. Dno się ruszało. Tylko nie mów, że ode mnie wie…”
- **PROZNIA** 8.1: dopytanie „Kto ci ją pokazywał?” nie zaczepia się o: „…Dno się ruszało. Tylko nie mów, że ode mnie wiesz.”
- **OBOK** 9: „Mama odzyskała kopertę. Mówiła ci o tym?” -> „Przeliczyła przy stole i jeszcze raz przy drzwiach. Potem schowała tak, żebym ja też nie z…”
- **OBOK** 10: „Jak mama się trzyma?” -> „Płakała w kuchni. Mówiła, że brakuje pieniędzy. Nie wiem, kto wziął, ale ja dlatego wszyst…”

## d6_leo (dzień 6, Leo Marsh, 46, drzewo)

- **OBOK** 1: „Jak wygląda zegarek?” -> „Mosiężny. Na rękę patrzę z przyzwyczajenia, nie szukaj na tej podstawie paska.…”
- **OBOK** 1.1: „Co ma zamiast paska?” -> „Kieszonkowy, na łańcuszku. Kiedy odkładam, zwijam łańcuszek obok, żeby nie zwisał. Tym raz…”
- **OBOK** 1.2: „Jakiś napis?” -> „Na wieczku „za trzydzieści lat”. Bez „służby”, miejsca zabrakło. Żona ma z tego żarty do d…”
- **PROZNIA** 1.2: dopytanie „Jakiś napis?” nie zaczepia się o: „…Mosiężny. Na rękę patrzę z przyzwyczajenia, nie szukaj na tej podstawie paska.”
- **OBOK** 1.2.1: „Za twoją służbę?” -> „Dziadka żony. Też szóstka. Zegarek przeżył trzech naczelników, o dziadku tego nie powiem.…”
- **OBOK** 2: „Gdzie został?” -> „Na ławce na pętli. O 22:47 jeszcze go miałem, spojrzałem i odłożyłem.…”
- **OBOK** 2.1: „Na wejściu mówisz, że dopiero sięgnąłeś do pustej kieszeni.” -> „Przy odjeździe. Wtedy zrozumiałem, że został na ławce. Opowiadam od zguby, nie od każdego …”
- **LUZNE** 2.1: dopytanie „Na wejściu mówisz, że dopiero sięgnąłeś do pustej kieszeni.” nie zaczepia się o: „…Na ławce na pętli. O 22:47 jeszcze go miałem, spojrzałem i odłożyłem.”
- **PROZNIA** 2.1.1: dopytanie „Wracałeś na tę ławkę?” nie zaczepia się o: „…Wtedy zrozumiałem, że został na ławce. Opowiadam od zguby, nie od każdego przystanku.”
- **OBOK** 2.2: „Kto był w pobliżu?” -> „Dziewczynka liczyła kamienie. Pluszak leżał na ławce. Nie będę z tego robił zeznania, że d…”
- **PROZNIA** 2.2: dopytanie „Kto był w pobliżu?” nie zaczepia się o: „…Na ławce na pętli. O 22:47 jeszcze go miałem, spojrzałem i odłożyłem.”
- **OBOK** 2.2.1: „Znasz ją?” -> „Z widzenia. Na pętli częściej spotyka się tych samych ludzi niż we własnej kuchni.…”
- **PROZNIA** 2.2.1: dopytanie „Znasz ją?” nie zaczepia się o: „…Pluszak leżał na ławce. Nie będę z tego robił zeznania, że dziecko wzięło zegarek.”
- **OBOK** 3: „Jak pilnujesz kursów bez zegarka?” -> „Źle. Na oko. Dwa razy ruszyłem za wcześnie, raz ktoś nie dobiegł.…”
- **OBOK** 3.1: „Nie masz telefonu?” -> „Pada w połowie zmiany. Żona potrafi zadzwonić akurat wtedy, kiedy bateria ma ostatnie zdan…”
- **PROZNIA** 3.1: dopytanie „Nie masz telefonu?” nie zaczepia się o: „…Na oko. Dwa razy ruszyłem za wcześnie, raz ktoś nie dobiegł.”
- **OBOK** 3.1.1: „O co pyta?” -> „Czy zjadłem. Po trzydziestu latach małżeństwa nadal nie wierzy w moją samodzielność przy k…”
- **PROZNIA** 3.1.1: dopytanie „O co pyta?” nie zaczepia się o: „…Pada w połowie zmiany. Żona potrafi zadzwonić akurat wtedy, kiedy bateria ma ostatnie zdanie.”
- **LUZNE** 3.2: dopytanie „Możesz patrzeć na zegar na pętli?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Na oko. Dwa razy ruszyłem za wcześnie, raz ktoś nie dobiegł.”
- **OBOK** 3.2.1: „Ile może kosztować parę minut różnicy?” -> „Kogoś przesiadkę. Mnie wpis. Zegarowi nic się nie stanie, dlatego nie będę na niego krzycz…”
- **PROZNIA** 3.2.1: dopytanie „Ile może kosztować parę minut różnicy?” nie zaczepia się o: „…Pomiędzy przystankami zegar zostaje na pętli. Nie zawsze da się poczekać na cudzą rękę.”
- **OBOK** 4: „Co wozi szóstka ostatnim kursem?” -> „Ludzi, torby, walizki. To nadal tramwaj. Nie zmienia zawodu po zmroku.…”
- **OBOK** 4.1: „Rzeczy bez właściciela też?” -> „Zdarzają się. Jak coś leży pod ławką, lepiej zapisać, niż kopnąć i udawać, że nie ma.…”
- **LUZNE** 4.1: dopytanie „Rzeczy bez właściciela też?” nie zaczepia się o: „…To nadal tramwaj. Nie zmienia zawodu po zmroku.”
- **OBOK** 4.1.1: „Zawsze zapisujesz?” -> „Staram się. Nie każdy podaje nazwisko do torby. Moje nazwisko zostaje przy kursie tak czy …”
- **PROZNIA** 4.2: dopytanie „Ktoś prosi, żeby nie pytać?” nie zaczepia się o: „…To nadal tramwaj. Nie zmienia zawodu po zmroku.”
- **OBOK** 4.2.1: „Czyli wiesz więcej, niż mówisz?” -> „Wiem, gdzie mam się zatrzymać. Resztę zostawmy. Nie przyszedłem składać raportu z pasażeró…”
- **LUZNE** 4.2.1: dopytanie „Czyli wiesz więcej, niż mówisz?” nie zaczepia się o: „…O przystanek, o chwilę, o to, żebym nie patrzył. Nie mogę opowiadać każdej rozmowy.”
- **OBOK** 5: „Co powie żona na zgubę?” -> „Że zgubiłem pamiątkę po jej dziadku. I będzie miała rację, najgorszy rodzaj rozmowy.…”
- **OBOK** 5.1: „Już wie?” -> „Jeszcze nie powiedziałem. Telefon żyje do połowy zmiany, ja mam nadzieję odzyskać zegarek …”
- **PROZNIA** 5.1: dopytanie „Już wie?” nie zaczepia się o: „…Że zgubiłem pamiątkę po jej dziadku. I będzie miała rację, najgorszy rodzaj rozmowy.”
- **OBOK** 5.1.1: „Zataisz to, jeśli się znajdzie?” -> „Powiem przy kolacji. Jak będę miał zegarek, przynajmniej jedna rzecz w tej historii będzie…”
- **LUZNE** 5.1.1: dopytanie „Zataisz to, jeśli się znajdzie?” nie zaczepia się o: „…Jeszcze nie powiedziałem. Telefon żyje do połowy zmiany, ja mam nadzieję odzyskać zegarek do końca.”
- **OBOK** 5.2: „Dlaczego go nie zostawiasz w domu?” -> „Bo jest do używania. Trzyma czas. Dziadek nie dostał go po to, żeby potem leżał pod szkłem…”
- **LUZNE** 5.2: dopytanie „Dlaczego go nie zostawiasz w domu?” nie zaczepia się o: „…Że zgubiłem pamiątkę po jej dziadku. I będzie miała rację, najgorszy rodzaj rozmowy.”
- **OBOK** 5.2.1: „A jeśli znowu go zgubisz?” -> „To będę dwa razy głupi. Nie planuję, ale pierwszy raz też nie był w rozkładzie.…”
- **LUZNE** 5.2.1: dopytanie „A jeśli znowu go zgubisz?” nie zaczepia się o: „…Trzyma czas. Dziadek nie dostał go po to, żeby potem leżał pod szkłem.”
- **OBOK** 6: „Jak potwierdzić własność?” -> „Grawer, łańcuszek, żona. W tej kolejności, jeśli można. Żona opowie dłużej niż grawer.…”
- **OBOK** 6.1: „Zgadzasz się na telefon do niej?” -> „Jeśli trzeba. Uprzedź tylko, że chodzi o zegarek, a nie o wypadek na szóstce.…”
- **LUZNE** 6.1: dopytanie „Zgadzasz się na telefon do niej?” nie zaczepia się o: „…W tej kolejności, jeśli można. Żona opowie dłużej niż grawer.”
- **OBOK** 6.1.1: „Bo od razu pomyśli o wypadku?” -> „Jak biuro dzwoni po nocy, nikt nie zakłada, że gratulują punktualności.…”
- **OBOK** 6.2: „A gdy zatrzymam go do wyjaśnienia?” -> „Przyjdę ponownie. Tylko nie wpisuj mi potem spóźnienia jako dowodu, że się nie przejmuję.…”
- **LUZNE** 6.2: dopytanie „A gdy zatrzymam go do wyjaśnienia?” nie zaczepia się o: „…W tej kolejności, jeśli można. Żona opowie dłużej niż grawer.”
- **OBOK** 7.1: „Zdarzyło się wcześniej?” -> „Trzecia w tym miesiącu. Ostatni kurs, pod ławką po lewej. Rano znika. Nie wiem, kto odbier…”
- **LUZNE** 7.1: dopytanie „Zdarzyło się wcześniej?” nie zaczepia się o: „…Wsunięta pod ławkę. Dopisałem, żeby nie wyszło, że nic nie jechało.”
- **OBOK** 7.1.1: „Dlaczego schowałeś kartkę w zegarku?” -> „Żeby mieć przy sobie, jeśli ktoś zapyta o mój kurs. No i ktoś właśnie pyta.…”
- **LUZNE** 7.1.1: dopytanie „Dlaczego schowałeś kartkę w zegarku?” nie zaczepia się o: „…Rano znika. Nie wiem, kto odbiera.”
- **OBOK** 7.2: „Chcesz zostawić ślad czy uniknąć pytań?” -> „Jedno i drugie, jeśli się da. Wiem, że teraz wychodzi, że się nie da.…”
- **PROZNIA** 7.2: dopytanie „Chcesz zostawić ślad czy uniknąć pytań?” nie zaczepia się o: „…Wsunięta pod ławkę. Dopisałem, żeby nie wyszło, że nic nie jechało.”

## d7_kit (dzień 7, Kit Navarro, 17, drzewo)

- **OBOK** 1: „Jak rozpoznać słuchawki?” -> „Czarne. Bez kolorowych światełek. W ciemnym tramwaju nie świecą, niestety.…”
- **OBOK** 1.1: „Co trzyma je w całości?” -> „Nauszne, taśma na lewej muszli. Taśma i nadzieja. Na razie taśma lepiej.…”
- **LUZNE** 1.1: dopytanie „Co trzyma je w całości?” nie zaczepia się o: „…Bez kolorowych światełek. W ciemnym tramwaju nie świecą, niestety.”
- **PROZNIA** 1.1.1: dopytanie „Pękły przy pracy?” nie zaczepia się o: „…Taśma i nadzieja. Na razie taśma lepiej.”
- **OBOK** 1.2: „Jaka naklejka?” -> „Kot w kasku na prawej muszli. Jedzie na rowerze, odpowiedzialny obywatel. Za dolara.…”
- **LUZNE** 1.2: dopytanie „Jaka naklejka?” nie zaczepia się o: „…Bez kolorowych światełek. W ciemnym tramwaju nie świecą, niestety.”
- **OBOK** 1.2.1: „Kask nie pomógł przed zgubieniem?” -> „Jemu nic się nie stało. To ja wysiadłem bez głowy. W sensie bez słuchawek.…”
- **LUZNE** 1.2.1: dopytanie „Kask nie pomógł przed zgubieniem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Jedzie na rowerze, odpowiedzialny obywatel. Za dolara.”
- **LUZNE** 2.1: dopytanie „Wracałeś z kopiarni?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Przysnąłem i wysiadłem. Muzyka już nie grała.”
- **PROZNIA** 2.1.1: dopytanie „Dlaczego zostajesz?” nie zaczepia się o: „…Praktyki. Mam siedemnaście lat, więc po nocy oficjalnie już dawno mnie tam nie ma.”
- **LUZNE** 2.2: dopytanie „Ktoś siedział obok?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Przysnąłem i wysiadłem. Muzyka już nie grała.”
- **OBOK** 2.2.1: „Może ktoś cię budził?” -> „Tramwaj zahamował. Najlepsza funkcja transportu, pobudka w cenie biletu. Tylko pamięci nie…”
- **PROZNIA** 2.2.1: dopytanie „Może ktoś cię budził?” nie zaczepia się o: „…Nie kojarzę. Nie będę wymyślał twarzy, żeby pytanie miało odpowiedź.”
- **OBOK** 3: „Co szef ma do słuchawek?” -> „Mam słyszeć klientów i maszynę. Jak maszyna zaczyna chrupać inaczej, trzeba biec. Ja to sł…”
- **OBOK** 3.1: „A klientów?” -> „Też. Tylko wolę, jak mówią raz, a nie pokazują palcem i wzdychają.…”
- **LUZNE** 3.1: dopytanie „A klientów?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Jak maszyna zaczyna chrupać inaczej, trzeba biec. Ja to słyszę nawet z muzyką.”
- **OBOK** 3.1.1: „To po co ryzykujesz karę?” -> „Bo przez kilka godzin samo ksero robi z głowy pudełko. Muzyka przynajmniej coś zmienia.…”
- **LUZNE** 3.1.1: dopytanie „To po co ryzykujesz karę?” nie zaczepia się o: „…Też. Tylko wolę, jak mówią raz, a nie pokazują palcem i wzdychają.”
- **OBOK** 3.2: „Jaką karę dostaniesz?” -> „Dziesięć dolarów mniej. I pogadankę gratis. Serio, na samo gadanie jakoś bym zarobił uszam…”
- **PROZNIA** 3.2: dopytanie „Jaką karę dostaniesz?” nie zaczepia się o: „…Jak maszyna zaczyna chrupać inaczej, trzeba biec. Ja to słyszę nawet z muzyką.”
- **LUZNE** 3.2.1: dopytanie „Masz to gdzieś zapisane?” nie zaczepia się o: „…I pogadankę gratis. Serio, na samo gadanie jakoś bym zarobił uszami.”
- **OBOK** 4: „Co robicie w kopiarni nocą?” -> „Ksero, laminowanie, bindowanie. To samo, tylko ludzie bardziej się spieszą i mniej chcą pa…”
- **OBOK** 4.1: „Jakie zamówienie zapamiętałeś ostatnio?” -> „Ulotki ze zdjęciem kobiety. „Zaginęła”. Dużo. Takie się pamięta dłużej niż menu.…”
- **LUZNE** 4.1: dopytanie „Jakie zamówienie zapamiętałeś ostatnio?” nie zaczepia się o: „…Ksero, laminowanie, bindowanie. To samo, tylko ludzie bardziej się spieszą i mniej chcą paragonów.”
- **OBOK** 4.1.1: „Kto je zamawiał i kiedy?” -> „Facet w szarym płaszczu. Czwartek, 22:15, tysiąc sztuk. Powiedział, że żona. Uśmiechał się…”
- **LUZNE** 4.1.1: dopytanie „Kto je zamawiał i kiedy?” nie zaczepia się o: „…Dużo. Takie się pamięta dłużej niż menu.”
- **OBOK** 4.2: „Zostaje kopia zamówienia?” -> „W segregatorze, data i godzina. Szef nie wyrzuci kartki, póki da się ją przechować w więks…”
- **LUZNE** 4.2: dopytanie „Zostaje kopia zamówienia?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Ksero, laminowanie, bindowanie. To samo, tylko ludzie bardziej się spieszą i mniej chcą paragonów.”
- **LUZNE** 4.2.1: dopytanie „Każdy może tam zajrzeć?” nie zaczepia się o: „…W segregatorze, data i godzina. Szef nie wyrzuci kartki, póki da się ją przechować w większej teczce.”
- **OBOK** 5: „Jak możesz potwierdzić, że to twoje słuchawki?” -> „Opiszę je. Paragonu nie mam. Za naklejkę też nie, gdyby to miało pomóc śledztwu.…”
- **OBOK** 5.1: „Ktoś z kopiarni je zna?” -> „Szef. Ale jeśli do niego zadzwonisz, to od razu policzy dziesięć dolarów. I spyta, czemu j…”
- **LUZNE** 5.1: dopytanie „Ktoś z kopiarni je zna?” nie zaczepia się o: „…Paragonu nie mam. Za naklejkę też nie, gdyby to miało pomóc śledztwu.”
- **OBOK** 5.1.1: „Wolisz odmowę niż telefon?” -> „Wolę, żeby wystarczył kot i taśma. Jeśli nie wystarczą, powiedz wprost. Niech przynajmniej…”
- **PROZNIA** 5.1.1: dopytanie „Wolisz odmowę niż telefon?” nie zaczepia się o: „…Ale jeśli do niego zadzwonisz, to od razu policzy dziesięć dolarów. I spyta, czemu jestem tutaj.”
- **OBOK** 5.2: „Co sprawdzisz po odbiorze?” -> „Czy grają obie. Lewa czasem przerywa, trzeba ruszyć przewodem. To nie znaczy, że ktoś tuta…”
- **PROZNIA** 5.2: dopytanie „Co sprawdzisz po odbiorze?” nie zaczepia się o: „…Paragonu nie mam. Za naklejkę też nie, gdyby to miało pomóc śledztwu.”
- **OBOK** 5.2.1: „Nie chcesz sprawniejszych?” -> „Chcę też wypłaty bez potrąceń. Jedno i drugie na razie zostaje w dziale marzenia.…”
- **LUZNE** 5.2.1: dopytanie „Nie chcesz sprawniejszych?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Lewa czasem przerywa, trzeba ruszyć przewodem. To nie znaczy, że ktoś tutaj popsuł.”
- **OBOK** 6: „Co zrobisz, jeśli dziś ich nie odzyskasz?” -> „Wrócę do kopiarni. Maszyna nie przestanie chodzić, bo mam zły wieczór.…”
- **LUZNE** 6.1: dopytanie „Będziesz jeszcze mówił o tym, co tam widzisz?” nie zaczepia się o: „…Wrócę do kopiarni. Maszyna nie przestanie chodzić, bo mam zły wieczór.”
- **LUZNE** 6.1.1: dopytanie „Boisz się klienta czy szefa?” nie zaczepia się o: „…Zależy komu. Jak każde zdanie kończy się nazwiskiem w księdze, człowiek zaczyna mówić o pogodzie.”
- **OBOK** 6.2: „Co mogę zapisać o tej wizycie?” -> „Że odebrałem słuchawki. Na inne rzeczy pytaj osobno, serio. Nie wszystko jest w pakiecie.…”
- **LUZNE** 6.2: dopytanie „Co mogę zapisać o tej wizycie?” nie zaczepia się o: „…Wrócę do kopiarni. Maszyna nie przestanie chodzić, bo mam zły wieczór.”
- **OBOK** 7: „Czemu powiedziałeś o ulotkach?” -> „Bo twarz była na tysiącu kartek, a ten facet się uśmiechał. Może tak reaguje ze strachu, n…”
- **OBOK** 7.1: „Potwierdzisz godzinę, jeśli zapyta policjant?” -> „W segregatorze jest. Powiem, gdzie sprawdzić. Tylko nie róbcie ze mnie od razu kogoś, kto …”
- **LUZNE** 7.1: dopytanie „Potwierdzisz godzinę, jeśli zapyta policjant?” nie zaczepia się o: „…Może tak reaguje ze strachu, nie wiem. Nie chcę sam rozstrzygać.”
- **OBOK** 8.1: „A jeśli następnym razem zażąda więcej?” -> „To zostanę bez muzyki i bez dwóch dolarów. Nie mam na to sprytnej odpowiedzi.…”
- **LUZNE** 8.1: dopytanie „A jeśli następnym razem zażąda więcej?” nie zaczepia się o: „…Raz wziął. Serio, nie śmiej się, dwa dolary to mniej niż dziesięć.”

## d7_evan (dzień 7, Evan Doyle, 37, drzewo)

- **OBOK** 1: „Jak wygląda etui?” -> „Brązowa skóra. Znam je, nie zgłaszam przypadkowego przedmiotu.…”
- **OBOK** 1.1: „Jak się zamyka?” -> „Zatrzaskiem. Wystarczy docisnąć. Nie ma suwaka ani kłódki.…”
- **PROZNIA** 1.1: dopytanie „Jak się zamyka?” nie zaczepia się o: „…Brązowa skóra. Znam je, nie zgłaszam przypadkowego przedmiotu.”
- **PROZNIA** 1.1.1: dopytanie „Był sprawny?” nie zaczepia się o: „…Wystarczy docisnąć. Nie ma suwaka ani kłódki.”
- **OBOK** 1.2: „Co pozwoli je odróżnić od innych?” -> „Kartonik w środku. M.D. i znak nieskończoności. Jej pismo.…”
- **LUZNE** 1.2: dopytanie „Co pozwoli je odróżnić od innych?” nie zaczepia się o: „…Brązowa skóra. Znam je, nie zgłaszam przypadkowego przedmiotu.”
- **LUZNE** 1.2.1: dopytanie „Ile jest kluczy?” nie zaczepia się o: „…i znak nieskończoności. Jej pismo.”
- **OBOK** 1.2.1.1: „W etui są dwa klucze. Skąd mały z numerem 14?” -> „Drugiego nie znam. Chcę się dowiedzieć, co otwiera, nie będę udawał, że wiem.…”
- **OBOK** 2.1: „Mogła. A jeśli ktoś je znalazł i przewiózł?” -> „Wtedy sprawdzę zły przystanek. To moje godziny, nie twoje. Wolę sprawdzić niż nic nie robi…”
- **OBOK** 2.1.1: „Co zrobisz na przystanku?” -> „Poczekam. Popatrzę, kto wysiada. W końcu ktoś ją widział, nie mogła zniknąć między drzwiam…”
- **LUZNE** 2.1.1: dopytanie „Co zrobisz na przystanku?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…To moje godziny, nie twoje. Wolę sprawdzić niż nic nie robić.”
- **OBOK** 2.2.1: „Skąd wiesz, czego chce, skoro nie rozmawiacie?” -> „Znam ją. Ty znasz cudze zguby. Nie będziemy chyba porównywać, kto spędził z nią więcej cza…”
- **PROZNIA** 2.2.1: dopytanie „Skąd wiesz, czego chce, skoro nie rozmawiacie?” nie zaczepia się o: „…Ma dom, męża, spokój. Nie ma się czego bać.”
- **PROZNIA** 3.1: dopytanie „Co uznałeś za sygnał, że nie wróci?” nie zaczepia się o: „…Od czwartku wieczorem. Zgłosiłem zaginięcie tej samej nocy, od razu.”
- **OBOK** 3.1.1: „Przecież wcześniej pracowała nocą.” -> „Praca to co innego. Wiem, ile zwykle zajmuje. Nie trzeba pilnować zegarka, żeby zauważyć z…”
- **LUZNE** 3.1.1: dopytanie „Przecież wcześniej pracowała nocą.” nie zaczepia się o: „…Nie odbierała. Nie lubię, kiedy ktoś wychodzi i nie można się dowiedzieć, gdzie jest.”
- **OBOK** 3.2.1: „Czemu pytasz o źródło zamiast wyjaśnić kolejność?” -> „Bo ktoś robi ze mnie podejrzanego za to, że zacząłem szukać żony bez czekania do rana.…”
- **PROZNIA** 3.2.1: dopytanie „Czemu pytasz o źródło zamiast wyjaśnić kolejność?” nie zaczepia się o: „…Ulotki zamówiłem wcześniej, na wszelki wypadek. Kto przekazuje ci te godziny?”
- **OBOK** 4: „Co zrobisz z kluczami, jeśli je odzyskasz?” -> „Będą w domu. Tam, gdzie powinny być. Jeśli Maya wróci, nie będzie musiała ich szukać.…”
- **OBOK** 4.1: „Jak wejdzie, jeśli klucze będą w środku?” -> „Otworzę. Jestem. Właśnie to próbuję powiedzieć od początku.…”
- **LUZNE** 4.1: dopytanie „Jak wejdzie, jeśli klucze będą w środku?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Tam, gdzie powinny być. Jeśli Maya wróci, nie będzie musiała ich szukać.”
- **OBOK** 4.1.1: „A kiedy wyjdziesz jej szukać?” -> „Przecież mogę zostawić wiadomość. Nie musisz układać mi dnia, wystarczy wydać etui.…”
- **LUZNE** 4.1.1: dopytanie „A kiedy wyjdziesz jej szukać?” nie zaczepia się o: „…Jestem. Właśnie to próbuję powiedzieć od początku.”
- **OBOK** 4.2: „Chcesz zostawić jej coś przy okienku?” -> „List mogę. Tylko chciałbym wiedzieć, że trafi do niej, a nie do kolejnej szuflady.…”
- **LUZNE** 4.2: dopytanie „Chcesz zostawić jej coś przy okienku?” nie zaczepia się o: „…Tam, gdzie powinny być. Jeśli Maya wróci, nie będzie musiała ich szukać.”
- **LUZNE** 4.2.1: dopytanie „Bez obietnicy, że przyjdzie?” nie zaczepia się o: „…List mogę. Tylko chciałbym wiedzieć, że trafi do niej, a nie do kolejnej szuflady.”
- **OBOK** 5: „Dlaczego nie odbiera ich sama?” -> „Bo jej nie ma. Gdybym wiedział, gdzie jest, nie musiałbym prosić o numer tramwaju.…”
- **OBOK** 5.1: „Policja może potwierdzić twoje zgłoszenie?” -> „Może. Powiedzą też, że dorosły ma prawo wyjść z domu. Słyszałem to wystarczająco często.…”
- **PROZNIA** 5.1: dopytanie „Policja może potwierdzić twoje zgłoszenie?” nie zaczepia się o: „…Bo jej nie ma. Gdybym wiedział, gdzie jest, nie musiałbym prosić o numer tramwaju.”
- **OBOK** 5.1.1: „Nie zgadzasz się z tym?” -> „Z wyjściem tak. Ze zniknięciem bez słowa nie. Małżeństwo nie polega na zostawianiu rzeczy …”
- **LUZNE** 5.1.1: dopytanie „Nie zgadzasz się z tym?” nie zaczepia się o: „…Powiedzą też, że dorosły ma prawo wyjść z domu. Słyszałem to wystarczająco często.”
- **PROZNIA** 5.2: dopytanie „Lena może przekazać wiadomość?” nie zaczepia się o: „…Bo jej nie ma. Gdybym wiedział, gdzie jest, nie musiałbym prosić o numer tramwaju.”
- **PROZNIA** 5.2.1: dopytanie „Zapytałeś ją spokojnie?” nie zaczepia się o: „…Lena twierdzi, że nic nie wie. A jednak wszyscy pytają ją, jakby miała więcej praw niż ja.”
- **OBOK** 6: „Co mam zapisać o tej wizycie?” -> „Że Evan Doyle prosił o klucze żony i informację o ich znalezieniu. Czytelnie, bez dopisywa…”
- **OBOK** 6.1: „A jeśli odmówię informacji o trasie?” -> „Zapisz również odmowę. Wrócę. Wolę mieć ślad, niż za każdym razem zaczynać od przedstawian…”
- **PROZNIA** 6.1.1: dopytanie „Jak długo będziesz wracał?” nie zaczepia się o: „…Wrócę. Wolę mieć ślad, niż za każdym razem zaczynać od przedstawiania się.”
- **OBOK** 6.2.1: „Bo rzecz i miejsce pobytu właścicielki to nie to samo.” -> „Dla ciebie dwie rubryki. Dla mnie jedna osoba. Proszę nie rozcinać tego tak wygodnie.…”
- **LUZNE** 6.2.1: dopytanie „Bo rzecz i miejsce pobytu właścicielki to nie to samo.” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Etui świadczy, że była gdzieś niedawno, trasa mówi gdzie. Dlaczego mam zadowolić się połową?”
- **LUZNE** 7.1: dopytanie „Skąd więc wiesz, że etui jest tutaj?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…W czwórce albo w jedenastce, dlatego pytam o linię. Pory też nie podam, jeśli jej nie znam.”
- **LUZNE** 7.1.1: dopytanie „Czy opisujesz to, co widziałeś przed zaginięciem?” nie zaczepia się o: „…Rzeczy trafiają do biura, więc przyszedłem. Mam czekać, aż ktoś sam zadzwoni?”
- **OBOK** 7.2: „Co zmieni sama pora znalezienia?” -> „Zawęzi czekanie. Nie będę stał na pętli od pierwszego do ostatniego kursu, jeśli wiem, kie…”
- **PROZNIA** 7.2: dopytanie „Co zmieni sama pora znalezienia?” nie zaczepia się o: „…W czwórce albo w jedenastce, dlatego pytam o linię. Pory też nie podam, jeśli jej nie znam.”
- **OBOK** 7.2.1: „Pora znalezienia nie musi być porą jej przejazdu.” -> „To sprawdzę. Każda informacja może być niedokładna, nie znaczy, że wolę nie mieć żadnej.…”
- **LUZNE** 7.2.1: dopytanie „Pora znalezienia nie musi być porą jej przejazdu.” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zawęzi czekanie. Nie będę stał na pętli od pierwszego do ostatniego kursu, jeśli wiem, kiedy jechała.”
- **OBOK** 8: „W środku są dwa klucze. Do czego mały z numerem 14?” -> „Drugiego nie znam. Maya miała swoje sprawy. Jeśli wiesz, co otwiera, powiedz.…”
- **LUZNE** 8.1: dopytanie „Przed chwilą nie potrzebowała innych kluczy.” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Maya miała swoje sprawy. Jeśli wiesz, co otwiera, powiedz.”
- **OBOK** 10: „Za telefon zapłaciłeś sto dolarów. Dziś też liczysz na brak wpisu?” -> „Liczę, że nie będziemy udawać obcych. Wtedy udało się porozumieć, dziś pytam o własną żonę…”
- **OBOK** 11: „Telefon dostała Lena. Czemu nadal pytasz tutaj?” -> „Bo od niej niczego się nie dowiedziałem. Biuro przynajmniej musi zapisać, kiedy odmawia.…”
- **OBOK** 12: „Telefon był u ciebie. Dlaczego nie pomógł znaleźć Mai?” -> „Był zablokowany. Zaniosłem Reyesowi. Teraz szukam następnego śladu, zamiast siedzieć i pat…”
- **OBOK** 13: „Telefon nadal czeka na Mayę. Etui może czekać obok.” -> „Dwie jej rzeczy będą bezpieczne, a o niej dalej nic. Naprawdę to uznajesz za załatwienie s…”

## d8_lena_i_nora (dzień 8, Lena Brandt i Nora Vance, drzewo)

- **OBOK** 1: „Jak rozpoznać torbę?” -> „Szara. Narzędziowa, kupiłam ją Mai. Nie wygląda jak elegancki prezent, wiem.…”
- **OBOK** 1.1: „Jaki ma kształt?” -> „Podłużna, żeby weszły narzędzia. Nie plecak. Maya nosiła ją w ręce, nawet kiedy była za ci…”
- **PROZNIA** 1.1: dopytanie „Jaki ma kształt?” nie zaczepia się o: „…Narzędziowa, kupiłam ją Mai. Nie wygląda jak elegancki prezent, wiem.”
- **OBOK** 1.1.1: „Dlaczego kupiłaś właśnie ją?” -> „Bo miała porozrywane kieszenie od śrubokrętów. Chciałam kupić coś, czego nie odłoży do sza…”
- **PROZNIA** 1.1.1: dopytanie „Dlaczego kupiłaś właśnie ją?” nie zaczepia się o: „…Nie plecak. Maya nosiła ją w ręce, nawet kiedy była za ciężka.”
- **OBOK** 1.2: „Co jest charakterystycznego?” -> „Rozpruta podszewka. W środku obcęgi z żółtą izolacją i miarka z literą „M”. Ale Nora też z…”
- **PROZNIA** 1.2: dopytanie „Co jest charakterystycznego?” nie zaczepia się o: „…Narzędziowa, kupiłam ją Mai. Nie wygląda jak elegancki prezent, wiem.”
- **OBOK** 1.2.1: „Skąd ją znasz?” -> „Maya pracowała w kamienicy. Widziałam narzędzia, ale przyszłam po papier. Po kolei: torba …”
- **PROZNIA** 1.2.1: dopytanie „Skąd ją znasz?” nie zaczepia się o: „…W środku obcęgi z żółtą izolacją i miarka z literą M. Ale Nora też zna zawartość.”
- **OBOK** 2: „Jakiego papieru szukasz?” -> „Kopii pokwitowania rodziny Okoye. Bez niej mają zapłacić drugi raz albo się wyprowadzić.…”
- **OBOK** 2.1: „Za co zapłacili?” -> „Zaliczka na remont, czterysta dolarów od rodziny. Czternaście rodzin, termin rozliczenia: …”
- **OBOK** 2.1.1: „Kto przyjmował pieniądze?” -> „Iris Bell. Zostawia sobie oryginał, potem bywa, że nie pamięta wpłaty. Pamięć nie może tu …”
- **PROZNIA** 2.1.1: dopytanie „Kto przyjmował pieniądze?” nie zaczepia się o: „…Zaliczka na remont, czterysta dolarów od rodziny. Czternaście rodzin, termin rozliczenia: czwartek, dziewiąty września.”
- **OBOK** 2.2.1: „Twój zeszyt nie wystarczy jako dowód wpłaty?” -> „To mój zapis numeru. Potrzebujemy pokwitowania, na którym przyjęcie pieniędzy potwierdziła…”
- **LUZNE** 2.2.1: dopytanie „Twój zeszyt nie wystarczy jako dowód wpłaty?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Spisuję numery pokwitowań, tej kopii brakuje. Maya pracowała w kamienicy w tym samym tygodniu.”
- **OBOK** 3: „Co chcesz zrobić z torbą?” -> „Zabrać do siebie. Oddać Mai, kiedy się odezwie. Nie chcę, żeby jej rzeczy leżały wszędzie …”
- **OBOK** 3.1: „U ciebie też będą poza jej domem.” -> „U mnie przynajmniej czekają na nią. Nie na kogoś, kto przyjdzie ze swoim powodem, żeby je …”
- **OBOK** 3.1.1: „Nie ufasz Norze?” -> „Ufam, że chce pomóc rodzinie. Ale to nie znaczy, że może czytać wszystko, co Maya schowała…”
- **PROZNIA** 3.1.1: dopytanie „Nie ufasz Norze?” nie zaczepia się o: „…U mnie przynajmniej czekają na nią. Nie na kogoś, kto przyjdzie ze swoim powodem, żeby je zabrać.”
- **LUZNE** 3.2: dopytanie „A jeśli w torbie jest cudze pokwitowanie?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Oddać Mai, kiedy się odezwie. Nie chcę, żeby jej rzeczy leżały wszędzie poza domem.”
- **OBOK** 3.2.1: „Tyle ci wystarczy?” -> „Jeśli da się potwierdzić wpłatę. Przedmiot, osoba, skutek. Narzędzia nie zapłacą za remont…”
- **PROZNIA** 3.2.1: dopytanie „Tyle ci wystarczy?” nie zaczepia się o: „…Tylko trzeba oddzielić ten papier od reszty. Nie całą torbę nazwać dowodem.”
- **OBOK** 4: „Dlaczego przyszłyście razem?” -> „Żeby nie wydać torby jednej z nas, zanim druga zdąży powiedzieć, czego potrzebuje. Nie zga…”
- **LUZNE** 4.1: dopytanie „Lena, też tak uważasz?” nie zaczepia się o: „…Żeby nie wydać torby jednej z nas, zanim druga zdąży powiedzieć, czego potrzebuje. Nie zgadzamy się, ale to możemy ustalić.”
- **LUZNE** 4.1.1: dopytanie „Dasz Lenie obejrzeć papier razem z tobą?” nie zaczepia się o: „…Tylko ona mówi kopia, a potem wyciąga rękę po całą torbę. Wolę przy tym stać.”
- **OBOK** 4.2.1: „Lena?” -> „Dlatego stoimy tutaj. Gdybym umiała sama wybrać, już bym się z nią pokłóciła i poszła.…”
- **OBOK** 5: „Skąd związek torby Mai z papierami z kamienicy?” -> „Instalację. Jest elektryczką. Mówiła, że widziała coś, czego nie powinna, a potem urwała.…”
- **PROZNIA** 5.2: dopytanie „Maya zostawiała u ciebie dokumenty?” nie zaczepia się o: „…Jest elektryczką. Mówiła, że widziała coś, czego nie powinna, a potem urwała.”
- **OBOK** 5.2.1: „A jeśli nie znajdziesz potwierdzenia swojej wersji?” -> „Zostaną zapisy, ale to słabszy dowód. Nie powiem rodzinie, że to tyle samo.…”
- **OBOK** 6.1: „Zgodzisz się na takie obejrzenie?” -> „Przy mnie. I tylko tego, co dotyczy wpłaty. Nie chcę później słyszeć, że przy okazji znale…”
- **LUZNE** 6.1: dopytanie „Zgodzisz się na takie obejrzenie?” nie zaczepia się o: „…Trzeba jednak wiedzieć, co zasłaniamy. Kopia bez nazwiska może dowodzić wpłaty, ale gorzej dowodzi, kto zapłacił.”
- **OBOK** 6.1.1: „Jeśli to wydłuży odbiór?” -> „Poczekam. Wolę stać przy szybie niż potem zgadywać, co ktoś zrobił z jej rzeczami.…”
- **LUZNE** 6.1.1: dopytanie „Jeśli to wydłuży odbiór?” nie zaczepia się o: „…I tylko tego, co dotyczy wpłaty. Nie chcę później słyszeć, że przy okazji znaleziono coś jeszcze.”
- **OBOK** 6.2: „Gdzie miałby zostać dokument?” -> „W biurze, z potwierdzeniem. Torba dla Leny. Inaczej jedna z nas wyjdzie z cudzą sprawą pod…”
- **PROZNIA** 6.2: dopytanie „Gdzie miałby zostać dokument?” nie zaczepia się o: „…Trzeba jednak wiedzieć, co zasłaniamy. Kopia bez nazwiska może dowodzić wpłaty, ale gorzej dowodzi, kto zapłacił.”
- **LUZNE** 6.2.1: dopytanie „To załatwia problem rodziny?” nie zaczepia się o: „…Torba dla Leny. Inaczej jedna z nas wyjdzie z cudzą sprawą pod pachą.”
- **LUZNE** 7.1: dopytanie „Lena, wiedziałaś o tej kopii?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Znam podpis z innych pokwitowań. Teraz mamy coś, co można porównać, nie tylko to, co pamiętam.”
- **OBOK** 9: „Evan przeczytał wiadomość. Co się stało potem?” -> „Przyszedł pod moje drzwi. Krzyczał, aż wyszła sąsiadka. Dlatego tym razem stoję przy odbio…”
- **OBOK** 10: „Telefon czeka tutaj. Torba też może zostać?” -> „Może. Tylko ja wtedy znowu wrócę do domu bez niczego, a Maya nadal nie będzie wiedziała, g…”

## d8_bree (dzień 8, Bree Halm, 29, drzewo)

- **OBOK** 1: „Jak wygląda aparat?” -> „Srebrny. Analogowy. Słuchaj, mam paragon, ale mogę też opisać.…”
- **PROZNIA** 1.1: dopytanie „Duży czy kieszonkowy?” nie zaczepia się o: „…Analogowy. Słuchaj, mam paragon, ale mogę też opisać.”
- **OBOK** 1.2: „Ma uszkodzenia?” -> „Wgniecenie w lewym rogu. Brat upuścił na schodach. Aparat ma charakter, tak twierdzi.…”
- **PROZNIA** 1.2: dopytanie „Ma uszkodzenia?” nie zaczepia się o: „…Analogowy. Słuchaj, mam paragon, ale mogę też opisać.”
- **PROZNIA** 1.3: dopytanie „Jakieś inicjały albo znak pod klapką?” nie zaczepia się o: „…Analogowy. Słuchaj, mam paragon, ale mogę też opisać.”
- **OBOK** 1.3.1: „Pod klapką baterii jest R.O. Czyje to inicjały?” -> „Rafa Okoye. Sąsiad pożyczył aparat bratu. Mam paragon, ale rozumiem, że teraz będziesz pyt…”
- **OBOK** 2.1: „Co się stało bratu?” -> „Teo, Teodor Halm, ortopedia. Noga w gipsie, rower. Twierdzi, że nie jego wina. Brzmi znajo…”
- **OBOK** 2.1.1: „Można z nim potwierdzić aparat?” -> „Teraz? W szpitalu? Słuchaj, mam paragon, właśnie po to go przyniosłam, żeby nie budzić cho…”
- **LUZNE** 2.1.1: dopytanie „Można z nim potwierdzić aparat?” nie zaczepia się o: „…Twierdzi, że nie jego wina. Brzmi znajomo?”
- **OBOK** 2.2: „Kiedy zorientowałaś się, że go nie masz?” -> „Po wyjściu. Ramię lżejsze, pasek został na siedzeniu. Nie trzeba do tego śledztwa.…”
- **LUZNE** 2.2: dopytanie „Kiedy zorientowałaś się, że go nie masz?” nie zaczepia się o: „…Rozmawiałam z lekarzem brata, nie sprawdzałam godziny. Człowiek słyszy o szpitalu i zapomina o rzeczach.”
- **PROZNIA** 2.2.1: dopytanie „Wróciłaś na pętlę?” nie zaczepia się o: „…Ramię lżejsze, pasek został na siedzeniu. Nie trzeba do tego śledztwa.”
- **OBOK** 3: „Co dokładnie potwierdza paragon?” -> „Zakup srebrnego aparatu w komisie na Rynku. Cena, data. Mam zdjęcie w telefonie.…”
- **PROZNIA** 3.1: dopytanie „Jest numer seryjny?” nie zaczepia się o: „…Cena, data. Mam zdjęcie w telefonie.”
- **LUZNE** 3.1.1: dopytanie „Więc może dotyczyć innego srebrnego aparatu.” nie zaczepia się o: „…W tym komisie najwyraźniej nie wpisali. Ja nie drukuję ich paragonów.”
- **OBOK** 3.2.1: „Kto ma oryginał?” -> „Brat. Nie mam przy sobie całej szuflady jego dokumentów. Miało wystarczyć potwierdzenie za…”
- **LUZNE** 3.2.1: dopytanie „Kto ma oryginał?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Bo telefon mam przy sobie. Papier po dwóch latach wygląda gorzej, a zdjęcie da się powiększyć.”
- **OBOK** 4.1: „Skoro nie widziałaś, skąd wiesz, że nieważne?” -> „Powiedziałam „pewnie”. Ludzie robią zdjęcia na wakacjach. To nie jest tajna informacja.…”
- **LUZNE** 4.1.1: dopytanie „Aparat jest potrzebny czy właśnie film?” nie zaczepia się o: „…Ludzie robią zdjęcia na wakacjach. To nie jest tajna informacja.”
- **OBOK** 4.2.1: „To czemu mówisz, że nic ważnego?” -> „Dla niego ważne. Dla biura nie. Nie każde rodzinne zdjęcie trzeba oglądać przez lupę.…”
- **LUZNE** 4.2.1: dopytanie „To czemu mówisz, że nic ważnego?” nie zaczepia się o: „…Mieszka daleko, lubi papierowe zdjęcia. Nie zrobi tego bez filmu, prawda?”
- **OBOK** 5: „Dlaczego musi wrócić dziś?” -> „Brat czeka. Jeśli mam drugi raz jechać do szpitala, wolę z tym, po co mnie wysłał.…”
- **OBOK** 5.1: „Co się stanie, jeśli poczeka?” -> „Ja stracę kolejny wieczór, on będzie dzwonił. Nie wszystkim płacą za siedzenie przy szybie…”
- **LUZNE** 5.1: dopytanie „Co się stanie, jeśli poczeka?” nie zaczepia się o: „…Brat czeka. Jeśli mam drugi raz jechać do szpitala, wolę z tym, po co mnie wysłał.”
- **LUZNE** 5.1.1: dopytanie „Bez potwierdzenia numeru aparat może zostać w depozycie.” nie zaczepia się o: „…Ja stracę kolejny wieczór, on będzie dzwonił. Nie wszystkim płacą za siedzenie przy szybie.”
- **OBOK** 5.2: „Może przyjść ktoś inny z potwierdzeniem?” -> „Po to przyszłam ja. Jeśli sprowadzisz całą rodzinę, nadal będziecie patrzeć na ten sam par…”
- **PROZNIA** 5.2: dopytanie „Może przyjść ktoś inny z potwierdzeniem?” nie zaczepia się o: „…Brat czeka. Jeśli mam drugi raz jechać do szpitala, wolę z tym, po co mnie wysłał.”
- **OBOK** 5.2.1: „A właściciel z dokumentem zawierającym numer?” -> „Powiem bratu, czego żądasz. Ale nie obiecuję, że nagle pojawi się papier, którego komis ni…”
- **LUZNE** 5.2.1: dopytanie „A właściciel z dokumentem zawierającym numer?” nie zaczepia się o: „…Po to przyszłam ja. Jeśli sprowadzisz całą rodzinę, nadal będziecie patrzeć na ten sam paragon.”
- **OBOK** 6: „Co mam zapisać jako podstawę wydania?” -> „Paragon i mój odbiór. Bree Halm. Słuchaj, przecież nie zakrywam twarzy.…”
- **LUZNE** 6.1: dopytanie „Odbierasz własny aparat czy w cudzym imieniu?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Bree Halm. Słuchaj, przecież nie zakrywam twarzy.”
- **PROZNIA** 6.1.1: dopytanie „Masz od niego upoważnienie?” nie zaczepia się o: „…Mówiłam od wejścia. Nie będę teraz twierdzić, że chodzi o mój.”
- **OBOK** 6.2: „Co, jeśli zgłosi się inny właściciel?” -> „Pokażesz, komu wydano. Po to zapisujesz nazwisko. Nie każesz chyba każdej rzeczy czekać na…”
- **LUZNE** 6.2: dopytanie „Co, jeśli zgłosi się inny właściciel?” nie zaczepia się o: „…Bree Halm. Słuchaj, przecież nie zakrywam twarzy.”
- **OBOK** 6.2.1: „Zgadzasz się wrócić wyjaśnić?” -> „Jeśli naprawdę ktoś przyjdzie, nie jeśli komuś wyda się podobna. Słuchaj, zostawmy choć ty…”
- **PROZNIA** 6.2.1: dopytanie „Zgadzasz się wrócić wyjaśnić?” nie zaczepia się o: „…Po to zapisujesz nazwisko. Nie każesz chyba każdej rzeczy czekać na wszystkich mieszkańców.”
- **OBOK** 7: „Pod klapką jest „R.O.”. Czyje inicjały?” -> „Raf Okoye, sąsiad. Pożyczył bratu. Paragon nadal mam, to przecież nie znika tylko dlatego,…”
- **OBOK** 7.1: „Na pasku klucz do lokalu Okoye. Kto naprawdę cię przysłał?” -> „Ktoś płaci za odbiór. Tyle powiem. Nie pytam, co jest na kliszy, i nie będę zgadywać za ci…”
- **LUZNE** 7.1: dopytanie „Na pasku klucz do lokalu Okoye. Kto naprawdę cię przysłał?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Pożyczył bratu. Paragon nadal mam, to przecież nie znika tylko dlatego, że ktoś coś wydrapał.”
- **LUZNE** 7.1.1: dopytanie „Czyli paragon nie dowodzi prawa do tego aparatu.” nie zaczepia się o: „…Tyle powiem. Nie pytam, co jest na kliszy, i nie będę zgadywać za ciebie.”

## d9_iris (dzień 9, Iris Bell i Victor Crane, drzewo)

- **OBOK** 1: „Jak wygląda piórnik?” -> „Metalowy, matowy. Bez kwiatków. Taki nie zwraca niczyjej uwagi, dopóki się nie zgubi.…”
- **OBOK** 1.1: „Jak jest zamykany?” -> „Na zatrzask. Nie potrzeba kluczyka. Wystarczy nie szarpać.…”
- **PROZNIA** 1.1: dopytanie „Jak jest zamykany?” nie zaczepia się o: „…Bez kwiatków. Taki nie zwraca niczyjej uwagi, dopóki się nie zgubi.”
- **OBOK** 1.1.1: „To wystarczy inspekcji do identyfikacji?” -> „Do porównania z magazynem. Nie do ustalenia właściciela. To osobne rubryki.…”
- **OBOK** 1.2: „Jak wygląda wnętrze?” -> „Dwa przedziały. Żetony mogą się przemieścić, ale przegródka zostaje. Proszę nie wysypywać …”
- **LUZNE** 1.2: dopytanie „Jak wygląda wnętrze?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Bez kwiatków. Taki nie zwraca niczyjej uwagi, dopóki się nie zgubi.”
- **OBOK** 1.2.1: „Ile żetonów?” -> „Pięć. To akurat można policzyć bez rozmowy o całej kamienicy.…”
- **OBOK** 2.1: „Czyje skrzynki?” -> „Moich lokatorów. Nazwisk nie podam. Nie każdy chce, żeby jego sprawy jeździły do Urzędu.…”
- **OBOK** 2.1.1: „Numery skrzynek też są tajne?” -> „Same nie. Z nazwiskami już mówią więcej. Dlatego nie układajmy tutaj całego spisu.…”
- **LUZNE** 2.1.1: dopytanie „Numery skrzynek też są tajne?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Nazwisk nie podam. Nie każdy chce, żeby jego sprawy jeździły do Urzędu.”
- **OBOK** 2.2: „Po co na żetonach opisy ludzi zamiast numerów mieszkań?” -> „Żeby goniec rozpoznał odbiorcę paczki. „Kobieta z walizką” wystarczy, nie trzeba czytać na…”
- **OBOK** 2.2.1: „Co jest w paczkach?” -> „Papiery na nowe życie. Dla ludzi, których ktoś bije albo ściga. Pobieram opłatę, nie udaję…”
- **OBOK** 2.2.1.1: „Tego też będzie dotyczył protokół?” -> „Zapiszę to, co zostało powiedziane, z podaniem źródła. Nie potwierdzę jednym podpisem całe…”
- **LUZNE** 2.2.1.1: dopytanie „Tego też będzie dotyczył protokół?” nie zaczepia się o: „…Dla ludzi, których ktoś bije albo ściga. Pobieram opłatę, nie udaję, że robię to za darmo.”
- **OBOK** 3: „Czego szuka tutaj inspekcja?” -> „Numeru odbioru i potwierdzenia. Piórnik przyjechał szóstką bez właściwego wpisu. Chcę przy…”
- **OBOK** 3.1: „Co trafi do Urzędu?” -> „Protokół. Jeden egzemplarz tam, drugi zostaje. Kto to podpisze?…”
- **PROZNIA** 3.1: dopytanie „Co trafi do Urzędu?” nie zaczepia się o: „…Piórnik przyjechał szóstką bez właściwego wpisu. Chcę przywrócić ciągłość dokumentów.”
- **WIEDZA** 3.1: „Co trafi do Urzędu?” używa „urz”, a gracz nie musiał tego usłyszeć na tej ścieżce
- **OBOK** 3.1.1: „Kto będzie go czytał?” -> „Osoby prowadzące dalsze czynności. Nie wybieram ich po nazwiskach przy tym okienku.…”
- **LUZNE** 3.1.1: dopytanie „Kto będzie go czytał?” nie zaczepia się o: „…Jeden egzemplarz tam, drugi zostaje. Kto to podpisze?”
- **OBOK** 3.2: „Dlaczego nie chcesz protokołu?” -> „Bo czyta go więcej osób, niż pan Crane zamierza. Potem ktoś niewymieniony w rozmowie wie, …”
- **PROZNIA** 3.2: dopytanie „Dlaczego nie chcesz protokołu?” nie zaczepia się o: „…Piórnik przyjechał szóstką bez właściwego wpisu. Chcę przywrócić ciągłość dokumentów.”
- **LUZNE** 3.2.1: dopytanie „Możesz zagwarantować, kto zobaczy numery?” nie zaczepia się o: „…Bo czyta go więcej osób, niż pan Crane zamierza. Potem ktoś niewymieniony w rozmowie wie, na kogo czekać.”
- **OBOK** 4: „Dlaczego odbiór jest pilny?” -> „Czworo ludzi już ma bilety i czeka na swoją kolej. Nie lubię naciskać, ale ich podróży nie…”
- **LUZNE** 4.1: dopytanie „A jeśli zostawię piórnik do soboty?” nie zaczepia się o: „…Czworo ludzi już ma bilety i czeka na swoją kolej. Nie lubię naciskać, ale ich podróży nie przełożę jednym zdaniem.”
- **OBOK** 4.1.1: „Nie możesz przekazać paczek bez żetonów?” -> „Żetony służą właśnie temu, żeby nie wydawać na ładną opowieść. Tobie powinno to być bliski…”
- **LUZNE** 4.1.1: dopytanie „Nie możesz przekazać paczek bez żetonów?” nie zaczepia się o: „…Jedna rodzina jedzie jutro o 5:40. W sobotę będzie można bardzo spokojnie wyjaśnić, dlaczego nie pojechała.”
- **PROZNIA** 4.2: dopytanie „Możesz sprawdzić i od razu zwrócić?” nie zaczepia się o: „…Czworo ludzi już ma bilety i czeka na swoją kolej. Nie lubię naciskać, ale ich podróży nie przełożę jednym zdaniem.”
- **OBOK** 4.2.1: „Wydanie po spisaniu ci wystarczy?” -> „Dostanę piórnik. Ludzie dostaną ryzyko, o którym ich nie uprzedziłam. To nie jest ten sam …”
- **PROZNIA** 4.2.1: dopytanie „Wydanie po spisaniu ci wystarczy?” nie zaczepia się o: „…Sprawdzenie tworzy zapis. Jeśli ktoś liczy, że po obejrzeniu zapomnę numery, niech nie nazywa tego kontrolą.”
- **OBOK** 5: „Co da jeden egzemplarz zamiast dwóch?” -> „Potwierdzi czynność tutaj. Nie zakończy pełnego obiegu. Zapiszę również, dlaczego drugiego…”
- **LUZNE** 5.1: dopytanie „Uznasz to za odmowę współpracy?” nie zaczepia się o: „…Nie zakończy pełnego obiegu. Zapiszę również, dlaczego drugiego nie otrzymałem.”
- **LUZNE** 5.1.1: dopytanie „Możesz na tym poprzestać?” nie zaczepia się o: „…Za ograniczoną współpracę. Słowa mają znaczenie, nawet kiedy wynik ci się nie podoba.”
- **LUZNE** 5.2: dopytanie „Czy taki kompromis ci odpowiada?” nie zaczepia się o: „…Nie zakończy pełnego obiegu. Zapiszę również, dlaczego drugiego nie otrzymałem.”
- **OBOK** 5.2.1: „Wolisz więc brak jakiegokolwiek zapisu?” -> „Wolę dostać rzecz. Wpis staje się moją sprawą wtedy, kiedy kogoś po nim znajdą.…”
- **PROZNIA** 5.2.1: dopytanie „Wolisz więc brak jakiegokolwiek zapisu?” nie zaczepia się o: „…Pan Crane ma podpis, ja nadal nie mam piórnika. Czasem kompromis oznacza tylko, że obie strony stoją dłużej.”
- **OBOK** 6: „Co masz z pomagania tym ludziom?” -> „Opłatę za pracę i kłopoty, których nie biorą na siebie inni. Nie przyszłam po odznakę za d…”
- **OBOK** 6.1: „A jeśli ktoś nie ma pieniędzy?” -> „Wtedy jest trudniej. Nie będę obiecywać przy inspektorze, że wszystkim wszystko załatwię.…”
- **LUZNE** 6.1: dopytanie „A jeśli ktoś nie ma pieniędzy?” nie zaczepia się o: „…Opłatę za pracę i kłopoty, których nie biorą na siebie inni. Nie przyszłam po odznakę za dobroć.”
- **LUZNE** 6.1.1: dopytanie „Księga to pokaże?” nie zaczepia się o: „…Wtedy jest trudniej. Nie będę obiecywać przy inspektorze, że wszystkim wszystko załatwię.”
- **OBOK** 6.2: „Można ci odmówić bez utraty twojej pomocy?” -> „Można. Tylko konsekwencje odmowy też są prawdziwe. Nie wymyśliłam odjazdu o 5:40 na potrze…”
- **PROZNIA** 6.2: dopytanie „Można ci odmówić bez utraty twojej pomocy?” nie zaczepia się o: „…Opłatę za pracę i kłopoty, których nie biorą na siebie inni. Nie przyszłam po odznakę za dobroć.”
- **OBOK** 6.2.1: „Kto wtedy odpowiada przed czekającymi?” -> „Ja. I powiem im dokładnie, gdzie piórnik został. Bez ozdabiania.…”
- **LUZNE** 6.2.1: dopytanie „Kto wtedy odpowiada przed czekającymi?” nie zaczepia się o: „…Tylko konsekwencje odmowy też są prawdziwe. Nie wymyśliłam odjazdu o 5:40 na potrzeby tej rozmowy.”
- **OBOK** 7: „Co oznaczają opisy na odwrocie pięciu żetonów?” -> „Odbiorców paczek z papierami. Czterech opisanych, piąty czeka. Przy panu Crane nie podam n…”
- **OBOK** 10: „Poprzednia paczka została zatrzymana. Co z jej odbiorcami?” -> „Nadal pytają. Nie podałam im twoich domysłów, podałam adres biura. Dziś wolałabym nie dopi…”

## d9_stahl (dzień 9, Marek Stahl, ok. 50, drzewo)

- **OBOK** 1: „Jak wygląda kapelusz?” -> „Szary filc. Zgodnie z regulaminem zaczynam od materiału i koloru.…”
- **OBOK** 1.1: „Jaką ma wstążkę?” -> „Granatową, dookoła. Bez piór i innych dodatków.…”
- **LUZNE** 1.1: dopytanie „Jaką ma wstążkę?” nie zaczepia się o: „…Szary filc. Zgodnie z regulaminem zaczynam od materiału i koloru.”
- **OBOK** 1.1.1: „Często go nosisz?” -> „Do pracy. Kapelusz porządkuje wygląd, nawet jeśli reszta dnia nie daje się uporządkować.…”
- **LUZNE** 1.1.1: dopytanie „Często go nosisz?” nie zaczepia się o: „…Granatową, dookoła. Bez piór i innych dodatków.”
- **PROZNIA** 1.2: dopytanie „Jaki rozmiar?” nie zaczepia się o: „…Szary filc. Zgodnie z regulaminem zaczynam od materiału i koloru.”
- **OBOK** 1.2.1: „Metka podaje 56, podszewka J.K. Skąd ta pewność?” -> „Z opisu, który przygotowałem. Nie z własnego kapelusza. Dobrze, to nie moja rzecz.…”
- **LUZNE** 2.1: dopytanie „Ktoś mógł potwierdzić ten przejazd?” nie zaczepia się o: „…Na półce nad oknem, wczoraj około dwudziestej drugiej. Siedziałem sam.”
- **OBOK** 2.1.1: „Czyli samego przejazdu też nie potwierdzisz?” -> „Podaję godzinę i linię. Zgodnie z regulaminem od czegoś trzeba zacząć.…”
- **LUZNE** 2.1.1: dopytanie „Czyli samego przejazdu też nie potwierdzisz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Nikt obok nie siedział. Nie prosiłem innych pasażerów o zaświadczenia.”
- **OBOK** 2.2: „Dokąd wracałeś?” -> „Do domu, z kancelarii. Ostatnio dużo pracy przy cudzych papierach.…”
- **PROZNIA** 2.2: dopytanie „Dokąd wracałeś?” nie zaczepia się o: „…Na półce nad oknem, wczoraj około dwudziestej drugiej. Siedziałem sam.”
- **LUZNE** 3.1: dopytanie „Ktoś może potwierdzić, że go nosisz?” nie zaczepia się o: „…Został w domu. Zgłoszenie składam teraz, dokument mogę przynieść później.”
- **OBOK** 3.1.1: „Można do niej zadzwonić?” -> „O tej porze nie. Proszę zachować proporcje. Kapelusz nie staje się ważniejszy od człowieka…”
- **LUZNE** 3.1.1: dopytanie „Można do niej zadzwonić?” nie zaczepia się o: „…Jest w delegacji. Nie będziemy jej przecież ściągać dla filcu.”
- **OBOK** 3.2: „Zgodzisz się odebrać dopiero z potwierdzeniem?” -> „Jeśli tak tutaj postanowisz. Interesuje mnie, czy tak samo postępujesz z każdym.…”
- **PROZNIA** 3.2: dopytanie „Zgodzisz się odebrać dopiero z potwierdzeniem?” nie zaczepia się o: „…Został w domu. Zgłoszenie składam teraz, dokument mogę przynieść później.”
- **OBOK** 3.2.1: „Dlaczego interesują cię inni?” -> „Bo zasada, która działa raz, a raz nie, jest czyimś nastrojem. Regulamin powinien być trwa…”
- **OBOK** 4.1: „Do rozmowy potrzebny kapelusz?” -> „Pierwsze wrażenie. Zanim zacznie się sprawdzanie dokumentów, człowiek już kogoś ocenił.…”
- **OBOK** 4.1.1: „Na moje wrażenie też liczysz?” -> „Każdy, kto się przedstawia, na coś liczy. Ja przynajmniej mówię spokojnie.…”
- **OBOK** 4.2: „Możesz wziąć inny?” -> „Mógłbym. Przyszedłem jednak zgłosić ten. W biurze rzeczy znalezionych to chyba wystarczają…”
- **PROZNIA** 4.2: dopytanie „Możesz wziąć inny?” nie zaczepia się o: „…Jutro ważna rozmowa. Żona twierdzi, że bez kapelusza wyglądam nieprzekonująco.”
- **OBOK** 4.2.1: „A jeśli się nie znajdzie?” -> „Rozmowa się odbędzie. Strata kapelusza nie zwalnia z obowiązków, zgodnie z regulaminem i b…”
- **LUZNE** 4.2.1: dopytanie „A jeśli się nie znajdzie?” nie zaczepia się o: „…Przyszedłem jednak zgłosić ten. W biurze rzeczy znalezionych to chyba wystarczający powód.”
- **OBOK** 5: „Skąd tak dobrze znasz regulamin?” -> „Czytam, zanim czegoś żądam. Dzięki temu oszczędzam czas osobie po drugiej stronie.…”
- **OBOK** 5.1: „Która zasada dotyczy opisu?” -> „Że powinien pozwolić rozpoznać przedmiot. Nie pamiętam numeru punktu. Sens jest ważniejszy…”
- **LUZNE** 5.1: dopytanie „Która zasada dotyczy opisu?” nie zaczepia się o: „…Czytam, zanim czegoś żądam. Dzięki temu oszczędzam czas osobie po drugiej stronie.”
- **OBOK** 5.1.1: „A rozpoznanie oznacza prawo do odebrania?” -> „To właśnie powinno być jasno rozstrzygnięte. Podobają mi się takie pytania.…”
- **LUZNE** 5.1.1: dopytanie „A rozpoznanie oznacza prawo do odebrania?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Nie pamiętam numeru punktu. Sens jest ważniejszy od numeru.”
- **OBOK** 5.2: „Co, jeśli opis pasuje tylko z zewnątrz?” -> „Wtedy pytasz o środek. O ile wcześniej nie pokazujesz środka pytaniem. Inaczej każdy staje…”
- **LUZNE** 5.2: dopytanie „Co, jeśli opis pasuje tylko z zewnątrz?” nie zaczepia się o: „…Czytam, zanim czegoś żądam. Dzięki temu oszczędzam czas osobie po drugiej stronie.”
- **PROZNIA** 5.2.1: dopytanie „Skąd wiesz, że tutaj tak sprawdzamy?” nie zaczepia się o: „…O ile wcześniej nie pokazujesz środka pytaniem. Inaczej każdy staje się właścicielem.”
- **OBOK** 6: „Co zrobisz po odmowie?” -> „Odejdę. Ale może postoję chwilę, jeśli wolno. Lubię popatrzeć, jak pracuje nowe okienko.…”
- **OBOK** 6.1: „Na co chcesz patrzeć?” -> „Na kolejność. Kto mówi, kto pyta, kiedy otwiera się księga. Drobiazgi zdradzają organizacj…”
- **PROZNIA** 6.1: dopytanie „Na co chcesz patrzeć?” nie zaczepia się o: „…Ale może postoję chwilę, jeśli wolno. Lubię popatrzeć, jak pracuje nowe okienko.”
- **OBOK** 6.1.1: „Ktoś ci za to płaci?” -> „Zadajesz coraz ciekawsze pytania. Na to przy zgłoszeniu kapelusza nie muszę odpowiadać.…”
- **LUZNE** 6.1.1: dopytanie „Ktoś ci za to płaci?” nie zaczepia się o: „…Kto mówi, kto pyta, kiedy otwiera się księga. Drobiazgi zdradzają organizację pracy.”
- **PROZNIA** 6.2: dopytanie „Nie przeszkadza ci kolejka?” nie zaczepia się o: „…Ale może postoję chwilę, jeśli wolno. Lubię popatrzeć, jak pracuje nowe okienko.”
- **OBOK** 6.2.1: „A jeśli poproszę, żebyś wyszedł?” -> „Wyjdę. Też warto wiedzieć, gdzie kończy się cierpliwość do uprzejmej rozmowy.…”
- **LUZNE** 6.2.1: dopytanie „A jeśli poproszę, żebyś wyszedł?” nie zaczepia się o: „…Stanę z boku. Jeśli to niedozwolone, proszę wskazać zasadę.”
- **OBOK** 7.1: „Dla kogo to sprawdzasz?” -> „Dla siebie i ludzi, którzy płacą za wiedzę o nocnej zmianie. Nazwisk nie podam, zgodnie z …”
- **OBOK** 7.2: „Co o tym okienku im powiesz?” -> „Że trzeba znać więcej niż wstążkę. Resztę jeszcze obserwuję.…”
- **LUZNE** 7.2: dopytanie „Co o tym okienku im powiesz?” nie zaczepia się o: „…Sprawdzałem, czy dobry opis wystarczy do wydania. Nie wystarczył, jak widzę.”

## d10_vera (dzień 10, Vera Kovacs, 62, drzewo)

- **OBOK** 1: „Jak rozpoznać pudełko?” -> „Z zaplecza, blaszane. Nie drewniane. Na drewnie przynajmniej człowiek by się wahał, zanim …”
- **OBOK** 1.1: „Jaki ma kształt?” -> „Niskie, prostokątne. Mieściło się w szafce Sama. Nie jest to wielka skrzynia z warsztatu.…”
- **PROZNIA** 1.1: dopytanie „Jaki ma kształt?” nie zaczepia się o: „…Nie drewniane. Na drewnie przynajmniej człowiek by się wahał, zanim usiądzie.”
- **OBOK** 1.1.1: „Jak się zamyka?” -> „Na sprzączkę, z oporem. Proszę docisnąć wieko, nie ciągnąć za blachę.…”
- **PROZNIA** 1.1.1: dopytanie „Jak się zamyka?” nie zaczepia się o: „…Mieściło się w szafce Sama. Nie jest to wielka skrzynia z warsztatu.”
- **OBOK** 1.2: „Ma jakiś ślad?” -> „Wgniecenie na wieczku. Usiadłam na nim w poczekalni. To akurat mogę poświadczyć osobiście.…”
- **PROZNIA** 1.2: dopytanie „Ma jakiś ślad?” nie zaczepia się o: „…Nie drewniane. Na drewnie przynajmniej człowiek by się wahał, zanim usiądzie.”
- **OBOK** 1.2.1: „Sam wiedział o wgnieceniu?” -> „To nie jest rzecz, którą łatwo ukryć. Gorzej mi powiedzieć, że je teraz zgubiłam, niż że n…”
- **LUZNE** 1.2.1: dopytanie „Sam wiedział o wgnieceniu?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Usiadłam na nim w poczekalni. To akurat mogę poświadczyć osobiście.”
- **OBOK** 2.1: „Po co zabrałaś je z szafki?” -> „Żeby nie wyrzucono. Zaplecze nie jest przechowalnią, tak mówią. Sam nie wrócił, więc rzecz…”
- **LUZNE** 2.1: dopytanie „Po co zabrałaś je z szafki?” nie zaczepia się o: „…Klucze miałam przy pasie, ręce po wyjściu puste. Wtedy zauważyłam.”
- **OBOK** 2.1.1: „Zabranie bez niego nie robi z nich twoich.” -> „Wiem. Dlatego od wejścia mówię, czyje. Nie chcę podpisywać się za właściciela.…”
- **OBOK** 2.2: „Dlaczego nie zostawiłaś go w zajezdni?” -> „Szafkę zamykają w przyszły piątek. Potem zbiorcze archiwum. Chciałam mieć co mu oddać, kie…”
- **LUZNE** 2.2: dopytanie „Dlaczego nie zostawiłaś go w zajezdni?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Klucze miałam przy pasie, ręce po wyjściu puste. Wtedy zauważyłam.”
- **OBOK** 3: „Kim jest dla ciebie Sam?” -> „Kolegą z nocy. On przy szybie, ja na zapleczu. Człowiek wie, gdzie pali się drugie światło…”
- **OBOK** 3.1: „Kiedy odszedł?” -> „Ponad miesiąc temu. Bez pożegnania. Szafka została, więc nie wyglądało to od razu jak koni…”
- **PROZNIA** 3.1: dopytanie „Kiedy odszedł?” nie zaczepia się o: „…On przy szybie, ja na zapleczu. Człowiek wie, gdzie pali się drugie światło.”
- **OBOK** 3.1.1: „Dalej jej pilnujesz?” -> „Dopóki mogę. Przy zamykaniu przechodzę obok. Czasem sprawdzam, czy nic się nie zmieniło, c…”
- **LUZNE** 3.1.1: dopytanie „Dalej jej pilnujesz?” nie zaczepia się o: „…Bez pożegnania. Szafka została, więc nie wyglądało to od razu jak koniec.”
- **OBOK** 3.2: „Dlaczego zostawił ci rzeczy?” -> „Prosił, żebym trzymała, aż wróci. Nie podał dnia. Teraz każdy chce ode mnie daty, której n…”
- **PROZNIA** 3.2: dopytanie „Dlaczego zostawił ci rzeczy?” nie zaczepia się o: „…On przy szybie, ja na zapleczu. Człowiek wie, gdzie pali się drugie światło.”
- **OBOK** 3.2.1: „Dlaczego się zgodziłaś?” -> „Bo to było łatwe zdanie: „potrzymasz?”. Trudne zrobiło się później.…”
- **PROZNIA** 3.2.1: dopytanie „Dlaczego się zgodziłaś?” nie zaczepia się o: „…Nie podał dnia. Teraz każdy chce ode mnie daty, której nie dostałam.”
- **OBOK** 4: „Co jest w pudełku?” -> „Pasek od zegarka, bez tarczy, i karta inwentarza. Nic, co ktoś kupi na straganie.…”
- **PROZNIA** 4.1.1: dopytanie „Sam nie powiedział?” nie zaczepia się o: „…Nie wiem. Nie wyrzucam rzeczy kolegi dlatego, że nie umiem wyjaśnić każdej z osobna.”
- **OBOK** 4.2: „Czego dotyczy karta?” -> „Inwentarza szuflady. Numer jest na niej. Wolę odczytać, niż pomylić i zrobić nowy problem.…”
- **OBOK** 5: „Co stanie się po zamknięciu szafki?” -> „Rzeczy pójdą do zbiorczego archiwum Urzędu. Dalej będę miała numer, ale nie będę miała pud…”
- **OBOK** 5.1: „Sam nie może odebrać z archiwum?” -> „Może próbować. Najpierw będzie musiał dowiedzieć się, pod czym zapisali. Nie chcę mu zosta…”
- **LUZNE** 5.1.1: dopytanie „To dlatego wyniosłaś pudełko?” nie zaczepia się o: „…Najpierw będzie musiał dowiedzieć się, pod czym zapisali. Nie chcę mu zostawić samej kolejki do następnego okienka.”
- **OBOK** 5.2: „Co napisałaś Samowi?” -> „Że szafkę zamykają w piątek. Że ma przyjść po swoje. Bez wyrzutów, choć pierwszą kartkę wy…”
- **PROZNIA** 5.2: dopytanie „Co napisałaś Samowi?” nie zaczepia się o: „…Rzeczy pójdą do zbiorczego archiwum Urzędu. Dalej będę miała numer, ale nie będę miała pudełka.”
- **OBOK** 5.2.1: „Co było na pierwszej?” -> „Żeby wreszcie się odezwał. Nie wysłałam. Nie chcę, żeby bał się przyjść jeszcze bardziej.…”
- **OBOK** 6: „Co chcesz ode mnie dla Sama?” -> „Żeby jego rzeczy zostały jego rzeczami. Osobistymi, nie zbiorczą pozostałością po dyżurnym…”
- **OBOK** 6.1.1: „A jeśli upomni się Urząd?” -> „Powiem, skąd je wzięłam. Nie będę opowiadać, że samo wyszło z szafki.…”
- **LUZNE** 6.1.1: dopytanie „A jeśli upomni się Urząd?” nie zaczepia się o: „…Vera Kovacs. Nie podpiszę, że pudełko moje.”
- **OBOK** 6.2: „Komu powiedzieć o planowanym powrocie?” -> „Sam ma dostać wiadomość. Reszcie nie obiecuj za niego. Może nie chce wejść do pomieszczeni…”
- **PROZNIA** 6.2: dopytanie „Komu powiedzieć o planowanym powrocie?” nie zaczepia się o: „…Żeby jego rzeczy zostały jego rzeczami. Osobistymi, nie zbiorczą pozostałością po dyżurnym.”
- **PROZNIA** 6.2.1: dopytanie „Boisz się, że nie wróci przez nas?” nie zaczepia się o: „…Reszcie nie obiecuj za niego. Może nie chce wejść do pomieszczenia pełnego czekających ludzi.”
- **OBOK** 7: „Karta wskazuje szufladę numer sześć z naszego biura. Dlaczego?” -> „Należała do Sama. Klucz zostawiłam w niej dla następnej osoby przy szybie. Żeby nie trzeba…”
- **OBOK** 7.1: „Dlaczego klucz został właśnie w szufladzie?” -> „Zostawiłam go dla następnej osoby przy szybie. Nie pomyślałam, że bez opisu będzie wygląda…”
- **LUZNE** 7.2: dopytanie „Na wieku jest „Teczka jest pusta. Tak ma być”. Co to znaczy?” nie zaczepia się o: „…Klucz zostawiłam w niej dla następnej osoby przy szybie. Żeby nie trzeba było zaczynać od szukania.”
- **OBOK** 7.2.1.1: „A jeśli ktoś weźmie to za twoje potwierdzenie?” -> „To proszę dopisać: Vera nie wie. Niech chociaż jedno zdanie o mnie będzie dokładne.…”
- **LUZNE** 7.2.1.1: dopytanie „A jeśli ktoś weźmie to za twoje potwierdzenie?” nie zaczepia się o: „…Dlatego mówię, że są jego. Gorzej byłoby dopowiedzieć coś od siebie, żeby brzmiało pewniej.”

## d10_dario (dzień 10, Dario Ruiz, 29, drzewo)

- **OBOK** 1: „Jak rozpoznać zeszyt?” -> „Okładka tłusta. Nosiłem razem z kanapką. Pachnie cebulą, uprzedzam, żeby nie było reklamac…”
- **LUZNE** 1.1: dopytanie „Jaki gruby?” nie zaczepia się o: „…Nosiłem razem z kanapką. Pachnie cebulą, uprzedzam, żeby nie było reklamacji.”
- **OBOK** 1.1.1: „Przepisy między dyżurami?” -> „Jak ktoś opowiada dobrą zupę, zapisuję tam, gdzie mam papier. Dyżur potem łatwiej znaleźć,…”
- **OBOK** 1.2: „Czym się zamyka?” -> „Gumką, ledwo trzymającą. Bez niej kartki się rozchodzą. Nie ciągnij za mocno, bo zostanie …”
- **PROZNIA** 1.2: dopytanie „Czym się zamyka?” nie zaczepia się o: „…Nosiłem razem z kanapką. Pachnie cebulą, uprzedzam, żeby nie było reklamacji.”
- **OBOK** 1.2.1: „Są luźne kartki?” -> „Trochę. Dlatego ta gumka. Gdyby coś wypadło, też poproszę, nawet jeśli wygląda jak lista z…”
- **OBOK** 2: „Gdzie został w jedenastce?” -> „Na pętli, obok kanapki. Kanapkę zjadłem, zeszyt pojechał dalej. Ręce wykonały połowę zadan…”
- **OBOK** 2.1: „Nie zauważyłeś, że go nie niesiesz?” -> „Miałem drugą kanapkę. Jedzenie mnie zajmuje. Masz, weź, jeszcze jest dobra.…”
- **LUZNE** 2.1: dopytanie „Nie zauważyłeś, że go nie niesiesz?” nie zaczepia się o: „…Kanapkę zjadłem, zeszyt pojechał dalej. Ręce wykonały połowę zadania.”
- **OBOK** 2.1.1: „Próbujesz zapłacić kanapką?” -> „Dzielę się. Jeśli trzeba zapisać, wpisz cebulę. Nie chcę zeszytu bez pokwitowania za kromk…”
- **LUZNE** 2.1.1: dopytanie „Próbujesz zapłacić kanapką?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Jedzenie mnie zajmuje. Masz, weź, jeszcze jest dobra.”
- **OBOK** 2.2: „Kto prowadził następny kurs?” -> „Ktoś z naszej zmiany. Właśnie nazwisko sprawdziłbym w zeszycie. Bez niego wszystkich znam …”
- **PROZNIA** 2.2: dopytanie „Kto prowadził następny kurs?” nie zaczepia się o: „…Kanapkę zjadłem, zeszyt pojechał dalej. Ręce wykonały połowę zadania.”
- **LUZNE** 2.2.1: dopytanie „Motorniczy nie pamięta grafiku?” nie zaczepia się o: „…Właśnie nazwisko sprawdziłbym w zeszycie. Bez niego wszystkich znam tylko z twarzy.”
- **OBOK** 3: „Dlaczego pytasz o Sama?” -> „Kolega. Miał tutaj herbatę. Ja przynosiłem kanapki. Teraz nikt nie wie, gdzie go nosi.…”
- **OBOK** 3.1: „Od kiedy go nie widzisz?” -> „Ponad miesiąc. Powiedział, że idzie do portu coś załatwić. Potem przestał odbierać.…”
- **LUZNE** 3.1: dopytanie „Od kiedy go nie widzisz?” nie zaczepia się o: „…Ja przynosiłem kanapki. Teraz nikt nie wie, gdzie go nosi.”
- **OBOK** 3.2: „Bywał u ciebie poza pracą?” -> „Znałem go tutaj. To też jest znajomość. Nie muszę wiedzieć, jaki ma stół w kuchni, żeby za…”
- **PROZNIA** 3.2: dopytanie „Bywał u ciebie poza pracą?” nie zaczepia się o: „…Ja przynosiłem kanapki. Teraz nikt nie wie, gdzie go nosi.”
- **OBOK** 3.2.1: „Może po prostu nie chce kontaktu?” -> „Może. Niech powie, odpuszczę. Ciszy nie umiem odróżnić od tego, że coś mu się stało.…”
- **PROZNIA** 3.2.1: dopytanie „Może po prostu nie chce kontaktu?” nie zaczepia się o: „…To też jest znajomość. Nie muszę wiedzieć, jaki ma stół w kuchni, żeby zauważyć, że go nie ma.”
- **OBOK** 4: „Gdzie już pytałeś o Sama?” -> „Po zajezdni. Tych, co przychodzą przed świtem, i tych, co wychodzą. Każdy odsyła do następ…”
- **OBOK** 4.1: „Dlaczego znów przychodzisz do okienka?” -> „Bo to jego miejsce. Ktoś kiedyś zapyta o niego nie mnie, tylko tutaj. Nie chcę przegapić.…”
- **OBOK** 4.1.1: „Co zrobisz, jeśli nikt nic nie wie?” -> „Wrócę. Kanapki i tak robię. Jedna więcej mnie nie zrujnuje.…”
- **LUZNE** 4.1.1: dopytanie „Co zrobisz, jeśli nikt nic nie wie?” nie zaczepia się o: „…Ktoś kiedyś zapyta o niego nie mnie, tylko tutaj. Nie chcę przegapić.”
- **OBOK** 4.2: „Rozpowiadasz wszystko, co usłyszysz?” -> „Jak dobrą wiadomość, to pewnie tak. W zajezdni ludzie też czekają. Złą najpierw sprawdzę.…”
- **PROZNIA** 4.2: dopytanie „Rozpowiadasz wszystko, co usłyszysz?” nie zaczepia się o: „…Tych, co przychodzą przed świtem, i tych, co wychodzą. Każdy odsyła do następnego.”
- **OBOK** 4.2.1: „Dobra też może zaszkodzić.” -> „To powiedz, jeśli coś ma zostać przy szybie. Nie czytam z miny tak dobrze, jak z grafiku.…”
- **LUZNE** 4.2.1: dopytanie „Dobra też może zaszkodzić.” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…W zajezdni ludzie też czekają. Złą najpierw sprawdzę.”
- **OBOK** 5: „Jak poradzisz sobie bez zeszytu?” -> „Spytam o zmianę, potem o następną. W końcu ktoś powie, że mam przestać pytać i zapisywać. …”
- **LUZNE** 5.1: dopytanie „Nie możesz mieć osobnej kartki z grafikiem?” nie zaczepia się o: „…W końcu ktoś powie, że mam przestać pytać i zapisywać. No właśnie zapisuję.”
- **PROZNIA** 5.1.1: dopytanie „Telefon?” nie zaczepia się o: „…Mogę. Tylko osobna kartka zawsze jest w innej kieszeni niż ta, którą sprawdzam.”
- **OBOK** 5.2: „Co grozi za spóźnienie?” -> „Dodatkowy dyżur, zła mina szefa. Ja to przeżyję, gorzej ktoś, kto czeka na tramwaj do robo…”
- **PROZNIA** 5.2: dopytanie „Co grozi za spóźnienie?” nie zaczepia się o: „…W końcu ktoś powie, że mam przestać pytać i zapisywać. No właśnie zapisuję.”
- **PROZNIA** 5.2.1: dopytanie „Możesz od razu zadzwonić po godzinę zmiany?” nie zaczepia się o: „…Dodatkowy dyżur, zła mina szefa. Ja to przeżyję, gorzej ktoś, kto czeka na tramwaj do roboty.”
- **OBOK** 6: „Co jeszcze w nim zapisujesz?” -> „Numery telefonów, przepisy, cudze długi. Nie wszystko, czego się nie spłaci, warto skreśla…”
- **OBOK** 6.1: „Prowadzisz rachunki za kanapki?” -> „Jak ktoś mówi „oddaję potem”, zapisuję. Żeby nie musiał się zastanawiać, czy wisi dwa, czy…”
- **PROZNIA** 6.1: dopytanie „Prowadzisz rachunki za kanapki?” nie zaczepia się o: „…Numery telefonów, przepisy, cudze długi. Nie wszystko, czego się nie spłaci, warto skreślać.”
- **OBOK** 6.1.1: „Ściągasz te długi?” -> „Przynoszę kolejną kanapkę. Słaby ze mnie wierzyciel, ale nikt nie mówi, że głodny.…”
- **LUZNE** 6.1.1: dopytanie „Ściągasz te długi?” nie zaczepia się o: „…Jak ktoś mówi oddaję potem, zapisuję. Żeby nie musiał się zastanawiać, czy wisi dwa, czy dwanaście.”
- **OBOK** 6.2: „Właściciela da się poznać po zapiskach?” -> „Po grafiku i moim piśmie. Cebula jest dodatkowym świadkiem, bez prawa podpisu.…”
- **LUZNE** 6.2: dopytanie „Właściciela da się poznać po zapiskach?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Numery telefonów, przepisy, cudze długi. Nie wszystko, czego się nie spłaci, warto skreślać.”
- **OBOK** 6.2.1: „Kto potwierdzi pismo?” -> „Ktoś z zajezdni. Przyprowadzę, jeśli trzeba. Tylko nie każ wybierać największego długu na …”
- **OBOK** 7.1: „Co mu powiesz, jeśli wróci?” -> „Najpierw, żeby zjadł. Potem zapytam, gdzie był. Łatwiej czekać na odpowiedź, jak człowiek …”
- **LUZNE** 7.1: dopytanie „Co mu powiesz, jeśli wróci?” nie zaczepia się o: „…Dlatego obok napisałem Czy on żyje?. Trzynaście dolarów może sobie zostać w zeszycie.”
- **OBOK** 8: „Vera chce, żeby Sam przyszedł w piątek po rzeczy. To niepewne.” -> „Ale wiadomość do niego poszła? To już coś. Nie będę mówił, że na pewno wróci. Chociaż chci…”
- **OBOK** 9: „Jego pudełko jest zapisane jako osobiste. Nadal czeka.” -> „To dobrze. Niech wraca do własnych rzeczy, a nie do rubryki „po poprzedniku”.…”

## d11_maya (dzień 11, Maya Doyle, 34, drzewo)

- **OBOK** 1: „Jak wygląda ten pokrowiec?” -> „Czarny, twardy. Gumkę z boku zszyłam sama. W środku łatka przyszyta niebieską nitką, bo cz…”
- **OBOK** 1.1: „Opisujesz go bardzo dokładnie. Jakby ci zależało, żeby nikt się nie pomylił.” -> „Zależy mi. Mój mąż też umie opisać moje rzeczy. Ale tylko z wierzchu. Łatki w środku nie w…”
- **LUZNE** 1.1: dopytanie „Opisujesz go bardzo dokładnie. Jakby ci zależało, żeby nikt się nie pomylił.” nie zaczepia się o: „…W środku łatka przyszyta niebieską nitką, bo czarna mi się skończyła. Sprawdź, to chwila.”
- **OBOK** 2.1: „Celowo? Po co zostawiać własne rzeczy w tramwaju?” -> „Telefon, klucze, torba, teraz pokrowiec. Sprawdzam, czy ktoś po tej stronie szyby wytrzyma…”
- **OBOK** 2.1.1: „I gdzie iskrzyło?” -> „Zapisuję sobie. Każdą rzecz: komu poszła i kto potem o niej wiedział. Dziś sprawdzam ostat…”
- **OBOK** 3: „Czego od nas potrzebujesz?” -> „Trzech rzeczy. Nikt nie wie, gdzie jestem. Policjant dostaje jedno zdanie: „Żyje. Nie wróc…”
- **LUZNE** 3.1: dopytanie „A rodzina? Nie śpią od tygodni.” nie zaczepia się o: „…Nie szukać. Wszystko inne dopiero, jak powiem tak.”
- **LUZNE** 3.2: dopytanie „Co z twoimi rzeczami, które u nas leżą?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Nie szukać. Wszystko inne dopiero, jak powiem tak.”
- **OBOK** 3.3: „Lena ci pomagała?” -> „Na początku, z mieszkaniem. Potem zaczęła decydować, co mi wolno. Od jednego, który decydo…”
- **PROZNIA** 3.3: dopytanie „Lena ci pomagała?” nie zaczepia się o: „…Nie szukać. Wszystko inne dopiero, jak powiem tak.”
- **OBOK** 4: „Czemu tak patrzysz na moje ręce?” -> „Sprawdzam, co z nimi robisz. Ten, co siedział tu przed tobą, też nie wiedział, gdzie je po…”
- **OBOK** 4.1: „Znałaś Sama?” -> „Z widzenia, przez szybę. Raz przetrzymał mi torbę przez tydzień i nie zapytał, co w niej j…”
- **PROZNIA** 4.1: dopytanie „Znałaś Sama?” nie zaczepia się o: „…Ten, co siedział tu przed tobą, też nie wiedział, gdzie je podziać. A siedział dłużej.”
- **OBOK** 6: „Twój telefon dostał od nas Evan. Wiesz, co z nim zrobił?” -> „Wiem od Leny. Przeczytał jej wiadomość i poszedł do niej z awanturą. Zwarcie. Nie mam żalu…”
- **OBOK** 9: „Pod łatką jest karteczka z trzema punktami. Kto je układał?” -> „Ja, przez trzy noce. W kolejności, w jakiej coś może się zepsuć. Pierwszy: nikt nie wie, g…”

## d11_grace (dzień 11, Grace Okoye, 35, drzewo)

- **OBOK** 1: „Jak wygląda ta torebka?” -> „Granatowa, skórzana, na ramię. Pasek przetarty od smyczy z kartą. Na legitymacji mam zdjęc…”
- **OBOK** 1.1: „Co jest w środku oprócz legitymacji?” -> „Klucze, tabletki na głowę i kartka z zakupami. Nic więcej.…”
- **OBOK** 2: „Gdzie i kiedy ją zostawiłaś?” -> „W jedenastce, koło wpół do pierwszej. Zdjęłam ją z ramienia, bo bark mnie rwał po dźwigani…”
- **OBOK** 2.1: „Wpół do pierwszej? To nie byłaś wtedy na dyżurze?” -> „Wyskoczyłam na godzinę do domu, bo młodszy miał gorączkę. Dzieci śpią u sąsiadki. Oddział …”
- **LUZNE** 2.1: dopytanie „Wpół do pierwszej? To nie byłaś wtedy na dyżurze?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Zdjęłam ją z ramienia, bo bark mnie rwał po dźwiganiu pacjenta. Wysiadłam na Rynku bez niej.”
- **OBOK** 3.1: „Ktoś może potwierdzić, że torebka jest twoja?” -> „Hollis, dyżurny z oddziału. Zadzwoń. Odbierze po trzecim sygnale i dwie minuty będzie gada…”
- **LUZNE** 3.1: dopytanie „Ktoś może potwierdzić, że torebka jest twoja?” nie zaczepia się o: „…Ma rację. Dziś mnie ta jego racja boli.”

## d12_iris_nora (dzień 12, Iris Bell, Nora Vance, Ada Vale, drzewo)

- **OBOK** 1.1: „Nora, ty mówisz co innego?” -> „Mówię: oryginały pokwitowań. Czternaście rodzin, po czterysta dolarów zaliczki. Bez nich O…”
- **LUZNE** 1.1: dopytanie „Nora, ty mówisz co innego?” nie zaczepia się o: „…Karty rozliczeń kamienicy, nic ponad to. Sprawy moje i lokatorów.”
- **OBOK** 2: „Nora, po czym poznasz oryginał?” -> „Po kolei: numer z mojego wykazu, podpis „I.”, zielony stempel kamienicy. Jak wszystkie trz…”
- **OBOK** 2.1: „Co się stanie w czwartek, dziewiątego września?” -> „Mija termin. Kto nie pokaże kwitu, wpłaca zaliczkę drugi raz albo się wyprowadza. Czternaś…”
- **LUZNE** 2.1: dopytanie „Co się stanie w czwartek, dziewiątego września?” nie zaczepia się o: „…Po kolei: numer z mojego wykazu, podpis I., zielony stempel kamienicy. Jak wszystkie trzy się zgadzają, wiem.”
- **OBOK** 2.2: „Żółta kopia poszła z torbą do Leny. Czym teraz udowodnisz wpłatę?” -> „Numerem z wykazu: czterysta jedenaście. Papier można zgubić, liczby nie. Ale numer bez ory…”
- **OBOK** 2.3: „Żółta kopia leży u nas. To nie wystarczy?” -> „Potwierdza jedną wpłatę, Okoye. I tylko wtedy, gdy da się ją przyłożyć do oryginału. Dlate…”
- **OBOK** 3: „Ada, czemu pokazujesz na tę puszkę?” -> „Bo ma numerek z tego samego bloczka co papiery pani Iris. Mama mówi, że nie wolno gadać. A…”
- **OBOK** 3.1: „Co jeszcze widziałaś u pani Iris?” -> „Że otwiera tę szufladę, co się zacina, bez patrzenia. Ja muszę kopnąć w lewy róg. Ona ma t…”
- **LUZNE** 3.1: dopytanie „Co jeszcze widziałaś u pani Iris?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Mama mówi, że nie wolno gadać. Ale tu można, bo tu mówią do mnie ładnie.”
- **OBOK** 3.2: „Iris, mała mówi prawdę?” -> „Dzieci widzą dużo i rozumieją po swojemu. Ada to dobra dziewczynka. Szkoda by było, gdyby …”
- **LUZNE** 3.2: dopytanie „Iris, mała mówi prawdę?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Mama mówi, że nie wolno gadać. Ale tu można, bo tu mówią do mnie ładnie.”
- **OBOK** 4: „Czemu nie oddasz Norze oryginałów?” -> „Bo jak Nora pokaże je w Urzędzie, wyjdzie też to, co leży obok: papiery czworga ludzi, któ…”
- **OBOK** 4.2: „Piórnik poszedł do Victora. Co teraz z ludźmi z żetonów?” -> „Są na liście inspekcji. Dla niego drobiazg, dla nich wyrok. Dlatego dziś nie mam już z cze…”
- **OBOK** 4.4: „Piórnik leży u nas w depozycie. Co z ludźmi z żetonów?” -> „Czekają. Do soboty żadne z czworga nie dostanie dokumentu, a jedna rodzina ma pociąg o 5:4…”

## d12_linh (dzień 12, Linh Tran, 33, drzewo)

- **OBOK** 1: „Jak wygląda ta pozytywka?” -> „Drewniana, mała, z gwiazdką na wieczku. Gra kołysankę, ale jedną nutę zacina. Milo mówi, ż…”
- **OBOK** 1.1: „Co jest w środku?” -> „Mechanizm. I coś, czego wolałabym nie pokazywać. Proszę nie zdejmować dna.…”
- **LUZNE** 1.1: dopytanie „Co jest w środku?” nie zaczepia się o: „…Gra kołysankę, ale jedną nutę zacina. Milo mówi, że gwiazdka kaszle.”
- **OBOK** 2: „Gdzie ją zgubiłaś?” -> „W jedenastce, na siedzeniu, kiedy zdejmowałam Milo z kolan. Zasnął mi na rękach i zapomnia…”
- **OBOK** 2.1: „Ile lat ma Milo?” -> „Sześć, skończył w maju. Do szkoły jeszcze nie chodzi. W szkole trzeba podać adres.…”
- **OBOK** 3: „Dokąd jedziecie tym rannym pociągiem?” -> „Proszę, nie. Nie dlatego, że nie ufam. Dlatego, że mi nie wolno.…”
- **PROZNIA** 3.1: dopytanie „Ktoś was szuka?” nie zaczepia się o: „…Nie dlatego, że nie ufam. Dlatego, że mi nie wolno.”
- **OBOK** 3.2: „Kto wam pomaga wyjechać?” -> „Ktoś, kto bierze za to pieniądze i nie lubi, kiedy się o tym mówi. Proszę, więcej nie powi…”
- **PROZNIA** 3.2: dopytanie „Kto wam pomaga wyjechać?” nie zaczepia się o: „…Nie dlatego, że nie ufam. Dlatego, że mi nie wolno.”
- **OBOK** 3.3: „Czego ci teraz najbardziej trzeba?” -> „Żeby Milo zasnął w pociągu. I żeby nikt nie zapisał mojego nazwiska obok jego imienia.…”
- **PROZNIA** 3.3: dopytanie „Czego ci teraz najbardziej trzeba?” nie zaczepia się o: „…Nie dlatego, że nie ufam. Dlatego, że mi nie wolno.”
- **OBOK** 4: „Pod dnem jest bilet i kartonik z numerem 0623. Co to?” -> „Proszę, nie pytaj. To wszystko, co mam po trzech latach odkładania. Jak ktoś się dowie, ni…”
- **OBOK** 4.2: „Numer 0623 jest na liście inspektora.” -> „Wiem, Iris mi powiedziała. Wsiądę. Ale będę się oglądać do ostatniej stacji.…”

## d13_elias (dzień 13, Elias Wren, 73, drzewo)

- **OBOK** 1: „Jak wygląda ta oprawka?” -> „Złota, cieniutka, jedno ucho wygięte. Żona prostowała je kciukiem, a ono i tak wracało. Cz…”
- **OBOK** 1.1: „Sama oprawka, bez szkieł?” -> „Szkła pękły, kiedy spadły. Zostało samo złoto i to krzywe ucho. Mnie wystarczy.…”
- **LUZNE** 1.1: dopytanie „Sama oprawka, bez szkieł?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Żona prostowała je kciukiem, a ono i tak wracało. Czterdzieści jeden lat tak się z nim siłowała.”
- **OBOK** 2: „Gdzie i kiedy zginęła?” -> „W czwórce, tuż przed Bożym Narodzeniem, jak wracaliśmy od szwagierki. Potem żona zachorowa…”
- **OBOK** 2.1: „To już osiem miesięcy. Czemu to nadal takie ważne?” -> „Bo jej obiecałem, że się znajdą. Ona już nie sprawdzi, ale ja wiem, co obiecałem. Dziękuję…”
- **LUZNE** 2.1: dopytanie „To już osiem miesięcy. Czemu to nadal takie ważne?” nie zaczepia się o: „…W czwórce, tuż przed Bożym Narodzeniem, jak wracaliśmy od szwagierki. Potem żona zachorowała i okularów już nie włożyła.”
- **OBOK** 3.1: „Skąd znasz Sama?” -> „Z tego okienka. Pan Holt przez dwa lata nie miał nazwiska na tabliczce. Potem dopisał ołów…”
- **LUZNE** 3.1: dopytanie „Skąd znasz Sama?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Osiemdziesiąt cztery dolary. Dowiedziałem się, jak już było po wszystkim.”
- **OBOK** 3.1.1: „Kiedy widziałeś go ostatni raz?” -> „Ponad miesiąc temu. Powiedział: „jeszcze nie, panie Eliasie”. A potem przestał przychodzić…”
- **LUZNE** 3.1.1: dopytanie „Kiedy widziałeś go ostatni raz?” nie zaczepia się o: „…Holt. Chyba sam sobie przypominał.”
- **OBOK** 3.2: „Co chcesz zrobić z tym długiem?” -> „Oddać mu do ręki. Cztery tygodnie odkładałem po dwadzieścia jeden dolarów z emerytury. Nie…”
- **LUZNE** 3.2: dopytanie „Co chcesz zrobić z tym długiem?” nie zaczepia się o: „…Osiemdziesiąt cztery dolary. Dowiedziałem się, jak już było po wszystkim.”
- **OBOK** 3.2.1: „A jeśli Sam nie weźmie?” -> „Odmówi, wiem. A ja nie ustąpię. On jest młodszy, ale to ja mam mniej czasu.…”
- **LUZNE** 3.2.1: dopytanie „A jeśli Sam nie weźmie?” nie zaczepia się o: „…Nie listem, nie przez kogoś. Do ręki.”
- **LUZNE** 4.1: dopytanie „Co ma się stać z tym kwitem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wziąłem. Do dziś mi wstyd.”
- **OBOK** 4.2: „Wiesz coś o paczkach, które jeżdżą szóstką?” -> „Tyle, że konduktor ich nie lubi. Więcej nie wiem i wolę nie wiedzieć.…”
- **LUZNE** 4.2: dopytanie „Wiesz coś o paczkach, które jeżdżą szóstką?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wziąłem. Do dziś mi wstyd.”
- **PROZNIA** 5.1: dopytanie „Na tabliczce nic nie ma.” nie zaczepia się o: „…A ja do dziś nie wiem, jak ci na imię. Pytałem już raz.”

## d13_odile (dzień 13, Odile Faber, 68, drzewo)

- **OBOK** 1: „Jak wygląda to pudełko?” -> „Okrągłe, niebieskie, po duńskich herbatnikach. Wieczko pogięte, bo siadam na nim na przyst…”
- **LUZNE** 1.1: dopytanie „Czemu trzymasz protezę w pudełku po herbatnikach?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wieczko pogięte, bo siadam na nim na przystanku. W środku serwetka w kwiatki, a na serwetce moja uroda.”
- **OBOK** 1.2: „Po czym poznać, że proteza jest twoja?” -> „Od spodu wygrawerowane O.F. Dentysta mówił: żeby nikt nie zabrał. Dziecko, kto by to zabra…”
- **LUZNE** 1.2: dopytanie „Po czym poznać, że proteza jest twoja?” nie zaczepia się o: „…Wieczko pogięte, bo siadam na nim na przystanku. W środku serwetka w kwiatki, a na serwetce moja uroda.”
- **OBOK** 2: „Jak to się stało, że została w szóstce?” -> „Jechałam rano do fryzjera, wyjęłam, bo uwierała, i położyłam pudełko obok. A potem zobaczy…”
- **LUZNE** 2.1: dopytanie „Jechałaś z biletem?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…A potem zobaczyłam swój przystanek i poleciałam. W moim wieku się nie lata, to i głowa nie nadążyła.”
- **OBOK** 2.1.1: „Dziś nie. A zwykle?” -> „Będziemy liczyć? Wesele za dwie godziny, nie zdążysz. Często, dziecko. Ale zawsze z szacun…”
- **LUZNE** 2.1.1: dopytanie „Dziś nie. A zwykle?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Spieszyłam się i nie skasowałam. Zapłacę mandat, kochanie, jak trzeba.”
- **OBOK** 3: „Na czyj ślub się spieszysz?” -> „Wnuczki, Fridy. Kościół świętej Łucji, dziesiąta. Narzeczony ma wąsy jak szczotka do butów…”
- **LUZNE** 3.1: dopytanie „Rodzina wie, że nie masz zębów?” nie zaczepia się o: „…Kościół świętej Łucji, dziesiąta. Narzeczony ma wąsy jak szczotka do butów, ale ona go kocha, przysięgam.”
- **OBOK** 3.2: „A jak nie zdążysz ich odzyskać?” -> „To będę się uśmiechać wewnętrznie. Frida się popłacze, ja się popłaczę, a wąsaty zacznie m…”
- **LUZNE** 3.2: dopytanie „A jak nie zdążysz ich odzyskać?” nie zaczepia się o: „…Kościół świętej Łucji, dziesiąta. Narzeczony ma wąsy jak szczotka do butów, ale ona go kocha, przysięgam.”
- **OBOK** 4: „W pudełku jest mandat bez pieczątki, z dopiskiem konduktora: „zdarza się”.” -> „Dziecko, emerytura to czterysta dolarów i zęby na raty. Bilet kosztuje tyle co obiad. A Le…”

## d13_tess (dzień 13, Tess Rusk, 33, drzewo)

- **OBOK** 1: „Jak wygląda ta skrzynka?” -> „Zielona, metalowa, z trójką wybitą na wieczku. Zamek się zacina, otwiera się go płaskim śr…”
- **OBOK** 1.1: „Co powinno być w środku?” -> „Narzędzia. Zegarek, jeśli go tam schował. I klucz z numerkiem do jakiejś szafki, o której …”
- **LUZNE** 1.1: dopytanie „Co powinno być w środku?” nie zaczepia się o: „…Zamek się zacina, otwiera się go płaskim śrubokrętem. Tobias dostał ją od ojca razem z zawodem.”
- **OBOK** 2: „Jak trafiła do nas?” -> „Pogłębiarka wyciągnęła ją z mułu w tym miesiącu. Policja rzeczna odesłała tramwajem jako r…”
- **LUZNE** 2.1: dopytanie „Ktoś jeszcze pytał o tę skrzynkę?” nie zaczepia się o: „…Policja rzeczna odesłała tramwajem jako rzecz bez właściciela. Zobaczyłam wykaz na słupie i poznałam wieczko po opisie.”
- **OBOK** 3: „Kim był twój brat?” -> „Tobias Rusk, elektryk. Cichy, punktualny, nie pytał o więcej, niż trzeba. Brał nocne zmian…”
- **OBOK** 3.2: „Policja mówi: wypadek. Nie wierzysz?” -> „Tobias pływał jak ryba. I kiedy go wyłowili, nie miał zegarka, a nie zdejmował go nawet do…”
- **LUZNE** 3.2: dopytanie „Policja mówi: wypadek. Nie wierzysz?” nie zaczepia się o: „…Cichy, punktualny, nie pytał o więcej, niż trzeba. Brał nocne zmiany i nigdy nie mówił gdzie.”
- **PROZNIA** 3.2.1: dopytanie „Czemu przychodzisz dopiero teraz?” nie zaczepia się o: „…To żaden dowód. Ale ja tym żyję od dwóch lat.”
- **OBOK** 4: „Na zegarku jest grawer: „T.R. — od T.”. Od kogo?” -> „Ode mnie. T. jak Tess. Dałam mu go na trzydzieste urodziny. Nosił na lewej ręce i nie zdej…”
- **OBOK** 4.1: „Wskazówki stoją na 23:15. Co z tym zrobisz?” -> „Zawiozę do zegarmistrza, który jest biegłym. Chcę mieć na papierze, o której stanął. Z pap…”
- **LUZNE** 4.1: dopytanie „Wskazówki stoją na 23:15. Co z tym zrobisz?” nie zaczepia się o: „…Dałam mu go na trzydzieste urodziny. Nosił na lewej ręce i nie zdejmował.”

## d14_noah (dzień 14, Noah Reyes, 42, drzewo)

- **OBOK** 1: „Jak wygląda ten organizer?” -> „Czarny, skórzany, z gumką na grzbiecie. Noszę go pół roku, róg wytarł się na szaro.…”
- **OBOK** 1.1: „Co w nim jest?” -> „Terminy, numery, adres Leny Brandt. I kalendarz, w którym wtorek, siódmy września, jest za…”
- **LUZNE** 1.1: dopytanie „Co w nim jest?” nie zaczepia się o: „…Czarny, skórzany, z gumką na grzbiecie. Noszę go pół roku, róg wytarł się na szaro.”
- **OBOK** 3.1: „Mogę jej to przekazać, jeśli się tu pojawi?” -> „Tylko jeśli przyjdzie sama. Nie proszę, żeby jej szukać. Proszę, żeby kartka tu leżała, na…”
- **LUZNE** 3.1: dopytanie „Mogę jej to przekazać, jeśli się tu pojawi?” nie zaczepia się o: „…Jej podpis zamyka sprawę. Tylko nie mam pewności, że ta kartka w ogóle do niej trafi.”
- **OBOK** 3.2: „Co się stanie we wtorek, jeśli podpisu nie będzie?” -> „Sprawa idzie do wydziału, a tam nikt nie pyta, czy ktoś chce być znaleziony. A Doyle wynaj…”
- **OBOK** 3.2.1: „Czemu wersja Evana ci nie pasuje?” -> „To moje zmartwienie. Powiem tyle: ktoś nie mówi mi wszystkiego, a ja wolę pytać po cichu.…”
- **PROZNIA** 3.2.1: dopytanie „Czemu wersja Evana ci nie pasuje?” nie zaczepia się o: „…A Doyle wynajmie detektywa. Podobno za tysiąc dwieście dolarów.”
- **OBOK** 4: „Czemu patrzysz na moją tabliczkę?” -> „Bo jest pusta. Nie ma na niej nazwiska. Masz przy sobie jakiś dokument? Nie? Zapisuję: dyż…”
- **OBOK** 4.1: „Poprzedni dyżurny też nie miał nazwiska?” -> „Miał, ołówkiem: Holt. Też bez skierowania, też z ogłoszenia. Czyli: ktoś lubi sadzać przy …”

## d14_billie (dzień 14, Billie Cross, drzewo)

- **OBOK** 1: „Jak wygląda ten kask?” -> „Różowy, z nalepką z gwiazdką. Z tyłu pęknięty, bo spadłam ze schodów. No, może dwa razy.…”
- **OBOK** 2: „Gdzie dokładnie go zostawiłaś?” -> „W czwórce, miałam go na kolanach. Gadałam przez telefon i wysiadłam bez niego. Serio, nawe…”
- **OBOK** 2.1: „Co robisz w czwórce w środku nocy?” -> „Jeżdżę. Hulajnogą, tramwajem, byle tam, gdzie nie ma nauczycieli. Raz konduktor z szóstki …”
- **LUZNE** 2.1: dopytanie „Co robisz w czwórce w środku nocy?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Gadałam przez telefon i wysiadłam bez niego. Serio, nawet nie poczułam.”
- **LUZNE** 2.1.1: dopytanie „Czemu nie siedzisz w domu?” nie zaczepia się o: „…Hulajnogą, tramwajem, byle tam, gdzie nie ma nauczycieli. Raz konduktor z szóstki dał mi herbatę i nawet nie spytał, ile mam lat.”
- **LUZNE** 3.1: dopytanie „Do egzaminu z fizyki potrzebny jest kask?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…No, poprawkowy. Wiesz, o co chodzi.”
- **LUZNE** 3.2: dopytanie „Ile ty naprawdę masz lat?” nie zaczepia się o: „…No, poprawkowy. Wiesz, o co chodzi.”
- **OBOK** 3.2.1: „Czego się boisz, że tak kręcisz?” -> „Że zadzwonicie do szkoły. Mam trzy dni nieobecności i bardzo ładne usprawiedliwienie. Podr…”
- **PROZNIA** 3.2.1: dopytanie „Czego się boisz, że tak kręcisz?” nie zaczepia się o: „…Dobra, szesnaście i pół. Ale w środku jestem dorosła.”
- **OBOK** 4: „Pod wyściółką jest legitymacja szkolna. Klasa 2B.” -> „Moja. Rocznik dwa tysiące dziewiąty. No dobra, już nie kłamię. Tylko nie dzwońcie, serio.…”

## d15_sam (dzień 15, Sam Holt, 44 i Vera Kovacs, 62, drzewo)

- **OBOK** 1: „Jak wygląda ten termos?” -> „Stalowy, zielony, z wgnieceniem na pokrywce. Spadł mi kiedyś z ciężarówki. Klamra jest lew…”
- **OBOK** 2: „Czemu przychodzisz dopiero teraz?” -> „Bo Vera napisała, że zamykają szafkę. Inaczej bym nie przyszedł. Nie lubię tego miejsca.…”
- **OBOK** 2.1: „Vera, czemu go wezwałaś?” -> „Bo zamykają szafkę, a on przez miesiąc nie przyszedł po nic. I wolałam, żeby ktoś przy tym…”
- **LUZNE** 2.1: dopytanie „Vera, czemu go wezwałaś?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Inaczej bym nie przyszedł. Nie lubię tego miejsca.”
- **OBOK** 2.2: „Gdzie byłeś przez ten miesiąc?” -> „W porcie. Kolega załatwił mi robotę przy przeładunku. Potrzebuję referencji do piątku, dzi…”
- **LUZNE** 2.2: dopytanie „Gdzie byłeś przez ten miesiąc?” nie zaczepia się o: „…Inaczej bym nie przyszedł. Nie lubię tego miejsca.”
- **OBOK** 3: „Co się stało ze stroną czterdzieści jeden?” -> „Wyrwałem ją. Żeby nikt nie miał tych nazwisk. Nie pytaj więcej, bo powiem za dużo.…”
- **OBOK** 3.1: „Mówisz, że w szufladzie została kalka. Co mam z nią zrobić?” -> „Zasłoń nazwiska albo oddaj ją mnie. Jak pokażesz bez zasłony, Nora ma swój dowód, ale czte…”
- **LUZNE** 3.1: dopytanie „Mówisz, że w szufladzie została kalka. Co mam z nią zrobić?” nie zaczepia się o: „…Żeby nikt nie miał tych nazwisk. Nie pytaj więcej, bo powiem za dużo.”
- **OBOK** 3.1.1: „Czemu Victor nie może jej zobaczyć?” -> „Bo nie wierzę w drugie egzemplarze. Każda kartka, która idzie dalej, trafia w końcu do kog…”
- **LUZNE** 3.1.1: dopytanie „Czemu Victor nie może jej zobaczyć?” nie zaczepia się o: „…Jak pokażesz bez zasłony, Nora ma swój dowód, ale czternaście rodzin ląduje na biurku Urzędu. Wybieraj: oni albo ja.”
- **OBOK** 3.2: „Czyje nazwiska na niej były?” -> „Ludzi, którzy wyjechali. I lokatorów, którzy zapłacili za coś, czego nie dostali. Na jedne…”
- **LUZNE** 4.1: dopytanie „Ile rzeczy wydałeś w ten sposób?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Wpis robi z niej zgubę. A on stracił już dość.”
- **OBOK** 5: „W termosie jest kartonik: „Nie pytaj, od czego uciekasz. Nikt nie pyta”. Do kogo to pisałeś?” -> „Do siebie. Tak myślałem. Teraz widzę, że to pasuje do każdego, kto usiądzie na tym krześle…”
- **OBOK** 6: „W szufladzie jest zatwierdzenie z podpisem Victora. Co to?” -> „Rozliczenie, które Victor zamknął. Potem ktoś dopisał pozycje innym tuszem. Myślę, że nie …”

## d15_pruitt (dzień 15, Pan Pruitt, 80, drzewo)

- **OBOK** 1.1: „Co robisz, kiedy ktoś się po któryś zgłosi?” -> „Oddaję z uśmiechem i o nic nie pytam. Raz przyszła kobieta po parasol w kwiatki i popłakał…”
- **PROZNIA** 1.1: dopytanie „Co robisz, kiedy ktoś się po któryś zgłosi?” nie zaczepia się o: „…Padało cały tydzień, ludzie zostawiają. Zbieram, bo parasol bez człowieka to smutny widok.”
- **OBOK** 1.1.1: „Często ktoś się zgłasza?” -> „Dwa razy w tym roku. Reszta czeka. Nikt nie przychodzi, więc wszystko w porządku. Tak sobi…”
- **PROZNIA** 1.1.1: dopytanie „Często ktoś się zgłasza?” nie zaczepia się o: „…Nie wiem czemu. Ale było miło.”
- **OBOK** 2: „Czemu oddajesz je dopiero dzisiaj?” -> „Bo wcześniej było ich dziesięć. Jedenaście to ładniejsza liczba. A przy okazji: nikt mnie …”
- **LUZNE** 2.1: dopytanie „Nie prościej zostawić je na przystanku?” nie zaczepia się o: „…Jedenaście to ładniejsza liczba. A przy okazji: nikt mnie nie pytał, to się nie narzucałem.”
- **OBOK** 3: „Po co właściwie je zbierasz?” -> „Ktoś musi. Moja żona mówiła, że kto nie oddaje cudzych rzeczy, nie zasługuje na własne.…”
- **OBOK** 3.1: „Który jest najstarszy?” -> „Ten czarny, z drewnianą rączką, z siedemdziesiątego dziewiątego. Ma krzywy drut. Jego nie …”
- **OBOK** 4: „Do siatki jest przypięta lista: gdzie i kiedy który znaleziony. Po co ją prowadzisz?” -> „Żeby wiedzieć, który skąd. Każdy, kto wraca po parasol, mówi: „zostawiłem na pętli”. A ja …”
- **LUZNE** 4.1: dopytanie „Przy jednym stoi: „ulubiony, E.W. na rączce”. Czyj to?” nie zaczepia się o: „…A ja wiem, na której i o której. To też jest kwit, tylko mój.”

## d16_maya_lena (dzień 16, Maya Doyle i Lena Brandt, drzewo)

- **OBOK** 1: „Jak wygląda ta saszetka?” -> „Granatowa, na zamek, w rogu haft: M.D. Dwie przegródki. W jednej rzeczy na drogę, w drugie…”
- **OBOK** 1.1: „Co jest w tej drugiej przegródce?” -> „Kartka dla Leny i dwa żetony bagażowe. Moja walizka stoi w przechowalni, nie tutaj. Do nie…”
- **OBOK** 2: „Lena, czemu mówisz, że saszetka jest twoja?” -> „Bo ja ją kupiłam. Tydzień temu, Mai na drogę. Maya zostawiła ją w tramwaju, a ja przyszłam…”
- **OBOK** 2.1: „Czego chcesz od Mai?” -> „Żeby powiedziała, gdzie jest. Ale... nie, inaczej. Chcę tylko wiedzieć, czy jest bezpieczn…”
- **LUZNE** 2.1: dopytanie „Czego chcesz od Mai?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…no dobrze. Kupiłam ją dla niej.”
- **OBOK** 3: „Maya, co chcesz powiedzieć siostrze?” -> „Że ma przestać mnie ratować. Pomogła, dziękuję. Ale od tygodnia to ona decyduje, gdzie śpi…”
- **OBOK** 3.1: „To czego od niej chcesz?” -> „Jednej rzeczy. Żeby we wtorek o 6:10 postawiła moją walizkę w czwórce. Tylko tyle, nic wię…”
- **OBOK** 3.1.1: „A jeśli Lena zrobi po swojemu?” -> „To nie przyjdę. Jeśli wybierze mnie, a nie swój plan, będę. Ważne okienko sprawdza się trz…”
- **LUZNE** 3.1.1: dopytanie „A jeśli Lena zrobi po swojemu?” nie zaczepia się o: „…Żeby we wtorek o 6:10 postawiła moją walizkę w czwórce. Tylko tyle, nic więcej.”
- **OBOK** 3.2: „Lena, słyszysz to?” -> „Słyszę. Ale... ja chciałam dobrze. Ktoś musiał myśleć za nią, kiedy uciekała z jedną torbą…”
- **LUZNE** 3.2: dopytanie „Lena, słyszysz to?” nie zaczepia się o: „…Pomogła, dziękuję. Ale od tygodnia to ona decyduje, gdzie śpię i z kim rozmawiam.”
- **OBOK** 5: „W saszetce jest umowa najmu na nazwisko Mai, podpisana przez Lenę. Co to?” -> „Moje. To znaczy... ja załatwiłam. Tydzień temu. Miała być niespodzianka. Ale... ona nic o …”
- **OBOK** 5.1: „Wynajęłaś jej mieszkanie bez pytania?” -> „Bo wiedziałam, że sama nie poprosi. Ale... tak, wiem. Ona ma prawo sama wybrać. Muszę prze…”
- **LUZNE** 5.1: dopytanie „Wynajęłaś jej mieszkanie bez pytania?” nie zaczepia się o: „…Ale... ona nic o tym nie wiedziała.”
- **OBOK** 6: „Na kartce stoi: „Jak wybierzesz ją zamiast mnie, nie przyjdę”. Kogo: ją?” -> „Walizkę. Czyli rzeczy, mieszkanie, cały porządek, który Lena dla mnie ułożyła. Albo przywi…”

## d16_dorian (dzień 16, Dorian Lund, 45, drzewo)

- **OBOK** 1: „Jak wygląda ta kaseta?” -> „Przezroczysta, z naklejką w paski, podpisana długopisem: „na pożegnanie”. W pudełku z ziel…”
- **OBOK** 1.1: „Co jest na niej nagrane?” -> „Jedna piosenka. W kółko, na obu stronach. Która, nie powiem. To osobiste.…”
- **LUZNE** 1.1: dopytanie „Co jest na niej nagrane?” nie zaczepia się o: „…Przezroczysta, z naklejką w paski, podpisana długopisem: na pożegnanie. W pudełku z zielonym grzbietem.”
- **OBOK** 1.1.1: „Kto ją dla ciebie nagrał?” -> „Ktoś, do kogo nie dzwonię. I komu obiecałem, że będę jej słuchał. Słuchałem, aż taśma zacz…”
- **OBOK** 2: „Gdzie ją zgubiłeś?” -> „W jedenastce, ostatni kurs, ostatnie siedzenie przy tylnych drzwiach. Całą drogę trzymałem…”
- **OBOK** 3.1: „Co takiego załatwiasz w sobotę?” -> „Odbieram coś, po czym będę kimś trochę innym. Więcej nie powiem. Naprawdę nie pytaj.…”
- **OBOK** 3.2: „Od czego uciekasz?” -> „Od ludzi, którzy pytają, czemu nie dzwonię. To moja sprawa.…”
- **PROZNIA** 3.2: dopytanie „Od czego uciekasz?” nie zaczepia się o: „…Bo w sobotę mam coś do załatwienia. Wolałbym do tego czasu nie nosić jej przy sobie.”
- **PROZNIA** 3.3: dopytanie „Na jakie nazwisko wystawić kwit?” nie zaczepia się o: „…Bo w sobotę mam coś do załatwienia. Wolałbym do tego czasu nie nosić jej przy sobie.”
- **OBOK** 4: „Pod naklejką jest karteczka z numerem 0731 i słowem „kasetowiec”.” -> „To mój numer. Nie pytaj. Naprawdę. Od niego się zaczęło i nie wiem, jak to skończyć.…”
- **OBOK** 4.1: „Taki sam numer był na żetonie w piórniku Iris Bell.” -> „To wiesz już więcej, niż powinno się wiedzieć po tamtej stronie szyby. W sobotę odbieram p…”

## d17_evan (dzień 17, Evan Doyle, 37, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda to etui?” -> odpowiedź „Czarne, skórzane, z miękką podszewką. W środku stary aparat i list. Aparat jest jej, od te…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda to etui?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie je zostawiłeś?” -> odpowiedź „W czwórce, na siedzeniu przy oknie. Jechałem do niej, a właściwie na pętlę, jak ostatnio. …”
- **WIEDZA** tura 1, pytanie 2: „Gdzie je zostawiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 1, pytanie 3: „Czemu piszesz list, zamiast zadzwonić?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Co jest w liście?” -> odpowiedź „Prośba, żeby odpisała. Adres zwrotny, mój numer i jedno zdanie: „Wiem, że byłem niesprawie…”
- **PROZNIA** tura 2, pytanie 1: „Co jest w liście?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **LUZNE** tura 2, pytanie 2: „Ile detektyw naprawdę kosztuje?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Ile detektyw naprawdę kosztuje?” używa „ile”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 3: „Dlaczego uważasz, że żona potrzebuje ratunku?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Dlaczego uważasz, że żona potrzebuje ratunku?” używa „dla”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 4: pytanie „Na kopercie jest data sprzed dwudziestu sześciu dni. Co to znaczy?” -> odpowiedź „Że list napisałem wcześniej, niż zgłosiłem zaginięcie. Usłyszałem „odchodzę”. Nie zgłosiłe…”
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jeśli Maya nie odpisze?” -> odpowiedź „Przyjdę jeszcze raz. I jeszcze raz. Ale nie z pretensją, tylko z kopertą, która czeka.…”
- **PROZNIA** tura 3, pytanie 1: „Co zrobisz, jeśli Maya nie odpisze?” nie zaczepia się o: odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 1: „Co zrobisz, jeśli Maya nie odpisze?” używa „may”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 2: pytanie „Odbiór wymaga podpisu. Podpiszesz?” -> odpowiedź „Evan Doyle. Z kropką po „E”. Zawsze.…”
- **PROZNIA** tura 3, pytanie 2: „Odbiór wymaga podpisu. Podpiszesz?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Odbiór wymaga podpisu. Podpiszesz?” używa „odb”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czemu mankiet masz dziś pomięty?” -> odpowiedź „Bo ręce mi się trzęsą. Zwykle prasuję. Dziś nie miałem siły, a to już jest informacja.…”
- **PROZNIA** tura 3, pytanie 3: „Czemu mankiet masz dziś pomięty?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Czemu mankiet masz dziś pomięty?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć

## d17_sylvia (dzień 17, Sylvia Okafor, 52, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wyglądają te szachy?” -> odpowiedź „Składana plansza, pionki wyrzeźbione ręcznie, trochę nierówne. Białego króla nie ma od lut…”
- **WIEDZA** tura 1, pytanie 1: „Jak wyglądają te szachy?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie je zostawiłaś?” -> odpowiedź „W czwórce, po zajęciach. Położyłam pudełko obok i zaczęłam rozmawiać z kierowcą o remoncie…”
- **PROZNIA** tura 1, pytanie 2: „Gdzie je zostawiłaś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie je zostawiłaś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Czemu gracie bez króla?” -> odpowiedź „Bo uczę, że gra toczy się dalej, nawet jeśli czegoś brakuje. Zwykle dzieci rozumieją to sz…”
- **WIEDZA** tura 1, pytanie 3: „Czemu gracie bez króla?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Czego uczysz dzieci?” -> odpowiedź „Szachów, logiki i cierpliwości. Cierpliwość idzie najgorzej. Uczę też, że czasem trzeba po…”
- **WIEDZA** tura 2, pytanie 1: „Czego uczysz dzieci?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 2: „Czy ktoś wie, gdzie jest król?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 3: pytanie „Czy brak króla to kłopot?” -> odpowiedź „Czasem. Przeciwnik zawsze wie, czego nie masz. Ale zwykle nie wie, co z tym zrobisz.…”
- **WIEDZA** tura 2, pytanie 3: „Czy brak króla to kłopot?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 4: pytanie „W pudełku jest koperta „wycieczka 3b”. Co to?” -> odpowiedź „Pieniądze rodziców, sto dwadzieścia dolarów. Zapomniałam, że je tam włożyłam. Jak zginą, z…”
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jak je odzyskasz?” -> odpowiedź „Zagram z kimś, kto nie zna zasad. To zawsze interesujące.…”
- **PROZNIA** tura 3, pytanie 1: „Co zrobisz, jak je odzyskasz?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Podpiszesz odbiór?” -> odpowiedź „S. Okafor. Przez „k”, nie „c”. Dzieci pytają, czy to szachowy skrót.…”
- **PROZNIA** tura 3, pytanie 2: „Podpiszesz odbiór?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Podpiszesz odbiór?” używa „pod”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czy to ważne, że szachy wróciły?” -> odpowiedź „Dla mnie to tylko pionki. Dla dzieci to pierwsze wrażenie, że rzeczy wracają.…”
- **LUZNE** tura 3, pytanie 3: „Czy to ważne, że szachy wróciły?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Czy to ważne, że szachy wróciły?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d18_iris_nora (dzień 18, Iris Bell i Nora Vance, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w tej teczce?” -> odpowiedź „Plan Cooper Street dziewięć z dopiskiem „do wyburzenia” i lista terminów rozliczenia zalic…”
- **OBOK** tura 1, pytanie 2: pytanie „Nora, po co ci ta teczka?” -> odpowiedź „Po kolei: rzecz, osoba, skutek. Lista terminów, czternaście rodzin, czwartek, dziewiąty wr…”
- **OBOK** tura 1, pytanie 3: pytanie „Czemu stoicie tu razem?” -> odpowiedź „Bo przyszłyśmy w tej samej sprawie. Niektóre sprawy lepiej ustalać przy świadkach.…”
- **PROZNIA** tura 1, pytanie 3: „Czemu stoicie tu razem?” nie zaczepia się o: wejście; wejście (wariant 1); wejście (wariant 2); wejście (wariant 3); wejście (wariant 4)
- **WIEDZA** tura 1, pytanie 3: „Czemu stoicie tu razem?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Iris, ile wynosi twoja oferta?” -> odpowiedź „Trzysta dolarów. Za zwrot kasetki i za zwolnienie z formalności. To nie łapówka, tylko wyk…”
- **LUZNE** tura 2, pytanie 1: „Iris, ile wynosi twoja oferta?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 2, pytanie 2: pytanie „Nora, co proponujesz?” -> odpowiedź „Pokwitowanie z pieczęcią biura i terminem wydania oryginałów. Formalnie czyste. Wiem, że t…”
- **LUZNE** tura 2, pytanie 2: „Nora, co proponujesz?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **LUZNE** tura 2, pytanie 3: „Czemu Nora odmówiła Iris rok temu?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 3: „Czemu Nora odmówiła Iris rok temu?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 2, pytanie 4: „Iris, skąd wiesz, gdzie jest mój pokój?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jeśli oryginały trafią do Nory?” -> odpowiedź „Będę musiała się z nimi rozliczyć. I z tymi, którzy pomagają. To ludzie, nie liczby.…”
- **PROZNIA** tura 3, pytanie 1: „Co zrobisz, jeśli oryginały trafią do Nory?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Co zrobisz, jeśli oryginały trafią do Iris?” -> odpowiedź „Okoye zapłacą drugi raz. Termin w czwartek, dziewiątego września, jest sztywny. Powiem to …”
- **OBOK** tura 3, pytanie 3: pytanie „Co się stanie, jeśli materiały pójdą do kontroli?” -> odpowiedź „Czyli do Victora. Wyjdzie wszystko: papiery, nazwiska, kasetki. Wtedy nikt nie będzie woln…”
- **PROZNIA** tura 3, pytanie 3: „Co się stanie, jeśli materiały pójdą do kontroli?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4

## d18_hugo (dzień 18, Hugo Lang, 40, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ta wędka?” -> odpowiedź „Czarna, teleskopowa, z pokrowcem na zamek. Na rączce naklejka „Najlepszy tata”. Dostałem o…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta wędka?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie ją zostawiłeś?” -> odpowiedź „W szóstce, pod siedzeniem. Wracałem znad rzeki, a raczej znad stolika. Wysiadłem w pośpiec…”
- **PROZNIA** tura 1, pytanie 2: „Gdzie ją zostawiłeś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie ją zostawiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Czy złowiłeś coś w życiu?” -> odpowiedź „Raz leszcza. Wypuściłem, bo był podejrzanie podobny do teścia.…”
- **PROZNIA** tura 2, pytanie 1: „Czy złowiłeś coś w życiu?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 1: „Czy złowiłeś coś w życiu?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 2, pytanie 2: „Ile razy w tygodniu „łowisz”?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Ile razy w tygodniu „łowisz”?” używa „ile”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 3: pytanie „Czemu nie powiesz żonie prawdy?” -> odpowiedź „Bo ona mnie kocha za rybę. Co bym zrobił, gdyby się dowiedziała, że kocha mnie za nic?…”
- **PROZNIA** tura 2, pytanie 3: „Czemu nie powiesz żonie prawdy?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czemu nie powiesz żonie prawdy?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Czego chcesz od biura?” -> odpowiedź „Wędki. I żeby ktoś w razie czego powiedział, że wędka tu była, więc ryby też.…”
- **PROZNIA** tura 3, pytanie 1: „Czego chcesz od biura?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 1: „Czego chcesz od biura?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 2: pytanie „Podpiszesz odbiór?” -> odpowiedź „Hugo Lang. Z wężykiem na końcu, jak rura.…”
- **PROZNIA** tura 3, pytanie 2: „Podpiszesz odbiór?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Podpiszesz odbiór?” używa „pod”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 3, pytanie 3: „Czy ktoś może potwierdzić, że łowisz?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Czy ktoś może potwierdzić, że łowisz?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d19_ada_leo (dzień 19, Ada Vale i Leo Marsh, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ta torba?” -> odpowiedź „Skórzana, na pasku, z niebieską taśmą na rączce. W środku dwa wykazy: oficjalny i poprawio…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta torba?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Ada, po co tu jesteś?” -> odpowiedź „Bo wiem, skąd jest puszka. Mama mówi, że nie wolno, ale pan Leo mówi, że tu można. I tu mó…”
- **OBOK** tura 1, pytanie 3: pytanie „Leo, czemu wybrałeś tę zmianę?” -> odpowiedź „Bo na zmianie jest dużo ludzi, a mało rzeczy. A ja jestem człowiek, który lubi wiedzieć, k…”
- **OBOK** tura 2, pytanie 1: pytanie „Ada, co wiesz o puszce?” -> odpowiedź „Że stała u pani Iris nad czajnikiem, a potem pan Leo ją wsunął pod ławkę. Zapisał w wykazi…”
- **LUZNE** tura 2, pytanie 1: „Ada, co wiesz o puszce?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 2, pytanie 2: pytanie „Leo, czym różnią się wykazy?” -> odpowiedź „W drugim dopisałem numer puszki odręcznie. Oficjalny jest czysty. Wolałem mieć coś na włas…”
- **OBOK** tura 2, pytanie 3: pytanie „Czy wy się boicie?” -> odpowiedź „Ja trochę. Ale ja się boję zawsze, od dawna. Ada nie wie, że się boi, i to jest groźniejsz…”
- **PROZNIA** tura 2, pytanie 3: „Czy wy się boicie?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czy wy się boicie?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Ada, co się stanie, jeśli wystąpisz jako świadek?” -> odpowiedź „Że mama będzie płakać. Pani Iris powiedziała, że mamy dzień na spakowanie się. To jest dzi…”
- **OBOK** tura 3, pytanie 2: pytanie „Leo, co mam zapisać?” -> odpowiedź „Sprostowanie. Że jedna puszka jechała moim kursem bez nadawcy i ja za to odpowiadam. Własn…”
- **OBOK** tura 3, pytanie 3: pytanie „Dlaczego chcesz brać winę na siebie?” -> odpowiedź „Bo wolę, żeby ktoś oberwał za puszkę, niż żeby całą zmianę wyrzucili. Wolę ja niż oni.…”
- **PROZNIA** tura 3, pytanie 3: „Dlaczego chcesz brać winę na siebie?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Dlaczego chcesz brać winę na siebie?” używa „dla”, a gracz nie musiał tego wcześniej usłyszeć

## d19_kofi (dzień 19, Kofi Mensah, 26, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ten powerbank?” -> odpowiedź „Czerwony, prostokątny, z pęknięciem na rogu. Naklejka z trasą: Port, Rynek, Cooper Street.…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ten powerbank?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie go zostawiłeś?” -> odpowiedź „W szóstce, na ładowarce przy oknie. Wysiadłem w biegu, bo zlecenie piszczało.…”
- **PROZNIA** tura 1, pytanie 2: „Gdzie go zostawiłeś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie go zostawiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Co woziłeś na tej trasie?” -> odpowiedź „Płaskie paczki w szarym płótnie. Adres: Cooper Street dziewięć, drugie piętro. Nie wiedzia…”
- **OBOK** tura 2, pytanie 2: pytanie „Kto ci płacił?” -> odpowiedź „Kobieta w jasnych rękawiczkach. Nigdy nie dotykała mojej ręki, tylko kładła pieniądze na t…”
- **PROZNIA** tura 2, pytanie 2: „Kto ci płacił?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 2: „Kto ci płacił?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 3: „Czemu przestałeś wozić paczki?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2
- **OBOK** tura 2, pytanie 4: pytanie „Pod naklejką jest zlecenie „cisza w cenie”. Co to znaczy?” -> odpowiedź „Że płacili za to, żebym nie pytał. Ostatni kurs: osiemdziesiąt dolarów. Mam je jeszcze, ni…”
- **OBOK** tura 3, pytanie 1: pytanie „Czego chcesz od biura?” -> odpowiedź „Powerbanku. I żeby moje stare kursy nie wracały jak echo.…”
- **PROZNIA** tura 3, pytanie 1: „Czego chcesz od biura?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Podpiszesz odbiór?” -> odpowiedź „Kofi Mensah, przez „K”. Dużymi, bo kurier nie ma czasu na ozdoby.…”
- **PROZNIA** tura 3, pytanie 2: „Podpiszesz odbiór?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Podpiszesz odbiór?” używa „pod”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czy opowiesz to komuś jeszcze?” -> odpowiedź „Jeśli ktoś zapyta, powiem prawdę. Ale mało kto pyta kuriera, co wiezie.…”
- **PROZNIA** tura 3, pytanie 3: „Czy opowiesz to komuś jeszcze?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Czy opowiesz to komuś jeszcze?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d19_ferro (dzień 19, Mario Ferro, 47, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ta teczka?” -> odpowiedź „Brązowa, sztywna, z gumką na rogu. Dwie przegródki. W jednej akt urodzenia, w drugiej poli…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta teczka?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 1, pytanie 2: „Gdzie dokładnie ją zostawiłeś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie dokładnie ją zostawiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Co to znaczy, że ktoś chodzi po mieście jako Ty?” -> odpowiedź „Dostałem wezwanie na sprawę o długi, których nie miałem. Dowód wydano w duplikacie, pod in…”
- **OBOK** tura 1, pytanie 4: pytanie „W teczce jest adnotacja o duplikacie. Co to dla Ciebie znaczy?” -> odpowiedź „Że ktoś poszedł do urzędu i powiedział, że to ja. Z moim zdjęciem z lat dwudziestych. Dowó…”
- **OBOK** tura 2, pytanie 1: pytanie „Kim jesteś z zawodu?” -> odpowiedź „Fryzjer. Własny zakład przy Rynku. Dwa foteliki, kolejka rano. Nie widzę, żeby moje nazwis…”
- **PROZNIA** tura 2, pytanie 1: „Kim jesteś z zawodu?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3; odpowiedź 1.4
- **WIEDZA** tura 2, pytanie 1: „Kim jesteś z zawodu?” używa „kim”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Co jeszcze jest w teczce?” -> odpowiedź „Zaświadczenie o niekaralności, polisa i zdjęcie z komunii. Zdjęcie jest ostatnią rzeczą, o…”
- **LUZNE** tura 2, pytanie 2: „Co jeszcze jest w teczce?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 2, pytanie 3: pytanie „Czemu przyszedłeś właśnie tu?” -> odpowiedź „Bo adwokat powiedział: sprawdź, czy ktoś u was nie ma dwóch dowodów. W biurach rzeczy znal…”
- **PROZNIA** tura 2, pytanie 3: „Czemu przyszedłeś właśnie tu?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3; odpowiedź 1.4
- **WIEDZA** tura 2, pytanie 3: „Czemu przyszedłeś właśnie tu?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 3, pytanie 1: „Co zrobisz, jeśli dowiesz się, kto Cię udaje?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3
- **WIEDZA** tura 3, pytanie 1: „Co zrobisz, jeśli dowiesz się, kto Cię udaje?” używa „cie”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 3, pytanie 2: „Podpiszesz odbiór teczki?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 2: „Podpiszesz odbiór teczki?” używa „pod”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czy masz tu jakiś dowód, że to Ty jesteś prawdziwym Ferro?” -> odpowiedź „Teczkę. Akt urodzenia, polisę i zdjęcie. A jeśli to za mało, proszę zadzwonić do adwokata.…”
- **LUZNE** tura 3, pytanie 3: „Czy masz tu jakiś dowód, że to Ty jesteś prawdziwym Ferro?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Czy masz tu jakiś dowód, że to Ty jesteś prawdziwym Ferro?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d20_elias_sam (dzień 20, Elias Wren, Sam Holt i Victor Crane, drzewo)

- **OBOK** 1: „Sam, jak wygląda ten zegarek?” -> „Złoty, kieszonkowy, mały. Szkło pęknięte na trzeciej. Na pokrywce inicjały S.H. Po dziadku…”
- **LUZNE** 1.1: dopytanie „Czemu nosisz go w cudzym etui?” nie zaczepia się o: „…Po dziadku. Jedyna rzecz, którą miałem, zanim tu usiadłem.”
- **OBOK** 2: „Elias, co jest w tej kopercie?” -> „Osiemdziesiąt cztery dolary. Tyle pan Holt zapłacił mi z własnej kieszeni za oprawkę, któr…”
- **OBOK** 2.1: „Sam, czemu nie weźmiesz?” -> „Bo to nie był dług. Obiecałem, że znajdę, i nie znalazłem. Zapłaciłem za własne słowo. Jak…”
- **PROZNIA** 2.1: dopytanie „Sam, czemu nie weźmiesz?” nie zaczepia się o: „…Odkładałem cztery tygodnie. Chcę oddać do ręki.”
- **OBOK** 2.1.1: „Elias, a jeśli nie weźmie nigdy?” -> „To koperta zostanie tutaj, na jego nazwisko. Dług bez nazwiska jest gorszy niż dług z nazw…”
- **OBOK** 3.1: „Co się dzieje z twoim drugim egzemplarzem?” -> „Idzie do Urzędu, jak każdy. Tam czyta go każdy uprawniony. Nie pytaj mnie, kto jest uprawn…”
- **PROZNIA** 3.1: dopytanie „Co się dzieje z twoim drugim egzemplarzem?” nie zaczepia się o: „…Chcę dwóch zeznań i dowodu wpłaty. Albo zamknę tak, jak jest.”
- **OBOK** 4.1: „Czego chcesz ode mnie teraz?” -> „Jednej rzeczy. Elias od tygodni pyta, kto tu siedzi, a ja nie umiem odpowiedzieć. Jak cię …”
- **LUZNE** 4.1: dopytanie „Czego chcesz ode mnie teraz?” nie zaczepia się o: „…Bilet leżał u Iris od twojej pierwszej nocy. Nie brałem, bo wziąć znaczyło zostawić cię z niczym.”
- **OBOK** 5.1: „Odcinek ma tę samą datę co kwit Eliasa. Czyje to były pieniądze?” -> „Moje. Nie z kasy, nie od Iris, nie z żadnego funduszu. To jedyna czysta rzecz w całej tej …”
- **LUZNE** 5.1: dopytanie „Odcinek ma tę samą datę co kwit Eliasa. Czyje to były pieniądze?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Każdy wpis w dwóch egzemplarzach to jeden adres więcej w Urzędzie. A imię powiedziane na głos nie idzie nigdzie.”

## d20_tobias (dzień 20, Milo Reed, 29, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ten breloczek?” -> odpowiedź „Syrena z blachy, niebieska, z odłamanym ogonem. Dostałem od córki. Kluczyki są trzy, na kó…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ten breloczek?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie ich szukać?” -> odpowiedź „W szóstce, na ostatnim siedzeniu przy oknie. Położyłem, jak zdejmowałem plecak, i wysiadłe…”
- **PROZNIA** tura 1, pytanie 2: „Gdzie ich szukać?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Gdzie ich szukać?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Co jest w tym vanie, że tak Ci się spieszy?” -> odpowiedź „Towar dla sklepu: chleb, jajka i dwie skrzynki mleka. Jak nie dowiozę do szóstej, sklep ni…”
- **PROZNIA** tura 1, pytanie 3: „Co jest w tym vanie, że tak Ci się spieszy?” nie zaczepia się o: wejście
- **OBOK** tura 2, pytanie 1: pytanie „Od jak dawna jeździsz?” -> odpowiedź „Cztery lata. Prawie nie widuję dnia. Córka mówi, że jestem jak nietoperz z prawem jazdy.…”
- **PROZNIA** tura 2, pytanie 1: „Od jak dawna jeździsz?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **OBOK** tura 2, pytanie 2: pytanie „Kto może potwierdzić, że van jest Twój?” -> odpowiedź „Firma. Dyspozytor Mick, numer jest na karcie. Ale o tej porze śpi i nie odbierze.…”
- **LUZNE** tura 2, pytanie 2: „Kto może potwierdzić, że van jest Twój?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Kto może potwierdzić, że van jest Twój?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 2: „Kto może potwierdzić, że van jest Twój?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 3: „Czemu spieszysz się tak, jakby coś Cię goniło?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czemu spieszysz się tak, jakby coś Cię goniło?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 3: „Czemu spieszysz się tak, jakby coś Cię goniło?” używa „cie”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 4: pytanie „Czemu ten breloczek jest taki ciężki?” -> odpowiedź „Bo w środku jest schowek. Trzymam tam napiwki od klientów, żeby ich nie wydać. Sześćdziesi…”
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jak odzyskasz kluczyki?” -> odpowiedź „Pojadę po bułki. Potem na stację, wypiję kawę i poczuję się jak człowiek.…”
- **LUZNE** tura 3, pytanie 1: „Co zrobisz, jak odzyskasz kluczyki?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 2: pytanie „Jak zapisać Twoje nazwisko?” -> odpowiedź „Reed, przez dwa e. Milo, krótko, jak klakson.…”
- **PROZNIA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 3, pytanie 3: „Czy ktoś mógłby chcieć tych kluczyków?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Czy ktoś mógłby chcieć tych kluczyków?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d21_maya_lena_priya (dzień 21, Maya Doyle, Lena Brandt i Priya Nair, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Priya, jak wygląda Twoja walizka?” -> odpowiedź „Szara, twarda, z żółtą wstążką na rączce. W środku suknia, buty i welon w osobnej torbie, …”
- **WIEDZA** tura 1, pytanie 1: „Priya, jak wygląda Twoja walizka?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Maya, co jest w Twojej walizce?” -> odpowiedź „Suknia. Moja, sprzed siedmiu lat. Nie na ślub, na oddanie. Raz, dwa, trzy. Evan ma ją dost…”
- **WIEDZA** tura 1, pytanie 2: „Maya, co jest w Twojej walizce?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Lena, czemu przyszłaś razem z Mayą?” -> odpowiedź „Bo wiem, że to dziś. Nie chcę, żeby poszła sama. Ale… nie sama, tylko obok. Ona mówi, że o…”
- **OBOK** tura 1, pytanie 4: pytanie „W kieszeni walizki Mai jest bilet 0517. Skąd on jest?” -> odpowiedź „Dostałam go w kopercie, bez słowa. Nie wiem od kogo, wiem od czego. Pytaj, czemu nie użyła…”
- **OBOK** tura 2, pytanie 1: pytanie „Maya, czemu oddajesz suknię Evanowi?” -> odpowiedź „Bo to jego pamiątka, nie moja. Nie chcę od niego niczego, ani żalu, ani rzeczy. Oddam i bę…”
- **WIEDZA** tura 2, pytanie 1: „Maya, czemu oddajesz suknię Evanowi?” używa „eva”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Lena, co chcesz przekazać Mai?” -> odpowiedź „Że jest mi przykro, że dopiero jej zniknięcie mnie ruszyło. Że mogłam pytać. Ale ona nie c…”
- **LUZNE** tura 2, pytanie 2: „Lena, co chcesz przekazać Mai?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Lena, co chcesz przekazać Mai?” używa „mai”, a gracz nie musiał tego wcześniej usłyszeć
- **LUZNE** tura 2, pytanie 3: „Priya, wesele o jedenastej. Co, jeśli walizki się pomylą?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 1: pytanie „Maya, jak się czujesz przed oddaniem sukni?” -> odpowiedź „Jak po wyłączeniu prądu. Nic nie iskrzy. Ciszej, niż myślałam. Chyba lepiej.…”
- **OBOK** tura 3, pytanie 3: pytanie „Lena, wolisz przekazać wiadomość sama czy przeze mnie?” -> odpowiedź „Przez Ciebie, jeśli Maya pozwoli. Sama zepsuję. Zawsze mówię o dwa zdania za dużo.…”
- **LUZNE** tura 3, pytanie 3: „Lena, wolisz przekazać wiadomość sama czy przeze mnie?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 4: pytanie „Priya, bardzo Ci się spieszy?” -> odpowiedź „Strasznie. Mam pięćdziesiąt dolarów w kopercie na taksówkę. Dam je, jeśli wydacie obie wal…”
- **LUZNE** tura 3, pytanie 4: „Priya, bardzo Ci się spieszy?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi

## d21_mina (dzień 21, Mina Oh, 68, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda Twój koszyk?” -> odpowiedź „Wiklinowy, z pokrywką na rzemyk. Rzemyk zawiązałam podwójnym węzłem, bo pierwszy zawsze si…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda Twój koszyk?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda Twój koszyk?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Co jest w środku?” -> odpowiedź „Leki, jedno opakowanie na miesiąc. Słoik śliwek z pestkami, wnuczka nie lubi bez pestek. I…”
- **PROZNIA** tura 1, pytanie 2: „Co jest w środku?” nie zaczepia się o: wejście
- **OBOK** tura 1, pytanie 3: pytanie „Czemu nie wzięłaś koszyka z tramwaju od razu?” -> odpowiedź „Bo zasnęłam. Człowiek w moim wieku zasypia, jak mu się pozwoli. Teraz pamiętam, że pozwoli…”
- **WIEDZA** tura 1, pytanie 3: „Czemu nie wzięłaś koszyka z tramwaju od razu?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Dla kogo jest ten słoik?” -> odpowiedź „Dla Zoe, wnuczki. Ma siedem lat i twierdzi, że śliwki to owoce, które się przebrały za win…”
- **PROZNIA** tura 2, pytanie 1: „Dla kogo jest ten słoik?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.3; odpowiedź 1.4
- **WIEDZA** tura 2, pytanie 1: „Dla kogo jest ten słoik?” używa „dla”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Kto może potwierdzić, że koszyk jest Twój?” -> odpowiedź „Apteka na Rynku, farmaceutka Anja. Zna mnie od lat, ale o tej porze już śpi.…”
- **LUZNE** tura 2, pytanie 2: „Kto może potwierdzić, że koszyk jest Twój?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 2: „Kto może potwierdzić, że koszyk jest Twój?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 2: „Kto może potwierdzić, że koszyk jest Twój?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 3: pytanie „Czemu boisz się cudzego koszyka?” -> odpowiedź „Bo raz wzięłam cudzy i wzięłam cudze tabletki. Dobrze, że to były witaminy. Od tamtej pory…”
- **LUZNE** tura 2, pytanie 3: „Czemu boisz się cudzego koszyka?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 2, pytanie 3: „Czemu boisz się cudzego koszyka?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz po odzyskaniu koszyka?” -> odpowiedź „Wezmę lek, a potem zrobię sobie herbatę. Zoe przyjdzie na śniadanie z mamą, więc słoik mus…”
- **LUZNE** tura 3, pytanie 1: „Co zrobisz po odzyskaniu koszyka?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 2: pytanie „Jak zapisać Twoje nazwisko?” -> odpowiedź „Oh, przez „h” na końcu. Mina, od Wilhelminy. Tak mnie nazwano przed wojną, której nie pami…”
- **PROZNIA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3
- **WIEDZA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 3, pytanie 2: „Jak zapisać Twoje nazwisko?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Co, jeśli koszyk się nie znajdzie?” -> odpowiedź „To pójdę do Anji o ósmej i poproszę na kreskę. Nie pierwszy raz, a Anja nie pyta.…”
- **LUZNE** tura 3, pytanie 3: „Co, jeśli koszyk się nie znajdzie?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi

## d22_noah (dzień 22, Noah Reyes, 42, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co dokładnie jest w kopercie?” -> odpowiedź „Czyli: oświadczenie Mai, jedna strona, podpis, data. I kartka z zakresem zgody, żeby nikt …”
- **OBOK** tura 1, pytanie 2: pytanie „Co zrobisz z oświadczeniem?” -> odpowiedź „Czyli: dołączę do akt i zamknę zgłoszenie. Dziś mija termin. Potem to już nie poszukiwanie…”
- **PROZNIA** tura 1, pytanie 3: „Czemu tak Ci zależy na terminie?” nie zaczepia się o: wejście; wejście (wariant 2); wejście (wariant 3)
- **WIEDZA** tura 1, pytanie 3: „Czemu tak Ci zależy na terminie?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Od kiedy prowadzisz tę sprawę?” -> odpowiedź „Od czwartku sprzed pięciu tygodni. Czyli od dnia zgłoszenia. Najpierw myślałem, że zwykła.…”
- **PROZNIA** tura 2, pytanie 1: „Od kiedy prowadzisz tę sprawę?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **OBOK** tura 2, pytanie 2: pytanie „Do której złożysz papiery?” -> odpowiedź „Do szóstej rano. Czyli jeśli się spóźnię, sprawa idzie wyżej i nic z tego nie zależy ode m…”
- **PROZNIA** tura 2, pytanie 2: „Do której złożysz papiery?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **OBOK** tura 2, pytanie 3: pytanie „Co dokładnie mogę przekazać z tej koperty?” -> odpowiedź „Czyli: że żyje i jest bezpieczna. Nie wolno: miasto, nazwisko, linia, praca. Napisała to s…”
- **WIEDZA** tura 2, pytanie 4: „Czy Evan wie, że to oświadczenie istnieje?” używa „czy”, a gracz słyszał to tylko po: odpowiedź 1.1; odpowiedź 1.2
- **WIEDZA** tura 2, pytanie 4: „Czy Evan wie, że to oświadczenie istnieje?” używa „eva”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Co pomogło Ci w tej sprawie?” -> odpowiedź „Czyli: że ktoś odmówił powiedzenia za dużo. Mało kto to potrafi, zwłaszcza po nocy.…”
- **PROZNIA** tura 3, pytanie 1: „Co pomogło Ci w tej sprawie?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Co się stanie, jeśli nic nie przekażę?” -> odpowiedź „Czyli: zgłoszenie wisi. Maya jest bezpieczna, ale detektyw rusza, a ja go nie zatrzymam.…”
- **PROZNIA** tura 3, pytanie 2: „Co się stanie, jeśli nic nie przekażę?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 3: pytanie „Co dostanie Evan, jeśli oświadczenie do niego dotrze?” -> odpowiedź „Czyli: jedno zdanie. Żyje i nie wróci. Nic więcej. Chyba że ktoś dopisze od siebie, a wted…”
- **LUZNE** tura 3, pytanie 3: „Co dostanie Evan, jeśli oświadczenie do niego dotrze?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Co dostanie Evan, jeśli oświadczenie do niego dotrze?” używa „eva”, a gracz nie musiał tego wcześniej usłyszeć

## d22_stahl (dzień 22, Marek Stahl, ok. 50, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ta walizka?” -> odpowiedź „Szara, twarda, z żółtym zamkiem. Zgodnie z regulaminem dodam, że w środku jest biała sukni…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta walizka?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 1, pytanie 2: „Kiedy ją zgubiłeś?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 2: „Kiedy ją zgubiłeś?” używa „kie”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 1, pytanie 3: „Skąd tak dokładnie znasz opis sukni?” używa „ska”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Czego dokładnie od okienka potrzebujesz?” -> odpowiedź „Jednej rzeczy. Kopii pokwitowania wydania z wczoraj, ze wskazaniem, kto odebrał walizkę i …”
- **PROZNIA** tura 2, pytanie 1: „Czego dokładnie od okienka potrzebujesz?” nie zaczepia się o: odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 1: „Czego dokładnie od okienka potrzebujesz?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 2: „Na jakiej podstawie to żądasz?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czy to Ty stałeś wczoraj na końcu kolejki?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Jak długo szukasz tej osoby?” -> odpowiedź „Ponad miesiąc. Zgodnie z regulaminem nie podaję, kto płaci. Ludzie bywają wdzięczni za dob…”
- **PROZNIA** tura 3, pytanie 1: „Jak długo szukasz tej osoby?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 1: „Jak długo szukasz tej osoby?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 3, pytanie 2: „Czego byś się nie dowiedział, gdyby okienko odmówiło?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Czego byś się nie dowiedział, gdyby okienko odmówiło?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Ile jesteś gotów zapłacić za kopię kwitu?” -> odpowiedź „Zgodnie z regulaminem to nie jest łapówka, tylko opłata manipulacyjna. Dwieście dolarów, o…”
- **PROZNIA** tura 3, pytanie 3: „Ile jesteś gotów zapłacić za kopię kwitu?” nie zaczepia się o: odpowiedź 2.2; odpowiedź 2.3
- **WIEDZA** tura 3, pytanie 3: „Ile jesteś gotów zapłacić za kopię kwitu?” używa „ile”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 4: pytanie „Do walizki jest przypięta karteczka z depozytem detektywa. Co to?” -> odpowiedź „Zaliczka, sześćset dolarów, na wypadek, gdyby pełnomocnictwo nie przyszło na czas. To zgod…”

## d22_jonah (dzień 22, Jonah Pike, 22, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w tej kopercie?” -> odpowiedź „Dziewięćdziesiąt dolarów w banknotach i kartka z podpisem. Rata dla człowieka, którego nie…”
- **WIEDZA** tura 1, pytanie 2: „Kiedy ją zgubiłeś?” używa „kie”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Komu jesteś winien te pieniądze?” -> odpowiedź „Marlowowi. Kubie Marlowowi. Pożyczył na pierścionek i na wesele. Teraz mówi, że rata rośni…”
- **PROZNIA** tura 1, pytanie 3: „Komu jesteś winien te pieniądze?” nie zaczepia się o: wejście; wejście (wariant 1); wejście (wariant 2); wejście (wariant 3)
- **WIEDZA** tura 1, pytanie 3: „Komu jesteś winien te pieniądze?” używa „kom”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Jak poszły oświadczyny z June?” -> odpowiedź „Powiedziała tak. Jeszcze raz: tak! Płakała i śmiała się naraz. Ślub w czerwcu. Zapraszam, …”
- **WIEDZA** tura 2, pytanie 1: „Jak poszły oświadczyny z June?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 1: „Jak poszły oświadczyny z June?” używa „jun”, a gracz słyszał to tylko po: odpowiedź 1.2
- **OBOK** tura 2, pytanie 2: pytanie „Ile jeszcze jesteś winien Marlowowi?” -> odpowiedź „Z tą ratą zostanie jeszcze trzysta sześćdziesiąt. Czyli sześć sobót. Liczę na ślub, bo goś…”
- **PROZNIA** tura 2, pytanie 2: „Ile jeszcze jesteś winien Marlowowi?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2
- **WIEDZA** tura 2, pytanie 2: „Ile jeszcze jesteś winien Marlowowi?” używa „ile”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 2: „Ile jeszcze jesteś winien Marlowowi?” używa „mar”, a gracz słyszał to tylko po: odpowiedź 1.3
- **OBOK** tura 2, pytanie 3: pytanie „Co, jeśli koperty nie ma w biurze?” -> odpowiedź „To spłacę z czynszu. June się dowie, bo musi. Kuba nie przyjmuje wymówek, tylko pieniądze.…”
- **OBOK** tura 3, pytanie 1: pytanie „Co zrobisz, jeśli odzyskasz kopertę?” -> odpowiedź „Pobiegnę do Kuby, zanim się rozmyślę. A potem pojadę do June i powiem jej o długu. Wszystk…”
- **OBOK** tura 3, pytanie 2: pytanie „Czy kto inny wie o tym długu?” -> odpowiedź „June nie. Moja matka tak, ale jej nie mówię, że to Marlow. Bo ona zna jego matkę i będzie …”
- **PROZNIA** tura 3, pytanie 2: „Czy kto inny wie o tym długu?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 2: „Czy kto inny wie o tym długu?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Co Ci przeszkadza w mówieniu June?” -> odpowiedź „Że będzie patrzyła na pierścionek jak na kredyt. Że spytam, czy kocha mnie, czy ratę. Głup…”
- **WIEDZA** tura 3, pytanie 3: „Co Ci przeszkadza w mówieniu June?” używa „jun”, a gracz nie musiał tego wcześniej usłyszeć

## d23_iris_nora_victor (dzień 23, Iris Bell, Nora Vance i Victor Crane, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w kasetce?” -> odpowiedź „Karta rozliczenia z moim podpisem i pokwitowanie dopłaty. Nora chce oryginałów, Victor lis…”
- **OBOK** tura 1, pytanie 2: pytanie „Nora, czego chcesz od kasetki?” -> odpowiedź „Po kolei: oryginały zaliczek, bo lokatorzy ich potrzebują. Okoye wpłaciła czterysta dolaró…”
- **WIEDZA** tura 1, pytanie 3: „Victor, co weźmiesz, jeśli kasetka trafi do Ciebie?” używa „cie”, a gracz słyszał to tylko po: wejście (wariant 3)
- **OBOK** tura 2, pytanie 1: pytanie „Iris, mogę zapytać o coś na osobności?” -> odpowiedź „Jeśli Victor i Nora poczekają. Pytaj.…”
- **PROZNIA** tura 2, pytanie 1: „Iris, mogę zapytać o coś na osobności?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3; odpowiedź 1.4
- **OBOK** tura 2, pytanie 2: pytanie „Nora, co się stanie, jeśli oryginały trafią do Victora?” -> odpowiedź „Po kolei: Urząd je zatrzyma, lokatorzy zostaną bez dowodu, kamienica pójdzie pod młot. Rod…”
- **PROZNIA** tura 2, pytanie 3: „Victor, dla kogo naprawdę liczysz tę kopię?” nie zaczepia się o: odpowiedź 1.2; odpowiedź 1.4
- **OBOK** tura 2, pytanie 4: pytanie „Iris, na stronie rejestru są nazwiska klientów. Skąd je masz?” -> odpowiedź „Z kopii Urzędu. Proszę zobaczyć: wszystko, co zapisano w dwóch egzemplarzach, jest tutaj. …”
- **PROZNIA** tura 3, pytanie 1: „Iris, co będzie po dzisiejszym dniu?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Iris, ile wydałaś na papiery dla czterech osób?” -> odpowiedź „Tysiąc siedemset za sztukę. Sześć tysięcy osiemset. Wzięłam je od miasta, bo skąd mam wzią…”
- **PROZNIA** tura 3, pytanie 2: „Iris, ile wydałaś na papiery dla czterech osób?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 4: pytanie „Iris, ile zapłacisz, żeby tej kasetki nie było w protokole?” -> odpowiedź „Pięćset dolarów. Lubię porządek. Wsunę kopertę pod szybę i nikt nie musi nic mówić.…”
- **LUZNE** tura 3, pytanie 4: „Iris, ile zapłacisz, żeby tej kasetki nie było w protokole?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi

## d23_rosa (dzień 23, Rosa Vale, 33, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Jak wygląda ten portfel?” -> odpowiedź „Czarny, cienki, zatrzask pękł z lewej. W środku bilet miesięczny i sześćdziesiąt dolarów w…”
- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ten portfel?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie go zgubiłaś?” -> odpowiedź „W jedenastce, po nocnej zmianie. Wyjęłam go, żeby sprawdzić godzinę odjazdu, i położyłam o…”
- **WIEDZA** tura 1, pytanie 2: „Gdzie go zgubiłaś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Skąd masz pieniądze na czynsz, skoro pracujesz za grosze?” -> odpowiedź „Z nocy w pralni i z tego, że nie jem w poniedziałki. To nie jest historia na chwałę, tylko…”
- **WIEDZA** tura 1, pytanie 3: „Skąd masz pieniądze na czynsz, skoro pracujesz za grosze?” używa „ska”, a gracz nie musiał tego wcześniej usłyszeć
- **PROZNIA** tura 2, pytanie 1: „Słyszałaś, co się dzieje w kamienicy Cooper?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 1: „Słyszałaś, co się dzieje w kamienicy Cooper?” używa „sly”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 1: „Słyszałaś, co się dzieje w kamienicy Cooper?” używa „coo”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Co zrobisz z pieniędzmi, jeśli je odzyskasz?” -> odpowiedź „Zapłacę czynsz. A jak zostanie reszta, to kupię Adzie lalkę. Pytała o tę z różowym warkocz…”
- **PROZNIA** tura 2, pytanie 2: „Co zrobisz z pieniędzmi, jeśli je odzyskasz?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **PROZNIA** tura 2, pytanie 3: „Czy ktoś ze Skrytki prosił Cię kiedyś o przysługę?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czy ktoś ze Skrytki prosił Cię kiedyś o przysługę?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 3: „Czy ktoś ze Skrytki prosił Cię kiedyś o przysługę?” używa „skr”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Rosa, co chcesz, żeby się stało po dzisiejszym dniu?” -> odpowiedź „Żeby było cicho. Żebym rano wsiadła do tramwaju i nikt nie pytał, skąd mam czynsz. Dobrze …”
- **LUZNE** tura 3, pytanie 1: „Rosa, co chcesz, żeby się stało po dzisiejszym dniu?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 2: pytanie „Co zrobisz, jeśli portfela nie ma?” -> odpowiedź „Pożyczę. Pożyczać umiem. Tylko że potem trzeba oddawać, a ja już teraz oddaję więcej, niż …”
- **LUZNE** tura 3, pytanie 2: „Co zrobisz, jeśli portfela nie ma?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 3, pytanie 3: pytanie „Czy komuś ufasz bardziej niż nam?” -> odpowiedź „Nikomu. Ufam kartce i długopisowi. Jak jest zapisane, to wiem, że nikt nie zmieni zdania.…”
- **PROZNIA** tura 3, pytanie 3: „Czy komuś ufasz bardziej niż nam?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Czy komuś ufasz bardziej niż nam?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć

## d24_vera (dzień 24, Vera Kovacs, 62, drzewo)

- **OBOK** 1: „Co to za teczka?” -> „Szara, tekturowa, wiązana tasiemką. Pusta. Od lat stoi w szafce jako „zajęte”, żeby nikt t…”
- **OBOK** 1.1: „Co jest na kartoniku?” -> „Numer: 0809. Ołówkiem, pismo Sama. To szafka dla tego, kto siedzi przy szybie. Dla ciebie.…”
- **LUZNE** 1.1.1: dopytanie „Czemu dla mnie? Nikt mi nie mówił o żadnej szafce.” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Dla ciebie. Klucz mam przy pasie, słychać.”
- **OBOK** 2: „Skąd wzięłaś ten kartonik?” -> „Z szuflady numer sześć, tej, którą Sam zostawił dla następnego. Wyjęłam wczoraj. Od wczora…”
- **OBOK** 3: „Czemu przyszłaś bez Sama?” -> „Bo on by mi przerwał. Powiedziałby, że to nie moja wina. A to jest moja wina i chcę to pow…”
- **OBOK** 3.1: „Jaka wina?” -> „To ja wybieram, kto siada na tym fotelu. Od jedenastu lat. Patrzę na ludzi przy słupie z o…”
- **OBOK** 3.1.2: „Ilu było przede mną?” -> „Pięcioro. Sam był piąty. Iris trzecia, tak, ta Iris. Czwartego znaleźli w kanale portowym.…”
- **PROZNIA** 3.1.2: dopytanie „Ilu było przede mną?” nie zaczepia się o: „…Patrzę na ludzi przy słupie z ogłoszeniem i nie pytam, co umieją. Patrzę, czy ktoś by ich szukał.”
- **OBOK** 4: „Co ty właściwie robisz w tym biurze?” -> „Klucze, teczki, pudełka. Zamykam, co otwarte, i pilnuję, żeby nic nie stało niczyje. A raz…”
- **LUZNE** 4.1.1: dopytanie „Jak się z tego fotela odchodzi?” nie zaczepia się o: „…Zmieniam tylko odcinek z numerem. Twój był 0809.”
- **OBOK** 5: „Na mojej umowie jest podpis z pętlą w literze K. Czyj?” -> „Mój. Podpisałam za Zarząd Cooper, nieczytelnie, żeby nikt nie szukał, kto za tym stoi. Wsz…”
- **OBOK** 5.1: „Czemu mówisz mi to teraz?” -> „Bo Sam odszedł i nie umiał tego powiedzieć. Ktoś musi wiedzieć, że nie jest pierwszy. I że…”
- **LUZNE** 6.1: dopytanie „Co znajdę w tej szafce oprócz listu?” nie zaczepia się o: „…Sam napisał to ołówkiem, ale reguła nie była jego. Dostał ją tak jak ty: cudzą, do udawania, że własna.”

## d24_leo (dzień 24, Leo Marsh, 46, stare tury)

- **WIEDZA** tura 1, pytanie 1: „Jak wygląda ta torba?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 2: pytanie „Gdzie dokładnie ją zgubiłeś?” -> odpowiedź „Na pętli szóstki, o czwartej. Położyłem na ławce, bo musiałem zapalić. Zazwyczaj zabieram,…”
- **WIEDZA** tura 1, pytanie 2: „Gdzie dokładnie ją zgubiłeś?” używa „gdz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Co to za wpis, którego nie rozumiesz?” -> odpowiedź „Pozycja ostatnia: „0809, dokumenty, paczka w płótnie, nieodebrana”. Tego numeru nigdy nie …”
- **OBOK** tura 1, pytanie 4: pytanie „W wykazie obok pozycji 0809 ktoś dopisał „dyżurny”. Co to znaczy?” -> odpowiedź „Że paczka nie jest dla klienta. Jest dla tego, kto stoi po tej stronie szyby. Nie wiem, cz…”
- **OBOK** tura 2, pytanie 2: pytanie „Co zwykle jest w paczce?” -> odpowiedź „Dokumenty, trochę gotówki w kopercie, czasem klucz. Nigdy nie zaglądam. Płótno jest zszyte…”
- **WIEDZA** tura 2, pytanie 3: „Czy wiesz, kto wysłał paczkę 0809?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 3: „Czy wiesz, kto wysłał paczkę 0809?” używa „0809”, a gracz słyszał to tylko po: odpowiedź 1.3
- **OBOK** tura 3, pytanie 1: pytanie „Jak się czujesz, wożąc paczki, o których nic nie wiesz?” -> odpowiedź „Jak maszynista z ręką na hamulcu, który nie widzi, co jest przed nim. Jadę, bo tak mam. I …”
- **LUZNE** tura 3, pytanie 1: „Jak się czujesz, wożąc paczki, o których nic nie wiesz?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 1: „Jak się czujesz, wożąc paczki, o których nic nie wiesz?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 2: pytanie „Co zrobisz z wykazem po dzisiejszym dniu?” -> odpowiedź „Oddam okienku, jeśli ktoś wpisze. Jeśli nie, zachowam. Nie potrzebuję się z nikim dzielić,…”
- **LUZNE** tura 3, pytanie 2: „Co zrobisz z wykazem po dzisiejszym dniu?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **LUZNE** tura 3, pytanie 3: „Kto naprawdę czeka na tę paczkę?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 3: „Kto naprawdę czeka na tę paczkę?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć

## d24_thomas (dzień 24, Thomas Ward, 71, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w tej kopercie?” -> odpowiedź „Jedna kartka, pisana moją ręką. Że rzecz, którą młody człowiek mi kiedyś oddał, oddał bez …”
- **OBOK** tura 1, pytanie 2: pytanie „Kiedy to było?” -> odpowiedź „Sześć tygodni temu. Prawą oddał od razu. Lewa czekała, jak powiedział. Przyszedłem wtedy p…”
- **PROZNIA** tura 1, pytanie 2: „Kiedy to było?” nie zaczepia się o: wejście; wejście (wariant 1); wejście (wariant 2); wejście (wariant 3)
- **WIEDZA** tura 1, pytanie 2: „Kiedy to było?” używa „kie”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 1, pytanie 3: pytanie „Czemu piszesz świadectwo, skoro nikt o nie nie prosi?” -> odpowiedź „Bo ktoś powinien zapisać, że ten człowiek nie robił nic złego. Zrobił wyjątek, i dobrze. N…”
- **WIEDZA** tura 1, pytanie 3: „Czemu piszesz świadectwo, skoro nikt o nie nie prosi?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Jak sobie radzisz od śmierci żony?” -> odpowiedź „Dwa razy w tygodniu na cmentarz. Rozmawiam z nią o rękawiczce. Mówi, że byłem leniwy, skor…”
- **PROZNIA** tura 2, pytanie 1: „Jak sobie radzisz od śmierci żony?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 1: „Jak sobie radzisz od śmierci żony?” używa „jak”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 2: pytanie „Kto jeszcze zna tę historię?” -> odpowiedź „Córka, Claire. I ten młody człowiek, Sam. Powiedział mi kiedyś: lewa czeka. Nie wiedziałem…”
- **PROZNIA** tura 2, pytanie 2: „Kto jeszcze zna tę historię?” nie zaczepia się o: odpowiedź 1.1; odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 2: „Kto jeszcze zna tę historię?” używa „kto”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 3: pytanie „Czy Sam kiedyś Ci coś obiecał?” -> odpowiedź „Że lewa poczeka. Dotrzymał. To więcej, niż potrafią niektórzy w rodzinie.…”
- **PROZNIA** tura 2, pytanie 3: „Czy Sam kiedyś Ci coś obiecał?” nie zaczepia się o: odpowiedź 1.2; odpowiedź 1.3
- **WIEDZA** tura 2, pytanie 3: „Czy Sam kiedyś Ci coś obiecał?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **WIEDZA** tura 2, pytanie 3: „Czy Sam kiedyś Ci coś obiecał?” używa „sam”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Co chcesz, żeby się stało z tym świadectwem?” -> odpowiedź „Żeby ktoś je przeczytał. I żeby nikt nie wyrzucił. Jeśli to nie jest dla księgi, to chocia…”
- **LUZNE** tura 3, pytanie 1: „Co chcesz, żeby się stało z tym świadectwem?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **LUZNE** tura 3, pytanie 2: „Czy świadectwo ma jakieś znaczenie prawne?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **WIEDZA** tura 3, pytanie 2: „Czy świadectwo ma jakieś znaczenie prawne?” używa „czy”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 3: pytanie „Czego się boisz?” -> odpowiedź „Że ten młody człowiek odchodzi, a ja nie zdążyłem podziękować. Że za rok to ja zniknę, a n…”
- **PROZNIA** tura 3, pytanie 3: „Czego się boisz?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 3: „Czego się boisz?” używa „cze”, a gracz nie musiał tego wcześniej usłyszeć

## d25_sam_elias (dzień 25, Sam Holt, Elias Wren i Victor Crane, stare tury)

- **OBOK** tura 1, pytanie 1: pytanie „Co jest w tym etui?” -> odpowiedź „Okulary, które nie są moje, i kartka z decyzją o odejściu, z wpisem o niedoborze na zmiani…”
- **OBOK** tura 1, pytanie 2: pytanie „Victor, czemu zamykasz audyt dziś?” -> odpowiedź „Bo dziś kończy się okres. Protokół musi mieć podpis i daty. Kto to podpisze? Ja, jeśli kop…”
- **PROZNIA** tura 1, pytanie 2: „Victor, czemu zamykasz audyt dziś?” nie zaczepia się o: wejście
- **PROZNIA** tura 1, pytanie 3: „Sam, czemu zostawiłeś Verze pustą teczkę?” nie zaczepia się o: wejście
- **WIEDZA** tura 1, pytanie 3: „Sam, czemu zostawiłeś Verze pustą teczkę?” używa „ver”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 2, pytanie 1: pytanie „Elias, po co dziś przyszedłeś?” -> odpowiedź „Zapytać, czy Sam się odezwał. I zdążyć, zanim ktoś zamknie księgę. Księgi się zamyka, kied…”
- **LUZNE** tura 2, pytanie 1: „Elias, po co dziś przyszedłeś?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **OBOK** tura 2, pytanie 2: pytanie „Sam, co będziesz robił po odejściu?” -> odpowiedź „Kolega z portu dzwoni dziś na biuro o piątej trzydzieści po referencje. Jeśli ktoś potwier…”
- **PROZNIA** tura 2, pytanie 2: „Sam, co będziesz robił po odejściu?” nie zaczepia się o: odpowiedź 1.2; odpowiedź 1.3; odpowiedź 1.4
- **OBOK** tura 2, pytanie 3: pytanie „Victor, co się stanie, jeśli kopia nie zostanie dołączona?” -> odpowiedź „Protokół będzie niepełny. Referencje wątpliwe. Kto to podpisze? Nie ja. Wolę komplet, bo k…”
- **WIEDZA** tura 2, pytanie 4: „Sam, czy kopia decyzji powinna trafić do Urzędu?” używa „urz”, a gracz nie musiał tego wcześniej usłyszeć
- **OBOK** tura 3, pytanie 1: pytanie „Sam, jak się czujesz, kiedy odchodzisz?” -> odpowiedź „Lekko, z jednym wyjątkiem. Zostawiam komuś ciężką rzecz i nie zapytałem, czy chce.…”
- **PROZNIA** tura 3, pytanie 1: „Sam, jak się czujesz, kiedy odchodzisz?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **OBOK** tura 3, pytanie 2: pytanie „Elias, co powiesz Samowi na pożegnanie?” -> odpowiedź „Że dziękuję za oprawkę. I że oddawałem pieniądze ludziom, którzy nie prosili. Zacząłem od …”
- **LUZNE** tura 3, pytanie 2: „Elias, co powiesz Samowi na pożegnanie?” nie nawiązuje do końcówki żadnej poprzedniej odpowiedzi
- **PROZNIA** tura 3, pytanie 3: „Sam, kto usiądzie tu po mnie?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.2; odpowiedź 2.3; odpowiedź 2.4
- **PROZNIA** tura 3, pytanie 4: „Victor, czemu pytasz o referencje Sama, skoro to nie Twoja sprawa?” nie zaczepia się o: odpowiedź 2.1; odpowiedź 2.4
- **WIEDZA** tura 3, pytanie 4: „Victor, czemu pytasz o referencje Sama, skoro to nie Twoja sprawa?” używa „two”, a gracz nie musiał tego wcześniej usłyszeć

## d25_ksiega (dzień 25, Elias Wren, drzewo)

- **OBOK** 1: „Co to za linia?” -> „Zero osiem zero dziewięć. Wąska, pusta, z miejscem na imię. Pan Holt mówił, że czeka na na…”
- **LUZNE** 1.1: dopytanie „W rogu ktoś dopisał tuszem „0913”. Co to?” nie zaczepia się o: „…Pan Holt mówił, że czeka na następnego. Dziś pierwszy raz widzę ją z bliska.”
- **WIEDZA** 1.1: „W rogu ktoś dopisał tuszem „0913”. Co to?” używa „0913”, a gracz nie musiał tego usłyszeć na tej ścieżce
- **OBOK** 1.2: „Co się stanie, jeśli wpiszę tu swoje imię?” -> „Będzie zapisane, że ktoś tu siedział. Pani Bell mówi, że wtedy czeka bilet. Ale ktoś musi …”
- **LUZNE** 1.2: dopytanie „Co się stanie, jeśli wpiszę tu swoje imię?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Pan Holt mówił, że czeka na następnego. Dziś pierwszy raz widzę ją z bliska.”
- **OBOK** 2: „A jeśli wyrwę tę stronę, jak Sam?” -> „To nikt już nikogo nie wpisze. Ani ciebie, ani następnego. Kartka zniknie ze słupa. Nie wi…”
- **OBOK** 4: „Czemu zawsze pytasz o imię?” -> „Bo oprawkę żony znalazł mi człowiek, którego nie zapytałem, jak się nazywa. Przez dwa lata…”
- **PLEC** 4: odpowiedź: „pana”
- **OBOK** 4.1: „Po co ci moje imię, skoro zaraz wyjdziesz?” -> „Żeby jutro powiedzieć „dobry wieczór” komuś, a nie szybie.…”
- **LUZNE** 4.1: dopytanie „Po co ci moje imię, skoro zaraz wyjdziesz?” nawiązuje do odpowiedzi, ale nie do jej końcówki: „…Przez dwa lata mówiłem do niego proszę pana. Potem zniknął i nie miałem nawet kogo wołać.”
- **OBOK** 5: „Czemu to ma być moja decyzja?” -> „Bo po tej stronie szyby siedzi jedna osoba. Ja mogę tylko stać i trzymać numerek. Przykro …”
