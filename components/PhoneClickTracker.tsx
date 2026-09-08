"use client";

import { useEffect } from "react";

/**
 * Skickar ett GA4-event `phone_click` när en besökare klickar på ett telefon-
 * nummer (valfri `tel:`-länk i headern, hero, footer, produkt-/stads-/tjänstesidor).
 * Delegerad lyssnare på document → fångar alla nuvarande och framtida tel:-länkar
 * utan att varje länk behöver ändras. No-op om gtag inte laddats (t.ex. utan
 * cookie-samtycke), så inga cookies sätts utan consent.
 */
export function PhoneClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      const link = el?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", "phone_click", {
        event_category: "engagement",
        link_url: link.getAttribute("href") ?? undefined,
      });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
