import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  moveDate: string;
  pickupZip: string;
  deliveryZip: string;
  homeSize: string;
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
    const body: ContactForm = await request.json();

    if (body._honeypot) {
      return NextResponse.json({ success: true });
    }

    const name = sanitize(body.name?.trim() || "");
    const email = sanitize(body.email?.trim() || "");
    const phone = sanitize(body.phone?.trim() || "");
    const moveDate = sanitize(body.moveDate?.trim() || "");
    const pickupZip = sanitize(body.pickupZip?.trim() || "");
    const deliveryZip = sanitize(body.deliveryZip?.trim() || "");
    const homeSize = sanitize(body.homeSize?.trim() || "");

    if (
      !name ||
      !email ||
      !phone ||
      !moveDate ||
      !pickupZip ||
      !deliveryZip ||
      !homeSize
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email to business owner
    await resend.emails.send({
      from: "Panther Moving <onboarding@resend.dev>",
      to: "scottr@panthermoving.com",
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">New Quote Request</h1>
          </div>
          <div style="padding: 24px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Name</td><td style="padding: 8px 0; color: #555;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email</td><td style="padding: 8px 0; color: #555;">${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone</td><td style="padding: 8px 0; color: #555;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Move Date</td><td style="padding: 8px 0; color: #555;">${moveDate}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Pickup ZIP</td><td style="padding: 8px 0; color: #555;">${pickupZip}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Delivery ZIP</td><td style="padding: 8px 0; color: #555;">${deliveryZip}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Home Size</td><td style="padding: 8px 0; color: #555;">${homeSize}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    // Auto-reply with inventory CTA
    const inventoryUrl = `https://panthermoving.com/inventory?name=${encodeURIComponent(body.name)}&phone=${encodeURIComponent(body.phone)}&email=${encodeURIComponent(body.email)}&moveDate=${encodeURIComponent(body.moveDate)}&pickupZip=${encodeURIComponent(body.pickupZip)}&deliveryZip=${encodeURIComponent(body.deliveryZip)}`;

    await resend.emails.send({
      from: "Panther Moving <onboarding@resend.dev>",
      to: email,
      replyTo: "scottr@panthermoving.com",
      subject: `Thanks ${name}! We received your quote request`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">Panther Moving</h1>
          </div>
          <div style="padding: 24px;">
            <p style="font-size: 16px; color: #333;">Thanks ${name}!</p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              We received your quote request and will call you within 1 business hour.
              In the meantime, complete your moving inventory below so we can give you
              an accurate guaranteed price &mdash; no surprises on moving day.
            </p>
            <div style="text-align: center; margin: 28px 0;">
              <a
                href="${inventoryUrl}"
                style="display: inline-block; padding: 16px 36px; background: #A8891A; color: #111111; font-family: Arial, sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; border-radius: 4px;"
              >
                Complete My Inventory Form &rarr;
              </a>
            </div>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              If you need immediate assistance, feel free to call us at
              <a href="tel:8135087860" style="color: #C9AC2A; font-weight: bold;">(813) 508-7860</a>.
            </p>
            <p style="font-size: 15px; color: #333; font-weight: 600;">&mdash; The Panther Moving Team</p>
          </div>
          <div style="background: #f5f5f5; padding: 16px; text-align: center; font-size: 12px; color: #999;">
            Panther Moving &middot; 2107 W Platt St, Tampa, FL &middot; (813) 508-7860
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
