"use client";

import { useState } from "react";
import { IconCheck } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({
  compact = false,
  source = "webbformulär",
  defaultMessage,
}: {
  compact?: boolean;
  source?: string;
  /** Förifylld text i meddelandefältet (t.ex. en beräkning från kalkylatorn). */
  defaultMessage?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("source", source);
    setStatus("sending");
    try {
      // Skickas som multipart/form-data så att en bifogad ritning/bockningslista följer med.
      const res = await fetch("/api/lead", { method: "POST", body: data });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
      form.reset();
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
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Namn – alltid full bredd, valfritt */}
      <Field name="name" label="Namn / företag" placeholder="Namn eller företag" />

      {compact ? (
        /* Ett kombinerat kontaktfält – telefon eller e-post */
        <Field
          name="contact"
          label="Telefon / E-post"
          placeholder="07x-xxx xx xx eller namn@exempel.se"
          required
        />
      ) : (
        /* Full form: telefon + e-post var för sig */
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="phone" label="Telefon" type="tel" placeholder="07x-xxx xx xx" required />
          <Field name="email" label="E-post" type="email" placeholder="namn@exempel.se" required />
        </div>
      )}

      {/* Extra fält bara i den fulla formen (offert/kontakt) */}
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="location" label="Leveransort" placeholder="T.ex. Göteborg" />
          <Field name="quantity" label="Mängd / dimension" placeholder="T.ex. 2 ton, Ø12 kamstål" />
        </div>
      )}

      {/* Meddelande – både i hero och full form */}
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Beskriv ditt projekt
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          // key gör att fältet uppdateras när en ny beräkning skickas in från kalkylatorn.
          key={defaultMessage}
          defaultValue={defaultMessage}
          placeholder="T.ex. armering till betongplatta 8 × 10 m – räkna gärna på ritningen jag bifogar."
          className="rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none"
        />
      </div>

      {/* Bifoga ritning/bockningslista – både i hero och full form */}
      <div className="grid gap-1.5">
        <label htmlFor="drawing" className="text-sm font-medium text-ink">
          Ritning / bockningslista <span className="font-normal text-muted">(valfritt)</span>
        </label>
        <input
          id="drawing"
          name="drawing"
          type="file"
          accept=".pdf,.dwg,.dxf,.xls,.xlsx,.csv,.doc,.docx,.png,.jpg,.jpeg,.zip"
          className="rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink-soft file:mr-3 file:rounded-md file:border-0 file:bg-brand-light file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand hover:file:bg-orange-100 focus:border-brand focus:outline-none"
        />
        <p className="text-xs text-muted">PDF, DWG/DXF, Excel, bild eller zip. Max ca 10 MB.</p>
      </div>

      <label className="flex items-start gap-2 text-sm text-ink-soft">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-[var(--color-brand)]" />
        <span>
          Jag godkänner att mina uppgifter behandlas enligt{" "}
          <a href="/integritetspolicy" className="text-brand underline">integritetspolicyn</a>.
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
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-lg border border-line bg-white px-4 text-ink placeholder:text-muted focus:border-brand focus:outline-none"
      />
    </div>
  );
}
