/** Plan: docs/PLAN-sidor-2026-10.md – våg 3, punkt 45–59 ("Armering till …", del 1). */
import type { Post } from "@/config/blog";

const date = "2026-10-09";

export const armeringTill1: Post[] = [
  // 45. Husgrund – val av grundtyp + armering per typ
  {
    slug: "armering-husgrund",
    title: "Armering till husgrund – grundtyper och armering per typ",
    metaTitle: "Armering husgrund – grundtyper och armering",
    metaDescription:
      "Platta på mark, krypgrund, källare eller plintar? Så skiljer sig armeringen mellan olika husgrunder – nät, kantjärn, byglar och väggarmering per grundtyp.",
    excerpt:
      "Vilken armering en husgrund behöver beror först och främst på grundtypen. Här jämför vi platta på mark, krypgrund, källare, plintar och pålar – och vad som armeras i varje.",
    date,
    readingMinutes: 6,
    keywords: [
      "armering husgrund",
      "husgrund armering",
      "grundtyper hus",
      "armering grund villa",
      "armering krypgrund",
      "armering källargrund",
      "välja husgrund",
    ],
    content: [
      { type: "p", text: "Frågan ”vilken armering behöver min husgrund?” går inte att besvara innan grundtypen är vald. En platta på mark, en krypgrund och en källare armeras helt olika – det är grundtypen som avgör om det är nät, kantbalkar, väggar eller plintar som ska armeras. Vi levererar [komplett grundarmering](/produkter/grundarmering) efter ritning för alla vanliga grundtyper." },
      { type: "p", text: "Grundtypen väljs utifrån markförhållanden, nivåskillnader på tomten, husets vikt och om du vill ha källare. Geotekniker och konstruktör gör valet – men det hjälper att veta vad valet innebär för armeringen." },

      { type: "h2", text: "Vanliga grundtyper och deras armering" },
      { type: "table",
        caption: "Typiska lösningar för småhus – konstruktören avgör dimension, mängd och placering.",
        head: ["Grundtyp", "Vad armeras", "Typisk armering"],
        rows: [
          ["Platta på mark", "Platta + kantbalk runt om", "Nät 5150–6150 i plattan, kantjärn Ø10–Ø12, kantbalksbyglar Ø8"],
          ["Krypgrund", "Grundmurar/sulor + ev. bjälklag", "Längsjärn Ø10–Ø12 i sula och mur, byglar, ev. nät i markplatta"],
          ["Källare", "Bottenplatta + källarväggar", "Nät eller lösa järn i platta, två lager Ø10–Ø12 i väggar, anslutningsjärn"],
          ["Plintgrund", "Varje plint", "Plintkorg eller kryssarmering Ø10–Ø12, startjärn till pelare"],
          ["Pålad grund", "Pålplattor och grundbalkar", "Balkkorgar och pålplattearmering enligt ritning"],
        ],
      },

      { type: "h2", text: "Platta på mark – vanligast i Sverige" },
      { type: "p", text: "De flesta nya villor står på platta på mark: cellplast på ett dränerande bärlager, kantelement som form och en armerad betongplatta ovanpå. Armeringen består av nät i plattan och en armerad kantbalk runt om, ofta med extra järn under bärande innerväggar. Uppbyggnaden går vi igenom i [platta på mark – uppbyggnad och armering](/blogg/armering-platta-pa-mark)." },

      { type: "h2", text: "Krypgrund och källare – väggar som ska armeras" },
      { type: "p", text: "I en krypgrund bär grundmurar eller grundbalkar huset, och det är främst sulor och murar som armeras med längsgående järn och byglar. En källare har både bottenplatta och väggar som tar jordtryck. Väggarna armeras då i två lager med anslutningsjärn från plattan – läs mer i [armering till källarvägg och grundmur](/blogg/armering-kallarvagg)." },

      { type: "h2", text: "Plintar och pålar – punktvis grundläggning" },
      { type: "p", text: "På dålig mark eller i sluttning grundläggs huset ibland på plintar eller pålar. Lasten förs då ned punktvis, och armeringen koncentreras till plintar, pålplattor och grundbalkar mellan dem. Här används ofta färdiga korgar. Plintarna beskrivs i [armering till plintar](/blogg/armering-till-plintar)." },

      { type: "h2", text: "Mark, tjäle och nivåer styr valet" },
      { type: "p", text: "Markundersökningen avgör mycket. På fast, plan mark med låg grundvattennivå är platta på mark oftast enklast och billigast. På lera med risk för sättningar kan konstruktören välja förstärkt platta, kompensationsgrundläggning eller pålar. I sluttning blir en souterräng- eller källarlösning naturlig, eftersom huset ändå måste ta upp nivåskillnaden med väggar som håller jord." },
      { type: "p", text: "Tjäldjupet varierar från några decimeter i södra Sverige till betydligt djupare i Norrland. En isolerad platta skyddas mot tjäle med markisolering runt kanten, medan plintar och grundmurar antingen grundläggs på tjälfritt djup eller isoleras. Det påverkar inte bara schaktdjupet utan också höjden på murar och plintar – och därmed armeringsmängden." },
      { type: "h2", text: "Vad beställs till respektive grundtyp?" },
      { type: "ul", items: [
        "Platta på mark: nät, kantjärn, kantbalksbyglar, hörnjärn, distanser och najtråd.",
        "Krypgrund: sul- och murjärn, byglar, anslutningsjärn och eventuellt nät till markplattan.",
        "Källare: nät eller lösa järn till bottenplattan, väggjärn i två lager, U-byglar och anslutningsjärn.",
        "Plintgrund: plintkorgar eller bockade kryss och startjärn – ofta många identiska positioner.",
        "Pålad grund: pålplattearmering, grundbalkskorgar och förbindningsjärn.",
      ] },
      { type: "h2", text: "Så går du från ritning till leverans" },
      { type: "ol", items: [
        "Låt geotekniker och konstruktör välja grundtyp utifrån markundersökningen.",
        "Konstruktören tar fram grundritning med armering: nättyp, kantjärn, byglar, täckskikt och skarvlängder.",
        "Ritningen omsätts i en bockningslista – vi hjälper till om du saknar en.",
        "Armeringen tillverkas, märks per position och levereras till bygget.",
        "Armeringen läggs, binds och kontrolleras före gjutning.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Tabellen visar typiska lösningar, inte en dimensionering. Laster, markens bärighet, tjäldjup och exponeringsklass styr dimensioner, täckskikt och mängder. Följ alltid konstruktionsritningen – den är också underlag för bygglov och kontrollplan." },

      { type: "h2", text: "Beställ armeringen till husgrunden" },
      { type: "p", text: "Oavsett grundtyp tillverkar vi armeringen efter din ritning eller bockningslista i kamstål B500B: nät, kantjärn, byglar, korgar och distanser – märkt och sorterat per position och levererat i hela Sverige. Se [grundarmering](/produkter/grundarmering) eller [begär offert](/offert) direkt med ritningen bifogad." },
    ],
    faqs: [
      { q: "Vilken husgrund är vanligast?", a: "Platta på mark är vanligast för nya villor i Sverige. Krypgrund och källare förekommer framför allt i sluttande tomter eller där man vill ha källarplan. Valet görs av konstruktör och geotekniker." },
      { q: "Vilken armering behöver en husgrund?", a: "Det beror på grundtyp. En platta på mark har nät i plattan och armerad kantbalk, en källare har dessutom armerade väggar, och en plintgrund armeras plint för plint. Mängder och dimensioner står på konstruktionsritningen." },
      { q: "Kan jag beställa all armering till grunden från samma ställe?", a: "Ja. Vi levererar nät, kantjärn, kantbalksbyglar, korgar och distanser som ett paket efter ritning, märkt per position. Pris och leveransdag anges i offerten." },
      { q: "Vad avgör om det blir platta på mark eller källare?", a: "Främst markförhållanden, nivåskillnader på tomten och om du vill ha källarplan. Geotekniker och konstruktör gör bedömningen." },
      { q: "Behövs konstruktionsritning för en husgrund?", a: "Ja, för en husgrund ska armeringen följa en konstruktörs ritning. Den ingår normalt i underlaget till bygglov och kontrollplan." },
    ],
    target: { href: "/produkter/grundarmering", label: "Begär offert på grundarmering" },
    category: "armering-till",
  },

  // 46. Platta på mark – konstruktionsprincip
  {
    slug: "armering-platta-pa-mark",
    title: "Platta på mark – uppbyggnad, isolering och armering",
    metaTitle: "Platta på mark – uppbyggnad och armering",
    metaDescription:
      "Så är en platta på mark uppbyggd: bärlager, cellplast, kantelement, kantförstyvning och armering. Lager för lager – med typisk armering och täckskikt.",
    excerpt:
      "En platta på mark är mer än betong och nät. Här går vi igenom uppbyggnaden lager för lager – från makadam och cellplast till kantförstyvning och armering.",
    date,
    readingMinutes: 6,
    keywords: [
      "platta på mark uppbyggnad",
      "platta på mark konstruktion",
      "isolerad platta på mark",
      "kantförstyvning platta",
      "kantelement platta på mark",
      "platta på mark cellplast",
      "armering kantförstyvning",
    ],
    content: [
      { type: "p", text: "En platta på mark är en isolerad betongplatta som vilar direkt på ett bärlager. Den är både grund och golv, och armeringen är bara en del av helheten. Förstår du uppbyggnaden blir det också tydligt varför armeringen ser ut som den gör. Vi levererar [grundarmering till platta på mark](/produkter/grundarmering) som ett komplett paket efter ritning." },

      { type: "h2", text: "Uppbyggnaden lager för lager" },
      { type: "table",
        caption: "Principiell uppbyggnad för en isolerad villaplatta – tjocklekar och material enligt ritning.",
        head: ["Lager", "Funktion", "Typiskt utförande"],
        rows: [
          ["Terrass / schaktbotten", "Bär lasterna", "Packad, tjälsäker undergrund"],
          ["Dränerande bärlager", "Bryter kapillär fukt, fördelar last", "Makadam, packad i lager"],
          ["Cellplast", "Värmeisolering under plattan", "EPS i ett eller flera lager"],
          ["Kantelement", "Form och isolering för kantförstyvningen", "L-element av cellplast"],
          ["Armering", "Tar dragkrafter, begränsar sprickor", "Nät i plattan, kantjärn och byglar i kanten"],
          ["Betongplatta", "Grund och golv", "Ofta ca 100 mm i fält, tjockare i kanten"],
        ],
      },

      { type: "h2", text: "Kantförstyvningen bär väggarna" },
      { type: "p", text: "Längs ytterväggarna är plattan förtjockad – en kantförstyvning eller kantbalk. Den tar ytterväggarnas last och styvar upp plattans kant. Kantelementet av cellplast fungerar som form, och inuti ligger längsgående kantjärn som hålls på plats av byglar. Hur kantbalken armeras i detalj beskrivs i [armera kantbalk](/blogg/armering-kantbalk)." },
      { type: "p", text: "Under bärande innerväggar och punktlaster görs ofta en lokal förtjockning med extra järn. Den syns som en ränna i cellplasten och armeras på samma sätt som kanten." },

      { type: "h2", text: "Typisk armering i en villaplatta" },
      { type: "ul", items: [
        "Fält: armeringsnät, ofta 5150 eller 6150 (Ø5/Ø6, c/c 150 mm), skarvat med överlapp.",
        "Kantförstyvning: kantjärn Ø10–Ø12 i över- och underkant, kantbalksbyglar Ø8 c/c 200–300 mm.",
        "Hörn: hörnjärn som binder ihop kantjärnen runt hörnet.",
        "Innerbalkar: extra järn och byglar under bärande väggar.",
        "Distanser: håller nät och järn på rätt höjd över cellplasten.",
      ] },
      { type: "figure", illustration: "cover-layer", caption: "Distanser ger rätt täckskikt mellan armering och cellplast." },

      { type: "h2", text: "Isolering och armering påverkar varandra" },
      { type: "p", text: "Cellplasten under plattan bär hela golvlasten, så plattan måste fördela punktlaster så att isoleringen inte trycks ihop. Det är en av anledningarna till att nätet behövs även när lasterna är små. Under kantförstyvningen används ofta cellplast med högre tryckhållfasthet, eftersom väggarnas last koncentreras där." },
      { type: "p", text: "Kantelementet isolerar plattans kant och hindrar att kyla leds in i kantbalken. Elementets invändiga form bestämmer hur kantbalksbyglarna ska se ut. Därför ska byglarnas mått räknas fram från elementets mått minus täckskikt – inte tvärtom. Har du bestämt kantelement tar vi fram byglar som passar." },
      { type: "p", text: "Plattan krymper också när betongen torkar. Mot den stela kantbalken och mot friktionen från underlaget uppstår dragspänningar, och det är nätet som fördelar dem så att eventuella sprickor blir fina och ofarliga. Ett nät som ligger för lågt gör nästan ingen nytta mot krympsprickor i ytan." },
      { type: "h2", text: "Täckskikt mot cellplast och mark" },
      { type: "p", text: "Armeringen får inte ligga direkt på cellplasten. Täckskiktet i en villaplatta är ofta 25–35 mm mot cellplast eller form. Gjuts betongen direkt mot förberedd mark krävs enligt Eurokod 2 minst 40 mm, och direkt mot jord minst 75 mm. Läs mer om [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "h2", text: "Arbetsgång" },
      { type: "ol", items: [
        "Schakta, lägg och packa bärlagret.",
        "Lägg cellplast och ställ kantelement enligt ritning.",
        "Montera kantbalksbyglar och kantjärn, sedan hörnjärn.",
        "Lägg näten på distanser med föreskriven överlapp och bind ihop.",
        "Förlägg rör, golvvärme och ingjutningsgods.",
        "Kontrollera armeringen mot ritningen och gjut.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Isolertjocklek, plattans tjocklek, nättyp, kantjärn och bygelavstånd bestäms av konstruktören utifrån laster, mark och energikrav. Uppgifterna här är typiska exempel för småhus – ritningen gäller alltid." },

      { type: "h2", text: "Beställ armering till plattan" },
      { type: "p", text: "Vi tillverkar nät, kantjärn, kantbalksbyglar och hörnjärn i B500B efter din ritning och levererar märkt per position i hela Sverige. Se [grundarmering](/produkter/grundarmering) eller skicka ritningen via [offertformuläret](/offert)." },
    ],
    faqs: [
      { q: "Hur tjock är en platta på mark?", a: "En villaplatta är ofta cirka 100 mm i fält och tjockare vid kantförstyvningen. Exakt tjocklek, liksom isolertjocklek, bestäms av konstruktören." },
      { q: "Varför har platta på mark en kantförstyvning?", a: "Kantförstyvningen tar ytterväggarnas last och gör plattans kant styvare. Den armeras med längsgående kantjärn och byglar." },
      { q: "Ska armeringen ligga direkt på cellplasten?", a: "Nej. Armeringen ska ligga på distanser så att den omsluts av betong. Täckskiktet mot cellplast är ofta 25–35 mm – ritningen anger exakt värde." },
      { q: "Vilket nät används i platta på mark?", a: "Ofta nät 5150 eller 6150 i villaplattor, men tyngre laster kan kräva grövre nät eller två lager. Konstruktören avgör." },
      { q: "Hur skiljer sig platta på mark från en vanlig betongplatta?", a: "Platta på mark är isolerad underifrån och har kantförstyvning som bär väggarna. En oisolerad betongplatta saknar ofta både isolering och kantbalk." },
    ],
    target: { href: "/produkter/grundarmering", label: "Beställ armering till platta på mark" },
    category: "armering-till",
  },

  // 47. Kantbalk
  {
    slug: "armering-kantbalk",
    title: "Armera kantbalk – kantjärn, hörnjärn och skarvar",
    metaTitle: "Armera kantbalk – kantjärn, hörn och skarvar",
    metaDescription:
      "Så armeras en kantbalk i platta på mark: antal och dimension på kantjärn, hörnjärn, skarvlängder och hur byglar och järn bildar en färdig villakorg.",
    excerpt:
      "Kantbalken bär ytterväggarna. Här går vi igenom de längsgående kantjärnen, hörnen och skarvarna – det som tillsammans med byglarna blir en färdig kantbalksarmering.",
    date,
    readingMinutes: 5,
    keywords: [
      "armera kantbalk",
      "kantjärn",
      "kantjärn kantbalk",
      "hörnjärn kantbalk",
      "kantbalk dimension",
      "villakorg",
      "kantbalksarmering",
    ],
    content: [
      { type: "p", text: "En kantbalk är den förtjockade kanten runt en platta på mark. Den armeras med längsgående kantjärn i över- och underkant, sammanhållna av byglar. Byglarnas form och mått har vi gått igenom i [kantbalksbygel](/blogg/kantbalksbygel) – här handlar det om kantjärnen, hörnen och skarvarna. Allt kan levereras färdigt som [villakorg och kantbalksarmering](/produkter/villakorg-kantbalksarmering)." },

      { type: "h2", text: "Typisk kantbalksarmering i en villaplatta" },
      { type: "table",
        caption: "Vanliga exempel för småhus – dimension, antal och avstånd enligt konstruktionsritning.",
        head: ["Del", "Typiskt utförande", "Kommentar"],
        rows: [
          ["Kantjärn underkant", "2–3 st Ø10–Ø12", "Tar dragkraft när kanten böjs nedåt"],
          ["Kantjärn överkant", "2–3 st Ø10–Ø12", "Håller ihop korgen, tar dragkraft över stöd"],
          ["Byglar", "Ø8, c/c 200–300 mm", "Förlängt ben går in i plattan"],
          ["Hörnjärn", "L-formade, samma dimension som kantjärn", "Ben ofta 500–800 mm, enligt ritning"],
          ["Täckskikt", "Ofta 25–35 mm mot cellplast/form", "Mot jord gäller större mått"],
        ],
      },

      { type: "h2", text: "Kantjärn – längs hela omkretsen" },
      { type: "p", text: "Kantjärnen löper runt hela plattan. Totallängden blir omkretsen gånger antal järn, plus skarvar. En platta på 10 × 12 m med 2 + 2 kantjärn Ø12 kräver 4 × 44 m = 176 m järn före skarvar, vilket motsvarar cirka 156 kg (Ø12 väger 0,888 kg/m)." },

      { type: "h2", text: "Hörnen är den svaga punkten" },
      { type: "p", text: "Kantjärnen får inte bara mötas i hörnet. Kraften måste föras runt hörnet med L-formade hörnjärn som överlappar kantjärnen åt båda håll. Hörnjärn tillverkas bockade efter mått, så att de passar kantelementets inre hörn med rätt täckskikt." },

      { type: "h2", text: "Skarvar och överlapp" },
      { type: "p", text: "Kamstål levereras i längder upp till 12 m, så kantjärnen skarvas. Skarvlängden beror på dimension, betongklass och läge – ofta i storleksordningen 40–60 gånger diametern, det vill säga 500–700 mm för Ø12. Förskjut skarvarna så att de inte hamnar i samma snitt. Se [skarvlängd armering](/blogg/skarvlangd-armering) för fler värden." },

      { type: "h2", text: "Innerbalkar och förstärkningar" },
      { type: "p", text: "Bärande innerväggar och punktlaster från pelare eller trappor kräver ofta en inre kantbalk – en ränna i cellplasten som armeras på samma sätt som kanten. Där innerbalken möter ytterkantbalken binds järnen ihop med bockade anslutningsjärn, så att balkarna samverkar. Vid portöppningar och stora fönsterpartier kan kantbalken behöva extra järn." },
      { type: "p", text: "Ett vanligt fel är att innerbalkarna glöms när armeringen beställs styckvis. Med en komplett bockningslista per position kommer alla delar – ytterbalk, innerbalkar, hörn och anslutningar – i samma leverans." },
      { type: "h2", text: "Färdig villakorg eller lösa delar?" },
      { type: "p", text: "Kantbalksarmering kan levereras som lösa byglar och raka järn som monteras på plats, eller som förmonterade korgsektioner. Lösa delar är flexibla och lätta att hantera för hand. Färdiga sektioner sparar tid på bygget men kräver att kantelementens mått är bestämda. Båda tillverkas efter samma ritning." },
      { type: "h2", text: "Montage steg för steg" },
      { type: "ol", items: [
        "Ställ kantelementen och kontrollera invändiga mått.",
        "Lägg ut byglarna med föreskrivet c/c-avstånd.",
        "Trä in underkantsjärnen, sedan överkantsjärnen, och bind i varje bygel.",
        "Montera hörnjärn och skarva enligt ritning.",
        "Kontrollera täckskikt med distanser innan nätet läggs.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Antal och dimension på kantjärn, bygelavstånd, hörnutformning och skarvlängder står på konstruktionsritningen. Kantbalkens storlek styrs av väggarnas last och markens bärighet – avvik inte från ritningen." },

      { type: "p", text: "Varför prefab? En villaplatta har ofta 100–200 byglar och ett tiotal hörn- och anslutningsjärn. Att bocka dem för hand på plats tar tid, ger ojämna mått och mycket spill. Prefabricerade byglar och järn har samma mått från första till sista, passar kantelementet och kommer märkta per position – montaget går fortare och kontrollen blir enklare." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Plattans mått och form, gärna som ritning.",
        "Kantelementets typ och invändiga mått.",
        "Antal och dimension på kantjärn i över- och underkant.",
        "Bygelavstånd och bygelmått, eller kantbalkens sektion.",
        "Läge för innerbalkar, portar och punktlaster.",
        "Leveransort och önskad vecka.",
      ] },
      { type: "h2", text: "Färdig kantbalksarmering" },
      { type: "p", text: "Vi tillverkar kantjärn, hörnjärn och byglar efter mått i B500B och levererar dem som färdig villakorg, märkt och sorterat per position, i hela Sverige. Se [villakorg och kantbalksarmering](/produkter/villakorg-kantbalksarmering) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Hur många kantjärn ska en kantbalk ha?", a: "I villaplattor är 2–3 järn Ø10–Ø12 i både över- och underkant vanligt, men antal och dimension står på konstruktionsritningen." },
      { q: "Behövs hörnjärn i kantbalken?", a: "Ja. Hörnjärn för kraften runt hörnet och överlappar kantjärnen åt båda håll. Utan dem blir hörnet en svag punkt." },
      { q: "Hur långt ska kantjärn skarvas?", a: "Ofta 40–60 gånger diametern, för Ø12 alltså cirka 500–700 mm. Skarvlängden beror på betong och läge – ritningen avgör." },
      { q: "Vad är en villakorg?", a: "En villakorg är kantbalksarmeringen levererad som färdiga delar eller korg: byglar, kantjärn och hörnjärn tillverkade efter mått för en platta på mark." },
      { q: "Behövs kantjärn under bärande innerväggar?", a: "Ofta ja. Under bärande innerväggar görs en inre kantbalk med kantjärn och byglar. Ritningen visar var." },
    ],
    target: { href: "/produkter/villakorg-kantbalksarmering", label: "Beställ kantbalksarmering" },
    category: "armering-till",
  },

  // 48. Grundmur / källarvägg
  {
    slug: "armering-kallarvagg",
    title: "Armering till källarvägg och grundmur",
    metaTitle: "Armering källarvägg och grundmur",
    metaDescription:
      "Så armeras en källarvägg eller grundmur: två lager kamjärn, anslutningsjärn från bottenplattan, hörnbyglar och täckskikt mot jord. Typiska dimensioner.",
    excerpt:
      "En källarvägg tar jordtryck från ena sidan och väggens last uppifrån. Här är den typiska armeringen – två lager, anslutningsjärn och hörn – och vad du ska tänka på.",
    date,
    readingMinutes: 5,
    keywords: [
      "armering källarvägg",
      "armera grundmur",
      "grundmur armering",
      "källarvägg betong armering",
      "anslutningsjärn",
      "källargrund armering",
    ],
    content: [
      { type: "p", text: "En källarvägg eller grundmur av platsgjuten betong bär huset och håller samtidigt emot jordtrycket utifrån. Den armeras därför tätare än en vanlig innervägg, och i båda sidor. Vi levererar armeringen till källare och grundmurar som en del av [grundarmering](/produkter/grundarmering) – bottenplatta och väggar efter samma ritning." },
      { type: "p", text: "Skillnaden mot en fristående stödmur är att källarväggen hålls upptill av bjälklaget. Den fungerar alltså som en platta som spänner mellan bottenplatta och bjälklag. En fristående mur beskrivs i [armering till stödmur](/blogg/armera-stodmur)." },

      { type: "h2", text: "Typisk armering i en källarvägg" },
      { type: "table",
        caption: "Exempel för småhuskällare – dimension och avstånd enligt konstruktionsritning.",
        head: ["Del", "Typiskt utförande"],
        rows: [
          ["Väggtjocklek", "Ofta 200–250 mm"],
          ["Vertikal armering", "Ø10–Ø12 c/c 150–200 mm, i båda sidor"],
          ["Horisontell armering", "Ø10–Ø12 c/c 150–200 mm, i båda sidor"],
          ["Anslutningsjärn", "Från bottenplattan upp i väggen, skarvas med vertikalerna"],
          ["Hörn och väggslut", "U-byglar eller hörnjärn som binder ihop lagren"],
          ["Täckskikt", "Ofta 35–50 mm på jordsidan, mindre invändigt"],
        ],
      },

      { type: "h2", text: "Varför två lager?" },
      { type: "p", text: "Jordtrycket böjer väggen inåt. Mitt på väggen uppstår då drag på insidan, och vid infästningen mot plattan drag på utsidan. Därför armeras båda sidor. Den horisontella armeringen begränsar dessutom krympsprickor, eftersom väggen gjuts mot en redan härdad bottenplatta som håller emot." },

      { type: "h2", text: "Anslutningsjärn – kopplingen till plattan" },
      { type: "p", text: "Anslutningsjärn (startjärn) gjuts in i bottenplattan och sticker upp så att väggens vertikaler kan skarvas mot dem. De måste ligga på rätt plats före plattgjutningen – i efterhand går det inte att rätta. Skarvlängden står på ritningen; läs mer i [skarvlängd armering](/blogg/skarvlangd-armering)." },

      { type: "h2", text: "Fukt, grundvatten och tätning" },
      { type: "p", text: "En källarvägg har jord på ena sidan och ett varmt rum på den andra. Betongen ska vara tät, och sprickor kan släppa in vatten. Därför är sprickbegränsningen lika viktig som bärförmågan. Vid högt grundvatten kan konstruktören kräva tätare armering och vattentät betong, och gjutfogen mellan platta och vägg tätas med fogband eller injekteringsslang." },
      { type: "p", text: "Utvändigt skyddas väggen av isolering, dränering och fuktspärr. Det minskar påverkan från jorden men ersätter inte rätt täckskikt. Armeringen ska ha full betongtäckning även om väggen senare isoleras." },
      { type: "h2", text: "Öppningar och genomföringar" },
      { type: "p", text: "Källarfönster, dörrar och rörgenomföringar bryter armeringen. Runt varje öppning läggs extra järn längs kanterna och diagonaljärn i hörnen. Genomföringar för avlopp, vatten och el ska planeras före gjutning, så att armeringen kan läggas runt dem i stället för att kapas i efterhand." },
      { type: "h2", text: "Arbetsgång" },
      { type: "ol", items: [
        "Placera anslutningsjärnen i bottenplattan enligt ritning och gjut plattan.",
        "Res väggformen på ena sidan.",
        "Montera ytterlagrets vertikaler och horisontaler, sedan innerlagret.",
        "Sätt U-byglar och hörnjärn vid hörn, öppningar och väggslut.",
        "Säkra täckskiktet med distanser mot formen och stäng formen.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Väggens tjocklek och armering beror på väggens höjd, jordtryck, grundvatten och laster från huset. Täckskikt bestäms av exponeringsklass. Följ konstruktionsritningen – värdena ovan är typiska exempel, inte en dimensionering." },

      { type: "p", text: "Varför prefab? En källare har många olika positioner: anslutningsjärn, raka väggjärn i olika längder, U-byglar, hörnjärn och öppningsarmering. Levereras de klippta, bockade och märkta per vägg slipper laget mäta, kapa och bocka på plats, och risken att fel järn hamnar i fel vägg minskar. Det sparar mest tid i just väggar, där formen ofta står och väntar på armeringen." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Bottenplattans och väggarnas armeringsritning.",
        "Väggarnas höjd, tjocklek och längd per vägg.",
        "Läge för öppningar, fönster och genomföringar.",
        "Skarvlängder och anslutningsjärnens längd.",
        "Om bottenplatta och väggar levereras i en eller två omgångar.",
        "Leveransort och lossningsförhållanden.",
      ] },
      { type: "h2", text: "Beställ armeringen till källaren" },
      { type: "p", text: "Vi tillverkar anslutningsjärn, raka väggjärn, U-byglar och hörnjärn i B500B efter din ritning och levererar märkt per vägg och position i hela Sverige. Se [grundarmering](/produkter/grundarmering) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Hur armeras en källarvägg?", a: "Oftast med två lager kamjärn, Ø10–Ø12 c/c 150–200 mm i båda riktningar, plus anslutningsjärn från bottenplattan och byglar i hörn. Konstruktören avgör." },
      { q: "Vad är anslutningsjärn?", a: "Järn som gjuts in i bottenplattan och sticker upp så att väggens vertikala armering kan skarvas mot dem. De binder ihop vägg och platta." },
      { q: "Vilket täckskikt behövs på källarväggens utsida?", a: "Ofta 35–50 mm på jordsidan beroende på exponeringsklass. Gjuts betongen direkt mot jord krävs minst 75 mm enligt Eurokod 2." },
      { q: "Är grundmur och stödmur samma sak?", a: "Nej. En grundmur eller källarvägg hålls upptill av bjälklaget, medan en stödmur står fritt och måste klara jordtrycket på egen hand. Armeringen skiljer sig därför." },
      { q: "Kan jag kapa armering för en rörgenomföring?", a: "Inte utan att konstruktören godkänner det. Kapad armering ska ersättas med extra järn runt öppningen." },
    ],
    target: { href: "/produkter/grundarmering", label: "Begär offert på källararmering" },
    category: "armering-till",
  },

  // 49. Betongvägg
  {
    slug: "armering-betongvagg",
    title: "Armera betongvägg – armering i platsgjutna väggar",
    metaTitle: "Armera betongvägg – järn, nät och byglar",
    metaDescription:
      "Hur armeras en platsgjuten betongvägg? Minimiarmering, ett eller två lager, nät eller lösa järn, öppningar och hörn – med typiska dimensioner och steg.",
    excerpt:
      "En platsgjuten betongvägg armeras både för last och för att begränsa sprickor. Här är de typiska lösningarna – och vad som händer vid hörn och öppningar.",
    date,
    readingMinutes: 5,
    keywords: [
      "armera betongvägg",
      "armering betongvägg",
      "betongvägg armering",
      "platsgjuten vägg armering",
      "armering vägg",
      "väggarmering",
    ],
    content: [
      { type: "p", text: "Platsgjutna betongväggar finns i trapphus, garage, mellanväggar, brandväggar och murar ovan mark. De armeras för att bära last, ta upp horisontella krafter och begränsa sprickor från krympning och temperatur. Vi tillverkar väggarmeringen som [klippt och bockad armering](/produkter/klippt-och-bockad) efter ritning, så att den kan monteras direkt." },

      { type: "h2", text: "Vad bestämmer armeringen?" },
      { type: "ul", items: [
        "Last: bärande väggar får vertikal armering efter tryck och böjning.",
        "Sprickbegränsning: horisontell armering tar krympning, särskilt i långa väggar gjutna mot fast platta.",
        "Minimiarmering: Eurokod 2 anger minsta mängd armering i väggar även om lasten är liten.",
        "Exponering: utomhus eller mot jord krävs större täckskikt än inomhus.",
      ] },

      { type: "h2", text: "Typiska lösningar" },
      { type: "table",
        caption: "Exempel – vägtjocklek, dimension och avstånd enligt konstruktionsritning.",
        head: ["Vägg", "Typisk armering", "Lager"],
        rows: [
          ["Innervägg 150–200 mm", "Ø8–Ø10 c/c 150–200 eller nät", "Ofta två lager, ibland ett centriskt"],
          ["Ytter-/garagevägg 200 mm", "Ø10–Ø12 c/c 150–200", "Två lager"],
          ["Lång vägg mot fast platta", "Tätare horisontell armering", "Två lager"],
          ["Öppningar", "Extra järn runt om + diagonaljärn i hörn", "Båda sidor"],
          ["Väggslut och hörn", "U-byglar eller hörnjärn", "Binder ihop lagren"],
        ],
      },

      { type: "h2", text: "Nät eller lösa järn?" },
      { type: "p", text: "Svetsade nät går snabbt att montera i raka väggar utan många öppningar. Lösa järn är flexiblare när väggen har håltagningar, varierande höjd eller krav på exakt armeringsmängd. Ofta kombineras de: nät i ytan, lösa järn och byglar vid kanter och öppningar. Väggar som håller jord på ena sidan beskrivs i [armering till källarvägg](/blogg/armering-kallarvagg)." },

      { type: "h2", text: "Öppningar och hörn" },
      { type: "p", text: "Runt dörrar och fönster koncentreras spänningarna i hörnen, där sprickor annars startar. Därför läggs extra järn längs öppningens kanter och diagonaljärn i hörnen. I väggslut och hörn binds de två lagren ihop med U-byglar så att armeringen förankras." },

      { type: "h2", text: "Skarvar och anslutningar" },
      { type: "p", text: "Väggens vertikaler skarvas mot anslutningsjärn från plattan eller bjälklaget under. Skarvlängden beror på dimension och betong, ofta 40–60 gånger diametern. Vid höga väggar eller gjutning i etapper behövs även skarvar i höjdled. Horisontella järn skarvas med förskjutning så att inte alla skarvar hamnar i samma snitt. Se [skarvlängd armering](/blogg/skarvlangd-armering)." },
      { type: "p", text: "Där väggen möter en annan vägg eller ett bjälklag binds armeringen ihop med U-byglar eller bockade anslutningsjärn. Det är dessa detaljer som gör att byggnaden samverkar som en helhet – och som oftast saknas när armering köps styckvis." },
      { type: "h2", text: "Mängd per vägg" },
      { type: "p", text: "Ett räkneexempel: en vägg 200 mm tjock, 2,5 m hög och 8 m lång, med Ø10 c/c 200 i båda riktningar och båda sidor, har cirka 2 × 41 vertikaler à 2,5 m och 2 × 13 horisontaler à 8 m. Det blir cirka 205 + 208 m, alltså drygt 410 m järn eller ungefär 255 kg (Ø10 väger 0,617 kg/m), plus skarvar och byglar." },
      { type: "h2", text: "Montage steg för steg" },
      { type: "ol", items: [
        "Kontrollera att anslutningsjärnen från plattan eller bjälklaget står rätt.",
        "Res ena formsidan och montera första lagret – vertikaler först, sedan horisontaler.",
        "Montera andra lagret, distanser mellan lagren och mot formen.",
        "Lägg in öppningsarmering, diagonaljärn och U-byglar.",
        "Kontrollera mot ritningen och stäng formen.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Väggens armering beräknas enligt Eurokod 2 (SS-EN 1992-1-1) utifrån laster, höjd, exponering och sprickkrav. Utförandet följer SS-EN 13670. Värdena ovan är typiska exempel – ritningen gäller." },

      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Armeringsritning eller bockningslista per vägg.",
        "Gjutetapper – levereras allt på en gång eller per etapp?",
        "Öppningar, håltagningar och ingjutningsgods.",
        "Skarvlängder och anslutningar mot platta och bjälklag.",
        "Märkning – per vägg, våning eller etapp.",
        "Leveransort och lossningsförhållanden.",
      ] },
      { type: "h2", text: "Beställ väggarmering efter ritning" },
      { type: "p", text: "Vi kapar och bockar väggjärn, U-byglar och öppningsarmering i B500B efter din bockningslista och levererar märkt per vägg i hela Sverige. Se [klippt och bockad armering](/produkter/klippt-och-bockad) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Hur armeras en betongvägg?", a: "Oftast med kamjärn i två lager, vertikalt och horisontellt, Ø8–Ø12 c/c 150–200 mm beroende på tjocklek och last. Konstruktören avgör." },
      { q: "Räcker ett lager armering i en vägg?", a: "I tunna, lågt belastade innerväggar kan ett centriskt lager räcka. Bärande väggar och väggar utomhus eller mot jord har normalt två lager." },
      { q: "Varför behövs extra armering runt öppningar?", a: "Spänningarna samlas i öppningens hörn där sprickor annars startar. Extra järn längs kanterna och diagonaljärn i hörnen tar upp dem." },
      { q: "Kan man använda armeringsnät i väggar?", a: "Ja, i raka väggar utan många håltagningar är nät snabbt att montera. Vid öppningar och hörn kompletteras nätet med lösa järn och byglar." },
      { q: "Hur mycket armering går åt till en betongvägg?", a: "Det beror på tjocklek och c/c-avstånd. En 8 m lång och 2,5 m hög vägg med Ø10 c/c 200 i två lager kräver cirka 255 kg plus skarvar och byglar." },
    ],
    target: { href: "/produkter/klippt-och-bockad", label: "Beställ väggarmering" },
    category: "armering-till",
  },

  // 50. Bjälklag
  {
    slug: "armering-bjalklag",
    title: "Armering till bjälklag – platsgjutet och på plattbärlag",
    metaTitle: "Armering bjälklag – underkant, överkant, stöd",
    metaDescription:
      "Så armeras ett betongbjälklag: underkantsarmering i fält, överkantsarmering över stöd, kantbalkar och håltagningar. Platsgjutet och på plattbärlag.",
    excerpt:
      "Ett bjälklag spänner fritt mellan stöd och armeras därför annorlunda än en platta på mark. Här är principen – underkant i fält, överkant över stöd – med typiska dimensioner.",
    date,
    readingMinutes: 5,
    keywords: [
      "armering bjälklag",
      "bjälklag armering",
      "betongbjälklag armering",
      "armera bjälklag",
      "plattbärlag armering",
      "överkantsarmering",
      "platsgjutet bjälklag",
    ],
    content: [
      { type: "p", text: "Ett bjälklag är en betongplatta som spänner fritt mellan väggar, balkar eller pelare. Till skillnad från en platta på mark har det inget underlag som bär – armeringen är det som håller bjälklaget uppe. Balkar och pelare som bär bjälklaget levererar vi som färdiga [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar), och bjälklagets egen armering tillverkas efter samma ritning." },

      { type: "h2", text: "Principen: drag där plattan böjs" },
      { type: "p", text: "Mitt i ett fält böjer bjälklaget nedåt och dragkraften hamnar i underkant. Över mellanstöd och vid inspända kanter vänder böjningen och dragkraften hamnar i överkant. Därför har ett bjälklag huvudarmering i underkant över hela fältet och kompletterande överkantsarmering över stöden." },

      { type: "h2", text: "Typisk armering i ett bostadsbjälklag" },
      { type: "table",
        caption: "Exempel – tjocklek, dimension och avstånd enligt konstruktionsritning.",
        head: ["Del", "Typiskt utförande"],
        rows: [
          ["Tjocklek", "Ofta 200–250 mm i bostäder"],
          ["Underkant, fält", "Ø10–Ø12 c/c 150–200 i båda riktningar, eller nät"],
          ["Överkant, över stöd", "Ø10–Ø16 c/c 150–200, utsträckt en bit in i fältet"],
          ["Fria kanter", "U-byglar som binder ihop över- och underkant"],
          ["Håltagningar", "Avväxlingsjärn runt om, diagonaljärn i hörn"],
          ["Täckskikt", "Ofta 20–30 mm inomhus, enligt exponeringsklass"],
        ],
      },
      { type: "figure", illustration: "rebar-cage", caption: "Balkar under bjälklaget armeras med korgar av längsjärn och byglar." },

      { type: "h2", text: "Platsgjutet eller på plattbärlag?" },
      { type: "p", text: "Ett helt platsgjutet bjälklag kräver form och stämp, och all armering läggs på plats. Med plattbärlag (prefabricerade tunna betongplattor med fackverksbalkar) ligger underkantsarmeringen redan ingjuten i bärlaget. På byggplatsen läggs då skarvarmering över bärlagsfogarna, överkantsarmering och eventuella förstärkningar innan pågjutningen." },

      { type: "h2", text: "Håltagningar och ingjutningsgods" },
      { type: "p", text: "Ett bjälklag har ofta schakt för ventilation, trapphål och genomföringar för rör. Varje håltagning bryter armeringen, och den avskurna armeringen ska ersättas med avväxlingsjärn längs hålets kanter och diagonaljärn i hörnen. Stora öppningar som trapphål kan kräva egna balkar. Planera håltagningar med konstruktören innan armeringen beställs." },
      { type: "h2", text: "Ordning i lagren" },
      { type: "p", text: "I ett bjälklag som spänner i två riktningar ligger underkantens två lager korsvis. Vilken riktning som ligger nederst – och därmed har störst inre hävarm – står på ritningen och följer normalt den kortaste spännvidden. Samma gäller i överkant. Fel ordning minskar bärförmågan, så märkning per position är viktig." },
      { type: "p", text: "Överkantsarmeringen ska hållas på rätt höjd av armeringsstolar eller bockar som klarar gångtrafik under gjutningen. Trampas den ned förlorar bjälklaget kapacitet över stöden." },
      { type: "h2", text: "Montage steg för steg" },
      { type: "ol", items: [
        "Bygg form och stämp, eller lägg plattbärlagen.",
        "Lägg underkantsarmeringen på distanser – nedersta riktningen enligt ritning.",
        "Montera kantbyglar och avväxlingar runt håltagningar.",
        "Lägg ingjutningsgods och rör.",
        "Lägg överkantsarmeringen på stolar eller bockar så att höjden behålls vid gjutning.",
        "Kontrollera mot ritningen innan gjutning.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Ett bjälklag är bärande och dimensioneras alltid av konstruktör enligt Eurokod 2. Spännvidd, laster, nedböjning, brandkrav och sprickbredd styr armeringen. Byt aldrig dimension eller avstånd på egen hand." },

      { type: "p", text: "Varför prefab? Ett bjälklag har ofta hundratals positioner med olika längder, och fel järn på fel plats ger fel kapacitet. Med armering klippt och bockad efter ritning, märkt per position och med rätt skarvlängder enligt [skarvlängd armering](/blogg/skarvlangd-armering), blir montaget snabbare och kontrollen före gjutning enklare. Balkkorgar kan levereras färdigsvetsade eller najade och lyftas på plats med kran." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Armeringsritning för bjälklag, balkar och pelare.",
        "Platsgjutet eller plattbärlag – vilken armering ingår redan i bärlaget?",
        "Håltagningar och avväxlingar.",
        "Antal och höjd på stolar för överkantsarmeringen.",
        "Märkning per bjälklag och etapp.",
        "Leveransort, kranplats och önskad vecka.",
      ] },
      { type: "h2", text: "Beställ armeringen till bjälklaget" },
      { type: "p", text: "Vi tillverkar balk- och pelarkorgar, raka och bockade järn, U-byglar och [armeringsnät](/produkter/armeringsnat) efter ritning, märkt per position och levererat i hela Sverige. Se [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Var ska armeringen ligga i ett bjälklag?", a: "Huvudarmeringen ligger i underkant i fälten, där bjälklaget böjer nedåt. Över mellanstöd och inspända kanter behövs överkantsarmering. Ritningen anger exakt placering." },
      { q: "Hur tjockt är ett betongbjälklag?", a: "I bostäder ofta 200–250 mm, men tjockleken bestäms av spännvidd, laster och ljud- och brandkrav. Konstruktören avgör." },
      { q: "Vad är ett plattbärlag?", a: "En prefabricerad tunn betongplatta med fackverksbalkar som fungerar som form och innehåller underkantsarmeringen. På plats kompletteras med skarv- och överkantsarmering innan pågjutning." },
      { q: "Kan jag använda armeringsnät i bjälklag?", a: "Ja, nät används ofta i bjälklag, ibland kompletterat med lösa järn över stöd och runt håltagningar. Vilken nättyp som krävs står på ritningen." },
      { q: "Vad är avväxlingsjärn?", a: "Extra järn som läggs runt en håltagning för att ersätta den armering som kapats av hålet. Diagonaljärn i hörnen hindrar sprickor." },
    ],
    target: { href: "/produkter/pelar-och-balkkorgar", label: "Begär offert på bjälklagsarmering" },
    category: "armering-till",
  },

  // 51. Balkong
  {
    slug: "armering-balkong",
    title: "Armering till balkong – utkragande platta i betong",
    metaTitle: "Armering balkong – överkant, infästning, täckskikt",
    metaDescription:
      "Hur armeras en balkongplatta i betong? Huvudarmering i överkant, infästning mot bjälklaget, kantbyglar och täckskikt utomhus – typiska lösningar.",
    excerpt:
      "En balkong kragar ut från huset, och det vänder på allt du vet om plattarmering: huvudarmeringen ligger i överkant. Här är principen och de typiska lösningarna.",
    date,
    readingMinutes: 5,
    keywords: [
      "armering balkong",
      "balkongplatta armering",
      "armera balkong",
      "gjuta balkong",
      "utkragande platta armering",
      "balkong betong",
    ],
    content: [
      { type: "p", text: "En balkongplatta är oftast utkragande – den sitter fast i husets bjälklag eller vägg i ena änden och hänger fritt i den andra. Det gör armeringen ovanlig: dragkraften ligger i överkant, inte i underkant som i en vanlig platta. Kantbalkar, pelare och upplag till balkonger tillverkar vi som [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar)." },

      { type: "h2", text: "Varför överkant?" },
      { type: "p", text: "En utkragande platta böjer nedåt från infästningen. Överkanten sträcks och underkanten trycks ihop. Huvudarmeringen läggs därför i överkant och förankras långt in i bjälklaget eller i balkonginfästningen. Ligger järnen för lågt – till exempel om de trampas ned vid gjutningen – förlorar balkongen bärförmåga." },

      { type: "h2", text: "Typisk armering i en balkongplatta" },
      { type: "table",
        caption: "Exempel – dimension, mängd och förankring enligt konstruktionsritning.",
        head: ["Del", "Typiskt utförande"],
        rows: [
          ["Huvudarmering", "Överkant, Ø10–Ø12 c/c 100–200, vinkelrätt mot fasaden"],
          ["Fördelningsarmering", "Överkant, parallellt med fasaden"],
          ["Underkant", "Lättare armering eller nät mot sprickor"],
          ["Fri kant", "U-byglar runt plattans kant"],
          ["Infästning", "Förankring i bjälklag eller bärande isolerelement"],
          ["Täckskikt", "Större än inomhus – ofta 30–45 mm utomhus"],
        ],
      },

      { type: "h2", text: "Infästning och köldbryggor" },
      { type: "p", text: "Går balkongens armering rakt igenom ytterväggens isolering blir infästningen en köldbrygga. I nyproduktion används därför ofta bärande isolerelement som för över kraften genom isoleringen. Elementets armering ska passa ihop med balkongens och bjälklagets – stäm av mot elementtillverkarens anvisning och konstruktörens ritning." },

      { type: "h2", text: "Täckskikt och beständighet" },
      { type: "p", text: "En balkong utsätts för regn, frost och ibland salt. Täckskiktet väljs efter exponeringsklass och livslängd och är större än i en innerplatta. För lite täckskikt ger rostande armering och avspjälkad betong – den vanligaste skadan på äldre balkonger. Läs mer om [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "h2", text: "Utkragande eller understödd balkong?" },
      { type: "p", text: "Alla balkonger kragar inte ut. En balkong som bärs av pelare eller av väggar i båda ändar fungerar mer som ett vanligt bjälklag, med huvudarmering i underkant i fält. Är den både understödd och inspänd i fasaden behövs armering i både över- och underkant. Det är alltså upplagsförhållandet som bestämmer var huvudarmeringen ska ligga – därför ska ritningen alltid följas." },
      { type: "h2", text: "Räcke, fall och avvattning" },
      { type: "p", text: "Räcken förankras med ingjutningsgods eller i efterhand med expanderande infästning. Ingjutningsgodset ska placeras före gjutningen så att det inte krockar med armeringen. Plattan ska ha fall utåt och droppnäsa i framkant, så att vatten inte rinner in mot fasaden eller längs undersidan. Avvattningen påverkar beständigheten lika mycket som täckskiktet." },
      { type: "h2", text: "Montage steg för steg" },
      { type: "ol", items: [
        "Bygg form och stämp, med fall utåt enligt ritning.",
        "Montera infästningen eller anslutningsjärnen mot bjälklaget.",
        "Lägg underkantsarmering på distanser.",
        "Montera överkantsarmeringen på stolar så att höjden säkras.",
        "Montera U-byglar i fria kanter och kontrollera förankringslängder.",
        "Låt stämpen stå tills konstruktören anger att plattan får avformas.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "En balkong är en bärande, säkerhetskritisk konstruktion. Armering, förankring, infästning och täckskikt ska alltid dimensioneras av konstruktör och följas exakt." },

      { type: "p", text: "Varför prefab? Balkonger i flerbostadshus är ofta många och likadana. Då lönar det sig att tillverka byglar, överkantsjärn och kantkorgar i serie efter samma ritning. Varje balkong får identisk armering, märkt per position, och montaget på formen går snabbt. Även för en enstaka villabalkong slipper du bocka järn för hand och får rätt mått från början." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Konstruktionsritning för balkongplatta och infästning.",
        "Typ av infästning eller isolerelement.",
        "Antal balkonger och om de är identiska.",
        "Täckskikt och exponeringsklass enligt ritning.",
        "Ingjutningsgods för räcken.",
        "Leveransort och önskad vecka.",
      ] },
      { type: "h2", text: "Beställ balkongarmering" },
      { type: "p", text: "Vi tillverkar U-byglar, bockade överkantsjärn, kantbalkskorgar och nät i B500B efter ritning och levererar märkt per balkong i hela Sverige. Se [pelar- och balkkorgar](/produkter/pelar-och-balkkorgar) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Var ska armeringen ligga i en balkong?", a: "I en utkragande balkong ligger huvudarmeringen i överkant, eftersom det är där dragkraften uppstår. Den förankras in i bjälklaget eller i en bärande infästning." },
      { q: "Vilket täckskikt behövs på en balkong?", a: "Större än inomhus eftersom balkongen utsätts för fukt och frost – ofta 30–45 mm. Exponeringsklass och ritning avgör." },
      { q: "Varför spricker gamla balkonger?", a: "Ofta för att armeringen ligger för nära ytan och har rostat. Rosten sprängs ut betongen. Rätt täckskikt och rätt höjd på armeringen förebygger det." },
      { q: "Kan jag gjuta en balkong själv?", a: "En balkong är bärande och ska dimensioneras av konstruktör. Armering och infästning måste följa ritningen exakt." },
      { q: "Måste balkongen vara utkragande?", a: "Nej. En balkong kan också bäras av pelare eller väggar. Då ändras armeringen, eftersom dragkraften hamnar i underkant i fältet." },
    ],
    target: { href: "/produkter/pelar-och-balkkorgar", label: "Begär offert på balkongarmering" },
    category: "armering-till",
  },

  // 52. Altan / uteplats i betong
  {
    slug: "armering-uteplats-betong",
    title: "Armering till uteplats och altan i betong",
    metaTitle: "Armering uteplats och altan i betong",
    metaDescription:
      "Vilken armering behövs till en gjuten uteplats eller altan? Nättyp, placering, täckskikt utomhus, tjälsäker uppbyggnad och fogar – med typiska värden.",
    excerpt:
      "En gjuten uteplats står i väder och tjäle året om. Här är armeringen som brukar räcka, hur nätet placeras och varför underarbetet betyder lika mycket.",
    date,
    readingMinutes: 5,
    keywords: [
      "armering uteplats",
      "gjuta uteplats armering",
      "altan betong armering",
      "armeringsnät uteplats",
      "gjuten altan",
      "betongplatta utomhus armering",
    ],
    content: [
      { type: "p", text: "En gjuten uteplats eller altan på mark är en tunn, oisolerad platta som utsätts för regn, frost och tjäle. Armeringen ska framför allt hålla ihop plattan och begränsa sprickor. Oftast räcker ett lager [armeringsnät](/produkter/armeringsnat) – men bara om underarbetet är rätt gjort." },

      { type: "h2", text: "Typisk armering till uteplats" },
      { type: "table",
        caption: "Exempel för uteplats på mark – ritning eller leverantörens anvisning gäller.",
        head: ["Del", "Typiskt utförande"],
        rows: [
          ["Plattjocklek", "Ofta 80–120 mm"],
          ["Nät", "5150 eller 6150 (Ø5/Ø6, c/c 150 mm)"],
          ["Placering", "Centriskt eller i övre halvan av plattan"],
          ["Nätskarv", "Överlapp minst två rutor, ca 300 mm"],
          ["Kant", "Ev. förtjockad kant med 2 kamjärn Ø10"],
          ["Täckskikt", "Ofta 30–40 mm utomhus"],
        ],
      },

      { type: "h2", text: "Underarbetet avgör mer än armeringen" },
      { type: "p", text: "Sprickor i uteplatser beror oftare på tjäle och sättningar än på för lite armering. Matjord och tjälfarligt material ska bort och ersättas med packat, dränerande material. Plattan ska ha fall bort från huset. På tjälfarlig mark kan markisolering behövas. Armeringen fördelar lasterna, men den kan inte kompensera för ett dåligt underlag." },

      { type: "h2", text: "Fogar mot sprickor" },
      { type: "p", text: "En stor betongyta krymper när den torkar och rör sig med temperaturen. Därför delas större uteplatser in i fält med fogar, antingen sågade eller ingjutna. Nätet minskar sprickbredden, men fogarna styr var sprickorna hamnar. Mot husgrunden läggs en rörelsefog." },

      { type: "h2", text: "Arbetsgång" },
      { type: "ol", items: [
        "Schakta bort matjord, lägg och packa bärlager med fall från huset.",
        "Bygg form och lägg eventuell markisolering.",
        "Lägg näten på distanser med överlapp och bind ihop.",
        "Förstärk kant och hörn med kamjärn om ritningen anger det.",
        "Gjut, vibrera och efterbehandla – håll ytan fuktig de första dygnen.",
        "Såga fogar i rätt tid efter gjutningen.",
      ] },

      { type: "h2", text: "Täckskikt utomhus" },
      { type: "p", text: "En uteplats utsätts för regn, frost och ibland tösalt. Täckskiktet ska därför vara större än inomhus – ofta 30–40 mm, och minst 40 mm mot förberedd mark enligt Eurokod 2. Nätet ska ligga på distanser hela vägen, även i kanterna. Där armeringen sticker upp mot ytan börjar den rosta, och rosten spränger loss betongen." },
      { type: "h2", text: "Ytbehandling och betong" },
      { type: "p", text: "En uteplats ska gjutas med frostbeständig betong, särskilt om ytan saltas. Ytan kan borstas för halkfrihet, stålglättas eller beläggas senare. Valet av ytbehandling påverkar inte armeringen, men plattans tjocklek och fall ska bestämmas innan formen byggs. Vill du ha en tunn platta under plattsättning gäller samma princip – nätet ska ligga i betongen, inte under den." },
      { type: "h2", text: "Hur mycket nät går åt?" },
      { type: "p", text: "Räkna plattans yta plus 10–15 % för överlapp. En uteplats på 4 × 5 m (20 m²) kräver cirka 22–23 m² nät – två eller tre standardnät beroende på format. Snabbräkna i [armeringskalkylatorn](/armeringskalkylator) eller läs [armeringsåtgång per m²](/blogg/armering-atgang-per-m2)." },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "För en enkel uteplats finns sällan en konstruktionsritning, men ska plattan bära tyngre laster – till exempel en spabad, ett växthus eller en bil – ska den dimensioneras. Tjälförhållanden varierar mycket mellan södra Sverige och Norrland." },

      { type: "p", text: "Tänk också på formatet. Standardnät levereras ofta i 2,0–2,4 m bredd och 5–6 m längd, vilket kan vara svårt att hantera på en villatomt med smal infart. Nät kan klippas till mindre format, och vid små ytor kan det vara enklare att beställa färdigklippta nät som passar plattans mått. Det minskar spill och gör arbetet lättare för den som gjuter själv." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Uteplatsens mått och form.",
        "Plattjocklek och om kanten ska förtjockas.",
        "Önskad nättyp, till exempel 5150 eller 6150.",
        "Antal och typ av distanser.",
        "Om najtråd och verktyg ska ingå.",
        "Leveransort – frakten räknas efter mängd och ort.",
      ] },
      { type: "h2", text: "Beställ nät till uteplatsen" },
      { type: "p", text: "Vi levererar armeringsnät, kantjärn och distanser till uteplatser och altaner i hela Sverige, med frakt efter mängd och ort. Se [armeringsnät](/produkter/armeringsnat) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Behöver en gjuten uteplats armering?", a: "Ja, ett armeringsnät rekommenderas för att hålla ihop plattan och begränsa sprickor. Oftast räcker nät 5150 eller 6150." },
      { q: "Var i plattan ska nätet ligga?", a: "Centriskt eller i övre halvan av plattan, på distanser. Ett nät som ligger i botten gör nästan ingen nytta mot sprickor i ytan." },
      { q: "Hur tjock ska en gjuten uteplats vara?", a: "Ofta 80–120 mm för gångytor. Ska plattan bära tyngre laster behövs dimensionering." },
      { q: "Varför spricker gjutna uteplatser?", a: "Ofta på grund av tjäle, sättningar eller krympning utan fogar. Rätt underarbete och fogindelning är lika viktigt som armeringen." },
      { q: "Behöver en uteplats fogar?", a: "Större ytor bör delas in i fält med sågade eller ingjutna fogar så att krympsprickor hamnar där du vill. Mot husgrunden läggs en rörelsefog." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ armeringsnät" },
    category: "armering-till",
  },

  // 53. Carport
  {
    slug: "armering-carport",
    title: "Armering till carport – plintar eller platta?",
    metaTitle: "Armering carport – plintar eller platta",
    metaDescription:
      "Ska carporten stå på plintar eller en gjuten platta? Så armeras plintar, stolpfundament och carportplatta – med typiska dimensioner och arbetsgång.",
    excerpt:
      "En carport bärs av stolpar, och det är stolparnas fundament som ska klara snölast och tjäle. Här jämför vi plintar och platta och visar hur båda armeras.",
    date,
    readingMinutes: 5,
    keywords: [
      "armering carport",
      "carport grund",
      "carport plintar",
      "gjuta plintar carport",
      "carport betongplatta",
      "grund till carport",
    ],
    content: [
      { type: "p", text: "En carport saknar väggar som fördelar lasten. Hela taket – inklusive snön – förs ned genom några få stolpar. Grunden måste därför klara stora punktlaster och samtidigt stå emot tjäle. Vi levererar armeringen till både plintar och platta som [grundarmering](/produkter/grundarmering) efter ritning." },

      { type: "h2", text: "Två vanliga grundlösningar" },
      { type: "table",
        caption: "Typiska lösningar – dimension och djup enligt konstruktör eller leverantörens anvisning.",
        head: ["Lösning", "När den passar", "Typisk armering"],
        rows: [
          ["Plintar under stolparna", "Grus eller plattor under taket", "Plintkorg eller kryss Ø10–Ø12 i botten, startjärn eller stolpsko"],
          ["Gjuten platta med förstärkta kanter", "Fast golv under bilen", "Nät 6150 i plattan, kantjärn Ø10–Ø12 under stolpraden"],
          ["Platta + plintar", "Fast golv och höga snölaster", "Plintar under stolpar, nät i plattan"],
        ],
      },

      { type: "h2", text: "Plintar – armeras som små fundament" },
      { type: "p", text: "Plinten ska stå på tjälfritt djup eller på isolerat underlag, så att tjälen inte lyfter stolpen. Den armeras med ett kryss eller en korg i botten som sprider lasten och med järn upp mot stolpinfästningen. Prefab-plintar finns, men vid höga snölaster eller stora spännvidder gjuts plintarna ofta på plats. Mer om plintarmering i [armering till plintar](/blogg/armering-till-plintar)." },

      { type: "h2", text: "Platta – som en enkel garageplatta" },
      { type: "p", text: "Väljer du gjuten platta armeras den i princip som en garageplatta utan väggar: nät i fältet och förstärkt kant med kantjärn under stolpraden. Stolparna förankras med ingjutna stolpskor. Se även [armering till garageplatta](/blogg/armering-till-garage)." },

      { type: "h2", text: "Exempel på mängder" },
      { type: "p", text: "En dubbelcarport på cirka 6 × 6 m har ofta sex stolpar. Med plintar krävs alltså sex plintkorgar och sex startjärn eller stolpskor – identiska positioner som lämpar sig väl för serietillverkning. Väljer du platta på 36 m² behövs cirka 40–41 m² nät med överlapp och kantjärn längs stolpraderna." },
      { type: "ul", items: [
        "Plintar: 6 plintkorgar, startjärn eller stolpskor, distanser.",
        "Platta: ca 40–41 m² nät 6150, kantjärn Ø10–Ø12, distanser.",
        "Platta + plintar: båda ovan, med plintarna gjutna ihop med plattans kant.",
      ] },
      { type: "h2", text: "Stolpinfästning och vindlast" },
      { type: "p", text: "Utöver snölast påverkas carporten av vind, som vill lyfta och välta taket. Stolpinfästningen ska därför klara både tryck och lyft. Ingjutna stolpskor eller ingjutningsgods placeras exakt enligt carportens ritning – ett fel på några centimeter syns tydligt när taket monteras. Armeringen i plinten ska omsluta infästningen så att den inte spjälkar betongen." },
      { type: "h2", text: "Arbetsgång för plintar" },
      { type: "ol", items: [
        "Mät ut stolparnas lägen enligt carportens ritning.",
        "Gräv till tjälfritt djup eller lägg markisolering enligt anvisning.",
        "Lägg ett lager packad makadam och ställ formrör eller form.",
        "Placera bottenkorg och startjärn på distanser.",
        "Gjut in stolpsko eller ingjutningsgods i rätt höjd och läge.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Snölasten varierar kraftigt över Sverige – en carport i Norrland får betydligt större last än en i Skåne. Plintstorlek, djup och armering ska anpassas efter snözon, markförhållanden och carportens storlek. Följ tillverkarens eller konstruktörens anvisning." },

      { type: "p", text: "Varför prefab? Plintkorgar och startjärn till en carport är små men många identiska delar. Bockade i serie blir de lika, passar formröret och kommer färdiga att ställa på distanser. Det sparar ett par timmar med bockverktyg på plats och ger jämnare kvalitet än järn bockade för hand – och plattans kantjärn och nät kan komma i samma leverans." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Carportens storlek och antal stolpar.",
        "Plintar, platta eller båda.",
        "Plintmått och djup enligt anvisning.",
        "Typ av stolpinfästning.",
        "Snözon och ort.",
        "Leveransadress och önskad vecka.",
      ] },
      { type: "h2", text: "Beställ armering till carporten" },
      { type: "p", text: "Vi tillverkar plintkorgar, startjärn, kantjärn och nät i B500B och levererar i hela Sverige, inklusive Norrland. Se [grundarmering](/produkter/grundarmering) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Ska carporten stå på plintar eller platta?", a: "Plintar räcker om du inte behöver ett fast golv. Vill du ha gjuten yta under bilen är en platta med förstärkta kanter vanligt. Snölast och mark avgör." },
      { q: "Hur djupt ska plintarna till en carport vara?", a: "Ned till tjälfritt djup eller på isolerat underlag. Tjäldjupet varierar mellan landsdelar – följ anvisningen för din ort." },
      { q: "Hur armeras en carportplint?", a: "Ofta med ett kryss eller en korg Ø10–Ø12 i botten och järn upp mot stolpinfästningen. Konstruktören eller leverantören anger dimension." },
      { q: "Behöver carportplattan kantbalk?", a: "Ofta förstärks kanten under stolpraden med kantjärn, så att stolplasten sprids. Utförandet ska följa ritningen." },
      { q: "Hur många plintar behöver en carport?", a: "Lika många som stolpar – en dubbelcarport har ofta sex. Carportleverantörens ritning anger antal och placering." },
    ],
    target: { href: "/produkter/grundarmering", label: "Begär offert på carportgrund" },
    category: "armering-till",
  },

  // 54. Attefallshus
  {
    slug: "armering-attefallshus",
    title: "Armering till attefallshus – platta på mark i liten skala",
    metaTitle: "Armering attefallshus – platta och kantbalk",
    metaDescription:
      "Vilken armering behövs till grunden för ett attefallshus på 30 m²? Nät, kantbalk, byglar, täckskikt och åtgång – med räkneexempel och arbetsgång.",
    excerpt:
      "Ett attefallshus är ett riktigt hus i liten skala, och grunden byggs oftast som en platta på mark med kantbalk. Här är armeringen och ett räkneexempel för 30 m².",
    date,
    readingMinutes: 5,
    keywords: [
      "armering attefallshus",
      "grund attefallshus",
      "platta attefallshus",
      "attefallshus platta på mark",
      "gjuta platta attefallshus",
      "attefallshus grund armering",
    ],
    content: [
      { type: "p", text: "Ett attefallshus får ha en byggarea på högst 30 m² och kräver anmälan och startbesked från kommunen. Många används som gäststuga eller bostad – och då byggs grunden som en isolerad platta på mark, precis som för en villa men mindre. Kantbalken och dess armering levererar vi färdig som [villakorg och kantbalksarmering](/produkter/villakorg-kantbalksarmering)." },

      { type: "h2", text: "Typisk armering till attefallshus" },
      { type: "table",
        caption: "Exempel för isolerad platta, ca 30 m² – konstruktionsritningen gäller.",
        head: ["Del", "Typiskt utförande"],
        rows: [
          ["Fält", "Nät 5150 eller 6150, ett lager"],
          ["Kantbalk", "2 + 2 kantjärn Ø10–Ø12"],
          ["Byglar", "Kantbalksbyglar Ø8 c/c 200–300 mm"],
          ["Hörn", "4 hörnjärn"],
          ["Täckskikt", "Ofta 25–35 mm mot cellplast"],
          ["Distanser", "Under nät och i kantbalk"],
        ],
      },

      { type: "h2", text: "Räkneexempel: 5 × 6 m" },
      { type: "ul", items: [
        "Yta 30 m² – nät ca 33–35 m² inklusive överlapp (6150 väger ca 2,96 kg/m²).",
        "Omkrets 22 m – med 2 + 2 kantjärn blir det 88 m järn före skarvar.",
        "Byglar c/c 250 mm längs 22 m – cirka 88 byglar.",
        "Kantjärn Ø12: 88 m × 0,888 kg/m ≈ 78 kg före skarvar.",
      ] },
      { type: "p", text: "Siffrorna är ett exempel. Antal kantjärn och bygelavstånd står på din ritning. Byglarnas form och mått beskrivs i [kantbalksbygel](/blogg/kantbalksbygel)." },

      { type: "h2", text: "Platta eller plintar?" },
      { type: "p", text: "Ett oisolerat förråd kan stå på plintar, men ett attefallshus som ska värmas upp byggs nästan alltid på isolerad platta. Plattan ger varmt golv, enkel golvvärme och ett tätt hus. Hur plattan byggs upp lager för lager visar vi i [platta på mark – uppbyggnad och armering](/blogg/armering-platta-pa-mark)." },

      { type: "h2", text: "Vanliga fel vid små plattor" },
      { type: "ul", items: [
        "Kantbalken görs för grund för att spara betong – men kantbalken bär väggarna och ska följa ritningen.",
        "Hörnjärn saknas – kantjärnen möts bara i hörnet utan överlapp.",
        "Nätet läggs direkt på cellplasten – för lite täckskikt och ingen nytta mot sprickor i ytan.",
        "Innerbalkar glöms – loftbjälklag eller bärande innerväggar kan kräva förstärkning.",
        "Rör och golvvärme läggs efter nätet utan att nätet säkras – då trampas det ned.",
      ] },
      { type: "p", text: "Små projekt blir ofta lidande av att armeringen köps i omgångar från olika ställen. Med en bockningslista och en samlad leverans kommer allt på en gång, märkt per position, och plattan kan gjutas utan avbrott." },
      { type: "h2", text: "Arbetsgång" },
      { type: "ol", items: [
        "Gör anmälan och vänta på startbesked.",
        "Schakta, lägg och packa bärlager, lägg cellplast och kantelement.",
        "Montera byglar, kantjärn och hörnjärn.",
        "Lägg nät på distanser och förlägg rör och golvvärme.",
        "Kontrollera mot ritningen och gjut.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Även för ett litet hus ska grunden följa en konstruktionsritning, ofta från husleverantören eller en konstruktör. Den ingår i underlaget till anmälan. Värdena här är typiska exempel." },

      { type: "p", text: "Varför prefab? En attefallsplatta är liten, men den har samma antal delar som en villaplatta: nät, kantjärn, byglar, hörnjärn och distanser. Att köpa dem styckvis och bocka byglar för hand tar oproportionerligt lång tid. Med prefab kommer allt bockat efter mått och märkt, och plattan kan armeras på en dag av två personer – beroende på storlek och form." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Grundritning för attefallshuset.",
        "Kantelementets typ och invändiga mått.",
        "Nättyp, kantjärn och bygelavstånd.",
        "Bärande innerväggar eller punktlaster.",
        "Golvvärme ja eller nej – påverkar antal distanser.",
        "Leveransort och önskad vecka.",
      ] },
      { type: "h2", text: "Beställ armeringen som paket" },
      { type: "p", text: "Vi levererar byglar, kantjärn, hörnjärn, nät och distanser till attefallshus som ett paket efter ritning, märkt per position och skickat i hela Sverige. Se [villakorg och kantbalksarmering](/produkter/villakorg-kantbalksarmering) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Vilken grund passar ett attefallshus?", a: "Ett uppvärmt attefallshus byggs oftast på isolerad platta på mark med kantbalk. Ett oisolerat förråd kan stå på plintar." },
      { q: "Hur mycket armering går åt till ett attefallshus?", a: "För 30 m² ungefär 33–35 m² nät och cirka 90 m kantjärn med 2 + 2 järn, plus byglar och hörnjärn. Ritningen gäller." },
      { q: "Behövs konstruktionsritning för grunden?", a: "Ja, grunden ska följa en konstruktionsritning, som också ingår i underlaget för anmälan och startbesked." },
      { q: "Kan ni leverera hela armeringen till attefallshuset?", a: "Ja, nät, kantbalksbyglar, kantjärn, hörnjärn och distanser som ett paket efter ritning. Pris och leverans anges i offerten." },
      { q: "Kan jag ha golvvärme i plattan till attefallshuset?", a: "Ja. Slingorna fästs på nätet innan gjutning. Se till att nätet ligger stabilt på distanser." },
    ],
    target: { href: "/produkter/villakorg-kantbalksarmering", label: "Beställ armering till attefallshus" },
    category: "armering-till",
  },

  // 55. Friggebod
  {
    slug: "armering-friggebod",
    title: "Armering till friggebod – enkel platta som håller",
    metaTitle: "Armering friggebod – platta och nät",
    metaDescription:
      "Gjuta platta till friggebod? Så armeras en enkel betongplatta på 15 m²: nättyp, förstärkt kant, täckskikt och hur mycket nät som går åt.",
    excerpt:
      "En friggebod behöver ingen avancerad grund, men en gjuten platta ska ändå armeras. Här är en enkel och beprövad lösning för upp till 15 m².",
    date,
    readingMinutes: 4,
    keywords: [
      "armering friggebod",
      "platta friggebod",
      "gjuta platta friggebod",
      "grund friggebod",
      "friggebod betongplatta",
      "armeringsnät friggebod",
    ],
    content: [
      { type: "p", text: "En friggebod får vara högst 15 m² och kan i regel byggas utan bygglov. Den står ofta på plintar, men vill du ha ett slitstarkt golv i en verkstad eller ett förråd är en gjuten platta bra. En sådan platta armeras enkelt med ett lager [armeringsnät](/produkter/armeringsnat) och förstärkta kanter." },

      { type: "h2", text: "Typisk armering till friggeboden" },
      { type: "table",
        caption: "Exempel för oisolerad platta upp till 15 m² – anpassa efter mark och last.",
        head: ["Del", "Typiskt utförande"],
        rows: [
          ["Plattjocklek", "Ofta 100 mm i fält"],
          ["Nät", "5150 eller 6150, ett lager"],
          ["Kant", "Förtjockad kant med 2 kamjärn Ø10"],
          ["Nätskarv", "Överlapp minst två rutor"],
          ["Täckskikt", "Ofta 30–40 mm, minst 40 mm mot förberedd mark"],
        ],
      },

      { type: "h2", text: "Isolerad eller oisolerad platta?" },
      { type: "p", text: "En friggebod som används som förråd klarar sig med en oisolerad platta på packat bärlager, gärna med markisolering runt om mot tjäle. Ska boden värmas upp som ateljé eller kontor bör plattan isoleras som en liten platta på mark med kantelement – då liknar armeringen den i [armering till attefallshus](/blogg/armering-attefallshus)." },

      { type: "h2", text: "Hur mycket nät går åt?" },
      { type: "p", text: "En platta på 3 × 5 m (15 m²) kräver cirka 17 m² nät med överlapp. Nät 5150 väger cirka 2,05 kg/m² och 6150 cirka 2,96 kg/m². Till kanten behövs två järn runt omkretsen – 16 m gånger två, alltså cirka 32 m plus skarvar. Räkna själv i [armeringskalkylatorn](/armeringskalkylator)." },

      { type: "h2", text: "Platta eller plintar?" },
      { type: "p", text: "Plintar är snabbare och kräver mindre betong, och golvet blir av trä. En gjuten platta ger ett tåligt golv som klarar gräsklippare, verktyg och fukt bättre. Den kräver mer markarbete och ett ordentligt bärlager. Står boden på mark med tjälrisk är markisolering runt plattan ett billigt skydd mot att plattan lyfts och spricker." },
      { type: "h2", text: "Förankring av boden" },
      { type: "p", text: "Väggarna förankras i plattan med ingjutna bultar eller vinkeljärn i syllen. Bestäm infästningen innan du gjuter, så att ingjutningsgodset hamnar rätt och inte krockar med kantjärnen. En syll på ett fuktspärrande underlag skyddar träet mot fukt från betongen." },
      { type: "p", text: "Behöver plattan bära tunga saker, till exempel en vedklyv, en motorcykel eller ett gjutet golv i verkstaden, kan ett grövre nät eller en tjockare platta behövas. Fråga gärna – vi hjälper till att ta fram en enkel materiallista." },
      { type: "h2", text: "Arbetsgång" },
      { type: "ol", items: [
        "Ta bort matjord och lägg ett packat bärlager av makadam.",
        "Bygg form och gräv ur för förtjockad kant.",
        "Lägg kantjärn på distanser i kanten.",
        "Lägg nätet på distanser med överlapp och bind fast mot kantjärnen.",
        "Gjut, vibrera och håll betongen fuktig de första dygnen.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "För en friggebod finns sällan en konstruktionsritning, men på lös eller tjälfarlig mark, eller om plattan ska bära tunga maskiner, bör en konstruktör titta på grunden. Värdena här är typiska exempel." },

      { type: "p", text: "Tänk på hanteringen. Ett standardnät på 2 × 5 m väger cirka 20–30 kg beroende på nättyp och kan bäras av två personer. Till en friggebod räcker ofta två eller tre nät, plus några kantjärn och en påse distanser. Behöver du nät klippta i mindre format för att få in dem på tomten går det att ordna i offerten." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Plattans mått.",
        "Nättyp, till exempel 5150 eller 6150.",
        "Antal kantjärn och dimension.",
        "Distanser – för mark eller cellplast.",
        "Najtråd och eventuella verktyg.",
        "Leveransadress.",
      ] },
      { type: "h2", text: "Beställ nät och kantjärn" },
      { type: "p", text: "Vi levererar armeringsnät, kantjärn och distanser till friggebodar i hela Sverige, med frakt efter mängd och ort. Se [armeringsnät](/produkter/armeringsnat) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Behöver en friggebod en gjuten platta?", a: "Nej, många står på plintar. En gjuten platta är ett bra val om du vill ha ett slitstarkt golv, till exempel i en verkstad." },
      { q: "Vilket nät till platta för friggebod?", a: "Oftast räcker nät 5150 eller 6150 i ett lager, placerat på distanser, med förstärkta kanter." },
      { q: "Hur mycket nät går åt till 15 m²?", a: "Cirka 17 m² inklusive överlapp, plus kantjärn runt omkretsen." },
      { q: "Ska plattan till friggeboden isoleras?", a: "Bara om boden ska värmas upp. Ett oisolerat förråd klarar sig med oisolerad platta och markisolering mot tjäle." },
      { q: "Hur tjock ska plattan till en friggebod vara?", a: "Ofta cirka 100 mm i fält med förtjockad kant. Ska plattan bära tyngre maskiner kan en tjockare platta behövas." },
    ],
    target: { href: "/produkter/armeringsnat", label: "Beställ nät till friggebod" },
    category: "armering-till",
  },

  // 56. Uterum
  {
    slug: "armering-uterum",
    title: "Armering till uterum – grund för varmt och kallt uterum",
    metaTitle: "Armering uterum – grund och platta",
    metaDescription:
      "Hur armeras grunden till ett uterum? Skillnaden mellan kallt och varmt uterum, platta eller plintar, anslutning mot huset och typisk armering.",
    excerpt:
      "Ett uterum står ofta tätt intill huset, och grunden måste fungera ihop med husgrunden. Här är armeringen för kallt och varmt uterum – och vad du ska se upp med.",
    date,
    readingMinutes: 5,
    keywords: [
      "armering uterum",
      "grund uterum",
      "platta uterum",
      "gjuta platta uterum",
      "uterum betongplatta",
      "varmt uterum grund",
    ],
    content: [
      { type: "p", text: "Ett uterum byggs mot ett befintligt hus, ofta på en yta där det tidigare varit altan eller gräsmatta. Grunden ska bära glaspartier och tak, klara tjäle och inte sätta sig annorlunda än huset. Valet mellan kallt och varmt uterum styr hur grunden byggs. Vi levererar [grundarmering](/produkter/grundarmering) till uterum efter ritning." },

      { type: "h2", text: "Kallt eller varmt uterum?" },
      { type: "table",
        caption: "Typiska lösningar – konstruktör eller uterumsleverantör anger utförandet.",
        head: ["Typ", "Grund", "Typisk armering"],
        rows: [
          ["Kallt (oisolerat) uterum", "Platta med markisolering eller plintar", "Nät 5150–6150, kantjärn Ø10"],
          ["Varmt (isolerat) uterum", "Isolerad platta på mark med kantelement", "Nät 6150, kantbalk med kantjärn Ø10–Ø12 och byglar"],
          ["Uterum på befintlig altan", "Plintar eller bärlina", "Plintarmering enligt ritning"],
        ],
      },

      { type: "h2", text: "Varmt uterum = liten husgrund" },
      { type: "p", text: "Ett helårsisolerat uterum med golvvärme räknas i praktiken som en tillbyggnad. Grunden byggs då som en isolerad platta på mark med kantbalk, nät och kantbalksbyglar – samma princip som för en villa, beskriven i [platta på mark – uppbyggnad och armering](/blogg/armering-platta-pa-mark). Glaspartierna ger ofta koncentrerade laster vid hörnstolparna, där kantbalken kan behöva förstärkas." },

      { type: "h2", text: "Anslutningen mot huset" },
      { type: "p", text: "Uterummets platta och husets grund rör sig olika. Ofta görs en rörelsefog mellan dem, men ibland förankras plattan i husgrunden med borrade och ingjutna järn. Vilken lösning som gäller beror på husets grundtyp och ska framgå av ritningen. Fukt och kallras vid anslutningen är vanliga problem om detaljen slarvas." },

      { type: "h2", text: "Exempel: uterum 3 × 5 m" },
      { type: "ul", items: [
        "Yta 15 m² – cirka 17 m² nät med överlapp.",
        "Omkrets mot det fria: 3 + 5 + 3 = 11 m kantbalk, med 2 + 2 kantjärn cirka 44 m järn.",
        "Kantbalksbyglar c/c 250 mm – cirka 45 byglar.",
        "Förstärkning vid hörnstolparna och anslutningsjärn mot husgrunden om ritningen anger det.",
      ] },
      { type: "p", text: "Exemplet gäller ett varmt uterum där husväggen utgör den fjärde sidan. Har uterummet egen grund längs huset tillkommer en kantbalk även där." },
      { type: "h2", text: "Golvbeläggning och höjd" },
      { type: "p", text: "Uterummets golv ska oftast ligga i nivå med husets golv eller något lägre. Höjden på plattan bestäms därför av husets golvnivå minus golvbeläggningens tjocklek. Det påverkar hur högt bärlager och cellplast ska byggas – och därmed kantbalkens höjd och byglarnas mått. Klara ut höjderna innan armeringen beställs." },
      { type: "h2", text: "Arbetsgång" },
      { type: "ol", items: [
        "Ta bort matjord, lägg och packa bärlager.",
        "Lägg cellplast och kantelement om uterummet ska vara varmt.",
        "Montera kantjärn och byglar, förstärk vid hörnstolpar.",
        "Lägg nät på distanser, förlägg golvvärme om sådan ska finnas.",
        "Utför anslutningen mot huset enligt ritning och gjut.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Uterumsleverantören anger ofta laster och grundkrav, men armeringen ska följa en konstruktionsritning. Ett uterum kan kräva bygglov eller anmälan – kontrollera med kommunen innan du gjuter." },

      { type: "p", text: "Varför prefab? Uterum byggs ofta som ett eget projekt vid sidan av vardagen, och tiden på bygget är begränsad. Med byglar, kantjärn och hörnjärn tillverkade efter mått och märkta per position slipper du kapa och bocka på plats. Det blir rätt mått direkt, och armeringen kan läggas på en dag i stället för flera." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Uterummets mått och om det är kallt eller varmt.",
        "Grundritning eller uterumsleverantörens grundkrav.",
        "Kantelement och isolering.",
        "Anslutning mot husgrunden.",
        "Golvvärme ja eller nej.",
        "Leveransort och önskad vecka.",
      ] },
      { type: "h2", text: "Beställ armering till uterummet" },
      { type: "p", text: "Vi tillverkar nät, kantjärn, byglar och hörnjärn i B500B och levererar som ett paket, märkt per position, i hela Sverige. Se [grundarmering](/produkter/grundarmering) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Vilken grund behövs till ett uterum?", a: "Ett kallt uterum kan stå på en oisolerad platta eller plintar. Ett varmt uterum byggs normalt på isolerad platta på mark med kantbalk." },
      { q: "Vilket armeringsnät till platta för uterum?", a: "Ofta 5150 eller 6150 i ett lager, med kantjärn Ø10–Ø12 i kanten. Ritningen anger exakt utförande." },
      { q: "Ska uterumsplattan sitta ihop med husgrunden?", a: "Ibland görs en rörelsefog, ibland förankras plattan med ingjutna järn. Det beror på husets grund och ska framgå av ritningen." },
      { q: "Kan jag ha golvvärme i uterummet?", a: "Ja, i ett isolerat uterum. Golvvärmeslingorna fästs då på armeringsnätet innan gjutning." },
      { q: "Hur mycket armering behövs till ett uterum på 15 m²?", a: "Ungefär 17 m² nät och cirka 44 m kantjärn om tre sidor har kantbalk, plus byglar. Ritningen avgör." },
    ],
    target: { href: "/produkter/grundarmering", label: "Begär offert på uterumsgrund" },
    category: "armering-till",
  },

  // 57. Bastu
  {
    slug: "armering-bastu",
    title: "Armering till bastu – golv och platta",
    metaTitle: "Armering bastu – gjutet golv och platta",
    metaDescription:
      "Så armeras ett gjutet bastugolv eller en platta till fristående bastu: nät, fall mot golvbrunn, extra järn runt brunnen och täckskikt i våt miljö.",
    excerpt:
      "Ett bastugolv är vått, varmt och har golvbrunn. Här är armeringen till gjutet golv och till plattan under en fristående bastu – och vad du ska tänka på kring brunnen.",
    date,
    readingMinutes: 4,
    keywords: [
      "armering bastu",
      "bastugolv betong",
      "gjuta bastugolv",
      "platta bastu",
      "grund bastu",
      "bastu golvbrunn",
    ],
    content: [
      { type: "p", text: "En bastu – inomhus eller som fristående bastustuga – har ofta ett gjutet golv med golvbrunn. Golvet utsätts för vatten, värme och temperaturväxlingar. Rätt armering håller ihop plattan och begränsar sprickor runt brunnen. Till fristående bastur levererar vi armeringen som [grundarmering](/produkter/grundarmering) efter ritning." },

      { type: "h2", text: "Typisk armering till bastu" },
      { type: "table",
        caption: "Exempel – plattjocklek och armering enligt ritning.",
        head: ["Situation", "Typisk armering"],
        rows: [
          ["Pågjutning i bastu inomhus", "Nät 5150 eller nät enligt tillverkarens anvisning"],
          ["Platta till fristående bastu", "Nät 5150–6150 + kantjärn Ø10 i förtjockad kant"],
          ["Isolerad bastustuga", "Platta på mark med kantelement, nät, kantjärn och byglar"],
          ["Runt golvbrunn", "Extra järn runt urtaget, diagonaljärn i hörnen"],
          ["Täckskikt", "Ofta 25–35 mm – ritningen avgör"],
        ],
      },

      { type: "h2", text: "Golvbrunnen – den svaga punkten" },
      { type: "p", text: "Urtaget för golvbrunnen bryter nätet, och sprickor startar gärna i urtagets hörn. Klipp nätet runt brunnen och lägg extra järn längs urtaget och diagonalt i hörnen. Fallet mot brunnen görs i betongen, så nätet måste ligga på distanser som följer fallet – annars hamnar det för grunt eller för djupt på olika ställen." },

      { type: "h2", text: "Fristående bastu" },
      { type: "p", text: "En vedeldad bastustuga vid sjön kan stå på plintar med trägolv, men vill du ha gjutet golv byggs en platta. För en bastu som bara värms vid användning räcker ofta en oisolerad platta med markisolering. En året-runt-uppvärmd bastustuga byggs som en liten platta på mark – se [platta på mark – uppbyggnad och armering](/blogg/armering-platta-pa-mark)." },

      { type: "h2", text: "Värme och temperaturrörelser" },
      { type: "p", text: "Ett bastugolv värms upp och svalnar varje gång bastun används. Temperaturrörelserna ger spänningar i plattan, särskilt där golvet möter väggarna och runt aggregatet. Nätet fördelar dessa spänningar så att sprickor blir fina. Ett vedeldat aggregat ska stå på ett underlag som klarar värmen enligt tillverkarens anvisning – ofta är det inte själva plattan som är problemet utan avståndet till brännbart material." },
      { type: "h2", text: "Bastu inomhus" },
      { type: "p", text: "Byggs bastun i ett befintligt badrum eller källarrum gjuts ofta ett tunt avjämnings- eller fallskikt ovanpå befintligt bjälklag. Det tunna skiktet armeras normalt inte med kamjärn, men vid tjockare pågjutningar kan nät behövas. Fråga golvleverantören eller konstruktören vad som gäller för ditt underlag. Är bastun del av en ny platta på mark armeras den med resten av plattan." },
      { type: "h2", text: "Arbetsgång" },
      { type: "ol", items: [
        "Bestäm brunnens läge och höjd, och förbered avloppet.",
        "Lägg bärlager, eventuell isolering och form.",
        "Lägg kantjärn och nät på distanser som följer fallet.",
        "Klipp nätet runt brunnen och lägg förstärkningsjärn.",
        "Gjut med fall mot brunnen och låt plattan torka innan tätskikt läggs.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Fall, tätskikt och golvbrunn ska följa branschregler för våtrum. Plattans armering och tjocklek bestäms av konstruktören eller bastuleverantören. Värdena här är typiska exempel. Bygger du bastun i ett befintligt hus kan bjälklagets bärförmåga också behöva kontrolleras, eftersom en gjuten pågjutning, aggregat och stenar ger en betydande extra last." },

      { type: "p", text: "Tänk också på hanteringen. Ett bastugolv eller en bastuplatta är ofta liten, och standardnät kan behöva klippas för att få plats. Nät kan levereras klippta efter plattans mått, så att du slipper kapa och får mindre spill. Förstärkningsjärnen runt golvbrunnen kan levereras färdigkapade, och distanser i rätt höjd för fallet ingår om du anger det i förfrågan." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Golvets eller plattans mått.",
        "Golvbrunnens läge.",
        "Isolerad eller oisolerad platta.",
        "Önskad nättyp och kantjärn.",
        "Distanser som följer fallet.",
        "Leveransadress.",
      ] },
      { type: "h2", text: "Beställ armering till bastun" },
      { type: "p", text: "Vi levererar nät, kantjärn, förstärkningsjärn och distanser till bastugolv och bastuplattor i hela Sverige. Se [grundarmering](/produkter/grundarmering) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Behöver ett bastugolv armering?", a: "Ett gjutet bastugolv bör armeras med nät för att begränsa sprickor, särskilt runt golvbrunnen där plattan försvagas." },
      { q: "Hur armerar jag runt golvbrunnen?", a: "Klipp nätet runt urtaget och lägg extra järn längs kanterna och diagonaljärn i hörnen. Det hindrar sprickor från att starta i hörnen." },
      { q: "Vilken grund passar en fristående bastu?", a: "Plintar fungerar med trägolv. Vill du ha gjutet golv byggs en platta – isolerad om bastun ska vara uppvärmd året om." },
      { q: "Vilket nät används i bastugolv?", a: "Ofta 5150 eller 6150. Ritningen eller tillverkarens anvisning gäller." },
      { q: "Klarar betongplattan värmen från bastuaggregatet?", a: "Ja, betong tål bastutemperaturer. Följ aggregattillverkarens anvisning om underlag och avstånd till brännbart material." },
    ],
    target: { href: "/produkter/grundarmering", label: "Begär offert på bastuarmering" },
    category: "armering-till",
  },

  // 58. Platta med golvvärme
  {
    slug: "armering-platta-golvvarme",
    title: "Armering i platta med golvvärme – så samsas nät och slingor",
    metaTitle: "Armering platta med golvvärme – nät & slingor",
    metaDescription:
      "Så armeras en platta på mark med golvvärme: nätet som fästbas, slingornas läge, täckskikt, distanser och vad du ska undvika vid fogar och skarvar.",
    excerpt:
      "I en platta med golvvärme gör armeringsnätet dubbel nytta – det armerar plattan och håller slingorna på plats. Här är hur nät, slingor och distanser ska ligga.",
    date,
    readingMinutes: 5,
    keywords: [
      "platta med golvvärme armering",
      "golvvärme armeringsnät",
      "golvvärme i betongplatta",
      "fästa golvvärme armering",
      "golvvärmeslingor nät",
      "platta på mark golvvärme",
    ],
    content: [
      { type: "p", text: "De flesta nya plattor på mark får vattenburen golvvärme. Slingorna gjuts in i plattan och fästs vanligen direkt på armeringsnätet. Det betyder att nätets höjd och rutstorlek påverkar både bärförmågan och värmen. Vi levererar nät, kantjärn och byglar till golvvärmeplattor som [grundarmering](/produkter/grundarmering) efter ritning." },

      { type: "h2", text: "Typisk uppbyggnad" },
      { type: "table",
        caption: "Exempel för villaplatta med golvvärme – tjocklekar och dimension enligt ritning.",
        head: ["Del", "Typiskt utförande"],
        rows: [
          ["Plattjocklek", "Ofta ca 100 mm i fält"],
          ["Nät", "6150 (Ø6, c/c 150) eller 5150"],
          ["Nätets läge", "På distanser, ofta 25–35 mm över cellplasten"],
          ["Slingor", "PEX-rör, ofta c/c 200–300 mm, fästa på nätet"],
          ["Fästning", "Buntband eller rörclips i nätets korsningar"],
          ["Täckning över slingor", "Tillräcklig betong över rören – enligt golvvärmeleverantör"],
        ],
      },

      { type: "h2", text: "Nätet som fästbas" },
      { type: "p", text: "Med 150 mm rutor blir det lätt att lägga slingor i c/c 150 eller 300 mm – röret följer nätets trådar och fästs i korsningarna. Därför är 150-nät standard i golvvärmeplattor. Nätet måste ligga stabilt på distanser innan rören läggs, eftersom det annars trycks ned mot cellplasten när man går på det." },

      { type: "h2", text: "Vanliga misstag" },
      { type: "ul", items: [
        "Nätet läggs direkt på cellplasten – armeringen får för lite täckskikt och slingorna hamnar för lågt.",
        "För få distanser – nätet trycks ned när man går på det vid montage och gjutning.",
        "Slingor under kantbalkens byglar – rören ska ligga i plattan, inte i kantbalken.",
        "Skarvar på rören i plattan – slingorna ska vara hela från fördelare och tillbaka.",
        "Sågfogar ovanför slingor – fogarnas läge och djup måste planeras ihop med slingdragningen.",
      ] },

      { type: "h2", text: "Distanser – fler än du tror" },
      { type: "p", text: "Nätet bär både sin egen vikt, slingorna och montörerna som går på det. Med för få distanser sjunker nätet mellan stöden. Räkna med distanser i ett tätt rutmönster, ofta med något hundratal millimeter till en meter mellan dem beroende på distanstyp och nät. Fyrkantiga eller linjära distanser för cellplast fördelar trycket och sjunker inte ned i isoleringen." },
      { type: "h2", text: "Fogar och sprickor i golvvärmeplattor" },
      { type: "p", text: "Golvvärme ger temperaturrörelser i plattan. En villaplatta gjuts ofta utan sågfogar och litar på nätet för att begränsa sprickor. Är plattan stor eller har ojämn form kan konstruktören föreskriva fogar. Slingorna ska då passera fogen i skyddsrör, och fogens läge måste vara känt innan slingorna läggs." },
      { type: "p", text: "Nätet bör levereras plant och oskadat så att det går att gå på och fästa rören i. Böjda nät är svåra att få att ligga på rätt höjd – en anledning att låta näten levereras på pall direkt till platsen." },
      { type: "h2", text: "Arbetsgång" },
      { type: "ol", items: [
        "Lägg cellplast och kantelement, montera kantbalksarmeringen.",
        "Lägg distanser och nät med föreskriven överlapp, bind skarvarna.",
        "Lägg ut slingorna enligt golvvärmeritningen och fäst i nätet.",
        "Provtryck systemet och låt trycket stå under gjutningen.",
        "Gjut försiktigt så att nät och slingor inte trampas ned.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Nättyp, täckskikt och plattans tjocklek bestäms av konstruktören. Slingornas avstånd och täckning bestäms av golvvärmeleverantören. Stäm av ritningarna mot varandra innan bygget – det är lättare än att ändra på plats. Mer om nätets höjd i [distanser och täckskikt](/blogg/distanser-tackskikt-armering)." },

      { type: "p", text: "Planera leveransen efter arbetsordningen. Kantbalksarmeringen behövs först, nät och distanser därefter och golvvärmen sist. Kommer allt samtidigt ska det kunna läggas upp så att det inte står i vägen. Märkning per position gör det lätt att plocka rätt delar i rätt ordning." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Grundritning med nät, kantjärn och byglar.",
        "Kantelementets typ.",
        "Golvvärmeritning – påverkar antal distanser.",
        "Eventuella fogar.",
        "Önskat nätformat.",
        "Leveransort och önskad vecka.",
      ] },
      { type: "h2", text: "Beställ armering till golvvärmeplattan" },
      { type: "p", text: "Vi levererar nät, distanser, kantjärn och kantbalksbyglar som ett paket efter ritning, märkt per position, i hela Sverige. Se [grundarmering](/produkter/grundarmering) eller [begär offert](/offert)." },
    ],
    faqs: [
      { q: "Fäster man golvvärme på armeringsnätet?", a: "Ja, vanligen fästs slingorna med buntband eller clips i nätets korsningar. Nätet måste ligga stabilt på distanser innan rören läggs." },
      { q: "Vilket nät passar golvvärme?", a: "150-nät, till exempel 6150, är standard eftersom rutorna passar slingavstånd på 150 eller 300 mm. Konstruktören avgör dimension." },
      { q: "Ska golvvärmen ligga under eller över nätet?", a: "Oftast fästs slingorna ovanpå nätet. Exakt läge och täckning över rören anges av golvvärmeleverantören och konstruktören." },
      { q: "Behöver nätet ligga på distanser när det finns golvvärme?", a: "Ja. Utan distanser trycks nätet ned mot cellplasten, armeringen får för lite täckskikt och slingorna hamnar för lågt." },
      { q: "Hur många distanser behövs under nätet?", a: "Tillräckligt många för att nätet inte ska sjunka när man går på det – ofta i ett tätt rutmönster. Följ distanstillverkarens anvisning." },
    ],
    target: { href: "/produkter/grundarmering", label: "Beställ armering till golvvärmeplatta" },
    category: "armering-till",
  },

  // 59. Industrigolv
  {
    slug: "armering-industrigolv",
    title: "Armering till industrigolv – fogar, dubbla nät och punktlaster",
    metaTitle: "Armering industrigolv – nät, fogar, laster",
    metaDescription:
      "Så armeras industrigolv: fogfritt eller fogat, dubbla nät, armering för truckar och pallställ, sprickbreddskrav och leverans av stora volymer.",
    excerpt:
      "Ett industrigolv dimensioneras för truckar, pallställ och sprickkrav. Här är principerna för armering av fogfria och fogade golv – och vad som skiljer dem.",
    date,
    readingMinutes: 6,
    keywords: [
      "armering industrigolv",
      "industrigolv armering",
      "fogfritt golv armering",
      "industrigolv dubbla nät",
      "golv lagerhall armering",
      "sprickbredd industrigolv",
      "industrigolv betong",
    ],
    content: [
      { type: "p", text: "Ett industrigolv i lager, produktion eller logistik bär truckar, pallställ och maskiner, och ska hålla jämnt och sprickfritt i decennier. Armeringen dimensioneras därför efter laster och sprickkrav, inte efter tumregler. Grunderna för vanliga golv finns i [armering till betonggolv](/blogg/armering-till-betonggolv) – här handlar det om de större golven. Som [armeringsleverantör](/armeringsleverantor) levererar vi nät och kamjärn i projektvolymer efter ritning." },

      { type: "h2", text: "Fogat eller fogfritt golv?" },
      { type: "p", text: "Det första valet är hur golvet ska hantera krympning. Ett fogat golv delas in i fält med sågade fogar, och armeringen kan vara lättare. Ett fogfritt golv gjuts i stora fält utan sågfogar. Då måste armeringen fördela krympningen i många små, fina sprickor i stället för några få stora – vilket kräver mer armering." },
      { type: "table",
        caption: "Principiella skillnader – dimensionering görs av konstruktör.",
        head: ["Golvtyp", "Armering", "Kommentar"],
        rows: [
          ["Fogat golv", "Nät i ett lager, ev. kompletterat med fiber", "Fogarna kräver underhåll, men armeringen blir mindre"],
          ["Fogfritt golv", "Tätare armering, ofta två lager nät eller kamjärn", "Få fogar – sprickbredden styrs av armeringen"],
          ["Golv med tunga punktlaster", "Två lager + extra järn under ställ och pelare", "Lastens storlek och läge styr"],
          ["Golv på pålar", "Dimensioneras som platta på pålar", "Huvudarmering över pålarna"],
        ],
      },

      { type: "h2", text: "Vanliga armeringsdetaljer" },
      { type: "ul", items: [
        "Dubbla nät, till exempel 8150 eller 10150 i över- och underkant (ca 5,27 respektive 8,23 kg/m² per lager).",
        "Kantförstärkning vid portöppningar och fria kanter där truckar kör in.",
        "Extra järn runt pelare, brunnar och håltagningar.",
        "Distanser och nätstöd dimensionerade för att bära överkantsnätet under gjutning.",
        "Fogarmering eller lastöverföring i fogar enligt konstruktörens detaljer.",
      ] },

      { type: "h2", text: "Sprickbredd och toleranser" },
      { type: "p", text: "Kraven på industrigolv gäller ofta både sprickbredd och planhet. Armeringens mängd och läge bestämmer sprickbredden enligt Eurokod 2, och toleranser på armeringens läge följer SS-EN 13670. Svenska Betongföreningen ger rekommendationer för industrigolv. I ett fogfritt golv är det särskilt viktigt att överkantsnätet hålls på rätt höjd – distanserna måste klara gångtrafik och gjutning." },

      { type: "h2", text: "Logistik för stora golv" },
      { type: "p", text: "Ett golv på flera tusen kvadratmeter kräver många ton nät och järn. Leveranserna bör följa gjutordningen, med märkning per etapp och position, så att rätt armering finns på plats till varje gjutning utan att ytan blockeras av material. Specialnät i projekterade format minskar skarvar och spill jämfört med standardnät." },
      { type: "p", text: "Projekt i Norrland och på orter långt från större städer kräver samma planering. Vi levererar i hela Sverige, och frakten räknas efter mängd och ort." },
      { type: "h2", text: "Från ritning till leverans" },
      { type: "ol", items: [
        "Konstruktören dimensionerar golvet efter laster, mark och sprickkrav.",
        "Armeringsritningen omsätts i nätplan och bockningslistor per gjutetapp.",
        "Nät och järn tillverkas och märks per etapp och position.",
        "Leveranserna anpassas till gjutordningen, så att arbetsplatsen inte fylls i onödan.",
        "Montage sker med vår [armeringsmontage](/tjanster/armeringsmontage) eller egen personal.",
      ] },

      { type: "h2", text: "Konstruktören avgör" },
      { type: "p", text: "Ett industrigolv ska alltid dimensioneras av konstruktör. Lasterna från ställ och truckar, undergrundens bärighet, fogsystem och sprickkrav avgör armeringen. Värdena ovan är exempel, inte en dimensionering." },

      { type: "p", text: "Specialnät kan dessutom tillverkas med anpassade trådavstånd och utstickande trådar för skarvning, så att antalet överlapp blir färre och materialet utnyttjas bättre." },
      { type: "h2", text: "Checklista före beställning" },
      { type: "p", text: "Ju mer av detta som finns med i förfrågan, desto snabbare och mer exakt blir offerten." },
      { type: "ul", items: [
        "Armeringsritning och nätplan.",
        "Gjutetapper och tidplan.",
        "Nätformat – standardnät eller specialnät.",
        "Behov av montage.",
        "Lossning – kran, truck eller lossning för hand.",
        "Leveransadress och kontaktperson på plats.",
      ] },
      { type: "h2", text: "Leverantör till ert golvprojekt" },
      { type: "p", text: "Vi levererar armeringsnät, specialnät, kamjärn och klippt och bockad armering i B500B till industrigolv i hela Sverige, märkt per etapp och position. Pris och leveransplan anges i offerten. Läs mer om oss som [armeringsleverantör](/armeringsleverantor) eller [begär offert](/offert) med ritningen bifogad." },
    ],
    faqs: [
      { q: "Hur armeras ett industrigolv?", a: "Oftast med ett eller två lager nät, kompletterat med kamjärn vid portar, pelare och punktlaster. Fogfria golv kräver mer armering än fogade. Konstruktören avgör." },
      { q: "Vad är skillnaden mellan fogat och fogfritt golv?", a: "Ett fogat golv delas in i fält med sågfogar och klarar sig med lättare armering. Ett fogfritt golv har få fogar, och armeringen måste begränsa sprickbredden över hela ytan." },
      { q: "Kan ni leverera stora volymer till industrigolv?", a: "Ja, vi levererar nät och järn efter ritning, märkt per gjutetapp, i hela Sverige. Leveransplan och pris anges i offerten." },
      { q: "Kan stålfiber ersätta armeringsnät i industrigolv?", a: "I vissa golv används fiber helt eller delvis, men det är ett konstruktionsval. Vid höga laster och sprickkrav används normalt nät eller kamjärn." },
      { q: "Kan ni lägga armeringen också?", a: "Ja, montage kan ingå via vår tjänst för armeringsmontage. Omfattning och pris anges i offerten." },
    ],
    target: { href: "/armeringsleverantor", label: "Begär offert på industrigolv" },
    category: "armering-till",
  },
];
