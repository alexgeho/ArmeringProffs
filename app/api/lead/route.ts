import { NextResponse } from "next/server";
import { isMailConfigured, sendLeadEmail } from "@/lib/mail";

/**
 * Tar emot offertförfrågningar från formuläret och mejlar dem till företaget.
 * SMTP konfigureras via miljövariabler (se .env.example).
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ogiltig förfrågan" }, { status: 400 });
  }

  // Enkel validering
  if (!data?.name || !data?.phone) {
    return NextResponse.json({ ok: false, error: "Namn och telefon krävs" }, { status: 400 });
  }

  const lead = {
    name: String(data.name),
    phone: String(data.phone),
    email: data.email ? String(data.email) : undefined,
    location: data.location ? String(data.location) : undefined,
    message: data.message ? String(data.message) : undefined,
    source: data.source ? String(data.source) : "webbformulär",
  };

  // Utan SMTP-konfig: logga och kvittera (så formuläret fungerar i dev).
  if (!isMailConfigured()) {
    console.warn("[LEAD] SMTP ej konfigurerat – förfrågan loggas istället:", lead);
    return NextResponse.json({ ok: true });
  }

  try {
    await sendLeadEmail(lead);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[LEAD] Kunde inte skicka e-post:", err);
    return NextResponse.json({ ok: false, error: "E-post kunde inte skickas" }, { status: 502 });
  }
}
