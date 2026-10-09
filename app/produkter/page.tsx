import type { Metadata } from "next";
import Image from "next/image";
import { products } from "@/config/products";
import { site } from "@/config/site";
import { Section, SectionHeading, Card, CheckList } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Produkter – prefab armering",
  description:
    "Prefab armering: klippt & bockad, armeringskorgar, svetsad armering och nät, armeringsjärn i kamstål och distanser. Leverans i hela Sverige.",
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
          as="h1"
          eyebrow="Produkter"
          title="Prefabricerad armering – hela sortimentet"
          intro={`Vi tillverkar och levererar prefab armering i ${site.regionInflected}. Välj en kategori för mer information och begär en offert efter din bockningslista eller ritning.`}
        />
        <figure className="mt-8 overflow-hidden rounded-panel border border-line">
          <Image
            src="/images/produkter-betongplatta.webp"
            alt="Färdig betongplatta armerad med prefab armering"
            width={1600}
            height={1068}
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="h-auto w-full object-cover"
          />
        </figure>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {products.map((p) => (
            <Card
              key={p.slug}
              href={`/produkter/${p.slug}`}
              titleAs="h2"
              title={p.name}
              cta="Läs mer"
              image={{ src: `/images/illustrationer/${p.slug}.webp`, alt: `${p.name} – illustration`, sizes: "(min-width: 1024px) 560px, 100vw" }}
            >
              <p>{p.intro}</p>
              <CheckList size="sm" items={p.includes.slice(0, 4)} className="mt-4 gap-2" />
            </Card>
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
