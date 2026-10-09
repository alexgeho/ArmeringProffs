"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { NumField, Row, SelectField } from "./ArmeringsKalkylator";
import { IconArrow } from "./icons";
import { DIAMETERS, MESHES, calcMesh, fmt, kgPerM, meshKgPerM2 } from "@/lib/rebar-calc";

/**
 * Små fristående verktyg (plan 109–111): viktkalkylator, nätkalkylator och
 * förankringslängd. Samma fält/stil som ArmeringsKalkylator och samma
 * beräkningar (lib/rebar-calc.ts) så att siffrorna stämmer överens.
 */

function toNumber(v: string): number {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

const card = "rounded-2xl border border-line bg-white p-6 sm:p-8";
const resultCard = "rounded-2xl border border-line bg-surface p-6 sm:p-8";
const inputCls =
  "h-12 w-full min-w-0 rounded-lg border border-line bg-white px-4 text-ink placeholder:text-muted focus:border-brand focus:outline-none";

/** CTA under resultatet: kommersiell sida (huvudknapp) + offert. */
function ToolCta({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
      <Link
        href={href}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-[15px] font-semibold text-white shadow-sm shadow-brand/20 transition-colors hover:bg-brand-dark"
      >
        {label} <IconArrow className="h-4 w-4" />
      </Link>
      <Link href="/offert" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
        Begär offert <IconArrow className="h-4 w-4" />
      </Link>
    </div>
  );
}

/* ---------------- 109. Viktkalkylator ---------------- */

type Line = { id: number; d: number; len: string; n: string };

export function ViktKalkylator() {
  const [lines, setLines] = useState<Line[]>([{ id: 1, d: 12, len: "", n: "" }]);
  const update = (id: number, patch: Partial<Line>) =>
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  const add = () =>
    setLines((ls) => [...ls, { id: Math.max(...ls.map((l) => l.id)) + 1, d: ls[ls.length - 1].d, len: "", n: "" }]);
  const remove = (id: number) => setLines((ls) => ls.filter((l) => l.id !== id));

  const rows = lines
    .map((l) => {
      const len = toNumber(l.len);
      const n = Math.round(toNumber(l.n));
      return { ...l, lm: len * n, kg: len * n * kgPerM(l.d), lenN: len, nN: n };
    })
    .filter((r) => r.lm > 0);
  const lm = rows.reduce((s, r) => s + r.lm, 0);
  const kg = rows.reduce((s, r) => s + r.kg, 0);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
      <div className={card}>
        <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_2.75rem] gap-2 sm:gap-3">
          <span className="text-sm font-medium text-ink">Diameter</span>
          <span className="text-sm font-medium text-ink">Längd (m)</span>
          <span className="text-sm font-medium text-ink">Antal</span>
          <span />
          {lines.map((l) => (
            <div key={l.id} className="contents">
              <div className="relative min-w-0">
                <select
                  aria-label="Diameter"
                  value={l.d}
                  onChange={(e) => update(l.id, { d: Number(e.target.value) })}
                  className="h-12 w-full min-w-0 appearance-none truncate rounded-lg border border-line bg-white pl-4 pr-10 text-ink focus:border-brand focus:outline-none"
                >
                  {DIAMETERS.map((d) => (
                    <option key={d} value={d}>Ø{d}</option>
                  ))}
                </select>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted">
                  <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <input aria-label="Längd (m)" inputMode="decimal" value={l.len} placeholder="6" onChange={(e) => update(l.id, { len: e.target.value })} className={inputCls} />
              <input aria-label="Antal" inputMode="numeric" value={l.n} placeholder="50" onChange={(e) => update(l.id, { n: e.target.value })} className={inputCls} />
              {lines.length > 1 ? (
                <button
                  type="button"
                  aria-label="Ta bort rad"
                  onClick={() => remove(l.id)}
                  className="flex h-12 w-11 items-center justify-center rounded-lg text-muted hover:bg-surface hover:text-ink"
                >
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-4 w-4">
                    <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
                  </svg>
                </button>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
        {lines.length < 12 && (
          <button type="button" onClick={add} className="mt-5 inline-flex items-center gap-1 font-semibold text-brand hover:underline">
            + Lägg till dimension
          </button>
        )}
      </div>

      <div className={resultCard} aria-live="polite">
        <h2 className="text-xl font-bold text-ink">Vikt</h2>
        {rows.length > 0 ? (
          <dl className="mt-5 divide-y divide-line">
            {rows.length > 1 &&
              rows.map((r) => (
                <Row key={r.id} term={`Ø${r.d} · ${r.nN} × ${fmt(r.lenN, Number.isInteger(r.lenN) ? 0 : 2)} m`} value={`${fmt(r.kg, 1)} kg`} />
              ))}
            <Row term="Löpmeter" value={`${fmt(lm, 1)} m`} />
            <Row term="Total vikt" value={`${fmt(kg, 1)} kg`} strong />
            {kg >= 1000 && <Row term="I ton" value={`${fmt(kg / 1000, 2)} t`} />}
          </dl>
        ) : (
          <p className="mt-5 text-ink-soft">Fyll i längd och antal.</p>
        )}
        <p className="mt-4 text-xs text-muted">Teoretisk vikt för kamstål B500B, 0,00617 × d² kg/m.</p>
        <ToolCta href="/produkter/armeringsjarn" label="Beställ armeringsjärn" />
      </div>
    </div>
  );
}

/* ---------------- 110. Nätkalkylator ---------------- */

export function NatKalkylator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [meshKey, setMeshKey] = useState("6150");
  const [layers, setLayers] = useState<1 | 2>(1);
  const [lap, setLap] = useState("300");

  const L = toNumber(length);
  const W = toNumber(width);
  const valid = L > 0 && W > 0 && L <= 500 && W <= 500;
  const mesh = MESHES.find((m) => m.key === meshKey) ?? MESHES[1];
  const r = useMemo(
    () => (valid ? calcMesh({ L, W, mesh, layers, lapMm: toNumber(lap) || 300 }) : null),
    [valid, L, W, mesh, layers, lap],
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
      <div className={card}>
        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-4">
            <NumField label="Längd (m)" value={length} onChange={setLength} placeholder="8" />
            <NumField label="Bredd (m)" value={width} onChange={setWidth} placeholder="10" />
          </div>
          <SelectField label="Armeringsnät" value={meshKey} onChange={setMeshKey}>
            {MESHES.map((m) => (
              <option key={m.key} value={m.key}>{m.key} (Ø{m.d} c/c {m.cc})</option>
            ))}
          </SelectField>
          <div className="grid grid-cols-2 gap-4">
            <SelectField label="Lager" value={String(layers)} onChange={(v) => setLayers(v === "2" ? 2 : 1)}>
              <option value="1">1 lager</option>
              <option value="2">2 lager</option>
            </SelectField>
            <NumField label="Överlapp (mm)" value={lap} onChange={setLap} placeholder="300" />
          </div>
        </div>
      </div>

      <div className={resultCard} aria-live="polite">
        <h2 className="text-xl font-bold text-ink">Antal nät</h2>
        {r ? (
          <dl className="mt-5 divide-y divide-line">
            <Row term={`Armeringsnät ${mesh.key}`} value={`ca ${r.sheets} ark`} strong />
            <Row term="Vikt" value={`ca ${fmt(r.kg)} kg`} />
            <Row term="Nätyta" value={`${fmt(r.meshM2, 1)} m² (${fmt(r.area, 1)} m² platta)`} />
            <Row term="Arkformat" value={`2,35 × 5 m · ${fmt(r.sheetArea * meshKgPerM2(mesh), 1)} kg/ark`} />
          </dl>
        ) : (
          <p className="mt-5 text-ink-soft">Fyll i längd och bredd.</p>
        )}
        <p className="mt-4 text-xs text-muted">Riktvärden. Nättyp och överlapp enligt konstruktionsritningen.</p>
        <ToolCta href="/produkter/armeringsnat" label="Beställ armeringsnät" />
      </div>
    </div>
  );
}

/* ---------------- 111. Förankringslängd ---------------- */

/**
 * SS-EN 1992-1-1, 8.4: lb,rqd = (Ø/4)·(σsd/fbd), fbd = 2,25·η1·η2·fctd,
 * fctd = αct·fctk,0.05/γc (αct = 1,0, γc = 1,5), σsd = fyd = 500/1,15 MPa.
 * lb,min = max(0,3·lb,rqd; 10Ø; 100 mm). η2 = 1,0 för Ø ≤ 32.
 */
export const CONCRETE = [
  { key: "C20/25", fctk: 1.5 },
  { key: "C25/30", fctk: 1.8 },
  { key: "C30/37", fctk: 2.0 },
  { key: "C35/45", fctk: 2.2 },
  { key: "C40/50", fctk: 2.5 },
  { key: "C45/55", fctk: 2.7 },
  { key: "C50/60", fctk: 2.9 },
] as const;

export function forankring(d: number, fctk: number, good: boolean) {
  const fyd = 500 / 1.15;
  const fbd = 2.25 * (good ? 1.0 : 0.7) * 1.0 * (fctk / 1.5);
  const lb = (d / 4) * (fyd / fbd);
  const up10 = (x: number) => Math.ceil(x / 10) * 10;
  return {
    fbd,
    lb: up10(lb),
    ratio: lb / d,
    lbMin: up10(Math.max(0.3 * lb, 10 * d, 100)),
    lapLow: up10(lb),
    lapHigh: up10(1.5 * lb),
  };
}

export function ForankringsKalkylator() {
  const [dia, setDia] = useState(12);
  const [betong, setBetong] = useState("C30/37");
  const [good, setGood] = useState(true);

  const c = CONCRETE.find((x) => x.key === betong) ?? CONCRETE[2];
  const r = forankring(dia, c.fctk, good);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
      <div className={card}>
        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-4">
            <SelectField label="Diameter" value={String(dia)} onChange={(v) => setDia(Number(v))}>
              {DIAMETERS.map((d) => (
                <option key={d} value={d}>Ø{d} mm</option>
              ))}
            </SelectField>
            <SelectField label="Betongklass" value={betong} onChange={setBetong}>
              {CONCRETE.map((x) => (
                <option key={x.key} value={x.key}>{x.key}</option>
              ))}
            </SelectField>
          </div>
          <SelectField label="Vidhäftning" value={good ? "goda" : "andra"} onChange={(v) => setGood(v === "goda")}>
            <option value="goda">Goda förhållanden</option>
            <option value="andra">Andra förhållanden</option>
          </SelectField>
        </div>
      </div>

      <div className={resultCard} aria-live="polite">
        <h2 className="text-xl font-bold text-ink">Riktvärde</h2>
        <dl className="mt-5 divide-y divide-line">
          <Row term="Förankringslängd lb,rqd" value={`${fmt(r.lb)} mm`} strong />
          <Row term="I diametrar" value={`≈ ${fmt(r.ratio)} Ø`} />
          <Row term="Minsta lb,min" value={`${fmt(r.lbMin)} mm`} />
          <Row term="Omlottskarv l0" value={`${fmt(r.lapLow)}–${fmt(r.lapHigh)} mm`} />
        </dl>
        <p className="mt-4 text-sm text-ink-soft">
          Riktvärde för dragen kamstång B500B. Förankrings- och skarvlängd bestäms av konstruktören.
        </p>
        <ToolCta href="/produkter/klippt-och-bockad" label="Beställ klippt & bockad" />
      </div>
    </div>
  );
}
