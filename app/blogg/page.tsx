import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/config/blog";
import { Section, SectionHeading } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { IconArrow, IconClock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blogg – guider om betong, grund & ROT",
  description:
    "Guider och tips om att gjuta betongplatta, bygga husgrund, priser och ROT-avdrag. Lär dig hur ett hållbart betongbygge går till.",
  alternates: { canonical: "/blogg" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" });
}

const isArmering = (slug: string) => slug.includes("armering");

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
        Läs artikeln <IconArrow className="h-4 w-4" />
      </Link>
    </article>
  );
}

export default function BloggPage() {
  const betong = posts.filter((p) => !isArmering(p.slug));
  const armering = posts.filter((p) => isArmering(p.slug));

  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Blogg" }]} />
      <Section>
        <SectionHeading
          eyebrow="Blogg"
          title="Guider om betong och grundläggning"
          intro="Praktiska guider och svar på vanliga frågor om gjutning, husgrund, priser och ROT-avdrag."
        />

        <h2 className="mt-12 text-2xl font-bold text-ink">Betong &amp; grund</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {betong.map((p) => <PostCard key={p.slug} p={p} />)}
        </div>

        {armering.length > 0 && (
          <>
            <h2 className="mt-14 text-2xl font-bold text-ink">Armering</h2>
            <p className="mt-2 text-ink-soft">Allt om armeringsnät, armeringsjärn och rätt armering till plattan.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {armering.map((p) => <PostCard key={p.slug} p={p} />)}
            </div>
          </>
        )}
      </Section>
      <CtaBanner />
    </>
  );
}
