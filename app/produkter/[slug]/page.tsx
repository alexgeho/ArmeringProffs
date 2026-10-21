import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { products, getProduct } from "@/config/products";
import { relatedGuides } from "@/lib/related";
import { faq } from "@/config/faq";
import { site } from "@/config/site";
import { Section, SectionHeading, Button, PageHeader, Panel, CheckList, ArrowLink, Card } from "@/components/ui";
import { Breadcrumbs, CtaBanner, LeveransSection, Process, CityLinks } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { IconArrow, IconPhone } from "@/components/icons";
import {
  JsonLd, serviceSchema, faqSchema, breadcrumbSchema,
} from "@/lib/jsonld";
import { renderText } from "@/lib/renderText";
import { foto } from "@/lib/foto";

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

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const fotoSrc = foto(p.slug);
  const img = p.image ?? (fotoSrc ? { src: fotoSrc, alt: p.h1, width: 1600, height: 900 } : null);

  const url = `${site.url}/produkter/${p.slug}`;
  const others = products.filter((x) => x.slug !== p.slug).slice(0, 4);
  const faqs = p.faqs && p.faqs.length > 0 ? p.faqs : faq;
  const guides = relatedGuides(`/produkter/${p.slug}`, p.keywords, 3);

  return (
    <>
      <Breadcrumbs
        items={[{ name: "Hem", href: "/" }, { name: "Produkter", href: "/produkter" }, { name: p.name }]}
      />

      {/* Huvud: ljust; offertformuläret ligger i sidokolumnen */}
      <PageHeader
        title={p.h1}
        intro={p.intro}
        actions={
          <>
            <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
            <Button href={site.phoneHref} variant="secondary">
              <IconPhone className="h-4 w-4 text-accent" /> {site.phone}
            </Button>
          </>
        }
      />

      {/* Body */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="min-w-0">
            {img && (
              <figure className="mb-10 overflow-hidden rounded-panel border border-line">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="h-auto w-full object-cover"
                />
              </figure>
            )}
            <div className="prose-body">
              {p.body.map((b) => [
                <h2 key={`${b.heading}-h`}>{b.heading}</h2>,
                <p key={`${b.heading}-p`}>{renderText(b.text)}</p>,
              ])}
            </div>

            <Panel className="mt-10">
              <h2 className="type-h4 text-ink">Egenskaper</h2>
              <CheckList size="sm" items={p.includes} className="mt-4" />
              <ArrowLink href="/armeringskalkylator" className="mt-5 text-sm">Räkna ut åtgången</ArrowLink>
            </Panel>

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
              <h2 className="type-h4 text-ink">Få en offert</h2>
              <div className="mt-5">
                <ContactForm compact source={`produkt-${p.slug}`} />
              </div>
            </Panel>
          </aside>
        </div>
      </Section>

      <Process />

      {/* Other products */}
      <Section muted>
        <SectionHeading eyebrow="Fler produkter" title="Hela armeringspaketet från en leverantör" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Card
              key={o.slug}
              href={`/produkter/${o.slug}`}
              title={o.name}
              cta="Läs mer"
              image={{ src: `/images/illustrationer/${o.slug}.webp`, alt: "", sizes: "(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw" }}
            />
          ))}
        </div>
      </Section>

      <LeveransSection />
      <CityLinks muted title={`${p.name} – levereras i hela Sverige`} />

      {/* FAQ */}
      <Section>
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
