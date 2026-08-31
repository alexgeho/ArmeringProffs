import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { cities } from "@/config/cities";
import { reviews } from "@/config/reviews";
import { Button, Container, Section, SectionHeading } from "./ui";
import { ContactForm } from "./ContactForm";
import {
  IconPhone, IconCheck, IconShield, IconMoney, IconClock, IconStar,
  IconTruck, IconTools, IconLayers, IconRuler, IconArrow, IconChevron,
} from "./icons";

/* ---------- Hero ---------- */
export function Hero({
  title,
  intro,
  formSource = "hero",
}: {
  title: ReactNode;
  intro: string;
  formSource?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "22px 22px" }} />
      <Container className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-orange-200">
            <IconStar className="h-4 w-4 text-brand" /> Fast pris · ROT-avdrag · Garanti
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{intro}</p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Kostnadsfri offert & platsbesök", "Fackmässigt & sprickfritt", "Fast pris utan dolda avgifter", "Garanti på allt arbete"].map((t) => (
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
          <h2 className="text-xl font-bold text-ink">Få en kostnadsfri offert</h2>
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
  { icon: IconMoney, title: "Fast pris", text: "Tydlig offert utan dolda avgifter." },
  { icon: IconShield, title: "Garanti", text: "Vi står för kvaliteten på allt arbete." },
  { icon: IconClock, title: "Håller tiden", text: "Planerad process från start till mål." },
  { icon: IconTruck, title: "Hela Stockholm", text: "Vi arbetar i hela regionen." },
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

/* ---------- Services grid ---------- */
const serviceIcons = [IconLayers, IconRuler, IconTruck, IconTools, IconShield, IconLayers];

export function ServicesGrid() {
  return (
    <Section muted id="tjanster">
      <SectionHeading
        eyebrow="Våra tjänster"
        title="Betong och grund – hela vägen"
        intro="Från markarbeten och husgrund till färdiggjuten platta. Vi tar helhetsansvar för ditt projekt."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[i % serviceIcons.length];
          return (
            <Link
              key={s.slug}
              href={`/tjanster/${s.slug}`}
              className="group flex flex-col rounded-xl border border-line bg-white p-6 transition-all hover:border-brand hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-light text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.intro}</p>
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
  { n: "1", title: "Kontakt & platsbesök", text: "Vi går igenom dina behov och tittar på markförhållandena – kostnadsfritt." },
  { n: "2", title: "Fast offert", text: "Du får ett tydligt fast pris och en tidsplan. Inga dolda avgifter." },
  { n: "3", title: "Vi bygger", text: "Schakt, isolering, armering och gjutning – fackmässigt utfört enligt ritning." },
  { n: "4", title: "Besiktning & garanti", text: "Vi går igenom resultatet med dig. Allt arbete omfattas av garanti." },
];

export function Process() {
  return (
    <Section>
      <SectionHeading eyebrow="Så går det till" title="Enkel process, tryggt resultat" />
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

/* ---------- ROT ---------- */
export function RotSection() {
  return (
    <Section muted>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Spara pengar"
            title="Utnyttja ROT-avdraget – 30 % på arbetet"
            intro="Vid arbete på en befintlig fastighet, till exempel tillbyggnad, garage eller uterum, kan du använda ROT-avdraget. Vi drar av det direkt på fakturan och sköter hela ansökan mot Skatteverket."
          />
          <ul className="mt-6 space-y-3">
            {[
              "30 % avdrag på arbetskostnaden",
              "Vi hanterar all administration",
              "Gäller vid arbete på befintlig fastighet",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-ink-soft">
                <IconCheck className="h-5 w-5 text-brand" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/offert">Räkna på ditt projekt <IconArrow className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white p-8">
          <IconMoney className="h-10 w-10 text-brand" />
          <p className="mt-4 text-2xl font-bold text-ink">Exempel</p>
          <p className="mt-2 text-ink-soft">
            Om arbetskostnaden är <strong>100 000 kr</strong> ger ROT-avdraget en rabatt på{" "}
            <strong className="text-brand">30 000 kr</strong> – du betalar 70 000 kr.
          </p>
          <p className="mt-4 text-sm text-muted">
            Gäller under förutsättning att du har avdragsutrymme kvar och äger fastigheten. Ej vid nyproduktion.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Cities ---------- */
export function CitiesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="omraden">
      {heading && (
        <SectionHeading
          eyebrow="Områden vi arbetar i"
          title={`Betonggjutning i ${site.regionInflected}`}
          intro="Vi utför gjutning och grundläggning i hela Stockholm med kranskommuner. Välj din ort för lokal information."
        />
      )}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {cities.map((c) => (
          <Link
            key={c.slug}
            href={`/omraden/${c.slug}`}
            className="flex items-center justify-between rounded-lg border border-line px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            {c.name}
            <IconChevron className="h-4 w-4 -rotate-90 text-muted" />
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Reviews ---------- */
export function Reviews() {
  return (
    <Section muted>
      <SectionHeading eyebrow="Vad kunderna säger" title="Nöjda kunder i Stockholm" center />
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
          Redo att gjuta din platta? Begär en kostnadsfri offert idag.
        </h2>
        <p className="max-w-xl text-lg text-orange-50">
          Vi svarar snabbt och bokar gärna ett kostnadsfritt platsbesök.
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
