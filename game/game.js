(function(){
const T=window.LANG,G=window.DATA,A=window.AUD;
const stage=document.getElementById('stage'),bg=document.getElementById('bg'),layer=document.getElementById('layer'),fade=document.getElementById('fade'),dim=document.getElementById('dim');
const KN={d7_evan:'insistent',d5_victor:'impatient',d3_maz_i_siostra:'insistent',d9_iris:'polite',d4_iris:'polite',d2_jonah:'impatient',d3_dex:'impatient',d5_noah:'polite'},ST_={d1_rosa:'heels',d3_maz_i_siostra:'heels',d3_dex:'sneakers',d2_jonah:'sneakers',d4_iris:'heels',d8_lena_i_nora:'heels',d9_iris:'heels',d6_ada:'sneakers',d8_bree:'sneakers',d10_dario:'boots'};
const GM={};G.forEach(g=>{GM[g.id]=g;g._od=g.dzien});
/* I4: gra w 10 dni (na razie za flagą ?dni=10). Dni 1-8 bez zmian, zwrot i finał wchodzą w dni 9-10 wg window.PLAN10 (tropy.js).
   Warunki fabularne (did) liczą się po dniu, z którego scena pochodzi (g._od), więc przeniesiona scena dalej je spełnia. */
const D10=(()=>{try{const q=new URLSearchParams(location.search).get('dni');if(q)localStorage.setItem('okienko_dni',q);return localStorage.getItem('okienko_dni')==='10'&&!!window.PLAN10}catch(e){return false}})();
if(D10){const PL=window.PLAN10,P=PL.dni,at={};Object.keys(P).forEach(d=>P[d].forEach((id,i)=>at[id]=[+d,i]));G.forEach(g=>{g.dzien=at[g.id]?at[g.id][0]:(g.dzien<=PL.od?g.dzien:99)});G.sort((a,b)=>a.dzien-b.dzien||((at[a.id]||[0,-1])[1]-(at[b.id]||[0,-1])[1]))}
const DAYS={};G.forEach(g=>{if(g.dzien<99)(DAYS[g.dzien]=DAYS[g.dzien]||[]).push(g.id)});
const XT=window.EXTRA||{},EV=window.WIECZOR||{};
if(D10){const PL=window.PLAN10,P=PL.dni,W=Object.assign({},EV);Object.keys(P).forEach(d=>{const ods=(PL.ev&&PL.ev[d])||[...new Set(P[d].map(id=>GM[id]._od))];EV[d]=[].concat(...ods.map(o=>W[o]||[]));if(T.dt)T.dt[d-1]=(PL.tytul&&PL.tytul[d])||T.dt[GM[P[d][P[d].length-1]]._od-1]});T.final_h=PL.final_h||T.final_h;Object.assign(T,PL.lang||{})}
const NAMED=D10?10:20;
const FINAL=D10?10:25,STORM_DAYS=[3,8,13,18,23],UP={lampa:60,drzwi:80,regal:70};

const FILL=['legitymacja','paszport','notes','organizer','bilet','okulary_slonce','zapalniczka','grzebien','czapka_zimowa','beret','pasek','krawat','kalosz','pantofel','czapka_daszek','apaszka','torba_zakupy','saszetka','torba_narzedzia','torba_listonosza','kuferek','worek','plecak_dzieciecy','walizka_mala','radio','latarka','lornetka','dyktafon','powerbank','zegarek_reka','kasetowiec','lalka','klocki','hulajnoga','pilka','latawiec','medalik','pozytywka','album','harmonijka','futeral_gitara','skakanka','lyzwy','wedka','farby','szachy','kubek','puszka','pudelko_blaszane','skrzynka_narzedz','piornik','portfel_maly','etui_aparat','paczka_plotno','parasol','krolik','teczka','futeral','okulary','kapelusz','torebka','but','ksiazka','sluchawki','laska','aparat','zegarek','pudelko','portfel','walizka','szalik','klucze','rekawiczka_welna','termos','paczka','plecak','telefon'];
const NAMEPL={album:'album',kask:'kask rowerowy',koszyk:'wiklinowy koszyk',ksiega:'księga wydań',ksiega_zamknieta:'księga wydań',aparat:'aparat',apaszka:'apaszka',beret:'beret',bilet:'bilet',budzik:'budzik',but:'but',czapka_daszek:'czapka z daszkiem',czapka_zimowa:'czapka zimowa',dyktafon:'dyktafon',etui_aparat:'etui na aparat',farby:'farby',futeral:'futerał',futeral_gitara:'futerał na gitarę',grzebien:'grzebień',harmonijka:'harmonijka',hulajnoga:'hulajnoga',kalosz:'kalosz',kapelusz:'kapelusz',kasetowiec:'odtwarzacz kasetowy',klocki:'klocki',klucze:'klucze',koperta:'koperta',krawat:'krawat',krolik:'pluszowy królik',ksiazka:'książka',kubek:'kubek',kuferek:'kuferek',lalka:'lalka',laska:'laska',latarka:'latarka',latawiec:'latawiec',legitymacja:'legitymacja',lornetka:'lornetka',lyzwy:'łyżwy',medalik:'medalik',notes:'notes',okulary:'okulary',okulary_slonce:'okulary przeciwsłoneczne',organizer:'organizer',paczka:'paczka',paczka_plotno:'paczka w płótnie',pantofel:'pantofel',parasol:'parasol',pasek:'pasek',paszport:'paszport',pilka:'piłka',piornik:'piórnik',plecak:'plecak',plecak_dzieciecy:'plecak dziecięcy',portfel:'portfel',portfel_maly:'mały portfel',powerbank:'powerbank',pozytywka:'pozytywka',pudelko:'pudełko',pudelko_blaszane:'blaszane pudełko',puszka:'puszka po herbacie',radio:'radio',rekawiczka_skora:'rękawiczka skórzana',rekawiczka_welna:'rękawiczka wełniana',saszetka:'saszetka',skakanka:'skakanka',skrzynka_narzedz:'skrzynka z narzędziami',sluchawki:'słuchawki',szachy:'szachy',szalik:'szalik',teczka:'teczka',telefon:'telefon',termos:'termos',torba_listonosza:'torba listonosza',torba_narzedzia:'torba narzędziowa',torba_zakupy:'torba na zakupy',torebka:'torebka',walizka:'walizka',walizka_mala:'mała walizka',wedka:'wędka',worek:'worek',zapalniczka:'zapalniczka',zegarek:'zegarek kieszonkowy',zegarek_reka:'zegarek na rękę'};
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
const lampR=rng(Date.now()&0xffff);const FAST_=new URLSearchParams(location.search).has('fast');
/* skalowanie: poziomo = dopasowanie; pionowo = scena obrócona o 90° (działa przy blokadzie obrotu); telefon = większe UI */
function fit(){const de=document.documentElement,W=de.clientWidth||innerWidth,H=de.clientHeight||innerHeight,por=H>W*1.05,s=por?Math.min(H/1536,W/1024):Math.min(W/1536,H/1024);
 stage.style.transformOrigin='50% 50%';stage.style.margin='-512px 0 0 -768px';stage.style.transform=(por?'rotate(90deg) ':'')+`scale(${s})`;stage.dataset.s=s;stage.dataset.r=por?1:0;
 document.body.classList.toggle('phone',s<.62);document.body.classList.toggle('portrait',por);
 const r=document.getElementById('rot');if(r){if(por&&!fit.hinted){fit.hinted=1;r.style.display='flex';setTimeout(()=>r.classList.add('off'),2600);setTimeout(()=>{r.style.display='none';r.classList.remove('off')},3400)}else if(!por)r.style.display='none'}}
addEventListener('resize',fit);addEventListener('orientationchange',()=>setTimeout(fit,250));fit();
const h=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
const btn=(txt,cls,fn)=>{const b=h('button','btn'+(cls?' '+cls:''),txt);if(fn)b.onclick=()=>{if(b._busy||fade.classList.contains('on'))return;b._busy=1;setTimeout(()=>b._busy=0,700);A.tick();fn()};return b};
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
function notebook(){const ex=document.getElementById('nb');if(ex){ex.remove();return}const o=h('div');o.id='nb';o.className='drawer';o.append(h('div','lab',T.notes_h));(ST.notes||[]).forEach(id=>o.append(h('div','ask',ST.noteTxt[id])));if(!(ST.notes||[]).length)o.append(h('div','ask',T.notes_none));const seen=[];ST.log.forEach(l=>{if(GM[l.id]&&!seen.includes(l.id))seen.push(l.id)});o.append(h('div','lab',T.ppl_h));if(!seen.length)o.append(h('div','ask',T.ppl_none));seen.forEach(id=>{const g=GM[id],l=ST.log.filter(x=>x.id===id).pop(),t=h('div','ask');t.textContent=g.postac+(g.rola?' ('+g.rola+')':'')+' - dz. '+l.day+': '+(T['act_'+l.a]||l.a);o.append(t)});const cl=()=>o.remove();o.append(btn(T.close,'ghost',cl));o.onkeydown=e=>{if(e.key==='Escape'){e.stopPropagation();cl()}};layer.append(o);o.querySelector('button').focus()}
function step(txt){if(ST.day>2&&!ST.hintsOn&&!prefs.hints){const z=h('div');z.style.display='none';return z}const e=h('div','step',txt);e.setAttribute('role','status');layer.append(e);return e}
function tutorial(done){const o=h('div','tut');const p=h('div','panel');p.append(h('div','lab',T.tut_h));const ol=h('ol');T.tut_l.forEach(x=>ol.append(h('li',null,x)));p.append(ol);p.append(btn(T.tut_ok,'pulse',()=>{o.remove();ST.tut=1;done&&done()}));o.append(p);layer.append(o);p.querySelector('button').focus()}
/* === USTAWIENIA (L9) w 4 zakładkach + pauza w grze (UX §8.4-8.5) === */
const prefs=(()=>{try{return JSON.parse(localStorage.getItem('lf_prefs')||'{}')||{}}catch(e){return {}}})();
function applyPrefs(){stage.style.setProperty('--ts',(prefs.ts||100)/100);stage.classList.toggle('hc',!!prefs.hc);stage.classList.toggle('reduce',reduce);bg.style.filter=prefs.br&&prefs.br!==1?`brightness(${prefs.br})`:''}
function setPref(k,v){prefs[k]=v;try{localStorage.setItem('lf_prefs',JSON.stringify(prefs))}catch(e){}applyPrefs()}
function settings(){if(document.getElementById('set'))return;const back=document.activeElement;const o=h('div');o.id='set';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label',T.s_title);
 const p=h('div','panel setp');p.append(h('div','lab',inGame?T.p_title:T.s_title));const tabs=h('div','stabs');tabs.setAttribute('role','tablist');const body=h('div','sbody');p.append(tabs,body);
 const row=(l,el)=>{const r=h('label','row',l);r.append(el);body.append(r);return r};
 const chk=(l,v,fn)=>{const c=document.createElement('input');c.type='checkbox';c.checked=v;c.onchange=()=>{A.tick();fn(c.checked)};return row(l,c)};
 const rng_=(l,mn,mx,st,v,fn,fmt)=>{const i=document.createElement('input');i.type='range';i.min=mn;i.max=mx;i.step=st;i.value=v;const out=h('output','sval',fmt(v));i.oninput=()=>{fn(+i.value);out.textContent=fmt(+i.value)};i.onchange=()=>A.tick();const w=h('span','sr');w.append(i,out);return row(l,w)};
 const pct=v=>Math.round(v*100)+'%';
 const TABS=[[T.s_sound,()=>{[['master','vol_master'],['music','vol_music'],['amb','vol_amb'],['sfx','vol_sfx'],['voice','vol_voice']].forEach(([k,l])=>rng_(T[l],0,1,.05,A.vol[k],v=>A.setVol(k,v),pct))}],
  [T.s_image,()=>{chk(T.s_full,!!document.fullscreenElement,v=>{try{v?document.documentElement.requestFullscreen():document.exitFullscreen()}catch(e){}});
   chk(T.s_reduce,reduce,v=>{reduce=v;localStorage.setItem('okienko_reduce',v?'1':'0');applyPrefs()});
   rng_(T.s_bright,.8,1.2,.05,prefs.br||1,v=>setPref('br',v),pct)}],
  [T.s_access,()=>{const seg=h('span','seg');[100,125,150].forEach(n=>{const b=h('button','segb'+((prefs.ts||100)===n?' on':''),n+'%');b.onclick=e=>{e.preventDefault();A.tick();setPref('ts',n);seg.querySelectorAll('.segb').forEach(x=>x.classList.toggle('on',x===b))};seg.append(b)});row(T.s_ts,seg);
   chk(T.s_hints,!!prefs.hints,v=>setPref('hints',v));chk(T.s_hc,!!prefs.hc,v=>setPref('hc',v))}],
  [T.s_data,()=>{const lg=h('span','seg');lg.append(h('button','segb on','Polski'));const en=h('button','segb','English · '+T.s_soon);en.disabled=true;lg.append(en);row(T.s_lang,lg);
   const sv=load();if(sv){const r=h('div','row');const l=h('span',null,T.s_del);const b=btn(T.s_del_b,'ghost dark',()=>{r.innerHTML='';r.append(h('span',null,T.s_del_conf.replace('{d}',sv.day)));const no=btn(T.m_no,'',()=>{o.remove();settings()}),yes=btn(T.s_del_yes,'ghost dark',()=>{localStorage.removeItem(SAVE);o.remove();inGame=false;title()});r.append(no,yes);no.focus()});r.append(l,b);body.append(r)}
   else body.append(h('div','row muted',T.s_nosave));
   if(window.PLAN10)chk(TRT.s_d10,D10,v=>{try{localStorage.setItem('okienko_dni',v?'10':'25')}catch(e){}try{const u=new URL(location.href);u.searchParams.delete('dni');history.replaceState(null,'',u)}catch(e){}location.reload()})}]];
 const show=i=>{[...tabs.children].forEach((b,j)=>{b.classList.toggle('on',i===j);b.setAttribute('aria-selected',String(i===j));b.tabIndex=i===j?0:-1});body.innerHTML='';TABS[i][1]();show.i=i};
 TABS.forEach(([l],i)=>{const b=h('button','stab',l);b.setAttribute('role','tab');b.onclick=()=>{A.tick();show(i)};tabs.append(b)});
 tabs.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const n=(show.i+(e.key==='ArrowRight'?1:3))%4;show(n);tabs.children[n].focus()}};
 const foot=h('div','sfoot');const close=()=>{o.remove();if(back&&document.body.contains(back))back.focus()};
 if(inGame){foot.append(h('div','ssave',T.p_saved.replace('{d}',ST.day)),btn(T.p_menu,'ghost dark',()=>{o.remove();inGame=false;title()}))}
 foot.append(btn(inGame?T.p_back:T.close,'',close));p.append(foot);o.append(p);o.onclick=e=>{if(e.target===o)close()};stage.append(o);show(0);tabs.children[0].focus()}
let muted=null;
addEventListener('keydown',e=>{if(e.target&&e.target.tagName==='INPUT'&&e.target.type==='text')return;
 if(e.key==='Escape'){const c=document.querySelector('.tcred');if(c){c._close();return}const s=document.getElementById('set');s?s.remove():settings()}
 else if((e.key==='m'||e.key==='M')&&A.on()&&!e.ctrlKey&&!e.metaKey){if(muted==null){muted=A.vol.master;A.setVol('master',0)}else{A.setVol('master',muted);muted=null}}});
/* lampa: jedno zdarzenie = obraz + dźwięk */
function lampLoop(){setTimeout(()=>{if(A.on()&&!ST.up.lampa)A.lampBlink(()=>{dim.className=reduce?'soft':'blink';setTimeout(()=>dim.className='',reduce?500:260)});lampLoop()},28000+lampR()*45000)}
/* SZLIF: wstrząs przez malejącą traumę (amplituda = trauma²), wyłączany opcją ograniczenia błysków */
let trauma=0,shk=0;
function shake(t){if(reduce||FAST_)return;trauma=Math.min(1,trauma+t);if(!shk)shk=requestAnimationFrame(shakeTick)}
function shakeTick(){trauma=Math.max(0,trauma-.04);const a=trauma*trauma*16,r=()=>(Math.random()*2-1)*a;layer.style.transform=bg.style.transform=trauma?`translate(${r()}px,${r()}px) rotate(${r()*.03}deg)`:'';shk=trauma?requestAnimationFrame(shakeTick):0}
function flick(ms){if(FAST_)return;dim.className='soft';setTimeout(()=>{if(dim.className==='soft')dim.className=''},ms||500)}
/* czarna sylwetka pod portretem: gość nie jest przezroczysty (portrety to JPG na czerni w trybie screen) */
const SIL={};
function backing(e,url){let b=document.getElementById('gback');if(!b||!b.isConnected){b=h('div');b.id='gback';e.parentNode.insertBefore(b,e)}
 const put=u=>{if(b.isConnected)b.style.backgroundImage=u?`url(${u})`:'none'};if(!url)return put('');if(url in SIL)return put(SIL[url]);
 const im=new Image();im.onload=()=>{try{const W=im.naturalWidth,H=im.naturalHeight,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');x.drawImage(im,0,0);const d=x.getImageData(0,0,W,H),p=d.data,L=new Int16Array(H),R=new Int16Array(H);
   for(let y=0;y<H;y++){let a=-1,z=-1;for(let i=3;i<W-3;i++){const k=(y*W+i)*4;if(p[k]+p[k+1]+p[k+2]>210){if(a<0)a=i;z=i}}L[y]=a;R[y]=z}
   for(let y=0;y<H;y++){const a=L[y],z=R[y];for(let i=0;i<W;i++){const k=(y*W+i)*4;p[k]=p[k+1]=p[k+2]=0;p[k+3]=(a>=0&&z-a>W*.06&&i>=a-2&&i<=z+2)?255:0}}
   x.putImageData(d,0,0);SIL[url]=c.toDataURL()}catch(err){SIL[url]=''}put(SIL[url])};im.onerror=()=>{SIL[url]='';put('')};im.src=url}
/* elementy */
function itemEl(g,w){if(g.sprite){const im=new Image();im.src=`assets/items/${g.sprite}.png`;im.draggable=false;im.style.width=w+'px';im.alt=g.itemName;return im}
 const d=h('div','ph-item',g.itemName);d.style.width=w+'px';d.style.height=(w*.7)+'px';return d}
/* G01-G26: własne portrety gości; kolejkaN: popiersia z S01 (jedna mina); reszta zastępczo wg archetypu (B1-B6) */
const PORT={ines:'ines',evan:'evan',rosa:'rosa',hana:'hana',dana:'dana',noah:'noah',gus:'gus',ada:'ada',leo:'leo',kit:'kit',nora:'nora',bree:'bree',stahl:'stahl',vera:'vera',dario:'dario',maya:'maya',grace:'grace',linh:'linh',elias:'elias',odile:'odile',billie:'billie',sam:'sam',pruitt:'pruitt',dorian:'dorian',sylvia:'sylvia',hugo:'hugo',kofi:'kofi',priya:'priya',marek:'stahl',pan:'pruitt',mina:'kolejka3',mario:'kolejka4',tobias:'kolejka1',milo:'kolejka1',tess:'kolejka8',lena:'siostra',iris:'dama',jonah:'chlopak',maz:'evan',siostra:'siostra',thomas:'wdowiec',victor:'inspektor'};
/* portrety zastępcze wg archetypu, dopóki nie ma własnych grafik postaci */
function stand(g,kto){const nm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(/[ ,]/)[0];const k=nm(kto&&g.face2&&g.face2[kto]?g.face2[kto]:kto);if(PORT[k])return PORT[k];const p=nm(g.postac);return PORT[p]||(g.ludzie&&PORT[nm(g.ludzie)])||'dama'}
function setFace(g,m,kto){const e=document.getElementById('guest');if(!e)return;e.dataset.mina=m;const kn=kto&&String(kto).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(/[ ,]/)[0];let fc=((kto&&g.face2&&kto in g.face2)?g.face2[kto]:((kn&&PORT[kn])||g.face))||stand(g,kto);if(fc==='maz')fc='evan'/* B3 za podobny do Stahla, G28 */;if(fc){const u=`assets/ppl/${fc}_${/^kolejka/.test(fc)?'neutralna':m}.jpg`;e.style.backgroundImage=`url(${u})`;backing(e,`assets/ppl/${fc}_neutralna.jpg`);e.textContent='';e.className=e.className.replace(/\bph\b/,'')}else{e.style.backgroundImage='none';if(!/\bph\b/.test(e.className))e.className+=' ph';e.innerHTML=`<div class="phname">${who(g,kto)}</div><div class="phmina">${m}</div>`}}
/* polaroidy przyjęcia (oględziny) i zdjęcia od gości (na ladzie), art/gpt_wyniki/fotografie */
const PH={d1_rosa:['FP01',.52,.66],d2_hana:['FP03',.62,.23],d11_grace:['FP08',.59,.68],d2_jonah:['FP02',.78,.55],d3_maz_i_siostra:['FP04',.73,.47],d5_gus:['FP05',.30,.43],d6_leo:['FP06',.58,.32],d8_bree:['FP07',.72,.62],d12_linh:['FP09',.30,.70],d17_sylvia:['FP10',.70,.62],d21_maya_lena_priya:['FP11',.25,.52],d23_iris_nora_victor:['FP12',.55,.45]};
const FG={d2_hana:'FG01',d3_maz_i_siostra:'FG02',d6_ada:'FG03',d7_kit:'FG04',d8_bree:'FG05',d14_billie:'FG07',d18_hugo:'FG06',d19_kofi:'FG08',d24_thomas:'FG09'};
function addWindow(g){const e=h('div');e.id='guest';const gl=h('div');gl.id='glass';layer.append(e,gl);if(FG[g.id]){const f=h('button','gph');f.style.backgroundImage=`url(assets/ph/${FG[g.id]}.png)`;f.setAttribute('aria-label',T.gph||'zdjęcie od gościa');f.onclick=ev=>{ev.stopPropagation();A.sfx('paper_envelope')||A.tick();f.classList.toggle('big')};layer.append(f)}return e}
function winState(s){A.setWindow(s)}
/* przebieg */
/* === EKRAN TYTUŁOWY I MENU (UX §8) === */
const ENDS='lf_endings',ENDS_M=6;
const endsSeen=()=>{try{return JSON.parse(localStorage.getItem(ENDS)||'[]')||[]}catch(e){return []}};
let lampStarted=false,booted=false;
function wake(){if(!A.on())A.init();if(!lampStarted){lampStarted=true;lampLoop()}}
/* przeglądarka blokuje dźwięk do pierwszego gestu: pierwszy klik/klawisz tylko włącza dźwięk (i przybija FRAUD), nie uruchamia akcji */
function audioGate(onOpen){if(A.on()){onOpen(true);return}let eat=false;
 const off=()=>{removeEventListener('pointerdown',open,true);removeEventListener('keydown',open,true);setTimeout(()=>removeEventListener('click',swallow,true),900)};
 const open=e=>{if(e.type==='keydown'&&['Shift','Control','Alt','Meta','Tab'].includes(e.key))return;off();wake();if(e.type==='keydown'){e.preventDefault();e.stopPropagation()}else eat=true;onOpen(false)};
 const swallow=e=>{if(eat){eat=false;e.preventDefault();e.stopPropagation()}};
 addEventListener('pointerdown',open,true);addEventListener('keydown',open,true);addEventListener('click',swallow,true)}
/* „Zapalam lampę…”: pierwsze wejście, lampa rozjaśnia ciemność (maks. 3 s) */
function lampUp(){const o=h('div','lampup');o.append(h('div','lu-t',T.t_loading));stage.append(o);let ok=false;
 const fin=()=>{if(ok)return;ok=true;o.classList.add('on');setTimeout(()=>o.remove(),1700)};
 const im=new Image();im.onload=()=>setTimeout(fin,500);im.onerror=fin;im.src='assets/bg/T2.jpg';setTimeout(fin,2400)}
function saveMeta(s){return T.m_cont_meta.replace('{n}',s.day).replace('{d}',dateStr(s.day)).replace('{k}',s.money)}
function title(){inGame=false;A.music('menu');ST=fresh();const sv=load();
 scene('T2',()=>{winState('closed');
  /* tytuł w czarnej szybie: złocony napis LOST & FOUND, na który spada pieczątka FRAUD */
  const tg=h('div','tglass');tg.setAttribute('role','heading');tg.setAttribute('aria-level','1');tg.setAttribute('aria-label',T.title);
  tg.innerHTML=`<div class="tl tl1" aria-hidden="true">${T.t_lost} <span class="amp">${T.t_amp}</span></div><div class="tl tl2" aria-hidden="true"><span class="found">${T.t_found}</span><span class="fraud">${T.t_fraud}</span></div><div class="tsub">${T.t_sub}</div>`;
  const tram=h('div','tram');tram.setAttribute('aria-hidden','true');
  const nav=h('nav','tmenu');nav.setAttribute('aria-label',T.m_nav);
  const card=h('div','tcard');const row=h('div','trow');nav.append(card,row);
  const startNew=()=>{wake();localStorage.removeItem(SAVE);ST=fresh();prolog()};
  const mainBtn=(lab,meta,fn)=>{const b=btn(`<span class="ml">${lab}</span><small>${meta}</small>`,'mcard',fn);return b};
  let main;
  const build=()=>{card.innerHTML='';row.innerHTML='';
   if(sv){main=mainBtn(T.m_cont,saveMeta(sv),()=>{wake();inGame=true;ST=sv;day()});card.append(main);
    row.append(btn(T.m_new,'ghost',confirmNew))}
   else{main=mainBtn(T.m_new,T.m_new_meta.replace('{d}',dateStr(1)),startNew);card.append(main)}
   const E=endsSeen();if(E.length)card.append(h('div','tends',T.m_ends.replace('{n}',E.length).replace('{m}',ENDS_M)));
   row.append(btn(T.m_set,'ghost',()=>settings()),btn(T.m_cred,'ghost',()=>credits(tg,nav)));
   if(window.__STEAM)row.append(btn(T.m_quit,'ghost',()=>window.close()))};
  /* NOWA ZMIANA przy zapisie: potwierdzenie w miejscu, bez modala, fokus na ZOSTAW */
  const confirmNew=()=>{card.innerHTML='';row.innerHTML='';const c=h('div','tconf');c.append(h('div','tq',T.m_new_conf.replace('{n}',sv.day)));const no=btn(T.m_no,'',()=>{build();main.focus()}),yes=btn(T.m_yes,'ghost',startNew);const r=h('div','tconf-r');r.append(no,yes);c.append(r);card.append(c);no.focus()};
  build();
  nav.onkeydown=e=>{const k=e.key;if(!/^Arrow/.test(k))return;const bs=[...nav.querySelectorAll('button')];const i=bs.indexOf(document.activeElement);if(i<0)return;e.preventDefault();bs[(i+((k==='ArrowRight'||k==='ArrowDown')?1:bs.length-1))%bs.length].focus()};
  const hint=h('div','thint',T.t_audio);
  layer.append(tg,tram,nav,hint);
  const fraud=instant=>{if(!document.body.contains(tg))return;if(instant||reduce){tg.classList.add('stamped','still')}else{tg.classList.add('stamped');setTimeout(()=>{A.stamp();A.sfx('lock_large');shake(.5)},120)}};
  audioGate(already=>{hint.classList.add('off');if(!already)setTimeout(()=>{if(document.body.contains(main)&&!nav.contains(document.activeElement))main.focus({preventScroll:true})},60);if(already)fraud(true);else setTimeout(()=>fraud(false),350)});
  /* tramwaj w drzwiach raz na ~25 s: pomarańczowe okna przesuwają się przez framugę */
  const tramGo=()=>{if(!document.body.contains(tram))return;if(!reduce){tram.classList.remove('go');void tram.offsetWidth;tram.classList.add('go');if(A.on())A.sfx('delivery_tram')}setTimeout(tramGo,22000+Math.random()*8000)};
  setTimeout(tramGo,booted?6000:9000);booted=true;
  setTimeout(()=>{if(document.body.contains(main))main.focus({preventScroll:true})},500)})}
function credits(tg,nav){if(document.querySelector('.tcred'))return;const c=h('div','tcred letter');c.setAttribute('role','dialog');c.setAttribute('aria-label',T.m_cred);c.append(h('span','lab',T.m_cred));T.t_cred.forEach(l=>c.append(h('div','crl',l)));
 const close=()=>{c.remove();tg.style.visibility='';nav.style.visibility='';const f=nav.querySelector('button');f&&f.focus()};c._close=close;c.append(btn(T.close,'',close));tg.style.visibility='hidden';nav.style.visibility='hidden';layer.append(c);c.querySelector('button').focus()}
function seedStock(){ST.stock=[];const r=rng(hash('stock0'));LINES.forEach(ln=>{for(let i=0;i<3;i++)ST.stock.push({u:'f0'+ln+i,sprite:FILL[(r()*FILL.length)|0],line:ln,day:0,filler:1,no:(ST.no=(ST.no||540)+1+((r()*3)|0))})})}
function addDay(){const d=ST.day;if(!ST.stock)seedStock();if(ST.stocked[d])return;ST.stocked[d]=1;const r=rng(hash('stk'+d));const sh=ST.storm[d]||0;
 const add=it=>{it.line=sh?LINES[(LINES.indexOf(it.line)+sh)%3]:it.line;it.day=d;it.no=(ST.no=(ST.no||540)+1+((r()*3)|0));it.hh=((r()*220)|0);if(d>=2&&r()<.28)it.at=LINES[(LINES.indexOf(it.line)+1+((r()*2)|0))%3];ST.stock.push(it)};
 (DAYS[d]||[]).forEach(id=>{const g=GM[id];add({u:'g:'+id,sprite:g.sprite,line:g.line,gid:id});add({u:'s:'+id,sprite:SIM[g.sprite]||FILL[(r()*FILL.length)|0],line:g.line,filler:1})});
 if(XT[d])add({u:'x:'+d,sprite:XT[d].sprite,line:XT[d].line,gid:'x'+d});
 for(let i=0;i<2;i++)add({u:'f'+d+'_'+i,sprite:FILL[(r()*FILL.length)|0],line:LINES[(r()*3)|0],filler:1});
 const tg=new Set(ST.stock.filter(i=>i.gid&&i.day===d).map(i=>i.sprite));ST.stock.forEach(i=>{if(i.filler&&!String(i.u).startsWith('s:')&&tg.has(i.sprite)){const alt=FILL.filter(f=>!tg.has(f)&&!ST.stock.some(o=>o.sprite===f&&o.line===i.line));if(alt.length)i.sprite=alt[(r()*alt.length)|0]}});
 const cap=ST.up.regal?9:7;LINES.forEach(ln=>{let n=ST.stock.filter(i=>i.line===ln);while(n.length>cap){const k=n.find(i=>i.filler&&i.day<d)||n.find(i=>i.day<d&&!(i.gid&&ST.log.every(l=>l.id!==i.gid)));if(!k)break;ST.stock=ST.stock.filter(i=>i!==k);n=n.filter(i=>i!==k)}})}
/* === PROLOG JAKO GESTY (UX §9.1, 0:02-0:20): ściągnij pasek z ogłoszenia, podpisz długopisem === */
function band(txt,cls){const old=layer.querySelector('.hband');if(old)old.remove();if(!txt)return null;const e=h('div','hband'+(cls?' '+cls:''),txt);e.setAttribute('role','status');layer.append(e);return e}
function prolog(){A.music('day');scene('T2',()=>{winState('closed');const c=h('div','center dark prolog');
 const p=h('div','letter poster');p.append(h('span','lab',T.pr1_lab),h('div',null,T.pr1_txt));
 const strip=h('button','strip');strip.setAttribute('aria-label',T.pr1_strip_a);strip.innerHTML=`<span class="num">${T.pr1_stripnum}</span><span class="grip" aria-hidden="true">⇣</span>`;p.append(strip);
 c.append(p);layer.append(c);band(T.pr1_step);strip.focus({preventScroll:true});
 let y0=null,dy=0,done=false;
 const tear=()=>{if(done)return;done=true;A.sfx('newspaper');strip.classList.add('torn');strip.style.transform='';band(T.pr1_num,'quiet');setTimeout(contract,FAST?200:1800)};
 strip.onpointerdown=e=>{y0=e.clientY;dy=0;strip.setPointerCapture(e.pointerId);strip.classList.add('drag')};
 strip.onpointermove=e=>{if(y0==null||done)return;const s=+stage.dataset.s||1;dy=Math.max(0,(e.clientY-y0)/s);strip.style.transform=`translateY(${Math.min(dy,90)*.7}px) rotate(${Math.min(dy,90)/18}deg)`;if(dy>70)tear()};
 strip.onpointerup=()=>{y0=null;strip.classList.remove('drag');if(!done)strip.style.transform=''};
 strip.onclick=()=>{if(dy<8)tear()}; /* zapas: klik / Enter / dotyk też odrywa */
 const contract=()=>{p.classList.add('away');A.sfx('drawer_small');const q=h('div','letter contract');q.append(h('span','lab',T.pr2_lab));T.pr2_rows.forEach(r=>q.append(h('div','row2',r)));
  const sig=h('div','sig');sig.innerHTML=`<span class="lab">${T.pr2_sig}</span><svg viewBox="0 0 300 60" aria-hidden="true"><path class="ink" d="M6 44 C 24 6, 40 58, 62 28 S 96 54, 118 22 S 150 48, 172 30 C 186 20, 196 44, 214 34 S 252 26, 292 30"/></svg>`;q.append(sig);
  const pen=btn(`<span aria-hidden="true">✒</span> ${T.pr2_btn}`,'pen',()=>{pen.disabled=true;sig.classList.add('signed');A.sfx('pen_scratch')||A.sfx('slide_light');setTimeout(()=>{A.stamp();A.sfx('lock_small');q.classList.add('stamped');shake(.4)},900);setTimeout(()=>{inGame=true;day()},FAST?300:1900)});
  q.append(pen);c.append(q);band(T.pr2_step);setTimeout(()=>pen.focus({preventScroll:true}),350)}})}
/* karta dnia: hak dnia dużym krojem, 2 s, klik pomija (modal tylko między wizytami) */
function dayCard(){if(ST.cardDay===ST.day)return;ST.cardDay=ST.day;const o=h('div','daycard');o.append(h('div','lab',T.day+' '+ST.day+' · '+dateStr(ST.day)+' · 23:40'),h('div','dch',dayTitle(ST.day)));layer.append(o);A.sfx('typewriter_key');const off=()=>{o.classList.add('off');setTimeout(()=>o.remove(),320)};o.onclick=off;setTimeout(off,FAST?100:2200)}
function dayItems(){return ST.stock.filter(i=>i.day===ST.day&&i.gid).map(i=>({id:i.gid,g:i.gid[0]==='x'?XT[ST.day]:GM[i.gid],line:i.line,u:i.u}))}
const clk=()=>{const m=(23*60+40+(ST.clk||0))%1440;return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0')};
function day(){ST.tl=0;ST.clk=0;ST.gi=0;ST.inspected=false;if(STORM_DAYS.includes(ST.day)&&!ST.storm[ST.day])ST.storm[ST.day]=1+(rng(hash('burza'+ST.day))()<.5?1:0);A.setDoor(!!ST.up.drzwi);if(DAYS[ST.day])addDay();save();if(!DAYS[ST.day])return week();delivery()}
function plRz(n){return n===1?'rzecz':'rzeczy'}
function delivery(){A.music('day');if(ST.gi===0&&!ST.inspected)A.sting('dzien_start');scene('T4',()=>{winState('closed');A.sfx('delivery_tram');const items=dayItems();
 const t=h('div','top');t.append(h('div','lab',T.day+' '+ST.day+' · '+dateStr(ST.day)+' · 23:40'),h('div','dtitle',dayTitle(ST.day)),h('p',null,T.delivery.replace('{n}',items.length).replace('{rz}',plRz(items.length))+(ST.storm[ST.day]?' '+T.storm:'')));layer.append(t);if(ST.storm[ST.day])setTimeout(()=>{A.thunder();A.sting('wydarzenie');shake(.8)},600);
 dayCard();const d1=ST.day===1;if(d1)band(T.hint_deliver_d1);else step(T.step_delivery);
 LINES.forEach((ln,ci)=>{const col=h('div','crate');col.style.left=(120+ci*470)+'px';col.append(h('div','lab',T.line+' '+ln));
  items.filter(x=>x.line===ln).forEach(x=>{const z=h('button','zguba');const lock=d1&&x.id!==DAYS[1][0];z.append(itemEl(x.g,170),h('span','tag',NAMEPL[x.g.sprite]||x.g.itemName));if(lock){z.disabled=true;z.classList.add('mute')}else z.append(h('span','btn pulse',T.look));z.onclick=()=>{if(ST.inspected||lock)return;A.tick();inspect(x)};col.append(z)});
  if(items.filter(x=>x.line===ln).length>1)col.classList.add('multi');
  col.append(h('div','cnt',T.stock+': '+ST.stock.filter(i=>i.line===ln).length));layer.append(col)});
 requestAnimationFrame(()=>{const tb=t.offsetTop+t.offsetHeight+18;if(tb>250)layer.querySelectorAll('.crate').forEach(c=>{c.style.top=tb+'px';c.style.maxHeight=(1024-tb-130)+'px'})});
 const b=h('div','bottom');if(ST.day>1){b.append(btn(T.skip,'ghost',()=>waitScene(windowScene)));layer.append(b)}
 const fz=layer.querySelector('.zguba:not(.mute)');if(fz)setTimeout(()=>fz.focus({preventScroll:true}),FAST?0:500)})}
function inspect(x){const g=x.g,sec=(g.wnetrze||[]).find(w=>!(/_luki$/.test(w.sekret_id)&&has('notatki_3'))&&!(/_pelny$/.test(w.sekret_id)&&!has('notatki_3')));ST.inspected=true;scene(null,()=>{winState('closed');const w=h('div','inspect');const p=h('div','pic');const r=rng(hash(x.id+'hot'));const hot=h('button','hot');
 if(PH[g.id]){const[im,hx,hy]=PH[g.id];p.className='pic inside ph';p.style.backgroundImage=`url(assets/ph/${im}.png)`;hot.style.left=hx*100+'%';hot.style.top=hy*100+'%'}else if(g.inside){p.className='pic inside';p.style.backgroundImage=`url(assets/in/${g.inside.img}.jpg)`;hot.style.left=g.inside.x*100+'%';hot.style.top=g.inside.y*100+'%'}else{p.append(itemEl(g,520));hot.style.left=(30+r()*40)+'%';hot.style.top=(30+r()*40)+'%'}p.append(hot);w.append(p);
 const hint=step(T.step_inspect);w.append(h('div','lab insp',NAMEPL[g.sprite]||g.itemName));layer.append(w);setTimeout(()=>{if(!hot.classList.contains('found'))hot.classList.add('warm')},ST.day===1?3500:7000);
 const lu=h('div','lupa');p.append(lu);const pre=h('div','note pre');pre.append(h('span','lab',T.insp_h),document.createTextNode(T.insp_txt));w.append(pre);
 p.onpointermove=e=>{if(hot.classList.contains('found'))return;const r=p.getBoundingClientRect(),hr=hot.getBoundingClientRect();lu.style.left=((e.clientX-r.left)/r.width*100)+'%';lu.style.top=((e.clientY-r.top)/r.height*100)+'%';const d=Math.hypot(e.clientX-(hr.left+hr.width/2),e.clientY-(hr.top+hr.height/2))/(hr.width||1);const k=Math.max(0,Math.min(1,1.5-d*.75));lu.style.setProperty('--k',k.toFixed(2));lu.classList.add('on');lu.classList.toggle('hotk',k>=1)};
 let miss=0;p.onclick=e=>{if(e.target===hot||hot.classList.contains('found'))return;miss++;A.tick();if(miss>=2)hot.classList.add('warm')};
 const done=()=>{pre.remove();lu.remove();const n=h('div','note');n.append(h('span','lab',sec?T.found:''),document.createTextNode(sec?fk(sec.co_widac):T.nothing));w.append(n);const nx=h('div','nextrow');const go=btn(T.next_btn,'',()=>(ST.day===1&&ST.gi===0)?windowScene():waitScene(windowScene));nx.append(go);w.append(nx);go.focus()};
 hot.onclick=e=>{e.stopPropagation();if(hot.classList.contains('found'))return;if(sec){A.sting('sekret');flick(450);p.classList.add('got')}hot.classList.add('found');A.tick();A.sfx('lock_small');hint.remove();if(sec){ST.secrets[sec.sekret_id]=1;if(/S\.H\./.test(fk(sec.co_widac))){ST.notes=ST.notes||[];const qt=(fk(sec.co_widac).match(/„[^„”]*S\.H\.”/)||[''])[0];if(!ST.notes.includes(sec.sekret_id)&&!(qt&&Object.values(ST.noteTxt||{}).some(t=>t.includes(qt)))){ST.notes.push(sec.sekret_id);setTimeout(()=>A.sfx('trace_pin'),350);ST.noteTxt=ST.noteTxt||{};ST.noteTxt[sec.sekret_id]=fk(sec.co_widac)}}done()}else done()}})}
const has=w=>!w||String(w).split('|').some(k=>ST.secrets[k]||ST.flags[k]||(k==='notatki_3'&&(ST.notes||[]).length>=(D10?2:3))||(k==='maya_testy_2'&&mayaTesty()>=2)||(k==='kopie_2'&&kopie()>=2));
function entry(g){const wj=g.wejscie_jesli||{};const k=Object.keys(wj).find(k=>ST.flags[k]);return k?wj[k]:g.wejscie}
/* głos postaci (klipy sfx_mumble_*): po imieniu pierwszej osoby; kobieta w emocji = płacz */
const VOX={Thomas:'old_man',Rosa:'young_woman',Jonah:'teen',Hana:'young_woman',Ines:'old_woman',Evan:'clerk',Lena:'young_woman',Dana:'young_woman',Dex:'teen',Iris:'old_woman',Noah:'heavy_man',Victor:'clerk',Gus:'heavy_man',Ada:'child',Leo:'heavy_man',Kit:'teen',Nora:'young_woman',Bree:'young_woman',Marek:'clerk',Stahl:'clerk',Vera:'old_woman',Dario:'heavy_man',Maya:'young_woman',Grace:'young_woman',Linh:'young_woman',Elias:'old_man',Odile:'old_woman',Tess:'young_woman',Billie:'teen',Sam:'heavy_man',Pan:'old_man',Pruitt:'old_man',Dorian:'clerk',Sylvia:'old_woman',Hugo:'heavy_man',Kofi:'teen',Mario:'heavy_man',Milo:'teen',Priya:'young_woman',Mina:'old_woman'};
function vox(name,m){const k=VOX[String(name||'').trim().split(/[ ,]/)[0]];if(!k)return null;return m==='emocja'&&/woman/.test(k)?'crying':k}
function who(g,kto){return(kto&&g.ludzie&&g.ludzie[kto])||g.postac}
function cg(){return GM[DAYS[ST.day][ST.gi]]}

/* pauza między gośćmi: noc, deszcz, cisza, a w tym czasie robota w magazynie */
const FAST=new URLSearchParams(location.search).has('fast');
function waitScene(next){ST.waits=(ST.waits||0)+1;A.music('day');
 const first=ST.day===1&&ST.waits<=1,dur=FAST?500:(first?7000:7000+Math.random()*9000);
 scene('T1',()=>{winState('closed');let alive=true;const ev=h('div','pauza');ev.textContent=T.w_start;layer.append(ev);
  const bar=step(first?T.w_step1:T.w_step);
  const row=h('div','wrow');row.append(btn(T.w_sort,'',()=>sortPanel()));const say0=t=>{ev.textContent=t;ev.classList.add('on')};row.append(btn(T.w_radio,'ghost',()=>{A.sfx('radio_tune')||A.sfx('slide_light');say0(T.w_radio_l[(Math.random()*T.w_radio_l.length)|0])}),btn(T.w_glass,'ghost',()=>{A.sfx('glass_tap')||A.sfx('window_up');const k=Math.random();if(k<.35&&!layer.querySelector('.cat')){const c=h('div','cat');c.setAttribute('role','button');c.title='kot';c.onclick=()=>{A.tick();A.sfx('cat_meow_window',1500)||A.sfx('lock_small');say0(T.w_cat2);c.classList.add('purr')};layer.append(c);setTimeout(()=>A.sfx('cat_meow_window'),400);say0(T.w_cat)}else say0(T.w_glass_l[(Math.random()*T.w_glass_l.length)|0])}),btn(T.w_tea,'ghost',()=>{A.sfx('kettle_click')||A.sfx('drawer_small');say0(T.w_tea_l[(Math.random()*T.w_tea_l.length)|0])}));if(ST.notes&&ST.notes.length)row.append(btn(T.w_notes,'ghost',()=>notebook()));layer.append(row);
  const EVS=[[T.w_e1,()=>A.steps('boots')],[T.w_e2,()=>A.steps('heels')],[T.w_e3,()=>{A.sfx('phone_old_ring');const pb=btn(T.w_phone,'pulse',()=>{pb.remove();ST.money+=5;A.sfx('lock_small');say0(T.w_phone_l[(Math.random()*T.w_phone_l.length)|0]+' (+ '+T.dollar+'5)');const w=document.querySelector('.wallet b');if(w)w.textContent=T.dollar+ST.money});row.append(pb);setTimeout(()=>pb.remove(),9000)}],[T.w_e4,()=>A.lampBlink()],[T.w_e5,()=>{A.thunder();shake(.5)}],[T.w_e6,()=>A.sfx('drawer_small')]];if(T.w_e7)EVS.push([T.w_e7,()=>A.sfx('siren_pass')],[T.w_e8,()=>A.sfx('police_radio_far')]);
  const say1=()=>{if(!alive)return;const e=EVS[(Math.random()*EVS.length)|0];ev.textContent=e[0];ev.classList.add('on');try{e[1]()}catch(x){}setTimeout(()=>ev.classList.remove('on'),3500)};
  const tm=[];if(!FAST){const n=2+((Math.random()*2)|0);for(let i=0;i<n;i++)tm.push(setTimeout(say1,(1500+Math.random()*(dur-4500))))}
  tm.push(setTimeout(()=>{if(!alive)return;alive=false;const p=document.getElementById('sortp');if(p)p.remove();A.doorbell();ST._bell=1;ST.clk=(ST.clk||0)+25;ev.textContent=T.w_bell;ev.classList.add('on');setTimeout(()=>{next()},FAST?50:1300)},dur));
  const stop=new MutationObserver(()=>{if(!document.body.contains(ev)){alive=false;tm.forEach(clearTimeout);stop.disconnect()}});stop.observe(layer,{childList:true})})}
function sortPanel(){if(document.getElementById('sortp'))return;const bad=ST.stock.filter(i=>i.at&&i.at!==i.line);const o=h('div');o.id='sortp';const p=h('div','panel');p.append(h('div','lab',T.w_sort_h));
 if(!bad.length){p.append(h('div','sub',T.w_sort_ok))}else{p.append(h('div','sub',T.w_sort_txt));
  bad.slice(0,4).forEach(it=>{const r=h('div','srow');const im=new Image();im.src='assets/items/'+it.sprite+'.png';im.alt='';r.append(im,h('span','nm',nm(it)+' · '+T.w_tag+' '+it.line));
   LINES.forEach(ln=>{const b=btn(T.line+' '+ln,ln===(it.at)?'ghost':'',()=>{if(ln===it.line){it.at=undefined;A.sfx('drawer_small');r.remove();ST.sorted=(ST.sorted||0)+1;const left=ST.stock.filter(i=>i.at&&i.at!==i.line).length;if(!left){p.querySelectorAll('.srow,.sub').forEach(x=>x.remove());p.insertBefore(h('div','sub',T.w_sort_ok),p.lastChild)}}else{it.at=ln;A.sfx('refuse')}});if(ln===it.at)b.disabled=true;r.append(b)});p.append(r)})}
 p.append(btn(T.close,'',()=>o.remove()));o.append(p);layer.append(o)}
function windowScene(){const g=cg();ST.turn=0;if(g.rozmowa)convStart(g);scene('T1',()=>{winState('closed');const e=addWindow(g);
 const lab=band(T.knock+((ST.day<=2||ST.hintsOn||prefs.hints)?' '+T.hint_curtain:''));const b=h('button','curtain');b.setAttribute('aria-label',T.let_in);b.title=T.let_in;b.append(h('span','cfold'),h('span','ctag',T.let_in));b.onclick=()=>{if(b._d)return;b._d=1;A.tick();A.sfx('slide_light');lab&&lab.remove();b.classList.add('open');setTimeout(()=>b.remove(),FAST?0:520);e.classList.remove('sil');e.classList.add('dev');winState('open');A.bell();A.steps(ST_[g.id]||'boots');A.music('talk');if(Math.random()<.5)setTimeout(()=>A.sfx('cloth_inside_bag'),1400);talkUI();say(g,entry(g),'mowi',null,g.wejscie_kto);questions(g);step(T.step_ask);if(window.TR&&TR.regul)TR.regul(layer,ST.day)};layer.append(b);setTimeout(()=>b.focus({preventScroll:true}),500);
 setFace(g,'neutralna');e.classList.add('sil');b.classList.add('breath');setTimeout(()=>{A.knock(KN[g.id]||'polite');e.classList.add('in');b.classList.add('kn')},700);if(ST.storm&&ST.storm[ST.day]||Math.random()<.35)setTimeout(()=>A.sfx('umbrella_shake'),1600);if(!ST._bell){A.doorbell()}ST._bell=0})}
function talkUI(){const s=h('div');s.id='say';const t=h('div');t.id='turns';t.innerHTML='<i></i><i></i><i></i>';const qs=h('div');qs.id='qs';layer.append(s,t,qs)}
let typing=0;
function badge(g){const key=x=>String(x.postac||'').split(/,| i /)[0].trim();const k=key(g);const all=[];Object.keys(DAYS).sort((a,b)=>a-b).forEach(d=>DAYS[d].forEach(id=>all.push(GM[id])));const same=all.filter(x=>key(x)===k);const n=same.indexOf(g)+1,m=same.length;if(m<=1||n===1&&m<=1)return ' · '+T.b_new;return ' · '+(n===1?T.b_new:n===m?T.b_last:T.b_back.replace('{n}',n).replace('{m}',m))}
function say(g,text,m,ton,kto,ask){ST._kto=kto;setFace(g,m,kto);const s=document.getElementById('say');if(!s)return;s.innerHTML='';if(ask)s.append(h('div','ask',T.you_ask+' '+ask));s.append(h('span','lab',who(g,kto)+badge(g)));const sp=h('span');s.append(sp);const id=++typing;let i=0;s.onclick=()=>{i=text.length};
 A.mumble(text.length,ton==='niewygodne'||m==='emocja'?.8:.2,vox(who(g,kto),m),!ask);
 if(FAST)i=text.length;(function step(){if(id!==typing)return;sp.textContent=text.slice(0,i);if(i++<text.length)setTimeout(step,16);else setTimeout(()=>{if(id===typing&&m==='mowi')setFace(g,'neutralna',kto)},900)})()}
/* ROZMOWA: drzewo wątków. g.rozmowa = tematy (zawsze dostępne), każde pytanie może mieć „dalej” = dopytania,
   które widać tylko zaraz po odpowiedzi, do której się odnoszą. Sceny bez g.rozmowa idą starym trybem trzech tur (g.tury). */
const CV={asked:{},keys:{},fresh:[]};
function convStart(g){CV.asked={};CV.keys={};CV.fresh=[];CV.press={};let n=0;(function w(l){(l||[]).forEach(x=>{x._i=n++;w(x.dalej)})})(g.rozmowa)}
function qlimit(g){return g.rozmowa?(g.limit||5):3}
function qlist(g){
 if(g.rozmowa){const ok=x=>(!x.wymaga||has(x.wymaga))&&!CV.asked[x._i]&&!(x.klucz&&CV.keys[x.klucz])&&!(x.gasi&&CV.keys[x.gasi]);
  const fr=CV.fresh.filter(ok).slice(0,2).map(x=>({x,sec:!!x.wymaga,fresh:true}));const roots=g.rozmowa.filter(ok);
  return fr.concat(roots.filter(x=>x.wymaga).map(x=>({x,sec:true})),roots.filter(x=>!x.wymaga).map(x=>({x,sec:false}))).slice(0,4)}
 const tr=g.tury[ST.turn].pytania;const hasSec=x=>x.wymaga&&has(x.wymaga);const base=tr.filter(x=>!x.wymaga);const sec=tr.filter(hasSec);
 if(!sec.length)return base.map(x=>({x,sec:false}));const out=base.map(x=>({x,sec:false}));sec.forEach(s=>{const k=out.map(o=>o.x.ton).lastIndexOf(s.ton);if(k>=0)out.splice(k,1,{x:s,sec:true});else out.push({x:s,sec:true})});return out}
function sayRoom(){const qs=document.getElementById('qs'),s=document.getElementById('say');if(!qs||!s)return;const hq=qs.offsetHeight;s.style.top='auto';s.style.bottom=Math.max(178,hq+48)+'px';const t=document.getElementById('turns');if(t&&!document.body.classList.contains('phone')){t.style.top='auto';t.style.bottom=Math.max(196,hq+66)+'px'}}
function questions(g){const qs=document.getElementById('qs');qs.innerHTML='';const lim=qlimit(g);const tb=document.getElementById('turns');if(tb){if(tb.children.length!==lim)tb.innerHTML='<i></i>'.repeat(lim);[...tb.children].forEach((e,i)=>e.classList.toggle('on',i<ST.turn))}
 const list=ST.turn>=lim?[]:qlist(g);
 if(!list.length){qs.classList.remove('tree');qs.append(btn(T.turn,'pulse',()=>pile(g)));qs.firstChild.focus();const st=document.querySelector('.step');if(st)st.textContent=T.step_turn;sayRoom();return}
 qs.classList.toggle('tree',!!g.rozmowa);
 list.forEach(({x,sec,fresh})=>{const pr=g.rozmowa&&CV.press&&CV.press[x._i];const b=h('button','q'+(sec?' sec':'')+(fresh?' fr':'')+(pr?' press':'')+(ST.day<=2?' pulse':''),(pr?`<small>${TRT.press}</small>`:sec?`<small>${T.know}</small>`:fresh?`<small>${T.q_fresh||''}</small>`:'')+x.tekst);b.onclick=()=>{A.tick();ST.turn++;if(g.rozmowa){CV.asked[x._i]=1;if(x.klucz)CV.keys[x.klucz]=1;CV.fresh=x.dalej||[]}if(pr){delete CV.press[x._i];ST.odm=(ST.odm||0)+1}else if(g.rozmowa&&window.TR&&TR.odmowa){const o=TR.odmowa(g,x,sec,ST);if(o){ST.turn--;delete CV.asked[x._i];if(x.klucz)delete CV.keys[x.klucz];CV.press=CV.press||{};CV.press[x._i]=1;CV.fresh=g.rozmowa.includes(x)?[]:[x];shake(.35);A.sfx('refuse');say(g,o,'emocja','niewygodne',x.kto,x.tekst);questions(g);if(!ST.odmSeen){ST.odmSeen=1;const st=document.querySelector('.step');if(st&&st.style.display!=='none')st.textContent=TRT.odm_hint;else band(TRT.odm_hint)}return}}if(x.ustawia)ST.flags[x.ustawia]=1;/* STRATEGIA §7: kłamstwa nie ogłasza silnik (bez stingu, mignięcia i serca). Zostaje tylko mina gościa. */say(g,x.odpowiedz,x.mina,x.ton,x.kto,x.tekst);questions(g)};qs.append(b)});
 if(g.rozmowa&&ST.turn>=2){const e=h('button','q enough',T.turn_early||T.turn);e.onclick=()=>{A.tick();pile(g)};qs.append(e)}
 qs.firstChild.focus();sayRoom()}

function book(){const ex=document.getElementById('bk');if(ex){ex.remove();return}const o=h('div');o.id='bk';o.className='drawer';o.append(h('div','lab',T.bk_h+' · '+dateStr(ST.day)));const rows=ST.stock.filter(i=>i.day===ST.day&&i.no).sort((a,b)=>a.no-b.no);
 const tb=h('table','bk');tb.innerHTML='<tr><th>№</th><th>godz.</th><th>linia</th><th>opis</th></tr>';rows.forEach(i=>{const m=17*60+50+Math.round((i.hh||0)*1.5),hm=String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');const tr=h('tr');[('0000'+i.no).slice(-4),hm,i.line,nm(i)].forEach(x=>tr.append(h('td',null,x)));tb.append(tr)});
 o.append(tb,h('div','ask',T.bk_note),btn(T.close,'ghost',()=>o.remove()));o.onkeydown=e=>{if(e.key==='Escape'){e.stopPropagation();o.remove()}};layer.append(o);o.querySelector('button').focus()}
function leave(g){A.sfx('refuse');A.sting('klamstwo');ST.c.ludzie=Math.max(0,ST.c.ludzie-1);ST.log.push({id:g.id,a:'odszedl',day:ST.day});ST.flags[g.id+':odszedl']=1;
 scene('T1',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.leave_h),h('div','sub',T.leave_txt.replace('{g}',who(g))),btn(T.next,'pulse',()=>{ST.gi++;ST.gi<DAYS[ST.day].length?waitScene(windowScene):evening()}));layer.append(c)})}
function pile(g){const gf=((document.getElementById('guest')||{style:{}}).style.backgroundImage||'').replace(/_(mowi|emocja|klamie)\.jpg/,'_neutralna.jpg');ST.miss=0;ST.pat=Math.max(3,5-(ST.odm&&ST.odmId===g.id?ST.odm:0));ST.trk={};const TRG=window.TR&&TR.has(g)?window.TROPY[g.id]:null;if(ST.heardId!==g.id)ST.heard='';scene('T3',()=>{winState('closed');const target='g:'+g.id;
 const t=h('div','top');t.append(h('div','lab',T.search),h('p',null,TRG?(g.itemName||g.rzecz):g.rzecz));layer.append(t);step(TRG?TRT.step:T.step_pile);
 const toast=h('div','toast','');layer.append(toast);const pips=h('div','pips');pips.setAttribute('aria-label','cierpliwość gościa');const drawPips=()=>{pips.innerHTML='';for(let i=0;i<5;i++)pips.append(h('i',i<ST.pat?'on':''))};drawPips();t.append(pips);const msg=(m,ms)=>{const st=layer.querySelector('.step');if(st)st.style.visibility='hidden';toast.textContent=m;toast.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(()=>{toast.classList.remove('on');if(st)st.style.visibility=''},ms||1800)};
 /* TROPY: kartka "Z rozmowy" zamiast gotowego opisu; cechę znasz, jeśli gość ją wypowiedział */
 const note=h('div','trnote');const known=()=>{const k=TR.known(g,ST.heard);Object.keys(ST.trk).forEach(x=>k[x]=true);return k};
 const drawNote=()=>{note.innerHTML='';const kn=known();{const w=h('div','trwho'),f=h('i','trface');if(gf)f.style.backgroundImage=gf;w.append(f,h('span',null,String(who(g)).split(',')[0]+' '+TRT.waits));note.append(w)}note.append(h('span','lab',TRT.head));Object.keys(TRG.pola).forEach(k=>{const r=h(kn[k]?'div':'button','trr'+(kn[k]?' on':' trq'));r.append(h('span','k',TRG.pola[k]),h('span','v',kn[k]?TRG.cel[k]:TRT.ask));if(!kn[k]){r.title=TRT.ask_cost;r.onclick=()=>{ST.trk[k]=1;ST.pat--;tick(10);drawPips();A.sfx('glass_tap')||A.tick();msg('„'+TRG.dop[k]+'”',3200);if(ST.pat<=0){g.tlum?g.tlum(false):leave(g);return}drawNote()}}note.append(r)});if(Object.keys(TRG.pola).some(k=>!kn[k]))note.append(h('small','trc',TRT.ask_cost))};
 if(TRG){layer.append(note);drawNote()}
 const look=(it,sl)=>{const old=layer.querySelector('.ogl');if(old)old.remove();tick(3);const isT=it.u===target,isB=it.bl!=null;const o=h('div','ogl'),c=h('div','oglc');const im=new Image();im.src='assets/items/'+it.sprite+'.png';im.draggable=false;im.alt=nm(it);c.append(h('span','lab',TRT.card+' · '+String(it.no||0).padStart(4,'0')),im,h('div','oglnm',nm(it)));
  if(isT||isB){const tr=TR.traits(g,isT?-1:it.bl),ul=h('div','ogll');Object.keys(TRG.pola).forEach(k=>{const r=h('div','trr on');r.append(h('span','k',TRG.pola[k]),h('span','v',tr[k]));ul.append(r)});c.append(ul);const u=TR.uw(g,isT?-1:it.bl);if(u){const e=h('div','oglu');e.append(h('span','k',TRT.uw),h('span','v',u));c.append(e)}}else c.append(h('div','oglo',TRT.other));
  const row=h('div','oglb'),close=()=>o.remove();
  if(isT||isB){const tb=btn(TRT.take,'',()=>{close();if(isT){A.sweep();g.tlum?g.tlum(true):decide(g)}else{tick(15);ST.miss=(ST.miss||0)+1;ST.pat-=2;drawPips();shake(.45);A.sfx('refuse');sl.classList.add('wrongpick');if(ST.trWarn){ST.money-=TRT.fine;payFx(-TRT.fine);msg(TRT.wrong,2600)}else{ST.trWarn=1;msg(TRT.wrong1,4200)}if(ST.pat<=0)(g.tlum?g.tlum(false):leave(g))}});tb.classList.add('take');if(isT)tb.dataset.target=1;row.append(tb)}
  row.append(btn(TRT.back,'ghost',close));c.append(row);o.append(c);o.onclick=e=>{if(e.target===o)close()};o.onkeydown=e=>{if(e.key==='Escape'){e.stopPropagation();close()}};layer.append(o);A.sfx('slide_light');const f=c.querySelector('button');if(f)f.focus({preventScroll:true})};
 const tabs=h('div','tabs');const field=h('div','field');if(TRG)field.className+=' trf'+(ST.day<=2?' d1':'');layer.append(tabs,field);const bkb=btn(T.bk_btn,'ghost bkb',book);bkb.classList.add('bkphone');layer.append(bkb);
 const show=ln=>{field.innerHTML='';[...tabs.children].forEach(b=>b.classList.toggle('on',b.dataset.l===ln));
  let its=ST.stock.filter(i=>(i.at||i.line)===ln);const r=rng(hash(g.id+'p'+ln));
  if(TRG){const ti=ST.stock.find(i=>i.u===target);if(ti&&(ti.at||ti.line)===ln){const used=new Set(ST.stock.map(i=>i.no));TRG.bl.forEach((b,i)=>{let n=(ti.no||600)+(i%2?-1:1)*(2+i);while(used.has(n))n+=(i%2?-1:1);used.add(n);its.push({u:'bl'+i,sprite:ti.sprite,line:ti.line,no:n,bl:i})})}}
  its=ST.up.regal?its.slice().sort((a,b)=>nm(a).localeCompare(nm(b),'pl')||a.no-b.no):its.map(x=>[r(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
  field.append(h('div','lab fh',T.line+' '+ln+' · '+its.length+' '+plRz(its.length)+(ST.up.regal?' · '+T.sorted:'')));const grid=h('div','grid');field.append(grid);
  its.forEach(it=>{const sl=h('button','slot'+(it.u===target?' target':''));if(it.u===target)sl.dataset.target=1;const im=new Image();im.src='assets/items/'+it.sprite+'.png';im.draggable=false;im.alt=nm(it);sl.title=nm(it);sl.setAttribute('aria-label',nm(it));if(TRG)sl.append(h('span','lk',TRT.look));sl.append(im,h('span','nm'+((ST.day>2&&!ST.up.regal)?' hid':''),nm(it)),h('span','no tg t'+(LINES.indexOf(it.line)+1),String(it.no||0).padStart(4,'0')));
   sl.onclick=()=>{A.tick();if(TRG){look(it,sl);return}if(it.u===target){A.sweep();decide(g)}else{ST.miss=(ST.miss||0)+1;ST.pat--;drawPips();shake(.3);sl.classList.add('wrongpick');msg(T.wrong+' '+nm(it)+'.');if(ST.pat<=0){leave(g);return}if(ST.miss>=2){const ti=ST.stock.find(i=>i.u===target);const tb=[...tabs.children].find(b=>ti&&b.dataset.l===(ti.at||ti.line));if(tb)tb.classList.add('hintp')}if(ST.miss>=4)field.querySelectorAll('.slot.target').forEach(x=>x.classList.add('hintp'))}};grid.append(sl)})};
 LINES.forEach(ln=>{const b=h('button','tab',T.line+' '+ln);b.dataset.l=ln;b.onclick=()=>{A.tick();A.sfx('slide_light');show(ln)};tabs.append(b)});show(LINES[0]);
 })}
const SFXA=a=>/^wydaj/.test(a)?'handover':/^odmow/.test(a)?'refuse':/^zadzwon/.test(a)?'phone_old_ring':/^zatrzymaj|depozyt/.test(a)?'drawer_small':/wpis|zapisz|pokwit|rejestr|podpis/.test(a)?'pen_scratch':/koperta|^list/.test(a)?'paper_envelope':'slide_light';
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
function auditP(){const n=ST.thefts||0;if(!n)return 0;return Math.min(.95,.4+.2*(n-1)+.25*(ST.catches||0)+((ST.stolenW||0)>=200?.15:0))}
function riskWord(p){return p<.4?T.risk_1:p<.6?T.risk_2:p<.85?T.risk_3:T.risk_4}
function bump(a){const c=ST.c,cl=v=>Math.max(0,Math.min(10,v));
 if(a in WEZ_U){ST.thefts++;ST.wez=(ST.wez||0)+1;c.urzad=cl(c.urzad+WEZ_U[a]);return}
 if(/^przywlaszcz|^wez_/.test(a)){ST.wez=(ST.wez||0)+1;c.bez++;ST.thefts++;c.urzad=cl(c.urzad-2);c.ludzie=cl(c.ludzie-2);return}
 const e=EFF[a]||(/^wyloz/.test(a)?[-1,1,0]:/^wydaj/.test(a)?[0,1,0]:[0,0,0]);c.urzad=cl(c.urzad+e[0]);c.ludzie=cl(c.ludzie+e[1]);c.bez+=e[2]}
function payFx(n){const w=document.querySelector('.wallet');const b=w&&w.querySelector('b');const f=h('div','payfx'+(n>40?' big':''),(n>=0?'+ ':'− ')+T.dollar+Math.abs(n));layer.append(f);A.sfx(n>60?'wallet_open':'lock_small');if(n>0&&A.coin)A.coin(n>60)
 setTimeout(()=>{f.classList.add('fly')},30);setTimeout(()=>{f.remove();if(b){const fr=parseInt(b.textContent.replace(/[^0-9-]/g,''))||0,to=ST.money;let k=0;const iv=setInterval(()=>{k++;b.textContent=T.dollar+Math.round(fr+(to-fr)*k/10);if(k>=10)clearInterval(iv)},40);w.classList.toggle('neg',to<0);w.classList.add('bump');setTimeout(()=>w.classList.remove('bump'),500)}},1100)}
function decide(g){A.music('tension');scene('T1',()=>{winState('open');const e=addWindow(g);setFace(g,'neutralna',ST._kto);e.classList.add('in');talkUI();document.getElementById('turns').remove();const s=document.getElementById('say');s.innerHTML='';s.style.width='600px';s.append(h('span','lab',''),document.createTextNode(T.decide));
 const it=itemEl(g,190);it.id='onDesk';it.style.left='700px';it.style.top='690px';it.classList.add('pulsei');layer.append(it);step(T.step_decide);const acts=g.decyzje.filter(d=>has(d.wymaga)).map(d=>d.akcja);let done=false;
 const zones=h('div','zones'+(acts.length>3?' many':''));layer.append(zones);
 const finish=a=>{if(done)return;done=true;A.sting('decyzja');A.music('day');A.stamp();shake(g.id==='d25_ksiega'&&a==='wyrwij'?.95:.4);A.sfx(SFXA(a));const d=g.decyzje.find(x=>x.akcja===a);if(g.id==='d25_ksiega')bookGesture(a);if(/^wydaj|^przywlaszcz|^wez_/.test(a)){it.style.pointerEvents='none';it.classList.remove('pulsei');it.classList.add(/^wydaj/.test(a)?'given':'pocket');setTimeout(()=>it.remove(),FAST?0:650);ST.stock=ST.stock.filter(i=>i.u!=='g:'+g.id)}else it.classList.add('away');
  ST.clk=(ST.clk||0)+20;ST.log.push({id:g.id,a,day:ST.day});if(g.id==='d25_ksiega')ST.flags['gest:'+({wpisz_siebie:'wpisz'}[a]||a)]=1;if(a==='list')try{localStorage.setItem('okienko_last_letter','1')}catch(e){};ST.flags[g.id+':'+a]=1;{const th=a in WEZ_U||/^przywlaszcz|^wez_/.test(a);bump(a);if(th){ST.stolenW=(ST.stolenW||0)+Math.max(0,d.kasa||0);ST.stolenAll=(ST.stolenAll||0)+Math.max(0,d.kasa||0)}}ST.pending.push({due:ST.day+(d.echo.za_dni||1),item:g.itemName,a:d.etykieta||a,echo:d.echo.tekst,forma:d.echo.forma});ST.money+=40+(d.kasa||0);
  zones.remove();{const st=layer.querySelector('.step');if(st)st.remove()}payFx(40+(d.kasa||0));say(g,fk(d.reakcja),'neutralna',null,d.kto);const sum=h('div','sum');sum.append(h('div',null,'+ '+d.zysk),h('div','minus','− '+d.strata));if(d.kasa)sum.append(h('div',null,(d.kasa>0?'+ ':'− ')+T.dollar+Math.abs(d.kasa)));if(a in WEZ_U||/^przywlaszcz|^wez_/.test(a))sum.append(h('div','minus risk',T.risk.replace('{r}',riskWord(auditP()))));layer.append(sum);const qs=document.getElementById('qs');qs.innerHTML='';
  qs.append(btn(T.next,'',()=>{if(qs._gone)return;qs._gone=1;document.getElementById('guest').classList.remove('in');ST.gi++;const go=()=>ST.gi<DAYS[ST.day].length?waitScene(windowScene):evening();setTimeout(()=>g.id==='d20_elias_sam'&&!ST.name?nameScene(go):go(),500)}));qs.firstChild.focus()};
 const LB={wydaj:T.wydaj,odmow:T.odmow,zatrzymaj:T.zatrzymaj,zadzwon:T.zadzwon};
 g.decyzje.filter(d=>has(d.wymaga)).forEach(d=>{const lab=fk(d.etykieta||LB[d.akcja]||d.akcja);const sp=lab.indexOf(' ');const z=h('button','zone z-'+d.akcja+(lab.length>30?' long':''),sp>0?`<b>${lab.slice(0,sp)}</b><span>${lab.slice(sp+1)}</span>`:`<b>${lab}</b>`);z.dataset.a=d.akcja;z.onclick=()=>finish(d.akcja);zones.append(z)});
 const glassAct=acts.find(a=>/^wydaj/.test(a));
 let sx,sy,ox,oy;it.style.cursor='grab';it.style.touchAction='none';it.onpointerdown=ev=>{it.setPointerCapture(ev.pointerId);sx=ev.clientX;sy=ev.clientY;ox=parseFloat(it.style.left)||700;oy=parseFloat(it.style.top)||690};
 it.onpointermove=ev=>{if(sx==null)return;const s=+stage.dataset.s,dx=(ev.clientX-sx)/s,dy=(ev.clientY-sy)/s,rt=stage.dataset.r==='1';it.style.left=ox+(rt?dy:dx)+'px';it.style.top=oy+(rt?-dx:dy)+'px'};
 it.onpointercancel=()=>{sx=null;it.style.left='700px';it.style.top='690px'};
 it.onpointerup=ev=>{if(sx==null)return;sx=null;const r=it.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  const hit=[...zones.children].find(z=>{const b=z.getBoundingClientRect();return cx>b.left&&cx<b.right&&cy>b.top&&cy<b.bottom});
  const gr=document.getElementById('glass').getBoundingClientRect();
  if(hit)finish(hit.dataset.a);else if(glassAct&&cx>gr.left&&cx<gr.right&&cy>gr.top&&cy<gr.bottom)finish(glassAct);else{it.style.left='700px';it.style.top='690px'}}})}
/* d25: gest na księdze ma własny kadr (wpis litera po literze, rozdarcie, list do szuflady, okładka) */
function bookGesture(a){if(FAST)return;const o=h('div','bookg bg-'+a);const ln=h('div','bline');o.append(h('div','lab',T.ledger_b+' · 0809'),ln);layer.append(o);
 if(a==='wpisz_siebie'){A.sfx('pen_scratch');const nmv=ST.name||T.name_def;let i=0;(function w(){ln.textContent=nmv.slice(0,i);A.tick();if(i++<nmv.length)setTimeout(w,140)})()}
 else if(a==='wyrwij'){ln.textContent=T.bg_tear;A.sfx('trapdoor');A.sfx('newspaper');setTimeout(()=>o.classList.add('torn'),60)}
 else if(a==='list'){ln.textContent=T.bg_letter;A.sfx('paper_envelope');setTimeout(()=>A.sfx('drawer_small'),600);setTimeout(()=>o.classList.add('slid'),700)}
 else{ln.textContent=T.bg_close;A.sfx('door_lock_day_end');setTimeout(()=>o.classList.add('shut'),300)}
 setTimeout(()=>{o.classList.add('off');setTimeout(()=>o.remove(),400)},2600)}
/* dzień 25: gest finałowy */
function ledger(){A.music('tension');scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.ledger_h),h('div','sub',T.ledger_s));
 [['wpisz',T.ledger_write.replace('{n}',ST.name||T.name_def),'newspaper'],['wyrwij',T.ledger_tear,'trapdoor'],['list',T.ledger_letter,'drawer_small'],['zamknij',T.ledger_close,'door_lock_day_end']].forEach(([k,l,sf])=>c.append(btn(l,k==='wyrwij'?'':'ghost',()=>{ST.flags['gest:'+k]=1;if(k==='list')try{localStorage.setItem('okienko_last_letter','1')}catch(e){};A.sfx(sf);A.sting(k==='wyrwij'?'klamstwo':'decyzja');evening()})));layer.append(c)})}
function nameScene(next){scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.name_h),h('div','sub',T.name_s));const i=document.createElement('input');i.type='text';i.maxLength=24;i.className='nameinp';i.placeholder=T.name_p;c.append(i,btn(T.name_ok,'pulse',()=>{ST.name=(i.value||'').trim()||T.name_def;next()}));layer.append(c);i.focus()})}
function evening(){if(ST.day===NAMED&&!ST.name)return nameScene(evening);A.sfx('newspaper');ST.clk=370; /* świt: 5:50, zmiana trwa do 6:00 */const fxN=(EV[ST.day]||[]).filter(n=>(!n.jesli||has(n.jesli))&&!(n.jesli_nie&&has(n.jesli_nie))).length;const due=ST.pending.filter(p=>p.due<=ST.day&&!ST.shown.includes(p)).slice(0,Math.max(2,6-fxN));scene('T5',()=>{winState('closed');const t=h('div','top');t.append(h('div','lab',T.evening+' '+T.day+' '+ST.day));layer.append(t);const w=h('div','letters');
 (EV[ST.day]||[]).filter(n=>(!n.jesli||has(n.jesli))&&!(n.jesli_nie&&has(n.jesli_nie))).forEach(n=>{const l=h('div','letter');l.append(h('span','lab',T.eve_note+' · '+n.kto),document.createTextNode(fk(n.tekst)));w.append(l)});
 due.forEach(p=>{ST.shown.push(p);const l=h('div','letter');l.append(h('span','lab',p.item+' · '+fk(p.a)),document.createTextNode(fk(p.echo)));w.append(l)});if(!w.children.length)w.append(h('div','letter',T.nomail));if(T.dt&&T.dt[ST.day]&&ST.day<FINAL){const hk=h('div','letter hook');hk.append(h('span','lab',T.tomorrow),document.createTextNode(T.dt[ST.day]));w.append(hk)}const cards=[...w.children];const f=h('div','foot');f.append(h('div',null,T.dollar+ST.money));f.append(btn(ST.day%5===0?T.week_h:T.next_day,'pulse',()=>{A.sfx('door_lock_day_end');ST.day%5===0?saturday():(ST.day++,day())}));
 if(FAST||cards.length<2){if(cards.length>3)w.classList.add('many');layer.append(w,f);return}
 /* kartki po jednej: stos na biurku, przekładasz kolejną, na końcu przycisk nowego dnia */
 w.classList.add('one');w.innerHTML='';layer.append(w);let i=0;const nav=h('div','evnav');const cnt=h('div','evcnt');const nx=btn(T.eve_next,'pulse',()=>show(i+1));const all=btn(T.eve_skip,'ghost',()=>show(cards.length-1));nav.append(cnt,all,nx);layer.append(nav);
 const show=k=>{i=Math.min(k,cards.length-1);A.sfx(i?'paper_envelope':'newspaper');w.innerHTML='';const c=cards[i];c.classList.remove('flip');w.append(c);void c.offsetWidth;c.classList.add('flip');cnt.textContent=T.eve_of.replace('{i}',i+1).replace('{n}',cards.length);if(i>=cards.length-1){nav.remove();layer.append(f);const b=f.querySelector('.btn');b&&b.focus()}else{all.style.display=cards.length-i>2?'':'none';nx.focus()}};show(0)})}
function evict(){inGame=false;A.music('sobota');A.sting('koniec');scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.evict_h),h('div','sub',T.evict_txt.replace('{d}',-ST.money)),btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()}));layer.append(c)})}
function fired(){inGame=false;A.music('sobota');A.sting('koniec');scene('T5',()=>{winState('closed');const c=h('div','center dark');c.append(h('h1',null,T.fired_h),h('div','sub',T.fired_txt.replace('{s}',ST.stolenAll||0)),btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()}));layer.append(c)})}
function nextAfterSat(){if(ST.flags.zwolnienie)return fired();if(ST.flags.eksmisja)return evict();ST.day++;if(ST.day>FINAL)return ending();if(!DAYS[ST.day])return week();day()}
function saturday(){A.music('sobota');A.sting('dzien_koniec');const rent=150,bl=bills(weekOf());ST.money-=rent+bl;if(ST.dlug==null)ST.dlug=300;let mar='';if(ST.dlug>0){if(ST.money>=60){ST.money-=60;ST.dlug-=60;mar=(ST.dlug?T.mar_paid:T.mar_done).replace('{r}',ST.dlug)}else mar=T.mar_wait.replace('{r}',ST.dlug)}let audit='';if(ST.catches==null)ST.catches=ST.flags.audyt_ostrz?1:0;if(ST.thefts>0){const S=ST.stolenW||0;if(rng(hash('audyt'+ST.day+'|'+(ST.stolenAll||0)))()<auditP()){ST.catches++;const n=ST.catches,fine=S+(n===1?Math.min(S,200):Math.ceil(S*1.5));ST.money-=fine;ST.c.urzad=Math.max(0,ST.c.urzad-(n===1?1:2));if(n>1)ST.c.ludzie=Math.max(0,ST.c.ludzie-1);ST.flags['audyt:wpadka']=1;ST.flags.audyt_ostrz=1;if(n>=3)ST.flags.zwolnienie=1;audit=(n===1?T.audit_warn:n===2?T.audit:T.audit_fire).replace('{s}',S).replace('{f}',fine)}else audit=T.audit_clean}ST.thefts=0;ST.stolenW=0;if(ST.money<0){const it=Math.ceil(-ST.money*.1);ST.money-=it;audit+=(audit?' ':'')+T.interest.replace('{i}',it);if(ST.money<-350)ST.flags.eksmisja=1}scene('T5',()=>{winState('closed');const c=h('div','center dark sat');c.append(h('h1',null,T.week_h),h('div','sub',`${T.rent}: ${T.dollar}${rent}. ${T.bills}: ${T.dollar}${bl}. ${T.balance}: ${T.dollar}${ST.money}.`+(ST.money<0?' '+T.debt:'')),h('div','sub',`${T.urzad}: ${ST.c.urzad}/10 · ${T.ludzie}: ${ST.c.ludzie}/10`));
 if(mar)c.append(h('div','sub mar',mar));if(audit)c.append(h('div','sub audit',audit));if(ST.day===5)c.append(h('div','sub',T.drawer));
 const w=h('div','ups');w.append(h('div','lab',T.up_h));
 Object.keys(UP).forEach(k=>{const own=ST.up[k];const b=btn(T['up_'+k]+(own?' ('+T.owned+')':' · '+T.dollar+UP[k]),'ghost',()=>{if(own||ST.money<UP[k])return;ST.money-=UP[k];ST.up[k]=1;A.sfx('wallet_open');if(k==='drzwi')A.setDoor(true);b.textContent=T['up_'+k]+' ('+T.owned+')';[...w.querySelectorAll('button')].forEach(x=>x.disabled=true);save()});b.disabled=!!own||ST.money<UP[k];w.append(b)});
 const nb=btn(T.up_none,'ghost',()=>{[...w.querySelectorAll('button')].forEach(x=>x.disabled=true);A.sfx('drawer_small');const nx=c.querySelector('.btn.pulse');nx&&nx.focus()});w.append(nb);if(ST.day<FINAL)c.append(w);
 c.append(btn(ST.day>=FINAL?T.final_h:(DAYS[ST.day+1]?T.week2:T.end),'pulse',nextAfterSat));layer.append(c)})}
function week(){A.sting('koniec');scene('T5',()=>{const c=h('div','center dark');c.append(h('h1',null,T.week_h),h('div','sub',T.end),h('div','sub',`${T.balance}: ${T.dollar}${ST.money} · ${T.urzad}: ${ST.c.urzad}/10 · ${T.ludzie}: ${ST.c.ludzie}/10`));const left=ST.pending.filter(p=>!ST.shown.includes(p));
 if(left.length){const w=h('div','letters');w.style.cssText='position:relative;padding:20px;inset:auto';left.slice(0,3).forEach(p=>{const l=h('div','letter');l.append(h('span','lab',p.item+' · '+fk(p.a)),document.createTextNode(fk(p.echo)));w.append(l)});c.append(w)}
 c.append(btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()}));layer.append(c)})}
/* zakończenia: liczone z decyzji (log) wg koncept/fabula_25_dni.md §8 */
function mayaTesty(){return [[11,'przez_okienko'],[16,'maya_sama'],[21,'wiadomosc_zatwierdzona']].filter(([d,a])=>did(d,a)).length}
function kopieNames(){const L=[];if(did(5,'wykaz_paczke')||did(9,'zetony_victor'))L.push('Gus (0412)');if(did(9,'zetony_victor')||did(22,'stahl_wydaj'))L.push('Maya (0517)');if(did(9,'zetony_victor')||did(15,'victor_od_razu'))L.push('Linh (0623)');if(did(9,'zetony_victor')||did(18,'do_kontroli'))L.push('Dorian (0731)');return L}
function fk(t){const N=kopieNames();return String(t==null?'':t).replace('{min(4, kopie)}',N.length).replace('{kopie}',N.length).replace('{nazwiska}',N.length?T.kopie_l+N.join(', ')+'.':T.kopie_0).split('[imię]').join(ST.name||T.name_def)}
const KOPIE_A=['wykaz_paczke','zetony_victor','victor_od_razu','do_kontroli','komplet_zeznan','wez_200_stahl','dolacz_kopie','wpisz_wykaz'];
const kopie=()=>ST.log.filter(l=>KOPIE_A.includes(l.a)).length;
const did=(d,...a)=>ST.log.some(l=>(GM[l.id]?GM[l.id]._od:l.day)===d&&a.includes(l.a));
function endings(){
 const zag=(did(11,'powiadom_rodzine')||did(17,'zdradz_szczegol')||did(14,'bez')||did(22,'zostaw_otwarte'))?'C':(did(16,'maya_sama')&&did(21,'wiadomosc_zatwierdzona')&&did(22,'przekaz_w_granicach'))?'A':'B';
 const src2=did(8,'kopia_osobno')||did(19,'przyjmij_sprostowanie');
 const skr=(did(23,'wydaj_nora')&&did(18,'rezerwacja_nora')&&did(12,'zabezpiecz','sprawdz_z_nora'))?(src2?'A':'A2'):(did(23,'wydaj_victor')&&did(18,'do_kontroli')&&(did(9,'zetony_victor')||did(12,'zabezpiecz')||did(5,'wykaz_paczke')))?'B':'C';
 const pop=(did(15,'uzgodnij')&&did(20,'komplet_zeznan')&&did(25,'dolacz_kopie')&&(did(13,'odpis_za_zgoda')||did(19,'przyjmij_sprostowanie')))?'A':(did(15,'victor_od_razu')&&(did(20,'poza_audytem')||did(23,'wydaj_victor')))?'C':'B';
 const sam=[did(4,'koperta','wydaj_cicho'),did(12,'wyloz_400'),ST.c.bez>=3,(ST.wez||0)>=2].filter(Boolean).length>=2;
 const gz=k=>!!ST.flags['gest:'+k];const tear=gz('wyrwij');
 const odeb=gz('list')&&has('notatki_3')&&did(15,'uzgodnij')&&(D10||['A','A2','B'].includes(skr))&&zag!=='C'&&kopie()<=1;
 const ep=tear?'wyrwana':odeb?'odebrany':(gz('wpisz')||gz('list'))?'rotacja':sam?'nowysam':ST.c.urzad>=7&&kopie()>=2?'referent':'zostajesz';
 const el=ep==='nowysam'||tear?'N':pop;
 return{zag,skr,pop,ep,tear,el}}
function thr(E){const d=h('div','threads');d.append(h('span','lab',T.th_bar));[[T.th_sam,did(15,'uzgodnij')],[T.th_maya,mayaTesty()>=2],[T.th_skr2,['A','A2','B'].includes(E.skr)],[T.th_notes,has('notatki_3')],[T.th_list,!!ST.flags['gest:list']],[T.th_kasa,!ST.stolenAll]].forEach(([l,on])=>d.append(h('i',on?'on':'',l)));return d}
function ending(){inGame=false;A.music('sobota');A.sting('koniec');const E=endings();try{const S=endsSeen();if(!S.includes(E.ep)){S.push(E.ep);localStorage.setItem(ENDS,JSON.stringify(S))}}catch(e){}
 const nme=ST.name||T.name_def,KN_=kopieNames();
 /* kadry finału: każda nitka to jedna odbitka z jednym akapitem; echa z d24-25, których nie było kiedy pokazać, idą pierwsze */
 const F=[];ST.pending.filter(p=>!ST.shown.includes(p)).slice(-5).forEach(p=>F.push([p.item+' · '+fk(p.a),fk(p.echo)]));
 F.push([T.th_kopie,T.kopie_txt.replace('{n}',KN_.length).replace('{m}',KN_.length)+(KN_.length?'':' '+T.kopie_0),KN_]);
 [['ledger_b','gest_'+(E.tear?'wyrwij':ST.flags['gest:wpisz']?'wpisz':ST.flags['gest:list']?'list':'zamknij')],['th_zag','end_zag_'+E.zag+(E.zag==='A'&&KN_.some(n=>/^Maya/.test(n))?'_k':'')],['th_skr','end_skr_'+E.skr],['th_pop','end_pop_'+E.pop],['you','ep_'+E.ep+(E.ep==='rotacja'&&ST.flags['gest:list']?'_lb':'')+(E.ep==='odebrany'&&mayaTesty()>=2?'_m':'')]].forEach(([th,k])=>F.push([T[th],(T[k]||T[k.replace('_tear','')]||'').replace('{imie}',nme)]));
 if(ST.dlug!=null)F.push([T.th_dlug,ST.dlug>0?T.end_dlug_left.replace('{r}',ST.dlug):T.end_dlug_ok]);
 const ek={wyrwana:'wyrwana_strona',nowysam:'nowy_sam',referent:'referent',odebrany:'odebrany',rotacja:ST.flags['gest:list']?'rotacja_list_bez_warunkow':'rotacja',zostajesz:'zostajesz'}[E.ep];
 const epi=T['epi_'+ek]?T['epi_'+ek].replace('[imię]',nme):T.elias+': '+T['elias_'+E.el];
 const card=([lab,txt,names])=>{const p=h('div','letter fin');p.append(h('span','lab',lab),document.createTextNode(txt));if(names&&names.length){const ul=h('div','kn');names.forEach(n=>ul.append(h('i',null,n)));p.append(ul)}return p};
 scene('T5',()=>{winState('closed');const c=h('div','center dark finale');layer.append(c);
  const summary=all=>{c.innerHTML='';c.classList.add('sumup');c.append(h('h1',null,T.final_h));if(all)F.forEach(f=>{const p=card(f);p.querySelectorAll('.kn i').forEach(x=>x.classList.add('on'));c.append(p)});
   c.append(h('div','sub epi',epi));
   /* klamra z prologiem: ten sam słup, nowy odcinek; tym razem pasek odrywa ktoś inny */
   if(['rotacja','odebrany','nowysam'].includes(E.ep)){const ps=h('div','letter poster endp');ps.append(h('span','lab',T.pr1_lab_end),h('div',null,T.pr1_txt));const st=h('div','strip');st.innerHTML=`<span class="num">0913</span>`;ps.append(st);c.append(ps);if(!FAST)setTimeout(()=>{if(st.isConnected){st.classList.add('torn');A.sfx('newspaper')}},2600)}
   else if(E.ep==='wyrwana')c.append(h('div','sub endnone',T.end_noposter));
   const sc=h('div','share');sc.append(h('div','lab',T.share_h),h('div','sname',nme),thr(E),h('div','sstat',`${T.balance}: ${T.dollar}${ST.money} · ${T.urzad}: ${ST.c.urzad}/10 · ${T.ludzie}: ${ST.c.ludzie}/10`),h('div','send',T['endname_'+E.ep]||''));c.append(sc);
   const ag=btn(T.again,'',()=>{localStorage.removeItem(SAVE);title()});c.append(ag);ag.focus({preventScroll:true})};
  if(FAST||reduce&&false){summary(true);return}
  let k=0;const hint=h('div','finhint',T.fin_next);
  const show=()=>{if(k>=F.length){summary(false);return}c.innerHTML='';const p=card(F[k]);c.append(h('div','fincnt',(k+1)+' / '+F.length),p,hint);A.sfx(k?'slide_light':'newspaper');
   const ns=[...p.querySelectorAll('.kn i')];ns.forEach((x,n)=>setTimeout(()=>{if(x.isConnected){x.classList.add('on');A.stamp();shake(.35)}},700+n*650));
   c._ready=0;setTimeout(()=>c._ready=1,500+ns.length*650)};
  const adv=()=>{if(!c._ready||c.classList.contains('sumup'))return;k++;show()};
  c.onclick=adv;c.tabIndex=0;c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();adv()}};show();setTimeout(()=>c.focus({preventScroll:true}),500)})}
/* TROPY: zbieraj tekst wypowiedziany przez gościa (wejście i odpowiedzi), po nim rozpoznajemy tropy.
   I3: każde pytanie zjada 10 minut nocy. */
function tick(n){ST.clk=Math.min(380,(ST.clk||0)+n);const c=document.querySelector('.wallet .clk');if(c){c.textContent=clk();c.classList.remove('tk');void c.offsetWidth;c.classList.add('tk')}}
{const _say=say;say=function(g,text,m,ton,kto,ask){if(g&&ST.heardId!==g.id){ST.heard='';ST.heardId=g.id}ST.heard=(ST.heard||'')+' '+text;if(ask)tick(10);return _say.apply(this,arguments)}}
/* KOLEJKA (I3): po gościach z imieniem, jeśli do 6:00 zostało dość czasu, wchodzi ktoś bezimienny z krótką sprawą. */
const TL_MAX=3,TL_NEED=45;
function crowdOk(){return window.TLUM&&ST.day>=2&&DAYS[ST.day]&&ST.day<FINAL&&!(D10&&ST.day>=9)&&!(ST.day===NAMED&&!ST.name)&&(ST.tl||0)<TL_MAX&&(ST.clk||0)+TL_NEED<=370}
function crowd(){ST.tl=(ST.tl||0)+1;const id='tl_'+ST.day+'_'+ST.tl,r=rng(hash(id+'|'+(ST.money|0)));const c=TR.tlum(r,id);const ln=LINES[(r()*3)|0];
 const g={id,postac:TRT.tl_who,itemName:nm({sprite:c.sprite}),rzecz:nm({sprite:c.sprite}),sprite:c.sprite,face:'kolejka'+(1+((r()*8)|0)),line:ln};
 ST.stock.push({u:'g:'+id,sprite:c.sprite,line:ln,day:ST.day,no:(ST.no=(ST.no||540)+2),tl:1});
 const end=ok=>{ST.stock=ST.stock.filter(i=>i.u!=='g:'+id);delete window.TROPY[id];tick(20);A.music('day');scene('T1',()=>{winState('open');const e=addWindow(g);setFace(g,'neutralna');e.classList.add('in');talkUI();const tb=document.getElementById('turns');if(tb)tb.remove();
   if(ok){ST.money+=TRT.tl_pay;payFx(TRT.tl_pay);A.sfx('handover')}else A.sfx('refuse');say(g,ok?TRT.tl_ok[(r()*TRT.tl_ok.length)|0]:TRT.tl_bad,'neutralna');
   const qs=document.getElementById('qs');qs.append(btn(T.next,'pulse',()=>{e.classList.remove('in');setTimeout(evening,FAST?0:450)}));qs.firstChild.focus()})};
 g.tlum=end;A.music('talk');
 scene('T1',()=>{winState('open');const e=addWindow(g);setFace(g,'neutralna');talkUI();const tb=document.getElementById('turns');if(tb)tb.remove();setTimeout(()=>{A.knock('impatient');e.classList.add('in')},FAST?0:500);
  layer.append(h('div','step',TRT.tl_band.replace('{p}',TRT.tl_pay).replace('{m}',Math.max(0,370-(ST.clk||0)))));say(g,c.line,'mowi');
  const qs=document.getElementById('qs');qs.append(btn(TRT.tl_go,'pulse',()=>pile(g)));qs.firstChild.focus()})}
{const _ev=evening;evening=function(){if(crowdOk())return crowd();ST.tl=0;return _ev.apply(this,arguments)}}
window.__E=endings;window.__T={ending,evening,saturday,shake,day,windowScene}; /* haki dla bota QA */
window.__S=ST;window.__G=()=>ST;applyPrefs();lampUp();title();
})();
