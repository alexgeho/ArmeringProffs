/** Plan: docs/PLAN-sidor-2026-10.md – våg 4, guider 75–87. */
import type { Post } from "@/config/blog";

export const guider1: Post[] = [
  /* 75 */
  {
    slug: "forankringslangd-armering",
    title: "Förankringslängd för armering – tabell och beräkning enligt Eurokod 2",
    metaTitle: "Förankringslängd armering – tabell Ø8–Ø32",
    metaDescription:
      "Förankringslängd Ø8–Ø32 i tabell för C20/25–C30/37, räkneexempel enligt Eurokod 2 och när krok kortar längden. Vi bockar ändarna efter din ritning.",
    excerpt:
      "Ett armeringsjärn måste sitta tillräckligt långt in i betongen för att kunna ta upp sin kraft. Här är riktvärden för förankringslängd, hur den räknas och hur bockade ändar kan korta den.",
    date: "2026-10-09",
    readingMinutes: 7,
    keywords: [
      "förankringslängd armering",
      "förankringslängd armering tabell",
      "förankringslängd eurokod 2",
      "beräkna förankringslängd",
      "förankring armeringsjärn",
      "lb,rqd armering",
      "förankringslängd 12 mm",
    ],
    content: [
      { type: "p", text: "Snabbsvar: ett fullt utnyttjat rakt järn B500B i C25/30 behöver ungefär 40 × Ø vid god vidhäftning – för Ø12 cirka 485 mm. I överkant av höga gjutningar blir det cirka 57 × Ø. Exakt värde räknar konstruktören fram, och det står på ritningen." },
      { type: "p", text: "Förankringslängden är sträckan järnet måste sitta i betongen för att kraften ska föras över via vidhäftningen. Är den för kort dras järnet ut innan stålet når sin hållfasthet. Får längden inte plats kan änden bockas – vi tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad) med krokar och vinklar exakt enligt ritningen." },

      { type: "h2", text: "Förankringslängd eller skarvlängd?" },
      { type: "p", text: "Förankringslängd gäller ett järn som ska ”fästas” i betongen, till exempel vid ett upplag eller där en vägg ansluter mot en platta. Skarvlängd gäller två järn som ligger omlott och för över kraften mellan sig. Skarvlängden räknas ut från samma grundvärde men blir oftast längre, eftersom en faktor för andelen skarvade järn tillkommer. Riktvärden för skarvar finns i [skarvlängd och överlapp](/blogg/skarvlangd-armering)." },

      { type: "h2", text: "Så räknas förankringslängden enligt Eurokod 2" },
      { type: "p", text: "Beräkningen finns i SS-EN 1992-1-1, avsnitt 8.4. Den görs i tre steg:" },
      { type: "ol", items: [
        "Vidhäftningshållfastheten: fbd = 2,25 · η1 · η2 · fctd. η1 = 1,0 vid goda vidhäftningsförhållanden och 0,7 vid dåliga. η2 = 1,0 för Ø ≤ 32.",
        "Erforderlig grundlängd: lb,rqd = (Ø / 4) · (σsd / fbd), där σsd är spänningen i järnet. Fullt utnyttjat B500B ger σsd = 500 / 1,15 ≈ 435 MPa.",
        "Dimensionerande förankringslängd: lbd = α1 · α2 · α3 · α4 · α5 · lb,rqd. Faktorerna tar hänsyn till ändens form, täckskikt, tvärarmering och tvärtryck. Produkten α2 · α3 · α5 får inte bli mindre än 0,7.",
      ] },
      { type: "p", text: "Lbd får aldrig bli kortare än minimivärdet lb,min. För dragna järn är det det största av 0,3 · lb,rqd, 10 × Ø och 100 mm. För tryckta järn gäller det största av 0,6 · lb,rqd, 10 × Ø och 100 mm." },

      { type: "h2", text: "Tabell – grundvärde lb,rqd för B500B" },
      { type: "p", text: "Tabellen visar lb,rqd för fullt utnyttjade raka järn i B500B. Den är räknad med fctk,0.05 enligt Eurokod 2 och γc = 1,5: fbd blir 2,25 MPa i C20/25, 2,7 MPa i C25/30 och 3,0 MPa i C30/37 vid god vidhäftning. Det motsvarar ungefär 48 × Ø, 40 × Ø och 36 × Ø." },
      { type: "table", head: ["Dimension", "C20/25, god", "C25/30, god", "C30/37, god", "C25/30, dålig"], rows: [
        ["Ø8", "≈ 385 mm", "≈ 320 mm", "≈ 290 mm", "≈ 460 mm"],
        ["Ø10", "≈ 485 mm", "≈ 405 mm", "≈ 365 mm", "≈ 575 mm"],
        ["Ø12", "≈ 580 mm", "≈ 485 mm", "≈ 435 mm", "≈ 690 mm"],
        ["Ø16", "≈ 775 mm", "≈ 645 mm", "≈ 580 mm", "≈ 920 mm"],
        ["Ø20", "≈ 965 mm", "≈ 805 mm", "≈ 725 mm", "≈ 1 150 mm"],
        ["Ø25", "≈ 1 210 mm", "≈ 1 010 mm", "≈ 905 mm", "≈ 1 440 mm"],
        ["Ø32", "≈ 1 545 mm", "≈ 1 290 mm", "≈ 1 160 mm", "≈ 1 840 mm"],
      ], caption: "lb,rqd = (Ø/4)·(435/fbd) för fullt utnyttjat järn, alla α = 1,0. Riktvärden för överslag – konstruktören/ritningen avgör den verkliga förankringslängden." },
      { type: "p", text: "Är järnet inte fullt utnyttjat blir förankringslängden kortare i proportion till spänningen. Är det en krok eller ett bockat järn kan α1 sänka längden ytterligare. Därför skiljer sig ritningens mått ofta från tabellen – i båda riktningarna." },
      { type: "h3", text: "Räkneexempel – Ø16 som inte är fullt utnyttjat" },
      { type: "p", text: "Ø16 i C30/37, god vidhäftning, spänning σsd = 300 MPa: lb,rqd = (16 / 4) · (300 / 3,0) = 400 mm. Minimivärdet för drag är max(0,3 · 400; 10 · 16; 100) = 160 mm, så 400 mm gäller om alla α = 1,0. Med fullt utnyttjat järn hade det blivit 580 mm." },

      { type: "h2", text: "God eller dålig vidhäftning?" },
      { type: "p", text: "Vidhäftningen beror på var järnet ligger i gjutningen. Betongen sätter sig och vatten stiger uppåt, så järn högt upp i en hög gjutning får sämre kontakt med betongen. Enligt Eurokod 2 räknas det som dåliga förhållanden bland annat när:" },
      { type: "ul", items: [
        "Elementet är högre än 250 mm och järnet ligger mer än 250 mm ovanför gjutningens botten.",
        "Elementet är högre än 600 mm och järnet ligger inom 300 mm från ovansidan.",
      ] },
      { type: "p", text: "Järn i element upp till 250 mm, och järn som lutar 45° eller mer mot horisontalplanet, räknas alltid som god vidhäftning." },
      { type: "p", text: "I praktiken innebär det att överkantsarmering i tjocka plattor och höga balkar ofta behöver cirka 40 % längre förankring än underkantsarmeringen." },

      { type: "h2", text: "Krok, bock eller rak ände?" },
      { type: "p", text: "Ett rakt järn kräver hela förankringslängden. Får det inte plats – till exempel vid en smal kantbalk eller ett kort upplag – kan änden bockas som en vinkel, en krok eller en ögla. För dragna järn med tillräckligt täckskikt vinkelrätt mot bocken (cd > 3 × Ø) får α1 sättas till 0,7, vilket kortar förankringen med 30 %. För tryckta järn ger krokar ingen minskning. Bocken måste då göras med rätt dorndiameter, se [bocka armeringsjärn](/blogg/bocka-armeringsjarn). Alternativet är svetsade tvärstänger eller mekaniska ankare – enligt konstruktörens anvisning." },

      { type: "h2", text: "Vanliga misstag på bygget" },
      { type: "ul", items: [
        "Järnet kapas av för att det ”sticker ut för långt” – förankringen försvinner.",
        "Överkantsjärn förankras med samma längd som underkantsjärn trots dålig vidhäftning.",
        "Krokar vrids så att de hamnar utanför täckskiktet eller mot formen.",
        "Skarv och förankring blandas ihop – skarven blir för kort.",
        "Raka järn levereras i stället för bockade, och längden ryms inte i elementet.",
      ] },

      { type: "h2", text: "Beställ med rätt förankring från början" },
      { type: "p", text: "Förankringen avgörs på ritningen, men den ska också gå att bygga. När vi tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad) följer vi måtten och formerna per position, så att varje järn har den förankringslängd och ändform som konstruktören angett. Skicka ritningen via [offertformuläret](/offert) – du får pris på de bockade positionerna och frakten till din ort." },
    ],
    faqs: [
      { q: "Hur lång ska förankringslängden vara för Ø12?", a: "För ett fullt utnyttjat Ø12 i B500B och C25/30 blir grundvärdet lb,rqd cirka 485 mm vid god vidhäftning och cirka 690 mm vid dålig. Krokar, täckskikt och lägre spänning kan korta den. Ritningen gäller." },
      { q: "Vad är skillnaden mellan förankringslängd och skarvlängd?", a: "Förankringslängden är hur långt ett järn måste gjutas in för att fästa i betongen. Skarvlängden gäller två järn omlott och blir oftast längre, eftersom hänsyn tas till hur många järn som skarvas i samma snitt." },
      { q: "Vad är minsta förankringslängd enligt Eurokod 2?", a: "För dragna järn det största av 0,3 · lb,rqd, 10 × Ø och 100 mm. För tryckta järn det största av 0,6 · lb,rqd, 10 × Ø och 100 mm." },
      { q: "Blir förankringen kortare med krok?", a: "Ja, för dragna järn. Med en bockad ände och tillräckligt täckskikt vid bocken får faktorn α1 sättas till 0,7, alltså 30 % kortare än ett rakt järn. Bocken ska göras med minst den dorndiameter Eurokod 2 anger." },
    ],
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ klippt och bockad armering" },
    category: "guider",
  },

  /* 76 */
  {
    slug: "naja-armering",
    title: "Naja armering – så binder du järn och nät steg för steg",
    metaTitle: "Naja armering – så binder du järn och nät",
    metaDescription:
      "Så najar du armering: verktyg, vanliga knutar, vilka korsningar som ska najas och hur du binder byglar, skarvar och nät så att inget rör sig vid gjutning.",
    excerpt:
      "Najning håller armeringen på plats tills betongen har härdat. Här går vi igenom verktygen, de vanligaste knutarna och hur tätt du behöver naja i plattor, byglar och skarvar.",
    date: "2026-10-09",
    readingMinutes: 6,
    keywords: [
      "naja armering",
      "najning armering",
      "hur najar man armering",
      "binda armering",
      "najtång",
      "najmaskin",
      "binda armeringsjärn",
    ],
    content: [
      { type: "p", text: "Att naja armering betyder att binda ihop armeringsjärn och nät med tunn ståltråd vid korsningarna. Najningen bär ingen last i den färdiga konstruktionen – den finns för att armeringen ska ligga exakt där ritningen anger medan betongen gjuts, vibreras och härdar. Ett järn som flyttar sig några centimeter kan ge för litet täckskikt eller fel hävarm." },
      { type: "p", text: "Najtråd, najtänger och distanser levererar vi tillsammans med armeringen – se [najtråd och tillbehör](/produkter/najtrad-och-tillbehor)." },

      { type: "h2", text: "Verktyg för najning" },
      { type: "ul", items: [
        "Najtång (armeringstång) – tång med skärande käftar som vrider åt och klipper tråden. Standardverktyget på bygget.",
        "Najsnurra (najkrok) – vridverktyg för färdigklippt najtråd med öglor i ändarna. Snabbt och enkelt för den som najar mindre ofta.",
        "Najmaskin (bindmaskin) – batteridrivet verktyg som lindar och vrider tråden automatiskt. Lönar sig vid stora ytor och många korsningar.",
        "Handskar – tråden och järnens kammar är vassa.",
      ] },

      { type: "h2", text: "Vanliga knutar" },
      { type: "h3", text: "Enkel knut (snabbnajning)" },
      { type: "p", text: "Tråden läggs diagonalt runt korsningen och vrids ihop med tången, två–tre varv. Det är den snabbaste metoden och räcker för de flesta korsningar i plattor där armeringen ligger på distanser och inte belastas." },
      { type: "h3", text: "Korsnajning (åtta)" },
      { type: "p", text: "Tråden går i ett kryss runt korsningen innan den vrids åt. Knuten låser järnen i båda riktningarna och används där armeringen ska kunna beträdas eller lyftas, till exempel i korgar, väggar och vid ändar och hörn." },
      { type: "h3", text: "Sadelknut" },
      { type: "p", text: "Tråden går runt det ena järnet och under det andra, så att knuten håller järnen mot varandra även när man kliver på dem. Vanlig i överkantsarmering och vid byglar." },

      { type: "h2", text: "Så najar du – steg för steg" },
      { type: "ol", items: [
        "Lägg ut distanser och underkantsarmering enligt ritningen – se [distanser och täckskikt](/blogg/distanser-tackskikt-armering).",
        "Kontrollera c/c-avstånd och antal järn innan du börjar binda.",
        "Naja ytterraderna och hörnen först, så att mattan eller järnen hålls i rätt läge.",
        "Fyll i med najning inåt i ett jämnt mönster.",
        "Vrid åt tills järnen sitter fast – inte så hårt att tråden går av.",
        "Böj in trådändarna mot konstruktionens mitt så att de inte sticker ut i täckskiktet.",
        "Gå igenom armeringen före gjutning och efternaja det som släppt.",
      ] },

      { type: "h2", text: "Hur tätt ska armeringen najas?" },
      { type: "p", text: "Standarden för utförande, SS-EN 13670, kräver att armeringen fästs så att den behåller sitt läge under gjutningen – men anger inget fast mönster. Det styrs av arbetsbeskrivningen och av hur armeringen belastas på bygget. Vanlig praxis:" },
      { type: "table", head: ["Del", "Vanlig najning"], rows: [
        ["Platta, lösa järn i två riktningar", "Varannan korsning i schackmönster, alla korsningar i ytterraderna"],
        ["Armeringsnät mot nät (skarv)", "Var 3–4:e korsning längs överlappen, alltid i ändarna"],
        ["Byglar i balk och kantbalk", "Varje bygelhörn mot längsjärnen"],
        ["Pelare och korgar som lyfts", "Alla korsningar, gärna korsnajning"],
        ["Skarvar mellan lösa järn", "Minst i båda ändarna av skarven"],
        ["Överkantsarmering som beträds", "Tätare än underkant – armeringen får inte trampas ned"],
      ], caption: "Riktvärden för praxis. Arbetsbeskrivningen och konstruktören avgör." },

      { type: "figure", illustration: "rebar-cage", caption: "I en armeringskorg najas byglarna i varje hörn mot längsjärnen så att korgen håller formen när den lyfts." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Trådändar som sticker ut mot formen – de rostar och ger missfärgning i ytan.",
        "För glest najat överkantsnät som trycks ned när man går på det.",
        "Najning som ersätter distanser – tråden håller ihop, men lyfter inte armeringen.",
        "Svetsning i stället för najning utan konstruktörens tillstånd – svetsning av armering ska utföras enligt SS-EN ISO 17660.",
        "Tunn tråd i korgar som ska lyftas – knutarna släpper.",
        "Najning som görs först efter att alla järn lagts ut – järnen hinner flytta sig när man går på dem.",
      ] },

      { type: "h2", text: "Mindre najning med färdig armering" },
      { type: "p", text: "Ju mer armeringen är förberedd, desto färre knutar på bygget. Klippta och bockade järn som är märkta per position går snabbare att lägga ut, och färdiga korgar kommer redan najade eller svetsade från fabriken. Vilken tråd och hur mycket som går åt finns i [najtråd – vilken och hur mycket](/blogg/najtrad-armering)." },
      { type: "p", text: "Beställ najtråd och tillbehör samtidigt som armeringen via [najtråd och tillbehör](/produkter/najtrad-och-tillbehor) eller skicka underlaget direkt via [offert](/offert) – vi levererar i hela Sverige." },
    ],
    faqs: [
      { q: "Måste man naja varje korsning?", a: "Nej, inte i en vanlig platta. Vanlig praxis är varannan korsning i schackmönster och alla korsningar i ytterraderna. Korgar som lyfts och armering som beträds najas tätare. Arbetsbeskrivningen avgör." },
      { q: "Vilket verktyg är bäst för att naja armering?", a: "Najtång räcker för de flesta jobb. Najsnurra med färdig öglenajtråd är enklast för ovana. Vid stora ytor sparar en batteridriven najmaskin mycket tid." },
      { q: "Får man svetsa ihop armeringen i stället för att naja?", a: "Bara om konstruktören tillåter det och svetsningen utförs enligt SS-EN ISO 17660 av behörig svetsare. Felaktig svetsning kan försvaga stålet." },
      { q: "Ersätter najning distanser?", a: "Nej. Najningen håller järnen ihop, distanserna ger rätt höjd och täckskikt. Båda behövs." },
      { q: "Kan jag få najtråd och tång i samma leverans som armeringen?", a: "Ja. Lägg till najtråd, verktyg och distanser i offertförfrågan, så kommer allt med samma leverans." },
    ],
    target: { href: "/produkter/najtrad-och-tillbehor", label: "Beställ najtråd och tillbehör" },
    category: "guider",
  },

  /* 77 */
  {
    slug: "najtrad-armering",
    title: "Najtråd för armering – vilken tråd och hur mycket går åt?",
    metaTitle: "Najtråd armering – typer, tjocklek & åtgång",
    metaDescription:
      "Vilken najtråd ska du välja till armering – svart glödgad, galvad eller med öglor – och hur mycket går åt? Tjocklek, meter per kg och en enkel räknemodell.",
    excerpt:
      "Najtråd finns på rulle, färdigklippt och med öglor, i olika tjocklekar och ytor. Här är skillnaderna, meter per kilo och hur du räknar ut åtgången till ditt projekt.",
    date: "2026-10-09",
    readingMinutes: 6,
    keywords: [
      "najtråd",
      "najtråd armering",
      "najtråd åtgång",
      "najtråd med ögla",
      "bindtråd armering",
      "najtråd tjocklek",
      "hur mycket najtråd",
    ],
    content: [
      { type: "p", text: "Najtråd (bindtråd) är den tunna, mjuka ståltråd som används för att binda ihop armeringen vid korsningar och skarvar. Den ska vara lätt att vrida men tillräckligt stark för att hålla järnen på plats under gjutningen. Till en vanlig platta på 100 m² med ett lager s150 går det åt cirka 6–7 kg 1,2 mm-tråd – räknemodellen finns nedan." },
      { type: "p", text: "Vi levererar najtråd tillsammans med armering, distanser och verktyg – se [najtråd och tillbehör](/produkter/najtrad-och-tillbehor)." },

      { type: "h2", text: "Typer av najtråd" },
      { type: "ul", items: [
        "Svart glödgad najtråd på rulle – mjuk, billig och vanligast. Klipps av med najtången vid varje knut.",
        "Färdigklippta najtrådar – raka trådar i fast längd, sparar tid och minskar spill.",
        "Najtråd med öglor (öglenajtråd) – tråd med ögla i båda ändarna som vrids åt med en najsnurra. Snabb och jämn knut.",
        "Galvaniserad najtråd – rostar inte i ytan, för synliga betongytor och där täckskiktet är litet.",
        "Plastbelagd eller rostfri najtråd – för rostfri armering, kompositarmering eller där inga rostfläckar accepteras.",
        "Najtråd för najmaskin – särskilda spolar som passar maskinens fabrikat.",
      ] },

      { type: "h2", text: "Vilken tjocklek?" },
      { type: "p", text: "Vanliga tjocklekar är cirka 1,0–1,6 mm. Tunnare tråd går fortare att vrida och räcker för nät och tunna järn. Grövre tråd håller bättre i korgar som ska lyftas och i grova dimensioner." },
      { type: "table", head: ["Tråddiameter", "Vikt per meter", "Meter per kg", "Passar till"], rows: [
        ["1,0 mm", "≈ 6,2 g", "≈ 160 m", "Nät, Ø6–Ø10"],
        ["1,2 mm", "≈ 8,9 g", "≈ 113 m", "Plattor, Ø8–Ø16"],
        ["1,4 mm", "≈ 12,1 g", "≈ 83 m", "Byglar, korgar"],
        ["1,6 mm", "≈ 15,8 g", "≈ 63 m", "Grova järn, korgar som lyfts"],
      ], caption: "Teoretisk vikt för ståltråd (densitet 7 850 kg/m³). Najmaskiner kräver tråd enligt tillverkarens anvisning." },

      { type: "h2", text: "Hur mycket najtråd går åt?" },
      { type: "p", text: "Åtgången räknas enklast utifrån antalet knutar. En knut kring två järn i Ø10–Ø12 tar ungefär 25–35 cm tråd; grövre järn och korsnajning tar mer. Räkna så här:" },
      { type: "ol", items: [
        "Räkna antalet korsningar: (1 / c/c-avstånd)² per m² och lager. Med s150 blir det cirka 44 korsningar per m².",
        "Välj hur många som najas – till exempel varannan korsning ger cirka 22 knutar per m² och lager.",
        "Multiplicera med trådlängd per knut, t.ex. 0,3 m → cirka 6,6 m tråd per m² och lager.",
        "Räkna om till kilo: med 1,2 mm tråd (113 m/kg) blir det knappt 60 g per m² och lager.",
        "Lägg till 10–20 % för spill, skarvar och efternajning.",
      ] },
      { type: "table", head: ["Exempel", "Knutar", "Tråd 1,2 mm"], rows: [
        ["Platta 100 m², ett lager s150, varannan korsning", "≈ 2 200", "≈ 6–7 kg"],
        ["Platta 100 m², över- och underkant s150, varannan korsning", "≈ 4 400", "≈ 12–14 kg"],
        ["Kantbalk 40 m, byglar s200, 4 hörn per bygel", "≈ 800", "≈ 2–3 kg"],
      ], caption: "Räknat med 0,3 m tråd per knut och cirka 15 % tillägg. Överslag – verklig åtgång beror på knut och hur tätt det najas." },
      { type: "p", text: "Hur tätt du behöver naja i olika delar finns i guiden [naja armering](/blogg/naja-armering)." },

      { type: "h2", text: "Rulle, klippt eller ögla – vad lönar sig?" },
      { type: "p", text: "Tråd på rulle är billigast per kilo men ger mest spill och kräver vana. Färdigklippt tråd och öglenajtråd kostar mer per kilo men går fortare – på en större platta är det arbetstiden som avgör kostnaden, inte tråden. Vid riktigt stora ytor lönar sig en najmaskin." },

      { type: "p", text: "Använder du najmaskin blir åtgången per knut ofta mindre och jämnare, eftersom maskinen lindar samma längd varje gång. Maskintråden säljs på spolar som bara passar respektive fabrikat – räkna antal knutar per spole i stället för kilo." },

      { type: "h2", text: "Tips för ett snyggt resultat" },
      { type: "ul", items: [
        "Använd galvad eller plastbelagd tråd där betongytan blir synlig och täckskiktet är litet.",
        "Böj in trådändarna – en trådände i täckskiktet blir en rostprick i ytan.",
        "Förvara tråden torrt så att den inte rostar på rullen.",
        "Beställ lite extra – det är dyrare att stå utan tråd mitt i najningen.",
      ] },

      { type: "h2", text: "Beställ najtråd med armeringen" },
      { type: "p", text: "Det enklaste är att få tråd, distanser och armering i samma leverans. Lägg till najtråd när du begär pris på armeringen via [najtråd och tillbehör](/produkter/najtrad-och-tillbehor) eller [offertformuläret](/offert), så räknar vi med rätt mängd för ditt projekt." },
    ],
    faqs: [
      { q: "Vilken najtråd ska man använda till armering?", a: "Svart glödgad najtråd på cirka 1,0–1,6 mm är standard. Välj galvad eller plastbelagd tråd för synliga ytor och tunna täckskikt, och öglenajtråd om du najar med najsnurra." },
      { q: "Hur mycket najtråd går det åt per m²?", a: "Med s150 i ett lager och najning i varannan korsning blir det cirka 22 knutar per m². Med 0,3 m tråd per knut motsvarar det knappt 60 g 1,2 mm-tråd per m² och lager, plus spill." },
      { q: "Hur många meter najtråd är ett kilo?", a: "Ungefär 160 m för 1,0 mm, 113 m för 1,2 mm, 83 m för 1,4 mm och 63 m för 1,6 mm." },
      { q: "Är najtråd och bindtråd samma sak?", a: "Ja. Najtråd, bindtråd och armeringstråd används om samma mjuka ståltråd för att binda armering." },
    ],
    target: { href: "/produkter/najtrad-och-tillbehor", label: "Beställ najtråd och tillbehör" },
    category: "guider",
  },

  /* 78 */
  {
    slug: "lasa-armeringsritning",
    title: "Läsa armeringsritning – beteckningar, mått och förkortningar",
    metaTitle: "Läsa armeringsritning – beteckningar förklarade",
    metaDescription:
      "Så läser du en armeringsritning: Ø, s150, c/c, ök/uk, pos, täckskikt och exponeringsklass – med tolkat exempel. Skicka ritningen, vi gör specen.",
    excerpt:
      "En armeringsritning är kompakt – en rad som ”12 Ø12 s200 uk” säger allt om en hel armeringsgrupp. Här lär du dig läsa beteckningarna och hitta det som behövs för att beställa.",
    date: "2026-10-09",
    readingMinutes: 7,
    keywords: [
      "läsa armeringsritning",
      "armeringsritning beteckningar",
      "armeringsritning förkortningar",
      "s150 armering",
      "c/c armering",
      "ök uk armering",
      "tolka armeringsritning",
    ],
    content: [
      { type: "p", text: "Armeringsritningen är konstruktörens instruktion för var armeringen ska ligga. En rad som ”12 Ø12 s200 uk” betyder tolv järn med diametern 12 mm, 200 mm isär, i underkant. Nedan finns alla vanliga beteckningar i en tabell, ett tolkat exempel och de tre saker som oftast missas när armeringen beställs." },
      { type: "p", text: "Har du ritningen men ingen lista? Vi gör [armeringsspecifikationen från din ritning](/tjanster/armeringsspecifikation) – du behöver inte tolka varje detalj själv." },

      { type: "h2", text: "Vad finns på en armeringsritning?" },
      { type: "ul", items: [
        "Planer – armeringen sedd ovanifrån, ofta separat för underkant och överkant.",
        "Sektioner – snitt genom konstruktionen (t.ex. A-A) som visar lager, byglar och täckskikt.",
        "Detaljer – förstorade hörn, anslutningar och genomföringar.",
        "Armeringsförteckning eller positionstabell – alla positioner med Ø, form, mått och antal (finns inte alltid).",
        "Generella noter – betongklass, armeringsstål, täckskikt, exponeringsklass, skarvlängder och utförandeklass.",
      ] },

      { type: "h2", text: "De vanligaste beteckningarna" },
      { type: "table", head: ["Beteckning", "Betyder", "Exempel"], rows: [
        ["Ø", "Järnets diameter i mm", "Ø12 = 12 mm kamstål"],
        ["s / c/c", "Centrumavstånd mellan järnen i mm", "s150 = 150 mm mellan järnens centrum"],
        ["Antal före Ø", "Antal järn i gruppen", "6 Ø16 = sex järn Ø16"],
        ["uk / ök", "Underkant / överkant", "Ø10 s200 ök = i överkant"],
        ["Pos (siffra i ring)", "Positionsnummer – kopplar till förteckningen", "Pos 3 = position 3 i listan"],
        ["B500B / K500C-T", "Armeringsstålets klass", "Kamstål med sträckgräns 500 MPa"],
        ["C30/37", "Betongens hållfasthetsklass", "Tryckhållfasthet: cylinder 30 MPa, kub 37 MPa"],
        ["XC2, XC4, XD, XF …", "Exponeringsklass – miljön betongen utsätts för", "Styr täckskiktet"],
        ["c / tsk", "Täckskikt i mm", "c = 35 mm"],
        ["l₀ / skarv", "Skarvlängd", "Skarv 600 mm"],
        ["lb / lbd", "Förankringslängd", "Förankring 500 mm"],
        ["Bokstav vid formen (A, B, C, N …)", "Typform för bockning", "N = sluten bygel"],
      ], caption: "Beteckningarna kan variera mellan konstruktörer – läs alltid ritningens egna noter och teckenförklaring." },

      { type: "h2", text: "Exempel – så tolkar du en rad" },
      { type: "p", text: "Beteckningen ”12 Ø12 s200 uk, pos 4” betyder: tolv järn med diametern 12 mm, lagda med 200 mm centrumavstånd i plattans underkant, och de finns som position 4 i förteckningen med form och längd. Står det ”Ø10 s150 ök+uk” ska samma armering finnas i både över- och underkant. Står det ”2 lager” eller ”korsande” ligger järnen i två riktningar." },
      { type: "p", text: "Vid nät står ofta nätbeteckningen direkt, till exempel ”nät 8150” eller ”8x150” – tråd Ø8 med 150 mm maska. Där måste du också läsa ut överlapp och om nätet ska ligga i ett eller två lager." },

      { type: "h2", text: "Tre saker som ofta missas" },
      { type: "h3", text: "Täckskikt och exponeringsklass" },
      { type: "p", text: "Täckskiktet står ofta bara i de generella noterna, inte vid varje järn. Det avgör distansernas höjd och hur långa järnen kan vara i formen. Läs mer i [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },
      { type: "h3", text: "Skarvar och förankring" },
      { type: "p", text: "Ritningen anger var järnen får skarvas och hur långt de ska förankras. Missas det blir mängden för liten när armeringen beställs i stånglängder. Se [förankringslängd – tabell](/blogg/forankringslangd-armering)." },
      { type: "h3", text: "Mått: ytter- eller innermått?" },
      { type: "p", text: "Byglar och bockade järn anges normalt med yttermått per skänkel. Kontrollera alltid hur måttsättningen är gjord innan du räknar klipplängder." },

      { type: "h2", text: "Kontrollera ritningen innan du beställer" },
      { type: "ul", items: [
        "Har du senaste revideringen? Revisionsbokstaven står i ritningshuvudet.",
        "Stämmer planer och sektioner med varandra – samma Ø och c/c?",
        "Finns överkantsarmering, kantjärn och extra järn vid öppningar med?",
        "Är skarvlängd och förankring angivna eller hänvisade till en generell not?",
      ] },

      { type: "h2", text: "Från ritning till beställning" },
      { type: "p", text: "Ritningen visar var armeringen ska ligga. För att tillverka den behövs en förteckning med varje position: form, mått, Ø och antal. Finns den inte på ritningen måste den tas fram – det är vad som kallas armeringsspecifikation eller bockningslista. Hur en sådan ser ut visar vi i [armeringsspecifikation – exempel](/blogg/armeringsspecifikation-exempel)." },
      { type: "p", text: "Skicka din ritning (PDF, DWG eller foto) till oss via [armeringsspecifikation](/tjanster/armeringsspecifikation) eller [offertformuläret](/offert). Vi tar fram specifikationen, du godkänner den och vi tillverkar, märker per position och levererar i hela Sverige." },
    ],
    faqs: [
      { q: "Vad betyder s150 på en armeringsritning?", a: "s150 betyder att järnen ligger med 150 mm centrumavstånd (c/c). Ø12 s150 är alltså 12 mm kamstål med 150 mm mellan järnens mitt." },
      { q: "Vad betyder ök och uk?", a: "ök är överkant och uk är underkant av konstruktionen. Ø10 s200 ök betyder att armeringen ska ligga i överkant." },
      { q: "Vad är en position på armeringsritningen?", a: "En position (pos) är en unik armeringsdetalj med egen form, dimension och längd. Positionsnumret kopplar ritningen till förteckningen eller bockningslistan." },
      { q: "Kan ni beställa armering direkt från min ritning?", a: "Ja. Skicka ritningen så tar vi fram armeringsspecifikationen, som du godkänner innan tillverkning. Därefter får du offert på armeringen." },
    ],
    target: { href: "/tjanster/armeringsspecifikation", label: "Få armeringsspec från ritning" },
    category: "guider",
  },

  /* 79 */
  {
    slug: "armeringsspecifikation-exempel",
    title: "Armeringsspecifikation – exempel och mall att utgå från",
    metaTitle: "Armeringsspecifikation – exempel och mall",
    metaDescription:
      "Räknat exempel på armeringsspecifikation: positioner, typformer, klipplängder och vikt per dimension. Ladda ner mallen – eller låt oss göra specen.",
    excerpt:
      "Hur ser en färdig armeringsspecifikation ut? Här är ett räknat exempel för en kantbalk med raka järn, byglar och U-järn – kolumn för kolumn – och en mall att utgå från.",
    date: "2026-10-09",
    readingMinutes: 6,
    keywords: [
      "armeringsspecifikation exempel",
      "armeringsspecifikation mall",
      "exempel armeringsförteckning",
      "armeringsspec exempel",
      "armeringsförteckning mall",
      "vikt armeringsspecifikation",
    ],
    content: [
      { type: "p", text: "En armeringsspecifikation (armeringsspec, armeringsförteckning) är tabellen som översätter armeringsritningen till något som går att tillverka: varje position med form, mått, dimension, antal och vikt. Den är både tillverkningsunderlag och underlag för pris. Här visar vi hur en färdig spec ser ut och hur siffrorna hänger ihop." },
      { type: "p", text: "Vill du slippa göra den själv tar vi fram [armeringsspecifikationen från din ritning](/tjanster/armeringsspecifikation) – du godkänner den innan något tillverkas." },

      { type: "h2", text: "Kolumnerna i en armeringsspecifikation" },
      { type: "ul", items: [
        "Pos – positionsnummer, samma som på ritningen.",
        "Antal – hur många järn av positionen.",
        "Ø – dimension i mm.",
        "Typform – bokstavskod för formen (A = rak, B = vinkel, C = U-järn, N = sluten bygel osv.).",
        "Mått a, b, c … – längden på varje skänkel i mm.",
        "Längd/st – klipplängd för ett järn.",
        "Total längd och vikt – antal × längd × vikt per meter.",
        "Byggdel / etapp – var positionen ska monteras, för märkning och leverans.",
      ] },

      { type: "h2", text: "Exempel – kantbalk till en mindre platta" },
      { type: "p", text: "Exemplet nedan är förenklat men räknat på riktigt. Vikten per meter är 0,617 kg för Ø10 och 0,888 kg för Ø12." },
      { type: "table", head: ["Pos", "Antal", "Ø", "Typform", "Mått (mm)", "Längd/st", "Totalt", "Vikt"], rows: [
        ["1", "40", "12", "A", "a = 6000", "6 000 mm", "240,0 m", "213,1 kg"],
        ["2", "120", "10", "N", "a = 400, b = 200", "1 350 mm", "162,0 m", "100,0 kg"],
        ["3", "80", "10", "C", "a = 300, b = 400, c = 300", "960 mm", "76,8 m", "47,4 kg"],
        ["4", "24", "12", "B", "a = 600, b = 600", "1 176 mm", "28,2 m", "25,1 kg"],
        ["Summa", "", "", "", "", "", "", "385,5 kg"],
      ], caption: "Exempel: kantbalk med längsjärn (pos 1), slutna byglar (pos 2), U-järn (pos 3) och hörnjärn (pos 4). Klipplängden är räknad med avdrag för bockarna och tillägg för bygelns krokar." },

      { type: "h3", text: "Så räknas raderna" },
      { type: "ul", items: [
        "Pos 1: 40 × 6,0 m = 240 m × 0,888 kg/m = 213,1 kg.",
        "Pos 2: omkretsen 2 × (400 + 200) = 1 200 mm, minus 4 bockar à 20 mm, plus två 135°-krokar à cirka 115 mm = 1 350 mm.",
        "Pos 3: yttermåtten 300 + 400 + 300 = 1 000 mm, minus cirka 2 × Ø per 90°-bock (2 bockar × 20 mm) = 960 mm.",
        "Pos 4: 600 + 600 = 1 200 mm minus 2 × 12 mm = 1 176 mm.",
        "Vikten summeras per dimension och totalt – det är den som ligger till grund för priset.",
      ] },
      { type: "p", text: "Tumregeln för klipplängd och minsta bockningsradie finns i [bocka armeringsjärn](/blogg/bocka-armeringsjarn). Bokstavskoderna förklaras i [typformer A–XX](/blogg/typformer-armering)." },

      { type: "h2", text: "Sammanställning per dimension" },
      { type: "table", head: ["Dimension", "Total längd", "Vikt"], rows: [
        ["Ø10", "238,8 m", "147,3 kg"],
        ["Ø12", "268,2 m", "238,2 kg"],
        ["Totalt", "507,0 m", "385,5 kg"],
      ], caption: "Sammanställningen visar mängden per dimension – praktiskt för att jämföra offerter och planera leveransen." },

      { type: "h2", text: "Mall – så sätter du upp din egen spec" },
      { type: "p", text: "Vår [mall för bockningslista (CSV)](/bockningslista-mall.csv) har samma kolumner som exemplet och öppnas i Excel eller Google Kalkylark. Tips när du fyller i den:" },
      { type: "ol", items: [
        "Ge varje unik detalj ett eget positionsnummer – samma som på ritningen.",
        "Ange mått i mm och använd samma måttsättning (yttermått) genom hela listan.",
        "Skriv typformens bokstav i stället för att beskriva formen i ord.",
        "Dela upp per byggdel eller gjutetapp om leveransen ska komma i omgångar.",
        "Låt summeringen per dimension stå sist – det underlättar kontrollen.",
      ] },
      { type: "p", text: "Vill du bygga listan formen för formen med figur och mått, gör det i vårt verktyg för [bockningslista](/tjanster/bockningslista)." },

      { type: "h2", text: "Vanliga fel i en armeringsspecifikation" },
      { type: "ul", items: [
        "Skarvar glöms bort – mängden raka järn blir för liten.",
        "Innermått blandas med yttermått.",
        "Samma position förekommer två gånger med olika antal.",
        "Krokar på byglar saknas i längden.",
        "Täckskiktet är inte avdraget från formmåtten.",
      ] },

      { type: "p", text: "Kontrollera alltid summan mot ett överslag. En kantbalk på 40 meter med fyra längsjärn Ø12 kräver minst 160 m Ø12 plus skarvar – ligger specen långt under det har något fallit bort." },

      { type: "h2", text: "Låt oss göra specen" },
      { type: "p", text: "En spec tar tid och felen syns först på bygget. Skicka ritningen via [armeringsspecifikation](/tjanster/armeringsspecifikation) så räknar vi fram alla positioner, vikter och former. Du får den för godkännande tillsammans med [offert](/offert) på tillverkning och leverans i hela Sverige." },
    ],
    faqs: [
      { q: "Vad ska en armeringsspecifikation innehålla?", a: "Positionsnummer, antal, dimension (Ø), typform, mått per skänkel, klipplängd, total längd och vikt – gärna uppdelat per byggdel eller gjutetapp." },
      { q: "Hur räknar man vikten i en armeringsspecifikation?", a: "Antal × klipplängd i meter × vikt per meter för dimensionen. Ø10 väger 0,617 kg/m och Ø12 0,888 kg/m, så 40 järn Ø12 à 6 m väger 213,1 kg." },
      { q: "Är armeringsspecifikation samma sak som bockningslista?", a: "I praktiken ja. Båda listar varje position med form, mått, dimension och antal. Specifikationen innehåller ofta också vikter och uppdelning per byggdel." },
      { q: "Finns det en mall för armeringsspecifikation?", a: "Ja, vår bockningslista-mall i CSV-format har kolumnerna för position, antal, Ø, form och mått och kan öppnas i Excel." },
    ],
    target: { href: "/tjanster/armeringsspecifikation", label: "Få armeringsspec från ritning" },
    category: "guider",
  },
  /* 80 */
  {
    slug: "ilf-inlaggningsfardig-armering",
    title: "ILF – vad är inläggningsfärdig armering?",
    metaTitle: "Vad är ILF? Inläggningsfärdig armering förklarad",
    metaDescription:
      "ILF betyder inläggningsfärdig armering: kapad, bockad och märkt per position, klar för formen. Så fungerar flödet, när det lönar sig och vad vi behöver.",
    excerpt:
      "ILF är branschens förkortning för armering som kommer färdig att lägga in i formen. Här förklarar vi vad som ingår, hur flödet från ritning till bygge ser ut och när ILF lönar sig jämfört med raka järn.",
    date: "2026-10-09",
    readingMinutes: 6,
    keywords: [
      "vad är ilf armering",
      "inläggningsfärdig armering",
      "iläggningsfärdig armering",
      "ilf betyder",
      "ilf armering betydelse",
      "färdigbockad armering",
    ],
    content: [
      { type: "p", text: "ILF står för inläggningsfärdig armering – ibland skrivet iläggningsfärdig. Det är armering som har kapats och bockats efter en armeringsspecifikation, märkts per position och buntats så att den kan läggas direkt i formen utan bearbetning på bygget. Begreppet används av armeringsfabriker och entreprenörer i hela Sverige." },
      { type: "p", text: "Vi levererar [ILF-armering](/tjanster/ilf-armering) efter din ritning eller bockningslista, märkt och sorterad per byggdel." },

      { type: "h2", text: "ILF jämfört med raka järn" },
      { type: "table", head: ["", "Raka järn (rakstål)", "ILF-armering"], rows: [
        ["Leverans", "Stänger 6 eller 12 m", "Färdiga positioner enligt spec"],
        ["Kapning och bockning", "På bygget", "I fabrik, i maskin"],
        ["Märkning", "Ingen – järnen ser likadana ut", "Etikett per bunt: pos, Ø, form, antal"],
        ["Spill", "Kapspill på bygget", "Optimeras vid tillverkning"],
        ["Utrymme på bygget", "Plats för bockbord och lager", "Endast upplag för buntarna"],
        ["Passar för", "Små mängder, enkla raka järn", "Byglar, bockade järn, större mängder"],
      ] },

      { type: "h2", text: "Vad ingår i ILF?" },
      { type: "ul", items: [
        "Kapning till exakt klipplängd per position.",
        "Bockning i maskin med rätt dorndiameter enligt Eurokod 2.",
        "Märkning av varje bunt med etikett – positionsnummer, dimension, form, mått och antal.",
        "Sortering per byggdel, våning eller gjutetapp.",
        "Leverans enligt tidplan – en etapp i taget eller allt på en gång.",
      ] },
      { type: "p", text: "Svetsade korgar, nät och distanser räknas oftast inte som ILF i strikt mening men levereras gärna i samma leverans. Se även [armeringskorgar](/produkter/armeringskorgar)." },

      { type: "h2", text: "Flödet – från ritning till form" },
      { type: "ol", items: [
        "Konstruktören tar fram armeringsritningen.",
        "Ritningen översätts till en armeringsspecifikation – varje position med form, mått, Ø och antal.",
        "Specen godkänns och delas upp i leveranser efter byggets tidplan.",
        "Fabriken kapar, bockar och märker positionerna.",
        "Buntarna levereras till bygget, sorterade så att rätt armering ligger överst för rätt gjutning.",
        "Armerarna lägger in positionerna direkt enligt ritningen.",
      ] },
      { type: "p", text: "Saknas specifikationen är det första steget att ta fram den – läs mer i [läsa armeringsritning](/blogg/lasa-armeringsritning) eller låt oss göra den via [armeringsspecifikation](/tjanster/armeringsspecifikation)." },

      { type: "h2", text: "Fördelar med ILF" },
      { type: "ul", items: [
        "Kortare montagetid – armerarna lägger in i stället för att kapa och bocka.",
        "Jämnare kvalitet – maskinbockade former med rätt radie och mått.",
        "Mindre spill och mindre skrot att hantera på bygget.",
        "Färre fel – märkningen kopplar varje bunt till ritningen.",
        "Mindre yta och färre maskiner på arbetsplatsen.",
        "Enklare kontroll – det som levererats kan stämmas av mot specen.",
      ] },

      { type: "h2", text: "Märkningen – så läser du etiketten" },
      { type: "p", text: "Varje bunt får en etikett som kopplar den till specifikationen. Den innehåller normalt projekt eller byggdel, positionsnummer, dimension, typform med mått, antal järn och vikt. Armeraren tar fram rätt bunt för den position som ritningen visar – utan att mäta och jämföra järn. Kontrollera vid mottagningen att antalet buntar och positioner stämmer mot följesedeln." },

      { type: "h2", text: "Det här behöver leverantören av dig" },
      { type: "ul", items: [
        "Armeringsritning eller färdig specifikation – med senaste revidering.",
        "Önskad uppdelning: per byggdel, våning eller gjutetapp.",
        "Leveransadress, tidplan och vilka fordon som kan komma fram.",
        "Om lossning sker med kran på bilen eller med egen utrustning.",
        "Kontaktperson på plats som tar emot och kontrollerar leveransen.",
      ] },
      { type: "p", text: "Ju tydligare uppdelningen är från början, desto enklare blir det att leverera rätt armering till rätt gjutning – och att undvika att buntar för en senare etapp ligger i vägen." },

      { type: "h2", text: "När lönar sig ILF?" },
      { type: "p", text: "ILF lönar sig nästan alltid när armeringen innehåller byglar eller bockade järn i någon mängd, när arbetsplatsen är trång eller när tidplanen är pressad. För ett mindre jobb med några raka järn kan rakstål räcka. Gränsen beror mer på antalet former och positioner än på antalet ton – redan en villagrund med kantbalksbyglar har hundratals likadana bockade järn." },

      { type: "h2", text: "Vad kostar ILF?" },
      { type: "p", text: "ILF prissätts normalt per kilo eller ton, där stålpriset kompletteras med förädlingen – kapning, bockning, märkning – och frakten. Priset påverkas av mängd, andel bockade positioner och dimensioner. Exakt pris och leveranstid anges i offerten. Se också [vad kostar armering](/blogg/vad-kostar-armering)." },

      { type: "h2", text: "Beställ ILF-armering" },
      { type: "p", text: "Skicka ritning eller bockningslista till oss via [ILF-armering](/tjanster/ilf-armering) eller [offertformuläret](/offert). Vi tillverkar i B500B, märker varje position och levererar sorterat i hela Sverige – även till Norrland." },
    ],
    faqs: [
      { q: "Vad betyder ILF?", a: "ILF betyder inläggningsfärdig (iläggningsfärdig) armering – kapad, bockad, märkt och sorterad så att den kan läggas direkt i formen utan bearbetning på bygget." },
      { q: "Är ILF samma sak som klippt och bockad armering?", a: "I stort sett ja. ILF betonar att armeringen också är märkt och sorterad per position och byggdel, så att den kan läggas in direkt." },
      { q: "Vad behövs för att beställa ILF?", a: "En armeringsspecifikation eller bockningslista. Har du bara en konstruktionsritning kan vi ta fram specifikationen åt dig." },
      { q: "Kan ILF levereras i etapper?", a: "Ja. Specifikationen delas upp per byggdel eller gjutetapp och levereras efter byggets tidplan." },
    ],
    target: { href: "/tjanster/ilf-armering", label: "Beställ ILF-armering" },
    category: "guider",
  },

  /* 81 */
  {
    slug: "typformer-armering",
    title: "Typformer för armering A–XX – alla bockningsformer förklarade",
    metaTitle: "Typformer armering A–XX – bockningsformer",
    metaDescription:
      "Alla typformer för bockning av armering från A till XX: rak stång, vinkel, U-järn, byglar, hårnålar och rumsbockade former – med användning och mått.",
    excerpt:
      "I bockningslistor beskrivs varje armeringsform med en bokstav: A för rak stång, N för sluten bygel, S för hårnål. Här är hela systemet förklarat – form för form.",
    date: "2026-10-09",
    readingMinutes: 7,
    keywords: [
      "typformer armering",
      "bockningsformer armering",
      "typform bockning",
      "typformer bockningslista",
      "armering former",
      "bygel typform",
      "typform n armering",
    ],
    content: [
      { type: "p", text: "I svenska bockningslistor beskrivs armeringens form med en bokstavskod – en typform. I stället för att rita varje järn skriver man formens bokstav och måtten a, b, c och så vidare. Tillverkaren vet då exakt hur järnet ska bockas. Koderna är svensk branschpraxis och används av konstruktörer, armerare och bockverkstäder." },
      { type: "p", text: "Alla former finns med figur och måttfält i vårt verktyg för [bockningslista](/tjanster/bockningslista). Har du bara ritningen tar vi fram [armeringsspecifikationen åt dig](/tjanster/armeringsspecifikation) – med rätt typform för varje position." },

      { type: "figure", illustration: "bending-shapes", caption: "Några vanliga typformer: rak stång, vinkel, U-järn och sluten bygel." },

      { type: "h2", text: "Så fungerar koden" },
      { type: "ul", items: [
        "Bokstaven anger formen – t.ex. C = U-järn.",
        "Små bokstäver (a, b, c, d …) är längden på varje skänkel i mm.",
        "v, u och s är vinklar i grader där formen har sneda ben.",
        "Måtten anges normalt som yttermått. Klipplängden räknas fram av tillverkaren.",
      ] },

      { type: "h2", text: "Grupp 1–2: raka och enkelt bockade järn" },
      { type: "table", head: ["Kod", "Form", "Typisk användning"], rows: [
        ["A", "Rak stång", "Längsjärn, plattarmering, kantjärn"],
        ["B", "Vinkeljärn 90°", "Hörnjärn, anslutningar vägg–platta"],
        ["C", "U-järn", "Kantbalkar, ändförankring, randarmering"],
        ["D", "Vinkel med valfri vinkel", "Sneda anslutningar"],
        ["E", "Tråg med sneda ben", "Trappor, avfasade kanter"],
        ["F", "Spetsvinkel (tillbakabockad)", "Förankring vid kanter"],
        ["G", "Snedbockad stång", "Uppbockade järn i balkar och plattor"],
        ["EX", "Öppen bygel med sned sida", "Byglar i sneda tvärsnitt"],
      ] },

      { type: "h2", text: "Grupp 3–4: byglar och flerbockade järn" },
      { type: "table", head: ["Kod", "Form", "Typisk användning"], rows: [
        ["K", "Öppen bygel", "Kantbalkar, balkar som gjuts i etapper"],
        ["L", "Bygel med överlapp", "Byglar som skarvas i sidan"],
        ["LX", "Bygel med förlängt ben", "Byglar med förankring ut i plattan"],
        ["N", "Sluten bygel", "Balkar, pelare, kantbalkar – den vanligaste bygeln"],
        ["NX", "Sluten bygel med sned sida", "Sneda balktvärsnitt"],
        ["T", "Hattjärn", "Distansjärn mellan över- och underkant"],
        ["Z", "Z-järn", "Nivåskillnader, avsatser"],
        ["M", "Dubbelt snedbockad (sicksack)", "Specialarmering, galler"],
        ["SH", "Hårnål med kröpning", "Anslutningar med nivåskillnad"],
        ["J", "Symmetriskt snedbockad", "Uppbockade järn över stöd"],
        ["H", "Snedbockad med vinklade ändar", "Uppbockning med förankring"],
        ["U", "Sluten bygel, sexkantig", "Pelare och tvärsnitt med fasade hörn"],
        ["V", "Sluten bygel, fasade hörn", "Pelare med fas"],
        ["W", "Bygel med sned botten", "Byglar i lutande element"],
      ] },

      { type: "h2", text: "Grupp 5: hårnålar, öglor, bågar och rumsbockade former" },
      { type: "table", head: ["Kod", "Form", "Typisk användning"], rows: [
        ["S", "Hårnål", "Kantförstärkning, lyft- och förankringsjärn"],
        ["R", "Ögla", "Förankring och anslutningar"],
        ["SX", "Hårnål, rumsbockad", "Hörn och tredimensionella anslutningar"],
        ["Q", "Bågformad stång", "Runda väggar, pooler, brunnar"],
        ["O", "Spiral", "Pålar och runda pelare"],
        ["X", "Rumsbockad, ben åt olika håll", "Specialdetaljer"],
        ["XX", "Rumsbockad, ben åt samma håll", "Specialdetaljer"],
        ["Special", "Specialform enligt ritning", "Allt som inte passar en standardform"],
      ], caption: "Former och användning är vägledande. Form och mått för varje position anges på ritningen." },

      { type: "h2", text: "De former som används mest" },
      { type: "p", text: "I en vanlig villagrund eller ett mindre bostadsprojekt består större delen av armeringen av ett fåtal former: A (raka järn), B (hörnjärn), C (U-järn), N (slutna byglar) och ibland S (hårnålar). Rumsbockade former och spiraler förekommer främst i anläggning, pålar och prefab. Tänk också på att varje bockning kräver minsta dorndiameter – se [bocka armeringsjärn](/blogg/bocka-armeringsjarn)." },

      { type: "h2", text: "Ange typform rätt i listan" },
      { type: "ol", items: [
        "Välj den enklaste form som beskriver järnet.",
        "Fyll i alla mått formen kräver – inget mått får saknas.",
        "Ange yttermått och samma måttsättning i hela listan.",
        "Skriv vinklar i grader för sneda former.",
        "Passar ingen form – välj ”Special” och bifoga en skiss.",
        "Kontrollera att varje bock går att göra med minsta dorndiameter för dimensionen.",
      ] },
      { type: "p", text: "Hur en hel lista byggs upp, med vikter och summering, visar vi i [armeringsspecifikation – exempel](/blogg/armeringsspecifikation-exempel)." },

      { type: "h2", text: "Bygg din bockningslista med typformerna" },
      { type: "p", text: "Bygg listan själv i verktyget för [bockningslista](/tjanster/bockningslista) – alla typformer från A till XX finns där med figur och måttfält och som PDF. Har du bara en ritning gör vi [armeringsspecifikationen](/tjanster/armeringsspecifikation) åt dig. Skicka underlaget via [offertformuläret](/offert) – vi tillverkar och levererar märkt per position i hela Sverige." },
    ],
    faqs: [
      { q: "Vad är en typform för armering?", a: "En bokstavskod som beskriver hur ett armeringsjärn är bockat, t.ex. A för rak stång, C för U-järn och N för sluten bygel. Måtten anges med a, b, c och vinklar med v, u och s." },
      { q: "Vilken typform är en bygel?", a: "Den vanligaste slutna bygeln är typform N. Öppna byglar är K, byglar med överlapp L, och byglar med fasade hörn V eller U." },
      { q: "Vad betyder typform XX?", a: "XX är en rumsbockad form där benen pekar åt samma håll. X är motsvarande form med benen åt olika håll." },
      { q: "Var hittar jag alla typformer?", a: "I vårt verktyg för bockningslista finns alla former med figur och måttfält, och de kan laddas ner som PDF." },
    ],
    target: { href: "/tjanster/armeringsspecifikation", label: "Få armeringsspec från ritning" },
    category: "guider",
  },

  /* 82 */
  {
    slug: "b500b-k500c-t",
    title: "B500B eller K500C-T? Duktilitetsklass A, B och C förklarad",
    metaTitle: "B500B vs K500C-T – duktilitetsklasser A, B, C",
    metaDescription:
      "Skillnaden mellan B500B och K500C-T: duktilitetsklass A, B och C enligt Eurokod 2, kraven på töjning och sträckgräns, och när klass C får ersätta klass B.",
    excerpt:
      "På ritningen står B500B, på följesedeln K500C-T. Är det samma stål? Här reder vi ut duktilitetsklasserna A, B och C – och varför klass C alltid får ersätta B.",
    date: "2026-10-09",
    readingMinutes: 6,
    keywords: [
      "b500b k500c-t skillnad",
      "duktilitetsklass armering",
      "b500a b500b b500c",
      "duktilitetsklass b",
      "k500b-t",
      "armeringsstål klass c",
    ],
    content: [
      { type: "p", text: "B500B och K500C-T är två sätt att beskriva armeringsstål med sträckgräns 500 MPa. B500B är den europeiska beteckningen som konstruktören skriver på ritningen. K500C-T är den svenska produktbeteckningen enligt SS 212540, som står på leveransintyget. Skillnaden ligger i sista bokstaven: duktilitetsklassen." },
      { type: "p", text: "Vi levererar [armeringsjärn i B500B](/produkter/armeringsjarn) – raka, klippta eller bockade – med leveransintyg som visar stålets klass." },

      { type: "h2", text: "Vad är duktilitet?" },
      { type: "p", text: "Duktilitet är stålets förmåga att töjas och deformeras innan det går av. Ett segt stål ger varning – sprickor och nedböjning – innan brott, och klarar att krafter omfördelas i konstruktionen. Eurokod 2 (SS-EN 1992-1-1, bilaga C) delar in armeringsstål i tre duktilitetsklasser." },

      { type: "h2", text: "Klass A, B och C – tabell" },
      { type: "table", head: ["Egenskap", "Klass A", "Klass B", "Klass C"], rows: [
        ["Sträckgräns fyk", "400–600 MPa", "400–600 MPa", "400–600 MPa"],
        ["Kvot k = (ft/fy)k", "≥ 1,05", "≥ 1,08", "≥ 1,15 och < 1,35"],
        ["Töjning vid maxlast εuk", "≥ 2,5 %", "≥ 5,0 %", "≥ 7,5 %"],
        ["Typiskt", "Kallbearbetad tråd, nät", "Varmvalsat kamstål", "Varmvalsat kamstål med hög seghet"],
      ], caption: "Krav enligt SS-EN 1992-1-1 bilaga C (karakteristiska värden). Klass C är segast." },

      { type: "h2", text: "Så läser du beteckningarna" },
      { type: "ul", items: [
        "B500B – första B = armeringsstål, 500 = karakteristisk sträckgräns i MPa, sista B = duktilitetsklass B.",
        "B500C – samma hållfasthet, duktilitetsklass C.",
        "B500A – duktilitetsklass A, vanligt i kallbearbetad tråd och svetsade nät.",
        "K500B-T / K500C-T – svensk beteckning enligt SS 212540: K = kamstång, 500 = sträckgräns, B/C = duktilitetsklass, T = varmvalsat och värmebehandlat.",
        "Ks 400, Ks 500 – äldre svenska beteckningar som du kan stöta på i gamla ritningar.",
      ] },
      { type: "p", text: "Mer om stålet, vikter och längder i [armeringsstål – B500B](/blogg/armeringsstal)." },

      { type: "h2", text: "Får K500C-T användas när ritningen säger B500B?" },
      { type: "p", text: "Ja. Klass C uppfyller alla krav för klass B – och mer därtill – så stål i klass C får alltid ersätta klass B med samma sträckgräns. Det omvända gäller inte: står det B500C på ritningen får du inte leverera klass B. Det är därför K500C-T är vanligt i lager i Sverige: det täcker båda behoven. SS 212540 har även klassen AB, mellan A och B." },

      { type: "h2", text: "När spelar klassen roll för konstruktören?" },
      { type: "ul", items: [
        "Omfördelning av moment – Eurokod 2 tillåter mer omfördelning med klass B och C än med klass A.",
        "Plastisk analys utan kontroll av rotationskapacitet kräver klass B eller C.",
        "Seismisk dimensionering och konstruktioner som ska tåla stora deformationer kräver ofta klass C.",
        "Klass A används främst i nät och sekundär armering där kraven på seghet är lägre.",
      ] },

      { type: "figure", illustration: "rebar-diameters", caption: "Kamstål i olika dimensioner. Klassen syns inte på järnet – den framgår av valsmärkningen och leveransintyget." },

      { type: "h2", text: "Nät, tråd och ringar – andra klasser" },
      { type: "p", text: "Alla armeringsprodukter har inte samma klass. Svetsade nät tillverkas ofta av kallbearbetad tråd i klass A eller B, och armering i ringar för bockmaskiner kan vara antingen varm- eller kallvalsad. Det betyder inte att produkten är sämre – bara att konstruktören måste ha räknat med rätt klass. Står det B500B på ritningen för huvudarmeringen ska den levereras i minst klass B." },
      { type: "p", text: "Sträckgränsen är densamma, 500 MPa, i alla klasser som används i Sverige idag. Därför ger ett byte mellan B och C ingen skillnad i dimension eller vikt – Ø12 väger 0,888 kg/m oavsett klass. Det är bara segheten som skiljer." },

      { type: "h2", text: "Hur vet jag vilken klass jag fått?" },
      { type: "p", text: "Armeringsstål ska vara märkt med tillverkarens valsmärke – ett mönster i kammarna som identifierar verk och land – och levereras med leveransintyg (provningsintyg) som anger standard, klass och charge. Spara intygen; de behövs vid kontroll och egenkontroll. Dimensioner och vikt per meter finns i [armeringsjärn – dimensioner](/blogg/armeringsjarn-dimensioner)." },

      { type: "h2", text: "Beställ rätt klass" },
      { type: "p", text: "Ange stålklassen från ritningen när du begär pris – står inget särskilt gäller normalt B500B. Vi levererar [armeringsjärn](/produkter/armeringsjarn) och [klippt och bockad armering](/produkter/klippt-och-bockad) i B500B med intyg. Skicka ritning eller lista via [offert](/offert) så får du pris och leveransupplägg för hela Sverige." },
    ],
    faqs: [
      { q: "Vad är skillnaden mellan B500B och K500C-T?", a: "B500B är europeisk beteckning för armeringsstål med sträckgräns 500 MPa i duktilitetsklass B. K500C-T är den svenska beteckningen enligt SS 212540 för kamstång i klass C, som är segare och uppfyller kraven för B500B." },
      { q: "Får man använda klass C i stället för klass B?", a: "Ja. Klass C uppfyller kraven för klass B och får ersätta den. Klass B får däremot inte ersätta klass C." },
      { q: "Vad betyder duktilitetsklass?", a: "Hur mycket stålet kan töjas innan brott. Eurokod 2 kräver minst 2,5 % töjning vid maxlast för klass A, 5,0 % för klass B och 7,5 % för klass C." },
      { q: "Vad betyder T i K500C-T?", a: "T står för att stålet är varmvalsat och värmebehandlat, vilket ger hög hållfasthet med god seghet." },
    ],
    target: { href: "/produkter/armeringsjarn", label: "Beställ armeringsjärn B500B" },
    category: "guider",
  },

  /* 83 */
  {
    slug: "eurokod-2-armering",
    title: "Eurokod 2 och armering – reglerna du möter i praktiken",
    metaTitle: "Eurokod 2 armering – regler i praktiken",
    metaDescription:
      "Eurokod 2 för armering i praktiken: täckskikt, minimiarmering, max avstånd, bockningsradie, förankring, skarvar och byglar – med paragrafer och riktvärden.",
    excerpt:
      "Eurokod 2 styr hur betong och armering dimensioneras i Sverige. Här är de regler som faktiskt syns på bygget – täckskikt, avstånd, bockar, skarvar och byglar – samlade på ett ställe.",
    date: "2026-10-09",
    readingMinutes: 8,
    keywords: [
      "eurokod 2 armering",
      "eurokod 2",
      "ss-en 1992-1-1",
      "minimiarmering eurokod",
      "max avstånd armering",
      "armeringsregler betong",
      "eurokod 2 byglar",
    ],
    content: [
      { type: "p", text: "Eurokod 2 – SS-EN 1992-1-1 – är standarden för dimensionering av betongkonstruktioner. I Sverige tillämpas den tillsammans med Boverkets nationella val i EKS. Det mesta i standarden är konstruktörens arbete, men en rad regler syns direkt i armeringen: hur tjockt täckskiktet är, hur tätt järnen ligger, hur snävt de bockas och hur långt de skarvas." },
      { type: "p", text: "När armeringen är dimensionerad enligt Eurokod 2 levererar vi den – [armeringsjärn B500B](/produkter/armeringsjarn) raka eller klippta och bockade efter ritningen." },

      { type: "h2", text: "Standarderna kring armering" },
      { type: "table", head: ["Standard", "Gäller"], rows: [
        ["SS-EN 1992-1-1 (Eurokod 2)", "Dimensionering av betongkonstruktioner"],
        ["EKS (Boverket)", "Svenska nationella val till Eurokoderna"],
        ["SS-EN 10080", "Armeringsstål – allmänna krav"],
        ["SS 212540", "Svensk produktspecifikation för armeringsstål, t.ex. K500C-T"],
        ["SS-EN 13670", "Utförande av betongkonstruktioner – bl.a. armeringsarbete och toleranser"],
        ["SS-EN ISO 17660", "Svetsning av armeringsstål"],
      ] },

      { type: "h2", text: "Täckskikt (avsnitt 4.4)" },
      { type: "p", text: "Täckskiktet räknas som cnom = cmin + Δcdev. cmin är det största av kravet för vidhäftning (minst järnets diameter) och kravet för beständighet, som beror på exponeringsklass (XC, XD, XS, XF …) och konstruktionens livslängd. Δcdev är en tolerans för utförandet, normalt 10 mm. Mot förberedd mark (t.ex. avjämningsbetong) krävs minst 40 mm och direkt mot jord minst 75 mm. Mer i [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "figure", illustration: "cover-layer", caption: "Täckskiktet mäts från betongytan till närmaste armeringsjärn – ofta bygeln, inte huvudjärnet." },

      { type: "h2", text: "Avstånd mellan järnen (8.2 och 9.3)" },
      { type: "ul", items: [
        "Minsta fria avstånd mellan parallella järn: det största av Ø, stenstorlek + 5 mm och 20 mm – så att betongen kan flyta in och vibreras.",
        "Plattor, huvudarmering: största avstånd 3 × plattjocklek, högst 400 mm (rekommenderat värde).",
        "Plattor, fördelningsarmering: största avstånd 3,5 × plattjocklek, högst 450 mm.",
        "Vid koncentrerade laster eller största moment gäller tätare: 2h ≤ 250 mm respektive 3h ≤ 400 mm.",
      ] },

      { type: "h2", text: "Minimiarmering (9.2.1.1)" },
      { type: "p", text: "Balkar och plattor ska ha en minsta dragarmering för att inte spricka sprött: As,min = 0,26 · fctm / fyk · bt · d, dock minst 0,0013 · bt · d. För C25/30 (fctm = 2,6 MPa) och B500B blir det cirka 0,135 % av tvärsnittet bt · d. Största armeringsmängd är normalt 4 % av betongarean. För sprickbegränsning finns ett separat minimikrav – se [sprickarmering](/blogg/sprickarmering)." },

      { type: "h2", text: "Bockning, förankring och skarvar (8.3, 8.4, 8.7)" },
      { type: "table", head: ["Regel", "Riktvärde enligt Eurokod 2"], rows: [
        ["Minsta dorndiameter, Ø ≤ 16", "4 × Ø"],
        ["Minsta dorndiameter, Ø > 16", "7 × Ø"],
        ["Förankringslängd lb,rqd, C25/30, god vidhäftning", "≈ 40 × Ø för fullt utnyttjat B500B"],
        ["Minsta förankringslängd, drag", "max(0,3 · lb,rqd; 10Ø; 100 mm)"],
        ["Skarvlängd l₀", "Som förankringslängden × α6, där α6 = 1,0–1,5 beroende på andel skarvade järn i snittet"],
        ["Minsta skarvlängd", "max(0,3 · α6 · lb,rqd; 15Ø; 200 mm)"],
      ], caption: "Rekommenderade värden i SS-EN 1992-1-1:2005. EKS kan ange andra nationella värden – ritningen gäller." },
      { type: "p", text: "Tabell för alla dimensioner finns i [förankringslängd – tabell](/blogg/forankringslangd-armering)." },

      { type: "h2", text: "Byglar och pelare (9.2.2 och 9.5)" },
      { type: "ul", items: [
        "Balkar: största bygelavstånd i längdled 0,75 · d (för lodräta byglar).",
        "Pelare: längsgående järn minst Ø8 (rekommenderat värde), i rektangulära pelare minst fyra järn – ett i varje hörn.",
        "Pelarbyglar: diameter minst 6 mm eller Ø/4 av längsjärnen.",
        "Pelarbyglar: avstånd högst det minsta av 20 × minsta längsjärnets Ø, pelarens minsta mått och 400 mm. Nära balkar, plattor och skarvar multipliceras avståndet med 0,6.",
        "Byglar förankras med krokar eller svetsade tvärjärn.",
      ] },

      { type: "h2", text: "Ny generation Eurokod" },
      { type: "p", text: "En ny version av standarden, EN 1992-1-1:2023, är publicerad och ska införas i Sverige under de kommande åren. Fram till dess gäller SS-EN 1992-1-1:2005 med EKS. Vissa regler och tabellvärden ändras i den nya versionen – följ alltid den version konstruktören har dimensionerat efter. Fråga konstruktören om du är osäker på vilken som gäller i ditt projekt." },

      { type: "h2", text: "Från regler till leverans" },
      { type: "p", text: "Eurokod 2 avgör vad konstruktören skriver på ritningen. Vi tillverkar efter ritningen: rätt dimension, bockningsradie och längd per position. Beställ [armeringsjärn](/produkter/armeringsjarn) eller skicka hela underlaget via [offert](/offert) – leverans i hela Sverige." },
    ],
    faqs: [
      { q: "Vad är Eurokod 2?", a: "Eurokod 2, SS-EN 1992-1-1, är den europeiska standarden för dimensionering av betongkonstruktioner. I Sverige gäller den tillsammans med Boverkets nationella val i EKS." },
      { q: "Vilket avstånd får det vara mellan armeringsjärn i en platta?", a: "Enligt rekommenderade värden högst 3 × plattjockleken och 400 mm för huvudarmering och 3,5 × tjockleken och 450 mm för fördelningsarmering. Minsta fria avstånd är det största av Ø, stenstorlek + 5 mm och 20 mm." },
      { q: "Hur stort täckskikt kräver Eurokod 2?", a: "cnom = cmin + Δcdev, där cmin beror på exponeringsklass, livslängd och järnets diameter och Δcdev normalt är 10 mm. Mot förberedd mark krävs minst 40 mm, direkt mot jord minst 75 mm. Ritningen anger värdet." },
      { q: "Vad är minimiarmering enligt Eurokod 2?", a: "As,min = 0,26 · fctm / fyk · bt · d, men minst 0,0013 · bt · d. För C25/30 och B500B motsvarar det cirka 0,135 % av bt · d." },
    ],
    target: { href: "/produkter/armeringsjarn", label: "Beställ armeringsjärn B500B" },
    category: "guider",
  },

  /* 84 */
  {
    slug: "sprickarmering",
    title: "Sprickarmering – så begränsar armering krympsprickor i betong",
    metaTitle: "Sprickarmering – krympsprickor i betong",
    metaDescription:
      "Varför spricker betong och vad gör sprickarmering? Plastiska krympsprickor, uttorkningskrympning och temperatur – och hur armeringsnät fördelar sprickorna.",
    excerpt:
      "All betong krymper och nästan all betong spricker. Armering stoppar inte sprickorna – men den kan fördela dem till många små i stället för några stora. Så fungerar sprickarmering.",
    date: "2026-10-09",
    readingMinutes: 7,
    keywords: [
      "sprickarmering",
      "krympsprickor betong",
      "sprickfördelande armering",
      "krympsprickor betongplatta",
      "varför spricker betong",
      "sprickbegränsning armering",
    ],
    content: [
      { type: "p", text: "Betong krymper när den härdar och torkar, och den rör sig med temperaturen. När rörelsen hindras – av marken, av formen eller av anslutande delar – uppstår dragspänningar. Betongen tål lite drag, så den spricker. Sprickarmering, eller sprickfördelande armering, är armering som läggs för att styra hur betongen spricker." },
      { type: "p", text: "I plattor och golv är svetsat [armeringsnät](/produkter/armeringsnat) den vanligaste sprickarmeringen – jämnt fördelat stål nära ytan." },

      { type: "h2", text: "Fem sorters sprickor – och var armering hjälper" },
      { type: "table", head: ["Typ", "När", "Orsak", "Hjälper armering?"], rows: [
        ["Plastiska krympsprickor", "Första timmarna", "Ytan torkar ut innan betongen har härdat – sol, vind, värme", "Knappast – förebyggs med härdningsskydd"],
        ["Sättningssprickor", "Första timmarna", "Betongen sätter sig över armeringsjärn eller formkanter", "Nej – rätt täckskikt och vibrering"],
        ["Uttorkningskrympning", "Veckor till år", "Betongen avger vatten och krymper", "Ja – fördelar sprickorna"],
        ["Temperatursprickor", "Dagar till år", "Avsvalning efter härdning och årstidsväxlingar", "Ja – fördelar sprickorna"],
        ["Lastsprickor", "Vid belastning", "Böjning och drag från laster", "Ja – dimensioneras av konstruktören"],
      ] },

      { type: "h2", text: "Vad gör sprickarmering?" },
      { type: "p", text: "Armering kan inte hindra betongen från att krympa. Däremot håller den ihop betongen när den spricker, så att rörelsen fördelas på många fina sprickor i stället för en eller ett par breda. En spricka på 0,2 mm syns knappt och släpper inte igenom mycket vatten; en spricka på 2 mm gör det. Som exempel: om en 10 meter lång platta krymper 0,4 promille blir den 4 mm kortare – utan armering kan hela rörelsen samlas i en enda spricka." },

      { type: "h2", text: "Tunt och tätt är bättre än grovt och glest" },
      { type: "p", text: "För sprickfördelning är det inte bara mängden stål som räknas. Tunnare järn med litet avstånd ger fler och finare sprickor än grova järn långt isär – även med ungefär samma stålarea. Det är därför nät med 150 mm maska är så vanligt i golv." },
      { type: "table", head: ["Armering", "Stålarea per meter", "Kommentar"], rows: [
        ["Nät 5x150 (Ø5 s150)", "≈ 131 mm²/m", "Lätt sprickarmering, tunna plattor"],
        ["Nät 6x150 (Ø6 s150)", "≈ 189 mm²/m", "Vanligt i garage- och villagolv"],
        ["Nät 8x150 (Ø8 s150)", "≈ 335 mm²/m", "Plattor på mark, kraftigare krav"],
        ["Ø8 s150 lösa järn", "≈ 335 mm²/m", "Samma area som 8x150"],
        ["Ø12 s300 lösa järn", "≈ 377 mm²/m", "Mer stål men sämre sprickfördelning"],
        ["Nät 10x150 (Ø10 s150)", "≈ 524 mm²/m", "Industrigolv, höga krav"],
      ], caption: "Stålarea per meter och riktning = trådens area / c/c. Vilken armering som behövs avgör konstruktören." },

      { type: "h2", text: "Var ska sprickarmeringen ligga?" },
      { type: "p", text: "Sprickor börjar i den yta som krymper mest och torkar fortast – i en platta på mark oftast ovansidan. Sprickarmeringen ska därför ligga nära den yta där sprickorna ska begränsas, med det täckskikt ritningen anger. Ett nät som ligger på marken under plattan gör ingen nytta för ytsprickor. Mer om hur nät skarvas och läggs i [armeringsnät – storlekar och mått](/blogg/armeringsnat-storlekar-och-matt)." },

      { type: "figure", illustration: "mesh-overlap", caption: "Nätet ska överlappa vid skarvar – annars blir skarven en svag zon där sprickorna samlas." },

      { type: "h2", text: "Hur mycket sprickarmering? Eurokod 2" },
      { type: "p", text: "Eurokod 2 (avsnitt 7.3.2) anger en minsta armering för sprickbegränsning: As,min · σs = kc · k · fct,eff · Act. Den beror på betongens draghållfasthet, tvärsnittets dragna area och vilken spänning man tillåter i stålet – lägre spänning ger smalare sprickor men kräver mer stål. Vilken sprickbredd som accepteras styrs av exponeringsklass och livslängd. Beräkningen görs av konstruktören." },

      { type: "h2", text: "Det som hjälper lika mycket som armering" },
      { type: "ul", items: [
        "Härdning – håll ytan fuktig eller täckt de första dygnen. Det är det viktigaste mot plastiska krympsprickor.",
        "Betongrecept – lägre vattenhalt ger mindre krympning.",
        "Fogar – sågade eller gjutna fogar styr var sprickorna hamnar. Fogavstånd bestäms av konstruktören.",
        "Glidskikt – minska friktionen mot underlaget så att plattan kan röra sig.",
        "Undvik tvång – genomföringar, inspringande hörn och fasta anslutningar ger sprickor; förstärk med extra järn diagonalt i hörnen.",
      ] },
      { type: "p", text: "Fibrer i betongen är ett alternativ eller komplement i vissa golv – jämförelsen finns i [fiberarmering eller nät](/blogg/fiberarmering-eller-armeringsnat)." },

      { type: "h2", text: "Beställ sprickarmering" },
      { type: "p", text: "Vi levererar [armeringsnät](/produkter/armeringsnat) i standard- och specialformat, extra järn för hörn och genomföringar och distanser som håller nätet på rätt höjd. Skicka ritning eller mått via [offert](/offert) – leverans i hela Sverige." },
    ],
    faqs: [
      { q: "Förhindrar armering att betong spricker?", a: "Nej. Armeringen förhindrar inte att betongen krymper och spricker, men den fördelar sprickorna så att de blir många och fina i stället för få och breda." },
      { q: "Varför får en ny betongplatta krympsprickor?", a: "Oftast för att ytan torkar för snabbt de första timmarna (plastisk krympning) eller för att plattan krymper vid uttorkning och hindras att röra sig. Härdningsskydd, fogar och rätt placerad armering minskar problemet." },
      { q: "Var ska sprickarmering ligga i en platta?", a: "Nära den yta där sprickorna ska begränsas, i en platta på mark oftast ovansidan, med det täckskikt ritningen anger. Ett nät som ligger på marken gör ingen nytta mot ytsprickor." },
      { q: "Vilket nät används som sprickarmering?", a: "Vanligt är nät med 150 mm maska, t.ex. 6x150 eller 8x150. Tunna järn tätt fördelar sprickorna bättre än grova järn glest. Konstruktören avgör dimensionen." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    category: "guider",
  },

  /* 85 */
  {
    slug: "fiberarmering-eller-armeringsnat",
    title: "Fiberarmering eller armeringsnät – vad ska du välja?",
    metaTitle: "Fiberarmering vs armeringsnät – jämförelse",
    metaDescription:
      "Fiberarmering eller armeringsnät? Stålfiber, makro- och mikrofiber jämfört med nät: vad de klarar, dosering, för- och nackdelar och när de kombineras.",
    excerpt:
      "Fiberbetong blandas med fibrer direkt i betongbilen, nät läggs ut före gjutning. Här jämför vi fiberarmering och armeringsnät – vad de klarar och när vilket passar.",
    date: "2026-10-09",
    readingMinutes: 6,
    keywords: [
      "fiberarmering",
      "fiberarmering eller armeringsnät",
      "fiberbetong vs armering",
      "stålfiber betong",
      "fiberarmerad betong",
      "plastfiber betong",
    ],
    content: [
      { type: "p", text: "Fiberarmering betyder att korta fibrer av stål eller plast blandas in i betongen. Fibrerna fördelas i hela volymen och tar upp en del av dragkrafterna när betongen spricker. Armeringsnät är svetsade järn som läggs på ett bestämt ställe i tvärsnittet. Båda används i plattor och golv – men de fungerar olika." },
      { type: "p", text: "Behöver du konventionell armering till plattan levererar vi [armeringsnät](/produkter/armeringsnat) i standard- och specialformat, tillsammans med distanser och kantjärn." },

      { type: "h2", text: "Typer av fibrer" },
      { type: "table", head: ["Fiber", "Typisk dosering", "Används till"], rows: [
        ["Stålfiber", "ca 20–40 kg/m³", "Industrigolv, platta på mark, sprutbetong"],
        ["Makrofiber (syntetisk)", "ca 3–6 kg/m³", "Golv och plattor med lägre krav, sprutbetong"],
        ["Mikrofiber (polypropen)", "ca 0,6–0,9 kg/m³", "Mot plastiska krympsprickor och för brandskydd – inte bärande"],
      ], caption: "Doseringen bestäms av konstruktören och fibertillverkarens deklarerade prestanda. Fibrer för betong provas enligt SS-EN 14889." },

      { type: "h2", text: "Jämförelse: fiber och nät" },
      { type: "table", head: ["", "Armeringsnät", "Fiberarmering"], rows: [
        ["Placering", "Exakt läge i tvärsnittet", "Jämnt fördelat i hela volymen"],
        ["Arbete på bygget", "Läggs ut, skarvas och lyfts på distanser", "Inget armeringsarbete – kommer med betongen"],
        ["Dimensionering", "Eurokod 2 – välkänd metod", "Särskilda regler (i Sverige SS 812310)"],
        ["Sprickbredd", "Styrs av area och avstånd", "Bra fördelning, men svårare att begränsa breda sprickor"],
        ["Bärförmåga vid stora laster", "Hög – kan dimensioneras fritt", "Begränsad – ofta i kombination med järn"],
        ["Risk vid utförande", "Fel höjd om distanser saknas", "Ojämn inblandning, fibrer i ytan"],
        ["Ytan", "Ren yta", "Fibrer kan sticka upp – kräver rätt glättning"],
      ] },

      { type: "h2", text: "När passar fiberarmering?" },
      { type: "ul", items: [
        "Stora industrigolv där snabb gjutning och inga armeringsarbeten väger tungt.",
        "Platta på mark med jämnt fördelad last och utan stora punktlaster.",
        "Sprutbetong i tunnlar och bergförstärkning.",
        "Som komplement till nät eller järn – till exempel mikrofiber mot plastiska krympsprickor.",
      ] },

      { type: "h2", text: "När passar armeringsnät bättre?" },
      { type: "ul", items: [
        "Bärande konstruktioner – bjälklag, balkar, väggar och kantbalkar ska ha konventionell armering.",
        "Plattor med punktlaster, öppningar eller hörn som behöver förstärkning.",
        "När sprickbredden ska begränsas med säkerhet, t.ex. i garage, pooler och golv som ska vara täta.",
        "Mindre jobb där fiberbetong är svår att beställa i liten volym.",
        "När armeringen behöver dimensioneras enligt Eurokod 2.",
      ] },
      { type: "p", text: "Hur nät fördelar sprickor – och varför tunt och tätt är bättre än grovt och glest – står i [sprickarmering](/blogg/sprickarmering)." },

      { type: "h2", text: "Vanliga missförstånd" },
      { type: "ul", items: [
        "”Fiber gör betongen sprickfri” – nej, fibrer fördelar sprickor precis som armering, men betongen krymper ändå.",
        "”Mikrofiber ersätter nät” – nej, mikrofiber verkar främst de första timmarna och bär ingen last.",
        "”Mer fiber är alltid bättre” – för hög dosering försämrar arbetbarheten och kan ge fiberbollar.",
        "”Nät behöver inga distanser” – utan distanser hamnar nätet i botten och gör liten nytta.",
      ] },

      { type: "h2", text: "Kombinationen är vanlig" },
      { type: "p", text: "I många golv används båda: konventionell armering där lasterna är stora (kanter, pelare, fogar) och fibrer i ytan för att fördela krympsprickor. Fibrerna kan också minska nätmängden men ersätter den sällan helt i en konstruktion som bär last." },

      { type: "h2", text: "Så fungerar fibrerna" },
      { type: "p", text: "Fibrerna gör ingen nytta förrän betongen spricker. När en spricka öppnar sig korsas den av tusentals fibrer som dras ut ur betongen och håller ihop sprickans kanter. Förmågan att bära last efter uppsprickning kallas residualhållfasthet och är det mått som fiberbetong dimensioneras efter. Ett armeringsnät verkar på samma sätt, men koncentrerat i ett lager – med mycket högre bärförmåga per spricka där nätet ligger." },
      { type: "p", text: "Det är också förklaringen till varför fiber inte passar överallt: i en bärande balk eller ett bjälklag måste armeringen ligga där dragkraften är störst, och där är ett järn eller nät effektivare än fibrer spridda i hela volymen." },

      { type: "h2", text: "Kostnaden – vad ska jämföras?" },
      { type: "p", text: "Fiber flyttar kostnaden från armeringsarbete till betongpris. Jämför därför totalkostnaden: nät plus distanser plus läggning mot fibertillägg per kubikmeter plus eventuell extra ytbehandling. För en villaplatta är nät oftast enklast; för ett stort industrigolv kan fiber vinna. Mängden nät per m² räknar du i [armeringsnät – storlekar och mått](/blogg/armeringsnat-storlekar-och-matt)." },

      { type: "h2", text: "Beställ armeringsnät" },
      { type: "p", text: "Har du bestämt dig för nät – eller en kombination – levererar vi [armeringsnät](/produkter/armeringsnat), kantjärn och distanser till samma leverans i hela Sverige. Skicka mått eller ritning via [offert](/offert)." },
    ],
    faqs: [
      { q: "Kan fiberarmering ersätta armeringsnät?", a: "I vissa golv och plattor på mark med jämnt fördelad last, ja – om det är dimensionerat. I bärande konstruktioner och där sprickbredden ska begränsas med säkerhet behövs konventionell armering." },
      { q: "Hur mycket stålfiber blandas i betongen?", a: "Typiskt cirka 20–40 kg stålfiber per kubikmeter i golv och plattor på mark. Doseringen bestäms av konstruktören." },
      { q: "Hjälper plastfiber mot sprickor?", a: "Mikrofiber av polypropen minskar plastiska krympsprickor de första timmarna men tar inte upp laster. Makrofiber ger viss bärförmåga efter uppsprickning." },
      { q: "Vilket är billigast – fiber eller nät?", a: "Det beror på projektet. Fiber sparar armeringsarbete men höjer betongpriset. Jämför totalkostnaden för material, arbete och ytbehandling." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    category: "guider",
  },

  /* 86 */
  {
    slug: "kompositarmering-gfrp",
    title: "Kompositarmering (GFRP) eller stål – för- och nackdelar",
    metaTitle: "Kompositarmering GFRP vs stål – jämförelse",
    metaDescription:
      "Kompositarmering av glasfiber (GFRP) jämfört med armeringsstål: vikt, hållfasthet, E-modul, korrosion, bockning och regelverk – och när vilket passar.",
    excerpt:
      "Glasfiberarmering rostar inte och väger en fjärdedel av stål. Men den är mjukare, kan inte bockas på bygget och dimensioneras med andra regler. Här är jämförelsen.",
    date: "2026-10-09",
    readingMinutes: 6,
    keywords: [
      "kompositarmering",
      "glasfiberarmering",
      "gfrp armering",
      "kompositarmering vs stål",
      "glasfiberarmering för och nackdelar",
      "frp armering",
    ],
    content: [
      { type: "p", text: "Kompositarmering är armeringsstänger av fibrer i en plastmatris, oftast glasfiber (GFRP – glass fibre reinforced polymer). Den marknadsförs som ett lätt och rostfritt alternativ till stål. För vissa tillämpningar är den det – men egenskaperna skiljer sig så mycket från stål att den inte kan bytas rakt av." },
      { type: "p", text: "För plattor, grunder och golv är stål fortfarande standard. Vi levererar [armeringsnät](/produkter/armeringsnat) och kamstål B500B dimensionerat enligt Eurokod 2." },

      { type: "h2", text: "Jämförelse: GFRP och armeringsstål" },
      { type: "table", head: ["Egenskap", "Armeringsstål B500B", "Glasfiberarmering (GFRP)"], rows: [
        ["Densitet", "7 850 kg/m³", "ca 2 000 kg/m³ (ungefär 1/4)"],
        ["Vikt Ø12", "0,888 kg/m", "ca 0,2–0,25 kg/m"],
        ["Draghållfasthet", "Sträckgräns 500 MPa", "Hög, ofta 600–1 000 MPa eller mer"],
        ["E-modul (styvhet)", "ca 200 GPa", "ca 40–60 GPa"],
        ["Brottbeteende", "Flyter och töjs före brott", "Linjärt elastisk till sprött brott"],
        ["Korrosion", "Rostar om täckskiktet är otillräckligt", "Rostar inte"],
        ["Bockning", "Kan bockas kallt", "Kan inte bockas på bygget – bockade former tillverkas i fabrik"],
        ["Värme och brand", "Tappar hållfasthet först vid flera hundra grader", "Plastmatrisen mjuknar redan vid cirka 100–150 °C"],
        ["Elektrisk/magnetisk", "Leder ström, magnetisk", "Isolerande, omagnetisk"],
        ["Regelverk i Sverige", "Eurokod 2", "Ingår inte i SS-EN 1992-1-1:2005 – särskild dimensionering"],
      ], caption: "Värden för GFRP varierar mellan fabrikat – använd tillverkarens deklarerade värden." },

      { type: "h2", text: "Fördelar med kompositarmering" },
      { type: "ul", items: [
        "Ingen korrosion – intressant i saltmiljö, vid avisningssalt och i havsnära konstruktioner.",
        "Låg vikt – lätt att bära och hantera.",
        "Omagnetisk och isolerande – används nära MR-utrustning, transformatorer och mätinstrument.",
        "Går att såga igenom – t.ex. i tillfälliga väggar som ska borras av tunnelborrmaskiner.",
      ] },

      { type: "h2", text: "Nackdelar och fallgropar" },
      { type: "ul", items: [
        "Låg E-modul – en platta med GFRP böjer ned och spricker mer än med samma area stål, om den inte dimensioneras för det.",
        "Inget flytområde – ingen varning före brott, vilket kräver högre säkerhetsmarginaler.",
        "Bockade former måste beställas färdiga; byglar och krokar kan inte göras på plats.",
        "Sämre egenskaper vid brand.",
        "Ingår inte i Eurokod 2 i den version som tillämpas i Sverige. Nya EN 1992-1-1:2023 har en informativ bilaga (R) för FRP-armering, men den är ännu inte införd här. Idag dimensioneras GFRP efter t.ex. amerikanska ACI 440 eller tillverkarens produktgodkännande.",
        "Byte ”järn mot järn” utan beräkning är fel – samma diameter ger inte samma funktion.",
      ] },

      { type: "p", text: "GFRP finns också som nät, som ibland säljs till privatpersoner som ersättning för stålnät i plattor. Samma sak gäller där: utan beräkning går det inte att byta rakt av, och plattan blir mjukare än med stålnät." },

      { type: "h2", text: "När är GFRP rätt val?" },
      { type: "p", text: "Där korrosion eller magnetism är det avgörande problemet och en konstruktör har dimensionerat för det: kajer och bryggor, broöverbyggnader i saltmiljö, specialrum för medicinsk utrustning och tillfälliga konstruktioner som ska kapas. För en villagrund, ett garage eller ett vanligt golv finns sällan skäl att välja bort stål – rätt täckskikt räcker för att skydda armeringen. Läs om täckskiktet i [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "h2", text: "Varför E-modulen spelar så stor roll" },
      { type: "p", text: "Armeringen gör nytta först när betongen spricker och stålet börjar töjas. Stål är ungefär fyra gånger styvare än glasfiber. Med samma stålarea och samma last töjs GFRP därför ungefär fyra gånger mer – sprickorna blir bredare och plattan böjer ned mer. För att kompensera behövs ofta mer armering, eller grövre dimensioner, än med stål. Det äter upp en del av viktfördelen och kräver en konstruktör som kan materialet." },
      { type: "p", text: "Även temperaturrörelsen skiljer sig. Stål och betong utvidgar sig nästan lika mycket vid uppvärmning, medan GFRP rör sig annorlunda på tvären. Det är en av anledningarna till att täckskikt och avstånd ofta ökas med kompositarmering." },

      { type: "h2", text: "Alternativ om rost är oron" },
      { type: "ul", items: [
        "Större täckskikt och tätare betong – det normala sättet att skydda stål.",
        "Rostfri armering i de mest utsatta zonerna – se [rostfri armering](/blogg/rostfri-armering).",
        "Begränsa sprickbredden med tätare armering – se [sprickarmering](/blogg/sprickarmering).",
      ] },

      { type: "h2", text: "Beställ stålarmering" },
      { type: "p", text: "För de allra flesta plattor och grunder är stål det säkra valet. Vi levererar [armeringsnät](/produkter/armeringsnat), kamstål och distanser i hela Sverige – skicka mått eller ritning via [offert](/offert)." },
    ],
    faqs: [
      { q: "Är kompositarmering bättre än stål?", a: "Inte generellt. GFRP rostar inte och är lätt, men är betydligt mjukare än stål, saknar flytområde och kan inte bockas på bygget. Den passar specialfall som saltmiljö och omagnetiska konstruktioner." },
      { q: "Kan man byta stålarmering mot glasfiberarmering i samma dimension?", a: "Nej, inte utan ny dimensionering. E-modulen är bara cirka 20–30 % av stålets, så nedböjning och sprickor blir större med samma area." },
      { q: "Får glasfiberarmering användas enligt Eurokod 2?", a: "Inte i SS-EN 1992-1-1:2005, som gäller i Sverige idag. Den nya versionen EN 1992-1-1:2023 har en informativ bilaga för FRP-armering, men tills den införs dimensioneras GFRP efter t.ex. ACI 440 eller tillverkarens produktgodkännande." },
      { q: "Kan man bocka glasfiberarmering?", a: "Inte på bygget. Bockade former som byglar och vinklar tillverkas i fabrik innan plasten härdar." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    category: "guider",
  },

  /* 87 */
  {
    slug: "rostfri-armering",
    title: "Rostfri armering – när behövs den och vad är alternativen?",
    metaTitle: "Rostfri armering – när behövs den?",
    metaDescription:
      "När behövs rostfri armering? Stålsorter som 1.4301, 1.4436 och duplex 1.4362, typiska användningsområden i saltmiljö och vilka alternativ som ofta räcker.",
    excerpt:
      "Rostfri armering används där kloridangrepp eller lång livslängd gör vanligt stål för riskabelt. Här är stålsorterna, när de behövs – och när större täckskikt räcker.",
    date: "2026-10-09",
    readingMinutes: 6,
    keywords: [
      "rostfri armering",
      "rostfritt armeringsstål",
      "rostfri armering när",
      "duplex armering",
      "armering saltmiljö",
      "rostfria armeringsjärn",
    ],
    content: [
      { type: "p", text: "Vanligt armeringsstål skyddas av betongen. Det basiska porvattnet bildar en skyddande hinna på stålet, och så länge täckskiktet är tätt och tillräckligt tjockt rostar inte armeringen. Men klorider från havsvatten och vägsalt kan tränga in och bryta skyddet. Rostfri armering är ett sätt att göra konstruktionen okänslig för det." },
      { type: "p", text: "Rostfri armering är en specialprodukt. Står den på din ritning – [fråga oss](/armeringsleverantor) så hjälper vi dig med upplägget för hela leveransen, inklusive vanligt kamstål B500B." },

      { type: "h2", text: "När behövs rostfri armering?" },
      { type: "ul", items: [
        "Broar, kantbalkar och parkeringsdäck som utsätts för vägsalt (exponeringsklass XD3).",
        "Kajer, bryggor och konstruktioner i havsvatten eller skvalpzon (XS3).",
        "Konstruktioner med mycket lång avsedd livslängd där reparation är svår.",
        "Tunna element där tillräckligt täckskikt inte får plats.",
        "Infästningar som går genom isolering, t.ex. balkonginfästningar och köldbryggebrytare.",
        "Reparationer där ny armering läggs i gammal, kloridförorenad betong.",
      ] },

      { type: "h2", text: "Vanliga stålsorter" },
      { type: "table", head: ["Stålsort", "Typ", "Korrosionsmotstånd", "Används till"], rows: [
        ["1.4301 (304)", "Austenitiskt", "Gott", "Måttlig kloridmiljö, infästningar"],
        ["1.4362 (duplex 2304)", "Duplex", "Gott–mycket gott", "Broar och parkeringsdäck"],
        ["1.4401 / 1.4436 (316)", "Austenitiskt med molybden", "Mycket gott", "Saltmiljö, havsnära konstruktioner"],
        ["1.4462 (duplex 2205)", "Duplex", "Utmärkt", "Svåraste kloridmiljöerna"],
      ], caption: "Översikt. Stålsort och hållfasthet väljs av konstruktören efter miljö och livslängd." },

      { type: "h2", text: "Rostfritt bara där det behövs" },
      { type: "p", text: "Rostfri armering kostar flera gånger mer per kilo än vanligt kamstål. Därför används den ofta bara i den yttersta armeringen mot den utsatta ytan – till exempel ovansidan av ett brodäck – medan resten av konstruktionen armeras med B500B. Konstruktören avgör var gränsen går." },
      { type: "p", text: "Hållfastheten hos rostfri armering ligger i samma storleksordning som hos vanligt kamstål, och vikten per meter är nästan densamma. Dimensioner och c/c-avstånd påverkas därför sällan. Det som ändras är främst priset per kilo och hanteringen. Livscykelkostnaden kan ändå bli lägre om det rostfria sparar en dyr reparation längre fram, till exempel betongreparation av ett parkeringsdäck under pågående drift." },

      { type: "h2", text: "Alternativ som ofta räcker" },
      { type: "table", head: ["Åtgärd", "Effekt"], rows: [
        ["Större täckskikt", "Längre väg för klorider in till stålet – det vanligaste skyddet"],
        ["Tätare betong (lägre vct)", "Långsammare inträngning av klorider och koldioxid"],
        ["Sprickbegränsning", "Smala sprickor ger mindre inträngning"],
        ["Ytskydd och tätskikt", "Hindrar salt från att nå betongen"],
        ["Galvaniserad armering", "Fördröjer korrosion, används i vissa element"],
      ] },
      { type: "p", text: "För villagrunder, garage och vanliga golv räcker korrekt täckskikt och betongkvalitet – se [distanser och täckskikt](/blogg/distanser-tackskikt-armering). Om kompositarmering som alternativ: [kompositarmering (GFRP) eller stål](/blogg/kompositarmering-gfrp)." },

      { type: "h2", text: "Varför rostar armering i betong?" },
      { type: "p", text: "Två mekanismer dominerar. Karbonatisering är när koldioxid från luften sänker betongens pH från ytan och inåt; när fronten når stålet försvinner skyddet. Kloridangrepp är när salt tränger in och lokalt bryter skyddshinnan, ofta med gropfrätning som följd. Rosten tar större plats än stålet, så betongen spricker och skalar av. I inomhusmiljö och torr betong går förloppet mycket långsamt – i saltmiljö kan det gå på några decennier." },
      { type: "p", text: "Exponeringsklassen på ritningen visar vilken risk konstruktören har räknat med: XC för karbonatisering, XD för klorider från annat än havsvatten (t.ex. vägsalt) och XS för havsvatten. Rostfri armering blir aktuell främst i de högre XD- och XS-klasserna." },

      { type: "h2", text: "Att tänka på vid montage" },
      { type: "ul", items: [
        "Använd rostfri eller plastbelagd najtråd mot rostfria järn.",
        "Håll isär rostfritt och vanligt stål vid lagring och kapning – slipdamm från kolstål ger rostfläckar.",
        "Bockning och svetsning följer tillverkarens anvisningar för stålsorten.",
        "Märk positionerna tydligt så att rostfritt hamnar där ritningen anger.",
      ] },

      { type: "h2", text: "Checklista – behöver ditt projekt rostfritt?" },
      { type: "ol", items: [
        "Vilken exponeringsklass anger ritningen? XD3 eller XS3 är en signal.",
        "Hur lång är den avsedda livslängden – 50 eller 100 år?",
        "Går det att få plats med det täckskikt som krävs för vanligt stål?",
        "Hur dyrt och svårt blir det att reparera konstruktionen senare?",
      ] },
      { type: "p", text: "Svaret på frågorna ger konstruktören underlag för att välja mellan större täckskikt, tätare betong, rostfritt i ytzonen eller en kombination." },

      { type: "h2", text: "Fråga oss om armeringen" },
      { type: "p", text: "Har ditt projekt rostfri armering i delar av konstruktionen levererar vi gärna resten – kamstål, klippt och bockat, nät och korgar. [Fråga oss](/armeringsleverantor) om upplägget eller skicka ritningen via [offert](/offert) så återkommer vi med vad vi kan leverera och till vilket pris." },
    ],
    faqs: [
      { q: "När behövs rostfri armering?", a: "Främst i konstruktioner som utsätts för klorider från vägsalt eller havsvatten, som broar, parkeringsdäck och kajer, och där lång livslängd eller tunt täckskikt gör vanligt stål riskabelt. Konstruktören avgör." },
      { q: "Behövs rostfri armering i en villagrund?", a: "Nej, normalt inte. Rätt täckskikt och betongkvalitet skyddar vanligt armeringsstål i villagrunder, garage och golv." },
      { q: "Vilken rostfri stålsort används till armering?", a: "Vanliga sorter är austenitiska 1.4301 och 1.4436 samt duplexstålen 1.4362 och 1.4462. Duplex används ofta i broar och kloridutsatta konstruktioner." },
      { q: "Kan man blanda rostfri och vanlig armering?", a: "Ja, det är vanligt att bara den yttersta armeringen mot den utsatta ytan är rostfri. Konstruktören anger var respektive stål ska ligga." },
    ],
    target: { href: "/armeringsleverantor", label: "Fråga oss om armering" },
    category: "guider",
  },
];
