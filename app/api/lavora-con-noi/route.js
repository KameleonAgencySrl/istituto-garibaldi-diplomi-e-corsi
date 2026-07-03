import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || "Istituto Garibaldi <onboarding@resend.dev>";
const TO_EMAIL = process.env.LEAD_TO_EMAIL || "info@istitutogaribaldi.com";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const tipo = formData.get("tipo");
    const cognomeNome = formData.get("cognomeNome");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const residenza = formData.get("residenza");
    const titoloDiStudio = formData.get("titoloDiStudio");
    const esperienze = formData.get("esperienze");
    const messaggio = formData.get("messaggio");
    const cv = formData.get("cv");

    if (!cognomeNome || !email || !telefono || !titoloDiStudio) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const attachments = [];
    if (cv instanceof File && cv.size > 0) {
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({ filename: cv.name, content: buffer });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nuova candidatura — ${tipo || "Lavora con noi"}`,
      html: `
        <table>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Figura</td><td>${tipo || "-"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Nome</td><td>${cognomeNome}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td>${email}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Telefono</td><td>${telefono}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Residenza</td><td>${residenza || "-"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">Titolo di studio</td><td>${titoloDiStudio}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">Esperienze</td><td>${esperienze || "-"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">Messaggio</td><td>${messaggio || "-"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:600">CV allegato</td><td>${cv instanceof File && cv.size > 0 ? cv.name : "no"}</td></tr>
        </table>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("[lavora-con-noi] Resend error:", error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lavora-con-noi] Error processing request:", error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
