/** B2B-branschsidor (våg 5), docs/PLAN-sidor-2026-10.md */
import type { Service } from "@/config/services";

export const b2bLandings: Service[] = [
  {
    slug: "armering-for-byggentreprenorer",
    name: "Armering för byggentreprenörer",
    h1: "Armering för byggentreprenörer – levererad etapp för etapp",
    metaTitle: "Armering för byggentreprenörer – prefab per etapp",
    metaDescription:
      "Prefab armering till byggentreprenörer: grund, väggar och bjälklag efter bockningslista, märkt per position och levererat per etapp. Begär offert.",
    intro:
      "Armeringen ska komma när formen är klar, i rätt ordning och med rätt nummer på varje bunt. Vi tillverkar grund-, stom- och bjälklagsarmering i kamstål B500B efter er bockningslista och levererar den etapp för etapp till arbetsplatsen.",
    keywords: [
      "armering byggentreprenör",
      "armering för byggföretag",
      "armeringsleverantör entreprenör",
      "prefab armering bygg",
      "klippt och bockad armering entreprenad",
      "armering per etapp",
      "armering till byggprojekt",
    ],
    includes: [
      "En offert för grund, stomme och bjälklag",
      "Leveransplan per etapp",
      "Bunten märkt med positionsnummer",
      "Packat i monteringsordning",
      "Ändrad tidplan? Vi flyttar leveransen",
      "Montage via egen montagetjänst",
    ],
    body: [
      {
        heading: "Ett exempel på leveransplan",
        text: "Etapp 1, grund: [grundarmering](/produkter/grundarmering) med kantbalkskorgar, nät och [distanser](/produkter/distanser). Etapp 2, väggar och pelare: [klippt och bockad armering](/produkter/klippt-och-bockad) och [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar). Etapp 3, bjälklag: [armeringsnät](/produkter/armeringsnat), kantjärn och [byglar](/produkter/byglar-och-hakar). Varje etapp är en egen leverans med egen följesedel.",
      },
      {
        heading: "Mindre upplag, mindre letande",
        text: "En trång arbetsplats har inte plats för hela projektets armering på en gång. Därför levererar vi bara det som ska monteras härnäst. Bunten märks med positionsnummer enligt listan, så att arbetslaget kan börja direkt utan att sortera.",
      },
      {
        heading: "Det här gör offerten snabbare",
        text: "Skicka bockningslista eller ritning med ritningsnummer och revision, er etappindelning, leveransadress och hur lossningen går till (kran, truck eller för hand). Ange också en kontaktperson på plats. Saknas bockningslista tar vi fram den via [armeringsspecifikation](/tjanster/armeringsspecifikation).",
      },
      {
        heading: "Tillverkning, eller tillverkning plus montage",
        text: "Har ni egna armerare köper ni bara tillverkningen. Är bemanningen tunn kan vi lägga armeringen via [armeringsmontage](/tjanster/armeringsmontage). Skicka underlaget för nästa projekt, så får ni [offert](/offert) med mängder per etapp och frakt per leverans.",
      },
    ],
    faqs: [
      { q: "Kan en etapp tidigareläggas eller skjutas upp?", a: "Ja. Hör av er så snart tidplanen ändras, så stämmer vi av nästa leverans. Hur kort varsel som fungerar beror på var etappen ligger i tillverkningen." },
      { q: "Får vi pris per etapp eller för hela projektet?", a: "Båda går. Offerten kan visa mängder och frakt per etapp, så att ni kan stämma av mot ert eget kalkylupplägg." },
      { q: "Vad händer om ritningen revideras?", a: "Skicka den nya revisionen. Positioner som inte är tillverkade uppdateras, och vi meddelar om något redan är bockat." },
      { q: "Kan vi beställa bara en del av armeringen?", a: "Ja, till exempel bara korgarna eller bara grunden. Ni behöver inte lägga hela projektet hos oss." },
    ],
  },
  {
    slug: "armering-for-markentreprenorer",
    name: "Armering för markentreprenörer",
    h1: "Armering för markentreprenörer – korgar klara att lyfta ner",
    metaTitle: "Armering för markentreprenörer – plintar och murar",
    metaDescription:
      "Plintkorgar, stödmursarmering och fundament för markentreprenörer. Färdiga korgar i B500B, märkta per fundamenttyp. Skicka ritningen för offert.",
    intro:
      "I schaktet ska armeringen lyftas ner och gjutas, inte bindas för hand i leran. Vi tillverkar plintkorgar, fundamentarmering och armering till stödmurar och brunnar efter ritning, märkta per fundamenttyp.",
    keywords: [
      "armering markentreprenör",
      "armering anläggning",
      "armering stödmur",
      "armering fundament",
      "plintkorgar markarbete",
      "anläggningsarmering",
      "armering för markarbeten",
    ],
    includes: [
      "Plintkorgar till stolp- och skyltfundament",
      "Armering till stödmurar och L-stöd",
      "Bottenplattor till brunnar och pumpstationer",
      "Märkt per fundamenttyp",
      "Distanser för gjutning mot mark",
      "Leverans till väg- och anläggningsobjekt",
    ],
    body: [
      {
        heading: "Rätt korg i rätt grop",
        text: "När tjugo fundament gjuts samma dag är märkningen det viktiga. Varje [plintkorg](/produkter/plintkorgar) märks med fundamenttyp enligt ritningen, så att korgen för en belysningsstolpe inte hamnar i gropen för en portalskylt. Större fundament kan få färdiga [armeringskorgar](/produkter/armeringskorgar).",
      },
      {
        heading: "Täckskikt mot mark",
        text: "Gjuts betongen direkt mot jord anger Eurokod 2 minst 75 mm täckskikt. Mot avjämnad yta, till exempel underbetong, räcker ofta 40 mm. Konstruktören anger värdet på ritningen. Vi levererar [distanser](/produkter/distanser) i den höjden, så att korgen inte sjunker ner i underlaget vid gjutning.",
      },
      {
        heading: "Checklista för förfrågan",
        text: "Ritning per fundamenttyp och antal av varje. Om bultgrupp eller ingjutningsgods ska få plats i korgen. Hur korgen lyfts (grävmaskin eller kran). Leveransadress, gärna med koordinat om objektet ligger längs en väg. Raka järn och U-järn till murar beställs som [klippt och bockad armering](/produkter/klippt-och-bockad) i samma leverans.",
      },
      {
        heading: "Leverans i takt med schaktet",
        text: "För långa stödmurar och kulvertar delar vi upp leveransen i etapper efter formsättningen. Frakten räknas efter mängd och ort, även till objekt långt från tätort. Skicka ritningen så får ni [offert på korgarna](/offert).",
      },
    ],
    faqs: [
      { q: "Kan ni tillverka plintkorgar i serie?", a: "Ja. Samma fundamenttyp tillverkas i det antal ritningen anger, och varje korg märks med typbeteckning." },
      { q: "Får korgen plats med bultgruppen?", a: "Ange bultgruppens mått och placering i förfrågan, så tar vi med det när korgen tillverkas efter ritningen." },
      { q: "Kan ni leverera till ett vägobjekt utan adress?", a: "Ja. Ange koordinat eller närmaste väg och en kontaktperson som tar emot leveransen." },
      { q: "Vem bestämmer täckskiktet i ett fundament?", a: "Konstruktören. Mot jord är minimum 75 mm enligt Eurokod 2, men ritningen avgör. Vi levererar distanser efter det." },
    ],
  },
  {
    slug: "armering-for-prefabindustri",
    name: "Armering för prefabindustri",
    h1: "Armering för betongelementfabriker – extra kapacitet när det behövs",
    metaTitle: "Armering för prefabindustri och betongelement",
    metaDescription:
      "Korgar, byglar och specialnät till betongelementfabriker, märkta per element och levererade efter gjutplanen. Lägg ut toppar eller serier.",
    intro:
      "Har er armeringshall inte kapacitet för toppen i produktionen? Vi tillverkar korgar, byglar och specialnät i kamstål B500B efter era elementritningar, märker per element och levererar efter gjutplanen.",
    keywords: [
      "armering prefabindustri",
      "armering betongelement",
      "armering betongelementfabrik",
      "armeringskorgar element",
      "armering för prefab",
      "armering väggelement",
      "armering håldäck och balkar",
    ],
    includes: [
      "Märkt med elementbeteckning och position",
      "Leverans efter gjutplanen",
      "Byglar och U-byglar i stora serier",
      "Svetsade korgar och specialnät",
      "Lyftöglor och 3D-bockade detaljer",
      "Enstaka positioner eller hela element",
    ],
    body: [
      {
        heading: "Positioner som brukar läggas ut",
        text: "Det som tar mest tid i en egen hall: [byglar och U-byglar](/produkter/byglar-och-hakar) i stora serier, [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar), [svetsade nät](/produkter/svetsad-armering) med urtag för öppningar och [3D-bockade](/produkter/3d-bockning) detaljer. [Lyftöglor](/produkter/lyftoglor) tillverkas efter er ritning. Svetsade förband i armering regleras av SS-EN ISO 17660.",
      },
      {
        heading: "Märkning som följer formen",
        text: "Varje korg eller bunt märks med elementbeteckning och positionsnummer. Ange i förfrågan vad etiketten ska innehålla och i vilken ordning elementen gjuts, så packar vi därefter. Då slipper armeringshallen sortera om leveransen.",
      },
      {
        heading: "Leverans mot gjutplanen, inte i klump",
        text: "Skicka produktionsplanen tillsammans med ritningar eller bockningslistor. Vi lägger upp leveranser per vecka eller per element, så att lagret i fabriken inte växer. Flyttas en gjutning stämmer vi av kommande leveranser.",
      },
      {
        heading: "Börja med en serie",
        text: "Testa med ett avgränsat paket, till exempel byglarna till ett väggprojekt. Skicka ritning och önskad leveransvecka, så får ni [offert per element](/offert) med vikt och frakt. Behövs listor ur ritningarna tar vi fram dem via [armeringsspecifikation](/tjanster/armeringsspecifikation).",
      },
    ],
    faqs: [
      { q: "Kan etiketten följa vårt eget system?", a: "Ange vilka uppgifter etiketten ska ha, till exempel projekt, element och position, så stämmer vi av vad vi kan märka med." },
      { q: "Tillverkar ni nät med urtag för fönster och dörrar?", a: "Ja, specialnät och svetsade korgar tillverkas efter elementritningen, inklusive urtag." },
      { q: "Kan vi lägga ut bara byglarna?", a: "Ja. Många börjar med enstaka positioner, till exempel byglar eller korgar, och behåller resten i egen hall." },
      { q: "Hur tätt kan leveranserna komma?", a: "Det styrs av er gjutplan och av mängd och ort. Upplägget och leveranstider anges i offerten." },
    ],
  },
  {
    slug: "armering-for-husfabriker",
    name: "Armering för husfabriker",
    h1: "Grundarmering för husfabriker – ett paket per hus",
    metaTitle: "Armering för husfabriker – grundpaket per hus",
    metaDescription:
      "Grundarmering per hus för husfabriker och småhusproducenter: korgar, nät och distanser, packat och märkt per hus och levererat till tomten. Begär offert.",
    intro:
      "Samma husmodell, ny tomt varje vecka. Vi gör ett grundpaket per hus med kantbalkskorgar, nät, hörnjärn och distanser, märkt och packat per hus och levererat direkt till tomten.",
    keywords: [
      "armering husfabrik",
      "grundarmering småhus",
      "armering småhusproducent",
      "armering per hus",
      "kantbalkskorgar husgrund",
      "armering platta på mark villa",
      "armeringspaket husgrund",
    ],
    includes: [
      "Komplett grundpaket per hus",
      "Lista per husmodell som återanvänds",
      "Kantbalkskorgar, nät och hörnjärn",
      "Distanser och najtråd i samma leverans",
      "Leverans till tomten",
      "Montage om grundläggare saknas",
    ],
    body: [
      {
        heading: "Vad som ingår i ett grundpaket",
        text: "[Kantbalkskorgar och kantbalksarmering](/produkter/villakorg-kantbalksarmering) runt plattan, [armeringsnät](/produkter/armeringsnat) med överlapp inräknat, hörnjärn, förstärkningar under bärande väggar och [distanser](/produkter/distanser). Hela paketet beskrivs under [grundarmering](/produkter/grundarmering). Grundläggaren får allt i en leverans och slipper komplettera med lösa järn.",
      },
      {
        heading: "Lista per husmodell, justerad per tomt",
        text: "Bockningslistan för en husmodell görs en gång. För varje ny tomt justeras det som skiljer: kantbalkens höjd på sluttande tomt, förstärkningar för garage eller tillbyggnad och spegelvänd planlösning. Konstruktören godkänner ändringarna, och vi tillverkar efter den uppdaterade listan.",
      },
      {
        heading: "Leverans till tomten",
        text: "Ange adress, önskat datum och om lastbilen kan komma nära plattan. Varje hus levereras separat när grundläggningen är redo. Saknar ni egen grundläggare kan armeringen läggas via [armeringsmontage](/tjanster/armeringsmontage).",
      },
      {
        heading: "Skicka nästa grund",
        text: "Börja med ett hus eller en hel serie i ett område. Skicka grundritning eller bockningslista för husmodellen, så får ni [offert per hus](/offert) med frakt till respektive tomt.",
      },
    ],
    faqs: [
      { q: "Hur fungerar det när samma husmodell återkommer?", a: "Vi utgår från den godkända listan för modellen och justerar bara det som skiljer på den nya tomten, enligt konstruktörens anvisningar." },
      { q: "Ingår nät och distanser i paketet?", a: "Ja, om ni vill. Paketet kan omfatta korgar, nät, hörnjärn, distanser och najtråd, packat per hus." },
      { q: "Kan husen i ett område levereras vid olika tillfällen?", a: "Ja. Varje hus har egen märkning och levereras när just den grunden ska armeras." },
      { q: "Vi har ingen bockningslista för modellen. Kan ni göra den?", a: "Ja, via armeringsspecifikation utifrån grundritningen. Ni godkänner listan innan första tillverkningen." },
    ],
  },
  {
    slug: "armering-for-poolbyggare",
    name: "Armering för poolbyggare",
    h1: "Armering för poolbyggare – bockad efter poolens mått",
    metaTitle: "Armering för poolbyggare – efter poolens mått",
    metaDescription:
      "Poolarmering för poolbyggare: botten, väggar, hörnjärn och trappa i B500B, bockad efter ritning och packad per pool. Skicka poolritningen för offert.",
    intro:
      "En betongpool har fler bockade detaljer än en vanlig platta: hörn, trappa, krön och genomföringar. Vi bockar hela poolens armering efter er ritning och packar den per pool, så att den går rakt in i formen.",
    keywords: [
      "armering poolbyggare",
      "poolarmering",
      "armering betongpool",
      "armering pool vägg",
      "bockad armering pool",
      "armering till pool",
    ],
    includes: [
      "Botten, väggar och krön",
      "Hörnjärn mellan botten och vägg",
      "Trappor och rundade väggar",
      "Positioner för skimmer och genomföringar",
      "Packat och märkt per pool",
      "Distanser för täckskikt mot vatten",
    ],
    body: [
      {
        heading: "Positionerna i en gjuten pool",
        text: "Bottenplatta med nät eller raka järn. Vertikala och horisontella väggjärn. L-formade hörnjärn som förankrar väggen i botten. Byglar eller U-järn i krönet. Trappsteg och eventuell vilobänk. Dimension, centrumavstånd och förankring avgörs av konstruktören. Se även vår sida om [poolarmering](/produkter/poolarmering).",
      },
      {
        heading: "Raka och rundade väggar",
        text: "Raka väggar och hörn tillverkas som [klippt och bockad armering](/produkter/klippt-och-bockad). Rundade väggar och trappor kan [bockas i radie eller 3D](/produkter/3d-bockning), så att armerarna slipper bocka för hand på plats.",
      },
      {
        heading: "Täckskikt mot vatten och jord",
        text: "En pool har vatten på ena sidan och jord på den andra, så täckskiktet är ofta större än i en husgrund. Värdet står på ritningen. Vi skickar [distanser](/produkter/distanser) i rätt höjd i samma leverans.",
      },
      {
        heading: "Skicka nästa pool",
        text: "Skicka poolritning eller bockningslista, adress och gjutdatum. Ange om poolen har skimmer, belysning eller andra genomföringar. Du får [offert per pool](/offert) med frakt till tomten.",
      },
    ],
    faqs: [
      { q: "Vilken armering behövs till en betongpool?", a: "Normalt armering i botten, vertikala och horisontella järn i väggarna samt hörnjärn mellan botten och vägg. Dimension och avstånd avgörs av konstruktören." },
      { q: "Kan ni bocka armering till rundade väggar?", a: "Ja, efter ritning eller bockningslista, inklusive radier och 3D-former." },
      { q: "Vi bygger samma poolmodell ofta. Kan listan återanvändas?", a: "Ja. Listan för en standardmodell kan användas igen och justeras om måtten ändras." },
    ],
  },
  {
    slug: "armering-for-lantbruk",
    name: "Armering för lantbruk",
    h1: "Armering för lantbruk – stall, gödselbehållare och plansilor",
    metaTitle: "Armering för lantbruk – stall, gödsel och plansilo",
    metaDescription:
      "Armering till stallgolv, gödselbehållare, plansilor och maskinhallar. Prefab i B500B efter ritning, levererad till gården i etapper. Begär offert.",
    intro:
      "Ska du bygga stall, gödselbehållare eller plansilo? Vi tillverkar armeringen efter konstruktörens ritning och levererar den till gården, platta först och väggar sedan.",
    keywords: [
      "armering lantbruk",
      "armering stall",
      "armering gödselbehållare",
      "armering plansilo",
      "armering stallgolv",
      "armering maskinhall",
      "armering gödselplatta",
    ],
    includes: [
      "Stallgolv och gödselkulvertar",
      "Gödselbehållare och gödselplattor",
      "Plansilor och foderbord",
      "Plattor till maskinhallar",
      "Leverans till gården i etapper",
      "Bockningslista ur ritningen",
    ],
    body: [
      {
        heading: "Stora ytor och tunga väggar",
        text: "Ett stallgolv eller en maskinhall ger mycket [armeringsnät](/produkter/armeringsnat) och kantjärn. Väggar till plansilo och gödselbehållare kräver [klippt och bockad armering](/produkter/klippt-och-bockad) i flera positioner, ofta med vinkeljärn mot bottenplattan. Plattorna kan beställas som [grundarmering](/produkter/grundarmering).",
      },
      {
        heading: "Gödsel och ensilage angriper betongen",
        text: "Gödsel och ensilagesaft är kemiskt aggressiva. Konstruktören väljer därför exponeringsklass, betong och täckskikt efter miljön. Vi tillverkar efter ritningen och levererar distanser i den höjd som anges.",
      },
      {
        heading: "Leverans till gården",
        text: "Ange var lastbilen kan lossa, om vägen tål tung trafik och vilken tid på året du gjuter. Många bygger mellan vårbruk och skörd. Då lönar det sig att lägga upp leveranserna per etapp i god tid.",
      },
      {
        heading: "Har du bara en ritning?",
        text: "Då tar vi fram bockningslistan via [armeringsspecifikation](/tjanster/armeringsspecifikation). Du kan lägga armeringen själv, med din byggare eller via vårt [armeringsmontage](/tjanster/armeringsmontage). Skicka ritningen så får du [offert till gården](/offert).",
      },
    ],
    faqs: [
      { q: "Kan ni armera en gödselbehållare?", a: "Vi tillverkar armeringen efter konstruktörens ritning eller bockningslista. Dimensioner och täckskikt bestäms av konstruktionen." },
      { q: "Kan jag få platta och väggar vid olika tillfällen?", a: "Ja, vi lägger upp en leveransplan per etapp, till exempel platta först och väggar sedan." },
      { q: "Vad ska jag tänka på när lastbilen kommer till gården?", a: "Ange lossningsplats, om vägen har viktbegränsning och vem som tar emot. Då kan vi planera rätt fordon." },
      { q: "Kan ni leverera till gårdar långt från tätort?", a: "Ja, i hela Sverige inklusive Norrland. Frakten räknas efter mängd och ort och anges i offerten." },
    ],
  },
  {
    slug: "armering-for-konstruktorer",
    name: "Armering för konstruktörer",
    h1: "För konstruktörer – vi tillverkar det ni ritar",
    metaTitle: "Armering för konstruktörer – ritning till prefab",
    metaDescription:
      "Konstruktör? Vi tillverkar prefab armering i B500B direkt från er ritning, med era positionsnummer, och frågar innan vi bockar om något är oklart.",
    intro:
      "Ni ritar armeringen, vi tillverkar den utan att ändra något. Varje bunt får era positionsnummer, och är något oklart frågar vi innan vi bockar.",
    keywords: [
      "armering konstruktör",
      "armeringsritning tillverkning",
      "bockningslista konstruktör",
      "samarbete armeringskonstruktör",
      "prefab armering ritning",
      "tillverkning efter armeringsritning",
      "armeringsleverantör konstruktörer",
    ],
    includes: [
      "Tillverkning direkt från armeringsritning",
      "Era positionsnummer på varje bunt",
      "Kamstål B500B enligt SS 212540",
      "Frågor om underlaget före tillverkning",
      "Bockningslista för granskning",
      "Offert direkt till er beställare",
    ],
    body: [
      {
        heading: "Vi ändrar inte i konstruktionen",
        text: "Bockformer, dornar och förankringslängder följer ritningen. Dimensionering enligt Eurokod 2 (SS-EN 1992-1-1) är konstruktörens ansvar. Vi tillverkar [klippt och bockad armering](/produkter/klippt-och-bockad), [armeringskorgar](/produkter/armeringskorgar), [svetsad armering](/produkter/svetsad-armering) och [3D-bockade](/produkter/3d-bockning) detaljer i B500B.",
      },
      {
        heading: "Det här frågar vi om innan vi bockar",
        text: "En längd som saknas. En form som inte går ihop med måtten. En mängd som avviker mellan ritning och lista. Ett dornmått som saknas: minsta dorndiameter enligt Eurokod 2 är 4Ø upp till Ø16 och 7Ø för grövre järn, men vi frågar hellre än antar. Ange en teknisk kontakt i underlaget, så går frågan direkt till er.",
      },
      {
        heading: "Bockningslista för granskning",
        text: "Finns bara ritningen tar vi fram listan via [armeringsspecifikation](/tjanster/armeringsspecifikation). Positionsnummer följer er ritning. Listan skickas till er för granskning före tillverkning och uppdateras vid varje revision.",
      },
      {
        heading: "När beställaren frågar var armeringen ska köpas",
        text: "Hänvisa till oss. Vi lämnar [offert](/offert) till entreprenören eller byggherren direkt utifrån era handlingar och tar tekniska frågor med er.",
      },
    ],
    faqs: [
      { q: "Vilka filformat tar ni emot?", a: "Vanligast är PDF av armeringsritningen och bockningslista i PDF eller Excel. DWG går också bra. Hör av er om ni har ett annat format." },
      { q: "Ändrar ni i konstruktionen?", a: "Nej. Vi tillverkar efter ritningen. Om något är oklart frågar vi innan tillverkning, dimensioneringen är konstruktörens ansvar." },
      { q: "Vad gör ni om dornmått saknas på ritningen?", a: "Vi frågar konstruktören. Vi gissar inte, även om Eurokod 2 anger minsta dorndiameter." },
      { q: "Märks armeringen med våra positionsnummer?", a: "Ja, varje bunt märks med positionsnumret från ritningen eller bockningslistan." },
    ],
  },
  {
    slug: "armering-offentlig-upphandling",
    name: "Armering i offentlig upphandling",
    h1: "Armering till offentliga projekt – med dokumentationen klar",
    metaTitle: "Armering i offentlig upphandling – underlag och offert",
    metaDescription:
      "Armering till skolor, vårdbyggnader, broar och VA: prefab i B500B efter förfrågningsunderlaget, och svar på dokumentationskraven. Få pris till anbudet.",
    intro:
      "Lämnar ni anbud på ett offentligt projekt? Vi räknar armeringen ur förfrågningsunderlaget, så att ni har ett pris att lägga in, och svarar på de dokumentationskrav som ställs.",
    keywords: [
      "armering offentlig upphandling",
      "armering offentliga projekt",
      "materialcertifikat armering",
      "inspektionsintyg 3.1 armering",
      "EPD armering",
      "dokumentation armeringsstål",
      "armering LOU",
    ],
    includes: [
      "Pris ur förfrågningsunderlaget",
      "Kamstål B500B enligt SS 212540",
      "Dokumentation på förfrågan",
      "Märkning för spårbarhet per position",
      "Leveransplan per etapp",
      "Leverans i hela Sverige",
    ],
    body: [
      {
        heading: "Pris till anbudet",
        text: "Skicka förfrågningsunderlagets konstruktionsritningar och anbudstiden. Vi räknar mängder per dimension och bearbetning och lämnar ett pris ni kan lägga in i anbudet. Typiska poster är [klippt och bockad armering](/produkter/klippt-och-bockad), [armeringsnät](/produkter/armeringsnat), [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar) och [pålarmering](/produkter/palarmering).",
      },
      {
        heading: "Dokumentation som ofta efterfrågas",
        text: "Materialcertifikat i form av inspektionsintyg 3.1 enligt SS-EN 10204, som visar stålets provade egenskaper per charge. Intyg om att stålet uppfyller SS 212540 (B500B). Miljövarudeklaration (EPD) till klimatdeklarationen och bedömning i system som Byggvarubedömningen. Ange kraven i förfrågan så svarar vi på vad som kan lämnas.",
      },
      {
        heading: "CE-märkning gäller inte armeringsstål",
        text: "SS-EN 10080 är inte harmoniserad, så armeringsstål har i regel varken CE-märkning eller prestandadeklaration. I Sverige hänvisar man i stället till SS 212540 och materialcertifikat. Bra att veta om förfrågningsunderlaget kräver CE.",
      },
      {
        heading: "Spårbarhet på bygget",
        text: "Varje bunt märks med positionsnummer och sorteras per etapp, så att leveranser kan stämmas av mot handlingarna. Behöver projektet särskild märkning eller leveransdokumentation tar vi med det i [offerten](/offert).",
      },
    ],
    faqs: [
      { q: "Vilka certifikat kan ni visa?", a: "Skicka kraven i förfrågningsunderlaget, så återkommer vi med den dokumentation som kan lämnas för ert projekt." },
      { q: "Är armeringsstål CE-märkt?", a: "Normalt inte. SS-EN 10080 är inte harmoniserad, så CE-märkning och prestandadeklaration gäller i regel inte armeringsstål. I Sverige hänvisas i stället till SS 212540 och materialcertifikat." },
      { q: "Vad är ett inspektionsintyg 3.1?", a: "Ett materialcertifikat enligt SS-EN 10204 där tillverkaren intygar provade egenskaper för den levererade chargen, kontrollerat av en från produktionen oberoende representant." },
      { q: "Kan ni lämna pris innan vi vunnit upphandlingen?", a: "Ja. Vi räknar på förfrågningsunderlaget så att ni har ett armeringspris till anbudet." },
    ],
  },
];
