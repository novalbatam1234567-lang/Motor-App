import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Hapus atau comment baris ini agar aplikasi berjalan di mode serverless
  // basePath: "/Motor", // Hapus atau comment agar aplikasi terbuka di halaman utama (root)
  images: {
    unoptimized: true,
  }
};

export default nextConfig;