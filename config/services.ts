/**
 * Tjänster (services). Varje tjänst blir en egen SEO-sida under /tjanster/[slug].
 * Texterna är utkast optimerade för sökord – finslipas med Google Ads-nycklar.
 */

export type Service = {
  slug: string;
  name: string; // Kort namn (meny/kort)
  h1: string; // Rubrik på sidan
  metaTitle: string;
  metaDescription: string;
  intro: string; // Ingress
  keywords: string[];
  includes: string[]; // "Detta ingår"
  body: { heading: string; text: string }[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "gjuta-betongplatta",
    name: "Gjuta betongplatta",
    h1: "Gjuta betongplatta i Stockholm",
    metaTitle: "Gjuta betongplatta Stockholm | Fast pris & ROT-avdrag",
    metaDescription:
      "Vi gjuter betongplattor i Stockholm med omnejd – platta på mark för hus, tillbyggnad och garage. Fackmässigt utfört, fast pris och garanti. Begär offert!",
    intro:
      "Ska du gjuta en betongplatta? Vi utför hela arbetet – från schakt och isolering till armering, formsättning och gjutning. Oavsett om du kallar det platta på mark, bottenplatta eller markplatta får du en jämn, sprickfri och energismart betongplatta som håller i generationer.",
    keywords: [
      "gjuta betongplatta",
      "gjuta en betongplatta",
      "betongplatta gjuta",
      "gjuta betong platta",
      "gjuta betongplatta pris",
      "betongplatta stockholm",
      "platta på mark",
      "gjuta platta",
      "gjuta bottenplatta",
      "gjuta markplatta",
      "gjuta husplatta",
    ],
    includes: [
      "Schaktning och urgrävning",
      "Dränering och kapillärbrytande grus",
      "Markisolering (cellplast/EPS)",
      "Armering enligt konstruktion",
      "Formsättning och kantelement",
      "Gjutning och glättning av betong",
      "Förberedelse för golvvärme (vid önskemål)",
    ],
    body: [
      {
        heading: "Platta på mark – rätt från grunden",
        text: "En platta på mark ska byggas upp i rätt ordning för att bli fuktsäker och energieffektiv. Vi lägger kapillärbrytande material, isolering och armering enligt gällande konstruktionsritningar innan vi gjuter. Resultatet blir en stabil grund utan köldbryggor.",
      },
      {
        heading: "Vad kostar det att gjuta en betongplatta?",
        text: "Priset beror på plattans storlek, markförhållanden, isolering och eventuell golvvärme. Vi lämnar alltid ett tydligt fast pris efter platsbesök – inga dolda avgifter. För arbete på befintlig fastighet kan du dessutom använda ROT-avdraget.",
      },
    ],
    featured: true,
  },
  {
    slug: "husgrund",
    name: "Husgrund & grundläggning",
    h1: "Husgrund och grundläggning i Stockholm",
    metaTitle: "Husgrund Stockholm | Grundläggning & platta på mark",
    metaDescription:
      "Grundläggning för nybygge, villa och tillbyggnad i Stockholm. Vi bygger husgrund med platta på mark – schakt, isolering, armering och gjutning. Begär offert.",
    intro:
      "Grunden avgör husets hållbarhet. Vi projekterar och bygger husgrunder med platta på mark för villor, tillbyggnader och Attefallshus – utfört enligt konstruktionsritning och gällande normer.",
    keywords: ["husgrund", "grundläggning", "husgrund pris", "platta på mark hus", "grund till hus"],
    includes: [
      "Höjdsättning och utsättning",
      "Schakt och masshantering",
      "Dränering runt grund",
      "Isolering och radonskydd",
      "Armering och ingjutningsgods",
      "Gjutning av grundplatta",
    ],
    body: [
      {
        heading: "Grundläggning för nybygge och tillbyggnad",
        text: "Vi hanterar hela grundläggningen – från markberedning till färdig platta redo för stommen. Vi samordnar med markarbeten, VA och el så att alla genomföringar hamnar rätt före gjutning.",
      },
    ],
  },
  {
    slug: "garageplatta",
    name: "Garageplatta",
    h1: "Gjuta garageplatta i Stockholm",
    metaTitle: "Gjuta garageplatta Stockholm | Pris & ROT-avdrag",
    metaDescription:
      "Vi gjuter garageplattor och plattor för carport i Stockholm. Bärig, sprickfri betong med rätt lutning för avrinning. Fast pris och garanti – begär offert.",
    intro:
      "En garageplatta måste tåla tunga fordon och klara fukt. Vi gjuter bärkraftiga plattor med rätt armering, fall och kantförstyvning – anpassade för garage, carport och verkstad.",
    keywords: [
      "gjuta garageplatta",
      "gjuta platta garage",
      "gjuta betongplatta garage",
      "gjuta platta till garage",
      "gjuta betongplatta till garage",
      "gjuta betongplatta garage pris",
      "garageplatta",
      "betongplatta garage",
      "carport platta",
    ],
    includes: [
      "Urgrävning och packning",
      "Bärlager och isolering",
      "Kraftig armering för fordonslast",
      "Rätt lutning för avrinning",
      "Golvbrunn vid behov",
      "Gjutning och glättning",
    ],
    body: [
      {
        heading: "Byggd för tunga laster",
        text: "Vi dimensionerar garageplattan efter belastning och underlag så att den inte spricker eller sätter sig. Vill du ha golvvärme eller avlopp förbereder vi det innan gjutning.",
      },
      {
        heading: "Vad kostar det att gjuta en garageplatta?",
        text: "Priset för att gjuta en betongplatta till garaget beror på storlek, markförhållanden och isolering. Efter ett kostnadsfritt platsbesök lämnar vi ett fast pris utan dolda avgifter. Vid garage på en befintlig fastighet kan du dessutom använda ROT-avdraget på arbetskostnaden.",
      },
    ],
  },
  {
    slug: "betongplatta-tillbyggnad",
    name: "Platta för tillbyggnad",
    h1: "Betongplatta för tillbyggnad & Attefallshus",
    metaTitle: "Betongplatta tillbyggnad Stockholm | Attefall & uterum",
    metaDescription:
      "Gjutning av betongplatta för tillbyggnad, Attefallshus och uterum i Stockholm. Vi ansluter mot befintlig grund fackmässigt. ROT-avdrag – begär offert.",
    intro:
      "Ska du bygga till huset, sätta upp ett Attefallshus eller ett uterum? Vi gjuter plattan och ser till att den ansluter korrekt mot befintlig grund utan sättningar eller sprickor.",
    keywords: ["betongplatta tillbyggnad", "attefallshus grund", "platta uterum", "tillbyggnad grund"],
    includes: [
      "Anslutning mot befintlig grund",
      "Schakt och isolering",
      "Armering och formsättning",
      "Gjutning i nivå med befintligt golv",
      "Förberedelse för golvvärme",
    ],
    body: [
      {
        heading: "Sömlös anslutning mot huset",
        text: "Vi säkerställer att den nya plattan ligger i rätt höjd och är dilaterad mot befintlig konstruktion, så att övergången blir tät och stabil över tid.",
      },
    ],
  },
  {
    slug: "markarbeten",
    name: "Markarbeten & schakt",
    h1: "Markarbeten och schaktning i Stockholm",
    metaTitle: "Markarbeten Stockholm | Schakt, dränering & grundförberedelse",
    metaDescription:
      "Markarbeten inför gjutning i Stockholm – schaktning, dränering, fyllning och packning. Vi förbereder marken rätt inför din betongplatta. Begär offert.",
    intro:
      "Ett hållbart betongbygge börjar i marken. Vi utför schakt, dränering, fyllning och packning så att din platta vilar på ett stabilt och väldränerat underlag.",
    keywords: ["markarbeten", "schaktning", "dränering", "markberedning grund"],
    includes: [
      "Schakt och urgrävning",
      "Bortforsling av massor",
      "Dränering och dagvatten",
      "Fyllning och packning",
      "Grovplanering av tomt",
    ],
    body: [
      {
        heading: "Rätt underlag – ingen sättning",
        text: "Med rätt bärlager och packning undviker du framtida sättningar och sprickor. Vi mäter av och kontrollerar underlaget innan gjutning påbörjas.",
      },
    ],
  },
  {
    slug: "industrigolv",
    name: "Industrigolv & större plattor",
    h1: "Industrigolv och större betongplattor",
    metaTitle: "Industrigolv Stockholm | Större betongplattor & golv",
    metaDescription:
      "Vi gjuter industrigolv och större betongplattor i Stockholm för lager, verkstäder och lantbruk. Slitstarka, plana golv med rätt bärighet. Begär offert.",
    intro:
      "För lager, verkstäder, lantbruk och företag gjuter vi stora, slitstarka betonggolv med hög bärighet och plana ytor – dimensionerade efter din verksamhet.",
    keywords: ["industrigolv", "betonggolv företag", "stor betongplatta", "lagergolv"],
    includes: [
      "Bärlager och armering för höga laster",
      "Fogindelning och dilatationsfogar",
      "Maskinglättning för plan yta",
      "Ytförstärkning vid behov",
    ],
    body: [
      {
        heading: "Slitstarka golv för verksamheten",
        text: "Vi anpassar betongkvalitet, armering och ytbehandling efter hur golvet ska användas – från lätta lager till tung trucktrafik.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
