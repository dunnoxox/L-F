/* Test ścieżki startowej (UX_PROWADZENIE §10.1 pkt 9): od NOWEJ ZMIANY do pierwszej kwestii gościa.
   Uruchom: (cd game && python3 -m http.server 8765) & node docs/tools/test_start.js
   Zrzuty: docs/ux/start/ (nie commitujemy). */
const {chromium}=require('playwright');const fs=require('fs');
const URL=process.env.URL||'http://localhost:8765/index.html',OUT='docs/ux/start/';fs.mkdirSync(OUT,{recursive:true});
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
const S=n=>p.screenshot({path:OUT+n+'.png'});
await p.goto(URL);await p.evaluate(()=>localStorage.clear());await p.reload();await p.waitForTimeout(3000);await S('01_tytul');
await p.mouse.click(300,1000);await p.waitForTimeout(1300);await S('02_fraud');
const t0=Date.now();let n=0;
await p.keyboard.press('Enter');n++;await p.waitForTimeout(1200);await S('03_slup');
const sb=await p.locator('.strip').boundingBox();await p.mouse.move(sb.x+sb.width/2,sb.y+sb.height/2);await p.mouse.down();for(let i=1;i<=10;i++){await p.mouse.move(sb.x+sb.width/2,sb.y+sb.height/2+i*12);await p.waitForTimeout(30)}await p.mouse.up();n++;
await p.waitForTimeout(2600);await S('04_umowa');
await p.click('.btn.pen');n++;await p.waitForTimeout(2600);await S('05_karta_dnia');await p.waitForTimeout(2600);await S('06_dostawa');
await p.click('.zguba:not(.mute)');n++;await p.waitForTimeout(1200);
await p.click('.hot',{force:true});n++;await p.waitForTimeout(800);await S('07_kwit');
await p.click('.nextrow .btn');n++;await p.waitForTimeout(1600);await S('08_pukanie');
await p.click('.curtain');n++;await p.waitForTimeout(1500);await S('09_gosc');
const say=await p.locator('#say').innerText().catch(()=>'');
const ok=say.length>20&&!errs.length;
console.log(JSON.stringify({interakcje:n,sekundy_bota:(Date.now()-t0)/1000,pierwsza_kwestia:say.slice(0,90),bledy:errs,ok}));
await b.close();process.exit(ok?0:1)})();
