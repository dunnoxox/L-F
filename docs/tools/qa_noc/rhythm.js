const {G,GM,DAYS,XT,EV}=require('./sim.js');
const avg=a=>a.reduce((s,x)=>s+x,0)/a.length;
let tot=0,rows=[];const perDay={};
G.forEach(g=>{const ent=g.wejscie.length;const ans=g.tury.map(t=>avg(t.pytania.filter(q=>!q.wymaga).map(q=>q.odpowiedz.length+q.tekst.length)));
 const dec=avg(g.decyzje.map(d=>d.reakcja.length+d.zysk.length+d.strata.length));const labels=g.decyzje.reduce((s,d)=>s+(d.etykieta||d.akcja).length,0);
 const ch=ent+ans.reduce((s,x)=>s+x,0)+dec+labels;rows.push({id:g.id,d:g.dzien,ch:Math.round(ch),opts:g.decyzje.length,maxAns:Math.max(...g.tury.flatMap(t=>t.pytania.map(q=>q.odpowiedz.length))),ent});
 perDay[g.dzien]=(perDay[g.dzien]||0)+ch});
const CPM=1000; // znaków/min czytania po polsku (~170 wpm)
const OVER=[]; // stałe czasy na gościa [s]: pukanie 4 + 3 wybory*3 + szukanie 35 + przeciągnięcie 8 + klik dalej 3
const FIX=4+9+35+8+3;
let sum=0;Object.keys(perDay).forEach(d=>{const n=DAYS[d].length;const ev=(EV[d]||[]).reduce((s,x)=>s+x.tekst.length,0);const x=XT[d]?XT[d].wnetrze&&XT[d].wnetrze[0].co_widac.length:0;
 const min=(perDay[d]+ev+(x||0))/CPM+ (n*FIX+25+8)/60; // 25s dostawa+inspekcja, 8s wieczór
 perDay[d]={goście:n,znaki:Math.round(perDay[d]),eventZnaki:ev,minuty:+min.toFixed(1)};sum+=min});
console.log('DZIEŃ  goście  znaków_do_przeczytania  min(est.)');Object.keys(perDay).forEach(d=>console.log(d.padStart(3),perDay[d].goście,String(perDay[d].znaki).padStart(6),String(perDay[d].eventZnaki).padStart(5),perDay[d].minuty));
const sat=5*1.2;console.log('Suma dni:',sum.toFixed(0),'min + 5 sobót ~',sat,'min + prolog 2 min => ~',(sum+sat+2).toFixed(0),'min (',((sum+sat+2)/60).toFixed(1),'h) przy 1000 znaków/min i 35 s szukania');
rows.sort((a,b)=>b.ch-a.ch);console.log('\nNajdłuższe wizyty (znaki do przeczytania, śr. ścieżka):');rows.slice(0,8).forEach(r=>console.log(' ',r.id,r.d,r.ch,'zn, wejście',r.ent,'zn, najdłuższa odp.',r.maxAns));
console.log('Najkrótsze:');rows.slice(-6).forEach(r=>console.log(' ',r.id,r.d,r.ch));
const longAns=[];G.forEach(g=>g.tury.forEach((t,ti)=>t.pytania.forEach(q=>{if(q.odpowiedz.length>330)longAns.push([g.id,ti+1,q.odpowiedz.length])})));console.log('\nOdpowiedzi > 330 znaków (typing 16 ms/znak =',(330*.016).toFixed(1),'s):',longAns.length);longAns.slice(0,12).forEach(x=>console.log('  ',x.join(' ')));
const ent=G.filter(g=>g.wejscie.length>330);console.log('Wejścia > 330 zn:',ent.length,ent.map(g=>g.id+':'+g.wejscie.length).join(', '));
// notatki S.H.
const notes=[];G.forEach(g=>(g.wnetrze||[]).slice(0,1).forEach(w=>{if(/S\.H\./.test(w.co_widac))notes.push('d'+g.dzien+':'+w.sekret_id)}));Object.keys(XT).forEach(d=>(XT[d].wnetrze||[]).slice(0,1).forEach(w=>{if(/S\.H\./.test(w.co_widac))notes.push('d'+d+'x:'+w.sekret_id)}));console.log('\nNotatki S.H. (liczone przez /S\\.H\\./ w wnetrze[0]):',notes.length,notes.join(', '));
// ile dni ma więcej niż jedną rzecz z sekretem (a inspekcja = 1/dzień)
const clash=[];Object.keys(DAYS).forEach(d=>{const its=DAYS[d].map(id=>GM[id]).concat(XT[d]?[XT[d]]:[]).filter(g=>(g.wnetrze||[])[0]);if(its.length>1)clash.push('d'+d+':'+its.length)});console.log('Dni z >1 rzeczą z sekretem (gracz zajrzy do jednej):',clash.join(', '));
let noSec=G.filter(g=>!(g.wnetrze||[]).length).map(g=>g.id);console.log('Goście bez sekretu w rzeczy:',noSec.length,noSec.join(', '));
