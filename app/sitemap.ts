import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/config/products";
import { posts } from "@/config/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/produkter`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leverans`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blogg`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/om-oss`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/kontakt`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/offert`, changeFrequency: "yearly", priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/produkter/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blogg/${p.slug}`,
    lastModified: p.updated ?? p.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
