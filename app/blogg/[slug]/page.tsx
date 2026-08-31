import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost, type Block, type Post } from "@/config/blog";
import { site } from "@/config/site";
import { Section, Container, Button } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconClock, IconArrow, IconCheck } from "@/components/icons";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

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

/** Gör om inline-länkar i markdown-stil [text](/sökväg) till klickbara länkar. */
function renderText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    const cls = "text-brand underline underline-offset-2 hover:no-underline";
    parts.push(
      href.startsWith("/")
        ? <Link key={key++} href={href} className={cls}>{label}</Link>
        : <a key={key++} href={href} className={cls} rel="noopener">{label}</a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}

function renderBlock(b: Block, i: number) {
  if (b.type === "h2") return <h2 key={i} className="mt-8 text-2xl font-bold text-ink">{b.text}</h2>;
  if (b.type === "h3") return <h3 key={i} className="mt-6 text-xl font-bold text-ink">{b.text}</h3>;
  if (b.type === "ul")
    return (
      <ul key={i} className="mt-4 space-y-2">
        {b.items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-lg text-ink-soft">
            <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-brand" /> <span>{renderText(it)}</span>
          </li>
        ))}
      </ul>
    );
  if (b.type === "ol")
    return (
      <ol key={i} className="mt-4 list-decimal space-y-2 pl-5">
        {b.items.map((it) => (
          <li key={it} className="pl-1 text-lg text-ink-soft">{renderText(it)}</li>
        ))}
      </ol>
    );
  if (b.type === "table")
    return (
      <figure key={i} className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-base">
          <thead>
            <tr className="border-b border-line">
              {b.head.map((h) => (
                <th key={h} className="py-2 pr-4 font-bold text-ink">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((row, r) => (
              <tr key={r} className="border-b border-line">
                {row.map((cell, c) => (
                  <td key={c} className="py-2 pr-4 text-ink-soft">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {b.caption && <figcaption className="mt-2 text-sm text-muted">{b.caption}</figcaption>}
      </figure>
    );
  return <p key={i} className="mt-4 text-lg leading-relaxed text-ink-soft">{renderText(b.text)}</p>;
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

  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Blogg", href: "/blogg" }, { name: p.title }]} />

      <article>
        <Container className="max-w-3xl py-12">
          <div className="flex items-center gap-3 text-sm text-muted">
            <time dateTime={p.date}>{formatDate(p.date)}</time>
            <span className="flex items-center gap-1"><IconClock className="h-4 w-4" /> {p.readingMinutes} min läsning</span>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">{p.title}</h1>
          <p className="mt-4 text-xl leading-relaxed text-ink-soft">{p.excerpt}</p>

          <div className="mt-8">
            {p.content.map((b, i) => renderBlock(b, i))}
          </div>

          {p.faqs && p.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-ink">Vanliga frågor</h2>
              <div className="mt-6">
                <FaqAccordion items={p.faqs} />
              </div>
            </div>
          )}

          <div className="mt-10 rounded-xl border border-line bg-surface p-6">
            <h2 className="text-lg font-bold text-ink">Behöver du armering till ditt projekt?</h2>
            <p className="mt-2 text-ink-soft">Vi tillverkar och levererar prefab armering i hela Sverige. Skicka din bockningslista för offert.</p>
            <div className="mt-4">
              <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
            </div>
          </div>
        </Container>
      </article>

      {more.length > 0 && (
        <Section muted>
          <h2 className="text-2xl font-bold text-ink">Relaterade guider</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <Link key={m.slug} href={`/blogg/${m.slug}`} className="rounded-xl border border-line bg-white p-6 transition-colors hover:border-brand">
                <h3 className="font-bold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{m.excerpt}</p>
              </Link>
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
          { name: "Blogg", url: `${site.url}/blogg` },
          { name: p.title, url },
        ])}
      />
    </>
  );
}
