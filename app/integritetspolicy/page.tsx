import type { Metadata } from "next";
import { site } from "@/config/site";
import { Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/sections";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: `Så behandlar ${site.company} dina personuppgifter enligt GDPR.`,
  alternates: { canonical: "/integritetspolicy" },
  robots: { index: false, follow: true },
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Integritetspolicy" }]} />
      <Container className="prose-body max-w-3xl py-(--space-section)">
        <h1 className="type-h1 text-ink">Integritetspolicy</h1>
        <p>
          {site.company} (drivs av {site.legalName}, reg.nr {site.regNumber}, VAT {site.vat}) värnar om
          din integritet. Här beskriver vi hur vi behandlar dina personuppgifter enligt
          dataskyddsförordningen (GDPR).
        </p>

        <h2>Vilka uppgifter vi samlar in</h2>
        <p>
          När du fyller i vårt offertformulär samlar vi in namn eller företag, telefonnummer,
          e-postadress, leveransort, mängd och den information du lämnar om ditt projekt – samt en
          eventuell ritning eller bockningslista som du väljer att bifoga. Med förfrågan skickas
          också vilken sida du kom in på och varifrån (t.ex. en sökmotor), så att vi vet vilka av
          våra sidor som hjälper kunder. Uppgiften sparas bara i din webbläsarflik tills du skickar
          formuläret – ingen cookie används för detta.
        </p>

        <h2>Hur vi använder uppgifterna</h2>
        <p>
          Uppgifterna används enbart för att kontakta dig, lämna offert och utföra det arbete du
          efterfrågar. Vi delar aldrig dina uppgifter med tredje part för marknadsföring.
        </p>

        <h2>Dina rättigheter</h2>
        <p>
          Du har rätt att begära ut, rätta eller radera dina uppgifter. Kontakta oss på{" "}
          <a href={`mailto:${site.email}`} className="text-brand underline">{site.email}</a>.
        </p>

        <p className="mt-8 text-sm text-muted">
          Denna policy är en grundmall – anpassa den efter er faktiska hantering innan lansering.
        </p>
      </Container>
    </>
  );
}
