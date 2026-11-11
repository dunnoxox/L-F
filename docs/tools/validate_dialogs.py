#!/usr/bin/env python3
"""Walidator dialogów Okienka (v2). Użycie: python3 -I validate_dialogs.py plik1.md [plik2.md ...]
Sprawdza (zgodnie z dialogi_biblia_prompt.md): schemat, 3 tury po min. 3 pytania bazowe, wymaga (sekret / id:akcja / a|b / ustawia),
ton i mina z puli, pytanie z sekretem zastępuje pytanie bazowe o tym samym tonie, decyzje (akcja, reakcja, zysk, strata, echo, etykieta
dla własnych akcji), limity długości, zakaz "pan/pani" do gracza, zakaz -łem/-łam w pytaniach gracza, stare imiona Mara/Nell."""
import re, json, sys

TONY = {'uprzejme', 'rzeczowe', 'niewygodne'}
MINY = {'mowi', 'neutralna', 'emocja', 'klamie'}
STD = {'wydaj', 'odmow', 'zatrzymaj', 'zadzwon'}
LIM = {'wejscie': 300, 'odpowiedz': 240, 'tekst': 75, 'reakcja': 240, 'zysk': 190, 'strata': 190, 'echo': 420, 'etykieta': 60}
ADDR = [r"\b(proszę|dziękuję|czy|niech|przepraszam|pytam)\s+(pan|pani|panu|panią|pana)\b",
        r"\b(pan|pani)\s+(może|ma|wie|chce|zna|widział|widziała|zrobił|zrobiła|poda|podpisze|zajrzał|zajrzała)\b"]
errs = []

def E(m): errs.append(m)

blocks = []
for f in sys.argv[1:]:
    t = open(f, encoding='utf-8').read()
    if re.search(r"\b(Mara|Nell)\b", t): E(f"{f}: stare imiona Mara/Nell")
    for b in re.findall(r"```json\n(.*?)```", t, re.S):
        try:
            blocks.append((f, json.loads(b)))
        except Exception as e:
            E(f"{f}: JSON: {e}")

guests, extras = [], {}
for f, g in blocks:
    for x in (g if isinstance(g, list) else [g]):
        if 'extra' in x:
            extras.update(x['extra']); continue
        guests.append(x)

ids = [x['id'] for x in guests]
for i in {i for i in ids if ids.count(i) > 1}: E(f"id zdublowane: {i}")
secrets = set()
for x in guests:
    for w in x.get('wnetrze', []): secrets.add(w['sekret_id'])
    for tr in x.get('tury', []):
        for q in tr['pytania']:
            if q.get('ustawia'): secrets.add(q['ustawia'])
for d, ex in extras.items():
    for w in ex.get('wnetrze', []): secrets.add(w['sekret_id'])
tokens = {f"{x['id']}:{d['akcja']}" for x in guests for d in x.get('decyzje', [])}

def lim(i, key, val):
    if len(val) > LIM[key]: E(f"{i}: {key} za długie ({len(val)}>{LIM[key]}): {val[:50]}…")

def addr(i, where, s):
    for p in ADDR:
        if re.search(p, s, re.I): E(f"{i}: zwrot do gracza „pan/pani” w {where}: {s[:60]}…")

for x in guests:
    i = x['id']; ludzie = set(x.get('ludzie', {}))
    if len(x['tury']) != 3: E(f"{i}: tur {len(x['tury'])} != 3")
    if not x.get('wejscie'): E(f"{i}: brak wejscie")
    else: lim(i, 'wejscie', x['wejscie']); addr(i, 'wejscie', x['wejscie'])
    for k, v in (x.get('wejscie_jesli') or {}).items():
        if k not in tokens: E(f"{i}: wejscie_jesli '{k}' bez takiej decyzji")
        lim(i, 'wejscie', v); addr(i, 'wejscie_jesli', v)
    for n, tr in enumerate(x['tury'], 1):
        pyt = tr['pytania']
        base = [q for q in pyt if not q.get('wymaga')]
        if len(base) < 3: E(f"{i} tura {n}: pytań bazowych {len(base)} < 3")
        for q in pyt:
            if q['ton'] not in TONY: E(f"{i} tura {n}: ton '{q['ton']}'")
            if q['mina'] not in MINY: E(f"{i} tura {n}: mina '{q['mina']}'")
            if not q.get('odpowiedz'): E(f"{i} tura {n}: pusta odpowiedź")
            lim(i, 'odpowiedz', q['odpowiedz']); lim(i, 'tekst', q['tekst'])
            addr(i, 'odpowiedzi', q['odpowiedz'])
            if re.search(r"\b\w+(łem|łam)\b", q['tekst'], re.I): E(f"{i} tura {n}: forma płciowa gracza w pytaniu: {q['tekst']}")
            if q.get('kto') and q['kto'] not in ludzie: E(f"{i} tura {n}: kto '{q['kto']}' spoza ludzie")
            w = q.get('wymaga')
            if w:
                for a in w.split('|'):
                    if a not in secrets and a not in tokens: E(f"{i} tura {n}: wymaga '{a}' bez sekretu/decyzji")
                if q['ton'] not in {b['ton'] for b in base}: E(f"{i} tura {n}: wariant z sekretem bez pytania bazowego o tonie {q['ton']}")
    ds = x.get('decyzje', [])
    if len(ds) < 2: E(f"{i}: mniej niż 2 decyzje")
    for d in ds:
        for k in ('akcja', 'reakcja', 'zysk', 'strata', 'echo'):
            if not d.get(k): E(f"{i} decyzja {d.get('akcja')}: brak {k}")
        if d.get('akcja') not in STD and not d.get('etykieta'): E(f"{i} decyzja {d.get('akcja')}: własna akcja bez etykieta")
        if d.get('etykieta'): lim(i, 'etykieta', d['etykieta'])
        if d.get('wymaga'):
            for a in str(d['wymaga']).split('|'):
                if a not in secrets and a not in tokens: E(f"{i} decyzja {d.get('akcja')}: wymaga '{a}' bez sekretu/decyzji")
        if d.get('kto') and d['kto'] not in ludzie: E(f"{i} decyzja {d.get('akcja')}: kto spoza ludzie")
        for k in ('reakcja', 'zysk', 'strata'):
            if d.get(k): lim(i, k, d[k]); addr(i, k, d[k])
        e = d.get('echo') or {}
        if not isinstance(e.get('za_dni'), int) or not 1 <= e['za_dni'] <= 4: E(f"{i} decyzja {d.get('akcja')}: echo.za_dni")
        if e.get('forma') not in ('list', 'gosc'): E(f"{i} decyzja {d.get('akcja')}: echo.forma")
        if e.get('tekst'): lim(i, 'echo', e['tekst'])
        if re.search(r"nic nie tracisz|brak straty", d.get('strata', ''), re.I): E(f"{i} decyzja {d.get('akcja')}: pusta strata")

print("OK: %d gości, %d sekretów, %d znaczników decyzji" % (len(guests), len(secrets), len(tokens)) if not errs else "\n".join(errs))
sys.exit(1 if errs else 0)
