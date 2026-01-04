import { Shield, Lock, Cloud, CheckCircle2 } from "lucide-react";

export function DesignSystemOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Design System Overview</h2>
        <p className="text-lg mb-6" style={{ color: "var(--text-secondary)" }}>
          A professional, dark-mode-first design system for Azure cloud consulting, optimized for
          regulated industries including finance, healthcare, and government sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-xl">
          <Shield className="w-8 h-8 mb-4" style={{ color: "var(--primary-azure)" }} />
          <h4 className="mb-2">Senior Technical Credibility</h4>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Restrained, serious aesthetics that convey expertise and professionalism
          </p>
        </div>

        <div className="glass p-6 rounded-xl">
          <Lock className="w-8 h-8 mb-4" style={{ color: "var(--accent-teal)" }} />
          <h4 className="mb-2">Security & Compliance</h4>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Built for audit readiness with WCAG AA contrast standards
          </p>
        </div>

        <div className="glass p-6 rounded-xl">
          <Cloud className="w-8 h-8 mb-4" style={{ color: "var(--primary-cyan)" }} />
          <h4 className="mb-2">Modern Architecture</h4>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Dark blue-black backgrounds with glass surfaces and subtle animations
          </p>
        </div>
      </div>

      <div className="glass p-8 rounded-xl">
        <h3 className="mb-4">Design Principles</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 mt-0.5 flex-shrink-0"
              style={{ color: "var(--accent-teal)" }}
            />
            <div>
              <strong>Dark-Mode-First:</strong>{" "}
              <span style={{ color: "var(--text-secondary)" }}>
                Primary theme optimized for extended use in professional environments
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 mt-0.5 flex-shrink-0"
              style={{ color: "var(--accent-teal)" }}
            />
            <div>
              <strong>Accessibility:</strong>{" "}
              <span style={{ color: "var(--text-secondary)" }}>
                WCAG AA minimum contrast ratios for all text and interactive elements
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 mt-0.5 flex-shrink-0"
              style={{ color: "var(--accent-teal)" }}
            />
            <div>
              <strong>Consistency:</strong>{" "}
              <span style={{ color: "var(--text-secondary)" }}>
                4px-based spacing scale and systematic token architecture
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 mt-0.5 flex-shrink-0"
              style={{ color: "var(--accent-teal)" }}
            />
            <div>
              <strong>Performance:</strong>{" "}
              <span style={{ color: "var(--text-secondary)" }}>
                Controlled animation durations (300-500ms) for professional feel
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
