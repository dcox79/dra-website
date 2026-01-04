import {
  Cloud,
  Lock,
  Network,
  FileText,
  Zap,
  CheckCircle2,
  Award,
  Settings,
  BookOpen,
  Users,
  Key,
  Shield,
} from "lucide-react";
import { Header } from "./library/Header";
import { HeroSection } from "./library/HeroSection";
import { ServiceCard } from "./library/ServiceCard";
import { ResponsiveProcessTimeline } from "./library/ProcessTimeline";
import { CTABlock } from "./library/CTABlock";
import { Footer } from "./library/Footer";
import { createNavLinks } from "../utils/navigation";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="dark min-h-screen" style={{ background: "var(--background)" }}>
      <Header
        currentPath="home"
        navLinks={createNavLinks(onNavigate)}
        onNavigate={onNavigate}
        onCtaClick={() => onNavigate?.("contact")}
      />
      <HomePageContent onNavigate={onNavigate} />
      <Footer />
    </div>
  );
}

function HomePageContent({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const services = [
    {
      icon: Cloud,
      title: "Azure Architecture Design",
      description:
        "Landing zone design, hub-spoke topologies, and multi-region strategies for regulated workloads. Infrastructure-as-code delivered.",
      href: "#azure-architecture",
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description:
        "Entra ID (Azure AD) architecture, conditional access policies, privileged identity management, and B2B/B2C integration.",
      href: "#identity-access",
    },
    {
      icon: Network,
      title: "Hybrid Networking",
      description:
        "ExpressRoute, VPN Gateway, Virtual WAN, and SD-WAN integration for secure on-premises to Azure connectivity.",
      href: "#hybrid-networking",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Azure Security Center, Sentinel SIEM, policy enforcement, and compliance framework mapping (SOC 2, HIPAA, FedRAMP).",
      href: "#security-compliance",
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description:
        "CI/CD pipelines, Infrastructure-as-Code (Terraform/Bicep), Azure DevOps, and GitHub Actions configuration.",
      href: "#devops-automation",
    },
    {
      icon: FileText,
      title: "Audit & Assessment",
      description:
        "Current-state analysis, gap assessment, compliance audits, and remediation roadmaps with detailed documentation.",
      href: "#audit-assessment",
    },
  ];

  const processPhases = [
    {
      number: 1,
      title: "Discovery",
      description:
        "Initial assessment of current environment, compliance requirements, and business objectives.",
      duration: "1-2 weeks",
    },
    {
      number: 2,
      title: "Design",
      description:
        "Architecture design with security controls, compliance mappings, and technical documentation.",
      duration: "2-3 weeks",
    },
    {
      number: 3,
      title: "Implementation",
      description:
        "Deploy infrastructure, configure policies, establish monitoring, and deliver IaC templates.",
      duration: "3-4 weeks",
    },
    {
      number: 4,
      title: "Validation",
      description:
        "Testing, audit preparation, knowledge transfer, and post-engagement support planning.",
      duration: "1-2 weeks",
    },
  ];

  return (
    <>

      {/* Hero Section */}
      <HeroSection
        headline="Azure Cloud Architecture for Regulated Industries"
        subheadline="Expert design and implementation of secure Azure environments with focus on identity management, hybrid networking, and compliance for finance, healthcare, and government sectors."
        primaryCtaLabel="Schedule Consultation"
        primaryCtaHref="#contact"
        secondaryCtaLabel="View Services"
        secondaryCtaHref="#services"
        bulletPoints={[
          "SOC 2, HIPAA, FedRAMP compliance expertise",
          "Infrastructure-as-code with Terraform and Bicep",
          "Senior architect-led engagements, no junior staff",
        ]}
      />

      {/* Services Overview */}
      <section id="services" className="py-20 sm:py-24" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Services
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Specialized Azure consulting focused on architecture, identity, networking, and
              compliance. All engagements include documentation and infrastructure-as-code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Default Route Advisory */}
      <section
        id="about"
        className="py-20 sm:py-24"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Why Default Route Advisory
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Senior-level expertise without the overhead of large consulting firms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Credibility Point 1 */}
            <div
              className="glass p-8 rounded-xl border motion-card-hover"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <Award className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                    Specialized in Regulated Industries
                  </h4>
                  <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                    Over 15 years combined experience in financial services, healthcare, and
                    government cloud implementations with active security clearances.
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>SOC 2 Type II audit preparation and remediation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>HIPAA-compliant Azure architectures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>FedRAMP High authorization experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Credibility Point 2 */}
            <div
              className="glass p-8 rounded-xl border motion-card-hover"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--primary-cyan)" }}
                >
                  <Settings className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                    Technical Depth Over Sales
                  </h4>
                  <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                    Every engagement is led by a senior Azure architect. No bait-and-switch with
                    junior consultants. No multi-week ramp-up periods.
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Direct access to solution architects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Azure certifications: Solutions Architect Expert, Security Engineer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Production Terraform and Bicep code, not theoretical diagrams</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Credibility Point 3 */}
            <div
              className="glass p-8 rounded-xl border motion-card-hover"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--accent-teal)" }}
                >
                  <BookOpen className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                    Documentation Included
                  </h4>
                  <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                    Every engagement includes architecture diagrams, compliance matrices, runbooks,
                    and infrastructure-as-code templates. No additional charges for documentation.
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Architecture decision records (ADRs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Compliance control mapping documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Operational runbooks and escalation procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Credibility Point 4 */}
            <div
              className="glass p-8 rounded-xl border motion-card-hover"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <Users className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                    Fixed Scope, Fixed Price
                  </h4>
                  <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                    Statement of work with clearly defined deliverables, timeline, and total cost.
                    No hourly billing ambiguity or scope creep.
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Transparent pricing before engagement begins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Milestone-based delivery with approval gates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>Two weeks post-implementation support included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Visualization */}
      <section className="py-20 sm:py-24" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="glass-strong p-12 sm:p-16 rounded-2xl border relative overflow-hidden">
            {/* Background Technical Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="tech-grid"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                    <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tech-grid)" />
              </svg>
            </div>

            <div className="relative text-center space-y-6">
              <div className="flex items-center justify-center gap-8 mb-8">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--primary-azure)" }}
                >
                  <Cloud className="w-8 h-8" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--border)" }}
                ></div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--border)" }}
                ></div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--border)" }}
                ></div>
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--primary-cyan)" }}
                >
                  <Key className="w-8 h-8" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--border)" }}
                ></div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--border)" }}
                ></div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--border)" }}
                ></div>
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--accent-teal)" }}
                >
                  <Network className="w-8 h-8" style={{ color: "var(--primary-foreground)" }} />
                </div>
              </div>

              <h3 style={{ color: "var(--foreground)" }}>
                Azure · Identity · Hybrid Networking
              </h3>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Integrated approach to cloud architecture, identity management, and network design.
                Not disparate point solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section
        id="process"
        className="py-20 sm:py-24"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Engagement Process
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Typical engagements are 8-12 weeks with clearly defined milestones and deliverables.
            </p>
          </div>

          <ResponsiveProcessTimeline phases={processPhases} />

          {/* Process Details */}
          <div className="mt-12 glass p-8 rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <h4 className="mb-4" style={{ color: "var(--foreground)" }}>
              What You Receive
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h6 className="mb-2 uppercase text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Technical Deliverables
                </h6>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>• Architecture diagrams (Visio/Draw.io)</li>
                  <li>• Infrastructure-as-Code templates</li>
                  <li>• Network topology documentation</li>
                  <li>• Security baseline configurations</li>
                </ul>
              </div>
              <div>
                <h6 className="mb-2 uppercase text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Compliance Artifacts
                </h6>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>• Compliance control matrices</li>
                  <li>• Risk assessment documentation</li>
                  <li>• Audit evidence packages</li>
                  <li>• Policy and procedure templates</li>
                </ul>
              </div>
              <div>
                <h6 className="mb-2 uppercase text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Knowledge Transfer
                </h6>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>• Operational runbooks</li>
                  <li>• Team training sessions</li>
                  <li>• Troubleshooting guides</li>
                  <li>• Two weeks post-support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 sm:py-24" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <CTABlock
            title="Ready to secure and optimize your Azure environment?"
            description="Schedule a 30-minute discovery call to discuss your compliance requirements, architecture challenges, and timeline. No sales pitch—just technical assessment and scoping."
            ctaLabel="Schedule Discovery Call"
            ctaHref="mailto:info@defaultroute.advisory?subject=Discovery%20Call%20Request"
            variant="prominent"
          />

          {/* Contact Information */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl border text-center" style={{ borderColor: "var(--border)" }}>
              <h5 className="mb-2" style={{ color: "var(--foreground)" }}>
                Email
              </h5>
              <a
                href="mailto:info@defaultroute.advisory"
                className="text-sm"
                style={{ color: "var(--primary-cyan)" }}
              >
                info@defaultroute.advisory
              </a>
            </div>

            <div className="glass p-6 rounded-xl border text-center" style={{ borderColor: "var(--border)" }}>
              <h5 className="mb-2" style={{ color: "var(--foreground)" }}>
                Response Time
              </h5>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Within 24 hours on business days
              </p>
            </div>

            <div className="glass p-6 rounded-xl border text-center" style={{ borderColor: "var(--border)" }}>
              <h5 className="mb-2" style={{ color: "var(--foreground)" }}>
                Service Areas
              </h5>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                US-based clients, remote delivery
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}