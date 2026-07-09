import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

interface ReferralForm {
  name: string;
  company: string;
  phone: string;
  email: string;
  businessType: string;
  notes: string;
  _honeypot: string;
}

function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: ReferralForm = await request.json();

    if (body._honeypot) {
      return NextResponse.json({ success: true });
    }

    const name = sanitize(body.name?.trim() || "");
    const company = sanitize(body.company?.trim() || "");
    const phone = sanitize(body.phone?.trim() || "");
    const email = sanitize(body.email?.trim() || "");
    const businessType = sanitize(body.businessType?.trim() || "");
    const notes = sanitize(body.notes?.trim() || "");

    if (!name || !company || !phone || !email || !businessType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email to business owners
    await resend.emails.send({
      from: "Panther Moving <noreply@panthermoving.com>",
      to: ["scottr@panthermoving.com", "marcusc@panthermoving.com"],
      subject: `New Referral Partner Signup: ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">New Referral Partner Signup</h1>
          </div>
          <div style="padding: 24px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Name</td><td style="padding: 8px 0; color: #555;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Company</td><td style="padding: 8px 0; color: #555;">${company}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone</td><td style="padding: 8px 0; color: #555;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email</td><td style="padding: 8px 0; color: #555;">${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Business Type</td><td style="padding: 8px 0; color: #555;">${businessType}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Notes</td><td style="padding: 8px 0; color: #555;">${notes || "—"}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    // Auto-reply to partner
    await resend.emails.send({
      from: "Panther Moving <noreply@panthermoving.com>",
      to: email,
      replyTo: "scottr@panthermoving.com",
      subject: `Welcome to the Panther Moving Referral Program, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">Panther Moving</h1>
          </div>
          <div style="padding: 24px;">
            <p style="font-size: 16px; color: #333;">Thanks for signing up, ${name}!</p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              We&rsquo;re excited to have ${company} as a referral partner. A member of our team will
              be in touch shortly to get you set up and answer any questions you may have.
            </p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              In the meantime, feel free to reach out anytime at
              <a href="tel:8138674661" style="color: #C9AC2A; font-weight: bold;">(813) 867-4661</a>
              or reply to this email.
            </p>
            <p style="font-size: 15px; color: #333; font-weight: 600;">&mdash; The Panther Moving Team</p>
          </div>
          <div style="background: #f5f5f5; padding: 16px; text-align: center; font-size: 12px; color: #999;">
            Panther Moving &middot; 2107 W Platt St, Tampa, FL &middot; (813) 867-4661
          </div>
        </div>
      `,
    });

    // Append to Google Sheet via Apps Script (non-blocking — don't fail the form if this errors)
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxWFruvXSOiXAELyMgvovi8-FIvXGe2c1a9ultV6kIEuhjSkoj_-UtZxtrFHnOoi_HK/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, company, phone, email, businessType, notes }),
        },
      );
    } catch (sheetError) {
      console.error("Google Sheets append failed:", sheetError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Referral form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
