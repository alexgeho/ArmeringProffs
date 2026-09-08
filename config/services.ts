/**
 * Tjänster (till skillnad från produkter/material). Varje tjänst blir en egen
 * SEO-sida under /tjanster/[slug]. Fokus: söktermer med tjänste-intent som vi
 * faktiskt utför – montage/läggning av armering samt hjälp att ta fram
 * bockningslista/armeringsritning. Helt sanningsenligt: detta är tjänster vi
 * erbjuder i vår "full cykel" (tillverkning · leverans · montage).
 */

import type { Faq } from "@/config/faq";

export type Service = {
  slug: string;
  name: string; // Kort namn (meny/kort/hub)
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  keywords: string[];
  includes: string[];
  body: { heading: string; text: string }[];
  faqs?: Faq[];
  /** Valfri nedladdningsbar resurs (t.ex. bockningslista-mall). */
  resource?: { href: string; label: string };
};

export const services: Service[] = [
  {
    slug: "armeringsmontage",
    name: "Armeringsmontage",
    h1: "Armeringsmontage – vi lägger armeringen på plats",
    metaTitle: "Armeringsmontage | Vi lägger armeringen – hela Sverige",
    metaDescription:
      "Armeringsmontage i hela Sverige – vi lägger och binder armeringen på plats efter ritning. Prefab armering tillverkad, levererad och monterad av samma leverantör. Begär offert.",
    intro:
      "Vi utför armeringsmontage – lägger, binder och fixerar armeringen på plats efter din konstruktionsritning. Eftersom vi tillverkar och levererar prefab armering själva får du hela kedjan från en leverantör: rätt detaljer, rätt täckskikt och rätt tidplan utan att du behöver koordinera flera aktörer.",
    keywords: [
      "armeringsmontage",
      "lägga armering",
      "montage av armering",
      "armera betongplatta",
      "armeringsarbete",
      "armera platta på mark",
      "binda armering",
    ],
    includes: [
      "Läggning och bindning av armering på plats",
      "Montering av nät, bockade järn och korgar",
      "Rätt täckskikt med distanser enligt ritning",
      "Utförs efter konstruktionsritning och bockningslista",
      "Kombineras med tillverkning och leverans",
      "Hela Sverige",
    ],
    body: [
      {
        heading: "Montage av armering – hela kedjan från en leverantör",
        text: "Många köper armering på ett håll och letar montör på ett annat. Hos oss kan du få både och: vi tillverkar prefab armeringen, levererar den till bygget och lägger den på plats. Det ger färre kontaktytor, jämnare kvalitet och en tidplan som håller – armeringen är rätt kapad och bockad, så montaget går snabbt och rätt.",
      },
      {
        heading: "Vad ingår i armeringsmontaget?",
        text: "Vi lägger ut och binder armeringen enligt konstruktionsritningen: bottennät och toppnät, kantjärn, byglar, extrajärn och armeringskorgar. Vi placerar distanser så att täckskiktet blir rätt, ser till att överlapp och skarvlängder stämmer och att allt sitter fast inför gjutning. Behöver du bara delar av jobbet – till exempel montage av korgar eller kantbalkar – löser vi det också.",
      },
      {
        heading: "Till platta, grund och anläggning",
        text: "Vi monterar armering till betongplattor och platta på mark, husgrunder, kantbalkar, pelare, plintar, stödmurar och anläggningskonstruktioner. Berätta vad projektet gäller, mängd och tidplan så återkommer vi med upplägg, pris och leveranstid.",
      },
      {
        heading: "Så bokar du montage",
        text: "Skicka din konstruktionsritning eller bockningslista och ange leveransort, mängd och önskad tidplan. Vi lämnar en offert på tillverkning, leverans och montage. Saknar du bockningslista hjälper vi till att ta fram den – se vår tjänst för bockningslista och armeringsritning.",
      },
    ],
    faqs: [
      { q: "Lägger ni armeringen på plats?", a: "Ja. Vi utför armeringsmontage och lägger, binder och fixerar armeringen på bygget efter konstruktionsritningen – i kombination med vår tillverkning och leverans." },
      { q: "Kan jag beställa både armering och montage?", a: "Ja, det är själva poängen – du får hela kedjan (tillverkning, leverans och montage) från en och samma leverantör i hela Sverige." },
      { q: "Vilka konstruktioner monterar ni armering till?", a: "Betongplattor och platta på mark, husgrunder, kantbalkar, pelare, plintar, stödmurar och anläggning. Hör av dig med ditt projekt så föreslår vi ett upplägg." },
      { q: "Vad kostar armeringsmontage?", a: "Priset beror på mängd, konstruktion, tidplan och ort. Skicka ritning eller bockningslista så får du en offert på tillverkning, leverans och montage." },
    ],
  },
  {
    slug: "bockningslista",
    name: "Bockningslista & armeringsritning",
    h1: "Bockningslista – vi tar fram den från din ritning",
    metaTitle: "Bockningslista | Mall & hjälp från ritning – Armeringsproffs",
    metaDescription:
      "Bockningslista för din armering – ladda ner vår mall eller låt oss ta fram en komplett bockningslista från din konstruktionsritning. Underlag för offert och tillverkning. Kontakta oss.",
    intro:
      "En bockningslista är receptet för din armering – varje position med form, mått, dimension och antal. Har du redan en lista tillverkar vi direkt efter den. Har du bara en konstruktionsritning tar vi fram bockningslistan åt dig, så att du får rätt armering och ett tydligt underlag för offerten.",
    keywords: [
      "bockningslista",
      "bockningslista mall",
      "armeringsritning",
      "bockningsschema",
      "ta fram bockningslista",
      "armeringsspecifikation",
      "bockningslista armering",
    ],
    includes: [
      "Vi tar fram bockningslista från din ritning",
      "Positioner med form, mått, Ø och antal",
      "Gratis mall att fylla i själv",
      "Underlag för offert och tillverkning",
      "Följer bockningsstandard och täckskikt",
      "Direkt koppling till tillverkning och leverans",
    ],
    body: [
      {
        heading: "Vad är en bockningslista?",
        text: "En bockningslista (kallas ibland bockningsschema eller armeringsspecifikation) listar varje armeringsdetalj i ett projekt: positionsnummer, form (rak, bygel, U, L, krok), mått per skänkel, dimension i mm och antal. Den är underlaget som gör att armeringen kan kapas och bockas exakt rätt – och att du får ett korrekt pris.",
      },
      {
        heading: "Har du bara en ritning? Vi gör listan",
        text: "Saknar du en färdig bockningslista går det bra ändå. Skicka din konstruktionsritning (PDF, DWG, Excel eller foto) så tar vi fram en komplett bockningslista utifrån den – med rätt former, mått, dimensioner och antal per position. Du får listan att godkänna innan tillverkning, så att inget missförstås.",
      },
      {
        heading: "Ladda ner vår bockningslista-mall",
        text: "Vill du göra listan själv? Ladda ner vår enkla mall och fyll i dina positioner – form, mått, dimension och antal. Skicka den ifyllda mallen så räknar vi fram en offert. Är du osäker på någon post hjälper vi dig att komplettera.",
      },
      {
        heading: "Från lista till färdig armering",
        text: "När bockningslistan är klar och godkänd tillverkar vi varje position i B500B, märker och sorterar per element och levererar sorterat till bygget – och kan även sköta montaget. Bockningslistan blir alltså både offertunderlag och tillverkningsunderlag i ett.",
      },
    ],
    faqs: [
      { q: "Kan ni ta fram en bockningslista från min ritning?", a: "Ja. Skicka din konstruktionsritning (PDF, DWG, Excel eller foto) så tar vi fram en komplett bockningslista med former, mått, dimensioner och antal per position – du får godkänna den innan tillverkning." },
      { q: "Finns det en mall för bockningslista?", a: "Ja, vi har en gratis mall du kan ladda ner och fylla i själv. Skicka den ifyllda mallen så tar vi fram en offert." },
      { q: "Vad ska en bockningslista innehålla?", a: "Positionsnummer, form (rak, bygel, U, L, krok), mått per skänkel, dimension i mm (Ø) och antal – samt gärna information om täckskikt och bockningsradie." },
      { q: "Vad kostar det att få hjälp med bockningslistan?", a: "Att ta fram bockningslistan är en del av vår service när du beställer armering. Kontakta oss med din ritning så återkommer vi med upplägg och offert." },
    ],
    resource: { href: "/bockningslista-mall.csv", label: "Ladda ner bockningslista-mall (CSV)" },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
