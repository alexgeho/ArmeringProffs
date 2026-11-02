import { site } from "@/config/site";
import { faq } from "@/config/faq";
import { ArrowLink, CheckList, MediaSplit, Section, SectionHeading, SplitImage } from "@/components/ui";
import {
  Hero, UspBar, PrefabShowcase, ProductsGrid, Process, LeveransSection, Reviews, CtaBanner, KalkylatorPromo, GuidesTeaser,
} from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/jsonld";

// Startsidan visar ett urval frågor – fulla listan finns på /vanliga-fragor.
const faqTeaser = faq.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <Hero
        title={<>Prefab armering i <span className="text-accent">hela Sverige</span></>}
        intro="Klippt och bockad armering, byglar, armeringskorgar, plint- och brunnsarmering, svetsat nät och kamstål Ø6–Ø32."
        formSource="startsida-hero"
        bgImage="/images/hero-armeringskorgar.webp"
        bgAlt="Prefabricerade armeringskorgar staplade på en byggarbetsplats"
      />

      <PrefabShowcase />
      <UspBar />

      {/* Intro/SEO-text */}
      <Section muted>
        <MediaSplit
          heading={<SectionHeading eyebrow="Armeringsleverantör för hela Sverige" title="Prefab armering efter din ritning" />}
          media={
            <SplitImage
              src="/images/illustrationer/intro-armeringskorg.webp"
              alt="Prefabricerad armeringskorg i kamstål B500B på trästöd, med bockade byglar bredvid"
            />
          }
        >
          <p className="text-lead text-ink-soft">
            {site.company} tillverkar och levererar prefabricerad armering för bygg och anläggning – efter din
            bockningslista, i hela Sverige.
          </p>
          <CheckList
            className="mt-8"
            items={[
              "Klippt och bockad armering",
              "Armeringskorgar och svetsad armering",
              "Armeringsnät, kamstål B500B och distanser",
              "Tillverkning, leverans och montage",
            ]}
          />
        </MediaSplit>
      </Section>

      <ProductsGrid />
      <KalkylatorPromo />
      <Process />
      <LeveransSection />
      <Reviews />
      <GuidesTeaser />

      {/* FAQ */}
      <Section muted>
        <SectionHeading center eyebrow="Vanliga frågor" title="Frågor och svar" />
        <div className="mt-10">
          <FaqAccordion items={faqTeaser} />
        </div>
        <div className="mt-8 text-center">
          <ArrowLink href="/vanliga-fragor" className="text-sm">Se alla vanliga frågor</ArrowLink>
        </div>
        <JsonLd data={faqSchema(faqTeaser)} />
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
