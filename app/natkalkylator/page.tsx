import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { Section, PageHeader, inlineLink } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { NatKalkylator } from "@/components/SmaKalkylatorer";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { Faq } from "@/config/faq";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

const path = "/natkalkylator";
const name = "Nätkalkylator";

export const metadata: Metadata = {
  title: "Nätkalkylator – antal armeringsnät och överlapp",
  description:
    "Räkna hur många armeringsnät plattan behöver: fyll i längd och bredd, välj nät 5150–10150 och överlapp – få antal ark 2,35 × 5 m och vikt i kg.",
  alternates: { canonical: path },
  openGraph: {
    title: `Nätkalkylator – antal armeringsnät | ${site.company}`,
    description: "Längd, bredd, nättyp och överlapp – få antal ark och vikt.",
    url: `${site.url}${path}`,
  },
};

const faqs: Faq[] = [
  {
    q: "Hur många armeringsnät behöver jag?",
    a: "Det beror på plattans mått och överlappet. Varje nytt ark täcker arkets mått minus överlappet. En platta på 8 × 10 m med nät 2,35 × 5 m och 300 mm överlapp kräver ca 10 ark i ett lager.",
  },
  {
    q: "Hur stort överlapp ska armeringsnät ha?",
    a: "Som tumregel minst två rutor, ca 300 mm för 150-nät. Konstruktionsritningen anger vad som gäller för din platta.",
  },
  {
    q: "Vilka mått har ett armeringsnät?",
    a: "Standardarket i Sverige är 2,35 × 5 m. Vi tillverkar även nät med andra yttermått och maskvidder.",
  },
];

const link = inlineLink;

export default function NatkalkylatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Armeringskalkylator", href: "/armeringskalkylator" }, { name: "Nätkalkylator" }]} />

      <PageHeader title={name} />

      <Section>
        <NatKalkylator />
      </Section>

      <Section muted narrow>
        <div className="prose-body">
          <h2>Så räknar nätkalkylatorn</h2>
          <p>
            Näten läggs i hela ark, 2,35 × 5 m. Första arket täcker hela sitt mått, varje nytt ark arkets mått minus
            överlappet. Kalkylatorn prövar båda riktningarna och väljer den som ger minst antal ark. Vikten räknas på
            trådarna i båda riktningar. Samma beräkning används i{" "}
            <Link href="/armeringskalkylator" className={link}>armeringskalkylatorn</Link>, där du även får kantjärn och
            distanser.
          </p>

          <h2>Överlapp och nättyp</h2>
          <p>
            Överlappet är vanligen minst två rutor, ca 300 mm för 150-nät – läs mer om{" "}
            <Link href="/blogg/skarvlangd-armering" className={link}>skarvlängd och överlapp</Link>. 5150 används ofta
            till uterum och mindre plattor, 6150 till villa- och garageplattor och grövre nät till tyngre laster.
            Konstruktören avgör.
          </p>

          <h2>Beställ nät</h2>
          <p>
            Vi levererar <Link href="/produkter/armeringsnat" className={link}>armeringsnät</Link> i standardformat och
            specialnät efter mått, med kantjärn och distanser i samma leverans i hela Sverige. Pris och frakt anges i
            offerten.
          </p>
        </div>
      </Section>

      <Section narrow>
        <h2 className="type-h2 text-ink">Vanliga frågor</h2>
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <CtaBanner />

      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Armeringskalkylator", url: `${site.url}/armeringskalkylator` },
          { name: name, url: `${site.url}${path}` },
        ])}
      />
    </>
  );
}
