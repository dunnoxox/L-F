/* Sprawdza, czy każda cecha z game/tropy.js pada w rozmowie (wejście albo odpowiedź) i gdzie.
   Użycie: node qa/tropy_test.js   (kod wyjścia 1, gdy jakaś cecha nie pada nigdzie) */
const path=require('path');global.window={};require(path.join(__dirname,'..','game','data.js'));require(path.join(__dirname,'..','game','tropy.js'));
let bad=0;
for(const id in window.TROPY){const g=window.DATA.find(x=>x.id===id),t=window.TROPY[id];if(!g){console.log(id,'!!! brak gościa');bad++;continue}
 const hit={};Object.keys(t.pola).forEach(k=>hit[k]=[]);
 const see=(l,txt)=>Object.keys(t.pola).forEach(k=>{if(t.re[k].test(txt||''))hit[k].push(l)});
 see('wejście',g.wejscie);
 const walk=(arr,d)=>(arr||[]).forEach(x=>{see((x.wymaga?'[sekret] ':'')+'poz.'+d+' „'+x.tekst+'”',x.odpowiedz);walk(x.dalej,d+1)});
 if(g.rozmowa)walk(g.rozmowa,0);else (g.tury||[]).forEach((tu,i)=>tu.pytania.forEach(x=>see((x.wymaga?'[sekret] ':'')+'tura '+i+' „'+x.tekst+'”',x.odpowiedz)));
 console.log('\n'+id);Object.keys(hit).forEach(k=>{const h=hit[k];if(!h.length){bad++;console.log('  !!! '+k+' ('+t.cel[k]+'): nie pada w rozmowie')}else console.log('  '+k+': '+h.join(' | '))});
 Object.keys(t.pola).forEach(k=>{if(!t.re[k].test(t.dop[k]||''))console.log('  (dopytanie „'+k+'” nie pasuje do własnego wyrażenia, działa przez ST.trk)')});
 t.bl.forEach((b,i)=>{if(!Object.keys(t.pola).some(k=>k in b&&b[k]!==t.cel[k])){bad++;console.log('  !!! bliźniak '+i+' nie różni się od celu')}})}
process.exit(bad?1:0);
