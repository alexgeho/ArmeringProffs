/**
 * Kundomdömen. PLATSHÅLLARE – ersätt med riktiga omdömen innan lansering.
 * (Publicera inte fiktiva recensioner som om de vore äkta.)
 */

export type Review = { name: string; place: string; text: string; rating: number };

export const reviews: Review[] = [
  {
    name: "Kund (exempel)",
    place: "Nacka",
    text: "Proffsigt utfört från schakt till färdig platta. Tydlig offert och de höll tiden.",
    rating: 5,
  },
  {
    name: "Kund (exempel)",
    place: "Täby",
    text: "Gjöt vår garageplatta. Bra kommunikation och snyggt slutresultat.",
    rating: 5,
  },
  {
    name: "Kund (exempel)",
    place: "Lidingö",
    text: "Anlitade dem för grunden till vår tillbyggnad. Rekommenderas varmt.",
    rating: 5,
  },
];
