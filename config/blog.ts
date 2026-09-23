/**
 * Guider/artiklar för SEO. Varje post blir /blogg/[slug].
 * content = array av block (paragraf, underrubrik, lista eller tabell).
 *
 * Fokus: armering-klustret – prefab, klippt & bockad, nät, kamstål, distanser.
 */

import type { Faq } from "@/config/faq";
import type { FigureKey } from "@/components/illustrations";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "figure"; illustration: FigureKey; caption?: string };

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
    slug: "armering-till-betongplatta",
    title: "Armering till betongplatta – vilken typ och hur mycket?",
    metaTitle: "Armering betongplatta – typ & mängd",
    metaDescription:
      "Vilken armering behöver du till en betongplatta och hur mycket går det åt? Guide om armeringsnät, kamjärn, dimensioner, täckskikt, överlapp och åtgång per m².",
    excerpt:
      "Rätt armering håller ihop betongplattan och tar upp dragkrafterna som betongen själv inte klarar. Här går vi igenom vilken armering du behöver, hur mycket som går åt och hur den placeras rätt.",
    date: "2026-08-31",
    updated: "2026-09-23",
    readingMinutes: 8,
    keywords: [
      "armera betongplatta",
      "armering av platta på mark",
      "armering grundplatta",
      "armeringsnät platta på mark",
      "armeringsritning platta på mark",
      "armera grund",
      "platta på mark armering",
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
      { type: "p", text: "Kantbalken armeras med längsgående kantjärn och byglar – läs mer i [kantbalksbygel](/blogg/kantbalksbygel). Skarvlängder och nätets överlapp hittar du i [skarvlängd och överlapp](/blogg/skarvlangd-armering)." },
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
        "Överlappa nätskarvar med minst två rutor (ca 300–400 mm för 150-nät) och bind ihop dem. Se [skarvlängd och överlapp](/blogg/skarvlangd-armering).",
        "Håll ett täckskikt av betong runt all armering – ofta minst 25–35 mm mot cellplast eller form – mot makadam minst 40 mm och direkt mot jord minst 75 mm (Eurokod 2). Annars rostar stålet.",
        "Förstärk kanter och hörn med extra kamjärn där lasterna koncentreras.",
      ] },

      { type: "h2", text: "Köpa själv eller beställa prefab?" },
      { type: "p", text: "Armering går att köpa styckvis, men rätt dimensionering, kapning, bockning och placering är avgörande för att plattan ska hålla. Vi tillverkar prefab armering efter din bockningslista eller ritning – [klippt och bockad armering](/produkter/klippt-och-bockad), [svetsad armering och nät](/produkter/svetsad-armering) och [armeringskorgar](/produkter/armeringskorgar) – och levererar i hela Sverige. Begär en kostnadsfri offert så tar vi fram rätt armering till din platta." },
      { type: "p", text: "Vi levererar armering till betongplattor i hela landet – från [Stockholm](/armering/stockholm) i öster till [Göteborg](/armering/goteborg) i väster och orterna däremellan." },
    ],
    faqs: [
      { q: "Behöver jag en armeringsritning till platta på mark?", a: "För en husgrund ska armeringen följa konstruktörens ritning. Den anger nät, kantjärn, kantbalksbyglar, täckskikt och skarvlängder. Har du ritningen tar vi fram bockningslistan åt dig." },
      { q: "Vilken armering behövs till en betongplatta?", a: "Till platta på mark används oftast svetsat armeringsnät (Ø5–6 mm, 150 mm rutor) som huvudarmering, kompletterat med lösa kamjärn (Ø10–12 mm) i kanter och under bärande väggar. Exakt val ska följa konstruktionsritning." },
      { q: "Hur mycket armeringsnät går åt per kvadratmeter?", a: "Räkna med cirka plattans yta plus 10–15 % extra för överlapp mellan näten. Nät levereras i standardformat, t.ex. 2,0 × 5,0 m, så en del spill uppstår vid kapning." },
      { q: "Hur mycket ska armeringsnät överlappa?", a: "Vanlig praxis är att näten överlappar minst två rutor – för 150-nät cirka 300–400 mm – och binds ihop så att de ligger stilla under gjutningen. Ritningen gäller." },
      { q: "Var i plattan ska armeringen ligga?", a: "Armeringen ska ligga inne i betongen på distanser, inte mot underlaget. I en platta på mark placeras huvudarmeringen vanligtvis i nedre tredjedelen, med tillräcklig betongtäckning runt stålet – ofta minst 25–35 mm mot cellplast eller form – mot makadam minst 40 mm och direkt mot jord minst 75 mm (Eurokod 2)." },
      { q: "Behöver en liten platta armering?", a: "Ja, även en mindre platta bör armeras med ett nät för att fördela laster och begränsa sprickor. Undantag kan finnas för mycket små, olastade ytor, men för garage, uterum och husgrund krävs armering enligt ritning." },
    ],
  },
  {
    slug: "armeringsnat-storlekar-och-matt",
    title: "Armeringsnät – storlekar, mått och rätt val till plattan",
    metaTitle: "Armeringsnät – storlekar & mått",
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
      { type: "p", text: "Näten säljs oftast i standardformat, till exempel omkring 2,0 × 5,0 m, men även andra format förekommer. Behöver du andra mått tillverkar vi specialnät efter ritning. Vid beställning räknar man ytan plus spill för överlapp." },

      { type: "h2", text: "Vilket nät till vad?" },
      { type: "ul", items: [
        "Uterum och mindre plattor: ofta Ø5 mm, 150 mm rutor.",
        "Garage- och villaplatta: vanligen Ø6 mm, 150 mm rutor.",
        "Kraftiga eller hårt belastade plattor: grövre tråd och/eller dubbla nätlager enligt ritning.",
      ] },

      { type: "h2", text: "Överlapp och placering" },
      { type: "p", text: "Skarvar mellan nät ska överlappa minst två rutor (ca 300–400 mm för 150-nät) och bindas ihop – se [skarvlängd och överlapp](/blogg/skarvlangd-armering). Nätet läggs på distanser så att det hamnar inne i betongen med tillräckligt täckskikt (ofta minst 25–35 mm mot cellplast eller form – mot makadam minst 40 mm och direkt mot jord minst 75 mm (Eurokod 2)). Läs mer i vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta)." },

      { type: "figure", illustration: "mesh-overlap", caption: "Två armeringsnät skarvas med överlapp på ca 300–400 mm (minst två rutor) som binds ihop." },

      { type: "h2", text: "Osäker på valet?" },
      { type: "p", text: "Vill du inte räkna själv? Vi tillverkar [svetsad armering och specialnät](/produkter/svetsad-armering) efter dina mått och levererar i hela Sverige. Begär en kostnadsfri offert." },
      { type: "p", text: "Behöver du nät på annan ort? Vi skickar armeringsnät bland annat till [Malmö](/armering/malmo) och [Uppsala](/armering/uppsala) – och resten av landet." },
    ],
    faqs: [
      { q: "Vad betyder 5x150 på ett armeringsnät?", a: "Det betyder att nätet har Ø5 mm tråd med 150 mm mellan trådarna, alltså 150 mm rutor. Första siffran är trådens diameter i mm, andra är rutstorleken." },
      { q: "Vilket armeringsnät ska jag ha till en garageplatta?", a: "Till en garageplatta används vanligtvis nät med Ø6 mm tråd och 150 mm rutor, ofta kompletterat med extra kamjärn i kanterna. Exakt val beror på laster och ska följa konstruktionsritning." },
      { q: "Vilka mått har ett armeringsnät?", a: "Näten säljs i standardformat, ett vanligt format är omkring 2,0 × 5,0 m, men storleken varierar mellan leverantörer. Behöver du andra mått går det att tillverka specialnät efter ritning." },
      { q: "Hur mycket ska armeringsnät överlappa?", a: "Vanlig praxis är minst två rutor – för 150-nät cirka 300–400 mm – och skarvarna binds ihop så att näten ligger stilla vid gjutning. Ritningen gäller." },
    ],
  },
  {
    slug: "armeringsjarn-dimensioner",
    title: "Armeringsjärn – dimensioner och när du använder vad",
    metaTitle: "Armeringsjärn dimensioner – vilken till vad",
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
      { type: "p", text: "Armeringsjärn – även kallat kamstål eller armeringsstål – är räfflade stålstänger som gjuts in i betong för att ta upp dragkrafter. Kammarna (räfflorna) gör att stålet biter fast i betongen. I Sverige används normalt kvaliteten B500B. Här går vi igenom dimensionerna och när du använder vilken. Om själva stålet – B500B, K500C-T, vikt per meter och längder – läser du i [armeringsstål](/blogg/armeringsstal)." },

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

      { type: "figure", illustration: "rebar-diameters", caption: "Armeringsjärn i kamstål B500B – dimensioner Ø6–Ø32 mm i skala." },

      { type: "h2", text: "Kamjärn eller armeringsnät?" },
      { type: "p", text: "I en platta på mark kombineras oftast båda: armeringsnät ger jämn armering över hela ytan, medan lösa armeringsjärn förstärker kanter, kantbalkar och punkter med stora laster. Under bärande väggar läggs extra järn för att fördela lasten. Se vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta) för helheten." },

      { type: "h2", text: "Kapning och bockning" },
      { type: "p", text: "Kamjärn kapas och bockas efter konstruktionsritningen. Bockade byglar och kantjärn ger rätt form på armeringen i kanter och hörn. Fel kapning eller bockning försämrar bärförmågan, så måtten ska följas noga. Beställer du [klippt och bockad armering](/produkter/klippt-och-bockad) levereras järnen färdiga efter bockningslistan." },

      { type: "h2", text: "Beställ rätt kamstål" },
      { type: "p", text: "Rätt dimension, placering och täckskikt avgör om plattan håller. Vi levererar [armeringsjärn i kamstål B500B](/produkter/armeringsjarn) och tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad) efter din ritning – i hela Sverige. Begär en kostnadsfri offert så gör vi det rätt från början." },
      { type: "p", text: "Vi levererar kamstål i alla dimensioner till bygg- och anläggningsprojekt i bland annat [Västerås](/armering/vasteras) och [Örebro](/armering/orebro)." },
    ],
    faqs: [
      { q: "Vilka dimensioner finns på armeringsjärn?", a: "Armeringsjärn (kamstål) finns vanligtvis i dimensioner 6, 8, 10, 12, 16, 20, 25 och 32 mm. Till platta på mark och husgrund används oftast 8–12 mm i kanter och kantbalkar." },
      { q: "Vilken dimension på armeringsjärn till en betongplatta?", a: "I kanter och kantbalkar på en villaplatta används ofta 10–12 mm kamjärn, medan själva ytan armeras med nät. Exakt dimension beror på laster och ska följa konstruktionsritning." },
      { q: "Vad är skillnaden på kamstål och armeringsnät?", a: "Kamstål (armeringsjärn) är lösa räfflade stänger som förstärker punktvis, medan armeringsnät är ett svetsat rutnät som ger jämn armering över hela ytan. I en platta kombineras de ofta." },
      { q: "Vilken kvalitet har armeringsjärn i Sverige?", a: "Den vanligaste kvaliteten är B500B, ett kamstål med sträckgräns 500 MPa. Kammarna gör att stålet får bra vidhäftning mot betongen." },
    ],
  },
  {
    slug: "armering-till-pool",
    title: "Armering till pool – så armeras poolens betong",
    metaTitle: "Armering till pool – botten & väggar",
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

      { type: "h2", text: "Beställ armeringen som prefab" },
      { type: "p", text: "En pool är en krävande betongkonstruktion där fel blir mycket dyra. Vi tillverkar och levererar armeringen – nät, kamjärn och [bockade detaljer](/produkter/klippt-och-bockad) – efter konstruktörens ritning, i hela Sverige. Läs mer om [armering till betongplatta](/blogg/armering-till-betongplatta) för grunderna, och begär en offert för ditt poolprojekt." },
      { type: "p", text: "Bygger du pool i [Helsingborg](/armering/helsingborg), [Linköping](/armering/linkoping) eller på annan ort levererar vi poolarmeringen dit." },
    ],
    faqs: [
      { q: "Hur armeras en betongpool?", a: "Både bottenplattan och väggarna armeras, ofta med en kombination av armeringsnät och lösa kamjärn (vanligtvis Ø8–12 mm). Hörn och genomföringar förstärks extra. Dimensionering ska göras av en konstruktör utifrån poolens storlek och djup." },
      { q: "Vilken dimension på armering till pool?", a: "Vanligt är kamjärn i storleksordningen Ø8–12 mm i väggar och botten, men rätt dimension och centrumavstånd beror på poolens mått, djup och markförhållanden och ska alltid dimensioneras enligt konstruktionsritning." },
      { q: "Varför är täckskiktet viktigt i en pool?", a: "Eftersom poolen ständigt utsätts för fukt skyddar betongtäckskiktet armeringen mot rost. För litet täckskikt gör att stålet korroderar och betongen spjälkar. Saltvattenpooler kräver ännu större täckskikt." },
      { q: "Kan man beställa färdig armering till pool?", a: "Ja. Utifrån konstruktörens ritning tillverkar vi klippt och bockad armering och nät till poolens botten och väggar, och levererar det färdigt till bygget." },
    ],
  },
  {
    slug: "armering-atgang-per-m2",
    title: "Hur mycket armering går åt per m²?",
    metaTitle: "Armeringsåtgång per m² – så räknar du",
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
      { type: "p", text: "Innan du beställer armering vill du veta ungefär hur mycket som går åt. Här är enkla tumregler för armeringsnät och kamjärn – exakt mängd ska alltid följa konstruktionsritning. Vill du räkna automatiskt? Använd vår [armeringskalkylator](/armeringskalkylator)." },

      { type: "h2", text: "Armeringsnät" },
      { type: "p", text: "Åtgången av nät motsvarar plattans yta plus spill för överlapp. Eftersom skarvar ska överlappa minst två rutor räknar man normalt med cirka 10–15 % extra utöver kvadratmeterytan. En platta på 40 m² kräver alltså ungefär 44–46 m² nät." },
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
      { type: "p", text: "Vi räknar fram armeringen efter din ritning och levererar [nät](/produkter/svetsad-armering), [kamjärn](/produkter/armeringsjarn) och [bockade detaljer](/produkter/klippt-och-bockad) i hela Sverige. Se även våra guider om [armering till betongplatta](/blogg/armering-till-betongplatta) och [armeringsnät](/blogg/armeringsnat-storlekar-och-matt). Begär en kostnadsfri offert." },
      { type: "p", text: "Vi räknar åtgången och levererar färdig armering till bland annat [Jönköping](/armering/jonkoping) och [Norrköping](/armering/norrkoping)." },
    ],
    faqs: [
      { q: "Hur mycket armeringsnät går åt per m²?", a: "Räkna med plattans yta plus cirka 10–15 % extra för överlapp och spill. En platta på 40 m² kräver alltså ungefär 44–46 m² armeringsnät." },
      { q: "Hur räknar man ut åtgången av kamjärn?", a: "Kamjärn till kanter beräknas efter plattans omkrets gånger antal järn per kantbalk, plus överlapp i skarvar och förstärkningar. En platta på 6 × 8 m har 28 m omkrets, vilket med två järn runt om ger cirka 56 löpmeter." },
      { q: "Hur mycket ska man räkna med för spill?", a: "För armeringsnät räknar man normalt med 10–15 % extra utöver plattans yta, eftersom skarvar ska överlappa minst två rutor och nät kapas till." },
    ],
  },
  {
    slug: "distanser-tackskikt-armering",
    title: "Distanser och täckskikt – så placeras armeringen rätt",
    metaTitle: "Täckskikt armering – distanser & placering",
    metaDescription:
      "Vad är täckskikt och varför behövs distanser till armeringen? Guide om hur du lyfter armeringen till rätt höjd och får rätt betongtäckning så stålet inte rostar.",
    excerpt:
      "Armeringen måste ligga inne i betongen med rätt täckskikt – annars rostar den. Här förklarar vi distanser, täckskikt och hur armeringen placeras rätt.",
    date: "2026-08-31",
    updated: "2026-09-23",
    readingMinutes: 4,
    keywords: [
      "täckskikt armering betong",
      "täckskikt betong",
      "täckskikt armering",
      "distanser armering",
      "armering placering",
      "betongtäckning armering",
    ],
    content: [
      { type: "p", text: "Det räcker inte att lägga i armering – den måste ligga på rätt ställe i betongen. Två begrepp är centrala: täckskikt och distanser. Rätt utfört skyddar det armeringen och ger plattan sin styrka." },

      { type: "h2", text: "Vad är täckskikt?" },
      { type: "p", text: "Täckskiktet är betongen mellan armeringen och betongytan. Det skyddar stålet mot fukt, luft och korrosion. Är täckskiktet för litet rostar armeringen, och rosten spränger loss betongen (spjälkning). För platta på mark används ofta minst 25–35 mm mot cellplast eller form – mot makadam minst 40 mm och direkt mot jord minst 75 mm (Eurokod 2) – och mer i fuktig eller aggressiv miljö som pooler." },

      { type: "h2", text: "Vad gör distanser?" },
      { type: "p", text: "Distanser – även kallade ”stolar”, klossar eller listor – lyfter armeringen från underlaget så att den hamnar på rätt höjd med rätt täckskikt. Utan distanser sjunker nät och järn ner mot botten och hamnar utanför den bärande delen av plattan." },
      { type: "ul", items: [
        "Placera distanser tätt nog att armeringen inte sviktar när man går på den – ofta med under en meters mellanrum.",
        "Välj distanshöjd efter önskat täckskikt och armeringens läge i plattan.",
        "Använd distanser av rätt typ mot underlaget så de inte trycker igenom.",
      ] },

      { type: "figure", illustration: "cover-layer", caption: "Tvärsnitt: distanserna lyfter armeringen så att den ligger inne i betongen med rätt täckskikt – inte mot underlaget." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Armering som ligger direkt på marken eller isoleringen – noll täckskikt underifrån.",
        "För få distanser så nätet sviktar ner vid gjutning.",
        "För litet täckskikt i fuktig miljö – armeringen rostar.",
      ] },

      { type: "h2", text: "Vi levererar distanser och tillbehör" },
      { type: "p", text: "Rätt täckskikt och placering är skillnaden mellan en platta som håller i generationer och en som spricker. Vi levererar [distanser och tillbehör](/produkter/distanser) tillsammans med din armering i hela Sverige. Se även vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta). Begär en kostnadsfri offert." },
      { type: "p", text: "Vi skickar distanser och armering ända upp till [Umeå](/armering/umea) och [Sundsvall](/armering/sundsvall) – hela Sverige, även norrut." },
    ],
    faqs: [
      { q: "Hur stort täckskikt ska armering ha i betong?", a: "Det beror på exponeringsklass och konstruktionens livslängd och anges på ritningen. Gjuts betongen direkt mot jord krävs minst 75 mm enligt Eurokod 2. Distanser med rätt höjd säkrar att täckskiktet blir som ritningen anger." },
      { q: "Vad är täckskikt på armering?", a: "Täckskiktet är betonglagret mellan armeringen och ytan. Det skyddar stålet mot fukt och korrosion. För platta på mark ofta minst 25–35 mm mot cellplast eller form – mot makadam minst 40 mm och direkt mot jord minst 75 mm (Eurokod 2), och mer i fuktig miljö som pooler." },
      { q: "Varför behövs distanser till armeringen?", a: "Distanser lyfter armeringen från underlaget så att den hamnar på rätt höjd inne i betongen med rätt täckskikt. Utan distanser sjunker armeringen ner mot botten och förlorar sin funktion." },
      { q: "Vad händer om täckskiktet är för litet?", a: "Då kan armeringen rosta, och rosten spränger loss betongen (spjälkning). Det försämrar hållfastheten och kan skada plattan över tid." },
      { q: "Hur tätt ska distanser sitta?", a: "Distanserna ska sitta tätt nog att armeringen inte sviktar ner när man går på den under gjutning, ofta med under en meters mellanrum, men det beror på nätets styvhet." },
    ],
  },
  {
    slug: "klippt-bockad-armering",
    title: "Klippt och bockad armering – vad är det?",
    metaTitle: "Klippt & bockad armering – fördelar",
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

      { type: "figure", illustration: "bending-shapes", caption: "Vanliga former som bockas efter bockningslistan – från raka stänger till byglar." },

      { type: "h2", text: "Vanliga bockade detaljer" },
      { type: "table",
        caption: "Exempel på detaljer vi kapar och bockar efter bockningslista (Ø6–Ø32 mm, B500B).",
        head: ["Detalj", "Typisk användning"],
        rows: [
          ["Byglar (U-bygel C, sluten bygel N)", "Balkar, pelare och korgar – tar upp tvärkrafter"],
          ["Kramlor", "Förbinder och förankrar armering"],
          ["Kantjärn / L-form", "Kanter och hörn på plattor"],
          ["Förankringsjärn", "Förankring i anslutningar och skarvar"],
          ["Raka längder", "Huvudarmering, kapad i rätt längd"],
        ],
      },
      { type: "p", text: "Behöver du en mall att fylla i? Ladda ner vår [bockningslista-mall](/offert) och bifoga den i offertförfrågan. Vill du uppskatta mängden först kan du använda vår [armeringskalkylator](/armeringskalkylator)." },

      { type: "h2", text: "Fördelar" },
      { type: "ul", items: [
        "Sparar tid – ingen kapning och bockning på plats.",
        "Rätt mått och form enligt ritning, mindre risk för fel.",
        "Mindre spill jämfört med att kapa på bygget.",
        "Renare och säkrare arbetsplats.",
      ] },

      { type: "h2", text: "När passar det?" },
      { type: "p", text: "Klippt och bockad armering passar särskilt när det finns många likadana detaljer, komplicerade former eller när tiden på bygget är knapp. För enklare plattor med mest nät kan lösa järn och kapning på plats räcka. Ofta blir det en kombination." },

      { type: "h2", text: "Vi tillverkar din armering" },
      { type: "p", text: "Vi tar fram rätt armering – [svetsad armering och nät](/produkter/svetsad-armering), [lösa järn](/produkter/armeringsjarn) och [klippt och bockade detaljer](/produkter/klippt-och-bockad) – efter din bockningslista och levererar i hela Sverige. Se även våra guider om [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner) och [armering till betongplatta](/blogg/armering-till-betongplatta). Begär en kostnadsfri offert." },
      { type: "p", text: "Klippt och bockad armering levererar vi till byggen i bland annat [Stockholm](/armering/stockholm) och [Göteborg](/armering/goteborg)." },
    ],
    faqs: [
      { q: "Vad betyder klippt och bockad armering?", a: "Det betyder att armeringsjärnen levereras färdigkapade och böjda till rätt form enligt en bockningslista, redo att läggas på plats utan att kapas eller bockas på bygget." },
      { q: "Vad är en bockningslista?", a: "En bockningslista är en specifikation, framtagen ur konstruktionsritningen, som anger varje armeringsjärns dimension, längd, form och antal. Armeringsverkstaden tillverkar järnen efter listan." },
      { q: "Vilka är fördelarna med bockad armering?", a: "Den sparar tid på bygget, ger rätt mått och form enligt ritning, minskar spill och ger en renare arbetsplats jämfört med att kapa och bocka järnen på plats." },
      { q: "När ska man välja klippt och bockad armering?", a: "Det passar särskilt vid många likadana eller komplicerade detaljer och när tiden är knapp. För enklare plattor med mest nät kan lösa järn räcka – ofta blir det en kombination." },
    ],
  },
  {
    slug: "armeringskorgar-palarmering",
    title: "Armeringskorg – typer, beställning och prefab till pålar, pelare och balkar",
    metaTitle: "Armeringskorg – typer, beställning & prefab",
    metaDescription:
      "Vad är en armeringskorg? Typer för pålar, pelare och balkar, svetsad eller bunden, vad du anger vid beställning och varför färdiga armeringskorgar sparar tid.",
    excerpt:
      "En armeringskorg är färdigmonterad armering för ett bärande element. Här går vi igenom vad korgar är, var de används och varför prefab sparar tid på bygget.",
    date: "2026-09-05",
    updated: "2026-09-23",
    readingMinutes: 6,
    keywords: [
      "armeringskorg",
      "armeringskorgar",
      "färdiga armeringskorgar",
      "prefabricerad armering",
      "pelarkorg",
      "pålkorg",
      "pålarmering",
      "pelararmering",
      "balkkorg",
      "prefab armeringskorg",
    ],
    content: [
      { type: "p", text: "En armeringskorg är armering som är färdigmonterad till en tredimensionell korg för ett bärande element – till exempel en pelare, balk eller påle. Huvudjärn och byglar binds eller svetsas ihop i verkstad, så att korgen bara behöver lyftas på plats och gjutas in. Här går vi igenom vad korgar används till och varför de ofta prefabriceras." },

      { type: "h2", text: "Vad består en armeringskorg av?" },
      { type: "ul", items: [
        "Huvudjärn (längsgående kamstål) som tar upp huvudlasterna.",
        "Byglar som håller ihop korgen och tar upp tvärkrafter.",
        "Bygelavstånd (centrumavstånd) enligt konstruktionsritning.",
        "Rätt täckskikt runt om så att stålet skyddas i betongen.",
      ] },

      { type: "figure", illustration: "rebar-cage", caption: "En armeringskorg – huvudjärn och byglar sammanfogade till ett bärande element." },

      { type: "h2", text: "Var används armeringskorgar?" },
      { type: "table",
        caption: "Vanliga tillämpningar – utförande dimensioneras enligt ritning.",
        head: ["Element", "Typisk korg"],
        rows: [
          ["Pålar", "Cirkulär eller fyrkantig pålkorg med spiralbygel eller enkelbyglar"],
          ["Pelare", "Pelarkorg med huvudjärn i hörnen och byglar"],
          ["Balkar / kantbalkar", "Balkkorg med över- och underkantsjärn samt byglar"],
          ["Plintar och brunnar", "Korg anpassad efter form och laster"],
        ],
      },

      { type: "h2", text: "Svetsad eller bunden armeringskorg?" },
      { type: "p", text: "Korgar kan bindas med najtråd eller häftsvetsas. Svetsade korgar blir styva och lätta att lyfta, men svetsning av armering ska utföras enligt SS-EN ISO 17660 (del 2 för icke bärande häftsvetsar) och får bara användas där konstruktören tillåter det – svetsen kan påverka stålets egenskaper. Bundna korgar används där svetsning inte är tillåten. Konstruktionsritningen avgör." },

      { type: "h2", text: "Beställa färdiga armeringskorgar – det här anger du" },
      { type: "ul", items: [
        "Typ och mått – pelare, balk, påle eller plint, korgens längd och tvärsnitt (yttermått).",
        "Huvudjärn – antal, dimension och placering.",
        "Byglar – typform, dimension och bygelavstånd (c/c), se [armeringsbyglar](/blogg/armeringsbyglar).",
        "Täckskikt – så att korgen får rätt yttermått i formen.",
        "Skarvar och utstickande järn (startjärn) mot anslutande delar.",
        "Lyftpunkter och antal korgar per position.",
      ] },
      { type: "p", text: "Enklast är att skicka konstruktionsritningen eller en [bockningslista](/blogg/bockningslista-sa-gor-du) – då tar vi fram korgarna direkt efter den." },

      { type: "h2", text: "Lyft och montage" },
      { type: "p", text: "En färdig korg lyfts på plats med kran och placeras på distanser i formen eller över startjärnen. Längre korgar lyfts i flera punkter så att de inte deformeras. Vi kan också ta hand om [armeringsmontaget](/tjanster/armeringsmontage) på plats." },

      { type: "h2", text: "Därför lönar sig prefab" },
      { type: "ul", items: [
        "Kortare byggtid – korgen lyfts på plats istället för att bindas för hand på bygget.",
        "Jämnare kvalitet – rätt bygelavstånd och mått varje gång.",
        "Bättre arbetsmiljö – mindre tunga moment och böjning på plats.",
        "Mindre spill och färre fel jämfört med att tillverka på arbetsplatsen.",
      ] },

      { type: "h2", text: "Vi tillverkar dina korgar" },
      { type: "p", text: "Vi bygger [armeringskorgar](/produkter/armeringskorgar) till pålar, pelare, balkar och plintar efter din konstruktionsritning – svetsade eller bundna, märkta per position och levererade i hela Sverige. Se även vår guide om [klippt och bockad armering](/blogg/klippt-bockad-armering) och [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner). Begär en kostnadsfri offert så tar vi fram rätt korgar till ditt projekt." },
      { type: "p", text: "Vi levererar färdiga armeringskorgar till bland annat [Malmö](/armering/malmo) och [Uppsala](/armering/uppsala) – och resten av landet." },
    ],
    faqs: [
      { q: "Vad kostar en armeringskorg?", a: "Priset beror på mängden stål, antal byglar, om korgen svetsas eller binds och hur många korgar som beställs. Skicka ritningen så får du ett fast pris och leveranstid." },
      { q: "Vad är en armeringskorg?", a: "En armeringskorg är färdigmonterad armering för ett bärande element som en pelare, balk eller påle – huvudjärn och byglar sammanfogade till en korg som lyfts på plats och gjuts in." },
      { q: "Vad är pålarmering?", a: "Pålarmering är armeringskorgen som gjuts in i en betongpåle, oftast med längsgående huvudjärn och spiral- eller enkelbyglar. Utförandet dimensioneras efter pålens laster och längd enligt ritning." },
      { q: "Är armeringskorgar svetsade eller bundna?", a: "Båda förekommer. Svetsade korgar blir styva och lätta att hantera, medan bundna korgar används där svetsning inte är tillåten. Konstruktören avgör." },
      { q: "Kan ni tillverka korgar efter vår ritning?", a: "Ja, vi bygger korgarna efter er konstruktionsritning med rätt huvudjärn, byglar, bygelavstånd och täckskikt, och märker varje korg med position för montage." },
    ],
  },
  {
    slug: "bestalla-armering",
    title: "Beställa armering – så går det till steg för steg",
    metaTitle: "Beställa armering – steg för steg",
    metaDescription:
      "Så beställer du armering – från bockningslista och ritning till offert och leverans. Guide om vad en armeringsleverantör behöver, vad som påverkar priset och hur du får rätt armering.",
    excerpt:
      "Ska du beställa armering till ett bygge? Här går vi igenom steg för steg vad som behövs, vad leverantören behöver veta och hur du får en offert snabbt.",
    date: "2026-09-05",
    updated: "2026-09-23",
    readingMinutes: 5,
    keywords: [
      "köp armeringsjärn",
      "armering leverans",
      "beställa armering online",
      "beställa armering",
      "armeringsleverantör",
      "köpa armering",
      "beställa prefab armering",
      "offert armering",
    ],
    content: [
      { type: "p", text: "Att beställa armering behöver inte vara krångligt. Med rätt underlag får du snabbt en offert och armering som passar direkt på bygget. Här går vi igenom hur en beställning går till och vad en armeringsleverantör behöver för att räkna rätt." },

      { type: "h2", text: "1. Ta fram underlaget" },
      { type: "p", text: "Bäst underlag är en bockningslista eller konstruktionsritning. Har du inte det räcker det ofta med mått och en beskrivning av vad som ska armeras – till exempel en betongplatta på 8 × 10 m. Då kan leverantören räkna fram ett förslag." },
      { type: "ul", items: [
        "Bockningslista (specifikation över varje järns dimension, längd, form och antal).",
        "Konstruktionsritning (PDF, DWG, DXF, Excel eller foto).",
        "Eller: mått, typ av konstruktion och önskad mängd.",
      ] },

      { type: "h2", text: "2. Vad leverantören behöver veta" },
      { type: "table",
        caption: "Ju mer du kan ange, desto snabbare och mer exakt blir offerten.",
        head: ["Uppgift", "Varför den behövs"],
        rows: [
          ["Vad ska armeras", "Platta, grund, pool, pelare, balk osv. styr utförandet"],
          ["Mängd / mått", "Ligger till grund för åtgång och pris"],
          ["Dimensioner", "Nättyp och kamstålsdimension enligt ritning"],
          ["Leveransort", "Påverkar frakt och leveranstid"],
          ["Leveranstidpunkt", "När armeringen behövs på bygget"],
        ],
      },
      { type: "p", text: "Osäker på mängden? Använd vår [armeringskalkylator](/armeringskalkylator) för att räkna fram ungefärlig åtgång av nät, kantjärn och distanser innan du skickar förfrågan." },

      { type: "h2", text: "3. Offert och leveranstid" },
      { type: "p", text: "Utifrån underlaget får du en offert med pris och leveranstid. Saknar du bockningslista hjälper en bra leverantör till att ta fram den från ritningen. Kontrollera att dimensioner, mängder och leveransvillkor stämmer innan du godkänner." },

      { type: "h2", text: "4. Tillverkning och leverans" },
      { type: "p", text: "Efter godkänd offert tillverkas armeringen – kapas, bockas och svetsas i B500B, märks och sorteras per element – och levereras till bygget. Prefab betyder att den är redo att läggas direkt, vilket sparar tid på plats." },

      { type: "h2", text: "Beställ hos oss" },
      { type: "p", text: "Vi är armeringsleverantör för hela Sverige och tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad), [armeringskorgar](/produkter/armeringskorgar), [svetsad armering och nät](/produkter/svetsad-armering) samt levererar [kamstål](/produkter/armeringsjarn) och [distanser](/produkter/distanser). Skicka din bockningslista eller mått så återkommer vi snabbt. [Begär en kostnadsfri offert](/offert)." },
      { type: "p", text: "Beställer du från [Västerås](/armering/vasteras), [Örebro](/armering/orebro) eller annan ort spelar ingen roll – vi levererar i hela Sverige." },
    ],
    faqs: [
      { q: "Kan jag köpa armering direkt utan offert?", a: "Vi arbetar med offert eftersom pris och leveranstid beror på mängd, förädling och ort. Skicka mängd, ritning eller bockningslista så får du ett fast pris snabbt." },
      { q: "Vad behöver jag för att beställa armering?", a: "Bäst är en bockningslista eller konstruktionsritning, men det räcker ofta med mått och en beskrivning av vad som ska armeras. Då kan leverantören räkna fram ett förslag och en offert." },
      { q: "Kan jag beställa armering utan bockningslista?", a: "Ja. Ange mått, typ av konstruktion och önskad mängd, så hjälper vi dig att ta fram en bockningslista utifrån ritningen. Du kan också använda vår armeringskalkylator för att uppskatta åtgången." },
      { q: "Vad påverkar priset på armering?", a: "Priset styrs främst av mängd (ton/löpmeter/m²), dimensioner, hur mycket kapning och bockning som krävs, samt frakt till leveransorten. Läs mer i guiden om vad armering kostar." },
      { q: "Levererar ni armering i hela Sverige?", a: "Ja, vi tillverkar och levererar prefab armering i hela Sverige. Leveranstid och frakt anges i offerten utifrån ort och mängd." },
    ],
  },
  {
    slug: "armering-till-garage",
    title: "Armering till garageplatta – så armerar du rätt",
    metaTitle: "Armering garageplatta – så armerar du",
    metaDescription:
      "Vilken armering behövs till en garageplatta? Guide om armeringsnät, kantjärn, dimensioner och täckskikt till garage – och hur mycket armering som går åt.",
    excerpt:
      "En garageplatta ska bära bilar och ibland bärande väggar. Här går vi igenom vilken armering som behövs, vanliga dimensioner och hur mycket som går åt.",
    date: "2026-09-05",
    updated: "2026-09-23",
    readingMinutes: 5,
    keywords: [
      "armeringsnät garageplatta",
      "armering till garage",
      "armering garageplatta",
      "garageplatta armering",
      "armeringsnät garage",
      "gjuta garageplatta",
    ],
    content: [
      { type: "p", text: "En garageplatta belastas av bilar, förvaring och ibland bärande väggar till själva garaget. Rätt armering fördelar lasterna, begränsar sprickor och håller plattan hel över tid. Här går vi igenom hur en garageplatta vanligtvis armeras." },

      { type: "h2", text: "Vilken armering till garageplatta?" },
      { type: "p", text: "En garageplatta armeras oftast med svetsat armeringsnät som huvudarmering, kompletterat med lösa kamjärn i kanterna och under bärande väggar. Nätet ger jämn armering över hela ytan medan kantjärnen förstärker där lasterna är stora." },
      { type: "ul", items: [
        "Armeringsnät – vanligtvis 6150 (Ø6, c/c 150) till garage.",
        "Kantjärn (kamstål) – ofta Ø10–12 mm i kantbalkar.",
        "Distanser – lyfter armeringen till rätt höjd med rätt täckskikt.",
        "Extra järn under bärande väggar och vid portöppningen.",
      ] },

      { type: "h2", text: "Vanliga dimensioner" },
      { type: "table",
        caption: "Riktvärden – exakt val ska följa konstruktionsritning.",
        head: ["Del av plattan", "Typisk armering"],
        rows: [
          ["Ytan / fält", "Armeringsnät 6150 (Ø6, c/c 150)"],
          ["Kanter / kantbalk", "Kamjärn Ø10–12 mm"],
          ["Under bärande vägg", "Extra kamjärn enligt ritning"],
        ],
      },

      { type: "h2", text: "Hur mycket armering går åt?" },
      { type: "p", text: "Åtgången av nät motsvarar plattans yta plus cirka 10–15 % för överlapp och spill. En garageplatta på 6 × 6 m (36 m²) kräver alltså ungefär 40–41 m² nät, plus kantjärn efter omkretsen. Räkna snabbt fram din åtgång i vår [armeringskalkylator](/armeringskalkylator)." },

      { type: "h2", text: "Täckskikt och placering" },
      { type: "p", text: "Armeringen ska ligga inne i betongen på distanser, inte mot underlaget, med ett täckskikt på ofta minst 25–35 mm mot cellplast eller form – mot makadam minst 40 mm och direkt mot jord minst 75 mm (Eurokod 2). I ett ouppvärmt eller fuktigt garage är täckskiktet extra viktigt så att stålet inte rostar. Läs mer om [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "h2", text: "Beställ armeringen färdig" },
      { type: "p", text: "Vi tar fram rätt armering till din garageplatta – [svetsad armering och nät](/produkter/svetsad-armering), [kamjärn](/produkter/armeringsjarn) och [bockade kantjärn](/produkter/klippt-och-bockad) – och levererar i hela Sverige. Se även guiden om [armering till betongplatta](/blogg/armering-till-betongplatta). Begär en kostnadsfri offert." },
      { type: "p", text: "Vi levererar armering till garageplattor i bland annat [Helsingborg](/armering/helsingborg) och [Linköping](/armering/linkoping)." },
    ],
    faqs: [
      { q: "Vilket armeringsnät till garageplatta?", a: "Vanligen nät med Ø6 mm tråd och 150 mm rutor (6150), kompletterat med kantjärn och kantbalksbyglar. Tyngre fordon kan kräva grövre nät eller två lager – ritningen gäller." },
      { q: "Vilken armering behövs till en garageplatta?", a: "Vanligtvis armeringsnät 6150 (Ø6, c/c 150) som huvudarmering, kompletterat med kamjärn Ø10–12 mm i kanter och under bärande väggar. Exakt val ska följa konstruktionsritning." },
      { q: "Hur mycket armeringsnät går åt till ett garage?", a: "Räkna med plattans yta plus 10–15 % för överlapp. En garageplatta på 36 m² kräver alltså ungefär 40–41 m² nät, plus kantjärn efter omkretsen." },
      { q: "Vilket täckskikt ska armeringen ha i ett garage?", a: "Ofta minst 25–35 mm mot cellplast eller form – mot makadam minst 40 mm och direkt mot jord minst 75 mm (Eurokod 2). I ett ouppvärmt eller fuktigt garage är täckskiktet extra viktigt så att stålet inte rostar – lägg armeringen på distanser." },
      { q: "Behöver en garageplatta kantbalk?", a: "En garageplatta har ofta förstärkta kanter eller en kantbalk med extra kamjärn, särskilt om väggar vilar på plattan. Utförandet ska följa konstruktionsritningen." },
    ],
  },
  {
    slug: "vad-kostar-armering",
    title: "Vad kostar armering? Så påverkas priset",
    metaTitle: "Vad kostar armering? Pris per kg",
    metaDescription:
      "Vad kostar armering? Guide om vad som påverkar priset på armering – mängd, dimensioner, kapning och bockning, prefab och frakt – och hur du får ett exakt pris.",
    excerpt:
      "Priset på armering beror på flera saker: mängd, dimensioner, hur mycket bearbetning som krävs och frakt. Här går vi igenom vad som styr priset och hur du får ett exakt besked.",
    date: "2026-09-05",
    updated: "2026-09-23",
    readingMinutes: 4,
    keywords: [
      "armering pris per kg",
      "armeringsstål pris",
      "kamstål pris",
      "pris armeringsstål",
      "köp armeringsjärn",
      "vad kostar armering",
      "armering pris",
      "pris armering",
      "kostnad armering",
      "armeringspris",
    ],
    content: [
      { type: "p", text: "Vad armering kostar går inte att svara på med en enda siffra – priset beror på ditt projekt. Stålpriset varierar dessutom över tid. Däremot går det att förstå vad som styr kostnaden, så att du kan jämföra offerter och få ett exakt pris snabbt." },

      { type: "h2", text: "Det här påverkar priset" },
      { type: "p", text: "Om själva stålet – B500B, K500C-T, vikt per meter och längder – läser du i [armeringsstål](/blogg/armeringsstal)." },
      { type: "ul", items: [
        "Mängd – armering prissätts ofta per ton, löpmeter eller kvadratmeter nät. Större volym ger oftast lägre styckpris.",
        "Dimensioner – grövre kamstål och tätare nät väger mer och kostar mer.",
        "Bearbetning – kapning, bockning och svetsning av korgar innebär mer arbete än raka längder.",
        "Prefab-grad – färdiga korgar och bockade detaljer kostar mer i tillverkning men sparar tid och spill på bygget.",
        "Frakt – leveransort, mängd och tillgänglighet påverkar transportkostnaden.",
      ] },

      { type: "h2", text: "Materialpris kontra totalkostnad" },
      { type: "p", text: "Titta inte bara på materialpriset per kilo. Prefab armering kan ha ett högre kilopris men ändå bli billigare totalt, eftersom du sparar arbetstid, minskar spillet och får färre fel på bygget. Räkna på helheten: material + arbete + spill + tid." },

      { type: "h2", text: "Så får du ett exakt pris" },
      { type: "ol", items: [
        "Ta fram mängd och dimensioner – bockningslista, ritning eller mått.",
        "Uppskatta åtgången med vår [armeringskalkylator](/armeringskalkylator) om du vill ha en känsla först.",
        "Skicka underlaget för offert så får du pris och leveranstid.",
      ] },
      { type: "p", text: "Läs mer om hur en beställning går till i guiden [beställa armering](/blogg/bestalla-armering)." },

      { type: "h2", text: "Begär pris på din armering" },
      { type: "p", text: "Vi räknar fram ett tydligt pris på din [klippt och bockade armering](/produkter/klippt-och-bockad), [armeringskorgar](/produkter/armeringskorgar), [nät](/produkter/svetsad-armering) och [kamstål](/produkter/armeringsjarn) – med leverans i hela Sverige. [Begär en kostnadsfri offert](/offert) så återkommer vi snabbt." },
      { type: "p", text: "Oavsett om bygget ligger i [Jönköping](/armering/jonkoping), [Norrköping](/armering/norrkoping) eller längre bort räknar vi fram pris och frakt till din ort." },
    ],
    faqs: [
      { q: "Vad kostar armering per kg?", a: "Priset per kilo påverkas av världsmarknadspriset på stål och beror på mängd, dimension och förädling (raka järn, bockat eller korgar). Vi lämnar fast pris per projekt – skicka mängd eller bockningslista så får du offert." },
      { q: "Vad kostar armering?", a: "Priset beror på mängd, dimensioner, hur mycket kapning och bockning som krävs samt frakt. Stålpriset varierar dessutom över tid. Skicka mått eller bockningslista så får du ett exakt pris i en offert." },
      { q: "Prissätts armering per kilo eller per meter?", a: "Det varierar: kamstål prissätts ofta per ton eller kilo, kantjärn per löpmeter och armeringsnät per kvadratmeter. Prefab-detaljer och korgar prissätts utifrån tillverkningen." },
      { q: "Är prefab armering dyrare?", a: "Prefab kan ha ett högre kilopris men blir ofta billigare totalt, eftersom du sparar arbetstid, minskar spill och får färre fel på bygget. Räkna på helheten, inte bara materialpriset." },
      { q: "Hur får jag ett exakt pris på armering?", a: "Ta fram mängd och dimensioner via bockningslista, ritning eller mått och skicka in för offert. Vill du ha en uppskattning först kan du använda vår armeringskalkylator." },
    ],
  },
  {
    slug: "armering-till-plintar",
    title: "Armering till plintar och plintgrund",
    metaTitle: "Armering plintar – plintgrund & plintkorg",
    metaDescription:
      "Hur armeras en plint? Guide om armering till plintar och plintgrund – armeringskorg, byglar, dimensioner och täckskikt till altan, attefallshus och carport.",
    excerpt:
      "Plintar bär upp altaner, attefallshus och carportar. Här går vi igenom hur en plint armeras, vilken korg som används och vad du behöver tänka på.",
    date: "2026-09-05",
    updated: "2026-09-23",
    readingMinutes: 4,
    keywords: [
      "armering plintar",
      "armering plint",
      "armera betongplint",
      "gjuta plintar armering",
      "gjuta plintar utan armering",
      "armeringsjärn plintar",
      "armering till plintar",
      "plintgrund armering",
      "armera plint",
      "plintarmering",
      "armering altan",
    ],
    content: [
      { type: "p", text: "Plintar är punktvisa betongfundament som bär upp laster från till exempel en altan, ett attefallshus, en carport eller en stomme. Rätt armering håller ihop plinten, fördelar lasten ner i marken och begränsar sprickor. Här går vi igenom hur plintar armeras." },

      { type: "h2", text: "Så armeras en plint" },
      { type: "p", text: "En gjuten plint armeras oftast med en liten armeringskorg: längsgående kamjärn som huvudarmering och byglar som håller ihop korgen. Bredare plintar och sulor kan även armeras med ett nät eller en bottenmatta som fördelar lasten. Dimensioner och antal järn bestäms av lasten och ska följa konstruktionsritning." },
      { type: "ul", items: [
        "Huvudjärn (längsgående kamstål) – ofta Ø10–16 mm beroende på last.",
        "Byglar – håller ihop korgen och tar upp tvärkrafter.",
        "Bottenmatta/nät i bredare plintsulor för lastfördelning.",
        "Distanser – ger rätt täckskikt runt hela korgen.",
      ] },

      { type: "figure", illustration: "rebar-cage", caption: "En liten armeringskorg till en plint – huvudjärn och byglar sammanbundna." },

      { type: "h2", text: "Täckskikt är extra viktigt i mark" },
      { type: "p", text: "Plintar står ofta i fuktig mark, vilket ställer krav på täckskiktet – betongen mellan armeringen och ytan. Ett för litet täckskikt gör att stålet rostar. Lägg korgen på distanser så att täckskiktet blir jämnt runt om, och håll det tillräckligt stort för markmiljö. Läs mer om [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "h2", text: "Prefab plintkorgar sparar tid" },
      { type: "p", text: "Har du många likadana plintar går det snabbt att beställa färdiga korgar. Vi tillverkar [armeringskorgar](/produkter/armeringskorgar) och [klippt och bockad armering](/produkter/klippt-och-bockad) till plintar och plintgrund efter din ritning och levererar i hela Sverige. Se även guiden om [armeringskorgar](/blogg/armeringskorgar-palarmering). Begär en kostnadsfri offert." },
      { type: "p", text: "Vi skickar färdiga plintkorgar även till norra Sverige – bland annat [Umeå](/armering/umea) och [Sundsvall](/armering/sundsvall)." },
    ],
    faqs: [
      { q: "Kan man gjuta plintar utan armering?", a: "Små, lätt belastade plintar – till exempel för en altan – gjuts ibland oarmerade om konstruktionen tillåter det. Armering minskar ändå risken för sprickor. Plintar för byggnader och större laster ska armeras enligt ritning." },
      { q: "Hur armeras en plint?", a: "Oftast med en liten armeringskorg – längsgående kamjärn (ofta Ø10–16 mm) som huvudarmering och byglar som håller ihop korgen. Bredare plintsulor kan även armeras med nät. Dimensioner ska följa konstruktionsritning." },
      { q: "Behöver en plint armering?", a: "Bärande plintar armeras normalt för att fördela laster och begränsa sprickor. Utförandet beror på last och markförhållanden och ska dimensioneras enligt ritning." },
      { q: "Vilket täckskikt ska en plint ha?", a: "Eftersom plintar ofta står i fuktig mark är täckskiktet extra viktigt så att armeringen inte rostar. Lägg korgen på distanser så att täckskiktet blir jämnt och tillräckligt stort för markmiljön." },
      { q: "Kan ni tillverka färdiga plintkorgar?", a: "Ja, vi tillverkar armeringskorgar till plintar efter din ritning och levererar dem färdiga i hela Sverige – särskilt tidsbesparande när du har många likadana plintar." },
    ],
  },
  {
    slug: "armera-stodmur",
    title: "Armering till stödmur och L-stöd",
    metaTitle: "Armering stödmur – så armeras L-stöd",
    metaDescription:
      "Hur armeras en stödmur? Guide om armering till stödmur och L-stöd i betong – huvudarmering, byglar, täckskikt och varför murar måste dimensioneras rätt.",
    excerpt:
      "En stödmur håller emot jordtryck och måste armeras rätt för att inte spricka eller välta. Så armeras en gjuten stödmur och ett L-stöd.",
    date: "2026-09-05",
    updated: "2026-09-23",
    readingMinutes: 4,
    keywords: [
      "stödmur armering",
      "gjuta stödmur armering",
      "armering stödmur",
      "armera stödmur",
      "stödmur betong armering",
      "l-stöd armering",
      "armering mur",
    ],
    content: [
      { type: "p", text: "En stödmur håller emot jord- och marktryck, till exempel vid en slänt eller en nivåskillnad på tomten. Trycket vill både skjuta muren framåt och välta den, och armeringen är det som håller emot. En underdimensionerad eller felplacerad armering gör att muren spricker eller rör sig – därför ska stödmurar alltid dimensioneras av en konstruktör." },

      { type: "h2", text: "Så armeras en gjuten stödmur" },
      { type: "p", text: "En platsgjuten stödmur eller ett L-stöd i betong armeras med huvudarmering på dragsidan och fördelningsarmering på tvären, samt förankring mellan sula och vägg. Byglar och krokar binder ihop konstruktionen där sula och mur möts – ett kritiskt parti där stora krafter tas upp." },
      { type: "ul", items: [
        "Huvudarmering (vertikala kamjärn) på murens dragsida.",
        "Fördelningsjärn horisontellt som binder ihop och fördelar.",
        "Förankringsjärn mellan bottensula och mur.",
        "Rätt täckskikt mot jordsidan så stålet inte rostar.",
      ] },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Underdimensionerad armering – muren spricker eller lutar med tiden.",
        "Armeringen på fel sida – huvudarmeringen ska sitta på dragsidan, i en stödmur normalt jordsidan.",
        "För litet täckskikt mot jorden – korrosion.",
        "Glömd förankring mellan sula och vägg.",
      ] },

      { type: "h2", text: "Prefabricera murens armering" },
      { type: "p", text: "Vi tillverkar armeringen till stödmurar och L-stöd – [klippt och bockad armering](/produkter/klippt-och-bockad), [armeringskorgar](/produkter/armeringskorgar) och [nät](/produkter/svetsad-armering) – efter konstruktörens ritning, och levererar i hela Sverige. Se även guiden om [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner). Begär en kostnadsfri offert på din mur." },
      { type: "p", text: "Vi levererar armering till stödmurar och L-stöd i bland annat [Stockholm](/armering/stockholm) och [Göteborg](/armering/goteborg)." },
    ],
    faqs: [
      { q: "Vilka armeringsjärn används i en stödmur?", a: "Oftast kamstål Ø10–Ø16 i vertikal och horisontell riktning, med startjärn från sulan upp i muren. Högre murar kan kräva grövre järn. Dimension och c/c-avstånd står på konstruktionsritningen." },
      { q: "Hur armeras en betongstödmur?", a: "Med huvudarmering på murens dragsida, horisontell fördelningsarmering och förankringsjärn mellan bottensula och vägg. Byglar binder ihop det kritiska partiet där sula och mur möts. Utförandet ska dimensioneras av en konstruktör." },
      { q: "Varför måste en stödmur armeras?", a: "En stödmur tar upp jordtryck som vill skjuta och välta muren. Armeringen håller emot dragkrafterna som betongen själv inte klarar. Utan rätt armering kan muren spricka, luta eller välta." },
      { q: "På vilken sida ska armeringen i en stödmur sitta?", a: "Huvudarmeringen ska sitta på dragsidan – i en stödmur normalt jordsidan (baksidan), där jordtrycket ger drag. Exakt placering framgår av konstruktionsritningen." },
      { q: "Kan ni leverera armering till stödmur?", a: "Ja, vi tillverkar klippt och bockad armering, korgar och nät till stödmurar och L-stöd efter ritning och levererar i hela Sverige." },
    ],
  },
  {
    slug: "armeringsnat-eller-armeringsjarn",
    title: "Armeringsnät eller armeringsjärn – vad ska du välja?",
    metaTitle: "Armeringsnät eller armeringsjärn?",
    metaDescription:
      "Armeringsnät eller lösa armeringsjärn – vad är skillnaden och när använder du vad? Guide som jämför nät och kamjärn till betongplatta, kanter och punktlaster.",
    excerpt:
      "Nät eller lösa järn? De flesta plattor använder båda. Här jämför vi armeringsnät och armeringsjärn så att du vet vad som passar var.",
    date: "2026-09-05",
    readingMinutes: 4,
    keywords: [
      "armeringsnät eller armeringsjärn",
      "skillnad armeringsnät armeringsjärn",
      "nät eller kamjärn",
      "armeringsnät vs armeringsjärn",
    ],
    content: [
      { type: "p", text: "En vanlig fråga när man ska armera en betongplatta är om man ska använda armeringsnät eller lösa armeringsjärn (kamstål). Svaret är oftast: båda. De fyller olika funktioner och kombineras i de flesta konstruktioner. Här jämför vi dem." },

      { type: "h2", text: "Kort skillnad" },
      { type: "ul", items: [
        "Armeringsnät – ett svetsat rutnät som ger jämn armering över hela ytan, snabbt att lägga.",
        "Armeringsjärn (kamstål) – lösa räfflade stänger som förstärker punktvis, i kanter och där lasterna är stora.",
      ] },

      { type: "h2", text: "När passar vad?" },
      { type: "table",
        caption: "Riktlinje – dimensionering ska följa konstruktionsritning.",
        head: ["Situation", "Lämpligt val"],
        rows: [
          ["Jämn armering av en plattyta", "Armeringsnät"],
          ["Kanter, kantbalkar och hörn", "Armeringsjärn (kamjärn)"],
          ["Under bärande väggar / punktlaster", "Extra armeringsjärn"],
          ["Byglar, korgar och specialformer", "Bockat armeringsjärn"],
          ["Snabb yttäckning på stora golv", "Armeringsnät (ev. specialnät)"],
        ],
      },

      { type: "h2", text: "Oftast kombineras de" },
      { type: "p", text: "I en typisk platta på mark läggs armeringsnät över hela ytan, medan lösa kamjärn förstärker kantbalkar, hörn och partier under bärande väggar. Nätet tar den jämna armeringen, järnen tar de koncentrerade lasterna. Läs mer i vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta)." },

      { type: "h2", text: "Räkna åtgången" },
      { type: "p", text: "Vill du veta ungefär hur mycket nät och kantjärn som går åt? Använd vår [armeringskalkylator](/armeringskalkylator). Se även guiderna om [armeringsnät](/blogg/armeringsnat-storlekar-och-matt) och [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner)." },

      { type: "h2", text: "Vi levererar båda" },
      { type: "p", text: "Vi tillverkar och levererar både [svetsad armering och nät](/produkter/svetsad-armering) och [armeringsjärn i kamstål B500B](/produkter/armeringsjarn) – samt [klippt och bockade detaljer](/produkter/klippt-och-bockad) – i hela Sverige. Begär en kostnadsfri offert så tar vi fram rätt kombination till din konstruktion." },
      { type: "p", text: "Nät, järn eller båda – vi levererar till byggen i bland annat [Malmö](/armering/malmo) och [Uppsala](/armering/uppsala)." },
    ],
    faqs: [
      { q: "Vad är skillnaden på armeringsnät och armeringsjärn?", a: "Armeringsnät är ett svetsat rutnät som ger jämn armering över en hel yta, medan armeringsjärn (kamstål) är lösa stänger som förstärker punktvis – i kanter, kantbalkar och där lasterna är stora." },
      { q: "Ska jag använda nät eller kamjärn till min platta?", a: "Oftast båda: nät över ytan och lösa kamjärn i kanter, hörn och under bärande väggar. Exakt utförande ska följa konstruktionsritning." },
      { q: "Kan man armera en platta med bara nät?", a: "Mindre, lätt belastade plattor kan klara sig med enbart nät, men de flesta plattor förstärks även med kamjärn i kanterna. Dimensionering ska följa ritning." },
      { q: "Är armeringsnät eller kamjärn billigast?", a: "Det beror på konstruktionen. Nät går snabbt att lägga och täcker stora ytor effektivt, medan kamjärn behövs för kanter och punktlaster. Totalkostnaden avgörs av mängd, dimensioner och arbete – begär offert för exakt pris." },
    ],
  },
  {
    slug: "bockningslista-sa-gor-du",
    title: "Bockningslista – så gör du en, steg för steg",
    metaTitle: "Bockningslista – så gör du (+ mall)",
    metaDescription:
      "Vad är en bockningslista och hur gör du en? Guide om bockningslista för armering – positioner, former, mått och dimensioner – med gratis mall att ladda ner.",
    excerpt:
      "En bockningslista är receptet för din armering: varje position med form, mått, dimension och antal. Så gör du en – och så slipper du om vi tar fram den åt dig.",
    date: "2026-09-08",
    updated: "2026-09-23",
    readingMinutes: 5,
    keywords: [
      "bockningslista",
      "bockningslista mall",
      "bockningslista armering",
      "göra bockningslista",
      "armeringsritning",
      "bockningsschema",
    ],
    content: [
      { type: "p", text: "En bockningslista (kallas ibland bockningsschema eller armeringsspecifikation) är sammanställningen av all armering i ett projekt. Den talar om exakt vilka järn som ska kapas och bockas: form, mått, dimension och antal per position. Med en tydlig bockningslista får du rätt armering, ett korrekt pris och en leverans som är märkt och sorterad – redo att monteras." },

      { type: "h2", text: "Vad ska en bockningslista innehålla?" },
      { type: "p", text: "Varje rad i listan är en position – en unik armeringsdetalj. För varje position anger du:" },
      { type: "ul", items: [
        "Positionsnummer (pos) – en unik beteckning per detalj.",
        "Form – rak, bygel, U, L, krok eller annan bockad form.",
        "Mått per skänkel – längderna på formens sträckor, i mm.",
        "Dimension (Ø) – järnets diameter i mm, t.ex. Ø10 eller Ø16.",
        "Antal – hur många likadana järn positionen omfattar.",
        "Gärna även täckskikt och bockningsradie där det är kritiskt.",
      ] },

      { type: "figure", illustration: "bending-shapes", caption: "Vanliga bockningsformer – raka längder, byglar, U- och L-former." },
      { type: "p", text: "Alla standardformer med bokstavskod och måttbeteckningar finns som utskrivbart blad: [ladda ner typformer för bockning (PDF)](/downloads/typformer-bockning-armeringsproffs.pdf). Vill du prova formerna med egna mått och skicka listan direkt, använd [verktyget för typformer](/tjanster/bockningslista)." },

      { type: "h2", text: "Steg för steg" },
      { type: "ol", items: [
        "Utgå från konstruktionsritningen – där finns dimensioner, former och antal.",
        "Numrera positionerna – ge varje unik detalj ett positionsnummer.",
        "Ange form och mått – rita/beskriv formen och skriv måtten per skänkel.",
        "Fyll i dimension och antal – Ø i mm och hur många av varje.",
        "Summera per dimension – det ger underlag för mängd och pris.",
      ] },

      { type: "h2", text: "Ladda ner en mall" },
      { type: "p", text: "Vill du fylla i själv? Ladda ner vår [bockningslista-mall](/bockningslista-mall.csv) och skriv in dina positioner. Skicka den ifyllda mallen så räknar vi fram en offert. Är du osäker på en post hjälper vi dig att komplettera." },

      { type: "h2", text: "Har du bara en ritning? Vi gör listan" },
      { type: "p", text: "Saknar du en färdig bockningslista räcker det med en konstruktionsritning. Vi tar fram [bockningslistan åt dig](/tjanster/bockningslista) med rätt former, mått, dimensioner och antal – du får godkänna den innan tillverkning. Se även guiden om [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner)." },

      { type: "h2", text: "Från lista till färdig armering" },
      { type: "p", text: "När listan är klar tillverkar vi [klippt och bockad armering](/produkter/klippt-och-bockad) efter den, märker och sorterar per position och levererar i hela Sverige – och kan även [lägga armeringen på plats](/tjanster/armeringsmontage). Behöver du uppskatta mängden först? Använd [armeringskalkylatorn](/armeringskalkylator)." },
      { type: "p", text: "Skicka bockningslistan från [Västerås](/armering/vasteras), [Örebro](/armering/orebro) eller vilken ort som helst – vi tillverkar och levererar i hela Sverige." },
    ],
    faqs: [
      { q: "Vad är en bockningslista?", a: "En bockningslista är en sammanställning av all armering i ett projekt – varje position med form, mått per skänkel, dimension (Ø) och antal. Den används som underlag för både offert och tillverkning." },
      { q: "Hur gör jag en bockningslista?", a: "Utgå från konstruktionsritningen, numrera varje unik detalj som en position, ange form och mått per skänkel, fyll i dimension och antal och summera per dimension. Du kan använda vår gratis mall." },
      { q: "Finns det en mall för bockningslista?", a: "Ja, du kan ladda ner vår bockningslista-mall och fylla i dina positioner. Skicka den ifyllda mallen så tar vi fram en offert." },
      { q: "Kan ni göra bockningslistan åt mig?", a: "Ja. Skicka din konstruktionsritning så tar vi fram en komplett bockningslista med former, mått, dimensioner och antal – du får godkänna den innan tillverkning." },
    ],
  },
  {
    slug: "armering-till-betongtrappa",
    title: "Armering till betongtrappa – så armeras en gjuten trappa",
    metaTitle: "Armering betongtrappa – så armeras den",
    metaDescription:
      "Hur armeras en gjuten betongtrappa? Guide om armering till betongtrappa – huvudarmering, fördelningsjärn, förankring i bjälklag och rätt täckskikt.",
    excerpt:
      "En gjuten betongtrappa spänner ofta fritt mellan två plan och måste armeras för att inte spricka. Så armeras trappan rätt.",
    date: "2026-09-08",
    readingMinutes: 4,
    keywords: [
      "armering till betongtrappa",
      "armera betongtrappa",
      "betongtrappa armering",
      "armering trappa",
      "gjuta betongtrappa armering",
    ],
    content: [
      { type: "p", text: "En platsgjuten betongtrappa fungerar ofta som ett lutande bjälklag som spänner fritt mellan två plan. Egenvikt och last vill böja trappan, och betongen spricker på dragsidan om den inte armeras. Därför ska en gjuten trappa armeras och dimensioneras av en konstruktör – särskilt om den är fribärande." },

      { type: "h2", text: "Så armeras en gjuten trappa" },
      { type: "p", text: "Huvudarmeringen läggs i trappans längdriktning på dragsidan (normalt underkant i fältet), med fördelningsjärn på tvären. Vid infästningarna mot bjälklag eller vilplan förankras armeringen in i den anslutande konstruktionen så att krafterna tas upp där trappan möter planen." },
      { type: "ul", items: [
        "Huvudarmering (kamjärn) i trappans längdriktning på dragsidan.",
        "Fördelningsjärn tvärs över för att fördela laster och begränsa sprickor.",
        "Förankring in i bjälklag/vilplan i över- och underkant.",
        "Rätt täckskikt med [distanser](/produkter/distanser) så stålet inte rostar.",
      ] },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Huvudarmering på fel sida – den ska sitta på dragsidan.",
        "Ingen eller för svag förankring där trappan möter planen.",
        "För litet täckskikt – armeringen ligger för nära ytan.",
        "Underdimensionerad armering i fribärande trappor.",
      ] },

      { type: "h2", text: "Prefab till trappan" },
      { type: "p", text: "Vi tillverkar armeringen till betongtrappor – [klippt och bockad armering](/produkter/klippt-och-bockad) och [armeringsjärn i kamstål](/produkter/armeringsjarn) – efter konstruktörens ritning eller [bockningslista](/tjanster/bockningslista), och levererar i hela Sverige. Vi kan även [lägga armeringen på plats](/tjanster/armeringsmontage). Se även guiden om [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner). Begär en kostnadsfri offert på din trappa." },
      { type: "p", text: "Vi levererar trappans armering till bland annat [Helsingborg](/armering/helsingborg) och [Linköping](/armering/linkoping)." },
    ],
    faqs: [
      { q: "Hur armeras en gjuten betongtrappa?", a: "Med huvudarmering i trappans längdriktning på dragsidan, fördelningsjärn på tvären och förankring in i bjälklag och vilplan. Rätt täckskikt säkras med distanser. Utförandet ska dimensioneras av en konstruktör." },
      { q: "Måste en betongtrappa armeras?", a: "Ja, en gjuten betongtrappa böjs av egenvikt och last och spricker på dragsidan utan armering. Fribärande trappor är särskilt beroende av rätt armering och ska alltid dimensioneras." },
      { q: "Vilken dimension på armeringen behövs i en trappa?", a: "Det beror på trappans spännvidd och last och framgår av konstruktionsritningen. Vanligt är kamjärn som huvudarmering med klenare fördelningsjärn på tvären." },
      { q: "Kan ni leverera armering till betongtrappa?", a: "Ja, vi tillverkar klippt och bockad armering och kamjärn till trappor efter ritning eller bockningslista och levererar i hela Sverige – och kan även sköta montaget." },
    ],
  },
  {
    slug: "armering-till-betonggolv",
    title: "Armering till betonggolv och industrigolv",
    metaTitle: "Armering betonggolv – nät & fiber",
    metaDescription:
      "Hur armeras ett betonggolv? Guide om armering till betonggolv, industrigolv och garagegolv – armeringsnät, kamjärn, täckskikt och placering i golvet.",
    excerpt:
      "Ett betonggolv armeras för att begränsa sprickor och ta upp laster. Så väljer du mellan armeringsnät och kamjärn – och placerar det rätt i golvet.",
    date: "2026-09-08",
    readingMinutes: 4,
    keywords: [
      "armering till betonggolv",
      "armera betonggolv",
      "industrigolv armering",
      "armering garagegolv",
      "armeringsnät golv",
      "betonggolv armering",
    ],
    content: [
      { type: "p", text: "Ett betonggolv – i garage, verkstad, lager eller industri – armeras för att begränsa sprickor från krympning och för att ta upp de laster golvet utsätts för. Hur mycket och vilken typ av armering som behövs beror på laster, underlag och golvets funktion. Kraftigt belastade industrigolv ska alltid dimensioneras av en konstruktör." },

      { type: "h2", text: "Nät eller kamjärn i golvet?" },
      { type: "p", text: "De flesta betonggolv armeras med [armeringsnät](/produkter/svetsad-armering) som ger jämn armering över hela ytan. I golv med stora eller koncentrerade laster kompletteras nätet med [kamjärn](/produkter/armeringsjarn) i fält och vid pelare eller portöppningar. Läs mer i guiden [armeringsnät eller armeringsjärn](/blogg/armeringsnat-eller-armeringsjarn)." },
      { type: "table",
        caption: "Riktlinje – dimensionering ska följa konstruktionsritning.",
        head: ["Golvtyp", "Vanlig armering"],
        rows: [
          ["Garagegolv, mindre plattor", "Armeringsnät"],
          ["Verkstads- och lagergolv", "Nät, ev. dubbla lager"],
          ["Industrigolv med tunga laster", "Nät + kamjärn eller specialnät"],
          ["Punktlaster (pelare, ställage)", "Extra kamjärn i fält"],
        ],
      },

      { type: "h2", text: "Rätt placering och täckskikt" },
      { type: "p", text: "Armeringens placering i höjdled är avgörande. Nätet ska ligga där dragkrafterna är störst – ofta i eller strax under golvets överkant för att begränsa krympsprickor, eller i två lager i kraftigt belastade golv. Rätt höjd säkras med [distanser](/produkter/distanser) så att täckskiktet blir korrekt och armeringen inte hamnar i botten av gjutningen." },
      { type: "figure", illustration: "cover-layer", caption: "Distanser ger rätt täckskikt så att armeringen ligger på rätt höjd." },

      { type: "h2", text: "Räkna åtgång och beställ" },
      { type: "p", text: "Vill du uppskatta hur mycket nät som går åt? Använd [armeringskalkylatorn](/armeringskalkylator). Vi tillverkar och levererar [armeringsnät, specialnät](/produkter/svetsad-armering) och [klippt och bockad armering](/produkter/klippt-och-bockad) till betong- och industrigolv i hela Sverige – och kan även [lägga armeringen](/tjanster/armeringsmontage). Begär en kostnadsfri offert på ditt golv." },
      { type: "p", text: "Industri- och betonggolv armerar vi i bland annat [Norrköping](/armering/norrkoping) och [Jönköping](/armering/jonkoping) – och hela Sverige." },
    ],
    faqs: [
      { q: "Hur armeras ett betonggolv?", a: "Oftast med armeringsnät som ger jämn armering över ytan, kompletterat med kamjärn där lasterna är stora. Nätet placeras på rätt höjd med distanser så att täckskiktet blir korrekt. Dimensionering ska följa konstruktionsritning." },
      { q: "Vilket armeringsnät ska jag ha i ett garagegolv?", a: "Mindre garagegolv armeras normalt med ett armeringsnät. Vid tunga laster eller större ytor kan dubbla lager eller specialnät behövas – exakt val framgår av konstruktionsritningen." },
      { q: "Var i golvet ska armeringen ligga?", a: "Armeringen ska ligga där dragkrafterna är störst, ofta i eller strax under överkant för att begränsa krympsprickor. Rätt höjd säkras med distanser – armeringen får inte ligga i botten av gjutningen." },
      { q: "Kan ni leverera armering till industrigolv?", a: "Ja, vi tillverkar och levererar armeringsnät, specialnät och kamjärn till betong- och industrigolv i hela Sverige, och kan även sköta montaget." },
    ],
  },
  {
    slug: "armeringsbyglar",
    title: "Armeringsbyglar – typer, mått och när de används",
    metaTitle: "Armeringsbyglar – U-bygel, sluten & mått",
    metaDescription:
      "Armeringsbyglar förklarade: U-bygel, sluten bygel och öppen bygel – typkoder, mått, krokar och bygelavstånd. Beställ färdiga byglar i serie.",
    excerpt:
      "Byglar håller ihop armeringen i balkar, pelare och kantbalkar och tar upp tvärkrafter. Här går vi igenom de vanligaste bygeltyperna, hur måtten anges, krokar, bygelavstånd och vad du ska tänka på när du beställer.",
    date: "2026-09-23",
    readingMinutes: 6,
    keywords: [
      "armeringsbyglar",
      "bygel armering",
      "u-bygel armering",
      "sluten bygel",
      "färdiga armeringsbyglar",
      "armeringsjärn byglar",
      "bygelavstånd",
      "n bygel armering",
      "c bygel armering",
      "k bygel armering",
    ],
    content: [
      { type: "p", text: "En armeringsbygel är ett bockat armeringsjärn som omsluter eller förbinder längsgående armering. Byglar finns i nästan alla betongkonstruktioner: i balkar och pelare, i kantbalkar runt en platta på mark och i prefabricerade element. De håller huvudjärnen på plats vid gjutningen och tar i den färdiga konstruktionen upp tvärkrafter och förhindrar att tryckta järn knäcks ut." },

      { type: "h2", text: "Vad gör en bygel?" },
      { type: "ul", items: [
        "Tar upp tvärkraft (skjuvning) i balkar – betongen bildar trycksträvor och byglarna verkar som dragband.",
        "Håller längsgående armering på rätt plats under gjutningen.",
        "Förhindrar att tryckt armering i pelare knäcks ut (omslutande byglar).",
        "Binder ihop över- och underkantsarmering i kantbalkar och bjälklag.",
      ] },
      { type: "p", text: "Hur många byglar som behövs, vilken dimension de ska ha och hur tätt de ska sitta bestäms alltid av konstruktören och står på armeringsritningen." },

      { type: "h2", text: "Typer av armeringsbyglar – U-bygel, sluten bygel, K-bygel" },
      { type: "p", text: "I Sverige anges bockade former med en bokstavskod enligt Typblad för bockning av stänger (2A 1979). Koden gör det enkelt att beskriva formen i en bockningslista. Här är de byglar som används mest:" },
      { type: "table", head: ["Typ", "Kod", "Form", "Typisk användning"], rows: [
        ["Sluten bygel", "N", "Rektangel med två krokar (ofta 135°) i samma hörn", "Balkar och pelare – omsluter huvudjärnen"],
        ["U-bygel / U-järn", "C", "Öppen U-form med tre ben", "Kantbalkar, skarvar, bjälklagskanter"],
        ["Öppen bygel (K-bygel)", "K", "Öppen bygel med ett extra ben – som villabygel med förlängt ben in i plattan", "Kantbalk i platta på mark, balkar"],
        ["Bygel med överlapp", "L", "Sluten form där benen överlappar", "Balkar och pelare där krokar inte får plats"],
        ["Sluten bygel med sned sida", "NX", "Fyrsidig bygel där en sida är sned", "Balkar med sned kant, konsoler"],
        ["Hårnål", "S", "Två parallella ben med 180° rund bock", "Förankring och kantförstärkning"],
      ], caption: "Vanliga bygeltyper. Koderna används i bockningslistan tillsammans med måtten a, b, c … (yttermått)." },
      { type: "p", text: "Du kan se alla standardformer med bokstavskod och prova egna mått i vårt verktyg för [typformer för bockning](/tjanster/bockningslista)." },

      { type: "h3", text: "U-bygel – armering eller infästning?" },
      { type: "p", text: "Ordet U-bygel används också om gängade U-bultar för infästning av rör och avgassystem. I armeringssammanhang betyder U-bygel ett U-format armeringsjärn av kamstål (typform C) utan gängor. Ange typform och mått när du beställer, så blir det inga missförstånd." },

      { type: "h2", text: "Byglar i kantbalk" },
      { type: "p", text: "I kantbalken runt en platta på mark används oftast en öppen K-bygel (villabygel) eller en sluten bygel. Mått, antal och montage går vi igenom i guiden [kantbalksbygel](/blogg/kantbalksbygel)." },

      { type: "h2", text: "Så anges måtten på en bygel" },
      { type: "p", text: "Måtten anges som yttermått per ben i millimeter (a, b, c …), tillsammans med dimension (Ø), stålkvalitet och antal. Exempel på rader i en [bockningslista](/blogg/bockningslista-sa-gor-du):" },
      { type: "table", head: ["Pos", "Typform", "Ø", "Mått (mm)", "Antal"], rows: [
        ["1", "N – sluten bygel", "Ø10 B500B", "a = 300, b = 200", "120 st"],
        ["2", "C – U-bygel", "Ø8 B500B", "a = 150, b = 400, c = 150", "300 st"],
      ] },
      { type: "ul", items: [
        "Bockningsmåtten avser ytterkonturen – ange tydligt om ritningen använder innermått.",
        "Krokar och krokvinkel (90° eller 135°) framgår av ritningen. I bockningslistan anges ändkrok med L (vänd som i typfiguren) eller M (motsatt håll).",
        "Minsta dorndiameter beror på dimensionen (SS-EN 1992-1-1 tabell 8.1N) – ritningen kan kräva större. Se [bocka armeringsjärn](/blogg/bocka-armeringsjarn).",
      ] },

      { type: "h2", text: "Krokar på slutna byglar" },
      { type: "p", text: "Slutna byglar förankras med krokar som bockas in mot bygelns insida. Enligt Eurokod 2 (SS-EN 1992-1-1:2005, avsnitt 8.5, figur 8.5) ska en 135°-krok ha en rak ände på minst 5 × Ø och minst 50 mm, och en 90°-bock minst 10 × Ø och minst 70 mm. Ett längsgående järn ska ligga inuti kroken. Byt aldrig en 135°-krok mot 90° utan konstruktörens godkännande – vid vridning krävs till exempel 135°-krok eller omlott." },

      { type: "h2", text: "Bygelavstånd och antal byglar" },
      { type: "p", text: "Bygelavståndet (s) står på ritningen. Som riktvärden anger Eurokod 2 ett största avstånd i balkar på 0,75 × d (d = balkens effektiva höjd) och i pelare det minsta av 20 × minsta huvudjärnets diameter, pelarens minsta sida och 400 mm. Det är gränsvärden – inte en dimensionering." },
      { type: "p", text: "Antalet byglar räknar du ungefär som längd / bygelavstånd + 1. En 6 meter lång balk med byglar c/c 200 mm behöver alltså cirka 31 byglar." },

      { type: "h2", text: "Dimensioner och stålkvalitet" },
      { type: "p", text: "Byglar tillverkas oftast i kamstål B500B (SS 212540) i dimensionerna Ø6–Ø12 mm, i grövre konstruktioner även Ø16. Små dimensioner bockas från ringar i automatiska maskiner, vilket ger mycket jämna mått. De grövsta dimensionerna bockas oftast av raka stänger." },

      { type: "h2", text: "Bocka själv eller beställa färdiga byglar?" },
      { type: "p", text: "Några enstaka byglar går att bocka för hand, men byglar går åt i stora mängder – en enda balk kan kräva hundratals. Att bocka dem på bygget tar tid och ger varierande mått. Färdiga armeringsbyglar från en bockningsverkstad är lika i varje exemplar, märkta per position och levereras buntade." },
      { type: "ul", items: [
        "Jämna mått – bygeln passar huvudjärnen utan justering.",
        "Snabbare montage – ingen bockning på plats.",
        "Rätt bockningsradie och krok enligt ritning.",
        "Leverans på pall tillsammans med övrig armering och [armeringskorgar](/blogg/armeringskorgar-palarmering).",
      ] },
      { type: "p", text: "Vi tillverkar [färdiga armeringsbyglar](/produkter/byglar-och-hakar) i serie efter din bockningslista – skicka listan eller ritningen så återkommer vi med pris och leveranstid." },
    ],
    faqs: [
      { q: "Vad är skillnaden mellan en U-bygel och en sluten bygel?", a: "En U-bygel (typform C) är öppen och har tre ben. En sluten bygel (typform N) omsluter armeringen helt och förankras med krokar i ett hörn. Slutna byglar används där bygeln ska hålla ihop huvudjärnen i balkar och pelare." },
      { q: "Vad är en K-bygel?", a: "En öppen bygel (typform K) med ett extra ben. Den vanligaste varianten i villagrunder är villabygeln, där benet är förlängt in i plattan – se guiden om kantbalksbygel." },
      { q: "Hur tätt ska byglar sitta?", a: "Bygelavståndet står på ritningen. Eurokod 2 anger största avstånd 0,75 × d i balkar och i pelare det minsta av 20 × huvudjärnets diameter, pelarens minsta sida och 400 mm." },
      { q: "Vilken dimension har armeringsbyglar?", a: "Oftast Ø6–Ø12 mm kamstål B500B, i grövre konstruktioner även Ø16. Rätt dimension står på konstruktionsritningen." },
      { q: "Kan man köpa färdiga armeringsbyglar?", a: "Ja. Vi tillverkar färdigbockade byglar i serie efter dina mått och levererar i hela Sverige." },
    ],
  },

  {
    slug: "bocka-armeringsjarn",
    title: "Bocka armeringsjärn – för hand, med verktyg och rätt bockningsradie",
    metaTitle: "Bocka armeringsjärn – för hand & tabell",
    metaDescription:
      "Så bockar du armeringsjärn: verktyg, bockning för hand och minsta bockningsradie enligt Eurokod 2 i tabell. Plus klipplängd och vanliga misstag.",
    excerpt:
      "Armeringsjärn kan bockas för hand med rätt verktyg – men bara med rätt bockningsradie. Här är tabellen över minsta dorndiameter, hur du räknar klipplängd och när det lönar sig att beställa färdigbockat.",
    date: "2026-09-23",
    readingMinutes: 6,
    keywords: [
      "bocka armeringsjärn",
      "bocka armering",
      "bocka armeringsjärn för hand",
      "verktyg bocka armeringsjärn",
      "bockningsradie armering",
      "bockningsradie armering tabell",
      "minsta bockningsradie armering",
      "armeringsjärn bockning",
    ],
    content: [
      { type: "p", text: "Att bocka armeringsjärn handlar om mer än att vika stålet i rätt vinkel. Bockas järnet för skarpt kan stålet spricka och betongen innanför bocken krossas. Här går vi igenom hur du bockar armeringsjärn för hand, vilka verktyg som behövs, vilken bockningsradie som gäller och när det lönar sig att köpa armeringen färdigbockad." },

      { type: "h2", text: "Verktyg för att bocka armeringsjärn" },
      { type: "ul", items: [
        "Bockjärn / armeringsbockare (bocknyckel) – enkel hävstång för tunna dimensioner, ungefär Ø6–Ø12. Ett rör som förlängning ger mer hävkraft.",
        "Bockbord med tappar – järnet läggs mot en tapp (dorn) med rätt diameter, ger jämnare radie.",
        "Kombinerad kap- och bockmaskin (manuell eller elektrisk) – för större mängder och för Ø16 och grövre, som i praktiken inte går att bocka för hand.",
        "Bultsax eller kapmaskin för att kapa järnen till rätt längd innan bockning.",
      ] },
      { type: "p", text: "Använd skyddshandskar och skyddsglasögon. Ett armeringsjärn som slinter ur verktyget kan fjädra tillbaka med stor kraft." },

      { type: "h2", text: "Så bockar du armeringsjärn för hand" },
      { type: "ol", items: [
        "Kapa järnet till rätt klipplängd (kaplängd), se nedan.",
        "Markera var bocken ska börja – mät från järnets ände.",
        "Lägg järnet mot en dorn eller tapp med rätt diameter för dimensionen.",
        "Bocka med jämn kraft i en rörelse – några grader förbi önskad vinkel, eftersom stålet fjädrar tillbaka lite.",
        "Kontrollera vinkel och mått mot ritningen innan nästa bock.",
      ] },
      { type: "p", text: "Bocka i kallt tillstånd. Värm inte armeringsjärnet för att underlätta bockningen – värme förändrar stålets egenskaper, och enligt SS-EN 13670 är det inte tillåtet om arbetsbeskrivningen inte uttryckligen medger det. Bocka inte heller i sträng kyla: under −5 °C får armering bara bockas om arbetsbeskrivningen tillåter det och särskilda försiktighetsåtgärder vidtas. Att räta ut och bocka om ett järn som redan är bockat är likaså inte tillåtet utan uttryckligt medgivande – stålet kan spricka i bocken." },

      { type: "h2", text: "Minsta bockningsradie – tabell" },
      { type: "p", text: "Hur snävt ett järn får bockas styrs av dorndiametern – diametern på den tapp järnet bockas runt. Enligt Eurokod 2 (SS-EN 1992-1-1, tabell 8.1N) är minsta dorndiameter för bockar, krokar och öglor 4 × Ø upp till Ø16 och 7 × Ø för grövre dimensioner. Bockningsradien (innerradien) är hälften av dorndiametern. För svetsad armering och nät som bockas efter svetsning gäller större värden." },
      { type: "table", head: ["Dimension", "Minsta dorndiameter", "Inre bockningsradie"], rows: [
        ["Ø6", "24 mm (4Ø)", "12 mm"],
        ["Ø8", "32 mm (4Ø)", "16 mm"],
        ["Ø10", "40 mm (4Ø)", "20 mm"],
        ["Ø12", "48 mm (4Ø)", "24 mm"],
        ["Ø16", "64 mm (4Ø)", "32 mm"],
        ["Ø20", "140 mm (7Ø)", "70 mm"],
        ["Ø25", "175 mm (7Ø)", "87,5 mm"],
        ["Ø32", "224 mm (7Ø)", "112 mm"],
      ], caption: "Minsta dorndiameter för bockar, krokar och öglor enligt SS-EN 1992-1-1:2005 tabell 8.1N. Konstruktionsritningen kan kräva större radie." },
      { type: "p", text: "För bockade huvudjärn kan konstruktören behöva kontrollera att betongen innanför bocken inte krossas (Eurokod 2, avsnitt 8.3(3)) och då kräva större radie än tabellvärdet. Följ alltid ritningen. Värdena gäller SS-EN 1992-1-1:2005 tills den nya generationen Eurokod (EN 1992-1-1:2023) införs i svenska regler. Dimensioner och vikter hittar du i [armeringsjärn – dimensioner](/blogg/armeringsjarn-dimensioner)." },

      { type: "h2", text: "Klipplängd – hur långt ska järnet vara?" },
      { type: "p", text: "Ett bockat järn blir något kortare än summan av yttermåtten, eftersom järnet följer en radie i varje bock. Den exakta klipplängden beror på dimension, bockningsradie och vinkel. Som tumregel vid minsta bockningsradie drar du av ungefär 2 × Ø per 90°-bock från summan av yttermåtten. Exempel: ett L-järn Ø10 med yttermåtten 300 + 500 mm → 800 − 20 ≈ 780 mm klipplängd. För byglar i serie måste klipplängden räknas ut exakt – annars stämmer inte måtten. Bockningsverkstäder räknar fram den automatiskt ur måtten i [bockningslistan](/blogg/bockningslista-sa-gor-du)." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "För snäv bockning – stålet kan spricka i bocken.",
        "Omböjning – att räta ut och bocka om samma ställe.",
        "Värma järnet för att det ska bli lättare att bocka.",
        "Mäta innermått när ritningen anger yttermått (eller tvärtom).",
        "Glömma krokarna på slutna [armeringsbyglar](/blogg/armeringsbyglar) – bygeln får då ingen förankring.",
      ] },

      { type: "h2", text: "När lönar det sig att köpa bockat?" },
      { type: "p", text: "Några enstaka järn till ett mindre projekt går bra att bocka själv. Men redan vid ett par dussin byglar går det snabbare, blir jämnare och ofta billigare totalt att beställa [klippt och bockad armering](/produkter/klippt-och-bockad) efter en [bockningslista](/tjanster/bockningslista). Då bockas varje järn i maskin med rätt radie, märks per position och levereras klart att montera." },
    ],
    faqs: [
      { q: "Vilket verktyg behövs för att bocka armeringsjärn?", a: "För tunna dimensioner (ca Ø6–Ø12) räcker ett bockjärn/armeringsbockare, gärna på ett bockbord med tappar i rätt diameter. Ø16 och grövre bockas i maskin." },
      { q: "Hur räknar man ut klipplängden?", a: "Summera yttermåtten och dra av ungefär 2 × Ø per 90°-bock vid minsta bockningsradie. Ett L-järn Ø10 med 300 + 500 mm blir cirka 780 mm. För serier räknas den exakt." },
      { q: "Hur bockar man armeringsjärn för hand?", a: "Kapa järnet till rätt längd, markera bocken och bocka kallt runt en dorn med rätt diameter i en jämn rörelse. Använd en handbockare eller ett bockbord för tunna dimensioner." },
      { q: "Vilken är minsta bockningsradie för armering?", a: "Enligt Eurokod 2 är minsta dorndiameter för bockar, krokar och öglor 4 × Ø upp till Ø16 och 7 × Ø för grövre järn. Bockningsradien är halva dorndiametern, t.ex. 24 mm för Ø12. Ritningen kan kräva större radie." },
      { q: "Får man värma armeringsjärn för att bocka det?", a: "Nej, inte om arbetsbeskrivningen inte uttryckligen tillåter det. Armeringsjärn ska bockas kallt – värme förändrar stålets egenskaper. Under −5 °C krävs också särskilt medgivande." },
      { q: "Får man räta ut ett bockat armeringsjärn?", a: "Nej, inte utan att det uttryckligen tillåts i arbetsbeskrivningen – då krävs särskild utrustning och en fastställd metod. Stålet kan annars spricka i bocken. Fråga konstruktören." },
    ],
  },
  {
    slug: "skarvlangd-armering",
    title: "Skarvlängd och överlapp för armering – tabell och beräkning",
    metaTitle: "Skarvlängd armering – tabell Ø8–Ø25",
    metaDescription:
      "Skarvlängd för armeringsjärn Ø8–Ø25 i tabell, hur du beräknar den enligt Eurokod 2 och hur mycket armeringsnät ska överlappa. Ritningen gäller alltid.",
    excerpt:
      "Armeringsjärn och nät måste skarvas med tillräcklig överlappning för att krafterna ska föras över. Här är riktvärden för skarvlängd, hur den beräknas och hur mycket armeringsnät ska överlappa.",
    date: "2026-09-23",
    readingMinutes: 7,
    keywords: [
      "skarvlängd armering",
      "skarvlängder armering",
      "beräkna skarvlängd armering",
      "skarvlängd armering 10mm",
      "skarvlängd armering 12mm",
      "skarvlängd armering 16mm",
      "skarvlängd armeringsjärn",
      "överlapp armeringsjärn",
      "överlapp armeringsnät",
      "hur mycket överlapp armeringsnät",
    ],
    content: [
      { type: "p", text: "Armeringsjärn levereras i begränsade längder, oftast 6 eller 12 meter, och armeringsnät i ark. När armeringen behöver vara längre skarvas den genom att två järn får överlappa varandra – en omlottskarv. Kraften förs då över från det ena järnet till det andra via betongen. Är överlappningen för kort fungerar skarven inte." },

      { type: "h2", text: "Vad är skarvlängd?" },
      { type: "p", text: "Skarvlängden (l₀) är den sträcka där två järn ligger omlott. Den bestäms av konstruktören och står på armeringsritningen. Enligt Eurokod 2 (SS-EN 1992-1-1, avsnitt 8.7) beror den på:" },
      { type: "ul", items: [
        "Järnets diameter – grövre järn behöver längre skarv.",
        "Hur hårt järnet är belastat (spänningen) och om det är rakt eller bockat.",
        "Betongens hållfasthetsklass – starkare betong ger kortare skarv.",
        "Vidhäftningsförhållandena – järn i överkant av en hög gjutning får sämre vidhäftning.",
        "Hur stor andel av järnen som skarvas i samma snitt.",
        "Täckskikt och avstånd mellan järnen.",
        "Om järnet är tryckt eller draget – tryckskarvar kan göras kortare.",
      ] },

      { type: "h2", text: "Riktvärden för skarvlängd – tabell Ø8–Ø25" },
      { type: "p", text: "Beräknat enligt Eurokod blir skarvlängden för dragna järn i betong C25/30 ofta 40–60 × Ø vid god vidhäftning och upp mot 85 × Ø vid dålig vidhäftning (t.ex. överkant i höga gjutningar) eller om alla järn skarvas i samma snitt. Tabellen visar spannet 40–60 × Ø. Värdena är riktvärden för överslag och ersätter inte konstruktionsritningen." },
      { type: "table", head: ["Dimension", "Riktvärde 40–60 × Ø", "Absolut golv (15Ø / 200 mm)"], rows: [
        ["Ø8", "320–480 mm", "200 mm"],
        ["Ø10", "400–600 mm", "200 mm"],
        ["Ø12", "480–720 mm", "200 mm"],
        ["Ø16", "640–960 mm", "240 mm"],
        ["Ø20", "800–1 200 mm", "300 mm"],
        ["Ø25", "1 000–1 500 mm", "375 mm"],
      ], caption: "Golvvärdet gäller oavsett beräkning (Eurokod 2 anger också 0,3·α6·lb,rqd som kan bli större), men den beräknade skarvlängden blir nästan alltid betydligt längre. Den verkliga skarvlängden står på ritningen." },
      { type: "p", text: "I vår [armeringskalkylator](/armeringskalkylator) används 50 × Ø som standard när du räknar kamjärn med skarvar – du kan skriva in skarvlängden från din ritning." },

      { type: "h2", text: "Så beräknas skarvlängden enligt Eurokod 2" },
      { type: "p", text: "Först beräknas den erforderliga förankringslängden lb,rqd = (Ø / 4) · (σsd / fbd), där σsd är spänningen i järnet och fbd vidhäftningshållfastheten. Skarvlängden blir sedan l₀ = α1 · α2 · α3 · α5 · α6 · lb,rqd, där α-faktorerna tar hänsyn till bland annat form, täckskikt och andel skarvade järn (α6 = 1,0–1,5)." },
      { type: "p", text: "Exempel: Ø12 i C25/30 med god vidhäftning och fullt utnyttjat järn ger fbd ≈ 2,7 MPa och σsd ≈ 435 MPa. Då blir lb,rqd ≈ 3 × 161 ≈ 480 mm (40 × Ø). Skarvas alla järn i samma snitt (α6 = 1,5) blir skarvlängden cirka 725 mm – ungefär 60 × Ø. Beräkningen görs av konstruktören." },

      { type: "h2", text: "Överlapp för armeringsnät – hur mycket?" },
      { type: "p", text: "Svetsade armeringsnät skarvas genom att arken läggs omlott. En vanlig praxis är att nätet överlappar minst två maskor (rutor) – för 150-nät i praktiken cirka 300–400 mm. Överlappa i båda riktningarna och klipp bort hörnet där fyra ark möts, så att det inte blir fyra lager nät på samma ställe. Eurokod 2 anger minsta skarvlängd för nätets fördelningsjärn:" },
      { type: "table", head: ["Tråddiameter (fördelningsjärn)", "Minsta skarvlängd", "Minst antal maskdelningar i skarven"], rows: [
        ["Ø ≤ 6 mm", "≥ 150 mm", "1"],
        ["6 < Ø ≤ 8,5 mm", "≥ 250 mm", "2"],
        ["8,5 < Ø ≤ 12 mm", "≥ 350 mm", "2"],
      ], caption: "Minsta skarvlängd för fördelningsjärn i armeringsnät enligt SS-EN 1992-1-1 tabell 8.4. Huvudarmeringen i nätet skarvas enligt särskilda regler i avsnitt 8.7.5.1." },
      { type: "p", text: "Läs mer om nät i guiden [armeringsnät – storlekar och mått](/blogg/armeringsnat-storlekar-och-matt)." },

      { type: "h2", text: "Så placerar du skarvarna rätt" },
      { type: "ul", items: [
        "Förskjut skarvarna – skarva inte alla järn i samma snitt.",
        "Undvik skarvar där belastningen är störst, t.ex. mitt i ett spann eller över ett stöd.",
        "Järnen i en skarv ska ligga tätt ihop – högst 4 × Ø eller 50 mm fritt avstånd, annars ska skarven förlängas.",
        "Bind ihop skarven så att järnen inte glider isär vid gjutningen.",
        "Kontrollera [täckskiktet](/blogg/distanser-tackskikt-armering) även i skarven – två järn omlott tar mer plats.",
        "Alternativ till omlottskarv är mekaniska skarvar (skruvskarvar) och svetsade skarvar – enligt konstruktörens anvisning.",
      ] },

      { type: "h2", text: "Skarvarna påverkar hur mycket armering du beställer" },
      { type: "p", text: "Varje skarv innebär extra stål. I en lång platta med Ø12 i 6-metersstänger och 600 mm skarv går det åt ungefär 10 % extra stål för skarvarna (0,6 m per 6-metersstång). För en enskild 10 meter lång rad blir det 10,6 m järn – alltså två stänger. Räkna med skarvarna i mängdberäkningen, eller låt oss göra det i offerten utifrån din [bockningslista](/tjanster/bockningslista)." },
    ],
    faqs: [
      { q: "Hur lång ska skarven vara på armeringsjärn?", a: "Skarvlängden står på ritningen. Beräknat enligt Eurokod 2 blir den för dragna järn i C25/30 ofta 40–60 × Ø vid god vidhäftning, t.ex. 480–720 mm för Ø12. Eurokod 2 anger dessutom ett absolut golv: det största av 15 × Ø, 200 mm och 0,3·α6·lb,rqd." },
      { q: "Vad är skarvlängden för 10, 12 och 16 mm armering?", a: "Som riktvärde 40–60 × Ø: Ø10 ca 400–600 mm, Ø12 ca 480–720 mm och Ø16 ca 640–960 mm. Dålig vidhäftning eller alla järn skarvade i samma snitt ger längre skarv. Ritningen gäller." },
      { q: "Hur mycket ska armeringsnät överlappa?", a: "Vanlig praxis är minst två maskor – för 150-nät cirka 300–400 mm. Eurokod 2 anger minsta skarvlängd för nätets fördelningsjärn från 150 mm (tråd ≤ 6 mm) till 350 mm (tråd upp till 12 mm)." },
      { q: "Varför får inte alla skarvar ligga i samma snitt?", a: "Om alla järn skarvas på samma ställe blir konstruktionen svag just där och skarvlängden måste ökas. Skarvarna förskjuts så att bara en del av järnen skarvas i varje snitt." },
    ],
  },

  {
    slug: "armeringsstal",
    title: "Armeringsstål – B500B, K500C-T, vikt per meter och längder",
    metaTitle: "Armeringsstål B500B – vikt, längd & pris",
    metaDescription:
      "Armeringsstål B500B och K500C-T: vikt per meter i tabell, längder 6 och 12 m, vad SS 212540 innebär och vad som styr priset. Ø12 – den vanligaste dimensionen.",
    excerpt:
      "Armeringsstål, armeringsjärn, kamstål – samma sak. Här reder vi ut beteckningarna B500B och K500C-T, vad järnen väger, vilka längder som finns och vad som påverkar priset.",
    date: "2026-09-23",
    readingMinutes: 6,
    keywords: [
      "armeringsstål",
      "armerings stål",
      "armeringsjärn 12 mm",
      "12 mm armeringsjärn",
      "armeringsstål 12mm",
      "armeringsstål 10mm",
      "armeringsstål 6mm",
      "armeringsjärn 6 meter",
      "ss 212540",
      "k500c-t",
      "b500b",
      "vikt armeringsjärn per meter",
      "armeringsstål pris",
    ],
    content: [
      { type: "p", text: "Armeringsstål är det stål som gjuts in i betong för att ta upp dragkrafter. I Sverige kallas det också armeringsjärn eller kamstål – kamstål efter de kammar (ribbor) på ytan som ger god vidhäftning mot betongen. Vi levererar [armeringsjärn och kamstål](/produkter/armeringsjarn) i alla vanliga dimensioner i hela Sverige." },

      { type: "h2", text: "B500B – vad betyder beteckningen?" },
      { type: "ul", items: [
        "B – armeringsstål (från tyska Betonstahl), enligt SS-EN 10080.",
        "500 – karakteristisk sträckgräns fyk = 500 MPa.",
        "B – duktilitetsklass B, dvs. hur mycket stålet kan töjas innan brott (klass C är segare).",
      ] },

      { type: "h2", text: "SS 212540 och K500C-T" },
      { type: "p", text: "I Sverige gäller SS-EN 10080 tillsammans med produktspecifikationen SS 212540 (senaste utgåva 2014). Den omfattar armeringsstål med sträckgräns 500 MPa i duktilitetsklasserna A, AB, B och C. Stålet betecknas där till exempel K500B-T eller K500C-T: K = kamstång, 500 = sträckgräns, B/C = duktilitetsklass och T = varmvalsat och värmebehandlat. Beteckningarna ersatte äldre svenska stålsorter som Ks 400 och Ks 500." },
      { type: "p", text: "På ritningar anges ofta B500B, men det som lagerförs i Sverige är i regel K500C-T (klass C), som uppfyller kraven för B500B. Klass C får alltid ersätta klass B – men inte tvärtom. Stålet ska vara märkt med tillverkarens valsmärke och levereras med leveransintyg, så att det går att spåra." },

      { type: "h2", text: "Vikt per meter – tabell" },
      { type: "p", text: "Armeringsstål anges med nominell diameter (Ø) i millimeter. Vikten per meter räknas som 0,00617 × Ø² kg/m." },
      { type: "table", head: ["Dimension", "Vikt kg/m", "6-metersstång", "12-metersstång", "Vanlig användning"], rows: [
        ["Ø6", "0,222", "1,33 kg", "2,66 kg", "Byglar, nät"],
        ["Ø8", "0,395", "2,37 kg", "4,74 kg", "Byglar, lätta plattor"],
        ["Ø10", "0,617", "3,70 kg", "7,40 kg", "Byglar, plattor"],
        ["Ø12", "0,888", "5,33 kg", "10,66 kg", "Plattor, kantbalkar"],
        ["Ø16", "1,58", "9,48 kg", "18,96 kg", "Balkar, grundsulor"],
        ["Ø20", "2,47", "14,82 kg", "29,64 kg", "Balkar, pelare"],
        ["Ø25", "3,85", "23,10 kg", "46,20 kg", "Tunga konstruktioner"],
        ["Ø32", "6,31", "37,86 kg", "75,72 kg", "Anläggning"],
      ], caption: "Teoretisk vikt för kamstål. Räkna åtgång i [armeringskalkylatorn](/armeringskalkylator#vikt-per-meter). Vilken dimension som passar vad: [armeringsjärn – dimensioner](/blogg/armeringsjarn-dimensioner)." },

      { type: "h2", text: "Armeringsjärn 6 eller 12 meter – eller ringar" },
      { type: "ul", items: [
        "12 meter – standardlängd i lager, färre skarvar i stora konstruktioner. Andra längder, upp till cirka 18 m, kan specialbeställas.",
        "6 meter – lätt att hantera och transportera, vanligt i byggvaruhandeln och för mindre projekt.",
        "Ringar (rulle) – för bockmaskiner, vanligen Ø6–Ø12, ibland upp till Ø16. Se [armering i ringar](/produkter/armering-i-ringar).",
        "Kapat och bockat – järnen levereras färdiga efter bockningslistan, se [klippt och bockad armering](/produkter/klippt-och-bockad).",
      ] },
      { type: "p", text: "Kortare stänger betyder fler skarvar – se [skarvlängd och överlapp](/blogg/skarvlangd-armering)." },

      { type: "h2", text: "Armeringsjärn 12 mm – den vanligaste dimensionen" },
      { type: "p", text: "Ø12 är den dimension som oftast används i villagrunder, kantbalkar och plattor på mark. En 6-metersstång väger drygt 5 kg och ett ton Ø12 motsvarar ungefär 1 125 löpmeter. Behöver du räkna åtgång – antal stänger, löpmeter och vikt – använd [armeringskalkylatorn](/armeringskalkylator)." },

      { type: "h2", text: "Vad kostar armeringsstål?" },
      { type: "p", text: "Armeringsstål prissätts oftast per ton eller per kilo. Priset följer världsmarknaden för stål och varierar över tid. Därtill påverkas totalpriset av:" },
      { type: "ul", items: [
        "Mängd – större beställningar ger lägre pris per kilo.",
        "Förädling – raka järn, kapat, bockat eller färdiga korgar.",
        "Dimension – små dimensioner kostar ofta mer per kilo.",
        "Leverans – ort, mängd och om leveransen samordnas med övrig armering.",
      ] },
      { type: "p", text: "Läs mer i [vad kostar armering](/blogg/vad-kostar-armering) eller [begär offert](/offert) på din mängd – vi svarar med pris och leveranstid för hela Sverige." },
    ],
    faqs: [
      { q: "Vad är skillnaden mellan armeringsstål, armeringsjärn och kamstål?", a: "Det är samma sak. Armeringsstål och armeringsjärn är allmänna namn, kamstål syftar på kammarna på ytan som ger vidhäftning mot betongen." },
      { q: "Vad är skillnaden mellan B500B och K500C-T?", a: "B500B anger sträckgräns 500 MPa och duktilitetsklass B. K500C-T är den svenska beteckningen enligt SS 212540 för kamstång i klass C, som är segare och uppfyller kraven för B500B. Klass C får ersätta klass B, inte tvärtom." },
      { q: "Vad väger armeringsjärn 12 mm?", a: "Ø12 väger 0,888 kg per meter – en 6-metersstång drygt 5,3 kg och en 12-metersstång knappt 10,7 kg." },
      { q: "Vad är SS 212540?", a: "En svensk produktspecifikation som används tillsammans med SS-EN 10080. Den anger egenskaper för armeringsstål med sträckgräns 500 MPa i duktilitetsklasserna A, AB, B och C, t.ex. K500C-T." },
      { q: "Vilken längd ska jag välja – 6 eller 12 meter?", a: "12 meter är standardlagerlängd och ger färre skarvar, 6 meter är lättare att hantera. Vid större mängder är klippt och bockat efter bockningslista ofta mest effektivt." },
    ],
  },

  {
    slug: "kantbalksbygel",
    title: "Kantbalksbygel – mått, villabygel och montage i platta på mark",
    metaTitle: "Kantbalksbygel – mått, villabygel & antal",
    metaDescription:
      "Vad är en kantbalksbygel och vilka mått ska den ha? Om villabygel (K-bygel), täckskikt, antal per meter, kantelement av cellplast och montage i platta på mark.",
    excerpt:
      "Kantbalksbyglar håller ihop armeringen i den förstärkta kanten runt en platta på mark. Här går vi igenom formerna, hur du räknar ut mått och antal och hur byglarna monteras.",
    date: "2026-09-23",
    readingMinutes: 6,
    keywords: [
      "kantbalksbygel",
      "kantbalksbyglar",
      "villabygel",
      "k-bygel",
      "kantbalk armering",
      "armering kantbalk platta på mark",
    ],
    content: [
      { type: "p", text: "En platta på mark har nästan alltid en förstärkt kant – en kantbalk – där plattan är tjockare och bär väggarnas last. Kantbalken armeras med längsgående järn i över- och underkant som hålls ihop av byglar. Det är de byglarna som kallas kantbalksbyglar." },

      { type: "h2", text: "Vilken form har en kantbalksbygel?" },
      { type: "table", head: ["Form", "Kod", "Beskrivning"], rows: [
        ["Villabygel / förlängd K-bygel", "K", "Öppen bygel där ett ben är förlängt in i plattan – vanligast i villagrunder, finns som lagervara"],
        ["Sluten bygel", "N", "Omsluter kantbalkens järn helt, förankras med krokar"],
        ["U-bygel", "C", "Öppen U-form, används ibland tillsammans med raka järn"],
      ], caption: "Vilken form som gäller står på konstruktionsritningen. Se alla former i [typformer för bockning](/tjanster/bockningslista)." },
      { type: "p", text: "Villabyglar finns som lagervara, till exempel 800 × 200 × 300 × 200 mm i Ø8 – där det förlängda benet går in i plattan – anpassade för cirka 400 mm hög kantbalk. Stämmer inte standardmåttet med din kantbalk tillverkas byglarna efter mått. Villabygel® är ett inarbetat produktnamn för den här bygeltypen." },

      { type: "h2", text: "Så räknar du ut måtten" },
      { type: "p", text: "Bygelns yttermått ska vara kantbalkens mått minus täckskiktet på varje sida. Exempel med 50 mm täckskikt, vanligt när betongen gjuts mot cellplast eller form:" },
      { type: "ul", items: [
        "Kantbalk 300 mm bred och 400 mm hög (inklusive plattan).",
        "Bygelns yttermått blir 300 − 2 × 50 = 200 mm i bredd och 400 − 2 × 50 = 300 mm i höjd.",
        "Täckskiktet kan skilja mellan över- och underkant. Gjuts betongen direkt mot jord krävs minst 75 mm (Eurokod 2, 4.4.1.3). Följ ritningen.",
      ] },
      { type: "p", text: "Läs mer om varför täckskiktet är så viktigt i [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "h2", text: "Kantbalksbygel i kantelement av cellplast" },
      { type: "p", text: "I de flesta villagrunder formas kantbalken av L-formade kantelement av cellplast. Byglarna ska då rymmas inuti kantelementet med rätt täckskikt mot cellplasten, och det förlängda benet ska nå in i plattan så att kantbalk och platta binds ihop. Kontrollera kantelementets invändiga mått innan du beställer byglarna." },

      { type: "h2", text: "Hur många kantbalksbyglar behövs?" },
      { type: "p", text: "Kantbalken går runt hela plattan, så antalet är omkretsen delat med bygelavståndet – plus eventuella extra byglar i hörnen. En platta på 10 × 12 meter har 44 meters omkrets; med byglar c/c 300 mm blir det cirka 147 byglar. Bygelavstånd och dimension (ofta Ø8 eller Ø10) står på ritningen." },

      { type: "h2", text: "Montage i kantbalken" },
      { type: "ol", items: [
        "Lägg ut distanser för underkantsjärnen.",
        "Placera byglarna med rätt avstånd längs hela kantbalken.",
        "Trä in och bind de längsgående kantjärnen i byglarnas hörn.",
        "Lägg hörnjärn (L-järn) så att kantjärnen går runt hörnet.",
        "Anslut plattans armeringsnät till kantbalken enligt ritningen.",
        "Kontrollera täckskiktet mot form och mark innan gjutning.",
      ] },

      { type: "h2", text: "Bocka själv eller köpa färdiga kantbalksbyglar?" },
      { type: "p", text: "En villagrund kräver ofta 100–200 kantbalksbyglar. Att [bocka armeringsjärn](/blogg/bocka-armeringsjarn) för hand i den mängden tar tid och ger ojämna mått. Vi tillverkar kantbalksbyglar i serie efter dina mått tillsammans med kantjärn och hörnjärn – se [byglar och hakar](/produkter/byglar-och-hakar), alla bygeltyper i [armeringsbyglar](/blogg/armeringsbyglar) och helheten i [armering till betongplatta](/blogg/armering-till-betongplatta)." },
    ],
    faqs: [
      { q: "Vad är en kantbalksbygel?", a: "En bygel som håller ihop de längsgående järnen i kantbalken runt en platta på mark. Vanligast är villabygeln – en öppen K-bygel med ett förlängt ben in i plattan." },
      { q: "Vilket mått ska en kantbalksbygel ha?", a: "Kantbalkens bredd och höjd minus täckskiktet på varje sida. Vid 300 × 400 mm kantbalk och 50 mm täckskikt blir bygeln 200 × 300 mm." },
      { q: "Vilket bygelavstånd i kantbalk?", a: "Det står på ritningen. I villagrunder är c/c 300 mm vanligt, vilket ger drygt tre byglar per meter." },
      { q: "Kan man köpa kantbalksbyglar färdiga?", a: "Ja. Villabyglar finns i standardmått, och vi tillverkar kantbalksbyglar efter dina mått i serie och levererar i hela Sverige." },
    ],
  },

  {
    slug: "lyftoglor-betong",
    title: "Lyftögla i betong – material, dimension och placering",
    metaTitle: "Lyftögla i betong – dimension & placering",
    metaDescription:
      "Lyftögla i betong: material, dimension, förankring och placering – plus hur lyftvinkeln påverkar lasten och vem som ansvarar. För betongelement och prefab.",
    excerpt:
      "Lyftöglor gjuts in i betongelement så att de kan lyftas säkert. Här går vi igenom material, dimension, förankring, lyftvinkel och vilka regler som gäller.",
    date: "2026-09-23",
    readingMinutes: 6,
    keywords: [
      "lyftögla betong",
      "lyftöglor betong",
      "lyftögla dimension",
      "lyftbygel",
      "ingjutningsögla",
      "lyftöglor betongelement",
    ],
    content: [
      { type: "p", text: "Prefabricerade betongelement – trappor, balkar, väggelement, brunnslock och plintar – måste kunna lyftas vid avformning, transport och montage. Det görs med lyftöglor (ingjutningsöglor) som gjuts in i elementet. En lyftögla som är fel dimensionerad eller fel förankrad kan släppa, så den ska alltid följa konstruktörens ritning eller lyftsystemets anvisning." },

      { type: "h2", text: "Vilket material ska en lyftögla ha?" },
      { type: "p", text: "Ingjutna lyftöglor tillverkas av slätt, segt rundstål – till exempel S235 – bockat med föreskriven bockningsradie. Kamstål (B500B) används inte till lyftöglor: det är mindre segt i bockar och kan spricka sprött vid stötar och kyla." },

      { type: "h2", text: "Lyftögla, lyftbygel eller lyftankare?" },
      { type: "ul", items: [
        "Lyftögla / lyftbygel – bockad ögla av rundstål som gjuts in och sticker upp ur elementet.",
        "Lyftankare och lyfthylsor – färdiga lyftsystem från specialiserade tillverkare, med typgodkända lastvärden och tillhörande lyftdon.",
      ] },

      { type: "h2", text: "Vad avgör lyftöglans dimension?" },
      { type: "ul", items: [
        "Elementets vikt och antal lyftpunkter – med fyra öglor räknas ofta bara två som bärande.",
        "Lyftvinkeln – ju större vinkel mellan stropparna, desto större kraft i varje ögla.",
        "Vidhäftning mot formen vid avformning ger en extra last.",
        "Betongens hållfasthet vid lyftet – vid avformning har betongen ännu inte full hållfasthet.",
        "Förankringslängd, kantavstånd och armering runt öglan.",
      ] },
      { type: "table", head: ["Vinkel mellan stropparna", "Kraft per ögla jämfört med rakt lyft"], rows: [
        ["0° (lodrätt)", "1,0 ×"],
        ["60°", "ca 1,15 ×"],
        ["90°", "ca 1,41 ×"],
        ["120°", "ca 2,0 ×"],
      ], caption: "Snedlyft ökar kraften kraftigt. Följ alltid tillverkarens största tillåtna vinkel." },

      { type: "h2", text: "Förankring och placering av lyftöglor" },
      { type: "ul", items: [
        "Öglan ska förankras tillräckligt djupt och gärna runt elementets armering.",
        "Placeringen styrs av elementets tyngdpunkt så att det hänger rätt i lyftet.",
        "Utstickande öglor kapas eller korrosionsskyddas efter montage.",
      ] },

      { type: "h2", text: "Säkerhet och regler" },
      { type: "p", text: "Lyftöglor ska dimensioneras av en konstruktör. Vägledning finns i SIS-CEN/TR 15728 om ingjutna lyftinsatser för prefabricerade betongelement och i tyska VDI/BV-BS 6205. Lyftarbetet omfattas av Arbetsmiljöverkets föreskrifter AFS 2023:11 (kapitlet om lyftanordningar och lyftredskap; tidigare AFS 2006:6)." },
      { type: "ul", items: [
        "Svetsa aldrig på lyftöglor.",
        "Räta inte ut och bocka inte om en ögla, och återanvänd den inte.",
        "Lyft inte snedare än tillverkarens angivna största vinkel.",
      ] },

      { type: "h2", text: "Beställ lyftöglor efter ritning" },
      { type: "p", text: "Vi bockar [lyftöglor och lyftkrokar](/produkter/lyftoglor) efter konstruktörens ritning, i små och stora serier, och levererar dem tillsammans med övrig armering till elementen – till exempel [armeringskorgar](/blogg/armeringskorgar-palarmering)." },
    ],
    faqs: [
      { q: "Får man använda armeringsjärn som lyftögla?", a: "Nej, normalt inte. Ingjutna lyftöglor görs av slätt, segt rundstål (t.ex. S235) eller som färdiga lyftsystem. Kamstål är mindre segt i bockar och kan spricka sprött." },
      { q: "Hur många lyftöglor behövs?", a: "Det bestämmer konstruktören utifrån elementets vikt och form. Med fyra öglor räknas ofta bara två som bärande, eftersom lasten sällan fördelas jämnt." },
      { q: "Vad är skillnaden på lyftögla och lyftbygel?", a: "Det är i stort sett samma sak – en bockad ögla av rundstål som gjuts in i elementet. Lyftankare och lyfthylsor är färdiga system med typgodkända lastvärden." },
    ],
  },

];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
