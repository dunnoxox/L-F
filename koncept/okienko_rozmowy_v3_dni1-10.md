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
      "co_widac": "W mankiecie tkwi kwit z tego biura, numer 0417, sprzed sześciu tygodni. Odręcznie: „Prawa wydana bez wpisu. Lewa czeka. S.H.” W księdze wydań nie ma wpisu o tym numerze, w tym miejscu wyrwano stronę 41.",
      "co_z_tego_wynika": "Thomas już tu był i dostał coś, czego nigdzie nie zapisano. Poprzednik wydawał rzeczy poza księgą."
    },
    {
      "sekret_id": "d1_biala_nic",
      "co_widac": "Przy kciuku rękawiczki biała nić, zszyta krzywo, ściegiem krawieckim, a pod nią starsza, brązowa, przetarta.",
      "co_z_tego_wynika": "Ellen sama kiedyś zszyła rękawiczkę brązową nicią. Thomas położył na tym swoją, białą, żeby szew trzymał dłużej."
    }
  ],
  "wejscie": "Dobry wieczór. Thomas Ward. Zgubiłem lewą rękawiczkę mojej żony, w tramwaju czwórce. Ellen zmarła w lutym. W niedzielę idę na cmentarz i nie chcę iść z jedną.",
  "rozmowa": [
    {
      "tekst": "Jak wygląda ta rękawiczka?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brązowa skóra, damska, mały rozmiar. Przy kciuku zszyłem ją białą nitką, bo ciemnej w domu nie było. Krzywo, ale trzyma.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Biała nitka na brązowej skórze? Czemu nie u kaletnika?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo tym razem to ja miałem zszyć. Ellen przez czterdzieści lat cerowała po mnie wszystko, raz mogłem ja. Ręka mi lata, więc wyszło, jak wyszło.",
          "mina": "emocja"
        },
        {
          "tekst": "Jak sprawdzić, że to ta, a nie podobna?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Drugą mam w kieszeni, o. Wystarczy położyć je kciukami do siebie: w prawej nitka czarna, w lewej biała. Czarna skończyła mi się w połowie roboty.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Gdzie i kiedy zginęła?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W czwórce, wczoraj wieczorem, jak jechałem do Doków. Leżała mi na kolanie i na zakręcie zsunęła się pod siedzenie. Zauważyłem dopiero w domu.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Po co wieczorem do Doków?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Do córki, do Claire. W czwartki gotuje rosół i udaje, że przypadkiem wyszło za dużo. Ona nie wie, że rękawiczka zginęła, i wolałbym, żeby tak zostało.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "A jeśli Claire sama tu przyjdzie pytać?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "To proszę jej powiedzieć, że wszystko się znalazło. Ona martwi się o mnie bardziej niż ja o siebie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Po co wozić rękawiczki żony tramwajem?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Noszę je w kieszeni płaszcza, jedną w drugiej. Jakbym trzymał ją za rękę. Głupie, wiem.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Wcale nie głupie. Długo byliście razem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czterdzieści cztery lata. Poznaliśmy się w tramwaju, w dwójce, której już nie ma. Dlatego w niedzielę chcę jej zanieść obie.",
          "mina": "emocja"
        }
      ]
    },
    {
      "tekst": "To pierwsza wizyta w tym biurze?",
      "ton": "niewygodne",
      "wymaga": null,
      "gasi": "kwit",
      "odpowiedz": "Pierwsza. Z urzędami się nie zadaję.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "To skąd w mankiecie kwit z tego biura, numer 0417?",
          "ton": "niewygodne",
          "wymaga": "d1_kwit_0417",
          "klucz": "kwit",
          "odpowiedz": "No dobrze, byłem tu. Sześć tygodni temu zgubiłem prawą. Taki młody człowiek, Sam, oddał mi ją od ręki. Powiedział, że wpisu nie trzeba, bo to pamiątka, a nie zguba. Wstyd mi było, że gubię drugi raz.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Sam mówił coś jeszcze?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Że lewa też kiedyś przyjdzie, bo rękawiczki chodzą parami. I żebym o nim za dużo nie opowiadał. To nie opowiadałem.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "W mankiecie jest kwit z tego biura, numer 0417. Skąd?",
      "ton": "niewygodne",
      "wymaga": "d1_kwit_0417",
      "klucz": "kwit",
      "odpowiedz": "No dobrze, byłem tu już. Sześć tygodni temu zgubiłem prawą. Taki młody człowiek, Sam, oddał mi ją od ręki. Powiedział, że wpisu nie trzeba, bo to pamiątka, a nie zguba. Wstyd mi było, że gubię drugi raz.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Sam mówił coś jeszcze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Że lewa też kiedyś przyjdzie, bo rękawiczki chodzą parami. I żebym o nim za dużo nie opowiadał. To nie opowiadałem.",
          "mina": "neutralna"
        },
        {
          "tekst": "Nie ma się czego wstydzić. Każdy coś gubi.",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Ale nie dwa razy to samo, po jednej naraz. Ellen by powiedziała, że robię to specjalnie, żeby mieć z kim pogadać.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Pod białą nicią jest starszy szew, brązowy. Czyj?",
      "ton": "niewygodne",
      "wymaga": "d1_biala_nic",
      "odpowiedz": "Ellen. Szyła wieczorem przed telewizorem, nawet nie patrzyła na igłę. Swoją białą dołożyłem po lutym, bo jej nitka się przecierała. Nie umiałem jej wypruć.",
      "mina": "emocja"
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
        "tekst": "Dziękuję za rękawiczkę. W niedzielę jadę z Claire na cmentarz i położę obie na kamieniu, choćby na godzinę. Claire pyta, kim jest młody człowiek, który wcześniej oddał mi prawą bez papierka. Powiedziałem, że nie wiem, choć wiem. — T. Ward"
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda ta koperta?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brązowa, z jedną zszywką. Zszywka wbita krzywo, bo kierownik zszywa na stojąco i w biegu.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jest na niej jakieś nazwisko?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Moje, ołówkiem: Vale, przez V. I kwota w rogu, 129. Dziewiątka wygląda jak ósemka, ale to dziewiątka.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Gdzie i o której ją zgubiłaś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, o szóstej rano, po nocce. Położyłam ją obok, żeby zapiąć torbę, i przysnęłam. Obudziłam się na pętli, już bez koperty.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Po nocce? To od której jesteś na nogach?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Od wczoraj, od dziewiątej wieczorem. Potem mała do szkoły, potem tutaj. Śpię w tramwajach i tak to się potem kończy.",
          "mina": "mowi"
        },
        {
          "tekst": "Ktoś siedział obok, kiedy przysnęłaś?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie patrzyłam. Rano jedenastką jadą same takie jak ja, każda z zamkniętymi oczami. Nie chcę nikogo oskarżać. Chcę kopertę.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Skąd pewność, że było w niej równo 129 dolarów?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Bo liczyłam. Trzy noce po czterdzieści trzy, razem sto dwadzieścia dziewięć. Przeliczyłam trzy razy, zanim wsiadłam.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Tylko trzy noce? Tydzień ma więcej.",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Miałam cztery. Za czwartą nie dostałam. To długa historia, a ja nie mam siły na długie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto zdecydował, że za czwartą nie dostaniesz?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Iris Bell. Zarządza naszą kamienicą, odbiera za nas wypłaty z pralni i rozdaje w kopertach. Mieszkamy u niej, więc nikt się nie stawia.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Na co pójdą te pieniądze?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Na czynsz, jutro termin. Za spóźnienie zarządczyni dolicza dwadzieścia dolarów kary. Czyli z każdym dniem tutaj robi mi się z tego sto dziewięć.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "W kopercie jest lista nocy. Czwarta przekreślona. Dlaczego?",
      "ton": "niewygodne",
      "wymaga": "d1_lista_nocy",
      "odpowiedz": "W czwartek wyszłam o północy, bo mała miała gorączkę. Iris Bell, nasza zarządczyni, skreśliła mi całą noc, nie pół. Cztery godziny przerobiłam za darmo.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Czemu się z nią nie kłóciłaś?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo wynajmuje mi pokój i załatwiła mi tę pralnię. Jak się pokłócę, nie mam ani jednego, ani drugiego. Policz sobie.",
          "mina": "neutralna"
        },
        {
          "tekst": "A córka? Już zdrowa?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zdrowa, dzięki. Ada, dziesięć lat, twarda sztuka. Dziś sama zrobiła sobie kanapki do szkoły. I mnie też.",
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
      "reakcja": "No to pięknie. Jutro czynsz, a ja z pustymi rękami. Przyjdę rano z kierownikiem, niech on poświadczy.",
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
    },
    {
      "sekret_id": "d2_serwetka_trzy",
      "co_widac": "W kieszeni plecaka serwetka z trzema wersjami oświadczyn, dwie przekreślone. Pod spodem paragon z lombardu na pierścionek na raty, 150 $.",
      "co_z_tego_wynika": "Jonah ćwiczy oświadczyny, a pierścionek kupił na raty, więc obie rzeczy są jego tajemnicą."
    }
  ],
  "wejscie": "Cześć, Jonah. Zgubiłem plecak w jedenastce, czarny, z pękniętą klamrą. Potrzebuję go przed siódmą rano, bo w kieszeni jest coś ważnego. Naprawdę ważnego.",
  "rozmowa": [
    {
      "tekst": "Co jest w tym plecaku?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Ładowarka, książka, kupa starych biletów. I pudełko, w kieszeni od strony pleców. Pudełko jest najważniejsze.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co jest w pudełku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Prezent. Niespodzianka. Więcej nie powiem, bo zapeszę.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dla kogo ta niespodzianka?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Dla June. To moja dziewczyna, pracuje w piekarni, wstaje o czwartej. O siódmej wpada do domu na kawę i wtedy chcę ją o coś zapytać.",
              "mina": "emocja"
            }
          ]
        },
        {
          "tekst": "Po co ci kupa starych biletów?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Każdy jest z kursu, którym jechałem z June. Na odwrocie piszę datę. Wiem, że to dziwne. Znaczy nie dziwne, tylko... no dobra, dziwne.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Gdzie i kiedy go zostawiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, wczoraj wieczorem. Wcisnąłem go nogą pod składane siedzenie przy drzwiach, żeby June miała gdzie stanąć. I wysiadłem za nią jak cielę.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Wysiadłeś bez plecaka i nic cię nie tknęło?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Patrzyłem na nią, nie na plecak. Skapnąłem się w domu, jak chciałem sprawdzić, czy pudełko dalej jest. Całą noc nie spałem.",
          "mina": "mowi"
        },
        {
          "tekst": "Kim jest June?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Moją dziewczyną. Dwa lata i trzy miesiące, liczę. Pracuje w piekarni, pachnie drożdżówką nawet w niedzielę. Dla niej jest to, co leży w plecaku.",
          "mina": "emocja"
        }
      ]
    },
    {
      "tekst": "Co takiego stanie się o siódmej rano?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "O siódmej June wpada z piekarni na kawę. Chcę ją wtedy o coś zapytać. O coś, o co pyta się raz w życiu. Dlatego potrzebuję plecaka.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "A jak powie „nie”?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To będzie najgorszy poranek w moim życiu. Ale wolę usłyszeć „nie”, niż dalej nie wiedzieć.",
          "mina": "emocja"
        },
        {
          "tekst": "Wiesz już, jak ją zapytasz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Mam trzy wersje na serwetce. Dwie skreśliłem. Trzeciej się boję, bo jest krótka i nie ma się za czym schować.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Na paragonie jest 40 dolarów wpłaty, reszta w ratach. Stać cię na to?",
      "ton": "niewygodne",
      "wymaga": "d2_paragon_raty",
      "odpowiedz": "Nie stać. Jestem kurierem, wziąłem na sześć rat. Ale jak nie teraz, to kiedy? I tak, wiem, jak to brzmi.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "June wie, że pierścionek jest na raty?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie wie i się nie dowie, dopóki nie spłacę. Kazałaby oddać i kupić za to pralkę. Znam ją.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Na serwetce są trzy wersje oświadczyn. Którą powiesz?",
      "ton": "niewygodne",
      "wymaga": "d2_serwetka_trzy",
      "odpowiedz": "Trzecią, tę krótką. Dwie pierwsze brzmiały jak reklama banku. Tylko nie pokazuj tej serwetki nikomu, serio.",
      "mina": "emocja"
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
    },
    {
      "sekret_id": "d2_naklejka_zielona",
      "co_widac": "Na zewnątrz futerału zielona naklejka z numerem inwentarzowym 0334 i pieczątką Konserwatorium, częściowo zdrapana paznokciem.",
      "co_z_tego_wynika": "Hana próbowała zdrapać numer inwentarzowy, żeby futerał wyglądał na jej własny."
    }
  ],
  "wejscie": "Dobry wieczór. Hana Moreau, skrzypaczka. Zgubiłam futerał ze skrzypcami w czwórce. O ósmej rano mam przesłuchanie do orkiestry i bez tych skrzypiec nie mam po co przychodzić.",
  "rozmowa": [
    {
      "tekst": "Jak wygląda futerał?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarny, sztywny, mosiężne zamki. Na wierzchu zielona naklejka, a rączka owinięta czerwoną taśmą, bo skóra się przetarła.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co to za naklejka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Zwykła. Ozdobna. Ze sklepu muzycznego. Nic nie znaczy.",
          "mina": "klamie"
        },
        {
          "tekst": "Co jest w środku oprócz skrzypiec?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Kalafonia, jedwabna szmatka i nuty Mendelssohna z moimi zapiskami ołówkiem. Po tych zapiskach poznam je z zamkniętymi oczami.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Gdzie go zostawiłaś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W czwórce, w ostatnim kursie. Postawiłam między nogami, zadzwoniła mama i wysiadłam z telefonem przy uchu. Bez futerału.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co takiego powiedziała mama?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Że wszyscy trzymają kciuki. Cała ulica wie o przesłuchaniu. Mama już upiekła ciasto na „po wszystkim”.",
          "mina": "emocja"
        },
        {
          "tekst": "Skrzypaczka zapomina skrzypiec?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wiem, jak to wygląda. Od dwóch dni prawie nie śpię, ćwiczę po dziesięć godzin. Człowiek wtedy zapomina własnego nazwiska.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Czyje to skrzypce?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Moje. Oczywiście, że moje. Gram na nich od siedmiu lat.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Od siedmiu lat? To gdzie je kupiłaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dostałam. Od... od nauczycielki. Dawno. Naprawdę muszę się z tego tłumaczyć przed przesłuchaniem?",
          "mina": "klamie"
        },
        {
          "tekst": "W środku powinna być etykieta lutnika. Co na niej jest?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jest jakaś, mała. Nazwiska nie pamiętam. Od lat tam nie zaglądałam.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Co się stanie, jeśli nie dostaniesz ich przed ósmą?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Zagra ktoś inny. Weszłam z listy rezerwowej, drugiego terminu nie będzie. Bez skrzypiec nie mam po co tam iść.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Daleko masz stąd do filharmonii?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Cztery przystanki. Rozgrzewka jest o siódmej, więc jak wyjdę stąd przed szóstą, zdążę jeszcze rozruszać palce.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Pod pokrywą jest kartka: „Wypożyczone do 7 sierpnia”. Dziś jest dziesiąty.",
      "ton": "niewygodne",
      "wymaga": "d2_etykieta_wyp",
      "odpowiedz": "Termin minął w sobotę. Komisja, która przedłuża, zbiera się dopiero w czwartek. Nie jestem złodziejką. Spóźniłam się trzy dni, a przesłuchanie mam za parę godzin.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Konserwatorium wie, że skrzypce jeździły po nocy tramwajem?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie wie. Jak się dowie, nie wypożyczą mi już nawet pulpitu. Chcę zagrać i w czwartek sama je odnieść.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Numer na naklejce ktoś zdrapywał paznokciem. Kto?",
      "ton": "niewygodne",
      "wymaga": "d2_naklejka_zielona",
      "odpowiedz": "Ja. W tramwaju, z nerwów. Ten numer wygląda jak metka na cudzej rzeczy. Chciałam, żeby przez jeden dzień były moje.",
      "mina": "emocja"
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

**Ines Calloway, 61, emerytka.** Potrzeba: parasol z kaczką i zgoda na ogłoszenie o kocie na słupie. Lęk: że ktoś zdejmie kartkę. Sekret: kota nie ma, kartki są dla kogoś innego. Tik: poprawia innych przed końcem zdania. Wątek: Ogłoszenie (słup, odpowiedzi, Kanał). Moment gwiazdy: „Proszę nie czytać między wierszami. Ich tam jest dwa razy więcej.”

```json
{
  "id": "d2_ines",
  "dzien": 2,
  "postac": "Ines Calloway, 61",
  "glos": "Spokojna, sucha, mówi tonem urzędniczki na emeryturze. Poprawia innych, zanim skończą zdanie.",
  "typ": "uczciwa, z ukrytym celem",
  "rzecz": "Czarny parasol z rączką w kształcie kaczki",
  "wnetrze": [
    {
      "sekret_id": "d2_parasol_kartka",
      "co_widac": "W rączce parasola zwinięta kartka: „Szukam kota, rudego, od zimy. Odpowiedzi na słupie przy wejściu.” Rączka ma ślad kleju od taśmy.",
      "co_z_tego_wynika": "Ines wiesza ogłoszenia o kocie na słupie. Kota nie ma. Ktoś odpowiada na te kartki i zostawia coś w okienku."
    }
  ],
  "wejscie": "Ines Calloway. Zgubiłam parasol z rączką w kształcie kaczki, w czwórce, wczoraj. Poza tym chciałabym zapytać, czy wolno mi wieszać ogłoszenia na słupie przy wejściu. Kot, rudy, od zimy.",
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten parasol?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarny, automatyczny, z drewnianą rączką w kształcie kaczki. Kaczka ma odłamany dziób z lewej strony. Kupiłam go po zeszłorocznej wichurze.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Kaczka bez dzioba? Nietypowa rączka.",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Dlatego go kupiłam. Czarnych parasoli jest w tym mieście sto tysięcy. Z kaczką bez dzioba jeden. Lubię rzeczy, które da się rozpoznać.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Gdzie go zostawiłaś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W czwórce, na haczyku przy tylnych drzwiach. Wysiadałam na pętli z torbami w obu rękach. Przypomniałam sobie, jak tramwaj już zakręcał.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co robisz nocą na pętli czwórki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Rozwieszam ogłoszenia. Na pętli ludzie czekają i z nudów czytają wszystko, nawet słupy.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "O jakie ogłoszenie pytasz?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "„Szukam kota, rudego, od zimy. Odpowiedzi na słupie przy wejściu”. Wasz słup stoi w dobrym miejscu. Wolę zapytać, niż żeby mi je ktoś zrywał.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jak się wabi ten kot?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Fryderyk. Rudy, z białą łapką. Na wołanie nie przychodzi, taki już ma charakter.",
          "mina": "klamie"
        },
        {
          "tekst": "Od zimy? Po takim czasie koty raczej nie wracają.",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wiem, ile żyje kot na ulicy. Ale na te ogłoszenia ktoś odpisuje. Zostawia kartki, nocą. Nie widziałam kto. Dopóki odpisuje, wieszam dalej.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co jest na tych kartkach?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Godziny. Numery linii. Raz samo „jeszcze nie”. O kocie ani razu. Proszę z tego nie wyciągać wniosków, ja też jeszcze nie wyciągam.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "W rączce parasola jest zwinięte ogłoszenie o kocie. Po co je tam chowasz?",
      "ton": "niewygodne",
      "wymaga": "d2_parasol_kartka",
      "odpowiedz": "Zapasowa kopia. Żeby mieć przy sobie, kiedy deszcz rozmoczy tamte. Nic więcej.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "To na pewno jest ogłoszenie o kocie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Tak. O kocie. I trochę dla tych, którzy też kogoś szukają. Proszę nie czytać między wierszami, tam jest ciasno.",
          "mina": "klamie"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "ines_potwierdz",
      "etykieta": "Potwierdź ogłoszenie i przybij pieczątkę okienka",
      "reakcja": "Dziękuję. Z pieczątką nikt go nie zerwie. Gdyby ktoś zostawił dla mnie odpowiedź, proszę jej nie czytać, tylko odłożyć.",
      "zysk": "Parasol wraca do Ines, a ogłoszenie ma pieczątkę, więc nikt go nie zdejmie.",
      "strata": "Okienko jest teraz widoczne na słupie, a ktoś przeczyta pieczątkę jako zaproszenie.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Ines Calloway: „Ktoś odpowiedział na kartkę. Zostawił coś pod okienkiem. Proszę nie otwierać przy ludziach. — I.C.”"
      }
    },
    {
      "akcja": "ines_odmow",
      "etykieta": "Wydaj parasol, ogłoszenia odmów",
      "reakcja": "Rozumiem. Powieszę na innym słupie. Szkoda, wasz stał najlepiej.",
      "zysk": "Okienko nie robi za tablicę ogłoszeń i nikt nie zapyta o słup.",
      "strata": "Ines znajdzie inny słup, a kartki będą wisieć dalej, tylko bez Twojej wiedzy.",
      "echo": {
        "za_dni": 4,
        "forma": "list",
        "tekst": "Ines Calloway: „Powiesiłam kartkę na innym słupie. Odpowiedzi też tam przychodzą. Dziękuję za parasol. — I.C.”"
      }
    },
    {
      "akcja": "ines_zdejmij",
      "etykieta": "Wydaj parasol i zdejmij ogłoszenie ze słupa",
      "reakcja": "Zdejmiecie też to, co już wisi? Tam są cudze odpowiedzi, nie tylko moje kartki. No dobrze. Przynajmniej wiem, na kogo tu trafiłam.",
      "zysk": "Słup przy wejściu jest czysty, a do biura nikt nie przynosi kartek.",
      "strata": "Ktoś czekał na odpowiedź na tym słupie i nie dostanie jej.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Mężczyzna w szarym kapeluszu: „Zgodnie z regulaminem. Szukałem kartki o kocie. Słup jest pusty. Zapiszę, kto go opróżnił.”"
      }
    }
  ],
  "rola": "emerytka z ogłoszeniami o kocie",
  "watki": [
    "ogloszenie"
  ],
  "tik": "poprawia innych przed końcem zdania",
  "potrzeba": "parasol i zgoda na ogłoszenie na słupie",
  "slad": "kartka o kocie w rączce, odpowiedzi na słupie"
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
      "co_widac": "Na ekranie wisi wiadomość od „Lena” z czwartku, 23:48: „Nie wracaj do domu. Jadę po ciebie w sobotę.” Pod etui złożone stare zdjęcie dwóch dziewczynek, podpisane „Maya i Lena”.",
      "co_z_tego_wynika": "To telefon Mai. Siostra kazała jej nie wracać do męża, a telefon został w tramwaju po tej wiadomości."
    }
  ],
  "wejscie": "Dobry wieczór. Evan Doyle, a to Lena, siostra mojej żony. Oboje przyszliśmy po telefon Mai, która zaginęła w czwartek. Zostawiła go w jedenastce. Policja daje sprawie czas do wtorku, siódmego września, a potem ją zamyka. Nie mamy czasu.",
  "wejscie_kto": "maz",
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten telefon?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "maz",
      "odpowiedz": "Czarny, w skórzanym etui. Róg etui się odkleja. Kupiłem je Mai na rocznicę i sto razy mówiłem, żeby podkleiła.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Znasz kod do tego telefonu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Maya nie miała kodu. Nie mieliśmy przed sobą tajemnic.",
          "mina": "klamie"
        },
        {
          "tekst": "Lena, ty też poznajesz to etui?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Poznaję. Pod spodem Maya trzyma nasze zdjęcie z dzieciństwa. Evan o nim nie wie. Prawda, Evan?",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Kiedy Maya go zgubiła?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "siostra",
      "odpowiedz": "W czwartek wieczorem, w jedenastce. Tylko że Maya nie gubi rzeczy. Zostawia je tam, gdzie ktoś przechowa i nie będzie pytał po co.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Zostawia? Czyli zrobiła to specjalnie?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Nie wiem. Tak mi się powiedziało. Od czwartku nie miałam od niej ani słowa. Naprawdę.",
          "mina": "klamie"
        },
        {
          "tekst": "Evan, skąd wiecie, że akurat w jedenastce?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Od policji. Motorniczy oddał telefon do zajezdni i zapamiętał kurs. Posterunkowy Reyes powiedział wprost: bez telefonu we wtorek zamyka sprawę.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Jak wyglądał wasz ostatni wieczór?",
      "ton": "niewygodne",
      "wymaga": null,
      "kto": "maz",
      "odpowiedz": "Zwyczajnie. Żadnej kłótni. Zjedliśmy kolację, Maya poszła do pracy i nie wróciła.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Do pracy po kolacji? Na noc?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Jest elektryczką, bierze nocne awarie. Wychodziła o różnych porach. Nie pilnowałem jej, jeśli o to chodzi.",
          "mina": "neutralna"
        },
        {
          "tekst": "Miała powód, żeby nie wrócić?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Żadnego. Spokojne małżeństwo. Oboje dużo pracowaliśmy, to wszystko.",
          "mina": "klamie"
        },
        {
          "tekst": "Lena, tak to wyglądało?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Mnie przy tej kolacji nie było. Evan mówi, że zwyczajnie, to pewnie tak mu się wydawało.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Evan, co zrobisz z telefonem, jeśli go dostaniesz?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "maz",
      "odpowiedz": "Zaniosę Reyesowi na komisariat przy Rynku. Jeszcze tej nocy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "A jeśli telefon zostanie u nas w depozycie?",
          "ton": "niewygodne",
          "wymaga": null,
          "ustawia": "d3_evan_oferta",
          "kto": "maz",
          "odpowiedz": "To policja dostanie go za późno. Zróbmy inaczej: sto dolarów od ręki i niczego nie trzeba wpisywać. Zgoda?",
          "mina": "neutralna"
        },
        {
          "tekst": "Lena, a ty co byś z nim zrobiła?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Schowałabym u siebie, aż Maya się odezwie. To jej rzecz. Nie Evana i nie policji.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Na ekranie jest wiadomość od Leny: „Nie wracaj do domu”. Co to znaczy?",
      "ton": "niewygodne",
      "wymaga": "d3_telefon_wiadomosc",
      "kto": "siostra",
      "odpowiedz": "To ja napisałam. Maya zadzwoniła w czwartek, że boi się wracać. Jak Evan to przeczyta, przyjdzie do mnie. Proszę, nie dawaj mu tego telefonu.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Evan, czego Maya miała się bać?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Niczego. Lena od lat nastawia ją przeciwko mnie. Napisała głupotę i teraz nie wie, jak z tego wybrnąć.",
          "mina": "klamie"
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
      "strata": "Telefon idzie do Evana bez podpisu i bez wpisu. Lena widzi kopertę, a Evan zapamięta, że biuro ma cenę, i w przyszłym tygodniu przyjdzie po więcej.",
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
  "wnetrze": [
    {
      "sekret_id": "d3_rachunek_budzik",
      "co_widac": "Pod tylną pokrywką budzika złożony rachunek z warsztatu: 18 $ za wymianę mechanizmu, na dole dopisek „dzwonek do wymiany”.",
      "co_z_tego_wynika": "Dana naprawia stary budzik zamiast kupić nowy. Dwanaście lat to jej jedyny zegar i jej strach, że zaśpi."
    }
  ],
  "wejscie": "Cześć, Dana Ruiz, mechanik w zajezdni. Zgubiłam budzik w szóstce, taki blaszany, z dwoma dzwonkami. Bez niego nie wstanę na czwartą, a w zajezdni nikt nie czeka, jak ktoś się spóźni.",
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten budzik?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Blaszany, okrągły, dwa dzwonki na górze. Mam go dwanaście lat. Dzwoni tak, że sąsiad zza ściany wstaje razem ze mną.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Ma jakiś znak szczególny?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Od spodu naklejkę „Mama”, bo od mamy go dostałam. I wgniecenie przy prawym dzwonku, jak zleciał z lodówki.",
          "mina": "neutralna"
        },
        {
          "tekst": "Sąsiad się nie skarży?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Raz przyszedł. Powiedziałam, że ma budzenie gratis, i od tej pory zostawia mi pod drzwiami ogórki. Układ jest.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Na którą jest nastawiony?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Na czwartą piętnaście. Wskazówka od budzenia jest czerwona i krzywa, sama ją prostowałam kombinerkami.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Czwarta piętnaście? To o której zaczynasz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Za pięć piąta mam leżeć w kanale pod tramwajem. Jak wstanę kwadrans po czwartej, zdążę na kawę. Jak nie, to na nic.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Długo już pracujesz w zajezdni?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Jedenaście lat, znam tam każdy zawias. A o waszym okienku wiem tyle, że w gazecie od miesiąca wisi to samo ogłoszenie: „praca nocna, bez referencji”. Długo nikt nie chciał, co?",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Telefon nie może cię budzić?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Telefon wyłączam przez sen, jedną ręką. Ten skacze po szafce i trzeba wstać, żeby go zdusić. Na mnie działa tylko przemoc.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Po co wozisz budzik tramwajem?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Bo nocowałam u siostry i wzięłam go ze sobą. Samego w domu nie zostawię. Śmiej się, proszę bardzo.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co robiłaś u siostry?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Pilnowałam jej dzieciaków, bo miała nockę. Trójka. Po takim wieczorze człowiek zostawiłby w tramwaju własną głowę.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Pod pokrywką jest rachunek z warsztatu. Naprawiasz go zamiast kupić nowy?",
      "ton": "niewygodne",
      "wymaga": "d3_rachunek_budzik",
      "odpowiedz": "Osiemnaście dolarów za mechanizm. Nowy kosztuje dziesięć. Ale ten dzwoni tak, jak dzwonił u mamy w kuchni. Na inny dźwięk bym nie wstała.",
      "mina": "emocja"
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda ta paczka?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Płaska, w szarym płótnie, przewiązana sznureczkiem. W środku nieduża kasetka na kłódkę. Nic, na co warto patrzeć.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co jest w kasetce?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Papierki lokatorów. Pokwitowania, drobne rozliczenia. Nudy, kochanie.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Pokwitowania pod kłódką?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Ludzie są wścibscy, a cudze długi to ulubiona lektura sąsiadów. Kłódeczka kosztuje dolara, spokój w kamienicy jest bezcenny.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie dokładnie została?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W szóstce, w ostatnim kursie, na półce nad siedzeniem. Zawsze tam kładę i zawsze pamiętam. Wczoraj pierwszy raz nie.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Wozisz papiery lokatorów nocnym tramwajem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Lokatorzy pracują na zmiany i odbierają o różnych porach. Tramwaj to najtańszy goniec, a ja nie lubię przepłacać.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co cię wczoraj tak rozproszyło?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jedna lokatorka spóźnia się z czynszem i liczyłam w głowie jej karę. Człowiek zamyśli się nad cudzą biedą i sam gubi.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Kim są lokatorzy, którzy na nią czekają?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Dwadzieścia rodzin spod dziewiątki. Zbieram od nich zaliczki na remont i trzymam ich dokumenty, żeby się nie pogubiły. Zabawne, prawda? Akurat mnie się zgubiło.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Czemu nikt z nich nie przyszedł po nią sam?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo to moja odpowiedzialność. Nie lubię, jak ktoś obcy grzebie w sprawach moich lokatorów. Nikt by nie lubił.",
          "mina": "neutralna"
        },
        {
          "tekst": "Do kiedy paczka musi do nich wrócić?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Najlepiej jeszcze dziś. Nie lubię naciskać, ale moi lokatorzy źle śpią, kiedy ich sprawy leżą w cudzej szufladzie.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Wydanie idzie z wpisem do księgi. Podpiszesz odbiór?",
      "ton": "rzeczowe",
      "wymaga": null,
      "ustawia": "d4_koperta_oferta",
      "odpowiedz": "Podpiszę, Iris Bell. Choć poprzednik nie wpisywał i wszystkim było wygodniej. Chciałabym zostawić kopertkę za fatygę. To nie opłata, tylko wyraz uznania. Sto dwadzieścia dolarów.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Poprzednik brał takie kopertki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Sam był bardzo życzliwym człowiekiem. Rozumiał, że nie wszystko musi mieć numerek. Szkoda, że tak nagle odszedł.",
          "mina": "neutralna"
        },
        {
          "tekst": "A jeśli wpis mimo wszystko będzie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "To będzie. Poczekam na kwit jak każdy. Tylko że nowi zwykle sami odchodzą po pierwszym tygodniu, a ja zostaję. Mówię to życzliwie.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "W kasetce widać paszport z wyciętą stroną. Czyj?",
      "ton": "niewygodne",
      "wymaga": "d4_blankiet_kasetka",
      "odpowiedz": "Kogoś, kto w tym tygodniu wyjeżdża. Jeśli paczka tu zostanie, nie wyjedzie. Więcej wiedzieć nie trzeba, uwierz starszej kobiecie.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Na blankiecie stoi: „dla nocnej zmiany, bez wpisu”. Kto to pisał?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Twój poprzednik. Ładny charakter pisma, prawda? Umowa była prosta: ja nie pytam, co on robi po nocach, on nie pyta, co jest w płótnie.",
          "mina": "neutralna"
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
      "co_widac": "W notesie notatka: „E.D. zamówił ulotki z twarzą żony w czwartek o 22:15. Zgłoszenie zaginięcia złożył w piątek o 6:10.”",
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten notes?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarny, na spirali, do kieszeni. Wgnieciony z lewej strony, bo noszę go pod kaburą.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co w nim jest?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Notatki ze służby. Godziny, nazwiska. Nic, co wolno czytać przy okienku. To moje zmartwienie.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Gdzie go zostawiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, po dyżurze, na siedzeniu obok. Zagadałem się z motorniczym i wysiadłem bez notesu. Pierwszy raz od piętnastu lat.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Policjant wraca z dyżuru tramwajem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Mieszkam na końcu jedenastki. Radiowóz zostaje na komisariacie, a w tramwaju słyszę więcej niż za biurkiem.",
          "mina": "mowi"
        },
        {
          "tekst": "O czym rozmawiałeś z motorniczym?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "O czwartkowym kursie. To on znalazł pod siedzeniem telefon Mai Doyle. Czyli: pytałem, kto wtedy z nią wysiadał. Nie pamiętał.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Jak idzie sprawa Mai Doyle?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Powoli. Mąż zgłosił zaginięcie, siostra twierdzi, że nic nie wie. Czyli: dwoje ludzi i żadnego konkretu.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Do kiedy masz na nią czas?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Do wtorku, siódmego września, do szóstej rano. Potem akta idą do wydziału, a tam nikt nie pyta zaginionej, czy chce być znaleziona.",
          "mina": "neutralna"
        },
        {
          "tekst": "Wierzysz mężowi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wierzę godzinom. Na razie jego godziny mi się nie składają. Resztę zostawiam dla siebie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Można ci jakoś pomóc?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Można. Jak przy tym okienku zdarzy się coś dziwnego, zapisz godzinę i powiedz mi. Najlepiej zanim zapyta ktoś inny.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Evan dostał od nas telefon. Co z nim zrobił?",
      "ton": "niewygodne",
      "wymaga": "d3_maz_i_siostra:wydaj_evan|d3_maz_i_siostra:wez_100_evan",
      "odpowiedz": "Przyniósł mi go rano. Zablokowany. Kodu podobno nie zna, bo żona „nigdy nie miała kodu”. Czyli: albo ktoś założył go po czwartku, albo mąż nie znał własnej żony.",
      "mina": "neutralna"
    },
    {
      "tekst": "Telefon wzięła Lena. Co na to Evan?",
      "ton": "niewygodne",
      "wymaga": "d3_maz_i_siostra:wydaj_lena",
      "odpowiedz": "Dzwoni do mnie co godzinę, że siostra coś ukrywa. Lena mówi, że u niej telefon jest bezpieczny. Czyli: sprawdzam obie wersje.",
      "mina": "neutralna"
    },
    {
      "tekst": "Telefon leży u nas w depozycie. Co na to Evan?",
      "ton": "niewygodne",
      "wymaga": "d3_maz_i_siostra:zatrzymaj",
      "odpowiedz": "Dzwoni co godzinę. Powtarzam mu, że to teraz sprawa policji, nie jego. Niech telefon leży, dopóki nie przyjdę po niego z papierem.",
      "mina": "neutralna"
    },
    {
      "tekst": "W notesie stoi: „ulotki, czwartek 22:15”. O co chodzi?",
      "ton": "niewygodne",
      "wymaga": "d5_notes_ulotki",
      "odpowiedz": "Doyle zamówił ulotki z twarzą żony w czwartek o 22:15. Zaginięcie zgłosił w piątek o 6:10. Osiem godzin za wcześnie. Może zbieg okoliczności. To moje zmartwienie.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Skąd wiedział w czwartek, że żona nie wróci?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Dobre pytanie. Zadam mu je sam, jak będę miał notes w ręku. A na razie umówmy się, że nikt tu do niego nie zaglądał.",
          "mina": "neutralna"
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda ta teczka?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Szary skaj, klamra z przodu, na rogu naklejka inspekcji. Na klapie inicjały V.C. i numer czterdzieści siedem.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co jest w środku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Formularze, pieczątka, wykaz wydań z tego biura. Nikt spoza inspekcji nie ma prawa tam zaglądać. Jeśli ktoś zajrzał, chcę nazwisko.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Gdzie ją zostawiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W szóstce, o 4:10, na siedzeniu obok. Wysiadłem przy zajezdni bez teczki. Nie zdarza mi się to.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Inspektor jeździ nocnym tramwajem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Sprawdzam, czy tramwaje jeżdżą tak, jak stoi w grafiku. Nie jeżdżą. A skoro już pytamy: kto cię tu skierował? W aktach nie mam żadnego skierowania.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nikt. To było ogłoszenie w gazecie.",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "„Bez referencji”. Czytałem. Poprzedni dyżurny też był bez referencji. Zapiszę to sobie.",
              "mina": "neutralna"
            },
            {
              "tekst": "A kto skierował poprzedniego dyżurnego?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nikt. I to jest pierwsze pytanie mojej kontroli. Drugie brzmi: dlaczego wszystkim to pasowało.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co właściwie kontrolujesz w tym biurze?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czy księga wydań zgadza się z magazynem i z kwitami. Wpis, kwit, podpis. Czasem któregoś brakuje. W tej księdze brakuje całej strony czterdzieści jeden.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Kto wyrwał tę stronę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Księgę prowadził poprzedni dyżurny, Sam Holt. Od kilku tygodni nikt nie umie mi powiedzieć, gdzie on jest.",
          "mina": "neutralna"
        },
        {
          "tekst": "Za poprzednika wydania były w porządku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie wszystkie. Jedna rękawiczka wyszła bez księgi, jedna paczka bez wpisu. Dlatego potrzebuję teczki przed siódmą.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co będzie, jeśli teczki rano nie będzie?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Audyt przesunie się o tydzień. Przez tydzień ktoś zdąży poprawić księgę. Nie chcę nikomu dawać tego tygodnia.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "W wykazie dwie pozycje są dopisane innym tuszem, z parafą V.C. Kto dopisywał?",
      "ton": "niewygodne",
      "wymaga": "d5_wykaz_dopisany",
      "odpowiedz": "Ja. Pięć tygodni temu, z pamięci, po rozmowie z poprzednikiem. Bez dowodu. To niezgodne z regulaminem, więc proszę tego nie powtarzać.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Inspektor poprawia papiery po fakcie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Raz. Żeby wydania Holta w ogóle gdzieś istniały. Jeśli to wyjdzie, moja kontrola jest nieważna, a tej księgi nie przeczyta już nikt.",
          "mina": "neutralna"
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
      "etykieta": "Wydaj teczkę i potwierdź wczorajszy wpis o paczce 0412",
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten portfel?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brązowy, wytarty, na zatrzask. Mam go jedenaście lat, wygiął się pod moją kieszeń. Tylko on mi został z tamtego życia. Znaczy, ze starych rzeczy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Z jakiego „tamtego życia”?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Przejęzyczyłem się. Tylko tyle. Człowiek o tej porze gada, co mu ślina na język przyniesie.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Co w nim jest?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Prawo jazdy, dwadzieścia dolarów i zdjęcie córki. Tylko tyle, nic więcej.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Ile lat ma córka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Siedem. Na zdjęciu ma pięć, nowszego nie mam. Tylko nie pytaj, kiedy ją ostatnio widziałem.",
          "mina": "emocja"
        },
        {
          "tekst": "Na jakie nazwisko jest prawo jazdy?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Pell. Gustaw Pell. Gus. Tylko proszę nie zapisywać, że byłem w szlafroku.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Adres do wpisu?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Mill Street dwanaście. Nie, zaraz, piętnaście. Dwanaście to brat, ale on się wyprowadził.",
              "mina": "klamie"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Szlafrok pod płaszczem, w środku nocy. Co się stało?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Pokłóciłem się w domu i wyszedłem, jak stałem. Z żoną, z teściową, z obiema naraz. Tylko o rodzinie nie rozmawiajmy.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Może zadzwonić do domu, że nic ci nie jest?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Nie. Telefon jest tam, gdzie żona. Nie dzwonię. Tak będzie lepiej dla wszystkich.",
          "mina": "neutralna"
        },
        {
          "tekst": "Dokąd jedziesz o 5:40?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jedenastką do końca, a potem dalej. Daleko. Tylko nie pytaj dokąd. Jak nie wiesz, to nikomu nie powiesz.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A kto miałby pytać?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Ci, co znaleźli mnie poprzednim razem. Wtedy urzędnik wydał mnie z pieczątką, nawet z dwiema. Jak portfel tu zostanie, utknę, a tu mnie znajdą.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "W portfelu są dwa dowody: Pell i Ferro. To samo zdjęcie. Który jest twój?",
      "ton": "niewygodne",
      "wymaga": "d5_dwa_dowody",
      "odpowiedz": "Dwa? To się da wytłumaczyć. Jeden po dziadku. A który mój, nie powiem, bo to się zawsze źle kończy.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Dziadek miał twoją twarz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Dobrze, już dobrze. Jeden jest stary, drugi nowy. Ktoś mi pomógł zacząć od początku i o 5:40 mam tramwaj. Tylko proszę, nie wpisuj obu nazwisk.",
          "mina": "emocja"
        }
      ]
    },
    {
      "tekst": "Za zdjęciem córki leży 250 dolarów. Skąd tyle?",
      "ton": "niewygodne",
      "wymaga": "d5_gotowka_400",
      "odpowiedz": "To nie na życie, tylko na wyjazd. Wszystko, co mam. Tylko nie mów nikomu, ile.",
      "mina": "emocja"
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
  "wnetrze": [
    {
      "sekret_id": "d6_karteczka_krolik",
      "co_widac": "Pod doszytym uchem karteczka, pismo dorosłe: „Dla Zuzi, od taty. Jak się zgubi, niech ktoś odda.”",
      "co_z_tego_wynika": "Królik należy do dziewczynki o imieniu Zuzia, a ktoś dorosły przewidział, że się zgubi."
    }
  ],
  "wejscie": "Dobry wieczór, jestem Ada, mam dziesięć lat. Znalazłam królika przy pętli szóstki, trzy kroki od słupka. Chcę kwit, że zrobiłam to dobrze, bo mama mówi, że bez kwitu nie wiadomo.",
  "wejscie_jesli": {
    "d1_rosa:wydaj": "Dobry wieczór, jestem Ada, córka Rosy z pralni. Mama mówi, że dostała od was całą wypłatę. Znalazłam królika przy pętli szóstki, trzy kroki od słupka. Chcę kwit, że zrobiłam to dobrze.",
    "d1_rosa:odmow": "Dobry wieczór, jestem Ada, córka Rosy z pralni. Mama dostała mniej wypłaty, ale mówi, że to nie wasza wina. Znalazłam królika przy pętli szóstki, trzy kroki od słupka. Chcę kwit, że zrobiłam to dobrze.",
    "d1_rosa:wez_20": "Dobry wieczór, jestem Ada, córka Rosy z pralni. Mama płakała w kuchni, bo w kopercie brakowało pieniędzy. Nie wiem kto wziął. Znalazłam królika przy pętli szóstki. Chcę kwit, że zrobiłam to dobrze.",
    "d1_rosa:przywlaszcz": "Dobry wieczór, jestem Ada, córka Rosy z pralni. Mamie zginęła w tramwaju cała wypłata i nikt jej nie oddał, więc teraz bierze dodatkowe noce. Znalazłam królika przy pętli szóstki. Chcę kwit, że zrobiłam to dobrze, bo ja oddaję."
  },
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten królik?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Szary, pluszowy. Jedno ucho ma doszyte czerwoną nitką. I dziurkę w nosie, jakby miał katar.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Ktoś go bardzo naprawiał. Myślisz, że jest czyjś ulubiony?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Na pewno. Jak się komuś nie chce, to nie przyszywa ucha, tylko kupuje nowego. Dlatego nie mogłam go tam zostawić.",
          "mina": "emocja"
        }
      ]
    },
    {
      "tekst": "Gdzie dokładnie go znalazłaś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Na ławce przy pętli szóstki, trzy kroki od słupka. Liczyłam. Siedział sam, jakby na kogoś czekał.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co robisz sama w nocy na pętli?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Mama ma nocną zmianę w pralni, a mnie się nudzi. Chodzę po pętli i liczę kamienie. Wczoraj były sto dwa.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Mama wie, że tam chodzisz?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Wie i się gniewa. Mówi, że brać nic nie wolno, oddawać trzeba, a po pętli nie łazić. Dwa z trzech robię dobrze.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Ktoś jeszcze był wtedy przy ławce?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Pan konduktor z szóstki palił przy budce. Patrzył na zegarek, którego nie miał. I jakaś pani z walizką, ale ona poszła, zanim doszłam.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Po co ci kwit?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Żeby było wiadomo, że znalazłam, a nie wzięłam. Pani w szkole mówi, że to duża różnica. A mama mówi, że bez kwitu nikt nie uwierzy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co ma być na tym kwicie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Że Ada Vale, dziesięć lat, znalazła królika. Dużymi literami, bo pani w szkole czyta tylko duże.",
          "mina": "mowi"
        },
        {
          "tekst": "Jaki adres wpisać?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Cooper Street dziewięć, drugie piętro. Nad nami mieszka ktoś nowy, u niego w pokoju jest zimno. Ojej. Pani Iris prosiła, żeby nie mówić adresu.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Czemu pani Iris każe milczeć o adresie?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "(szeptem) Bo pani Iris zabiera mieszkanie, jak ktoś za dużo gada. Mama tak mówi, kiedy myśli, że śpię.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Pod uchem królika jest karteczka. Czytałaś ją?",
      "ton": "niewygodne",
      "wymaga": "d6_karteczka_krolik",
      "odpowiedz": "Czytałam. „Dla Zuzi, od taty. Jak się zgubi, niech ktoś odda”. No to oddaję. Tylko nie wiem, kto to Zuzia, i dlatego chcę kwit.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Tata Zuzi z góry wiedział, że królik się zgubi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Też o tym myślałam. Może Zuzia dużo gubi. A może dużo jeździ. Ten nowy nad nami też ma córkę, ale jej nie wolno wychodzić.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Na odcinku z puszki jest numer z bloczka pani Iris. Znasz taką puszkę?",
      "ton": "niewygodne",
      "wymaga": "d6_puszka_odcinek",
      "odpowiedz": "(szeptem) Widziałam takie u pani Iris w kuchni, nad czajnikiem. Wszystkie mają dno, które się rusza. Nie mów nikomu, że mówiłam.",
      "mina": "emocja"
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten zegarek?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Mosiężny, kieszonkowy, na łańcuszku. Na wieczku grawer: „za trzydzieści lat”. Żona mówi, że za trzydzieści lat to ja już nie będę wiedział, która godzina.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Trzydzieści lat czego?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Służby. Ale nie mojej. To zegarek dziadka mojej żony, też jeździł na szóstce. Przeżył trzech naczelników. Zegarek, nie dziadek.",
          "mina": "mowi"
        },
        {
          "tekst": "Konduktor bez zegarka. Jak pilnujesz kursów?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Na oko. I źle. Dziś dwa razy odjechałem za wcześnie, a raz ktoś biegł i nie zdążył. Nie lubię tego.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Kiedy go zgubiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "O 22:47, na pętli. Wiem co do minuty, bo spojrzałem, która godzina, i odłożyłem go na ławkę. I tyle go widziałem.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Na ławce przy pętli szóstki? Kto tam wtedy był?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jakaś mała liczyła kamienie. I ktoś zostawił na ławce pluszaka. Nic poza tym nie widziałem. Nie przyglądam się.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co wiozłeś tym ostatnim kursem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Ludzi, dwie torby i walizkę. Normalny kurs. Nic ponad to.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nikt cię nie prosił, żebyś o czymś nie mówił?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nikt nikogo o nic nie prosi. Po prostu wiem, że jak coś jedzie pod ławką, to lepiej nie pytać czyje.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Po co ci zegarek, skoro masz telefon?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Telefon mi pada w połowie zmiany, a zegarek nigdy. No i zegarek nie dzwoni do mnie o drugiej w nocy z pretensjami.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Kto dzwoni o drugiej z pretensjami?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Żona. Sprawdza, czy zjadłem. Trzydzieści lat po ślubie, a ona dalej myśli, że bez niej umrę z głodu. Ma rację.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Pod wieczkiem jest kartka z wykazu z dopiskiem „+ puszka (b.n.)”. Jaka puszka?",
      "ton": "niewygodne",
      "wymaga": "d6_zegarek_list",
      "odpowiedz": "Ktoś mi ją wsunął pod ławkę. Bez nadawcy, „b.n.”. Dopisałem do wykazu, żeby nie mieć kłopotów, jakby co. Nie pytam, kto ma ją odebrać.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "To nie pierwsza taka puszka, prawda?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Trzecia w tym miesiącu. Zawsze ostatni kurs, zawsze pod ławką po lewej. Rano już jej nie ma. Mnie płacą za jeżdżenie, nie za ciekawość.",
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
      "zysk": "Puszka ma ślad w księdze: kiedyś ktoś może ją odnaleźć i powiązać z blankietem z paczki Iris.",
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
  "wnetrze": [
    {
      "sekret_id": "d7_tasma_banknot",
      "co_widac": "Pod taśmą na lewej muszli złożony banknot dwudolarowy i karteluszek: „Dla szefa, jak się dowie. Za ciszę.”",
      "co_z_tego_wynika": "Kit trzyma w słuchawkach łapówkę dla szefa na wypadek, gdyby go przyłapał."
    }
  ],
  "wejscie": "Cześć, Kit. Zgubiłem słuchawki w czwórce, takie nauszne, z kotem w kasku na muszli. Pracuję w kopiarni na Rynku i jak szef się dowie, że słuchałem muzyki przy ksero, to po mnie. Serio.",
  "rozmowa": [
    {
      "tekst": "Jak wyglądają te słuchawki?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarne, nauszne. Lewa muszla oklejona taśmą, na prawej naklejka: kot w kasku. Kupiłem ją za dolara, serio.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Czemu kot ma kask?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Bo jedzie na rowerze, a jest odpowiedzialny. W przeciwieństwie do mnie, co widać po tym, że tu stoję.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Gdzie je zostawiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W czwórce, na siedzeniu przy oknie, jak wracałem z roboty. Przysnąłem na pół minuty i wysiadłem bez nich.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Wracasz z roboty w środku nocy? Gdzie pracujesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W kopiarni na Rynku, na praktykach. Mam siedemnaście lat, po nocach niby nie wolno, więc oficjalnie mnie tam nie ma. Serio, nie wpisuj tego.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Co się robi w kopiarni po nocach?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Ksero, laminowanie, bindowanie. Ulotki, plakaty, dyplomy. W nocy przychodzą tacy, co wolą, żeby ich nikt nie widział.",
              "mina": "neutralna",
              "dalej": [
                {
                  "tekst": "Na przykład kto? Pamiętasz kogoś z zeszłego tygodnia?",
                  "ton": "niewygodne",
                  "wymaga": null,
                  "ustawia": "d7_kit_ulotki",
                  "odpowiedz": "W czwartek, 22:15. Facet w szarym płaszczu zamówił tysiąc ulotek z twarzą kobiety. „Zaginęła”. Zapłacił gotówką i powiedział, że to żona. Serio, uśmiechał się przy tym.",
                  "mina": "emocja"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co ci zrobi szef, jak się dowie o słuchawkach?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Zdejmie mi dziesięć dolarów z wypłaty i palnie pogadankę. Pogadankę przeżyję. Dziesięć dolarów gorzej.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co mu przeszkadza w słuchawkach?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Mówi, że ksero ma być słychać, a ja mam słyszeć klientów. Słyszę. Tylko z muzyką mniej boli.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Czemu powiedziałeś mi o tych ulotkach?",
      "ton": "niewygodne",
      "wymaga": "d7_kit_ulotki",
      "odpowiedz": "Bo patrzysz, jakby cię to serio obchodziło. Mało kto tak patrzy. No i ten facet był dziwny, a komuś musiałem to powiedzieć.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Zostaje u was jakiś ślad po takim zamówieniu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kopia w segregatorze, z datą i godziną. Szef kocha segregatory bardziej niż ludzi. Nikomu ich nie wysyła, ale i nie wyrzuca.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Pod taśmą na muszli jest banknot i karteczka „za ciszę”. Co to?",
      "ton": "niewygodne",
      "wymaga": "d7_tasma_banknot",
      "odpowiedz": "Dwa dolary dla szefa, jakby mnie przyłapał. Raz zadziałało. Nie mów mu, serio, bo następnym razem dwa dolary nie wystarczą.",
      "mina": "mowi"
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda to etui?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brązowa skóra, zatrzask. W środku kartonik z inicjałami M.D. i znaczkiem nieskończoności. To jej pismo.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Ile kluczy jest w środku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jeden. Do naszego mieszkania.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "W etui są dwa klucze. Drugi ma wybite „14”.",
              "ton": "niewygodne",
              "wymaga": "d7_etui_klucze",
              "klucz": "dwa",
              "odpowiedz": "Drugiego nie znam. Maya miała swoje sprawy. Powiesz mi, do czego on jest? Bo ja chciałbym to wreszcie wiedzieć.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie i kiedy je zgubiła?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Nie wiem. W czwórce albo w jedenastce. Dlatego pytam: którym tramwajem przyjechały?",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Po co ci numer linii?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Będę wiedział, gdzie ona wsiada. Stanę na pętli i poczekam. Chcę tylko porozmawiać.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli ona nie chce rozmawiać?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Chce. Maya ma wszystko, czego trzeba: dom, męża, spokój. Nie ma się czego bać. Nie rozumiem tego pytania.",
              "mina": "klamie"
            }
          ]
        },
        {
          "tekst": "Policja nie może ci tego powiedzieć?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Policja mówi, że dorosła osoba ma prawo wyjść z domu. Więc przychodzę tutaj. Tu przynajmniej ktoś coś zapisuje.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Od kiedy jej szukasz?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Od czwartku wieczorem. Zgłosiłem jeszcze tej samej nocy, jak tylko zrozumiałem, że nie wraca.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Powiedziała ci wcześniej, że odchodzi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie. Przecież by mi powiedziała.",
          "mina": "klamie"
        },
        {
          "tekst": "Co zrobisz, kiedy ją znajdziesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zabiorę ją do domu i zrobię jej herbaty. Wszystko wróci na swoje miejsce. U mnie wszystko ma swoje miejsce.",
          "mina": "neutralna"
        },
        {
          "tekst": "Tej samej nocy? Ulotki z jej twarzą zamówiłeś o 22:15. Zgłosiłeś rano.",
          "ton": "niewygodne",
          "wymaga": "d7_kit_ulotki|d5_notes_ulotki",
          "klucz": "ulotki",
          "odpowiedz": "To... na wszelki wypadek. Zamówiłem wcześniej, bo przeczuwałem. Czy to coś zmienia? Kto wam to powiedział? Ktoś to zapisuje?",
          "mina": "emocja"
        }
      ]
    },
    {
      "tekst": "W etui są dwa klucze: zwykły i mały, z numerem 14. Do czego ten drugi?",
      "ton": "niewygodne",
      "wymaga": "d7_etui_klucze",
      "klucz": "dwa",
      "odpowiedz": "Drugiego nie znam. Maya miała swoje sprawy. Powiesz mi, do czego on jest? Bo ja chciałbym to wreszcie wiedzieć.",
      "mina": "emocja"
    },
    {
      "tekst": "Ulotki z twarzą Mai zamówiłeś w czwartek o 22:15. Osiem godzin przed zgłoszeniem.",
      "ton": "niewygodne",
      "wymaga": "d7_kit_ulotki|d5_notes_ulotki",
      "klucz": "ulotki",
      "odpowiedz": "To... na wszelki wypadek. Zamówiłem wcześniej, bo przeczuwałem. Czy to coś zmienia? Kto wam to powiedział? Ktoś to zapisuje?",
      "mina": "emocja"
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
  "wejscie_kto": "nora",
  "wejscie_jesli": {
    "d3_maz_i_siostra:wydaj_evan": "Dobry wieczór. Nora Vance, a to Lena Brandt. Lena po awanturze z Evanem chce chociaż torbę siostry. Ja chcę z niej papier z kamienicy. Torba jest szara, z rozprutą podszewką.",
    "d3_maz_i_siostra:wydaj_lena": "Dobry wieczór. Nora Vance, a to Lena Brandt. Lena ma już telefon siostry i chce jeszcze jej torbę. Ja chcę z niej papier z kamienicy. Torba jest szara, z rozprutą podszewką."
  },
  "rozmowa": [
    {
      "tekst": "Lena, czyja jest ta torba?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "siostra",
      "odpowiedz": "Mai, mojej siostry. Sama jej ją kupiłam na urodziny. Narzędzia dla kobiety, dziwny prezent, wiem. Teraz to jedyna jej rzecz, jakiej mogę dotknąć.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Po czym ją poznasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Po obcęgach z żółtą izolacją i miarce z literą „M”. Ale... no właśnie. Nora też wie, co jest w środku.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co zrobisz z torbą, jeśli ją dostaniesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Zabiorę do siebie. A jak Maya wróci, to jej oddam. Przecież to jej.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Nora, czego szukasz w cudzej torbie?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "nora",
      "odpowiedz": "Po kolei: rzecz, osoba, skutek. Papier w podszewce. Rodzina Okoye. Bez tego papieru nie mają dowodu, że wpłacili.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Skąd wiesz, że w podszewce jest papier?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Z mojego zeszytu. Spisuję numery wszystkich pokwitowań w kamienicy. Jednej kopii brakuje, a Maya robiła u nas instalację akurat w tym tygodniu, kiedy zniknęła.",
          "mina": "neutralna"
        },
        {
          "tekst": "O jakiej wpłacie mówimy?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Czternaście rodzin, każda po czterysta dolarów zaliczki na remont. Termin rozliczenia: czwartek, dziewiąty września. Kto nie pokaże kwitu, płaci drugi raz albo się wyprowadza.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto brał te zaliczki?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "nora",
              "odpowiedz": "Zarządczyni, Iris Bell. Bierze gotówkę, wydaje kwit, oryginał zostawia sobie. A potem bywa, że kwitu „nie pamięta”.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Maya pracowała w tej kamienicy?",
      "ton": "niewygodne",
      "wymaga": null,
      "kto": "siostra",
      "odpowiedz": "Tak, jako elektryczka, na Cooper Street dziewięć. Ale... no tak, tam rządzi Iris. Nie rozmawiałyśmy o tym. Maya mówiła tylko, że widziała coś, czego nie powinna.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co takiego widziała?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Nie powiedziała. Naprawdę. Urwała w pół zdania i zmieniła temat. Ja też teraz zmienię.",
          "mina": "klamie"
        }
      ]
    },
    {
      "tekst": "Która z was ustąpi?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "nora",
      "odpowiedz": "Ja nie. Za mną stoi czternaście rodzin. Lena pewnie też nie, bo za nią stoi siostra. Dlatego przyszłyśmy razem, żeby ktoś trzeci zdecydował.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Lena, a gdyby Nora dostała tylko papier, a ty torbę?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Mogłabym. Tylko niech nikt nie czyta reszty. W tej torbie są rzeczy Mai, nie kamienicy.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "W podszewce jest żółta kopia: 400 dolarów, podpis „I.”. Czyj to podpis?",
      "ton": "niewygodne",
      "wymaga": "d8_torba_kopia",
      "kto": "nora",
      "odpowiedz": "Iris Bell. Znam go z dwudziestu pokwitowań. Czyli Okoye zapłacili, a Maya schowała dowód. Oryginał ma Iris i nie pokaże go nikomu.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Lena, wiedziałaś, że Maya to schowała?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Nie. Ale to do niej podobne. Maya zawsze chowa rzeczy tam, gdzie ktoś je kiedyś znajdzie. Jak telefon.",
          "mina": "emocja"
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten aparat?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Srebrny, analogowy, wgniecenie w lewym rogu. Brat upuścił go na schodach. Mówi, że teraz aparat ma charakter.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Ma jakieś znaki? Coś wydrapanego, podpis?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie, żadnych. Teo niczego nie wydrapywał. Aparat jest czysty.",
          "mina": "klamie"
        },
        {
          "tekst": "Co jest na filmie w środku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie wiem, brat go nie wywołał. Pewnie wakacje. Nic ważnego.",
          "mina": "klamie"
        }
      ]
    },
    {
      "tekst": "Gdzie go zostawiłaś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, na siedzeniu. Rozmawiałam przez telefon z lekarzem brata i wysiadłam, nie oglądając się.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co z bratem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Teo, Teodor Halm. Leży na ortopedii z nogą w gipsie. Rower. Twierdzi, że to nie jego wina, czyli jego.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Po co mu w szpitalu aparat na kliszę?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Chce robić zdjęcia dla mamy. Mama mieszka daleko i lubi zdjęcia. Dlatego potrzebuję go dziś, nie jutro.",
              "mina": "klamie"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Mówisz, że masz paragon. Jaki?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Z komisu na Rynku, sprzed dwóch lat. Mam zdjęcie w telefonie. Słuchaj, jest cena, jest data, jest napisane „srebrny”. Czego chcieć więcej?",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Na paragonie jest numer seryjny?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Numeru nie ma. W komisach się nie wpisuje. Ale srebrny aparat z komisu to srebrny aparat z komisu, nie?",
          "mina": "neutralna"
        },
        {
          "tekst": "Paragon bez numeru to za mało. Aparat może tu poczekać.",
          "ton": "niewygodne",
          "wymaga": null,
          "ustawia": "d8_bree_oferta",
          "odpowiedz": "To zrobię się nieprzyjemna. Albo inaczej: osiemdziesiąt dolarów, wydajesz mi aparat i po sprawie. Co ci szkodzi?",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Pod klapką baterii jest wydrapane „R.O.”. Czyje to inicjały?",
      "ton": "niewygodne",
      "wymaga": "d8_aparat_naklejka",
      "odpowiedz": "No dobra. Raf Okoye, sąsiad z Cooper Street. Pożyczył bratu aparat. Ale to się nie liczy, bo ja mam paragon.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Na pasku wisi klucz: „Cooper 9, lok. 4”. Kto cię po ten aparat przysłał?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nikt. Brat. Mówiłam. Słuchaj, ktoś zapłacił mi za odebranie i tyle wiem. Nie pytam, co jest na kliszy, i tobie też nie radzę.",
          "mina": "klamie"
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
  "wejscie_kto": "iris",
  "wejscie_jesli": {
    "d4_iris:rejestr": "Dobry wieczór. Iris Bell. Piórnik z żetonami, szóstka, ostatni kurs. Zeszłym razem wpisaliście wszystko do księgi i bardzo dobrze. Obok Victor Crane, pyta o ten sam numer.",
    "d4_iris:koperta": "Dobry wieczór. Iris Bell. Miło znowu przy tej szybie. Piórnik z żetonami, szóstka, ostatni kurs. Obok Victor Crane, pyta o ten sam numer. Mam nadzieję, że pójdzie szybko.",
    "d4_iris:odmow_zglos": "Dobry wieczór. Iris Bell. Paczka z zeszłego tygodnia nadal u was leży. Dziś piórnik z żetonami. Obok Victor Crane, pyta o ten sam numer."
  },
  "rozmowa": [
    {
      "tekst": "Co jest w tym piórniku?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "iris",
      "odpowiedz": "Żetony do skrzynek pocztowych w kamienicy. Pięć sztuk, nic więcej. Nudy, kochanie.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Co znaczą numery na tych żetonach?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Nic. Numeracja skrzynek. Nie szukaj w tym powieści.",
          "mina": "klamie"
        },
        {
          "tekst": "Czyje to skrzynki?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Moich lokatorów. Nazwisk nie podam, to ich sprawa. Są ludzie, którzy chcą mieć po prostu święty spokój.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Czego chce od piórnika inspekcja?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "victor",
      "odpowiedz": "Numeru odbioru i podpisu. Kto to podpisze? Pokwitowanie w dwóch egzemplarzach, jeden idzie do Urzędu.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co się nie zgadza w księdze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Numery. Piórnik przyjechał szóstką, a wpisu nie ma. Brakuje też trzech kwitów z zeszłego miesiąca. Ktoś wydawał bez śladu.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co będzie, kiedy piórnik trafi do Urzędu?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Zostanie opisany w protokole. Ktoś ten protokół przeczyta i wyciągnie wnioski. Ja nie wyciągam. Ja zapisuję.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Iris, co ty na to?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "iris",
              "odpowiedz": "Że protokoły czyta więcej osób, niż pan Crane sądzi. A ja nie lubię, jak nazwiska moich lokatorów chodzą po urzędach.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Czemu oboje przyszliście po to samo?",
      "ton": "niewygodne",
      "wymaga": null,
      "kto": "iris",
      "odpowiedz": "Bo żetony przyjechały szóstką, a pan Crane lubi wszystko, co przyjeżdża. Mnie wystarczy, że wrócą tam, skąd wyjechały.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Czemu mam wierzyć tobie, a nie jemu?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Nie musisz. Zrób, co uznasz za słuszne. Powiem tylko, że czworo ludzi kupiło już bilet i czeka na swoją kolej.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Na odwrocie żetonów są karteczki: „kobieta z walizką”, „matka z synem”. Co to?",
      "ton": "niewygodne",
      "wymaga": "d9_zetony_numery",
      "kto": "iris",
      "odpowiedz": "Opisy. Żeby goniec wiedział, komu oddać paczkę. Więcej przy panu Crane nie powiem.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co jest w tych paczkach?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Papiery na nowe życie. Dla ludzi, których ktoś bije albo ściga. Biorę za to pieniądze i nie wstydzę się tego. Reszta nie jest dla inspekcji.",
          "mina": "emocja"
        },
        {
          "tekst": "Piąty żeton, 0809, nie ma opisu. Dla kogo jest?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Jeszcze dla nikogo. Opis przyjdzie, kiedy przyjdzie człowiek. Nie zadaję takich pytań, dopóki ktoś nie zapłaci.",
          "mina": "neutralna"
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
        "tekst": "Iris Bell: „Czterech moich ludzi dostało dziś pisma z Urzędu. Ciekawe, kto pokazał im ich numery.”"
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
      "co_widac": "Pod wstążką naklejka: „Hobbs & Syn, rozmiar 56”. W podszewce haftowane inicjały J.K.",
      "co_z_tego_wynika": "Kapelusz jest rozmiar 56 z inicjałami J.K. Zgłaszający mówi o innym rozmiarze i innych inicjałach."
    }
  ],
  "wejscie": "Dobry wieczór. Marek Stahl. Zgodnie z regulaminem zgłaszam zgubę: szary filcowy kapelusz z granatową wstążką, wczoraj w czwórce. Opis mam bardzo dokładny, żeby nie tracić państwa czasu.",
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten kapelusz?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Szary, filcowy, granatowa wstążka, rozmiar pięćdziesiąt osiem. Zgodnie z regulaminem podaję wszystko od razu.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Jest w nim metka producenta?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jest, pod wstążką. Nazwy nie pamiętam. Regulamin tego nie wymaga.",
          "mina": "klamie"
        },
        {
          "tekst": "Jakieś inicjały w środku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "M.S., Marek Stahl. Tak mi się wydaje. Rzadko zaglądam do własnego kapelusza.",
          "mina": "klamie"
        }
      ]
    },
    {
      "tekst": "Gdzie i kiedy go zgubiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Wczoraj, czwórka, około dwudziestej drugiej. Siedziałem sam, kapelusz leżał na półce nad oknem.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Na pewno sam?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Sam. Zawsze sam. Nikt obok nie siadał.",
          "mina": "klamie"
        },
        {
          "tekst": "O dwudziestej drugiej? Dokąd jechałeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Do domu. Z kancelarii. Dużo ostatnio pracuję przy cudzych papierach.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Czemu tak ci zależy akurat na tym kapeluszu?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Jutro mam ważną rozmowę, a bez kapelusza wyglądam nieprzekonująco. Tak twierdzi moja żona.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Żona może potwierdzić, że jest twój?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Mogłaby, ale jest w delegacji. Zaświadczenie przyniosę jutro, zgodnie z regulaminem.",
          "mina": "klamie"
        },
        {
          "tekst": "A jeśli kapelusz zostanie u nas?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To odejdę. Ale nie od razu. Postoję chwilę, jeśli wolno. Lubię patrzeć, jak ktoś pracuje. Zwłaszcza ktoś nowy.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Pod wstążką jest „Hobbs & Syn, 56”, a w podszewce „J.K.”. Czyj to kapelusz?",
      "ton": "niewygodne",
      "wymaga": "d9_kapelusz_naklejka",
      "odpowiedz": "...Chwileczkę. Dobry wzrok. Kapelusz nie jest mój. Chciałem zobaczyć, czy to okienko wyda rzecz za sam ładny opis.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Po co to sprawdzasz? Dla kogo?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Dla siebie. I dla ludzi, którzy płacą za wiedzę, jak pracuje nocna zmiana. Proszę się nie martwić. Na razie wypadło dobrze.",
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
  "wejscie": "Dobry wieczór. Zaplecze tramwajowe, Vera Kovacs. Pudełko z szafki Sama Holta, tego, który siedział przy tej szybie przed Tobą. Zgubiłam je w jedenastce, w drodze do domu. Szafkę zamykają w przyszły piątek, a on dalej się nie zgłasza. Proszę o pomoc.",
  "rozmowa": [
    {
      "tekst": "Jak wygląda to pudełko?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Blaszane, na sprzączkę. Na wieczku wgniecenie, bo raz na nim usiadłam w poczekalni. Zapina się z oporem.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co jest w środku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Pasek od zegarka i kartka z inwentarza. Nic, co miałoby cenę.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Gdzie dokładnie je zgubiłaś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, wczoraj, ostatni kurs. Położyłam obok siebie i wysiadłam bez niego. Zorientowałam się, bo klucze dzwoniły, a ręce miałam puste.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Po co wozisz do domu pudełko z cudzej szafki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Żeby nikt go nie wyrzucił. Szafka jest Sama, nie moja. W zajezdni, jak coś stoi niczyje, to długo nie postoi.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Kim był dla ciebie Sam Holt?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Kolegą z nocy. Siedział przy tej szybie, ja zamykałam zaplecze. Odszedł ponad miesiąc temu, bez słowa. Tylko ja jeszcze pilnuję jego szafki.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Dlaczego akurat ty?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo mnie prosił. Powiedział: trzymaj, aż wrócę. Dopóki szafka jest zajęta, nikt jej nie likwiduje.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co będzie, jak zamkną szafkę w piątek?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Rzeczy pójdą do zbiorczego archiwum Urzędu i nikt ich potem nie znajdzie. Dlatego wezwałam Sama na piątek. Chcę, żeby miał co zabrać.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Sam wie, że go wezwałaś?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Wie. Napisałam. Nie odpisał. On nigdy nie odpisuje, on przychodzi. To znaczy, powinien przyjść.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Na karcie jest numer szuflady 6, taki jak tu, w biurze. Co to znaczy?",
      "ton": "niewygodne",
      "wymaga": "d10_pudelko_karta",
      "odpowiedz": "Że szuflada numer sześć jest jego. Klucz dostałam od Sama i zostawiłam w tej szufladzie, żeby następny nie musiał go szukać. Czyli żeby nie musiało szukać to, co teraz siedzi na jego krześle.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Na wieczku ktoś napisał: „Teczka jest pusta. Tak ma być”. O jaką teczkę chodzi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Dzwonię kluczami, bo się wstydzę, że nie wiem. Sam mówił, że jak ktoś zapyta o teczkę, mam powtórzyć te słowa i nic nie dodawać.",
          "mina": "neutralna"
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
  "rozmowa": [
    {
      "tekst": "Jak wygląda ten zeszyt?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Gruby, okładka tłusta, bo noszę go razem z kanapką. Gumka ledwo trzyma. Pachnie cebulą, uprzedzam.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co w nim jest oprócz grafiku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Przepisy na zupy i numery telefonów. I parę długów, cudzych. Chcesz kanapkę? Mam drugą.",
          "mina": "mowi"
        }
      ]
    },
    {
      "tekst": "Gdzie go zgubiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, na pętli, jak jadłem. Położyłem zeszyt obok kanapki. Kanapkę zjadłem, a zeszyt pojechał dalej beze mnie.",
      "mina": "neutralna"
    },
    {
      "tekst": "Pytałeś o Sama. Kim on dla ciebie jest?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Kolegą. Siedział przy tym okienku przed tobą. Zawsze miał dla mnie herbatę i dobre słowo. Teraz go nie ma i nikt nie wie, gdzie jest.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Od kiedy go nie ma?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ponad miesiąc. Powiedział, że idzie do portu coś załatwić. Potem przestał odbierać telefon. Pytam po całej zajezdni.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co miał do załatwienia w porcie?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie mówił. Miał pod pachą szarą teczkę i minę, jakby szedł do dentysty. Tyle widziałem.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Czemu pytasz akurat tutaj?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo to jego miejsce. Jak ktoś ma coś wiedzieć, to ten, kto siedzi na jego krześle.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jak nikt ci nie odpowie?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "To będę pytał dalej. Aż ktoś powie albo aż mi się znudzi. To drugie mi się nie zdarza.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Na ostatniej stronie jest dopisek: „Czy on żyje?”. Twój?",
      "ton": "niewygodne",
      "wymaga": "d10_zeszyt_sam",
      "odpowiedz": "Mój. Dopisałem w poniedziałek. Sam wisi mi trzynaście dolarów za kanapki, ale nie o to idzie. Chcę wiedzieć, czy żyje.",
      "mina": "emocja"
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
      "reakcja": "Co? Przecież to mój zeszyt! Dobra, przyprowadzę kogoś z zajezdni, niech potwierdzi.",
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
    },
    "3": {
      "sprite": "skrzynka",
      "itemName": "zielona skrzynka z numerem 3",
      "line": "6",
      "inside": null,
      "wnetrze": [
        {
          "sekret_id": "d3_skrzynka_zegarek",
          "co_widac": "Skrzynka pachnie mułem. Na wieczku przywieszka policji rzecznej: „wydobyto z kanału, właściciel nieznany”. W środku męski zegarek, na kopercie grawer „T.R. — od T.”. Pod zegarkiem klucz z mosiężnym numerkiem i karta z numerem szafki, ołówkiem.",
          "co_z_tego_wynika": "Policja rzeczna odesłała to tramwajem jako rzecz bez właściciela. Zegarek, klucz i karta należą do jednej osoby, której kolejka jeszcze nie wywołała."
        }
      ]
    },
    "9": {
      "sprite": "karta",
      "itemName": "karta rozliczeniowa z pieczątką",
      "line": "6",
      "inside": null,
      "wnetrze": [
        {
          "sekret_id": "d9_karta_km",
          "co_widac": "Karta przy żetonach: „Opłata 60 $. K.M.” Pod spodem ołówkiem rata sobotnia i dopisek „wgląd Kancelarii”.",
          "co_z_tego_wynika": "Marlow odbiera sobotnie raty i podpisuje je inicjałami K.M. Pieczątka „wgląd Kancelarii” oznacza, że ktoś kupił wgląd w kopie z biura."
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
        "tekst": "Kuzyn przyniósł kartkę: „O wyburzeniu wiedziałem, zanim wydrukowali. Rata w sobotę bez zmian, sześćdziesiąt. Ściany znikają, długi zostają. K.M.” Powiedział, że Kuba nie jest zły, tylko nie lubi niespodzianek."
      }
    ],
    "9": [
      {"kto": "Słup przy zajezdni", "tekst": "Ines Calloway przypięła obok swojej kartki o kocie wycinek z archiwum „Kuriera”. To samo ogłoszenie, z którego pochodzi Twój pasek: „Bez referencji. Dyskrecja.” Na marginesie rok sprzed jedenastu lat. Słowo w słowo."},
      {
        "kto": "Elias, numerek 1",
        "tekst": "Elias poprosił, żeby oprawkę, jeśli się znajdzie, trzymać osobno. „Gdyby ktoś przyszedł po nią z papierkiem od innego pracownika, proszę nie wierzyć.”"
      },
      {
        "kto": "Telefon na zapleczu",
        "tekst": "Zadzwoniła kobieta, przedstawiła się jako Helen Voss z Inspekcji. Pytała, kto prowadzi okienko w nocy. Odłożyła słuchawkę, zanim ktoś odpowiedział."
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
