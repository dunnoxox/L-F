const {G,GM,DAYS,XT,EV}=require('./sim.js');const fs=require('fs');
const out=[];const P=(...a)=>{out.push(a.join(' '));console.log(a.join(' '))};
// 1. kolejność w dniu: producent flagi przed konsumentem
P('## Kolejność gości w dniu dla warunków wejscie_jesli / pytań zależnych od flag decyzji tego samego dnia');
G.forEach(g=>{const idx=DAYS[g.dzien].indexOf(g.id);const keys=[...Object.keys(g.wejscie_jesli||{})];
 g.tury.forEach(t=>t.pytania.forEach(q=>{if(q.wymaga)String(q.wymaga).split('|').forEach(k=>keys.push(k))}));
 keys.forEach(k=>{const m=k.match(/^(d\d+_[a-z_0-9]+):/);if(m&&GM[m[1]]&&GM[m[1]].dzien===g.dzien){const pi=DAYS[g.dzien].indexOf(m[1]);P(pi<idx?'ok':'BŁĄD_KOLEJNOŚĆ',g.id,'(poz',idx+')','zależy od',k,'(poz',pi+')')}})});
// 2. akcje bez wpływu na liczniki
function eff(a){let u=0,l=0,b=0;if(/^przywlaszcz/.test(a)){return 'bez+uP-lud'}
 if(/cicho|bez_wpisu|koperta/.test(a))return 'bez';if(/^wyloz/.test(a))return 'lud+';if(/^wydaj/.test(a))return 'lud+';if(/^odmow/.test(a))return 'urz+lud-';
 if(/zatrzymaj|do_kontroli|victor|oficjalny|archiwum|uzgodnij|komplet|dolacz|rezerwacja|zglos|depozyt|zetony|pokwituj|sprawdz|zabezpiecz|zasloń|zaslon/.test(a))return 'urz+';return 'ZERO'}
const zero=[],tot=G.reduce((n,g)=>n+g.decyzje.length,0);G.forEach(g=>g.decyzje.forEach(d=>{if(eff(d.akcja)==='ZERO')zero.push(g.dzien+':'+g.id+'/'+d.akcja+(d.kasa?'('+(d.kasa>0?'+':'')+d.kasa+'$)':''))}));
P('\n## Decyzje, które NIE ruszają żadnego licznika (heurystyka po nazwie akcji):',zero.length,'z',tot);P(zero.join('\n'));
// wpływ wg dnia
const perDay={};G.forEach(g=>g.decyzje.forEach(d=>{const e=eff(d.akcja);perDay[g.dzien]=perDay[g.dzien]||{};perDay[g.dzien][e]=(perDay[g.dzien][e]||0)+1}));P('\nWpływ na liczniki wg dnia:',JSON.stringify(perDay));
// 3. kasa
const kas=[];G.forEach(g=>g.decyzje.forEach(d=>{if(d.kasa)kas.push({d:g.dzien,g:g.id,a:d.akcja,k:d.kasa})}));
P('\n## Decyzje z kasą:',kas.length,'plus:',kas.filter(x=>x.k>0).length,'suma +',kas.filter(x=>x.k>0).reduce((s,x)=>s+x.k,0),'minus:',kas.filter(x=>x.k<0).length,'suma',kas.filter(x=>x.k<0).reduce((s,x)=>s+x.k,0));
kas.forEach(x=>P('  d'+x.d,x.g,x.a,x.k));
const perD={};G.forEach(g=>{perD[g.dzien]=(perD[g.dzien]||0)+1});
P('Gości na dzień:',JSON.stringify(perD));
// 4. echa nigdy nie pokazane
const late=[];G.forEach(g=>g.decyzje.forEach(d=>{const due=g.dzien+(d.echo.za_dni||1);if(due>25)late.push(g.dzien+':'+g.id+'/'+d.akcja+' za_dni='+d.echo.za_dni+' -> dzień '+due)}));P('\n## Echa po dniu 25 (nigdy nie pokazane):',late.length);P(late.join('\n'));
// 5. wieczorne karty: czy są dla wszystkich dni
P('\nWIECZOR dni:',Object.keys(EV).join(','),'| brak kart dla dni:',[...Array(25)].map((_,i)=>i+1).filter(d=>!EV[d]).join(','));
P('EXTRA dni:',Object.keys(XT).join(','));
fs.writeFileSync('a2_out.txt',out.join('\n'));
