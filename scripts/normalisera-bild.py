"""Normaliserar en Recraft-rendering till sajtens bildformat (se docs/BILDSTIL.md).

Hittar objektet, beskär, lägger det på ny bakgrund med mjuk kant och centrerar
det så att alla illustrationer får samma luft och skala.

Kräver: numpy, pillow, scipy  (python3 -m venv .venv && .venv/bin/pip install numpy pillow scipy)

Exempel:
  python3 scripts/normalisera-bild.py rå.webp public/images/illustrationer/<slug>.webp
  python3 scripts/normalisera-bild.py rå.webp ut.webp --bg ffffff --size 1200x900   # vitt kort, 4:3
  python3 scripts/normalisera-bild.py rå.webp ut.webp --x1 1120   # kapa golvskugga som går till kanten
"""
import argparse

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

ap = argparse.ArgumentParser()
ap.add_argument("src")
ap.add_argument("dst")
ap.add_argument("--bg", default="f1f5f9", help="bakgrund (hex), standard slate-100")
ap.add_argument("--size", default="1280x720", help="utdata BxH, standard 16:9")
ap.add_argument("--x1", type=int, help="manuell högerkant för beskärning")
args = ap.parse_args()

W, H = (int(v) for v in args.size.split("x"))
BG = np.array([int(args.bg[i : i + 2], 16) for i in (0, 2, 4)], float)

im = np.asarray(Image.open(args.src).convert("RGB")).astype(float)
h, w, _ = im.shape

# Källans bakgrund = median av kantpixlarna.
edge = np.concatenate([im[:8].reshape(-1, 3), im[-8:].reshape(-1, 3), im[:, :8].reshape(-1, 3), im[:, -8:].reshape(-1, 3)])
bg = np.median(edge, 0)

# Objektmask: färgavvikelse eller kanter; bbox via rad-/kolumnprojektion (ignorerar tunna golvskuggor).
diff = np.abs(im - bg).sum(2)
g = np.asarray(Image.fromarray(im.astype(np.uint8)).convert("L").filter(ImageFilter.FIND_EDGES)).astype(float)
mask = ndimage.binary_opening((diff > 40) | (g > 45), iterations=2)
lab, n = ndimage.label(mask)
sizes = ndimage.sum(mask, lab, range(1, n + 1))
keep = np.isin(lab, 1 + np.where(sizes > 400)[0])
cols = np.where(keep.sum(0) > 0.04 * h)[0]
rows = np.where(keep.sum(1) > 0.02 * w)[0]
pad = 12
y0, y1 = max(rows.min() - pad, 0), min(rows.max() + pad, h)
x0, x1 = max(cols.min() - pad, 0), min(cols.max() + pad, w)
if args.x1:
    x1 = args.x1
crop = im[y0:y1, x0:x1]

# Mjuk alfa mot källans bakgrund + 8 % uttoning mot kanterna.
a = ndimage.gaussian_filter(np.clip((np.abs(crop - bg).sum(2) - 5) / 20, 0, 1), 1)
ch0, cw0 = a.shape
fy = np.clip(np.minimum(np.arange(ch0), ch0 - 1 - np.arange(ch0)) / (0.08 * ch0), 0, 1)
fx = np.clip(np.minimum(np.arange(cw0), cw0 - 1 - np.arange(cw0)) / (0.08 * cw0), 0, 1)
a = a * np.minimum(fy[:, None], fx[None, :])
comp = crop * a[..., None] + BG * (1 - a[..., None])

# Skala in: max 78 % bredd / 74 % höjd, centrerat.
ch, cw = comp.shape[:2]
s = min(0.78 * W / cw, 0.74 * H / ch, 1.2)
nw, nh = int(cw * s), int(ch * s)
ci = Image.fromarray(comp.clip(0, 255).astype(np.uint8)).resize((nw, nh), Image.LANCZOS)
out = Image.new("RGB", (W, H), tuple(int(v) for v in BG))
out.paste(ci, ((W - nw) // 2, (H - nh) // 2))
out.save(args.dst, "WEBP", quality=82)
print(args.dst, (x0, y0, x1, y1), round(s, 2))
