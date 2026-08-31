import Link from "next/link";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { regions } from "@/config/cities";
import { IconPhone, IconMail, IconMapPin } from "./icons";

export function Footer() {
  const year = 2026; // uppdatera vid årsskifte

  return (
    <footer className="border-t border-line bg-ink text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand">A</span>
            <span className="text-lg">{site.brand}</span>
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
            {regions.slice(0, 10).map((r) => (
              <li key={r} className="text-slate-400">{r}</li>
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
              <span>
                {site.address.street}, {site.address.zip} {site.address.city}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.company} · Org.nr {site.orgNumber}
          </p>
          <p>Klippt & bockad · Armeringskorgar · Svetsad armering · {site.region}</p>
        </div>
      </div>
    </footer>
  );
}
