"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  moveDate: string;
  rooms: string;
  city: string;
  pickup: string;
  delivery: string;
  _honeypot: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  moveDate: "",
  rooms: "",
  city: "",
  pickup: "",
  delivery: "",
  _honeypot: "",
};

const ROOM_OPTIONS = [
  "Studio",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
  "Commercial / Office",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center">
        <div className="mb-2 font-heading text-2xl font-bold uppercase text-gold">
          Thank You!
        </div>
        <p className="text-sm text-grey">
          We received your request and will get back to you shortly &mdash;
          usually within the hour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-[#eee] p-7">
      <h3 className="mb-5 font-heading text-lg font-semibold tracking-[1px] uppercase">
        Request a Quote
      </h3>

      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="hp-field">Do not fill this in</label>
        <input
          id="hp-field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form._honeypot}
          onChange={update("_honeypot")}
        />
      </div>

      <div className="mb-3.5">
        <label className="form-label">FULL NAME</label>
        <input
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={update("name")}
          className="form-input"
        />
      </div>

      <div className="mb-3.5">
        <label className="form-label">PHONE NUMBER</label>
        <input
          type="tel"
          required
          placeholder="(555) 555-5555"
          value={form.phone}
          onChange={update("phone")}
          className="form-input"
        />
      </div>

      <div className="mb-3.5">
        <label className="form-label">EMAIL ADDRESS</label>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={update("email")}
          className="form-input"
        />
      </div>

      <div className="mb-3.5">
        <label className="form-label">MOVE DATE</label>
        <input
          type="date"
          required
          value={form.moveDate}
          onChange={update("moveDate")}
          className="form-input"
        />
      </div>

      <div className="mb-3.5">
        <label className="form-label">NUMBER OF ROOMS</label>
        <select
          required
          value={form.rooms}
          onChange={update("rooms")}
          className="form-input"
        >
          <option value="">Select...</option>
          {ROOM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3.5">
        <label className="form-label">CITY</label>
        <input
          type="text"
          required
          placeholder="Tampa"
          value={form.city}
          onChange={update("city")}
          className="form-input"
        />
      </div>

      <div className="mb-3.5">
        <label className="form-label">PICKUP LOCATION (OPTIONAL)</label>
        <input
          type="text"
          placeholder="Address or area"
          value={form.pickup}
          onChange={update("pickup")}
          className="form-input"
        />
      </div>

      <div className="mb-3.5">
        <label className="form-label">DELIVERY LOCATION (OPTIONAL)</label>
        <input
          type="text"
          placeholder="Address or area"
          value={form.delivery}
          onChange={update("delivery")}
          className="form-input"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold mt-2 w-full py-4 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit Request"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-500">
          Something went wrong. Please call us at {SITE.phone} instead.
        </p>
      )}
    </form>
  );
}
