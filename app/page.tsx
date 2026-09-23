import Link from "next/link";
import { site } from "@/config/site";
import { faq } from "@/config/faq";
import { Section, SectionHeading } from "@/components/ui";
import {
  Hero, UspBar, ProductsGrid, Process, LeveransSection, Reviews, CtaBanner, KalkylatorPromo, GuidesTeaser,
} from "@/components/sections";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconArrow } from "@/components/icons";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/jsonld";

// Startsidan visar ett urval frågor – fulla listan finns på /vanliga-fragor.
const faqTeaser = faq.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <Hero
        title={<>Prefab armering i <span className="text-brand">hela Sverige</span></>}
        intro="Klippt och bockad armering, byglar, armeringskorgar, plint- och brunnsarmering, svetsat nät och kamstål Ø6–Ø32."
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
            <Image
              src="/images/illustrationer/intro-armeringskorg.webp"
              alt="Prefabricerad armeringskorg i kamstål B500B på trästöd, med bockade byglar bredvid"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="h-auto w-full"
            />
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
      <GuidesTeaser />

      {/* FAQ */}
      <Section muted>
        <SectionHeading center eyebrow="Vanliga frågor" title="Frågor och svar" />
        <div className="mt-10">
          <FaqAccordion items={faqTeaser} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/vanliga-fragor"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Se alla vanliga frågor <IconArrow className="h-4 w-4" />
          </Link>
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
