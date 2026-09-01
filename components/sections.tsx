import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { reviews } from "@/config/reviews";
import { Button, Container, Section, SectionHeading } from "./ui";
import { ContactForm } from "./ContactForm";
import {
  IconPhone, IconCheck, IconShield, IconStar,
  IconTruck, IconTools, IconLayers, IconRuler, IconArrow, IconChevron,
} from "./icons";
import { RebarMeshPattern, RebarCageIllustration } from "./illustrations";

/* ---------- Hero ---------- */
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
        <>
          <Image
            src={bgImage}
            alt={bgAlt}
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          {/* mörk gradient så vit text alltid är läsbar men fotot syns */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
        </>
      ) : (
        <RebarMeshPattern className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-[0.07]" />
      )}
      <Container className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-orange-200">
            <IconStar className="h-4 w-4 text-brand" /> Prefab armering · Tillverkning & montage · Hela Sverige
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{intro}</p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Prefab efter bockningslista & ritning", "Klippt, bockat, svetsat & korgar", "Leverans i hela Sverige", "Tillverkning, leverans & montage"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-slate-200">
                <IconCheck className="h-5 w-5 shrink-0 text-brand" /> {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/offert">Begär offert <IconArrow className="h-4 w-4" /></Button>
            <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 font-semibold text-white hover:bg-white/10">
              <IconPhone className="h-4 w-4 text-brand" /> {site.phone}
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-xl font-bold text-ink">Få en offert på din armering</h2>
          <p className="mt-1 text-sm text-ink-soft">Fyll i formuläret så återkommer vi snabbt.</p>
          <div className="mt-5">
            <ContactForm compact source={formSource} />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- USP / trust bar ---------- */
const usps = [
  { icon: IconTools, title: "Prefab-tillverkning", text: "Kapat, bockat och svetsat efter din bockningslista." },
  { icon: IconRuler, title: "Efter ritning", text: "Vi tillverkar på mått enligt konstruktionsritning." },
  { icon: IconTruck, title: "Leverans hela Sverige", text: "Vi levererar till bygget i hela landet." },
  { icon: IconShield, title: "Montage & rådgivning", text: "Vi kan även lägga armeringen och hjälpa dig rätt." },
];

export function UspBar() {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {usps.map((u) => (
          <div key={u.title} className="flex items-start gap-4 rounded-xl border border-line p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
              <u.icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold text-ink">{u.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{u.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Products grid ---------- */
const productIcons = [IconRuler, IconLayers, IconTools, IconShield, IconCheck];

export function ProductsGrid() {
  return (
    <Section muted id="produkter">
      <SectionHeading
        eyebrow="Vårt sortiment"
        title="Prefabricerad armering – hela vägen"
        intro="Klippt & bockad armering, armeringskorgar, svetsad armering och nät, kamstål och distanser – tillverkat efter din ritning och levererat i hela Sverige."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => {
          const Icon = productIcons[i % productIcons.length];
          return (
            <Link
              key={p.slug}
              href={`/produkter/${p.slug}`}
              className="group flex flex-col rounded-xl border border-line bg-white p-6 transition-all hover:border-brand hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-light text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{p.name}</h3>
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
  { n: "1", title: "Skicka ritning eller bockningslista", text: "Ladda upp din bockningslista, konstruktionsritning eller mängd – så återkommer vi." },
  { n: "2", title: "Offert & leveranstid", text: "Du får ett tydligt pris och besked om leveranstid. Saknar du bockningslista hjälper vi till." },
  { n: "3", title: "Tillverkning", text: "Vi kapar, bockar och svetsar armeringen i B500B, märker och sorterar per element." },
  { n: "4", title: "Leverans & montage", text: "Vi levererar i hela Sverige – och kan även lägga armeringen på plats." },
];

export function Process() {
  return (
    <Section>
      <SectionHeading eyebrow="Så går det till" title="Från bockningslista till färdig leverans" />
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-xl border border-line p-6">
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
    </Section>
  );
}

/* ---------- CTA banner ---------- */
export function CtaBanner() {
  return (
    <section className="bg-brand">
      <Container className="flex flex-col items-center gap-6 py-14 text-center sm:py-16">
        <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Skicka din bockningslista – få offert på prefab armering
        </h2>
        <p className="max-w-xl text-lg text-orange-50">
          Vi svarar snabbt med pris och leveranstid för hela Sverige.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/offert" className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 font-semibold text-brand hover:bg-orange-50">
            Begär offert <IconArrow className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/40 px-6 font-semibold text-white hover:bg-white/10">
            <IconPhone className="h-4 w-4" /> {site.phone}
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
