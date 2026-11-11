# OKIENKO: rozmowy dni 6–10 (E2)

Format jak w tygodniu 1. Autor: bot (decyzja samograj), do przeglądu Tommy'ego. Wnętrza W4–W8 z paczki art6.

```json
{
 "id": "d6_ada",
 "dzien": 6,
 "postac": "Dziewczynka w żółtej pelerynie",
 "glos": "Opisuje rzeczy przez ślady i drobiazgi, które dorośli pomijają. Na pytanie o siebie odpowiada pytaniem.",
 "rzecz": "Puszka po herbacie z ruchomym dnem",
 "wnetrze": [
  {
   "sekret_id": "d6_odcinek_z_kasetki",
   "co_widac": "Pod ruchomym dnem puszki leży odcinek odbioru. Numer zgadza się z blankietem z kasetki, którą w czwartek zostawiła u Ciebie dama w jasnych rękawiczkach.",
   "co_z_tego_wynika": "Puszka należy do tego samego obiegu co kasetka. Dziewczynka nie znalazła jej przypadkiem."
  }
 ],
 "wejscie": "Znalazłam ją przy pętli, pod ławką. Jest lekka, ale coś w niej się przesuwa, kiedy się pochyli. Dał ją pan wczoraj na półkę?",
 "tury": [
  {
   "pytania": [
    {
     "tekst": "Jak ją znalazłaś?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Pod ławką, tą z ułamanym oparciem. Była mokra tylko od spodu.",
     "mina": "mowi"
    },
    {
     "tekst": "Czemu przyszłaś sama?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Dorośli zawsze mówią, że oddadzą, i potem ją zostawiają. Ja sprawdzam.",
     "mina": "neutralna"
    },
    {
     "tekst": "Co jest w środku?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Nie otwierałam. Dno przesuwa się samo, to nie moja wina.",
     "mina": "klamie"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Jak się nazywasz?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Ada. Bez nazwiska, bo mi się zmienia, jak mama się przeprowadza.",
     "mina": "mowi"
    },
    {
     "tekst": "Co chcesz z nią zrobić?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Oddać tej pani, co ją zgubiła. Wiem, jak wygląda. Ma rękawiczki jak z kościoła.",
     "mina": "mowi"
    },
    {
     "tekst": "Skąd znasz tę panią?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Z przystanku. Ona wszystkich zna po imieniu, tylko mnie nie.",
     "mina": "neutralna"
    },
    {
     "tekst": "Skąd wiesz, że dno się przesuwa?",
     "ton": "niewygodne",
     "wymaga": "d6_odcinek_z_kasetki",
     "odpowiedz": "Bo... widziałam ją wcześniej. U niej w torbie. Ale pan niech nie mówi dorosłym, że widziałam.",
     "mina": "emocja"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Zostawić ci kwit odbioru?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Jak pan napisze, że to ja ją przyniosłam. Ja zbieram takie kwity.",
     "mina": "mowi"
    },
    {
     "tekst": "Gdzie mieszkasz?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Przy linii szóstej, ale adresu nie daję. Tak mi powiedziała mama.",
     "mina": "neutralna"
    },
    {
     "tekst": "Czy ktoś kazał ci ją przynieść?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Nikt. Naprawdę. Ja bym też nie uwierzyła.",
     "mina": "emocja"
    }
   ]
  }
 ],
 "decyzje": [
  {
   "akcja": "wydaj",
   "reakcja": "Zaniosę ją tak, żeby nikt nie widział. Pan jest w porządku.",
   "zysk": "Ada dostaje swój pierwszy kwit i oddaje puszkę właścicielce.",
   "strata": "Puszka wychodzi z biura bez Twojej kontroli. Odcinek idzie z nią.",
   "echo": {
    "za_dni": 2,
    "forma": "gosc",
    "tekst": "Pani w rękawiczkach powiedziała mi, że nie mam pojęcia, co robię. Potem dała mi cukierka. Nie wzięłam."
   }
  },
  {
   "akcja": "zatrzymaj",
   "reakcja": "Dobrze, niech będzie na półce. Ale proszę jej nie otwierać bez mnie.",
   "zysk": "Puszka zostaje u Ciebie razem z odcinkiem, który może się przydać w kontroli.",
   "strata": "Ada przestaje Ci ufać i przynosi kolejne zguby pod drzwi.",
   "echo": {
    "za_dni": 2,
    "forma": "list",
    "tekst": "Zostawiłam wczoraj coś przy drzwiach, nie otwierałam. Proszę nie szukać mnie. Ada."
   }
  },
  {
   "akcja": "odmow",
   "reakcja": "To ja wrócę z mamą. Tylko ona mnie nie przekrzyczy.",
   "zysk": "Nie angażujesz dziecka w obieg, który wygląda na cudzy.",
   "strata": "Puszka wraca do skrzyni, a Ada pewnie zaniesie ją do kogoś innego.",
   "echo": {
    "za_dni": 1,
    "forma": "list",
    "tekst": "Puszki nie ma na półce. Ada wie, gdzie ona jest. Proszę nie pytać jej więcej."
   }
  }
 ]
}
```

```json
{
 "id": "d7_evan",
 "dzien": 7,
 "postac": "Mąż zaginionej, sam",
 "glos": "Zaczyna od grzecznego „czy mógłby pan”. Pod presją wraca do tego samego pytania, aż rozmówca je powtórzy.",
 "rzecz": "Skórzane etui na klucze z zatrzaskiem",
 "wnetrze": [
  {
   "sekret_id": "d7_dwa_klucze",
   "co_widac": "W etui są dwa klucze: nowoczesny od mieszkania i stary kluczyk od skrytki. W kieszonce leży kartonik z nadrukowanym znakiem nieskończoności.",
   "co_z_tego_wynika": "Etui ma właścicielkę, która zostawiła je celowo. Skrytka jest gdzieś poza domem i nie należy do męża."
  }
 ],
 "wejscie": "Czy mógłby pan sprawdzić, czy nie przyjechało etui na klucze? Brązowe, ze znakiem w kieszonce. Szukam go od tygodnia.",
 "tury": [
  {
   "pytania": [
    {
     "tekst": "Jak wygląda to etui?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Brązowe. Zatrzask wymieniałem dwa razy. Czy mógłby pan sprawdzić jeszcze raz?",
     "mina": "mowi"
    },
    {
     "tekst": "Co jest w środku?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Klucz do domu. I zapasowy. Czy mógłby pan to sprawdzić?",
     "mina": "neutralna"
    },
    {
     "tekst": "Czyje to etui?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Moje. To znaczy... dostałem je od żony. Czy mógłby pan nie notować tego?",
     "mina": "emocja"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Który klucz jest zapasowy?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Ten nowszy, srebrny. Czy mógłby pan go pokazać pod światło?",
     "mina": "mowi"
    },
    {
     "tekst": "Ile kluczy tam jest?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Dwa. Powiedziałem dwa. Czy mógłby pan sprawdzić, czy dwa?",
     "mina": "klamie"
    },
    {
     "tekst": "Skąd to etui u pana?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Zostawiłem je w tramwaju, jak wracałem z komisariatu. Czy mógłby pan sprawdzić godzinę?",
     "mina": "mowi"
    },
    {
     "tekst": "Do czego jest ten drugi, stary klucz?",
     "ton": "niewygodne",
     "wymaga": "d7_dwa_klucze",
     "odpowiedz": "Jaki drugi? ...Czy mógłby pan powtórzyć to pytanie?",
     "mina": "emocja"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Mogę pana prosić o podpis?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Czy mógłby pan wpisać moje nazwisko? Zrobię to sam, jeśli pan woli.",
     "mina": "mowi"
    },
    {
     "tekst": "Czy żona ma drugi komplet?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Miała. Czy mógłby pan nie pytać o żonę przy kolejce?",
     "mina": "neutralna"
    },
    {
     "tekst": "Co zrobi pan z etui?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Położę je na stole. Może przyjdzie po nie sama. Czy mógłby pan jej tego nie mówić?",
     "mina": "emocja"
    }
   ]
  }
 ],
 "decyzje": [
  {
   "akcja": "wydaj",
   "reakcja": "Dziękuję. Czy mógłby pan nie mówić nikomu, że byłem?",
   "zysk": "Evan odbiera etui i zostawia podpis. Masz jego pismo do porównań.",
   "strata": "Klucz od skrytki odchodzi razem z nim.",
   "echo": {
    "za_dni": 2,
    "forma": "list",
    "tekst": "Położyłem etui na stole. Do rana nikt po nie nie przyszedł. Czy mógłby pan sprawdzić, czy ona byłaby tu przed świtem?"
   }
  },
  {
   "akcja": "zatrzymaj",
   "reakcja": "Czy mógłby pan jej przekazać zapieczętowany list? Tylko ten jeden.",
   "zysk": "Etui zostaje na półce, a list pozwala Ci zachować kontrolę nad tym, co dojdzie do Mai.",
   "strata": "Evan wraca z pretensjami, jeśli list nie dojdzie.",
   "echo": {
    "za_dni": 2,
    "forma": "list",
    "tekst": "Czy list został przekazany? Proszę odpowiedzieć na adres z koperty."
   }
  },
  {
   "akcja": "odmow",
   "reakcja": "Rozumiem. Czy mógłby pan chociaż powiedzieć, dokąd odesłano etui?",
   "zysk": "Nie wydajesz klucza od skrytki osobie, która nie zna jego znaczenia.",
   "strata": "Evan szuka odpowiedzi gdzie indziej, a kolejka widziała, jak odchodzi.",
   "echo": {
    "za_dni": 1,
    "forma": "gosc",
    "tekst": "Pan mi nie powiedział, ale pan wie. Czy mógłby pan sprawdzić, co dziś wydał pan siostrze?"
   }
  }
 ]
}
```

```json
{
 "id": "d8_lena",
 "dzien": 8,
 "postac": "Siostra zaginionej, sama",
 "glos": "Odpowiada szybko i często dopiero w połowie zdania zauważa, że powiedziała za dużo.",
 "rzecz": "Torba narzędziowa z rozpruta podszewką",
 "wnetrze": [
  {
   "sekret_id": "d8_zolta_kopia",
   "co_widac": "W rozprutej podszewce tkwi żółta kopia pokwitowania z podpisem w jasnym atramencie. Pod podpisem stoi wyraźne «I.» i kwota pieniędzy wypłaconych lokatorom.",
   "co_z_tego_wynika": "Maya nosiła przy sobie dowód, że ktoś odbierał pieniądze lokatorów. Podpis wygląda jak podpis damy w jasnych rękawiczkach."
  }
 ],
 "wejscie": "To torba mojej siostry. Poznaję zamek, ja go przyszywałam. Proszę mi ją wydać, zanim ktoś inny powie, że jest jego.",
 "tury": [
  {
   "pytania": [
    {
     "tekst": "Jak ją poznajesz?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Zamek ciągnie na lewo. Maya zawsze zapina go w połowie, bo się boi, że ugryzie.",
     "mina": "mowi"
    },
    {
     "tekst": "Co jest w środku?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Kombinerki, śrubokręt, miara. Narzędzia taty. Ona je przejęła i nie oddała.",
     "mina": "neutralna"
    },
    {
     "tekst": "Czemu Maya jej nie odbierze?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Bo nie wie, że tu jest. A ja wiem. Dlatego jestem pierwsza.",
     "mina": "emocja"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Kto jeszcze wie o torbie?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Evan nie. Przysięgam, że nie. Proszę mu nie mówić.",
     "mina": "mowi"
    },
    {
     "tekst": "Gdzie ostatnio ją widziałaś?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Dwa tygodnie temu na parapecie. Potem Maya powiedziała, że ją odda do naprawy.",
     "mina": "mowi"
    },
    {
     "tekst": "Czemu tak ci zależy?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Bo to jedyna rzecz, której Evan jeszcze nie dotykał. Przepraszam, tak nie miało wyjść.",
     "mina": "klamie"
    },
    {
     "tekst": "Co to za papier w podszewce?",
     "ton": "niewygodne",
     "wymaga": "d8_zolta_kopia",
     "odpowiedz": "...Pan go zobaczył. To nie jest moje. To jest od Mai i nie wolno mi o nim mówić.",
     "mina": "emocja"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Mam ci ją zapakować?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Nie, wezmę ją pod pachę. Ciężka jest tylko z jednej strony.",
     "mina": "mowi"
    },
    {
     "tekst": "Podpiszesz odbiór?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Lena. Z jednym n. Mama mi dopisała drugie, ale w dowodzie go nie ma.",
     "mina": "neutralna"
    },
    {
     "tekst": "Jeśli Maya zapyta o torbę?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Powiem, że nie byłam. Przepraszam, od razu mi się to nie podoba.",
     "mina": "emocja"
    }
   ]
  }
 ],
 "decyzje": [
  {
   "akcja": "wydaj",
   "reakcja": "Dobrze. Obiecuję, że nikt jej dziś nie otworzy. Poza mną.",
   "zysk": "Lena zabiera torbę i podpisuje odbiór. Masz dowód kontaktu z rodziną.",
   "strata": "Żółta kopia pokwitowania wychodzi razem z torbą.",
   "echo": {
    "za_dni": 2,
    "forma": "gosc",
    "tekst": "Wyjęłam ten papier i schowałam gdzie indziej. Proszę nie pytać, gdzie."
   }
  },
  {
   "akcja": "zatrzymaj",
   "reakcja": "To zatrzymaj tylko kopię. Torbę wezmę teraz, a papier oddasz Mai.",
   "zysk": "Rozdzielasz torbę i kopię pokwitowania. Kopia zostaje do porównania z oryginałem.",
   "strata": "Lena czuje się okradziona i nie ufa Ci przez dwa dni.",
   "echo": {
    "za_dni": 3,
    "forma": "list",
    "tekst": "Pan zatrzymał to, co nie jest pańskie. Maya o tym usłyszy ode mnie."
   }
  },
  {
   "akcja": "odmow",
   "reakcja": "Rozumiem, że przepisy. Ale proszę o jedno: żeby torba nie trafiła do Evana.",
   "zysk": "Torba zostaje pod Twoją kontrolą, razem z papierem.",
   "strata": "Lena zawraca i szuka Mai na własną rękę.",
   "echo": {
    "za_dni": 1,
    "forma": "list",
    "tekst": "Nie wydał mi pan torby. Dobrze. Poszukam jej gdzie indziej."
   }
  }
 ]
}
```

```json
{
 "id": "d9_iris",
 "dzien": 9,
 "postac": "Dama z kopertą",
 "glos": "Mówi cicho i każdą prośbę przedstawia jako drobną przysługę. Po pytaniu o numer przechodzi na krótkie polecenia.",
 "rzecz": "Piórnik z podwójną przegródką",
 "wnetrze": [
  {
   "sekret_id": "d9_zetony",
   "co_widac": "W podwójnej przegródce piórnika leżą mosiężne żetony z wybitymi numerami. Trzy z nich mają numer paczki z linii szóstej, a czwarty jest bez numeru i ma wżerę po kwasie.",
   "co_z_tego_wynika": "To ewidencja przekazywanych paczek. Czwarty żeton należy do kogoś, kto nie powinien go mieć w tym obiegu."
  }
 ],
 "wejscie": "Mój piórnik. Bardzo prosiłabym, jeśli to nie kłopot. Jest w nim parę drobiazgów, które mają wartość tylko dla mnie.",
 "tury": [
  {
   "pytania": [
    {
     "tekst": "Jak wygląda?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Granatowy, z podwójną przegródką. Zamek wymieniałam raz.",
     "mina": "mowi"
    },
    {
     "tekst": "Co w nim jest?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Ołówki. Kilka rzeczy do rachunków. Nic, co zajęłoby panu więcej niż chwilę.",
     "mina": "neutralna"
    },
    {
     "tekst": "Czemu to takie ważne?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Bo ktoś go dla mnie zostawił. I ja nie lubię, jak ktoś zostawia mi rzeczy bez pytania.",
     "mina": "mowi"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Gdzie go pani zgubiła?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Na przystanku przy szóstce. Pamiętam, że padało inaczej niż dziś.",
     "mina": "mowi"
    },
    {
     "tekst": "Co jest w drugiej przegródce?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Pamiątki. Drobne, metalowe. Proszę nie liczyć ich przy ludziach.",
     "mina": "klamie"
    },
    {
     "tekst": "Kto pani go dał?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Nikt. Kupiłam go sama w sklepie, którego już nie ma.",
     "mina": "klamie"
    },
    {
     "tekst": "Skąd pani ma ten czwarty żeton?",
     "ton": "niewygodne",
     "wymaga": "d9_zetony",
     "odpowiedz": "Ten bez numeru. Pan go zobaczył. Proszę mi go oddać i zapomnieć, że istniał.",
     "mina": "emocja"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Wydać go pani teraz?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Jeśli pan zechce. Zostawię kopertę przy szybie, tak jak zawsze.",
     "mina": "mowi"
    },
    {
     "tekst": "Podpisze pani odbiór?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Podpiszę kreską. Mam skaleczoną dłoń. Proszę to zapisać.",
     "mina": "neutralna"
    },
    {
     "tekst": "Kto ma pozostałe żetony?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Ci, którzy wiedzą, po co je mają. Proszę nie szukać ich nazwisk.",
     "mina": "emocja"
    }
   ]
  }
 ],
 "decyzje": [
  {
   "akcja": "wydaj",
   "reakcja": "Dziękuję. Proszę nie zapisywać godziny. Jutro już jej nie będzie.",
   "zysk": "Iris odbiera piórnik, zostawia kopertę z 30 dolarami i podpis kreską.",
   "strata": "Odchodzą z nim trzy numery paczek, które mogły Cię zabezpieczyć w kontroli.",
   "echo": {
    "za_dni": 2,
    "forma": "list",
    "tekst": "Koperta była za mała. Proszę to uznać za przeprosiny."
   }
  },
  {
   "akcja": "zatrzymaj",
   "reakcja": "Rozumiem. Odłoży go pan na półkę, na której go nie zobaczą.",
   "zysk": "Piórnik zostaje u Ciebie, a żetony mogą posłużyć jako dowód dla Victora.",
   "strata": "Iris wie, że masz żetony, i zaczyna zbierać rzeczy po tobie.",
   "echo": {
    "za_dni": 2,
    "forma": "gosc",
    "tekst": "Pamiętam, że ma pan jedną rzecz, która nie jest pańska. Proszę jej nie pokazywać nikomu."
   }
  },
  {
   "akcja": "zadzwon",
   "reakcja": "Nie ma potrzeby dzwonić. Wszystko można załatwić bez dyżurnego.",
   "zysk": "Dyżurny rejestruje próbę prywatnego odbioru i potwierdza numery paczek.",
   "strata": "Iris traci cierpliwość i przerywa współpracę.",
   "echo": {
    "za_dni": 3,
    "forma": "list",
    "tekst": "Piórnik zostaje u was. Ja zostaję bez pytań. Proszę nie pisać do mnie więcej."
   }
  }
 ]
}
```

```json
{
 "id": "d10_vera",
 "dzien": 10,
 "postac": "Pracownica zaplecza tramwajowego",
 "glos": "Podaje najpierw miejsce, potem przedmiot i na końcu nazwisko, jeśli trzeba. Nie dopowiada.",
 "rzecz": "Metalowe pudełko z paskiem od zegarka",
 "wnetrze": [
  {
   "sekret_id": "d10_karta_szuflady",
   "co_widac": "W pudełku leży pasek od zegarka bez tarczy i karta inwentarza szuflady z naniesionym numerem. Numer szuflady zgadza się z tą, w której leżał klucz bez zamka.",
   "co_z_tego_wynika": "Pudełko należało do poprzednika. Klucz z Twojej szuflady pasuje do jego dawnej szafki."
  }
 ],
 "wejscie": "Zaplecze, szafka czterdzieści dwa. Pudełko metalowe, brązowe. Nazwisko na karcie wymazane. Zabrałam je z likwidowanej szafki.",
 "tury": [
  {
   "pytania": [
    {
     "tekst": "Czemu je pani przynosi?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Likwidacja. Wszystko, co zostaje w szafce po terminie, trafia tutaj.",
     "mina": "mowi"
    },
    {
     "tekst": "Czyje to?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Poprzedniego pracownika. Powiedzieli mi, że wyjechał.",
     "mina": "neutralna"
    },
    {
     "tekst": "Co jest w środku?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Pasek, karta. Nie otwierałam przy nikim.",
     "mina": "klamie"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Od kiedy leżało w szafce?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Od czterech lat. Co kwartał sprawdzam zamek. Nikt nie przyszedł.",
     "mina": "mowi"
    },
    {
     "tekst": "Kto miał klucz?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Ja i on. I kierownik zmian, ale kierownik nie przychodzi.",
     "mina": "neutralna"
    },
    {
     "tekst": "Czemu nie wyrzuciła pani pudełka?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Bo szafka była zajęta. Biuro płaci za zajęte szafki. Ja nie płacę.",
     "mina": "klamie"
    },
    {
     "tekst": "Co znaczy numer na karcie?",
     "ton": "niewygodne",
     "wymaga": "d10_karta_szuflady",
     "odpowiedz": "Szuflada. U pana. Ja już nie pytam, czy pan o niej wie.",
     "mina": "emocja"
    }
   ]
  },
  {
   "pytania": [
    {
     "tekst": "Mam pokwitować odbiór?",
     "ton": "uprzejme",
     "wymaga": null,
     "odpowiedz": "Proszę. Podpiszę pod pańskim nazwiskiem, jeśli jest.",
     "mina": "mowi"
    },
    {
     "tekst": "Gdzie pudełko ma trafić?",
     "ton": "rzeczowe",
     "wymaga": null,
     "odpowiedz": "Do archiwum zbiorczego albo do pana. Jedno z dwóch.",
     "mina": "neutralna"
    },
    {
     "tekst": "Co jeśli pan Sam się zgłosi?",
     "ton": "niewygodne",
     "wymaga": null,
     "odpowiedz": "Proszę mu powiedzieć, że szafka jest pusta. Jemu to wystarczy.",
     "mina": "emocja"
    }
   ]
  }
 ],
 "decyzje": [
  {
   "akcja": "wydaj",
   "reakcja": "Zabieram do archiwum. Jedno pudełko mniej na moim sumieniu.",
   "zysk": "Pudełko trafia do archiwum, a Ty masz pokwitowanie i czystą ewidencję.",
   "strata": "Karta szuflady znika z Twojego zasięgu.",
   "echo": {
    "za_dni": 2,
    "forma": "list",
    "tekst": "Archiwum przyjęło pudełko bez karty. Karta wciąż leży gdzie indziej."
   }
  },
  {
   "akcja": "zatrzymaj",
   "reakcja": "Dobrze. Jako rzecz osobistą pana Sama. Niech tu poczeka.",
   "zysk": "Pudełko zostaje pod Twoim kluczem jako rzecz osobista Sama.",
   "strata": "Vera wie, że wiesz, i trzyma się z dala od Twojej szuflady.",
   "echo": {
    "za_dni": 3,
    "forma": "gosc",
    "tekst": "Zostawiłam panu teraz drugi klucz do szafki. Proszę go nie szukać u mnie."
   }
  },
  {
   "akcja": "odmow",
   "reakcja": "Nie ma pani prawa? Tylko pytam. Proszę mi zostawić pudełko na kwit.",
   "zysk": "Pudełko wraca do Very, a Ty zachowujesz neutralność.",
   "strata": "Karta szuflady odchodzi w nieznane miejsce.",
   "echo": {
    "za_dni": 1,
    "forma": "list",
    "tekst": "Pudełko oddałam drugiej zmianie. Nie pytają o numery."
   }
  }
 ]
}
```
