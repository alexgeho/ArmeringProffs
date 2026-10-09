import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost, type Block, type Post } from "@/config/blog";
import { site } from "@/config/site";
import { Section, Container, Button, ArrowLink, Card, Panel, DataTable } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconClock, IconArrow, IconCheck } from "@/components/icons";
import { figures } from "@/components/illustrations";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { renderText } from "@/lib/renderText";
import { foto } from "@/lib/foto";
import Image from "next/image";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/blogg/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${site.url}/blogg/${p.slug}`,
      publishedTime: p.date,
      modifiedTime: p.updated ?? p.date,
    },
  };
}

function renderBlock(b: Block, i: number) {
  if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
  if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
  if (b.type === "ul")
    return (
      <ul key={i} className="grid gap-2">
        {b.items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-accent" /> <span>{renderText(it)}</span>
          </li>
        ))}
      </ul>
    );
  if (b.type === "ol")
    return (
      <ol key={i} className="grid list-decimal gap-2 pl-5 marker:text-muted">
        {b.items.map((it) => (
          <li key={it} className="pl-1">{renderText(it)}</li>
        ))}
      </ol>
    );
  if (b.type === "table")
    return (
      <DataTable
        key={i}
        className="!mt-6"
        head={b.head}
        rows={b.rows}
        caption={b.caption ? renderText(b.caption) : undefined}
      />
    );
  if (b.type === "figure") {
    const Illustration = figures[b.illustration];
    return (
      <figure key={i} className="!mt-8">
        {/* Ritningarna har fasta färger → ligger på ljust "papper" även i mörkt läge. */}
        <div className="light-scope rounded-panel border border-line bg-paper p-5 sm:p-8">
          <Illustration className="mx-auto h-auto w-full max-w-lg" />
        </div>
        {b.caption && <figcaption className="mt-3 text-center text-sm text-muted">{renderText(b.caption)}</figcaption>}
      </figure>
    );
  }
  return <p key={i}>{renderText(b.text)}</p>;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" });
}

/** Väljer de mest relaterade artiklarna utifrån gemensamma sökord (samma kluster). */
function relatedPosts(current: Post, all: Post[], n = 3): Post[] {
  const words = (p: Post) =>
    new Set(p.keywords.flatMap((k) => k.toLowerCase().split(/\s+/)).filter((w) => w.length > 3));
  const own = words(current);
  return all
    .filter((x) => x.slug !== current.slug)
    .map((x) => {
      let score = 0;
      for (const w of words(x)) if (own.has(w)) score++;
      return { post: x, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((r) => r.post);
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const url = `${site.url}/blogg/${p.slug}`;
  const more = relatedPosts(p, posts, 3);
  const bild = foto(p.slug);

  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Guider", href: "/blogg" }, { name: p.title }]} />

      <article>
        <Container className="max-w-3xl py-12">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <time dateTime={p.date}>{formatDate(p.date)}</time>
            <span className="flex items-center gap-1"><IconClock className="h-4 w-4" /> {p.readingMinutes} min läsning</span>
          </div>
          <h1 className="type-h1 mt-3 text-ink">{p.title}</h1>
          <p className="mt-4 text-xl leading-relaxed text-ink-soft">{p.excerpt}</p>
          {bild && (
            <figure className="mt-8 overflow-hidden rounded-panel border border-line">
              <Image src={bild} alt={p.title} width={1600} height={900} priority sizes="(min-width: 768px) 768px, 100vw" className="h-auto w-full object-cover" />
            </figure>
          )}
          {p.target && (
            <ArrowLink href={p.target.href} className="mt-6">{p.target.label}</ArrowLink>
          )}

          <div className="prose-body mt-10">
            {p.content.map((b, i) => renderBlock(b, i))}
          </div>

          {p.faqs && p.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="type-h3 text-ink">Vanliga frågor</h2>
              <div className="mt-6">
                <FaqAccordion items={p.faqs} />
              </div>
            </div>
          )}

          <Panel className="mt-12">
            <h2 className="type-h4 text-ink">Behöver du armering till ditt projekt?</h2>
            <p className="mt-2 text-ink-soft">Vi tillverkar och levererar prefab armering i hela Sverige. Skicka din bockningslista för offert.</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
              {p.target && (
                <ArrowLink href={p.target.href}>{p.target.label}</ArrowLink>
              )}
            </div>
          </Panel>
        </Container>
      </article>

      {more.length > 0 && (
        <Section muted>
          <h2 className="type-h2 text-ink">Relaterade guider</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <Card key={m.slug} href={`/blogg/${m.slug}`} title={m.title} cta="Läs guiden">
                {m.excerpt}
              </Card>
            ))}
          </div>
        </Section>
      )}


      <CtaBanner />

      <JsonLd data={articleSchema({ title: p.title, description: p.metaDescription, url, datePublished: p.date, dateModified: p.updated })} />
      {p.faqs && p.faqs.length > 0 && <JsonLd data={faqSchema(p.faqs)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Guider", url: `${site.url}/blogg` },
          { name: p.title, url },
        ])}
      />
    </>
  );
}
