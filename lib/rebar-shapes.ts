/**
 * Parametriska bockningsformer → isometrisk SVG-geometri.
 *
 * Varje form beskrivs i mm i sitt eget plan (x åt höger, y uppåt) och
 * projiceras till ett vertikalt isometriskt plan: x går 30° snett uppåt höger,
 * y rakt upp. Resultatet skalas in i en ruta, hörnen rundas och måttlinjer
 * räknas ut i skärmkoordinater – så ritningen stämmer alltid med måtten.
 */

export type ShapeKind = "rak" | "vinkel" | "bygel" | "u" | "z" | "krok";

export type Position = {
  pos: number;
  dia: number; // Ø mm
  qty: number;
  kind: ShapeKind;
  name: string; // Form-kolumnen
  dims: number[]; // A, B, C … i mm
};

type P = [number, number];
type DimSpec = { a: P; b: P; n: P; label: number };

const COS = Math.cos(Math.PI / 6);
const SIN = 0.5;
const iso = ([x, y]: P): P => [x * COS, -x * SIN - y];

/** Formens mittlinje (mm) + vilka sträckor som får måttlinje. */
function outline(kind: ShapeKind, [A, B = 0, C = 0]: number[]): { pts: P[]; dims: DimSpec[] } {
  switch (kind) {
    case "rak":
      return { pts: [[0, 0], [A, 0]], dims: [{ a: [0, 0], b: [A, 0], n: [0, -1], label: A }] };
    case "vinkel":
      return {
        pts: [[0, A], [0, 0], [B, 0]],
        dims: [
          { a: [0, 0], b: [0, A], n: [-1, 0], label: A },
          { a: [0, 0], b: [B, 0], n: [0, -1], label: B },
        ],
      };
    case "u":
    case "krok":
      return {
        pts: [[0, B], [0, 0], [A, 0], [A, B]],
        dims: [
          { a: [0, 0], b: [A, 0], n: [0, -1], label: A },
          { a: [A, 0], b: [A, B], n: [1, 0], label: B },
        ],
      };
    case "z":
      return {
        pts: [[0, B], [A, B], [A, 0], [A + C, 0]],
        dims: [
          { a: [0, B], b: [A, B], n: [0, 1], label: A },
          { a: [A, 0], b: [A, B], n: [-1, 0], label: B },
          { a: [A, 0], b: [A + C, 0], n: [0, -1], label: C },
        ],
      };
    case "bygel": {
      // Sluten bygel med två 135°-krokar in mot mitten i övre vänstra hörnet.
      const h = Math.min(A, B) * 0.38;
      return {
        pts: [[h * 0.7, B - h * 0.7], [0, B], [0, 0], [A, 0], [A, B], [0, B], [h * 0.85, B - h * 0.5]],
        dims: [
          { a: [0, 0], b: [A, 0], n: [0, -1], label: A },
          { a: [A, 0], b: [A, B], n: [1, 0], label: B },
        ],
      };
    }
  }
}

/** Polyline → path med rundade hörn (radie i px). */
function roundedPath(pts: P[], r = 7): string {
  const f = (n: number) => n.toFixed(1);
  let d = `M ${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [p0, p1, p2] = [pts[i - 1], pts[i], pts[i + 1]];
    const l1 = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
    const l2 = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    const rr = Math.min(r, l1 / 2.5, l2 / 2.5);
    const a: P = [p1[0] + ((p0[0] - p1[0]) / l1) * rr, p1[1] + ((p0[1] - p1[1]) / l1) * rr];
    const b: P = [p1[0] + ((p2[0] - p1[0]) / l2) * rr, p1[1] + ((p2[1] - p1[1]) / l2) * rr];
    d += ` L ${f(a[0])} ${f(a[1])} Q ${f(p1[0])} ${f(p1[1])} ${f(b[0])} ${f(b[1])}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L ${f(last[0])} ${f(last[1])}`;
}

export type Dim = { x1: number; y1: number; x2: number; y2: number; e1: string; e2: string; lx: number; ly: number; angle: number; label: string };

/** Ritar formen centrerad i rutan (x0,y0,w,h). */
export function layoutShape(p: Position, box = { x: 30, y: 60, w: 280, h: 190 }) {
  const { pts, dims } = outline(p.kind, p.dims);
  const proj = pts.map(iso);
  const xs = proj.map((q) => q[0]);
  const ys = proj.map((q) => q[1]);
  const [minX, maxX, minY, maxY] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const s = Math.min(box.w / Math.max(maxX - minX, 1), box.h / Math.max(maxY - minY, 1));
  const ox = box.x + (box.w - (maxX - minX) * s) / 2 - minX * s;
  const oy = box.y + (box.h - (maxY - minY) * s) / 2 - minY * s;
  const toScreen = (q: P): P => {
    const [x, y] = iso(q);
    return [ox + x * s, oy + y * s];
  };

  const screen = pts.map(toScreen);
  const OFF = 20;
  const out: Dim[] = dims.map(({ a, b, n, label }) => {
    const A = toScreen(a);
    const B = toScreen(b);
    const [nx0, ny0] = iso(n);
    const nl = Math.hypot(nx0, ny0);
    const [nx, ny] = [nx0 / nl, ny0 / nl];
    const a2: P = [A[0] + nx * OFF, A[1] + ny * OFF];
    const b2: P = [B[0] + nx * OFF, B[1] + ny * OFF];
    let angle = (Math.atan2(b2[1] - a2[1], b2[0] - a2[0]) * 180) / Math.PI;
    if (angle > 90) angle -= 180;
    if (angle < -90) angle += 180;
    const ext = (q: P, e: P) => `M ${(q[0] + nx * 5).toFixed(1)} ${(q[1] + ny * 5).toFixed(1)} L ${(e[0] + nx * 6).toFixed(1)} ${(e[1] + ny * 6).toFixed(1)}`;
    return {
      x1: a2[0], y1: a2[1], x2: b2[0], y2: b2[1],
      e1: ext(A, a2), e2: ext(B, b2),
      lx: (a2[0] + b2[0]) / 2 + nx * 11, ly: (a2[1] + b2[1]) / 2 + ny * 11,
      angle, label: String(label),
    };
  });

  const bottom = Math.max(...screen.map((q) => q[1]));
  const cx = (Math.min(...screen.map((q) => q[0])) + Math.max(...screen.map((q) => q[0]))) / 2;
  return { d: roundedPath(screen), dims: out, shadow: { cx, cy: bottom + 8, rx: (maxX - minX) * s * 0.45 } };
}
