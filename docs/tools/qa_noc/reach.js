const {G}=require('./sim.js');
function bumpC(c,a){const cl=v=>Math.max(0,Math.min(10,v));
 if(/^przywlaszcz/.test(a)){c.bez++;c.urzad=cl(c.urzad-2);c.ludzie=cl(c.ludzie-2);return}
 if(/cicho|bez_wpisu|koperta/.test(a)){c.bez++;c.urzad=cl(c.urzad-1)}else if(/^wyloz/.test(a)){c.ludzie=cl(c.ludzie+1);c.urzad=cl(c.urzad-1)}else if(/^wydaj/.test(a))c.ludzie=cl(c.ludzie+1);else if(/^odmow/.test(a)){c.urzad=cl(c.urzad+1);c.ludzie=cl(c.ludzie-1)}
 else if(/zatrzymaj|do_kontroli|victor|oficjalny|archiwum|uzgodnij|komplet|dolacz|rezerwacja|zglos|depozyt|zetony|pokwituj|sprawdz|zabezpiecz|zasloń|zaslon/.test(a))c.urzad=cl(c.urzad+1)}
function ends(log,c,tear){const did=(d,...a)=>log.some(l=>l[0]===d&&a.includes(l[1]));
 const zag=(did(11,'powiadom_rodzine')||did(17,'zdradz_szczegol')||did(14,'bez')||did(22,'zostaw_otwarte'))?'C':(did(16,'maya_sama')&&did(21,'wiadomosc_zatwierdzona')&&did(22,'przekaz_w_granicach'))?'A':'B';
 const src2=did(8,'kopia_osobno')||did(19,'przyjmij_sprostowanie');
 const skr=(did(23,'wydaj_nora')&&did(18,'rezerwacja_nora')&&did(12,'zabezpiecz','sprawdz_z_nora'))?(src2?'A':'A2'):(did(23,'victor')&&did(18,'do_kontroli')&&(did(9,'zetony_victor')||did(12,'zabezpiecz')||did(5,'wykaz_paczke')))?'B':'C';
 const pop=(did(15,'uzgodnij')&&did(20,'komplet_zeznan')&&did(25,'dolacz_kopie')&&(did(13,'odpis_za_zgode')||did(19,'przyjmij_sprostowanie')))?'A':(did(15,'victor_od_razu')&&(did(20,'poza_audytem')||did(23,'victor')))?'C':'B';
 const sam=[did(4,'koperta','wydaj_cicho'),did(12,'wyloz_400'),c.bez>=3].filter(Boolean).length>=2;
 const ep=sam?'nowysam':c.urzad>=7?'referent':'zostajesz';return{zag,skr,pop,ep,el:(sam||tear)?'N':pop}}
let s=1;const rnd=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296};
const N=+process.env.N||1500000;const seen={},combo={};
for(let n=0;n<N;n++){const c={urzad:5,ludzie:5,bez:0},log=[];for(const g of G){const d=g.decyzje[(rnd()*g.decyzje.length)|0];log.push([g.dzien,d.akcja]);bumpC(c,d.akcja)}
 const tear=rnd()<.25;const e=ends(log,c,tear);['zag','skr','pop','ep','el'].forEach(k=>{const key=k+'='+e[k];seen[key]=(seen[key]||0)+1});const ck=e.zag+e.skr+e.pop+'/'+e.ep;combo[ck]=(combo[ck]||0)+1}
console.log('N=',N);Object.keys(seen).sort().forEach(k=>console.log(k,seen[k],(100*seen[k]/N).toFixed(3)+'%'));
console.log('kombinacji (zag,skr,pop/ep):',Object.keys(combo).length);
// brakujące wartości
const want=['zag=A','zag=B','zag=C','skr=A','skr=A2','skr=B','skr=C','pop=A','pop=B','pop=C','ep=nowysam','ep=referent','ep=zostajesz','el=A','el=B','el=C','el=N'];console.log('NIEOSIĄGALNE (w próbie):',want.filter(k=>!seen[k]).join(', ')||'brak');
