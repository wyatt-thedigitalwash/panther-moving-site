"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/constants";
import {
  validateEmail,
  validatePhone,
  validateRequired,
  formatPhone,
} from "@/lib/validation";
import FormField from "@/components/FormField";

const BUSINESS_TYPES = [
  "Realtor",
  "Apartment Complex",
  "Property Manager",
  "Builder/Contractor",
  "Concierge/Front Desk",
  "Other",
] as const;

interface ReferralFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  businessType: string;
  notes: string;
  _honeypot: string;
}

const INITIAL: ReferralFormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  businessType: "",
  notes: "",
  _honeypot: "",
};

type FieldErrors = Partial<Record<keyof ReferralFormData, string | null>>;

export default function ReferralForm() {
  const [form, setForm] = useState<ReferralFormData>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Set<keyof ReferralFormData>>(
    new Set(),
  );
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  function validateField(
    field: keyof ReferralFormData,
    value: string,
  ): string | null {
    switch (field) {
      case "name":
        return validateRequired(value, "Full name");
      case "company":
        return validateRequired(value, "Company name");
      case "phone":
        return validatePhone(value);
      case "email":
        return validateEmail(value);
      case "businessType":
        return validateRequired(value, "Business type");
      default:
        return null;
    }
  }

  const update =
    (field: keyof ReferralFormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
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

  const blur = (field: keyof ReferralFormData) => () => {
    setTouched((prev) => new Set(prev).add(field));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };

  function validateAll(): boolean {
    const fields: (keyof ReferralFormData)[] = [
      "name",
      "company",
      "phone",
      "email",
      "businessType",
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
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        id="signup"
        className="rounded-lg border border-[#eee] p-7 text-center"
      >
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12l5 5L19 7"
                stroke="#C9AC2A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold tracking-[1px] uppercase">
          Thanks for Signing Up!
        </h3>
        <p className="text-sm font-light leading-[1.7] text-grey">
          We&apos;ll be in touch shortly to get you set up as a referral partner.
        </p>
      </div>
    );
  }

  return (
    <form
      id="signup"
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#eee] p-7"
    >
      <h3 className="mb-5 font-heading text-lg font-semibold tracking-[1px] uppercase">
        Join the Partner Program
      </h3>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="hp-referral">Do not fill this in</label>
        <input
          id="hp-referral"
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

      <FormField label="Company Name" error={errors.company} required>
        <input
          type="text"
          required
          placeholder="Your company or business name"
          value={form.company}
          onChange={update("company")}
          onBlur={blur("company")}
          className={`form-input ${errors.company ? "!border-red-500" : ""}`}
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

      <FormField label="Business Type" error={errors.businessType} required>
        <select
          required
          value={form.businessType}
          onChange={update("businessType")}
          onBlur={blur("businessType")}
          className={`form-input ${errors.businessType ? "!border-red-500" : ""}`}
        >
          <option value="">Select...</option>
          {BUSINESS_TYPES.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Notes / Comments" error={null}>
        <textarea
          placeholder="Anything else you'd like us to know?"
          value={form.notes}
          onChange={update("notes")}
          className="form-input"
          rows={3}
        />
      </FormField>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold mt-2 w-full py-4 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Join the Partner Program →"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-500">
          Something went wrong. Please call us at {SITE.phone} instead.
        </p>
      )}
    </form>
  );
}
