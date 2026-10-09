import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { Section, PageHeader, inlineLink } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { ForankringsKalkylator } from "@/components/SmaKalkylatorer";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { Faq } from "@/config/faq";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

const path = "/forankringslangd";
const name = "Förankringslängd armering";

export const metadata: Metadata = {
  title: "Förankringslängd armering – kalkylator (Eurokod 2)",
  description:
    "Räkna riktvärde för förankringslängd lb,rqd enligt Eurokod 2: välj diameter, betongklass och vidhäftning. För kamstål B500B – konstruktören avgör.",
  alternates: { canonical: path },
  openGraph: {
    title: `Förankringslängd – kalkylator | ${site.company}`,
    description: "Diameter, betongklass och vidhäftning – få riktvärde för förankringslängd enligt Eurokod 2.",
    url: `${site.url}${path}`,
  },
};

const faqs: Faq[] = [
  {
    q: "Hur lång förankringslängd behöver armeringen?",
    a: "Grundvärdet lb,rqd för dragen B500B i C30/37 med goda vidhäftningsförhållanden är ca 36 × Ø, till exempel ca 440 mm för Ø12. I C25/30 blir det ca 40 × Ø. Konstruktören bestämmer slutlig längd.",
  },
  {
    q: "Vad betyder goda vidhäftningsförhållanden?",
    a: "Enligt Eurokod 2 har stänger nära botten av gjutningen och stänger i tunna konstruktioner (upp till 250 mm) goda förhållanden. Stänger högt upp i höga gjutningar räknas som andra förhållanden, och förankringslängden ökar då med ca 43 %.",
  },
  {
    q: "Är förankringslängd samma sak som skarvlängd?",
    a: "Nej. Skarvlängden l0 utgår från förankringslängden och multipliceras med en faktor 1,0–1,5 beroende på hur stor andel av stängerna som skarvas i samma snitt.",
  },
];

const link = inlineLink;

export default function ForankringslangdPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Armeringskalkylator", href: "/armeringskalkylator" }, { name: "Förankringslängd" }]} />

      <PageHeader title={name} />

      <Section>
        <ForankringsKalkylator />
      </Section>

      <Section muted narrow>
        <div className="prose-body">
          <h2>Formeln i Eurokod 2</h2>
          <p>
            Enligt SS-EN 1992-1-1, avsnitt 8.4, är grundvärdet lb,rqd = (Ø/4) × (σsd/fbd). Kalkylatorn räknar med full
            spänning σsd = fyd = 500/1,15 ≈ 435 MPa. Vidhäftningshållfastheten fbd = 2,25 × η1 × η2 × fctd, där
            fctd = fctk,0,05/1,5. η1 är 1,0 vid goda och 0,7 vid andra vidhäftningsförhållanden, η2 är 1,0 upp till Ø32.
          </p>

          <h2>Från riktvärde till ritning</h2>
          <p>
            Dimensionerande förankringslängd lbd får minskas eller ökas med faktorerna α1–α5 för krokar, täckskikt och
            tvärarmering, men aldrig under lb,min = max(0,3·lb,rqd; 10Ø; 100 mm). Skarvlängden l0 = α6 × lbd, där α6 är
            1,0–1,5. Läs mer om <Link href="/blogg/skarvlangd-armering" className={link}>skarvlängd</Link>. Konstruktören
            avgör alltid slutliga längder.
          </p>

          <h2>Färdigt bockad efter ritning</h2>
          <p>
            Förankringar, krokar och byglar tillverkar vi som{" "}
            <Link href="/produkter/klippt-och-bockad" className={link}>klippt och bockad armering</Link> efter din
            bockningslista eller ritning, märkt och sorterad per position. Pris och frakt anges i offerten.
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
          { name: "Förankringslängd", url: `${site.url}${path}` },
        ])}
      />
    </>
  );
}
