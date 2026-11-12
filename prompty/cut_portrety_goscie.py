"""Tnie portrety gości (G01-rosa.png itd.) na cztery miny, tak samo jak B1-B6,
oraz S01-kolejka.png (2 rzędy x 4 popiersia, sama mina neutralna).
Cięcie po najciemniejszej kolumnie w pasie +-48 px od granicy ćwiartki (gdy rekwizyt
wchodzi na sąsiednią kolumnę), każda mina wklejona centralnie w płótno 384 px.
Użycie: python3 -I prompty/cut_portrety_goscie.py <katalog_z_G*.png> <katalog_wyjsciowy>
Wynik: <klucz>_<mina>.jpg (klucz = część nazwy po "Gxx-") i kolejka1..8_neutralna.jpg"""
import sys, os, re, glob
import numpy as np
from PIL import Image

MINY = ["neutralna", "mowi", "klamie", "emocja"]
W = 384

def cuts(lum, n, size, axis):
    prof = (lum > 40).sum(axis=axis).astype(float)
    step = size / n; out = [0]
    for k in range(1, n):
        c = int(k * step); a, b = c - 48, c + 48
        out.append(a + int(np.argmin(prof[a:b])))
    return out + [size]

def trim_rows(lum, pad=10):
    r = np.where((lum > 40).any(axis=1))[0]
    return max(r[0] - pad, 0), min(r[-1] + pad, lum.shape[0])

def cell(im, lum, x0, x1, y0, y1):
    sub = lum[y0:y1, x0:x1]
    c = np.where((sub > 40).any(axis=0))[0]
    cx = x0 + (c[0] + c[-1]) // 2 if len(c) else (x0 + x1) // 2
    piece = im.crop((x0, y0, x1, y1))
    canvas = Image.new("RGB", (W, y1 - y0), (0, 0, 0))
    canvas.paste(piece, (W // 2 - (cx - x0), 0))
    return canvas

src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
for path in sorted(glob.glob(os.path.join(src, "G[0-9][0-9]-*.png"))):
    key = re.match(r"G\d\d-(.+)\.png$", os.path.basename(path)).group(1)
    im = Image.open(path).convert("RGB"); lum = np.asarray(im).max(axis=2)
    y0, y1 = trim_rows(lum); xs = cuts(lum[y0:y1], 4, lum.shape[1], 0)
    for i, m in enumerate(MINY):
        cell(im, lum, xs[i], xs[i + 1], y0, y1).save(os.path.join(out, f"{key}_{m}.jpg"), quality=86)
    print(key, xs, y1 - y0)
for path in glob.glob(os.path.join(src, "S01-*.png")):
    im = Image.open(path).convert("RGB"); lum = np.asarray(im).max(axis=2)
    ys = cuts(lum, 2, lum.shape[0], 1); n = 0
    for r in range(2):
        band = lum[ys[r]:ys[r + 1]]
        a, b = trim_rows(band); a += ys[r]; b += ys[r]
        xs = cuts(lum[a:b], 4, lum.shape[1], 0)
        for i in range(4):
            n += 1
            cell(im, lum, xs[i], xs[i + 1], a, b).save(os.path.join(out, f"kolejka{n}_neutralna.jpg"), quality=86)
    print("kolejka", ys)
