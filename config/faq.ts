/** Vanliga frågor – används på sajten och i FAQ-schema (JSON-LD). */

export type Faq = { q: string; a: string };

export const faq: Faq[] = [
  {
    q: "Vad är prefab armering?",
    a: "Prefabricerad armering är armering som tillverkas färdig i verkstad efter din bockningslista eller ritning – klippt och bockat kamstål, armeringskorgar och svetsade nät. Den levereras märkt och sorterad så att den bara ska monteras på bygget, vilket sparar tid och minskar spill.",
  },
  {
    q: "Kan ni tillverka efter min bockningslista eller ritning?",
    a: "Ja. Skicka din bockningslista eller konstruktionsritning (PDF, DWG eller Excel) så tar vi fram en offert och tillverkar armeringen efter den. Ett foto av en skiss räcker för att komma igång. Har du ingen färdig bockningslista hjälper vi dig att ta fram en utifrån ritningen.",
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
    a: "Ja, om du vill. Vi erbjuder hela cykeln – tillverkning, leverans och armeringsmontage i hela Sverige. Montaget står som en egen post i offerten.",
  },
  {
    q: "Vilken kvalitet och vilka dimensioner tillverkar ni?",
    a: "Vi arbetar med varmvalsat kamstål B500B i dimensioner Ø6–Ø32 mm samt svetsade armeringsnät i olika trådgrovlekar och maskvidder. Allt tillverkas enligt gällande normer och din konstruktionsritning.",
  },
  {
    q: "Hur snabbt får jag en offert?",
    a: "Skicka in din bockningslista, ritning eller mängd via offertformuläret så återkommer vi normalt inom en arbetsdag med pris och leveranstid. Har du ett brådskande projekt – ring oss direkt så prioriterar vi förfrågan.",
  },
  {
    q: "Vilka underlag behöver ni för att räkna på mitt projekt?",
    a: "Ett foto av en skiss räcker för att starta. Har du bockningslista eller konstruktionsritning (PDF, DWG/DXF, Excel) går det ännu snabbare. Saknas bockningslista tar vi fram den åt dig.",
  },
  {
    q: "Hur märks och levereras armeringen?",
    a: "All prefab armering märks och sorteras per element eller position enligt bockningslistan, så att den är enkel att montera på plats. Leverans sker med anpassad transport utifrån mängd, dimension och ort – vi lastar så att det går smidigt att lossa på bygget.",
  },
  {
    q: "Vad kostar frakten?",
    a: "Frakten beror på mängd, dimension och leveransort och anges alltid tydligt i offerten – inga dolda avgifter. Ange leveransort i din förfrågan så räknar vi fram transporten tillsammans med priset på armeringen.",
  },
  {
    q: "Kan ni tillverka armeringskorgar till pålar och pelare?",
    a: "Ja, vi tillverkar prefabricerade armeringskorgar för pålar, pelare, balkar och grundelement – svetsade eller bundna efter din ritning. Färdiga korgar sparar mycket tid på bygget jämfört med att binda på plats.",
  },
  {
    q: "Följer armeringen svenska normer och standarder?",
    a: "Ja. Vi tillverkar i kamstål B500B och svetsade nät enligt gällande svenska normer och Eurokod, efter din konstruktionsritning. Materialcertifikat 3.1 enligt SS-EN 10204 och EPD kan levereras med leveransen.",
  },
  {
    q: "Levererar ni även till mindre projekt och privatpersoner?",
    a: "Ja, vi tar både stora och mindre projekt – från enskilda betongplattor och garage till större anläggningsprojekt. Berätta vad du ska bygga i offertförfrågan så återkommer vi med förslag och pris.",
  },
];
