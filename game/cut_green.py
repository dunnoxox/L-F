"""Wycina obiekty z zielonego tła #00FF00 (arkusze GPT) do PNG z przezroczystością.
Użycie: python3 -I cut_green.py <wej.png> <wyj_prefix> [--split N] [--max S]
--max S: dłuższy bok najwyżej S px.
Bez --split: jeden obiekt (cały kadr przycięty do zawartości) -> <wyj_prefix>.png
--split N: N największych zwartych brył (od lewej do prawej, rzędami) -> <wyj_prefix>1.png ... N.png"""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage as nd

def key(im):
    a = np.asarray(im.convert('RGB')).astype(np.int32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    gr = g - np.maximum(r, b)                      # „zieloność”
    alpha = np.clip(255 - (gr - 40) * 255 // 90, 0, 255).astype(np.uint8)  # 40..130 -> miękka krawędź
    m = alpha > 0
    m = nd.binary_opening(m, iterations=1)         # usuń okruchy
    m = nd.binary_fill_holes(m)                    # dziury w obiekcie (np. oczko zawieszki) zostają zielone -> wytnij niżej
    alpha = np.where(m, alpha, 0).astype(np.uint8)
    hole = gr > 120                                 # prawdziwa zieleń w środku obiektu (oczka, dziurki)
    alpha[hole] = 0
    g2 = np.minimum(g, np.maximum(r, b) + 10)      # odbarwienie zielonej obwódki
    out = np.dstack([r, g2, b]).clip(0, 255).astype(np.uint8)
    return np.dstack([out, alpha]), m

def save(arr, path, maxw):
    im = Image.fromarray(arr, 'RGBA')
    bb = im.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox()
    im = im.crop((max(bb[0]-4,0), max(bb[1]-4,0), min(bb[2]+4,im.width), min(bb[3]+4,im.height)))
    if maxw and max(im.size) > maxw:
        im.thumbnail((maxw, maxw), Image.LANCZOS)
    im = im.quantize(colors=96, method=Image.FASTOCTREE, dither=Image.NONE)
    im.save(path, optimize=True)
    print(path, im.size)

src, pre = sys.argv[1], sys.argv[2]
args = sys.argv[3:]
n = int(args[args.index('--split') + 1]) if '--split' in args else 0
maxw = int(args[args.index('--max') + 1]) if '--max' in args else 0
arr, m = key(Image.open(src))
if not n:
    save(arr, pre + '.png', maxw)
else:
    lab, k = nd.label(nd.binary_dilation(m, iterations=3))
    sizes = nd.sum(m, lab, range(1, k + 1))
    keep = sorted(np.argsort(sizes)[::-1][:n] + 1, key=lambda i: (round(nd.center_of_mass(m, lab, i)[0] / (m.shape[0] / 3)), nd.center_of_mass(m, lab, i)[1]))
    for j, i in enumerate(keep, 1):
        part = arr.copy(); part[..., 3] = np.where(lab == i, part[..., 3], 0)
        save(part, f'{pre}{j}.png', maxw)
