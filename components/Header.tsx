"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/config/site";
import { IconPhone } from "./icons";

const nav = [
  { href: "/", label: "Hem" },
  { href: "/produkter", label: "Produkter" },
  { href: "/leverans", label: "Leverans" },
  { href: "/armeringskalkylator", label: "Kalkylator" },
  { href: "/blogg", label: "Guider" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-white">A</span>
          <span className="text-lg tracking-tight">{site.brand}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-brand">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand">
            <IconPhone className="h-4 w-4 text-brand" />
            {site.phone}
          </a>
          <Link href="/offert" className="inline-flex h-10 items-center rounded-lg bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
            Begär offert
          </Link>
        </div>

        <button
          type="button"
          aria-label="Meny"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
        >
          <span className="sr-only">Öppna meny</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-ink-soft hover:text-brand"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
              <a href={site.phoneHref} className="flex items-center gap-2 font-semibold text-ink">
                <IconPhone className="h-4 w-4 text-brand" />
                {site.phone}
              </a>
              <Link
                href="/offert"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-4 font-semibold text-white"
              >
                Begär offert
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
