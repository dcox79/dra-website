export const azureLandingZones = {
  title: "Azure Landing Zones",
  subtitle: "Enterprise-grade foundation for scalable and compliant Azure deployments",
  description: "Production-ready Azure environment with governance, security, and networking best practices built in.",

  qualificationPoints: [
    "You're starting a new Azure deployment or migrating from on-premises",
    "You need multi-subscription architecture with centralized governance",
    "You require compliance controls from day one (SOC 2, HIPAA, regulated industries)",
    "You want Infrastructure-as-Code for repeatability and version control",
    "You're planning to scale Azure across multiple teams or business units",
  ],

  scopeItems: [
    "Hub-spoke network topology with centralized connectivity",
    "Management group hierarchy and subscription organization",
    "Azure Policy enforcement for security and compliance baselines",
    "Identity architecture with Entra ID integration and RBAC",
    "Centralized logging and monitoring (Log Analytics, Sentinel)",
    "Cost management and resource tagging strategy",
  ],

  approachPhases: [
    {
      title: "Requirements Gathering",
      description: "Workshops to understand business requirements, compliance needs, network architecture, identity integration, and scalability goals. Define naming conventions and tagging standards.",
    },
    {
      title: "Design & Architecture",
      description: "Landing zone blueprint design including network topology, subscription model, policy framework, and RBAC structure. Review and approval with stakeholders.",
    },
    {
      title: "Infrastructure Deployment",
      description: "Terraform or Bicep implementation of core infrastructure, network connectivity, policy assignments, monitoring configuration, and security baselines.",
    },
    {
      title: "Validation & Handoff",
      description: "Testing and validation of all components, documentation delivery, team training on IaC and operations, and 60-day post-deployment support.",
    },
  ],

  deliverables: [
    "Fully deployed Azure Landing Zone with hub-spoke network topology",
    "Infrastructure-as-Code (Terraform or Bicep) with version control repository",
    "Architecture Decision Records documenting design choices and rationale",
    "Network diagrams and subscription hierarchy documentation",
    "Runbook for common operational tasks and troubleshooting",
    "Azure Policy baseline with compliance framework mapping",
    "RBAC model and access management procedures",
  ],

  included: [
    "Hub subscription with shared services (connectivity, identity, management)",
    "Up to 3 spoke subscriptions for workload segregation",
    "VPN Gateway or ExpressRoute integration for hybrid connectivity",
    "Azure Policy baseline (CIS, NIST 800-53, or custom requirements)",
    "Log Analytics workspace and Azure Monitor configuration",
    "Microsoft Defender for Cloud and Sentinel setup",
    "Cost Management dashboards and budget alerts",
    "Two training sessions for your operations team",
    "60-day post-deployment support",
  ],

  notIncluded: [
    "Application workload deployment or migration",
    "ExpressRoute circuit procurement (customer responsibility)",
    "Third-party firewall or security appliances",
    "Custom application monitoring or APM configuration",
    "Ongoing managed services or 24/7 operations support",
    "Data migration from on-premises or other clouds",
  ],

  outcomes: [
    "Production-ready Azure foundation aligned with Microsoft Cloud Adoption Framework",
    "Consistent security and compliance controls across all subscriptions",
    "Scalable architecture ready for additional workloads and teams",
    "Centralized visibility and governance across Azure resources",
    "Repeatable deployment process using Infrastructure-as-Code",
    "Reduced time-to-production for future Azure workloads",
  ],

  faqs: [
    {
      question: "How long does deployment take?",
      answer: "Typical timeline is 4-6 weeks from kickoff to production handoff. This includes design workshops, implementation, testing, and training. Complexity factors include hybrid connectivity requirements and custom policy needs.",
    },
    {
      question: "Can we use our existing subscriptions?",
      answer: "Yes, we can work with existing subscriptions and refactor them into the landing zone model. This may require resource migration and network reconfiguration. We'll assess the effort during scoping.",
    },
    {
      question: "Do you support Terraform and Bicep?",
      answer: "We deliver IaC in your preferred language. Terraform is recommended for multi-cloud or advanced scenarios. Bicep is ideal for Azure-only environments. We provide modules, state management, and CI/CD integration.",
    },
    {
      question: "What if we need more than 3 spoke subscriptions?",
      answer: "Additional spoke subscriptions can be added at any time using the IaC templates we provide. We can deliver extra spokes as part of the initial deployment or provide training for your team to self-provision.",
    },
    {
      question: "Is this suitable for regulated industries?",
      answer: "Yes, we design landing zones with compliance requirements in mind. We can map controls to SOC 2, HIPAA, FedRAMP, PCI DSS, and other frameworks. Note that landing zones provide technical controls but do not guarantee certification.",
    },
  ],
};
