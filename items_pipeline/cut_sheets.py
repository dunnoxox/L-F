#!/usr/bin/env python3
"""Tnie arkusze z przedmiotami (2 kolumny x 4 rzędy, szare wycinanki na kremowym tle) na warstwy gry:
   <id>_f.png (wypełnienie, szare, przezroczyste tło) i <id>_o.png (granatowy kontur).
Użycie:  python3 cut_sheets.py <folder_z_arkuszami> <items.json> <folder_wyjsciowy>
Arkusze muszą nazywać się sheet01.png ... sheet12.png (lub zawierać numer arkusza w nazwie)."""
import sys, os, re, json
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

def process(path, names, outdir, maxd=300, dil=7):
    a = np.array(Image.open(path).convert('RGB')).astype(float)
    cream = np.median(a[:30, :30].reshape(-1, 3), axis=0)
    nc = np.linalg.norm(a - cream, axis=2) > 28
    grey = ((a[..., 0] - a[..., 2]) < (cream[0] - cream[2]) * 0.5) & (a.sum(axis=2) / 3 > 190)  # szare wypełnienie jasniejsze od progu
    nc = nc | grey
    nc = ndi.binary_opening(nc, iterations=1)
    for d in (dil, 12, 18, 26):
        lab, n = ndi.label(ndi.binary_dilation(nc, iterations=d))
        objs = ndi.find_objects(lab); sizes = ndi.sum(nc, lab, range(1, n + 1))
        comps = [(i, objs[i]) for i in range(n) if sizes[i] > 1500]
        if len(comps) <= len(names): break
    if len(comps) != len(names):
        print(f'  UWAGA {os.path.basename(path)}: znaleziono {len(comps)} obiektów, oczekiwano {len(names)}')
    comps = sorted(comps, key=lambda c: (c[1][0].start + c[1][0].stop) / 2)
    rows = [sorted(comps[i:i + 2], key=lambda c: c[1][1].start) for i in range(0, len(comps), 2)]
    comps = [c for r in rows for c in r]
    out = []
    for (i, sl), name in zip(comps, names):
        pad = 6
        y0, y1 = max(sl[0].start - pad, 0), min(sl[0].stop + pad, a.shape[0]); x0, x1 = max(sl[1].start - pad, 0), min(sl[1].stop + pad, a.shape[1])
        reg = (lab[y0:y1, x0:x1] == i + 1); sub = a[y0:y1, x0:x1]
        ncm = nc[y0:y1, x0:x1] & ndi.binary_dilation(reg, iterations=2)
        lum = sub @ np.array([.299, .587, .114])
        outline = ncm & (lum < 125); fill = ncm & ~outline
        fillA = ndi.binary_dilation(fill, iterations=2) & ncm
        med = np.median(lum[fill]) if fill.any() else 200
        fl = np.clip(lum / med * 0.92 * 255, 0, 255).astype(np.uint8)
        F = np.dstack([fl, fl, fl, (fillA * 255).astype(np.uint8)])
        O = np.dstack([sub.astype(np.uint8), (outline * 255).astype(np.uint8)])
        ys, xs = np.where(ncm); by0, by1, bx0, bx1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
        fi = Image.fromarray(F, 'RGBA').crop((bx0, by0, bx1, by1)); oi = Image.fromarray(O, 'RGBA').crop((bx0, by0, bx1, by1))
        s = maxd / max(fi.size)
        if s < 1:
            sz = (max(1, int(fi.width * s)), max(1, int(fi.height * s))); fi = fi.resize(sz, Image.LANCZOS); oi = oi.resize(sz, Image.LANCZOS)
        fi.save(f'{outdir}/{name}_f.png', optimize=True); oi.save(f'{outdir}/{name}_o.png', optimize=True)
        out.append({'id': name, 'w': fi.width, 'h': fi.height})
    return out

def main(sheets_dir, items_json, outdir):
    meta = json.load(open(items_json, encoding='utf-8')); os.makedirs(outdir, exist_ok=True)
    items = []
    for s in meta['sheets']:
        num = s['sheet']
        cand = [f for f in os.listdir(sheets_dir) if re.search(r'(?<!\d)0*%d(?!\d)' % num, f) and f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
        if not cand: print(f'Brak arkusza {num}, pomijam'); continue
        print('Arkusz', num, '->', cand[0]); items += process(os.path.join(sheets_dir, cand[0]), s['items'], outdir)
    json.dump({'items': items}, open(os.path.join(outdir, 'manifest_items.json'), 'w'), ensure_ascii=False)
    print('Gotowe:', len(items), 'przedmiotów')

if __name__ == '__main__':
    if len(sys.argv) != 4: sys.exit(__doc__)
    main(*sys.argv[1:])
