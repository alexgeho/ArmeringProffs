import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { IconArrow, IconCheck } from "./icons";

/*
  Designsystemets grundkomponenter. Regler och exempel: docs/DESIGN-SYSTEM.md.
  Använd dessa i stället för egna klass-soppor i sidmallarna.
*/

/* ---------- Layout ---------- */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Sektion med samma luft över och under (token --space-section). */
export function Section({
  children,
  className = "",
  muted = false,
  id,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
  /** Läsbredd (max-w-3xl, centrerad) – för löptext och FAQ. */
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`py-(--space-section) ${muted ? "bg-surface" : ""} ${className}`}>
      <Container>{narrow ? <div className="mx-auto max-w-3xl">{children}</div> : children}</Container>
    </section>
  );
}

/* ---------- Knappar och länkar ---------- */

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "sm";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-control font-semibold whitespace-nowrap transition-colors duration-(--duration-fast) disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const btnVariant: Record<Variant, string> = {
  /** En per vy: huvudhandlingen. */
  primary: "bg-cta text-white shadow-sm hover:bg-cta-hover",
  /** Sekundär handling (t.ex. ring oss) på ljus yta. */
  secondary: "border border-line bg-card text-ink hover:border-brand hover:text-brand",
  ghost: "text-ink hover:text-brand",
  /** Sekundär handling på mörk yta (hero, CTA-banner). */
  onDark: "border border-white/25 text-white hover:bg-white/10",
};

const btnSize: Record<Size, string> = {
  md: "h-12 px-6 text-[15px]", // 48 px
  sm: "h-11 px-4 text-sm", // 44 px – minsta tryckyta
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${btnBase} ${btnVariant[variant]} ${btnSize[size]} ${className}`;
}

type BtnProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Länk-knapp. Interna sökvägar → next/link, tel:/mailto:/filer → <a>. */
  href?: string;
  download?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  /** Visar laddningsläge och blockerar dubbelklick. */
  loading?: boolean;
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  download,
  onClick,
  type = "button",
  disabled,
  loading,
  ...rest
}: BtnProps) {
  const cls = buttonClass(variant, size, className);
  if (href) {
    const native = download || /^(tel:|mailto:|https?:)/.test(href);
    return native ? (
      <a href={href} download={download} className={cls} aria-label={rest["aria-label"]}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls} aria-label={rest["aria-label"]}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-label={rest["aria-label"]}
      className={cls}
    >
      {loading && (
        <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {children}
    </button>
  );
}

/** Textlänk med pil ("Läs mer →"). Minst 24 px hög, 44 px med `block`. */
export function ArrowLink({
  href,
  children,
  className = "",
  download,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  download?: boolean;
}) {
  const cls = `group/link inline-flex min-h-6 items-center gap-1 font-semibold text-brand hover:text-brand-dark hover:underline underline-offset-2 ${className}`;
  const inner = (
    <>
      {children}
      <IconArrow className="h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-0.5" />
    </>
  );
  return download || /^(tel:|mailto:|https?:)/.test(href) ? (
    <a href={href} download={download} className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

/** Länk i löptext. */
export const inlineLink = "text-brand underline underline-offset-2 hover:text-brand-dark hover:no-underline";

/** Chip-länk (orter, taggar). 44 px hög. */
export function ChipLink({ href, children, accent = false }: { href: string; children: ReactNode; accent?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center rounded-control border border-line bg-card px-4 text-sm font-medium transition-colors hover:border-brand hover:text-brand ${accent ? "text-brand" : "text-ink"}`}
    >
      {children}
    </Link>
  );
}

/* ---------- Rubriker ---------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand">{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  /** "h1" på sidor utan Hero – varje sida ska ha exakt en H1. */
  as?: "h1" | "h2";
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className={`${eyebrow ? "mt-3" : ""} ${Heading === "h1" ? "type-h1" : "type-h2"} text-ink`}>{title}</Heading>
      {intro && <p className="mt-4 text-lead text-ink-soft">{intro}</p>}
    </div>
  );
}

/** Ljust sidhuvud (produkt-, verktygs- och innehållssidor utan foto-hero). */
export function PageHeader({
  title,
  intro,
  actions,
  children,
}: {
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-12">
        {children}
        <h1 className="type-h1 max-w-3xl text-ink">{title}</h1>
        {intro && <p className="mt-5 max-w-3xl text-lead text-ink-soft">{intro}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
      </Container>
    </section>
  );
}

/* ---------- Kort ---------- */

/** Bas-klass för alla kort – en kortstil på hela sajten. */
export const cardClass = "rounded-card border border-line bg-card";
const cardHover = "transition-[border-color,box-shadow] duration-(--duration-fast) hover:border-brand hover:shadow-raised";

/**
 * Det enda kortmönstret: (bild 16:9) → rubrik → text → (länktext).
 * Med `href` blir hela kortet klickbart. Syskon i ett rutnät får samma höjd (h-full + flex-1).
 */
export function Card({
  href,
  image,
  title,
  titleAs: T = "h3",
  children,
  cta,
  compact = false,
  className = "",
}: {
  href?: string;
  image?: { src: string; alt: string; sizes: string };
  title: ReactNode;
  titleAs?: "h2" | "h3";
  children?: ReactNode;
  /** Länktext längst ner, t.ex. "Läs mer". */
  cta?: string;
  /** Tätare variant (2 kolumner på mobil). */
  compact?: boolean;
  className?: string;
}) {
  const pad = compact ? "p-3 sm:p-(--space-card)" : "p-(--space-card)";
  const body = (
    <>
      {image && (
        <div className="aspect-[16/9] overflow-hidden border-b border-line bg-paper">
          <Image
            src={image.src}
            alt={image.alt}
            width={1280}
            height={720}
            sizes={image.sizes}
            className={`h-full w-full object-cover dark:brightness-90 ${href ? "transition-transform duration-(--duration-base) group-hover:scale-[1.03]" : ""}`}
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col ${pad}`}>
        <T className={`font-semibold text-ink ${compact ? "text-sm sm:text-lg" : "text-lg"}`}>{title}</T>
        {children && (
          <div className={`mt-2 flex-1 text-sm leading-relaxed text-ink-soft ${compact ? "hidden sm:block" : ""}`}>{children}</div>
        )}
        {cta && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
            {cta} <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </>
  );
  const cls = `group flex h-full min-w-0 flex-col overflow-hidden ${cardClass} ${className}`;
  return href ? (
    <Link href={href} className={`${cls} ${cardHover}`}>{body}</Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}

/** Sidopanel/infobox (surface-yta). */
export function Panel({ children, className = "", sticky = false }: { children: ReactNode; className?: string; sticky?: boolean }) {
  return (
    <div className={`rounded-card border border-line bg-surface p-(--space-card) ${sticky ? "lg:sticky lg:top-[calc(var(--header-h)+1rem)]" : ""} ${className}`}>
      {children}
    </div>
  );
}

/** Bocklista med orange bock. `onDark` på mörk yta. */
export function CheckList({
  items,
  onDark = false,
  className = "",
  size = "md",
}: {
  items: ReactNode[];
  onDark?: boolean;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className={`flex items-start gap-2 ${size === "sm" ? "text-sm" : ""} ${onDark ? "text-slate-100" : "text-ink-soft"}`}>
          <IconCheck className={`${size === "sm" ? "mt-0.5 h-4 w-4" : "mt-0.5 h-5 w-5"} shrink-0 text-accent`} /> <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Tabell ---------- */

/** Responsiv tabell: horisontell scroll i egen ruta (tangentbordsbar), zebra, bildtext. */
export function DataTable({
  head,
  rows,
  caption,
  className = "",
}: {
  head: ReactNode[];
  rows: ReactNode[][];
  caption?: ReactNode;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="overflow-x-auto rounded-card border border-line"
        tabIndex={0}
        role="region"
        aria-label={typeof caption === "string" ? caption : "Tabell"}
      >
        <table className="w-full border-collapse text-left text-base">
          <thead className="bg-surface">
            <tr className="border-b border-line">
              {head.map((h, i) => (
                <th key={i} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap text-ink">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r} className="border-b border-line last:border-0 even:bg-surface/60">
                {row.map((cell, c) => (
                  <td key={c} className={`px-4 py-3 ${c === 0 ? "font-medium text-ink" : "text-ink-soft"}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
