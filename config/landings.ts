/**
 * Fristående landningssidor i roten (/armeringsleverantor, /armering-pris …).
 * Samma struktur som tjänster. Plan: docs/PLAN-sidor-2026-10.md.
 */
import type { Service } from "@/config/services";
import { b2bLandings } from "@/config/landings-b2b";

export type Landing = Service;

const baseLandings: Landing[] = [
  {
    slug: "armeringsleverantor",
    name: "Armeringsleverantör",
    h1: "Armeringsleverantör för entreprenörer och prefabindustri",
    metaTitle: "Armeringsleverantör för entreprenörer",
    metaDescription:
      "Armeringsleverantör för byggföretag och prefabindustri: spec från ritning, märkning per position, leveransplan efter tidplan och leverans i hela Sverige.",
    intro:
      "Vi är armeringsleverantör till byggentreprenörer, betongentreprenörer och prefabindustri. Skicka ritning eller spec – vi tillverkar klippt och bockad armering, korgar och nät i B500B, märker per position och levererar efter er tidplan i hela Sverige.",
    keywords: [
      "armeringsleverantör",
      "armering leverantör",
      "armering grossist",
      "armering till byggföretag",
      "armering entreprenör",
      "armering prefabindustri",
      "armeringsfabrik",
      "stålleverantör armering",
    ],
    includes: [
      "Spec från ritning (PDF, DWG, IFC)",
      "Märkning per position och element",
      "Leveransplan efter er tidplan",
      "Klippt och bockat, korgar och nät",
      "Montage i hela Sverige",
      "Leverans i hela Sverige inkl. Norrland",
    ],
    body: [
      {
        heading: "En leverantör från ritning till bygge",
        text: "För en entreprenör är armering en kedja: specning, tillverkning, leverans och montage. Vi tar hela kedjan eller de delar ni behöver. Har ni bara konstruktionsritningen tar vi fram [armeringsspecifikationen](/tjanster/armeringsspecifikation). Har ni färdig spec tillverkar vi direkt som [inläggningsfärdig ILF-armering](/tjanster/ilf-armering) – märkt, buntad och sorterad per element. Ni har en kontakt från första frågan om ritningen till sista bunten på bygget.",
      },
      {
        heading: "Volymer och sortiment",
        text: "Vi levererar det som stommen och grunden kräver: [klippt och bockad armering](/produkter/klippt-och-bockad) Ø6–Ø32, [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar), [pålarmering](/produkter/palarmering), [armeringsnät](/produkter/armeringsnat) och [specialnät](/produkter/svetsad-armering). Allt i kamstål B500B enligt SS 212540. Hela sortimentet finns samlat under [prefab armering](/prefab-armering). Vi lämnar offert på hela projektets armering eller per etapp, beroende på hur ni handlar upp. Mer om hur vi jobbar med [byggentreprenörer](/armering-for-byggentreprenorer), [markentreprenörer](/armering-for-markentreprenorer) och [betongelementfabriker](/armering-for-prefabindustri).",
      },
      {
        heading: "Leveransplan efter er tidplan",
        text: "Stora projekt gjuts i etapper – då ska armeringen komma i samma takt. Vi planerar leveranser per etapp, bjälklag eller element enligt överenskommelse, så att arbetsplatsen inte fylls med material som ligger i vägen. Leveranstider och upplägg anges i offerten utifrån projektets omfattning och ort. Ändras tidplanen stämmer vi av nästa leverans, så att armeringen kommer när formen är klar.",
      },
      {
        heading: "Märkning som sparar tid på plats",
        text: "Varje bunt och korg märks med positionsnummer, dimension och form – samma nummer som på ritningen. Montörerna hittar rätt detalj direkt och kontrollen före gjutning går snabbare. Behöver ni folk på plats utför vi [armeringsmontage](/tjanster/armeringsmontage) i hela Sverige. Leveransen sorteras per element eller etapp, så att det som ska läggas först ligger överst.",
      },
      {
        heading: "Hela Sverige – även norrut",
        text: "Vi levererar till arbetsplatser i hela landet, inklusive [Norrland](/armering-norrland). Frakten räknas efter mängd och ort och anges i offerten – ingen fast fraktavgift. Läs [så räknas armeringens pris](/armering-pris), eller skicka ritning, spec eller förfrågningsunderlag och [få offert med leveransplan](/offert).",
      },
    ],
    faqs: [
      { q: "Levererar ni till byggföretag och prefabtillverkare?", a: "Ja. Vi levererar klippt och bockad armering, korgar och nät till entreprenörer och prefabindustri i hela Sverige." },
      { q: "Kan leveranserna följa vår tidplan?", a: "Ja, leveranser kan planeras per etapp, bjälklag eller element enligt överenskommelse. Upplägget anges i offerten." },
      { q: "Kan ni ta fram spec från våra ritningar?", a: "Ja. Skicka ritningarna som PDF, DWG eller IFC så tar vi fram armeringsspecifikationen, som ni granskar innan tillverkning." },
      { q: "Hur räknas frakten?", a: "Efter mängd och leveransort, utan fast fraktavgift. Frakten anges i offerten." },
      { q: "Får vi materialcertifikat?", a: "Ja. Materialcertifikat 3.1 enligt SS-EN 10204 och EPD kan levereras med leveransen." },
    ],
  },
  {
    slug: "prefab-armering",
    name: "Prefab armering",
    h1: "Prefab armering – färdig att lägga på bygget",
    metaTitle: "Prefab armering – kapad, bockad och färdiga korgar",
    metaDescription:
      "Prefab armering i B500B: klippt och bockad armering, korgar, nät och grundarmering efter ritning – märkt per position, levererad i hela Sverige.",
    intro:
      "Prefab armering betyder att armeringen tillverkas färdig innan den kommer till bygget – kapad, bockad, sammanfogad till korgar eller svetsad till nät. Här hittar du allt vi tillverkar, från enstaka byglar till kompletta grundpaket, levererat i hela Sverige.",
    keywords: [
      "prefab armering",
      "prefabricerad armering",
      "prefab armering leverantör",
      "färdig armering",
      "prefabricerade armeringskorgar",
      "prefab armering villa",
      "armering prefab sverige",
    ],
    includes: [
      "Klippt och bockad armering Ø6–Ø32",
      "Korgar till balk, pelare, plint och påle",
      "Armeringsnät och specialnät",
      "Kompletta grundpaket",
      "Distanser och najtråd",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Varför prefab?",
        text: "Att kapa och bocka armering på bygget tar tid, kräver utrymme och ger spill. Med prefab görs jobbet i verkstad efter ritningen, och på bygget återstår bara att lägga och naja. Det ger rätt mått, mindre spill och kortare montagetid. Grunden är [klippt och bockad armering](/produkter/klippt-och-bockad) i kamstål B500B – levererat märkt per position, eller som [inläggningsfärdig ILF-armering](/tjanster/ilf-armering). Det passar både villabyggare och entreprenörer.",
      },
      {
        heading: "Till grund och platta",
        text: "För platta på mark levererar vi [grundarmering](/produkter/grundarmering) som paket: [armeringsnät](/produkter/armeringsnat), [kantbalkskorgar](/produkter/villakorg-kantbalksarmering), [distanser](/produkter/distanser) och [najtråd](/produkter/najtrad-och-tillbehor). Plintar och stolpfundament får färdiga [plintkorgar](/produkter/plintkorgar), och pooler en komplett [poolarmering](/produkter/poolarmering). Nätmängden räknas med överlapp, och allt kommer i en leverans märkt per position. Du får en offert för hela grunden i stället för att beställa från flera håll.",
      },
      {
        heading: "Till stomme och anläggning",
        text: "För stommar tillverkar vi [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar) och övriga [armeringskorgar](/produkter/armeringskorgar), för grundläggning på pålar [pålarmering](/produkter/palarmering). Specialformer bockas med [3D-bockning](/produkter/3d-bockning), nät efter mått levereras som [svetsad armering](/produkter/svetsad-armering) och betongelement kan förses med [lyftöglor](/produkter/lyftoglor). Korgarna byggs efter konstruktionsritningen, svetsade eller najade, och märks per element. För entreprenörer med större volymer finns mer under [armeringsleverantör](/armeringsleverantor).",
      },
      {
        heading: "Råmaterial och enskilda detaljer",
        text: "Behöver du bara raka järn eller byglar? Vi levererar [armeringsjärn](/produkter/armeringsjarn) i standardlängder, [byglar och hakar](/produkter/byglar-och-hakar) efter mått och [armering i ringar](/produkter/armering-i-ringar) för egen bockning. Raka järn passar dig som har egen bockningsmaskin eller bara behöver komplettera. Allt är kamstål B500B enligt SS 212540, Ø6–Ø32, och kan levereras tillsammans med distanser och najtråd.",
      },
      {
        heading: "Så beställer du",
        text: "Skicka bockningslista, spec eller ritning. Har du bara ritningen tar vi fram [armeringsspecifikationen](/tjanster/armeringsspecifikation), har du måtten kan du bygga listan i vårt [bockningslisteverktyg](/tjanster/bockningslista). Frakten räknas efter mängd och ort, utan fast avgift, och leveranstiden står i offerten. Läs [vad som påverkar priset](/armering-pris) eller [skicka underlaget och få offert](/offert).",
      },
    ],
    faqs: [
      { q: "Vad är prefab armering?", a: "Armering som tillverkas färdig i verkstad – kapad, bockad, sammanfogad till korgar eller svetsad till nät – och levereras märkt så att den bara ska läggas på bygget." },
      { q: "Är prefab armering dyrare än att bocka själv?", a: "Stålet kostar detsamma, men för prefab tillkommer bearbetningen. I gengäld sparar du arbetstid, verktyg och spill på bygget. Vad som lönar sig beror på projektet." },
      { q: "Kan jag beställa prefab armering som privatperson?", a: "Ja, vi levererar till både privatpersoner och företag i hela Sverige." },
      { q: "Vad behöver ni för att lämna offert?", a: "Bockningslista, armeringsspecifikation eller konstruktionsritning. Har du bara mått eller ett foto av en skiss räcker det för att starta – vi tar fram mängderna." },
    ],
  },
  {
    slug: "armering-pris",
    name: "Armering pris",
    h1: "Armering pris – så räknas din offert",
    metaTitle: "Armering pris – så räknas offerten",
    metaDescription:
      "Vad påverkar priset på armering? Mängd i kg, dimensioner, bockningsgrad och frakt efter mängd och ort. Så räknar vi din offert – utan fast fraktavgift.",
    intro:
      "Priset på armering räknas i grunden per kilo stål – men bearbetning, dimensioner och frakt avgör slutsumman. Här förklarar vi vad som påverkar priset och hur vi räknar fram din offert, så att du kan jämföra på rätt sätt.",
    keywords: [
      "armering offert pris",
      "bockad armering pris",
      "armeringsnät pris",
      "prefab armering pris",
      "frakt armering",
      "vad påverkar armeringspris",
    ],
    includes: [
      "Pris efter mängd i kg",
      "Dimensioner och antal positioner",
      "Bockningsgrad och korgar",
      "Frakt efter mängd och ort",
      "Ingen fast fraktavgift",
      "Allt specificerat i offerten",
    ],
    body: [
      {
        heading: "Mängd i kilo – grunden för priset",
        text: "Armering prissätts i första hand efter vikt. Vikten räknas som längd gånger vikt per meter: Ø8 väger 0,395 kg/m, Ø10 0,617, Ø12 0,888 och Ø16 1,58 kg/m. Tio meter Ø12 är alltså knappt 9 kg. Ø20 väger 2,47 kg/m och Ø25 3,85 kg/m. Därför börjar varje offert med en mängdberäkning från ritningen eller [armeringsspecifikationen](/tjanster/armeringsspecifikation). Vill du uppskatta själv, prova [armeringskalkylatorn](/armeringskalkylator).",
      },
      {
        heading: "Dimensioner och bearbetning",
        text: "Raka järn i standardlängder är enklast att leverera. Varje kapning, bockning och korgmontering är bearbetning som tillkommer, så en order med många små byglar kostar mer per kilo än raka järn. Samtidigt sparar [klippt och bockad armering](/produkter/klippt-och-bockad) arbetstid och spill på bygget. Färdiga [korgar](/produkter/armeringskorgar) har högst bearbetningsgrad men kortast montagetid. Antalet unika positioner påverkar också, eftersom varje ny form innebär omställning i tillverkningen.",
      },
      {
        heading: "Frakt efter mängd och ort",
        text: "Vi har ingen fast fraktavgift. Frakten räknas efter mängd och leveransort och anges separat i offerten, så att du ser vad den kostar. Det gör att en liten leverans inte straffas med en hög minimiavgift, och att längre transporter – till exempel till [Norrland](/armering-norrland) – räknas efter verklig sträcka och vikt. Ju mer som samlas i samma leverans, desto lägre blir fraktkostnaden per kilo.",
      },
      {
        heading: "Jämför offerter rätt",
        text: "När du jämför priser: kontrollera att samma mängd, dimensioner och bearbetning ingår, och om frakt, distanser och najtråd är med. Ett lågt kilopris på raka järn kan bli dyrt om du själv ska kapa och bocka. Mer om prisnivåer och marknad finns i guiden [vad kostar armering](/blogg/vad-kostar-armering). Fråga också vem som tar fram bockningslistan och om märkning per position ingår. Det påverkar tiden på bygget.",
      },
      {
        heading: "Så får du ett exakt pris",
        text: "Skicka bockningslista, spec eller ritning – eller mått på plattan om det gäller en [grundarmering](/produkter/grundarmering). Offerten specificerar mängd per dimension, bearbetning, tillbehör och frakt var för sig, så att du kan jämföra med andra leverantörer. Saknar du underlag hjälper vi till att ta fram det från ritningen. [Skicka underlaget och få ditt pris](/offert).",
      },
    ],
    faqs: [
      { q: "Hur räknas priset på armering?", a: "Efter mängd i kilo, dimensioner och bearbetning (kapning, bockning, korgar), plus frakt efter mängd och ort. Allt specificeras i offerten." },
      { q: "Är bockad armering dyrare än raka järn?", a: "Per kilo ja, eftersom bearbetning tillkommer. Totalt kan det ändå bli billigare tack vare mindre arbetstid och spill på bygget." },
      { q: "Har ni en fast fraktavgift?", a: "Nej. Frakten räknas efter mängd och leveransort och anges i offerten." },
      { q: "Vad behöver jag skicka för att få pris?", a: "Bockningslista, armeringsspecifikation eller konstruktionsritning – men ett foto av en skiss räcker för att starta förfrågan." },
    ],
  },
  {
    slug: "armering-norrland",
    name: "Armering Norrland",
    h1: "Armering i Norrland – leverans till hela norra Sverige",
    metaTitle: "Armering Norrland – leverans till norra Sverige",
    metaDescription:
      "Prefab armering till Norrland: Umeå, Luleå, Sundsvall, Östersund, Skellefteå och Kiruna. Klippt och bockad, korgar och nät – frakt efter mängd och ort.",
    intro:
      "Vi levererar prefab armering till hela Norrland – från Sundsvall och Östersund till Umeå, Luleå och Kiruna. Klippt och bockad armering, korgar och nät tillverkas efter din ritning och levereras till arbetsplatsen, med frakt efter mängd och ort.",
    keywords: [
      "armering norrland",
      "armering leverans norrland",
      "armering luleå",
      "armering östersund",
      "armering skellefteå",
      "armering kiruna",
      "armeringsnät norrland",
    ],
    includes: [
      "Leverans i hela Norrland",
      "Frakt efter mängd och ort",
      "Ingen fast fraktavgift",
      "Klippt och bockat, korgar och nät",
      "Märkning per position",
      "Leveransplan efter tidplan",
    ],
    body: [
      {
        heading: "Hela norra Sverige",
        text: "Vi levererar till Västernorrland, Jämtland, Västerbotten och Norrbotten – bland annat [Sundsvall](/armering/sundsvall), [Umeå](/armering/umea), Östersund, Örnsköldsvik, Skellefteå, Luleå, Piteå, Gällivare och Kiruna. Leveransen går direkt till arbetsplatsen. Hela sortimentet finns under [prefab armering](/prefab-armering), från [armeringsnät](/produkter/armeringsnat) till färdiga korgar. Tillverkningen sker efter din ritning eller bockningslista, och allt märks per position så att det är lätt att hitta rätt detalj när leveransen kommer fram.",
      },
      {
        heading: "Frakt efter mängd och ort",
        text: "Vi har ingen fast fraktavgift – vi räknar frakten efter mängd och leveransort och anger den i offerten. Det gör att du ser exakt vad transporten kostar, oavsett om det gäller en villagrund i Östersund eller en stomme i Luleå. Läs mer om [hur priset räknas](/armering-pris).",
      },
      {
        heading: "Planera för säsong och avstånd",
        text: "Längre transporter och kort byggsäsong gör att planeringen är viktigare i norr. Beställ i god tid och samla armering, [distanser](/produkter/distanser) och [najtråd](/produkter/najtrad-och-tillbehor) i samma leverans, så blir frakten per kilo lägre. För större projekt kan leveranser delas upp per etapp – se [armeringsleverantör för entreprenörer](/armeringsleverantor). Leveranstid anges i offerten. Tjäle och snö påverkar när det går att gjuta – stäm av leveransdatum mot din gjutning.",
      },
      {
        heading: "Från villagrund till industri",
        text: "Privatpersoner beställer ofta [grundarmering](/produkter/grundarmering) till platta på mark eller garage. Entreprenörer och industri beställer [klippt och bockad armering](/produkter/klippt-och-bockad), [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar) och [pålarmering](/produkter/palarmering) efter ritning. Allt märks per position så att montaget går fort även när säsongen är kort. Behöver du hjälp att lägga armeringen kan du fråga om [armeringsmontage](/tjanster/armeringsmontage).",
      },
      {
        heading: "Begär offert",
        text: "Skicka ritning, bockningslista eller mått tillsammans med leveransort. Har du bara konstruktionsritningen tar vi fram [armeringsspecifikationen](/tjanster/armeringsspecifikation). Ange leveransadress och önskat datum. Har du flera adresser kan de samlas i samma förfrågan. Offerten visar frakten norrut som egen post – [begär offert med leveransort](/offert).",
      },
    ],
    faqs: [
      { q: "Levererar ni armering till Norrland?", a: "Ja, vi levererar till hela Norrland – bland annat Sundsvall, Östersund, Umeå, Skellefteå, Luleå och Kiruna." },
      { q: "Vad kostar frakten till Norrland?", a: "Frakten räknas efter mängd och leveransort, utan fast fraktavgift, och anges i offerten." },
      { q: "Hur lång är leveranstiden norrut?", a: "Det beror på mängd, bearbetning och ort. Leveranstiden anges i offerten." },
    ],
  },
];

export const landings: Landing[] = [...baseLandings, ...b2bLandings];

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);
