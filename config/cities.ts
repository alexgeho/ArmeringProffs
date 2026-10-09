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

import type { Faq } from "@/config/faq";

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
  /** Lokal mark, klimat och grundläggning (unik, sann) – valfri. */
  ground?: string;
  /** Extra lokala frågor – läggs till sidans FAQ. */
  faqs?: Faq[];
};

export const cities: City[] = [
  {
    slug: "stockholm",
    name: "Stockholm",
    lan: "Stockholms län",
    landsdel: "Svealand",
    nearby: ["Solna", "Sundbyberg", "Nacka", "Täby", "Södertälje", "Huddinge"],
    angle:
      "Stockholm är landets största byggmarknad – från tunnelbaneutbyggnaden och Förbifart Stockholm till nya bostadskvarter och villagrunder i kranskommunerna. Vi levererar prefab armering till stora och små projekt i hela Storstockholm.",
    intro2:
      "Innerstadens byggarbetsplatser är trånga, med begränsade lossningstider och lite upplagsyta. Därför är klippt och bockad armering, märkt per position, extra värdefull här: armeringen kan lyftas direkt till rätt våning eller form utan kapning och bockning på plats.",
    sectors: ["Flerbostadshus och förtätning i innerstaden", "Tunnel-, bro- och anläggningsprojekt", "Villagrunder i kranskommunerna", "Kontor och kommersiella fastigheter"],
    ground:
      "Marken i Stockholmsområdet växlar snabbt mellan berg i dagen, morän och lerområden – ibland på samma tomt. På berg och morän gjuts ofta platta på mark direkt, medan lera kan kräva pålning med pålarmering och pålplintar. Konstruktören avgör grundläggningen; vi tillverkar armeringen efter ritningen.",
    faqs: [
      { q: "Vilken armering behövs till en villagrund i Stockholmsområdet?", a: "Oftast armeringsnät i plattan, kantbalksbyglar och kantjärn i kantbalken samt extra järn under bärande väggar. Grundläggningen beror på om tomten är berg, morän eller lera – konstruktionsritningen avgör." },
    ],
  },
  {
    slug: "goteborg",
    name: "Göteborg",
    lan: "Västra Götalands län",
    landsdel: "Götaland",
    nearby: ["Mölndal", "Partille", "Kungälv", "Lerum", "Borås", "Kungsbacka"],
    angle:
      "Göteborg bygger i stor skala – Västlänken, Älvstaden och nya bostäder längs Göta älv – och har Skandinaviens största hamn. Vi levererar klippt och bockad armering, korgar och nät till bygg- och anläggningsprojekt i hela Göteborgsregionen.",
    intro2:
      "Stora delar av centrala Göteborg och älvdalen står på mäktiga lerlager, så grundläggning med pålar, pålplattor och pålplintar är vanlig. Det betyder mycket armering i pålfundament och grundbalkar – detaljer som lämpar sig väl för prefab efter ritning.",
    sectors: ["Grundläggning på lera med pålar och pålplintar", "Infrastruktur och tunnlar", "Bostäder längs Göta älv", "Hamn-, industri- och logistikbyggnation"],
    ground:
      "Leran i Göteborg kan på sina ställen vara tiotals meter djup och är sättningskänslig, därför bärs många byggnader av pålar ner till fast botten. Klimatet vid västkusten är milt men fuktigt och salthaltigt nära havet – exponeringsklass och täckskikt bestäms av konstruktören.",
    faqs: [
      { q: "Levererar ni armering till pålplintar och pålfundament i Göteborg?", a: "Ja. Vi tillverkar plintkorgar, pålarmering och bockade detaljer till pålfundament efter konstruktionsritningen och levererar till arbetsplatsen i Göteborgsregionen." },
    ],
  },
  {
    slug: "malmo",
    name: "Malmö",
    lan: "Skåne län",
    landsdel: "Götaland",
    nearby: ["Lund", "Landskrona", "Trelleborg", "Vellinge", "Kävlinge", "Staffanstorp"],
    angle:
      "Malmö och Öresundsregionen växer med stadsdelar som Hyllie, Västra hamnen och Nyhamnen. Vi levererar prefab armering efter din bockningslista eller ritning till projekt i hela sydvästra Skåne.",
    intro2:
      "Skånes milda klimat ger kortare tjäldjup än i resten av landet och en lång byggsäsong. Närheten till havet ställer i stället krav på betongens beständighet: i kust- och hamnnära konstruktioner styr kloridexponeringen täckskiktet och därmed hur armeringen ska placeras.",
    sectors: ["Stadsutveckling i Hyllie och hamnområdena", "Kust- och hamnnära konstruktioner", "Flerbostadshus och kontor", "Villagrunder i sydvästra Skåne"],
    ground:
      "Under Malmö ligger kalksten, och ovanpå den lerig morän som bär de flesta grunder. Tjäldjupet är bland de minsta i Sverige, men för konstruktioner nära havet ger salt och klorider högre krav på täckskikt (exponeringsklass XS) – det anges på konstruktionsritningen.",
    faqs: [
      { q: "Behövs större täckskikt nära havet i Malmö?", a: "Ofta ja. Konstruktioner som utsätts för saltvatten eller havsluft hamnar i exponeringsklass XS enligt Eurokod 2, vilket normalt kräver större täckskikt. Konstruktören anger värdet – vi levererar distanser i rätt höjd." },
    ],
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
      "Umeå är Norrlands största stad och växer med nya bostäder, samhällsbyggen och Norrbotniabanan mot Skellefteå. Vi levererar prefab armering hela vägen till Västerbotten – frakt räknas efter mängd och ort.",
    intro2:
      "I Umeå är byggsäsongen kort och vintrarna långa. Färdig armering, kapad, bockad och märkt per position, gör att formen kan armeras snabbt när vädret tillåter – och minskar tiden med kapning och bockning ute i kylan.",
    sectors: ["Järnvägs- och anläggningsprojekt i Västerbotten", "Bostäder och samhällsfastigheter", "Hamn och industri i Holmsund", "Grundläggning med tjälskydd"],
    ground:
      "Umeå ligger på sand- och siltavlagringar längs Umeälven, och silt är mycket tjälfarligt. Tjäldjupet är betydligt större än i södra Sverige, så grunder kräver tjälisolering eller tillräckligt grundläggningsdjup. Vintergjutning ställer dessutom krav på uppvärmning och skydd av betongen – armeringen påverkas inte av kylan, men leveransen bör planeras mot gjutningen.",
    faqs: [
      { q: "Kan ni leverera armering till Umeå på vintern?", a: "Ja, vi levererar året runt. Frakt och leveranstid till Umeå anges i offerten utifrån mängd och ort, så att armeringen finns på plats till gjutningen." },
    ],
  },
  {
    slug: "sundsvall",
    name: "Sundsvall",
    lan: "Västernorrlands län",
    landsdel: "Norrland",
    nearby: ["Timrå", "Härnösand", "Söderhamn", "Hudiksvall", "Matfors"],
    angle:
      "Sundsvall är Mittnorrlands nav för industri och logistik, med hamn vid Bottenhavet och korsningen mellan E4 och E14. Vi levererar prefab armering till projekt i hela Sundsvallsregionen och vidare inåt landet.",
    intro2:
      "Kuperad terräng mellan Norra och Södra stadsberget och närheten till havet ger många stödmurar, grundsulor och anläggningskonstruktioner. Prefab armering efter ritning – byglar, korgar och bockade järn – gör montaget snabbare på branta och trånga tomter.",
    sectors: ["Industri och processanläggningar", "Hamn och logistik vid Bottenhavet", "Stödmurar och grundläggning i sluttning", "Bostäder i Sundsvall, Timrå och Härnösand"],
    ground:
      "Sundsvall har norrländskt klimat med långa vintrar och stort tjäldjup, och marken växlar mellan berg, morän och finkorniga jordar i dalgångarna. Tjälskydd, dränering och grundläggningsdjup bestäms av konstruktören – vi tillverkar armeringen efter ritningen.",
    faqs: [
      { q: "Levererar ni armering till industriprojekt i Sundsvall?", a: "Ja. Vi tillverkar klippt och bockad armering, armeringskorgar och nät efter konstruktionsritningen och levererar till arbetsplatsen. Frakt efter mängd och ort anges i offerten." },
    ],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

/** Namn-lista (bakåtkompatibel) – används i sidfot och på /leverans. */
export const regions: string[] = cities.map((c) => c.name);
