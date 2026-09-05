import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { Section, Container } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { ArmeringsKalkylator } from "@/components/ArmeringsKalkylator";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { Faq } from "@/config/faq";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Armeringskalkylator – räkna åtgång till betongplatta",
  description:
    "Räkna ut hur mycket armering som går åt till din betongplatta. Vår armeringskalkylator ger åtgång av armeringsnät, kantjärn och distanser – och du kan begära offert direkt.",
  alternates: { canonical: "/armeringskalkylator" },
  openGraph: {
    title: `Armeringskalkylator – räkna åtgång | ${site.company}`,
    description:
      "Fyll i plattans mått och få ungefärlig åtgång av armeringsnät, kantjärn och distanser. Begär offert direkt på din beräkning.",
    url: `${site.url}/armeringskalkylator`,
  },
};

const faqs: Faq[] = [
  {
    q: "Hur mycket armering går åt till min betongplatta?",
    a: "Åtgången av armeringsnät motsvarar plattans yta plus cirka 10–15 % för överlapp och spill. Kantjärn beräknas efter plattans omkrets gånger antal järn per kant. Vår armeringskalkylator räknar fram ett riktvärde när du fyller i längd och bredd – exakt mängd ska följa konstruktionsritning.",
  },
  {
    q: "Är värdena från kalkylatorn exakta?",
    a: "Nej, kalkylatorn ger riktvärden för att du snabbt ska få en känsla för åtgången och kunna begära offert. Exakt mängd, dimension och placering ska alltid följa en konstruktionsritning. Vi räknar gärna fram den exakta mängden åt dig.",
  },
  {
    q: "Kan jag beställa armeringen direkt?",
    a: "Ja. När du har fyllt i måtten förifylls beräkningen i offertformuläret. Lägg till telefon eller e-post, bifoga eventuell ritning eller bockningslista, så återkommer vi med pris och leveranstid för hela Sverige.",
  },
  {
    q: "Vilket armeringsnät ska jag välja?",
    a: "Till uterum och mindre plattor används ofta 5×150 (Ø5 mm), till garage- och villaplattor vanligtvis 6×150 (Ø6 mm) och till tyngre laster grövre nät. Läs mer i vår guide om armeringsnät – och låt en konstruktör bekräfta valet.",
  },
];

export default function KalkylatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Armeringskalkylator" }]} />

      <section className="bg-ink text-white">
        <Container className="py-12 sm:py-14">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Armeringskalkylator – räkna åtgång till betongplattan
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Ska du beställa armering men vet inte hur mycket som går åt? Fyll i plattans mått så
            räknar vi ut ungefärlig åtgång av armeringsnät, kantjärn och distanser – och du kan
            begära offert direkt på din beräkning.
          </p>
        </Container>
      </section>

      <Section>
        <ArmeringsKalkylator />
      </Section>

      <Section muted>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink">Så räknar kalkylatorn</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Kalkylatorn använder samma tumregler som våra guider. Armeringsnätet beräknas som
            plattans yta plus cirka 13 % för att skarvar ska överlappa 1,5–2 rutor. Kantjärnen
            beräknas efter plattans omkrets gånger antal järn per kant, med ett påslag för
            skarvöverlapp. Distanser räknas ungefär efter yta så att armeringen hålls på rätt höjd.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Värdena är riktvärden. Exakt mängd, dimension och placering ska alltid följa en
            konstruktionsritning. Vill du ha det exakt räknar vi fram det åt dig utifrån din ritning
            eller bockningslista.
          </p>

          <h3 className="mt-8 text-xl font-bold text-ink">Läs mer</h3>
          <ul className="mt-4 space-y-2 text-lg text-ink-soft">
            <li>
              <Link href="/blogg/armering-atgang-per-m2" className="text-brand underline underline-offset-2 hover:no-underline">
                Hur mycket armering går åt per m²?
              </Link>
            </li>
            <li>
              <Link href="/blogg/armering-till-betongplatta" className="text-brand underline underline-offset-2 hover:no-underline">
                Armering till betongplatta – vilken typ och hur mycket?
              </Link>
            </li>
            <li>
              <Link href="/blogg/armeringsnat-storlekar-och-matt" className="text-brand underline underline-offset-2 hover:no-underline">
                Armeringsnät – storlekar, mått och rätt val
              </Link>
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink">Vanliga frågor</h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </Section>

      <CtaBanner />

      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Armeringskalkylator", url: `${site.url}/armeringskalkylator` },
        ])}
      />
    </>
  );
}
