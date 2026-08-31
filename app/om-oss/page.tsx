import type { Metadata } from "next";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";
import { Breadcrumbs, UspBar, Process, CtaBanner, Reviews } from "@/components/sections";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Om oss",
  description: `${site.company} är specialister på gjutning av betongplattor och grundläggning i Stockholm. Läs mer om oss, vårt arbetssätt och våra värderingar.`,
  alternates: { canonical: "/om-oss" },
};

const values = [
  "Fackmässigt utförande enligt gällande normer",
  "Tydlig kommunikation och fast pris",
  "Kvalitetsmaterial anpassade för nordiskt klimat",
  "Garanti och dokumentation på allt arbete",
];

export default function OmOssPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Om oss" }]} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Om oss" title={`${site.company}`} />
          <div className="prose-body mt-6 space-y-4 text-lg">
            <p>
              Vi är ett entreprenadföretag i Stockholm specialiserat på gjutning av betongplattor,
              husgrunder och markarbeten. Vår ambition är enkel: att leverera grunder som håller i
              generationer, med tydlig kommunikation och pris utan överraskningar.
            </p>
            <p>
              Från första platsbesöket till färdig platta tar vi helhetsansvar. Vi arbetar
              fackmässigt enligt gällande konstruktionsritningar och branschregler, och står för
              kvaliteten med garanti på allt vi utför.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-2 text-ink-soft">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {v}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <UspBar />
      <Process />
      <Reviews />
      <CtaBanner />
    </>
  );
}
