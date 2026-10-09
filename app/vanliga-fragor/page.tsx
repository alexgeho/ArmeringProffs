import type { Metadata } from "next";
import { site } from "@/config/site";
import { faq } from "@/config/faq";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Vanliga frågor om prefab armering",
  description:
    "Vanliga frågor om prefab armering – klippt & bockad, armeringskorgar, svetsad armering, offert, leverans, kvalitet och montage.",
  alternates: { canonical: "/vanliga-fragor" },
};

export default function VanligaFragorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Vanliga frågor" }]} />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Vanliga frågor"
          title="Frågor och svar om prefab armering"
          intro="Här har vi samlat de vanligaste frågorna vi får om prefabricerad armering – från offert och underlag till kvalitet, leverans och montage. Hittar du inte svaret? Hör av dig så hjälper vi dig."
        />
        <div className="mt-10">
          <FaqAccordion items={faq} headingLevel={2} />
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-4">
          <Button href="/armeringskalkylator" variant="secondary">
            Öppna armeringskalkylatorn
          </Button>
        </div>
      </Section>

      <CtaBanner />

      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Vanliga frågor", url: `${site.url}/vanliga-fragor` },
        ])}
      />
    </>
  );
}
