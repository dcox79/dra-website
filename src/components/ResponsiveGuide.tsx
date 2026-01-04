import { Shield, Cloud, CheckCircle2, Smartphone, Tablet, Monitor } from "lucide-react";

export function ResponsiveGuide() {
  return (
    <div className="dark min-h-screen py-12" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
            Responsive Design System
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
            Mobile-first responsive design guidelines ensuring optimal experience across all
            devices. All components adapt to mobile, tablet, and desktop viewports.
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1: Breakpoints */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                1. Breakpoint System
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Three-tier responsive system using Tailwind's default breakpoints.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mobile */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--primary-azure)" }}
                  >
                    <Smartphone
                      className="w-5 h-5"
                      style={{ color: "var(--primary-foreground)" }}
                    />
                  </div>
                  <div>
                    <h3 style={{ color: "var(--foreground)" }}>Mobile</h3>
                    <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                      Default
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      0px - 639px
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>No prefix needed</p>
                  </div>
                  <div
                    className="p-3 rounded-lg text-xs"
                    style={{ background: "var(--background-elevated)" }}
                  >
                    <p className="mb-2 font-mono" style={{ color: "var(--code-text)" }}>
                      className="px-6"
                    </p>
                    <p style={{ color: "var(--text-tertiary)" }}>Mobile-first default</p>
                  </div>
                </div>
              </div>

              {/* Tablet */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--primary-cyan)" }}
                  >
                    <Tablet
                      className="w-5 h-5"
                      style={{ color: "var(--primary-foreground)" }}
                    />
                  </div>
                  <div>
                    <h3 style={{ color: "var(--foreground)" }}>Tablet</h3>
                    <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                      sm: / md:
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      640px - 1023px
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>Use sm: or md: prefix</p>
                  </div>
                  <div
                    className="p-3 rounded-lg text-xs"
                    style={{ background: "var(--background-elevated)" }}
                  >
                    <p className="mb-2 font-mono" style={{ color: "var(--code-text)" }}>
                      className="px-6 sm:px-8"
                    </p>
                    <p style={{ color: "var(--text-tertiary)" }}>Tablet override</p>
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--accent-teal)" }}
                  >
                    <Monitor
                      className="w-5 h-5"
                      style={{ color: "var(--primary-foreground)" }}
                    />
                  </div>
                  <div>
                    <h3 style={{ color: "var(--foreground)" }}>Desktop</h3>
                    <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                      lg: / xl:
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      1024px+
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>Use lg: or xl: prefix</p>
                  </div>
                  <div
                    className="p-3 rounded-lg text-xs"
                    style={{ background: "var(--background-elevated)" }}
                  >
                    <p className="mb-2 font-mono" style={{ color: "var(--code-text)" }}>
                      className="px-6 sm:px-8 lg:px-12"
                    </p>
                    <p style={{ color: "var(--text-tertiary)" }}>Desktop override</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Responsive Spacing */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                2. Responsive Spacing Patterns
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Spacing increases progressively from mobile to desktop for better visual hierarchy.
              </p>
            </div>

            <div className="space-y-6">
              {/* Container Padding */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Container Padding
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--primary-azure)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Mobile
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      px-6 (24px)
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--primary-cyan)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Tablet
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      sm:px-8 (32px)
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--accent-teal)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Desktop
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      lg:px-12 (48px)
                    </p>
                  </div>
                </div>
                <code
                  className="block p-3 rounded text-xs font-mono"
                  style={{
                    background: "var(--code-background)",
                    color: "var(--code-text)",
                  }}
                >
                  className="px-6 sm:px-8 lg:px-12"
                </code>
              </div>

              {/* Section Spacing */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Section Spacing (Vertical)
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--primary-azure)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Mobile
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      py-12 (48px)
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--primary-cyan)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Tablet
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      sm:py-16 (64px)
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--accent-teal)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Desktop
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      lg:py-20 (80px)
                    </p>
                  </div>
                </div>
                <code
                  className="block p-3 rounded text-xs font-mono"
                  style={{
                    background: "var(--code-background)",
                    color: "var(--code-text)",
                  }}
                >
                  className="py-12 sm:py-16 lg:py-20"
                </code>
              </div>

              {/* Component Gaps */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Component Gap Spacing
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--primary-azure)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Mobile
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      gap-4 (16px)
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--primary-cyan)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Tablet
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      sm:gap-6 (24px)
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderLeftColor: "var(--accent-teal)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "var(--text-tertiary)" }}>
                      Desktop
                    </p>
                    <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                      lg:gap-8 (32px)
                    </p>
                  </div>
                </div>
                <code
                  className="block p-3 rounded text-xs font-mono"
                  style={{
                    background: "var(--code-background)",
                    color: "var(--code-text)",
                  }}
                >
                  className="gap-4 sm:gap-6 lg:gap-8"
                </code>
              </div>
            </div>
          </section>

          {/* Section 3: Responsive Grid Layouts */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                3. Responsive Grid Layouts
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Column counts adapt to viewport width for optimal content density.
              </p>
            </div>

            <div className="space-y-8">
              {/* Two Column Pattern */}
              <div>
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Two-Column Pattern
                </h3>
                <div
                  className="glass p-6 rounded-xl border mb-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div
                      className="p-6 rounded-lg border"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <Shield
                        className="w-6 h-6 mb-3"
                        style={{ color: "var(--text-secondary)" }}
                      />
                      <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                        Feature One
                      </h4>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Content description
                      </p>
                    </div>
                    <div
                      className="p-6 rounded-lg border"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <Cloud
                        className="w-6 h-6 mb-3"
                        style={{ color: "var(--text-secondary)" }}
                      />
                      <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                        Feature Two
                      </h4>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Content description
                      </p>
                    </div>
                  </div>
                </div>
                <code
                  className="block p-3 rounded text-xs font-mono"
                  style={{
                    background: "var(--code-background)",
                    color: "var(--code-text)",
                  }}
                >
                  className="grid sm:grid-cols-2 gap-4 sm:gap-6"
                </code>
              </div>

              {/* Three Column Pattern */}
              <div>
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Three-Column Pattern
                </h3>
                <div
                  className="glass p-6 rounded-xl border mb-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="p-6 rounded-lg border"
                        style={{
                          background: "var(--background-elevated)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <Shield
                          className="w-6 h-6 mb-3"
                          style={{ color: "var(--text-secondary)" }}
                        />
                        <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                          Service {i}
                        </h4>
                        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                          Description
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <code
                  className="block p-3 rounded text-xs font-mono"
                  style={{
                    background: "var(--code-background)",
                    color: "var(--code-text)",
                  }}
                >
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                </code>
              </div>

              {/* Four Column Pattern */}
              <div>
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Four-Column Pattern
                </h3>
                <div
                  className="glass p-6 rounded-xl border mb-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg border"
                        style={{
                          background: "var(--background-elevated)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <Shield
                          className="w-5 h-5 mb-2"
                          style={{ color: "var(--text-secondary)" }}
                        />
                        <p className="text-sm" style={{ color: "var(--foreground)" }}>
                          Item {i}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <code
                  className="block p-3 rounded text-xs font-mono"
                  style={{
                    background: "var(--code-background)",
                    color: "var(--code-text)",
                  }}
                >
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                </code>
              </div>
            </div>
          </section>

          {/* Section 4: Touch Targets */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                4. Touch Target Accessibility
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                All interactive elements meet WCAG 2.1 minimum touch target size of 44x44px.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Compliant Examples */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✓ Compliant Touch Targets</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <button
                      className="px-6 py-3 rounded-lg w-full sm:w-auto"
                      style={{
                        background: "var(--primary-azure)",
                        color: "var(--primary-foreground)",
                        minHeight: "44px",
                      }}
                    >
                      Primary Button
                    </button>
                    <p className="text-xs mt-2" style={{ color: "var(--text-tertiary)" }}>
                      py-3 = 48px height (✓ &gt;44px)
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--foreground)",
                        minHeight: "44px",
                      }}
                    >
                      <span>Link Button</span>
                    </a>
                    <p className="text-xs mt-2" style={{ color: "var(--text-tertiary)" }}>
                      py-3 + px-4 = 48px height (✓ &gt;44px)
                    </p>
                  </div>
                  <div>
                    <button
                      className="w-12 h-12 rounded-lg flex items-center justify-center border"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <Shield className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
                    </button>
                    <p className="text-xs mt-2" style={{ color: "var(--text-tertiary)" }}>
                      w-12 h-12 = 48x48px (✓ &gt;44px)
                    </p>
                  </div>
                </div>
              </div>

              {/* Non-Compliant Examples */}
              <div
                className="glass p-6 rounded-xl border opacity-60"
                style={{ borderColor: "var(--destructive)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✕ Too Small (Avoid)</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <button
                      className="px-3 py-1 rounded text-sm"
                      style={{
                        background: "var(--primary-azure)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      Small Button
                    </button>
                    <p className="text-xs mt-2" style={{ color: "var(--destructive)" }}>
                      py-1 = ~32px height (✕ &lt;44px)
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block text-sm"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      Bare text link
                    </a>
                    <p className="text-xs mt-2" style={{ color: "var(--destructive)" }}>
                      No padding = ~20px height (✕ &lt;44px)
                    </p>
                  </div>
                  <div>
                    <button
                      className="w-8 h-8 rounded flex items-center justify-center"
                      style={{ background: "var(--background-elevated)" }}
                    >
                      <Shield className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                    </button>
                    <p className="text-xs mt-2" style={{ color: "var(--destructive)" }}>
                      w-8 h-8 = 32x32px (✕ &lt;44px)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-6 p-6 rounded-lg border-l-4"
              style={{
                background: "var(--background-elevated)",
                borderLeftColor: "var(--accent-teal)",
                borderTopColor: "var(--border)",
                borderRightColor: "var(--border)",
                borderBottomColor: "var(--border)",
              }}
            >
              <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                Touch Target Guidelines
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>
                    Buttons: Use py-3 (minimum 48px height) for primary and secondary buttons
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Icon buttons: Use w-12 h-12 (48x48px minimum) for touch interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>
                    Navigation links: Add py-2 sm:py-3 padding on mobile for adequate tap area
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Spacing between touch targets: Minimum 8px (space-x-2, gap-2)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Typography Scaling */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                5. Responsive Typography
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Text sizes can scale down on mobile for better readability in constrained viewports.
              </p>
            </div>

            <div
              className="glass p-6 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-2" style={{ color: "var(--foreground)" }}>
                    Large Headline Example
                  </h1>
                  <code
                    className="block p-3 rounded text-xs font-mono"
                    style={{
                      background: "var(--code-background)",
                      color: "var(--code-text)",
                    }}
                  >
                    className="text-3xl sm:text-4xl lg:text-5xl"
                  </code>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl mb-2" style={{ color: "var(--foreground)" }}>
                    Section Heading Example
                  </h2>
                  <code
                    className="block p-3 rounded text-xs font-mono"
                    style={{
                      background: "var(--code-background)",
                      color: "var(--code-text)",
                    }}
                  >
                    className="text-2xl sm:text-3xl"
                  </code>
                </div>

                <div>
                  <p className="text-base sm:text-lg" style={{ color: "var(--text-secondary)" }}>
                    Body text can optionally scale up on larger screens for better readability in
                    hero sections or introductory content.
                  </p>
                  <code
                    className="block p-3 rounded text-xs font-mono mt-2"
                    style={{
                      background: "var(--code-background)",
                      color: "var(--code-text)",
                    }}
                  >
                    className="text-base sm:text-lg"
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Validation Checklist */}
          <section className="mt-16 pt-12 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="mb-6">
              <h2 style={{ color: "var(--foreground)" }}>Responsive Design Validation</h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Use this checklist to validate responsive implementation across all components.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mobile Validation */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Mobile (320-639px)
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>No horizontal scrolling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Touch targets ≥44px</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Single column layouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Stacked navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>px-6 container padding</span>
                  </li>
                </ul>
              </div>

              {/* Tablet Validation */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Tablet (640-1023px)
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>2-column grids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Increased spacing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Horizontal nav starts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Larger typography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>sm:px-8 container padding</span>
                  </li>
                </ul>
              </div>

              {/* Desktop Validation */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Desktop (1024px+)
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>3-4 column grids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Maximum spacing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Full navigation visible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Optimal line lengths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>lg:px-12 container padding</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final Validation Section */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                6. Final Design System Validation
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Complete checklist for design system compliance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Color Token Validation */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  ✓ Color Token Compliance
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>No ad-hoc hex colors (#123456)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>All colors use var(--token-name)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>WCAG AA contrast ratios met</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Brand colors used appropriately</span>
                  </li>
                </ul>
              </div>

              {/* Spacing Validation */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  ✓ Spacing Consistency
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>4px-based spacing scale used</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Responsive spacing patterns applied</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Consistent vertical rhythm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Section spacing follows rules</span>
                  </li>
                </ul>
              </div>

              {/* Visual Hierarchy */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  ✓ Visual Hierarchy
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Clear primary/secondary elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Proper heading structure (H1-H4)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Consistent text color hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Visual weight balanced</span>
                  </li>
                </ul>
              </div>

              {/* Component Compliance */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  ✓ Component Usage
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Only approved components used</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>No one-off custom components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Consistent icon usage (Lucide)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span>Glass effects applied correctly</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
