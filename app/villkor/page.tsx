import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/sections";

export const metadata: Metadata = {
  title: "Villkor",
  description: `Villkor för beställning och leverans av armering från ${site.company}.`,
  alternates: { canonical: "/villkor" },
};

export default function VillkorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Villkor" }]} />
      <Container className="prose-body max-w-3xl py-(--space-section)">
        <h1 className="type-h1 text-ink">Villkor</h1>
        <p>
          {site.company} drivs av {site.legalName}, reg.nr {site.regNumber}, VAT {site.vat}.
        </p>

        <h2>Beställning</h2>
        <p>
          Vi arbetar med offert per projekt. Skicka din bockningslista, ritning eller mängd via{" "}
          <Link href="/offert" className="text-brand underline">offertformuläret</Link> så får du ett
          pris utan förpliktelser. Armeringen tillverkas efter din bockningslista eller ritning.
        </p>

        <h2>Leverans</h2>
        <p>
          Vi levererar i hela Sverige. Frakt och leveranstid beror på mängd, dimension och
          leveransort och anges i offerten.
        </p>

        <h2>Betalning, fel och reklamation</h2>
        <p>
          Vid köp mellan företag gäller köplagen (1990:931). Vid köp som privatperson gäller
          konsumentköplagen (2022:260). Reklamation skickas till{" "}
          <a href={`mailto:${site.email}`} className="text-brand underline">{site.email}</a>.
        </p>
      </Container>
    </>
  );
}
