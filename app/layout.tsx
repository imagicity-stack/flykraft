import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import RevealInit from "./components/RevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FLYKRAFT SYNERGIES | Conglomerate of Future-Ready Ventures",
  description:
    "FLYKRAFT SYNERGIES PRIVATE LIMITED is a multi-sector conglomerate spanning industry, education, media distribution, and beyond.",
  metadataBase: new URL("https://flykraft.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
