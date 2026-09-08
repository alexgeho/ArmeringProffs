import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Krävs för statisk export (output: export): generera robots.txt vid build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
