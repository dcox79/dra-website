import { CheckCircle2, Shield, Cloud, ArrowDown } from "lucide-react";

export function VerticalRhythmGuide() {
  return (
    <div className="dark min-h-screen py-12" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
            Vertical Rhythm & Section Spacing
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
            Establishes consistent vertical spacing rules using the 4px-based spacing scale.
            Eliminates ad-hoc spacing decisions and creates predictable layout rhythm.
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1: Spacing Scale Reference */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                1. Spacing Scale Reference
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                All spacing values are based on the 4px grid system. Use only these tokens.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Visual Scale */}
                <div>
                  <h3 className="mb-6" style={{ color: "var(--foreground)" }}>
                    Visual Scale
                  </h3>
                  <div className="space-y-4">
                    {[
                      { token: "--space-1", px: "4px", rem: "0.25rem" },
                      { token: "--space-2", px: "8px", rem: "0.5rem" },
                      { token: "--space-3", px: "12px", rem: "0.75rem" },
                      { token: "--space-4", px: "16px", rem: "1rem" },
                      { token: "--space-6", px: "24px", rem: "1.5rem" },
                      { token: "--space-8", px: "32px", rem: "2rem" },
                      { token: "--space-12", px: "48px", rem: "3rem" },
                      { token: "--space-16", px: "64px", rem: "4rem" },
                      { token: "--space-20", px: "80px", rem: "5rem" },
                    ].map((item) => (
                      <div key={item.token} className="flex items-center gap-4">
                        <div
                          className="rounded"
                          style={{
                            width: item.rem,
                            height: "24px",
                            background: "var(--primary-azure)",
                          }}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-mono" style={{ color: "var(--foreground)" }}>
                            {item.token}
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                            {item.px} / {item.rem}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Usage Categories */}
                <div>
                  <h3 className="mb-6" style={{ color: "var(--foreground)" }}>
                    Usage Categories
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 text-sm" style={{ color: "var(--foreground)" }}>
                        Micro Spacing (4-12px)
                      </h4>
                      <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <li>• Icon to text gaps</li>
                        <li>• Badge padding</li>
                        <li>• Tight element grouping</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm" style={{ color: "var(--foreground)" }}>
                        Component Spacing (16-32px)
                      </h4>
                      <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <li>• Paragraph separation</li>
                        <li>• Card internal padding</li>
                        <li>• List item spacing</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm" style={{ color: "var(--foreground)" }}>
                        Section Spacing (48-80px)
                      </h4>
                      <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <li>• Major section separation</li>
                        <li>• Hero to content gaps</li>
                        <li>• Content to footer gaps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Major Section Spacing */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                2. Major Section Spacing
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Spacing between major page sections (Hero, Features, CTA, Footer, etc.)
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="max-w-4xl mx-auto">
                {/* Desktop Pattern */}
                <div className="mb-8">
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Desktop (1024px+)
                  </h3>
                  
                  {/* Hero Section */}
                  <div
                    className="p-8 rounded-lg border mb-2"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <p className="text-sm font-mono" style={{ color: "var(--text-tertiary)" }}>
                      &lt;section&gt; Hero Section
                    </p>
                    <h3 className="mt-2" style={{ color: "var(--foreground)" }}>
                      Page Title
                    </h3>
                    <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                      Hero description text
                    </p>
                  </div>

                  {/* Spacing Indicator */}
                  <div className="flex items-center justify-center py-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-0.5 rounded-full mb-2"
                        style={{
                          height: "64px",
                          background: "var(--primary-azure)",
                        }}
                      />
                      <div
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        py-16 (64px)
                      </div>
                      <p className="text-xs mt-2" style={{ color: "var(--text-tertiary)" }}>
                        --space-16
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className="p-8 rounded-lg border mb-2"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <p className="text-sm font-mono" style={{ color: "var(--text-tertiary)" }}>
                      &lt;section&gt; Features / Content Section
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="p-4 rounded border"
                          style={{ borderColor: "var(--border)" }}
                        >
                          <Shield
                            className="w-5 h-5 mb-2"
                            style={{ color: "var(--text-secondary)" }}
                          />
                          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                            Feature {i}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Spacing Indicator */}
                  <div className="flex items-center justify-center py-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-0.5 rounded-full mb-2"
                        style={{
                          height: "64px",
                          background: "var(--primary-azure)",
                        }}
                      />
                      <div
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        py-16 (64px)
                      </div>
                      <p className="text-xs mt-2" style={{ color: "var(--text-tertiary)" }}>
                        --space-16
                      </p>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div
                    className="p-8 rounded-lg border"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <p className="text-sm font-mono" style={{ color: "var(--text-tertiary)" }}>
                      &lt;section&gt; CTA / Footer Section
                    </p>
                    <div className="text-center mt-4">
                      <h4 style={{ color: "var(--foreground)" }}>Ready to start?</h4>
                      <button
                        className="mt-3 px-6 py-2 rounded-lg text-sm"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Pattern */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Mobile (320-768px)
                  </h3>
                  
                  <div className="max-w-sm mx-auto">
                    {/* Hero */}
                    <div
                      className="p-6 rounded-lg border mb-2"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <p className="text-xs font-mono" style={{ color: "var(--text-tertiary)" }}>
                        &lt;section&gt; Hero
                      </p>
                      <h4 className="mt-2" style={{ color: "var(--foreground)" }}>
                        Page Title
                      </h4>
                    </div>

                    {/* Spacing Indicator */}
                    <div className="flex items-center justify-center py-3">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-0.5 rounded-full mb-2"
                          style={{
                            height: "48px",
                            background: "var(--primary-cyan)",
                          }}
                        />
                        <div
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{
                            background: "var(--primary-cyan)",
                            color: "var(--primary-foreground)",
                          }}
                        >
                          py-12 (48px)
                        </div>
                        <p className="text-xs mt-2" style={{ color: "var(--text-tertiary)" }}>
                          --space-12
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="p-6 rounded-lg border mb-2"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <p className="text-xs font-mono" style={{ color: "var(--text-tertiary)" }}>
                        &lt;section&gt; Content
                      </p>
                    </div>

                    <div className="flex items-center justify-center py-3">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-0.5 rounded-full mb-2"
                          style={{
                            height: "48px",
                            background: "var(--primary-cyan)",
                          }}
                        />
                        <div
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{
                            background: "var(--primary-cyan)",
                            color: "var(--primary-foreground)",
                          }}
                        >
                          py-12 (48px)
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div
                      className="p-6 rounded-lg border"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <p className="text-xs font-mono" style={{ color: "var(--text-tertiary)" }}>
                        &lt;section&gt; CTA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules Summary */}
              <div
                className="mt-8 p-6 rounded-lg border-l-4"
                style={{
                  background: "var(--background-elevated)",
                  borderLeftColor: "var(--accent-teal)",
                  borderTopColor: "var(--border)",
                  borderRightColor: "var(--border)",
                  borderBottomColor: "var(--border)",
                }}
              >
                <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                  Major Section Spacing Rules
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      Desktop: py-16 (64px)
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Use <code className="font-mono">--space-16</code> or Tailwind <code className="font-mono">py-16</code> class
                    </p>
                  </div>
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      Mobile: py-12 (48px)
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Use <code className="font-mono">--space-12</code> or Tailwind <code className="font-mono">py-12 sm:py-16</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Component Spacing Inside Sections */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                3. Component Spacing Inside Sections
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Spacing between components within the same section (cards, lists, blocks).
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Card Grid Spacing */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Card Grid Spacing
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
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
                          Service description
                        </p>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 p-3 rounded text-xs font-mono text-center"
                    style={{
                      background: "var(--background-elevated)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    gap-6 (24px) • --space-6
                  </div>
                </div>

                {/* List Spacing */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    List Item Spacing
                  </h3>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: "var(--accent-teal)" }}
                        />
                        <span style={{ color: "var(--text-secondary)" }}>
                          List item {i} with some description text
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-4 p-3 rounded text-xs font-mono text-center"
                    style={{
                      background: "var(--background-elevated)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    space-y-3 (12px) • --space-3
                  </div>
                </div>

                {/* Paragraph Spacing */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Paragraph Spacing
                  </h3>
                  <div className="space-y-4">
                    <p style={{ color: "var(--text-secondary)" }}>
                      First paragraph of content describing Azure architecture patterns and
                      implementation strategies for regulated industries.
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Second paragraph continuing the discussion with additional technical details
                      and compliance considerations.
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Third paragraph concluding the section with actionable recommendations.
                    </p>
                  </div>
                  <div
                    className="mt-4 p-3 rounded text-xs font-mono text-center"
                    style={{
                      background: "var(--background-elevated)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    space-y-4 (16px) • --space-4
                  </div>
                </div>

                {/* Component Blocks */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Component Block Spacing
                  </h3>
                  <div className="space-y-6">
                    <div
                      className="p-6 rounded-lg border"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                        Block Component 1
                      </h4>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Component content
                      </p>
                    </div>
                    <div
                      className="p-6 rounded-lg border"
                      style={{
                        background: "var(--background-elevated)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                        Block Component 2
                      </h4>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Component content
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-4 p-3 rounded text-xs font-mono text-center"
                    style={{
                      background: "var(--background-elevated)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    space-y-6 (24px) • --space-6
                  </div>
                </div>
              </div>

              {/* Rules Summary */}
              <div
                className="mt-8 p-6 rounded-lg border-l-4"
                style={{
                  background: "var(--background-elevated)",
                  borderLeftColor: "var(--accent-teal)",
                  borderTopColor: "var(--border)",
                  borderRightColor: "var(--border)",
                  borderBottomColor: "var(--border)",
                }}
              >
                <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                  Component Spacing Rules
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      Card Grids: gap-6 (24px)
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Standard gap for card layouts and feature grids
                    </p>
                  </div>
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      Lists: space-y-3 (12px)
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Tight spacing for list items and menu items
                    </p>
                  </div>
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      Paragraphs: space-y-4 (16px)
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Standard paragraph separation
                    </p>
                  </div>
                  <div>
                    <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                      Blocks: space-y-6 (24px)
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Larger components and content blocks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Section Header to Body Spacing */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 className="mb-2" style={{ color: "var(--foreground)" }}>
                4. Section Header to Body Content Spacing
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Vertical rhythm between section headings and their content.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="max-w-4xl mx-auto space-y-8">
                {/* H2 to Content */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    H2 (Section Heading) to Content
                  </h3>
                  <div
                    className="p-6 rounded-lg border"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <h2 style={{ color: "var(--foreground)" }}>Section Heading</h2>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-0.5 rounded-full mb-2"
                          style={{
                            height: "32px",
                            background: "var(--primary-azure)",
                          }}
                        />
                        <div
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{
                            background: "var(--primary-azure)",
                            color: "var(--primary-foreground)",
                          }}
                        >
                          mb-8 (32px)
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="p-4 rounded border"
                          style={{ borderColor: "var(--border)" }}
                        >
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            Content {i}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* H3 to Content */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    H3 (Subsection Heading) to Content
                  </h3>
                  <div
                    className="p-6 rounded-lg border"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <h3 style={{ color: "var(--foreground)" }}>Subsection Heading</h3>
                    
                    <div className="flex items-center justify-center py-3">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-0.5 rounded-full mb-2"
                          style={{
                            height: "24px",
                            background: "var(--primary-cyan)",
                          }}
                        />
                        <div
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{
                            background: "var(--primary-cyan)",
                            color: "var(--primary-foreground)",
                          }}
                        >
                          mb-6 (24px)
                        </div>
                      </div>
                    </div>

                    <p style={{ color: "var(--text-secondary)" }}>
                      Body content begins here with proper spacing from the heading above.
                      Additional paragraphs follow with standard paragraph spacing.
                    </p>
                  </div>
                </div>

                {/* H4 to Content */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    H4 (Component Heading) to Content
                  </h3>
                  <div
                    className="p-6 rounded-lg border"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <h4 style={{ color: "var(--foreground)" }}>Component Heading</h4>
                    
                    <div className="flex items-center justify-center py-2">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-0.5 rounded-full mb-2"
                          style={{
                            height: "16px",
                            background: "var(--accent-teal)",
                          }}
                        />
                        <div
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{
                            background: "var(--accent-teal)",
                            color: "var(--primary-foreground)",
                          }}
                        >
                          mb-4 (16px)
                        </div>
                      </div>
                    </div>

                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Smaller content like card descriptions or component labels.
                    </p>
                  </div>
                </div>

                {/* Header with Description */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Heading + Description Pattern
                  </h3>
                  <div
                    className="p-6 rounded-lg border"
                    style={{
                      background: "var(--background-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <h2 style={{ color: "var(--foreground)" }}>Section Heading</h2>
                    
                    <div className="flex items-center justify-center py-2">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-0.5 rounded-full mb-2"
                          style={{
                            height: "16px",
                            background: "var(--primary-azure)",
                          }}
                        />
                        <div
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{
                            background: "var(--primary-azure)",
                            color: "var(--primary-foreground)",
                          }}
                        >
                          mb-4 (16px)
                        </div>
                      </div>
                    </div>

                    <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                      Optional description or subtitle text
                    </p>

                    <div className="flex items-center justify-center py-3">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-0.5 rounded-full mb-2"
                          style={{
                            height: "24px",
                            background: "var(--primary-azure)",
                          }}
                        />
                        <div
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{
                            background: "var(--primary-azure)",
                            color: "var(--primary-foreground)",
                          }}
                        >
                          mb-6 (24px)
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="p-4 rounded border"
                          style={{ borderColor: "var(--border)" }}
                        >
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            Content {i}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules Summary */}
              <div
                className="mt-8 p-6 rounded-lg border-l-4"
                style={{
                  background: "var(--background-elevated)",
                  borderLeftColor: "var(--accent-teal)",
                  borderTopColor: "var(--border)",
                  borderRightColor: "var(--border)",
                  borderBottomColor: "var(--border)",
                }}
              >
                <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                  Heading to Content Spacing Rules
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                        H2 → Content: mb-8 (32px)
                      </p>
                      <p style={{ color: "var(--text-secondary)" }}>
                        Major section headings
                      </p>
                    </div>
                    <div>
                      <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                        H3 → Content: mb-6 (24px)
                      </p>
                      <p style={{ color: "var(--text-secondary)" }}>
                        Subsection headings
                      </p>
                    </div>
                    <div>
                      <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                        H4 → Content: mb-4 (16px)
                      </p>
                      <p style={{ color: "var(--text-secondary)" }}>
                        Component headings
                      </p>
                    </div>
                    <div>
                      <p className="font-mono mb-1" style={{ color: "var(--foreground)" }}>
                        Heading → Description: mb-4 (16px)
                      </p>
                      <p style={{ color: "var(--text-secondary)" }}>
                        When subtitle text follows heading
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Quick Reference Card */}
          <section className="mt-16 pt-12 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="mb-6">
              <h2 style={{ color: "var(--foreground)" }}>Quick Reference</h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Common spacing patterns for copy-paste implementation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Major Sections */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Major Sections
                </h3>
                <div className="space-y-3 text-sm font-mono">
                  <div>
                    <p style={{ color: "var(--foreground)" }}>Desktop</p>
                    <code
                      className="block mt-1 p-2 rounded text-xs"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                      }}
                    >
                      py-16 sm:py-20
                    </code>
                  </div>
                  <div>
                    <p style={{ color: "var(--foreground)" }}>Mobile</p>
                    <code
                      className="block mt-1 p-2 rounded text-xs"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                      }}
                    >
                      py-12 sm:py-16
                    </code>
                  </div>
                </div>
              </div>

              {/* Components */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Component Spacing
                </h3>
                <div className="space-y-3 text-sm font-mono">
                  <div>
                    <p style={{ color: "var(--foreground)" }}>Card Grids</p>
                    <code
                      className="block mt-1 p-2 rounded text-xs"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                      }}
                    >
                      gap-6
                    </code>
                  </div>
                  <div>
                    <p style={{ color: "var(--foreground)" }}>Lists</p>
                    <code
                      className="block mt-1 p-2 rounded text-xs"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                      }}
                    >
                      space-y-3
                    </code>
                  </div>
                  <div>
                    <p style={{ color: "var(--foreground)" }}>Blocks</p>
                    <code
                      className="block mt-1 p-2 rounded text-xs"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                      }}
                    >
                      space-y-6
                    </code>
                  </div>
                </div>
              </div>

              {/* Headings */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Heading Spacing
                </h3>
                <div className="space-y-3 text-sm font-mono">
                  <div>
                    <p style={{ color: "var(--foreground)" }}>H2 → Content</p>
                    <code
                      className="block mt-1 p-2 rounded text-xs"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                      }}
                    >
                      mb-8
                    </code>
                  </div>
                  <div>
                    <p style={{ color: "var(--foreground)" }}>H3 → Content</p>
                    <code
                      className="block mt-1 p-2 rounded text-xs"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                      }}
                    >
                      mb-6
                    </code>
                  </div>
                  <div>
                    <p style={{ color: "var(--foreground)" }}>H4 → Content</p>
                    <code
                      className="block mt-1 p-2 rounded text-xs"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                      }}
                    >
                      mb-4
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
