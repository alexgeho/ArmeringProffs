import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { VisitSourceRecorder } from "@/components/VisitSource";
import { PhoneClickTracker } from "@/components/PhoneClickTracker";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/lib/jsonld";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Sökord först – Google kapar titlar efter ~60 tecken.
    default: `Prefab armering – klippt & bockad i hela Sverige | ${site.company}`,
    template: `%s | ${site.company}`,
  },
  description:
    "Prefab armering i hela Sverige – klippt & bockad efter bockningslista, armeringskorgar, nät och kamstål B500B. Leverans och montage. Begär kostnadsfri offert.",
  keywords: [
    "prefab armering",
    "prefabricerad armering",
    "klippt och bockad armering",
    "armeringskorgar",
    "svetsad armering",
    "armeringsnät",
    "armeringsjärn",
    "armering hela Sverige",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: site.url,
    siteName: site.company,
    title: `${site.company} | ${site.tagline}`,
    description:
      "Prefab armering i hela Sverige – klippt & bockad, armeringskorgar, svetsad armering och nät. Tillverkning, leverans och montage.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company} | ${site.tagline}`,
    description: "Prefabricerad armering i hela Sverige – tillverkning, leverans och montage.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent gaId={site.gaId} metaPixelId={site.metaPixelId} />
        <VisitSourceRecorder />
        <PhoneClickTracker />
      </body>
    </html>
  );
}
