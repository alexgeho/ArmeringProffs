import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { Section, Container } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { ViktKalkylator } from "@/components/SmaKalkylatorer";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { Faq } from "@/config/faq";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

const path = "/viktkalkylator";
const name = "Viktkalkylator armeringsjärn";

export const metadata: Metadata = {
  title: "Viktkalkylator armeringsjärn – räkna kg",
  description:
    "Räkna vikten på armeringsjärn: välj dimension Ø6–Ø32, längd och antal stänger och få löpmeter och total vikt i kg. Beställ kamstål B500B direkt.",
  alternates: { canonical: path },
  openGraph: {
    title: `${name} | ${site.company}`,
    description: "Dimension, längd och antal – få total vikt i kg för kamstål B500B.",
    url: `${site.url}${path}`,
  },
};

const faqs: Faq[] = [
  {
    q: "Hur räknar man ut vikten på armeringsjärn?",
    a: "Vikt per meter = 0,00617 × d² kg, där d är diametern i mm. Multiplicera med stånglängden och antalet stänger. Exempel: 50 st Ø12 à 6 m = 300 m × 0,888 kg/m ≈ 266 kg.",
  },
  {
    q: "Hur mycket väger en 6 m-stång armeringsjärn?",
    a: "Ø8 väger ca 2,4 kg, Ø10 ca 3,7 kg, Ø12 ca 5,3 kg och Ø16 ca 9,5 kg per 6 m-stång. En 12 m-stång väger dubbelt så mycket.",
  },
  {
    q: "Varför skiljer sig verklig vikt från kalkylatorn?",
    a: "Kalkylatorn ger teoretisk vikt. Standarden för armeringsstål tillåter en viss avvikelse i vikt per meter, och ribborna gör att verklig vikt kan skilja något. För frakt och offert räcker den teoretiska vikten.",
  },
];

const link = "text-brand underline underline-offset-2 hover:no-underline";
const prose = "mt-4 text-lg leading-relaxed text-ink-soft";

export default function ViktkalkylatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Armeringskalkylator", href: "/armeringskalkylator" }, { name: "Viktkalkylator" }]} />

      <section className="border-b border-line bg-surface">
        <Container className="py-12 sm:py-14">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">{name}</h1>
        </Container>
      </section>

      <Section>
        <ViktKalkylator />
      </Section>

      <Section muted>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink">Så räknas vikten</h2>
          <p className={prose}>
            Kamstål har teoretisk vikt 0,00617 × d² kg per meter, vilket motsvarar stålets densitet 7 850 kg/m³.
            Ø10 väger 0,617 kg/m, Ø12 0,888 kg/m och Ø16 1,58 kg/m. Kalkylatorn multiplicerar med längd och antal för
            varje rad och summerar. Hela tabellen Ø6–Ø32 finns i{" "}
            <Link href="/armeringskalkylator#vikt-per-meter" className={link}>armeringskalkylatorn</Link>.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">När behöver du vikten?</h2>
          <p className={prose}>
            Armering prissätts och fraktas efter vikt. Vikten styr också lyft, lossning och hur mycket som kan bäras för
            hand på bygget. Har du en bockningslista räknar vi vikten per position åt dig – se{" "}
            <Link href="/tjanster/bockningslista" className={link}>bockningslista</Link>.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-ink">Raka järn eller bockade</h2>
          <p className={prose}>
            Vi levererar <Link href="/produkter/armeringsjarn" className={link}>armeringsjärn i kamstål B500B</Link> i 6
            och 12 m eller kapade till mått, och{" "}
            <Link href="/produkter/klippt-och-bockad" className={link}>klippt och bockad armering</Link> efter din
            ritning, märkt per position. Pris och frakt anges i offerten.
          </p>
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
          { name: "Viktkalkylator", url: `${site.url}${path}` },
        ])}
      />
    </>
  );
}
