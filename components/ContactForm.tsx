"use client";

import { useState } from "react";
import { IconCheck } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({
  compact = false,
  source = "webbformulär",
  defaultMessage,
  onDark = false,
}: {
  compact?: boolean;
  source?: string;
  /** Förifylld text i meddelandefältet (t.ex. en beräkning från kalkylatorn). */
  defaultMessage?: string;
  /** Formuläret ligger direkt på mörk bakgrund (transparent kort i hero). */
  onDark?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("source", source);
    setStatus("sending");
    try {
      // Statisk sajt: formuläret postar till en PHP-mejlare (sendmail.php) i docroot.
      // Skickas som multipart/form-data så att en bifogad ritning/bockningslista följer med.
      const res = await fetch("/sendmail.php", { method: "POST", body: data });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
      form.reset();
      setFileName("");
      // GA4-konvertering: mät varje skickad offertförfrågan (om gtag finns).
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", "generate_lead", { form_source: source });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl bg-brand-light p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <IconCheck className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-bold text-ink">Tack för din förfrågan!</h3>
        <p className="text-ink-soft">Vi återkommer så snart som möjligt med en offert på din armering.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid min-w-0 grid-cols-1 gap-4">
      {/* Honeypot mot spam-bots: dolt fält som människor inte ser. Fylls det i
          slänger sendmail.php förfrågan. aria-hidden + tabindex -1 + autocomplete off. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden" style={{ position: "absolute" }}>
        <label htmlFor="company_website">Lämna tomt</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Minimalistiskt: bara placeholder synlig, etiketten finns för skärmläsare (sr-only). */}
      <Field name="name" label="Namn / företag" />

      {compact ? (
        <Field name="contact" label="Telefon eller e-post" required />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="phone" label="Telefon" type="tel" required />
          <Field name="email" label="E-post" type="email" required />
        </div>
      )}

      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="location" label="Leveransort" />
          <Field name="quantity" label="Mängd / dimension" />
        </div>
      )}

      <div className="grid min-w-0">
        <label htmlFor="message" className="sr-only">Beskriv ditt projekt</label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          // key gör att fältet uppdateras när en ny beräkning skickas in från kalkylatorn.
          key={defaultMessage}
          defaultValue={defaultMessage}
          placeholder="Beskriv ditt projekt"
          className="w-full min-w-0 rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none"
        />
      </div>

      {/* Bifoga ritning/bockningslista: egen knapp i stället för webbläsarens "Choose File". */}
      <label className={`flex min-w-0 cursor-pointer items-center gap-2 rounded-lg border border-dashed px-4 py-3 text-sm hover:border-brand focus-within:border-brand ${onDark ? "border-white/40 text-slate-100" : "border-line text-ink-soft"}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-brand" aria-hidden="true">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="min-w-0 truncate">{fileName || "Bifoga ritning eller bockningslista"}</span>
        <input
          id="drawing"
          name="drawing"
          type="file"
          accept=".pdf,.dwg,.dxf,.xls,.xlsx,.csv,.doc,.docx,.png,.jpg,.jpeg,.zip"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          className="sr-only"
        />
      </label>

      <label className={`flex items-center gap-2 text-sm ${onDark ? "text-slate-100" : "text-ink-soft"}`}>
        <input type="checkbox" name="consent" required className="h-4 w-4 shrink-0 accent-[var(--color-brand)]" />
        <span className="min-w-0">
          Jag godkänner <a href="/integritetspolicy/" className="text-brand underline">integritetspolicyn</a>
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-brand px-6 font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Skickar..." : "Skicka förfrågan"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Något gick fel. Ring oss gärna direkt så hjälper vi dig.
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid min-w-0">
      <label htmlFor={name} className="sr-only">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={required ? `${label} *` : label}
        className="h-12 w-full min-w-0 rounded-lg border border-line bg-white px-4 text-ink placeholder:text-muted focus:border-brand focus:outline-none"
      />
    </div>
  );
}
