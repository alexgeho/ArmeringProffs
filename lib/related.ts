import { posts, type Post } from "@/config/blog";

const norm = (href: string) => href.replace(/\/+$/, "");

/**
 * Guider till en kommersiell sida (produkt/tjänst/landning).
 * Först artiklar vars `target` pekar på sidan (artikel ⇄ tjänst åt båda håll),
 * sedan fyllnad utifrån gemensamma sökord.
 */
export function relatedGuides(href: string, keywords: string[], n = 3): Post[] {
  const page = norm(href);
  const own = new Set(keywords.flatMap((k) => k.toLowerCase().split(/\s+/)).filter((w) => w.length > 3));
  return posts
    .map((post) => {
      const words = new Set(post.keywords.flatMap((k) => k.toLowerCase().split(/\s+/)));
      let score = post.target && norm(post.target.href) === page ? 100 : 0;
      for (const w of own) if (words.has(w)) score++;
      return { post, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((r) => r.post);
}
