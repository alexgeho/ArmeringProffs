import type { Metadata } from "next";
import { site } from "@/config/site";
import { CheckList, MediaSplit, Section, SectionHeading, SplitImage } from "@/components/ui";
import { Breadcrumbs, UspBar, Process, CtaBanner, Reviews } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Om oss",
  description: `${site.company} är specialister på prefab armering – klippt & bockad, korgar och svetsad armering – med tillverkning, leverans och montage i hela Sverige.`,
  alternates: { canonical: "/om-oss" },
  openGraph: {
    title: `Om oss | ${site.company}`,
    description: "Specialister på prefab armering med tillverkning, leverans och montage i hela Sverige.",
    url: `${site.url}/om-oss`,
  },
};

const values = [
  "Tillverkning enligt bockningslista och konstruktionsritning",
  "Kamstål B500B och nät enligt gällande normer",
  "Tydlig märkning, sortering och leverans i tid",
  "Full cykel: tillverkning, leverans och montage",
];

export default function OmOssPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Om oss" }]} />
      <Section>
        <MediaSplit
          heading={<SectionHeading as="h1" eyebrow="Om oss" title={`Om ${site.company} – prefab armering i hela Sverige`} />}
          media={
            <SplitImage
              src="/images/om-oss-armeringsverkstad.webp"
              alt="Armeringsverkstad med prefabricerade armeringskorgar, kamstål och skyddshjälm"
            />
          }
        >
          <p className="text-lead text-ink-soft">
            Vi tillverkar klippt och bockad armering, armeringskorgar, svetsad armering och nät efter din
            bockningslista eller ritning – och levererar i hela Sverige.
          </p>
          <CheckList items={values} className="mt-8" />
        </MediaSplit>
      </Section>
      <UspBar />
      <Process />
      <Reviews />
      <CtaBanner />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Om oss", url: `${site.url}/om-oss/` },
        ])}
      />
    </>
  );
}
