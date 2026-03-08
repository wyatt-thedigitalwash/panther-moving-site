import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

interface ContactForm {
  name: string;
  phone: string;
  moveDate: string;
  rooms: string;
  city: string;
  pickup: string;
  delivery: string;
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: ContactForm = await request.json();
    const { name, phone, moveDate, rooms, city, pickup, delivery } = body;

    if (!name || !phone || !moveDate || !rooms || !city) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
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
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone</td><td style="padding: 8px 0; color: #555;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Move Date</td><td style="padding: 8px 0; color: #555;">${moveDate}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Rooms</td><td style="padding: 8px 0; color: #555;">${rooms}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">City</td><td style="padding: 8px 0; color: #555;">${city}</td></tr>
              ${pickup ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Pickup</td><td style="padding: 8px 0; color: #555;">${pickup}</td></tr>` : ""}
              ${delivery ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Delivery</td><td style="padding: 8px 0; color: #555;">${delivery}</td></tr>` : ""}
            </table>
          </div>
        </div>
      `,
    });

    // Auto-reply to customer (using name in greeting)
    await resend.emails.send({
      from: "Panther Moving <onboarding@resend.dev>",
      to: "scottr@panthermoving.com", // In production, replace with customer email field
      replyTo: "scottr@panthermoving.com",
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">Panther Moving</h1>
          </div>
          <div style="padding: 24px;">
            <p style="font-size: 16px; color: #333;">Hey ${name},</p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              Thanks for reaching out to Panther Moving! We received your quote request
              and will get back to you shortly — usually within the hour.
            </p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              If you need immediate assistance, feel free to call us at
              <a href="tel:8135087860" style="color: #C9AC2A; font-weight: bold;">(813) 508-7860</a>.
            </p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              We look forward to making your move stress-free!
            </p>
            <p style="font-size: 15px; color: #333; font-weight: 600;">— The Panther Moving Team</p>
          </div>
          <div style="background: #f5f5f5; padding: 16px; text-align: center; font-size: 12px; color: #999;">
            Panther Moving · 2107 W Platt St, Tampa, FL · (813) 508-7860
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
