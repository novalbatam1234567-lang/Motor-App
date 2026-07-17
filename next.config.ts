import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export untuk XAMPP Apache
  basePath: "/Motor", // Set basePath untuk folder Motor di XAMPP
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;