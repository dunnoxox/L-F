# OKIENKO: rozmowy dni 11-25 (wersja 3, wg dialogi_biblia_prompt.md i fabula_25_dni.md)

Ten sam schemat co w dni1-10. Znaczniki `id:akcja` w `wymaga` i `wejscie_jesli` odwołują się do wcześniejszych decyzji (także z pliku dni 1-10). Nazwy akcji zgodne z fabula_25_dni.md §7. Gracz nie ma płci. Walidacja: `python3 -I docs/tools/validate_dialogs.py okienko_rozmowy_v3_dni1-10.md okienko_rozmowy_v3_dni11-25.md`.

# TYDZIEŃ 3: PRAWDA WYCHODZI

## DZIEŃ 11

**Mini-karta: Maya Doyle, 34, elektryczka.** Głos: precyzyjna, spokojna, „po kolei”; przed każdą zgodą liczy do trzech; metafory z elektryki (zwarcie, obwód, bezpiecznik). Typ: właścicielka, która sama układa zasady. Chce: pokrowiec na okulary i decydować, kto dowie się, że żyje. Ukrywa: zostawia rzeczy celowo, sprawdza, czy biuro wytrzyma. Obraz: ktoś opisuje własne okulary, zanim je zobaczy. Zwrot: Maya nie jest zaginiona, tylko deponuje swoje życie w cudzych tramwajach.

```json
{
  "id": "d11_maya",
  "dzien": 11,
  "postac": "Maya Doyle, 34",
  "glos": "Precyzyjna, spokojna, mówi „po kolei”. Przed każdą zgodą liczy do trzech. Używa słów z elektryki: zwarcie, obwód, bezpiecznik.",
  "typ": "właścicielka, która sama układa zasady",
  "rzecz": "Czarny pokrowiec na okulary ze zszytą gumką",
  "wnetrze": [
    {
      "sekret_id": "d11_trzy_warunki",
      "co_widac": "Pod wewnętrzną łatką leży złożona karteczka z trzema numerowanymi punktami, pisanymi równym, drobnym pismem. Punkt pierwszy: „Nikt nie wie, gdzie jestem”.",
      "co_z_tego_wynika": "Maya zaplanowała, kto i co się o niej dowie. Nie zginęła: sama układa zasady."
    }
  ],
  "wejscie": "Maya Doyle. Zostawiłam pokrowiec na okulary w czwórce, wczoraj. Zanim go wyjmiecie, opiszę: czarny, zszyta gumka z boku, wewnętrzna łatka niebieską nitką. Jeśli się zgadza, porozmawiamy.",
  "wejscie_jesli": {
    "d7_evan:powiedz_linie": "Maya Doyle. Pokrowiec na okulary, czwórka. Opiszę go: czarny, zszyta gumka z boku, łatka niebieską nitką. I jedno pytanie: ktoś powiedział mojemu mężowi, którą linią jeżdżę. Stał trzy noce na pętli. Kto?"
  },
  "tury": [
    {
      "pytania": [
        {"tekst": "Jak wygląda pokrowiec?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Czarny, twardy. Gumka z boku zszyta moją ręką, wewnętrzna łatka niebieską nitką, bo zabrakło czarnej. Sprawdź, to zajmie chwilę.", "mina": "mowi"},
        {"tekst": "Gdzie i kiedy go zostawiłaś?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Czwórka, wczoraj około 22:40, siedzenie przy tylnych drzwiach. Zostawiłam go celowo. Nie pytaj, czy zapomniałam.", "mina": "neutralna"},
        {"tekst": "Skąd znasz łatkę, zanim ją zobaczysz?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Bo to moje. Własne rzeczy opisuje się z pamięci, jak własny bezpiecznik. Nie widzę w tym nic dziwnego.", "mina": "neutralna"},
        {"tekst": "Evan stał trzy noce na pętli czwórki. Co o tym wiesz?", "ton": "niewygodne", "wymaga": "d7_evan:powiedz_linie", "odpowiedz": "Widziałam z wagonu. Szedł równo, z termosem, jak ktoś, komu podano linię. Nie podeszłam. Chcę wiedzieć, kto mu ją podał.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Czemu zostawiasz rzeczy w tramwajach?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Telefon, klucze, torbę, teraz pokrowiec. Chcę wiedzieć, czy ktoś po drugiej stronie szyby wytrzyma i nie zacznie rozdawać. Na razie wytrzymuje.", "mina": "mowi"},
        {"tekst": "Czy Lena Ci pomogła?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Pomogła. Z mieszkaniem na początku. Potem zaczęła decydować za mnie, co mi wolno, i to było drugie zwarcie. Powiem jej to sama.", "mina": "mowi"},
        {"tekst": "Mąż zgłosił Cię jako zaginioną. Wiesz o tym?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Wiem, gazeta, trzecia strona. Nie potwierdzam nic ponad to, że żyję. Reszta należy do mnie.", "mina": "mowi"},
        {"tekst": "Na karteczce pod łatką są trzy punkty. Kto je ułożył?", "ton": "niewygodne", "wymaga": "d11_trzy_warunki", "odpowiedz": "Ja. Układałam je trzy noce, w kolejności, w jakiej coś może się zepsuć. Pierwszy: nikt nie wie, gdzie jestem. Reszta jest za moim tak.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Czego od nas potrzebujesz?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Trzech rzeczy. Po kolei: nikt nie wie, gdzie jestem. Jedno zdanie może iść do policjanta: „Żyje. Nie wróci. Nie szukać.” Wszystko inne, także dla Evana, tylko za moim tak.", "mina": "mowi"},
        {"tekst": "Co z telefonem, kluczami i torbą, które u nas leżą?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Niech leżą. To depozyt. Wezmę je, kiedy skończę, i nikt nie czyta ich beze mnie.", "mina": "neutralna"},
        {"tekst": "Telefon dostał Evan. Wiesz, co zrobił?", "ton": "rzeczowe", "wymaga": "d3_maz_i_siostra:wydaj_evan", "odpowiedz": "Wiem od Leny. Przeczytał, że to ona napisała, i poszedł do niej z pretensjami. Takie zwarcie. Nie mam o to żalu, ale policzyłam.", "mina": "emocja"},
        {"tekst": "Telefon dostała Lena. Wiesz, co z tego wynikło?", "ton": "rzeczowe", "wymaga": "d3_maz_i_siostra:wydaj_lena", "odpowiedz": "Wiem. Lena ma swoją wiadomość, a Evan został bez śladu i przestał ufać tej szybie. Obie strony policzyłam.", "mina": "emocja"},
        {"tekst": "Telefon został w biurze. Co o tym sądzisz?", "ton": "rzeczowe", "wymaga": "d3_maz_i_siostra:zatrzymaj", "odpowiedz": "Że leży tam, gdzie powinien: nikt go nie czyta, dopóki nie powiem. Dlatego tu jestem.", "mina": "mowi"},
        {"tekst": "Czy powiadomić rodzinę, że żyjesz?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Najpierw wysłuchaj do końca. Raz. Dwa. Trzy. Nie, nie bez mojego tak. Nawet jeśli oni nie śpią.", "mina": "neutralna"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "przez_okienko",
      "etykieta": "Zgoda: kontakt tylko przez okienko",
      "reakcja": "Raz. Dwa. Trzy. Tak. Okienko, jedno zdanie dla policjanta, reszta za moim tak. Zapisz, że zgodziłam się dziś i bez przymusu.",
      "zysk": "Maya ufa biuru i będzie wracać po swoje rzeczy.",
      "strata": "Evan i Lena nie dowiedzą się niczego, a Evan stoi dalej na pętli.",
      "echo": {"za_dni": 2, "forma": "gosc", "tekst": "Noah Reyes: „Dostałem jedno zdanie: żyje, nie wróci, nie szukać. Nie pytam skąd. Zapisałem słowo w słowo.”"}
    },
    {
      "akcja": "powiadom_rodzine",
      "etykieta": "Powiadom rodzinę przy Mai",
      "reakcja": "Nie. Raz. Dwa. Trzy. Nie. Wrócę więc już tylko po swoje rzeczy, bez słowa.",
      "zysk": "Rodzina dowie się, że Maya żyje, i przestanie czekać w niepewności.",
      "strata": "Maya zrywa rozmowy i przychodzi już tylko po walizkę, bez słowa.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Lena Brandt: „Dowiedziałam się od Was, że siostra żyje. Nie powiedzieliście gdzie ani dlaczego, a ona nie dała mi powiedzieć nic. Jeśli coś po niej zostało, niech ktoś mi powie. — L.”"}
    }
  ]
}
```

**Mini-karta: Grace Okoye, 35, pielęgniarka z nocnej zmiany.** Głos: krótko, zmęczona, liczy w godzinach dyżuru, czarny szpitalny humor, nie narzeka wprost. Typ: uczciwa, spieszy się. Chce: torebkę z legitymacją, bo o 6:00 musi wejść na oddział. Ukrywa: w torebce kartka o 400 $ dla Iris i „żółtej kopii u elektryczki” (to kopia z dnia 8). Kłamie: „Kartka to zakupy.” Obraz: smycz z kartą na szyi.

```json
{
  "id": "d11_grace",
  "dzien": 11,
  "postac": "Grace Okoye, 35",
  "glos": "Krótko, zmęczona, liczy czas w godzinach dyżuru. Czarny szpitalny humor, nigdy nie narzeka wprost.",
  "typ": "uczciwa, spieszy się",
  "rzecz": "Granatowa torebka na ramię",
  "wnetrze": [
    {
      "sekret_id": "d11_kartka_iris",
      "co_widac": "W bocznej kieszeni złożona kartka z datą sprzed dwóch tygodni: „Iris, 400 $, żółta kopia u elektryczki z pierwszego piętra”. Obok legitymacja szpitalna z jej zdjęciem.",
      "co_z_tego_wynika": "Grace wpłaciła 400 dolarów Iris Bell, a dowód wpłaty, żółta kopia, leży u Mai Doyle. To ta kopia z torby narzędziowej z dnia 8."
    }
  ],
  "wejscie": "Grace Okoye, pielęgniarka, nocka na onkologii. Zostawiłam torebkę w jedenastce, granatową, z legitymacją. O szóstej muszę wejść na oddział, a bez karty drzwi się nie otworzą. Mam godzinę i dwadzieścia minut.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Jak wygląda torebka?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Granatowa, skórzana, na ramię. Pasek przetarty od smyczy. Karta ma moje zdjęcie z trzeciego roku, jeszcze z lepszą cerą.", "mina": "mowi"},
        {"tekst": "Co jest w środku oprócz legitymacji?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Klucze, tabletki na ból głowy, kartka. Nic wartościowego. Kartka to moje zakupy.", "mina": "klamie"},
        {"tekst": "Czemu bez karty nie wejdziesz na oddział?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Drzwi są na kartę i dyżurnego, który nikogo nie wpuszcza na słowo. Ma rację. Ale dziś ma też ranek bez mojej karty.", "mina": "neutralna"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Gdzie pracujesz?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Szpital miejski, onkologia, trzecie piętro. Nocki od dwudziestej. Dzieci śpią u sąsiadki, więc tym bardziej nie mam czasu.", "mina": "mowi"},
        {"tekst": "Kiedy zostawiłaś torebkę?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Jedenastka, około wpół do pierwszej. Zdjęłam ją z ramienia, bo bolał mnie bark. Wysiadłam na rynku bez niej.", "mina": "mowi"},
        {"tekst": "Kartka w kieszeni to na pewno zakupy?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Zakupy. Mleko, chleb. Zostaw tę kartkę, naprawdę.", "mina": "klamie"},
        {"tekst": "Na kartce jest „Iris, 400 $, żółta kopia u elektryczki”. Co to znaczy?", "ton": "niewygodne", "wymaga": "d11_kartka_iris", "odpowiedz": "To moje czterysta dolarów i dowód, że je wpłaciłam. Kopię schowała elektryczka z naszej kamienicy, bo Iris nie lubi, kiedy lokatorzy mają papiery. Nikt nie ma o tym wiedzieć.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Czy ktoś potwierdzi, że to Twoja torebka?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Dyżurny z oddziału, Hollis. Zadzwoń, odbierze po trzecim sygnale, zawsze się spóźnia.", "mina": "mowi"},
        {"tekst": "Podpisze odbiór?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "G. Okoye, byle szybko. Zegar bije.", "mina": "neutralna"},
        {"tekst": "Żółta kopia została w biurze. To dowód Twoich 400 $?", "ton": "rzeczowe", "wymaga": "d8_lena_i_nora:kopia_osobno", "odpowiedz": "To znaczy, że gdzieś jest. Nora Vance ją zna. Dobrze. Niech leży zamknięta, ja mam szóstą.", "mina": "emocja"},
        {"tekst": "Żółta kopia poszła z torbą do siostry Mai. Wiesz o tym?", "ton": "rzeczowe", "wymaga": "d8_lena_i_nora:wydaj_lenie_cala", "odpowiedz": "Nie wiedziałam. Czyli dowód mam tylko w głowie i na kartce. Dlatego kartkę wezmę, przepraszam.", "mina": "emocja"},
        {"tekst": "Czy Iris Cię o coś prosiła?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "O drobną przysługę. Iris zawsze prosi o drobną przysługę, a potem prognoza pogody podaje się sama.", "mina": "neutralna"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Zdążę. Karta, drzwi, Hollis. Reszta może poczekać do rana.",
      "zysk": "Grace wchodzi na oddział o 6:00 i nikt jej nie karze.",
      "strata": "Kartka z wpłatą 400 $ wychodzi z biura i nie zostaje po niej żaden ślad w rejestrze.",
      "echo": {"za_dni": 1, "forma": "gosc", "tekst": "Nora Vance: „Grace mówiła, że odebrała torebkę i że o kopii powiedziała tutaj. Chcę wiedzieć, czy ją macie. Przyjdę jutro po kolei: rzecz, osoba, skutek.”"}
    },
    {
      "akcja": "kartka_odpis",
      "etykieta": "Poproś o zgodę i przepisz kartkę do rejestru",
      "reakcja": "Przepisz. Jedną linijkę, bez nazwiska. Szybko, proszę, mam szóstą.",
      "zysk": "W rejestrze zostaje ślad wpłaty Okoye: Nora będzie miała czym walczyć.",
      "strata": "Grace traci minuty, których nie ma, i boi się, że Iris się dowie, skąd ślad.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "W rejestrze jest wpis o wpłacie 400 $ na rzecz Okoye. Dziękuję. Jutro przychodzę z pytaniem, co z oryginałami. — N. Vance"}
    }
  ]
}
```

## DZIEŃ 12

**Mini-karta: Iris Bell, Nora Vance, Ada Vale.** Scena trzech przy jednej kasetce. Iris: cicho, „nie lubię naciskać”, groźba jak prognoza pogody. Nora: po kolei („rzecz, osoba, skutek”), bez ozdobników. Ada, 10: mówi wprost, bo „tu mówią do niej ładnie”. Typ: dwie prawdy na jednym papierze. Chce: Iris kasetkę z torby na zakupy, Nora oryginały pokwitowań, Ada żeby dorośli przestali się kłócić o puszkę. Ukrywa: oryginały dowodzą dwóch rzeczy: co wpłacili lokatorzy i co Iris odebrała od miasta (6 800 $). Dylemat gracza: czternaście rodzin albo pięć osób z żetonów.

```json
{
  "id": "d12_iris_nora",
  "dzien": 12,
  "postac": "Iris Bell, Nora Vance, Ada Vale",
  "glos": "Iris: cicho, uprzejmie, „nie lubię naciskać”. Nora: po kolei, rzecz-osoba-skutek. Ada: wprost, jak dziecko, które wie za dużo.",
  "typ": "dwie prawdy na jednym papierze",
  "rzecz": "Torba na zakupy z drugą kasetką na dnie",
  "ludzie": {"iris": "Iris Bell", "nora": "Nora Vance", "ada": "Ada Vale"},
  "wnetrze": [
    {
      "sekret_id": "d12_oryginaly",
      "co_widac": "W kasetce leżą oryginały pokwitowań zaliczek lokatorów i druga lista: wpłaty miasta na rzecz kamienicy, 6 800 $, z podpisem Iris. Pomiędzy nimi bloczek z numerami odbioru.",
      "co_z_tego_wynika": "Oryginały dowodzą dwóch rzeczy: co wpłacili lokatorzy i co Iris odebrała od miasta. Dlatego trzyma je w kanale Skrytki."
    }
  ],
  "wejscie": "Iris Bell, Nora Vance i mała Ada Vale stoją razem przy szybie. Iris prosi o swoją kasetkę z torby na zakupy. Nora twierdzi, że są w niej oryginały pokwitowań lokatorów, i żąda ich dziś. Ada wskazuje palcem puszkę z ławki.",
  "wejscie_jesli": {
    "d8_lena_i_nora:wydaj_lenie_cala": "Iris Bell prosi o swoją kasetkę z torby na zakupy. Nora Vance, bez żółtej kopii, którą oddano siostrze Mai, podaje numer z własnego wykazu i żąda oryginałów. Ada Vale wskazuje puszkę z ławki. Stoją razem przy szybie."
  },
  "tury": [
    {
      "pytania": [
        {"tekst": "Co jest w kasetce z torby na zakupy?", "ton": "uprzejme", "kto": "iris", "wymaga": null, "odpowiedz": "Rachunki. Karty rozliczeń kamienicy, nic ponad to. Nie lubię naciskać, ale to nasze, lokatorów i moje.", "mina": "klamie"},
        {"tekst": "Czego dokładnie żądasz?", "ton": "rzeczowe", "kto": "nora", "wymaga": null, "odpowiedz": "Oryginałów pokwitowań zaliczek: czternaście rodzin, 400 $ od rodziny, termin dwudziesty czwarty. Bez nich Okoye zapłacą drugi raz, a ja nie mam jak tego udowodnić.", "mina": "mowi"},
        {"tekst": "Ada, dlaczego pokazujesz na puszkę?", "ton": "niewygodne", "kto": "ada", "wymaga": null, "odpowiedz": "Bo ona jest z tego samego bloczka, co papier pani Iris. Mama mówi, że nie wolno gadać, ale tu można, bo tu mówią do mnie ładnie.", "mina": "mowi"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Czy lokatorzy wiedzą, gdzie są ich papiery?", "ton": "uprzejme", "kto": "iris", "wymaga": null, "odpowiedz": "Wiedzą, że są bezpieczne. Czasem aż za bardzo, przyznaję. Zbierałam zaliczki, bo ktoś musiał, i to ja musiałam.", "mina": "mowi"},
        {"tekst": "Po czym poznasz oryginał?", "ton": "rzeczowe", "kto": "nora", "wymaga": null, "odpowiedz": "Numer pokwitowania z mojego wykazu, podpis I., zielony stempel kamienicy. Jeśli się zgadza, wiem.", "mina": "mowi"},
        {"tekst": "Żółta kopia przepadła. Jak to udowodnisz?", "ton": "rzeczowe", "kto": "nora", "wymaga": "d8_lena_i_nora:wydaj_lenie_cala", "odpowiedz": "Numerem. Mam go z wykazu: czterysta jedenaście. Papier mogłam zgubić, liczby nie. Ale numer bez oryginału to nadal tylko moje słowo.", "mina": "mowi"},
        {"tekst": "Żółta kopia leży w biurze. Czy to wystarczy?", "ton": "rzeczowe", "kto": "nora", "wymaga": "d8_lena_i_nora:kopia_osobno", "odpowiedz": "Potwierdza jedną wpłatę, Okoye. Ale tylko jeśli da się ją powiązać z oryginałem. Dlatego oryginały.", "mina": "mowi"},
        {"tekst": "Co jeszcze jest w tej kasetce?", "ton": "niewygodne", "kto": "iris", "wymaga": null, "odpowiedz": "Nic. Mówiłam. Rachunki.", "mina": "klamie"},
        {"tekst": "W kasetce są dwa komplety: wpłaty lokatorów i 6 800 $ od miasta. Czyje to pieniądze?", "ton": "niewygodne", "kto": "iris", "wymaga": "d12_oryginaly", "odpowiedz": "Miasta, lokatorów i moje, w kolejności, w jakiej je rozdzieliłam. Nora policzyła tylko jedną stronę. Nie lubię naciskać, ale to jest prawie uczciwe rozliczenie.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Dlaczego nie oddasz oryginałów Norze?", "ton": "uprzejme", "kto": "iris", "wymaga": null, "odpowiedz": "Bo jeśli Nora je pokaże, wyjdzie też to, co leży obok: pięć żetonów, pięć osób, które kupiły już bilet. Czternaście rodzin czy pięć ludzi? To nie jest pytanie retoryczne.", "mina": "mowi"},
        {"tekst": "Co się stanie dwudziestego czwartego?", "ton": "rzeczowe", "kto": "nora", "wymaga": null, "odpowiedz": "Termin mija. Bez oryginałów lokatorzy wpłacają zaliczki drugi raz albo wylatują. Mam czternaście rodzin i dwanaście dni.", "mina": "mowi"},
        {"tekst": "Czy w kasetce są też dokumenty dla ludzi z żetonów?", "ton": "niewygodne", "kto": "iris", "wymaga": null, "odpowiedz": "Kasetka jest jedna, a papierów w niej dużo. Pytanie jest nieostrożne, więc nie odpowiem.", "mina": "neutralna"},
        {"tekst": "Żetony poszły do Victora. Co z ludźmi, którzy je mają?", "ton": "niewygodne", "kto": "iris", "wymaga": "d9_iris:zetony_victor", "odpowiedz": "Są na liście inspekcji: dla niego drobiazg, dla nich wyrok. Nie lubię naciskać, ale tu nie mam wyboru.", "mina": "emocja"},
        {"tekst": "Piórnik wrócił do Ciebie. Gdzie teraz są żetony?", "ton": "niewygodne", "kto": "iris", "wymaga": "d9_iris:zetony_iris", "odpowiedz": "Bezpieczne. Cztery czekają na odbiór, a piąty ma swojego człowieka. Wszystko w porządku.", "mina": "klamie"},
        {"tekst": "Piórnik leży w depozycie. Co z ludźmi z żetonów?", "ton": "niewygodne", "kto": "iris", "wymaga": "d9_iris:depozyt", "odpowiedz": "Czekają. Do soboty żaden z czterech nie dostanie dokumentu, a jedna rodzina jedzie jutro o 5:40. Nie mówię tego jak groźbę. To rozkład jazdy.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "zabezpiecz",
      "etykieta": "Zabezpiecz oryginały za pokwitowaniem",
      "kto": "nora",
      "reakcja": "Pokwitowanie, numer, podpis. Tak to powinno wyglądać. Iris patrzy na ciebie, ale ja wolę patrzeć na papier.",
      "zysk": "Oryginały leżą w biurze za pokwitowaniem: Nora ma szansę przed dwudziestym czwartym.",
      "strata": "Iris Cię zapamięta, a żetony leżą obok oryginałów i przestają być bezpieczne.",
      "echo": {"za_dni": 2, "forma": "gosc", "tekst": "Iris Bell: „Nie lubię naciskać. Ale dziś rano dwóch lokatorów odmówiło mi zaliczek. Zastanawiam się dlaczego.”"}
    },
    {
      "akcja": "wydaj_iris",
      "etykieta": "Wydaj kasetkę Iris",
      "kto": "iris",
      "reakcja": "Dziękuję. Zawsze miło, kiedy ktoś rozumie. Drobna przysługa, nic więcej.",
      "zysk": "Skrytka jest bezpieczna, a pięć żetonów zostaje poza księgą.",
      "strata": "Oryginały odpływają, a rodzina Okoye zapłaci 400 $ drugi raz.",
      "echo": {"za_dni": 3, "forma": "list", "tekst": "Wiem, że kasetkę wydano. Okoye wpłacą drugi raz przed dwudziestym czwartym. Zapisałam, kto stał przy szybie. — N. Vance"}
    },
    {
      "akcja": "sprawdz_z_nora",
      "etykieta": "Sprawdź kasetkę wspólnie z Norą i Iris",
      "kto": "nora",
      "reakcja": "Po kolei: numer, podpis, stempel. Zgadza się. Iris, widzisz, co widzę.",
      "zysk": "Żadna strona nie zarzuci Ci jednostronności, a oryginały są policzone.",
      "strata": "Godzina straty, kolejka rośnie, a Iris widzi dokładnie, co widzi Nora.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Dziękuję za wspólne sprawdzenie. Mam listę numerów, każdy podpisany przez obie strony. Nie wiem jeszcze, co z nią zrobię. — N. Vance"}
    },
    {
      "akcja": "wyloz_400",
      "etykieta": "Wyłóż 400 $ z własnych za Okoye",
      "kasa": -400,
      "kto": "nora",
      "reakcja": "Nie prosiłam o to. Przyjmę dla Grace. Nie myśl, że to rozwiązuje resztę.",
      "zysk": "Rodzina Okoye ma czterysta dolarów na drugą wpłatę i nic nie traci.",
      "strata": "Tracisz prawie trzy czynsze, a Iris zostaje bezkarna i dalej ma oryginały.",
      "echo": {"za_dni": 3, "forma": "gosc", "tekst": "Grace Okoye: „Nora powiedziała, że ktoś za mnie zapłacił. Nie wiem kto. Dziękuję. I oddam, jak tylko skończę nocki.”"}
    }
  ]
}
```

**Mini-karta: Linh Tran, 33, matka z synem.** Głos: cichy, jednozdaniowe odpowiedzi, „proszę nie pytać”. Typ: klientka Skrytki (żeton 0623), uczciwa, przerażona. Chce: pozytywkę z kołyską, żeby Milo (6 lat, śpi na ławce) zasnął w pociągu. Ukrywa: pod dnem pozytywki bilet i kartonik z numerem 0623; pociąg jutro o 5:40; mąż szukał ich trzy lata. Kłamie: „W środku nic nie ma.” Obraz: dziecko śpiące na ławce pod zegarem.

```json
{
  "id": "d12_linh",
  "dzien": 12,
  "postac": "Linh Tran, 33",
  "glos": "Cicho, krótkie zdania. Zaczyna od „proszę”. Odpowiada na to, o co pytają, nigdy na więcej.",
  "typ": "klientka Skrytki, uczciwa i przerażona",
  "rzecz": "Drewniana pozytywka z gwiazdką na wieczku",
  "wnetrze": [
    {
      "sekret_id": "d12_pozytywka_0623",
      "co_widac": "Pod ruchomym dnem pozytywki leży bilet na pociąg i kartonik z numerem 0623. Na odwrocie drobny dopisek: „matka z synem”.",
      "co_z_tego_wynika": "To numer odbioru ze Skrytki Iris, taki sam jak na żetonie z piórnika. Linh jedzie jutro o 5:40, a ktoś jej szuka."
    }
  ],
  "wejscie": "Linh Tran. Mój syn Milo, sześć lat, śpi na ławce. Zgubiłam pozytywkę z kołysanką, jedenastka, drewniana, z gwiazdką na wieczku. Jutro rano mamy pociąg, a bez niej Milo nie zaśnie w drodze. Proszę, bez pytań o to, co w środku.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Jak wygląda pozytywka?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Drewniana, mała, z gwiazdką na wieczku. Gra kołysankę, ale jedną nutę zacina. Milo mówi, że gwiazdka kaszle.", "mina": "mowi"},
        {"tekst": "Gdzie ją zgubiłaś?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "W jedenastce, na siedzeniu, kiedy zdejmowałam Milo z kolan. Zasnął, a ja zapomniałam o reszcie świata.", "mina": "neutralna"},
        {"tekst": "Dokąd jedziecie?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Na dworzec, rano. Dalej nie powiem, nie dlatego, że nie ufam. Dlatego, że nie wolno.", "mina": "neutralna"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Ile lat ma Milo?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Sześć. W maju skończył. Nie chodził jeszcze do szkoły, bo szkoły są tam, gdzie zostawiamy adres.", "mina": "emocja"},
        {"tekst": "Co jest w pozytywce?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Nic. Mechanizm i kurz. Proszę nie zdejmować dna.", "mina": "klamie"},
        {"tekst": "Czy ktoś Was szuka?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Nie wiem. Dlatego pociąg jest o 5:40, a nie o dziewiątej.", "mina": "emocja"},
        {"tekst": "Pod dnem leży bilet i kartonik z numerem 0623. Co to jest?", "ton": "niewygodne", "wymaga": "d12_pozytywka_0623", "odpowiedz": "Proszę, nie pytaj. To jest to, co zostało z trzech lat. Jeśli ktoś o tym usłyszy, Milo i ja nie dojedziemy.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Czego potrzebujesz najbardziej?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Żeby Milo zasnął w pociągu. I żeby nikt tu nie zapisał mojego nazwiska obok jego imienia.", "mina": "mowi"},
        {"tekst": "Podpisze odbiór?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Linh. Samo Linh, bez nazwiska. Jeśli musi być nazwisko, napisz mi, które mam podać.", "mina": "neutralna"},
        {"tekst": "Żeton 0623 leży w depozycie. Wiesz o tym?", "ton": "rzeczowe", "wymaga": "d9_iris:depozyt", "odpowiedz": "Wiem, Iris mi powiedziała. Pociąg jest jutro, a depozyt do soboty. Czyli wyjadę bez papieru albo nie wyjadę wcale.", "mina": "emocja"},
        {"tekst": "Numer 0623 jest na liście Victora. Wiesz o tym?", "ton": "rzeczowe", "wymaga": "d9_iris:zetony_victor", "odpowiedz": "Wiem. Iris mi powiedziała. Wsiądę, ale będę się rozglądać do ostatniego przystanku.", "mina": "emocja"},
        {"tekst": "Kto Wam pomaga w tym wyjeździe?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Ktoś, kto bierze za to pieniądze i nie lubi, kiedy się o tym mówi. Więcej nie powiem.", "mina": "neutralna"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Milo, patrz, gwiazdka wróciła. Nie pytam, co widać. Dziękuję, że nie pytasz.",
      "zysk": "Linh i Milo mają pozytywkę i bilet: rano wsiądą do pociągu o 5:40.",
      "strata": "Wydajesz rzecz z numerem Skrytki, więc jesteś w układzie Iris, a w księdze nie ma po tym śladu.",
      "echo": {"za_dni": 4, "forma": "list", "tekst": "Pocztówka z dworca, bez nadawcy: narysowana gwiazdka. Pod spodem: „Milo zasnął w połowie drogi. Dziękuję.”"}
    },
    {
      "akcja": "zatrzymaj",
      "reakcja": "Rozumiem. Proszę tylko, żeby Milo tego nie słyszał. On się pamięta.",
      "zysk": "Kartonik z 0623 zostaje w biurze: masz w ręku dowód Skrytki.",
      "strata": "Linh i Milo mogą nie zdążyć na pociąg, a dziecko zostaje na ławce bez kołysanki.",
      "echo": {"za_dni": 3, "forma": "gosc", "tekst": "Iris Bell: „Pewna matka z synem nie wsiadła rano do pociągu. Nie lubię naciskać, ale ktoś tu się pomylił, i będzie to droga pomyłka.”"}
    }
  ]
}
```

## DZIEŃ 13

**Mini-karta: Elias Wren, 73, emeryt.** Głos: powolny, staroświecki, uprzejmy; składa numerek w coraz ciaśniejszy prostokąt; „Dziękuję. Jutro.” Typ: uczciwy-wstydliwy. Chce: oprawkę okularów żony i dowiedzieć się, dlaczego Sam za nią zapłacił. Ukrywa: przyjął zwrot, choć wiedział, że Sam wykłada go z własnej kieszeni; przez cztery tygodnie odkładał 85 $, żeby oddać. Obraz: koperta z 85 $ w kieszeni płaszcza.

```json
{
  "id": "d13_elias",
  "dzien": 13,
  "postac": "Elias Wren, 73",
  "glos": "Powoli, staroświecko, z uprzejmością, która ma coś zasłonić. Składa numerek w prostokąt. Kończy: „Dziękuję.”",
  "typ": "uczciwy-wstydliwy",
  "rzecz": "Futerał z oprawką okularów (bez szkieł)",
  "wnetrze": [
    {
      "sekret_id": "d13_kwit_zwrotu",
      "co_widac": "Za wyściółką futerału złożony kwit zwrotu pieniędzy: 85 $, podpis S. Holt. Numer paczki zgadza się z wykazem Skrytki.",
      "co_z_tego_wynika": "Oprawka przejechała przez kanał Iris. Sam zwrócił Eliasowi pieniądze za oprawkę z własnej kieszeni."
    }
  ],
  "wejscie": "Elias Wren, numerek jeden. Oprawka okularów mojej żony wróciła tramwajem szóstym, tak mówi konduktor. Chcę ją odebrać. I chcę wiedzieć, dlaczego pan Holt zapłacił za nią z własnej kieszeni, bo ja nie prosiłem.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Jak wygląda oprawka?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Złota, cienka, jedno ucho wygięte. Żona prostowała je kciukiem, a ono i tak wracało. Czterdzieści jeden lat.", "mina": "mowi"},
        {"tekst": "Gdzie i kiedy zniknęła?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "W czwórce, tuż przed Bożym Narodzeniem, kiedy wracaliśmy od jej siostry. Potem zachorowała i okularów już nie założyła.", "mina": "mowi"},
        {"tekst": "Czemu Sam za nią zapłacił?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Bo obiecał szukać. Nie znalazł, więc zapłacił, jakby to była jego wina. Dowiedziałem się, kiedy było już po wszystkim.", "mina": "mowi"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Z czego żyjesz?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Z emerytury, czterysta dziesięć dolarów miesięcznie. Nie narzekam, tylko liczę.", "mina": "mowi"},
        {"tekst": "Kiedy Sam odszedł?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Pięć tygodni temu. Mówił: jeszcze nie, panie Eliasie. A potem przestał przychodzić.", "mina": "emocja"},
        {"tekst": "Co wiesz o paczkach, które jeżdżą szóstką?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Że konduktor ich nie lubi. Więcej nie wiem i nie chcę wiedzieć.", "mina": "neutralna"},
        {"tekst": "Kwit zwrotu ma numer paczki ze Skrytki. Co to znaczy?", "ton": "niewygodne", "wymaga": "d13_kwit_zwrotu", "odpowiedz": "Nie znam żadnej Skrytki. Wiem, że Sam powiedział: nie pytaj, skąd pieniądze. Wziąłem. Wstyd bywa jedyną zapłatą, jaka zostaje.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Co chcesz zrobić z kwitem?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Chcę, żeby ktoś zapisał, że Sam zapłacił, a ja przyjąłem. Żeby to nie był dług bez nazwy. To dla niego, nie dla mnie.", "mina": "mowi"},
        {"tekst": "Co zrobisz z pieniędzmi w kopercie?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Oddam. Cztery tygodnie odkładałem po dwadzieścia jeden dolarów, żeby miał z czego jeść. Nie zadzwonię ani nie napiszę. Oddam do ręki.", "mina": "mowi"},
        {"tekst": "Jak Sam zareaguje?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Odmówi. A ja nie odpuszczę. Tyle że on jest młodszy, a ja mam czas tylko do końca miesiąca.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "odpis_za_zgoda",
      "etykieta": "Poproś Eliasa o zgodę i zrób odpis kwitu",
      "reakcja": "Zgoda. Powiem to głośno: pan Holt zapłacił, ja przyjąłem. Proszę napisać dokładnie. Dziękuję.",
      "zysk": "Masz odpis kwitu i zeznanie Eliasa: dowód, że Sam zapłacił i że paczka jechała kanałem Iris.",
      "strata": "Elias staje się świadkiem w sprawie, której nie wybierał, i będzie o niej pamiętał.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "Elias Wren: „Czy ktoś już pokwitował moje zeznanie? Proszę o numer. Jeśli nie, to jutro. — E.W.”"}
    },
    {
      "akcja": "wydaj_od_reki",
      "etykieta": "Wydaj oprawkę z całą zawartością od ręki",
      "reakcja": "Dziękuję. Okulary żony. Jutro... nie, już nie jutro. Dziękuję.",
      "zysk": "Elias odbiera oprawkę bez pytań i wraca do domu spokojny.",
      "strata": "Kwit odchodzi z oprawką: nie masz dowodu na Sama ani na kanał Iris.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "Elias przeszedł dziś obok okienka, skłonił głowę i poszedł dalej. Po raz pierwszy od trzynastu dni nie zapytał o oprawkę."}
    }
  ]
}
```

**Mini-karta: Odile Faber, 68, babcia.** Głos: głośna, żartuje z własnych zębów, plotkuje szeptem na cały korytarz. Typ: uczciwa-zawstydzona. Chce: protezę w pudełku po herbatnikach, bo o 10:00 ślub wnuczki. Ukrywa: jeździ na gapę, konduktor Leo patrzy w bok („zdarza się”). Kłamie: „Jechałam z biletem.” Obraz: pudełko po herbatnikach pod pachą.

```json
{
  "id": "d13_odile",
  "dzien": 13,
  "postac": "Odile Faber, 68",
  "glos": "Głośna, wesoła, żartuje z własnych zębów. Mówi do wszystkich „dziecko”, nawet do urzędników.",
  "typ": "uczciwa-zawstydzona",
  "rzecz": "Niebieskie pudełko po herbatnikach",
  "wnetrze": [
    {
      "sekret_id": "d13_mandat",
      "co_widac": "W pudełku, na serwetce, leży proteza z wygrawerowanymi od spodu inicjałami O.F. Pod nią złożony mandat za jazdę bez biletu, bez pieczątki, z dopiskiem Leo: „zdarza się”.",
      "co_z_tego_wynika": "Odile jeździ bez biletu, a konduktor to przepuszcza. To nic dla sprawy, tylko ludzka rzecz."
    }
  ],
  "wejscie": "Odile Faber, sześćdziesiąt osiem lat i trzydzieści dwa zęby, z czego dwadzieścia osiem moich. Zgubiłam protezę w pudełku po herbatnikach, szóstka, dziś rano. O dziesiątej ślub wnuczki, a zdjęcie rodzinne bez zębów to dla mnie kara.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Jak wygląda pudełko?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Okrągłe, niebieskie, po duńskich herbatnikach. Wieczko zagięte, bo siadam na nim na przystanku. W środku serwetka w kwiatki.", "mina": "mowi"},
        {"tekst": "Czemu proteza jest w pudełku po herbatnikach?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Bo w kieszeni by się pogniotła, a w szklance nie wypada. Pudełko jest szczelne i ładnie pachnie.", "mina": "mowi"},
        {"tekst": "Czy jechałaś z biletem?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Jak zawsze. Skasowany, w kieszeni, kochanie.", "mina": "klamie"},
        {"tekst": "W pudełku jest mandat z dopiskiem Leo „zdarza się”. Co to znaczy?", "ton": "niewygodne", "wymaga": "d13_mandat", "odpowiedz": "Dziecko, emerytura to czterysta dolarów i zęby. Bilet kosztuje tyle, co obiad. A Leo to człowiek. Nie piszcie na niego.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Gdzie masz ślub?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Kościół świętej Łucji, dziesiąta rano. Wnuczka Frida, narzeczony z wąsami jak szczotka. Przysięgam, że ona go kocha.", "mina": "mowi"},
        {"tekst": "Po czym poznasz protezę?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Od spodu mam wygrawerowane O.F. Dentysta powiedział: żeby ktoś nie zabrał. Nikt nie zabierze, ale grawer został.", "mina": "mowi"},
        {"tekst": "Czy rodzina wie, że ją zgubiłaś?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Nikt. Córce powiedziałam, że mam przeziębienie i jem zupę. Zęby to rzecz prywatna, dziecko.", "mina": "mowi"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Czego się boisz najbardziej?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Że zrobią mi zdjęcie z ustami jak w liście gończym. Wnuczka by nie powiedziała, ale ja bym pamiętała do końca życia.", "mina": "emocja"},
        {"tekst": "Podpisze odbiór?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Odile Faber. Podpiszę, zaśpiewam, co zechcesz, byle szybko.", "mina": "neutralna"},
        {"tekst": "Co zrobisz, jeśli proteza się nie znajdzie?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Zjem ślub zupą i będę się uśmiechać ustami. Frida się nie obrazi, ale ja tak.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję, dziecko. Zdążę i wejdę do kościoła jak królowa. Leo dostanie ode mnie ciasto.",
      "zysk": "Odile zdąży na ślub, a Frida będzie miała babcię na zdjęciu z uśmiechem.",
      "strata": "Mandat Leo idzie dalej bez śladu, więc „zdarza się” zostaje regułą.",
      "echo": {"za_dni": 2, "forma": "gosc", "tekst": "Odile Faber: „Zdjęcie wyszło cudownie. Wnuczka mówi, że wyglądam jak aktorka. Przesyłam kawałek tortu, dziecko.”"}
    },
    {
      "akcja": "odmow",
      "reakcja": "Odmawiasz mi zębów? Dziecko, w takim razie zjem ślub zupą.",
      "zysk": "Nikt nie może Ci zarzucić wydania bez sprawdzenia.",
      "strata": "Odile idzie na ślub bez zębów i zapamięta to jako karę.",
      "echo": {"za_dni": 2, "forma": "gosc", "tekst": "Odile Faber: „Frida mówi, że babcia wyglądała dzielnie. Dzielnie! Ząb za ząb, kochanieńki.”"}
    }
  ]
}
```

## DZIEŃ 14

**Mini-karta: Noah Reyes, 42, policjant.** Głos: spokojny, powtarza własnymi słowami („Czyli: …”), prosi o potwierdzenie jednego szczegółu; gdy pomija, mówi „To moje zmartwienie”. Typ: uczciwy (pomija, nie kłamie). Chce: organizer z projektem oświadczenia i terminem na 22; potwierdzenie, że wiadomość od Mai jest od niej. Ukrywa: relacja Evana nie zgadza się z godzinami. Obraz: notes równo z krawędzią lady.

```json
{
  "id": "d14_noah",
  "dzien": 14,
  "postac": "Noah Reyes, 42",
  "glos": "Spokojny, powtarza cudze słowa po swojemu: „Czyli: …”. Gdy coś pomija, mówi: „To moje zmartwienie.”",
  "typ": "uczciwy, pomija zamiast kłamać",
  "rzecz": "Czarny organizer z gumką w poprzek",
  "wnetrze": [
    {
      "sekret_id": "d14_projekt_oswiadczenia",
      "co_widac": "W kieszeni organizera leży kartka z propozycją oświadczenia i pustym miejscem na podpis: „do weryfikacji z M.D.”. Obok notatka: „relacja E.D. nie zgadza się z godzinami, sprawdzić 22:15”.",
      "co_z_tego_wynika": "Noah wie, że relacja Evana ma luki, i chce podpisu Mai, żeby zamknąć sprawę bez Evana."
    }
  ],
  "wejscie": "Noah Reyes, komisariat. Zgubiłem organizer, czarny, z gumką, jedenastka. Mam w nim projekt oświadczenia w sprawie Mai Doyle i termin do dwudziestego drugiego. Czyli: bez organizera tracę dwa dni, a tyle mi nie zostało.",
  "wejscie_jesli": {
    "d11_maya:przez_okienko": "Noah Reyes, komisariat. Dostałem jedno zdanie od kogoś, kto zna sprawę Mai Doyle: żyje, nie wróci, nie szukać. Nie pytam skąd. Zgubiłem organizer z projektem oświadczenia. Czyli: bez niego nie zamknę sprawy do dwudziestego drugiego.",
    "d11_maya:powiadom_rodzine": "Noah Reyes, komisariat. Rodzina Mai Doyle dowiedziała się, że żyje, ale nic poza tym. Siostra dzwoniła trzy razy. Zgubiłem organizer z projektem oświadczenia. Czyli: bez niego sprawa rusza wyżej, a tego nikt nie chce."
  },
  "tury": [
    {
      "pytania": [
        {"tekst": "Jak wygląda organizer?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Czarny, gumka w poprzek, ołówek w uchwycie. Notes równo z krawędzią. Zawsze równo, cokolwiek się dzieje.", "mina": "mowi"},
        {"tekst": "Gdzie i kiedy zniknął?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Jedenastka, około dwudziestej trzeciej, po dyżurze. Zostawiłem go na siedzeniu, kiedy podnosiłem kobietę, która upadła. Czyli: zrobiłem coś dobrego i straciłem organizer.", "mina": "mowi"},
        {"tekst": "Co jest w nim ważnego?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Notatki ze służby. Nic, co wolno pokazać. Proszę nie otwierać.", "mina": "neutralna"},
        {"tekst": "W organizerze jest notatka o godzinach relacji Evana. Co z nią?", "ton": "niewygodne", "wymaga": "d14_projekt_oswiadczenia", "odpowiedz": "To moje zmartwienie. Powiem tyle: godziny nie pasują i wiem to od tygodnia. Czyli: nie pytaj dalej, bo nie mogę odpowiedzieć.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Co powinno być w oświadczeniu?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Trzy zdania: że żyje, że wyjechała z własnej woli, że nie chce być szukana. Jej podpis, moja pieczątka. Czyli: koniec sprawy.", "mina": "mowi"},
        {"tekst": "Do kiedy masz czas?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Do dwudziestego drugiego, północ. Potem zgłoszenie idzie do wydziału i zaczyna się szukanie z urzędu. Wtedy nikt już nie pyta o jej zgodę.", "mina": "mowi"},
        {"tekst": "Ufasz Evanowi?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "To moje zmartwienie. Czyli: nie odpowiem, i proszę tego nie traktować jako odpowiedzi.", "mina": "neutralna"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Co możesz obiecać Mai?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Że napiszę tylko to, na co się zgodzi. Czyli: bez adresu, bez miasta, bez nazwisk. Tyle mogę i tyle obiecuję.", "mina": "mowi"},
        {"tekst": "Jak to wygląda, jeśli ona nie przyjdzie?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Zgłoszenie przechodzi do wydziału i już nie decyduję. Czyli: im mniej mam na papierze, tym mniej mogę osłonić.", "mina": "mowi"},
        {"tekst": "Dostałeś jedno zdanie od Mai. Co z nim zrobisz?", "ton": "rzeczowe", "wymaga": "d11_maya:przez_okienko", "odpowiedz": "Zapisałem słowo w słowo. Czyli: wiem, że żyje i że nie wróci. Brakuje mi tylko jej podpisu, żeby to było na papierze.", "mina": "mowi"},
        {"tekst": "Czy Evan jest podejrzany?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Nie powiem. Powiem tylko, że w jego relacji jest godzina 22:15 i jedna ulotka. Czyli: rozbieżność, nic więcej.", "mina": "neutralna"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "rezerwacja_d22",
      "etykieta": "Zarezerwuj poufną rozmowę Mai z Noahem na 22",
      "reakcja": "Zapisuję: poufna rozmowa dwudziestego drugiego, tutaj, przy okienku. Czyli: liczę na Ciebie.",
      "zysk": "Noah wstrzymuje przekazanie sprawy wyżej do wieczora 22, a Maya ma gdzie złożyć oświadczenie.",
      "strata": "Obiecujesz coś w imieniu Mai bez jej wiedzy; jeśli nie przyjdzie, Noah uzna to za grę na zwłokę.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Zarezerwowano rozmowę na dwudziestego drugiego. Czekam. Jeśli ona nie przyjdzie, wiem, że to moje zmartwienie, nie Wasze. — N. Reyes"}
    },
    {
      "akcja": "bez",
      "etykieta": "Zostaw tryb zwykły, bez rezerwacji",
      "reakcja": "Czyli: bez zobowiązań. Dobrze. Zostaje to, co mam, i to, co zdążę.",
      "zysk": "Nie składasz obietnic w imieniu Mai ani nie pogarszasz jej sytuacji.",
      "strata": "Noah ma tylko to, co ma, i dwudziesty drugi może minąć bez rozmowy z Mayą.",
      "echo": {"za_dni": 3, "forma": "list", "tekst": "Do 22 nic nie wpłynęło na piśmie, więc zgłoszenie przechodzi do wydziału. Nie moja decyzja. — N. Reyes"}
    }
  ]
}
```

**Mini-karta: Billie Cross, 16, nastolatka na hulajnodze.** Głos: szybka, slang, „no weź”, żartuje, kiedy się boi. Typ: Zgadywacz-bluffer z dobrego serca. Chce: kask z naklejkami w pandy, bo bez niego nie wpuszczą jej na trening. Ukrywa: ma szesnaście lat, wagaruje. Kłamie: „Mam osiemnaście.” Obraz: hulajnoga oparta o ladę. Kontrast po ciężkim dniu.

```json
{
  "id": "d14_billie",
  "dzien": 14,
  "postac": "Billie Cross, 16",
  "glos": "Szybko, z żartem, „no weź”, „serio?”. Przy strachu robi się jeszcze zabawniejsza.",
  "typ": "bluffer z dobrego serca",
  "rzecz": "Zielony kask z naklejkami w pandy",
  "wnetrze": [
    {
      "sekret_id": "d14_legitymacja",
      "co_widac": "Pod wyściółką kasku wsunięta legitymacja szkolna: Billie Cross, liceum, klasa pierwsza, rocznik sprzed szesnastu lat.",
      "co_z_tego_wynika": "Billie ma szesnaście lat, nie osiemnaście. Wagaruje, a kask jest jej biletem na trening."
    }
  ],
  "wejscie": "Billie Cross, osiemnaście lat, dorosła. Kask z naklejkami, jedenastka, pętla przy parku. Hulajnogę mam, kasku nie, a bez kasku nie wpuszczą mnie na zajęcia. Bardzo ważne zajęcia.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Jak wygląda kask?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Zielony, pęknięty z tyłu, naklejki z pandami. Jedna panda ma wąsy, bo dorysowałam. Poznasz od razu.", "mina": "mowi"},
        {"tekst": "Gdzie i kiedy go zgubiłaś?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Jedenastka, rano, koło ósmej. Położyłam na siedzeniu, bo kask gniecie fryzurę. Fryzura jest ważna.", "mina": "mowi"},
        {"tekst": "Ile masz lat?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Osiemnaście. Serio. Tak mi napisali w dowodzie.", "mina": "klamie"},
        {"tekst": "Legitymacja w kasku mówi, że masz szesnaście lat.", "ton": "niewygodne", "wymaga": "d14_legitymacja", "odpowiedz": "No weź. Szesnaście i trzy czwarte. To prawie osiemnaście, jak się dobrze zaokrągli. Nie mów mamie.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Co to za zajęcia?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Trening hulajnogi, freestyle. W szkole mówią, że to nie sport, więc robię to po lekcjach, czyli przed lekcjami. Wiesz.", "mina": "mowi"},
        {"tekst": "Czemu nie jesteś w szkole?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Bo biologia. Biologia o ósmej to nie edukacja, to kara.", "mina": "mowi"},
        {"tekst": "Czy ktoś wie, że tu jesteś?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Kuzynka. Tylko ona. Reszta myśli, że jestem u dentysty. Dentysta to świetne alibi.", "mina": "mowi"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Dokąd teraz?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Na trening. A potem do szkoły, prawie na pewno, jeśli wszystko pójdzie dobrze.", "mina": "neutralna"},
        {"tekst": "Podpisze odbiór?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Billie. Samo imię wystarczy, serio.", "mina": "neutralna"},
        {"tekst": "Czemu nie powiesz prawdy o wieku?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Bo jak powiem, to dzwonią do mamy, a mama dzwoni do pani dyrektor. A pani dyrektor ma na mnie specjalną teczkę.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki! Panda z wąsami wraca do domu. Nie dzwońcie nigdzie, okej?",
      "zysk": "Billie ma kask i zdąży na trening.",
      "strata": "Wydajesz osobie, która skłamała o wieku, i nic z tym nie robisz.",
      "echo": {"za_dni": 3, "forma": "gosc", "tekst": "Billie Cross: „Zajęcia były super. Wszyscy zazdrościli pandy z wąsami. Przyniosę wam naklejkę.”"}
    },
    {
      "akcja": "wydaj_z_poucz",
      "etykieta": "Wydaj i powiedz, że wiesz, ile ma lat",
      "reakcja": "No dobra, szesnaście. Ale nie dzwońcie, proszę. Nic się nie stało.",
      "zysk": "Billie wie, że ktoś zna prawdę i nie robi z tego dramatu.",
      "strata": "Billie może przestać przychodzić po swoje rzeczy, bo przy szybie nie da się blefować.",
      "echo": {"za_dni": 3, "forma": "gosc", "tekst": "Billie Cross: „Dzięki, że nikt nie dzwonił. Poszłam na biologię. Raz. Przyniosę naklejkę.”"}
    }
  ]
}
```

## DZIEŃ 15

**Mini-karta: Sam Holt, 44, poprzednik, pracownik portu.** Głos: krótkie, techniczne zdania, najpierw szczegół, dopiero po dopytaniu prawda; humor suchy, ciepło ukryte w szczegółach. Typ: uczciwy-wstydliwy (nie kłamie, zasłania się technikaliami). Chce: termos i rzeczy z szafki oraz referencje do portu na 25; zdecydować sam, co powie. Ukrywa: wyrwał stronę 41, żeby nikt nie miał tych nazwisk; Victor podpisał zatwierdzenie bez strony. Obraz: klucz i szuflada z dwoma zamkami. Scena dwojga: Sam i Vera (drugi klucz).

```json
{
  "id": "d15_sam",
  "dzien": 15,
  "postac": "Sam Holt, 44",
  "glos": "Krótko, technicznie. Najpierw szczegół („klamra była lewostronna”), prawdę dopiero po dopytaniu. Suchy humor, ciepło w szczegółach.",
  "typ": "uczciwy-wstydliwy, zasłania się technikaliami",
  "rzecz": "Szary termos z pokrywką lewozwojną",
  "ludzie": {"sam": "Sam Holt", "vera": "Vera Kovacs"},
  "wnetrze": [
    {
      "sekret_id": "d15_termos_kwit",
      "co_widac": "Pod wkładką termosu leży zegarek na pasku i kwit zastawu: 85 $, data dzień po dacie na kwicie zwrotu dla Eliasa.",
      "co_z_tego_wynika": "Sam zastawił zegarek, żeby zapłacić Eliasowi za oprawkę. Potwierdza to kwit z dnia 13."
    }
  ],
  "wejscie": "Sam Holt. Vera mnie wezwała, więc jestem. Po termos i rzeczy z szafki, bez wielkich słów. Termos szary, wgniecenie przy dnie, pokrywka lewozwojna. Zanim wejdzie Victor, chcę wiedzieć jedno: kto zaglądał do szuflady, w której trzymałem papiery?",
  "wejscie_jesli": {
    "d10_vera:pokwituj_osobista": "Sam Holt. Vera pisała, że moje rzeczy pokwitowano jako osobiste, a nie do archiwum. To dla mnie coś znaczy. Po termos i rzeczy z szafki, szary, pokrywka lewozwojna. Zanim wejdzie Victor: kto zaglądał do szuflady z moimi papierami?",
    "d10_vera:archiwum": "Sam Holt. Moje rzeczy trafiły do zbiorczego archiwum Urzędu, więc ktoś obcy czyta teraz moje akta. Po termos i szafkę, szary, pokrywka lewozwojna. Zanim wejdzie Victor, zapytam wprost: kto zaglądał do szuflady?"
  },
  "tury": [
    {
      "pytania": [
        {"tekst": "Jak wygląda termos?", "ton": "uprzejme", "kto": "sam", "wymaga": null, "odpowiedz": "Szary, wgniecenie przy dnie, pokrywka lewozwojna: odkręca się w prawo, bo fabryka się pomyliła. Mam go od trzynastu lat.", "mina": "mowi"},
        {"tekst": "Co jest w środku?", "ton": "rzeczowe", "kto": "sam", "wymaga": null, "odpowiedz": "Zimna herbata od wczoraj. Nic więcej.", "mina": "klamie"},
        {"tekst": "Czemu jeszcze jesteś w mieście?", "ton": "niewygodne", "kto": "sam", "wymaga": null, "odpowiedz": "Bo w porcie czekają na referencje z Urzędu, do dwudziestego piątego. Bez papieru etat idzie do kogoś innego.", "mina": "mowi"},
        {"tekst": "W termosie jest zegarek i kwit zastawu. Po co?", "ton": "rzeczowe", "kto": "sam", "wymaga": "d15_termos_kwit", "odpowiedz": "Po to, żeby oddać Eliasowi osiemdziesiąt pięć dolarów. Zastawiłem zegarek. Nie pytaj, czy żałuję. Żałuję, że nie dość.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Jak minęło Ci pięć tygodni?", "ton": "uprzejme", "kto": "sam", "wymaga": null, "odpowiedz": "Dźwigam skrzynie w porcie. Plecy bolą, ale nie ma żadnej księgi. Sen nie przychodzi. Sen miał pozycje.", "mina": "mowi"},
        {"tekst": "Które klucze pasują do szuflady?", "ton": "rzeczowe", "kto": "vera", "wymaga": null, "odpowiedz": "Pierwszy to ten, który poprzednik zostawił w pierwszą sobotę. Drugi mam ja, dostałam go od Sama. Dwa zamki, żeby jedna osoba nie mogła sama.", "mina": "mowi"},
        {"tekst": "Co jest w szufladzie?", "ton": "niewygodne", "kto": "sam", "wymaga": null, "odpowiedz": "Rachunki. Stare grafiki. Nic, co by się komukolwiek przydało.", "mina": "klamie"},
        {"tekst": "W szufladzie jest kalka strony 41. Co się z nią stało?", "ton": "niewygodne", "kto": "sam", "wymaga": "d15_kalka_41", "ustawia": "d15_sam_klamra", "odpowiedz": "Klamra była lewostronna. Kartka puściła przy marginesie. Technicznie to nie wyrwanie, tylko wypięcie.", "mina": "neutralna"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Czego od nas chcesz?", "ton": "uprzejme", "kto": "sam", "wymaga": null, "odpowiedz": "Moich rzeczy i prawa do własnych słów. Resztę zostawiam Wam, pod jednym warunkiem: nikt nie wpisuje mnie do protokołu bez pytania.", "mina": "mowi"},
        {"tekst": "Elias złożył zeznanie za kwit. Co o tym myślisz?", "ton": "uprzejme", "kto": "sam", "wymaga": "d13_elias:odpis_za_zgoda", "odpowiedz": "Nie prosiłem o to. Ale to dla mnie coś znaczy, że powiedział to głośno. Chcę, żeby nie poszło na marne.", "mina": "emocja"},
        {"tekst": "Elias dostał oprawkę bez zeznania. Co o tym myślisz?", "ton": "uprzejme", "kto": "sam", "wymaga": "d13_elias:wydaj_od_reki", "odpowiedz": "Dobrze, że ją ma. Szkoda, że kwit pojechał razem z nią. Sam bym go zostawił, ale to nie moja księga.", "mina": "mowi"},
        {"tekst": "Co z referencjami do dwudziestego piątego?", "ton": "rzeczowe", "kto": "sam", "wymaga": null, "odpowiedz": "Port dzwoni do biura 25 o 5:30. Jeśli Victor nic na mnie nie ma, dadzą papier. Jeśli ma, nie dadzą.", "mina": "mowi"},
        {"tekst": "Dlaczego nie przyszedłeś wcześniej?", "ton": "niewygodne", "kto": "sam", "wymaga": null, "odpowiedz": "Bo Vera napisała o piętnastym i jak ktoś każe być w sobotę, to jest. Poza tym bałem się zobaczyć szafkę.", "mina": "mowi"},
        {"tekst": "Czemu wypiąłeś stronę 41?", "ton": "niewygodne", "kto": "sam", "wymaga": "d15_sam_klamra", "odpowiedz": "Wyrwałem, żeby nikt nie miał tych nazwisk. Czternaście rodzin i podpis kogoś, kto to potem zatwierdził. Jak pójdą do Urzędu, pójdą też do wyroków.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "uzgodnij",
      "etykieta": "Uzgodnij z Samem zakres, Victorowi odpis zasłonięty",
      "kto": "sam",
      "reakcja": "Zasłonić nazwiska, zostawić liczby. Zgoda. Po kolei: oni, potem ja.",
      "zysk": "Sam zostaje po Twojej stronie i zachowuje referencje. Victor widzi liczby, nie ludzi.",
      "strata": "Dowód słabnie: Nora dostaje kalkę z zasłoniętymi nazwiskami, bez pełnego dowodu.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Dostałem zapewnienie z portu, jeszcze nie papier, ale będzie. Dziękuję za kreskę zamiast nazwisk. — S.H."}
    },
    {
      "akcja": "victor_od_razu",
      "etykieta": "Przekaż kalkę Victorowi od razu",
      "kto": "sam",
      "reakcja": "Rozumiem. Wycofuję zgodę. Nic dla Urzędu nie podpisuję.",
      "zysk": "Mocny dowód: pełna kalka i podpis Victora na zatwierdzeniu trafiają do Urzędu.",
      "strata": "Ludzie z listy są w rękach Urzędu, Sam wycofuje zgodę, a referencje wiszą.",
      "echo": {"za_dni": 3, "forma": "list", "tekst": "Odebrałem kalkę z szuflady. Zatwierdzenie z moim podpisem wymaga wyjaśnienia, nie ukrywam. Wrócę do tego w sobotę. — V. Crane"}
    }
  ]
}
```

**Mini-karta: pan Pruitt, 80, emeryt.** Głos: powolny, pogodny, ustala wszystko na zapas: „wszystko w porządku, prawda?”. Typ: uczciwy-samotny. Chce: oddać jedenaście parasoli, bo zbierał je od wtorku w czwórce i trójce. Ukrywa: jeździ tramwajami od śmierci żony, a w biurze jest ktoś, kto mówi do niego po imieniu. Obraz: jedenaście parasoli na przedramieniu. Kontrast po dniu klucza i szuflady.

```json
{
  "id": "d15_pruitt",
  "dzien": 15,
  "postac": "Pruitt, 80",
  "glos": "Powoli, pogodnie. Co zdanie upewnia się: „wszystko w porządku, prawda?”. Nazwisko podaje z dwoma t.",
  "typ": "uczciwy-samotny",
  "rzecz": "Pęk jedenastu parasoli w jednym uchwycie",
  "wnetrze": [
    {
      "sekret_id": "d15_parasol_ew",
      "co_widac": "Jeden z parasoli ma wygięty uchwyt i naklejkę z inicjałami E.W., a w rączce zatknięty składany w prostokąt numerek z biura.",
      "co_z_tego_wynika": "To parasol Eliasa Wrena, który wrócił z dalekiego końca linii."
    }
  ],
  "wejscie": "Pruitt, osiemdziesiąt lat, więc proszę nie biec. Przyniosłem jedenaście parasoli, zbierałem je od wtorku w czwórce i trójce. Nikt po nie nie przyszedł, a to znaczy, że wszystko w porządku. Prawda?",
  "tury": [
    {
      "pytania": [
        {"tekst": "Gdzie je zbierałeś?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "W czwórce i trójce, na siedzeniach i pod nimi. W trójce więcej, bo tam siedzą ludzie, którzy lubią zostawiać po sobie ślad.", "mina": "mowi"},
        {"tekst": "Ile ich jest?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Jedenaście. Cztery czarne, trzy granatowe, dwa w kratę, jeden z kaczkami i jeden bez rączki. Liczyłem trzy razy.", "mina": "mowi"},
        {"tekst": "Czemu myślisz, że wszystko w porządku?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Bo jakby komuś zależało, już by przyszedł. Parasol to nie portfel, za parasolem nikt nie płacze. Prawda?", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Co robisz w tramwajach całymi dniami?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Jeżdżę. Z żoną jeździliśmy codziennie, od przystanku do pętli i z powrotem. Teraz jeżdżę sam, ale tak samo.", "mina": "emocja"},
        {"tekst": "Który parasol najbardziej Ci się podoba?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Ten z kaczkami. Wiem, głupio. Ale kaczki są w porządku.", "mina": "mowi"},
        {"tekst": "Parasol bez rączki ma naklejkę E.W. Czyj to?", "ton": "rzeczowe", "wymaga": "d15_parasol_ew", "odpowiedz": "Nie wiem. Starszy człowiek, tak sądzę. W jedenastce siedział z numerkiem w ręku i składał go w prostokąt, aż zrobił się kamień.", "mina": "mowi"},
        {"tekst": "Jak często jeździsz bez celu?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Codziennie. Cel to znaleźć kogoś, kto powie: dziękuję.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Co zrobisz, jeśli nikt nie przyjdzie?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Zjem sam obiad i zadzwonię do syna, że wszystko w porządku. Będzie wiedział, że kłamię, ale się ucieszy.", "mina": "emocja"},
        {"tekst": "Podpisze oddanie?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Pruitt. Z dwoma t. Zawsze ktoś pisze z jednym.", "mina": "mowi"},
        {"tekst": "Czemu oddajesz parasole do biura?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Bo tu jest ktoś w okienku. Nawet w nocy. To wiele znaczy, wiesz?", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "zatrzymaj",
      "reakcja": "Dziękuję. Proszę dać im komuś, jak będzie padało. Ja będę przechodził.",
      "zysk": "Jedenaście parasoli ma półkę, a Pruitt ma powód, żeby wrócić.",
      "strata": "Półka się zapełnia, a w magazynie robi się ciaśniej.",
      "echo": {"za_dni": 3, "forma": "gosc", "tekst": "Elias Wren: „Dziękuję za parasol. Pan Pruitt twierdzi, że znalazł go na jedenastce. Był bez rączki od burzy. Czy jest oprawka? Jutro.”"}
    },
    {
      "akcja": "odmow",
      "reakcja": "Rozumiem. Zaniosę z powrotem. Parasol to nie portfel, nikt nie zauważy.",
      "zysk": "Nie dokładasz do sterty i nie musisz szukać półki.",
      "strata": "Pruitt wraca z jedenastoma parasolami i prawdopodobnie przestanie przychodzić.",
      "echo": {"za_dni": 3, "forma": "list", "tekst": "Na pętli czwórki ktoś zostawił jedenaście parasoli oparte o słup. Nikt ich nie wziął. Leo zapisał to w wykazie zmiany jako „sprawa porządkowa”."}
    }
  ]
}
```

## RZECZY DODATKOWE I KARTY WIECZORNE: dni 11-15

```json
{
  "extra": {
    "15": {"sprite": "koperta", "itemName": "koperta z szuflady", "line": "4", "inside": null,
      "wnetrze": [
        {"sekret_id": "d15_kalka_41", "co_widac": "Szuflada ma dwa zamki: pierwszy otwiera klucz poprzednika, drugi klucz od Very. W środku kalka wyrwanej strony 41: czternaście wpłat lokatorów i pozycje Skrytki.", "co_z_tego_wynika": "Strona 41 istniała. Są na niej wpłaty lokatorów i numery odbioru."},
        {"sekret_id": "d15_zatwierdzenie_victora", "co_widac": "Obok kalki leży zatwierdzenie rozliczenia z podpisem V. Crane i dopiskami innym tuszem. Data jest wcześniejsza niż audyt.", "co_z_tego_wynika": "Victor zatwierdził rozliczenie, wiedząc, że brakuje strony 41, i dopisał ślady po fakcie."}
      ]}
  },
  "wieczor": {
    "11": [{"kto": "Elias, numerek 1", "tekst": "Elias zapytał, jak zwykle, o oprawkę. Dziś po raz pierwszy dodał: „Dziewczynka z królikiem powiedziała, że ktoś tu mnie poznaje.” Nie wiedział, czy to dobrze."}],
    "12": [{"kto": "Elias, numerek 1", "tekst": "Elias: „Pytałem dziś Leo, czy szóstka wozi rzeczy bez nadawcy. Powiedział, że jutro będzie miał dostawę, której nie rozumie.” Numerek złożył w prostokąt tak ciasny, że stał sam."}],
    "13": [{"kto": "Elias, numerek 1", "tekst": "Elias o oprawkę dziś nie pytał. Zapytał: „Czy Sam już był?” Numerek złożył jak zawsze, ale stał przy szybie dłużej niż zwykle."}],
    "14": [{"kto": "Elias, numerek 1", "tekst": "Elias: „Czy Sam już był?” Nie było. Powiedział, że koperta z osiemdziesięcioma pięcioma dolarami leży w kieszeni płaszcza i że nie wie, jak podać ją komuś, kto nie chce jej wziąć."}],
    "15": [{"kto": "Elias, numerek 1", "tekst": "Elias przyszedł pod koniec zmiany: „Czy Sam już był?” Kiedy usłyszał, że był, usiadł na ławce przy wejściu i długo nie wstawał. Numerka nie złożył."}]
  }
}
```
