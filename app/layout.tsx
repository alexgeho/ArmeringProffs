import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, localBusinessSchema } from "@/lib/jsonld";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.company} | ${site.tagline}`,
    template: `%s | ${site.company}`,
  },
  description:
    "Vi gjuter betongplattor och husgrunder i Stockholm med omnejd. Platta på mark, garageplatta och grundläggning – fast pris, ROT-avdrag och garanti.",
  keywords: [
    "gjuta betongplatta",
    "betongplatta stockholm",
    "platta på mark",
    "husgrund",
    "garageplatta",
    "grundläggning stockholm",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: site.url,
    siteName: site.company,
    title: `${site.company} | ${site.tagline}`,
    description:
      "Gjutning av betongplattor och husgrunder i Stockholm. Fast pris, ROT-avdrag och garanti.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.company }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company} | ${site.tagline}`,
    description: "Gjutning av betongplattor och husgrunder i Stockholm.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
