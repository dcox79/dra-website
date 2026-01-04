import {
  Shield,
  Award,
  Target,
  CheckCircle2,
  BookOpen,
  Users,
} from "lucide-react";
import { Header } from "./library/Header";
import { ResponsiveProcessTimeline } from "./library/ProcessTimeline";
import { CTABlock } from "./library/CTABlock";
import { Footer } from "./library/Footer";

export function AboutPage() {
  const processPhases = [
    {
      number: 1,
      title: "Scoping & Statement of Work",
      description:
        "Fixed-price proposal with explicit deliverables, timeline, and out-of-scope items. No ambiguity about what you're getting.",
      duration: "1 week",
    },
    {
      number: 2,
      title: "Discovery & Assessment",
      description:
        "Technical interviews, architecture review, compliance gap analysis. Direct engagement with your engineering and security teams.",
      duration: "1-2 weeks",
    },
    {
      number: 3,
      title: "Design & Documentation",
      description:
        "Architecture diagrams, infrastructure-as-code, security controls, compliance matrices. All deliverables reviewed at milestone gates.",
      duration: "2-3 weeks",
    },
    {
      number: 4,
      title: "Implementation Support",
      description:
        "Deploy infrastructure, configure policies, establish monitoring. Knowledge transfer sessions throughout, not at the end.",
      duration: "3-4 weeks",
    },
    {
      number: 5,
      title: "Validation & Handoff",
      description:
        "Testing, audit preparation, final documentation review. Two weeks of post-engagement support included, not billable.",
      duration: "1 week",
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
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Schedule Consultation"
        ctaHref="#contact"
      />

      {/* 1. Hero Section - No CTAs */}
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="motion-fade-up" style={{ color: "var(--foreground)" }}>
              Senior Azure Architecture for Organizations That Can't Afford to Get It Wrong
            </h1>

            <p
              className="text-xl motion-fade-up motion-fade-up-delay-1"
              style={{ color: "var(--text-secondary)" }}
            >
              We design and implement Azure environments for regulated industries where security,
              compliance, and audit readiness are non-negotiable. Specializing in identity
              management, hybrid networking, and infrastructure-as-code for finance, healthcare, and
              government.
            </p>

            <div className="pt-4 motion-fade-up motion-fade-up-delay-2">
              <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
                  <span style={{ color: "var(--text-secondary)" }}>15+ years regulated cloud</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
                  <span style={{ color: "var(--text-secondary)" }}>
                    SOC 2, HIPAA, FedRAMP experience
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
                  <span style={{ color: "var(--text-secondary)" }}>Production IaC delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Work With */}
      <section className="py-20 sm:py-24" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Who We Work With
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              We're selective about engagements. Our expertise is most valuable to organizations
              with specific constraints and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Regulated Industries */}
            <div
              className="glass p-8 rounded-xl border motion-card-hover"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--primary-azure)" }}
              >
                <Building2 className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                Regulated Industries
              </h4>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Financial services, healthcare, government, or any sector with compliance frameworks
                like SOC 2, HIPAA, PCI-DSS, or FedRAMP.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>• Active audit requirements</li>
                <li>• Security control documentation</li>
                <li>• Risk assessment obligations</li>
              </ul>
            </div>

            {/* Azure + Hybrid Complexity */}
            <div
              className="glass p-8 rounded-xl border motion-card-hover"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--primary-cyan)" }}
              >
                <Network className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                Azure + Hybrid Complexity
              </h4>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Organizations with on-premises infrastructure that need secure Azure connectivity,
                identity federation, and hybrid workload management.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>• ExpressRoute or VPN Gateway needs</li>
                <li>• Entra ID (Azure AD) hybrid identity</li>
                <li>• Multi-region or geo-redundancy</li>
              </ul>
            </div>

            {/* Governance Pressure */}
            <div
              className="glass p-8 rounded-xl border motion-card-hover"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--accent-teal)" }}
              >
                <FileCheck className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                Governance & Compliance Pressure
              </h4>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Teams facing audit findings, compliance gaps, or internal governance requirements
                that demand architecture changes and documentation.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>• Audit remediation timelines</li>
                <li>• Policy enforcement requirements</li>
                <li>• Control evidence expectations</li>
              </ul>
            </div>
          </div>

          {/* Not a Fit Section */}
          <div
            className="mt-8 p-6 rounded-lg border-l-4"
            style={{
              background: "var(--background-elevated)",
              borderLeftColor: "var(--border-strong)",
            }}
          >
            <h5 className="mb-3" style={{ color: "var(--foreground)" }}>
              We're Probably Not a Fit If:
            </h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              <div>
                <p>
                  • You need 24/7 managed services or ongoing operations support (we design and
                  implement, not operate)
                </p>
              </div>
              <div>
                <p>
                  • You're looking for staff augmentation or body shop consultants (we do
                  project-based architecture work)
                </p>
              </div>
              <div>
                <p>
                  • Your timeline is under 4 weeks (quality architecture and compliance work takes
                  time)
                </p>
              </div>
              <div>
                <p>
                  • You need application development or custom software (we focus on cloud
                  infrastructure and platform)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do (High-Level) */}
      <section
        className="py-20 sm:py-24"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              What We Do
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Strategic Azure architecture with implementation support. Not theory, not PowerPoint
              decks—production-ready infrastructure and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Approach */}
            <div className="space-y-6">
              <div>
                <h4 className="mb-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--primary-azure)" }}
                  >
                    <Target className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <span style={{ color: "var(--foreground)" }}>Our Approach</span>
                </h4>
                <ul className="space-y-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      <strong style={{ color: "var(--foreground)" }}>
                        Architecture with implementation awareness:
                      </strong>{" "}
                      We design systems we know how to build. No unrealistic diagrams or vendor lock-in
                      recommendations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      <strong style={{ color: "var(--foreground)" }}>
                        Compliance-first thinking:
                      </strong>{" "}
                      Security controls and audit evidence are part of the architecture, not
                      afterthoughts. We map controls to frameworks as we design.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      <strong style={{ color: "var(--foreground)" }}>
                        Infrastructure-as-code by default:
                      </strong>{" "}
                      Terraform or Bicep templates for all infrastructure. Modular, versioned, and
                      ready for your CI/CD pipeline.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      <strong style={{ color: "var(--foreground)" }}>
                        Documentation as a deliverable:
                      </strong>{" "}
                      Architecture decision records, runbooks, compliance matrices, and diagrams are
                      included, not optional add-ons.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Outcomes */}
            <div className="space-y-6">
              <div>
                <h4 className="mb-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--accent-teal)" }}
                  >
                    <Gauge className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <span style={{ color: "var(--foreground)" }}>Typical Outcomes</span>
                </h4>
                <ul className="space-y-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      Production Azure landing zones with hub-spoke networking, identity federation,
                      and security baseline configurations deployed and tested.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      Compliance control matrices showing how your Azure architecture maps to SOC 2,
                      HIPAA, or other framework requirements.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      Infrastructure-as-code repositories with modular Terraform or Bicep, ready for
                      your team to maintain and extend.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      Technical documentation packages including architecture diagrams, network
                      topology, security controls, and operational runbooks.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      Knowledge transfer sessions with your engineering team so they understand the
                      architecture, not just inherit it.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section className="py-20 sm:py-24" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              How We Work
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Fixed-scope engagements with explicit deliverables and boundaries. You know what
              you're getting before we start.
            </p>
          </div>

          {/* Process Timeline - Custom Grid Layout */}
          <div className="space-y-6">
            {/* First Row - 3 Steps */}
            <div className="grid md:grid-cols-3 gap-6">
              {processPhases.slice(0, 3).map((phase) => (
                <div
                  key={phase.number}
                  className="glass p-6 rounded-xl border motion-card-hover"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg"
                      style={{
                        background: "var(--primary-azure)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      {phase.number}
                    </div>
                    <div>
                      <h4 style={{ color: "var(--foreground)" }}>{phase.title}</h4>
                      <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                        {phase.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Second Row - 2 Steps */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {processPhases.slice(3, 5).map((phase) => (
                <div
                  key={phase.number}
                  className="glass p-6 rounded-xl border motion-card-hover"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg"
                      style={{
                        background: "var(--primary-azure)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      {phase.number}
                    </div>
                    <div>
                      <h4 style={{ color: "var(--foreground)" }}>{phase.title}</h4>
                      <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                        {phase.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Working Principles */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div
              className="glass p-6 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h5 className="mb-3" style={{ color: "var(--foreground)" }}>
                Clear Scope
              </h5>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Statement of work defines exactly what's included and what's not. No hourly billing
                ambiguity or surprise invoices.
              </p>
            </div>

            <div
              className="glass p-6 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h5 className="mb-3" style={{ color: "var(--foreground)" }}>
                Milestone Gates
              </h5>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Review and approval points throughout the engagement. If something's not right, we
                address it at the milestone, not at the end.
              </p>
            </div>

            <div
              className="glass p-6 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h5 className="mb-3" style={{ color: "var(--foreground)" }}>
                Defined Boundaries
              </h5>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                We design and implement infrastructure. We don't do ongoing operations unless
                separately contracted. Handoff is clean and documented.
              </p>
            </div>
          </div>

          {/* What's Always Included */}
          <div
            className="mt-8 glass p-8 rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <h4 className="mb-6" style={{ color: "var(--foreground)" }}>
              What's Always Included
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <BookOpen
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--primary-azure)" }}
                  />
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--foreground)" }}>
                      Architecture documentation:
                    </strong>{" "}
                    Diagrams, ADRs, and design rationale
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GitBranch
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--primary-azure)" }}
                  />
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--foreground)" }}>
                      Infrastructure-as-code:
                    </strong>{" "}
                    Terraform or Bicep with modular structure
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--primary-azure)" }}
                  />
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--foreground)" }}>Security baseline:</strong> Azure
                    Policy, RBAC, and compliance controls
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FileCheck
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--primary-azure)" }}
                  />
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--foreground)" }}>
                      Compliance artifacts:
                    </strong>{" "}
                    Control matrices and audit evidence
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--primary-azure)" }}
                  />
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--foreground)" }}>Knowledge transfer:</strong>{" "}
                    Sessions with your engineering team
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--primary-azure)" }}
                  />
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--foreground)" }}>Post-support:</strong> Two weeks
                    of questions and adjustments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Default Route Advisory */}
      <section
        className="py-20 sm:py-24"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Why Default Route Advisory
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Senior-level architecture without the overhead, politics, or junior staff of large
              consulting firms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Senior-Level Architecture Depth */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <Award className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Senior-Level Architecture Depth
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    Every engagement is led by a senior Azure architect with 15+ years of enterprise
                    infrastructure experience. No bait-and-switch with junior consultants.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Azure Solutions Architect Expert and Security Engineer certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Experience with enterprise-scale Azure landing zones and CAF</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Deep networking background (BGP, MPLS, SD-WAN, ExpressRoute)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>
                    Production Terraform and Bicep experience across Fortune 500 deployments
                  </span>
                </li>
              </ul>
            </div>

            {/* Regulated Environment Experience */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--accent-teal)" }}
                >
                  <Shield className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Regulated Environment Expertise
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    We understand audit requirements, compliance frameworks, and the documentation
                    rigor that regulated industries demand.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>SOC 2 Type II audit preparation and control implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>HIPAA-compliant Azure architectures for healthcare organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>FedRAMP High authorization support and government cloud experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>
                    Active security clearances for DoD and federal civilian agency projects
                  </span>
                </li>
              </ul>
            </div>

            {/* Implementation-Aware Design */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--primary-cyan)" }}
                >
                  <Code className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    Implementation-Aware Design
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    We design systems we know how to build. No ivory tower architecture or unrealistic
                    recommendations that can't be implemented.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>
                    Hands-on Terraform and Bicep development, not just high-level diagrams
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Experience with Azure DevOps, GitHub Actions, and CI/CD pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Understanding of operational constraints and day-2 maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Cost-aware designs that balance security, performance, and budget</span>
                </li>
              </ul>
            </div>

            {/* No Enterprise Consulting Overhead */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <Users className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: "var(--foreground)" }}>
                    No Enterprise Consulting Overhead
                  </h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    Small firm structure without the bureaucracy, account managers, or internal
                    politics. You work directly with the people doing the technical work.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>No sales team, account executives, or relationship managers to fund</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Fixed-price projects, not utilization-driven hourly billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Fast decision-making without layers of approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span>Direct communication with technical leads, no intermediaries</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What We Don't Claim */}
          <div
            className="mt-8 p-6 rounded-lg border-l-4"
            style={{
              background: "var(--background)",
              borderLeftColor: "var(--border-strong)",
            }}
          >
            <h5 className="mb-3" style={{ color: "var(--foreground)" }}>
              What We Don't Claim
            </h5>
            <div className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <p>
                • We're not a Microsoft Gold Partner or Azure Expert MSP (those programs require
                managed services revenue we don't have)
              </p>
              <p>
                • We don't have case studies with Fortune 100 logos (our clients value discretion and
                we respect NDAs)
              </p>
              <p>
                • We're not "thought leaders" or conference speakers (we focus on client work, not
                self-promotion)
              </p>
              <p>
                • We don't have offshore delivery centers or 24/7 support teams (we're a boutique
                firm, not a global integrator)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20 sm:py-24" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <CTABlock
            title="Ready to Discuss Your Azure Architecture Needs?"
            description="Schedule a 30-minute technical discovery call. We'll discuss your compliance requirements, current environment, and whether we're a good fit. No sales pitch, no obligation."
            ctaLabel="Schedule Discovery Call"
            ctaHref="mailto:info@defaultroute.advisory?subject=Discovery%20Call%20Request"
            variant="prominent"
          />

          {/* Alternative Contact Methods */}
          <div className="mt-8 text-center">
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
              Prefer to review our services first?
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm motion-button-lift px-6 py-2 rounded-lg border"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              View Service Offerings
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}