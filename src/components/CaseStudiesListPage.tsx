import { Building2, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { NavigationBar } from "./library/NavigationBar";
import { Footer } from "./library/Footer";

interface CaseStudiesListPageProps {
  variant?: "populated" | "empty" | "single";
}

export function CaseStudiesListPage({ variant = "populated" }: CaseStudiesListPageProps) {
  // Mock data - would come from CMS/MDX
  const caseStudies = variant === "empty" ? [] : variant === "single" ? [
    {
      id: 1,
      clientType: "Regional Healthcare System",
      industry: "Healthcare",
      title: "HIPAA Compliance and SOC 2 Readiness in 12 Weeks",
      summary:
        "Designed and implemented secure Azure landing zone architecture for healthcare organization with strict compliance requirements and limited timeline.",
      outcomes: [
        "Achieved HIPAA Security Rule compliance",
        "Passed SOC 2 Type II readiness audit",
        "Reduced compliance documentation time by 85%",
      ],
      duration: "12 weeks",
      href: "#case-study-healthcare",
    },
  ] : [
    {
      id: 1,
      clientType: "Regional Healthcare System",
      industry: "Healthcare",
      title: "HIPAA Compliance and SOC 2 Readiness in 12 Weeks",
      summary:
        "Designed and implemented secure Azure landing zone architecture for healthcare organization with strict compliance requirements and limited timeline.",
      outcomes: [
        "Achieved HIPAA Security Rule compliance",
        "Passed SOC 2 Type II readiness audit",
        "Reduced compliance documentation time by 85%",
      ],
      duration: "12 weeks",
      href: "#case-study-healthcare",
    },
    {
      id: 2,
      clientType: "Financial Services Firm",
      industry: "Finance",
      title: "Multi-Region ExpressRoute Architecture for Trading Platform",
      summary:
        "Implemented high-availability hybrid networking solution with sub-10ms latency requirements for real-time trading systems.",
      outcomes: [
        "99.99% uptime achieved across 3 regions",
        "Latency reduced from 45ms to 7ms average",
        "Zero downtime during cutover migration",
      ],
      duration: "16 weeks",
      href: "#case-study-finance",
    },
    {
      id: 3,
      clientType: "Government Agency",
      industry: "Public Sector",
      title: "FedRAMP Moderate Authorization for Cloud Migration",
      summary:
        "Led Azure Government Cloud migration with full FedRAMP authorization package, including SSP development and continuous monitoring implementation.",
      outcomes: [
        "Received FedRAMP Moderate ATO",
        "Migrated 47 workloads to Azure Government",
        "Automated 90% of compliance evidence collection",
      ],
      duration: "24 weeks",
      href: "#case-study-government",
    },
  ];

  return (
    <div className="dark min-h-screen">
      {/* Navigation */}
      <NavigationBar
        brandName="Default Route Advisory"
        navLinks={[
          { label: "Home", href: "#home" },
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Case Studies", href: "#case-studies" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Schedule Consultation"
        ctaHref="#contact"
      />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, var(--background) 0%, var(--background-elevated) 100%)`,
        }}
      >
        <div
          className="absolute top-20 left-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background: "var(--primary-cyan)",
            filter: "blur(120px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 text-center">
          <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
            Client Case Studies
          </h1>

          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Real-world Azure implementations for regulated industries. Detailed technical
            approaches, challenges solved, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies Grid or Empty State */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {caseStudies.length > 0 ? (
            <>
              <div className="mb-12">
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Showing {caseStudies.length} {caseStudies.length === 1 ? "case study" : "case studies"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study) => (
                  <a
                    key={study.id}
                    href={study.href}
                    className="glass p-6 rounded-xl border block motion-card-hover"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {/* Industry Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          background: "var(--background-elevated)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <Building2 className="w-3 h-3 inline mr-1" />
                        {study.industry}
                      </div>
                      <div
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          background: "var(--background-elevated)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <Clock className="w-3 h-3 inline mr-1" />
                        {study.duration}
                      </div>
                    </div>

                    {/* Client Type */}
                    <p className="text-sm mb-2" style={{ color: "var(--text-tertiary)" }}>
                      {study.clientType}
                    </p>

                    {/* Title */}
                    <h3 className="mb-3 text-lg" style={{ color: "var(--foreground)" }}>
                      {study.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                      {study.summary}
                    </p>

                    {/* Key Outcomes */}
                    <div className="space-y-2 mb-4">
                      {study.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: "var(--accent-teal)" }}
                          />
                          <span style={{ color: "var(--text-secondary)" }}>{outcome}</span>
                        </div>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--primary-cyan)" }}>
                      <span>Read case study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>

              {variant === "single" && (
                <div
                  className="mt-12 p-6 rounded-xl border-l-4 glass"
                  style={{
                    borderLeftColor: "var(--primary-azure)",
                    borderTopColor: "var(--border)",
                    borderRightColor: "var(--border)",
                    borderBottomColor: "var(--border)",
                  }}
                >
                  <p style={{ color: "var(--text-secondary)" }}>
                    Additional case studies are under NDA or in draft review.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block mt-3 text-sm underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Contact us for references
                  </a>
                </div>
              )}
            </>
          ) : (
            <div
              className="text-center py-20 glass rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <p style={{ color: "var(--text-secondary)" }}>
                Case studies will be published as client engagements conclude.
              </p>
              <p className="text-sm mt-2" style={{ color: "var(--text-tertiary)" }}>
                Most implementations are under NDA during active project work.
              </p>
              <a
                href="#contact"
                className="inline-block mt-6 text-sm underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Contact us for references
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
