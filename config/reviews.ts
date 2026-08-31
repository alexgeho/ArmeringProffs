/**
 * Kundomdömen. PLATSHÅLLARE – ersätt med riktiga omdömen innan lansering.
 * (Publicera inte fiktiva recensioner som om de vore äkta.)
 */

export type Review = { name: string; place: string; text: string; rating: number };

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
