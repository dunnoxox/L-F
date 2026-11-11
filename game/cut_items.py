#!/usr/bin/env python3
"""Tnie arkusze Z1-Z7 (zielone tło) na sprite'y. Użycie: python3 -I cut_items.py katalog_z_Z_png wyjscie/items"""
import sys, json
import numpy as np
from PIL import Image
from scipy import ndimage
src,out=sys.argv[1],sys.argv[2]
NAMES={'Z1':['legitymacja','paszport','notes','organizer','bilet','okulary_slonce','zapalniczka','grzebien'],
'Z2':['czapka_zimowa','beret','pasek','krawat','kalosz','pantofel','czapka_daszek','apaszka'],
'Z3':['torba_zakupy','saszetka','torba_narzedzia','torba_listonosza','kuferek','worek','plecak_dzieciecy','walizka_mala'],
'Z4':['radio','latarka','budzik','lornetka','dyktafon','powerbank','zegarek_reka','kasetowiec'],
'Z5':['lalka','klocki','hulajnoga','pilka','latawiec','medalik','pozytywka','album'],
'Z6':['harmonijka','futeral_gitara','skakanka','lyzwy','wedka','farby','szachy','kubek'],
'Z7':['puszka','pudelko_blaszane','skrzynka_narzedz','piornik','portfel_maly','etui_aparat','koperta','paczka_plotno']}
done=[]
for sh,nm in NAMES.items():
    a=np.asarray(Image.open(f"{src}/{sh}.png").convert("RGB")).astype(int);r,g,b=a[...,0],a[...,1],a[...,2]
    green=(g>150)&(g-r>70)&(g-b>70);fg=ndimage.binary_opening(~green,iterations=2)
    # sklej cząstki bliskie sobie (np. kable, sznurki)
    lab,n=ndimage.label(ndimage.binary_dilation(fg,iterations=3))
    objs=[]
    for i,sl in enumerate(ndimage.find_objects(lab),1):
        if (lab[sl]==i).sum()>9000: objs.append((i,sl))
    H=a.shape[0];objs.sort(key=lambda o:(0 if (o[1][0].start+o[1][0].stop)/2<H/2 else 1,o[1][1].start))
    if len(objs)!=8: print('UWAGA',sh,len(objs))
    for (i,sl),name in zip(objs,nm):
        m=fg[sl]&(lab[sl]==i);m=ndimage.binary_fill_holes(m);rgb=a[sl].copy()
        spill=(rgb[...,1]>rgb[...,0]+25)&(rgb[...,1]>rgb[...,2]+25);rgb[spill]=[10,10,10]
        alpha=(ndimage.binary_erosion(m,iterations=1)*255).astype(np.uint8)
        im=Image.fromarray(np.dstack([rgb.astype(np.uint8),alpha]),"RGBA");s=300/max(im.size)
        im=im.resize((max(1,int(im.width*s)),max(1,int(im.height*s))),Image.LANCZOS);im.save(f"{out}/{name}.png");done.append(name)
print(len(done),'sprite\'ów');json.dump(done,open(f"{out}/_nowe.json","w"))
