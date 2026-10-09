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
      "Prefab armering till Uppsala: grundpaket till villor, pålarmering för lerområdena och korgar till bostadskvarter. Tillverkat efter din ritning, levererat till arbetsplatsen.",
    intro2:
      "Nya stadsdelar som Rosendal och Ulleråker byggs i etapper med många gjutningar i följd. Där gör märkning per position och leverans per etapp skillnad: armeringen till nästa bjälklag kommer när formen är klar, inte veckor innan.",
    sectors: ["Bostadskvarter i Rosendal och Ulleråker", "Skolor och vårdbyggnader", "Pålplintar och grundbalkar på lera", "Villagrunder i Knivsta och Storvreta"],
    ground:
      "Uppsala ligger på en lerslätt där leran på sina håll är mycket djup, med Uppsalaåsen som en grusrygg genom staden. På leran grundläggs större hus ofta på pålar med plintar och grundbalkar, medan villor ofta kan gjutas som platta på mark. Konstruktören avgör grundläggningen; vi tillverkar armeringen efter ritningen.",
    faqs: [
      { q: "Behöver en villa i Uppsala pålas?", a: "Inte alltid. Det beror på hur djup och lös leran är på just din tomt. Geotekniken och konstruktören avgör. Blir det pålning tillverkar vi pålarmering och plintkorgar, annars grundarmering till plattan." },
    ],
  },
  {
    slug: "vasteras",
    name: "Västerås",
    lan: "Västmanlands län",
    landsdel: "Svealand",
    nearby: ["Enköping", "Köping", "Hallstahammar", "Surahammar", "Eskilstuna"],
    angle:
      "Prefab armering till Västerås och Västmanland: korgar till maskinfundament, nät till industrigolv och grundpaket till villor. Tillverkat efter ritning och märkt per position.",
    intro2:
      "Industribyggen i Västerås har ofta tunga maskinfundament och golv med höga laster. Det blir många korgar och grova järn, som vi tillverkar efter ritning och märker per fundament, så att montaget inte stannar upp.",
    sectors: ["Maskinfundament och industrigolv", "Stadsutveckling kring Mälarporten", "Energi- och kraftvärmeanläggningar", "Villagrunder i Köping och Hallstahammar"],
    ground:
      "Närmast Mälaren och längs Svartån finns lösa leror, medan marken längre från stranden oftare är morän. Nära vattnet kan det därför krävas pålning eller förstärkning. Konstruktören avgör; vi tillverkar pålarmering, plintkorgar och grundarmering efter ritningen.",
    faqs: [
      { q: "Tillverkar ni armering till maskinfundament i Västerås?", a: "Ja. Vi tillverkar korgar och bockade järn efter konstruktionsritningen och märker varje fundament för sig. Ange om ingjutningsgods ska få plats i korgen." },
    ],
  },
  {
    slug: "orebro",
    name: "Örebro",
    lan: "Örebro län",
    landsdel: "Svealand",
    nearby: ["Kumla", "Hallsberg", "Lindesberg", "Karlskoga", "Nora"],
    angle:
      "Prefab armering till Örebro och Närke: nät och kantjärn till lagergolv, plintkorgar till pelarfundament och grundpaket till villor. Tillverkat efter din ritning.",
    intro2:
      "Lager- och logistikhallar kring Örebro och Hallsberg har stora industrigolv och många pelarfundament. Det ger mycket armeringsnät, kantjärn och plintkorgar per projekt, som vi levererar per etapp i takt med gjutningen.",
    sectors: ["Industrigolv i lager- och logistikhallar", "Plint- och pelarfundament", "Järnvägsnära anläggningar kring Hallsberg", "Villagrunder i Kumla och Nora"],
    ground:
      "Örebro ligger på Närkeslätten med lerjordar längs Svartån och mot Hjälmaren, och morän i höjdlägena runt slätten. Stora golvplattor på lera ställer krav på grundläggningen. Konstruktören avgör; vi tillverkar efter ritningen.",
    faqs: [
      { q: "Kan ni leverera armeringsnät till ett stort lagergolv i Örebro?", a: "Ja. Nät, kantjärn och distanser levereras i etapper efter gjutplanen, så att golvet kan gjutas fält för fält." },
    ],
  },
  {
    slug: "linkoping",
    name: "Linköping",
    lan: "Östergötlands län",
    landsdel: "Götaland",
    nearby: ["Norrköping", "Mjölby", "Motala", "Åtvidaberg", "Linghem"],
    angle:
      "Prefab armering till Linköping: klippt och bockad armering, korgar och nät till anläggning, bostäder och villagrunder i Östergötland. Tillverkat efter din ritning.",
    intro2:
      "Ostlänken, den nya stambanan mot Stockholm, ger många bro- och anläggningsobjekt runt Linköping. Samtidigt växer stadsdelar som Vallastaden. Vi levererar både anläggningsarmering efter ritning och grundpaket till villor.",
    sectors: ["Bro- och anläggningsobjekt längs Ostlänken", "Bostäder i Vallastaden och nya stadsdelar", "Industri- och verkstadsbyggnation", "Villagrunder i Mjölby och Linghem"],
    ground:
      "Östgötaslätten har lerjordar och moränlera, särskilt längs Stångån. Platta på mark fungerar ofta för villor, medan större byggnader på lös lera kan behöva pålas. Konstruktören avgör grundläggningen.",
    faqs: [
      { q: "Levererar ni armering till anläggningsprojekt kring Linköping?", a: "Ja. Vi tillverkar klippt och bockad armering och korgar efter ritning, märkt per position, och levererar per etapp till objektet." },
    ],
  },
  {
    slug: "helsingborg",
    name: "Helsingborg",
    lan: "Skåne län",
    landsdel: "Götaland",
    nearby: ["Ängelholm", "Landskrona", "Höganäs", "Bjuv", "Åstorp"],
    angle:
      "Prefab armering till Helsingborg och nordvästra Skåne, från kustnära kvarter till villagrunder. Tillverkat efter ritning, med distanser för det täckskikt havsmiljön kräver.",
    intro2:
      "Stadsförnyelsen H+ och Oceanhamnen bygger nya kvarter på gammal hamn- och industrimark, nära Öresund. Där styr havsmiljön täckskiktet, och armeringen behöver distanser i rätt höjd för att hamna där konstruktören ritat den.",
    sectors: ["Stadsförnyelse i H+ och Oceanhamnen", "Hamn-, kaj- och logistikbyggnation", "Kustnära konstruktioner vid Öresund", "Villagrunder i Höganäs och Ängelholm"],
    ground:
      "Nordvästra Skåne har mest moränlera och kort tjäldjup. Nära havet hamnar betongen ofta i exponeringsklass XS, med större täckskikt som följd. Värdet står på konstruktionsritningen.",
    faqs: [
      { q: "Påverkar havsnära läge armeringen i Helsingborg?", a: "Ja, genom täckskiktet. Salt och klorider ger ofta exponeringsklass XS och större täckskikt. Konstruktören anger värdet, och vi levererar distanser i rätt höjd." },
    ],
  },
  {
    slug: "jonkoping",
    name: "Jönköping",
    lan: "Jönköpings län",
    landsdel: "Götaland",
    nearby: ["Huskvarna", "Nässjö", "Vetlanda", "Värnamo", "Habo"],
    angle:
      "Prefab armering till Jönköping: nät till lagergolv, korgar till stödmurar och grunder på sluttande tomt. Tillverkat efter din ritning och märkt per position.",
    intro2:
      "Jönköping ligger i en sänka mellan branta sluttningar, och många tomter lutar. Det ger stödmurar, stegade grunder och höga kantbalkar, detaljer där färdigbockad armering efter ritning sparar mycket tid på plats.",
    sectors: ["Lagerhallar i Torsvik och Hedenstorp", "Stödmurar och grunder i sluttning", "Bostäder i Huskvarna och Habo", "Industri i Värnamo och Nässjö"],
    ground:
      "I dalgången närmast Vättern finns sand, silt och lera, medan sluttningarna ofta är morän. Silt är tjälfarlig, så tjälisolering och dränering är viktiga. Konstruktören avgör grundläggningen; vi tillverkar efter ritningen.",
    faqs: [
      { q: "Kan ni armera en stegad grund på sluttande tomt?", a: "Ja. Höga och stegade kantbalkar tillverkas som korgar efter ritningen och märks per avsnitt, så att det är tydligt var varje korg ska ligga." },
    ],
  },
  {
    slug: "norrkoping",
    name: "Norrköping",
    lan: "Östergötlands län",
    landsdel: "Götaland",
    nearby: ["Linköping", "Söderköping", "Finspång", "Nyköping", "Åby"],
    angle:
      "Prefab armering till Norrköping: bostadskvarter, järnvägsobjekt och villagrunder. Klippt och bockad armering, korgar och nät efter ritning, levererat per etapp.",
    intro2:
      "Inre hamnen omvandlas till bostadskvarter, och Ostlänken ger ny järnväg och nytt resecentrum. Projekten gjuts i många etapper, och vi levererar armeringen per etapp, märkt per position.",
    sectors: ["Bostadskvarter i Inre hamnen", "Järnvägs- och broobjekt för Ostlänken", "Hamn och industri vid Bråviken", "Villagrunder i Söderköping och Åby"],
    ground:
      "Längs Motala ström och mot Bråviken finns lera, och i hamnområdena ofta fyllnadsmassor. Där pålas många byggnader. På moränmark utanför centrum räcker oftare platta på mark. Konstruktören avgör.",
    faqs: [
      { q: "Levererar ni pålarmering till projekt i Norrköping?", a: "Ja. Vi tillverkar pålarmering, plintkorgar och grundbalkar efter konstruktionsritningen och levererar per etapp." },
    ],
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
