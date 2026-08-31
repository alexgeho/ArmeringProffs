/** Vanliga frågor – används på sajten och i FAQ-schema (JSON-LD). */

export type Faq = { q: string; a: string };

export const faq: Faq[] = [
  {
    q: "Vad är prefab armering?",
    a: "Prefabricerad armering är armering som tillverkas färdig i verkstad efter din bockningslista eller ritning – klippt och bockat kamstål, armeringskorgar och svetsade nät. Den levereras märkt och sorterad så att den bara ska monteras på bygget, vilket sparar tid och minskar spill.",
  },
  {
    q: "Kan ni tillverka efter min bockningslista eller ritning?",
    a: "Ja. Skicka din bockningslista eller konstruktionsritning (PDF, DWG, Excel eller foto) så tar vi fram en offert och tillverkar armeringen efter den. Har du ingen färdig bockningslista hjälper vi dig att ta fram en utifrån ritningen.",
  },
  {
    q: "Levererar ni i hela Sverige?",
    a: "Ja, vi tillverkar och levererar prefab armering i hela Sverige. Ange leveransort och mängd i offertförfrågan så räknar vi fram frakt och leveranstid.",
  },
  {
    q: "Vad kostar armeringen och hur får jag pris?",
    a: "Priset beror på mängd, dimensioner, utförande och leveransort. Vi arbetar med offert per projekt – skicka din bockningslista, ritning eller mängd så återkommer vi snabbt med ett tydligt pris utan förpliktelser.",
  },
  {
    q: "Ingår montage och armeringsläggning?",
    a: "Vi erbjuder hela cykeln: tillverkning, leverans och montage. Vill du att vi även lägger armeringen på plats ordnar vi det – ange det i offertförfrågan så tar vi med montaget i offerten.",
  },
  {
    q: "Vilken kvalitet och vilka dimensioner tillverkar ni?",
    a: "Vi arbetar med varmvalsat kamstål B500B i dimensioner Ø6–Ø32 mm samt svetsade armeringsnät i olika trådgrovlekar och maskvidder. Allt tillverkas enligt gällande normer och din konstruktionsritning.",
  },
];
