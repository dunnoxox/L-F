#!/usr/bin/env python3
"""Wstawia rozmowy z plików *.txt (zwięzły zapis drzewa) do bloków JSON w koncept/okienko_rozmowy_v3_*.md.
Pole "tury" znika, w jego miejscu pojawia się "rozmowa": lista tematów, każdy z opcjonalnym "dalej".

Zapis:
  # id_sceny
  ? u [@wymaga] [+ustawia] [~kto] [#klucz] [%gasi] Pytanie gracza        (u uprzejme, r rzeczowe, n niewygodne)
  = m Odpowiedź gościa                                           (m mówi, n neutralna, e emocja, k kłamie)
   ? r Dopytanie (jedna spacja wcięcia = poziom niżej; widać je tylko zaraz po odpowiedzi wyżej)
   = n ...
  #klucz: dwa pytania o to samo (zadanie jednego chowa drugie); %gasi: pytanie znika, gdy padło pytanie z tym kluczem
  ! akcja Nowa reakcja gościa na decyzję
  > akcja Nowy tekst kartki o świcie (echo tej decyzji; tylko dla akcji, które już mają echo)
Uruchom: python3 -I koncept/rozmowy_dsl/wstaw.py
"""
import re, json, glob, os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); KON = os.path.join(HERE, '..')
TON = {'u': 'uprzejme', 'r': 'rzeczowe', 'n': 'niewygodne'}; MINA = {'m': 'mowi', 'n': 'neutralna', 'e': 'emocja', 'k': 'klamie'}
S = {}; cur = None; stack = []
for f in sorted(glob.glob(os.path.join(HERE, '*.txt'))):
    for no, raw in enumerate(open(f, encoding='utf-8'), 1):
        ln = raw.rstrip('\n'); where = f'{os.path.basename(f)}:{no}'
        if not ln.strip() or ln.startswith('//'): continue
        if ln.startswith('# '):
            cur = S.setdefault(ln[2:].strip(), {'rozmowa': [], 'reakcje': {}, 'echa': {}}); stack = []; continue
        if ln.startswith('!'):
            a, t = ln[1:].strip().split(' ', 1); cur['reakcje'][a] = t.strip(); continue
        if ln.startswith('>'):
            a, t = ln[1:].strip().split(' ', 1); cur['echa'][a] = t.strip(); continue
        d = len(ln) - len(ln.lstrip(' ')); body = ln.strip()
        if body[0] == '?':
            p = body[1:].split(); ton = p.pop(0); q = {}
            assert ton in TON, where
            while p and p[0][0] in '@+~#%' and len(p[0]) > 1:
                a = p.pop(0); q[{'@': 'wymaga', '+': 'ustawia', '~': 'kto', '#': 'klucz', '%': 'gasi'}[a[0]]] = a[1:]
            q = {'tekst': ' '.join(p), 'ton': TON[ton], 'wymaga': q.pop('wymaga', None), **q}
            assert d <= len(stack), where
            stack = stack[:d]
            (cur['rozmowa'] if d == 0 else stack[-1].setdefault('dalej', [])).append(q); stack.append(q)
        elif body[0] == '=':
            m, t = body[1:].strip().split(' ', 1); assert m in MINA, where
            q = stack[d]; assert 'odpowiedz' not in q, where
            q['odpowiedz'] = t.strip(); q['mina'] = MINA[m]
            if 'dalej' in q: q['dalej'] = q.pop('dalej')
        else: sys.exit('zła linia ' + where)
def order(q):
    o = {k: q[k] for k in ('tekst', 'ton', 'wymaga', 'ustawia', 'kto', 'klucz', 'gasi', 'odpowiedz', 'mina') if k in q}
    assert 'odpowiedz' in q, q['tekst']
    if q.get('dalej'): o['dalej'] = [order(x) for x in q['dalej']]
    return o
done = set()
for f in sorted(glob.glob(os.path.join(KON, 'okienko_rozmowy_v3*.md'))):
    t = open(f, encoding='utf-8').read()
    def rep(m):
        g = json.loads(m.group(1))
        s = S.get(g.get('id'))
        if not s: return m.group(0)
        out = {}
        for k, v in g.items():
            if k in ('tury', 'rozmowa'):
                if 'rozmowa' not in out: out['rozmowa'] = [order(q) for q in s['rozmowa']]
            else: out[k] = v
        assert 'rozmowa' in out, g['id']
        for d in out['decyzje']:
            if d['akcja'] in s['reakcje']: d['reakcja'] = s['reakcje'].pop(d['akcja'])
        assert not s['reakcje'], (g['id'], s['reakcje'])
        for d in out['decyzje']:
            if d['akcja'] in s['echa']:
                assert isinstance(d.get('echo'), dict), (g['id'], d['akcja'], 'brak echa')
                d['echo']['tekst'] = s['echa'].pop(d['akcja'])
        assert not s['echa'], (g['id'], s['echa'])
        done.add(g['id']); return '```json\n' + json.dumps(out, ensure_ascii=False, indent=2) + '\n```'
    t2 = re.sub(r"```json\n(.*?)```", rep, t, flags=re.S)
    if t2 != t: open(f, 'w', encoding='utf-8').write(t2)
miss = set(S) - done
print('wstawione sceny:', len(done), 'nieznane id:', sorted(miss))
sys.exit(1 if miss else 0)
