// Definicje osiągnięć Steam. Jedno źródło prawdy: używa go most w preload.js
// (na żywo, ze stanu gry) i test build/test-achievements.js.
// Klucze API (apiName) wpisz identycznie w Steamworks > Achievements.
// Stan gry = obiekt ST z game.js: {day, log:[{id,a,day}], flags, secrets, thefts, money, c:{urzad,ludzie,bez}, up}
const FINAL = 25;
const cnt = (ST, re) => (ST.log || []).filter(l => re.test(l.a)).length;
const over = ST => ST.day > FINAL;           // game.js: po sobocie dnia 25 day = 26 i pokazuje się ending()
const ACH = [
  { id: 'FIRST_VISITOR',   pl: 'Pierwszy petent',        en: 'First Visitor',        desc_pl: 'Zakończ pierwszą rozmowę przy okienku.', test: ST => (ST.log || []).length >= 1 },
  { id: 'FIRST_SECRET',    pl: 'Cudze sekrety',          en: "Other People's Secrets", desc_pl: 'Odkryj sekret ukryty w zgubionej rzeczy.', test: ST => Object.keys(ST.secrets || {}).length >= 1 },
  { id: 'TEN_SECRETS',     pl: 'Wiesz za dużo',          en: 'You Know Too Much',    desc_pl: 'Odkryj 10 sekretów.', test: ST => Object.keys(ST.secrets || {}).length >= 10 },
  { id: 'WEEK_ONE',        pl: 'Pierwsza wypłata',       en: 'First Payday',         desc_pl: 'Doczekaj pierwszej soboty.', test: ST => ST.day >= 6 },
  { id: 'DAY_TEN',         pl: 'Stały bywalec',          en: 'Regular',              desc_pl: 'Przetrwaj 10 dni.', test: ST => ST.day >= 11 },
  { id: 'DAY_FIFTEEN',     pl: 'Dyżurny',                en: 'Night Clerk',          desc_pl: 'Przetrwaj 15 dni.', test: ST => ST.day >= 16 },
  { id: 'STORM',           pl: 'Burza',                  en: 'Storm Warning',        desc_pl: 'Przetrwaj pierwszą burzę przy okienku.', test: ST => ST.day >= 4 },
  { id: 'FINISH',          pl: 'Koniec zmiany',          en: 'End of Shift',         desc_pl: 'Dojdź do końca 25. dnia.', test: over },
  { id: 'HANDS_OPEN',      pl: 'Miękkie serce',          en: 'Soft Heart',           desc_pl: 'Wydaj 15 rzeczy.', test: ST => cnt(ST, /^wydaj/) >= 15 },
  { id: 'BY_THE_BOOK',     pl: 'Według przepisu',        en: 'By the Book',          desc_pl: 'Odmów 10 razy.', test: ST => cnt(ST, /^odmow/) >= 10 },
  { id: 'STICKY_FINGERS',  pl: 'Lepkie palce',           en: 'Sticky Fingers',       desc_pl: 'Przywłaszcz sobie cudzą rzecz.', test: ST => (ST.thefts || 0) > 0 || cnt(ST, /^przywlaszcz/) > 0 },
  { id: 'CAUGHT',          pl: 'Wpadka',                 en: 'Audit Day',            desc_pl: 'Daj się złapać podczas kontroli.', test: ST => !!(ST.flags || {})['audyt:wpadka'] },
  { id: 'RICH',            pl: 'Na plusie',              en: 'In the Black',         desc_pl: 'Uzbieraj 500 $.', test: ST => ST.money >= 500 },
  { id: 'BROKE',           pl: 'Na minusie',             en: 'In the Red',           desc_pl: 'Zejdź poniżej zera.', test: ST => ST.money < 0 },
  { id: 'RENOVATION',      pl: 'Remont',                 en: 'Renovation',           desc_pl: 'Kup wszystkie trzy ulepszenia biura.', test: ST => ['lampa', 'drzwi', 'regal'].every(k => (ST.up || {})[k]) },
  { id: 'CLEAN_HANDS',     pl: 'Czyste ręce',            en: 'Clean Hands',          desc_pl: 'Skończ grę bez żadnej kradzieży ani wpisu na boku.', test: ST => over(ST) && (ST.c || {}).bez === 0 },
  { id: 'LEDGER_NOTHING',  pl: 'Księga: nic',            en: 'Ledger: Leave It',     desc_pl: 'W ostatniej scenie zostaw księgę w spokoju.', test: ST => !!(ST.flags || {})['gest:nic'] },
  { id: 'LEDGER_FIX',      pl: 'Księga: dopisek',        en: 'Ledger: Amend',        desc_pl: 'W ostatniej scenie dopisz poprawkę.', test: ST => !!(ST.flags || {})['gest:dopisz'] },
  { id: 'LEDGER_TEAR',     pl: 'Księga: wyrwana',        en: 'Ledger: Torn Out',     desc_pl: 'W ostatniej scenie wyrwij kartkę.', test: ST => !!(ST.flags || {})['gest:wyrwij'] },
];
module.exports = { ACH, FINAL };
