"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

/**
 * GDPR-samtycke för cookies. Google Analytics OCH Meta Pixel laddas ENBART efter
 * att besökaren klickat "Godkänn" – innan dess sätts inga analys-/retargeting-
 * cookies. Valet sparas i localStorage så att bannern inte visas igen.
 */

const KEY = "ap-cookie-consent"; // "granted" | "denied"
type Consent = "granted" | "denied";

export function CookieConsent({ gaId, metaPixelId }: { gaId?: string; metaPixelId?: string }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Läser sparat samtycke först EFTER montering (localStorage saknas vid SSR).
    // Detta är en legitim hydrerings-guard, inte en cascading-render-bugg.
    /* eslint-disable-next-line react-hooks/set-state-in-effect */
    setMounted(true);
    const stored = localStorage.getItem(KEY);
    if (stored === "granted" || stored === "denied") setConsent(stored);
  }, []);

  function choose(value: Consent) {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* localStorage kan vara blockerat – ignorera, valet gäller sessionen */
    }
    setConsent(value);
  }

  return (
    <>
      {/* Ladda GA först efter uttryckligt samtycke */}
      {gaId && consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      )}

      {/* Meta Pixel (retargeting) – laddas först efter uttryckligt samtycke */}
      {metaPixelId && consent === "granted" && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`}
        </Script>
      )}

      {/* Samtyckesbanner – visas bara innan besökaren gjort ett val */}
      {mounted && consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Samtycke till cookies"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/95 backdrop-blur"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-relaxed text-ink-soft">
              Vi använder cookies för att mäta trafik och förbättra sajten. Analys-cookies
              (Google Analytics) laddas bara om du godkänner.{" "}
              <Link href="/integritetspolicy" className="text-brand underline">
                Läs mer i integritetspolicyn
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-line px-4 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
              >
                Avböj
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="inline-flex h-10 items-center justify-center rounded-lg bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Godkänn
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
