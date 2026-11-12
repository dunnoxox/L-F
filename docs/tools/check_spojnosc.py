#!/usr/bin/env python3
"""Spójność świata: czy linia, którą gość podaje w rozmowie, zgadza się z linią
skrzynki, do której gra wkłada jego rzecz (pole `line` w game/data.js).

Uruchom:  python3 -I docs/tools/check_spojnosc.py [game/data.js]
Kod wyjścia 1, gdy są niezgodności. Odpowiedzi z mina=klamie są pomijane
(kłamstwo o linii jest dozwolone, ale musi mieć dowód w księdze przyjęć).
Burza (ST.storm) przesuwa skrzynki celowo: to sprawdza dane, nie burzę.
"""
import json, re, sys

PAT = {
    '4':  r'\bczw[oó]r(ce|ka|kę|ki|ką|ek)\b|\blinii? 4\b',
    '6':  r'\bsz[oó]st(ce|ka|kę|ki|ką)\b|\blinii? 6\b',
    '11': r'\bjedenast(ce|ka|kę|ki|ką)\b|\blinii? 11\b',
}
# "wróciła szóstką" = rzecz przyjechała tą linią (ważniejsze niż miejsce zgubienia)
RET = r'\b(wróci\w*|przyjecha\w*|przywiezi\w*)\s+(czwórką|szóstką|jedenastką)'
RMAP = {'czwórką': '4', 'szóstką': '6', 'jedenastką': '11'}


def load(path):
    s = open(path, encoding='utf-8').read()
    return json.JSONDecoder().raw_decode(s[s.index('['):])[0]


def said_lines(g):
    t = g.get('wejscie', '') + ' ' + ' '.join(
        q['odpowiedz'] for q in (g['rozmowa'] if g.get('rozmowa') else [q for tt in g.get('tury', [])[:1] for q in tt['pytania']])
        if q.get('mina') != 'klamie')
    m = re.search(RET, t, re.I)
    if m:
        return [RMAP[m.group(2).lower()]], 'przyjechała'
    return [k for k, p in PAT.items() if re.search(p, t, re.I)], 'zgubiona'


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else 'game/data.js'
    bad = 0
    for g in load(path):
        said, how = said_lines(g)
        box = str(g.get('line'))
        if said and box not in said:
            bad += 1
            print(f"NIEZGODNE {g['id']:24} gość: linia {'/'.join(said)} ({how}) | skrzynka w grze: {box}")
    print(f"\nNiezgodności: {bad}")
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
