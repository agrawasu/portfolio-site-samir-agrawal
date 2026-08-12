import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";

/**
 * Two families, each doing what it is good at: Inter carries prose and
 * headings, JetBrains Mono is reserved for labels, metadata and technology
 * names, where the monospace texture reads as deliberate rather than tiring.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samir-agrawal-portfolio.netlify.app"),
  title: {
    default: "Samir Agrawal — Full-Stack Developer",
    template: "%s — Samir Agrawal",
  },
  description:
    "Full-stack developer working across web applications, AI engineering, game community infrastructure, and 3D.",
  openGraph: {
    title: "Samir Agrawal — Full-Stack Developer",
    description:
      "Full-stack developer working across web applications, AI engineering, game community infrastructure, and 3D.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e2124",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
