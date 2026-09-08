import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { services } from "@/config/services";
import { posts } from "@/config/blog";
import { cities } from "@/config/cities";

// Krävs för statisk export (output: export): generera sitemap.xml vid build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  // trailingSlash: true i next.config → kanoniska URL:er slutar med "/". Håll
  // sitemap konsekvent så att den matchar canonical-taggarna.
  const u = (path: string) => (path === "/" ? `${base}/` : `${base}${path}/`);

  const staticPages: MetadataRoute.Sitemap = [
    { url: u("/"), changeFrequency: "weekly", priority: 1 },
    { url: u("/produkter"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/tjanster"), changeFrequency: "monthly", priority: 0.8 },
    { url: u("/leverans"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/armeringskalkylator"), changeFrequency: "monthly", priority: 0.8 },
    { url: u("/blogg"), changeFrequency: "weekly", priority: 0.7 },
    { url: u("/om-oss"), changeFrequency: "yearly", priority: 0.5 },
    { url: u("/omdomen"), changeFrequency: "monthly", priority: 0.5 },
    { url: u("/vanliga-fragor"), changeFrequency: "monthly", priority: 0.6 },
    { url: u("/kontakt"), changeFrequency: "yearly", priority: 0.6 },
    { url: u("/offert"), changeFrequency: "yearly", priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: u(`/produkter/${p.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: u(`/tjanster/${s.slug}`),
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
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...servicePages, ...blogPages, ...cityPages];
}
