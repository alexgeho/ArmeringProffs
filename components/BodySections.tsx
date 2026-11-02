import Image from "next/image";
import type { ReactNode } from "react";
import { DataTable } from "@/components/ui";
import { IconCheck } from "@/components/icons";
import { renderText } from "@/lib/renderText";

/** Ett avsnitt i brödtexten på produkt-, tjänste- och landningssidor. */
export type BodySection = {
  heading: string;
  text: string;
  /** Valfri bocklista efter stycket (samma stil som i guiderna). */
  items?: string[];
  /** Numrerad lista (steg) i stället för bocklista. */
  ordered?: boolean;
  /** Valfri tabell efter stycket/listan. */
  table?: { head: string[]; rows: string[][]; caption?: string };
  /** Valfritt foto efter avsnittet (WebP 1600×900 i public/images/foto). */
  image?: { src: string; alt: string };
};

/** Renderar avsnitten som rena h2/p/ul/tabell/figur i en `prose-body`-wrapper. */
export function bodyNodes(body: BodySection[], after?: (i: number) => ReactNode) {
  return body.flatMap((b, i) => [
    <h2 key={`${i}-h`}>{b.heading}</h2>,
    <p key={`${i}-p`}>{renderText(b.text)}</p>,
    b.items && b.ordered && (
      <ol key={`${i}-ol`} className="grid list-decimal gap-2 pl-5 marker:text-muted">
        {b.items.map((it) => (
          <li key={it} className="pl-1">{renderText(it)}</li>
        ))}
      </ol>
    ),
    b.items && !b.ordered && (
      <ul key={`${i}-ul`} className="grid gap-2">
        {b.items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-accent" /> <span>{renderText(it)}</span>
          </li>
        ))}
      </ul>
    ),
    b.table && (
      <DataTable
        key={`${i}-t`}
        className="!mt-6"
        head={b.table.head}
        rows={b.table.rows}
        caption={b.table.caption ? renderText(b.table.caption) : undefined}
        label={b.table.caption?.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}
      />
    ),
    b.image && (
      <figure key={`${i}-f`} className="!mt-8 overflow-hidden rounded-panel border border-line">
        <Image
          src={b.image.src}
          alt={b.image.alt}
          width={1600}
          height={900}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="h-auto w-full object-cover"
        />
      </figure>
    ),
    after?.(i),
  ]);
}
