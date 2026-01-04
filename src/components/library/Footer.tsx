import { Linkedin, Github } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { label: "Azure Landing Zones", href: "#services-landing-zones" },
        { label: "Identity & Access", href: "#services-identity" },
        { label: "Hybrid Networking", href: "#services-networking" },
        { label: "Compliance & Audit", href: "#services-compliance" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "Resources", href: "#resources" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Azure Architecture", href: "#resources-azure" },
        { label: "Security & Compliance", href: "#resources-security" },
        { label: "Technical Guides", href: "#resources-guides" },
      ],
    },
  ];

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border-subtle)",
        background: "var(--background)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <img
                src="/images/logo-stacked-color.svg"
                alt="Default Route Advisory"
                className="h-16"
              />
            </div>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-secondary)" }}>
              Azure cloud consulting for regulated industries. Senior-level architecture,
              identity, and compliance expertise.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-2 lg:col-start-auto">
              <h4 className="mb-4 text-sm" style={{ color: "var(--foreground)" }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm inline-block transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
                      style={{
                        color: "var(--text-secondary)",
                        outlineColor: "var(--primary-azure)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--foreground)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal & Trust Section */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          {/* Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
            <span style={{ color: "var(--text-tertiary)" }}>
              © {currentYear} Default Route Advisory
            </span>
            <div className="flex items-center gap-4">
              <a
                href="#privacy"
                className="transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
                style={{ color: "var(--text-tertiary)", outlineColor: "var(--primary-azure)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-tertiary)";
                }}
              >
                Privacy Policy
              </a>
              <span style={{ color: "var(--border)" }}>•</span>
              <a
                href="#terms"
                className="transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
                style={{ color: "var(--text-tertiary)", outlineColor: "var(--primary-azure)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-tertiary)";
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/default-route-advisory"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-1"
              style={{ color: "var(--text-tertiary)", outlineColor: "var(--primary-azure)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-tertiary)";
              }}
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/default-route-advisory"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded p-1"
              style={{ color: "var(--text-tertiary)", outlineColor: "var(--primary-azure)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-tertiary)";
              }}
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
