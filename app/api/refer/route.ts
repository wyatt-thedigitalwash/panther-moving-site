// NOTE: Update the Google Apps Script to handle { type: "referral" } submissions
// and write them to a second sheet tab (e.g., "Referrals") in the spreadsheet.

import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

interface ReferClientForm {
  partnerName: string;
  partnerEmail: string;
  partnerCompany: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  movingFrom: string;
  movingTo: string;
  moveDate: string;
  moveSize: string;
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
    const body: ReferClientForm = await request.json();

    if (body._honeypot) {
      return NextResponse.json({ success: true });
    }

    const partnerName = sanitize(body.partnerName?.trim() || "");
    const partnerEmail = sanitize(body.partnerEmail?.trim() || "");
    const partnerCompany = sanitize(body.partnerCompany?.trim() || "");
    const clientName = sanitize(body.clientName?.trim() || "");
    const clientPhone = sanitize(body.clientPhone?.trim() || "");
    const clientEmail = sanitize(body.clientEmail?.trim() || "");
    const movingFrom = sanitize(body.movingFrom?.trim() || "");
    const movingTo = sanitize(body.movingTo?.trim() || "");
    const moveDate = sanitize(body.moveDate?.trim() || "");
    const moveSize = sanitize(body.moveSize?.trim() || "");
    const notes = sanitize(body.notes?.trim() || "");

    if (
      !partnerName ||
      !partnerEmail ||
      !partnerCompany ||
      !clientName ||
      !clientPhone ||
      !movingFrom ||
      !movingTo ||
      !moveDate ||
      !moveSize
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email to business owners
    await resend.emails.send({
      from: "Panther Moving <noreply@panthermoving.com>",
      to: ["wyatt@thedigitalwash.com"],
      subject: `New Client Referral from ${partnerName} at ${partnerCompany}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">New Client Referral</h1>
          </div>
          <div style="padding: 24px; background: #f9f9f9;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #C9AC2A; margin: 0 0 12px 0;">Referral Partner</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Name</td><td style="padding: 8px 0; color: #555;">${partnerName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email</td><td style="padding: 8px 0; color: #555;">${partnerEmail}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Company</td><td style="padding: 8px 0; color: #555;">${partnerCompany}</td></tr>
            </table>
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #C9AC2A; margin: 0 0 12px 0;">Client Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Name</td><td style="padding: 8px 0; color: #555;">${clientName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone</td><td style="padding: 8px 0; color: #555;">${clientPhone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email</td><td style="padding: 8px 0; color: #555;">${clientEmail || "—"}</td></tr>
            </table>
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #C9AC2A; margin: 0 0 12px 0;">Move Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Moving From</td><td style="padding: 8px 0; color: #555;">${movingFrom}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Moving To</td><td style="padding: 8px 0; color: #555;">${movingTo}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Move Date</td><td style="padding: 8px 0; color: #555;">${moveDate}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Move Size</td><td style="padding: 8px 0; color: #555;">${moveSize}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Notes</td><td style="padding: 8px 0; color: #555;">${notes || "—"}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    // Confirmation email to the partner
    await resend.emails.send({
      from: "Panther Moving <noreply@panthermoving.com>",
      to: partnerEmail,
      replyTo: "scottr@panthermoving.com",
      subject: `Referral Received: ${clientName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">Panther Moving</h1>
          </div>
          <div style="padding: 24px;">
            <p style="font-size: 16px; color: #333;">Thanks ${partnerName}!</p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              We received your referral for <strong>${clientName}</strong> and our team will reach out
              to them within 24 hours to get their move scheduled.
            </p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              If you have any questions or need to update the referral details, feel free to call us at
              <a href="tel:8135087860" style="color: #C9AC2A; font-weight: bold;">(813) 508-7860</a>
              or reply to this email.
            </p>
            <p style="font-size: 15px; color: #333; font-weight: 600;">&mdash; The Panther Moving Team</p>
          </div>
          <div style="background: #f5f5f5; padding: 16px; text-align: center; font-size: 12px; color: #999;">
            Panther Moving &middot; 2107 W Platt St, Tampa, FL &middot; (813) 508-7860
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
          body: JSON.stringify({
            type: "referral",
            partnerName,
            partnerEmail,
            partnerCompany,
            clientName,
            clientPhone,
            clientEmail,
            movingFrom,
            movingTo,
            moveDate,
            moveSize,
            notes,
          }),
        },
      );
    } catch (sheetError) {
      console.error("Google Sheets append failed:", sheetError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Refer client form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
