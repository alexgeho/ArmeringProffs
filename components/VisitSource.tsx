"use client";

import { useEffect } from "react";

/**
 * Sparar varifrån besökaren kom (första sidan, referrer, UTM/gclid) i sessionStorage
 * vid första sidvisningen i fliken. Skickas bara med om besökaren själv skickar
 * offertformuläret – ingen cookie, ingen spårning mellan besök.
 */
const KEY = "ap_visit";

export type VisitSource = {
  landing: string;
  referrer: string;
  utm: string;
};

export function VisitSourceRecorder() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
      const url = new URL(window.location.href);
      const utm = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid", "fbclid"]
        .map((k) => (url.searchParams.get(k) ? `${k}=${url.searchParams.get(k)}` : ""))
        .filter(Boolean)
        .join(" ");
      // Egen domän som referrer = intern navigering, räknas som direkt.
      const ref = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : "";
      const v: VisitSource = { landing: url.pathname, referrer: ref, utm };
      sessionStorage.setItem(KEY, JSON.stringify(v));
    } catch {
      /* sessionStorage blockerad – då skickas bara källan */
    }
  }, []);
  return null;
}

export function readVisitSource(): VisitSource | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as VisitSource) : null;
  } catch {
    return null;
  }
}
