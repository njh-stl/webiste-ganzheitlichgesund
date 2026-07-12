import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(200),
  phone: z.string().trim().min(5).max(50),
  email: z.string().trim().email().optional().or(z.literal("")),
  message: z.string().trim().max(5000).optional(),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Ungültige Formulardaten." });
  }

  const { name, phone, email, message } = parsed.data;

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !contactEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable");
    return res.status(500).json({ error: "Serverkonfigurationsfehler." });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email || undefined,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
        <p><strong>E-Mail:</strong> ${email ? escapeHtml(email) : "nicht angegeben"}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message ? escapeHtml(message).replace(/\n/g, "<br>") : "keine Nachricht"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "E-Mail konnte nicht gesendet werden." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Unerwarteter Serverfehler." });
  }
}
