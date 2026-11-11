/* Mikser Okienka (WebAudio). Szyny: Master <- Ambience(Outside[LP okienka], Inside), SFX, Voice, UI. Suwaki w dB (v^2).
   Klipy: assets/snd (42 pliki, znormalizowane peakiem wg tabeli w docs). Brak klipu = fallback syntezowany.
   NIEZMIERZONE: loudness całości (cel -24 LUFS), brzmienie. */
window.AUD=(function(){
 let ac,B={},win='init',S={};const vol=Object.assign({master:.8,amb:.8,sfx:.8,voice:.8,music:.7},JSON.parse(localStorage.getItem('okienko_vol')||'{}'));
 const lin=v=>v<=0?0:v*v,rnd=(a,b)=>a+Math.random()*(b-a);
 const NAMES=['amb_building_creak','amb_car_pass_wet','amb_clock_tick','amb_footsteps_corridor_far','amb_gutter_drip','amb_rain_glass','amb_rain_heavy_far','amb_rain_tin','amb_sodium_hum','amb_thunder_far','amb_traffic_distant','amb_tram_far','amb_vent','amb_wind_gap','sfx_bag_zip','sfx_bell_window','sfx_delivery_tram','sfx_door_lock_day_end','sfx_drawer_big','sfx_drawer_small','sfx_handover','sfx_knock_impatient','sfx_knock_insistent','sfx_knock_polite','sfx_lamp_flicker','sfx_lock_large','sfx_lock_small','sfx_newspaper','sfx_phone_old_ring','sfx_pile_collapse','sfx_pile_dig','sfx_power_out','sfx_refuse','sfx_slide_heavy','sfx_slide_light','sfx_steps_boots','sfx_steps_heels','sfx_steps_sneakers','sfx_trapdoor','sfx_wallet_open','sfx_window_down','sfx_window_up'];
 function mk(name,dest,g){const n=ac.createGain();n.gain.value=g==null?1:g;n.connect(dest);B[name]=n;return n}
 function noiseBuf(sec,brown){const n=ac.sampleRate*sec,b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);let l=0;for(let i=0;i<n;i++){const w=Math.random()*2-1;if(brown){l=(l+0.02*w)/1.02;d[i]=l*14}else d[i]=w}return b}
 function load(n){return fetch('assets/snd/'+n+'.mp3').then(r=>r.arrayBuffer()).then(b=>ac.decodeAudioData(b)).then(buf=>{S[n]=buf}).catch(()=>{})}
 /* pętla z lekkim skrawaniem brzegów (szew mp3) */
 function loop(n,dest,g){const buf=S[n];if(!buf)return null;const s=ac.createBufferSource();s.buffer=buf;s.loop=true;s.loopStart=.05;s.loopEnd=buf.duration-.05;const gn=ac.createGain();gn.gain.value=g;s.connect(gn).connect(dest);s.start(0,rnd(0,buf.duration-.2));return gn}
 function play(n,dest,g,rate,pan){const buf=S[n];if(!buf)return false;const s=ac.createBufferSource();s.buffer=buf;if(rate)s.playbackRate.value=rate;const gn=ac.createGain();gn.gain.value=g==null?1:g;let out=gn;s.connect(gn);if(pan!=null&&ac.createStereoPanner){const p=ac.createStereoPanner();p.pan.value=pan;gn.connect(p);out=p}out.connect(dest);s.start();return true}
 /* MUZYKA: pliki z assets/music (bed, piano, cello, tension, menu, sobota + stingery st_*). Brak pliku = cisza, bez błędu. */
 const MU={},ML={};const MUS=['bed','piano','cello','tension','menu','sobota'],STG=['st_dzien_start','st_dzien_koniec','st_sekret','st_klamstwo','st_decyzja','st_wydarzenie','st_koniec'];
 const MF={bed:'mus_bed_01',piano:'mus_piano_01',tension:'mus_tension_01',menu:'mus_menu_01',sobota:'mus_saturday_01'},TRIM={bed:.25,piano:.56,tension:.33,menu:.45,sobota:.45};/* TRIM wyrównuje utwory (bed -14 LUFS, reszta -18..-23) do ok. -26 LUFS */
function loadMu(n){if(!(MU.__have||[]).includes(n))return Promise.resolve();const f=MF[n]?MF[n]+'_'+'ab'[0]:n;return Promise.all(MF[n]?['a','b'].map(v=>ld(n+'_'+v,MF[n]+'_'+v)):[ld(n,n)])}
function ld(k,f){return fetch('assets/music/'+f+'.mp3').then(r=>{if(!r.ok)throw 0;return r.arrayBuffer()}).then(b=>ac.decodeAudioData(b)).then(buf=>{MU[k]=buf}).catch(()=>{})}
function startMu(){Object.keys(MU).filter(n=>!n.startsWith('__')&&!n.startsWith('st_')).forEach(n=>{const s=ac.createBufferSource();s.buffer=MU[n];s.loop=true;s.loopStart=1;s.loopEnd=Math.max(2,MU[n].duration-1);const g=ac.createGain();g.gain.value=0;s.connect(g).connect(B.music);s.start();ML[n]=g});if(MU.__want)music(MU.__want)}
 const SCENE={menu:{menu:1},day:{bed:1},talk:{bed:.8,piano:.7,cello:.0},tension:{bed:.7,tension:.8},sobota:{sobota:1}};
 let rot=0;const VAR=n=>{const [b,v]=n.split('_');return v?((rot+['bed','piano','tension','menu','sobota'].indexOf(b))%2===(v==='a'?0:1)):true};
function music(sc){if(['day','menu','sobota'].includes(sc)&&sc!==MU.__cur)rot++;MU.__cur=sc;MU.__want=sc;if(!ac)return;const m=SCENE[sc]||{};const t=ac.currentTime;Object.keys(ML).forEach(n=>{const b=n.split('_')[0];ML[n].gain.setTargetAtTime(VAR(n)?(m[b]||0)*(TRIM[b]||1):0,t,1.2)})}
 function sting(n){if(!ac||!MU['st_'+n])return false;const s=ac.createBufferSource();s.buffer=MU['st_'+n];const g=ac.createGain();g.gain.value=.9;s.connect(g).connect(B.music);s.start();return true}
 function init(){ if(ac)return; try{ac=new (window.AudioContext||window.webkitAudioContext)()}catch(e){return}
  const lim=ac.createDynamicsCompressor();lim.threshold.value=-3;lim.ratio.value=20;lim.attack.value=.003;lim.release.value=.2;lim.connect(ac.destination);
  mk('master',lim);mk('music',B.master);mk('amb',B.master);mk('inside',B.amb);mk('sfx',B.master);mk('voice',B.master);mk('ui',B.master);
  const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1900;B.outside=ac.createGain();B.outside.gain.value=.6;B.outside.connect(lp).connect(B.amb);B.lp=lp;
  setVolumes();Promise.all(NAMES.map(load)).then(start);fetch('assets/music/manifest.json').then(r=>r.json()).catch(()=>[]).then(l=>{MU.__have=l;return Promise.all(MUS.concat(STG).map(loadMu))}).then(startMu)}
 function start(){
  if(S.amb_rain_glass){loop('amb_rain_glass',B.outside,.55);loop('amb_rain_tin',B.outside,.2);loop('amb_rain_heavy_far',B.outside,.5);loop('amb_gutter_drip',B.outside,.18);loop('amb_traffic_distant',B.outside,.2);loop('amb_wind_gap',B.outside,.1)}
  else synthRain();
  B.hum=loop('amb_sodium_hum',B.inside,.12)||synthHum();loop('amb_vent',B.inside,.1);const ck=loop('amb_clock_tick',B.inside,.1);if(!ck)setInterval(()=>tone(ac.currentTime,1800,.012,.02,B.inside,'square'),1000);
  const rare=(n,bus,g,a,b,pan)=>{const go=()=>{play(n,bus,g*rnd(.7,1),rnd(.95,1.05),pan?rnd(-.8,.8):null);setTimeout(go,rnd(a,b)*1000)};setTimeout(go,rnd(a,b)*1000)};
  rare('amb_car_pass_wet',B.outside,.22,10,28,1);rare('amb_tram_far',B.outside,.14,35,80,1);rare('amb_thunder_far',B.outside,.5,60,150);rare('amb_building_creak',B.inside,.2,22,55);rare('amb_footsteps_corridor_far',B.inside,.14,35,90,1);
  scheduleDrops();setWindow(win==='init'?'closed':win)}
 /* fallbacki syntezowane (gdy klipów brak) */
 function synthRain(){const w=noiseBuf(3),br=noiseBuf(3,true);[[w,'bandpass',3600,.5,.10],[w,'bandpass',1000,.8,.05],[br,'lowpass',380,.7,.35]].forEach(([b,t,f,q,g])=>{const s=ac.createBufferSource();s.buffer=b;s.loop=true;const fl=ac.createBiquadFilter();fl.type=t;fl.frequency.value=f;fl.Q.value=q;const gn=ac.createGain();gn.gain.value=g;s.connect(fl).connect(gn).connect(B.outside);s.start()})}
 function synthHum(){const o=ac.createOscillator(),o2=ac.createOscillator(),lg=ac.createGain();o.frequency.value=100;o2.frequency.value=200;o.type='sawtooth';lg.gain.value=.006;o.connect(lg);o2.connect(lg);lg.connect(B.inside);o.start();o2.start();return lg}
 function setVolumes(){if(!ac)return;B.master.gain.value=lin(vol.master);B.amb.gain.value=lin(vol.amb);B.sfx.gain.value=lin(vol.sfx);B.ui.gain.value=lin(vol.sfx);B.voice.gain.value=lin(vol.voice);B.music.gain.value=lin(vol.music)}
 function setVol(k,v){vol[k]=v;localStorage.setItem('okienko_vol',JSON.stringify(vol));setVolumes()}
 function tone(t,f,v,dur,bus,type,fEnd){const o=ac.createOscillator(),g=ac.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(fEnd)o.frequency.exponentialRampToValueAtTime(fEnd,t+dur*.6);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);o.connect(g).connect(bus);o.start(t);o.stop(t+dur+.02)}
 function burst(t,f,q,v,dur,bus){const s=ac.createBufferSource();s.buffer=noiseBuf(1);const fl=ac.createBiquadFilter();fl.type='bandpass';fl.frequency.value=f;fl.Q.value=q;const g=ac.createGain();g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);s.connect(fl).connect(g).connect(bus);s.start(t,Math.random()*.5);s.stop(t+dur+.02)}
 function scheduleDrops(){setInterval(()=>{if(!ac)return;const t=ac.currentTime;if(Math.random()<.5)tone(t,2400+Math.random()*3000,.02,.03,B.outside)},400)}
 /* okienko jako filtr; klipy okna */
 function setWindow(s){if(!ac||s===win)return;const first=win==='init';win=s;const t=ac.currentTime,f={closed:B.door?1100:1900,ajar:5000,open:11000}[s],g={closed:B.door?.3:.6,ajar:.85,open:1}[s];
  B.lp.frequency.cancelScheduledValues(t);B.lp.frequency.setTargetAtTime(f,t,.08);B.outside.gain.setTargetAtTime(g,t,.08);
  if(!first&&!play(s==='open'?'sfx_window_up':'sfx_window_down',B.sfx,.5))burst(t,300,2,.12,.12,B.sfx)}
 function setDoor(on){if(!ac)return;B.door=on?1:0;if(win==='closed'){B.lp.frequency.setTargetAtTime(on?1100:1900,ac.currentTime,.08);B.outside.gain.setTargetAtTime(on?.3:.6,ac.currentTime,.08)}}
 const GAIN={knock_polite:.7,knock_insistent:.7,knock_impatient:.7,bell_window:.55,steps_boots:.6,steps_heels:.6,steps_sneakers:.6,delivery_tram:.5,handover:.7,refuse:.6,drawer_small:.6,drawer_big:.6,lock_large:.6,lock_small:.5,newspaper:.5,phone_old_ring:.4,pile_dig:.45,pile_collapse:.7,slide_light:.5,slide_heavy:.5,door_lock_day_end:.7,wallet_open:.6,bag_zip:.5,trapdoor:.6,lamp_flicker:.6,power_out:.6,window_up:.5,window_down:.5};
 const last={};
 function sfx(n,limit){if(!ac)return false;const now=performance.now();if(limit&&last[n]&&now-last[n]<limit)return false;last[n]=now;return play('sfx_'+n,B.sfx,GAIN[n]||.6,rnd(.97,1.03))}
 function knock(kind){if(!ac)return;if(!sfx('knock_'+(kind||'polite'))){const t=ac.currentTime;[0,.17,.34].forEach(d=>tone(t+d,190,.35,.14,B.sfx,'sine',95))}}
 function bell(){if(!ac)return;if(!sfx('bell_window')){const t=ac.currentTime;tone(t,1320,.12,1.1,B.sfx);tone(t,1980,.06,.8,B.sfx)}}
 function steps(kind){if(!ac)return;if(!sfx('steps_'+(kind||'boots'))){const t=ac.currentTime;[0,.35,.7].forEach(d=>burst(t+d,500,1.5,.18,.12,B.sfx))}}
 function tick(){if(ac)tone(ac.currentTime,520,.07,.14,B.ui)}
 function stamp(){if(!ac)return;const t=ac.currentTime;tone(t,90,.5,.25,B.sfx,'sine',50)}
 function sweep(){if(!ac)return;if(!sfx('pile_dig',500))burst(ac.currentTime,1200,.8,.2,.3,B.sfx)}
 function mumble(len,intim){if(!ac)return;const t0=ac.currentTime,n=Math.min(14,Math.ceil(len/5));
  for(let i=0;i<n;i++)burst(t0+i*.13,160+Math.random()*200-80*(intim||0),3,.05*(1-.5*(intim||0)),.1,B.voice);
  B.amb.gain.setTargetAtTime(lin(vol.amb)*.7,t0,.05);B.amb.gain.setTargetAtTime(lin(vol.amb),t0+n*.13+.2,.4)}
 /* jedno zdarzenie lampy = obraz (callback) + dźwięk (klip + zanik brzęczenia). RNG kosmetyczny w grze, osobny od seeda. */
 function lampBlink(cb){if(!ac){cb&&cb();return}const t=ac.currentTime;if(B.hum){B.hum.gain.cancelScheduledValues(t);B.hum.gain.setTargetAtTime(B.hum.gain.value*2.5,t,.1);B.hum.gain.setTargetAtTime(.12,t+.5,.2)}
  if(!sfx('lamp_flicker'))burst(t+.3,3000,1,.3,.05,B.sfx);cb&&setTimeout(cb,350)}
 function thunder(){if(!ac)return;play('amb_thunder_far',B.outside,.9,rnd(.9,1));sfx('pile_collapse');setTimeout(()=>{sfx('power_out');lampBlink()},700)}
 return {init,music,sting,setDoor,thunder,setVol,vol,setWindow,knock,bell,steps,sfx,tick,stamp,sweep,mumble,lampBlink,on:()=>!!ac,win:()=>win,loaded:()=>Object.keys(S).length}
})();
