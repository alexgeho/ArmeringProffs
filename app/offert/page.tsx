import type { Metadata } from "next";
import { site } from "@/config/site";
import Link from "next/link";
import { Section, Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { IconCheck, IconPhone, IconRuler, IconArrow } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Begär offert på prefab armering",
  description: `Begär offert på prefab armering – klippt & bockad, korgar och nät. Ladda upp din bockningslista eller ritning så återkommer ${site.company} snabbt med pris och leveranstid för hela Sverige.`,
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
      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Begär offert på prefab armering</h1>
            <p className="mt-5 text-lg text-slate-300">
              Ladda upp din bockningslista eller ritning och ange mängd och leveransort, så återkommer
              vi snabbt med pris och leveranstid. Vi tillverkar och levererar i hela Sverige – och kan
              även sköta montaget.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-slate-200">
                  <IconCheck className="h-5 w-5 text-brand" /> {p}
                </li>
              ))}
            </ul>
            <a href={site.phoneHref} className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 font-semibold text-white hover:bg-white/10">
              <IconPhone className="h-4 w-4 text-brand" /> Ring oss: {site.phone}
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink shadow-xl sm:p-8">
            <h2 className="text-xl font-bold">Fyll i dina uppgifter</h2>
            <div className="mt-5">
              <ContactForm source="offertsida" />
            </div>
          </div>
        </Container>
      </section>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-light text-brand">
              <IconRuler className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-ink">Osäker på mängden?</h2>
            <p className="mt-2 flex-1 text-ink-soft">
              Räkna ut ungefärlig åtgång av armeringsnät, kantjärn och distanser i vår
              armeringskalkylator – du kan begära offert direkt på beräkningen.
            </p>
            <div className="mt-5">
              <Link href="/armeringskalkylator" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
                Öppna armeringskalkylatorn <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-light text-brand">
              <IconCheck className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-ink">Ingen bockningslista?</h2>
            <p className="mt-2 flex-1 text-ink-soft">
              Ladda ner vår mall för bockningslista, fyll i dina positioner och bifoga den i
              förfrågan – så räknar vi på den. Saknar du underlag hjälper vi dig fram.
            </p>
            <div className="mt-5">
              <a
                href="/bockningslista-mall.csv"
                download
                className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
              >
                Ladda ner bockningslista-mall (CSV) <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-ink-soft">
          Vi behandlar dina uppgifter enligt vår{" "}
          <a href="/integritetspolicy" className="text-brand underline">integritetspolicy</a> och delar dem aldrig med tredje part.
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
