/** Vanliga frågor – används på sajten och i FAQ-schema (JSON-LD). */

export type Faq = { q: string; a: string };

export const faq: Faq[] = [
  {
    q: "Vad kostar det att gjuta en betongplatta?",
    a: "Priset beror på plattans storlek, markförhållanden, isolering och om golvvärme ska ingå. Efter ett kostnadsfritt platsbesök lämnar vi ett tydligt fast pris utan dolda avgifter. Vid arbete på befintlig fastighet kan ROT-avdrag sänka arbetskostnaden med 30 %.",
  },
  {
    q: "Hur lång tid tar det att gjuta en platta?",
    a: "En normal villaplatta tar oftast 1–3 veckor inklusive schakt, isolering, armering och gjutning – beroende på storlek, markförhållanden och väder. Betongen behöver därefter härda innan man bygger vidare.",
  },
  {
    q: "Kan jag använda ROT-avdrag?",
    a: "Ja, för arbete på en befintlig fastighet (t.ex. tillbyggnad, garage eller uterum) kan du använda ROT-avdraget på arbetskostnaden. För helt nybyggda hus gäller inte ROT. Vi hjälper dig med hela hanteringen mot Skatteverket.",
  },
  {
    q: "Vilka områden arbetar ni i?",
    a: "Vi utför gjutning och grundläggning i hela Stockholm med omnejd – bland annat Nacka, Täby, Lidingö, Danderyd, Solna, Huddinge och Sollentuna.",
  },
  {
    q: "Lämnar ni garanti på arbetet?",
    a: "Ja. Allt vi utför omfattas av garanti och vi arbetar enligt gällande branschregler. Du får en tydlig offert och dokumentation på utfört arbete.",
  },
  {
    q: "Ingår isolering och golvvärme?",
    a: "Vi bygger upp plattan med markisolering för ett energieffektivt hus och kan förbereda för golvvärme innan gjutning. Det specificeras i offerten utifrån dina önskemål.",
  },
];
