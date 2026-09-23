import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { reviews } from "@/config/reviews";
import { posts, type Post } from "@/config/blog";
import { cities } from "@/config/cities";
import { Button, Container, Section, SectionHeading } from "./ui";
import { ContactForm } from "./ContactForm";
import {
  IconPhone, IconCheck, IconStar,
  IconTruck, IconRuler, IconArrow, IconChevron,
} from "./icons";
import { RebarMeshPattern } from "./illustrations";

/* ---------- Hero ---------- */
/** Fotobakgrund med samma mörka läsbarhets-overlay som startsidans hero. */
export function PhotoBg({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <>
      <Image src={src} alt={alt} fill priority sizes="100vw" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-ink/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-55% to-transparent" />
    </>
  );
}

/** Formkortet i hero: transparent "mörkt glas". */
export const glassCard = "mx-auto w-full min-w-0 max-w-xl rounded-2xl border border-white/20 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:max-w-none";

export function Hero({
  title,
  intro,
  formSource = "hero",
  bgImage,
  bgAlt = "",
}: {
  title: ReactNode;
  intro: string;
  formSource?: string;
  bgImage?: string;
  bgAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      {bgImage ? (
        <PhotoBg src={bgImage} alt={bgAlt} />
      ) : (
        <RebarMeshPattern className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-[0.07]" />
      )}
      <Container className="relative grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="min-w-0 px-2 text-center text-white sm:px-8 lg:px-0 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-orange-200">
            <IconStar className="h-4 w-4 shrink-0 text-brand" /> Leverans och montage i hela Sverige
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed lg:mx-0 text-slate-100 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">{intro}</p>

          <ul className="mx-auto mt-7 grid w-fit grid-cols-1 gap-x-10 gap-y-3 text-left sm:grid-cols-[auto_auto] lg:mx-0">
            {["Kamstål B500B", "Märkt och sorterat per position", "Alla typformer A–XX", "Kostnadsfri offert"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-slate-50 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                <IconCheck className="h-5 w-5 shrink-0 text-brand" /> {t}
              </li>
            ))}
          </ul>

          {/* På mobil ligger formuläret direkt under – då är knappen överflödig. */}
          <div className="mt-8 hidden justify-center sm:flex lg:justify-start">
            <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
          </div>
        </div>

        <div className={glassCard}>
          <h2 className="text-xl font-bold text-white">Få en offert på din armering</h2>
          <div className="mt-5">
            <ContactForm compact onDark source={formSource} />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- USP / trust bar ---------- */
const usps = [
  { img: "usp-prefab", title: "Prefab-tillverkning", text: "Kapat, bockat och svetsat efter din bockningslista." },
  { img: "usp-ritning", title: "Efter ritning", text: "Vi tillverkar på mått enligt konstruktionsritning." },
  { img: "usp-leverans", title: "Korta leveranstider", text: "Snabb leverans till bygget i hela Sverige – vi håller både pris och leveranstid." },
  { img: "usp-montage", title: "Montage & rådgivning", text: "Vi kan även lägga armeringen och hjälpa dig rätt." },
];

export function UspBar() {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {usps.map((u) => (
          <div key={u.title} className="overflow-hidden rounded-xl border border-line bg-white p-5">
            <div className="-mx-5 -mt-5 mb-4 aspect-[16/9] overflow-hidden border-b border-line bg-slate-100">
              <Image
                src={`/images/illustrationer/${u.img}.webp`}
                alt=""
                width={1280}
                height={720}
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-ink">{u.title}</h3>
            <p className="mt-1.5 text-sm text-ink-soft">{u.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Products grid ---------- */

export function ProductsGrid() {
  return (
    <Section muted id="produkter">
      <SectionHeading
        eyebrow="Vårt sortiment"
        title="Prefabricerad armering – hela vägen"
        intro="Klippt & bockad armering, armeringskorgar, svetsad armering och nät, kamstål och distanser – tillverkat efter din ritning och levererat i hela Sverige."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          return (
            <Link
              key={p.slug}
              href={`/produkter/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white p-6 transition-all hover:border-brand hover:shadow-md"
            >
              <div className="-mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden border-b border-line bg-slate-100">
                <Image
                  src={`/images/illustrationer/${p.slug}.webp`}
                  alt={`${p.name} – illustration`}
                  width={1280}
                  height={720}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.intro}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Läs mer <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Process ---------- */
const steps = [
  { n: "1", img: "steg-1-ritning", title: "Skicka ritning eller bockningslista", text: "Ladda upp din bockningslista, konstruktionsritning eller mängd – så återkommer vi." },
  { n: "2", img: "steg-2-offert", title: "Offert & leveranstid", text: "Du får ett tydligt pris och besked om leveranstid. Saknar du bockningslista hjälper vi till." },
  { n: "3", img: "steg-3-tillverkning", title: "Tillverkning", text: "Vi kapar, bockar och svetsar armeringen i B500B, märker och sorterar per element." },
  { n: "4", img: "steg-4-leverans", title: "Leverans & montage", text: "Vi levererar i hela Sverige – och kan även lägga armeringen på plats." },
];

export function Process() {
  return (
    <Section>
      <SectionHeading eyebrow="Så går det till" title="Från bockningslista till färdig leverans" />
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="relative overflow-hidden rounded-xl border border-line p-6">
            <div className="-mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden border-b border-line bg-slate-100">
              <Image
                src={`/images/illustrationer/${s.img}.webp`}
                alt=""
                width={1280}
                height={720}
                sizes="(min-width: 768px) 300px, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
              {s.n}
            </span>
            <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Leverans hela Sverige ---------- */
const leveransPoints = [
  "Tillverkning + leverans + montage",
  "Leverans till hela Sverige – syd till nord",
  "Anpassad frakt efter mängd och ort",
  "Snabb leveranstid efter godkänd offert",
];

export function LeveransSection({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="leverans">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          {heading && (
            <SectionHeading
              eyebrow="Leverans"
              title="Prefab armering i hela Sverige"
              intro="Vi tillverkar och levererar prefabricerad armering till bygg- och anläggningsprojekt i hela landet. Berätta leveransort och mängd så räknar vi fram frakt och leveranstid i offerten."
            />
          )}
          <ul className="mt-6 space-y-3">
            {leveransPoints.map((t) => (
              <li key={t} className="flex items-center gap-3 text-ink-soft">
                <IconCheck className="h-5 w-5 text-brand" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/offert">Begär offert med leveransort <IconArrow className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-8">
          <IconTruck className="h-10 w-10 text-brand" />
          <p className="mt-4 text-2xl font-bold text-ink">Hela landet</p>
          <p className="mt-2 text-ink-soft">
            Från Skåne i söder till Norrland i norr – vi levererar armering till din arbetsplats
            oavsett var i Sverige projektet ligger.
          </p>
          <p className="mt-4 text-sm text-muted">
            Leverans sker med anpassad transport utifrån mängd, dimension och ort. Frakt anges i offerten.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Reviews ---------- */
export function Reviews() {
  return (
    <Section muted>
      <SectionHeading eyebrow="Vad kunderna säger" title="Nöjda kunder i hela Sverige" center />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <figure key={i} className="rounded-xl border border-line bg-white p-6">
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: r.rating }).map((_, j) => (
                <IconStar key={j} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className="mt-4 text-ink-soft">“{r.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-ink">
              {r.name} <span className="font-normal text-muted">· {r.place}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/omdomen"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Läs fler omdömen <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

/* ---------- Kalkylator-promo (lead-magnet) ---------- */
export function KalkylatorPromo() {
  return (
    <Section>
      <div className="grid items-center gap-8 rounded-2xl border border-brand/25 bg-brand-light p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand">
            <IconRuler className="h-4 w-4" /> Gratis verktyg
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Räkna ut armeringen till din betongplatta
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Fyll i plattans mått i vår armeringskalkylator och få ungefärlig åtgång av armeringsnät,
            kantjärn och distanser på sekunder – och begär offert direkt på din beräkning.
          </p>
          <div className="mt-6">
            <Button href="/armeringskalkylator">Öppna armeringskalkylatorn <IconArrow className="h-4 w-4" /></Button>
          </div>
        </div>
        <ul className="grid gap-3">
          {[
            "Åtgång av nät, kantjärn och distanser",
            "Baserat på samma tumregler som våra guider",
            "Offertformuläret förifylls med din beräkning",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-xl bg-white p-4 text-ink-soft">
              <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- Guider-teaser (blogg-internlänkning) ----------
   Ger länkkraft från start-/produkt-/stadssidor in i blogg-klustret (guiderna
   syntes tidigare bara via header-navet). Kuraterade slugs = våra mest
   kommersiella/högvolyms-sökfrågor. */
const defaultGuideSlugs = [
  "armering-till-betongplatta",
  "vad-kostar-armering",
  "bestalla-armering",
  "armeringsnat-eller-armeringsjarn",
];

export function GuidesTeaser({
  slugs = defaultGuideSlugs,
  eyebrow = "Guider & kunskap",
  title = "Läs våra armeringsguider",
  muted = false,
}: {
  slugs?: string[];
  eyebrow?: string;
  title?: string;
  muted?: boolean;
}) {
  const list = slugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is Post => Boolean(p));
  if (!list.length) return null;
  return (
    <Section muted={muted}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/blogg/${p.slug}`}
            className="group flex flex-col rounded-xl border border-line bg-white p-6 transition-all hover:border-brand hover:shadow-md"
          >
            <h3 className="text-base font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Läs guiden <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/blogg" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark">
          Se alla guider <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

/* ---------- Stad-länkar (lokal internlänkning) ----------
   Kopplar produkt-/hub-sidor till de lokala landningssidorna (/armering/[ort]).
   Produktsidor saknade tidigare helt länkar till stadssidorna. */
export function CityLinks({
  eyebrow = "Leverans per ort",
  title = "Vi levererar armering i hela Sverige",
  muted = false,
}: {
  eyebrow?: string;
  title?: string;
  muted?: boolean;
}) {
  return (
    <Section muted={muted}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 flex flex-wrap gap-3">
        {cities.map((c) => (
          <Link
            key={c.slug}
            href={`/armering/${c.slug}`}
            className="rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Armering i {c.name}
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
  );
}

/* ---------- CTA banner ---------- */
export function CtaBanner() {
  return (
    <section className="bg-ink">
      <Container className="flex flex-col items-center gap-6 py-14 text-center sm:py-16">
        <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Skicka din bockningslista – få offert på prefab armering
        </h2>
        <p className="max-w-xl text-lg text-slate-300">
          Vi svarar snabbt med pris och leveranstid för hela Sverige.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/offert" className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand px-6 font-semibold text-white hover:bg-brand-dark">
            Begär offert <IconArrow className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/25 px-6 font-semibold text-white hover:bg-white/10">
            <IconPhone className="h-4 w-4 text-brand" /> {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Breadcrumbs ---------- */
export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Brödsmulor" className="border-b border-line bg-surface">
      <Container className="flex flex-wrap items-center gap-1.5 py-3 text-sm text-muted">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {it.href ? (
              <Link href={it.href} className="hover:text-brand">{it.name}</Link>
            ) : (
              <span className="text-ink">{it.name}</span>
            )}
            {i < items.length - 1 && <IconChevron className="h-3.5 w-3.5 -rotate-90" />}
          </span>
        ))}
      </Container>
    </nav>
  );
}
