import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { services } from "@/config/services";
import { posts } from "@/config/blog";
import { cities } from "@/config/cities";
import { landings } from "@/config/landings";

// Krävs för statisk export (output: export): generera sitemap.xml vid build.
export const dynamic = "force-static";

/**
 * lastmod per innehållsgrupp.
 *
 * Google använder <lastmod> för att prioritera crawl-kön – men IGNORERAR värdet
 * om det bedöms som opålitligt. Därför sätter vi INTE build-datum (då skulle varje
 * deploy påstå att alla sidor ändrats), utan datumet då gruppens innehåll faktiskt
 * ändrades senast.
 *
 * ⚠️ Uppdatera konstanten när du ändrar innehållet i motsvarande config/mall.
 */
const UPDATED = {
  // app/page.tsx, /leverans, /om-oss, /kontakt, /offert, /vanliga-fragor,
  // /omdomen, /armeringskalkylator, /integritetspolicy – senast ändrade 2026-09-08.
  static: "2026-11-02", // startsidan: titel + sortiment-text + B2B-block (2026-11-02)
  products: "2026-11-02", // config/products.ts + landings (våg 2026-11-02: klippt-och-bockad, armeringsjarn, armeringsnat, prefab-armering, armeringsleverantor, armeringsjarn-staket)
  services: "2026-11-13", // config/services*.ts (armeringsspecifikation: specning, ilf-armering: titel, 2026-11-13)
  cities: "2026-11-25", // config/cities.ts + mall (Malmö & Skåne i title/H1, kortare description – SEO 2026-11-25)
  tools: "2026-10-14", // /viktkalkylator, /natkalkylator, /forankringslangd (components/SmaKalkylatorer.tsx)
} as const;

/**
 * Enskilda sidor som ändrats senare än sin grupp (sökväg utan avslutande "/").
 * Ta bort raden när gruppens datum ovan har passerat sidans datum.
 */
const CHANGED: Record<string, string> = {
  // SEO 2026-11-18: tre produktsidor utbyggda (mått, beställning, FAQ) + nya internlänkar.
  "/produkter/byglar-och-hakar": "2026-11-25",
  "/produkter/armeringskorgar": "2026-11-19",
  "/produkter/villakorg-kantbalksarmering": "2026-11-19",
  "/produkter/klippt-och-bockad": "2026-11-18",
  "/prefab-armering": "2026-11-25",
  "/armering-for-byggentreprenorer": "2026-11-18",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  // trailingSlash: true i next.config → kanoniska URL:er slutar med "/". Håll
  // sitemap konsekvent så att den matchar canonical-taggarna.
  const u = (path: string) => (path === "/" ? `${base}/` : `${base}${path}/`);

  const staticPages: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: UPDATED.static, changeFrequency: "weekly", priority: 1 },
    { url: u("/produkter"), lastModified: UPDATED.products, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/tjanster"), lastModified: UPDATED.services, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/leverans"), lastModified: UPDATED.static, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/armeringskalkylator"), lastModified: UPDATED.static, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/viktkalkylator"), lastModified: UPDATED.tools, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/natkalkylator"), lastModified: UPDATED.tools, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/forankringslangd"), lastModified: UPDATED.tools, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/blogg"), lastModified: UPDATED.static, changeFrequency: "weekly", priority: 0.7 },
    { url: u("/om-oss"), lastModified: UPDATED.static, changeFrequency: "yearly", priority: 0.5 },
    { url: u("/vanliga-fragor"), lastModified: UPDATED.static, changeFrequency: "monthly", priority: 0.6 },
    { url: u("/kontakt"), lastModified: UPDATED.static, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/offert"), lastModified: UPDATED.static, changeFrequency: "yearly", priority: 0.8 },
    { url: u("/villkor"), lastModified: "2026-10-24", changeFrequency: "yearly", priority: 0.3 },
    // Sidan finns och länkas från formulär/cookie-banner – ska inte saknas i sitemap.
    // /integritetspolicy är noindex – hör inte hemma i sitemap.
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: u(`/produkter/${p.slug}`),
    lastModified: CHANGED[`/produkter/${p.slug}`] ?? UPDATED.products,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: u(`/tjanster/${s.slug}`),
    lastModified: UPDATED.services,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: u(`/blogg/${p.slug}`),
    lastModified: p.updated ?? p.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: u(`/armering/${c.slug}`),
    lastModified: UPDATED.cities,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const landingPages: MetadataRoute.Sitemap = landings.map((l) => ({
    url: u(`/${l.slug}`),
    lastModified: CHANGED[`/${l.slug}`] ?? UPDATED.products,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...servicePages, ...landingPages, ...blogPages, ...cityPages];
}
