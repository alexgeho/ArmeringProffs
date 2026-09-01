import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    "Prefabricerad armering i hela Sverige – klippt & bockad armering, armeringskorgar, svetsad armering och armeringsnät, kamstål B500B och distanser. Tillverkning efter bockningslista, leverans och montage. Begär offert.",
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
        {site.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
            </Script>
          </>
        )}
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
