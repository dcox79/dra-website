import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export interface HeaderProps {
  navLinks?: { label: string; href: string; onClick?: () => void }[];
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  currentPath?: string; // Used to indicate active link
  onNavigate?: (page: string) => void;
}

export function Header({
  navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Resources", href: "#resources" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel = "Schedule Consultation",
  ctaHref = "#contact",
  onCtaClick,
  onNavigate,
  currentPath = "#home",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`
          sticky top-0 z-50 
          transition-all duration-300
          ${isScrolled ? "glass-strong border-b shadow-lg" : "glass"}
        `}
        style={{
          borderColor: isScrolled ? "var(--border)" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div
            className="flex items-center justify-between transition-all duration-300"
            style={{
              height: isScrolled ? "60px" : "72px",
            }}
          >
            {/* Brand */}
            <a
              href="#home"
              className="flex items-center transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              style={{
                "--tw-ring-color": "var(--primary-azure)",
                "--tw-ring-offset-color": "var(--background)",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {/* Mobile: Symbol logo */}
              <img
                src="/images/logo-symbol-color.svg"
                alt="Default Route Advisory"
                className="h-10 w-10 md:hidden"
              />
              {/* Desktop: Horizontal logo */}
              <img
                src="/images/logo-horizontal-color.svg"
                alt="Default Route Advisory"
                className="hidden md:block h-10"
                style={{ maxWidth: "250px" }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href || currentPath === link.href.replace('#', '');
                const handleClick = (e: React.MouseEvent) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  } else if (onNavigate && !link.href.startsWith('#')) {
                    e.preventDefault();
                    onNavigate(link.href);
                  }
                };

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleClick}
                    className="relative text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2 py-1 cursor-pointer"
                    style={{
                      color: isActive ? "var(--foreground)" : "var(--text-secondary)",
                      "--tw-ring-color": "var(--primary-azure)",
                      "--tw-ring-offset-color": "var(--background)",
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--foreground)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }
                    }}
                  >
                    {link.label}
                    {/* Active indicator */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                        style={{ background: "var(--primary-azure)" }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <a
              href={ctaHref}
              onClick={onCtaClick}
              className="hidden md:block px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: "var(--primary-azure)",
                color: "var(--primary-foreground)",
                "--tw-ring-color": "var(--primary-azure)",
                "--tw-ring-offset-color": "var(--background)",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "var(--glow-subtle)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {ctaLabel}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                color: "var(--text-secondary)",
                "--tw-ring-color": "var(--primary-azure)",
                "--tw-ring-offset-color": "var(--background)",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden transition-opacity duration-300"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <nav
            className="fixed top-[72px] left-0 right-0 bottom-0 z-40 md:hidden glass-strong border-t overflow-y-auto"
            style={{
              borderColor: "var(--border)",
              background: "var(--background)",
            }}
          >
            <div className="px-6 py-8">
              {/* Mobile Navigation Links */}
              <div className="space-y-2 mb-8">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href || currentPath === link.href.replace('#', '');
                  const handleClick = (e: React.MouseEvent) => {
                    setIsMobileMenuOpen(false);
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    } else if (onNavigate && !link.href.startsWith('#')) {
                      e.preventDefault();
                      onNavigate(link.href);
                    }
                  };

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleClick}
                      className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
                      style={{
                        color: isActive ? "var(--foreground)" : "var(--text-secondary)",
                        background: isActive
                          ? "var(--background-surface)"
                          : "transparent",
                        borderLeft: isActive
                          ? "3px solid var(--primary-azure)"
                          : "3px solid transparent",
                        "--tw-ring-color": "var(--primary-azure)",
                        "--tw-ring-offset-color": "var(--background)",
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "var(--background-surface)";
                          e.currentTarget.style.color = "var(--foreground)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "var(--text-secondary)";
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              {/* Mobile CTA Button */}
              <a
                href={ctaHref}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  onCtaClick?.(e as any);
                }}
                className="block w-full px-5 py-3 rounded-lg text-base font-medium text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: "var(--primary-azure)",
                  color: "var(--primary-foreground)",
                  "--tw-ring-color": "var(--primary-azure)",
                  "--tw-ring-offset-color": "var(--background)",
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "var(--glow-subtle)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {ctaLabel}
              </a>

              {/* Mobile Menu Footer */}
              <div
                className="mt-8 pt-8 border-t text-center"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                  Azure Cloud Consulting
                </p>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
