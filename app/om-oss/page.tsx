import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";
import { Breadcrumbs, UspBar, Process, CtaBanner, Reviews } from "@/components/sections";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Om oss",
  description: `${site.company} är specialister på prefabricerad armering – klippt & bockad, armeringskorgar och svetsad armering – med tillverkning, leverans och montage i hela Sverige. Läs mer om oss.`,
  alternates: { canonical: "/om-oss" },
  openGraph: {
    title: `Om oss | ${site.company}`,
    description: "Specialister på prefab armering med tillverkning, leverans och montage i hela Sverige.",
    url: `${site.url}/om-oss`,
  },
};

const values = [
  "Tillverkning enligt bockningslista och konstruktionsritning",
  "Kamstål B500B och nät enligt gällande normer",
  "Tydlig märkning, sortering och leverans i tid",
  "Full cykel: tillverkning, leverans och montage",
];

export default function OmOssPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Om oss" }]} />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.45fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Om oss" title={`${site.company}`} />
            <div className="prose-body mt-6 space-y-4 text-lg">
              <p>
                Vi är specialiserade på prefabricerad armering – klippt och bockad armering,
                armeringskorgar, svetsad armering och nät, kamstål och distanser. Vi tillverkar efter
                din bockningslista eller konstruktionsritning och levererar i hela Sverige.
              </p>
              <p>
                Vår ambition är enkel: rätt armering, i rätt tid, till rätt plats. Vi tar hela cykeln –
                tillverkning, leverans och montage – och arbetar enligt gällande normer med kamstål
                B500B. Skicka din ritning så hjälper vi dig hela vägen, från bockningslista till färdig
                leverans.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-2 text-ink-soft">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {v}
                </li>
              ))}
            </ul>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/om-oss-armeringsverkstad.webp"
              alt="Armeringsverkstad med prefabricerade armeringskorgar, kamstål och skyddshjälm"
              width={1400}
              height={934}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full object-cover"
            />
          </figure>
        </div>
      </Section>
      <UspBar />
      <Process />
      <Reviews />
      <CtaBanner />
    </>
  );
}

// ISR: revalidera varje timme så att SEO-/länkändringar (t.ex. footer,
// interna länkar) når produktionscachen – annars serveras sidan som immutable.
export const revalidate = 3600;
