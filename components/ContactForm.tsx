"use client";

import { useState } from "react";
import { IconCheck } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ compact = false, source = "webbformulär" }: { compact?: boolean; source?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
      form.reset();
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
        <p className="text-ink-soft">Vi återkommer så snart som möjligt med en kostnadsfri offert.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field name="name" label="Namn" placeholder="För- och efternamn" required />
        <Field name="phone" label="Telefon" type="tel" placeholder="07x-xxx xx xx" required />
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field name="email" label="E-post" type="email" placeholder="namn@exempel.se" required />
        <Field name="location" label="Ort" placeholder="T.ex. Nacka" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Beskriv ditt projekt
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="T.ex. platta på mark ca 60 m² för tillbyggnad..."
          className="rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none"
        />
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
