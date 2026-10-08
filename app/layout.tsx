import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wellyfishy.ambrilindo.com"),
  title: "wellyfishy | Software Engineer - Portfolio",
  description:
    "Portfolio & Systems Showcase by wellyfishy (wellyfishy.ambrilindo.com). Specializing in realtime tournament scoring engines, distributed web applications, and resilient offline-first systems.",
  keywords: [
    "wellyfishy",
    "Portfolio",
    "Ambrilindo",
    "Sports Technology",
    "Realtime Scoring System",
    "Software Engineer",
    "Django",
    "Next.js"
  ],
  authors: [{ name: "wellyfishy", url: "https://wellyfishy.ambrilindo.com" }],
  openGraph: {
    title: "wellyfishy | Software Engineer - Portfolio",
    description:
      "Crafting high-performance realtime tournament systems, resilient local-first engines, and distributed web applications.",
    url: "https://wellyfishy.ambrilindo.com",
    siteName: "wellyfishy Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.className}>
      <body>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
