# Bildstil — «Isometrisk stål-rendering»

Gäller alla illustrationer på armeringproffs.se (produktkort, tjänstekort, processteg, intro).
Följ den här filen när nya bilder ska göras så att sajten håller en enhetlig stil.

## Stilen i en mening
**Ren 3D-produktrendering i isometrisk vy av riktig kamstålsarmering: mörkgrått räfflat stål med lätt
metallglans, en liten orange accent (#ea580c), mjukt studioljus, ljusgrå bakgrund, inget text.**

Engelskt namn (för prompts/diskussion): *clean isometric 3D product render — steel rebar style*.

## Regler
- **Vy:** isometrisk / 3⁄4 ovanifrån, objektet centrerat, ca 65 % av bildytan.
- **Material:** realistiskt räfflat stål (B500B-kamstål), mörkgrått, lätt metallglans. Trä (formbrädor, stöd) och betong får förekomma.
- **Färg:** i princip gråskala. **Orange #ea580c bara som liten accent** (etikett/tagg, verktygshandtag, knapp, markerad dag). Aldrig orange stål.
- **Ljus:** mjukt diffust studioljus, mjuk kontaktskugga under objektet. Inga dramatiska skuggor.
- **Bakgrund:** slät ljusgrå `#f1f5f9` (slate-100) — i vita kort: vit `#ffffff`.
- **Aldrig:** text/bokstäver/siffror i bilden, logotyper, människor, clay/lera/tecknad stil, stockfoton, platta ikoner.
- Siffror och mått (Ø, c/c, täckskikt) läggs i **koden** (HTML/SVG), inte i bilden.

## Recraft (MCP `recraft`, konto 870717ag@gmail.com)
- Verktyg: `generate_image`
- Modell: `recraftv4_1_raster` · Storlek: `16:9` (kort) eller `4:3` (intro-block) · ~2 krediter/bild

**Promptmall** (byt bara ut `[OBJEKT]`):

```
clean 3D product render, isometric view, of [OBJEKT], realistic dark gray ribbed steel with subtle metallic sheen, one small orange #ea580c label tag on [DEL], soft diffused studio light, soft contact shadow, composition centered occupying about 65 percent of the frame, plain light gray background #f1f5f9, industrial and precise, no text, no people
```

Lägg till `no letters, no numbers` om motivet har papper/ritning/skärm (annars hittar modellen på text).

**Exempel på [OBJEKT] som redan använts:**
| Fil | Objekt |
|---|---|
| `klippt-och-bockad` | a neat arrangement of cut and bent ribbed steel rebar pieces: a closed rectangular stirrup, an L-shaped bar, a U-shaped bar and a few straight cut bars |
| `armeringskorgar` | a prefabricated steel rebar cage for a concrete beam: long straight ribbed longitudinal bars held by evenly spaced rectangular stirrups |
| `svetsad-armering` | a flat welded steel reinforcement mesh sheet lying slightly tilted with a second sheet stacked below |
| `armeringsjarn` | a tidy bundle of long straight ribbed steel rebar bars of different diameters tied with wire |
| `distanser` | two ribbed steel bars resting on small gray concrete spacer blocks and plastic bar chairs, a coil of black tie wire and a few plastic spacer rings |
| `armeringsmontage` | a small section of concrete slab formwork with a two-layer grid of ribbed steel rebar installed inside, a rebar tying tool beside it |
| `bockningslista` | a technical drawing sheet with blank table rows and finished bent rebar shapes matching the drawing, a pencil and a steel ruler |
| `steg-3-tillverkning` | an industrial rebar bending machine bending a ribbed steel bar into a stirrup shape, finished stirrups beside it |
| `steg-4-leverans` | a flatbed delivery truck loaded with bundles of rebar and a prefabricated rebar cage strapped down |
| `intro-armeringskorg` | a prefabricated rebar cage lying on two wooden timber supports, a small stack of bent stirrups next to it (4:3, vit bakgrund) |

## Efterbehandling (obligatorisk)
Recraft-bilder har olika luft och lite olika bakgrund. Kör alltid normaliseringen:

```bash
python3 -m venv .venv && .venv/bin/pip install numpy pillow scipy   # en gång
curl -sL -o /tmp/raw.webp "<image_url från Recraft>"
.venv/bin/python scripts/normalisera-bild.py /tmp/raw.webp public/images/illustrationer/<slug>.webp
# vitt kort 4:3:  --bg ffffff --size 1200x900
# golvskugga som når bildkanten:  --x1 <pixel>
```
Resultat: WebP 1280×720, objektet centrerat (≤78 % bredd / ≤74 % höjd), mjuk kant. ~20–75 kB/st.
Spara även originalet i `~/Desktop/armeringproffs-bilder/`.

**Kontrollera visuellt** (sätt ihop ett kontaktark eller öppna sidan) — generera om bilder som
har text, fel form på armering eller avviker från stilen.

## I koden
- Filer: `public/images/illustrationer/<slug>.webp` (slug = produkt-/tjänste-slug, `steg-N-…` för processen).
- Mönster i kort (Tailwind, `next/image`):
```tsx
<div className="-mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden border-b border-line bg-slate-100">
  <Image src={`/images/illustrationer/${slug}.webp`} alt="" width={1280} height={720}
    sizes="(min-width: 1024px) 560px, 100vw" className="h-full w-full object-cover" />
</div>
```
(kortet behöver `overflow-hidden`; negativ marginal = kortets padding, t.ex. `-mx-8 -mt-8` vid `p-8`).

## Var bilderna används idag
- Startsidan: intro-blocket (`intro-armeringskorg`), «Vårt sortiment» (5 produkter), «Så går det till» (4 steg).
- `/produkter`: produktkort · `/produkter/[slug]`: «Fler produkter» + processteg.
- `/tjanster`: `armeringsmontage`, `bockningslista`.

## Relation till andra stilar på sajten
- `components/steel-scenes.tsx` (animerade SVG-scener på tjänstesidorna) = samma idé i vektor: stålgrå stänger + orange accent.
- De äldre platta SVG:erna i `components/illustrations.tsx` används fortfarande som tekniska diagram i guiderna — ok, men nya **bilder** görs i stålrenderingsstilen ovan.
