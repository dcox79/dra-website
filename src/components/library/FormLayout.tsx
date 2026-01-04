import { AlertCircle } from "lucide-react";

export interface FormField {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select fields
  error?: string;
  helpText?: string;
}

export interface FormLayoutProps {
  fields: FormField[];
  submitLabel?: string;
  onSubmit?: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
  columns?: 1 | 2;
}

export function FormLayout({
  fields,
  submitLabel = "Submit",
  onSubmit,
  isSubmitting = false,
  columns = 1,
}: FormLayoutProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div
        className={`grid gap-6 ${columns === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}
      >
        {fields.map((field) => {
          const fullWidth = field.type === "textarea";
          return (
            <div
              key={field.id}
              className={fullWidth && columns === 2 ? "md:col-span-2" : ""}
            >
              {/* Label */}
              <label
                htmlFor={field.id}
                className="block mb-2 font-medium"
                style={{ color: "var(--foreground)" }}
              >
                {field.label}
                {field.required && (
                  <span style={{ color: "var(--destructive)" }}> *</span>
                )}
              </label>

              {/* Help Text */}
              {field.helpText && (
                <p
                  className="text-xs mb-2"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {field.helpText}
                </p>
              )}

              {/* Input Field */}
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={4}
                  className="motion-focus w-full px-4 py-3 rounded-lg border resize-none"
                  style={{
                    background: "var(--input-background)",
                    borderColor: field.error ? "var(--destructive)" : "var(--border)",
                    color: "var(--foreground)",
                  }}
                />
              ) : field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.id}
                  required={field.required}
                  className="motion-focus w-full px-4 py-3 rounded-lg border"
                  style={{
                    background: "var(--input-background)",
                    borderColor: field.error ? "var(--destructive)" : "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  <option value="">Select an option</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="motion-focus w-full px-4 py-3 rounded-lg border"
                  style={{
                    background: "var(--input-background)",
                    borderColor: field.error ? "var(--destructive)" : "var(--border)",
                    color: "var(--foreground)",
                  }}
                />
              )}

              {/* Error Message */}
              {field.error && (
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--destructive)" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "var(--destructive)" }}
                  >
                    {field.error}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="motion-button-glow w-full sm:w-auto px-8 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: "var(--primary-azure)",
            color: "var(--primary-foreground)",
          }}
        >
          {isSubmitting ? "Submitting..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
