import Link from "next/link";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { cities } from "@/config/cities";
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
            Gjutning av betongplattor, husgrunder och markarbeten i {site.regionInflected}. Fast pris, ROT-avdrag och garanti.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Tjänster</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/tjanster/${s.slug}`} className="text-slate-400 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Områden</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {cities.slice(0, 10).map((c) => (
              <li key={c.slug}>
                <Link href={`/omraden/${c.slug}`} className="text-slate-400 hover:text-white">
                  {c.name}
                </Link>
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
          <p>Gjuta betongplatta · Husgrund · Markarbeten · {site.region}</p>
        </div>
      </div>
    </footer>
  );
}
