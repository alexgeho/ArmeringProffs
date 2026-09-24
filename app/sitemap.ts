import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { services } from "@/config/services";
import { posts } from "@/config/blog";
import { cities } from "@/config/cities";

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
  static: "2026-09-24", // startsidan: PrefabShowcase (2026-09-24)
  products: "2026-09-24", // config/products.ts (väggkorgar i armeringskorgar 2026-09-24)
  services: "2026-09-23", // config/services.ts + animerad scen på /tjanster/bockningslista (2026-09-23)
  cities: "2026-09-08", // app/armering/[slug]/page.tsx (GuidesTeaser tillagd)
} as const;

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
    { url: u("/blogg"), lastModified: UPDATED.static, changeFrequency: "weekly", priority: 0.7 },
    { url: u("/om-oss"), lastModified: UPDATED.static, changeFrequency: "yearly", priority: 0.5 },
    { url: u("/omdomen"), lastModified: UPDATED.static, changeFrequency: "monthly", priority: 0.5 },
    { url: u("/vanliga-fragor"), lastModified: UPDATED.static, changeFrequency: "monthly", priority: 0.6 },
    { url: u("/kontakt"), lastModified: UPDATED.static, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/offert"), lastModified: UPDATED.static, changeFrequency: "yearly", priority: 0.8 },
    // Sidan finns och länkas från formulär/cookie-banner – ska inte saknas i sitemap.
    { url: u("/integritetspolicy"), lastModified: UPDATED.static, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: u(`/produkter/${p.slug}`),
    lastModified: UPDATED.products,
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

  return [...staticPages, ...productPages, ...servicePages, ...blogPages, ...cityPages];
}
