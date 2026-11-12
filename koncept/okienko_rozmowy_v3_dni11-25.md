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
  ],
  "rola": "elektryczka, która układa zasady",
  "watki": [
    "Zaginiona",
    "Fotel"
  ],
  "tik": "liczy „raz, dwa, trzy”",
  "potrzeba": "sama zdecydować, kto wie",
  "slad": "pierwszy z trzech testów, które robi okienku"
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
          "odpowiedz": "Klucze, tabletki na ból głowy i kartka z zakupami. Nic więcej.",
          "mina": "mowi"
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
          "odpowiedz": "Zakupy. Mleko, chleb. Ale proszę jej nie czytać, bo jest głupia.",
          "mina": "emocja"
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
        "tekst": "W rejestrze jest wpis o wpłacie 400 $ rodziny Okoye. Dziękuję. Przy następnej wizycie zapytam, co z oryginałami. — N. Vance"
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
  ],
  "rola": "pielęgniarka z nocnej zmiany",
  "watki": [
    "kamienica",
    "pieniądze"
  ],
  "tik": "liczy czas godzinami dyżuru",
  "potrzeba": "torebka z kartą na szóstą",
  "slad": "wpłaciła 400 $ i nie ma papieru"
}
```


## DZIEŃ 12

**Iris Bell, Nora Vance, Ada Vale.** Iris: potrzeba kasetki, lęk że wyjdą papiery czterech osób, sekret: 6 800 $ od miasta, tik „nie lubię naciskać”. Nora: potrzeba oryginałów do czwartku, 9.09, lęk że Okoye zapłacą drugi raz, sekret: sama kiedyś odebrała paczkę, tik „po kolei”. Ada: potrzeba, żeby dorośli przestali się kłócić. Moment gwiazdy: Ada o szufladzie, którą Iris otwiera bez patrzenia.

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
          "odpowiedz": "Rachunki. Karty rozliczeń kamienicy, nic ponad to. To nasze, lokatorów i moje.",
          "mina": "klamie"
        },
        {
          "tekst": "Czego dokładnie żądasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Oryginałów pokwitowań zaliczek: czternaście rodzin, po 400 dolarów, termin czwartek, dziewiąty września. Bez nich Okoye zapłacą drugi raz, a ja nie mam jak tego udowodnić.",
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
          "odpowiedz": "Miasta, lokatorów i moje, w kolejności, w jakiej je rozdzieliłam. Nora policzyła jedną stronę. To prawie uczciwe rozliczenie.",
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
          "odpowiedz": "Bo jak Nora je pokaże, wyjdzie też to, co leży obok: papiery czterech osób, które już kupiły bilet. Czternaście rodzin czy czterech ludzi? To nie jest pytanie retoryczne.",
          "mina": "mowi"
        },
        {
          "tekst": "Co się stanie w czwartek, dziewiątego września?",
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
          "odpowiedz": "Są na liście inspekcji: dla niego drobiazg, dla nich wyrok. Tu nie mam wyboru.",
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
          "odpowiedz": "Czekają. Do soboty żaden z czterech nie dostanie dokumentu, a jedna rodzina jedzie o 5:40 rano. Nie mówię tego jak groźbę, to rozkład jazdy.",
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
      "zysk": "Oryginały leżą w biurze za pokwitowaniem, więc Nora ma szansę przed czwartkiem.",
      "strata": "Iris cię zapamięta, a papiery czterech osób leżą obok oryginałów i przestają być bezpieczne.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Dziś rano dwóch lokatorów odmówiło mi zaliczek. Zastanawiam się dlaczego.”"
      }
    },
    {
      "akcja": "wydaj_iris",
      "etykieta": "Wydaj kasetkę Iris",
      "kto": "iris",
      "reakcja": "Dziękuję. Zawsze miło, kiedy ktoś rozumie. Drobna przysługa, nic więcej.",
      "zysk": "Papiery czterech osób zostają poza księgą i poza Urzędem.",
      "strata": "Oryginały odpływają, a rodzina Okoye zapłaci 400 $ drugi raz.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Wiem, że kasetkę wydano. Okoye wpłacą drugi raz do czwartku. Zapisałam, kto stał przy szybie. — N. Vance"
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
  ],
  "rola": "zarządczyni, prawniczka i dziecko przy kasetce",
  "watki": [
    "Skrytka",
    "kamienica"
  ],
  "tik": "Iris „drobna przysługa”, Nora „po kolei”",
  "potrzeba": "kasetka z oryginałami pokwitowań",
  "slad": "drugi papier: 6 800 $ wpłaty miasta"
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
          "odpowiedz": "Mechanizm i coś, czego wolałabym nie pokazywać. Proszę nie zdejmować dna.",
          "mina": "emocja"
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
          "odpowiedz": "Wiem, Iris mi powiedziała. Pociąg mam o 5:40, depozyt do soboty. Czyli wyjadę bez papieru albo wcale.",
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
        "tekst": "Iris Bell: „Pewna matka z synem nie wsiadła rano do pociągu. Ktoś tu się pomylił i będzie to droga pomyłka.”"
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
  ],
  "rola": "matka z synem w drodze",
  "watki": [
    "Skrytka"
  ],
  "tik": "zaczyna od „proszę”",
  "potrzeba": "pozytywka, żeby Milo zasnął",
  "slad": "numer 0623 ukryty pod dnem pozytywki"
}
```


## DZIEŃ 13

**Elias Wren, 73, emeryt.** Potrzeba: oprawka żony i wiedza, czemu Sam za nią zapłacił. Lęk: być komuś dłużny. Sekret: przyjął zwrot, choć wiedział, że Sam płaci z własnych; od czterech tygodni odkłada 84 $. Tik: składa numerek w prostokąt, „Dziękuję. Jutro.” Łuk: w d25 pyta o imię gracza. Moment gwiazdy: „Pan Holt nie miał nazwiska na karcie przez dwa lata.

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
      "co_widac": "Za wyściółką futerału złożony kwit zwrotu pieniędzy: 84 $, podpis S. Holt. Numer paczki zgadza się z wykazem z piórnika Iris.",
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
  ],
  "rola": "emeryt z długiem wdzięczności",
  "watki": [
    "Poprzednik",
    "Fotel"
  ],
  "tik": "składa numerek w prostokąt",
  "potrzeba": "oprawka żony i pytanie o Sama",
  "slad": "od czterech tygodni odkłada 84 $"
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
          "odpowiedz": "Dziś nie. Spieszyłam się na wesele i nie skasowałam. Zapłacę mandat, kochanie.",
          "mina": "emocja"
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
          "mina": "mowi"
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
  ],
  "rola": "babcia z protezą na ślub",
  "watki": [
    "humor"
  ],
  "tik": "mówi „dziecko”, „kochanie”",
  "potrzeba": "proteza przed ślubem o dziesiątej",
  "slad": "jeździ na gapę i zapisuje mandat"
}
```

**Tess Rusk, 33, siostra elektryka.** Potrzeba: skrzynka i zegarek brata Tobiasa, wyłowionego z kanału trzy lata temu. Lęk: że to nie był wypadek. Sekret: zegarek dała mu sama. Tik: kończy zdania i czeka, aż ktoś ją poprawi. Wątek: Kanał (skrzynka z dnia 3, ogłoszenie na słupie). Moment gwiazdy: „Nie chciałam wiedzieć. Dopiero ogłoszenie ruszyło mnie z miejsca.”

```json
{
  "id": "d13_tess",
  "dzien": 13,
  "postac": "Tess Rusk, 33",
  "glos": "Mówi wolno, jakby liczyła słowa. Każde zdanie kończy tak, jakby czekała, aż ktoś ją poprawi. Nie płacze.",
  "typ": "uczciwa, uparta",
  "rzecz": "Zielona metalowa skrzynka z dnia trzeciego",
  "wnetrze": [
    {
      "sekret_id": "d13_zegarek_tr",
      "co_widac": "Na kopercie męskiego zegarka grawer: „T.R. — od T.”. Wskazówki stoją na 23:15, szkiełko ma pęknięcie w rogu.",
      "co_z_tego_wynika": "Zegarek należał do Tobiasa Rusk. „T.” to Tess, która dała go bratu na trzydzieste urodziny."
    },
    {
      "sekret_id": "d13_karta_szafki",
      "co_widac": "W przegródce klucz z mosiężnym numerkiem i karta z numerem szafki, pisanym ołówkiem. Karta jest zgięta w czwórkę, od dawna.",
      "co_z_tego_wynika": "Brat miał gdzieś szafkę, o której siostra nie wie. Klucz otwiera ją tylko z tą kartą."
    }
  ],
  "wejscie": "Tess Rusk. Pytam o zieloną skrzynkę z numerem trzy na wieczku. Leży tu od trzech lat, tak mi powiedziano. Należała do mojego brata Tobiasa. Wyłowili go z kanału, a skrzynki nie znaleźli. Chcę ją zobaczyć.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta skrzynka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zielona, metalowa, z trójką wybitą na wieczku. Zamek zacięty, otwiera się płaskim śrubokrętem. Tobias dostał ją od ojca razem z zawodem.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie ją zostawił twój brat?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie on. Ktoś znalazł ją w tramwaju i oddał tu. Dopiero niedawno zobaczyłam ogłoszenie na słupie i skojarzyłam wieczko.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu przychodzisz dopiero teraz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo przez trzy lata nie chciałam wiedzieć. Policja powiedziała: wypadek. Dopiero ogłoszenie na słupie ruszyło mnie z miejsca.",
          "mina": "emocja"
        },
        {
          "tekst": "Na zegarku jest grawer „T.R. — od T.”. Od kogo?",
          "ton": "niewygodne",
          "wymaga": "d13_zegarek_tr",
          "odpowiedz": "Ode mnie. T. jak Tess, R. jak Rusk. Dałam mu go na trzydzieste urodziny. Nosił na lewej ręce i nigdy nie zdejmował.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kim był twój brat?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Tobias Rusk, elektryk. Cichy, punktualny, nie pytał o więcej, niż trzeba. Brał nocne zmiany i nigdy nie mówił gdzie.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jest w skrzynce poza zegarkiem?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Klucz z numerkiem i karta z numerem szafki. Nie wiem, której. Chcę ją otworzyć sama, zanim ktoś mi powie, co w niej leży.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu uważasz, że to nie był wypadek?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo Tobias pływał jak ryba. Bo nie miał zegarka, kiedy go znaleźli. Nic z tego nie jest dowodem, a ja się tym żywię.",
          "mina": "emocja"
        },
        {
          "tekst": "Na karcie jest numer szafki. Czyja to szafka?",
          "ton": "niewygodne",
          "wymaga": "d13_karta_szafki",
          "odpowiedz": "Brata, tak mi się zdaje. Nie wiem, gdzie stoi. Jeśli wiesz, nie mów na głos. Chcę ją zobaczyć dopiero z kluczem w ręku.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz, jeśli dostaniesz skrzynkę?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zawiozę zegarek do rzeczoznawcy. Chcę papier, że stanął o konkretnej godzinie. Reszta to już nie moja robota, tylko policji.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Tess Rusk. Dwa „s” na końcu nazwiska? Nie, jedno. Podpisuję równo, bo ojciec nauczył.",
          "mina": "neutralna"
        },
        {
          "tekst": "Kto jeszcze pytał o tę skrzynkę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nikt. Dopiero ja. Jeśli ktoś pytał wcześniej, powiedz mi, kto. Naprawdę chcę wiedzieć.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj_tess",
      "etykieta": "Wydaj skrzynkę Tess",
      "reakcja": "Dziękuję. Nie zapomnę, że ktoś mi uwierzył na słowo.",
      "zysk": "Tess dostaje zegarek brata i klucz, a z nimi pierwszy ślad od trzech lat.",
      "strata": "Skrzynka wychodzi bez ekspertyzy i bez wpisu, a ktoś może zapytać, kto ją wydał.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Tess Rusk: „Otworzyłam szafkę. Pusta, poza kartką z jednym słowem: Kanał. Nie wiem, co to znaczy, ale ktoś tam był przede mną. — T.R.”"
      }
    },
    {
      "akcja": "zatrzymaj_ekspertyza",
      "etykieta": "Zatrzymaj skrzynkę do ekspertyzy zegarka",
      "reakcja": "Papier? Dobrze. Wolę czekać na papier niż dostać pustą skrzynkę. Ale wrócę.",
      "zysk": "Zegarek idzie do rzeczoznawcy i masz godzinę, o której stanął.",
      "strata": "Tess czeka kolejne dni i może przestać Ci ufać.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Tess Rusk: „Ekspertyza. Zegarek stanął o 23:15. Nic mi to nie mówi, ale spisałam sobie tę godzinę. Ty też spisz.”"
      }
    },
    {
      "akcja": "odeslij_noah",
      "etykieta": "Odeślij Tess do Noaha Reyesa",
      "reakcja": "Policja? Trzy lata temu powiedzieli mi: wypadek. Ale dobrze, spróbuję jeszcze raz.",
      "zysk": "Sprawa trafia do kogoś, kto prowadzi akta, a Ty nie dotykasz skrzynki.",
      "strata": "Tess odchodzi z niczym, a skrzynka dalej leży w depozycie bez właściciela.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Noah Reyes: „Przyszła kobieta z pytaniem o wypadek sprzed trzech lat. Czyli: zapisałem. Nie obiecuję, że ktoś to otworzy. — N.R.”"
      }
    }
  ],
  "rola": "siostra zmarłego elektryka",
  "watki": [
    "kanal"
  ],
  "tik": "kończy zdania i czeka na poprawkę",
  "potrzeba": "skrzynka i zegarek brata, ekspertyza godziny",
  "slad": "zegarek z grawerem T.R. od T. i klucz"
}
```


## DZIEŃ 14

**Noah Reyes, 42, policjant.** Potrzeba: podpis Mai albo zamknięcie sprawy do wtorku, siódmego września. Lęk: że detektyw Evana pójdzie za Mayą i ją znajdzie. Sekret: nie wierzy Evanowi. Tik: „Czyli:”, kładzie rzeczy równo z krawędzią. Moment gwiazdy: zapisuje „dyżurny, bez nazwiska”.

```json
{
  "id": "d14_noah",
  "dzien": 14,
  "postac": "Noah Reyes, 42",
  "glos": "Krótko, prosto, ściszonym głosem. Kładzie rzeczy równo z krawędzią lady. Mówi: „Czyli:”.",
  "typ": "uczciwy, zmęczony",
  "rzecz": "Czarny organizer w skórze z gumką",
  "wnetrze": [
    {
      "sekret_id": "d14_kartka_oswiadczenie",
      "co_widac": "W kieszeni organizera kartka z gotowym oświadczeniem i miejscem na podpis do weryfikacji z Mayą. Obok notatka: „Evan: zgłoszenie 6:10, ulotki 22:15?”.",
      "co_z_tego_wynika": "Noah wie, że relacja Evana się nie zgadza, i potrzebuje podpisu Mai, żeby zamknąć sprawę."
    }
  ],
  "wejscie": "Noah Reyes, komisariat przy Rynku. Zgubiłem organizer, czarny, w skórze, z gumką. Mam w nim kartkę do podpisu, która ma dojść do Mai Doyle. We wtorek, siódmego września, sprawa idzie wyżej i zaczyna się prawdziwe szukanie.",
  "wejscie_jesli": {
    "d11_maya:przez_okienko": "Noah Reyes, komisariat. Zgubiłem organizer, czarny, w skórze, z gumką. Dostałem od was jedno zdanie od Mai, zapisałem słowo w słowo. Teraz potrzebuję czegoś na piśmie, bo do wtorku, siódmego września, sprawa idzie wyżej.",
    "d11_maya:powiadom_rodzine": "Noah Reyes, komisariat. Zgubiłem organizer, czarny, w skórze, z gumką. Wiem, że Lena wie, że siostra żyje, i że Maya się wycofała. We wtorek, siódmego września, sprawa idzie wyżej, a ja mam tylko puste pole podpisu.",
    "d11_maya:szept_lenie": "Noah Reyes, komisariat. Zgubiłem organizer, czarny, w skórze, z gumką. Lena Brandt była u mnie i powiedziała, że siostra żyje. Nie powiedziała skąd. Mam kartkę do podpisu i puste pole, więc przyszedłem tutaj."
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
          "odpowiedz": "Od piątku, szóstego sierpnia. Mąż przyszedł o 6:10 rano z prośbą o poszukiwania i zdjęciem w kopercie.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jeszcze jest w organizerze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Terminy, numery, adres Leny Brandt. I kalendarz, w którym wtorek, siódmy września, jest zakreślony na czerwono.",
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
          "tekst": "W organizerze jest notatka: „Evan: 6:10, ulotki 22:15?”. Co to?",
          "ton": "niewygodne",
          "wymaga": "d14_kartka_oswiadczenie",
          "odpowiedz": "Że ulotki z twarzą żony zamówił osiem godzin przed zgłoszeniem. Może zbieg okoliczności. Dlatego sam nie szukam jej na siłę.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co się stanie we wtorek, siódmego września?",
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
      "zysk": "Noah wstrzymuje zgłoszenie do wtorku i daje Mai szansę, żeby sama przyszła.",
      "strata": "Obiecujesz coś w imieniu Mai, a jeśli się nie pojawi, Noah uzna, że grasz na zwłokę.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Rezerwacja przyjęta. Wpisuję. Czyli: we wtorek o szóstej rano sprawdzam, kto przyszedł.”"
      }
    },
    {
      "akcja": "bez",
      "etykieta": "Zostaw tryb zwykły, bez rezerwacji",
      "reakcja": "Rozumiem. Czyli sprawa idzie normalnym torem. Nic więcej nie mogę.",
      "zysk": "Nie obiecujesz nic, czego nie wiesz, i nie ryzykujesz uwiarygodnienia kłamstwa.",
      "strata": "We wtorek, siódmego września, zgłoszenie idzie wyżej, a detektyw Evana zaczyna szukać.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Czyli: bez rezerwacji. Jeśli do wtorku nic się nie zmieni, sprawa idzie wyżej. Mówię to teraz, żeby potem nikt nie mówił, że nie uprzedzałem.”"
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
        "tekst": "Noah Reyes: „Kartka leży w depozycie dla Mai D. Nie wiem, czy ktoś ją przeczyta. Wtorek jest blisko. — N.R.”"
      }
    }
  ],
  "rola": "policjant, który zamyka sprawę",
  "watki": [
    "Zaginiona"
  ],
  "tik": "kładzie rzeczy równo z krawędzią",
  "potrzeba": "podpis Mai do wtorku",
  "slad": "zapisuje gracza: „dyżurny, bez nazwiska” jako pustkę"
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
  ],
  "rola": "szesnastolatka udająca dorosłą",
  "watki": [
    "humor"
  ],
  "tik": "mówi „serio”, „no weź”",
  "potrzeba": "kask i święty spokój",
  "slad": "trzy wersje wieku w jednym zdaniu"
}
```


## DZIEŃ 15

**Sam Holt, 44, poprzednik.** Potrzeba: referencje do piątku, 10.09, i spokój. Lęk: że kalka wyda ludzi albo jego. Sekret: wyrwał stronę 41, zna prawdę o stronie. Tik: zaczyna od szczegółu technicznego („klamra lewostronna”). Humor: sucha ironia. Łuk: d20, d24 (list), d25. Moment gwiazdy: „Wybieraj: oni albo ja. Przykład: Okoye.” Vera: miejsce-rzecz-nazwisko, dzwoni kluczami.

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
          "odpowiedz": "Termosu, zegarka i spokoju. Referencje z portu mam do piątku, dziesiątego września, bez nich tracę robotę, którą załatwił mi kolega.",
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
  ],
  "rola": "poprzednik, który wraca po swoje",
  "watki": [
    "Poprzednik",
    "Skrytka",
    "Fotel"
  ],
  "tik": "zaczyna od szczegółu technicznego",
  "potrzeba": "referencje i spokój do piątku",
  "slad": "kalka strony 41 z szóstą linią"
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
  "wnetrze": [
    {
      "sekret_id": "d15_pruitt_kartka",
      "co_widac": "Do siatki przypięta kartka z jedenastoma linijkami. Przy każdym parasolu miejsce i dzień znalezienia. Przy jednym dopisek: „Ulubiony, E.W. na rączce.”",
      "co_z_tego_wynika": "Pruitt prowadzi własną ewidencję znalezionych parasoli i zna je po imieniu, więc oddaje nie bez powodu."
    }
  ],
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
        },
        {
          "tekst": "Do siatki przypięta jest kartka z miejscami. Po co ją prowadzisz?",
          "ton": "niewygodne",
          "wymaga": "d15_pruitt_kartka",
          "odpowiedz": "Żeby wiedzieć, skąd który. Człowiek, który wraca po parasol, zawsze mówi: na pętli. A ja wiem, na której i o której. To też jest kwit.",
          "mina": "mowi"
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
  ],
  "rola": "samotnik z parasolami",
  "watki": [
    "humor"
  ],
  "tik": "mówi „przy okazji”",
  "potrzeba": "ktoś, kto przyjmie parasole",
  "slad": "oddaje parasole, żeby było do kogo gadać"
}
```


# TYDZIEŃ 4: CENA


## DZIEŃ 16

**Maya i Lena.** Maya: potrzeba, by siostra przestała decydować; lęk, że ktoś ją zamknie w swoim planie; sekret: ma plan wyjazdu na 21.; tik „raz, dwa, trzy”. Lena: potrzeba wiedzieć, że siostra bezpieczna; lęk, że jest zbędna; sekret: załatwiła mieszkanie; tik „ale…”. Moment gwiazdy: „Kto odbiera ważną rzecz, sprawdza okienko trzy razy. Dziś drugi raz.”

```json
{
  "id": "d16_maya_lena",
  "dzien": 16,
  "postac": "Maya Doyle i Lena Brandt",
  "glos": "Maya: precyzyjnie, liczy do trzech. Lena: szybko, urywa „ale…”, mówi za dużo.",
  "typ": "dwie siostry, jedno okienko",
  "rzecz": "Granatowa saszetka podróżna",
  "ludzie": {
    "maya": "Maya Doyle",
    "lena": "Lena Brandt"
  },
  "wnetrze": [
    {
      "sekret_id": "d16_kartka_walizka",
      "co_widac": "W jednej przegródce dwa żetony bagażowe i kartka pisana równym pismem Mai: „Lena: jedna rzecz. Walizkę do czwórki, wtorek, 6:10. Jak wybierzesz ją zamiast mnie, nie przyjdę.”",
      "co_z_tego_wynika": "Maya prosi siostrę o jedną rzecz i zostawia warunek."
    },
    {
      "sekret_id": "d16_najem_lena",
      "co_widac": "W drugiej przegródce potwierdzenie najmu mieszkania na nazwisko Mai, podpisane przez Lenę tydzień temu.",
      "co_z_tego_wynika": "Lena załatwiła już przeprowadzkę, o której Maya nie wiedziała."
    }
  ],
  "wejscie": "Maya Doyle. Zostawiłam w jedenastce granatową saszetkę podróżną. Obok stoi Lena, moja siostra, i mówi, że saszetka jest jej. To nieprawda. Chcę ją odebrać sama i powiedzieć Lenie jedną rzecz.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta saszetka?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Granatowa, na zamek, z haftem w rogu: M.D. Dwie przegródki: w jednej rzeczy podróżne, w drugiej papiery.",
          "mina": "mowi"
        },
        {
          "tekst": "Lena, czemu twierdzisz, że to twoja saszetka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "lena",
          "odpowiedz": "Bo ją kupiłam. Na podróż dla Mai, tydzień temu. Maya ją zgubiła, a ja przyszłam sprawdzić, czy biuro ją ma.",
          "mina": "emocja"
        },
        {
          "tekst": "Czemu przyszłyście razem?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Po raz pierwszy w kolejce. Nie planowałam tego. Lena stanęła za mną, a ja policzyłam: raz, dwa, trzy. Zostałam.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Maya, co chcesz powiedzieć siostrze?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Że przestała mnie ratować. Pomogła, dziękuję. Ale od tygodnia decyduje, gdzie mam spać i z kim rozmawiać.",
          "mina": "mowi"
        },
        {
          "tekst": "Lena, czego chcesz od Mai?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "lena",
          "odpowiedz": "Żeby powiedziała, gdzie jest. Ale… chcę tylko wiedzieć, czy bezpieczna. Naprawdę tylko tyle.",
          "mina": "emocja"
        },
        {
          "tekst": "Co jest w drugiej przegródce?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Karteczka dla Leny i dwa żetony bagażowe. Walizka jest w depozycie, ale nie tu. Dlatego te żetony.",
          "mina": "neutralna"
        },
        {
          "tekst": "Jest tu potwierdzenie najmu mieszkania na nazwisko Mai. Czyje?",
          "ton": "niewygodne",
          "wymaga": "d16_najem_lena",
          "kto": "lena",
          "odpowiedz": "Moje. To znaczy… ja załatwiłam. Tydzień temu. Chciałam jej zrobić niespodziankę. Ale… ona o tym nie wiedziała.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co chcesz, żeby Lena zrobiła?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Jedną rzecz. Odwieźć walizkę do tramwaju we wtorek o 6:10. Tylko to, nic więcej.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy wtorek jest pewny?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Jeśli Lena wybierze mnie, a nie siebie, przyjdę. Jak wybierze siebie, nie przyjdę. Kto odbiera ważną rzecz, sprawdza okienko trzy razy. Dziś drugi raz.",
          "mina": "neutralna"
        },
        {
          "tekst": "Lena, czemu załatwiłaś mieszkanie bez pytania?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "lena",
          "odpowiedz": "Bo… bo wiedziałam, że ona nie poprosi. Ale… ona ma prawo… tak, wiem. Muszę przestać planować.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "maya_sama",
      "etykieta": "Pozwól Mai powiedzieć to siostrze osobiście",
      "kto": "maya",
      "reakcja": "Raz. Dwa. Trzy. Tak. Lena, słuchaj. Przestań decydować, a ja przyjdę we wtorek.",
      "zysk": "Maya zachowuje sprawczość i zalicza ci drugi test zaufania.",
      "strata": "Lena ma żal, że usłyszała to w kolejce, a nie w domu.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Lena Brandt: „Maya powiedziała mi to przy okienku. Pierwszy raz od dwóch lat nie przerwałam. Dziękuję, że wybór został przy nas. — L.”"
      }
    },
    {
      "akcja": "lena_zalatwia",
      "etykieta": "Oddaj saszetkę Lenie do załatwienia",
      "kto": "lena",
      "reakcja": "Ale… dobrze. Wszystko załatwię. Maya… no właśnie. Nie patrz tak.",
      "zysk": "Lena dostaje rolę i czuje się potrzebna.",
      "strata": "Maya wycofuje zgodę na pośrednictwo i traci zaufanie do okienka.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Maya Doyle: „Saszetka wróciła do Leny. Policzyłam: raz, dwa, trzy. Wiem, co zrobię. Nie we wtorek.”"
      }
    },
    {
      "akcja": "bez_decyzji",
      "etykieta": "Zatrzymaj saszetkę, niech siostry same się dogadają",
      "reakcja": "Rozumiem. Raz, dwa, trzy. Zostaje u was. Wrócę, jak będzie czas.",
      "zysk": "Nikt nie wygrywa i nikt nie traci twarzy.",
      "strata": "Maya nie dostaje swojej rzeczy, a Lena planuje dalej bez pytania.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Lena Brandt: „Saszetka leży u was. Pytałam Mai, czy to dobrze. Powiedziała: policzyłam. Nie wiem, co to znaczy, ale mi odpowiedziała.”"
      }
    }
  ],
  "rola": "dwie siostry przy saszetce",
  "watki": [
    "Zaginiona",
    "Fotel"
  ],
  "tik": "Maya liczy, Lena mówi „ale…”",
  "potrzeba": "saszetka i jedno zdanie siostry",
  "slad": "drugi test Mai: wybór zostaje jej",
  "wejscie_jesli": {
    "d11_maya:przez_okienko": "Maya Doyle. Zostawiłam w jedenastce granatową saszetkę podróżną. Noah dostał ode mnie jedno zdanie, więc wiem, że to biuro umie milczeć. Obok stoi Lena i mówi, że saszetka jest jej. To nieprawda. Chcę ją odebrać sama i powiedzieć Lenie jedną rzecz.",
    "d11_maya:powiadom_rodzine": "Maya Doyle. Zostawiłam w jedenastce granatową saszetkę podróżną. Lena wie, że żyję, bo biuro jej to powiedziało, choć nie prosiłam. Stoi obok i mówi, że saszetka jest jej. To nieprawda. Chcę ją odebrać sama i powiedzieć Lenie jedną rzecz.",
    "d11_maya:szept_lenie": "Maya Doyle. Zostawiłam w jedenastce granatową saszetkę podróżną. Lena wie, że żyję, bo ktoś jej to szepnął, i wiem, że nie ja. Stoi obok i mówi, że saszetka jest jej. To nieprawda. Chcę ją odebrać sama i powiedzieć Lenie jedną rzecz."
  }
}
```

**Dorian Lund, 45, kasetowiec.** Potrzeba: kaseta i cisza do soboty. Lęk: że ktoś go znajdzie. Sekret: numer 0731, wyjeżdża. Tik: cytuje tytuły piosenek. Moment gwiazdy: „Pokwitowanie niech będzie na kasetę, nie na człowieka.”

```json
{
  "id": "d16_dorian",
  "dzien": 16,
  "postac": "Dorian Lund, 45",
  "glos": "Cicho, z ironią, cytuje tytuły piosenek zamiast odpowiedzi. Nigdy nie mówi, od czego ucieka.",
  "typ": "uczciwy, boi się",
  "rzecz": "Pudełko po kasecie magnetofonowej z ręcznie podpisaną kasetą",
  "wnetrze": [
    {
      "sekret_id": "d16_kaseta_0731",
      "co_widac": "Pod pasiastą naklejką na kasecie wsunięta karteczka z numerem 0731 i dopiskiem „kasetowiec”.",
      "co_z_tego_wynika": "To numer z piórnika Iris. Dorian jest jedną z czterech osób z papierami."
    }
  ],
  "wejscie": "Dorian Lund. Zgubiłem kasetę, ręcznie podpisaną, w pudełku. Jedenastka, ostatni kurs. Nie jest wartościowa, tylko moja. Jeśli się znajdzie, proszę przechować do soboty. Nie dam rady odebrać wcześniej.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta kaseta?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Przezroczysta, z pasiastą naklejką i podpisem długopisem: „na pożegnanie”. W pudełku z zielonym grzbietem.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie ją zgubiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, na ostatnim siedzeniu przy tylnych drzwiach. Trzymałem w ręku, a potem wysiadłem bez niej. Takie życie.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co jest nagrane na tej kasecie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Piosenka. Jedna, ile razy, tyle razy. Nie powiem którą, to osobiste.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czemu jej szukasz tak późno?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Bo wcześniej nie wiedziałem, że zniknęła. A dziś wiem, że jutro bym płakał.",
          "mina": "emocja"
        },
        {
          "tekst": "Czemu przechować do soboty?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo w sobotę mam coś do załatwienia. Wolałbym nie mieć jej wtedy przy sobie.",
          "mina": "neutralna"
        },
        {
          "tekst": "Od czego uciekasz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Od ludzi, którzy pytają, czemu nie dzwonię. Ale to moja sprawa.",
          "mina": "emocja"
        },
        {
          "tekst": "Pod naklejką jest karteczka z numerem 0731. Co to?",
          "ton": "niewygodne",
          "wymaga": "d16_kaseta_0731",
          "odpowiedz": "To mój numer. Nie pytaj. Naprawdę. Tak się zaczęło i nie wiem, jak skończyć.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego potrzebujesz od biura?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Spokoju do soboty. I żeby nikt nie pytał o mnie wprost. Pokwitowanie niech będzie na kasetę, nie na człowieka.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "D. Lund. Samo D., jeśli można. Jak nie, to Dorian, bez nazwiska.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu boisz się kwitu z nazwiskiem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo kwit trafia do księgi, a księga do tych, którzy potrafią czytać.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "przechowaj_z_kwitem",
      "etykieta": "Przechowaj do soboty i wystaw kwit na kasetę",
      "reakcja": "Dobrze. „Nie ma jak w domu.” Czyli nie. Wystaw. Przyjdę w sobotę.",
      "zysk": "Kaseta jest bezpieczna, a w księdze zostaje ślad kasety, nie człowieka.",
      "strata": "Zajmuje to jedno miejsce w depozycie i księga mówi, że ktoś tu był.",
      "echo": {
        "za_dni": 4,
        "forma": "gosc",
        "tekst": "Dorian Lund: „Odebrałem kasetę. Niczego nie zostawiłem. Dziękuję, że nikt nie zapytał, od czego uciekam.”"
      }
    },
    {
      "akcja": "przechowaj_bez_kwitu",
      "etykieta": "Przechowaj do soboty bez kwitu",
      "reakcja": "Dziękuję. Nie ma śladu, nie ma problemu. Cicho jak mysz.",
      "zysk": "Dorian zostaje poza księgą i czuje się bezpieczny.",
      "strata": "Rzecz leży bez wpisu, a licznik „bez wpisu” rośnie.",
      "echo": {
        "za_dni": 4,
        "forma": "gosc",
        "tekst": "Dorian Lund: „Kaseta wróciła. Nikt nie wie, że tu byłem. Chyba po raz pierwszy od roku to się liczy.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Rozumiem. „Nie ma lekko.” Muszę poszukać innego miejsca.",
      "zysk": "Nie ryzykujesz układu i nie zostawiasz nic bez śladu.",
      "strata": "Dorian traci jedyną szansę na przechowanie i idzie dalej bez kasety.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Dorian Lund: „Poszedłem szukać innego okienka. Nie znalazłem. Kaseta gdzieś jedzie beze mnie.”"
      }
    }
  ],
  "rola": "kasetowiec, który boi się wyjechać",
  "watki": [
    "Skrytka"
  ],
  "tik": "cytuje tytuły piosenek",
  "potrzeba": "kaseta i cisza do soboty",
  "slad": "żeton 0731 w pudełku po kasecie"
}
```


## DZIEŃ 17

**Evan Doyle, 37.** Potrzeba: żeby żona wróciła albo odpisała. Lęk: że jej odejście było jego winą. Sekret: usłyszał „odchodzę” przed zgłoszeniem. Tik: poprawia mankiet. Moment gwiazdy: „Mówią, że nie wygląda na detektywa. Szary kapelusz.”

```json
{
  "id": "d17_evan",
  "dzien": 17,
  "postac": "Evan Doyle, 37",
  "glos": "Grzecznie, pełnymi zdaniami, wraca do tego samego pytania. Poprawia mankiet, dziś wygnieciony do połowy.",
  "typ": "mąż, który trzyma się planu",
  "rzecz": "Etui na aparat z zamkniętym listem",
  "wnetrze": [
    {
      "sekret_id": "d17_data_listu",
      "co_widac": "Na kopercie z listem data sprzed dwudziestu sześciu dni. Wewnątrz notatka: „Wiem, że chcesz odejść. Proszę, odpisz.”",
      "co_z_tego_wynika": "Evan wiedział o odejściu Mai, zanim zgłosił jej zaginięcie."
    }
  ],
  "wejscie": "Dobry wieczór. Evan Doyle. Zostawiłem w czwórce czarne etui na aparat, a w nim list do żony. Detektyw jest opłacony, zaliczka poszła w zeszłym tygodniu. Po wtorku dostanie pełnomocnictwo i pójdzie do Urzędu po wgląd. Wolałbym nie musieć.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda to etui?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czarne, skórzane, z miękką podszewką. W środku stary aparat i list. Aparat jest jej, od teścia.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie je zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, na siedzeniu przy oknie. Jechałem do niej, a właściwie na pętlę, jak ostatnio. Odłożyłem i zapomniałem.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu piszesz list, zamiast zadzwonić?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo ona nie odbiera. I tak sobie myślę, że list jest poważniejszy. Zamyka sprawę albo ją otwiera.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co jest w liście?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Prośba, żeby odpisała. Adres zwrotny, mój numer i jedno zdanie: „Wiem, że byłem niesprawiedliwy.” Nic więcej.",
          "mina": "mowi"
        },
        {
          "tekst": "Ile detektyw naprawdę kosztuje?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Tysiąc dwieście dolarów. Zaliczka poszła w zeszłym tygodniu. Powiedział, że w trzy dni znajdzie każdego, a po wtorku pójdzie do Urzędu po wgląd w kopie. Szary kapelusz. Mówią, że nie wygląda na detektywa.",
          "mina": "neutralna"
        },
        {
          "tekst": "Dlaczego uważasz, że żona potrzebuje ratunku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo nikt dobrowolnie nie zostawia wszystkiego. Przynajmniej nikt rozsądny. Takie jest moje przekonanie.",
          "mina": "klamie"
        },
        {
          "tekst": "Na kopercie jest data sprzed dwudziestu sześciu dni. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": "d17_data_listu",
          "odpowiedz": "Że list napisałem wcześniej, niż zgłosiłem zaginięcie. Usłyszałem „odchodzę”. Nie zgłosiłem tego, bo ktoś by powiedział, że to jej wybór.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz, jeśli Maya nie odpisze?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Przyjdę jeszcze raz. I jeszcze raz. Ale nie z pretensją, tylko z kopertą, która czeka.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Evan Doyle. Z kropką po „E”. Zawsze.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu mankiet masz dziś pomięty?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo ręce mi się trzęsą. Zwykle prasuję. Dziś nie miałem siły, a to już jest informacja.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "zostaw_zamkniety",
      "etykieta": "Zostaw list zamknięty dla Mai, bez obietnicy odpowiedzi",
      "reakcja": "Dla niej. Zamknięty. Niech ona zdecyduje. Rozumiem… no dobrze. Szansa jedna.",
      "zysk": "Evan ma jedną szansę, a Maya sama wybiera, czy otworzy list.",
      "strata": "Evan nie dostaje obietnicy i może zadzwonić do detektywa.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Evan Doyle: „Zostawiłem list. Nie wiem, czy dotrze. Jeżeli nie odpisze do wtorku, siódmego września, detektyw dostanie pełnomocnictwo i pójdzie do Urzędu. — E.D.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Odmowa pośrednictwa? Dobrze. Pójdę do Leny z pretensjami. Mam takie prawo.",
      "zysk": "Czysto: nie angażujesz się w sprawę małżonków.",
      "strata": "Evan idzie do Leny z pretensjami, a Maya traci spokój.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Lena Brandt: „Evan stał pod moimi drzwiami przez godzinę. Nie otworzyłam. Powiedział, że to wasza wina. Nie wiem, co to znaczy. — L.”"
      }
    },
    {
      "akcja": "zdradz_szczegol",
      "etykieta": "Zdradź Evanowi jeden szczegół o Mai",
      "reakcja": "Naprawdę? Dziękuję. Zapiszę. To pierwszy raz, kiedy ktoś mi coś powiedział. Kto wie, może jeszcze odzyskam.",
      "zysk": "Evan odzyskuje nadzieję i przestaje naciskać na biuro.",
      "strata": "Maya traci poczucie bezpieczeństwa, a detektyw dostaje ślad.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Maya Doyle: „Evan wie, że byłam w czwórce o 22:40. Skąd? Policzyłam: raz, dwa, trzy. Ktoś mu powiedział. Przestaję wierzyć szybie.”"
      }
    }
  ],
  "rola": "mąż, który trzyma się planu",
  "watki": [
    "Zaginiona"
  ],
  "tik": "poprawia mankiet",
  "potrzeba": "żeby żona wróciła albo odpisała",
  "slad": "wspomina detektywa za 1 200 $",
  "wejscie_jesli": {
    "d16_maya_lena:lena_zalatwia": "Dobry wieczór. Evan Doyle. Lena mówi, że zajęła się wszystkim i żebym nie przychodził. Przyszedłem po czarne etui na aparat, w nim list do żony. Detektyw jest opłacony, po wtorku pójdzie do Urzędu po wgląd. Wolałbym nie musieć.",
    "d16_maya_lena:maya_sama": "Dobry wieczór. Evan Doyle. Słyszałem, że Maya odebrała coś sama, a Lena się cofnęła. Nie wiem, gdzie żona. Zostawiłem w czwórce czarne etui na aparat, a w nim list. Detektyw jest opłacony, po wtorku pójdzie do Urzędu po wgląd."
  }
}
```

**Sylvia Okafor, 52, nauczycielka.** Potrzeba: szachy dla dzieci. Lęk: że dzieci zrozumieją, że świat nie zawsze jest sprawiedliwy. Sekret: sama nie umie przegrywać. Tik: mówi pionkami. Moment gwiazdy: „Gra się dalej, nawet jeśli czegoś brakuje.”

```json
{
  "id": "d17_sylvia",
  "dzien": 17,
  "postac": "Sylvia Okafor, 52",
  "glos": "Spokojnie, z nauczycielską ironią. Zdania rzuca jak pionki: po jednym ruchu.",
  "typ": "uczciwa, zagrywa",
  "rzecz": "Drewniane szachy bez króla",
  "wnetrze": [
    {
      "sekret_id": "d17_koperta_klasy",
      "co_widac": "W kieszonce pudełka koperta z napisem „wycieczka 3b” i sto dwadzieścia dolarów w banknotach, zwrot od rodziców.",
      "co_z_tego_wynika": "To pieniądze dzieci, nie Sylvii. Jeśli zginą, zapłaci z własnej pensji."
    }
  ],
  "wejscie": "Sylvia Okafor, nauczycielka. Zgubiłam szachy, drewniane, składane. Nie ma w nich białego króla. Szukam całości, ale też tego jednego pionka, którego brakuje, bo dzieci się o niego kłócą.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wyglądają te szachy?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Składana plansza, pionki wyrzeźbione ręcznie, trochę nierówne. Białego króla nie ma od lutego. Dzieci twierdzą, że gra się ciekawiej.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie je zostawiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, po zajęciach. Położyłam pudełko obok i zaczęłam rozmawiać z kierowcą o remoncie. Wysiadłam, a szachy jechały dalej.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu gracie bez króla?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo uczę, że gra toczy się dalej, nawet jeśli czegoś brakuje. Zwykle dzieci rozumieją to szybciej niż dorośli.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego uczysz dzieci?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Szachów, logiki i cierpliwości. Cierpliwość idzie najgorzej. Uczę też, że czasem trzeba poświęcić hetmana.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy ktoś wie, gdzie jest król?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Zgubił się w lutym, jeszcze w klasie. Dzieciom powiedziałam, że wyjechał na urlop. Uwierzyły.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy brak króla to kłopot?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Czasem. Przeciwnik zawsze wie, czego nie masz. Ale zwykle nie wie, co z tym zrobisz.",
          "mina": "neutralna"
        },
        {
          "tekst": "W pudełku jest koperta „wycieczka 3b”. Co to?",
          "ton": "niewygodne",
          "wymaga": "d17_koperta_klasy",
          "odpowiedz": "Pieniądze rodziców, sto dwadzieścia dolarów. Zapomniałam, że je tam włożyłam. Jak zginą, zapłacę z pensji, a ja nie mam z czego.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz, jak je odzyskasz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zagram z kimś, kto nie zna zasad. To zawsze interesujące.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "S. Okafor. Przez „k”, nie „c”. Dzieci pytają, czy to szachowy skrót.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy to ważne, że szachy wróciły?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Dla mnie to tylko pionki. Dla dzieci to pierwsze wrażenie, że rzeczy wracają.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Dzieci się ucieszą. A ja wrócę do mówienia, że hetmana nie wolno tracić bez powodu.",
      "zysk": "Sylvia odzyskuje szachy, a dzieci grają dalej.",
      "strata": "Wydajesz bez żadnego dowodu poza opisem, który zgadza się z rzeczą.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Sylvia Okafor: „Zagraliśmy bez króla w trzy osoby. Wygrał najmłodszy. Powiedział: „Ja nie miałem czego tracić.” Zapisałam.”"
      }
    },
    {
      "akcja": "wydaj_z_dopiskiem",
      "etykieta": "Wydaj i dołóż dopisek: „kto czeka na króla, ten gra dalej”",
      "reakcja": "Dopisek? Ha. To wyśle się w ślad za nimi jako lekcja. Dziękuję.",
      "zysk": "Sylvia dostaje coś, co może powiesić w klasie.",
      "strata": "Dopisek w księdze może komuś zabrzmieć jak zaszyfrowana wiadomość.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Sylvia Okafor: „Dopisek wisi nad tablicą. Dzieci pytają, co to znaczy. Odpowiedziałam: to znaczy, że ktoś gdzieś czeka. — S.O.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Rozumiem. Gdyby ktoś jeszcze miał pytania, wiem, gdzie szachy się kończą.",
      "zysk": "Szachy zostają w biurze do potwierdzenia.",
      "strata": "Dzieci grają dziś bez planszy, a Sylvia dostaje zaległą naganę.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Sylvia Okafor: „Dzieci grały na kartkach. Skrzywione, ale wygrały. Na przyszłość zastanowię się, czy biuro też tak gra.”"
      }
    },
    {
      "akcja": "wez_120_wycieczka",
      "etykieta": "Zatrzymaj 120 $ z koperty „wycieczka 3b”",
      "kasa": 120,
      "wymaga": "d17_koperta_klasy",
      "reakcja": "Szachy są? Dobrze. A koperta? Przecież… zaraz. Nie. Nic. Zapomniałam, co chciałam powiedzieć.",
      "zysk": "120 $ w kieszeni i dług u Marlowa o dwie raty mniejszy.",
      "strata": "Dzieci tracą wycieczkę albo Sylvia dopłaca z pensji. Wpis liczy się do zakończenia Nowy Sam.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Sylvia Okafor: „Wycieczka odwołana. Sprawdzałam trzy razy, bo wolę wierzyć, że sama się pomyliłam. Dzieci pytają, czemu nic nie wyszło.”"
      }
    }
  ],
  "rola": "nauczycielka z szachami bez króla",
  "watki": [
    "humor",
    "pieniądze"
  ],
  "tik": "mówi pionkami",
  "potrzeba": "szachy dla dzieci",
  "slad": "koperta z pieniędzmi wycieczki 3b w pudełku"
}
```


## DZIEŃ 18

**Iris Bell i Nora Vance.** Iris: potrzeba wykupu oryginałów; lęk że wszystko wyjdzie na jaw; sekret: wydała odszkodowanie z miasta na cudze ucieczki; tik „nie lubię naciskać”. Nora: potrzeba oryginałów dla Okoye; lęk że sama jest w papierach; sekret: kiedyś odebrała paczkę bez wpisu; tik „po kolei”. Moment gwiazdy: „Pokój służbowy też bywa wypowiadany.”

```json
{
  "id": "d18_iris_nora",
  "dzien": 18,
  "postac": "Iris Bell i Nora Vance",
  "glos": "Iris: cicho, uprzejmie, „nie lubię naciskać”, groźbę podaje jak prognozę pogody. Nora: po kolei, rzecz-osoba-skutek.",
  "typ": "dwie kobiety, jedna teczka",
  "rzecz": "Teczka budowlana z planem kamienicy",
  "ludzie": {
    "iris": "Iris Bell",
    "nora": "Nora Vance"
  },
  "wnetrze": [
    {
      "sekret_id": "d18_plan_wyburzenia",
      "co_widac": "W teczce plan Cooper Street 9 z czerwonym dopiskiem „do wyburzenia” i lista terminów rozliczenia zaliczek: czwartek, dziewiąty września, podkreślony dwa razy.",
      "co_z_tego_wynika": "Cały dom idzie pod rozbiórkę, a termin rozliczenia zaliczek jest ostateczny. Lokatorzy nie mają zapasu."
    }
  ],
  "wejscie": "Dobry wieczór. Iris Bell, a obok Nora Vance. Teczka budowlana, szara, zgubiona w szóstce. Są w niej plan kamienicy i lista terminów. Nora ją zna, ja ją znam. Chcemy ją odebrać. Z różnych powodów.",
  "wejscie_jesli": {
    "d12_iris_nora:wydaj_iris": "Dobry wieczór. Iris Bell i Nora Vance. Teczka budowlana, szara, zgubiona w szóstce. Plan kamienicy i lista terminów. Kasetkę biuro wydało już jakiś czas temu, więc dziś chcemy tylko teczkę. Z różnych powodów.",
    "d12_iris_nora:zabezpiecz": "Dobry wieczór. Iris Bell i Nora Vance. Teczka budowlana, szara, zgubiona w szóstce. Oryginały leżą u was w depozycie, a my przyszłyśmy po resztę: plan kamienicy i listę terminów. Z różnych powodów.",
    "d12_iris_nora:sprawdz_z_nora": "Dobry wieczór. Iris Bell i Nora Vance. Teczka budowlana, szara, zgubiona w szóstce, plan kamienicy i lista terminów. Kasetkę liczyłyśmy wspólnie, każdy numer ma dwa podpisy, więc dziś nie walczymy o nią. Teczka to druga sprawa. Z różnych powodów.",
    "d12_iris_nora:wyloz_400": "Dobry wieczór. Iris Bell i Nora Vance. Teczka budowlana, zgubiona w szóstce, plan kamienicy i lista terminów. Nora ma od Was czterysta dolarów dla Okoye, a oryginały nadal ma Iris. Chcemy teczkę. Z różnych powodów."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w tej teczce?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Plan Cooper Street dziewięć z dopiskiem „do wyburzenia” i lista terminów rozliczenia zaliczek. Nic ciekawego, dla mnie to papier, dla lokatorów los.",
          "mina": "mowi"
        },
        {
          "tekst": "Nora, po co ci ta teczka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Po kolei: rzecz, osoba, skutek. Lista terminów, czternaście rodzin, czwartek, dziewiąty września. Bez niej nie mam daty, do kiedy Okoye mają zapłacić.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu stoicie tu razem?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Bo przyszłyśmy w tej samej sprawie. Niektóre sprawy lepiej ustalać przy świadkach.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Iris, ile wynosi twoja oferta?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Trzysta dolarów. Za zwrot kasetki i za zwolnienie z formalności. To nie łapówka, tylko wykup. Dwa czynsze, uczciwie.",
          "mina": "mowi",
          "ustawia": "d18_oferta_300"
        },
        {
          "tekst": "Nora, co proponujesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Pokwitowanie z pieczęcią biura i terminem wydania oryginałów. Formalnie czyste. Wiem, że to wolniejsze, ale wygrywa na papierze.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu Nora odmówiła Iris rok temu?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Nie odmówiłam. Odebrałam kiedyś paczkę przez okienko, bez wpisu. Iris pamięta. „Wykupuje” moje milczenie tak samo jak twoje.",
          "mina": "emocja"
        },
        {
          "tekst": "Iris, skąd wiesz, gdzie jest mój pokój?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Z umowy. Nie lubię naciskać, ale pokój służbowy też bywa wypowiadany. Mówię to jak prognozę pogody.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz, jeśli oryginały trafią do Nory?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Będę musiała się z nimi rozliczyć. I z tymi, którzy pomagają. To ludzie, nie liczby.",
          "mina": "mowi"
        },
        {
          "tekst": "Co zrobisz, jeśli oryginały trafią do Iris?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Okoye zapłacą drugi raz. Termin w czwartek, dziewiątego września, jest sztywny. Powiem to po kolei, żeby nikt nie mówił, że nie wiedział.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co się stanie, jeśli materiały pójdą do kontroli?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Czyli do Victora. Wyjdzie wszystko: papiery, nazwiska, kasetki. Wtedy nikt nie będzie wolny.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "rezerwacja_nora",
      "etykieta": "Zarezerwuj wydanie oryginałów dla Nory",
      "kto": "nora",
      "reakcja": "Rezerwacja przyjęta. Po kolei: oryginały dla mnie, kopia dla biura. Dziękuję.",
      "zysk": "Lokatorzy mają szansę, a ty trzymasz się przepisów.",
      "strata": "Iris zaczyna grozić jak prognozą pogody i nie zapomni, kto stał przy szybie.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Pan zarządca z Urzędu pytał o pokój służbowy przy Cooper Street. Zastanawiam się dlaczego.”"
      },
      "wymaga": "d12_iris_nora:zabezpiecz|d12_iris_nora:sprawdz_z_nora"
    },
    {
      "akcja": "nora_kopia",
      "etykieta": "Odpisz Norze listę numerów z biura",
      "kto": "nora",
      "wymaga": "d12_iris_nora:wydaj_iris|d12_iris_nora:wyloz_400",
      "reakcja": "Lista numerów, bez oryginałów. To mniej, niż chciałam, ale więcej niż nic. Zapisuję, kto ją dał.",
      "zysk": "Nora ma numery do sądu i wie, kogo pytać, choć oryginały zostały u Iris.",
      "strata": "Kopia z biura dowodzi, że biuro wiedziało, a Iris dowie się, kto ją odpisał.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Nora Vance: „Mam listę numerów z biura. Sąd weźmie ją jako kopię, oryginały ma Iris. Piszę, żebyś wiedział, że ktoś to zrobił, kiedy nikt nie musiał. — N.V.”"
      }
    },
    {
      "akcja": "do_kontroli",
      "etykieta": "Przekaż materiały do kontroli",
      "kto": "iris",
      "reakcja": "Do Victora. Dobrze. Czyli formalnie czysto. Nora poczeka dłużej.",
      "zysk": "Formalnie nikt nie zarzuci ci układu.",
      "strata": "Nora czeka dłużej, Skrytka jest wystawiona, a Urząd dostaje drugi egzemplarz.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Inspekcja przewozów: do protokołu wpłynęły materiały z biura. Do uzupełnienia: źródło planu kamienicy. — V. Crane"
      }
    },
    {
      "akcja": "oferta_iris",
      "etykieta": "Przyjmij 300 $ od Iris i oddaj oryginały bez wpisu",
      "kasa": 300,
      "wymaga": "d18_oferta_300",
      "kto": "iris",
      "reakcja": "Miło mieć sprawy załatwione bez zbędnych słów. Dziękuję. Uwielbiam rozumienie.",
      "zysk": "Dostajesz 300 dolarów, czyli dwa czynsze, i spłacasz większość długu u Kuby.",
      "strata": "Oryginały odpływają bez śladu, Okoye płacą drugi raz, a ty stajesz się „swoim” u Iris.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Nora Vance: „Wiem, że oryginały nie leżą już w biurze. Zapisałam godzinę i to, kto stał przy szybie. Rodzina Okoye ma czas do czwartku, dziewiątego września. — N. Vance”"
      }
    }
  ],
  "rola": "zarządczyni i prawniczka przy teczce",
  "watki": [
    "Skrytka",
    "kamienica",
    "pieniądze"
  ],
  "tik": "Iris „drobna przysługa”, Nora „po kolei”",
  "potrzeba": "teczka z planem wyburzenia",
  "slad": "oferta 300 $ i „pokój służbowy”"
}
```

**Hugo Lang, 40, hydraulik.** Potrzeba: wędka jako alibi. Lęk: że żona się dowie o kartach. Sekret: nie łowi, gra. Tik: „wiesz, jak to jest”. Humor: leszcz podobny do teścia. Moment gwiazdy: „Ryby są alibi.”

```json
{
  "id": "d18_hugo",
  "dzien": 18,
  "postac": "Hugo Lang, 40",
  "glos": "Hałaśliwy, zabawny, ciągle „wiesz, jak to jest”. Opowiada historie, których nikt nie sprawdza.",
  "typ": "uczciwy, kłamie dla spokoju",
  "rzecz": "Teleskopowa wędka w pokrowcu",
  "wnetrze": [
    {
      "sekret_id": "d18_dlug_karciany",
      "co_widac": "W kieszeni pokrowca złożony kwit długu karcianego: dwieście dolarów, podpis H.L., odbiorca K.M., termin: sobota.",
      "co_z_tego_wynika": "Hugo jest winien Marlowowi. Wędka jest alibi i zastawem."
    }
  ],
  "wejscie": "Cześć, Hugo Lang, hydraulik. Zgubiłem wędkę, teleskopową, w czarnym pokrowcu. Żona myśli, że łowię ryby, ale ja gram w karty. Wędka ma być przy mnie, jak wrócę, bo ryby są alibi.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta wędka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czarna, teleskopowa, z pokrowcem na zamek. Na rączce naklejka „Najlepszy tata”. Dostałem od córki, nie wiem, czemu.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie ją zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W szóstce, pod siedzeniem. Wracałem znad rzeki, a raczej znad stolika. Wysiadłem w pośpiechu.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu wędka jest alibi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo kto łowi, ten ma rybę. A kto nie ma ryby, ten ma wędkę. Żona patrzy tylko na to, co widać.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czy złowiłeś coś w życiu?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Raz leszcza. Wypuściłem, bo był podejrzanie podobny do teścia.",
          "mina": "mowi"
        },
        {
          "tekst": "Ile razy w tygodniu „łowisz”?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Trzy. W czwartek wygrywam, w sobotę przegrywam, w niedzielę wracam z rybą z targu.",
          "mina": "klamie"
        },
        {
          "tekst": "Czemu nie powiesz żonie prawdy?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo ona mnie kocha za rybę. Co bym zrobił, gdyby się dowiedziała, że kocha mnie za nic?",
          "mina": "emocja"
        },
        {
          "tekst": "W pokrowcu jest kwit na dwieście dolarów do K.M. Co to?",
          "ton": "niewygodne",
          "wymaga": "d18_dlug_karciany",
          "odpowiedz": "To nie kwit, to żart, który kosztuje dwieście dolarów. Marlow nie żartuje, ale ja tak. Do soboty.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego chcesz od biura?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wędki. I żeby ktoś w razie czego powiedział, że wędka tu była, więc ryby też.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Hugo Lang. Z wężykiem na końcu, jak rura.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy ktoś może potwierdzić, że łowisz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jak trzeba, to znajomi. Ale oni też grają. Taka rybacka konspiracja.",
          "mina": "klamie"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki! Teraz mam wędkę i rybę. Tylko ryby jeszcze nie mam, ale to szczegół.",
      "zysk": "Hugo odzyskuje wędkę, a żona dalej nie wie.",
      "strata": "Wydajesz rzecz po opisie bez żadnego dowodu poza pokrowcem.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Hugo Lang: „Żona zapytała, ile złowiłem. Powiedziałem: tyle, co trzeba. Nie dopytywała. Chyba działa.”"
      }
    },
    {
      "akcja": "zaswiadczenie",
      "etykieta": "Wydaj i napisz zaświadczenie, że wędka była w biurze",
      "reakcja": "Zaświadczenie! Cudo. Pokażę żonie jako dowód uczciwości. Prawie.",
      "zysk": "Hugo ma na papierze, że wędka była tu, a nie nad stolikiem.",
      "strata": "Wystawiasz papier, który ma pomóc w kłamstwie, i podpisujesz się pod nim.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Hugo Lang: „Żona czytała zaświadczenie dwa razy. Powiedziała: ciekawe, że biuro wie, gdzie byłeś. Chyba nie powinienem był tego pokazywać. — H.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Odmawiasz? Z wędką? No to ja dziś bez ryby. Ale i tak dzięki, że szczerze.",
      "zysk": "Nie tworzysz papierów, które pomagają kłamać.",
      "strata": "Hugo wraca do domu bez wędki, a żona dopyta o rybę.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Hugo Lang: „Żona zapytała, gdzie wędka. Powiedziałem: w biurze rzeczy znalezionych. Zrobiła minę, której nigdy nie widziałem.”"
      }
    },
    {
      "akcja": "wez_100_hugo",
      "etykieta": "Weź 100 $ od Hugona za zaświadczenie i milczenie",
      "kasa": 100,
      "wymaga": "d18_dlug_karciany",
      "reakcja": "Sto, na ladzie. Zaświadczenie, że wędka tu była, i ani słowa o kwicie. Umowa? Umowa.",
      "zysk": "100 $ na czynsz, a Hugo ma papier dla żony.",
      "strata": "Wystawiasz fałszywe zaświadczenie za pieniądze. Urząd +2 przy kontroli, a Marlow wie, że Hugo ma Twoją zgodę.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Hugo Lang: „Żona czytała zaświadczenie. Zapytała, ile wziąłem za wędkę. Powiedziałem, że sto. Nie wiem, skąd wiedziała. — H.”"
      }
    }
  ],
  "rola": "hydraulik, który łowi tylko alibi",
  "watki": [
    "humor",
    "Marlow",
    "pieniądze"
  ],
  "tik": "mówi „wiesz, jak to jest”",
  "potrzeba": "wędka jako alibi dla żony",
  "slad": "kwit długu karcianego, odbiorcą jest Marlow"
}
```


## DZIEŃ 19

**Ada Vale i Leo Marsh.** Ada: potrzeba, żeby dorośli przestali się kłócić o puszkę; lęk: wypowiedzenie dla mamy; sekret: widziała puszkę u Iris; tik: liczy kroki. Leo: potrzeba nie podpisywać za wszystkich; lęk: że za puszkę ukarzą całą zmianę; sekret: dopisał puszkę do wykazu; tik: konduktorski humor. Moment gwiazdy: „Mamy dzień na spakowanie się. To jest dziecięce zdanie, ale ona je zna.”

```json
{
  "id": "d19_ada_leo",
  "dzien": 19,
  "postac": "Ada Vale i Leo Marsh",
  "glos": "Ada: dosłownie, jak dziecko, liczy kroki. Leo: spokojnie, z konduktorskim humorem, wymyka się od odpowiedzi.",
  "typ": "dziecko i konduktor, jedna puszka",
  "rzecz": "Konduktorska torba z dwoma wykazami zmiany",
  "ludzie": {
    "ada": "Ada Vale",
    "leo": "Leo Marsh"
  },
  "wnetrze": [
    {
      "sekret_id": "d19_wykaz_poprawiony",
      "co_widac": "W torbie dwa wykazy zmiany. Drugi jest poprawiony ręcznie: dopisany numer puszki i jedno słowo „b.n.” tym samym długopisem.",
      "co_z_tego_wynika": "Leo wpisał puszkę do wykazu, bo ktoś mu to polecił, a potem sprostował, żeby nie zostać z tym sam."
    }
  ],
  "wejscie": "Dobry wieczór. Leo Marsh i Ada Vale. Torba konduktorska, szóstka, z wykazami zmiany. Ada przyszła, bo wie więcej, niż mówi. Ja przyszedłem, bo wolę nie podpisywać za wszystkich.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta torba?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "leo",
          "odpowiedz": "Skórzana, na pasku, z niebieską taśmą na rączce. W środku dwa wykazy: oficjalny i poprawiony.",
          "mina": "mowi"
        },
        {
          "tekst": "Ada, po co tu jesteś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "ada",
          "odpowiedz": "Bo wiem, skąd jest puszka. Mama mówi, że nie wolno, ale pan Leo mówi, że tu można. I tu mówią do mnie ładnie.",
          "mina": "mowi"
        },
        {
          "tekst": "Leo, czemu wybrałeś tę zmianę?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "leo",
          "odpowiedz": "Bo na zmianie jest dużo ludzi, a mało rzeczy. A ja jestem człowiek, który lubi wiedzieć, kto za co odpowiada.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Ada, co wiesz o puszce?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "ada",
          "odpowiedz": "Że stała u pani Iris nad czajnikiem, a potem pan Leo ją wsunął pod ławkę. Zapisał w wykazie i nie powiedział nikomu.",
          "mina": "mowi"
        },
        {
          "tekst": "Leo, czym różnią się wykazy?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "leo",
          "odpowiedz": "W drugim dopisałem numer puszki odręcznie. Oficjalny jest czysty. Wolałem mieć coś na własną rękę.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy wy się boicie?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "leo",
          "odpowiedz": "Ja trochę. Ale ja się boję zawsze, od dawna. Ada nie wie, że się boi, i to jest groźniejsze.",
          "mina": "emocja"
        },
        {
          "tekst": "Na poprawionym wykazie jest numer puszki. Czyje to pismo?",
          "ton": "niewygodne",
          "wymaga": "d19_wykaz_poprawiony",
          "kto": "leo",
          "odpowiedz": "Moje. Ale numer podała mi Iris, pod szybą, jakby to było nic. Powiedziała: „Wpisz, to bezpieczniej.” Wpisałem.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Ada, co się stanie, jeśli wystąpisz jako świadek?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "ada",
          "odpowiedz": "Że mama będzie płakać. Pani Iris powiedziała, że mamy dzień na spakowanie się. To jest dziecięce zdanie, ale ona je zna.",
          "mina": "emocja"
        },
        {
          "tekst": "Leo, co mam zapisać?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "leo",
          "odpowiedz": "Sprostowanie. Że jedna puszka jechała moim kursem bez nadawcy i ja za to odpowiadam. Własnym nazwiskiem.",
          "mina": "mowi"
        },
        {
          "tekst": "Dlaczego chcesz brać winę na siebie?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "leo",
          "odpowiedz": "Bo wolę, żeby ktoś oberwał za puszkę, niż żeby całą zmianę wyrzucili. Wolę ja niż oni.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "przyjmij_sprostowanie",
      "etykieta": "Przyjmij podpisane sprostowanie Leo",
      "kto": "leo",
      "reakcja": "Podpisuję. Leo Marsh, jeden kurs, jedna puszka. Wszystko własnym nazwiskiem.",
      "zysk": "Leo bierze odpowiedzialność za jeden kurs, a reszta zmiany jest bezpieczna.",
      "strata": "W papierach pojawia się nazwisko Ady, więc Iris wypowie mieszkanie rodzinie Vale.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Rosa Vale: „Dostałyśmy wypowiedzenie. Iris powiedziała: „do piątku”. Ada pakuje pluszowe zwierzęta do kartonu i pyta, czy to sprawiedliwe. — Rosa”"
      }
    },
    {
      "akcja": "oficjalny_wykaz",
      "etykieta": "Oprzyj się na oficjalnym wykazie, Adę zostaw poza sprawą",
      "kto": "ada",
      "reakcja": "Dziękuję. Pan Leo mówi, że czasem trzeba milczeć, żeby ktoś mógł mówić potem.",
      "zysk": "Ada i jej rodzina są bezpieczne, a Leo unika zbiorowej kary.",
      "strata": "Dowód jest słabszy, bo oficjalny wykaz nie zawiera dopisku o puszce.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Zeszłej nocy wsiadła do szóstki dziewczynka i zapytała, czy puszka już jest. Powiedziałem: jest. I że to nic ważnego. Nie wiem, czy uwierzyła.”"
      }
    },
    {
      "akcja": "sprostowanie_bez_ady",
      "etykieta": "Przyjmij sprostowanie Leo, ale bez nazwiska Ady",
      "kto": "leo",
      "reakcja": "Dobrze. Ada wypadła z papieru, a ja zostaję w nim sam. Wolę tak.",
      "zysk": "Leo bierze winę, a rodzina Vale zostaje w mieszkaniu.",
      "strata": "Wpis o puszce traci świadka, więc Nora ma słabszy dowód na obieg paczek.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Sprostowanie leży w księdze. Ada mówi, że dobrze wyszło. Ja nie jestem pewien, czy to nie zbyt dobrze.”"
      }
    }
  ],
  "rola": "dziecko i konduktor przy puszce",
  "watki": [
    "kamienica",
    "Skrytka"
  ],
  "tik": "Ada liczy kroki",
  "potrzeba": "sprostowanie wykazu zmiany",
  "slad": "dzień na spakowanie dla rodziny Ady"
}
```

**Kofi Mensah, 26, kurier.** Potrzeba: powerbank. Lęk: że woził coś, co komuś zniszczyło życie. Sekret: woził paczki w płótnie na Cooper Street. Tik: sprawdza telefon. Moment gwiazdy: „Nigdy nie dotykała mojej ręki, tylko kładła pieniądze na torbie.”

```json
{
  "id": "d19_kofi",
  "dzien": 19,
  "postac": "Kofi Mensah, 26",
  "glos": "Szybko, na jednym oddechu, z kurierską ironią. Zawsze sprawdza telefon.",
  "typ": "uczciwy, widział za dużo",
  "rzecz": "Czerwony powerbank z naklejką trasy",
  "wnetrze": [
    {
      "sekret_id": "d19_zlecenie_slip",
      "co_widac": "Pod naklejką z trasą wklejone stare zlecenie: „Port, Cooper 9, 80 $ za kurs. Cisza w cenie.” Pieczątka bez nazwiska.",
      "co_z_tego_wynika": "Kofi dostawał pensję za milczenie i jest jedynym, kto wie, co woził."
    }
  ],
  "wejscie": "Cześć, Kofi Mensah, kurier rowerowy. Zgubiłem powerbank, czerwony, w szóstce. Bez niego telefon pada po trzech zleceniach, a ja żyję ze zleceń. Naklejka z trasą jest ważna, bo to moje stare kursy.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten powerbank?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czerwony, prostokątny, z pęknięciem na rogu. Naklejka z trasą: Port, Rynek, Cooper Street. Dostałem od kolegi z hurtowni.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie go zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W szóstce, na ładowarce przy oknie. Wysiadłem w biegu, bo zlecenie piszczało.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu masz na naklejce akurat tę trasę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo to moja stara trasa. Kiedyś woziłem paczki bez pytań, ale teraz pytam. Wolę wiedzieć.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co woziłeś na tej trasie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Płaskie paczki w szarym płótnie. Adres: Cooper Street dziewięć, drugie piętro. Nie wiedziałem, co w środku. Płacili za pięć kilometrów dziesięć dolarów.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto ci płacił?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kobieta w jasnych rękawiczkach. Nigdy nie dotykała mojej ręki, tylko kładła pieniądze na torbie.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu przestałeś wozić paczki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo raz przesyłka była za lekka i za sztywna, jakby tylko papier. Pomyślałem, że ktoś gdzieś dostaje z niej nowe życie.",
          "mina": "emocja"
        },
        {
          "tekst": "Pod naklejką jest zlecenie „cisza w cenie”. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": "d19_zlecenie_slip",
          "odpowiedz": "Że płacili za to, żebym nie pytał. Ostatni kurs: osiemdziesiąt dolarów. Mam je jeszcze, nie ruszałem.",
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
          "odpowiedz": "Powerbanku. I żeby moje stare kursy nie wracały jak echo.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kofi Mensah, przez „K”. Dużymi, bo kurier nie ma czasu na ozdoby.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy opowiesz to komuś jeszcze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jeśli ktoś zapyta, powiem prawdę. Ale mało kto pyta kuriera, co wiezie.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki! Telefon żyje, ja żyję. A jak ktoś będzie pytał o trasę, to wiecie, gdzie mnie szukać.",
      "zysk": "Kofi odzyskuje powerbank i wraca na trasę.",
      "strata": "Wydajesz bez żadnego dowodu poza naklejką i opisem.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Kofi Mensah: „Powerbank działa. Pierwszy raz od tygodnia mam ładunek na cały dzień. Mam też ochotę opowiedzieć komuś o jasnych rękawiczkach.”"
      }
    },
    {
      "akcja": "zapisz_zeznanie",
      "etykieta": "Wydaj i zapisz zeznanie Kofiego o trasie",
      "reakcja": "Zapisuje się? No dobra. Kofi Mensah, kurier. Tylko niech nikt nie dzwoni do mojego szefa.",
      "zysk": "Księga ma drugiego świadka trasy, a Nora ma co wskazać.",
      "strata": "Kofi staje się świadkiem i może stracić zlecenia, jeśli ktoś go znajdzie.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Nora Vance: „W księdze jest zeznanie kuriera. Rzecz, osoba, skutek: trasa paczek idzie z Portu na Cooper Street. Dziękuję.”"
      }
    },
    {
      "akcja": "ostrzez",
      "etykieta": "Wydaj i ostrzeż Kofiego, żeby przestał o tym mówić",
      "reakcja": "Ostrzeżenie? No dobra. Nikomu nic. Jak mnie zapytają, zapomniałem.",
      "zysk": "Kofi jest bezpieczny, a trasa nie wraca do niego jak echo.",
      "strata": "Drugi świadek milknie, a ty sam stajesz się strażnikiem tajemnicy.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Kofi Mensah: „Zapomniałem. Powiedziałem szefowi, że byłem chory. Gdybyście mieli kiedyś ochotę ruszyć trasę, wiecie, gdzie szukać. — K.”"
      }
    },
    {
      "akcja": "wez_80_kofi",
      "etykieta": "Weź 80 $ od Kofiego, żeby nie zapisywać jego nazwiska",
      "kasa": 80,
      "wymaga": "d19_zlecenie_slip",
      "reakcja": "Osiemdziesiąt, to ostatni kurs. Bierz. Nie zapisuj mnie, nie pytaj o trasę. Jak ktoś zapyta, nigdy mnie tu nie było.",
      "zysk": "80 $ w kieszeni i Kofi jest bezpieczny.",
      "strata": "Bierzesz pieniądze za to samo milczenie, które kupowano od Kofiego. Nora traci świadka, Urząd +1 przy kontroli.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Kofi Mensah: „Zapłaciłem. Nie wiem, kto przyjął pieniądze. Czuję się tak, jak wtedy na trasie. — K.”"
      }
    }
  ],
  "rola": "kurier, który woził paczki w płótnie",
  "watki": [
    "Skrytka",
    "pieniądze"
  ],
  "tik": "sprawdza telefon",
  "potrzeba": "powerbank na trasę",
  "slad": "zlecenie „cisza w cenie” pod naklejką"
}
```

**Mario Ferro, 47, fryzjer.** Potrzeba: teczka z dokumentami na nazwisko Ferro. Lęk: że ktoś od dwóch lat chodzi po mieście jako on. Sekret: żaden, ale ktoś ma jego nazwisko na dowodzie wydanym w duplikacie. Tik: „przepraszam, że zawracam”. Wątek: Cudze nazwiska (Gus d9, kalka d15). Moment gwiazdy: „Ktoś od dwóch lat chodzi po mieście jako ja.”

```json
{
  "id": "d19_ferro",
  "dzien": 19,
  "postac": "Mario Ferro, 47",
  "glos": "Mówi grzecznie i za głośno, jakby przeprosił z góry. Zaczyna od „przepraszam, że zawracam”, kończy od „jeszcze jedno”.",
  "typ": "uczciwy, pokrzywdzony",
  "rzecz": "Brązowa teczka z dokumentami na nazwisko Ferro",
  "wnetrze": [
    {
      "sekret_id": "d19_zaswiadczenie_ferro",
      "co_widac": "W teczce akt urodzenia, polisa i zaświadczenie o niekaralności na Augusta Maria Ferro. Na zaświadczeniu adnotacja: „Dowód wydany w duplikacie pod innym adresem, 2 lata temu”.",
      "co_z_tego_wynika": "Ktoś od dwóch lat używa dowodu na to nazwisko, wydanego w duplikacie. To ten sam August Ferro, którego dowód Gus Pell miał w portfelu."
    }
  ],
  "wejscie": "Przepraszam, że zawracam. Mario Ferro, August Mario, jeśli pełnym imieniem. Zgubiłem brązową teczkę z dokumentami w szóstce. Chcę ją odebrać, ale jeszcze jedno: ktoś od dwóch lat chodzi po mieście jako ja.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta teczka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Brązowa, sztywna, z gumką na rogu. Dwie przegródki. W jednej akt urodzenia, w drugiej polisa. Etykieta „M.F.” pisana flamastrem.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie dokładnie ją zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W szóstce, na siedzeniu za kierowcą. Jechałem z wizyty u adwokata i ręce miałem pełne papierów. Zostawiłem ją, bo adwokat mówił za szybko.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co to znaczy, że ktoś chodzi po mieście jako Ty?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Dostałem wezwanie na sprawę o długi, których nie miałem. Dowód wydano w duplikacie, pod innym adresem. Od dwóch lat. Nie wiem kto.",
          "mina": "emocja"
        },
        {
          "tekst": "W teczce jest adnotacja o duplikacie. Co to dla Ciebie znaczy?",
          "ton": "niewygodne",
          "wymaga": "d19_zaswiadczenie_ferro",
          "odpowiedz": "Że ktoś poszedł do urzędu i powiedział, że to ja. Z moim zdjęciem z lat dwudziestych. Dowód wygląda inaczej, ale kto sprawdza?",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kim jesteś z zawodu?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Fryzjer. Własny zakład przy Rynku. Dwa foteliki, kolejka rano. Nie widzę, żeby moje nazwisko miało komukolwiek służyć.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jeszcze jest w teczce?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Zaświadczenie o niekaralności, polisa i zdjęcie z komunii. Zdjęcie jest ostatnią rzeczą, o którą się boję, bo ma datę na odwrocie.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu przyszedłeś właśnie tu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo adwokat powiedział: sprawdź, czy ktoś u was nie ma dwóch dowodów. W biurach rzeczy znalezionych takie rzeczy leżą. Przepraszam, że tak mówię.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz, jeśli dowiesz się, kto Cię udaje?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Nic. Pójdę do adwokata. Nie szukam zemsty, tylko pisma, że nie jestem tym, który ma długi.",
          "mina": "mowi"
        },
        {
          "tekst": "Podpiszesz odbiór teczki?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mario Ferro. August Mario podpisuję rzadko. Zwykle skracam, bo tamten podpisuje długo.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy masz tu jakiś dowód, że to Ty jesteś prawdziwym Ferro?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Teczkę. Akt urodzenia, polisę i zdjęcie. A jeśli to za mało, proszę zadzwonić do adwokata. Numer mam w telefonie. Przepraszam, że tak mało.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj_ferro",
      "etykieta": "Wydaj teczkę i powiedz o duplikacie dowodu",
      "reakcja": "Dziękuję. Czyli ktoś miał dwa dowody. Proszę powiedzieć tylko tyle: jakie miasto, jakie nazwisko. Resztę znajdę sam.",
      "zysk": "Mario dostaje teczkę i wiadomość, że dowód z jego nazwiskiem był gdzieś w obiegu.",
      "strata": "Ujawniasz, co leżało w portfelu Gusa, a Gus mógł zostać bez drugiego nazwiska.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Mario Ferro: „Adwokat złożył pismo. Dowód z moim nazwiskiem był w obiegu, ktoś potwierdził to u Was. Dziękuję. Zdjęcia z komunii nie zgubię drugi raz. — M.F.”"
      }
    },
    {
      "akcja": "odmow_ferro",
      "etykieta": "Wydaj teczkę, o duplikacie nic nie mów",
      "reakcja": "Dobrze. Przepraszam, że pytałem. Zostaję z dokumentami i bez odpowiedzi.",
      "zysk": "Gus i jego drugie nazwisko zostają poza sprawą, a biuro nie komentuje cudzych dokumentów.",
      "strata": "Mario dalej nie wie, kto go udaje, a sprawa o długi idzie swoim torem.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Mario Ferro: „Ktoś jeszcze używa mojego nazwiska. Dostałem kolejne wezwanie. Nie pytam dlaczego. Pytam, czy ktoś zapisał, że pytałem.”"
      }
    },
    {
      "akcja": "ferro_kopia",
      "etykieta": "Wydaj teczkę i dołącz kopię wpisu o dowodzie Gusa Pella",
      "reakcja": "Kopia wpisu? Czyli ktoś zapisał, że był drugi dowód. Dobrze, to jest dowód, że biuro to widziało.",
      "zysk": "Mario ma papier z pieczątką, że dowód z jego nazwiskiem był w biurze.",
      "strata": "Kopia trafia do akt, a Urząd zobaczy dwa dowody pod jednym zdjęciem.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Victor Crane: „W aktach pojawiła się kopia wpisu o dwóch dowodach. Do wyjaśnienia: kto ją wydał i na czyją prośbę. — V.C.”"
      }
    }
  ],
  "rola": "fryzjer udawany przez kogoś",
  "watki": [
    "cudze_nazwiska"
  ],
  "tik": "przeprasza z góry, kończy „jeszcze jedno”",
  "potrzeba": "teczka z aktem urodzenia i polisą",
  "slad": "duplikat dowodu na jego nazwisko od dwóch lat"
}
```


## DZIEŃ 20

**Elias, Sam, Victor.** Elias: potrzeba oddać pieniądze; lęk: dług bez nazwy; tik: dziś rozprostowuje numerek. Sam: potrzeba spokoju; lęk: że ludzie z kalki trafią do Urzędu; sekret: napisał notatki dla następcy. Victor: potrzeba kompletu do 3:00; sekret: mówi dłużej, kiedy jest bliski prawdy. Moment gwiazdy: Sam pyta: „Jak cię zapisać?”

```json
{
  "id": "d20_elias_sam",
  "dzien": 20,
  "postac": "Elias Wren, Sam Holt i Victor Crane",
  "glos": "Elias: powoli, staroświecko, uparcie. Sam: najpierw szczegół techniczny. Victor: krótko, ale dziś zaczyna mówić dłużej.",
  "typ": "trzej mężczyźni i jedna koperta",
  "rzecz": "Złoty zegarek kieszonkowy w etui po okularach",
  "ludzie": {
    "elias": "Elias Wren",
    "sam": "Sam Holt",
    "victor": "Victor Crane"
  },
  "wnetrze": [
    {
      "sekret_id": "d20_zegarek_tyl",
      "co_widac": "Na tyle zegarka odcinek wpłaty z datą zgodną z kwitem Eliasa: 84 $, podpis S. Holt. Na odwrocie ołówkiem: „Wpisuj mało. Pytaj o imiona.”",
      "co_z_tego_wynika": "Sam zapłacił Eliasowi z własnej kieszeni. Notatki na odcinku brzmią jak rady dla kogoś innego."
    }
  ],
  "wejscie": "Elias Wren. Przyszedłem z panem Holtem. Zegarek jest jego, w etui po okularach, bo nie miał gdzie. Pan Holt odmawia pieniędzy, a ja nie odpuszczę. O trzeciej pan Crane odbiera materiały, więc musimy się zmieścić.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Sam, jak wygląda ten zegarek?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Złoty, mały, z pękniętym szkłem. Na pokrywce inicjały S.H. Wszystko, co mam po dziadku, kiedy go jeszcze miałem.",
          "mina": "mowi"
        },
        {
          "tekst": "Sam, gdzie go zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Nie zostawiłem. Mam go przy sobie od piętnastego dnia, w kieszeni płaszcza, i nie chcę go nosić. Etui jest Eliasa, bo swoje zgubiłem.",
          "mina": "neutralna"
        },
        {
          "tekst": "Victor, czemu odbierasz materiały o trzeciej?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Bo o trzeciej zamykam tydzień. Nikt nie przeszkadza, papiery zachowują się spokojniej, a zmęczeni mówią prawdę. Bez kompletu do tej godziny rozliczenie przesuwa się o dobę, a doba w tej sprawie ma wartość.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Sam, czemu odmawiasz koperty?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Bo to nie są jego pieniądze. Zwróciłem Eliasowi za oprawkę, bo tak zrobiłem. Nie chcę, żeby mi to oddawał. To wstyd i dla niego, i dla mnie.",
          "mina": "emocja"
        },
        {
          "tekst": "Elias, czemu nie odpuszczasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Bo dług bez nazwy jest gorszy od długu z nazwiskiem. Oddam, a pan Holt może to wyrzucić. Ale najpierw musi wziąć.",
          "mina": "mowi"
        },
        {
          "tekst": "Sam, czemu odszedłeś tak nagle?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Nie nagle, odchodziłem sześć tygodni. Bilet leży u Iris od pierwszego dnia, od kiedy Ty usiadłeś. Nie wziąłem go. Wziąć znaczyło zostawić Cię i nic nie powiedzieć.",
          "mina": "emocja"
        },
        {
          "tekst": "Na odcinku jest data wpłaty zgodna z kwitem Eliasa. Co to?",
          "ton": "niewygodne",
          "wymaga": "d20_zegarek_tyl",
          "kto": "sam",
          "odpowiedz": "Dowód, że zapłaciłem. Z własnej kieszeni, nie z żadnego funduszu. To jedyna czysta rzecz w tej historii.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego od nas chcesz, Sam?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Niczego. Chciałem tylko zapytać: jak cię zapisać? Elias pyta o imię od tygodni, a ja nie umiem odpowiedzieć za ciebie.",
          "mina": "emocja"
        },
        {
          "tekst": "Victor, co weźmiesz o trzeciej?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Komplet: zeznanie Eliasa, zeznanie Sama, dowód wpłaty. Jeśli pochodzenie jest czytelne i jest pokwitowanie, wpisuję własny podpis. Jeśli nie, zamykam tak, jak jest.",
          "mina": "mowi"
        },
        {
          "tekst": "Elias, co zrobisz z kopertą, jeśli Sam jej nie weźmie?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Zostawię tu, na jego nazwisko. Niech leży, aż się zmęczy odmawiać.",
          "mina": "mowi"
        },
        {
          "tekst": "Na odwrocie odcinka: „Wpisuj mało. Pytaj o imiona.” Do kogo to?",
          "ton": "niewygodne",
          "wymaga": "d20_zegarek_tyl",
          "kto": "sam",
          "odpowiedz": "Do mnie, kiedyś. Dziś do ciebie. Nie pytaj, skąd wiem, że ci się przyda.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "komplet_zeznan",
      "etykieta": "Złóż uzgodniony komplet zeznań i dowodów",
      "kto": "victor",
      "pole": "imie",
      "reakcja": "Komplet przyjęty. Zeznania obu stron, dowód wpłaty i pokwitowanie. Wpisuję własny podpis, bo pochodzenie jest czytelne.",
      "zysk": "Victor podpisuje rozliczenie, a Sam zostaje czysty w papierach.",
      "strata": "Wszystkie dokumenty idą do Urzędu w dwóch egzemplarzach, a druga kopia zostaje poza twoją kontrolą.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Victor Crane: „Komplet w teczce. Zapisałem godzinę, 3:00, i imię, które podano. Oba egzemplarze wyszły.”"
      }
    },
    {
      "akcja": "poza_audytem",
      "etykieta": "Oddaj Samowi zegarek i trzymaj dokumenty poza audytem",
      "kto": "sam",
      "pole": "imie",
      "reakcja": "Zegarek wraca. Dokumenty zostają. Victor, nie patrz tak, tak jest uczciwie.",
      "zysk": "Sam zachowuje spokój, a Elias nie musi składać zeznań.",
      "strata": "Nic się nie zmienia w protokole, a Victor zamyka tydzień bez podpisu na swój koszt.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Victor Crane: „Audyt zamknięty bez kompletu. Zapisane: odmowa złożenia materiałów w terminie. Wrócimy do tego. — V.C.”"
      }
    },
    {
      "akcja": "czesc_zeznan",
      "etykieta": "Złóż tylko zeznanie Eliasa, bez Sama",
      "kto": "elias",
      "pole": "imie",
      "reakcja": "Moje zeznanie przyjęte? Dobrze. Niech zostanie. Pan Holt może się nie zgodzić, ale to moja sprawa.",
      "zysk": "Elias wreszcie mówi głośno, że przyjął zwrot, a Sam nie jest pytany.",
      "strata": "Dowód zostaje niepełny, a Victor wraca z pytaniem o Sama.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Elias Wren: „Czy moje zeznanie zostało przyjęte? Pytam, bo pan Holt przestał mi odpowiadać.”"
      }
    }
  ],
  "rola": "trzej mężczyźni i jedna koperta",
  "watki": [
    "Poprzednik",
    "Fotel",
    "Urząd"
  ],
  "tik": "Elias rozprostowuje numerek",
  "potrzeba": "zegarek Sama i zeznania",
  "slad": "notatka „Pytaj o imiona” i pole na imię",
  "wejscie_jesli": {
    "d15_sam:uzgodnij": "Elias Wren. Przyszedłem z panem Holtem, uzgodniliśmy to w zeszłym tygodniu. Zegarek jest jego, w etui po okularach, bo nie miał gdzie. Pan Holt odmawia pieniędzy, a ja nie odpuszczę. O trzeciej pan Crane odbiera materiały, więc musimy się zmieścić.",
    "d15_sam:victor_od_razu": "Elias Wren. Pan Holt nie chciał tu wracać, odkąd pan Crane dostał jego kalkę, ale przyszedł. Zegarek jest jego, w etui po okularach. Pan Holt odmawia pieniędzy, a ja nie odpuszczę. O trzeciej pan Crane odbiera materiały, więc musimy się zmieścić.",
    "d15_sam:oddaj_samowi": "Elias Wren. Przyszedłem z panem Holtem, który dostał od Was swoją kalkę i od tamtej pory patrzy na okienko inaczej. Zegarek jest jego, w etui po okularach. Pan Holt odmawia pieniędzy, a ja nie odpuszczę. O trzeciej pan Crane odbiera materiały."
  }
}
```


**Tobias Reed.** Potrzeba: zdążyć z towarem. Lęk: potrącenia z pensji. Tik: skraca nazwy ulic. Moment gwiazdy: breloczek-syrena z kopertą.

```json
{
  "id": "d20_tobias",
  "dzien": 20,
  "postac": "Tobias Reed, 29",
  "glos": "Szybko, o dostawach mówi jak o pogodzie. Skraca nazwy ulic, kiedy się spieszy.",
  "typ": "kierowca dostawczy, którego goni grafik",
  "rzecz": "Kluczyki do vana z breloczkiem-syreną",
  "wnetrze": [
    {
      "sekret_id": "d20_koperta_napiwki",
      "co_widac": "W blaszanej syrenie schowek na zawleczkę, a w nim koperta z napiwkami: sześćdziesiąt dolarów, w drobnych, z karteczką „kurtka M.”.",
      "co_z_tego_wynika": "Pieniądze są córki Tobiasa, nie jego. Zbierał je miesiącami."
    }
  ],
  "wejscie": "Tobias Reed, kierowca firmowy. Zostawiłem w szóstce kluczyki do vana, z breloczkiem w kształcie syreny. Van stoi pod zajezdnią z towarem dla sklepu i bez kluczyków nie ruszy o szóstej.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten breloczek?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Syrena z blachy, niebieska, z odłamanym ogonem. Dostałem od córki. Kluczyki są trzy, na kółku z kartą do bramy zajezdni.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie ich szukać?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W szóstce, na ostatnim siedzeniu przy oknie. Położyłem, jak zdejmowałem plecak, i wysiadłem w biegu. Typowe dla mnie, tylko że dziś piątek.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jest w tym vanie, że tak Ci się spieszy?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Towar dla sklepu: chleb, jajka i dwie skrzynki mleka. Jak nie dowiozę do szóstej, sklep nie otworzy się na czas.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Od jak dawna jeździsz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Cztery lata. Prawie nie widuję dnia. Córka mówi, że jestem jak nietoperz z prawem jazdy.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto może potwierdzić, że van jest Twój?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Firma. Dyspozytor Mick, numer jest na karcie. Ale o tej porze śpi i nie odbierze.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu spieszysz się tak, jakby coś Cię goniło?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo gonią mnie minuty. Pięć minut spóźnienia i dyspozytor odejmuje z pensji. Przy mojej pensji to boli.",
          "mina": "emocja"
        },
        {
          "tekst": "Czemu ten breloczek jest taki ciężki?",
          "ton": "niewygodne",
          "wymaga": "d20_koperta_napiwki",
          "odpowiedz": "Bo w środku jest schowek. Trzymam tam napiwki od klientów, żeby ich nie wydać. Sześćdziesiąt dolarów na kurtkę dla córki.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz, jak odzyskasz kluczyki?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Pojadę po bułki. Potem na stację, wypiję kawę i poczuję się jak człowiek.",
          "mina": "mowi"
        },
        {
          "tekst": "Jak zapisać Twoje nazwisko?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Reed, przez dwa e. Tobias, bez drugiego s, jak syrena bez ogona.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy ktoś mógłby chcieć tych kluczyków?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nikt z firmy. Ale ktoś mógłby wziąć van i sprzedać towar. Zdarzało się. Dlatego pilnuję kluczy bardziej niż portfela.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Są. Z ogonem albo bez, są. Dziękuję. Zdążę, chyba że zatrzymają mnie na świetle.",
      "zysk": "Tobias zdąża z towarem, a sklep otwiera się na czas.",
      "strata": "Wydajesz po opisie, bez dowodu, że van należy do niego.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Tobias Reed: „Zdążyłem. Sklep otworzył się o szóstej. Pani sprzedawczyni dała mi bułkę gratis. Powiedziałem, że to przez was.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Nie? Jak to nie? Dobrze, zadzwonię po Micka, ale on będzie wściekły. Wrócę z jego potwierdzeniem.",
      "zysk": "Procedura zachowana, kluczyki zostają w biurze.",
      "strata": "Tobias spóźnia się z towarem, a dyspozytor odejmuje mu z pensji.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Tobias Reed: „Mick dostał mnie o piątej. Potwierdził. Straciłem czterdzieści minut i dwadzieścia dolarów. Mówię bez złości, ale z żalem.”"
      }
    },
    {
      "akcja": "wez_60_tobias",
      "etykieta": "Zatrzymaj 60 $ napiwków z breloczka",
      "kasa": 60,
      "wymaga": "d20_koperta_napiwki",
      "reakcja": "Kluczyki są. A koperta? Przecież była w syrenie… Nie, nic. Muszę jechać. Dziękuję.",
      "zysk": "60 $ w kieszeni i dług u Marlowa o rację mniejszy.",
      "strata": "Tobias traci kurtkę dla córki, a Ty wiesz, że wziąłeś pieniądze od człowieka, który nic nie ma. Liczy się do zakończenia Nowy Sam.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Tobias Reed: „Koperta zniknęła razem z kluczykami, a kluczyki wróciły. Nie powiem, że to wy. Powiem, że kurtka dla córki poczeka do wypłaty.”"
      }
    }
  ],
  "rola": "kierowca dostawczy z grafikiem",
  "watki": [
    "pieniądze"
  ],
  "tik": "skraca nazwy ulic",
  "potrzeba": "kluczyki do vana przed szóstą",
  "slad": "ukryte napiwki na kurtkę dla jego córki"
}
```

# TYDZIEŃ 5: DOMKNIĘCIA

## DZIEŃ 21

**Maya, Lena, Priya.** Maya: potrzeba oddać suknię Evanowi i zamknąć wątek; trzeci test okienka. Lena: potrzeba słowa od siostry, tik: dopowiada „ale…”. Priya: potrzeba zdążyć na ślub o 11:00. Moment gwiazdy: cicha rada Mai, jeśli zdała dwa testy.

```json
{
  "id": "d21_maya_lena_priya",
  "dzien": 21,
  "postac": "Maya Doyle, Lena Brandt i Priya Nair",
  "glos": "Maya: precyzyjnie, liczy do trzech. Lena: szybko, urywa „ale…”. Priya: panna młoda, mówi na wdechu, patrzy na zegar.",
  "typ": "trzy kobiety i dwie identyczne walizki",
  "rzecz": "Szara twarda walizka z żółtą wstążką na rączce",
  "ludzie": {
    "maya": "Maya Doyle",
    "lena": "Lena Brandt",
    "priya": "Priya Nair"
  },
  "wnetrze": [
    {
      "sekret_id": "d21_bilet_0517",
      "co_widac": "W zamykanej kieszeni walizki Mai leży suknia i jednorazowy bilet z numerem 0517, bez daty. Zszyty z kartką: „Wyjście. Raz.”",
      "co_z_tego_wynika": "Bilet Mai przyszedł od ludzi, którzy dają ludziom wyjście. To nie ona go wymyśliła."
    },
    {
      "sekret_id": "d21_metka",
      "co_widac": "Na rączce jednej z walizek metka z długopisem: „P. Nair”. Druga ma pusty uchwyt na metkę.",
      "co_z_tego_wynika": "Walizki odróżnia metka i wstążka. Kto wydaje bez porównania, ryzykuje czyjś ślub."
    }
  ],
  "wejscie": "Maya Doyle po walizkę, Lena Brandt po wiadomość od Mai, a Priya Nair po swoją, bo ślub ma o jedenastej. Są dwie szare walizki i obie zamykają się tak samo. Zacznijmy od tego, która czyja.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Priya, jak wygląda Twoja walizka?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "priya",
          "odpowiedz": "Szara, twarda, z żółtą wstążką na rączce. W środku suknia, buty i welon w osobnej torbie, bo się gniecie. Zamek ma zacięty suwak z lewej.",
          "mina": "mowi"
        },
        {
          "tekst": "Maya, co jest w Twojej walizce?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Suknia. Moja, sprzed siedmiu lat. Nie na ślub, na oddanie. Raz, dwa, trzy. Evan ma ją dostać. To jedyna wiadomość, jaką mu wyślę.",
          "mina": "emocja"
        },
        {
          "tekst": "Lena, czemu przyszłaś razem z Mayą?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "lena",
          "odpowiedz": "Bo wiem, że to dziś. Nie chcę, żeby poszła sama. Ale… nie sama, tylko obok. Ona mówi, że obok to też za blisko.",
          "mina": "emocja"
        },
        {
          "tekst": "W kieszeni walizki Mai jest bilet 0517. Skąd on jest?",
          "ton": "niewygodne",
          "wymaga": "d21_bilet_0517",
          "kto": "maya",
          "odpowiedz": "Dostałam go w kopercie, bez słowa. Nie wiem od kogo, wiem od czego. Pytaj, czemu nie użyłam go wcześniej.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Maya, czemu oddajesz suknię Evanowi?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Bo to jego pamiątka, nie moja. Nie chcę od niego niczego, ani żalu, ani rzeczy. Oddam i będzie po wszystkim.",
          "mina": "mowi"
        },
        {
          "tekst": "Lena, co chcesz przekazać Mai?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "lena",
          "odpowiedz": "Że jest mi przykro, że dopiero jej zniknięcie mnie ruszyło. Że mogłam pytać. Ale ona nie chce słuchać, a ja nie chcę być jak Evan.",
          "mina": "emocja"
        },
        {
          "tekst": "Priya, wesele o jedenastej. Co, jeśli walizki się pomylą?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "priya",
          "odpowiedz": "Będę stała w cudzej sukni, a ktoś w mojej. Nie pomylą się, mam metkę. No i wstążkę. Nikt tak nie wiąże kokardy.",
          "mina": "mowi"
        },
        {
          "tekst": "Która walizka ma metkę z nazwiskiem?",
          "ton": "niewygodne",
          "wymaga": "d21_metka",
          "kto": "priya",
          "odpowiedz": "Moja. Dopisałam długopisem, bo wiem, jak jest na dworcach. Tamta bez metki jest czyjaś inna. Maya, nie obrażaj się.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Maya, jak się czujesz przed oddaniem sukni?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "maya",
          "odpowiedz": "Jak po wyłączeniu prądu. Nic nie iskrzy. Ciszej, niż myślałam. Chyba lepiej.",
          "mina": "mowi"
        },
        {
          "tekst": "Maya, powiedz jeszcze coś, zanim odejdziesz.",
          "ton": "uprzejme",
          "wymaga": "maya_testy_2",
          "kto": "maya",
          "odpowiedz": "Tak. Cicho, żeby Lena nie słyszała. Iris ma dla Ciebie jeden bilet, powiedziała mi sama, kiedy spytałam, kto tu siedział przed Tobą. Nie bierz go z jej ręki. Raz, dwa, trzy.",
          "mina": "emocja"
        },
        {
          "tekst": "Lena, wolisz przekazać wiadomość sama czy przeze mnie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "lena",
          "odpowiedz": "Przez Ciebie, jeśli Maya pozwoli. Sama zepsuję. Zawsze mówię o dwa zdania za dużo.",
          "mina": "emocja"
        },
        {
          "tekst": "Priya, bardzo Ci się spieszy?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "priya",
          "odpowiedz": "Strasznie. Mam pięćdziesiąt dolarów w kopercie na taksówkę. Dam je, jeśli wydacie obie walizki od ręki, bez sprawdzania.",
          "mina": "neutralna",
          "ustawia": "d21_oferta_50"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wiadomosc_zatwierdzona",
      "etykieta": "Wydaj Mai walizkę, Lenie tylko zatwierdzoną wiadomość",
      "kto": "maya",
      "reakcja": "Raz. Dwa. Trzy. Tak. Trzeci test zaliczony. Lena dostaje to, co zatwierdziłam, nic ponad. Okienko wytrzymało trzy razy z rzędu.",
      "zysk": "Maya ufa okienku, a Lena dostaje dokładnie jedno zdanie od siostry.",
      "strata": "Lena zostaje z żalem i wiadomością, która przeszła przez filtr. Evan dostaje tylko suknię.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Lena Brandt: „Dostałam jedno zdanie i kartkę z podpisem Mai. Przeczytałam sześć razy. Dziękuję, że nikt nie dopisał nic od siebie. — L.”"
      }
    },
    {
      "akcja": "bez_posrednictwa",
      "etykieta": "Wydaj Mai walizkę bez pośrednictwa, Lena bez słowa",
      "kto": "maya",
      "reakcja": "Czysto. Bez pośrednika i bez wiadomości, którą ktoś mógłby przepisać. Wychodzę. Raz, dwa, trzy. Zamykam.",
      "zysk": "Maya odchodzi czysto i nikt nie zna szczegółów.",
      "strata": "Lena zostaje przy szybie bez słowa. Maya nie zalicza trzeciego testu, bo ufa bardziej sobie niż okienku.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Lena Brandt: „Maya wyjechała i nie zostawiła mi nic. Pytałam, czy ktoś coś zapisał. Nikt. Wiem, że tak chciała. To nie znaczy, że umiem.”"
      }
    },
    {
      "akcja": "wez_50_priya",
      "etykieta": "Weź 50 $ od Priyi i wydaj obie walizki od ręki",
      "kasa": 50,
      "wymaga": "d21_oferta_50",
      "kto": "priya",
      "reakcja": "Dziękuję, dziękuję! Wzięłam szarą ze wstążką. Maya, przepraszam. Lecę, bo zaraz zacznę płakać. Koperta na ladzie, tak?",
      "zysk": "50 $ w kieszeni i kolejka rusza szybko.",
      "strata": "Metka przestaje mieć znaczenie, a Maya widzi, że okienko bierze pieniądze za pośpiech. Nie zalicza trzeciego testu.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Priya Nair: „Zdążyłam. W taksówce otworzyłam walizkę i sprawdziłam. Wstążka się zgadzała. Wiem, że mogło być inaczej.”"
      }
    }
  ],
  "rola": "trzy kobiety i dwie walizki",
  "watki": [
    "Zaginiona",
    "Fotel"
  ],
  "tik": "Maya liczy, Lena „ale…”",
  "potrzeba": "suknia, wiadomość i ślub o jedenastej",
  "slad": "bilet 0517 w zamykanej kieszeni walizki Mai",
  "wejscie_jesli": {
    "d11_maya:powiadom_rodzine": "Maya Doyle po walizkę, bez słowa do Leny. Lena Brandt stoi obok, bo od was wie, że siostra żyje. Priya Nair po swoją, ślub ma o jedenastej. Są dwie szare walizki i obie zamykają się tak samo. Zacznijmy od tego, która czyja.",
    "d14_noah:bez": "Maya Doyle po walizkę. Noah Reyes zamknął sprawę bez jej podpisu, więc przyszła tylko po rzecz. Lena Brandt po wiadomość, Priya Nair po swoją, ślub ma o jedenastej. Dwie szare walizki, obie zamykają się tak samo. Zacznijmy od tego, która czyja.",
    "d16_maya_lena:lena_zalatwia": "Maya Doyle po walizkę, którą Lena obiecała odwieźć. Lena Brandt po wiadomość od Mai, Priya Nair po swoją, ślub ma o jedenastej. Są dwie szare walizki i obie zamykają się tak samo. Zacznijmy od tego, która czyja.",
    "d17_evan:zdradz_szczegol": "Maya Doyle po walizkę. Ktoś powiedział Evanowi, że była w czwórce o 22:40, więc przyszła tylko po rzecz, bez rozmów. Lena Brandt po wiadomość, Priya Nair po swoją, ślub ma o jedenastej. Dwie szare walizki. Zacznijmy od tego, która czyja."
  }
}
```


**Mina Oh.** Potrzeba: lek o ósmej i śniadanie z wnuczką. Lęk: cudzy koszyk. Tik: mówi wszystko dwa razy. Moment gwiazdy: „Śliwki to winogrona, które się przebrały.”

```json
{
  "id": "d21_mina",
  "dzien": 21,
  "postac": "Mina Oh, 68",
  "glos": "Spokojnie i z uporem. Mówi do rzeczy tak, jak mówi się do kota: cierpliwie i dwa razy.",
  "typ": "emerytka, która pilnuje leków",
  "rzecz": "Wiklinowy koszyk z lekami i słoikiem śliwek",
  "wnetrze": [
    {
      "sekret_id": "d21_recepta",
      "co_widac": "Na dnie koszyka recepta na nazwisko M. Oh i paragon z apteki: 94 $ za miesiąc leków na serce. Pod spodem druga, nieopłacona.",
      "co_z_tego_wynika": "Mina płaci za leki z oszczędności. Drugiego miesiąca nie starczy."
    }
  ],
  "wejscie": "Mina Oh, emerytka. Zostawiłam w czwórce wiklinowy koszyk z lekami na serce i słoikiem śliwek dla wnuczki. Lek muszę wziąć o ósmej rano. Słyszałam, że w biurze stoją dwa podobne koszyki, więc proszę mi nie dać cudzego.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda Twój koszyk?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wiklinowy, z pokrywką na rzemyk. Rzemyk zawiązałam podwójnym węzłem, bo pierwszy zawsze się rozwiązuje. Wewnątrz serwetka w kratkę.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jest w środku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Leki, jedno opakowanie na miesiąc. Słoik śliwek z pestkami, wnuczka nie lubi bez pestek. I paragon z apteki.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu nie wzięłaś koszyka z tramwaju od razu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo zasnęłam. Człowiek w moim wieku zasypia, jak mu się pozwoli. Teraz pamiętam, że pozwoliłam.",
          "mina": "mowi"
        },
        {
          "tekst": "Na paragonie jest kwota 94 dolarów. To dużo jak na leki.",
          "ton": "niewygodne",
          "wymaga": "d21_recepta",
          "odpowiedz": "Dużo. Emerytura starcza na dwa tygodnie, a reszta idzie z oszczędności. Nie narzekam, tylko liczę.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Dla kogo jest ten słoik?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Dla Zoe, wnuczki. Ma siedem lat i twierdzi, że śliwki to owoce, które się przebrały za winogrona.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto może potwierdzić, że koszyk jest Twój?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Apteka na Rynku, farmaceutka Anja. Zna mnie od lat, ale o tej porze już śpi.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu boisz się cudzego koszyka?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo raz wzięłam cudzy i wzięłam cudze tabletki. Dobrze, że to były witaminy. Od tamtej pory sprawdzam podwójnie.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz po odzyskaniu koszyka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wezmę lek, a potem zrobię sobie herbatę. Zoe przyjdzie na śniadanie z mamą, więc słoik musi być cały.",
          "mina": "mowi"
        },
        {
          "tekst": "Jak zapisać Twoje nazwisko?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Oh, przez „h” na końcu. Mina, od Wilhelminy. Tak mnie nazwano przed wojną, której nie pamiętam.",
          "mina": "mowi"
        },
        {
          "tekst": "Co, jeśli koszyk się nie znajdzie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To pójdę do Anji o ósmej i poproszę na kreskę. Nie pierwszy raz, a Anja nie pyta.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Rzemyk podwójny, serwetka w kratkę. To mój. Dziękuję. Wnuczka dostanie śliwki, a ja lek o ósmej.",
      "zysk": "Mina odzyskuje lek i słoik, a Zoe ma śniadanie.",
      "strata": "Wydajesz po opisie, a drugi koszyk dalej stoi w kącie bez właściciela.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Mina Oh: „Wzięłam lek o ósmej. Zoe zjadła śliwki z pestkami i powiedziała, że to najlepsze winogrona. Nic nie wiem o tym drugim koszyku.”"
      }
    },
    {
      "akcja": "zadzwon",
      "etykieta": "Zadzwoń do apteki i potwierdź receptę",
      "reakcja": "O tej porze? Dobrze, apteka na Rynku ma dyżur nocny. Dziękuję, że sprawdzacie, nikt tak nie robi.",
      "zysk": "Recepta potwierdzona, koszyk wydany bez wątpliwości.",
      "strata": "Mina czeka dłużej, a lek bierze później niż o ósmej.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Mina Oh: „Anja potwierdziła przez telefon. Powiedziała, że ktoś w biurze pracuje porządnie. Zapisała mnie na stałe, na kreskę.”"
      }
    },
    {
      "akcja": "wyloz_94",
      "etykieta": "Wydaj koszyk i dołóż 94 $ na lek na następny miesiąc",
      "kasa": -94,
      "wymaga": "d21_recepta",
      "reakcja": "Nie prosiłam o to. Nie wezmę. …Wezmę, bo Zoe będzie na śniadaniu, a ja nie będę liczyć dni do końca miesiąca. Dziękuję.",
      "zysk": "Mina ma lek na dwa miesiące i spokojną głowę.",
      "strata": "Tracisz 94 $ z własnej kieszeni, a do soboty jest daleko. Liczy się do zakończenia Nowy Sam.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Mina Oh: „Wczoraj wzięłam drugie opakowanie. Zoe narysowała dla Ciebie śliwkę z pestką. Zostawiam przy szybie. — M.O.”"
      }
    }
  ],
  "rola": "emerytka pilnująca leków",
  "watki": [
    "pieniądze",
    "humor"
  ],
  "tik": "mówi wszystko dwa razy",
  "potrzeba": "koszyk z lekiem na ósmą",
  "slad": "paragon 94 $ za miesiąc leków"
}
```

## DZIEŃ 22

**Noah Reyes.** Potrzeba: zamknąć sprawę, zanim ktoś otworzy ją gorzej. Lęk: detektywa z zewnątrz. Tik: „Czyli:”. Moment gwiazdy: „Zapisuję: dyżurny, bez nazwiska.”

```json
{
  "id": "d22_noah",
  "dzien": 22,
  "postac": "Noah Reyes, 42",
  "glos": "Krótko, prosto, ściszonym głosem. Kładzie rzeczy równo z krawędzią lady. Mówi: „Czyli:”.",
  "typ": "policjant, który zamyka sprawę",
  "rzecz": "Sztywna szara koperta policyjna",
  "wnetrze": [
    {
      "sekret_id": "d22_zakres_zgody",
      "co_widac": "Na kartce zakres zgody pismem Mai: „Wolno potwierdzić, że żyję. Nie wolno: miasto, nazwisko, linia, praca. Ważne do wtorku, siódmego września.”",
      "co_z_tego_wynika": "Maya zgodziła się na jedno zdanie, nie na ślad. Ktoś, kto czyta więcej, wychodzi poza jej zgodę."
    }
  ],
  "wejscie": "Noah Reyes, komisariat przy Rynku. Dziś kończy się termin zgłoszenia zaginięcia Mai Doyle. Czyli: potrzebuję oświadczenia, jeśli jest, i decyzji, co z nim zrobić. Koperta powinna być w depozycie.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co dokładnie jest w kopercie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czyli: oświadczenie Mai, jedna strona, podpis, data. I kartka z zakresem zgody, żeby nikt nie napisał o jedno zdanie za dużo.",
          "mina": "mowi"
        },
        {
          "tekst": "Co zrobisz z oświadczeniem?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Czyli: dołączę do akt i zamknę zgłoszenie. Dziś mija termin. Potem to już nie poszukiwanie, tylko wiedza, że żyje.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu tak Ci zależy na terminie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo po terminie rodzina może wynająć kogoś z zewnątrz. Czyli ktoś będzie szukał, a ja nie będę miał nad nim żadnej kontroli.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Od kiedy prowadzisz tę sprawę?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Od czwartku sprzed pięciu tygodni. Czyli od dnia zgłoszenia. Najpierw myślałem, że zwykła. Potem zobaczyłem pismo Mai.",
          "mina": "mowi"
        },
        {
          "tekst": "Do której złożysz papiery?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Do szóstej rano. Czyli jeśli się spóźnię, sprawa idzie wyżej i nic z tego nie zależy ode mnie.",
          "mina": "mowi"
        },
        {
          "tekst": "Co dokładnie mogę przekazać z tej koperty?",
          "ton": "niewygodne",
          "wymaga": "d22_zakres_zgody",
          "odpowiedz": "Czyli: że żyje i jest bezpieczna. Nie wolno: miasto, nazwisko, linia, praca. Napisała to sama, własną ręką.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy Evan wie, że to oświadczenie istnieje?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie. I niech tak zostanie. Ale w kolejce stoi ktoś w szarym kapeluszu, a on pyta o to samo.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co pomogło Ci w tej sprawie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czyli: że ktoś odmówił powiedzenia za dużo. Mało kto to potrafi, zwłaszcza po nocy.",
          "mina": "mowi"
        },
        {
          "tekst": "Co się stanie, jeśli nic nie przekażę?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Czyli: zgłoszenie wisi. Maya jest bezpieczna, ale detektyw rusza, a ja go nie zatrzymam.",
          "mina": "mowi"
        },
        {
          "tekst": "Co dostanie Evan, jeśli oświadczenie do niego dotrze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Czyli: jedno zdanie. Żyje i nie wróci. Nic więcej. Chyba że ktoś dopisze od siebie, a wtedy to już nie jest jej zdanie.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "przekaz_w_granicach",
      "etykieta": "Przekaż oświadczenie w granicach zgody Mai",
      "reakcja": "Czyli: zamykam zgłoszenie, Evan dostaje jedno zdanie. Zapisuję: dyżurny, bez nazwiska.",
      "zysk": "Noah zamyka sprawę, a Maya jest oficjalnie bezpieczna.",
      "strata": "Dokumenty trafiają do akt, a akta czyta ktoś więcej niż Noah.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Evan Doyle: „Dostałem jedno zdanie od policji. Dziękuję, że ktoś oddał mi je w całości. Nie wiem jeszcze, co z nim zrobię.”"
      }
    },
    {
      "akcja": "zostaw_otwarte",
      "etykieta": "Zostaw sprawę otwartą, nic nie przekazuj",
      "reakcja": "Czyli: zgłoszenie wisi. Maya bezpieczna, a na zewnątrz ktoś ruszy z własnym szukaniem. Nie moja decyzja.",
      "zysk": "Maya jest bezpieczna, a oświadczenie zostaje w depozycie.",
      "strata": "Po terminie Evan może trafić do detektywa, który nie pyta o zgodę.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Mężczyzna w szarym kapeluszu: „Zgodnie z regulaminem. Dostałem wskazówkę z biura rzeczy znalezionych. Nie mówię, od kogo.”"
      }
    },
    {
      "akcja": "przekaz_calosc",
      "etykieta": "Przekaż całą kopertę, także kartkę z zakresem",
      "reakcja": "Czyli: wszystko, jak leży. Dobrze. Nikt nie powie, że coś ukryłem.",
      "zysk": "Noah ma komplet i zgłoszenie zamyka się szybko.",
      "strata": "Granice zgody Mai, jej własne słowa, trafiają do akt, więc ktoś może je wykorzystać przeciw niej.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Noah Reyes: „Kartkę z zakresem zgody widziałem w aktach po raz drugi. Ktoś kopiował, nie ja. Sprawdzam, kto. — N.R.”"
      }
    }
  ],
  "rola": "policjant zamykający zgłoszenie",
  "watki": [
    "Zaginiona"
  ],
  "tik": "mówi „Czyli:”",
  "potrzeba": "oświadczenie Mai przed terminem",
  "slad": "zakres zgody Mai: wolno tylko potwierdzić, że żyje",
  "wejscie_jesli": {
    "d14_noah:bez": "Noah Reyes, komisariat przy Rynku. Nie rezerwowałem terminu, więc dziś mija. Czyli: potrzebuję oświadczenia, jeśli jest, i decyzji, co z nim zrobić. Koperta powinna być w depozycie.",
    "d11_maya:powiadom_rodzine": "Noah Reyes, komisariat. Lena Brandt wie, że siostra żyje, i nie pytała mnie o nic więcej. Dziś mija termin zgłoszenia. Czyli: potrzebuję oświadczenia Mai, jeśli jest. Koperta powinna być w depozycie.",
    "d17_evan:zdradz_szczegol": "Noah Reyes, komisariat. Evan Doyle wie, że Maya była w czwórce o 22:40, i nie powiedział mi, skąd. Dziś mija termin. Czyli: potrzebuję oświadczenia Mai i decyzji, co z nim zrobić. Koperta w depozycie."
  }
}
```

**Marek Stahl.** Potrzeba: kierunku Mai dla zleceniodawcy. Kłamie o walizce i o tym, od kogo zna opis. Tik: „zgodnie z regulaminem”. Moment gwiazdy: zna walizkę po kolorze zamka i nie mówi, skąd.

```json
{
  "id": "d22_stahl",
  "dzien": 22,
  "postac": "Marek Stahl, ok. 50",
  "glos": "Gładki, zbyt dobrze przygotowany, powtarza frazy z regulaminu: „zgodnie z regulaminem”.",
  "typ": "klient, który wie za dużo",
  "rzecz": "Szara walizka z żółtym zamkiem, zgłoszona jako zgubiona",
  "wnetrze": [
    {
      "sekret_id": "d22_kwit_maya",
      "co_widac": "Na kopii pokwitowania wydania: „Odbiorca: M.D. Rzecz: walizka szara, wydana wczoraj. Dalej: linia 4, peron 5.” Pieczątka okienka.",
      "co_z_tego_wynika": "Kwit podaje miejsce i godzinę. To adres, którego Maya nie zgodziła się podać."
    },
    {
      "sekret_id": "d22_depozyt_detektyw",
      "co_widac": "Do walizki przypięta karteczka: „Depozyt detektywa, zaliczka 600 $, odbiór po okazaniu pełnomocnictwa. S.” Pieczątka biura detektywistycznego.",
      "co_z_tego_wynika": "Stahl działa jako pełnomocnik zatrudnionego detektywa Evana i ma przy sobie dowód zaliczki."
    }
  ],
  "wejscie": "Dobry wieczór. Marek Stahl. Zgodnie z regulaminem zgłaszam zgubę: szara walizka, w środku biała suknia, bilet i kartka z numerem. Proszę o wskazanie, kto ją wczoraj odebrał, żeby sprawa była jasna.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta walizka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Szara, twarda, z żółtym zamkiem. Zgodnie z regulaminem dodam, że w środku jest biała suknia. Opis jest dokładny, nie traćmy czasu biura.",
          "mina": "mowi"
        },
        {
          "tekst": "Kiedy ją zgubiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Wczoraj, jedenastką, o szóstej. Zgodnie z regulaminem pamiętam to doskonale: peron, godzina, nawet pogoda.",
          "mina": "klamie"
        },
        {
          "tekst": "Skąd tak dokładnie znasz opis sukni?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Zgodnie z regulaminem: od klienta, który ją pakował. Nie podaję nazwiska klienta. Mam do tego prawo.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czego dokładnie od okienka potrzebujesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jednej rzeczy. Kopii pokwitowania wydania z wczoraj, ze wskazaniem, kto odebrał walizkę i dokąd miała jechać.",
          "mina": "mowi"
        },
        {
          "tekst": "Na jakiej podstawie to żądasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Zgodnie z regulaminem: jako zgłaszający zgubę. Z dokumentem potwierdzającym własność lub bez, ale z opisem. Opis mam, proszę sprawdzić.",
          "mina": "klamie"
        },
        {
          "tekst": "Czy to Ty stałeś wczoraj na końcu kolejki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Zgodnie z regulaminem kolejka jest publiczna. Stałem tam, gdzie wolno stać. Jeśli to zapisano, proszę zapisać z kropką po imieniu.",
          "mina": "emocja"
        },
        {
          "tekst": "Na kwicie: odbiór M.D., linia 4, peron 5. Co z tym?",
          "ton": "niewygodne",
          "wymaga": "d22_kwit_maya",
          "odpowiedz": "Zgodnie z regulaminem proszę o kopię. Z tej linijki da się poskładać wszystko. Zapłacę, żeby oszczędzić biuru pisania.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jak długo szukasz tej osoby?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Ponad miesiąc. Zgodnie z regulaminem nie podaję, kto płaci. Ludzie bywają wdzięczni za dobrze wykonaną robotę.",
          "mina": "mowi"
        },
        {
          "tekst": "Czego byś się nie dowiedział, gdyby okienko odmówiło?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Niczego, czego nie da się znaleźć gdzie indziej. Tylko wolniej, a wolniej bywa drożej dla wszystkich zainteresowanych.",
          "mina": "neutralna"
        },
        {
          "tekst": "Ile jesteś gotów zapłacić za kopię kwitu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Zgodnie z regulaminem to nie jest łapówka, tylko opłata manipulacyjna. Dwieście dolarów, od ręki, bez podpisywania.",
          "mina": "neutralna",
          "ustawia": "d22_oferta_200"
        },
        {
          "tekst": "Do walizki jest przypięta karteczka z depozytem detektywa. Co to?",
          "ton": "niewygodne",
          "wymaga": "d22_depozyt_detektyw",
          "odpowiedz": "Zaliczka, sześćset dolarów, na wypadek, gdyby pełnomocnictwo nie przyszło na czas. To zgodne z regulaminem. Proszę nie traktować tego jak nacisku.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "stahl_odeslij",
      "etykieta": "Odeślij: żądaj dokumentu własności i nic nie wydawaj",
      "reakcja": "Zgodnie z regulaminem… rozumiem. Dokument własności. Wrócę z nim. Albo z kimś, kto wie, jak się takie rzeczy załatwia.",
      "zysk": "Maya zostaje bezpieczna, a Stahl wie, że okienko go przejrzało.",
      "strata": "Stahl zapamiętuje, kto stoi za szybą, i wraca z innej strony.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Marek Stahl: „Zgodnie z regulaminem. Dokument właściciela mam. Wystawił go ktoś, kto nie powinien.”"
      }
    },
    {
      "akcja": "stahl_wydaj",
      "etykieta": "Wydaj Stahlowi kopię kwitu z wczorajszego wydania",
      "reakcja": "Zgodnie z regulaminem. Dziękuję. Linia 4, peron 5. Tyle wystarczy. Nie zapomnę, kto był uprzejmy.",
      "zysk": "Stahl odchodzi z kierunkiem, a Ty zachowujesz czystą kieszeń i czyste sumienie wobec Marlowa.",
      "strata": "Detektyw dostaje trop Mai i jedzie za nią na linię 4, na peron 5.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Evan Doyle: „Detektyw zadzwonił. Wie, którą linią i o której. Nie prosiłem o to. Nie wiem, kto zapisał. — E.D.”"
      }
    },
    {
      "akcja": "wez_200_stahl",
      "etykieta": "Weź 200 $ opłaty i wydaj kopię kwitu",
      "kasa": 200,
      "wymaga": "d22_oferta_200",
      "reakcja": "Zgodnie z regulaminem: dwieście, na ladzie. Dziękuję za sprawność. Linia 4, peron 5. Zapisane.",
      "zysk": "200 $ w ręku i kolejka bez zakłóceń.",
      "strata": "Okienko sprzedało trop za opłatę: Urząd +2, kopie +1, a Stahl wraca z drugim pytaniem.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Evan Doyle: „Detektyw wie, którą linią i o której. Zapłacił za to, a Ty nie wiesz komu. Dzwonię, bo nie potrafię przestać. — E.D.”"
      }
    }
  ],
  "rola": "detektyw udający zgłaszającego",
  "watki": [
    "Zaginiona",
    "Urząd",
    "pieniądze"
  ],
  "tik": "mówi „zgodnie z regulaminem”",
  "potrzeba": "kwit z kierunkiem Mai",
  "slad": "200 $ za trop i walizka Mai"
}
```

**Jonah Pike.** Potrzeba: odzyskać ratę przed Marlowem i powiedzieć June. Lęk: że miłość zostanie policzona jak kredyt. Tik: zwalnia na imieniu June. Moment gwiazdy: „Czasem pożyczka to otwarte drzwi dla niego.”

```json
{
  "id": "d22_jonah",
  "dzien": 22,
  "postac": "Jonah Pike, 22",
  "glos": "Mówi szybko, poprawia się w pół zdania. Kiedy pada imię June, zwalnia.",
  "typ": "kurier, który wraca z dobrą wiadomością i długiem",
  "rzecz": "Biała koperta z napisem „K.M.”",
  "wnetrze": [
    {
      "sekret_id": "d22_koperta_km",
      "co_widac": "W kopercie 90 $ w banknotach i kartka z ołówkowym dopiskiem: „Ostatnia rata. K.M.” Obok trzy rubryki dat, dwie przekreślone.",
      "co_z_tego_wynika": "Pieniądze Jonaha idą do tego samego człowieka, któremu Ty też jesteś winien. Ktoś liczy raty na obu."
    }
  ],
  "wejscie": "Jonah. Pamiętasz? Plecak. June powiedziała tak. Zgubiłem teraz kopertę, białą, z napisem K.M., dziewięćdziesiąt dolarów na ratę. Wypadła z kieszeni w czwórce. Proszę, bardzo proszę.",
  "wejscie_jesli": {
    "d2_jonah:wydaj": "Jonah. Pamiętasz? Plecak, pierścionek. June powiedziała tak! Zgubiłem teraz kopertę, białą, z napisem K.M. Dziewięćdziesiąt dolarów raty. Wypadła w czwórce. Proszę.",
    "d2_jonah:wez_pierscionek": "Jonah. Ten od plecaka, bez pierścionka. June i tak powiedziała tak, z serwetką. Zgubiłem kopertę, białą, K.M., dziewięćdziesiąt dolarów raty. Proszę, szukajcie.",
    "d2_jonah:odmow": "Jonah. Ten, co wrócił po plecak z kolegą. June powiedziała tak. Teraz kopertę zgubiłem, białą, K.M., dziewięćdziesiąt dolarów raty. Proszę, bardzo proszę."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w tej kopercie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Dziewięćdziesiąt dolarów w banknotach i kartka z podpisem. Rata dla człowieka, którego nie nazywam, bo i tak wiesz, kto to.",
          "mina": "mowi"
        },
        {
          "tekst": "Kiedy ją zgubiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dziś o piątej, na końcu czwórki. Wiem, bo wysiadałem, żeby zdążyć do June, i dopiero na schodach zobaczyłem, że kieszeń płasko leży.",
          "mina": "mowi"
        },
        {
          "tekst": "Komu jesteś winien te pieniądze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Marlowowi. Kubie Marlowowi. Pożyczył na pierścionek i na wesele. Teraz mówi, że rata rośnie, jak się zgubi kopertę.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jak poszły oświadczyny z June?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Powiedziała tak. Jeszcze raz: tak! Płakała i śmiała się naraz. Ślub w czerwcu. Zapraszam, jeśli Ci to nie przeszkadza.",
          "mina": "emocja"
        },
        {
          "tekst": "Ile jeszcze jesteś winien Marlowowi?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Z tą ratą zostanie jeszcze trzysta sześćdziesiąt. Czyli sześć sobót. Liczę na ślub, bo goście dadzą na koperty.",
          "mina": "mowi"
        },
        {
          "tekst": "Co, jeśli koperty nie ma w biurze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To spłacę z czynszu. June się dowie, bo musi. Kuba nie przyjmuje wymówek, tylko pieniądze. Czasem uśmiech.",
          "mina": "emocja"
        },
        {
          "tekst": "Na kopercie napisano ołówkiem „ostatnia rata”. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": "d22_koperta_km",
          "odpowiedz": "Że Kuba tak napisał, żebym nie liczył na ulgę. Czasem pożyczka to nie jest pieniądz. To otwarte drzwi dla niego.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz, jeśli odzyskasz kopertę?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Pobiegnę do Kuby, zanim się rozmyślę. A potem pojadę do June i powiem jej o długu. Wszystko.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy kto inny wie o tym długu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "June nie. Moja matka tak, ale jej nie mówię, że to Marlow. Bo ona zna jego matkę i będzie wstyd.",
          "mina": "mowi"
        },
        {
          "tekst": "Co Ci przeszkadza w mówieniu June?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Że będzie patrzyła na pierścionek jak na kredyt. Że spytam, czy kocha mnie, czy ratę. Głupie, ale tak myślę.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję! Nie wiem, jak dziękować. Biegnę do Kuby, a potem do June. Wszystko jej powiem. Dziś. Przysięgam.",
      "zysk": "Jonah spłaca ratę i zyskuje odwagę, żeby powiedzieć June prawdę.",
      "strata": "Jonah przynosi okienku ciężar, którego nie będzie umiał udźwignąć sam, i Marlow nie zapomni, kto go ratuje.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Jonah Pike: „Powiedziałem June. Spytała tylko: ile jeszcze? Policzyła i powiedziała, że razem damy radę. Dziękuję za kopertę.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Nie? Jak to nie? Dobrze, dobrze, rozumiem, że zasady. Ale Kuba tego nie zrozumie. Wrócę z kimś, kto potwierdzi, że to moje.",
      "zysk": "Okienko trzyma procedurę, a koperta zostaje w depozycie.",
      "strata": "Jonah wraca do Marlowa z pustymi rękami, a odsetki liczą się od jutra.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Jonah Pike: „Kuba policzył mi dwadzieścia dolarów za to, że nie miałem koperty. Mówi, że to nie kara, tylko procent.”"
      }
    },
    {
      "akcja": "wez_90_marlow",
      "etykieta": "Zatrzymaj 90 $ i zalicz je na własny dług u Marlowa",
      "kasa": 90,
      "wymaga": "d22_koperta_km",
      "reakcja": "Gdzie… gdzie koperta? Przecież tu leżała. Proszę, tu pisało K.M., to przecież dla… ja mam ratę, ja nie mogę… Idę do Kuby.",
      "zysk": "90 $ ratują Twój czynsz i dług u Marlowa o jedną ratę.",
      "strata": "Jonah traci ostatnie pieniądze przed ślubem, a Marlow dowiaduje się, kto wziął kopertę z jego imieniem.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Kuba Marlow, przez kuzyna: „Rata sobotnia przyszła z innej ręki niż Jonaha. Dziękuję. Ręka też zostaje zapisana. — K.M.”"
      }
    }
  ],
  "rola": "kurier z dobrą wiadomością i długiem",
  "watki": [
    "Marlow",
    "pieniądze"
  ],
  "tik": "zwalnia na imieniu June",
  "potrzeba": "koperta K.M. z 90 $",
  "slad": "rata dla Marlowa w Twoich rękach"
}
```


## DZIEŃ 23

**Iris, Nora, Victor.** Iris: potrzeba wyjść z pieniędzmi i bez śladu; ukrywa: że siedziała w fotelu. Nora: potrzeba oryginałów dla czternastu rodzin. Victor: potrzeba zamknąć rozliczenie bez nazwisk, ale z podpisem. Moment gwiazdy: „Siedziałam w tym fotelu. Osiem lat temu.”

```json
{
  "id": "d23_iris_nora_victor",
  "dzien": 23,
  "postac": "Iris Bell, Nora Vance i Victor Crane",
  "glos": "Iris: cicho, uprzejmie, „nie lubię naciskać”, groźbę podaje jak prognozę pogody. Nora: po kolei, rzecz-osoba-skutek. Victor: krótko, „kto to podpisze?”.",
  "typ": "trzy strony i jedna kasetka",
  "rzecz": "Stalowa kasetka na rachunki z kluczykiem",
  "ludzie": {
    "iris": "Iris Bell",
    "nora": "Nora Vance",
    "victor": "Victor Crane"
  },
  "wnetrze": [
    {
      "sekret_id": "d23_karta_rozliczenia",
      "co_widac": "W kasetce karta rozliczenia z podpisem Iris Bell i datą sprzed ośmiu lat. Pod spodem pokwitowanie dopłaty z okresu, kiedy nie jeździła jeszcze szóstką.",
      "co_z_tego_wynika": "Iris podpisywała cudze rozliczenia długo przed objęciem kamienicy. Ma w tym doświadczenie, o którym nie mówi."
    }
  ],
  "wejscie": "Iris Bell, Nora Vance i Victor Crane, wszyscy przed zamknięciem rozliczenia. Kasetka na rachunki z szóstki. Każde z nas chce czegoś innego. Prosimy o wydanie w jednej wersji.",
  "wejscie_jesli": {
    "d18_iris_nora:rezerwacja_nora": "Iris Bell, Nora Vance i Victor Crane, rozliczenie, kasetka na rachunki z szóstki. Nora ma rezerwację z osiemnastego. Prosimy o wydanie w jednej wersji.",
    "d18_iris_nora:do_kontroli": "Iris Bell, Nora Vance i Victor Crane. Kasetka na rachunki. Victor ma już kopię z osiemnastego. Nora czekała, Iris czeka. Wszyscy chcą jednej wersji.",
    "d18_iris_nora:oferta_iris": "Iris Bell, Nora Vance i Victor Crane. Kasetka na rachunki. Iris przypomina o rozmowie z osiemnastego. Nora patrzy na nią, Victor na was oboje. Prosimy o wydanie w jednej wersji.",
    "d12_iris_nora:wydaj_iris": "Iris Bell, Nora Vance i Victor Crane, rozliczenie. Kasetka na rachunki z szóstki. Nora liczy, że wydano ją Iris, a Victor liczy, że jej nie wydano. Prosimy o wydanie w jednej wersji."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w kasetce?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Karta rozliczenia z moim podpisem i pokwitowanie dopłaty. Nora chce oryginałów, Victor listy nazwisk. Dopiero wtedy wiadomo, co jest czyje.",
          "mina": "mowi"
        },
        {
          "tekst": "Nora, czego chcesz od kasetki?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Po kolei: oryginały zaliczek, bo lokatorzy ich potrzebują. Okoye wpłaciła czterysta dolarów, wszyscy razem pięć tysięcy sześćset. Albo oni, albo my.",
          "mina": "mowi"
        },
        {
          "tekst": "Victor, co weźmiesz, jeśli kasetka trafi do Ciebie?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Wszystko. Kopię i oryginał. Pierwszy raz zestawiłem zmiany z pięciu lat i kasetka jest jedyną stałą. Kto to podpisze? Ja. Jeden egzemplarz do Urzędu, jeden do akt.",
          "mina": "neutralna"
        },
        {
          "tekst": "Iris, czemu w kasetce jest karta z Twoim podpisem sprzed ośmiu lat?",
          "ton": "niewygodne",
          "wymaga": "d23_karta_rozliczenia",
          "kto": "iris",
          "odpowiedz": "Bo wtedy też podpisywałam. Nie pytaj o szczegóły, bo ich nie pamiętam tak, jak ludzie myślą.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Iris, mogę zapytać o coś na osobności?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Jeśli Victor i Nora poczekają. Pytaj.",
          "mina": "neutralna",
          "ustawia": "d23_iris_sama"
        },
        {
          "tekst": "Nora, co się stanie, jeśli oryginały trafią do Victora?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Po kolei: Urząd je zatrzyma, lokatorzy zostaną bez dowodu, kamienica pójdzie pod młot. Rodzina Okoye wyląduje na ulicy w grudniu.",
          "mina": "emocja"
        },
        {
          "tekst": "Victor, dla kogo naprawdę liczysz tę kopię?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Dla Urzędu. Kto czyta kopie, to nie moja sprawa. Ale każdy, kto płaci, ma dostęp. Nie podpisuję się pod tym, co dzieje się później.",
          "mina": "emocja"
        },
        {
          "tekst": "Iris, na stronie rejestru są nazwiska klientów. Skąd je masz?",
          "ton": "niewygodne",
          "wymaga": "kopie_2",
          "kto": "iris",
          "odpowiedz": "Z kopii Urzędu. Proszę zobaczyć: wszystko, co zapisano w dwóch egzemplarzach, jest tutaj. To, co się zapisuje, ktoś czyta.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Iris, co będzie po dzisiejszym dniu?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Dziś każdy dostaje bilet. Ty też. Ale nie z mojej ręki, dopóki ktoś nie podpisze po Tobie. Wolę poczekać.",
          "mina": "emocja"
        },
        {
          "tekst": "Iris, ile wydałaś na papiery dla czterech osób?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Tysiąc siedemset za sztukę. Sześć tysięcy osiemset. Wzięłam je od miasta, bo skąd mam wziąć. Lokatorom dałam ludzi, nie pieniądze. Jedno za drugie.",
          "mina": "emocja"
        },
        {
          "tekst": "Iris, skąd wiesz, jak się naciska od środka?",
          "ton": "niewygodne",
          "wymaga": "d23_iris_sama",
          "kto": "iris",
          "odpowiedz": "Siedziałam w tym fotelu. Osiem lat temu. Nikt mnie nie szukał. Dlatego mnie wybrali. Nie lubię naciskać, bo wiem, jak to jest, kiedy ktoś naciska od środka.",
          "mina": "emocja"
        },
        {
          "tekst": "Iris, ile zapłacisz, żeby tej kasetki nie było w protokole?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Pięćset dolarów. Lubię porządek. Wsunę kopertę pod szybę i nikt nie musi nic mówić.",
          "mina": "neutralna",
          "ustawia": "d23_oferta_500"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj_nora",
      "etykieta": "Wydaj oryginały Norze, zgodnie z rezerwacją",
      "kto": "nora",
      "reakcja": "Po kolei: oryginały, pokwitowania, podpis. Dziękuję. Lokatorzy mają dowód, a ja mam z czym iść do sądu. To jeszcze nie koniec, ale początek.",
      "zysk": "Lokatorzy dostają dowód, a Nora może walczyć o czternaście rodzin.",
      "strata": "Piórnik z żetonami przestaje być ukryty, a Iris traci wsparcie ludzi, których ukrywała.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Nora Vance: „Sąd przyjął oryginały. Pierwsza rozprawa za trzy tygodnie. Czternaście rodzin zostaje w kamienicy na zimę. Dziękuję.”"
      },
      "wymaga": "d18_iris_nora:rezerwacja_nora|d18_iris_nora:nora_kopia"
    },
    {
      "akcja": "wydaj_victor",
      "etykieta": "Przekaż kasetkę Victorowi do Urzędu",
      "kto": "victor",
      "reakcja": "Dwa egzemplarze: jeden do Urzędu, jeden do akt. Kto to podpisze? Ja. Dziękuję. Protokół zamknięty o szóstej.",
      "zysk": "Urząd dostaje komplet, a protokół zamyka się czysto.",
      "strata": "Skrytka znika razem z klientami, a nazwiska z kasetki trafiają do rąk, którym nie ufasz.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Victor Crane: „Rozliczenie zamknięte. Lista nazwisk w aktach. Zalecam dyskrecję. — V.C.”"
      }
    },
    {
      "akcja": "iris_prywatnie",
      "etykieta": "Domknij prywatne wydanie Iris, bez protokołu",
      "kto": "iris",
      "reakcja": "Dziękuję. Cieszy mnie, że się rozumiemy. Zapomnijmy, że byłam dziś w kolejce. Za godzinę jadę.",
      "zysk": "Iris wyjeżdża cicho, a Ty zostajesz czysty w protokole i czysty wobec Nory.",
      "strata": "Czternaście rodzin zostaje bez dowodu, a w okienku ktoś jeszcze odpowiada za to, co zniknęło.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Nora Vance: „Oryginałów nie ma. Iris wyjechała. Nie wiem, kogo pytać. Piszę do Ciebie, bo nie mam kogo.”"
      }
    },
    {
      "akcja": "wez_500_iris",
      "etykieta": "Weź 500 $ od Iris i domknij jej prywatne wydanie",
      "kasa": 500,
      "wymaga": "d23_oferta_500",
      "kto": "iris",
      "reakcja": "Dziękuję. Pięćset, na szybie, bez podpisu. Uwielbiam rozumienie. Nikt się nie dowie, że tu byłam.",
      "zysk": "500 $ i spokój w okienku, Iris znika bez śladu.",
      "strata": "Czternaście rodzin bez dowodu, Nora składa skargę do Victora (Urząd +2), a wzięta koperta wraca w zakończeniu.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Nora Vance: „Iris była przy szybie z kopertą. Nie wiem, ile. Nikt mi nie powiedział. Nie piszę, żeby oskarżać. Piszę, żeby wiedzieć.”"
      }
    }
  ],
  "rola": "trzy strony jednej kasetki",
  "watki": [
    "Skrytka",
    "Fotel",
    "kamienica",
    "Urząd"
  ],
  "tik": "Iris „drobna przysługa”",
  "potrzeba": "kasetka z oryginałami przed zamknięciem",
  "slad": "Iris siedziała w fotelu osiem lat temu"
}
```

**Rosa Vale.** Potrzeba: czynsz i cisza. Lęk: że zobaczy za dużo. Sekret: Iris zostawiła jej kartkę z liczbą 6 800. Tik: liczy na głos. Moment gwiazdy: „Ufam kartce i długopisowi.”

```json
{
  "id": "d23_rosa",
  "dzien": 23,
  "postac": "Rosa Vale, 33",
  "glos": "Zmęczona, praktyczna, liczy na głos. Krótkie zdania, suchy humor.",
  "typ": "stała klientka, która wraca po wszystkim",
  "rzecz": "Cienki portfel z zatrzaskiem",
  "wnetrze": [
    {
      "sekret_id": "d23_portfel_rosa",
      "co_widac": "W kieszonce portfela złożona kartka: „6 800 / 4” i data tygodniowej wpłaty dla jednej z pralni. Nie jej pismo.",
      "co_z_tego_wynika": "Ktoś z kręgu Iris włożył Rosie kartkę, której ona nie rozumie. To sygnał, że sieć sięga dalej niż piórnik."
    }
  ],
  "wejscie": "Rosa Vale. Pralnia pod estakadą, pamiętasz. Zgubiłam portfel w jedenastce, cienki, z zatrzaskiem. Sześćdziesiąt dolarów na czynsz, nic więcej. Nie narzekam, tylko liczę.",
  "wejscie_jesli": {
    "d23_iris_nora_victor:wydaj_nora": "Rosa Vale. Wiem, co się stało w kamienicy. Dziękuję, że ktoś wydał rzeczy ludziom, nie Urzędowi. Zgubiłam portfel w jedenastce, cienki, z zatrzaskiem. Sześćdziesiąt dolarów.",
    "d23_iris_nora_victor:wydaj_victor": "Rosa Vale. Słyszałam o kasetce. Wiem, że dało się inaczej. Zgubiłam portfel w jedenastce, cienki, z zatrzaskiem. Sześćdziesiąt dolarów.",
    "d23_iris_nora_victor:iris_prywatnie": "Rosa Vale. Słyszałam, że ktoś wyjechał z pieniędzmi. Nie pytam, kto. Zgubiłam portfel w jedenastce, cienki, z zatrzaskiem. Sześćdziesiąt dolarów.",
    "d23_iris_nora_victor:wez_500_iris": "Rosa Vale. Słyszałam, że ktoś wyjechał z pieniędzmi i ktoś inny je wziął. Nie pytam, kto. Zgubiłam portfel w jedenastce, cienki, z zatrzaskiem. Sześćdziesiąt dolarów."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten portfel?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czarny, cienki, zatrzask pękł z lewej. W środku bilet miesięczny i sześćdziesiąt dolarów w dwóch dwudziestkach i dwóch dziesiątkach.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie go zgubiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, po nocnej zmianie. Wyjęłam go, żeby sprawdzić godzinę odjazdu, i położyłam obok. Typowe, jak człowiek się spieszy do łóżka.",
          "mina": "mowi"
        },
        {
          "tekst": "Skąd masz pieniądze na czynsz, skoro pracujesz za grosze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Z nocy w pralni i z tego, że nie jem w poniedziałki. To nie jest historia na chwałę, tylko na rachunek.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Słyszałaś, co się dzieje w kamienicy Cooper?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Że nie tylko Cooper. Że w tym mieście wszystko jest na kredyt: kamienice, ludzie, nawet cisza. Nie wiem więcej, nie pytam.",
          "mina": "mowi"
        },
        {
          "tekst": "Co zrobisz z pieniędzmi, jeśli je odzyskasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Zapłacę czynsz. A jak zostanie reszta, to kupię Adzie lalkę. Pytała o tę z różowym warkoczem. Nie powiem jej, że to z zaległych.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy ktoś ze Skrytki prosił Cię kiedyś o przysługę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Skrytki? Nie wiem, o czym mówisz. Ale pani Bell kiedyś pytała, czy umiem być cicho. Odpowiedziałam, że tak, bo to bezpłatne.",
          "mina": "emocja"
        },
        {
          "tekst": "W portfelu jest kartka z zapisem „6 800 / 4”. Co to?",
          "ton": "niewygodne",
          "wymaga": "d23_portfel_rosa",
          "odpowiedz": "To nie moje. Kartka musiała tam trafić w tramwaju. Albo ktoś mi ją podrzucił. Nie dotykam. Nie chcę być tą, która zobaczyła.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Rosa, co chcesz, żeby się stało po dzisiejszym dniu?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Żeby było cicho. Żebym rano wsiadła do tramwaju i nikt nie pytał, skąd mam czynsz. Dobrze byłoby jeszcze zjeść coś ciepłego.",
          "mina": "mowi"
        },
        {
          "tekst": "Co zrobisz, jeśli portfela nie ma?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Pożyczę. Pożyczać umiem. Tylko że potem trzeba oddawać, a ja już teraz oddaję więcej, niż biorę.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy komuś ufasz bardziej niż nam?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nikomu. Ufam kartce i długopisowi. Jak jest zapisane, to wiem, że nikt nie zmieni zdania.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Sześćdziesiąt. Zgadza się. Dziękuję. Cicho, bez opowieści. Tak lubię najbardziej.",
      "zysk": "Rosa płaci czynsz, a okienko zostaje czyste w jej pamięci.",
      "strata": "Przy kolejnych sprawach Rosa już nie powie nic, bo nie ma czego.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Rosa Vale: „Czynsz zapłacony. Ada ma lalkę. Nie mówię, od kogo. Proszę po prostu wiedzieć.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Dobrze. Wrócę z kimś, kto potwierdzi. Tylko że ja nie mam takiego kogoś. Mam kartkę.",
      "zysk": "Okienko trzyma procedurę.",
      "strata": "Rosa nie ma czym zapłacić czynszu, a pralnia nie czeka.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Rosa Vale: „Pożyczyłam od sąsiadki. Oddam w piątek, z odsetkami. Nie pytam, kto zawinił.”"
      }
    },
    {
      "akcja": "wez_20_rosa",
      "etykieta": "Zatrzymaj 20 $ z portfela Rosy",
      "kasa": 20,
      "wymaga": "d23_portfel_rosa",
      "reakcja": "Czterdzieści? Przeliczę jeszcze raz. …Brakuje dwudziestu. Nie powiem, bo kto mi uwierzy. Dziękuję, że w ogóle jest.",
      "zysk": "20 $ w kieszeni i spokój do soboty.",
      "strata": "Rosa liczy dłużej, niż powinna, a Ty wiesz, że ona wie.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Rosa Vale: „Przeliczyłam portfel w domu. Dwadzieścia mniej. Nie przychodzę z pretensją. Przychodzę, żeby wiedzieć, że wiem.”"
      }
    }
  ],
  "rola": "praczka, która liczy i milczy",
  "watki": [
    "kamienica",
    "pieniądze"
  ],
  "tik": "liczy na głos",
  "potrzeba": "portfel z czynszem 60 $",
  "slad": "kartka „6 800 / 4” od Iris"
}
```


## DZIEŃ 24

**Vera Kovacs.** Potrzeba: oddać klucz i przyznać się. Lęk: że wyjdzie, jak wybiera. Sekret: od jedenastu lat wybiera dyżurnych. Tik: dzwoni kluczami. Moment gwiazdy: „To ja wybieram.”

```json
{
  "id": "d24_vera",
  "dzien": 24,
  "postac": "Vera Kovacs, 62",
  "glos": "Najpierw miejsce, potem rzecz, na końcu nazwisko. Dzwoni kluczami przy pasie, kiedy się wstydzi.",
  "typ": "zaplecze, które przychodzi się przyznać",
  "rzecz": "Szara teczka z kartonikiem „szafka 0809”",
  "ludzie": {
    "vera": "Vera Kovacs"
  },
  "wnetrze": [
    {
      "sekret_id": "d24_kartonik",
      "co_widac": "Kartonik: „SZAFKA 0809” ołówkiem. Z tyłu: „nie otwierać do odwołania”, pismo Sama, i pieczątka zaplecza.",
      "co_z_tego_wynika": "Szafka 0809 jest zajęta celowo, żeby nikt jej nie likwidował. Tak jak każde miejsce, które czeka na kogoś."
    },
    {
      "sekret_id": "d24_umowa",
      "co_widac": "Umowa gracza z Zarządem Nieruchomości Cooper. Podpis nieczytelny, z charakterystyczną pętlą w literze K. Data: dziewiąty sierpnia.",
      "co_z_tego_wynika": "Podpis na Twojej umowie jest Very, z pierwszego dnia. Ktoś wszystko przygotował, zanim przyszło się po raz pierwszy."
    }
  ],
  "wejscie": "Zaplecze, teczka, Vera Kovacs. Przyszłam sama, bez Iris i bez Victora. Mam kartonik z numerem szafki i jedną rzecz do powiedzenia. To ja wybieram. Od jedenastu lat. Wstyd mam od dawna.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w szafce 0809?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "Pusta teczka i list. Teczka od zawsze „zajęta”, a list jest pismem Sama, którego nie czytałam. Klucz trzymam ja. Dzwoni, jak widać.",
          "mina": "mowi"
        },
        {
          "tekst": "Skąd masz ten kartonik?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "Z szuflady numer sześć, tej, którą Sam zostawił dla następnego. Wzięłam wczoraj. Dziś nie umiem go odłożyć.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu przyszłaś sama?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "Bo to nie jest sprawa dla Victora ani dla Iris. Sam zostawił mi pustą teczkę i nie wiem, co z nią zrobić. Z klucza się nie wymiga.",
          "mina": "emocja"
        },
        {
          "tekst": "Na umowie jest pętla w literze K. Czyj to podpis?",
          "ton": "niewygodne",
          "wymaga": "d24_umowa",
          "kto": "vera",
          "odpowiedz": "Mój. Podpisałam za Zarząd Cooper, bo ktoś musiał. Nieczytelnie, żeby nikt nie szukał, kto stał za tym podpisem.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czym tak naprawdę zajmujesz się w tym biurze?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "Kluczami, teczkami, pudełkami. Zapleczem. Fotel nie jest karą. Fotel jest bezpiecznikiem. Najpierw miejsce, potem rzecz. Kiedy ktoś ma gdzie postawić stopę, resztę da się zrobić.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto napisał na kartoniku „nie otwierać”?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "Sam, ołówkiem. Jego pismo, ale nie jego decyzja. Dostał to, co dostaje każdy: cudzą regułę, którą musi udawać, że sam wymyślił.",
          "mina": "mowi"
        },
        {
          "tekst": "O jaki wstyd Ci chodzi?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "O kryterium. Że od lat patrzę na ludzi i wybieram, kto się nadaje. Nie pytam o kwalifikacje, tylko czy ktoś by go szukał.",
          "mina": "emocja"
        },
        {
          "tekst": "Co jest w szafce poza pustą teczką?",
          "ton": "niewygodne",
          "wymaga": "d24_kartonik",
          "kto": "vera",
          "odpowiedz": "List. Sam pisał go pięć razy, ostatnio w niedzielę. Nie czytałam. Ma trafić do tego, kto będzie siedział przy szybie po nim.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz z kluczem, jeśli go nie przyjmę?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "Zostawię na ladzie. Nie mam już komu go oddać. Klucz sam się nie otworzy, ale też nie zginie.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto wie, że przyszłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "Nikt. Powiedziałam Leo, że idę po szpulę nici. Kłamię słabo, ale on nie sprawdza. To jego cecha, nie moja zasługa.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto wybiera ludzi na to miejsce?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "vera",
          "odpowiedz": "To ja wybieram. Od jedenastu lat. Wybieram tych, których nikt nie szuka, bo fotel to bezpiecznik. Czwarty został znaleziony w kanale. Jego siostra do dziś szuka go po szpitalach.",
          "mina": "emocja"
        },
        {
          "tekst": "Czy ktoś kazał Ci to powiedzieć?",
          "ton": "niewygodne",
          "wymaga": "d24_umowa",
          "kto": "vera",
          "odpowiedz": "Nikt. Mówię, bo Sam odszedł i ktoś musi wiedzieć, że nie był pierwszym. Przed nim siedzieli inni, a kartoników jest więcej, niż myślisz.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "dolacz_slad",
      "etykieta": "Dołącz ślad odejścia Sama za jego zgodą",
      "kto": "vera",
      "reakcja": "Zapisuję: odejście bez wpisu, z mojej woli. Sam odzyska twarz. Strona 41 jest Twoja.",
      "zysk": "Sam odzyskuje czyste akta, a Vera oficjalnie bierze winę za teczkę.",
      "strata": "Ślad trafia do księgi, więc ktoś, kto czyta wszystko, dowie się, że teczka była pusta.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Sam Holt: „Dowiedziałem się, że ktoś dołączył ślad mojego odejścia. Nie prosiłem. Dziękuję. To pierwszy raz, kiedy ktoś zapisał to, co zrobiłem, a nie to, co zgłosiłem.”"
      }
    },
    {
      "akcja": "koperta_zapieczetowana",
      "etykieta": "Oddaj dokument Samowi w zapieczętowanej kopercie",
      "kto": "vera",
      "reakcja": "Zapieczętowana. Sam zdecyduje sam. A strona 41 jest Twoja.",
      "zysk": "Sam sam decyduje, co zrobić z dokumentem, a Vera nie musi niczego wyznawać w księdze.",
      "strata": "Okienko nie zostawia śladu, więc nikt nie zapisze, że Vera przyszła.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Sam Holt: „Dostałem kopertę. Zapieczętowana. Nie otwarłem jej przy nikim. Dziękuję, że wybór został mój. — S.”"
      }
    },
    {
      "akcja": "otworz_szafke",
      "etykieta": "Otwórz szafkę 0809 kluczem Very",
      "kto": "vera",
      "reakcja": "Klucz. Sam zostawił to dla tego, kto siedzi przy szybie. Strona 41 jest Twoja.",
      "zysk": "W szafce leży list od Sama, a w tle brzęczą klucze Very.",
      "strata": "Ktoś zobaczy, że szafka była otwarta, a w nocy wszystko jest widoczne dla tego, kto patrzy.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Vera Kovacs: „Szafka otwarta, teczka pusta, list wyjęty. Spokojnie. Nie powiem nikomu, że widziałam. Powiem tylko, że byłam.”"
      }
    }
  ],
  "rola": "zaplecze, które przychodzi się przyznać",
  "watki": [
    "Fotel",
    "Skrytka",
    "Poprzednik"
  ],
  "tik": "dzwoni kluczami",
  "potrzeba": "oddać klucz do szafki 0809",
  "slad": "od jedenastu lat wybiera, kto siądzie w fotelu"
}
```

**Leo Marsh.** Potrzeba: oddać wykaz i nie wiedzieć więcej. Lęk: że wozi coś, co kogoś zabije. Tik: patrzy na torbę. Moment gwiazdy: „0809, dokumenty, nieodebrana”.

```json
{
  "id": "d24_leo",
  "dzien": 24,
  "postac": "Leo Marsh, 46",
  "glos": "Mówi godzinami i przystankami. Dziś mówi mniej, bo coś niesie. Patrzy na torbę, nie na szybę.",
  "typ": "konduktor, który przynosi ostatni kurs",
  "rzecz": "Skórzana torba konduktora z wykazem kursu",
  "wnetrze": [
    {
      "sekret_id": "d24_wykaz_0809",
      "co_widac": "Ostatnia pozycja wykazu: „0809, dokumenty, paczka w płótnie, nieodebrana”. Dopisek: „dyżurny”. Podpis Very, pismo jakby kopiowane.",
      "co_z_tego_wynika": "Skrytka ma paczkę z dokumentami dla dyżurnego, czyli dla Ciebie. Wyjście istnieje, ale nikt nie powiedział, ile kosztuje."
    },
    {
      "sekret_id": "d24_numer_puszka",
      "co_widac": "W torbie puszka po herbacie z numerem 0809 wypisanym markerem na wieczku, identyczna jak ta z dnia 6.",
      "co_z_tego_wynika": "Puszka i paczka 0809 należą do tego samego obiegu Skrytki. Leo wozi ją od dawna, nie otwierając."
    }
  ],
  "wejscie": "Leo, konduktor szóstki. Zgubiłem torbę z wykazem, skórzaną, z mosiężnym zapięciem. W środku ostatni wykaz paczek w płótnie. Dziś ostatni kurs i jedna paczka ma wpis, którego nie rozumiem.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta torba?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Skórzana, brązowa, mosiężne zapięcie, wytarta na rogach. W środku bilety, notes i wykaz paczek. Torba ma ponad dwadzieścia lat, nosił ją jeszcze mój ojciec.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie dokładnie ją zgubiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na pętli szóstki, o czwartej. Położyłem na ławce, bo musiałem zapalić. Zazwyczaj zabieram, ale dziś coś mnie rozpraszało. Wpis w wykazie.",
          "mina": "mowi"
        },
        {
          "tekst": "Co to za wpis, którego nie rozumiesz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Pozycja ostatnia: „0809, dokumenty, paczka w płótnie, nieodebrana”. Tego numeru nigdy nie woziłem. Zwykle wiem, czyja paczka, a ta ma tylko numer.",
          "mina": "emocja"
        },
        {
          "tekst": "W wykazie obok pozycji 0809 ktoś dopisał „dyżurny”. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": "d24_wykaz_0809",
          "odpowiedz": "Że paczka nie jest dla klienta. Jest dla tego, kto stoi po tej stronie szyby. Nie wiem, czemu nikt mi tego nie powiedział.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Od jak dawna wozisz paczki w płótnie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Od dawna, może dłużej. Zacząłem, bo Vera prosiła. Mówiła: kurs, godzina, nic więcej. Nie pytałem. Nie wolno mi było.",
          "mina": "mowi"
        },
        {
          "tekst": "Co zwykle jest w paczce?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dokumenty, trochę gotówki w kopercie, czasem klucz. Nigdy nie zaglądam. Płótno jest zszyte tak, że widać, jeśli ktoś próbował.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy wiesz, kto wysłał paczkę 0809?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Wykaz podpisuje Vera. Ale nie jej pismem, a przeniesionym, jakby ktoś dyktował. Nie lubię tego.",
          "mina": "emocja"
        },
        {
          "tekst": "Co się stanie, jeśli paczka nie zostanie odebrana?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wróci do Very. Zostanie w szafce. Ostatni kurs się powtórzy za miesiąc, a ja będę znów wiózł pustą torbę.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jak się czujesz, wożąc paczki, o których nic nie wiesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jak maszynista z ręką na hamulcu, który nie widzi, co jest przed nim. Jadę, bo tak mam. I mam żonę, która pyta, co wiozę.",
          "mina": "emocja"
        },
        {
          "tekst": "Co zrobisz z wykazem po dzisiejszym dniu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Oddam okienku, jeśli ktoś wpisze. Jeśli nie, zachowam. Nie potrzebuję się z nikim dzielić, ale nie chcę być sam z kartką.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto naprawdę czeka na tę paczkę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Ale na pętli stoi człowiek w szarym kapeluszu i patrzy na każdą torbę. Z kim rozmawia, to już nie moja sprawa.",
          "mina": "emocja"
        },
        {
          "tekst": "W torbie jest puszka z numerem 0809 na wieczku. Czyja?",
          "ton": "niewygodne",
          "wymaga": "d24_numer_puszka",
          "odpowiedz": "Nie moja. Wożę ją, bo mi powiedziano, żebym woził. Numer znam, wieczko znam, w środku nie byłem. Nie wolno mi było, a ja nie pytałem.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wpisz_wykaz",
      "etykieta": "Wpisz wykaz kursu do księgi, w dwóch egzemplarzach",
      "reakcja": "Wpisane. Dwa egzemplarze, jak trzeba. Jeśli ktoś pyta, wszystko było według procedury. Nie wiem, czyja to ulga.",
      "zysk": "Wykaz trafia do księgi, a Leo ma dowód, że zrobił swoje.",
      "strata": "Kopia trafia do Urzędu, więc ktoś dowie się o numerze 0809 i o tym, że ktoś go nie odebrał.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Victor Crane: „W aktach pojawił się wykaz kursu z pozycją 0809, bez nazwiska odbiorcy. Proszę wyjaśnić do piątku. — V.C.”"
      }
    },
    {
      "akcja": "przechowaj_bez_kwitu",
      "etykieta": "Przechowaj torbę bez kwitu, tak jak Sam",
      "reakcja": "Bez kwitu. Dobrze. Wolę, żeby nie zostawało po mnie nic na papierze. Dziękuję, że nie pytasz o wszystko po kolei.",
      "zysk": "Leo odchodzi bez śladu w papierach, a wykaz zostaje w okienku.",
      "strata": "Przy kolejnej kontroli okienko nie pokaże, skąd się wzięła torba. Uczciwość stoi w kącie.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Torbę zostawiłem. Nic nie podpisałem. Spytali na pętli, czy coś wiem. Powiedziałem, że wożę tylko to, co mi dają. Prawda i kłamstwo naraz.”"
      }
    },
    {
      "akcja": "odeslij_wykaz",
      "etykieta": "Odeślij wykaz Verze z powrotem",
      "reakcja": "Do Very. Dobrze. Niech sama odpowie za swój wpis. Tylko że ona nie odpowie, ona ma klucze.",
      "zysk": "Wykaz wraca do osoby, która go podpisała, a okienko nie bierze w tym udziału.",
      "strata": "Vera dowie się, że okienko go widziało, a ktoś w Skrytce zacznie przeliczać, ile wiesz.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Vera Kovacs: „Leo wrócił z wykazem. Powiedział, że okienko odesłało. Nie zdziwiłam się. Zdziwiłam się, że ulżyło.”"
      }
    }
  ],
  "rola": "konduktor z ostatnim wykazem",
  "watki": [
    "Skrytka",
    "Fotel"
  ],
  "tik": "patrzy na torbę",
  "potrzeba": "torba z wykazem paczek",
  "slad": "pozycja 0809: dokumenty czekają na dyżurnego, czyli Ciebie"
}
```

**Thomas Ward.** Potrzeba: zapisać, że Sam zrobił dobrze. Lęk: że za rok nikt nie będzie pamiętał. Sekret: skłamał o „pierwszej wizycie”. Tik: żartuje z drżącej ręki, dziś nie. Moment gwiazdy: kwit 0417 w kopercie.

```json
{
  "id": "d24_thomas",
  "dzien": 24,
  "postac": "Thomas Ward, 71",
  "glos": "Grzecznie, trochę staroświecko. Żartuje z własnej drżącej ręki. Dziś nie żartuje.",
  "typ": "staruszek, który wraca z własnym świadectwem",
  "rzecz": "Biała koperta z odręcznym świadectwem",
  "wnetrze": [
    {
      "sekret_id": "d24_kwit_0417",
      "co_widac": "W kopercie, obok świadectwa, kwit 0417 z tego biura i dopisek ołówkiem: „Prawa wydana bez wpisu. Lewa czeka. S.H.”",
      "co_z_tego_wynika": "To ten sam kwit, który Thomas miał w mankiecie w pierwszym dniu. Sam zaczynał każdego następnego tak samo."
    }
  ],
  "wejscie": "Dobry wieczór. Thomas Ward. Zostawiłem u was kopertę ze świadectwem dla Sama, z moim pismem. Wnuk mówi, że leżała na ladzie. Proszę, jeśli ktoś ją widział, niech sprawdzi.",
  "wejscie_jesli": {
    "d1_thomas:wydaj": "Dobry wieczór. Thomas Ward, znowu. Przyniosłem kopertę ze świadectwem dla biura. Rękawiczkę dostałem, dziękuję. Chcę teraz zapisać, że ktoś kiedyś oddał mi rzecz bez papieru.",
    "d1_thomas:wydaj_bez_wpisu": "Dobry wieczór. Thomas Ward. Tak jak wtedy: bez papierka. Przyniosłem teraz świadectwo, bo ktoś powinien zapisać, że ten młody człowiek zrobił mi dobrze. Wnuk twierdzi, że kopertę zostawił tu.",
    "d1_thomas:zatrzymaj_sprawdz": "Dobry wieczór. Thomas Ward. Rękawiczka wróciła w końcu, po kilku dniach, z córką. Przyniosłem świadectwo dla Sama, bo ktoś kiedyś oddał mi prawą bez wpisu. Nie wiem, kto odpowie."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w tej kopercie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jedna kartka, pisana moją ręką. Że rzecz, którą młody człowiek mi kiedyś oddał, oddał bez papieru, bo wiedział, że nie przeżyję niedzieli bez niej.",
          "mina": "mowi"
        },
        {
          "tekst": "Kiedy to było?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Sześć tygodni temu. Prawą oddał od razu. Lewa czekała, jak powiedział. Przyszedłem wtedy po rękawiczkę, a on tylko skinął głową.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu piszesz świadectwo, skoro nikt o nie nie prosi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo ktoś powinien zapisać, że ten człowiek nie robił nic złego. Zrobił wyjątek, i dobrze. Niech to będzie na papierze, bo mnie za rok nie będzie.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jak sobie radzisz od śmierci żony?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Dwa razy w tygodniu na cmentarz. Rozmawiam z nią o rękawiczce. Mówi, że byłem leniwy, skoro nie zszyłem czarną nitką.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto jeszcze zna tę historię?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Córka, Claire. I ten młody człowiek, Sam. Powiedział mi kiedyś: lewa czeka. Nie wiedziałem, że to znaczy tyle co: wróć, a oddam.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy Sam kiedyś Ci coś obiecał?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Że lewa poczeka. Dotrzymał. To więcej, niż potrafią niektórzy w rodzinie.",
          "mina": "mowi"
        },
        {
          "tekst": "W kopercie jest kwit 0417 z dopiskiem. Co on znaczy?",
          "ton": "niewygodne",
          "wymaga": "d24_kwit_0417",
          "odpowiedz": "Że wtedy skłamałem. Powiedziałem, że to pierwsza wizyta. Nie była. Wstydziłem się, że znowu mi się rzecz zgubiła. Kwit to dowód, że mnie tu znają.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co chcesz, żeby się stało z tym świadectwem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Żeby ktoś je przeczytał. I żeby nikt nie wyrzucił. Jeśli to nie jest dla księgi, to chociaż dla szuflady.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy świadectwo ma jakieś znaczenie prawne?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Ale jak się jest starym, to wierzysz, że papier jest tylko papierem, dopóki ktoś go nie przeczyta.",
          "mina": "mowi"
        },
        {
          "tekst": "Czego się boisz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Że ten młody człowiek odchodzi, a ja nie zdążyłem podziękować. Że za rok to ja zniknę, a nikt nie będzie wiedział, kim był ktoś, kto oddał mi rękawiczkę.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "przyjmij_swiadectwo",
      "etykieta": "Przyjmij świadectwo do akt Sama, z wpisem",
      "reakcja": "Dziękuję. Tak. Do akt, z wpisem. Wiem, że to papier. Ale tak powinno być, żeby ktoś mógł to przeczytać po nas obu.",
      "zysk": "Sam dostaje pisemne świadectwo, że oddał rzecz z sercem, a Thomas ma poczucie, że spłacił dług.",
      "strata": "Świadectwo trafia do księgi, więc ktoś, kto ją przeczyta, dowie się o wydaniu bez wpisu.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Thomas Ward: „Poszedłem na cmentarz w niedzielę. Opowiedziałem Ellen, że świadectwo jest w księdze. Powiedziała, że dobrze, że ktoś zapisał to wreszcie.”"
      }
    },
    {
      "akcja": "oddaj_bez_wpisu",
      "etykieta": "Zwróć świadectwo Thomasowi i niczego nie wpisuj",
      "reakcja": "Rozumiem. Zatrzymam przy sobie. Może to właściwe: rzeczy, które się nie zapisuje, bywają najpewniejsze.",
      "zysk": "Świadectwo zostaje u Thomasa, a okienko nie wystawia Sama na kolejne oczy.",
      "strata": "Nikt poza Thomasem nie wie, że Sam oddał rzecz bez wpisu, więc Sam nie ma jak się obronić.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Thomas Ward: „Świadectwo mam w kieszeni, obok rękawiczek Ellen. Jak ktoś zapyta, pokażę. Nikt nie pyta.”"
      }
    },
    {
      "akcja": "wpisz_wstecz",
      "etykieta": "Wpisz wydanie sprzed sześciu tygodni w dzisiejszej księdze",
      "reakcja": "Wstecz? Można tak? Dziękuję. Rozumiem. Jeśli to naprawia, to dobrze, że można.",
      "zysk": "Wydanie Sama dostaje wpis z datą wsteczną i stają się czyste papiery.",
      "strata": "Wpis wsteczny to fałszerstwo. Jeśli Urząd przyjrzy się datom, okienko ma problem.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Victor Crane: „W księdze pojawił się wpis wsteczny, sprzed sześciu tygodni, bez numeru kwitu. Do wyjaśnienia. — V.C.”"
      }
    }
  ],
  "rola": "staruszek ze świadectwem dla Sama",
  "watki": [
    "Poprzednik"
  ],
  "tik": "dziś nie żartuje",
  "potrzeba": "świadectwo przyjęte do akt",
  "slad": "kwit 0417 domyka rękawiczkę z dnia 1"
}
```


## DZIEŃ 25

**Sam, Elias, Victor.** Sam: potrzeba referencji i odejścia bez śladu. Elias: potrzeba imienia. Victor: potrzeba kompletu. Moment gwiazdy: puste pole „następca”, 0809.

```json
{
  "id": "d25_sam_elias",
  "dzien": 25,
  "postac": "Sam Holt, Elias Wren i Victor Crane",
  "glos": "Sam: najpierw szczegół techniczny, potem człowiek. Elias: powoli, staroświecko, uparcie. Victor: krótko, „kto to podpisze?”.",
  "typ": "trzej mężczyźni i jedno etui",
  "rzecz": "Etui na okulary z kopią decyzji o odejściu",
  "ludzie": {
    "sam": "Sam Holt",
    "elias": "Elias Wren",
    "victor": "Victor Crane"
  },
  "wnetrze": [
    {
      "sekret_id": "d25_etui_kopia",
      "co_widac": "W etui kopia decyzji o odejściu Sama i wpis o niedoborze na zmianie. W rubryce „następca” puste pole. Na marginesie ołówkiem: „0809”.",
      "co_z_tego_wynika": "Niedobór na zmianie to zwykły sposób zapisania odejścia dyżurnego. Pole następcy zostało puste celowo."
    }
  ],
  "wejscie": "Sam Holt i Elias Wren przy szybie, Victor za nimi z teczką. Sam po etui na okulary, Elias z pytaniem, czy Sam już się odezwał, Victor z protokołem do zamknięcia. Sam, Elias i Victor chcą tego samego: żeby to się dziś skończyło.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w tym etui?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Okulary, które nie są moje, i kartka z decyzją o odejściu, z wpisem o niedoborze na zmianie. Kopię zrobiłem dla siebie, na wszelki wypadek.",
          "mina": "mowi"
        },
        {
          "tekst": "Victor, czemu zamykasz audyt dziś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Bo dziś kończy się okres. Protokół musi mieć podpis i daty. Kto to podpisze? Ja, jeśli kopia jest czytelna i kompletna.",
          "mina": "mowi"
        },
        {
          "tekst": "Sam, czemu zostawiłeś Verze pustą teczkę?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Bo ktoś musiał zostawić coś nikomu. Teczkę, list, miejsce. Zostawiłem wszystkie trzy, żeby jedno z nich dotarło.",
          "mina": "emocja"
        },
        {
          "tekst": "Na odwrocie kopii jest wpis: „Niedobór: pole następcy puste”. Co to?",
          "ton": "niewygodne",
          "wymaga": "d25_etui_kopia",
          "kto": "sam",
          "odpowiedz": "Że ktoś nie ma jeszcze nazwiska w tej kolumnie. Zostawiłem puste, żeby nikt go nie wpisał za niego. Victor, nie patrz tak.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Elias, po co dziś przyszedłeś?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Zapytać, czy Sam się odezwał. I zdążyć, zanim ktoś zamknie księgę. Księgi się zamyka, kiedy człowiek zasypia.",
          "mina": "mowi"
        },
        {
          "tekst": "Sam, co będziesz robił po odejściu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Kolega z portu dzwoni dziś na biuro o piątej trzydzieści po referencje. Jeśli ktoś potwierdzi, że byłem uczciwym dyżurnym, dostanę robotę.",
          "mina": "mowi"
        },
        {
          "tekst": "Victor, co się stanie, jeśli kopia nie zostanie dołączona?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Protokół będzie niepełny. Referencje wątpliwe. Kto to podpisze? Nie ja. Wolę komplet, bo komplet nie wraca z pytaniami.",
          "mina": "neutralna"
        },
        {
          "tekst": "Sam, czy kopia decyzji powinna trafić do Urzędu?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Nie. Ale jeśli nie dołączę, nikt nie uwierzy, że odszedłem czysto. Taka to praca: obie opcje boli.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Sam, jak się czujesz, kiedy odchodzisz?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Lekko, z jednym wyjątkiem. Zostawiam komuś ciężką rzecz i nie zapytałem, czy chce.",
          "mina": "emocja"
        },
        {
          "tekst": "Elias, co powiesz Samowi na pożegnanie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Że dziękuję za oprawkę. I że oddawałem pieniądze ludziom, którzy nie prosili. Zacząłem od niego. Przepraszam, że tak późno.",
          "mina": "emocja"
        },
        {
          "tekst": "Sam, kto zajmie Twoje miejsce?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "sam",
          "odpowiedz": "Nie wiem. Wiem, że nie powinien być sam z listem. Dlatego dziś przy okienku są wszyscy, którzy mogli komuś pomóc.",
          "mina": "emocja"
        },
        {
          "tekst": "Victor, czemu pytasz o referencje Sama, skoro to nie Twoja sprawa?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Bo komplet to też referencja. Kto zamyka rozliczenie bez dziur, zostawia po sobie uczciwość. Nawet jeśli nie wie, czyją.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "dolacz_kopie",
      "etykieta": "Dołącz kopię do uzgodnionego sprostowania",
      "kto": "sam",
      "reakcja": "Dołączone, w dwóch egzemplarzach, jak trzeba. Sam wychodzi czysty, a ja podpisuję. Kto to podpisze? Ja. Dziękuję za sprawność.",
      "zysk": "Sam wychodzi czysty, a Victor zamyka audyt bez dziur.",
      "strata": "Kopia dokumentu trafia do Urzędu, a Urząd czyta to każdy, kto Urzędowi zapłaci.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Sam Holt: „Praca w porcie jest moja. Referencje przyszły przed szóstą. Nie wiem, czy to uczciwe, ale dziękuję.”"
      }
    },
    {
      "akcja": "zwroc_etui",
      "etykieta": "Zwróć Samowi etui z całą zawartością",
      "kto": "sam",
      "reakcja": "Etui, okulary, kartka. Wszystko, jak leżało. Dziękuję. Protokół Victora zostaje, ale ja zostaję ze swoim.",
      "zysk": "Sam wychodzi z rzeczami, a decyzja jest jego i nikogo więcej.",
      "strata": "Protokół zostaje niepełny, a referencje mogą nie przyjść.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Sam Holt: „Etui wróciło. Praca w porcie jeszcze nieznana. Kolega powiedział, że oddzwoni. Dziękuję, że to było moje.”"
      }
    },
    {
      "akcja": "zniszcz_kopie",
      "etykieta": "Zniszcz kopię przy Samie, bez wpisu",
      "kto": "sam",
      "reakcja": "Na oczach wszystkich. Dobrze. Teraz nikt jej nie przeczyta. Dziękuję. Zrobiłbym to samo, tylko ręka mi się trzęsie.",
      "zysk": "Sam nie ma już śladu w papierach, a Victor nie ma czego kopiować.",
      "strata": "Protokół zostaje z dziurą, a Victor zapisze, kto ją zrobił i przy świadkach.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Victor Crane: „Odnotowano zniszczenie dokumentu w obecności trzech osób. Brak wpisu. Przyjęto do wiadomości. Rozliczenie zamknięte z adnotacją. — V.C.”"
      }
    }
  ],
  "rola": "trzej mężczyźni i jedno etui",
  "watki": [
    "Poprzednik",
    "Fotel",
    "Urząd"
  ],
  "tik": "Elias składa numerek",
  "potrzeba": "etui z kopią decyzji",
  "slad": "w rubryce „następca” puste pole i 0809"
}
```

**Elias Wren.** Potrzeba: żeby ktoś zapisał imię. Lęk: że linia 0809 zostanie pusta albo wypełniona za kogoś. Tik: składa numerek. Moment gwiazdy: „Jak się nazywasz?”.

```json
{
  "id": "d25_ksiega",
  "dzien": 25,
  "postac": "Elias Wren",
  "glos": "Powoli, staroświecko, uparcie. Dziś mówi mniej. Trzyma numerek w obu rękach i patrzy na księgę, nie na szybę.",
  "typ": "księga wydań, otwarta na pustej linii",
  "rzecz": "Księga wydań otwarta na linii 0809",
  "ludzie": {
    "elias": "Elias Wren"
  },
  "wnetrze": [
    {
      "sekret_id": "d25_linia_0809",
      "co_widac": "Księga wydań otwarta na linii 0809. Pusta, z wąskim polem na imię. Tuszem w rogu: „0913”.",
      "co_z_tego_wynika": "To kolejny odcinek ogłoszenia, czyli kolejny dyżurny. Linia jest pusta, ale już czeka na kogoś."
    }
  ],
  "wejscie": "Elias Wren, numerek jeden. Księga leży otwarta na linii 0809, pustej, wąskiej. Pan Holt mówił, że linia jest dla następnego. Czekam, bo pytam o imię. Pytam, bo nikt nie pyta.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Elias, co to za linia w księdze?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Linia 0809. Wąska, od lat pusta. Pan Holt mówił, że jest dla następnego. Nie wiem, dla którego. Dziś pierwszy raz widzę ją z bliska.",
          "mina": "mowi"
        },
        {
          "tekst": "Kto zapisuje imiona w tej księdze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Dyżurny. Tylko on ma prawo. Ja pytam, żeby ktoś zapisał, że ktoś tu był. Bez imienia człowiek jest numerkiem, nawet jeśli stoi przy szybie.",
          "mina": "mowi"
        },
        {
          "tekst": "Elias, czemu zawsze pytasz o imię?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Bo oprawkę znalazł człowiek, którego nie znałem. Żałuję, że nie spytałem o imię wcześniej. Teraz pytam każdego.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Elias, co by się stało, gdyby linia została pusta?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Nic. Księga leży, a ludzie wchodzą i wychodzą. Ale nikt by nie wiedział, że ktoś tu siedział. A to różnica.",
          "mina": "mowi"
        },
        {
          "tekst": "Elias, czy Sam kazał Ci tu być?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Nie kazał. Mówił, że będzie dziś ktoś ważny, i że wolałby, żeby ktoś go zobaczył. Zostałem, bo nie wypada odchodzić, kiedy ktoś ma wybierać.",
          "mina": "mowi"
        },
        {
          "tekst": "Elias, wiesz, co jest w księdze, czego Ci nie pokazywano?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Wiem, że strona 41 była kiedyś cała. Wiem, że ktoś ją wyrwał. Nie pytam, kto. Wiem, że ktoś ją znowu chciałby mieć.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Elias, co chcesz od tej księgi?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Żeby linia nie była pusta, kiedy wyjdę. Albo żeby ktoś jej nie wypełnił bez zgody. Nie umiem się zdecydować, więc wybór zostawiam komuś młodszemu.",
          "mina": "emocja"
        },
        {
          "tekst": "Elias, co powiesz osobie, która tu zostanie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Że dziękuję. Że oprawkę mam. Że imię zapisuję w pamięci, jeśli nie w księdze. To też jest sposób, żeby ktoś był.",
          "mina": "emocja"
        },
        {
          "tekst": "Elias, czy jesteś pewien, że chcesz, żeby to była moja decyzja?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "elias",
          "odpowiedz": "Nie. Ale jest tylko jedna osoba po tej stronie szyby i tylko ona może zdecydować. Przykro mi, że to wypadło na Ciebie.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wpisz_siebie",
      "etykieta": "Wpisz siebie w linię 0809",
      "kto": "elias",
      "reakcja": "Iris, od drzwi: „Bilet jest. Czeka na peronie, aż ktoś podpisze po Tobie. Do poniedziałku.” Elias składa numerek: „Dobry początek.”",
      "zysk": "Twoje imię stoi w księdze, a bilet na peronie czeka, aż ktoś podpisze po Tobie.",
      "strata": "Rotacja trwa i następnego wybiorą tak, jak wybrano Ciebie.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Elias Wren: „Dobry wieczór, [imię]. Czy oprawka jest u Was? Pytam, bo teraz wiem, kto tu siedzi.”"
      }
    },
    {
      "akcja": "wyrwij",
      "etykieta": "Wyrwij stronę, jak Sam",
      "kto": "elias",
      "reakcja": "Wyrwana. Cicho. Jak Sam. Kanał Skrytki umiera, a ogłoszenia na słupie nie będzie. Nie wiem, czy to uczciwe wobec tych, którzy czekali.",
      "zysk": "Wychodzisz wolny, rotacja się zatrzymuje, a Skrytka traci kanał.",
      "strata": "Klienci zostają bez drogi, a Vera zostaje z kluczami do pustych szafek.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Elias Wren: „Czy Sam już był? Pytam pusty fotel. Nikt nie odpowiada. Wrócę jutro.”"
      }
    },
    {
      "akcja": "list",
      "etykieta": "Zostaw list następnemu, dopisz własne linie",
      "wymaga": "notatki_3",
      "kto": "elias",
      "reakcja": "List zostaje w szafce 0809. Dopisane linie uzupełniają to, czego brakowało. Ktoś znajdzie to w pierwszy wieczór i ktoś będzie przy nim, żeby mu to powiedzieć.",
      "zysk": "Następny dyżurny dostaje całość, a nie tylko puste pole.",
      "strata": "List zostaje w szafce, a Ty zostajesz z pytaniem, czy dopisane wystarczy.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Elias Wren: „Jak się nazywasz? Pytam, bo list zostaje dla kogoś, a Ty odchodzisz. Dziękuję, [imię]. Jutro.”"
      }
    },
    {
      "akcja": "zamknij",
      "etykieta": "Zamknij księgę i nic nie rób",
      "kto": "elias",
      "reakcja": "Zamknięta. Linia 0809 zostaje pusta. Dziś nikt nie wchodzi, nikt nie wychodzi. Zostaje tylko czynsz i noc.",
      "zysk": "Czynsz zapłacony, nikt nie świętuje, a księga leży na swoim miejscu.",
      "strata": "Nic się nie zmienia, ale też nic nie wyjaśnia się za Ciebie.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Elias Wren: „Czy ktoś wyjechał? Pytam, bo numerek składam. Nie wiem, dlaczego mnie to tak trzyma za gardło.”"
      }
    }
  ],
  "rola": "księga otwarta na linii 0809",
  "watki": [
    "Fotel"
  ],
  "tik": "Elias składa numerek",
  "potrzeba": "żeby ktoś zapisał imię",
  "slad": "cztery gesty do wyboru na Twojej linii"
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
          "co_widac": "Kalka strony 41: cztery pozycje klientów i czternaście wpłat lokatorów po 400 $. Linie od jeden do pięć są czytelne (cztery klienckie i wpłaty), szósta zaklejona taśmą.",
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
    },
    "24": {
      "sprite": "szafka",
      "itemName": "szafka 0809",
      "line": "6",
      "inside": null,
      "wnetrze": [
        {
          "sekret_id": "d24_list_pelny",
          "co_widac": "W szafce pusta teczka i złożony list, pismo Sama. Cały tekst: „Jeśli to czytasz, siedzisz na moim miejscu, a to miejsce miał ktoś przede mną i ktoś przed nim. Nie wiem, przed czym uciekasz. Iris też nie wie. Taki jest warunek: dyżurny to ktoś, kogo nikt nie szuka, więc nikt nie przyjdzie pytać. Pierwszego dnia pomyślałem, że mam szczęście. W trzecim tygodniu zrozumiałem, że mam teczkę bez nazwiska i bilet, którego nie wolno mi użyć, dopóki ktoś nie usiądzie. Wyrwałem stronę 41, bo była na niej Twoja linia. Nie chciałem, żeby ktokolwiek wpisał tam Twoje imię za Ciebie. Prawa wydana bez wpisu, lewa czeka: tak zaczynam każdego następnego. Wpisuj mało. Pytaj o imiona. Nie ufaj drugiej kopii. A kiedy będziesz odchodzić, zostaw ten sam list następnemu. — S.”",
          "co_z_tego_wynika": "Pełny list Sama do następcy. Silnik pokazuje ten sekret, jeśli licznik notatki ≥ 3."
        },
        {
          "sekret_id": "d24_list_luki",
          "co_widac": "W szafce pusta teczka i złożony list, pismo Sama, z lukami: „Jeśli to czytasz, siedzisz na moim miejscu, a to miejsce miał ktoś przede mną i ktoś przed nim. Nie wiem, przed czym uciekasz. […] Pierwszego dnia pomyślałem, że mam szczęście. […] Wyrwałem stronę 41, bo była na niej […]. Prawa wydana bez wpisu, lewa czeka: tak zaczynam […]. Wpisuj […]. A kiedy będziesz odchodzić, zostaw […] następnemu. — S.” (Brakuje Ci słów, żeby poskładać resztę.)",
          "co_z_tego_wynika": "Fragmenty listu Sama, resztę trzeba było zebrać z notatek. Silnik pokazuje ten sekret, jeśli licznik notatki < 3."
        }
      ]
    },
    "25": {
      "sprite": "karta",
      "itemName": "karta Kopie",
      "line": "6",
      "inside": null,
      "wnetrze": [
        {
          "sekret_id": "d25_karta_kopie",
          "co_widac": "Karta: „Kopie wysłane do Urzędu: {kopie}. Klienci odnalezieni: {min(4, kopie)}.” {nazwiska} Stempel: „wgląd Kancelarii, K.M.”",
          "co_z_tego_wynika": "Każdy wpis w dwóch egzemplarzach to była druga kopia. Kancelaria wykupiła wgląd za 60 $ i odsprzedała go dalej."
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
        "tekst": "Elias zapytał, czy podpis do wtorku, siódmego września, to termin, czy prośba. Odpowiedział sam sobie: „Termin. Dla mnie zawsze termin.” Wziął suchy numerek."
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
      },
      {
        "kto": "Kartka pod szybą",
        "tekst": "Na kartce od Helen Voss: „Sprawdzam Okienko. Proszę przygotować księgę wydań do wglądu w piątek.” Pieczątka Inspekcji."
      }
    ],
    "16": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zapytał o oprawkę, a potem, czy w biurze był ktoś z walizką i kobietą, która liczy do trzech. Nie wiedział, skąd to wie. Powiedział, że takie rzeczy się rozpoznaje po sposobie, w jaki ktoś stoi."
      },
      {
        "kto": "Kuba Marlow, przez kuzyna",
        "tekst": "„Rata sobotnia. Kuba przypomina, że dług można zamknąć jednym ruchem, jeśli ktoś ma dostęp do tego, co ludzie zostawiają. Bez presji. K.M.”"
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Maya zostawiła na ladzie kartkę: „Walizka we wtorek, 6:10. Nie spóźnij się.”"
      }
    ],
    "17": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zobaczył Evana w kolejce i skinął głową. Nie znał go, ale poznał mankiet. Zapytał potem szeptem: „Czy ktoś, kto poprawia mankiet, jest dobry, czy zły?” Nie było odpowiedzi."
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Mężczyzna w szarym kapeluszu poprawił mankiet i wyszedł bez numerka. Evan patrzył za nim przez szybę."
      }
    ],
    "18": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias przyniósł papierową torbę z pączkiem. „To nie za pomoc. To za nocne.” Zapytał o oprawkę, choć już ją miał. Powiedział: „Nawyk.”"
      },
      {
        "kto": "Kuba Marlow, na schodach",
        "tekst": "„Trzysta dolarów. Równo tyle, ile jesteś mi winien. Zbieg okoliczności, prawda?” Kuba uśmiechnął się, jakby wiedział o ofercie Iris. Nie powiedział, skąd."
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Na słupie przed biurem wisi nowa kartka: „Pokój służbowy do wynajęcia od zaraz. Bez referencji.”"
      }
    ],
    "19": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zobaczył Adę z kartonem pod pachą. „Dziewczynka z królikiem się przeprowadza?” Nie czekał na odpowiedź. Zostawił na ladzie jednego cukierka, owiniętego w kartkę z napisem: „Dla pani z królikiem.”"
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Ada zostawiła rysunek: dom z dwoma oknami i napis „mamy dzień na spakowanie”."
      }
    ],
    "20": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias po raz pierwszy w życiu nie złożył numerka. Rozprostował go na ladzie, wygładził kciukiem i oddał. Powiedział: „Dziękuję. Jutro.” I po raz pierwszy zabrzmiało to jak obietnica."
      },
      {
        "kto": "Kuba Marlow, pod bramą",
        "tekst": "Stał w deszczu bez parasola. „Nie jestem zły”, powiedział. „Czekam.” Potem odwrócił się, jakby to było wszystko."
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Sam napisał na odwrocie numerka: „Jak Cię zapisać?” Zostawił go pod szybą."
      }
    ],
    "21": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zapytał o oprawkę. Potem, z numerkiem w palcach: „Czy ktoś wyjechał?” Nie było odpowiedzi. Pokiwał głową, jakby odpowiedź była w tym pytaniu."
      },
      {
        "kto": "Kuba Marlow, przez kuzyna",
        "tekst": "„W sobotę rozliczenie. Dwóch twoich sąsiadów już zapłaciło. K.M.”"
      }
    ],
    "22": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zobaczył mężczyznę w szarym kapeluszu i zmrużył oczy. „Ten pan zawsze czyta, zanim pisze.” Zapytał, czy zapisano, kto go widział. Nikt nie zapisał."
      },
      {
        "kto": "Kuba Marlow, na schodach",
        "tekst": "Marlow podniósł głowę, kiedy ktoś wychodził. „Człowiek w płaszczu spisał dziś, kto mieszka w twoim domu. Nie ja go przysłałem. Ale mówię, żebyś wiedział.”"
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Pod drzwiami biura leżała kartka od Victora: „O 6:00 w środę zamykam obieg. Proszę przynieść księgę.”"
      },
      {
        "kto": "Helen Voss, w kolejce",
        "tekst": "W kolejce stanęła kobieta w granatowym płaszczu. Nie miała numerka. Zapytała Eliasa, czy to jest to okienko. Elias powiedział, że tak. Zapisała jego imię w notesie."
      }
    ],
    "23": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zobaczył Iris na schodach. „Pani z cichym głosem”, powiedział. „Nie lubi naciskać. Zauważyłem, że ludzie, którzy tak mówią, naciskają najmocniej.” Nie znał jej, ale mówił jak ktoś, kto ją pamięta."
      },
      {
        "kto": "Kuba Marlow, pod bramą",
        "tekst": "Kuba stał pod bramą kamienicy. „Dziś wszyscy rozliczają. Ja też. Soboty nie odpuszczę.”"
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Na karcie bez adresu: „Wgląd w kopie z biura. Opłata 60 $. K.M.” Ktoś zapłacił, żeby przeczytać nazwiska."
      }
    ],
    "24": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias przyniósł Samowi kartkę z jednym zdaniem: „Dziękuję za oprawkę.” Położył ją na ladzie i wyszedł. Sam jej nie zabrał. Leżała cały wieczór, jakby czekała na kogoś trzeciego."
      },
      {
        "kto": "Kuba Marlow, na schodach",
        "tekst": "Marlow siedział na schodach z kubkiem. „W sobotę zamykamy rozliczenie. Przyjdź sam.” Potem upił i dodał: „Nie dlatego, że się boję. Dlatego, że Ty już wiesz, jak to się kończy.”"
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Pod szybą leżał klucz do szafki 0809. Na kartoniku: „Strona 41 jest Twoja.”"
      },
      {
        "kto": "Karta pod szybą",
        "tekst": "Stempel: „wgląd Kancelarii”. Ktoś pytał w Kancelarii o nazwisko z Waszej kopii. Opłata 60 $. Podpis K.M."
      }
    ],
    "25": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias złożył numerek w prostokąt, potem w mniejszy prostokąt. Powiedział: „Dziękuję. Jutro.” Po raz pierwszy zabrzmiało jak coś, co się spełni."
      },
      {
        "kto": "Kuba Marlow, przez kuzyna",
        "tekst": "„Rata sobotnia. Jutro. Przyjdź sam. K.M.” Pod spodem dopisek ołówkiem: „Nie musisz nic mówić. Ale ktoś musi usłyszeć.”"
      },
      {
        "kto": "Protokół Voss",
        "tekst": "Helen Voss zostawiła na ladzie protokół z jednego zdania: „Okienko działa zgodnie z regulaminem. Zalecam obserwację.” Podpisała się pełnym imieniem."
      }
    ],
    "9": []
  },
  "epilogi_elias": {
    "odebrany": "Elias staje w drzwiach i pierwszy raz o coś pyta: „Jak się nazywasz?” Mówisz. „Dziękuję, [imię]. Jutro.” Vera dopowiada zza pleców: „Pierwsza dyżurna miała na imię Ruth. Ty jesteś pierwszy, który zostawia po sobie prawdę.”",
    "wyrwana_strona": "Elias pyta pusty fotel: „Czy Sam już był?”",
    "rotacja": "Na bilecie jest już nazwisko z archiwum: Joan Alder, zgubiona w tramwaju 6 w 2019. Nieodebrana. Od dziś to Ty. W okienku siedzi ktoś nowy, a Elias pyta go o oprawkę.",
    "rotacja_list_bez_warunkow": "Na bilecie jest już nazwisko z archiwum: Joan Alder, zgubiona w tramwaju 6 w 2019. Nieodebrana. Od dziś to Ty. W okienku siedzi ktoś nowy, a Elias pyta go o oprawkę. Listu nikt nie znalazł do poniedziałku.",
    "nowy_sam": "Następnego wieczoru Elias kładzie numerek przed kimś nowym i pyta o brakującą stronę. Nikt mu nie mówi, że to była Twoja.",
    "referent": "Elias patrzy na nową tabliczkę z Twoim nazwiskiem, milczy i składa numerek na cztery.",
    "zostajesz": "Czynsz zapłacony, nikt nie świętuje. Elias: „Dziękuję. Jutro.”"
  }
}
```
