/**
 * Guider/artiklar för SEO. Varje post blir /blogg/[slug].
 * content = array av block (paragraf, underrubrik, lista eller tabell).
 *
 * Fokus: armering-klustret – prefab, klippt & bockad, nät, kamstål, distanser.
 */

import type { Faq } from "@/config/faq";
import type { FigureKey } from "@/components/illustrations";
import { extraPosts } from "@/config/posts";

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
  /** Kommersiell målsida som artikeln leder till (länk under ingressen + CTA). */
  target?: { href: string; label: string };
  /** Grupp på /blogg. Saknas = "guider". */
  category?: PostCategory;
};

export type PostCategory = "dimensioner" | "armering-till" | "guider" | "branscher";

const basePosts: Post[] = [
  {
    slug: "armering-till-betongplatta",
    title: "Armering till betongplatta – vilken typ och hur mycket?",
    metaTitle: "Armering betongplatta – typ & mängd",
    metaDescription:
      "Vilken armering behöver betongplattan och hur mycket går åt? Nät, kantjärn, täckskikt, överlapp och åtgång per m² – plus hur du får grundarmeringen färdig.",
    excerpt:
      "Nät över ytan, kamstål i kanter och under bärande väggar. Riktvärden för dimension, åtgång och placering – och de fel som oftast gör att plattan spricker.",
    date: "2026-08-31",
    updated: "2026-10-09",
    readingMinutes: 8,
    target: { href: "/produkter/grundarmering", label: "Begär offert på grundarmering" },
    category: "armering-till",
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
      { type: "p", text: "En betongplatta på mark armeras nästan alltid med svetsat armeringsnät över hela ytan och kamstål i kantbalken och under bärande väggar. Nätet begränsar sprickor och fördelar lasten, kamstålet tar de koncentrerade lasterna. Dimension och mängd avgör konstruktören, men riktvärdena nedan räcker för att förstå ritningen och räkna ungefärlig åtgång." },
      { type: "p", text: "Har du ritningen kan du få [grundarmeringen](/produkter/grundarmering) färdig: nät, kantbalksarmering och bockade järn, märkta per position så att varje del går att hitta på bygget." },

      { type: "h2", text: "Det här ingår i armeringen till en platta på mark" },
      { type: "ul", items: [
        "Armeringsnät – huvudarmering över hela plattan, oftast 5150 eller 6150.",
        "Kamstål B500B – längsgående kantjärn, hörnjärn och extra järn under bärande väggar.",
        "Kantbalksbyglar – håller ihop kantjärnen, se [kantbalksbygel](/blogg/kantbalksbygel).",
        "Distanser – lyfter nät och järn till rätt höjd i betongen.",
        "Najtråd – binder skarvar och korsningar så att inget flyttar sig vid gjutning.",
      ] },

      { type: "h2", text: "Vanliga dimensioner" },
      { type: "table",
        caption: "Riktvärden. Ritningen avgör dimension, antal lager och placering.",
        head: ["Konstruktion", "Typisk armering", "Placering"],
        rows: [
          ["Uterum, förråd, mindre platta", "Nät 5150 (Ø5 c/c 150)", "Ett lager, centriskt eller i övre halvan"],
          ["Garageplatta", "Nät 6150 + kantjärn Ø10–12", "Nät i fält, förstärkta kanter och portöppning"],
          ["Villaplatta / husgrund", "Nät 6150 + kamstål Ø10–12 i kantbalk", "Nät i fält, extra järn under bärande väggar"],
        ],
      },

      { type: "h2", text: "Hur mycket armering går åt?" },
      { type: "p", text: "Nät: plattans yta plus 10–20 % för överlapp och kapspill. Ju större överlapp och ju sämre arkformatet går jämnt ut i plattans mått, desto mer spill. Ett vanligt ark är cirka 2,35 × 5 m, men formatet varierar mellan leverantörer." },
      { type: "p", text: "Kamstål: kantbalkens längd (plattans omkrets) gånger antal längsgående järn, plus skarvar och hörnjärn. Räkneexempel och tabell finns i [armeringsåtgång per m²](/blogg/armering-atgang-per-m2)." },

      { type: "h2", text: "Så ska armeringen ligga" },
      { type: "ul", items: [
        "På distanser, aldrig direkt på cellplast eller makadam. Nät som ligger på botten gör nästan ingen nytta mot sprickor.",
        "Ett nätlager läggs normalt centriskt eller i övre halvan av plattan. Två lager placeras i över- och underkant.",
        "Nätskarvar överlappar minst två rutor, cirka 300 mm för 150-nät, och binds ihop. Se [skarvlängd och överlapp](/blogg/skarvlangd-armering).",
        "Täckskikt: ofta 25–35 mm mot cellplast eller form, minst 40 mm mot avjämnad mark och minst 75 mm direkt mot jord (Eurokod 2).",
        "Kantjärnen går runt hörnen med hörnjärn – inte avslutade i hörnet.",
      ] },

      { type: "h2", text: "Vanligaste felen" },
      { type: "ul", items: [
        "Nätet trampas ner under gjutningen för att distanserna sitter för glest.",
        "Skarvar utan överlapp eller med bara en ruta.",
        "Kantjärn som slutar i hörnen utan hörnjärn.",
        "Ingen extra armering under bärande innerväggar eller vid golvbrunn.",
      ] },

      { type: "h2", text: "Skicka ritningen – få offert på grundarmeringen" },
      { type: "p", text: "Vi tillverkar [grundarmering](/produkter/grundarmering) efter din ritning eller bockningslista: [armeringsnät](/produkter/armeringsnat), kantbalksbyglar och [klippt och bockade järn](/produkter/klippt-och-bockad), märkta per position. Frakten räknas efter mängd och ort, och vi levererar i hela Sverige, även Norrland. [Begär offert](/offert) med ritningen bifogad." },
      { type: "p", text: "Ska plattan bära ett garage eller en pool? Se [armering till garageplatta](/blogg/armering-till-garage) och [armering till pool](/blogg/armering-till-pool)." },
      { type: "p", text: "Vi levererar armering till betongplattor i hela landet – från [Stockholm](/armering/stockholm) i öster till [Göteborg](/armering/goteborg) i väster och orterna däremellan." },
    ],
    faqs: [
      { q: "Behöver jag en armeringsritning till platta på mark?", a: "För en husgrund ja – armeringen ska följa konstruktörens ritning med nät, kantjärn, byglar, täckskikt och skarvlängder. Har du ritningen tar vi fram bockningslistan åt dig." },
      { q: "Kan jag få offert utan ritning?", a: "För en enklare platta, som uterum eller förråd, räcker mått, tjocklek och vad plattan ska bära – då föreslår vi nät och kantjärn. En husgrund ska däremot dimensioneras av konstruktör." },
      { q: "Vilken armering behövs till en betongplatta?", a: "Oftast nät 5150 eller 6150 över ytan och kamstål Ø10–12 i kantbalk och under bärande väggar. Ritningen avgör." },
      { q: "Hur mycket armeringsnät går åt per kvadratmeter?", a: "Plattans yta plus 10–20 % för överlapp och kapspill. Exakt antal ark beror på arkformatet och hur det går ut i plattans mått." },
      { q: "Var i plattan ska nätet ligga?", a: "På distanser, centriskt eller i övre halvan av plattan – aldrig på botten. Två lager läggs i över- och underkant. Täckskiktet står på ritningen." },
      { q: "Behöver en liten platta armering?", a: "Ja, ett nät begränsar sprickor även i en liten platta. Bara mycket små, obelastade ytor klarar sig utan." },
    ],
  },
  {
    slug: "armeringsnat-storlekar-och-matt",
    title: "Armeringsnät – storlekar, mått och rätt val till plattan",
    metaTitle: "Armeringsnät – storlekar & mått",
    metaDescription:
      "Armeringsnät 5150, 6150, 8150 och 10150: vad beteckningen betyder, vikt per m², arkformat och vilket nät som passar plattan. Beställ nät efter mått.",
    excerpt:
      "Vad 5150 och 6150 betyder, vad näten väger per m², vanliga arkformat och vilket nät som brukar väljas till uterum, garage, villagrund och industrigolv.",
    date: "2026-08-31",
    updated: "2026-10-09",
    readingMinutes: 6,
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    category: "dimensioner",
    keywords: [
      "armeringsnät",
      "armeringsnät storlekar",
      "armeringsnät mått",
      "armeringsnät till platta",
      "armeringsnät 5x150",
    ],
    content: [
      { type: "p", text: "Ett armeringsnät anges med tråddiameter och rutstorlek. 6150 betyder Ø6 mm tråd med 150 mm mellan trådarna (skrivs även 6x150 eller Ø6 c/c 150). Till uterum och mindre plattor räcker ofta 5150, till garage och villagrund är 6150 vanligast och tyngre golv kräver 8150 eller grövre." },
      { type: "p", text: "Vi levererar [armeringsnät](/produkter/armeringsnat) i standardformat och tillverkar nät efter mått när arken inte går jämnt ut i plattan." },

      { type: "h2", text: "Storlekar, vikt och användning" },
      { type: "table",
        caption: "Teoretiska värden för kvadratiska nät med samma tråd i båda riktningar. Ritningen avgör vilket nät som krävs.",
        head: ["Nät", "Tråd / ruta", "Vikt kg/m²", "Area mm²/m", "Vanlig användning"],
        rows: [
          ["5150", "Ø5 / 150 mm", "2,05", "131", "Uterum, förråd, mindre plattor"],
          ["6150", "Ø6 / 150 mm", "2,96", "189", "Garageplatta, villaplatta på mark"],
          ["7150", "Ø7 / 150 mm", "4,03", "257", "Plattor med högre krav på sprickbredd"],
          ["8150", "Ø8 / 150 mm", "5,27", "335", "Verkstads- och lagergolv, uppfarter"],
          ["10150", "Ø10 / 150 mm", "8,23", "524", "Industrigolv, tunga laster"],
        ],
      },
      { type: "p", text: "Fördjupning per nät: [5150](/blogg/armeringsnat-5150), [6150](/blogg/armeringsnat-6150), [7150](/blogg/armeringsnat-7150), [8150](/blogg/armeringsnat-8150) och [10150](/blogg/armeringsnat-10150). Vikten är bra att ha när du jämför offerter som anges per kilo med offerter per ark eller m². Arean (mm² stål per meter) är det konstruktören räknar med – två nät med samma area är likvärdiga oavsett tråd och ruta." },

      { type: "h2", text: "Arkformat" },
      { type: "p", text: "Standardnät säljs i ark, ofta cirka 2,35 × 5 m. Formatet varierar mellan leverantörer, så kontrollera måtten innan du räknar antal ark. Går arken dåligt ut i plattans mått blir spillet stort – då kan nät kapade efter mått eller [specialnät](/produkter/svetsad-armering) med annan tråd eller rutstorlek löna sig." },

      { type: "h2", text: "Så väljer du nät" },
      { type: "ul", items: [
        "Uterum, förråd, altanplatta: 5150, ett lager.",
        "Garage och villagrund: 6150, kompletterat med kamstål i kantbalken.",
        "Uppfart, verkstad, lager: 8150 eller två lager enligt ritning.",
        "Krav på liten sprickbredd eller tunga punktlaster: konstruktören väljer grövre nät eller nät plus kamstål.",
      ] },

      { type: "h2", text: "Överlapp och placering" },
      { type: "p", text: "Skarvar överlappar minst två rutor, cirka 300 mm för 150-nät, och binds ihop. Klipp bort hörnet där fyra ark möts så att det inte blir fyra lager på samma ställe. Mer i [skarvlängd och överlapp](/blogg/skarvlangd-armering)." },
      { type: "figure", illustration: "mesh-overlap", caption: "Nätskarv med minst två rutors överlapp, bunden med najtråd." },
      { type: "p", text: "Nätet läggs på distanser, centriskt eller i övre halvan av plattan – inte på botten. Helheten finns i [armering till betongplatta](/blogg/armering-till-betongplatta)." },

      { type: "h2", text: "Beställ nät efter plattans mått" },
      { type: "p", text: "Skicka plattans mått eller ritningen, så räknar vi antal ark, överlapp och distanser och lämnar offert på [armeringsnät](/produkter/armeringsnat) med frakt efter mängd och ort. [Begär offert](/offert)." },
      { type: "p", text: "Behöver du nät på annan ort? Vi skickar armeringsnät bland annat till [Malmö](/armering/malmo) och [Uppsala](/armering/uppsala) – och resten av landet." },
    ],
    faqs: [
      { q: "Vad betyder 5x150 eller 5150 på ett armeringsnät?", a: "Ø5 mm tråd med 150 mm mellan trådarna i båda riktningar. Första siffran är tråddiametern, de tre sista rutstorleken i mm." },
      { q: "Vilket armeringsnät ska jag ha till en garageplatta?", a: "Vanligen 6150, med kamstål i kantbalken och vid portöppningen. Tunga fordon kan kräva grövre nät eller två lager – ritningen avgör." },
      { q: "Vilka mått har ett armeringsnät?", a: "Ett vanligt ark är cirka 2,35 × 5 m, men formatet varierar mellan leverantörer. Nät kan också tillverkas efter mått." },
      { q: "Vad väger ett armeringsnät?", a: "5150 väger cirka 2,05 kg/m² och 6150 cirka 2,96 kg/m². Ett ark 6150 på 2,35 × 5 m väger alltså runt 35 kg." },
    ],
  },
  {
    slug: "armeringsjarn-dimensioner",
    title: "Armeringsjärn – dimensioner och när du använder vad",
    metaTitle: "Armeringsjärn dimensioner – vilken till vad",
    metaDescription:
      "Armeringsjärn finns i Ø6–Ø32. Se vilken dimension som används till platta, kantbalk, byglar och balkar – med tvärsnittsarea och hur du läser ritningen.",
    excerpt:
      "Ø6 till Ø32 – vilken dimension som används till vad, tvärsnittsarea per järn och hur du tolkar en ritningsbeteckning som Ø12 s200.",
    date: "2026-08-31",
    updated: "2026-10-09",
    readingMinutes: 5,
    target: { href: "/produkter/armeringsjarn", label: "Köp armeringsjärn" },
    category: "dimensioner",
    keywords: [
      "armeringsjärn",
      "armeringsjärn dimensioner",
      "armeringsjärn 8 mm",
      "kamstål",
      "armeringsstål",
    ],
    content: [
      { type: "p", text: "Armeringsjärn i kamstål B500B finns i dimensionerna Ø6, 8, 10, 12, 16, 20, 25 och 32 mm. I villagrunder och plattor på mark används mest Ø8–Ø12, byglar görs oftast i Ø8–Ø10 och balkar, pelare och anläggning kräver Ø16 och grövre." },
      { type: "p", text: "Vi levererar [armeringsjärn i 6 och 12 m](/produkter/armeringsjarn) och kapar och bockar efter lista. Om stålet i sig – B500B, K500C-T, vikt per meter – läser du i [armeringsstål](/blogg/armeringsstal)." },

      { type: "h2", text: "Dimension, area och typisk användning" },
      { type: "table",
        caption: "Area enligt nominell diameter. Användningen är riktvärden – ritningen avgör.",
        head: ["Dimension", "Area per järn", "Typisk användning"],
        rows: [
          ["Ø6", "28,3 mm²", "Byglar i lätta konstruktioner, distansjärn"],
          ["Ø8", "50,3 mm²", "Kantbalksbyglar, kantförstärkning, mindre balkar"],
          ["Ø10", "78,5 mm²", "Byglar, kantjärn, plattor"],
          ["Ø12", "113 mm²", "Kantbalkar och bärande partier i villagrund"],
          ["Ø16", "201 mm²", "Balkar, grundsulor, stödmurar"],
          ["Ø20", "314 mm²", "Balkar och pelare"],
          ["Ø25", "491 mm²", "Tunga konstruktioner"],
          ["Ø32", "804 mm²", "Anläggning, broar, grova pelare"],
        ],
      },
      { type: "figure", illustration: "rebar-diameters", caption: "Armeringsjärn Ø6–Ø32 i skala." },

      { type: "h2", text: "Så läser du ritningen" },
      { type: "p", text: "På armeringsritningen står dimension och avstånd, till exempel ”Ø12 s200 ök”. Det betyder Ø12 med 200 mm centrumavstånd i överkant. Antal järn per meter är 1000 / 200 = 5, och stålarean blir 5 × 113 = 565 mm² per meter." },
      { type: "table",
        caption: "Stålarea per meter (mm²/m) vid olika centrumavstånd.",
        head: ["Dimension", "s150", "s200", "s300"],
        rows: [
          ["Ø8", "335", "252", "168"],
          ["Ø10", "524", "393", "262"],
          ["Ø12", "754", "565", "377"],
          ["Ø16", "1 340", "1 005", "670"],
        ],
      },
      { type: "p", text: "Tabellen är praktisk när ett järn måste bytas: Ø10 s150 (524 mm²/m) och Ø12 s200 (565 mm²/m) är ungefär likvärdiga. Ett byte ska ändå alltid godkännas av konstruktören." },

      { type: "h2", text: "Kamstål eller nät?" },
      { type: "p", text: "I en platta på mark kombineras de: nät över ytan, kamstål i kantbalk, hörn och under bärande väggar. Jämförelsen finns i [armeringsnät eller armeringsjärn](/blogg/armeringsnat-eller-armeringsjarn)." },

      { type: "h2", text: "Raka längder eller kapat och bockat?" },
      { type: "p", text: "Raka 6- eller 12-metersstänger passar när du kapar och bockar själv. Ska du ha byglar, hörnjärn eller många olika längder är [klippt och bockad armering](/produkter/klippt-och-bockad) ofta enklare: järnen kommer färdiga, buntade och märkta per position." },

      { type: "h2", text: "Beställ kamstål i rätt dimension" },
      { type: "p", text: "Skicka ritningen eller en lista med dimension, längd och antal så lämnar vi offert på [armeringsjärn](/produkter/armeringsjarn) – raka eller färdigbockade, med frakt efter mängd och ort. [Begär offert](/offert)." },
      { type: "p", text: "Vi levererar kamstål i alla dimensioner till bygg- och anläggningsprojekt i bland annat [Västerås](/armering/vasteras) och [Örebro](/armering/orebro)." },
    ],
    faqs: [
      { q: "Vilka dimensioner finns på armeringsjärn?", a: "Ø6, 8, 10, 12, 16, 20, 25 och 32 mm. I platta på mark och villagrund används mest Ø8–Ø12." },
      { q: "Vilken dimension på armeringsjärn till en betongplatta?", a: "Kantbalken armeras ofta med Ø10–Ø12 och byglar i Ø8, medan ytan armeras med nät. Ritningen avgör." },
      { q: "Vad betyder Ø12 s200 på ritningen?", a: "Ø12 kamstål med 200 mm centrumavstånd, alltså fem järn per meter. Står det ök eller uk avses överkant respektive underkant." },
      { q: "Kan jag byta Ø12 mot Ø10?", a: "Bara om stålarean blir minst lika stor och konstruktören godkänner det. Ø10 s150 ger ungefär samma area som Ø12 s200." },
    ],
  },
  {
    slug: "armering-till-pool",
    title: "Armering till pool – så armeras poolens betong",
    metaTitle: "Armering till pool – botten & väggar",
    metaDescription:
      "Så armeras en gjuten betongpool: botten, väggar och hörn, exponeringsklass XD2, täckskikt och sprickbredd. Skicka ritningen – få offert på poolarmeringen.",
    excerpt:
      "Botten, väggar och hörn armeras för att poolen ska hålla tätt. Om exponeringsklass, täckskikt, sprickbredd och de misstag som ger läckage.",
    date: "2026-08-31",
    updated: "2026-10-09",
    readingMinutes: 5,
    target: { href: "/produkter/poolarmering", label: "Begär offert på poolarmering" },
    category: "armering-till",
    keywords: [
      "armering till pool",
      "armera betongpool",
      "pool armering",
      "gjuta pool armering",
    ],
    content: [
      { type: "p", text: "En gjuten betongpool armeras i både botten och väggar, oftast med två lager kamstål eller nät – ett mot varje yta – och med extra järn i hörn och runt genomföringar. Armeringen ska hålla sprickorna så små att poolen förblir tät, och det kräver mer stål än en vanlig platta på mark." },
      { type: "p", text: "Har du konstruktörens ritning tillverkar vi [poolarmeringen](/produkter/poolarmering): bockade väggjärn, hörnjärn och nät, märkta per position." },

      { type: "h2", text: "Var sitter armeringen?" },
      { type: "table",
        caption: "Princip. Dimension, c/c-avstånd och antal lager står på ritningen.",
        head: ["Del", "Vad den tar upp", "Typisk armering"],
        rows: [
          ["Bottenplatta", "Vattnets tyngd, marktryck, upptryck från grundvatten", "Två lager, kamstål eller nät"],
          ["Väggar", "Vattentryck inifrån, jordtryck utifrån", "Vertikala och horisontella järn i två lager"],
          ["Hörn och vägg mot botten", "Störst moment och sprickrisk", "Bockade hörnjärn (L- och U-former) som binder ihop delarna"],
          ["Genomföringar, trappa, skimmer", "Sprickor från urtag", "Extra järn runt öppningen och diagonalt i hörnen"],
        ],
      },
      { type: "p", text: "Kamstål i storleksordningen Ø10–Ø12 är vanligt, men dimension och avstånd bestäms av poolens djup, storlek och markförhållanden." },

      { type: "h2", text: "Exponeringsklass och täckskikt" },
      { type: "p", text: "En pool med klorerat vatten hamnar normalt i exponeringsklass XD2 enligt SS-EN 206 – samma klass som används för simbassänger. Det ger större täckskikt och högre krav på betongen än en platta på mark. Mot jord på utsidan krävs dessutom minst 75 mm om betongen gjuts direkt mot marken (Eurokod 2)." },
      { type: "p", text: "Armeringen ska ligga på distanser så att täckskiktet blir lika runt om. Ett enda ställe där järnet ligger mot formen räcker för att rost ska börja där." },

      { type: "h2", text: "Sprickbredd avgör tätheten" },
      { type: "p", text: "I en vattentät konstruktion begränsar konstruktören sprickbredden, och det görs med fler och tätare järn – inte bara grövre. Därför har poolarmering ofta mindre c/c-avstånd än vad lasten i sig skulle kräva. Gjutfogar mellan botten och vägg tätas med fogband eller injekteringsslang enligt ritningen." },

      { type: "h2", text: "Misstag som ger läckage" },
      { type: "ul", items: [
        "För litet täckskikt – armeringen rostar och betongen spjälkar.",
        "Väggarmering utan hörnjärn – sprickor i övergången vägg–botten.",
        "Ingen extra armering runt genomföringar och skimmer.",
        "Armering som ligger mot formen i stället för på distans.",
        "Gjutfog utan tätning mellan botten och vägg.",
      ] },

      { type: "h2", text: "Skicka ritningen – få offert på poolarmeringen" },
      { type: "p", text: "Vi tillverkar [poolarmering](/produkter/poolarmering) efter konstruktörens ritning: botten, väggar, hörnjärn och distanser, märkt per position och levererat till bygget i hela Sverige. Saknar du bockningslista tar vi fram den från ritningen. [Begär offert](/offert). Grunderna för plattan finns i [armering till betongplatta](/blogg/armering-till-betongplatta)." },
      { type: "p", text: "Bygger du pool i [Helsingborg](/armering/helsingborg), [Linköping](/armering/linkoping) eller på annan ort levererar vi poolarmeringen dit." },
    ],
    faqs: [
      { q: "Hur armeras en betongpool?", a: "Botten och väggar armeras med kamstål eller nät, normalt i två lager. Hörn, övergången vägg–botten och genomföringar förstärks med bockade järn. Konstruktören dimensionerar." },
      { q: "Vilken dimension på armering till pool?", a: "Ofta Ø10–Ø12 i väggar och botten, men dimension och c/c-avstånd beror på poolens djup, mått och mark och står på ritningen." },
      { q: "Vilken exponeringsklass har en pool?", a: "En pool med klorerat vatten räknas normalt till XD2 enligt SS-EN 206. Det ger större täckskikt och högre krav på betongen." },
      { q: "Behöver jag en konstruktör till poolen?", a: "Ja. En gjuten pool ska vara tät och klara vatten- och jordtryck, och det kräver beräkning. Med ritningen tar vi fram bockningslistan och tillverkar armeringen." },
    ],
  },
  {
    slug: "armering-atgang-per-m2",
    title: "Hur mycket armering går åt per m²?",
    metaTitle: "Armeringsåtgång per m² – så räknar du",
    metaDescription:
      "Hur mycket armering går åt per m²? Räkna nät, kantjärn, byglar och distanser – med komplett exempel för en platta på 6 × 8 m. Få exakt mängd i offerten.",
    excerpt:
      "Tumregler för nät, kantjärn, byglar och distanser – och ett komplett räkneexempel för en platta på 6 × 8 m, från antal ark till kilo stål.",
    date: "2026-08-31",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    keywords: [
      "armering åtgång",
      "armering per m2",
      "hur mycket armeringsnät",
      "räkna armering platta",
    ],
    content: [
      { type: "p", text: "Nät: plattans yta plus 10–20 % för överlapp och kapspill. Kamstål: kantbalkens längd gånger antal längsgående järn, plus skarvar. Till det kommer byglar, hörnjärn och distanser. En vanlig villa- eller garageplatta landar ofta på 6–8 kg stål per m², men det är ritningen som avgör." },
      { type: "p", text: "Vill du räkna direkt finns [armeringskalkylatorn](/armeringskalkylator). Skickar du mått eller ritning räknar vi mängden åt dig och lämnar offert på [armeringsnät](/produkter/armeringsnat) och järn." },

      { type: "h2", text: "Armeringsnät" },
      { type: "p", text: "Med 300 mm överlapp i båda riktningar täcker ett ark på 2,35 × 5 m bara cirka 2,05 × 4,7 m, alltså drygt 80 % av arkets yta. Spillet blir därför 10–20 % beroende på överlapp och hur arken går ut i plattans mått." },
      { type: "table",
        caption: "Riktvärde för nät att beställa, inklusive överlapp och spill.",
        head: ["Plattans yta", "Nät att beställa (ca)", "Ark 2,35 × 5 m (ca)"],
        rows: [
          ["20 m²", "23–24 m²", "2–3"],
          ["50 m²", "57–60 m²", "5–6"],
          ["100 m²", "110–120 m²", "10–11"],
        ],
      },

      { type: "h2", text: "Kamstål i kantbalken" },
      { type: "p", text: "Räkna plattans omkrets gånger antal längsgående järn, och lägg till cirka 10 % för skarvar och hörnjärn. Fyra järn (två i överkant, två i underkant) är vanligt i en villagrund." },

      { type: "h2", text: "Räkneexempel: platta 6 × 8 m" },
      { type: "table",
        caption: "Exempel med nät 6150, kantbalk med 4 × Ø12 och byglar Ø8 c/c 300. Din ritning kan se annorlunda ut.",
        head: ["Post", "Beräkning", "Mängd"],
        rows: [
          ["Nät 6150", "48 m² + 15–20 % → 5–6 ark", "ca 175–210 kg"],
          ["Kantjärn Ø12", "28 m × 4 järn + 10 % ≈ 125 m", "ca 110 kg"],
          ["Kantbalksbyglar Ø8", "28 m / 0,3 ≈ 94 st à ca 1,5 m", "ca 55 kg"],
          ["Distanser", "minst en per m² under nätet + under kantjärnen", "ca 60–100 st"],
          ["Totalt stål", "", "ca 340–375 kg, 7–8 kg/m²"],
        ],
      },
      { type: "p", text: "Vikterna bygger på 2,96 kg/m² för 6150, 0,888 kg/m för Ø12 och 0,395 kg/m för Ø8. Fler dimensioner finns i [armeringsstål – vikt per meter](/blogg/armeringsstal)." },

      { type: "h2", text: "Det som ofta glöms" },
      { type: "ul", items: [
        "Extra järn under bärande innerväggar och runt golvbrunnar.",
        "Hörnjärn så att kantjärnen går runt hörnen.",
        "Skarvlängd på kantjärnen – se [skarvlängd och överlapp](/blogg/skarvlangd-armering).",
        "Najtråd till skarvar och korsningar.",
      ] },

      { type: "h2", text: "Låt oss räkna exakt" },
      { type: "p", text: "Skicka plattans mått eller ritningen så räknar vi ark, kantjärn, byglar och distanser och lämnar offert med frakt efter mängd och ort. Nät, [kamstål](/produkter/armeringsjarn) och [bockade byglar](/produkter/klippt-och-bockad) kommer i samma leverans. [Begär offert](/offert)." },
      { type: "p", text: "Vi räknar åtgången och levererar färdig armering till bland annat [Jönköping](/armering/jonkoping) och [Norrköping](/armering/norrkoping)." },
    ],
    faqs: [
      { q: "Hur mycket armeringsnät går åt per m²?", a: "Plattans yta plus 10–20 % för överlapp och spill. En platta på 50 m² kräver cirka 57–60 m² nät, alltså 5–6 ark på 2,35 × 5 m." },
      { q: "Hur räknar man ut åtgången av kamjärn?", a: "Omkretsen gånger antal längsgående järn plus cirka 10 % för skarvar och hörn. En platta på 6 × 8 m med fyra järn runt om kräver cirka 125 löpmeter." },
      { q: "Hur många kilo armering går det åt per m²?", a: "En villa- eller garageplatta med nät 6150 och kantbalk hamnar ofta på 6–8 kg/m². Grövre nät, två lager eller tunga laster ger mer." },
      { q: "Kan ni räkna mängden åt mig?", a: "Ja. Skicka mått eller ritning så räknar vi fram nät, kantjärn, byglar och distanser i offerten." },
    ],
  },
  {
    slug: "distanser-tackskikt-armering",
    title: "Distanser och täckskikt – så placeras armeringen rätt",
    metaTitle: "Täckskikt armering – distanser & placering",
    metaDescription:
      "Täckskikt är betongen mellan armering och yta. Riktvärden mot cellplast, mark och jord, rätt distans och hur tätt den ska sitta. Beställ distanser.",
    excerpt:
      "Riktvärden för täckskikt mot cellplast, mark och jord, vilken distans som passar vilket underlag och hur tätt de ska sitta.",
    date: "2026-08-31",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/produkter/distanser", label: "Beställ distanser" },
    keywords: [
      "täckskikt armering betong",
      "täckskikt betong",
      "täckskikt armering",
      "distanser armering",
      "armering placering",
      "betongtäckning armering",
    ],
    content: [
      { type: "p", text: "Täckskiktet är betongen mellan armeringen och närmaste yta. Det skyddar stålet mot rost och ger betongen grepp om järnet. Distanserna är det som håller armeringen på rätt avstånd tills betongen har härdat – utan dem blir täckskiktet noll där nätet sjunker ner." },
      { type: "p", text: "Rätt distanser följer med när du beställer armeringen – se [distanser och nätstöd](/produkter/distanser)." },

      { type: "h2", text: "Hur stort täckskikt?" },
      { type: "p", text: "Täckskiktet står på ritningen och beror på exponeringsklass, livslängd och vad betongen gjuts mot. Riktvärden för platta på mark:" },
      { type: "table",
        caption: "Riktvärden enligt Eurokod 2 och svensk praxis. Ritningens nominella täckskikt gäller.",
        head: ["Betongen gjuts mot", "Täckskikt (ca)", "Distanshöjd"],
        rows: [
          ["Cellplast eller form", "25–35 mm", "Samma som täckskiktet"],
          ["Avjämnad mark, makadam med avjämning", "minst 40 mm", "40–50 mm"],
          ["Direkt mot jord", "minst 75 mm", "75 mm eller mer"],
          ["Fuktig eller kloridutsatt miljö (pool, garage med vägsalt)", "Större, enligt exponeringsklass", "Enligt ritning"],
        ],
      },
      { type: "p", text: "Tabellvärden per exponeringsklass (XC, XD, XS) finns i [täckskikt och exponeringsklass](/blogg/tackskikt-exponeringsklass). Mät alltid till det yttersta järnet – ofta bygeln – inte till huvudjärnet." },

      { type: "h2", text: "Vilken distans till vilket underlag?" },
      { type: "table",
        caption: "Välj distans efter underlag och vilket lager den ska bära.",
        head: ["Distans", "Passar till"],
        rows: [
          ["Plaststol med bred fot", "Nät och järn på cellplast – trycks inte ner"],
          ["Betongdistans (kloss)", "Mot mark och makadam, tunga korgar, kyla"],
          ["Linjedistans / list", "Långa sträckor, kantbalkar, väggar"],
          ["Nätstöd / stödbockar", "Överkantsnät i två lager"],
        ],
      },
      { type: "figure", illustration: "cover-layer", caption: "Distanserna lyfter armeringen så att den ligger inne i betongen med rätt täckskikt." },

      { type: "h2", text: "Hur tätt ska distanserna sitta?" },
      { type: "p", text: "Så tätt att armeringen inte sviktar när någon går på den under gjutningen – i praktiken minst en distans per m² under nät och med under en meters mellanrum under kantjärn. Tunna nät och överkantsnät behöver tätare stöd än grova järn." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Nätet läggs direkt på cellplasten och dras upp med krok under gjutningen – det hamnar sällan rätt.",
        "Plaststolar med smal fot som trycks in i cellplasten.",
        "För glest mellan distanserna så att nätet trampas ner.",
        "Täckskiktet mäts till huvudjärnet i stället för till bygeln.",
      ] },

      { type: "h2", text: "Beställ distanser med armeringen" },
      { type: "p", text: "Säg vad du gjuter mot och vilket täckskikt ritningen anger, så räknar vi rätt höjd och antal [distanser](/produkter/distanser) och skickar dem i samma leverans som nät och järn. [Begär offert](/offert). Helheten finns i [armering till betongplatta](/blogg/armering-till-betongplatta)." },
      { type: "p", text: "Vi skickar distanser och armering ända upp till [Umeå](/armering/umea) och [Sundsvall](/armering/sundsvall) – hela Sverige, även norrut." },
    ],
    faqs: [
      { q: "Hur stort täckskikt ska armering ha i betong?", a: "Det står på ritningen och beror på exponeringsklass och vad betongen gjuts mot. Riktvärden: 25–35 mm mot cellplast eller form, minst 40 mm mot avjämnad mark och minst 75 mm direkt mot jord (Eurokod 2)." },
      { q: "Vad är täckskikt på armering?", a: "Betongen mellan armeringen och närmaste yta. Den skyddar stålet mot fukt och korrosion och ger vidhäftning." },
      { q: "Vad händer om täckskiktet är för litet?", a: "Stålet rostar, rosten tar större plats än stålet och spräcker loss betongen (spjälkning). Bärförmågan försämras med tiden." },
      { q: "Hur tätt ska distanser sitta?", a: "Minst en per m² under nät och under en meters mellanrum under kantjärn, eller tätare om armeringen sviktar när man går på den." },
      { q: "Vilken distans ska jag ha på cellplast?", a: "Plaststolar eller distanser med bred fot som inte trycks ner i cellplasten. Höjden ska motsvara täckskiktet på ritningen." },
    ],
  },
  {
    slug: "klippt-bockad-armering",
    title: "Klippt och bockad armering – vad är det?",
    metaTitle: "Bockning av armering – klippt & bockad efter lista",
    metaDescription:
      "Klippt och bockad armering kapas och bockas i maskin efter din bockningslista och levereras märkt per position. Så går det till och vad du skickar.",
    excerpt:
      "Armeringsjärn som kapas och bockas i maskin efter bockningslistan och kommer buntade och märkta per position. Så går det till och vad du behöver skicka.",
    date: "2026-08-31",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ klippt & bockad armering" },
    keywords: [
      "klippt och bockad armering",
      "bockad armering",
      "kapad armering",
      "bockningslista armering",
    ],
    content: [
      { type: "p", text: "Klippt och bockad armering är armeringsjärn som kapas och bockas i maskin efter din bockningslista eller ritning. Järnen kommer buntade och märkta per position, så att varje bunt kan läggas på rätt plats utan att något mäts eller kapas på bygget." },
      { type: "p", text: "Vi tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad) i Ø6–Ø32, kamstål B500B, och levererar i hela Sverige." },

      { type: "h2", text: "Så går det till" },
      { type: "ol", items: [
        "Du skickar bockningslista eller ritning.",
        "Saknas lista tar vi fram den ur ritningen och du godkänner den.",
        "Järnen kapas och bockas i maskin med rätt dorndiameter för varje dimension.",
        "Varje position buntas och märks med positionsnummer, dimension och antal.",
        "Leverans till bygget, gärna samordnad med nät, distanser och korgar.",
      ] },

      { type: "h2", text: "Vanliga bockade detaljer" },
      { type: "table",
        caption: "Exempel på detaljer som kapas och bockas efter bockningslista.",
        head: ["Detalj", "Typform", "Används till"],
        rows: [
          ["Sluten bygel", "N", "Balkar och pelare"],
          ["U-bygel", "C", "Kantbalkar, bjälklagskanter, skarvar"],
          ["Villabygel", "K", "Kantbalk i platta på mark"],
          ["Hörnjärn / L-järn", "B", "Kanter och hörn i plattor och väggar"],
          ["Raka längder", "A", "Huvudarmering kapad i rätt längd"],
        ],
      },
      { type: "figure", illustration: "bending-shapes", caption: "Vanliga former – från raka stänger till byglar." },
      { type: "p", text: "Alla typformer med måttbeteckningar finns som [utskrivbart blad (PDF)](/downloads/typformer-bockning-armeringsproffs.pdf)." },

      { type: "h2", text: "Det här skickar du för offert" },
      { type: "ul", items: [
        "Bockningslista (Excel, CSV eller PDF) – eller konstruktionsritningen.",
        "Leveransort och ungefärligt datum när armeringen behövs.",
        "Om leveransen ska delas upp per gjutetapp.",
      ] },
      { type: "p", text: "Vill du fylla i listan själv finns en [mall för bockningslista (CSV)](/bockningslista-mall.csv). Hur den fylls i står i [bockningslista – så gör du](/blogg/bockningslista-sa-gor-du)." },

      { type: "h2", text: "När lönar det sig?" },
      { type: "p", text: "Ju fler byglar, hörn och olika längder, desto mer tid sparas. En villagrund har ofta 100–200 kantbalksbyglar – att bocka dem för hand tar dagar och ger ojämna mått. För en liten platta med mest nät och några raka järn kan du klara dig med raka stänger. Ofta blir det en kombination." },
      { type: "ul", items: [
        "Ingen kapning och bockning på bygget.",
        "Lika mått i hela serien – byglarna passar huvudjärnen.",
        "Rätt bockningsradie enligt Eurokod 2.",
        "Mindre spill, eftersom längderna optimeras ur hela listan.",
      ] },

      { type: "h2", text: "Skicka listan – få pris på hela armeringen" },
      { type: "p", text: "Skicka bockningslistan eller ritningen så får du offert på [klippt och bockad armering](/produkter/klippt-och-bockad) tillsammans med [nät](/produkter/armeringsnat) och [raka järn](/produkter/armeringsjarn), med frakt efter mängd och ort. [Begär offert](/offert)." },
      { type: "p", text: "Klippt och bockad armering levererar vi till byggen i bland annat [Stockholm](/armering/stockholm) och [Göteborg](/armering/goteborg)." },
    ],
    faqs: [
      { q: "Vad betyder klippt och bockad armering?", a: "Att armeringsjärnen kapas och bockas i maskin efter en bockningslista och levereras färdiga, buntade och märkta per position." },
      { q: "Vad behöver jag skicka för offert?", a: "En bockningslista eller konstruktionsritningen, leveransort och när armeringen behövs. Saknas lista tar vi fram den ur ritningen." },
      { q: "Kan jag beställa en liten mängd?", a: "Ja. Skicka listan även om det bara gäller några positioner – frakten räknas efter mängd och ort, och offerten visar vad det blir." },
      { q: "Hur märks järnen?", a: "Varje bunt märks med positionsnummer från bockningslistan, så att du ser direkt var järnen ska ligga." },
    ],
  },
  {
    slug: "armeringskorgar-palarmering",
    title: "Armeringskorg – typer och användning i pålar, pelare och balkar",
    metaTitle: "Armeringskorg – typer och användning",
    metaDescription:
      "Armeringskorgar för pålar, pelare, balkar och plintar: svetsad eller bunden, vad du anger vid beställning och hur korgen lyfts. Få offert efter ritning.",
    excerpt:
      "Huvudjärn och byglar monterade till en färdig korg för påle, pelare, balk eller plint. Typer, svetsad eller bunden, och vad du anger när du beställer.",
    date: "2026-09-05",
    updated: "2026-10-09",
    readingMinutes: 6,
    target: { href: "/produkter/armeringskorgar", label: "Beställ armeringskorgar" },
    keywords: [
      "armeringskorg",
      "prefabricerad armering",
      "pelarkorg",
      "pålkorg",
      "pelararmering",
      "balkkorg",
    ],
    content: [
      { type: "p", text: "En armeringskorg är huvudjärn och byglar som binds eller svetsas ihop i verkstad till en färdig korg för en pelare, balk, påle eller plint. På bygget lyfts korgen på plats och gjuts in – det som annars tar timmar att binda i formen tar minuter."},
      { type: "p", text: "Färdiga korgar beställer du som [armeringskorgar](/produkter/armeringskorgar), och korgar till betongpålar som [pålarmering](/produkter/palarmering)." },

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
      { type: "p", text: "Enklast är att skicka konstruktionsritningen. Saknas bockningslista tar vi fram den, och korgarna märks per position så att de hamnar rätt vid montaget." },

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
      { type: "p", text: "Skicka ritningen med antal korgar per position så lämnar vi offert på [armeringskorgar](/produkter/armeringskorgar) eller [pålarmering](/produkter/palarmering) – svetsade eller bundna, märkta per position, med frakt efter mängd och ort. [Begär offert](/offert). Lösa byglar och järn till samma projekt finns i [klippt och bockad armering](/blogg/klippt-bockad-armering)." },
      { type: "p", text: "Vi levererar färdiga armeringskorgar till bland annat [Malmö](/armering/malmo) och [Uppsala](/armering/uppsala) – och resten av landet." },
    ],
    faqs: [
      { q: "Vad kostar en armeringskorg?", a: "Det beror på mängden stål, antal byglar, om korgen svetsas eller binds och hur många likadana korgar som beställs. Skicka ritningen så får du pris och leveranstid i offerten." },
      { q: "Vad är en armeringskorg?", a: "En armeringskorg är färdigmonterad armering för ett bärande element som en pelare, balk eller påle – huvudjärn och byglar sammanfogade till en korg som lyfts på plats och gjuts in." },
      { q: "Vad är pålarmering?", a: "Pålarmering är armeringskorgen som gjuts in i en betongpåle, oftast med längsgående huvudjärn och spiral- eller enkelbyglar. Utförandet dimensioneras efter pålens laster och längd enligt ritning." },
      { q: "Hur långa korgar går att transportera?", a: "Det beror på korgens tvärsnitt och transporten. Mycket långa korgar kan delas och skarvas på plats enligt ritningen – ange längden i förfrågan så återkommer vi med upplägget." },
      { q: "Kan ni tillverka korgar efter vår ritning?", a: "Ja, vi bygger korgarna efter er konstruktionsritning med rätt huvudjärn, byglar, bygelavstånd och täckskikt, och märker varje korg med position för montage." },
    ],
  },
  {
    slug: "bestalla-armering",
    title: "Beställa armering – så går det till steg för steg",
    metaTitle: "Beställa armering – steg för steg",
    metaDescription:
      "Så beställer du armering: vad du skickar, vad offerten ska innehålla och hur leveransen går till. Ritning, bockningslista eller mått räcker för att börja.",
    excerpt:
      "Fyra steg från ritning till leverans – vad du skickar, vad en bra offert innehåller och vad du ska kontrollera innan du godkänner.",
    date: "2026-09-05",
    updated: "2026-10-09",
    readingMinutes: 5,
    target: { href: "/offert", label: "Begär offert" },
    keywords: [
      "armering leverans",
      "beställa armering online",
      "beställa armering",
      "armeringsleverantör",
      "köpa armering",
      "beställa prefab armering",
      "offert armering",
    ],
    content: [
      { type: "p", text: "Att beställa armering går till i fyra steg: du skickar underlag, får en offert med pris, frakt och leveranstid, godkänner, och armeringen tillverkas och levereras till bygget. Bästa underlaget är en bockningslista eller konstruktionsritning, men för enklare plattor räcker mått." },
      { type: "p", text: "Har du underlaget redo kan du [begära offert](/offert) direkt och bifoga filerna." },

      { type: "h2", text: "1. Skicka underlaget" },
      { type: "table",
        caption: "Ju mer du kan skicka, desto exaktare offert.",
        head: ["Du har", "Det räcker till"],
        rows: [
          ["Bockningslista", "Offert direkt, position för position"],
          ["Konstruktionsritning (PDF, DWG, DXF)", "Vi tar fram bockningslistan och du godkänner den"],
          ["Mått och typ av konstruktion", "Förslag på nät och kantjärn till enklare plattor"],
          ["Foto av en handskiss", "Räcker för att börja – vi ställer följdfrågor"],
        ],
      },
      { type: "p", text: "Ange också leveransort, när armeringen behövs och om leveransen ska delas upp per gjutetapp. Vill du ha en uppfattning om mängden först finns [armeringskalkylatorn](/armeringskalkylator)." },

      { type: "h2", text: "2. Kontrollera offerten" },
      { type: "ul", items: [
        "Mängd per position eller dimension stämmer mot ritningen.",
        "Bockning, märkning och eventuella korgar är med.",
        "Distanser och najtråd ingår om du behöver dem.",
        "Frakt till din ort och leveranstid står med.",
        "Montage, om du vill att någon lägger armeringen.",
      ] },
      { type: "p", text: "Jämför offerter på samma underlag. Ett lågt kilopris på raka järn säger lite om totalkostnaden om du sedan ska kapa och bocka själv – mer i [vad kostar armering](/blogg/vad-kostar-armering)." },

      { type: "h2", text: "3. Tillverkning" },
      { type: "p", text: "Efter godkänd offert kapas och bockas järnen, nät kapas och korgar binds eller svetsas – allt i kamstål B500B. Varje position buntas och märks så att den går att hitta på bygget." },

      { type: "h2", text: "4. Leverans" },
      { type: "p", text: "Armeringen levereras till bygget i hela Sverige, även Norrland. Frakten räknas efter mängd och ort – ingen fast fraktavgift. Se till att det finns plats att lossa och att lastbilen kommer fram till upplaget." },

      { type: "h2", text: "Skicka underlaget nu" },
      { type: "p", text: "Vi tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad), [armeringskorgar](/produkter/armeringskorgar) och [armeringsnät](/produkter/armeringsnat) och levererar [kamstål](/produkter/armeringsjarn) och [distanser](/produkter/distanser) i samma leverans. Behöver du hjälp på plats sköter vi även [armeringsmontage](/tjanster/armeringsmontage). [Begär offert](/offert) med ritning, lista eller mått." },
      { type: "p", text: "Beställer du från [Västerås](/armering/vasteras), [Örebro](/armering/orebro) eller annan ort spelar ingen roll – vi levererar i hela Sverige." },
    ],
    faqs: [
      { q: "Kan jag köpa armering direkt utan offert?", a: "Vi arbetar med offert eftersom pris och leveranstid beror på mängd, bearbetning och ort. Skicka mängd, ritning eller bockningslista så får du ett fast pris för just ditt projekt." },
      { q: "Kan jag beställa armering utan bockningslista?", a: "Ja. Skicka ritningen så tar vi fram listan, eller mått och typ av konstruktion för en enklare platta." },
      { q: "Kan jag beställa en liten mängd?", a: "Ja. Frakten räknas efter mängd och ort, så offerten visar vad även en mindre beställning kostar levererad." },
      { q: "Levererar ni armering i hela Sverige?", a: "Ja, även till Norrland. Frakt och leveranstid anges i offerten utifrån ort och mängd." },
    ],
  },
  {
    slug: "armering-till-garage",
    title: "Armering till garageplatta – så armerar du rätt",
    metaTitle: "Armering garageplatta – så armerar du",
    metaDescription:
      "Garageplatta armeras oftast med nät 6150 och kamstål Ø10–12 i kantbalken. Dimensioner, port, vägsalt och åtgång – och offert på färdig grundarmering.",
    excerpt:
      "Nät 6150 över ytan, kamstål i kantbalken och extra järn vid porten. Dimensioner, åtgång för en platta på 6 × 6 m och det som skiljer garaget från en vanlig platta.",
    date: "2026-09-05",
    updated: "2026-10-09",
    readingMinutes: 5,
    target: { href: "/produkter/grundarmering", label: "Begär offert på grundarmering" },
    category: "armering-till",
    keywords: [
      "armeringsnät garageplatta",
      "armering till garage",
      "armering garageplatta",
      "garageplatta armering",
      "armeringsnät garage",
      "gjuta garageplatta",
    ],
    content: [
      { type: "p", text: "En garageplatta armeras oftast med nät 6150 (Ø6 c/c 150) över hela ytan och kamstål Ø10–Ø12 i kantbalken. Det som skiljer garaget från en vanlig platta är portöppningen, som behöver extra järn, och vägsaltet som följer med bilen in och kräver tillräckligt täckskikt." },
      { type: "p", text: "Färdig [grundarmering](/produkter/grundarmering) till garaget – nät, kantjärn och byglar efter ritning – levererar vi i hela Sverige." },

      { type: "h2", text: "Typisk armering i en garageplatta" },
      { type: "table",
        caption: "Riktvärden. Ritningen avgör.",
        head: ["Del av plattan", "Typisk armering"],
        rows: [
          ["Fält / yta", "Nät 6150, ett lager på distanser"],
          ["Kantbalk", "4 × Ø10–Ø12 längsgående + byglar Ø8"],
          ["Portöppning", "Extra järn längs öppningen och i hörnen"],
          ["Under bärande vägg", "Extra kamstål enligt ritning"],
          ["Golvbrunn", "Extra järn runt urtaget och diagonalt i hörnen"],
          ["Tunga fordon, verkstad", "Grövre nät (8150) eller två lager"],
        ],
      },

      { type: "h2", text: "Hur mycket går åt?" },
      { type: "p", text: "En platta på 6 × 6 m (36 m²) kräver cirka 41–43 m² nät inklusive överlapp, alltså 4–5 ark på 2,35 × 5 m. Kantbalken är 24 m lång; med fyra Ø12 runt om blir det drygt 100 löpmeter kamstål med skarvar. Fler exempel finns i [armeringsåtgång per m²](/blogg/armering-atgang-per-m2)." },

      { type: "h2", text: "Täckskikt i garage" },
      { type: "p", text: "Vägsalt och smältvatten från bilen innehåller klorider som tränger in i betongen. Därför behöver ett garage där bilar ställs in vintertid ofta större täckskikt i överkant än en vanlig platta. Mot cellplast räcker ofta 25–35 mm i underkant. Mer i [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "h2", text: "Vanliga fel i garageplattor" },
      { type: "ul", items: [
        "Ingen extra armering vid portöppningen – sprickor startar i hörnen.",
        "Nät som trampas ner till botten under gjutningen.",
        "Fallet mot brunnen görs i betongen men distanserna följer inte fallet.",
        "Kantjärn som slutar i hörnen utan hörnjärn.",
      ] },

      { type: "h2", text: "Få grundarmeringen till garaget färdig" },
      { type: "p", text: "Skicka ritningen eller plattans mått så tar vi fram [grundarmering](/produkter/grundarmering) till garaget: [nät](/produkter/armeringsnat), kantjärn och [bockade byglar](/produkter/klippt-och-bockad) med distanser – märkt per position, med frakt efter mängd och ort. [Begär offert](/offert). Grunderna finns i [armering till betongplatta](/blogg/armering-till-betongplatta)." },
      { type: "p", text: "Vi levererar armering till garageplattor i bland annat [Helsingborg](/armering/helsingborg) och [Linköping](/armering/linkoping)." },
    ],
    faqs: [
      { q: "Vilket armeringsnät till garageplatta?", a: "Vanligen 6150 (Ø6 c/c 150). Tunga fordon eller verkstad kan kräva 8150 eller två lager – ritningen avgör." },
      { q: "Hur mycket armeringsnät går åt till ett garage?", a: "Plattans yta plus 10–20 %. En platta på 6 × 6 m kräver cirka 41–43 m² nät, 4–5 ark på 2,35 × 5 m." },
      { q: "Behöver en garageplatta kantbalk?", a: "Ja, oftast. Kantbalken bär väggarna och armeras med längsgående kamstål och byglar enligt ritningen." },
      { q: "Behövs extra armering vid garageporten?", a: "Ja. Portöppningen bryter kantbalken och ger sprickrisk i hörnen, så ritningen brukar ange extra järn längs öppningen." },
      { q: "Kan jag få armeringen utan ritning?", a: "För ett enklare garage räcker mått, tjocklek och vad plattan ska bära för ett förslag. Bär plattan väggar och tak bör den dimensioneras av en konstruktör." },
    ],
  },
  {
    slug: "vad-kostar-armering",
    title: "Vad kostar armering? Så påverkas priset",
    metaTitle: "Vad kostar armering? Det här styr kostnaden",
    metaDescription:
      "Vad kostar armering? Priset styrs av stålpris, mängd, dimension, bockning och frakt. Så jämför du offerter rätt – och får fast pris på ditt projekt.",
    excerpt:
      "Fem saker styr priset på armering. Så jämför du offerter på rätt sätt och varför kilopriset sällan säger hela sanningen.",
    date: "2026-09-05",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/armering-pris", label: "Så räknas armeringspriset" },
    keywords: [
      "armeringsstål pris",
      "kamstål pris",
      "pris armeringsstål",
      "vad kostar armering",
      "kostnad armering",
    ],
    content: [
      { type: "p", text: "Armering prissätts oftast per kilo eller ton, och priset följer världsmarknaden för stål. Därför finns ingen fast prislista som gäller länge. Det du betalar för beror på fem saker: mängd, dimension, hur mycket som kapas och bockas, om det ska bli korgar och frakten till din ort." },
      { type: "p", text: "Hur vi räknar pris och frakt i offerten ser du på [armering pris](/armering-pris)." },

      { type: "h2", text: "Det här styr priset" },
      { type: "table",
        caption: "Vad som driver kostnaden upp eller ner.",
        head: ["Faktor", "Billigare", "Dyrare"],
        rows: [
          ["Mängd", "Stora mängder", "Små mängder"],
          ["Dimension", "Grövre järn (lägre pris per kg)", "Tunna dimensioner, många byglar"],
          ["Bearbetning", "Raka järn", "Kapat, bockat, korgar"],
          ["Variation", "Många likadana positioner", "Många unika former"],
          ["Frakt", "Samlad leverans", "Flera små leveranser, svår åtkomst"],
        ],
      },

      { type: "h2", text: "Kilopris kontra totalkostnad" },
      { type: "p", text: "Raka järn har lägst kilopris, men då står du själv för kapning, bockning och spill. En villagrund har ofta 100–200 kantbalksbyglar, och varje bygel som bockas för hand tar tid och blir sällan exakt lika. Färdigbockat kostar mer per kilo men minskar arbetstid och spill på bygget." },
      { type: "p", text: "Jämför därför offerter på samma underlag – samma bockningslista eller ritning – och räkna material, arbete, spill och frakt tillsammans." },

      { type: "h2", text: "Så jämför du två offerter" },
      { type: "ul", items: [
        "Är mängden per dimension densamma? Olika kilo betyder olika tolkning av ritningen.",
        "Ingår bockning, märkning och distanser?",
        "Är frakten med, och till rätt ort?",
        "Står leveranstiden med?",
        "Gäller priset en viss tid? Stålpriset rör sig.",
      ] },

      { type: "h2", text: "Så får du ett exakt pris" },
      { type: "ol", items: [
        "Skicka bockningslista, ritning eller mått.",
        "Vill du ha en känsla för mängden först: använd [armeringskalkylatorn](/armeringskalkylator).",
        "Du får offert med pris per position, frakt och leveranstid.",
      ] },
      { type: "p", text: "Steg för steg finns i [beställa armering](/blogg/bestalla-armering), och vikt per meter för olika dimensioner i [armeringsstål](/blogg/armeringsstal)." },

      { type: "h2", text: "Få fast pris på din armering" },
      { type: "p", text: "Skicka ditt underlag så räknar vi [klippt och bockad armering](/produkter/klippt-och-bockad), [korgar](/produkter/armeringskorgar), [nät](/produkter/armeringsnat) och [kamstål](/produkter/armeringsjarn) med frakt efter mängd och ort – ingen fast fraktavgift. Läs hur [armeringspriset räknas](/armering-pris) eller [begär offert](/offert) direkt." },
      { type: "p", text: "Ligger bygget i [Jönköping](/armering/jonkoping), [Norrköping](/armering/norrkoping) eller längre bort räknar vi fram pris och frakt till din ort." },
    ],
    faqs: [
      { q: "Vad kostar armering per kg?", a: "Kilopriset följer världsmarknaden för stål och beror på mängd, dimension och bearbetning. Vi lämnar fast pris per projekt i offerten." },
      { q: "Prissätts armering per kilo eller per meter?", a: "Kamstål prissätts oftast per kilo eller ton, nät per ark eller kilo och korgar per styck utifrån stålmängd och arbete." },
      { q: "Är prefab armering dyrare?", a: "Kilopriset är högre än för raka järn, men totalkostnaden blir ofta lägre eftersom kapning, bockning och spill på bygget försvinner." },
      { q: "Varför skiljer sig offerter så mycket?", a: "Ofta för att leverantörerna tolkat ritningen olika, eller för att bockning, distanser eller frakt saknas i den ena. Jämför mängd per dimension och vad som ingår." },
    ],
  },
  {
    slug: "armering-till-plintar",
    title: "Armering till plintar och plintgrund",
    metaTitle: "Armering plintar – plintgrund & plintkorg",
    metaDescription:
      "Hur armeras en plint? Plintkorg, bottenmatta och startjärn för altan, attefallshus, carport och stomme – plus när plintar kan gjutas utan armering.",
    excerpt:
      "Plintrör, plintsula eller fundament – hur de armeras, när armering kan utelämnas och vad du ska ange när du beställer färdiga plintkorgar.",
    date: "2026-09-05",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/produkter/plintkorgar", label: "Beställ plintkorgar" },
    category: "armering-till",
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
      { type: "p", text: "En bärande plint armeras oftast med en liten korg: längsgående kamstål och byglar som håller ihop dem. Bredare plintsulor får dessutom en bottenmatta som sprider lasten mot marken, och startjärn som förankrar pelaren ovanpå. Små, lätt belastade plintar till en altan kan ibland gjutas oarmerade – ritningen avgör." },
      { type: "p", text: "Har du många likadana plintar sparar färdiga [plintkorgar](/produkter/plintkorgar) mycket tid. Vi tillverkar dem efter ritning, märkta per typ." },

      { type: "h2", text: "Plinttyper och typisk armering" },
      { type: "table",
        caption: "Princip. Dimension och antal järn bestäms av last och mark.",
        head: ["Plint", "Används till", "Typisk armering"],
        rows: [
          ["Plintrör Ø200–300 mm", "Altan, trall, lätta förråd", "Ofta oarmerad eller några raka järn"],
          ["Gjuten plint med sula", "Attefallshus, carport, uterum", "Korg med 4 längsjärn och byglar + bottenmatta"],
          ["Pelarfundament", "Stomme, hallbyggnad", "Bottenmatta i två riktningar, startjärn, byglar"],
        ],
      },
      { type: "figure", illustration: "rebar-cage", caption: "Plintkorg – längsjärn och byglar sammanbundna." },

      { type: "h2", text: "Det här består armeringen av" },
      { type: "ul", items: [
        "Längsjärn – kamstål, ofta Ø10–Ø16 beroende på last.",
        "Byglar – håller ihop korgen och längsjärnen på plats.",
        "Bottenmatta – nät eller järn i båda riktningar i plintsulan.",
        "Startjärn – sticker upp och förankrar pelare eller vägg.",
        "Distanser – ger täckskikt mot marken runt hela korgen.",
      ] },

      { type: "h2", text: "Täckskikt mot mark" },
      { type: "p", text: "Plintar gjuts ofta direkt mot jord eller i fuktig mark. Gjuts betongen direkt mot jord krävs minst 75 mm täckskikt enligt Eurokod 2, mot avjämnat underlag minst 40 mm. Korgen ska stå på distanser och hållas centrerad i formen. Mer i [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "h2", text: "Vanliga fel" },
      { type: "ul", items: [
        "Korgen står direkt på marken – inget täckskikt i botten.",
        "Startjärnen hamnar snett eller på fel ställe och träffar inte pelarbeslaget.",
        "Bottenmattan saknas i en plintsula som ska sprida lasten.",
      ] },

      { type: "h2", text: "Beställ plintkorgar färdiga" },
      { type: "p", text: "Ange antal plintar per typ, mått och startjärn – eller skicka ritningen – så lämnar vi offert på [plintkorgar](/produkter/plintkorgar) med distanser, märkta per typ och med frakt efter mängd och ort. Lösa järn finns som [klippt och bockad armering](/produkter/klippt-och-bockad). [Begär offert](/offert). Större korgar till pelare och pålar finns i [armeringskorgar](/blogg/armeringskorgar-palarmering)." },
      { type: "p", text: "Vi skickar färdiga plintkorgar även till norra Sverige – bland annat [Umeå](/armering/umea) och [Sundsvall](/armering/sundsvall)." },
    ],
    faqs: [
      { q: "Kan man gjuta plintar utan armering?", a: "Små, lätt belastade plintar, till exempel plintrör under en altan, gjuts ibland oarmerade om konstruktionen tillåter det. Plintar under byggnader och större laster ska armeras enligt ritning." },
      { q: "Hur armeras en plint?", a: "Med en korg av längsjärn, ofta Ø10–Ø16, och byglar. Plintsulor får dessutom bottenmatta, och startjärn förankrar pelaren. Ritningen avgör dimensionerna." },
      { q: "Vilket täckskikt ska en plint ha?", a: "Minst 75 mm om betongen gjuts direkt mot jord och minst 40 mm mot avjämnat underlag enligt Eurokod 2, om ritningen inte anger mer." },
      { q: "Kan ni tillverka färdiga plintkorgar?", a: "Ja. Vi bygger plintkorgar efter ritning, märkta per typ, och levererar dem med distanser i hela Sverige." },
    ],
  },
  {
    slug: "armera-stodmur",
    title: "Armering till stödmur och L-stöd",
    metaTitle: "Armering stödmur – så armeras L-stöd",
    metaDescription:
      "Så armeras en gjuten stödmur och ett L-stöd: huvudarmering på jordsidan, sulans armering, startjärn och täckskikt mot jord. Få offert på murens armering.",
    excerpt:
      "Var dragkrafterna sitter i vägg, häl och tå, hur startjärnen förankras och de fel som får en stödmur att luta.",
    date: "2026-09-05",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ klippt & bockad armering" },
    category: "armering-till",
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
      { type: "p", text: "En gjuten stödmur eller ett L-stöd armeras med vertikal huvudarmering på jordsidan av väggen, horisontella fördelningsjärn och startjärn som förankrar väggen i sulan. Sulan armeras i både över- och underkant. Jordtrycket vill välta muren, och armeringen är det som håller emot – därför ska en stödmur alltid dimensioneras av en konstruktör." },
      { type: "p", text: "Murens armering – startjärn, vägg- och sulajärn – kan du få färdig som [klippt och bockad armering](/produkter/klippt-och-bockad), märkt per position." },

      { type: "h2", text: "Var sitter dragkrafterna?" },
      { type: "table",
        caption: "Princip för ett L-stöd i betong. Placering och dimension står på ritningen.",
        head: ["Del", "Dragsida", "Armering"],
        rows: [
          ["Vägg", "Jordsidan (baksidan)", "Vertikala huvudjärn, horisontella fördelningsjärn"],
          ["Häl (sulan under jorden)", "Överkant", "Huvudjärn i överkant av sulan"],
          ["Tå (sulan framför väggen)", "Underkant", "Huvudjärn i underkant av sulan"],
          ["Inspänning vägg–sula", "Jordsidan", "Startjärn bockade in i sulan, förankrade enligt ritning"],
        ],
      },
      { type: "p", text: "Framsidan av väggen får också armering, normalt klenare, för att begränsa krymp- och temperatursprickor." },

      { type: "h2", text: "Vanliga dimensioner" },
      { type: "p", text: "Kamstål Ø10–Ø16 är vanligt i trädgårdsmurar upp till ett par meter. Högre murar och murar med trafiklast ovanpå kräver grövre järn och tätare c/c. Täckskiktet mot jord är minst 75 mm om betongen gjuts direkt mot marken (Eurokod 2)." },

      { type: "h2", text: "Fel som får muren att luta" },
      { type: "ul", items: [
        "Huvudarmeringen på framsidan i stället för jordsidan.",
        "Startjärn som är för korta eller saknar förankring i sulan.",
        "För litet täckskikt mot jorden – rost och spjälkning.",
        "Gjutfog mellan sula och vägg utan tillräcklig skarvlängd på startjärnen – se [skarvlängd](/blogg/skarvlangd-armering).",
      ] },

      { type: "h2", text: "Skicka ritningen – få offert på murens armering" },
      { type: "p", text: "Vi tillverkar armeringen till stödmurar och L-stöd efter konstruktörens ritning: bockade startjärn, vägg- och sulajärn som [klippt och bockad armering](/produkter/klippt-och-bockad), [nät](/produkter/armeringsnat) och distanser, med frakt efter mängd och ort. [Begär offert](/offert). Dimensionerna förklaras i [armeringsjärn dimensioner](/blogg/armeringsjarn-dimensioner)." },
      { type: "p", text: "Vi levererar armering till stödmurar och L-stöd i bland annat [Stockholm](/armering/stockholm) och [Göteborg](/armering/goteborg)." },
    ],
    faqs: [
      { q: "Vilka armeringsjärn används i en stödmur?", a: "Ofta Ø10–Ø16 vertikalt och horisontellt, med startjärn från sulan upp i väggen. Högre murar kräver grövre järn. Dimension och c/c står på ritningen." },
      { q: "På vilken sida ska armeringen i en stödmur sitta?", a: "Huvudarmeringen sitter på jordsidan av väggen, där jordtrycket ger drag. I sulan sitter den i överkant under jorden (hälen) och i underkant framför väggen (tån)." },
      { q: "Behöver en stödmur konstruktör?", a: "Ja. Fel armering kan få muren att luta eller välta, och höga murar nära tomtgräns eller väg kan dessutom kräva lov. Konstruktören dimensionerar armering och sula." },
      { q: "Kan ni leverera armering till stödmur?", a: "Ja, bockade startjärn, vägg- och sulajärn, nät och distanser efter ritning, levererat i hela Sverige." },
    ],
  },
  {
    slug: "armeringsnat-eller-armeringsjarn",
    title: "Armeringsnät eller armeringsjärn – vad ska du välja?",
    metaTitle: "Armeringsnät eller armeringsjärn?",
    metaDescription:
      "Armeringsnät eller lösa armeringsjärn? Jämförelse av läggtid och användning – och varför de flesta plattor behöver båda. Beställ nät och järn samtidigt.",
    excerpt:
      "Nät för ytan, kamstål för kanter och punktlaster. Jämförelse punkt för punkt – och vad det innebär att ersätta nät med lösa järn.",
    date: "2026-09-05",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    keywords: [
      "armeringsnät eller armeringsjärn",
      "skillnad armeringsnät armeringsjärn",
      "nät eller kamjärn",
      "armeringsnät vs armeringsjärn",
    ],
    content: [
      { type: "p", text: "Använd armeringsnät för att armera ytan och lösa armeringsjärn för kanter, hörn och punktlaster. De flesta plattor på mark behöver båda: nätet går snabbt att lägga över stora ytor, kamstålet förstärker där lasten koncentreras." },
      { type: "p", text: "Vi levererar [armeringsnät](/produkter/armeringsnat) och [armeringsjärn](/produkter/armeringsjarn) i samma leverans, så att allt kommer till bygget samtidigt." },

      { type: "h2", text: "Jämförelse" },
      { type: "table",
        caption: "Generell jämförelse. Ritningen avgör vad som krävs.",
        head: ["", "Armeringsnät", "Lösa armeringsjärn"],
        rows: [
          ["Läggtid", "Snabbt – ett ark täcker cirka 10 m²", "Långsamt – varje järn läggs och binds"],
          ["Passar till", "Plattytor, golv, väggar", "Kantbalkar, hörn, öppningar, punktlaster"],
          ["Anpassning", "Standardark, kapas till form", "Valfri dimension, längd och form"],
          ["Dimension", "Ø5–Ø10 tråd", "Ø6–Ø32"],
          ["Bockade former", "Bara specialnät", "Byglar, L, U och andra typformer"],
        ],
      },

      { type: "h2", text: "Kan jag ersätta nät med lösa järn?" },
      { type: "p", text: "Ja, om stålarean blir minst lika stor och konstruktören godkänner det. Nät 6150 har 189 mm² per meter i varje riktning. Samma area ger Ø8 s250 (201 mm²/m) – men då ska varje järn läggas och bindas i båda riktningar, vilket tar betydligt längre tid än att rulla ut ett nät." },
      { type: "p", text: "Omvänt kan du sällan ersätta kantbalkens kamstål med nät. Kantbalken behöver grövre järn som går obrutna runt plattan." },

      { type: "h2", text: "Typisk kombination i en platta på mark" },
      { type: "ul", items: [
        "Nät 5150 eller 6150 över hela plattan.",
        "Kamstål Ø10–Ø12 i kantbalken, med byglar.",
        "Hörnjärn som binder ihop kantjärnen runt hörnen.",
        "Extra järn under bärande väggar och runt öppningar.",
      ] },
      { type: "p", text: "Hur mycket som går åt av båda räknar du i [armeringskalkylatorn](/armeringskalkylator). Nätstorlekarna finns i [armeringsnät – storlekar och mått](/blogg/armeringsnat-storlekar-och-matt)." },

      { type: "h2", text: "Beställ nät och järn i samma leverans" },
      { type: "p", text: "Skicka ritningen eller plattans mått så räknar vi [armeringsnät](/produkter/armeringsnat), [kamstål B500B](/produkter/armeringsjarn) och [bockade byglar](/produkter/klippt-och-bockad) – en offert, en leverans, frakt efter mängd och ort. [Begär offert](/offert)." },
      { type: "p", text: "Nät, järn eller båda – vi levererar till byggen i bland annat [Malmö](/armering/malmo) och [Uppsala](/armering/uppsala)." },
    ],
    faqs: [
      { q: "Vad är skillnaden på armeringsnät och armeringsjärn?", a: "Nät är svetsade rutnät som armerar en hel yta. Armeringsjärn är lösa kamstänger som läggs där det behövs extra – i kanter, hörn och under laster." },
      { q: "Kan man armera en platta med bara nät?", a: "Mindre, lätt belastade plattor klarar sig ofta med enbart nät. Plattor med kantbalk eller bärande väggar behöver även kamstål." },
      { q: "Kan man ersätta armeringsnät med lösa järn?", a: "Ja, med minst samma stålarea och konstruktörens godkännande. 6150 motsvarar ungefär Ø8 s250 i båda riktningar, men det tar mycket längre tid att lägga." },
      { q: "Är armeringsnät eller kamjärn billigast?", a: "Per kvadratmeter yta är nät oftast billigast räknat med arbetstid. Kamstål behövs ändå i kanter och vid punktlaster – begär offert på kombinationen." },
    ],
  },
  {
    slug: "bockningslista-sa-gor-du",
    title: "Bockningslista – så gör du en, steg för steg",
    metaTitle: "Bockningslista – så gör du + gratis mall",
    metaDescription:
      "Så gör du en bockningslista för armering: position, typform, mått, Ø och antal – med exempel och gratis mall. Har du bara ritning gör vi listan åt dig.",
    excerpt:
      "En bockningslista anger varje position med typform, mått, dimension och antal. Exempel, mall och de fel som gör att järnen inte passar.",
    date: "2026-09-08",
    updated: "2026-10-09",
    readingMinutes: 5,
    target: { href: "/tjanster/bockningslista", label: "Skapa bockningslista" },
    keywords: [
      "bockningslista",
      "bockningslista mall",
      "bockningslista armering",
      "göra bockningslista",
      "armeringsritning",
      "bockningsschema",
    ],
    content: [
      { type: "p", text: "En bockningslista (bockningsschema) är en tabell över all armering i ett projekt: en rad per position med typform, mått per ben, dimension och antal. Den är underlaget för både pris och tillverkning, och den bestämmer hur järnen märks när de levereras." },
      { type: "p", text: "Du kan bygga listan direkt i vårt [verktyg för bockningslista](/tjanster/bockningslista) – eller skicka ritningen så gör vi den åt dig." },

      { type: "h2", text: "Exempel på en bockningslista" },
      { type: "table",
        caption: "Tre rader ur en bockningslista för en villagrund. Måtten är yttermått i mm.",
        head: ["Pos", "Typform", "Ø", "Mått (mm)", "Antal", "Längd/st"],
        rows: [
          ["1", "A – rak", "Ø12", "a = 6000", "32", "6,00 m"],
          ["2", "B – vinkeljärn", "Ø12", "a = 800, b = 800", "8", "1,58 m"],
          ["3", "K – villabygel", "Ø8", "a = 800, b = 200, c = 300, d = 200", "147", "ca 1,45 m"],
        ],
      },
      { type: "p", text: "Klipplängden blir något kortare än summan av yttermåtten, eftersom järnet följer en radie i varje bock. Den räknar tillverkaren fram – du anger yttermåtten. Mer om det i [bocka armeringsjärn](/blogg/bocka-armeringsjarn)." },

      { type: "h2", text: "Det här ska stå på varje rad" },
      { type: "ul", items: [
        "Positionsnummer – unikt per detalj, samma som på ritningen.",
        "Typform – bokstavskod för formen (A rak, B vinkel, C U-järn, K öppen bygel, N sluten bygel).",
        "Mått per ben i mm – ange om ritningen använder innermått.",
        "Dimension (Ø) och stålkvalitet, normalt B500B.",
        "Antal.",
      ] },
      { type: "figure", illustration: "bending-shapes", caption: "Vanliga typformer – rak, vinkel, U och byglar." },
      { type: "p", text: "Alla typformer med måttbeteckningar finns som [utskrivbart blad (PDF)](/downloads/typformer-bockning-armeringsproffs.pdf)." },

      { type: "h2", text: "Steg för steg" },
      { type: "ol", items: [
        "Gå igenom ritningen del för del: kantbalk, platta, väggar.",
        "Ge varje unik detalj ett positionsnummer.",
        "Välj typform och skriv yttermåtten per ben.",
        "Fyll i dimension och antal. Räkna antal byglar som längd / c/c + 1.",
        "Summera vikt per dimension – det ger underlag för pris och frakt.",
      ] },

      { type: "h2", text: "Vanliga fel i bockningslistor" },
      { type: "ul", items: [
        "Innermått och yttermått blandas.",
        "Byglar räknas utan +1, eller utan extra byglar i hörn.",
        "Skarvlängd glöms på raka järn som är längre än stånglängden.",
        "Samma positionsnummer används för två olika detaljer.",
      ] },

      { type: "h2", text: "Mall eller färdig lista" },
      { type: "p", text: "Vill du fylla i själv finns en [mall för bockningslista (CSV)](/bockningslista-mall.csv) som öppnas i Excel. Har du bara konstruktionsritningen tar vi fram [bockningslistan åt dig](/tjanster/bockningslista) – du godkänner den innan tillverkning. Behöver du hela armeringsunderlaget finns [armeringsspecifikation](/tjanster/armeringsspecifikation)." },

      { type: "h2", text: "Från lista till färdig armering" },
      { type: "p", text: "När listan är klar tillverkar vi [klippt och bockad armering](/produkter/klippt-och-bockad) efter den, buntad och märkt med samma positionsnummer, och levererar i hela Sverige. Vill du ha hjälp på plats sköter vi även [armeringsmontage](/tjanster/armeringsmontage). [Skicka listan för offert](/offert)." },
      { type: "p", text: "Skicka bockningslistan från [Västerås](/armering/vasteras), [Örebro](/armering/orebro) eller vilken ort som helst – vi tillverkar och levererar i hela Sverige." },
    ],
    faqs: [
      { q: "Vad är en bockningslista?", a: "En tabell över all armering i ett projekt – varje position med typform, mått, dimension och antal. Den används för både offert och tillverkning." },
      { q: "Ska jag ange inner- eller yttermått?", a: "Yttermått per ben är standard. Använder ritningen innermått ska det stå tydligt i listan." },
      { q: "Finns det en mall för bockningslista?", a: "Ja, en CSV-mall som öppnas i Excel. Du kan också bygga listan i vårt webbverktyg och skicka den direkt." },
      { q: "Kan ni göra bockningslistan åt mig?", a: "Ja. Skicka konstruktionsritningen så tar vi fram listan, och du godkänner den innan något tillverkas." },
    ],
  },
  {
    slug: "armering-till-betongtrappa",
    title: "Armering till betongtrappa – så armeras en gjuten trappa",
    metaTitle: "Armering betongtrappa – så armeras den",
    metaDescription:
      "Så armeras en platsgjuten betongtrappa: huvudjärn i underkant, fördelningsjärn, förankring i bjälklag och vilplan. Få trappans armering färdigbockad.",
    excerpt:
      "En gjuten trappa mellan två plan fungerar som en lutande platta. Var huvudjärnen ska ligga, hur trappan förankras och de fel som ger sprickor.",
    date: "2026-09-08",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ klippt & bockad armering" },
    category: "armering-till",
    keywords: [
      "armering till betongtrappa",
      "armera betongtrappa",
      "betongtrappa armering",
      "armering trappa",
      "gjuta betongtrappa armering",
    ],
    content: [
      { type: "p", text: "En platsgjuten betongtrappa mellan två plan fungerar som en lutande platta som spänner mellan bjälklag eller vilplan. Huvudarmeringen läggs i trappans längdriktning i underkant, med fördelningsjärn på tvären, och förankras in i bjälklaget i båda ändar. Trappan ska dimensioneras av en konstruktör." },
      { type: "p", text: "Trappans armering levererar vi som [klippt och bockad armering](/produkter/klippt-och-bockad) efter ritningen – knäckta huvudjärn och förankringsjärn är svåra att bocka rätt på plats." },

      { type: "h2", text: "Så armeras trappan" },
      { type: "table",
        caption: "Princip för en trappa som spänner mellan två plan. Ritningen avgör.",
        head: ["Del", "Armering"],
        rows: [
          ["Trapploppets platta", "Huvudjärn i underkant i längdriktningen, fördelningsjärn på tvären"],
          ["Knäck mot vilplan", "Huvudjärnen bockas och korsas så att de förankras på rätt sida"],
          ["Upplag mot bjälklag", "Förankringsjärn och överkantsjärn som tar inspänningsmoment"],
          ["Stegen", "Gjuts normalt utan egen armering ovanpå plattan"],
        ],
      },
      { type: "p", text: "Vid knäcken där trappan möter vilplanet vill ett rakt järn i underkant räta ut sig och spräcka loss betongen. Därför bockas järnen där och korsas, så att varje järn förankras i den del där det ligger i tryckzonen. Det är den detalj som oftast blir fel." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Raka underkantsjärn som följer den inåtgående knäcken – de spjälkar betongen.",
        "Huvudarmeringen i överkant i fältet i stället för underkant.",
        "Ingen förankring in i bjälklag eller vilplan.",
        "För litet täckskikt i underkant – armeringen syns som rostränder efter några år.",
      ] },

      { type: "h2", text: "Täckskikt och distanser" },
      { type: "p", text: "Trappans underkant är ofta synlig, så distanserna måste ge jämnt täckskikt utan att synas. Använd [distanser](/produkter/distanser) avsedda för formytor. En trappa utomhus på mark är en annan konstruktion – se [armering till yttertrappa](/blogg/armering-till-yttertrappa)." },

      { type: "h2", text: "Få trappans armering färdigbockad" },
      { type: "p", text: "Skicka ritningen så tar vi fram [bockningslistan](/tjanster/bockningslista) och tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad) till trappan, märkt per position och levererad med distanser. Vill du ha hjälp att lägga den finns [armeringsmontage](/tjanster/armeringsmontage). [Begär offert](/offert)." },
      { type: "p", text: "Vi levererar trappans armering till bland annat [Helsingborg](/armering/helsingborg) och [Linköping](/armering/linkoping)." },
    ],
    faqs: [
      { q: "Hur armeras en gjuten betongtrappa?", a: "Med huvudjärn i underkant i trappans längdriktning, fördelningsjärn på tvären och förankring in i bjälklag och vilplan. Vid knäckar bockas och korsas järnen. Konstruktören dimensionerar." },
      { q: "Måste en betongtrappa armeras?", a: "Ja, en trappa som spänner mellan två plan böjs av egenvikt och last och spricker i underkant utan armering." },
      { q: "Behöver stegen armeras?", a: "Normalt inte. Stegen gjuts ovanpå den armerade plattan. Breda eller fribärande steg kan kräva egen armering enligt ritningen." },
      { q: "Kan ni leverera armering till betongtrappa?", a: "Ja. Skicka ritningen så gör vi bockningslistan, tillverkar järnen och levererar dem märkta per position." },
    ],
  },
  {
    slug: "armering-till-betonggolv",
    title: "Armering till betonggolv och industrigolv",
    metaTitle: "Armering betonggolv – nät & fiber",
    metaDescription:
      "Hur armeras ett betonggolv? Nät, kamstål eller fiber – vad som passar golvet, var nätet ska ligga och hur sprickor styrs. Beställ nät till golvet.",
    excerpt:
      "Nät, kamstål eller fiber? Vad som passar källar-, verkstads- och lagergolv, var nätet ska ligga i höjdled och hur sprickorna styrs.",
    date: "2026-09-08",
    updated: "2026-10-09",
    readingMinutes: 4,
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    category: "armering-till",
    keywords: [
      "armering till betonggolv",
      "armera betonggolv",
      "armeringsnät golv",
      "fiber eller nät golv",
      "betonggolv armering",
    ],
    content: [
      { type: "p", text: "Ett betonggolv armeras främst för att styra krympsprickor och för att bära laster från fordon, hyllor och maskiner. Vanligast är armeringsnät i ett eller två lager. Fiber kan ersätta eller komplettera nätet i vissa golv, och kamstål läggs till där lasterna koncentreras." },
      { type: "p", text: "Vi levererar [armeringsnät](/produkter/armeringsnat) till golv i standardark eller kapat efter golvets mått." },

      { type: "h2", text: "Nät, kamstål eller fiber?" },
      { type: "table",
        caption: "Riktlinje. Kraftigt belastade golv dimensioneras av konstruktör.",
        head: ["Golv", "Vanlig armering"],
        rows: [
          ["Källargolv, förråd, hobbyrum", "Nät 5150 eller 6150, ett lager"],
          ["Verkstad, lager med truck", "Nät 8150 eller två lager"],
          ["Industrigolv, tunga punktlaster", "Två lager nät + kamstål, eller fiber enligt ritning"],
          ["Under pelare och ställage", "Extra kamstål i fält"],
        ],
      },
      { type: "p", text: "Fiber (stål- eller makrosyntetfiber) blandas i betongen och ger jämn sprickfördelning utan nätläggning. Den beställs med betongen och kräver dimensionering. Skillnaderna går vi igenom i [fiberarmering eller armeringsnät](/blogg/fiberarmering-eller-armeringsnat)." },

      { type: "h2", text: "Var ska nätet ligga?" },
      { type: "p", text: "Krympsprickor startar i ytan. Ett nät som ska begränsa dem läggs därför högt – centriskt eller i övre halvan av golvet – med täckskikt enligt ritningen. Två lager placeras i över- och underkant och hålls isär av nätstöd. Ett nät som ligger på botten gör nästan ingen nytta mot sprickor i ytan." },
      { type: "figure", illustration: "cover-layer", caption: "Distanser håller nätet på rätt höjd i golvet." },
      { type: "p", text: "Rätt höjd säkras med [distanser](/produkter/distanser) som tål att man går på nätet under gjutningen." },

      { type: "h2", text: "Fogar och sprickor" },
      { type: "ul", items: [
        "Stora golv delas med fogar så att krympningen tas upp där du vill.",
        "Vid sågade fogar anger ritningen om nätet ska gå igenom fogen eller brytas.",
        "Runt pelare, brunnar och urtag läggs extra järn diagonalt i hörnen.",
      ] },

      { type: "h2", text: "Beställ armeringen till golvet" },
      { type: "p", text: "Skicka golvets mått eller ritningen så räknar vi [nät](/produkter/armeringsnat), [specialnät](/produkter/svetsad-armering), kamstål och distanser och lämnar offert med frakt efter mängd och ort. Vi kan även [lägga armeringen](/tjanster/armeringsmontage). [Begär offert](/offert). Industrigolv beskrivs närmare i [armering till industrigolv](/blogg/armering-industrigolv)." },
      { type: "p", text: "Industri- och betonggolv armerar vi i bland annat [Norrköping](/armering/norrkoping) och [Jönköping](/armering/jonkoping) – och hela Sverige." },
    ],
    faqs: [
      { q: "Hur armeras ett betonggolv?", a: "Oftast med armeringsnät i ett eller två lager, kompletterat med kamstål där lasterna är stora. Fiber kan ersätta nätet i vissa golv enligt dimensionering." },
      { q: "Var i golvet ska armeringen ligga?", a: "Ett nät mot krympsprickor läggs centriskt eller i övre halvan på distanser. Två lager placeras i över- och underkant." },
      { q: "Kan fiber ersätta armeringsnät?", a: "I vissa golv, ja – om konstruktören dimensionerat för det. Fibern beställs med betongen, medan nät och kamstål beställs separat." },
      { q: "Kan ni leverera armering till ett stort golv?", a: "Ja, nät, specialnät, kamstål och distanser efter ritning eller mått, i hela Sverige – och vi kan sköta montaget." },
    ],
  },
  {
    slug: "armeringsbyglar",
    title: "Armeringsbyglar – typer, mått och när de används",
    metaTitle: "Armeringsbyglar – typer (U-, N-, K-bygel) & mått",
    metaDescription:
      "Armeringsbyglar förklarade: U-bygel, sluten bygel och öppen bygel – typkoder, mått, krokar och bygelavstånd. Beställ färdiga byglar i serie.",
    excerpt:
      "Sluten bygel, U-bygel och K-bygel – typkoder, hur måtten anges, krokar enligt Eurokod 2 och hur du räknar antal byglar.",
    date: "2026-09-23",
    updated: "2026-10-09",
    readingMinutes: 6,
    target: { href: "/produkter/byglar-och-hakar", label: "Beställ färdiga armeringsbyglar" },
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
      { type: "p", text: "En armeringsbygel är ett bockat järn som omsluter eller förbinder den längsgående armeringen i balkar, pelare och kantbalkar. Vanligast är sluten bygel (typform N), U-bygel (C) och öppen K-bygel, som i villagrunder kallas villabygel. Bygeln håller huvudjärnen på plats vid gjutningen och tar sedan upp tvärkrafter." },
      { type: "p", text: "Byglar går åt i hundratal per projekt, och därför beställs de oftast färdigbockade i serie som [armeringsbyglar](/produkter/byglar-och-hakar)." },

      { type: "h2", text: "Vad gör en bygel?" },
      { type: "ul", items: [
        "Tar upp tvärkraft (skjuvning) i balkar – betongen bildar trycksträvor och byglarna verkar som dragband.",
        "Håller längsgående armering på rätt plats under gjutningen.",
        "Förhindrar att tryckt armering i pelare knäcks ut (omslutande byglar).",
        "Binder ihop över- och underkantsarmering i kantbalkar och bjälklag.",
      ] },
      { type: "p", text: "Antal, dimension och bygelavstånd bestäms av konstruktören och står på armeringsritningen." },

      { type: "h2", text: "Typer av armeringsbyglar – U-bygel, sluten bygel, K-bygel" },
      { type: "p", text: "I Sverige anges bockade former med en bokstavskod, typform, som gör det enkelt att beskriva formen i en bockningslista. De byglar som används mest:" },
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
      { type: "p", text: "Några enstaka byglar går att bocka för hand. Men en 6 meter lång balk med c/c 200 kräver 31 byglar, och en villagrund 100–200 kantbalksbyglar. Bockade på bygget blir måtten olika, och då passar huvudjärnen inte. Maskinbockade byglar är lika i hela serien och kommer buntade och märkta per position." },
      { type: "ul", items: [
        "Jämna mått – bygeln passar huvudjärnen utan justering.",
        "Snabbare montage – ingen bockning på plats.",
        "Rätt bockningsradie och krok enligt ritning.",
        "Leverans på pall tillsammans med övrig armering och [armeringskorgar](/blogg/armeringskorgar-palarmering).",
      ] },
      { type: "p", text: "Vi tillverkar [färdiga armeringsbyglar](/produkter/byglar-och-hakar) i serie efter din bockningslista, i Ø6–Ø16, med frakt efter mängd och ort. [Skicka listan eller ritningen](/offert) så får du pris och leveranstid." },
    ],
    faqs: [
      { q: "Vad är skillnaden mellan en U-bygel och en sluten bygel?", a: "En U-bygel (typform C) är öppen och har tre ben. En sluten bygel (typform N) omsluter armeringen helt och förankras med krokar i ett hörn. Slutna byglar används där bygeln ska hålla ihop huvudjärnen i balkar och pelare." },
      { q: "Vad är en K-bygel?", a: "En öppen bygel (typform K) med ett extra ben. Den vanligaste varianten i villagrunder är villabygeln, där benet är förlängt in i plattan – se guiden om kantbalksbygel." },
      { q: "Hur tätt ska byglar sitta?", a: "Bygelavståndet står på ritningen. Eurokod 2 anger största avstånd 0,75 × d i balkar och i pelare det minsta av 20 × huvudjärnets diameter, pelarens minsta sida och 400 mm." },
      { q: "Vilken dimension har armeringsbyglar?", a: "Oftast Ø6–Ø12 mm kamstål B500B, i grövre konstruktioner även Ø16. Rätt dimension står på konstruktionsritningen." },
      { q: "Kan man köpa färdiga armeringsbyglar?", a: "Ja. Ange typform, mått, dimension och antal – eller skicka ritningen – så tillverkar vi byglarna i serie och levererar dem märkta per position i hela Sverige." },
    ],
  },

  {
    slug: "bocka-armeringsjarn",
    title: "Bocka armeringsjärn – för hand, med verktyg och rätt bockningsradie",
    metaTitle: "Bocka armeringsjärn – bockningsradie & tabell",
    metaDescription:
      "Så bockar du armeringsjärn: verktyg, bockning för hand och minsta bockningsradie enligt Eurokod 2 i tabell. Plus klipplängd och vanliga misstag.",
    excerpt:
      "Armeringsjärn kan bockas för hand med rätt verktyg – men bara med rätt bockningsradie. Här är tabellen över minsta dorndiameter, hur du räknar klipplängd och när det lönar sig att beställa färdigbockat.",
    date: "2026-09-23",
    updated: "2026-10-09",
    readingMinutes: 6,
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ färdigbockad armering" },
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
      { type: "p", text: "Armeringsjärn upp till cirka Ø12 kan bockas för hand med bockjärn eller bockbord – kallt, i en rörelse och runt en dorn med rätt diameter. Minsta dorndiameter är 4 × Ø upp till Ø16 och 7 × Ø för grövre järn (Eurokod 2). Bockas järnet snävare kan stålet spricka och betongen innanför bocken krossas."},
      { type: "p", text: "Ska du ha många byglar eller grövre dimensioner är det enklare att beställa [klippt och bockad armering](/produkter/klippt-och-bockad) – då bockas varje järn i maskin med rätt radie." },

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
      { type: "p", text: "För bockade huvudjärn kan konstruktören behöva kontrollera att betongen innanför bocken inte krossas (Eurokod 2, avsnitt 8.3(3)) och då kräva större radie än tabellvärdet. Följ alltid ritningen. Värdena gäller SS-EN 1992-1-1:2005 tills den nya generationen Eurokod (EN 1992-1-1:2023) införs i svenska regler." },

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
      { type: "p", text: "[Skicka bockningslistan eller ritningen](/offert) så får du offert på färdigbockade järn, märkta per position och med frakt efter mängd och ort. Vikt per meter och stånglängder finns i [armeringsstål – B500B](/blogg/armeringsstal)." },
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
    updated: "2026-10-09",
    readingMinutes: 7,
    target: { href: "/produkter/armeringsjarn", label: "Beställ armeringsjärn" },
    category: "dimensioner",
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
      { type: "p", text: "Skarvlängden för dragna armeringsjärn blir enligt Eurokod 2 oftast 40–60 × Ø i vanlig husbyggnadsbetong – till exempel 480–720 mm för Ø12. Armeringsnät överlappas normalt minst två rutor, cirka 300 mm för 150-nät. Den verkliga skarvlängden står alltid på ritningen." },
      { type: "p", text: "[Armeringsjärn](/produkter/armeringsjarn) levereras i 6 eller 12 meter. Där armeringen behöver vara längre läggs två järn omlott, och kraften förs över via betongen. Är överlappningen för kort fungerar skarven inte." },

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
      { type: "p", text: "Varje skarv innebär extra stål. I en lång platta med Ø12 i 6-metersstänger och 600 mm skarv går det åt ungefär 10 % extra stål för skarvarna (0,6 m per 6-metersstång). För en enskild 10 meter lång rad blir det 10,6 m järn – alltså två stänger. Räkna med skarvarna i mängdberäkningen, eller låt oss göra det i offerten utifrån din [bockningslista](/tjanster/bockningslista). Stånglängder och vikt per meter finns i [armeringsstål – B500B](/blogg/armeringsstal). [Begär offert](/offert) på din mängd." },
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
    metaTitle: "Armeringsstål B500B – vikt per meter & längder",
    metaDescription:
      "Armeringsstål B500B och K500C-T: vikt per meter för Ø6–Ø32 i tabell, längder 6 och 12 m och vad SS 212540 innebär. Beställ kamstål raka eller bockade.",
    excerpt:
      "Armeringsstål, armeringsjärn, kamstål – samma sak. Här reder vi ut beteckningarna B500B och K500C-T, vad järnen väger, vilka längder som finns och vad som påverkar priset.",
    date: "2026-09-23",
    updated: "2026-10-09",
    readingMinutes: 6,
    target: { href: "/produkter/armeringsjarn", label: "Köp armeringsjärn" },
    category: "dimensioner",
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
    ],
    content: [
      { type: "p", text: "Armeringsstål, armeringsjärn och kamstål är samma sak: stål med kammar på ytan som gjuts in i betong och tar upp dragkrafter. I Sverige används B500B enligt SS-EN 10080 och SS 212540, och Ø12 väger 0,888 kg per meter. Vi levererar [armeringsjärn och kamstål](/produkter/armeringsjarn) i Ø6–Ø32, raka eller kapade och bockade." },

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
        "12 meter – vanlig lagerlängd, färre skarvar i stora konstruktioner.",
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
      { type: "p", text: "Läs mer i [vad kostar armering](/blogg/vad-kostar-armering) eller [begär offert](/offert) på din mängd – du får pris, frakt och leveranstid till din ort." },
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
      "Kantbalksbygel och villabygel (K-bygel): så räknar du mått och antal, passar byglarna i kantelement av cellplast och monterar dem. Beställ färdiga.",
    excerpt:
      "Villabygel eller sluten bygel, hur du räknar mått och antal, hur byglarna passar i kantelement av cellplast och montage steg för steg.",
    date: "2026-09-23",
    updated: "2026-10-09",
    readingMinutes: 6,
    target: { href: "/produkter/villakorg-kantbalksarmering", label: "Beställ kantbalksarmering" },
    keywords: [
      "kantbalksbygel",
      "kantbalksbyglar",
      "villabygel",
      "k-bygel",
      "kantbalk armering",
      "armering kantbalk platta på mark",
    ],
    content: [
      { type: "p", text: "En platta på mark har nästan alltid en förstärkt kant – en kantbalk – där plattan är tjockare och bär väggarnas last. Kantbalken armeras med längsgående järn i över- och underkant som hålls ihop av byglar. Det är de byglarna som kallas kantbalksbyglar. Färdiga kantbalksbyglar och kantbalkskorgar levererar vi som [kantbalksarmering](/produkter/villakorg-kantbalksarmering)." },

      { type: "h2", text: "Vilken form har en kantbalksbygel?" },
      { type: "table", head: ["Form", "Kod", "Beskrivning"], rows: [
        ["Villabygel / förlängd K-bygel", "K", "Öppen bygel där ett ben är förlängt in i plattan – vanligast i villagrunder, finns som lagervara"],
        ["Sluten bygel", "N", "Omsluter kantbalkens järn helt, förankras med krokar"],
        ["U-bygel", "C", "Öppen U-form, används ibland tillsammans med raka järn"],
      ], caption: "Vilken form som gäller står på konstruktionsritningen. Se alla former i [typformer för bockning](/tjanster/bockningslista)." },
      { type: "p", text: "Villabyglar finns som lagervara, till exempel 800 × 200 × 300 × 200 mm i Ø8 – där det förlängda benet går in i plattan – anpassade för cirka 400 mm hög kantbalk. Stämmer inte standardmåttet med din kantbalk tillverkas byglarna efter mått. Villabygel® är ett inarbetat produktnamn för den här bygeltypen." },

      { type: "h2", text: "Så räknar du ut måtten" },
      { type: "p", text: "Bygelns yttermått är kantbalkens mått minus täckskiktet på varje sida. Exempel med 50 mm täckskikt (täckskiktet står på ritningen):" },
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
      { type: "p", text: "En villagrund kräver ofta 100–200 kantbalksbyglar. Att [bocka armeringsjärn](/blogg/bocka-armeringsjarn) för hand i den mängden tar tid och ger ojämna mått. Skicka kantelementets invändiga mått eller ritningen, så tillverkar vi byglar, kantjärn och hörnjärn som [kantbalksarmering](/produkter/villakorg-kantbalksarmering), märkt och levererat med frakt efter mängd och ort. [Begär offert](/offert) på din grund. Alla bygeltyper finns i [armeringsbyglar](/blogg/armeringsbyglar)." },
    ],
    faqs: [
      { q: "Vad är en kantbalksbygel?", a: "En bygel som håller ihop de längsgående järnen i kantbalken runt en platta på mark. Vanligast är villabygeln – en öppen K-bygel med ett förlängt ben in i plattan." },
      { q: "Vilket mått ska en kantbalksbygel ha?", a: "Kantbalkens bredd och höjd minus täckskiktet på varje sida. Vid 300 × 400 mm kantbalk och 50 mm täckskikt blir bygeln 200 × 300 mm." },
      { q: "Vilket bygelavstånd i kantbalk?", a: "Det står på ritningen. I villagrunder är c/c 300 mm vanligt, vilket ger drygt tre byglar per meter." },
      { q: "Kan man köpa kantbalksbyglar färdiga?", a: "Ja. Villabyglar finns i standardmått. Passar de inte din kantbalk tillverkar vi byglarna efter dina mått i serie, tillsammans med kantjärn och hörnjärn." },
    ],
  },

  {
    slug: "lyftoglor-betong",
    title: "Lyftögla i betong – material, dimension och placering",
    metaTitle: "Lyftögla i betong – dimension & placering",
    metaDescription:
      "Lyftögla i betong: material, dimension, förankring och placering – plus hur lyftvinkeln påverkar lasten och vem som ansvarar. För betongelement och prefab.",
    excerpt:
      "Material, dimension, förankring och lyftvinkel för ingjutna lyftöglor – och vilka regler som gäller vid lyft av betongelement.",
    date: "2026-09-23",
    updated: "2026-10-09",
    readingMinutes: 6,
    target: { href: "/produkter/lyftoglor", label: "Beställ lyftöglor" },
    keywords: [
      "lyftögla betong",
      "lyftöglor betong",
      "lyftögla dimension",
      "lyftbygel",
      "ingjutningsögla",
      "lyftöglor betongelement",
    ],
    content: [
      { type: "p", text: "Prefabricerade betongelement – trappor, balkar, väggelement, brunnslock och plintar – måste kunna lyftas vid avformning, transport och montage. Det görs med lyftöglor (ingjutningsöglor) som gjuts in i elementet. En lyftögla som är fel dimensionerad eller fel förankrad kan släppa, så den ska alltid följa konstruktörens ritning eller lyftsystemets anvisning. Vi bockar [lyftöglor](/produkter/lyftoglor) efter ritning." },

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
      { type: "p", text: "Vi bockar [lyftöglor och lyftkrokar](/produkter/lyftoglor) efter konstruktörens ritning, i små och stora serier, och levererar dem tillsammans med övrig armering till elementen – till exempel [armeringskorgar](/blogg/armeringskorgar-palarmering). [Begär offert](/offert) med ritningen." },
    ],
    faqs: [
      { q: "Får man använda armeringsjärn som lyftögla?", a: "Nej, normalt inte. Ingjutna lyftöglor görs av slätt, segt rundstål (t.ex. S235) eller som färdiga lyftsystem. Kamstål är mindre segt i bockar och kan spricka sprött." },
      { q: "Hur många lyftöglor behövs?", a: "Det bestämmer konstruktören utifrån elementets vikt och form. Med fyra öglor räknas ofta bara två som bärande, eftersom lasten sällan fördelas jämnt." },
      { q: "Vad är skillnaden på lyftögla och lyftbygel?", a: "Det är i stort sett samma sak – en bockad ögla av rundstål som gjuts in i elementet. Lyftankare och lyfthylsor är färdiga system med typgodkända lastvärden." },
    ],
  },

];

export const posts: Post[] = [...basePosts, ...extraPosts];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
