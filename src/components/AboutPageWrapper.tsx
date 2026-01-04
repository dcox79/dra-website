import { Header } from "./library/Header";
import { Footer } from "./library/Footer";
import { createNavLinks } from "../utils/navigation";
import { AboutPage as OriginalAboutPage } from "./AboutPage";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  // For now, just render the original about page with header and footer
  return (
    <div className="dark min-h-screen" style={{ background: "var(--background)" }}>
      <Header
        currentPath="about"
        navLinks={createNavLinks(onNavigate)}
        onNavigate={onNavigate}
        onCtaClick={() => onNavigate?.("contact")}
      />
      <div style={{ paddingTop: "72px" }}>
        {/* Placeholder About Page Content */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <h1 className="mb-6" style={{ color: "var(--foreground)" }}>
              About Default Route Advisory
            </h1>
            <p className="text-xl mb-8" style={{ color: "var(--text-secondary)" }}>
              Senior Azure architecture for organizations that can't afford to get it wrong.
            </p>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              We design and implement Azure environments for regulated industries where security,
              compliance, and audit readiness are non-negotiable. Specializing in identity
              management, hybrid networking, and infrastructure-as-code for finance, healthcare, and
              government.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
