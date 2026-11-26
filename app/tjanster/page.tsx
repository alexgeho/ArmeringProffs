import type { Metadata } from "next";
import { fitTitle } from "@/lib/title";
import { services } from "@/config/services";
import { site } from "@/config/site";
import { Section, SectionHeading, Card, CheckList } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { OG_IMAGES } from "@/lib/seo";

export const metadata: Metadata = {
  title: fitTitle("Tjänster – armeringsmontage & bockningslista"),
  description:
    "Tjänster utöver materialet: armeringsmontage och hjälp med bockningslista från din ritning. Tillverkning, leverans och montage i hela Sverige.",
  alternates: { canonical: "/tjanster" },
  openGraph: { images: OG_IMAGES,
    title: "Tjänster – armeringsmontage & bockningslista | Armeringsproffs",
    description:
      "Armeringsmontage och hjälp med bockningslista/armeringsritning – hela armeringsjobbet från en leverantör i hela Sverige.",
    url: `${site.url}/tjanster`,
  },
};

export default function TjansterPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Tjänster" }]} />
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Tjänster"
          title="Tjänster – mer än material, vi tar hela armeringsjobbet"
          intro={`Utöver att tillverka och leverera prefab armering hjälper vi dig med själva jobbet: vi lägger armeringen på plats och tar fram bockningslistan från din ritning. Allt i ${site.regionInflected}.`}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <Card
              key={s.slug}
              href={`/tjanster/${s.slug}`}
              titleAs="h2"
              title={s.name}
              cta="Läs mer"
              image={{ src: `/images/illustrationer/${s.slug}.webp`, alt: `${s.name} – illustration`, sizes: "(min-width: 1024px) 560px, 100vw" }}
            >
              <p>{s.intro}</p>
              <CheckList size="sm" items={s.includes.slice(0, 4)} className="mt-4 gap-2" />
            </Card>
          ))}
        </div>
      </Section>
      <CtaBanner />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Tjänster", url: `${site.url}/tjanster` },
        ])}
      />
    </>
  );
}
