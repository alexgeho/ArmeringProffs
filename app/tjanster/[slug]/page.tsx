import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/config/services";
import { posts } from "@/config/blog";
import { site } from "@/config/site";
import { Section, SectionHeading, Container, Button, Panel, CheckList, ArrowLink, Card } from "@/components/ui";
import { Breadcrumbs, CtaBanner, Process, CityLinks, PhotoHero } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AnimatedScene } from "@/components/AnimatedScene";
import { BockningsformerExplorer } from "@/components/BockningsformerExplorer";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { renderText } from "@/lib/renderText";
import { foto } from "@/lib/foto";

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

/** Tjänster som visar ett interaktivt verktyg i stället för hero med formulär. */
const tools: Record<string, { title: string; text: string; node: React.ReactNode }> = {
  bockningslista: {
    title: "Välj form, ange mått och antal",
    text: "Klicka på en typform, skriv in dina mått, välj Ø och antal – lägg till i listan och skicka som offertförfrågan.",
    node: <BockningsformerExplorer />,
  },
};

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
  const tool = tools[s.slug];

  return (
    <>
      <Breadcrumbs
        items={[{ name: "Hem", href: "/" }, { name: "Tjänster", href: "/tjanster" }, { name: s.name }]}
      />

      {tool ? (
        /* Verktygssida: ljust huvud + interaktivt verktyg i stället för mörk hero med formulär */
        <section className="border-b border-line bg-surface">
          <Container className="py-10">
            <div>
              <p className="type-h3 text-ink">{tool.title}</p>
              <p className="mt-1 max-w-3xl text-sm text-muted">{tool.text}</p>
              <a
                href="/downloads/typformer-bockning-armeringsproffs.pdf"
                download
                className="mt-2 mb-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                  <path d="M10 3v10m0 0l-4-4m4 4l4-4M4 16h12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Ladda ner alla typformer som PDF (A4, 3 sidor)
              </a>
              <AnimatedScene>{tool.node}</AnimatedScene>
            </div>
            {/* Rubrik + ingress (SEO) under verktyget */}
            <h1 className="type-h2 mt-12 max-w-3xl text-ink">{s.h1}</h1>
            <p className="mt-4 max-w-3xl text-lead text-ink-soft">{s.intro}</p>
            <div className="mt-6">
              <Button href="/offert" className="h-auto min-h-12 py-3 !whitespace-normal text-center">Har du redan en lista? Skicka den – begär offert</Button>
            </div>
          </Container>
        </section>
      ) : (
        <PhotoHero
          title={s.h1}
          intro={s.intro}
          points={s.includes.slice(0, 4)}
          bgImage={foto(s.slug) ?? "/images/distanser-armeringsnat.webp"}
          bgAlt={foto(s.slug) ? s.h1 : "Armeringsnät på distanser inför gjutning"}
          formSource={`tjanst-${s.slug}`}
        />
      )}

      {/* Body */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="min-w-0">
            <div className="prose-body">
              {s.body.map((b) => [
                <h2 key={`${b.heading}-h`}>{b.heading}</h2>,
                <p key={`${b.heading}-p`}>{renderText(b.text)}</p>,
              ])}
            </div>

            {guides.length > 0 && (
              <Panel className="mt-10">
                <h2 className="type-h4 text-ink">Guider som hjälper dig vidare</h2>
                <ul className="mt-3 grid gap-1">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <ArrowLink href={`/blogg/${g.slug}`} className="min-h-11 font-medium">{g.title}</ArrowLink>
                    </li>
                  ))}
                </ul>
              </Panel>
            )}
          </div>
          <aside>
            <Panel sticky>
              <h2 className="type-h4 text-ink">Det här ingår</h2>
              <CheckList size="sm" items={s.includes} className="mt-4" />
              {s.resource && (
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-semibold text-ink">Gör-det-själv</p>
                  <ArrowLink href={s.resource.href} download className="mt-2 text-sm">{s.resource.label}</ArrowLink>
                </div>
              )}
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm font-semibold text-ink">Osäker på mängden?</p>
                <p className="mt-1 text-sm text-ink-soft">Räkna ut åtgången i vår kalkylator.</p>
                <ArrowLink href="/armeringskalkylator" className="mt-3 text-sm">Öppna armeringskalkylatorn</ArrowLink>
              </div>
            </Panel>
          </aside>
        </div>
      </Section>

      <Process />

      {/* Andra tjänster */}
      {others.length > 0 && (
        <Section muted>
          <SectionHeading eyebrow="Fler tjänster" title="Hela armeringsjobbet från en leverantör" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <Card key={o.slug} href={`/tjanster/${o.slug}`} title={o.name} cta="Läs mer">
                {o.intro.slice(0, 120)}…
              </Card>
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
