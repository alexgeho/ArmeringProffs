/**
 * Guider/artiklar för SEO. Varje post blir /blogg/[slug].
 * content = array av block (paragraf, underrubrik, lista eller tabell).
 *
 * Fokus: armering-klustret – prefab, klippt & bockad, nät, kamstål, distanser.
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

      { type: "h2", text: "Köpa själv eller beställa prefab?" },
      { type: "p", text: "Armering går att köpa styckvis, men rätt dimensionering, kapning, bockning och placering är avgörande för att plattan ska hålla. Vi tillverkar prefab armering efter din bockningslista eller ritning – [klippt och bockad armering](/produkter/klippt-och-bockad), [svetsad armering och nät](/produkter/svetsad-armering) och [armeringskorgar](/produkter/armeringskorgar) – och levererar i hela Sverige. Begär en kostnadsfri offert så tar vi fram rätt armering till din platta." },
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
      { type: "p", text: "Näten säljs oftast i standardformat, till exempel omkring 2,0 × 5,0 m, men även andra format förekommer. Behöver du andra mått tillverkar vi specialnät efter ritning. Vid beställning räknar man ytan plus spill för överlapp." },

      { type: "h2", text: "Vilket nät till vad?" },
      { type: "ul", items: [
        "Uterum och mindre plattor: ofta Ø5 mm, 150 mm rutor.",
        "Garage- och villaplatta: vanligen Ø6 mm, 150 mm rutor.",
        "Kraftiga eller hårt belastade plattor: grövre tråd och/eller dubbla nätlager enligt ritning.",
      ] },

      { type: "h2", text: "Överlapp och placering" },
      { type: "p", text: "Skarvar mellan nät ska överlappa minst 1,5–2 rutor (ca 200–300 mm) och bindas ihop. Nätet läggs på distanser så att det hamnar inne i betongen med tillräckligt täckskikt (ofta minst 25–35 mm). Läs mer i vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta)." },

      { type: "h2", text: "Osäker på valet?" },
      { type: "p", text: "Vill du inte räkna själv? Vi tillverkar [svetsad armering och specialnät](/produkter/svetsad-armering) efter dina mått och levererar i hela Sverige. Begär en kostnadsfri offert." },
    ],
    faqs: [
      { q: "Vad betyder 5x150 på ett armeringsnät?", a: "Det betyder att nätet har Ø5 mm tråd med 150 mm mellan trådarna, alltså 150 mm rutor. Första siffran är trådens diameter i mm, andra är rutstorleken." },
      { q: "Vilket armeringsnät ska jag ha till en garageplatta?", a: "Till en garageplatta används vanligtvis nät med Ø6 mm tråd och 150 mm rutor, ofta kompletterat med extra kamjärn i kanterna. Exakt val beror på laster och ska följa konstruktionsritning." },
      { q: "Vilka mått har ett armeringsnät?", a: "Näten säljs i standardformat, ett vanligt format är omkring 2,0 × 5,0 m, men storleken varierar mellan leverantörer. Behöver du andra mått går det att tillverka specialnät efter ritning." },
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
      { type: "p", text: "Kamjärn kapas och bockas efter konstruktionsritningen. Bockade byglar och kantjärn ger rätt form på armeringen i kanter och hörn. Fel kapning eller bockning försämrar bärförmågan, så måtten ska följas noga. Beställer du [klippt och bockad armering](/produkter/klippt-och-bockad) levereras järnen färdiga efter bockningslistan." },

      { type: "h2", text: "Beställ rätt kamstål" },
      { type: "p", text: "Rätt dimension, placering och täckskikt avgör om plattan håller. Vi levererar [armeringsjärn i kamstål B500B](/produkter/armeringsjarn) och tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad) efter din ritning – i hela Sverige. Begär en kostnadsfri offert så gör vi det rätt från början." },
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

      { type: "h2", text: "Beställ armeringen som prefab" },
      { type: "p", text: "En pool är en krävande betongkonstruktion där fel blir mycket dyra. Vi tillverkar och levererar armeringen – nät, kamjärn och [bockade detaljer](/produkter/klippt-och-bockad) – efter konstruktörens ritning, i hela Sverige. Läs mer om [armering till betongplatta](/blogg/armering-till-betongplatta) för grunderna, och begär en offert för ditt poolprojekt." },
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
      { type: "p", text: "Vi räknar fram armeringen efter din ritning och levererar [nät](/produkter/svetsad-armering), [kamjärn](/produkter/armeringsjarn) och [bockade detaljer](/produkter/klippt-och-bockad) i hela Sverige. Se även våra guider om [armering till betongplatta](/blogg/armering-till-betongplatta) och [armeringsnät](/blogg/armeringsnat-storlekar-och-matt). Begär en kostnadsfri offert." },
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

      { type: "h2", text: "Vi levererar distanser och tillbehör" },
      { type: "p", text: "Rätt täckskikt och placering är skillnaden mellan en platta som håller i generationer och en som spricker. Vi levererar [distanser och tillbehör](/produkter/distanser) tillsammans med din armering i hela Sverige. Se även vår guide om [armering till betongplatta](/blogg/armering-till-betongplatta). Begär en kostnadsfri offert." },
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

      { type: "h2", text: "Vi tillverkar din armering" },
      { type: "p", text: "Vi tar fram rätt armering – [svetsad armering och nät](/produkter/svetsad-armering), [lösa järn](/produkter/armeringsjarn) och [klippt och bockade detaljer](/produkter/klippt-och-bockad) – efter din bockningslista och levererar i hela Sverige. Se även våra guider om [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner) och [armering till betongplatta](/blogg/armering-till-betongplatta). Begär en kostnadsfri offert." },
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
