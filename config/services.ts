/**
 * Tjänster (till skillnad från produkter/material). Varje tjänst blir en egen
 * SEO-sida under /tjanster/[slug]. Fokus: söktermer med tjänste-intent som vi
 * faktiskt utför – montage/läggning av armering samt hjälp att ta fram
 * bockningslista/armeringsritning. Helt sanningsenligt: detta är tjänster vi
 * erbjuder i vår "full cykel" (tillverkning · leverans · montage).
 */

import type { Faq } from "@/config/faq";
import { extraServices } from "@/config/services-extra";

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

const baseServices: Service[] = [
  {
    slug: "armeringsmontage",
    name: "Armeringsmontage",
    h1: "Armeringsmontage – vi lägger armeringen på plats",
    metaTitle: "Armeringsmontage i hela Sverige – vi lägger armeringen",
    metaDescription:
      "Armeringsmontage i hela Sverige: vi lägger och najar armeringen vi själva tillverkat – tillverkning, leverans och montage från en leverantör. Begär offert.",
    intro:
      "Vi lägger, najar och fixerar armeringen på plats efter konstruktionsritningen – i hela Sverige. Eftersom vi också tillverkar och levererar den får du hela kedjan från en leverantör – rätt detaljer, rätt täckskikt och en tidplan utan att du behöver samordna flera aktörer.",
    keywords: [
      "armeringsmontage",
      "lägga armering",
      "montage av armering",
      "armera betongplatta",
      "armeringsarbete",
      "armera platta på mark",
      "binda armering",
      "armeringsmontage sverige",
    ],
    includes: [
      "Läggning och najning på plats",
      "Nät, bockade järn och korgar",
      "Distanser för rätt täckskikt",
      "Efter ritning och bockningslista",
      "Tillverkning, leverans och montage i en offert",
      "Montage i hela Sverige",
    ],
    body: [
      {
        heading: "En leverantör i stället för två",
        text: "Många köper armering på ett håll och letar montör på ett annat. När samma leverantör tillverkar, levererar och lägger armeringen finns ingen gråzon om vem som ansvarar för att det stämmer. Detaljerna är redan kapade, bockade och märkta per position, så montaget går fort. Armeringen tillverkas som [klippt och bockad armering](/produkter/klippt-och-bockad) efter samma ritning som montörerna arbetar efter.",
      },
      {
        heading: "Det här ingår",
        text: "Vi lägger ut och najar bottennät och toppnät, kantjärn, byglar, extrajärn och korgar enligt ritningen. Distanserna placeras så att täckskiktet blir rätt, överlapp och skarvlängder kontrolleras, och allt sitter fast inför gjutning. Behöver du bara en del – till exempel kantbalkar eller korgar – går det också bra.",
      },
      {
        heading: "Till platta, grund och anläggning",
        text: "Platta på mark och betongplattor, husgrunder, kantbalkar, pelare, plintar, stödmurar och anläggningskonstruktioner. För en villaplatta kan montaget beställas tillsammans med hela [grundarmeringen](/produkter/grundarmering).",
      },
      {
        heading: "Så bokar du montage",
        text: "Skicka ritningen eller bockningslistan, leveransort, ungefärlig mängd och önskad gjutdag. Saknas bockningslista tar vi fram den via [armeringsspecifikation](/tjanster/armeringsspecifikation). Du får en offert där tillverkning, frakt och montage står var för sig. [Skicka ritningen – få offert på armering och montage](/offert).",
      },
    ],
    faqs: [
      { q: "Lägger ni armeringen på plats?", a: "Ja. Vi lägger, najar och fixerar armeringen efter konstruktionsritningen, i kombination med vår tillverkning och leverans." },
      { q: "Kan ni ta bara en del av jobbet?", a: "Ja, till exempel kantbalkar, korgar eller toppnät. Beskriv vad som ska monteras så får du ett upplägg i offerten." },
      { q: "Monterar ni i hela Sverige?", a: "Ja. Vi utför armeringsmontage i hela Sverige, från Skåne till Norrland." },
      { q: "Vilka konstruktioner monterar ni?", a: "Platta på mark och betongplattor, husgrunder, kantbalkar, pelare, plintar, stödmurar och anläggning." },
      { q: "Vad kostar armeringsmontage?", a: "Priset beror på mängd, konstruktion, tidplan och ort. Skicka ritning eller bockningslista så får du en offert på tillverkning, leverans och montage." },
    ],
  },
  {
    slug: "bockningslista",
    name: "Bockningslista & typformer",
    h1: "Bockningslista – typformer A–XX och gratis mall",
    metaTitle: "Bockningslista – typformer A–XX och gratis mall",
    metaDescription:
      "Bygg din bockningslista med typformer A–XX eller vår gratis mall och skicka den direkt för offert. Saknar du lista tar vi fram den från ritningen.",
    intro:
      "Bygg bockningslistan själv: välj typform, fyll i mått, dimension och antal och skicka listan direkt för offert. Eller ladda ner vår gratis mall. Har du bara en ritning tar vi fram listan åt dig.",
    keywords: [
      "bockningslista",
      "bockningslista mall",
      "bockningsschema",
      "typformer bockning",
      "bockningslista armering",
      "göra bockningslista",
    ],
    includes: [
      "Typformer A–XX med måttbeteckningar",
      "Gratis mall att fylla i",
      "Position, form, mått, Ø och antal",
      "Skicka listan direkt för offert",
      "Vi stämmer av listan före tillverkning",
      "Saknas lista – vi gör den från ritningen",
    ],
    body: [
      {
        heading: "Vad står i en bockningslista?",
        text: "Varje armeringsdetalj får en rad: positionsnummer, typform, mått per skänkel, dimension i mm och antal. Det är underlaget som gör att järnen kan kapas och bockas exakt – och att du får ett korrekt pris. Steg för steg finns i guiden [bockningslista – så gör du](/blogg/bockningslista-sa-gor-du).",
      },
      {
        heading: "Typformer med bokstavskod",
        text: "Standardformerna har en bokstavskod och måttbeteckningar a, b, c. N är en sluten bygel, C en U-bygel och Q en bågformad stång. Med koden och måtten blir listan entydig – ingen ritning av varje detalj behövs. Prova formerna i verktyget ovan.",
      },
      {
        heading: "Tre vanliga fel",
        text: "1. Inner- och yttermått blandas ihop. 2. Antalet anges per element men inte totalt. 3. Bockningsradien glöms – för kamstål är minsta dorndiameter 4Ø upp till Ø16 och 7Ø för grövre järn enligt Eurokod 2. Vi stämmer av listan innan tillverkning.",
      },
      {
        heading: "Har du bara ritningen?",
        text: "Då tar vi fram hela listan åt dig via [armeringsspecifikation](/tjanster/armeringsspecifikation): skicka ritningen som PDF, DWG eller foto så får du listan att godkänna innan något tillverkas.",
      },
      {
        heading: "Från lista till färdig armering",
        text: "När listan är godkänd tillverkar vi varje position i B500B som [klippt och bockad armering](/produkter/klippt-och-bockad), märker och sorterar per element och levererar till bygget. [Skicka bockningslistan – få offert](/offert).",
      },
    ],
    faqs: [
      { q: "Vad är skillnaden mellan bockningsschema och bockningslista?", a: "Ingen. Båda orden betyder en lista över alla armeringspositioner med form, mått, dimension och antal." },
      { q: "Finns det en gratis mall?", a: "Ja, mallen kan laddas ner och fyllas i. Skicka den ifyllda mallen så får du en offert." },
      { q: "Vad ska en bockningslista innehålla?", a: "Positionsnummer, typform, mått per skänkel, dimension (Ø) och antal – gärna även täckskikt och bockningsradie om ritningen anger dem." },
      { q: "Kan ni göra listan åt mig?", a: "Ja. Skicka konstruktionsritningen så tar vi fram listan och du godkänner den före tillverkning. Eventuell kostnad för det anges i offerten." },
    ],
    resource: { href: "/bockningslista-mall.csv", label: "Ladda ner bockningslista-mall (CSV)" },
  },
];

export const services: Service[] = [...baseServices, ...extraServices];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
