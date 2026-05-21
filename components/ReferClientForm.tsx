"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/constants";
import {
  validateEmail,
  validatePhone,
  validateRequired,
  validateFutureDate,
  formatPhone,
} from "@/lib/validation";
import FormField from "@/components/FormField";

const MOVE_SIZE_OPTIONS = [
  "Studio/1 Bedroom",
  "2 Bedroom",
  "3 Bedroom",
  "4+ Bedroom",
  "Office/Commercial",
] as const;

interface ReferClientFormData {
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

const INITIAL: ReferClientFormData = {
  partnerName: "",
  partnerEmail: "",
  partnerCompany: "",
  clientName: "",
  clientPhone: "",
  clientEmail: "",
  movingFrom: "",
  movingTo: "",
  moveDate: "",
  moveSize: "",
  notes: "",
  _honeypot: "",
};

type FieldErrors = Partial<Record<keyof ReferClientFormData, string | null>>;

export default function ReferClientForm() {
  const [form, setForm] = useState<ReferClientFormData>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Set<keyof ReferClientFormData>>(
    new Set(),
  );
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  function validateField(
    field: keyof ReferClientFormData,
    value: string,
  ): string | null {
    switch (field) {
      case "partnerName":
        return validateRequired(value, "Partner name");
      case "partnerEmail":
        return validateEmail(value);
      case "partnerCompany":
        return validateRequired(value, "Company name");
      case "clientName":
        return validateRequired(value, "Client name");
      case "clientPhone":
        return validatePhone(value);
      case "clientEmail":
        return value.trim() ? validateEmail(value) : null;
      case "movingFrom":
        return validateRequired(value, "Moving from");
      case "movingTo":
        return validateRequired(value, "Moving to");
      case "moveDate":
        return validateFutureDate(value);
      case "moveSize":
        return validateRequired(value, "Move size");
      default:
        return null;
    }
  }

  const update =
    (field: keyof ReferClientFormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      let value = e.target.value;
      if (field === "clientPhone") value = formatPhone(value);
      setForm((prev) => ({ ...prev, [field]: value }));
      if (touched.has(field)) {
        setErrors((prev) => ({
          ...prev,
          [field]: validateField(field, value),
        }));
      }
    };

  const blur = (field: keyof ReferClientFormData) => () => {
    setTouched((prev) => new Set(prev).add(field));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };

  function validateAll(): boolean {
    const fields: (keyof ReferClientFormData)[] = [
      "partnerName",
      "partnerEmail",
      "partnerCompany",
      "clientName",
      "clientPhone",
      "movingFrom",
      "movingTo",
      "moveDate",
      "moveSize",
    ];
    const newErrors: FieldErrors = {};
    let valid = true;
    for (const field of fields) {
      const err = validateField(field, form[field]);
      newErrors[field] = err;
      if (err) valid = false;
    }
    if (form.clientEmail.trim()) {
      const emailErr = validateEmail(form.clientEmail);
      newErrors.clientEmail = emailErr;
      if (emailErr) valid = false;
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
      const res = await fetch("/api/refer", {
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

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (status === "success") {
    return (
      <div className="rounded-lg border border-[#eee] p-7 text-center">
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
          Referral Submitted!
        </h3>
        <p className="text-sm font-light leading-[1.7] text-grey">
          We&apos;ll reach out to your client within 24 hours. Thanks for the
          referral.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#eee] p-7"
    >
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="hp-refer">Do not fill this in</label>
        <input
          id="hp-refer"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form._honeypot}
          onChange={update("_honeypot")}
        />
      </div>

      {/* Partner Info */}
      <h3 className="mb-5 font-heading text-lg font-semibold tracking-[1px] uppercase">
        Your Info
      </h3>

      <FormField label="Your Name" error={errors.partnerName} required>
        <input
          type="text"
          required
          placeholder="Your full name"
          value={form.partnerName}
          onChange={update("partnerName")}
          onBlur={blur("partnerName")}
          className={`form-input ${errors.partnerName ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField label="Your Email" error={errors.partnerEmail} required>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={form.partnerEmail}
          onChange={update("partnerEmail")}
          onBlur={blur("partnerEmail")}
          className={`form-input ${errors.partnerEmail ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField label="Company Name" error={errors.partnerCompany} required>
        <input
          type="text"
          required
          placeholder="Your company or business name"
          value={form.partnerCompany}
          onChange={update("partnerCompany")}
          onBlur={blur("partnerCompany")}
          className={`form-input ${errors.partnerCompany ? "!border-red-500" : ""}`}
        />
      </FormField>

      {/* Client Info */}
      <div className="mb-5 mt-7 border-t border-[#eee] pt-7">
        <h3 className="mb-5 font-heading text-lg font-semibold tracking-[1px] uppercase">
          Client Info
        </h3>
      </div>

      <FormField label="Client Name" error={errors.clientName} required>
        <input
          type="text"
          required
          placeholder="Client's full name"
          value={form.clientName}
          onChange={update("clientName")}
          onBlur={blur("clientName")}
          className={`form-input ${errors.clientName ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField label="Client Phone" error={errors.clientPhone} required>
        <input
          type="tel"
          required
          placeholder="(555) 555-5555"
          value={form.clientPhone}
          onChange={update("clientPhone")}
          onBlur={blur("clientPhone")}
          className={`form-input ${errors.clientPhone ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField label="Client Email" error={errors.clientEmail}>
        <input
          type="email"
          placeholder="client@example.com (optional)"
          value={form.clientEmail}
          onChange={update("clientEmail")}
          onBlur={blur("clientEmail")}
          className={`form-input ${errors.clientEmail ? "!border-red-500" : ""}`}
        />
      </FormField>

      {/* Move Details */}
      <div className="mb-5 mt-7 border-t border-[#eee] pt-7">
        <h3 className="mb-5 font-heading text-lg font-semibold tracking-[1px] uppercase">
          Move Details
        </h3>
      </div>

      <FormField label="Moving From" error={errors.movingFrom} required>
        <input
          type="text"
          required
          placeholder="Address or general area"
          value={form.movingFrom}
          onChange={update("movingFrom")}
          onBlur={blur("movingFrom")}
          className={`form-input ${errors.movingFrom ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField label="Moving To" error={errors.movingTo} required>
        <input
          type="text"
          required
          placeholder="Address or general area"
          value={form.movingTo}
          onChange={update("movingTo")}
          onBlur={blur("movingTo")}
          className={`form-input ${errors.movingTo ? "!border-red-500" : ""}`}
        />
      </FormField>

      <div className="grid grid-cols-2 gap-3">
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

        <FormField label="Move Size" error={errors.moveSize} required>
          <select
            required
            value={form.moveSize}
            onChange={update("moveSize")}
            onBlur={blur("moveSize")}
            className={`form-input ${errors.moveSize ? "!border-red-500" : ""}`}
          >
            <option value="">Select...</option>
            {MOVE_SIZE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Notes / Special Requests" error={null}>
        <textarea
          placeholder="Anything else we should know about this move?"
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
        {status === "sending" ? "Submitting..." : "Submit Referral →"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-500">
          Something went wrong. Please call us at {SITE.phone} instead.
        </p>
      )}
    </form>
  );
}
