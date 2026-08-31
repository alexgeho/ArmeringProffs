import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/config/services";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { IconArrow, IconCheck } from "@/components/icons";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Våra tjänster – gjutning & grundläggning",
  description:
    "Se alla våra tjänster: gjuta betongplatta, husgrund, garageplatta, platta för tillbyggnad, markarbeten och industrigolv i Stockholm. Fast pris och ROT-avdrag.",
  alternates: { canonical: "/tjanster" },
};

export default function TjansterPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Tjänster" }]} />
      <Section>
        <SectionHeading
          eyebrow="Tjänster"
          title="Betong och grund – hela vägen"
          intro={`Vi utför gjutning, grundläggning och markarbeten i ${site.regionInflected}. Välj en tjänst för mer information och begär en kostnadsfri offert.`}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.slug} className="flex flex-col rounded-xl border border-line p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink">
                <Link href={`/tjanster/${s.slug}`} className="hover:text-brand">{s.name}</Link>
              </h2>
              <p className="mt-3 text-ink-soft">{s.intro}</p>
              <ul className="mt-4 grid gap-2">
                {s.includes.slice(0, 4).map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-ink-soft">
                    <IconCheck className="h-4 w-4 shrink-0 text-brand" /> {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={`/tjanster/${s.slug}`} variant="outline">
                  Läs mer <IconArrow className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
