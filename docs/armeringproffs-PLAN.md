# armeringproffs.se – plan & instruktion (nytt affärsspår: prefab armering)

> Separat sajt/projekt vid sidan av gjutabetongplatta.se (Agry). Denna fil är
> planeringsdokumentet. När sajten byggs bör den bli ett **eget repo** men får
> använda gjutabetongplatta.se som mall. Kort ryska för Alexander finns i punkterna.

## Affär
- **Prefab-изделия из арматуры** (prefabricerad armering). Полный цикл:
  **tillverkning + leverans + montage (armeringsläggning) + rådgivning** по
  bockningslista/ritning.
- **Доставка: вся Швеция** (не только Стокгольм).
- Модель: **offert/под заказ** (per bockningslista), НЕ корзина-магазин → шаблон
  Agry (lead-gen + offertformulär) идеально подходит.
- Конкурент, которого обгоняем: **armeringdirekt.se** (но на prefab/offert-запросах,
  не на "köpa"-транзакционке, где нужен вебшоп).

## Tillgångar (redan ägda – inget att köpa)
- **Domän `armeringproffs.se`** – finns på Inleed-kontot (Aktiv t.o.m. 2027-02-15).
  Stavning utan genitiv-s: "armeringproffs".
- **Hosting: Inleed Webbhotell Prime #1** (DirectAdmin, Node.js-stöd) – samma paket
  som Agry-sajten flyttas till. Båda sajterna kan ligga här.

## Produktkategorier / sidor (förslag)
Kärnsortiment prefab:
- **Klippt & bockad armering** (kapat/böjt kamstål efter bockningslista)
- **Armeringskorgar** (balk-/pelarkorgar, prefabricerade)
- **Svetsad armering** – nät, mattor, specialnät
- **Armeringsstål / kamstål** (B500B, dim 6–32 mm) – som komplement
- **Distanser & tillbehör**

Sajtstruktur (mall från Agry):
```
/                    startsida (prefab armering, hela Sverige, offert-CTA)
/produkter           översikt
/produkter/[slug]    kategorisidor (klippt-bockad, armeringskorgar, svetsad, …)
/offert              offertförfrågan (fält: ritning/bockningslista-uppladdning, mängd, leveransort)
/leverans            leverans hela Sverige
/om-oss  /kontakt
/blogg               (ev. flytta hit armering-klustret från gjutabetongplatta.se, eller korslänka)
/api/lead            offert → e-post (samma som Agry)
```

## Sökord (target)
Prefab/tjänst-inriktat (artikel/landningssida-vinnbart mot armeringdirekt):
- prefab armering, prefabricerad armering
- klippt och bockad armering, bockad armering, kapad armering
- armeringskorgar, svetsad armering, armeringsnät (info + produkt)
- armering på ritning / bockningslista, beställa armering
- armeringsleverantör, armering hela Sverige
Se även färdigt armering-innehåll i gjutabetongplatta.se (`config/blog.ts` armering-kluster).

## Byggplan
1. Nytt repo från gjutabetongplatta.se-mallen (kopiera struktur: `app/`, `components/`,
   `config/`, `lib/`, `server.js`, deploy-setup). Byt `config/site.ts` (brand, domän,
   telefon, e-post för armeringproffs), färger/logo.
2. Ersätt tjänste-/stadsdata med **produktkategorier** (`config/products.ts`) och bygg
   `/produkter` + `/produkter/[slug]`.
3. Offertformulär: lägg till filuppladdning (ritning/bockningslista) om önskat.
4. Innehåll/SEO: kategorisidor + guider för prefab-sökorden ovan; FAQ + schema som Agry.
5. Deploy på Inleed Prime som en **andra Node.js-app** (egen Application root/URL
   armeringproffs.se, startfil `server.js`) – se `docs/DEPLOY.md` för DirectAdmin-stegen.
6. E-post: skapa `info@armeringproffs.se` på Inleed, sätt SMTP-env som för Agry.

## Status
- **BYGGD OCH LIVE (2026-08-31).** Sajten är byggd (Next.js 16, prefab armering, hela
  Sverige), deployad på Inleed Prime och nås på http://armeringproffs.se. Autodeploy via
  GitHub Actions (`git push` main → Inleed).
- 👉 **Aktuell status, vad som är gjort och nästa steg finns i [`docs/STATUS.md`](./STATUS.md)** —
  läs den FÖRST. Mål: leads (offertförfrågningar).
- Kvar/nästa (se STATUS.md): SMTP för att leads ska mejlas (nu loggas de bara), riktiga
  kontaktuppgifter (telefon/orgnr/adress är platshållare), HTTPS-cert klart + force-SSL,
  Search Console, analytics, ev. Google Ads.
- Affärsscope bekräftat 2026-08-31: full cykel + hela Sverige.
