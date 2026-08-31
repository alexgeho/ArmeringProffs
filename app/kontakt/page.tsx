import type { Metadata } from "next";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";
import { Breadcrumbs } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { IconPhone, IconMail, IconMapPin, IconClock } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakta ${site.company} för offert på prefab armering – klippt & bockad, korgar och nät i hela Sverige. Ring ${site.phone} eller skicka din bockningslista.`,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: `Kontakt | ${site.company}`,
    description: "Kontakta oss för offert på prefab armering i hela Sverige.",
    url: `${site.url}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Kontakt" }]} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Kontakt"
              title="Hör av dig"
              intro="Ring oss eller fyll i formuläret så återkommer vi med en kostnadsfri offert. Vi bokar gärna ett platsbesök."
            />
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand"><IconPhone className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted">Telefon</p>
                  <a href={site.phoneHref} className="font-semibold text-ink hover:text-brand">{site.phone}</a>
                </div>
              </li>
              {site.phoneOffice && (
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand"><IconPhone className="h-5 w-5" /></span>
                  <div>
                    <p className="text-sm text-muted">Kontor</p>
                    <a href={site.phoneOfficeHref} className="font-semibold text-ink hover:text-brand">{site.phoneOffice}</a>
                  </div>
                </li>
              )}
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand"><IconMail className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted">E-post</p>
                  <a href={`mailto:${site.email}`} className="font-semibold text-ink hover:text-brand">{site.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand"><IconMapPin className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted">Adress</p>
                  <p className="font-semibold text-ink">{site.address.street}, {site.address.zip} {site.address.city}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand"><IconClock className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm text-muted">Öppettider</p>
                  <p className="font-semibold text-ink">Vardagar 07:00–16:00</p>
                </div>
              </li>
            </ul>
            <p className="mt-8 text-sm text-muted">Org.nr {site.orgNumber} · {site.company}</p>
          </div>

          <div className="rounded-2xl border border-line p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Begär offert</h2>
            <div className="mt-5">
              <ContactForm source="kontaktsida" />
            </div>
          </div>
        </div>
      </Section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Kontakt", url: `${site.url}/kontakt` },
        ])}
      />
    </>
  );
}
