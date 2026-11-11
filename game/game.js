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
 if(inGame){const w=h('div','wallet'+(ST.money<0?' neg':''));w.innerHTML=`<b>${T.dollar}${ST.money}</b><span>${T.due}: ${T.dollar}${dueNow()}</span>`;layer.append(w);if(ST.notes&&ST.notes.length){const n=h('button','notes','✎ '+T.notes_b+' '+ST.notes.length+'/5');n.onclick=()=>notebook();layer.append(n)}}}
function notebook(){if(document.getElementById('nb'))return;const o=h('div');o.id='nb';o.className='tut';const p=h('div','panel');p.append(h('div','lab',T.notes_h));ST.notes.forEach(id=>p.append(h('div','ask',ST.noteTxt[id])));const prev=document.activeElement;const cl=()=>{o.remove();if(prev&&prev.focus&&document.contains(prev))prev.focus()};p.append(btn(T.close,'',cl));o.append(p);o.onkeydown=e=>{if(e.key==='Tab'){const f=[...o.querySelectorAll('input,button')];const i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus()}};stage.append(o);o.querySelector('input').focus()}
function step(txt){const e=h('div','step',txt);e.setAttribute('role','status');layer.append(e);return e}
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
function setFace(g,m,kto){const e=document.getElementById('guest');if(!e)return;e.dataset.mina=m;const fc=(kto&&g.face2&&kto in g.face2)?g.face2[kto]:g.face;if(fc){e.style.backgroundImage=`url(assets/ppl/${fc}_${m}.jpg)`;e.textContent='';e.className=e.className.replace(/\bph\b/,'')}else{e.style.backgroundImage='none';if(!/\bph\b/.test(e.className))e.className+=' ph';e.innerHTML=`<div class="phname">${who(g,kto)}</div><div class="phmina">${m}</div>`}}
function addWindow(g){const e=h('div');e.id='guest';const gl=h('div');gl.id='glass';layer.append(e,gl);return e}
function winState(s){A.setWindow(s)}
/* przebieg */
function title(){A.music('menu');ST=fresh();const sv=load();scene('T2',()=>{winState('closed');const c=h('div','center');c.append(h('h1',null,T.title),h('div','sub',T.sub));
 const b=btn(T.start,'pulse',()=>{A.init();lampLoop();ST=fresh();prolog()});c.append(b);if(sv)c.append(btn('Kontynuuj: dzień '+sv.day,'ghost',()=>{A.init();lampLoop();inGame=true;ST=sv;day()}));layer.append(c)})}
function seedStock(){ST.stock=[];const r=rng(hash('stock0'));LINES.forEach(ln=>{for(let i=0;i<3;i++)ST.stock.push({u:'f0'+ln+i,sprite:FILL[(r()*FILL.length)|0],line:ln,day:0,filler:1})})}
function addDay(){const d=ST.day;if(!ST.stock)seedStock();if(ST.stocked[d])return;ST.stocked[d]=1;const r=rng(hash('stk'+d));const sh=ST.storm[d]||0;
 const add=it=>{it.line=sh?LINES[(LINES.indexOf(it.line)+sh)%3]:it.line;it.day=d;ST.stock.push(it)};
 (DAYS[d]||[]).forEach(id=>{const g=GM[id];add({u:'g:'+id,sprite:g.sprite,line:g.line,gid:id});add({u:'s:'+id,sprite:SIM[g.sprite]||FILL[(r()*FILL.length)|0],line:g.line,filler:1})});
 if(XT[d])add({u:'x:'+d,sprite:XT[d].sprite,line:XT[d].line,gid:'x'+d});
 for(let i=0;i<2;i++)add({u:'f'+d+'_'+i,sprite:FILL[(r()*FILL.length)|0],line:LINES[(r()*3)|0],filler:1});
 const cap=ST.up.regal?9:7;LINES.forEach(ln=>{let n=ST.stock.filter(i=>i.line===ln);while(n.length>cap){const k=n.find(i=>i.filler&&i.day<d);if(!k)break;ST.stock=ST.stock.filter(i=>i!==k);n=n.filter(i=>i!==k)}})}
function prolog(){scene('T2',()=>{winState('closed');const c=h('div','center dark');const p=h('div','letter');p.style.cssText='max-width:900px;transform:rotate(-1deg);flex:none';
 p.append(h('span','lab',T.pr1_lab),h('div',null,T.pr1_txt));const strip=btn(T.pr1_strip,'pulse',()=>{A.sfx('newspaper');strip.remove();const st=h('div','sub',T.pr1_num);c.insertBefore(st,nx);nx.style.display='';nx.focus()});
 const nx=btn(T.pr1_next,'pulse',()=>prolog2());nx.style.display='none';c.append(p,strip,nx);layer.append(c);step(T.pr1_step)})}
function prolog2(){scene('T2',()=>{winState('closed');const c=h('div','center dark');const p=h('div','letter');p.style.cssText='max-width:900px;transform:rotate(.8deg);flex:none';p.append(h('span','lab',T.pr2_lab));T.pr2_rows.forEach(r=>p.append(h('div','row2',r)));
 c.append(p,btn(T.pr2_btn,'pulse',()=>{inGame=true;day()}));layer.append(c);step(T.pr2_step)})}
function dayItems(){return ST.stock.filter(i=>i.day===ST.day&&i.gid).map(i=>({id:i.gid,g:i.gid[0]==='x'?XT[ST.day]:GM[i.gid],line:i.line,u:i.u}))}
function day(){ST.gi=0;ST.inspected=false;if(STORM_DAYS.includes(ST.day)&&!ST.storm[ST.day])ST.storm[ST.day]=1+(rng(hash('burza'+ST.day))()<.5?1:0);A.setDoor(!!ST.up.drzwi);if(DAYS[ST.day])addDay();save();if(!DAYS[ST.day])return week();delivery()}
function plRz(n){return n===1?'rzecz':'rzeczy'}
function delivery(){A.music('day');if(ST.gi===0&&!ST.inspected)A.sting('dzien_start');scene('T4',()=>{winState('closed');A.sfx('delivery_tram');const items=dayItems();
 const t=h('div','top');t.append(h('div','lab',T.day+' '+ST.day+' · '+dateStr(ST.day)+' · 23:40'),h('div','dtitle',dayTitle(ST.day)),h('p',null,T.delivery.replace('{n}',items.length).replace('{rz}',plRz(items.length))+(ST.storm[ST.day]?' '+T.storm:'')));layer.append(t);if(ST.storm[ST.day])setTimeout(()=>{A.thunder();A.sting('wydarzenie')},600);
 step(T.step_delivery);
 LINES.forEach((ln,ci)=>{const col=h('div','crate');col.style.left=(120+ci*470)+'px';col.append(h('div','lab',T.line+' '+ln));
  items.filter(x=>x.line===ln).forEach(x=>{const z=h('button','zguba');z.append(itemEl(x.g,170),h('span','tag',NAMEPL[x.g.sprite]||x.g.itemName),h('span','btn pulse',T.look));z.onclick=()=>{if(ST.inspected)return;A.tick();inspect(x)};col.append(z)});
  col.append(h('div','cnt',T.stock+': '+ST.stock.filter(i=>i.line===ln).length));layer.append(col)});
 const b=h('div','bottom');b.append(btn(T.skip,'ghost',()=>windowScene()));layer.append(b);
 if(ST.day===1){const k=h('div','kartka');k.append(h('div','lab',T.kartka_h));const ol=h('ol');T.tut_l.forEach(x=>ol.append(h('li',null,x)));k.append(ol);layer.append(k)}})}
function inspect(x){const g=x.g,sec=(g.wnetrze||[])[0];ST.inspected=true;scene(null,()=>{winState('closed');const w=h('div','inspect');const p=h('div','pic');const r=rng(hash(x.id+'hot'));const hot=h('button','hot');
 if(g.inside){p.className='pic inside';p.style.backgroundImage=`url(assets/in/${g.inside.img}.jpg)`;hot.style.left=g.inside.x*100+'%';hot.style.top=g.inside.y*100+'%'}else{p.append(itemEl(g,520));hot.style.left=(30+r()*40)+'%';hot.style.top=(30+r()*40)+'%'}p.append(hot);w.append(p);
 const hint=step(T.step_inspect);w.append(h('div','lab insp',NAMEPL[g.sprite]||g.itemName));layer.append(w);setTimeout(()=>{if(!hot.classList.contains('found'))hot.classList.add('warm')},9000);
 let miss=0;p.onclick=e=>{if(e.target===hot||hot.classList.contains('found'))return;miss++;A.tick();if(miss>=3)hot.classList.add('warm')};
 const done=()=>{const n=h('div','note');n.append(h('span','lab',sec?T.found:''),document.createTextNode(sec?sec.co_widac:T.nothing));n.append(btn(T.open,'',()=>windowScene()));w.append(n);n.querySelector('button').focus()};
 hot.onclick=e=>{e.stopPropagation();if(hot.classList.contains('found'))return;if(sec)A.sting('sekret');hot.classList.add('found');A.tick();A.sfx('lock_small');hint.remove();if(sec){ST.secrets[sec.sekret_id]=1;if(/S\.H\./.test(sec.co_widac)){ST.notes=ST.notes||[];if(!ST.notes.includes(sec.sekret_id)){ST.notes.push(sec.sekret_id);ST.noteTxt=ST.noteTxt||{};ST.noteTxt[sec.sekret_id]=sec.co_widac}}done()}else done()}})}
const has=w=>!w||String(w).split('|').some(k=>ST.secrets[k]||ST.flags[k]);
function entry(g){const wj=g.wejscie_jesli||{};const k=Object.keys(wj).find(k=>ST.flags[k]);return k?wj[k]:g.wejscie}
function who(g,kto){return(kto&&g.ludzie&&g.ludzie[kto])||g.postac}
function cg(){return GM[DAYS[ST.day][ST.gi]]}
function windowScene(){const g=cg();ST.turn=0;scene('T1',()=>{winState('closed');const e=addWindow(g);
 const lab=h('div','sub',T.knock);lab.style.cssText='position:absolute;left:0;right:0;bottom:150px;text-align:center';const c=h('div','bottom');const b=btn(T.let_in,'',()=>{lab.remove();c.remove();e.classList.remove('sil');winState('open');A.bell();A.steps(ST_[g.id]||'boots');A.music('talk');talkUI();say(g,entry(g),'mowi');questions(g);step(T.step_ask)});c.append(b);layer.append(lab,c);
 setFace(g,'neutralna');e.classList.add('sil');step(T.step_knock);b.classList.add('pulse');setTimeout(()=>{A.knock(KN[g.id]||'polite');e.classList.add('in')},700)})}
function talkUI(){const s=h('div');s.id='say';const t=h('div');t.id='turns';t.innerHTML='<i></i><i></i><i></i>';const qs=h('div');qs.id='qs';layer.append(s,t,qs)}
let typing=0;
function say(g,text,m,ton,kto,ask){setFace(g,m,kto);const s=document.getElementById('say');if(!s)return;s.innerHTML='';if(ask)s.append(h('div','ask',T.you_ask+' '+ask));s.append(h('span','lab',who(g,kto)));const sp=h('span');s.append(sp);const id=++typing;let i=0;
 A.mumble(text.length,ton==='niewygodne'||m==='emocja'?.8:.2);
 (function step(){if(id!==typing)return;sp.textContent=text.slice(0,i);if(i++<text.length)setTimeout(step,16);else setTimeout(()=>{if(id===typing&&m==='mowi')setFace(g,'neutralna',kto)},900)})()}
function qlist(g){const tr=g.tury[ST.turn].pytania;const hasSec=x=>x.wymaga&&has(x.wymaga);const base=tr.filter(x=>!x.wymaga);const sec=tr.filter(hasSec);
 if(!sec.length)return base.map(x=>({x,sec:false}));const out=base.map(x=>({x,sec:false}));sec.forEach(s=>{const k=out.map(o=>o.x.ton).lastIndexOf(s.ton);if(k>=0)out.splice(k,1,{x:s,sec:true});else out.push({x:s,sec:true})});return out}
function questions(g){const qs=document.getElementById('qs');qs.innerHTML='';[...document.querySelectorAll('#turns i')].forEach((e,i)=>e.classList.toggle('on',i<ST.turn));
 if(ST.turn>=3){qs.append(btn(T.turn,'pulse',()=>pile(g)));qs.firstChild.focus();const st=document.querySelector('.step');if(st)st.textContent=T.step_turn;return}
 qlist(g).forEach(({x,sec})=>{const b=h('button','q'+(sec?' sec':'')+(ST.day<=2?' pulse':''),(sec?`<small>${T.know}</small>`:'')+x.tekst);b.onclick=()=>{A.tick();ST.turn++;if(x.ustawia)ST.flags[x.ustawia]=1;if(x.mina==='klamie'){A.sting('klamstwo');A.music('tension');setTimeout(()=>A.music('talk'),9000)}say(g,x.odpowiedz,x.mina,x.ton,x.kto,x.tekst);questions(g)};qs.append(b)});qs.firstChild.focus()}
function pile(g){ST.miss=0;scene('T3',()=>{winState('closed');const target='g:'+g.id;
 const t=h('div','top');t.append(h('div','lab',T.search),h('p',null,g.rzecz));layer.append(t);step(T.step_pile);
 const toast=h('div','toast','');layer.append(toast);const msg=m=>{toast.textContent=m;toast.classList.add('on');setTimeout(()=>toast.classList.remove('on'),1400)};
 const tabs=h('div','tabs');const field=h('div','field');layer.append(tabs,field);
 const show=ln=>{field.innerHTML='';[...tabs.children].forEach(b=>b.classList.toggle('on',b.dataset.l===ln));
  let its=ST.stock.filter(i=>i.line===ln);const r=rng(hash(g.id+'p'+ln));
  its=ST.up.regal?its.slice().sort((a,b)=>nm(a).localeCompare(nm(b),'pl')):its.slice().sort(()=>r()-.5);
  field.append(h('div','lab fh',T.line+' '+ln+' · '+its.length+' '+plRz(its.length)+(ST.up.regal?' · '+T.sorted:'')));const grid=h('div','grid');field.append(grid);
  its.forEach(it=>{const sl=h('button','slot'+(it.u===target?' target':''));if(it.u===target)sl.dataset.target=1;const im=new Image();im.src='assets/items/'+it.sprite+'.png';im.draggable=false;im.alt=nm(it);sl.append(im,h('span','nm',nm(it)));
   sl.onclick=()=>{A.tick();if(it.u===target){A.sweep();decide(g)}else{ST.miss=(ST.miss||0)+1;msg(T.wrong+' '+nm(it)+'.');if(ST.miss>=3){const ti=ST.stock.find(i=>i.u===target);const tb=[...tabs.children].find(b=>ti&&b.dataset.l===ti.line);if(tb)tb.classList.add('hintp')}if(ST.miss>=6)field.querySelectorAll('.slot.target').forEach(x=>x.classList.add('hintp'))}};grid.append(sl)})};
 LINES.forEach(ln=>{const b=h('button','tab',T.line+' '+ln);b.dataset.l=ln;b.onclick=()=>{A.tick();A.sfx('slide_light');show(ln)};tabs.append(b)});show(LINES[0]);
 })}
const SFXA=a=>/^wydaj/.test(a)?'handover':/^odmow/.test(a)?'refuse':/^zadzwon/.test(a)?'phone_old_ring':/^zatrzymaj|depozyt/.test(a)?'drawer_small':'slide_light';
function bump(a){const c=ST.c,cl=v=>Math.max(0,Math.min(10,v));
 if(/^przywlaszcz/.test(a)){c.bez++;ST.thefts++;c.urzad=cl(c.urzad-2);c.ludzie=cl(c.ludzie-2);return}
 if(/cicho|bez_wpisu|koperta/.test(a)){c.bez++;c.urzad=cl(c.urzad-1)}
 else if(/^wyloz/.test(a)){c.ludzie=cl(c.ludzie+1);c.urzad=cl(c.urzad-1)}
 else if(/^wydaj/.test(a))c.ludzie=cl(c.ludzie+1);
 else if(/^odmow/.test(a)){c.urzad=cl(c.urzad+1);c.ludzie=cl(c.ludzie-1)}
 else if(/zatrzymaj|do_kontroli|victor|oficjalny|archiwum|uzgodnij|komplet|dolacz|rezerwacja|zglos|depozyt|zetony|pokwituj|sprawdz|zabezpiecz|zasloń|zaslon/.test(a))c.urzad=cl(c.urzad+1)}
function decide(g){A.music('tension');scene('T1',()=>{winState('open');const e=addWindow(g);setFace(g,'neutralna');e.classList.add('in');talkUI();document.getElementById('turns').remove();const s=document.getElementById('say');s.innerHTML='';s.style.width='600px';s.append(h('span','lab',''),document.createTextNode(T.decide));
 const it=itemEl(g,190);it.id='onDesk';it.style.left='700px';it.style.top='690px';it.classList.add('pulsei');layer.append(it);step(T.step_decide);const acts=g.decyzje.map(d=>d.akcja);let done=false;
 const zones=h('div','zones'+(acts.length>3?' many':''));layer.append(zones);
 const finish=a=>{if(done)return;done=true;A.sting('decyzja');A.music('day');A.stamp();A.sfx(SFXA(a));const d=g.decyzje.find(x=>x.akcja===a);if(/^wydaj|^przywlaszcz/.test(a)){it.remove();ST.stock=ST.stock.filter(i=>i.u!=='g:'+g.id)}else it.classList.add('away');
  ST.log.push({id:g.id,a,day:ST.day});ST.flags[g.id+':'+a]=1;bump(a);ST.pending.push({due:ST.day+(d.echo.za_dni||1),item:g.itemName,a:d.etykieta||a,echo:d.echo.tekst,forma:d.echo.forma});ST.money+=40+(d.kasa||0);
  zones.remove();say(g,d.reakcja,'neutralna',null,d.kto);const sum=h('div','sum');sum.append(h('div',null,'+ '+d.zysk),h('div','minus','− '+d.strata));if(d.kasa)sum.append(h('div',null,(d.kasa>0?'+ ':'− ')+T.dollar+Math.abs(d.kasa)));layer.append(sum);const qs=document.getElementById('qs');qs.innerHTML='';
  qs.append(btn(T.next,'',()=>{document.getElementById('guest').classList.remove('in');ST.gi++;setTimeout(()=>ST.gi<DAYS[ST.day].length?windowScene():(ST.day===FINAL?ledger():evening()),500)}));qs.firstChild.focus()};
 const LB={wydaj:T.wydaj,odmow:T.odmow,zatrzymaj:T.zatrzymaj,zadzwon:T.zadzwon};
 g.decyzje.forEach(d=>{const lab=d.etykieta||LB[d.akcja]||d.akcja;const z=h('button','zone z-'+d.akcja+(lab.length>30?' long':''),lab);z.dataset.a=d.akcja;z.onclick=()=>finish(d.akcja);zones.append(z)});
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
 due.forEach(p=>{ST.shown.push(p);const l=h('div','letter');l.append(h('span','lab',p.item+' · '+p.a),document.createTextNode(p.echo));w.append(l)});if(!w.children.length)w.append(h('div','letter',T.nomail));layer.append(w);
 const f=h('div','foot');f.append(h('div',null,T.dollar+ST.money));f.append(btn(ST.day%5===0?T.week_h:T.next_day,'pulse',()=>{A.sfx('door_lock_day_end');ST.day%5===0?saturday():(ST.day++,day())}));layer.append(f)})}
function nextAfterSat(){ST.day++;if(ST.day>FINAL)return ending();if(!DAYS[ST.day])return week();day()}
function saturday(){A.music('sobota');A.sting('dzien_koniec');const rent=150,bl=bills(weekOf());ST.money-=rent+bl;let audit='';if(ST.thefts>0&&rng(hash('audyt'+ST.day))()<Math.min(.9,.45*ST.thefts)){const fine=60*ST.thefts;ST.money-=fine;ST.c.urzad=Math.max(0,ST.c.urzad-2);ST.flags['audyt:wpadka']=1;audit=T.audit.replace('{f}',fine);ST.thefts=0}scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.week_h),h('div','sub',`${T.rent}: ${T.dollar}${rent}. ${T.bills}: ${T.dollar}${bl}. ${T.balance}: ${T.dollar}${ST.money}.`+(ST.money<0?' '+T.debt:'')),h('div','sub',`${T.urzad}: ${ST.c.urzad}/10 · ${T.ludzie}: ${ST.c.ludzie}/10`));
 if(audit)c.append(h('div','sub audit',audit));if(ST.day===5)c.append(h('div','sub',T.drawer));
 const w=h('div','ups');w.append(h('div','lab',T.up_h));
 Object.keys(UP).forEach(k=>{const own=ST.up[k];const b=btn(T['up_'+k]+(own?' ('+T.owned+')':' · '+T.dollar+UP[k]),'ghost',()=>{if(own||ST.money<UP[k])return;ST.money-=UP[k];ST.up[k]=1;if(k==='drzwi')A.setDoor(true);b.textContent=T['up_'+k]+' ('+T.owned+')';[...w.querySelectorAll('button')].forEach(x=>x.disabled=true);save()});b.disabled=!!own||ST.money<UP[k];w.append(b)});
 w.append(btn(T.up_none,'ghost',()=>{}));if(ST.day<FINAL)c.append(w);
 c.append(btn(ST.day>=FINAL?T.final_h:(DAYS[ST.day+1]?T.week2:T.end),'pulse',nextAfterSat));layer.append(c)})}
function week(){A.sting('koniec');scene('T5',()=>{const c=h('div','center dark');c.append(h('h1',null,T.week_h),h('div','sub',T.end),h('div','sub',`${T.balance}: ${T.dollar}${ST.money} · ${T.urzad} ${ST.c.urzad}/10 · ${T.ludzie} ${ST.c.ludzie}/10`));const left=ST.pending.filter(p=>!ST.shown.includes(p));
 if(left.length){const w=h('div','letters');w.style.cssText='position:relative;padding:20px;inset:auto';left.slice(0,3).forEach(p=>{const l=h('div','letter');l.append(h('span','lab',p.item+' · '+p.a),document.createTextNode(p.echo));w.append(l)});c.append(w)}
 c.append(btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()}));layer.append(c)})}
/* zakończenia: liczone z decyzji (log) wg koncept/fabula_25_dni.md §8 */
const did=(d,...a)=>ST.log.some(l=>l.day===d&&a.includes(l.a));
function endings(){
 const zag=(did(11,'powiadom_rodzine')||did(17,'zdradz_szczegol')||did(14,'bez')||did(22,'zostaw_otwarte'))?'C':(did(16,'maya_sama')&&did(21,'wiadomosc_zatwierdzona')&&did(22,'przekaz_w_granicach'))?'A':'B';
 const src2=did(8,'kopia_osobno')||did(19,'przyjmij_sprostowanie');
 const skr=(did(23,'wydaj_nora')&&did(18,'rezerwacja_nora')&&did(12,'zabezpiecz','sprawdz_z_nora'))?(src2?'A':'A2'):(did(23,'victor')&&did(18,'do_kontroli')&&(did(9,'zetony_victor')||did(12,'zabezpiecz')||did(5,'wykaz_paczke')))?'B':'C';
 const pop=(did(15,'uzgodnij')&&did(20,'komplet_zeznan')&&did(25,'dolacz_kopie')&&(did(13,'odpis_za_zgode')||did(19,'przyjmij_sprostowanie')))?'A':(did(15,'victor_od_razu')&&(did(20,'poza_audytem')||did(23,'victor')))?'C':'B';
 const sam=[did(4,'koperta','wydaj_cicho'),did(12,'wyloz_400'),ST.c.bez>=3].filter(Boolean).length>=2;
 const ep=sam?'nowysam':ST.c.urzad>=7?'referent':'zostajesz';const tear=!!ST.flags['gest:wyrwij'];
 const el=(sam||tear)?'N':pop;
 return{zag,skr,pop,ep,tear,el}}
function ending(){A.music('sobota');A.sting('koniec');const E=endings();scene('T5',()=>{winState('closed');const c=h('div','center dark');c.style.cssText+=';overflow:auto;justify-content:flex-start;padding-top:70px';c.append(h('h1',null,T.final_h));
 [['ledger_b','gest_'+(E.tear?'wyrwij':ST.flags['gest:wpisz']?'wpisz':ST.flags['gest:list']?'list':'zamknij')],['th_zag','end_zag_'+E.zag],['th_skr','end_skr_'+E.skr],['th_pop','end_pop_'+E.pop],['you','ep_'+E.ep+(E.tear?'_tear':'')]].forEach(([th,k])=>{const p=h('div','letter');p.style.cssText='max-width:900px;flex:none;transform:none';p.append(h('span','lab',T[th]),document.createTextNode(T[k]||T[k.replace('_tear','')]||''));c.append(p)});
 const p=h('div','sub',T.elias+': '+T['elias_'+E.el]);c.append(p,h('div','sub',`${T.balance}: ${T.dollar}${ST.money} · ${T.urzad} ${ST.c.urzad}/10 · ${T.ludzie} ${ST.c.ludzie}/10`),btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()}));layer.append(c)})}
window.__E=endings;
window.__S=ST;window.__G=()=>ST;title();
})();
