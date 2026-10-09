"use client";

import { useId, type ReactNode } from "react";

/*
  Formulärfält – en stil överallt. Etikett kopplad via htmlFor/useId,
  fel via aria-invalid + aria-describedby. Kant ≥3:1 (token --field), höjd 48 px.
*/

export const fieldClass =
  "h-12 w-full min-w-0 rounded-control border border-field bg-card px-4 text-ink placeholder:text-muted transition-colors focus:border-accent focus-visible:outline-2 focus-visible:outline-accent aria-invalid:border-danger disabled:cursor-not-allowed disabled:bg-surface disabled:text-muted";

const labelClass = "text-sm font-medium text-ink";

function Label({ id, children, hidden }: { id: string; children: ReactNode; hidden?: boolean }) {
  return (
    <label htmlFor={id} className={hidden ? "sr-only" : labelClass}>
      {children}
    </label>
  );
}

function Error({ id, children }: { id: string; children?: ReactNode }) {
  if (!children) return null;
  return (
    <p id={id} className="text-sm text-danger">
      {children}
    </p>
  );
}

type Common = {
  label: string;
  /** Etiketten bara för skärmläsare (placeholder visar den visuellt). */
  hideLabel?: boolean;
  error?: ReactNode;
  className?: string;
};

export function TextField({
  label,
  hideLabel,
  error,
  className = "",
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  name,
  type = "text",
  required,
  inputMode,
  autoComplete,
}: Common & {
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  type?: string;
  required?: boolean;
  inputMode?: "decimal" | "numeric" | "tel" | "email" | "text";
  autoComplete?: string;
}) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className={`grid min-w-0 gap-1.5 ${className}`}>
      <Label id={id} hidden={hideLabel}>{label}</Label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={required}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={fieldClass}
      />
      <Error id={errId}>{error}</Error>
    </div>
  );
}

export function SelectField({
  label,
  hideLabel,
  error,
  className = "",
  value,
  onChange,
  children,
}: Common & { value: string; onChange: (v: string) => void; children: ReactNode }) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className={`grid min-w-0 gap-1.5 ${className}`}>
      <Label id={id} hidden={hideLabel}>{label}</Label>
      {/* Egen pil: samma avstånd till högerkanten som texten har till vänsterkanten (16 px). */}
      <div className="relative min-w-0">
        <select
          id={id}
          value={value}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errId : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${fieldClass} appearance-none truncate pr-10`}
        >
          {children}
        </select>
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted">
          <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <Error id={errId}>{error}</Error>
    </div>
  );
}

export function TextArea({
  label,
  hideLabel,
  error,
  className = "",
  name,
  rows = 4,
  defaultValue,
  placeholder,
}: Common & { name?: string; rows?: number; defaultValue?: string; placeholder?: string }) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className={`grid min-w-0 gap-1.5 ${className}`}>
      <Label id={id} hidden={hideLabel}>{label}</Label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        className={`${fieldClass} h-auto py-3`}
      />
      <Error id={errId}>{error}</Error>
    </div>
  );
}
