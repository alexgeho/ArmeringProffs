import type { Metadata } from "next";
import { site } from "@/config/site";
import { reviews, verifiedReviews } from "@/config/reviews";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Breadcrumbs, CtaBanner } from "@/components/sections";
import { JsonLd, breadcrumbSchema, reviewsSchema } from "@/lib/jsonld";
import { IconStar, IconArrow, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Omdömen & kundreferenser",
  description:
    "Vad kunderna säger om vår prefabricerade armering – klippt & bockad armering, armeringskorgar och svetsade nät levererade i hela Sverige.",
  alternates: { canonical: "/omdomen" },
};

// Visa exempel-notisen så länge det inte finns några verifierade (äkta) omdömen.
const arExempel = verifiedReviews.length === 0;
// Schema emitteras ENDAST för äkta, verifierade omdömen (aldrig för platshållare).
const reviewLd = reviewsSchema(verifiedReviews);

export default function OmdomenPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Hem", href: "/" }, { name: "Omdömen" }]} />

      <Section>
        <SectionHeading
          eyebrow="Omdömen"
          title="Vad kunderna säger"
          intro="Vi levererar prefab armering till bygg- och anläggningsprojekt i hela Sverige – från enskilda betongplattor till större entreprenader. Här är omdömen från kunder om leverans, kvalitet och service."
        />

        {arExempel && (
          <p className="mx-auto mt-6 max-w-3xl rounded-lg border border-line bg-surface px-4 py-3 text-sm text-muted">
            Obs: exemplen nedan visar hur omdömen presenteras. Vi publicerar riktiga kundomdömen
            löpande i takt med att projekten slutförs.
          </p>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="flex flex-col rounded-xl border border-line bg-white p-6">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <IconStar key={j} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-ink-soft">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">
                {r.name} <span className="font-normal text-muted">· {r.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Varför välja oss"
              title="Trygg leverans av prefab armering"
              intro="Vi arbetar för att varje projekt ska bli en referens vi är stolta över – rätt mått, tydlig märkning och leverans i tid."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Tillverkning efter din bockningslista eller ritning",
                "Kamstål B500B och svetsade nät enligt svenska normer",
                "Märkt och sorterad armering – enkel montering",
                "Leverans i hela Sverige, med montage vid behov",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink-soft">
                  <IconCheck className="h-5 w-5 shrink-0 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-8">
            <h3 className="text-xl font-bold text-ink">Är du kund hos oss?</h3>
            <p className="mt-3 text-ink-soft">
              Vi blir glada för din feedback. Har du fått armering levererad och vill lämna ett
              omdöme? Hör av dig på{" "}
              <a href={`mailto:${site.email}`} className="text-brand underline">
                {site.email}
              </a>{" "}
              så publicerar vi det gärna här.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/offert">
                Begär offert <IconArrow className="h-4 w-4" />
              </Button>
              <Button href="/om-oss" variant="outline">
                Om oss
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Hem", url: site.url },
          { name: "Omdömen", url: `${site.url}/omdomen` },
        ])}
      />
      {reviewLd && <JsonLd data={reviewLd} />}
    </>
  );
}
