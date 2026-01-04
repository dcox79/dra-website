import { useState } from "react";
import { Header } from "./library/Header";
import { Shield, Check, ArrowDown } from "lucide-react";

export function HeaderShowcase() {
  const [currentPath, setCurrentPath] = useState("#home");

  return (
    <div className="dark min-h-screen" style={{ background: "var(--background)" }}>
      {/* Live Header - Scrollable */}
      <Header
        brandName="Default Route Advisory"
        navLinks={[
          { label: "Home", href: "#home" },
          { label: "Services", href: "#services" },
          { label: "Resources", href: "#resources" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Schedule Consultation"
        ctaHref="#contact"
        currentPath={currentPath}
      />

      {/* Page Content - for scroll demonstration */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "var(--primary-azure)",
                color: "var(--primary-foreground)",
              }}
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Header Component Showcase</span>
            </div>
            <h1 className="mb-6" style={{ color: "var(--foreground)" }}>
              Global Header Navigation
            </h1>
            <p
              className="text-lg max-w-3xl mx-auto mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              A complete header component with all required states: default, scrolled/sticky,
              mobile open/closed, and full interaction states (hover, active, focus).
            </p>

            {/* Scroll Indicator */}
            <div className="flex items-center justify-center gap-2 animate-bounce">
              <ArrowDown className="w-5 h-5" style={{ color: "var(--text-tertiary)" }} />
              <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                Scroll to see sticky header state
              </p>
            </div>
          </div>
        </section>

        {/* State Documentation */}
        <section className="mb-20" id="states">
          <h2 className="mb-8" style={{ color: "var(--foreground)" }}>
            Header States
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* State 1: Default (Top of Page) */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    1
                  </span>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Default (Top of Page)
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    Full-height header (72px) with glass effect and no border.
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Dark glass background with subtle backdrop blur
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Logo with brand icon on the left
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Centered navigation links (desktop)
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Primary CTA button on the right
                  </span>
                </li>
              </ul>
            </div>

            {/* State 2: Scrolled / Sticky */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    2
                  </span>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Scrolled / Sticky State
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    Reduced height (60px) with stronger glass effect and visible border.
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Reduced height (72px → 60px) via smooth transition
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Stronger glass-strong effect with increased blur
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Bottom border becomes visible for separation
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Subtle shadow for depth (shadow-lg)
                  </span>
                </li>
              </ul>
            </div>

            {/* State 3: Mobile – Closed */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    3
                  </span>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Mobile – Closed
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    Compact mobile header with hamburger menu icon.
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Logo visible on the left
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Hamburger menu icon on the right
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Navigation links and CTA hidden (&lt; 768px)
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Same background styling as desktop
                  </span>
                </li>
              </ul>
            </div>

            {/* State 4: Mobile – Open */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    4
                  </span>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Mobile – Open
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    Full-screen mobile navigation panel with backdrop overlay.
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Full-height overlay panel below header
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Vertical navigation links with active indicators
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Full-width CTA button at top
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    X icon for close affordance
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Backdrop overlay with blur effect
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Body scroll locked when open
                  </span>
                </li>
              </ul>
            </div>

            {/* State 5: Interaction States */}
            <div
              className="glass p-8 rounded-xl border lg:col-span-2"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    5
                  </span>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Interaction States
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    Comprehensive hover, active, and focus states for all interactive elements.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span style={{ color: "var(--text-secondary)" }}>
                      <strong>Hover (Links):</strong> Color changes from secondary to foreground
                      (300ms transition)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span style={{ color: "var(--text-secondary)" }}>
                      <strong>Active (Current Page):</strong> Foreground color with azure
                      underline indicator
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span style={{ color: "var(--text-secondary)" }}>
                      <strong>Hover (CTA):</strong> -2px translateY with subtle glow shadow
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span style={{ color: "var(--text-secondary)" }}>
                      <strong>Focus (Keyboard):</strong> Visible azure ring (2px) with offset for
                      all focusable elements
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span style={{ color: "var(--text-secondary)" }}>
                      <strong>Mobile (Links):</strong> Background surface color on hover/active
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span style={{ color: "var(--text-secondary)" }}>
                      <strong>Mobile (Active):</strong> 3px left border with azure accent
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tokens Used */}
        <section className="mb-20" id="tokens">
          <h2 className="mb-8" style={{ color: "var(--foreground)" }}>
            Design Tokens Used
          </h2>

          <div
            className="glass-strong p-8 rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h5 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Colors
                </h5>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>
                    <code className="text-xs">--background</code>
                  </li>
                  <li>
                    <code className="text-xs">--background-surface</code>
                  </li>
                  <li>
                    <code className="text-xs">--foreground</code>
                  </li>
                  <li>
                    <code className="text-xs">--text-secondary</code>
                  </li>
                  <li>
                    <code className="text-xs">--text-tertiary</code>
                  </li>
                  <li>
                    <code className="text-xs">--primary-azure</code>
                  </li>
                  <li>
                    <code className="text-xs">--primary-foreground</code>
                  </li>
                  <li>
                    <code className="text-xs">--border</code>
                  </li>
                  <li>
                    <code className="text-xs">--border-subtle</code>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Spacing & Layout
                </h5>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>72px (default header height)</li>
                  <li>60px (scrolled header height)</li>
                  <li>max-w-7xl (content width)</li>
                  <li>px-6, sm:px-8 (horizontal padding)</li>
                  <li>gap-8 (nav link spacing)</li>
                  <li>gap-3 (brand icon/text spacing)</li>
                </ul>
              </div>

              <div>
                <h5 className="mb-4" style={{ color: "var(--foreground)" }}>
                  Effects & Motion
                </h5>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>
                    <code className="text-xs">glass</code> (default)
                  </li>
                  <li>
                    <code className="text-xs">glass-strong</code> (scrolled)
                  </li>
                  <li>
                    <code className="text-xs">--glow-subtle</code> (CTA hover)
                  </li>
                  <li>300ms transition duration</li>
                  <li>-2px translateY (CTA hover)</li>
                  <li>backdrop blur (mobile overlay)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-20" id="implementation">
          <h2 className="mb-8" style={{ color: "var(--foreground)" }}>
            Technical Implementation
          </h2>

          <div className="space-y-6">
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h4 className="mb-4" style={{ color: "var(--foreground)" }}>
                Scroll Detection
              </h4>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Header monitors window.scrollY and applies scrolled state when scrollY exceeds
                20px. This triggers height reduction (72px → 60px), stronger glass effect, and
                visible border.
              </p>
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "var(--background-elevated)",
                  borderLeft: "3px solid var(--primary-azure)",
                }}
              >
                <code
                  className="text-xs block"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  useEffect(() =&gt; &#123;
                  <br />
                  &nbsp;&nbsp;const handleScroll = () =&gt; setIsScrolled(window.scrollY &gt; 20);
                  <br />
                  &nbsp;&nbsp;window.addEventListener('scroll', handleScroll);
                  <br />
                  &nbsp;&nbsp;return () =&gt; window.removeEventListener('scroll', handleScroll);
                  <br />
                  &#125;, []);
                </code>
              </div>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h4 className="mb-4" style={{ color: "var(--foreground)" }}>
                Mobile Menu Management
              </h4>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Mobile menu state prevents body scroll when open, closes on window resize to
                desktop breakpoint (768px), and includes backdrop overlay with blur effect.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Body scroll lock: document.body.style.overflow = "hidden"
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Auto-close on resize when window.innerWidth &gt;= 768
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Backdrop click closes menu
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    Link clicks close menu automatically
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h4 className="mb-4" style={{ color: "var(--foreground)" }}>
                Active Link Indication
              </h4>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                currentPath prop determines which navigation link receives active styling:
                foreground color and azure underline (desktop) or left border accent (mobile).
              </p>
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "var(--background-elevated)",
                  borderLeft: "3px solid var(--primary-azure)",
                }}
              >
                <code
                  className="text-xs block"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  const isActive = currentPath === link.href;
                  <br />
                  // Desktop: bottom border indicator
                  <br />
                  // Mobile: left border accent + surface background
                </code>
              </div>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h4 className="mb-4" style={{ color: "var(--foreground)" }}>
                Accessibility Features
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    <strong>Semantic HTML:</strong> &lt;header&gt;, &lt;nav&gt; elements with
                    proper structure
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    <strong>ARIA Labels:</strong> aria-label, aria-expanded for mobile menu button
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    <strong>Focus States:</strong> Visible ring (2px azure) with offset on all
                    interactive elements
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    <strong>Keyboard Navigation:</strong> Full tab order support with focus:outline
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    <strong>Screen Reader Support:</strong> Proper labeling for icon-only buttons
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section className="mb-20" id="usage">
          <h2 className="mb-8" style={{ color: "var(--foreground)" }}>
            Usage Example
          </h2>

          <div
            className="glass-strong p-8 rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <h4 className="mb-4" style={{ color: "var(--foreground)" }}>
              Implementation
            </h4>
            <div
              className="p-6 rounded-lg overflow-x-auto"
              style={{ background: "var(--background-elevated)" }}
            >
              <pre
                className="text-xs"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {`import { Header } from "./library/Header";

export function MyPage() {
  return (
    <div className="dark min-h-screen">
      <Header
        brandName="Default Route Advisory"
        navLinks={[
          { label: "Home", href: "#home" },
          { label: "Services", href: "#services" },
          { label: "Resources", href: "#resources" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Schedule Consultation"
        ctaHref="#contact"
        currentPath="#home" // Indicates active page
      />
      
      {/* Page content */}
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Quick Links for Testing */}
        <section id="home" className="py-20 scroll-mt-20">
          <div
            className="glass-strong p-12 rounded-2xl border text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
              Section: Home
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              This section helps test navigation. Click links above to see active states.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Resources", href: "#resources" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => setCurrentPath(link.href)}
                  className="px-4 py-2 rounded-lg text-sm border transition-colors"
                  style={{
                    borderColor: "var(--border)",
                    background:
                      currentPath === link.href
                        ? "var(--primary-azure)"
                        : "var(--background-surface)",
                    color:
                      currentPath === link.href
                        ? "var(--primary-foreground)"
                        : "var(--text-secondary)",
                  }}
                >
                  Set Active: {link.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 scroll-mt-20">
          <div
            className="glass p-12 rounded-2xl border text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
              Section: Services
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Scroll down to see the sticky header transition and reduced height.
            </p>
          </div>
        </section>

        <section id="resources" className="py-20 scroll-mt-20">
          <div
            className="glass p-12 rounded-2xl border text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
              Section: Resources
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              The header maintains its sticky position and visual style as you navigate.
            </p>
          </div>
        </section>

        <section id="about" className="py-20 scroll-mt-20">
          <div
            className="glass p-12 rounded-2xl border text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
              Section: About
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Try tabbing through the header links to see keyboard focus states.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 scroll-mt-20">
          <div
            className="glass p-12 rounded-2xl border text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
              Section: Contact
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Resize your browser window to see mobile menu behavior (&lt; 768px).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}