import nodemailer from "nodemailer";
import { site } from "@/config/site";

/**
 * E-postutskick via SMTP. Konfigureras med miljövariabler (se .env.example):
 *   SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS
 *   LEAD_TO   – mottagaradress för offertförfrågningar (default: site.email)
 *   LEAD_FROM – avsändaradress (default: SMTP_USER)
 *
 * Om SMTP inte är konfigurerat kastas ett fel som fångas i route-handlern,
 * så att formuläret ändå fungerar i utvecklingsläge (förfrågan loggas då).
 */

export type LeadAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  quantity?: string;
  message?: string;
  source?: string;
  attachment?: LeadAttachment;
};

export function isMailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function getTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true", // true för port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function esc(v: unknown) {
  return String(v ?? "—")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendLeadEmail(lead: Lead) {
  const to = process.env.LEAD_TO || site.email;
  const from = process.env.LEAD_FROM || process.env.SMTP_USER || site.email;

  const rows: [string, unknown][] = [
    ["Namn / företag", lead.name],
    ["Telefon", lead.phone],
    ["E-post", lead.email],
    ["Leveransort", lead.location],
    ["Mängd / dimension", lead.quantity],
    ["Bilaga", lead.attachment?.filename],
    ["Källa", lead.source],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px">
      <h2 style="color:#0f172a">Ny offertförfrågan</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 10px;color:#64748b;border-bottom:1px solid #e2e8f0">${k}</td><td style="padding:6px 10px;font-weight:600;color:#0f172a;border-bottom:1px solid #e2e8f0">${esc(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="color:#0f172a;margin-top:20px">Meddelande</h3>
      <p style="white-space:pre-wrap;color:#334155">${esc(lead.message)}</p>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v ?? "—"}`).join("\n") + `\n\nMeddelande:\n${lead.message ?? "—"}`;

  await getTransport().sendMail({
    from,
    to,
    replyTo: lead.email || undefined,
    subject: `Ny offertförfrågan${lead.name ? ` – ${lead.name}` : ""}${lead.location ? ` (${lead.location})` : ""}`,
    text,
    html,
    attachments: lead.attachment
      ? [{ filename: lead.attachment.filename, content: lead.attachment.content, contentType: lead.attachment.contentType }]
      : undefined,
  });
}
