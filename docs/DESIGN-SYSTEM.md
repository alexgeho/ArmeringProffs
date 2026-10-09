# Designsystem – Armeringsproffs

Källa för tokens: `app/globals.css`. Komponenter: `components/ui.tsx` (layout, knappar, kort, tabell),
`components/form.tsx` (fält), `components/sections.tsx` (sektioner, hero, brödsmulor), `components/FaqAccordion.tsx`.
Ägarens UI-regler (gäller alltid): `~/ui-principles.md`. Bildstil: [BILDSTIL.md](BILDSTIL.md).

**Grundregel:** inga råa färger eller engångsklasser i sidmallar (`bg-white`, `text-slate-*`, `#hex`, `rounded-xl`, `text-3xl`).
Använd tokenklasser och komponenterna nedan.

---

## 1. Tokens

### Färg (byter värde i mörkt läge via `prefers-color-scheme`)

| Klass | Ljust | Mörkt | Användning |
|---|---|---|---|
| `bg-page` | #ffffff | #0b1120 | sidbakgrund (body) |
| `bg-surface` | #f8fafc | #0f1729 | dämpad sektion (`<Section muted>`), paneler |
| `bg-card` | #ffffff | #131c31 | kort, fält |
| `bg-paper` | #f1f5f9 | #f1f5f9 | bild-/ritningsyta (samma grå som bilderna) |
| `text-ink` | #0f172a | #f1f5f9 | rubriker, stark text |
| `text-ink-soft` | #334155 | #cbd5e1 | brödtext |
| `text-muted` | #5b677a | #94a3b8 | metadata, bildtext, placeholder |
| `border-line` | #e2e8f0 | #243049 | dekorativa kanter/avdelare |
| `border-field` | #848fa1 | #64748b | kant på formulärfält (≥3:1) |
| `text-brand` | #c2410c | #fb923c | orange text och länkar |
| `text-brand-dark` | #9a3412 | #fdba74 | hover på länkar |
| `text-accent` | #ea580c | #f97316 | ikoner, dekor, fokusring (inte för brödtext) |
| `bg-brand-light` | #fff7ed | #2a1709 | orange tonad yta (promo-block) |
| `bg-cta` / `hover:bg-cta-hover` | #c2410c / #9a3412 | samma | knappfyllnad med vit text |
| `bg-night` | #0f172a | #050a16 | alltid mörka ytor: hero, CTA-banner, footer |
| `text-success` / `bg-success-fill` | #15803d | #4ade80 / #15803d | lyckat |
| `text-warning` | #b45309 | #fbbf24 | varning |
| `text-danger` | #dc2626 | #f87171 | fel |

På `bg-night` används vit text och `text-slate-100/200/300/400` (night är mörk i båda teman).
`.light-scope` = ljus ö i mörkt läge – bara för tekniska SVG-ritningar med fasta färger (bloggfigurer, typformsritningen).

### Uppmätt kontrast (WCAG AA)

| Par | Ratio |
|---|---|
| vit på `cta` #c2410c | 5.18 ✓ |
| `brand` #c2410c på vitt / surface / tint | 5.18 / 4.95 / 4.88 ✓ |
| `muted` #5b677a på vitt / surface / tint | ≈5.7 / 5.48 / 5.40 ✓ |
| `field`-kant #848fa1 på vitt | 3.27 ✓ (icke-text) |
| `accent` #ea580c på vitt (ikoner) / på night | 3.56 / 5.02 ✓ (icke-text ≥3) |
| footer `slate-400` på night | 6.96 ✓ (tidigare slate-500 = 3.75 ✗) |
| mörkt: ink / ink-soft / muted på card | 17+ / 11.4 / 6.6 ✓ |
| mörkt: `brand` #fb923c på card | 7.49 ✓ |

Tidigare orange #ea580c med vit text gav 3.56 (✗ AA) – knappar och textlänkar använder nu #c2410c.

### Typografi

| Klass | Storlek / radhöjd | Användning |
|---|---|---|
| `type-h1` | 36 → 48 px (sm) / 1.15 → 1.1, 700 | sidans enda H1 |
| `type-h2` | 30 → 36 px / 1.2 → 1.15, 700 | sektionsrubrik |
| `type-h3` | 24 px / 1.3, 700 | underrubrik, rubrik i grupp |
| `type-h4` | 18 px / 1.4, 600 | panel-/kortrubrik |
| `text-lead` | 18 px / 1.7 | ingress |
| `text-body` | 16 px / 1.6 | brödtext (default) |
| `text-small` | 14 px / 1.5 | korttext, metadata |
| `text-caption` | 12 px / 1.4 | datum, fotnot |

Löptext: lägg `className="prose-body"` på wrappern och skriv rena `<h2>/<h3>/<p>/<ul>` – rytmen
(40 px över h2, 32 px över h3, 12 px rubrik → text, 16 px mellan stycken, 18 px/1.75) sköts av CSS.

### Avstånd, radie, skugga, lager, rörelse

| Token | Värde | Användning |
|---|---|---|
| `--space-section` → `py-(--space-section)` | 56 px / 80 px (sm+) | luft över = under varje sektion (`<Section>`) |
| `--space-card` → `p-(--space-card)` | 24 px | inre luft i kort och paneler |
| rubrik → innehåll i sektion | `mt-10` (40 px) | efter `SectionHeading` |
| `--header-h` | 84 / 100 / 116 px | header-höjd, sticky-offset, scroll-padding |
| `rounded-control` | 8 px | knappar, fält, chips |
| `rounded-card` | 12 px | kort, paneler, tabeller |
| `rounded-panel` | 16 px | stora block, hero-formulär, figurer |
| `shadow-card` / `shadow-raised` | subtil / hover | kort i vila / hover |
| `z-overlay` 40 · `z-header` 50 · `z-toast` 60 | | flytande korg · header · cookie-banner |
| `--duration-fast` 150 ms · `--duration-base` 250 ms | | hover · bildzoom |

`prefers-reduced-motion: reduce` stänger av alla animationer/transitions och smooth scroll globalt.
Fokus: `:focus-visible` = 2 px `accent`-kontur, 2 px offset – synlig på ljus och mörk yta.

---

## 2. Komponenter

### Button (`ui.tsx`)
`<Button href="/offert">Begär offert</Button>` · `variant`: `primary` | `secondary` | `ghost` | `onDark` · `size`: `md` (48 px) | `sm` (44 px) · `loading`, `disabled`, `type="submit"`, `download`.
Interna länkar → `next/link`; `tel:`/`mailto:`/filer → `<a>`. `buttonClass()` för specialfall (header).
- ✅ En `primary` per vy (hero-formulärets "Skicka förfrågan" ÄR huvudhandlingen – ingen extra "Begär offert"-knapp bredvid).
- ✅ Sekundär handling = `secondary` (ljus yta) eller `onDark` (mörk yta), med ikon.
- ❌ Två primärknappar sida vid sida. ❌ Knapp lägre än 44 px. ❌ Egen `bg-brand px-6 …`-soppa.

### ArrowLink, inlineLink, ChipLink
- `ArrowLink` – "Läs mer →", "Öppna kalkylatorn →" (textlänk med pil, hover-understrykning).
- `inlineLink` – klass för länkar i löptext (alltid understrukna).
- `ChipLink` – ort-/taggchips, 44 px höga.

### Card – det enda kortmönstret
`<Card href image={{src, alt, sizes}} title cta="Läs mer" titleAs="h3" compact>text</Card>`
Bild 16:9 på `bg-paper` → rubrik → text → länktext. Hela kortet klickbart med `href`. Syskon i ett rutnät blir lika höga.
- ✅ Samma struktur för alla kort i en rad (bild hos alla eller ingen, cta hos alla eller ingen).
- ✅ `compact` för 2-kolumnersrutnät på mobil (döljer text < sm).
- ❌ Negativa marginaler (`-mx-6 -mt-6`) för bilder – Card sköter det.
Bas-klassen `cardClass` för specialkort (process-steg, omdömen, bloggkort).

### Panel, CheckList
- `Panel` – surface-ruta (sidopanel "Det här ingår", info-rutor). `sticky` = fäster under headern på lg.
- `CheckList items onDark size` – bocklista med `accent`-bock.

### SectionHeading, PageHeader, Section
- `Section` – `muted` (surface), `narrow` (max-w-3xl, centrerad), `id`. Varannan sektion muted; två muted i rad = ❌.
- `SectionHeading eyebrow title intro center as="h1|h2"`.
- `PageHeader title intro actions` – ljust sidhuvud (produkt, kalkylatorer).

### Hero-varianter (`sections.tsx`)
| Variant | Används på |
|---|---|
| `Hero` | startsidan (foto, badge, bocklista, formulär) |
| `PhotoHero` | landningssidor `[slug]`, tjänster, städer, `/offert` (foto + H1 + bocklista + telefon + formulär) |
| `PageHeader` | produkter, kalkylatorer (ljust, utan formulär) |

### Breadcrumbs
`<Breadcrumbs items={[{name, href}]} />` – `<ol>`, `aria-current="page"` på sista, länkar 44 px höga. Alltid direkt under headern.

### FaqAccordion
En öppen åt gången, `aria-expanded` + `aria-controls`, svaren finns i DOM (`hidden`). `headingLevel={2}` om FAQ:n ligger direkt under H1.

### DataTable
`<DataTable head rows caption />` – egen scroll-ruta (tangentbordsbar, `role="region"`), rubrikrad på surface, zebra, bildtext under.
❌ Rå `<table>` i sidmallar.

### Formulärfält (`form.tsx`)
`TextField`, `SelectField`, `TextArea` – etikett via `htmlFor/useId`, `hideLabel` = sr-only (placeholder visar den),
`error` → `aria-invalid` + `aria-describedby`, 48 px höjd, `border-field`. `fieldClass` för egna inputs.
- ✅ Placeholder = exempel, aldrig ett värde användaren måste radera.
- ❌ `focus:outline-none` utan ersättning.

---

## 3. Sidmallar

| Mall | Komponenter i ordning |
|---|---|
| `/` | Hero → PrefabShowcase → UspBar → intro (Section muted) → ProductsGrid → KalkylatorPromo → Process → LeveransSection → Reviews → GuidesTeaser → FAQ → CtaBanner |
| `/[slug]` (landning) | Breadcrumbs → PhotoHero → prose-body + Panel → Process → FAQ → CtaBanner |
| `/produkter/[slug]` | Breadcrumbs → PageHeader (primary + secondary) → bild + prose-body + Panel (sticky) → Process → Card-rutnät (muted) → LeveransSection → CityLinks (muted) → FAQ → CtaBanner |
| `/tjanster/[slug]` | Breadcrumbs → PhotoHero (eller verktygshuvud för bockningslista) → prose-body + Panel → Process → Card-rutnät → CityLinks → FAQ → CtaBanner |
| `/armering/[ort]` | Breadcrumbs → PhotoHero → Card-rutnät + sektorer → Leverans (muted) → KalkylatorPromo → FAQ (narrow) → GuidesTeaser → ChipLinks (muted) → CtaBanner |
| `/blogg` | Breadcrumbs → SectionHeading h1 → promo → grupper med bloggkort → CtaBanner |
| `/blogg/[slug]` | Breadcrumbs → artikel (max-w-3xl, prose-body: h2/h3/p/ul/ol/DataTable/figur) → FAQ → Panel-CTA → Card-rutnät → CtaBanner |
| Kalkylatorer | Breadcrumbs → PageHeader → verktyg (input-kort + resultat-kort på surface) → prose-body (muted, narrow) → FAQ (narrow) → CtaBanner |
| `/produkter`, `/tjanster` | SectionHeading h1 → Card med CheckList |

---

## 4. Innehållsregler (minimal text)
- Rubrik + handling. Ta bort förklaringar, "micro"-rader och upprepningar.
- Etiketter 2–3 ord. Knapptext = verb ("Begär offert", "Skicka förfrågan").
- En rubrik = en rad där det går. Svenska för all synlig text.
- Upprepa inte samma CTA två gånger i samma vy.

## 5. Bilder
- Stil, prompt och normalisering: [BILDSTIL.md](BILDSTIL.md). Kontaktark till ägaren före commit.
- Alltid `width`/`height` (eller `fill` + förälder med storlek) → ingen layoutförskjutning. `sizes` som matchar kolumnbredden.
- `alt`: beskriv motivet för innehållsbilder; `alt=""` för rent dekorativa (USP-/processbilder bredvid text som säger samma sak).
- Illustrationer ligger på `bg-paper` (#f1f5f9 = bildernas bakgrund); i mörkt läge dämpas de med `dark:brightness-90`.
- Siffror/mått läggs i koden, aldrig i bilden.

## 6. Tillgänglighet – checklista
- [ ] Exakt en `<h1>`, rubriknivåer utan hopp (h1 → h2 → h3).
- [ ] Kontrast AA i båda teman (text ≥4.5, stor text/ikoner/fältkanter ≥3) – använd bara tokens.
- [ ] Synlig fokus på allt interaktivt; tabbordning följer läsordningen; Esc stänger mobilmenyn.
- [ ] Tryckytor ≥44 px (knappar, menyknapp, chips, brödsmulor, FAQ-rader).
- [ ] Ikoner `aria-hidden` (standard i `icons.tsx`); ikon-knappar har `aria-label`.
- [ ] Fält har kopplad etikett; fel via `aria-invalid` + `aria-describedby`; status via `role="status"/"alert"`.
- [ ] `aria-expanded`/`aria-controls` på dragspel och meny; `aria-current="page"` i navigering och brödsmulor.
- [ ] Tabeller i scroll-ruta med `scope="col"` och bildtext.
- [ ] Animationer respekterar `prefers-reduced-motion`.

## 7. Pre-ship-checklista
1. `npx tsc --noEmit` och `npx eslint app components lib` – noll fel.
2. `npm run build`, servera `out/` lokalt.
3. Varje ändrad sida i 1440 px och 375 px, ljust och mörkt: ingen horisontell scroll, inga ljusa plattor med osynlig text i mörkt.
4. Mät (`getBoundingClientRect`): syskonkort lika höga, samma vänsterkant för brödsmulor/rubrik/innehåll, sidopanel i höjd med första innehållsblocket, sektionsluft över = under.
5. En primärknapp per vy. Rubriker utan hopp. Alla bilder har `alt`, `width`, `height`.
6. Tangentbord: Tab genom sidan, fokus syns, meny/FAQ fungerar med Enter/Esc.
7. Skärmdumpar till ägaren (dator + mobil).
