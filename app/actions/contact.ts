"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get("fullName") as string)?.trim();
  const company = (formData.get("companyName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const role = (formData.get("role") as string)?.trim();
  const budget = (formData.get("budget") as string)?.trim();
  const formats = (formData.get("formats") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and message." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Rawbitads Contact Form" <${process.env.SMTP_USER}>`,
      to: "admin@rawbitads.com",
      replyTo: `"${name}" <${email}>`,
      subject: `New contact from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0f172a; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 500;">${name}</td></tr>
            ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 500;">${company}</td></tr>` : ""}
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td></tr>
            ${role ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Role</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${role}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${budget}</td></tr>` : ""}
            ${formats ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Ad Formats</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${formats}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #64748b; margin-bottom: 8px;">Message</p>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; white-space: pre-wrap; color: #0f172a;">${message}</div>
          </div>
          <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">Sent from rawbitads.com contact form</p>
        </div>
      `,
    });

    return { status: "success" };
  } catch (err) {
    console.error("Contact form email error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email us directly at admin@rawbitads.com.",
    };
  }
}
