import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  bulletPoints?: string[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroSection({
  headline,
  subheadline,
  primaryCtaLabel = "Schedule Consultation",
  primaryCtaHref = "#contact",
  secondaryCtaLabel = "View Services",
  secondaryCtaHref = "#services",
  bulletPoints,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, var(--background) 0%, var(--background-elevated) 100%)`,
      }}
    >
      {/* Subtle ambient orbs */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{
          background: "var(--primary-azure)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "var(--primary-cyan)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1
            className="motion-fade-up"
            style={{ color: "var(--foreground)" }}
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl motion-fade-up motion-fade-up-delay-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 motion-fade-up motion-fade-up-delay-2">
            <a
              href={primaryCtaHref}
              onClick={onPrimaryClick}
              className="motion-button-glow px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2"
              style={{
                background: "var(--primary-azure)",
                color: "var(--primary-foreground)",
              }}
            >
              {primaryCtaLabel}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryCtaHref}
              onClick={onSecondaryClick}
              className="motion-button-lift px-8 py-3 rounded-lg font-medium border inline-flex items-center gap-2"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              {secondaryCtaLabel}
            </a>
          </div>

          {/* Optional Bullet Points */}
          {bulletPoints && bulletPoints.length > 0 && (
            <div className="pt-8 motion-fade-up motion-fade-up-delay-3">
              <div className="inline-flex flex-col items-start gap-3 text-left">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
