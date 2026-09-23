"use client";

import { useState } from "react";
import { layoutShape, type Position } from "@/lib/rebar-shapes";
import { ACCENT, FONT, INK, SteelBar, at } from "@/components/steel-scenes";

/**
 * Klickbar bockningslista: välj en rad → formen ritas i stål med sina mått.
 * Geometrin räknas fram ur måtten (lib/rebar-shapes.ts), så bilden stämmer
 * alltid med raden. Läggs i <AnimatedScene>: första uppspelningen startar vid
 * scroll, därefter spelas ritningen om vid varje klick (nytt `key`).
 */

const ROWS: Position[] = [
  { pos: 1, dia: 12, qty: 24, kind: "rak", name: "Rak", dims: [6000] },
  { pos: 2, dia: 12, qty: 16, kind: "vinkel", name: "Vinkel", dims: [900, 400] },
  { pos: 3, dia: 10, qty: 48, kind: "bygel", name: "Bygel", dims: [300, 200] },
  { pos: 4, dia: 8, qty: 60, kind: "u", name: "U-bygel", dims: [250, 150] },
  { pos: 5, dia: 16, qty: 12, kind: "z", name: "Z-järn", dims: [400, 300, 400] },
  { pos: 6, dia: 10, qty: 30, kind: "krok", name: "Krokjärn", dims: [2000, 150] },
];

const GRID = "grid grid-cols-[1.6rem_1.8rem_2.6rem_minmax(0,1fr)_auto] items-center gap-x-1.5";

export function BockningslistaExplorer() {
  const [sel, setSel] = useState(2);
  const [clicked, setClicked] = useState(false);
  const row = ROWS[sel];
  const shape = layoutShape(row, { x: 38, y: 52, w: 264, h: 186 });
  const t0 = clicked ? 0.05 : 1.1; // första gången väntar vi in listan

  const pick = (i: number) => {
    setSel(i);
    setClicked(true);
  };

  return (
    <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      {/* Listan */}
      <div className="s-fade rounded-xl border border-slate-300 bg-white p-4 shadow-sm" style={at(0)}>
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-bold tracking-[0.15em] text-muted">BOCKNINGSLISTA</span>
          <span className="text-xs text-slate-400">Ritning K-102</span>
        </div>
        <div className={`${GRID} mt-3 rounded bg-slate-100 px-2 py-1.5 text-xs font-bold text-ink-soft`}>
          <span>Pos</span>
          <span>Ø</span>
          <span>Antal</span>
          <span>Form</span>
          <span className="text-right">Mått</span>
        </div>
        <ul>
          {ROWS.map((r, i) => {
            const on = i === sel;
            return (
              <li key={r.pos} className="s-fade border-b border-line" style={at(0.25 + i * 0.1)}>
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-pressed={on}
                  className={`${GRID} w-full border-l-[3px] px-2 py-2 text-left text-[13px] tabular-nums sm:text-sm transition-colors ${
                    on ? "border-brand bg-brand-light font-bold" : "border-transparent hover:bg-slate-50"
                  }`}
                >
                  <span>{r.pos}</span>
                  <span>{r.dia}</span>
                  <span>{r.qty}</span>
                  <span className={`min-w-0 break-words ${on ? "text-brand" : ""}`}>{r.name}</span>
                  <span className="text-right">{r.dims.join("×")}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-xs text-slate-400">Klicka på en rad · B500B · mått i mm</p>
      </div>

      {/* Ritningen */}
      <svg
        viewBox="0 0 340 280"
        className="h-auto w-full"
        role="img"
        aria-live="polite"
        aria-label={`Pos ${row.pos}: ${row.name}, Ø${row.dia}, mått ${row.dims.join(" × ")} mm, ${row.qty} st.`}
      >
        <g key={sel}>
          <g className="s-fade" style={at(t0)}>
            <ellipse cx={shape.shadow.cx} cy={shape.shadow.cy} rx={shape.shadow.rx} ry="7" fill="#0f172a" opacity="0.06" />
          </g>
          <SteelBar d={shape.d} w={5 + row.dia * 0.35} delay={t0} dur={1.1} />
          <g className="s-fade" style={at(t0 + 1.1)} stroke={ACCENT} strokeWidth="1.2" fill="none">
            {shape.dims.map((m, i) => (
              <g key={i}>
                <path d={`${m.e1} ${m.e2}`} opacity="0.5" />
                <path d={`M ${m.x1} ${m.y1} L ${m.x2} ${m.y2}`} />
                <circle cx={m.x1} cy={m.y1} r="1.8" fill={ACCENT} stroke="none" />
                <circle cx={m.x2} cy={m.y2} r="1.8" fill={ACCENT} stroke="none" />
              </g>
            ))}
          </g>
          <g className="s-fade" style={at(t0 + 1.2)} fontFamily={FONT} fontSize="12" fontWeight="700" fill={ACCENT} textAnchor="middle">
            {shape.dims.map((m, i) => (
              <text key={i} transform={`translate(${m.lx.toFixed(1)} ${m.ly.toFixed(1)}) rotate(${m.angle.toFixed(1)})`} dominantBaseline="middle">
                {m.label}
              </text>
            ))}
          </g>
          <g className="s-fade" style={at(t0 + 1.3)}>
            <circle cx="30" cy="24" r="4" fill={ACCENT} />
            <text x="40" y="28" fontSize="12" fontWeight="600" fontFamily={FONT} fill={INK}>
              {`Pos ${row.pos} · ${row.name} · Ø${row.dia} B500B · ${row.qty} st`}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
