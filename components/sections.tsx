import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { verifiedReviews } from "@/config/reviews";
import { posts, type Post } from "@/config/blog";
import { cities } from "@/config/cities";
import { ArrowLink, Button, Card, CheckList, ChipLink, Container, Section, SectionHeading, cardClass } from "./ui";
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
      <div className="pointer-events-none absolute inset-0 bg-night/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night via-night/90 via-55% to-transparent" />
    </>
  );
}

/** Formkortet i hero: transparent "mörkt glas". */
export const glassCard = "mx-auto w-full min-w-0 max-w-xl rounded-panel border border-white/20 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:max-w-none";

/**
 * Foto-hero med offertformulär (landnings-, tjänste-, stads- och offertsidor).
 * Vänster: H1, ingress, bocklista, sekundär handling. Höger: formulär (huvudhandlingen).
 */
export function PhotoHero({
  title,
  intro,
  points,
  bgImage,
  bgAlt,
  formTitle = "Begär offert",
  formSource,
  fullForm = false,
  actions,
  cols = "lg:grid-cols-[1.1fr_0.9fr]",
}: {
  title: ReactNode;
  intro: ReactNode;
  points?: string[];
  bgImage: string;
  bgAlt: string;
  formTitle?: string;
  formSource: string;
  fullForm?: boolean;
  actions?: ReactNode;
  cols?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-night text-white">
      <PhotoBg src={bgImage} alt={bgAlt} />
      <Container className={`relative grid grid-cols-1 gap-10 py-14 lg:items-start ${cols}`}>
        <div className="min-w-0">
          <h1 className="type-h1">{title}</h1>
          <p className="mt-5 max-w-xl text-lead text-slate-300">{intro}</p>
          {points && points.length > 0 && <CheckList onDark items={points} className="mt-7 sm:grid-cols-2" />}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {actions ?? (
              <Button href={site.phoneHref} variant="onDark">
                <IconPhone className="h-4 w-4 text-accent" /> {site.phone}
              </Button>
            )}
          </div>
        </div>
        <div className={glassCard}>
          <h2 className="text-xl font-bold text-white">{formTitle}</h2>
          <div className="mt-5">
            <ContactForm compact={!fullForm} onDark source={formSource} />
          </div>
        </div>
      </Container>
    </section>
  );
}

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
    <section className="relative overflow-hidden bg-night">
      {bgImage ? (
        <PhotoBg src={bgImage} alt={bgAlt} />
      ) : (
        <RebarMeshPattern className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-[0.07]" />
      )}
      <Container className="relative grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="min-w-0 px-2 text-center text-white sm:px-8 lg:px-0 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-orange-200">
            <IconStar className="h-4 w-4 shrink-0 text-accent" /> Leverans och montage i hela Sverige
          </span>
          <h1 className="type-h1 mt-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">{title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lead text-slate-100 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] lg:mx-0">{intro}</p>

          <ul className="mx-auto mt-7 grid w-fit grid-cols-1 gap-x-10 gap-y-3 text-left sm:grid-cols-[auto_auto] lg:mx-0">
            {["Kamstål B500B", "Märkt och sorterat per position", "Alla typformer A–XX", "Kostnadsfri offert"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-slate-50 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                <IconCheck className="h-5 w-5 shrink-0 text-accent" /> {t}
              </li>
            ))}
          </ul>
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
      <h2 className="sr-only">Därför väljer kunder oss</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {usps.map((u) => (
          <Card
            key={u.title}
            title={u.title}
            image={{ src: `/images/illustrationer/${u.img}.webp`, alt: "", sizes: "(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw" }}
          >
            {u.text}
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Prefab-showcase (startsidan, direkt under hero) ---------- */
const prefabItems = [
  { img: "prefab-palkorg", title: "Pål- & pelarkorgar", text: "Runda och fyrkantiga korgar med spiral eller byglar.", href: "/produkter/armeringskorgar" },
  { img: "prefab-plintkorg", title: "Plint- & fundamentkorgar", text: "Bottenarmering med uppstickande startjärn till pelare.", href: "/produkter/armeringskorgar" },
  { img: "prefab-vaggkorg", title: "Väggkorgar", text: "Dubbelsidig väggarmering med U-byglar och startjärn.", href: "/produkter/armeringskorgar" },
  { img: "armeringskorgar", title: "Balkkorgar", text: "Kant-, sockel- och bärbalkar – svetsade eller bundna.", href: "/produkter/armeringskorgar" },
  { img: "klippt-och-bockad", title: "Byglar & specialformer", text: "Alla typformer A–XX efter din bockningslista.", href: "/tjanster/bockningslista" },
  { img: "3d-bockning", title: "3D- & bågbockning", text: "Rumsbockade former och bågar till runda fundament.", href: "/produkter/3d-bockning" },
];

export function PrefabShowcase() {
  return (
    <Section id="prefab">
      <SectionHeading
        eyebrow="Det här tillverkar vi"
        title="Färdig prefab – rakt från ritning till bygget"
        intro="Vi bygger armeringen färdig i verkstad: korgar, byglar och specialformer i B500B, märkta per position. Ni lyfter på plats och gjuter."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {prefabItems.map((it) => (
          <Card
            key={it.title}
            href={it.href}
            compact
            title={it.title}
            image={{ src: `/images/illustrationer/${it.img}.webp`, alt: `${it.title} – prefabricerad armering`, sizes: "(min-width: 1024px) 400px, 50vw" }}
          >
            {it.text}
          </Card>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button href="/offert">Skicka ritning – få offert</Button>
        <p className="text-sm text-muted">Står inte ert element här? Vi tillverkar efter valfri konstruktionsritning.</p>
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
        {products.map((p) => (
          <Card
            key={p.slug}
            href={`/produkter/${p.slug}`}
            title={p.name}
            cta="Läs mer"
            image={{ src: `/images/illustrationer/${p.slug}.webp`, alt: `${p.name} – illustration`, sizes: "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" }}
          >
            {p.intro}
          </Card>
        ))}
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
      <ol className="mt-10 grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className={`flex flex-col overflow-hidden ${cardClass}`}>
            <div className="aspect-[16/9] overflow-hidden border-b border-line bg-paper">
              <Image
                src={`/images/illustrationer/${s.img}.webp`}
                alt=""
                width={1280}
                height={720}
                sizes="(min-width: 768px) 270px, 100vw"
                className="h-full w-full object-cover dark:brightness-90"
              />
            </div>
            <div className="p-(--space-card)">
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 font-semibold text-ink"><span className="sr-only">Steg {s.n}: </span>{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
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

export function LeveransSection({ heading = true, muted = false }: { heading?: boolean; muted?: boolean }) {
  return (
    <Section id="leverans" muted={muted}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          {heading && (
            <SectionHeading
              eyebrow="Leverans"
              title="Prefab armering i hela Sverige"
              intro="Vi tillverkar och levererar prefabricerad armering till bygg- och anläggningsprojekt i hela landet. Berätta leveransort och mängd så räknar vi fram frakt och leveranstid i offerten."
            />
          )}
          <CheckList items={leveransPoints} className="mt-6" />
          <div className="mt-8">
            <Button href="/offert">Begär offert med leveransort <IconArrow className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className={`rounded-panel border border-line p-8 ${muted ? "bg-card" : "bg-surface"}`}>
          <IconTruck className="h-10 w-10 text-accent" />
          <p className="type-h3 mt-4 text-ink">Hela landet</p>
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
  // Bara äkta, verifierade omdömen visas – exempeltexter ska aldrig synas för kunder.
  if (verifiedReviews.length === 0) return null;
  return (
    <Section muted>
      <SectionHeading eyebrow="Vad kunderna säger" title="Nöjda kunder i hela Sverige" center />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {verifiedReviews.map((r, i) => (
          <figure key={i} className={`${cardClass} p-(--space-card)`}>
            <div className="flex gap-0.5 text-accent" role="img" aria-label={`${r.rating} av 5 stjärnor`}>
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
        <ArrowLink href="/omdomen" className="text-sm">Läs fler omdömen</ArrowLink>
      </div>
    </Section>
  );
}

/* ---------- Kalkylator-promo (lead-magnet) ---------- */
export function KalkylatorPromo() {
  return (
    <Section>
      <div className="grid items-center gap-8 rounded-panel border border-brand/25 bg-brand-light p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-sm font-semibold text-brand">
            <IconRuler className="h-4 w-4" /> Gratis verktyg
          </span>
          <h2 className="type-h2 mt-4 text-ink">
            Räkna ut armeringen till din betongplatta
          </h2>
          <p className="mt-4 text-lead text-ink-soft">
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
            <li key={t} className="flex items-start gap-3 rounded-card bg-card p-4 text-ink-soft">
              <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {t}
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
          <Card key={p.slug} href={`/blogg/${p.slug}`} title={p.title} cta="Läs guiden">
            {p.excerpt}
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <ArrowLink href="/blogg" className="text-sm">Se alla guider</ArrowLink>
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
          <ChipLink key={c.slug} href={`/armering/${c.slug}`}>Armering i {c.name}</ChipLink>
        ))}
        <ChipLink href="/leverans" accent>Leverans i hela Sverige →</ChipLink>
      </div>
    </Section>
  );
}

/* ---------- CTA banner ---------- */
export function CtaBanner() {
  return (
    <section className="bg-night">
      <Container className="flex flex-col items-center gap-6 py-(--space-section) text-center">
        <h2 className="type-h2 max-w-2xl text-white">
          Skicka din bockningslista – få offert på prefab armering
        </h2>
        <p className="max-w-xl text-lead text-slate-300">
          Vi svarar snabbt med pris och leveranstid för hela Sverige.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
          <Button href={site.phoneHref} variant="onDark">
            <IconPhone className="h-4 w-4 text-accent" /> {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Breadcrumbs ---------- */
export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Brödsmulor" className="border-b border-line bg-surface">
      <Container>
        <ol className="flex flex-wrap items-center gap-x-1.5 text-sm text-muted">
          {items.map((it, i) => (
            <li key={i} className="flex min-h-11 items-center gap-1.5">
              {it.href ? (
                <Link href={it.href} className="inline-flex min-h-11 items-center hover:text-brand hover:underline">{it.name}</Link>
              ) : (
                <span aria-current="page" className="text-ink">{it.name}</span>
              )}
              {i < items.length - 1 && <IconChevron className="h-3.5 w-3.5 -rotate-90" />}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
