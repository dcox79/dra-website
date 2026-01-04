import { CheckCircle2, Info, AlertTriangle, XCircle } from "lucide-react";

function ColorCard({
  name,
  token,
  value,
  description,
}: {
  name: string;
  token: string;
  value: string;
  description: string;
}) {
  return (
    <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
      <div className="w-full h-20 rounded-lg mb-4" style={{ background: `var(${token})` }}></div>
      <h5 className="mb-1">{name}</h5>
      <code className="text-xs block mb-2" style={{ color: "var(--text-secondary)" }}>
        {token}
      </code>
      <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
        {description}
      </p>
    </div>
  );
}

export function ColorShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Color System</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Blue and cyan spectrum for primary brand colors, with muted teal accents used sparingly
        </p>
      </div>

      {/* Primary Colors */}
      <div>
        <h3 className="mb-4">Primary Brand Colors</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <ColorCard
            name="Primary Azure"
            token="--primary-azure"
            value="oklch(0.60 0.14 230)"
            description="Primary brand blue"
          />
          <ColorCard
            name="Primary Blue"
            token="--primary-blue"
            value="oklch(0.55 0.15 250)"
            description="Deep blue variant"
          />
          <ColorCard
            name="Primary Cyan"
            token="--primary-cyan"
            value="oklch(0.65 0.12 200)"
            description="Cyan highlight"
          />
        </div>
      </div>

      {/* Accent Colors */}
      <div>
        <h3 className="mb-4">Accent Colors (Use Sparingly)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ColorCard
            name="Accent Teal"
            token="--accent-teal"
            value="oklch(0.55 0.08 180)"
            description="Muted teal for success states"
          />
          <ColorCard
            name="Accent Green"
            token="--accent-green"
            value="oklch(0.58 0.10 160)"
            description="Muted green for highlights"
          />
        </div>
      </div>

      {/* Backgrounds */}
      <div>
        <h3 className="mb-4">Backgrounds</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <ColorCard
            name="Background"
            token="--background"
            value="oklch(0.12 0.015 250)"
            description="Main background - dark blue-black"
          />
          <ColorCard
            name="Background Elevated"
            token="--background-elevated"
            value="oklch(0.15 0.018 250)"
            description="Elevated surfaces"
          />
          <ColorCard
            name="Background Surface"
            token="--background-surface"
            value="oklch(0.18 0.02 250)"
            description="Surface elements"
          />
        </div>
      </div>

      {/* Text Colors */}
      <div>
        <h3 className="mb-4">Text Colors</h3>
        <div className="glass p-8 rounded-xl space-y-4">
          <div
            className="flex items-center justify-between p-4 rounded-lg"
            style={{ background: "var(--background)" }}
          >
            <span style={{ color: "var(--text-primary)" }}>
              Primary Text - High contrast off-white
            </span>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --text-primary
            </code>
          </div>
          <div
            className="flex items-center justify-between p-4 rounded-lg"
            style={{ background: "var(--background)" }}
          >
            <span style={{ color: "var(--text-secondary)" }}>Secondary Text - Muted gray</span>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --text-secondary
            </code>
          </div>
          <div
            className="flex items-center justify-between p-4 rounded-lg"
            style={{ background: "var(--background)" }}
          >
            <span style={{ color: "var(--text-tertiary)" }}>Tertiary Text - Lower hierarchy</span>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --text-tertiary
            </code>
          </div>
          <div
            className="flex items-center justify-between p-4 rounded-lg"
            style={{ background: "var(--background)" }}
          >
            <span style={{ color: "var(--text-disabled)" }}>
              Disabled Text - Lowest contrast
            </span>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --text-disabled
            </code>
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div>
        <h3 className="mb-4">Status Colors</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5" style={{ color: "var(--success)" }} />
              <h5>Success</h5>
            </div>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --success
            </code>
          </div>

          <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-5 h-5" style={{ color: "var(--info)" }} />
              <h5>Info</h5>
            </div>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --info
            </code>
          </div>

          <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5" style={{ color: "var(--warning)" }} />
              <h5>Warning</h5>
            </div>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --warning
            </code>
          </div>

          <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3 mb-3">
              <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
              <h5>Error</h5>
            </div>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --destructive
            </code>
          </div>
        </div>
      </div>

      {/* Borders */}
      <div>
        <h3 className="mb-4">Borders</h3>
        <div className="glass p-8 rounded-xl space-y-4">
          <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border-subtle)" }}>
            <span className="text-sm">Subtle Border</span>
            <code className="text-xs ml-4" style={{ color: "var(--text-secondary)" }}>
              --border-subtle
            </code>
          </div>
          <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm">Default Border</span>
            <code className="text-xs ml-4" style={{ color: "var(--text-secondary)" }}>
              --border
            </code>
          </div>
          <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border-strong)" }}>
            <span className="text-sm">Strong Border</span>
            <code className="text-xs ml-4" style={{ color: "var(--text-secondary)" }}>
              --border-strong
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
