"use client";

import { useMemo, useState } from "react";
import { ContactForm } from "./ContactForm";
import { IconCheck } from "./icons";

/**
 * Armeringskalkylator – lead-magnet.
 * Användaren fyller i plattans mått och får en ungefärlig åtgång av
 * armeringsnät, kantjärn och distanser. Resultatet förifylls sedan i
 * offertformuläret så att steget till en offertförfrågan blir minimalt.
 *
 * OBS: Värdena är riktvärden. Exakt mängd och dimension ska följa
 * konstruktionsritning – det förtydligas i texten.
 */

type NatKey = "5x150" | "6x150" | "7x150";
type KantDim = "0" | "10" | "12" | "16";

const nat: Record<NatKey, { label: string; note: string }> = {
  "5x150": { label: "5×150 (Ø5 mm)", note: "Uterum, mindre plattor, golv" },
  "6x150": { label: "6×150 (Ø6 mm)", note: "Garage, villaplatta, platta på mark" },
  "7x150": { label: "7×150 (Ø7 mm)", note: "Tyngre laster, industri" },
};

const kant: Record<KantDim, string> = {
  "0": "Inga kantjärn (bara nät)",
  "10": "Ø10 mm kamjärn",
  "12": "Ø12 mm kamjärn",
  "16": "Ø16 mm kamjärn",
};

function toNumber(v: string): number {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function round(n: number, step = 1): number {
  return Math.round(n / step) * step;
}

export function ArmeringsKalkylator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [natKey, setNatKey] = useState<NatKey>("6x150");
  const [kantDim, setKantDim] = useState<KantDim>("12");
  const [kantAntal, setKantAntal] = useState("2");
  const [ort, setOrt] = useState("");

  const r = useMemo(() => {
    const L = toNumber(length);
    const W = toNumber(width);
    const antal = toNumber(kantAntal) || 0;
    const area = L * W;
    if (area <= 0) return null;

    // Nät: ytan + ~13 % för överlapp (1,5–2 rutor) och spill.
    const natM2 = round(area * 1.13);
    // Kantjärn: omkrets × antal järn per kant + ~10 % för skarvöverlapp.
    const omkrets = 2 * (L + W);
    const kantLpm = kantDim === "0" ? 0 : round(omkrets * antal * 1.1);
    // Distanser: riktvärde ca 1,5 st/m².
    const distanser = round(area * 1.5);
    // Bindtråd: grov tumregel ~0,2 kg/m².
    const bindtrad = Math.max(1, round(area * 0.2, 0.5));

    return { L, W, area: round(area, 0.1), natM2, kantLpm, distanser, bindtrad, omkrets: round(omkrets, 0.1) };
  }, [length, width, natKey, kantDim, kantAntal]);

  const spec = useMemo(() => {
    if (!r) return undefined;
    const lines = [
      "Armeringsberäkning (från kalkylatorn på armeringproffs.se):",
      `• Betongplatta: ${r.L} × ${r.W} m (${r.area} m²)`,
      `• Armeringsnät ${natKey}: ca ${r.natM2} m² (inkl. överlapp/spill)`,
    ];
    if (kantDim !== "0") {
      lines.push(`• Kantjärn Ø${kantDim}: ca ${r.kantLpm} lpm (${kantAntal} järn runt om)`);
    }
    lines.push(`• Distanser: ca ${r.distanser} st`);
    lines.push(`• Bindtråd: ca ${r.bindtrad} kg`);
    if (ort.trim()) lines.push(`• Leveransort: ${ort.trim()}`);
    lines.push("");
    lines.push("Stämmer detta? Räkna gärna på min ritning – jag bifogar den om jag har en.");
    return lines.join("\n");
  }, [r, natKey, kantDim, kantAntal, ort]);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      {/* Inmatning */}
      <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-ink">Din betongplatta</h2>
        <p className="mt-1 text-sm text-ink-soft">Fyll i måtten så räknar vi ut ungefärlig åtgång.</p>

        <div className="mt-6 grid gap-5">
          <div className="grid grid-cols-2 gap-4">
            <NumField label="Längd (m)" value={length} onChange={setLength} placeholder="8" />
            <NumField label="Bredd (m)" value={width} onChange={setWidth} placeholder="10" />
          </div>

          <SelectField label="Armeringsnät" value={natKey} onChange={(v) => setNatKey(v as NatKey)}>
            {(Object.keys(nat) as NatKey[]).map((k) => (
              <option key={k} value={k}>{nat[k].label} – {nat[k].note}</option>
            ))}
          </SelectField>

          <div className="grid grid-cols-2 gap-4">
            <SelectField label="Kantjärn" value={kantDim} onChange={(v) => setKantDim(v as KantDim)}>
              {(Object.keys(kant) as KantDim[]).map((k) => (
                <option key={k} value={k}>{kant[k]}</option>
              ))}
            </SelectField>
            <NumField
              label="Antal järn / kant"
              value={kantAntal}
              onChange={setKantAntal}
              placeholder="2"
              disabled={kantDim === "0"}
            />
          </div>

          <NumField label="Leveransort (valfritt)" value={ort} onChange={setOrt} placeholder="T.ex. Göteborg" text />
        </div>
      </div>

      {/* Resultat + offert */}
      <div className="grid gap-6">
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-bold text-ink">Ungefärlig åtgång</h2>
          {r ? (
            <>
              <dl className="mt-5 divide-y divide-line">
                <Row term={`Armeringsnät ${natKey}`} value={`ca ${r.natM2} m²`} />
                {kantDim !== "0" && <Row term={`Kantjärn Ø${kantDim}`} value={`ca ${r.kantLpm} lpm`} />}
                <Row term="Distanser" value={`ca ${r.distanser} st`} />
                <Row term="Bindtråd" value={`ca ${r.bindtrad} kg`} />
                <Row term="Plattans yta" value={`${r.area} m²`} />
              </dl>
              <p className="mt-4 text-xs text-muted">
                Riktvärden inkl. överlapp och spill. Exakt mängd och dimension ska följa
                konstruktionsritning – vi räknar gärna fram det åt dig i offerten.
              </p>
            </>
          ) : (
            <p className="mt-5 text-ink-soft">Fyll i längd och bredd så visas åtgången här.</p>
          )}
        </div>

        {r && (
          <div className="rounded-2xl border border-brand/30 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2 text-brand">
              <IconCheck className="h-5 w-5" />
              <h2 className="text-lg font-bold text-ink">Begär offert på din beräkning</h2>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Din beräkning är redan ifylld nedan. Lägg till telefon eller e-post så återkommer vi
              med pris och leveranstid.
            </p>
            <div className="mt-5">
              <ContactForm compact source="kalkylator" defaultMessage={spec} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <dt className="text-ink-soft">{term}</dt>
      <dd className="font-semibold text-ink">{value}</dd>
    </div>
  );
}

function NumField({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  text,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  disabled?: boolean;
  text?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        inputMode={text ? undefined : "decimal"}
        type={text ? "text" : "text"}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-lg border border-line bg-white px-4 text-ink placeholder:text-muted focus:border-brand focus:outline-none disabled:cursor-not-allowed disabled:bg-surface disabled:text-muted"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium text-ink">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-lg border border-line bg-white px-3 text-ink focus:border-brand focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
}
