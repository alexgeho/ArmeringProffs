import { NextResponse } from "next/server";

// TEMPORÄR debug-endpoint för att se vilka proxy-headers Passenger skickar.
// Tas bort så fram som https-redirecten är verifierad.
export async function GET(request: Request) {
  const h = request.headers;
  return NextResponse.json({
    "x-forwarded-proto": h.get("x-forwarded-proto"),
    "x-forwarded-ssl": h.get("x-forwarded-ssl"),
    "x-forwarded-port": h.get("x-forwarded-port"),
    "x-forwarded-host": h.get("x-forwarded-host"),
    host: h.get("host"),
    "cf-visitor": h.get("cf-visitor"),
  });
}
