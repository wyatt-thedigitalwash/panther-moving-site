"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE, HOME_SIZE_OPTIONS } from "@/lib/constants";
import {
  validateEmail,
  validatePhone,
  validateFutureDate,
  validateZip,
  validateRequired,
  formatPhone,
} from "@/lib/validation";
import FormField from "@/components/FormField";

interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  moveDate: string;
  pickupZip: string;
  deliveryZip: string;
  homeSize: string;
  _honeypot: string;
}

const INITIAL: QuoteFormData = {
  name: "",
  phone: "",
  email: "",
  moveDate: "",
  pickupZip: "",
  deliveryZip: "",
  homeSize: "",
  _honeypot: "",
};

type FieldErrors = Partial<Record<keyof QuoteFormData, string | null>>;

export default function QuoteForm() {
  const router = useRouter();
  const [form, setForm] = useState<QuoteFormData>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Set<keyof QuoteFormData>>(new Set());
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  function validateField(
    field: keyof QuoteFormData,
    value: string,
  ): string | null {
    switch (field) {
      case "name":
        return validateRequired(value, "Full name");
      case "phone":
        return validatePhone(value);
      case "email":
        return validateEmail(value);
      case "moveDate":
        return validateFutureDate(value);
      case "pickupZip":
        return validateZip(value);
      case "deliveryZip":
        return validateZip(value);
      case "homeSize":
        return validateRequired(value, "Home size");
      default:
        return null;
    }
  }

  const update =
    (field: keyof QuoteFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      let value = e.target.value;
      if (field === "phone") value = formatPhone(value);
      setForm((prev) => ({ ...prev, [field]: value }));
      if (touched.has(field)) {
        setErrors((prev) => ({
          ...prev,
          [field]: validateField(field, value),
        }));
      }
    };

  const blur = (field: keyof QuoteFormData) => () => {
    setTouched((prev) => new Set(prev).add(field));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };

  function validateAll(): boolean {
    const fields: (keyof QuoteFormData)[] = [
      "name",
      "phone",
      "email",
      "moveDate",
      "pickupZip",
      "deliveryZip",
      "homeSize",
    ];
    const newErrors: FieldErrors = {};
    let valid = true;
    for (const field of fields) {
      const err = validateField(field, form[field]);
      newErrors[field] = err;
      if (err) valid = false;
    }
    setErrors(newErrors);
    setTouched(new Set(fields));
    return valid;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateAll()) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");

      const params = new URLSearchParams({
        name: form.name,
        phone: form.phone,
        email: form.email,
        moveDate: form.moveDate,
        pickupZip: form.pickupZip,
        deliveryZip: form.deliveryZip,
      });
      router.push(`/inventory?${params.toString()}`);
    } catch {
      setStatus("error");
    }
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#eee] p-7"
    >
      <h3 className="mb-5 font-heading text-lg font-semibold tracking-[1px] uppercase">
        Get Your Free Quote
      </h3>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="hp-quote">Do not fill this in</label>
        <input
          id="hp-quote"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form._honeypot}
          onChange={update("_honeypot")}
        />
      </div>

      <FormField label="Full Name" error={errors.name} required>
        <input
          type="text"
          required
          placeholder="Your full name"
          value={form.name}
          onChange={update("name")}
          onBlur={blur("name")}
          className={`form-input ${errors.name ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField label="Phone Number" error={errors.phone} required>
        <input
          type="tel"
          required
          placeholder="(555) 555-5555"
          value={form.phone}
          onChange={update("phone")}
          onBlur={blur("phone")}
          className={`form-input ${errors.phone ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField label="Email Address" error={errors.email} required>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={update("email")}
          onBlur={blur("email")}
          className={`form-input ${errors.email ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField label="Move Date" error={errors.moveDate} required>
        <input
          type="date"
          required
          min={minDate}
          value={form.moveDate}
          onChange={update("moveDate")}
          onBlur={blur("moveDate")}
          className={`form-input ${errors.moveDate ? "!border-red-500" : ""}`}
        />
      </FormField>

      <div className="grid grid-cols-2 gap-3">
        <FormField label="Pickup ZIP" error={errors.pickupZip} required>
          <input
            type="text"
            required
            placeholder="33606"
            maxLength={5}
            inputMode="numeric"
            value={form.pickupZip}
            onChange={update("pickupZip")}
            onBlur={blur("pickupZip")}
            className={`form-input ${errors.pickupZip ? "!border-red-500" : ""}`}
          />
        </FormField>

        <FormField label="Delivery ZIP" error={errors.deliveryZip} required>
          <input
            type="text"
            required
            placeholder="33611"
            maxLength={5}
            inputMode="numeric"
            value={form.deliveryZip}
            onChange={update("deliveryZip")}
            onBlur={blur("deliveryZip")}
            className={`form-input ${errors.deliveryZip ? "!border-red-500" : ""}`}
          />
        </FormField>
      </div>

      <FormField label="Home Size" error={errors.homeSize} required>
        <select
          required
          value={form.homeSize}
          onChange={update("homeSize")}
          onBlur={blur("homeSize")}
          className={`form-input ${errors.homeSize ? "!border-red-500" : ""}`}
        >
          <option value="">Select...</option>
          {HOME_SIZE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </FormField>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold mt-2 w-full py-4 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Get My Free Quote \u2192"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-500">
          Something went wrong. Please call us at {SITE.phone} instead.
        </p>
      )}
    </form>
  );
}
