/** Plan: docs/PLAN-sidor-2026-10.md – våg 3, punkt 60–74 ("armering till …", del 2). */
import type { Post } from "@/config/blog";

const D = "2026-10-09";

export const armeringTill2: Post[] = [
  // 60. Lagerhall
  {
    slug: "armering-till-lagerhall",
    title: "Armering till lagerhall – grund, golv och pelarfundament",
    metaTitle: "Armering lagerhall – grund, golv & fundament",
    metaDescription:
      "Armering till lagerhall: pelarfundament, kantbalkar och golv för truck och ställage. Typlösningar, mängdexempel och leverans per etapp. Begär offert.",
    excerpt:
      "En lagerhall har tre armerade delar: fundament under stommen, kantbalkar eller sulor under väggarna och en golvplatta som ska tåla truckar och ställage. Så hänger de ihop.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "armering lagerhall",
      "grund lagerhall armering",
      "lagerhall betonggolv armering",
      "pelarfundament lagerhall",
      "armering hallbyggnad",
      "grund till lagerhall",
    ],
    content: [
      { type: "p", text: "En lagerhall armeras i tre delar: fundament under stommens pelare, kantbalkar under väggarna och en golvplatta som tål truckar och pallställ. Golvet står ofta för den största mängden armering och för de flesta problemen."  },
      { type: "p", text: "Till hallbyggen levererar vi hela paketet som [armeringsleverantör](/armeringsleverantor): färdiga korgar till fundamenten, bockade järn till kantbalkarna och nät till golvet – sorterat per etapp, så att rätt armering kommer till rätt gjutning."  },

      { type: "h2", text: "Tre delar som armeras olika"  },
      { type: "p", text: "Grunden till en lagerhall delas normalt upp i tre konstruktionsdelar. Var och en har sin egen typ av armering och sin egen roll."  },
      { type: "table", head: ["Del", "Uppgift", "Typisk armering"], rows: [
        ["Pelarfundament (plintar)", "Tar stommens punktlaster och fästbultar", "Plintkorg eller bottenmatta Ø12–Ø20 i två riktningar, byglar, ingjutna bultar"],
        ["Kantbalk / grundsula", "Bär väggar, tar vind och frostlast", "Längsjärn Ø12–Ø16 + byglar Ø8–Ø10, förankring mot golvplattan"],
        ["Golvplatta", "Truckar, ställage, krympning", "Nät i en eller två lager, ofta Ø8–Ø12 c/c 150, alternativt stålfiber"],
      ], caption: "Typvärden för vanliga lagerhallar – konstruktören avgör dimension och c/c i varje projekt." },

      { type: "h2", text: "Pelarfundament – där lasten koncentreras"  },
      { type: "p", text: "Stålpelarna står på separata fundament med ingjutna ankarbultar. Fundamentet sprider pelarlasten ut i marken och tar dessutom moment och lyftkrafter från vind. Armeringen läggs som en bottenmatta i båda riktningar, ofta kompletterad med en överkantsmatta och byglar som håller ihop fundamentet."  },
      { type: "p", text: "Har hallen tjugo eller fyrtio likadana fundament lönar det sig att beställa färdiga korgar. Bultgrupperna ska passa korgen – lämna därför bultritningen tillsammans med armeringsritningen så att inga järn krockar med bultarna."  },

      { type: "h2", text: "Kantbalk och sula under väggarna"  },
      { type: "p", text: "Längs fasaden gjuts en kantbalk eller en grundsula. Den ska bära väggarnas egenvikt, ta upp vindlast och skydda mot tjällyftning. Armeringen är längsgående kamjärn med byglar, och vid hörn och skarvar läggs vinkeljärn så att balken fungerar som en enhet runt hela hallen."  },

      { type: "h2", text: "Golvplattan – truckar och ställage"  },
      { type: "p", text: "Det är golvet som oftast ger problem i en lagerhall. Plattan utsätts för krympning, temperaturrörelser och koncentrerade laster från ställageben och truckhjul. Armeringen har två uppgifter: att fördela laster och att hålla nere sprickbredderna."  },
      { type: "ul", items: [
        "Ställageben ger höga punktlaster – plattans tjocklek och armering ska dimensioneras för dem, inte bara för en jämnt utbredd last.",
        "Truckar med hårda hjul belastar fogar och kanter – fogarnas utformning är lika viktig som själva armeringen.",
        "Stora fogfria ytor kräver mer armering för att begränsa krympsprickor.",
        "Ett alternativ är stålfiberbetong, ibland kombinerat med nät vid fogar och kanter.",
      ] },
      { type: "p", text: "Mer om golvplattans val mellan nät och fiber finns i guiden om [armering till betonggolv](/blogg/armering-till-betonggolv)."  },

      { type: "h2", text: "Räkneexempel: golv på 2 000 m²"  },
      { type: "p", text: "Golvet dominerar mängden. Vikt per m² för ett lager i två riktningar räknas som 2 × vikt per meter ÷ c/c:"  },
      { type: "table", head: ["Golvarmering", "kg/m² (ett lager)", "2 000 m², ett lager", "2 000 m², två lager"], rows: [
        ["Ø8 c/c 150", "≈ 5,3", "≈ 10,5 t", "≈ 21 t"],
        ["Ø10 c/c 150", "≈ 8,2", "≈ 16,5 t", "≈ 33 t"],
        ["Ø12 c/c 150", "≈ 11,8", "≈ 23,7 t", "≈ 47 t"],
      ], caption: "Exklusive överlapp (räkna 10–15 % extra). Fundament och kantbalkar räknas per position i bockningslistan." },
      { type: "p", text: "Exemplet visar hur snabbt valet av dimension slår igenom på ett stort golv. Därför lönar det sig att låta konstruktören jämföra nät, två lager och fiber innan armeringen beställs."  },

      { type: "h2", text: "Leverans i etapper"  },
      { type: "p", text: "På en hallbyggnad gjuts fundamenten först, sedan kantbalkarna och sist golvet – ofta med veckors mellanrum. Därför är det praktiskt att få armeringen levererad i samma ordning, sorterad och märkt per etapp. Det minskar upplag på bygget och sparar tid vid montaget."  },

      { type: "h2", text: "Skicka underlaget – få offert per etapp" },
      { type: "ul", items: [
        "Armeringsritningar eller bockningslistor för fundament, kantbalkar och golv.",
        "Bultritning för pelarfundamenten.",
        "Tidplan för gjutningarna och leveransadress.",
      ] },
      { type: "p", text: "Saknas bockningslista tar vi fram den från ritningen. Skicka underlaget via [offertformuläret](/offert) så får du en offert uppdelad på fundament, kantbalkar och golv, med frakt beräknad efter mängd och ort. Mer om hur vi jobbar med entreprenörer finns under [armeringsleverantör](/armeringsleverantor)." },
    ],
    faqs: [
      { q: "Vilken armering behövs i en lagerhall?", a: "Pelarfundament med korgar eller bottenmattor, kantbalkar eller sulor med längsjärn och byglar samt en golvplatta med nät eller stålfiber. Dimensioner och mängder bestäms av konstruktören utifrån laster och mark." },
      { q: "Räcker ett enkelt nät i lagergolvet?", a: "Sällan. Ställage och truckar ger punktlaster och fogarna belastas hårt. Golvet dimensioneras för de faktiska lasterna och har ofta nät i två lager eller fiberbetong." },
      { q: "Kan ni leverera i etapper?", a: "Ja. Armeringen märks och sorteras per position och etapp, så att fundament, kantbalkar och golv kan levereras i den ordning de gjuts. Frakten beräknas efter mängd och ort." },
      { q: "Hur mycket armering går åt till ett lagergolv?", a: "Ett lager Ø10 c/c 150 i två riktningar väger cirka 8,2 kg/m² plus överlapp. Två lager eller grövre järn ökar mängden snabbt. Ritningen avgör." },
    ],
    target: { href: "/armeringsleverantor", label: "Armering till hallbyggen" },
    category: "armering-till",
  },

  // 61. Stallgolv / ladugård
  {
    slug: "armering-till-stallgolv",
    title: "Armering till stallgolv och ladugård",
    metaTitle: "Armering stallgolv – ladugård & djurstall",
    metaDescription:
      "Armering till stallgolv och ladugård: gångar, foderbord, gödselkanaler. Täckskikt i aggressiv miljö och mängdexempel. Skicka ritningen för offert.",
    excerpt:
      "Ett stallgolv utsätts för tunga maskiner, djurens vikt och en aggressiv miljö med gödsel och urin. Så väljer du armering som håller i många år.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "armering stallgolv",
      "stallgolv betong armering",
      "armering ladugård",
      "gjuta stallgolv",
      "betonggolv djurstall",
      "armering gödselgång",
    ],
    content: [
      { type: "p", text: "Ett stallgolv armeras normalt med nät i plattan, grövre armering under foderbord och körgångar och bockade järn i gödselkanalerna. Lika viktigt som mängden är täckskiktet: gödsel och urin angriper både betong och stål."  },
      { type: "p", text: "Vi levererar armering till lantbruksbyggen direkt till gården – nät, bockade kanaljärn och kantbalksarmering, buntat per byggdel. Se hur vi arbetar som [armeringsleverantör](/armeringsleverantor)."  },

      { type: "h2", text: "Delarna i ett stallgolv"  },
      { type: "table", head: ["Del", "Belastning", "Typisk armering"], rows: [
        ["Liggbås och gångar", "Djur, skrapa, tvätt", "Nät, ofta Ø8–Ø10 c/c 150, i plattans överdel för sprickbegränsning"],
        ["Foderbord / körgång", "Traktor, fullastad fullfoderblandare", "Nät i två lager eller grövre nät, förstärkt vid kanter"],
        ["Gödselkanaler / kulvertar", "Jordtryck, gödseltryck, spaltgolv", "Bockad armering i botten och väggar, byglar i hörn"],
        ["Kantbalk / grundsula", "Väggar, frost", "Längsjärn och byglar, förankring mot plattan"],
      ], caption: "Typvärden – konstruktören avgör dimension, c/c och betongkvalitet." },

      { type: "h2", text: "Aggressiv miljö kräver tjockare täckskikt"  },
      { type: "p", text: "Urin och gödsel innehåller ammoniak, syror och salter som angriper betongen och – när de når stålet – orsakar korrosion. Betongen väljs därför för kemiskt angrepp (någon av XA-klasserna) och täckskiktet görs större än i ett bostadsgolv. Konstruktören bestämmer exponeringsklass och täckskikt. På bygget betyder det:"  },
      { type: "ul", items: [
        "Distanser som håller nätet på rätt höjd även när man går på armeringen under gjutning.",
        "Inga järn som sticker upp nära ytan vid kanaler och brunnar.",
        "Tät betong med rätt vct och ordentlig härdning.",
        "Fogar och genomföringar som tätas, så att vätska inte når armeringen den vägen.",
      ] },
      { type: "p", text: "Läs mer om varför täckskiktet är avgörande i guiden om [distanser och täckskikt](/blogg/distanser-tackskikt-armering)."  },

      { type: "h2", text: "Gödselkanaler och spaltgolv"  },
      { type: "p", text: "I lösgödselsystem går gödseln ner genom spaltgolv till kanaler under golvet. Kanalerna är i princip små armerade bassänger: botten och väggar tar jordtryck utifrån och gödseltryck inifrån. Armeringen bockas ofta som U-järn eller hakar som går från botten upp i väggarna, så att hörnen hålls samman. Spaltgolven är normalt prefabricerade element som läggs på kanalväggarna."  },

      { type: "h2", text: "Fall, fogar och halkskydd"  },
      { type: "p", text: "Stallgolv gjuts med fall mot rännor och brunnar. När plattan har varierande tjocklek ska armeringen ändå ligga på rätt avstånd från överytan – det styrs med distanser i olika höjd. Fogarnas placering bestäms i förväg, eftersom armeringen antingen ska gå igenom fogen eller avslutas vid den. Halkskyddande ytstruktur görs vid ytbehandlingen och påverkar inte armeringen."  },

      { type: "h2", text: "Gör en bockningslista per byggdel"  },
      { type: "p", text: "Ett stall består av många olika delar som gjuts vid olika tillfällen. Dela bockningslistan per byggdel – kanaler, plattor, foderbord, kantbalkar – så blir leveransen lätt att hantera på gården. Vi hjälper gärna till att ta fram listan från konstruktörens ritning."  },

      { type: "h2", text: "Exempel: åtgång för en gångyta" },
      { type: "p", text: "Ett räkneexempel för en gång på 3 × 40 m (120 m²) med nät Ø8 c/c 150: nätet väger cirka 5,3 kg/m² (två riktningar à 0,395 kg/m ÷ 0,15 m). Med 10–20 % tillägg för överlapp blir det runt 700–770 kg. Foderbord och körytor med tyngre nät eller två lager räknas separat, liksom kanalernas bockade järn. Exemplet visar hur mängden byggs upp – den verkliga mängden följer ritningen." },
      { type: "h2", text: "Leverans till gården i etapper"  },
      { type: "p", text: "Stall byggs ofta om medan djuren står kvar i en annan del av byggnaden. Då fungerar det bäst med mindre leveranser i den takt som gjuts. Skicka ritningen eller bockningslistan via [offertformuläret](/offert) och ange etapperna – du får en offert per byggdel, med frakt efter mängd och ort, även till gårdar i Norrland."  },
    ],
    faqs: [
      { q: "Hur tjockt ska ett stallgolv vara?", a: "Det beror på laster och djurslag. Gångar och liggytor är ofta tunnare än foderbord och körytor där traktorer går. Konstruktören bestämmer tjocklek och armering utifrån maskinernas axellaster." },
      { q: "Behöver stallgolv armeras?", a: "Ja, normalt. Armeringen fördelar laster från maskiner och begränsar sprickor där vätska annars kan tränga in och angripa stålet." },
      { q: "Varför behövs större täckskikt i ett stall?", a: "Gödsel och urin är kemiskt aggressiva. Ett större täckskikt och tät betong skyddar armeringen mot korrosion. Exponeringsklass och täckskikt bestäms av konstruktören." },
      { q: "Vi har ingen bockningslista – kan ni hjälpa till?", a: "Ja. Skicka konstruktörens ritning så tar vi fram bockningslistan, uppdelad per byggdel. Leverans till gården i hela Sverige, frakt efter mängd och ort." },
    ],
    target: { href: "/armeringsleverantor", label: "Armering till lantbruksbyggen" },
    category: "armering-till",
  },

  // 62. Gödselplatta / gödselbrunn
  {
    slug: "armering-till-godselplatta",
    title: "Armering till gödselplatta och gödselbrunn",
    metaTitle: "Armering gödselplatta & gödselbrunn",
    metaDescription:
      "Armering till gödselplatta och gödselbrunn: ringarmering, botten, kantmurar och täthet enligt SS-EN 1992-3. Vi bockar ringar efter ritning – begär offert.",
    excerpt:
      "En gödselvårdsanläggning ska vara tät i decennier. Armeringen håller sprickorna små – så armeras en gödselplatta och en platsgjuten gödselbrunn.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "armering gödselplatta",
      "gödselbrunn armering",
      "gjuta gödselplatta",
      "armering gödselbehållare",
      "ringarmering gödselbrunn",
      "gödselvårdsanläggning betong",
    ],
    content: [
      { type: "p", text: "En gödselplatta armeras med nät i plattan och bockade järn i kantmurarna. En rund gödselbrunn armeras med horisontella ringar som tar gödseltrycket, tätast längst ner. Båda ska vara täta i decennier, och det är armeringen som håller sprickorna små nog."  },
      { type: "p", text: "Ringar med rätt radie är svåra att bocka på plats. Vi tillverkar dem efter ritningen, tillsammans med nät och startjärn, och levererar till lantbrukare och markentreprenörer som [armeringsleverantör](/armeringsleverantor)."  },

      { type: "h2", text: "Gödselplatta – för fastgödsel"  },
      { type: "p", text: "En gödselplatta är en platta på mark med kantmurar på tre sidor. Plattan belastas av gödselns vikt och av lastmaskiner som kör upp på den. Kantmurarna tar sidotryck från gödseln och maskinens skopa."  },
      { type: "ul", items: [
        "Bottenplatta: nät i över- och underkant, eller grövre nät i ett lager, beroende på maskinlast.",
        "Kantmurar: vertikala järn med förankring ner i plattan, horisontella fördelningsjärn.",
        "Hörn: vinkeljärn eller hakar som binder ihop murarna.",
        "Fall mot brunn eller ränna så att vätska samlas upp.",
      ] },

      { type: "h2", text: "Gödselbrunn – ringarmering tar trycket"  },
      { type: "p", text: "En rund gödselbrunn är en vätskebehållare. Gödseltrycket ökar med djupet och spänner väggen utåt, precis som ett band runt ett tunnformat kar. Dragkraften i väggen – ringdragkraften – tas upp av horisontell ringarmering. Därför är ringarna tätare längst ner, där trycket är störst."  },
      { type: "table", head: ["Djup under ytan", "Tryck (flytgödsel ≈ 10–11 kN/m³)", "Ringdragkraft per m vägghöjd, radie 10 m"], rows: [
        ["1 m", "≈ 10 kPa", "≈ 100 kN/m"],
        ["2 m", "≈ 20 kPa", "≈ 200 kN/m"],
        ["3 m", "≈ 30 kPa", "≈ 300 kN/m"],
        ["4 m", "≈ 40 kPa", "≈ 400 kN/m"],
      ], caption: "Principexempel (N = p · r) – visar varför ringarmeringen ökar nedåt. Ingen dimensionering; konstruktören avgör." },
      { type: "p", text: "Många gödselbrunnar byggs av prefabricerade väggelement. Platsgjutna brunnar eller platsgjutna bottenplattor till elementbrunnar armeras efter konstruktörens ritning, där förbindelsen mellan botten och vägg är den mest kritiska detaljen."  },

      { type: "h2", text: "Sprickbredd och täthet"  },
      { type: "p", text: "För vätsketäta konstruktioner används Eurokod 2 del 3 (SS-EN 1992-3), som skärper kraven på sprickbredd jämfört med vanliga konstruktioner. I praktiken betyder det mer armering och klenare järn på tätare avstånd, eftersom många tunna järn begränsar sprickorna bättre än få grova. Täckskiktet väljs för kemiskt aggressiv miljö."  },

      { type: "h2", text: "Vanliga fel"  },
      { type: "ul", items: [
        "Ringarmering som skarvas på samma ställe runt hela brunnen – skarvarna ska förskjutas.",
        "Ringar som märks fel i höjdled – de tätare ringarna hör hemma längst ner.",
        "För korta skarvlängder – se [skarvlängd för armering](/blogg/skarvlangd-armering).",
        "Armering som trycks ner i botten vid gjutning – distanserna ska klara att man går på nätet.",
        "Otät gjutfog mellan botten och vägg – fogband och rätt förankringsjärn behövs.",
      ] },

      { type: "h2", text: "Platta eller brunn – vad passar?" },
      { type: "p", text: "Fastgödsel från djupströbädd och hästgödsel lagras ofta på platta, medan flytgödsel från lösgödselsystem kräver brunn. Många gårdar har båda. Plattan är enklare att armera men tar större yta och behöver uppsamling av lakvatten. Brunnen kräver mer armering per kubikmeter men rymmer mycket på liten yta. Volymen styrs av antal djur och lagringstid, och dimensioneras tillsammans med rådgivare och konstruktör." },
      { type: "h2", text: "Skicka ritningen – få ringarna färdigbockade"  },
      { type: "p", text: "Ange brunnens innerradie och väggtjocklek, eller skicka konstruktörens ritning via [offertformuläret](/offert). Ringarna bockas i delar efter radien, märks per höjdnivå och levereras tillsammans med bottennät och startjärn. Frakten räknas efter mängd och ort."  },
    ],
    faqs: [
      { q: "Hur armeras en gödselbrunn?", a: "Med horisontell ringarmering som tar upp gödseltrycket, tätare längst ner, samt vertikal armering och en armerad bottenplatta. Förbindelsen botten–vägg är kritisk. Konstruktören dimensionerar." },
      { q: "Varför måste en gödselplatta vara tät?", a: "För att näring och vätska inte ska läcka ut i mark och vatten. Armeringen håller sprickorna små så att betongen förblir tät." },
      { q: "Kan ni bocka ringar till en rund brunn?", a: "Ja, vi bockar ringarna i delar efter den radie som anges på ritningen och märker dem per höjdnivå. Skicka ritning eller bockningslista så får du offert." },
      { q: "Vilken norm gäller för vätsketäta behållare?", a: "Eurokod 2 del 3, SS-EN 1992-3, som ger skärpta krav på sprickbredd. Konstruktören väljer krav utifrån anläggningens täthetsklass." },
    ],
    target: { href: "/armeringsleverantor", label: "Armering till gödselanläggning" },
    category: "armering-till",
  },

  // 63. Ramp / garageuppfart
  {
    slug: "armering-till-garageuppfart",
    title: "Armering till garageuppfart och ramp i betong",
    metaTitle: "Armering garageuppfart & ramp i betong",
    metaDescription:
      "Vilket nät till garageuppfarten? Tjocklek, nät per fordonstyp, fogar och åtgång för 18–60 m². Beställ armeringsnät med distanser – leverans i hela Sverige.",
    excerpt:
      "En gjuten uppfart utsätts för bilar, frost och vägsalt. Rätt nät på rätt höjd och väl placerade fogar gör att den håller sig hel.",
    date: D,
    readingMinutes: 5,
    keywords: [
      "armering garageuppfart",
      "gjuta uppfart betong armering",
      "armering ramp betong",
      "armering infart",
      "betonguppfart armeringsnät",
      "gjuten ramp armering",
    ],
    content: [
      { type: "p", text: "En villauppfart för personbil gjuts normalt 100–120 mm tjock med nät Ø6–Ø8 c/c 150, på distanser och med fogar i rutor. Uppfarten ligger ute året runt och får frost, vägsalt och hjullaster – därför är nätets höjd och fogarna lika viktiga som själva nätet."  },
      { type: "p", text: "För de flesta uppfarter räcker [armeringsnät](/produkter/armeringsnat) i ett lager, med extra järn vid kanterna. Själva garageplattan inne i garaget beskrivs i guiden om [armering till garage](/blogg/armering-till-garage)."  },

      { type: "h2", text: "Typisk uppbyggnad"  },
      { type: "table", head: ["Användning", "Platta (typ)", "Armering (typ)"], rows: [
        ["Villa, personbil", "100–120 mm", "Nät Ø6–Ø8 c/c 150 (t.ex. 6150 eller 8150)"],
        ["Tyngre fordon, husbil, släp", "120–150 mm", "Nät Ø8–Ø10 c/c 150, ev. extra järn vid kanter"],
        ["Ramp med lutning", "Enligt ritning", "Nät + kantjärn, förankring mot nedre och övre anslutning"],
      ], caption: "Typvärden för privata uppfarter på väl packat bärlager. Konstruktören avgör vid tyngre laster." },
      { type: "p", text: "Underlaget är minst lika viktigt som armeringen. Ett tjockt, väl packat bärlager av krossmaterial ger plattan jämnt stöd. Armeringen kan inte kompensera för ett underlag som sätter sig."  },

      { type: "h2", text: "Rätt höjd på nätet"  },
      { type: "p", text: "Nätet ska ligga i plattan – inte på botten. Lägg det på distanser så att det hamnar ungefär i mitten eller något ovanför, beroende på vad som ska motverkas. För sprickbegränsning i överytan ska nätet ligga högt, men täckskiktet uppåt får inte bli för litet: vägsalt tränger in i betongen och får stålet att rosta."  },
      { type: "ul", items: [
        "Använd distanser eller nätstöd i jämn höjd – 4–5 per m² är en vanlig tumregel.",
        "Skarva näten med tillräckligt överlapp – se [skarvlängd och överlapp](/blogg/skarvlangd-armering).",
        "Håll nätet 50–75 mm från plattans kanter så att inget stål blir synligt.",
        "Välj betong för frost och tösalt – betongleverantören vet vilken klass som gäller.",
      ] },

      { type: "h2", text: "Fogar styr sprickorna"  },
      { type: "p", text: "Betongen krymper när den torkar och rör sig med temperaturen. Utan fogar spricker en stor uppfart där den själv vill. Med sågade eller formade fogar på lämpligt avstånd, ofta i rutor på några meter, hamnar sprickorna där du har bestämt. Nätet kan antingen gå igenom fogen eller kapas, och det bör bestämmas innan gjutning."  },

      { type: "h2", text: "Ramp och lutande ytor"  },
      { type: "p", text: "En ramp ner till ett garage eller en källare har ofta en kraftig lutning. Betongen gjuts då med styvare konsistens, och nätet måste sitta fast ordentligt på distanserna så att det inte glider ner. Mot garageplattan och vid övre kanten förankras rampen med bockade järn. Har rampen sidomurar räknas de som små stödmurar och armeras enligt ritning."  },

      { type: "h2", text: "Hur många nät går åt?"  },
      { type: "p", text: "Ett vanligt standardformat är 2,35 × 5,0 m (11,75 m²). Räkna med 10–20 % mer yta än uppfartens area för överlapp och kapning."  },

      { type: "table", head: ["Uppfart", "Yta", "Nät inkl. överlapp", "Antal nät 2,35 × 5 m", "Distanser (≈ 4–5/m²)"], rows: [
        ["3 × 6 m", "18 m²", "≈ 20–22 m²", "2", "≈ 75–90"],
        ["4 × 8 m", "32 m²", "≈ 35–38 m²", "4", "≈ 130–160"],
        ["6 × 10 m", "60 m²", "≈ 66–72 m²", "6–7", "≈ 240–300"],
      ], caption: "Räkneexempel med 10–20 % tillägg. Kapning vid snedda kanter och brunnar kan ge något mer." },

      { type: "h2", text: "Anslutning mot garaget och gatan" },
      { type: "p", text: "Mot garageplattan läggs en fog så att uppfarten kan röra sig oberoende av husgrunden. Mot gatan eller trottoaren avslutas plattan med en förstärkt kant, gärna med ett par extra längsgående järn Ø10–Ø12, eftersom kanten får de hårdaste stötarna när bilar kör upp. Brunnar och rännor i uppfarten armeras runt med extra järn i hörnen så att sprickor inte startar där." },

      { type: "p", text: "Lägg gärna näten så att skarvarna inte hamnar i hjulspåren, där belastningen är störst." },

      { type: "h2", text: "Få nät, distanser och najtråd i en leverans"  },
      { type: "p", text: "Skicka uppfartens mått – ett foto av en skiss räcker – via [offertformuläret](/offert). Vi räknar antal [armeringsnät](/produkter/armeringsnat), distanser och kantjärn och levererar allt tillsammans. Frakten beräknas efter mängd och ort, så även en liten villaleverans går att beställa."  },
    ],
    faqs: [
      { q: "Vilket nät ska man ha till en garageuppfart?", a: "För en villauppfart med personbilar är nät Ø6–Ø8 c/c 150 vanligt. Tyngre fordon kräver grövre nät och tjockare platta – konstruktören avgör vid tyngre laster." },
      { q: "Hur tjock ska en gjuten uppfart vara?", a: "Ofta 100–120 mm för personbilar och 120–150 mm för tyngre fordon, på ett väl packat bärlager. Exakt tjocklek beror på last och mark." },
      { q: "Måste en uppfart ha fogar?", a: "Ja, större ytor bör delas upp med fogar så att krympsprickor hamnar där du vill. Armeringen begränsar sprickbredden men hindrar inte att betongen krymper." },
      { q: "Kan jag lägga nätet direkt på marken?", a: "Nej. Nätet ska ligga i betongen på distanser. Ligger det på botten gör det nästan ingen nytta och rostar lätt." },
      { q: "Kan jag beställa nät till bara en uppfart?", a: "Ja. Skicka måtten så räknar vi antal nät och distanser. Frakten beräknas efter mängd och ort och anges i offerten." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    category: "armering-till",
  },

  // 64. Pelare
  {
    slug: "armering-till-pelare",
    title: "Armering till betongpelare – längsjärn, byglar och regler",
    metaTitle: "Armering betongpelare – längsjärn & byglar",
    metaDescription:
      "Armering till betongpelare: minsta antal längsjärn, bygelavstånd enligt Eurokod 2, startjärn och skarvar. Med räkneexempel. Beställ färdiga pelarkorgar.",
    excerpt:
      "En pelare bär tryck, men armeringen behövs ändå – för moment, knäckning och sprickor. Här är reglerna för längsjärn och byglar och hur en pelarkorg byggs.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "armering pelare",
      "armera betongpelare",
      "pelarkorg",
      "pelare armering byglar",
      "armeringskorg pelare",
      "gjuta pelare armering",
    ],
    content: [
      { type: "p", text: "En betongpelare bär främst tryck, och betong är stark i tryck. Ändå armeras alla bärande pelare. Längsjärnen tar moment från snedbelastning och knäckning, ökar bärförmågan och begränsar sprickor. Byglarna håller längsjärnen på plats så att de inte trycks ut åt sidan när pelaren belastas."  },
      { type: "p", text: "Pelarens armering byggs nästan alltid som en korg av längsjärn och byglar. Vi tillverkar färdiga [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar) efter ritning, så att korgen bara behöver ställas på plats och anslutas till startjärnen."  },

      { type: "figure", illustration: "rebar-cage", caption: "Pelarkorg: längsjärn i hörnen och längs sidorna, sammanhållna av byglar."  },

      { type: "h2", text: "Grundregler enligt Eurokod 2"  },
      { type: "p", text: "Eurokod 2 (SS-EN 1992-1-1, avsnitt 9.5) ger minimiregler för pelare. Tabellen visar de rekommenderade värdena – den svenska nationella bilagan och konstruktörens beräkning gäller alltid i det enskilda fallet."  },
      { type: "table", head: ["Regel", "Rekommenderat värde"], rows: [
        ["Minsta diameter på längsjärn", "Ø8 mm (i praktiken ofta Ø12–Ø25)"],
        ["Minsta antal längsjärn", "Minst ett i varje hörn (4 i rektangulär pelare), minst 4 i cirkulär"],
        ["Minsta armeringsmängd", "Det största av 0,10·NEd/fyd och 0,002·Ac"],
        ["Största armeringsmängd", "0,04·Ac utanför skarvar (dubbelt i skarvzon)"],
        ["Bygeldiameter", "Minst 6 mm och minst ¼ av största längsjärnets diameter"],
        ["Största bygelavstånd", "Minsta av 20 × minsta längsjärn, pelarens minsta mått och 400 mm"],
        ["Förtätade byglar", "Avståndet × 0,6 nära balk/platta och i skarvar för järn > Ø14"],
        ["Ostagade längsjärn", "Högst 150 mm från ett järn som hålls av bygel"],
      ], caption: "SS-EN 1992-1-1 avsnitt 9.5, rekommenderade värden. Konstruktören avgör." },
      { type: "p", text: "Exempel: en pelare 300 × 300 mm med fyra Ø16 får enligt regeln ovan bygelavstånd högst 300 mm (minsta av 20 × 16 = 320, 300 och 400). Nära bjälklaget minskas avståndet till 0,6 × 300 = 180 mm."  },

      { type: "h2", text: "Startjärn och skarvar"  },
      { type: "p", text: "Pelaren ansluter till fundamentet med startjärn som gjuts in i fundamentet och sticker upp. Pelarkorgens längsjärn skarvas mot startjärnen med omlottskarv. I flervåningshus skarvas pelarna på motsvarande sätt vid varje bjälklag. Skarvlängden beror på dimension, betongklass och förankringsvillkor – se [skarvlängd armering](/blogg/skarvlangd-armering)."  },

      { type: "h2", text: "Hur en pelarkorg är uppbyggd"  },
      { type: "ul", items: [
        "Längsjärn i hörnen – alltid minst ett i varje hörn.",
        "Extra längsjärn längs sidorna i större pelare – inget tryckt järn får ligga mer än 150 mm från ett järn som hålls av en bygel.",
        "Slutna byglar med krokar som förankras in i betongen (135° är vanligt).",
        "Distanser på utsidan för rätt täckskikt mot formen.",
      ] },
      { type: "p", text: "Runda pelare armeras med längsjärn i en cirkel och spiralbygel eller cirkulära byglar. Spiralen kan tillverkas i ett stycke för hela pelarlängden."  },

      { type: "h2", text: "Varför beställa färdiga pelarkorgar?"  },
      { type: "p", text: "Att binda korgar på plats tar tid och det är lätt att bygelavstånd eller täckskikt blir fel. En prefabricerad korg är tillverkad efter ritningen, kontrollerad och märkt med position. Den lyfts på plats i formen och ansluts till startjärnen. Mer om olika typer av korgar finns i guiden om [armeringskorgar](/blogg/armeringskorgar-palarmering)."  },

      { type: "h2", text: "Vanliga fel" },
      { type: "ul", items: ["Byglar som inte är slutna eller saknar förankrade krokar.", "För få byglar nära bjälklaget, där Eurokod 2 kräver förtätning.", "Startjärn i fel läge – korgen kan inte skarvas utan att järnen bockas om på plats.", "Täckskikt som blir för litet när korgen trycks mot formen."] },

      { type: "h2", text: "Räkneexempel: tio pelare 300 × 300 mm" },
      { type: "p", text: "Tio pelare, 3,0 m höga, med 4 Ø16 (inklusive skarv mot startjärn, 3,8 m per järn) och byglar Ø8 c/c 300, förtätade till 180 mm i ändarna. Bygelns längd med 135°-krokar är cirka 1,2 m och det blir ungefär 14 byglar per pelare." },
      { type: "table", head: ["Position", "Beräkning", "Vikt"], rows: [
        ["Längsjärn Ø16", "10 × 4 × 3,8 m = 152 m × 1,58 kg/m", "≈ 240 kg"],
        ["Byglar Ø8", "10 × 14 × 1,2 m = 168 m × 0,395 kg/m", "≈ 66 kg"],
      ], caption: "Principexempel – antal, dimension och skarvlängd följer ritningen." },

      { type: "h2", text: "Skicka pelarritningen – få korgarna märkta per position"  },
      { type: "p", text: "Vi tillverkar [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar) efter ritningen, med byglarna förtätade där de ska vara, och märker varje korg med position och våningsplan. Gäller det bara några pelare i en källare eller ett garage går det lika bra. Skicka ritningen via [offertformuläret](/offert)."  },
    ],
    faqs: [
      { q: "Hur många armeringsjärn ska en pelare ha?", a: "Eurokod 2 kräver minst ett längsjärn i varje hörn, alltså minst fyra i en rektangulär pelare, och minst fyra i en cirkulär. Antal och dimension bestäms av konstruktören." },
      { q: "Hur tätt ska byglarna sitta i en pelare?", a: "Rekommenderat största avstånd är det minsta av 20 gånger minsta längsjärnets diameter, pelarens minsta mått och 400 mm. Nära bjälklag och i skarvar förtätas byglarna." },
      { q: "Vad är startjärn i en pelare?", a: "Järn som gjuts in i fundamentet eller bjälklaget under och sticker upp, så att pelarens längsjärn kan skarvas mot dem." },
      { q: "Kan ni tillverka runda pelarkorgar?", a: "Ja, med längsjärn och spiral- eller ringbyglar efter ritningen. Mått och mängd anges i offerten." },
    ],
    target: { href: "/produkter/pelar-och-balkkorgar", label: "Beställ pelarkorgar" },
    category: "armering-till",
  },

  // 65. Balk
  {
    slug: "armering-till-balk",
    title: "Armering till betongbalk – huvudjärn, byglar och minimiregler",
    metaTitle: "Armering betongbalk – huvudjärn & byglar",
    metaDescription:
      "Armering till betongbalk: underkantsjärn, byglar och minimiarmering enligt Eurokod 2 med räkneexempel. Färdiga balkkorgar efter ritning – begär offert.",
    excerpt:
      "En balk böjs av lasten. Underkantsjärnen tar draget, byglarna tar tvärkraften. Här är minimireglerna och hur en balkkorg är uppbyggd.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "armering balk",
      "armera betongbalk",
      "balkkorg",
      "betongbalk armering byglar",
      "armeringskorg balk",
      "överliggare armering",
    ],
    content: [
      { type: "p", text: "En betongbalk som bär last böjs nedåt. Överkanten trycks ihop och underkanten dras isär – och betong klarar nästan inget drag. Därför ligger huvudarmeringen i underkant av en fritt upplagd balk. Nära upplagen är det tvärkraften som dominerar, och den tas upp av byglar. En kontinuerlig balk över flera stöd har dessutom drag i överkant över stöden."  },
      { type: "p", text: "Armeringen byggs som en korg av längsjärn och byglar. Vi tillverkar färdiga [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar) efter ritning – från korta överliggare till långa balkar i flera delar."  },

      { type: "h2", text: "Delarna i en balkkorg"  },
      { type: "table", head: ["Del", "Uppgift", "Vanlig utformning"], rows: [
        ["Underkantsjärn", "Tar dragkraften i fält", "2–6 kamjärn, ofta Ø12–Ø25, ibland i två lager"],
        ["Överkantsjärn / montagejärn", "Håller byglarna, tar drag över stöd", "2 järn, klenare i fält, grövre över mellanstöd"],
        ["Byglar", "Tar tvärkraft, håller ihop korgen", "Slutna byglar Ø8–Ø10, tätare nära upplag"],
        ["Livarmering", "Begränsar sprickor i höga balkar", "Horisontella järn längs sidorna"],
      ], caption: "Typisk uppbyggnad – dimensioner och antal enligt konstruktörens ritning." },

      { type: "figure", illustration: "rebar-cage", caption: "Balkkorg: längsjärn i över- och underkant, byglar runt om."  },

      { type: "h2", text: "Minimiregler enligt Eurokod 2"  },
      { type: "p", text: "SS-EN 1992-1-1 avsnitt 9.2 ger minimiregler för balkar. Värdena nedan är de rekommenderade – nationell bilaga och konstruktörens beräkning gäller."  },
      { type: "ul", items: [
        "Minsta dragarmering: As,min = 0,26 · fctm/fyk · b · d, men minst 0,0013 · b · d.",
        "Största armering: 0,04 · Ac utanför skarvar.",
        "Minsta byglar: ρw,min = 0,08 · √fck / fyk.",
        "Största bygelavstånd längs balken: 0,75 · d (för vertikala byglar).",
        "Minst hälften av den erforderliga tvärkraftsarmeringen ska vara byglar.",
      ] },
      { type: "p", text: "Räkneexempel: balk 200 × 400 mm, effektiv höjd d ≈ 350 mm, betong C30/37 (fctm = 2,9 MPa) och B500B. As,min = 0,26 × 2,9/500 × 200 × 350 ≈ 106 mm². Två Ø10 (157 mm²) uppfyller minimikravet – men den verkliga lasten kräver nästan alltid mer. Bygelavståndet får vara högst 0,75 × 350 ≈ 260 mm."  },

      { type: "h2", text: "Förankring vid upplagen"  },
      { type: "p", text: "Underkantsjärnen ska förankras förbi upplaget så att dragkraften kan föras över. Ofta bockas järnen upp i ändarna eller förses med hakar. Vid inspänning mot pelare eller vägg förankras överkantsjärnen in i den anslutande konstruktionen. Förankringslängden beror på dimension, betong och läge – konstruktören anger den på ritningen."  },

      { type: "h2", text: "Överliggare och kantbalkar"  },
      { type: "p", text: "En överliggare över en dörr- eller fönsteröppning är en kort balk och armeras på samma sätt. Kantbalkar i en platta på mark är också balkar, men armeras främst för markreaktioner och sprickor – det beskrivs i guiden om [kantbalksbygel](/blogg/kantbalksbygel). Byglarnas former finns i guiden om [armeringsbyglar](/blogg/armeringsbyglar)."  },

      { type: "h2", text: "Vanliga fel på bygget"  },
      { type: "ul", items: [
        "Korgen vänd upp och ned – grova järn hamnar i överkant där de inte gör nytta.",
        "Byglar med för stort avstånd nära upplagen.",
        "För litet täckskikt mot formens botten – distanser saknas eller trycks ner.",
        "Skarvar placerade i fältmitt där draget är som störst.",
      ] },
      { type: "p", text: "De två första felen syns sällan förrän balken spricker. En korg som tillverkas efter ritningen och märks med position och vilken sida som är upp tar bort dem."  },

      { type: "h2", text: "Korgen i formen" },
      { type: "p", text: "Balkkorgen lyfts ner i formen och ställs på distanser som ger täckskiktet i botten och mot sidorna. Vid långa balkar behövs lyftpunkter så att korgen inte deformeras – lyft aldrig enbart i byglarna. Där balken ansluter till pelare eller väggar kan korgen behöva tillverkas i delar och skarvas på plats, så att den kan träs mellan pelarens längsjärn." },

      { type: "p", text: "Är armeringen osymmetrisk, till exempel när ena änden är inspänd, ska korgen också märkas med vilken ände som är vilken." },

      { type: "h2", text: "Från överliggare till långa balkar"  },
      { type: "p", text: "Skicka balkritningen eller bockningslistan via [offertformuläret](/offert). Vi tillverkar [balkkorgar](/produkter/pelar-och-balkkorgar) med byglarna förtätade vid upplagen enligt ritningen, delar långa korgar där konstruktören anger skarv och märker varje korg med position och orientering."  },
    ],
    faqs: [
      { q: "Var ska armeringen sitta i en betongbalk?", a: "I en fritt upplagd balk ligger huvudarmeringen i underkant, där balken dras isär. Över mellanstöd i kontinuerliga balkar behövs armering i överkant. Ritningen visar exakt placering." },
      { q: "Vad gör byglarna i en balk?", a: "De tar upp tvärkraft, främst nära upplagen, och håller längsjärnen på plats. Därför sitter de tätare nära stöden." },
      { q: "Hur stort bygelavstånd får en balk ha?", a: "Eurokod 2 rekommenderar högst 0,75 gånger den effektiva höjden d för vertikala byglar. Lasten kräver ofta tätare byglar – konstruktören avgör." },
      { q: "Kan ni leverera långa balkkorgar?", a: "Ja, korgar tillverkas efter ritning. Mycket långa korgar kan delas med skarvar enligt konstruktörens anvisning. Mått och transport anges i offerten." },
    ],
    target: { href: "/produkter/pelar-och-balkkorgar", label: "Beställ balkkorgar" },
    category: "armering-till",
  },

  // 66. Hissgrop
  {
    slug: "armering-till-hissgrop",
    title: "Armering till hissgrop – botten, väggar och täthet",
    metaTitle: "Armering hissgrop – botten, väggar & täthet",
    metaDescription:
      "Armering till hissgrop: botten, dubbelsidiga väggar, hörnjärn och tätade fogar. Typiska mått och vanliga misstag. Beställ armeringen märkt per position.",
    excerpt:
      "En hissgrop är en liten tät betonglåda under grundplattan. Den ska tåla jord- och vattentryck och hissens buffertlaster. Så armeras den.",
    date: D,
    readingMinutes: 5,
    keywords: [
      "armering hissgrop",
      "hissgrop betong",
      "gjuta hissgrop",
      "hissgrop armeringskorg",
      "hisschakt grop armering",
    ],
    content: [
      { type: "p", text: "En hissgrop armeras som en liten tät låda: bottenplatta i två lager, dubbelsidigt armerade väggar, startjärn från botten och hörnjärn som binder ihop väggarna. Den ska tåla jord- och grundvattentryck och hissens buffertlaster – och den måste vara torr."  },
      { type: "p", text: "Armeringen är tät och full av hörn och hakar – ett typiskt fall där prefabricerad armering sparar mycket tid. Vi tillverkar armering till hissgropar som färdiga korgar och bockade järn inom [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar)."  },

      { type: "h2", text: "Typisk uppbyggnad"  },
      { type: "table", head: ["Del", "Typiskt mått", "Typisk armering"], rows: [
        ["Bottenplatta", "250–400 mm", "Nät eller lösa järn i över- och underkant, Ø10–Ø16"],
        ["Väggar", "200–300 mm", "Dubbelsidig armering, vertikala och horisontella järn Ø10–Ø12"],
        ["Hörn vägg–vägg", "–", "Vinkeljärn eller U-byglar som binder ihop båda sidorna"],
        ["Anslutning botten–vägg", "–", "Startjärn från bottenplattan upp i väggarna"],
        ["Anslutning mot grundplatta", "–", "Förankringsjärn in i omgivande platta"],
      ], caption: "Typvärden. Gropens mått kommer från hissleverantören, armeringen från konstruktören." },

      { type: "h2", text: "Mått från hissleverantören"  },
      { type: "p", text: "Gropens djup, inre mått och laster bestäms av den hiss som väljs. Hissleverantören anger buffertlaster och skenlaster som konstruktören dimensionerar för. Byts hissmodell kan måtten ändras – låt därför armeringsritningen bygga på den slutliga hissen innan armeringen beställs."  },

      { type: "h2", text: "Tät mot vatten"  },
      { type: "p", text: "Under grundvattennivån trycker vattnet från utsidan. Gropen görs vattentät med tät betong, armering som begränsar sprickbredden och tätade gjutfogar. Mer armering med klenare järn på tätare avstånd ger fler men smalare sprickor, vilket är bättre för tätheten."  },
      { type: "ul", items: [
        "Fogband eller injekteringsslang i gjutfogen mellan botten och väggar.",
        "Distanser som ger rätt täckskikt mot jord på utsidan.",
        "Inga lösa järn eller najtråd som når formytan.",
        "Genomföringar för dränering eller pump planerade före gjutning.",
      ] },
      { type: "p", text: "Läs mer om täckskiktet i guiden om [distanser och täckskikt](/blogg/distanser-tackskikt-armering)."  },

      { type: "h2", text: "Gjutordning"  },
      { type: "ol", items: [
        "Schakt och underlag, ofta med isolering eller dränerande lager.",
        "Bottenplattans armering med startjärn för väggarna.",
        "Gjutning av botten.",
        "Väggarnas armering skarvas mot startjärnen, form monteras.",
        "Gjutning av väggarna, ofta samtidigt med eller före grundplattan runt om.",
      ] },
      { type: "p", text: "I mindre gropar gjuts botten och väggar ibland i ett moment. Det kräver att väggarmeringen hålls stabilt på plats och formen hängs upp – konstruktören och entreprenören bestämmer metoden."  },

      { type: "h2", text: "Prefabricerade hissgropskorgar"  },
      { type: "p", text: "En hissgrop har många korta järn och komplicerade hörn. Med färdiga korgar för väggarna och märkta bockade järn för botten blir montaget snabbare och risken för fel mindre. Det gäller särskilt på projekt med flera trapphus och likadana gropar."  },

      { type: "h2", text: "Typiska misstag" },
      { type: "ul", items: ["Armeringen beställd innan hissmodellen är vald – måtten ändras.", "Hörnjärn saknas, så att innerhörnen spricker.", "Startjärn för väggarna står i fel läge och måste bockas på plats.", "Ingjutningsgods för hissens skenor eller buffertar glöms och borras i efterhand genom armeringen."] },
      { type: "p", text: "Gå igenom hissleverantörens måttritning tillsammans med armeringsritningen före beställning, så undviks de flesta av dessa fel." },

      { type: "h2", text: "Liten grop – många positioner" },
      { type: "p", text: "En grop på 2 × 2 m kan ha ett tjugotal positioner: botten i två lager och två riktningar, väggar på båda sidor, hörnjärn, startjärn och förankringar mot plattan. Med varje bunt märkt med position och antal går kontrollen före formstängning snabbt." },

      { type: "h2", text: "Beställ gropen först – den gjuts först"  },
      { type: "p", text: "Hissgropen gjuts ofta före resten av grunden och är därför den armering som oftast försenar starten. Skicka gropens armeringsritning via [offertformuläret](/offert) så fort hissmodellen är låst. Vi tillverkar väggkorgar och bockade järn inom [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar), märkta per position – och kan leverera gropen separat före resten av grundarmeringen."  },
    ],
    faqs: [
      { q: "Hur djup är en hissgrop?", a: "Det bestäms av hissmodellen och hissleverantören. Djupet varierar mellan olika hissar, så armeringsritningen ska bygga på den valda hissen." },
      { q: "Hur armeras en hissgrop?", a: "Med armerad bottenplatta, dubbelsidigt armerade väggar, startjärn från botten upp i väggarna och vinkeljärn i hörnen. Konstruktören dimensionerar för jord-, vatten- och hisslaster." },
      { q: "Måste hissgropen vara vattentät?", a: "Ja, gropen ska vara torr. Den görs tät med tät betong, sprickbegränsande armering och tätade gjutfogar." },
      { q: "Kan hissgropens armering levereras före resten av grunden?", a: "Ja. Gropen kan beställas och levereras som en egen etapp, märkt per position, så att den kan gjutas först." },
    ],
    target: { href: "/produkter/pelar-och-balkkorgar", label: "Armering till hissgrop" },
    category: "armering-till",
  },

  // 67. Stolpfundament
  {
    slug: "armering-till-stolpfundament",
    title: "Armering till stolpfundament – carport, staket och skärmtak",
    metaTitle: "Armering stolpfundament – typlösning & mått",
    metaDescription:
      "Armering till stolpfundament för carport, staket och skärmtak: typisk korg, rörmått, frostdjup och räkneexempel. Beställ färdiga korgar efter dina mått.",
    excerpt:
      "Ett stolpfundament ska hålla stolpen stilla i vind och tjäle. En liten korg med fyra järn och byglar räcker ofta – men det beror på lasten.",
    date: D,
    readingMinutes: 5,
    keywords: [
      "armering stolpfundament",
      "gjuta stolpfundament",
      "stolpfundament betong",
      "fundament carport stolpe",
      "fundament staket armering",
      "stolpfundament armeringskorg",
    ],
    content: [
      { type: "p", text: "Ett stolpfundament är ett litet punktfundament som bär en enskild stolpe – till en carport, ett skärmtak, en pergola, ett plank, en grind eller en belysningsstolpe. Till skillnad från en plint under en byggnad tar stolpfundamentet ofta mer moment än vertikal last: vinden vill välta stolpen, och fundamentet ska hålla emot."  },
      { type: "p", text: "Har du många fundament är färdiga [plintkorgar](/produkter/plintkorgar) det snabbaste sättet att få rätt armering i varje gjutning. Plintar under hus och attefallshus beskrivs i guiden om [armering till plintar](/blogg/armering-till-plintar)."  },

      { type: "h2", text: "Typlösningar"  },
      { type: "table", head: ["Användning", "Typiskt fundament", "Typisk armering"], rows: [
        ["Staketstolpe, lätt plank", "Rör Ø150–200 mm", "Ofta oarmerat eller 1–2 järn Ø10"],
        ["Carport, skärmtak, pergola", "Rör Ø200–300 mm eller gjuten plint", "4 Ø10–Ø12 längs + byglar Ø6–Ø8 c/c 200–300"],
        ["Grindstolpe, tungt plank (vindlast)", "Större plint med bredare fot", "Korg 4–6 Ø12 + bottenmatta i foten"],
        ["Belysnings- och flaggstång", "Enligt leverantörens fundamentritning", "Korg + ingjuten bultgrupp"],
      ], caption: "Typvärden för vanliga privata projekt. Vid tak, snö- och vindlast avgör konstruktören eller leverantörens anvisning." },

      { type: "h2", text: "Frostfritt djup eller isolering"  },
      { type: "p", text: "Tjälen kan lyfta ett fundament som står för grunt. Stolpfundament grundläggs därför på frostfritt djup, eller på ett isolerat och dränerat underlag. Frostdjupet varierar mycket mellan södra Sverige och Norrland och med marktyp – lera och silt är mer tjällyftande än grus. En armerad korg gör fundamentet sammanhållet, men hindrar inte tjällyftning om grundläggningen är för grund."  },

      { type: "h2", text: "Ingjuten stolpsko eller bult"  },
      { type: "p", text: "Stolpen fästs med en ingjuten stolpsko, ett ingjutningsjärn eller en bultgrupp. Infästningen ska förankras i betongen och får inte krocka med armeringen:"  },
      { type: "ul", items: [
        "Placera korgen så att stolpskons förankringsdel hamnar innanför byglarna.",
        "Håll täckskikt runt korgen – fundamentet står i fuktig mark.",
        "Låt stolpen stå på betongen, inte direkt i jorden, så att träet inte ruttnar.",
        "Kontrollera läget med snöre eller laser innan gjutning – i efterhand går det inte att flytta.",
      ] },

      { type: "h2", text: "Formrör eller gjuten plint?"  },
      { type: "p", text: "Ett formrör av papp eller plast är det enklaste sättet att gjuta en stolpe. Korgen ställs i röret på distanser så att den hamnar i mitten. För större vindlaster gjuts en bredare fot under röret, som ger fundamentet bättre stabilitet mot vältning. Foten armeras då med en liten bottenmatta."  },

      { type: "h2", text: "Hur många järn går åt?"  },
      { type: "p", text: "Ett exempel: åtta fundament till en carport, varje korg 4 Ø10 × 0,9 m plus fem byglar Ø6 med omkrets cirka 0,6 m. Längsjärn: 8 × 4 × 0,9 = 28,8 m × 0,617 kg/m ≈ 18 kg. Byglar: 8 × 5 × 0,6 = 24 m × 0,222 kg/m ≈ 5 kg. Totalt runt 23 kg armering – en liten men noggrann leverans."  },

      { type: "h2", text: "Vanliga fel" },
      { type: "ul", items: ["Fundamentet för grunt – tjälen lyfter stolpen under första vintern.", "Korgen ligger mot rörets vägg och får inget täckskikt.", "Stolpskon placeras efter gjutning och trycks ner bredvid korgen.",
        "Stolparna inte i liv före gjutning – ett fundament som hamnat fel går inte att flytta.", "För litet fundament för grindstolpar, som får stora moment när grinden hänger ut."] },
      
      { type: "h2", text: "Inköpta plintar eller gjutna?" },
      { type: "p", text: "Färdiga betongplintar från bygghandeln passar för altaner och lätta konstruktioner. När stolpen tar tak-, snö- eller vindlast, eller när du behöver ett fundament med bestämd storlek och bultgrupp, är ett platsgjutet och armerat fundament säkrare. Då kan storleken anpassas efter lasten och marken." },
      
      { type: "h2", text: "Skicka rörmått och antal – få korgarna färdiga"  },
      { type: "p", text: "Ange rörets diameter, fundamentets höjd och antal, eller skicka carportleverantörens fundamentritning via [offertformuläret](/offert). Vi tillverkar [plintkorgar](/produkter/plintkorgar) som passar röret, så att du bara ställer dem på distanser och gjuter. Små beställningar går bra – frakten räknas efter mängd och ort."  },
    ],
    faqs: [
      { q: "Behöver ett stolpfundament armeras?", a: "Lätta staketstolpar gjuts ofta oarmerade. Fundament för carport, skärmtak, grindar och belysningsstolpar armeras normalt, eftersom de tar vindlast och moment." },
      { q: "Hur djupt ska ett stolpfundament gjutas?", a: "Till frostfritt djup eller på ett isolerat och dränerat underlag. Frostdjupet beror på ort och marktyp och är större i norr än i söder." },
      { q: "Hur stor korg behöver en carportstolpe?", a: "Vanligt är fyra längsjärn Ø10–Ø12 med byglar Ø6–Ø8, i ett rör Ø200–300 mm. Snö- och vindlast varierar, så konstruktören eller carportleverantören avgör." },
      { q: "Kan ni tillverka små korgar i liten mängd?", a: "Ja, vi tillverkar korgar efter mått och antal. Pris och frakt anges i offerten." },
    ],
    target: { href: "/produkter/plintkorgar", label: "Beställ plintkorgar" },
    category: "armering-till",
  },

  // 68. Murfundament / L-stöd
  {
    slug: "armering-till-murfundament",
    title: "Armering till murfundament – sula under mur och plank",
    metaTitle: "Armering murfundament – sula under mur",
    metaDescription:
      "Armering till murfundament: sulmått, längsjärn, tvärjärn och startjärn för blockmur och trädgårdsmur, med mängdexempel. Beställ järnen kapade och bockade.",
    excerpt:
      "En mur är bara så stabil som sitt fundament. Så armeras sulan under en trädgårdsmur, ett plank eller en mur av block – och var gränsen till stödmur går.",
    date: D,
    readingMinutes: 5,
    keywords: [
      "armering murfundament",
      "murfundament",
      "gjuta fundament till mur",
      "grundsula mur armering",
      "fundament blockmur",
      "fundament trädgårdsmur",
    ],
    content: [
      { type: "p", text: "Sulan under en fristående mur armeras med 3–4 längsjärn, tvärjärn och – för blockmurar – startjärn upp i blockens kärnor. Armeringen håller ihop sulan när marken ger efter ojämnt, så att muren inte spricker eller lutar."  },
      { type: "p", text: "Sulan armeras med raka järn längs, tvärjärn och startjärn upp i muren. Allt det kan levereras som [klippt och bockad armering](/produkter/klippt-och-bockad), kapat och bockat efter mått och märkt per del."  },

      { type: "h2", text: "Fristående mur eller stödmur?"  },
      { type: "p", text: "Den här guiden gäller murar som står fritt och inte håller emot jord. Om muren tar upp en nivåskillnad – alltså har jord på ena sidan – är det en stödmur eller ett L-stöd, och då dimensioneras både sula och mur för jordtryck. Det beskrivs i guiden om [armering till stödmur](/blogg/armera-stodmur)."  },

      { type: "h2", text: "Typisk sula under fristående mur"  },
      { type: "table", head: ["Mur", "Sula (b × h)", "Typisk armering"], rows: [
        ["Låg trädgårdsmur, < 1 m", "400 × 200 mm", "3 Ø10 längs, tvärjärn Ø8 c/c 300–400"],
        ["Blockmur 1–1,8 m", "500–600 × 250 mm", "4 Ø12 längs, tvärjärn Ø10 c/c 300, startjärn Ø10–Ø12 i blockens kärnor"],
        ["Tungt plank / mur med vindlast", "Enligt ritning", "Längsjärn + byglar, startjärn eller ingjutna stolpfästen"],
      ], caption: "Typvärden för fristående murar på bärkraftig mark. Konstruktören avgör vid högre murar och sämre mark." },

      { type: "h2", text: "Startjärn upp i muren"  },
      { type: "p", text: "En mur av betongblock eller kantblock med hålrum armeras ofta vertikalt: startjärn gjuts in i sulan och sticker upp, och blocken träs över dem. Hålrummen fylls sedan med betong. Startjärnens c/c-avstånd följer blockens kärnor, och längden ska räcka för skarv mot de vertikala järnen i muren. Bocka startjärnen med en hake i sulan så att de förankras ordentligt."  },

      { type: "figure", illustration: "bending-shapes", caption: "Startjärn bockas ofta med hake (L-form) för förankring i sulan."  },

      { type: "h2", text: "Tjäle och grundläggning"  },
      { type: "p", text: "En mur är känslig för ojämn tjällyftning – den spricker eller lutar. Sulan läggs därför på frostfritt djup, eller på ett isolerat, dränerat lager av krossmaterial. Längsjärnen i sulan hjälper till att överbrygga lokala svagheter i marken, men ersätter inte en riktig grundläggning."  },

      { type: "h2", text: "Checklista före gjutning"  },
      { type: "ul", items: [
        "Längsjärnen skarvade med tillräcklig längd och skarvarna förskjutna.",
        "Vinkeljärn i hörn så att sulan fungerar som en enhet.",
        "Täckskikt mot mark med distanser – sulan gjuts ofta direkt mot jord.",
        "Startjärnen fixerade i rätt läge och lod innan betongen kommer.",
      ] },

      { type: "h2", text: "Hur mycket armering?" },
      { type: "p", text: "Exempel: en blockmur på 15 m med sula 500 × 250 mm. Fyra längsjärn Ø12 på 15 m plus skarvar ger cirka 66 m × 0,888 kg/m ≈ 59 kg. Tvärjärn Ø10 c/c 300, längd 0,4 m: 51 st × 0,4 m × 0,617 kg/m ≈ 13 kg. Startjärn Ø10 c/c 400 med längd 1,0 m: 38 st × 0,617 kg/m ≈ 23 kg. Totalt runt 95 kg. Exemplet visar hur mängden räknas – dimensioner och c/c ska följa ritning eller konstruktörens anvisning." },

      { type: "h2", text: "Murad mur av tegel eller natursten" },
      { type: "p", text: "En murad mur av tegel eller natursten armeras sällan vertikalt, men sulan under den är lika viktig. Här räcker det ofta med längsjärn och tvärjärn i sulan. Sprickor i en murad mur beror oftast på att sulan har satt sig ojämnt – därför ska sulan vara tillräckligt styv och ligga på bärkraftigt, frostfritt underlag." },
      
      { type: "h2", text: "Skicka murens längd och sulmått"  },
      { type: "p", text: "Murens längd, sulans bredd och höjd och blockens kärnavstånd räcker för att vi ska räkna åtgången. Vi kapar längsjärnen, bockar tvärjärn och startjärn med hake som [klippt och bockad armering](/produkter/klippt-och-bockad) och buntar dem per typ. Skicka en skiss via [offertformuläret](/offert)."  },
    ],
    faqs: [
      { q: "Hur bred ska sulan under en mur vara?", a: "För en låg fristående mur är 400–600 mm vanligt, beroende på murens höjd, vikt och marken. Högre murar och sämre mark kräver bredare sula – konstruktören avgör." },
      { q: "Behöver murfundamentet armeras?", a: "Ja, oftast. Armeringen håller ihop sulan när marken ger efter ojämnt och förankrar muren via startjärn." },
      { q: "Vad är skillnaden mot en stödmur?", a: "En stödmur håller emot jord på ena sidan och dimensioneras för jordtryck. Ett murfundament under en fristående mur bär främst murens vikt och vindlast." },
      { q: "Jag har ingen ritning – räcker en skiss?", a: "För en låg fristående mur räcker ofta en skiss med längd, sulmått och blocktyp. Vi bockar startjärn med hake efter den. Högre murar och stödmurar ska dimensioneras av en konstruktör." },
    ],
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ klippt & bockad armering" },
    category: "armering-till",
  },

  // 69. Trappa utomhus
  {
    slug: "armering-till-yttertrappa",
    title: "Armering till yttertrappa och entrétrappa på mark",
    metaTitle: "Armering yttertrappa – trappa på mark",
    metaDescription:
      "Armering till yttertrappa på mark: nät, bockade stegjärn, järn i stegnosen och tjälskydd. Exempel för tre steg. Skicka måtten – vi bockar järnen.",
    excerpt:
      "En entrétrappa utomhus vilar oftast på mark och utsätts för tjäle och salt. Så armeras trappan, stegen och trapplanet.",
    date: D,
    readingMinutes: 5,
    keywords: [
      "armering yttertrappa",
      "gjuta yttertrappa",
      "entrétrappa betong armering",
      "armering trappa utomhus",
      "trapplan armering",
      "gjuta trappsteg betong",
    ],
    content: [
      { type: "p", text: "En entrétrappa på mark armeras med nät i botten och trapplanet, bockade järn som följer stegen och ett rakt järn i varje stegnos. Huvudfienden är tjälen, inte lasten – så grundläggningen avgör hur armeringen ska förankras."  },
      { type: "p", text: "Trappans armering – nät, raka järn och bockade stegjärn – levereras som [klippt och bockad armering](/produkter/klippt-och-bockad) efter mått. En fribärande trappa mellan två plan beskrivs i guiden om [armering till betongtrappa](/blogg/armering-till-betongtrappa)."  },

      { type: "h2", text: "Tre vanliga utföranden"  },
      { type: "table", head: ["Utförande", "Hur den bärs", "Typisk armering"], rows: [
        ["Massiv trappa på fyllning", "Trappan gjuts på packad, frostskyddad fyllning", "Nät i botten/platta + bockade järn i stegen"],
        ["Trappa på sulor", "Vilar på sula vid husvägg och vid nedre steg", "Fungerar som lutande platta: längsjärn i underkant, fördelningsjärn"],
        ["Trapplan + några steg", "Planet ansluter mot husgrunden", "Planet armeras som platta, förankras i grunden enligt ritning"],
      ], caption: "Typlösningar. Konstruktören avgör dimension och c/c när trappan bär mer än sin egenvikt." },

      { type: "h2", text: "Tjäle är huvudfienden"  },
      { type: "p", text: "En trappa som lyfts av tjälen men sitter fast i husgrunden spricker – ofta just vid anslutningen. Därför grundläggs yttertrappor antingen frostfritt, med isolering under och dränerande fyllning, eller så görs trappan fri från huset med en fog så att den kan röra sig utan att ta skada. Lös detta innan du armerar, eftersom det avgör om armeringen ska förankras i grunden eller inte."  },

      { type: "h2", text: "Armering av stegen"  },
      { type: "p", text: "I en massiv trappa på mark räcker det ofta med ett nät i bottenplattan och några bockade järn som följer stegens form. Järnen bockas som en sicksack eller som separata hakar per steg, så att nosen på varje steg har armering. Det minskar risken att nosen spjälkas av vid frost."  },
      { type: "ul", items: [
        "Nät Ø6–Ø8 c/c 150 i trappans botten och i trapplanet.",
        "Bockade järn Ø8–Ø10 längs stegen, ofta ett per 200–300 mm trappbredd.",
        "Ett rakt järn i varje stegnos, bundet till de bockade järnen.",
        "Distanser så att täckskiktet mot stegens ovansida blir tillräckligt för frost och salt.",
      ] },
      { type: "figure", illustration: "cover-layer", caption: "Täckskiktet är extra viktigt i stegnosar som utsätts för frost och salt."  },

      { type: "h2", text: "Trapplan och räcken"  },
      { type: "p", text: "Ett större trapplan framför dörren armeras som en liten platta på mark. Räckesfästen och ingjutningsgods placeras innan gjutning och får inte krocka med armeringen. Planera också för fall bort från dörren, så att vatten inte rinner mot huset."  },

      { type: "h2", text: "Exempel: entrétrappa med tre steg" },
      { type: "p", text: "En trappa 1,5 m bred med tre steg (steghöjd 160 mm, stegdjup 300 mm) och ett trapplan 1,5 × 1,2 m:" },

      { type: "table", head: ["Position", "Antal", "Ungefärlig vikt"], rows: [
        ["Nät Ø6 c/c 150, trapplan + botten (≈ 3,5 m²)", "1 nät, kapat", "≈ 10 kg"],
        ["Bockade stegjärn Ø8, c/c 250 över 1,5 m", "7 st à ≈ 2,0 m", "≈ 6 kg"],
        ["Raka nosjärn Ø8, 1,4 m", "3 st", "≈ 2 kg"],
      ], caption: "Exempel. Nät Ø6 c/c 150 väger ≈ 3,0 kg/m². Varje stegjärn bockas efter trappans verkliga mått." },
      { type: "p", text: "Mängden är liten, men varje järn bockas efter just din trappa. Därför räcker det med en skiss som visar steghöjd, stegdjup, bredd och trapplanets mått." },

      { type: "h2", text: "Platsgjuten eller prefab?" },
      { type: "p", text: "Prefabricerade trappsteg och trappelement av betong finns i standardmått. En platsgjuten trappa passar när måtten är speciella, när trappan ska gjutas ihop med en platta eller ett trapplan, eller när den ska ha en viss form. Då är det armeringen som anpassas efter trappan, inte tvärtom." },
      
      { type: "h2", text: "Skicka trappans mått – få stegjärnen bockade"  },
      { type: "p", text: "Rita trappan i genomskärning med steghöjd, stegdjup och bredd och skicka den via [offertformuläret](/offert). Vi bockar stegjärnen efter måtten och skickar dem med nät och nosjärn som [klippt och bockad armering](/produkter/klippt-och-bockad), märkt så att du ser vilket järn som hör till vilket steg."  },
    ],
    faqs: [
      { q: "Behöver en yttertrappa på mark armeras?", a: "Ja, normalt. Armeringen håller ihop trappan när marken rör sig och skyddar stegnosarna mot att spjälkas av vid frost." },
      { q: "Ska yttertrappan sitta fast i husgrunden?", a: "Det beror på grundläggningen. Grundläggs trappan frostfritt kan den förankras. Annars görs den ofta fri från huset med en fog. Konstruktören avgör." },
      { q: "Hur armeras trappstegen?", a: "Med bockade järn som följer stegens form och ett rakt järn i varje stegnos, ovanpå ett nät i trappans botten. Täckskiktet ska vara tillräckligt för frost och salt." },
      { q: "Kan ni bocka stegjärn efter mina mått?", a: "Ja, skicka stegens höjd, djup och bredd så bockar vi järnen efter det." },
    ],
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ klippt & bockad armering" },
    category: "armering-till",
  },

  // 70. Brunn / tank
  {
    slug: "armering-till-betongtank",
    title: "Armering till brunn och tank i betong",
    metaTitle: "Armering betongtank & brunn – tät konstruktion",
    metaDescription:
      "Armering till betongtank och brunn: ringdrag, sprickbredd enligt SS-EN 1992-3, botten mot grundvatten och räkneexempel. Ringar bockade efter radie.",
    excerpt:
      "En tank eller brunn i betong ska hålla vätska inne och grundvatten ute. Armeringens uppgift är att hålla sprickorna så små att konstruktionen förblir tät.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "armering betongtank",
      "armering brunn betong",
      "gjuta betongtank",
      "vattentank betong armering",
      "ringarmering tank",
      "dagvattenmagasin betong armering",
    ],
    content: [
      { type: "p", text: "En platsgjuten tank eller brunn armeras för täthet, inte bara för bärförmåga: ringar eller dubbelsidig väggarmering som tar vätsketrycket, en botten som klarar grundvattnets lyftkraft och tätade gjutfogar. Det gäller vattenreservoarer, dagvattenmagasin, pumpgropar och släckvattentankar."  },
      { type: "p", text: "Konstruktionen liknar en pool: botten, väggar och tätade gjutfogar. Därför levererar vi armering till tankar och brunnar på samma sätt som [poolarmering](/produkter/poolarmering) – bockad efter ritning och märkt per del."  },

      { type: "h2", text: "Rund eller rektangulär"  },
      { type: "table", head: ["Form", "Hur väggen arbetar", "Huvudarmering"], rows: [
        ["Rund tank / brunn", "Vätsketrycket ger ringdrag i väggen", "Horisontella ringar, tätare nedtill + vertikala järn"],
        ["Rektangulär tank", "Väggarna böjs som plattor mellan hörn och botten", "Dubbelsidig armering, förstärkt i hörn och vid botten"],
        ["Pumpgrop / mindre brunn", "Jord- och vattentryck utifrån", "Dubbelsidig armering, vinkeljärn i hörn"],
      ], caption: "Principer. Dimension och c/c bestäms av konstruktören." },

      { type: "h2", text: "Ringdrag – ett räkneexempel"  },
      { type: "p", text: "I en rund tank pressar vätskan väggen utåt. Trycket ökar linjärt med djupet: för vatten cirka 10 kN/m³ × djupet. Ringdragkraften per meter vägghöjd blir N = p × r. I en tank med radie 3 m är trycket 3 m under ytan cirka 30 kPa och ringdraget cirka 90 kN per meter vägghöjd."  },
      { type: "p", text: "För en tät konstruktion begränsar konstruktören spänningen i stålet för att hålla nere sprickbredden. Med en tillåten stålspänning på till exempel 200 MPa behövs då ungefär 450 mm² ringarmering per meter höjd vid botten – till exempel Ø10 c/c 300 på båda sidor (2 × 262 mm²/m). Exemplet visar principen, inte en dimensionering."  },

      { type: "h2", text: "Sprickbredd enligt SS-EN 1992-3"  },
      { type: "p", text: "Vätskebehållare dimensioneras enligt Eurokod 2 del 3 (SS-EN 1992-3), som delar in konstruktioner i täthetsklasser. Ju högre krav på täthet, desto mindre tillåten sprickbredd – och desto mer armering. Det ger några praktiska regler:"  },
      { type: "ul", items: [
        "Klenare järn på tätare avstånd begränsar sprickor bättre än få grova.",
        "Skarvar i ringarmering förskjuts så att de inte hamnar i samma snitt.",
        "Gjutfogen mellan botten och vägg tätas med fogband eller injekteringsslang.",
        "Täckskiktet väljs för miljön – avloppsvatten och kemikalier kräver mer.",
      ] },

      { type: "h2", text: "Botten och grundvatten"  },
      { type: "p", text: "En tom tank under grundvattennivån kan lyftas av vattentrycket. Bottenplattan görs därför ofta tjockare eller förlängs utanför väggarna så att jorden ovanpå håller emot, och armeringen dimensioneras både för full och tom tank. Startjärn från botten upp i väggarna förankrar konstruktionen."  },

      { type: "h2", text: "Därför passar prefabricerad armering"  },
      { type: "p", text: "Ringar med exakt radie, hörnjärn och startjärn är tidskrävande att bocka på plats. Med armeringen tillverkad efter ritning och märkt per position går montaget fortare och sprickkraven uppfylls som konstruktören har tänkt. Mer om skarvarna finns i guiden om [skarvlängd armering](/blogg/skarvlangd-armering)."  },

      { type: "h2", text: "Vanliga fel" },
      { type: "ul", items: ["Ringskarvar i samma snitt runt hela tanken.", "Startjärn för korta för skarv med väggarmeringen.", "Distanser som ger för litet täckskikt mot vätskesidan.", "Genomföringar för rör som borras i efterhand genom armeringen i stället för att gjutas in."] },

      { type: "p", text: "Planera genomföringarna tidigt. Ett rör som gjuts in med flänsar eller tätningsringar blir tätt; ett hål som borras i efterhand skär av armeringsjärn och blir en svag punkt. Och tanken provtrycks med vatten innan den tas i bruk – en läckande gjutfog är dyr att laga i efterhand." },

      { type: "h2", text: "Ringar, hörnjärn och startjärn efter ritning"  },
      { type: "p", text: "Skicka tankens armeringsritning eller bockningslista via [offertformuläret](/offert). Ringarna bockas efter radien och märks per höjdnivå, hörn- och startjärn per position. Vi levererar på samma sätt som till bassänger – se [poolarmering](/produkter/poolarmering)."  },
    ],
    faqs: [
      { q: "Hur armeras en rund betongtank?", a: "Med horisontell ringarmering som tar vätsketrycket, tätare längst ner, vertikal armering och en armerad botten med startjärn upp i väggen. Konstruktören dimensionerar." },
      { q: "Vilken norm gäller för betongtankar?", a: "Eurokod 2 del 3, SS-EN 1992-3, för vätskebehållare. Den ger krav på sprickbredd beroende på täthetsklass." },
      { q: "Varför används klena järn tätt i stället för grova?", a: "Många klena järn fördelar sprickorna så att de blir fler men smalare, vilket ger bättre täthet." },
      { q: "Varför lyfts en tom tank av grundvattnet?", a: "Vattnet under bottenplattan trycker uppåt. Om tanken är tom och lätt kan den flyta upp. Konstruktören motverkar det med tjockare botten eller en utskjutande bottenplatta som belastas av jord." },
    ],
    target: { href: "/produkter/poolarmering", label: "Armering till tankar & bassänger" },
    category: "armering-till",
  },

  // 71. Maskinfundament
  {
    slug: "armering-till-maskinfundament",
    title: "Armering till maskinfundament i industrin",
    metaTitle: "Armering maskinfundament – industri",
    metaDescription:
      "Armering till maskinfundament: ytarmering mot temperatursprickor, järn kring bultgrupper och vikt per m². Tillverkad efter ritning, märkt per position.",
    excerpt:
      "Pressar, kompressorer, sågverk och kvarnar står på massiva fundament som ska tåla vibrationer i decennier. Så är armeringen uppbyggd.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "armering maskinfundament",
      "maskinfundament betong",
      "fundament för maskiner",
      "gjuta maskinfundament",
      "industrifundament armering",
      "fundament press armering",
    ],
    content: [
      { type: "p", text: "Ett maskinfundament armeras med ytarmering på alla sidor, grövre bottenarmering, extra järn runt bultgrupperna och genomgående byglar som binder ihop blocket. Det är massan som tar upp vibrationerna från pressen, kompressorn eller krossen – armeringen håller ihop massan och begränsar sprickorna."  },
      { type: "p", text: "Industrifundament har ofta många positioner och ska passa exakt mot bultgrupper och utsparingar. Som [armeringsleverantör](/armeringsleverantor) tillverkar vi armeringen efter konstruktörens ritning och märker varje position, så att montaget går rätt första gången."  },

      { type: "h2", text: "Typisk uppbyggnad"  },
      { type: "table", head: ["Del", "Uppgift", "Typisk armering"], rows: [
        ["Ytarmering alla sidor", "Sprickbegränsning, håller ihop blocket", "Nät eller järn Ø12–Ø16 c/c 150–200 i botten, topp och sidor"],
        ["Bottenarmering", "Fördelar last mot mark eller pålar", "Grövre järn i två riktningar"],
        ["Kring bultar och utsparingar", "Tar koncentrerade krafter", "Extra järn och byglar runt bultgrupper"],
        ["Genomgående byglar / S-hakar", "Binder ihop över- och underkant", "Byglar eller hakar i rutnät genom blocket"],
      ], caption: "Typvärden. Fundamentets mått och armering bestäms av konstruktören utifrån maskinleverantörens laster." },

      { type: "h2", text: "Maskinleverantörens underlag"  },
      { type: "p", text: "Maskinleverantören anger statiska och dynamiska laster, varvtal, bultplan och utsparingar. Konstruktören dimensionerar fundamentets massa och styvhet så att resonans undviks. För armeringen betyder det att bultgrupper, ingjutningsgods och kabelrännor ska vara låsta innan armeringsritningen görs – en flyttad bult kan kräva omritning."  },

      { type: "h2", text: "Isolerat från golvet"  },
      { type: "p", text: "Fundamentet gjuts normalt separat från golvplattan, med en fog runt om, så att vibrationerna inte sprids. Armeringen ska därför inte gå igenom fogen. Fundamentet kan stå direkt på mark, på berg eller på pålar – med pålar kombineras armeringen med pålplintar, se [platta på pålar](/blogg/armering-platta-pa-palar)."  },

      { type: "h2", text: "Massiva gjutningar och temperatur"  },
      { type: "p", text: "Stora fundament utvecklar mycket värme när betongen härdar. Kärnan blir varm medan ytan svalnar, och skillnaden kan ge sprickor. Det motverkas med betongsammansättning, gjutetapper och ytarmering som begränsar sprickbredden. Därför har även fundament som statiskt inte behöver mycket armering en ordentlig ytarmering på alla sidor."  },

      { type: "h2", text: "Praktiska tips"  },
      { type: "ul", items: [
        "Låt bultkorgar och ankarlådor monteras innan överkantsarmeringen läggs, eller lämna luckor enligt ritningen.",
        "Använd kraftiga stöd för överkantsarmeringen – den bär folk och utrustning under gjutningen.",
        "Märk armeringen per position och lager, särskilt när fundamentet har flera nivåer.",
        "Planera skarvlägen så att de inte sammanfaller med bultgrupperna.",
        "Be maskinleverantören om fundamentunderlaget tidigt – bultplan, utsparingar och laster styr hela armeringsritningen.",
      ] },

      { type: "h2", text: "Mängd och format" },
      { type: "p", text: "Ett stort maskinfundament kan ha både grova raka järn i långa längder och många korta byglar och hakar. Långa järn levereras som raka stänger i den längd ritningen anger, upp till transportens begränsningar, och skarvas där konstruktören bestämt. Byglar och hakar levereras buntade per position. Exempel på vikt: ett järn Ø16 väger 1,58 kg/m och ett Ø20 2,47 kg/m – ytarmering Ø16 c/c 200 i två riktningar väger alltså cirka 15,8 kg per m² och lager." },

      { type: "p", text: "Fundamentets topp undergjuts ofta efter att maskinen är uppriktad. Överkantsarmeringen ska därför sluta med täckskikt under undergjutningens nivå, så att bultar och lager kan justeras utan att järn är i vägen." },

      { type: "h2", text: "Skicka ritningen och bultplanen"  },
      { type: "p", text: "Skicka armeringsritning eller bockningslista tillsammans med bultplanen via [offertformuläret](/offert). Vi kontrollerar att positionerna går ihop, tillverkar per lager och levererar i den ordning fundamentet byggs – även till bruk och industrier i Norrland. Mer om hur vi arbetar finns under [armeringsleverantör](/armeringsleverantor)."  },
    ],
    faqs: [
      { q: "Hur armeras ett maskinfundament?", a: "Med ytarmering på alla sidor, bottenarmering, extra järn runt bultgrupper och genomgående byglar som binder ihop blocket. Konstruktören dimensionerar utifrån maskinleverantörens laster." },
      { q: "Varför gjuts maskinfundament separat från golvet?", a: "För att vibrationer från maskinen inte ska spridas till golvet och byggnaden. En fog runt fundamentet skiljer dem åt." },
      { q: "Varför behövs ytarmering i ett massivt fundament?", a: "Värmen från härdningen ger temperaturskillnader mellan kärna och yta. Ytarmeringen begränsar sprickorna som annars kan uppstå." },
      { q: "Kan ni leverera till industriprojekt i etapper?", a: "Ja, armeringen märks per position och etapp och levereras enligt tidplanen. Frakt beräknas efter mängd och ort." },
    ],
    target: { href: "/armeringsleverantor", label: "Armering till industriprojekt" },
    category: "armering-till",
  },

  // 72. Vindkraftsfundament
  {
    slug: "armering-till-vindkraftsfundament",
    title: "Armering till vindkraftsfundament",
    metaTitle: "Armering vindkraftsfundament – typer & logistik",
    metaDescription:
      "Armering till vindkraftsfundament: radial- och ringarmering, bultkorg, utmattning, vikter Ø20–Ø32. Leverans per fundament till vindparker i hela Sverige.",
    excerpt:
      "Ett vindkraftsfundament innehåller tiotals ton armering, ofta grova dimensioner och tät armering kring bultkorgen. Så är det uppbyggt – och vad som krävs av leveransen.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "armering vindkraftsfundament",
      "vindkraftsfundament",
      "fundament vindkraftverk armering",
      "gravitationsfundament vindkraft",
      "bergförankrat fundament vindkraft",
      "armering vindpark",
    ],
    content: [
      { type: "p", text: "Ett vindkraftsfundament armeras med radiella järn och ringar i över- och underkant, skjuvbyglar däremellan och tät armering runt bultkorgen – ofta i Ø20–Ø32 och tiotals ton per fundament. Lasten växlar riktning hela tiden, så fundamentet kontrolleras för utmattning. För entreprenören är logistiken lika avgörande som armeringen."  },
      { type: "p", text: "Som [armeringsleverantör](/armeringsleverantor) till anläggningsentreprenörer tillverkar vi armeringen efter konstruktörens ritning, märker den per fundament och position och levererar till vindparker i hela Sverige, inklusive Norrland."  },

      { type: "h2", text: "Två vanliga fundamenttyper"  },
      { type: "table", head: ["Typ", "Hur det bär", "Armering"], rows: [
        ["Gravitationsfundament", "Stor, tung platta som håller emot vältning med egen vikt och återfyllning", "Radial- och ringarmering i över- och underkant, skjuvbyglar, tät armering runt bultkorgen"],
        ["Bergförankrat fundament", "Mindre platta som förankras i berget med förspända bergstag", "Mindre volym, koncentrerad armering kring stag och bultkorg"],
        ["Pålat fundament", "Platta på pålar i lös mark", "Som gravitationsfundament + armering mot pålhuvuden"],
      ], caption: "Översikt. Val av fundamenttyp och armering görs av konstruktören utifrån turbin och geoteknik." },

      { type: "h2", text: "Radial- och ringarmering"  },
      { type: "p", text: "Ett runt eller mångkantigt gravitationsfundament armeras ofta med radiella järn som går från centrum ut mot kanten och ringar eller polygonala järn runt om. I över- och underkant ligger var sitt sådant system. Däremellan sitter skjuvarmering i form av byglar eller hakar. Dimensionerna är ofta grova, Ø20–Ø32, och skarvarna många."  },
      { type: "ul", items: [
        "Underkant: radial- och ringjärn som tar böjmoment mot marken.",
        "Överkant: motsvarande system, ofta något klenare.",
        "Skjuvbyglar och hakar som binder över- och underkant.",
        "Tät armering och spjälkarmering runt bultkorgen i mitten.",
        "Startjärn eller anslutning till sockeln där tornet ansluter.",
      ] },

      { type: "h2", text: "Bultkorgen"  },
      { type: "p", text: "I mitten av fundamentet sitter en bultkorg eller ett ankarsystem som tornet skruvas fast i. Den levereras normalt via turbinleverantören och placeras först. Armeringen ska sedan läggas runt och genom korgen utan att krocka med bultarna – därför är exakta mått och tydlig märkning avgörande."  },

      { type: "h2", text: "Utmattning och kvalitet"  },
      { type: "p", text: "Vindlasten växlar miljontals gånger under fundamentets livslängd, så konstruktionen kontrolleras för utmattning. Det ställer krav på materialet och på utförandet: kamstål B500B enligt SS 212540 och SS-EN 10080, bockningsradier enligt ritning och skarvar på angivna lägen. Eventuell svetsning ska ske enligt SS-EN ISO 17660 och vara godkänd av konstruktören."  },

      { type: "h2", text: "Logistik till vindparken"  },
      { type: "p", text: "Vindparker ligger ofta på skogsvägar långt från tätort, och gjutningarna styrs av väder och kranplanering. Det som gör skillnad för entreprenören:"  },
      { type: "ol", items: [
        "Leverans i den ordning armeringen monteras – underkant, skjuv, överkant.",
        "Buntar märkta per position och fundament, så att inget behöver sorteras på plats.",
        "Frakt planerad efter vägens bärighet och mottagningen på plats.",
        "En kontakt som tar ändringar när ritningen revideras.",
      ] },

      { type: "h2", text: "Vikt per meter för grova dimensioner" },
      { type: "table", head: ["Dimension", "Vikt (kg/m)", "Area (mm²)"], rows: [["Ø20", "2,47", "314"], ["Ø25", "3,85", "491"], ["Ø32", "6,31", "804"]], caption: "Kamstål B500B – nominella värden." },

      { type: "p", text: "Med grova dimensioner blir vikterna stora snabbt. Ett enda radialjärn Ø32 som är 10 m långt väger drygt 63 kg. Det påverkar hur buntarna ska packas, hur de lyfts av på plats och hur många transporter som behövs per fundament." },
      
      { type: "p", text: "Bergförankrade fundament kräver färre ton men mer precision: armeringen ska lämna fria kanaler för stagen, som borras och spänns efter gjutningen." },

      { type: "h2", text: "Begär offert per fundament"  },
      { type: "p", text: "Skicka armeringsritningar eller bockningslistor och antal fundament via [offertformuläret](/offert). Du får mängd och leveransplan per fundament, med frakt planerad efter vägen och mottagningen på plats. Pålade fundament hanteras som [pålarmering](/produkter/palarmering)."  },
    ],
    faqs: [
      { q: "Hur mycket armering går det åt till ett vindkraftsfundament?", a: "Ofta tiotals ton per fundament, beroende på turbinstorlek, fundamenttyp och mark. Exakt mängd framgår av armeringsritningen." },
      { q: "Vad är skillnaden mellan gravitations- och bergförankrat fundament?", a: "Gravitationsfundamentet håller emot vältning med sin egen vikt. Det bergförankrade är mindre och förankras i berget med förspända stag." },
      { q: "Vem levererar bultkorgen?", a: "Normalt turbinleverantören. Armeringen tillverkas så att den passar runt och genom korgen enligt ritningen." },
      { q: "Kan ni leverera till vindparker i Norrland?", a: "Ja, vi levererar i hela Sverige inklusive Norrland. Frakt planeras efter mängd, ort och mottagning och anges i offerten." },
    ],
    target: { href: "/armeringsleverantor", label: "Armering till vindkraftsprojekt" },
    category: "armering-till",
  },

  // 73. Grund för hus på berg
  {
    slug: "armering-grund-pa-berg",
    title: "Armering till grund för hus på berg",
    metaTitle: "Grund på berg – armering & dymlingar",
    metaDescription:
      "Grund på berg: platta på avjämnat berg, kantbalk med varierande höjd eller plintar – och dymlingar borrade i berget. Beställ grundarmeringen efter ritning.",
    excerpt:
      "Berg är den bästa grunden – men den är ojämn. Så armeras en platta, kantbalk eller plintar när huset ska stå på berg.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "grund på berg",
      "armering grund på berg",
      "bygga hus på berg grund",
      "gjuta platta på berg",
      "dymlingar berg armering",
      "kantbalk mot berg",
    ],
    content: [
      { type: "p", text: "På berg armeras grunden som en vanlig platta eller som kantbalkar och plintar som följer berget, ofta med dymlingar borrade i berget. Berget sätter sig inte och tjälar inte, men det är sällan plant – och det är lutningen som styr armeringen."  },
      { type: "p", text: "Vi levererar [grundarmering](/produkter/grundarmering) till grunder på berg – nät, kantbalksarmering, dymlingar och bockade järn för kantbalkar med varierande höjd, efter ritning. Plattans grundprinciper beskrivs i guiden om [armering till betongplatta](/blogg/armering-till-betongplatta)."  },

      { type: "h2", text: "Tre vanliga lösningar"  },
      { type: "table", head: ["Lösning", "När den passar", "Armering"], rows: [
        ["Platta på avjämnat berg", "Berget sprängs eller avjämnas och fylls upp med krossmaterial", "Som platta på mark: nät, kantbalksarmering, eventuellt dymlingar vid kanten"],
        ["Kantbalk/sula direkt på berg", "Berget sluttar – kantbalken följer berget", "Kantbalk med varierande höjd, byglar, dymlingar borrade i berget"],
        ["Plintar eller pelare på berg", "Kraftig lutning eller sockelvåning", "Plintkorgar, förankringsjärn borrade i berget, balkar mellan plintarna"],
      ], caption: "Typlösningar. Geotekniker och konstruktör bestämmer lösningen för den aktuella tomten." },

      { type: "h2", text: "Dymlingar – förankring i berget"  },
      { type: "p", text: "Där grunden ska hållas fast mot berget, eller där berget lutar så mycket att grunden kan glida, borras armeringsjärn in i berget. Järnen gjuts eller injekteras fast i borrhålet och binds sedan till grundens armering. Dimension, borrdjup, c/c och injekteringsbruk bestäms av konstruktören – det finns inget standardmått som passar alla tomter."  },
      { type: "ul", items: [
        "Borrhålet rensas från borrkax och vatten innan järnet sätts.",
        "Järnet centreras i hålet så att det omsluts helt av bruk.",
        "Den del som sticker upp bockas eller skarvas mot kantbalkens armering enligt ritning.",
      ] },

      { type: "h2", text: "Kantbalk med varierande höjd"  },
      { type: "p", text: "När berget sluttar blir kantbalken högre i ena änden än i den andra. Byglarna får då olika höjd längs balken, och längsjärnen kan behöva trappas. Med en bockningslista per sektion kan byglarna tillverkas i exakt rätt höjd i stället för att kapas och anpassas på plats. Läs mer om byglarnas former i guiden om [kantbalksbygel](/blogg/kantbalksbygel)."  },

      { type: "h2", text: "Vatten och radon"  },
      { type: "p", text: "Vatten rinner längs bergytan och kan samlas under plattan. Ett dränerande lager och dränering runt huset är därför viktigt även om berget inte tjälar. Berg kan också avge radon – det påverkar inte armeringen men planeras in i grunden med tät platta och eventuell radonsug."  },

      { type: "h2", text: "Vad ska ingå i beställningen?"  },
      { type: "ul", items: [
        "Nät till plattan, med distanser och najtråd.",
        "Kantbalksbyglar i rätt höjder per sektion.",
        "Längsjärn och hörnjärn för kantbalken.",
        "Dymlingar kapade och bockade enligt ritningen.",
      ] },

      { type: "h2", text: "Sprängning eller anpassning?" },
      { type: "p", text: "Det går ofta att välja mellan att spränga berget plant och att anpassa grunden efter berget. Sprängning ger en enklare grund och en vanlig platta, men kostar och kan ge sprickor i berget. Att följa berget med kantbalkar och plintar sparar sprängning men ger fler unika armeringsdetaljer. Valet görs tidigt med geotekniker och konstruktör – och påverkar hur bockningslistan ser ut." },

      { type: "h2", text: "Exempel: byglar som följer berget" },
      { type: "p", text: "En kantbalk på 12 m där berget faller 450 mm. Med byglar c/c 300 blir det 41 byglar. Delas balken i tre sektioner med bygelhöjd 300, 450 och 600 mm bockas tre bygeltyper, märkta per sektion – i stället för 41 byglar som kapas och anpassas på plats. Sektionsindelningen görs av konstruktören eller i bockningslistan." },
      { type: "p", text: "Isoleringen under och vid plattans kant påverkar höjderna. Kantbalkens armering ska ha rätt täckskikt även där betongen gjuts direkt mot berget." },

      { type: "h2", text: "Skicka ritningen – få byglarna per sektion"  },
      { type: "p", text: "Skicka grundritningen eller bockningslistan via [offertformuläret](/offert). Vi tillverkar nät, kantbalksbyglar i rätt höjd per sektion och dymlingar som [grundarmering](/produkter/grundarmering), märkt så att varje järn hamnar på sin plats på tomten."  },
    ],
    faqs: [
      { q: "Behöver en grund på berg armeras?", a: "Ja. Plattan och kantbalkarna armeras som en vanlig grund. Berget ger bra bärighet men ersätter inte armeringen i betongen." },
      { q: "Vad är dymlingar?", a: "Armeringsjärn som borras och gjuts eller injekteras fast i berget och binds till grundens armering, så att grunden förankras mot berget." },
      { q: "Hur djupt ska dymlingar borras?", a: "Det bestämmer konstruktören utifrån laster, bergets kvalitet och järnets dimension. Det finns inget generellt mått." },
      { q: "Kan ni tillverka kantbalksbyglar i olika höjder?", a: "Ja, efter bockningslista per sektion, så att varje bygel passar bergets lutning." },
    ],
    target: { href: "/produkter/grundarmering", label: "Begär offert på grundarmering" },
    category: "armering-till",
  },

  // 74. Platta på pålar
  {
    slug: "armering-platta-pa-palar",
    title: "Armering till platta på pålar",
    metaTitle: "Armering platta på pålar – pålplintar & balkar",
    metaDescription:
      "Platta på pålar: armering i över- och underkant, pålplintar, grundbalkar och genomstansning. När plintkorgarna ska beställas. Begär offert på pålarmering.",
    excerpt:
      "På lös lera bärs huset av pålar i stället för av marken. Plattan blir då ett bjälklag över pålarna – och armeras därefter.",
    date: D,
    readingMinutes: 6,
    keywords: [
      "platta på pålar",
      "armering platta på pålar",
      "pålad grundplatta armering",
      "pålplint armering",
      "grundbalk pålar armering",
      "pålgrundläggning armering",
    ],
    content: [
      { type: "p", text: "En platta på pålar armeras som ett bjälklag: i både över- och underkant, med extra överkantsjärn över pålhuvudena och ofta pålplintar eller grundbalkar. Skälet är att plattan inte längre bärs jämnt av marken utan spänner mellan pålarna, som slås eller borras ner genom lös lera till fastare lager."  },
      { type: "p", text: "Armeringen över pålarna – pålplintar, pålkorgar och förstärkningar – är en specialitet i sig. Vi tillverkar den som [pålarmering](/produkter/palarmering) efter konstruktörens ritning, märkt per påle och position."  },

      { type: "h2", text: "Tre sätt att bygga plattan"  },
      { type: "table", head: ["Utförande", "Hur lasten går", "Huvudarmering"], rows: [
        ["Platta direkt på pålar", "Plattan spänner mellan pålarna i båda riktningar", "Nät/järn i över- och underkant, förstärkning över pålhuvuden"],
        ["Platta på grundbalkar", "Plattan bärs av balkar som går mellan pålplintar", "Balkkorgar, plintkorgar, plattan armerad som bjälklag"],
        ["Pålplintar under bärande linjer", "Pålgrupper under väggar och pelare", "Plintkorgar över varje pålgrupp, kantbalk/grundbalk mellan"],
      ], caption: "Typlösningar. Geotekniker och konstruktör väljer system." },

      { type: "h2", text: "Över- och underkant – båda behövs"  },
      { type: "p", text: "En platta på mark har mest drag i underkant mellan stödpunkterna. På pålar blir bilden en annan: mellan pålarna böjs plattan nedåt och får drag i underkant, men över pålarna böjs den åt andra hållet och får drag i överkant. Därför armeras pålade plattor i både över- och underkant, med extra överkantsarmering koncentrerad över pålhuvudena."  },

      { type: "h2", text: "Genomstansning vid pålhuvudet"  },
      { type: "p", text: "Pålen trycker upp mot plattan på en liten yta. Utan tillräcklig tjocklek eller armering kan pålen stansa igenom plattan som en spik genom kartong. Konstruktören kontrollerar genomstansning enligt Eurokod 2 och lägger vid behov in stansarmering – byglar eller särskilda stansbyglar runt pålhuvudet – eller förtjockar plattan lokalt till en pålplint."  },

      { type: "h2", text: "Pålplintar och pålkorgar"  },
      { type: "ul", items: [
        "Pålplint: förtjockning eller block över en påle eller pålgrupp, armerad med korg.",
        "Bottenarmering i plinten fördelar lasten mellan pålarna i gruppen.",
        "Pålens armering eller anslutningsjärn förankras upp i plinten enligt pålleverantörens anvisning.",
        "Byglar binder ihop plinten och tar tvärkrafter.",
      ] },
      { type: "p", text: "Mer om korgarnas uppbyggnad finns i guiden om [armeringskorgar](/blogg/armeringskorgar-palarmering)."  },

      { type: "h2", text: "Toleranser för pålarna"  },
      { type: "p", text: "Pålar hamnar sällan exakt där ritningen säger. Efter pålningen mäts pålarnas verkliga läge in, och konstruktören bedömer om avvikelserna kräver extra armering eller ändrade plintar. Beställ därför plintkorgarna när pålarna är inmätta, eller planera en tolerans i korgarnas mått."  },

      { type: "h2", text: "Märkning och leverans"  },
      { type: "p", text: "En pålad grund kan ha hundratals plintar som liknar varandra men inte är identiska. Märkning per plint och leverans i monteringsordning sparar mycket tid – särskilt när några plintar har fått ändrade mått efter inmätningen."  },

      { type: "h2", text: "Pålar i olika material" },
      { type: "p", text: "Vanliga pålar är slagna betongpålar, stålrörspålar och borrade pålar. Typen påverkar hur pålen ansluts till plattan: en betongpåle kan ha anslutningsjärn som sticker upp, en stålrörspåle kan ha en topplatta eller ingjutet armeringsjärn. Pålleverantören och konstruktören anger detaljen, och plintkorgen anpassas efter den." },
      { type: "p", text: "Grundbalkar mellan pålplintarna armeras som vanliga balkar, med längsjärn och byglar. Läs mer om reglerna i guiden om [armering till balk](/blogg/armering-till-balk). Plattan ovanpå armeras ofta med nät i båda lagren, kompletterat med lösa järn över pålarna och balkarna." },
      
      { type: "h2", text: "Beställ i två steg"  },
      { type: "p", text: "Plattans nät och grundbalkarnas korgar kan beställas när ritningen är klar. Plintkorgarna beställs bäst när pålarna är inmätta. Skicka ritningen och, när den finns, inmätningen via [offertformuläret](/offert) – vi tillverkar [pålarmering](/produkter/palarmering), balkkorgar och plattarmering märkt per plint och position."  },
    ],
    faqs: [
      { q: "Varför armeras en platta på pålar i både över- och underkant?", a: "Mellan pålarna får plattan drag i underkant, men över pålarna får den drag i överkant. Båda zonerna behöver armering." },
      { q: "Vad är genomstansning?", a: "Att en koncentrerad last – här pålens tryck – stansar igenom plattan. Det motverkas med tjockare platta, pålplint eller stansarmering enligt konstruktörens beräkning." },
      { q: "Vad är en pålplint?", a: "Ett armerat betongblock eller en förtjockning ovanpå en påle eller pålgrupp, som för över lasten från plattan eller balken till pålarna." },
      { q: "När ska plintkorgarna beställas?", a: "Helst när pålarna är inmätta, så att avvikelser i pålarnas läge kan hanteras i korgarnas mått." },
    ],
    target: { href: "/produkter/palarmering", label: "Beställ pålarmering" },
    category: "armering-till",
  },
];
