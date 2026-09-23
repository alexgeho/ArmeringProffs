/**
 * Animerade "stål"-scener för tjänstesidorna (se docs/tz-animationer-tjanster.md).
 *
 * Handritad SVG: stålstänger byggs av staplade linjer (mörk kant → grå kropp →
 * ljus reflex) så att metallkänslan följer varje bock, plus ett streckat
 * lager som ger kamstålets ribbor. Orange används bara för accenter.
 * Animationerna ligger i globals.css (.s-fade/.s-draw/.s-glint) och körs först
 * när <AnimatedScene> lägger på `.scene-play` – markupen här är slutbilden.
 */

import type { CSSProperties } from "react";

const ACCENT = "#ea580c";
const INK = "#334155";
const MUTED = "#64748b";
const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";

/** Fördröjning (+ ev. längd) för en animerad del. */
const at = (delay: number, dur?: number) =>
  ({ "--d": `${delay}s`, ...(dur ? { "--t": `${dur}s` } : {}) }) as CSSProperties;

/** Kamstång längs en godtycklig bana, med ritnings- och glans-animation. */
function SteelBar({ d, w = 9, delay, dur }: { d: string; w?: number; delay: number; dur: number }) {
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

const rows = [
  ["1", "12", "24", "Rak", "6000"],
  ["2", "12", "16", "Vinkel", "900×400"],
  ["3", "10", "48", "Bygel", "300×200"],
  ["4", "8", "60", "U-bygel", "250×150"],
];
const cols = [40, 80, 118, 168, 234];

/* Sluten bygel i isometri (300×200) med 135°-krokar i övre vänstra hörnet. */
const STIRRUP =
  "M 412 150 L 396 138 Q 392 135 392 140 L 392 254 Q 392 262 399 258 L 532 181 Q 539 177 539 169 L 539 55 Q 539 47 532 51 L 399 128 Q 392 132 395 136 L 410 157";

const text = { fontFamily: FONT, fill: INK } as const;

/** Bockningsbladet med rad 3 markerad (koordinater 20–310 × 28–264). */
function ScheduleSheet() {
  return (
    <>
      <g className="s-fade" style={at(0)}>
        <rect x="23" y="32" width="290" height="236" rx="6" fill="#0f172a" opacity="0.05" />
        <rect x="20" y="28" width="290" height="236" rx="6" fill="#fff" stroke="#cbd5e1" />
        <text x="36" y="54" fontSize="11" fontWeight="700" letterSpacing="1.5" {...text} fill={MUTED}>BOCKNINGSLISTA</text>
        <text x="294" y="54" fontSize="10" textAnchor="end" {...text} fill="#94a3b8">Ritning K-102</text>
        <rect x="28" y="66" width="274" height="24" fill="#f1f5f9" />
        {["Pos", "Ø", "Antal", "Form", "Mått"].map((h, i) => (
          <text key={h} x={cols[i]} y="82" fontSize="10.5" fontWeight="700" {...text}>{h}</text>
        ))}
        <text x="36" y="248" fontSize="10" {...text} fill="#94a3b8">Stålkvalitet B500B · mått i mm</text>
      </g>
      <g className="s-fade" style={at(1.15)}>
        <rect x="28" y="150" width="274" height="30" fill={ACCENT} opacity="0.12" />
        <rect x="28" y="150" width="3" height="30" fill={ACCENT} />
      </g>
      {rows.map((r, i) => {
        const y = 90 + i * 30;
        const hi = i === 2;
        return (
          <g key={r[0]} className="s-fade" style={at(0.3 + i * 0.15)}>
            {r.map((c, j) => (
              <text key={j} x={cols[j]} y={y + 19} fontSize="11" fontWeight={hi ? 700 : 400} {...text} fill={hi && j === 3 ? ACCENT : INK}>
                {c}
              </text>
            ))}
            <line x1="28" y1={y + 30} x2="302" y2={y + 30} stroke="#e2e8f0" />
          </g>
        );
      })}
    </>
  );
}

/** Orange pil (ritas) + pilspets; `head` är spetsens polyline. */
function Arrow({ d, head }: { d: string; head: string }) {
  return (
    <>
      <path d={d} fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" pathLength={1} className="s-draw" style={at(1.45, 0.5)} />
      <path d={head} fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="s-fade" style={at(1.9)} />
    </>
  );
}

/** Bygeln med skugga, måttlinjer och etikett (koordinater 392–590 × 12–290). */
function StirrupWithDims() {
  return (
    <>
      <g className="s-fade" style={at(2)}>
        <path d="M 396 270 L 545 184" stroke="#0f172a" strokeWidth="14" strokeLinecap="round" opacity="0.07" />
      </g>
      <SteelBar d={STIRRUP} delay={2} dur={1.4} />
      <g stroke={ACCENT} strokeWidth="1.2" fill="none" className="s-fade" style={at(3.4)}>
        <path d="M 392 266 L 405 288 M 539 181 L 552 203" opacity="0.5" />
        <path d="M 402 282 L 549 197" />
        <path d="M 398 285 L 406 279 M 545 200 L 553 194" strokeWidth="1.6" />
        <path d="M 545 177 L 574 177 M 545 47 L 574 47" opacity="0.5" />
        <path d="M 566 177 L 566 47" />
        <path d="M 562 173 L 570 181 M 562 43 L 570 51" strokeWidth="1.6" />
      </g>
      <g className="s-fade" style={at(3.55)} fontFamily={FONT} fontSize="12" fontWeight="700" fill={ACCENT}>
        <text transform="translate(484 252) rotate(-30)" textAnchor="middle">300</text>
        <text transform="translate(582 112) rotate(-90)" textAnchor="middle">200</text>
      </g>
      <g className="s-fade" style={at(3.7)}>
        <circle cx="400" cy="20" r="4" fill={ACCENT} />
        <text x="410" y="24" fontSize="11.5" fontWeight="600" {...text}>Pos 3 · Ø10 B500B · 48 st</text>
      </g>
    </>
  );
}

const LABEL =
  "Från bockningslista till färdig armering: rad 3 i listan, en bygel Ø10 med måtten 300×200 mm, bockas till en sluten bygel med 135-graderskrokar.";

/* ---------- Tjänst: bockningslista → färdig bygel ----------
   Två layouter av samma delar: bred (sida vid sida) och mobil (staplad), så
   att texten i listan förblir läsbar på 375 px. */
export function BockningslistaScene({ className = "" }: { className?: string }) {
  return (
    <>
      <svg className={`hidden sm:block ${className}`} viewBox="0 0 640 300" role="img" aria-label={LABEL}>
        <ScheduleSheet />
        <Arrow d="M 306 165 C 334 165, 350 182, 374 190" head="M 366 183 L 376 191 L 364 194" />
        <StirrupWithDims />
      </svg>
      <svg className={`sm:hidden ${className}`} viewBox="0 0 330 580" role="img" aria-label={LABEL}>
        <ScheduleSheet />
        <Arrow d="M 80 272 C 80 330, 92 380, 116 402" head="M 106 400 L 117 403 L 115 392" />
        <g transform="translate(-265 280)">
          <StirrupWithDims />
        </g>
      </svg>
    </>
  );
}
