"use client";

import { useId, useState } from "react";
import type { Faq } from "@/config/faq";
import { IconChevron } from "./icons";

/** FAQ-dragspel: en öppen åt gången, knapp med aria-expanded/aria-controls, svar som region. */
export function FaqAccordion({ items, headingLevel = 3 }: { items: Faq[]; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-card border border-line bg-card">
      {items.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-q${i}`;
        const panelId = `${uid}-a${i}`;
        return (
          <div key={i}>
            <H>
              <button
                id={btnId}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-ink">{f.q}</span>
                <IconChevron
                  className={`h-5 w-5 shrink-0 text-accent transition-transform duration-(--duration-fast) ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </H>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
              <p className="-mt-1 px-5 pb-5 leading-relaxed text-ink-soft">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
