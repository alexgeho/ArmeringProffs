import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/config/services";
import { faq } from "@/config/faq";
import { site } from "@/config/site";
import { Section, SectionHeading, Button, Container } from "@/components/ui";
import { Breadcrumbs, CtaBanner, CitiesGrid, Process } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck, IconArrow, IconPhone } from "@/components/icons";
import {
  JsonLd, serviceSchema, faqSchema, breadcrumbSchema,
} from "@/lib/jsonld";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/tjanster/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${site.url}/tjanster/${s.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const url = `${site.url}/tjanster/${s.slug}`;
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <Breadcrumbs
        items={[{ name: "Hem", href: "/" }, { name: "Tjänster", href: "/tjanster" }, { name: s.name }]}
      />

      {/* Hero */}
      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{s.h1}</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">{s.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
              <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 font-semibold text-white hover:bg-white/10">
                <IconPhone className="h-4 w-4 text-brand" /> {site.phone}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink shadow-xl sm:p-8">
            <h2 className="text-lg font-bold">Kostnadsfri offert</h2>
            <div className="mt-4">
              <ContactForm compact source={`tjanst-${s.slug}`} />
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="prose-body max-w-none">
            {s.body.map((b) => (
              <div key={b.heading} className="mb-8">
                <h2 className="text-2xl font-bold text-ink">{b.heading}</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">{b.text}</p>
              </div>
            ))}
          </div>
          <aside>
            <div className="sticky top-24 rounded-xl border border-line bg-surface p-6">
              <h3 className="font-bold text-ink">Detta ingår</h3>
              <ul className="mt-4 space-y-2.5">
                {s.includes.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-ink-soft">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Process />

      {/* Other services */}
      <Section muted>
        <SectionHeading eyebrow="Fler tjänster" title="Vi hjälper dig med hela projektet" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/tjanster/${o.slug}`} className="rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand">
              <h3 className="font-semibold text-ink">{o.name}</h3>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Läs mer <IconArrow className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CitiesGrid heading />

      {/* FAQ */}
      <Section muted>
        <SectionHeading center eyebrow="Vanliga frågor" title="Frågor och svar" />
        <div className="mt-10">
          <FaqAccordion items={faq} />
        </div>
      </Section>

      <CtaBanner />

      <JsonLd data={serviceSchema({ name: s.name, description: s.metaDescription, url })} />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Tjänster", url: `${site.url}/tjanster` },
          { name: s.name, url },
        ])}
      />
    </>
  );
}
