/**
 * Kundomdömen. PLATSHÅLLARE – ersätt med riktiga omdömen innan lansering.
 * (Publicera inte fiktiva recensioner som om de vore äkta.)
 *
 * SÅ AKTIVERAR DU STJÄRNOR (Review/AggregateRating-schema) NÄR NI HAR RIKTIGA OMDÖMEN:
 *   1. Byt ut exempel-objekten mot äkta omdömen (riktigt namn, ort, text, betyg).
 *   2. Sätt `verified: true` på varje äkta omdöme.
 * Då – och ENDAST då – emitteras Review + AggregateRating-schema på /omdomen
 * (se `verifiedReviews` i app/omdomen/page.tsx + `reviewsSchema` i lib/jsonld.tsx).
 * Så länge inget omdöme är `verified` matar vi INTE Google med fejkad rating.
 */

export type Review = {
  name: string;
  place: string;
  text: string;
  rating: number;
  /** true = äkta, verifierat omdöme. Endast dessa får schema-markering. */
  verified?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Kund (exempel)",
    place: "Göteborg",
    text: "Beställde klippt och bockad armering efter vår bockningslista. Rätt mått, tydlig märkning och leverans i tid.",
    rating: 5,
  },
  {
    name: "Kund (exempel)",
    place: "Stockholm",
    text: "Prefabricerade armeringskorgar till våra pelare – sparade massor av tid på bygget.",
    rating: 5,
  },
  {
    name: "Kund (exempel)",
    place: "Malmö",
    text: "Specialnät efter mått, snabb offert och bra leverans ända hit. Rekommenderas.",
    rating: 5,
  },
];

/** Endast äkta, verifierade omdömen (dessa – och bara dessa – får schema). */
export const verifiedReviews = reviews.filter((r) => r.verified);
