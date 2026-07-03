import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || "Istituto Garibaldi <onboarding@resend.dev>";

const SEDE_EMAILS = {
  "Busto Arsizio": "bustoarsizio@istitutogaribaldi.com",
  "Legnano": "legnano@istitutogaribaldi.com",
  "Novara": "novara@istitutogaribaldi.com",
  "Borgomanero": "borgomanero@istitutogaribaldi.com",
};
const DEFAULT_EMAIL = "info@istitutogaribaldi.com";

export async function POST(request) {
  try {
    const data = await request.json();
    const { nome, azienda, email, telefono, sede, corso, messaggio } = data;

    if (!nome || !email || !telefono) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const toEmail = SEDE_EMAILS[sede] || DEFAULT_EMAIL;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: toEmail,
      replyTo: email,
      subject: `Nuova richiesta informazioni — ${sede || "sede non specificata"}`,
      html: `
        <table>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Nome</td><td>${nome}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Azienda/Scuola</td><td>${azienda || "-"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td>${email}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Telefono</td><td>${telefono}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Sede preferita</td><td>${sede || "-"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Corso di interesse</td><td>${corso || "-"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">Messaggio</td><td>${messaggio || "-"}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error("[contatti] Resend error:", error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contatti] Error processing request:", error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
