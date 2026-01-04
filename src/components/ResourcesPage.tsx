import { useState } from "react";
import {
  Shield,
  Cloud,
  Network,
  Lock,
  FileText,
  BookOpen,
  Code,
  GitBranch,
} from "lucide-react";
import { NavigationBar } from "./library/NavigationBar";
import { ArticleCard } from "./library/ArticleCard";
import { CTABlock } from "./library/CTABlock";
import { Footer } from "./library/Footer";

interface ResourcesPageProps {
  variant?: "populated" | "empty";
}

export function ResourcesPage({ variant = "populated" }: ResourcesPageProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "all",
      label: "All Resources",
      icon: BookOpen,
      description: "Browse all articles and guides",
    },
    {
      id: "azure-architecture",
      label: "Azure Architecture",
      icon: Cloud,
      description: "Landing zones, CAF, enterprise-scale patterns",
    },
    {
      id: "identity-access",
      label: "Identity & Access",
      icon: Shield,
      description: "Entra ID, hybrid identity, RBAC, PIM",
    },
    {
      id: "networking",
      label: "Networking & Connectivity",
      icon: Network,
      description: "Hub-spoke, ExpressRoute, VPN Gateway, DNS",
    },
    {
      id: "security-compliance",
      label: "Security & Compliance",
      icon: Lock,
      description: "Azure Policy, Defender, audit frameworks",
    },
  ];

  // Sample articles - in production, these would come from MDX files
  const articles = variant === "empty" ? [] : [
    {
      id: 1,
      title: "Building Azure Landing Zones for SOC 2 Compliance",
      description:
        "A technical walkthrough of implementing Azure landing zones with security controls mapped to SOC 2 Trust Service Criteria. Covers hub-spoke networking, Azure Policy baselines, and audit evidence automation.",
      category: "Azure Architecture",
      categoryId: "azure-architecture",
      readTime: "12 min read",
      date: "Jan 15, 2026",
      href: "#article-landing-zones-soc2",
      variant: "featured" as const,
    },
    {
      id: 2,
      title: "Entra ID Hybrid Identity Architecture Patterns",
      description:
        "Comparing password hash sync, pass-through authentication, and federation for hybrid identity. Real-world trade-offs for regulated environments.",
      category: "Identity & Access",
      categoryId: "identity-access",
      readTime: "8 min read",
      date: "Jan 10, 2026",
      href: "#article-hybrid-identity",
    },
    {
      id: 3,
      title: "ExpressRoute Design for Multi-Region Deployments",
      description:
        "Technical considerations for ExpressRoute circuit design, peering configurations, and failover patterns across Azure regions.",
      category: "Networking & Connectivity",
      categoryId: "networking",
      readTime: "10 min read",
      date: "Jan 5, 2026",
      href: "#article-expressroute",
    },
    {
      id: 4,
      title: "Azure Policy as Code with Terraform",
      description:
        "Implementing Azure Policy definitions, initiatives, and assignments using Terraform. Includes governance patterns and remediation strategies.",
      category: "Security & Compliance",
      categoryId: "security-compliance",
      readTime: "15 min read",
      date: "Dec 28, 2025",
      href: "#article-policy-terraform",
    },
    {
      id: 5,
      title: "Private DNS Zones in Hub-Spoke Networks",
      description:
        "DNS resolution patterns for Azure Private Endpoints and hybrid scenarios. Covers DNS forwarding, conditional forwarders, and split-brain DNS.",
      category: "Networking & Connectivity",
      categoryId: "networking",
      readTime: "7 min read",
      date: "Dec 20, 2025",
      href: "#article-private-dns",
    },
    {
      id: 6,
      title: "RBAC vs Azure AD PIM: When to Use Which",
      description:
        "Comparing static role assignments with Privileged Identity Management. Covers just-in-time access, approval workflows, and audit requirements.",
      category: "Identity & Access",
      categoryId: "identity-access",
      readTime: "6 min read",
      date: "Dec 15, 2025",
      href: "#article-rbac-pim",
    },
    {
      id: 7,
      title: "Infrastructure-as-Code Repository Structure",
      description:
        "Organizing Terraform repositories for Azure landing zones. Module patterns, state management, and CI/CD integration for enterprise deployments.",
      category: "Azure Architecture",
      categoryId: "azure-architecture",
      readTime: "9 min read",
      date: "Dec 10, 2025",
      href: "#article-iac-structure",
    },
    {
      id: 8,
      title: "Microsoft Defender for Cloud Configuration",
      description:
        "Baseline security posture configuration using Defender for Cloud. Covers recommendations, secure score optimization, and regulatory compliance dashboards.",
      category: "Security & Compliance",
      categoryId: "security-compliance",
      readTime: "8 min read",
      date: "Dec 5, 2025",
      href: "#article-defender-cloud",
    },
    {
      id: 9,
      title: "Service Endpoints vs Private Endpoints",
      description:
        "Technical comparison of Azure network security options for PaaS services. When to use service endpoints, when private endpoints are required.",
      category: "Networking & Connectivity",
      categoryId: "networking",
      readTime: "5 min read",
      date: "Nov 28, 2025",
      href: "#article-endpoints",
    },
    {
      id: 10,
      title: "Conditional Access Policy Patterns",
      description:
        "Implementing Zero Trust controls with Entra ID Conditional Access. MFA enforcement, device compliance, and risk-based policies for regulated industries.",
      category: "Identity & Access",
      categoryId: "identity-access",
      readTime: "11 min read",
      date: "Nov 20, 2025",
      href: "#article-conditional-access",
    },
    {
      id: 11,
      title: "Azure Bicep vs Terraform: A Pragmatic Comparison",
      description:
        "Side-by-side technical comparison of Azure Bicep and Terraform for infrastructure-as-code. Real-world trade-offs, not marketing claims.",
      category: "Azure Architecture",
      categoryId: "azure-architecture",
      readTime: "10 min read",
      date: "Nov 15, 2025",
      href: "#article-bicep-terraform",
    },
    {
      id: 12,
      title: "HIPAA Compliance Mapping for Azure",
      description:
        "Mapping HIPAA Security Rule requirements to Azure security controls. Technical implementation guidance for healthcare workloads.",
      category: "Security & Compliance",
      categoryId: "security-compliance",
      readTime: "13 min read",
      date: "Nov 10, 2025",
      href: "#article-hipaa-mapping",
    },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.categoryId === activeCategory);

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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 text-center">
          <h1 className="mb-4" style={{ color: "var(--foreground)" }}>
            Azure Architecture Resources
          </h1>

          <p
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Practical guidance on Azure landing zones, identity management, hybrid networking, and
            compliance. Real-world lessons from production deployments, not marketing content.
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
              <span style={{ color: "var(--text-secondary)" }}>
                {articles.length} technical articles
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
              <span style={{ color: "var(--text-secondary)" }}>Infrastructure-as-code examples</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" style={{ color: "var(--accent-teal)" }} />
              <span style={{ color: "var(--text-secondary)" }}>Production-tested patterns</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Resource Categories */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Browse by Category
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Filter resources by topic area or browse all content.
            </p>
          </div>

          {/* Category Filters - Mobile Dropdown, Desktop Tabs */}
          <div className="mb-12">
            {/* Mobile Select */}
            <div className="md:hidden mb-6">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border glass text-sm"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  background: "var(--background-elevated)",
                }}
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Cards */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`glass p-4 rounded-xl border text-left transition-all motion-card-hover ${
                      isActive ? "ring-2" : ""
                    }`}
                    style={{
                      borderColor: isActive ? "var(--primary-azure)" : "var(--border)",
                      background: isActive
                        ? "var(--background-elevated)"
                        : "var(--background-surface)",
                      ringColor: "var(--primary-azure)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{
                        background: isActive ? "var(--primary-azure)" : "var(--background-elevated)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{
                          color: isActive
                            ? "var(--primary-foreground)"
                            : "var(--text-secondary)",
                        }}
                      />
                    </div>
                    <h4 className="text-sm mb-1" style={{ color: "var(--foreground)" }}>
                      {cat.label}
                    </h4>
                    <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                      {cat.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Info */}
          {activeCategory !== "all" && (
            <div
              className="mb-8 p-4 rounded-lg border-l-4"
              style={{
                background: "var(--background-elevated)",
                borderLeftColor: "var(--primary-azure)",
              }}
            >
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Showing <strong style={{ color: "var(--foreground)" }}>{filteredArticles.length}</strong>{" "}
                {filteredArticles.length === 1 ? "article" : "articles"} in{" "}
                <strong style={{ color: "var(--foreground)" }}>
                  {categories.find((c) => c.id === activeCategory)?.label}
                </strong>
                .{" "}
                <button
                  onClick={() => setActiveCategory("all")}
                  className="underline"
                  style={{ color: "var(--primary-cyan)" }}
                >
                  Show all
                </button>
              </p>
            </div>
          )}

          {/* 3. Resource List / Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  readTime={article.readTime}
                  date={article.date}
                  href={article.href}
                  variant={article.variant}
                />
              ))}
            </div>
          ) : variant === "empty" ? (
            <div
              className="text-center py-20 glass rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <p style={{ color: "var(--text-secondary)" }}>
                Technical articles will be published here.
              </p>
              <p className="text-sm mt-2" style={{ color: "var(--text-tertiary)" }}>
                Check back soon for Azure architecture guidance and compliance patterns.
              </p>
              <a
                href="#contact"
                className="inline-block mt-6 text-sm underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Contact us
              </a>
            </div>
          ) : (
            <div
              className="text-center py-16 glass rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Callout Section - Related Services */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--background-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div
            className="glass-strong p-8 sm:p-12 rounded-2xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
                Need Implementation Support?
              </h2>
              <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
                These resources cover technical patterns we implement in client engagements. If
                you're facing compliance deadlines, audit requirements, or hybrid architecture
                complexity, we can help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border motion-button-lift"
                  style={{
                    background: "var(--primary-azure)",
                    borderColor: "var(--primary-azure)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  View Service Offerings
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border motion-button-lift"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  Schedule Discovery Call
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
              All articles include code examples and architectural diagrams where applicable.
              <br />
              Content is updated regularly based on Azure platform changes and client engagement
              learnings.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Reference Section */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "var(--foreground)" }}>
              Common Topics
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Quick reference guide to frequently covered technical areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Azure Architecture Topics */}
            <div
              className="glass p-6 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--primary-azure)" }}
              >
                <Cloud className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                Azure Architecture
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>• Landing zones (CAF)</li>
                <li>• Hub-spoke topology</li>
                <li>• Subscription design</li>
                <li>• Management groups</li>
                <li>• Azure Blueprints</li>
              </ul>
            </div>

            {/* Identity Topics */}
            <div
              className="glass p-6 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--accent-teal)" }}
              >
                <Shield className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                Identity & Access
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>• Entra ID (Azure AD)</li>
                <li>• Hybrid identity patterns</li>
                <li>• RBAC design</li>
                <li>• Privileged Identity Management</li>
                <li>• Conditional Access</li>
              </ul>
            </div>

            {/* Networking Topics */}
            <div
              className="glass p-6 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--primary-cyan)" }}
              >
                <Network className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                Networking
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>• ExpressRoute design</li>
                <li>• VPN Gateway patterns</li>
                <li>• Private Endpoints</li>
                <li>• Azure DNS configuration</li>
                <li>• Network Security Groups</li>
              </ul>
            </div>

            {/* Security Topics */}
            <div
              className="glass p-6 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--primary-azure)" }}
              >
                <Lock className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                Security & Compliance
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>• Azure Policy as Code</li>
                <li>• Defender for Cloud</li>
                <li>• SOC 2 / HIPAA / FedRAMP</li>
                <li>• Compliance frameworks</li>
                <li>• Audit automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}