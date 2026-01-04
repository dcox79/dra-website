import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export function TypographyStressTest() {
  return (
    <div className="dark min-h-screen py-12" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 style={{ color: "var(--foreground)" }}>
            Typography Stress Test
          </h1>
          <p className="text-lg mt-4" style={{ color: "var(--text-secondary)" }}>
            Validates typography system under real-world conditions: long headings, dense
            technical content, wrapping behavior, and readability at scale.
          </p>
        </div>

        {/* Test Sections */}
        <div className="space-y-16">
          {/* Section 1: Very Long Headings */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 style={{ color: "var(--foreground)" }}>
                Test 1: Very Long Headings (Multi-line)
              </h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Validates line height, wrapping, and readability when headings exceed expected length.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border mb-8"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="space-y-8">
                {/* Very Long H1 */}
                <div>
                  <p className="text-xs mb-3 font-mono" style={{ color: "var(--text-tertiary)" }}>
                    &lt;h1&gt; • 2-3 line wrapping test
                  </p>
                  <h1 style={{ color: "var(--foreground)" }}>
                    Implementing Zero-Trust Azure Landing Zone Architecture with Hub-Spoke Network Topology and Full SOC 2 Type II Compliance for Regulated Financial Services Industry
                  </h1>
                </div>

                {/* Very Long H2 */}
                <div>
                  <p className="text-xs mb-3 font-mono" style={{ color: "var(--text-tertiary)" }}>
                    &lt;h2&gt; • 2-3 line wrapping test
                  </p>
                  <h2 style={{ color: "var(--foreground)" }}>
                    Azure ExpressRoute Multi-Region Failover Design Patterns with BGP Route Prioritization for Sub-10ms Latency Requirements in Trading Platforms
                  </h2>
                </div>

                {/* Very Long H3 */}
                <div>
                  <p className="text-xs mb-3 font-mono" style={{ color: "var(--text-tertiary)" }}>
                    &lt;h3&gt; • 2 line wrapping test
                  </p>
                  <h3 style={{ color: "var(--foreground)" }}>
                    Microsoft Entra ID Hybrid Identity Architecture: Comparing Password Hash Sync, Pass-Through Authentication, and Federation
                  </h3>
                </div>
              </div>
            </div>

            {/* Mobile Preview */}
            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="text-xs mb-4 font-mono" style={{ color: "var(--text-tertiary)" }}>
                Mobile Preview (max-w-md container)
              </p>
              <div className="max-w-md space-y-6">
                <h1 style={{ color: "var(--foreground)" }}>
                  Implementing Zero-Trust Azure Landing Zone Architecture with Hub-Spoke Network Topology
                </h1>
                <h2 style={{ color: "var(--foreground)" }}>
                  Azure ExpressRoute Multi-Region Failover Design Patterns with BGP Route Prioritization
                </h2>
                <h3 style={{ color: "var(--foreground)" }}>
                  Microsoft Entra ID Hybrid Identity Architecture: Comparing Password Hash Sync and Pass-Through Authentication
                </h3>
              </div>
            </div>
          </section>

          {/* Section 2: Very Short Headings */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 style={{ color: "var(--foreground)" }}>
                Test 2: Very Short Headings
              </h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Ensures proper spacing and visual hierarchy with minimal content.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-xs mb-3 font-mono" style={{ color: "var(--text-tertiary)" }}>
                    Single word headings
                  </p>
                  <h1 style={{ color: "var(--foreground)" }}>Azure</h1>
                  <h2 style={{ color: "var(--foreground)" }}>Security</h2>
                  <h3 style={{ color: "var(--foreground)" }}>RBAC</h3>
                  <h4 style={{ color: "var(--foreground)" }}>PIM</h4>
                </div>

                <div>
                  <p className="text-xs mb-3 font-mono" style={{ color: "var(--text-tertiary)" }}>
                    Two word headings
                  </p>
                  <h1 style={{ color: "var(--foreground)" }}>Landing Zones</h1>
                  <h2 style={{ color: "var(--foreground)" }}>Identity Access</h2>
                  <h3 style={{ color: "var(--foreground)" }}>Network Design</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Long Paragraphs */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 style={{ color: "var(--foreground)" }}>
                Test 3: Long Paragraphs
              </h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Validates body text readability across multiple lines with proper line height and spacing.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Azure Landing Zone Implementation Strategy
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Azure landing zones represent a foundational architectural pattern designed to accelerate cloud adoption while maintaining security, governance, and operational excellence from day one. The landing zone approach provides a prescriptive set of design principles, reference architectures, and implementation guidance that organizations can use to establish their Azure environment with proper segmentation, connectivity, identity, and compliance controls already in place. This is particularly critical for regulated industries where retroactive security implementations can be costly and complex. A well-designed landing zone addresses subscription topology, resource organization through management groups, identity and access management patterns, network connectivity models including hub-spoke architectures, security baseline configurations through Azure Policy, logging and monitoring strategies, and cost management frameworks. Organizations implementing landing zones should start with a discovery phase to understand current state, define target state architecture aligned with business objectives and compliance requirements, establish a migration roadmap, and implement the landing zone in phases beginning with core platform services before onboarding application workloads. The Azure Cloud Adoption Framework provides detailed guidance for landing zone design decisions including considerations for single-region versus multi-region deployments, hybrid connectivity requirements, disaster recovery objectives, and scalability planning. Success metrics should include time-to-production for new workloads, compliance audit pass rates, security incident frequency, and operational overhead reduction compared to previous infrastructure management approaches.
                  </p>
                </div>

                <div className="max-w-2xl">
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Medium Width Container (Reading Comfort Zone)
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Azure landing zones represent a foundational architectural pattern designed to accelerate cloud adoption while maintaining security, governance, and operational excellence from day one. The landing zone approach provides a prescriptive set of design principles, reference architectures, and implementation guidance that organizations can use to establish their Azure environment with proper segmentation, connectivity, identity, and compliance controls already in place. This is particularly critical for regulated industries where retroactive security implementations can be costly and complex. A well-designed landing zone addresses subscription topology, resource organization through management groups, identity and access management patterns, network connectivity models including hub-spoke architectures, security baseline configurations through Azure Policy, logging and monitoring strategies, and cost management frameworks.
                  </p>
                </div>

                <div className="max-w-md">
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Mobile Width (320-375px)
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Azure landing zones represent a foundational architectural pattern designed to accelerate cloud adoption while maintaining security, governance, and operational excellence from day one. The landing zone approach provides a prescriptive set of design principles, reference architectures, and implementation guidance that organizations can use to establish their Azure environment with proper segmentation, connectivity, identity, and compliance controls already in place.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Dense Technical Text */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 style={{ color: "var(--foreground)" }}>
                Test 4: Dense Technical Content
              </h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Tests readability with technical terms, acronyms, and code references.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    ExpressRoute BGP Configuration Requirements
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Azure ExpressRoute circuits require proper BGP AS path prepending configuration to control inbound and outbound traffic routing priorities across redundant connections. When implementing active-active ExpressRoute topologies with multiple circuits terminating in different peering locations (e.g., Equinix DC2 and Megaport SV1), organizations must configure AS path prepending on secondary circuits to ensure primary path preference during normal operations while maintaining automatic failover capability during circuit outages. The Microsoft Enterprise Edge (MSEE) routers will advertise Azure prefixes (typically 0.0.0.0/0 default route or specific service prefixes like 52.96.0.0/14 for Microsoft 365) via BGP to customer edge routers with standard AS path attributes including AS 12076 (Microsoft's ASN) in the path. Customer routers should implement route filtering using prefix lists or route maps to prevent accepting invalid prefixes that could cause asymmetric routing or connectivity issues. Additionally, BFD (Bidirectional Forwarding Detection) should be enabled on all BGP peering sessions to provide sub-second failure detection (typically 300ms detection time with 3x multiplier) rather than relying on BGP keepalive timers which default to 60-second hold time. Organizations operating in highly regulated industries must also document BGP configurations in network security architecture diagrams and include them in SOC 2 Type II audit evidence packages.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Mixed Technical and Monospace Content
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Azure Policy definitions use ARM (Azure Resource Manager) templates with JSON syntax to enforce governance rules. A typical policy definition includes properties like{" "}
                    <code
                      className="px-2 py-1 rounded"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      policyRule
                    </code>
                    ,{" "}
                    <code
                      className="px-2 py-1 rounded"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      if
                    </code>
                    ,{" "}
                    <code
                      className="px-2 py-1 rounded"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      then
                    </code>
                    , and{" "}
                    <code
                      className="px-2 py-1 rounded"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      effect
                    </code>
                    . The effect parameter controls enforcement behavior with options including{" "}
                    <code
                      className="px-2 py-1 rounded"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Deny
                    </code>
                    ,{" "}
                    <code
                      className="px-2 py-1 rounded"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Audit
                    </code>
                    ,{" "}
                    <code
                      className="px-2 py-1 rounded"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      DeployIfNotExists
                    </code>
                    , or{" "}
                    <code
                      className="px-2 py-1 rounded"
                      style={{
                        background: "var(--code-background)",
                        color: "var(--code-text)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Modify
                    </code>
                    . Organizations should start with Audit mode during implementation to identify compliance gaps before switching to Deny for enforcement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Inline Links */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 style={{ color: "var(--foreground)" }}>
                Test 5: Inline Links within Body Text
              </h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Validates link styling, hover states, and readability flow.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Azure Architecture Documentation
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    When designing Azure landing zones, architects should reference the{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      Azure Cloud Adoption Framework
                    </a>
                    {" "}as the primary source of design guidance. The framework includes detailed documentation on{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      network topology and connectivity patterns
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      identity and access management
                    </a>
                    , and{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      security baseline configurations
                    </a>
                    . Organizations should also review{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      Azure Architecture Center
                    </a>
                    {" "}for reference architectures and{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      Azure Well-Architected Framework
                    </a>
                    {" "}for operational excellence guidance.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Multiple Link Types
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Documentation references include{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      Azure Policy built-in definitions
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      Microsoft Entra ID documentation
                    </a>
                    , and{" "}
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      external resources
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    . When architecting for compliance, consult the{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      SOC 2 Trust Service Criteria mapping
                    </a>
                    {" "}and{" "}
                    <a
                      href="#"
                      className="underline transition-colors duration-200"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      HIPAA Security Rule implementation guide
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Lists and Nested Lists */}
          <section>
            <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <h2 style={{ color: "var(--foreground)" }}>
                Test 6: Lists and Nested Lists
              </h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Validates list spacing, indentation, and hierarchy readability.
              </p>
            </div>

            <div
              className="glass p-8 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="space-y-8">
                {/* Unordered List */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    Azure Landing Zone Components
                  </h3>
                  <ul className="space-y-3" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>
                        <strong style={{ color: "var(--foreground)" }}>Management Groups:</strong>{" "}
                        Hierarchical organization structure for subscriptions with inherited policy and RBAC assignments
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>
                        <strong style={{ color: "var(--foreground)" }}>Subscriptions:</strong>{" "}
                        Billing and resource containment boundaries, typically segmented by environment (dev, test, prod)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>
                        <strong style={{ color: "var(--foreground)" }}>Network Topology:</strong>{" "}
                        Hub-spoke or Virtual WAN architectures with centralized connectivity and security controls
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>
                        <strong style={{ color: "var(--foreground)" }}>Identity:</strong>{" "}
                        Microsoft Entra ID (Azure AD) integration with hybrid identity for on-premises directory synchronization
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent-teal)" }}
                      />
                      <span>
                        <strong style={{ color: "var(--foreground)" }}>Security Baseline:</strong>{" "}
                        Azure Policy initiatives, Security Center configurations, and logging infrastructure
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Nested List */}
                <div>
                  <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
                    ExpressRoute Implementation Phases
                  </h3>
                  <ul className="space-y-4" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        1
                      </div>
                      <div>
                        <strong style={{ color: "var(--foreground)" }}>Discovery and Design</strong>
                        <ul className="mt-2 ml-6 space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Document current network topology and connectivity requirements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Identify bandwidth requirements and latency SLAs for workloads</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Select ExpressRoute SKU (Local, Standard, or Premium) based on requirements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Choose peering location(s) and connectivity provider</span>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        2
                      </div>
                      <div>
                        <strong style={{ color: "var(--foreground)" }}>Circuit Provisioning</strong>
                        <ul className="mt-2 ml-6 space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Create ExpressRoute circuit in Azure portal or via Infrastructure as Code</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Provide service key to connectivity provider for circuit activation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Validate circuit provisioning state changes to "Provisioned"</span>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        3
                      </div>
                      <div>
                        <strong style={{ color: "var(--foreground)" }}>BGP Configuration and Testing</strong>
                        <ul className="mt-2 ml-6 space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Configure Microsoft peering and/or private peering based on requirements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Establish BGP sessions between customer edge routers and MSEE routers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Implement route filtering, AS path prepending, and BFD for failover</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Validate connectivity with ping tests and traceroute verification</span>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                        style={{
                          background: "var(--primary-azure)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        4
                      </div>
                      <div>
                        <strong style={{ color: "var(--foreground)" }}>Gateway Integration</strong>
                        <ul className="mt-2 ml-6 space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Create ExpressRoute gateway in Azure hub virtual network</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Link ExpressRoute circuit to virtual network gateway</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>•</span>
                            <span>Configure User Defined Routes (UDRs) for traffic steering if required</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Warning List */}
                <div
                  className="p-6 rounded-xl border-l-4"
                  style={{
                    background: "var(--background-elevated)",
                    borderLeftColor: "var(--warning)",
                    borderTopColor: "var(--border)",
                    borderRightColor: "var(--border)",
                    borderBottomColor: "var(--border)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <AlertCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--warning)" }}
                    />
                    <div>
                      <h4 className="mb-3" style={{ color: "var(--foreground)" }}>
                        Common ExpressRoute Misconfigurations
                      </h4>
                      <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <li className="flex items-start gap-2">
                          <span style={{ color: "var(--warning)" }}>1.</span>
                          <span>Incorrect BGP community tags causing asymmetric routing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span style={{ color: "var(--warning)" }}>2.</span>
                          <span>Missing or incorrect route filters on Microsoft peering</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span style={{ color: "var(--warning)" }}>3.</span>
                          <span>Inadequate gateway SKU for throughput requirements (max 10Gbps per gateway)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span style={{ color: "var(--warning)" }}>4.</span>
                          <span>BFD not enabled leading to slow failover detection (60s instead of 300ms)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Summary: Typography Metrics */}
          <section className="mt-16 pt-12 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="mb-6">
              <h2 style={{ color: "var(--foreground)" }}>
                Typography System Metrics
              </h2>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Measured values from existing design token system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Heading Metrics */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4 text-lg" style={{ color: "var(--foreground)" }}>
                  Heading Hierarchy
                </h3>
                <div className="space-y-3 text-sm font-mono">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ color: "var(--text-secondary)" }}>H1</span>
                      <span style={{ color: "var(--text-tertiary)" }}>36px / 1.25</span>
                    </div>
                    <div className="h-1 rounded" style={{ background: "var(--primary-azure)", width: "100%" }} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ color: "var(--text-secondary)" }}>H2</span>
                      <span style={{ color: "var(--text-tertiary)" }}>30px / 1.25</span>
                    </div>
                    <div className="h-1 rounded" style={{ background: "var(--primary-azure)", width: "83%" }} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ color: "var(--text-secondary)" }}>H3</span>
                      <span style={{ color: "var(--text-tertiary)" }}>24px / 1.375</span>
                    </div>
                    <div className="h-1 rounded" style={{ background: "var(--primary-azure)", width: "67%" }} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ color: "var(--text-secondary)" }}>H4</span>
                      <span style={{ color: "var(--text-tertiary)" }}>20px / 1.375</span>
                    </div>
                    <div className="h-1 rounded" style={{ background: "var(--primary-azure)", width: "56%" }} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ color: "var(--text-secondary)" }}>Body</span>
                      <span style={{ color: "var(--text-tertiary)" }}>16px / 1.625</span>
                    </div>
                    <div className="h-1 rounded" style={{ background: "var(--text-secondary)", width: "44%" }} />
                  </div>
                </div>
              </div>

              {/* Reading Metrics */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4 text-lg" style={{ color: "var(--foreground)" }}>
                  Readability Metrics
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium mb-1" style={{ color: "var(--foreground)" }}>
                      Body Line Height
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>1.625 (26px at 16px base)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: "var(--foreground)" }}>
                      Optimal Line Length
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>45-75 characters (~600-800px)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: "var(--foreground)" }}>
                      Paragraph Spacing
                    </p>
                    <p style={{ color: "var(--text-secondary)" }}>1.5rem (24px) between blocks</p>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-4 text-lg" style={{ color: "var(--foreground)" }}>
                  Accessibility
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      <p className="font-medium mb-1" style={{ color: "var(--foreground)" }}>
                        WCAG AA Contrast
                      </p>
                      <p style={{ color: "var(--text-secondary)" }}>
                        4.5:1 minimum for body text
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      <p className="font-medium mb-1" style={{ color: "var(--foreground)" }}>
                        Responsive Scaling
                      </p>
                      <p style={{ color: "var(--text-secondary)" }}>
                        Rem-based sizing adapts to user preferences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <div>
                      <p className="font-medium mb-1" style={{ color: "var(--foreground)" }}>
                        Focus Indicators
                      </p>
                      <p style={{ color: "var(--text-secondary)" }}>
                        Visible outlines on interactive text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
