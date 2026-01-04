import {
  Shield,
  Cloud,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  Clock,
  Lock,
  Building2,
  Mail,
  Linkedin,
  Github,
  ChevronRight,
  Menu,
  X,
  Search,
  Filter,
} from "lucide-react";

export function IconGuidelines() {
  return (
    <div className="dark min-h-screen py-12" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
            Icon System Guidelines
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
            Defines the icon style, sizes, colors, and usage rules for Default Route Advisory.
            Icons are functional affordances, not decoration.
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1: Icon Style Definition */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                1. Icon Style Definition
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                All icons must follow consistent stroke-based styling from the Lucide icon
                library.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Approved Style */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <h3 style={{ color: "var(--foreground)" }}>Approved: Stroke-Based</h3>
                  </div>
                  <div
                    className="p-6 rounded-lg border mb-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-6">
                      <Shield className="w-12 h-12" style={{ color: "var(--primary-azure)" }} />
                      <Cloud className="w-12 h-12" style={{ color: "var(--primary-cyan)" }} />
                      <Lock className="w-12 h-12" style={{ color: "var(--accent-teal)" }} />
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--accent-teal)" }}>•</span>
                      <span>Consistent 2px stroke weight across all icons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--accent-teal)" }}>•</span>
                      <span>Rounded stroke caps and joins for professional appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--accent-teal)" }}>•</span>
                      <span>Source: Lucide icon library only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--accent-teal)" }}>•</span>
                      <span>Optical alignment maintained at all sizes</span>
                    </li>
                  </ul>
                </div>

                {/* Prohibited Styles */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                    <h3 style={{ color: "var(--foreground)" }}>Prohibited: Filled Icons</h3>
                  </div>
                  <div
                    className="p-6 rounded-lg border mb-4 opacity-50"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--destructive)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-6">
                      <div
                        className="w-12 h-12 rounded-lg"
                        style={{ background: "var(--primary-azure)" }}
                      />
                      <div
                        className="w-12 h-12 rounded-full"
                        style={{ background: "var(--primary-cyan)" }}
                      />
                      <div
                        className="w-12 h-12 rounded"
                        style={{ background: "var(--accent-teal)" }}
                      />
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--destructive)" }}>✕</span>
                      <span>No filled/solid icon variants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--destructive)" }}>✕</span>
                      <span>No custom illustrated icons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--destructive)" }}>✕</span>
                      <span>No mixing stroke and filled styles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--destructive)" }}>✕</span>
                      <span>No icon libraries other than Lucide</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Allowed Sizes */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                2. Allowed Sizes
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Icon sizes follow the 4px-based spacing scale. Only use approved sizes.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* 16px - Small */}
                <div>
                  <div
                    className="flex items-center justify-center p-8 rounded-lg border mb-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <Shield className="w-4 h-4" style={{ color: "var(--primary-azure)" }} />
                  </div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    16px (1rem)
                  </h4>
                  <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                    Tailwind: <code className="font-mono text-xs">w-4 h-4</code>
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    Use in: Inline text, small badges, dense UI elements
                  </p>
                </div>

                {/* 20px - Base */}
                <div>
                  <div
                    className="flex items-center justify-center p-8 rounded-lg border mb-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <Shield className="w-5 h-5" style={{ color: "var(--primary-azure)" }} />
                  </div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    20px (1.25rem)
                  </h4>
                  <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                    Tailwind: <code className="font-mono text-xs">w-5 h-5</code>
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    Use in: Default size for most UI contexts, list items, buttons
                  </p>
                </div>

                {/* 24px - Medium */}
                <div>
                  <div
                    className="flex items-center justify-center p-8 rounded-lg border mb-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <Shield className="w-6 h-6" style={{ color: "var(--primary-azure)" }} />
                  </div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    24px (1.5rem)
                  </h4>
                  <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                    Tailwind: <code className="font-mono text-xs">w-6 h-6</code>
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    Use in: Card headers, feature highlights, section icons
                  </p>
                </div>

                {/* 32px - Large */}
                <div>
                  <div
                    className="flex items-center justify-center p-8 rounded-lg border mb-4"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <Shield className="w-8 h-8" style={{ color: "var(--primary-azure)" }} />
                  </div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    32px (2rem)
                  </h4>
                  <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                    Tailwind: <code className="font-mono text-xs">w-8 h-8</code>
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    Use in: Hero sections, empty states, large status indicators
                  </p>
                </div>
              </div>

              <div
                className="mt-8 p-4 rounded-lg border-l-4"
                style={{
                  background: "var(--background-elevated)",
                  borderLeftColor: "var(--warning)",
                  borderTopColor: "var(--border)",
                  borderRightColor: "var(--border)",
                  borderBottomColor: "var(--border)",
                }}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "var(--warning)" }}
                  />
                  <div>
                    <p className="text-sm mb-1" style={{ color: "var(--foreground)" }}>
                      <strong>Prohibited Sizes</strong>
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Do not use 12px, 14px, 18px, 28px, 36px, 40px, 48px, or custom sizes. Only
                      16px, 20px, 24px, and 32px are allowed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Color Usage */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                3. Color Token Usage
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Icons must use semantic color tokens. No custom hex values.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Allowed Colors */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Allowed Color Tokens
                  </h3>
                  <div className="space-y-3">
                    <div
                      className="p-4 rounded-lg flex items-center justify-between"
                      style={{ background: "var(--background-elevated)" }}
                    >
                      <div className="flex items-center gap-3">
                        <FileText
                          className="w-5 h-5"
                          style={{ color: "var(--text-secondary)" }}
                        />
                        <div>
                          <p className="text-sm" style={{ color: "var(--foreground)" }}>
                            --text-secondary
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                            Default for most icons
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-lg flex items-center justify-between"
                      style={{ background: "var(--background-elevated)" }}
                    >
                      <div className="flex items-center gap-3">
                        <FileText
                          className="w-5 h-5"
                          style={{ color: "var(--text-tertiary)" }}
                        />
                        <div>
                          <p className="text-sm" style={{ color: "var(--foreground)" }}>
                            --text-tertiary
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                            Low-priority icons
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-lg flex items-center justify-between"
                      style={{ background: "var(--background-elevated)" }}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2
                          className="w-5 h-5"
                          style={{ color: "var(--accent-teal)" }}
                        />
                        <div>
                          <p className="text-sm" style={{ color: "var(--foreground)" }}>
                            --accent-teal
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                            Success states, checkmarks
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-lg flex items-center justify-between"
                      style={{ background: "var(--background-elevated)" }}
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle
                          className="w-5 h-5"
                          style={{ color: "var(--warning)" }}
                        />
                        <div>
                          <p className="text-sm" style={{ color: "var(--foreground)" }}>
                            --warning
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                            Warning states
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-lg flex items-center justify-between"
                      style={{ background: "var(--background-elevated)" }}
                    >
                      <div className="flex items-center gap-3">
                        <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                        <div>
                          <p className="text-sm" style={{ color: "var(--foreground)" }}>
                            --destructive
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                            Error states, delete actions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prohibited Colors */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Prohibited Color Usage
                  </h3>
                  <div className="space-y-3">
                    <div
                      className="p-4 rounded-lg border opacity-50"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--destructive)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="w-5 h-5" style={{ color: "var(--primary-azure)" }} />
                        <p className="text-sm" style={{ color: "var(--foreground)" }}>
                          --primary-azure
                        </p>
                      </div>
                      <p className="text-xs" style={{ color: "var(--destructive)" }}>
                        ✕ No brand blue on general UI icons
                      </p>
                    </div>

                    <div
                      className="p-4 rounded-lg border opacity-50"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--destructive)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Cloud className="w-5 h-5" style={{ color: "var(--primary-cyan)" }} />
                        <p className="text-sm" style={{ color: "var(--foreground)" }}>
                          --primary-cyan
                        </p>
                      </div>
                      <p className="text-xs" style={{ color: "var(--destructive)" }}>
                        ✕ No brand cyan except in navigation/footer
                      </p>
                    </div>

                    <div
                      className="p-4 rounded-lg border opacity-50"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--destructive)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Lock className="w-5 h-5" style={{ color: "#ff6b6b" }} />
                        <p className="text-sm" style={{ color: "var(--foreground)" }}>
                          Custom Hex (#ff6b6b)
                        </p>
                      </div>
                      <p className="text-xs" style={{ color: "var(--destructive)" }}>
                        ✕ Never use custom hex colors
                      </p>
                    </div>

                    <div
                      className="p-4 rounded-lg border opacity-50"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--destructive)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5" style={{ color: "var(--foreground)" }} />
                        <p className="text-sm" style={{ color: "var(--foreground)" }}>
                          --foreground
                        </p>
                      </div>
                      <p className="text-xs" style={{ color: "var(--destructive)" }}>
                        ✕ Too high contrast for icons
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Usage Rules - Where Allowed */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                4. Where Icons Are Allowed
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Icons serve functional purposes. Use them to provide visual affordances and
                improve scannability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Allowed: Cards */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✓ Cards & Feature Blocks</h3>
                </div>
                <div
                  className="p-6 rounded-lg border mb-4"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--border)",
                  }}
                >
                  <Shield className="w-6 h-6 mb-3" style={{ color: "var(--text-secondary)" }} />
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Azure Landing Zones
                  </h4>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Foundation architecture for secure cloud deployment with governance controls.
                  </p>
                </div>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Icons provide visual category identification for service offerings or features.
                </p>
              </div>

              {/* Allowed: Lists */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✓ Lists & Checklists</h3>
                </div>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Implemented hub-spoke network topology
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Configured Azure Policy baselines
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Established centralized logging
                    </span>
                  </li>
                </ul>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Icons replace bullets to indicate completion status or item type.
                </p>
              </div>

              {/* Allowed: Navigation */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✓ Navigation & Buttons</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <button
                    className="w-full flex items-center justify-between p-3 rounded-lg border text-left"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <span className="text-sm" style={{ color: "var(--foreground)" }}>
                      View Case Study
                    </span>
                    <ArrowRight className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                  </button>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--primary-cyan)" }}
                  >
                    <span>Azure Documentation</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Icons indicate action direction or link type (internal vs external).
                </p>
              </div>

              {/* Allowed: Status & Metadata */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✓ Status & Metadata</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" style={{ color: "var(--text-tertiary)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>12 min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4" style={{ color: "var(--text-tertiary)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>Healthcare Industry</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Lock className="w-4 h-4" style={{ color: "var(--text-tertiary)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>
                      Confidential consultation
                    </span>
                  </div>
                </div>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Icons provide quick visual scanning for content metadata and attributes.
                </p>
              </div>

              {/* Allowed: Footer */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✓ Footer Social Links</h3>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <a
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
                  </a>
                  <a
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
                  </a>
                  <a
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
                  </a>
                </div>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Social icons without labels in monochrome secondary text color.
                </p>
              </div>

              {/* Allowed: Form States */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✓ Form Validation</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Form submitted successfully
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                    <span className="text-sm" style={{ color: "var(--destructive)" }}>
                      This field is required
                    </span>
                  </div>
                </div>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Icons communicate form state without relying solely on color.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Usage Rules - Where Prohibited */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                5. Where Icons Are NOT Allowed
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Icons must not be used decoratively or in contexts that reduce readability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Prohibited: Headlines */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--destructive)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✕ Headlines</h3>
                </div>
                <div
                  className="p-6 rounded-lg border opacity-50 mb-4"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--destructive)",
                  }}
                >
                  <h2 className="flex items-center gap-3" style={{ color: "var(--foreground)" }}>
                    <Shield className="w-6 h-6" style={{ color: "var(--primary-azure)" }} />
                    Azure Architecture Services
                  </h2>
                </div>
                <p className="text-xs" style={{ color: "var(--destructive)" }}>
                  Never place icons in or adjacent to H1, H2, or H3 elements. Headlines must
                  remain clean and readable.
                </p>
              </div>

              {/* Prohibited: Body Paragraphs */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--destructive)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✕ Long Paragraphs</h3>
                </div>
                <div
                  className="p-6 rounded-lg border opacity-50 mb-4"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--destructive)",
                  }}
                >
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Azure landing zones{" "}
                    <Shield className="w-4 h-4 inline" style={{ color: "var(--primary-azure)" }} />{" "}
                    represent a foundational architectural pattern{" "}
                    <Cloud className="w-4 h-4 inline" style={{ color: "var(--primary-cyan)" }} />{" "}
                    designed to accelerate cloud adoption.
                  </p>
                </div>
                <p className="text-xs" style={{ color: "var(--destructive)" }}>
                  Never inline icons within body text or long-form content. Interrupts reading
                  flow.
                </p>
              </div>

              {/* Prohibited: Decorative Use */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--destructive)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✕ Decorative Backgrounds</h3>
                </div>
                <div
                  className="p-6 rounded-lg border opacity-50 mb-4 relative overflow-hidden"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--destructive)",
                  }}
                >
                  <Shield
                    className="absolute -top-4 -right-4 w-24 h-24 opacity-10"
                    style={{ color: "var(--primary-azure)" }}
                  />
                  <Cloud
                    className="absolute -bottom-4 -left-4 w-24 h-24 opacity-10"
                    style={{ color: "var(--primary-cyan)" }}
                  />
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Contact Information
                  </h4>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Schedule a consultation today
                  </p>
                </div>
                <p className="text-xs" style={{ color: "var(--destructive)" }}>
                  Never use oversized icons as background decoration. No visual clutter.
                </p>
              </div>

              {/* Prohibited: Excessive Icons */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--destructive)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                  <h3 style={{ color: "var(--foreground)" }}>✕ Icon Overload</h3>
                </div>
                <div
                  className="p-6 rounded-lg border opacity-50 mb-4"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--destructive)",
                  }}
                >
                  <div className="flex items-center gap-2 flex-wrap text-sm">
                    <Shield className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>Secure</span>
                    <Lock className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>Compliant</span>
                    <Cloud className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>Cloud</span>
                    <CheckCircle2 className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>Verified</span>
                  </div>
                </div>
                <p className="text-xs" style={{ color: "var(--destructive)" }}>
                  Don't use multiple icons in close proximity. Creates visual noise and reduces
                  professional appearance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Do/Don't Examples */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                6. Do/Don't Quick Reference
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Side-by-side examples of correct and incorrect icon usage.
              </p>
            </div>

            <div className="space-y-6">
              {/* Example 1: Service Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="p-6 rounded-xl border-2"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--accent-teal)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                    <h4 style={{ color: "var(--foreground)" }}>DO</h4>
                  </div>
                  <div
                    className="p-6 rounded-lg border"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Lock className="w-6 h-6 mb-3" style={{ color: "var(--text-secondary)" }} />
                    <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                      Security & Compliance
                    </h4>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Azure Policy, Security Center, and compliance framework implementation.
                    </p>
                  </div>
                  <p className="text-xs mt-3" style={{ color: "var(--text-tertiary)" }}>
                    Single icon at top of card for category identification
                  </p>
                </div>

                <div
                  className="p-6 rounded-xl border-2 opacity-70"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--destructive)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                    <h4 style={{ color: "var(--foreground)" }}>DON'T</h4>
                  </div>
                  <div
                    className="p-6 rounded-lg border"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-6 h-6" style={{ color: "var(--primary-azure)" }} />
                      <Shield className="w-6 h-6" style={{ color: "var(--primary-cyan)" }} />
                      <CheckCircle2 className="w-6 h-6" style={{ color: "var(--accent-teal)" }} />
                    </div>
                    <h4 className="mb-2 flex items-center gap-2" style={{ color: "var(--foreground)" }}>
                      <Lock className="w-5 h-5" style={{ color: "var(--primary-azure)" }} />
                      Security & Compliance
                    </h4>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Azure Policy implementation.
                    </p>
                  </div>
                  <p className="text-xs mt-3" style={{ color: "var(--destructive)" }}>
                    Too many icons, brand colors on icons, icon in heading
                  </p>
                </div>
              </div>

              {/* Example 2: List Items */}
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="p-6 rounded-xl border-2"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--accent-teal)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5" style={{ color: "var(--accent-teal)" }} />
                    <h4 style={{ color: "var(--foreground)" }}>DO</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Hub-spoke network implemented
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Azure Policy baselines configured
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Monitoring infrastructure deployed
                      </span>
                    </li>
                  </ul>
                  <p className="text-xs mt-3" style={{ color: "var(--text-tertiary)" }}>
                    Consistent icon, size, and color for list type
                  </p>
                </div>

                <div
                  className="p-6 rounded-xl border-2 opacity-70"
                  style={{
                    background: "var(--background-elevated)",
                    borderColor: "var(--destructive)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                    <h4 style={{ color: "var(--foreground)" }}>DON'T</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-6 h-6 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Hub-spoke network implemented
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--primary-azure)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Azure Policy baselines configured
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cloud
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--primary-cyan)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Monitoring infrastructure deployed
                      </span>
                    </li>
                  </ul>
                  <p className="text-xs mt-3" style={{ color: "var(--destructive)" }}>
                    Mixed icon types, sizes, and brand colors
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mt-16 pt-12 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="mb-6">
              <h2 style={{ color: "var(--foreground)" }}>Icon System Summary</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Core Principles
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>• Stroke-based only (Lucide)</li>
                  <li>• Consistent 2px stroke weight</li>
                  <li>• Functional, not decorative</li>
                  <li>• Semantic color tokens</li>
                </ul>
              </div>

              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Technical Specs
                </h3>
                <ul className="space-y-2 text-sm font-mono" style={{ color: "var(--text-secondary)" }}>
                  <li>• 16px (w-4 h-4)</li>
                  <li>• 20px (w-5 h-5)</li>
                  <li>• 24px (w-6 h-6)</li>
                  <li>• 32px (w-8 h-8)</li>
                </ul>
              </div>

              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Usage Context
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>✓ Cards, lists, navigation</li>
                  <li>✓ Status, metadata, forms</li>
                  <li>✕ Headlines, paragraphs</li>
                  <li>✕ Decorative backgrounds</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
