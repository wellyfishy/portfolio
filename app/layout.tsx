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
  title: "wellyfishy | Fullstack Developer",
  description:
    "Portfolio of wellyfishy. Fullstack developer building realtime tournament engines, offline-first systems, and web applications.",
  keywords: [
    "wellyfishy",
    "Portfolio",
    "Fullstack Developer",
    "Django",
    "Next.js",
    "Tournament Management",
    "Realtime Scoring"
  ],
  authors: [{ name: "wellyfishy", url: "https://wellyfishy.ambrilindo.com" }],
  openGraph: {
    title: "wellyfishy | Fullstack Developer",
    description:
      "Fullstack developer building realtime tournament engines, offline-first systems, and web applications.",
    url: "https://wellyfishy.ambrilindo.com",
    siteName: "wellyfishy Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
