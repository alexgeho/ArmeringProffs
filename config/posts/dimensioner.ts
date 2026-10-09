/** Plan: docs/PLAN-sidor-2026-10.md (våg 2 – dimensioner, punkt 26–44) */
import type { Post } from "@/config/blog";

const date = "2026-10-09";

/* ───────────── Armeringsjärn per dimension (26–33) ───────────── */

const jarn: Post[] = [
  {
    slug: "armeringsjarn-6-mm",
    title: "Armeringsjärn 6 mm – vikt, mått och användning",
    metaTitle: "Armeringsjärn 6 mm (Ø6) – vikt & användning",
    metaDescription:
      "Armeringsjärn 6 mm: 0,222 kg/m, 28,3 mm² tvärsnitt, dorndiameter 24 mm. När Ø6 räcker, krokregler för byglar och hur mycket ett ton räcker till.",
    excerpt:
      "Ø6 är den tunnaste dimensionen av kamstål. Den används framför allt till byglar, hakar och kompletteringsjärn. Här är vikt, area, bockningsregler och vad Ø6 passar till.",
    date,
    readingMinutes: 6,
    keywords: [
      "armeringsjärn 6 mm",
      "kamstål 6 mm",
      "6 mm armering",
      "armeringsjärn ø6",
      "bygel 6 mm",
      "kamjärn 6 mm vikt",
    ],
    content: [
      { type: "p", text: "Armeringsjärn 6 mm (Ø6) är den klenaste dimensionen av kamstål B500B. Den bär inte stora laster själv – i stället håller den ihop grövre armering, låser nät och fyller ut där ritningen kräver lite stål. Det mesta Ø6 som går åt på ett bygge är bockat: byglar, hakar och kramlor. Därför beställs dimensionen oftast som [klippt och bockad armering](/produkter/klippt-och-bockad) snarare än som raka stänger." },
      { type: "p", text: "Behöver du raka stänger finns Ø6 även som [armeringsjärn i 6 och 12 meter](/produkter/armeringsjarn). Här är siffrorna du behöver för att räkna och beställa." },

      { type: "h2", text: "Fakta om armeringsjärn Ø6" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Nominell diameter", "6 mm"],
        ["Tvärsnittsarea", "28,3 mm²"],
        ["Vikt per meter", "0,222 kg"],
        ["Stång 6 m", "ca 1,33 kg"],
        ["Stång 12 m", "ca 2,66 kg"],
        ["Löpmeter per ton", "ca 4 500 m"],
        ["Stänger 12 m per ton", "ca 375 st"],
        ["Minsta dorndiameter", "24 mm (4 × Ø)"],
        ["Stålkvalitet", "B500B enligt SS 212540"],
      ], caption: "Vikt och area enligt nominell diameter. Dorndiameter enligt SS-EN 1992-1-1 tabell 8.1N." },

      { type: "h2", text: "Vad används 6 mm armering till?" },
      { type: "ul", items: [
        "Byglar i små balkar, pelare och sockelbalkar där huvudjärnen är klena.",
        "S-hakar och kramlor som binder ihop två armeringslager i en vägg.",
        "Kompletteringsjärn runt öppningar och urtag i nät 6150 – samma tråddimension som nätet.",
        "Fördelningsjärn i tunna pågjutningar, trappsteg och mindre gjutningar.",
        "Monteringsjärn som håller korgar och byglar i läge under gjutningen.",
      ] },
      { type: "p", text: "Ø6 används sällan som huvudarmering i bärande delar. Eurokod 2 anger som rekommenderat värde 8 mm som minsta diameter för längsgående armering i pelare (avsnitt 9.5.2). Ritningen avgör alltid." },

      { type: "h2", text: "Ø6 som bygel – vad säger Eurokod?" },
      { type: "p", text: "För byglar i pelare anger Eurokod 2 (9.5.3) att bygeldiametern ska vara minst 6 mm eller en fjärdedel av huvudjärnets största diameter – det större värdet gäller. Ø6-byglar räcker alltså till huvudjärn upp till Ø24. Är huvudjärnen Ø25 eller grövre krävs minst Ø8." },
      { type: "p", text: "På tunna byglar är det minimimåtten på krokarna som styr, inte 5 × Ø. En 135°-krok ska ha en rak ände på minst 5 × Ø men minst 50 mm, och en 90°-bock minst 10 × Ø men minst 70 mm. För Ø6 blir det alltså 50 respektive 70 mm." },
      { type: "table", head: ["Krok på Ø6-bygel", "Regel", "Minsta raka ände"], rows: [
        ["135°", "max(5Ø, 50 mm)", "50 mm"],
        ["90°", "max(10Ø, 70 mm)", "70 mm"],
        ["Inre bockningsradie", "dorn 4Ø / 2", "12 mm"],
      ], caption: "Eurokod 2, avsnitt 8.5 och figur 8.5. Ritningen kan kräva mer." },

      { type: "h2", text: "Förankring och skarv" },
      { type: "p", text: "Ett fullt utnyttjat Ø6-järn behöver i betong C25/30 och god vidhäftning en grundförankringslängd på cirka 40 × Ø, alltså runt 240 mm. Vid sämre vidhäftning – till exempel i överkant av en hög gjutning – blir den upp mot 350 mm. Konstruktören räknar fram den slutliga längden; se [skarvlängd armering](/blogg/skarvlangd-armering) för metoden." },

      { type: "h2", text: "Raka stänger, ringar eller bockat?" },
      { type: "p", text: "Ø6 är så klent att raka 12-metersstänger blir sladdriga att hantera. Mycket av dimensionen tillverkas därför från ringar i bockmaskiner, där byglarna blir exakt lika. Bocka för hand går, men vid hundratals byglar blir det både långsamt och ojämnt – se [bocka armeringsjärn](/blogg/bocka-armeringsjarn)." },
      { type: "ul", items: [
        "Några enstaka järn: raka stänger räcker.",
        "Byglar och hakar i serie: beställ färdigbockat efter bockningslista.",
        "Osäker på mängden: räkna i [armeringskalkylatorn](/armeringskalkylator).",
      ] },

      { type: "h2", text: "Kontroll vid leverans" },
      { type: "p", text: "Kontrollera att etiketten på varje bunt stämmer med positionen i bockningslistan och att antalet byglar är rätt. Mät ett par byglar – yttermåtten ska stämma inom normala toleranser. Ø6 är lätt att böja av misstag vid lossning, så förvara buntarna plant och skyddat tills de monteras." },

      { type: "h2", text: "Skicka bygellistan – få Ø6 färdigbockat" },
      { type: "p", text: "Vi bockar byglar, hakar och kompletteringsjärn i Ø6 efter din bockningslista eller ritning. Varje bunt märks med positionsnummer, så att rätt bygel hamnar i rätt balk. Har du bara ritningen tar vi fram listan åt dig. Skicka underlaget via [klippt och bockad armering](/produkter/klippt-och-bockad) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsjärn 6 mm?", a: "0,222 kg per meter. En 6-metersstång väger cirka 1,33 kg och en 12-metersstång cirka 2,66 kg." },
      { q: "Räcker Ø6 till byglar i en pelare?", a: "Ja, om huvudjärnen är högst Ø24. Eurokod 2 kräver bygeldiameter minst 6 mm eller en fjärdedel av huvudjärnets diameter. Ritningen gäller." },
      { q: "Vilken bockningsradie har 6 mm armering?", a: "Minsta dorndiameter är 4 × Ø = 24 mm, vilket ger en inre radie på 12 mm." },
      { q: "Kan man köpa Ø6 färdigbockat?", a: "Ja. Vi tillverkar byglar och hakar i Ø6 efter bockningslista och levererar i hela Sverige. Begär offert." },
    ],
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ bockat Ø6" },
    category: "dimensioner",
  },

  {
    slug: "armeringsjarn-8-mm",
    title: "Armeringsjärn 8 mm – vikt, area per meter och användning",
    metaTitle: "Armeringsjärn 8 mm (Ø8) – vikt & area",
    metaDescription:
      "Armeringsjärn 8 mm väger 0,395 kg/m och har 50,3 mm² area. Tabell med area per meter vid c/c 100–300 mm, användning i kantbalk och regler för bockning.",
    excerpt:
      "Ø8 är arbetshästen för byglar och lätt armering i villabyggen. Här är vikten, arean per meter vid olika centrumavstånd och vad dimensionen används till.",
    date,
    readingMinutes: 6,
    keywords: [
      "armeringsjärn 8 mm",
      "kamstål 8 mm",
      "8 mm armering",
      "armeringsjärn ø8",
      "armeringsjärn 8 mm vikt",
      "kamjärn 8 mm",
    ],
    content: [
      { type: "p", text: "Armeringsjärn 8 mm (Ø8) är den vanligaste dimensionen för byglar i villagrunder och för lätt armering i plattor, trappor och murar. Ett Ø8-järn har nästan dubbelt så stor area som Ø6 men går fortfarande att bocka i små radier. Vi levererar [armeringsjärn Ø8](/produkter/armeringsjarn) som raka stänger i 6 och 12 meter eller färdigbockat efter lista." },

      { type: "h2", text: "Fakta om armeringsjärn Ø8" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Nominell diameter", "8 mm"],
        ["Tvärsnittsarea", "50,3 mm²"],
        ["Vikt per meter", "0,395 kg"],
        ["Stång 6 m", "ca 2,37 kg"],
        ["Stång 12 m", "ca 4,74 kg"],
        ["Löpmeter per ton", "ca 2 530 m"],
        ["Stänger 12 m per ton", "ca 211 st"],
        ["Minsta dorndiameter", "32 mm (4 × Ø)"],
        ["Stålkvalitet", "B500B enligt SS 212540"],
      ], caption: "Dorndiameter enligt SS-EN 1992-1-1 tabell 8.1N." },

      { type: "h2", text: "Vad används 8 mm armering till?" },
      { type: "ul", items: [
        "Kantbalksbyglar – den vanliga villabygeln tillverkas ofta i Ø8.",
        "Byglar i balkar och pelare med huvudjärn upp till Ø32.",
        "Extra järn runt öppningar, hörn och genomföringar i nätarmerade plattor.",
        "Sprickarmering i hörn av plattor och vid ingjutningsgods.",
        "Längsarmering i mindre pelare – 8 mm är Eurokodens rekommenderade minsta diameter (9.5.2).",
        "Trappor, murar och mindre stödmurar enligt ritning.",
      ] },

      { type: "h2", text: "Area per meter – Ø8 vid olika centrumavstånd" },
      { type: "p", text: "I plattor och väggar anges armeringen som dimension och centrumavstånd, till exempel Ø8 s150. Tabellen visar hur mycket stålarea det ger per meter bredd." },
      { type: "table", head: ["Ø8 c/c", "Area per meter", "Stänger per meter", "Vikt per m²*"], rows: [
        ["100 mm", "503 mm²/m", "10", "ca 4,0 kg"],
        ["150 mm", "335 mm²/m", "6,7", "ca 2,6 kg"],
        ["200 mm", "252 mm²/m", "5", "ca 2,0 kg"],
        ["300 mm", "168 mm²/m", "3,3", "ca 1,3 kg"],
      ], caption: "*En riktning, ett lager. Ø8 s150 i båda riktningar ger samma area som nät 8150." },

      { type: "h2", text: "Byglar och krokar i Ø8" },
      { type: "p", text: "Bockas Ø8 runt en 32 mm dorn blir innerradien 16 mm. En 135°-krok ska ha en rak ände på minst 50 mm (5 × Ø = 40 mm, men 50 mm är golvet). En 90°-bock på en bygel behöver minst 80 mm. Hur byglarna formas och mäts går vi igenom i [armeringsbyglar](/blogg/armeringsbyglar)." },
      { type: "p", text: "En villagrund kräver ofta 100–200 kantbalksbyglar i Ø8. Att bocka dem för hand tar en hel arbetsdag och ger varierande mått. Färdiga byglar från maskin är lika i varje exemplar." },

      { type: "h2", text: "Förankring och skarv" },
      { type: "p", text: "Grundförankringslängden för ett fullt utnyttjat Ø8-järn i C25/30 är cirka 320 mm vid god vidhäftning och omkring 460 mm vid dålig. Skarvlängden blir ofta 40–60 × Ø, alltså cirka 320–480 mm. Det är riktvärden – konstruktören avgör. Mer om beräkningen finns i [skarvlängd armering](/blogg/skarvlangd-armering)." },

      { type: "h2", text: "6 eller 12 meter?" },
      { type: "ul", items: [
        "6 meter: lätt att bära, ryms på släp och passar mindre projekt.",
        "12 meter: färre skarvar i långa kantbalkar och väggar – och mindre spill.",
        "Bockat: byglar och L-järn levereras färdiga, märkta per position.",
      ] },

      { type: "h2", text: "Vanliga misstag med Ø8" },
      { type: "p", text: "Det vanligaste felet är att byglarna bockas med innermått när ritningen anger yttermått – då blir korgen för stor och täckskiktet för litet. Ett annat är att Ø8 används som längsarmering där ritningen kräver Ø10 eller grövre för att det råkar finnas på plats. Byt aldrig dimension utan konstruktörens godkännande. Kontrollera också att varje bygel har krok i rätt hörn och att den ligger kvar på distanser under gjutningen." },

      { type: "h2", text: "Kantbalksbyglar i Ø8 – skicka ritningen" },
      { type: "p", text: "Skicka grundritningen så räknar vi ut antal kantbalksbyglar, kantjärn och hörnjärn i Ø8 och tillverkar allt efter samma lista. Raka stänger i 6 eller 12 m går också bra. Frakt efter mängd och ort, i hela Sverige. Begär pris via [armeringsjärn](/produkter/armeringsjarn) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsjärn 8 mm?", a: "0,395 kg per meter. En 6-metersstång väger cirka 2,4 kg och en 12-metersstång cirka 4,7 kg." },
      { q: "Hur många meter Ø8 går det på ett ton?", a: "Cirka 2 530 löpmeter, vilket motsvarar ungefär 211 stänger à 12 meter." },
      { q: "Är Ø8 tillräckligt till kantbalksbyglar?", a: "I många villagrunder ja – villabygeln tillverkas ofta i Ø8. Dimension och bygelavstånd står på konstruktionsritningen." },
      { q: "Vilken bockningsradie gäller för 8 mm armering?", a: "Minsta dorndiameter är 32 mm (4 × Ø), vilket ger en inre bockningsradie på 16 mm enligt Eurokod 2." },
      { q: "Kan jag beställa byglar utan bockningslista?", a: "Ja. Skicka konstruktionsritningen så tar vi fram bockningslistan och räknar antal byglar åt dig." },
    ],
    target: { href: "/produkter/armeringsjarn", label: "Beställ armeringsjärn Ø8" },
    category: "dimensioner",
  },

  {
    slug: "armeringsjarn-10-mm",
    title: "Armeringsjärn 10 mm – vikt, area och användning i platta och vägg",
    metaTitle: "Armeringsjärn 10 mm (Ø10) – vikt & area",
    metaDescription:
      "Armeringsjärn 10 mm: 0,617 kg/m, 78,5 mm². Area per meter vid c/c 100–300, typisk användning i platta, vägg och kantbalk samt förankring och bockning.",
    excerpt:
      "Ø10 är vanlig i plattor, väggar och lätta kantbalkar. Här är vikten, arean vid olika centrumavstånd, bockningsregler och när Ø10 är rätt val.",
    date,
    readingMinutes: 6,
    keywords: [
      "armeringsjärn 10 mm",
      "kamstål 10 mm",
      "10 mm armering",
      "armeringsjärn ø10",
      "armeringsjärn 10 mm vikt",
      "kamjärn 10 mm",
    ],
    content: [
      { type: "p", text: "Armeringsjärn 10 mm (Ø10) ligger mitt i spannet mellan lätt och bärande armering. Dimensionen används i plattor och väggar med centrumavstånd, som kantjärn i lätta grunder och som kraftigare byglar. Ø10 går fortfarande lätt att bocka i maskin och kan hanteras för hand. Vi levererar [armeringsjärn Ø10](/produkter/armeringsjarn) i 6 och 12 meter eller klippt och bockat." },

      { type: "h2", text: "Fakta om armeringsjärn Ø10" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Nominell diameter", "10 mm"],
        ["Tvärsnittsarea", "78,5 mm²"],
        ["Vikt per meter", "0,617 kg"],
        ["Stång 6 m", "ca 3,70 kg"],
        ["Stång 12 m", "ca 7,40 kg"],
        ["Löpmeter per ton", "ca 1 620 m"],
        ["Stänger 12 m per ton", "ca 135 st"],
        ["Minsta dorndiameter", "40 mm (4 × Ø)"],
        ["Stålkvalitet", "B500B enligt SS 212540"],
      ], caption: "Dorndiameter enligt SS-EN 1992-1-1 tabell 8.1N." },

      { type: "h2", text: "Vad används 10 mm armering till?" },
      { type: "ul", items: [
        "Plattor och bjälklag med lösa järn, ofta Ø10 s150–s200 i ett eller två lager.",
        "Väggar och poolväggar – vertikal och horisontell armering i båda sidor.",
        "Kantjärn i lätta grunder, garage och uterum.",
        "Byglar i balkar och kantbalkar med större tvärkrafter.",
        "Stödmurar och murar med låg höjd enligt ritning.",
      ] },

      { type: "h2", text: "Area per meter – Ø10 vid olika centrumavstånd" },
      { type: "table", head: ["Ø10 c/c", "Area per meter", "Stänger per meter", "Vikt per m²*"], rows: [
        ["100 mm", "785 mm²/m", "10", "ca 6,2 kg"],
        ["150 mm", "524 mm²/m", "6,7", "ca 4,1 kg"],
        ["200 mm", "392 mm²/m", "5", "ca 3,1 kg"],
        ["300 mm", "262 mm²/m", "3,3", "ca 2,1 kg"],
      ], caption: "*En riktning, ett lager. Ø10 s150 i båda riktningar motsvarar nät 10150." },
      { type: "p", text: "Ø10 s200 ger ungefär samma area som Ø8 s125. Grövre järn med större avstånd ger färre stänger att lägga och binda, men kräver längre skarvar." },

      { type: "h2", text: "Bockning och krokar" },
      { type: "p", text: "Minsta dorndiameter för Ø10 är 40 mm, vilket ger 20 mm innerradie. Vid Ø10 möts de två krokreglerna: en 135°-krok kräver 5 × Ø = 50 mm, exakt samma som minimigolvet. På en bygel kräver en 90°-bock minst 100 mm rak ände. Som tumregel blir klipplängden cirka 2 × Ø = 20 mm kortare per 90°-bock än summan av yttermåtten." },

      { type: "h2", text: "Förankring och skarv" },
      { type: "table", head: ["Förutsättning", "Grundförankring lb,rqd", "Ø10"], rows: [
        ["C30/37, god vidhäftning", "ca 36 × Ø", "ca 360 mm"],
        ["C25/30, god vidhäftning", "ca 40 × Ø", "ca 400 mm"],
        ["C25/30, dålig vidhäftning", "ca 58 × Ø", "ca 580 mm"],
      ], caption: "Fullt utnyttjat järn enligt Eurokod 2 avsnitt 8.4. Konstruktören avgör den slutliga längden." },
      { type: "p", text: "Skarvlängden är grundvärdet gånger ett antal faktorer – bland annat hur stor andel av järnen som skarvas i samma snitt. Se [skarvlängd armering](/blogg/skarvlangd-armering) för en genomgång." },

      { type: "h2", text: "Ø10 eller Ø12 i kantbalken?" },
      { type: "p", text: "I lätta konstruktioner som garage och uterum räcker ofta Ø10 som kantjärn. Villagrunder med bärande ytterväggar ritas oftare med Ø12. Valet styrs av last och spännvidd – det är konstruktörens beslut. Jämför med [armeringsjärn 12 mm](/blogg/armeringsjarn-12-mm)." },

      { type: "h2", text: "Ø10 i väggar och pool" },
      { type: "p", text: "I väggar läggs Ø10 ofta vertikalt och horisontellt i båda sidor, hållna isär av hakar. I poolväggar och källarväggar mot jord är täckskiktet extra viktigt eftersom väggen är fuktig hela tiden. Ett vanligt upplägg är raka stänger horisontellt och L-järn som uppstickare från bottenplattan – allt tillverkat efter samma bockningslista." },

      { type: "h2", text: "Ø10 till platta, vägg eller pool" },
      { type: "p", text: "Vi levererar Ø10 som raka stänger, kapat i längd eller bockat till L-järn och uppstickare. Allt märks per position. Ange centrumavstånd och ytans mått, så räknar vi antal stänger och skarvar. Begär pris via [armeringsjärn](/produkter/armeringsjarn) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsjärn 10 mm?", a: "0,617 kg per meter. En 12-metersstång väger cirka 7,4 kg och en 6-metersstång cirka 3,7 kg." },
      { q: "Hur mycket area ger Ø10 s150?", a: "Cirka 524 mm² per meter bredd. Ø10 s200 ger 392 mm²/m." },
      { q: "Hur lång förankring behöver Ø10?", a: "Grundvärdet för fullt utnyttjat järn är cirka 360–580 mm beroende på betongklass och vidhäftning. Konstruktören anger den slutliga längden." },
      { q: "Kan man bocka 10 mm armering för hand?", a: "Ja, med en handbockare och rätt dorn (40 mm). För serier av byglar och kantjärn är maskinbockat snabbare och jämnare." },
    ],
    target: { href: "/produkter/armeringsjarn", label: "Beställ armeringsjärn Ø10" },
    category: "dimensioner",
  },

  {
    slug: "armeringsjarn-12-mm",
    title: "Armeringsjärn 12 mm – vikt, area och användning i villagrund",
    metaTitle: "Armeringsjärn Ø12 – vikt, area & kantbalk",
    metaDescription:
      "Armeringsjärn Ø12: 0,888 kg/m och 113 mm². Area för 2–6 järn i kantbalk, förankringslängd, bockningsradie 24 mm och var Ø12 används i villagrunden.",
    excerpt:
      "Ø12 är den dimension som oftast ritas in i kantbalkar och under bärande väggar i villagrunder. Här är data, area för olika antal järn och vad du ska tänka på.",
    date,
    readingMinutes: 6,
    keywords: [
      "armeringsjärn ø12",
      "kamstål 12 mm",
      "ø12 armering",
      "kantjärn 12 mm",
      "armeringsjärn 12 mm kantbalk",
      "kamjärn 12 mm vikt",
    ],
    content: [
      { type: "p", text: "Ø12 är den dimension som oftast återkommer på ritningar för villagrunder: i kantbalkar, under bärande väggar, i plintar och i stödmurar. Den är grov nog att bära men går fortfarande att bocka i små radier och hantera för hand. Vi levererar [armeringsjärn Ø12](/produkter/armeringsjarn) som raka stänger eller färdigbockade kantjärn, hörnjärn och byglar." },
      { type: "p", text: "Om stålet i sig – B500B, längder och vad som styr priset – läser du i [armeringsstål](/blogg/armeringsstal). Här fokuserar vi på hur Ø12 används." },

      { type: "h2", text: "Fakta om armeringsjärn Ø12" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Nominell diameter", "12 mm"],
        ["Tvärsnittsarea", "113 mm²"],
        ["Vikt per meter", "0,888 kg"],
        ["Stång 6 m", "ca 5,33 kg"],
        ["Stång 12 m", "ca 10,7 kg"],
        ["Löpmeter per ton", "ca 1 125 m"],
        ["Stänger 12 m per ton", "ca 94 st"],
        ["Minsta dorndiameter", "48 mm (4 × Ø)"],
        ["Stålkvalitet", "B500B enligt SS 212540"],
      ], caption: "Dorndiameter enligt SS-EN 1992-1-1 tabell 8.1N." },

      { type: "h2", text: "Var används Ø12?" },
      { type: "ul", items: [
        "Kantjärn i över- och underkant av kantbalken runt en platta på mark.",
        "Förstärkning under bärande innerväggar och vid punktlaster.",
        "Plintar och mindre grundsulor.",
        "Källarväggar och stödmurar – vertikala järn i dragen sida.",
        "Hörnjärn (L-järn) som för kantjärnen runt hörnen.",
      ] },

      { type: "h2", text: "Area för olika antal järn" },
      { type: "p", text: "I kantbalkar och balkar anges armeringen som antal järn, till exempel 3 Ø12 i underkant. Så mycket area och vikt ger det:" },
      { type: "table", head: ["Antal Ø12", "Area", "Vikt per löpmeter balk"], rows: [
        ["2", "226 mm²", "1,78 kg"],
        ["3", "339 mm²", "2,66 kg"],
        ["4", "452 mm²", "3,55 kg"],
        ["5", "565 mm²", "4,44 kg"],
        ["6", "678 mm²", "5,33 kg"],
      ], caption: "Skarvar och hörnjärn tillkommer. Antal och placering står på ritningen." },
      { type: "h3", text: "Räkneexempel: villagrund 9 × 15 m" },
      { type: "ol", items: [
        "Omkrets: 2 × (9 + 15) = 48 m.",
        "2 Ø12 i överkant + 2 Ø12 i underkant: 4 × 48 = 192 m ≈ 171 kg.",
        "Långsidorna (15 m) är längre än en 12-metersstång: 8 skarvar à 600 mm (50 × Ø) = 4,8 m ≈ 4 kg.",
        "Hörnjärn: 16 st à ca 1,18 m klipplängd ≈ 17 kg.",
        "Summa: cirka 190 kg Ø12 – före byglar och distanser.",
      ] },
      { type: "p", text: "Skarvlängden ovan är ett riktvärde; ritningen gäller. [Armeringskalkylatorn](/armeringskalkylator) räknar din egen platta." },

      { type: "h2", text: "Bockning, krokar och förankring" },
      { type: "ul", items: [
        "Inre bockningsradie minst 24 mm (dorn 48 mm).",
        "135°-krok: rak ände minst 60 mm (5 × Ø).",
        "90°-bock på bygel: rak ände minst 120 mm (10 × Ø).",
        "Grundförankring för fullt utnyttjat järn i C25/30: cirka 480 mm vid god vidhäftning, upp mot 690 mm vid dålig.",
      ] },
      { type: "p", text: "Skarvlängder för Ø12 ligger ofta på 480–720 mm. Det är riktvärden – konstruktören anger längden för din konstruktion." },

      { type: "figure", illustration: "rebar-diameters", caption: "Ø12 jämfört med övriga dimensioner av kamstål B500B." },

      { type: "h2", text: "Raka stänger eller färdiga kantjärn?" },
      { type: "p", text: "Raka 12-metersstänger ger få skarvar längs långsidorna. Hörnen kräver ändå bockade L-järn, och korta sidor kräver kapning. Beställer du kantjärnen kapade och hörnjärnen bockade efter ritningen slipper du spill och kapning på plats." },
      { type: "p", text: "En 12-metersstång Ø12 väger knappt 11 kg och kan bäras av en person. Det gör dimensionen praktisk även på villabyggen utan kran." },

      { type: "h2", text: "Vanliga fel med Ø12 i kantbalken" },
      { type: "p", text: "Kantjärn som slutar i hörnet utan hörnjärn är det vanligaste felet. Ett annat är att alla skarvar hamnar på samma ställe, vilket ritningen sällan tillåter. Kontrollera också att underkantsjärnen ligger på distanser med rätt täckskikt mot mark – minst 75 mm om betongen gjuts direkt mot jord. Och byt inte Ø12 mot Ø10 för att det finns på plats." },

      { type: "h2", text: "Få kantjärn och hörnjärn i Ø12 klara att lägga" },
      { type: "p", text: "Skicka grundritningen så kapar vi kantjärnen, bockar hörnjärnen och märker allt per position. Du slipper kapa och bocka på plats. Leverans i hela Sverige, även Norrland. Begär pris via [armeringsjärn](/produkter/armeringsjarn) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger Ø12 armering?", a: "0,888 kg per meter. En 12-metersstång väger cirka 10,7 kg och ett ton motsvarar ungefär 1 125 löpmeter." },
      { q: "Hur många Ø12 ska det vara i en kantbalk?", a: "Det står på konstruktionsritningen. Ofta ritas två eller tre järn i både över- och underkant, men laster och spännvidd avgör." },
      { q: "Vilken skarvlängd har Ø12?", a: "Riktvärdet är ofta 40–60 × Ø, alltså cirka 480–720 mm. Konstruktören anger den exakta längden." },
      { q: "Vilken bockningsradie har 12 mm armering?", a: "Minsta dorndiameter är 48 mm (4 × Ø), vilket ger 24 mm inre radie." },
    ],
    target: { href: "/produkter/armeringsjarn", label: "Beställ armeringsjärn Ø12" },
    category: "dimensioner",
  },

  {
    slug: "armeringsjarn-16-mm",
    title: "Armeringsjärn 16 mm – vikt, area och användning",
    metaTitle: "Armeringsjärn 16 mm (Ø16) – vikt & area",
    metaDescription:
      "Armeringsjärn 16 mm: 1,58 kg/m, 201 mm². Area vid c/c 100–300, användning i bjälklag, balkar och väggar – och varför Ø16 är sista dimensionen med 4Ø-dorn.",
    excerpt:
      "Ø16 är steget från villabygge till bärande konstruktioner: bjälklag, balkar, källarväggar och fundament. Här är data, area per meter och bockningsreglerna.",
    date,
    readingMinutes: 6,
    keywords: [
      "armeringsjärn 16 mm",
      "kamstål 16 mm",
      "16 mm armering",
      "armeringsjärn ø16",
      "armeringsjärn 16 mm vikt",
      "kamjärn 16 mm",
    ],
    content: [
      { type: "p", text: "Armeringsjärn 16 mm (Ø16) används där lasterna är större än i en vanlig villagrund: i bjälklag, balkar, källarväggar, fundament och stödmurar. En 12-metersstång väger nästan 19 kg, så Ø16 beställs ofta som [klippt och bockad armering](/produkter/klippt-och-bockad) i rätt längder i stället för att kapas på plats. Raka stänger finns som [armeringsjärn i 6 och 12 meter](/produkter/armeringsjarn)." },

      { type: "h2", text: "Fakta om armeringsjärn Ø16" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Nominell diameter", "16 mm"],
        ["Tvärsnittsarea", "201 mm²"],
        ["Vikt per meter", "1,58 kg"],
        ["Stång 6 m", "ca 9,5 kg"],
        ["Stång 12 m", "ca 19,0 kg"],
        ["Löpmeter per ton", "ca 630 m"],
        ["Stänger 12 m per ton", "ca 53 st"],
        ["Minsta dorndiameter", "64 mm (4 × Ø)"],
        ["Stålkvalitet", "B500B enligt SS 212540"],
      ], caption: "Dorndiameter enligt SS-EN 1992-1-1 tabell 8.1N." },

      { type: "h2", text: "Vad används 16 mm armering till?" },
      { type: "ul", items: [
        "Huvudarmering i bjälklag och balkonger med större spännvidder.",
        "Underkantsarmering i balkar och överliggare.",
        "Källarväggar och stödmurar som tar jordtryck.",
        "Grundsulor, plintar och pålfundament.",
        "Pelare i flerbostadshus och lokaler.",
      ] },

      { type: "h2", text: "Area per meter – Ø16 vid olika centrumavstånd" },
      { type: "table", head: ["Ø16 c/c", "Area per meter", "Vikt per m²*"], rows: [
        ["100 mm", "2 010 mm²/m", "ca 15,8 kg"],
        ["150 mm", "1 340 mm²/m", "ca 10,5 kg"],
        ["200 mm", "1 005 mm²/m", "ca 7,9 kg"],
        ["300 mm", "670 mm²/m", "ca 5,3 kg"],
      ], caption: "*En riktning, ett lager." },
      { type: "p", text: "Ø16 s200 ger nästan dubbelt så mycket area som Ø12 s200 (565 mm²/m). Arean växer med diametern i kvadrat – ett steg upp i dimension ger mycket mer stål." },
      { type: "p", text: "I källarväggar och stödmurar läggs Ø16 ofta vertikalt i den dragna sidan, med klenare järn horisontellt." },

      { type: "h2", text: "Sista dimensionen med 4Ø-dorn" },
      { type: "p", text: "Eurokod 2 tillåter dorndiameter 4 × Ø upp till och med Ø16. Därefter krävs 7 × Ø. Ø16 kan alltså bockas till 32 mm innerradie, medan Ø20 behöver 70 mm. Det gör Ø16 till den grövsta dimensionen som fortfarande passar i snäva byglar och krokar." },
      { type: "ul", items: [
        "135°-krok: rak ände minst 80 mm (5 × Ø).",
        "90°-bock på bygel: rak ände minst 160 mm (10 × Ø).",
        "Klipplängd: cirka 32 mm kortare per 90°-bock än summan av yttermåtten.",
      ] },
      { type: "p", text: "Ringar för bockmaskiner finns som grövst upp till omkring Ø16; grövre dimensioner bockas från raka stänger. Bockning för hand är tungt och ger ojämnt resultat – se [bocka armeringsjärn](/blogg/bocka-armeringsjarn)." },

      { type: "h2", text: "Förankring och skarv" },
      { type: "p", text: "För ett fullt utnyttjat Ø16 i C25/30 är grundförankringslängden cirka 640 mm vid god vidhäftning och upp mot 920 mm vid dålig. Skarvar blir ofta 640–960 mm. Värdena är riktvärden; konstruktören räknar fram de slutliga längderna. Läs mer i [skarvlängd armering](/blogg/skarvlangd-armering)." },

      { type: "h2", text: "Täckskikt och avstånd" },
      { type: "p", text: "Täckskiktet ska aldrig vara mindre än järnets diameter för att vidhäftningen ska fungera – för Ø16 minst 16 mm. I praktiken styr exponeringsklassen, som oftast ger 25–45 mm. Fritt avstånd mellan parallella järn ska vara minst det största av Ø, stenstorlek + 5 mm och 20 mm (Eurokod 2, 8.2)." },

      { type: "h2", text: "Ø16 i bjälklag och väggar" },
      { type: "p", text: "I bjälklag läggs Ø16 i underkant i huvudriktningen och ofta klenare järn i andra riktningen. Stöden får överkantsarmering som förankras in i fältet. Eftersom stängerna är tunga lönar det sig att få dem kapade i exakta längder så att de kan läggas ut direkt utan kapning på bjälklaget." },

      { type: "h2", text: "Ø16 kapat i exakta längder" },
      { type: "p", text: "Vi kapar och bockar Ø16 efter bockningslistan, med rätt dorn och märkning per position. Stängerna kan läggas ut direkt på bjälklaget utan kapning. Saknas lista hjälper vi till att ta fram den ur ritningen. Skicka underlaget via [klippt och bockad armering](/produkter/klippt-och-bockad) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsjärn 16 mm?", a: "1,58 kg per meter. En 12-metersstång väger cirka 19 kg." },
      { q: "Vilken bockningsradie har Ø16?", a: "Minsta dorndiameter är 64 mm (4 × Ø), alltså 32 mm inre radie. Ø16 är den grövsta dimensionen där 4 × Ø gäller." },
      { q: "Hur lång skarv behöver Ø16?", a: "Riktvärdet är ofta 640–960 mm (40–60 × Ø). Konstruktören anger den exakta längden." },
      { q: "Finns Ø16 i ringar?", a: "Ringar finns vanligen i Ø6–Ø12 och ibland upp till Ø16. Grövre dimensioner bockas från raka stänger." },
    ],
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ bockat Ø16" },
    category: "dimensioner",
  },

  {
    slug: "armeringsjarn-20-mm",
    title: "Armeringsjärn 20 mm – vikt, area och bockning med 7Ø-dorn",
    metaTitle: "Armeringsjärn 20 mm (Ø20) – vikt & bockning",
    metaDescription:
      "Armeringsjärn 20 mm: 2,47 kg/m, 314 mm², 29,6 kg per 12 m stång. Dorndiameter 140 mm, förankring, avstånd mellan järn och användning i balk och pelare.",
    excerpt:
      "Med Ø20 blir armeringen tung och bockningsreglerna strängare. Här är vikter, area för olika antal järn och vad som skiljer Ø20 från klenare dimensioner.",
    date,
    readingMinutes: 6,
    keywords: [
      "armeringsjärn 20 mm",
      "kamstål 20 mm",
      "20 mm armering",
      "armeringsjärn ø20",
      "armeringsjärn 20 mm vikt",
      "kamjärn 20 mm",
    ],
    content: [
      { type: "p", text: "Armeringsjärn 20 mm (Ø20) används i bärande konstruktioner med stora krafter: balkar, pelare, fundament och väggar i flerbostadshus, lokaler och anläggningar. Ø20 är också den första dimensionen där Eurokod 2 kräver större bockningsradie, vilket påverkar hur järnen formas. Därför levereras Ø20 nästan alltid som [klippt och bockad armering](/produkter/klippt-och-bockad) efter bockningslista." },

      { type: "h2", text: "Fakta om armeringsjärn Ø20" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Nominell diameter", "20 mm"],
        ["Tvärsnittsarea", "314 mm²"],
        ["Vikt per meter", "2,47 kg"],
        ["Stång 6 m", "ca 14,8 kg"],
        ["Stång 12 m", "ca 29,6 kg"],
        ["Löpmeter per ton", "ca 405 m"],
        ["Stänger 12 m per ton", "ca 34 st"],
        ["Minsta dorndiameter", "140 mm (7 × Ø)"],
        ["Stålkvalitet", "B500B enligt SS 212540"],
      ], caption: "Dorndiameter enligt SS-EN 1992-1-1 tabell 8.1N." },

      { type: "h2", text: "Var används Ø20?" },
      { type: "ul", items: [
        "Huvudarmering i balkar och överliggare med stora spännvidder.",
        "Längsarmering i pelare.",
        "Grundsulor, pålfundament och maskinfundament.",
        "Bottenplattor och källarväggar i större byggnader.",
        "Stödmurar och landfästen i anläggningsprojekt.",
      ] },

      { type: "h2", text: "Area för olika antal järn" },
      { type: "table", head: ["Antal Ø20", "Area", "Vikt per löpmeter"], rows: [
        ["2", "628 mm²", "4,94 kg"],
        ["3", "942 mm²", "7,41 kg"],
        ["4", "1 257 mm²", "9,88 kg"],
        ["6", "1 885 mm²", "14,8 kg"],
        ["8", "2 513 mm²", "19,8 kg"],
      ], caption: "Antal och placering står på ritningen." },

      { type: "h2", text: "Bockning: 7Ø i stället för 4Ø" },
      { type: "p", text: "För Ø16 och klenare räcker en dorn på 4 × Ø. Från Ø20 kräver Eurokod 2 minst 7 × Ø – för Ø20 en dorn på 140 mm och 70 mm innerradie. Bocken blir alltså mycket mjukare än för Ø16 (32 mm radie). Det påverkar formen:" },
      { type: "ul", items: [
        "Byglar och krokar tar mer plats – hörnen blir rundade.",
        "Ett järn med två bockar nära varandra kanske inte går att forma som ritat.",
        "Klipplängden måste räknas med den större radien, annars blir yttermåtten fel.",
        "Konstruktören kan kräva ännu större radie för att betongen innanför bocken inte ska krossas (8.3).",
      ] },
      { type: "p", text: "Ø20 bockas i maskin. Att bocka för hand med rätt radie är i praktiken inte möjligt. Se [bocka armeringsjärn](/blogg/bocka-armeringsjarn) för hela tabellen." },

      { type: "h2", text: "Förankring, skarv och avstånd" },
      { type: "p", text: "Grundförankringslängden för fullt utnyttjat Ø20 i C25/30 är cirka 800 mm vid god vidhäftning och upp mot 1 150 mm vid dålig. Skarvlängder på 800–1 200 mm är vanliga. Konstruktören avgör – riktvärden finns i [skarvlängd armering](/blogg/skarvlangd-armering)." },
      { type: "p", text: "Fritt avstånd mellan parallella järn ska vara minst det största av 20 mm, stenstorlek + 5 mm och järnets diameter (Eurokod 2, 8.2). För Ø20 i betong med 16 mm sten blir det 21 mm, med 32 mm sten 37 mm. Tätt placerade grova järn kan alltså kräva mindre sten i betongen." },

      { type: "h2", text: "Hantering på bygget" },
      { type: "p", text: "En 12-metersstång Ø20 väger nästan 30 kg och är svår att bära ensam. Kapade och bockade järn i rätt längd minskar lyft och spill. Märkta buntar per position gör att rätt järn hamnar på rätt plats direkt från lastbilen." },

      { type: "h2", text: "Ø20 i pelare och fundament" },
      { type: "p", text: "I pelare med Ø20 som huvudjärn ska byglarna vara minst 6 mm och minst en fjärdedel av huvudjärnets diameter – Ø6 räcker alltså formellt, men Ø8 är vanligt i praktiken – ritningen avgör. Startjärn från fundamentet bockas ofta som L-järn med fot, och den stora dornen gör att foten tar mer plats än man tror. Rita in radien när du kontrollerar måtten." },

      { type: "h2", text: "Ø20 bockat med 7Ø-dorn" },
      { type: "p", text: "Vi bockar Ø20 i maskin med rätt dorn och räknar klipplängden efter den större radien, så att yttermåtten stämmer. Buntarna märks per position. Skicka bockningslistan via [klippt och bockad armering](/produkter/klippt-och-bockad) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsjärn 20 mm?", a: "2,47 kg per meter. En 12-metersstång väger cirka 29,6 kg och en 6-metersstång cirka 14,8 kg." },
      { q: "Vilken bockningsradie gäller för Ø20?", a: "Minsta dorndiameter är 7 × Ø = 140 mm, alltså 70 mm inre radie. Ritningen kan kräva mer." },
      { q: "Hur lång skarv behöver Ø20?", a: "Ofta 800–1 200 mm (40–60 × Ø) som riktvärde. Konstruktören anger den exakta längden." },
      { q: "Kan man bocka Ø20 för hand?", a: "I praktiken nej. Radien 70 mm och kraften som krävs gör att Ø20 bockas i maskin." },
    ],
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ bockat Ø20" },
    category: "dimensioner",
  },

  {
    slug: "armeringsjarn-25-mm",
    title: "Armeringsjärn 25 mm – vikt, area och användning i fundament",
    metaTitle: "Armeringsjärn 25 mm (Ø25) – vikt & area",
    metaDescription:
      "Armeringsjärn 25 mm: 3,85 kg/m, 491 mm², 46 kg per 12 m stång. Användning i fundament och balkar, förankring, bockning med 175 mm dorn och bygelkrav.",
    excerpt:
      "Ø25 är en dimension för tunga konstruktioner: fundament, pålplintar och kraftiga balkar. Här är data, area, förankring och vad grova järn kräver av byglarna.",
    date,
    readingMinutes: 6,
    keywords: [
      "armeringsjärn 25 mm",
      "kamstål 25 mm",
      "25 mm armering",
      "armeringsjärn ø25",
      "armeringsjärn 25 mm vikt",
      "kamjärn 25 mm",
    ],
    content: [
      { type: "p", text: "Armeringsjärn 25 mm (Ø25) används i konstruktioner med mycket stora krafter: fundament, pålplintar, kraftiga balkar, pelare och anläggningar. En 12-metersstång väger över 46 kg, så varje järn kräver planering för lyft och placering. Vi levererar [armeringsjärn Ø25](/produkter/armeringsjarn) som raka stänger och kapat eller bockat efter lista." },

      { type: "h2", text: "Fakta om armeringsjärn Ø25" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Nominell diameter", "25 mm"],
        ["Tvärsnittsarea", "491 mm²"],
        ["Vikt per meter", "3,85 kg"],
        ["Stång 6 m", "ca 23,1 kg"],
        ["Stång 12 m", "ca 46,2 kg"],
        ["Löpmeter per ton", "ca 260 m"],
        ["Stänger 12 m per ton", "ca 22 st"],
        ["Minsta dorndiameter", "175 mm (7 × Ø)"],
        ["Stålkvalitet", "B500B enligt SS 212540"],
      ], caption: "Dorndiameter enligt SS-EN 1992-1-1 tabell 8.1N." },

      { type: "h2", text: "Var används Ø25?" },
      { type: "ul", items: [
        "Pålplintar och pålfundament där pållasterna förs in i plinten.",
        "Grundsulor under pelare i större byggnader.",
        "Balkar med stora spännvidder och tunga laster.",
        "Pelare i höga byggnader.",
        "Maskin- och vindkraftsfundament, broar och andra anläggningar.",
      ] },

      { type: "h2", text: "Area – ett Ø25 eller flera klenare?" },
      { type: "table", head: ["Alternativ", "Area", "Vikt per löpmeter"], rows: [
        ["1 Ø25", "491 mm²", "3,85 kg"],
        ["2 Ø16 + 1 Ø12", "515 mm²", "4,05 kg"],
        ["4 Ø12", "452 mm²", "3,55 kg"],
        ["4 Ø25", "1 963 mm²", "15,4 kg"],
        ["6 Ø25", "2 945 mm²", "23,1 kg"],
      ], caption: "Grova järn ger mycket area på liten plats men kräver längre förankring." },

      { type: "h2", text: "Förankring – långa längder" },
      { type: "table", head: ["Förutsättning", "Grundförankring", "Ø25"], rows: [
        ["C30/37, god vidhäftning", "ca 36 × Ø", "ca 900 mm"],
        ["C25/30, god vidhäftning", "ca 40 × Ø", "ca 1 000 mm"],
        ["C25/30, dålig vidhäftning", "ca 58 × Ø", "ca 1 440 mm"],
      ], caption: "Fullt utnyttjat järn enligt Eurokod 2, 8.4. Konstruktören avgör." },
      { type: "p", text: "Skarvar i Ø25 blir ofta 1,0–1,5 m. Det äter stål och plats, så i fundament försöker man ofta lägga järnen i hela längder och förankra med bockade ändar. Se [skarvlängd armering](/blogg/skarvlangd-armering) för beräkningen." },
      { type: "p", text: "I pålplintar läggs Ø25 ofta i två riktningar över pålhuvudena, med bockade ändar som förankras upp i plinten. Bockradien 87,5 mm måste rymmas inom plintens mått och täckskikt." },

      { type: "h2", text: "Bockning och byglar" },
      { type: "ul", items: [
        "Dorn minst 175 mm (7 × Ø) – innerradien blir 87,5 mm.",
        "Bockad ände i plint: rak del efter bocken minst 5 × Ø = 125 mm (figur 8.1). Ritningen anger oftast mer.",
        "Byglar i pelare med Ø25 som huvudjärn måste vara minst Ø8 – en fjärdedel av 25 mm är mer än 6 mm (Eurokod 2, 9.5.3).",
      ] },

      { type: "figure", illustration: "rebar-diameters", caption: "Ø25 är fyra gånger så grov i area som Ø12." },

      { type: "h2", text: "Hantering och leverans" },
      { type: "p", text: "Ett ton Ø25 är bara cirka 22 stänger à 12 m, men varje stång väger 46 kg. Kapade och bockade järn i rätt längd minskar lyft på arbetsplatsen. Vi märker varje bunt per position så att rätt järn lyfts till rätt plint." },

      { type: "h2", text: "Täckskikt och avstånd för grova järn" },
      { type: "p", text: "För Ø25 ska täckskiktet vara minst 25 mm bara för vidhäftningen, och det fria avståndet mellan järnen minst 25 mm, eller stenstorlek plus 5 mm om det är större. I tätt armerade fundament kan det styra vilken betong som går att använda. Lägg in det i planeringen innan armeringen beställs." },

      { type: "h2", text: "Ø25 till plintar och fundament" },
      { type: "p", text: "Skicka ritning eller bockningslista så tar vi fram Ø25 raka, kapade eller bockade, gärna tillsammans med byglar eller som färdiga [plintkorgar](/produkter/plintkorgar). Buntarna märks per plint. Begär pris via [armeringsjärn](/produkter/armeringsjarn) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsjärn 25 mm?", a: "3,85 kg per meter. En 12-metersstång väger cirka 46 kg." },
      { q: "Hur lång förankring behöver Ø25?", a: "Grundvärdet för fullt utnyttjat järn är cirka 0,9–1,4 m beroende på betongklass och vidhäftning. Konstruktören anger den slutliga längden." },
      { q: "Vilken bockningsradie har Ø25?", a: "Minsta dorndiameter är 175 mm (7 × Ø), alltså 87,5 mm inre radie." },
      { q: "Vilken bygeldimension krävs med Ø25 huvudjärn?", a: "Minst Ø8 i pelare, eftersom bygeln enligt Eurokod 2 ska vara minst en fjärdedel av huvudjärnets diameter och minst 6 mm." },
    ],
    target: { href: "/produkter/armeringsjarn", label: "Beställ armeringsjärn Ø25" },
    category: "dimensioner",
  },

  {
    slug: "armeringsjarn-32-mm",
    title: "Armeringsjärn 32 mm – vikt, area och regler för grova järn",
    metaTitle: "Armeringsjärn 32 mm (Ø32) – vikt & regler",
    metaDescription:
      "Armeringsjärn 32 mm: 6,31 kg/m, 804 mm², nästan 76 kg per 12 m stång. Bockning med 224 mm dorn, förankring, täckskikt och var Ø32 används.",
    excerpt:
      "Ø32 är den grövsta standarddimensionen av kamstål. Här är vikter och area, vad som gäller för bockning, förankring och täckskikt – och var dimensionen används.",
    date,
    readingMinutes: 6,
    keywords: [
      "armeringsjärn 32 mm",
      "kamstål 32 mm",
      "32 mm armering",
      "armeringsjärn ø32",
      "armeringsjärn 32 mm vikt",
      "grov armering",
    ],
    content: [
      { type: "p", text: "Armeringsjärn 32 mm (Ø32) är den grövsta dimensionen i det vanliga sortimentet av kamstål B500B. Ett enda järn har samma area som sju Ø12. Ø32 används där krafterna är mycket stora och utrymmet begränsat: i tunga fundament, pelare, broar och anläggningar. Dimensionen levereras nästan alltid som [klippt och bockad armering](/produkter/klippt-och-bockad), eftersom varje 12-metersstång väger nästan 76 kg." },

      { type: "h2", text: "Fakta om armeringsjärn Ø32" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Nominell diameter", "32 mm"],
        ["Tvärsnittsarea", "804 mm²"],
        ["Vikt per meter", "6,31 kg"],
        ["Stång 6 m", "ca 37,9 kg"],
        ["Stång 12 m", "ca 75,7 kg"],
        ["Löpmeter per ton", "ca 160 m"],
        ["Stänger 12 m per ton", "ca 13 st"],
        ["Minsta dorndiameter", "224 mm (7 × Ø)"],
        ["Stålkvalitet", "B500B enligt SS 212540"],
      ], caption: "Dorndiameter enligt SS-EN 1992-1-1 tabell 8.1N." },

      { type: "h2", text: "Var används Ø32?" },
      { type: "ul", items: [
        "Vindkrafts- och maskinfundament.",
        "Broar, landfästen och andra anläggningskonstruktioner.",
        "Pelare i höga byggnader där utrymmet för järn är begränsat.",
        "Tunga pålplintar och transferbalkar.",
      ] },

      { type: "h2", text: "Gränsen för vanliga regler" },
      { type: "p", text: "Eurokod 2 har särskilda regler för grova stänger (avsnitt 8.8) – med rekommenderat gränsvärde för stänger grövre än 32 mm. Ø32 är alltså den grövsta dimensionen som följer de vanliga reglerna för förankring och skarvning. Vidhäftningen räknas också utan reduktion upp till och med Ø32." },

      { type: "h2", text: "Täckskikt och avstånd" },
      { type: "table", head: ["Krav", "Regel", "Ø32"], rows: [
        ["Minsta täckskikt för vidhäftning", "cmin,b = Ø", "32 mm"],
        ["Minsta fria avstånd mellan järn", "max(Ø, stenstorlek + 5, 20 mm)", "minst 32 mm"],
        ["Bygel i pelare", "max(6 mm, Ø/4)", "minst Ø8"],
      ], caption: "Eurokod 2, avsnitt 4.4.1.2, 8.2 och 9.5.3. Exponeringsklassen ger ofta större täckskikt." },

      { type: "h2", text: "Bockning – stora radier" },
      { type: "p", text: "Minsta dorn för Ø32 är 224 mm, vilket ger 112 mm innerradie. Bockade Ø32 tar alltså stor plats, och konstruktören kan kräva ännu större radie så att betongen innanför bocken inte krossas. Ø32 formas i kraftiga bockmaskiner – se tabellen i [bocka armeringsjärn](/blogg/bocka-armeringsjarn)." },

      { type: "h2", text: "Förankring och skarv" },
      { type: "p", text: "Grundförankringslängden för fullt utnyttjat Ø32 i C25/30 är cirka 1,3 m vid god vidhäftning och upp mot 1,8 m vid dålig. Omlottskarvar blir därmed mycket långa. Där det är trångt kan konstruktören i stället föreskriva mekaniska skarvar, till exempel skarvhylsor. Läs mer i [skarvlängd armering](/blogg/skarvlangd-armering)." },

      { type: "h2", text: "Area för olika antal järn" },
      { type: "table", head: ["Antal Ø32", "Area", "Vikt per löpmeter"], rows: [
        ["2", "1 608 mm²", "12,6 kg"],
        ["4", "3 217 mm²", "25,2 kg"],
        ["6", "4 825 mm²", "37,9 kg"],
        ["8", "6 434 mm²", "50,5 kg"],
      ] },

      { type: "h2", text: "Lyft och leverans" },
      { type: "p", text: "Ett ton Ø32 är bara cirka 13 stänger à 12 m, men varje stång kräver lyfthjälp. Därför lönar det sig att få järnen kapade och bockade i exakta längder, märkta per position och buntade så att de kan lyftas direkt till rätt plats." },
      { type: "p", text: "Ange i bockningslistan hur buntarna ska märkas och i vilken ordning de behövs. Då kan lossningen planeras så att järnen lyfts direkt till rätt del av fundamentet." },

      { type: "h2", text: "Planera Ø32 tidigt" },
      { type: "p", text: "Ø32 kräver planering långt innan leverans: lyftutrustning, upplag för buntarna och plats för långa förankringar och stora bockradier. Kontrollera att ritningens mått går att bocka med 112 mm innerradie och att skarvarna inte hamnar där armeringen redan är tät. Ju tidigare bockningslistan är klar, desto enklare blir resten." },

      { type: "h2", text: "Skicka listan för Ø32 i god tid" },
      { type: "p", text: "Vi tillverkar Ø32 efter ritning eller bockningslista och buntar järnen i den ordning de ska monteras. Frakt efter mängd och ort, i hela Sverige. Skicka underlaget via [klippt och bockad armering](/produkter/klippt-och-bockad) eller [offert](/offert) – leveranstid anges i offerten." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsjärn 32 mm?", a: "6,31 kg per meter. En 12-metersstång väger cirka 75,7 kg." },
      { q: "Vilken bockningsradie har Ø32?", a: "Minsta dorndiameter är 224 mm (7 × Ø), alltså 112 mm inre radie. Ritningen kan kräva mer." },
      { q: "Vilket täckskikt behöver Ø32?", a: "Minst 32 mm för vidhäftningen. Exponeringsklassen avgör ofta ett större täckskikt – det står på ritningen." },
      { q: "Finns grövre armering än 32 mm?", a: "Grövre dimensioner förekommer i specialfall. För stänger grövre än 32 mm gäller särskilda regler i Eurokod 2 (8.8), och konstruktören anger då hur de ska förankras och skarvas." },
    ],
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ bockat Ø32" },
    category: "dimensioner",
  },
];

/* ───────────── Armeringsnät per beteckning (34–38) ───────────── */

const nat: Post[] = [
  {
    slug: "armeringsnat-5150",
    title: "Armeringsnät 5150 – vikt, mått och användning",
    metaTitle: "Armeringsnät 5150 – vikt, mått & användning",
    metaDescription:
      "Armeringsnät 5150: Ø5 mm tråd, 150 mm rutor, ca 2,05 kg/m² och 131 mm²/m. Var nätet räcker, hur mycket det ska överlappa och hur du räknar åtgång.",
    excerpt:
      "5150 är det lättaste vanliga armeringsnätet. Här är vikt, area, överlapp och var nätet räcker – och var du behöver gå upp till 6150.",
    date,
    readingMinutes: 5,
    keywords: [
      "armeringsnät 5150",
      "5150 nät",
      "armeringsnät 5150 vikt",
      "armeringsnät 5x150",
      "nät 5150 uterum",
      "5150 armering",
    ],
    content: [
      { type: "p", text: "Armeringsnät 5150 har Ø5 mm tråd med 150 mm mellan trådarna i båda riktningarna. Det är det lättaste nätet i det vanliga sortimentet och används där lasterna är små: uterum, altaner, gångar och mindre plattor. Vi levererar [armeringsnät 5150](/produkter/armeringsnat) i lagerformat och som specialnät efter mått." },
      { type: "p", text: "Hur beteckningarna fungerar och vilka format som finns går vi igenom i [armeringsnät – storlekar och mått](/blogg/armeringsnat-storlekar-och-matt). Här är siffrorna för just 5150." },

      { type: "h2", text: "Fakta om armeringsnät 5150" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Tråd", "Ø5 mm"],
        ["Ruta (c/c)", "150 × 150 mm"],
        ["Area per tråd", "19,6 mm²"],
        ["Area per meter och riktning", "ca 131 mm²/m"],
        ["Vikt", "ca 2,05 kg/m²"],
        ["Ark 2 × 5 m", "ca 21 kg"],
        ["Minsta skarv enligt EC2 tabell 8.4", "150 mm och minst 1 maska"],
      ], caption: "Teoretiska värden utan utstickande trådändar. Verklig vikt per ark anges av tillverkaren." },

      { type: "h2", text: "Var används 5150?" },
      { type: "ul", items: [
        "Uterum, altaner och mindre plattor med låg last.",
        "Gångar, trappavsatser och plattor runt huset.",
        "Golv i förråd, friggebodar och enklare uthus.",
        "Sprickarmering i pågjutningar och avjämningar som ritningen tillåter.",
      ] },
      { type: "p", text: "Ska plattan bära bil, bärande väggar eller tung inredning är 5150 oftast för klent. Konstruktören avgör – men räkna med att garage och villaplattor ritas med [6150](/blogg/armeringsnat-6150) eller grövre." },

      { type: "h2", text: "5150 jämfört med 6150" },
      { type: "table", head: ["Nät", "Area per meter", "Vikt per m²"], rows: [
        ["5150", "131 mm²/m", "2,05 kg"],
        ["6150", "189 mm²/m", "2,96 kg"],
      ] },
      { type: "p", text: "6150 har drygt 40 % mer stål än 5150. Att byta upp kostar alltså mer stål, men kan ge plattan större bärförmåga och bättre sprickfördelning." },

      { type: "h2", text: "Överlapp och placering" },
      { type: "p", text: "Eurokod 2 (tabell 8.4) anger för nättråd upp till Ø6 minst 150 mm skarv och minst en maska. I praktiken läggs ofta två rutor omlott, cirka 300 mm, och skarven binds med najtråd. Klipp bort hörnet där fyra ark möts så att det inte blir fyra lager. Ritningen gäller." },
      { type: "p", text: "Nätet ska ligga på distanser inne i betongen, inte på underlaget. Ett 5-mm-nät är mjukt och trampas lätt ned – sätt distanserna tätare än för grövre nät." },
      { type: "p", text: "Ett ark 5150 på 2 × 5 m väger runt 21 kg och kan bäras av en person. Det gör nätet praktiskt på små byggen utan maskiner, men det böjs också lätt. Förvara arken plant och lyft dem i två punkter." },

      { type: "figure", illustration: "mesh-overlap", caption: "Ark av armeringsnät läggs omlott och binds ihop." },

      { type: "h2", text: "Räkneexempel: uterum 4 × 5 m" },
      { type: "ol", items: [
        "Plattans yta: 20 m².",
        "Lägg till 10–15 % för överlapp: cirka 23 m².",
        "Räknat med ark på 2 × 5 m: tre ark.",
        "Vikt: tre ark à ca 21 kg ≈ 62 kg levererat, varav cirka 47 kg ligger i plattan.",
      ] },
      { type: "p", text: "Kantförstärkning med kamjärn och distanser tillkommer. Räkna din egen yta i [armeringskalkylatorn](/armeringskalkylator)." },

      { type: "h2", text: "Vanliga misstag med 5150" },
      { type: "p", text: "Det vanligaste felet är att nätet läggs direkt på cellplasten eller marken och sedan dras upp under gjutningen – det hamnar sällan rätt. Lägg det på distanser från början. Ett annat är att 5150 används i garage eller under bärande väggar för att det är billigare. Där krävs grövre nät eller kompletterande kamjärn. Kontrollera också att skarvarna binds så att arken inte glider isär när betongen läggs ut." },

      { type: "h2", text: "5150 till uterum eller altan" },
      { type: "p", text: "Ange plattans mått så räknar vi antal ark, distanser och kantjärn. Även små beställningar går bra – frakten beräknas efter mängd och ort, utan fast avgift. Begär pris via [armeringsnät](/produkter/armeringsnat) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsnät 5150?", a: "Cirka 2,05 kg per m². Ett ark på 2 × 5 m väger runt 21 kg." },
      { q: "Räcker 5150 till en garageplatta?", a: "Oftast inte. Garageplattor ritas normalt med 6150 eller grövre. Konstruktionsritningen avgör." },
      { q: "Hur mycket ska 5150 överlappa?", a: "Eurokod 2 anger minst 150 mm och en maska för Ø5-tråd. I praktiken läggs ofta två rutor, cirka 300 mm, omlott. Ritningen gäller." },
      { q: "Hur många ark 5150 går det åt?", a: "Plattans yta plus 10–15 % för överlapp, delat med arkets yta. Ett uterum på 20 m² kräver cirka 23 m² nät, alltså tre ark på 2 × 5 m." },
      { q: "Kan man beställa bara några ark?", a: "Ja. Frakten räknas efter mängd och ort, utan fast fraktavgift, så även små beställningar går att offerera." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät 5150" },
    category: "dimensioner",
  },

  {
    slug: "armeringsnat-6150",
    title: "Armeringsnät 6150 – vikt, mått och åtgång till garage och villaplatta",
    metaTitle: "Armeringsnät 6150 – vikt, mått & åtgång",
    metaDescription:
      "Armeringsnät 6150: Ø6 mm tråd, 150 mm rutor, ca 2,96 kg/m² och 189 mm²/m. Användning i garage- och villaplatta, överlapp och räkneexempel på åtgång.",
    excerpt:
      "6150 är det nät som oftast ritas in i garage- och villaplattor. Här är vikt, area, överlapp och ett räkneexempel för en garageplatta.",
    date,
    readingMinutes: 5,
    keywords: [
      "armeringsnät 6150",
      "6150 nät",
      "armeringsnät 6150 vikt",
      "armeringsnät 6x150",
      "6150 garageplatta",
      "6150 armering",
    ],
    content: [
      { type: "p", text: "Armeringsnät 6150 har Ø6 mm tråd med 150 mm rutor och är det nät som oftast förekommer på ritningar för garage, carportar och villaplattor på mark. Det ger ett bra mellanläge mellan vikt och bärförmåga. Vi levererar [armeringsnät 6150](/produkter/armeringsnat) i lagerformat, som fingerskarvnät och som specialnät efter mått." },

      { type: "h2", text: "Fakta om armeringsnät 6150" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Tråd", "Ø6 mm"],
        ["Ruta (c/c)", "150 × 150 mm"],
        ["Area per tråd", "28,3 mm²"],
        ["Area per meter och riktning", "ca 189 mm²/m"],
        ["Vikt", "ca 2,96 kg/m²"],
        ["Ark 2 × 5 m", "ca 30 kg"],
        ["Minsta skarv enligt EC2 tabell 8.4", "150 mm och minst 1 maska"],
      ], caption: "Teoretiska värden: 0,222 kg/m × 6,67 trådar per meter × 2 riktningar. Verklig vikt per ark anges av tillverkaren." },

      { type: "h2", text: "Var används 6150?" },
      { type: "ul", items: [
        "Garageplattor och carportar.",
        "Platta på mark för villa, attefallshus och fritidshus.",
        "Uterum och plattor med något högre last än 5150 klarar.",
        "Väggar och murar där ritningen anger nät i stället för lösa järn.",
        "Komplement i plattor där kantbalk och lastzoner armeras med kamjärn.",
      ] },
      { type: "p", text: "Under bärande väggar och i kantbalken kompletteras nätet nästan alltid med kamjärn och byglar. Helheten beskrivs i [armering till betongplatta](/blogg/armering-till-betongplatta)." },

      { type: "h2", text: "6150 jämfört med grannstorlekarna" },
      { type: "table", head: ["Nät", "Area per meter", "Vikt per m²", "Skillnad mot 6150"], rows: [
        ["5150", "131 mm²/m", "2,05 kg", "−31 %"],
        ["6150", "189 mm²/m", "2,96 kg", "–"],
        ["7150", "257 mm²/m", "4,03 kg", "+36 %"],
        ["8150", "335 mm²/m", "5,27 kg", "+78 %"],
      ] },

      { type: "h2", text: "Överlapp" },
      { type: "p", text: "För tråd upp till Ø6 anger Eurokod 2 (tabell 8.4) minst 150 mm skarv i fördelningsriktningen och minst en maska. Branschpraxis är två rutor, cirka 300 mm, och att skarvarna binds. Där nätet är huvudarmering kan konstruktören kräva längre skarv – se [skarvlängd armering](/blogg/skarvlangd-armering)." },

      { type: "figure", illustration: "mesh-overlap", caption: "Två ark 6150 läggs omlott minst en maska – i praktiken ofta två." },

      { type: "h2", text: "Räkneexempel: garage 6 × 8 m" },
      { type: "ol", items: [
        "Plattans yta: 48 m².",
        "Plus cirka 15 % för överlapp: 55 m².",
        "Räknat med ark på 2 × 5 m: sex ark.",
        "Vikt: sex ark à ca 30 kg ≈ 178 kg levererat (cirka 163 kg i plattan inkl. överlapp).",
      ] },
      { type: "p", text: "Till det kommer kantjärn, byglar och distanser. En garageplatta med 6150 och kantbalk ryms ofta på en och samma leverans." },

      { type: "h2", text: "Fingerskarvnät och specialnät" },
      { type: "p", text: "Fingerskarvnät har trådar som sticker ut i kanterna så att två ark kan skarvas utan dubbla lager tråd. Det sparar stål och gör plattan jämnare i tjocklek. Specialnät tillverkas med andra yttermått när lagerformatet ger för mycket spill." },
      { type: "p", text: "Lagerformatet är ofta omkring 2 × 5 m, men utbudet varierar mellan leverantörer. Ange plattans mått när du begär offert, så räknar vi fram det format som ger minst spill." },

      { type: "h2", text: "Distanser och täckskikt" },
      { type: "p", text: "Nätet ska ligga på distanser med rätt höjd. I en platta på mark mot cellplast är 25–35 mm täckskikt vanligt, mot makadam minst 40 mm och direkt mot jord minst 75 mm (Eurokod 2). Med 6150 räcker oftast distanser med 0,8–1 m avstånd, men tätare där man går mycket under gjutningen. Kontrollera höjden innan betongen kommer – efteråt går det inte att rätta till." },

      { type: "h2", text: "Hela garageplattan i en leverans" },
      { type: "p", text: "Skicka ritning eller plattans mått så räknar vi ark 6150, kantjärn, kantbalksbyglar och distanser och levererar allt samtidigt. Leverans i hela Sverige. Begär pris via [armeringsnät](/produkter/armeringsnat) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsnät 6150?", a: "Cirka 2,96 kg per m². Ett ark på 2 × 5 m väger runt 30 kg." },
      { q: "Är 6150 rätt nät till garageplatta?", a: "Ofta ja, kompletterat med kantjärn och byglar i kantbalken. Laster och ritning avgör." },
      { q: "Hur mycket ska 6150 överlappa?", a: "Minst 150 mm och en maska enligt Eurokod 2 tabell 8.4. I praktiken läggs två rutor, cirka 300 mm, omlott." },
      { q: "Vad betyder 6150?", a: "Ø6 mm tråd med 150 mm mellan trådarna i båda riktningar." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät 6150" },
    category: "dimensioner",
  },

  {
    slug: "armeringsnat-7150",
    title: "Armeringsnät 7150 – vikt, area och när det är rätt val",
    metaTitle: "Armeringsnät 7150 – vikt, area & användning",
    metaDescription:
      "Armeringsnät 7150: Ø7 mm tråd, 150 mm rutor, ca 4,03 kg/m² och 257 mm²/m. När 7150 väljs före 6150 och 8150, överlapp på minst 250 mm och åtgång.",
    excerpt:
      "7150 fyller luckan mellan 6150 och 8150. Här är vikt och area, överlappskraven och när konstruktören väljer just 7150.",
    date,
    readingMinutes: 5,
    keywords: [
      "armeringsnät 7150",
      "7150 nät",
      "armeringsnät 7150 vikt",
      "armeringsnät 7x150",
      "7150 armering",
      "nät 7 mm",
    ],
    content: [
      { type: "p", text: "Armeringsnät 7150 har Ø7 mm tråd med 150 mm rutor. Det är mellanstorleken som konstruktören väljer när 6150 inte räcker men 8150 vore onödigt mycket stål. Vi levererar [armeringsnät 7150](/produkter/armeringsnat) som lagernät och som specialnät efter mått." },

      { type: "h2", text: "Fakta om armeringsnät 7150" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Tråd", "Ø7 mm"],
        ["Ruta (c/c)", "150 × 150 mm"],
        ["Area per tråd", "38,5 mm²"],
        ["Area per meter och riktning", "ca 257 mm²/m"],
        ["Vikt", "ca 4,03 kg/m²"],
        ["Ark 2 × 5 m", "ca 40 kg"],
        ["Minsta skarv enligt EC2 tabell 8.4", "250 mm och minst 2 maskor"],
      ], caption: "Teoretiska värden (Ø7 = 0,302 kg/m). Verklig vikt per ark anges av tillverkaren." },

      { type: "h2", text: "Var används 7150?" },
      { type: "ul", items: [
        "Garage och verkstäder med tyngre fordon.",
        "Plattor på mark med större punktlaster, till exempel lyftar eller hyllor.",
        "Lantbruksbyggnader och förråd med lättare maskiner.",
        "Väggar och bjälklag där ritningen anger nät.",
      ] },

      { type: "h2", text: "Mellanstorleken som sparar stål" },
      { type: "table", head: ["Nät", "Area per meter", "Vikt per m²"], rows: [
        ["6150", "189 mm²/m", "2,96 kg"],
        ["7150", "257 mm²/m", "4,03 kg"],
        ["8150", "335 mm²/m", "5,27 kg"],
      ] },
      { type: "p", text: "Behöver plattan omkring 250 mm²/m ger 7150 rätt mängd stål. Med 8150 skulle varje kvadratmeter bära 1,2 kg mer stål än nödvändigt – på en platta på 200 m² är det nästan 250 kg." },
      { type: "p", text: "I väggar kan 7150 ersätta lösa Ø7–Ø8-järn och spara tid vid montaget, eftersom korsningarna redan är svetsade. Det kräver dock att väggens mått passar nätets format – annars blir det mycket kapning." },

      { type: "h2", text: "Överlapp – längre än för 6150" },
      { type: "p", text: "Ø7 hamnar i Eurokodens mellanklass (över 6 och upp till 8,5 mm). Det betyder minst 250 mm skarv och minst två maskor (tabell 8.4). Två rutor omlott ger i praktiken drygt 300 mm. Är nätet huvudarmering kan ritningen kräva mer – se [skarvlängd armering](/blogg/skarvlangd-armering)." },

      { type: "figure", illustration: "mesh-overlap", caption: "För 7150 ska minst två maskor ligga omlott." },

      { type: "h2", text: "Räkneexempel: verkstad 10 × 15 m" },
      { type: "ol", items: [
        "Plattans yta: 150 m².",
        "Plus cirka 15 % för överlapp: 172 m².",
        "Räknat med ark på 2 × 5 m: 18 ark.",
        "Vikt: 172 m² × 4,03 kg ≈ 690 kg nät.",
      ] },
      { type: "p", text: "Ett ark på cirka 40 kg är tungt men går att bära för två personer. Lägg distanserna tätt nog att nätet inte sjunker när man går på det." },

      { type: "h2", text: "Lagernät eller specialnät?" },
      { type: "p", text: "7150 finns inte hos alla leverantörer i lager. När måtten inte passar standardformatet tillverkas nätet som specialnät med anpassade yttermått och trådlängder, vilket minskar kapning och spill. Mer om beteckningar och format finns i [armeringsnät – storlekar och mått](/blogg/armeringsnat-storlekar-och-matt)." },

      { type: "h2", text: "Vanliga misstag med 7150" },
      { type: "p", text: "Ett vanligt fel är att 7150 skarvas som 6150, med bara en maska omlott. För Ø7 krävs två maskor och minst 250 mm. Ett annat är att nätet byts mot 6150 för att det finns i lager – då minskar stålmängden med en fjärdedel. Kontrollera alltid beteckningen på leveransen mot ritningen innan nätet läggs ut." },

      { type: "h2", text: "7150 i lager- eller specialformat" },
      { type: "p", text: "Skicka ritning eller mått så föreslår vi det format som ger minst kapning och spill, och tar med kantjärn och distanser. Begär pris via [armeringsnät](/produkter/armeringsnat) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsnät 7150?", a: "Cirka 4,03 kg per m². Ett ark på 2 × 5 m väger runt 40 kg." },
      { q: "När väljer man 7150 i stället för 6150?", a: "När plattan behöver mer stål än 6150 ger, till exempel vid tyngre fordon eller punktlaster. Konstruktören avgör." },
      { q: "Hur mycket ska 7150 överlappa?", a: "Minst 250 mm och två maskor enligt Eurokod 2 tabell 8.4. Ritningen kan kräva mer." },
      { q: "Finns 7150 i lager?", a: "Hos många leverantörer ja, men inte hos alla. Passar inte lagerformatet tillverkas 7150 som specialnät efter mått." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät 7150" },
    category: "dimensioner",
  },

  {
    slug: "armeringsnat-8150",
    title: "Armeringsnät 8150 – vikt, area och användning i industriplattor",
    metaTitle: "Armeringsnät 8150 – vikt, area & användning",
    metaDescription:
      "Armeringsnät 8150: Ø8 mm tråd, 150 mm rutor, ca 5,27 kg/m² och 335 mm²/m. Användning i industri- och lagerplattor, dubbla lager, överlapp och åtgång.",
    excerpt:
      "8150 är det kraftigaste vanliga lagernätet. Här är vikt och area, när det används, hur det skarvas och vad ett och två lager innebär.",
    date,
    readingMinutes: 5,
    keywords: [
      "armeringsnät 8150",
      "8150 nät",
      "armeringsnät 8150 vikt",
      "armeringsnät 8x150",
      "8150 armering",
      "armeringsnät industrigolv",
    ],
    content: [
      { type: "p", text: "Armeringsnät 8150 har Ø8 mm tråd med 150 mm rutor och är det kraftigaste av de vanliga lagernäten. Det används i plattor med tung trafik och höga laster, ofta i två lager. Vi levererar [armeringsnät 8150](/produkter/armeringsnat) som lagernät och specialnät, tillsammans med distanser och nätstöd." },

      { type: "h2", text: "Fakta om armeringsnät 8150" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Tråd", "Ø8 mm"],
        ["Ruta (c/c)", "150 × 150 mm"],
        ["Area per tråd", "50,3 mm²"],
        ["Area per meter och riktning", "ca 335 mm²/m"],
        ["Vikt", "ca 5,27 kg/m²"],
        ["Ark 2 × 5 m", "ca 53 kg"],
        ["Minsta skarv enligt EC2 tabell 8.4", "250 mm och minst 2 maskor"],
      ], caption: "Teoretiska värden (Ø8 = 0,395 kg/m). Verklig vikt per ark anges av tillverkaren." },

      { type: "h2", text: "Var används 8150?" },
      { type: "ul", items: [
        "Industri- och lagergolv med truckar och pallställ.",
        "Plattor i lantbruk, maskinhallar och verkstäder.",
        "Källarväggar och väggar med nät i båda sidor.",
        "Bottenplattor i större byggnader – ofta i över- och underkant.",
        "Ramper, utfarter och ytor med tung trafik.",
      ] },

      { type: "h2", text: "Ett eller två lager?" },
      { type: "table", head: ["Utförande", "Area per meter och riktning", "Stål per m² platta"], rows: [
        ["1 × 8150", "335 mm²/m", "ca 5,3 kg"],
        ["2 × 8150 (över- och underkant)", "670 mm²/m", "ca 10,5 kg"],
        ["1 × 10150", "524 mm²/m", "ca 8,2 kg"],
      ] },
      { type: "p", text: "Två lager placeras i över- och underkant och hålls isär av nätstöd. Det ger armering mot både böjning uppåt och nedåt och begränsar sprickor i ytan. Om ritningen kräver mer än 8150 klarar kan ett grövre nät som [10150](/blogg/armeringsnat-10150) vara alternativet." },
      { type: "p", text: "Nätstödens höjd styr var överlagret hamnar. Räkna plattans tjocklek minus täckskikt uppe och nere minus nätens tjocklek – det ger stödets höjd. Fel höjd ger fel hävarm och sämre bärförmåga." },

      { type: "h2", text: "Överlapp" },
      { type: "p", text: "Ø8 ligger i Eurokodens mellanklass: minst 250 mm skarv och minst två maskor (tabell 8.4). Två rutor ger i praktiken drygt 300 mm. I industriplattor där nätet är huvudarmering anger konstruktören skarvlängden enligt avsnitt 8.7.5." },

      { type: "figure", illustration: "mesh-overlap", caption: "8150 skarvas med minst två maskor omlott." },

      { type: "h2", text: "Räkneexempel: lagerplatta 20 × 30 m" },
      { type: "ol", items: [
        "Plattans yta: 600 m².",
        "Plus cirka 15 % för överlapp: 690 m² per lager.",
        "Ett lager 8150: cirka 3,6 ton nät.",
        "Två lager: cirka 7,3 ton nät plus nätstöd.",
      ] },
      { type: "p", text: "Vid de mängderna lönar det sig att räkna exakt: specialnät med anpassade längder minskar både skarvar och spill." },

      { type: "h2", text: "Hantering" },
      { type: "p", text: "Ett ark 8150 på 2 × 5 m väger cirka 53 kg. Planera lossning och utlägg med maskin eller flera personer, och lägg nätstöd som tål att man går på armeringen under gjutningen." },

      { type: "h2", text: "Vanliga misstag med 8150" },
      { type: "p", text: "I två lager är det vanligaste felet att överlagret trycks ned så att avståndet till underlagret blir för litet. Nätstöden måste vara tillräckligt många och stabila för att bära både nätet och folk som går på det. Ett annat fel är att skarvarna i över- och underlagret hamnar rakt ovanför varandra – förskjut dem om ritningen inte säger annat." },

      { type: "h2", text: "8150 med nätstöd i samma leverans" },
      { type: "p", text: "Ange plattans mått, tjocklek och om nätet ligger i ett eller två lager. Då räknar vi ark, nätstöd i rätt höjd och distanser. Frakt efter mängd och ort, i hela Sverige. Begär pris via [armeringsnät](/produkter/armeringsnat) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsnät 8150?", a: "Cirka 5,27 kg per m². Ett ark på 2 × 5 m väger runt 53 kg." },
      { q: "När används 8150?", a: "I plattor med tung trafik och höga laster – industri, lager, lantbruk – och i väggar. Ofta i två lager. Ritningen avgör." },
      { q: "Hur mycket ska 8150 överlappa?", a: "Minst 250 mm och två maskor enligt Eurokod 2 tabell 8.4. I praktiken ofta drygt 300 mm." },
      { q: "Hur mycket stål blir två lager 8150?", a: "Cirka 10,5 kg per m² platta, före överlapp." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät 8150" },
    category: "dimensioner",
  },

  {
    slug: "armeringsnat-10150",
    title: "Armeringsnät 10150 – vikt, area och tunga konstruktioner",
    metaTitle: "Armeringsnät 10150 – vikt, area & användning",
    metaDescription:
      "Armeringsnät 10150: Ø10 mm tråd, 150 mm rutor, ca 8,23 kg/m² och 524 mm²/m. När det används, skarv på minst 350 mm, vikt per ark och specialtillverkning.",
    excerpt:
      "10150 är ett tungt nät för plattor och väggar med stora laster. Här är vikt, area, skarvkrav och varför det oftast tillverkas som specialnät.",
    date,
    readingMinutes: 5,
    keywords: [
      "armeringsnät 10150",
      "10150 nät",
      "armeringsnät 10 mm",
      "armeringsnät 10x150",
      "armeringsnät 10150 vikt",
      "tungt armeringsnät",
    ],
    content: [
      { type: "p", text: "Armeringsnät 10150 har Ø10 mm tråd med 150 mm rutor. Det ger mer än dubbelt så mycket stål som 6150 och ersätter lösa järn i plattor och väggar med stora laster. 10150 är sällan en standardvara i handeln utan tillverkas oftast som [specialnät](/produkter/svetsad-armering) efter mått. Vi levererar det via [armeringsnät](/produkter/armeringsnat)." },

      { type: "h2", text: "Fakta om armeringsnät 10150" },
      { type: "table", head: ["Egenskap", "Värde"], rows: [
        ["Tråd", "Ø10 mm"],
        ["Ruta (c/c)", "150 × 150 mm"],
        ["Area per tråd", "78,5 mm²"],
        ["Area per meter och riktning", "ca 524 mm²/m"],
        ["Vikt", "ca 8,23 kg/m²"],
        ["Ark 2 × 5 m", "ca 82 kg"],
        ["Minsta skarv enligt EC2 tabell 8.4", "350 mm och minst 2 maskor"],
      ], caption: "Teoretiska värden (Ø10 = 0,617 kg/m). Verklig vikt per ark anges av tillverkaren." },

      { type: "h2", text: "Var används 10150?" },
      { type: "ul", items: [
        "Industrigolv och bottenplattor med mycket höga laster.",
        "Fundament och grundplattor där nät ersätter lösa järn.",
        "Källarväggar, stödmurar och väggar mot jord.",
        "Gödselplattor och lantbruksytor med tunga maskiner.",
      ] },

      { type: "h2", text: "Nät eller lösa järn Ø10 s150?" },
      { type: "p", text: "10150 ger samma area som lösa Ø10-järn med 150 mm centrumavstånd i båda riktningar (se [armeringsjärn 10 mm](/blogg/armeringsjarn-10-mm)). Skillnaden ligger i montaget:" },
      { type: "ul", items: [
        "Nät: korsningarna är redan svetsade – ingen najning av varje kryss.",
        "Nät: jämn delning över hela ytan.",
        "Lösa järn: lättare att anpassa runt urtag, ingjutningar och oregelbundna former.",
        "Lösa järn: kan bäras en och en – ett 10150-ark kräver lyft.",
      ] },

      { type: "h2", text: "Skarv – minst 350 mm" },
      { type: "p", text: "För tråd grövre än 8,5 mm och upp till 12 mm kräver Eurokod 2 (tabell 8.4) minst 350 mm skarv och minst två maskor. Två rutor (300 mm) räcker alltså inte – räkna med minst tre rutor omlott, eller den skarvlängd som ritningen anger. Fingerskarvnät minskar dubbla lager i skarven." },

      { type: "figure", illustration: "mesh-overlap", caption: "10150 kräver minst 350 mm överlapp – i praktiken ofta tre rutor." },

      { type: "h2", text: "Räkneexempel: bottenplatta 15 × 20 m i två lager" },
      { type: "ol", items: [
        "Plattans yta: 300 m².",
        "Två lager: 600 m² nät.",
        "Plus cirka 15 % för skarvar: 690 m².",
        "Vikt: 690 m² × 8,23 kg ≈ 5,7 ton nät.",
      ] },

      { type: "h2", text: "Hantering och leverans" },
      { type: "p", text: "Ett ark på 10 m² väger över 80 kg och ska lyftas med maskin. Specialnät tillverkas därför ofta i format som passar lyft och plattans mått, så att antalet skarvar blir så litet som möjligt. Ange måtten när du begär offert. Om beteckningar och format i allmänhet läser du i [armeringsnät – storlekar och mått](/blogg/armeringsnat-storlekar-och-matt)." },
      { type: "p", text: "Specialnät 10150 kan också tillverkas med olika tråd i de två riktningarna, till exempel Ø10 i huvudriktningen och klenare tråd i fördelningsriktningen. Det sparar stål när ritningen bara kräver full armering åt ett håll." },

      { type: "h2", text: "Vanliga misstag med 10150" },
      { type: "p", text: "Det vanligaste felet är för kort skarv: två rutor räcker inte för Ø10. Ett annat är att arken lyfts fel så att de böjs och inte ligger plant – en böjd 10-mm-tråd är svår att räta. Planera lossning, lyftpunkter och upplag innan leverans, och lägg nätstöd som klarar vikten." },

      { type: "h2", text: "10150 som specialnät efter dina mått" },
      { type: "p", text: "Skicka ritning eller plattans mått så tar vi fram nät i format som passar lyft och plattan, plus nätstöd och kompletterande järn. Begär pris via [armeringsnät](/produkter/armeringsnat) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Hur mycket väger armeringsnät 10150?", a: "Cirka 8,23 kg per m². Ett ark på 2 × 5 m väger runt 82 kg." },
      { q: "Hur mycket ska 10150 överlappa?", a: "Minst 350 mm och två maskor enligt Eurokod 2 tabell 8.4 – i praktiken ofta tre rutor. Ritningen gäller." },
      { q: "Finns 10150 som lagernät?", a: "Sällan. Det tillverkas oftast som specialnät efter mått. Vi tar fram det efter din ritning." },
      { q: "Är 10150 samma sak som Ø10 s150?", a: "Arean är densamma, 524 mm² per meter och riktning. Nätet är svetsat i korsningarna, lösa järn binds på plats." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät 10150" },
    category: "dimensioner",
  },
];

/* ───────────── Byglar och hakar (39–44) ───────────── */

const byglar: Post[] = [
  {
    slug: "u-bygel-armering",
    title: "U-bygel armering – mått, klipplängd och användning",
    metaTitle: "U-bygel armering – mått & klipplängd",
    metaDescription:
      "U-bygel i armering: typform C med måtten a, b och c. Så räknar du mått och klipplängd, var U-byglar används i vägg och kantbalk och hur du beställer dem.",
    excerpt:
      "U-bygeln är ett U-format armeringsjärn som används i väggändar, kantbalkar och skarvar. Här är hur måtten anges, hur du räknar klipplängd och vikt – och hur du beställer rätt.",
    date,
    readingMinutes: 6,
    keywords: [
      "u-bygel mått",
      "u-järn armering",
      "u-bygel armeringsjärn",
      "typform c",
      "u-bygel klipplängd",
      "u-byglar kamstål",
    ],
    content: [
      { type: "p", text: "En U-bygel är ett armeringsjärn bockat till ett U med två ben och en rygg. I bockningslistan heter formen typform C och anges med tre mått: a, b och c. U-byglar går åt i stora mängder i väggar, kantbalkar och vid skarvar mellan gjutetapper. Vi tillverkar [U-byglar och andra byglar](/produkter/byglar-och-hakar) i serie efter dina mått." },
      { type: "p", text: "Översikten över alla bygeltyper finns i [armeringsbyglar](/blogg/armeringsbyglar). Här går vi på djupet med just U-bygeln." },

      { type: "h2", text: "Så anges måtten på en U-bygel" },
      { type: "table", head: ["Mått", "Vad det är", "Exempel"], rows: [
        ["a", "Första benet, yttermått", "300 mm"],
        ["b", "Ryggen, yttermått mellan benen", "130 mm"],
        ["c", "Andra benet, yttermått", "300 mm"],
        ["Ø", "Dimension", "Ø10 B500B"],
      ], caption: "Typform C i bockningslistan. Måtten avser ytterkonturen om inget annat anges." },

      { type: "figure", illustration: "bending-shapes", caption: "U-järn (typform C) jämfört med andra vanliga bockformer." },

      { type: "h2", text: "Räkna ut måtten" },
      { type: "p", text: "Ryggen b bestäms av konstruktionens tjocklek minus täckskiktet på båda sidor. Benen a och c bestäms av hur långt bygeln ska förankras eller skarvas mot annan armering – det står på ritningen." },
      { type: "ol", items: [
        "Vägg 200 mm tjock, täckskikt 35 mm på båda sidor.",
        "Ryggens yttermått: 200 − 2 × 35 = 130 mm.",
        "Benlängd enligt ritning, till exempel 300 mm.",
        "Summa yttermått: 300 + 130 + 300 = 730 mm.",
        "Klipplängd: minus cirka 2 × Ø per 90°-bock → 730 − 2 × 20 ≈ 690 mm för Ø10.",
        "Vikt per bygel: 0,69 m × 0,617 kg/m ≈ 0,43 kg.",
      ] },
      { type: "p", text: "Ligger U-bygeln utanpå väggens armering ska ryggen ge plats åt de längsgående järnen innanför. Kontrollera alltid om ritningen anger yttermått eller innermått." },

      { type: "h2", text: "Var används U-byglar?" },
      { type: "ul", items: [
        "Väggändar och väggöppningar – U-bygeln omsluter väggens ände och binder ihop båda armeringslagren.",
        "Kantbalkar – tillsammans med raka järn, eller som komplement till slutna byglar.",
        "Skarvar mellan gjutetapper – U-järn sticker upp ur första gjutningen.",
        "Trappor, sockelbalkar och murkrön.",
        "Balkar där bygeln stängs med ett separat lock (ett rakt eller U-format järn ovanpå).",
      ] },

      { type: "h2", text: "Minsta mått och bockning" },
      { type: "table", head: ["Dimension", "Minsta inre radie", "Min rygg (ca)*"], rows: [
        ["Ø8", "16 mm", "ca 50 mm"],
        ["Ø10", "20 mm", "ca 60 mm"],
        ["Ø12", "24 mm", "ca 75 mm"],
        ["Ø16", "32 mm", "ca 100 mm"],
      ], caption: "Radie enligt SS-EN 1992-1-1 tabell 8.1N. *Ungefärlig minsta rygg för att två bockar ska rymmas: dorn + 2 × Ø." },
      { type: "p", text: "Smala U-byglar i grova dimensioner blir snabbt omöjliga att bocka med rätt radie. Ritar konstruktören en mycket smal rygg kan formen behöva ändras – hellre det än en för snäv bock som spricker." },

      { type: "h2", text: "Inte samma sak som en U-bult" },
      { type: "p", text: "En gängad U-bult för rör och avgassystem kallas också ibland U-bygel. I armering är U-bygeln ett ogängat kamstål. Ange typform C, dimension och mått så blir beställningen entydig." },

      { type: "h2", text: "Kontroll innan gjutning" },
      { type: "p", text: "Kontrollera att U-byglarna ligger med rätt avstånd, att benen når den skarvlängd ritningen anger och att täckskiktet mot formen stämmer runt ryggen. U-byglar i väggändar ska omsluta de yttersta vertikaljärnen i båda sidor – sitter de för långt in tappar de sin funktion." },

      { type: "h2", text: "U-byglar i serie – lika i varje exemplar" },
      { type: "p", text: "En 20 meter lång vägg med U-byglar c/c 200 i ändar och öppningar kan kräva hundratals byglar. Vi bockar dem i maskin efter din lista och märker dem per position. Skicka listan via [byglar och hakar](/produkter/byglar-och-hakar) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Vad är en U-bygel i armering?", a: "Ett armeringsjärn bockat till U-form – typform C – med två ben (a, c) och en rygg (b). Den används i väggändar, kantbalkar och skarvar." },
      { q: "Hur räknar man klipplängd på en U-bygel?", a: "Summera yttermåtten a + b + c och dra av cirka 2 × Ø per 90°-bock. En U-bygel Ø10 med 300 + 130 + 300 mm får cirka 690 mm klipplängd." },
      { q: "Är U-bygel och C-bygel samma sak?", a: "Formen är densamma – typform C. Namnet C-bygel används ofta i bockningslistor och handeln, U-bygel på bygget." },
      { q: "Kan man beställa U-byglar efter mått?", a: "Ja. Vi tillverkar U-byglar i serie efter din bockningslista och levererar i hela Sverige." },
      { q: "Vad behöver jag skicka?", a: "Dimension, måtten a, b och c samt antal per position. Har du bara ritningen tar vi fram listan." },
    ],
    target: { href: "/produkter/byglar-och-hakar", label: "Beställ U-byglar" },
    category: "dimensioner",
  },

  {
    slug: "b-bygel-armering",
    title: "B-bygel – vinkeljärn och hörnjärn i armering",
    metaTitle: "B-bygel armering – vinkeljärn & hörnjärn",
    metaDescription:
      "B-bygel är typform B: ett vinkeljärn med 90° bock. Så används den som hörnjärn i kantbalk och som anslutningsjärn, så räknar du mått, klipplängd och antal.",
    excerpt:
      "B-bygeln är egentligen ett L-format vinkeljärn. Den gör att kantjärn och väggarmering kan fortsätta runt hörn och in i nästa gjutning. Här är mått, räkneexempel och regler.",
    date,
    readingMinutes: 6,
    keywords: [
      "b-bygel",
      "b-bygel armering",
      "vinkeljärn armering",
      "hörnjärn armering",
      "l-järn armering",
      "typform b",
    ],
    content: [
      { type: "p", text: "B-bygel är handelns namn på typform B: ett armeringsjärn med en 90°-bock och två ben, a och b. Strikt taget är det ingen bygel utan ett vinkeljärn eller L-järn. Det används där armeringen ska byta riktning – i hörn, mellan platta och vägg och mellan två gjutetapper. Vi tillverkar [B-byglar och vinkeljärn](/produkter/byglar-och-hakar) efter mått." },

      { type: "h2", text: "Formen och måtten" },
      { type: "table", head: ["Mått", "Betydelse"], rows: [
        ["a", "Första benet, yttermått"],
        ["b", "Andra benet, yttermått"],
        ["Vinkel", "90° (andra vinklar = typform D)"],
        ["Ø", "Oftast Ø10–Ø16 B500B"],
      ], caption: "Typform B. Vinkeljärn med annan vinkel än 90° anges som typform D." },

      { type: "figure", illustration: "bending-shapes", caption: "Vinkeljärn (typform B) bland de vanligaste bockformerna." },

      { type: "h2", text: "Hörnjärn i kantbalk" },
      { type: "p", text: "Kantjärnen i en kantbalk ligger raka längs sidorna. I hörnen tar de slut, och kraften måste föras runt hörnet. Det görs med B-byglar som läggs omlott med kantjärnen i båda riktningar. Varje ben behöver därför vara minst lika långt som skarvlängden." },
      { type: "ul", items: [
        "Ett hörnjärn per kantjärn och hörn – fyra kantjärn ger fyra hörnjärn i varje hörn.",
        "En rektangulär platta har fyra hörn: 16 hörnjärn med fyra kantjärn.",
        "Benlängden följer skarvlängden på ritningen, ofta 40–60 × Ø.",
      ] },
      { type: "p", text: "Montaget av kantbalken går vi igenom i [kantbalksbygel](/blogg/kantbalksbygel)." },
      { type: "p", text: "Hörnjärnen kan också ersättas med att kantjärnen själva bockas runt hörnet. Det kräver långa järn med en 90°-bock nära änden och blir svårt att hantera. Separata B-byglar är därför det vanligaste." },

      { type: "h2", text: "Räkneexempel: hörnjärn Ø12" },
      { type: "ol", items: [
        "Skarvlängd enligt ritning: 600 mm (50 × Ø).",
        "Mått: a = 600 mm, b = 600 mm.",
        "Klipplängd: 1 200 − 2 × 12 ≈ 1 176 mm.",
        "Vikt: 1,18 m × 0,888 kg/m ≈ 1,04 kg per hörnjärn.",
        "16 hörnjärn ≈ 17 kg.",
      ] },

      { type: "h2", text: "Anslutningsjärn mellan platta och vägg" },
      { type: "p", text: "När en vägg gjuts på en platta läggs B-byglar i plattan med ena benet uppstickande. Det liggande benet förankras i plattan och det stående skarvas mot väggens armering. På samma sätt kopplas trappor till bjälklag och murar till sulor." },
      { type: "ul", items: [
        "Liggande ben: förankringslängd i plattan enligt ritning.",
        "Stående ben: skarvlängd mot väggarmeringen plus täckskikt.",
        "Centrumavstånd: samma som väggens vertikala armering.",
      ] },

      { type: "h2", text: "Bockningsregler" },
      { type: "table", head: ["Dimension", "Minsta dorn", "Rak del efter bock (5 × Ø)*"], rows: [
        ["Ø10", "40 mm", "50 mm"],
        ["Ø12", "48 mm", "60 mm"],
        ["Ø16", "64 mm", "80 mm"],
        ["Ø20", "140 mm", "100 mm"],
      ], caption: "Dorn enligt SS-EN 1992-1-1 tabell 8.1N. *Minsta raka del efter en bock som räknas som förankring (figur 8.1). I praktiken styrs benlängden av skarv- eller förankringslängden på ritningen." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "p", text: "Det vanligaste felet är för korta ben på hörnjärnen, så att skarven mot kantjärnen blir för kort. Ett annat är att uppstickare placeras utan mall och hamnar fel i förhållande till väggens armering. Fixera dem mot formen innan gjutning och kontrollera läget med måttband. Glöm inte att täckskiktet ska gälla även för uppstickarens topp." },

      { type: "h2", text: "Bocka själv eller beställa?" },
      { type: "p", text: "Ett par hörnjärn går att bocka för hand – se [bocka armeringsjärn](/blogg/bocka-armeringsjarn). Anslutningsjärn längs en hel vägg blir däremot många och måste vara lika. Vi bockar dem i maskin och märker dem per position. Skicka listan via [byglar och hakar](/produkter/byglar-och-hakar) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Vad är en B-bygel?", a: "Ett vinkeljärn med 90° bock – typform B. Det används som hörnjärn i kantbalkar och som anslutningsjärn mellan platta och vägg." },
      { q: "Hur långa ska benen på ett hörnjärn vara?", a: "Minst skarvlängden mot kantjärnen, ofta 40–60 × Ø. Ritningen anger längden." },
      { q: "Hur många hörnjärn behövs?", a: "Ett per kantjärn och hörn. Med fyra kantjärn och fyra hörn blir det 16 hörnjärn." },
      { q: "Vad är skillnaden mellan B- och D-form?", a: "Typform B har 90° vinkel. Är vinkeln en annan anges den som typform D med vinkeln utskriven." },
    ],
    target: { href: "/produkter/byglar-och-hakar", label: "Beställ B-byglar" },
    category: "dimensioner",
  },

  {
    slug: "n-bygel-armering",
    title: "N-bygel – sluten bygel till balk och pelare",
    metaTitle: "N-bygel armering – sluten bygel, mått",
    metaDescription:
      "N-bygel är en sluten bygel (typform N) för balkar och pelare. Så räknar du ut a och b, tätare byglar vid skarvar och pelarändar, vikt och antal per meter.",
    excerpt:
      "N-bygeln omsluter huvudjärnen i balkar och pelare. Här är hur måtten räknas fram ur tvärsnittet, var byglarna ska sitta tätare och hur du räknar antal och vikt.",
    date,
    readingMinutes: 6,
    keywords: [
      "n-bygel",
      "n-bygel armering",
      "sluten bygel mått",
      "pelarbygel",
      "balkbygel",
      "typform n",
    ],
    content: [
      { type: "p", text: "N-bygeln är en sluten, rektangulär bygel – typform N i bockningslistan. Den omsluter huvudjärnen i balkar och pelare och förankras med krokar i ett av hörnen. Det är den bygel som håller ihop en armeringskorg. Vi tillverkar [N-byglar](/produkter/byglar-och-hakar) i serie efter mått, och hela korgar om du vill." },
      { type: "p", text: "Krokregler och bygeltyper i allmänhet finns i [armeringsbyglar](/blogg/armeringsbyglar). Här fokuserar vi på hur du tar fram måtten och antalet." },

      { type: "figure", illustration: "rebar-cage", caption: "N-byglar håller ihop längsgående järn till en korg." },

      { type: "h2", text: "Från tvärsnitt till bygelmått" },
      { type: "p", text: "Bygelns yttermått a och b är tvärsnittets mått minus täckskiktet på båda sidor. Täckskiktet räknas till bygeln, som ligger ytterst." },
      { type: "table", head: ["Tvärsnitt", "Täckskikt", "N-bygel a × b (yttermått)"], rows: [
        ["Pelare 250 × 250", "30 mm", "190 × 190 mm"],
        ["Pelare 300 × 300", "30 mm", "240 × 240 mm"],
        ["Pelare 400 × 400", "35 mm", "330 × 330 mm"],
        ["Balk 200 × 400", "30 mm", "140 × 340 mm"],
        ["Balk 300 × 500", "35 mm", "230 × 430 mm"],
      ], caption: "Täckskiktet bestäms av exponeringsklass och står på ritningen." },

      { type: "h2", text: "Krokarna" },
      { type: "ul", items: [
        "Krokarna bockas 135° in mot bygelns insida med rak ände minst 5 × Ø och minst 50 mm (Eurokod 2, 8.5).",
        "Ett längsgående järn ska ligga i hörnet där krokarna sitter.",
        "I pelare växlas krokarnas hörn ofta mellan byglarna så att svagheten inte hamnar i samma hörn.",
        "Klipplängden räknar bockningsverkstaden fram – du anger a, b, dimension och krok.",
      ] },

      { type: "h2", text: "Bygelavstånd – tätare på vissa ställen" },
      { type: "p", text: "I pelare får bygelavståndet enligt Eurokod 2 (9.5.3) vara högst det minsta av 20 × huvudjärnets minsta diameter, pelarens minsta sida och 400 mm. Avståndet ska dessutom minskas med faktorn 0,6:" },
      { type: "ul", items: [
        "Inom en sträcka lika med pelarens största tvärmått ovanför och under balk eller platta.",
        "Vid omlottskarvar när huvudjärnen är grövre än Ø14.",
      ] },
      { type: "p", text: "Exempel: pelare 300 × 300 med Ø16 huvudjärn. Största avstånd = min(320, 300, 400) = 300 mm. Vid pelarändar och skarvar: 0,6 × 300 = 180 mm. Ritningen gäller alltid." },

      { type: "h2", text: "Antal och vikt" },
      { type: "table", head: ["N-bygel", "Längd ca*", "Vikt per bygel"], rows: [
        ["Ø8, 190 × 190", "0,90 m", "ca 0,36 kg"],
        ["Ø8, 240 × 240", "1,10 m", "ca 0,43 kg"],
        ["Ø10, 230 × 430", "1,47 m", "ca 0,91 kg"],
        ["Ø10, 330 × 330", "1,47 m", "ca 0,91 kg"],
      ], caption: "*Omkrets plus två 135°-krokar, avrundat. Exakt klipplängd räknas i produktionen." },
      { type: "p", text: "Antal byglar = längd / bygelavstånd + 1, plus de tätare zonerna. En pelare på 3 m med byglar c/c 300 och 180 mm i ändarna kräver ungefär 13–14 byglar." },

      { type: "h2", text: "Varianter av sluten bygel" },
      { type: "ul", items: [
        "NX – sluten bygel med en sned sida, till balkar med sned kant.",
        "L – bygel med överlapp i stället för krokar, där krokar inte får plats.",
        "U (sexkantig) och V (fasade hörn) – slutna byglar för speciella tvärsnitt. Typform U är alltså inte samma sak som den öppna U-bygeln på bygget, som är typform C.",
      ] },

      { type: "h2", text: "Vanliga misstag" },
      { type: "p", text: "N-byglar som bockats med innermått i stället för yttermått gör korgen för stor och täckskiktet för litet. Ett annat fel är att alla krokar placeras i samma hörn i en pelare. Kontrollera också att byglarna tätas vid pelarändar och skarvar enligt ritningen – det är där de behövs mest." },

      { type: "h2", text: "N-byglar eller färdiga korgar" },
      { type: "p", text: "Skicka tvärsnitt, täckskikt och bygelavstånd så tar vi fram N-byglar efter mått – eller svetsar ihop dem till färdiga [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar). Begär pris via [byglar och hakar](/produkter/byglar-och-hakar) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Vad är en N-bygel?", a: "En sluten rektangulär bygel – typform N – som omsluter huvudjärnen i balkar och pelare och förankras med krokar i ett hörn." },
      { q: "Hur räknar man måtten på en N-bygel?", a: "Tvärsnittets mått minus täckskiktet på båda sidor. Pelare 300 × 300 med 30 mm täckskikt ger 240 × 240 mm yttermått." },
      { q: "Var ska byglarna sitta tätare i en pelare?", a: "Nära balk eller platta och vid skarvar av grova huvudjärn. Eurokod 2 anger då 0,6 × det normala största avståndet." },
      { q: "Vilken krok har en N-bygel?", a: "Normalt 135° in mot bygelns insida med rak ände minst 5 × Ø och minst 50 mm." },
    ],
    target: { href: "/produkter/byglar-och-hakar", label: "Beställ N-byglar" },
    category: "dimensioner",
  },

  {
    slug: "c-bygel-harnal-armering",
    title: "C-bygel och hårnål – byglar för fria kanter och förankring",
    metaTitle: "C-bygel & hårnål – fria kanter, förankring",
    metaDescription:
      "C-bygel och hårnål i armering: kantbyglar i fria kanter enligt Eurokod 2, hårnål (typform S) med 180° bock, dorndiameter, mått och när de används.",
    excerpt:
      "C-byglar stänger fria kanter i plattor och väggar. Hårnålen förankrar järn med en 180°-bock. Här är reglerna, måtten och skillnaden mellan formerna.",
    date,
    readingMinutes: 6,
    keywords: [
      "c-bygel",
      "c-bygel armering",
      "hårnål armering",
      "kantbygel platta",
      "typform s",
      "hårnålsbygel",
    ],
    content: [
      { type: "p", text: "C-bygel och hårnål är två former som används för att avsluta och förankra armering. C-bygeln är samma U-form som [U-bygeln](/blogg/u-bygel-armering) – typform C – men namnet används ofta om korta byglar som stänger fria kanter. Hårnålen är ett järn bockat 180° runt en dorn – typform S. Båda tillverkar vi i serie under [byglar och hakar](/produkter/byglar-och-hakar)." },

      { type: "figure", illustration: "bending-shapes", caption: "U-järn (C) och hårnål (S) jämfört med andra bockformer." },

      { type: "h2", text: "C-bygel i fria kanter" },
      { type: "p", text: "En fri kant är en plattkant som inte vilar på något stöd – till exempel en balkongkant eller kanten vid ett stort urtag. Eurokod 2 (9.3.1.4) anger att plattor längs fria kanter normalt ska ha längs- och tvärarmering, typiskt utformad som U-byglar runt kanten. C-bygeln binder ihop över- och underkantsarmeringen och håller kanten samman." },
      { type: "ul", items: [
        "Ryggens yttermått: plattans tjocklek minus täckskikt uppe och nere.",
        "Benen läggs in i plattan och skarvas mot över- och underkantsarmeringen.",
        "Längsgående järn läggs i C-bygelns hörn längs kanten.",
        "Centrumavstånd enligt ritning, ofta samma som plattans armering.",
      ] },
      { type: "p", text: "Exempel: platta 200 mm, täckskikt 30 mm → ryggen 140 mm. Med ben på 400 mm blir C-bygeln Ø10 cirka 400 + 140 + 400 mm." },

      { type: "h2", text: "Hårnål – typform S" },
      { type: "p", text: "Hårnålen har två parallella ben förbundna med en 180°-bock. Avståndet mellan benen styrs av dorndiametern – den runda bocken är hela poängen. Hårnålar används för att förankra krafter där ett rakt järn inte får plats:" },
      { type: "ul", items: [
        "Förankring vid balkändar och upplag.",
        "Kantförstärkning i väggar och plattor.",
        "Förankring av konsoler och utkragningar.",
        "Infästning i element där krafter ska föras runt ett annat järn.",
      ] },

      { type: "h2", text: "Dorn och mått för hårnål" },
      { type: "table", head: ["Dimension", "Minsta dorn", "Minsta yttermått mellan benen*"], rows: [
        ["Ø8", "32 mm", "48 mm"],
        ["Ø10", "40 mm", "60 mm"],
        ["Ø12", "48 mm", "72 mm"],
        ["Ø16", "64 mm", "96 mm"],
        ["Ø20", "140 mm", "180 mm"],
      ], caption: "Dorn enligt SS-EN 1992-1-1 tabell 8.1N. *Dorn + 2 × Ø vid minsta radie. Konstruktören kan kräva större radie för att betongen i bocken inte ska krossas (8.3)." },
      { type: "p", text: "Eftersom hårnålen tar upp kraft i bocken kan konstruktören behöva en större dorn än tabellvärdet. Följ ritningen – bocka aldrig snävare för att få plats." },

      { type: "h2", text: "Varianter" },
      { type: "ul", items: [
        "SH – hårnål med kröpning, när benen ska ligga i olika plan.",
        "SX – rumsbockad hårnål, där benen går åt olika håll i rummet.",
        "R – ögla, för förankring runt ett annat järn.",
      ] },
      { type: "p", text: "Alla former med kod hittar du i verktyget [typformer för bockning](/tjanster/bockningslista)." },

      { type: "h2", text: "C-bygel eller hårnål?" },
      { type: "table", head: ["", "C-bygel", "Hårnål"], rows: [
        ["Typform", "C", "S"],
        ["Bock", "Två 90°-bockar", "En 180°-bock"],
        ["Typiskt", "Fria kanter, väggändar", "Förankring, upplag, konsoler"],
        ["Plats i tvärsnittet", "Rak rygg ger plats för längsjärn", "Rund bock, kompakt"],
      ] },

      { type: "h2", text: "Vanliga misstag" },
      { type: "p", text: "Ett vanligt fel är att fria kanter armeras med bara raka järn, utan byglar som binder ihop över- och underkanten. Ett annat är att hårnålar bockas snävare än dornen tillåter för att få plats – då kan stålet spricka i bocken eller betongen krossas. Behöver formen ändras, fråga konstruktören." },

      { type: "h2", text: "C-byglar och hårnålar med rätt dorn" },
      { type: "p", text: "Vi bockar C-byglar och hårnålar efter din bockningslista med den dorn ritningen anger, märkta per position. Skicka underlaget via [byglar och hakar](/produkter/byglar-och-hakar) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Vad är en C-bygel?", a: "En U-formad bygel – typform C. Namnet används ofta om byglar som stänger fria kanter i plattor och väggar." },
      { q: "Vad är en hårnål i armering?", a: "Ett järn med två parallella ben och en 180° rund bock – typform S. Den används för förankring vid upplag, ändar och konsoler." },
      { q: "Måste fria plattkanter ha byglar?", a: "Eurokod 2 anger att fria kanter normalt ska ha längs- och tvärarmering, typiskt U-byglar runt kanten. Ritningen avgör utformningen." },
      { q: "Vilken bockningsradie har en hårnål?", a: "Minst dorn 4 × Ø upp till Ø16 och 7 × Ø för grövre. Konstruktören kan kräva större radie." },
    ],
    target: { href: "/produkter/byglar-och-hakar", label: "Beställ C-byglar och hårnålar" },
    category: "dimensioner",
  },

  {
    slug: "s-hake-kramla-armering",
    title: "S-hake och kramla – tvärarmering mellan två lager",
    metaTitle: "S-hake och kramla i armering – mått & regler",
    metaDescription:
      "S-hakar och kramlor binder ihop armeringslagren i väggar och plattor. Så används de, hur måtten räknas, vad Eurokod 2 säger och hur du anger dem i listan.",
    excerpt:
      "När en vägg eller platta har armering i båda sidor behövs ofta korta järn som binder ihop lagren. Här är S-hakar och kramlor: funktion, mått och hur de beställs.",
    date,
    readingMinutes: 6,
    keywords: [
      "s-hake armering",
      "kramla armering",
      "s-hakar",
      "tvärarmering vägg",
      "armeringshake",
      "kramlor vägg",
    ],
    content: [
      { type: "p", text: "S-hakar och kramlor är korta, bockade järn som binder ihop två armeringslager – oftast i väggar med nät eller järn i båda sidor. De håller lagren på rätt avstånd under gjutningen och kan i den färdiga konstruktionen förhindra att tryckta järn knäcks ut. Vi tillverkar [hakar och kramlor](/produkter/byglar-och-hakar) i serie efter mått." },

      { type: "h2", text: "Vad är skillnaden?" },
      { type: "table", head: ["", "S-hake", "Kramla"], rows: [
        ["Form", "Rakt järn med krok i varje ände, krokarna åt motsatt håll", "Kort U-format eller krokat järn"],
        ["Funktion", "Griper om järn i båda lagren", "Håller ihop och låser lagren"],
        ["Vanligt i", "Väggar, pelarväggar, tjocka plattor", "Väggar, element, murar"],
        ["Typisk dimension", "Ø6–Ø10", "Ø6–Ø10"],
      ], caption: "Benämningarna varierar mellan byggen och leverantörer. Ange alltid form och mått i bockningslistan." },
      { type: "p", text: "Ordet kramla används också i murverk om förbindningsjärn mellan två skikt. I armering är det formen på ritningen som gäller – inte namnet." },

      { type: "h2", text: "När krävs tvärarmering?" },
      { type: "p", text: "Eurokod 2 (9.6.4) anger att väggar där den vertikala armeringen i båda sidor sammanlagt överstiger 2 % av betongarean ska ha tvärarmering i form av byglar, enligt samma regler som för pelare. Även när det inte krävs används hakar för att hålla lagren på plats. Var och hur tätt står på ritningen." },
      { type: "ul", items: [
        "Tryckta väggar med mycket vertikal armering.",
        "Väggändar och pelarliknande väggdelar.",
        "Väggar och plattor där lagren annars rör sig vid gjutning och vibrering.",
        "Prefabricerade element som lyfts och vänds.",
      ] },

      { type: "h2", text: "Så räknas måtten" },
      { type: "p", text: "S-haken ska gripa om de yttersta järnen i båda lagren. Det raka måttet mellan krokarna blir därför väggens tjocklek minus täckskiktet på båda sidor, minus utrymmet för de järn som haken griper om." },
      { type: "ol", items: [
        "Vägg 250 mm, täckskikt 30 mm på båda sidor.",
        "Haken ligger ytterst och ska också ha täckskikt: yttermått 250 − 2 × 30 = 190 mm.",
        "Krokarna bockas runt minst 4 × Ø (Ø6: 24 mm dorn).",
        "Rak ände efter kroken enligt ritning – vid 135° minst 5 × Ø och 50 mm.",
      ] },
      { type: "p", text: "Täckskiktet gäller även för haken. Sticker krokarna ut för långt hamnar de för nära formen – vanligt fel vid egenbockade hakar." },

      { type: "h2", text: "Hur anges en S-hake i bockningslistan?" },
      { type: "p", text: "Observera att typform S i svensk bockningslista är hårnålen – inte S-haken. S-haken anges ofta som en rak stång med ändkrokar åt motsatt håll, eller som specialform med skiss. Skriv ut krokarnas vinkel och riktning så blir det rätt. Se alla koder i [typformer för bockning](/tjanster/bockningslista) och skillnaden mot hårnålen i [C-bygel och hårnål](/blogg/c-bygel-harnal-armering)." },

      { type: "h2", text: "Antal" },
      { type: "p", text: "Antalet anges ofta som st per m² vägg eller som ett visst avstånd i båda riktningar, till exempel varannan korsning. En vägg på 3 × 10 m med hakar i ett rutmönster på 600 × 600 mm kräver cirka 6 × 18 ≈ 108 hakar. Ritningen gäller." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "p", text: "Hakar som är för långa sticker ut mot formen och ger för litet täckskikt. Hakar som är för korta går inte att trä på. Därför är exakta mått viktigare för hakar än för de flesta andra järn. Ett annat fel är att hakarna inte griper om de yttersta järnen utan bara hängs på nätet – då håller de inte ihop lagren." },

      { type: "h2", text: "Hakar som passar mellan lagren" },
      { type: "p", text: "Hakar går åt i hundratal och måste vara exakt lika långa. Ange väggtjocklek, täckskikt och järnens dimension så räknar vi måttet. Skicka listan via [byglar och hakar](/produkter/byglar-och-hakar) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Vad är en S-hake i armering?", a: "Ett kort järn med krok i båda ändar åt motsatt håll, som griper om armeringen i väggens båda sidor och binder ihop lagren." },
      { q: "Vad är en kramla?", a: "Ett kort bockat järn som håller ihop och låser två armeringslager. Namnet varierar – formen på ritningen gäller." },
      { q: "När krävs hakar mellan lagren i en vägg?", a: "Eurokod 2 kräver tvärarmering när vertikalarmeringen i båda sidor överstiger 2 % av betongarean. Hakar används ofta även annars för att hålla lagren på plats." },
      { q: "Är typform S en S-hake?", a: "Nej. Typform S är hårnålen. S-haken anges som rak stång med ändkrokar eller som specialform." },
    ],
    target: { href: "/produkter/byglar-och-hakar", label: "Beställ S-hakar och kramlor" },
    category: "dimensioner",
  },

  {
    slug: "kantjarn-forankringsjarn",
    title: "Kantjärn och förankringsjärn – armering i kant och anslutning",
    metaTitle: "Kantjärn & förankringsjärn – mängd & mått",
    metaDescription:
      "Kantjärn i kantbalken och förankringsjärn i anslutningar: dimensioner, hur du räknar löpmeter och skarvar, uppstickare och inborrning i befintlig betong.",
    excerpt:
      "Kantjärnen bär kantbalken och förankringsjärnen kopplar ihop gjutningar. Här är hur du räknar mängd, skarvar och hörn – och vad som gäller vid anslutning till befintlig betong.",
    date,
    readingMinutes: 6,
    keywords: [
      "kantjärn",
      "kantjärn armering",
      "förankringsjärn",
      "anslutningsjärn",
      "uppstickare armering",
      "kantjärn platta på mark",
    ],
    content: [
      { type: "p", text: "Kantjärn är de längsgående armeringsjärnen i kantbalken runt en platta på mark. Förankringsjärn – även kallade anslutningsjärn eller uppstickare – kopplar ihop en gjutning med nästa. Båda är raka eller enkelt bockade järn som ska ha rätt längd, rätt skarv och rätt läge. Vi levererar dem kapade och bockade, gärna som del av en färdig [villakorg och kantbalksarmering](/produkter/villakorg-kantbalksarmering)." },

      { type: "h2", text: "Kantjärn i kantbalken" },
      { type: "p", text: "Kantbalken är plattans förstärkta kant där väggarnas last förs ned. Kantjärnen ligger i över- och underkant och hålls på plats av kantbalksbyglar – se [kantbalksbygel](/blogg/kantbalksbygel)." },
      { type: "ul", items: [
        "Dimension: ofta Ø10–Ø12 i villagrunder, grövre vid större laster.",
        "Antal: vanligen två eller fler järn i både över- och underkant – ritningen anger.",
        "Läge: i byglarnas hörn, med täckskikt mot form och mark.",
        "Hörn: kantjärnen förs runt hörnet med hörnjärn (B-form) som skarvas i båda riktningar.",
      ] },

      { type: "h2", text: "Räkna mängden kantjärn" },
      { type: "ol", items: [
        "Plattans omkrets: 10 × 12 m → 44 m.",
        "Antal kantjärn: 4 (2 i överkant, 2 i underkant) → 176 m.",
        "Skarvar: sidor upp till 12 m klaras med en hel stång per järn. Längre sidor kräver skarv – räkna cirka 50 × Ø per skarv om ritningen inte anger annat.",
        "Hörnjärn: 4 per hörn → 16 st, ben enligt skarvlängden.",
        "Ø12: 176 m × 0,888 kg/m ≈ 156 kg plus skarvar och hörnjärn.",
      ] },
      { type: "table", head: ["Kantjärn", "kg per löpmeter kantbalk (4 järn)", "Platta 10 × 12 m (44 m)"], rows: [
        ["4 Ø10", "2,47 kg", "ca 109 kg"],
        ["4 Ø12", "3,55 kg", "ca 156 kg"],
        ["4 Ø16", "6,32 kg", "ca 278 kg"],
      ], caption: "Utan skarvar och hörnjärn. Räkna din platta i armeringskalkylatorn." },
      { type: "p", text: "[Armeringskalkylatorn](/armeringskalkylator) lägger till skarvlängder automatiskt." },

      { type: "h2", text: "Förankringsjärn – koppla ihop gjutningar" },
      { type: "p", text: "När en konstruktion gjuts i flera etapper måste armeringen fortsätta genom fogen. Det görs med järn som gjuts in i första etappen och sticker ut för att skarvas mot nästa." },
      { type: "table", head: ["Typ", "Var", "Form"], rows: [
        ["Uppstickare", "Platta → vägg, sula → pelare", "B-form (L-järn) eller rak"],
        ["Anslutningsjärn", "Bjälklag → balkong, trapplopp", "Rak eller bockad"],
        ["Startjärn", "Fundament → pelare", "L-järn med fot i fundamentet"],
        ["Kantjärn i fog", "Platta i etapper", "Rakt, skarvas mot nästa etapp"],
      ] },
      { type: "p", text: "Den del som gjuts in ska ha förankringslängd och den del som sticker ut skarvlängd mot nästa etapps armering. Båda står på ritningen – riktvärden finns i [skarvlängd armering](/blogg/skarvlangd-armering)." },

      { type: "h2", text: "Inborrade järn i befintlig betong" },
      { type: "p", text: "Ska en ny gjutning anslutas till befintlig betong borras järnen in och limmas med injekteringsmassa. Förankringslängd, borrhålsdiameter och kantavstånd styrs då av limsystemets produktgodkännande och konstruktörens beräkning – inte av vanliga tabellvärden. Järnen kapas i rätt längd; själva infästningen görs enligt systemets anvisningar." },

      { type: "h2", text: "Vanliga fel" },
      { type: "ul", items: [
        "Uppstickare som är för korta för skarven mot väggarmeringen.",
        "Kantjärn utan hörnjärn – kraften förs inte runt hörnet.",
        "Skarvar på samma ställe i alla järn, när ritningen kräver förskjutning.",
        "För litet täckskikt mot mark i kantbalkens underkant.",
      ] },

      { type: "h2", text: "Kontroll innan gjutning" },
      { type: "p", text: "Kontrollera att kantjärnen ligger i byglarnas hörn, att hörnjärnen är på plats i alla hörn och att skarvarna är förskjutna enligt ritningen. Mät uppstickarnas läge och längd mot väggarnas placering innan betongen kommer. Ett uppstickande järn på fel plats går sällan att rätta utan att borra." },

      { type: "h2", text: "Kantbalken komplett – skicka grundritningen" },
      { type: "p", text: "Vi kapar kantjärn och bockar hörnjärn, byglar och uppstickare efter ritningen och märker allt per position. Behöver du hjälp på plats finns [armeringsmontage](/tjanster/armeringsmontage). Begär pris via [villakorg och kantbalksarmering](/produkter/villakorg-kantbalksarmering) eller [offert](/offert)." },
    ],
    faqs: [
      { q: "Vad är kantjärn?", a: "De längsgående armeringsjärnen i kantbalken runt en platta på mark, i över- och underkant. Ofta Ø10–Ø12 i villagrunder." },
      { q: "Hur mycket kantjärn behövs?", a: "Omkretsen gånger antalet järn, plus skarvar och hörnjärn. En platta på 10 × 12 m med 4 Ø12 kräver cirka 156 kg före skarvar." },
      { q: "Vad är ett förankringsjärn?", a: "Ett järn som gjuts in i en konstruktion och sticker ut för att skarvas mot nästa gjutning, till exempel uppstickare från platta till vägg." },
      { q: "Hur fäster man armering i befintlig betong?", a: "Järnen borras in och limmas med ett godkänt injekteringssystem. Förankringslängd och borrhål följer systemets anvisningar och konstruktörens beräkning." },
      { q: "Jag har bara en grundritning – räcker det?", a: "Ja. Vi läser ut kantjärn, hörnjärn och byglar ur ritningen, tar fram bockningslistan och lämnar offert på hela kantbalken." },
    ],
    target: { href: "/produkter/villakorg-kantbalksarmering", label: "Beställ kantbalksarmering" },
    category: "dimensioner",
  },
];

export const dimensioner: Post[] = [...jarn, ...nat, ...byglar];
