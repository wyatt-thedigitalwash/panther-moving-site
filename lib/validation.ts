export function validateEmail(email: string): string | null {
  if (!email.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    return "Please enter a valid email address";
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone.trim()) return "Phone number is required";
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10)
    return "Please enter a valid 10-digit phone number";
  return null;
}

export function validateFutureDate(dateStr: string): string | null {
  if (!dateStr) return "Move date is required";
  const selected = new Date(dateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selected <= today) return "Move date must be in the future";
  return null;
}

export function validateZip(zip: string): string | null {
  if (!zip.trim()) return "ZIP code is required";
  if (!/^\d{5}$/.test(zip.trim()))
    return "Please enter a valid 5-digit ZIP code";
  return null;
}

export function validateRequired(
  value: string,
  fieldName: string,
): string | null {
  if (!value.trim()) return `${fieldName} is required`;
  return null;
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
