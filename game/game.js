(function(){
const T=window.LANG,G=window.DATA,A=window.AUD;
const stage=document.getElementById('stage'),bg=document.getElementById('bg'),layer=document.getElementById('layer'),fade=document.getElementById('fade'),dim=document.getElementById('dim');
const KN={d7_evan:'insistent',d5_victor:'impatient',d3_maz_i_siostra:'insistent',d9_iris:'polite',d4_iris:'polite',d2_jonah:'impatient',d3_dex:'impatient',d5_noah:'polite'},ST_={d1_rosa:'heels',d3_maz_i_siostra:'heels',d3_dex:'sneakers',d2_jonah:'sneakers',d4_iris:'heels',d8_lena_i_nora:'heels',d9_iris:'heels',d6_ada:'sneakers',d8_bree:'sneakers',d10_dario:'boots'};
const GM={};G.forEach(g=>GM[g.id]=g);
const DAYS={};G.forEach(g=>(DAYS[g.dzien]=DAYS[g.dzien]||[]).push(g.id));
const XT=window.EXTRA||{},EV=window.WIECZOR||{};
const FINAL=25,STORM_DAYS=[3,8,13,18,23],UP={lampa:60,drzwi:80,regal:70};

const FILL=['legitymacja','paszport','notes','organizer','bilet','okulary_slonce','zapalniczka','grzebien','czapka_zimowa','beret','pasek','krawat','kalosz','pantofel','czapka_daszek','apaszka','torba_zakupy','saszetka','torba_narzedzia','torba_listonosza','kuferek','worek','plecak_dzieciecy','walizka_mala','radio','latarka','lornetka','dyktafon','powerbank','zegarek_reka','kasetowiec','lalka','klocki','hulajnoga','pilka','latawiec','medalik','pozytywka','album','harmonijka','futeral_gitara','skakanka','lyzwy','wedka','farby','szachy','kubek','puszka','pudelko_blaszane','skrzynka_narzedz','piornik','portfel_maly','etui_aparat','paczka_plotno','parasol','krolik','teczka','futeral','okulary','kapelusz','torebka','but','ksiazka','sluchawki','laska','aparat','zegarek','pudelko','portfel','walizka','szalik','klucze','rekawiczka_welna','termos','paczka','plecak','telefon'];
const NAMEPL={album:'album',aparat:'aparat',apaszka:'apaszka',beret:'beret',bilet:'bilet',budzik:'budzik',but:'but',czapka_daszek:'czapka z daszkiem',czapka_zimowa:'czapka zimowa',dyktafon:'dyktafon',etui_aparat:'etui na aparat',farby:'farby',futeral:'futerał',futeral_gitara:'futerał na gitarę',grzebien:'grzebień',harmonijka:'harmonijka',hulajnoga:'hulajnoga',kalosz:'kalosz',kapelusz:'kapelusz',kasetowiec:'odtwarzacz kasetowy',klocki:'klocki',klucze:'klucze',koperta:'koperta',krawat:'krawat',krolik:'pluszowy królik',ksiazka:'książka',kubek:'kubek',kuferek:'kuferek',lalka:'lalka',laska:'laska',latarka:'latarka',latawiec:'latawiec',legitymacja:'legitymacja',lornetka:'lornetka',lyzwy:'łyżwy',medalik:'medalik',notes:'notes',okulary:'okulary',okulary_slonce:'okulary przeciwsłoneczne',organizer:'organizer',paczka:'paczka',paczka_plotno:'paczka w płótnie',pantofel:'pantofel',parasol:'parasol',pasek:'pasek',paszport:'paszport',pilka:'piłka',piornik:'piórnik',plecak:'plecak',plecak_dzieciecy:'plecak dziecięcy',portfel:'portfel',portfel_maly:'mały portfel',powerbank:'powerbank',pozytywka:'pozytywka',pudelko:'pudełko',pudelko_blaszane:'blaszane pudełko',puszka:'puszka po herbacie',radio:'radio',rekawiczka_skora:'rękawiczka skórzana',rekawiczka_welna:'rękawiczka wełniana',saszetka:'saszetka',skakanka:'skakanka',skrzynka_narzedz:'skrzynka z narzędziami',sluchawki:'słuchawki',szachy:'szachy',szalik:'szalik',teczka:'teczka',telefon:'telefon',termos:'termos',torba_listonosza:'torba listonosza',torba_narzedzia:'torba narzędziowa',torba_zakupy:'torba na zakupy',torebka:'torebka',walizka:'walizka',walizka_mala:'mała walizka',wedka:'wędka',worek:'worek',zapalniczka:'zapalniczka',zegarek:'zegarek kieszonkowy',zegarek_reka:'zegarek na rękę'};
const SIM={rekawiczka_skora:'rekawiczka_welna',plecak:'plecak_dzieciecy',torba_narzedzia:'torba_zakupy',portfel:'portfel_maly',futeral:'futeral_gitara',notes:'organizer',piornik:'futeral',zegarek:'zegarek_reka',sluchawki:'dyktafon',kapelusz:'beret',aparat:'etui_aparat',ksiazka:'album',koperta:'teczka',paczka_plotno:'paczka',pudelko_blaszane:'puszka',teczka:'koperta',szalik:'apaszka',puszka:'pudelko_blaszane',budzik:'zegarek',telefon:'powerbank',klucze:'zapalniczka',krolik:'lalka'};
const nm=it=>NAMEPL[it.sprite]||it.sprite;
const LINES=['4','6','11'];
const q=new URLSearchParams(location.search);const SEED=+(q.get('seed')||((Date.now()&0xffff)+1));
let ST=fresh();
function fresh(){return{day:1,gi:0,turn:0,secrets:{},flags:{},c:{urzad:5,ludzie:5,bez:0},thefts:0,stock:null,stocked:{},tut:0,inspected:false,pending:[],shown:[],log:[],money:0,up:{},storm:{},v:4}}
const effLine=g=>{const s=ST.storm[ST.day];return s?LINES[(LINES.indexOf(g.line)+s)%3]:g.line};
const SAVE='okienko_e1_save';
function save(){try{localStorage.setItem(SAVE,JSON.stringify(ST))}catch(e){}}
function load(){try{const s=JSON.parse(localStorage.getItem(SAVE));if(s&&s.v===4){(s.pending||[]).forEach(p=>{p.k=p.k||(p.due+'_'+p.item)});return s}}catch(e){}return null}
/* PRNG: seed gry (determinizm), osobny od kosmetyki lampy */
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const hash=s=>{let h=SEED*2654435761>>>0;for(const c of s)h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0};
const lampR=rng(Date.now()&0xffff);
function fit(){const de=document.documentElement,W=de.clientWidth||innerWidth,H=de.clientHeight||innerHeight,s=Math.min(W/1536,H/1024);stage.style.transform=`scale(${s}) translate(-50%,-50%)`;stage.dataset.s=s;const r=document.getElementById('rot');if(r)r.style.display=H>W*1.05?'flex':'none'}
addEventListener('resize',fit);fit();
const h=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
const btn=(txt,cls,fn)=>{const b=h('button','btn'+(cls?' '+cls:''),txt);if(fn)b.onclick=()=>{if(b._busy)return;b._busy=1;setTimeout(()=>b._busy=0,700);A.tick();fn()};return b};
function scene(img,build){fade.classList.add('on');setTimeout(()=>{bg.style.backgroundImage=img?`url(assets/bg/${img}.jpg)`:'none';layer.innerHTML='';build();gear();const f=layer.querySelector('button.btn,button.q');if(f)f.focus({preventScroll:true});fade.classList.remove('on')},450)}
/* ustawienia */
let reduce=localStorage.getItem('okienko_reduce')==='1';
const DOW=['pon.','wt.','śr.','czw.','pt.'];
function dateStr(d){let n=9+7*Math.floor((d-1)/5)+(d-1)%5,m='08';if(n>31){n-=31;m='09'}return DOW[(d-1)%5]+' '+n+'.'+m}
const dayTitle=d=>(T.dt&&T.dt[d-1])||'';
const bills=w=>160+20*(w-1),weekOf=()=>Math.ceil(ST.day/5),dueNow=()=>150+bills(weekOf());
let inGame=false;
function gear(){const g=h('button','gear','⚙');g.setAttribute('aria-label',T.settings);g.onclick=settings;layer.append(g);
 if(inGame){const w=h('div','wallet'+(ST.money<0?' neg':''));w.innerHTML=`<b>${T.dollar}${ST.money}</b><span>${T.due}: ${T.dollar}${dueNow()}</span><span class="clk">${clk()}</span>`;layer.append(w);if(ST.notes&&ST.notes.length){const n=h('button','notes','✎ '+T.notes_b+' '+ST.notes.length+'/5');n.onclick=()=>notebook();layer.append(n)}}}
function notebook(){const ex=document.getElementById('nb');if(ex){ex.remove();return}const o=h('div');o.id='nb';o.className='drawer';o.append(h('div','lab',T.notes_h));(ST.notes||[]).forEach(id=>o.append(h('div','ask',ST.noteTxt[id])));if(!(ST.notes||[]).length)o.append(h('div','ask',T.notes_none));const cl=()=>o.remove();o.append(btn(T.close,'ghost',cl));o.onkeydown=e=>{if(e.key==='Escape'){e.stopPropagation();cl()}};layer.append(o);o.querySelector('button').focus()}
function step(txt){if(ST.day>2&&!ST.hintsOn){const z=h('div');z.style.display='none';return z}const e=h('div','step',txt);e.setAttribute('role','status');layer.append(e);return e}
function tutorial(done){const o=h('div','tut');const p=h('div','panel');p.append(h('div','lab',T.tut_h));const ol=h('ol');T.tut_l.forEach(x=>ol.append(h('li',null,x)));p.append(ol);p.append(btn(T.tut_ok,'pulse',()=>{o.remove();ST.tut=1;done&&done()}));o.append(p);layer.append(o);p.querySelector('button').focus()}
function settings(){if(document.getElementById('set'))return;const o=h('div');o.id='set';const p=h('div','panel');p.append(h('div','lab',T.settings));
 [['master','vol_master'],['music','vol_music'],['amb','vol_amb'],['sfx','vol_sfx'],['voice','vol_voice']].forEach(([k,l])=>{const r=h('label','row',T[l]);const i=document.createElement('input');i.type='range';i.min=0;i.max=1;i.step=.05;i.value=A.vol[k];i.oninput=()=>A.setVol(k,+i.value);r.append(i);p.append(r)});
 const r=h('label','row',T.reduce);const c=document.createElement('input');c.type='checkbox';c.checked=reduce;c.onchange=()=>{reduce=c.checked;localStorage.setItem('okienko_reduce',reduce?'1':'0')};r.append(c);p.append(r);
 p.append(btn(T.close,'',()=>o.remove()));o.append(p);stage.append(o)}
addEventListener('keydown',e=>{if(e.key==='Escape'){const s=document.getElementById('set');s?s.remove():settings()}});
/* lampa: jedno zdarzenie = obraz + dźwięk */
function lampLoop(){setTimeout(()=>{if(A.on()&&!ST.up.lampa)A.lampBlink(()=>{dim.className=reduce?'soft':'blink';setTimeout(()=>dim.className='',reduce?500:260)});lampLoop()},28000+lampR()*45000)}
/* elementy */
function itemEl(g,w){if(g.sprite){const im=new Image();im.src=`assets/items/${g.sprite}.png`;im.draggable=false;im.style.width=w+'px';im.alt=g.itemName;return im}
 const d=h('div','ph-item',g.itemName);d.style.width=w+'px';d.style.height=(w*.7)+'px';return d}
const PORT={rosa:'siostra',hana:'siostra',lena:'siostra',maya:'siostra',grace:'siostra',linh:'siostra',priya:'siostra',bree:'siostra',nora:'dama',iris:'dama',odile:'dama',vera:'dama',sylvia:'dama',dana:'dama',billie:'chlopak',kit:'chlopak',jonah:'chlopak',dario:'chlopak',kofi:'chlopak',ada:'chlopak',evan:'maz',noah:'maz',hugo:'maz',dorian:'maz',leo:'maz',sam:'maz',maz:'maz',siostra:'siostra',gus:'wdowiec',thomas:'wdowiec',elias:'wdowiec',pruitt:'wdowiec',pan:'wdowiec',victor:'inspektor',marek:'inspektor',stahl:'inspektor'};
/* portrety zastępcze wg archetypu, dopóki nie ma własnych grafik postaci */
function stand(g,kto){const nm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(/[ ,]/)[0];const k=nm(kto&&g.face2&&g.face2[kto]?g.face2[kto]:kto);if(PORT[k])return PORT[k];const p=nm(g.postac);return PORT[p]||(g.ludzie&&PORT[nm(g.ludzie)])||'dama'}
function setFace(g,m,kto){const e=document.getElementById('guest');if(!e)return;e.dataset.mina=m;const fc=((kto&&g.face2&&kto in g.face2)?g.face2[kto]:g.face)||stand(g,kto);if(fc){e.style.backgroundImage=`url(assets/ppl/${fc}_${m}.jpg)`;e.textContent='';e.className=e.className.replace(/\bph\b/,'')}else{e.style.backgroundImage='none';if(!/\bph\b/.test(e.className))e.className+=' ph';e.innerHTML=`<div class="phname">${who(g,kto)}</div><div class="phmina">${m}</div>`}}
function addWindow(g){const e=h('div');e.id='guest';const gl=h('div');gl.id='glass';layer.append(e,gl);return e}
function winState(s){A.setWindow(s)}
/* przebieg */
function title(){A.music('menu');ST=fresh();const sv=load();scene('T2',()=>{winState('closed');const c=h('div','center');c.append(h('h1',null,T.title),h('div','sub',T.sub));
 const startNew=()=>{A.init();lampLoop();ST=fresh();prolog()};
 if(sv){const cont=btn(T.cont.replace('{d}',sv.day),'pulse',()=>{A.init();lampLoop();inGame=true;ST=sv;day()});const nw=btn(T.start,'ghost',()=>{const cf=h('div','sub');cf.textContent=T.new_conf.replace('{d}',sv.day);const yes=btn(T.new_yes,'ghost',()=>{localStorage.removeItem(SAVE);startNew()}),no=btn(T.new_no,'',()=>{cf.remove();yes.remove();no.remove();nw.style.display='';cont.focus()});nw.style.display='none';c.append(cf,no,yes);no.focus()});c.append(cont,nw)}
 else c.append(btn(T.start,'pulse',startNew));layer.append(c)})}
function seedStock(){ST.stock=[];const r=rng(hash('stock0'));LINES.forEach(ln=>{for(let i=0;i<3;i++)ST.stock.push({u:'f0'+ln+i,sprite:FILL[(r()*FILL.length)|0],line:ln,day:0,filler:1,no:(ST.no=(ST.no||540)+1+((r()*3)|0))})})}
function addDay(){const d=ST.day;if(!ST.stock)seedStock();if(ST.stocked[d])return;ST.stocked[d]=1;const r=rng(hash('stk'+d));const sh=ST.storm[d]||0;
 const add=it=>{it.line=sh?LINES[(LINES.indexOf(it.line)+sh)%3]:it.line;it.day=d;it.no=(ST.no=(ST.no||540)+1+((r()*3)|0));it.hh=((r()*220)|0);if(d>=2&&r()<.28)it.at=LINES[(LINES.indexOf(it.line)+1+((r()*2)|0))%3];ST.stock.push(it)};
 (DAYS[d]||[]).forEach(id=>{const g=GM[id];add({u:'g:'+id,sprite:g.sprite,line:g.line,gid:id});add({u:'s:'+id,sprite:SIM[g.sprite]||FILL[(r()*FILL.length)|0],line:g.line,filler:1})});
 if(XT[d])add({u:'x:'+d,sprite:XT[d].sprite,line:XT[d].line,gid:'x'+d});
 for(let i=0;i<2;i++)add({u:'f'+d+'_'+i,sprite:FILL[(r()*FILL.length)|0],line:LINES[(r()*3)|0],filler:1});
 const tg=new Set(ST.stock.filter(i=>i.gid&&i.day===d).map(i=>i.sprite));ST.stock.forEach(i=>{if(i.filler&&!String(i.u).startsWith('s:')&&tg.has(i.sprite)){const alt=FILL.filter(f=>!tg.has(f)&&!ST.stock.some(o=>o.sprite===f&&o.line===i.line));if(alt.length)i.sprite=alt[(r()*alt.length)|0]}});
 const cap=ST.up.regal?9:7;LINES.forEach(ln=>{let n=ST.stock.filter(i=>i.line===ln);while(n.length>cap){const k=n.find(i=>i.filler&&i.day<d)||n.find(i=>i.day<d&&!(i.gid&&ST.log.every(l=>l.id!==i.gid)));if(!k)break;ST.stock=ST.stock.filter(i=>i!==k);n=n.filter(i=>i!==k)}})}
function prolog(){scene('T2',()=>{winState('closed');const c=h('div','center dark');const p=h('div','letter');p.style.cssText='max-width:900px;transform:rotate(-1deg);flex:none';
 p.append(h('span','lab',T.pr1_lab),h('div',null,T.pr1_txt));
 const strip=btn(T.pr1_strip,'pulse',()=>{A.sfx('newspaper');strip.remove();const st=h('div','sub',T.pr1_num);c.insertBefore(st,go);const q=h('div','letter');q.style.cssText='max-width:900px;transform:rotate(.8deg);flex:none';q.append(h('span','lab',T.pr2_lab));T.pr2_rows.forEach(r=>q.append(h('div','row2',r)));c.insertBefore(q,go);go.style.display='';go.focus()});
 const go=btn(T.pr2_btn,'pulse',()=>{inGame=true;day()});go.style.display='none';c.append(p,strip,go);layer.append(c);step(T.pr1_step)})}
function prolog2(){scene('T2',()=>{winState('closed');const c=h('div','center dark');const p=h('div','letter');p.style.cssText='max-width:900px;transform:rotate(.8deg);flex:none';p.append(h('span','lab',T.pr2_lab));T.pr2_rows.forEach(r=>p.append(h('div','row2',r)));
 c.append(p,btn(T.pr2_btn,'pulse',()=>{inGame=true;day()}));layer.append(c);step(T.pr2_step)})}
function dayItems(){return ST.stock.filter(i=>i.day===ST.day&&i.gid).map(i=>({id:i.gid,g:i.gid[0]==='x'?XT[ST.day]:GM[i.gid],line:i.line,u:i.u}))}
const clk=()=>{const m=(23*60+40+(ST.clk||0))%1440;return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0')};
function day(){ST.clk=0;ST.gi=0;ST.inspected=false;if(STORM_DAYS.includes(ST.day)&&!ST.storm[ST.day])ST.storm[ST.day]=1+(rng(hash('burza'+ST.day))()<.5?1:0);A.setDoor(!!ST.up.drzwi);if(DAYS[ST.day])addDay();save();if(!DAYS[ST.day])return week();delivery()}
function plRz(n){return n===1?'rzecz':'rzeczy'}
function delivery(){A.music('day');if(ST.gi===0&&!ST.inspected)A.sting('dzien_start');scene('T4',()=>{winState('closed');A.sfx('delivery_tram');const items=dayItems();
 const t=h('div','top');t.append(h('div','lab',T.day+' '+ST.day+' · '+dateStr(ST.day)+' · 23:40'),h('div','dtitle',dayTitle(ST.day)),h('p',null,T.delivery.replace('{n}',items.length).replace('{rz}',plRz(items.length))+(ST.storm[ST.day]?' '+T.storm:'')));layer.append(t);if(ST.storm[ST.day])setTimeout(()=>{A.thunder();A.sting('wydarzenie')},600);
 step(T.step_delivery);
 LINES.forEach((ln,ci)=>{const col=h('div','crate');col.style.left=(120+ci*470)+'px';col.append(h('div','lab',T.line+' '+ln));
  items.filter(x=>x.line===ln).forEach(x=>{const z=h('button','zguba');z.append(itemEl(x.g,170),h('span','tag',NAMEPL[x.g.sprite]||x.g.itemName),h('span','btn pulse',T.look));z.onclick=()=>{if(ST.inspected)return;A.tick();inspect(x)};col.append(z)});
  col.append(h('div','cnt',T.stock+': '+ST.stock.filter(i=>i.line===ln).length));layer.append(col)});
 const b=h('div','bottom');if(ST.day>1){b.append(btn(T.skip,'ghost',()=>waitScene(windowScene)));layer.append(b)}
 if(ST.day===1){const k=h('div','kartka');k.append(h('div','lab',T.kartka_h));const ol=h('ol');T.tut_l.forEach(x=>ol.append(h('li',null,x)));k.append(ol);layer.append(k)}})}
function inspect(x){const g=x.g,sec=(g.wnetrze||[]).find(w=>!(/_luki$/.test(w.sekret_id)&&has('notatki_3'))&&!(/_pelny$/.test(w.sekret_id)&&!has('notatki_3')));ST.inspected=true;scene(null,()=>{winState('closed');const w=h('div','inspect');const p=h('div','pic');const r=rng(hash(x.id+'hot'));const hot=h('button','hot');
 if(g.inside){p.className='pic inside';p.style.backgroundImage=`url(assets/in/${g.inside.img}.jpg)`;hot.style.left=g.inside.x*100+'%';hot.style.top=g.inside.y*100+'%'}else{p.append(itemEl(g,520));hot.style.left=(30+r()*40)+'%';hot.style.top=(30+r()*40)+'%'}p.append(hot);w.append(p);
 const hint=step(T.step_inspect);w.append(h('div','lab insp',NAMEPL[g.sprite]||g.itemName));layer.append(w);setTimeout(()=>{if(!hot.classList.contains('found'))hot.classList.add('warm')},9000);
 let miss=0;p.onclick=e=>{if(e.target===hot||hot.classList.contains('found'))return;miss++;A.tick();if(miss>=3)hot.classList.add('warm')};
 const done=()=>{const n=h('div','note');n.append(h('span','lab',sec?T.found:''),document.createTextNode(sec?fk(sec.co_widac):T.nothing));n.append(btn(T.open,'',()=>waitScene(windowScene)));w.append(n);n.querySelector('button').focus()};
 hot.onclick=e=>{e.stopPropagation();if(hot.classList.contains('found'))return;if(sec)A.sting('sekret');hot.classList.add('found');A.tick();A.sfx('lock_small');hint.remove();if(sec){ST.secrets[sec.sekret_id]=1;if(/S\.H\./.test(fk(sec.co_widac))){ST.notes=ST.notes||[];if(!ST.notes.includes(sec.sekret_id)){ST.notes.push(sec.sekret_id);ST.noteTxt=ST.noteTxt||{};ST.noteTxt[sec.sekret_id]=fk(sec.co_widac)}}done()}else done()}})}
const has=w=>!w||String(w).split('|').some(k=>ST.secrets[k]||ST.flags[k]||(k==='notatki_3'&&(ST.notes||[]).length>=3)||(k==='maya_testy_2'&&mayaTesty()>=2)||(k==='kopie_2'&&kopie()>=2));
function entry(g){const wj=g.wejscie_jesli||{};const k=Object.keys(wj).find(k=>ST.flags[k]);return k?wj[k]:g.wejscie}
function who(g,kto){return(kto&&g.ludzie&&g.ludzie[kto])||g.postac}
function cg(){return GM[DAYS[ST.day][ST.gi]]}

/* pauza między gośćmi: noc, deszcz, cisza, a w tym czasie robota w magazynie */
const FAST=new URLSearchParams(location.search).has('fast');
function waitScene(next){ST.waits=(ST.waits||0)+1;A.music('day');
 const first=ST.day===1&&ST.waits<=1,dur=FAST?500:(first?7000:7000+Math.random()*9000);
 scene('T1',()=>{winState('closed');let alive=true;const ev=h('div','pauza');ev.textContent=T.w_start;layer.append(ev);
  const bar=step(first?T.w_step1:T.w_step);
  const row=h('div','wrow');row.append(btn(T.w_sort,'',()=>sortPanel()));const say0=t=>{ev.textContent=t;ev.classList.add('on')};row.append(btn(T.w_radio,'ghost',()=>{A.sfx('slide_light');say0(T.w_radio_l[(Math.random()*T.w_radio_l.length)|0])}),btn(T.w_glass,'ghost',()=>{A.sfx('window_up');const k=Math.random();if(k<.35&&!layer.querySelector('.cat')){const c=h('div','cat');c.setAttribute('role','button');c.title='kot';c.onclick=()=>{A.tick();A.sfx('lock_small');say0(T.w_cat2);c.classList.add('purr')};layer.append(c);say0(T.w_cat)}else say0(T.w_glass_l[(Math.random()*T.w_glass_l.length)|0])}),btn(T.w_tea,'ghost',()=>{A.sfx('drawer_small');say0(T.w_tea_l[(Math.random()*T.w_tea_l.length)|0])}));if(ST.notes&&ST.notes.length)row.append(btn(T.w_notes,'ghost',()=>notebook()));layer.append(row);
  const EVS=[[T.w_e1,()=>A.steps('boots')],[T.w_e2,()=>A.steps('heels')],[T.w_e3,()=>{A.sfx('phone_old_ring');const pb=btn(T.w_phone,'pulse',()=>{pb.remove();ST.money+=5;A.sfx('lock_small');say0(T.w_phone_l[(Math.random()*T.w_phone_l.length)|0]+' (+ '+T.dollar+'5)');const w=document.querySelector('.wallet b');if(w)w.textContent=T.dollar+ST.money});row.append(pb);setTimeout(()=>pb.remove(),9000)}],[T.w_e4,()=>A.lampBlink()],[T.w_e5,()=>A.thunder()],[T.w_e6,()=>A.sfx('drawer_small')]];
  const say1=()=>{if(!alive)return;const e=EVS[(Math.random()*EVS.length)|0];ev.textContent=e[0];ev.classList.add('on');try{e[1]()}catch(x){}setTimeout(()=>ev.classList.remove('on'),3500)};
  const tm=[];if(!FAST){const n=2+((Math.random()*2)|0);for(let i=0;i<n;i++)tm.push(setTimeout(say1,(1500+Math.random()*(dur-4500))))}
  tm.push(setTimeout(()=>{if(!alive)return;alive=false;const p=document.getElementById('sortp');if(p)p.remove();A.doorbell();ST._bell=1;ST.clk=(ST.clk||0)+25;ev.textContent=T.w_bell;ev.classList.add('on');setTimeout(()=>{next()},FAST?50:1300)},dur));
  const stop=new MutationObserver(()=>{if(!document.body.contains(ev)){alive=false;tm.forEach(clearTimeout);stop.disconnect()}});stop.observe(layer,{childList:true})})}
function sortPanel(){if(document.getElementById('sortp'))return;const bad=ST.stock.filter(i=>i.at&&i.at!==i.line);const o=h('div');o.id='sortp';const p=h('div','panel');p.append(h('div','lab',T.w_sort_h));
 if(!bad.length){p.append(h('div','sub',T.w_sort_ok))}else{p.append(h('div','sub',T.w_sort_txt));
  bad.slice(0,4).forEach(it=>{const r=h('div','srow');const im=new Image();im.src='assets/items/'+it.sprite+'.png';im.alt='';r.append(im,h('span','nm',nm(it)+' · '+T.w_tag+' '+it.line));
   LINES.forEach(ln=>{const b=btn(T.line+' '+ln,ln===(it.at)?'ghost':'',()=>{if(ln===it.line){it.at=undefined;A.sfx('drawer_small');r.remove();ST.sorted=(ST.sorted||0)+1;const left=ST.stock.filter(i=>i.at&&i.at!==i.line).length;if(!left){p.querySelectorAll('.srow,.sub').forEach(x=>x.remove());p.insertBefore(h('div','sub',T.w_sort_ok),p.lastChild)}}else{it.at=ln;A.sfx('refuse')}});if(ln===it.at)b.disabled=true;r.append(b)});p.append(r)})}
 p.append(btn(T.close,'',()=>o.remove()));o.append(p);layer.append(o)}
function windowScene(){const g=cg();ST.turn=0;scene('T1',()=>{winState('closed');const e=addWindow(g);
 const lab=h('div','sub',T.knock);lab.style.cssText='position:absolute;left:0;right:0;bottom:150px;text-align:center';const c=h('div','bottom');const b=btn(T.let_in,'',()=>{lab.remove();c.remove();e.classList.remove('sil');winState('open');A.bell();A.steps(ST_[g.id]||'boots');A.music('talk');talkUI();say(g,entry(g),'mowi');questions(g);step(T.step_ask)});c.append(b);layer.append(lab,c);
 setFace(g,'neutralna');e.classList.add('sil');step(T.step_knock);b.classList.add('pulse');setTimeout(()=>{A.knock(KN[g.id]||'polite');e.classList.add('in')},700);if(!ST._bell){A.doorbell()}ST._bell=0})}
function talkUI(){const s=h('div');s.id='say';const t=h('div');t.id='turns';t.innerHTML='<i></i><i></i><i></i>';const qs=h('div');qs.id='qs';layer.append(s,t,qs)}
let typing=0;
function badge(g){const key=x=>String(x.postac||'').split(/,| i /)[0].trim();const k=key(g);const all=[];Object.keys(DAYS).sort((a,b)=>a-b).forEach(d=>DAYS[d].forEach(id=>all.push(GM[id])));const same=all.filter(x=>key(x)===k);const n=same.indexOf(g)+1,m=same.length;if(m<=1||n===1&&m<=1)return ' · '+T.b_new;return ' · '+(n===1?T.b_new:n===m?T.b_last:T.b_back.replace('{n}',n).replace('{m}',m))}
function say(g,text,m,ton,kto,ask){setFace(g,m,kto);const s=document.getElementById('say');if(!s)return;s.innerHTML='';if(ask)s.append(h('div','ask',T.you_ask+' '+ask));s.append(h('span','lab',who(g,kto)+badge(g)));const sp=h('span');s.append(sp);const id=++typing;let i=0;
 A.mumble(text.length,ton==='niewygodne'||m==='emocja'?.8:.2);
 (function step(){if(id!==typing)return;sp.textContent=text.slice(0,i);if(i++<text.length)setTimeout(step,16);else setTimeout(()=>{if(id===typing&&m==='mowi')setFace(g,'neutralna',kto)},900)})()}
function qlist(g){const tr=g.tury[ST.turn].pytania;const hasSec=x=>x.wymaga&&has(x.wymaga);const base=tr.filter(x=>!x.wymaga);const sec=tr.filter(hasSec);
 if(!sec.length)return base.map(x=>({x,sec:false}));const out=base.map(x=>({x,sec:false}));sec.forEach(s=>{const k=out.map(o=>o.x.ton).lastIndexOf(s.ton);if(k>=0)out.splice(k,1,{x:s,sec:true});else out.push({x:s,sec:true})});return out}
function questions(g){const qs=document.getElementById('qs');qs.innerHTML='';[...document.querySelectorAll('#turns i')].forEach((e,i)=>e.classList.toggle('on',i<ST.turn));
 if(ST.turn>=3){qs.append(btn(T.turn,'pulse',()=>pile(g)));qs.firstChild.focus();const st=document.querySelector('.step');if(st)st.textContent=T.step_turn;return}
 qlist(g).forEach(({x,sec})=>{const b=h('button','q'+(sec?' sec':'')+(ST.day<=2?' pulse':''),(sec?`<small>${T.know}</small>`:'')+x.tekst);b.onclick=()=>{A.tick();ST.turn++;if(x.ustawia)ST.flags[x.ustawia]=1;if(x.mina==='klamie'){A.sting('klamstwo');A.music('tension');setTimeout(()=>A.music('talk'),9000)}say(g,x.odpowiedz,x.mina,x.ton,x.kto,x.tekst);questions(g)};qs.append(b)});qs.firstChild.focus()}

function book(){const ex=document.getElementById('bk');if(ex){ex.remove();return}const o=h('div');o.id='bk';o.className='drawer';o.append(h('div','lab',T.bk_h+' · '+dateStr(ST.day)));const rows=ST.stock.filter(i=>i.day===ST.day&&i.no).sort((a,b)=>a.no-b.no);
 const tb=h('table','bk');tb.innerHTML='<tr><th>№</th><th>godz.</th><th>linia</th><th>opis</th></tr>';rows.forEach(i=>{const m=23*60+40+(i.hh||0),hm=String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');const tr=h('tr');[('0000'+i.no).slice(-4),hm,i.line,nm(i)].forEach(x=>tr.append(h('td',null,x)));tb.append(tr)});
 o.append(tb,h('div','ask',T.bk_note),btn(T.close,'ghost',()=>o.remove()));o.onkeydown=e=>{if(e.key==='Escape'){e.stopPropagation();o.remove()}};layer.append(o);o.querySelector('button').focus()}
function leave(g){A.sfx('refuse');A.sting('klamstwo');ST.c.ludzie=Math.max(0,ST.c.ludzie-1);ST.log.push({id:g.id,a:'odszedl',day:ST.day});ST.flags[g.id+':odszedl']=1;
 scene('T1',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.leave_h),h('div','sub',T.leave_txt.replace('{g}',who(g))),btn(T.next,'pulse',()=>{ST.gi++;ST.gi<DAYS[ST.day].length?waitScene(windowScene):evening()}));layer.append(c)})}
function pile(g){ST.miss=0;ST.pat=5;scene('T3',()=>{winState('closed');const target='g:'+g.id;
 const t=h('div','top');t.append(h('div','lab',T.search),h('p',null,g.rzecz));layer.append(t);step(T.step_pile);
 const toast=h('div','toast','');layer.append(toast);const pips=h('div','pips');pips.setAttribute('aria-label','cierpliwość gościa');const drawPips=()=>{pips.innerHTML='';for(let i=0;i<5;i++)pips.append(h('i',i<ST.pat?'on':''))};drawPips();t.append(pips);const msg=m=>{toast.textContent=m;toast.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(()=>toast.classList.remove('on'),1800)};
 const tabs=h('div','tabs');const field=h('div','field');layer.append(tabs,field);const bkb=btn(T.bk_btn,'ghost',book);bkb.style.cssText='position:absolute;right:30px;top:200px;z-index:30';layer.append(bkb);
 const show=ln=>{field.innerHTML='';[...tabs.children].forEach(b=>b.classList.toggle('on',b.dataset.l===ln));
  let its=ST.stock.filter(i=>(i.at||i.line)===ln);const r=rng(hash(g.id+'p'+ln));
  its=ST.up.regal?its.slice().sort((a,b)=>nm(a).localeCompare(nm(b),'pl')):its.slice().sort(()=>r()-.5);
  field.append(h('div','lab fh',T.line+' '+ln+' · '+its.length+' '+plRz(its.length)+(ST.up.regal?' · '+T.sorted:'')));const grid=h('div','grid');field.append(grid);
  its.forEach(it=>{const sl=h('button','slot'+(it.u===target?' target':''));if(it.u===target)sl.dataset.target=1;const im=new Image();im.src='assets/items/'+it.sprite+'.png';im.draggable=false;im.alt=nm(it);sl.title=nm(it);sl.setAttribute('aria-label',nm(it));sl.append(im,h('span','nm'+((ST.day>2&&!ST.up.regal)?' hid':''),nm(it)),h('span','no','№ '+String(it.no||0).padStart(4,'0')));
   sl.onclick=()=>{A.tick();if(it.u===target){A.sweep();decide(g)}else{ST.miss=(ST.miss||0)+1;ST.pat--;drawPips();sl.classList.add('wrongpick');msg(T.wrong+' '+nm(it)+'.');if(ST.pat<=0){leave(g);return}if(ST.miss>=2){const ti=ST.stock.find(i=>i.u===target);const tb=[...tabs.children].find(b=>ti&&b.dataset.l===(ti.at||ti.line));if(tb)tb.classList.add('hintp')}if(ST.miss>=4)field.querySelectorAll('.slot.target').forEach(x=>x.classList.add('hintp'))}};grid.append(sl)})};
 LINES.forEach(ln=>{const b=h('button','tab',T.line+' '+ln);b.dataset.l=ln;b.onclick=()=>{A.tick();A.sfx('slide_light');show(ln)};tabs.append(b)});show(LINES[0]);
 })}
const SFXA=a=>/^wydaj/.test(a)?'handover':/^odmow/.test(a)?'refuse':/^zadzwon/.test(a)?'phone_old_ring':/^zatrzymaj|depozyt/.test(a)?'drawer_small':'slide_light';
/* jawna tabela skutków: akcja -> [Urząd, Ludzie, bez_wpisu] */
const EFF={};
[['U',1,['rejestr','odmow_zglos','wykaz_paczke','potwierdz_wpis','wpisz_w_biurze','list_przewozowy','wpisz_puszke','wydaj_zapisz','wpisz_wykaz','zetony_victor','depozyt','pokwituj_osobista','archiwum','kartka_odpis','do_kontroli','uzgodnij','victor_od_razu','komplet_zeznan','oficjalny_wykaz','przyjmij_wpis','przyjmij_swiadectwo','wpisz_wstecz','dolacz_kopie','zapisz_mandat','zapisz_zzeznanie','zapisz_zeznanie','zabezpiecz','sprawdz_z_nora','zatrzymaj_do_15','zatrzymaj','zatrzymaj_list','zatrzymaj_koperte','zostaw_zamkniety','przechowaj_z_kwitem','odpis_za_zgoda','rezerwacja_nora','rezerwacja_d22','stahl_odeslij','odeslij','odeslij_wykaz','wpisz_siebie','zaswiadczenie','stahl_wydaj']],
 ['L',1,['wydaj','wydaj_zapisz','wydaj_i_zapisz','wydaj_lenie_cala','wydaj_od_reki','wydaj_z_poucz','wydaj_z_dopiskiem','wydaj_iris','wydaj_nora','wydaj_victor','wydaj_evan','wydaj_lena','przez_okienko','powiadom_rodzine','szept_lenie','maya_sama','lena_zalatwia','ostrzez','powiedz_dario','wiadomosc_zatwierdzona','przyjmij_sprostowanie','sprostowanie_bez_ady','przekaz_w_granicach','zadzwon_szkola','zetony_iris','bez_posrednictwa','kopia_osobno','przekaz_calosc','dolacz_slad','iris_prywatnie','wyloz_400']],
 ['L',-1,['odmow','odmow_zglos','zostaw_otwarte','powiedz_linie','zdradz_szczegol','stahl_odeslij','poza_audytem','czesc_zeznan']],
 ['B',1,['bez','bez_decyzji','wydaj_bez_wpisu','wydaj_cicho','oddaj_bez_wpisu','przyjmij_bez_wpisu','przechowaj_bez_kwitu','koperta','koperta_zapieczetowana','oddaj_samowi','poza_audytem','zniszcz_kopie','jeden_egzemplarz','otworz_szafke']],
 ['U',-1,['koperta','wydaj_cicho','wydaj_bez_wpisu','oddaj_bez_wpisu','przyjmij_bez_wpisu','przechowaj_bez_kwitu','wyloz_400','poza_audytem','zniszcz_kopie','oddaj_samowi','bez','zostaw_otwarte','przekaz_calosc']],
 ['U',-2,['jeden_egzemplarz']],['U',1,['odmow']]
].forEach(([k,v,l])=>l.forEach(a=>{const e=EFF[a]||(EFF[a]=[0,0,0]);if(k==='U')e[0]+=v;else if(k==='L')e[1]+=v;else e[2]+=v}));
const WEZ_U={wez_200_stahl:2,wez_500_iris:2,wez_100_hugo:2,wez_80_kofi:1,wez_120_wycieczka:0};
function bump(a){const c=ST.c,cl=v=>Math.max(0,Math.min(10,v));
 if(a in WEZ_U){ST.thefts++;ST.wez=(ST.wez||0)+1;c.urzad=cl(c.urzad+WEZ_U[a]);return}
 if(/^przywlaszcz|^wez_/.test(a)){ST.wez=(ST.wez||0)+1;c.bez++;ST.thefts++;c.urzad=cl(c.urzad-2);c.ludzie=cl(c.ludzie-2);return}
 const e=EFF[a]||(/^wyloz/.test(a)?[-1,1,0]:/^wydaj/.test(a)?[0,1,0]:[0,0,0]);c.urzad=cl(c.urzad+e[0]);c.ludzie=cl(c.ludzie+e[1]);c.bez+=e[2]}
function payFx(n){const w=document.querySelector('.wallet');const b=w&&w.querySelector('b');const f=h('div','payfx'+(n>40?' big':''),(n>=0?'+ ':'− ')+T.dollar+Math.abs(n));layer.append(f);A.sfx(n>60?'wallet_open':'lock_small');
 setTimeout(()=>{f.classList.add('fly')},30);setTimeout(()=>{f.remove();if(b){b.textContent=T.dollar+ST.money;w.classList.add('bump');setTimeout(()=>w.classList.remove('bump'),500)}},1100)}
function decide(g){A.music('tension');scene('T1',()=>{winState('open');const e=addWindow(g);setFace(g,'neutralna');e.classList.add('in');talkUI();document.getElementById('turns').remove();const s=document.getElementById('say');s.innerHTML='';s.style.width='600px';s.append(h('span','lab',''),document.createTextNode(T.decide));
 const it=itemEl(g,190);it.id='onDesk';it.style.left='700px';it.style.top='690px';it.classList.add('pulsei');layer.append(it);step(T.step_decide);const acts=g.decyzje.filter(d=>has(d.wymaga)).map(d=>d.akcja);let done=false;
 const zones=h('div','zones'+(acts.length>3?' many':''));layer.append(zones);
 const finish=a=>{if(done)return;done=true;A.sting('decyzja');A.music('day');A.stamp();A.sfx(SFXA(a));const d=g.decyzje.find(x=>x.akcja===a);if(/^wydaj|^przywlaszcz|^wez_/.test(a)){it.remove();ST.stock=ST.stock.filter(i=>i.u!=='g:'+g.id)}else it.classList.add('away');
  ST.clk=(ST.clk||0)+20;ST.log.push({id:g.id,a,day:ST.day});if(g.id==='d25_ksiega')ST.flags['gest:'+({wpisz_siebie:'wpisz'}[a]||a)]=1;if(a==='list')try{localStorage.setItem('okienko_last_letter','1')}catch(e){};ST.flags[g.id+':'+a]=1;bump(a);ST.pending.push({due:ST.day+(d.echo.za_dni||1),item:g.itemName,a:d.etykieta||a,echo:d.echo.tekst,forma:d.echo.forma});ST.money+=40+(d.kasa||0);
  zones.remove();payFx(40+(d.kasa||0));say(g,d.reakcja,'neutralna',null,d.kto);const sum=h('div','sum');sum.append(h('div',null,'+ '+d.zysk),h('div','minus','− '+d.strata));if(d.kasa)sum.append(h('div',null,(d.kasa>0?'+ ':'− ')+T.dollar+Math.abs(d.kasa)));layer.append(sum);const qs=document.getElementById('qs');qs.innerHTML='';
  qs.append(btn(T.next,'',()=>{document.getElementById('guest').classList.remove('in');ST.gi++;setTimeout(()=>ST.gi<DAYS[ST.day].length?waitScene(windowScene):evening(),500)}));qs.firstChild.focus()};
 const LB={wydaj:T.wydaj,odmow:T.odmow,zatrzymaj:T.zatrzymaj,zadzwon:T.zadzwon};
 g.decyzje.filter(d=>has(d.wymaga)).forEach(d=>{const lab=d.etykieta||LB[d.akcja]||d.akcja;const z=h('button','zone z-'+d.akcja+(lab.length>30?' long':''),lab);z.dataset.a=d.akcja;z.onclick=()=>finish(d.akcja);zones.append(z)});
 const glassAct=acts.find(a=>/^wydaj/.test(a));
 let sx,sy,ox,oy;it.style.cursor='grab';it.style.touchAction='none';it.onpointerdown=ev=>{it.setPointerCapture(ev.pointerId);sx=ev.clientX;sy=ev.clientY;ox=parseFloat(it.style.left)||700;oy=parseFloat(it.style.top)||690};
 it.onpointermove=ev=>{if(sx==null)return;const s=+stage.dataset.s;it.style.left=ox+(ev.clientX-sx)/s+'px';it.style.top=oy+(ev.clientY-sy)/s+'px'};
 it.onpointerup=ev=>{if(sx==null)return;sx=null;const r=it.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  const hit=[...zones.children].find(z=>{const b=z.getBoundingClientRect();return cx>b.left&&cx<b.right&&cy>b.top&&cy<b.bottom});
  const gr=document.getElementById('glass').getBoundingClientRect();
  if(hit)finish(hit.dataset.a);else if(glassAct&&cx>gr.left&&cx<gr.right&&cy>gr.top&&cy<gr.bottom)finish(glassAct);else{it.style.left='700px';it.style.top='690px'}}})}
/* dzień 25: gest finałowy */
function ledger(){A.music('tension');scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.ledger_h),h('div','sub',T.ledger_s));
 [['wpisz',T.ledger_write.replace('{n}',ST.name||T.name_def),'newspaper'],['wyrwij',T.ledger_tear,'trapdoor'],['list',T.ledger_letter,'drawer_small'],['zamknij',T.ledger_close,'door_lock_day_end']].forEach(([k,l,sf])=>c.append(btn(l,k==='wyrwij'?'':'ghost',()=>{ST.flags['gest:'+k]=1;if(k==='list')try{localStorage.setItem('okienko_last_letter','1')}catch(e){};A.sfx(sf);A.sting(k==='wyrwij'?'klamstwo':'decyzja');evening()})));layer.append(c)})}
function nameScene(next){scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.name_h),h('div','sub',T.name_s));const i=document.createElement('input');i.type='text';i.maxLength=24;i.className='nameinp';i.placeholder=T.name_p;c.append(i,btn(T.name_ok,'pulse',()=>{ST.name=(i.value||'').trim()||T.name_def;next()}));layer.append(c);i.focus()})}
function evening(){if(ST.day===20&&!ST.name)return nameScene(evening);A.sfx('newspaper');const due=ST.pending.filter(p=>p.due<=ST.day&&!ST.shown.includes(p));scene('T5',()=>{winState('closed');const t=h('div','top');t.append(h('div','lab',T.evening+' '+T.day+' '+ST.day));layer.append(t);const w=h('div','letters');
 (EV[ST.day]||[]).forEach(n=>{const l=h('div','letter');l.append(h('span','lab',T.eve_note+' · '+n.kto),document.createTextNode(n.tekst));w.append(l)});
 due.forEach(p=>{ST.shown.push(p);const l=h('div','letter');l.append(h('span','lab',p.item+' · '+p.a),document.createTextNode(p.echo));w.append(l)});if(!w.children.length)w.append(h('div','letter',T.nomail));if(T.dt&&T.dt[ST.day]&&ST.day<FINAL){const hk=h('div','letter hook');hk.append(h('span','lab',T.tomorrow),document.createTextNode(T.dt[ST.day]));w.append(hk)}layer.append(w);
 const f=h('div','foot');f.append(h('div',null,T.dollar+ST.money));f.append(btn(ST.day%5===0?T.week_h:T.next_day,'pulse',()=>{A.sfx('door_lock_day_end');ST.day%5===0?saturday():(ST.day++,day())}));layer.append(f)})}
function evict(){A.music('sobota');A.sting('koniec');scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.evict_h),h('div','sub',T.evict_txt.replace('{d}',-ST.money)),btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()}));layer.append(c)})}
function nextAfterSat(){if(ST.flags.eksmisja)return evict();ST.day++;if(ST.day>FINAL)return ending();if(!DAYS[ST.day])return week();day()}
function saturday(){A.music('sobota');A.sting('dzien_koniec');const rent=150,bl=bills(weekOf());ST.money-=rent+bl;let audit='';if(ST.thefts>0&&rng(hash('audyt'+ST.day))()<Math.min(.9,.45*ST.thefts)){if(!ST.flags.audyt_ostrz){ST.flags.audyt_ostrz=1;audit=T.audit_warn;ST.thefts=0}else{const fine=60*ST.thefts;ST.money-=fine;ST.c.urzad=Math.max(0,ST.c.urzad-2);ST.flags['audyt:wpadka']=1;audit=T.audit.replace('{f}',fine);ST.thefts=0}}if(ST.money<0){const it=Math.ceil(-ST.money*.1);ST.money-=it;audit+=(audit?' ':'')+T.interest.replace('{i}',it);if(ST.money<-350)ST.flags.eksmisja=1}scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.week_h),h('div','sub',`${T.rent}: ${T.dollar}${rent}. ${T.bills}: ${T.dollar}${bl}. ${T.balance}: ${T.dollar}${ST.money}.`+(ST.money<0?' '+T.debt:'')),h('div','sub',`${T.urzad}: ${ST.c.urzad}/10 · ${T.ludzie}: ${ST.c.ludzie}/10`));
 if(audit)c.append(h('div','sub audit',audit));if(ST.day===5)c.append(h('div','sub',T.drawer));
 const w=h('div','ups');w.append(h('div','lab',T.up_h));
 Object.keys(UP).forEach(k=>{const own=ST.up[k];const b=btn(T['up_'+k]+(own?' ('+T.owned+')':' · '+T.dollar+UP[k]),'ghost',()=>{if(own||ST.money<UP[k])return;ST.money-=UP[k];ST.up[k]=1;if(k==='drzwi')A.setDoor(true);b.textContent=T['up_'+k]+' ('+T.owned+')';[...w.querySelectorAll('button')].forEach(x=>x.disabled=true);save()});b.disabled=!!own||ST.money<UP[k];w.append(b)});
 w.append(btn(T.up_none,'ghost',()=>{}));if(ST.day<FINAL)c.append(w);
 c.append(btn(ST.day>=FINAL?T.final_h:(DAYS[ST.day+1]?T.week2:T.end),'pulse',nextAfterSat));layer.append(c)})}
function week(){A.sting('koniec');scene('T5',()=>{const c=h('div','center dark');c.append(h('h1',null,T.week_h),h('div','sub',T.end),h('div','sub',`${T.balance}: ${T.dollar}${ST.money} · Ekspozycja ${ST.c.urzad}/10 · ${T.ludzie} ${ST.c.ludzie}/10`));const left=ST.pending.filter(p=>!ST.shown.includes(p));
 if(left.length){const w=h('div','letters');w.style.cssText='position:relative;padding:20px;inset:auto';left.slice(0,3).forEach(p=>{const l=h('div','letter');l.append(h('span','lab',p.item+' · '+p.a),document.createTextNode(p.echo));w.append(l)});c.append(w)}
 c.append(btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()}));layer.append(c)})}
/* zakończenia: liczone z decyzji (log) wg koncept/fabula_25_dni.md §8 */
function mayaTesty(){return [[11,'przez_okienko'],[16,'maya_sama'],[21,'wiadomosc_zatwierdzona']].filter(([d,a])=>did(d,a)).length}
function kopieNames(){const L=[];if(did(5,'wykaz_paczke')||did(9,'zetony_victor'))L.push('Gus (0412)');if(did(9,'zetony_victor')||did(22,'stahl_wydaj'))L.push('Maya (0517)');if(did(9,'zetony_victor')||did(15,'victor_od_razu'))L.push('Linh (0623)');if(did(9,'zetony_victor')||did(18,'do_kontroli'))L.push('Dorian (0731)');return L}
function fk(t){const N=kopieNames();return String(t==null?'':t).replace('{min(4, kopie)}',N.length).replace('{kopie}',N.length)}
const KOPIE_A=['wykaz_paczke','zetony_victor','victor_od_razu','do_kontroli','komplet_zeznan','wez_200_stahl','dolacz_kopie','wpisz_wykaz'];
const kopie=()=>ST.log.filter(l=>KOPIE_A.includes(l.a)).length;
const did=(d,...a)=>ST.log.some(l=>l.day===d&&a.includes(l.a));
function endings(){
 const zag=(did(11,'powiadom_rodzine')||did(17,'zdradz_szczegol')||did(14,'bez')||did(22,'zostaw_otwarte'))?'C':(did(16,'maya_sama')&&did(21,'wiadomosc_zatwierdzona')&&did(22,'przekaz_w_granicach'))?'A':'B';
 const src2=did(8,'kopia_osobno')||did(19,'przyjmij_sprostowanie');
 const skr=(did(23,'wydaj_nora')&&did(18,'rezerwacja_nora')&&did(12,'zabezpiecz','sprawdz_z_nora'))?(src2?'A':'A2'):(did(23,'wydaj_victor')&&did(18,'do_kontroli')&&(did(9,'zetony_victor')||did(12,'zabezpiecz')||did(5,'wykaz_paczke')))?'B':'C';
 const pop=(did(15,'uzgodnij')&&did(20,'komplet_zeznan')&&did(25,'dolacz_kopie')&&(did(13,'odpis_za_zgoda')||did(19,'przyjmij_sprostowanie')))?'A':(did(15,'victor_od_razu')&&(did(20,'poza_audytem')||did(23,'wydaj_victor')))?'C':'B';
 const sam=[did(4,'koperta','wydaj_cicho'),did(12,'wyloz_400'),ST.c.bez>=3,(ST.wez||0)>=2].filter(Boolean).length>=2;
 const gz=k=>!!ST.flags['gest:'+k];const tear=gz('wyrwij');
 const odeb=gz('list')&&has('notatki_3')&&did(15,'uzgodnij')&&['A','A2','B'].includes(skr)&&zag!=='C'&&kopie()<=1;
 const ep=tear?'wyrwana':odeb?'odebrany':(gz('wpisz')||gz('list'))?'rotacja':sam?'nowysam':ST.c.urzad>=7&&kopie()>=2?'referent':'zostajesz';
 const el=ep==='nowysam'||tear?'N':pop;
 return{zag,skr,pop,ep,tear,el}}
function thr(E){const d=h('div','threads');d.append(h('span','lab',T.th_bar));[[T.th_sam,did(15,'uzgodnij')],[T.th_maya,mayaTesty()>=2],[T.th_skr2,['A','A2','B'].includes(E.skr)],[T.th_notes,has('notatki_3')],[T.th_list,!!ST.flags['gest:list']]].forEach(([l,on])=>d.append(h('i',on?'on':'',l)));return d}
function ending(){A.music('sobota');A.sting('koniec');const E=endings();scene('T5',()=>{winState('closed');const c=h('div','center dark');c.style.cssText+=';overflow:auto;justify-content:flex-start;padding-top:70px';c.append(h('h1',null,T.final_h));
 [['th_kopie',null],['ledger_b','gest_'+(E.tear?'wyrwij':ST.flags['gest:wpisz']?'wpisz':ST.flags['gest:list']?'list':'zamknij')],['th_zag','end_zag_'+E.zag],['th_skr','end_skr_'+E.skr],['th_pop','end_pop_'+E.pop],['you','ep_'+E.ep+(E.ep==='rotacja'&&ST.flags['gest:list']?'_lb':'')+(E.ep==='odebrany'&&mayaTesty()>=2?'_m':'')]].forEach(([th,k])=>{const p=h('div','letter');p.style.cssText='max-width:900px;flex:none;transform:none';p.append(h('span','lab',T[th]),document.createTextNode(k?((T[k]||T[k.replace('_tear','')]||'').replace('{imie}',ST.name||T.name_def)):T.kopie_txt.replace('{n}',kopieNames().length).replace('{m}',kopieNames().length)+(kopieNames().length?' '+T.kopie_l+kopieNames().join(', ')+'.':' '+T.kopie_0)));c.append(p)});
 const ek={wyrwana:'wyrwana_strona',nowysam:'nowy_sam',referent:'referent',odebrany:'odebrany',rotacja:ST.flags['gest:list']?'rotacja_list_bez_warunkow':'rotacja',zostajesz:'zostajesz'}[E.ep];const p=h('div','sub',T['epi_'+ek]?T['epi_'+ek].replace('[imię]',ST.name||T.name_def):T.elias+': '+T['elias_'+E.el]);c.append(p,h('div','sub',`${T.balance}: ${T.dollar}${ST.money} · Ekspozycja ${ST.c.urzad}/10 · ${T.ludzie} ${ST.c.ludzie}/10`),thr(E),btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()}));layer.append(c)})}
window.__E=endings;
window.__S=ST;window.__G=()=>ST;title();
})();
