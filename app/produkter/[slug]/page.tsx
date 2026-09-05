import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, getProduct } from "@/config/products";
import { posts } from "@/config/blog";
import { faq } from "@/config/faq";
import { site } from "@/config/site";
import { Section, SectionHeading, Button, Container } from "@/components/ui";
import { Breadcrumbs, CtaBanner, LeveransSection, Process } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck, IconArrow, IconPhone } from "@/components/icons";
import {
  JsonLd, serviceSchema, faqSchema, breadcrumbSchema,
} from "@/lib/jsonld";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: `/produkter/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${site.url}/produkter/${p.slug}`,
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

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const url = `${site.url}/produkter/${p.slug}`;
  const others = products.filter((x) => x.slug !== p.slug).slice(0, 4);
  const faqs = p.faqs && p.faqs.length > 0 ? p.faqs : faq;
  const guides = relatedGuides(p.keywords, 3);

  return (
    <>
      <Breadcrumbs
        items={[{ name: "Hem", href: "/" }, { name: "Produkter", href: "/produkter" }, { name: p.name }]}
      />

      {/* Hero */}
      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{p.h1}</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">{p.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
              <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 font-semibold text-white hover:bg-white/10">
                <IconPhone className="h-4 w-4 text-brand" /> {site.phone}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink shadow-xl sm:p-8">
            <h2 className="text-lg font-bold">Offert efter din ritning</h2>
            <div className="mt-4">
              <ContactForm compact source={`produkt-${p.slug}`} />
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="prose-body max-w-none">
            {p.image && (
              <figure className="mb-8 overflow-hidden rounded-2xl border border-line">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </figure>
            )}
            {p.body.map((b) => (
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
              <h3 className="font-bold text-ink">Egenskaper</h3>
              <ul className="mt-4 space-y-2.5">
                {p.includes.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-ink-soft">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {it}
                  </li>
                ))}
              </ul>
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

      {/* Other products */}
      <Section muted>
        <SectionHeading eyebrow="Fler produkter" title="Hela armeringspaketet från en leverantör" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/produkter/${o.slug}`} className="rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand">
              <h3 className="font-semibold text-ink">{o.name}</h3>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Läs mer <IconArrow className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <LeveransSection />

      {/* FAQ */}
      <Section muted>
        <SectionHeading center eyebrow="Vanliga frågor" title="Frågor och svar" />
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <CtaBanner />

      {/* Service-schema (inte Product) – vi är offert-/prefabmodell utan fasta priser.
          Product utan pris ger ogiltig Merchant/Product-data i GSC. Se slagplanen. */}
      <JsonLd data={serviceSchema({ name: p.name, description: p.metaDescription, url })} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Produkter", url: `${site.url}/produkter` },
          { name: p.name, url },
        ])}
      />
    </>
  );
}
