import { Shield } from "lucide-react";

export interface NavigationBarProps {
  brandName?: string;
  brandIcon?: React.ReactNode;
  navLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export function NavigationBar({
  brandName = "Default Route Advisory",
  brandIcon = <Shield className="w-5 h-5" />,
  navLinks = [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Deliverables", href: "#deliverables" },
    { label: "FAQ", href: "#faq" },
  ],
  ctaLabel = "Get Started",
  ctaHref = "#contact",
  onCtaClick,
}: NavigationBarProps) {
  return (
    <nav className="glass-strong border-b sticky top-0 z-50" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "var(--primary-azure)", color: "var(--primary-foreground)" }}
            >
              {brandIcon}
            </div>
            <span className="font-semibold" style={{ color: "var(--foreground)" }}>
              {brandName}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="motion-button-glow px-5 py-2 rounded-lg text-sm font-medium"
            style={{
              background: "var(--primary-azure)",
              color: "var(--primary-foreground)",
            }}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </nav>
  );
}
