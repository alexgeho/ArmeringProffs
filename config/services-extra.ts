/** Nya services enligt docs/PLAN-sidor-2026-10.md (våg 1). */
import type { Service } from "@/config/services";

export const extraServices: Service[] = [
  {
    slug: "armeringsspecifikation",
    name: "Armeringsspecifikation",
    h1: "Armeringsspecifikation från ritning",
    metaTitle: "Armeringsspecifikation från ritning",
    metaDescription:
      "Har du bara konstruktionsritningen? Skicka PDF, DWG eller IFC så tar vi fram armeringsspecifikation och bockningslista – och en offert på armeringen.",
    intro:
      "Har du en konstruktionsritning men ingen armeringsspec? Skicka ritningen som PDF, DWG eller IFC så tar vi fram armeringsspecifikationen – varje position med form, mått, dimension, antal och vikt. Du godkänner specen innan vi tillverkar, och får samtidigt en offert på armeringen.",
    keywords: [
      "armeringsspecifikation",
      "armeringsspec",
      "armeringsspecifikation från ritning",
      "armeringsförteckning",
      "förteckning armering",
      "specning armering",
      "speca armering",
    ],
    includes: [
      "Ritning in som PDF, DWG eller IFC",
      "Position, form, mått, Ø och antal",
      "Vikt per position och totalvikt",
      "Bockningslista klar för tillverkning",
      "Granskning och godkännande före produktion",
      "Offert på armeringen i samma steg",
    ],
    body: [
      {
        heading: "Från konstruktionsritning till spec",
        text: "Konstruktörens ritning visar var armeringen ska ligga – men inte hur många järn av varje form som behövs. Armeringsspecifikationen (armeringsförteckningen) räknar ut just det: varje position med typform, skänkelmått, dimension, antal och vikt. Det är underlaget för tillverkning av [klippt och bockad armering](/produkter/klippt-och-bockad) och för en korrekt offert. Med en korrekt spec vet du exakt vad som ska levereras, hur mycket det väger och vad det kostar – innan något tillverkas.",
      },
      {
        heading: "Så går det till",
        text: "1. Du skickar ritningen som PDF, DWG eller IFC via [offertformuläret](/offert). 2. Vi går igenom ritningen och ställer frågor om något är oklart. 3. Vi tar fram specifikationen med positionsnummer per element. 4. Du eller konstruktören granskar och godkänner. 5. Vi tillverkar, märker per position och levererar. Har du redan måtten och vill bygga listan själv finns vårt [bockningslisteverktyg](/tjanster/bockningslista). Ingenting tillverkas innan specen är godkänd.",
      },
      {
        heading: "Vad specifikationen innehåller",
        text: "Varje rad är en position: form, mått, dimension i mm, antal och längd. Vikten räknas från längd gånger vikt per meter – till exempel 120 st Ø12 à 3,0 m = 360 m × 0,888 kg/m ≈ 320 kg. Summan per dimension ger totalvikten som offerten bygger på. Vill du se hur en lista ser ut? Läs [bockningslista – så gör du](/blogg/bockningslista-sa-gor-du).",
      },
      {
        heading: "Ett underlag – hela kedjan",
        text: "Samma specifikation används för tillverkning, märkning och leverans. Det betyder att det som står i specen är det som kommer till bygget, sorterat per element. Behöver du hjälp på plats kan vi även sköta [armeringsmontage](/tjanster/armeringsmontage). För entreprenörer med löpande projekt, se [armeringsleverantör för entreprenörer](/armeringsleverantor). Ändras ritningen under projektet uppdaterar vi specen, så att tillverkningen alltid följer senaste revision. Varje revision får ett eget datum i specen.",
      },
      {
        heading: "Pris för specifikationen",
        text: "Upplägg och eventuell kostnad för specificeringen beror på ritningens omfattning och anges i offerten. Skicka ritningen så får du besked om både specifikation och armering i samma svar – inga överraskningar efteråt. Ju tydligare ritningen är, med sektioner och skarvlängder angivna, desto snabbare går det. Om ritningen saknar uppgifter, till exempel täckskikt eller skarvlängder, frågar vi innan vi räknar. [Skicka din ritning](/offert).",
      },
    ],
    faqs: [
      { q: "Vad är en armeringsspecifikation?", a: "En förteckning över all armering i ett projekt – varje position med form, mått, dimension, antal och vikt. Den räknas fram ur konstruktionsritningen och används för tillverkning och offert." },
      { q: "Vilka filformat tar ni emot?", a: "PDF, DWG och IFC. Fungerar inte ditt format, skicka det ändå så hör vi av oss." },
      { q: "Vad är skillnaden mot en bockningslista?", a: "I praktiken samma innehåll. Skillnaden är vem som gör den: med bockningslisteverktyget fyller du i måtten själv, med armeringsspecifikation tar vi fram listan från din ritning." },
      { q: "Vad kostar armeringsspecifikationen?", a: "Det beror på ritningens omfattning. Upplägg och pris anges i offerten tillsammans med priset på armeringen." },
      { q: "Får jag granska specen innan tillverkning?", a: "Ja. Du eller din konstruktör godkänner specifikationen innan vi startar tillverkningen." },
    ],
  },
  {
    slug: "ilf-armering",
    name: "ILF-armering",
    h1: "ILF-armering – inläggningsfärdig armering",
    metaTitle: "ILF-armering – inläggningsfärdig armering",
    metaDescription:
      "ILF-armering: inläggningsfärdig armering kapad, bockad, märkt och buntad per position – klar att lägga direkt på bygget. Leverans i hela Sverige.",
    intro:
      "ILF står för inläggningsfärdig armering – järnen kommer kapade, bockade, märkta och buntade per position, så att de kan läggas direkt i formen. Vi tillverkar ILF-armering i B500B efter armeringsspecifikation eller ritning och levererar sorterat per element i hela Sverige.",
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
      "Märkning per position och element",
      "Buntat och sorterat för bygget",
      "Tillverkat efter spec eller ritning",
      "Leverans i etapper efter tidplan",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Vad betyder inläggningsfärdig?",
        text: "Inläggningsfärdig armering är det sista steget i prefab: varje järn har rätt längd och form, varje bunt har en etikett med position, och leveransen är sorterad så att montören kan ta rätt bunt till rätt element. Ingen kapning, ingen bockning och inget letande på bygget. Tillverkningen bygger på samma process som [klippt och bockad armering](/produkter/klippt-och-bockad). Allt är kamstål B500B enligt SS 212540.",
      },
      {
        heading: "Märkning som följer ritningen",
        text: "Etiketten på varje bunt anger positionsnummer, dimension, form och antal – samma nummer som på ritningen och i [armeringsspecifikationen](/tjanster/armeringsspecifikation). Montören ser direkt var bunten ska ligga. Det minskar risken för fel järn på fel plats och gör kontrollen före gjutning enklare. Leveransen kan dessutom sorteras per element eller etapp, så att det som ska läggas först ligger överst. Märkningen följer leveransen hela vägen från tillverkning till form.",
      },
      {
        heading: "För vem passar ILF?",
        text: "ILF passar alla projekt med många positioner: villagrunder, flerbostadshus, industribyggnader och anläggning. För entreprenörer kan leveranserna delas upp per etapp eller bjälklag enligt överenskommelse – se [armeringsleverantör för entreprenörer](/armeringsleverantor). Även en enskild [grundarmering](/produkter/grundarmering) eller [korgarna till en stomme](/produkter/pelar-och-balkkorgar) kan levereras inläggningsfärdig. Ju fler positioner och ju tajtare tidplan, desto större blir vinsten jämfört med att kapa och bocka på plats.",
      },
      {
        heading: "Offert på ILF-armering",
        text: "Skicka armeringsspecifikation, bockningslista eller konstruktionsritning. Saknas spec tar vi fram den från ritningen. Priset beror på mängd, dimensioner och bockningsgrad, och frakten räknas efter mängd och ort – läs mer om [vad som påverkar armeringens pris](/armering-pris). Offerten anger vikt per dimension, bearbetning och frakt var för sig, så att den är lätt att jämföra med andra leverantörer. Ange gärna önskad leveransplan i förfrågan. [Begär offert](/offert).",
      },
    ],
    faqs: [
      { q: "Vad står ILF för?", a: "ILF betyder inläggningsfärdig armering – kapad, bockad, märkt och buntad per position så att den kan läggas direkt i formen." },
      { q: "Vad är skillnaden mot klippt och bockad armering?", a: "ILF är klippt och bockad armering med fullständig märkning och sortering per position och element, så att den är klar att lägga utan efterarbete på bygget." },
      { q: "Kan leveransen delas upp i etapper?", a: "Ja, leveranser kan delas upp per etapp eller element enligt överenskommelse. Upplägget anges i offerten." },
    ],
  },
];
