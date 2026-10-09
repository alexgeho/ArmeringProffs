"use client";

import { useState } from "react";
import Link from "next/link";
import { IconCheck } from "./icons";
import { TextField, TextArea } from "./form";
import { Button } from "./ui";
import { readVisitSource } from "./VisitSource";

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
    const visit = readVisitSource();
    if (visit) {
      data.append("landing", visit.landing);
      data.append("referrer", visit.referrer);
      data.append("utm", visit.utm);
    }
    data.append("page", window.location.pathname);
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
      <div role="status" className="flex flex-col items-center gap-3 rounded-card bg-brand-light p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cta text-white">
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

      <TextArea
        name="message"
        label="Beskriv ditt projekt"
        hideLabel
        rows={compact ? 3 : 4}
        // key gör att fältet uppdateras när en ny beräkning skickas in från kalkylatorn.
        key={defaultMessage}
        defaultValue={defaultMessage}
        placeholder="Beskriv ditt projekt"
      />

      {/* Bifoga ritning/bockningslista: egen knapp i stället för webbläsarens "Choose File". */}
      <label className={`flex min-h-12 min-w-0 cursor-pointer items-center gap-2 rounded-control border border-dashed px-4 py-3 text-sm hover:border-accent focus-within:border-accent focus-within:outline-2 focus-within:outline-accent ${onDark ? "border-white/40 text-slate-100" : "border-field text-ink-soft"}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-accent" aria-hidden="true">
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

      {/* Samtycke ges genom att skicka (texten under knappen) – sendmail.php kräver fältet. */}
      <input type="hidden" name="consent" value="1" />

      <Button type="submit" loading={status === "sending"}>
        {status === "sending" ? "Skickar…" : "Skicka förfrågan"}
      </Button>

      <p className={`-mt-1 text-xs ${onDark ? "text-slate-300" : "text-muted"}`}>
        Genom att skicka godkänner du vår{" "}
        <Link href="/integritetspolicy" className={`underline ${onDark ? "hover:text-white" : "hover:text-brand"}`}>integritetspolicy</Link>.
      </p>

      {status === "error" && (
        <p role="alert" className={`text-sm ${onDark ? "text-red-300" : "text-danger"}`}>
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
  const auto: Record<string, string> = { name: "name", phone: "tel", email: "email", contact: "on" };
  return (
    <TextField
      name={name}
      label={label}
      hideLabel
      type={type}
      required={required}
      autoComplete={auto[name]}
      placeholder={required ? `${label} *` : label}
    />
  );
}
