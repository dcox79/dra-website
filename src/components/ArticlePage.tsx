import { Clock, User, Calendar, ArrowLeft, BookOpen, Share2 } from "lucide-react";
import { NavigationBar } from "./library/NavigationBar";
import { CTABlock } from "./library/CTABlock";
import { Footer } from "./library/Footer";
import { Breadcrumb } from "./library/Breadcrumb";

export function ArticlePage() {
  // This data would typically come from MDX or CMS
  const article = {
    title: "Azure Landing Zones for HIPAA Compliance: A Technical Implementation Guide",
    category: "Azure Architecture",
    categoryHref: "#resources-azure-architecture",
    author: "Default Route Advisory",
    publishDate: "December 15, 2025",
    readTime: "12 min read",
    summary:
      "A practical guide to implementing Azure landing zones that meet HIPAA Security Rule requirements, with infrastructure-as-code examples and compliance mapping.",
    content: [
      {
        type: "paragraph",
        text: "Healthcare organizations moving to Azure face a critical challenge: how to design cloud infrastructure that meets HIPAA Security Rule requirements while remaining operationally maintainable. This guide walks through a proven landing zone architecture used in production HIPAA environments.",
      },
      {
        type: "heading",
        text: "Why Standard Azure Landing Zones Fall Short for HIPAA",
      },
      {
        type: "paragraph",
        text: "Microsoft's Cloud Adoption Framework provides excellent landing zone guidance for general enterprise scenarios, but it doesn't address specific HIPAA control requirements. Healthcare organizations need additional security controls, audit logging, and access restrictions that go beyond the standard reference architectures.",
      },
      {
        type: "heading",
        text: "Key HIPAA Requirements That Impact Architecture",
      },
      {
        type: "list",
        items: [
          "Encryption at rest and in transit for all PHI (164.312(a)(2)(iv) and 164.312(e)(2)(ii))",
          "Access controls with audit trails (164.312(a)(1) and 164.312(b))",
          "Workload isolation to limit PHI exposure (164.308(a)(4)(ii)(A))",
          "Centralized logging and monitoring (164.308(a)(1)(ii)(D))",
          "Business Associate Agreements (BAAs) with cloud providers",
        ],
      },
      {
        type: "heading",
        text: "Hub-Spoke Topology for HIPAA Workloads",
      },
      {
        type: "paragraph",
        text: "The hub-spoke model provides the network isolation and centralized security controls HIPAA environments require. The hub VNet contains shared security services (Azure Firewall, VPN Gateway, logging), while spoke VNets isolate workload tiers (production, staging, shared services).",
      },
      {
        type: "heading",
        text: "Critical Security Controls",
      },
      {
        type: "paragraph",
        text: "Azure Policy becomes your enforcement mechanism. Instead of documenting compliance violations after deployment, you prevent non-compliant resources from being created. Key policies include: deny unencrypted storage accounts, deny public endpoints for PaaS services, audit VM configurations without Azure AD integration, require specific NSG rules for PHI workloads.",
      },
      {
        type: "heading",
        text: "Identity and Access Management",
      },
      {
        type: "paragraph",
        text: "Hybrid identity with Entra ID (Azure AD) is essential. Most healthcare organizations have on-premises Active Directory with years of technical debt. Password hash sync with seamless SSO provides cloud authentication without requiring federation infrastructure, reducing complexity while maintaining security.",
      },
      {
        type: "heading",
        text: "Logging and Audit Requirements",
      },
      {
        type: "paragraph",
        text: "HIPAA requires audit trails for all access to PHI. Configure Log Analytics with retention policies that meet your compliance requirements (typically 90 days minimum, often 6+ years for long-term audit). Enable Defender for Cloud, diagnostic settings on all Azure resources, and activity logs for subscription-level changes.",
      },
      {
        type: "heading",
        text: "Infrastructure-as-Code Considerations",
      },
      {
        type: "paragraph",
        text: "Terraform or Bicep modules should enforce security defaults. Storage accounts default to encryption with customer-managed keys, VNets default to forced tunneling through Azure Firewall, and PaaS services default to Private Endpoints. Make the secure choice the easy choice.",
      },
      {
        type: "heading",
        text: "Common Mistakes to Avoid",
      },
      {
        type: "list",
        items: [
          "Over-engineering with ExpressRoute when VPN Gateway meets requirements and budget",
          "Implementing federation (ADFS) when password hash sync is sufficient and simpler",
          "Treating documentation as a nice-to-have instead of a compliance deliverable",
          "Assuming Microsoft's BAA covers all HIPAA obligations (it doesn't—you're still responsible for configuration)",
          "Deploying Azure Policy in audit-only mode instead of deny mode (enforcement prevents problems)",
        ],
      },
      {
        type: "heading",
        text: "Operational Considerations",
      },
      {
        type: "paragraph",
        text: "Landing zones must be operationally sustainable by your IT team. Small healthcare organizations often lack Azure expertise. Design for simplicity: clear documentation, runbooks for common tasks, and automation that reduces manual intervention. The best architecture is one your team can actually maintain.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "HIPAA-compliant Azure landing zones require thoughtful architecture that balances security requirements, operational reality, and budget constraints. Focus on enforcement through Azure Policy, hybrid identity simplicity, and comprehensive audit logging. Documentation isn't optional—it's a first-class deliverable that directly contributes to passing audits.",
      },
    ],
    relatedArticles: [
      {
        title: "Hybrid Identity Patterns: When to Use Password Hash Sync vs Federation",
        category: "Identity & Access",
        readTime: "8 min read",
        href: "#article-hybrid-identity",
      },
      {
        title: "Azure Policy Enforcement vs Audit Mode: A Compliance Perspective",
        category: "Security & Compliance",
        readTime: "6 min read",
        href: "#article-azure-policy",
      },
      {
        title: "VPN Gateway vs ExpressRoute: A Cost-Benefit Analysis for Regulated Industries",
        category: "Networking & Connectivity",
        readTime: "10 min read",
        href: "#article-vpn-expressroute",
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
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Resources", href: "#resources" },
              { label: article.category, href: article.categoryHref },
              { label: article.title },
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <section
        className="py-12 sm:py-16"
        style={{
          background: `linear-gradient(to bottom, var(--background) 0%, var(--background-elevated) 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Back Link */}
          <a
            href="#resources"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors focus:outline-none focus:underline"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </a>

          {/* Category Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-6"
            style={{
              background: "var(--primary-azure)",
              color: "var(--primary-foreground)",
            }}
          >
            <BookOpen className="w-3 h-3" />
            {article.category}
          </div>

          {/* Title */}
          <h1 className="mb-6" style={{ color: "var(--foreground)" }}>
            {article.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" style={{ color: "var(--text-tertiary)" }} />
              <span style={{ color: "var(--text-secondary)" }}>{article.author}</span>
            </div>
            <span style={{ color: "var(--text-tertiary)" }}>•</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: "var(--text-tertiary)" }} />
              <span style={{ color: "var(--text-secondary)" }}>{article.publishDate}</span>
            </div>
            <span style={{ color: "var(--text-tertiary)" }}>•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: "var(--text-tertiary)" }} />
              <span style={{ color: "var(--text-secondary)" }}>{article.readTime}</span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            {article.summary}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 sm:py-16" style={{ background: "var(--background)" }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="prose prose-invert max-w-none">
            {article.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="mt-12 mb-4"
                    style={{ color: "var(--foreground)" }}
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="mb-6 text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === "list" && block.items) {
                return (
                  <ul key={index} className="mb-6 space-y-3">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-lg">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-3 flex-shrink-0"
                          style={{ background: "var(--primary-azure)" }}
                        />
                        <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>

          {/* Share Section */}
          <div
            className="mt-16 pt-8 border-t"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                Found this helpful? Share it with your team.
              </p>
              <button
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background-surface)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary-azure)";
                  e.currentTarget.style.color = "var(--foreground)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="mb-8" style={{ color: "var(--foreground)" }}>
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {article.relatedArticles.map((related, index) => (
              <a
                key={index}
                href={related.href}
                className="glass p-6 rounded-xl border block transition-all motion-card-hover"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="inline-flex px-2 py-1 rounded text-xs mb-4"
                  style={{
                    background: "var(--primary-azure)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  {related.category}
                </div>
                <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                  {related.title}
                </h4>
                <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                  {related.readTime}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <CTABlock
            title="Need Help Implementing Azure Landing Zones?"
            description="We design and implement production-ready Azure architectures for regulated industries. Get a fixed-price proposal with clear deliverables and timeline."
            ctaLabel="Schedule a Discovery Call"
            ctaHref="#contact"
            variant="prominent"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
