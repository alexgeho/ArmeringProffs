import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/config/services";
import { site } from "@/config/site";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { IconArrow, IconCheck } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Tjänster – armeringsmontage & bockningslista",
  description:
    "Våra tjänster utöver material: armeringsmontage (vi lägger armeringen på plats) och hjälp att ta fram bockningslista från din ritning. Tillverkning, leverans och montage i hela Sverige.",
  alternates: { canonical: "/tjanster" },
  openGraph: {
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
          eyebrow="Tjänster"
          title="Mer än material – vi tar hela armeringsjobbet"
          intro={`Utöver att tillverka och leverera prefab armering hjälper vi dig med själva jobbet: vi lägger armeringen på plats och tar fram bockningslistan från din ritning. Allt i ${site.regionInflected}.`}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.slug} className="flex flex-col rounded-xl border border-line p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink">
                <Link href={`/tjanster/${s.slug}`} className="hover:text-brand">{s.name}</Link>
              </h2>
              <p className="mt-3 text-ink-soft">{s.intro}</p>
              <ul className="mt-4 grid gap-2">
                {s.includes.slice(0, 4).map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-ink-soft">
                    <IconCheck className="h-4 w-4 shrink-0 text-brand" /> {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={`/tjanster/${s.slug}`} variant="outline">
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
          { name: "Tjänster", url: `${site.url}/tjanster` },
        ])}
      />
    </>
  );
}

// ISR: revalidera varje timme så att SEO-/länkändringar (t.ex. footer,
// interna länkar) når produktionscachen – annars serveras sidan som immutable.
export const revalidate = 3600;
