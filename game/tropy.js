/* TROPY: styk rozmowa -> magazyn (docs/STRATEGIA_GRY.md, §4).
   Każda rzecz gościa ma cechy (pola). Cechę gracz zna dopiero wtedy, gdy gość ją wypowie:
   `re` sprawdzamy na tekście kwestii, które faktycznie padły (ST.heard), więc przepisanie dialogu
   nie psuje tropów, dopóki znak szczególny rzeczy pada w rozmowie.
   cel  = cechy właściwej rzeczy, bl = bliźniaki (nadpisują wybrane pola), dop = odpowiedź na dopytanie przez szybę. */
window.TROPY={
 d1_thomas:{pola:{kolor:'skóra',rozmiar:'rozmiar',szew:'szew przy kciuku'},
  cel:{kolor:'brązowa',rozmiar:'mały',szew:'biała nitka, krzywo'},
  re:{kolor:/brązowa skóra/i,rozmiar:/mały rozmiar/i,szew:/biał[aąe] nitk|w lewej biała/i},
  dop:{kolor:'Brązowa skóra, już trochę wytarta.',rozmiar:'Mały rozmiar. Ellen miała drobne dłonie.',szew:'Przy kciuku zszyłem ją białą nitką. Krzywo.'},
  bl:[{szew:'czarna nitka, równo'},{rozmiar:'duży'}]},
 d1_rosa:{pola:{kolor:'papier',zszywka:'zamknięcie',srodek:'pod palcami'},
  cel:{kolor:'brązowy',zszywka:'jedna zszywka, wbita krzywo',srodek:'banknoty i złożona kartka'},
  re:{kolor:/Brązowa, (z )?jedn/i,zszywka:/jedn[aą] zszywk/i,srodek:/Kartka z naszymi nocami/i},
  dop:{kolor:'Brązowa, taka zwykła, biurowa.',zszywka:'Jedna zszywka. Weszła krzywo.',srodek:'Pieniądze i kartka z naszymi nocami.'},
  bl:[{zszywka:'dwie zszywki, równo'},{kolor:'szary',srodek:'same banknoty'}]},
 d2_jonah:{pola:{kolor:'kolor',klamra:'klamra',srodek:'w środku'},
  cel:{kolor:'czarny',klamra:'pęknięta',srodek:'ładowarka, książka, garść biletów, pudełko w tylnej kieszeni'},
  re:{kolor:/czarny, z pękniętą/i,klamra:/pękniętą klamrą/i,srodek:/(mnóstwo|kupa starych) biletów|pudełko,? w kieszeni/i},
  dop:{kolor:'Czarny.',klamra:'Klamra jest pęknięta, trzyma się na słowo.',srodek:'Ładowarka, książka, bilety. I pudełko w kieszeni na plecach.'},
  bl:[{srodek:'ręcznik, klapki, strój na basen'},{klamra:'cała',srodek:'ładowarka, zeszyty, piórnik'}]},
 d2_hana:{pola:{raczka:'rączka',naklejka:'w wieku',srodek:'obok skrzypiec'},
  cel:{raczka:'owinięta czerwoną taśmą',naklejka:'zielona naklejka, zdrapana z boku',srodek:'kalafonia, jedwabna szmatka, nuty Mendelssohna'},
  re:{raczka:/czerwoną taśmą/i,naklejka:/zielona naklejka/i,srodek:/Mendelssohn/i},
  dop:{raczka:'Rączka jest owinięta czerwoną taśmą.',naklejka:'W środku wieka jest zielona naklejka.',srodek:'Kalafonia, szmatka i nuty Mendelssohna.'},
  bl:[{raczka:'goła, bez taśmy',naklejka:'brak naklejki'},{srodek:'kalafonia, zapasowe struny, nuty Bacha'}]},
 d2_ines:{pola:{kolor:'czasza',raczka:'rączka',dziob:'dziób kaczki'},
  cel:{kolor:'czarna, automat',raczka:'kaczka',dziob:'odłamany z lewej'},
  re:{kolor:/Czarny, automatyczny/i,raczka:/kształcie kaczki/i,dziob:/odłamany/i},
  dop:{kolor:'Czarny, automatyczny.',raczka:'Rączka w kształcie kaczki.',dziob:'Dziób ma odłamany z lewej.'},
  bl:[{dziob:'cały'},{kolor:'granatowa, składana',dziob:'cały'}]},
 d3_maz_i_siostra:{pola:{kolor:'obudowa',etui:'etui',rog:'róg etui'},
  cel:{kolor:'czarna',etui:'skórzane',rog:'odklejony'},
  re:{kolor:/Czarny, w skórzanym/i,etui:/skórzanym etui/i,rog:/odklejonym rogiem|Róg etui się odkleja/i},
  dop:{kolor:'Czarny.',etui:'W skórzanym etui. Kupiłem je na rocznicę.',rog:'Róg etui jest odklejony.'},
  bl:[{rog:'cały, nowy'},{etui:'gumowe',rog:'pęknięty'}]},
 d3_dana:{pola:{wskaz:'wskazówka alarmu',spod:'spód',dzwonek:'dzwonki'},
  cel:{wskaz:'czerwona, krzywa, na 4:15',spod:'naklejka „Mama”',dzwonek:'wgniecenie przy prawym'},
  re:{wskaz:/czerwona, krzywa|czwartą piętnaście/i,spod:/naklejk[aęi] „Mama”/i,dzwonek:/wgniecenie przy prawym/i},
  dop:{wskaz:'Wskazówka alarmu jest czerwona i krzywa. Stoi na czwartej piętnaście.',spod:'Na spodzie jest naklejka „Mama”.',dzwonek:'Wgniecenie przy prawym dzwonku.'},
  bl:[{wskaz:'czarna, prosta, na 6:30',spod:'czysty'},{spod:'naklejka z ceną',dzwonek:'oba całe'}]}
};
window.TRT={head:'Z rozmowy',none:'Na razie wiesz tylko, czego szukasz. Reszta padła w rozmowie albo nie padła.',
 ask:'? dopytaj przez szybę',ask_cost:'Każde dopytanie zabiera gościowi kratkę cierpliwości.',take:'Na ladę',back:'Odłóż',other:'Nie tego szuka gość.',
 wrong:'„To nie moja rzecz.” Pomyłka idzie z Twojej kieszeni.',fine:15,step:'Krok 5: obejrzyj podobne rzeczy i połóż na ladzie tę, która pasuje do rozmowy',card:'Oględziny'};
window.TR={
 has:g=>!!window.TROPY[g.id],
 known(g,heard){const t=window.TROPY[g.id],o={};Object.keys(t.pola).forEach(k=>{o[k]=t.re[k].test(heard||'')});return o},
 traits(g,i){const t=window.TROPY[g.id];return i<0?t.cel:Object.assign({},t.cel,t.bl[i])}
};
