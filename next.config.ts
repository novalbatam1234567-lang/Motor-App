import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Motor",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
