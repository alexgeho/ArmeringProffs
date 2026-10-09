import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCity, type City } from "@/config/cities";
import { products } from "@/config/products";
import { site } from "@/config/site";
import type { Faq } from "@/config/faq";
import { Section, Button, SectionHeading, Card, ArrowLink, ChipLink, cardClass, inlineLink } from "@/components/ui";
import Link from "next/link";
import { Breadcrumbs, CtaBanner, KalkylatorPromo, GuidesTeaser, PhotoHero } from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck, IconArrow, IconTruck } from "@/components/icons";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) return {};
  return {
    title: `Armering i ${c.name} – klippt & bockad`,
    description: `Armering i ${c.name}: klippt & bockad efter din ritning, armeringskorgar och nät – levererat till ${c.name} och ${c.lan}. Begär offert.`,
    alternates: { canonical: `/armering/${c.slug}` },
    openGraph: {
      title: `Armering i ${c.name} | ${site.company}`,
      description: `Prefab armering tillverkad efter ritning och levererad till ${c.name} och ${c.lan}.`,
      url: `${site.url}/armering/${c.slug}`,
    },
  };
}

function localFaqs(c: City): Faq[] {
  const norrland = c.landsdel === "Norrland";
  return [
    {
      q: `Levererar ni armering till ${c.name}?`,
      a: `Ja. Vi tillverkar prefab armering – klippt och bockad armering, armeringskorgar, svetsad armering och nät – och levererar till ${c.name} och övriga ${c.lan}. Ange leveransort och mängd i offertförfrågan så räknar vi fram frakt och leveranstid.`,
    },
    {
      q: `Hur lång är leveranstiden till ${c.name}?`,
      a: `Leveranstiden beror på mängd, dimension och ort. ${
        norrland
          ? `Till ${c.name} och övriga Norrland planerar vi transporten så att armeringen är på plats i rätt tid.`
          : `Till ${c.name} har vi normalt effektiva transporter.`
      } Exakt leveranstid anges i offerten.`,
    },
    {
      q: `Kan jag beställa klippt och bockad armering i ${c.name}?`,
      a: `Ja, vi tillverkar klippt och bockad armering efter din bockningslista eller konstruktionsritning och levererar den färdigkapad, bockad, märkt och sorterad till ${c.name}.`,
    },
    {
      q: `Vad kostar armering i ${c.name}?`,
      a: `Priset beror på mängd, dimensioner, hur mycket kapning och bockning som krävs samt frakt till ${c.name}. Skicka bockningslista eller mått så får du ett exakt pris i en offert.`,
    },
    ...(c.faqs ?? []),
  ];
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) notFound();

  const url = `${site.url}/armering/${c.slug}`;
  const faqs = localFaqs(c);
  // Visa bara närliggande orter (samma landsdel) – undvik ett stort block med
  // länkar till alla städer (Googles doorway-varning). Faller tillbaka till ett
  // fåtal om landsdelen bara har en ort.
  const sameLandsdel = cities.filter((x) => x.slug !== c.slug && x.landsdel === c.landsdel);
  const others = sameLandsdel.length ? sameLandsdel : cities.filter((x) => x.slug !== c.slug).slice(0, 4);
  const norrland = c.landsdel === "Norrland";

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Hem", href: "/" },
          { name: "Leverans", href: "/leverans" },
          { name: `Armering i ${c.name}` },
        ]}
      />

      <PhotoHero
        title={<>Armering i {c.name}</>}
        intro={c.angle}
        points={["Klippt & bockad efter bockningslista", "Armeringskorgar, nät & kamstål", `Leverans till ${c.name} & ${c.lan}`, "Tillverkning, leverans & montage"]}
        bgImage="/images/armeringsjarn-kamstal.webp"
        bgAlt="Armeringsjärn och betong på byggarbetsplats"
        formTitle={`Offert på armering i ${c.name}`}
        formSource={`stad-${c.slug}`}
        cols="lg:grid-cols-[1.05fr_0.95fr]"
      />

      {/* Produkter */}
      <Section>
        <SectionHeading
          eyebrow={`Prefab armering i ${c.name}`}
          title={`Armering efter din ritning – levererad till ${c.name}`}
          intro={`Vi tillverkar prefabricerad armering och levererar den till bygg- och anläggningsprojekt i ${c.name} och ${c.lan}. Skicka din bockningslista eller ritning så tar vi fram en offert med pris och leveranstid.`}
        />
        <div className="prose-body mt-6 max-w-3xl">
          <p>{c.intro2}</p>
          {c.ground && <p>{c.ground}</p>}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.slug} href={`/produkter/${p.slug}`} title={p.name} cta="Läs mer">
              {p.intro}
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="type-h3 text-ink">Vanliga användningsområden i {c.name}</h2>
          <p className="mt-2 text-ink-soft">Vi levererar armering till bland annat:</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {c.sectors.map((s) => (
              <li key={s} className={`flex items-start gap-2 p-4 text-ink-soft ${cardClass}`}>
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Leverans */}
      <Section muted>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Leverans"
              title={`Leverans till ${c.name} och ${c.lan}`}
              intro={
                norrland
                  ? `Vi levererar prefab armering till ${c.name} och övriga Norrland. Transport och leveranstid planeras utifrån mängd och ort så att armeringen finns på plats i rätt tid.`
                  : `Vi levererar prefab armering till ${c.name} med anpassad transport. Frakt och leveranstid anges i offerten utifrån mängd och dimension.`
              }
            />
            {norrland && (
              <ArrowLink href="/armering-norrland" className="mt-4">Armering i Norrland</ArrowLink>
            )}
            <p className="mt-6 font-semibold text-ink">Vi levererar bland annat till:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[c.name, ...c.nearby].map((o) => (
                <span key={o} className="inline-flex items-center gap-1.5 rounded-control border border-line bg-card px-3 py-1.5 text-sm text-ink">
                  <IconCheck className="h-4 w-4 text-accent" /> {o}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/offert">Begär offert med leveransort <IconArrow className="h-4 w-4" /></Button>
            </div>
          </div>
          <div className="rounded-panel border border-line bg-card p-8">
            <IconTruck className="h-10 w-10 text-accent" />
            <p className="type-h3 mt-4 text-ink">{c.name}</p>
            <p className="mt-2 text-ink-soft">
              Prefab armering tillverkad efter din bockningslista eller ritning och levererad till
              arbetsplatsen i {c.name}. Vi kan även sköta montaget.
            </p>
            <p className="mt-4 text-sm text-muted">
              Osäker på mängden? Räkna åtgången i vår{" "}
              <Link href="/armeringskalkylator" className={inlineLink}>armeringskalkylator</Link>.
            </p>
          </div>
        </div>
      </Section>

      <KalkylatorPromo />

      {/* FAQ */}
      <Section narrow>
        <h2 className="type-h2 text-ink">Vanliga frågor om armering i {c.name}</h2>
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <GuidesTeaser title="Guider för ditt armeringsprojekt" eyebrow="Guider & kunskap" />

      {/* Andra orter */}
      <Section muted>
        <SectionHeading eyebrow="Närliggande orter" title={`Armering i ${c.landsdel} och hela Sverige`} />
        <div className="mt-8 flex flex-wrap gap-3">
          {others.map((o) => (
            <ChipLink key={o.slug} href={`/armering/${o.slug}`}>Armering i {o.name}</ChipLink>
          ))}
          <ChipLink href="/leverans" accent>Leverans i hela Sverige →</ChipLink>
        </div>
      </Section>

      <CtaBanner />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Prefab armering",
          name: `Prefab armering i ${c.name}`,
          description: `Tillverkning och leverans av prefabricerad armering (klippt & bockad, armeringskorgar, svetsad armering och nät) till ${c.name} och ${c.lan}.`,
          url,
          provider: { "@id": `${site.url}/#business` },
          areaServed: { "@type": "City", name: c.name },
        }}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Leverans", url: `${site.url}/leverans` },
          { name: `Armering i ${c.name}`, url },
        ])}
      />
    </>
  );
}
