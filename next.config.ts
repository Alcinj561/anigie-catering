import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (for example "/anigie-catering") when the site is
// served from a sub-path, such as GitHub Pages. Leave it unset for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
