export function SpacingShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Spacing System</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          4px-based scale for consistent rhythm and alignment
        </p>
      </div>

      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Spacing Scale</h3>
        <div className="space-y-4">
          {[
            { name: "--space-1", value: "4px", pixels: 4 },
            { name: "--space-2", value: "8px", pixels: 8 },
            { name: "--space-3", value: "12px", pixels: 12 },
            { name: "--space-4", value: "16px", pixels: 16 },
            { name: "--space-5", value: "20px", pixels: 20 },
            { name: "--space-6", value: "24px", pixels: 24 },
            { name: "--space-8", value: "32px", pixels: 32 },
            { name: "--space-10", value: "40px", pixels: 40 },
            { name: "--space-12", value: "48px", pixels: 48 },
            { name: "--space-16", value: "64px", pixels: 64 },
            { name: "--space-20", value: "80px", pixels: 80 },
            { name: "--space-24", value: "96px", pixels: 96 },
          ].map((space) => (
            <div key={space.name} className="flex items-center gap-4">
              <code className="text-sm w-32" style={{ color: "var(--text-secondary)" }}>
                {space.name}
              </code>
              <div
                className="h-8 rounded"
                style={{ width: `${space.pixels}px`, background: "var(--primary-azure)" }}
              ></div>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {space.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Border Radius</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div
              className="w-24 h-24 mb-3"
              style={{ background: "var(--primary-azure)", borderRadius: "var(--radius-sm)" }}
            ></div>
            <h5 className="mb-1">Small</h5>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --radius-sm (6px)
            </code>
          </div>
          <div>
            <div
              className="w-24 h-24 mb-3"
              style={{ background: "var(--primary-azure)", borderRadius: "var(--radius-md)" }}
            ></div>
            <h5 className="mb-1">Medium</h5>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --radius-md (8px)
            </code>
          </div>
          <div>
            <div
              className="w-24 h-24 mb-3"
              style={{ background: "var(--primary-azure)", borderRadius: "var(--radius-lg)" }}
            ></div>
            <h5 className="mb-1">Large (Default)</h5>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --radius-lg (12px)
            </code>
          </div>
          <div>
            <div
              className="w-24 h-24 mb-3"
              style={{ background: "var(--primary-azure)", borderRadius: "var(--radius-xl)" }}
            ></div>
            <h5 className="mb-1">Extra Large</h5>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --radius-xl (16px)
            </code>
          </div>
          <div>
            <div
              className="w-24 h-24 mb-3"
              style={{ background: "var(--primary-azure)", borderRadius: "var(--radius-2xl)" }}
            ></div>
            <h5 className="mb-1">2X Large</h5>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              --radius-2xl (24px)
            </code>
          </div>
        </div>
      </div>

      {/* Shadows */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Shadows</h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Soft, realistic shadows without heavy glow effects
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Extra Small", token: "--shadow-xs" },
            { name: "Small", token: "--shadow-sm" },
            { name: "Medium", token: "--shadow-md" },
            { name: "Large", token: "--shadow-lg" },
            { name: "Extra Large", token: "--shadow-xl" },
          ].map((shadow) => (
            <div key={shadow.token}>
              <div
                className="w-full h-24 mb-3 rounded-lg"
                style={{
                  background: "var(--background-surface)",
                  boxShadow: `var(${shadow.token})`,
                }}
              ></div>
              <h5 className="mb-1">{shadow.name}</h5>
              <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {shadow.token}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
