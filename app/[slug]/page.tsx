import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { landings, getLanding } from "@/config/landings";
import { site } from "@/config/site";
import { Section, SectionHeading, Container } from "@/components/ui";
import { Breadcrumbs, CtaBanner, Process, PhotoBg, glassCard } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck, IconArrow, IconPhone } from "@/components/icons";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { renderText } from "@/lib/renderText";
import { foto } from "@/lib/foto";

export const dynamicParams = false;

export function generateStaticParams() {
  return landings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = getLanding(slug);
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    keywords: l.keywords,
    alternates: { canonical: `/${l.slug}` },
    openGraph: { title: l.metaTitle, description: l.metaDescription, url: `${site.url}/${l.slug}` },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = getLanding(slug);
  if (!l) notFound();
  const url = `${site.url}/${l.slug}`;

  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: l.name }]} />

      <section className="relative overflow-hidden bg-ink text-white">
        <PhotoBg src={foto(l.slug) ?? "/images/distanser-armeringsnat.webp"} alt={foto(l.slug) ? l.h1 : "Armeringsnät på distanser inför gjutning"} />
        <Container className="relative grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="min-w-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{l.h1}</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">{l.intro}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {l.includes.slice(0, 4).map((it) => (
                <li key={it} className="flex items-center gap-2 text-slate-200">
                  <IconCheck className="h-5 w-5 shrink-0 text-brand" /> {it}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 font-semibold text-white hover:bg-white/10">
                <IconPhone className="h-4 w-4 text-brand" /> {site.phone}
              </a>
            </div>
          </div>
          <div className={glassCard}>
            <h2 className="text-xl font-bold text-white">Begär offert</h2>
            <div className="mt-4">
              <ContactForm compact onDark source={`sida-${l.slug}`} />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="min-w-0">
            {l.body.map((b) => (
              <div key={b.heading} className="mb-8">
                <h2 className="text-2xl font-bold text-ink">{b.heading}</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">{renderText(b.text)}</p>
              </div>
            ))}
          </div>
          <aside>
            <div className="sticky top-32 rounded-xl border border-line bg-surface p-6">
              <h3 className="font-bold text-ink">Det här ingår</h3>
              <ul className="mt-4 space-y-2.5">
                {l.includes.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-ink-soft">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-5">
                <Link href="/offert" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
                  Begär offert <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Process />

      {l.faqs && l.faqs.length > 0 && (
        <Section muted>
          <SectionHeading center eyebrow="Vanliga frågor" title="Frågor och svar" />
          <div className="mt-10">
            <FaqAccordion items={l.faqs} />
          </div>
          <JsonLd data={faqSchema(l.faqs)} />
        </Section>
      )}

      <CtaBanner />

      <JsonLd data={serviceSchema({ name: l.name, description: l.metaDescription, url })} />
      <JsonLd data={breadcrumbSchema([{ name: "Hem", url: site.url }, { name: l.name, url }])} />
    </>
  );
}
