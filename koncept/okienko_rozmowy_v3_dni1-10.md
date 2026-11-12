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
      "tekst": "Jak wygląda rękawiczka?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brązowa skóra. Wytarta, ale nie popękana. Ellen mówiła, że dobra skóra ma się zestarzeć razem z człowiekiem.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jaki rozmiar?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mały rozmiar. Ellen miała drobne dłonie. Mnie wchodzi tylko do połowy palców.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Przymierzałeś ją?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Przy szyciu. Musiałem czymś rozepchać środek. Dłoń miałem pod ręką, że tak powiem.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Po czym odróżnić ją od podobnej?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Przy kciuku zszyłem ją białą nitką. Krzywo. Ręka lata, ale nitka trzyma.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Czemu akurat białą?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Została w pudełku Ellen. Ciemnej już nie było. Nie chciałem kupować całej szpulki na jeden kciuk.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie w czwórce siedziałeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W czwórce, wczoraj wieczorem, przy oknie. Rękawiczka leżała na kolanie, na zakręcie spadła. Nie zauważyłem od razu.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Dokąd jechałeś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Do córki, Claire, do Doków. W czwartki gotuje rosół i zawsze wychodzi jej za dużo.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Wie, że szukasz rękawiczki?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Nie. I proszę jej nie mówić, jeśli przyjdzie. Zacznie mnie odprowadzać nawet do kiosku.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Dlaczego nie była w kieszeni?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Wyjąłem ją, żeby sprawdzić szew. Człowiek raz coś zszyje i zaraz musi oglądać swoje dzieło.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Szew puścił?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Nie. To ja puściłem rękawiczkę. Na nitkę nie ma co zwalać.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Masz ze sobą drugą?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "W kieszeni. Proszę, prawa. Noszę ją osobno, odkąd lewa zginęła.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Czym różnią się szwy?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W prawej nitka czarna, w lewej biała. Czarna skończyła się wcześniej. Obie szyte tą samą, niezbyt pewną ręką.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Możesz ją zostawić na czas porównania?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Na ladzie, tak. Byle nie w magazynie. Jeszcze mi się zrobi z tego trzecia wizyta... To znaczy, trzecie szukanie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Nosisz je nawet wtedy, gdy jest ciepło?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "W płaszczu. Jedną w drugiej. Portfel mam w drugiej kieszeni, żeby nic ich nie drapało.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A kiedy zmieniasz płaszcz?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Przekładam najpierw rękawiczki. Telefonu czasem zapomnę. Tych nie powinienem.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co będzie, jeśli lewa się nie znajdzie?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "W niedzielę pojadę z jedną. Tylko będę wyglądał, jakbym znowu czegoś nie dopilnował.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Kto pojedzie z tobą?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Claire. Niesie kwiaty, ja wodę. Tak się podzieliliśmy, żeby nie stać oboje z pustymi rękami.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Możesz powiedzieć jej o zgubie w drodze.",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Mogę. Tylko ona wtedy odłoży swoje sprawy i zacznie załatwiać moje. Nie po to gotuje ten rosół.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Chcesz zostawić rękawiczki na grobie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na chwilę. Obie, obok siebie. Potem schowam, bo Ellen by mnie zrugała za marnowanie dobrej skóry.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Zawsze tak pilnowała rzeczy?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Guziki trzymała według kolorów. Ja teraz szukam igły w pięciu pudełkach, a ona trafiała bez patrzenia.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "To pierwsza wizyta w tym biurze?",
      "ton": "niewygodne",
      "wymaga": null,
      "gasi": "kwit",
      "odpowiedz": "Pierwsza. Nie mam zwyczaju chodzić po urzędach.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "To skąd wiesz, gdzie jest nocne okienko?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Zajezdnię znam. Szyba się świeci, człowiek podchodzi. Jeszcze potrafię trafić tam, gdzie jasno.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Trudno było tu przyjść?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Trudniej powiedzieć, że chodzi o jedną rękawiczkę. Przy innych zgubach to wygląda śmiesznie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "W mankiecie jest kwit 0417 sprzed sześciu tygodni. Skąd?",
          "ton": "niewygodne",
          "wymaga": "d1_kwit_0417",
          "klucz": "kwit",
          "odpowiedz": "Byłem tu po prawą. Sam oddał bez wpisu. Wstyd mi, że teraz przychodzę po lewą, jakbym niczego nie umiał upilnować.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Co Sam powiedział o lewej?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Że rękawiczki chodzą parami i ona też kiedyś przyjdzie. Żebym o nim dużo nie opowiadał. Więc nie opowiadałem.",
              "mina": "neutralna",
              "dalej": [
                {
                  "tekst": "Ukrywasz jego pomoc czy własną zgubę?",
                  "ton": "niewygodne",
                  "wymaga": null,
                  "odpowiedz": "Teraz już jedno i drugie. O nim prosił Sam, o rękawiczce sam nie chciałem mówić.",
                  "mina": "emocja",
                  "dalej": [
                    {
                      "tekst": "Co mogę powiedzieć Claire, jeśli zapyta?",
                      "ton": "uprzejme",
                      "wymaga": null,
                      "odpowiedz": "Że lewa się znalazła, jeśli się znajdzie. Resztę spróbuję powiedzieć sam.",
                      "mina": "neutralna"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego tak zależy ci na tej jednej parze?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "To rękawiczki Ellen. Nowe mogę kupić. Tylko nowych ona nigdy nie miała na rękach.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Długo byliście razem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czterdzieści cztery lata. Poznaliśmy się w dwójce, której już nie ma. Miała bilet, ja nie miałem drobnych.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Kupiła ci bilet?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Pożyczyła. Bardzo wyraźnie powiedziała: pożyczyła. Musiałem ją potem znaleźć, żeby oddać.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "A tę parę kto kupił?",
          "ton": "niewygodne",
          "wymaga": null,
          "odmowa": "To już chyba nie do formularza, prawda? Stary człowiek ma swoje dziwactwa.",
          "odpowiedz": "Nie pamiętam. Proszę nie wpisywać z tego, że nie moje. Pamiętam, jak je zdejmowała, nie gdzie był sklep.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Jak zdejmowała?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Najpierw ciągnęła za każdy palec. Ja zawsze szarpałem za mankiet. Dlatego ona rzeczy miała latami.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Kwit 0417 mówi o prawej wydanej bez wpisu. To twoja?",
      "ton": "niewygodne",
      "wymaga": "d1_kwit_0417",
      "klucz": "kwit",
      "odpowiedz": "Tak. Sam mi ją oddał. Skłamałem, bo wstyd drugi raz przyjść z tym samym. Tylko rękawiczka inna.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Dlaczego bez wpisu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Powiedział, że pamiątka, nie zguba. Nie pytałem, czy wolno. Wziąłem i wyszedłem, zanim się rozmyślił.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Pod białym szwem jest brązowy. Kto go zrobił?",
      "ton": "uprzejme",
      "wymaga": "d1_biala_nic",
      "odpowiedz": "Ellen. Mój jest na wierzchu. Jej nitka się przecierała, ale nie potrafiłem jej wypruć.",
      "mina": "emocja"
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Schowam je razem. Teraz już nie będę sprawdzał szwu w tramwaju.",
      "zysk": "Thomas idzie w niedzielę na cmentarz z obiema rękawiczkami.",
      "strata": "Wydajesz na słowo i nitkę, a kwit 0417 zostaje w księdze bez wyjaśnienia.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "W niedzielę jadę z Claire na cmentarz z obiema rękawiczkami. Pytała, kto wydał prawą bez papieru. Powiedziałem, że nazwiska nie znam. — T. Ward"
      }
    },
    {
      "akcja": "zatrzymaj_sprawdz",
      "etykieta": "Zatrzymaj do sprawdzenia tożsamości",
      "reakcja": "Przyjdę z Claire. Tylko proszę nie mówić jej od progu, że ojciec znowu coś zgubił.",
      "zysk": "Rękawiczka zostaje w biurze, dopóki ktoś nie potwierdzi, kim jest Thomas.",
      "strata": "Starszy człowiek wraca do domu z jedną rękawiczką, a niedziela na cmentarzu jest zagrożona.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Claire Ward: „Ojciec nie wychodzi z domu, żeby nic więcej nie zgubić. Potwierdzę, że rękawiczka jest mamy, ale kto oddał mu prawą bez papieru?”"
      }
    },
    {
      "akcja": "wydaj_bez_wpisu",
      "etykieta": "Wydaj bez wpisu, tak jak zrobił to Sam",
      "reakcja": "Sam też tak zrobił. Włożę je do jednej kieszeni, a o papier nie będę pytał.",
      "zysk": "Thomas ma obie rękawiczki od ręki i nikt się nie dowie, że biuro znów wydało coś poza księgą.",
      "strata": "Powtarzasz to, co robił poprzednik. Wydanie nie zostawia śladu i zalicza się do rachunku „bez wpisu”.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Thomas Ward: „Claire już wie, że odzyskałem obie. O tym, że dwa razy bez wpisu, jeszcze jej nie powiedziałem.”"
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
      "tekst": "Jak rozpoznać kopertę?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brązowa, z jedną zszywką. Zwykła biurowa, nie żadna na prezenty.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jak jest zamknięta?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jedna zszywka, wbita krzywo. Kierownik zszywa na stojąco, więc połowa jest w papierze, połowa sterczy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Rozrywałaś ją przy liczeniu?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Odgięłam róg. Banknoty wysunęłam, zszywka została. Palec pamięta ją do teraz.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Co jest w środku oprócz pieniędzy?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kartka z naszymi nocami. Złożona na pół, inaczej się nie mieści.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Jest podpisana?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Na kopercie Vale, ołówkiem. W rogu 129. Dziewiątka wygląda jak ósemka, kierownik tak pisze.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Kiedy została w tramwaju?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "O szóstej rano, w jedenastce. Odłożyłam obok, żeby zapiąć torbę. Obudziłam się na pętli.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Po nocnej zmianie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Od dziewiątej wieczorem na nogach. Potem córka do szkoły, potem szukanie koperty. Sen na raty, tylko bez odsetek.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Córka poszła sama?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Ada, dziesięć lat. Kanapki zrobiła sobie i mnie. Moja jeszcze leży w torbie, nie mogę przełknąć.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Ktoś siedział obok?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie patrzyłam. Same takie jak ja, głowy pod oknem. Nie będę wybierać złodziejki z zamkniętymi oczami.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Pytałaś na pętli?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Tak. Odesłali tutaj. Zrobiłam tą jedenastką więcej kółek niż w pracy przy praniu.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Skąd dokładnie kwota 129 dolarów?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Trzy noce po czterdzieści trzy. Liczyłam przed tramwajem. Trzy razy, niestety dobrze.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Niestety?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo pracowałam cztery noce. Za czwartą nie dostałam. Liczenie tego nie naprawi.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto skreślił czwartą?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Iris Bell. Zarządza kamienicą, odbiera nasze wypłaty z pralni. Potem każda dostaje kopertę i ma nie marudzić.",
              "mina": "neutralna",
              "dalej": [
                {
                  "tekst": "Możesz sprawdzić rachunek, zanim rozda pieniądze?",
                  "ton": "niewygodne",
                  "wymaga": null,
                  "odpowiedz": "Widzę kartkę, kiedy dostaję kopertę. Wtedy pieniądze są już podzielone, a za mną stoją następne.",
                  "mina": "neutralna",
                  "dalej": [
                    {
                      "tekst": "Czyli liczenie ma tylko potwierdzić jej wynik?",
                      "ton": "rzeczowe",
                      "wymaga": null,
                      "odpowiedz": "Liczyć mogę, kłócić się też. Tylko ona potem wraca do kamienicy jako zarządczyni, a ja jako lokatorka.",
                      "mina": "neutralna"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "tekst": "Dlaczego tak dokładnie je przeliczasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jutro czynsz. Sto dwadzieścia dziewięć mam, sto dwadzieścia dziewięć muszę oddać. W takim rachunku nawet dolar hałasuje.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Nic nie zostaje na jedzenie?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Z tego nie. W domu jest kasza. Nie przyszłam po litość, tylko po swoje pieniądze.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego wypłata jest w gotówce?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Tak płaci pralnia. Papier dostaję, pieniędzy na konto nie. Mogę pracować albo pytać, czemu.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Kto wręcza koperty?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Iris, zarządczyni. Odbiera zbiorczo. Mówi, że dzięki niej nie musimy stać po wypłatę.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli chcesz odebrać osobiście?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "To zapyta, po co komplikuję. Przy wszystkich. Potem trudno z nią rozmawiać o czynszu.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Próbowałaś zmienić pracę?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Przy dziecku potrzebuję tych godzin. W pralni przynajmniej wiem, kiedy wyjdę. Z pieniędzmi gorzej.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto zostaje wtedy z córką?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "To już moja sprawa. Koperta ma moje nazwisko, nie opis całego mieszkania.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co się stanie, jeśli nie odzyskasz jej dziś?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Dwadzieścia dolarów kary za czynsz. I nadal trzeba zapłacić sam czynsz. Kara go nie zastępuje.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Kto nalicza karę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Iris Bell. Ta sama, która rozdziela wypłaty. Pieniądze robią kółko, ja tylko na chwilę je trzymam.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Możesz poprosić o odroczenie?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Mogę. Powie, że wszyscy mają dzieci i nie może robić wyjątków. Już słyszałam.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Masz od kogo pożyczyć?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Od dziewczyn z pralni? Też jutro płacą. Jedna mi pożyczy, sama nie zapłaci. Razem wyjdzie drożej.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A kierownik?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Może potwierdzić kopertę. Pieniędzy drugi raz nie da. Zszywkę pewnie tak.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak możesz potwierdzić, że wypłata jest twoja?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Nazwisko, kwota, kartka z nocami. Kierownik mnie zna. Tylko nie odbierze telefonu w środku nocy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Przyjdziesz z nim rano?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jeśli trzeba. Ale rano będę też musiała odprowadzić małą. Nie rozdwoję się między pralnią a okienkiem.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Którą sprawę wybierzesz?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Córkę. Potem tu przyjdę. I proszę nie uznać spóźnienia za dowód, że mi nie zależy.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Czyje nazwisko widnieje na papierach wypłaty?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jeśli chodzi o zbiorczy, będzie I. Bell. Ona odbiera za wszystkie, ale nie przepracowała za mnie tych nocy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Jak oddzielić twoją część od pozostałych?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Vale na kopercie i trzy noce na kartce. Sto dwadzieścia dziewięć, wciąż ta sama suma.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego czwarta noc na kartce jest przekreślona?",
      "ton": "niewygodne",
      "wymaga": "d1_lista_nocy",
      "odpowiedz": "Wyszłam o północy, Ada miała gorączkę. Iris skreśliła całą noc. Cztery godziny prania poszły za darmo.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Ada już zdrowa?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zdrowa. Rano zrobiła kanapki. Nie wie, ile mnie kosztował ten czwartek, i nie musi.",
          "mina": "mowi"
        },
        {
          "tekst": "Czemu nie upomnisz się o te cztery godziny?",
          "ton": "niewygodne",
          "wymaga": null,
          "odmowa": "Pytasz jak ktoś, kto nigdy nie bał się o robotę. Daj spokój.",
          "odpowiedz": "Iris wynajmuje mi pokój i załatwiła pralnię. Ja mam cztery godziny, ona dwa sposoby, żeby mnie wyrzucić. Policz sobie.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Przy szybie przeliczę. Sto dwadzieścia dziewięć, zgadza się. Teraz prosto do domu, żadnego drzemania.",
      "zysk": "Rosa ma czynsz na jutro, a w księdze jest jej podpis pod kwotą 129 dolarów.",
      "strata": "Odcinek zbiorczy jest wystawiony na Iris Bell, więc w papierach wypłata należała do kogoś innego, niż ją odbiera.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Iris pytała, kto mi pozwolił odebrać kopertę. Od następnej wypłaty chodzę po pieniądze sama. — Rosa"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Rano przyjdę z kierownikiem. Jeśli go nie puszczą z pralni, to co mam przynieść, jego fartuch?",
      "zysk": "Koperta wraca do osoby wskazanej na odcinku, czyli do Iris, zgodnie z przepisem.",
      "strata": "Rosa płaci dwadzieścia dolarów kary za spóźniony czynsz.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Iris oddała mi sto dziewięć dolarów. Dwadzieścia potrąciła za czynsz, którego nie mogłam zapłacić bez koperty. — Rosa"
      }
    },
    {
      "akcja": "wez_20",
      "etykieta": "Wydaj, ale odlicz sobie 20 $ „za fatygę”",
      "kasa": 20,
      "reakcja": "Sto dziewięć. Jeszcze raz: sto dziewięć. Nie będę krzyczeć, ale policzyć umiem.",
      "zysk": "Dostajesz 20 dolarów do kieszeni, które nikomu nie zostały zapisane.",
      "strata": "Rosie brakuje dwudziestu dolarów do czynszu, a Iris nalicza jej za to jeszcze karę.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "W kopercie brakowało dwudziestu dolarów, potem doszło dwadzieścia kary. Ada pyta, czemu znów biorę dodatkową noc. — Rosa"
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
      "tekst": "Jak wygląda plecak?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarny, z pękniętą klamrą. Nie odpina się porządnie, trzeba trzymać obie połówki.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Da się go zamknąć?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Da, mimo pękniętej klamry. Pasek przeciągam drugi raz. Jak ktoś pociągnie za klamrę, zostaje mu w ręce pół zapięcia.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Nie boisz się, że coś wypadnie?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "To ważne trzymam od strony pleców. Tam nikt nie sięgnie. Chyba że zostawię cały plecak, jak geniusz.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co jest w środku?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ładowarka, książka, kupa starych biletów. I pudełko, w kieszeni od strony pleców.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Co jest w pudełku?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Pierścionek. Dla June. O siódmej chcę zapytać. Tylko nie mów tego tak głośno, bo jeszcze się przestraszę.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie go zostawiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, wczoraj wieczorem, pod składanym siedzeniem przy drzwiach. June stała obok i chciałem zrobić miejsce.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "June jechała z tobą?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Moja dziewczyna. Wysiadłem za nią, a plecak pojechał dalej. Zachowałem się jak pies za kiełbasą. Nie, źle to brzmi.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Wie, że tu jesteś?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Myśli, że mam kurs. Jestem kurierem, więc to nawet brzmi prawdopodobnie. Poza tym to prawda, tylko bez paczki.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Kiedy zauważyłeś zgubę?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W domu. Chciałem sprawdzić kieszeń na plecach i złapałem za powietrze. Przez chwilę sprawdzałem jeszcze raz.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wracałeś na przystanek?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Na przystanek, na pętlę, tutaj. Trasę mam już przećwiczoną, tylko na rowerze zwykle lepiej mi idzie.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co ma się wydarzyć o siódmej?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "June wraca z piekarni na kawę. Wtedy poproszę ją o rękę. Znaczy, jeśli będę miał czym.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Czemu akurat podczas kawy?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wtedy jesteśmy sami i ona jeszcze nie zaczyna opowiadać, co trzeba naprawić. Później się nie wcisnę z pytaniem.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Będzie po pracy. Nie lepiej dać jej odpocząć?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Może lepiej. Tylko przekładam od tygodnia. Jak plecak się znajdzie, już nie mam wymówki.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Masz przygotowane słowa?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Na serwetce. Trzy wersje, dwie skreślone. Trzecia jest krótka i przez to najgorsza.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Co jest złego w krótkiej?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Że potem od razu ona odpowiada. W długich mogłem jeszcze chwilę gadać.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego plecak musi wrócić jeszcze przed ranem?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Mam w nim prezent dla June. Nie zastąpię go po drodze, nawet gdyby sklep był otwarty.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Jest drogi?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dla mnie tak. Dla jubilera pewnie nie. Patrzył, jakbym kupował baterię, a ja się spociłem.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Zapłaciłeś już całość?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie. Resztę w ratach. Tylko nie chcę pierwszej rozmowy po oświadczynach zaczynać od spłacania.",
              "mina": "emocja"
            }
          ]
        },
        {
          "tekst": "June będzie zła za tę zgubę?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Za plecak nie. Za to, że chodzę całą noc i nic nie mówię, już może. Ona lubi wiedzieć, o co się martwić.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Powiesz jej potem?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "O plecaku tak. O wszystkim naraz nie. Jeszcze zanim odpowie, będę musiał jej tłumaczyć pół życia.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak udowodnisz, że plecak jest twój?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Opiszę zawartość. Tylko nie wyciągaj tego małego pudełka na widok wszystkich.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co ci przeszkadza w pudełku na ladzie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Ktoś zobaczy, ktoś skojarzy June. Piekarnia jest jak gazeta, tylko szybciej roznoszą wiadomości.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wszyscy ją znają?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Ci, co wstają wcześnie. Ja wcześniej nie wstawałem. Teraz znam nawet ceny bułek, których nie jem.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Co jeszcze jest charakterystycznego w zawartości?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bilety mają daty na odwrocie. Z kursów z June. To nie makulatura, proszę nie wyrzucać.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Ona o nich wie?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Nie. O tych pewnie powiem prędzej niż o cenie prezentu. Chociaż bilety brzmią gorzej, kiedy mówię na głos.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co takiego zależy od zawartości plecaka?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Chcę oświadczyć się June. Jeśli odmówi, to odmówi. Tylko chciałbym usłyszeć to od niej, nie od zamkniętego magazynu.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Rozmawialiście o ślubie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "O mieszkaniu, pralce, takich rzeczach. Ślub trochę omijam, żeby nie zepsuć niespodzianki.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Może nie chce niespodzianki?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Może. Wiesz co, tego już tutaj nie rozwiążę. Najpierw odzyskam plecak, potem będę pytał właściwą osobę.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Wrócisz tutaj po wszystkim?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jeśli się uda, powiem. Jak nie, też pewnie przyjdę, bo nadal mam pękniętą klamrę i głowę gdzie indziej.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Naprawisz ją wreszcie?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Tak. Właśnie dostała pierwsze miejsce na liście wydatków. Tuż po czymś, czego jeszcze nie skończyłem spłacać.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Czterdzieści wpłacone, dwieście do spłaty. June wie?",
      "ton": "niewygodne",
      "wymaga": "d2_paragon_raty",
      "odpowiedz": "Nie wie. Kazałaby oddać pierścionek i kupić pralkę. Chciałem raz przynieść coś, co nie jest potrzebne do sprzątania.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "A raty będziecie płacić razem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odmowa": "Eee, to prywatne. Znaczy nie tajne, tylko... prywatne. Możemy wrócić do plecaka?",
          "odpowiedz": "Ja zapłacę. Wezmę kursy. Wiem, brzmi to łatwo, kiedy jeszcze nie trzeba wsiadać na rower.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Na serwetce dwie wersje skreślone. Dlaczego zostawiłeś trzecią?",
      "ton": "uprzejme",
      "wymaga": "d2_serwetka_trzy",
      "odpowiedz": "W dwóch pierwszych obiecywałem za dużo. W trzeciej tylko pytam. Nie będę tu ćwiczył, bo jeszcze zapamiętam twój głos zamiast jej.",
      "mina": "emocja"
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Sprawdzę tylną kieszeń. Jest. Dobra, teraz już tylko ja mogę to zepsuć.",
      "zysk": "Jonah wraca do domu z pierścionkiem i ma noc na ćwiczenie oświadczyn.",
      "strata": "Plecak wychodzi po samym opisie i podpisie, nikt nie sprawdził pudełka w kieszeni.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Jonah: „Zdążyłem na kawę i zadałem pytanie bez serwetki. Trzymaj kciuki, jeśli masz kciuki.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Znajdę kogoś, kto potwierdzi. Tylko nie June, przecież nie mogę teraz przyprowadzić June.",
      "zysk": "Plecak zostaje w biurze do czasu dowodu własności.",
      "strata": "Jonah może nie zdążyć do siódmej, a June zauważy, że coś jest nie tak.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Jonah: „Odebrałem plecak rano, po kawie. June pyta, czemu od progu sprawdzam tylną kieszeń.”"
      }
    },
    {
      "akcja": "wez_pierscionek",
      "etykieta": "Zatrzymaj pierścionek, plecak wydaj",
      "kasa": 150,
      "reakcja": "Pudełko jest puste. Nie, zaczekaj, ono nie było puste. Idę na policję.",
      "zysk": "Pierścionek jest wart w lombardzie około 150 dolarów, niemal tygodniowy czynsz.",
      "strata": "Jonah zgłasza kradzież na komisariacie, a oświadczyny rano upadają. Policja zapyta, kto miał plecak.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Kurier zgłosił brak pierścionka w odebranym plecaku. Czyli: muszę sprawdzić, co działo się z nim w biurze.”"
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
      "tekst": "Jak rozpoznać futerał?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarny, sztywny. Rączka owinięta czerwoną taśmą, bo skóra się przetarła.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Ma jakiś znak na zewnątrz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Zielona naklejka. Z boku trochę zdrapana. Jest na wierzchu futerału, nie na skrzypcach.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Skąd to zdrapanie?",
              "ton": "niewygodne",
              "wymaga": null,
              "gasi": "naklejka",
              "odpowiedz": "Zahaczyłam paznokciem. W tramwaju nie umiem trzymać rąk spokojnie. Teraz też nie.",
              "mina": "klamie",
              "dalej": [
                {
                  "tekst": "Z naklejki zdrapano numer inwentarzowy. Przypadkiem?",
                  "ton": "niewygodne",
                  "wymaga": "d2_naklejka_zielona",
                  "klucz": "naklejka",
                  "odpowiedz": "Nie. Próbowałam go usunąć. Chciałam, żeby przez chwilę futerał nie wyglądał na cudzy.",
                  "mina": "emocja"
                }
              ]
            }
          ]
        },
        {
          "tekst": "Co leży obok skrzypiec?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kalafonia, jedwabna szmatka i nuty Mendelssohna. Na nutach moje zapiski ołówkiem.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Po czym poznasz własne zapiski?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Wszystko poprawiam, a potem ścieram. Papier jest prawie przezroczysty w miejscach, gdzie najczęściej się mylę.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak można zostawić futerał w tramwaju?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Czwórka, ostatni kurs. Mama zadzwoniła, wstałam z telefonem przy uchu i wysiadłam. Futerał stał między moimi nogami i został w tramwaju.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "O czym rozmawiałyście?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "O przesłuchaniu. Upiekła ciasto na potem. Nie wiem jeszcze, co będzie potem, ale ciasto już jest.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Powiesz jej o zgubie?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Jak odzyskam. Inaczej zadzwoni do wszystkich i będę musiała uspokajać ją zamiast siebie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "W którym miejscu siedziałaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W czwórce, przy oknie. Futerał stał pionowo, rączką do mnie. Wiem, jak go zostawiłam, nie wiem, jak mogłam wyjść.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Ktoś mógł go zabrać za tobą?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "Przyszłam po futerał, a nie po czarne scenariusze. Naprawdę nie mam na to czasu.",
              "odpowiedz": "Mógł. Ale liczę, że oddał, skoro przyszłam tutaj. Nie mam już pomysłu na kolejne miejsce.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Czyje są skrzypce?",
      "ton": "niewygodne",
      "wymaga": null,
      "gasi": "wyp",
      "odpowiedz": "Moje. Gram na nich od siedmiu lat. Proszę nie robić z tego czegoś dziwnego.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Od kogo je masz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Od nauczycielki. Dawno temu. Znam każdy dźwięk tego instrumentu.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Pamiętasz nazwisko lutnika?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Etykieta jest w środku. Nazwisko mi wyleciało. Na przesłuchaniu pytają o grę, nie o etykiety.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Kartka mówi: własność Konserwatorium, termin do 7 sierpnia. Jak to?",
          "ton": "niewygodne",
          "wymaga": "d2_etykieta_wyp",
          "klucz": "wyp",
          "odpowiedz": "Są wypożyczone. Termin minął, a komisja zbiera się w czwartek. Bez nich nie zagram przesłuchania.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Dlaczego od razu nie powiedziałaś?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo wtedy patrzy się tylko na datę. A ja przez cały czas pilnowałam tych skrzypiec. Do wczoraj.",
              "mina": "neutralna",
              "dalej": [
                {
                  "tekst": "Znajomość instrumentu nie przedłuża wypożyczenia.",
                  "ton": "niewygodne",
                  "wymaga": null,
                  "odpowiedz": "Wiem. Nie udowadniam, że termin nie minął. Proszę, żeby pozwolić mi zagrać mimo tego.",
                  "mina": "neutralna",
                  "dalej": [
                    {
                      "tekst": "Powiesz komisji, że skłamałaś o własności?",
                      "ton": "rzeczowe",
                      "wymaga": null,
                      "odpowiedz": "Jeśli zapytają, odpowiem. Nie obiecam teraz, że sama zacznę od najgorszego.",
                      "mina": "neutralna"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co czeka cię o ósmej?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Przesłuchanie do orkiestry. Weszłam z listy rezerwowej. Ktoś zrezygnował i zadzwonili do mnie.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Możesz dostać inny termin?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie. Albo przyjdę z instrumentem, albo zagra następna osoba. Tam nie zostawia się pustego krzesła.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Masz jak pożyczyć inne skrzypce?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "O tej porze nie. Nawet gdybym miała, musiałabym się przyzwyczaić. To nie jest zamiana parasola.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jak długo się przygotowujesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Teraz po dziesięć godzin dziennie. Sąsiedzi wiedzą, w którym miejscu mi nie wychodzi, pewnie lepiej ode mnie.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "A dziś udało się przespać choć chwilę?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Nie. Jak zamykam oczy, widzę futerał w odjeżdżającym tramwaju. Wolę stać przy szybie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co zrobisz, jeśli znajdzie się podobny futerał?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Poproszę o obejrzenie, nie zabiorę w ciemno. Zewnętrzne ślady można pomylić. Moje nuty rozpoznam.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "A sam instrument?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Też. Sposób, w jaki odpowiada pod smyczkiem. Tego nie potrafię wpisać w rubrykę, ale usłyszę od razu.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Musiałabyś tu zagrać?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Wystarczy kilka dźwięków. Jeśli nie wolno, pokaż nuty. Nie będę urządzać koncertu kolejce.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co sprawdzisz najpierw?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czy mostek stoi. Potem smyczek. Naklejki mogą się odkleić, tego nie naprawię przed ósmą.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Myślisz, że coś się stało po drodze?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie wiem. I właśnie dlatego chcę zajrzeć, zanim zacznę obiecywać, że wszystko jest dobrze.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego właśnie ta orkiestra?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Bo mnie zaprosili. Nie dlatego, że ktoś zna mamę albo nauczycielkę. Chcę wejść i zagrać.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Mama też przyjdzie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Czeka w domu z ciastem. Będzie dzwoniła, zanim komisja skończy pisać. Już to wiem.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Co jej powiesz, jeśli nie dostaniesz miejsca?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Że zagrałam. Tyle chcę móc powiedzieć. Resztę da się jakoś przełknąć razem z tym ciastem.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "A jeśli trzeba będzie wybrać między przesłuchaniem a oddaniem skrzypiec?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wiem, o co pytasz. Chcę je oddać po przesłuchaniu. Nie umiem zrobić obu rzeczy naraz.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "To obietnica czy prośba o wyjątek?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Prośba. Obietnicę też mogę dać, ale przecież nie znasz mnie na tyle, żeby to coś załatwiało.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego nie oddałaś instrumentu po terminie wypożyczenia?",
      "ton": "niewygodne",
      "wymaga": "d2_etykieta_wyp",
      "klucz": "wyp",
      "odpowiedz": "Czekałam na przesłuchanie. Komisja zbiera się w czwartek. Powinnam była zgłosić to wcześniej, zanim zostałam z cudzym instrumentem i wymówką.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Konserwatorium wie o zgubie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie. Jak się dowiedzą, mogą nie wypożyczyć mi już nawet pulpitu. Ale sama go zaniosę, nie będę prosić o tramwaj.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Na naklejce zdrapano numer inwentarzowy. Próbowałaś go usunąć?",
      "ton": "niewygodne",
      "wymaga": "d2_naklejka_zielona",
      "klucz": "naklejka",
      "odpowiedz": "Tak. Paznokciem, w tramwaju. Chciałam, żeby przez chwilę nie wyglądały na cudze. Teraz nawet to jest dowodem przeciwko mnie.",
      "mina": "emocja"
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "W czwartek stanę przed komisją z futerałem. Dziś muszę najpierw stanąć przed tą drugą.",
      "zysk": "Hana zagra przesłuchanie i ma szansę dostać miejsce w orkiestrze.",
      "strata": "Oddajesz instrument konserwatorium komuś, komu wypożyczenie wygasło w sobotę.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Zagrałam, a komisja przedłużyła wypożyczenie do końca roku. Numeru na naklejce już nie ruszam. — H. Moreau"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Powiedz w konserwatorium, że przyszłam sama. Niech chociaż to będzie zapisane poprawnie.",
      "zysk": "Skrzypce wracają do prawdziwego właściciela, czyli do konserwatorium.",
      "strata": "Hana traci przesłuchanie i miejsce na liście.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Na przesłuchaniu zagrała następna osoba z listy. Ćwiczę na altówce koleżanki, a futerału nie mam nawet gdzie odłożyć. — H. Moreau"
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
      "tekst": "Jak wygląda parasol?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarny, automatyczny. Nie składany do torebki, pełny. Proszę nie otwierać nad papierami.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jaka rączka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Drewniana, w kształcie kaczki. Kaczka nie jest ozdobą doczepioną do rączki, tylko samą rączką.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Wygodnie się ją trzyma?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Wygodniej niż torby, które wtedy niosłam. Parasol miał haczyk, a ręce tylko dwie.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Co odróżnia go od takiego samego?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dziób odłamany z lewej strony. Nie od deszczu. Już taki kupiłam, po wichurze.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Kupiłaś uszkodzony?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Tańszy. Deszcz wpada od góry, nie przez kaczy dziób. Do tego łatwiej go rozpoznać.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie został w czwórce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W czwórce, wczoraj, na haczyku przy tylnych drzwiach. Wysiadłam na pętli z torbami. Parasol przypomniał się za zakrętem.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Próbowałaś dogonić tramwaj?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mam sześćdziesiąt jeden lat i dwie torby. Tramwaj ma szyny. Wynik był do przewidzenia.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Co zrobiłaś zamiast tego?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Spytałam, dokąd oddają zguby. Proszę, jestem. Bez parasola, ale bez zadyszki.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Po co jechałaś na pętlę?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Rozwiesić ogłoszenia. Ludzie czekają i czytają, nawet jeśli nie zamierzali.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Tam też pytasz o zgodę?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Pytam tam, gdzie ktoś pilnuje słupa. W pozostałych miejscach pytania musiałabym zadawać słupowi.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co ma być na ogłoszeniu?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "„Szukam kota, rudego, od zimy. Odpowiedzi na słupie przy wejściu”. Krótkie. Długich nie czytają.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Dlaczego odpowiedzi na słupie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo tam ktoś zobaczył ogłoszenie i tam wróci. Nie każdy chce zostawiać telefon obcej osobie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Ty też nie chcesz podać telefonu?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie chcę odbierać po nocy żartów o rudych kotach. Słup nie musi spać.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jak długo ma wisieć?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Dopóki ktoś odpowiada. Sama zdejmę, kiedy będzie niepotrzebne. Nie zostawię strzępów na zimę.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Jak poznasz, że odpowiedź jest dla ciebie?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Będzie pod moją kartką. Jeśli masz wątpliwość, odłóż. Nie trzeba jej najpierw rozwiązywać jak zagadki.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak wabi się kot?",
      "ton": "niewygodne",
      "wymaga": null,
      "gasi": "kot",
      "odpowiedz": "Fryderyk. Rudy, z białą łapką. Na wołanie nie przychodzi.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Od zimy nie ma żadnego śladu?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Są odpowiedzi na kartkach. Dlatego dalej wieszam. Nie dlatego, że lubię obchodzić wszystkie pętle.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co ludzie piszą?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Godziny, numery linii. Raz „jeszcze nie”. O samym kocie niewiele, uprzedzę następne pytanie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Po co imię, skoro nie przychodzi na wołanie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Bo przy zgłoszeniu pytają o imię. Nawet gdy nikt go potem nie używa.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Schowana kartka i te odpowiedzi dotyczą naprawdę kota?",
              "ton": "niewygodne",
              "wymaga": "d2_parasol_kartka",
              "klucz": "kot",
              "odpowiedz": "Nie szukam kota. Tyle mogę sprostować. Reszty nie będę tłumaczyć komuś, kto jeszcze nie zdecydował, czy pozwoli mi powiesić kartkę.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego zależy ci na naszym słupie?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Stoi przy wejściu. Ludzie go mijają, kiedy patrzą na światło okienka. Nikt nie musi się specjalnie zatrzymywać.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "A pieczątka biura co zmieni?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mniej chętnie zerwą. Papierek z pieczątką bywa dla niektórych ważniejszy od właściciela papierka.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Chcesz, żeby wyglądało na urzędowe?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Na dozwolone. Nie proszę o podpis pod tym, czego nie wiesz. Proszę o zgodę na słup.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Inne słupy nie wystarczą?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wystarczą do wieszania. Nie wystarczą komuś, kto ma wrócić właśnie tutaj.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto ma wrócić?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "A to już, za pozwoleniem, moja rzecz. Przyszłam po parasol.",
              "odpowiedz": "Osoba, która przeczytała kartkę. To nie jest nazwisko, które można wpisać do księgi.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co mam robić z odpowiedziami?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Zostawić pod ogłoszeniem albo odłożyć dla mnie, jeśli przemokną. Bez otwierania przy kolejce.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Jak często je sprawdzasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kiedy przejeżdżam. Nie będę dzwoniła co godzinę. Szyba ma służyć też innym ludziom.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "A jeśli długo nie przyjdziesz?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Nie wyrzucaj od razu. Nie każdy brak wizyty oznacza, że już nie zależy.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "A gdy ktoś będzie pytał, kto je odbiera?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Powiedz, że ogłoszenie wisi na słupie. To akurat może sprawdzić sam, bez twojej pomocy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Mam ukrywać twoje nazwisko?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Przedstawiłam się tobie. Na kartce nazwiska nie ma. Wystarczy nie dopisywać go za mnie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Po co ukrywać ogłoszenie w rączce parasola?",
      "ton": "niewygodne",
      "wymaga": "d2_parasol_kartka",
      "klucz": "kot",
      "odpowiedz": "Tam papier nie moknie. I nie, to nie tylko sprawa kota. Nie podam cudzych nazwisk, żeby uzasadnić własny parasol.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Czego mam się spodziewać po odpowiedziach?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Czasem ktoś zostawia coś przy okienku. Jeśli to się stanie, nie pokazuj od razu całej kolejce. Na więcej się nie umawiamy.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "ines_potwierdz",
      "etykieta": "Potwierdź ogłoszenie i przybij pieczątkę okienka",
      "reakcja": "Pieczątkę w rogu, żeby nie zakryła tekstu. Jeśli przyjdzie odpowiedź, proszę ją odłożyć bez czytania.",
      "zysk": "Parasol wraca do Ines, a ogłoszenie ma pieczątkę, więc nikt go nie zdejmie.",
      "strata": "Okienko jest teraz widoczne na słupie, a ktoś przeczyta pieczątkę jako zaproszenie.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Ines Calloway: „Przyszła odpowiedź, a pod okienkiem ktoś coś zostawił. Proszę nie otwierać tego przy ludziach. — I.C.”"
      }
    },
    {
      "akcja": "ines_odmow",
      "etykieta": "Wydaj parasol, ogłoszenia odmów",
      "reakcja": "Parasol wezmę. Ogłoszenie powieszę gdzie indziej, tylko ktoś będzie musiał szukać drugiego słupa.",
      "zysk": "Okienko nie robi za tablicę ogłoszeń i nikt nie zapyta o słup.",
      "strata": "Ines znajdzie inny słup, a kartki będą wisieć dalej, tylko bez Twojej wiedzy.",
      "echo": {
        "za_dni": 4,
        "forma": "list",
        "tekst": "Ines Calloway: „Na nowym słupie też zostawiają kartki. Parasol wrócił na swój haczyk, tym razem w domu. — I.C.”"
      }
    },
    {
      "akcja": "ines_zdejmij",
      "etykieta": "Wydaj parasol i zdejmij ogłoszenie ze słupa",
      "reakcja": "Moje zdejmij. Cudze odpowiedzi odłóż, ktoś może po nie wrócić. Nie są śmieciami tylko dlatego, że nie mają pieczątki.",
      "zysk": "Słup przy wejściu jest czysty, a do biura nikt nie przynosi kartek.",
      "strata": "Ktoś czekał na odpowiedź na tym słupie i nie dostanie jej.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Mężczyzna w szarym kapeluszu: „Szukam ogłoszenia o kocie, a słup jest pusty. Zgodnie z regulaminem zapiszę, kto kazał je zdjąć.”"
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
      "tekst": "Jak rozpoznać telefon?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "maz",
      "odpowiedz": "Czarny, w skórzanym etui. Kupiłem to etui Mai na rocznicę.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Ma jakieś uszkodzenie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Róg etui się odkleja. Mówiłem, żeby podkleiła, ale odkładała. Teraz akurat to się przyda.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Lena, też je poznasz?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Tak. Pod spodem jest nasze zdjęcie z dzieciństwa. Ale nie trzeba go wyciągać przy wszystkich.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Znasz kod do telefonu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maz",
          "gasi": "kod",
          "odpowiedz": "Nie miała kodu. Nie mieliśmy przed sobą tajemnic.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "To dlaczego nie chcesz po prostu poczekać na nią z odbiorem?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "maz",
              "odpowiedz": "Bo zaginęła. Nie mogę czekać na osobę, której szukamy. Telefon może pomóc ją znaleźć.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Skąd wiadomo, że został w jedenastce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "siostra",
      "odpowiedz": "W czwartek wieczorem został w jedenastce. Motorniczy go oddał, policja zna kurs. Evan rozmawiał z Reyesem, ja nie.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co dokładnie powiedział Reyes?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Że telefon jest w biurze. We wtorek sprawa idzie dalej, więc potrzebuję go teraz, zanim zacznie krążyć po urzędach.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dalej czy do zamknięcia? Na wejściu mówisz, że ją zamkną.",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "maz",
              "odpowiedz": "Dla mnie to jedno. Przestanę mieć jednego człowieka, do którego mogę zadzwonić. Tak to rozumiem.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Maya kontaktowała się z tobą po zaginięciu?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "siostra",
          "gasi": "kontakt",
          "odpowiedz": "Od czwartku nie miałam od niej ani słowa. Nic nie wiem.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "W czwartek o 23:48 piszesz: „Nie wracaj do domu”. Dlaczego?",
              "ton": "niewygodne",
              "wymaga": "d3_telefon_wiadomosc",
              "kto": "siostra",
              "klucz": "kontakt",
              "odpowiedz": "Bo zadzwoniła, że boi się wracać. Miałam po nią jechać w sobotę. Evan, odsuń się, nie będę przy tobie mówiła więcej.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co wydarzyło się przed jej wyjściem?",
      "ton": "niewygodne",
      "wymaga": null,
      "kto": "maz",
      "odpowiedz": "Zjedliśmy kolację. Wyszła do pracy. Żadnej kłótni, zwyczajny wieczór.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Pracuje nocami?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Jest elektryczką. Awarie zdarzają się o różnych porach. Nie pytałem o każdą klatkę schodową.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A o godzinę powrotu?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "maz",
              "odpowiedz": "O godzinę pytam. Mieszkamy razem, chyba mogę wiedzieć, kiedy zamknąć drzwi.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Lena, co możesz potwierdzić?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Nie było mnie przy kolacji. Nie będę potwierdzać czegoś tylko dlatego, że Evan mówi pełnymi zdaniami.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "W takim razie czemu przyszłaś z nim?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Żeby nie wyszedł stąd z telefonem, zanim zdążę powiedzieć, że to rzecz Mai. Jej, nie jego.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co zrobisz z telefonem po odbiorze?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "maz",
      "odpowiedz": "Zaniosę Reyesowi na komisariat przy Rynku. Jeszcze tej nocy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "A jeśli zostanie tutaj do odbioru przez policję?",
          "ton": "niewygodne",
          "wymaga": null,
          "ustawia": "d3_evan_oferta",
          "kto": "maz",
          "odpowiedz": "Stracimy czas. Sto dolarów od ręki, bez wpisu, i sam go zaniosę. Nie trzeba czekać na papier.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Za co te sto dolarów?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "maz",
              "odpowiedz": "Za kłopot. Za to, że zajmujesz się naszą sprawą po nocy. Nie przypisuj temu od razu czegoś brzydkiego.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Lena, co ty zrobisz po odbiorze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Schowam u siebie. Jak Maya się odezwie, oddam jej. Nie muszę czytać, żeby przechować.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nawet jeśli policja o niego poprosi?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Wtedy porozmawiam z policją. Nie z Evanem przez policję. To jest różnica.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego nie możecie ustalić tego między sobą?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "siostra",
      "odpowiedz": "Bo on pyta, gdzie jest Maya, a ja pytam, czego ona chce. I każde uważa, że drugie nie odpowiada.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Czego według ciebie chce Maya?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Wrócić do domu. Jak tylko się uspokoi, wróci. Lena robi z tego coś większego.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Przed chwilą mówiłeś, że nie było kłótni. Z czego ma się uspokoić?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "maz",
              "odmowa": "Nie widzę związku z telefonem. Trzymajmy się sprawy, dobrze?",
              "odpowiedz": "Ze wszystkiego. Praca, zmęczenie. Nie powiedziałem, że chodzi o mnie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Możesz mówić za siostrę?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Nie. Dlatego nie chcę oddawać jej rzeczy komuś, kto twierdzi, że może.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co proponujesz, jeśli telefon zostanie tutaj?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Żeby czekał na nią. Bez obietnicy, że przyjdzie. Ja takiej obietnicy nie złożę.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Kto ma podpisać odbiór?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "maz",
      "odpowiedz": "Ja, Evan Doyle. Jestem jej mężem. Nie próbuję się tutaj ukrywać.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Podpis daje ci prawo czy tylko zapisuje, kto zabrał rzecz?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Zapisze, że zabrał mąż. Dla mnie to wystarczy. Dla ciebie najwyraźniej nie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Lena, podpiszesz swoim nazwiskiem?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Brandt. Nie Doyle. Nadal jestem jej siostrą, zanim to też zacznie być przeszkodą.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "A jeśli odbiór wymaga zgody Mai?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "To nie wydasz go nikomu. Nie możemy jej spytać, właśnie dlatego tu stoimy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Potrafisz zaakceptować taki wynik?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Nie podoba mi się. Ale wolę, żeby był za tą szybą, niż żebym znowu nie wiedziała, kto go czyta.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Lena, dlaczego kazałaś Mai nie wracać do domu?",
      "ton": "niewygodne",
      "wymaga": "d3_telefon_wiadomosc",
      "kto": "siostra",
      "klucz": "kontakt",
      "odpowiedz": "Zadzwoniła przestraszona. Napisałam, że przyjadę w sobotę. Nie daj mu telefonu, bo wtedy pójdzie pytać pod moje drzwi.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Evan, czego Maya się bała?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "maz",
          "odpowiedz": "Niczego. Lena od lat nastawia ją przeciwko mnie. Teraz znalazła sposób, żeby zrobić to przy świadkach.",
          "mina": "klamie"
        },
        {
          "tekst": "Potwierdzasz, że to twój numer?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Tak. Nie wycofam tego, co napisałam. Chcę tylko, żeby nie dostawał do ręki całej reszty.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj_evan",
      "etykieta": "Wydaj telefon Evanowi",
      "kto": "maz",
      "reakcja": "Zaniosę go Reyesowi. Lena, przestań patrzeć na ekran, idziemy.",
      "zysk": "Telefon trafia do policji z podpisem Evana w księdze. Czyste wydanie, nikt nie ma do ciebie pretensji.",
      "strata": "Evan przeczyta SMS od Leny i pójdzie do niej z awanturą, a Lena ci tego nie zapomni.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Evan przeczytał wiadomość i krzyczał pod moimi drzwiami, aż wyszła sąsiadka. Powtarzał, że skoro biuro wydało mu telefon, ma prawo pytać. — Lena"
      }
    },
    {
      "akcja": "wydaj_lena",
      "etykieta": "Wydaj telefon Lenie",
      "kto": "siostra",
      "reakcja": "Schowam go u siebie. Evan, odbiór podpisuję ja, nie musisz zaglądać mi przez ramię.",
      "zysk": "Lena zabiera telefon i wiadomość nie dociera do Evana.",
      "strata": "Evan zostaje bez śladu po żonie i przestaje ufać biuru.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Evan Doyle: „Telefon dostała Lena, ja nadal nie mogę go zobaczyć. Proszę pokazać, na jakiej podstawie wydano go właśnie jej.”"
      }
    },
    {
      "akcja": "zatrzymaj",
      "etykieta": "Zatrzymaj telefon dla Mai",
      "reakcja": "Zostaje tutaj? Zapisz, że prosiłem o odbiór. Nie chcę jutro usłyszeć, że nikt się nie zgłosił.",
      "zysk": "Telefon leży w biurze, nikt go nie czyta.",
      "strata": "Evan i Lena wychodzą z niczym, a Maya nie wiadomo czy po telefon wróci.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Doyle dzwoni co godzinę w sprawie depozytu. Telefon jest u was, czyli przynajmniej tej rzeczy nie muszę szukać.”"
      }
    },
    {
      "akcja": "wez_100_evan",
      "etykieta": "Wydaj telefon Evanowi i przyjmij od niego 100 $",
      "kasa": 100,
      "kto": "maz",
      "reakcja": "Sto, jak mówiłem. Telefon wezmę sam, Lena nie musi już niczego podpisywać.",
      "zysk": "Dostajesz 100 dolarów do ręki, czyli większość raty dla Kuby.",
      "strata": "Telefon idzie do Evana bez podpisu i bez wpisu. Lena widzi kopertę, a Evan zapamięta, że biuro ma cenę, i w przyszłym tygodniu przyjdzie po więcej.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Lena Brandt: „Widziałam pieniądze przy szybie. Następnym razem, gdy Maya zapyta, gdzie zostawić rzecz, nie powiem o tym biurze.”"
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
      "tekst": "Jak rozpoznać budzik?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Blaszany, okrągły, dwa dzwonki na górze. Wygląda, jakby miał zaraz krzyczeć. I zwykle ma.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jakiś znak szczególny?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na spodzie naklejka „Mama”. Od mamy go dostałam, więc podpisałam, żeby nikt nie myślał, że to sprzęt zajezdni.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Długo ją tam trzymasz?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Dwanaście lat. Naklejka przetrzymała niejedną naprawę, więc nie będę jej teraz zdzierać.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Jak wygląda wskazówka alarmu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jest czerwona, krzywa. Stoi na czwartą piętnaście. Prostowałam ją kombinerkami, bez konkursu piękności.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Na wejściu mówisz o czwartej. To która godzina?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Kwadrans po. Mówię „na czwartą”, bo nikt o tej porze nie słucha minut. W magazynie akurat mają znaczenie.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Po co wozić budzik tramwajem?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Nocowałam u siostry. Wzięłam go, żeby rano nie rozbudzać całego domu szukaniem telefonu.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Czemu u siostry?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Pilnowałam dzieci. Ona miała nockę, ja trójkę na głowie. Budzik chyba miał spokojniejszy wieczór.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dzieci nie chciały go zatrzymać?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Chciały zobaczyć, jak dzwoni. Pokazałam raz. Drugi raz już wolały bajkę.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Gdzie został w szóstce?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W szóstce, kiedy wracałam po nocowaniu u siostry. Leżał obok mnie. Torbę wzięłam, jego nie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego nie schowałaś go do torby?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo bałam się znowu skrzywić wskazówkę. Ochroniłam go przed torbą, zgubiłam w tramwaju. Zapisz sobie, ku przestrodze.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "O której zaczynasz pracę?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Za pięć piąta mam już leżeć pod tramwajem. Kwadrans po czwartej pobudka, potem kawa i w drogę.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co się stanie, jeśli zaśpisz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ktoś zrobi moją robotę i nie będzie zadowolony. Tramwaj nie powie: Dana śpi, pojadę jutro.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nie mogą zadzwonić?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Mogą, jak już mnie brakuje. Budzik ma zadzwonić, zanim zacznie mnie brakować. Cały wynalazek na tym polega.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Długo jesteś w zajezdni?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jedenaście lat. Wiem, który zawias zaskrzypi, zanim otworzę drzwi.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "A o tym okienku coś wiesz?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Tyle, że od miesiąca w gazecie wisiało „praca nocna, bez referencji”. Nikt się nie palił. Teraz przynajmniej świeci.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Telefon nie wystarczy do budzenia?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Wyłączam przez sen. Jedną ręką, nawet oczu nie otwieram. Do niczego innego nie mam takiego talentu.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "A ten czym cię pokonuje?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Skacze po szafce. Trzeba go złapać. Jak już gonię blachę po pokoju, to jestem przytomna.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Sąsiedzi też?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Jeden tak. Przyszedł się skarżyć, potem przywykł. Teraz zostawia ogórki, budzenie ma gratis.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Próbowałaś ustawić kilka alarmów?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Tak. Wyłączyłam kilka alarmów. Nie będę płacić za dziesiąty, skoro ten jeden działa.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Upierasz się przy nim, bo go znasz?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "A co, nie wolno? Każdy ma coś, przy czym się upiera.",
              "odpowiedz": "Bo działa na mnie. Budzik może być sprawny i bezużyteczny. Tak jak mechanik przed kawą.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Skąd masz ten budzik?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Od mamy, dwanaście lat temu. Inni dostają biżuterię, ja urządzenie do przerywania snu.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Sama go wybrała?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Tak. Znała mnie. Wiedziała, że delikatne dzwonienie tylko mi się przyśni.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Miała taki sam?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Ten stał u niej w kuchni. Teraz u mnie. Dlatego wiem, jak powinien brzmieć.",
              "mina": "emocja"
            }
          ]
        },
        {
          "tekst": "Dwanaście lat bez wymiany?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bez wymiany całego. Mechanizm swoje przeszedł. Obudowa nadal daje radę, poza spotkaniem z podłogą.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Naprawa jeszcze się opłaca?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "W dolarach nie zawsze. Ale ja pytam, czy da się naprawić, nie czy ładniej wygląda nowy.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Kto może potwierdzić, że jest twój?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Siostra, sąsiad, pół zajezdni. Tylko każde będzie miało własną opowieść o tym hałasie.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Przyprowadzisz kogoś, jeśli trzeba?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Przyprowadzę. Zamiast spać będziemy chodzić z papierami. Potem budzik obudzi osobę, która jeszcze nie zasnęła.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Siostra jest teraz w domu?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Wraca z nocki. Nie będę jej wyciągać od dzieci, jeśli wystarczy obejrzeć naklejkę.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co zrobisz, jeśli go nie wydam?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Spróbuję zasnąć przy telefonie. Potem pewnie się spóźnię. Nie będę udawać, że mam tajny drugi budzik.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kupisz nowy?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Może. Tylko ten i tak odbiorę. Nowy nie będzie wiedział, jak mi zagrać na nerwach.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Budzik jest gdzieś uszkodzony?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Wgniecenie przy prawym dzwonku. Spadł z lodówki. Dlatego to prawa strona jest krzywa, nie obie.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Dlaczego stał na lodówce?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Żebym musiała wstać. Na szafce mogłam go zgasić przez sen, lodówki z łóżka nie dosięgnę.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Po upadku nadal dzwonił?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Dzwonił. Sprawdziłam, zanim złożyłam z powrotem. Blacha ucierpiała bardziej niż jego zapał.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Próbowałaś wyprostować obudowę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Zostawiłam. Wskazówkę poprawiłam, bo przeszkadzała w ustawianiu. Wgniecenie nie przeszkadza w budzeniu.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Czyli nie musi wyglądać jak nowy?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Ma mnie postawić na nogi. Jak przy okazji stoi krzywo, to jakoś wytrzymam.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Naprawa kosztowała osiemnaście dolarów, nowy dziesięć. Dlaczego?",
      "ton": "niewygodne",
      "wymaga": "d3_rachunek_budzik",
      "odpowiedz": "Bo po naprawie dalej brzmiał jak w kuchni u mamy. Za dziesięć kupię coś, co będę wyłączać przez sen.",
      "mina": "emocja"
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "No, kolego, czwarta piętnaście. Dziś jedziesz w torbie, żadne zwiedzanie tramwaju.",
      "zysk": "Dana wstanie na czwartą piętnaście i zdąży do zajezdni.",
      "strata": "Nic cię to nie kosztuje, poza dwiema minutami kolejki.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Dana Ruiz: „Budzik zadzwonił, sąsiad wstał, ja też. Tramwaj wyjechał bez czekania na mechanika.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Przyprowadzę kogoś z zajezdni. Jak przysnę pod szybą, obudź mnie, skoro trzymasz sprzęt.",
      "zysk": "Budzik zostaje w biurze do potwierdzenia.",
      "strata": "Dana nie wstanie na czwartą i spóźni się do pracy, a w zajezdni nikt jej nie wybroni.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Dana Ruiz: „Czterdzieści minut spóźnienia, zapisane u przełożonego. Telefon wyłączyłam, jak mówiłam.”"
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
      "tekst": "Jak rozpoznać paczkę?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Szare płótno. Zwykłe, bez wzorków. Nie chciałam, żeby się rzucała w oczy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jaki ma kształt?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Płaska. Pod płótnem jest kasetka na kłódkę, więc nie zwija się jak woreczek. Proszę jej nie zgniatać.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Kasetka jest zamknięta?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Na kłódkę. Cudze papiery, cudze oczy. Wolę oszczędzić wszystkim nieporozumień.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Czym jest przewiązana?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Sznurkiem. Węzeł trzyma płótno, nie samą kasetkę. Rozplątanie wystarczy, bez nożyczek.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Chcesz sprawdzić, czy ktoś rozwiązywał?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Chcę odebrać w takim stanie, w jakim zostawiłam. Drobna prośba, chyba zrozumiała.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie została w szóstce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Na półce nad siedzeniem, ostatni kurs. Zawsze tam kładę. Wczoraj najwyraźniej nie powinnam.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co cię rozproszyło?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Liczyłam karę za spóźniony czynsz jednej lokatorki. Cudze rachunki też potrafią zająć człowiekowi głowę.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Nie mogłaś policzyć w domu?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Mogłam. Mogłam też nie zgubić paczki. Wolałabym jednak porozmawiać o tym, co jeszcze da się zrobić.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Dlaczego przewozisz to nocą?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Lokatorzy pracują na zmiany. Odbierają, kiedy wracają. Szóstka jeździ, nawet gdy biura już zamknięte.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Tramwaj zastępuje ci gońca?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Tańszy i zwykle punktualny. Tylko trzeba pamiętać o własnej paczce, przyznaję.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co jest w kasetce?",
      "ton": "niewygodne",
      "wymaga": null,
      "gasi": "papiery",
      "odpowiedz": "Zwykłe pokwitowania i drobne rozliczenia lokatorów. Nic poza tym.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Po co kłódka do zwykłych rozliczeń?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Spróbuj zostawić cudzy dług na stole w kamienicy. Do wieczora każdy zna kwotę, a połowa ją podwoi.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto ma klucz?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Osoba upoważniona. Nie będę wyliczać ludzi przy okienku. Paczka jest moja, klucze to osobna sprawa.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Przez szparę widać paszport z wyciętą stroną. To pokwitowanie?",
          "ton": "niewygodne",
          "wymaga": "d4_blankiet_kasetka",
          "klucz": "papiery",
          "odpowiedz": "To dokument człowieka, który chce wyjechać. Zatrzymasz paczkę, zatrzymasz jego wyjazd. Proszę rozważyć całość.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego ukrywasz to wśród rozliczeń?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo nie każdy, kto pyta o cudzy wyjazd, chce pomóc. Także tutaj, po obu stronach szyby.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Którzy lokatorzy czekają na paczkę?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Z Cooper Street dziewięć. Zarządzam dwudziestoma rodzinami. Nie będziemy teraz robić listy nazwisk.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Czego od ciebie potrzebują?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Żeby ich sprawy nie utknęły w kolejnej szufladzie. Ja już wiem, co komu oddać. Tobie trzeba by tłumaczyć od początku.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli ktoś chce odebrać bez ciebie?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Niech przyjdzie i powie. Tylko potem nie pytaj mnie, dlaczego dostał niewłaściwe papiery.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Do rana naprawdę nie można poczekać?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Niektórzy już mają bilety. Tramwaj nie zaczeka na pieczątkę, a ja nie oddam im straconej podróży.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto konkretnie ma bilet?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie podam nazwiska, żeby dostać paczkę. Wystarczy jedno źle zapamiętane słowo i człowiek zostaje na peronie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak chcesz załatwić odbiór?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Sprawnie. Paczkę rozpoznajesz, nazwisko znasz. Nie musimy spędzić nad tym całej zmiany.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co proponujesz zamiast zwykłego wpisu?",
          "ton": "niewygodne",
          "wymaga": null,
          "ustawia": "d4_koperta_oferta",
          "odpowiedz": "Kopertkę za fatygę. Sto dwadzieścia dolarów, paczka do mnie, bez wpisu. Poprzednik rozumiał takie drobne przysługi.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Za co dokładnie płacisz: za fatygę czy za brak wpisu?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Za to, żeby ktoś nie musiał jutro tłumaczyć obcej osobie całego życia. Jeśli wolisz nazwać to inaczej, słucham.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "A jeśli zrobię pełny wpis?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Podpiszę. Iris Bell, czytelnie. Ja tu mieszkam i zostaję, niezależnie od tego, kto siedzi po drugiej stronie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Po co przypominać, że zostajesz?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Żeby było wiadomo, że można mnie znaleźć. Nie lubię naciskać. Lubię jasne ustalenia.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego właśnie ty trzymasz papiery lokatorów?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Bo przychodzą do mnie, kiedy czegoś potrzebują. Potem wszyscy pytają, czemu mam tyle cudzych spraw.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Mogą odmówić twojej pomocy?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Oczywiście. Mogą też stać samodzielnie w kolejkach. Nie zabieram nikomu tej przyjemności.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A ty co dostajesz w zamian?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Za czas się płaci. Tobie też ktoś płaci za siedzenie tutaj. Mam nadzieję, że punktualnie.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Znasz poprzedniego dyżurnego?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Sama? Znałam. Potrafił załatwić sprawę bez zakładania jej drugiej teczki. Szkoda, że tak nagle odszedł.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wiesz, dokąd?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "Nie lubię naciskać, ale to pytanie nie należy do okienka.",
              "odpowiedz": "Gdybym wiedziała, mogłabym pytać jego o paczkę. A stoję tutaj, prawda?",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Skąd dopisek „dla nocnej zmiany, bez wpisu” przy blankiecie?",
      "ton": "niewygodne",
      "wymaga": "d4_blankiet_kasetka",
      "klucz": "papiery",
      "odpowiedz": "Od twojego poprzednika. Ja nie pytałam o jego noce, on nie pytał o moje paczki. Teraz trzeba się poznać od początku.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Numer 0412 pozwoli znaleźć odbiorcę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Pozwoli rozpoznać odbiór. Nie każdy numer musi od razu prowadzić do nazwiska.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "rejestr",
      "etykieta": "Wydaj paczkę i zapisz w księdze",
      "reakcja": "Iris Bell, tutaj podpis. Zostaw mi kopię, skoro od dziś wszystko mamy tak dokładnie.",
      "zysk": "Księga jest czysta, a paczka wychodzi do Iris z jej podpisem.",
      "strata": "Księgę czyta Victor, więc Iris i paczka 0412 są teraz na papierze. Iris ci tego nie zapomni.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Paczka dotarła, pełny wpis też został zauważony. Zachowam swoje pokwitowanie, skoro oboje cenimy porządek. — I. Bell"
      }
    },
    {
      "akcja": "koperta",
      "etykieta": "Wydaj i przyjmij kopertę 120 $ (bez wpisu)",
      "kasa": 120,
      "reakcja": "Kopertka pod spodem. Paczkę wezmę ostrożnie, nie trzeba jej już rozwiązywać.",
      "zysk": "Dostajesz 120 dolarów, prawie tygodniowy czynsz.",
      "strata": "Paczka wychodzi bez wpisu, jak za poprzednika, a ty zaczynasz być w układzie Iris.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Paczuszka dotarła bez kłopotów. Przy kolejnej wizycie będę już wiedziała, z kim rozmawiam. — I. Bell"
      },
      "wymaga": "d4_koperta_oferta"
    },
    {
      "akcja": "odmow_zglos",
      "etykieta": "Odmów i zgłoś paczkę do kontroli",
      "reakcja": "Zapisz również, że prosiłam o odbiór przed ranem. Lokatorzy zapytają mnie, kto postanowił poczekać.",
      "zysk": "Paczka leży w depozycie. Nikt jej nie dostaje i nikt nie zarzuci ci układu.",
      "strata": "Iris traci cierpliwość, a ktoś, kto miał jutro jechać, może nie pojechać.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Dwóch lokatorów pytało o dokumenty. Podałam im adres biura, żeby nie musieli polegać tylko na moim wyjaśnieniu.”"
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
      "tekst": "Jak wygląda notes?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarny. Służbowy, bez ozdób. Takich jest sporo, więc sam kolor nie wystarczy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jak jest oprawiony?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na spirali, do kieszeni. Kartki da się odwrócić na tył, bez łamania grzbietu.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dużo kartek wyrwanych?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Notuję, nie rozdaję. Nie ustalajmy jednak właściciela na podstawie liczby pustych stron.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Ma jakiś ślad używania?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Wgnieciony z lewej strony. Noszę pod kaburą. Czyli: odkształcenie, nie uszkodzenie po znalezieniu.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Przeszkadza w pisaniu?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Na pierwszych kartkach. Potem się człowiek przyzwyczaja. Do rzeczy łatwiej niż do godzin, które się nie zgadzają.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie został w jedenastce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, po dyżurze, na siedzeniu obok. Rozmawiałem z motorniczym i wysiadłem bez niego. Pierwszy raz od piętnastu lat.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "O czym rozmawialiście?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "O kursie, w którym znalazł telefon Mai Doyle. Pytałem, kto z nią wysiadał. Nie zapamiętał.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wierzysz, że nie pamięta?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Sprawdzam to, co mówi. Brak pamięci nie jest jeszcze kłamstwem. Czyli: nie wpiszę mu świadka, którego nie widział.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Często wracasz tramwajem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Mieszkam na końcu jedenastki. Radiowóz zostaje na komisariacie. Nie jest dodatkiem do wypłaty.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Ktoś mógł widzieć notes na siedzeniu?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Mógł. Jeśli go oddał, podziękuję. Jeśli czytał, to już moje zmartwienie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak idzie sprawa Mai?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Mąż zgłasza zaginięcie, siostra mówi, że nic nie wie. Ja mam sprawdzić, czy ktoś potrzebuje pomocy, a nie rozstrzygać, kto głośniej pyta.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Ile masz czasu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Do wtorku, siódmego września, do szóstej rano. Potem akta idą do wydziału. Tam sprawa dostaje inne biurko.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Inne biurko to koniec szukania?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie. Koniec mojego prowadzenia. Doyle nazywa to zamknięciem. Nie wszystko, co mówi mąż, jest nazwą procedury.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Wierzysz Evanowi?",
          "ton": "niewygodne",
          "wymaga": null,
          "odmowa": "Czyli przesłuchujesz policjanta. Ładnie. Śledztwa przy szybie nie komentuję.",
          "odpowiedz": "Wierzę godzinom, kiedy da się je potwierdzić. Jego godziny na razie się nie składają.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co mam zapisywać, jeśli wróci?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Godzinę i to, o co pyta. Bez własnych dopisków o winie. Wniosek może poczekać, godzina potem ucieka.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak potwierdzić, że notes należy do ciebie?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Zadzwoń na komisariat przy Rynku. Dyżurny mnie zna. Tylko nie czytaj mu zeznań przez telefon.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Nie wystarczy odznaka?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Potwierdza, kim jestem. Nie dowodzi, że każda czarna rzecz w magazynie jest moja.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nie przeszkadza ci sprawdzanie policjanta?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Czekanie przeszkadza. Sprawdzanie mniej. Zrób jedno porządnie, nie będziemy powtarzać drugiego.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co powiedzieć dyżurnemu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Noah Reyes, zgubiony notes służbowy. Resztę ustalę z nim sam. Czyli: nazwisko, rzecz, bez zawartości.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego tak pilnujesz zawartości?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo zapisuję cudze słowa. Ktoś je powiedział policjantowi, nie całej kolejce do okienka.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Czy rodzina ma prawo dostać rzeczy Mai?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Rodzina może o nie wystąpić. To nie znaczy, że każdy przedmiot ma wrócić do męża, zanim zapytamy właścicielkę.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "A jeśli jej nie ma?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wtedy trzeba ostrożniej, nie szybciej. Wiem, że przy szybie to brzmi jak prośba o dodatkowy kłopot.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Potrafisz zagwarantować jej bezpieczeństwo?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie przez okienko i nie bez rozmowy z nią. Obietnic, których nie mogę sprawdzić, do notesu nie wpisuję.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co odróżnia zaginięcie od odejścia z domu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Czasem jedno zdanie tej osoby. Tylko trzeba je usłyszeć od niej, nie od kogoś, kto zna ją najlepiej.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli nie chce rozmawiać nawet z tobą?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "To muszę ustalić, czy może odmówić swobodnie. Reszta to moje zmartwienie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co się stanie, jeśli notes zostanie tutaj?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Będę odtwarzał zapiski. Z pamięci daty wyglądają pewniej, niż są naprawdę. Wolałbym tego nie robić.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Nie masz kopii?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Część informacji jest w aktach. Część jeszcze tutaj. To właśnie różnica między notesem a zamkniętą sprawą.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego nie przepisałeś wszystkiego?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo pracowałem, zanim wróciłem z pracy. Nie jest to usprawiedliwienie, tylko kolejność.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Kto odpowie za zagubienie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ja. Dlatego proszę o potwierdzenie odbioru, nie o zniknięcie całej wizyty.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nawet gdyby ktoś już przeczytał?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Zwłaszcza wtedy. Bez zapisu nie ustalimy potem, kiedy i u kogo notes leżał.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co Evan zrobił z wydanym mu telefonem?",
      "ton": "niewygodne",
      "wymaga": "d3_maz_i_siostra:wydaj_evan|d3_maz_i_siostra:wez_100_evan",
      "odpowiedz": "Przyniósł rano. Zablokowany, kodu podobno nie zna. A wcześniej żona rzekomo żadnego kodu nie miała. Czyli: mam kolejne pytanie.",
      "mina": "neutralna"
    },
    {
      "tekst": "Lena dostała telefon. Kontaktowała się z tobą?",
      "ton": "rzeczowe",
      "wymaga": "d3_maz_i_siostra:wydaj_lena",
      "odpowiedz": "Twierdzi, że u niej jest bezpieczny. Evan dzwoni co godzinę. Sprawdzam, nie wybieram głośniejszego telefonu.",
      "mina": "neutralna"
    },
    {
      "tekst": "Telefon nadal leży u nas. Co dalej?",
      "ton": "rzeczowe",
      "wymaga": "d3_maz_i_siostra:zatrzymaj",
      "odpowiedz": "Niech zostanie. Przyjdę z dokumentem, jeśli będzie potrzebny do sprawy. Doyle może do mnie dzwonić, nie musi po niego wracać tutaj.",
      "mina": "neutralna"
    },
    {
      "tekst": "Czwartek 22:15, ulotki. Zgłoszenie dopiero rano. Co z tego wynika?",
      "ton": "niewygodne",
      "wymaga": "d5_notes_ulotki",
      "odpowiedz": "Na razie kolejność. Prawie osiem godzin różnicy. Muszę spytać, skąd wiedział, że potrzebuje ulotek. Sam odstęp nie odpowie za niego.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Może po prostu szukał jej przed zgłoszeniem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Może. Właśnie dlatego zadaję pytania, zamiast stawiać znak równości między dwoma godzinami a winą.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Sprawdzę, czy kartki są całe. Odbiór podpiszę nazwiskiem, nie wystarczy sama odznaka.",
      "zysk": "Noah ma notes i wie, że biuro oddaje to, co należy.",
      "strata": "Noah dopytuje o telefon i będzie wracał z pytaniami o Maję.",
      "echo": {
        "za_dni": 1,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Notes wrócił do akt. Jeśli ktoś znowu pyta o telefon Mai, zapisz godzinę i przekaż mi tę informację.”"
      }
    },
    {
      "akcja": "zadzwon",
      "etykieta": "Zadzwoń na komisariat, żeby potwierdzili",
      "reakcja": "Dzwoń na komisariat, numer dwanaście. Dyżurny potwierdzi, ja poczekam przy szybie.",
      "zysk": "Masz potwierdzenie z komisariatu, że to notes Noaha.",
      "strata": "Noah wie, że sprawdzasz nawet policję, i nie lubi czekać.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Potwierdzono odbiór notesu N. Reyesa. Zeznań nie odczytywano przez telefon. — Komisariat przy Rynku"
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
      "tekst": "Jak wygląda teczka?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Szary skaj. Nie skóra. To ma znaczenie przy porównaniu.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Jak się zamyka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Klamrą z przodu. Bez zamka na klucz. Dokumenty zabezpiecza się obiegiem, nie zaufaniem do klamerki.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A obieg zabezpieczył ją przed zostawieniem w tramwaju?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie. Zgubę zgłaszam ja i ja podpiszę odbiór. Możemy wrócić do rzeczy.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co ją wyróżnia?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na rogu naklejka inspekcji. Na klapie V.C. i numer czterdzieści siedem. Proszę sprawdzić numer, nie samo podobieństwo.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Czterdzieści siedem to numer sprawy?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Teczki. Sprawy się zmieniają, teczka zostaje. Dlatego numer jest na klapie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie została w szóstce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Na siedzeniu obok, o 4:10. Wysiadłem przy zajezdni. Nie zdarza mi się to.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Po co inspektorowi nocny tramwaj?",
          "ton": "niewygodne",
          "wymaga": null,
          "odmowa": "Pytania zadaje kontrola, a nie kontrolowany. Jest na to paragraf.",
          "odpowiedz": "Żeby porównać rozkład z przejazdem. Przy biurku oba wyglądają identycznie. Na pętli już nie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co się nie zgadzało?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Nie rozmawiam o wynikach kontroli z każdym, kto zapyta. Z tobą rozmawiam o teczce.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Kiedy zauważyłeś brak?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Po wyjściu. W ręce miałem to, co wyjąłem, teczka została. Jedna rzecz odłożona obok wystarczy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Motorniczy może potwierdzić?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Kurs można ustalić. Najpierw sprawdźmy magazyn. Nie trzeba angażować całej zajezdni do odczytania V.C.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co sprawdzasz w naszym biurze?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Księgę, magazyn i kwity. Trzy zapisy tej samej rzeczy powinny mówić to samo.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Gdzie się rozchodzą?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W księdze brakuje strony czterdzieści jeden. To nie jest nieczytelny podpis, tylko brak strony.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wiesz, kto ją wyrwał?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie. Księgę prowadził Sam Holt. To wskazuje, kogo pytać, nie kto jest winny.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co z wydaniami poprzednika?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Prawa rękawiczka i paczka wyszły bez właściwego wpisu. Próbuję ustalić, ile rzeczy można jeszcze odtworzyć.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto na tym ucierpiał?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Właśnie tego nie widać w pustej rubryce. Rzecz mogła trafić do właściciela albo do pierwszego chętnego.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego rozliczenie musi być o siódmej?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Wtedy zamykam kontrolowany okres. Jeśli nie mam dokumentów, wynik jest niepełny.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co zrobisz bez teczki?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Audyt przesunie się o tydzień. Tydzień wystarczy, żeby księga zaczęła zgadzać się aż za dobrze.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Podejrzewasz poprawianie wpisów?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Dlatego porównuję egzemplarze. Pojedynczy papier można poprawić. Trzeba jeszcze pamiętać o drugim.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Nie możesz rozliczyć tego z pamięci?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Nie powinienem. Pamięć nie ma kopii ani daty naniesienia poprawki.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Mówisz „nie powinienem”, nie „nie mogę”.",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Mogę też podpisać pustą kartkę. Pytasz o możliwość czy o rzetelność kontroli?",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co jest w teczce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Formularze, pieczątka, wykaz wydań z tego biura. Treść wykazu nie służy do publicznego sprawdzania właściciela.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Nawet jeśli dotyczy naszego biura?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wtedy otrzymasz właściwy egzemplarz. Z podpisem. Nie wyciągnięty ukradkiem z cudzej teczki.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto podpisuje taki egzemplarz?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Ja oraz osoba potwierdzająca stan biura. Kto może to podpisać, ten powinien najpierw przeczytać.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Dlaczego dwa egzemplarze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Żeby po miesiącu nie rozmawiać o tym, co ktoś podobno widział. Jeden u mnie, drugi tutaj.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli egzemplarze się różnią?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Zatrzymujemy obieg i ustalamy kiedy. Nie wybieramy wygodniejszego. Nawet jeśli opóźni to zamknięcie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co wiadomo o poprzednim dyżurnym?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Sam Holt. Od kilku tygodni nie mogę go znaleźć. Chcę jego wyjaśnień, nie opowieści kolejki.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Jak tu trafił?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bez referencji. Podobnie jak osoba, która odpowiedziała na obecne ogłoszenie. Czytam także gazety.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego to cię obchodzi?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Ktoś oddaje obcemu klucze, księgę i nocną zmianę. Potem wszyscy mówią, że nie wiedzieli, kto tu siedzi.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Chcesz go ukarać czy odtworzyć wydania?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Najpierw odtworzyć. Jeśli zacznę od kary, dostanę mniej odpowiedzi i ładniejsze podpisy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Mówisz mu to samo?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Powiem, kiedy go znajdę. Nie składam za niego zeznań ani za niego nie odpowiadam.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dopiski innym tuszem mają parafę V.C. To twoje pismo?",
      "ton": "niewygodne",
      "wymaga": "d5_wykaz_dopisany",
      "klucz": "tusz",
      "odpowiedz": "Moje. Pięć tygodni temu odtworzyłem dwie pozycje po rozmowie z Holtem. Bez dowodu, z pamięci. Nie powinienem.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Po co ryzykować własną kontrolę?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Żeby wydania w ogóle gdzieś istniały. Jeśli kontrolę unieważnią, nikt już nie przeczyta tej księgi tak, jak trzeba.",
          "mina": "neutralna"
        },
        {
          "tekst": "Czyli twoje papiery też wymagają sprawdzenia?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Tak. Dlatego stoi parafa. Mogłem jej nie postawić. Proszę nie mylić tego z prośbą o pochwałę.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Paczka wyszła bez wpisu. Jak to uzupełnić?",
      "ton": "rzeczowe",
      "wymaga": "d4_iris:koperta",
      "odpowiedz": "Najpierw zgodnie z prawdą zapisać, że wyszła bez wpisu. Nie cofać daty i nie udawać, że od początku było czysto.",
      "mina": "neutralna"
    },
    {
      "tekst": "Iris podpisała odbiór paczki. Wpis wystarczy?",
      "ton": "rzeczowe",
      "wymaga": "d4_iris:rejestr",
      "odpowiedz": "Do potwierdzenia wydania tak. Do odpowiedzi, co było w środku, nie. Nie dopisuj do podpisu więcej, niż potwierdza.",
      "mina": "neutralna"
    },
    {
      "tekst": "Zatrzymana paczka czeka na kontrolę. Co sprawdzisz?",
      "ton": "rzeczowe",
      "wymaga": "d4_iris:odmow_zglos",
      "odpowiedz": "Numer 0412, stan depozytu, zgłoszenie. Kto może to podpisać? Potrzebuję osoby, która widziała przyjęcie.",
      "mina": "neutralna"
    }
  ],
  "decyzje": [
    {
      "akcja": "wykaz_paczke",
      "etykieta": "Wydaj teczkę i wykaż paczkę 0412",
      "reakcja": "Paczka 0412 w depozycie. Proszę sprawdzić treść przed podpisem, potem drugi egzemplarz zostaje tutaj.",
      "zysk": "Księga i magazyn się zgadzają, audyt idzie bez opóźnień.",
      "strata": "Paczka ma numer i będzie miała właściciela. Ktoś po nią przyjdzie, a Iris dowie się, kto ją wystawił.",
      "echo": {
        "za_dni": 1,
        "forma": "list",
        "tekst": "Paczka 0412 ujęta w protokole. Do piątku proszę przygotować dokumenty poprzednich zmian. — V. Crane"
      },
      "wymaga": "d4_iris:odmow_zglos"
    },
    {
      "akcja": "potwierdz_wpis",
      "etykieta": "Wydaj teczkę i potwierdź wczorajszy wpis o paczce 0412",
      "wymaga": "d4_iris:rejestr",
      "reakcja": "Iris Bell, odbiór potwierdzony. Podpisuję zgodność wpisu, nie zawartość paczki.",
      "zysk": "Księga się zgadza i Victor zamyka tydzień bez pytań.",
      "strata": "Victor widzi, że paczka z kasetką poszła do Iris, i zacznie dopytywać, co w niej było.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Potwierdzono wydanie paczki 0412 zgodnie z księgą. Dokumenty poprzednich zmian nadal są potrzebne do kontroli. — V. Crane"
      }
    },
    {
      "akcja": "spis_bez_paczki",
      "etykieta": "Wydaj teczkę, potwierdź spis bez paczki",
      "reakcja": "Potwierdzam przyjęcie spisu. Zgodność co do sztuki jeszcze nie kończy sprawdzania.",
      "zysk": "Dziś spokój: Victor zamyka tydzień, a Iris i jej klient nie są wystawieni.",
      "strata": "W spisie brakuje paczki, a Victor zostaje z podejrzeniem, że coś przechodzi obok księgi.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Spis przyjęty, brak rozbieżności w podanych liczbach. Do zapisów o wydaniach wrócę osobno. — V. Crane"
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
      "tekst": "Jak rozpoznać portfel?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brązowy, wytarty. Tylko nie taki nowy, co go ktoś specjalnie postarzył. Mój sam to zrobił.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jak się zamyka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na zatrzask. Trzeba docisnąć. Jak zostanie otwarty, rozkłada się w kieszeni.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Coś z niego wypada?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Monety. Dlatego ich tam nie trzymam. Papier siedzi dobrze, proszę nie potrząsać.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jaki ma znak szczególny?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Wygiął się pod kieszeń. Jedenaście lat tak noszę. Jak położysz płasko, jeden róg odstaje.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Jedenaście lat z jednym portfelem?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Tylko on mi został ze starych rzeczy. Z tamtego... Nieważne. Nie trzeba wymieniać, póki trzyma.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie go zostawiłeś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce. Wyjmowałem, potem chowałem. Najwyraźniej nie tam, gdzie trzeba. Tylko tyle pamiętam.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Miałeś wtedy płaszcz na sobie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Tak. I szlafrok pod spodem. Kieszenie się mylą, jak człowiek wychodzi za szybko.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Dlaczego tak się spieszyłeś?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Pokłóciłem się w domu. Z żoną, z teściową, z obiema. Tylko proszę nie pytać, która miała rację.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Sprawdzałeś obie kieszenie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wszystkie. Przy ludziach na przystanku, wyglądało to jeszcze gorzej niż tutaj.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Ktoś mógł potwierdzić, że go miałeś?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Nie będę wracał pytać. Tylko odszedłem stamtąd i chcę iść dalej.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co w nim jest?",
      "ton": "niewygodne",
      "wymaga": null,
      "gasi": "zawartosc",
      "odpowiedz": "Prawo jazdy, dwadzieścia dolarów i zdjęcie córki. Nic więcej.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Ile lat ma córka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Siedem. Na zdjęciu pięć. Tylko nie pytaj, kiedy ostatnio ją widziałem.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Zdjęcie chcesz odzyskać nawet bez reszty?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Tak. Ale nie zamieniajmy tego w wybór. Potrzebuję też dokumentów, choć o nich mówię mniej ładnie.",
              "mina": "emocja"
            }
          ]
        },
        {
          "tekst": "Za zdjęciem leży 250 dolarów. Dlaczego mówisz o dwudziestu?",
          "ton": "niewygodne",
          "wymaga": "d5_gotowka_400",
          "klucz": "zawartosc",
          "odpowiedz": "Bo nie chcę, żeby cała kolejka znała kwotę. To na wyjazd, wszystko, co mam. Tylko nie wyjmuj na ladę.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "To twoje pieniądze?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Moje. Nie każdy pieniądz schowany osobno jest kradziony. Nie chcę ich stracić razem z portfelem drugi raz.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Na jakie nazwisko szukać dokumentów?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Pell. Gustaw Pell. Gus wystarczy w rozmowie, na papierze Gustaw.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Jaki adres do wpisu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mill Street dwanaście. Piętnaście, przepraszam. Dwanaście to brat, już tam nie mieszka.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Który adres mam zapisać?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Tylko jeszcze nie zapisuj. Podam, jak będę wiedział, co właściwie muszę podpisać.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jest tylko jeden dokument tożsamości?",
          "ton": "niewygodne",
          "wymaga": null,
          "gasi": "dowody",
          "odpowiedz": "Jeden. Prawo jazdy. Nie wiem, ile razy można pytać o ten sam portfel.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Są dwa dowody z twoim zdjęciem: Pell i Ferro. Dlaczego?",
              "ton": "niewygodne",
              "wymaga": "d5_dwa_dowody",
              "klucz": "dowody",
              "odpowiedz": "Jeden stary, drugi nowy. Ktoś mi pomógł wyjechać. Tylko nie wpisuj obu nazwisk obok siebie.",
              "mina": "emocja",
              "dalej": [
                {
                  "tekst": "Chcesz odebrać portfel na nazwisko, od którego uciekasz?",
                  "ton": "niewygodne",
                  "wymaga": null,
                  "odpowiedz": "Chcę odebrać portfel. Tylko tyle. Jeśli wpiszesz oba, sam pokażę drogę tym, przed którymi jadę.",
                  "mina": "emocja",
                  "dalej": [
                    {
                      "tekst": "Który zapis potwierdzi odbiór, nie trasę?",
                      "ton": "rzeczowe",
                      "wymaga": null,
                      "odpowiedz": "Pell. Tak się przedstawiłem. Drugiego proszę nie dopisuj dla porządku.",
                      "mina": "neutralna"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co będzie, jeśli nie zdążysz na 5:40?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Zostanę tutaj. A tutaj mogą mnie znaleźć. Nie mówię o małej przesiadce, której szkoda.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Kto może cię znaleźć?",
          "ton": "niewygodne",
          "wymaga": null,
          "odmowa": "Nikt. Człowiek nie może po prostu chcieć portfela z powrotem? Proszę.",
          "odpowiedz": "Ci, co poprzednio. Urzędnik też chciał tylko wypełnić rubrykę, a potem ktoś wiedział, gdzie przyjść.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Co mogę zapisać, żeby ci nie zaszkodzić?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "To, co potrzebne do portfela. Nie dokąd jadę. Tylko o ten jeden szczegół proszę.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Masz bilet?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W portfelu. Dlatego nie mogę po prostu machnąć ręką i wyjść.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nie kupisz drugiego?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Bez pieniędzy z portfela? Tylko pomyśl. Nawet gdybym kupił, nadal nie miałbym dokumentów.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Zadzwonić do kogoś, że nic ci nie jest?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Nie do domu. Telefon został tam, gdzie żona. Tak będzie lepiej.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "A do kogoś spoza domu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie chcę nikogo wciągać. Jak ktoś potwierdzi, że tu jestem, ktoś następny zapyta, dokąd poszedłem.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nie masz komu zaufać?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Mam za mało czasu, żeby to sprawdzać. Tylko portfel, potem tramwaj.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co zrobisz, jeśli trzeba będzie potwierdzić własność?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Przyjdę z kimś. Tak się mówi przy okienku, prawda? Nie wiem, kogo mam teraz przyprowadzić.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Czyli obiecujesz coś, czego nie zrobisz?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Próbuję nie zamknąć sobie ostatnich drzwi. Tylko nie bierz tego za dowód, że portfel nie jest mój.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Pell i Ferro, to samo zdjęcie. Którym jesteś?",
      "ton": "niewygodne",
      "wymaga": "d5_dwa_dowody",
      "klucz": "dowody",
      "odpowiedz": "Tym, który stoi w szlafroku. Jeden dokument był wcześniej, drugi ma być potem. Nie każ mi wybierać nazwiska na całą kolejkę.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Kto załatwił drugi?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie powiem. Nawet jeśli portfel zostanie. To nie tylko moje nazwisko trafiłoby do księgi.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Czemu 250 dolarów jest schowane za zdjęciem?",
      "ton": "niewygodne",
      "wymaga": "d5_gotowka_400",
      "klucz": "zawartosc",
      "odpowiedz": "Bo tam nie wysuną się przy wyjmowaniu drobnych. To cały wyjazd. Tylko nie licz ich głośno.",
      "mina": "neutralna"
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Zdjęcie jest. Dokumenty też. Tylko o szlafroku zapomnijmy, dobrze?",
      "zysk": "Gus wychodzi z portfelem i dwoma dowodami, o 5:40 wsiada do jedenastki.",
      "strata": "Nie wiesz, który dowód jest prawdziwy, a w księdze zostaje tylko wpis „Pell”.",
      "echo": {
        "za_dni": 4,
        "forma": "list",
        "tekst": "Pocztówka z miasta, którego nazwy nie znam: „Portfel dojechał ze mną. Pell został tam, skąd wyjechałem. — G.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Znajdę kogoś, kto potwierdzi. Tylko proszę nie dzwonić, zanim wrócę.",
      "zysk": "Portfel zostaje w biurze razem z dwoma dowodami.",
      "strata": "Gus nie wsiądzie do jedenastki i wraca do domu w szlafroku, a jego sprawa jest otwarta.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Żona Gusa Pella pytała telefonicznie o męża. Zostawił w domu klucze i trzy dolary; w biurze nie uzyskała informacji o jego pobycie."
      }
    },
    {
      "akcja": "zadzwon",
      "etykieta": "Zadzwoń po dyżurnego policjanta",
      "reakcja": "Nie dzwoń. Tylko nie policja. Portfel zostaw, ja już... muszę iść.",
      "zysk": "Dyżurny przyjmie zgłoszenie, a oba dowody trafią do protokołu.",
      "strata": "Gus ucieknie, zanim ktoś przyjdzie, a w protokole zostanie pusta rubryka „właściciel”.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Portfel z dwoma dowodami przyjęto do ewidencji. Zgłaszający odszedł przed przyjazdem patrolu. — N. Reyes"
      }
    },
    {
      "akcja": "wez_250_gus",
      "etykieta": "Wydaj portfel, ale zatrzymaj 250 $ z przegródki",
      "kasa": 250,
      "reakcja": "Zdjęcie jest. Pieniądze... Nie, nic. Tylko oddaj już resztę.",
      "zysk": "Dostajesz 250 dolarów, prawie raty dla Kuby na cztery tygodnie, a Gus nie ma jak się z tobą kłócić.",
      "strata": "Gus jedzie bez grosza, z dwoma dowodami, a jeśli ktoś go zatrzyma po drodze, powie, że okradło go okienko.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Zatrzymany na dworcu mężczyzna z dokumentem „Ferro” zgłosił brak 250 dolarów w odebranym portfelu. Prosimy o wyjaśnienie. — N. Reyes"
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
      "tekst": "Jakiego królika przyniosłaś?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Szarego, pluszowego. Nie żywego. Żywego bym nie wkładała pod kurtkę.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jaki jest duży?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mieści mi się pod pachą. Jak trzymam za brzuch, nogi wiszą. Nie jest taki malutki do kluczy.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Niosłaś go pod kurtką?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Żeby nie moknął. Mnie i tak mama wysuszy, a jego nie wiadomo kto.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Ma coś, po czym właściciel go pozna?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ucho doszyte czerwoną nitką. I dziurkę w nosie. Wygląda, jakby miał katar, ale suchy.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Skąd wiesz, że ucho było naprawiane?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Bo drugie jest inaczej. Jak ktoś nie lubi królika, nie szyje mu ucha. Dlatego go wzięłam.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie dokładnie leżał?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Na ławce przy pętli szóstki, trzy kroki od słupka. Moje kroki, nie takie wielkie.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Ktoś siedział obok?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Konduktor stał przy budce. Patrzył na rękę, ale nie miał zegarka. Na ławce nikogo.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Pytałaś go o królika?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Nie. Jak dorosły się spieszy, mówi „zaraz”, a potem go nie ma. Przyniosłam tutaj.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Od razu go zabrałaś?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Najpierw patrzyłam, czy ktoś wróci. Była pani z walizką, ale szła w drugą stronę.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wołałaś za nią?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie. Mama mówi, żeby nie biegać za obcymi. Mogłam chyba zawołać z miejsca. Teraz już wiem.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Po co potrzebujesz kwitu?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Żeby było napisane, że znalazłam. Nie że zabrałam. Mama mówi, że bez papieru ludzie sobie wybiorą gorsze.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co wpisać?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ada Vale, dziesięć lat. Dużymi literami, żeby pani w szkole zobaczyła od razu.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Chcesz pokazać go w szkole?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Tak. W szkole za zgubienie jest uwaga. Za znalezienie też powinno coś być, tylko w drugą stronę.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Chcesz nagrodę za królika?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie pieniądze. Kwit. Jak dostanę pieniądze, mama spyta skąd i znowu będzie trzeba tłumaczyć.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A gdy właściciel podziękuje?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "To dobrze. Tylko niech go już nie zostawia, bo to ucho nie wytrzyma ciągłego gubienia.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Czemu chodzisz sama po pętli?",
      "ton": "niewygodne",
      "wymaga": null,
      "odmowa": "Mama mówi, że jak ktoś pyta, gdzie jestem w nocy, to mam zapytać, po co mu to. No to: po co?",
      "odpowiedz": "Mama ma nocną zmianę w pralni. Nudzi mi się. Liczę kamienie, ostatnio sto dwa.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Mama wie o tych spacerach?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Wie i się gniewa. Mówi, żeby nie brać cudzego, oddawać znalezione i nie łazić po pętli. Dwa robię dobrze.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wrócisz teraz prosto do domu?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Tak. Z kwitem. Bez kwitu też, tylko wolniej, bo będę wymyślać, jak to opowiedzieć.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Gdzie mieszkasz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Cooper Street dziewięć, drugie piętro. Ojej. Pani Iris mówiła, żeby nie podawać adresu.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Mama mówi, że pani Iris potrafi zabrać mieszkanie, jak ktoś dużo gada. Mówi to, kiedy myśli, że śpię.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak według ciebie znaleźć właściciela?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Niech sam opowie, jaki królik. Jak mu pokażesz, to każdy potrafi powiedzieć, że szary.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "O co go spytać?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "O naprawę. Ktoś przecież musiał przytrzymać ucho. Może pamięta, której nitki użył.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "A jeśli nie pamięta?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "To może szyła jego mama. Ja też nie wiem, gdzie mama trzyma wszystkie nitki.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "A jeśli nikt nie przyjdzie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "To niech zostanie tutaj, gdzie sucho. Nie na ławce. Mogę go czasem zobaczyć?",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Nie chcesz go wtedy zabrać?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Chcę, ale to nie to samo. Jak ja się spóźnię po swoją rzecz, też ma na mnie czekać.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Komu można powiedzieć, że go przyniosłaś?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Mamie i pani w szkole. I właścicielowi, żeby wiedział, że nie leżał już na deszczu.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "A wpisać do papierów dla urzędu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "A potem kto czyta? W szkole kartkę czyta pani, a potem wszyscy. W urzędzie też tak?",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Chcesz mieć nazwisko na kwicie czy wszędzie?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Na moim kwicie. Myślałam, że to będzie jeden papier. Nie wiem, po co aż tyle.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co powiesz mamie po powrocie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Że oddałam królika. O pętli też, bo przecież jest na kwicie. Tego już nie da się pominąć.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Nie boisz się, że będzie zła?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Będzie. Ale mniej niż wtedy, gdy znajdzie królika w moim łóżku.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Pod uchem jest kartka dla Zuzi. Czytałaś?",
      "ton": "niewygodne",
      "wymaga": "d6_karteczka_krolik",
      "odpowiedz": "Czytałam: „Od taty. Jak się zgubi, niech ktoś odda”. No to oddaję, tylko Zuzi nie znam.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Dlaczego tata schował kartkę pod uchem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Może żeby nie odpadła. Ja bym dała na szyi, ale wtedy można zdjąć. Pod uchem jest trudniej.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Znasz puszkę z takim odcinkiem z bloczka Iris?",
      "ton": "niewygodne",
      "wymaga": "d6_puszka_odcinek",
      "odpowiedz": "Widziałam u niej w kuchni, nad czajnikiem. Dno się ruszało. Tylko nie mów, że ode mnie wiesz.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Kto ci ją pokazywał?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nikt. Sama widziałam. Już nie chcę o tym, chcę kwit za królika.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Mama odzyskała kopertę. Mówiła ci o tym?",
      "ton": "uprzejme",
      "wymaga": "d1_rosa:wydaj",
      "odpowiedz": "Przeliczyła przy stole i jeszcze raz przy drzwiach. Potem schowała tak, żebym ja też nie zapomniała gdzie.",
      "mina": "mowi"
    },
    {
      "tekst": "Jak mama się trzyma?",
      "ton": "uprzejme",
      "wymaga": "d1_rosa:wez_20",
      "odpowiedz": "Płakała w kuchni. Mówiła, że brakuje pieniędzy. Nie wiem, kto wziął, ale ja dlatego wszystko oddaję.",
      "mina": "neutralna"
    }
  ],
  "decyzje": [
    {
      "akcja": "wpisz_w_biurze",
      "etykieta": "Wpisz Adę jako znalazczynię, dane zostają w biurze",
      "reakcja": "Vale, przez V. O, duże litery. Teraz nikt nie powie, że go ukradłam.",
      "zysk": "Ada ma dowód, że zrobiła dobrze, i bardzo się cieszy.",
      "strata": "Biuro ma jej adres w księdze, a Iris jest administratorką tej kamienicy i do księgi zagląda.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Iris Bell: „Moja mała lokatorka figuruje jako znalazczyni. Widzę, że oprócz pętli odwiedza już także biuro.”"
      }
    },
    {
      "akcja": "list_przewozowy",
      "etykieta": "Przekaż zgłoszenie razem z listem przewozowym",
      "reakcja": "Mój kwit jedzie z królikiem? To daj mi też taki, bo mama nie będzie czekać, aż wróci papier.",
      "zysk": "Królik idzie oficjalnym obiegiem, a Urząd dostaje papier z numerem.",
      "strata": "Dane Ady krążą po urzędach, a Iris jako administratorka kamienicy je zobaczy.",
      "echo": {
        "za_dni": 3,
        "forma": "list",
        "tekst": "Rosa: „Przyszło urzędowe pismo z nazwiskiem Ady. Iris przeczytała i zaczęła pytać, dokąd córka chodzi nocami. — Rosa”"
      }
    },
    {
      "akcja": "wydaj_bez_wpisu",
      "etykieta": "Daj Adzie karteczkę „dobrze zrobiłaś”, bez wpisu",
      "reakcja": "„Dobrze zrobiłaś”. I podpis. To wystarczy, pokażę mamie ten kawałek najpierw.",
      "zysk": "Ada ma kwit, a nikt nie zna jej adresu.",
      "strata": "Królik leży w biurze bez wpisu, a ty robisz to samo, co poprzednik z rękawiczką.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Ada Vale: „Pani powiedziała, że karteczka nie jest urzędowa. Ale powiesiła ją w gablocie, więc teraz wszyscy widzą.”"
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
      "tekst": "Jak wygląda zegarek?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Mosiężny. Na rękę patrzę z przyzwyczajenia, nie szukaj na tej podstawie paska.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co ma zamiast paska?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kieszonkowy, na łańcuszku. Kiedy odkładam, zwijam łańcuszek obok, żeby nie zwisał. Tym razem zwinąłem aż za starannie.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Łańcuszek się urwał?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Nie. Odpiąłem. Łatwiej zgubić rzecz sprawną, niż człowiek chciałby przyznać.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jakiś napis?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na wieczku „za trzydzieści lat”. Bez „służby”, miejsca zabrakło. Żona ma z tego żarty do dziś.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Za twoją służbę?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Dziadka żony. Też szóstka. Zegarek przeżył trzech naczelników, o dziadku tego nie powiem.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie został?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Na ławce na pętli. O 22:47 jeszcze go miałem, spojrzałem i odłożyłem.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Na wejściu mówisz, że dopiero sięgnąłeś do pustej kieszeni.",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Przy odjeździe. Wtedy zrozumiałem, że został na ławce. Opowiadam od zguby, nie od każdego przystanku.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wracałeś na tę ławkę?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Tak, już pustą. Rozkład robi kółko, zegarek najwyraźniej nie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Kto był w pobliżu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dziewczynka liczyła kamienie. Pluszak leżał na ławce. Nie będę z tego robił zeznania, że dziecko wzięło zegarek.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Znasz ją?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Z widzenia. Na pętli częściej spotyka się tych samych ludzi niż we własnej kuchni.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak pilnujesz kursów bez zegarka?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Źle. Na oko. Dwa razy ruszyłem za wcześnie, raz ktoś nie dobiegł.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Nie masz telefonu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Pada w połowie zmiany. Żona potrafi zadzwonić akurat wtedy, kiedy bateria ma ostatnie zdanie.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "O co pyta?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Czy zjadłem. Po trzydziestu latach małżeństwa nadal nie wierzy w moją samodzielność przy kanapce. Słusznie.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Możesz patrzeć na zegar na pętli?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Na pętli tak. Pomiędzy przystankami zegar zostaje na pętli. Nie zawsze da się poczekać na cudzą rękę.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Ile może kosztować parę minut różnicy?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Kogoś przesiadkę. Mnie wpis. Zegarowi nic się nie stanie, dlatego nie będę na niego krzyczał.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co wozi szóstka ostatnim kursem?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Ludzi, torby, walizki. To nadal tramwaj. Nie zmienia zawodu po zmroku.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Rzeczy bez właściciela też?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Zdarzają się. Jak coś leży pod ławką, lepiej zapisać, niż kopnąć i udawać, że nie ma.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Zawsze zapisujesz?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Staram się. Nie każdy podaje nazwisko do torby. Moje nazwisko zostaje przy kursie tak czy inaczej.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Ktoś prosi, żeby nie pytać?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Ludzie zawsze o coś proszą. O przystanek, o chwilę, o to, żebym nie patrzył. Nie mogę opowiadać każdej rozmowy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Czyli wiesz więcej, niż mówisz?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "Ja jestem od biletów, nie od cudzych spraw. I chciałbym, żeby tak zostało.",
              "odpowiedz": "Wiem, gdzie mam się zatrzymać. Resztę zostawmy. Nie przyszedłem składać raportu z pasażerów.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co powie żona na zgubę?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Że zgubiłem pamiątkę po jej dziadku. I będzie miała rację, najgorszy rodzaj rozmowy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Już wie?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Jeszcze nie powiedziałem. Telefon żyje do połowy zmiany, ja mam nadzieję odzyskać zegarek do końca.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Zataisz to, jeśli się znajdzie?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Powiem przy kolacji. Jak będę miał zegarek, przynajmniej jedna rzecz w tej historii będzie na miejscu.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Dlaczego go nie zostawiasz w domu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo jest do używania. Trzyma czas. Dziadek nie dostał go po to, żeby potem leżał pod szkłem.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli znowu go zgubisz?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "To będę dwa razy głupi. Nie planuję, ale pierwszy raz też nie był w rozkładzie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak potwierdzić własność?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Grawer, łańcuszek, żona. W tej kolejności, jeśli można. Żona opowie dłużej niż grawer.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Zgadzasz się na telefon do niej?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Jeśli trzeba. Uprzedź tylko, że chodzi o zegarek, a nie o wypadek na szóstce.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Bo od razu pomyśli o wypadku?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Jak biuro dzwoni po nocy, nikt nie zakłada, że gratulują punktualności.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "A gdy zatrzymam go do wyjaśnienia?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Przyjdę ponownie. Tylko nie wpisuj mi potem spóźnienia jako dowodu, że się nie przejmuję.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Przekazać przełożonemu potwierdzenie zatrzymania?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Potwierdzić, że leży tutaj. Resztę powiem sam. Za zgubę odpowiadam ja.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co znaczy „+ puszka (b.n.)” na kartce spod wieczka?",
      "ton": "niewygodne",
      "wymaga": "d6_zegarek_list",
      "odpowiedz": "Puszka bez nadawcy. Wsunięta pod ławkę. Dopisałem, żeby nie wyszło, że nic nie jechało.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Zdarzyło się wcześniej?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Trzecia w tym miesiącu. Ostatni kurs, pod ławką po lewej. Rano znika. Nie wiem, kto odbiera.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego schowałeś kartkę w zegarku?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Żeby mieć przy sobie, jeśli ktoś zapyta o mój kurs. No i ktoś właśnie pyta.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Chcesz zostawić ślad czy uniknąć pytań?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jedno i drugie, jeśli się da. Wiem, że teraz wychodzi, że się nie da.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Chodzi. Ustawię do zegara na pętli i już go tam nie odłożę.",
      "zysk": "Leo odzyskuje zegarek i jedzie następne kursy punktualnie.",
      "strata": "Puszka bez nadawcy zostaje w jego wykazie bez wyjaśnienia.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Kursy idą równo, żona zna całą historię. Teraz przed wyjściem pyta o kanapkę i zegarek.”"
      }
    },
    {
      "akcja": "zatrzymaj",
      "etykieta": "Zatrzymaj zegarek do wyjaśnienia puszki",
      "reakcja": "Wrócę wyjaśnić. Tylko zapisz, że zegarek leży tutaj, bo za spóźnienie nikt nie zapyta puszki.",
      "zysk": "Zegarek leży w biurze razem z karteczką o puszce, więc Leo wróci i będzie musiał odpowiedzieć.",
      "strata": "Leo jedzie bez zegarka i może spóźnić dwa kursy.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Cztery minuty spóźnienia na ostatnim kursie. Przełożony wpisał, mój zegarek nadal nie ma nic do powiedzenia.”"
      }
    },
    {
      "akcja": "wpisz_puszke",
      "etykieta": "Wydaj zegarek i dopisz puszkę do księgi",
      "reakcja": "Dopisz „bez nadawcy”, dokładnie. Nie zostawiaj samego mojego nazwiska, jakbym ją przyniósł z domu.",
      "zysk": "Puszka ma ślad w księdze: kiedyś ktoś może ją odnaleźć i powiązać z blankietem z paczki Iris.",
      "strata": "Leo jest wystawiony: w księdze widać, że przyjął puszkę bez nadawcy.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Zapytali o puszkę w księdze. Powiedziałem, skąd zapis, i nagle nikt już nie pytał o punktualność.”"
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
      "tekst": "Jak rozpoznać słuchawki?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Czarne. Bez kolorowych światełek. W ciemnym tramwaju nie świecą, niestety.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Co trzyma je w całości?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nauszne, taśma na lewej muszli. Taśma i nadzieja. Na razie taśma lepiej.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Pękły przy pracy?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Nie. Od noszenia w torbie z całym światem. Serio, ksero jeszcze ich nie przeżuło.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jaka naklejka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kot w kasku na prawej muszli. Jedzie na rowerze, odpowiedzialny obywatel. Za dolara.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Kask nie pomógł przed zgubieniem?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Jemu nic się nie stało. To ja wysiadłem bez głowy. W sensie bez słuchawek.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie zostały w czwórce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W czwórce, po pracy w kopiarni, na siedzeniu przy oknie. Przysnąłem i wysiadłem. Muzyka już nie grała.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Wracałeś z kopiarni?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Tak. Praktyki. Mam siedemnaście lat, więc po nocy oficjalnie już dawno mnie tam nie ma.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Dlaczego zostajesz?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo robota zostaje. A jak praktykant powie, że pora do domu, to nagle się okazuje, że ma słabe podejście.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Ktoś siedział obok?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie kojarzę. Nie będę wymyślał twarzy, żeby pytanie miało odpowiedź.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Może ktoś cię budził?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Tramwaj zahamował. Najlepsza funkcja transportu, pobudka w cenie biletu. Tylko pamięci nie naprawia.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co szef ma do słuchawek?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Mam słyszeć klientów i maszynę. Jak maszyna zaczyna chrupać inaczej, trzeba biec. Ja to słyszę nawet z muzyką.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "A klientów?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Też. Tylko wolę, jak mówią raz, a nie pokazują palcem i wzdychają.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "To po co ryzykujesz karę?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo przez kilka godzin samo ksero robi z głowy pudełko. Muzyka przynajmniej coś zmienia.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jaką karę dostaniesz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Dziesięć dolarów mniej. I pogadankę gratis. Serio, na samo gadanie jakoś bym zarobił uszami.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Masz to gdzieś zapisane?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Nie. On mówi, ja tracę. Papier mamy w kopiarni do innych celów.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co robicie w kopiarni nocą?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Ksero, laminowanie, bindowanie. To samo, tylko ludzie bardziej się spieszą i mniej chcą paragonów.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jakie zamówienie zapamiętałeś ostatnio?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Ulotki ze zdjęciem kobiety. „Zaginęła”. Dużo. Takie się pamięta dłużej niż menu.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto je zamawiał i kiedy?",
              "ton": "rzeczowe",
              "wymaga": null,
              "ustawia": "d7_kit_ulotki",
              "odpowiedz": "Facet w szarym płaszczu. Czwartek, 22:15, tysiąc sztuk. Powiedział, że żona. Uśmiechał się, a ja trzymałem jej twarz w stosie.",
              "mina": "emocja"
            }
          ]
        },
        {
          "tekst": "Zostaje kopia zamówienia?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W segregatorze, data i godzina. Szef nie wyrzuci kartki, póki da się ją przechować w większej teczce.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Każdy może tam zajrzeć?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie. Ja też nie mam prawa pokazywać. Mówię, że jest, nie że zaraz ją wyniosę pod bluzą.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak możesz potwierdzić, że to twoje słuchawki?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Opiszę je. Paragonu nie mam. Za naklejkę też nie, gdyby to miało pomóc śledztwu.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Ktoś z kopiarni je zna?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Szef. Ale jeśli do niego zadzwonisz, to od razu policzy dziesięć dolarów. I spyta, czemu jestem tutaj.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wolisz odmowę niż telefon?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Wolę, żeby wystarczył kot i taśma. Jeśli nie wystarczą, powiedz wprost. Niech przynajmniej wiem, ile kosztuje wybór.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co sprawdzisz po odbiorze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Czy grają obie. Lewa czasem przerywa, trzeba ruszyć przewodem. To nie znaczy, że ktoś tutaj popsuł.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Nie chcesz sprawniejszych?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Chcę też wypłaty bez potrąceń. Jedno i drugie na razie zostaje w dziale marzenia.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co zrobisz, jeśli dziś ich nie odzyskasz?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Wrócę do kopiarni. Maszyna nie przestanie chodzić, bo mam zły wieczór.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Będziesz jeszcze mówił o tym, co tam widzisz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Zależy komu. Jak każde zdanie kończy się nazwiskiem w księdze, człowiek zaczyna mówić o pogodzie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Boisz się klienta czy szefa?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "Ej, serio? To ma iść do protokołu? Wolę nie zapeszać.",
              "odpowiedz": "Szef mnie zwolni. Klient może wrócić. Nie wiem, którego łatwiej minąć w drzwiach.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co mogę zapisać o tej wizycie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Że odebrałem słuchawki. Na inne rzeczy pytaj osobno, serio. Nie wszystko jest w pakiecie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli zapis pomoże komuś innemu?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "To powiedz komu i co zapisujesz. Nie dowiaduję się najlepiej o swoich zeznaniach od szefa.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Czemu powiedziałeś o ulotkach?",
      "ton": "niewygodne",
      "wymaga": "d7_kit_ulotki",
      "odpowiedz": "Bo twarz była na tysiącu kartek, a ten facet się uśmiechał. Może tak reaguje ze strachu, nie wiem. Nie chcę sam rozstrzygać.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Potwierdzisz godzinę, jeśli zapyta policjant?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "W segregatorze jest. Powiem, gdzie sprawdzić. Tylko nie róbcie ze mnie od razu kogoś, kto wie wszystko.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Co robią pod taśmą dwa dolary i kartka „za ciszę”?",
      "ton": "niewygodne",
      "wymaga": "d7_tasma_banknot",
      "odpowiedz": "Dla szefa, jak przyłapie. Raz wziął. Serio, nie śmiej się, dwa dolary to mniej niż dziesięć.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "A jeśli następnym razem zażąda więcej?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "To zostanę bez muzyki i bez dwóch dolarów. Nie mam na to sprytnej odpowiedzi.",
          "mina": "emocja"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Kot jest, lewa gra. Jak jeszcze coś zobaczę w kopiarni, przyjdę, tylko bez wyciągania od razu księgi.",
      "zysk": "Kit odzyskuje słuchawki i zostaje po twojej stronie.",
      "strata": "To, co powiedział o ulotkach, nie zostaje nigdzie zapisane.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Kit Navarro: „Facet w płaszczu zamówił następny tysiąc. Powiedziałem, że maszyna stoi, chociaż szef już ją uruchamiał.”"
      }
    },
    {
      "akcja": "wydaj_i_zapisz",
      "etykieta": "Wydaj i zapisz jego zeznanie o ulotkach",
      "reakcja": "Przeczytam, zanim podpiszę. Zwłaszcza godzinę, bo potem będę musiał pamiętać ją za wszystkich.",
      "zysk": "Zeznanie Kita o ulotkach jest w księdze: policjant może je potem sprawdzić.",
      "strata": "Kit zostaje świadkiem z nazwiskiem w księdze i może stracić pracę, jak szef się dowie.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Noah Reyes: „Zapis praktykanta potwierdza 22:15. Teraz mogę porównać zeznanie z zamówieniem w kopiarni.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Przyniosę potwierdzenie. Nie paragon, mówiłem, że nie mam. Coś wymyślę, serio.",
      "zysk": "Słuchawki zostają w biurze do czasu dowodu, że są Kita.",
      "strata": "Kit wraca do roboty bez muzyki i prawdopodobnie bez chęci mówienia o czymkolwiek.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Kit Navarro: „W pracy słychać już tylko ksero. Szef mówi, że od razu lepszy pracownik, ja mówię mniej.”"
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
      "tekst": "Jak wygląda etui?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brązowa skóra. Znam je, nie zgłaszam przypadkowego przedmiotu.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jak się zamyka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Zatrzaskiem. Wystarczy docisnąć. Nie ma suwaka ani kłódki.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Był sprawny?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Tak. Gdyby nie był, wymieniłbym. Nie lubię, kiedy drobne rzeczy zostają nienaprawione.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co pozwoli je odróżnić od innych?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Kartonik w środku. M.D. i znak nieskończoności. Jej pismo.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Ile jest kluczy?",
              "ton": "niewygodne",
              "wymaga": null,
              "gasi": "dwa",
              "odpowiedz": "Jeden. Do naszego mieszkania. Innych nie potrzebowała.",
              "mina": "klamie",
              "dalej": [
                {
                  "tekst": "W etui są dwa klucze. Skąd mały z numerem 14?",
                  "ton": "niewygodne",
                  "wymaga": "d7_etui_klucze",
                  "klucz": "dwa",
                  "odpowiedz": "Drugiego nie znam. Chcę się dowiedzieć, co otwiera, nie będę udawał, że wiem.",
                  "mina": "emocja"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego chcesz znać linię tramwaju?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Żeby wiedzieć, gdzie szukać. Jeśli etui przyjechało konkretną linią, Maya mogła nią jechać.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Mogła. A jeśli ktoś je znalazł i przewiózł?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wtedy sprawdzę zły przystanek. To moje godziny, nie twoje. Wolę sprawdzić niż nic nie robić.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co zrobisz na przystanku?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Poczekam. Popatrzę, kto wysiada. W końcu ktoś ją widział, nie mogła zniknąć między drzwiami.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "A jeśli Maya nie chce być szukana?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Chce wrócić. Ma dom, męża, spokój. Nie ma się czego bać.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Skąd wiesz, czego chce, skoro nie rozmawiacie?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Znam ją. Ty znasz cudze zguby. Nie będziemy chyba porównywać, kto spędził z nią więcej czasu.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Od kiedy jej szukasz?",
      "ton": "uprzejme",
      "wymaga": null,
      "gasi": "ulotki",
      "odpowiedz": "Od czwartku wieczorem. Zgłosiłem zaginięcie tej samej nocy, od razu.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Co uznałeś za sygnał, że nie wróci?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie odbierała. Nie lubię, kiedy ktoś wychodzi i nie można się dowiedzieć, gdzie jest.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Przecież wcześniej pracowała nocą.",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Praca to co innego. Wiem, ile zwykle zajmuje. Nie trzeba pilnować zegarka, żeby zauważyć zmianę.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Ulotki były o 22:15, zgłoszenie rano. Dlaczego mówisz o tej samej nocy?",
          "ton": "niewygodne",
          "wymaga": "d7_kit_ulotki|d5_notes_ulotki",
          "klucz": "ulotki",
          "odpowiedz": "Mówię o tym samym szukaniu. Ulotki zamówiłem wcześniej, na wszelki wypadek. Kto przekazuje ci te godziny?",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Czemu pytasz o źródło zamiast wyjaśnić kolejność?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo ktoś robi ze mnie podejrzanego za to, że zacząłem szukać żony bez czekania do rana.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co zrobisz z kluczami, jeśli je odzyskasz?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Będą w domu. Tam, gdzie powinny być. Jeśli Maya wróci, nie będzie musiała ich szukać.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Jak wejdzie, jeśli klucze będą w środku?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Otworzę. Jestem. Właśnie to próbuję powiedzieć od początku.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A kiedy wyjdziesz jej szukać?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Przecież mogę zostawić wiadomość. Nie musisz układać mi dnia, wystarczy wydać etui.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Chcesz zostawić jej coś przy okienku?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "List mogę. Tylko chciałbym wiedzieć, że trafi do niej, a nie do kolejnej szuflady.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Bez obietnicy, że przyjdzie?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "To przynajmniej bez obietnicy, że go komuś innemu pokażesz. Chyba tyle można ustalić.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego nie odbiera ich sama?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Bo jej nie ma. Gdybym wiedział, gdzie jest, nie musiałbym prosić o numer tramwaju.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Policja może potwierdzić twoje zgłoszenie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Może. Powiedzą też, że dorosły ma prawo wyjść z domu. Słyszałem to wystarczająco często.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nie zgadzasz się z tym?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Z wyjściem tak. Ze zniknięciem bez słowa nie. Małżeństwo nie polega na zostawianiu rzeczy w tramwajach.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Lena może przekazać wiadomość?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Lena twierdzi, że nic nie wie. A jednak wszyscy pytają ją, jakby miała więcej praw niż ja.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Zapytałeś ją spokojnie?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "To sprawa między mną a żoną. Przyszedłem po etui.",
              "odpowiedz": "Nie będę tu odtwarzał każdej rozmowy. To nie jej etui ani twoje. Jest Mai.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co mam zapisać o tej wizycie?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Że Evan Doyle prosił o klucze żony i informację o ich znalezieniu. Czytelnie, bez dopisywania motywów.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "A jeśli odmówię informacji o trasie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Zapisz również odmowę. Wrócę. Wolę mieć ślad, niż za każdym razem zaczynać od przedstawiania się.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Jak długo będziesz wracał?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Tak długo, jak będzie trzeba. Nie traktuj tego jako groźby, odpowiadam na pytanie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Odbierzesz etui bez informacji o trasie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Chcę obu rzeczy. Etui świadczy, że była gdzieś niedawno, trasa mówi gdzie. Dlaczego mam zadowolić się połową?",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Bo rzecz i miejsce pobytu właścicielki to nie to samo.",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Dla ciebie dwie rubryki. Dla mnie jedna osoba. Proszę nie rozcinać tego tak wygodnie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie i kiedy Maya zgubiła etui?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Nie wiem. W czwórce albo w jedenastce, dlatego pytam o linię. Pory też nie podam, jeśli jej nie znam.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Skąd więc wiesz, że etui jest tutaj?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wiem, sprawdzam. Rzeczy trafiają do biura, więc przyszedłem. Mam czekać, aż ktoś sam zadzwoni?",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Czy opisujesz to, co widziałeś przed zaginięciem?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Tak. Skórę, zatrzask, jej kartonik. Nie twierdzę, że stałem obok, kiedy je zostawiała.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co zmieni sama pora znalezienia?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Zawęzi czekanie. Nie będę stał na pętli od pierwszego do ostatniego kursu, jeśli wiem, kiedy jechała.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Pora znalezienia nie musi być porą jej przejazdu.",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "To sprawdzę. Każda informacja może być niedokładna, nie znaczy, że wolę nie mieć żadnej.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "W środku są dwa klucze. Do czego mały z numerem 14?",
      "ton": "niewygodne",
      "wymaga": "d7_etui_klucze",
      "klucz": "dwa",
      "odpowiedz": "Drugiego nie znam. Maya miała swoje sprawy. Jeśli wiesz, co otwiera, powiedz.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Przed chwilą nie potrzebowała innych kluczy.",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Myślałem, że nie potrzebuje. Nie kłamię o kluczu, którego nie znam. Próbuję się dowiedzieć.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Dlaczego ulotki zamówiłeś przed zgłoszeniem zaginięcia?",
      "ton": "niewygodne",
      "wymaga": "d7_kit_ulotki|d5_notes_ulotki",
      "klucz": "ulotki",
      "odpowiedz": "Chciałem zacząć od razu. Ulotki w czwartek, policja rano. To nie dowodzi, że zrobiłem jej coś złego.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Nie dowodzi. Ale skąd pewność już o 22:15, że zaginęła?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie miałem pewności. Bałem się. I nie będę tłumaczył przy szybie, jak człowiek ma wyglądać, kiedy się boi.",
          "mina": "emocja"
        }
      ]
    },
    {
      "tekst": "Za telefon zapłaciłeś sto dolarów. Dziś też liczysz na brak wpisu?",
      "ton": "niewygodne",
      "wymaga": "d3_maz_i_siostra:wez_100_evan",
      "odpowiedz": "Liczę, że nie będziemy udawać obcych. Wtedy udało się porozumieć, dziś pytam o własną żonę tak samo.",
      "mina": "neutralna"
    },
    {
      "tekst": "Telefon dostała Lena. Czemu nadal pytasz tutaj?",
      "ton": "niewygodne",
      "wymaga": "d3_maz_i_siostra:wydaj_lena",
      "odpowiedz": "Bo od niej niczego się nie dowiedziałem. Biuro przynajmniej musi zapisać, kiedy odmawia.",
      "mina": "neutralna"
    },
    {
      "tekst": "Telefon był u ciebie. Dlaczego nie pomógł znaleźć Mai?",
      "ton": "rzeczowe",
      "wymaga": "d3_maz_i_siostra:wydaj_evan",
      "odpowiedz": "Był zablokowany. Zaniosłem Reyesowi. Teraz szukam następnego śladu, zamiast siedzieć i patrzeć na ekran.",
      "mina": "neutralna"
    },
    {
      "tekst": "Telefon nadal czeka na Mayę. Etui może czekać obok.",
      "ton": "rzeczowe",
      "wymaga": "d3_maz_i_siostra:zatrzymaj",
      "odpowiedz": "Dwie jej rzeczy będą bezpieczne, a o niej dalej nic. Naprawdę to uznajesz za załatwienie sprawy?",
      "mina": "neutralna"
    }
  ],
  "decyzje": [
    {
      "akcja": "powiedz_linie",
      "etykieta": "Powiedz, którą linią przyjechały klucze",
      "reakcja": "Czwórka. Zapiszę. Będę na pętli, jeśli ktoś wreszcie zechce powiedzieć coś jeszcze.",
      "zysk": "Evan dostaje, o co prosi, i przestaje naciskać na biuro.",
      "strata": "Evan zacznie stać na pętli czwórki, a Maya straci tam spokój.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Leo Marsh: „Na pętli czwórki mężczyzna z termosem wypatruje wysiadających. Ludzie zaczynają wysiadać wcześniej.”"
      }
    },
    {
      "akcja": "zatrzymaj_list",
      "etykieta": "Zatrzymaj etui, zaproponuj zapieczętowany list",
      "reakcja": "Zostawię zapieczętowany. Nie obiecuj za nią odbioru, tylko pilnuj, żeby nikt inny go nie czytał.",
      "zysk": "Zyskujesz czas: etui zostaje w biurze, a Evan może napisać do żony.",
      "strata": "Obiecujesz coś, czego nie możesz zagwarantować, bo Maya może nie przyjść.",
      "echo": {
        "za_dni": 4,
        "forma": "list",
        "tekst": "Evan Doyle: „List leży przy okienku. Nadal sprawdzam, czy został odebrany. — E.D.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Zapisz, że pytałem. Następnym razem zacznę od tego wpisu, żebyśmy nie tracili czasu.",
      "zysk": "Etui zostaje w biurze, a Evan nic nie wie o linii.",
      "strata": "Evan zostaje z niczym i wraca ostrzejszy.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Evan Doyle: „Wracam po informację o kluczach. Godzinę poprzedniej odmowy mam zapisaną, tej też nie pominę.”"
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
      "tekst": "Jak rozpoznać torbę?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "siostra",
      "odpowiedz": "Szara. Narzędziowa, kupiłam ją Mai. Nie wygląda jak elegancki prezent, wiem.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Jaki ma kształt?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Podłużna, żeby weszły narzędzia. Nie plecak. Maya nosiła ją w ręce, nawet kiedy była za ciężka.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego kupiłaś właśnie ją?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Bo miała porozrywane kieszenie od śrubokrętów. Chciałam kupić coś, czego nie odłoży do szafy.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Co jest charakterystycznego?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Rozpruta podszewka. W środku obcęgi z żółtą izolacją i miarka z literą „M”. Ale Nora też zna zawartość.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Skąd ją znasz?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "nora",
              "odmowa": "Najpierw teczka. O znajomościach opowiem, jak będę wiedziała, komu.",
              "odpowiedz": "Maya pracowała w kamienicy. Widziałam narzędzia, ale przyszłam po papier. Po kolei: torba to opakowanie, dokument to sprawa.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jakiego papieru szukasz?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "nora",
      "odpowiedz": "Kopii pokwitowania rodziny Okoye. Bez niej mają zapłacić drugi raz albo się wyprowadzić.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Za co zapłacili?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Zaliczka na remont, czterysta dolarów od rodziny. Czternaście rodzin, termin rozliczenia: czwartek, dziewiąty września.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto przyjmował pieniądze?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "nora",
              "odpowiedz": "Iris Bell. Zostawia sobie oryginał, potem bywa, że nie pamięta wpłaty. Pamięć nie może tu zastąpić kwitu.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Skąd wiesz, że kopia jest w torbie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Z mojego zeszytu. Spisuję numery pokwitowań, tej kopii brakuje. Maya pracowała w kamienicy w tym samym tygodniu.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Twój zeszyt nie wystarczy jako dowód wpłaty?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "nora",
              "odpowiedz": "To mój zapis numeru. Potrzebujemy pokwitowania, na którym przyjęcie pieniędzy potwierdziła Iris.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co chcesz zrobić z torbą?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "siostra",
      "odpowiedz": "Zabrać do siebie. Oddać Mai, kiedy się odezwie. Nie chcę, żeby jej rzeczy leżały wszędzie poza domem.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "U ciebie też będą poza jej domem.",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "U mnie przynajmniej czekają na nią. Nie na kogoś, kto przyjdzie ze swoim powodem, żeby je zabrać.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nie ufasz Norze?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Ufam, że chce pomóc rodzinie. Ale to nie znaczy, że może czytać wszystko, co Maya schowała.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "A jeśli w torbie jest cudze pokwitowanie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Niech je dostaną. Tylko trzeba oddzielić ten papier od reszty. Nie całą torbę nazwać dowodem.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Tyle ci wystarczy?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "nora",
              "odpowiedz": "Jeśli da się potwierdzić wpłatę. Przedmiot, osoba, skutek. Narzędzia nie zapłacą za remont.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego przyszłyście razem?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "nora",
      "odpowiedz": "Żeby nie wydać torby jednej z nas, zanim druga zdąży powiedzieć, czego potrzebuje. Nie zgadzamy się, ale to możemy ustalić.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Lena, też tak uważasz?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Tak. Tylko ona mówi „kopia”, a potem wyciąga rękę po całą torbę. Wolę przy tym stać.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dasz Lenie obejrzeć papier razem z tobą?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "nora",
              "odpowiedz": "Tak. Nie potrzebuję wyłączności na cudzy przedmiot. Potrzebuję czytelnej kwoty i możliwości użycia dokumentu.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Która z was ustąpi, jeśli nie da się podzielić?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Nie obiecam za rodzinę Okoye, że zrezygnuje z czterystu dolarów. Lena też nie powinna obiecywać za siostrę.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Lena?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Dlatego stoimy tutaj. Gdybym umiała sama wybrać, już bym się z nią pokłóciła i poszła.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Skąd związek torby Mai z papierami z kamienicy?",
      "ton": "niewygodne",
      "wymaga": null,
      "kto": "siostra",
      "odpowiedz": "Instalację. Jest elektryczką. Mówiła, że widziała coś, czego nie powinna, a potem urwała.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co widziała?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Nie powiedziała. Wiem, że tak łatwo się ucina pytania, ale dalej nie mam ci czego opowiedzieć.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Nie dopytywałaś?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Dopytywałam o inne rzeczy. Teraz wszystkie wydają mi się głupsze od tego jednego pytania.",
              "mina": "emocja"
            }
          ]
        },
        {
          "tekst": "Maya zostawiała u ciebie dokumenty?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "Nie będę dopisywać spotkań, których nie było. Mam swoje zapisy wpłat. Torbę sprawdzamy dziś.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli nie znajdziesz potwierdzenia swojej wersji?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "nora",
              "odpowiedz": "Zostaną zapisy, ale to słabszy dowód. Nie powiem rodzinie, że to tyle samo.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Da się zasłonić prywatne dane i zrobić kopię?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "nora",
      "odpowiedz": "Da się. Trzeba jednak wiedzieć, co zasłaniamy. Kopia bez nazwiska może dowodzić wpłaty, ale gorzej dowodzi, kto zapłacił.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Zgodzisz się na takie obejrzenie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Przy mnie. I tylko tego, co dotyczy wpłaty. Nie chcę później słyszeć, że przy okazji znaleziono coś jeszcze.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Jeśli to wydłuży odbiór?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "siostra",
              "odpowiedz": "Poczekam. Wolę stać przy szybie niż potem zgadywać, co ktoś zrobił z jej rzeczami.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Gdzie miałby zostać dokument?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "nora",
          "odpowiedz": "W biurze, z potwierdzeniem. Torba dla Leny. Inaczej jedna z nas wyjdzie z cudzą sprawą pod pachą.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "To załatwia problem rodziny?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "nora",
              "odpowiedz": "Nie cały. Daje dowód do następnej rozmowy. Nie sprzedawajmy im końca sprawy, zanim się zacznie.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Żółta kopia, czterysta dolarów, podpis „I.”. Rozpoznajesz?",
      "ton": "niewygodne",
      "wymaga": "d8_torba_kopia",
      "kto": "nora",
      "odpowiedz": "Iris Bell. Znam podpis z innych pokwitowań. Teraz mamy coś, co można porównać, nie tylko to, co pamiętam.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Lena, wiedziałaś o tej kopii?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "siostra",
          "odpowiedz": "Nie. Ale schowanie czegoś tam, gdzie ktoś może znaleźć, to do Mai podobne. Tak jak z telefonem.",
          "mina": "emocja"
        }
      ]
    },
    {
      "tekst": "Masz już telefon Mai. Co zmieni ta torba?",
      "ton": "uprzejme",
      "wymaga": "d3_maz_i_siostra:wydaj_lena",
      "kto": "siostra",
      "odpowiedz": "Telefon leży. Torbę mogę postawić obok, żeby nie zbierała własnych rzeczy po całym mieście. Nie wiem, kiedy wróci.",
      "mina": "neutralna"
    },
    {
      "tekst": "Evan przeczytał wiadomość. Co się stało potem?",
      "ton": "niewygodne",
      "wymaga": "d3_maz_i_siostra:wydaj_evan|d3_maz_i_siostra:wez_100_evan",
      "kto": "siostra",
      "odpowiedz": "Przyszedł pod moje drzwi. Krzyczał, aż wyszła sąsiadka. Dlatego tym razem stoję przy odbiorze do końca.",
      "mina": "emocja"
    },
    {
      "tekst": "Telefon czeka tutaj. Torba też może zostać?",
      "ton": "rzeczowe",
      "wymaga": "d3_maz_i_siostra:zatrzymaj",
      "kto": "siostra",
      "odpowiedz": "Może. Tylko ja wtedy znowu wrócę do domu bez niczego, a Maya nadal nie będzie wiedziała, gdzie to wszystko leży.",
      "mina": "neutralna"
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj_lenie_cala",
      "etykieta": "Wydaj Lenie całą torbę",
      "kto": "siostra",
      "reakcja": "Wezmę całą. Nora, wiem, po co przyszłaś. Tylko nie potrafię zostawić tu kolejnej rzeczy Mai.",
      "zysk": "Lena ma torbę siostry i spokojniej śpi.",
      "strata": "Nora traci dowód wpłaty rodziny Okoye, a bez żółtej kopii mają tylko jej słowo.",
      "echo": {
        "za_dni": 4,
        "forma": "gosc",
        "tekst": "Nora Vance: „Kopia wyszła z torbą. Rodzina Okoye ma znowu tylko moje zapiski, a Iris żąda pokwitowania.”"
      }
    },
    {
      "akcja": "kopia_osobno",
      "etykieta": "Zasłoń dane, zrób kopię osobno za zgodą obu",
      "kto": "nora",
      "reakcja": "Po kolei: dokument zostaje, dane zasłaniamy, torba do Leny. Poproszę numer, pod którym zapiszesz dokument.",
      "zysk": "Dowód zostaje w biurze, a Lena dostaje torbę, obie strony się zgodziły.",
      "strata": "Zajmuje to całą wizytę, a zasłonięte dane osłabiają dowód.",
      "echo": {
        "za_dni": 4,
        "forma": "gosc",
        "tekst": "Nora Vance: „Zasłonięta kopia osłabia dowód, ale wpłata jest widoczna. Zachowam numer pokwitowania biura.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Czyli obie wychodzimy bez niczego. Nie zasuwaj jeszcze, chcę zapamiętać, gdzie odkładasz torbę.",
      "zysk": "Torba zostaje w biurze, nikt jej nie dostaje i nikt nie ma pretensji o stronniczość.",
      "strata": "Lena nie ma nic po siostrze, a Nora nie ma kopii. Obie odchodzą z pustymi rękami.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Lena Brandt: „Myślę o torbie co noc. Jeśli Maya zapyta o swoje narzędzia, będę musiała odesłać ją do okienka.”"
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
      "tekst": "Jak wygląda aparat?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Srebrny. Analogowy. Słuchaj, mam paragon, ale mogę też opisać.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Duży czy kieszonkowy?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Taki na pasek, nie schowasz go wygodnie w spodniach. Brat zawsze nosił na ramieniu.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Pasek jest oryginalny?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Skąd mam wiedzieć, jaki był w sklepie? Nie kupowałam z fabryki. Aparat z komisu może mieć pasek z drugiego aparatu.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Ma uszkodzenia?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Wgniecenie w lewym rogu. Brat upuścił na schodach. Aparat ma charakter, tak twierdzi.",
          "mina": "mowi"
        },
        {
          "tekst": "Jakieś inicjały albo znak pod klapką?",
          "ton": "niewygodne",
          "wymaga": null,
          "gasi": "inicjaly",
          "odpowiedz": "Żadnych. Teo niczego nie wydrapywał. Czysty aparat, poza wgnieceniem.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Pod klapką baterii jest R.O. Czyje to inicjały?",
              "ton": "niewygodne",
              "wymaga": "d8_aparat_naklejka",
              "klucz": "inicjaly",
              "odpowiedz": "Rafa Okoye. Sąsiad pożyczył aparat bratu. Mam paragon, ale rozumiem, że teraz będziesz pytać o sąsiada.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie został w jedenastce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "W jedenastce, na siedzeniu. Rozmawiałam z lekarzem brata, nie sprawdzałam godziny. Człowiek słyszy o szpitalu i zapomina o rzeczach.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co się stało bratu?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Teo, Teodor Halm, ortopedia. Noga w gipsie, rower. Twierdzi, że nie jego wina. Brzmi znajomo?",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Można z nim potwierdzić aparat?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Teraz? W szpitalu? Słuchaj, mam paragon, właśnie po to go przyniosłam, żeby nie budzić chorego.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Kiedy zorientowałaś się, że go nie masz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Po wyjściu. Ramię lżejsze, pasek został na siedzeniu. Nie trzeba do tego śledztwa.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wróciłaś na pętlę?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Wróciłam szukać. Trafiłam tutaj. Jeśli się znajdzie, może wreszcie skończymy z trasą mojego spaceru.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co dokładnie potwierdza paragon?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Zakup srebrnego aparatu w komisie na Rynku. Cena, data. Mam zdjęcie w telefonie.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jest numer seryjny?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nie. W tym komisie najwyraźniej nie wpisali. Ja nie drukuję ich paragonów.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Więc może dotyczyć innego srebrnego aparatu.",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Może też dotyczyć tego. Brak numeru nie zmienia srebrnego aparatu w żaden aparat.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Dlaczego zdjęcie zamiast oryginału?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo telefon mam przy sobie. Papier po dwóch latach wygląda gorzej, a zdjęcie da się powiększyć.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto ma oryginał?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Brat. Nie mam przy sobie całej szuflady jego dokumentów. Miało wystarczyć potwierdzenie zakupu.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co jest na filmie?",
      "ton": "niewygodne",
      "wymaga": null,
      "gasi": "film",
      "odpowiedz": "Pewnie wakacje. Nic ważnego. Nie wywoływał, więc nie widziałam zdjęć.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Skoro nie widziałaś, skąd wiesz, że nieważne?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Powiedziałam „pewnie”. Ludzie robią zdjęcia na wakacjach. To nie jest tajna informacja.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Aparat jest potrzebny czy właśnie film?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Aparat z filmem. Jak odbierasz buty, nie pytasz, czy wolno też wziąć sznurowadła.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Film jest pełny, 36 z 36. Po co bratu pełny aparat w szpitalu?",
          "ton": "niewygodne",
          "wymaga": "d8_aparat_naklejka",
          "klucz": "film",
          "odpowiedz": "Wywoła i pokaże mamie. Mieszka daleko, lubi papierowe zdjęcia. Nie zrobi tego bez filmu, prawda?",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "To czemu mówisz, że nic ważnego?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Dla niego ważne. Dla biura nie. Nie każde rodzinne zdjęcie trzeba oglądać przez lupę.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego musi wrócić dziś?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Brat czeka. Jeśli mam drugi raz jechać do szpitala, wolę z tym, po co mnie wysłał.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co się stanie, jeśli poczeka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ja stracę kolejny wieczór, on będzie dzwonił. Nie wszystkim płacą za siedzenie przy szybie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Bez potwierdzenia numeru aparat może zostać w depozycie.",
              "ton": "niewygodne",
              "wymaga": null,
              "ustawia": "d8_bree_oferta",
              "odpowiedz": "Słuchaj. Osiemdziesiąt dolarów, wydajesz aparat i oboje przestajemy się męczyć. To jest konkret.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Może przyjść ktoś inny z potwierdzeniem?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Po to przyszłam ja. Jeśli sprowadzisz całą rodzinę, nadal będziecie patrzeć na ten sam paragon.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A właściciel z dokumentem zawierającym numer?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Powiem bratu, czego żądasz. Ale nie obiecuję, że nagle pojawi się papier, którego komis nie wystawił.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co mam zapisać jako podstawę wydania?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Paragon i mój odbiór. Bree Halm. Słuchaj, przecież nie zakrywam twarzy.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Odbierasz własny aparat czy w cudzym imieniu?",
          "ton": "niewygodne",
          "wymaga": null,
          "odmowa": "Słuchaj, przyszłam po aparat, nie na spowiedź. Mam paragon.",
          "odpowiedz": "W imieniu brata. Mówiłam od wejścia. Nie będę teraz twierdzić, że chodzi o mój.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Masz od niego upoważnienie?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Nie na papierze. Mam jego sprawę na głowie. Jeśli tylko papier ma wartość, wracamy do paragonu.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co, jeśli zgłosi się inny właściciel?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Pokażesz, komu wydano. Po to zapisujesz nazwisko. Nie każesz chyba każdej rzeczy czekać na wszystkich mieszkańców.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Zgadzasz się wrócić wyjaśnić?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Jeśli naprawdę ktoś przyjdzie, nie jeśli komuś wyda się podobna. Słuchaj, zostawmy choć tyle rozsądku.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Pod klapką jest „R.O.”. Czyje inicjały?",
      "ton": "niewygodne",
      "wymaga": "d8_aparat_naklejka",
      "klucz": "inicjaly",
      "odpowiedz": "Raf Okoye, sąsiad. Pożyczył bratu. Paragon nadal mam, to przecież nie znika tylko dlatego, że ktoś coś wydrapał.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Na pasku klucz do lokalu Okoye. Kto naprawdę cię przysłał?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Ktoś płaci za odbiór. Tyle powiem. Nie pytam, co jest na kliszy, i nie będę zgadywać za ciebie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Czyli paragon nie dowodzi prawa do tego aparatu.",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Dowodzi zakupu aparatu. Prawo do tego ustalisz, jak zechcesz. Ja widzę, że już ustalasz.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Aparat i pasek, wszystko razem. Paragon schowam, jeszcze się przyda.",
      "zysk": "Bree odchodzi z aparatem, a brat dostaje zdjęcia.",
      "strata": "Aparat Rafa Okoye wychodzi z biura, a razem z nim zdjęcia pękniętej ściany z Cooper Street.",
      "echo": {
        "za_dni": 4,
        "forma": "gosc",
        "tekst": "Nora Vance: „Raf szuka aparatu z pełnym filmem z kamienicy. W biurze już go nie ma, a pęknięta ściana została bez zdjęć.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Zapisz, że pokazałam paragon. Kiedy wrócę, nie będę znowu zaczynać od koloru.",
      "zysk": "Aparat zostaje w biurze do wyjaśnienia, do kogo naprawdę należy.",
      "strata": "Bree wraca ze złością, a jej brat dalej leży bez zdjęć dla mamy.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Raf Okoye: „Podobno aparat nadal leży w biurze. Przyjdę rano z kimś, kto potwierdzi, że jest mój.”"
      }
    },
    {
      "akcja": "wez_80_bree",
      "etykieta": "Wydaj aparat Bree i przyjmij od niej 80 $",
      "kasa": 80,
      "reakcja": "Osiemdziesiąt. Słuchaj, od razu można było tak rozmawiać. Pasek też podaj.",
      "zysk": "Dostajesz 80 dolarów, czyli ponad pół czynszu.",
      "strata": "Aparat Rafa znika razem z pełnym filmem, a Bree może się wygadać, że okienko dało się kupić.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Nora Vance: „Bree opowiada w kamienicy, że odebrała aparat za osiemdziesiąt dolarów. Raf chce wiedzieć, komu zapłaciła.”"
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
      "tekst": "Jak wygląda piórnik?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "iris",
      "odpowiedz": "Metalowy, matowy. Bez kwiatków. Taki nie zwraca niczyjej uwagi, dopóki się nie zgubi.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jak jest zamykany?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Na zatrzask. Nie potrzeba kluczyka. Wystarczy nie szarpać.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "To wystarczy inspekcji do identyfikacji?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "victor",
              "odpowiedz": "Do porównania z magazynem. Nie do ustalenia właściciela. To osobne rubryki.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jak wygląda wnętrze?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Dwa przedziały. Żetony mogą się przemieścić, ale przegródka zostaje. Proszę nie wysypywać ich luzem.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Ile żetonów?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "iris",
              "odpowiedz": "Pięć. To akurat można policzyć bez rozmowy o całej kamienicy.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Do czego służą żetony?",
      "ton": "niewygodne",
      "wymaga": null,
      "kto": "iris",
      "gasi": "zetony",
      "odpowiedz": "Do skrzynek pocztowych lokatorów. Zwykła numeracja, nic poza tym.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Czyje skrzynki?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Moich lokatorów. Nazwisk nie podam. Nie każdy chce, żeby jego sprawy jeździły do Urzędu.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Numery skrzynek też są tajne?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "iris",
              "odpowiedz": "Same nie. Z nazwiskami już mówią więcej. Dlatego nie układajmy tutaj całego spisu.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Po co na żetonach opisy ludzi zamiast numerów mieszkań?",
          "ton": "niewygodne",
          "wymaga": "d9_zetony_numery",
          "kto": "iris",
          "klucz": "zetony",
          "odpowiedz": "Żeby goniec rozpoznał odbiorcę paczki. „Kobieta z walizką” wystarczy, nie trzeba czytać nazwiska na głos.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co jest w paczkach?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "iris",
              "odmowa": "Nie przy panu Crane’ie. I nie przy szybie, która ma uszy.",
              "odpowiedz": "Papiery na nowe życie. Dla ludzi, których ktoś bije albo ściga. Pobieram opłatę, nie udaję, że robię to za darmo.",
              "mina": "emocja",
              "dalej": [
                {
                  "tekst": "Tego też będzie dotyczył protokół?",
                  "ton": "niewygodne",
                  "wymaga": null,
                  "kto": "victor",
                  "odpowiedz": "Zapiszę to, co zostało powiedziane, z podaniem źródła. Nie potwierdzę jednym podpisem całej opowieści.",
                  "mina": "neutralna",
                  "dalej": [
                    {
                      "tekst": "Wiedziałaś, że zapisze także twoje słowa?",
                      "ton": "niewygodne",
                      "wymaga": null,
                      "kto": "iris",
                      "odpowiedz": "Wiem, gdzie stoję. Pytanie, czy przy wydaniu zapamiętasz tylko numery, czy także tych ludzi.",
                      "mina": "neutralna"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tekst": "Czego szuka tutaj inspekcja?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "victor",
      "odpowiedz": "Numeru odbioru i potwierdzenia. Piórnik przyjechał szóstką bez właściwego wpisu. Chcę przywrócić ciągłość dokumentów.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Co trafi do Urzędu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Protokół. Jeden egzemplarz tam, drugi zostaje. Kto to podpisze?",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto będzie go czytał?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "victor",
              "odpowiedz": "Osoby prowadzące dalsze czynności. Nie wybieram ich po nazwiskach przy tym okienku.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Dlaczego nie chcesz protokołu?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Bo czyta go więcej osób, niż pan Crane zamierza. Potem ktoś niewymieniony w rozmowie wie, na kogo czekać.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Możesz zagwarantować, kto zobaczy numery?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "victor",
              "odpowiedz": "Mogę zagwarantować, co wysyłam i gdzie. Nie będę składał obietnic za cały Urząd.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego odbiór jest pilny?",
      "ton": "uprzejme",
      "wymaga": null,
      "kto": "iris",
      "odpowiedz": "Czworo ludzi już ma bilety i czeka na swoją kolej. Nie lubię naciskać, ale ich podróży nie przełożę jednym zdaniem.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "A jeśli zostawię piórnik do soboty?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Jedna rodzina jedzie jutro o 5:40. W sobotę będzie można bardzo spokojnie wyjaśnić, dlaczego nie pojechała.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nie możesz przekazać paczek bez żetonów?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "iris",
              "odpowiedz": "Żetony służą właśnie temu, żeby nie wydawać na ładną opowieść. Tobie powinno to być bliskie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Możesz sprawdzić i od razu zwrócić?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Sprawdzenie tworzy zapis. Jeśli ktoś liczy, że po obejrzeniu zapomnę numery, niech nie nazywa tego kontrolą.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wydanie po spisaniu ci wystarczy?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "iris",
              "odpowiedz": "Dostanę piórnik. Ludzie dostaną ryzyko, o którym ich nie uprzedziłam. To nie jest ten sam odbiór.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co da jeden egzemplarz zamiast dwóch?",
      "ton": "rzeczowe",
      "wymaga": null,
      "kto": "victor",
      "odpowiedz": "Potwierdzi czynność tutaj. Nie zakończy pełnego obiegu. Zapiszę również, dlaczego drugiego nie otrzymałem.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Uznasz to za odmowę współpracy?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "victor",
          "odpowiedz": "Za ograniczoną współpracę. Słowa mają znaczenie, nawet kiedy wynik ci się nie podoba.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Możesz na tym poprzestać?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "victor",
              "odpowiedz": "Dzisiaj przyjmę to, co będzie. Nie obiecam, że później nikt nie poprosi o resztę.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Czy taki kompromis ci odpowiada?",
          "ton": "uprzejme",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Pan Crane ma podpis, ja nadal nie mam piórnika. Czasem kompromis oznacza tylko, że obie strony stoją dłużej.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Wolisz więc brak jakiegokolwiek zapisu?",
              "ton": "niewygodne",
              "wymaga": null,
              "kto": "iris",
              "odpowiedz": "Wolę dostać rzecz. Wpis staje się moją sprawą wtedy, kiedy kogoś po nim znajdą.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co masz z pomagania tym ludziom?",
      "ton": "niewygodne",
      "wymaga": null,
      "kto": "iris",
      "odpowiedz": "Opłatę za pracę i kłopoty, których nie biorą na siebie inni. Nie przyszłam po odznakę za dobroć.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "A jeśli ktoś nie ma pieniędzy?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Wtedy jest trudniej. Nie będę obiecywać przy inspektorze, że wszystkim wszystko załatwię.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Księga to pokaże?",
              "ton": "uprzejme",
              "wymaga": null,
              "kto": "victor",
              "odpowiedz": "Pokaże wydanie, nie całą sytuację człowieka. Dlatego potrzebujemy prawdziwego wpisu, a nie wygodnej opowieści.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Można ci odmówić bez utraty twojej pomocy?",
          "ton": "niewygodne",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Można. Tylko konsekwencje odmowy też są prawdziwe. Nie wymyśliłam odjazdu o 5:40 na potrzeby tej rozmowy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Kto wtedy odpowiada przed czekającymi?",
              "ton": "rzeczowe",
              "wymaga": null,
              "kto": "iris",
              "odpowiedz": "Ja. I powiem im dokładnie, gdzie piórnik został. Bez ozdabiania.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co oznaczają opisy na odwrocie pięciu żetonów?",
      "ton": "niewygodne",
      "wymaga": "d9_zetony_numery",
      "kto": "iris",
      "klucz": "zetony",
      "odpowiedz": "Odbiorców paczek z papierami. Czterech opisanych, piąty czeka. Przy panu Crane nie podam nic dokładniejszego.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Dla kogo jest 0809, bez opisu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "kto": "iris",
          "odpowiedz": "Jeszcze dla nikogo. Opis będzie, kiedy zgłosi się człowiek. Nie wpisuję nazwiska przed zapłatą.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Poprzednio był pełny wpis. Dlaczego teraz naciskasz?",
      "ton": "rzeczowe",
      "wymaga": "d4_iris:rejestr",
      "kto": "iris",
      "odpowiedz": "Poprzednio dowiedziałam się, jak tu zapisujesz. Teraz mówię z góry, kto może za ten zapis zapłacić. Nie dolarami.",
      "mina": "neutralna"
    },
    {
      "tekst": "Wtedy zapłaciłaś za brak wpisu. Dziś liczyłaś na to samo?",
      "ton": "niewygodne",
      "wymaga": "d4_iris:koperta",
      "kto": "iris",
      "odpowiedz": "Liczyłam, że znamy już sposób załatwiania spraw. Pan Crane widzę, że chciałby ustalić własny.",
      "mina": "neutralna"
    },
    {
      "tekst": "Poprzednia paczka została zatrzymana. Co z jej odbiorcami?",
      "ton": "rzeczowe",
      "wymaga": "d4_iris:odmow_zglos",
      "kto": "iris",
      "odpowiedz": "Nadal pytają. Nie podałam im twoich domysłów, podałam adres biura. Dziś wolałabym nie dopisywać kolejnej rzeczy.",
      "mina": "neutralna"
    }
  ],
  "decyzje": [
    {
      "akcja": "zetony_iris",
      "etykieta": "Wydaj piórnik Iris",
      "kto": "iris",
      "reakcja": "Pięć, zgadza się. Schowam je, zanim ktoś zacznie dopisywać do numerów nazwiska.",
      "zysk": "Czterech ludzi z żetonów jest bezpiecznych, a Iris będzie ci to pamiętać.",
      "strata": "Skrytka działa poza księgą, a Victor zapisze, że go zignorowano.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Victor Crane: „Piórnik wydano osobie prywatnej. Proszę wskazać osobę potwierdzającą wydanie, bo podpisu w dokumentach brak.”"
      }
    },
    {
      "akcja": "zetony_victor",
      "etykieta": "Pokaż żetony Victorowi i podpisz oba egzemplarze",
      "kto": "victor",
      "reakcja": "Dwa egzemplarze. Przeczytaj numery przed podpisem, potem jeden jedzie do Urzędu.",
      "zysk": "W księdze jest ślad i nikt nie zarzuci ci układu z Iris.",
      "strata": "Numery żetonów jadą do Urzędu, a Iris tego nie zapomni.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Czworo ludzi dostało pisma z Urzędu. Numery musiały wyglądać w protokole bardzo niewinnie.”"
      }
    },
    {
      "akcja": "jeden_egzemplarz",
      "etykieta": "Pokwituj Victorowi tylko jeden egzemplarz",
      "kto": "victor",
      "reakcja": "Jeden egzemplarz przyjmuję. Brak drugiego też odnotuję, nie zniknie między kartkami.",
      "zysk": "Victor ma swój podpis, a drugiej kopii nikt nie wysyła do Urzędu.",
      "strata": "Victor policzy to jako niechęć do współpracy, a Iris nadal nie ma piórnika.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Przyjęto jeden egzemplarz pokwitowania. Obieg do Urzędu pozostaje nieuzupełniony. — V. Crane"
      }
    },
    {
      "akcja": "depozyt",
      "etykieta": "Zostaw piórnik w depozycie do soboty",
      "kto": "victor",
      "reakcja": "Do soboty. Dopisz odjazd o 5:40, żeby potem nie wyszło, że nikt nie uprzedził.",
      "zysk": "Zyskujesz czas do soboty, a nikt nie dostaje piórnika.",
      "strata": "Do soboty żaden z czterech nie dostanie dokumentu, a jedna rodzina jedzie jutro o 5:40.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Iris Bell: „Rodzina pyta, czy depozyt przyspieszy przed odjazdem. Nie wiem już, co im odpowiedzieć bez podawania adresu biura.”"
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
      "tekst": "Jak wygląda kapelusz?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Szary filc. Zgodnie z regulaminem zaczynam od materiału i koloru.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jaką ma wstążkę?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Granatową, dookoła. Bez piór i innych dodatków.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Często go nosisz?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Do pracy. Kapelusz porządkuje wygląd, nawet jeśli reszta dnia nie daje się uporządkować.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Jaki rozmiar?",
          "ton": "rzeczowe",
          "wymaga": null,
          "gasi": "rozmiar",
          "odpowiedz": "Pięćdziesiąt osiem. Mam pewność, proszę zapisać.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Metka podaje 56, podszewka J.K. Skąd ta pewność?",
              "ton": "niewygodne",
              "wymaga": "d9_kapelusz_naklejka",
              "klucz": "rozmiar",
              "odpowiedz": "Z opisu, który przygotowałem. Nie z własnego kapelusza. Dobrze, to nie moja rzecz.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie został w czwórce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Na półce nad oknem, wczoraj około dwudziestej drugiej. Siedziałem sam.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Ktoś mógł potwierdzić ten przejazd?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Nikt obok nie siedział. Nie prosiłem innych pasażerów o zaświadczenia.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Czyli samego przejazdu też nie potwierdzisz?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Podaję godzinę i linię. Zgodnie z regulaminem od czegoś trzeba zacząć.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Dokąd wracałeś?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Do domu, z kancelarii. Ostatnio dużo pracy przy cudzych papierach.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Jaka kancelaria?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Nie dotyczy zguby. Nie trzeba znać wszystkich klientów, żeby porównać wstążkę.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Masz dowód zakupu?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Został w domu. Zgłoszenie składam teraz, dokument mogę przynieść później.",
      "mina": "klamie",
      "dalej": [
        {
          "tekst": "Ktoś może potwierdzić, że go nosisz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Żona. Jest w delegacji. Nie będziemy jej przecież ściągać dla filcu.",
          "mina": "klamie",
          "dalej": [
            {
              "tekst": "Można do niej zadzwonić?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "O tej porze nie. Proszę zachować proporcje. Kapelusz nie staje się ważniejszy od człowieka.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Zgodzisz się odebrać dopiero z potwierdzeniem?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jeśli tak tutaj postanowisz. Interesuje mnie, czy tak samo postępujesz z każdym.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego interesują cię inni?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Bo zasada, która działa raz, a raz nie, jest czyimś nastrojem. Regulamin powinien być trwalszy.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego potrzebujesz go właśnie teraz?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Jutro ważna rozmowa. Żona twierdzi, że bez kapelusza wyglądam nieprzekonująco.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Do rozmowy potrzebny kapelusz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Pierwsze wrażenie. Zanim zacznie się sprawdzanie dokumentów, człowiek już kogoś ocenił.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Na moje wrażenie też liczysz?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Każdy, kto się przedstawia, na coś liczy. Ja przynajmniej mówię spokojnie.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Możesz wziąć inny?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mógłbym. Przyszedłem jednak zgłosić ten. W biurze rzeczy znalezionych to chyba wystarczający powód.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli się nie znajdzie?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Rozmowa się odbędzie. Strata kapelusza nie zwalnia z obowiązków, zgodnie z regulaminem i bez niego.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Skąd tak dobrze znasz regulamin?",
      "ton": "niewygodne",
      "wymaga": null,
      "odpowiedz": "Czytam, zanim czegoś żądam. Dzięki temu oszczędzam czas osobie po drugiej stronie.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Która zasada dotyczy opisu?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Że powinien pozwolić rozpoznać przedmiot. Nie pamiętam numeru punktu. Sens jest ważniejszy od numeru.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A rozpoznanie oznacza prawo do odebrania?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "To właśnie powinno być jasno rozstrzygnięte. Podobają mi się takie pytania.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co, jeśli opis pasuje tylko z zewnątrz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Wtedy pytasz o środek. O ile wcześniej nie pokazujesz środka pytaniem. Inaczej każdy staje się właścicielem.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Skąd wiesz, że tutaj tak sprawdzamy?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Nie wiem. Stoję przy szybie i słucham. Można się wiele dowiedzieć bez zaglądania za nią.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co zrobisz po odmowie?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Odejdę. Ale może postoję chwilę, jeśli wolno. Lubię popatrzeć, jak pracuje nowe okienko.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Na co chcesz patrzeć?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Na kolejność. Kto mówi, kto pyta, kiedy otwiera się księga. Drobiazgi zdradzają organizację pracy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Ktoś ci za to płaci?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Zadajesz coraz ciekawsze pytania. Na to przy zgłoszeniu kapelusza nie muszę odpowiadać.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Nie przeszkadza ci kolejka?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Nie zamierzam zajmować szyby. Stanę z boku. Jeśli to niedozwolone, proszę wskazać zasadę.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli poproszę, żebyś wyszedł?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Wyjdę. Też warto wiedzieć, gdzie kończy się cierpliwość do uprzejmej rozmowy.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "„Hobbs & Syn, 56”, inicjały J.K. Czyj kapelusz zgłaszasz?",
      "ton": "niewygodne",
      "wymaga": "d9_kapelusz_naklejka",
      "klucz": "rozmiar",
      "odpowiedz": "Nie mój. Sprawdzałem, czy dobry opis wystarczy do wydania. Nie wystarczył, jak widzę.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Dla kogo to sprawdzasz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odmowa": "Regulamin nie wymaga uzasadnienia. Sprawdziłem.",
          "odpowiedz": "Dla siebie i ludzi, którzy płacą za wiedzę o nocnej zmianie. Nazwisk nie podam, zgodnie z własną ostrożnością.",
          "mina": "neutralna"
        },
        {
          "tekst": "Co o tym okienku im powiesz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Że trzeba znać więcej niż wstążkę. Resztę jeszcze obserwuję.",
          "mina": "neutralna"
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Dziękuję. Opis wystarczył, zapisuję sobie. Proszę pracować dalej.",
      "zysk": "Stahl odchodzi z kapeluszem, kolejka rusza.",
      "strata": "Kapelusz wychodzi po samym opisie, bez żadnego dowodu. Victor to zauważy.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Inspekcja przewozów: odnotowano wydanie kapelusza po opisie. Proszę uzupełnić podstawę potwierdzenia własności. — V. Crane"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Odmowa przyjęta. Kapelusz zostaje, ja zapamiętam, o co padły pytania.",
      "zysk": "Kapelusz zostaje, dopóki nie zgłosi się ktoś, kto zna wnętrze.",
      "strata": "Stahl nie przyznaje się do niczego i dalej stoi w kolejce, patrząc.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Inspekcja przewozów: odnotowano odmowę wydania kapelusza bez potwierdzenia. Zapis przyjęto do wiadomości. — V. Crane"
      }
    },
    {
      "akcja": "zadzwon",
      "etykieta": "Zadzwoń do inspekcji, że opis nie pasuje",
      "reakcja": "Przy takim drobiazgu? Dobrze, poczekam na połączenie. Zgodnie z regulaminem, oczywiście.",
      "zysk": "Masz pewność, że nikt nie nabrał biura, i ślad w księdze.",
      "strata": "Victor liczy, ile razy pytasz o pozwolenie, zamiast zdecydować sam.",
      "echo": {
        "za_dni": 2,
        "forma": "list",
        "tekst": "Inspekcja przewozów: odnotowano telefon w sprawie niezgodnego opisu. Proszę rozróżniać potrzebę sprawdzenia od potrzeby uzyskania pozwolenia. — V. Crane"
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
      "tekst": "Jak rozpoznać pudełko?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Z zaplecza, blaszane. Nie drewniane. Na drewnie przynajmniej człowiek by się wahał, zanim usiądzie.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jaki ma kształt?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Niskie, prostokątne. Mieściło się w szafce Sama. Nie jest to wielka skrzynia z warsztatu.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Jak się zamyka?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Na sprzączkę, z oporem. Proszę docisnąć wieko, nie ciągnąć za blachę.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Ma jakiś ślad?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Wgniecenie na wieczku. Usiadłam na nim w poczekalni. To akurat mogę poświadczyć osobiście.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Sam wiedział o wgnieceniu?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "To nie jest rzecz, którą łatwo ukryć. Gorzej mi powiedzieć, że je teraz zgubiłam, niż że na nim usiadłam.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie zostało w jedenastce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Wczoraj, ostatni kurs, na siedzeniu obok. Klucze miałam przy pasie, ręce po wyjściu puste. Wtedy zauważyłam.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Po co zabrałaś je z szafki?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Żeby nie wyrzucono. Zaplecze nie jest przechowalnią, tak mówią. Sam nie wrócił, więc rzeczy robią się niczyje.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Zabranie bez niego nie robi z nich twoich.",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Wiem. Dlatego od wejścia mówię, czyje. Nie chcę podpisywać się za właściciela.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Dlaczego nie zostawiłaś go w zajezdni?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Szafkę zamykają w przyszły piątek. Potem zbiorcze archiwum. Chciałam mieć co mu oddać, kiedy przyjdzie.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Masz pewność, że przyjdzie?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Napisałam. Nie odpisał. Pewności nie mam, mam termin zamknięcia.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Kim jest dla ciebie Sam?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Kolegą z nocy. On przy szybie, ja na zapleczu. Człowiek wie, gdzie pali się drugie światło.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Kiedy odszedł?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ponad miesiąc temu. Bez pożegnania. Szafka została, więc nie wyglądało to od razu jak koniec.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dalej jej pilnujesz?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Dopóki mogę. Przy zamykaniu przechodzę obok. Czasem sprawdzam, czy nic się nie zmieniło, choć mam klucze przy sobie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Dlaczego zostawił ci rzeczy?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Prosił, żebym trzymała, aż wróci. Nie podał dnia. Teraz każdy chce ode mnie daty, której nie dostałam.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dlaczego się zgodziłaś?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "Bo tak. Są pytania, na które człowiek z zaplecza nie odpowiada od progu.",
              "odpowiedz": "Bo to było łatwe zdanie: „potrzymasz?”. Trudne zrobiło się później.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co jest w pudełku?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Pasek od zegarka, bez tarczy, i karta inwentarza. Nic, co ktoś kupi na straganie.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Dlaczego zachować sam pasek?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Nie wyrzucam rzeczy kolegi dlatego, że nie umiem wyjaśnić każdej z osobna.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Sam nie powiedział?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Nie. Otworzyłam, żeby sprawdzić zawartość przed zamknięciem szafki, nie żeby znać całe jego życie.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Czego dotyczy karta?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Inwentarza szuflady. Numer jest na niej. Wolę odczytać, niż pomylić i zrobić nowy problem.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Nie pamiętasz numeru, a twierdzisz, że to jego?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Pamiętam, z czyjej szafki wyjmowałam. Numer trzeba porównać. Jedno drugiego nie zastępuje.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co stanie się po zamknięciu szafki?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Rzeczy pójdą do zbiorczego archiwum Urzędu. Dalej będę miała numer, ale nie będę miała pudełka.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Sam nie może odebrać z archiwum?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Może próbować. Najpierw będzie musiał dowiedzieć się, pod czym zapisali. Nie chcę mu zostawić samej kolejki do następnego okienka.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "To dlatego wyniosłaś pudełko?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Tak. A teraz sama stoję w kolejce i tłumaczę, dlaczego trzymałam cudzą rzecz.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Co napisałaś Samowi?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Że szafkę zamykają w piątek. Że ma przyjść po swoje. Bez wyrzutów, choć pierwszą kartkę wyrzuciłam.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co było na pierwszej?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Żeby wreszcie się odezwał. Nie wysłałam. Nie chcę, żeby bał się przyjść jeszcze bardziej.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co chcesz ode mnie dla Sama?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Żeby jego rzeczy zostały jego rzeczami. Osobistymi, nie zbiorczą pozostałością po dyżurnym.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Podpiszesz odbiór jako osoba przechowująca?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Tak, jeśli tak będzie napisane. Vera Kovacs. Nie podpiszę, że pudełko moje.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "A jeśli upomni się Urząd?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Powiem, skąd je wzięłam. Nie będę opowiadać, że samo wyszło z szafki.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Komu powiedzieć o planowanym powrocie?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Sam ma dostać wiadomość. Reszcie nie obiecuj za niego. Może nie chce wejść do pomieszczenia pełnego czekających ludzi.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Boisz się, że nie wróci przez nas?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Boję się, że nie wróci. Powodów nie znam. Kluczami dzwonię, ale odpowiedzi od tego nie przybywa.",
              "mina": "emocja"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Karta wskazuje szufladę numer sześć z naszego biura. Dlaczego?",
      "ton": "niewygodne",
      "wymaga": "d10_pudelko_karta",
      "odpowiedz": "Należała do Sama. Klucz zostawiłam w niej dla następnej osoby przy szybie. Żeby nie trzeba było zaczynać od szukania.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Dlaczego klucz został właśnie w szufladzie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Zostawiłam go dla następnej osoby przy szybie. Nie pomyślałam, że bez opisu będzie wyglądał jak do niczego.",
          "mina": "neutralna"
        },
        {
          "tekst": "Na wieku jest „Teczka jest pusta. Tak ma być”. Co to znaczy?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Nie wiem. Sam kazał powtórzyć dokładnie, gdy ktoś zapyta. Mogę powtórzyć, nie umiem wyjaśnić.",
          "mina": "emocja",
          "dalej": [
            {
              "tekst": "Powtarzasz cudze słowa, chociaż nie znasz ich znaczenia?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Tak. Dlatego mówię, że są jego. Gorzej byłoby dopowiedzieć coś od siebie, żeby brzmiało pewniej.",
              "mina": "neutralna",
              "dalej": [
                {
                  "tekst": "A jeśli ktoś weźmie to za twoje potwierdzenie?",
                  "ton": "rzeczowe",
                  "wymaga": null,
                  "odpowiedz": "To proszę dopisać: Vera nie wie. Niech chociaż jedno zdanie o mnie będzie dokładne.",
                  "mina": "neutralna"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "decyzje": [
    {
      "akcja": "pokwituj_osobista",
      "etykieta": "Pokwituj jako osobistą rzecz Sama",
      "reakcja": "Osobista rzecz Sama Holta. Proszę tak zostawić, bez skreślania nazwiska i zastępowania numerem zbiorczym.",
      "zysk": "Sam zobaczy, że biuro traktuje jego rzeczy jak osobiste, i będzie po twojej stronie.",
      "strata": "Rzecz zostaje poza zbiorczym archiwum, a Urząd dowie się, że ktoś ją zatrzymał.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Vera Kovacs: „Szafka zamknięta, pudełko nadal czeka na Sama. Napisałam mu, gdzie je znaleźć, choć znowu nie odpisał.”"
      }
    },
    {
      "akcja": "archiwum",
      "etykieta": "Oddaj do zbiorczego archiwum",
      "reakcja": "Zbiorcze archiwum. Daj mi numer przyjęcia, żeby chociaż z nim nie musiał zaczynać od zera.",
      "zysk": "Czysto, zgodnie z przepisami: rzeczy Sama są w archiwum Urzędu.",
      "strata": "Rzeczy osobiste Sama zostają w systemie Urzędu, a Sam straci możliwość odebrania ich samodzielnie.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Vera Kovacs: „Podałam Samowi numer archiwum. Nie odpisał, a ja nie mam już jego pudełka ani szafki.”"
      }
    },
    {
      "akcja": "zatrzymaj_do_15",
      "etykieta": "Zatrzymaj pudełko do przyjścia Sama w piątek",
      "reakcja": "Do piątku. Powiem mu, że pudełko czeka. Nie powiem, że obiecał przyjść, bo nie obiecał.",
      "zysk": "Sam odbierze pudełko osobiście, a Vera nie złamie obietnicy.",
      "strata": "Rzecz leży bez wpisu przez tydzień, a Urząd może zacząć pytać, czemu.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Vera Kovacs: „Napisałam, że pudełko jest zatrzymane do piątku. Nie odpowiedział, więc nadal nie mogę potwierdzić, że przyjdzie.”"
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
      "tekst": "Jak rozpoznać zeszyt?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Okładka tłusta. Nosiłem razem z kanapką. Pachnie cebulą, uprzedzam, żeby nie było reklamacji.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Jaki gruby?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Gruby zeszyt, nie notes do kieszeni. Grafik, przepisy, wszystko weszło. Kanapka już nie, ale próbowałem.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Przepisy między dyżurami?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Jak ktoś opowiada dobrą zupę, zapisuję tam, gdzie mam papier. Dyżur potem łatwiej znaleźć, za pomidorową.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Czym się zamyka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Gumką, ledwo trzymającą. Bez niej kartki się rozchodzą. Nie ciągnij za mocno, bo zostanie ci połowa.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Są luźne kartki?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Trochę. Dlatego ta gumka. Gdyby coś wypadło, też poproszę, nawet jeśli wygląda jak lista zakupów.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie został w jedenastce?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Na pętli, obok kanapki. Kanapkę zjadłem, zeszyt pojechał dalej. Ręce wykonały połowę zadania.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Nie zauważyłeś, że go nie niesiesz?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Miałem drugą kanapkę. Jedzenie mnie zajmuje. Masz, weź, jeszcze jest dobra.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Próbujesz zapłacić kanapką?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Dzielę się. Jeśli trzeba zapisać, wpisz cebulę. Nie chcę zeszytu bez pokwitowania za kromkę.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Kto prowadził następny kurs?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ktoś z naszej zmiany. Właśnie nazwisko sprawdziłbym w zeszycie. Bez niego wszystkich znam tylko z twarzy.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Motorniczy nie pamięta grafiku?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Swój pamięta, póki nie zamienią. A zamieniają. Zupa ma mniej wariantów niż nasz rozkład.",
              "mina": "mowi"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Dlaczego pytasz o Sama?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Kolega. Miał tutaj herbatę. Ja przynosiłem kanapki. Teraz nikt nie wie, gdzie go nosi.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Od kiedy go nie widzisz?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Ponad miesiąc. Powiedział, że idzie do portu coś załatwić. Potem przestał odbierać.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co miał załatwić?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Nie mówił. Szara teczka pod pachą, mina jak przed dentystą. Nie zajrzałem do teczki, nie dopowiem.",
              "mina": "neutralna"
            }
          ]
        },
        {
          "tekst": "Bywał u ciebie poza pracą?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Znałem go tutaj. To też jest znajomość. Nie muszę wiedzieć, jaki ma stół w kuchni, żeby zauważyć, że go nie ma.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Może po prostu nie chce kontaktu?",
              "ton": "niewygodne",
              "wymaga": null,
              "odmowa": "Ej, powoli. Najpierw zeszyt, potem domysły o koledze.",
              "odpowiedz": "Może. Niech powie, odpuszczę. Ciszy nie umiem odróżnić od tego, że coś mu się stało.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Gdzie już pytałeś o Sama?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Po zajezdni. Tych, co przychodzą przed świtem, i tych, co wychodzą. Każdy odsyła do następnego.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Dlaczego znów przychodzisz do okienka?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Bo to jego miejsce. Ktoś kiedyś zapyta o niego nie mnie, tylko tutaj. Nie chcę przegapić.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Co zrobisz, jeśli nikt nic nie wie?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Wrócę. Kanapki i tak robię. Jedna więcej mnie nie zrujnuje.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Rozpowiadasz wszystko, co usłyszysz?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jak dobrą wiadomość, to pewnie tak. W zajezdni ludzie też czekają. Złą najpierw sprawdzę.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Dobra też może zaszkodzić.",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "To powiedz, jeśli coś ma zostać przy szybie. Nie czytam z miny tak dobrze, jak z grafiku.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Jak poradzisz sobie bez zeszytu?",
      "ton": "uprzejme",
      "wymaga": null,
      "odpowiedz": "Spytam o zmianę, potem o następną. W końcu ktoś powie, że mam przestać pytać i zapisywać. No właśnie zapisuję.",
      "mina": "neutralna",
      "dalej": [
        {
          "tekst": "Nie możesz mieć osobnej kartki z grafikiem?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Mogę. Tylko osobna kartka zawsze jest w innej kieszeni niż ta, którą sprawdzam.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Telefon?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "W telefonie nie mam przepisu na zupę od człowieka, który właśnie siedzi obok. Wiem, mógłbym wpisać. Wolę zeszyt.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Co grozi za spóźnienie?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Dodatkowy dyżur, zła mina szefa. Ja to przeżyję, gorzej ktoś, kto czeka na tramwaj do roboty.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Możesz od razu zadzwonić po godzinę zmiany?",
              "ton": "rzeczowe",
              "wymaga": null,
              "odpowiedz": "Zadzwonię. Tylko potem nadal chcę zeszyt. Grafik to nie jedyna rzecz w środku.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Co jeszcze w nim zapisujesz?",
      "ton": "rzeczowe",
      "wymaga": null,
      "odpowiedz": "Numery telefonów, przepisy, cudze długi. Nie wszystko, czego się nie spłaci, warto skreślać.",
      "mina": "mowi",
      "dalej": [
        {
          "tekst": "Prowadzisz rachunki za kanapki?",
          "ton": "niewygodne",
          "wymaga": null,
          "odpowiedz": "Jak ktoś mówi „oddaję potem”, zapisuję. Żeby nie musiał się zastanawiać, czy wisi dwa, czy dwanaście.",
          "mina": "neutralna",
          "dalej": [
            {
              "tekst": "Ściągasz te długi?",
              "ton": "uprzejme",
              "wymaga": null,
              "odpowiedz": "Przynoszę kolejną kanapkę. Słaby ze mnie wierzyciel, ale nikt nie mówi, że głodny.",
              "mina": "mowi"
            }
          ]
        },
        {
          "tekst": "Właściciela da się poznać po zapiskach?",
          "ton": "rzeczowe",
          "wymaga": null,
          "odpowiedz": "Po grafiku i moim piśmie. Cebula jest dodatkowym świadkiem, bez prawa podpisu.",
          "mina": "mowi",
          "dalej": [
            {
              "tekst": "Kto potwierdzi pismo?",
              "ton": "niewygodne",
              "wymaga": null,
              "odpowiedz": "Ktoś z zajezdni. Przyprowadzę, jeśli trzeba. Tylko nie każ wybierać największego długu na dowód.",
              "mina": "neutralna"
            }
          ]
        }
      ]
    },
    {
      "tekst": "Sam jest winien trzynaście dolarów. Po to go szukasz?",
      "ton": "niewygodne",
      "wymaga": "d10_zeszyt_sam",
      "odpowiedz": "Nie. Dlatego obok napisałem „Czy on żyje?”. Trzynaście dolarów może sobie zostać w zeszycie.",
      "mina": "emocja",
      "dalej": [
        {
          "tekst": "Co mu powiesz, jeśli wróci?",
          "ton": "uprzejme",
          "wymaga": null,
          "odpowiedz": "Najpierw, żeby zjadł. Potem zapytam, gdzie był. Łatwiej czekać na odpowiedź, jak człowiek ma co przeżuwać.",
          "mina": "neutralna"
        }
      ]
    },
    {
      "tekst": "Vera chce, żeby Sam przyszedł w piątek po rzeczy. To niepewne.",
      "ton": "rzeczowe",
      "wymaga": "d10_vera:zatrzymaj_do_15",
      "odpowiedz": "Ale wiadomość do niego poszła? To już coś. Nie będę mówił, że na pewno wróci. Chociaż chciałbym powiedzieć wszystkim.",
      "mina": "emocja"
    },
    {
      "tekst": "Jego pudełko jest zapisane jako osobiste. Nadal czeka.",
      "ton": "rzeczowe",
      "wymaga": "d10_vera:pokwituj_osobista",
      "odpowiedz": "To dobrze. Niech wraca do własnych rzeczy, a nie do rubryki „po poprzedniku”.",
      "mina": "neutralna"
    },
    {
      "tekst": "Pudełko Sama poszło do archiwum. Vera ma numer.",
      "ton": "rzeczowe",
      "wymaga": "d10_vera:archiwum",
      "odpowiedz": "Numer też można zapisać. Tylko chciałbym wreszcie mieć dla niego wiadomość, przy której nie trzeba stać w kolejce.",
      "mina": "neutralna"
    }
  ],
  "decyzje": [
    {
      "akcja": "wydaj",
      "reakcja": "Gumka cała. Masz, weź kanapkę, tym razem bez zeszytu w środku. A o Sama jeszcze zapytam.",
      "zysk": "Dario odzyskuje grafik, a ty dostajesz pół kanapki z cebulą.",
      "strata": "Nie dowiadujesz się nic o Samie, a Dario wraca z tą samą troską.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Dario Ruiz: „Grafik się zgadza, okruchy też wróciły. Gdyby odezwał się Sam, powiedz mu, że nadal mam dla niego kanapkę.”"
      }
    },
    {
      "akcja": "odmow",
      "reakcja": "Przyprowadzę kogoś z zajezdni. Kanapkę możesz wziąć, odmowa jej nie zepsuła.",
      "zysk": "Zeszyt zostaje w biurze, a w nim dopisek o Samie, który możesz przeczytać jeszcze raz.",
      "strata": "Dario nie ma grafiku i jutro nie wie, o której jedzie. Szef się wścieknie.",
      "echo": {
        "za_dni": 2,
        "forma": "gosc",
        "tekst": "Dario Ruiz: „Spóźniłem się na zmianę, dostałem niedzielę do odrobienia. Zeszyt kosztuje mnie więcej czasu niż wszystkie zapisane w nim zupy.”"
      }
    },
    {
      "akcja": "powiedz_dario",
      "etykieta": "Wydaj zeszyt i powiedz, że Sam ma przyjść po rzeczy w piątek",
      "reakcja": "Ma przyjść w piątek? To przygotuję kanapkę. Jak nie przyjdzie, zjem, ale wolę przygotować.",
      "zysk": "Dario przestaje się martwić, a Sam ma przyjaciela, który przyjdzie na spotkanie.",
      "strata": "Zdradzasz plan Sama: jeśli nie chciał, żeby ktoś o nim wiedział, może się wycofać.",
      "echo": {
        "za_dni": 3,
        "forma": "gosc",
        "tekst": "Dario Ruiz: „Powiedziałem w zajezdni, że Sam ma przyjść w piątek. Wszyscy już wiedzą, teraz się zastanawiam, czy nie za szybko.”"
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
