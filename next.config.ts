import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Shared hosting (CloudLinux/Inleed) har hårda process-/trådgränser (nproc).
  // Begränsa build-workers så att "Collecting page data" inte försöker spawna
  // för många trådar (OS error 11: Resource temporarily unavailable).
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
