import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { cities } from "@/config/cities";
import { posts } from "@/config/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tjanster`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/priser`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/omraden`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blogg`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/om-oss`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/kontakt`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/offert`, changeFrequency: "yearly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/tjanster/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/omraden/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blogg/${p.slug}`,
    lastModified: p.updated ?? p.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages];
}
