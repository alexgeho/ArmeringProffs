# Armeringsproffs — sajt (prefab armering, hela Sverige)

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4. Svensk SEO-/lead-sajt
för **prefabricerad armering** – klippt & bockad, armeringskorgar, svetsad armering & nät,
kamstål B500B och distanser, med tillverkning, leverans och montage i hela Sverige.

Varumärket **Armeringsproffs** drivs av **AGRY OÜ**. Live: **https://armeringproffs.se**.

> **Källa till sanning för status/nästa steg:** `docs/STATUS.md` (läs den först).
> Slagplan för nyckelsökordet: `docs/SLAGPLAN-klippt-bockad-armering.md`.

## Snabbstart

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # produktionsbygge
npm run lint       # eslint
```

Lokal körning av produktionsbygget sker via `server.js` (Passenger-kompatibel):
`npm run build` → `PORT=3111 node server.js`. OBS: `proxy.ts` tvingar https-redirect,
så använd `curl -H 'X-Forwarded-Proto: https'` lokalt (annars 301).

## Var innehållet bor (allt i `config/`)

| Fil | Vad du redigerar |
|-----|------------------|
| `config/site.ts` | Företagsdata: telefon, e-post, org.nr/VAT, domän, GA4-ID, Meta pixel-ID |
| `config/products.ts` | Produktkategorier (`/produkter/[slug]`) |
| `config/services.ts` | Tjänster (`/tjanster/[slug]`): armeringsmontage, bockningslista |
| `config/cities.ts` | Lokala leveranssidor (`/armering/[slug]`) |
| `config/blog.ts` | Guider/artiklar (`/blogg/[slug]`) |
| `config/faq.ts` | Vanliga frågor (FAQPage-schema) |
| `config/reviews.ts` | Omdömen – **platshållare tills äkta omdömen finns** (`verified: true` aktiverar schema) |

Ändra `config/*` → `npm run build` → meny, sidfot, sitemap och JSON-LD uppdateras automatiskt.

## Sidstruktur

```
/                          startsida
/produkter  /produkter/[slug]     produkthub + 5 kategorier
/tjanster   /tjanster/[slug]      tjänstehub + armeringsmontage, bockningslista
/leverans                  leverans i hela Sverige (stads-hub)
/armering/[slug]           12 lokala leveranssidor (leverans, inte fysisk närvaro)
/armeringskalkylator       lead-magnet (kalkyl → offert)
/blogg      /blogg/[slug]  guider (armering-klustret)
/vanliga-fragor  /omdomen  /om-oss  /kontakt  /offert  /integritetspolicy
/api/lead                  offertförfrågan (POST → e-post via SMTP)
```

## SEO / teknik

- Per-sida `<title>`/meta/canonical/OpenGraph + genererad `opengraph-image`.
- JSON-LD: Organization, WebSite, Service, FAQPage, Article, BreadcrumbList
  (Review/AggregateRating aktiveras när äkta omdömen markeras `verified`).
- Dynamisk `sitemap.xml` + `robots.txt`; SSG för alla sidor.
- GA4 (`config/site.ts:gaId`) och Meta Pixel laddas **först efter cookie-samtycke**.
- HTTPS-redirect i `proxy.ts` (Next 16, f.d. middleware) via `X-Forwarded-Proto`.

## Deploy

`git push` till `main` → GitHub Actions (`.github/workflows/deploy.yml`) → rsync över
SSH → omstart av Passenger. Detaljer och felsökning: `docs/DEPLOY.md` + `docs/STATUS.md`.

## Agent-läsning

`AGENTS.md`/`CLAUDE.md`: denna Next-version kan ha brytande ändringar – läs relevant
guide i `node_modules/next/dist/docs/` innan du skriver Next-specifik kod.
