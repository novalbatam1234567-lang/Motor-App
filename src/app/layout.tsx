import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MotoDiagnose | Smart Motorcycle Diagnostics",
  description: "Sistem pakar diagnostik motor matic Indonesia — identifikasi masalah motor secara instan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Cosmic animated background */}
        <div className="cosmic-bg">
          {/* Nebula glows */}
          <div className="nebula nebula-1" />
          <div className="nebula nebula-2" />
          <div className="nebula nebula-3" />

          {/* Multi-layer stars */}
          <div id="stars-sm" />
          <div id="stars-md" />
          <div id="stars-lg" />

          {/* Shooting stars */}
          <div className="shooting-stars">
            <div className="shooting-star s1" />
            <div className="shooting-star s2" />
            <div className="shooting-star s3" />
            <div className="shooting-star s4" />
            <div className="shooting-star s5" />
            <div className="shooting-star s6" />
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
