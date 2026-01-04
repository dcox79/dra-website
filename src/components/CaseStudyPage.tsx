import {
  Shield,
  Cloud,
  Network,
  CheckCircle2,
  FileText,
  Building2,
  AlertTriangle,
  Gauge,
  DollarSign,
  Clock,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { NavigationBar } from "./library/NavigationBar";
import { ResponsiveProcessTimeline } from "./library/ProcessTimeline";
import { CTABlock } from "./library/CTABlock";
import { Footer } from "./library/Footer";
import { Breadcrumb } from "./library/Breadcrumb";

export function CaseStudyPage() {
  // This data would typically come from MDX or CMS
  const caseStudy = {
    // Hero
    clientType: "Regional Healthcare System",
    industry: "Healthcare",
    outcome: "Achieved HIPAA compliance and SOC 2 Type II readiness in 12 weeks",
    environment: ["Azure", "Hybrid Network", "HIPAA", "SOC 2"],
    
    // Context
    context: {
      before: [
        "Legacy on-premises data center with 8-year-old infrastructure",
        "No formal Azure architecture or governance framework",
        "PHI workloads running without proper encryption or access controls",
        "Manual compliance documentation with 3-6 month lag time",
        "Network connectivity via site-to-site VPN with frequent outages",
      ],
      constraints: [
        {
          type: "Regulatory",
          description: "HIPAA Security Rule compliance required for upcoming audit",
        },
        {
          type: "Technical",
          description: "Active Directory forest with 15+ years of technical debt",
        },
        {
          type: "Organizational",
          description: "Small IT team (4 people) with no Azure experience",
        },
        {
          type: "Timeline",
          description: "12-week deadline to pass external HIPAA assessment",
        },
      ],
    },

    // Problems
    problems: [
      "PHI stored in Azure storage accounts without encryption at rest or customer-managed keys",
      "No Azure AD (Entra ID) integration - local accounts on VMs with shared credentials",
      "Public IP addresses exposed on multiple resources without network security groups",
      "No centralized logging, monitoring, or audit trail for compliance evidence",
      "ExpressRoute recommended by previous consultant, but cost ($5K/month) exceeded budget",
      "Azure Policy and RBAC not configured - all users had Owner access to production",
    ],

    // Approach
    approach: [
      {
        number: 1,
        title: "Architecture Assessment & Gap Analysis",
        description:
          "Documented existing Azure resources, mapped HIPAA Security Rule requirements to current state, identified 47 control gaps requiring remediation.",
        duration: "1 week",
      },
      {
        number: 2,
        title: "Landing Zone Design",
        description:
          "Designed hub-spoke topology with centralized security services. Chose VPN Gateway over ExpressRoute to meet budget constraints while maintaining security posture.",
        duration: "2 weeks",
      },
      {
        number: 3,
        title: "Identity & Access Foundation",
        description:
          "Implemented Entra ID Connect with password hash sync, configured conditional access policies, established RBAC model with just-in-time access for privileged operations.",
        duration: "2 weeks",
      },
      {
        number: 4,
        title: "Security Controls Implementation",
        description:
          "Deployed Azure Policy for encryption enforcement, configured Defender for Cloud, implemented Private Endpoints for PaaS services, established Key Vault for secrets management.",
        duration: "4 weeks",
      },
      {
        number: 5,
        title: "Compliance Documentation & Validation",
        description:
          "Generated compliance matrices, configured Log Analytics for audit trails, conducted penetration testing, prepared evidence packages for HIPAA assessor.",
        duration: "3 weeks",
      },
    ],

    // Solution Architecture
    architecture: {
      keyDecisions: [
        {
          decision: "VPN Gateway Instead of ExpressRoute",
          rationale:
            "VPN Gateway with zone-redundancy ($300/month) provided sufficient bandwidth and security for workload requirements. Saved $4,700/month while maintaining 99.95% SLA and encryption in transit.",
        },
        {
          decision: "Password Hash Sync Over Federation",
          rationale:
            "Simplified hybrid identity with PHS + seamless SSO. No on-premises dependency for authentication, reducing complexity and single points of failure. Federation would have required ADFS infrastructure the client couldn't maintain.",
        },
        {
          decision: "Azure Policy for Enforcement, Not Documentation",
          rationale:
            "Implemented deny policies for unencrypted storage, non-compliant VM configurations, and public endpoints. Prevented configuration drift instead of documenting it after the fact.",
        },
        {
          decision: "Hub-Spoke with Centralized Firewall",
          rationale:
            "Azure Firewall in hub VNet with forced tunneling from spoke workload VNets. Single point of network security control with comprehensive logging for audit requirements.",
        },
      ],
      components: [
        "Hub VNet with Azure Firewall and VPN Gateway",
        "3x Spoke VNets for production, staging, and shared services",
        "Entra ID Connect for hybrid identity (PHS + SSO)",
        "Azure Policy with 23 custom deny and audit policies",
        "Defender for Cloud with enhanced security features",
        "Private Endpoints for Storage, SQL, and Key Vault",
        "Log Analytics workspace with 90-day retention",
        "Azure Backup for VM and database protection",
      ],
    },

    // Outcomes
    outcomes: {
      headline:
        "Passed HIPAA external assessment and achieved SOC 2 Type II readiness 2 weeks ahead of deadline",
      metrics: [
        {
          label: "Compliance Gaps Closed",
          value: "47/47",
          description: "100% remediation of identified HIPAA control gaps",
          icon: Shield,
        },
        {
          label: "Security Posture Score",
          value: "92%",
          description: "Microsoft Defender for Cloud secure score (industry average: 65%)",
          icon: Gauge,
        },
        {
          label: "Cost Reduction",
          value: "$56K/year",
          description: "Avoided ExpressRoute costs while maintaining security requirements",
          icon: DollarSign,
        },
        {
          label: "Deployment Efficiency",
          value: "12 weeks",
          description: "Full landing zone implementation vs. 6-9 month industry standard",
          icon: Clock,
        },
        {
          label: "Infrastructure Uptime",
          value: "99.98%",
          description: "3 months post-implementation with zero security incidents",
          icon: TrendingUp,
        },
        {
          label: "Documentation Delivered",
          value: "247 pages",
          description: "Architecture diagrams, runbooks, compliance matrices, ADRs",
          icon: FileText,
        },
      ],
      additional: [
        "IT team trained on Azure fundamentals and operational procedures",
        "Terraform modules delivered for infrastructure-as-code maintenance",
        "Automated compliance reporting reduced manual effort from 40 hours/month to 2 hours/month",
        "Zero findings in external HIPAA assessment (previous year had 12 findings)",
      ],
    },

    // Lessons Learned
    lessons: [
      {
        title: "ExpressRoute Is Not Always the Answer",
        description:
          "A zone-redundant VPN Gateway provided the security, reliability, and bandwidth needed at 6% of ExpressRoute cost. Understanding actual workload requirements prevented over-engineering.",
      },
      {
        title: "Azure Policy Prevents More Problems Than Monitoring Detects",
        description:
          "Deny policies for unencrypted storage and public endpoints eliminated entire categories of compliance violations. Enforcement at deployment time is more effective than detection after deployment.",
      },
      {
        title: "Hybrid Identity Simplicity Matters More Than Feature Completeness",
        description:
          "Password hash sync with seamless SSO gave the client 95% of federation benefits with 20% of the operational complexity. The small IT team could actually maintain it.",
      },
      {
        title: "Documentation Is a First-Class Deliverable, Not an Afterthought",
        description:
          "Treating runbooks, architecture decision records, and compliance matrices as core deliverables (not nice-to-haves) directly contributed to passing the HIPAA assessment.",
      },
    ],
  };

  return (
    <div className="dark min-h-screen">
      {/* Navigation */}
      <NavigationBar
        brandName="Default Route Advisory"
        navLinks={[
          { label: "Home", href: "#home" },
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Resources", href: "#resources" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Schedule Consultation"
        ctaHref="#contact"
      />

      {/* Breadcrumb */}
      <div style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Case Studies", href: "#case-studies" },
              { label: "Healthcare HIPAA Compliance" },
            ]}
          />
        </div>
      </div>

      {/* 1. Hero Section */}
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
          {/* Client Type Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--background-surface)",
              }}
            >
              <Building2 className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
              <span style={{ color: "var(--text-secondary)" }}>{caseStudy.clientType}</span>
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs"
              style={{
                background: "var(--primary-azure)",
                color: "var(--primary-foreground)",
              }}
            >
              {caseStudy.industry}
            </div>
          </div>

          {/* Outcome Statement */}
          <h1 className="mb-6 max-w-4xl" style={{ color: "var(--foreground)" }}>
            {caseStudy.outcome}
          </h1>

          {/* Environment Summary */}
          <div className="flex flex-wrap items-center gap-3">
            {caseStudy.environment.map((env, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background-elevated)",
                  color: "var(--text-secondary)",
                }}
              >
                {env.includes("Azure") && <Cloud className="w-4 h-4" />}
                {env.includes("Hybrid") && <Network className="w-4 h-4" />}
                {(env.includes("HIPAA") || env.includes("SOC")) && (
                  <Shield className="w-4 h-4" />
                )}
                <span>{env}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Situation / Context */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Situation & Context
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
              Understanding the starting point and constraints that shaped our approach.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before State */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="mb-6" style={{ color: "var(--foreground)" }}>
                What Existed Before
              </h3>
              <ul className="space-y-3">
                {caseStudy.context.before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: "var(--text-tertiary)" }}
                    />
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Constraints */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="mb-6" style={{ color: "var(--foreground)" }}>
                Key Constraints
              </h3>
              <div className="space-y-4">
                {caseStudy.context.constraints.map((constraint, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {constraint.type}
                      </div>
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {constraint.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problems / Risks */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Problems & Risks
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
              Critical issues that would have prevented HIPAA compliance and created security
              exposure.
            </p>
          </div>

          <div
            className="glass-strong p-8 sm:p-12 rounded-2xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--warning)" }}
                  />
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Approach */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Our Approach
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
              A systematic 12-week engagement with clear milestones and deliverables at each phase.
            </p>
          </div>

          {/* Custom Grid Layout - 3 on top, 2 on bottom */}
          <div className="space-y-6">
            {/* First Row - 3 Steps */}
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.approach.slice(0, 3).map((phase) => (
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
              {caseStudy.approach.slice(3, 5).map((phase) => (
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
        </div>
      </section>

      {/* 5. Solution Architecture */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Solution Architecture
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
              Key architectural decisions and their technical rationale.
            </p>
          </div>

          {/* Architecture Diagram Placeholder */}
          <div
            className="glass-strong p-12 rounded-2xl border mb-12 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="max-w-4xl mx-auto p-16 rounded-xl border-2 border-dashed"
              style={{ borderColor: "var(--border)" }}
            >
              <Network
                className="w-16 h-16 mx-auto mb-4"
                style={{ color: "var(--text-tertiary)" }}
              />
              <h4 className="mb-2" style={{ color: "var(--text-secondary)" }}>
                Architecture Diagram Placeholder
              </h4>
              <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                Hub-spoke topology with centralized security services
                <br />
                VPN Gateway, Azure Firewall, Private Endpoints
              </p>
            </div>
          </div>

          {/* Key Decisions */}
          <div className="space-y-6">
            <h3 className="mb-6" style={{ color: "var(--foreground)" }}>
              Key Architectural Decisions
            </h3>

            {caseStudy.architecture.keyDecisions.map((decision, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                  {decision.decision}
                </h4>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {decision.rationale}
                </p>
              </div>
            ))}
          </div>

          {/* Components Deployed */}
          <div className="mt-12">
            <h3 className="mb-6" style={{ color: "var(--foreground)" }}>
              Components Deployed
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.architecture.components.map((component, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg border"
                  style={{
                    background: "var(--background-surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <CheckCircle2
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "var(--success)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {component}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Outcomes */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Outcomes & Results
            </h2>
            <p className="text-lg max-w-3xl mb-8" style={{ color: "var(--text-secondary)" }}>
              {caseStudy.outcomes.headline}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {caseStudy.outcomes.metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="glass p-6 rounded-xl border"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--primary-azure)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
                    </div>
                    <h5 className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                      {metric.label}
                    </h5>
                  </div>
                  <div className="text-3xl mb-2" style={{ color: "var(--foreground)" }}>
                    {metric.value}
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Outcomes */}
          <div
            className="glass-strong p-8 rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <h4 className="mb-6" style={{ color: "var(--foreground)" }}>
              Additional Outcomes
            </h4>
            <ul className="grid md:grid-cols-2 gap-4">
              {caseStudy.outcomes.additional.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent-teal)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Lessons Learned */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Lessons Learned
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
              What mattered most and what would have gone wrong without the right architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.lessons.map((lesson, index) => (
              <div
                key={index}
                className="glass p-8 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--accent-teal)" }}
                  >
                    <Lightbulb
                      className="w-5 h-5"
                      style={{ color: "var(--primary-foreground)" }}
                    />
                  </div>
                  <h4 style={{ color: "var(--foreground)" }}>{lesson.title}</h4>
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {lesson.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <CTABlock
            title="Facing Similar Compliance or Architecture Challenges?"
            description="If your organization needs Azure architecture for HIPAA, SOC 2, or other regulated environments, we can help. We understand the constraints healthcare, finance, and government sectors face."
            ctaLabel="Schedule a Discovery Call"
            ctaHref="#contact"
            variant="prominent"
          />

          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
              All case studies represent real client engagements. Client names and identifying
              details are anonymized per NDA requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}