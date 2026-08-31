import type { Metadata } from "next";
import { site } from "@/config/site";
import type { Faq } from "@/config/faq";
import { Section, SectionHeading, Button, Container } from "@/components/ui";
import { Breadcrumbs, RotSection, CtaBanner } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck, IconArrow } from "@/components/icons";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Vad kostar det att gjuta en betongplatta? Pris 2026",
  description:
    "Vad kostar det att gjuta en betongplatta? Vi går igenom priset per kvadratmeter, vad som påverkar kostnaden och hur ROT-avdraget sänker priset. Begär fast pris.",
  keywords: [
    "gjuta betongplatta pris",
    "gjuta platta pris",
    "pris gjuta betongplatta",
    "gjuta betongplatta kostnad",
    "kostnad gjuta betongplatta",
    "pris betongplatta",
  ],
  alternates: { canonical: "/priser" },
};

/* Faktorer som påverkar priset */
const factors = [
  { t: "Plattans storlek", d: "Priset räknas ofta per kvadratmeter – större platta ger lägre kvadratmeterpris." },
  { t: "Markförhållanden", d: "Berg, lera eller lös jord påverkar hur mycket schakt och fyllning som krävs." },
  { t: "Isolering", d: "Tjockare cellplast ger ett energieffektivare hus men påverkar materialkostnaden." },
  { t: "Armering & tjocklek", d: "Bärande konstruktioner och tunga laster kräver mer armering och betong." },
  { t: "Golvvärme", d: "Ska golvvärme förberedas tillkommer rör och arbete innan gjutning." },
  { t: "Tillgänglighet", d: "Hur enkelt maskiner och betongbil kommer fram till tomten." },
];

/*
  PRISEXEMPEL – riktpriser att ersätta med företagets egna siffror.
  TODO: uppdatera intervallen med Agry Entreprenads faktiska riktpriser.
*/
const priceExamples = [
  { type: "Mindre platta (t.ex. Attefall, uterum)", size: "15–25 m²", note: "Begär offert" },
  { type: "Garageplatta", size: "20–40 m²", note: "Begär offert" },
  { type: "Villaplatta / platta på mark", size: "80–150 m²", note: "Begär offert" },
  { type: "Större projekt / industrigolv", size: "150+ m²", note: "Begär offert" },
];

const prisFaq: Faq[] = [
  {
    q: "Vad kostar det att gjuta en betongplatta per kvadratmeter?",
    a: "Kvadratmeterpriset varierar med markförhållanden, isolering, armering och om golvvärme ska ingå. Större plattor har oftast ett lägre pris per kvadratmeter. Vi lämnar alltid ett fast pris efter ett kostnadsfritt platsbesök så att du vet exakt vad det kostar.",
  },
  {
    q: "Vad kostar det att gjuta en garageplatta?",
    a: "En garageplatta ska tåla tunga fordon och kräver därför ordentlig armering och bärlager. Priset beror på storlek och underlag – kontakta oss så räknar vi på just din garageplatta.",
  },
  {
    q: "Ingår material i priset?",
    a: "Ja, i vår offert ingår normalt både material och arbete för hela plattan – schakt, isolering, armering och gjutning. Du får en tydlig specifikation utan dolda avgifter.",
  },
  {
    q: "Hur mycket sänker ROT-avdraget priset?",
    a: "Vid arbete på en befintlig fastighet ger ROT-avdraget 30 % rabatt på arbetskostnaden. Vi drar av det direkt på fakturan och sköter ansökan mot Skatteverket.",
  },
];

export default function PriserPage() {
  const url = `${site.url}/priser`;
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Priser" }]} />

      <section className="bg-ink text-white">
        <Container className="py-14">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Vad kostar det att gjuta en betongplatta?
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Priset för att gjuta en betongplatta beror på storlek, markförhållanden och isolering.
            Här förklarar vi vad som påverkar kostnaden – och hur du får ett fast pris utan
            överraskningar.
          </p>
          <div className="mt-8">
            <Button href="/offert">Begär kostnadsfri offert <IconArrow className="h-4 w-4" /></Button>
          </div>
        </Container>
      </section>

      {/* Faktorer */}
      <Section>
        <SectionHeading
          eyebrow="Prispåverkande faktorer"
          title="Det här styr priset"
          intro="Eftersom varje tomt och projekt är unikt sätter vi alltid priset efter ett platsbesök. Dessa faktorer avgör kostnaden:"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((f) => (
            <div key={f.t} className="rounded-xl border border-line p-6">
              <div className="flex items-center gap-2">
                <IconCheck className="h-5 w-5 text-brand" />
                <h3 className="font-semibold text-ink">{f.t}</h3>
              </div>
              <p className="mt-2 text-sm text-ink-soft">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Prisexempel */}
      <Section muted>
        <SectionHeading
          eyebrow="Prisexempel"
          title="Ungefärlig omfattning per projekt"
          intro="Storleken ger en fingervisning – kontakta oss för ett exakt fast pris på just ditt projekt."
        />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line text-sm text-muted">
                <th className="py-3 pr-4 font-medium">Typ av platta</th>
                <th className="py-3 pr-4 font-medium">Vanlig storlek</th>
                <th className="py-3 font-medium">Pris</th>
              </tr>
            </thead>
            <tbody>
              {priceExamples.map((p) => (
                <tr key={p.type} className="border-b border-line">
                  <td className="py-4 pr-4 font-semibold text-ink">{p.type}</td>
                  <td className="py-4 pr-4 text-ink-soft">{p.size}</td>
                  <td className="py-4">
                    <a href="/offert" className="font-semibold text-brand hover:underline">{p.note}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">
          Priser sätts individuellt efter platsbesök. Kontakta oss för ett fast pris utan förpliktelser.
        </p>
      </Section>

      <RotSection />

      {/* FAQ */}
      <Section>
        <SectionHeading center eyebrow="Vanliga frågor om pris" title="Frågor och svar" />
        <div className="mt-10">
          <FaqAccordion items={prisFaq} />
        </div>
      </Section>

      <CtaBanner />

      <JsonLd data={faqSchema(prisFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Priser", url },
        ])}
      />
    </>
  );
}
