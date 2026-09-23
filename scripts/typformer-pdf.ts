/**
 * Genererar public/downloads/typformer-bockning-armeringsproffs.pdf –
 * alla typformer (A…XX + Special) med bokstavskod och måttbeteckningar.
 * Samma geometri som verktyget på /tjanster/bockningslista (lib/bending-shapes.ts).
 *
 * Kör: npx tsx scripts/typformer-pdf.ts   (kräver Google Chrome)
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { SHAPES, layoutShape, unitOf } from "../lib/bending-shapes";

const ACCENT = "#ea580c";
const INK = "#0f172a";
const STEEL = "#475569";

function cell(code: string) {
  const def = SHAPES.find((s) => s.code === code)!;
  const L = layoutShape(def, { x: 38, y: 34, w: 144, h: 86 });
  let svg = "";
  if (L) {
    svg += `<path d="${L.d}" fill="none" stroke="${STEEL}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    for (const m of L.dims) {
      svg += `<path d="${m.line} ${m.ext}" stroke="${ACCENT}" stroke-width="0.8" fill="none"/>`;
      svg += `<text transform="translate(${m.lx.toFixed(1)} ${m.ly.toFixed(1)}) rotate(${m.angle.toFixed(1)})" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="700" fill="${ACCENT}" paint-order="stroke" stroke="#fff" stroke-width="2.5">${m.key}</text>`;
    }
  } else {
    svg += `<rect x="50" y="45" width="120" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-dasharray="5 4"/><text x="110" y="85" text-anchor="middle" font-size="11" fill="#64748b">enligt ritning</text>`;
  }
  const units = Object.keys(def.params)
    .map((k) => `${k}${unitOf(def, k) === "°" ? " (°)" : unitOf(def, k) === "varv" ? " (varv)" : ""}`)
    .join(", ");
  return `<div class="cell">
    <div class="hd"><span class="code">${def.code}</span><span class="name">${def.name}</span></div>
    <svg viewBox="0 0 220 150">${svg}</svg>
    <div class="ft">${units ? "Mått: " + units : "Bifoga ritning eller skiss"}${def.note ? `<br/><span class="note">${def.note}</span>` : ""}</div>
  </div>`;
}

const groups = ["1–2", "3–4", "5"] as const;
const pages: string[] = [];
const all = SHAPES.map((s) => s.code);
const PER = 12; // 3 × 4 per sida
for (let i = 0; i < all.length; i += PER) pages.push(all.slice(i, i + PER).map(cell).join(""));

const html = `<!doctype html><html lang="sv"><head><meta charset="utf-8"><title>Typformer för bockning – Armeringsproffs</title>
<style>
@page { size: A4; margin: 12mm 12mm 14mm; }
* { box-sizing: border-box; }
body { font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; color: ${INK}; margin: 0; }
header { display:flex; justify-content:space-between; align-items:flex-end; border-bottom: 2px solid ${ACCENT}; padding-bottom: 6px; margin-bottom: 8px; }
h1 { font-size: 18px; margin: 0; }
.sub { font-size: 9.5px; color:#475569; margin-top:2px; }
.brand { text-align:right; font-size: 9.5px; color:#475569; }
.brand b { color:${INK}; font-size: 12px; }
.grid { display:grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.cell { border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px 7px 5px; break-inside: avoid; }
.hd { display:flex; align-items:baseline; gap:6px; }
.code { font-size: 15px; font-weight: 800; color:${ACCENT}; min-width: 28px; }
.name { font-size: 9.5px; font-weight: 600; }
svg { width: 100%; height: auto; display:block; }
.ft { font-size: 8.5px; color:#475569; line-height:1.35; min-height: 22px; }
.note { color:#64748b; }
.page { break-after: page; }
.page:last-child { break-after: auto; }
.info { font-size: 9px; color:#334155; margin-top: 8px; line-height: 1.45; border-top:1px solid #e2e8f0; padding-top:6px; }
</style></head><body>
${pages
  .map(
    (p, i) => `<section class="page">
<header><div><h1>Typformer för bockning av armering</h1><div class="sub">Bokstavskoder och måttbeteckningar (a, b, c …) att använda i bockningslistan · sida ${i + 1} av ${pages.length}</div></div>
<div class="brand"><b>Armeringsproffs</b><br/>armeringproffs.se · offert@armeringproffs.se · +46 72 858 99 75</div></header>
<div class="grid">${p}</div>
${i === pages.length - 1 ? `<div class="info"><b>Så använder du bladet:</b> ange för varje position typform (kod), mått i mm enligt beteckningarna, dimension (Ø), stålkvalitet och antal – t.ex. <i>Pos 3 · N · Ø10 B500B · a = 300, b = 200 · 48 st</i>. Mått avser ytterkontur. Bockningsradie enligt SS-EN 1992-1-1 om inget annat anges. Ändkrokar anges separat. Koderna följer den svenska förteckningen över bockning av stänger (2A 1979); ritningarna är Armeringsproffs egna.<br/>Prova formerna med egna mått och skicka listan direkt på <b>armeringproffs.se/tjanster/bockningslista</b>.</div>` : ""}
</section>`,
  )
  .join("")}
</body></html>`;

const tmp = join(tmpdir(), "typformer.html");
writeFileSync(tmp, html);
mkdirSync("public/downloads", { recursive: true });
const out = "public/downloads/typformer-bockning-armeringsproffs.pdf";
execFileSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${out}`, `file://${tmp}`,
], { stdio: "ignore" });
console.log("ok", out, groups.length);
