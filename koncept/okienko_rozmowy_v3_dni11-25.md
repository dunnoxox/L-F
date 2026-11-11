# OKIENKO: rozmowy dni 11-25 (wersja 4, wg fabula_25_dni_v2 „Fotel” i CD2)

Ten sam schemat i te same zasady co w `okienko_rozmowy_v3_dni1-10.md`: potoczna polszczyzna, gracz bez płci, `wymaga` na pytaniach i na decyzjach, `ustawia` na pytaniach. Walidacja: `python3 -I validate_dialogs.py okienko_rozmowy_v3_dni1-10.md okienko_rozmowy_v3_dni11-25.md`. Żadna postać nie mówi o łańcuchu dyżurnych przed dniem 23.

# TYDZIEŃ 3: PRAWDA WYCHODZI

## DZIEŃ 11

**Maya Doyle, 34, elektryczka.** Potrzeba: sama zdecydować, kto dowie się, że żyje. Lęk: że ktoś zdecyduje za nią (jak Lena, jak Evan). Sekret: zostawia rzeczy celowo, to test, czy okienko wytrzyma. Tik: liczy „raz, dwa, trzy” przed zgodą. Głos: precyzyjna, spokojna, elektryczne metafory. Łuk: trzy testy (d11, d16, d21). Moment gwiazdy: opisuje własny pokrowiec, zanim go wyjmą.

```json
{
  "id": "d11_maya",
  "dzien": 11,
  "postac": "Maya Doyle, 34",
  "glos": "Precyzyjna, spokojna. Przed każdą zgodą liczy do trzech. Mówi słowami z elektryki: zwarcie, obwód, bezpiecznik.",
  "typ": "właścicielka, która sama układa zasady",
  "rzecz": "Czarny pokrowiec na okulary ze zszytą gumką",
  "wnetrze": [
    {
      "sekret_id": "d11_trzy_warunki",
      "co_widac": "Pod wewnętrzną łatką leży złożona karteczka z trzema numerowanymi punktami, pisanymi równym, drobnym pismem. Punkt pierwszy: „Nikt nie wie, gdzie jestem”.",
      "co_z_tego_wynika": "Maya zaplanowała, kto i co się o niej dowie. Nie zginęła: sama układa zasady."
    }
  ],
  "wejscie": "Maya Doyle. Zostawiłam pokrowiec na okulary w czwórce, wczoraj. Zanim go wyjmiecie, opiszę: czarny, gumka zszyta z boku, wewnątrz łatka niebieską nitką. Jeśli się zgadza, porozmawiamy.",
  "wejscie_jesli": {
    "d7_evan:powiedz_linie": "Maya Doyle. Pokrowiec na okulary, czwórka. Opiszę go: czarny, gumka zszyta z boku, łatka niebieską nitką. I jedno pytanie: ktoś powiedział mojemu mężowi, którą linią jeżdżę. Stał trzy noce na pętli. Kto?"
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten pokrowiec?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czarny, twardy. Gumkę z boku zszyłam sama, a łatkę w środku niebieską nitką, bo czarna się skończyła. Sprawdź, to chwila.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie i kiedy go zostawiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, wczoraj koło 22:40, przy tylnych drzwiach. Zostawiłam celowo, więc nie pytaj, czy zapomniałam.",
          "mina": "neutralna"
        },
        {
          "tekst": "Skąd znasz łatkę, zanim ją zobaczysz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Z pamięci, jak każdą własną rzecz. Dziwniej byłoby, gdybym jej nie znała.",
          "mina": "neutralna"
        },
        {
          "tekst": "Evan stał trzy noce na pętli czwórki. Wiesz o tym?",
          "ton": "niewygodne",
          "wymaga": "d7_evan:powiedz_linie",
          "odpowiedz": "Widziałam z wagonu. Szedł równo, z termosem, jak ktoś, komu podano linię. Chcę wiedzieć, kto mu ją podał.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czemu zostawiasz rzeczy w tramwajach?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Telefon, klucze, torbę, teraz pokrowiec. Chcę wiedzieć, czy ktoś po drugiej stronie szyby wytrzyma i nie zacznie rozdawać. Na razie wytrzymuje.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy Lena ci pomogła?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Tak, na początku, z mieszkaniem. Potem zaczęła decydować, co mi wolno. To było drugie zwarcie.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu mnie obserwujesz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Sprawdzam, co robisz z rękami. Tamten też nie wiedział, co z nimi zrobić, a siedział tu dłużej.",
          "mina": "neutralna"
        },
        {
          "tekst": "Na karteczce pod łatką są trzy punkty. Kto je ułożył?",
          "ton": "niewygodne",
          "wymaga": "d11_trzy_warunki",
          "odpowiedz": "Ja, przez trzy noce, w kolejności, w jakiej coś może się zepsuć. Pierwszy: nikt nie wie, gdzie jestem. Resztę dostanie ten, kto dostanie moje „tak”.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego od nas potrzebujesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Trzech rzeczy. Nikt nie wie, gdzie jestem. Jedno zdanie może iść do policjanta: „Żyje. Nie wróci. Nie szukać.” Reszta tylko za moim „tak”.",
          "mina": "mowi"
        },
        {
          "tekst": "Telefon dostał Evan. Wiesz, co zrobił?",
          "ton": "uprzejme",
          "wymaga": "d3_maz_i_siostra:wydaj_evan",
          "odpowiedz": "Wiem od Leny. Przeczytał jej SMS i poszedł do niej z awanturą. Takie zwarcie. Nie mam żalu, ale policzyłam. A teraz nikt nie wie, gdzie jestem.",
          "mina": "emocja"
        },
        {
          "tekst": "Telefon dostała Lena. Co z tego wynikło?",
          "ton": "uprzejme",
          "wymaga": "d3_maz_i_siostra:wydaj_lena",
          "odpowiedz": "Lena ma swoją wiadomość, a Evan został bez śladu i przestał ufać tej szybie. Obie strony policzyłam. Zostaje jedno: nikt nie wie, gdzie jestem.",
          "mina": "emocja"
        },
        {
          "tekst": "Co z rzeczami, które u nas leżą?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Niech leżą. To depozyt. Wezmę je, jak skończę, i nikt ich beze mnie nie czyta.",
          "mina": "neutralna"
        },
        {
          "tekst": "Szalik z twoimi inicjałami też tu leży. Czemu go zostawiłaś?",
          "ton": "rzeczowe",
          "wymaga": "d2_szalik_md",
          "odpowiedz": "Szalik był pierwszy. Chciałam zobaczyć, czy ktoś go sprzeda albo poda dalej. Nikt nie podał, więc zostawiam dalej.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy powiadomić rodzinę, że żyjesz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wysłuchaj do końca. Raz. Dwa. Trzy. Nie, nie bez mojego „tak”. Nawet jeśli oni nie śpią.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "przez_okienko",
      "etykieta": "Zgoda: kontakt tylko przez okienko",
      "reakcja": "Raz. Dwa. Trzy. Tak. Okienko, jedno zdanie dla policjanta, reszta za moim „tak”. Zapisz, że zgodziłam się dziś i bez przymusu.",
      "zysk": "Maya ci ufa i będzie wracać po swoje rzeczy.",
      "strata": "Evan i Lena nie dowiedzą się niczego, a Evan stoi dalej na pętli.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Dostałem jedno zdanie: żyje, nie wróci, nie szukać. Nie pytam skąd. Zapisałem słowo w słowo.”"
      }
    },
    {
      "akcja": "powiadom_rodzine",
      "etykieta": "Powiadom rodzinę przy Mai",
      "reakcja": "Nie. Raz. Dwa. Trzy. Nie. Wrócę już tylko po swoje rzeczy i bez słowa.",
      "zysk": "Rodzina dowie się, że Maya żyje, i przestanie czekać w niepewności.",
      "strata": "Maya zrywa rozmowy i przychodzi już tylko po walizkę, bez słowa.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Lena Brandt: „Dowiedziałam się od was, że siostra żyje. Nie powiedzieliście gdzie ani dlaczego, a ona nie dała mi nic powiedzieć. Jeśli coś po niej zostało, niech ktoś mi powie. — L.”"
      }
    },
    {
      "akcja": "szept_lenie",
      "etykieta": "Powiedz Lenie po cichu, że siostra żyje",
      "reakcja": "Skąd on wie… skąd ona wie, że tu byłam? Policzyłam, że ktoś wygada. Nie myliłam się.",
      "zysk": "Lena przestaje się bać, a Maya zostaje bez straży, której nie chciała.",
      "strata": "Maya dowie się od Leny, że ktoś wygadał, i przestanie ci ufać.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Lena Brandt: „Ktoś mi powiedział po cichu, że Maya żyje. Płakałam dwa dni z ulgi. Nie pytam kto. Nie powiem Evanowi. — L.”"
      }
    }
  ]
}
```

**Grace Okoye, 35, pielęgniarka z nocnej zmiany.** Potrzeba: wejść na oddział o 6:00. Lęk: że Iris dowie się o kartce. Sekret: wpłaciła 400 $ i nie ma papieru. Tik: liczy czas w godzinach dyżuru. Głos: krótko, czarny szpitalny humor. Łuk: wraca w d12 (Okoye płacą drugi raz) i d23. Moment gwiazdy: smycz z kartą na szyi i „jeszcze z lepszą cerą”.

```json
{
  "id": "d11_grace",
  "dzien": 11,
  "postac": "Grace Okoye, 35",
  "glos": "Krótko, zmęczona, liczy czas w godzinach dyżuru. Czarny szpitalny humor, nigdy nie narzeka wprost.",
  "typ": "uczciwa, spieszy się",
  "rzecz": "Granatowa torebka na ramię z legitymacją szpitalną",
  "wnetrze": [
    {
      "sekret_id": "d11_kartka_iris",
      "co_widac": "W bocznej kieszeni złożona kartka sprzed dwóch tygodni: „Iris, 400 $, żółta kopia u elektryczki z pierwszego piętra”. Obok legitymacja szpitalna z jej zdjęciem.",
      "co_z_tego_wynika": "Grace wpłaciła 400 dolarów Iris Bell, a dowód wpłaty, żółta kopia, jest u Mai Doyle. To ta kopia z torby narzędziowej z dnia 8."
    }
  ],
  "wejscie": "Grace Okoye, pielęgniarka, nocka na onkologii. Zostawiłam torebkę w jedenastce, granatową, z legitymacją. O szóstej muszę wejść na oddział, a bez karty drzwi się nie otworzą. Mam godzinę i dwadzieścia minut.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta torebka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Granatowa, skórzana, na ramię. Pasek przetarty od smyczy. Legitymacja ma moje zdjęcie z trzeciego roku, jeszcze z lepszą cerą.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jest w środku oprócz legitymacji?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Klucze, tabletki na ból głowy, kartka. Nic wartościowego. Kartka to zakupy.",
          "mina": "klamie"
        },
        {
          "tekst": "Czemu bez karty nie wejdziesz na oddział?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Drzwi są na kartę, a dyżurny nikogo nie wpuszcza na słowo. Ma rację, ale dziś mnie to boli.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Gdzie pracujesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Szpital miejski, onkologia, trzecie piętro. Nocki od dwudziestej. Dzieci śpią u sąsiadki, więc tym bardziej nie mam czasu.",
          "mina": "mowi"
        },
        {
          "tekst": "Kiedy zostawiłaś torebkę?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Koło wpół do pierwszej, w jedenastce. Zdjęłam ją z ramienia, bo bolał mnie bark. Wysiadłam na Rynku bez niej.",
          "mina": "mowi"
        },
        {
          "tekst": "Kartka w kieszeni to na pewno zakupy?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Zakupy. Mleko, chleb. Zostaw tę kartkę, naprawdę.",
          "mina": "klamie"
        },
        {
          "tekst": "Na kartce jest: „Iris, 400 $, żółta kopia u elektryczki”. Co to?",
          "ton": "niewygodne",
          "wymaga": "d11_kartka_iris",
          "odpowiedz": "To moje czterysta dolarów i dowód, że je wpłaciłam. Kopię schowała elektryczka z naszej kamienicy, bo Iris nie lubi, jak lokatorzy mają papiery.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Ktoś potwierdzi, że to twoja torebka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Dyżurny z oddziału, Hollis. Zadzwoń, odbierze po trzecim sygnale, zawsze się spóźnia.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "G. Okoye, byle szybko. Zegar bije.",
          "mina": "neutralna"
        },
        {
          "tekst": "Żółta kopia została u nas. Czy to dowód twoich 400 $?",
          "ton": "rzeczowe",
          "wymaga": "d8_lena_i_nora:kopia_osobno",
          "odpowiedz": "Czyli gdzieś jest. Nora Vance ją zna. Dobrze, niech leży zamknięta, bo mam szóstą.",
          "mina": "emocja"
        },
        {
          "tekst": "Żółta kopia poszła z torbą do siostry Mai. Wiesz o tym?",
          "ton": "rzeczowe",
          "wymaga": "d8_lena_i_nora:wydaj_lenie_cala",
          "odpowiedz": "Nie wiedziałam. Czyli dowód mam tylko w głowie i na kartce. Dlatego kartkę wezmę, przepraszam.",
          "mina": "emocja"
        },
        {
          "tekst": "Czy Iris cię o coś prosiła?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "O drobną przysługę. Iris zawsze prosi o drobną przysługę, a potem sama się robi pogoda.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Zdążę. Karta, drzwi, Hollis. Reszta może poczekać do rana.",
      "zysk": "Grace wchodzi na oddział o 6:00 i nikt jej nie karze.",
      "strata": "Kartka z wpłatą 400 $ wychodzi z biura i nie zostaje po niej żaden ślad.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Nora Vance: „Grace mówi, że odebrała torebkę i że o kopii powiedziała tutaj. Przyjdę po kolei: rzecz, osoba, skutek.”"
      }
    },
    {
      "akcja": "kartka_odpis",
      "etykieta": "Poproś o zgodę i przepisz kartkę do rejestru",
      "reakcja": "Przepisz. Jedną linijkę, bez nazwiska. Szybko, proszę, mam szóstą.",
      "zysk": "W rejestrze zostaje ślad wpłaty Okoye, więc Nora będzie miała czym walczyć.",
      "strata": "Grace traci minuty, których nie ma, i boi się, że Iris dowie się, skąd ślad.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "W rejestrze jest wpis o wpłacie 400 $ rodziny Okoye. Dziękuję. Jutro przychodzę z pytaniem, co z oryginałami. — N. Vance"
      }
    },
    {
      "akcja": "zadzwon",
      "etykieta": "Zadzwoń do Hollisa, zanim wydasz",
      "reakcja": "Dzwoń. Ale on odbiera po trzecim sygnale i potem mówi dwie minuty o grafiku.",
      "zysk": "Hollis potwierdza i masz pewność, że torebka jest jej.",
      "strata": "Grace traci dwadzieścia minut i może nie zdążyć na oddział.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Grace Okoye: „Weszłam o 6:02. Hollis zapisał mi spóźnienie. Powiedział, że to przez biuro. Śmiałam się, bo co mi zostało.”"
      }
    }
  ]
}
```


## DZIEŃ 12

**Iris Bell, Nora Vance, Ada Vale.** Iris: potrzeba kasetki, lęk że wyjdą papiery pięciu osób, sekret: 6 800 $ od miasta, tik „nie lubię naciskać”. Nora: potrzeba oryginałów do 24., lęk że Okoye zapłacą drugi raz, sekret: sama kiedyś odebrała paczkę, tik „po kolei”. Ada: potrzeba, żeby dorośli przestali się kłócić. Moment gwiazdy: Ada o szufladzie, którą Iris otwiera bez patrzenia.

```json
{
  "id": "d12_iris_nora",
  "dzien": 12,
  "postac": "Iris Bell, Nora Vance, Ada Vale",
  "glos": "Iris: cicho, „nie lubię naciskać”, nigdy nie dotyka szyby. Nora: po kolei, rzecz-osoba-skutek. Ada: wprost, bo tu mówią do niej ładnie.",
  "typ": "dwie prawdy na jednym papierze",
  "rzecz": "Torba na zakupy z drugą kasetką na dnie",
  "ludzie": {
    "iris": "Iris Bell",
    "nora": "Nora Vance",
    "ada": "Ada Vale"
  },
  "wnetrze": [
    {
      "sekret_id": "d12_oryginaly",
      "co_widac": "W kasetce leżą oryginały pokwitowań zaliczek lokatorów i druga lista: wpłaty miasta na rzecz kamienicy, 6 800 $, z podpisem Iris. Między nimi bloczek z numerami odbioru.",
      "co_z_tego_wynika": "Oryginały dowodzą dwóch rzeczy: co wpłacili lokatorzy i co Iris odebrała od miasta."
    }
  ],
  "wejscie": "Iris Bell, Nora Vance i mała Ada Vale stoją razem przy szybie. Iris prosi o kasetkę z torby na zakupy. Nora twierdzi, że są w niej oryginały pokwitowań lokatorów, i żąda ich dziś. Ada pokazuje palcem na puszkę z dnia sześć.",
  "wejscie_jesli": {
    "d8_lena_i_nora:wydaj_lenie_cala": "Iris Bell prosi o swoją kasetkę z torby na zakupy. Nora Vance, bez żółtej kopii, którą oddano siostrze Mai, podaje numer z własnego wykazu i żąda oryginałów. Ada Vale pokazuje puszkę. Stoją razem przy szybie."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w kasetce z torby na zakupy?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Rachunki. Karty rozliczeń kamienicy, nic ponad to. Nie lubię naciskać, ale to nasze, lokatorów i moje.",
          "mina": "klamie"
        },
        {
          "tekst": "Czego dokładnie żądasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Oryginałów pokwitowań zaliczek: czternaście rodzin, po 400 dolarów, termin dwudziesty czwarty. Bez nich Okoye zapłacą drugi raz, a ja nie mam jak tego udowodnić.",
          "mina": "mowi"
        },
        {
          "tekst": "Ada, czemu pokazujesz na puszkę?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "ada",
          "odpowiedz": "Bo ona jest z tego samego bloczka co papier pani Iris. Mama mówi, że nie wolno gadać, ale tu można, bo tu mówią do mnie ładnie.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czy lokatorzy wiedzą, gdzie są ich papiery?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Wiedzą, że są bezpieczne. Czasem aż za bardzo, przyznaję. Zbierałam zaliczki, bo ktoś musiał, i to ja musiałam.",
          "mina": "mowi"
        },
        {
          "tekst": "Po czym poznasz oryginał?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Po numerze z mojego wykazu, podpisie „I.” i zielonym stemplu kamienicy. Jak się zgadza, wiem.",
          "mina": "mowi"
        },
        {
          "tekst": "Żółta kopia poszła do Leny. Jak udowodnisz wpłatę?",
          "ton": "rzeczowe",
          "wymaga": "d8_lena_i_nora:wydaj_lenie_cala",
          "kto": "nora",
          "odpowiedz": "Numerem z wykazu: czterysta jedenaście. Papier mogłam zgubić, liczby nie. Ale numer bez oryginału to dalej tylko moje słowo.",
          "mina": "mowi"
        },
        {
          "tekst": "Żółta kopia leży u nas. Czy to wystarczy?",
          "ton": "rzeczowe",
          "wymaga": "d8_lena_i_nora:kopia_osobno",
          "kto": "nora",
          "odpowiedz": "Potwierdza jedną wpłatę, Okoye. Ale tylko jeśli da się ją powiązać z oryginałem. Dlatego oryginały.",
          "mina": "mowi"
        },
        {
          "tekst": "Ada, co jeszcze widziałaś u pani Iris?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "ada",
          "odpowiedz": "Że otwiera tę zacinającą się szufladę bez patrzenia. Ja muszę kopnąć w lewy róg.",
          "mina": "mowi"
        },
        {
          "tekst": "W kasetce są dwa komplety: wpłaty i 6 800 $ od miasta. Czyje?",
          "ton": "niewygodne",
          "wymaga": "d12_oryginaly",
          "kto": "iris",
          "odpowiedz": "Miasta, lokatorów i moje, w kolejności, w jakiej je rozdzieliłam. Nora policzyła jedną stronę. Nie lubię naciskać, ale to prawie uczciwe rozliczenie.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czemu nie oddasz oryginałów Norze?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Bo jak Nora je pokaże, wyjdzie też to, co leży obok: papiery pięciu osób, które już kupiły bilet. Czternaście rodzin czy pięć ludzi? To nie jest pytanie retoryczne.",
          "mina": "mowi"
        },
        {
          "tekst": "Co się stanie dwudziestego czwartego?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Termin mija. Bez oryginałów lokatorzy wpłacają zaliczki drugi raz albo wylatują. Mam czternaście rodzin i dwanaście dni.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy w kasetce są też dokumenty dla ludzi z żetonów?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Kasetka jest jedna, papierów w niej dużo. Pytanie jest nieostrożne, więc nie odpowiem.",
          "mina": "neutralna"
        },
        {
          "tekst": "Piórnik poszedł do Victora. Co z ludźmi z żetonów?",
          "ton": "niewygodne",
          "wymaga": "d9_iris:zetony_victor",
          "kto": "iris",
          "odpowiedz": "Są na liście inspekcji: dla niego drobiazg, dla nich wyrok. Nie lubię naciskać, ale tu nie mam wyboru.",
          "mina": "emocja"
        },
        {
          "tekst": "Piórnik wrócił do ciebie. Gdzie są teraz żetony?",
          "ton": "niewygodne",
          "wymaga": "d9_iris:zetony_iris",
          "kto": "iris",
          "odpowiedz": "Bezpieczne. Cztery czekają na odbiór, a piąty jeszcze nie ma opisu. Wszystko w porządku.",
          "mina": "klamie"
        },
        {
          "tekst": "Piórnik leży w depozycie. Co z ludźmi z żetonów?",
          "ton": "niewygodne",
          "wymaga": "d9_iris:depozyt",
          "kto": "iris",
          "odpowiedz": "Czekają. Do soboty żaden z czterech nie dostanie dokumentu, a jedna rodzina jedzie jutro o 5:40. Nie mówię tego jak groźbę, to rozkład jazdy.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "zabezpiecz",
      "etykieta": "Zabezpiecz oryginały za pokwitowaniem",
      "kto": "nora",
      "reakcja": "Pokwitowanie, numer, podpis. Tak to powinno wyglądać. Iris patrzy na ciebie, ale ja wolę patrzeć na papier.",
      "zysk": "Oryginały leżą w biurze za pokwitowaniem, więc Nora ma szansę przed dwudziestym czwartym.",
      "strata": "Iris cię zapamięta, a papiery pięciu osób leżą obok oryginałów i przestają być bezpieczne.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Nie lubię naciskać. Ale dziś rano dwóch lokatorów odmówiło mi zaliczek. Zastanawiam się dlaczego.”"
      }
    },
    {
      "akcja": "wydaj_iris",
      "etykieta": "Wydaj kasetkę Iris",
      "kto": "iris",
      "reakcja": "Dziękuję. Zawsze miło, kiedy ktoś rozumie. Drobna przysługa, nic więcej.",
      "zysk": "Papiery pięciu osób zostają poza księgą i poza Urzędem.",
      "strata": "Oryginały odpływają, a rodzina Okoye zapłaci 400 $ drugi raz.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Wiem, że kasetkę wydano. Okoye wpłacą drugi raz przed dwudziestym czwartym. Zapisałam, kto stał przy szybie. — N. Vance"
      }
    },
    {
      "akcja": "sprawdz_z_nora",
      "etykieta": "Sprawdź kasetkę wspólnie z Norą i Iris",
      "kto": "nora",
      "reakcja": "Po kolei: numer, podpis, stempel. Zgadza się. Iris, widzisz to, co ja.",
      "zysk": "Żadna strona nie zarzuci ci stronniczości, a oryginały są policzone.",
      "strata": "Tracisz godzinę, kolejka rośnie, a Iris widzi dokładnie to, co widzi Nora.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Dziękuję za wspólne sprawdzenie. Mam listę numerów, każdy podpisany przez obie strony. Nie wiem jeszcze, co z nią zrobię. — N. Vance"
      }
    },
    {
      "akcja": "wyloz_400",
      "etykieta": "Wyłóż 400 $ z własnych za Okoye",
      "kasa": -400,
      "kto": "nora",
      "reakcja": "Nie prosiłam o to. Przyjmę dla Grace. Nie myśl, że to rozwiązuje resztę.",
      "zysk": "Rodzina Okoye ma czterysta dolarów na drugą wpłatę i nic nie traci.",
      "strata": "Tracisz prawie trzy czynsze, a Iris zostaje bezkarna i dalej ma oryginały.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Grace Okoye: „Nora mówi, że ktoś zapłacił za mnie. Nie wiem kto. Dziękuję. Oddam, jak skończę nocki.”"
      }
    }
  ]
}
```

**Linh Tran, 33, matka.** Potrzeba: żeby Milo zasnął w pociągu. Lęk: że mąż ich znajdzie. Sekret: numer 0623 pod dnem pozytywki. Tik: zaczyna od „proszę”. Głos: cicho, krótko. Łuk: echo w d18, d23. Moment gwiazdy: „Milo mówi, że gwiazdka kaszle”.

```json
{
  "id": "d12_linh",
  "dzien": 12,
  "postac": "Linh Tran, 33",
  "glos": "Cicho, krótkie zdania. Zaczyna od „proszę”. Odpowiada tylko na to, o co pytają.",
  "typ": "uczciwa i przerażona",
  "rzecz": "Drewniana pozytywka z gwiazdką na wieczku",
  "wnetrze": [
    {
      "sekret_id": "d12_pozytywka_0623",
      "co_widac": "Pod ruchomym dnem pozytywki leży bilet na pociąg i kartonik z numerem 0623. Na odwrocie drobny dopisek: „matka z synem”.",
      "co_z_tego_wynika": "To numer z piórnika Iris, taki sam jak na żetonie. Linh jedzie o 5:40, a ktoś jej szuka."
    }
  ],
  "wejscie": "Linh Tran. Mój syn Milo, sześć lat, śpi na ławce. Zgubiłam pozytywkę z kołysanką, jedenastka, drewniana, z gwiazdką na wieczku. Rano mamy pociąg, a bez niej Milo nie zaśnie w drodze. Proszę, bez pytań o to, co w środku.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta pozytywka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Drewniana, mała, z gwiazdką na wieczku. Gra kołysankę, ale jedną nutę zacina. Milo mówi, że gwiazdka kaszle.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie ją zgubiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, na siedzeniu, kiedy zdejmowałam Milo z kolan. Zasnął, a ja zapomniałam o całym świecie.",
          "mina": "neutralna"
        },
        {
          "tekst": "Dokąd jedziecie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Na dworzec, rano. Dalej nie powiem. Nie dlatego, że nie ufam. Dlatego, że nie wolno.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Ile lat ma Milo?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Sześć, w maju skończył. Nie chodzi jeszcze do szkoły, bo szkoły są tam, gdzie zostawia się adres.",
          "mina": "emocja"
        },
        {
          "tekst": "Co jest w pozytywce?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nic. Mechanizm i kurz. Proszę nie zdejmować dna.",
          "mina": "klamie"
        },
        {
          "tekst": "Czy ktoś was szuka?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Dlatego pociąg jest o 5:40, a nie o dziewiątej.",
          "mina": "emocja"
        },
        {
          "tekst": "Pod dnem jest bilet i kartonik z numerem 0623. Co to?",
          "ton": "niewygodne",
          "wymaga": "d12_pozytywka_0623",
          "odpowiedz": "Proszę, nie pytaj. To jest to, co zostało z trzech lat. Jak ktoś się dowie, Milo i ja nie dojedziemy.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego potrzebujesz najbardziej?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Żeby Milo zasnął w pociągu. I żeby nikt nie zapisał mojego nazwiska obok jego imienia.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Linh. Samo Linh, bez nazwiska. Jeśli musi być nazwisko, napisz mi, które mam podać.",
          "mina": "neutralna"
        },
        {
          "tekst": "Żeton 0623 leży w depozycie. Wiesz o tym?",
          "ton": "rzeczowe",
          "wymaga": "d9_iris:depozyt",
          "odpowiedz": "Wiem, Iris mi powiedziała. Pociąg jest jutro, depozyt do soboty. Czyli wyjadę bez papieru albo wcale.",
          "mina": "emocja"
        },
        {
          "tekst": "Numer 0623 jest na liście Victora. Wiesz o tym?",
          "ton": "rzeczowe",
          "wymaga": "d9_iris:zetony_victor",
          "odpowiedz": "Wiem, Iris mi powiedziała. Wsiądę, ale będę się rozglądać do ostatniego przystanku.",
          "mina": "emocja"
        },
        {
          "tekst": "Kto wam pomaga w tym wyjeździe?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Ktoś, kto bierze za to pieniądze i nie lubi, kiedy się o tym mówi. Więcej nie powiem.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Milo, patrz, gwiazdka wróciła. Nie pytam, co widać. Dziękuję, że nie pytasz.",
      "zysk": "Linh i Milo mają pozytywkę i bilet, rano wsiądą do pociągu o 5:40.",
      "strata": "Wydajesz rzecz z numerem od Iris, więc jesteś w jej układzie, a w księdze nie ma po tym śladu.",
      "echo": {
        "za_dni": 4,
        "forma": "list",
        "tekst": "Pocztówka z dworca, bez nadawcy: narysowana gwiazdka. Pod spodem: „Milo zasnął w połowie drogi. Dziękuję.”"
      }
    },
    {
      "akcja": "zatrzymaj",
      "reakcja": "Rozumiem. Proszę tylko, żeby Milo tego nie słyszał. On pamięta.",
      "zysk": "Kartonik z 0623 zostaje u ciebie, więc masz dowód, że ktoś handluje papierami.",
      "strata": "Linh i Milo mogą nie zdążyć na pociąg, a dziecko zostaje na ławce bez kołysanki.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Iris Bell: „Pewna matka z synem nie wsiadła rano do pociągu. Nie lubię naciskać, ale ktoś tu się pomylił i będzie to droga pomyłka.”"
      }
    },
    {
      "akcja": "wydaj_zapisz",
      "etykieta": "Wydaj i wpisz do księgi, że odebrała Linh",
      "reakcja": "Wpisujecie? Samo Linh, bez nazwiska… dobrze. Tylko proszę, żeby księga leżała zamknięta.",
      "zysk": "Wydanie jest w księdze, więc nikt nie zarzuci ci tajnych układów.",
      "strata": "Księgę czyta Victor, a imię Linh i data pociągu trafiają na papier.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Victor Crane: „W księdze jest wpis o pozytywce. Samo imię, bez nazwiska. Zapisuję, że zapisano.”"
      }
    }
  ]
}
```


## DZIEŃ 13

**Elias Wren, 73, emeryt.** Potrzeba: oprawka żony i wiedza, czemu Sam za nią zapłacił. Lęk: być komuś dłużny. Sekret: przyjął zwrot, choć wiedział, że Sam płaci z własnych; od czterech tygodni odkłada 85 $. Tik: składa numerek w prostokąt, „Dziękuję. Jutro.” Łuk: w d25 pyta o imię gracza. Moment gwiazdy: „Pan Holt nie miał nazwiska na karcie przez dwa lata.

```json
{
  "id": "d13_elias",
  "dzien": 13,
  "postac": "Elias Wren, 73",
  "glos": "Powoli, staroświecko, z uprzejmością, która ma coś zasłonić. Składa numerek w prostokąt. Kończy: „Dziękuję.”",
  "typ": "uczciwy, wstydliwy",
  "rzecz": "Futerał z oprawką okularów, bez szkieł",
  "wnetrze": [
    {
      "sekret_id": "d13_kwit_zwrotu",
      "co_widac": "Za wyściółką futerału złożony kwit zwrotu pieniędzy: 85 $, podpis S. Holt. Numer paczki zgadza się z wykazem z piórnika Iris.",
      "co_z_tego_wynika": "Oprawka przejechała przez ręce Iris, a Sam zwrócił Eliasowi pieniądze z własnej kieszeni."
    }
  ],
  "wejscie": "Elias Wren, numerek jeden. Oprawka okularów mojej żony wróciła szóstką, tak mówi konduktor. Chcę ją odebrać. I chcę wiedzieć, dlaczego pan Holt zapłacił za nią z własnej kieszeni, bo ja o to nie prosiłem.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda oprawka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Złota, cienka, jedno ucho wygięte. Żona prostowała je kciukiem, a ono i tak wracało. Czterdzieści jeden lat.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie i kiedy zniknęła?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, tuż przed Bożym Narodzeniem, jak wracaliśmy od jej siostry. Potem żona zachorowała i okularów już nie założyła.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu Sam za nią zapłacił?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo obiecał szukać. Nie znalazł, więc zapłacił, jakby to była jego wina. Dowiedziałem się, jak już było po wszystkim.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Z czego żyjesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Z emerytury, czterysta dziesięć dolarów miesięcznie. Nie narzekam, tylko liczę.",
          "mina": "mowi"
        },
        {
          "tekst": "Skąd znasz Sama?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Z okienka. Pan Holt nie miał nazwiska na karcie przez dwa lata. Potem napisał ołówkiem: S. Holt. Chyba sam sobie przypominał.",
          "mina": "mowi"
        },
        {
          "tekst": "Kiedy Sam odszedł?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ponad miesiąc temu. Mówił: jeszcze nie, panie Eliasie. A potem przestał przychodzić.",
          "mina": "emocja"
        },
        {
          "tekst": "Co wiesz o paczkach, które jeżdżą szóstką?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Że konduktor ich nie lubi. Więcej nie wiem i nie chcę wiedzieć.",
          "mina": "neutralna"
        },
        {
          "tekst": "Kwit zwrotu ma numer paczki od Iris. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": "d13_kwit_zwrotu",
          "odpowiedz": "Nie znam żadnej paczki od Iris. Wiem, że Sam powiedział: nie pytaj, skąd pieniądze. Wziąłem. Wstyd bywa jedyną zapłatą, jaka zostaje.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co chcesz zrobić z kwitem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Żeby ktoś zapisał, że Sam zapłacił, a ja przyjąłem. Żeby to nie był dług bez nazwy. To dla niego, nie dla mnie.",
          "mina": "mowi"
        },
        {
          "tekst": "Co zrobisz z pieniędzmi w kopercie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Oddam Samowi do ręki. Cztery tygodnie odkładałem po dwadzieścia jeden dolarów. Nie napiszę ani nie zadzwonię, oddam.",
          "mina": "mowi"
        },
        {
          "tekst": "Jak Sam zareaguje?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Odmówi, a ja nie odpuszczę. On jest młodszy, a ja mam czas tylko do końca miesiąca.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "odpis_za_zgoda",
      "etykieta": "Poproś Eliasa o zgodę i zrób odpis kwitu",
      "reakcja": "Zgoda. Powiem to głośno: pan Holt zapłacił, ja przyjąłem. Proszę napisać dokładnie. Dziękuję.",
      "zysk": "Masz odpis kwitu i zeznanie Eliasa jako dowód, że Sam zapłacił, a paczka jechała przez ręce Iris.",
      "strata": "Elias staje się świadkiem w sprawie, której nie wybierał, i będzie o niej pamiętał.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Elias Wren: „Czy ktoś już pokwitował moje zeznanie? Proszę o numer. Jeśli nie, to jutro. — E.W.”"
      }
    },
    {
      "akcja": "wydaj_od_reki",
      "etykieta": "Wydaj oprawkę z całą zawartością od ręki",
      "reakcja": "Dziękuję. Okulary żony. Jutro… nie, już nie jutro. Dziękuję.",
      "zysk": "Elias odbiera oprawkę bez pytań i wraca do domu spokojny.",
      "strata": "Kwit odchodzi z oprawką, więc nie masz dowodu na Sama ani na paczkę od Iris.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Elias przeszedł dziś obok okienka, skłonił głowę i poszedł dalej. Pierwszy raz od trzynastu dni nie zapytał o oprawkę."
      }
    },
    {
      "akcja": "zatrzymaj_koperte",
      "etykieta": "Weź kopertę Eliasa w depozyt dla Sama",
      "reakcja": "Proszę. Osiemdziesiąt pięć dolarów, w kopercie, dla pana Holta. Niech tam leży, aż odważę się go zapytać.",
      "zysk": "Pieniądze Sama są bezpieczne, a Elias nie musi sam się z nim mierzyć.",
      "strata": "Przyjmujesz cudze pieniądze na przechowanie i musisz je zapisać, bo inaczej zostaną po tobie jako dług.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Elias Wren: „Czy koperta nadal leży? Chciałbym ją zobaczyć raz, żeby wiedzieć, że jest. — E.W.”"
      }
    }
  ]
}
```

**Odile Faber, 68, babcia.** Potrzeba: proteza na ślub wnuczki o 10:00. Lęk: wstyd przy zdjęciu rodzinnym. Sekret: jeździ na gapę. Tik: „dziecko”, „kochanie”. Głos: głośna, wesoła. Humor: liczy zęby. Moment gwiazdy: „sześćdziesiąt osiem lat i trzydzieści dwa zęby”.

```json
{
  "id": "d13_odile",
  "dzien": 13,
  "postac": "Odile Faber, 68",
  "glos": "Głośna, wesoła, żartuje z własnych zębów. Mówi „dziecko” do wszystkich, nawet do urzędników.",
  "typ": "uczciwa, zawstydzona",
  "rzecz": "Niebieskie pudełko po herbatnikach",
  "wnetrze": [
    {
      "sekret_id": "d13_mandat",
      "co_widac": "W pudełku na serwetce leży proteza z wygrawerowanymi od spodu inicjałami O.F. Pod nią złożony mandat za jazdę bez biletu, bez pieczątki, z dopiskiem Leo: „zdarza się”.",
      "co_z_tego_wynika": "Odile jeździ bez biletu, a konduktor to przepuszcza. To nic dla sprawy, tylko ludzka rzecz."
    }
  ],
  "wejscie": "Odile Faber, sześćdziesiąt osiem lat i trzydzieści dwa zęby, z czego dwadzieścia osiem moich. Zgubiłam protezę w pudełku po herbatnikach, szóstka, dziś rano. O dziesiątej ślub wnuczki, a zdjęcie rodzinne bez zębów to kara.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda to pudełko?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Okrągłe, niebieskie, po duńskich herbatnikach. Wieczko zagięte, bo siadam na nim na przystanku. W środku serwetka w kwiatki.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu proteza jest w pudełku po herbatnikach?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo w kieszeni by się pogniotła, a w szklance nie wypada. Pudełko jest szczelne i ładnie pachnie.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy jechałaś z biletem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jak zawsze. Skasowany, w kieszeni, kochanie.",
          "mina": "klamie"
        },
        {
          "tekst": "W pudełku jest mandat z dopiskiem Leo: „zdarza się”. Co to?",
          "ton": "niewygodne",
          "wymaga": "d13_mandat",
          "odpowiedz": "Dziecko, emerytura to czterysta dolarów i zęby. Bilet kosztuje tyle co obiad. A Leo to człowiek, więc nie piszcie na niego.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Gdzie jest ślub?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Kościół świętej Łucji, dziesiąta rano. Wnuczka Frida, narzeczony z wąsami jak szczotka. Przysięgam, że ona go kocha.",
          "mina": "mowi"
        },
        {
          "tekst": "Po czym poznasz protezę?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Od spodu ma wygrawerowane O.F. Dentysta mówił: żeby ktoś nie zabrał. Nikt nie zabierze, ale grawer został.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy rodzina wie, że ją zgubiłaś?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nikt. Córce powiedziałam, że mam przeziębienie i jem zupę. Zęby to rzecz prywatna, dziecko.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co powiesz w kościele bez zębów?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Że uśmiecham się wewnętrznie. Frida się popłacze, ja się popłaczę, a wąsaty zacznie mówić o hipotece.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Odile Faber, z kreską nad „e”, kochanie. Jak ktoś źle napisze, wracam.",
          "mina": "neutralna"
        },
        {
          "tekst": "Ile razy jechałaś bez biletu w tym roku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Policzyć? Chyba nie zdążysz, wesele za dwie godziny. Dużo. Ale zawsze z szacunkiem.",
          "mina": "klamie"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję! Frida będzie miała babcię z uśmiechem. Dziecko, jesteś złoto.",
      "zysk": "Odile idzie na ślub z zębami.",
      "strata": "Mandat Leo zostaje w pudełku, więc ślad zostaje w jej rękach, nie u ciebie.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Frida Faber: „Babcia wróciła do domu z zębami i opowiedziała całemu weselu, że w biurze rzeczy znalezionych ktoś ma ludzkie serce. Nie wiem, co to znaczy, ale dziękuję.”"
      }
    },
    {
      "akcja": "zapisz_mandat",
      "etykieta": "Wydaj, ale zapisz mandat Leo do księgi",
      "reakcja": "Zapisujesz? Dziecko, po co. Wpisujcie, co chcecie. Byle zęby były moje.",
      "zysk": "Mandat jest w księdze, więc Urząd widzi, że konduktor przymyka oko, i masz czyste ręce.",
      "strata": "Leo oberwie za „zdarza się”, a Odile już nie wsiądzie do szóstki bez bilecika w kieszeni.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Ktoś dopisał moje „zdarza się” do księgi. Przełożony pytał, ile razy mi się zdarzyło. Odpowiedziałem, że ludzie mają zęby.”"
      }
    },
    {
      "akcja": "wydaj_i_zniszcz_mandat",
      "etykieta": "Wydaj i podrzyj mandat przy niej",
      "reakcja": "Dziecko! Za to dostaniesz ode mnie ciasto. Tylko nie mów Leo, że wiem.",
      "zysk": "Odile i Leo mają spokój, a ślub toczy się dalej.",
      "strata": "Niszczysz dokument bez wpisu, a to się liczy jak wydanie po cichu.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Odile Faber: „Przyniosłam ciasto. Nie, dziecko, nie mów nikomu, że to za mandat. Powiedz, że to za ząb.”"
      }
    }
  ]
}
```


## DZIEŃ 14

**Noah Reyes, 41, policjant.** Potrzeba: podpis Mai albo zamknięcie sprawy do 22. Lęk: że detektyw Evana pójdzie za Mayą i ją znajdzie. Sekret: nie wierzy Evanowi. Tik: „Czyli:”, kładzie rzeczy równo z krawędzią. Moment gwiazdy: zapisuje „dyżurny, bez nazwiska”.

```json
{
  "id": "d14_noah",
  "dzien": 14,
  "postac": "Noah Reyes, 41",
  "glos": "Krótko, prosto, ściszonym głosem. Kładzie rzeczy równo z krawędzią lady. Mówi: „Czyli:”.",
  "typ": "uczciwy, zmęczony",
  "rzecz": "Czarny organizer w skórze z gumką",
  "wnetrze": [
    {
      "sekret_id": "d14_kartka_oswiadczenie",
      "co_widac": "W kieszeni organizera kartka z gotowym oświadczeniem i miejscem na podpis do weryfikacji z Mayą. Obok notatka: „Evan: godzina 23:30, ulotki 22:15?”.",
      "co_z_tego_wynika": "Noah wie, że relacja Evana się nie zgadza, i potrzebuje podpisu Mai, żeby zamknąć sprawę."
    }
  ],
  "wejscie": "Noah Reyes, komisariat przy Rynku. Zgubiłem organizer, czarny, w skórze, z gumką. Mam w nim kartkę do podpisu, która ma dojść do Mai Doyle. Dwudziestego drugiego sprawa idzie wyżej i zaczyna się prawdziwe szukanie.",
  "wejscie_jesli": {
    "d11_maya:przez_okienko": "Noah Reyes, komisariat. Zgubiłem organizer, czarny, w skórze, z gumką. Dostałem od was jedno zdanie od Mai, zapisałem słowo w słowo. Teraz potrzebuję czegoś na piśmie, bo dwudziestego drugiego sprawa idzie wyżej.",
    "d11_maya:powiadom_rodzine": "Noah Reyes, komisariat. Zgubiłem organizer, czarny, w skórze, z gumką. Wiem, że Lena wie, że siostra żyje, i że Maya się wycofała. Dwudziestego drugiego sprawa idzie wyżej, a ja mam tylko puste pole podpisu."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten organizer?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czarny, skóra, gumka na grzbiecie. Pół roku noszony, w rogu wytarty na szaro.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie go zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W szóstce, po dyżurze. Odłożyłem obok termosu i wziąłem termos. Czyli: nie ten sprzęt.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co to za kartka do podpisu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Oświadczenie: że Maya żyje, że odeszła z własnej woli i że nie chce kontaktu. Jej podpis załatwia sprawę. Nie mam pewności, że ona to w ogóle widzi.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Od kiedy prowadzisz tę sprawę?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Od czwartku. Mąż przyszedł o 23:30 z prośbą o poszukiwania i zdjęciem w kopercie.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jeszcze jest w organizerze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Terminy, numery, adres Leny Brandt. I kalendarz, w którym dwudziesty drugi jest zakreślony na czerwono.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu relacja Evana ci nie pasuje?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To moje zmartwienie. Powiem tylko, że ktoś nie mówi mi wszystkiego, a ja wolę pytać cicho.",
          "mina": "neutralna"
        },
        {
          "tekst": "W organizerze jest notatka: „Evan: 23:30, ulotki 22:15?”. Co to?",
          "ton": "niewygodne",
          "wymaga": "d14_kartka_oswiadczenie",
          "odpowiedz": "Że ulotki z twarzą żony zamówił godzinę i kwadrans przed zgłoszeniem. Może zbieg okoliczności. Dlatego sam nie szukam jej na siłę.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co się stanie dwudziestego drugiego?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Sprawa idzie do wydziału, a tam nikt nie pyta, czy ktoś chce być znaleziony. Evan zadzwoni po detektywa. Ponoć za tysiąc dwieście dolarów.",
          "mina": "mowi"
        },
        {
          "tekst": "Mogę przekazać Mai tę kartkę?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Tylko jeśli sama przyjdzie. Nie proszę o szukanie, tylko żeby leżała tu na wypadek.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu tak patrzysz na moją kartę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo pole nazwiska jest puste. Masz przy sobie jakiś dokument? Nie? Zapisuję: dyżurny, bez nazwiska. W nocy różnie bywa.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "rezerwacja_d22",
      "etykieta": "Zarezerwuj dla Mai poufną rozmowę na dzień 22",
      "reakcja": "Czyli: obiecujesz coś w jej imieniu. Dobrze. Jeśli nie przyjdzie, to nie będzie moja wina.",
      "zysk": "Noah wstrzymuje zgłoszenie do 22 i daje Mai szansę, żeby sama przyszła.",
      "strata": "Obiecujesz coś w imieniu Mai, a jeśli się nie pojawi, Noah uzna, że grasz na zwłokę.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Rezerwacja przyjęta. Wpisuję. Czyli: dwudziestego drugiego rano sprawdzam, kto przyszedł.”"
      }
    },
    {
      "akcja": "bez",
      "etykieta": "Zostaw tryb zwykły, bez rezerwacji",
      "reakcja": "Rozumiem. Czyli sprawa idzie normalnym torem. Nic więcej nie mogę.",
      "zysk": "Nie obiecujesz nic, czego nie wiesz, i nie ryzykujesz uwiarygodnienia kłamstwa.",
      "strata": "Dwudziestego drugiego zgłoszenie idzie wyżej, a detektyw Evana zaczyna szukać.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Czyli: bez rezerwacji. Jeśli do 22 nic się nie zmieni, sprawa idzie wyżej. Mówię to teraz, żeby potem nikt nie mówił, że nie uprzedzałem.”"
      }
    },
    {
      "akcja": "list_od_mai",
      "etykieta": "Zaproponuj Noahowi, żeby zostawił kartkę w depozycie dla Mai",
      "reakcja": "Dla Mai, w depozycie. Niech sama zdecyduje, czy podpisze. To uczciwe. Czyli: biorę.",
      "zysk": "Maya sama wybiera, czy podpisze, a Noah nie naciska.",
      "strata": "Jeśli Maya nie wróci po kartkę, Noah zostaje z niczym i z żalem do biura.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Noah Reyes: „Kartka leży w depozycie dla Mai D. Nie wiem, czy ktoś ją przeczyta. Dwudziesty drugi jest blisko. — N.R.”"
      }
    }
  ]
}
```

**Billie Cross, 16, uczennica.** Potrzeba: kask i święty spokój. Lęk: że zadzwonią do szkoły. Sekret: wagary, wiek. Tik: „serio”, „no weź”. Humor: wytłumaczenia z pierwszego miejsca. Moment gwiazdy: trzy wersje wieku w jednej odpowiedzi.

```json
{
  "id": "d14_billie",
  "dzien": 14,
  "postac": "Billie Cross, 16",
  "glos": "Szybko, z dumą, rzuca „serio” i „no weź”. Mówi, że ma osiemnaście, i poprawia się dopiero po trzecim pytaniu.",
  "typ": "wagarowicz, udaje dorosłą",
  "rzecz": "Różowy kask rowerowy z nalepką",
  "wnetrze": [
    {
      "sekret_id": "d14_legitymacja",
      "co_widac": "Pod wyściółką kasku wsunięta legitymacja szkolna: Billie Cross, klasa 2B, rocznik 2009. Obok karteczka: „Dziś nie idę. B.”",
      "co_z_tego_wynika": "Billie ma szesnaście lat i wagaruje. Kłamała o wieku."
    }
  ],
  "wejscie": "No hejka, Billie Cross, osiemnaście lat. Zgubiłam kask, różowy, z nalepką z gwiazdką, w czwórce. Zostawiłam go razem z hulajnogą, bo się spieszyłam, a hulajnoga jest w domu. Potrzebuję kasku na jutro, bo mam egzamin.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten kask?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Różowy, z gwiazdką na nalepce, z tyłu pęknięcie, bo spadłam na schodach. No, może dwa razy.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie dokładnie go zostawiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, w środku, na kolanach. Rozmawiałam przez telefon i nie zauważyłam, że wysiadłam bez niego.",
          "mina": "neutralna"
        },
        {
          "tekst": "Jaki egzamin masz jutro?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Taki… z jazdy. Znaczy z fizyki. Eee, poprawny egzamin, wiesz.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Ile masz lat?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Osiemnaście. No, prawie. Siedemnaście? No dobra, szesnaście i pół. Ale dorosła w środku.",
          "mina": "klamie"
        },
        {
          "tekst": "Gdzie jesteś w nocy, jak mamy wieczór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na hulajnodze. Jeżdżę tam, gdzie nie ma nauczycieli. Raz spotkałam Leo i dał mi herbatę.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu nie jesteś w domu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo w domu pytają, czemu nie jestem w szkole. A w szkole pytają, czemu nie jestem w domu.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego potrzebujesz od nas najbardziej?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Kasku. I żebyście nie dzwonili do szkoły, serio. Mam trzy dni nieobecności i bardzo ładne wytłumaczenie.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Billie Cross. Przez dwa „s”, bo tak ładniej. Podpisuję jak dorosła, patrz.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co się stanie, jeśli kask zostanie u nas?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wtedy pojadę bez kasku. Wiem, wiem, głupio. Ale lepiej głupio niż pod wzrokiem szkoły.",
          "mina": "neutralna"
        },
        {
          "tekst": "Pod wyściółką jest legitymacja szkolna. Czyja?",
          "ton": "niewygodne",
          "wymaga": "d14_legitymacja",
          "odpowiedz": "Moja. Klasa druga B, rocznik dwa tysiące dziewiąty. No dobra, nie kłamię już. Nie dzwońcie.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki, jesteś super! I tak, kask jest mój, mam stos dowodów, tylko że w domu.",
      "zysk": "Billie odzyskuje kask i nie traci jednej nocy.",
      "strata": "Wydajesz kask szesnastolatce, która kłamała o wieku, i nikt o tym nie wie.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Billie Cross: „Kask żyje. Mama zapytała, skąd go mam. Powiedziałam, że z biura rzeczy znalezionych i że tam jest miły człowiek. Mama chce cię poznać.”"
      }
    },
    {
      "akcja": "wydaj_z_poucz",
      "etykieta": "Wydaj kask i powiedz jej wprost, że zna prawdę",
      "reakcja": "No dobra, wiem, wiem. Że wagary, że niebezpiecznie. Mów dalej, zapamiętam połowę.",
      "zysk": "Billie wie, że ktoś to widzi, i może wrócić, żeby porozmawiać.",
      "strata": "Billie traci twarz i przestaje opowiadać prawdziwe rzeczy.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Billie Cross: „Poszłam do szkoły. Całe pół dnia. Powiedz Leo, że herbata była lepsza.”"
      }
    },
    {
      "akcja": "zadzwon_szkola",
      "etykieta": "Zadzwoń do szkoły, że uczennica jest na mieście",
      "reakcja": "Co?! Tylko nie do szkoły! Zabijecie mnie! Dobra, dobra, nie będę już…",
      "zysk": "Szkoła i rodzice wiedzą, gdzie jest Billie.",
      "strata": "Billie przestaje przychodzić do biura i znika nocą z hulajnogą po miejscach, gdzie nikt jej nie zna.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Nastolatka z różowym kaskiem była dziś zgłoszona z powodu wagarów. Powiedziała, że okienko ją sprzedało. Czyli: pamięta.”"
      }
    }
  ]
}
```


## DZIEŃ 15

**Sam Holt, 44, poprzednik.** Potrzeba: referencje do 25. i spokój. Lęk: że kalka wyda ludzi albo jego. Sekret: wyrwał stronę 41, zna prawdę o stronie. Tik: zaczyna od szczegółu technicznego („klamra lewostronna”). Humor: sucha ironia. Łuk: d20, d24 (list), d25. Moment gwiazdy: „Wybieraj: oni albo ja. Przykład: Okoye.” Vera: miejsce-rzecz-nazwisko, dzwoni kluczami.

```json
{
  "id": "d15_sam",
  "dzien": 15,
  "postac": "Sam Holt, 44 i Vera Kovacs, 62",
  "glos": "Sam: najpierw szczegół techniczny, dopiero po dopytaniu prawda; dziwnie spokojny. Vera: miejsce, rzecz, nazwisko; kluczami dzwoni, kiedy się wstydzi.",
  "typ": "poprzednik wraca po swoje",
  "rzecz": "Stalowy zielony termos z wgnieceniem",
  "ludzie": {
    "sam": "Sam Holt",
    "vera": "Vera Kovacs"
  },
  "wnetrze": [
    {
      "sekret_id": "d15_termos_notatka",
      "co_widac": "Na dnie termosu leży zegarek kieszonkowy z kwitem odbioru na imię Sam Holt. Pod zegarkiem kartonik: „Nie pytaj, od czego uciekasz. Nikt nie pyta.”",
      "co_z_tego_wynika": "Sam zostawiał sobie notatki, które brzmią jak rady dla kogoś innego."
    }
  ],
  "wejscie": "Sam Holt. Wezwano mnie po rzeczy z szafki. Zielony termos, stalowy, wgniecenie na pokrywce. Klamra była lewostronna. Vera przyszła ze mną, bo twierdzi, że ktoś ma być przy tym, jak ja tu stoję.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten termos?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Stalowy, zielony, wgnieciony po tym, jak spadł z ciężarówki. Klamra lewostronna, kto robił, myślał o leworęcznych.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie go zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "W szafce na zapleczu, ponad miesiąc temu. Vera zabrała całą szafkę razem z termosem, a teraz wszystko trafiło tu.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu przyszedłeś dopiero teraz?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Bo Vera napisała, że szafkę zamykają. Inaczej bym nie przyszedł. Nie lubię tego miejsca.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Vera, czemu go wezwałaś?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "Bo szafkę zamykają, a on przez miesiąc nie przyszedł po nic. Wolałam, żeby ktoś przy tym był.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu wydałeś Thomasowi rękawiczkę bez wpisu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Bo to pamiątka, nie zguba. Wpis robi z niej zgubę, a on stracił już dość.",
          "mina": "emocja"
        },
        {
          "tekst": "Co się stało ze stroną czterdzieści jeden?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Wyrwałem ją. Wyrwałem, żeby nikt nie miał tych nazwisk. Nie pytaj mnie więcej, bo powiem za dużo.",
          "mina": "emocja"
        },
        {
          "tekst": "W szufladzie jest zatwierdzenie z podpisem Victora. Co to?",
          "ton": "niewygodne",
          "wymaga": "d15_zatwierdzenie_victora",
          "kto": "sam",
          "odpowiedz": "Rozliczenie, które Victor zamknął. Ktoś potem dopisał rzeczy innym tuszem. To nie on, bo on nie zmienia ani przecinka.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego chcesz od biura?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Termosu, zegarka i spokoju. Referencje z portu mam do dwudziestego piątego, bez nich tracę robotę, którą załatwił mi kolega.",
          "mina": "mowi"
        },
        {
          "tekst": "Co mam zrobić z kalką?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Zasłoń nazwiska albo daj mi ją. Jak pokażesz bez zasłony, Nora ma dowód, a czternaście rodzin leży na biurku Urzędu. Wybieraj: oni albo ja. Przykład: Okoye.",
          "mina": "emocja"
        },
        {
          "tekst": "Czemu nie chcesz, żeby Victor ją widział?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Bo nie ufam drugiej kopii. Każda kartka, która idzie dalej, trafia do kogoś, kto ją czyta.",
          "mina": "neutralna"
        },
        {
          "tekst": "Na kalce jest szósta linia, zaklejona. Co tam jest?",
          "ton": "niewygodne",
          "wymaga": "d15_szosta_linia",
          "kto": "sam",
          "odpowiedz": "Nie czytaj tego głośno. Ta linia czeka na kogoś i nie wiem jeszcze, jak ci to powiedzieć. Po prostu nie czytaj dalej przy Victorze.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "uzgodnij",
      "etykieta": "Uzgodnij z Samem, Victorowi daj odpis z zasłoniętymi danymi",
      "kto": "sam",
      "reakcja": "Zasłonięte. Dobrze. Nikt nie powie, że nie próbowałem. Dziękuję.",
      "zysk": "Sam zostaje po twojej stronie, a ludzie z listy nie trafiają do Urzędu.",
      "strata": "Dowód słabnie: bez nazwisk Nora nie wygra z Iris.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Sam Holt: „Nazwiska zasłonięte. Tego się nie zapomina. Dziękuję. — S.H.”"
      }
    },
    {
      "akcja": "victor_od_razu",
      "etykieta": "Przekaż kalkę Victorowi od razu, bez zasłaniania",
      "kto": "sam",
      "reakcja": "Zrobione. Od teraz jestem w papierach i nie mam już nic do dodania.",
      "zysk": "Mocny dowód: Victor ma pełną kalkę i zatwierdzenie z dopiskami.",
      "strata": "Czternaście rodzin trafia do Urzędu, a Sam wycofuje zgodę i przestaje ci ufać.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Victor Crane: „Kalka przyjęta. Pełny egzemplarz. Wiem, że to nie wszystkim się spodoba, ale dowód jest dowodem.”"
      }
    },
    {
      "akcja": "oddaj_samowi",
      "etykieta": "Oddaj kalkę Samowi, bez kopii",
      "kto": "sam",
      "reakcja": "Dziękuję. Spalę ją, zanim się rozmyślę. Nikt jej nie zobaczy, i tak będzie lepiej.",
      "zysk": "Sam zachowuje spokój, a ludzie z kalki są bezpieczni.",
      "strata": "Nie ma żadnego dowodu przeciw Iris ani przeciw Victorowi, a Nora zostaje z pustymi rękami.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Sam Holt: „Spaliłem. Nie pytaj, gdzie. Jeśli cię ktoś zapyta o kalkę, powiedz, że jej nie było. — S.H.”"
      }
    }
  ]
}
```

**Pan Pruitt, 80, samotnik.** Potrzeba: żeby ktoś przyjął jego parasole i pogadał. Lęk: że nikt nie przyjdzie. Sekret: przychodzi, bo nie ma do kogo. Tik: „przy okazji”. Humor: gada do parasoli. Moment gwiazdy: „Nikt nie przyszedł, więc wszystko w porządku.”

```json
{
  "id": "d15_pruitt",
  "dzien": 15,
  "postac": "Pan Pruitt, 80",
  "glos": "Spokojnie, żartobliwie, z pretensją do całego świata. Zawsze „przy okazji”. Mówi do parasoli.",
  "typ": "oddający, samotny",
  "rzecz": "Jedenaście parasoli w siatce na zakupy",
  "wnetrze": [],
  "wejscie": "Pruitt, osiemdziesiąt lat. Przyszedłem oddać parasole. Jedenaście, znalezionych w tym tygodniu. Niczyich, bo nikt po nie nie przyszedł, więc wszystko jest w porządku. Można je gdzieś położyć?",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Skąd masz te parasole?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Z pętli, ławek, kratek na przystankach. W tym tygodniu padało, ludzie zostawiają. Ja zbieram, bo parasol bez człowieka jest smutny.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu dopiero teraz je oddajesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo wcześniej były krótsze. Dziś jest ich jedenaście, a jedenastka to ładna liczba. Poza tym nikt nie pytał, a ja nie narzucam się.",
          "mina": "mowi"
        },
        {
          "tekst": "Dlaczego zbierasz parasole?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo ktoś musi. Moja żona zawsze mówiła, że człowiek, który nie oddaje cudzych rzeczy, nie powinien mieć własnych.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Który parasol jest najstarszy?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Ten czarny, z drewnianą rączką, z siedemdziesiątego dziewiątego. Ma krzywą szprychę. Nie oddaję go, tylko przy okazji pokazuję.",
          "mina": "mowi"
        },
        {
          "tekst": "Co robisz, jak ktoś jednak przyjdzie po parasol?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Wydaję z uśmiechem, bez pytań. Raz przyszła kobieta po parasol w kwiatki i płakała ze szczęścia. Nie wiem dlaczego, ale było miło.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy ktoś kiedykolwiek przyszedł po parasol?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Dwa razy w tym roku. Pozostałe dziewięć czeka. Nikt nie przychodzi, więc wszystko w porządku. Tak sobie mówię.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co mam z nimi zrobić?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Położyć gdzieś, gdzie nie zmokną. Niech czekają, jak ja. Nie lubię, jak się marnują.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz zdanie zbiorcze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Pruitt. Bez imienia, tak jak mnie wołają. Jedenaście sztuk, każda z numerkiem. Mam kredę.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu nie zostawisz ich na przystanku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo mokną, bo wiatr, bo wredni ludzie. I bo gdybym zostawił, nie miałbym po co tu przychodzić.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "przyjmij_wpis",
      "etykieta": "Przyjmij wszystkie i wpisz je do księgi, po jednym",
      "reakcja": "Jedenaście pozycji! Dziękuję, to się nazywa porządek.",
      "zysk": "Parasole są w księdze i mogą wrócić do właścicieli, jeśli ktoś przyjdzie.",
      "strata": "Zajmuje to dziesięć minut zmiany, a kolejka rośnie.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Pruitt: „Przyszła kobieta po parasol w kwiatki. Płakała. Powiedziałem jej, że wpisaliście wszystko. Chyba nie wie, jak ładnie to brzmi.”"
      }
    },
    {
      "akcja": "przyjmij_bez_wpisu",
      "etykieta": "Przyjmij parasole bez wpisu, żeby nie tracić czasu",
      "reakcja": "Dziękuję. Oby nie zmokły. I niech nikt nie pyta, skąd się wzięły.",
      "zysk": "Oszczędzasz czas, a Pruitt odchodzi uśmiechnięty.",
      "strata": "Rzeczy leżą w biurze bez śladu w księdze, a licznik „bez wpisu” rośnie.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Pruitt: „Szukałem parasola w kwiatki w waszej księdze, ale go tam nie było. Może to wina mojego wzroku.”"
      }
    },
    {
      "akcja": "odeslij",
      "etykieta": "Odeślij Pruitta na komisariat z parasolami",
      "reakcja": "Na komisariat? W moim wieku? Dobrze. Parasole poczekają na deszcz.",
      "zysk": "Zyskujesz dziesięć minut i nie zaśmiecasz biura.",
      "strata": "Pruitt wraca do domu z jedenastoma parasolami i znowu nikt do niego nie przychodzi.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Pruitt: „Wróciłem z parasolami do domu. Postawiłem je w przedpokoju. Chyba się obraziły. — P.”"
      }
    }
  ]
}
```


```json
{
  "extra": {
    "15": {
      "sprite": "kalka",
      "itemName": "kalka z szuflady",
      "line": "6",
      "inside": null,
      "wnetrze": [
        {
          "sekret_id": "d15_kalka_41",
          "co_widac": "Kalka strony 41: pięć pozycji klientów i czternaście wpłat lokatorów po 400 $. Linie od jeden do pięć są czytelne, szósta zaklejona taśmą.",
          "co_z_tego_wynika": "To brakująca strona. Dowód dla Nory, ale i lista ludzi, których można znaleźć."
        },
        {
          "sekret_id": "d15_zatwierdzenie_victora",
          "co_widac": "Zatwierdzenie rozliczenia z podpisem Victora. Pod spodem dopiski innym tuszem.",
          "co_z_tego_wynika": "Po zamknięciu audytu ktoś jeszcze poprawiał rozliczenie."
        },
        {
          "sekret_id": "d15_szosta_linia",
          "co_widac": "Pod taśmą szósta linia: „0809 / dyżurny nast. / ____”. Ołówkiem Sam dopisał: „Jeśli to czytasz, nie czytaj dalej przy Victorze.”",
          "co_z_tego_wynika": "Na stronie była linia dla następnego dyżurnego, z pustym polem na imię. Ktoś ją zakleił celowo."
        }
      ]
    }
  },
  "wieczor": {
    "11": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zapytał o oprawkę. Dodał, że dziewczynka z królikiem powiedziała mu na ulicy: „Ktoś tu pana poznaje.” Nie wie, co miała na myśli, ale mu się podobało."
      }
    ],
    "12": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zapytał, czy ktoś wyjechał. O świcie przejeżdżał pociąg 5:40. Powiedział, że takie rzeczy się słyszy, nawet jeśli nikt nie opowiada."
      },
      {
        "kto": "Kuba Marlow, przez kuzyna",
        "tekst": "„Rata sześćdziesiąt plus piętnaście odsetek. Kuba pyta, czy ten człowiek z paczką przy szybie to klient. Mówi, że jak ma interes, to można się dogadać. K.M.”"
      }
    ],
    "13": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias po raz pierwszy zrozumiał, że ktoś wypełnił za niego rzecz, o którą nie prosił. Siedział długo. Potem zapytał, czy wolno mu przyjść jutro, bez numerka."
      }
    ],
    "14": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zapytał, czy podpis do dwudziestego drugiego to termin, czy prośba. Odpowiedział sam sobie: „Termin. Dla mnie zawsze termin.” Wziął suchy numerek."
      },
      {
        "kto": "Kuba Marlow, pod bramą",
        "tekst": "Stał na przystanku z kolegą. Powiedział głośno: „Czasem pożyczka to nie jest pieniądz. Czasem to zostawianie sobie otwartych drzwi.” Kolega się zaśmiał. Ty nie."
      }
    ],
    "15": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zobaczył Sama przez szybę i przez chwilę nic nie mówił. Złożył numerek w prostokąt i wyszedł. Na ladzie została koperta z napisem: „S. Dla pana Holta. Od E.W.”"
      }
    ]
  }
}
```
