"""Tnie portrety gości (G01-rosa.png itd.) na cztery miny, tak samo jak B1-B6.
Użycie: python3 -I prompty/cut_portrety_goscie.py <katalog_z_G*.png> <katalog_wyjsciowy>
Wynik: <klucz>_<mina>.jpg, gdzie klucz to część nazwy po "Gxx-"."""
import sys, os, re, glob
import numpy as np
from PIL import Image

MINY = ["neutralna", "mowi", "klamie", "emocja"]
src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
for path in sorted(glob.glob(os.path.join(src, "G[0-9][0-9]-*.png"))):
    key = re.match(r"G\d\d-(.+)\.png$", os.path.basename(path)).group(1)
    im = Image.open(path).convert("RGB")
    a = np.asarray(im)
    rows = np.where((a.max(axis=2) > 40).any(axis=1))[0]
    y0, y1 = max(rows[0] - 10, 0), min(rows[-1] + 10, a.shape[0])
    w = a.shape[1] // 4
    for i, m in enumerate(MINY):
        im.crop((i * w, y0, (i + 1) * w, y1)).save(os.path.join(out, f"{key}_{m}.jpg"), quality=88)
    print(key, w, y1 - y0)
