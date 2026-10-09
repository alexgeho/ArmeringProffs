"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { IconPhone } from "./icons";
import { buttonClass } from "./ui";

const nav = [
  { href: "/", label: "Hem" },
  { href: "/produkter", label: "Produkter" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/leverans", label: "Leverans" },
  { href: "/armeringskalkylator", label: "Kalkylator" },
  { href: "/blogg", label: "Guider" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()?.replace(/\/$/, "") || "/";

  // Esc stänger mobilmenyn.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-header border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex h-(--header-h) w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label={site.brand} className="flex shrink-0 items-center font-bold text-ink" onClick={() => setOpen(false)}>
          <Image src="/images/logo-agry-light.png" alt={`${site.brand} – AGRY OÜ`} width={390} height={360} className="h-[76px] w-auto max-w-none shrink-0 object-contain sm:h-[92px] lg:h-[104px] dark:hidden" priority />
          <Image src="/images/logo-agry-dark.png" alt={`${site.brand} – AGRY OÜ`} width={520} height={480} className="hidden h-[76px] w-auto max-w-none shrink-0 object-contain sm:h-[92px] lg:h-[104px] dark:block" />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname === n.href ? "page" : undefined} className="inline-flex min-h-11 items-center whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-brand aria-[current=page]:text-ink aria-[current=page]:font-semibold">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a href={site.phoneHref} aria-label={`Ring ${site.phone}`} className="flex min-h-11 min-w-11 items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold text-ink hover:text-brand">
            <IconPhone className="h-4 w-4 text-accent" />
            <span className="hidden xl:inline">{site.phone}</span>
          </a>
          <Link href="/offert" className={buttonClass("primary", "sm")}>
            Begär offert
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls="mobilmeny"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control border border-line lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div id="mobilmeny" className="border-t border-line bg-page lg:hidden">
          <nav aria-label="Huvudmeny" className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === n.href ? "page" : undefined}
                className="flex min-h-11 items-center text-base font-medium text-ink-soft hover:text-brand aria-[current=page]:text-ink aria-[current=page]:font-semibold"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
              <a href={site.phoneHref} className="flex min-h-11 items-center gap-2 font-semibold text-ink">
                <IconPhone className="h-4 w-4 text-accent" />
                {site.phone}
              </a>
              <Link
                href="/offert"
                onClick={() => setOpen(false)}
                className={buttonClass("primary", "sm")}
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
