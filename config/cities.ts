/**
 * Orter/områden för lokala landningssidor under /omraden/[slug].
 * Lokalt SEO: "gjuta betongplatta {ort}", "husgrund {ort}" osv.
 */

export type City = {
  slug: string;
  name: string; // Ortnamn i grundform, t.ex. "Nacka"
  inLocative?: string; // "i Nacka" / "på Lidingö" (svensk preposition)
};

export const cities: City[] = [
  { slug: "stockholm", name: "Stockholm", inLocative: "i Stockholm" },
  { slug: "nacka", name: "Nacka", inLocative: "i Nacka" },
  { slug: "taby", name: "Täby", inLocative: "i Täby" },
  { slug: "lidingo", name: "Lidingö", inLocative: "på Lidingö" },
  { slug: "danderyd", name: "Danderyd", inLocative: "i Danderyd" },
  { slug: "solna", name: "Solna", inLocative: "i Solna" },
  { slug: "sundbyberg", name: "Sundbyberg", inLocative: "i Sundbyberg" },
  { slug: "huddinge", name: "Huddinge", inLocative: "i Huddinge" },
  { slug: "sollentuna", name: "Sollentuna", inLocative: "i Sollentuna" },
  { slug: "bromma", name: "Bromma", inLocative: "i Bromma" },
  { slug: "jarfalla", name: "Järfälla", inLocative: "i Järfälla" },
  { slug: "ekero", name: "Ekerö", inLocative: "på Ekerö" },
  { slug: "varmdo", name: "Värmdö", inLocative: "på Värmdö" },
  { slug: "tyreso", name: "Tyresö", inLocative: "i Tyresö" },
  { slug: "haninge", name: "Haninge", inLocative: "i Haninge" },
  { slug: "vaxholm", name: "Vaxholm", inLocative: "i Vaxholm" },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
