"use client";

import { useMemo, useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { SHAPES, clampParam, derivedParams, layoutShape, unitOf } from "@/lib/bending-shapes";
import { DIAMETERS } from "@/lib/rebar-calc";
import { ACCENT, FONT, INK, SteelBar, at } from "@/components/steel-scenes";

/**
 * Typformer för bockning: välj en bokstavskod → formen ritas i stål med sina
 * mått (a, b, c … enligt standardens beteckningar). Måtten kan ändras och
 * ritningen följer med direkt. Geometrin räknas fram i
 * lib/bending-shapes.ts. Läggs i <AnimatedScene>: första uppspelningen vid
 * scroll, därefter ritas formen om vid varje val (nytt `key`).
 */

const GROUPS = ["1–2", "3–4", "5"] as const;

export function BockningsformerExplorer() {
  const [code, setCode] = useState("N");
  const [clicked, setClicked] = useState(false);
  // Inmatad text per kod och mått (tomt/ogiltigt → standardmåttet används).
  const [input, setInput] = useState<Record<string, Record<string, string>>>({});
  const def = SHAPES.find((s) => s.code === code) ?? SHAPES[0];
  const typed = input[code] ?? {};
  const values = Object.fromEntries(
    Object.entries(def.params).map(([k, d]) => {
      const n = Number((typed[k] ?? "").replace(",", "."));
      return [k, typed[k] && Number.isFinite(n) && n > 0 ? clampParam(def, k, n) : d];
    }),
  );
  const edited = Object.keys(typed).length > 0;
  const shape = layoutShape(def, { x: 50, y: 68, w: 300, h: 196 }, values);
  const derived = derivedParams(def, values);
  const params: [string, string][] = [
    ...Object.entries(values).map(([k, v]) => [k, `${v} ${unitOf(def, k)}`] as [string, string]),
    ...derived,
  ];
  const setVal = (k: string, v: string) => setInput((prev) => ({ ...prev, [code]: { ...prev[code], [k]: v } }));
  const t0 = clicked ? 0.05 : 0.9;

  // Positionslista ("korg") → skickas som offertförfrågan.
  const [dia, setDia] = useState(10);
  const [qty, setQty] = useState("10");
  const [list, setList] = useState<Pos[]>([]);
  const addPos = () => {
    const n = Math.max(1, Math.round(Number(qty.replace(",", ".")) || 1));
    setList((l) => [...l, { code, name: def.name, dia, qty: n, dims: dimText(def, values) }]);
  };
  const spec = useMemo(() => bockningslistaText(list), [list]);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_1fr] lg:items-start">
      {/* Koder (vänster kolumn, hela höjden) */}
      <div className="s-fade lg:col-start-1 lg:row-span-2 lg:row-start-1" style={at(0)}>
        {GROUPS.map((g) => (
          <div key={g} className="mb-4">
            <p className="mb-2 text-xs font-bold tracking-[0.15em] text-muted">GRUPP {g}</p>
            <div className="flex flex-wrap gap-1.5">
              {SHAPES.filter((s) => s.group === g).map((s) => {
                const on = s.code === code;
                return (
                  <button
                    key={s.code}
                    type="button"
                    title={s.name}
                    aria-pressed={on}
                    onClick={() => {
                      setCode(s.code);
                      setClicked(true);
                    }}
                    className={`flex w-[4.25rem] flex-col items-center gap-0.5 rounded-lg border px-1 pb-1 pt-1.5 text-xs font-bold transition-colors ${
                      on ? "border-brand bg-brand-light text-brand ring-1 ring-brand" : "border-line bg-white text-ink hover:border-brand hover:text-brand"
                    }`}
                  >
                    <Thumb code={s.code} />
                    {s.code}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Vald form – mått + lägg till (höger, ovanför ritningen) */}
      <div className="s-fade order-2 lg:order-none lg:col-start-2 lg:row-start-1" style={at(0.1)}>
        <div className="rounded-xl border border-line bg-white p-4" aria-live="polite">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-brand">{def.code}</span>
            <span className="font-semibold text-ink">{def.name}</span>
          </div>
          {Object.keys(def.params).length > 0 && (
            <div className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-x-4 gap-y-2 text-sm tabular-nums">
              {Object.entries(def.params).map(([k, d]) => (
                <label key={k} className="flex items-center gap-2 border-b border-line py-1">
                  <span className="w-5 font-semibold text-ink-soft">{k}</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={typed[k] ?? String(d)}
                    onChange={(e) => setVal(k, e.target.value)}
                    onBlur={() => typed[k] !== undefined && setVal(k, String(values[k]))}
                    aria-label={`Mått ${k} (${unitOf(def, k)})`}
                    className="w-full min-w-0 rounded-md border border-line bg-surface px-2 py-1 text-right text-ink focus:border-brand focus:bg-white focus:outline-none"
                  />
                  <span className="w-8 shrink-0 text-xs text-muted">{unitOf(def, k)}</span>
                </label>
              ))}
              {derived.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-2 border-b border-line py-1 text-muted">
                  <span className="font-semibold">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          )}
          {def.note && <p className="mt-3 text-sm text-muted">{def.note}</p>}
          {Object.keys(def.params).length > 0 && (
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-xs text-slate-400">Skriv in dina egna mått – ritningen uppdateras direkt.</p>
              {edited && (
                <button
                  type="button"
                  onClick={() => setInput((prev) => ({ ...prev, [code]: {} }))}
                  className="shrink-0 text-xs font-semibold text-brand hover:underline"
                >
                  Återställ
                </button>
              )}
            </div>
          )}

          {/* Lägg till position */}
          <div className="mt-4 flex flex-wrap items-end gap-3 border-t border-line pt-4">
            <label className="grid gap-1 text-xs font-semibold text-ink-soft">
              Ø
              <select
                value={dia}
                onChange={(e) => setDia(Number(e.target.value))}
                className="h-10 rounded-md border border-line bg-white px-2 text-sm text-ink focus:border-brand focus:outline-none"
              >
                {DIAMETERS.map((d) => (
                  <option key={d} value={d}>Ø{d}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-xs font-semibold text-ink-soft">
              Antal
              <input
                type="text"
                inputMode="numeric"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="h-10 w-20 rounded-md border border-line bg-white px-2 text-right text-sm text-ink focus:border-brand focus:outline-none"
              />
            </label>
            <button
              type="button"
              onClick={addPos}
              className="h-10 flex-1 rounded-lg bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              + Lägg till i listan
            </button>
          </div>
        </div>
      </div>

      {/* Ritning (under måttkortet) */}
      <div className="order-3 self-start rounded-xl border border-line bg-white lg:order-none lg:col-start-2 lg:row-start-2">
        <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-label={`Typform ${def.code}: ${def.name}. ${params.map(([k, v]) => `${k} ${v}`).join(", ")}.`}>
          <g key={code}>
            {shape ? (
              <>
                <g className="s-fade" style={at(t0)}>
                  <ellipse cx={shape.shadow.cx} cy={shape.shadow.cy} rx={shape.shadow.rx} ry="7" fill="#0f172a" opacity="0.06" />
                </g>
                <SteelBar d={shape.d} w={9} delay={t0} dur={1.2} />
                <g className="s-fade" style={at(t0 + 1.2)} stroke={ACCENT} strokeWidth="1.2" fill="none">
                  {shape.dims.map((m, i) => (
                    <g key={i}>
                      {m.ext && <path d={m.ext} opacity="0.5" />}
                      <path d={m.line} />
                    </g>
                  ))}
                </g>
                <g className="s-fade" style={at(t0 + 1.3)} fontFamily={FONT} fontSize="11.5" fontWeight="700" fill={ACCENT} textAnchor="middle">
                  {shape.dims.map((m, i) => (
                    <text key={i} transform={`translate(${m.lx.toFixed(1)} ${m.ly.toFixed(1)}) rotate(${m.angle.toFixed(1)})`} dominantBaseline="middle" paintOrder="stroke" stroke="#fff" strokeWidth="3">
                      {m.label}
                    </text>
                  ))}
                  {shape.notes.map((nt, i) => (
                    <text key={`n${i}`} x={nt.xy[0]} y={nt.xy[1]} dominantBaseline="middle">
                      {nt.text}
                    </text>
                  ))}
                </g>
              </>
            ) : (
              <g className="s-fade" style={at(t0)} fontFamily={FONT} textAnchor="middle">
                <rect x="110" y="90" width="180" height="120" rx="10" fill="none" stroke="#cbd5e1" strokeDasharray="6 5" />
                <text x="200" y="146" fontSize="18" fontWeight="700" fill={INK}>Special</text>
                <text x="200" y="170" fontSize="11" fill="#64748b">enligt din ritning</text>
              </g>
            )}
            <g className="s-fade" style={at(t0 + 0.2)}>
              <text x="20" y="28" fontSize="12" fontWeight="700" fontFamily={FONT} fill={INK}>
                <tspan fill={ACCENT}>{def.code}</tspan> · {def.name}
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Din bockningslista */}
      <div className="order-4 rounded-xl border border-line bg-white p-4 sm:p-5 lg:col-span-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-bold text-ink">Din bockningslista</h3>
          {list.length > 0 && (
            <button type="button" onClick={() => setList([])} className="text-xs font-semibold text-muted hover:text-brand">
              Töm listan
            </button>
          )}
        </div>
        {list.length === 0 ? (
          <p className="mt-2 text-sm text-muted">Välj form, ange mått, Ø och antal – och lägg till positionerna här.</p>
        ) : (
          <div className="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="min-w-0 overflow-x-auto">
              <table className="w-full text-left text-sm tabular-nums">
                <thead className="text-xs text-muted">
                  <tr className="border-b border-line">
                    <th className="py-2 pr-2 font-semibold">Pos</th>
                    <th className="py-2 pr-2 font-semibold">Form</th>
                    <th className="py-2 pr-2 font-semibold">Ø</th>
                    <th className="py-2 pr-2 font-semibold">Mått</th>
                    <th className="py-2 pr-2 text-right font-semibold">Antal</th>
                    <th className="py-2" />
                  </tr>
                </thead>
                <tbody>
                  {list.map((p, i) => (
                    <tr key={i} className="border-b border-line">
                      <td className="py-2 pr-2 text-muted">{i + 1}</td>
                      <td className="py-2 pr-2">
                        <span className="inline-flex items-center gap-2 font-semibold text-ink">
                          <Thumb code={p.code} small /> {p.code}
                        </span>
                      </td>
                      <td className="py-2 pr-2">Ø{p.dia}</td>
                      <td className="py-2 pr-2 text-ink-soft">{p.dims || "–"}</td>
                      <td className="py-2 pr-2 text-right">
                        <input
                          type="text"
                          inputMode="numeric"
                          value={p.qty}
                          aria-label={`Antal pos ${i + 1}`}
                          onChange={(e) => {
                            const n = Math.max(1, Math.round(Number(e.target.value) || 1));
                            setList((l) => l.map((x, j) => (j === i ? { ...x, qty: n } : x)));
                          }}
                          className="h-8 w-16 rounded-md border border-line px-2 text-right focus:border-brand focus:outline-none"
                        />
                      </td>
                      <td className="py-2 text-right">
                        <button
                          type="button"
                          aria-label={`Ta bort pos ${i + 1}`}
                          onClick={() => setList((l) => l.filter((_, j) => j !== i))}
                          className="h-8 w-8 rounded-md text-muted hover:bg-surface hover:text-brand"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="min-w-0 rounded-xl bg-surface p-4">
              <p className="mb-3 text-sm font-semibold text-ink">Skicka listan som offertförfrågan</p>
              <ContactForm compact source="bockningslista-verktyg" defaultMessage={spec} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type Pos = { code: string; name: string; dia: number; qty: number; dims: string };

function dimText(def: (typeof SHAPES)[number], values: Record<string, number>) {
  return Object.entries(values)
    .map(([k, v]) => `${k}=${v}${unitOf(def, k) === "mm" ? "" : unitOf(def, k) === "°" ? "°" : " " + unitOf(def, k)}`)
    .join(" ");
}

function bockningslistaText(list: Pos[]) {
  if (list.length === 0) return undefined;
  return [
    "Bockningslista (från typformsverktyget på armeringproffs.se), mått i mm:",
    ...list.map((p, i) => `Pos ${i + 1}: typform ${p.code} (${p.name}), Ø${p.dia} B500B, ${p.dims || "enligt ritning"}, ${p.qty} st`),
    "",
    "Leveransort: ",
  ].join("\n");
}

/** Liten stålritning av formen (standardmått) – för kodknappar och listan. */
function Thumb({ code, small = false }: { code: string; small?: boolean }) {
  const def = SHAPES.find((s) => s.code === code);
  const shape = def ? layoutShape(def, { x: 6, y: 6, w: 88, h: 48 }) : null;
  return (
    <svg viewBox="0 0 100 60" className={small ? "h-5 w-8" : "h-7 w-12"} aria-hidden="true">
      {shape ? (
        <path d={shape.d} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <rect x="20" y="12" width="60" height="36" rx="5" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 5" />
      )}
    </svg>
  );
}
