/* TROPY: styk rozmowa -> magazyn (docs/STRATEGIA_GRY.md, §4).
   Każda rzecz gościa ma cechy (pola). Cechę gracz zna dopiero wtedy, gdy gość ją wypowie:
   `re` sprawdzamy na tekście kwestii, które faktycznie padły (ST.heard), więc przepisanie dialogu
   nie psuje tropów, dopóki znak szczególny rzeczy pada w rozmowie.
   cel  = cechy właściwej rzeczy, bl = bliźniaki (nadpisują wybrane pola), dop = odpowiedź na dopytanie przez szybę. */
window.TROPY={
 d1_thomas:{pola:{kolor:'skóra',rozmiar:'rozmiar',szew:'szew przy kciuku',kiedy:'zawieszka: przyjęto'},
  cel:{kolor:'brązowa',rozmiar:'mały',szew:'biała nitka, krzywo',kiedy:'wczoraj wieczorem'},uw:'Pod białą nicią widać starszy szew, brązowy, przetarty.',
  re:{kolor:/brązowa skóra/i,rozmiar:/mały rozmiar/i,szew:/biał[aąe] nitk|w lewej biała/i,kiedy:/wczoraj wieczorem/i},
  dop:{kolor:'Brązowa skóra, już trochę wytarta.',rozmiar:'Mały rozmiar. Ellen miała drobne dłonie.',szew:'Przy kciuku zszyłem ją białą nitką. Krzywo.',kiedy:'Wczoraj wieczorem, w czwórce.'},
  bl:[{szew:'czarna nitka, równo',uw:'W palcu zwinięty bilet do kina.'},{rozmiar:'duży',uw:'Pachnie smarem. W środku monogram R.K.'},{kiedy:'w piątek',uw:'Na podszewce długopisem: „rekwizytornia”.'}]},
 d1_rosa:{pola:{kolor:'papier',zszywka:'zamknięcie',srodek:'pod palcami',kiedy:'zawieszka: przyjęto'},
  cel:{kolor:'brązowy',zszywka:'jedna zszywka, wbita krzywo',srodek:'banknoty i złożona kartka',kiedy:'dziś, 6:00 rano'},uw:'Na odwrocie ołówkiem: „3 noce”.',
  re:{kolor:/Brązowa, (z )?jedn/i,zszywka:/jedn[aą] zszywk/i,srodek:/Kartka z naszymi nocami/i,kiedy:/szóstej rano/i},
  dop:{kolor:'Brązowa, taka zwykła, biurowa.',zszywka:'Jedna zszywka. Weszła krzywo.',srodek:'Pieniądze i kartka z naszymi nocami.',kiedy:'Dziś o szóstej rano, w jedenastce.'},
  bl:[{zszywka:'dwie zszywki, równo',uw:'Na odwrocie pieczątka apteki.'},{kolor:'szary',srodek:'same banknoty',uw:'Banknoty sklejone, jakby ktoś liczył je mokrymi palcami.'},{kiedy:'wczoraj wieczorem',uw:'Róg naddarty, jakby ktoś już zaglądał.'}]},
 d2_jonah:{pola:{kolor:'kolor',klamra:'klamra',srodek:'w środku',kiedy:'zawieszka: przyjęto'},
  cel:{kolor:'czarny',klamra:'pęknięta',srodek:'ładowarka, książka, garść biletów, pudełko w tylnej kieszeni',kiedy:'wczoraj wieczorem'},uw:'Z bocznej kieszeni wystaje serwetka zapisana długopisem.',
  re:{kolor:/czarny, z pękniętą/i,klamra:/pękniętą klamrą/i,srodek:/(mnóstwo|kupa starych) biletów|pudełko,? w kieszeni/i,kiedy:/wczoraj wieczorem/i},
  dop:{kolor:'Czarny.',klamra:'Klamra jest pęknięta, trzyma się na słowo.',srodek:'Ładowarka, książka, bilety. I pudełko w kieszeni na plecach.',kiedy:'Wczoraj wieczorem, w jedenastce.'},
  bl:[{srodek:'ręcznik, klapki, strój na basen',uw:'Mokry w środku. Pachnie chlorem.'},{klamra:'cała',srodek:'ładowarka, zeszyty, piórnik',uw:'Na zeszycie: „klasa 2b”.'},{kiedy:'tydzień temu',uw:'Na dnie okruchy i zgnieciony bilet miesięczny.'}]},
 d2_hana:{pola:{raczka:'rączka',naklejka:'naklejka',srodek:'obok skrzypiec',kiedy:'zawieszka: kurs'},
  cel:{raczka:'owinięta czerwoną taśmą',naklejka:'zielona',srodek:'kalafonia, jedwabna szmatka, nuty Mendelssohna',kiedy:'ostatni kurs'},uw:'Na zielonej naklejce numer inwentarzowy 0334 i pieczątka. Ktoś zdrapywał ją paznokciem.',
  re:{raczka:/czerwoną taśmą/i,naklejka:/zielona naklejka/i,srodek:/Mendelssohn/i,kiedy:/ostatnim kursie/i},
  dop:{raczka:'Rączka jest owinięta czerwoną taśmą.',naklejka:'W środku wieka jest zielona naklejka.',srodek:'Kalafonia, szmatka i nuty Mendelssohna.',kiedy:'W ostatnim kursie czwórki.'},
  bl:[{raczka:'goła, bez taśmy',naklejka:'brak',uw:'W kieszonce wizytówka stroiciela.'},{srodek:'kalafonia, zapasowe struny, nuty Bacha',uw:'Na nutach pieczątka szkoły muzycznej.'},{kiedy:'poranny kurs',uw:'Zamki chodzą ciężko. Dawno nieotwierany.'}]},
 d2_ines:{pola:{kolor:'czasza',raczka:'rączka',dziob:'dziób kaczki',gdzie:'zawieszka: znaleziono'},
  cel:{kolor:'czarna, automat',raczka:'kaczka',dziob:'odłamany z lewej',gdzie:'haczyk przy tylnych drzwiach'},uw:'Rączka ma ślad kleju po taśmie. W środku coś szeleści.',
  re:{kolor:/Czarny, automatyczny/i,raczka:/kształcie kaczki/i,dziob:/odłamany/i,gdzie:/haczyku przy tylnych/i},
  dop:{kolor:'Czarny, automatyczny.',raczka:'Rączka w kształcie kaczki.',dziob:'Dziób ma odłamany z lewej.',gdzie:'Wisiał na haczyku przy tylnych drzwiach.'},
  bl:[{dziob:'cały',uw:'Kaczka świeżo polakierowana.'},{kolor:'granatowa, składana',dziob:'cały',uw:'Na pasku metka z pralni.'},{gdzie:'pod siedzeniem kierowcy',uw:'Mokry. Ktoś używał go dzisiaj.'}]},
 d3_maz_i_siostra:{pola:{kolor:'obudowa',etui:'etui',rog:'róg etui'},
  cel:{kolor:'czarna',etui:'skórzane',rog:'odklejony'},uw:'Pod etui wsunięte stare zdjęcie: dwie dziewczynki.',
  re:{kolor:/Czarny, w skórzanym/i,etui:/skórzanym etui/i,rog:/odklejonym rogiem|Róg etui się odkleja/i},
  dop:{kolor:'Czarny.',etui:'W skórzanym etui. Kupiłem je na rocznicę.',rog:'Róg etui jest odklejony.'},
  bl:[{rog:'cały, nowy',uw:'Ekran pęknięty w rogu.'},{etui:'gumowe',rog:'pęknięty',uw:'Na pleckach naklejka z jednorożcem.'}]},
 d3_dana:{pola:{wskaz:'wskazówka alarmu',spod:'spód',dzwonek:'dzwonki'},
  cel:{wskaz:'czerwona, krzywa, na 4:15',spod:'naklejka „Mama”',dzwonek:'wgniecenie przy prawym'},uw:'Pod tylną pokrywką złożony rachunek z warsztatu.',
  re:{wskaz:/czerwona, krzywa|czwartą piętnaście/i,spod:/naklejk[aęi] „Mama”/i,dzwonek:/wgniecenie przy prawym/i},
  dop:{wskaz:'Wskazówka alarmu jest czerwona i krzywa. Stoi na czwartej piętnaście.',spod:'Na spodzie jest naklejka „Mama”.',dzwonek:'Wgniecenie przy prawym dzwonku.'},
  bl:[{wskaz:'czarna, prosta, na 6:30',spod:'czysty',uw:'Tyka głośno i spieszy się kwadrans.'},{spod:'naklejka z ceną',dzwonek:'oba całe',uw:'Nowy, jeszcze z folią na szybce.'}]}
};
window.TRT={head:'Z rozmowy',none:'Na razie wiesz tylko, czego szukasz. Reszta padła w rozmowie albo nie padła.',
 ask:'? dopytaj przez szybę',ask_cost:'Każde dopytanie zabiera gościowi kratkę cierpliwości.',take:'Na ladę',back:'Odłóż',other:'Nie tego szuka gość.',
 wrong:'„To nie moja rzecz.” Pomyłka idzie z Twojej kieszeni.',fine:15,step:'Krok 5: obejrzyj podobne rzeczy i połóż na ladzie tę, która pasuje do rozmowy',card:'Oględziny',uw:'Rzuca się w oczy'};
window.TR={
 has:g=>!!window.TROPY[g.id],
 known(g,heard){const t=window.TROPY[g.id],o={};Object.keys(t.pola).forEach(k=>{o[k]=t.re[k].test(heard||'')});return o},
 traits(g,i){const t=window.TROPY[g.id];return i<0?t.cel:Object.assign({},t.cel,t.bl[i])},
 uw(g,i){const t=window.TROPY[g.id];return i<0?t.uw:t.bl[i].uw}
};
