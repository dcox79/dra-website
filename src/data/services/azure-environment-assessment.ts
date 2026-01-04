export const azureEnvironmentAssessment = {
  title: "Azure Environment Assessment",
  subtitle: "Comprehensive security, compliance, and architecture review",
  description: "In-depth analysis of your Azure infrastructure with actionable remediation roadmap.",

  qualificationPoints: [
    "You have an existing Azure environment with production workloads",
    "You need to validate security posture against industry frameworks (SOC 2, HIPAA, FedRAMP)",
    "You're experiencing challenges with access management or network segmentation",
    "You require documentation for compliance audits or internal governance",
    "You're planning a merger, acquisition, or major infrastructure change",
  ],

  scopeItems: [
    "Identity and access architecture review (Entra ID, RBAC, PIM)",
    "Network topology analysis (VNets, subnets, NSGs, routing)",
    "Security controls evaluation (Security Center, Defender, Sentinel)",
    "Compliance framework mapping and gap analysis",
    "Cost optimization opportunities and resource tagging",
    "Disaster recovery and business continuity readiness",
  ],

  approachPhases: [
    {
      title: "Discovery & Data Collection",
      description: "Automated scanning of Azure subscriptions, resource inventory, policy evaluation, and stakeholder interviews to understand business context and compliance requirements.",
    },
    {
      title: "Analysis & Risk Assessment",
      description: "Security posture evaluation, compliance gap identification, architecture review against Azure Well-Architected Framework, and cost optimization analysis.",
    },
    {
      title: "Documentation & Reporting",
      description: "Comprehensive findings report with risk ratings, remediation roadmap with prioritized actions, architecture diagrams, and compliance matrix.",
    },
    {
      title: "Knowledge Transfer",
      description: "Executive summary presentation, technical deep-dive session, Q&A with your team, and 30-day post-engagement support for clarifications.",
    },
  ],

  deliverables: [
    "Executive Summary (5-10 pages) with high-level findings and risk assessment",
    "Detailed Technical Report (40-60 pages) covering all assessment areas",
    "Prioritized Remediation Roadmap with effort estimates and risk reduction",
    "Current-State Architecture Diagrams (network, identity, security)",
    "Compliance Gap Analysis Matrix mapped to your required frameworks",
    "Infrastructure-as-Code Templates for quick wins and standard configurations",
  ],

  included: [
    "Unlimited Azure subscriptions and resource groups",
    "All standard Azure services (Compute, Network, Storage, Database, Identity)",
    "Compliance framework mapping (SOC 2, HIPAA, ISO 27001, NIST, FedRAMP)",
    "Cost optimization analysis and recommendations",
    "Two stakeholder interview sessions",
    "Executive and technical presentation of findings",
    "30-day post-engagement email support",
  ],

  notIncluded: [
    "Third-party SaaS integrations or non-Azure cloud platforms",
    "Application code review or penetration testing",
    "Implementation of remediation recommendations",
    "Ongoing managed services or monitoring",
    "Legal or regulatory compliance certification",
    "Custom compliance framework development",
  ],

  outcomes: [
    "Clear understanding of current security posture and risk exposure",
    "Actionable roadmap to address compliance gaps and security vulnerabilities",
    "Documented architecture for audit preparation and stakeholder communication",
    "Prioritized list of cost optimization opportunities",
    "Confidence in disaster recovery and business continuity capabilities",
    "Foundation for future Azure governance and scaling decisions",
  ],

  faqs: [
    {
      question: "How long does the assessment take?",
      answer: "Typically 2-3 weeks from kickoff to final deliverable, depending on environment complexity and stakeholder availability. We'll provide a detailed timeline during the scoping call.",
    },
    {
      question: "What access do you need to our Azure environment?",
      answer: "Read-only access at the subscription level via a dedicated service principal. We provide a detailed permissions list and can work within your security constraints. No write access is required.",
    },
    {
      question: "Can you assess multi-cloud or hybrid environments?",
      answer: "This assessment focuses on Azure. For hybrid scenarios with on-premises infrastructure connected via ExpressRoute or VPN, we can review the connectivity and integration points. Separate assessments are available for AWS or GCP.",
    },
    {
      question: "Do you provide remediation implementation?",
      answer: "This assessment delivers findings and recommendations only. Implementation services are available as a separate engagement. We can provide estimated effort and work with your team or implement on your behalf.",
    },
    {
      question: "What compliance frameworks do you support?",
      answer: "We map findings to SOC 2, HIPAA, ISO 27001, NIST 800-53, FedRAMP, and PCI DSS. Custom frameworks can be accommodated with advance notice. We do not provide formal compliance certification.",
    },
  ],
};
