import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCity } from "@/config/cities";
import { services } from "@/config/services";
import { faq } from "@/config/faq";
import { site } from "@/config/site";
import { Section, SectionHeading, Button, Container } from "@/components/ui";
import { Breadcrumbs, Process, CtaBanner } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck, IconArrow, IconPhone } from "@/components/icons";
import {
  JsonLd, serviceSchema, faqSchema, breadcrumbSchema,
} from "@/lib/jsonld";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) return {};
  const title = `Gjuta betongplatta ${c.inLocative} | ${site.brand}`;
  const description = `Vi gjuter betongplattor, husgrunder och garageplattor ${c.inLocative}. Fast pris, ROT-avdrag och garanti. Begär en kostnadsfri offert av ${site.company}.`;
  return {
    title,
    description,
    alternates: { canonical: `/omraden/${c.slug}` },
    openGraph: { title, description, url: `${site.url}/omraden/${c.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) notFound();

  const url = `${site.url}/omraden/${c.slug}`;

  return (
    <>
      <Breadcrumbs
        items={[{ name: "Hem", href: "/" }, { name: "Områden", href: "/omraden" }, { name: c.name }]}
      />

      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Gjuta betongplatta {c.inLocative}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              {site.company} gjuter betongplattor, husgrunder och garageplattor {c.inLocative}. Vi
              tar helhetsansvar från schakt till färdig platta – med fast pris, ROT-avdrag och
              garanti.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
              <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 font-semibold text-white hover:bg-white/10">
                <IconPhone className="h-4 w-4 text-brand" /> {site.phone}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink shadow-xl sm:p-8">
            <h2 className="text-lg font-bold">Offert {c.inLocative}</h2>
            <div className="mt-4">
              <ContactForm compact source={`omrade-${c.slug}`} />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink">Betonggjutning och grundläggning {c.inLocative}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Ska du gjuta en platta {c.inLocative}? Vi hjälper både privatpersoner och företag med
            allt från platta på mark och husgrund till garageplattor och markarbeten. Marken och
            förutsättningarna varierar – därför inleder vi alltid med ett kostnadsfritt platsbesök
            och lämnar ett tydligt fast pris.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Vi bygger upp plattan i rätt ordning med dränering, isolering och armering så att du får
            en fuktsäker och energieffektiv grund som håller i generationer. Allt arbete omfattas av
            garanti.
          </p>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Tjänster" title={`Vad vi gör ${c.inLocative}`} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/tjanster/${s.slug}`} className="flex items-start gap-3 rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand">
              <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <h3 className="font-semibold text-ink">{s.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{s.intro.slice(0, 80)}…</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Process />

      <Section muted>
        <SectionHeading center eyebrow="Vanliga frågor" title={`Frågor om gjutning ${c.inLocative}`} />
        <div className="mt-10">
          <FaqAccordion items={faq} />
        </div>
      </Section>

      <CtaBanner />

      <JsonLd
        data={serviceSchema({
          name: `Gjuta betongplatta ${c.inLocative}`,
          description: `Gjutning av betongplattor och husgrunder ${c.inLocative}.`,
          url,
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Områden", url: `${site.url}/omraden` },
          { name: c.name, url },
        ])}
      />
    </>
  );
}
