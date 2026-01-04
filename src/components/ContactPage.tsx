import {
  Clock,
  Lock,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  Shield,
  FileText,
} from "lucide-react";
import { NavigationBar } from "./library/NavigationBar";
import { FormLayout } from "./library/FormLayout";
import { Footer } from "./library/Footer";

export function ContactPage() {
  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text" as const,
      placeholder: "John Smith",
      required: true,
    },
    {
      id: "email",
      label: "Work Email",
      type: "email" as const,
      placeholder: "john.smith@company.com",
      required: true,
      helpText: "We only respond to business email addresses",
    },
    {
      id: "company",
      label: "Company Name",
      type: "text" as const,
      placeholder: "Acme Corporation",
      required: true,
    },
    {
      id: "role",
      label: "Your Role",
      type: "text" as const,
      placeholder: "CTO, Director of Engineering, Security Lead, etc.",
    },
    {
      id: "industry",
      label: "Industry",
      type: "select" as const,
      required: true,
      options: [
        "Financial Services",
        "Healthcare",
        "Government / Public Sector",
        "Technology / SaaS",
        "Manufacturing",
        "Other Regulated Industry",
      ],
    },
    {
      id: "compliance",
      label: "Compliance Frameworks (if applicable)",
      type: "text" as const,
      placeholder: "SOC 2, HIPAA, FedRAMP, PCI-DSS, etc.",
      helpText: "List any relevant compliance requirements",
    },
    {
      id: "timeline",
      label: "Project Timeline",
      type: "select" as const,
      options: [
        "Immediate (within 4 weeks)",
        "1-3 months",
        "3-6 months",
        "6+ months / Planning phase",
      ],
    },
    {
      id: "description",
      label: "Project Description",
      type: "textarea" as const,
      placeholder: "Describe your Azure architecture needs, current challenges, or specific objectives...\n\nExamples:\n• Need Azure landing zone for SOC 2 compliance\n• Migrating on-premises workloads to Azure with hybrid networking\n• Security audit findings requiring architecture changes\n• Entra ID (Azure AD) hybrid identity implementation",
      required: true,
      helpText:
        "Be as specific as possible. This helps us determine if we're a good fit.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
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
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Schedule Consultation"
        ctaHref="#contact"
      />

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

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-20 text-center">
          <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
            Talk to a Senior Azure Architect
          </h1>

          <p
            className="text-xl max-w-2xl mx-auto mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Schedule a 30-minute technical discovery call to discuss your Azure architecture,
            compliance requirements, and project scope. No sales pitch, no obligation.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
              <span style={{ color: "var(--text-secondary)" }}>24-hour response time</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
              <span style={{ color: "var(--text-secondary)" }}>
                Confidential consultation
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
              <span style={{ color: "var(--text-secondary)" }}>No spam, ever</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          {/* Form Container */}
          <div
            className="glass-strong p-8 sm:p-12 rounded-2xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="mb-8">
              <h2 className="mb-3" style={{ color: "var(--foreground)" }}>
                Request a Discovery Call
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                All fields marked with <span style={{ color: "var(--destructive)" }}>*</span> are
                required. We typically respond within one business day.
              </p>
            </div>

            <FormLayout
              fields={formFields}
              submitLabel="Send Request"
              onSubmit={handleSubmit}
              columns={2}
            />

            {/* Privacy Note */}
            <div
              className="mt-8 p-4 rounded-lg border-l-4 flex items-start gap-3"
              style={{
                background: "var(--background-elevated)",
                borderLeftColor: "var(--primary-azure)",
              }}
            >
              <Lock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--primary-azure)" }} />
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--foreground)" }}>Privacy & Security: </strong>
                We never share your information with third parties. This form is for initial
                contact only—do not include passwords, API keys, or other sensitive credentials.
                We'll discuss secure information exchange during our call.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Happens Next */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              What Happens Next
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Clear, straightforward process with no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div
                className="glass p-8 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg"
                    style={{
                      background: "var(--primary-azure)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    1
                  </div>
                  <h4 style={{ color: "var(--foreground)" }}>We Review Your Request</h4>
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  A senior architect reviews your submission within 24 hours (business days). We
                  assess whether we're a good fit for your needs.
                </p>
              </div>
              {/* Connector - Desktop only */}
              <div
                className="hidden md:block absolute top-6 -right-4 w-8 h-px"
                style={{ background: "var(--border)" }}
              />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div
                className="glass p-8 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg"
                    style={{
                      background: "var(--primary-azure)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    2
                  </div>
                  <h4 style={{ color: "var(--foreground)" }}>Schedule a Discovery Call</h4>
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  If we're a potential fit, we'll send calendar options for a 30-minute technical
                  call. Expect direct questions about your architecture and requirements.
                </p>
              </div>
              {/* Connector - Desktop only */}
              <div
                className="hidden md:block absolute top-6 -right-4 w-8 h-px"
                style={{ background: "var(--border)" }}
              />
            </div>

            {/* Step 3 */}
            <div>
              <div
                className="glass p-8 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg"
                    style={{
                      background: "var(--primary-azure)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    3
                  </div>
                  <h4 style={{ color: "var(--foreground)" }}>Scope & Proposal</h4>
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  After the call, you'll receive a written statement of work with scope,
                  deliverables, timeline, and fixed pricing. No surprise fees or hourly billing.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Indicator */}
          <div className="mt-12 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border"
              style={{
                background: "var(--background-surface)",
                borderColor: "var(--border)",
              }}
            >
              <Calendar className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--foreground)" }}>Typical timeline:</strong> First
                call within 3-5 business days, proposal within 1 week of call
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Optional Context Section - Who Should Contact */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Is This a Good Fit?
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              We're selective about engagements to ensure we can deliver value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* You Should Contact Us If */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--success-muted)" }}
                >
                  <CheckCircle2 className="w-5 h-5" style={{ color: "var(--success)" }} />
                </div>
                <h3 style={{ color: "var(--foreground)" }}>You Should Contact Us If:</h3>
              </div>
              <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--success)" }}
                  />
                  <span>
                    You need Azure architecture design for a regulated industry (finance,
                    healthcare, government)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--success)" }}
                  />
                  <span>
                    You have compliance requirements (SOC 2, HIPAA, FedRAMP, PCI-DSS) that impact
                    your cloud architecture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--success)" }}
                  />
                  <span>
                    You need hybrid networking (ExpressRoute, VPN Gateway) or Entra ID (Azure AD)
                    identity architecture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--success)" }}
                  />
                  <span>
                    You want infrastructure-as-code (Terraform/Bicep) and documentation, not just
                    diagrams
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--success)" }}
                  />
                  <span>
                    You have a defined project (8-12 weeks) with clear scope and fixed budget
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--success)" }}
                  />
                  <span>
                    You value senior-level technical expertise over large consulting firm brand
                    names
                  </span>
                </li>
              </ul>
            </div>

            {/* This May Not Be a Fit If */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--destructive-muted)" }}
                >
                  <AlertCircle className="w-5 h-5" style={{ color: "var(--destructive)" }} />
                </div>
                <h3 style={{ color: "var(--foreground)" }}>This May Not Be a Fit If:</h3>
              </div>
              <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-3">
                  <AlertCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--text-tertiary)" }}
                  />
                  <span>
                    You need 24/7 managed services, ongoing operations, or break-fix support (we do
                    design and implementation, not operations)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--text-tertiary)" }}
                  />
                  <span>
                    You're looking for staff augmentation or hourly consultants (we do
                    project-based architecture work)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--text-tertiary)" }}
                  />
                  <span>
                    You need immediate delivery under 4 weeks (quality architecture and compliance
                    work requires proper discovery and design)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--text-tertiary)" }}
                  />
                  <span>
                    You need application development, custom software, or code refactoring (we focus
                    on cloud platform and infrastructure)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--text-tertiary)" }}
                  />
                  <span>
                    Your primary platform is AWS or GCP (we specialize exclusively in Azure and
                    hybrid scenarios)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--text-tertiary)" }}
                  />
                  <span>
                    You're exploring options without budget approval or timeline commitment (we work
                    with committed projects)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Still Not Sure */}
          <div
            className="mt-8 p-6 rounded-lg border-l-4 text-center"
            style={{
              background: "var(--background-elevated)",
              borderLeftColor: "var(--primary-azure)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--foreground)" }}>Still not sure?</strong> Fill out the
              form anyway. We'll have an honest conversation about whether we can help or recommend
              alternatives if we're not the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Footer CTA / Reassurance */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div
            className="glass-strong p-8 sm:p-12 rounded-2xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="mb-6">
              <div
                className="inline-flex w-16 h-16 rounded-xl items-center justify-center mb-4"
                style={{ background: "var(--primary-azure)" }}
              >
                <Shield className="w-8 h-8" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h3 className="mb-3" style={{ color: "var(--foreground)" }}>
                Confidential & Professional
              </h3>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                All discussions are confidential. We understand the sensitivity of regulated
                environments and treat all information with appropriate discretion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center gap-2">
                <Lock className="w-6 h-6 mb-2" style={{ color: "var(--accent-teal)" }} />
                <h5 className="text-sm" style={{ color: "var(--foreground)" }}>
                  NDA Available
                </h5>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  We can sign your NDA before detailed discussions
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FileText className="w-6 h-6 mb-2" style={{ color: "var(--accent-teal)" }} />
                <h5 className="text-sm" style={{ color: "var(--foreground)" }}>
                  No Spam
                </h5>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  We don't add you to mailing lists or share your contact
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-6 h-6 mb-2" style={{ color: "var(--accent-teal)" }} />
                <h5 className="text-sm" style={{ color: "var(--foreground)" }}>
                  No Pressure
                </h5>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  If we're not a fit, we'll tell you directly and honestly
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8">
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
              Prefer email?{" "}
              <a
                href="mailto:info@defaultroute.advisory"
                className="underline"
                style={{ color: "var(--primary-cyan)" }}
              >
                info@defaultroute.advisory
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}