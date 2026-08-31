import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.company} – ${site.service} i ${site.regionInflected}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f172a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "14px",
              background: "#ea580c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "44px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ color: "white", fontSize: "38px", fontWeight: 700 }}>{site.company}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontSize: "76px", fontWeight: 800, lineHeight: 1.1 }}>
            Prefab armering
          </div>
          <div style={{ color: "#fdba74", fontSize: "76px", fontWeight: 800, lineHeight: 1.1 }}>
            i hela Sverige
          </div>
          <div style={{ color: "#cbd5e1", fontSize: "34px", marginTop: "28px" }}>
            Klippt &amp; bockad · Armeringskorgar · Svetsad armering · Nät
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ height: "8px", width: "80px", background: "#ea580c", borderRadius: "4px" }} />
          <div style={{ color: "#94a3b8", fontSize: "30px" }}>
            Tillverkning · Leverans · Montage — efter din bockningslista
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
