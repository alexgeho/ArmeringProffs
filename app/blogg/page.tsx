import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/config/blog";
import { site } from "@/config/site";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { IconArrow, IconClock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Guider om armering",
  description:
    "Guider om armering – armeringsnät, armeringsjärn och dimensioner, klippt & bockad armering, distanser och täckskikt, samt hur mycket armering som går åt. Allt om rätt armering till din betong.",
  alternates: { canonical: "/blogg" },
  openGraph: {
    title: `Guider om armering | ${site.company}`,
    description: "Praktiska guider om armering, armeringsnät, kamstål, klippt & bockad armering och distanser.",
    url: `${site.url}/blogg`,
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" });
}

function PostCard({ p }: { p: (typeof posts)[number] }) {
  return (
    <article className="flex flex-col rounded-xl border border-line p-6 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3 text-xs text-muted">
        <time dateTime={p.date}>{formatDate(p.date)}</time>
        <span className="flex items-center gap-1"><IconClock className="h-3.5 w-3.5" /> {p.readingMinutes} min</span>
      </div>
      <h2 className="mt-3 text-lg font-bold text-ink">
        <Link href={`/blogg/${p.slug}`} className="hover:text-brand">{p.title}</Link>
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
      <Link href={`/blogg/${p.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        Läs guiden <IconArrow className="h-4 w-4" />
      </Link>
    </article>
  );
}

export default function BloggPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Guider" }]} />
      <Section>
        <SectionHeading
          eyebrow="Guider"
          title="Allt om armering"
          intro="Praktiska guider och svar på vanliga frågor om armeringsnät, armeringsjärn, dimensioner, klippt & bockad armering, distanser och täckskikt – så väljer och beställer du rätt armering."
        />
        <div className="mt-8 flex flex-col items-start gap-4 rounded-xl border border-brand/30 bg-brand-light p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-xl font-bold text-ink">Räkna åtgången direkt</h2>
            <p className="mt-1 text-ink-soft">
              Fyll i plattans mått i vår armeringskalkylator och få ungefärlig åtgång av nät, kantjärn
              och distanser – begär offert direkt på din beräkning.
            </p>
          </div>
          <Button href="/armeringskalkylator" className="shrink-0">
            Öppna kalkylatorn <IconArrow className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => <PostCard key={p.slug} p={p} />)}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
