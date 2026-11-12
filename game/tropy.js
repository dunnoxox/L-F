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
  bl:[{wskaz:'czarna, prosta, na 6:30',spod:'czysty',uw:'Tyka głośno i spieszy się kwadrans.'},{spod:'naklejka z ceną',dzwonek:'oba całe',uw:'Nowy, jeszcze z folią na szybce.'}]},
 /* I5: dni 4-5. Cechy padają w osobnych odpowiedziach; u Victora liczba słownie, u Gusa słowa nie zgadzają się z rzeczą (pole mowi). */
 d4_iris:{pola:{plotno:'płótno',wiaz:'wiązanie',srodek:'pod płótnem',gdzie:'zawieszka: znaleziono'},
  cel:{plotno:'szare',wiaz:'sznurek',srodek:'twarda kasetka z kłódką',gdzie:'półka nad siedzeniem'},uw:'Sznurek wiązany dwa razy. Pod węzłem został odcisk po pierwszym wiązaniu.',
  re:{plotno:/szarym płótnie/i,wiaz:/sznureczkiem/i,srodek:/kasetka na kłódkę/i,gdzie:/półce nad siedzeniem/i},
  dop:{plotno:'Szare płótno, zwyczajne.',wiaz:'Przewiązana sznureczkiem.',srodek:'Pod płótnem wyczujesz kasetkę na kłódkę.',gdzie:'Na półce nad siedzeniem, w szóstce.'},
  bl:[{wiaz:'taśma klejąca',uw:'Na płótnie stempel pralni.'},{srodek:'miękkie, chyba ubranie',uw:'Pachnie naftaliną.'},{gdzie:'pod siedzeniem motorniczego',srodek:'twarde, okrągłe',uw:'W środku coś grzechocze.'}]},
 d5_noah:{pola:{okl:'okładka',format:'format',wgn:'wgniecenie',gdzie:'zawieszka: znaleziono'},
  cel:{okl:'czarna, na spirali',format:'kieszonkowy',wgn:'z lewej strony',gdzie:'siedzenie'},uw:'Spomiędzy kartek sterczy róg ulotki z czyjąś twarzą.',
  re:{okl:/czarny, na spirali/i,format:/do kieszeni/i,wgn:/Wgnieciony z lewej/i,gdzie:/na siedzeniu obok/i},
  dop:{okl:'Czarny, na spirali.',format:'Mały, do kieszeni.',wgn:'Wgnieciony z lewej strony. Od kabury.',gdzie:'Na siedzeniu obok, w jedenastce.'},
  bl:[{wgn:'z prawej strony',uw:'Na pierwszej stronie lista zakupów.'},{format:'duży, biurowy',wgn:'brak',uw:'W rogu pieczątka szkoły wieczorowej.'},{gdzie:'podłoga przy drzwiach',uw:'Kartki sklejone po deszczu.'}]},
 d5_victor:{pola:{mat:'materiał',rog:'róg',klapa:'klapa',kiedy:'zawieszka: przyjęto'},
  cel:{mat:'szary skaj, klamra',rog:'naklejka inspekcji',klapa:'V.C. · 47',kiedy:'4:10'},uw:'Klamra zapięta na drugi ząbek. Spod klapy wystaje kartka dopisana innym tuszem.',
  re:{mat:/Szary skaj/i,rog:/naklejka inspekcji/i,klapa:/numer czterdzieści siedem/i,kiedy:/o 4:10/i},
  dop:{mat:'Szary skaj, klamra z przodu.',rog:'Na rogu naklejka inspekcji.',klapa:'Inicjały V.C. i numer czterdzieści siedem.',kiedy:'O 4:10. Zapisałem.'},
  bl:[{klapa:'V.C. · 74',uw:'Klamra nowa, jeszcze błyszczy.'},{klapa:'W.C. · 47',rog:'goły',uw:'W środku rozkład jazdy z zeszłego roku.'},{kiedy:'23:50',rog:'naklejka zdarta',uw:'Pachnie kawą. Ktoś oddał ją tu osobiście.'}]},
 d5_gus:{pola:{skora:'skóra',zap:'zapięcie',ksztalt:'kształt',srodek:'w środku'},
  cel:{skora:'brązowa, wytarta',zap:'zatrzask',ksztalt:'wygięty w łuk',srodek:'dwa dowody z tą samą twarzą (Pell i Ferro), zdjęcie dziewczynki'},
  mowi:{srodek:'prawo jazdy, 20 $, zdjęcie córki'},niezg:'srodek',odkrywa:['d5_dwa_dowody','d5_gotowka_400'],uw:'Za zdjęciem zwinięte banknoty: dwie stówki i pięćdziesiątka. Mówił o dwudziestu dolarach.',
  re:{skora:/brązowy, wytarty/i,zap:/na zatrzask/i,ksztalt:/wygiął się/i,srodek:/Prawo jazdy, dwadzieścia dolarów/i},
  dop:{skora:'Brązowy, wytarty.',zap:'Na zatrzask.',ksztalt:'Wygięty, jedenaście lat w tej samej kieszeni.',srodek:'Prawo jazdy, dwadzieścia dolarów, zdjęcie córki. Tylko tyle.'},
  bl:[{zap:'zamek błyskawiczny',ksztalt:'płaski',srodek:'prawo jazdy, 20 $, zdjęcie dziewczynki',uw:'Prawo jazdy na nazwisko Orlov.'},{ksztalt:'płaski, sztywny',srodek:'bilet miesięczny, paragon',uw:'Pachnie nową skórą.'},{skora:'czarna, gładka',srodek:'wizytówki, 5 $',uw:'Wizytówki zakładu pogrzebowego.'}]}
};
window.TRT={head:'Z rozmowy',none:'Na razie wiesz tylko, czego szukasz. Reszta padła w rozmowie albo nie padła.',
 ask:'? zapytaj gościa',ask_cost:'Wołasz przez ramię w stronę okienka. Każde pytanie zabiera gościowi kratkę cierpliwości.',waits:'czeka przy okienku',look:'obejrzyj',
 press:'Naciśnij · −1 cierpliwość',odm_hint:'Gość ma prawo odmówić. Możesz nacisnąć jeszcze raz, ale w magazynie będzie mniej cierpliwy',
 reg_h:'Regulamin okienka',reg:['Rzeczy nie pokazuje się przed wydaniem.','Dostaje ją ten, kto ją opisze.','Złe wydanie dyżurny pokrywa z pensji.'],take:'Na ladę',back:'Odłóż',other:'Nie tego szuka gość.',
 wrong:'„To nie moja rzecz.” Pomyłka idzie z Twojej kieszeni.',fine:15,wrong1:'„To nie moja rzecz.” Pierwsza pomyłka na koszt biura. Każda następna: 15 $ z Twojej kieszeni.',step:'Krok 5: obejrzyj podobne rzeczy i połóż na ladzie tę, która pasuje do rozmowy',card:'Oględziny',uw:'Rzuca się w oczy'};
window.TR={
 has:g=>!!window.TROPY[g.id],
 known(g,heard){const t=window.TROPY[g.id],o={};Object.keys(t.pola).forEach(k=>{o[k]=t.re[k].test(heard||'')});return o},
 traits(g,i){const t=window.TROPY[g.id];return i<0?t.cel:Object.assign({},t.cel,t.bl[i])},
 uw(g,i){const t=window.TROPY[g.id];return i<0?t.uw:t.bl[i].uw}
};

/* === KOLEJKA (STRATEGIA §4.3, I3): bezimienni z kolejki. Krótka sprawa bez historii: dwie cechy w jednym zdaniu,
   trzecią trzeba dopytać albo zaryzykować. Wchodzą tylko wtedy, gdy do 6:00 zostało dość czasu.
   Każda cecha: [krótko na karcie, jak to mówi gość]. */
window.TLUM={
 parasol:{gen:'parasola',pola:{a:'czasza',b:'rączka',c:'stan'},v:{a:[['czarna','z czarną czaszą'],['granatowa','z granatową czaszą'],['w kratę','w kratę']],b:[['drewniana','z drewnianą rączką'],['plastikowa','z plastikową rączką'],['bambusowa','z bambusową rączką']],c:[['jeden drut złamany','z jednym złamanym drutem'],['cały','cały, bez uszkodzeń'],['bez pokrowca','bez pokrowca']]},uw:['W fałdach bilet do zoo.','Pachnie tytoniem fajkowym.','Na rączce ślady zębów psa.','Na pasku wypisane inicjały.']},
 klucze:{gen:'kluczy',pola:{a:'breloczek',b:'plakietka',c:'kółko'},v:{a:[['kotwica','z breloczkiem-kotwicą'],['piłka','z breloczkiem-piłką'],['brak','bez breloczka']],b:[['czerwona','z czerwoną plakietką'],['numerek z szatni','z numerkiem z szatni'],['brak','bez żadnej plakietki']],c:[['stalowe','na stalowym kółku'],['mosiężne','na mosiężnym kółku'],['sznurek','na sznurku']]},uw:['Jeden klucz jest świeżo dorobiony.','Jeden klucz ma nadłamany ząbek.','Najmniejszy klucz pasuje chyba do skrzynki na listy.','Kółko rozgięte, ktoś coś z niego zdejmował.']},
 portfel:{gen:'portfela',pola:{a:'skóra',b:'zamknięcie',c:'w przegródce'},v:{a:[['brązowa','brązowy'],['czarna','czarny'],['bordowa','bordowy']],b:[['zatrzask','na zatrzask'],['suwak','na suwak'],['składany','składany na pół']],c:[['bilet miesięczny','z biletem miesięcznym w środku'],['zdjęcie psa','ze zdjęciem psa w środku'],['recepta','z receptą w środku']]},uw:['Ani jednego banknotu. Ktoś był pierwszy.','W środku karteczka: „mleko, chleb, zadzwonić do mamy”.','Monety z trzech krajów.','Zatłuszczony odcisk kciuka na przegródce.']},
 szalik:{gen:'szalika',pola:{a:'kolor',b:'materiał',c:'znak'},v:{a:[['szary','szary'],['w paski','w paski'],['bordowy','bordowy']],b:[['wełna','wełniany'],['akryl','akrylowy, gryzący'],['jedwab','jedwabny']],c:[['frędzle','z frędzlami'],['metka z imieniem','z metką z imieniem'],['dziura po molu','z dziurą po molu']]},uw:['Pachnie perfumami, drogimi.','W jednym końcu zawiązany supeł, na pamięć.','Włos, długi i rudy.','Ktoś cerował go dwa razy, innym kolorem.']},
 okulary:{gen:'okularów',pola:{a:'oprawka',b:'szkła',c:'etui'},v:{a:[['rogowa','w rogowej oprawce'],['druciana','w drucianej oprawce'],['czerwona','w czerwonej oprawce']],b:[['grube','z grubymi szkłami'],['przyciemniane','z przyciemnianymi szkłami'],['jedno pęknięte','z jednym pękniętym szkłem']],c:[['twarde','w twardym etui'],['miękkie','w miękkim etui'],['brak','bez etui']]},uw:['Zausznik sklejony plastrem.','Na szkle odcisk nosa.','W etui wizytówka optyka.','Noski wygięte, ktoś na nich usiadł.']},
 termos:{gen:'termosu',pola:{a:'kolor',b:'zakrętka',c:'stan'},v:{a:[['zielony','zielony'],['stalowy','stalowy'],['w kratę','w kratę']],b:[['z kubkiem','z zakrętką-kubkiem'],['korek','na korek'],['brak','bez zakrętki']],c:[['wgnieciony','wgnieciony z boku'],['jak nowy','prawie nowy'],['z naklejką','z naklejką z imieniem']]},uw:['W środku jeszcze ciepła herbata.','Pachnie rosołem.','Na dnie wydrapany numer zmiany.','Uszczelka zrobiona z gumki recepturki.']},
 ksiazka:{gen:'książki',pola:{a:'okładka',b:'zakładka',c:'w środku'},v:{a:[['twarda','w twardej okładce'],['miękka','w miękkiej okładce'],['w gazecie','obłożonej gazetą']],b:[['bilet','z biletem zamiast zakładki'],['wstążka','ze wstążką'],['zagięty róg','z zagiętym rogiem']],c:[['pieczątka biblioteki','z pieczątką biblioteki'],['dedykacja','z dedykacją na pierwszej stronie'],['notatki ołówkiem','z notatkami ołówkiem']]},uw:['Ostatnie strony nierozcięte.','Między kartkami zasuszona koniczyna.','Ktoś podkreślił jedno zdanie, na stronie 41.','Termin zwrotu minął w marcu.']},
 czapka_zimowa:{gen:'czapki',pola:{a:'kolor',b:'pompon',c:'znak'},v:{a:[['czerwona','czerwonej'],['granatowa','granatowej'],['szara','szarej']],b:[['z pomponem','z pomponem'],['bez','bez pompona'],['dwa pompony','z dwoma pomponami']],c:[['naszywka klubu','z naszywką klubu'],['imię na metce','z imieniem na metce'],['przetarta','przetartej na czubku']]},uw:['W środku kilka siwych włosów.','Pachnie dymem z ogniska.','Metka wycięta nożyczkami.','Za duża na dziecko, za mała na dorosłego.']}
};
window.TRT.tl_who='Ktoś z kolejki';window.TRT.tl_band='Ktoś z kolejki. Szybka sprawa, {p} $ jak znajdziesz. Do szóstej zostało {m} min.';
window.TRT.tl_go='Do magazynu';window.TRT.tl_ok=['Dziękuję. Dobrej nocy.','O, jest. Było już spisane na straty.','To ta. Dziękuję, lecę na tramwaj.','Mam. Dziękuję, że się chciało.'];
window.TRT.tl_bad='Nie mam całej nocy. Przyjdę kiedy indziej.';window.TRT.tl_say='Szukam {gen}: {a}, {b}. Reszty nie pamiętam. Tramwaj mam za kwadrans.';
window.TRT.tl_dop='{m}.';window.TRT.tl_pay=20;
/* losuje sprawę z kolejki: cel, dwóch bliźniaków (różnią się tym, czego gość NIE powiedział, i jedną z cech, które powiedział) */
window.TR.tlum=function(r,id){const keys=Object.keys(window.TLUM),sp=keys[(r()*keys.length)|0],t=window.TLUM[sp];const pick=()=>(r()*3)|0;const F=['a','b','c'];
 const ci={a:pick(),b:pick(),c:pick()};const hid=F[(r()*3)|0],said=F.filter(k=>k!==hid);const oth=(k)=>(ci[k]+1+((r()*2)|0))%3;
 const cel={},re={},dop={};F.forEach(k=>{cel[k]=t.v[k][ci[k]][0];re[k]=new RegExp(t.v[k][ci[k]][1].replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));dop[k]=t.v[k][ci[k]][1].replace(/^./,c=>c.toUpperCase())+'.'});
 const uw=t.uw.slice().sort(()=>r()-.5);
 const bl=[{[hid]:t.v[hid][oth(hid)][0],uw:uw[1]},{[said[0]]:t.v[said[0]][oth(said[0])][0],uw:uw[2]},{[hid]:t.v[hid][(ci[hid]+2)%3][0],[said[1]]:t.v[said[1]][oth(said[1])][0],uw:uw[3]}];
 if(bl[0][hid]===bl[2][hid])bl[0][hid]=t.v[hid][(ci[hid]+1)%3][0];
 window.TROPY[id]={pola:t.pola,cel,re,dop,bl,uw:uw[0]};
 return {sprite:sp,line:window.TRT.tl_say.replace('{gen}',t.gen).replace('{a}',t.v[said[0]][ci[said[0]]][1]).replace('{b}',t.v[said[1]][ci[said[1]]][1])}};

/* ITERACJA 3b (uwagi z grania): zasłonka, lupa, regulamin, odmowa gościa */
Object.assign(window.LANG,{hint_curtain:'Kliknij zasłonkę, żeby ją odsunąć.',step_knock:'Krok 2: kliknij zasłonkę w oknie',
 step_inspect:'Przesuwaj lupę po rzeczy. Kółko świeci mocniej, im bliżej śladu. Kliknij, gdy zrobi się pomarańczowe',
 insp_h:'Oględziny',insp_txt:'Coś tu nie pasuje do zwykłej zguby. Przesuwaj lupę po rzeczy i kliknij tam, gdzie kółko zapali się na pomarańczowo.',
 step_decide:'Krok 6: przeciągnij rzecz na jedno z pól po prawej albo po prostu kliknij pole',
 step_ask:'Krok 3: pytaj o to, czego nie widać z ulicy. Rzecz dostaje ten, kto ją opisze (regulamin wisi po lewej)'});
/* regulamin przy oknie: powód, dla którego dyżurny wypytuje (dni 1-3) */
window.TR.regul=function(layer,day){if(day>3||layer.querySelector('.regul'))return;const e=document.createElement('div');e.className='regul';
 e.innerHTML='<b>'+TRT.reg_h+'</b>'+TRT.reg.map((t,i)=>'<span><i>§'+(i+1)+'</i> '+t+'</span>').join('');layer.append(e)};
/* gość mówi NIE: tylko tam, gdzie pytanie ma pole "odmowa" (głosem postaci). Reguła ogólna wyleciała: trafiała w pytania niosące fabułę. */
window.TR.odmowa=function(g,x,sec,ST){if(ST.odmId!==g.id){ST.odmId=g.id;ST.odm=0}return x.odmowa||null};

/* I4: plan gry w 10 dni (włącza ?dni=10, wyłącza ?dni=25). od = ostatni dzień brany bez zmian; dalej lista wizyt na dzień, w kolejności. */
window.PLAN10={od:8,
 /* dzień 8: Vera z pudełkiem Sama zapowiada jego powrót; dzień 9: żetony, Elias przy szybie, Sam z kalką, wyznanie Very; dzień 10: imię i księga */
 dni:{8:['d8_lena_i_nora','d8_bree','d10_vera'],9:['d9_iris','d13_elias','d15_sam','d24_vera'],10:['d20_elias_sam','d25_ksiega']},
 /* z których starych dni brać kartki o świcie (bez tych, które przeczą przeniesionym scenom) */
 ev:{8:[8],9:[24],10:[]},
 tytul:{8:'Żółta kartka w podszewce',9:'Kartonik z numerem szafki',10:'Księga otwarta na twojej stronie'},final_h:'Koniec zmiany.',
 /* epilog dopasowany do 10 dni: bez dat i bez wątków, które się nie rozegrały */
 lang:{pr1_lab_end:'Słup przy zajezdni',
  end_zag_B:'Noah zamyka zgłoszenie we wtorek o szóstej rano. Evan drukuje nowe ulotki, Lena przestaje przychodzić. Jeśli Maya gdzieś jest, to tam, gdzie nikt nie robi drugiego egzemplarza.',
  end_skr_C:'Iris zdąża przed wyburzeniem: oryginały i kasetka wyjeżdżają razem z nią. Nora zostaje z kopią jednej wpłaty i czternastoma rodzinami. Kamienica o świcie, ekipa rozbiórki. W oknie Iris nie ma nikogo.',
  end_pop_B:'Sam zabiera termos i wychodzi, nie odwracając się. W protokole Victora zostaje niedobór. Co się naprawdę stało, wiedzą tylko ci, którzy stali wtedy przy szybie.',
  end_pop_C:'Sam, wystawiony Urzędowi, dostaje od Iris pusty bilet i znika po raz drugi. Koperta Eliasa zostaje w szufladzie, na jego nazwisko. Nikt po nią nie przychodzi.',
  ep_odebrany:'Kiedy ktoś podpisuje po Tobie, odchodzisz. Następca znajduje list pierwszego wieczoru, a przy nim stoi Vera i mówi prawdę zamiast milczeć.',
  ep_odebrany_m:'Kiedy ktoś podpisuje po Tobie, odchodzisz. Następca znajduje list pierwszego wieczoru, a przy nim stoi Vera i mówi prawdę zamiast milczeć.',
  ep_rotacja:'Peron o świcie, pusty bilet, nowa twarz w nowym mieście. Na słupie wisi świeży odcinek ogłoszenia: 0913.',
  ep_rotacja_lb:'Peron o świcie, pusty bilet, nowa twarz w nowym mieście. Na słupie wisi świeży odcinek ogłoszenia: 0913. Listu nikt nie znalazł.'}};
window.TRT.s_d10='Próba: gra w 10 dni (zwrot i finał w dniach 9-10)';
window.TRT.niezg='To ta rzecz, ale w środku jest co innego, niż mówił gość. Leży na ladzie. Ty decydujesz.';
