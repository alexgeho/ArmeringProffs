import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Shared hosting (CloudLinux/Inleed) har hårda process-/trådgränser (nproc).
  // Begränsa build-workers så att "Collecting page data" inte försöker spawna
  // för många trådar (OS error 11: Resource temporarily unavailable).
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  // Bilderna är redan nedskalade och konverterade till WebP i public/images.
  // På delad hosting (Passenger, cpus:1) undviker vi Next runtime-optimizern
  // – den spawnar trådar och kan slå i nproc-gränsen. Filerna serveras statiskt.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
