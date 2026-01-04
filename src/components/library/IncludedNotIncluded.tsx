import { CheckCircle2, XCircle } from "lucide-react";

export interface IncludedNotIncludedProps {
  included: string[];
  notIncluded: string[];
  includedTitle?: string;
  notIncludedTitle?: string;
}

export function IncludedNotIncluded({
  included,
  notIncluded,
  includedTitle = "What's Included",
  notIncludedTitle = "What's Not Included",
}: IncludedNotIncludedProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Included Column */}
      <div
        className="glass p-6 rounded-xl border"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: "var(--success-muted)" }}
          >
            <CheckCircle2
              className="w-5 h-5"
              style={{ color: "var(--success)" }}
            />
          </div>
          <h4 style={{ color: "var(--foreground)" }}>{includedTitle}</h4>
        </div>
        <ul className="space-y-3">
          {included.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                style={{ color: "var(--success)" }}
              />
              <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not Included Column */}
      <div
        className="glass p-6 rounded-xl border"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: "var(--destructive-muted)" }}
          >
            <XCircle
              className="w-5 h-5"
              style={{ color: "var(--destructive)" }}
            />
          </div>
          <h4 style={{ color: "var(--foreground)" }}>{notIncludedTitle}</h4>
        </div>
        <ul className="space-y-3">
          {notIncluded.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <XCircle
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                style={{ color: "var(--text-tertiary)" }}
              />
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
