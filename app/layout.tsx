import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

import { PanelNav } from "@/components/shell/PanelNav";
import { Sidebar } from "@/components/shell/Sidebar";

/**
 * Poppins carries the interface; JetBrains Mono is kept for technology chips
 * and code-adjacent metadata, where a monospace texture is meaningful rather
 * than merely tiring.
 */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
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
    "Full-stack developer working across web applications, AI engineering and game community infrastructure.",
  openGraph: {
    title: "Samir Agrawal — Full-Stack Developer",
    description:
      "Full-stack developer working across web applications, AI engineering and game community infrastructure.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${jetbrainsMono.variable}`}>
        <a
          href="#panel"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>

        {/* pb on mobile clears the fixed bottom nav */}
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 pb-24 pt-6 sm:px-6 lg:flex-row lg:items-start lg:gap-7 lg:pb-8 xl:px-8">
          <Sidebar />

          <main
            id="panel"
            className="card relative w-full min-w-0 shadow-card rounded-shell"
          >
            <PanelNav />
            <div className="p-6 sm:p-8 xl:p-10">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
