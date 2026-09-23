import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { Section, Container } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { ArmeringsKalkylator } from "@/components/ArmeringsKalkylator";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { Faq } from "@/config/faq";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { DIAMETERS, fmt, kgPerM } from "@/lib/rebar-calc";

export const metadata: Metadata = {
  title: "Armeringskalkylator – räkna armeringsnät, kamjärn och vikt",
  description:
    "Räkna armering till betongplatta: antal nät (2,35×5 m), kamjärn c/c, löpmeter och vikt i kg. Tabell över armeringsjärnens vikt per meter Ø6–Ø32. Begär offert direkt på beräkningen.",
  alternates: { canonical: "/armeringskalkylator" },
  openGraph: {
    title: `Armeringskalkylator – nät, kamjärn och vikt | ${site.company}`,
    description:
      "Fyll i måtten och få antal armeringsnät, kamjärn c/c, löpmeter och vikt. Begär offert direkt på din beräkning.",
    url: `${site.url}/armeringskalkylator`,
  },
};

const faqs: Faq[] = [
  {
    q: "Hur mycket väger armeringsjärn per meter?",
    a: "Vikten per meter räknas som 0,00617 × d² kg, där d är diametern i mm. Ø8 väger ca 0,395 kg/m, Ø10 ca 0,617 kg/m, Ø12 ca 0,888 kg/m och Ø16 ca 1,58 kg/m. Se hela tabellen för Ø6–Ø32 på den här sidan.",
  },
  {
    q: "Hur mycket armering går åt till min betongplatta?",
    a: "Armeringsnät köps i hela ark, i Sverige oftast 2,35 × 5 m. Antalet ark beror på plattans mått och överlappet mellan arken – minst en maskvidd, dock minst 300 mm. Kalkylatorn räknar antal ark, vikt och kantjärn när du fyller i längd och bredd. Med lösa kamjärn räknas antal stänger utifrån diameter och centrumavstånd (c/c). Exakt mängd ska följa konstruktionsritningen.",
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

      <section className="border-b border-line bg-surface">
        <Container className="py-12 sm:py-14">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">Armeringskalkylator</h1>
          <p className="mt-4 max-w-2xl text-xl text-ink-soft">Räkna nät, kamjärn och vikt</p>
        </Container>
      </section>

      <Section>
        <ArmeringsKalkylator />
      </Section>

      <Section muted>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink">Så räknar kalkylatorn</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            <strong className="text-ink">Armeringsnät:</strong> nätet köps i hela ark, 2,35 × 5 m. Kalkylatorn lägger arken
            med det överlapp du anger (standard 300 mm – minst en maskvidd, dock minst 300 mm) och väljer den riktning som
            ger minst antal ark. Vikten räknas på trådarna i båda riktningar. Kantjärn räknas på plattans omkrets gånger
            antal järn, med skarvar på ca 50 × diametern.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            <strong className="text-ink">Kamjärn c/c:</strong> antal stänger = (bredd − 2 × täckskikt) / centrumavstånd + 1, i båda
            riktningar och per lager. Stänger längre än lagerlängden (6 eller 12 m) skarvas med omlottskarv – som tumregel
            ca 50 × Ø om du inte anger något annat. Vikten räknas med 0,00617 × d² kg/m.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Värdena är riktvärden. Dimension, placering, täckskikt och skarvlängder ska alltid följa en
            konstruktionsritning. Vill du ha det exakt räknar vi fram det åt dig utifrån din ritning eller
            bockningslista.
          </p>

          <h2 id="vikt-per-meter" className="mt-12 text-2xl font-bold text-ink">Armeringsjärn – vikt per meter</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Teoretisk vikt för kamstål (B500B) enligt 0,00617 × d² kg/m.
          </p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-line bg-white">
            <table className="w-full text-left text-sm tabular-nums">
              <thead className="bg-surface text-ink">
                <tr>
                  <th className="px-4 py-3 font-semibold">Diameter</th>
                  <th className="px-4 py-3 font-semibold">kg/m</th>
                  <th className="px-4 py-3 font-semibold">kg per 6 m-stång</th>
                  <th className="px-4 py-3 font-semibold">kg per 12 m-stång</th>
                  <th className="px-4 py-3 font-semibold">m per ton</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-ink-soft">
                {DIAMETERS.map((d) => (
                  <tr key={d}>
                    <td className="px-4 py-2.5 font-semibold text-ink">Ø{d} mm</td>
                    <td className="px-4 py-2.5">{fmt(kgPerM(d), 3)}</td>
                    <td className="px-4 py-2.5">{fmt(kgPerM(d) * 6, 2)}</td>
                    <td className="px-4 py-2.5">{fmt(kgPerM(d) * 12, 2)}</td>
                    <td className="px-4 py-2.5">{fmt(1000 / kgPerM(d))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
