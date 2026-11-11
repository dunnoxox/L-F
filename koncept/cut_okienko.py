import sys, os, json
import numpy as np
from PIL import Image
from scipy import ndimage
src, out = sys.argv[1], sys.argv[2]
for n in ["T1","T2","T3","T4","T5"]:
    Image.open(f"{src}/{n}.png").convert("RGB").save(f"{out}/bg/{n}.jpg", quality=86)
for n in ["C4","C5","C6","C7"]:
    Image.open(f"{src}/{n}.png").convert("RGB").save(f"{out}/in/{n}.jpg", quality=86)
for f, key in [("B1-wdowiec","wdowiec"),("B2-chlopak","chlopak"),("B3-maz","maz"),("B4-siostra","siostra"),("B5-dama-z-koperta","dama"),("B6-inspektor","inspektor")]:
    im = Image.open(f"{src}/{f}.png").convert("RGB"); a = np.asarray(im)
    lum = a.max(axis=2) > 40
    rows = np.where(lum.any(axis=1))[0]; y0, y1 = max(rows[0]-10,0), min(rows[-1]+10, a.shape[0])
    w = a.shape[1]//4
    for i, m in enumerate(["neutralna","mowi","klamie","emocja"]):
        im.crop((i*w, y0, (i+1)*w, y1)).save(f"{out}/ppl/{key}_{m}.jpg", quality=88)
    print(key, w, y1-y0)
names = {"C1":["rekawiczka_skora","rekawiczka_welna","plecak","portfel","telefon","walizka","szalik","klucze"],
         "C2":["parasol","krolik","teczka","paczka","futeral","okulary","kapelusz","termos"],
         "C3":["torebka","but","ksiazka","sluchawki","laska","aparat","zegarek","pudelko"]}
meta = {}
for sheet, nm in names.items():
    a = np.asarray(Image.open(f"{src}/{sheet}.png").convert("RGB")).astype(int)
    r,g,b = a[...,0],a[...,1],a[...,2]
    green = (g > 150) & (g - r > 70) & (g - b > 70)
    fg = ndimage.binary_opening(~green, iterations=2)
    lab, n = ndimage.label(fg)
    objs = []
    for i, sl in enumerate(ndimage.find_objects(lab), 1):
        area = (lab[sl]==i).sum()
        if area > 6000: objs.append((i, sl, area))
    # grid order: row by centre y (2 rows), then x
    H = a.shape[0]
    objs.sort(key=lambda o: (0 if (o[1][0].start+o[1][0].stop)/2 < H/2 else 1, o[1][1].start))
    print(sheet, len(objs))
    for (i, sl, area), name in zip(objs, nm):
        mask = ndimage.binary_fill_holes(lab[sl]==i)
        rgb = a[sl].copy()
        # despill: clamp green edge pixels
        spill = (rgb[...,1] > rgb[...,0]+25) & (rgb[...,1] > rgb[...,2]+25)
        rgb[spill] = [10,10,10]
        alpha = (ndimage.binary_erosion(mask, iterations=1)*255).astype(np.uint8)
        im = Image.fromarray(np.dstack([rgb.astype(np.uint8), alpha]), "RGBA")
        s = 300/max(im.size); im = im.resize((int(im.width*s), int(im.height*s)), Image.LANCZOS)
        im.save(f"{out}/items/{name}.png"); meta[name] = [im.width, im.height]
json.dump(meta, open(f"{out}/items/meta.json","w"))
