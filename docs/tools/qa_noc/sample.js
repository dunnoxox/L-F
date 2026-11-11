const {G}=require('./sim.js');
let s=20261111;const rnd=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296};
const all=[];G.forEach(g=>g.tury.forEach((t,ti)=>t.pytania.forEach((q,qi)=>all.push({g,ti,q}))));
const pick=[];const used=new Set();while(pick.length<40){const x=all[(rnd()*all.length)|0];const k=x.g.id;if(used.has(k+x.ti)&&pick.length<35)continue;used.add(k+x.ti);pick.push(x)}
pick.sort((a,b)=>a.g.dzien-b.g.dzien);
pick.forEach((x,i)=>console.log(`#${i+1} d${x.g.dzien} ${x.g.id} T${x.ti+1} [${x.q.ton}/${x.q.mina}${x.q.kto?'/'+x.q.kto:''}${x.q.wymaga?' wymaga:'+x.q.wymaga:''}]\n  P: ${x.q.tekst}\n  O: ${x.q.odpowiedz}`));
