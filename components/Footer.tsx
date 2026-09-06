import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { cities } from "@/config/cities";
import { IconPhone, IconMail, IconMapPin } from "./icons";

const footerLinks = [
  { href: "/om-oss", label: "Om oss" },
  { href: "/omdomen", label: "Omdömen" },
  { href: "/vanliga-fragor", label: "Vanliga frågor" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/integritetspolicy", label: "Integritetspolicy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center">
            <Image src="/images/logo-emblem.png" alt={site.brand} width={64} height={64} className="h-16 w-16 shrink-0" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Prefabricerad armering – klippt & bockad, armeringskorgar, svetsad armering och nät. Tillverkning, leverans och montage i {site.regionInflected}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Produkter</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/produkter/${p.slug}`} className="text-slate-400 hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Leverans</h3>
          <p className="mt-4 text-sm text-slate-400">
            Vi levererar i <Link href="/leverans" className="text-slate-300 underline hover:text-white">hela Sverige</Link>, bland annat:
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {cities.slice(0, 10).map((c) => (
              <li key={c.slug}>
                <Link href={`/armering/${c.slug}`} className="text-slate-400 hover:text-white">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 text-slate-300 hover:text-white">
                <IconPhone className="h-4 w-4 text-brand" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-slate-300 hover:text-white">
                <IconMail className="h-4 w-4 text-brand" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-slate-400">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>Leverans i {site.regionInflected}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-400 hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.company} · Drivs av {site.legalName} · Reg.nr {site.regNumber} · VAT {site.vat}
            </p>
            <p>Klippt & bockad · Armeringskorgar · Svetsad armering · {site.region}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
