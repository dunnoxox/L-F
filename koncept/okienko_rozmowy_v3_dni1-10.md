# OKIENKO: rozmowy dni 1-10 (wersja 4, język potoczny, spójne pytania i odpowiedzi)

**Zasady pisania.** Ludzie mówią tak, jak mówią ludzie: krótkie zdania, bez aforyzmów, bez urzędowych kalek. Pierwsze zdanie odpowiedzi odpowiada na zadane pytanie. Gracz nie ma płci: pytania są bezosobowe albo w trybie „ty” do gościa, a goście nie mówią do gracza „pan/pani” i nie używają form rodzajowych o graczu. Znaczniki `id:akcja` w `wymaga` i `wejscie_jesli` odwołują się do wcześniejszych decyzji.

**Pokusy z kasą (akcje liczone przez zakończenia).** Akcje, w których gracz zabiera cudze pieniądze albo przyjmuje łapówkę, mają przedrostek `wez_` albo nazywają się `koperta`: `d1_rosa:wez_20`, `d2_jonah:wez_pierscionek`, `d3_maz_i_siostra:wez_100_evan`, `d4_iris:koperta`, `d5_gus:wez_250_gus`, `d8_bree:wez_80_bree`. Każda ma jawną cenę i echo w późniejszych dniach. Akcje, w których gracz płaci z własnej kieszeni, mają przedrostek `wyloz_` (pierwsza w dniu 12). Decyzja z polem `wymaga` jest dostępna tylko, jeśli gracz zna wskazany sekret, usłyszał ofertę (pytanie z `ustawia`) albo wybrał wskazaną wcześniej akcję.

## DZIEŃ 1

**Mini-karta: Thomas Ward, 71, wdowiec.** Mówi grzecznie, trochę staroświecko, żartuje z własnej drżącej ręki. Chce: lewą rękawiczkę zmarłej żony, bo w niedzielę idzie na cmentarz. Ukrywa: był tu już raz, prawą rękawiczkę dostał od Sama bez wpisu. Kłamie: „To pierwsza wizyta.”

```json
{
  "id": "d1_thomas",
  "dzien": 1,
  "postac": "Thomas Ward, 71",
  "glos": "Grzecznie, trochę staroświecko. Żartuje z własnej drżącej ręki.",
  "typ": "uczciwy, wstydliwy",
  "rzecz": "Lewa skórzana rękawiczka, zszyta białą nitką przy kciuku",
  "wnetrze": [
    {
      "sekret_id": "d1_kwit_0417",
      "co_widac": "W mankiecie tkwi kwit z tego biura, numer 0417, sprzed sześciu tygodni. Odręcznie: „Prawa wydana bez wpisu. Lewa czeka. S.H.” W księdze wydań nie ma wpisu o tym numerze, w tym miejscu wyrwano stronę.",
      "co_z_tego_wynika": "Thomas już tu był i dostał coś, czego nigdzie nie zapisano. Poprzednik wydawał rzeczy poza księgą."
    }
  ],
  "wejscie": "Dobry wieczór. Thomas Ward. Zgubiłem lewą rękawiczkę mojej żony, w tramwaju czwórce. Ellen zmarła w lutym. W niedzielę idę na cmentarz i nie chcę iść z jedną.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta rękawiczka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Brązowa skóra, mały rozmiar. Przy kciuku zszyłem ją białą nitką, bo ciemnej nie miałem. Krzywo, ale trzyma.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie i kiedy się zgubiła?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, wczoraj wieczorem, jak jechałem do Doków. Leżała mi na kolanie i zsunęła się pod siedzenie na zakręcie.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu rękawiczki żony były w tramwaju?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Noszę je w kieszeni, jedną w drugiej, jakbym trzymał ją za rękę. Głupie, wiem.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Na kogo wpisać tę rękawiczkę?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Na Ellen Ward. A mnie jako Thomas Ward, przez h.",
          "mina": "mowi"
        },
        {
          "tekst": "Jak sprawdzić, że to właśnie ta?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Drugą mam w kieszeni. Proszę je położyć kciukami do siebie: w prawej nitka jest czarna, w lewej biała. Czarna mi się skończyła.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy to pierwsza wizyta w tym biurze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Pierwsza. Z urzędami się nie zadaję.",
          "mina": "klamie"
        },
        {
          "tekst": "W mankiecie jest kwit z tego biura, numer 0417. Skąd on?",
          "ton": "niewygodne",
          "wymaga": "d1_kwit_0417",
          "odpowiedz": "No dobrze, byłem tu. Trzy tygodnie temu zgubiłem prawą. Młody człowiek, Sam, oddał mi ją od ręki i powiedział, że wpisu nie trzeba, bo to pamiątka, a nie zguba. Wstydziłem się, że to drugi raz.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jest jakiś dokument ze zdjęciem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Mam dowód, ale ręka mi drży, a zdjęcie jest sprzed dziesięciu lat. Córka lepiej mnie poświadczy.",
          "mina": "mowi"
        },
        {
          "tekst": "Może ktoś jeszcze zgłosić się po tę rękawiczkę?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Córka, Claire. Ale ona nie wie, że rękawiczka się zgubiła. Jakby przyszła, niech jej ktoś powie, że wszystko w porządku.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co będzie, jeśli rękawiczka zostanie tu do niedzieli?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Pójdę na cmentarz z jedną. Ellen by się śmiała, że sto razy mi mówiła, żebym pilnował rzeczy.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Włożę je do jednej kieszeni, tam, gdzie były.",
      "zysk": "Thomas idzie w niedzielę na cmentarz z obiema rękawiczkami.",
      "strata": "Wydajesz na słowo i nitkę, a kwit 0417 zostaje w księdze bez wyjaśnienia.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Dziękuję za rękawiczkę. W niedzielę pojechałem z Claire na cmentarz, obie leżały na kamieniu przez godzinę. Claire pyta, kim jest młody człowiek, który wcześniej oddał mi prawą bez papierka. Powiedziałem, że nie wiem, choć wiem. — T. Ward"
      }
    },
    {
      "akcja": "zatrzymaj_sprawdz",
      "etykieta": "Zatrzymaj do sprawdzenia tożsamości",
      "reakcja": "Rozumiem. Przyjdę jutro z córką, ona ma dowód i wie, jak wygląda ta nitka.",
      "zysk": "Rękawiczka zostaje w biurze, dopóki ktoś nie potwierdzi, kim jest Thomas.",
      "strata": "Starszy człowiek wraca do domu z jedną rękawiczką, a niedziela na cmentarzu jest zagrożona.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Claire Ward: „Ojciec dwa dni nie wychodził z domu. Proszę oddać mu tę rękawiczkę, podpiszę za niego. I proszę mi powiedzieć, kto wcześniej oddał mu prawą bez żadnego papieru.”"
      }
    },
    {
      "akcja": "wydaj_bez_wpisu",
      "etykieta": "Wydaj bez wpisu, tak jak zrobił to Sam",
      "reakcja": "Dziękuję. Tak samo jak ostatnio: bez papierka. Młody człowiek też tak powiedział.",
      "zysk": "Thomas ma obie rękawiczki od ręki i nikt się nie dowie, że biuro znów wydało coś poza księgą.",
      "strata": "Powtarzasz to, co robił poprzednik. Wydanie nie zostawia śladu i zalicza się do rachunku „bez wpisu”.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Thomas Ward: „Mówiłem Claire, że w tym biurze ludzie wydają od ręki. Nie powiedziałem jej, że to wasz drugi raz bez papierka.”"
      }
    }
  ],
  "rola": "wdowiec, który kłamie ze wstydu",
  "watki": [
    "Poprzednik"
  ],
  "tik": "żartuje z drżącej ręki",
  "potrzeba": "lewa rękawiczka żony na niedzielę",
  "slad": "kwit 0417 zdradza, że już tu był"
}
```

**Mini-karta: Rosa Vale, 33, praczka.** Zmęczona, praktyczna, liczy na głos, krótkie zdania. Chce: kopertę z wypłatą, 129 $, bo jutro czynsz. Ukrywa: czwartą noc ma przekreśloną, bo wyszła do chorej córki. Nie kłamie, tylko milczy. W tle: wypłaty rozdziela Iris Bell.

```json
{
  "id": "d1_rosa",
  "dzien": 1,
  "postac": "Rosa Vale, 33",
  "glos": "Zmęczona, praktyczna, liczy na głos. Krótkie zdania, suchy humor.",
  "typ": "uczciwa, ale nie ma jak tego udowodnić",
  "rzecz": "Brązowa koperta z wypłatą, jedna zszywka",
  "wnetrze": [
    {
      "sekret_id": "d1_lista_nocy",
      "co_widac": "W kopercie jest 129 dolarów i kartka z listą nocy: trzy odhaczone, czwarta przekreślona. Na odcinku zbiorczym stoi nazwisko I. Bell.",
      "co_z_tego_wynika": "Wypłatę odbierała i rozdzielała Iris Bell. Czwartą noc Rosy skreśliła Iris."
    }
  ],
  "wejscie": "Dobry wieczór. Rosa Vale, pracuję w pralni pod estakadą. Zgubiłam kopertę z wypłatą, 129 dolarów, w jedenastce. Jutro mam czynsz, więc to cały mój tydzień.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta koperta?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Brązowa, jedna zszywka. Zszywka weszła krzywo, bo kierownik zszywał na stojąco.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie i o której ją zgubiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, o szóstej rano. Położyłam ją obok, żeby zapiąć torbę, i zasnęłam do pętli.",
          "mina": "neutralna"
        },
        {
          "tekst": "Skąd wiadomo, że było tam 129 dolarów?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo liczyłam. Trzy noce po 43 dolary, to daje 129. Przeliczyłam trzy razy.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kto ci wypłacił te pieniądze?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Iris Bell, zarządczyni naszej kamienicy. Odbiera wypłatę z pralni i rozdaje nam w domu. Koperta była od niej.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jeszcze jest w środku, poza pieniędzmi?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kartka z naszymi nocami. Nic ważnego.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu wypłatę odbiera Iris, a nie same pracownice?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Tak ustaliła. Dla niej wygodnie, dla nas nie bardzo, ale mieszkamy u niej, więc nie dyskutuję.",
          "mina": "neutralna"
        },
        {
          "tekst": "Na liście jedna noc jest przekreślona. Dlaczego?",
          "ton": "niewygodne",
          "wymaga": "d1_lista_nocy",
          "odpowiedz": "W czwartek wyszłam o północy, bo córka miała gorączkę. Iris skreśliła całą noc, nie połowę. Czterdzieści trzy dolary za cztery godziny, które przepracowałam. Nie chcę o tym gadać.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Przeliczysz pieniądze przy okienku?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Tak, przy szybie. Jak się ma sto dwadzieścia dziewięć na cały tydzień, to się liczy co do centa.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Rosa Vale, przez V. Podpiszę, jak przeliczę.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co będzie, jeśli wypłata nie wróci dzisiaj?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Spóźnię się z czynszem, a Iris liczy za to dwadzieścia dolarów kary. Dostanę sto dziewięć zamiast stu dwudziestu dziewięciu.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Przeliczę przy szybie. Sto dwadzieścia dziewięć, zgadza się. Dziękuję, serio.",
      "zysk": "Rosa ma czynsz na jutro, a w księdze jest jej podpis pod kwotą 129 dolarów.",
      "strata": "Odcinek zbiorczy jest wystawiony na Iris Bell, więc w papierach wypłata należała do kogoś innego, niż ją odbiera.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Iris zeszła do pralni i spytała, kto mi pozwolił odbierać pieniądze przez okienko. Powiedziałam, że nikt, że sama zgubiłam kopertę. Od przyszłego tygodnia odbieram wypłatę osobiście, bez niej. — Rosa"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Dobrze, powiedzcie Iris. Poczekam, tylko czynsz nie poczeka.",
      "zysk": "Koperta wraca do osoby wskazanej na odcinku, czyli do Iris, zgodnie z przepisem.",
      "strata": "Rosa płaci dwadzieścia dolarów kary za spóźniony czynsz.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Iris oddała mi kopertę z potrąceniem: sto dziewięć dolarów. Dwadzieścia za spóźniony czynsz, który sama pobiera. Powiedziała, że to formalność. — Rosa"
      }
    },
    {
      "akcja": "wez_20",
      "etykieta": "Wydaj, ale odlicz sobie 20 $ „za fatygę”",
      "kasa": 20,
      "reakcja": "Sto dziewięć? Zaraz, przeliczę jeszcze raz. ...Brakuje dwudziestu dolarów. Nie powiem nic, bo kto mi uwierzy.",
      "zysk": "Dostajesz 20 dolarów do kieszeni, które nikomu nie zostały zapisane.",
      "strata": "Rosie brakuje dwudziestu dolarów do czynszu, a Iris nalicza jej za to jeszcze karę.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "W kopercie brakowało mi dwudziestu dolarów. Iris naliczyła karę za spóźniony czynsz, drugie dwadzieścia. Cztery dychy w plecy przez jedną noc. Nie mówię, że ktoś wziął. Mówię, że brakuje. — Rosa"
      }
    }
  ],
  "rola": "praczka z kopertą wypłaty",
  "watki": [
    "kamienica",
    "pieniądze"
  ],
  "tik": "liczy na głos",
  "potrzeba": "129 $ na czynsz do jutra",
  "slad": "nazwisko I. Bell na odcinku wypłat"
}
```

## DZIEŃ 2

**Mini-karta: Jonah Pike, 22, kurier na rowerze.** Mówi szybko, poprawia się w pół zdania, kiedy pada imię June, zwalnia. Chce: plecak, w którym jest pudełko z pierścionkiem. O siódmej rano chce oświadczyć się June, zanim ona wyjdzie do pracy. Ukrywa: pierścionek kupił na raty. Obraz: serwetka z trzema wersjami oświadczyn.

```json
{
  "id": "d2_jonah",
  "dzien": 2,
  "postac": "Jonah Pike, 22",
  "glos": "Mówi szybko, poprawia się w pół zdania. Kiedy pada imię June, zwalnia.",
  "typ": "uczciwy, zdenerwowany",
  "rzecz": "Czarny plecak z pękniętą klamrą",
  "wnetrze": [
    {
      "sekret_id": "d2_paragon_raty",
      "co_widac": "W pudełku w kieszeni na plecach leży pierścionek z małym oczkiem. Obok paragon: wpłacone 40 dolarów, 200 zostało do spłaty w ratach. Na serwetce trzy wersje oświadczyn, dwie przekreślone.",
      "co_z_tego_wynika": "Jonah o siódmej rano chce się oświadczyć, a pierścionek kupił na raty. Pierścionek jest wart w lombardzie około 150 dolarów."
    }
  ],
  "wejscie": "Cześć, Jonah. Zgubiłem plecak w jedenastce, czarny, z pękniętą klamrą. Potrzebuję go przed siódmą rano, bo w kieszeni jest coś ważnego. Naprawdę ważnego.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w plecaku?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Ładowarka, książka, mnóstwo biletów, nie wiem, czemu je zbieram. I pudełko w kieszeni na plecach. Pudełko jest najważniejsze.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie i kiedy go zgubiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, wczoraj wieczorem, pod składanym siedzeniem przy drzwiach. Wcisnąłem go nogą, żeby June miała gdzie stanąć.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jest w tym pudełku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Prezent. Niespodzianka, więcej nie powiem.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kim jest June?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Moją dziewczyną. Pracuje w piekarni, wstaje o czwartej. O siódmej rano, zanim wyjdzie, chcę ją o coś zapytać. Dlatego ten plecak.",
          "mina": "emocja"
        },
        {
          "tekst": "Jak chcesz jej to powiedzieć?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W kuchni, zanim założy buty. Mam trzy wersje na serwetce. Żadna mi się nie podoba.",
          "mina": "mowi"
        },
        {
          "tekst": "A jak odmówi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To będzie najgorszy poranek mojego życia. Ale wolę zapytać, niż się nie dowiedzieć.",
          "mina": "emocja"
        },
        {
          "tekst": "Na paragonie 40 dolarów wpłaty i reszta na raty. Stać cię na to?",
          "ton": "niewygodne",
          "wymaga": "d2_paragon_raty",
          "odpowiedz": "Nie stać. Wziąłem na sześć rat, jestem kurierem. Ale ona jest tego warta. I tak, wiem, jak to brzmi.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Zdążysz do domu przed siódmą?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Rowerem dziesięć minut. Zdążę z zapasem, byle ktoś mi go dał dzisiaj.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jonah Pike. Pike jak ta ryba.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co zrobisz, jeśli plecak nie wróci przed siódmą?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Przełożę, ale June od razu zauważy, że coś jest nie tak. Ona zawsze wie. Przy niej nie umiem kłamać.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki! Serio, dzięki. Lecę, zanim się rozmyślę.",
      "zysk": "Jonah wraca do domu z pierścionkiem i ma noc na ćwiczenie oświadczyn.",
      "strata": "Plecak wychodzi po samym opisie i podpisie, nikt nie sprawdził pudełka w kieszeni.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Jonah: „Zdążyłem. O siódmej zapytałem June, serwetka została w kieszeni. Trzymaj kciuki, jeśli masz kciuki.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Co? Ale to MÓJ plecak! Dobrze, dobrze, wrócę z kimś, kto potwierdzi.",
      "zysk": "Plecak zostaje w biurze do czasu dowodu własności.",
      "strata": "Jonah może nie zdążyć do siódmej, a June zauważy, że coś jest nie tak.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Jonah: „Odebrałem plecak dopiero rano, spóźniłem się. June chyba się domyśla. Pierścionek nadal mam.”"
      }
    },
    {
      "akcja": "wez_pierscionek",
      "etykieta": "Zatrzymaj pierścionek, plecak wydaj",
      "kasa": 150,
      "reakcja": "Dziękuję, lecę. ...Eee, a pudełko? Jest puste! Zaraz, gdzie...? Ja... idę na policję.",
      "zysk": "Pierścionek jest wart w lombardzie około 150 dolarów, niemal tygodniowy czynsz.",
      "strata": "Jonah zgłasza kradzież na komisariacie, a oświadczyny rano upadają. Policja zapyta, kto miał plecak.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Był tu mężczyzna z plecakiem. Zgłosił kradzież pierścionka z plecaka, który odebrał z biura rzeczy znalezionych. Czyli: jedno biuro, jedno nocne okienko. Zapiszę.”"
      },
      "wymaga": "d2_paragon_raty"
    }
  ],
  "rola": "kurier z pierścionkiem na raty",
  "watki": [
    "Marlow",
    "pieniądze"
  ],
  "tik": "zwalnia na imieniu June",
  "potrzeba": "plecak z pierścionkiem na siódmą rano",
  "slad": "raty zdradzają dług, który ma Marlow"
}
```

**Mini-karta: Hana Moreau, 26, skrzypaczka.** Mówi starannie, jakby recytowała. Chce: futerał ze skrzypcami, bo o ósmej rano ma przesłuchanie do orkiestry. Ukrywa: skrzypce są wypożyczone z konserwatorium, a termin wypożyczenia minął wczoraj. Kłamie: „Moje, gram na nich siedem lat.”

```json
{
  "id": "d2_hana",
  "dzien": 2,
  "postac": "Hana Moreau, 26",
  "glos": "Mówi starannie, jakby recytowała. Przy kłamstwie podkreśla każdą sylabę.",
  "typ": "sympatyczna kłamczyni",
  "rzecz": "Czarny sztywny futerał na skrzypce z zieloną naklejką",
  "wnetrze": [
    {
      "sekret_id": "d2_etykieta_wyp",
      "co_widac": "Pod pokrywą futerału przyklejona kartka: „Własność Konserwatorium. Wypożyczone H. Moreau do 7 sierpnia.” Dziś jest 10 sierpnia.",
      "co_z_tego_wynika": "Skrzypce nie są Hany. Jej wypożyczenie skończyło się wczoraj."
    }
  ],
  "wejscie": "Dobry wieczór. Hana Moreau, skrzypaczka. Zgubiłam futerał ze skrzypcami w czwórce. O ósmej rano mam przesłuchanie do orkiestry i bez tych skrzypiec nie mam po co przychodzić.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda futerał?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czarny, sztywny, z mosiężnymi zamkami. W środku wieka zielona naklejka, a rączka owinięta czerwoną taśmą.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie dokładnie go zostawiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, w ostatnim kursie. Postawiłam go między nogami, zadzwoniła mama i wysiadłam bez futerału.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czyje to są skrzypce?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Moje. Oczywiście, że moje. Gram na nich od siedmiu lat.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co jeszcze jest w futerale?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Kalafonia, szmatka z jedwabiu i nuty Mendelssohna z moimi zapiskami ołówkiem.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy w skrzypcach jest etykieta lutnika?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jest, ale mała. Nazwiska nie pamiętam, od lat nie zaglądałam do środka.",
          "mina": "neutralna"
        },
        {
          "tekst": "Dlaczego to takie pilne właśnie dzisiaj?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo przesłuchanie mam rano, o ósmej. Dostałam się z listy rezerwowej, drugiej szansy nie będzie.",
          "mina": "emocja"
        },
        {
          "tekst": "Pod pokrywą jest kartka: wypożyczenie do 7 sierpnia. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": "d2_etykieta_wyp",
          "odpowiedz": "Że termin minął w sobotę. Konserwatorium nie przedłużyło, bo komisja zbiera się dopiero w czwartek. Nie jestem złodziejką, tylko spóźniłam się o trzy dni. Ale przesłuchanie mam dziś rano.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Daleko stąd do filharmonii?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Cztery przystanki. Próba jest o siódmej, więc jeśli wyjdę stąd przed szóstą, zdążę rozgrzać palce.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór instrumentu wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Hana Moreau. Napiszę czytelnie, choć ręka mi drży od wczoraj.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co będzie, jeśli skrzypce wrócą do konserwatorium?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wtedy ktoś inny zagra moje przesłuchanie, a mnie wykreślą z listy. Bez skrzypiec nie mam po co tam iść.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. W czwartek pójdę do komisji, obiecuję. Najpierw zagram.",
      "zysk": "Hana zagra przesłuchanie i ma szansę dostać miejsce w orkiestrze.",
      "strata": "Oddajesz instrument konserwatorium komuś, komu wypożyczenie wygasło w sobotę.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Zagrałam. Nikt nie wiedział, że skrzypce są po terminie. Dziś po południu komisja przedłużyła mi wypożyczenie do końca roku. Przepraszam za zamieszanie. — H. Moreau"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Rozumiem. Skrzypce należą do konserwatorium. Powiedz im chociaż, że sama się zgłosiłam.",
      "zysk": "Skrzypce wracają do prawdziwego właściciela, czyli do konserwatorium.",
      "strata": "Hana traci przesłuchanie i miejsce na liście.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Konserwatorium odebrało skrzypce i podziękowało za sumienność. Na przesłuchaniu zagrał ktoś inny. Ja gram teraz na altówce koleżanki w piwnicy. Dyplom mam. Orkiestry nie. — H. Moreau"
      }
    }
  ],
  "rola": "skrzypaczka z cudzymi skrzypcami",
  "watki": [
    "humor"
  ],
  "tik": "mówi jak recytacja",
  "potrzeba": "skrzypce na przesłuchanie o ósmej",
  "slad": "wypożyczenie z konserwatorium skończyło się już wczoraj"
}
```

## DZIEŃ 3 (burza)

**Mini-karta: Evan Doyle, 37, i Lena Brandt, 31.** Evan mówi grzecznie, pełnymi zdaniami, wraca do tego samego pytania i kłamie. Lena mówi szybko, urywa zdania i mówi za dużo, ale prawdę. Oboje chcą telefonu Mai. Evan: dowodu, że żona żyje. Lena: telefonu z jej wiadomością, której Evan nie może przeczytać. Kłamie Evan: „Nie było żadnej kłótni.”

```json
{
  "id": "d3_maz_i_siostra",
  "dzien": 3,
  "postac": "Evan Doyle, 37, i Lena Brandt, 31",
  "glos": "Evan: grzecznie, pełnymi zdaniami, wraca do tego samego pytania. Lena: szybko, urywa, mówi za dużo.",
  "typ": "Evan kłamie, Lena mówi prawdę",
  "rzecz": "Czarny telefon w skórzanym etui z odklejonym rogiem",
  "ludzie": {
    "maz": "Evan",
    "siostra": "Lena"
  },
  "wnetrze": [
    {
      "sekret_id": "d3_telefon_wiadomosc",
      "co_widac": "Na ekranie wisi wiadomość od „Lena” z czwartku, 21:48: „Nie wracaj do domu. Jadę po ciebie w sobotę.” Pod etui złożone stare zdjęcie dwóch dziewczynek, podpisane „Maya i Lena”.",
      "co_z_tego_wynika": "To telefon Mai. Siostra kazała jej nie wracać do męża, a telefon został w tramwaju po tej wiadomości."
    }
  ],
  "wejscie": "Dobry wieczór. Evan Doyle, a to Lena, siostra mojej żony. Oboje przyszliśmy po telefon Mai, która zaginęła w czwartek. Zostawiła go w jedenastce. Dwudziestego drugiego policja zamyka sprawę. Nie mamy czasu.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten telefon?",
          "ton": "uprzejme",
          "kto": "maz",
          "wymaga": null,
          "odpowiedz": "Czarny, w skórzanym etui z odklejonym rogiem. Kupiłem jej to etui na rocznicę.",
          "mina": "mowi"
        },
        {
          "tekst": "Kiedy Maya go zgubiła?",
          "ton": "rzeczowe",
          "kto": "siostra",
          "wymaga": null,
          "odpowiedz": "W czwartek wieczorem, w jedenastce. Ale ona nie gubi rzeczy. Zostawia je tam, gdzie ktoś je przechowa i nie zapyta, po co.",
          "mina": "klamie"
        },
        {
          "tekst": "Jak wyglądała ostatnia rozmowa z Mayą?",
          "ton": "niewygodne",
          "kto": "maz",
          "wymaga": null,
          "odpowiedz": "Zwyczajnie. Nie było żadnej kłótni. Zjedliśmy kolację, poszła do pracy i nie wróciła.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co jest w tym telefonie?",
          "ton": "uprzejme",
          "kto": "siostra",
          "wymaga": null,
          "odpowiedz": "Zdjęcia, muzyka, kontakty. I trochę wiadomości ode mnie, zwykłe rzeczy między siostrami.",
          "mina": "mowi"
        },
        {
          "tekst": "Po co policji ten telefon?",
          "ton": "rzeczowe",
          "kto": "maz",
          "wymaga": null,
          "odpowiedz": "Żeby sprawdzić, dokąd poszła. Policjant powiedział, że bez telefonu do wtorku, siódmego września, zamkną sprawę i tyle.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy Maya miała powód, żeby odejść?",
          "ton": "niewygodne",
          "kto": "maz",
          "wymaga": null,
          "odpowiedz": "Żadnego. Mieliśmy spokojne małżeństwo. Oboje dużo pracowaliśmy, to wszystko.",
          "mina": "klamie"
        },
        {
          "tekst": "SMS od Leny: „Nie wracaj do domu.” Co to znaczy?",
          "ton": "niewygodne",
          "kto": "siostra",
          "wymaga": "d3_telefon_wiadomosc",
          "odpowiedz": "To ja napisałam. Maya zadzwoniła w czwartek, że boi się wracać. Jak Evan to przeczyta, przyjdzie do mnie. Proszę nie dawać mu tego telefonu.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kiedy ostatnio miałaś od niej wieści?",
          "ton": "uprzejme",
          "kto": "siostra",
          "wymaga": null,
          "odpowiedz": "Od czwartku nic. Ani słowa. Naprawdę.",
          "mina": "klamie"
        },
        {
          "tekst": "Co zrobisz z telefonem, jeśli go dostaniesz?",
          "ton": "rzeczowe",
          "kto": "maz",
          "wymaga": null,
          "odpowiedz": "Zaniosę go policjantowi, Reyesowi z komisariatu przy Rynku. Jeszcze dziś.",
          "mina": "mowi"
        },
        {
          "tekst": "Co będzie, jeśli telefon zostanie w biurze?",
          "ton": "niewygodne",
          "kto": "maz",
          "wymaga": null,
          "odpowiedz": "Policja dostanie go za późno. Wiesz co, sto dolarów od ręki, i nikt nie musi tego wpisywać. Zgoda?",
          "mina": "mowi",
          "ustawia": "d3_evan_oferta"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj_evan",
      "etykieta": "Wydaj telefon Evanowi",
      "kto": "maz",
      "reakcja": "Dziękuję. Idę z tym do Reyesa. Lena, nie patrz tak.",
      "zysk": "Telefon trafia do policji z podpisem Evana w księdze. Czyste wydanie, nikt nie ma do ciebie pretensji.",
      "strata": "Evan przeczyta SMS od Leny i pójdzie do niej z awanturą, a Lena ci tego nie zapomni.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Evan był u mnie wieczorem. Przeczytał wiadomość i krzyczał na klatce, aż sąsiadka wyszła. Powiedział, że biuro wydało mu telefon, więc teraz wie wszystko. — Lena"
      }
    },
    {
      "akcja": "wydaj_lena",
      "etykieta": "Wydaj telefon Lenie",
      "kto": "siostra",
      "reakcja": "Dziękuję. Zabieram go do siebie. Evan, nie patrz tak na mnie, to rodzinne.",
      "zysk": "Lena zabiera telefon i wiadomość nie dociera do Evana.",
      "strata": "Evan zostaje bez śladu po żonie i przestaje ufać biuru.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Evan Doyle: „Wydano telefon mojej żony komuś innemu. Chcę wiedzieć komu i na jakiej podstawie. Jestem jej mężem.”"
      }
    },
    {
      "akcja": "zatrzymaj",
      "etykieta": "Zatrzymaj telefon dla Mai",
      "reakcja": "To znaczy, że nikt go nie dostanie? A jeśli ona po niego nie przyjdzie?",
      "zysk": "Telefon leży w biurze, nikt go nie czyta.",
      "strata": "Evan i Lena wychodzą z niczym, a Maya nie wiadomo czy po telefon wróci.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Doyle dzwoni do mnie co godzinę, że telefon żony jest w biurze i go nie wydają. Czyli: wiem, gdzie jest. Nie mówię, że to źle.”"
      }
    },
    {
      "akcja": "wez_100_evan",
      "etykieta": "Wydaj telefon Evanowi i przyjmij od niego 100 $",
      "kasa": 100,
      "kto": "maz",
      "reakcja": "Proszę. Cieszę się, że się rozumiemy. Lena, idziemy.",
      "zysk": "Dostajesz 100 dolarów do ręki, czyli większość raty dla Kuby.",
      "strata": "Telefon idzie do Evana bez podpisu i bez wpisu. Lena widzi kopertę, a Evan zapamięta, że biuro ma cenę, i w dniu 7 przyjdzie po więcej.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Lena Brandt: „Widziałam, jak Evan podał kopertę, a okienko ją wzięło. Nie wiem już, komu tu wierzyć.”"
      },
      "wymaga": "d3_evan_oferta"
    }
  ],
  "rola": "mąż i szwagierka po telefon Mai",
  "watki": [
    "Zaginiona"
  ],
  "tik": "Evan poprawia mankiet",
  "potrzeba": "telefon Mai z jedną wiadomością",
  "slad": "SMS „Nie wracaj do domu” rozdziela ich"
}
```

**Mini-karta: Dana Ruiz, 38, mechaniczka tramwajowa.** Mówi głośno, prosto, bez owijania, lubi swój budzik jak człowieka. Chce: budzik, bo bez niego nie wstanie na czwartą. Nic nie ukrywa. To dwie minuty oddechu po ciężkiej scenie.

```json
{
  "id": "d3_dana",
  "dzien": 3,
  "postac": "Dana Ruiz, 38",
  "glos": "Głośno, prosto, bez owijania. Mówi o budziku jak o koledze z pracy.",
  "typ": "uczciwa, rozbrajająca",
  "rzecz": "Blaszany budzik z dwoma dzwonkami",
  "wnetrze": [],
  "wejscie": "Cześć, Dana Ruiz, mechanik w zajezdni. Zgubiłam budzik w szóstce, taki blaszany, z dwoma dzwonkami. Bez niego nie wstanę na czwartą, a w zajezdni nikt nie czeka, jak ktoś się spóźni.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten budzik?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Blaszany, okrągły, dwa dzwonki na górze. Mam go od dwunastu lat i dzwoni tak, że sąsiad się budzi.",
          "mina": "mowi"
        },
        {
          "tekst": "Na którą jest nastawiony?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na czwartą piętnaście. Wskazówka alarmu jest czerwona, krzywa, bo kiedyś ją naprawiałam kombinerkami.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu zabierasz budzik do tramwaju?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo wczoraj poszłam spać u siostry. Nie chciałam go zostawić samego, wiesz, jak to jest.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co masz jeszcze w torbie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Klucz francuski, kanapkę i gazetę. W gazecie ciągle to samo ogłoszenie, że szukają kogoś do nocnego okienka. Bez referencji. Kanapka jest dla budzika, żartuję.",
          "mina": "mowi"
        },
        {
          "tekst": "Czym potwierdzisz, że to twój?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na spodzie jest naklejka „Mama”, bo mama mi go dała. I wgniecenie przy prawym dzwonku, jak spadł z lodówki.",
          "mina": "mowi"
        },
        {
          "tekst": "Jak długo pracujesz w zajezdni?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jedenaście lat. Znam tu każdy zawias. A dziś stoję w kolejce przez budzik. Śmieszne, nie?",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kiedy musisz być w zajezdni?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Za pięć piąta. Jak wstanę o czwartej piętnaście, zdążę na kawę. Jak nie, na nic.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dana Ruiz, przez „z” na końcu. Wszyscy piszą „s”.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co będzie, jeśli budzik zostanie w biurze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Kupię nowy, ale ten ma w sobie moje dwanaście lat. Nowy nie będzie mnie lubił.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki! Czwarta piętnaście, słyszysz, budziku? Bez ciebie nie ruszam.",
      "zysk": "Dana wstanie na czwartą piętnaście i zdąży do zajezdni.",
      "strata": "Nic cię to nie kosztuje, poza dwiema minutami kolejki.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Dana Ruiz: „Wpadłam tylko powiedzieć dzięki. Budzik działa, sąsiad się obudził, ja też.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Co? Ale przecież to mój budzik! No dobra, przyniosę kogoś z zajezdni, żeby potwierdził.",
      "zysk": "Budzik zostaje w biurze do potwierdzenia.",
      "strata": "Dana nie wstanie na czwartą i spóźni się do pracy, a w zajezdni nikt jej nie wybroni.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Dana Ruiz: „Spóźniłam się do pracy o czterdzieści minut. Przełożony zapisał. A ja zapamiętam, kto mi nie oddał budzika.”"
      }
    }
  ],
  "rola": "mechaniczka z ukochanym budzikiem",
  "watki": [
    "humor"
  ],
  "tik": "mówi głośno i prosto",
  "potrzeba": "budzik na czwartą rano",
  "slad": "dwie minuty oddechu po ciężkiej scenie"
}
```

## DZIEŃ 4

**Mini-karta: Iris Bell, 56, zarządczyni kamienicy.** Mówi cicho i uprzejmie, ze zdrobnieniami. Każdą prośbę nazywa „drobną przysługą”, a groźbę podaje jak prognozę pogody. Chce: paczkę w płótnie z kasetką i zostawia 120 $ „za fatygę”. Ukrywa: w kasetce są dokumenty dla ludzi, którzy chcą zniknąć. Kłamie: „Papiery lokatorów, nic ciekawego.”

```json
{
  "id": "d4_iris",
  "dzien": 4,
  "postac": "Iris Bell, 56",
  "glos": "Cicho, uprzejmie, ze zdrobnieniami. Prosi o „drobną przysługę”, a groźbę podaje jak prognozę pogody.",
  "typ": "presja i łapówka",
  "rzecz": "Płaska paczka w szarym płótnie, przewiązana sznurkiem",
  "wnetrze": [
    {
      "sekret_id": "d4_blankiet_kasetka",
      "co_widac": "Pod płótnem leży kasetka na kłódkę, przez szparę widać brzeg paszportu z wyciętą stroną. Obok blankiet z numerem odbioru 0412 i dopisek „dla nocnej zmiany, bez wpisu”.",
      "co_z_tego_wynika": "To nie są papiery lokatorów, tylko dokumenty dla kogoś, kto chce zniknąć. Poprzednik przyjmował takie paczki bez wpisu."
    }
  ],
  "wejscie": "Dobry wieczór. Iris Bell, zarządzam kamienicą przy Cooper Street dziewięć. Zgubiła mi się paczka w szarym płótnie, w szóstce, ostatnim kursem. Drobiazg, ale lokatorzy czekają na nią do rana.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta paczka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Płaska, w szarym płótnie, związana sznurkiem. W środku niewielka kasetka na kłódkę.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie dokładnie została?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W szóstce, ostatnim kursem, na półce nad siedzeniem. Zawsze tak kładę i zawsze pamiętam. Wczoraj nie.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co jest w kasetce?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Papiery lokatorów. Pokwitowania, drobne rozliczenia. Nic ciekawego.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kim są ci lokatorzy?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Dwadzieścia rodzin z kamienicy. Zbieram od nich zaliczki na remont i trzymam ich dokumenty, żeby się nie zgubiły. Ironia, prawda?",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu paczka jedzie tramwajem, a nie pocztą?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo lokatorzy odbierają o różnych godzinach, a tramwaj to najtańszy goniec.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu tej paczki nie może odebrać nikt inny?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo to moje. Nie lubię, jak ktoś grzebie w rzeczach lokatorów.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Zależy ci na czasie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Najlepiej dziś. Nie lubię naciskać, ale lokatorzy lubią spać spokojnie.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Oczywiście, Iris Bell. I chciałabym zostawić drobną kopertę za fatygę, nie jako opłatę, tylko jako wyraz uznania. Sto dwadzieścia dolarów.",
          "mina": "neutralna",
          "ustawia": "d4_koperta_oferta"
        },
        {
          "tekst": "A jeśli paczka wyjdzie z wpisem w księdze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To wyjdzie. Poprzednik nie wpisywał i wszystkim było wygodnie. Poczekam. Tylko lokatorzy czekać nie lubią.",
          "mina": "neutralna"
        },
        {
          "tekst": "W kasetce widać brzeg paszportu z wyciętą stroną. Czyj to?",
          "ton": "niewygodne",
          "wymaga": "d4_blankiet_kasetka",
          "odpowiedz": "Takiego, kto w tym tygodniu jedzie. Jeśli paczka zostanie, nie pojedzie. Nowi zwykle odchodzą w pierwszym tygodniu.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "rejestr",
      "etykieta": "Wydaj paczkę i zapisz w księdze",
      "reakcja": "Dziękuję. Pełny wpis, jak widzę. Bardzo oficjalnie, ale dobrze.",
      "zysk": "Księga jest czysta, a paczka wychodzi do Iris z jej podpisem.",
      "strata": "Księgę czyta Victor, więc Iris i paczka 0412 są teraz na papierze. Iris ci tego nie zapomni.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Paczka dotarła. Dziękuję za pełny wpis. Poprzedni współpracownik nie był tak skrupulatny, może to i lepiej. Ja lubię wiedzieć, z kim pracuję. — I. Bell"
      }
    },
    {
      "akcja": "koperta",
      "etykieta": "Wydaj i przyjmij kopertę 120 $ (bez wpisu)",
      "kasa": 120,
      "reakcja": "Miło. Rozumiemy się bez zbędnych słów.",
      "zysk": "Dostajesz 120 dolarów, prawie tygodniowy czynsz.",
      "strata": "Paczka wychodzi bez wpisu, jak za poprzednika, a ty zaczynasz być w układzie Iris.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Dziękuję za dyskrecję. W przyszłym tygodniu przyniosę jeszcze jedną paczuszkę. Będzie bardzo drobna. — I. Bell"
      },
      "wymaga": "d4_koperta_oferta"
    },
    {
      "akcja": "odmow_zglos",
      "etykieta": "Odmów i zgłoś paczkę do kontroli",
      "reakcja": "Rozumiem. Przepisy to przepisy. Proszę tylko zapisać, że miałam dobre intencje. Rano zajmą się mną inni, mniej cierpliwi. To nie groźba, tylko prognoza pogody.",
      "zysk": "Paczka leży w depozycie. Nikt jej nie dostaje i nikt nie zarzuci ci układu.",
      "strata": "Iris traci cierpliwość, a ktoś, kto miał jutro jechać, może nie pojechać.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Rano zgłosiło się do mnie dwóch lokatorów, pytali, gdzie są ich dokumenty. Powiedziałam, że biuro zatrzymało je z powodu procedury. Nie byli zadowoleni.”"
      }
    }
  ],
  "rola": "zarządczyni z kopertą za fatygę",
  "watki": [
    "Skrytka",
    "kamienica",
    "pieniądze"
  ],
  "tik": "„drobna przysługa” zamiast groźby",
  "potrzeba": "paczka w płótnie z kasetką",
  "slad": "120 $ w szufladzie albo zwrot"
}
```

## DZIEŃ 5

**Mini-karta: Noah Reyes, 42, policjant.** Mówi spokojnie, powtarza po swojemu („Czyli: …”), prosi o potwierdzenie jednego szczegółu, a gdy coś pomija, mówi: „To moje zmartwienie.” Chce: swój notes z zeznaniem Evana. Ukrywa: ma wątpliwości co do Evana. Wizyta krótka.

```json
{
  "id": "d5_noah",
  "dzien": 5,
  "postac": "Noah Reyes, 42",
  "glos": "Spokojnie, powtarza po swojemu: „Czyli: …”. Kiedy coś pomija, mówi: „To moje zmartwienie.”",
  "typ": "uczciwy, pomija zamiast kłamać",
  "rzecz": "Czarny służbowy notes na spirali, wgnieciony z lewej strony",
  "wnetrze": [
    {
      "sekret_id": "d5_notes_ulotki",
      "co_widac": "W notesie notatka: „E.D. zamówił ulotki z twarzą żony w czwartek o 22:15. Zgłoszenie zaginięcia złożył o 23:30.”",
      "co_z_tego_wynika": "Evan zamówił ulotki wcześniej, niż zgłosił zaginięcie. Wiedział, że żona odeszła."
    }
  ],
  "wejscie": "Noah Reyes, komisariat przy Rynku. Zgubiłem służbowy notes, czarny, na spirali, w jedenastce. Mam w nim zeznanie Evana Doyle'a w sprawie jego żony Mai i potrzebuję go na dziś.",
  "wejscie_jesli": {
    "d3_maz_i_siostra:wydaj_evan": "Noah Reyes, komisariat. Zgubiłem służbowy notes, czarny, na spirali, w jedenastce. Są w nim zeznania Doyle'a. Wiem, że telefon jego żony wydano jemu, więc muszę wiedzieć, co z nim zrobił.",
    "d3_maz_i_siostra:wez_100_evan": "Noah Reyes, komisariat. Zgubiłem służbowy notes, czarny, na spirali, w jedenastce. Są w nim zeznania Doyle'a. Wiem, że telefon jego żony wydano jemu, więc muszę wiedzieć, co z nim zrobił.",
    "d3_maz_i_siostra:wydaj_lena": "Noah Reyes, komisariat. Zgubiłem służbowy notes, czarny, na spirali, w jedenastce. Telefon Mai Doyle wydano jej siostrze, nie mężowi. Doyle jest wściekły i dzwoni do mnie co godzinę.",
    "d3_maz_i_siostra:zatrzymaj": "Noah Reyes, komisariat. Zgubiłem służbowy notes, czarny, na spirali, w jedenastce. Telefon Mai Doyle został u was. Doyle dzwoni do mnie co godzinę, a ja nie wiem, co mu odpowiadać."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten notes?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czarny, na spirali, wgnieciony z lewej strony. Zawsze kładę go równo z krawędzią blatu.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie go zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, po dyżurze, na siedzeniu obok. Rozmawiałem z kierowcą i wysiadłem bez niego.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co jest w tym notesie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Notatki ze służby. Nic, co wolno komuś pokazywać.",
          "mina": "neutralna"
        },
        {
          "tekst": "W notesie jest zapis: ulotki Evana, czwartek 22:15. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": "d5_notes_ulotki",
          "odpowiedz": "Że Doyle zamówił ulotki z twarzą żony godzinę i kwadrans przed zgłoszeniem. Zgłosił o 23:30. Może zbieg okoliczności, nie chcę tego rozstrzygać przy okienku. To moje zmartwienie.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jak idzie sprawa Mai Doyle?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Powoli. Mąż zgłosił zaginięcie w czwartek, siostra twierdzi, że nic nie wie. Za mało, żeby ruszyć z miejsca.",
          "mina": "mowi"
        },
        {
          "tekst": "Do kiedy sprawa jest otwarta?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Do wtorku, siódmego września, do szóstej rano. Potem sprawa idzie do wydziału, a tam nikt nie pyta zaginionej o zgodę.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu Evan tak naciska na telefon?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Mówi, że z troski o żonę. Ja się pytam, po co mu telefon, skoro żona i tak wróci.",
          "mina": "neutralna"
        },
        {
          "tekst": "Evan dostał telefon. Co z nim zrobił?",
          "ton": "niewygodne",
          "wymaga": "d3_maz_i_siostra:wydaj_evan|d3_maz_i_siostra:wez_100_evan",
          "odpowiedz": "Przyniósł mi go rano. Zablokowany kodem, którego jakoby nie zna. Mówi, że żona nigdy nie miała kodu. To mi nie pasuje.",
          "mina": "neutralna"
        },
        {
          "tekst": "Telefon dostała Lena. Co na to Evan?",
          "ton": "niewygodne",
          "wymaga": "d3_maz_i_siostra:wydaj_lena",
          "odpowiedz": "Dzwoni co godzinę, że siostra coś ukrywa. Lena twierdzi, że telefon jest u niej bezpieczny. Obie wersje chcę sprawdzić.",
          "mina": "neutralna"
        },
        {
          "tekst": "Telefon został w biurze. Co na to Evan?",
          "ton": "niewygodne",
          "wymaga": "d3_maz_i_siostra:zatrzymaj",
          "odpowiedz": "Dzwoni co godzinę, a wie, że telefon leży u was. Mówię mu, że to sprawa policji, a nie jego.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Można jakoś pomóc w tej sprawie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jak coś będzie nietypowe, zapisz godzinę i powiedz mi. Najlepiej zanim zapyta ktoś inny.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Reyes, przez „y”. Proszę.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu sam jeździsz nocnym tramwajem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wracam z dyżuru, mieszkam na końcu jedenastki. Czasem po drodze trafia się sprawa.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Czyli: notes wraca. Jak będę potrzebował kogoś, kto zapisuje godziny, będę wiedział, gdzie szukać.",
      "zysk": "Noah ma notes i wie, że biuro oddaje to, co należy.",
      "strata": "Noah dopytuje o telefon i będzie wracał z pytaniami o Maję.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Notes odebrany, dziękuję. Gdyby ktoś jeszcze pytał o telefon Mai, zapisz godzinę i daj mi znać.”"
      }
    },
    {
      "akcja": "zadzwon",
      "etykieta": "Zadzwoń na komisariat, żeby potwierdzili",
      "reakcja": "Dzwoń. Numer dwanaście. Dyżurny potwierdzi, że notes jest mój.",
      "zysk": "Masz potwierdzenie z komisariatu, że to notes Noaha.",
      "strata": "Noah wie, że sprawdzasz nawet policję, i nie lubi czekać.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Dyżurny z komisariatu potwierdził: notes N. Reyesa. Dziękujemy za czujność. Następnym razem wystarczy minuta. — Komisariat przy Rynku"
      }
    }
  ],
  "rola": "policjant po notes z zeznaniem",
  "watki": [
    "Zaginiona"
  ],
  "tik": "mówi „Czyli:” i pomija",
  "potrzeba": "notes z zeznaniem Evana",
  "slad": "wątpliwości co do Evana zostają niewypowiedziane"
}
```

**Mini-karta: Victor Crane, 51, inspektor przewozów.** Krótkie pytania, zero rozmów o pogodzie, zawsze: „Kto może to podpisać?” i pokwitowanie w dwóch egzemplarzach. Chce: teczkę kontroli, żeby rozliczyć tydzień z księgą wydań. Ukrywa: dopisał pozycje do wykazu innym tuszem, na słowo Sama.

```json
{
  "id": "d5_victor",
  "dzien": 5,
  "postac": "Victor Crane, 51",
  "glos": "Krótkie pytania, zero rozmów o pogodzie. Zawsze: „Kto może to podpisać?” Pokwitowanie w dwóch egzemplarzach.",
  "typ": "kontroler jawny",
  "rzecz": "Szara teczka kontroli zapinana na klamrę",
  "wnetrze": [
    {
      "sekret_id": "d5_wykaz_dopisany",
      "co_widac": "W teczce wykaz wydań z poprzedniej zmiany. Pozycje „prawa rękawiczka T. Ward” i „paczka bez wpisu” dopisano innym tuszem. Obok parafa V.C.",
      "co_z_tego_wynika": "Victor dopisał obie pozycje sam, po fakcie. Wie o wydaniach poprzednika od dawna."
    }
  ],
  "wejscie": "Victor Crane, inspekcja przewozów. Zgubiłem teczkę kontroli, szarą, na klamrę, w szóstce. O siódmej rano rozliczam tydzień z księgą wydań. Czy ktoś ją tu oddał?",
  "wejscie_jesli": {
    "d4_iris:koperta": "Victor Crane, inspekcja przewozów. Zgubiłem teczkę kontroli, szarą, na klamrę, w szóstce. O siódmej rozliczam tydzień z księgą wydań, a w tym tygodniu brakuje w niej jednej paczki. Czy ktoś oddał teczkę?",
    "d4_iris:odmow_zglos": "Victor Crane, inspekcja przewozów. Zgubiłem teczkę kontroli, szarą, na klamrę, w szóstce. Rozliczam tydzień z księgą wydań, a u was w depozycie leży paczka, którą chcę zobaczyć. Czy ktoś oddał teczkę?"
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ta teczka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Szary skaj, klamra z przodu, naklejka inspekcji na rogu. W środku formularze i pieczątka.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie ją zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W szóstce, o 4:10, na siedzeniu obok. Wysiadłem przy zajezdni bez niej. To mi się nie zdarza.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu inspektor sam jeździ nocnym tramwajem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo w nocy grafik sobie, a tramwaje sobie. A skoro już pytasz: kto cię tu skierował? W aktach nie widzę skierowania.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co kontrolujesz w tym biurze?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czy księga wydań zgadza się z magazynem i z kwitami. Wpis, kwit, podpis. Czasem brakuje któregoś.",
          "mina": "mowi"
        },
        {
          "tekst": "Po czym poznasz, że teczka jest twoja?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na klapie są inicjały V.C. i pieczątka inspekcji, numer czterdzieści siedem.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy ostatnie wydania w tym biurze były poprawne?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wszystkie. Jedna paczka bez wpisu i jedna rękawiczka bez księgi. Dlatego potrzebuję teczki.",
          "mina": "neutralna"
        },
        {
          "tekst": "W teczce jest wykaz z dopisanymi pozycjami i parafą V.C. Kto je dopisał?",
          "ton": "niewygodne",
          "wymaga": "d5_wykaz_dopisany",
          "odpowiedz": "Ja. Pięć tygodni temu dopisałem to ręką, z pamięci po rozmowie z poprzednikiem. Nie mam na to dowodu. To niezgodne z regulaminem, więc proszę tego nie powtarzać.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co będzie, jeśli teczki nie będzie rano?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Audyt przesunie się o tydzień. W tym czasie ktoś zdąży poprawić księgę, a tego nie chcę.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Victor Crane. Dwa egzemplarze pokwitowania, jeden zostaje w księdze. Zawsze.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy ktoś spoza inspekcji może widzieć zawartość teczki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie. Jeśli ktoś zajrzał, chcę znać nazwisko.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wykaz_paczke",
      "etykieta": "Wydaj teczkę i wykaż paczkę 0412",
      "reakcja": "Dziękuję. Dwa egzemplarze pokwitowania. Wpis: paczka 0412 w depozycie biura, dla właściciela.",
      "zysk": "Księga i magazyn się zgadzają, audyt idzie bez opóźnień.",
      "strata": "Paczka ma numer i będzie miała właściciela. Ktoś po nią przyjdzie, a Iris dowie się, kto ją wystawił.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Paczka 0412 zapisana, protokół w dwóch egzemplarzach. Do piątku proszę o dokumenty z poprzednich zmian. — V. Crane"
      },
      "wymaga": "d4_iris:odmow_zglos"
    },
    {
      "akcja": "potwierdz_wpis",
      "etykieta": "Wydaj teczkę i potwierdź wpis o paczce 0412 z dnia 4",
      "wymaga": "d4_iris:rejestr",
      "reakcja": "Wpis jest. Paczka 0412 wydana Iris Bell, z podpisem. Dwa egzemplarze.",
      "zysk": "Księga się zgadza i Victor zamyka tydzień bez pytań.",
      "strata": "Victor widzi, że paczka z kasetką poszła do Iris, i zacznie dopytywać, co w niej było.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Wpis o paczce 0412 zgodny z księgą. Do piątku proszę o dokumenty z poprzednich zmian. — V. Crane"
      }
    },
    {
      "akcja": "spis_bez_paczki",
      "etykieta": "Wydaj teczkę, potwierdź spis bez paczki",
      "reakcja": "Spis zgodny. Dwa egzemplarze. Dziwne, że tydzień zgadza się co do sztuki.",
      "zysk": "Dziś spokój: Victor zamyka tydzień, a Iris i jej klient nie są wystawieni.",
      "strata": "W spisie brakuje paczki, a Victor zostaje z podejrzeniem, że coś przechodzi obok księgi.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Spis przyjęty. Tydzień zgodny co do sztuki, co mnie niepokoi. Wrócę do tej księgi. — V. Crane"
      }
    }
  ],
  "rola": "inspektor, który rozlicza księgę",
  "watki": [
    "Urząd"
  ],
  "tik": "pyta „Kto to podpisze?”",
  "potrzeba": "teczka kontroli do rozliczenia",
  "slad": "dopisy innym tuszem wskazują na Sama"
}
```

**Mini-karta: Gus Pell, 55, mężczyzna w szlafroku.** Mówi cicho, rozgląda się, zaczyna zdania od „tylko”. Chce: portfel, bo w nim ma dwa dowody (Pell i Ferro) i pieniądze na wyjazd. Ukrywa: o 5:40 rano jedzie linią 11 i znika; jego paczka to ta z dnia 4, numer 0412. Kłamie: „Prawo jazdy, dwadzieścia dolarów i zdjęcie córki.”

```json
{
  "id": "d5_gus",
  "dzien": 5,
  "postac": "Gus Pell, 55",
  "glos": "Cicho, grzecznie ze strachu, rozgląda się. Zaczyna zdania od „tylko”.",
  "typ": "uczciwy-wstydliwy i łapówka",
  "rzecz": "Brązowy, wytarty portfel na zatrzask",
  "wnetrze": [
    {
      "sekret_id": "d5_dwa_dowody",
      "co_widac": "W portfelu są dwa dowody osobiste: Gustaw Pell i August Ferro, z tym samym zdjęciem. Do tego zdjęcie dziewczynki i bilet w jedną stronę na dziś, 5:40.",
      "co_z_tego_wynika": "Gus ma dwie tożsamości i wyjeżdża o świcie. Wygląda na to, że ktoś mu to załatwił."
    },
    {
      "sekret_id": "d5_gotowka_400",
      "co_widac": "Za zdjęciem dziewczynki, w przegródce, zwinięte banknoty: dwie stówki i pięćdziesiątka.",
      "co_z_tego_wynika": "Gus ma 250 dolarów na wyjazd. To wszystko, co ma. Mówił o dwudziestu."
    }
  ],
  "wejscie": "Dobry wieczór. Wiem, jak wyglądam: szlafrok pod płaszczem, bo wyszedłem z domu w pośpiechu. Zgubiłem portfel w jedenastce, brązowy, wytarty. O 5:40 jadę stąd jedenastką i bez portfela nie wsiądę.",
  "wejscie_jesli": {
    "d5_victor:wykaz_paczke": "Dobry wieczór. Gus Pell. Ludzie gadają, że u was leży paczka z numerem 0412, ale ja przyszedłem tylko po portfel, brązowy, wytarty, z jedenastki. O 5:40 jadę stąd i bez niego nie ruszę."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten portfel?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Brązowy, wytarty, na zatrzask. Mam go od jedenastu lat, wygiął się na moją kieszeń.",
          "mina": "mowi"
        },
        {
          "tekst": "Co w nim jest?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Prawo jazdy, dwadzieścia dolarów i zdjęcie córki. Nic więcej, tylko tyle.",
          "mina": "klamie"
        },
        {
          "tekst": "Czemu o pierwszej w nocy jesteś w szlafroku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo pokłóciłem się w domu i wyszedłem bez myślenia. Z żoną, z teściową, z obiema. O rodzinie nie rozmawiajmy.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jak się nazywasz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Gustaw Pell. Gus. Tylko proszę nie zapisywać, że byłem w szlafroku.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie mieszkasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mill Street dwanaście. Zaraz, nie, piętnaście. Dwanaście to brat, ale on się wyprowadził.",
          "mina": "klamie"
        },
        {
          "tekst": "Czemu nie zadzwonisz do domu, że nic ci nie jest?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo telefon jest tam, gdzie żona. Nie dzwonię. Tak będzie lepiej dla wszystkich.",
          "mina": "neutralna"
        },
        {
          "tekst": "W portfelu są dwa dowody: Pell i Ferro. Który jest twój?",
          "ton": "niewygodne",
          "wymaga": "d5_dwa_dowody",
          "odpowiedz": "Dwa? To się da wytłumaczyć. Jeden po dziadku. Który mój, nie powiem, bo to się źle kończy.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Dokąd jedziesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jedenastką, o 5:40. Dalej nie powiem. Daleko. Tylko proszę nie pytać gdzie.",
          "mina": "emocja"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Podpiszę. G. Samo G, wystarczy? Tylko żeby nie było pytań o resztę.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co będzie, jeśli portfel zostanie w biurze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To utknę tutaj, a tu mnie znajdą. Poprzednim razem urzędnik wydał mnie z pieczątką. Z dwiema.",
          "mina": "emocja"
        },
        {
          "tekst": "Za zdjęciem leży dwieście pięćdziesiąt. Mówiłeś o dwudziestu.",
          "ton": "niewygodne",
          "wymaga": "d5_gotowka_400",
          "odpowiedz": "Bo to nie pieniądze na życie, tylko na wyjazd. Wszystko, co mam. Nie mów nikomu.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Zapomnijmy, że byłem w szlafroku.",
      "zysk": "Gus wychodzi z portfelem i dwoma dowodami, o 5:40 wsiada do jedenastki.",
      "strata": "Nie wiesz, który dowód jest prawdziwy, a w księdze zostaje tylko wpis „Pell”.",
      "echo": {
        "za_dni": 4,
        "forma": "list",
        "tekst": "Pocztówka z miasta, którego nazwy nie znam: „Dziękuję za portfel. Pell już nie istnieje. — G.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Rozumiem. Wrócę z kimś, kto za mnie poręczy. Tylko proszę nie dzwonić nigdzie.",
      "zysk": "Portfel zostaje w biurze razem z dwoma dowodami.",
      "strata": "Gus nie wsiądzie do jedenastki i wraca do domu w szlafroku, a jego sprawa jest otwarta.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Do biura zadzwoniła żona Gusa Pella: mąż zniknął, zostawił tylko klucze i trzy dolary. Pyta, czy ktoś go widział. Zapisano: brak informacji."
      }
    },
    {
      "akcja": "zadzwon",
      "etykieta": "Zadzwoń po dyżurnego policjanta",
      "reakcja": "Proszę, bez policji. To nie jest sprawa dla policji.",
      "zysk": "Dyżurny przyjmie zgłoszenie, a oba dowody trafią do protokołu.",
      "strata": "Gus ucieknie, zanim ktoś przyjdzie, a w protokole zostanie pusta rubryka „właściciel”.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Z komisariatu: portfel z dwoma dowodami wpisano do ewidencji, właściciel się nie zgłosił. Dziękujemy za czujność. — N. Reyes"
      }
    },
    {
      "akcja": "wez_250_gus",
      "etykieta": "Wydaj portfel, ale zatrzymaj 250 $ z przegródki",
      "kasa": 250,
      "reakcja": "Dziękuję. Zaraz… nie, nic. Do widzenia.",
      "zysk": "Dostajesz 250 dolarów, prawie raty dla Kuby na cztery tygodnie, a Gus nie ma jak się z tobą kłócić.",
      "strata": "Gus jedzie bez grosza, z dwoma dowodami, a jeśli ktoś go zatrzyma po drodze, powie, że okradło go okienko.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Z komisariatu: mężczyzna zatrzymany na dworcu, posługuje się dokumentem „Ferro”, twierdzi, że z jego portfela zniknęło 250 dolarów. Prosimy o wyjaśnienie. — N. Reyes"
      },
      "wymaga": "d5_gotowka_400"
    }
  ],
  "rola": "mężczyzna w szlafroku z dwoma dowodami",
  "watki": [
    "Skrytka",
    "pieniądze"
  ],
  "tik": "zaczyna zdania od „tylko”",
  "potrzeba": "portfel przed odjazdem o 5:40",
  "slad": "żeton 0412 i gotówka za zdjęciem"
}
```

## DZIEŃ 6

**Mini-karta: Ada Vale, 10, córka Rosy.** Żółta peleryna. Mówi dosłownie, liczy kroki i kamienie, a kiedy się boi, szepcze. Chce: kwit, że dobrze zrobiła, bo znalazła królika przy pętli. Ukrywa: widziała puszkę z ruchomym dnem u Iris w kuchni i nie chce, żeby ktoś jej zabronił gadać. Tik: „trzy kroki od słupka”, liczenie rzeczy. Humor: królik z dziurką w nosie.

```json
{
  "id": "d6_ada",
  "dzien": 6,
  "postac": "Ada Vale, 10",
  "glos": "Dosłownie, jak dziecko. Liczy kroki i kamienie. Kiedy się boi, mówi szeptem.",
  "typ": "uczciwa, wie za dużo",
  "rzecz": "Szary pluszowy królik z uchem doszytym czerwoną nitką",
  "wnetrze": [],
  "wejscie": "Dobry wieczór, jestem Ada, mam dziesięć lat. Znalazłam królika przy pętli szóstki, trzy kroki od słupka. Chcę kwit, że zrobiłam to dobrze, bo mama mówi, że bez kwitu nie wiadomo.",
  "wejscie_jesli": {
    "d1_rosa:wydaj": "Dobry wieczór, jestem Ada, córka Rosy z pralni. Mama mówi, że dostała od was całą wypłatę. Znalazłam królika przy pętli szóstki, trzy kroki od słupka. Chcę kwit, że zrobiłam to dobrze.",
    "d1_rosa:odmow": "Dobry wieczór, jestem Ada, córka Rosy z pralni. Mama dostała mniej wypłaty, ale mówi, że to nie wasza wina. Znalazłam królika przy pętli szóstki, trzy kroki od słupka. Chcę kwit, że zrobiłam to dobrze.",
    "d1_rosa:wez_20": "Dobry wieczór, jestem Ada, córka Rosy z pralni. Mama płakała w kuchni, bo w kopercie brakowało pieniędzy. Nie wiem kto wziął. Znalazłam królika przy pętli szóstki. Chcę kwit, że zrobiłam to dobrze."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda królik?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Szary, z jednym uchem doszytym czerwoną nitką. Ma dziurkę w nosie, jakby ktoś go przeziębił.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie dokładnie go znalazłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na ławce przy pętli szóstki, trzy kroki od słupka. Siedział sam, jakby na kogoś czekał.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu sama jesteś w nocy na pętli?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo mama pracuje na nocnej zmianie, a ja się nudzę. Chodzę po pętli i liczę. Wczoraj były sto dwa kamienie.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Po co ci kwit?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Żeby wszyscy wiedzieli, że znalazłam, a nie wzięłam. Pani w szkole mówi, że to jest różnica.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie mieszkasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na Cooper Street dziewięć, na drugim piętrze. Nad nami mieszka nowy, w jego pokoju jest zimno. Pani Iris prosiła, żeby nie mówić adresu. No, powiedziałam.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu pani Iris każe milczeć o mieszkaniu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo pani Iris zabiera mieszkanie, jak ktoś gada. Mama tak mówi, jak myśli, że nie słyszę.",
          "mina": "emocja"
        },
        {
          "tekst": "Na odcinku w puszce jest numer z bloczka Iris. Znasz tę puszkę?",
          "ton": "niewygodne",
          "wymaga": "d6_puszka_odcinek",
          "odpowiedz": "Widziałam taką u pani Iris w kuchni, nad czajnikiem. Wszystkie puszki miały dno, które się rusza. Nikomu nie mów, że mówiłam.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz z królikiem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Oddam. Jak ktoś po niego przyjdzie, niech wie, że miał bezpiecznie.",
          "mina": "mowi"
        },
        {
          "tekst": "Co ma być na kwicie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Że Ada Vale, dziesięć lat, znalazła królika. Dużymi literami, bo pani w szkole czyta tylko duże.",
          "mina": "mowi"
        },
        {
          "tekst": "Co powie twoja mama?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Że nic nie wolno brać, ale trzeba oddawać. I że mam nie łazić w nocy po pętli. Ale łażę.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wpisz_w_biurze",
      "etykieta": "Wpisz Adę jako znalazczynię, dane zostają w biurze",
      "reakcja": "Mam kwit! Pokażę go pani w szkole. Napisali moje nazwisko dużymi literami.",
      "zysk": "Ada ma dowód, że zrobiła dobrze, i bardzo się cieszy.",
      "strata": "Biuro ma jej adres w księdze, a Iris jest administratorką tej kamienicy i do księgi zagląda.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Iris Bell: „Słyszałam, że moja mała lokatorka została wpisana w księdze jako znalazczyni. Jak miło z jej strony. Dobrze wiedzieć, kto u kogo bywa.”"
      }
    },
    {
      "akcja": "list_przewozowy",
      "etykieta": "Przekaż zgłoszenie razem z listem przewozowym",
      "reakcja": "A to znaczy, że jak ktoś po niego przyjdzie, to dowie się, że to ja? To chyba dobrze.",
      "zysk": "Królik idzie oficjalnym obiegiem, a Urząd dostaje papier z numerem.",
      "strata": "Dane Ady krążą po urzędach, a Iris jako administratorka kamienicy je zobaczy.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Rosa: „Dostałyśmy pismo z Urzędu z nazwiskiem Ady. Iris powiedziała, że to formalność, ale patrzyła na mnie jak na gołębia na parapecie. Za tydzień może być wypowiedzenie. — Rosa”"
      }
    },
    {
      "akcja": "wydaj_bez_wpisu",
      "etykieta": "Daj Adzie karteczkę „dobrze zrobiłaś”, bez wpisu",
      "reakcja": "O! Z podpisem! Pokażę mamie i pani w szkole. Dziękuję.",
      "zysk": "Ada ma kwit, a nikt nie zna jej adresu.",
      "strata": "Królik leży w biurze bez wpisu, a ty robisz to samo, co poprzednik z rękawiczką.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Ada Vale: „Pokazałam karteczkę pani w szkole. Powiedziała, że to nie jest oficjalny kwit, ale że jest ładnie napisany. Wzięła go do gabloty.”"
      }
    }
  ],
  "rola": "dziesięciolatka, która wie za dużo",
  "watki": [
    "kamienica",
    "Skrytka"
  ],
  "tik": "liczy kroki do słupka",
  "potrzeba": "kwit za znalezionego królika",
  "slad": "widziała puszkę z ruchomym dnem u Iris"
}
```

**Mini-karta: Leo Marsh, 46, konduktor szóstki.** Mówi godzinami i przystankami, żartuje z żony, patrzy na nadgarstek, choć zegarka tam nie ma. Chce: zegarek kieszonkowy z grawerem „za trzydzieści lat”. Ukrywa: ktoś wsunął mu pod ławkę puszkę bez nadawcy, a on dopisał ją do wykazu. Tik: „o 22:47”, patrzenie na pusty nadgarstek. Humor: żona i trzydzieści lat.

```json
{
  "id": "d6_leo",
  "dzien": 6,
  "postac": "Leo Marsh, 46",
  "glos": "Mówi godzinami i przystankami. Żartuje z żony. Patrzy na pusty nadgarstek.",
  "typ": "uczciwy, milczy o puszce",
  "rzecz": "Mosiężny zegarek kieszonkowy z łańcuszkiem",
  "wnetrze": [
    {
      "sekret_id": "d6_zegarek_list",
      "co_widac": "Pod wieczkiem zegarka wsunięta karteczka z wykazu zmiany. Dopisek długopisem: „+ puszka (b.n.)”.",
      "co_z_tego_wynika": "Leo przyjął puszkę bez nadawcy i dopisał ją do wykazu, żeby nie mieć kłopotów."
    }
  ],
  "wejscie": "Dobry wieczór. Leo Marsh, konduktor szóstki. Zgubiłem zegarek kieszonkowy, mosiężny, z łańcuszkiem. Bez niego kursów nie pilnuję. Dopiero na pętli sięgnąłem do kieszeni, a tam nic.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten zegarek?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Mosiądz, łańcuszek, na wieczku grawer „za trzydzieści lat”. Żona mówi, że za trzydzieści lat to ja nie będę wiedział, która godzina.",
          "mina": "mowi"
        },
        {
          "tekst": "Kiedy go zgubiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "O 22:47, na pętli. Wiem, bo spojrzałem, żeby sprawdzić godzinę, i odłożyłem na ławkę.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu nosisz zegarek, skoro masz telefon?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo telefon mi pada, a zegarek nigdy. To nie to samo. Poza tym zegarek nie dzwoni mi o drugiej w nocy.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co jeszcze masz w kieszeni?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Bilety kontrolne, długopis i kartka z wykazem zmiany. Nic ciekawego.",
          "mina": "mowi"
        },
        {
          "tekst": "Czyj był ten zegarek wcześniej?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dziadka mojej żony. Pracował w zajezdni, a zegarek przeżył trzech szefów. Solidny mosiądz, nie jakaś tandeta z bazaru.",
          "mina": "mowi"
        },
        {
          "tekst": "Co wiozłeś ostatnim kursem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Ludzi, dwie torby i walizkę. Normalny kurs, nic ponad to.",
          "mina": "neutralna"
        },
        {
          "tekst": "Pod wieczkiem jest dopisek „+ puszka (b.n.)”. Jaka puszka?",
          "ton": "niewygodne",
          "wymaga": "d6_zegarek_list",
          "odpowiedz": "Ktoś mi ją wsunął pod ławkę, bez nadawcy, więc dopisałem do wykazu, żeby nie było kłopotu. Nie pytam, kto ma to odebrać.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Ile masz jeszcze kursów dziś?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Dwa. Jak wrócę z zegarkiem, to oba na czas. Bez niego jeden na pewno spóźniony.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Leo Marsh. Podpisuję w biegu, wybacz.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy ktoś prosił cię, żebyś milczał?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie. Nikt nikogo o nic nie prosi. Po prostu wiem, że jak coś jedzie pod ławką, to lepiej nie pytać.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki. O 22:47 nie spojrzę już na pusty nadgarstek. Żona będzie zadowolona, jak jej powiem.",
      "zysk": "Leo odzyskuje zegarek i jedzie następne kursy punktualnie.",
      "strata": "Puszka bez nadawcy zostaje w jego wykazie bez wyjaśnienia.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Zegarek chodzi równo. Żona powiedziała, że przez trzy dni byłem człowiekiem bez czasu. Przepraszam, że tyle mówiłem o godzinach.”"
      }
    },
    {
      "akcja": "zatrzymaj",
      "etykieta": "Zatrzymaj zegarek do wyjaśnienia puszki",
      "reakcja": "Co? To nie fair. Dobrze, wrócę. Ale kursy poczekają na mnie, nie na odwrót.",
      "zysk": "Zegarek leży w biurze razem z karteczką o puszce, więc Leo wróci i będzie musiał odpowiedzieć.",
      "strata": "Leo jedzie bez zegarka i może spóźnić dwa kursy.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Spóźniłem się o cztery minuty na ostatnim kursie. Szef zapisał. Nie mam żalu do zegarka, ale do czasu mam.”"
      }
    },
    {
      "akcja": "wpisz_puszke",
      "etykieta": "Wydaj zegarek i dopisz puszkę do księgi",
      "reakcja": "Dopisujesz? No... jak trzeba, to trzeba. Tylko niech nikt nie myśli, że wiem, od kogo.",
      "zysk": "Puszka ma ślad w księdze: kiedyś ktoś może ją odnaleźć i powiązać z blankietem z dnia 4.",
      "strata": "Leo jest wystawiony: w księdze widać, że przyjął puszkę bez nadawcy.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Ktoś pytał, skąd puszka w wykazie. Powiedziałem, że z księgi biura. Zrobiło się cicho. Może tak ma być.”"
      },
      "wymaga": "d6_zegarek_list"
    }
  ],
  "rola": "konduktor zagubiony bez zegarka",
  "watki": [
    "Skrytka"
  ],
  "tik": "patrzy na pusty nadgarstek",
  "potrzeba": "zegarek z grawerem na kursy",
  "slad": "dopisek „puszka” zmienia cały rejestr kursu"
}
```

## DZIEŃ 7

**Mini-karta: Kit Navarro, 17, praktykant w kopiarni.** Sarkastyczny, krótkie zdania, slang bez przesady, „serio”. Chce: słuchawki z naklejką kota w kasku. Boi się, że szef się dowie, że ma je w pracy. Wie: w czwartek o 22:15 facet w szarym płaszczu zamówił ulotki z twarzą kobiety. Tik: „serio”. Humor: kot w kasku.

```json
{
  "id": "d7_kit",
  "dzien": 7,
  "postac": "Kit Navarro, 17",
  "glos": "Krótko, sarkastycznie, „serio”. Slang, ale bez przesady.",
  "typ": "uczciwy, boi się wylecieć",
  "rzecz": "Czarne słuchawki nauszne z naklejką kota w kasku",
  "wnetrze": [],
  "wejscie": "Cześć, Kit. Zgubiłem słuchawki w czwórce, takie nauszne, z kotem w kasku na muszli. Pracuję w kopiarni na Rynku i jak szef się dowie, że słuchałem muzyki przy ksero, to po mnie. Serio.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wyglądają te słuchawki?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czarne, nauszne, taśma na lewej muszli. Naklejka z kotem w kasku, bo kot jedzie na rowerze. Serio, kupiłem ją za dolara.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie je zostawiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, na siedzeniu przy oknie, jak wracałem z roboty. Usnąłem na pół minuty i wysiadłem bez nich.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu szef nie lubi słuchawek w pracy?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo mówi, że ksero ma być słychać, a ja mam słyszeć klientów. Ja słyszę, tylko że z muzyką mniej boli.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Ile masz lat?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Siedemnaście. Praktyki, za zgodą rodziców. Tylko że w nocy to się nie powinno, więc nikomu nie mówię.",
          "mina": "mowi"
        },
        {
          "tekst": "Co robisz w kopiarni po nocach?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ksero, laminowanie, bindowanie. Ulotki, plakaty, dyplomy. W nocy przychodzą tacy, co nie chcą, żeby ich ktoś widział.",
          "mina": "mowi"
        },
        {
          "tekst": "Pamiętasz jakieś zamówienie z zeszłego tygodnia?",
          "ton": "niewygodne",
          "wymaga": null,
          "ustawia": "d7_kit_ulotki",
          "odpowiedz": "W czwartek o 22:15 facet w szarym płaszczu zamówił ulotki z twarzą kobiety, tysiąc sztuk. Zapłacił gotówką. Powiedział, że to dla żony. Serio, dziwnie się uśmiechał.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co się stanie, jak szef się dowie o słuchawkach?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zdejmie mi dziesięć dolarów z wypłaty i da pogadankę. Pogadankę przeżyję, dziesięć dolarów mniej już trudniej.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kit Navarro, przez K i V na końcu. Zawsze wszyscy piszą Navaro.",
          "mina": "neutralna"
        },
        {
          "tekst": "Dlaczego powiedziałeś mi o ulotkach?",
          "ton": "niewygodne",
          "wymaga": "d7_kit_ulotki",
          "odpowiedz": "Bo patrzysz tak, jakby cię to naprawdę obchodziło. Nikt tak nie robi. A poza tym ten facet był dziwny i chciałem to komuś powiedzieć.",
          "mina": "emocja"
        },
        {
          "tekst": "Wysyłacie komuś kopie tych zamówień?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie. Wszystko zostaje u nas, w segregatorze. Szef lubi segregatory bardziej niż ludzi.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki, serio. Kot jedzie dalej. A tamten facet... jak coś będę widział, to wam powiem.",
      "zysk": "Kit odzyskuje słuchawki i zostaje po twojej stronie.",
      "strata": "To, co powiedział o ulotkach, nie zostaje nigdzie zapisane.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Kit Navarro: „Słuchawki grają. Szef nie zauważył. Ten w szarym płaszczu wrócił i zamówił kolejne tysiąc. Serio, zamówił. Powiedziałem mu, że maszyna się zepsuła.”"
      }
    },
    {
      "akcja": "wydaj_i_zapisz",
      "etykieta": "Wydaj i zapisz jego zeznanie o ulotkach",
      "reakcja": "Zapisujesz? Serio? Okej, ale jak szef zobaczy moje nazwisko w księdze, to po mnie.",
      "zysk": "Zeznanie Kita o ulotkach jest w księdze: policjant może je potem sprawdzić.",
      "strata": "Kit zostaje świadkiem z nazwiskiem w księdze i może stracić pracę, jak szef się dowie.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Noah Reyes: „W księdze jest zeznanie praktykanta z kopiarni o ulotkach. Czyli: godzina 22:15 się potwierdza. Dziękuję, że to ktoś zapisał.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Co? Ale to moje! Serio. Dobra, przyniosę paragon, tylko że paragonu nie mam.",
      "zysk": "Słuchawki zostają w biurze do czasu dowodu, że są Kita.",
      "strata": "Kit wraca do roboty bez muzyki i prawdopodobnie bez chęci mówienia o czymkolwiek.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Kit Navarro: „Dziś w kopiarni było cicho. Ksero słychać, a muzyki nie. Serio, nie lubię tej ciszy.”"
      }
    }
  ],
  "rola": "praktykant, który boi się wylecieć",
  "watki": [
    "Zaginiona",
    "humor"
  ],
  "tik": "mówi „serio”",
  "potrzeba": "słuchawki z kotem w kasku",
  "slad": "widział zamówienie ulotek w czwartek 22:15"
}
```

**Mini-karta: Evan Doyle, drugi raz.** Grzeczny, pełnymi zdaniami, wraca do tego samego pytania: „którą linią?”. Poprawia mankiet, dziś mankiet jest bardziej wygnieciony. Chce: klucze Mai i wiedzieć, którą linią przyjechały, żeby ją śledzić. Ukrywa: zamówił ulotki wcześniej niż zgłosił zaginięcie. Kłamie: „Zgłosiłem o 23:30, jak tylko zrozumiałem.”

```json
{
  "id": "d7_evan",
  "dzien": 7,
  "postac": "Evan Doyle, 37",
  "glos": "Grzecznie, pełnymi zdaniami, wraca do tego samego pytania. Poprawia mankiet, dziś wygnieciony do połowy.",
  "typ": "kłamca, zna godziny, o które nikt nie pytał",
  "rzecz": "Brązowe skórzane etui na klucze z zatrzaskiem",
  "wnetrze": [
    {
      "sekret_id": "d7_etui_klucze",
      "co_widac": "W etui kartonik z inicjałami M.D. i dwa klucze: zwykły oraz mały, z wybitym numerem 14 na główce.",
      "co_z_tego_wynika": "Maya miała drugi klucz, do miejsca, o którym Evan nie wie. Zostawiła klucze celowo."
    }
  ],
  "wejscie": "Dobry wieczór. Evan Doyle, znowu. Zgubiły się klucze mojej żony, brązowe etui, zatrzask. Powiesz mi, którym tramwajem przyjechały? I chcę wiedzieć, gdzie je zostawiła.",
  "wejscie_jesli": {
    "d3_maz_i_siostra:wez_100_evan": "Dobry wieczór. Evan Doyle. Znamy się już, więc krótko: klucze mojej żony, brązowe etui. Powiesz mi, którym tramwajem przyjechały? Dogadaliśmy się już raz, więc chyba nie ma problemu.",
    "d3_maz_i_siostra:wydaj_lena": "Dobry wieczór. Evan Doyle. Telefon żony wydaliście jej siostrze i do tej pory go nie widziałem. Poproszę więc o klucze, brązowe etui. Którą linią przyjechały?"
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda to etui?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Brązowa skóra, zatrzask. W środku kartonik z inicjałami M.D. i znakiem nieskończoności. To jej.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie i kiedy zostało?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce albo w jedenastce, nie wiem. Powiesz mi, którym tramwajem przyjechało?",
          "mina": "neutralna"
        },
        {
          "tekst": "Ile kluczy tam jest?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jeden. Do naszego mieszkania.",
          "mina": "klamie"
        },
        {
          "tekst": "W etui są dwa klucze, a ty mówisz o jednym.",
          "ton": "niewygodne",
          "wymaga": "d7_etui_klucze",
          "odpowiedz": "Drugiego nie znam. Maya miała swoje sprawy. Powiesz mi, do czego on jest?",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Od kiedy szukasz żony?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Od czwartku wieczorem. Zgłosiłem to jeszcze tej samej nocy, jak tylko zrozumiałem, że nie wraca.",
          "mina": "klamie"
        },
        {
          "tekst": "Po co ci ta linia?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo wtedy będę wiedział, gdzie ona wsiada. Stanę na pętli i poczekam. Chcę tylko porozmawiać.",
          "mina": "mowi"
        },
        {
          "tekst": "Ulotki z jej twarzą zamówiłeś o 22:15. Godzinę przed zgłoszeniem.",
          "ton": "niewygodne",
          "wymaga": "d7_kit_ulotki|d5_notes_ulotki",
          "odpowiedz": "To... na wszelki wypadek. Zamówiłem je wcześniej, bo przeczuwałem. Czy to coś zmienia? Czy ktoś mi to zapisze?",
          "mina": "emocja"
        },
        {
          "tekst": "Czy wcześniej usłyszałeś od Mai, że odchodzi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie. Przecież by mi powiedziała.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz, jak ją znajdziesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zabiorę ją do domu i zrobię jej herbatę. U nas w firmie każdy ma nazwisko na karcie, a tu pusto. Przepraszam, nieistotne.",
          "mina": "mowi"
        },
        {
          "tekst": "Co powiedziała policja, kiedy zgłosiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Że dorosła osoba może wyjść z domu. Więc przychodzę tu.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czego Maya się boi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Niczego. Ma wszystko, co trzeba. Dom, męża, spokój. Nie rozumiem pytania.",
          "mina": "klamie"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "powiedz_linie",
      "etykieta": "Powiedz, którą linią przyjechały klucze",
      "reakcja": "Czwórka. Dziękuję. Stanę na pętli i poczekam. Chcę tylko porozmawiać, naprawdę.",
      "zysk": "Evan dostaje, o co prosi, i przestaje naciskać na biuro.",
      "strata": "Evan zacznie stać na pętli czwórki, a Maya straci tam spokój.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Na pętli czwórki stoi od wczoraj facet w płaszczu z termosem. Nie wsiada, tylko patrzy na każdego, kto wysiada. Ludzie schodzą mu z drogi.”"
      }
    },
    {
      "akcja": "zatrzymaj_list",
      "etykieta": "Zatrzymaj etui, zaproponuj zapieczętowany list",
      "reakcja": "List? Dla niej? Dobrze, ale przecież ona go nie dostanie, prawda? Obiecasz mi to?",
      "zysk": "Zyskujesz czas: etui zostaje w biurze, a Evan może napisać do żony.",
      "strata": "Obiecujesz coś, czego nie możesz zagwarantować, bo Maya może nie przyjść.",
      "echo": {
        "za_dni": 4,
        "forma": "list",
        "tekst": "Evan Doyle: „Napisałem list i zostawiłem go przy okienku. Mam nadzieję, że ktoś go przekaże. Nie mam innego sposobu. — E.D.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Czyli nic. Rozumiem. Wrócę jutro, a pojutrze znów. Proszę zapisać, że pytałem.",
      "zysk": "Etui zostaje w biurze, a Evan nic nie wie o linii.",
      "strata": "Evan zostaje z niczym i wraca ostrzejszy.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Evan Doyle: „Wróciłem, jak obiecałem. Nikt mi nie chciał powiedzieć, gdzie są klucze. Czyli mężowi się odmawia. Dobrze wiedzieć. Zapisałem godzinę.”"
      }
    }
  ],
  "rola": "mąż kłamca, który zna godziny",
  "watki": [
    "Zaginiona"
  ],
  "tik": "poprawia wygnieciony mankiet",
  "potrzeba": "klucze Mai i jej linia",
  "slad": "ulotki zamówił, zanim zgłosił zaginięcie żony"
}
```

## DZIEŃ 8 (burza)

**Mini-karta: Lena Brandt i Nora Vance.** Lena mówi szybko, urywa zdania („ale…”), mówi za dużo. Nora liczy na palcach: „Po kolei: rzecz, osoba, skutek.” Obie chcą tej samej torby narzędziowej: Lena rozpoznaje torbę siostry i chce ją całą. Nora chce kopii pokwitowania z podszewki, bo to dowód wpłaty rodziny Okoye (400 $). Humor: Lena kupiła siostrze narzędzia na urodziny.

```json
{
  "id": "d8_lena_i_nora",
  "dzien": 8,
  "postac": "Lena Brandt i Nora Vance",
  "glos": "Lena: szybko, urywa, „ale…”. Nora: po kolei, na palcach, „rzecz, osoba, skutek”.",
  "typ": "dwie prawdy o jednej torbie",
  "rzecz": "Szara torba narzędziowa z rozprutą podszewką",
  "ludzie": {
    "siostra": "Lena",
    "nora": "Nora"
  },
  "wnetrze": [
    {
      "sekret_id": "d8_torba_kopia",
      "co_widac": "W rozprutej podszewce leży żółta kopia pokwitowania zaliczek z podpisem „I.” i kwotą 400 dolarów. Obok narzędzia: obcęgi, śrubokręt, miara.",
      "co_z_tego_wynika": "Kopia dowodzi, że Iris Bell przyjęła 400 dolarów od lokatorów. Maya schowała ją na wszelki wypadek."
    }
  ],
  "wejscie": "Dobry wieczór. Nora Vance, a to Lena Brandt. Obie przyszłyśmy po tę samą torbę narzędziową, szarą, z rozprutą podszewką. Lena twierdzi, że to torba jej siostry. Ja twierdzę, że w podszewce jest papier z kamienicy.",
  "wejscie_jesli": {
    "d3_maz_i_siostra:wydaj_evan": "Dobry wieczór. Nora Vance, a to Lena Brandt. Lena po awanturze z Evanem chce chociaż torbę siostry. Ja chcę z niej papier z kamienicy. Torba jest szara, z rozprutą podszewką.",
    "d3_maz_i_siostra:wydaj_lena": "Dobry wieczór. Nora Vance, a to Lena Brandt. Lena ma już telefon siostry i chce jeszcze jej torbę. Ja chcę z niej papier z kamienicy. Torba jest szara, z rozprutą podszewką."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Czyja jest ta torba?",
          "ton": "uprzejme",
          "kto": "siostra",
          "wymaga": null,
          "odpowiedz": "Mai, mojej siostry. Kupiłam jej ją na urodziny, narzędzia, dziwny prezent, wiem. Teraz to jedyna rzecz po niej, jaką mogę dotknąć.",
          "mina": "emocja"
        },
        {
          "tekst": "Czego szukasz w tej torbie?",
          "ton": "rzeczowe",
          "kto": "nora",
          "wymaga": null,
          "odpowiedz": "Po kolei: rzecz, osoba, skutek. Papier z podszewki, kopia pokwitowania, rodzina Okoye. Bez niego nie mają dowodu wpłaty.",
          "mina": "mowi"
        },
        {
          "tekst": "Po czym poznacie, że torba jest właśnie ta?",
          "ton": "niewygodne",
          "kto": "siostra",
          "wymaga": null,
          "odpowiedz": "Po obcęgach z żółtą izolacją i miarze z dopiskiem „M”. Ale... no właśnie. Nora też wie, co jest w środku.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Skąd wiesz, że w podszewce jest papier?",
          "ton": "uprzejme",
          "kto": "nora",
          "wymaga": null,
          "odpowiedz": "Z wykazu mieszkańców. Numer pokwitowania jest w moim zeszycie, a kopię ktoś schował. Nie wiem kto. Chcę zobaczyć, czy się zgadza.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy Maya pracowała w tej kamienicy?",
          "ton": "rzeczowe",
          "kto": "siostra",
          "wymaga": null,
          "odpowiedz": "Pracowała jako elektryczka na Cooper Street dziewięć, na pierwszym piętrze. Ale... no tak, tam była Iris. Nie rozmawiałyśmy o tym.",
          "mina": "mowi"
        },
        {
          "tekst": "Ile rodzin jest w tej sprawie?",
          "ton": "niewygodne",
          "kto": "nora",
          "wymaga": null,
          "odpowiedz": "Czternaście, po czterysta dolarów każda, termin do czwartku, dziewiątego września. Wpłaciły raz, a ja mam to w zeszycie.",
          "mina": "mowi"
        },
        {
          "tekst": "W podszewce jest kopia z podpisem „I.” i kwotą 400 $. Czyja?",
          "ton": "niewygodne",
          "kto": "nora",
          "wymaga": "d8_torba_kopia",
          "odpowiedz": "Iris Bell, zarządczyni. To jej podpis, ja go znam z dwudziestu pokwitowań. Kopia dowodzi, że Okoye zapłacili. Oryginał ma Iris.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz z torbą, jak ją dostaniesz?",
          "ton": "uprzejme",
          "kto": "siostra",
          "wymaga": null,
          "odpowiedz": "Zabiorę ją do siebie. A jak Maya wróci, to jej oddam. Przecież to jej.",
          "mina": "emocja"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Kto podpisze?",
          "ton": "rzeczowe",
          "kto": "nora",
          "wymaga": null,
          "odpowiedz": "Ja, jako przedstawicielka lokatorów, jeśli chodzi o kopię. Za torbę niech podpisze siostra. Dwie osoby, dwa podpisy.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy któraś z was ustąpi?",
          "ton": "niewygodne",
          "kto": "nora",
          "wymaga": null,
          "odpowiedz": "Ja nie, bo chodzi o czternaście rodzin. Lena pewnie też nie.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj_lenie_cala",
      "etykieta": "Wydaj Lenie całą torbę",
      "kto": "siostra",
      "reakcja": "Dziękuję. Mam coś po niej. A... Nora, przepraszam, ale to siostra.",
      "zysk": "Lena ma torbę siostry i spokojniej śpi.",
      "strata": "Nora traci dowód wpłaty rodziny Okoye, a bez żółtej kopii mają tylko jej słowo.",
      "echo": {
        "za_dni": 4,
        "forma": "gosc",
        "tekst": "Nora Vance: „Po kolei: kopia poszła z torbą do siostry Mai. Okoye znowu są bez dowodu. Wiem, że trzeba było wybrać. Tylko że zapłacą za to Okoye.”"
      }
    },
    {
      "akcja": "kopia_osobno",
      "etykieta": "Zasłoń dane, zrób kopię osobno za zgodą obu",
      "kto": "nora",
      "reakcja": "Zgoda. Po kolei: kopia zasłonięta, torba dla Leny, dokument zostaje w biurze. Nie lubię tego, ale dobrze.",
      "zysk": "Dowód zostaje w biurze, a Lena dostaje torbę, obie strony się zgodziły.",
      "strata": "Zajmuje to całą wizytę, a zasłonięte dane osłabiają dowód.",
      "echo": {
        "za_dni": 4,
        "forma": "gosc",
        "tekst": "Nora Vance: „Kopia z zasłoniętymi nazwiskami leży u was. To mało, ale to jest dowód. Jak będzie trzeba, wrócę po numer pokwitowania.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Nic z tego? Torba leży w biurze? No to co, mamy czekać? Ale... dobrze.",
      "zysk": "Torba zostaje w biurze, nikt jej nie dostaje i nikt nie ma pretensji o stronniczość.",
      "strata": "Lena nie ma nic po siostrze, a Nora nie ma kopii. Obie odchodzą z pustymi rękami.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Lena Brandt: „Torba leży u was, a ja o niej myślę każdą noc. Wiem, że przepisy. Ale to jej torba, a ja nie mam po niej nic innego.”"
      }
    }
  ],
  "rola": "siostra i prawniczka po jedną torbę",
  "watki": [
    "kamienica",
    "Zaginiona"
  ],
  "tik": "Nora liczy: rzecz, osoba, skutek",
  "potrzeba": "torba narzędziowa albo kopia pokwitowania",
  "slad": "kopia 400 $ w rozprutej podszewce"
}
```

**Mini-karta: Bree Halm, 29, kobieta w dresie.** Pewna siebie, szybka, mówi do sprawy: „Słuchaj, mam paragon.” Chce: srebrny aparat „brata”, który leży w szpitalu. Ukrywa: aparat należy do Rafa Okoye z Cooper Street. Kłamie: „Teo wydrapał nic, aparat jest czysty.” Proponuje: 80 $ za szybkość. Humor: „mam paragon” na wszystko.

```json
{
  "id": "d8_bree",
  "dzien": 8,
  "postac": "Bree Halm, 29",
  "glos": "Pewnie, szybko, do sprawy. Zaczyna od „Słuchaj, mam paragon”.",
  "typ": "profesjonalistka, fałszywy tytuł do rzeczy",
  "rzecz": "Srebrny analogowy aparat z wgnieceniem w lewym rogu",
  "wnetrze": [
    {
      "sekret_id": "d8_aparat_naklejka",
      "co_widac": "Pod osłoną baterii wydrapane R.O. Licznik pokazuje 36 z 36: film jest pełny, niewywołany. Na pasku zawieszka z kluczem do skrzynki: „Cooper 9, lok. 4”.",
      "co_z_tego_wynika": "Aparat należy do Rafa Okoye z Cooper Street. Pełny film z klatki schodowej może być dowodem przeciwko Iris, ale tylko jeśli ktoś go wywoła."
    }
  ],
  "wejscie": "Cześć, Bree. Słuchaj, mam paragon. Zgubiłam aparat brata w jedenastce, srebrny, analogowy, z wgnieceniem w rogu. Brat leży w szpitalu i bardzo chce go odzyskać. Potrzebuję go dziś.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten aparat?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Srebrny, analogowy, z wgnieceniem w lewym rogu. Mój brat upuścił go na schodach. Teraz ma charakter.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie go zostawiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, na siedzeniu. Rozmawiałam przez telefon z lekarzem i nie spojrzałam za siebie.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czy w aparacie są jakieś znaki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie, żadnych. Teo, mój brat, nic nie wydrapał. Aparat jest czysty.",
          "mina": "klamie"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jak ma na imię twój brat?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Teo. Teodor Halm. Leży na ortopedii, noga w gipsie. To przez rower, powiedział, że to nie jego wina.",
          "mina": "mowi"
        },
        {
          "tekst": "Jaki to paragon?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Z komisu na Rynku, sprzed dwóch lat. Mam w telefonie zdjęcie. Słuchaj, tam jest cena, jest data i jest opis, że srebrny.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jest na filmie w środku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wiem, brat go nie wywoływał. Pewnie zdjęcia z wakacji. Nic ważnego.",
          "mina": "klamie"
        },
        {
          "tekst": "Pod osłoną baterii jest wydrapane R.O. Czyje?",
          "ton": "niewygodne",
          "wymaga": "d8_aparat_naklejka",
          "odpowiedz": "No dobra. R.O. to Raf Okoye, sąsiad z kamienicy. Pożyczył bratu aparat. Ale to się przecież nie liczy, bo mam paragon.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czemu aparat jest ci tak pilnie potrzebny?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Bo brat chce zdjęć ze szpitala dla mamy. Mama jest daleko i lubi zdjęcia. Dlatego dziś.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bree Halm. Zawsze podpisuję szybko, to znaczy czytelnie. Ale szybko.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co będzie, jeśli aparat zostanie w biurze?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wtedy zrobię się nieprzyjemna. Albo inaczej: osiemdziesiąt dolarów, wydajesz mi aparat i po sprawie. Co ci szkodzi?",
          "mina": "mowi",
          "ustawia": "d8_bree_oferta"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki. Słuchaj, mam paragon, ale i tak dziękuję.",
      "zysk": "Bree odchodzi z aparatem, a brat dostaje zdjęcia.",
      "strata": "Aparat Rafa Okoye wychodzi z biura, a razem z nim zdjęcia pękniętej ściany z Cooper Street.",
      "echo": {
        "za_dni": 4,
        "forma": "gosc",
        "tekst": "Nora Vance: „Raf Okoye szuka aparatu z kamienicy. Miał w nim pełny film z klatki schodowej. Ktoś go wydał. Czyli znowu brak dowodu.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Nie? A paragon? No dobra, zobaczysz, że to pomyłka.",
      "zysk": "Aparat zostaje w biurze do wyjaśnienia, do kogo naprawdę należy.",
      "strata": "Bree wraca ze złością, a jej brat dalej leży bez zdjęć dla mamy.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Raf Okoye: „Słyszałem, że mój aparat jest w biurze rzeczy znalezionych. Przyjdę po niego w sobotę rano. Będę miał kogoś ze sobą, żeby potwierdził.”"
      }
    },
    {
      "akcja": "wez_80_bree",
      "etykieta": "Wydaj aparat Bree i przyjmij od niej 80 $",
      "kasa": 80,
      "reakcja": "Proszę, osiemdziesiąt. Cieszę się, że ktoś tu rozumie, jak to działa.",
      "zysk": "Dostajesz 80 dolarów, czyli ponad pół czynszu.",
      "strata": "Aparat Rafa znika razem z pełnym filmem, a Bree może się wygadać, że okienko dało się kupić.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Nora Vance: „Raf Okoye mówi, że Bree chwaliła się w kamienicy, że załatwiła aparat przy okienku za osiemdziesiąt dolarów. Pytam tylko, czy to prawda.”"
      },
      "wymaga": "d8_bree_oferta"
    }
  ],
  "rola": "kobieta z paragonem na wszystko",
  "watki": [
    "kamienica",
    "pieniądze"
  ],
  "tik": "mówi „Słuchaj, mam paragon”",
  "potrzeba": "srebrny aparat „brata”",
  "slad": "aparat Okoye i oferta 80 $"
}
```

## DZIEŃ 9

**Mini-karta: Iris Bell i Victor Crane.** Iris mówi cicho, uprzejmie, „nie lubię naciskać”. Victor krótko: „Kto może to podpisać?” i pokwitowanie w dwóch egzemplarzach. Oboje pytają o ten sam numer odbioru. Rzecz: metalowy piórnik z pięcioma żetonami (0412, 0517, 0623, 0731, 0809). Każdy żeton to człowiek. Stawka: czterech ludzi, którzy kupili bilet, i piąty żeton Iris.

```json
{
  "id": "d9_iris",
  "dzien": 9,
  "postac": "Iris Bell i Victor Crane",
  "glos": "Iris: cicho, uprzejmie, „nie lubię naciskać”, nigdy nie dotyka szyby. Victor: krótko, „kto to podpisze?”, wszystko w dwóch egzemplarzach.",
  "typ": "dwie strony jednego piórnika",
  "rzecz": "Metalowy matowy piórnik na zatrzask z dwoma przedziałami",
  "ludzie": {
    "iris": "Iris Bell",
    "victor": "Victor Crane"
  },
  "wnetrze": [
    {
      "sekret_id": "d9_zetony_numery",
      "co_widac": "W piórniku pięć żetonów: 0412, 0517, 0623, 0731 i 0809. Na rewersach karteczki: „ojciec z dzieckiem”, „kobieta z walizką”, „matka z synem”, „kasetowiec”. Piąty żeton, 0809, ma karteczkę „jeszcze bez opisu”.",
      "co_z_tego_wynika": "To nie są żetony do skrzynek, tylko numery odbioru paczek z papierami. Cztery mają opis człowieka, piąty jeszcze nie."
    }
  ],
  "wejscie": "Dobry wieczór. Iris Bell, znowu. Piórnik z żetonami, szóstka, ostatni kurs. Obok pan Crane z inspekcji, pyta o ten sam numer. Nie lubię naciskać, ale piórnik jest mój i dziś potrzebny.",
  "wejscie_jesli": {
    "d4_iris:rejestr": "Dobry wieczór. Iris Bell. Piórnik z żetonami, szóstka, ostatni kurs. Zeszłym razem wpisaliście wszystko do księgi i bardzo dobrze. Obok Victor Crane, pyta o ten sam numer.",
    "d4_iris:koperta": "Dobry wieczór. Iris Bell. Miło znowu przy tej szybie. Piórnik z żetonami, szóstka, ostatni kurs. Obok Victor Crane, pyta o ten sam numer. Mam nadzieję, że pójdzie szybko.",
    "d4_iris:odmow_zglos": "Dobry wieczór. Iris Bell. Paczka z zeszłego tygodnia nadal u was leży. Dziś piórnik z żetonami. Obok Victor Crane, pyta o ten sam numer."
  },
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Co jest w tym piórniku?",
          "ton": "uprzejme",
          "kto": "iris",
          "wymaga": null,
          "odpowiedz": "Żetony do skrzynek pocztowych w kamienicy. Pięć sztuk, nic więcej. Nudy.",
          "mina": "klamie"
        },
        {
          "tekst": "Czego chce inspekcja?",
          "ton": "rzeczowe",
          "kto": "victor",
          "wymaga": null,
          "odpowiedz": "Numeru odbioru i podpisu. Kto to podpisze? Pokwitowanie w dwóch egzemplarzach, jeden do Urzędu.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu oboje chcecie tego samego?",
          "ton": "niewygodne",
          "kto": "iris",
          "wymaga": null,
          "odpowiedz": "Bo żetony przyjechały szóstką, a Victor lubi wszystko, co przyjeżdża. Mnie wystarczy, że wrócą do skrzynek.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czyje są te żetony?",
          "ton": "uprzejme",
          "kto": "iris",
          "wymaga": null,
          "odpowiedz": "Moich lokatorów. Nazwisk nie podam, to ich sprawa. Są ludzie, którzy chcą mieć święty spokój.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co nie zgadza się w księdze?",
          "ton": "rzeczowe",
          "kto": "victor",
          "wymaga": null,
          "odpowiedz": "Numery. Piórnik przyjechał, a wpisu o nim nie ma. Brakuje też trzech kwitów od zeszłego miesiąca. Ktoś je wydał bez śladu.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co znaczą liczby na żetonach?",
          "ton": "niewygodne",
          "kto": "iris",
          "wymaga": null,
          "odpowiedz": "Nic. Numeracja skrzynek. Proszę nie szukać w tym fabuły.",
          "mina": "klamie"
        },
        {
          "tekst": "Na rewersach: „kobieta z walizką”, „matka z synem”. Co to?",
          "ton": "niewygodne",
          "kto": "iris",
          "wymaga": "d9_zetony_numery",
          "odpowiedz": "Opisy. Żeby kurier wiedział, komu wręczyć paczkę. Więcej nie powiem przy panu Crane.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czemu piąty żeton nie ma opisu?",
          "ton": "uprzejme",
          "kto": "iris",
          "wymaga": null,
          "odpowiedz": "Jeszcze go nie ma. Papier przyjdzie, jak przyjdzie. Nie zadaję takich pytań, kiedy ktoś płaci.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co się stanie, jak piórnik trafi do Urzędu?",
          "ton": "rzeczowe",
          "kto": "victor",
          "wymaga": null,
          "odpowiedz": "Zostanie opisany w protokole. Ktoś go przeczyta i wyciągnie wnioski. Ja nie wyciągam, ja zapisuję.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co jest w tych paczkach, że ludzie po nie jeżdżą?",
          "ton": "niewygodne",
          "kto": "iris",
          "wymaga": "d9_zetony_numery",
          "odpowiedz": "Papier na nowe życie. Dla ludzi, których ktoś bije albo ściga. Biorę za to pieniądze i nie mam wstydu. Reszta nie dla inspekcji.",
          "mina": "emocja"
        },
        {
          "tekst": "Czemu mam wam ufać?",
          "ton": "niewygodne",
          "kto": "iris",
          "wymaga": null,
          "odpowiedz": "Nie masz. Zrób, co uznasz za słuszne. Ja tylko mówię, że czterech ludzi kupiło bilet.",
          "mina": "mowi"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "zetony_iris",
      "etykieta": "Wydaj piórnik Iris",
      "kto": "iris",
      "reakcja": "Dziękuję. Cieszę się, że się rozumiemy.",
      "zysk": "Czterech ludzi z żetonów jest bezpiecznych, a Iris będzie ci to pamiętać.",
      "strata": "Skrytka działa poza księgą, a Victor zapisze, że go zignorowano.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Victor Crane: „Piórnik wydano osobie prywatnej. Zapisałem bez komentarza. Kto to podpisał? Nikt. Dlatego notuję.”"
      }
    },
    {
      "akcja": "zetony_victor",
      "etykieta": "Pokaż żetony Victorowi i podpisz oba egzemplarze",
      "kto": "victor",
      "reakcja": "Dwa egzemplarze. Jeden do Urzędu, jeden zostaje. Dziękuję.",
      "zysk": "W księdze jest ślad i nikt nie zarzuci ci układu z Iris.",
      "strata": "Numery żetonów jadą do Urzędu, a Iris tego nie zapomni.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Czterech moich lokatorów dostało dziś pisma z Urzędu. Ciekawe, kto pokazał im ich numery.”"
      }
    },
    {
      "akcja": "jeden_egzemplarz",
      "etykieta": "Pokwituj Victorowi tylko jeden egzemplarz",
      "kto": "victor",
      "reakcja": "Jeden. Dobrze, zapisuję. Ale proszę wiedzieć, że wolałbym dwa.",
      "zysk": "Victor ma swój podpis, a drugiej kopii nikt nie wysyła do Urzędu.",
      "strata": "Victor policzy to jako niechęć do współpracy, a Iris nadal nie ma piórnika.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Inspekcja przewozów: z biura wpłynął jeden egzemplarz pokwitowania zamiast dwóch. Odnotowano. — V. Crane"
      }
    },
    {
      "akcja": "depozyt",
      "etykieta": "Zostaw piórnik w depozycie do soboty",
      "kto": "victor",
      "reakcja": "Depozyt do soboty. Wpisuję. Tylko że ktoś czeka na swój papier.",
      "zysk": "Zyskujesz czas do soboty, a nikt nie dostaje piórnika.",
      "strata": "Do soboty żaden z czterech nie dostanie dokumentu, a jedna rodzina jedzie jutro o 5:40.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Piórnik leży w depozycie. Rozumiem procedury. Ale jeden z moich ludzi ma jutro pociąg.”"
      }
    }
  ],
  "rola": "zarządczyni i inspektor o jeden piórnik",
  "watki": [
    "Skrytka",
    "Urząd",
    "Fotel"
  ],
  "tik": "Iris cicho, Victor „kto podpisze?”",
  "potrzeba": "piórnik z pięcioma żetonami",
  "slad": "numery to daty zamówienia, 0809 na końcu"
}
```

**Mini-karta: Marek Stahl, ok. 50, łysy z wąsami.** Gładki, zbyt dobrze przygotowany, powtarza frazy z regulaminu. Chce: szary filcowy kapelusz. To test: Victor sprawdza, czy gracz wyda rzecz bez dowodu. Kłamie: o rozmiarze, o inicjałach, o tym, że jest sam. Tik: „zgodnie z regulaminem”. Humor: zbyt grzeczny.

```json
{
  "id": "d9_stahl",
  "dzien": 9,
  "postac": "Marek Stahl, ok. 50",
  "glos": "Gładko, za starannie, jakby recytował. Zaczyna od „Zgodnie z regulaminem…”. Zbyt grzeczny.",
  "typ": "zgłaszający zgubę",
  "rzecz": "Szary filcowy kapelusz z granatową wstążką",
  "wnetrze": [
    {
      "sekret_id": "d9_kapelusz_naklejka",
      "co_widac": "Pod wstążką naklejka: „Alder & Son, rozmiar 56”. W podszewce haftowane inicjały J.K.",
      "co_z_tego_wynika": "Kapelusz jest rozmiar 56 z inicjałami J.K. Zgłaszający mówi o innym rozmiarze i innych inicjałach."
    }
  ],
  "wejscie": "Dobry wieczór. Marek Stahl. Zgodnie z regulaminem zgłaszam zgubę: szary filcowy kapelusz z granatową wstążką, wczoraj w czwórce. Opis mam bardzo dokładny, żeby nie tracić państwa czasu.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten kapelusz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Szary, filcowy, granatowa wstążka, rozmiar pięćdziesiąt osiem. Zgodnie z regulaminem podaję wszystko od razu.",
          "mina": "klamie"
        },
        {
          "tekst": "Gdzie i kiedy go zgubiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Wczoraj, czwórka, około dwudziestej drugiej. Siedziałem sam, kapelusz leżał na półce nad oknem.",
          "mina": "klamie"
        },
        {
          "tekst": "Czemu akurat ten kapelusz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo jutro mam ważną rozmowę, a bez niego wyglądam nieprzekonująco. Tak mówi moja żona.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Jakie masz inicjały?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "M.S. Marek Stahl. Można zapisać zgodnie z regulaminem.",
          "mina": "mowi"
        },
        {
          "tekst": "Jest w nim naklejka producenta?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Pod wstążką, tak. Nazwy nie pamiętam. Regulamin tego nie wymaga.",
          "mina": "klamie"
        },
        {
          "tekst": "Jechałeś sam?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Sam. Zawsze sam. Zgodnie z rozkładem nikt obok nie siadał.",
          "mina": "klamie"
        },
        {
          "tekst": "Pod wstążką jest „Alder & Son, 56”, w środku J.K. Czyj to kapelusz?",
          "ton": "niewygodne",
          "wymaga": "d9_kapelusz_naklejka",
          "odpowiedz": "…Chwileczkę. Biuro ma dobry wzrok. Kapelusz nie jest mój. Chciałem zobaczyć, czy ktoś go wyda za opis.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kto może potwierdzić, że to twój kapelusz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Żona, ale jest w delegacji. Zaświadczenie mogę przynieść jutro, zgodnie z regulaminem.",
          "mina": "klamie"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Marek Stahl, z kropką po imieniu. Zgodnie z regulaminem.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co zrobisz, jeśli kapelusz zostanie u nas?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Odejdę. Ale nie od razu. Postoję jeszcze chwilę, jeśli państwo pozwolą. Lubię patrzeć na ludzi przy pracy.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Zgodnie z regulaminem wszystko w porządku. Proszę się nie przejmować.",
      "zysk": "Stahl odchodzi z kapeluszem, kolejka rusza.",
      "strata": "Kapelusz wychodzi po samym opisie, bez żadnego dowodu. Victor to zauważy.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Inspekcja przewozów: odnotowano wydanie rzeczy po samym opisie. Proszę o uzupełnienie procedury. — V. Crane"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Rozumiem. Zgodnie z regulaminem to poprawna odpowiedź. Dziękuję za cierpliwość.",
      "zysk": "Kapelusz zostaje, dopóki nie zgłosi się ktoś, kto zna wnętrze.",
      "strata": "Stahl nie przyznaje się do niczego i dalej stoi w kolejce, patrząc.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Inspekcja przewozów: odnotowano odmowę wydania rzeczy bez dowodu. Przyjęto do wiadomości. — V. Crane"
      }
    },
    {
      "akcja": "zadzwon",
      "etykieta": "Zadzwoń do inspekcji, że opis nie pasuje",
      "reakcja": "Dzwonić? Przy takiej drobnostce? Zgodnie z regulaminem… dobrze, dobrze, nie ma sprawy.",
      "zysk": "Masz pewność, że nikt nie nabrał biura, i ślad w księdze.",
      "strata": "Victor liczy, ile razy pytasz o pozwolenie, zamiast zdecydować sam.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Inspekcja przewozów: odnotowano telefon w sprawie niezgodności opisu. Nie wszystko wymaga telefonu. — V. Crane"
      }
    }
  ],
  "rola": "zbyt grzeczny zgłaszający kapelusz",
  "watki": [
    "Zaginiona",
    "Urząd"
  ],
  "tik": "mówi „zgodnie z regulaminem”",
  "potrzeba": "szary filcowy kapelusz bez dowodu",
  "slad": "kłamie o sobie i wraca w d22"
}
```

## DZIEŃ 10

**Mini-karta: Vera Kovacs, 62, zaplecze tramwajowe.** Mówi: miejsce, rzecz, nazwisko. Kiedy się wstydzi, dzwoni kluczami przy pasie. Chce: pudełko z szafki Sama, które zgubiła w tramwaju. Ukrywa: wezwała Sama za tydzień w piątek, a szafka idzie do zamknięcia. Prosi, żeby ktoś przy tym był. Tik: klucze dzwonią, kiedy się wstydzi. Humor: wyliczanka rzeczy.

```json
{
  "id": "d10_vera",
  "dzien": 10,
  "postac": "Vera Kovacs, 62",
  "glos": "Najpierw miejsce, potem rzecz, na końcu nazwisko. Dzwoni kluczami przy pasie, kiedy się wstydzi.",
  "typ": "uczciwa, ukrywa",
  "rzecz": "Blaszane pudełko zapinane na sprzączkę",
  "wnetrze": [
    {
      "sekret_id": "d10_pudelko_karta",
      "co_widac": "W pudełku pasek od zegarka bez tarczy i karta inwentarza szuflady z numerem 6. Na wewnętrznej stronie wieka ołówkiem: „Teczka jest pusta. Tak ma być. S.H.” Ten sam numer 6 jest na szufladzie w biurze, w której leży klucz bez zamka.",
      "co_z_tego_wynika": "Szuflada w biurze należała do Sama. Klucz bez zamka otwiera tę szufladę."
    }
  ],
  "wejscie": "Dobry wieczór. Zaplecze tramwajowe, pudełko z szafki, Vera Kovacs. Zgubiłam je w jedenastce, w drodze do domu. Szafkę zamykają w przyszły piątek, a pudełko jest z niej. Proszę o pomoc.",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda to pudełko?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Blaszane, zapinane na sprzączkę. Na wieczku wgniecenie, bo siadałam na nim w poczekalni. Zapina się z oporem.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie dokładnie je zgubiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, wczoraj, ostatni kurs. Położyłam je obok i wysiadłam bez niego. Klucze mi dzwoniły, jak biegłam.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czemu zgubiłaś rzecz z cudzej szafki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo nosiłam je do domu, żeby nikt ich nie wyrzucił. Szafka jest starego pracownika, nie moja.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czyja to szafka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Sama Holta, poprzednika w tym biurze. Odszedł ponad miesiąc temu i nikt się szafką nie zajmuje, tylko ja.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jest w pudełku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Pasek od zegarka i kartka z inwentarza. Nic wartościowego.",
          "mina": "neutralna"
        },
        {
          "tekst": "Dlaczego to ty zajmujesz się jego szafką?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo jak szafka jest zajęta, to nikt jej nie likwiduje. Sam mnie o to prosił. Powiedział: trzymaj, aż wrócę.",
          "mina": "emocja"
        },
        {
          "tekst": "Na karcie jest numer szuflady 6, taki jak w biurze. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": "d10_pudelko_karta",
          "odpowiedz": "Że szuflada szóstka jest jego. Klucz od niej dostałam od Sama i zostawiłam w tej szufladzie, żeby następny nie musiał go szukać.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Czemu zależy ci na tym pudełku?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Bo to ostatnie, co zostało po Samie. Wezwałam go na przyszły piątek, na zamknięcie szafki. Chcę, żeby miał co zabrać.",
          "mina": "emocja"
        },
        {
          "tekst": "Co się stanie z rzeczami, jeśli Sam nie przyjdzie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Pójdą do zbiorczego archiwum Urzędu i nikt ich potem nie znajdzie. Dlatego proszę, żeby ktoś przy tym był, jak Sam przyjdzie.",
          "mina": "mowi"
        },
        {
          "tekst": "Czy Sam wie, że go wezwałaś?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wie. Napisałam. Nie odpisał. Ale on nigdy nie odpisuje, tylko przychodzi. To znaczy, powinien przyjść.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "pokwituj_osobista",
      "etykieta": "Pokwituj jako osobistą rzecz Sama",
      "reakcja": "Dziękuję. Osobista rzecz Sama Holta. Proszę o podpis… tak, tutaj, przy K.",
      "zysk": "Sam zobaczy, że biuro traktuje jego rzeczy jak osobiste, i będzie po twojej stronie.",
      "strata": "Rzecz zostaje poza zbiorczym archiwum, a Urząd dowie się, że ktoś ją zatrzymał.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Vera Kovacs: „Szafka Sama jest zamknięta, ale pudełko u was. Napisałam do niego jeszcze raz. Nie wiem, czy przyjdzie, ale ktoś będzie czekał.”"
      }
    },
    {
      "akcja": "archiwum",
      "etykieta": "Oddaj do zbiorczego archiwum",
      "reakcja": "Rozumiem. Zbiorcze archiwum. Jak trzeba, to trzeba.",
      "zysk": "Czysto, zgodnie z przepisami: rzeczy Sama są w archiwum Urzędu.",
      "strata": "Rzeczy osobiste Sama zostają w systemie Urzędu, a Sam straci możliwość odebrania ich samodzielnie.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Vera Kovacs: „Pudełko pojechało do archiwum. Napisałam do Sama, że rzeczy są w papierach. Nie odpisał. Chyba ma żal.”"
      }
    },
    {
      "akcja": "zatrzymaj_do_15",
      "etykieta": "Zatrzymaj pudełko do przyjścia Sama w piątek",
      "reakcja": "Do piątku? Dziękuję. Przyprowadzę go, jak się zgodzi.",
      "zysk": "Sam odbierze pudełko osobiście, a Vera nie złamie obietnicy.",
      "strata": "Rzecz leży bez wpisu przez tydzień, a Urząd może zacząć pytać, czemu.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Vera Kovacs: „Zatrzymane do piątku. Powiedziałam Samowi. Nie odpisał, ale chyba przeczytał. To znaczy, że może przyjdzie.”"
      }
    }
  ],
  "rola": "zaplecze z kluczami przy pasie",
  "watki": [
    "Poprzednik",
    "Skrytka",
    "Fotel"
  ],
  "tik": "dzwoni kluczami, gdy się wstydzi",
  "potrzeba": "pudełko z szafki Sama",
  "slad": "wezwała Sama na zamknięcie jego starej szafki"
}
```

**Mini-karta: Dario Ruiz, 29, motorniczy.** Opowiada o jedzeniu, oferuje kanapkę zamiast pieniędzy, żartuje, ale pyta poważnie. Chce: zeszyt z grafikiem dyżurów. Ukrywa: w zeszycie zapisał dług Sama, 13 $, i martwi się o niego. Pyta, czy Sam żyje. Tik: „masz, weź kanapkę”.

```json
{
  "id": "d10_dario",
  "dzien": 10,
  "postac": "Dario Ruiz, 29",
  "glos": "Opowiada o jedzeniu, żartuje, wciska kanapkę zamiast pieniędzy. Poważnieje, kiedy mówi o Samie.",
  "typ": "uczciwy, łapówka w naturze",
  "rzecz": "Gruby zeszyt grafiku dyżurów w tłustej okładce, z gumką",
  "wnetrze": [
    {
      "sekret_id": "d10_zeszyt_sam",
      "co_widac": "Na ostatniej stronie zeszytu zapisane: „Sam, 13 $, kanapki i herbata. Oddaje, jak wróci.” Dopisek: „Czy on żyje?”",
      "co_z_tego_wynika": "Dario martwi się o Sama i nosi jego dług w zeszycie jak ważny dokument."
    }
  ],
  "wejscie": "Cześć, Dario, motorniczy z jedenastki. Zgubiłem zeszyt z grafikiem dyżurów, gruby, w tłustej okładce, z gumką. Bez niego nie wiem, kiedy jeżdżę. A przy okazji: czy ktoś tu wie, co się stało z Samem?",
  "tury": [
    {
      "pytania": [
        {
          "tekst": "Jak wygląda ten zeszyt?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Gruby, tłusta okładka, bo noszę go z kanapką. Gumka ledwo trzyma. Pachnie cebulą, uprzedzam.",
          "mina": "mowi"
        },
        {
          "tekst": "Gdzie go zgubiłeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W jedenastce, na pętli, jak jadłem. Odłożyłem zeszyt obok kanapki i zjadłem kanapkę. Zeszytu już nie.",
          "mina": "mowi"
        },
        {
          "tekst": "Co jest w tym zeszycie poza grafikiem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Przepisy na zupy i numery telefonów. Masz kanapkę, poczęstuj się.",
          "mina": "mowi"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Kim jest Sam?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Kolega, poprzednik z tego okienka. Zawsze miał dla mnie herbatę i dobre słowo. Teraz go nie ma i nikt nie wie gdzie.",
          "mina": "emocja"
        },
        {
          "tekst": "Od kiedy go nie ma?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Od ponad miesiąca. Powiedział, że idzie do portu. Potem nie odbierał telefonu. Pytam wszystkich w zajezdni.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu pytasz akurat tutaj?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo to jego miejsce. Jak ktoś ma wiedzieć, to ten, kto siedzi na jego krześle.",
          "mina": "emocja"
        },
        {
          "tekst": "Na ostatniej stronie jest dopisek „Czy on żyje?”. Czyj?",
          "ton": "niewygodne",
          "wymaga": "d10_zeszyt_sam",
          "odpowiedz": "Mój. Dopisałem go w poniedziałek. Sam jest mi winien trzynaście dolarów, ale nie o to chodzi. Chcę wiedzieć, czy żyje.",
          "mina": "emocja"
        }
      ]
    },
    {
      "pytania": [
        {
          "tekst": "Co zrobisz z zeszytem, jak go dostaniesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wrócę na pętlę i będę jeździł według grafiku. A w wolnej chwili spróbuję znowu zadzwonić do Sama.",
          "mina": "mowi"
        },
        {
          "tekst": "Odbiór wymaga podpisu. Podpiszesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dario Ruiz, z zetem na końcu. Pół zajezdni to Ruizowie, Dana z warsztatu to moja kuzynka.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co zrobisz, jeśli nikt nie odpowie o Samie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Będę pytał dalej. Aż ktoś powie albo aż mi się znudzi, a to drugie się nie zdarza.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dzięki! Masz, weź kanapkę, serio. A jakby ktoś coś wiedział o Samie, to wiesz, gdzie jestem.",
      "zysk": "Dario odzyskuje grafik, a ty dostajesz pół kanapki z cebulą.",
      "strata": "Nie dowiadujesz się nic o Samie, a Dario wraca z tą samą troską.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Dario Ruiz: „Zeszyt cały, nawet okruchy po kanapce są. Jak wiesz coś o Samie, to powiedz. Nie ma pośpiechu. Jest tylko pytanie.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Co? To przecież mój zeszyt! Dobra, przyniosę kogoś z zajezdni, kto potwierdzi.",
      "zysk": "Zeszyt zostaje w biurze, a w nim dopisek o Samie, który możesz przeczytać jeszcze raz.",
      "strata": "Dario nie ma grafiku i jutro nie wie, o której jedzie. Szef się wścieknie.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Dario Ruiz: „Spóźniłem się na zmianę, bo nie miałem grafiku. Szef dał mi dyżur w niedzielę. Za karę.”"
      }
    },
    {
      "akcja": "powiedz_dario",
      "etykieta": "Wydaj zeszyt i powiedz, że Sam ma przyjść po rzeczy w piątek",
      "reakcja": "Naprawdę? Wróci? To dobrze. Powiem mu, że czeka na niego kanapka. A jak nie przyjdzie, to chociaż wiem, że żyje.",
      "zysk": "Dario przestaje się martwić, a Sam ma przyjaciela, który przyjdzie na spotkanie.",
      "strata": "Zdradzasz plan Sama: jeśli nie chciał, żeby ktoś o nim wiedział, może się wycofać.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Dario Ruiz: „Powiedziałem wszystkim w zajezdni, że Sam przyjdzie w piątek za tydzień. Wszyscy się ucieszyli. Mam nadzieję, że to dobrze.”"
      },
      "wymaga": "d10_vera:pokwituj_osobista|d10_vera:zatrzymaj_do_15|d10_vera:archiwum"
    }
  ],
  "rola": "motorniczy, który płaci kanapką",
  "watki": [
    "Poprzednik",
    "humor"
  ],
  "tik": "mówi „masz, weź kanapkę”",
  "potrzeba": "zeszyt grafiku dyżurów",
  "slad": "zapisał dług Sama i pyta o niego"
}
```

## RZECZY DODATKOWE I KARTY WIECZORNE

Rzeczy dodatkowe leżą w dostawie bez gościa i dają sekret, który odpala pytania w późniejszych rozmowach. Karty wieczorne pokazują, co działo się poza okienkiem: Elias (codziennie) i Kuba Marlow, któremu gracz jest winien 300 $.

```json
{
  "extra": {
    "2": {
      "sprite": "szalik",
      "itemName": "szalik",
      "line": "4",
      "inside": null,
      "wnetrze": [
        {
          "sekret_id": "d2_szalik_md",
          "co_widac": "Pod zagiętą metką wyhaftowane inicjały M.D. W wewnętrznej kieszonce złożony bilet miesięczny na linię 4, imienny: Maya Doyle.",
          "co_z_tego_wynika": "Szalik należy do Mai Doyle, którą mąż zgłosił jako zaginioną. Maya zostawiła go w tramwaju."
        }
      ]
    },
    "6": {
      "sprite": "puszka",
      "itemName": "puszka po herbacie",
      "line": "6",
      "inside": {
        "img": "W4",
        "x": 0.23,
        "y": 0.44
      },
      "wnetrze": [
        {
          "sekret_id": "d6_puszka_odcinek",
          "co_widac": "Pod ruchomym dnem puszki leży odcinek odbioru. Numer jest z tego samego bloczka co blankiet w płóciennej paczce Iris Bell z dnia czwartego. Na spodzie puszki ołówkiem: „Nie ufaj drugiej kopii. S.H.”",
          "co_z_tego_wynika": "Puszka należy do obiegu paczek Skrytki."
        }
      ]
    }
  },
  "wieczor": {
    "1": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias przyszedł pod koniec zmiany. „Czy jest już oprawka po mojej żonie?” Nie było. Podziękował i długo stał przy szybie, jakby miało się coś zmienić."
      }
    ],
    "2": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias, ten sam numerek. Zapytał o oprawkę, a potem, czy poprzedni pracownik zostawił jakąś notatkę o jej szukaniu. Nie zostawił."
      },
      {
        "kto": "Kartka pod drzwiami domu",
        "tekst": "„Kuba Marlow. Trzysta dolarów, rata sześćdziesiąt w każdą sobotę. Lubię ludzi punktualnych. Nie krzyczę, tylko przypominam.” Nie wiesz, skąd wiedział, gdzie mieszkasz."
      }
    ],
    "3": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Burza. Elias przyszedł w deszczu, z parasolem bez rączki. „Czy jest oprawka?” Nie było. Wziął suchy numerek i złożył go w prostokąt ciaśniejszy niż zwykle."
      }
    ],
    "4": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias powiedział, że poprzedni pracownik obiecał szukać oprawki z własnej kieszeni. Zapytany, co to znaczy, wzruszył ramionami: nie wie, czy wolno mu mówić."
      },
      {
        "kto": "Kuba Marlow, przez sąsiadkę",
        "tekst": "Sąsiadka powiedziała, że ktoś pytał, czy jesteś w domu. Odpowiedziała, że pracujesz w nocy. „To dobrze”, miał powiedzieć. „Noc to czas na pieniądze.”"
      }
    ],
    "5": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias przyniósł gazetę. Na trzeciej stronie apel o Maję Doyle: trzydzieści cztery lata, krótkie czarne włosy, płaszcz z za długimi rękawami. W drobnych ogłoszeniach to samo co na słupie: nocne okienko, bez referencji, zaplecze tramwajowe, wejście od podwórza. „Ciągle to samo”, powiedział. Zapytał o oprawkę. Nie było. Gazeta została na ladzie."
      },
      {
        "kto": "Ostatni w kolejce",
        "tekst": "Mężczyzna w szarym kapeluszu stał na końcu i nic nie powiedział. Patrzył, jak pracujesz. Wyszedł bez numerka."
      }
    ],
    "6": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zapytał o oprawkę, a potem, jak nazywa się osoba za szybą. Poprzedni pracownik zawsze przedstawiał się z imienia. Nikt mu jeszcze tego nie powiedział."
      },
      {
        "kto": "Kuba Marlow, pod bramą zajezdni",
        "tekst": "Stał po drugiej stronie ulicy. Nie podszedł. Uniósł rękę i pokazał sześć palców: rata, sześćdziesiąt dolarów. Potem poszedł, jakby nic się nie stało."
      }
    ],
    "7": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias: „On wiedział, że nie będzie. Mówił: jeszcze nie, panie Eliasie. A potem przestał mówić.” Wziął numerek i wyszedł wolno."
      }
    ],
    "8": [
      {
        "kto": "Gazeta",
        "tekst": "Cooper Street 9 idzie pod wyburzenie, lokatorzy mają czas do czwartku, dziewiątego września. Twój pokój służbowy jest pod tym samym adresem. Nikt nie napisał, dokąd się wyprowadzisz."
      },
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias zostawił papierowy woreczek z dwoma ciastkami z cukierni obok. „To nie łapówka. To za nocne.” Zapytał o oprawkę. Nie było."
      },
      {
        "kto": "Kuba Marlow, przez kuzyna",
        "tekst": "Kuzyn przyniósł kartkę: „Rata sześćdziesiąt, plus piętnaście odsetek za spóźnienie. K.M.” Powiedział, że Kuba nie jest zły, tylko nie lubi czekać."
      }
    ],
    "9": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias poprosił, żeby oprawkę, jeśli się znajdzie, trzymać osobno. „Gdyby ktoś przyszedł po nią z papierkiem od innego pracownika, proszę nie wierzyć.”"
      }
    ],
    "10": [
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias: „Pytam, bo on mi oddał pieniądze za oprawkę. Nie chciałem ich. Leżą u mnie w kopercie. Jak oprawka się znajdzie, oddam kopertę.” Numerek złożył w prostokąt bardzo ciasny."
      },
      {
        "kto": "Kuba Marlow, po wypłacie",
        "tekst": "Czekał pod bramą z zeszytem w ręku. Powiedział: „Rata to nie wszystko. Można się dogadać inaczej, jak ktoś ma dostęp do rzeczy, które ludzie zostawiają w tramwajach.” Poszedł, zanim padła odpowiedź."
      }
    ]
  },
  "prolog": [
    {
      "kto": "Słup ogłoszeniowy",
      "tekst": "„Nocne okienko, biuro rzeczy znalezionych. Pokój służbowy, pensja, dyskrecja. Bez referencji. Zgłoszenia: zaplecze tramwajowe, wejście od podwórza.” Pod spodem odrywane paski. Numer na twoim odcinku rozmył deszcz."
    },
    {
      "kto": "Umowa",
      "tekst": "Podpisana nieczytelnie w imieniu „Zarządu Nieruchomości Cooper”. Pokój służbowy: Cooper Street 9. Karta pracownika: stanowisko „dyżurny”, pole nazwiska puste."
    }
  ]
}
```
