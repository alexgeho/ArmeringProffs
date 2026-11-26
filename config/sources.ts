/**
 * Externa källor (myndigheter, Wikipedia) – en länk per sida via <SourceNote />.
 * Bara neutrala, auktoritativa källor: aldrig konkurrenter, leverantörer eller andra firmor.
 * Alla URL:er kontrollerade (HTTP 200) 2026-11-26.
 */
export type Source = { href: string; label: string; publisher: string };

const wiki = (page: string, label: string): Source => ({
  href: `https://sv.wikipedia.org/wiki/${encodeURIComponent(page)}`,
  label,
  publisher: "Wikipedia",
});

export const SOURCES = {
  armering: wiki("Armering", "Armering"),
  armeringsstal: wiki("Armeringsjärn", "Armeringsstål"),
  kamstal: wiki("Kamstål", "Kamstål"),
  betong: wiki("Betong", "Betong"),
  betongelement: wiki("Betongelement", "Betongelement"),
  eurokoder: wiki("Eurokoder", "Eurokoder"),
  ceMarkning: wiki("CE-märkning", "CE-märkning"),
  gfrp: wiki("Glasfiberarmerad_plast", "Glasfiberarmerad plast"),
  byggregler: { href: "https://www.boverket.se/sv/byggande/regler-for-byggande/", label: "Regler för byggande", publisher: "Boverket" },
  klimatdeklaration: { href: "https://www.boverket.se/sv/klimatdeklaration/", label: "Klimatdeklaration", publisher: "Boverket" },
  koplagen: wiki("Köplagen", "Köplagen"),
  upphandling: { href: "https://www.upphandlingsmyndigheten.se/", label: "Upphandlingsmyndigheten", publisher: "Upphandlingsmyndigheten" },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;

/** Källa per sökväg (med avslutande /). Saknas sökvägen används mallens standard. */
export const PAGE_SOURCE: Record<string, SourceId> = {
  "/blogg/eurokod-2-armering/": "eurokoder",
  "/blogg/dorndiameter-armering/": "eurokoder",
  "/blogg/tackskikt-exponeringsklass/": "eurokoder",
  "/blogg/forankringslangd-armering/": "eurokoder",
  "/blogg/skarvlangd-armering/": "eurokoder",
  "/blogg/b500b-k500c-t/": "armeringsstal",
  "/blogg/ce-markning-certifikat-armering/": "ceMarkning",
  "/blogg/armering-klimatavtryck/": "klimatdeklaration",
  "/blogg/kompositarmering-gfrp/": "gfrp",
  "/blogg/lyftoglor-betong/": "betongelement",
  "/blogg/fiberarmering-eller-armeringsnat/": "betong",
  "/blogg/armering-kg-per-m3/": "betong",
  "/forankringslangd/": "eurokoder",
  "/armering-offentlig-upphandling/": "upphandling",
  "/armering-for-prefabindustri/": "betongelement",
  "/armering-for-husfabriker/": "betongelement",
  "/armering-for-konstruktorer/": "eurokoder",
  "/produkter/lyftoglor/": "betongelement",
  "/produkter/armeringsjarn/": "kamstal",
};

export const sourceFor = (path: string, fallback: SourceId): SourceId => PAGE_SOURCE[path] ?? fallback;
