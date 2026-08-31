import { site } from "@/config/site";
import { faq } from "@/config/faq";
import { Section, SectionHeading } from "@/components/ui";
import {
  Hero, UspBar, ServicesGrid, Process, RotSection, CitiesGrid, Reviews, CtaBanner,
} from "@/components/sections";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, faqSchema } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <Hero
        title={<>Gjuta betongplatta i <span className="text-brand">Stockholm</span></>}
        intro="Vi gjuter betongplattor, husgrunder och garageplattor i hela Stockholm med omnejd. Fackmässigt utfört från schakt till färdig platta – med fast pris, ROT-avdrag och garanti."
        formSource="startsida-hero"
      />

      <UspBar />

      {/* Intro/SEO-text */}
      <Section muted>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            center
            eyebrow="Betongexperter i Stockholm"
            title="Din grund byggd för att hålla"
            intro={`${site.company} är specialister på att gjuta betongplatta och grundläggning – platta på mark, bottenplatta och garageplatta. Vi tar helhetsansvar från markarbeten och isolering till armering och gjutning, så att du får en stabil, fuktsäker och energieffektiv grund som håller i generationer. Du får alltid ett fast pris.`}
          />
        </div>
      </Section>

      <ServicesGrid />
      <Process />
      <RotSection />
      <Reviews />
      <CitiesGrid />

      {/* FAQ */}
      <Section muted>
        <SectionHeading center eyebrow="Vanliga frågor" title="Frågor och svar" />
        <div className="mt-10">
          <FaqAccordion items={faq} />
        </div>
        <JsonLd data={faqSchema(faq)} />
      </Section>

      <CtaBanner />
    </>
  );
}
