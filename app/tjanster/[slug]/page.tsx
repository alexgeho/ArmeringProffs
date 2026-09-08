import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/config/services";
import { posts } from "@/config/blog";
import { site } from "@/config/site";
import { Section, SectionHeading, Container } from "@/components/ui";
import { Breadcrumbs, CtaBanner, Process, CityLinks } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck, IconArrow, IconPhone } from "@/components/icons";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";

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
    keywords: s.keywords,
    alternates: { canonical: `/tjanster/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${site.url}/tjanster/${s.slug}`,
    },
  };
}

/** Väljer relaterade guider (armering-klustret) utifrån gemensamma sökord. */
function relatedGuides(keywords: string[], n = 3) {
  const own = new Set(keywords.flatMap((k) => k.toLowerCase().split(/\s+/)).filter((w) => w.length > 3));
  return posts
    .map((post) => {
      const words = new Set(post.keywords.flatMap((k) => k.toLowerCase().split(/\s+/)));
      let score = 0;
      for (const w of own) if (words.has(w)) score++;
      return { post, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((r) => r.post);
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
  const others = services.filter((x) => x.slug !== s.slug);
  const guides = relatedGuides(s.keywords, 3);

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
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {s.includes.slice(0, 4).map((it) => (
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
          <div className="rounded-2xl bg-white p-6 text-ink shadow-xl sm:p-8">
            <h2 className="text-lg font-bold">Begär offert</h2>
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

            {guides.length > 0 && (
              <div className="mt-4 rounded-xl border border-line bg-surface p-6">
                <h3 className="font-bold text-ink">Guider som hjälper dig vidare</h3>
                <ul className="mt-3 space-y-2">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link href={`/blogg/${g.slug}`} className="inline-flex items-center gap-1 text-brand underline underline-offset-2 hover:no-underline">
                        {g.title} <IconArrow className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside>
            <div className="sticky top-24 rounded-xl border border-line bg-surface p-6">
              <h3 className="font-bold text-ink">Det här ingår</h3>
              <ul className="mt-4 space-y-2.5">
                {s.includes.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-ink-soft">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {it}
                  </li>
                ))}
              </ul>
              {s.resource && (
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-semibold text-ink">Gör-det-själv</p>
                  <a
                    href={s.resource.href}
                    download
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                  >
                    {s.resource.label} <IconArrow className="h-4 w-4" />
                  </a>
                </div>
              )}
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm font-semibold text-ink">Osäker på mängden?</p>
                <p className="mt-1 text-sm text-ink-soft">Räkna ut åtgången i vår kalkylator.</p>
                <Link href="/armeringskalkylator" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
                  Öppna armeringskalkylatorn <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Process />

      {/* Andra tjänster */}
      {others.length > 0 && (
        <Section muted>
          <SectionHeading eyebrow="Fler tjänster" title="Hela armeringsjobbet från en leverantör" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/tjanster/${o.slug}`} className="rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand">
                <h3 className="font-semibold text-ink">{o.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{o.intro.slice(0, 120)}…</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Läs mer <IconArrow className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CityLinks title={`${s.name} – i hela Sverige`} />

      {/* FAQ */}
      {s.faqs && s.faqs.length > 0 && (
        <Section muted>
          <SectionHeading center eyebrow="Vanliga frågor" title="Frågor och svar" />
          <div className="mt-10">
            <FaqAccordion items={s.faqs} />
          </div>
          <JsonLd data={faqSchema(s.faqs)} />
        </Section>
      )}

      <CtaBanner />

      <JsonLd data={serviceSchema({ name: s.name, description: s.metaDescription, url })} />
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

// ISR: revalidera varje timme så att SEO-/länkändringar (t.ex. footer,
// interna länkar) når produktionscachen – annars serveras sidan som immutable.
export const revalidate = 3600;
