import fs from "node:fs";
import path from "node:path";

/** Foto (Replicate) för en sida: public/images/foto/<slug>.webp om den finns. Körs vid build. */
export function foto(slug: string): string | null {
  return fs.existsSync(path.join(process.cwd(), "public/images/foto", `${slug}.webp`))
    ? `/images/foto/${slug}.webp`
    : null;
}
