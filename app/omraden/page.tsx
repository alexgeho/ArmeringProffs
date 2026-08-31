import type { Metadata } from "next";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";
import { Breadcrumbs, CitiesGrid, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Områden vi arbetar i – Stockholm med omnejd",
  description:
    "Vi gjuter betongplattor och husgrunder i hela Stockholm med kranskommuner – Nacka, Täby, Lidingö, Danderyd, Solna, Huddinge med flera. Hitta din ort.",
  alternates: { canonical: "/omraden" },
};

export default function OmradenPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Områden" }]} />
      <Section>
        <SectionHeading
          eyebrow="Serviceområde"
          title={`Vi arbetar i ${site.regionInflected}`}
          intro="Välj din ort nedan för lokal information om gjutning och grundläggning där du bor."
        />
      </Section>
      <CitiesGrid heading={false} />
      <CtaBanner />
    </>
  );
}
