import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCity, type City } from "@/config/cities";
import { products } from "@/config/products";
import { site } from "@/config/site";
import type { Faq } from "@/config/faq";
import { Section, Container, Button, SectionHeading } from "@/components/ui";
import { Breadcrumbs, CtaBanner, KalkylatorPromo } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck, IconArrow, IconPhone, IconTruck } from "@/components/icons";
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
    title: `Armering i ${c.name} – prefab, klippt & bockad, korgar & nät`,
    description: `Prefab armering i ${c.name} och ${c.lan}. Vi tillverkar klippt & bockad armering, armeringskorgar, svetsad armering och nät efter din ritning och levererar till ${c.name}. Begär offert.`,
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

      {/* Hero */}
      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Armering i {c.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">{c.angle}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Klippt & bockad efter bockningslista", "Armeringskorgar, nät & kamstål", `Leverans till ${c.name} & ${c.lan}`, "Tillverkning, leverans & montage"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-slate-200">
                  <IconCheck className="h-5 w-5 shrink-0 text-brand" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="hidden sm:inline-flex">
                <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
              </span>
              <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 font-semibold text-white hover:bg-white/10">
                <IconPhone className="h-4 w-4 text-brand" /> {site.phone}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink shadow-xl sm:p-8">
            <h2 className="text-xl font-bold">Offert på armering i {c.name}</h2>
            <p className="mt-1 text-sm text-ink-soft">Fyll i formuläret så återkommer vi snabbt.</p>
            <div className="mt-5">
              <ContactForm compact source={`stad-${c.slug}`} />
            </div>
          </div>
        </Container>
      </section>

      {/* Produkter */}
      <Section>
        <SectionHeading
          eyebrow={`Prefab armering i ${c.name}`}
          title={`Armering efter din ritning – levererad till ${c.name}`}
          intro={`Vi tillverkar prefabricerad armering och levererar den till bygg- och anläggningsprojekt i ${c.name} och ${c.lan}. Skicka din bockningslista eller ritning så tar vi fram en offert med pris och leveranstid.`}
        />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">{c.intro2}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/produkter/${p.slug}`}
              className="group flex flex-col rounded-xl border border-line bg-white p-6 transition-all hover:border-brand hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.intro}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Läs mer <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-ink">Vanliga användningsområden i {c.name}</h2>
          <p className="mt-2 text-ink-soft">Vi levererar armering till bland annat:</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {c.sectors.map((s) => (
              <li key={s} className="flex items-start gap-2 rounded-lg border border-line bg-white p-4 text-ink-soft">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {s}
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
            <p className="mt-6 font-semibold text-ink">Vi levererar bland annat till:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[c.name, ...c.nearby].map((o) => (
                <span key={o} className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-1.5 text-sm text-ink">
                  <IconCheck className="h-4 w-4 text-brand" /> {o}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/offert">Begär offert med leveransort <IconArrow className="h-4 w-4" /></Button>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-8">
            <IconTruck className="h-10 w-10 text-brand" />
            <p className="mt-4 text-2xl font-bold text-ink">{c.name}</p>
            <p className="mt-2 text-ink-soft">
              Prefab armering tillverkad efter din bockningslista eller ritning och levererad till
              arbetsplatsen i {c.name}. Vi kan även sköta montaget.
            </p>
            <p className="mt-4 text-sm text-muted">
              Osäker på mängden? Räkna åtgången i vår{" "}
              <Link href="/armeringskalkylator" className="text-brand underline underline-offset-2 hover:no-underline">armeringskalkylator</Link>.
            </p>
          </div>
        </div>
      </Section>

      <KalkylatorPromo />

      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink">Vanliga frågor om armering i {c.name}</h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </Section>

      {/* Andra orter */}
      <Section muted>
        <SectionHeading eyebrow="Närliggande orter" title={`Armering i ${c.landsdel} och hela Sverige`} />
        <div className="mt-8 flex flex-wrap gap-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/armering/${o.slug}`}
              className="rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Armering i {o.name}
            </Link>
          ))}
          <Link
            href="/leverans"
            className="rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-brand transition-colors hover:border-brand"
          >
            Leverans i hela Sverige →
          </Link>
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
