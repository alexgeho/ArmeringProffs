"use client";

import { useState } from "react";
import { SHAPES, layoutShape, shapeParams } from "@/lib/bending-shapes";
import { ACCENT, FONT, INK, SteelBar, at } from "@/components/steel-scenes";

/**
 * Typformer för bockning: välj en bokstavskod → formen ritas i stål med sina
 * mått (a, b, c … enligt standardens beteckningar). Geometrin räknas fram i
 * lib/bending-shapes.ts. Läggs i <AnimatedScene>: första uppspelningen vid
 * scroll, därefter ritas formen om vid varje val (nytt `key`).
 */

const GROUPS = ["1–2", "3–4", "5"] as const;

export function BockningsformerExplorer() {
  const [code, setCode] = useState("N");
  const [clicked, setClicked] = useState(false);
  const def = SHAPES.find((s) => s.code === code) ?? SHAPES[0];
  const shape = layoutShape(def, { x: 50, y: 68, w: 300, h: 196 });
  const params = shapeParams(def);
  const t0 = clicked ? 0.05 : 0.9;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_1fr]">
      {/* Koder */}
      <div className="s-fade" style={at(0)}>
        {GROUPS.map((g) => (
          <div key={g} className="mb-4">
            <p className="mb-2 text-xs font-bold tracking-[0.15em] text-muted">GRUPP {g}</p>
            <div className="flex flex-wrap gap-2">
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
                    className={`h-11 min-w-11 rounded-lg border px-2 text-sm font-bold transition-colors ${
                      on ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand hover:text-brand"
                    }`}
                  >
                    {s.code}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Vald form – mått (mobil: under ritningen) */}
      <div className="s-fade order-3 lg:order-none" style={at(0.1)}>
        <div className="rounded-xl border border-line bg-white p-4" aria-live="polite">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-brand">{def.code}</span>
            <span className="font-semibold text-ink">{def.name}</span>
          </div>
          {params.length > 0 && (
            <dl className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(7.5rem,1fr))] gap-x-4 gap-y-1 text-sm tabular-nums">
              {params.map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-line py-1">
                  <dt className="font-semibold text-ink-soft">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {def.note && <p className="mt-3 text-sm text-muted">{def.note}</p>}
          {params.length > 0 && (
            <p className="mt-3 text-xs text-slate-400">Exempelmått. Ange kod och mått per position i din bockningslista.</p>
          )}
        </div>
      </div>

      {/* Ritning (mobil: direkt under koderna) */}
      <div className="order-2 self-start rounded-xl border border-line bg-white lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
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
    </div>
  );
}
