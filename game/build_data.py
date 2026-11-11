#!/usr/bin/env python3
"""Buduje data.js (DATA gości + EXTRA + WIECZOR + LANG pl) ze wszystkich koncept/okienko_rozmowy_v3*.md (schemat z prompty/dialogi_biblia_prompt.md).
Uruchom: python3 -I build_data.py"""
import re, json, glob, hashlib
SRC=sorted(glob.glob('/mnt/project-files/koncept/okienko_rozmowy_v3*.md'))
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
G=[];EXTRA={};WIECZOR={}
for f in SRC:
    t=open(f,encoding='utf-8').read()
    for b in re.findall(r"```json\n(.*?)```",t,re.S):
        g=json.loads(b)
        if 'id' not in g:
            EXTRA.update(g.get('extra',{}));WIECZOR.update(g.get('wieczor',{}));continue
        m=META.get(g['id']) or auto(g); i,fc,l,n,ins=m[:5]
        g.update(sprite=i,face=fc,face2=(m[5] if len(m)>5 else None),line=l,itemName=n,inside=dict(zip('img x y'.split(),ins)) if ins else None);G.append(g)
import os
PK='/mnt/project-files/koncept/okienko_pokusy.json'
if os.path.exists(PK):
    pk=json.load(open(PK,encoding='utf-8'))
    for g in G:
        if g['id'] in pk and not any(d['akcja']==pk[g['id']]['akcja'] for d in g['decyzje']): g['decyzje'].append(pk[g['id']])
G.sort(key=lambda g:g['dzien'])
LANG={
 'title':'OKIENKO','sub':'Nocna zmiana w biurze rzeczy znalezionych. Tydzień pierwszy.','start':'Zacznij zmianę','settings':'Ustawienia','close':'Zamknij',
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
 'end_skr_A':'Nora odbiera komplet. Okoye nie płacą drugi raz, a Iris podpisuje rozliczenie i oddaje 6 800 $. Grace Okoye w szpitalnym fartuchu kładzie na ladzie pączek w papierze: „Z dyżuru.”',
 'end_skr_A2':'Nora ma papiery, ale Iris kwestionuje ich autentyczność i sprawa idzie do sądu poza tą nocą. Grace Okoye kładzie na ladzie pączek w papierze: „Z dyżuru.” Nie wie jeszcze, czy zapłaci drugi raz.',
 'end_skr_B':'Victor zamyka obieg paczek, przyjmuje oryginały do audytu i zajmuje 6 800 $ jako dowód. Ludzie z żetonów są w aktach. Przychodzi zimny list z Urzędu, a w kolejnym wierszu nazwisko, które znasz z twarzy.',
 'end_skr_C':'Iris zabiera paczkę, oryginały i 6 800 $. Nora ma kopię jednej wpłaty, resztę będzie musiała odtworzyć. Kamienica o świcie, ekipa rozbiórki. Iris nie ma jej w oknie.',
 'end_pop_A':'Sam podpisuje zeznanie, Victor dopisuje własny podpis sprzed pięciu tygodni i wycofuje wpis obciążający Sama. Sam wychodzi. Elias siada na krześle poczekalni po raz pierwszy, odkąd pamięta, i czeka na tramwaj, jakby nigdzie się nie spieszył.',
 'end_pop_B':'Sam odbiera swoje rzeczy i wychodzi, nie odwracając się. W protokole zostaje niedobór. Wyjaśnienie krąży tylko między osobami, które zgodziły się mówić.',
 'end_pop_C':'Sam, wystawiony, dostaje od Iris pusty bilet bez numeru i znika. Zostawia u Very kopertę z 85 $ dla Eliasa. Elias odmawia jej przyjęcia i składa numerek w najciaśniejszy prostokąt, jaki widziałeś.',
 'ep_nowysam':'Victor zapisuje niedobór na twojej zmianie. Wypowiedzenie, rzeczy spakowane w pudełku. Następnego wieczoru przychodzi nowy pracownik i pyta o brakującą stronę.',
 'ep_nowysam_tear':'Victor zapisuje niedobór na twojej zmianie. Wypowiedzenie, rzeczy w pudełku. Wyrwana strona leży już gdzie indziej. Następnego wieczoru przychodzi nowy pracownik i pyta o brakującą stronę.',
 'ep_referent':'Umowa przedłużona, awans na starszego referenta, wypłata z premią. Zostajesz w okienku.',
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
 'dt':['Rękawiczki na grobie','Pierścionek w plecaku, szalik na wieszaku','Dwie osoby, jeden telefon','Koperta na ladzie, nikt jej nie dotyka','Gazeta z twarzą Mai na ladzie','Królik na ladzie, bilet na mokrym papierze','Klucz, który otwiera nieznane drzwi','Żółta kartka w podszewce','Pięć żetonów w piórniku','Pudełko po człowieku, który tu nie wraca','Ktoś opisuje własne okulary, zanim je zobaczy','Dwie kasetki, jedna torba na zakupy','Oprawka, która wróciła z cudzego wozu','Notes równo z krawędzią lady','Klucz i szuflada','Dwie siostry, jedno okienko','List, który nie ma adresata','Trzysta dolarów na ladzie','Dziecko, które widziało za dużo','Dwóch mężczyzn i koperta z 85 dolarami','Dwie walizki, jedna jedzie na ślub','Sztywna koperta i szary kapelusz','Trzy osoby po jedną kasetkę','Kartonik z numerem szafki','Księga otwarta na twojej stronie'],
 'kartka_h':'Kartka przyklejona do skrzynki','notes_b':'Notatnik','notes_h':'Notatnik: kartki znalezione w rzeczach',
 'pr1_lab':'Słup przy zajezdni · 22:50','pr1_txt':'POSZUKIWANY DYŻURNY. Nocne biuro rzeczy znalezionych, zmiana 23:40–6:00. 40 $ za wizytę. Pokój służbowy w cenie. Zgłosić się do Zarządu Nieruchomości Cooper.','pr1_strip':'Oderwij pasek z numerem','pr1_num':'Na pasku jest numer. Deszcz rozlał go tak, że nie da się go odczytać.','pr1_next':'Idź do biura','pr1_step':'Kliknij „Oderwij pasek”',
 'pr2_lab':'Umowa o pracę nocną · Zarząd Nieruchomości Cooper','pr2_rows':['Stanowisko: dyżurny','Imię i nazwisko: ______________','Miejsce pracy: biuro rzeczy znalezionych, pokój służbowy przy Cooper Street 9','Wynagrodzenie: 40 $ za wizytę','Podpis zarządcy: nieczytelny'],'pr2_btn':'Podpisz i zacznij zmianę','pr2_step':'Kliknij, żeby zacząć pierwszą noc',
 'name_h':'Jak cię zapisać?','name_s':'Wpisz cokolwiek. To imię wróci w księdze.','name_p':'imię','name_ok':'Zapisz','name_def':'dyżurny',
 'ledger_h':'Księga wydań leży otwarta. Ostatnia linia jest pusta: 0809.','ledger_s':'Co robisz z księgą?','ledger_write':'Wpisz siebie: {n}','ledger_tear':'Wyrwij stronę','ledger_letter':'Zostaw list dla następcy','ledger_close':'Zamknij księgę','ledger_b':'Księga',
 'gest_wpisz':'W linii 0809 stoi teraz twoje imię. Następny dyżurny zacznie od niego.','gest_wyrwij':'Strona leży wyrwana, tak jak po poprzedniku. Ludzie, których chroniłeś, nie mają już śladu w papierze, a ty nie masz obrony.','gest_list':'Zostawiasz list w szufladzie. Następny dyżurny znajdzie go pierwszej nocy.','gest_zamknij':'Zamykasz księgę. Nikt nie wie, czy to była decyzja.'})
LANG.update({'ledger_h':'Księga wydań leży otwarta na twojej ostatniej stronie.','ledger_none':'Nic nie ruszam','ledger_fix':'Dopisz sprostowanie','ledger_tear':'Wyrwij stronę','urzad':'Urząd','ludzie':'Ludzie','debt':'Tydzień zamknięty z długiem.','final_h':'Koniec zmiany. Dzień 25.','th_zag':'Zaginiona','th_skr':'Skrytka','th_pop':'Poprzednik','you':'Ty','elias':'Ostatnie pytanie Eliasa','eve_note':'Poza okienkiem','soon':'Dalej: dni, które jeszcze piszemy.'})
open('data.js','w',encoding='utf-8').write('window.DATA='+json.dumps(G,ensure_ascii=False)+';window.EXTRA='+json.dumps(EXTRA,ensure_ascii=False)+';window.WIECZOR='+json.dumps(WIECZOR,ensure_ascii=False)+';window.LANG='+json.dumps(LANG,ensure_ascii=False)+';')
print(len(G),'gości',len(EXTRA),'extra',len(WIECZOR),'wieczory')
