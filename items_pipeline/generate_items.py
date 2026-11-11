#!/usr/bin/env python3
"""OPCJA B: jedno polecenie, wszystkie 12 arkuszy przez API OpenAI, na końcu ZIP.
Wymaga: pip install openai ; zmiennej OPENAI_API_KEY ; pliku referencje/ref_styl_przedmiotow.png.
To płatne API (koszt rozliczany na Twoim koncie OpenAI, sprawdź aktualny cennik modelu gpt-image-1 przed startem).
Użycie:  python3 generate_items.py            (wszystkie)   |   python3 generate_items.py 1 2 3   (tylko wybrane arkusze)"""
import os, sys, json, base64, zipfile
from openai import OpenAI
here = os.path.dirname(os.path.abspath(__file__))
meta = json.load(open(os.path.join(here, 'items.json'), encoding='utf-8'))
ref = os.path.join(here, 'referencje', 'ref_styl_przedmiotow.png')
out = os.path.join(here, 'wygenerowane_arkusze'); os.makedirs(out, exist_ok=True)
only = {int(x) for x in sys.argv[1:]}
client = OpenAI()
for s in meta['sheets']:
    if only and s['sheet'] not in only: continue
    path = os.path.join(out, f"sheet{s['sheet']:02d}.png")
    if os.path.exists(path): print('jest już', path); continue
    print('Generuję arkusz', s['sheet'], s['title'], '...')
    r = client.images.edit(model='gpt-image-1', image=open(ref, 'rb'), prompt=s['prompt'], size='1536x1024')
    open(path, 'wb').write(base64.b64decode(r.data[0].b64_json)); print('  zapisano', path)
zp = os.path.join(here, 'arkusze.zip')
with zipfile.ZipFile(zp, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in sorted(os.listdir(out)): z.write(os.path.join(out, f), f)
print('ZIP:', zp)
