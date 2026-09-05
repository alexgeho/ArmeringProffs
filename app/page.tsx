import { site } from "@/config/site";
import { faq } from "@/config/faq";
import { Section, SectionHeading } from "@/components/ui";
import {
  Hero, UspBar, ProductsGrid, Process, LeveransSection, Reviews, CtaBanner, KalkylatorPromo,
} from "@/components/sections";
import { RebarCageIllustration } from "@/components/illustrations";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <Hero
        title={<>Prefab armering i <span className="text-brand">hela Sverige</span></>}
        intro="Vi tillverkar prefabricerad armering – klippt & bockad, armeringskorgar, svetsad armering och nät – efter din bockningslista eller ritning. Full cykel: tillverkning, leverans och montage i hela landet."
        formSource="startsida-hero"
        bgImage="/images/hero-armeringskorgar.webp"
        bgAlt="Prefabricerade armeringskorgar staplade på en byggarbetsplats"
      />

      <UspBar />

      {/* Intro/SEO-text */}
      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Armeringsleverantör för hela Sverige"
              title="Prefab armering efter din ritning"
              intro={`${site.company} tillverkar och levererar prefabricerad armering för bygg och anläggning – klippt och bockad armering, armeringskorgar, svetsad armering och armeringsnät, kamstål B500B och distanser. Vi tar hela cykeln: tillverkning efter bockningslista, leverans i hela Sverige och montage på plats. Skicka din ritning så får du en offert.`}
            />
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
            <RebarCageIllustration className="h-auto w-full" />
            <p className="mt-4 text-center text-sm text-muted">
              Armeringskorg – svetsad prefab efter dina mått
            </p>
          </div>
        </div>
      </Section>

      <ProductsGrid />
      <KalkylatorPromo />
      <Process />
      <LeveransSection />
      <Reviews />

      {/* FAQ */}
      <Section muted>
        <SectionHeading center eyebrow="Vanliga frågor" title="Frågor och svar" />
        <div className="mt-10">
          <FaqAccordion items={faq} />
        </div>
        <JsonLd data={faqSchema(faq)} />
      </Section>

      <CtaBanner />

      <JsonLd
        data={serviceSchema({
          name: "Prefab armering – tillverkning, leverans och montage",
          description:
            "Tillverkning av prefabricerad armering (klippt & bockad, armeringskorgar, svetsad armering och nät) efter bockningslista, med leverans och montage i hela Sverige.",
          url: site.url,
        })}
      />
    </>
  );
}
