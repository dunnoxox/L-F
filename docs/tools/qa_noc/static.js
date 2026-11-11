const fs=require('fs');global.window={};new Function('window',fs.readFileSync(process.env.DATA||require('path').join(__dirname,'.tmp/data.js'),'utf8'))(window);
const G=window.DATA,X=window.EXTRA,E=window.WIECZOR,L=window.LANG;
const out=[];const P=(...a)=>out.push(a.join(' '));
// produced
const prod={}; // token -> earliest day
const add=(t,d,src)=>{if(!(t in prod)||prod[t].d>d)prod[t]={d,src}};
G.forEach(g=>{
 (g.wnetrze||g.wnetrze||[]); (g.wnetrze||[]);
 (g.wnetrze||[]);
});
G.forEach(g=>{(g.wnetrze||[]).forEach((w,i)=>{ if(i===0)add(w.sekret_id,g.dzien,g.id+' wnetrze[0]')}) ;
 (g.wnetrze||[]);});
G.forEach(g=>{(g.wnetrze||[]);});
Object.keys(X).forEach(d=>{const w=(X[d].wnetrze||[])[0];if(w)add(w.sekret_id,+d,'extra'+d)});
G.forEach(g=>{(g.tury||[]).forEach(t=>t.pytania.forEach(q=>{if(q.ustawia)add(q.ustawia,g.dzien,g.id+' pytanie')}));(g.decyzje||[]).forEach(d=>add(g.id+':'+d.akcja,g.dzien,g.id))});
['gest:wpisz','gest:wyrwij','gest:list','gest:zamknij','audyt:wpadka'].forEach(t=>add(t,25,'engine'));
// unreachable secondary secrets
G.forEach(g=>{if((g.wnetrze||[]).length>1)g.wnetrze.slice(1).forEach(w=>P('MARTWY_SEKRET (wnetrze[1+], silnik czyta tylko [0]):',g.id,w.sekret_id))});
Object.keys(X).forEach(d=>{if((X[d].wnetrze||[]).length>1)X[d].wnetrze.slice(1).forEach(w=>P('MARTWY_SEKRET extra',d,w.sekret_id))});
// consumers
const cons=[];
G.forEach(g=>{(g.tury||[]).forEach((t,ti)=>t.pytania.forEach(q=>{if(q.wymaga)String(q.wymaga).split('|').forEach(k=>cons.push({k,g:g.id,d:g.dzien,t:'pytanie T'+(ti+1)+': '+q.tekst.slice(0,50)}))}));
 Object.keys(g.wejscie_jesli||{}).forEach(k=>cons.push({k,g:g.id,d:g.dzien,t:'wejscie_jesli'}))});
const dead=cons.filter(c=>!(c.k in prod)),late=cons.filter(c=>c.k in prod&&prod[c.k].d>=c.d&&prod[c.k].src!=='engine'&&!prod[c.k].src.startsWith(c.g));
dead.forEach(c=>P('MARTWY_WARUNEK (nikt nie ustawia):',c.k,'<-',c.g,c.t));
late.forEach(c=>P('WARUNEK_ZA_WCZESNIE (producent w dniu',prod[c.k].d,'>= konsument',c.d+'):',c.k,'<-',c.g,c.t));
P('Konsumenci:',cons.length,'martwych:',dead.length,'za wcześnie:',late.length);
// ending refs
const src=fs.readFileSync(require('path').join(__dirname,'../../../game/game.js'),'utf8');
const refs=[...src.matchAll(/did\((\d+),((?:'[^']+',?)+)\)/g)];
const byDay={};G.forEach(g=>(byDay[g.dzien]=byDay[g.dzien]||[]).push(g));
refs.forEach(m=>{const d=+m[1];const acts=m[2].split(',').filter(Boolean).map(s=>s.replace(/'/g,''));
 acts.forEach(a=>{const ok=(byDay[d]||[]).some(g=>g.decyzje.some(x=>x.akcja===a));if(!ok)P('ZAKONCZENIE_MARTWE_ODNIESIENIE: did('+d+",'"+a+"') - brak takiej akcji w dniu "+d+'; akcje tego dnia:',(byDay[d]||[]).map(g=>g.id+'['+g.decyzje.map(x=>x.akcja).join(',')+']').join(' ; '))})});
// LANG keys
const used=new Set([...src.matchAll(/T\.(\w+)/g)].map(m=>m[1]));used.forEach(k=>{if(!(k in L))P('BRAK_KLUCZA_LANG:',k)});
['end_zag_A','end_zag_B','end_zag_C','end_skr_A','end_skr_A2','end_skr_B','end_skr_C','end_pop_A','end_pop_B','end_pop_C','ep_nowysam','ep_referent','ep_zostajesz','elias_A','elias_B','elias_C','elias_N','gest_wpisz','gest_wyrwij','gest_list','gest_zamknij'].forEach(k=>{if(!L[k])P('BRAK_KLUCZA_LANG:',k)});
// placeholders / TODO in texts
const all=JSON.stringify({G,X,E,L});[...all.matchAll(/\{[a-z_()0-9, ]+\}/g)].forEach(m=>{if(!/^\{(n|rz|f)\}$/.test(m[0]))P('PLACEHOLDER w tekście:',m[0])});
// rzecz vs wyświetlana nazwa
const NAMEPL=(src.match(/const NAMEPL=\{([^}]*)\}/)[1]).split(',').reduce((o,p)=>{const [k,v]=p.split(':');o[k.trim()]=v.trim().replace(/'/g,'');return o},{});
G.forEach(g=>P('NAZWA',g.id,'| rzecz:',g.rzecz.slice(0,60),'| pokazane w grze:',NAMEPL[g.sprite]||('(brak: '+g.sprite+')'),'| itemName:',g.itemName));
// akcje bez echo.za_dni, kasa stats
let cnt=0;G.forEach(g=>g.decyzje.forEach(d=>{cnt++;if(!d.echo||!d.echo.tekst)P('BRAK_ECHA:',g.id,d.akcja)}));P('Decyzji łącznie:',cnt);
// wejscie_jesli keys vs wejscie
fs.writeFileSync('static_out.txt',out.join('\n'));console.log(out.filter(l=>!l.startsWith('NAZWA')).join('\n'));
