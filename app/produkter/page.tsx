import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/config/products";
import { site } from "@/config/site";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { IconArrow, IconCheck } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Produkter – prefab armering",
  description:
    "Vårt sortiment av prefabricerad armering: klippt & bockad armering, armeringskorgar, svetsad armering och armeringsnät, armeringsjärn i kamstål samt distanser. Tillverkning och leverans i hela Sverige.",
  alternates: { canonical: "/produkter" },
  openGraph: {
    title: "Produkter – prefab armering | Armeringsproffs",
    description:
      "Klippt & bockad armering, armeringskorgar, svetsad armering, armeringsjärn och distanser – prefab i hela Sverige.",
    url: `${site.url}/produkter`,
  },
};

export default function ProdukterPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Produkter" }]} />
      <Section>
        <SectionHeading
          eyebrow="Produkter"
          title="Prefabricerad armering – hela sortimentet"
          intro={`Vi tillverkar och levererar prefab armering i ${site.regionInflected}. Välj en kategori för mer information och begär en offert efter din bockningslista eller ritning.`}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {products.map((p) => (
            <div key={p.slug} className="flex flex-col rounded-xl border border-line p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink">
                <Link href={`/produkter/${p.slug}`} className="hover:text-brand">{p.name}</Link>
              </h2>
              <p className="mt-3 text-ink-soft">{p.intro}</p>
              <ul className="mt-4 grid gap-2">
                {p.includes.slice(0, 4).map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-ink-soft">
                    <IconCheck className="h-4 w-4 shrink-0 text-brand" /> {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={`/produkter/${p.slug}`} variant="outline">
                  Läs mer <IconArrow className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Produkter", url: `${site.url}/produkter` },
        ])}
      />
    </>
  );
}
