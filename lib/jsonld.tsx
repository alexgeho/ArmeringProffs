import { site } from "@/config/site";
import type { Faq } from "@/config/faq";
import type { Review } from "@/config/reviews";

/** Renderar ett JSON-LD-script (strukturerad data för Google). */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organisation/leverantör – huvudschema för hela sajten (prefab armering, hela Sverige).
 *  OBS: platshållar-uppgifter (telefon/adress i config/site.ts) tas INTE med i schemat –
 *  vi vill inte mata Google felaktig NAP-data. De inkluderas automatiskt när riktiga
 *  värden fyllts i. */
export function localBusinessSchema() {
  const hasPhone = !site.phone.includes("000 00 00"); // platshållare = "+46 70 000 00 00"
  const hasAddress = site.address.street !== ""; // adress döljs tills den fyllts i
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#business`,
    name: site.company,
    legalName: site.legalName,
    vatID: site.vat,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/opengraph-image`,
    url: site.url,
    ...(hasPhone ? { telephone: site.phone } : {}),
    email: site.email,
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            postalCode: site.address.zip,
            addressLocality: site.address.city,
            addressCountry: site.address.country,
          },
        }
      : {}),
    areaServed: { "@type": "Country", name: "Sverige" },
  };
}

/** WebSite-schema – förankrar domänen som en entitet och kopplar den till
 *  organisationen (#business). Ingen SearchAction (sajten saknar intern sökruta
 *  och Googles sitelinks-searchbox är utfasad). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.company,
    inLanguage: "sv-SE",
    publisher: { "@id": `${site.url}/#business` },
  };
}

/** Service-schema (helhet: tillverkning + leverans + montage). */
export function serviceSchema(opts: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "Country", name: "Sverige" },
  };
}

/** Product-schema för produktkategorisidor. */
export function productSchema(opts: {
  name: string;
  description: string;
  url: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.category ? { category: opts.category } : {}),
    brand: { "@type": "Brand", name: site.brand },
    material: "Kamstål B500B",
    manufacturer: { "@id": `${site.url}/#business` },
    // OBS: inget `offers` – vi är offert-/prefabmodell utan fasta priser. Ett Offer
    // utan `price` gör Product-datan ogiltig (GSC-kritiskt fel). När vi vill in i
    // Google Shopping/rich results lägger vi till giltiga priser här (se slagplan).
  };
}

/** FAQPage-schema. */
export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Article-schema för bloggartiklar. */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: site.company },
    publisher: {
      "@type": "Organization",
      name: site.company,
      logo: { "@type": "ImageObject", url: `${site.url}/opengraph-image` },
    },
  };
}

/** Review + AggregateRating-schema. Anropas ENDAST med äkta, verifierade omdömen
 *  (se verifiedReviews i config/reviews.ts). Returnerar null om listan är tom så
 *  att inget schema emitteras för platshållare. Fäst på organisationen (#business).
 *  OBS: Google visar normalt inte self-serving omdömen som rich result, men datan
 *  är korrekt strukturerad och används av bl.a. AI/entitetsförståelse. */
export function reviewsSchema(reviews: Review[]) {
  if (!reviews.length) return null;
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#business`,
    name: site.company,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Math.round(avg * 10) / 10,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      reviewBody: r.text,
    })),
  };
}

/** Breadcrumb-schema. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
