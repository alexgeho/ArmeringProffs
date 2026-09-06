import type { Metadata } from "next";
import { site } from "@/config/site";
import { faq } from "@/config/faq";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Vanliga frågor om prefab armering",
  description:
    "Svar på vanliga frågor om prefabricerad armering – klippt & bockad armering, armeringskorgar, svetsad armering och nät, offert, leverans, kvalitet och montage i hela Sverige.",
  alternates: { canonical: "/vanliga-fragor" },
};

export default function VanligaFragorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Vanliga frågor" }]} />

      <Section>
        <SectionHeading
          eyebrow="Vanliga frågor"
          title="Frågor och svar om prefab armering"
          intro="Här har vi samlat de vanligaste frågorna vi får om prefabricerad armering – från offert och underlag till kvalitet, leverans och montage. Hittar du inte svaret? Hör av dig så hjälper vi dig."
        />
        <div className="mt-10">
          <FaqAccordion items={faq} />
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-4">
          <Button href="/offert">
            Begär offert <IconArrow className="h-4 w-4" />
          </Button>
          <Button href="/armeringskalkylator" variant="outline">
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
