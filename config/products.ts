/**
 * Produktkategorier (prefab armering). Varje kategori blir en egen SEO-sida
 * under /produkter/[slug]. Texterna är optimerade för prefab-/info-sökord –
 * målet är att ranka på "prefab armering", "klippt och bockad armering",
 * "armeringskorgar", "svetsad armering/armeringsnät" m.fl.
 */

import type { Faq } from "@/config/faq";
import { extraProducts } from "@/config/products-extra";

export type Product = {
  slug: string;
  name: string; // Kort namn (meny/kort)
  h1: string; // Rubrik på sidan
  metaTitle: string;
  metaDescription: string;
  intro: string; // Ingress
  keywords: string[];
  includes: string[]; // Egenskaper / vad som ingår
  body: { heading: string; text: string }[];
  faqs?: Faq[]; // Kategorispecifika frågor → FAQPage-schema
  featured?: boolean;
  /** Produktfoto (WebP i public/images). Visas i sidans brödtext. */
  image?: { src: string; alt: string; width: number; height: number };
};

const baseProducts: Product[] = [
  {
    slug: "klippt-och-bockad",
    name: "Klippt & bockad armering",
    h1: "Klippt och bockad armering – ILF efter din bockningslista",
    metaTitle: "Klippt och bockad armering (ILF) efter din lista",
    metaDescription:
      "Klippt och bockad armering i B500B, Ø6–Ø32, tillverkad efter din bockningslista eller ritning och märkt per position. Skicka listan – få offert.",
    intro:
      "Skicka bockningslistan eller ritningen – vi kapar och bockar kamstålet i B500B och levererar det märkt per position, klart att lägga i formen. Ingen kapning eller bockning på bygget, mindre spill och rätt mått från början. Leverans i hela Sverige, även till Norrland.",
    image: {
      src: "/images/klippt-och-bockad-bockning.webp",
      alt: "Kamstål B500B bockas i en bockningsmaskin till rätt form",
      width: 1400,
      height: 788,
    },
    keywords: [
      "klippt och bockad armering",
      "ILF armering",
      "inläggningsfärdig armering",
      "färdig bockad armering",
      "bockad armering",
      "bockning av armeringsjärn efter lista",
      "armering efter ritning",
      "beställa bockad armering",
    ],
    includes: [
      "Kapning och bockning i kamstål B500B",
      "Efter bockningslista eller ritning",
      "Dimensioner Ø6–Ø32 mm",
      "Byglar, kramlor, förankringsjärn och specialformer",
      "Märkt och buntat per position",
      "Frakt efter mängd och ort",
    ],
    body: [
      {
        heading: "Det här får du levererat",
        text: "Varje järn kommer kapat till rätt längd och bockat till rätt form: byglar, kramlor, förankringsjärn, kantjärn, S-, U- och L-former och raka längder. Allt buntas och märks per position, så att montören ser direkt var bunten ska ligga. Branschen kallar det ILF, inläggningsfärdig armering. Hur märkning och etappleveranser fungerar för entreprenörer står under [ILF-armering](/tjanster/ilf-armering).",
      },
      {
        heading: "Det här behöver vi för en offert",
        text: "En bockningslista med position, typform, mått, dimension och antal – eller konstruktionsritningen som PDF, DWG, Excel eller foto. Har du ingen lista tar vi fram den från ritningen, se [armeringsspecifikation](/tjanster/armeringsspecifikation). Vill du bygga listan själv finns vårt [verktyg för typformer A–XX](/tjanster/bockningslista). Ange också leveransort och önskat datum.",
      },
      {
        heading: "Bockningsdiameter enligt Eurokod 2",
        text: "Minsta dorndiameter för kamstål är enligt SS-EN 1992-1-1 4Ø för dimensioner upp till Ø16 och 7Ø för grövre järn. En Ø12 bockas alltså runt minst 48 mm dorn och en Ø20 runt minst 140 mm. Anger ritningen en större radie gäller den. All armering är kamstål B500B enligt SS 212540.",
      },
      {
        heading: "Vanliga fel i bockningslistor",
        text: "Inner- och yttermått blandas ihop. Ett skänkelmått saknas för typformen. Antalet anges per element men inte totalt. Vi stämmer av sådant innan tillverkning, så att det som kommer till bygget är det du menade – inte det som råkade stå i listan.",
      },
      {
        heading: "Pris och frakt",
        text: "Priset styrs av vikt per dimension och hur många kap och bockningar listan innehåller. Frakten räknas efter mängd och ort, utan fast fraktavgift – även mindre order blir rimliga. [Skicka bockningslistan och få offert](/offert) med pris och leveranstid.",
      },
    ],
    faqs: [
      { q: "Vad är ILF-armering?", a: "ILF betyder inläggningsfärdig armering: kapad, bockad, märkt och buntad per position efter bockningslista, klar att läggas i formen. Det är samma sak som klippt och bockad armering." },
      { q: "Kan ni tillverka om jag inte har någon bockningslista?", a: "Ja. Skicka konstruktionsritningen så tar vi fram listan. Du godkänner den innan något tillverkas." },
      { q: "Vilka dimensioner kan ni bocka?", a: "Kamstål B500B från Ø6 till Ø32 mm, med bockningsradier enligt Eurokod 2 eller ritningen." },
      { q: "Kan jag beställa en liten mängd?", a: "Ja. Frakten räknas efter mängd och ort, så du betalar ingen fast avgift anpassad för stora leveranser." },
      { q: "Hur lång är leveranstiden?", a: "Den beror på mängd, antal positioner och leveransort och anges i offerten. Skriv gärna önskat leveransdatum i förfrågan." },
      { q: "Vad kostar klippt och bockad armering?", a: "Priset beror på vikt, dimensioner och antal bockningar. Skicka bockningslistan eller ritningen så får du pris och frakt i offerten." },
    ],
    featured: true,
  },
  {
    slug: "armeringskorgar",
    name: "Armeringskorgar",
    h1: "Armeringskorgar – prefab korgar till balk, pelare, påle och plint",
    metaTitle: "Armeringskorgar – prefab korgar efter ritning",
    metaDescription:
      "Prefab armeringskorgar till balkar, pelare, pålar, plintar och kantbalk – svetsade eller najade efter ritning, märkta per position. Begär offert.",
    intro:
      "Vi bygger armeringskorgar efter din konstruktionsritning – huvudjärn och byglar färdigt sammanfogade, så att korgen lyfts på plats och gjuts in. Kortare tid i formen och jämnare kvalitet än att naja allt på bygget. Märkt per position och levererat i hela Sverige.",
    // TODO [OWNER]: lägg produktfoto. Skicka horisontell bild ≥1600px (rebar cage /
    // pålkorg), spara som public/images/armeringskorgar-*.webp och fyll i image nedan:
    //   image: { src: "/images/armeringskorgar-korg.webp", alt: "...", width: 1400, height: 788 },
    keywords: [
      "armeringskorgar",
      "armeringskorg",
      "prefab armeringskorg",
      "balkkorg",
      "pelarkorg",
      "pålkorg",
      "prefabricerad armering",
      "armering balk pelare",
    ],
    includes: [
      "Balk-, pelar-, pål- och plintkorgar",
      "Kantbalkskorgar till platta på mark",
      "Väggkorgar med startjärn",
      "Svetsade eller najade enligt ritning",
      "Montering av pelarskor och konsoler",
      "Märkt per korg och position",
    ],
    body: [
      {
        heading: "Välj korgtyp",
        text: "Korgen ser olika ut beroende på element. Till platta på mark: [kantbalkskorgar](/produkter/villakorg-kantbalksarmering). Till plintar och stolpfundament: [plintkorgar](/produkter/plintkorgar). Till platsgjutna pålar: [pålkorgar](/produkter/palarmering). Till stommen: [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar). Väggkorgar, brunnar och specialelement tillverkar vi också efter ritning.",
      },
      {
        heading: "Därför lönar sig prefab",
        text: "Korgen byggs vid ett bord i fabrik i stället för i formen. Bygelavståndet blir jämnt, täckskiktet lättare att hålla och arbetet på bygget kortare. Vinsten är störst där samma korg upprepas många gånger eller där armeringen är tät. Exempel finns i guiderna [armering till garage](/blogg/armering-till-garage) och [armera en stödmur](/blogg/armera-stodmur).",
      },
      {
        heading: "Svetsad eller najad",
        text: "Svetsade korgar är styva och klarar lyft och transport bättre. Svetsning av armering görs enligt SS-EN ISO 17660, men konstruktören avgör om korgen får svetsas. Annars najas den. Vi följer ritningen.",
      },
      {
        heading: "Offert på korgarna",
        text: "Skicka konstruktionsritningen eller armeringsspecifikationen och antal korgar. Saknas spec tar vi fram den. Offerten visar vikt per korg, total mängd och frakt efter mängd och ort. [Skicka ritningen – få offert på korgarna](/offert).",
      },
    ],
    faqs: [
      { q: "Vad är en armeringskorg?", a: "Färdigmonterad armering till ett bärande element, till exempel balk, pelare, påle eller plint: huvudjärn och byglar sammanfogade till en korg som lyfts på plats och gjuts in." },
      { q: "Är korgarna svetsade eller najade?", a: "Båda förekommer. Svetsade korgar är styvare vid lyft, najade används där konstruktören inte tillåter svetsning. Ritningen avgör." },
      { q: "Vilken korg behöver jag?", a: "Det framgår av konstruktionsritningen. Skicka den så går vi igenom vilka korgar och lösa positioner som ingår och lämnar en samlad offert." },
    ],
    featured: true,
  },
  {
    slug: "armeringsnat",
    name: "Armeringsnät",
    h1: "Armeringsnät – lagernät 5150–8150 och nät efter mått",
    metaTitle: "Armeringsnät 5150, 6150 och 8150 – köp med leverans",
    metaDescription:
      "Armeringsnät 5150, 6150, 7150 och 8150 till platta, garage och grund. Vi räknar antal nät med överlapp och levererar i hela Sverige. Begär offert.",
    intro:
      "Köp armeringsnät till platta, golv och grund – lagernät 5150–8150 eller nät kapade till valfria mått. Skicka ytan eller ritningen så räknar vi antal nät med överlapp, lägger till distanser och kantjärn och levererar allt samtidigt i hela Sverige.",
    keywords: [
      "armeringsnät",
      "armeringsnat",
      "armeringsnät 6150",
      "armeringsnät 5150",
      "armeringsnät 8150",
      "köpa armeringsnät",
      "armeringsnät leverans",
      "fingerskarvnät",
      "armeringsnät efter mått",
      "kapat armeringsnät",
      "armeringsmatta",
    ],
    includes: [
      "Lagernät 5150, 6150, 7150 och 8150",
      "Fingerskarvnät för kortare överlapp",
      "Nät kapade till valfria mått",
      "Antal nät räknat med överlapp",
      "Distanser och kantjärn i samma leverans",
      "Frakt efter mängd och ort",
    ],
    body: [
      {
        heading: "Vilket nät behöver du?",
        text: "Beteckningen anger tråd och ruta: 6150 är Ø6 mm tråd med 150 mm mellan trådarna. Uterum och mindre plattor armeras ofta med 5150, garage- och villaplattor med 6150 och hårt belastade plattor med 8150 eller två nätlager. Ritningen avgör. Mer om storlekar finns i guiden [armeringsnät – storlekar och mått](/blogg/armeringsnat-storlekar-och-matt).",
      },
      {
        heading: "Vikt per m²",
        text: "Ett 150-nät har ca 13,3 m tråd per m² (två riktningar). Det ger ungefär 2,1 kg/m² för 5150, 3,0 kg/m² för 6150, 4,0 kg/m² för 7150 och 5,3 kg/m² för 8150, utan överlapp. En platta på 100 m² med 6150 kräver alltså drygt 300 kg nät när skarvarna räknas in.",
      },
      {
        heading: "Rätt antal nät – utan spill",
        text: "Vi räknar ut hur många nät ytan kräver, med överlapp på minst två rutor (ca 300 mm för 150-nät). Fingerskarvnät har utstickande trådar i kanten och ger kortare överlapp, vilket sparar material på stora ytor. Vill du räkna själv först? Testa [armeringskalkylatorn](/armeringskalkylator).",
      },
      {
        heading: "När lagernät inte passar",
        text: "Vi kapar näten till valfria mått, så att de går jämnt ut i plattan och du slipper kapa på bygget. Avvikande maskvidd eller tråd? Då tillverkas [specialnät efter mått](/produkter/svetsad-armering). [Kantjärn och byglar](/produkter/klippt-och-bockad) och [distanser](/produkter/distanser) skickas i samma leverans som näten.",
      },
      {
        heading: "Pris och leverans",
        text: "Priset beror på nättyp, antal och leveransort. Nät, tillbehör och frakt står i samma offert, och frakten räknas efter mängd och ort – ingen fast fraktavgift. [Skicka plattans mått – få offert på näten](/offert).",
      },
    ],
    faqs: [
      { q: "Vilket armeringsnät till garageplatta?", a: "Ofta 6150, kompletterat med kantjärn och kantbalksbyglar. Tyngre last kan kräva grövre nät eller två lager. Konstruktionsritningen gäller." },
      { q: "Hur mycket ska armeringsnät överlappa?", a: "Minst två rutor, för 150-nät ca 300 mm, och skarven najas. Fingerskarvnät ger kortare överlapp." },
      { q: "Kan ni räkna ut hur många nät jag behöver?", a: "Ja. Skicka plattans mått eller ritningen så räknar vi antal nät med överlapp samt kantjärn och distanser, i en samlad offert." },
      { q: "Kan ni kapa armeringsnät efter mått?", a: "Ja. Vi kapar nät till valfria mått efter plattan eller ritningen, så att du får färdiga ark utan kapning på bygget." },
      { q: "Kan jag beställa bara några nät?", a: "Ja. Frakten räknas efter mängd och ort, så även en mindre beställning går att leverera." },
      { q: "Levererar ni armeringsnät i hela Sverige?", a: "Ja, även till Norrland. Frakt och leveranstid anges i offerten." },
    ],
  },
  {
    slug: "svetsad-armering",
    name: "Specialnät & svetsad armering",
    h1: "Svetsad armering – specialnät och svetsade mattor efter mått",
    metaTitle: "Specialnät och svetsad armering efter mått",
    metaDescription:
      "Specialnät och svetsade mattor med den maskvidd, tråd och de mått ritningen kräver – färre skarvar och mindre kap på bygget. Skicka måtten, få offert.",
    intro:
      "Passar inte lagernäten? Vi levererar specialnät och svetsade mattor med den maskvidd, trådgrovlek och de yttermått ritningen kräver. Det ger färre skarvar och mindre kap på bygget. Leverans i hela Sverige.",
    // TODO [OWNER]: lägg produktfoto. Skicka horisontell bild ≥1600px (welded wire
    // mesh / armeringsnät staplat), spara som public/images/svetsad-armering-*.webp och fyll i image nedan:
    //   image: { src: "/images/svetsad-armering-nat.webp", alt: "...", width: 1400, height: 788 },
    keywords: [
      "svetsad armering",
      "specialnät armering",
      "specialnät",
      "svetsat nät",
      "nätarmering",
      "svetsade mattor",
    ],
    includes: [
      "Specialnät efter mått och ritning",
      "Anpassad maskvidd och trådgrovlek",
      "Svetsade mattor och plattnät",
      "Utstick och urtag efter ritning",
      "Märkt per position",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "När specialnät lönar sig",
        text: "Lagernät finns i fasta format – se [armeringsnät 5150–8150](/produkter/armeringsnat). Specialnät lönar sig när ytan har många urtag, smala remsor eller avvikande c/c-avstånd, eller när ritningen kräver annan tråd än lagernäten har. Ett nät som passar direkt ersätter kap, extra skarvar och lösa järn på bygget.",
      },
      {
        heading: "Det här behöver vi",
        text: "Yttermått, maskvidd i båda riktningar, tråddimension, eventuella utstick och urtag samt antal per typ. Enklast är att skicka ritningen eller en nätförteckning. Vi stämmer av måtten innan tillverkning.",
      },
      {
        heading: "Nät, järn och distanser i en leverans",
        text: "Specialnät kombineras ofta med [klippt och bockad armering](/produkter/klippt-och-bockad) vid kanter och öppningar och med [distanser](/produkter/distanser) för rätt täckskikt. Allt kommer i samma leverans. Mer om golv finns i guiden [armering till betonggolv](/blogg/armering-till-betonggolv).",
      },
      {
        heading: "Offert på specialnät",
        text: "Priset beror på nättyp, mängd och leveransort. Frakten räknas efter mängd och ort. [Skicka ritningen – få offert på specialnäten](/offert).",
      },
    ],
    faqs: [
      { q: "Vad är svetsad armering?", a: "Armering där trådarna svetsas ihop i korsningarna till ett rutnät. Vanligast som armeringsnät till plattor, golv och väggar." },
      { q: "Vad är skillnaden på lagernät och specialnät?", a: "Lagernät har fasta format och maskvidder. Specialnät tillverkas efter dina mått, maskvidder och trådgrovlekar, så att skarvar och kap på bygget minskar." },
      { q: "Vad behöver ni för att offerera specialnät?", a: "Yttermått, maskvidd, tråddimension, utstick och antal – eller ritningen. Vi stämmer av måtten innan tillverkning." },
    ],
  },
  {
    slug: "armeringsjarn",
    name: "Armeringsjärn & kamstål",
    h1: "Köpa armeringsjärn – kamstål B500B i 6 och 12 m",
    metaTitle: "Köpa armeringsjärn – rakstål 6 & 12 m, leverans",
    metaDescription:
      "Köp armeringsjärn i kamstål B500B: rakstål i 6 och 12 m eller kapat till mått, Ø6–Ø32 mm. Leverans i hela Sverige, frakt efter mängd. Begär offert.",
    intro:
      "Köp armeringsjärn i kamstål B500B – rakstål i 6 eller 12 m, eller kapat till dina mått, Ø6–Ø32 mm. Vi levererar till bygget i hela Sverige, gärna i samma leverans som nät och bockade detaljer.",
    image: {
      src: "/images/armeringsjarn-kamstal.webp",
      alt: "Armeringsjärn i kamstål bundna i ett rutnät på bygget",
      width: 1400,
      height: 938,
    },
    keywords: [
      "köpa armeringsjärn",
      "armeringsjärn",
      "armeringsjärn 6 meter",
      "armeringsjärn 12 meter",
      "rakstål",
      "kamstål B500B",
      "armeringsjärn leverans",
      "beställa armeringsjärn",
    ],
    includes: [
      "Kamstål B500B enligt SS 212540",
      "Ø6, Ø8, Ø10, Ø12, Ø16, Ø20, Ø25 och Ø32 mm",
      "Rakstål i 6 m och 12 m",
      "Kapning till mått",
      "Samleverans med nät och bockat",
      "Frakt efter mängd och ort",
    ],
    body: [
      {
        heading: "Kamstål B500B",
        text: "Armeringsjärn, eller kamstål, har kammar som ger vidhäftning i betongen. B500B har sträckgräns 500 MPa och god seghet och är den vanligaste kvaliteten för hus och anläggning i Sverige. Klena dimensioner (Ø6–Ø10) används ofta till byglar och komplettering, grövre (Ø12–Ø32) till huvudarmering i balkar, pelare och plattor. Dimension och mängd följer ritningen.",
      },
      {
        heading: "6 m eller 12 m?",
        text: "12 m ger färre skarvar i långa plattor och balkar men kräver plats och oftast lyft vid lossning. 6 m bärs för hand och passar trånga tomter. En 12 m Ø12 väger ca 10,7 kg och en 12 m Ø16 ca 19 kg – samma järn i 6 m väger hälften. Ska järnen också bockas gör vi det som [klippt och bockad armering](/produkter/klippt-och-bockad).",
      },
      {
        heading: "Vikt per meter",
        text: "Ø6 0,222 kg/m · Ø8 0,395 · Ø10 0,617 · Ø12 0,888 · Ø16 1,58 · Ø20 2,47 · Ø25 3,85 · Ø32 6,31 kg/m. Multiplicera med total längd så får du vikten att jämföra offerter med. Fler tabeller finns i guiderna [armeringsjärn – dimensioner](/blogg/armeringsjarn-dimensioner) och [armeringsstål](/blogg/armeringsstal).",
      },
      {
        heading: "Beställ och få leverans",
        text: "Ange dimension, längd och antal (eller total vikt) och leveransort. Frakten räknas efter mängd och ort – ingen fast fraktavgift – och vi levererar i hela Sverige, även till Norrland. [Begär offert på armeringsjärn](/offert).",
      },
    ],
    faqs: [
      { q: "Vad är B500B?", a: "En standardkvalitet för kamstål med sträckgräns 500 MPa och god duktilitet (klass B). Den vanligaste kvaliteten för hus och anläggning i Sverige." },
      { q: "Vilka dimensioner finns?", a: "Ø6, Ø8, Ø10, Ø12, Ø16, Ø20, Ø25 och Ø32 mm i raka längder. Vi kapar också till mått." },
      { q: "Hur tungt är ett armeringsjärn?", a: "En 6 m Ø12 väger ca 5,3 kg och en 12 m Ø12 ca 10,7 kg. Vikten per meter är 0,888 kg för Ø12 och 1,58 kg för Ø16." },
      { q: "Hur beställer jag?", a: "Ange dimension, längd och antal eller total vikt samt leveransort. Pris och frakt efter mängd och ort står i offerten." },
      { q: "Kan jag beställa lösa järn och prefab samtidigt?", a: "Ja, lösa armeringsjärn levereras gärna tillsammans med bockade detaljer, korgar och nät i samma leverans." },
    ],
  },
  {
    slug: "distanser",
    name: "Distanser & tillbehör",
    h1: "Distanser för armering – distansklossar och nätstöd",
    metaTitle: "Distanser för armering – distansklossar och nätstöd",
    metaDescription:
      "Distansklossar, distanslister och nätstöd för rätt täckskikt – vi väljer höjd efter ritningen och levererar med armeringen i hela Sverige. Begär offert.",
    intro:
      "Distanser håller armeringen på rätt höjd så att täckskiktet blir det ritningen anger. Vi levererar distansklossar, distanslister och nätstöd i rätt höjd och antal, i samma leverans som armeringen.",
    image: {
      src: "/images/distanser-armeringsnat.webp",
      alt: "Armeringsnät upplyft på distanser för rätt täckskikt",
      width: 1400,
      height: 935,
    },
    keywords: [
      "distanser armering",
      "distanser",
      "distansklossar",
      "distanskloss armering",
      "nätstöd",
      "nätstöd armering",
      "distanslist",
      "bockstöd",
    ],
    includes: [
      "Distansklossar i plast och betong",
      "Distanslister för nät på isolering",
      "Nätstöd och bockstöd för övre lager",
      "Höjd vald efter ritningens täckskikt",
      "Till plattor, väggar och korgar",
      "Levereras med armeringen",
    ],
    body: [
      {
        heading: "Vilken distans var?",
        text: "Distansklossar (punktdistanser i plast eller betong) bär underkantsarmeringen och ger täckskiktet mot form eller mark. Distanslister fördelar lasten längs en linje och trycks inte ner i cellplast. Nätstöd, även kallade bockstöd eller stolar, håller överkantsnätet på rätt höjd vid dubbel armering.",
      },
      {
        heading: "Täckskikt – typiska värden",
        text: "Täckskiktet bestäms av exponeringsklass och konstruktör. Mot cellplast i platta på mark anger ritningen ofta 25–35 mm. Gjuts betongen mot förberett underlag, till exempel avjämningsbetong, gäller enligt Eurokod 2 (SS-EN 1992-1-1) minst 40 mm, och direkt mot jord minst 75 mm. Distansens höjd = täckskiktet på ritningen. Läs mer i guiden [distanser och täckskikt](/blogg/distanser-tackskikt-armering).",
      },
      {
        heading: "Vanligt fel: för få distanser",
        text: "Nätet trampas ner mellan distanserna när man går på det under gjutningen, och täckskiktet försvinner just där. Tätare placering vid gångstråk och under tunga skarvar håller nätet uppe. Vi räknar antal efter nätets dimension och ytan.",
      },
      {
        heading: "Beställ med armeringen",
        text: "Distanser följer med armeringsleveransen, tillsammans med [najtråd och tillbehör](/produkter/najtrad-och-tillbehor). Skriv täckskikt och plattans tjocklek i förfrågan så väljer vi höjd. [Lägg till distanser i offerten](/offert).",
      },
    ],
    faqs: [
      { q: "Varför behövs distanser?", a: "De håller armeringen på rätt höjd så att täckskiktet blir korrekt. Det skyddar armeringen mot korrosion och ger den bärförmåga konstruktören räknat med." },
      { q: "Vilken distanshöjd ska jag välja?", a: "Samma som täckskiktet på ritningen. Skriv täckskikt och plattjocklek i förfrågan så väljer vi distanser." },
      { q: "Vad är skillnaden på distansklossar och nätstöd?", a: "Distansklossar bär den nedre armeringen och ger täckskiktet. Nätstöd håller det övre nätet på rätt avstånd ovanför det nedre vid dubbel armering." },
      { q: "Kan jag beställa bara distanser?", a: "Distanserna levereras tillsammans med armering, så att de följer med i samma frakt." },
    ],
  },
  {
    slug: "byglar-och-hakar",
    name: "Byglar & hakar",
    h1: "Armeringsbyglar – färdiga byglar efter mått",
    metaTitle: "Armeringsbyglar – färdiga byglar efter mått",
    metaDescription:
      "Färdiga armeringsbyglar efter mått: U-byglar, slutna byglar, kantbalksbyglar och hakar i B500B, buntade per position på pall. Skicka måtten – få offert.",
    intro:
      "Färdiga armeringsbyglar efter dina mått – U-byglar, slutna byglar, kantbalksbyglar, trappbyglar och hakar i B500B. Serietillverkade med samma mått på varje bygel, buntade per position och levererade på pall till bygget eller elementfabriken.",
    keywords: [
      "armeringsbyglar",
      "färdiga armeringsbyglar",
      "byglar armering",
      "u-bygel",
      "sluten bygel",
      "trappbygel",
      "armeringshake",
      "kantbalksbygel",
      "bygel b500b",
    ],
    includes: [
      "U-byglar, trappbyglar och hakar",
      "Slutna byglar med 135°-krokar",
      "Kantbalksbyglar till platta på mark",
      "B500B, vanligen Ø6–Ø12 mm",
      "Buntat per position på pall",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Vanliga former",
        text: "U-bygel (typform C), sluten bygel (typform N) med 135°-krokar, kantbalksbyglar, trappbyglar och enkla hakar – och specialformer efter ritning. Alla standardformer med bokstavskod finns i vår [översikt över typformer](/tjanster/bockningslista). Ange kod och mått när du begär offert. Mer om bygelavstånd finns i guiden [armeringsbyglar](/blogg/armeringsbyglar).",
      },
      {
        heading: "Så räknar du antal byglar",
        text: "Antal = längd / c/c-avstånd + 1. En kantbalk på 40 m med byglar c/c 300 kräver 40 000 / 300 ≈ 133 mellanrum, alltså 134 byglar. Lägg till extra byglar där ritningen anger tätare avstånd, till exempel vid hörn och stöd.",
      },
      {
        heading: "Samma mått i hela serien",
        text: "Byglar går åt i stora mängder i balkar, pelare, kantbalkar och prefabelement. Serietillverkade byglar får samma mått varje gång, vilket gör att korgen blir rak och täckskiktet jämnt. Byglarna buntas per position och levereras på pall, gärna tillsammans med övrig armering.",
      },
      {
        heading: "Offert på byglar",
        text: "Skicka typform, mått, dimension och antal per position – eller ritningen. Ju större serie, desto lägre styckpris. [Skicka bygellistan – få offert](/offert).",
      },
    ],
    faqs: [
      { q: "Vilka dimensioner kan byglar tillverkas i?", a: "Vanligen B500B Ø6–Ø12 mm. Grövre byglar tillverkas av raka stänger. Ange dimension och mått per position." },
      { q: "Hur många byglar måste jag beställa?", a: "Både mindre partier och stora serier går bra. Ju större serie, desto lägre pris per styck." },
      { q: "Hur anger jag formen?", a: "Enklast med typformens bokstavskod, till exempel N för sluten bygel och C för U-bygel, och måtten a, b, c. Alla koder finns i vår översikt över typformer." },
    ],
  },
  {
    slug: "lyftoglor",
    name: "Lyftöglor & lyftkrokar",
    h1: "Lyftöglor och lyftkrokar för betongelement",
    metaTitle: "Lyftöglor & lyftkrokar för betongelement",
    metaDescription:
      "Lyftöglor och lyftkrokar av rundstål för betongelement, trappor och balkar – bockade efter konstruktörens ritning, i små och stora serier. Begär offert.",
    intro:
      "Vi bockar lyftöglor och lyftkrokar av rundstål till betongelement, trappor, balkar och andra prefabdelar – exakt efter konstruktörens ritning och i den serie du behöver.",
    keywords: [
      "lyftöglor",
      "lyftkrok",
      "beställa lyftöglor",
      "lyftöglor prefab",
      "lyftöglor rundstål",
    ],
    includes: [
      "Lyftöglor och lyftkrokar av rundstål",
      "Bockade efter konstruktörens ritning",
      "För element, trappor och balkar",
      "Små och stora serier",
      "Märkt per position",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Tillverkat efter konstruktörens ritning",
        text: "Lyftöglor gjuts in i elementet så att det kan lyftas säkert vid tillverkning, transport och montage. Form, dimension och förankringslängd bestäms av elementets konstruktör utifrån vikt och lyftsätt. Vi tillverkar exakt efter den specifikationen – dimensioneringen ligger hos konstruktören.",
      },
      {
        heading: "Rundstål, inte kamstål",
        text: "Lyftöglor bockas normalt av slätt, segt rundstål, till exempel S235, enligt konstruktörens specifikation. Kamstål används normalt inte till lyftöglor. Ange materialkrav i förfrågan. Typer och placering beskrivs i guiden [lyftöglor i betong](/blogg/lyftoglor-betong).",
      },
      {
        heading: "För elementfabriker och byggen",
        text: "Vi levererar till elementfabriker och till byggen som gjuter egna element. Beställ öglorna tillsammans med elementens övriga armering, till exempel [byglar](/produkter/byglar-och-hakar), så kommer allt i samma leverans. [Skicka ritningen – få offert på lyftöglorna](/offert).",
      },
    ],
    faqs: [
      { q: "Vad behöver ni för att tillverka lyftöglor?", a: "Ritning eller mått, material, dimension och antal. Vi bockar exakt efter konstruktörens specifikation." },
      { q: "Vilket material används?", a: "Normalt slätt, segt rundstål, till exempel S235, enligt konstruktörens specifikation – inte kamstål." },
      { q: "Dimensionerar ni lyftöglorna?", a: "Nej, dimensioneringen görs av elementets konstruktör. Vi tillverkar efter den ritning eller specifikation du skickar." },
    ],
  },
  {
    slug: "armering-i-ringar",
    name: "Armering i ringar",
    h1: "Armering i ringar – kamstål B500B på rulle",
    metaTitle: "Armering i ringar – kamstål B500B Ø8–Ø16",
    metaDescription:
      "Kamstål B500B i ringar (på rulle), Ø8–Ø16 mm, för rät- och bockmaskiner i elementfabriker och verkstäder. Leverans i hela Sverige. Begär offert.",
    intro:
      "Kamstål B500B i ringar, Ø8–Ø16 mm, för dig som rätar och bockar i egen maskin – elementfabriker, armeringsverkstäder och större byggen med egen bockning.",
    keywords: [
      "armering i ringar",
      "kamstål ringar",
      "armering på rulle",
      "rullarmering",
      "b500b ringar",
      "kamstål rulle",
    ],
    includes: [
      "Kamstål B500B i ringar",
      "Dimensioner Ø8–Ø16 mm",
      "För rät- och bockmaskiner",
      "Per ring eller i större partier",
      "Kombineras med raka stänger och prefab",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Varför ringar?",
        text: "I en rät- och bockmaskin rätas materialet och kapas till exakt längd. Det ger nästan inget spill och gör det effektivt att tillverka byglar och korta järn i stora serier – jämfört med raka stänger där restbitar blir över.",
      },
      {
        heading: "Ange det här i förfrågan",
        text: "Dimension, mängd i ton, vilken ringvikt och vilket innermått maskinen tar samt leveransort. Ringvikten varierar mellan tillverkare, så det är maskinens gränser som styr.",
      },
      {
        heading: "Ringar, raka stänger eller färdigt bockat",
        text: "Du kan kombinera: ringar till egen produktion och [klippt och bockad armering](/produkter/klippt-och-bockad) eller [färdiga byglar](/produkter/byglar-och-hakar) för det som inte lönar sig att bocka själv – i samma leverans. [Begär offert på armering i ringar](/offert).",
      },
    ],
    faqs: [
      { q: "Vilka dimensioner finns i ringar?", a: "Kamstål B500B i ringar levereras normalt i Ø8–Ø16 mm." },
      { q: "Vad väger en ring?", a: "Det varierar med dimension och tillverkare, ofta ett par ton. Ange vilken ringvikt din maskin hanterar." },
      { q: "Kan jag kombinera ringar med färdigbockat?", a: "Ja. Ringar, raka stänger och färdigbockade detaljer kan levereras tillsammans." },
    ],
  },
  {
    slug: "3d-bockning",
    name: "3D- & bågbockning",
    h1: "3D-bockning och bågbockning av armering",
    metaTitle: "3D-bockning & bågbockning av armering",
    metaDescription:
      "Rumsbockade 3D-former och bågformad armering i B500B till runda fundament, brunnar och vindkraftsfundament – bockat efter ritning. Begär offert.",
    intro:
      "Vi bockar armering i flera plan och i bågar – rumsbockade specialformer och bågformade järn till brunnar, tankar, runda plintar och vindkraftsfundament. Tillverkat i B500B efter ritning och märkt per position.",
    keywords: [
      "3d bockning armering",
      "rumsbockad armering",
      "bågbockning armering",
      "bågformad armering",
      "armering vindkraftsfundament",
      "armering runt fundament",
      "specialbockning armering",
    ],
    includes: [
      "Rumsbockade former (typform SX, X, XX)",
      "Bågformade järn efter radie",
      "Runda fundament, brunnar och tankar",
      "Vindkraftsfundament",
      "B500B efter ritning",
      "Märkt per position",
    ],
    body: [
      {
        heading: "Former i flera plan",
        text: "Vissa detaljer har ben som pekar åt olika håll – rumsbockade former. De tillverkas efter ritningen så att de passar direkt i formen, utan justering på bygget. Typformerna SX, X och XX finns i vår [översikt över typformer](/tjanster/bockningslista).",
      },
      {
        heading: "Bågar till runda konstruktioner",
        text: "Till brunnar, tankar, runda plintar och cirkulära fundament bockas järnen i den radie konstruktionen kräver (typform Q). Vid stora fundament, som vindkraftsfundament, märks bågarna per position och radie så att monteringen går snabbt.",
      },
      {
        heading: "Offert på specialbockning",
        text: "Skicka ritning och bockningslista med radie eller typform och mått. Vi stämmer av geometrin innan tillverkning. [Skicka ritningen – få offert](/offert).",
      },
    ],
    faqs: [
      { q: "Hur anger jag en bågformad eller 3D-bockad form?", a: "Ange typform, till exempel Q för bågformad stång eller SX/X/XX för rumsbockade, med mått – eller bifoga ritningen." },
      { q: "Tillverkar ni armering till vindkraftsfundament?", a: "Ja, bågformade järn och specialformer till runda fundament, inklusive vindkraftsfundament. Skicka ritning och bockningslista så återkommer vi med offert." },
    ],
  },
];

export const products: Product[] = [...baseProducts, ...extraProducts];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
