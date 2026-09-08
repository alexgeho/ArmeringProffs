import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/config/site";
import Link from "next/link";
import { cities } from "@/config/cities";
import { Section, SectionHeading } from "@/components/ui";
import { Breadcrumbs, LeveransSection, CtaBanner } from "@/components/sections";
import { IconCheck } from "@/components/icons";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Leverans av armering i hela Sverige",
  description:
    "Vi tillverkar och levererar prefab armering – klippt & bockad, korgar och nät – i hela Sverige. Frakt och leveranstid anpassas efter mängd och ort. Begär offert.",
  alternates: { canonical: "/leverans" },
  openGraph: {
    title: "Leverans av armering i hela Sverige | Armeringsproffs",
    description: "Prefab armering tillverkad efter ritning och levererad i hela Sverige.",
    url: `${site.url}/leverans`,
  },
};

export default function LeveransPage() {
  const url = `${site.url}/leverans`;
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Leverans" }]} />
      <Section>
        <SectionHeading
          eyebrow="Leverans"
          title="Armering levererad i hela Sverige"
          intro="Oavsett var i landet ditt bygg- eller anläggningsprojekt ligger tillverkar vi armeringen efter din bockningslista eller ritning och levererar den till arbetsplatsen. Ange leveransort och mängd i offertförfrågan så räknar vi fram frakt och leveranstid."
        />
        <figure className="mt-8 overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/leverans-betongplatta.webp"
            alt="Färdig armerad betongplatta på ett byggprojekt i Sverige"
            width={1600}
            height={1240}
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="h-auto w-full object-cover"
          />
        </figure>
        <div className="mt-8">
          <h2 className="text-lg font-bold text-ink">Armering per ort</h2>
          <p className="mt-2 text-ink-soft">Läs mer om leverans av armering till din stad:</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/armering/${c.slug}`}
                className="flex items-center gap-2 rounded-lg border border-line px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <IconCheck className="h-4 w-4 shrink-0 text-brand" /> Armering i {c.name}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Orterna är exempel – vi levererar till hela Sverige, inte bara till städerna ovan.
          </p>
        </div>
      </Section>

      <LeveransSection heading />
      <CtaBanner />

      <JsonLd
        data={serviceSchema({
          name: "Leverans av prefab armering i hela Sverige",
          description: "Tillverkning och leverans av prefabricerad armering till bygg- och anläggningsprojekt i hela Sverige.",
          url,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Leverans", url },
        ])}
      />
    </>
  );
}
