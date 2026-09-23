/**
 * Typformer för bockning (bokstavskoder enligt den svenska förteckningen över
 * bockning av stänger, 2A 1979) → isometrisk SVG-geometri.
 *
 * Varje form byggs parametriskt i mm: x åt höger, y uppåt, z djup (för de
 * rumsbockade formerna). Plana former ritas i vy framifrån (sanna vinklar, som
 * i standarden), rumsbockade isometriskt. Punkterna skalas in i en ruta,
 * hörnen rundas och måttlinjer räknas ut – ritningen följer alltid måtten.
 * Ritningarna är våra egna; bara kodsystemet och måttbeteckningarna är standard.
 * Ändkrokar (L/M/A i standarden) ritas inte – de anges separat i listan.
 */

type V = [number, number, number];
type Dim = { a: V; b: V; n: V; k: string; v: number };
type Note = { p: V; text: string };
/** fit: extra punkter som ska rymmas i bilden (t.ex. bågens centrum). */
type Built = { pts: V[]; dims: Dim[]; notes?: Note[]; fit?: V[] };

export type ShapeDef = {
  code: string;
  group: "1–2" | "3–4" | "5";
  name: string;
  /** Standardmått (mm resp. grader för v/u/s). */
  params: Record<string, number>;
  build?: (p: Record<string, number>) => Built;
  /** Härledda mått som visas i listan men inte matas in. */
  derived?: (p: Record<string, number>) => Record<string, number>;
  note?: string;
  /** Rumsbockad form → isometrisk vy i stället för vy framifrån. */
  iso?: boolean;
};

const rad = (d: number) => (d * Math.PI) / 180;
const P = (x: number, y: number, z = 0): V => [x, y, z];

/** Måttlinje längs a→b i planet; s=+1 lägger den på vänster sida om a→b, s=-1 höger. */
function dim(a: V, b: V, s: 1 | -1, k: string, v: number): Dim {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const l = Math.hypot(dx, dy) || 1;
  return { a, b, n: [(-dy / l) * s, (dx / l) * s, 0], k, v };
}
const dim3 = (a: V, b: V, n: V, k: string, v: number): Dim => ({ a, b, n, k, v });

/** Båge runt (cx,cy) från vinkel a0 till a1 (grader), n steg. */
function arc(cx: number, cy: number, r: number, a0: number, a1: number, n = 18): V[] {
  return Array.from({ length: n + 1 }, (_, i) => {
    const t = rad(a0 + ((a1 - a0) * i) / n);
    return P(cx + r * Math.cos(t), cy + r * Math.sin(t));
  });
}

/** Sluten bygel: hörnen i ordning, start i hörn 0 där två 135°-krokar går in mot mitten. */
function closed(corners: V[]): V[] {
  const c = corners.reduce((s, q) => [s[0] + q[0] / corners.length, s[1] + q[1] / corners.length, 0] as V, P(0, 0));
  const [x0, y0] = corners[0];
  const side = Math.min(...corners.map((q, i) => {
    const r = corners[(i + 1) % corners.length];
    return Math.hypot(r[0] - q[0], r[1] - q[1]);
  }));
  const h = Math.min(side * 0.3, Math.hypot(c[0] - x0, c[1] - y0) * 0.3);
  const base = Math.atan2(c[1] - y0, c[0] - x0);
  const hook = (d: number): V => P(x0 + h * Math.cos(base + d), y0 + h * Math.sin(base + d));
  return [hook(0.18), ...corners, corners[0], hook(-0.18)];
}

export const SHAPES: ShapeDef[] = [
  /* ---------------- Grupp 1–2 ---------------- */
  {
    code: "A", group: "1–2", name: "Rak stång", params: { a: 3000 },
    build: ({ a }) => ({ pts: [P(0, 0), P(a, 0)], dims: [dim(P(0, 0), P(a, 0), -1, "a", a)] }),
  },
  {
    code: "B", group: "1–2", name: "Vinkeljärn 90°", params: { a: 1200, b: 500 },
    build: ({ a, b }) => ({
      pts: [P(0, b), P(a, b), P(a, 0)],
      dims: [dim(P(0, b), P(a, b), 1, "a", a), dim(P(a, 0), P(a, b), -1, "b", b)],
    }),
  },
  {
    code: "C", group: "1–2", name: "U-järn", params: { a: 400, b: 800, c: 400 },
    build: ({ a, b, c }) => ({
      pts: [P(0, a), P(0, 0), P(b, 0), P(b, c)],
      dims: [dim(P(0, 0), P(0, a), 1, "a", a), dim(P(0, 0), P(b, 0), -1, "b", b), dim(P(b, 0), P(b, c), -1, "c", c)],
    }),
  },
  {
    code: "D", group: "1–2", name: "Vinkel, valfri vinkel", params: { a: 800, b: 500, v: 45 },
    build: ({ a, b, v }) => {
      const e = P(a + b * Math.cos(rad(v)), b * Math.sin(rad(v)));
      return { pts: [P(0, 0), P(a, 0), e], dims: [dim(P(0, 0), P(a, 0), -1, "a", a), dim(P(a, 0), e, 1, "b", b)] };
    },
  },
  {
    code: "E", group: "1–2", name: "Tråg med sneda ben", params: { a: 500, b: 800, c: 500, v: 45, u: 45 },
    build: ({ a, b, c, v, u }) => {
      const s = P(-a * Math.cos(rad(v)), a * Math.sin(rad(v)));
      const e = P(b + c * Math.cos(rad(u)), c * Math.sin(rad(u)));
      return {
        pts: [s, P(0, 0), P(b, 0), e],
        dims: [dim(P(0, 0), s, -1, "a", a), dim(P(0, 0), P(b, 0), -1, "b", b), dim(P(b, 0), e, 1, "c", c)],
      };
    },
  },
  {
    code: "F", group: "1–2", name: "Spetsvinkel (tillbakabockad)", params: { a: 700, b: 500, v: 45 },
    build: ({ a, b, v }) => {
      const e = P(a - b * Math.cos(rad(v)), b * Math.sin(rad(v)));
      return { pts: [P(0, 0), P(a, 0), e], dims: [dim(P(0, 0), P(a, 0), -1, "a", a), dim(P(a, 0), e, -1, "b", b)] };
    },
  },
  {
    code: "G", group: "1–2", name: "Snedbockad stång", params: { a: 600, c: 600, x: 400, s: 45 },
    derived: ({ x, s }) => ({ b: Math.round(x / Math.sin(rad(s))) }),
    build: ({ a, c, x, s }) => {
      const p2 = P(a + x / Math.tan(rad(s)), 0);
      const b = Math.round(x / Math.sin(rad(s)));
      return {
        pts: [P(0, x), P(a, x), p2, P(p2[0] + c, 0)],
        dims: [dim(P(0, x), P(a, x), 1, "a", a), dim(P(a, x), p2, 1, "b", b), dim(p2, P(p2[0] + c, 0), -1, "c", c)],
      };
    },
  },
  {
    code: "EX", group: "1–2", name: "Öppen bygel med sned sida", params: { a: 600, c: 800, y: 400 },
    derived: ({ a, c, y }) => ({ b: Math.round(Math.hypot(c - a, y)) }),
    build: ({ a, c, y }) => ({
      pts: [P(0, y), P(a, y), P(c, 0), P(0, 0)],
      dims: [dim(P(0, y), P(a, y), 1, "a", a), dim(P(0, 0), P(c, 0), -1, "c", c), dim(P(0, 0), P(0, y), 1, "y", y)],
    }),
  },

  /* ---------------- Grupp 3–4 ---------------- */
  {
    code: "K", group: "3–4", name: "Öppen bygel", params: { a: 350, b: 450, c: 600, d: 300 },
    build: ({ a, b, c, d }) => ({
      pts: [P(0, d), P(0, 0), P(c, 0), P(c, b), P(c - a, b)],
      dims: [
        dim(P(0, 0), P(0, d), 1, "d", d), dim(P(0, 0), P(c, 0), -1, "c", c),
        dim(P(c, 0), P(c, b), -1, "b", b), dim(P(c - a, b), P(c, b), 1, "a", a),
      ],
    }),
  },
  {
    code: "L", group: "3–4", name: "Bygel med överlapp", params: { a: 700, b: 420, c: 650, d: 350, e: 560, f: 220 },
    build: ({ a, b, c, d, e, f }) => ({
      pts: [P(c - a, b), P(c, b), P(c, 0), P(0, 0), P(0, d), P(e, d), P(e, d - f)],
      dims: [
        dim(P(c - a, b), P(c, b), 1, "a", a), dim(P(c, 0), P(c, b), -1, "b", b),
        dim(P(0, 0), P(c, 0), -1, "c", c), dim(P(0, 0), P(0, d), 1, "d", d),
      ],
    }),
  },
  {
    code: "LX", group: "3–4", name: "Bygel med förlängt ben", params: { a: 1200, b: 300, c: 350, d: 320, e: 300, s: 15 },
    build: ({ a, b, c, d, e, s }) => {
      const p2 = P(-40, b);
      const p3 = P(p2[0] + c * Math.cos(rad(s)), b + c * Math.sin(rad(s)));
      const p4 = P(p3[0], p3[1] - d);
      const p5 = P(p4[0] - e, p4[1]);
      return {
        pts: [P(a, 0), P(0, 0), p2, p3, p4, p5],
        dims: [
          dim(P(0, 0), P(a, 0), -1, "a", a), dim(P(0, 0), p2, 1, "b", b),
          dim(p2, p3, 1, "c", c), dim(p4, p3, -1, "d", d),
        ],
      };
    },
  },
  {
    code: "N", group: "3–4", name: "Sluten bygel", params: { a: 400, b: 300 },
    build: ({ a, b }) => ({
      pts: closed([P(0, b), P(0, 0), P(a, 0), P(a, b)]),
      dims: [dim(P(0, b), P(a, b), 1, "a", a), dim(P(a, 0), P(a, b), -1, "b", b)],
    }),
  },
  {
    code: "NX", group: "3–4", name: "Sluten bygel med sned sida", params: { a: 500, c: 700, d: 400 },
    derived: ({ a, c, d }) => ({ b: Math.round(Math.hypot(c - a, d)) }),
    build: ({ a, c, d }) => ({
      pts: closed([P(0, d), P(0, 0), P(c, 0), P(a, d)]),
      dims: [dim(P(0, d), P(a, d), 1, "a", a), dim(P(0, 0), P(c, 0), -1, "c", c), dim(P(0, 0), P(0, d), 1, "d", d)],
    }),
  },
  {
    code: "T", group: "3–4", name: "Hattjärn", params: { a: 300, b: 300, c: 500, d: 300, e: 300 },
    build: ({ a, b, c, d, e }) => ({
      pts: [P(0, b), P(a, b), P(a, 0), P(a + c, 0), P(a + c, d), P(a + c + e, d)],
      dims: [
        dim(P(0, b), P(a, b), 1, "a", a), dim(P(a, 0), P(a, b), 1, "b", b), dim(P(a, 0), P(a + c, 0), -1, "c", c),
        dim(P(a + c, 0), P(a + c, d), -1, "d", d), dim(P(a + c, d), P(a + c + e, d), 1, "e", e),
      ],
    }),
  },
  {
    code: "Z", group: "3–4", name: "Z-järn", params: { a: 800, b: 400, c: 350, d: 350, v: 45 },
    build: ({ a, b, c, d, v }) => {
      const e = P(a - c - d * Math.cos(rad(v)), d * Math.sin(rad(v)));
      return {
        pts: [P(0, b), P(a, b), P(a, 0), P(a - c, 0), e],
        dims: [
          dim(P(0, b), P(a, b), 1, "a", a), dim(P(a, 0), P(a, b), -1, "b", b),
          dim(P(a - c, 0), P(a, 0), -1, "c", c), dim(P(a - c, 0), e, 1, "d", d),
        ],
      };
    },
  },
  {
    code: "M", group: "3–4", name: "Dubbelt snedbockad (sicksack)", params: { b: 200, d: 200, f: 200, x: 250 },
    derived: ({ x }) => ({ "a=c=e=g": Math.round(x * Math.SQRT2) }),
    build: ({ b, d, f, x }) => {
      const xs = [0, x, x + b, 2 * x + b, 2 * x + b + d, 3 * x + b + d, 3 * x + b + d + f, 4 * x + b + d + f];
      const ys = [x, 0, 0, x, x, 0, 0, x];
      const pts = xs.map((q, i) => P(q, ys[i]));
      return {
        pts,
        dims: [dim(pts[1], pts[2], -1, "b", b), dim(pts[3], pts[4], 1, "d", d), dim(pts[5], pts[6], -1, "f", f)],
      };
    },
  },
  {
    code: "SH", group: "3–4", name: "Hårnål med kröpning", params: { a: 900, b: 80, c: 400, y: 100 },
    derived: ({ b, c }) => ({ d: b + c + 100 }),
    note: "d = b + c + 100 · klipplängd ≈ a + b + c + d + 0,5y",
    build: ({ a, b, c, y }) => {
      const d = b + c + 100;
      const low = y * 0.72;
      return {
        pts: [P(d, y), ...arc(0, y / 2, y / 2, 90, 270, 10), P(c, 0), P(c + b, low), P(c + b + a, low)],
        dims: [dim(P(0, y), P(d, y), 1, "d", d), dim(P(0, 0), P(c, 0), -1, "c", c), dim(P(c + b, low), P(c + b + a, low), -1, "a", a)],
      };
    },
  },
  {
    code: "J", group: "3–4", name: "Symmetriskt snedbockad", params: { a: 400, c: 300, e: 400, x: 300, s: 45 },
    derived: ({ x, s }) => ({ "b=d": Math.round(x / Math.sin(rad(s))) }),
    build: ({ a, c, e, x, s }) => {
      const run = x / Math.tan(rad(s));
      const pts = [P(0, 0), P(a, 0), P(a + run, x), P(a + run + c, x), P(a + 2 * run + c, 0), P(a + 2 * run + c + e, 0)];
      return {
        pts,
        dims: [dim(pts[0], pts[1], -1, "a", a), dim(pts[2], pts[3], 1, "c", c), dim(pts[4], pts[5], -1, "e", e)],
      };
    },
  },
  {
    code: "H", group: "3–4", name: "Snedbockad med vinklade ändar", params: { a: 300, b: 400, c: 450, d: 400, e: 300, s: 45, v: 30, u: 30 },
    build: ({ a, b, c, d, e, s, v, u }) => {
      const h = c * Math.sin(rad(s));
      const p1 = P(0, h);
      const p0 = P(-a * Math.cos(rad(v)), h - a * Math.sin(rad(v)));
      const p3 = P(b + c * Math.cos(rad(s)), 0);
      const p4 = P(p3[0] + d, 0);
      const p5 = P(p4[0] + e * Math.cos(rad(u)), e * Math.sin(rad(u)));
      return {
        pts: [p0, p1, P(b, h), p3, p4, p5],
        dims: [dim(p1, P(b, h), 1, "b", b), dim(P(b, h), p3, 1, "c", c), dim(p3, p4, -1, "d", d)],
      };
    },
  },
  {
    code: "U", group: "3–4", name: "Sluten bygel, sexkantig", params: { x: 700, y: 360, c: 120 },
    build: ({ x, y, c }) => {
      const k = 130;
      const m = y / 2;
      return {
        pts: closed([P(k, y), P(0, m + c / 2), P(0, m - c / 2), P(k, 0), P(x - k, 0), P(x, m - c / 2), P(x, m + c / 2), P(x - k, y)]),
        dims: [dim(P(0, 0), P(x, 0), -1, "x", x), dim(P(x, m - c / 2), P(x, m + c / 2), -1, "c", c), dim(P(0, 0), P(0, y), 1, "y", y)],
      };
    },
  },
  {
    code: "V", group: "3–4", name: "Sluten bygel, fasade hörn", params: { a: 440, x: 600, y: 350 },
    build: ({ a, x, y }) => {
      const k = (x - a) / 2;
      return {
        pts: closed([P(k, y), P(0, y - k), P(0, k), P(k, 0), P(x - k, 0), P(x, k), P(x, y - k), P(x - k, y)]),
        dims: [dim(P(k, y), P(x - k, y), 1, "a", a), dim(P(0, 0), P(x, 0), -1, "x", x), dim(P(x, 0), P(x, y), -1, "y", y)],
      };
    },
  },
  {
    code: "W", group: "3–4", name: "Bygel med sned botten", params: { a: 700, b: 300, c: 350, d: 250, e: 300, v: 10 },
    build: ({ a, b, c, d, e, v }) => {
      const top = 500;
      const p2 = P(a, top - b);
      const p3 = P(a - c * Math.cos(rad(v)), top - b - c * Math.sin(rad(v)));
      const p4 = P(p3[0], p3[1] + d);
      const p5 = P(p4[0] - e, p4[1]);
      return {
        pts: [P(0, top), P(a, top), p2, p3, p4, p5],
        dims: [dim(P(0, top), P(a, top), 1, "a", a), dim(p2, P(a, top), -1, "b", b), dim(p3, p2, -1, "c", c), dim(p3, p4, 1, "d", d)],
      };
    },
  },

  /* ---------------- Grupp 5 ---------------- */
  {
    code: "S", group: "5", name: "Hårnål", params: { a: 600, b: 700, y: 200 },
    note: "Klipplängd ≈ a + b + 0,5y",
    build: ({ a, b, y }) => ({
      pts: [P(0, y), P(a, y), ...arc(a, y / 2, y / 2, 90, -90, 10).slice(1, -1), P(a, 0), P(a - b, 0)],
      dims: [dim(P(0, y), P(a, y), 1, "a", a), dim(P(a - b, 0), P(a, 0), -1, "b", b), dim(P(a + y / 2, 0), P(a + y / 2, y), -1, "y", y)],
    }),
  },
  {
    code: "R", group: "5", name: "Ögla", params: { a: 700, c: 350, d: 300, y: 250 },
    derived: ({ y }) => ({ b: Math.round(3.3 * y) }),
    note: "b ≈ 3,3y",
    build: ({ a, c, d, y }) => ({
      pts: [P(0, 0), P(a, 0), ...arc(a, -y / 2, y / 2, 90, -270, 24).slice(1), P(a, c), P(a + d, c)],
      dims: [
        dim(P(0, 0), P(a, 0), 1, "a", a), dim(P(a + y / 2, -y), P(a + y / 2, 0), -1, "y", y),
        dim(P(a, c), P(a + d, c), 1, "d", d),
      ],
    }),
  },
  {
    code: "SX", group: "5", iso: true, name: "Hårnål, rumsbockad", params: { a: 500, b: 350, d: 500, w: 150 },
    build: ({ a, b, d, w }) => {
      const q = b * Math.SQRT1_2;
      return {
        pts: [P(0, 0), P(a, 0), P(a + q, q), P(a + q, q, w), P(a, 0, w), P(a - d, 0, w)],
        dims: [dim3(P(0, 0), P(a, 0), [0, -1, 0], "a", a), dim3(P(a - d, 0, w), P(a, 0, w), [0, -1, 0], "d", d)],
      };
    },
  },
  {
    code: "Q", group: "5", name: "Bågformad stång", params: { a: 1500, x: 900 },
    note: "a = båglängd, x = yttre radie",
    build: ({ a, x }) => {
      const th = ((a / x) * 180) / Math.PI;
      return {
        pts: arc(0, 0, x, 90 + th / 2, 90 - th / 2, 28),
        dims: [dim3(P(0, 0), P(0, x), [0, 0, 0], "x", x)],
        notes: [{ p: P(0, x * 1.12), text: `a = ${a}` }],
        fit: [P(0, 0)],
      };
    },
  },
  {
    code: "O", group: "5", iso: true, name: "Spiral", params: { a: 400, x: 4, y: 100 },
    note: "a = diameter · x = antal varv · y = stigning per varv",
    build: ({ a, x, y }) => {
      const n = Math.round(x * 20);
      const pts = Array.from({ length: n + 1 }, (_, i) => {
        const t = (i / 20) * 2 * Math.PI;
        return P((a / 2) * Math.cos(t), (y * i) / 20, (a / 2) * Math.sin(t));
      });
      return {
        pts,
        dims: [dim3(P(-a / 2, -a * 0.35, 0), P(a / 2, -a * 0.35, 0), [0, -1, 0], "a", a)],
        notes: [{ p: P(0, x * y + a * 0.55, 0), text: `${x} varv · ${y} mm/varv` }],
      };
    },
  },
  {
    code: "X", group: "5", iso: true, name: "Rumsbockad, ben åt olika håll", params: { a: 300, b: 400, c: 500, d: 400, e: 300 },
    build: ({ a, b, c, d, e }) => ({
      pts: [P(0, 0, -a), P(0, 0), P(0, b), P(c, b), P(c, b - d), P(c, b - d, e)],
      dims: [
        dim3(P(0, b), P(c, b), [0, 1, 0], "c", c), dim3(P(0, 0), P(0, b), [-1, 0, 0], "b", b),
        dim3(P(c, b - d), P(c, b), [1, 0, 0], "d", d),
      ],
    }),
  },
  {
    code: "XX", group: "5", iso: true, name: "Rumsbockad, ben åt samma håll", params: { a: 300, b: 400, c: 500, d: 400, e: 300 },
    build: ({ a, b, c, d, e }) => ({
      pts: [P(0, 0, a), P(0, 0), P(0, b), P(c, b), P(c, b - d), P(c, b - d, e)],
      dims: [
        dim3(P(0, b), P(c, b), [0, 1, 0], "c", c), dim3(P(0, 0), P(0, b), [-1, 0, 0], "b", b),
        dim3(P(c, b - d), P(c, b), [1, 0, 0], "d", d),
      ],
    }),
  },
  {
    code: "Special", group: "5", name: "Specialform enligt ritning", params: {},
    note: "Form som inte finns i listan – skicka ritning eller skiss, så tillverkar vi efter den.",
  },
];

/* ---------------- Projektion & layout ---------------- */

const COS = Math.cos(Math.PI / 6);
const iso = ([x, y, z]: V): [number, number] => [(x - z) * COS, -(x + z) * 0.5 - y];
const front = ([x, y]: V): [number, number] => [x, -y];

function roundedPath(pts: [number, number][], r = 7): string {
  const f = (n: number) => n.toFixed(1);
  let d = `M ${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [p0, p1, p2] = [pts[i - 1], pts[i], pts[i + 1]];
    const l1 = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) || 1;
    const l2 = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) || 1;
    const rr = Math.min(r, l1 / 2.5, l2 / 2.5);
    d += ` L ${f(p1[0] + ((p0[0] - p1[0]) / l1) * rr)} ${f(p1[1] + ((p0[1] - p1[1]) / l1) * rr)}`;
    d += ` Q ${f(p1[0])} ${f(p1[1])} ${f(p1[0] + ((p2[0] - p1[0]) / l2) * rr)} ${f(p1[1] + ((p2[1] - p1[1]) / l2) * rr)}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L ${f(last[0])} ${f(last[1])}`;
}

export type DimLine = { line: string; ext: string; lx: number; ly: number; angle: number; label: string };

export function layoutShape(def: ShapeDef, box = { x: 40, y: 40, w: 300, h: 220 }) {
  if (!def.build) return null;
  const { pts, dims, notes = [], fit = [] } = def.build(def.params);
  const view = def.iso ? iso : front;
  const proj = pts.map(view);
  const all = [...proj, ...[...fit, ...notes.map((nt) => nt.p), ...dims.flatMap((d) => [d.a, d.b])].map(view)];
  const xs = all.map((q) => q[0]);
  const ys = all.map((q) => q[1]);
  const [minX, maxX, minY, maxY] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const s = Math.min(box.w / Math.max(maxX - minX, 1), box.h / Math.max(maxY - minY, 1));
  const ox = box.x + (box.w - (maxX - minX) * s) / 2 - minX * s;
  const oy = box.y + (box.h - (maxY - minY) * s) / 2 - minY * s;
  const scr = (q: V): [number, number] => {
    const [x, y] = view(q);
    return [ox + x * s, oy + y * s];
  };
  const f = (n: number) => n.toFixed(1);

  const OFF = 18;
  const dimLines: DimLine[] = dims.map(({ a, b, n, k, v }) => {
    const A = scr(a);
    const B = scr(b);
    const [n0x, n0y] = view(n);
    const nl = Math.hypot(n0x, n0y);
    const [nx, ny] = nl ? [n0x / nl, n0y / nl] : [0, 0];
    const off = nl ? OFF : 0;
    const a2 = [A[0] + nx * off, A[1] + ny * off];
    const b2 = [B[0] + nx * off, B[1] + ny * off];
    let angle = (Math.atan2(b2[1] - a2[1], b2[0] - a2[0]) * 180) / Math.PI;
    if (angle > 90) angle -= 180;
    if (angle < -90) angle += 180;
    // Etikett utanför linjen; för mått utan förskjutning (radie) läggs den bredvid.
    const [px, py] = nl ? [nx, ny] : [Math.sin(rad(angle)), -Math.cos(rad(angle))];
    const ext = nl
      ? `M ${f(A[0] + nx * 4)} ${f(A[1] + ny * 4)} L ${f(a2[0] + nx * 5)} ${f(a2[1] + ny * 5)} M ${f(B[0] + nx * 4)} ${f(B[1] + ny * 4)} L ${f(b2[0] + nx * 5)} ${f(b2[1] + ny * 5)}`
      : "";
    return {
      line: `M ${f(a2[0])} ${f(a2[1])} L ${f(b2[0])} ${f(b2[1])}`,
      ext,
      lx: (a2[0] + b2[0]) / 2 + px * 10,
      ly: (a2[1] + b2[1]) / 2 + py * 10,
      angle,
      label: `${k} = ${v}`,
    };
  });

  const screen = proj.map(([x, y]) => [ox + x * s, oy + y * s] as [number, number]);
  const bottom = Math.max(...screen.map((q) => q[1]));
  return {
    d: roundedPath(screen),
    dims: dimLines,
    notes: notes.map((nt) => ({ ...nt, xy: scr(nt.p) })),
    shadow: { cx: ox + ((minX + maxX) / 2) * s, cy: bottom + 10, rx: (maxX - minX) * s * 0.42 },
  };
}

/** Alla mått att visa i listan (inmatade + härledda). */
export function shapeParams(def: ShapeDef): [string, string][] {
  const all = { ...def.params, ...(def.derived?.(def.params) ?? {}) };
  return Object.entries(all)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => [k, ["v", "u", "s"].includes(k) ? `${v}°` : k === "x" && def.code === "O" ? `${v} varv` : `${v} mm`]);
}
