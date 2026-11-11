// Symulator rozgrywki LOST & FRAUD: logika przepisana 1:1 z game/game.js (main ea20082), bez DOM.
const fs=require('fs');global.window={};
const DATAFILE=process.env.DATA||require('path').join(__dirname,'.tmp/data.js');
new Function('window',fs.readFileSync(DATAFILE,'utf8'))(window);
const G=window.DATA,XT=window.EXTRA||{},EV=window.WIECZOR||{};
const GM={};G.forEach(g=>GM[g.id]=g);const DAYS={};G.forEach(g=>(DAYS[g.dzien]=DAYS[g.dzien]||[]).push(g.id));
const FINAL=25,STORM_DAYS=[3,8,13,18,23],UP={lampa:60,drzwi:80,regal:70},LINES=['4','6','11'];
const src=fs.readFileSync(process.env.GAMEJS||require('path').join(__dirname,'../../../game/game.js'),'utf8');
const FILL=eval(src.match(/const FILL=(\[[^\]]*\])/)[1]);
const SIM=eval('('+src.match(/const SIM=(\{[^}]*\})/)[1]+')');
const NAMEPL=eval('('+src.match(/const NAMEPL=(\{[^}]*\})/)[1]+')');
const nm=it=>NAMEPL[it.sprite]||it.sprite;
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const bills=w=>160+20*(w-1);
function fresh(){return{day:1,secrets:{},flags:{},c:{urzad:5,ludzie:5,bez:0},thefts:0,stock:null,stocked:{},pending:[],shown:[],log:[],money:0,up:{},storm:{},notes:[]}}
function play(opt){
 const SEED=opt.seed||1;const hash=s=>{let h=SEED*2654435761>>>0;for(const c of s)h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0};
 const R=rng(SEED*7919+13);const ST=fresh();const cov={q:[],dec:[],entry:[],ambig:[],crate:[],weeks:[],tr:[]};
 const has=w=>!w||String(w).split('|').some(k=>ST.secrets[k]||ST.flags[k]);
 const entry=g=>{const wj=g.wejscie_jesli||{};const k=Object.keys(wj).find(k=>ST.flags[k]);return k?[wj[k],k]:[g.wejscie,null]};
 function bump(a){const c=ST.c,cl=v=>Math.max(0,Math.min(10,v));
  if(/^przywlaszcz/.test(a)){c.bez++;ST.thefts++;c.urzad=cl(c.urzad-2);c.ludzie=cl(c.ludzie-2);return}
  if(/cicho|bez_wpisu|koperta/.test(a)){c.bez++;c.urzad=cl(c.urzad-1)}
  else if(/^wyloz/.test(a)){c.ludzie=cl(c.ludzie+1);c.urzad=cl(c.urzad-1)}
  else if(/^wydaj/.test(a))c.ludzie=cl(c.ludzie+1);
  else if(/^odmow/.test(a)){c.urzad=cl(c.urzad+1);c.ludzie=cl(c.ludzie-1)}
  else if(/zatrzymaj|do_kontroli|victor|oficjalny|archiwum|uzgodnij|komplet|dolacz|rezerwacja|zglos|depozyt|zetony|pokwituj|sprawdz|zabezpiecz|zasloń|zaslon/.test(a))c.urzad=cl(c.urzad+1)}
 const seedStock=()=>{ST.stock=[];const r=rng(hash('stock0'));LINES.forEach(ln=>{for(let i=0;i<3;i++)ST.stock.push({u:'f0'+ln+i,sprite:FILL[(r()*FILL.length)|0],line:ln,day:0,filler:1})})};
 function addDay(){const d=ST.day;if(!ST.stock)seedStock();if(ST.stocked[d])return;ST.stocked[d]=1;const r=rng(hash('stk'+d));const sh=ST.storm[d]||0;
  const add=it=>{it.line=sh?LINES[(LINES.indexOf(it.line)+sh)%3]:it.line;it.day=d;ST.stock.push(it)};
  (DAYS[d]||[]).forEach(id=>{const g=GM[id];add({u:'g:'+id,sprite:g.sprite,line:g.line,gid:id});add({u:'s:'+id,sprite:SIM[g.sprite]||FILL[(r()*FILL.length)|0],line:g.line,filler:1})});
  if(XT[d])add({u:'x:'+d,sprite:XT[d].sprite,line:XT[d].line,gid:'x'+d});
  for(let i=0;i<2;i++)add({u:'f'+d+'_'+i,sprite:FILL[(r()*FILL.length)|0],line:LINES[(r()*3)|0],filler:1});
  const cap=ST.up.regal?9:7;LINES.forEach(ln=>{let n=ST.stock.filter(i=>i.line===ln);while(n.length>cap){const k=n.find(i=>i.filler&&i.day<d);if(!k)break;ST.stock=ST.stock.filter(i=>i!==k);n=n.filter(i=>i!==k)}})}
 const cls=(d)=>{const a=d.akcja;return{bribe:/^wez_|^przywlaszcz/.test(a)||(d.kasa||0)>0,shady:/cicho|bez_wpisu|koperta/.test(a),loan:(d.kasa||0)<0,wydaj:/^wydaj/.test(a),odmow:/^odmow/.test(a),proc:/zatrzymaj|do_kontroli|victor|oficjalny|archiwum|uzgodnij|komplet|dolacz|rezerwacja|zglos|depozyt|zetony|pokwituj|sprawdz|zabezpiecz|zasloń|zaslon/.test(a)}};
 const S=opt.strat||'losowy';
 function pickDec(g){const ds=g.decyzje;const c=ds.map(cls);const first=f=>{const i=c.findIndex(f);return i>=0?i:-1};let i=-1;
  switch(S){
   case 'uczciwy':i=first(x=>x.proc&&!x.bribe&&!x.shady);if(i<0)i=first(x=>x.wydaj&&!x.bribe&&!x.shady);if(i<0)i=first(x=>!x.bribe&&!x.shady&&!x.loan);break;
   case 'ludzki':i=first(x=>(x.wydaj||x.loan)&&!x.bribe&&!x.shady);if(i<0)i=first(x=>!x.bribe&&!x.shady);break;
   case 'chciwy':{let best=-1e9;ds.forEach((d,k)=>{if((d.kasa||0)>best){best=d.kasa||0;i=k}});break}
   case 'kradnacy':i=first(x=>/^przywlaszcz/.test(ds[c.indexOf(x)].akcja));if(i<0)i=first(x=>x.bribe);break;
   case 'odmawiajacy':i=first(x=>x.odmow);break;
   case 'wydajacy':i=first(x=>x.wydaj);break;
   case 'pierwszy':i=0;break;
   case 'ostatni':i=ds.length-1;break;
   case 'urzednik':i=first(x=>x.proc&&!x.bribe);if(i<0)i=first(x=>x.odmow);break;
  }
  if(i<0)i=(R()*ds.length)|0;return i}
 function pickQ(list,g,t){let i=0;const qs=list;
  if(opt.q==='first')i=0;else if(opt.q==='last')i=qs.length-1;else if(opt.q==='sec'){i=qs.findIndex(o=>o.sec);if(i<0)i=(R()*qs.length)|0}else if(opt.q==='niewygodne'){i=qs.findIndex(o=>o.x.ton==='niewygodne');if(i<0)i=0}else i=(R()*qs.length)|0;return i}
 function qlist(g,turn){const tr=g.tury[turn].pytania;const hasSec=x=>x.wymaga&&has(x.wymaga);const base=tr.filter(x=>!x.wymaga);const sec=tr.filter(hasSec);
  if(!sec.length)return base.map(x=>({x,sec:false}));const out=base.map(x=>({x,sec:false}));sec.forEach(s=>{const k=out.map(o=>o.x.ton).lastIndexOf(s.ton);if(k>=0)out.splice(k,1,{x:s,sec:true});else out.push({x:s,sec:true})});return out}
 let ended=false,endDay=0;
 for(let d=1;d<=FINAL+5;d++){ST.day=d;
  if(STORM_DAYS.includes(d)&&!ST.storm[d])ST.storm[d]=1+(rng(hash('burza'+d))()<.5?1:0);
  if(!DAYS[d]){endDay=d;break}
  addDay();
  // inspekcja (1 rzecz dziennie)
  const items=ST.stock.filter(i=>i.day===d&&i.gid).map(i=>({id:i.gid,g:i.gid[0]==='x'?XT[d]:GM[i.gid]}));
  let pick=null;if(opt.insp==='sekret'){pick=items.find(x=>(x.g.wnetrze||[])[0])}else if(opt.insp==='los'){pick=items[(R()*items.length)|0]}
  if(pick){const sec=(pick.g.wnetrze||[])[0];if(sec){ST.secrets[sec.sekret_id]=1;if(/S\.H\./.test(sec.co_widac)&&!ST.notes.includes(sec.sekret_id))ST.notes.push(sec.sekret_id)}}
  for(let gi=0;gi<DAYS[d].length;gi++){const g=GM[DAYS[d][gi]];
   const [et,ek]=entry(g);cov.entry.push({g:g.id,k:ek,d,text:et});
   let txt=et.length;const asked=[];
   for(let t=0;t<3;t++){const ql=qlist(g,t);const k=pickQ(ql,g,t);const ch=ql[k];
    cov.q.push({g:g.id,t,avail:ql.map(o=>o.x.tekst),chosen:ch.x.tekst,sec:ch.sec});
    if(ch.x.ustawia)ST.flags[ch.x.ustawia]=1;txt+=ch.x.odpowiedz.length+ch.x.tekst.length;asked.push(ch.x)}
   // szukanie
   const target='g:'+g.id;const ti=ST.stock.find(i=>i.u===target);
   const same=ST.stock.filter(i=>nm(i)===nm(ti)&&i!==ti).length;
   cov.ambig.push({g:g.id,d,name:nm(ti),others:same,line:ti.line,crate:LINES.map(l=>ST.stock.filter(i=>i.line===l).length)});
   // decyzja
   const di=pickDec(g);const dd=g.decyzje[di],a=dd.akcja;
   if(/^wydaj|^przywlaszcz/.test(a))ST.stock=ST.stock.filter(i=>i.u!==target);
   ST.log.push({id:g.id,a,day:d});ST.flags[g.id+':'+a]=1;bump(a);ST.pending.push({due:d+(dd.echo.za_dni||1),item:g.itemName,a:dd.etykieta||a,echo:dd.echo.tekst});ST.money+=40+(dd.kasa||0);
   cov.dec.push({g:g.id,a,d,kasa:dd.kasa||0,n:g.decyzje.length});txt+=dd.reakcja.length+dd.zysk.length+dd.strata.length;cov.tr.push({g:g.id,d,chars:txt})}
  const due=ST.pending.filter(p=>p.due<=d&&!ST.shown.includes(p));due.forEach(p=>ST.shown.push(p));cov.crate.push({d,money:ST.money,c:{...ST.c},lines:LINES.map(l=>ST.stock.filter(i=>i.line===l).length)});
  if(d===FINAL){const gs=opt.gest||['wpisz','wyrwij','list','zamknij'][(R()*4)|0];ST.flags['gest:'+gs]=1}
  if(d%5===0){const rent=150,bl=bills(Math.ceil(d/5));ST.money-=rent+bl;let audit=0;
   if(ST.thefts>0&&rng(hash('audyt'+d))()<Math.min(.9,.45*ST.thefts)){const fine=60*ST.thefts;ST.money-=fine;ST.c.urzad=Math.max(0,ST.c.urzad-2);ST.flags['audyt:wpadka']=1;audit=fine;ST.thefts=0}
   if(d<FINAL&&!Object.keys(ST.up).length&&opt.buy){const k=opt.buy.find(k=>ST.money>=UP[k]);if(k){ST.money-=UP[k];ST.up[k]=1}}
   cov.weeks.push({d,money:ST.money,audit,rent:rent+bl,c:{...ST.c},up:Object.keys(ST.up)[0]||null})}
 }
 // zakończenia
 const did=(d,...a)=>ST.log.some(l=>l.day===d&&a.includes(l.a));
 const zag=(did(11,'powiadom_rodzine')||did(17,'zdradz_szczegol')||did(14,'bez')||did(22,'zostaw_otwarte'))?'C':(did(16,'maya_sama')&&did(21,'wiadomosc_zatwierdzona')&&did(22,'przekaz_w_granicach'))?'A':'B';
 const src2=did(8,'kopia_osobno')||did(19,'przyjmij_sprostowanie');
 const skr=(did(23,'wydaj_nora')&&did(18,'rezerwacja_nora')&&did(12,'zabezpiecz','sprawdz_z_nora'))?(src2?'A':'A2'):(did(23,'victor')&&did(18,'do_kontroli')&&(did(9,'zetony_victor')||did(12,'zabezpiecz')||did(5,'wykaz_paczke')))?'B':'C';
 const pop=(did(15,'uzgodnij')&&did(20,'komplet_zeznan')&&did(25,'dolacz_kopie')&&(did(13,'odpis_za_zgode')||did(19,'przyjmij_sprostowanie')))?'A':(did(15,'victor_od_razu')&&(did(20,'poza_audytem')||did(23,'victor')))?'C':'B';
 const sam=[did(4,'koperta','wydaj_cicho'),did(12,'wyloz_400'),ST.c.bez>=3].filter(Boolean).length>=2;
 const ep=sam?'nowysam':ST.c.urzad>=7?'referent':'zostajesz';const tear=!!ST.flags['gest:wyrwij'];const el=(sam||tear)?'N':pop;
 return{ST,cov,end:{zag,skr,pop,ep,tear,el},endDay,reachedFinal:!endDay};
}
module.exports={play,G,GM,DAYS,XT,EV,nm,LINES};
if(require.main===module){const r=play({seed:1,strat:'uczciwy',q:'sec',insp:'sekret',buy:['regal']});console.log(r.end,r.endDay,r.ST.money,r.ST.c)}
