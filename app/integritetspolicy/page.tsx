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
      <Container className="prose-body max-w-3xl py-14">
        <h1 className="text-4xl font-bold text-ink">Integritetspolicy</h1>
        <p className="mt-4 text-ink-soft">
          {site.company} (org.nr {site.orgNumber}) värnar om din integritet. Här beskriver vi hur vi
          behandlar dina personuppgifter enligt dataskyddsförordningen (GDPR).
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">Vilka uppgifter vi samlar in</h2>
        <p className="mt-3 text-ink-soft">
          När du fyller i vårt offertformulär samlar vi in namn eller företag, telefonnummer,
          e-postadress, leveransort, mängd och den information du lämnar om ditt projekt – samt en
          eventuell ritning eller bockningslista som du väljer att bifoga.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">Hur vi använder uppgifterna</h2>
        <p className="mt-3 text-ink-soft">
          Uppgifterna används enbart för att kontakta dig, lämna offert och utföra det arbete du
          efterfrågar. Vi delar aldrig dina uppgifter med tredje part för marknadsföring.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">Dina rättigheter</h2>
        <p className="mt-3 text-ink-soft">
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
