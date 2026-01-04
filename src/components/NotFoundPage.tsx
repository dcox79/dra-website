import { ArrowRight } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="dark min-h-screen" style={{ background: "var(--background)" }}>
      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-6 sm:px-8">
        <div className="max-w-2xl w-full">
          {/* Error Code */}
          <div className="mb-8 text-center">
            <p
              className="text-8xl sm:text-9xl font-mono tracking-tight opacity-20"
              style={{ color: "var(--foreground)" }}
            >
              404
            </p>
          </div>

          {/* Glass Panel */}
          <div
            className="glass p-8 sm:p-12 rounded-xl border text-center"
            style={{ borderColor: "var(--border)" }}
          >
            {/* Headline */}
            <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
              Page Not Found
            </h1>

            {/* Explanatory Text */}
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              The page you're looking for doesn't exist or has been moved. Please check the URL or
              return to a known location.
            </p>

            {/* Navigation Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                style={{
                  background: "var(--primary-azure)",
                  color: "var(--primary-foreground)",
                }}
              >
                <span>Return to Home</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/services"
                className="w-full sm:w-auto px-6 py-3 rounded-lg transition-all border flex items-center justify-center gap-2"
                style={{
                  background: "var(--background-surface)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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
  );
}
