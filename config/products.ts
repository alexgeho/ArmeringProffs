/**
 * Produktkategorier (prefab armering). Varje kategori blir en egen SEO-sida
 * under /produkter/[slug]. Texterna är optimerade för prefab-/info-sökord –
 * målet är att ranka på "prefab armering", "klippt och bockad armering",
 * "armeringskorgar", "svetsad armering/armeringsnät" m.fl.
 */

import type { Faq } from "@/config/faq";

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
};

export const products: Product[] = [
  {
    slug: "klippt-och-bockad",
    name: "Klippt & bockad armering",
    h1: "Klippt & bockad armering efter bockningslista",
    metaTitle: "Klippt & bockad armering | Prefab efter ritning – hela Sverige",
    metaDescription:
      "Klippt och bockad armering tillverkad efter din bockningslista eller ritning. Kapat och bockat kamstål B500B, märkt och sorterat, levererat i hela Sverige. Begär offert.",
    intro:
      "Vi tillverkar klippt och bockad armering efter din bockningslista eller konstruktionsritning. Varje järn kapas och bockas till rätt längd och form i B500B, märks och sorteras – redo att läggas direkt på bygget. Vi levererar i hela Sverige.",
    keywords: [
      "klippt och bockad armering",
      "bockad armering",
      "kapad armering",
      "prefab armering",
      "prefabricerad armering",
      "armering efter ritning",
      "bockningslista armering",
      "beställa armering",
    ],
    includes: [
      "Kapning och bockning i B500B kamstål",
      "Tillverkning efter bockningslista eller ritning",
      "Dimensioner Ø6–Ø32 mm",
      "Bygel, kramla, förankringsjärn och specialformer",
      "Märkning och positionssortering per element",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Vad är klippt och bockad armering?",
        text: "Klippt och bockad armering (även kallad kapad och bockad armering) betyder att kamstålet levereras färdigkapat och böjt till exakt rätt form enligt en bockningslista. I stället för att kapa och bocka järn på arbetsplatsen får du färdiga detaljer – byglar, kramlor, förankringar och raka längder – som bara ska monteras. Det sparar tid, minskar spill och ger rätt mått enligt ritning.",
      },
      {
        heading: "Från bockningslista till färdig leverans",
        text: "Skicka din bockningslista eller konstruktionsritning (PDF, DWG, Excel eller bild) så tar vi fram en offert. Vi tillverkar varje position i rätt dimension, form och antal, märker och buntar per element och levererar sorterat till bygget. Har du ingen färdig bockningslista hjälper vi till att ta fram den utifrån ritningen.",
      },
      {
        heading: "Kvalitet och standard",
        text: "All armering är varmvalsat kamstål B500B enligt SS 212540 och tillverkas efter gällande normer. Bockningsradier och former följer bockningslistan så att täckskikt och passform stämmer mot konstruktionen.",
      },
    ],
    faqs: [
      { q: "Vad betyder klippt och bockad armering?", a: "Att kamstålet levereras färdigkapat och böjt till rätt form enligt en bockningslista, redo att monteras på plats utan kapning eller bockning på bygget." },
      { q: "Kan ni tillverka efter min ritning eller bockningslista?", a: "Ja. Skicka bockningslista eller konstruktionsritning (PDF, DWG, Excel eller foto) så tar vi fram offert och tillverkar efter den. Saknar du bockningslista hjälper vi dig att ta fram en." },
      { q: "Vilka dimensioner kan bockas?", a: "Vi kapar och bockar kamstål i B500B från Ø6 till Ø32 mm, med bockningsradier enligt standard och konstruktionsritning." },
      { q: "Levererar ni i hela Sverige?", a: "Ja, vi tillverkar och levererar klippt och bockad armering i hela Sverige. Leveranstid och frakt anges i offerten utifrån ort och mängd." },
    ],
    featured: true,
  },
  {
    slug: "armeringskorgar",
    name: "Armeringskorgar",
    h1: "Armeringskorgar – prefab till balk, pelare och pålar",
    metaTitle: "Armeringskorgar | Prefab balk- & pelarkorgar – hela Sverige",
    metaDescription:
      "Prefabricerade armeringskorgar till balkar, pelare, pålar och grundplintar. Svetsade eller bundna korgar efter ritning, levererade färdiga i hela Sverige. Begär offert.",
    intro:
      "Vi tillverkar prefabricerade armeringskorgar till balkar, pelare, pålar, plintar och brunnar. Korgarna byggs efter din ritning – svetsade eller bundna – och levereras färdiga till bygget så att montaget går snabbt och rätt.",
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
      "Balk-, pelar- och pålkorgar efter ritning",
      "Svetsade eller bundna korgar",
      "Byglar och huvudjärn i B500B",
      "Plint- och brunnsarmering",
      "Tillverkning mot konstruktionsritning",
      "Färdiga korgar levererade i hela Sverige",
    ],
    body: [
      {
        heading: "Prefab armeringskorgar sparar tid på bygget",
        text: "En armeringskorg är färdigmonterad armering för ett bärande element – till exempel en balk, pelare eller påle. Genom att prefabricera korgen i verkstad i stället för att binda den på plats kortas byggtiden, kvaliteten blir jämnare och arbetsmiljön bättre. Korgen lyfts på plats och gjuts in.",
      },
      {
        heading: "Byggda efter din konstruktion",
        text: "Vi tillverkar korgarna efter konstruktionsritning med rätt huvudjärn, byglar, bygelavstånd och täckskikt. Korgar kan svetsas för styvhet eller bindas enligt föreskrift. Vi märker varje korg med position så att rätt korg hamnar på rätt plats.",
      },
      {
        heading: "Till grund, stomme och anläggning",
        text: "Armeringskorgar används i husgrunder, stommar, broar, stödmurar och anläggning. Vanliga tillämpningar är kantbalkar, sockelbalkar, pelare, plintar, pålar och rörbrunnar. Berätta om ditt projekt så föreslår vi rätt utförande.",
      },
    ],
    faqs: [
      { q: "Vad är en armeringskorg?", a: "En armeringskorg är färdigmonterad armering för ett bärande element som en balk, pelare eller påle – huvudjärn och byglar sammanfogade till en korg som lyfts på plats och gjuts in." },
      { q: "Är korgarna svetsade eller bundna?", a: "Båda utförandena finns. Svetsade korgar blir styva och lätta att hantera, bundna korgar tillverkas där föreskriften kräver det. Vi följer konstruktionsritningen." },
      { q: "Kan ni tillverka korgar efter vår ritning?", a: "Ja, vi bygger korgarna efter er konstruktionsritning med rätt dimensioner, bygelavstånd och täckskikt, och märker varje korg med position." },
    ],
    featured: true,
  },
  {
    slug: "svetsad-armering",
    name: "Svetsad armering & nät",
    h1: "Svetsad armering – armeringsnät och specialnät",
    metaTitle: "Svetsad armering & armeringsnät | Nät och specialnät – Sverige",
    metaDescription:
      "Svetsad armering: armeringsnät, specialnät och svetsade mattor efter mått. Standardnät och nät tillverkade efter ritning, levererade i hela Sverige. Begär offert.",
    intro:
      "Vi levererar svetsad armering – standardarmeringsnät, specialnät och svetsade mattor tillverkade efter dina mått och ritningar. Nät ger snabb och jämn armering av plattor, väggar och golv, och specialnät sparar tid när standardformat inte räcker.",
    keywords: [
      "svetsad armering",
      "armeringsnät",
      "armeringsnat",
      "specialnät armering",
      "svetsat nät",
      "nätarmering",
      "armeringsmatta",
      "prefab armering",
    ],
    includes: [
      "Standardarmeringsnät (t.ex. NPS 500)",
      "Specialnät efter mått och ritning",
      "Svetsade mattor och plattnät",
      "Anpassade maskvidder och trådgrovlekar",
      "Kap och anpassning efter behov",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Armeringsnät för plattor och väggar",
        text: "Svetsad armering, oftast i form av armeringsnät, är ett rutnät av kamstål svetsat i korsningarna. Nät används för att armera betongplattor, golv, väggar och bjälklag snabbt och med jämn kvalitet. Standardnät levereras i fasta format medan specialnät tillverkas efter dina mått.",
      },
      {
        heading: "Specialnät sparar tid och material",
        text: "När standardnät inte passar tar vi fram specialnät med rätt maskvidd, trådgrovlek och yttermått. Rätt anpassat nät minskar antalet skarvar och kap på bygget, vilket sparar både tid och material. Skicka mått eller ritning så räknar vi fram ett förslag.",
      },
      {
        heading: "Rätt nät till rätt konstruktion",
        text: "Vi hjälper dig att välja nät utifrån konstruktionens krav på bärighet och täckskikt. Kombinera gärna nät med klippt och bockad armering och distanser för ett komplett armeringspaket.",
      },
    ],
    faqs: [
      { q: "Vad är svetsad armering?", a: "Svetsad armering är kamstål sammanfogat i ett rutnät genom svetsning i korsningarna – vanligast som armeringsnät för att armera plattor, golv och väggar." },
      { q: "Vad är skillnaden på standardnät och specialnät?", a: "Standardnät levereras i fasta format och maskvidder, medan specialnät tillverkas efter dina mått, maskvidder och trådgrovlekar för att minska skarvar och kap på bygget." },
      { q: "Kan ni tillverka nät efter mått?", a: "Ja, vi tillverkar specialnät och svetsade mattor efter dina mått och ritningar och levererar i hela Sverige." },
    ],
  },
  {
    slug: "armeringsjarn",
    name: "Armeringsjärn & kamstål",
    h1: "Armeringsjärn och kamstål B500B",
    metaTitle: "Armeringsjärn & kamstål B500B | Dim 6–32 mm – hela Sverige",
    metaDescription:
      "Armeringsjärn i kamstål B500B, dimension 6–32 mm. Raka längder och rullat material som komplement till prefab armering. Levereras i hela Sverige. Begär offert.",
    intro:
      "Vi levererar armeringsjärn i kamstål B500B som komplement till prefab-sortimentet. Raka längder och rullat material i dimension Ø6–Ø32 mm – för dig som vill komplettera nät och bockade detaljer med lösa järn.",
    keywords: [
      "armeringsjärn",
      "armeringsjarn",
      "kamstål",
      "kamstal",
      "armeringsstål",
      "B500B",
      "armering dimensioner",
      "beställa armeringsjärn",
    ],
    includes: [
      "Kamstål B500B enligt SS 212540",
      "Dimensioner Ø6, Ø8, Ø10, Ø12, Ø16, Ø20, Ø25, Ø32 mm",
      "Raka längder och rullat material",
      "Kapning på begäran",
      "Komplement till nät och bockad armering",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Kamstål B500B – standarden för armering",
        text: "Armeringsjärn, eller kamstål, är varmvalsat stål med kammar som ger vidhäftning i betongen. B500B är den vanligaste kvaliteten för husbyggnad och anläggning i Sverige. Dimensionen anges i millimeter, från klena Ø6 för byglar till grova Ø32 för kraftigt belastade konstruktioner.",
      },
      {
        heading: "Rätt dimension till rätt uppgift",
        text: "Klena dimensioner (Ø6–Ø10) används ofta till byglar och nätkomplettering, medan grövre järn (Ø12–Ø32) tar upp huvudlaster i balkar, pelare och plattor. Dimension och mängd ska följa konstruktionsritningen – hör av dig så hjälper vi dig att räkna.",
      },
      {
        heading: "Komplement till prefab",
        text: "Lösa armeringsjärn passar som komplement när det mesta är nät eller bockade detaljer. Vi levererar gärna järn tillsammans med din klippt och bockade armering, korgar och distanser i samma leverans.",
      },
    ],
    faqs: [
      { q: "Vad är B500B?", a: "B500B är en standardkvalitet för armeringsstål (kamstål) med sträckgräns 500 MPa och god duktilitet – den vanligaste kvaliteten för hus och anläggning i Sverige." },
      { q: "Vilka dimensioner finns?", a: "Vanliga dimensioner är Ø6, Ø8, Ø10, Ø12, Ø16, Ø20, Ø25 och Ø32 mm. Vi levererar raka längder och rullat material samt kapar på begäran." },
      { q: "Kan jag beställa både lösa järn och prefab?", a: "Ja, vi levererar gärna lösa armeringsjärn tillsammans med klippt och bockad armering, korgar och nät i samma leverans." },
    ],
  },
  {
    slug: "distanser",
    name: "Distanser & tillbehör",
    h1: "Distanser och tillbehör för armering",
    metaTitle: "Distanser & armeringstillbehör | Rätt täckskikt – hela Sverige",
    metaDescription:
      "Distanser, klossar, bockstöd och bindtråd för rätt placering och täckskikt av armeringen. Tillbehör till din prefab armering, levererat i hela Sverige. Begär offert.",
    intro:
      "Vi levererar distanser och tillbehör som håller armeringen på rätt plats och ger korrekt täckskikt. Distansklossar, distanslister, bockstöd, bindtråd och nätstöd – allt du behöver för att montera armeringen rätt.",
    keywords: [
      "distanser armering",
      "distanser",
      "täckskikt armering",
      "distanskloss",
      "bockstöd",
      "bindtråd",
      "armeringstillbehör",
      "nätstöd",
    ],
    includes: [
      "Distansklossar och distanslister i plast/betong",
      "Bockstöd och nätstöd",
      "Bindtråd och bindverktyg",
      "Rätt täckskikt enligt konstruktion",
      "Tillbehör till plattor, väggar och korgar",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Distanser ger rätt täckskikt",
        text: "Distanser lyfter och håller armeringen på rätt höjd så att betongens täckskikt blir korrekt. Rätt täckskikt är avgörande för att armeringen ska skyddas mot korrosion och för att konstruktionen ska hålla över tid. Vi hjälper dig att välja distanshöjd efter konstruktionens krav.",
      },
      {
        heading: "Tillbehör för hela armeringsjobbet",
        text: "Utöver distanser levererar vi bockstöd, nätstöd, bindtråd och verktyg – det som behövs för att fästa och positionera armeringen. Beställ tillbehören tillsammans med din armering så får du allt i en leverans.",
      },
    ],
    faqs: [
      { q: "Varför behövs distanser?", a: "Distanser håller armeringen på rätt höjd så att betongens täckskikt blir korrekt, vilket skyddar armeringen mot korrosion och säkrar konstruktionens hållbarhet." },
      { q: "Vilken distanshöjd ska jag välja?", a: "Distanshöjden styrs av det täckskikt som konstruktionsritningen anger. Hör av dig med dina uppgifter så hjälper vi dig att välja rätt distanser." },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
