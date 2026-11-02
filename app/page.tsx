import type { Metadata } from "next";
import { site } from "@/config/site";
import { faq } from "@/config/faq";
import { ArrowLink, CheckList, MediaSplit, Section, SectionHeading, SplitImage } from "@/components/ui";
import {
  Hero, UspBar, PrefabShowcase, ProductsGrid, Process, LeveransSection, Reviews, CtaBanner, KalkylatorPromo, GuidesTeaser,
} from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/jsonld";
import { renderText } from "@/lib/renderText";

export const metadata: Metadata = {
  title: { absolute: "Armering – prefab, klippt & bockad i hela Sverige" },
  description:
    "Armering efter ritning: klippt och bockad, armeringsnät, armeringsjärn B500B och korgar – märkt per position, levererat i hela Sverige. Begär offert.",
  alternates: { canonical: "/" },
};

// Huvudsortimentet i löptext – kommersiell text med länkar till produktsidorna.
const sortiment = [
  {
    h: "Klippt och bockad armering",
    t: "Skicka bockningslistan så kapar och bockar vi kamstålet i B500B, Ø6–Ø32, och märker varje bunt per position. Byglar, kantbalksbyglar, kramlor och specialformer kommer klara att lägga i formen – så kallad ILF-armering. [Beställ klippt och bockad armering](/produkter/klippt-och-bockad).",
  },
  {
    h: "Armeringsnät",
    t: "Lagernät 5150, 6150, 7150 och 8150 eller nät kapade till plattans mått. Vi räknar antal nät med överlapp och skickar distanser och kantjärn i samma leverans. [Se armeringsnät](/produkter/armeringsnat) – eller [armeringsmatta](/armeringsmatta) till uteplats och trädgård.",
  },
  {
    h: "Armeringsjärn och kamstål",
    t: "Raka armeringsjärn i 6 och 12 m, Ø6–Ø32 mm, eller kapade till mått. Kamstål B500B enligt SS-EN 10080 och SS 212540 – vikt per meter räknar du i [viktkalkylatorn](/viktkalkylator). [Köp armeringsjärn](/produkter/armeringsjarn).",
  },
  {
    h: "Armeringskorgar och prefab",
    t: "Balk-, pelar-, plint- och pålkorgar byggs färdiga efter ritningen och lyfts på plats. Hela utbudet – från en bygel till kompletta korgar – finns under [prefab armering](/prefab-armering) och [armeringskorgar](/produkter/armeringskorgar).",
  },
  {
    h: "Grundarmering till platta på mark",
    t: "Nät, kantbalksarmering, distanser och najtråd till villa, garage eller attefallshus i ett paket och en leverans. Skicka plattans mått eller ritningen, så räknar vi mängderna. [Grundarmering som paket](/produkter/grundarmering).",
  },
  {
    h: "Armeringsspecifikation från ritning",
    t: "Har du bara konstruktionsritningen tar vi fram [armeringsspecifikationen](/tjanster/armeringsspecifikation) och bockningslistan, som du godkänner innan något tillverkas. Har du måtten själv kan du bygga listan i vårt [verktyg för typformer A–XX](/tjanster/bockningslista).",
  },
];

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

      {/* Huvudsortimentet i text (SEO) */}
      <Section>
        <SectionHeading eyebrow="Armering efter ritning" title="Armering till hela bygget – från en leverantör" />
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {sortiment.map((b) => (
            <div key={b.h} className="prose-body">
              <h3>{b.h}</h3>
              <p>{renderText(b.t)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <MediaSplit
          heading={<SectionHeading eyebrow="För företag" title="Armeringsleverantör till entreprenörer och prefabindustri" />}
          media={
            <SplitImage
              src="/images/foto/startsida-verkstad.webp"
              alt="Armeringsverkstad med raka armeringsjärn i ställ och färdiga armeringskorgar"
            />
          }
        >
          <p className="text-lead text-ink-soft">
            Offert på hela projektets armering eller per etapp – efter ritning, spec eller förfrågningsunderlag.
          </p>
          <CheckList
            className="mt-8"
            items={[
              "Spec från ritning (PDF, DWG, IFC)",
              "Märkning per position och element",
              "Leveransplan efter er tidplan",
              "Materialcertifikat 3.1 och EPD",
            ]}
          />
          <ArrowLink href="/armeringsleverantor" className="mt-8">Armeringsleverantör för företag</ArrowLink>
        </MediaSplit>
      </Section>
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
