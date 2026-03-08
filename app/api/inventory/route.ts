import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

interface InventoryForm {
  name: string;
  phone: string;
  email: string;
  moveDate: string;
  pickupAddress: string;
  deliveryAddress: string;
  bedrooms: string;
  stairsPickup: boolean;
  stairsPickupFlights: string;
  stairsDelivery: boolean;
  stairsDeliveryFlights: string;
  elevator: boolean;
  truckDistance: string;
  inventoryBedrooms: string;
  inventoryLivingRoom: string;
  inventoryDiningRoom: string;
  inventoryKitchen: string;
  inventoryGarage: string;
  disassemblyItems: string;
  reassemblyItems: string;
  agreed: boolean;
  signature: string;
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

function yn(val: boolean): string {
  return val ? "Yes" : "No";
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: InventoryForm = await request.json();

    if (body._honeypot) {
      return NextResponse.json({ success: true });
    }

    const s = (val: string | undefined) => sanitize(val?.trim() || "");

    const name = s(body.name);
    const email = s(body.email);
    const phone = s(body.phone);
    const moveDate = s(body.moveDate);
    const pickupAddress = s(body.pickupAddress);
    const deliveryAddress = s(body.deliveryAddress);
    const bedrooms = s(body.bedrooms);
    const truckDistance = s(body.truckDistance);

    if (!name || !email || !phone || !moveDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!body.agreed || !body.signature) {
      return NextResponse.json(
        { error: "Signature and agreement required" },
        { status: 400 },
      );
    }

    const inventoryRows = [
      { label: "Bedrooms", value: s(body.inventoryBedrooms) },
      { label: "Living Room", value: s(body.inventoryLivingRoom) },
      { label: "Dining Room", value: s(body.inventoryDiningRoom) },
      { label: "Kitchen", value: s(body.inventoryKitchen) },
      { label: "Garage / Storage", value: s(body.inventoryGarage) },
    ].filter((r) => r.value);

    const assemblyRows = [
      { label: "Disassembly Items", value: s(body.disassemblyItems) },
      { label: "Reassembly Items", value: s(body.reassemblyItems) },
    ].filter((r) => r.value);

    // Business notification
    await resend.emails.send({
      from: "Panther Moving <onboarding@resend.dev>",
      to: "scottr@panthermoving.com",
      subject: `Inventory Form Submitted — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">Moving Inventory Submitted</h1>
          </div>
          <div style="padding: 24px; background: #f9f9f9;">
            <h2 style="font-size: 16px; color: #C9AC2A; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px;">Customer Info</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333; width: 40%;">Name</td><td style="padding: 6px 0; color: #555;">${name}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Email</td><td style="padding: 6px 0; color: #555;">${email}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Phone</td><td style="padding: 6px 0; color: #555;">${phone}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Move Date</td><td style="padding: 6px 0; color: #555;">${moveDate}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Pickup</td><td style="padding: 6px 0; color: #555;">${pickupAddress}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Delivery</td><td style="padding: 6px 0; color: #555;">${deliveryAddress}</td></tr>
            </table>

            <h2 style="font-size: 16px; color: #C9AC2A; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px;">Property & Access</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333; width: 40%;">Bedrooms</td><td style="padding: 6px 0; color: #555;">${bedrooms}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Stairs (Pickup)</td><td style="padding: 6px 0; color: #555;">${yn(body.stairsPickup)}${body.stairsPickup ? ` &mdash; ${s(body.stairsPickupFlights)} flight(s)` : ""}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Stairs (Delivery)</td><td style="padding: 6px 0; color: #555;">${yn(body.stairsDelivery)}${body.stairsDelivery ? ` &mdash; ${s(body.stairsDeliveryFlights)} flight(s)` : ""}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Elevator</td><td style="padding: 6px 0; color: #555;">${yn(body.elevator)}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #333;">Truck Distance</td><td style="padding: 6px 0; color: #555;">${truckDistance}</td></tr>
            </table>

            ${
              inventoryRows.length > 0
                ? `
              <h2 style="font-size: 16px; color: #C9AC2A; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px;">Room Inventory</h2>
              ${inventoryRows
                .map(
                  (r) => `
                <div style="margin-bottom: 12px;">
                  <div style="font-weight: bold; color: #333; margin-bottom: 4px;">${r.label}</div>
                  <div style="color: #555; white-space: pre-wrap; background: #fff; padding: 8px; border-radius: 4px; border: 1px solid #eee;">${r.value}</div>
                </div>
              `,
                )
                .join("")}
            `
                : ""
            }

            ${
              assemblyRows.length > 0
                ? `
              <h2 style="font-size: 16px; color: #C9AC2A; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px;">Assembly & Disassembly</h2>
              ${assemblyRows
                .map(
                  (r) => `
                <div style="margin-bottom: 12px;">
                  <div style="font-weight: bold; color: #333; margin-bottom: 4px;">${r.label}</div>
                  <div style="color: #555; white-space: pre-wrap; background: #fff; padding: 8px; border-radius: 4px; border: 1px solid #eee;">${r.value}</div>
                </div>
              `,
                )
                .join("")}
            `
                : ""
            }

            <h2 style="font-size: 16px; color: #C9AC2A; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px;">Signature</h2>
            <div style="background: #1A1A1A; padding: 12px; border-radius: 4px; text-align: center;">
              <img src="${body.signature}" alt="Customer signature" style="max-width: 100%; height: auto;" />
            </div>
            <p style="font-size: 12px; color: #999; margin-top: 8px;">Customer agreed to pricing disclaimer and signed electronically.</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to customer
    await resend.emails.send({
      from: "Panther Moving <onboarding@resend.dev>",
      to: email,
      replyTo: "scottr@panthermoving.com",
      subject: `Inventory Received — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; text-align: center;">
            <h1 style="color: #C9AC2A; margin: 0; font-size: 24px;">Panther Moving</h1>
          </div>
          <div style="padding: 24px;">
            <p style="font-size: 16px; color: #333;">Hey ${name},</p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              We have everything we need! Expect a call from us within 1 business hour
              with your guaranteed quote.
            </p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              <strong>Move Date:</strong> ${moveDate}<br />
              <strong>From:</strong> ${pickupAddress}<br />
              <strong>To:</strong> ${deliveryAddress}
            </p>
            <p style="font-size: 15px; color: #555; line-height: 1.7;">
              If you need to make changes or have questions, call us at
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inventory form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
