/**
 * Genererade SVG-illustrationer för Armeringsproffs.
 *
 * Vektorgrafik i varumärkets palett (orange #ea580c + slate). Skalar skarpt
 * på alla skärmar, väger nästan inget och behöver inga externa bildfiler.
 * Används i hero, produktsektioner och som tekniska diagram i bloggen.
 */

/* ---------- Hero-bakgrund: subtilt armeringsnät ---------- */
export function RebarMeshPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="rebar-mesh" width="64" height="64" patternUnits="userSpaceOnUse">
          {/* horisontella & vertikala kamstänger */}
          <line x1="0" y1="16" x2="64" y2="16" stroke="currentColor" strokeWidth="2.5" />
          <line x1="0" y1="48" x2="64" y2="48" stroke="currentColor" strokeWidth="2.5" />
          <line x1="16" y1="0" x2="16" y2="64" stroke="currentColor" strokeWidth="2.5" />
          <line x1="48" y1="0" x2="48" y2="64" stroke="currentColor" strokeWidth="2.5" />
          {/* svetsknutar */}
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
          <circle cx="48" cy="16" r="2.5" fill="currentColor" />
          <circle cx="16" cy="48" r="2.5" fill="currentColor" />
          <circle cx="48" cy="48" r="2.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#rebar-mesh)" />
    </svg>
  );
}

/* ---------- Armeringskorg (isometrisk) ---------- */
export function RebarCageIllustration({ className = "" }: { className?: string }) {
  const bar = "#334155"; // slate-700
  const accent = "#ea580c"; // brand
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      fill="none"
      role="img"
      aria-label="Illustration av en prefabricerad armeringskorg"
    >
      {/* längsgående järn (4 st) i isometriskt djup */}
      {[
        { y1: 70, y2: 96 },
        { y1: 150, y2: 176 },
      ].map((r, i) => (
        <g key={i}>
          <line x1="40" y1={r.y1} x2="270" y2={r.y1} stroke={bar} strokeWidth="6" strokeLinecap="round" />
          <line x1="60" y1={r.y2} x2="290" y2={r.y2} stroke={bar} strokeWidth="6" strokeLinecap="round" />
        </g>
      ))}
      {/* orange accent-järn (huvudarmering) */}
      <line x1="40" y1="70" x2="270" y2="70" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      <line x1="60" y1="176" x2="290" y2="176" stroke={accent} strokeWidth="6" strokeLinecap="round" />

      {/* byglar (tvärgående ramar) som sluter korgen */}
      {[40, 100, 160, 220, 270].map((x, i) => (
        <path
          key={i}
          d={`M ${x} 70 L ${x} 150 L ${x + 20} 176 L ${x + 20} 96 Z`}
          stroke={i % 2 ? accent : bar}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      ))}
      {/* djup-kanter */}
      <line x1="40" y1="70" x2="60" y2="96" stroke={bar} strokeWidth="4" />
      <line x1="270" y1="70" x2="290" y2="96" stroke={bar} strokeWidth="4" />
      <line x1="40" y1="150" x2="60" y2="176" stroke={bar} strokeWidth="4" />
      <line x1="270" y1="150" x2="290" y2="176" stroke={bar} strokeWidth="4" />
    </svg>
  );
}

/* ---------- Tekniskt diagram: täckskikt & distanser (tvärsnitt) ---------- */
export function CoverLayerDiagram({ className = "" }: { className?: string }) {
  const ink = "#0f172a";
  const soft = "#64748b";
  const accent = "#ea580c";
  const concrete = "#f1f5f9";
  return (
    <svg
      className={className}
      viewBox="0 0 440 260"
      fill="none"
      role="img"
      aria-label="Tvärsnitt som visar armering placerad på distanser med rätt täckskikt i en betongplatta"
    >
      {/* underlag (mark) – snedstreck */}
      <defs>
        <pattern id="ground" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="12" stroke={soft} strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect x="20" y="200" width="400" height="34" fill="url(#ground)" opacity="0.7" />
      <line x1="20" y1="200" x2="420" y2="200" stroke={soft} strokeWidth="2" />

      {/* betongplatta */}
      <rect x="20" y="70" width="400" height="130" fill={concrete} stroke={ink} strokeWidth="2" />

      {/* distanser (”stolar”) som lyfter armeringen */}
      {[90, 200, 310].map((x) => (
        <path key={x} d={`M ${x - 14} 200 L ${x} 150 L ${x + 14} 200`} stroke={soft} strokeWidth="3" strokeLinejoin="round" fill="none" />
      ))}

      {/* armeringsjärn i tvärsnitt (cirklar) på distanshöjd */}
      {[60, 120, 180, 240, 300, 360].map((x) => (
        <circle key={x} cx={x} cy="150" r="8" fill={accent} stroke={ink} strokeWidth="2" />
      ))}

      {/* måttlinje: täckskikt underkant */}
      <line x1="400" y1="158" x2="400" y2="200" stroke={ink} strokeWidth="1.5" />
      <path d="M 397 161 L 400 156 L 403 161" fill={ink} />
      <path d="M 397 197 L 400 200 L 403 197 Z" fill={ink} />

      {/* etiketter */}
      <text x="220" y="110" textAnchor="middle" fontSize="15" fontWeight="700" fill={ink} fontFamily="system-ui, sans-serif">Betong</text>
      <text x="300" y="138" textAnchor="middle" fontSize="13" fontWeight="600" fill={accent} fontFamily="system-ui, sans-serif">Armering</text>
      <text x="200" y="192" textAnchor="middle" fontSize="12" fill={soft} fontFamily="system-ui, sans-serif">Distans</text>
      <text x="200" y="252" textAnchor="middle" fontSize="12" fill={soft} fontFamily="system-ui, sans-serif">Underlag</text>
      <text x="412" y="182" fontSize="12" fontWeight="600" fill={ink} fontFamily="system-ui, sans-serif" transform="rotate(90 412 182)">Täckskikt</text>
    </svg>
  );
}

/* ---------- Bockningsschema: vanliga former ---------- */
export function BendingShapesDiagram({ className = "" }: { className?: string }) {
  const ink = "#0f172a";
  const soft = "#64748b";
  const accent = "#ea580c";
  const label = (x: number, t: string) => (
    <text x={x} y="140" textAnchor="middle" fontSize="13" fontWeight="600" fill={soft} fontFamily="system-ui, sans-serif">{t}</text>
  );
  return (
    <svg
      className={className}
      viewBox="0 0 460 160"
      fill="none"
      role="img"
      aria-label="Bockningsschema med vanliga armeringsformer: rak stång, vinkeljärn, U-bygel och sluten bygel"
    >
      {/* Rak */}
      <line x1="20" y1="70" x2="100" y2="70" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      {label(60, "Rak")}

      {/* Vinkel (L) */}
      <path d="M 150 30 L 150 100 L 215 100" stroke={accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {label(182, "Vinkel")}

      {/* U-bygel */}
      <path d="M 255 100 L 255 45 L 315 45 L 315 100" stroke={accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {label(285, "U-bygel")}

      {/* Sluten bygel */}
      <path d="M 375 100 L 375 40 L 435 40 L 435 100 L 383 100" stroke={ink} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {label(405, "Sluten bygel")}
    </svg>
  );
}

/* ---------- Dimensionsjämförelse: Ø6–Ø32 (tvärsnitt i skala) ---------- */
export function RebarDiametersDiagram({ className = "" }: { className?: string }) {
  const ink = "#0f172a";
  const soft = "#64748b";
  const accent = "#ea580c";
  const bars = [
    { mm: 6, x: 40 }, { mm: 8, x: 73 }, { mm: 10, x: 108 }, { mm: 12, x: 147 },
    { mm: 16, x: 190 }, { mm: 20, x: 239 }, { mm: 25, x: 295 }, { mm: 32, x: 359 },
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 420 150"
      fill="none"
      role="img"
      aria-label="Tvärsnitt av armeringsjärn i skala från 6 till 32 millimeter"
    >
      {bars.map((b) => (
        <g key={b.mm}>
          <circle cx={b.x} cy="70" r={(b.mm * 1.5) / 2} fill={accent} stroke={ink} strokeWidth="1.5" />
          <text x={b.x} y="128" textAnchor="middle" fontSize="12" fontWeight="600" fill={soft} fontFamily="system-ui, sans-serif">Ø{b.mm}</text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- Armeringsnät med överlapp ---------- */
export function MeshOverlapDiagram({ className = "" }: { className?: string }) {
  const ink = "#0f172a";
  const soft = "#64748b";
  const accent = "#ea580c";
  const line = "#94a3b8";
  const gx = [20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420];
  const gy = [70, 100, 130, 160];
  return (
    <svg
      className={className}
      viewBox="0 0 440 200"
      fill="none"
      role="img"
      aria-label="Två armeringsnät som överlappar varandra i skarven"
    >
      {/* överlappszon markerad */}
      <rect x="180" y="60" width="80" height="110" fill="#fff7ed" />

      {/* nät (rutnät) */}
      {gx.map((x) => (
        <line key={`v${x}`} x1={x} y1="70" x2={x} y2="160" stroke={line} strokeWidth="2" />
      ))}
      {gy.map((y) => (
        <line key={`h${y}`} x1="20" y1={y} x2="420" y2={y} stroke={line} strokeWidth="2" />
      ))}

      {/* accent på trådarna i överlappet */}
      {[180, 220, 260].map((x) => (
        <line key={`ov${x}`} x1={x} y1="70" x2={x} y2="160" stroke={accent} strokeWidth="3" />
      ))}

      {/* måttbygel för överlapp */}
      <line x1="180" y1="45" x2="260" y2="45" stroke={ink} strokeWidth="1.5" />
      <path d="M 183 42 L 180 45 L 183 48" fill={ink} />
      <path d="M 257 42 L 260 45 L 257 48" fill={ink} />
      <text x="220" y="36" textAnchor="middle" fontSize="12" fontWeight="700" fill={ink} fontFamily="system-ui, sans-serif">Överlapp</text>

      <text x="100" y="188" textAnchor="middle" fontSize="12" fill={soft} fontFamily="system-ui, sans-serif">Nät A</text>
      <text x="340" y="188" textAnchor="middle" fontSize="12" fill={soft} fontFamily="system-ui, sans-serif">Nät B</text>
    </svg>
  );
}

/** Register så bloggens content kan referera en illustration via nyckel. */
export const figures = {
  "cover-layer": CoverLayerDiagram,
  "rebar-cage": RebarCageIllustration,
  "bending-shapes": BendingShapesDiagram,
  "rebar-diameters": RebarDiametersDiagram,
  "mesh-overlap": MeshOverlapDiagram,
} as const;

export type FigureKey = keyof typeof figures;
