"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { IconCheck, IconArrow } from "./icons";
import { DIAMETERS, MESHES, calcBars, calcEdgeBars, calcMesh, fmt, kgPerM } from "@/lib/rebar-calc";

/**
 * Armeringskalkylator – lead-magnet.
 * Två lägen: armeringsnät (antal ark, vikt, kantjärn) och kamjärn c/c (antal
 * stänger, löpmeter, vikt). Resultatet förifylls i offertformuläret så att
 * steget till en offertförfrågan blir minimalt. Inga priser – bara åtgång.
 *
 * OBS: Riktvärden. Dimension, placering, överlapp och täckskikt ska följa
 * konstruktionsritningen – det förtydligas i texten. Beräkningar: lib/rebar-calc.ts.
 */

type Mode = "nat" | "stang";

function toNumber(v: string): number {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export function ArmeringsKalkylator() {
  const [mode, setMode] = useState<Mode>("nat");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [ort, setOrt] = useState("");
  // Nät
  const [meshKey, setMeshKey] = useState("6150");
  const [meshLayers, setMeshLayers] = useState<1 | 2>(1);
  const [meshLap, setMeshLap] = useState("300");
  const [kantDim, setKantDim] = useState("12");
  const [kantAntal, setKantAntal] = useState("2");
  // Stänger
  const [dia, setDia] = useState(12);
  const [cc, setCc] = useState(200);
  const [barLayers, setBarLayers] = useState<1 | 2>(1);
  const [cover, setCover] = useState("50");
  const [stock, setStock] = useState(6);
  const [barLap, setBarLap] = useState("");

  const L = toNumber(length);
  const W = toNumber(width);
  const valid = L > 0 && W > 0 && L <= 500 && W <= 500;
  const mesh = MESHES.find((m) => m.key === meshKey) ?? MESHES[1];
  const lapFor = (d: number, typed: string) => toNumber(typed) || 50 * d; // tumregel 50·Ø

  const r = useMemo(() => {
    if (!valid) return null;
    if (mode === "nat") {
      const m = calcMesh({ L, W, mesh, layers: meshLayers, lapMm: toNumber(meshLap) || 300 });
      const kd = Number(kantDim);
      const k = kd ? calcEdgeBars({ L, W, d: kd, count: toNumber(kantAntal) || 0, lapMm: 50 * kd }) : null;
      return { kind: "nat" as const, m, k, kd };
    }
    const b = calcBars({ L, W, d: dia, ccMm: cc, layers: barLayers, coverMm: toNumber(cover), stock, lapMm: lapFor(dia, barLap) });
    return { kind: "stang" as const, b };
  }, [valid, mode, L, W, mesh, meshLayers, meshLap, kantDim, kantAntal, dia, cc, barLayers, cover, stock, barLap]);

  const spec = useMemo(() => {
    if (!r) return undefined;
    const lines = ["Armeringsberäkning (från kalkylatorn på armeringproffs.se):", `• Yta: ${fmt(L, 1)} × ${fmt(W, 1)} m (${fmt(L * W, 1)} m²)`];
    if (r.kind === "nat") {
      lines.push(`• Armeringsnät ${mesh.key}, ${meshLayers} lager, överlapp ${toNumber(meshLap) || 300} mm: ca ${r.m.sheets} ark 2,35×5 m (${fmt(r.m.kg)} kg)`);
      if (r.k) lines.push(`• Kantjärn Ø${r.kd}: ca ${fmt(r.k.lm)} lpm (${kantAntal} järn runt om, ${fmt(r.k.kg)} kg)`);
      lines.push(`• Distanser: ca ${r.m.spacers} st · Najtråd: ca ${fmt(r.m.tieWireKg, 1)} kg`);
    } else {
      lines.push(`• Kamjärn Ø${dia} c/c ${cc} mm, ${barLayers} lager, båda riktningar, täckskikt ${toNumber(cover)} mm`);
      lines.push(`• ${r.b.x.count} st à ${fmt(r.b.x.len, 2)} m + ${r.b.y.count} st à ${fmt(r.b.y.len, 2)} m per lager`);
      lines.push(`• Totalt ca ${fmt(r.b.lm)} lpm = ${fmt(r.b.kg)} kg (≈ ${r.b.stockBars} st ${stock} m-stänger)`);
    }
    if (ort.trim()) lines.push(`• Leveransort: ${ort.trim()}`);
    lines.push("", "Stämmer detta? Räkna gärna på min ritning – jag bifogar den om jag har en.");
    return lines.join("\n");
  }, [r, L, W, mesh, meshLayers, meshLap, kantAntal, dia, cc, barLayers, cover, stock, ort]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
      {/* Inmatning */}
      <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
        <div role="tablist" aria-label="Vad vill du räkna på?" className="grid grid-cols-2 gap-1 rounded-xl bg-surface p-1">
          {([
            ["nat", "Armeringsnät"],
            ["stang", "Kamjärn c/c"],
          ] as [Mode, string][]).map(([k, label]) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={mode === k}
              onClick={() => setMode(k)}
              className={`h-11 rounded-lg text-sm font-semibold transition-colors ${mode === k ? "bg-white text-ink shadow-sm" : "text-muted hover:text-ink"}`}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="mt-5 text-sm text-ink-soft">
          {mode === "nat"
            ? "Plattan armeras med nät. Vi räknar antal ark (2,35 × 5 m), vikt, kantjärn och tillbehör."
            : "Plattan eller väggen armeras med lösa kamjärn i rutnät. Vi räknar antal stänger, löpmeter och vikt."}
        </p>

        <div className="mt-5 grid gap-5">
          <div className="grid grid-cols-2 gap-4">
            <NumField label="Längd (m)" value={length} onChange={setLength} placeholder="8" />
            <NumField label="Bredd (m)" value={width} onChange={setWidth} placeholder="10" />
          </div>

          {mode === "nat" ? (
            <>
              <SelectField label="Armeringsnät" value={meshKey} onChange={setMeshKey}>
                {MESHES.map((m) => (
                  <option key={m.key} value={m.key}>{m.key} (Ø{m.d} c/c {m.cc}) – {m.note}</option>
                ))}
              </SelectField>
              <div className="grid grid-cols-2 gap-4">
                <SelectField label="Lager" value={String(meshLayers)} onChange={(v) => setMeshLayers(v === "2" ? 2 : 1)}>
                  <option value="1">1 lager</option>
                  <option value="2">2 lager (över + under)</option>
                </SelectField>
                <NumField label="Överlapp (mm)" value={meshLap} onChange={setMeshLap} placeholder="300" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <SelectField label="Kantjärn" value={kantDim} onChange={setKantDim}>
                  <option value="0">Inga kantjärn</option>
                  {[10, 12, 16].map((d) => (
                    <option key={d} value={String(d)}>Ø{d} mm kamjärn</option>
                  ))}
                </SelectField>
                <NumField label="Antal järn runt om" value={kantAntal} onChange={setKantAntal} placeholder="2" disabled={kantDim === "0"} />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <SelectField label="Diameter" value={String(dia)} onChange={(v) => setDia(Number(v))}>
                  {DIAMETERS.map((d) => (
                    <option key={d} value={d}>Ø{d} mm ({fmt(kgPerM(d), 3)} kg/m)</option>
                  ))}
                </SelectField>
                <SelectField label="Centrumavstånd c/c" value={String(cc)} onChange={(v) => setCc(Number(v))}>
                  {[100, 150, 200, 250, 300].map((c) => (
                    <option key={c} value={c}>{c} mm</option>
                  ))}
                </SelectField>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <SelectField label="Lager" value={String(barLayers)} onChange={(v) => setBarLayers(v === "2" ? 2 : 1)}>
                  <option value="1">1 lager (båda riktningar)</option>
                  <option value="2">2 lager (över + under)</option>
                </SelectField>
                <NumField label="Täckskikt (mm)" value={cover} onChange={setCover} placeholder="50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <SelectField label="Stånglängd" value={String(stock)} onChange={(v) => setStock(Number(v))}>
                  <option value="6">6 m</option>
                  <option value="12">12 m</option>
                </SelectField>
                <NumField label="Skarv (mm)" value={barLap} onChange={setBarLap} placeholder={`${50 * dia} (≈50·Ø)`} />
              </div>
            </>
          )}

          <NumField label="Leveransort (valfritt)" value={ort} onChange={setOrt} placeholder="T.ex. Göteborg" text />
        </div>
      </div>

      {/* Resultat + offert */}
      <div className="grid gap-6">
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8" aria-live="polite">
          <h2 className="text-xl font-bold text-ink">Ungefärlig åtgång</h2>
          {r?.kind === "nat" && (
            <dl className="mt-5 divide-y divide-line">
              <Row term={`Armeringsnät ${mesh.key}`} value={`ca ${r.m.sheets} ark`} strong />
              <Row term="Nätets vikt" value={`ca ${fmt(r.m.kg)} kg`} />
              <Row term="Nätyta att köpa" value={`${fmt(r.m.meshM2, 1)} m² (${fmt(r.m.area, 1)} m² platta)`} />
              {r.k && <Row term={`Kantjärn Ø${r.kd}`} value={`ca ${fmt(r.k.lm)} lpm · ${fmt(r.k.kg)} kg`} />}
              <Row term="Distanser" value={`ca ${r.m.spacers} st`} />
              <Row term="Najtråd" value={`ca ${fmt(r.m.tieWireKg, 1)} kg`} />
            </dl>
          )}
          {r?.kind === "stang" && (
            <dl className="mt-5 divide-y divide-line">
              <Row term={`Stänger längs längden`} value={`${r.b.x.count} st à ${fmt(r.b.x.len, 2)} m`} />
              <Row term={`Stänger längs bredden`} value={`${r.b.y.count} st à ${fmt(r.b.y.len, 2)} m`} />
              {barLayers === 2 && <Row term="Lager" value="× 2" />}
              <Row term={`Kamjärn Ø${dia} totalt`} value={`ca ${fmt(r.b.lm)} lpm`} />
              <Row term="Vikt" value={`ca ${fmt(r.b.kg)} kg (${fmt(r.b.kgPerM2, 1)} kg/m²)`} strong />
              <Row term={`Motsvarar`} value={`≈ ${r.b.stockBars} st ${stock} m-stänger`} />
              <Row term="Distanser" value={`ca ${r.b.spacers} st`} />
            </dl>
          )}
          {!r && <p className="mt-5 text-ink-soft">Fyll i längd och bredd så visas åtgången här.</p>}
          <p className="mt-4 text-xs text-muted">
            Riktvärden inkl. överlapp och skarvar. Beräkningen ersätter inte konstruktionsritningen –
            dimension, placering, täckskikt och skarvlängder bestäms av konstruktören. Vi räknar gärna
            fram exakt mängd åt dig i offerten.
          </p>
          <p className="mt-3 text-sm">
            <Link href="/tjanster/bockningslista" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
              Behöver du bockade järn? Se alla typformer A–XX <IconArrow className="h-4 w-4" />
            </Link>
          </p>
        </div>

        {r && (
          <div className="rounded-2xl border border-brand/30 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2 text-brand">
              <IconCheck className="h-5 w-5" />
              <h2 className="text-lg font-bold text-ink">Skicka som offertförfrågan</h2>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Din beräkning är redan ifylld nedan. Lägg till telefon eller e-post så återkommer vi
              med pris och leveranstid.
            </p>
            <div className="mt-5">
              <ContactForm compact source={`kalkylator-${mode}`} defaultMessage={spec} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ term, value, strong }: { term: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <dt className="text-ink-soft">{term}</dt>
      <dd className={`text-right font-semibold ${strong ? "text-lg text-brand" : "text-ink"}`}>{value}</dd>
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
    <div className="grid min-w-0 gap-1.5">
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        inputMode={text ? undefined : "decimal"}
        type={text ? "text" : "text"}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full min-w-0 rounded-lg border border-line bg-white px-4 text-ink placeholder:text-muted focus:border-brand focus:outline-none disabled:cursor-not-allowed disabled:bg-surface disabled:text-muted"
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
    <div className="grid min-w-0 gap-1.5">
      <label className="text-sm font-medium text-ink">{label}</label>
      {/* Egen pil: samma avstånd till högerkanten som texten har till vänsterkanten (16 px). */}
      <div className="relative min-w-0">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full min-w-0 appearance-none truncate rounded-lg border border-line bg-white pl-4 pr-10 text-ink focus:border-brand focus:outline-none"
        >
          {children}
        </select>
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted">
          <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
