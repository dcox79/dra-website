import { Shield, Cloud, Network, Lock, Info } from "lucide-react";

export function PatternsShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Design Patterns</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Common layout and interaction patterns for Azure consulting applications
        </p>
      </div>

      {/* Dashboard Pattern */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Dashboard Pattern</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div
            className="p-4 rounded-lg border"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h6 className="text-xs uppercase" style={{ color: "var(--text-tertiary)" }}>
                Active Resources
              </h6>
              <Cloud className="w-4 h-4" style={{ color: "var(--primary-cyan)" }} />
            </div>
            <div className="text-3xl mb-1">247</div>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              +12% this month
            </p>
          </div>

          <div
            className="p-4 rounded-lg border"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h6 className="text-xs uppercase" style={{ color: "var(--text-tertiary)" }}>
                Compliance Score
              </h6>
              <Shield className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
            </div>
            <div className="text-3xl mb-1">98.5%</div>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Meets all standards
            </p>
          </div>

          <div
            className="p-4 rounded-lg border"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h6 className="text-xs uppercase" style={{ color: "var(--text-tertiary)" }}>
                Security Alerts
              </h6>
              <Lock className="w-4 h-4" style={{ color: "var(--primary-azure)" }} />
            </div>
            <div className="text-3xl mb-1">3</div>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              2 resolved today
            </p>
          </div>
        </div>
      </div>

      {/* Data Table Pattern */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Data Table Pattern</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                <th className="text-left py-3 px-4" style={{ color: "var(--text-tertiary)" }}>
                  Resource Name
                </th>
                <th className="text-left py-3 px-4" style={{ color: "var(--text-tertiary)" }}>
                  Type
                </th>
                <th className="text-left py-3 px-4" style={{ color: "var(--text-tertiary)" }}>
                  Status
                </th>
                <th className="text-left py-3 px-4" style={{ color: "var(--text-tertiary)" }}>
                  Region
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <td className="py-3 px-4">
                  <code style={{ color: "var(--code-text)" }}>prod-web-app-01</code>
                </td>
                <td className="py-3 px-4" style={{ color: "var(--text-secondary)" }}>
                  App Service
                </td>
                <td className="py-3 px-4">
                  <span
                    className="px-2 py-1 rounded text-xs"
                    style={{
                      background: "var(--success-muted)",
                      color: "var(--success)",
                    }}
                  >
                    Running
                  </span>
                </td>
                <td className="py-3 px-4" style={{ color: "var(--text-secondary)" }}>
                  East US
                </td>
              </tr>
              <tr className="border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <td className="py-3 px-4">
                  <code style={{ color: "var(--code-text)" }}>prod-sql-db-01</code>
                </td>
                <td className="py-3 px-4" style={{ color: "var(--text-secondary)" }}>
                  SQL Database
                </td>
                <td className="py-3 px-4">
                  <span
                    className="px-2 py-1 rounded text-xs"
                    style={{
                      background: "var(--success-muted)",
                      color: "var(--success)",
                    }}
                  >
                    Running
                  </span>
                </td>
                <td className="py-3 px-4" style={{ color: "var(--text-secondary)" }}>
                  East US
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">
                  <code style={{ color: "var(--code-text)" }}>staging-vm-01</code>
                </td>
                <td className="py-3 px-4" style={{ color: "var(--text-secondary)" }}>
                  Virtual Machine
                </td>
                <td className="py-3 px-4">
                  <span
                    className="px-2 py-1 rounded text-xs"
                    style={{
                      background: "var(--warning-muted)",
                      color: "var(--warning)",
                    }}
                  >
                    Stopped
                  </span>
                </td>
                <td className="py-3 px-4" style={{ color: "var(--text-secondary)" }}>
                  West US
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Navigation Pattern */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Navigation Pattern</h3>
        <div
          className="flex gap-1 p-1 rounded-lg"
          style={{ background: "var(--background-surface)" }}
        >
          <button
            className="px-4 py-2 rounded-md transition-all"
            style={{
              background: "var(--primary-azure)",
              color: "var(--primary-foreground)",
              transitionDuration: "var(--duration-fast)",
            }}
          >
            Overview
          </button>
          <button
            className="px-4 py-2 rounded-md transition-all"
            style={{
              color: "var(--text-secondary)",
              transitionDuration: "var(--duration-fast)",
            }}
          >
            Resources
          </button>
          <button
            className="px-4 py-2 rounded-md transition-all"
            style={{
              color: "var(--text-secondary)",
              transitionDuration: "var(--duration-fast)",
            }}
          >
            Security
          </button>
          <button
            className="px-4 py-2 rounded-md transition-all"
            style={{
              color: "var(--text-secondary)",
              transitionDuration: "var(--duration-fast)",
            }}
          >
            Compliance
          </button>
        </div>
      </div>

      {/* Accessibility Notes */}
      <div
        className="p-6 rounded-lg border-l-4"
        style={{
          background: "var(--info-muted)",
          borderLeftColor: "var(--info)",
        }}
      >
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 mt-0.5" style={{ color: "var(--info)" }} />
          <div>
            <h5 className="mb-2">Accessibility Standards</h5>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>
                • All color combinations meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1
                for large text)
              </li>
              <li>• Focus states are clearly visible with ring utilities</li>
              <li>• Interactive elements have minimum touch target size of 44x44px</li>
              <li>• Semantic HTML is used throughout for screen reader compatibility</li>
              <li>• Motion respects prefers-reduced-motion user preferences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
