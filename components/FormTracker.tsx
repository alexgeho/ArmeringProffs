"use client";

import { useEffect } from "react";

/**
 * Anonym formulärstatistik till /formlog.php (inga fältvärden, inga cookies):
 * start (första fokus), submit, invalid (vilka fält som fick fel), sent/error
 * (svar från /sendmail.php). Ger svar på var besökare ger upp i formulären.
 */
export function FormTracker() {
  useEffect(() => {
    const started = new WeakSet<HTMLFormElement>();
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const formId = (f: HTMLFormElement) => {
      const all = Array.from(document.querySelectorAll("form"));
      return f.id || f.getAttribute("aria-label") || `form${all.indexOf(f) + 1}`;
    };
    const send = (e: string, f = "", x = "") => {
      const body = JSON.stringify({ e, p: location.pathname, f, x, m: mobile });
      try {
        if (!navigator.sendBeacon?.("/formlog.php", new Blob([body], { type: "application/json" }))) {
          fetch("/formlog.php", { method: "POST", body, keepalive: true }).catch(() => {});
        }
      } catch {}
    };

    const onFocus = (ev: FocusEvent) => {
      const el = ev.target as HTMLElement | null;
      const form = el?.closest?.("form");
      if (!form || started.has(form)) return;
      started.add(form);
      send("start", formId(form), (el as HTMLInputElement).name || "");
    };
    const onSubmit = (ev: Event) => {
      const form = ev.target as HTMLFormElement;
      if (!(form instanceof HTMLFormElement)) return;
      const id = formId(form);
      send("submit", id);
      window.setTimeout(() => {
        const bad = Array.from(form.querySelectorAll<HTMLInputElement>('[aria-invalid="true"]'))
          .map((i) => i.name || i.id)
          .filter(Boolean);
        if (bad.length) send("invalid", id, bad.join(","));
      }, 500);
    };

    // Svar från mejlskriptet (utan innehåll): ok / felkod.
    const origFetch = window.fetch;
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      const res = await origFetch(...args);
      try {
        const url = typeof args[0] === "string" ? args[0] : (args[0] as Request).url ?? String(args[0]);
        if (url.includes("sendmail.php")) {
          if (res.ok) send("sent");
          else {
            const j = await res.clone().json().catch(() => ({}));
            send("error", "", `${res.status} ${(j as { error?: string }).error ?? ""}`);
          }
        }
      } catch {}
      return res;
    };

    document.addEventListener("focusin", onFocus, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("focusin", onFocus, true);
      document.removeEventListener("submit", onSubmit, true);
      window.fetch = origFetch;
    };
  }, []);
  return null;
}
