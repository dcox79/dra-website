export function TypographyShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Typography</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Modern geometric sans-serif for headings, highly readable neutral sans-serif for body
          text
        </p>
      </div>

      {/* Font Families */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Font Families</h3>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 style={{ fontFamily: "var(--font-heading)" }}>Headings Font</h4>
              <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
                --font-heading
              </code>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              System UI sans-serif stack (Segoe UI on Windows for Azure consistency)
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p style={{ fontFamily: "var(--font-body)" }}>
                Body text uses the same modern sans-serif for consistency
              </p>
              <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
                --font-body
              </code>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Optimized for readability in technical documentation
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <code style={{ fontFamily: "var(--font-mono)" }}>
                Monospace for code and technical text
              </code>
              <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
                --font-mono
              </code>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Cascadia Code, SF Mono, Menlo fallback stack
            </p>
          </div>
        </div>
      </div>

      {/* Heading Hierarchy */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Heading Hierarchy</h3>
        <div className="space-y-6">
          <div>
            <h1>Heading 1 - Main Page Title</h1>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              48px / 600 weight / tight leading
            </code>
          </div>
          <div>
            <h2>Heading 2 - Section Title</h2>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              30px / 600 weight / tight leading
            </code>
          </div>
          <div>
            <h3>Heading 3 - Subsection Title</h3>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              24px / 600 weight / snug leading
            </code>
          </div>
          <div>
            <h4>Heading 4 - Component Title</h4>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              20px / 500 weight / snug leading
            </code>
          </div>
          <div>
            <h5>Heading 5 - Card or Block Title</h5>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              18px / 500 weight / normal leading
            </code>
          </div>
          <div>
            <h6>Heading 6 - Label or Category</h6>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              16px / 600 weight / uppercase / tracked
            </code>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Body Text</h3>
        <div className="space-y-6">
          <div>
            <p className="text-lg">Large body text for introductions and emphasis</p>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              18px / 400 weight / relaxed leading
            </code>
          </div>
          <div>
            <p>
              Regular body text for general content and descriptions. This is the primary text size
              used throughout the application for optimal readability.
            </p>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              16px / 400 weight / relaxed leading
            </code>
          </div>
          <div>
            <p className="text-sm">
              Small text for secondary information, captions, and metadata
            </p>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              14px / 400 weight / normal leading
            </code>
          </div>
          <div>
            <p className="text-xs">
              Extra small text for fine print, timestamps, and minimal UI
            </p>
            <code className="text-xs" style={{ color: "var(--text-secondary)" }}>
              12px / 400 weight / normal leading
            </code>
          </div>
        </div>
      </div>

      {/* Code Text */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Code & Technical Text</h3>
        <div
          className="p-4 rounded-lg"
          style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}
        >
          <code style={{ color: "var(--code-text)" }}>
            az vm create --resource-group DefaultRouteRG --name AzureVM01
          </code>
        </div>
        <p className="text-sm mt-4" style={{ color: "var(--text-secondary)" }}>
          Monospace font with specialized code background and syntax-friendly color
        </p>
      </div>
    </div>
  );
}
