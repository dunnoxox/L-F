#!/usr/bin/env python3
"""Sklada prototyp_sterta/index.html (jeden plik) z istniejacych zasobow projektu.
Uzycie: python3 -I build.py [katalog_lostfraud_play_assets]
Zrodla: items_pipeline/gotowe_96 (rzeczy), game/assets/snd (SFX),
lostfraud_play/assets (znaki, petenci, lada, polka; folder plikow projektu)."""
import sys, os, io, json, base64
import numpy as np
from PIL import Image
from scipy import ndimage
from scipy.spatial import ConvexHull

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
ITEMS = os.path.join(REPO, 'items_pipeline', 'gotowe_96')
SND = os.path.join(REPO, 'game', 'assets', 'snd')
PLAY = sys.argv[1] if len(sys.argv) > 1 else '/mnt/project-files/lostfraud_play/assets/'
RES = 1.5  # zapas rozdzielczosci sprite'a wzgledem swiata 1920x1080

# id, mianownik, biernik, rodzaj (m, ma=meskozywotny, f, n), rozmiar w swiecie (px)
SHAPES = [
 ('suitcase','walizka','walizkę','f',180), ('duffel_bag','torba','torbę','f',185),
 ('hiking_backpack','plecak','plecak','m',165), ('neck_pillow','poduszka','poduszkę','f',135),
 ('travel_mug','kubek','kubek','m',120), ('thermos','termos','termos','m',135),
 ('camera','aparat','aparat','m',140), ('briefcase','aktówka','aktówkę','f',160),
 ('handbag','torebka','torebkę','f',150), ('fedora_hat','kapelusz','kapelusz','m',150),
 ('beanie','czapka','czapkę','f',130), ('rubber_boot','gumowiec','gumowiec','m',150),
 ('teddy_bear','miś','misia','ma',145), ('beach_ball','piłka','piłkę','f',130),
 ('lunchbox','śniadaniówka','śniadaniówkę','f',140), ('toolbox','skrzynka','skrzynkę','f',160),
 ('alarm_clock','budzik','budzik','m',130), ('hip_flask','piersiówka','piersiówkę','f',115),
 ('stuffed_rabbit','króliczek','króliczka','ma',145), ('toy_car','autko','autko','n',140),
 ('bike_helmet','kask','kask','m',140), ('picnic_basket','koszyk','koszyk','m',150),
]
MARKS = ['kropka','gwiazdka','pasek','trójkąt','krzyżyk','fala','serce','kółko']
PEOPLE = list(range(16))
SFX = ['sfx_pile_dig','sfx_pile_collapse','sfx_handover','sfx_refuse','sfx_trapdoor','sfx_bell_window',
       'sfx_doorbell_shop','sfx_slide_light','sfx_slide_heavy','sfx_coins_paper_money','sfx_drawer_big',
       'sfx_cloth_inside_bag','sfx_glass_tap','sfx_steps_sneakers',
       'sfx_mumble_child','sfx_mumble_clerk','sfx_mumble_heavy_man','sfx_mumble_old_man',
       'sfx_mumble_old_woman','sfx_mumble_teen','sfx_mumble_young_woman']

def b64png(im):
    b = io.BytesIO(); im.save(b, 'PNG', optimize=True)
    return 'data:image/png;base64,' + base64.b64encode(b.getvalue()).decode()

def simplify(pts, n):
    pts = [tuple(p) for p in pts]
    def area(a, b, c): return abs((b[0]-a[0])*(c[1]-a[1]) - (c[0]-a[0])*(b[1]-a[1]))
    while len(pts) > n:
        k = min(range(len(pts)), key=lambda i: area(pts[i-1], pts[i], pts[(i+1) % len(pts)]))
        pts.pop(k)
    return pts

shapes = []
for sid, nom, acc, gen, size in SHAPES:
    f = Image.open(os.path.join(ITEMS, sid + '_f.png')).convert('RGBA')
    o = Image.open(os.path.join(ITEMS, sid + '_o.png')).convert('RGBA')
    k = size * RES / max(f.size)
    wh = (max(1, round(f.size[0]*k)), max(1, round(f.size[1]*k)))
    f = f.resize(wh, Image.LANCZOS); o = o.resize(wh, Image.LANCZOS)
    fa = np.array(f)[:, :, 3]; oa = np.array(o)[:, :, 3]
    ys, xs = np.nonzero(np.maximum(fa, oa) > 60)
    P = np.stack([xs, ys], 1).astype(float)
    hull = simplify(P[ConvexHull(P).vertices], 10)
    dt = ndimage.distance_transform_edt(fa > 128)
    # kotwica znaku: najglebszy punkt wypelnienia, z lekkim ciazeniem do srodka
    yy, xx = np.mgrid[0:dt.shape[0], 0:dt.shape[1]]
    cx, cy = wh[0]/2, wh[1]/2
    score = dt - 0.12*np.hypot(xx-cx, yy-cy)
    ay, ax = np.unravel_index(np.argmax(score), dt.shape)
    shapes.append(dict(id=sid, nom=nom, acc=acc, gen=gen, w=wh[0]/RES, h=wh[1]/RES,
        hull=[[round(x/RES, 1), round(y/RES, 1)] for x, y in hull],
        ax=round(ax/RES, 1), ay=round(ay/RES, 1), ar=round(float(dt[ay, ax])/RES, 1),
        f=b64png(f), o=b64png(o)))

marks = {}
for m in MARKS:
    im = Image.open(os.path.join(PLAY, m + '_f.png')).convert('RGBA')
    a = im.split()[3]
    w = Image.new('RGBA', im.size, (255, 255, 255, 0)); w.putalpha(a)
    w.thumbnail((120, 120), Image.LANCZOS)
    marks[m] = b64png(w)

people = []
for i in PEOPLE:
    im = Image.open(os.path.join(PLAY, f'petent{i}.png')).convert('RGBA')
    k = 430 / im.size[1]
    im = im.resize((round(im.size[0]*k), 430), Image.LANCZOS)
    people.append(b64png(im.quantize(255, method=2, dither=0).convert('RGBA') if False else im))

def img(name, maxw):
    im = Image.open(os.path.join(PLAY, name)).convert('RGBA'); im.thumbnail((maxw, maxw), Image.LANCZOS)
    return b64png(im)
misc = dict(lada=img('lada.png', 463), polka=img('polka.png', 456), stempel=img('stempel.png', 160))

snd = {}
for s in SFX:
    with open(os.path.join(SND, s + '.mp3'), 'rb') as fh:
        snd[s.replace('sfx_', '')] = 'data:audio/mpeg;base64,' + base64.b64encode(fh.read()).decode()

assets = dict(shapes=shapes, marks=marks, people=people, misc=misc, snd=snd)
tpl = open(os.path.join(HERE, 'src', 'index.template.html'), encoding='utf-8').read()
out = (tpl.replace('/*__MATTER__*/', open(os.path.join(HERE, 'src', 'matter.min.js'), encoding='utf-8').read())
          .replace('/*__ASSETS__*/', 'window.A=' + json.dumps(assets, ensure_ascii=False) + ';')
          .replace('/*__GAME__*/', open(os.path.join(HERE, 'src', 'game.js'), encoding='utf-8').read()))
open(os.path.join(HERE, 'index.html'), 'w', encoding='utf-8').write(out)
print('index.html', round(len(out.encode())/1e6, 2), 'MB')
