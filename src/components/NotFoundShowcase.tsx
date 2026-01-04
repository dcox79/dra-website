import { ArrowRight } from "lucide-react";

export function NotFoundShowcase() {
  return (
    <div className="dark min-h-screen py-12" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
            404 Page Not Found Template
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
            Professional, calm error page that preserves brand credibility and provides clear
            recovery paths. No humor, no gimmicks—just helpful guidance.
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1: Design Principles */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                1. Design Principles
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Guidelines for maintaining professionalism in error states.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  ✓ Do
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Use clear, professional language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Provide actionable next steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Maintain brand consistency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Keep layout minimal and focused</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Show the error code (404) subtly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Offer link to contact if needed</span>
                  </li>
                </ul>
              </div>

              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  ✕ Don't
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--destructive)" }}>•</span>
                    <span>Use humor or casual language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--destructive)" }}>•</span>
                    <span>Include playful illustrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--destructive)" }}>•</span>
                    <span>Blame the user ("You broke it")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--destructive)" }}>•</span>
                    <span>Use bright colors or animations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--destructive)" }}>•</span>
                    <span>Create visual clutter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--destructive)" }}>•</span>
                    <span>Leave users without options</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Desktop Variant */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                2. Desktop Layout (1024px+)
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Full implementation of 404 page for desktop viewports.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Desktop Preview */}
              <div className="min-h-[600px] flex items-center justify-center">
                <div className="max-w-2xl w-full">
                  {/* Error Code */}
                  <div className="mb-8 text-center">
                    <p
                      className="text-9xl font-mono tracking-tight opacity-20"
                      style={{ color: "var(--foreground)" }}
                    >
                      404
                    </p>
                  </div>

                  {/* Glass Panel */}
                  <div
                    className="glass p-12 rounded-xl border text-center"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {/* Headline */}
                    <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
                      Page Not Found
                    </h1>

                    {/* Explanatory Text */}
                    <p
                      className="text-lg mb-8 max-w-xl mx-auto"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      The page you're looking for doesn't exist or has been moved. Please check the
                      URL or return to a known location.
                    </p>

                    {/* Navigation Options */}
                    <div className="flex items-center justify-center gap-4">
                      <button
                        className="px-6 py-3 rounded-lg transition-all flex items-center gap-2"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        <span>Return to Home</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        className="px-6 py-3 rounded-lg transition-all border flex items-center gap-2"
                        style={{
                          background: "var(--background-surface)",
                          borderColor: "var(--border)",
                          color: "var(--foreground)",
                        }}
                      >
                        <span>View Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Additional Help Text */}
                  <div className="mt-8 text-center">
                    <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                      If you believe this is an error, please{" "}
                      <a
                        href="/contact"
                        className="transition-colors"
                        style={{ color: "var(--primary-cyan)" }}
                      >
                        contact our team
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Mobile Variant */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                3. Mobile Layout (320-768px)
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Optimized layout for narrow viewports with stacked navigation.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Mobile Preview */}
              <div className="flex items-center justify-center">
                <div className="max-w-sm w-full">
                  <div className="min-h-[600px] flex items-center justify-center px-6">
                    <div className="w-full">
                      {/* Error Code */}
                      <div className="mb-8 text-center">
                        <p
                          className="text-8xl font-mono tracking-tight opacity-20"
                          style={{ color: "var(--foreground)" }}
                        >
                          404
                        </p>
                      </div>

                      {/* Glass Panel */}
                      <div
                        className="glass p-8 rounded-xl border text-center"
                        style={{ borderColor: "var(--border)" }}
                      >
                        {/* Headline */}
                        <h1 className="mb-4 text-3xl" style={{ color: "var(--foreground)" }}>
                          Page Not Found
                        </h1>

                        {/* Explanatory Text */}
                        <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
                          The page you're looking for doesn't exist or has been moved. Please check
                          the URL or return to a known location.
                        </p>

                        {/* Navigation Options - Stacked */}
                        <div className="flex flex-col gap-3">
                          <button
                            className="w-full px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                            style={{
                              background: "var(--primary-azure)",
                              color: "var(--primary-foreground)",
                            }}
                          >
                            <span>Return to Home</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button
                            className="w-full px-6 py-3 rounded-lg transition-all border flex items-center justify-center gap-2"
                            style={{
                              background: "var(--background-surface)",
                              borderColor: "var(--border)",
                              color: "var(--foreground)",
                            }}
                          >
                            <span>View Services</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Additional Help Text */}
                      <div className="mt-8 text-center">
                        <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                          If you believe this is an error, please{" "}
                          <a
                            href="/contact"
                            className="transition-colors"
                            style={{ color: "var(--primary-cyan)" }}
                          >
                            contact our team
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Component Breakdown */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                4. Component Breakdown
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Detailed specifications for each element of the 404 page.
              </p>
            </div>

            <div className="space-y-6">
              {/* Error Code */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="mb-2" style={{ color: "var(--foreground)" }}>
                      Error Code Display
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Large, low-opacity number providing technical context without overwhelming
                      the page.
                    </p>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p
                    className="text-9xl font-mono tracking-tight opacity-20"
                    style={{ color: "var(--foreground)" }}
                  >
                    404
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg text-xs font-mono"
                  style={{
                    background: "var(--background-elevated)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <p className="mb-2">
                    <strong>Desktop:</strong> text-9xl (8rem / 128px)
                  </p>
                  <p className="mb-2">
                    <strong>Mobile:</strong> text-8xl (6rem / 96px)
                  </p>
                  <p className="mb-2">
                    <strong>Font:</strong> font-mono (monospace)
                  </p>
                  <p>
                    <strong>Opacity:</strong> opacity-20 (20%)
                  </p>
                </div>
              </div>

              {/* Headline */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Headline
                </h3>
                <div className="text-center mb-4">
                  <h1 style={{ color: "var(--foreground)" }}>Page Not Found</h1>
                </div>
                <div
                  className="p-4 rounded-lg text-xs"
                  style={{
                    background: "var(--background-elevated)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <p className="mb-2">
                    <strong>Style:</strong> H1 element, system default typography
                  </p>
                  <p className="mb-2">
                    <strong>Tone:</strong> Calm, professional, factual
                  </p>
                  <p className="mb-2">
                    <strong>Color:</strong> var(--foreground)
                  </p>
                  <p>
                    <strong>Spacing:</strong> mb-4 (16px) to description
                  </p>
                </div>
              </div>

              {/* Explanatory Text */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Explanatory Text
                </h3>
                <div className="text-center mb-4">
                  <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                    The page you're looking for doesn't exist or has been moved. Please check the
                    URL or return to a known location.
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg text-xs"
                  style={{
                    background: "var(--background-elevated)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <p className="mb-2">
                    <strong>Font size:</strong> text-lg (1.125rem / 18px)
                  </p>
                  <p className="mb-2">
                    <strong>Max width:</strong> max-w-xl (36rem / 576px)
                  </p>
                  <p className="mb-2">
                    <strong>Color:</strong> var(--text-secondary)
                  </p>
                  <p className="mb-2">
                    <strong>Tone:</strong> Neutral, helpful, non-accusatory
                  </p>
                  <p>
                    <strong>Spacing:</strong> mb-8 (32px) to CTA buttons
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Call-to-Action Buttons
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                  <button
                    className="w-full sm:w-auto px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                    style={{
                      background: "var(--primary-azure)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    <span>Return to Home</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    className="w-full sm:w-auto px-6 py-3 rounded-lg transition-all border flex items-center gap-2"
                    style={{
                      background: "var(--background-surface)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div
                  className="p-4 rounded-lg text-xs"
                  style={{
                    background: "var(--background-elevated)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <p className="mb-2">
                    <strong>Primary CTA:</strong> "Return to Home" - Azure brand color, most
                    prominent
                  </p>
                  <p className="mb-2">
                    <strong>Secondary CTA:</strong> "View Services" - Ghost button style
                  </p>
                  <p className="mb-2">
                    <strong>Icons:</strong> ArrowRight (w-4 h-4) indicating forward action
                  </p>
                  <p className="mb-2">
                    <strong>Desktop:</strong> Horizontal layout (flex-row)
                  </p>
                  <p>
                    <strong>Mobile:</strong> Stacked layout (flex-col), full width
                  </p>
                </div>
              </div>

              {/* Help Text */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Additional Help Text
                </h3>
                <div className="text-center mb-4">
                  <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                    If you believe this is an error, please{" "}
                    <a
                      href="/contact"
                      className="transition-colors"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      contact our team
                    </a>
                    .
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg text-xs"
                  style={{
                    background: "var(--background-elevated)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <p className="mb-2">
                    <strong>Font size:</strong> text-sm (0.875rem / 14px)
                  </p>
                  <p className="mb-2">
                    <strong>Color:</strong> var(--text-tertiary) - de-emphasized
                  </p>
                  <p className="mb-2">
                    <strong>Link color:</strong> var(--primary-cyan)
                  </p>
                  <p>
                    <strong>Spacing:</strong> mt-8 (32px) from CTA buttons
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Implementation Notes */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                5. Implementation Notes
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Technical requirements and accessibility considerations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Accessibility */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Accessibility
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Page title should be "404 - Page Not Found | Default Route Advisory"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>All interactive elements must be keyboard accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Links must have clear focus states</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Color contrast meets WCAG AA standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Semantic HTML with proper heading hierarchy</span>
                  </li>
                </ul>
              </div>

              {/* Technical */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Technical Requirements
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Server must return HTTP 404 status code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Page should be excluded from search engine indexing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Consider logging 404s for analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>Responsive breakpoints at 640px and 1024px</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-teal)" }}>•</span>
                    <span>No external dependencies beyond existing design system</span>
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
