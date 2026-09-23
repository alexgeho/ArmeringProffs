/**
 * Beräkningar för armeringskalkylatorn (rena funktioner, inga React-beroenden).
 *
 * Alla resultat är riktvärden för att begära offert – dimension, placering,
 * överlapp och täckskikt ska följa konstruktionsritningen.
 *
 * Källor/tumregler:
 * - Vikt per meter kamstål: 0,00617 · d² kg/m (stålets densitet 7 850 kg/m³).
 * - Armeringsnät: standardark 2,35 × 5,0 m; överlapp minst en maskvidd, dock minst 300 mm.
 * - Omlottskarv för stänger: tumregel ca 50 · Ø (verklig längd enligt SS-EN 1992 / ritning).
 */

export const DIAMETERS = [6, 8, 10, 12, 16, 20, 25, 32] as const;

/** kg per löpmeter för kamstång med diameter d (mm). */
export const kgPerM = (d: number) => 0.00617 * d * d;

export const round = (n: number, step = 1) => Math.round(n / step) * step;

/* ---------------- Armeringsnät ---------------- */

export type MeshType = { key: string; d: number; cc: number; note: string };

export const MESHES: MeshType[] = [
  { key: "5150", d: 5, cc: 150, note: "Uterum, mindre plattor, golv" },
  { key: "6150", d: 6, cc: 150, note: "Garage, villaplatta, platta på mark" },
  { key: "7150", d: 7, cc: 150, note: "Tyngre laster" },
  { key: "8150", d: 8, cc: 150, note: "Industri, tunga laster" },
  { key: "10150", d: 10, cc: 150, note: "Mycket tunga laster" },
];

/** Nätets vikt per m² (trådar i båda riktningar). */
export const meshKgPerM2 = (m: MeshType) => 2 * (1000 / m.cc) * kgPerM(m.d);

export type MeshInput = {
  L: number; // plattans längd, m
  W: number; // plattans bredd, m
  mesh: MeshType;
  layers: 1 | 2;
  lapMm: number; // överlapp, mm
  sheetL?: number; // arkets längd, m
  sheetW?: number; // arkets bredd, m
};

/** Antal ark i en riktning: första arket täcker s, varje nytt ark s − överlapp. */
const sheetsAlong = (span: number, s: number, lap: number) =>
  span <= s ? 1 : 1 + Math.ceil((span - s) / Math.max(s - lap, 0.1));

export function calcMesh({ L, W, mesh, layers, lapMm, sheetL = 5.0, sheetW = 2.35 }: MeshInput) {
  const lap = lapMm / 1000;
  // Pröva båda orienteringarna, välj den som ger minst antal ark.
  const a = sheetsAlong(L, sheetL, lap) * sheetsAlong(W, sheetW, lap);
  const b = sheetsAlong(L, sheetW, lap) * sheetsAlong(W, sheetL, lap);
  const perLayer = Math.min(a, b);
  const sheets = perLayer * layers;
  const sheetArea = sheetL * sheetW;
  const area = L * W;
  const kg = sheets * sheetArea * meshKgPerM2(mesh);
  return {
    area,
    sheets,
    perLayer,
    sheetArea,
    meshM2: sheets * sheetArea,
    kg,
    // Riktvärden för tillbehör.
    spacers: Math.ceil(area * 1.5 * layers),
    tieWireKg: Math.max(1, round(area * 0.2 * layers, 0.5)),
  };
}

/* ---------------- Kantjärn ---------------- */

export function calcEdgeBars({ L, W, d, count, stock = 6, lapMm }: { L: number; W: number; d: number; count: number; stock?: number; lapMm: number }) {
  const lap = lapMm / 1000;
  const perimeter = 2 * (L + W);
  // Varje sträng runt om skarvas var (stock − lap) m; hörnen räknas som skarv i samma regel.
  const pieces = Math.ceil(perimeter / Math.max(stock - lap, 0.5));
  const lengthPerString = perimeter + pieces * lap;
  const lm = lengthPerString * count;
  return { perimeter, lm, kg: lm * kgPerM(d), stockBars: Math.ceil(lm / stock) };
}

/* ---------------- Kamjärn i platta/vägg (stänger c/c) ---------------- */

export type BarInput = {
  L: number; // m
  W: number; // m
  d: number; // Ø mm
  ccMm: number; // centrumavstånd mm
  layers: 1 | 2;
  coverMm: number; // täckskikt mm (minskar stånglängden i båda ändar)
  stock: number; // lagerlängd m (6 eller 12)
  lapMm: number; // omlottskarv mm
};

/** En riktning: stänger som spänner över `span`, fördelade över `across`. */
function direction(span: number, across: number, { d, ccMm, coverMm, stock, lapMm }: BarInput) {
  const c = coverMm / 1000;
  const cc = ccMm / 1000;
  const lap = lapMm / 1000;
  const count = Math.max(1, Math.floor((across - 2 * c) / cc) + 1);
  const len = Math.max(span - 2 * c, 0.1);
  const pieces = len <= stock ? 1 : Math.ceil((len - lap) / Math.max(stock - lap, 0.1));
  const lenWithLaps = len + (pieces - 1) * lap;
  return { count, len, pieces, lm: count * lenWithLaps, kg: count * lenWithLaps * kgPerM(d) };
}

export function calcBars(input: BarInput) {
  const x = direction(input.L, input.W, input); // stänger längs L
  const y = direction(input.W, input.L, input); // stänger längs W
  const lm = (x.lm + y.lm) * input.layers;
  const kg = lm * kgPerM(input.d);
  const area = input.L * input.W;
  return {
    x,
    y,
    lm,
    kg,
    kgPerM2: kg / Math.max(area, 0.01),
    stockBars: Math.ceil(lm / input.stock),
    spacers: Math.ceil(area * 1.5 * input.layers),
  };
}

/** Svensk talformatering: 1 234,5 */
export const fmt = (n: number, dec = 0) =>
  n.toLocaleString("sv-SE", { minimumFractionDigits: dec, maximumFractionDigits: dec });
