/**
 * Byggstenar för animerade "stål"-scener (se docs/tz-animationer-tjanster.md).
 *
 * Handritad SVG: stålstänger byggs av staplade linjer (mörk kant → grå kropp →
 * ljus reflex) så att metallkänslan följer varje bock, plus ett streckat
 * lager som ger kamstålets ribbor. Orange används bara för accenter.
 * Animationerna ligger i globals.css (.s-fade/.s-draw/.s-glint) och körs först
 * när <AnimatedScene> lägger på `.scene-play` – markupen här är slutbilden.
 */

import type { CSSProperties } from "react";

export const ACCENT = "#ea580c";
export const INK = "#334155";
export const MUTED = "#64748b";
export const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";

/** Fördröjning (+ ev. längd) för en animerad del. */
export const at = (delay: number, dur?: number) =>
  ({ "--d": `${delay}s`, ...(dur ? { "--t": `${dur}s` } : {}) }) as CSSProperties;

/** Kamstång längs en godtycklig bana, med ritnings- och glans-animation. */
export function SteelBar({ d, w = 9, delay, dur }: { d: string; w?: number; delay: number; dur: number }) {
  const common = { d, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", pathLength: 1 } as const;
  const draw = at(delay, dur);
  return (
    <g>
      <path {...common} className="s-draw" style={draw} stroke="#1e293b" strokeWidth={w} />
      <path {...common} className="s-draw" style={draw} stroke="#64748b" strokeWidth={w - 2} />
      <path {...common} className="s-draw" style={draw} stroke="#94a3b8" strokeWidth={w * 0.45} transform="translate(-0.6 -0.9)" />
      <path {...common} className="s-draw" style={draw} stroke="#e2e8f0" strokeWidth={w * 0.18} transform="translate(-1 -1.6)" opacity={0.9} />
      {/* kamstålets ribbor */}
      <g className="s-fade" style={at(delay + dur - 0.2)}>
        <path d={d} fill="none" stroke={INK} strokeWidth={w - 2.5} strokeDasharray="0.9 3.6" opacity={0.3} />
      </g>
      {/* ljusglimt som sveper längs stången en gång */}
      <path {...common} className="s-glint" style={at(delay + dur + 0.3)} stroke="#ffffff" strokeWidth={w * 0.55} strokeDasharray="0.07 1.2" />
    </g>
  );
}
