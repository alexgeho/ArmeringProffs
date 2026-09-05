/**
 * Leveransområde: HELA SVERIGE.
 *
 * Armeringsproffs tillverkar och levererar prefab armering i hela landet. För att
 * fånga lokala sökningar ("armering [ort]", "armeringsleverantör [ort]") finns
 * lokala landningssidor under /armering/[slug], genererade från listan nedan.
 *
 * Varje ort har UNIKT innehåll (län, landsdel, närliggande orter, två lokala texter
 * och lokala användningsområden) så att sidorna inte blir dubbletter/doorway-sidor.
 *
 * `regions` (namn-listan) används fortfarande i sidfot och på /leverans.
 */

export type City = {
  slug: string;
  name: string;
  lan: string;
  landsdel: "Götaland" | "Svealand" | "Norrland";
  /** Närliggande orter vi också levererar till – unik lista per stad. */
  nearby: string[];
  /** Kort lokal text (unik) – används i hero. */
  angle: string;
  /** Andra lokala texten (unik) – lokal bygg-/logistikkontext. */
  intro2: string;
  /** Lokala användningsområden (unika, sanna regionala förhållanden). */
  sectors: string[];
};

export const cities: City[] = [
  {
    slug: "stockholm",
    name: "Stockholm",
    lan: "Stockholms län",
    landsdel: "Svealand",
    nearby: ["Solna", "Sundbyberg", "Nacka", "Täby", "Södertälje", "Huddinge"],
    angle:
      "Stockholm är en av Sveriges mest aktiva byggmarknader med omfattande bostads-, kontors- och anläggningsbyggande. Vi levererar prefab armering till både storskaliga projekt och mindre plattor i hela Storstockholm.",
    intro2:
      "I en tät storstadsmiljö som Stockholm är prefab armering särskilt värdefullt – korta byggtider, trånga arbetsplatser och höga logistikkrav gör att färdigkapad och bockad armering sparar både tid och yta på bygget.",
    sectors: ["Flerbostadshus och bostadsrätter", "Kontor och kommersiella fastigheter", "Infrastruktur och anläggning", "Grundläggning och betongplattor"],
  },
  {
    slug: "goteborg",
    name: "Göteborg",
    lan: "Västra Götalands län",
    landsdel: "Götaland",
    nearby: ["Mölndal", "Partille", "Kungälv", "Lerum", "Borås", "Kungsbacka"],
    angle:
      "Göteborg med hamn, industri och stora infrastrukturprojekt har en ständig efterfrågan på armering. Vi levererar klippt och bockad armering, korgar och nät till bygg- och anläggningsprojekt i hela Göteborgsregionen.",
    intro2:
      "Göteborgsregionens hamn-, industri- och infrastrukturprojekt kräver robust armering i stora volymer. Vi levererar allt från armeringskorgar till balkar och pelare fram till kajer, industrigolv och bostadsprojekt.",
    sectors: ["Hamn- och industribyggnation", "Infrastruktur och broar", "Bostäder i Göteborgsregionen", "Industrigolv och plattor"],
  },
  {
    slug: "malmo",
    name: "Malmö",
    lan: "Skåne län",
    landsdel: "Götaland",
    nearby: ["Lund", "Landskrona", "Trelleborg", "Vellinge", "Kävlinge", "Staffanstorp"],
    angle:
      "Malmö och Öresundsregionen växer snabbt med mycket bostads- och stadsutveckling. Vi levererar prefab armering efter din bockningslista eller ritning till projekt i hela sydvästra Skåne.",
    intro2:
      "I Öresundsregionen byggs det tätt och högt, ofta på lera som ställer krav på grundläggningen. Prefab armering passar väl i Malmös stadsutvecklingsprojekt där byggtid och arbetsmiljö är avgörande.",
    sectors: ["Stadsutveckling och flerbostadshus", "Kontor och handel", "Grundläggning på lera", "Anläggning i Öresundsregionen"],
  },
  {
    slug: "uppsala",
    name: "Uppsala",
    lan: "Uppsala län",
    landsdel: "Svealand",
    nearby: ["Enköping", "Knivsta", "Sigtuna", "Bålsta", "Storvreta"],
    angle:
      "Uppsala är en av landets snabbast växande städer med mycket nybyggnation av bostäder och samhällsfastigheter. Vi levererar armering till både husgrunder och större konstruktioner i Uppsalaregionen.",
    intro2:
      "Uppsalas snabba tillväxt innebär många nya husgrunder, bostadskvarter och samhällsfastigheter. Färdig prefab armering håller tempo i pressade byggtidplaner och minskar arbetet på plats.",
    sectors: ["Nya bostadskvarter", "Samhällsfastigheter (skola, vård)", "Husgrunder och plattor", "Universitets- och forskningsbyggnation"],
  },
  {
    slug: "vasteras",
    name: "Västerås",
    lan: "Västmanlands län",
    landsdel: "Svealand",
    nearby: ["Enköping", "Köping", "Hallstahammar", "Surahammar", "Eskilstuna"],
    angle:
      "Västerås är en industristad vid Mälaren med både tung industri och växande bostadsområden. Vi levererar prefab armering till plattor, grunder och anläggningsprojekt i Västmanland.",
    intro2:
      "Västerås industriella bas vid Mälaren betyder både tunga industrikonstruktioner och växande bostadsområden – två världar där prefab armering kortar byggtiden och ger jämn kvalitet.",
    sectors: ["Industri- och verkstadsbyggnation", "Bostäder vid Mälaren", "Grundläggning och plattor", "Energi- och anläggningsprojekt"],
  },
  {
    slug: "orebro",
    name: "Örebro",
    lan: "Örebro län",
    landsdel: "Svealand",
    nearby: ["Kumla", "Hallsberg", "Lindesberg", "Karlskoga", "Nora"],
    angle:
      "Örebro ligger som en logistik- och byggknutpunkt mitt i landet. Det centrala läget gör leveranser av armering effektiva till projekt i hela Örebroregionen och angränsande län.",
    intro2:
      "Örebros centrala läge gör staden till en logistikhubb med mycket lager- och verksamhetsbyggande. Härifrån når prefab armering effektivt projekt i både Örebro och angränsande län.",
    sectors: ["Logistik- och lagerbyggnation", "Bostäder och handel", "Infrastruktur i Mellansverige", "Grundläggning och plattor"],
  },
  {
    slug: "linkoping",
    name: "Linköping",
    lan: "Östergötlands län",
    landsdel: "Götaland",
    nearby: ["Norrköping", "Mjölby", "Motala", "Åtvidaberg", "Linghem"],
    angle:
      "Linköping växer med universitet, industri och nya bostadsområden. Vi levererar klippt och bockad armering, korgar och nät till bygg- och anläggningsprojekt i östra Götaland.",
    intro2:
      "Linköping växer med teknikindustri, universitet och nya bostadsområden. Prefab armering passar både komplexa konstruktioner och snabb husgrundläggning i regionen.",
    sectors: ["Teknik- och industribyggnation", "Universitets- och forskningsmiljöer", "Nya bostadsområden", "Husgrunder och plattor"],
  },
  {
    slug: "helsingborg",
    name: "Helsingborg",
    lan: "Skåne län",
    landsdel: "Götaland",
    nearby: ["Ängelholm", "Landskrona", "Höganäs", "Bjuv", "Åstorp"],
    angle:
      "Helsingborg är en hamnstad i nordvästra Skåne med aktiv bygg- och anläggningsmarknad. Vi levererar prefab armering efter ritning till projekt i hela nordvästra Skåne.",
    intro2:
      "Som hamnstad i nordvästra Skåne har Helsingborg aktiv bygg- och anläggningsmarknad, från kajer och logistik till bostäder. Vi levererar armering anpassad efter projektets krav.",
    sectors: ["Hamn- och logistikbyggnation", "Bostäder i nordvästra Skåne", "Anläggning och infrastruktur", "Grundläggning och plattor"],
  },
  {
    slug: "jonkoping",
    name: "Jönköping",
    lan: "Jönköpings län",
    landsdel: "Götaland",
    nearby: ["Huskvarna", "Nässjö", "Vetlanda", "Värnamo", "Habo"],
    angle:
      "Jönköping vid Vätterns södra ände är ett logistiknav med växande bostads- och industribyggande. Vi levererar armering till plattor, grunder och konstruktioner i Jönköpingsregionen.",
    intro2:
      "Vid Vätterns södra ände är Jönköping ett logistiknav med stark tillväxt inom lager, industri och bostäder – projekt där prefab armering sparar tid och minskar spill.",
    sectors: ["Lager- och logistikbyggnation", "Industri kring Vättern", "Bostäder och handel", "Husgrunder och plattor"],
  },
  {
    slug: "norrkoping",
    name: "Norrköping",
    lan: "Östergötlands län",
    landsdel: "Götaland",
    nearby: ["Linköping", "Söderköping", "Finspång", "Nyköping", "Åby"],
    angle:
      "Norrköping med hamn och industriell historia bygger nytt i både stadskärna och verksamhetsområden. Vi levererar prefab armering till bygg- och anläggningsprojekt i Norrköpingsregionen.",
    intro2:
      "Norrköping bygger nytt i både stadskärna och verksamhetsområden, med industriell historia och modern stadsutveckling sida vid sida – ofta med krav på snabb och jämn armering.",
    sectors: ["Stadsutveckling och bostäder", "Industri- och hamnbyggnation", "Infrastruktur", "Grundläggning och plattor"],
  },
  {
    slug: "umea",
    name: "Umeå",
    lan: "Västerbottens län",
    landsdel: "Norrland",
    nearby: ["Skellefteå", "Örnsköldsvik", "Vännäs", "Robertsfors", "Holmsund"],
    angle:
      "Umeå är norra Sveriges tillväxtmotor och regionen har stora industri- och samhällsprojekt på gång. Vi levererar armering även långt norrut – leveranstid planeras utifrån ort och mängd.",
    intro2:
      "Umeå och Norrland har stora industri- och samhällsinvesteringar på gång. Vi planerar tillverkning och transport så att prefab armering finns på plats i tid, även på längre avstånd och i kallt klimat.",
    sectors: ["Industri- och samhällsprojekt", "Bostäder i norra Sverige", "Anläggning i kallt klimat", "Grundläggning och plattor"],
  },
  {
    slug: "sundsvall",
    name: "Sundsvall",
    lan: "Västernorrlands län",
    landsdel: "Norrland",
    nearby: ["Timrå", "Härnösand", "Söderhamn", "Hudiksvall", "Matfors"],
    angle:
      "Sundsvall är en industri- och logistikstad vid Bottenhavet med aktiv byggmarknad. Vi levererar prefab armering till projekt i Sundsvallsregionen – transport och leveranstid anpassas för Norrland.",
    intro2:
      "Sundsvalls industri och logistik vid Bottenhavet driver en aktiv byggmarknad. Vi anpassar transport och leveranstid för Norrland så att armeringen kommer fram planenligt.",
    sectors: ["Industri- och logistikbyggnation", "Bostäder i Sundsvallsregionen", "Anläggning vid Bottenhavet", "Grundläggning och plattor"],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

/** Namn-lista (bakåtkompatibel) – används i sidfot och på /leverans. */
export const regions: string[] = cities.map((c) => c.name);
