# Deploy & migrering – turnkey-playbook

> Mål: få den nya SEO-versionen live och be Google indexera om. När Alexander är
> vid datorn ska detta gå på ~15 min. Läs `docs/PLAN.md` för SEO-kontexten.

## Nuläge → mål
- **Nu:** live på VPS (185.189.51.128) via pm2 + nginx, port 3002.
  Git har 19 artiklar + schema + interna länkar som **ännu inte är deployade**.
- **Beslut:** flytta till **Inleed webbhotell** (där DNS + e-post redan ligger) och
  släcka den separata VPS:en. Allt samlat hos en leverantör.
- **Inleed stödjer Node.js:** DirectAdmin → Extra Features → **"Setup Node.js App"**
  (CloudLinux Node Selector / Passenger), Node upp till v20.10 – räcker för Next 16.
  API:t `/api/lead` (offertformuläret) fungerar därmed.
- **Startfil finns i repot:** `server.js` (custom server) – Passenger kör en startfil,
  inte `npm run start`. Redan smoke-testad (start, bloggsidor, /api/lead svarar).

## Miljövariabler (måste sättas på nya hostingen)
Utan SMTP loggas leads bara – inga mejl skickas. Värden finns i serverns nuvarande
`.env` (VPS `/opt/gjutabetongplatta/.env`) och i lösenordshanteraren.

| Variabel | Värde (inleed) |
|----------|----------------|
| `SMTP_HOST` | `mail.gjutabetongplatta.se` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` |
| `SMTP_USER` | `info@gjutabetongplatta.se` |
| `SMTP_PASS` | (från lösenordshanteraren) |
| `LEAD_TO` | `info@gjutabetongplatta.se` |
| `LEAD_FROM` | `info@gjutabetongplatta.se` |

## Väg A – Inleed webbhotell (DirectAdmin, VÄLJ DENNA)

Förutsätter ett webbhotellspaket hos Inleed med SSH (Standard+). Node build kan vara
tungt – har paketet för lite minne, kör `npm ci && npm run build` på VPS:en och ladda
upp mappen (inkl. `.next` och `node_modules`) istället för att bygga på hotellet.

1. **Ladda upp koden.** Via SSH till Inleed-kontot, klona utanför `public_html`:
   ```bash
   cd ~
   git clone https://github.com/alexgeho/Gjutabetongplatta.git gjutabetongplatta
   ```
2. **Skapa Node-appen.** DirectAdmin → Extra Features → **Setup Node.js App** →
   Create Application:
   - Node.js version: **20.x** (högsta tillgängliga)
   - Application mode: **Production** (sätter NODE_ENV=production)
   - Application root: `gjutabetongplatta`
   - Application URL: `gjutabetongplatta.se`
   - Application startup file: **`server.js`**
   - SAVE.
3. **Miljövariabler.** I samma Node-app-vy, lägg till variablerna i tabellen ovan
   (SMTP_HOST/PORT/SECURE/USER/PASS, LEAD_TO, LEAD_FROM). Spara.
4. **Installera & bygg.** Panelen visar ett "Enter virtual environment"-kommando
   (`source ~/nodevenv/gjutabetongplatta/20/bin/activate && cd ~/gjutabetongplatta`).
   Kör i den shellen:
   ```bash
   npm ci
   npm run build
   ```
   (eller använd panelens "Run NPM Install" och bygg via SSH. Hoppa över om du laddat
   upp en färdigbyggd mapp – se noten ovan.)
5. **Starta om appen** (Restart-knappen i Node-app-vyn). Passenger mappar
   `gjutabetongplatta.se` → appen automatiskt via Application URL.
6. **HTTPS.** Utfärda Let's Encrypt för domänen i DirectAdmin (SSL Certificates).
7. Verifiera innan DNS-bytet om möjligt (Inleed ger ofta en temporär adress/pekare).

## Väg B – Vercel (alternativ om build på hotellet strular)
1. vercel.com → Import Git Repository → `alexgeho/Gjutabetongplatta`.
2. Framework auto-detect (Next.js). Lägg miljövariablerna i Project Settings → Env.
3. Deploy sker automatiskt vid varje `git push` – ingen manuell deploy mer.
4. Lägg till domänen i Vercel och peka DNS (se nedan). Test: SMTP från serverless –
   funkar oftast; om blockerat, byt `lib/mail.ts` till en e-post-API (t.ex. Resend).

## DNS-omställning
DNS ligger redan hos Inleed (ns*.inleed.net), så det är bara att ändra A-posterna i
Inleeds DNS-hantering. **Rör INTE MX/SPF/DKIM** – e-posten ligger kvar på Inleed.
- `A  @   → <Inleed-webbhotellets server-IP>` (visas i DirectAdmin / välkomstmejlet)
- `A  www → <samma IP>`
- Ta bort/ersätt gamla A som pekar på VPS:en `185.189.51.128`.
- Ligger domänen redan på samma Inleed-konto kan Inleed peka den automatiskt – kontrollera.
- TTL kan ta upp till några timmar innan bytet slår igenom överallt.
- (Väg B/Vercel: följ istället Vercels A/CNAME-instruktion.)

## Verifiering efter deploy
- [ ] Startsidan laddar över HTTPS på nya hostingen.
- [ ] `/blogg` visar 19 artiklar i två grupper (Betong & grund / Armering).
- [ ] Öppna `/blogg/gjuta-platta-pa-mark-steg-for-steg` – ~2000 ord, prisstabell,
      FAQ-sektion, interna länkar klickbara.
- [ ] `gjutabetongplatta.se/sitemap.xml` svarar och listar alla artiklar.
- [ ] Skicka ett testlead via `/offert` – mejl kommer fram till info@-brevlådan.

## GSC efter deploy (workstream T8)
1. Search Console → URL Inspection → klistra in de viktigaste URL:erna → **Request
   Indexing** (en i taget). Prioritera:
   - `/blogg/gjuta-platta-pa-mark-steg-for-steg`
   - `/blogg/vad-kostar-det-att-gjuta-betongplatta`
   - `/blogg/armering-till-betongplatta`
   - `/` och `/tjanster/gjuta-betongplatta`
2. Sitemaps → bekräfta att `sitemap.xml` fortfarande är "Success" (byt inget – samma URL).
3. Rich Results Test (search.google.com/test/rich-results) på pelarartikeln →
   verifiera att **FAQ**-strukturerad data hittas (nya, fanns ej i gamla versionen).
4. Följ Performance för target-queries efter 1–2 veckor: `gjuta betongplatta`,
   `gjuta platta`, `armering till betongplatta`, `armeringsnät`. Baslinje: snittpos 49.

## Rollback
Gamla VPS:en kan lämnas igång tills nya hostingen är verifierad. Peka bara tillbaka
A-posterna till 185.189.51.128 om något krånglar. Släck/avsluta VPS först när nya
sajten fungerar och leads kommer fram.
