import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landings, getLanding } from "@/config/landings";
import { site } from "@/config/site";
import { Section, SectionHeading, Panel, CheckList, ArrowLink } from "@/components/ui";
import { Breadcrumbs, CtaBanner, Process, PhotoHero } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
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

      <PhotoHero
        title={l.h1}
        intro={l.intro}
        points={l.includes.slice(0, 4)}
        bgImage={foto(l.slug) ?? "/images/distanser-armeringsnat.webp"}
        bgAlt={foto(l.slug) ? l.h1 : "Armeringsnät på distanser inför gjutning"}
        formSource={`sida-${l.slug}`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="prose-body min-w-0">
            {l.body.map((b) => [
              <h2 key={`${b.heading}-h`}>{b.heading}</h2>,
              <p key={`${b.heading}-p`}>{renderText(b.text)}</p>,
            ])}
          </div>
          <aside>
            <Panel sticky>
              <h2 className="type-h4 text-ink">Det här ingår</h2>
              <CheckList size="sm" items={l.includes} className="mt-4" />
              <div className="mt-6 border-t border-line pt-5">
                <ArrowLink href="/offert" className="text-sm">Begär offert</ArrowLink>
              </div>
            </Panel>
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
