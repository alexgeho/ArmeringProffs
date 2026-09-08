import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Helt statisk export (out/). Sajten hostas som statiska filer + PHP-mejlare på
  // Inleed – ingen Node-server, inga API-routes, ingen middleware. Detta tar bort
  // nproc-/process-problemen (cagefs_enter: Unable to fork) helt.
  output: "export",
  // trailingSlash: varje route exporteras som .../index.html och serveras nativt av
  // Apache/LiteSpeed via DirectoryIndex (utan .html-rewrite). Krävs för att nästlade
  // routes (/armering/[slug] m.fl.) inte ska bli kataloger utan index → 403.
  trailingSlash: true,
  // Bilderna är redan nedskalade/WebP i public/images – ingen runtime-optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
