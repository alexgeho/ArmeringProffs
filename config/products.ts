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
  /** Produktfoto (WebP i public/images). Visas i sidans brödtext. */
  image?: { src: string; alt: string; width: number; height: number };
};

export const products: Product[] = [
  {
    slug: "klippt-och-bockad",
    name: "Klippt & bockad armering",
    h1: "Klippt & bockad armering efter bockningslista",
    metaTitle: "Klippt & bockad armering – prefab efter ritning",
    metaDescription:
      "Klippt och bockad armering tillverkad efter din bockningslista eller ritning. Kapat och bockat kamstål B500B, märkt och sorterat, levererat i hela Sverige. Begär offert.",
    intro:
      "Vi tillverkar klippt och bockad armering efter din bockningslista eller konstruktionsritning. Varje järn kapas och bockas till rätt längd och form i B500B, märks och sorteras – redo att läggas direkt på bygget. Vi levererar i hela Sverige.",
    image: {
      src: "/images/klippt-och-bockad-bockning.webp",
      alt: "Kamstål B500B bockas i en bockningsmaskin till rätt form",
      width: 1400,
      height: 788,
    },
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
      {
        heading: "Bockade detaljer vi tillverkar",
        text: "Vi kapar och bockar alla vanliga detaljer efter din bockningslista: byglar (B-bygel, N-bygel), kramlor, förankringsjärn, kantjärn samt S-, U- och L-former och raka längder. Dimensioner Ø6–Ø32 mm i B500B. Har du många likadana positioner – till exempel byglar till en balk eller kantjärn runt en platta – tillverkar vi dem i serie, märkta och buntade per position så att rätt detalj hamnar på rätt plats.",
      },
      {
        heading: "Pris och frakt – så funkar det",
        text: "Priset styrs av mängd, dimensioner och hur mycket kapning och bockning som krävs. Frakten räknar vi efter mängd och leveransort och anger den i offerten – du betalar ingen fast fraktavgift oavsett orderstorlek, och vi levererar i hela Sverige, även norrut. Skicka din bockningslista eller mått så får du ett tydligt pris med leveranstid.",
      },
    ],
    faqs: [
      { q: "Vad betyder klippt och bockad armering?", a: "Att kamstålet levereras färdigkapat och böjt till rätt form enligt en bockningslista, redo att monteras på plats utan kapning eller bockning på bygget." },
      { q: "Kan ni tillverka efter min ritning eller bockningslista?", a: "Ja. Skicka bockningslista eller konstruktionsritning (PDF, DWG, Excel eller foto) så tar vi fram offert och tillverkar efter den. Saknar du bockningslista hjälper vi dig att ta fram en." },
      { q: "Vilka dimensioner kan bockas?", a: "Vi kapar och bockar kamstål i B500B från Ø6 till Ø32 mm, med bockningsradier enligt standard och konstruktionsritning." },
      { q: "Levererar ni i hela Sverige?", a: "Ja, vi tillverkar och levererar klippt och bockad armering i hela Sverige. Leveranstid och frakt anges i offerten utifrån ort och mängd." },
      { q: "Vad kostar klippt och bockad armering?", a: "Priset beror på mängd, dimensioner och hur mycket kapning och bockning som krävs. Skicka bockningslista eller mått så får du ett exakt pris i en offert." },
      { q: "Vad kostar frakten?", a: "Vi räknar frakten efter mängd och leveransort och anger den i offerten – ingen fast fraktavgift oavsett orderstorlek. Vi levererar i hela Sverige, även norrut." },
      { q: "Vilka bockade detaljer kan ni tillverka?", a: "Byglar (B-bygel, N-bygel), kramlor, förankringsjärn, kantjärn samt S-, U- och L-former och raka längder i Ø6–Ø32 mm B500B – allt efter din bockningslista." },
    ],
    featured: true,
  },
  {
    slug: "armeringskorgar",
    name: "Armeringskorgar",
    h1: "Armeringskorgar – prefab till balk, pelare och pålar",
    metaTitle: "Armeringskorgar – prefab balk- & pelarkorgar",
    metaDescription:
      "Prefabricerade armeringskorgar till balkar, pelare, pålar och grundplintar. Svetsade eller bundna korgar efter ritning, levererade färdiga i hela Sverige. Begär offert.",
    intro:
      "Vi tillverkar prefabricerade armeringskorgar till balkar, pelare, pålar, plintar och brunnar. Korgarna byggs efter din ritning – svetsade eller bundna – och levereras färdiga till bygget så att montaget går snabbt och rätt.",
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
      "Balk-, pelar- och pålkorgar efter ritning",
      "Svetsade eller bundna korgar",
      "Punktsvetsade korgar för balkar och pelare",
      "Montering av pelarskor och konsoler",
      "Byglar och huvudjärn i B500B",
      "Plint- och brunnsarmering",
      "Väggkorgar – dubbelsidig väggarmering med startjärn",
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
    metaTitle: "Svetsad armering & armeringsnät – specialnät",
    metaDescription:
      "Svetsad armering: armeringsnät, specialnät och svetsade mattor efter mått. Standardnät och nät tillverkade efter ritning, levererade i hela Sverige. Begär offert.",
    intro:
      "Vi levererar svetsad armering – standardarmeringsnät, specialnät och svetsade mattor tillverkade efter dina mått och ritningar. Nät ger snabb och jämn armering av plattor, väggar och golv, och specialnät sparar tid när standardformat inte räcker.",
    // TODO [OWNER]: lägg produktfoto. Skicka horisontell bild ≥1600px (welded wire
    // mesh / armeringsnät staplat), spara som public/images/svetsad-armering-*.webp och fyll i image nedan:
    //   image: { src: "/images/svetsad-armering-nat.webp", alt: "...", width: 1400, height: 788 },
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
    metaTitle: "Armeringsjärn & kamstål B500B – Ø6–32 mm",
    metaDescription:
      "Armeringsjärn i kamstål B500B, dimension 6–32 mm. Raka längder och rullat material som komplement till prefab armering. Levereras i hela Sverige. Begär offert.",
    intro:
      "Vi levererar armeringsjärn i kamstål B500B som komplement till prefab-sortimentet. Raka längder och rullat material i dimension Ø6–Ø32 mm – för dig som vill komplettera nät och bockade detaljer med lösa järn.",
    image: {
      src: "/images/armeringsjarn-kamstal.webp",
      alt: "Armeringsjärn i kamstål bundna i ett rutnät på bygget",
      width: 1400,
      height: 938,
    },
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
      "Kamstål B500B / K500C-T enligt SS 212540",
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
    metaTitle: "Distanser & armeringstillbehör – täckskikt",
    metaDescription:
      "Distanser, klossar, bockstöd och bindtråd för rätt placering och täckskikt av armeringen. Tillbehör till din prefab armering, levererat i hela Sverige. Begär offert.",
    intro:
      "Vi levererar distanser och tillbehör som håller armeringen på rätt plats och ger korrekt täckskikt. Distansklossar, distanslister, bockstöd, bindtråd och nätstöd – allt du behöver för att montera armeringen rätt.",
    image: {
      src: "/images/distanser-armeringsnat.webp",
      alt: "Armeringsnät upplyft på distanser för rätt täckskikt",
      width: 1400,
      height: 935,
    },
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
  {
    slug: "byglar-och-hakar",
    name: "Byglar & hakar",
    h1: "Byglar och hakar – U-byglar, trappbyglar och slutna byglar i serie",
    metaTitle: "Byglar & hakar – färdiga armeringsbyglar",
    metaDescription:
      "Armeringsbyglar och hakar i serie: U-byglar, trappbyglar, slutna och fyrkantiga byglar i B500B Ø6–Ø12. Tillverkade efter dina mått, levererade på pall i hela Sverige. Begär offert.",
    intro:
      "Vi tillverkar byglar och hakar i stora serier – U-byglar, trappbyglar, slutna och fyrkantiga byglar i B500B. Bockade från rulle i automatiska maskiner, med jämna mått och leverans på pall till bygget eller elementfabriken.",
    keywords: [
      "armeringsbyglar",
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
      "Slutna och fyrkantiga byglar med 135°-krokar",
      "B500B, Ø6–Ø12 mm bockat från rulle",
      "Serietillverkning med jämna mått",
      "Buntat och levererat på pall",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Byglar i serie – samma mått varje gång",
        text: "Byglar och hakar går åt i stora mängder i balkar, pelare, kantbalkar och prefabelement. Vi bockar dem från rulle i automatiska bockmaskiner, vilket ger samma mått på varje bygel och korta ledtider även för tusentals stycken. Du anger typform och mått enligt bockningslistan – vi tillverkar, buntar och märker.",
      },
      {
        heading: "Vilka former tillverkar vi?",
        text: "Vanligast är U-byglar, slutna byglar (typform N) med 135°-krokar, kantbalksbyglar, trappbyglar och enkla hakar. Även specialformer enligt ritning. Se alla standardformer med bokstavskod i vår översikt över typformer – och ange koden och måtten när du begär offert.",
      },
      {
        heading: "Leverans på pall",
        text: "Byglarna buntas per position och levereras på pall, redo att lyftas in på bygget eller i elementfabriken. Vi levererar i hela Sverige och samordnar gärna leveransen med övrig armering, korgar och nät.",
      },
    ],
    faqs: [
      { q: "Vilka dimensioner kan byglar tillverkas i?", a: "Byglar och hakar bockas normalt i B500B Ø6–Ø12 mm från rulle. Grövre byglar tillverkar vi av raka stänger. Ange dimension och mått per position i din bockningslista." },
      { q: "Hur många byglar måste jag beställa?", a: "Vi tillverkar både mindre partier och stora serier. Ju större serie, desto bättre pris per styck – begär offert så får du pris och leveranstid." },
      { q: "Hur anger jag formen?", a: "Enklast med typformens bokstavskod (t.ex. N för sluten bygel, C för U-järn) och måtten a, b, c … Se vår översikt över typformer för bockning." },
    ],
  },
  {
    slug: "lyftoglor",
    name: "Lyftöglor & lyftkrokar",
    h1: "Lyftöglor och lyftkrokar för betongelement",
    metaTitle: "Lyftöglor & lyftkrokar för betongelement",
    metaDescription:
      "Lyftöglor och lyftkrokar av rundstål för prefabricerade betongelement, bockade efter din ritning. Tillverkning och leverans i hela Sverige. Begär offert.",
    intro:
      "Vi bockar lyftöglor och lyftkrokar av rundstål för betongelement, trappor, balkar och andra prefabdelar – efter konstruktörens ritning och i den serie du behöver.",
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
      "För betongelement, trappor och balkar",
      "Små och stora serier",
      "Märkt och sorterat per position",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Lyftöglor efter ritning",
        text: "Lyftöglor gjuts in i betongelement för att elementet ska kunna lyftas säkert vid tillverkning, transport och montage. Form, dimension och förankringslängd bestäms av konstruktören utifrån elementets vikt och lyftsätt. Vi bockar öglorna exakt efter ritningen i den mängd du behöver.",
      },
      {
        heading: "För elementfabriker och byggen",
        text: "Vi levererar lyftöglor till elementfabriker, betongstationer och byggen som gjuter egna element på plats. Beställ gärna tillsammans med övrig armering till elementen så kommer allt i samma leverans.",
      },
    ],
    faqs: [
      { q: "Vad behöver ni för att tillverka lyftöglor?", a: "Ritning eller mått, material, dimension och antal. Vi bockar exakt efter konstruktörens specifikation – läs mer om dimension och placering i guiden om lyftögla i betong." },
      { q: "Vilket material används?", a: "Lyftöglor bockas normalt av slätt, segt rundstål (t.ex. S235) enligt konstruktörens specifikation – inte av kamstål. Ange materialkrav i förfrågan så återkommer vi med offert." },
    ],
  },
  {
    slug: "armering-i-ringar",
    name: "Armering i ringar",
    h1: "Armering i ringar – kamstål B500B på rulle",
    metaTitle: "Armering i ringar – kamstål B500B Ø8–Ø16",
    metaDescription:
      "Kamstål B500B i ringar (på rulle) Ø8–Ø16 mm för bockmaskiner och egen tillverkning. Leverans i hela Sverige. Begär offert på armering i ringar.",
    intro:
      "Vi levererar kamstål B500B i ringar – armering på rulle för dig som bockar själv i egen maskin, till exempel elementfabriker och armeringsverkstäder.",
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
      "För automatiska bock- och rätningsmaskiner",
      "Leverans per ring eller i större partier",
      "Kan kombineras med raka stänger och prefab",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Kamstål på rulle för egen tillverkning",
        text: "Armering i ringar används i automatiska rätnings- och bockmaskiner. Materialet rätas och kapas i maskinen, vilket ger minimalt spill och gör det effektivt att tillverka byglar och korta järn i stora serier. Passar elementfabriker, armeringsverkstäder och större byggen med egen bockning.",
      },
      {
        heading: "Ringar, raka stänger eller färdigt bockat",
        text: "Vill du hellre slippa bocka själv tillverkar vi byglarna och järnen åt dig. Du kan också kombinera: ringar till egen produktion och färdigt klippt och bockat för resten – i samma leverans.",
      },
    ],
    faqs: [
      { q: "Vilka dimensioner finns i ringar?", a: "Kamstål B500B i ringar levereras normalt i Ø8–Ø16 mm. Hör av dig med dimension och mängd så får du pris och leveranstid." },
      { q: "Vad väger en ring?", a: "Ringvikten varierar med dimension och tillverkare, vanligen ett par ton per ring. Ange vilken ringvikt din maskin hanterar i förfrågan." },
    ],
  },
  {
    slug: "3d-bockning",
    name: "3D- & bågbockning",
    h1: "3D-bockning och bågbockning av armering",
    metaTitle: "3D-bockning & bågbockning av armering",
    metaDescription:
      "Rumsbockade 3D-former och bågformad armering, t.ex. till runda fundament och vindkraftsfundament. Bockat efter ritning i B500B, levererat i hela Sverige. Begär offert.",
    intro:
      "Vi bockar armering i tre dimensioner och i bågar – rumsbockade specialformer och bågformade järn till runda konstruktioner som brunnar, tankar, cirkulära fundament och vindkraftsfundament.",
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
      "Rumsbockade 3D-former (t.ex. typform SX, X, XX)",
      "Bågformade järn med valfri radie",
      "Armering till runda fundament och brunnar",
      "Armering till vindkraftsfundament",
      "Tillverkning efter ritning, B500B",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Former som inte ligger i ett plan",
        text: "Vissa konstruktioner kräver järn som är bockade i flera plan – rumsbockade former där benen pekar åt olika håll. Vi tillverkar dem exakt efter ritningen så att de passar direkt i formen, utan justering på bygget.",
      },
      {
        heading: "Bågar till runda konstruktioner",
        text: "Till brunnar, tankar, runda plintar och cirkulära fundament bockar vi järn i bågar med den radie konstruktionen kräver. Vid stora radier, som i vindkraftsfundament, levereras bågarna märkta per position så att monteringen går snabbt.",
      },
    ],
    faqs: [
      { q: "Hur anger jag en bågformad eller 3D-bockad form?", a: "Ange typform (t.ex. Q för bågformad stång, SX/X/XX för rumsbockade) med mått, eller bifoga ritningen. Specialformer tillverkar vi direkt efter ritning." },
      { q: "Tillverkar ni armering till vindkraftsfundament?", a: "Ja, vi bockar bågformade järn och specialformer till runda fundament, inklusive vindkraftsfundament. Skicka ritning och bockningslista så återkommer vi med offert." },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
