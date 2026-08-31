/**
 * Blogg/artiklar för SEO. Varje post blir /blogg/[slug].
 * content = array av stycken (paragraf eller underrubrik).
 */

import type { Faq } from "@/config/faq";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO
  updated?: string;
  readingMinutes: number;
  keywords: string[];
  content: Block[];
  /** Frågor & svar – visas i artikeln och som FAQPage-schema. */
  faqs?: Faq[];
};

export const posts: Post[] = [
  {
    slug: "gjuta-platta-pa-mark-steg-for-steg",
    title: "Platta på mark – så byggs den steg för steg",
    metaTitle: "Gjuta betongplatta steg för steg | Guide 2026",
    metaDescription:
      "Gjuta betongplatta steg för steg – från schakt och dränering till isolering, armering och gjutning. Komplett guide för platta på mark, garage och tillbyggnad.",
    excerpt:
      "Så gjuter du en betongplatta steg för steg. En platta på mark måste byggas upp i rätt ordning för att bli fuktsäker och energieffektiv – här går vi igenom hela processen.",
    date: "2026-06-10",
    updated: "2026-08-31",
    readingMinutes: 11,
    keywords: [
      "gjuta betongplatta steg för steg",
      "gjuta platta",
      "platta på mark",
      "gjuta betongplatta",
      "bygga platta på mark",
      "att gjuta en betongplatta",
      "gjuta platta på mark",
      "betongplatta tjocklek",
    ],
    content: [
      { type: "p", text: "Platta på mark är den vanligaste grundläggningsmetoden för villor, tillbyggnader, garage och attefallshus i Sverige. Rätt utförd ger den en stabil, fuktsäker och energieffektiv grund som håller i generationer. I den här kompletta guiden går vi igenom hela processen steg för steg – med exakta mått, materialåtgång, tjocklekar, priser och de vanligaste misstagen att undvika. Guiden fungerar både för dig som vill förstå arbetet innan du anlitar en entreprenör och för dig som funderar på att gjuta en mindre platta själv." },

      { type: "h2", text: "Snabbfakta: platta på mark" },
      { type: "ul", items: [
        "Vanlig plattjocklek: 100 mm för uterum/garage, 100–150 mm för villa (kanterna förstyvas mer).",
        "Isolering: ofta 200–300 mm cellplast (EPS) under uppvärmda hus.",
        "Bärlager: 150–300 mm packad makadam (t.ex. 8–16 eller 16–32 mm).",
        "Armering: svetsat nät, vanligen Ø5–6 mm med 150 mm rutor, placerat på distans i plattans nedre/mellersta del.",
        "Betongkvalitet: normalt C25/30 (även kallad K30) för bärande plattor.",
        "Härdning: håll fuktig i minst 3–7 dygn; full hållfasthet efter ca 28 dygn.",
      ] },

      { type: "h2", text: "1. Bygglov, mått och planering" },
      { type: "p", text: "Innan du gräver: kontrollera om projektet kräver bygglov eller anmälan hos kommunen. Attefallshus och mindre komplementbyggnader kräver oftast anmälan, medan tillbyggnader och nya bostadshus kräver bygglov. Ta reda på markens beskaffenhet (lera, morän, berg), grundvattennivå och om radon förekommer i området – det avgör hur grunden ska byggas upp." },
      { type: "p", text: "Sätt ut plattans mått med profiler och snören, och mät diagonalerna – är de lika långa är hörnen räta. Bestäm färdig höjd (plushöjd) i förhållande till omgivande mark så att vatten alltid rinner bort från byggnaden." },

      { type: "h2", text: "2. Schakt och markberedning" },
      { type: "p", text: "Schakta bort matjord och all lös, organisk jord ner till fast, bärig mark. Organiskt material måste bort helt – annars ruttnar det och plattan sätter sig. Vid lerjord eller dålig bärighet kan urgrävningen behöva göras djupare, eller så förstärks marken. Bredda schaktet ca 300 mm utanför plattans kant för dränering och kantisolering." },
      { type: "h3", text: "Tjälsäkring" },
      { type: "p", text: "I Sverige måste grunden tjälsäkras så att tjälen inte lyfter plattan. Det görs med tillräckligt djup urgrävning kombinerad med markisolering (cellplast) som skjuter ut utanför kanten, samt ett väldränerat, tjälsäkert bärlager. Dimensioneringen beror på ort och klimatzon." },

      { type: "h2", text: "3. Dränering och kapillärbrytande lager" },
      { type: "p", text: "Lägg dräneringsrör runt grunden med fall (minst ca 1:200) mot en dräneringsbrunn eller stenkista, lägre än plattans underkant. Ovanpå den schaktade botten läggs ett kapillärbrytande och bärande lager av tvättad makadam, 150–300 mm, som packas i skikt med vibroplatta. Makadamen bryter kapillärkraften så att markfukt inte kan stiga upp i plattan – därför ska man inte använda finkornigt grus eller sand här." },

      { type: "h2", text: "4. Isolering (cellplast)" },
      { type: "p", text: "På det packade bärlagret läggs markisolering av cellplast (EPS). För uppvärmda hus används ofta 200–300 mm i två förskjutna lager så att skarvarna inte bildar köldbryggor. Runt kanten används isolerade kantelement (L-element) som både fungerar som form och bryter köldbryggan där plattan möter ytterväggen. För ouppvärmda garage eller förråd kan isoleringen vara tunnare eller utelämnas." },

      { type: "h2", text: "5. Armering och formsättning" },
      { type: "p", text: "Kantelementen utgör formen runt plattan; för fristående plattor byggs formen ofta av reglar/plywood som stöttas väl så den inte bukar när betongen fylls i. Armeringsnät läggs ut med minst 60 cm överlapp i skarvarna och minst 50 mm från formkanten. Näten lyfts upp på distanser (”stolar”) så att armeringen hamnar inne i betongen och inte mot underlaget. I kanter och under bärande väggar förstärks med extra kantjärn där lasterna är störst." },
      { type: "p", text: "Ska du ha vattenburen golvvärme fästs rören på armeringen nu, före gjutning. Dra även rör för el, vatten och avlopp genom plattan i detta skede – det går inte att ändra efteråt." },

      { type: "h2", text: "6. Gjutning" },
      { type: "p", text: "För allt utom de minsta plattorna lönar det sig att beställa fabriksbetong (betongbil) – jämnare kvalitet och rätt mängd. Ska du blanda själv för en liten platta är en vanlig proportion ungefär 1 del cement, 2 delar sand och 3 delar makadam, men färdig torrbetong är enklare att få rätt. Gjut helst allt i ett svep så att plattan blir monolitisk utan svaga gjutfogar." },
      { type: "p", text: "Fyll formen, vibrera bort luftfickor med stavvibrator och dra av ytan plant mot formkanterna med en rätskiva. Bygg ett litet fall (ca 1:100) mot golvbrunn där sådan finns, t.ex. i garage. Undvik att gjuta i frost – betong ska inte frysa innan den härdat. Vid varmt väder skydda mot uttorkning." },

      { type: "h2", text: "7. Glättning, härdning och efterarbete" },
      { type: "p", text: "När vattenglansen försvunnit och betongen börjat styvna glättas ytan – för hand med bräda/stålglättare eller med maskin för större ytor. Därefter är härdningen avgörande för hållfastheten: håll ytan fuktig genom att vattna 2–3 gånger om dagen i 3–5 dygn, eller täck med plast/härdmembran. Formen kan oftast tas bort efter 3–5 dygn, men vänta med tunga laster tills betongen närmar sig full hållfasthet efter ca 28 dygn." },

      { type: "h2", text: "Vad kostar det att gjuta en platta?" },
      { type: "p", text: "Priset styrs av storlek, markförhållanden, isolering och tillgänglighet. Som riktmärke ligger en komplett, isolerad villaplatta ofta i intervallet 2 500–4 000 kr/m² inklusive material och arbete, medan en enklare ouppvärmd garageplatta är billigare per kvadratmeter. Nedan två typexempel som riktvärden (verklig kostnad varierar med tomt och ort):" },
      { type: "table",
        caption: "Riktpriser inkl. material och moms – varierar med förutsättningar.",
        head: ["Projekt", "Utförande", "Riktpris"],
        rows: [
          ["Villa ~110 m²", "Kantelement, isolerad platta (300 mm cellplast), radonspärr", "ca 130 000–160 000 kr"],
          ["Garage ~40 m²", "Kantelement, oisolerad stålslipad platta", "ca 30 000–45 000 kr"],
          ["Uterum/attefall ~25 m²", "Isolerad platta, förberedd för golvvärme", "ca 65 000–90 000 kr"],
        ],
      },
      { type: "p", text: "Vid arbete på en befintlig fastighet kan ROT-avdraget sänka arbetskostnaden med 30 %. Vi lämnar alltid ett fast pris efter ett kostnadsfritt platsbesök så att du slipper överraskningar. Läs mer i vår artikel om [vad det kostar att gjuta en betongplatta](/blogg/vad-kostar-det-att-gjuta-betongplatta)." },

      { type: "h2", text: "Vanliga misstag att undvika" },
      { type: "ul", items: [
        "För tunt eller dåligt packat bärlager – ger sättningar och sprickor.",
        "Kvarlämnad matjord eller organiskt material under plattan.",
        "Armering som ligger mot underlaget istället för på distans inne i betongen.",
        "För lite eller fellagd isolering – köldbryggor och höga uppvärmningskostnader.",
        "Utebliven tjälsäkring – tjällyftning spräcker plattan.",
        "Gjutning i frost eller uttorkning i solen utan skydd.",
        "För tidig belastning innan betongen härdat klart.",
      ] },

      { type: "h2", text: "Gjuta själv eller anlita proffs?" },
      { type: "p", text: "En liten platta för förråd, grillplats eller trädgård går att gjuta själv om du är noggrann. Men för husgrund, garage och attefallshus krävs rätt dimensionering enligt konstruktionsritning, tjälsäkring och fuktskydd – fel blir dyra att åtgärda i efterhand. Då är det tryggare, och ofta billigare i längden, att anlita en entreprenör med garanti. Vi [gjuter betongplattor och husgrunder](/tjanster/gjuta-betongplatta) i hela Stockholm med omnejd. Begär en kostnadsfri offert så tar vi hand om hela processen – från schakt till färdig platta." },
    ],
    faqs: [
      { q: "Hur tjock ska en betongplatta vara?", a: "En platta på mark för villa är oftast 100–150 mm tjock, med förstyvade kanter under bärande väggar. För garage och uterum räcker normalt 100 mm. Exakt tjocklek och armering ska dimensioneras efter laster och markförhållanden." },
      { q: "Hur mycket isolering behövs under plattan?", a: "Under uppvärmda hus används vanligen 200–300 mm cellplast (EPS), gärna i två förskjutna lager plus isolerade kantelement som bryter köldbryggan. Ouppvärmda garage kan ha tunnare eller ingen isolering." },
      { q: "Vilken betong ska man använda till platta på mark?", a: "Normalt används betongkvalitet C25/30 (K30) för bärande plattor. För större gjutningar lönar det sig att beställa fabriksbetong för jämn kvalitet och rätt mängd." },
      { q: "Hur lång tid tar det innan man kan bygga på plattan?", a: "Formen kan oftast tas bort efter 3–5 dygn. Betongen bör hållas fuktig i minst 3–7 dygn och når full hållfasthet efter cirka 28 dygn – vänta med tunga laster tills dess." },
      { q: "Måste en platta på mark tjälsäkras?", a: "Ja. I det svenska klimatet måste grunden tjälsäkras med tillräcklig urgrävning, markisolering som skjuter ut utanför kanten och ett väldränerat, tjälsäkert bärlager, annars kan tjällyftning spräcka plattan." },
      { q: "Kan jag gjuta en platta på mark själv?", a: "En mindre platta för förråd eller trädgård går att gjuta själv om du är noggrann med bärlager, armering och härdning. För husgrund, garage och attefallshus rekommenderar vi en entreprenör, eftersom felaktig dimensionering och fuktskydd blir dyrt att åtgärda." },
    ],
  },
  {
    slug: "vad-kostar-det-att-gjuta-betongplatta",
    title: "Vad kostar det att gjuta en betongplatta?",
    metaTitle: "Vad kostar en betongplatta? Pris 2026 | Agry Entreprenad",
    metaDescription:
      "Vad kostar det att gjuta en betongplatta 2026? Vi går igenom vad som påverkar priset per kvadratmeter – storlek, isolering, mark och ROT-avdrag.",
    excerpt:
      "Priset för att gjuta en betongplatta varierar med storlek, markförhållanden och isolering. Här förklarar vi vad som påverkar kostnaden.",
    date: "2026-07-02",
    readingMinutes: 5,
    keywords: [
      "gjuta betongplatta pris",
      "gjuta platta pris",
      "gjuta betongplatta kostnad",
      "pris betongplatta",
      "vad kostar betongplatta",
    ],
    content: [
      { type: "p", text: "En av de vanligaste frågorna vi får är vad det kostar att gjuta en betongplatta. Svaret beror på flera faktorer – här är de viktigaste." },
      { type: "h2", text: "Faktorer som påverkar priset" },
      { type: "ul", items: [
        "Plattans storlek (kvadratmeter)",
        "Markförhållanden och behov av schakt",
        "Tjocklek på isolering och armering",
        "Om golvvärme ska förberedas",
        "Tillgänglighet på tomten för maskiner",
        "Bortforsling av massor",
      ] },
      { type: "h2", text: "Riktpriser per kvadratmeter" },
      { type: "p", text: "Som grov vägledning ligger priset att gjuta en betongplatta ofta i dessa intervall, inklusive material och arbete. Verklig kostnad beror på tomt, mark och ort:" },
      { type: "table",
        caption: "Riktpriser inkl. material och moms. Exakt pris efter platsbesök.",
        head: ["Typ av platta", "Pris per m²", "Exempel 40 m²"],
        rows: [
          ["Oisolerad platta (garage/förråd)", "ca 1 500–2 500 kr/m²", "ca 60 000–100 000 kr"],
          ["Isolerad platta (uterum/tillbyggnad)", "ca 2 500–3 500 kr/m²", "ca 100 000–140 000 kr"],
          ["Komplett villaplatta med radonspärr", "ca 3 000–4 000 kr/m²", "ca 120 000–160 000 kr"],
        ],
      },
      { type: "h2", text: "Fast pris efter platsbesök" },
      { type: "p", text: "Eftersom förutsättningarna skiljer sig åt lämnar vi alltid ett fast pris efter ett kostnadsfritt platsbesök. Då slipper du överraskningar och vet exakt vad arbetet kostar." },
      { type: "h2", text: "Sänk kostnaden med ROT-avdrag" },
      { type: "p", text: "Vid arbete på en befintlig fastighet kan du använda ROT-avdraget och dra av 30 % av arbetskostnaden. Vi sköter hela ansökan mot Skatteverket." },
    ],
    faqs: [
      { q: "Vad kostar det att gjuta en betongplatta per kvadratmeter?", a: "Som riktvärde ligger priset ofta mellan cirka 1 500 kr/m² för en enkel oisolerad platta och 4 000 kr/m² för en komplett isolerad villaplatta med radonspärr, inklusive material och arbete. Exakt pris beror på storlek, mark och tillgänglighet." },
      { q: "Vad påverkar priset mest?", a: "De största faktorerna är plattans storlek, markförhållanden och behov av schakt, tjocklek på isolering och armering, om golvvärme ska förberedas samt tillgänglighet för maskiner och bortforsling av massor." },
      { q: "Kan jag få ROT-avdrag på att gjuta en platta?", a: "Ja, för arbete på en befintlig fastighet (t.ex. tillbyggnad, garage eller uterum) kan ROT-avdraget sänka arbetskostnaden med 30 %. För helt nya hus gäller inte ROT. Vi hanterar ansökan åt dig." },
    ],
  },
  {
    slug: "rot-avdrag-gjutning-grundlaggning",
    title: "ROT-avdrag vid gjutning och grundläggning",
    metaTitle: "ROT-avdrag betongplatta & grund | Så fungerar det 2026",
    metaDescription:
      "Kan du använda ROT-avdrag när du gjuter betongplatta eller husgrund? Vi förklarar när ROT gäller, hur mycket du sparar och hur ansökan går till.",
    excerpt:
      "ROT-avdraget kan sänka arbetskostnaden med 30 % – men det gäller inte alltid. Här reder vi ut när du kan använda ROT vid gjutning och grundläggning.",
    date: "2026-07-20",
    readingMinutes: 4,
    keywords: ["rot-avdrag betongplatta", "rot grundläggning", "rot gjutning"],
    content: [
      { type: "p", text: "ROT-avdraget är ett skatteavdrag för renovering, om- och tillbyggnad. Vid gjutning och grundläggning kan det sänka din kostnad rejält – men det finns viktiga undantag." },
      { type: "h2", text: "När gäller ROT?" },
      { type: "p", text: "ROT gäller för arbete på en befintlig bostad som du äger, till exempel gjutning av platta för en tillbyggnad, ett garage eller ett uterum. Avdraget är 30 % av arbetskostnaden." },
      { type: "h2", text: "När gäller ROT inte?" },
      { type: "p", text: "Vid nyproduktion – till exempel grunden till ett helt nytt hus – gäller inte ROT. Ett hus räknas dessutom som nytt i fem år efter att det uppförts." },
      { type: "h2", text: "Så går det till" },
      { type: "p", text: "Vi drar av ROT direkt på fakturan och ansöker om din del hos Skatteverket. Du behöver bara ha avdragsutrymme kvar för året. Kontakta oss så hjälper vi dig räkna på det." },
    ],
  },
  {
    slug: "gjuta-betongplatta-sjalv",
    title: "Gjuta betongplatta själv – så gör du (och när du bör anlita proffs)",
    metaTitle: "Gjuta betongplatta själv | Guide & vanliga misstag",
    metaDescription:
      "Vill du gjuta en betongplatta själv? Vi går igenom stegen, verktygen och de vanligaste misstagen – och när det lönar sig att anlita en proffsentreprenör.",
    excerpt:
      "Att gjuta en mindre betongplatta själv går att göra – men det är lätt att missa isolering, armering och rätt härdning. Här är vad du behöver veta.",
    date: "2026-08-05",
    readingMinutes: 5,
    keywords: [
      "gjuta betongplatta själv",
      "gjuta egen betongplatta",
      "gjuta enkel betongplatta",
      "gjuta mindre betongplatta",
      "gjuta betongplatta utomhus",
    ],
    content: [
      { type: "p", text: "En mindre betongplatta – till exempel för ett förråd, en grillplats eller en trädgårdsplatta – går att gjuta själv om du är noggrann. För större plattor, husgrund eller garage rekommenderar vi dock en proffsentreprenör, eftersom fel blir dyra att åtgärda." },
      { type: "h2", text: "Så gjuter du en enkel betongplatta" },
      { type: "ul", items: [
        "Gräv ur och lägg ett packat bärlager av makadam",
        "Lägg kapillärbrytande material och eventuell cellplast",
        "Sätt form och lägg armeringsnät på distans",
        "Beställ eller blanda betong och fyll formen",
        "Vibrera bort luftfickor och dra av ytan plant",
        "Glätta och låt betongen härda – håll den fuktig de första dygnen",
      ] },
      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "För tunt eller opackad bärlager – ger sättningar och sprickor",
        "Glömd eller felplacerad armering",
        "För lite isolering vid uppvärmda byggnader",
        "Att gjuta i för kallt väder utan skydd",
      ] },
      { type: "h2", text: "När bör du anlita proffs?" },
      { type: "p", text: "Ska plattan bära ett hus, ett garage eller tunga laster krävs rätt dimensionering enligt konstruktionsritning. Då är det tryggare – och ofta billigare i längden – att anlita en entreprenör. Vi gjuter plattor i hela Stockholm och lämnar garanti på arbetet." },
    ],
  },
  {
    slug: "gjuta-isolerad-betongplatta",
    title: "Gjuta isolerad betongplatta – så får du ett energieffektivt hus",
    metaTitle: "Gjuta isolerad betongplatta | Energismart platta på mark",
    metaDescription:
      "Hur gjuter man en isolerad betongplatta? Vi förklarar hur cellplast, kantelement och golvvärme ger en energieffektiv och fuktsäker platta på mark.",
    excerpt:
      "En isolerad betongplatta minskar värmeförlusterna och gör huset energieffektivt. Så byggs den upp med cellplast, kantelement och förberedelse för golvvärme.",
    date: "2026-08-14",
    readingMinutes: 4,
    keywords: [
      "gjuta isolerad betongplatta",
      "isolering platta på mark",
      "energieffektiv betongplatta",
      "golvvärme betongplatta",
    ],
    content: [
      { type: "p", text: "En isolerad betongplatta – eller isolerad platta på mark – är standard vid nybyggnation idag. Isoleringen minskar värmeförlusterna ner i marken och ger ett behagligt inomhusklimat, särskilt i kombination med golvvärme." },
      { type: "h2", text: "Så byggs en isolerad platta upp" },
      { type: "ul", items: [
        "Kapillärbrytande lager av makadam mot markfukt",
        "Cellplast (EPS) under hela plattan – tjockleken avgör isolervärdet",
        "Isolerade kantelement som bryter köldbryggor vid kanten",
        "Armering och eventuella golvvärmerör före gjutning",
      ] },
      { type: "h2", text: "Hur tjock ska isoleringen vara?" },
      { type: "p", text: "Isoleringstjockleken beror på om huset är uppvärmt och vilka energikrav som gäller. För bostäder används ofta 200–300 mm cellplast. Vi dimensionerar isoleringen efter din byggnad och gällande normer." },
      { type: "h2", text: "Förbered för golvvärme direkt" },
      { type: "p", text: "Ska du ha vattenburen golvvärme läggs rören in i plattan före gjutning. Att förbereda det från start är både enklare och billigare än att lägga till i efterhand. Kontakta oss så hjälper vi dig planera rätt." },
    ],
  },
  {
    slug: "armering-till-betongplatta",
    title: "Armering till betongplatta – vilken typ och hur mycket?",
    metaTitle: "Armering till betongplatta | Vilken & hur mycket 2026",
    metaDescription:
      "Vilken armering behöver du till en betongplatta och hur mycket går det åt? Guide om armeringsnät, kamjärn, dimensioner, täckskikt, överlapp och åtgång per m².",
    excerpt:
      "Rätt armering håller ihop betongplattan och tar upp dragkrafterna som betongen själv inte klarar. Här går vi igenom vilken armering du behöver, hur mycket som går åt och hur den placeras rätt.",
    date: "2026-08-31",
    readingMinutes: 8,
    keywords: [
      "armering till betongplatta",
      "armering platta på mark",
      "vilken armering betongplatta",
      "armeringsnät till platta",
      "hur mycket armering",
      "armering husgrund",
    ],
    content: [
      { type: "p", text: "Betong är starkt i tryck men svagt i drag. Armeringen – stål som gjuts in i plattan – tar upp dragkrafterna, fördelar laster och begränsar sprickor. Utan rätt armering spricker och sätter sig plattan. Här går vi igenom vilken armering du behöver till en betongplatta, hur mycket som går åt och hur den ska placeras." },

      { type: "h2", text: "Vilken armering används till en platta på mark?" },
      { type: "p", text: "Till de flesta plattor på mark används svetsat armeringsnät (armeringsmatta) som huvudarmering, ofta kompletterat med lösa kamjärn (armeringsjärn) i kanter och där lasterna är stora. Nätet ger en jämn armering över hela ytan, medan kamjärnen förstärker punktvis." },
      { type: "ul", items: [
        "Armeringsnät – svetsat rutnät, huvudarmering i plattans yta.",
        "Armeringsjärn / kamstål (B500B) – lösa stänger för kanter, kantbalkar och förstärkningar.",
        "Distanser (”stolar”/klossar) – lyfter armeringen till rätt höjd i betongen.",
        "Bindtråd – binder ihop nät och järn så de ligger stilla vid gjutning.",
      ] },

      { type: "h2", text: "Vanliga dimensioner" },
      { type: "table",
        caption: "Riktvärden – exakt val ska följa konstruktionsritning.",
        head: ["Konstruktion", "Typisk armering", "Placering"],
        rows: [
          ["Uterum / mindre platta", "Armeringsnät Ø5–6 mm, 150 mm rutor", "Ett nätlager i nedre/mellersta delen"],
          ["Garageplatta", "Armeringsnät Ø6 mm + kantjärn", "Nät + förstärkta kanter"],
          ["Villaplatta / husgrund", "Nät Ø6 mm + kamjärn Ø10–12 mm i kantbalkar", "Nät i fält, extra järn under bärande väggar"],
        ],
      },

      { type: "h2", text: "Hur mycket armering går åt?" },
      { type: "p", text: "Åtgången av armeringsnät motsvarar ungefär plattans yta plus spill för överlapp – räkna med cirka 10–15 % extra utöver kvadratmeterytan. Nät levereras oftast i standardformat (t.ex. 2,0 × 5,0 m). Kamjärn till kanter beräknas efter plattans omkrets och antal kantbalkar. En konstruktör eller entreprenör dimensionerar exakt mängd utifrån laster och markförhållanden." },

      { type: "h2", text: "Så placeras armeringen rätt" },
      { type: "ul", items: [
        "Lägg nätet på distanser så det hamnar inne i betongen, inte mot underlaget.",
        "Placera huvudarmeringen där dragkrafterna är störst – i platta på mark oftast i nedre tredjedelen.",
        "Överlappa nätskarvar med minst 1,5–2 rutor (ca 200–300 mm) och bind ihop dem.",
        "Håll ett täckskikt av betong (ofta minst 25–35 mm) runt all armering – annars rostar stålet.",
        "Förstärk kanter och hörn med extra kamjärn där lasterna koncentreras.",
      ] },

      { type: "h2", text: "Köpa själv eller låta entreprenören sköta det?" },
      { type: "p", text: "Armering går att köpa styckvis online, men rätt dimensionering, kapning, bockning och placering är avgörande för att plattan ska hålla. Vid husgrund, garage och tillbyggnad ingår armeringen som en del av vårt arbete – vi dimensionerar, levererar och lägger den enligt konstruktionsritning. Vi [gjuter betongplattor och grunder](/tjanster/gjuta-betongplatta) i hela Stockholm. Begär en kostnadsfri offert så tar vi hand om hela plattan, armering inkluderad." },
    ],
    faqs: [
      { q: "Vilken armering behövs till en betongplatta?", a: "Till platta på mark används oftast svetsat armeringsnät (Ø5–6 mm, 150 mm rutor) som huvudarmering, kompletterat med lösa kamjärn (Ø10–12 mm) i kanter och under bärande väggar. Exakt val ska följa konstruktionsritning." },
      { q: "Hur mycket armeringsnät går åt per kvadratmeter?", a: "Räkna med cirka plattans yta plus 10–15 % extra för överlapp mellan näten. Nät levereras i standardformat, t.ex. 2,0 × 5,0 m, så en del spill uppstår vid kapning." },
      { q: "Hur mycket ska armeringsnät överlappa?", a: "Skarvar mellan armeringsnät bör överlappa minst 1,5–2 rutor, ungefär 200–300 mm, och bindas ihop med bindtråd så att de ligger stilla under gjutningen." },
      { q: "Var i plattan ska armeringen ligga?", a: "Armeringen ska ligga inne i betongen på distanser, inte mot underlaget. I en platta på mark placeras huvudarmeringen vanligtvis i nedre tredjedelen, med minst 25–35 mm betongtäckning runt stålet så att det inte rostar." },
      { q: "Behöver en liten platta armering?", a: "Ja, även en mindre platta bör armeras med ett nät för att fördela laster och begränsa sprickor. Undantag kan finnas för mycket små, olastade ytor, men för garage, uterum och husgrund krävs armering enligt ritning." },
    ],
  },
  {
    slug: "armeringsnat-storlekar-och-matt",
    title: "Armeringsnät – storlekar, mått och rätt val till plattan",
    metaTitle: "Armeringsnät storlekar & mått | Guide till rätt nät 2026",
    metaDescription:
      "Armeringsnät i olika storlekar och mått – förklaring av beteckningar (t.ex. 5x150), standardformat, överlapp och vilket nät du väljer till platta, garage och husgrund.",
    excerpt:
      "Armeringsnät finns i flera dimensioner och format. Här förklarar vi beteckningarna, vanliga mått och hur du väljer rätt nät till din betongplatta.",
    date: "2026-08-31",
    readingMinutes: 6,
    keywords: [
      "armeringsnät",
      "armeringsnät storlekar",
      "armeringsnät mått",
      "armeringsnät till platta",
      "armeringsnät 5x150",
    ],
    content: [
      { type: "p", text: "Armeringsnät (armeringsmatta) är svetsade rutnät av kamstål som utgör huvudarmeringen i de flesta betongplattor. Näten finns i olika trådtjocklekar, rutstorlekar och format – här reder vi ut vad beteckningarna betyder och hur du väljer rätt." },

      { type: "h2", text: "Så läser du beteckningen" },
      { type: "p", text: "Ett armeringsnät anges vanligtvis med trådens diameter och rutstorleken. Beteckningen ”5x150” betyder till exempel Ø5 mm tråd med 150 mm mellan trådarna (150 mm rutor). Ju grövre tråd och tätare rutor, desto mer bärande är nätet." },

      { type: "h2", text: "Vanliga storlekar och format" },
      { type: "table",
        caption: "Riktvärden – utbudet varierar mellan leverantörer.",
        head: ["Beteckning", "Tråd / ruta", "Vanlig användning"],
        rows: [
          ["5x150", "Ø5 mm / 150 mm", "Uterum, mindre plattor, gjutning av golv"],
          ["6x150", "Ø6 mm / 150 mm", "Garageplatta, villaplatta, platta på mark"],
          ["7x150 – 8x150", "Ø7–8 mm / 150 mm", "Tyngre laster, industri, kraftigare plattor"],
        ],
      },
      { type: "p", text: "Näten säljs oftast i standardformat, till exempel omkring 2,0 × 5,0 m, men även andra format förekommer. Vid beställning räknar man ytan plus spill för överlapp." },

      { type: "h2", text: "Vilket nät till vad?" },
      { type: "ul", items: [
        "Uterum och mindre plattor: ofta Ø5 mm, 150 mm rutor.",
        "Garage- och villaplatta: vanligen Ø6 mm, 150 mm rutor.",
        "Kraftiga eller hårt belastade plattor: grövre tråd och/eller dubbla nätlager enligt ritning.",
      ] },

      { type: "h2", text: "Överlapp och placering" },
      { type: "p", text: "Skarvar mellan nät ska överlappa minst 1,5–2 rutor (ca 200–300 mm) och bindas ihop. Nätet läggs på distanser så att det hamnar inne i betongen med tillräckligt täckskikt (ofta minst 25–35 mm). Läs mer i vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta)." },

      { type: "h2", text: "Osäker på valet?" },
      { type: "p", text: "Vill du inte räkna själv? Vi dimensionerar och lägger armeringen som en del av gjutningen, i hela Stockholm med omnejd. Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Vad betyder 5x150 på ett armeringsnät?", a: "Det betyder att nätet har Ø5 mm tråd med 150 mm mellan trådarna, alltså 150 mm rutor. Första siffran är trådens diameter i mm, andra är rutstorleken." },
      { q: "Vilket armeringsnät ska jag ha till en garageplatta?", a: "Till en garageplatta används vanligtvis nät med Ø6 mm tråd och 150 mm rutor, ofta kompletterat med extra kamjärn i kanterna. Exakt val beror på laster och ska följa konstruktionsritning." },
      { q: "Vilka mått har ett armeringsnät?", a: "Näten säljs i standardformat, ett vanligt format är omkring 2,0 × 5,0 m, men storleken varierar mellan leverantörer. Vid beställning räknar man plattans yta plus spill för överlapp." },
      { q: "Hur mycket ska armeringsnät överlappa?", a: "Överlappet mellan två nät bör vara minst 1,5–2 rutor, ungefär 200–300 mm, och skarvarna bör bindas ihop så att näten ligger stilla vid gjutning." },
    ],
  },
  {
    slug: "armeringsjarn-dimensioner",
    title: "Armeringsjärn – dimensioner och när du använder vad",
    metaTitle: "Armeringsjärn dimensioner (6–32 mm) | Guide 2026",
    metaDescription:
      "Armeringsjärn (kamstål B500B) finns i dimensioner från 6 till 32 mm. Guide om vilken dimension du använder till platta, kantbalk och husgrund – och hur järnen placeras.",
    excerpt:
      "Armeringsjärn finns i många dimensioner, från 6 till 32 mm. Här går vi igenom vad de olika grovlekarna används till och hur du väljer rätt kamstål.",
    date: "2026-08-31",
    readingMinutes: 5,
    keywords: [
      "armeringsjärn",
      "armeringsjärn dimensioner",
      "armeringsjärn 8 mm",
      "kamstål",
      "armeringsstål",
    ],
    content: [
      { type: "p", text: "Armeringsjärn – även kallat kamstål eller armeringsstål – är räfflade stålstänger som gjuts in i betong för att ta upp dragkrafter. Kammarna (räfflorna) gör att stålet biter fast i betongen. I Sverige används normalt kvaliteten B500B. Här går vi igenom dimensionerna och när du använder vilken." },

      { type: "h2", text: "Vanliga dimensioner" },
      { type: "table",
        caption: "Riktvärden för användning – dimensionering ska följa ritning.",
        head: ["Dimension", "Typisk användning"],
        rows: [
          ["6 mm", "Lättare armering, byglar, mindre konstruktioner"],
          ["8 mm", "Kantförstärkning, mindre balkar, komplement till nät"],
          ["10 mm", "Kantbalkar i platta på mark, husgrund"],
          ["12 mm", "Kantbalkar och bärande partier i villagrund"],
          ["16–32 mm", "Kraftiga balkar, pelare och konstruktioner med stora laster"],
        ],
      },

      { type: "h2", text: "Kamjärn eller armeringsnät?" },
      { type: "p", text: "I en platta på mark kombineras oftast båda: armeringsnät ger jämn armering över hela ytan, medan lösa armeringsjärn förstärker kanter, kantbalkar och punkter med stora laster. Under bärande väggar läggs extra järn för att fördela lasten. Se vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta) för helheten." },

      { type: "h2", text: "Kapning och bockning" },
      { type: "p", text: "Kamjärn kapas och bockas efter konstruktionsritningen. Bockade byglar och kantjärn ger rätt form på armeringen i kanter och hörn. Fel kapning eller bockning försämrar bärförmågan, så måtten ska följas noga." },

      { type: "h2", text: "Låt proffs sköta armeringen" },
      { type: "p", text: "Rätt dimension, placering och täckskikt avgör om plattan håller. Vi dimensionerar, levererar, kapar, bockar och lägger armeringen som en del av gjutningen i hela Stockholm. Begär en kostnadsfri offert så gör vi det rätt från början." },
    ],
    faqs: [
      { q: "Vilka dimensioner finns på armeringsjärn?", a: "Armeringsjärn (kamstål) finns vanligtvis i dimensioner 6, 8, 10, 12, 16, 20, 25 och 32 mm. Till platta på mark och husgrund används oftast 8–12 mm i kanter och kantbalkar." },
      { q: "Vilken dimension på armeringsjärn till en betongplatta?", a: "I kanter och kantbalkar på en villaplatta används ofta 10–12 mm kamjärn, medan själva ytan armeras med nät. Exakt dimension beror på laster och ska följa konstruktionsritning." },
      { q: "Vad är skillnaden på kamstål och armeringsnät?", a: "Kamstål (armeringsjärn) är lösa räfflade stänger som förstärker punktvis, medan armeringsnät är ett svetsat rutnät som ger jämn armering över hela ytan. I en platta kombineras de ofta." },
      { q: "Vilken kvalitet har armeringsjärn i Sverige?", a: "Den vanligaste kvaliteten är B500B, ett kamstål med sträckgräns 500 MPa. Kammarna gör att stålet får bra vidhäftning mot betongen." },
    ],
  },
  {
    slug: "betongplatta-tjocklek",
    title: "Hur tjock ska en betongplatta vara?",
    metaTitle: "Hur tjock ska en betongplatta vara? | Guide 2026",
    metaDescription:
      "Hur tjock ska en betongplatta vara? Vi går igenom rekommenderad tjocklek för platta på mark, garage, uterum och husgrund – samt hur last, isolering och armering påverkar.",
    excerpt:
      "Tjockleken på en betongplatta avgörs av vad den ska bära. Här är riktvärden för platta på mark, garage, uterum och husgrund – och vad som påverkar rätt tjocklek.",
    date: "2026-08-31",
    readingMinutes: 5,
    keywords: [
      "betongplatta tjocklek",
      "hur tjock betongplatta",
      "tjocklek platta på mark",
      "betongplatta garage tjocklek",
    ],
    content: [
      { type: "p", text: "En vanlig fråga inför gjutning är hur tjock betongplattan behöver vara. Svaret beror på vad plattan ska bära, markförhållandena och om den ska isoleras. Här är riktvärden – men den exakta tjockleken ska alltid dimensioneras enligt konstruktionsritning." },

      { type: "h2", text: "Riktvärden för plattjocklek" },
      { type: "table",
        caption: "Riktvärden för själva betongplattan – exkl. isolering och bärlager.",
        head: ["Användning", "Typisk tjocklek", "Kommentar"],
        rows: [
          ["Trädgårds-/grillplatta", "80–100 mm", "Lätt last, ett armeringsnät"],
          ["Uterum", "100 mm", "Isoleras ofta, förberedd för värme"],
          ["Garageplatta", "100–120 mm", "Tål bilar; förstyvade kanter"],
          ["Villaplatta / husgrund", "100–150 mm", "Kanterna kraftigare under bärande väggar"],
        ],
      },
      { type: "p", text: "Utöver själva betongen tillkommer isolering (ofta 200–300 mm cellplast under uppvärmda hus) och ett packat bärlager av makadam (150–300 mm). Kanterna på en villaplatta görs kraftigare – kantbalkarna kan vara betydligt tjockare än plattans mitt." },

      { type: "h2", text: "Vad påverkar tjockleken?" },
      { type: "ul", items: [
        "Lasten – ju tyngre byggnad eller fordon, desto kraftigare platta.",
        "Markens bärighet – dålig mark kan kräva kraftigare eller förstärkt platta.",
        "Punktlaster – bärande väggar och pelare kräver förstärkta partier.",
        "Isolering och golvvärme – påverkar uppbyggnaden, inte främst betongtjockleken.",
        "Armering – rätt armering kan tillåta en effektivare platta.",
      ] },

      { type: "h2", text: "För tunn platta – vad händer?" },
      { type: "p", text: "En för tunn eller underarmerad platta spricker, böjer sig och kan i värsta fall brista under last. Att spara på tjocklek eller armering är därför en dålig affär – det blir dyrt att åtgärda i efterhand. Läs mer om [armering till betongplatta](/blogg/armering-till-betongplatta) och hela processen i vår guide om att [gjuta platta på mark](/blogg/gjuta-platta-pa-mark-steg-for-steg)." },

      { type: "h2", text: "Vi dimensionerar rätt" },
      { type: "p", text: "Vi räknar fram rätt tjocklek, armering och uppbyggnad för just din platta och gjuter den i hela Stockholm med omnejd. Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Hur tjock ska en platta på mark vara?", a: "Själva betongplattan är oftast 100–150 mm tjock för villa, med kraftigare kantbalkar under bärande väggar. Till detta kommer isolering och ett packat bärlager. Exakt tjocklek dimensioneras efter last och mark." },
      { q: "Hur tjock ska en garageplatta vara?", a: "En garageplatta görs vanligtvis 100–120 mm tjock med förstyvade kanter, så att den tål vikten av bilar. Ska tyngre fordon stå på den kan den behöva göras kraftigare." },
      { q: "Hur tjock ska en betongplatta för uterum vara?", a: "En uterumsplatta är ofta cirka 100 mm tjock och isoleras normalt med cellplast, gärna förberedd för golvvärme om uterummet ska värmas." },
      { q: "Vad händer om plattan är för tunn?", a: "En för tunn eller dåligt armerad platta riskerar att spricka, svikta eller brista under last. Det är dyrt att åtgärda i efterhand, så plattan bör dimensioneras rätt från början." },
    ],
  },
  {
    slug: "gjuta-platta-attefallshus",
    title: "Gjuta platta för attefallshus – grund steg för steg",
    metaTitle: "Gjuta platta för attefallshus | Grundguide 2026",
    metaDescription:
      "Ska du gjuta grund till ett attefallshus? Guide om platta på mark för attefallshus – regler, tjocklek, isolering, armering och vad det kostar.",
    excerpt:
      "Ett attefallshus behöver en stabil, fuktsäker grund. Här går vi igenom hur du gjuter en platta på mark för attefallshus – regler, uppbyggnad och kostnad.",
    date: "2026-08-31",
    readingMinutes: 6,
    keywords: [
      "gjuta platta attefallshus",
      "attefallshus grund",
      "platta på mark attefallshus",
      "grund attefallshus pris",
    ],
    content: [
      { type: "p", text: "Ett attefallshus på upp till 30 m² byggs oftast på en platta på mark – en gjuten betongplatta som ger en stabil, fuktsäker och isolerad grund. Här går vi igenom vad som gäller för grunden, hur den byggs upp och vad den kostar." },

      { type: "h2", text: "Regler att känna till" },
      { type: "p", text: "Ett attefallshus kräver inte bygglov men en anmälan till kommunen och ett startbesked innan du börjar bygga. Det ska normalt placeras minst 4,5 meter från tomtgränsen, om inte berörda grannar godkänner närmare placering. Kontrollera alltid aktuella regler och eventuella lokala bestämmelser med din kommun innan du gjuter." },

      { type: "h2", text: "Grundtyp: platta på mark" },
      { type: "p", text: "Platta på mark är den vanligaste och oftast enklaste grunden för attefallshus. Den ger ett tätt, isolerat golv och passar bra för både gäststuga, kontor och små bostäder. Ska huset vara uppvärmt och isoleras är en isolerad platta med förberedelse för golvvärme ett bra val." },

      { type: "h2", text: "Så byggs plattan upp" },
      { type: "ol", items: [
        "Schakta bort matjord ner till fast mark och lägg ett packat bärlager av makadam.",
        "Lägg kapillärbrytande lager och dränering runt grunden.",
        "Lägg cellplast (isolering) och isolerade kantelement.",
        "Lägg armeringsnät på distanser och eventuella golvvärmerör.",
        "Gjut, vibrera, dra av plant och glätta ytan.",
        "Härda plattan – håll den fuktig de första dygnen.",
      ] },
      { type: "p", text: "Se vår kompletta guide om att [gjuta platta på mark](/blogg/gjuta-platta-pa-mark-steg-for-steg) för alla detaljer om mått, isolering och armering." },

      { type: "h2", text: "Vad kostar en grund till attefallshus?" },
      { type: "p", text: "Priset beror på storlek, mark och isoleringsgrad. Som riktvärde ligger en isolerad platta på mark ofta runt 2 500–3 500 kr/m², vilket för ett attefallshus på 25–30 m² innebär storleksordningen 65 000–100 000 kr inklusive material och arbete. Vid arbete på befintlig fastighet kan ROT-avdrag sänka arbetskostnaden. Vi lämnar fast pris efter platsbesök." },

      { type: "h2", text: "Vi gjuter grunden åt dig" },
      { type: "p", text: "Vi bygger kompletta grunder för attefallshus, gäststugor och komplementbyggnader i hela Stockholm – från schakt till färdig, isolerad platta. Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Vilken grund passar till ett attefallshus?", a: "Platta på mark är den vanligaste grunden för attefallshus. Den ger ett stabilt, isolerat och fuktsäkert golv och passar för både uppvärmda och ouppvärmda byggnader." },
      { q: "Behöver jag bygglov för att gjuta grund till attefallshus?", a: "Ett attefallshus kräver inte bygglov, men du måste göra en anmälan till kommunen och få ett startbesked innan du börjar bygga och gjuta grunden. Kontrollera alltid aktuella regler med din kommun." },
      { q: "Vad kostar en platta till attefallshus?", a: "En isolerad platta på mark ligger ofta runt 2 500–3 500 kr/m². För ett attefallshus på 25–30 m² innebär det storleksordningen 65 000–100 000 kr inklusive material och arbete, beroende på mark och utförande." },
      { q: "Hur långt från tomtgränsen får ett attefallshus stå?", a: "Ett attefallshus ska normalt placeras minst 4,5 meter från tomtgränsen. Vill du placera det närmare krävs medgivande från berörda grannar. Kontrollera med kommunen vad som gäller för din tomt." },
    ],
  },
  {
    slug: "betongatgang-per-m2",
    title: "Betongåtgång – hur mycket betong går åt?",
    metaTitle: "Hur mycket betong går åt? Betongåtgång per m² | 2026",
    metaDescription:
      "Hur mycket betong går åt till en platta? Räkna ut betongåtgång per m² och m³ – med exempel för olika tjocklekar, säckbetong och fabriksbetong.",
    excerpt:
      "Betongåtgången beror på ytan och tjockleken. Här visar vi hur du räknar ut hur mycket betong som går åt – i kubikmeter, säckar och för fabriksbetong.",
    date: "2026-08-31",
    readingMinutes: 5,
    keywords: [
      "betongåtgång",
      "hur mycket betong går åt",
      "betong per m2",
      "hur många säckar betong",
      "räkna ut betong",
    ],
    content: [
      { type: "p", text: "Innan du beställer eller köper betong behöver du veta hur mycket som går åt. Det är enkel matematik: volymen betong = ytan gånger tjockleken. Här visar vi hur du räknar, med exempel." },

      { type: "h2", text: "Så räknar du ut volymen" },
      { type: "p", text: "Multiplicera plattans yta (m²) med tjockleken (i meter) så får du volymen i kubikmeter (m³). En platta på 40 m² som är 100 mm (0,1 m) tjock kräver alltså 40 × 0,1 = 4 m³ betong. Lägg till 5–10 % för spill och ojämnt underlag." },
      { type: "table",
        caption: "Betongåtgång per m² vid olika tjocklek (exkl. spill).",
        head: ["Tjocklek", "Åtgång per m²", "Exempel 40 m²"],
        rows: [
          ["80 mm", "0,08 m³", "3,2 m³"],
          ["100 mm", "0,10 m³", "4,0 m³"],
          ["120 mm", "0,12 m³", "4,8 m³"],
          ["150 mm", "0,15 m³", "6,0 m³"],
        ],
      },

      { type: "h2", text: "Säckbetong eller fabriksbetong?" },
      { type: "p", text: "För små gjutningar kan säckbetong räcka. En 25 kg säck ger ungefär 0,0125 m³ (ca 12–13 liter) färdig betong, så det går åt ungefär 80 säckar per kubikmeter. För allt större än en liten platta blir det både billigare och jämnare att beställa fabriksbetong med betongbil, som levereras i kubikmeter." },
      { type: "ul", items: [
        "Liten platta (< ca 1 m³): säckbetong kan fungera.",
        "Medelstor–stor platta: beställ fabriksbetong (betongbil).",
        "Betong väger ca 2 300–2 400 kg/m³ – tänk på tillgänglighet för leverans.",
      ] },

      { type: "h2", text: "Glöm inte armering och isolering" },
      { type: "p", text: "Betongvolymen är bara en del – till plattan går även åt armering, isolering och bärlager. Se våra guider om [armering till betongplatta](/blogg/armering-till-betongplatta) och hur du [gjuter platta på mark](/blogg/gjuta-platta-pa-mark-steg-for-steg) för helheten." },

      { type: "h2", text: "Vi räknar och gjuter åt dig" },
      { type: "p", text: "Vi beräknar exakt betong-, armerings- och materialåtgång och gjuter plattan i hela Stockholm. Begär en kostnadsfri offert så slipper du räkna själv." },
    ],
    faqs: [
      { q: "Hur mycket betong går åt per kvadratmeter?", a: "Det beror på tjockleken. Vid 100 mm tjocklek går det åt 0,10 m³ per m², vid 120 mm 0,12 m³ per m². Multiplicera plattans yta med tjockleken i meter för att få volymen, och lägg till 5–10 % för spill." },
      { q: "Hur räknar man ut hur mycket betong som behövs?", a: "Volym = yta × tjocklek. En platta på 40 m² med 100 mm (0,1 m) tjocklek kräver 40 × 0,1 = 4 m³ betong. Lägg till marginal för spill och ojämnt underlag." },
      { q: "Hur många säckar betong går åt per kubikmeter?", a: "En 25 kg säck ger ungefär 0,0125 m³ färdig betong, så det går åt cirka 80 säckar per kubikmeter. För större gjutningar är fabriksbetong oftast både billigare och enklare." },
      { q: "Vad väger en kubikmeter betong?", a: "Betong väger ungefär 2 300–2 400 kg per kubikmeter. Det är bra att känna till med tanke på transport och tillgänglighet vid leverans med betongbil." },
    ],
  },
  {
    slug: "armering-till-pool",
    title: "Armering till pool – så armeras poolens betong",
    metaTitle: "Armering till pool | Rätt armering i betongpool 2026",
    metaDescription:
      "Hur armeras en betongpool? Guide om armering till pool – armeringsnät och kamjärn i botten och väggar, täckskikt, rostskydd och vanliga misstag.",
    excerpt:
      "En betongpool utsätts för stora krafter från vatten och mark. Rätt armering är avgörande för att den ska hålla tätt. Så armeras poolens botten och väggar.",
    date: "2026-08-31",
    readingMinutes: 5,
    keywords: [
      "armering till pool",
      "armera betongpool",
      "pool armering",
      "gjuta pool armering",
    ],
    content: [
      { type: "p", text: "En gjuten betongpool utsätts för stora och ojämna krafter: vattentrycket inifrån och mark- och grundvattentryck utifrån. Rätt armering håller ihop konstruktionen, begränsar sprickor och är en förutsättning för att poolen ska hålla tätt över tid." },

      { type: "h2", text: "Var sitter armeringen?" },
      { type: "ul", items: [
        "Bottenplattan – armeras för att bära och fördela laster mot marken.",
        "Väggarna – armeras för att ta upp vattentryck och marktryck.",
        "Hörn och övergångar – förstärks extra, där sprickor annars lätt uppstår.",
      ] },
      { type: "p", text: "Ofta kombineras armeringsnät med lösa kamjärn (armeringsjärn), där dimension och centrumavstånd bestäms av poolens storlek och djup. Vanligt är kamjärn i storleksordningen Ø8–12 mm – men detta ska alltid dimensioneras av en konstruktör." },

      { type: "h2", text: "Täckskikt och rostskydd" },
      { type: "p", text: "Eftersom en pool ständigt utsätts för fukt är täckskiktet – betongen mellan armeringen och ytan – extra viktigt. Ett tillräckligt täckskikt skyddar stålet mot korrosion. För saltvattenpooler ställs ännu högre krav på täckskikt och materialval. Armeringen ska ligga på distanser så att täckskiktet blir jämnt runt om." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "För litet täckskikt – armeringen rostar och betongen spjälkar.",
        "Underdimensionerad väggarmering – sprickor och läckage.",
        "Glömd förstärkning i hörn och genomföringar.",
        "Armering som ligger mot formen istället för på distans.",
      ] },

      { type: "h2", text: "Låt proffs dimensionera och gjuta" },
      { type: "p", text: "En pool är en krävande betongkonstruktion där fel blir mycket dyra. Vi dimensionerar armeringen, gjuter botten och väggar och säkrar rätt täckskikt – i hela Stockholm. Läs mer om [armering till betongplatta](/blogg/armering-till-betongplatta) för grunderna, och begär en kostnadsfri offert för ditt poolprojekt." },
    ],
    faqs: [
      { q: "Hur armeras en betongpool?", a: "Både bottenplattan och väggarna armeras, ofta med en kombination av armeringsnät och lösa kamjärn (vanligtvis Ø8–12 mm). Hörn och genomföringar förstärks extra. Dimensionering ska göras av en konstruktör utifrån poolens storlek och djup." },
      { q: "Vilken dimension på armering till pool?", a: "Vanligt är kamjärn i storleksordningen Ø8–12 mm i väggar och botten, men rätt dimension och centrumavstånd beror på poolens mått, djup och markförhållanden och ska alltid dimensioneras enligt konstruktionsritning." },
      { q: "Varför är täckskiktet viktigt i en pool?", a: "Eftersom poolen ständigt utsätts för fukt skyddar betongtäckskiktet armeringen mot rost. För litet täckskikt gör att stålet korroderar och betongen spjälkar. Saltvattenpooler kräver ännu större täckskikt." },
      { q: "Kan man armera och gjuta en pool själv?", a: "En betongpool är en krävande konstruktion där fel i armering eller täckskikt leder till sprickor och läckage. Vi rekommenderar att en fackman dimensionerar och gjuter poolen." },
    ],
  },
  {
    slug: "harda-betong-tid",
    title: "Härdningstid – hur länge ska betong härda?",
    metaTitle: "Hur länge ska betong härda? Härdningstid | Guide 2026",
    metaDescription:
      "Hur länge ska betong härda innan man kan bygga vidare? Guide om härdningstid, när formen kan tas bort, hur du efterbehandlar och varför fukthärdning är viktig.",
    excerpt:
      "Betong blir inte färdig direkt – den härdar under lång tid. Här går vi igenom hur länge betong ska härda, när du kan belasta plattan och hur du sköter härdningen rätt.",
    date: "2026-08-31",
    readingMinutes: 5,
    keywords: [
      "betong härda tid",
      "hur länge härdar betong",
      "härdningstid betong",
      "när kan man gå på nygjuten betong",
    ],
    content: [
      { type: "p", text: "En vanlig missuppfattning är att betong ”torkar”. I själva verket härdar den genom en kemisk reaktion mellan cement och vatten, och den processen tar tid. Rätt skött härdning är avgörande för att plattan ska bli stark och sprickfri." },

      { type: "h2", text: "Så lång tid tar härdningen" },
      { type: "table",
        caption: "Riktvärden – påverkas av temperatur, betongkvalitet och väder.",
        head: ["Tid", "Vad har hänt"],
        rows: [
          ["1–2 dygn", "Betongen har styvnat, ytan tål lätt gångtrafik"],
          ["3–5 dygn", "Formen kan oftast tas bort"],
          ["ca 7 dygn", "Betongen har nått en stor del av sin hållfasthet"],
          ["ca 28 dygn", "Referensvärde för full hållfasthet"],
        ],
      },
      { type: "p", text: "Tiderna är riktvärden. I kyla går härdningen långsammare, i värme snabbare. Vänta med tunga laster – till exempel att bygga stommen eller köra på plattan – tills betongen närmar sig full hållfasthet." },

      { type: "h2", text: "Fukthärdning – det viktigaste steget" },
      { type: "p", text: "Betong behöver fukt för att härda. Om ytan torkar ut för snabbt stannar reaktionen och ytan blir svag och dammar. Håll därför plattan fuktig de första dygnen:" },
      { type: "ul", items: [
        "Vattna ytan 2–3 gånger om dagen i minst 3–5 dygn, eller",
        "täck med plast eller använd ett härdmembran som håller kvar fukten,",
        "skydda mot direkt sol, vind och uttorkning,",
        "skydda mot frost om det är kallt – betong får inte frysa innan den härdat.",
      ] },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Låta ytan torka ut i sol och vind – ger dammande, svag yta och sprickor.",
        "Belasta plattan för tidigt.",
        "Ta bort formen för tidigt så kanterna skadas.",
        "Gjuta i frost utan skydd.",
      ] },

      { type: "h2", text: "Vill du vara säker?" },
      { type: "p", text: "Vi sköter gjutning och härdning fackmässigt så att plattan får rätt förutsättningar från start. Se även vår guide om att [gjuta platta på mark](/blogg/gjuta-platta-pa-mark-steg-for-steg). Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Hur länge ska betong härda?", a: "Betong når en stor del av sin hållfasthet efter cirka 7 dygn och full referenshållfasthet efter ungefär 28 dygn. Formen kan ofta tas bort efter 3–5 dygn, men vänta med tunga laster tills betongen härdat klart." },
      { q: "När kan man gå på nygjuten betong?", a: "Ytan tål oftast lätt gångtrafik efter ett till två dygn, beroende på temperatur. Tyngre laster bör vänta betydligt längre, tills betongen närmar sig full hållfasthet." },
      { q: "Måste man vattna nygjuten betong?", a: "Ja, betong behöver fukt för att härda. Håll ytan fuktig genom att vattna 2–3 gånger om dagen i minst 3–5 dygn, eller täck med plast eller härdmembran, så att den inte torkar ut för snabbt." },
      { q: "Torkar eller härdar betong?", a: "Betong härdar genom en kemisk reaktion mellan cement och vatten – den torkar alltså inte, den behöver tvärtom hållas fuktig. Torkar ytan ut för tidigt blir betongen svag." },
    ],
  },
  {
    slug: "gjuta-betong-vinter",
    title: "Gjuta betong på vintern – så gör du i kyla",
    metaTitle: "Gjuta betong på vintern | Gjuta i kyla & frost 2026",
    metaDescription:
      "Går det att gjuta betong på vintern? Guide om att gjuta i kyla – risker med frost, åtgärder som täckning och värme, och när du bör vänta med gjutningen.",
    excerpt:
      "Kyla och frost är betongens fiender under härdningen. Här går vi igenom hur du gjuter på vintern utan att plattan förstörs – och när det är bättre att vänta.",
    date: "2026-08-31",
    readingMinutes: 5,
    keywords: [
      "gjuta betong vinter",
      "gjuta i kyla",
      "gjuta betong minusgrader",
      "gjuta betong frost",
    ],
    content: [
      { type: "p", text: "Betong kan gjutas på vintern, men det kräver planering. Den stora risken är att betongen fryser innan den härdat tillräckligt – då förstörs hållfastheten och plattan kan bli obrukbar. Här är vad du behöver tänka på." },

      { type: "h2", text: "Varför är kyla ett problem?" },
      { type: "p", text: "Härdningen är en kemisk reaktion som går långsammare ju kallare det är, och avstannar nära noll grader. Fryser vattnet i den färska betongen innan den nått tillräcklig hållfasthet, spränger iskristallerna sönder strukturen inifrån. Betongen får då aldrig full styrka." },

      { type: "h2", text: "Åtgärder vid vintergjutning" },
      { type: "ul", items: [
        "Undvik att gjuta på tjälad mark – marken måste vara tjälfri.",
        "Använd betong anpassad för kyla, eventuellt med accelererande tillsats som snabbar på härdningen.",
        "Täck plattan med presenning och isoleringsmattor som håller kvar värmen.",
        "Vid sträng kyla kan värmekablar eller byggvärmare behövas.",
        "Kontrollera att betongen inte fryser de första kritiska dygnen.",
      ] },
      { type: "p", text: "Som tumregel bör man vara extra försiktig när temperaturen går under +5 °C, och vidta aktiva åtgärder vid minusgrader." },

      { type: "h2", text: "När bör du vänta?" },
      { type: "p", text: "Vid ihållande sträng kyla, snö och tjäle är det ofta klokare att vänta med gjutningen till mildare väder – kvaliteten blir säkrare och kostnaden för uppvärmning och täckning undviks. En entreprenör kan bedöma om förutsättningarna är rätt." },

      { type: "h2", text: "Vi gjuter året runt – rätt utfört" },
      { type: "p", text: "Vi bedömer väder och mark och gjuter med rätt åtgärder så att plattan håller, även vintertid, i hela Stockholm. Se även vår guide om [härdningstid](/blogg/harda-betong-tid). Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Går det att gjuta betong på vintern?", a: "Ja, men det kräver åtgärder. Betongen får inte frysa innan den härdat tillräckligt. Med anpassad betong, täckning, isolering och eventuell uppvärmning går det att gjuta även i kyla." },
      { q: "Vid vilken temperatur ska man inte gjuta betong?", a: "Var extra försiktig under +5 °C och vidta aktiva åtgärder vid minusgrader. Gjut aldrig på tjälad mark. Vid sträng, ihållande kyla är det ofta bättre att vänta." },
      { q: "Vad händer om betongen fryser?", a: "Fryser vattnet i den färska betongen innan den härdat spränger iskristallerna sönder strukturen inifrån, och betongen når aldrig full hållfasthet. Plattan kan då bli obrukbar." },
      { q: "Hur skyddar man betong mot kyla?", a: "Genom att täcka med presenning och isoleringsmattor, använda betong anpassad för kyla, och vid behov värmekablar eller byggvärmare, samt se till att marken är tjälfri innan gjutning." },
    ],
  },
  {
    slug: "platta-pa-mark-eller-krypgrund",
    title: "Platta på mark eller krypgrund – vad ska du välja?",
    metaTitle: "Platta på mark eller krypgrund? Jämförelse | Guide 2026",
    metaDescription:
      "Platta på mark eller krypgrund? Vi jämför de två grundtyperna – fördelar, nackdelar, fuktrisk, kostnad och när respektive grund passar bäst.",
    excerpt:
      "Platta på mark och krypgrund är de vanligaste grundtyperna för hus i Sverige. Här jämför vi dem så att du kan välja rätt grund för ditt projekt.",
    date: "2026-08-31",
    readingMinutes: 6,
    keywords: [
      "platta på mark eller krypgrund",
      "krypgrund eller platta",
      "grundtyp hus",
      "bästa grunden",
    ],
    content: [
      { type: "p", text: "När du ska bygga hus, tillbyggnad eller attefallshus är valet av grund ett av de viktigaste besluten. De två vanligaste grundtyperna är platta på mark och krypgrund. Här jämför vi dem." },

      { type: "h2", text: "Platta på mark" },
      { type: "p", text: "En platta på mark är en isolerad betongplatta som gjuts direkt på marken, utan luftspalt under. Det är idag den vanligaste grunden vid nybyggnation." },
      { type: "ul", items: [
        "Fördelar: tät och fuktsäker vid rätt utförande, passar utmärkt för golvvärme, ger ett stabilt golv utan svikt, ofta enklare och billigare på plan mark.",
        "Nackdelar: installationer gjuts in och är svåra att komma åt i efterhand, kräver plan mark eller mer schakt på sluttande tomt.",
      ] },

      { type: "h2", text: "Krypgrund" },
      { type: "p", text: "En krypgrund innebär att golvet vilar på grundmurar med ett kryputrymme under, dit man kan komma åt installationer. Den kan vara uteluftsventilerad eller inneluftsventilerad/varmgrund." },
      { type: "ul", items: [
        "Fördelar: lätt att komma åt rör och el, passar bra på sluttande eller ojämn tomt, mindre schakt.",
        "Nackdelar: uteluftsventilerade krypgrunder har historiskt haft fukt- och mögelproblem och kräver rätt utförande och ibland avfuktare.",
      ] },

      { type: "h2", text: "Snabb jämförelse" },
      { type: "table",
        head: ["Egenskap", "Platta på mark", "Krypgrund"],
        rows: [
          ["Golvvärme", "Passar mycket bra", "Går att lösa"],
          ["Åtkomst till rör", "Svår (ingjutet)", "Lätt (kryputrymme)"],
          ["Sluttande tomt", "Mer schakt", "Passar bra"],
          ["Fuktrisk", "Låg vid rätt utförande", "Kräver rätt ventilation/kontroll"],
        ],
      },

      { type: "h2", text: "Vilken ska du välja?" },
      { type: "p", text: "På plan mark och för hus med golvvärme är platta på mark ofta det enklaste och tryggaste valet. På sluttande tomt eller där du vill nå installationer kan krypgrund passa bättre. Markförhållandena avgör mycket – låt en fackman bedöma din tomt." },

      { type: "h2", text: "Vi hjälper dig välja och gjuta" },
      { type: "p", text: "Vi bygger både plattor på mark och grunder i hela Stockholm och hjälper dig välja rätt utifrån din tomt. Läs mer i vår guide om att [gjuta platta på mark](/blogg/gjuta-platta-pa-mark-steg-for-steg). Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Vad är skillnaden på platta på mark och krypgrund?", a: "Platta på mark är en isolerad betongplatta gjuten direkt på marken utan luftspalt, medan en krypgrund har ett ventilerat kryputrymme mellan mark och golv. Platta på mark ger ett tätt golv med golvvärme, krypgrund ger åtkomst till installationer." },
      { q: "Vilken grund är bäst?", a: "Det beror på tomt och behov. På plan mark och med golvvärme är platta på mark ofta enklast och tryggast. På sluttande tomt eller där du vill nå rör och el kan krypgrund passa bättre." },
      { q: "Är platta på mark fuktsäkert?", a: "Ja, vid rätt utförande med kapillärbrytande lager, dränering och isolering är platta på mark en fuktsäker grund. Det är just uteluftsventilerade krypgrunder som historiskt haft större fuktrisk." },
      { q: "Kan man ha golvvärme i båda grundtyperna?", a: "Golvvärme passar särskilt bra i platta på mark, där rören gjuts in i plattan. Det går även att lösa i krypgrund, men platta på mark är den vanligaste lösningen för vattenburen golvvärme." },
    ],
  },
  {
    slug: "gjuta-platta-garage",
    title: "Gjuta betongplatta till garage – komplett guide",
    metaTitle: "Gjuta platta till garage | Guide, tjocklek & pris 2026",
    metaDescription:
      "Ska du gjuta en betongplatta till garaget? Guide om garageplatta – tjocklek, armering, fall mot port, avlopp, isolering och vad det kostar.",
    excerpt:
      "En garageplatta ska tåla bilars vikt och gärna ha fall mot porten. Så gjuter du en stabil betongplatta till garaget – tjocklek, armering och kostnad.",
    date: "2026-08-31",
    readingMinutes: 6,
    keywords: [
      "gjuta platta garage",
      "gjuta betongplatta garage",
      "garageplatta",
      "gjuta platta till garage pris",
    ],
    content: [
      { type: "p", text: "En garageplatta ska bära bilars vikt, tåla fukt och smältvatten och gärna ha ett fall så att vatten rinner ut mot porten eller till en brunn. Här går vi igenom hur du gjuter en garageplatta som håller." },

      { type: "h2", text: "Tjocklek och armering" },
      { type: "p", text: "En garageplatta görs vanligtvis 100–120 mm tjock med förstyvade kanter. Den armeras med armeringsnät (ofta Ø6 mm, 150 mm rutor) och förstärks med kamjärn i kanterna. Ska tunga fordon parkeras kan plattan behöva göras kraftigare. Se våra guider om [betongplattans tjocklek](/blogg/betongplatta-tjocklek) och [armering till betongplatta](/blogg/armering-till-betongplatta)." },

      { type: "h2", text: "Uppbyggnad steg för steg" },
      { type: "ol", items: [
        "Schakta ur och lägg ett packat bärlager av makadam.",
        "Lägg kapillärbrytande lager och dränering.",
        "Lägg eventuell isolering om garaget ska värmas.",
        "Sätt form och lägg armeringsnät på distanser, med kantförstärkning.",
        "Gjut med ett fall mot port eller golvbrunn (ca 1:100).",
        "Dra av plant, glätta (ofta stålslipad yta) och härda plattan.",
      ] },

      { type: "h2", text: "Fall, brunn och avlopp" },
      { type: "p", text: "För att smältvatten och tvättvatten ska rinna undan byggs ett litet fall in i plattan, mot porten eller mot en golvbrunn. Ska du ha golvbrunn måste avlopp dras innan gjutning. Tänk också på eventuella krav på oljeavskiljare beroende på användning." },

      { type: "h2", text: "Isolerad eller oisolerad?" },
      { type: "p", text: "Ett kallgarage kan ha en oisolerad platta, medan ett uppvärmt garage eller en verkstad bör isoleras med cellplast och kan förberedas för golvvärme. Valet påverkar både komfort och kostnad." },

      { type: "h2", text: "Vad kostar en garageplatta?" },
      { type: "p", text: "Som riktvärde ligger en oisolerad garageplatta ofta runt 1 500–2 500 kr/m², medan en isolerad platta blir dyrare. För ett normalstort garage på 30–40 m² handlar det om storleksordningen 45 000–100 000 kr beroende på utförande. Vi lämnar fast pris efter platsbesök, och ROT-avdrag kan gälla vid befintlig fastighet." },

      { type: "h2", text: "Vi gjuter garageplattan åt dig" },
      { type: "p", text: "Vi gjuter garageplattor i hela Stockholm – med rätt tjocklek, armering och fall. Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Hur tjock ska en garageplatta vara?", a: "En garageplatta är oftast 100–120 mm tjock med förstyvade kanter, så att den tål bilars vikt. Ska tyngre fordon parkeras kan den behöva göras kraftigare." },
      { q: "Vilken armering behövs till en garageplatta?", a: "Garageplattan armeras vanligtvis med armeringsnät (ofta Ø6 mm, 150 mm rutor) och förstärks med kamjärn i kanterna. Exakt armering ska dimensioneras efter last och mark." },
      { q: "Behöver en garageplatta fall?", a: "Ja, ett litet fall (ca 1:100) mot porten eller mot en golvbrunn gör att smält- och tvättvatten rinner undan. Ska du ha golvbrunn måste avloppet dras innan gjutning." },
      { q: "Vad kostar det att gjuta en garageplatta?", a: "En oisolerad garageplatta ligger ofta runt 1 500–2 500 kr/m², isolerad blir dyrare. För ett garage på 30–40 m² handlar det om cirka 45 000–100 000 kr beroende på utförande. Fast pris lämnas efter platsbesök." },
    ],
  },
  {
    slug: "armering-atgang-per-m2",
    title: "Hur mycket armering går åt per m²?",
    metaTitle: "Armeringsåtgång per m² | Räkna armering till platta 2026",
    metaDescription:
      "Hur mycket armering går åt per kvadratmeter? Räkna ut åtgång av armeringsnät och kamjärn till betongplattan – med spill, överlapp och exempel.",
    excerpt:
      "Ska du beställa armering behöver du veta åtgången. Här visar vi hur du räknar ut hur mycket armeringsnät och kamjärn som går åt till plattan.",
    date: "2026-08-31",
    readingMinutes: 4,
    keywords: [
      "armering åtgång",
      "armering per m2",
      "hur mycket armeringsnät",
      "räkna armering platta",
    ],
    content: [
      { type: "p", text: "Innan du beställer armering vill du veta ungefär hur mycket som går åt. Här är enkla tumregler för armeringsnät och kamjärn – exakt mängd ska alltid följa konstruktionsritning." },

      { type: "h2", text: "Armeringsnät" },
      { type: "p", text: "Åtgången av nät motsvarar plattans yta plus spill för överlapp. Eftersom skarvar ska överlappa 1,5–2 rutor räknar man normalt med cirka 10–15 % extra utöver kvadratmeterytan. En platta på 40 m² kräver alltså ungefär 44–46 m² nät." },
      { type: "table",
        caption: "Riktvärde för nätåtgång inkl. överlapp och spill.",
        head: ["Plattans yta", "Nät att beställa (ca)"],
        rows: [
          ["20 m²", "22–23 m²"],
          ["40 m²", "44–46 m²"],
          ["100 m²", "110–115 m²"],
        ],
      },

      { type: "h2", text: "Kamjärn (armeringsjärn)" },
      { type: "p", text: "Lösa kamjärn till kanter och kantbalkar beräknas efter plattans omkrets och antal järn per kantbalk. Exempel: en platta på 6 × 8 m har en omkrets på 28 m. Med två kamjärn runt om går det åt cirka 56 löpmeter, plus järn för skarvöverlapp och eventuella förstärkningar under bärande väggar." },

      { type: "h2", text: "Glöm inte tillbehör" },
      { type: "ul", items: [
        "Distanser (”stolar”/klossar) för att lyfta armeringen – flera per m².",
        "Bindtråd för att binda ihop nät och järn.",
        "Extra järn för hörn, kantbalkar och genomföringar.",
      ] },

      { type: "h2", text: "Vi räknar exakt åt dig" },
      { type: "p", text: "Vi beräknar och lägger armeringen som en del av gjutningen i hela Stockholm. Se även våra guider om [armering till betongplatta](/blogg/armering-till-betongplatta) och [armeringsnät](/blogg/armeringsnat-storlekar-och-matt). Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Hur mycket armeringsnät går åt per m²?", a: "Räkna med plattans yta plus cirka 10–15 % extra för överlapp och spill. En platta på 40 m² kräver alltså ungefär 44–46 m² armeringsnät." },
      { q: "Hur räknar man ut åtgången av kamjärn?", a: "Kamjärn till kanter beräknas efter plattans omkrets gånger antal järn per kantbalk, plus överlapp i skarvar och förstärkningar. En platta på 6 × 8 m har 28 m omkrets, vilket med två järn runt om ger cirka 56 löpmeter." },
      { q: "Hur mycket ska man räkna med för spill?", a: "För armeringsnät räknar man normalt med 10–15 % extra utöver plattans yta, eftersom skarvar ska överlappa 1,5–2 rutor och nät kapas till." },
    ],
  },
  {
    slug: "distanser-tackskikt-armering",
    title: "Distanser och täckskikt – så placeras armeringen rätt",
    metaTitle: "Distanser & täckskikt armering | Rätt placering 2026",
    metaDescription:
      "Vad är täckskikt och varför behövs distanser till armeringen? Guide om hur du lyfter armeringen till rätt höjd och får rätt betongtäckning så stålet inte rostar.",
    excerpt:
      "Armeringen måste ligga inne i betongen med rätt täckskikt – annars rostar den. Här förklarar vi distanser, täckskikt och hur armeringen placeras rätt.",
    date: "2026-08-31",
    readingMinutes: 4,
    keywords: [
      "täckskikt armering",
      "distanser armering",
      "armering placering",
      "betongtäckning armering",
    ],
    content: [
      { type: "p", text: "Det räcker inte att lägga i armering – den måste ligga på rätt ställe i betongen. Två begrepp är centrala: täckskikt och distanser. Rätt utfört skyddar det armeringen och ger plattan sin styrka." },

      { type: "h2", text: "Vad är täckskikt?" },
      { type: "p", text: "Täckskiktet är betongen mellan armeringen och betongytan. Det skyddar stålet mot fukt, luft och korrosion. Är täckskiktet för litet rostar armeringen, och rosten spränger loss betongen (spjälkning). För platta på mark används ofta minst 25–35 mm täckskikt, mer i fuktig eller aggressiv miljö som pooler." },

      { type: "h2", text: "Vad gör distanser?" },
      { type: "p", text: "Distanser – även kallade ”stolar”, klossar eller listor – lyfter armeringen från underlaget så att den hamnar på rätt höjd med rätt täckskikt. Utan distanser sjunker nät och järn ner mot botten och hamnar utanför den bärande delen av plattan." },
      { type: "ul", items: [
        "Placera distanser tätt nog att armeringen inte sviktar när man går på den – ofta med under en meters mellanrum.",
        "Välj distanshöjd efter önskat täckskikt och armeringens läge i plattan.",
        "Använd distanser av rätt typ mot underlaget så de inte trycker igenom.",
      ] },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Armering som ligger direkt på marken eller isoleringen – noll täckskikt underifrån.",
        "För få distanser så nätet sviktar ner vid gjutning.",
        "För litet täckskikt i fuktig miljö – armeringen rostar.",
      ] },

      { type: "h2", text: "Vi ser till att det blir rätt" },
      { type: "p", text: "Rätt täckskikt och placering är skillnaden mellan en platta som håller i generationer och en som spricker. Vi lägger armeringen fackmässigt vid varje gjutning i Stockholm. Se även vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta). Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Vad är täckskikt på armering?", a: "Täckskiktet är betonglagret mellan armeringen och ytan. Det skyddar stålet mot fukt och korrosion. För platta på mark används ofta minst 25–35 mm, och mer i fuktig miljö som pooler." },
      { q: "Varför behövs distanser till armeringen?", a: "Distanser lyfter armeringen från underlaget så att den hamnar på rätt höjd inne i betongen med rätt täckskikt. Utan distanser sjunker armeringen ner mot botten och förlorar sin funktion." },
      { q: "Vad händer om täckskiktet är för litet?", a: "Då kan armeringen rosta, och rosten spränger loss betongen (spjälkning). Det försämrar hållfastheten och kan skada plattan över tid." },
      { q: "Hur tätt ska distanser sitta?", a: "Distanserna ska sitta tätt nog att armeringen inte sviktar ner när man går på den under gjutning, ofta med under en meters mellanrum, men det beror på nätets styvhet." },
    ],
  },
  {
    slug: "klippt-bockad-armering",
    title: "Klippt och bockad armering – vad är det?",
    metaTitle: "Klippt & bockad armering | Vad det är & fördelar 2026",
    metaDescription:
      "Vad betyder klippt och bockad armering? Guide om färdigkapad och bockad armering – hur det fungerar, fördelarna och när det passar ditt projekt.",
    excerpt:
      "Klippt och bockad armering levereras färdigkapad och böjd efter ritning. Här förklarar vi vad det är, hur det beställs och när det lönar sig.",
    date: "2026-08-31",
    readingMinutes: 4,
    keywords: [
      "klippt och bockad armering",
      "bockad armering",
      "kapad armering",
      "bockningslista armering",
    ],
    content: [
      { type: "p", text: "”Klippt och bockad” armering betyder att armeringsjärnen levereras färdigkapade och böjda till rätt form – redo att läggas på plats. I stället för att kapa och bocka på bygget beställs armeringen efter en bockningslista." },

      { type: "h2", text: "Så fungerar det" },
      { type: "p", text: "Utifrån konstruktionsritningen tas en bockningslista fram som anger varje järns dimension, längd, form och antal. Armeringsverkstaden kapar och bockar järnen enligt listan, och de levereras märkta och sorterade till bygget. Kantbyglar, kramlor och förstärkningsjärn är exempel på detaljer som ofta beställs bockade." },

      { type: "h2", text: "Fördelar" },
      { type: "ul", items: [
        "Sparar tid – ingen kapning och bockning på plats.",
        "Rätt mått och form enligt ritning, mindre risk för fel.",
        "Mindre spill jämfört med att kapa på bygget.",
        "Renare och säkrare arbetsplats.",
      ] },

      { type: "h2", text: "När passar det?" },
      { type: "p", text: "Klippt och bockad armering passar särskilt när det finns många likadana detaljer, komplicerade former eller när tiden på bygget är knapp. För enklare plattor med mest nät kan lösa järn och kapning på plats räcka. Ofta blir det en kombination." },

      { type: "h2", text: "Vi sköter hela armeringen" },
      { type: "p", text: "Vi tar fram rätt armering – nät, lösa järn och bockade detaljer – och lägger den enligt ritning vid gjutning i hela Stockholm. Se även våra guider om [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner) och [armering till betongplatta](/blogg/armering-till-betongplatta). Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Vad betyder klippt och bockad armering?", a: "Det betyder att armeringsjärnen levereras färdigkapade och böjda till rätt form enligt en bockningslista, redo att läggas på plats utan att kapas eller bockas på bygget." },
      { q: "Vad är en bockningslista?", a: "En bockningslista är en specifikation, framtagen ur konstruktionsritningen, som anger varje armeringsjärns dimension, längd, form och antal. Armeringsverkstaden tillverkar järnen efter listan." },
      { q: "Vilka är fördelarna med bockad armering?", a: "Den sparar tid på bygget, ger rätt mått och form enligt ritning, minskar spill och ger en renare arbetsplats jämfört med att kapa och bocka järnen på plats." },
      { q: "När ska man välja klippt och bockad armering?", a: "Det passar särskilt vid många likadana eller komplicerade detaljer och när tiden är knapp. För enklare plattor med mest nät kan lösa järn räcka – ofta blir det en kombination." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
