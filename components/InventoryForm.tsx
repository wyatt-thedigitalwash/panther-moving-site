"use client";

import { useState, useRef, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { SITE, BEDROOM_OPTIONS, TRUCK_DISTANCE_OPTIONS } from "@/lib/constants";
import {
  validateEmail,
  validatePhone,
  validateFutureDate,
  validateRequired,
  formatPhone,
} from "@/lib/validation";
import FormField from "@/components/FormField";
import SignatureCanvas, {
  type SignatureCanvasHandle,
} from "@/components/SignatureCanvas";

interface InventoryFormData {
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
  _honeypot: string;
}

type FieldErrors = Partial<Record<string, string | null>>;

const ROOMS = [
  { key: "inventoryBedrooms", label: "Bedrooms" },
  { key: "inventoryLivingRoom", label: "Living Room" },
  { key: "inventoryDiningRoom", label: "Dining Room" },
  { key: "inventoryKitchen", label: "Kitchen" },
  { key: "inventoryGarage", label: "Garage / Storage" },
] as const;

export default function InventoryForm() {
  const searchParams = useSearchParams();
  const sigRef = useRef<SignatureCanvasHandle>(null);
  const [sigError, setSigError] = useState<string | null>(null);

  const [form, setForm] = useState<InventoryFormData>(() => ({
    name: searchParams.get("name") || "",
    phone: searchParams.get("phone") || "",
    email: searchParams.get("email") || "",
    moveDate: searchParams.get("moveDate") || "",
    pickupAddress: searchParams.get("pickupZip") || "",
    deliveryAddress: searchParams.get("deliveryZip") || "",
    bedrooms: "",
    stairsPickup: false,
    stairsPickupFlights: "1",
    stairsDelivery: false,
    stairsDeliveryFlights: "1",
    elevator: false,
    truckDistance: "",
    inventoryBedrooms: "",
    inventoryLivingRoom: "",
    inventoryDiningRoom: "",
    inventoryKitchen: "",
    inventoryGarage: "",
    disassemblyItems: "",
    reassemblyItems: "",
    agreed: false,
    _honeypot: "",
  }));

  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function validateField(field: string, value: string): string | null {
    switch (field) {
      case "name":
        return validateRequired(value, "Full name");
      case "phone":
        return validatePhone(value);
      case "email":
        return validateEmail(value);
      case "moveDate":
        return validateFutureDate(value);
      case "pickupAddress":
        return validateRequired(value, "Pickup address");
      case "deliveryAddress":
        return validateRequired(value, "Delivery address");
      case "bedrooms":
        return validateRequired(value, "Number of bedrooms");
      case "truckDistance":
        return validateRequired(value, "Truck distance");
      default:
        return null;
    }
  }

  const update =
    (field: keyof InventoryFormData) =>
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

  const blur = (field: string) => () => {
    setTouched((prev) => new Set(prev).add(field));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(
        field,
        form[field as keyof InventoryFormData] as string,
      ),
    }));
  };

  function validateAll(): boolean {
    const fields = [
      "name",
      "phone",
      "email",
      "moveDate",
      "pickupAddress",
      "deliveryAddress",
      "bedrooms",
      "truckDistance",
    ];
    const newErrors: FieldErrors = {};
    let valid = true;
    for (const field of fields) {
      const err = validateField(
        field,
        form[field as keyof InventoryFormData] as string,
      );
      newErrors[field] = err;
      if (err) valid = false;
    }

    if (!form.agreed) {
      newErrors.agreed = "You must agree to the disclaimer";
      valid = false;
    }

    setErrors(newErrors);
    setTouched(new Set(fields));
    return valid;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateAll()) return;

    if (sigRef.current?.isEmpty()) {
      setSigError("Please provide your signature");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          signature: sigRef.current?.toDataURL() || "",
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center">
        <div className="mb-2 font-heading text-2xl font-bold uppercase text-gold">
          Inventory Submitted!
        </div>
        <p className="text-sm text-grey">
          Thank you for completing your moving inventory. Our team will review
          your details and call you within 1 business hour with your guaranteed
          quote.
        </p>
        <p className="mt-3 text-sm text-grey">
          Questions? Call us at{" "}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="font-semibold text-gold"
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    );
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="hp-inv">Do not fill this in</label>
        <input
          id="hp-inv"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form._honeypot}
          onChange={update("_honeypot")}
        />
      </div>

      {/* ── Section 1: Customer Info ── */}
      <div className="mb-6">
        <h3 className="border-b border-gold/30 pb-2 font-heading text-lg font-semibold tracking-[1px] uppercase text-gold">
          Customer Information
        </h3>
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

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
      </div>

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

      <FormField
        label="Pickup Address"
        error={errors.pickupAddress}
        required
      >
        <input
          type="text"
          required
          placeholder="Full pickup address"
          value={form.pickupAddress}
          onChange={update("pickupAddress")}
          onBlur={blur("pickupAddress")}
          className={`form-input ${errors.pickupAddress ? "!border-red-500" : ""}`}
        />
      </FormField>

      <FormField
        label="Delivery Address"
        error={errors.deliveryAddress}
        required
      >
        <input
          type="text"
          required
          placeholder="Full delivery address"
          value={form.deliveryAddress}
          onChange={update("deliveryAddress")}
          onBlur={blur("deliveryAddress")}
          className={`form-input ${errors.deliveryAddress ? "!border-red-500" : ""}`}
        />
      </FormField>

      {/* ── Section 2: Property & Access ── */}
      <div className="mb-6 mt-10">
        <h3 className="border-b border-gold/30 pb-2 font-heading text-lg font-semibold tracking-[1px] uppercase text-gold">
          Property & Access Details
        </h3>
      </div>

      <FormField label="Number of Bedrooms" error={errors.bedrooms} required>
        <select
          required
          value={form.bedrooms}
          onChange={update("bedrooms")}
          onBlur={blur("bedrooms")}
          className={`form-input ${errors.bedrooms ? "!border-red-500" : ""}`}
        >
          <option value="">Select...</option>
          {BEDROOM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </FormField>

      {/* Stairs at Pickup */}
      <div className="mb-3.5">
        <div className="flex items-center justify-between">
          <span className="form-label mb-0">Stairs at Pickup?</span>
          <button
            type="button"
            role="switch"
            aria-checked={form.stairsPickup}
            onClick={() =>
              setForm((prev) => ({
                ...prev,
                stairsPickup: !prev.stairsPickup,
              }))
            }
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              form.stairsPickup ? "bg-gold" : "bg-[#ddd]"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                form.stairsPickup ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        {form.stairsPickup && (
          <div className="mt-2 ml-1">
            <FormField label="Number of Flights" className="mb-0">
              <input
                type="number"
                min="1"
                max="10"
                value={form.stairsPickupFlights}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    stairsPickupFlights: e.target.value,
                  }))
                }
                className="form-input w-24"
              />
            </FormField>
          </div>
        )}
      </div>

      {/* Stairs at Delivery */}
      <div className="mb-3.5">
        <div className="flex items-center justify-between">
          <span className="form-label mb-0">Stairs at Delivery?</span>
          <button
            type="button"
            role="switch"
            aria-checked={form.stairsDelivery}
            onClick={() =>
              setForm((prev) => ({
                ...prev,
                stairsDelivery: !prev.stairsDelivery,
              }))
            }
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              form.stairsDelivery ? "bg-gold" : "bg-[#ddd]"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                form.stairsDelivery ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        {form.stairsDelivery && (
          <div className="mt-2 ml-1">
            <FormField label="Number of Flights" className="mb-0">
              <input
                type="number"
                min="1"
                max="10"
                value={form.stairsDeliveryFlights}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    stairsDeliveryFlights: e.target.value,
                  }))
                }
                className="form-input w-24"
              />
            </FormField>
          </div>
        )}
      </div>

      {/* Elevator */}
      <div className="mb-3.5">
        <div className="flex items-center justify-between">
          <span className="form-label mb-0">Elevator Available?</span>
          <button
            type="button"
            role="switch"
            aria-checked={form.elevator}
            onClick={() =>
              setForm((prev) => ({ ...prev, elevator: !prev.elevator }))
            }
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              form.elevator ? "bg-gold" : "bg-[#ddd]"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                form.elevator ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      <FormField
        label="Approx. Truck Distance from Door"
        error={errors.truckDistance}
        required
      >
        <select
          required
          value={form.truckDistance}
          onChange={update("truckDistance")}
          onBlur={blur("truckDistance")}
          className={`form-input ${errors.truckDistance ? "!border-red-500" : ""}`}
        >
          <option value="">Select...</option>
          {TRUCK_DISTANCE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </FormField>

      {/* ── Section 3: Room-by-Room Inventory ── */}
      <div className="mb-6 mt-10">
        <h3 className="border-b border-gold/30 pb-2 font-heading text-lg font-semibold tracking-[1px] uppercase text-gold">
          Room-by-Room Inventory
        </h3>
        <p className="mt-2 text-sm text-grey">
          List all items in each room that need to be moved.
        </p>
      </div>

      {ROOMS.map(({ key, label }) => (
        <FormField key={key} label={label}>
          <textarea
            rows={3}
            placeholder={`List items from your ${label.toLowerCase()}...`}
            value={form[key as keyof InventoryFormData] as string}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, [key]: e.target.value }))
            }
            className="form-input min-h-[80px] resize-y"
          />
        </FormField>
      ))}

      {/* ── Section 4: Assembly & Disassembly ── */}
      <div className="mb-6 mt-10">
        <h3 className="border-b border-gold/30 pb-2 font-heading text-lg font-semibold tracking-[1px] uppercase text-gold">
          Assembly & Disassembly
        </h3>
      </div>

      <FormField label="Items Requiring Disassembly">
        <textarea
          rows={3}
          placeholder="e.g. bed frame, dining table, desk..."
          value={form.disassemblyItems}
          onChange={update("disassemblyItems")}
          className="form-input min-h-[80px] resize-y"
        />
      </FormField>

      <FormField label="Items Requiring Reassembly at Delivery">
        <textarea
          rows={3}
          placeholder="e.g. bed frame, bookshelf, desk..."
          value={form.reassemblyItems}
          onChange={update("reassemblyItems")}
          className="form-input min-h-[80px] resize-y"
        />
      </FormField>

      {/* ── Section 5: Disclaimer & Signature ── */}
      <div className="mb-6 mt-10">
        <h3 className="border-b border-gold/30 pb-2 font-heading text-lg font-semibold tracking-[1px] uppercase text-gold">
          Pricing Disclaimer & Signature
        </h3>
      </div>

      <div className="mb-5 rounded-lg border border-[#eee] bg-off-white p-5 text-sm leading-[1.8] text-grey">
        <p>
          Pricing is based solely on the inventory and details provided in this
          form. Any items not listed, additional furniture, excess boxes, or
          undisclosed access challenges may result in additional charges on
          moving day. Panther Moving reserves the right to adjust pricing if the
          scope of work differs from this submission.
        </p>
      </div>

      <div className="mb-4">
        <label className="form-label">
          Your Signature <span className="ml-0.5 text-red-500">*</span>
        </label>
        <SignatureCanvas
          ref={sigRef}
          height={160}
          onDrawEnd={() => setSigError(null)}
        />
        {sigError && (
          <p className="mt-1 text-xs font-medium text-red-500">{sigError}</p>
        )}
        <button
          type="button"
          onClick={() => {
            sigRef.current?.clear();
            setSigError(null);
          }}
          className="mt-2 font-heading text-xs tracking-[1px] uppercase text-grey transition-colors hover:text-gold"
        >
          Clear Signature
        </button>
      </div>

      <label className="mb-5 flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, agreed: e.target.checked }))
          }
          className="mt-0.5 h-4 w-4 accent-gold"
        />
        <span className="text-sm leading-[1.6] text-grey">
          I agree to the above terms and confirm the inventory information
          provided is accurate to the best of my knowledge.
        </span>
      </label>
      {errors.agreed && (
        <p className="mb-3 text-xs font-medium text-red-500">
          {errors.agreed}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold mt-2 w-full py-4 disabled:opacity-60"
      >
        {status === "sending"
          ? "Submitting..."
          : "Submit My Inventory \u2192"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-500">
          Something went wrong. Please call us at {SITE.phone} instead.
        </p>
      )}
    </form>
  );
}
