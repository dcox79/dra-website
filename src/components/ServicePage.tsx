import { CheckCircle2, XCircle, ArrowRight, FileText } from "lucide-react";
import { Header } from "./library/Header";
import { HeroSection } from "./library/HeroSection";
import { DeliverablesList } from "./library/DeliverablesList";
import { IncludedNotIncluded } from "./library/IncludedNotIncluded";
import { FAQAccordion } from "./library/FAQAccordion";
import { CTABlock } from "./library/CTABlock";
import { Footer } from "./library/Footer";
import { createNavLinks } from "../utils/navigation";

interface ServicePageProps {
  onNavigate?: (page: string) => void;
  service: {
    title: string;
    subtitle: string;
    description: string;
    qualificationPoints: string[];
    scopeItems: string[];
    approachPhases: { title: string; description: string }[];
    deliverables: string[];
    included: string[];
    notIncluded: string[];
    outcomes: string[];
    faqs: { question: string; answer: string }[];
  };
}

export function ServicePage({ service, onNavigate }: ServicePageProps) {
  return (
    <div className="dark min-h-screen" style={{ background: "var(--background)" }}>
      <Header
        currentPath="#services"
        navLinks={createNavLinks(onNavigate)}
        onNavigate={onNavigate}
        onCtaClick={() => onNavigate?.("contact")}
      />

      {/* Hero */}
      <HeroSection
        title={service.title}
        subtitle={service.subtitle}
        primaryCta={{ label: "Request Assessment", href: "#contact" }}
        secondaryCta={{ label: "Download Guide", href: "#resources" }}
      />

      {/* Qualification Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2
            className="text-3xl font-semibold mb-8"
            style={{ color: "var(--foreground)" }}
          >
            Is This Assessment Right for You?
          </h2>
          <div className="grid gap-4">
            {service.qualificationPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg glass"
              >
                <CheckCircle2
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: "var(--primary-azure)" }}
                />
                <p style={{ color: "var(--text-secondary)" }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2
            className="text-3xl font-semibold mb-8"
            style={{ color: "var(--foreground)" }}
          >
            What This Assessment Covers
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.scopeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-6 rounded-lg glass"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    {idx + 1}
                  </span>
                </div>
                <p style={{ color: "var(--text-secondary)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2
            className="text-3xl font-semibold mb-8"
            style={{ color: "var(--foreground)" }}
          >
            Our Approach
          </h2>
          <div className="space-y-6">
            {service.approachPhases.map((phase, idx) => (
              <div key={idx} className="glass p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <ArrowRight
                    className="w-5 h-5 flex-shrink-0 mt-1"
                    style={{ color: "var(--primary-cyan)" }}
                  />
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      {phase.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <DeliverablesList
            title="What You'll Receive"
            deliverables={service.deliverables}
          />
        </div>
      </section>

      {/* Included / Not Included */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <IncludedNotIncluded
            included={service.included}
            notIncluded={service.notIncluded}
          />
        </div>
      </section>

      {/* Outcomes */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2
            className="text-3xl font-semibold mb-8"
            style={{ color: "var(--foreground)" }}
          >
            Expected Outcomes
          </h2>
          <div className="grid gap-4">
            {service.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg surface-elevated"
              >
                <CheckCircle2
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: "var(--accent-teal)" }}
                />
                <p style={{ color: "var(--text-secondary)" }}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2
            className="text-3xl font-semibold mb-8"
            style={{ color: "var(--foreground)" }}
          >
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <CTABlock
            title="Ready to Get Started?"
            description="Schedule a consultation to discuss your Azure environment and compliance requirements."
            primaryButton={{ label: "Request Assessment", href: "#contact" }}
            secondaryButton={{ label: "View All Services", href: "#services" }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
