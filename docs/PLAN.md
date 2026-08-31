# SEO-plan: slå konkurrenterna (gjutabetongplatta.se)

> Levande arbetsfil. Nästa agent: läs denna + `docs/keyword-mapping.md` först.
> Kort ryska för Alexander: цель — обогнать эти 2 сайта в Google. Прогресс ниже.

## Mål
Ranka #1 för "gjuta betongplatta / gjuta platta / platta på mark" i Stockholm.
GSC nu (aug 2026): 392 impressions/3 mån, 0 klick, snittposition **49.2**.
Top queries: `gjuta betonggolv` (59), `gjuta betongplatta` (34).

## Target-konkurrenter att gå om
1. **byggstart.se/guide/gjuta-platta** — pelarguide ~1800–2000 ord.
   Prisstabell (villa 110 m² = 136 000 kr, garage 40 m² = 32 500 kr).
   Sökord: gjuta platta, betongplatta, pris, bottenplatta, tjälsäkring, dränering, radonspärr.
   **Svaghet: ingen FAQ, ingen schema-markup för pris.**
2. **skanskabyggvaror.se/.../sa-har-gjuter-du-en-platta-pa-mark/** — DIY-guide ~1200–1400 ord.
   Exakta mått: armering 50 mm från form, överlapp 60 cm, betong 1:2:1, vattna 3–5 dagar, form av 3–5 dagar.
   Vinkel: attefallshus/garage.
   **Svaghet: tunt om pris, isolering, ROT, radon; ren DIY utan proffs-CTA.**

## Strategi (så vinner vi)
Vår pelarartikel `/blogg/gjuta-platta-pa-mark-steg-for-steg` ska bli **bäst av alla tre**:
djupare än skanska (proffs + isolering + radon + ROT + pris), mer konkret än byggstart
(exakta mått), + FAQ + FAQPage/HowTo-schema som ingen av dem har.

## Tasks
- [x] T0 Analys av båda konkurrenterna + planfil
- [x] T1 Utöka `config/blog.ts`: block-typer `h3`, `table`, `faq` + `faq`-fält på Post
- [x] T2 Skriv om pelarartikeln till ~2000+ ord (mått + prisstabell + FAQ)
- [x] T3 Rendera nya block + FAQ-sektion i `app/blogg/[slug]/page.tsx`
- [x] T4 FAQPage-schema (+ ev. HowTo) i `lib/jsonld.tsx`, kopplat i blogg-sidan
- [x] T5 Utöka pris-artikeln med prisstabell (kr/m²) + FAQ — matchar byggstart
- [x] T6 Klickbara interna länkar KLART — renderText() parsar [text](/sökväg) i p/ul/ol.
      Alla kluster-artiklar länkar till pelarna + relaterade; 2 pelare → /tjanster/gjuta-betongplatta.
      Bonus: relaterade artiklar (sökordsbaserat), bloggen grupperad i kluster (Betong/Armering),
      sitemap blogg changeFrequency monthly.
- [ ] T7 Committa (vänta på Alexanders OK). Build verifierad ✓.
- [ ] T8 (löpande) begär indexering i GSC, följ position för target-queries

## Status-logg
- 2026-08-31: T0–T5 klara. Pelarartikel (~2000 ord) + prisstabell + FAQ + FAQPage-schema.
  Build ✓. Ej committat än. Kvar: T6 klickbara interna länkar, T7 commit, T8 GSC.

## Workstream 2: Armering-kluster (nytt affärsspår)
Target-konkurrent: **armeringdirekt.se** (webshop: armeringsnät, armeringsjärn, svetsad/bockad).
Beslut: **INTE webshop** – vi skriver informationsartiklar (guider) som rankar på
info-sökord och konverterar till Agrys gjuttjänst. Går ej att slå shop på "köpa"-sökord.
Målsökord (artikel-vinnbara): armering till betongplatta, armering platta på mark,
vilken armering, hur mycket armering, armeringsnät storlekar/mått, armeringsjärn dimensioner.
- [x] A1 Pillar: `armering-till-betongplatta` (typ + mängd + tabell + FAQ)
- [x] A2 `armeringsnat-storlekar-och-matt` (storlekstabell + FAQ)
- [x] A3 `armeringsjarn-dimensioner` (dimensionstabell + FAQ)
- [ ] A4 Interna länkar mellan armering-artiklar och gjut-pelaren (kräver klickbara länkar, se T6)

## Innehållsbacklog (prioriterad)
Klart = publicerat i `config/blog.ts`. Skriv i turordning; varje artikel: tabell + FAQ (schema).

Gjut-kluster (slå byggstart + skanska):
- [x] Hur tjock ska en betongplatta vara? (`betongplatta-tjocklek`) — info-intent, matar pelaren
- [x] Gjuta platta för attefallshus (`gjuta-platta-attefallshus`) — kontrar skanskas attefall-vinkel
- [x] Betongåtgång: hur mycket betong går åt? (`betongatgang-per-m2`) — kalkyl-intent
- [x] Platta på mark eller krypgrund? (`platta-pa-mark-eller-krypgrund`) — jämförelse
- [x] Härdningstid: hur länge ska betong härda? (`harda-betong-tid`)
- [x] Gjuta i kyla / vinter (`gjuta-betong-vinter`)
- [x] Gjuta betongplatta till garage – guide (`gjuta-platta-garage`) — komplement till /tjanster/garageplatta

Armering-kluster (slå armeringdirekt på info-sökord):
- [x] Armering till betongplatta (pelare)
- [x] Armeringsnät storlekar och mått
- [x] Armeringsjärn dimensioner
- [x] Armering till pool (`armering-till-pool`) — armeringdirekt säljer poolkit men saknar guide
- [x] Åtgång: hur mycket armering per m² (`armering-atgang-per-m2`)
- [x] Distanser & täckskikt (`distanser-tackskikt-armering`)
- [x] Klippt & bockad armering – vad är det (`klippt-bockad-armering`)

**Hela backloggen skriven (2026-08-31). Blogg = 19 artiklar.** Nästa: T6 klickbara
interna länkar (viktigt för kluster-auktoritet), sen hosting-migrering + GSC re-index.

## Deploy-läge (2026-08-31)
Beslut: hosta på **Inleed webbhotell** (DirectAdmin, Node.js-stöd finns) och släck VPS:en.
Klart förberett: `server.js` (Passenger-startfil, smoke-testad), `docs/DEPLOY.md` med
exakta DirectAdmin-steg + DNS + GSC-checklista. Återstår (kräver Alexander vid dator):
kör deploy enligt DEPLOY.md → byt A-poster → Request Indexing i GSC.

## Kör-info
- Bygg: `npm run build`  ·  Dev: `npm run dev`
- Domän/kontakt styrs från `config/site.ts` (kvar TODO: orgnr, adress).
- Next.js är MODIFIERAD i detta repo — läs `AGENTS.md` innan större ändringar.
