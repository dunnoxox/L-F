#!/usr/bin/env python3
"""Buduje data.js (DATA gości + EXTRA + WIECZOR + LANG pl) ze wszystkich koncept/okienko_rozmowy_v3*.md (schemat z prompty/dialogi_biblia_prompt.md).
Uruchom: python3 -I build_data.py"""
import re, json, glob, hashlib, os
# źródła z repo (../koncept); /mnt/project-files tylko jako zapas, gdy skrypt leży poza repo
KON=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','koncept')
if not glob.glob(os.path.join(KON,'okienko_rozmowy_v3*.md')):KON='/mnt/project-files/koncept'
SRC=sorted(glob.glob(os.path.join(KON,'okienko_rozmowy_v3*.md')))
# id -> (sprite, twarz, linia, nazwa_rzeczy, wnętrze(img,x,y) lub None, twarze rozmówców {kto:twarz})
META={
 'd1_thomas':('rekawiczka_skora','wdowiec','4','rękawiczka',('W1',.2,.72)),
 'd1_rosa':('koperta',None,'11','koperta',('W20',.51,.58)),
 'd2_jonah':('plecak','chlopak','11','plecak',None),
 'd2_hana':('futeral',None,'6','futerał na skrzypce',None),
 'd3_maz_i_siostra':('telefon','maz','11','telefon',None,{'maz':'maz','siostra':'siostra'}),
 'd3_dex':('budzik',None,'6','budzik',None),
 'd4_iris':('paczka_plotno','dama','6','paczka w płótnie',('W2',.66,.35)),
 'd4_gus':('portfel',None,'11','portfel',None),
 'd5_noah':('notes',None,'4','notes',None),
 'd5_victor':('teczka','inspektor','6','teczka kontroli',('W17',.66,.32)),
 'd6_ada':('krolik',None,'6','pluszowy królik',None),
 'd6_leo':('zegarek',None,'6','zegarek kieszonkowy',None),
 'd7_kit':('sluchawki',None,'11','słuchawki',None),
 'd7_evan':('klucze','maz','11','etui na klucze',('W5',.43,.31)),
 'd8_lena_i_nora':('torba_narzedzia','siostra','4','torba narzędziowa',('W6',.37,.6),{'siostra':'siostra','nora':None}),
 'd8_bree':('aparat',None,'4','aparat',None),
 'd9_iris':('piornik','dama','6','piórnik',('W7',.2,.58)),
 'd9_stahl':('kapelusz',None,'11','kapelusz',None),
 'd10_vera':('pudelko_blaszane',None,'11','pudełko',('W8',.45,.65)),
 'd11_maya':('futeral',None,'4','pokrowiec na okulary',None),
 'd11_grace':('torebka',None,'11','torebka',None),
 'd12_iris_nora':('torba_zakupy','dama','6','torba na zakupy',None,{'iris':'dama','nora':None,'ada':None}),
 'd12_linh':('pozytywka',None,'11','pozytywka',None),
 'd13_elias':('futeral',None,'4','futerał z oprawką',None),
 'd13_odile':('pudelko_blaszane',None,'6','pudełko po herbatnikach',None),
 'd14_noah':('organizer',None,'4','organizer',None),
 'd14_billie':('czapka_daszek',None,'11','kask',None),
 'd15_sam':('termos',None,'6','termos',('W13',.30,.2),{'sam':None,'vera':None}),
 'd15_pruitt':('parasol',None,'4','parasole',None),
 'd10_dario':('ksiazka',None,'4','zeszyt z przepisami',None)}
KEYW=[('rękawicz','rekawiczka_skora'),('koper','koperta'),('plecak','plecak'),('futera','futeral'),('telefon','telefon'),('budzik','budzik'),('paczk','paczka_plotno'),('portfel','portfel'),('notes','notes'),('teczk','teczka'),('królik','krolik'),('zegarek','zegarek'),('słuchaw','sluchawki'),('klucz','klucze'),('torb','torba_narzedzia'),('aparat','aparat'),('piórnik','piornik'),('kapelusz','kapelusz'),('pudełk','pudelko_blaszane'),('zeszyt','ksiazka'),('książ','ksiazka'),('parasol','parasol'),('walizk','walizka'),('termos','termos'),('okular','okulary'),('etui','etui_aparat'),('saszetk','saszetka'),('szalik','szalik'),('laska','laska'),('kasetk','pudelko_blaszane'),('torebk','torebka'),('wędk','wedka'),('latawiec','latawiec'),('harmonijk','harmonijka'),('rolk','lyzwy'),('gitar','futeral_gitara'),('dzwonek','pozytywka'),('smycz','pasek'),('legityma','legitymacja'),('fartuch','torba_zakupy'),('proteza','pudelko'),('hulajn','hulajnoga'),('powerbank','powerbank'),('kask','czapka_daszek')]
LINES=['4','6','11']
def auto(g):
    r=g['rzecz'].lower()
    sp=next((v for k,v in KEYW if k in r),'pudelko')
    ln=LINES[int(hashlib.md5(g['id'].encode()).hexdigest(),16)%3]
    return (sp,None,ln,g['rzecz'].split(',')[0][:30],None)
G=[];EXTRA={};WIECZOR={};EPI={}
for f in SRC:
    t=open(f,encoding='utf-8').read()
    for b in re.findall(r"```json\n(.*?)```",t,re.S):
        g=json.loads(b)
        if 'id' not in g:
            EXTRA.update(g.get('extra',{}));WIECZOR.update(g.get('wieczor',{}));EPI.update(g.get('epilogi_elias',{}));continue
        m=META.get(g['id']) or auto(g); i,fc,l,n,ins=m[:5]
        g.update(sprite=i,face=fc,face2=(m[5] if len(m)>5 else None),line=l,itemName=n,inside=dict(zip('img x y'.split(),ins)) if ins else None);G.append(g)
import os
PK=os.path.join(KON,'okienko_pokusy.json')
if os.path.exists(PK):
    pk=json.load(open(PK,encoding='utf-8'))
    for g in G:
        if g['id'] in pk and not any(d['akcja']==pk[g['id']]['akcja'] for d in g['decyzje']): g['decyzje'].append(pk[g['id']])
_PAT={'4':r'\bczw[oó]r(ce|ka|kę|ki|ką|ek)\b|\blinii? 4\b','6':r'\bsz[oó]st(ce|ka|kę|ki|ką)\b|\blinii? 6\b','11':r'\bjedenast(ce|ka|kę|ki|ką)\b|\blinii? 11\b'}
_RET=r'\b(wróci\w*|przyjecha\w*|przywiezi\w*)\s+(czwórką|szóstką|jedenastką)';_RM={'czwórką':'4','szóstką':'6','jedenastką':'11'}
def _said(g):
    t=g.get('wejscie','')+' '+' '.join(q['odpowiedz'] for tt in g.get('tury',[])[:1] for q in tt['pytania'] if q.get('mina')!='klamie')
    m=re.search(_RET,t,re.I)
    if m: return [_RM[m.group(2).lower()]]
    return [k for k,p in _PAT.items() if re.search(p,t,re.I)]
for g in G:
    sd=_said(g)
    if sd and str(g['line']) not in sd: g['line']=sd[0]
# SZLIF: rzecz z dialogu musi zgadzać się z obrazkiem i mieć pełną, krótką nazwę (bez ucinania na 30 znakach)
FIX={'d2_ines':(None,'parasol z kaczką'),'d3_dana':(None,'budzik'),'d5_gus':(None,'portfel'),'d10_dario':(None,'zeszyt grafiku'),
 'd11_maya':('okulary','pokrowiec na okulary'),'d13_elias':('okulary','futerał z oprawką'),'d13_tess':('skrzynka_narzedz','zielona skrzynka'),
 'd15_pruitt':('torba_zakupy','siatka z parasolami'),'d16_maya_lena':(None,'saszetka podróżna'),'d16_dorian':('pudelko','pudełko po kasecie'),
 'd17_evan':('etui_aparat','etui na aparat'),'d17_sylvia':('szachy','szachy bez króla'),'d18_iris_nora':(None,'teczka budowlana'),'d18_hugo':(None,'wędka'),
 'd19_ada_leo':('torba_listonosza','torba konduktorska'),'d19_kofi':(None,'powerbank'),'d19_ferro':(None,'teczka z dokumentami'),
 'd20_elias_sam':(None,'zegarek w etui'),'d20_tobias':(None,'kluczyki do vana'),'d21_maya_lena_priya':(None,'walizka ze wstążką'),
 'd21_mina':('torba_zakupy','koszyk z lekami'),'d22_noah':('teczka','sztywna koperta policyjna'),'d22_stahl':(None,'walizka z żółtym zamkiem'),
 'd22_jonah':(None,'koperta „K.M.”'),'d23_iris_nora_victor':('kuferek','kasetka na rachunki'),'d23_rosa':(None,'cienki portfel'),
 'd24_vera':(None,'teczka z kartonikiem'),'d24_leo':('torba_listonosza','torba konduktora'),'d24_thomas':(None,'koperta ze świadectwem'),
 'd25_sam_elias':(None,'etui na okulary'),'d25_ksiega':('album','księga wydań')}
for g in G:
    if g['id'] in FIX:
        sp,n=FIX[g['id']]
        if sp: g['sprite']=sp
        g['itemName']=n
AL={'kalka':'teczka','szafka':'kuferek','karta':'legitymacja','skrzynka':'skrzynka_narzedz'}
for v in EXTRA.values():
    v['sprite']=AL.get(v['sprite'],v['sprite'])
WIECZOR.setdefault('2',[]).append({'kto':'Biuro','tekst':'W piątek Urząd liczy skrzynie.'})
WIECZOR.setdefault('3',[]).append({'kto':'Okno naprzeciwko','tekst':'W oknie naprzeciwko stoi ktoś w kapeluszu. Nie rusza się, dopóki nie zgasisz lampy.'})
G.sort(key=lambda g:g['dzien'])
LANG={
 'title':'LOST & FRAUD','sub':'Nocna zmiana w biurze rzeczy znalezionych.','start':'Zacznij zmianę','settings':'Ustawienia','close':'Zamknij',
 'day':'Dzień','delivery':'Tramwaj zostawił skrzynki. Czasu starcza, żeby zajrzeć tylko do jednej rzeczy.','look':'Zajrzyj','skip':'Nie zaglądam, otwieram okienko',
 'line':'Linia','inspect_hint':'Przeszukaj rzecz. Kliknij to, co nie pasuje.','found':'Wiesz coś, czego nie powinieneś.','open':'Otwórz okienko','nothing':'Zwykła rzecz. Czasem parasol jest po prostu parasolem.',
 'knock':'Ktoś puka w szybę.','let_in':'Odsuń zasłonkę','know':'wiesz ze środka','turn':'Odwróć się do magazynu','search':'Znajdź: ','search_p':'Wybierz skrzynię wg linii, potem przekopuj. Kliknij rzecz, którą bierzesz.',
 'wrong':'To nie to.','wrong_line':'Tu tej rzeczy nie ma. Spróbuj inną linię.','decide':'Rzecz leży na ladzie. Przeciągnij ją albo wybierz.',
 'wydaj':'Wydaj: przez okienko','odmow':'Odmów: do skrzyni','zatrzymaj':'Zatrzymaj: na półkę','zadzwon':'Zadzwoń po dyżurnego','next':'Dalej',
 'evening':'Świt. Poczta na ladzie.','nomail':'Dziś nikt nie napisał.','week_h':'Sobota. Rozliczenie.','pay':'Wypłata','rent':'Czynsz','balance':'Zostaje',
 'drawer':'W szufladzie leży klucz bez zamka. Poprzednik nie zabrał wszystkiego.','again':'Zacznij od nowa','next_day':'Następny dzień','dollar':'$',
 'vol_master':'Głośność ogólna','vol_music':'Muzyka','vol_amb':'Ambient','vol_sfx':'Efekty','vol_voice':'Głosy','reduce':'Ogranicz błyski i wstrząsy','end':'Koniec dema: dwa tygodnie. Dalej dni 11–25.','storm':'Burza. Grom zrzucił skrzynie z półki: rzeczy leżą w innych skrzyniach niż zapisano.','up_h':'Ulepszenie biura (jedno na sobotę)','up_none':'Nic nie kupuję','up_lampa':'Wymień lampę (mruganie ustaje, w biurze robi się nudno)','up_drzwi':'Uszczelnij drzwi (deszcz za szybą ciszej)','up_regal':'Dołóż regał (mniej rzeczy w skrzyniach)','owned':'kupione','week2':'Następny tydzień','rent2':'Czynsz za tydzień'}

LANG.update({
 'end':'Koniec dostępnych dni. Dalej: dni, które jeszcze piszemy.',
 'end_zag_A':'Przychodzi pocztówka bez nadawcy z jednym słowem: „Dziękuję”. Evan dostaje suknię. To cała odpowiedź, jaką dostaje. Noah zamyka zgłoszenie.',
 'end_zag_B':'Noah potwierdza, że Maya jest bezpieczna, i zamyka zgłoszenie. Lena kładzie na ladzie jeden klucz, ten od mieszkania, które Maya zostawiła, i pyta, czy ktoś kiedyś po niego przyjdzie.',
 'end_zag_C':'Maya przychodzi już tylko po walizkę, bez rozmów, i wyjeżdża na własnych warunkach. Evan wynajmuje detektywa. Lena stoi przy okienku bez Mai i pyta, czy coś zostało po jej siostrze. Gracz wie, że zostało wszystko.',
 'end_skr_A':'Nora odbiera komplet. Iris podpisuje uznanie długu na 6 800 $ wobec lokatorów i z własnych oszczędności wypłaca Okoye ich 400 $. Reszta pójdzie ratami z czynszów. Grace Okoye w szpitalnym fartuchu kładzie na ladzie pączek w papierze: „Z dyżuru.”',
 'end_skr_A2':'Nora ma papiery, ale Iris kwestionuje ich autentyczność i sprawa idzie do sądu poza tą nocą. Grace Okoye kładzie na ladzie pączek w papierze: „Z dyżuru.” Nie wie jeszcze, czy zapłaci drugi raz.',
 'end_skr_B':'Victor zamyka obieg paczek w okienku i zajmuje rejestr przepływu: dowód, którędy wyszło 6 800 $. Nora dostaje protokół zamiast pieniędzy. Ludzie z żetonów są w aktach. Przychodzi zimny list z Urzędu, a w kolejnym wierszu nazwisko, które znasz z twarzy.',
 'end_skr_C':'Iris wyjeżdża z oryginałami i kasetką. 6 800 $ dawno jest u czterech ludzi z żetonów. Nora ma kopię jednej wpłaty, resztę będzie musiała odtworzyć, a Okoye zapłacą drugi raz. Kamienica o świcie, ekipa rozbiórki. Iris nie ma w oknie.',
 'end_pop_A':'Sam podpisuje zeznanie, Victor dopisuje własny podpis sprzed pięciu tygodni i wycofuje wpis obciążający Sama. Sam wychodzi. Elias siada na krześle poczekalni po raz pierwszy, odkąd pamięta, i czeka na tramwaj, jakby nigdzie się nie spieszył.',
 'end_pop_B':'Sam odbiera swoje rzeczy i wychodzi, nie odwracając się. W protokole zostaje niedobór. Wyjaśnienie krąży tylko między osobami, które zgodziły się mówić.',
 'end_pop_C':'Sam, wystawiony, dostaje od Iris pusty bilet bez numeru i znika. Zostawia u Very kopertę z 84 $ dla Eliasa. Elias odmawia jej przyjęcia i składa numerek w najciaśniejszy prostokąt, jaki widziałeś.',
 'ep_nowysam':'Victor zapisuje niedobór na twojej zmianie. Wypowiedzenie, rzeczy spakowane w pudełku. Następnego wieczoru przychodzi nowy pracownik i pyta o brakującą stronę.',
 'ep_nowysam_tear':'Victor zapisuje niedobór na twojej zmianie. Wypowiedzenie, rzeczy w pudełku. Wyrwana strona leży już gdzie indziej. Następnego wieczoru przychodzi nowy pracownik i pyta o brakującą stronę.',
 'ep_referent':'Victor dopisuje do akt Twoje nazwisko, {imie}, po kopiach, które sam podpisał. Umowa przedłużona, awans na starszego referenta, wypłata z premią. Zostajesz w okienku.',
 'ep_referent_tear':'Umowa przedłużona, awans na starszego referenta. W księdze brakuje twojej strony i nikt o nią nie pyta. Zostajesz w okienku jako następny przechowawca.',
 'ep_zostajesz':'Czynsz zapłacony, umowa przedłużona. Nikt tego nie świętuje.',
 'ep_zostajesz_tear':'Czynsz zapłacony, umowa przedłużona. W księdze brakuje twojej strony, tak jak po poprzedniku. Jesteś następnym przechowawcą.',
 'elias_A':'„Czy ktoś jeszcze czeka?”','elias_B':'„Do jutra.”','elias_C':'(milczy i kładzie numerek na ladzie)','elias_N':'„Czy Sam już był?” (do tego, kto siedzi w okienku jutro)'})
LANG.update({
 'delivery':'Dziś z tramwajów: {n} {rz}. Zanim ktoś zapuka, zdążysz obejrzeć jedną od środka.','stock':'W skrzyni','search':'Znajdź w magazynie','wrong':'To nie ta rzecz:','sorted':'ułożone alfabetycznie',
 'up_regal':'Dołóż regał (rzeczy ułożone alfabetycznie, skrzynie mieszczą więcej)','due':'do soboty','bills':'Rachunki i jedzenie','you_ask':'Pytasz:',
 'audit':'Victor policzył gotówkę w szufladzie i nie zgadza się z zapisami. Potrącenie: {f} $. Zapisał to na twojej zmianie.',
 'step_delivery':'Krok 1: kliknij rzecz, do której chcesz zajrzeć (albo „Nie zaglądam”)','step_inspect':'Szukaj śladów: kliknij w obrazie to, co wygląda nie na miejscu','step_knock':'Krok 2: kliknij „Odsuń zasłonkę”','step_ask':'Krok 3: kliknij jedno z trzech pytań na dole','step_turn':'Krok 4: kliknij „Odwróć się do magazynu”',
 'step_pile':'Krok 5: wybierz skrzynię, kliknij rzecz z opisu','step_decide':'Krok 6: przeciągnij rzecz na szybę albo kliknij jedną z opcji po prawej',
 'tut_h':'Jak grać','tut_ok':'Zaczynam zmianę','tut_l':['Tramwaje zostawiają rzeczy w skrzyniach. Każda linia ma swoją skrzynię.','Możesz zajrzeć do jednej rzeczy od środka: kliknij ją, potem klikaj w obraz, aż coś nie będzie pasować.','Kliknij „Odsuń zasłonkę”: ktoś przyszedł po swoją rzecz.','Zadaj trzy pytania, klikając je. Słuchaj uważnie: ktoś może kłamać.','Odwróć się do magazynu, wybierz skrzynię i kliknij właściwą rzecz według opisu na górze.','Przeciągnij rzecz na szybę, żeby ją wydać, albo kliknij inną opcję. Każda ma cenę.']})
LANG.update({
 'dt':['Rękawiczki na grobie','Pierścionek w plecaku, szalik na wieszaku','Dwie osoby, jeden telefon','Koperta na ladzie, nikt jej nie dotyka','Gazeta z twarzą Mai na ladzie','Królik na ladzie, bilet na mokrym papierze','Klucz, który otwiera nieznane drzwi','Żółta kartka w podszewce','Pięć żetonów w piórniku','Pudełko po człowieku, który tu nie wraca','Ktoś opisuje własne okulary, zanim je zobaczy','Dwie kasetki, jedna torba na zakupy','Oprawka, która wróciła z cudzego wozu','Notes równo z krawędzią lady','Klucz i szuflada','Dwie siostry, jedno okienko','List, który nie ma adresata','Trzysta dolarów na ladzie','Dziecko, które widziało za dużo','Dwóch mężczyzn i koperta z 84 dolarami','Dwie walizki, jedna jedzie na ślub','Sztywna koperta i szary kapelusz','Trzy osoby po jedną kasetkę','Kartonik z numerem szafki','Księga otwarta na twojej stronie'],
 'kartka_h':'Kartka przyklejona do skrzynki','notes_b':'Notatnik','notes_h':'Notatnik: kartki znalezione w rzeczach',
 'pr1_lab':'Słup przy zajezdni · 22:50','pr1_txt':'POSZUKIWANY DYŻURNY. Nocne biuro rzeczy znalezionych, zmiana 23:40–6:00. 40 $ za wizytę. Pokój służbowy w cenie. Zgłosić się do Zarządu Nieruchomości Cooper.','pr1_strip':'Oderwij pasek z numerem','pr1_num':'Na pasku jest numer. Deszcz rozlał go tak, że nie da się go odczytać.','pr1_next':'Idź do biura','pr1_step':'Kliknij „Oderwij pasek”',
 'pr2_lab':'Umowa o pracę nocną · Zarząd Nieruchomości Cooper','pr2_rows':['Stanowisko: dyżurny','Imię i nazwisko: ______________','Miejsce pracy: biuro rzeczy znalezionych, pokój służbowy przy Cooper Street 9','Wynagrodzenie: 40 $ za wizytę','Podpis zarządcy: nieczytelny'],'pr2_btn':'Podpisz i zacznij zmianę','pr2_step':'Kliknij, żeby zacząć pierwszą noc',
 'name_h':'Jak cię zapisać?','name_s':'Wpisz cokolwiek. To imię wróci w księdze.','name_p':'imię','name_ok':'Zapisz','name_def':'dyżurny',
 'ledger_h':'Księga wydań leży otwarta. Ostatnia linia jest pusta: 0809.','ledger_s':'Co robisz z księgą?','ledger_write':'Wpisz siebie: {n}','ledger_tear':'Wyrwij stronę','ledger_letter':'Zostaw list dla następcy','ledger_close':'Zamknij księgę','ledger_b':'Księga',
 'gest_wpisz':'W linii 0809 stoi teraz twoje imię. Następny dyżurny zacznie od niego.','gest_wyrwij':'Strona leży wyrwana, tak jak po poprzedniku. Ludzie, których chroniłeś, nie mają już śladu w papierze, a ty nie masz obrony.','gest_list':'Zostawiasz list w szufladzie. Następny dyżurny znajdzie go pierwszej nocy.','gest_zamknij':'Zamykasz księgę. Nikt nie wie, czy to była decyzja.'})
LANG.update({'audit_warn':'W notesie Victora pierwsza rozbieżność tygodnia. Tym razem tylko upomnienie, bez kary. Następnym razem zapisze kwotę.','bk_h':'Księga przyjęć','bk_btn':'Księga przyjęć','bk_note':'Wpisy robi konduktor przy dostawie. Znajdź opis, który pasuje do słów gościa, i szukaj rzeczy z tym numerem.','tomorrow':'Jutro','cont':'Kontynuuj: dzień {d}','new_conf':'Zacząć od nowa? Zapis z dnia {d} zostanie skasowany.','new_yes':'Nadpisz zapis','new_no':'Zostaw zapis','b_new':'NOWY','b_back':'WRACA {n}/{m}','b_last':'OSTATNI RAZ','notes_none':'Jeszcze nic tu nie wpisałeś. Notatki S.H. znajdziesz w rzeczach.','interest':'Marlow dolicza odsetki od długu: ${i}.','evict_h':'Eksmisja','evict_txt':'Dług urósł do ${d}. Marlow zamyka drzwi na klucz i oddaje Ci karton z rzeczami. Ktoś inny usiądzie za szybą.','th_bar':'Nitki (szare to te, których zabrakło)','th_sam':'Sam','th_maya':'Maya','th_skr2':'Skrytka','th_notes':'Notatki','th_list':'List','ep_odebrany':'W poniedziałek 13.09, gdy ktoś podpisał po Tobie, odchodzisz. Następca dostaje list, a przy nim stoi Vera i mówi prawdę zamiast milczeć. Elias, odchodząc, pyta: „Jak się nazywasz?” Mówisz. „Dziękuję, {imie}. Jutro.”','ep_odebrany_m':'W poniedziałek 13.09, gdy ktoś podpisał po Tobie, odchodzisz. Następca dostaje list, a przy nim stoi Vera i mówi prawdę zamiast milczeć. Elias, odchodząc, pyta: „Jak się nazywasz?” Mówisz. „Dziękuję, {imie}. Jutro.” Z poranną pocztą przychodzi kartka od Mai: „Odebrane.”','ep_rotacja':'Poniedziałek 13.09, peron 6:10, pusty bilet, nowa twarz. Na słupie wisi nowy odcinek ogłoszenia: 0913.','ep_rotacja_lb':'Poniedziałek 13.09, peron 6:10, pusty bilet, nowa twarz. Na słupie wisi nowy odcinek ogłoszenia: 0913. Listu nikt nie znalazł do poniedziałku.','ep_wyrwana':'Wychodzisz wolny. Kanał Skrytki umiera, ludzie zostają bez drogi, a ogłoszenie przestaje się pojawiać. Na słupie nie ma już kartki.','w_radio':'Radio','w_glass':'Przetrzyj szybę','w_tea':'Herbata','w_phone':'Odbierz telefon','w_cat':'Na parapecie siedzi mokry kot. Patrzy na lampę.','w_cat2':'Kot mruży oczy. Chyba tu zostanie do rana.','w_radio_l':['Radio: „…linia szósta kursuje ze zmianami, motorniczowie proszą o cierpliwość…”','Radio: „…policja prosi o kontakt świadków zdarzenia przy Cooper Street…”','Radio: urwany fragment starej piosenki, potem szum.','Radio: „…deszcz utrzyma się do rana, temperatura jedenaście stopni…”','Radio: „…jeśli znaleźliście Państwo cudzą rzecz, oddajcie ją. Albo wpiszcie do księgi.”','Radio: ktoś czyta wyniki loterii. Żaden numer Ci nic nie mówi.'],'w_glass_l':['Naprzeciwko świeci jedno okno. Ktoś też nie śpi.','Na ulicy nikogo. Latarnia rzuca pomarańczową plamę na kałużę.','Tramwaj przejeżdża pusty, z zapalonymi światłami.','Za szybą mignął cień parasola, który się nie zatrzymał.'],'w_tea':'Herbata','w_tea_l':['Herbata jest gorzka, ale gorąca. To wystarczy.','Przy kubku leży ktoś cudzy ślad po ustach. Stary. Wycierasz.','Myślisz: ile osób siedziało przy tej ladzie, zanim Ty?','Para unosi się nad kubkiem i znika w świetle lampy.'],'w_phone_l':['Dzwoniła kobieta: „Zgubiłam parasol w czwórce, niebieski.” Notujesz.','Dzwonił chłopak: „Czy znalazło się coś z dwunastki?” Odkładasz słuchawkę z wrażeniem, że się rozłączył za szybko.','Ktoś oddycha w słuchawce i się rozłącza.'],'leave_h':'Gość się zniecierpliwił','leave_txt':'{g} ma dość czekania i wychodzi w deszcz. Tym razem bez napiwku. Rzecz zostaje w skrzyni.','w_start':'Cisza. Deszcz. Lampa szumi. Czekasz, aż ktoś zadzwoni przy drzwiach.','w_step':'Czekasz na gościa. Zajmij się czymś: poukładaj magazyn.','w_step1':'Nikogo nie ma. Zanim ktoś przyjdzie, poukładaj magazyn (przycisk na dole).','w_sort':'Poukładaj magazyn','w_notes':'Notatnik','w_sort_h':'Zawieruszone rzeczy','w_sort_txt':'Te rzeczy leżą w złych skrzyniach. Na metce jest numer linii, którym przyjechały. Odłóż je na właściwą linię.','w_sort_ok':'Wszystko leży tam, gdzie powinno. Można posłuchać deszczu.','w_tag':'metka: linia','w_bell':'Dzyń-dzyń. Ktoś wszedł przez drzwi.','w_e1':'Za ścianą ktoś idzie korytarzem. Kroki cichną.','w_e2':'Obcasy na schodach. Zatrzymały się, potem poszły dalej.','w_e3':'W sąsiednim biurze dzwoni telefon. Nikt nie odbiera.','w_e4':'Lampa mruga i wraca do równego szumu.','w_e5':'Gdzieś daleko grzmi. Szyba drży.','w_e6':'Ktoś przesunął szufladę w skrytce obok. A może to deszcz.',**{'epi_'+k:v for k,v in EPI.items()},'th_kopie':'Kopie do Urzędu','kopie_l':'Odnaleziono: ','kopie_0':'Nikt nie został odnaleziony.','kopie_txt':'Kopie wysłane do Urzędu: {n}. Klienci odnalezieni: {m}. Każdy wpis i każde pokwitowanie w dwóch egzemplarzach czytał ktoś, kto zapłacił za czytanie.','ledger_h':'Księga wydań leży otwarta na twojej ostatniej stronie.','ledger_none':'Nic nie ruszam','ledger_fix':'Dopisz sprostowanie','ledger_tear':'Wyrwij stronę','urzad':'Urząd','ludzie':'Ludzie','debt':'Tydzień zamknięty z długiem.','final_h':'Koniec zmiany. Dzień 25.','th_zag':'Zaginiona','th_skr':'Skrytka','th_pop':'Poprzednik','you':'Ty','elias':'Ostatnie pytanie Eliasa','eve_note':'Poza okienkiem','soon':'Dalej: dni, które jeszcze piszemy.'})
# SZLIF: rata Marlowa, kadry finału, gest księgi
LANG.update({'mar_paid':'Rata dla Marlowa: 60 $. Zostało {r} $.','mar_done':'Ostatnia rata dla Marlowa: 60 $. Dług spłacony. Kuba kiwa głową i pierwszy raz nic nie mówi.','mar_wait':'Na ratę dla Marlowa nie starczyło. Kuba mówi, że poczeka do następnej soboty. Do oddania: {r} $.',
 'th_dlug':'Dług','end_dlug_ok':'Marlow nie ma już do Ciebie nic. Pokój służbowy jest tylko pokojem.','end_dlug_left':'U Marlowa zostało {r} $. On wie, gdzie jest Twój pokój. Nazwiska dalej nie zna.',
 'bg_tear':'Strona 0809 zostaje Ci w ręku.','bg_letter':'List wsuwa się do szuflady, tej, która zacina się po lewej.','bg_close':'Okładka opada. Linia 0809 zostaje pusta.',
 'fin_next':'Kliknij, żeby odwrócić następną kartę','pr1_lab_end':'Słup przy zajezdni · poniedziałek 13.09','end_noposter':'Na słupie przy zajezdni nie ma już kartki.',
 'share_h':'Twoja zmiana','endname_odebrany':'Zakończenie: Odebrany','endname_wyrwana':'Zakończenie: Wyrwana strona','endname_rotacja':'Zakończenie: Rotacja','endname_nowysam':'Zakończenie: Nowy Sam','endname_referent':'Zakończenie: Referent','endname_zostajesz':'Zakończenie: Zostajesz'})
open('data.js','w',encoding='utf-8').write('window.DATA='+json.dumps(G,ensure_ascii=False)+';window.EXTRA='+json.dumps(EXTRA,ensure_ascii=False)+';window.WIECZOR='+json.dumps(WIECZOR,ensure_ascii=False)+';window.LANG='+json.dumps(LANG,ensure_ascii=False)+';')
print(len(G),'gości',len(EXTRA),'extra',len(WIECZOR),'wieczory')
