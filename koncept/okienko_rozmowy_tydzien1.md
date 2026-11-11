# OKIENKO — rozmowy z gośćmi w dniach 1–5

W turze z sekretem są dwa warianty pytania niewygodnego. Gra pokazuje wariant z `wymaga`, gdy gracz zna wskazany sekret, a w pozostałych przypadkach pokazuje wariant z `null`. Na ekranie zawsze są trzy pytania. Mąż i siostra zajmują wspólnie jedno miejsce gościa dnia 3.

```json
{
  "id": "d1_wdowiec",
  "dzien": 1,
  "postac": "Wdowiec po rękawiczkę żony",
  "glos": "Zaczyna od konkretu, po czym ścisza głos i dopowiada drobiazg, jakby dopiero teraz uznał go za ważny.",
  "rzecz": "Lewa skórzana rękawiczka z wywiniętym mankietem",
  "wnetrze": [
    {
      "sekret_id": "d1_prawa_na_wydaniu",
      "co_widac": "W podszewce tkwi złożony kwit z tego biura. Poprzedni pracownik wydał wdowcowi prawą rękawiczkę z tej samej pary. Numer kwitu wypada między dwoma wpisami rozdzielonymi wyrwaną stroną.",
      "co_z_tego_wynika": "Mężczyzna już odbierał tu rzecz żony. Kwit poświadcza wydanie, którego brakuje w księdze."
    }
  ],
  "wejscie": "Po lewą, skórzaną. Żona nosiła ją nawet w domu, kiedy stygła herbata.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Może pan opisać rękawiczkę?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Ciemna skóra, jasna nitka przy kciuku. Za mocno ją ściągnąłem.", "mina": "mowi"},
        {"tekst": "Która linia?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Czwórka, od końcowej. Siadała przodem, nawet na dwa przystanki.", "mina": "neutralna"},
        {"tekst": "Żona nie może odebrać sama?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Od lutego odbieram za nią. Przychodzą jeszcze rachunki.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Jak mam wpisać właścicielkę?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Ellen Ward. Z dwoma l, jeśli pan wpisuje.", "mina": "mowi"},
        {"tekst": "Ma pan coś na potwierdzenie?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Mam prawą w kieszeni. Proszę położyć obie kciukami do siebie.", "mina": "mowi"},
        {"tekst": "Był pan już u tego okienka?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Pierwszy raz. Chyba bym pamiętał tę szybę.", "mina": "klamie"},
        {"tekst": "Kto panu wydał prawą rękawiczkę?", "ton": "niewygodne", "wymaga": "d1_prawa_na_wydaniu", "odpowiedz": "Ten przed panem, w ostatnią noc. Ma pan mój kwit, więc proszę go przypiąć do księgi i wpisać, że potwierdzam odbiór.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Zapakować ją panu?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Wystarczy podać. Prawą też noszę luzem.", "mina": "neutralna"},
        {"tekst": "Podpisze pan odbiór swoim nazwiskiem?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Thomas Ward. Podpisy mamy podobne, ale jej W było szersze.", "mina": "mowi"},
        {"tekst": "Kto jeszcze może się po nią zgłosić?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Jej córka, gdyby wiedziała. Prawą oddałem jej na pogrzebie, a wczoraj wziąłem z powrotem.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Jedną włożę w drugą. Tak się nie rozchodzą.",
      "zysk": "Zamykasz zgłoszenie z podpisem człowieka, który rozpoznał naprawę.",
      "strata": "Córka Ellen traci szansę odebrania lewej rękawiczki z biura.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Córka przyszła po swoją prawą i pokazałem jej obie. Prawą zabrała, a lewą zgodziła się zostawić u mnie do niedzieli."}
    },
    {
      "akcja": "odmow",
      "reakcja": "Rozumiem. Proszę w takim razie nie rozprostowywać palców.",
      "zysk": "Zachowujesz rzecz do czasu, aż rodzina uzgodni odbiór.",
      "strata": "Wdowiec odchodzi bez rękawiczki mimo trafnego opisu, a zgłoszenie zostaje otwarte.",
      "echo": {"za_dni": 2, "forma": "gosc", "tekst": "Jestem córką Ellen i mam prawą. Lewą proszę jeszcze potrzymać, ojciec i ja przyjdziemy razem."}
    }
  ]
}
```

```json
{
  "id": "d1_praczka",
  "dzien": 1,
  "postac": "Pracownica pralni po kopertę z wypłatą",
  "glos": "Podaje szczegóły jak pozycje na rachunku. Kiedy się denerwuje, wraca do ostatniej liczby.",
  "rzecz": "Papierowa koperta z wypłatą",
  "wnetrze": [
    {
      "sekret_id": "d1_wyplata_iris",
      "co_widac": "W kopercie jest 86 dolarów i odcinek wypłaty na Iris Bell. Na odwrocie Iris napisała, żeby całość oddać Rosie za dwie nocne zmiany.",
      "co_z_tego_wynika": "Koperta należy do Iris, lecz Rosa ma dostać pieniądze. Koperta sama jest dowodem rozliczenia między nimi."
    }
  ],
  "wejscie": "Brązowa koperta, jedna zszywka, osiemdziesiąt sześć dolarów. Została pod siedzeniem.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Pamięta pani jeszcze jakiś szczegół?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Zszywka w połowie weszła. Zahaczyła mi o rękaw.", "mina": "mowi"},
        {"tekst": "O której pani wysiadła?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Dziesiąta dwanaście. O dziesiątej piętnaście już się wracałam.", "mina": "neutralna"},
        {"tekst": "Skąd pani zna kwotę?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Dwie noce po czterdzieści trzy. Umiem to bez odcinka.", "mina": "mowi"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Poda pani swoje nazwisko?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Rosa Vale. Vale, przez V.", "mina": "neutralna"},
        {"tekst": "Gdzie wystawiono odcinek?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "W pralni pod estakadą. Na górze będzie tłusta pieczątka.", "mina": "mowi"},
        {"tekst": "Koperta jest na pani nazwisko?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Na kopercie nic nie ma. Jedna zszywka, mówiłam.", "mina": "mowi"},
        {"tekst": "Czemu na odcinku jest Iris Bell?", "ton": "niewygodne", "wymaga": "d1_wyplata_iris", "odpowiedz": "Bo grafik był na nią. Proszę mi dać drugą rubrykę, podpiszę, że biorę pieniądze, a odcinek może tu zostać.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Ma pani jak wrócić?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Mam bilet na jeden przejazd. Od jutra znów chodzę pieszo.", "mina": "neutralna"},
        {"tekst": "Podpisze pani kwotę przy odbiorze?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Po przeliczeniu. Osiemdziesiąt sześć to osiemdziesiąt sześć.", "mina": "mowi"},
        {"tekst": "Iris przyjdzie, jeśli zatrzymam kopertę?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Po kopertę? Przyjdzie, jak ją odliczą od następnej wypłaty.", "mina": "mowi"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Osiemdziesiąt sześć. Proszę obrócić kwit, podpiszę tutaj.",
      "zysk": "Rosa dostaje zapłatę za dwie zmiany, a Ty masz pokwitowanie gotówki.",
      "strata": "W rejestrze wypłata trafia do innej osoby niż ta, którą wskazuje odcinek.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "Pokazałam Iris kwit i wykreśliła mi obie noce z zeszytu. Za trzecią kierownik wpisał już mnie."}
    },
    {
      "akcja": "odmow",
      "reakcja": "Dobrze, wyślę Iris. Tylko ona liczy przystanki jako godziny.",
      "zysk": "Zachowujesz gotówkę dla osoby wskazanej na odcinku wypłaty.",
      "strata": "Rosa czeka dłużej na zarobione pieniądze i ponosi koszt odbioru.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Iris oddała mi osiemdziesiąt dwa. Cztery policzyła za tramwaj w obie strony."}
    }
  ]
}
```

```json
{
  "id": "d2_chlopak",
  "dzien": 2,
  "postac": "Chłopak po plecak z pierścionkiem",
  "glos": "Wyrzuca pierwszą odpowiedź za szybko i zaraz ją poprawia. Gdy pada imię June, zostawia zdanie w spokoju.",
  "rzecz": "Plecak z pękniętą klamrą i pudełkiem w kieszeni przy plecach",
  "wnetrze": [
    {
      "sekret_id": "d2_zwrot_pierscionka",
      "co_widac": "W pudełku jest pierścionek i paragon na 240 dolarów. Sklep przyjmuje zwrot do zamknięcia dzisiaj. Na kartce June dopisała, że pierścionek ma wrócić do sklepu.",
      "co_z_tego_wynika": "Chłopak potrzebuje plecaka przed zamknięciem sklepu. June podjęła decyzję w sprawie pierścionka."
    }
  ],
  "wejscie": "Plecak, jedna klamra pęknięta, tę drugą sam urwałem. Mogę go dostać przed dziewiątą?",
  "tury": [
    {
      "pytania": [
        {"tekst": "Na którym siedzeniu pan go zostawił?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Pod składanym, przy drzwiach. Wcisnąłem go nogą, żeby June miała gdzie stanąć.", "mina": "mowi"},
        {"tekst": "Co jest w dużej komorze?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Bluza i śrubokręt, taki krótki. Nie, śrubokręt jest w bluzie.", "mina": "mowi"},
        {"tekst": "Czemu aż tak się panu spieszy?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Mam jeszcze jedno miejsce po drodze. Za szybą widać zegar, prawda?", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Może pan opisać boczną kieszeń?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Siatka, dziura na dwa palce. Na jeden, jak pan nie rozciągnie.", "mina": "mowi"},
        {"tekst": "Co jest w kieszeni przy plecach?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Pudełko, puste. Mogło się otworzyć.", "mina": "klamie"},
        {"tekst": "June też może opisać zawartość?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "June już się dziś dosyć naopisywała. Proszę jej zostawić wieczór.", "mina": "emocja"},
        {"tekst": "Zdąży pan jeszcze zwrócić pierścionek?", "ton": "niewygodne", "wymaga": "d2_zwrot_pierscionka", "odpowiedz": "Jak pojadę dwójką, zdążę. Proszę otworzyć pudełko przy mnie i wpisać pierścionek na kwit, bo jak znowu gdzieś go zostawię, mam chociaż papier.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Którym wyjściem będzie panu bliżej?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Bocznym, jeśli jeszcze otwarte. Przez główne musiałbym obiec przystanek.", "mina": "mowi"},
        {"tekst": "Ma pan dokument do odbioru?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "W etui telefonu. Nazwisko to Moss, zdjęcie jest sprzed strzyżenia.", "mina": "mowi"},
        {"tekst": "Gdy plecak zostanie, kogo powiadomić?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Mnie, tylko mnie. June ma już swoje klucze.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Biorę go pod pachę. Na ramieniu już mi raz nie przeszkadzało, że go nie ma.",
      "zysk": "Chłopak ma szansę odzyskać 240 dolarów przed zamknięciem sklepu.",
      "strata": "Oddajesz kosztowną zawartość jednej osobie, choć zakup dotyczył też June.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Przyjęli zwrot, kiedy gasili witrynę. June przelałem jej połowę i odpisała jednym słowem."}
    },
    {
      "akcja": "odmow",
      "reakcja": "To da mi pan kartkę z godziną? Pokażę w sklepie, że tu byłem.",
      "zysk": "Kosztowna zawartość zostaje zabezpieczona do dodatkowej weryfikacji.",
      "strata": "Chłopak traci termin zwrotu i składa skargę na wydanie po terminie.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Plecak odebrałem rano z June, ale sklep już nie przyjął zwrotu. Lombard dał nam po sześćdziesiąt dolarów."}
    }
  ]
}
```

```json
{
  "id": "d2_kucharz",
  "dzien": 2,
  "postac": "Pomocnik kuchenny po termos",
  "glos": "Mówi urywkami, jak przy wydawaniu dań. Cudze słowa powtarza dokładniej niż własne.",
  "rzecz": "Stalowy termos z odkręcanym kubkiem",
  "wnetrze": [
    {
      "sekret_id": "d2_kartka_bena",
      "co_widac": "W pustym termosie jest kartka od Bena do Cala. Ben prosi Cala, by przyszedł na pierwszy serwis, usiadł przy barze i pozwolił sobie podać obiad.",
      "co_z_tego_wynika": "Termos należy do Bena. Cal przyszedł po niego, bo łatwiej mu oddać zgubę, niż przyjąć zaproszenie."
    }
  ],
  "wejscie": "Stalowy, kubek na gwint. Jak się znalazł, wezmę i lecę.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Pamięta pan, gdzie go zostawił?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Ben siedział przy oknie. Tam proszę liczyć od drzwi.", "mina": "mowi"},
        {"tekst": "Jaki ma znak?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Dwie rysy na kubku. O rant zlewu.", "mina": "neutralna"},
        {"tekst": "To pan go zgubił?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Ja go myłem. Jakby to się liczyło.", "mina": "mowi"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Jak mam zapisać pana imię?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Cal. Ben mówił pełnym tylko przy gościach.", "mina": "neutralna"},
        {"tekst": "Jest coś w środku?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Po ostatniej zmianie wypłukany. Suszyłem go do góry dnem.", "mina": "mowi"},
        {"tekst": "Ben pana tu przysłał?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Napisał, że otwiera o siódmej. Tyle napisał na szybie.", "mina": "mowi"},
        {"tekst": "Usiądzie pan u Bena przy barze?", "ton": "niewygodne", "wymaga": "d2_kartka_bena", "odpowiedz": "Tak tam jest napisane? Proszę skreślić mój numer z kwitu i wpisać kuchnię, po siódmej będę u niego.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Dać panu torbę?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "W rękę. Niech widzi od progu.", "mina": "neutralna"},
        {"tekst": "Gdzie szukać właściciela po siódmej?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Lokal przy pętli, szyba jeszcze w papierze. Dzwonek przy dostawach działa.", "mina": "mowi"},
        {"tekst": "Czemu właściciel sam nie przyszedł?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Pierwszy serwis. Jak mu się coś przypala, zostaje przy garnku.", "mina": "mowi"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Prosto do niego. Kubkiem do góry.",
      "zysk": "Cal może oddać termos osobiście podczas otwarcia lokalu.",
      "strata": "Opierasz wydanie na znajomości rzeczy przez człowieka bez upoważnienia.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "Ben nalał zupy do miski i powiedział, żebym zostawił zmywanie. Termos zabrałem z powrotem, bo dolał mi na jutro."}
    },
    {
      "akcja": "odmow",
      "reakcja": "Zostawię mu numer kwitu. Pod talerzem będzie widać.",
      "zysk": "Termos zostaje w biurze do osobistego odbioru przez Bena.",
      "strata": "Ben musi zamknąć lokal wcześniej, żeby zdążyć po rzecz.",
      "echo": {"za_dni": 1, "forma": "gosc", "tekst": "Po termos, Ben. Cal wsunął mi pański kwit pod pusty talerz i wyszedł, zanim zdążyłem mu dołożyć."}
    }
  ]
}
```

```json
{
  "id": "d3_maz_i_siostra",
  "dzien": 3,
  "postac": "Mąż i siostra zaginionej, oboje po ten sam telefon",
  "glos": "Mąż zaczyna od «proszę» i mówi pełnymi zdaniami, jak do protokołu. Siostra odpowiada po pauzie, krótkimi konkretami, i rzadko dopowiada czasownik.",
  "rzecz": "Telefon w etui z odklejonym rogiem, znaleziony na innej linii niż wczorajszy szalik",
  "wnetrze": [
    {
      "sekret_id": "d3_nie_wracaj",
      "co_widac": "Pod etui jest złożone zdjęcie dwóch dziewczynek z podpisem «Mara i Nell». Na ekranie blokady wisi ostatnia wiadomość od Nell z godziny 23:48: «nie wracaj do domu».",
      "co_z_tego_wynika": "Nell ostrzegła Marę. Wiadomość dotarła po godzinie, o której według męża telefon był już w domu."
    }
  ],
  "wejscie": "Mąż: Proszę mi wydać telefon żony, numer konta mam przy sobie. Siostra: Etui ma odklejony róg, niech pan najpierw pokaże.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Możecie mówić po kolei?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Mąż: Proszę bardzo, Nell była tu pierwsza. Siostra: Przy drzwiach, od otwarcia.", "mina": "mowi"},
        {"tekst": "Na kogo jest konto?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Mąż: Proszę wpisać moje nazwisko, z mojego konta schodzi rachunek. Siostra: Mara płaciła za aparat.", "mina": "mowi"},
        {"tekst": "Kto ostatni widział telefon?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Mąż: O jedenastej leżał u nas w kuchni i do rana go nie ruszałem. Siostra: A znaleźli go w nocnym tramwaju.", "mina": "klamie"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Może pani podać jakiś znak?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Siostra: Dwa ślady po kleju pod rogiem. Mąż: Proszę uważać, etui może zejść razem ze szkłem.", "mina": "mowi"},
        {"tekst": "Jest zgoda właścicielki na odbiór?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Mąż: Proszę wpisać, że jesteśmy małżeństwem. Siostra: Podpisu nie mamy oboje.", "mina": "mowi"},
        {"tekst": "Czemu nie chcecie odebrać go razem?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Mąż: Proszę zapytać Nell, od wczoraj nie odbiera. Siostra: Wyłączyłam dźwięk po szóstym.", "mina": "emocja"},
        {"tekst": "Pani Nell, czemu miała nie wracać?", "ton": "niewygodne", "wymaga": "d3_nie_wracaj", "odpowiedz": "Siostra: Czekał na klatce, widziałam go o północy. Mąż: Proszę poprawić godzinę w protokole, telefon wyjąłem jej wtedy z ręki.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Gdzie zostawić Marze kwit odbioru?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Mąż: Proszę zostawić u mnie, mam skrzynkę przy wejściu. Siostra: Tutaj, pod jej nazwiskiem.", "mina": "mowi"},
        {"tekst": "Kto podpisze odbiór swoim nazwiskiem?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Siostra: Ja, z godziną. Mąż: Proszę również odnotować, że się sprzeciwiam.", "mina": "mowi"},
        {"tekst": "Jeśli go odłożę, kto tu wróci?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Mąż: Proszę mnie oczekiwać jutro przy otwarciu. Siostra: Ja mogę przy zamknięciu, sama.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Siostra: Podpiszę i wyjdę bocznymi. Mąż: Proszę mi podać numer wydania.",
      "zysk": "Nell może przekazać telefon Marze bez kierowania jej do domu.",
      "strata": "Wydajesz telefon bez zgody właścicielki, przy świadku, który składa sprzeciw.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Mara odebrała ode mnie telefon i oddała mi kartę. Jego numer miałam wykreślić z książki przy łóżku."}
    },
    {
      "akcja": "zatrzymaj",
      "reakcja": "Mąż: Proszę wpisać, że wrócę po niego rano. Siostra: Dla Mary, proszę tak wpisać.",
      "zysk": "Zabezpieczasz telefon dla właścicielki i zachowujesz wiadomość.",
      "strata": "Mara musi się ujawnić przy okienku, żeby odzyskać aparat, a mąż zna miejsce odbioru.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Widziałam go przez szybę, więc poszłam dalej. Telefon proszę trzymać, kartę może pan wyrzucić. — Mara"}
    },
    {
      "akcja": "zadzwon",
      "reakcja": "Mąż: Proszę im powiedzieć, że mam numer konta. Siostra: Niech przyjadą tutaj, bez adresu Mary.",
      "zysk": "Dyżurny może przyjąć obie relacje i udokumentować zabezpieczenie telefonu.",
      "strata": "Telefon i prywatna wiadomość trafiają do akt, do których Mara nie ma swobodnego dostępu.",
      "echo": {"za_dni": 2, "forma": "gazeta", "tekst": "Całe miasto szuka Mary po zabezpieczeniu jej telefonu w biurze rzeczy znalezionych. Policja prosi pasażerów nocnych linii o kontakt."}
    }
  ]
}
```

```json
{
  "id": "d3_mechaniczka",
  "dzien": 3,
  "postac": "Mechaniczka po budzik",
  "glos": "Porównuje godziny i odstępy jak przy sprawdzaniu części. Na osobiste pytanie odpowiada najpierw szczegółem o przedmiocie.",
  "rzecz": "Nakrecany budzik w porysowanej obudowie",
  "wnetrze": [
    {
      "sekret_id": "d3_budzik_dla_lou",
      "co_widac": "Pod tylną klapką tkwi kartka z napisem «Lou, klucz przekręcaj tylko do oporu. Dzwonek od jutra ustawiasz sam. — Mama». Wskazówka alarmu stoi na 5:40.",
      "co_z_tego_wynika": "Budzik ma dostać Lou przed pierwszą zmianą. Matka obiecała zostawić pobudkę jemu."
    }
  ],
  "wejscie": "Budzik na klucz. Pięć czterdzieści pokazuje mała wskazówka, nawet jak reszta stoi.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Pamięta pani kolor obudowy?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Kremowa z przodu. Z tyłu widać poprzednią farbę przy śrubie.", "mina": "mowi"},
        {"tekst": "Gdzie był zapakowany?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "W papierze po filtrze oleju. Dwa obroty taśmy.", "mina": "neutralna"},
        {"tekst": "Po co pani zepsuty budzik?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Chodzi, tylko klucza nie zostawia się w środku. Inaczej brzęczy co sekundę.", "mina": "mowi"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Może pani opisać to uszkodzenie?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Wgniecenie na jeden palec. Spadł, kiedy Lou był niższy od stołu.", "mina": "mowi"},
        {"tekst": "Kto oddał go do naprawy?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Ja go otworzyłam na przerwie. Wystarczyło dosunąć sprężynę.", "mina": "mowi"},
        {"tekst": "Ktoś inny będzie go szukał?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Lou rano zajrzy na półkę. Tę nad kuchenką.", "mina": "mowi"},
        {"tekst": "Lou sam ma ustawić dzwonek?", "ton": "niewygodne", "wymaga": "d3_budzik_dla_lou", "odpowiedz": "Tak stoi na kartce. Proszę przestawić na dwunastą, a klucz dać osobno, ustawi sobie od początku.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Owinąć go jeszcze raz?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Jedna warstwa wystarczy. Papier ma się dać rozerwać przy śniadaniu.", "mina": "mowi"},
        {"tekst": "Pani podpisze odbiór?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Mae Holt. Lou ma to samo nazwisko, pisze je o połowę większe.", "mina": "neutralna"},
        {"tekst": "A jeśli Lou rano zaśpi?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Następny tramwaj ma za siedem minut. Sprawdzałam do wtorku.", "mina": "emocja"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Położę go na stole. Klucz obok, po prawej.",
      "zysk": "Mae może dać synowi budzik przed pierwszą zmianą.",
      "strata": "Jeśli Lou zgłosi się po prezent sam, zastanie już zamknięte wydanie.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "Ustawiłem na piątą trzydzieści pięć i zdążyłem na pierwszy tramwaj. Mama mówi, że budzik spóźnia się o cztery minuty, więc jej nie poprawiam."}
    },
    {
      "akcja": "zatrzymaj",
      "reakcja": "Na Lou Holt, proszę. Dziś mu zostawię na półce tylko kwit.",
      "zysk": "Lou może odebrać budzik osobiście i sam pokwitować wydanie.",
      "strata": "Budzik nie zdąży pomóc mu przy pierwszej pobudce.",
      "echo": {"za_dni": 1, "forma": "gosc", "tekst": "Po budzik, Lou Holt. Na pierwszą zmianę zaspałem o siedem minut, jutro ustawiam go na piątą."}
    }
  ]
}
```

```json
{
  "id": "d4_dama",
  "dzien": 4,
  "postac": "Dama z kopertą",
  "glos": "Prosi półgłosem, w trybie przypuszczającym. Po pytaniu o wpis lub nazwisko przechodzi na krótkie polecenia.",
  "rzecz": "Płaska paczka owinięta szarym papierem, z dostawy z linii szóstej",
  "wnetrze": [
    {
      "sekret_id": "d4_kwit_bez_wpisu",
      "co_widac": "W środku są klisze i kwit zwrotu z numerem seryjnym. Na kwicie napisano «dla pana z nocnej zmiany, bez wpisu», a w rogu widnieje pieczątka kontroli.",
      "co_z_tego_wynika": "Ktoś powtarza ten sposób przekazywania rzeczy. Kwit wiąże paczkę z nocną zmianą i daje podstawę do odmowy wydania bez śladu."
    }
  ],
  "wejscie": "Czy ta płaska paczka z szóstki mogłaby u pana przeczekać do jutra? Kopertę zostawię przy szybie, łatwiej ją tak podsunąć.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Dla kogo mam ją odłożyć?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Pan pozna odbiorcę po numerze. Sam go powie, żeby nie musiał pan zgadywać.", "mina": "mowi"},
        {"tekst": "Do której ma tu zostać?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Do jutra po ostatnim kursie. Kwadrans powinien wystarczyć.", "mina": "neutralna"},
        {"tekst": "Czemu pani nie weźmie jej teraz?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Musiałabym ją jutro znów przywieźć. Już raz zawróciła z pętli.", "mina": "mowi"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Może pani zostawić nazwisko?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Proszę zostawić kreskę. Zmieści się pan w rubryce.", "mina": "neutralna"},
        {"tekst": "Ile jest w kopercie?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Dwadzieścia dolarów. Dwie dziesiątki, żeby nie szeleściło drobnymi.", "mina": "mowi"},
        {"tekst": "Za którą usługę pani płaci?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Za półkę do jutra. Resztę proszę zostawić, jak jest.", "mina": "mowi"},
        {"tekst": "Kto dopisał «bez wpisu» na kwicie?", "ton": "niewygodne", "wymaga": "d4_kwit_bez_wpisu", "odpowiedz": "Ma pan kwit, więc proszę wpisać paczkę pod jego numerem. Kopertę zabiorę, a jemu każę przyjść z dokumentem.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Gdzie zostawić potwierdzenie odbioru?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Pod paczką, jeśli już musi być. Papier zawsze się gubi pierwszy.", "mina": "mowi"},
        {"tekst": "Co po ostatnim kursie jutro?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Jeśli nikt nie przyjdzie, będzie pan mógł zamknąć o czasie. Paczka może poczekać do następnego dnia.", "mina": "neutralna"},
        {"tekst": "A jeśli przyjdzie ktoś z kontroli?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Proszę zapisać godzinę. Lubię wiedzieć, ile się minęliśmy.", "mina": "mowi"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "zatrzymaj",
      "reakcja": "Dobrze, niech leży płasko. Jutro wystarczy zapytać o numer.",
      "zysk": "Paczka zostaje pod Twoją kontrolą. Jeśli koperta wciąż leży na ladzie, dostajesz 20 dolarów.",
      "strata": "Rezerwujesz zgubę dla wskazanego odbiorcy. Przyjęta koperta obciąża Cię przy kontroli, a wpisany kwit zostawia odbiorcy ślad w księdze.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "Proszę położyć paczkę z powrotem między zgubami. Człowiek, który miał znać numer, przyszedł dziś do pana w sprawie księgi."}
    },
    {
      "akcja": "odmow",
      "reakcja": "Proszę mi podsunąć kopertę, jeśli jeszcze leży. Paczki niech pan szuka na zwykłej półce.",
      "zysk": "Zachowujesz standardową kolejność wydań i nie przyjmujesz pieniędzy.",
      "strata": "Tracisz okazję, żeby poznać osobę przychodzącą po paczkę z ustalonym numerem.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "Odbiór odwołany. Następną paczkę zostawię w tramwaju, który kończy trasę gdzie indziej."}
    },
    {
      "akcja": "zadzwon",
      "reakcja": "Proszę podać numer paczki, jeśli go pan ma. Ja już nie zajmuję kolejki.",
      "zysk": "Dyżurny przewozów rejestruje próbę prywatnego przechowania i potwierdza godzinę dostawy.",
      "strata": "Dama wie o zgłoszeniu i może zmienić trasę, zanim ustalisz odbiorcę.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "W protokole dostawy skreślono paczkę z szóstki. Dyżurny prosi o zachowanie własnego egzemplarza do poniedziałku."}
    }
  ]
}
```

```json
{
  "id": "d5_inspektor",
  "dzien": 5,
  "postac": "Inspektor do spraw wydań",
  "glos": "Każdą rozmowę prowadzi jak odczyt rubryk. Gdy ktoś podważa wpis, powtarza jego słowa wolniej i podaje dokładną godzinę.",
  "rzecz": "Zamykana teczka kontroli, zostawiona rano do porównania z księgą wydań",
  "wnetrze": [
    {
      "sekret_id": "d5_kalka_wyrwanej_strony",
      "co_widac": "Pod wkładką teczki leży kalka wyrwanej strony księgi. Jest na niej wydanie prawej rękawiczki Thomasowi Wardowi oraz przyjęcie paczki oznaczonej «bez wpisu». Pod pozycją o paczce widnieją inicjały inspektora.",
      "co_z_tego_wynika": "Kontrola ma kopię strony od początku. Inspektor wiedział o co najmniej jednej paczce, którą kazano obsłużyć poza księgą."
    }
  ],
  "wejscie": "Poproszę księgę, od pierwszego wydania. Gazetę z Marą na pierwszej stronie proszę odsunąć, będę potrzebował suchego blatu.",
  "tury": [
    {
      "pytania": [
        {"tekst": "Od którego dnia zacząć?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Od pierwszego. Rękawiczki mają osobne numery, proszę mi ich nie łączyć.", "mina": "neutralna"},
        {"tekst": "Sprawdza pan też odmowy?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Odmowy, zatrzymania i telefony po dyżurnego. Pusta rubryka też zajmuje miejsce.", "mina": "mowi"},
        {"tekst": "Pan już widział tę księgę?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Dzisiaj pierwszy raz. Proszę trzymać palec przy wyrwanej stronie.", "mina": "klamie"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Mam panu podać potwierdzenia?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Proszę zostawić przy odpowiednich datach. Szybciej zobaczę, czyje nazwisko się powtarza.", "mina": "mowi"},
        {"tekst": "Wpisuje pan także zatrzymane paczki?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Tylko te, które mają numer. Proszę mi wskazać ostatnią pozycję z szóstki.", "mina": "mowi"},
        {"tekst": "Kto odpowiada za brak strony?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "Na razie osoba, która zamyka księgę. Dzisiaj o szóstej rano będzie to pan.", "mina": "mowi"},
        {"tekst": "Pańskie inicjały pod paczką na kalce?", "ton": "niewygodne", "wymaga": "d5_kalka_wyrwanej_strony", "odpowiedz": "Moje, wpis przyjąłem o drugiej czternaście. Dołączę kalkę i podpiszę, że brak strony powstał przed pańską zmianą.", "mina": "emocja"}
      ]
    },
    {
      "pytania": [
        {"tekst": "Zostawi mi pan kopię protokołu?", "ton": "uprzejme", "wymaga": null, "odpowiedz": "Pod warunkiem że wpisze pan godzinę na obu egzemplarzach. Piąta czterdzieści osiem.", "mina": "neutralna"},
        {"tekst": "Telefon Mary też idzie do wykazu?", "ton": "rzeczowe", "wymaga": null, "odpowiedz": "Telefon i nazwiska zgłaszających. Gazetę może pan wyrzucić, adresy zbieramy sami.", "mina": "mowi"},
        {"tekst": "Co, jeśli księga zostanie tutaj?", "ton": "niewygodne", "wymaga": null, "odpowiedz": "O szóstej wpiszę brak dostępu do akt. O szóstej jeden nie będę już miał czego dopisać.", "mina": "mowi"}
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Przyjmuję księgę z załącznikami wymienionymi na kwicie. Proszę wpisać godzinę przed podpisem.",
      "zysk": "Masz dowód przekazania księgi i utrzymujesz ciągłość rozliczenia zmiany. Jeśli inspektor potwierdził kalkę, masz jego podpis pod datą braku strony.",
      "strata": "Inspektor zabiera oryginalne wpisy z nazwiskami osób, które pytały o telefon Mary.",
      "echo": {"za_dni": 2, "forma": "list", "tekst": "Kontrola zakończyła przyjęcie akt, a rozliczenie zmiany zatwierdzono. Oryginał księgi pozostaje w depozycie do końca poszukiwań Mary."}
    },
    {
      "akcja": "odmow",
      "reakcja": "Piąta pięćdziesiąt. Zostawię panu dwie minuty na wpisanie własnego powodu.",
      "zysk": "Zachowujesz oryginał księgi, nazwiska petentów i dostęp do śladu po wyrwanej stronie.",
      "strata": "Inspektor zgłasza odmowę, która wstrzymuje rozliczenie Twojej zmiany.",
      "echo": {"za_dni": 1, "forma": "list", "tekst": "Wypłatę za nocną zmianę odłożono do wyjaśnienia. Wniosek o wgląd w księgę można złożyć ponownie po weekendzie."}
    },
    {
      "akcja": "zadzwon",
      "reakcja": "Proszę włączyć głośnik. Moje nazwisko ma pan na pierwszej stronie protokołu.",
      "zysk": "Kierownik przewozów słyszy na żywo, jakie dokumenty mają opuścić biuro, i może potwierdzić ich stan.",
      "strata": "Kontrola obejmuje także Twoje wcześniejsze wydania i wydłuża rozliczenie.",
      "echo": {"za_dni": 3, "forma": "list", "tekst": "W obecności kierownika spisano stan księgi przed przekazaniem. Od poniedziałku wszystkie nocne wydania wymagają drugiego podpisu."}
    }
  ]
}
```
