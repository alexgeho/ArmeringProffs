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
  context,
  onDark = false,
}: {
  compact?: boolean;
  source?: string;
  /** Underlag (kalkylatorns beräkning, bockningslista) – skickas som dolt fält, aldrig förifyllt. */
  context?: string;
  /** Formuläret ligger direkt på mörk bakgrund (transparent kort i hero). */
  onDark?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  function validate(data: FormData) {
    const next: { email?: string; phone?: string } = {};
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!email) next.email = "Fyll i din e-post.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Kontrollera e-postadressen.";
    if (phone && phone.replace(/\D/g, "").length < 6) next.phone = "Kontrollera telefonnumret.";
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (found.email || found.phone) {
      const first = form.querySelector<HTMLInputElement>(found.email ? 'input[name="email"]' : 'input[name="phone"]');
      first?.focus();
      return;
    }
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
    <form onSubmit={onSubmit} noValidate className={`grid min-w-0 grid-cols-1 gap-4 ${onDark ? "[--danger:#fca5a5]" : ""}`}>
      {/* Honeypot mot spam-bots: dolt fält som människor inte ser. Fylls det i
          slänger sendmail.php förfrågan. aria-hidden + tabindex -1 + autocomplete off. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden" style={{ position: "absolute" }}>
        <label htmlFor="company_website">Lämna tomt</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Minimalistiskt: bara placeholder synlig, etiketten finns för skärmläsare (sr-only). */}
      <Field name="name" label="Namn / företag" />

      {/* E-post krävs (svaret går dit), telefon är frivillig. */}
      {compact ? (
        <>
          <Field name="email" label="E-post" type="email" required error={errors.email} onEdit={() => setErrors((x) => ({ ...x, email: undefined }))} />
          <Field name="phone" label="Telefon" type="tel" error={errors.phone} onEdit={() => setErrors((x) => ({ ...x, phone: undefined }))} />
        </>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="email" label="E-post" type="email" required error={errors.email} onEdit={() => setErrors((x) => ({ ...x, email: undefined }))} />
          <Field name="phone" label="Telefon" type="tel" error={errors.phone} onEdit={() => setErrors((x) => ({ ...x, phone: undefined }))} />
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
        placeholder="Beskriv ditt projekt"
      />

      {/* Underlag (beräkning/bockningslista) följer med dolt – sendmail.php lägger det under «Underlag». */}
      {context && <input type="hidden" name="spec" value={context} />}

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
  error,
  onEdit,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  onEdit?: () => void;
}) {
  const auto: Record<string, string> = { name: "name", phone: "tel", email: "email" };
  const mode: Record<string, "tel" | "email"> = { phone: "tel", email: "email" };
  return (
    <TextField
      name={name}
      label={label}
      hideLabel
      type={type}
      required={required}
      error={error}
      onChange={error && onEdit ? () => onEdit() : undefined}
      inputMode={mode[name]}
      autoComplete={auto[name]}
      placeholder={required ? `${label} *` : label}
    />
  );
}
