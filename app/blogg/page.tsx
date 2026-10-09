import type { Metadata } from "next";
import Link from "next/link";
import { posts, type PostCategory } from "@/config/blog";
import { site } from "@/config/site";
import { Section, SectionHeading, Button, cardClass } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { IconArrow, IconClock } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Guider om armering",
  description:
    "Guider om armering: armeringsnät, armeringsjärn och dimensioner, klippt & bockad armering, täckskikt och hur mycket armering som går åt.",
  alternates: { canonical: "/blogg" },
  openGraph: {
    title: `Guider om armering | ${site.company}`,
    description: "Praktiska guider om armering, armeringsnät, kamstål, klippt & bockad armering och distanser.",
    url: `${site.url}/blogg`,
  },
};

const groups: { key: PostCategory; title: string }[] = [
  { key: "guider", title: "Guider" },
  { key: "armering-till", title: "Armering till ditt projekt" },
  { key: "dimensioner", title: "Dimensioner och nät" },
  { key: "branscher", title: "För företag" },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" });
}

/** Bloggkort: hela kortet klickbart via rubriklänken (stretched link), datum som metadata. */
function PostCard({ p }: { p: (typeof posts)[number] }) {
  return (
    <article className={`group relative flex h-full flex-col p-(--space-card) transition-[border-color,box-shadow] duration-(--duration-fast) hover:border-brand hover:shadow-raised ${cardClass}`}>
      <div className="flex items-center gap-3 text-caption text-muted">
        <time dateTime={p.date}>{formatDate(p.date)}</time>
        <span className="flex items-center gap-1"><IconClock className="h-3.5 w-3.5" /> {p.readingMinutes} min</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">
        <Link href={`/blogg/${p.slug}`} className="after:absolute after:inset-0 after:rounded-card">{p.title}</Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
      <span aria-hidden="true" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        Läs guiden <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}

export default function BloggPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Guider" }]} />
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Guider"
          title="Guider om armering"
          intro="Praktiska guider och svar på vanliga frågor om armeringsnät, armeringsjärn, dimensioner, klippt & bockad armering, distanser och täckskikt – så väljer och beställer du rätt armering."
        />
        <div className="mt-10 flex flex-col items-start gap-4 rounded-card border border-brand/30 bg-brand-light p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="type-h4 text-ink">Räkna åtgången direkt</h2>
            <p className="mt-1 text-ink-soft">
              Fyll i plattans mått i vår armeringskalkylator och få ungefärlig åtgång av nät, kantjärn
              och distanser – begär offert direkt på din beräkning.
            </p>
          </div>
          <Button href="/armeringskalkylator" className="shrink-0">
            Öppna kalkylatorn <IconArrow className="h-4 w-4" />
          </Button>
        </div>

        {groups.map((g) => {
          const list = posts.filter((p) => (p.category ?? "guider") === g.key);
          if (list.length === 0) return null;
          return (
            <div key={g.key} className="mt-16">
              <h2 className="type-h3 text-ink">{g.title}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => <PostCard key={p.slug} p={p} />)}
              </div>
            </div>
          );
        })}
      </Section>
      <CtaBanner />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Guider", url: `${site.url}/blogg/` },
        ])}
      />
    </>
  );
}
