import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/config/site";
import { Section, Button, ArrowLink, Panel } from "@/components/ui";
import { Breadcrumbs, PhotoHero } from "@/components/sections";
import { IconCheck, IconPhone, IconRuler } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Begär offert på prefab armering",
  description: "Begär offert på prefab armering – klippt & bockad, korgar och nät. Ladda upp bockningslista eller ritning så får du pris och leveranstid.",
  alternates: { canonical: "/offert" },
  openGraph: {
    title: `Begär offert på prefab armering | ${site.company}`,
    description: "Ladda upp din bockningslista eller ritning så får du pris och leveranstid för hela Sverige.",
    url: `${site.url}/offert`,
  },
};

const points = [
  "Kostnadsfritt och utan förpliktelser",
  "Ladda upp bockningslista eller ritning",
  "Tillverkning, leverans & montage",
  "Snabbt svar med pris och leveranstid",
];

export default function OffertPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Begär offert" }]} />
      <PhotoHero
        title="Begär offert på prefab armering"
        intro="Ladda upp din bockningslista eller ritning och ange mängd och leveransort, så återkommer vi snabbt med pris och leveranstid. Vi tillverkar och levererar i hela Sverige – och kan även sköta montaget."
        points={points}
        bgImage="/images/om-oss-armeringsverkstad.webp"
        bgAlt="Armeringsverkstad med prefabricerade armeringskorgar"
        formTitle="Fyll i dina uppgifter"
        formSource="offertsida"
        fullForm
        cols="lg:grid-cols-[0.9fr_1.1fr]"
        actions={
          <Button href={site.phoneHref} variant="onDark">
            <IconPhone className="h-4 w-4 text-accent" /> Ring oss: {site.phone}
          </Button>
        }
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Panel className="flex flex-col">
            <span className="flex h-11 w-11 items-center justify-center rounded-control bg-brand-light text-brand">
              <IconRuler className="h-6 w-6" />
            </span>
            <h2 className="type-h4 mt-4 text-ink">Osäker på mängden?</h2>
            <p className="mt-2 flex-1 text-ink-soft">
              Räkna ut ungefärlig åtgång av armeringsnät, kantjärn och distanser i vår
              armeringskalkylator – du kan begära offert direkt på beräkningen.
            </p>
            <div className="mt-5">
              <ArrowLink href="/armeringskalkylator">Öppna armeringskalkylatorn</ArrowLink>
            </div>
          </Panel>

          <Panel className="flex flex-col">
            <span className="flex h-11 w-11 items-center justify-center rounded-control bg-brand-light text-brand">
              <IconCheck className="h-6 w-6" />
            </span>
            <h2 className="type-h4 mt-4 text-ink">Ingen bockningslista?</h2>
            <p className="mt-2 flex-1 text-ink-soft">
              Ladda ner vår mall för bockningslista, fyll i dina positioner och bifoga den i
              förfrågan – så räknar vi på den. Saknar du underlag hjälper vi dig fram.
            </p>
            <div className="mt-5">
              <ArrowLink href="/bockningslista-mall.csv" download>Ladda ner bockningslista-mall (CSV)</ArrowLink>
            </div>
          </Panel>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-ink-soft">
          Vi behandlar dina uppgifter enligt vår{" "}
          <Link href="/integritetspolicy" className="text-brand underline underline-offset-2 hover:text-brand-dark">integritetspolicy</Link> och delar dem aldrig med tredje part.
        </p>
      </Section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Begär offert", url: `${site.url}/offert` },
        ])}
      />
    </>
  );
}
