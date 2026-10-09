#!/usr/bin/env python3
"""Replicate flux-1.1-pro → public/images/foto/<slug>.webp (1600x900). Usage: foto.py prompts.json [--force]"""
import json,os,re,sys,time,io,urllib.request,urllib.error
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
OUT='/Users/alexandergerhard/Armeringproffs/public/images/foto'
tok=os.environ.get('REPLICATE_API_TOKEN') or re.search(r"REPLICATE_API_TOKEN=['\"]?([^'\"\n]+)",open(os.path.expanduser('~/.zshrc')).read()).group(1)
STYLE=(", professional documentary construction photography, Sweden, natural soft overcast daylight, realistic photo, "
       "35mm lens, shallow depth of field, sharp detail on the steel reinforcement, no people, no text, no logos, no watermark")
def gen(slug,prompt):
    dst=f'{OUT}/{slug}.webp'
    if os.path.exists(dst) and '--force' not in sys.argv: return slug,'skip'
    body=json.dumps({"input":{"prompt":prompt+STYLE,"aspect_ratio":"16:9","output_format":"png","safety_tolerance":2,"prompt_upsampling":False}}).encode()
    req=urllib.request.Request('https://api.replicate.com/v1/models/black-forest-labs/flux-1.1-pro/predictions',data=body,headers={'Authorization':'Bearer '+tok,'Content-Type':'application/json','Prefer':'wait'})
    for a in range(10):
        try: p=json.loads(urllib.request.urlopen(req,timeout=120).read()); break
        except urllib.error.HTTPError as e:
            if e.code!=429: return slug,f'err {e.code}'
            time.sleep(10+a*5)
    else: return slug,'429'
    while p['status'] not in ('succeeded','failed','canceled'):
        time.sleep(2); p=json.loads(urllib.request.urlopen(urllib.request.Request(p['urls']['get'],headers={'Authorization':'Bearer '+tok})).read())
    if p['status']!='succeeded': return slug,'failed '+str(p.get('error'))
    url=p['output'] if isinstance(p['output'],str) else p['output'][0]
    im=Image.open(io.BytesIO(urllib.request.urlopen(url).read())).convert('RGB')
    im=im.resize((1600,900),Image.LANCZOS); im.save(dst,'WEBP',quality=78,method=6)
    return slug,f'ok {os.path.getsize(dst)//1024}k'
jobs=json.load(open(sys.argv[1]))
with ThreadPoolExecutor(4) as ex:
    for s,r in ex.map(lambda kv: gen(*kv), jobs.items()): print(s,r,flush=True)
