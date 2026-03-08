import { type ReactNode } from "react";

interface FormFieldProps {
  label: string;
  error?: string | null;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export default function FormField({
  label,
  error,
  required,
  children,
  className = "mb-3.5",
}: FormFieldProps) {
  return (
    <div className={className}>
      <label className="form-label">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}
