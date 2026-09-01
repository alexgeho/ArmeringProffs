import { NextResponse } from "next/server";
import { isMailConfigured, sendLeadEmail, type LeadAttachment } from "@/lib/mail";

/**
 * Tar emot offertförfrågningar (multipart/form-data) från formuläret och mejlar
 * dem till företaget. En bifogad ritning/bockningslista följer med som bilaga.
 * SMTP konfigureras via miljövariabler (se .env.example).
 */

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Ogiltig förfrågan" }, { status: 400 });
  }

  const get = (k: string) => {
    const v = form.get(k);
    return typeof v === "string" && v.trim() ? v.trim() : undefined;
  };

  const name = get("name");
  let phone = get("phone");
  let email = get("email");

  // Kompakt hero-form skickar ett kombinerat fält "contact" (telefon ELLER e-post).
  // Innehåller det "@" tolkas det som e-post, annars som telefon.
  const contact = get("contact");
  if (contact) {
    if (contact.includes("@")) email = email ?? contact;
    else phone = phone ?? contact;
  }

  // Enkel validering: minst en kontaktuppgift (telefon eller e-post). Namn är valfritt.
  if (!(phone || email)) {
    return NextResponse.json(
      { ok: false, error: "Telefon eller e-post krävs" },
      { status: 400 },
    );
  }

  // Ev. bifogad ritning/bockningslista
  let attachment: LeadAttachment | undefined;
  const file = form.get("drawing");
  if (file && typeof file !== "string" && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Filen är för stor (max 10 MB)" },
        { status: 413 },
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    attachment = {
      filename: file.name || "bilaga",
      content: buffer,
      contentType: file.type || "application/octet-stream",
    };
  }

  const lead = {
    name,
    phone,
    email,
    location: get("location"),
    quantity: get("quantity"),
    message: get("message"),
    source: get("source") ?? "webbformulär",
    attachment,
  };

  // Utan SMTP-konfig: logga och kvittera (så formuläret fungerar i dev).
  if (!isMailConfigured()) {
    console.warn("[LEAD] SMTP ej konfigurerat – förfrågan loggas istället:", {
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      location: lead.location,
      quantity: lead.quantity,
      message: lead.message,
      source: lead.source,
      attachment: attachment ? `${attachment.filename} (${attachment.content.length} B)` : undefined,
    });
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
