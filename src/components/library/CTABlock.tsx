import { ArrowRight } from "lucide-react";

export interface CTABlockProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  showForm?: boolean;
  formContent?: React.ReactNode;
  variant?: "default" | "prominent";
}

export function CTABlock({
  title,
  description,
  ctaLabel = "Get Started",
  ctaHref = "#contact",
  onCtaClick,
  showForm = false,
  formContent,
  variant = "default",
}: CTABlockProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-2xl ${
        variant === "prominent" ? "p-12 sm:p-16" : "p-8 sm:p-12"
      }`}
      style={{
        background:
          variant === "prominent"
            ? "linear-gradient(135deg, var(--background-elevated) 0%, var(--background-surface) 100%)"
            : "var(--background-elevated)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Decorative Elements */}
      {variant === "prominent" && (
        <>
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "var(--primary-azure)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 pointer-events-none"
            style={{
              background: "var(--accent-teal)",
              filter: "blur(80px)",
            }}
          />
        </>
      )}

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 style={{ color: "var(--foreground)" }}>{title}</h2>

        {/* Description */}
        <p
          className="text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>

        {/* CTA Button */}
        {!showForm && (
          <div className="pt-2">
            <a
              href={ctaHref}
              onClick={onCtaClick}
              className="motion-button-glow inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium"
              style={{
                background: "var(--primary-azure)",
                color: "var(--primary-foreground)",
              }}
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Optional Form */}
        {showForm && formContent && (
          <div className="pt-4">{formContent}</div>
        )}
      </div>
    </section>
  );
}
