"use server";

import { Resend } from "resend";

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const organisation = (formData.get("organisation") as string | null)?.trim() ?? "";
  const teamSize = (formData.get("teamSize") as string | null) ?? "";
  const industry = (formData.get("industry") as string | null) ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !organisation || !teamSize) {
    return { ok: false, error: "Missing required fields." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = `
New demo request from marleysystems.co.uk

Name:         ${name}
Email:        ${email}
Organisation: ${organisation}
Team size:    ${teamSize}
Industry:     ${industry || "Not specified"}

Message:
${message || "(none)"}
`.trim();

  try {
    await resend.emails.send({
      from: "Marley Website <onboarding@resend.dev>",
      to: "info@marleysystems.co.uk",
      replyTo: email,
      subject: `Demo request - ${name} (${organisation})`,
      text: body,
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact action]", err);
    return { ok: false, error: "Failed to send. Please try again or email us directly." };
  }
}
