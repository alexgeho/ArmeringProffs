import { site } from "@/config/site";
import type { Faq } from "@/config/faq";

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
  const hasAddress = site.address.street !== "Gatuadress 1"; // platshållare
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#business`,
    name: site.company,
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
