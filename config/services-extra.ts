/** Nya services enligt docs/PLAN-sidor-2026-10.md (våg 1). */
import type { Service } from "@/config/services";

export const extraServices: Service[] = [
  {
    slug: "armeringsspecifikation",
    name: "Armeringsspecifikation",
    h1: "Armeringsspecifikation från din ritning",
    metaTitle: "Armeringsspecifikation från ritning",
    metaDescription:
      "Har du bara konstruktionsritningen? Skicka PDF, DWG eller IFC så tar vi fram armeringsspecifikation och bockningslista – och en offert på armeringen.",
    intro:
      "Har du konstruktionsritningen men ingen armeringsspec? Skicka den som PDF, DWG eller IFC så tar vi fram specifikationen – varje position med form, mått, dimension, antal och vikt. Du godkänner specen innan något tillverkas och får offert på armeringen i samma svar.",
    keywords: [
      "armeringsspecifikation",
      "armeringsspec",
      "armeringsspecifikation från ritning",
      "armeringsförteckning",
      "armeringsritning",
      "ta fram bockningslista",
      "speca armering",
    ],
    includes: [
      "Ritning in som PDF, DWG eller IFC",
      "Position, form, mått, Ø och antal",
      "Vikt per position och totalvikt",
      "Bockningslista klar för tillverkning",
      "Godkännande före produktion",
      "Offert på armeringen i samma svar",
    ],
    body: [
      {
        heading: "Ritningen visar var – specen visar hur mycket",
        text: "Konstruktörens ritning visar var armeringen ska ligga, men inte hur många järn av varje form som behövs. Armeringsspecifikationen (armeringsförteckningen) räknar ut det: typform, skänkelmått, dimension, antal och vikt per position. Den blir underlaget för [klippt och bockad armering](/produkter/klippt-och-bockad) och för en offert du kan lita på.",
      },
      {
        heading: "Så går det till",
        text: "1. Du skickar ritningen via [offertformuläret](/offert). 2. Vi går igenom den och frågar om något är oklart, till exempel täckskikt eller skarvlängder. 3. Vi tar fram specen med positionsnummer per element. 4. Du eller konstruktören godkänner. 5. Vi tillverkar, märker per position och levererar. Har du redan måtten kan du bygga listan själv i [bockningslisteverktyget](/tjanster/bockningslista).",
      },
      {
        heading: "Räkneexempel",
        text: "Varje rad är en position. Vikten = antal × längd × vikt per meter. Exempel: 120 st Ø12 à 3,0 m = 360 m × 0,888 kg/m ≈ 320 kg. Summan per dimension ger totalvikten som offerten bygger på – så ser du exakt vad du betalar för.",
      },
      {
        heading: "Ändrad ritning? Ny revision",
        text: "Samma spec används för tillverkning, märkning och leverans, så det som står i specen är det som kommer till bygget. Ändras ritningen uppdaterar vi specen, så att tillverkningen följer senaste revision. Behöver du hjälp på plats finns [armeringsmontage](/tjanster/armeringsmontage), och för löpande projekt [armeringsleverantör för entreprenörer](/armeringsleverantor).",
      },
      {
        heading: "Vad kostar specen?",
        text: "Upplägg och eventuell kostnad beror på ritningens omfattning och anges i offerten, tillsammans med priset på armeringen. Ju tydligare ritningen är, med sektioner och skarvlängder angivna, desto snabbare går det. [Skicka ritningen – få spec och offert](/offert).",
      },
    ],
    faqs: [
      { q: "Vad är en armeringsspecifikation?", a: "En förteckning över all armering i ett projekt – varje position med form, mått, dimension, antal och vikt, framräknad ur konstruktionsritningen." },
      { q: "Vilka filformat tar ni emot?", a: "PDF, DWG och IFC. Har du ett annat format, skicka det ändå så hör vi av oss." },
      { q: "Vad är skillnaden mot en bockningslista?", a: "Innehållet är i praktiken detsamma. Skillnaden är vem som gör den: i bockningslisteverktyget fyller du i måtten själv, med armeringsspecifikation tar vi fram listan från ritningen." },
      { q: "Vad kostar armeringsspecifikationen?", a: "Det beror på ritningens omfattning. Upplägg och pris anges i offerten tillsammans med priset på armeringen." },
      { q: "Får jag granska specen innan tillverkning?", a: "Ja. Du eller din konstruktör godkänner specifikationen innan vi startar." },
    ],
  },
  {
    slug: "ilf-armering",
    name: "ILF-armering",
    h1: "ILF-armering – inläggningsfärdig armering",
    metaTitle: "ILF-armering – inläggningsfärdig armering",
    metaDescription:
      "ILF-armering: kapad, bockad, märkt och buntad per position – klar att lägga direkt i formen, levererad per etapp i hela Sverige. Begär offert.",
    intro:
      "ILF – inläggningsfärdig armering – kommer kapad, bockad, märkt och buntad per position, så att montören lägger den direkt i formen. Vi tillverkar i B500B efter spec eller ritning och levererar sorterat per element och etapp i hela Sverige.",
    keywords: [
      "ilf armering",
      "ilf-armering",
      "inläggningsfärdig armering",
      "inläggningsfärdig",
      "ilf leverans armering",
      "armering märkt per position",
    ],
    includes: [
      "Kapat och bockat i B500B",
      "Etikett per bunt: position, Ø, form, antal",
      "Sorterat per element",
      "Efter spec eller ritning",
      "Leverans i etapper efter tidplan",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Inget kap, ingen bockning, inget letande",
        text: "Varje järn har rätt längd och form, varje bunt har en etikett med position, och leveransen är sorterad så att montören tar rätt bunt till rätt element. Tillverkningen är densamma som för [klippt och bockad armering](/produkter/klippt-och-bockad) – skillnaden är märkningen och sorteringen.",
      },
      {
        heading: "Etiketten följer ritningen",
        text: "Etiketten anger positionsnummer, dimension, form och antal – samma nummer som på ritningen och i [armeringsspecifikationen](/tjanster/armeringsspecifikation). Det minskar risken för fel järn på fel plats och gör egenkontrollen före gjutning snabbare. Det som ska läggas först kan läggas överst.",
      },
      {
        heading: "Levererat i takt med bygget",
        text: "För entreprenörer kan leveranserna delas upp per etapp, bjälklag eller element enligt överenskommelse, så att arbetsplatsen inte fylls med armering som ska användas om tre veckor. Se [armeringsleverantör för entreprenörer](/armeringsleverantor). Även en enskild [grundarmering](/produkter/grundarmering) eller [korgarna till en stomme](/produkter/pelar-och-balkkorgar) kan levereras inläggningsfärdig.",
      },
      {
        heading: "Offert på ILF-armering",
        text: "Skicka spec, bockningslista eller ritning – saknas spec tar vi fram den. Offerten anger vikt per dimension, bearbetning och frakt var för sig, så att den går att jämföra med andra leverantörer. Läs mer om [vad som påverkar armeringens pris](/armering-pris). [Skicka underlaget – få offert på ILF](/offert).",
      },
    ],
    faqs: [
      { q: "Vad står ILF för?", a: "Inläggningsfärdig armering – kapad, bockad, märkt och buntad per position så att den kan läggas direkt i formen." },
      { q: "Vad är skillnaden mot klippt och bockad armering?", a: "Tillverkningen är densamma. ILF betonar att leveransen är fullt märkt och sorterad per position och element, klar att lägga utan efterarbete." },
      { q: "Kan leveransen delas upp i etapper?", a: "Ja, per etapp, bjälklag eller element enligt överenskommelse. Upplägget anges i offerten." },
    ],
  },
];
