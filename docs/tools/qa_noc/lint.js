const {G,XT,EV}=require('./sim.js');
const texts=[];const T=(id,f,t)=>{if(typeof t==='string')texts.push({id,f,t})};
G.forEach(g=>{T(g.id,'wejscie',g.wejscie);Object.entries(g.wejscie_jesli||{}).forEach(([k,v])=>T(g.id,'wejscie_jesli:'+k,v));g.tury.forEach((t,i)=>t.pytania.forEach(q=>{T(g.id,'T'+(i+1)+' pytanie',q.tekst);T(g.id,'T'+(i+1)+' odp',q.odpowiedz)}));g.decyzje.forEach(d=>{T(g.id,'reakcja:'+d.akcja,d.reakcja);T(g.id,'zysk:'+d.akcja,d.zysk);T(g.id,'strata:'+d.akcja,d.strata);T(g.id,'echo:'+d.akcja,d.echo.tekst);T(g.id,'etykieta:'+d.akcja,d.etykieta)});(g.wnetrze||[]).forEach(w=>{T(g.id,'co_widac',w.co_widac)})});
Object.keys(EV).forEach(d=>EV[d].forEach(n=>T('wieczor'+d,'tekst',n.tekst)));
const issues={};const add=(k,x)=>{(issues[k]=issues[k]||[]).push(x)};
const rules=[
 ['podwójna spacja',/ {2,}/],['spacja przed przecinkiem/kropką',/ [,.;:!?](?!\.)/],['brak spacji po przecinku',/,[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]/],['proste cudzysłowy',/"/],['wielokropek ASCII',/\.\.\./],
 ['myślnik – lub — (do przeglądu)',/[–—]/],['angielskie słowo',/\b(okay|ok|sorry|please|thanks|hello|the|and|you|bye)\b/i],['ty-forma czas przeszły (-łeś/-łaś)',/\b\w+(łeś|łaś)\b/],
 ['"Pan/Pani" zwrot',/\b(Pan|Pani|pan|pani|panu|pani)\b/],['dwie kropki/..',/[^.]\.\.[^.]/],['brak kropki na końcu',/[a-ząćęłńóśźż]$/],['TODO/XXX',/TODO|XXX|\?\?\?/],['zdanie po kropce małą literą',/[a-ząćęłńóśźż]\. [a-ząćęłńóśźż]/]
];
texts.forEach(x=>rules.forEach(([n,re])=>{if(re.test(x.t))add(n,x)}));
Object.entries(issues).forEach(([k,v])=>console.log('\n##',k,'-',v.length,'\n'+v.slice(0,4).map(x=>'  '+x.id+' '+x.f+': '+x.t.slice(0,110)).join('\n')));
// rejestr: pytania gracza w formie "ty" do gości
const q2=[];G.forEach(g=>g.tury.forEach((t,i)=>t.pytania.forEach(q=>{if(/\b\w+(łeś|łaś|esz|asz)\b|\b(ci|cię|ciebie|twój|twoja|twoje|twoim|twoich|tobie)\b/i.test(q.tekst))q2.push(g.id)})));
const p2=[];G.forEach(g=>g.tury.forEach((t,i)=>t.pytania.forEach(q=>{if(/\b(Pan|Pani|panu|pani|Państwo|państwo)\b/.test(q.tekst))p2.push(g.id)})));
const cnt=a=>a.reduce((o,x)=>(o[x]=(o[x]||0)+1,o),{});
console.log('\nPytania gracza w formie TY:',q2.length,'/',G.reduce((n,g)=>n+g.tury.reduce((m,t)=>m+t.pytania.length,0),0),'| w formie Pan/Pani:',p2.length);
console.log('Goście 60+ pytani na TY:',['d1_thomas','d13_elias','d13_odile','d24_thomas','d12_linh','d9_stahl'].map(id=>id+':'+(cnt(q2)[id]||0)).join(' '));
// powtórzone zdania (ten sam tekst w 2+ miejscach)
const seen={};texts.forEach(x=>{if(x.t.length>45){(seen[x.t]=seen[x.t]||[]).push(x.id+' '+x.f)}});const dups=Object.entries(seen).filter(([t,a])=>a.length>1&&!/etykieta|echo/.test(a[0]));console.log('\nIdentyczne teksty w 2+ miejscach:',dups.length);dups.slice(0,8).forEach(([t,a])=>console.log('  ',a.join(' | '),'::',t.slice(0,80)));
// uproszczona lista najczęstszych "tików" (frazy 3-gramy)
const tri={};texts.filter(x=>/odp|reakcja|wejscie/.test(x.f)).forEach(x=>{const w=x.t.toLowerCase().replace(/[„”.,:;!?—–()]/g,'').split(/\s+/);for(let i=0;i<w.length-3;i++){const k=w.slice(i,i+4).join(' ');tri[k]=(tri[k]||0)+1}});
console.log('\nNajczęstsze 4-gramy (tiki językowe):');Object.entries(tri).sort((a,b)=>b[1]-a[1]).slice(0,12).forEach(([k,v])=>console.log('  ',v,k));
