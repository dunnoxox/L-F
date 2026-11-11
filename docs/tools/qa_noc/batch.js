const {play,G,GM,DAYS,XT,nm}=require('./sim.js');
const STRATS=['uczciwy','ludzki','chciwy','kradnacy','odmawiajacy','wydajacy','urzednik','pierwszy','ostatni','losowy'];
const N=+process.env.N||300;
const out={};const dist=(o,k,v)=>{o[k]=o[k]||{};o[k][v]=(o[k][v]||0)+1};
const stat=a=>{a=a.slice().sort((x,y)=>x-y);const s=a.reduce((p,c)=>p+c,0);return{min:a[0],p10:a[Math.floor(a.length*.1)],med:a[a.length>>1],p90:a[Math.floor(a.length*.9)],max:a[a.length-1],avg:+(s/a.length).toFixed(0)}};
const offered=new Set(),chosenQ=new Set(),chosenD=new Set(),entryUsed=new Set(),secChosen=new Set();let maxCrate=0,maxCrateInfo=null;const ambig=[];
const res={};
for(const S of STRATS){const R={end:{},money:[],w:[[],[],[],[],[]],audit:0,neg:0,urz:[],lud:[],bez:[],up:{},min:[]};
 for(let s=1;s<=N;s++){const opt={seed:s,strat:S,q:s%4==0?'sec':s%4==1?'random':s%4==2?'niewygodne':'first',insp:s%3==0?'sekret':s%3==1?'los':'none',buy:s%2?['regal','lampa','drzwi']:['drzwi','lampa','regal']};
  const r=play(opt);const E=r.end;['zag','skr','pop','ep','el'].forEach(k=>dist(R.end,k,E[k]));dist(R.end,'tear',E.tear);
  r.cov.weeks.forEach((w,i)=>{R.w[i].push(w.money);if(w.audit)R.audit++});R.money.push(r.ST.money);R.urz.push(r.ST.c.urzad);R.lud.push(r.ST.c.ludzie);R.bez.push(r.ST.c.bez);
  R.min.push(Math.min(...r.cov.weeks.map(w=>w.money)));R.neg+=r.cov.weeks.some(w=>w.money<0)?1:0;r.cov.weeks.forEach(w=>{if(w.up)R.up[w.up]=(R.up[w.up]||0)+1});
  r.cov.q.forEach(q=>{q.avail.forEach(t=>offered.add(q.g+'|'+t));chosenQ.add(q.g+'|'+q.chosen);if(q.sec)secChosen.add(q.g+'|'+q.chosen)});
  r.cov.dec.forEach(d=>chosenD.add(d.g+'|'+d.a));r.cov.entry.forEach(e=>entryUsed.add(e.g+'|'+(e.k||'default')));
  r.cov.crate.forEach(c=>c.lines.forEach(n=>{if(n>maxCrate){maxCrate=n;maxCrateInfo={S,s,d:c.d}}}));
  if(s===1)r.cov.ambig.forEach(a=>ambig.push({S,...a}));
 }
 res[S]=R}
console.log('=== ZAKOŃCZENIA wg strategii (N='+N+') ===');
for(const S of STRATS){const R=res[S];console.log('\n['+S+']');for(const k of Object.keys(R.end))console.log('  ',k,JSON.stringify(R.end[k]));
 console.log('   kasa końcowa',JSON.stringify(stat(R.money)),'| min kasa po sobocie (w trakcie)',JSON.stringify(stat(R.min)),'| runy z długiem po jakiejś sobocie:',(100*R.neg/N).toFixed(0)+'%','| audyty/run:',(R.audit/N).toFixed(2));
 console.log('   po sobocie 1..5 (mediana):',R.w.map(a=>stat(a).med).join(' | '),'| Urząd końc.',JSON.stringify(stat(R.urz)),'Ludzie',JSON.stringify(stat(R.lud)),'bez_wpisu',JSON.stringify(stat(R.bez)),'| ulepszenia',JSON.stringify(R.up))}
// pokrycie
const allQ=[],allQ2=[];G.forEach(g=>g.tury.forEach((t,ti)=>t.pytania.forEach(q=>allQ.push({g:g.id,t:ti,tekst:q.tekst,wymaga:q.wymaga,ton:q.ton,mina:q.mina}))));
const neverOffered=allQ.filter(q=>!offered.has(q.g+'|'+q.tekst));
console.log('\n=== PYTANIA: wszystkich',allQ.length,'| nigdy nie pokazane graczowi (wszystkie strategie):',neverOffered.length);neverOffered.forEach(q=>console.log('  NIGDY_NIEPOKAZANE',q.g,'T'+(q.t+1),'wymaga='+q.wymaga,'|',q.tekst.slice(0,70)));
const neverChosen=allQ.filter(q=>offered.has(q.g+'|'+q.tekst)&&!chosenQ.has(q.g+'|'+q.tekst));console.log('  pokazane ale nigdy nie wybrane:',neverChosen.length);
const decAll=[];G.forEach(g=>g.decyzje.forEach(d=>decAll.push(g.id+'|'+d.akcja)));console.log('=== DECYZJE: wszystkich',decAll.length,'| nigdy nie wybrane:',decAll.filter(x=>!chosenD.has(x)).join(', ')||'brak');
const ent=[];G.forEach(g=>{ent.push(g.id+'|default');Object.keys(g.wejscie_jesli||{}).forEach(k=>ent.push(g.id+'|'+k))});console.log('=== WEJŚCIA (default + wejscie_jesli): wszystkich',ent.length,'| nigdy nie użyte:',ent.filter(x=>!entryUsed.has(x)).join(', ')||'brak');
console.log('\n=== MAGAZYN: maks. rzeczy w jednej skrzyni:',maxCrate,JSON.stringify(maxCrateInfo));
const amb=ambig.filter(a=>a.others>0);console.log('=== DWUZNACZNOŚĆ szukania (run 1, strategia',STRATS.length,'): gość -> ile innych rzeczy w magazynie o TEJ SAMEJ widocznej nazwie');
const byG={};ambig.forEach(a=>{byG[a.g]=byG[a.g]||[];byG[a.g].push(a.S+':'+a.others)});
let nAmb=0,nAll=0;STRATS.forEach(S=>{});console.log('  przypadków >0 w',ambig.length,'szukań:',amb.length);
const top={};amb.forEach(a=>{top[a.g]=Math.max(top[a.g]||0,a.others)});console.log('  ',JSON.stringify(top));
require('fs').writeFileSync('batch_res.json',JSON.stringify({res:Object.fromEntries(Object.entries(res).map(([k,v])=>[k,{end:v.end,money:stat(v.money),min:stat(v.min),neg:v.neg/N,audit:v.audit/N,w:v.w.map(stat),urz:stat(v.urz),lud:stat(v.lud),bez:stat(v.bez)}])),neverOffered,maxCrate},null,1));
