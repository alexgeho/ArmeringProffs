/**
 * Leveransområde: HELA SVERIGE.
 *
 * Armeringsproffs tillverkar och levererar prefab armering i hela landet. För att
 * fånga lokala sökningar ("armering [ort]", "armeringsleverantör [ort]") finns
 * lokala landningssidor under /armering/[slug], genererade från listan nedan.
 * Varje ort har unikt innehåll (län, landsdel, närliggande orter, lokal text).
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
  /** Kort lokal text (unik per stad) så sidorna inte blir dubbletter. */
  angle: string;
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
  },
  {
    slug: "goteborg",
    name: "Göteborg",
    lan: "Västra Götalands län",
    landsdel: "Götaland",
    nearby: ["Mölndal", "Partille", "Kungälv", "Lerum", "Borås", "Kungsbacka"],
    angle:
      "Göteborg med hamn, industri och stora infrastrukturprojekt har en ständig efterfrågan på armering. Vi levererar klippt och bockad armering, korgar och nät till bygg- och anläggningsprojekt i hela Göteborgsregionen.",
  },
  {
    slug: "malmo",
    name: "Malmö",
    lan: "Skåne län",
    landsdel: "Götaland",
    nearby: ["Lund", "Landskrona", "Trelleborg", "Vellinge", "Kävlinge", "Staffanstorp"],
    angle:
      "Malmö och Öresundsregionen växer snabbt med mycket bostads- och stadsutveckling. Vi levererar prefab armering efter din bockningslista eller ritning till projekt i hela sydvästra Skåne.",
  },
  {
    slug: "uppsala",
    name: "Uppsala",
    lan: "Uppsala län",
    landsdel: "Svealand",
    nearby: ["Enköping", "Knivsta", "Sigtuna", "Bålsta", "Storvreta"],
    angle:
      "Uppsala är en av landets snabbast växande städer med mycket nybyggnation av bostäder och samhällsfastigheter. Vi levererar armering till både husgrunder och större konstruktioner i Uppsalaregionen.",
  },
  {
    slug: "vasteras",
    name: "Västerås",
    lan: "Västmanlands län",
    landsdel: "Svealand",
    nearby: ["Enköping", "Köping", "Hallstahammar", "Surahammar", "Eskilstuna"],
    angle:
      "Västerås är en industristad vid Mälaren med både tung industri och växande bostadsområden. Vi levererar prefab armering till plattor, grunder och anläggningsprojekt i Västmanland.",
  },
  {
    slug: "orebro",
    name: "Örebro",
    lan: "Örebro län",
    landsdel: "Svealand",
    nearby: ["Kumla", "Hallsberg", "Lindesberg", "Karlskoga", "Nora"],
    angle:
      "Örebro ligger som en logistik- och byggknutpunkt mitt i landet. Det centrala läget gör leveranser av armering effektiva till projekt i hela Örebroregionen och angränsande län.",
  },
  {
    slug: "linkoping",
    name: "Linköping",
    lan: "Östergötlands län",
    landsdel: "Götaland",
    nearby: ["Norrköping", "Mjölby", "Motala", "Åtvidaberg", "Linghem"],
    angle:
      "Linköping växer med universitet, industri och nya bostadsområden. Vi levererar klippt och bockad armering, korgar och nät till bygg- och anläggningsprojekt i östra Götaland.",
  },
  {
    slug: "helsingborg",
    name: "Helsingborg",
    lan: "Skåne län",
    landsdel: "Götaland",
    nearby: ["Ängelholm", "Landskrona", "Höganäs", "Bjuv", "Åstorp"],
    angle:
      "Helsingborg är en hamnstad i nordvästra Skåne med aktiv bygg- och anläggningsmarknad. Vi levererar prefab armering efter ritning till projekt i hela nordvästra Skåne.",
  },
  {
    slug: "jonkoping",
    name: "Jönköping",
    lan: "Jönköpings län",
    landsdel: "Götaland",
    nearby: ["Huskvarna", "Nässjö", "Vetlanda", "Värnamo", "Habo"],
    angle:
      "Jönköping vid Vätterns södra ände är ett logistiknav med växande bostads- och industribyggande. Vi levererar armering till plattor, grunder och konstruktioner i Jönköpingsregionen.",
  },
  {
    slug: "norrkoping",
    name: "Norrköping",
    lan: "Östergötlands län",
    landsdel: "Götaland",
    nearby: ["Linköping", "Söderköping", "Finspång", "Nyköping", "Åby"],
    angle:
      "Norrköping med hamn och industriell historia bygger nytt i både stadskärna och verksamhetsområden. Vi levererar prefab armering till bygg- och anläggningsprojekt i Norrköpingsregionen.",
  },
  {
    slug: "umea",
    name: "Umeå",
    lan: "Västerbottens län",
    landsdel: "Norrland",
    nearby: ["Skellefteå", "Örnsköldsvik", "Vännäs", "Robertsfors", "Holmsund"],
    angle:
      "Umeå är norra Sveriges tillväxtmotor och regionen har stora industri- och samhällsprojekt på gång. Vi levererar armering även långt norrut – leveranstid planeras utifrån ort och mängd.",
  },
  {
    slug: "sundsvall",
    name: "Sundsvall",
    lan: "Västernorrlands län",
    landsdel: "Norrland",
    nearby: ["Timrå", "Härnösand", "Söderhamn", "Hudiksvall", "Matfors"],
    angle:
      "Sundsvall är en industri- och logistikstad vid Bottenhavet med aktiv byggmarknad. Vi levererar prefab armering till projekt i Sundsvallsregionen – transport och leveranstid anpassas för Norrland.",
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

/** Namn-lista (bakåtkompatibel) – används i sidfot och på /leverans. */
export const regions: string[] = cities.map((c) => c.name);
