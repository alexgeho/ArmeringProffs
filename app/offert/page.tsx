import type { Metadata } from "next";
import { site } from "@/config/site";
import { Section, Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { IconCheck, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Begär offert – kostnadsfritt",
  description: `Begär en kostnadsfri offert på gjutning av betongplatta eller husgrund i Stockholm. ${site.company} återkommer snabbt med fast pris.`,
  alternates: { canonical: "/offert" },
};

const points = [
  "Kostnadsfritt och utan förpliktelser",
  "Fast pris efter platsbesök",
  "Vi hjälper dig med ROT-avdraget",
  "Snabbt svar",
];

export default function OffertPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Begär offert" }]} />
      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Begär en kostnadsfri offert</h1>
            <p className="mt-5 text-lg text-slate-300">
              Berätta om ditt projekt så återkommer vi snabbt med ett förslag och fast pris. Vi bokar
              gärna ett kostnadsfritt platsbesök.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-slate-200">
                  <IconCheck className="h-5 w-5 text-brand" /> {p}
                </li>
              ))}
            </ul>
            <a href={site.phoneHref} className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 font-semibold text-white hover:bg-white/10">
              <IconPhone className="h-4 w-4 text-brand" /> Ring oss: {site.phone}
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink shadow-xl sm:p-8">
            <h2 className="text-xl font-bold">Fyll i dina uppgifter</h2>
            <div className="mt-5">
              <ContactForm source="offertsida" />
            </div>
          </div>
        </Container>
      </section>
      <Section>
        <p className="mx-auto max-w-2xl text-center text-ink-soft">
          Vi behandlar dina uppgifter enligt vår{" "}
          <a href="/integritetspolicy" className="text-brand underline">integritetspolicy</a> och delar dem aldrig med tredje part.
        </p>
      </Section>
    </>
  );
}
