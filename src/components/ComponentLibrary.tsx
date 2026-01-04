import { 
  Shield, 
  Cloud, 
  Lock, 
  FileText, 
  Settings, 
  BarChart3,
  CheckCircle2,
  Users
} from "lucide-react";
import { NavigationBar } from "./library/NavigationBar";
import { HeroSection } from "./library/HeroSection";
import { ServiceCard } from "./library/ServiceCard";
import { ResponsiveProcessTimeline } from "./library/ProcessTimeline";
import { IncludedNotIncluded } from "./library/IncludedNotIncluded";
import { DeliverablesList } from "./library/DeliverablesList";
import { FAQAccordion } from "./library/FAQAccordion";
import { CTABlock } from "./library/CTABlock";
import { FormLayout } from "./library/FormLayout";

export function ComponentLibrary() {
  // Sample data
  const processPhases = [
    {
      number: 1,
      title: "Discovery",
      description: "Initial assessment of current Azure environment, compliance requirements, and business objectives.",
      duration: "1-2 weeks"
    },
    {
      number: 2,
      title: "Design",
      description: "Architecture design with security controls, compliance mappings, and documentation.",
      duration: "2-3 weeks"
    },
    {
      number: 3,
      title: "Implementation",
      description: "Deploy infrastructure, configure security policies, and establish monitoring.",
      duration: "3-4 weeks"
    },
    {
      number: 4,
      title: "Validation",
      description: "Testing, audit preparation, knowledge transfer, and ongoing support planning.",
      duration: "1-2 weeks"
    }
  ];

  const includedItems = [
    "Azure architecture review and recommendations",
    "Security and compliance audit preparation",
    "Infrastructure-as-code templates (Terraform/Bicep)",
    "Monitoring and alerting configuration",
    "Documentation and runbooks",
    "Two weeks post-engagement support"
  ];

  const notIncludedItems = [
    "Application development or refactoring",
    "24/7 managed services or ongoing operations",
    "Third-party software licenses",
    "Training programs or certification prep",
    "Legal or compliance certification services",
    "Data migration execution"
  ];

  const deliverables = [
    {
      icon: FileText,
      title: "Architecture Documentation",
      description: "Detailed technical specifications, diagrams, and compliance mappings for your Azure environment."
    },
    {
      icon: Settings,
      title: "Infrastructure-as-Code",
      description: "Production-ready Terraform or Bicep templates with modular, reusable components."
    },
    {
      icon: Shield,
      title: "Security Baseline",
      description: "Azure Policy definitions, RBAC configurations, and security controls documentation."
    },
    {
      icon: BarChart3,
      title: "Monitoring Setup",
      description: "Azure Monitor workbooks, alert rules, and dashboard configurations for operational visibility."
    }
  ];

  const faqItems = [
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in regulated industries including finance, healthcare, and government sectors. Our team has deep experience with compliance frameworks such as SOC 2, HIPAA, FedRAMP, and PCI-DSS."
    },
    {
      question: "How long does a typical engagement last?",
      answer: "Most engagements are 8-12 weeks depending on scope and complexity. We provide a detailed timeline during the discovery phase with clear milestones and deliverables."
    },
    {
      question: "Do you provide ongoing support after the engagement?",
      answer: "All engagements include two weeks of post-implementation support. We also offer optional retainer-based advisory services for ongoing architecture guidance and troubleshooting."
    },
    {
      question: "What if our requirements change mid-engagement?",
      answer: "We work iteratively with regular check-ins. Minor scope adjustments are normal and accommodated. Major changes require a formal change request to update timeline and pricing."
    }
  ];

  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text" as const,
      placeholder: "John Smith",
      required: true
    },
    {
      id: "email",
      label: "Work Email",
      type: "email" as const,
      placeholder: "john.smith@company.com",
      required: true
    },
    {
      id: "company",
      label: "Company Name",
      type: "text" as const,
      placeholder: "Acme Corporation"
    },
    {
      id: "industry",
      label: "Industry",
      type: "select" as const,
      required: true,
      options: ["Financial Services", "Healthcare", "Government", "Technology", "Other"]
    },
    {
      id: "message",
      label: "Project Details",
      type: "textarea" as const,
      placeholder: "Describe your Azure consulting needs, compliance requirements, or specific challenges...",
      required: true,
      helpText: "Please include any relevant compliance frameworks (SOC 2, HIPAA, etc.)"
    }
  ];

  return (
    <div className="dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-24">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 style={{ color: "var(--foreground)" }}>Component Library</h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Production-ready components built with the Default Route Advisory design system.
            All components use design tokens and follow accessibility best practices.
          </p>
        </div>

        {/* 1. Navigation Bar */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>1. Navigation Bar</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Sticky navigation with brand, links, and CTA. Minimal height, no clutter.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            <NavigationBar />
          </div>
          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<NavigationBar\n  brandName="Default Route Advisory"\n  navLinks={[...]}\n  ctaLabel="Get Started"\n/>`}
            </code>
          </div>
        </section>

        {/* 2. Hero Section */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>2. Hero Section</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Large headline, subheadline, dual CTAs, optional bullets. Dark gradient with ambient elements.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            <HeroSection
              headline="Azure Cloud Consulting for Regulated Industries"
              subheadline="Expert architecture design, security hardening, and compliance guidance for finance, healthcare, and government sectors."
              bulletPoints={[
                "SOC 2, HIPAA, FedRAMP ready",
                "Infrastructure-as-code delivered",
                "Senior architect-led engagements"
              ]}
            />
          </div>
          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<HeroSection\n  headline="..."\n  subheadline="..."\n  bulletPoints={[...]}\n/>`}
            </code>
          </div>
        </section>

        {/* 3. Service Cards */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>3. Service Card</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Glass-morphism card with icon, title, description. Hover elevation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Cloud}
              title="Azure Architecture"
              description="Design scalable, secure cloud architectures optimized for regulated industries and compliance requirements."
            />
            <ServiceCard
              icon={Shield}
              title="Security & Compliance"
              description="Implement security controls, audit preparation, and compliance framework mappings for your Azure environment."
            />
            <ServiceCard
              icon={Lock}
              title="Infrastructure-as-Code"
              description="Production-ready Terraform and Bicep templates with modular, maintainable infrastructure definitions."
            />
          </div>
          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<ServiceCard\n  icon={Cloud}\n  title="Azure Architecture"\n  description="..."\n/>`}
            </code>
          </div>
        </section>

        {/* 4. Process Timeline */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>4. Process Timeline</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Numbered phases with descriptions. Horizontal on desktop, vertical on mobile.
            </p>
          </div>
          <div className="glass p-8 rounded-xl">
            <ResponsiveProcessTimeline phases={processPhases} />
          </div>
          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<ResponsiveProcessTimeline\n  phases={[\n    { number: 1, title: "Discovery", description: "...", duration: "1-2 weeks" },\n    ...\n  ]}\n/>`}
            </code>
          </div>
        </section>

        {/* 5. Included vs Not Included */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>5. Included vs Not Included</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Two-column layout with explicit scope. Reduces ambiguity and sales friction.
            </p>
          </div>
          <IncludedNotIncluded
            included={includedItems}
            notIncluded={notIncludedItems}
          />
          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<IncludedNotIncluded\n  included={[...]}\n  notIncluded={[...]}\n/>`}
            </code>
          </div>
        </section>

        {/* 6. Deliverables List */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>6. Deliverables List</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Icon + title + description. Clearly scannable, technical tone.
            </p>
          </div>
          <DeliverablesList deliverables={deliverables} columns={2} />
          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<DeliverablesList\n  deliverables={[\n    { icon: FileText, title: "...", description: "..." },\n    ...\n  ]}\n  columns={2}\n/>`}
            </code>
          </div>
        </section>

        {/* 7. FAQ Accordion */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>7. FAQ Accordion</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Keyboard accessible with clear expand/collapse affordances. Minimal animation.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<FAQAccordion\n  items={[\n    { question: "...", answer: "..." },\n    ...\n  ]}\n/>`}
            </code>
          </div>
        </section>

        {/* 8. CTA Block */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>8. CTA Block</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Visually distinct section with summary and CTA. Two variants: default and prominent.
            </p>
          </div>
          
          {/* Default Variant */}
          <div>
            <h5 className="mb-4" style={{ color: "var(--text-secondary)" }}>Default Variant</h5>
            <CTABlock
              title="Ready to secure your Azure environment?"
              description="Schedule a consultation to discuss your compliance requirements and architecture needs."
              variant="default"
            />
          </div>

          {/* Prominent Variant */}
          <div>
            <h5 className="mb-4" style={{ color: "var(--text-secondary)" }}>Prominent Variant</h5>
            <CTABlock
              title="Start your Azure transformation today"
              description="Expert guidance for regulated industries. SOC 2, HIPAA, and FedRAMP ready."
              ctaLabel="Schedule Consultation"
              variant="prominent"
            />
          </div>

          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<CTABlock\n  title="..."\n  description="..."\n  variant="prominent"\n/>`}
            </code>
          </div>
        </section>

        {/* 9. Form Layout */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2" style={{ color: "var(--foreground)" }}>9. Form Layout</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Clean, professional forms with clear labels and validation affordances. Supports 1 or 2 column layouts.
            </p>
          </div>
          <div className="glass p-8 rounded-xl">
            <FormLayout
              fields={formFields}
              submitLabel="Request Consultation"
              columns={2}
            />
          </div>
          <div className="glass p-4 rounded-lg">
            <code className="text-xs" style={{ color: "var(--code-text)" }}>
              {`<FormLayout\n  fields={[\n    { id: "name", label: "Full Name", type: "text", required: true },\n    ...\n  ]}\n  columns={2}\n/>`}
            </code>
          </div>
        </section>

        {/* Component Props Documentation */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>Component Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "var(--accent-teal)" }} />
                <div>
                  <h5 className="mb-2">Design Token Based</h5>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    All colors, spacing, and typography use CSS custom properties from globals.css
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "var(--accent-teal)" }} />
                <div>
                  <h5 className="mb-2">Fully Typed</h5>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    TypeScript interfaces for all props with optional and required parameters
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "var(--accent-teal)" }} />
                <div>
                  <h5 className="mb-2">Accessible</h5>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    WCAG AA compliant with keyboard navigation and ARIA attributes
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: "var(--accent-teal)" }} />
                <div>
                  <h5 className="mb-2">Responsive</h5>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Mobile-first approach with breakpoints for tablet and desktop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
