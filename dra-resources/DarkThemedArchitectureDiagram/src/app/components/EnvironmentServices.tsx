import { Database, Server, Shield, Lock, Users, Globe, Network, Layers, Container, Workflow, ShieldCheck, DatabaseZap } from 'lucide-react';

export type EnvironmentType = 'development' | 'production' | 'dr';

export interface ServiceConfig {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  color: string;
  description: string;
  features: string[];
  environments: EnvironmentType[];
}

export const getServicesForEnvironment = (environment: EnvironmentType) => {
  const allServices = {
    identity: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Azure Active Directory",
        subtitle: environment === 'development' ? "Basic SSO" : "Enterprise SSO & MFA",
        color: "purple",
        description: environment === 'development' 
          ? "Basic Azure AD configuration for development testing with SSO."
          : "Azure Active Directory provides enterprise-grade identity and access management with advanced security features.",
        features: environment === 'development'
          ? ["Basic SSO", "User management", "Dev/Test groups"]
          : ["Single Sign-On (SSO)", "Multi-Factor Authentication (MFA)", "User and group management", "Conditional access policies"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Azure AD B2C",
        subtitle: "Customer Identity",
        color: "purple",
        description: "Azure AD B2C manages customer identities with customizable authentication flows.",
        features: environment === 'production' || environment === 'dr'
          ? ["Customer sign-up and sign-in", "Profile management", "Social identity providers", "Customizable user flows"]
          : ["Basic customer auth", "Profile management"],
        environments: ['production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Lock className="w-5 h-5" />,
        title: "Privileged Identity Mgmt",
        subtitle: "JIT Access Control",
        color: "purple",
        description: "PIM provides just-in-time privileged access for administrative tasks.",
        features: ["Just-in-time (JIT) access", "Role-based access control (RBAC)", "Access reviews", "Audit logs"],
        environments: ['production', 'dr'] as EnvironmentType[]
      }
    ],
    security: [
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Azure Security Center",
        subtitle: environment === 'development' ? "Basic Protection" : "Threat Protection",
        color: "red",
        description: "Azure Security Center provides unified security management and threat protection.",
        features: environment === 'development'
          ? ["Basic security monitoring", "Vulnerability scanning"]
          : ["Threat detection and response", "Vulnerability assessment", "Security policy enforcement", "Compliance management"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Lock className="w-5 h-5" />,
        title: "Key Vault",
        subtitle: "Secrets Management",
        color: "red",
        description: environment === 'dr' 
          ? "Geo-replicated Key Vault with automatic failover for secrets and keys."
          : "Azure Key Vault securely stores and manages sensitive information.",
        features: environment === 'dr'
          ? ["Geo-replication", "Automatic failover", "Secrets management", "HSM-backed keys"]
          : ["Secrets management", "Key management", "Certificate management", "Access control"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Azure Sentinel",
        subtitle: "SIEM & SOAR",
        color: "red",
        description: "Cloud-native SIEM solution for intelligent security analytics.",
        features: ["Threat detection and response", "Security orchestration", "Incident management", "Compliance reporting"],
        environments: ['production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "DDoS Protection",
        subtitle: environment === 'development' ? "Basic" : "Premium",
        color: "red",
        description: environment === 'development'
          ? "Basic DDoS protection for development environments."
          : "Premium DDoS Protection with real-time monitoring and mitigation.",
        features: environment === 'development'
          ? ["Basic DDoS protection", "Traffic monitoring"]
          : ["Advanced DDoS protection", "Traffic filtering", "Real-time mitigation", "Attack analytics"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      }
    ],
    network: [
      {
        icon: <Network className="w-5 h-5" />,
        title: "Azure Virtual Network",
        subtitle: environment === 'dr' ? "Geo-Redundant VNet" : "Private Network",
        color: "cyan",
        description: environment === 'dr'
          ? "Geo-redundant virtual network with cross-region peering for disaster recovery."
          : "Azure VNet provides private network isolation for your resources.",
        features: environment === 'dr'
          ? ["Multi-region deployment", "Cross-region peering", "Automatic failover", "NSG replication"]
          : ["Private network isolation", "Subnet management", "Network security groups", "VNet peering"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Application Gateway",
        subtitle: environment === 'dr' ? "Multi-Region LB" : "Load Balancer & WAF",
        color: "cyan",
        description: environment === 'dr'
          ? "Multi-region application gateway with automatic failover capabilities."
          : "Application Gateway provides load balancing and web application firewall.",
        features: environment === 'development'
          ? ["Basic load balancing", "SSL termination"]
          : environment === 'dr'
          ? ["Multi-region routing", "Automatic failover", "WAF protection", "Health monitoring"]
          : ["Load balancing", "Web application firewall (WAF)", "SSL termination", "Health monitoring"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Workflow className="w-5 h-5" />,
        title: "Azure ExpressRoute",
        subtitle: "Dedicated Connectivity",
        color: "cyan",
        description: environment === 'dr'
          ? "Redundant ExpressRoute circuits for disaster recovery scenarios."
          : "Dedicated private connectivity between on-premises and Azure.",
        features: environment === 'dr'
          ? ["Redundant circuits", "Multi-region connectivity", "99.99% SLA"]
          : ["Dedicated connectivity", "Private peering", "Public peering", "Microsoft peering"],
        environments: ['production', 'dr'] as EnvironmentType[]
      }
    ],
    application: [
      {
        icon: <Server className="w-5 h-5" />,
        title: "App Service",
        subtitle: environment === 'development' ? "Dev Tier" : "Web & API Apps",
        color: "blue",
        description: environment === 'dr'
          ? "Multi-region App Service with automatic failover and traffic routing."
          : "Fully managed platform for building and deploying web applications.",
        features: environment === 'development'
          ? ["Basic hosting", "CI/CD integration", "Dev/test slots"]
          : environment === 'dr'
          ? ["Multi-region deployment", "Auto-failover", "Traffic Manager", "Continuous backup"]
          : ["Web and API apps", "Continuous deployment", "Auto-scaling", "Monitoring"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Container className="w-5 h-5" />,
        title: "Azure Kubernetes",
        subtitle: environment === 'dr' ? "Multi-Region AKS" : "Container Orchestration",
        color: "blue",
        description: environment === 'dr'
          ? "Multi-region AKS clusters with automated failover and disaster recovery."
          : "Managed Kubernetes service for deploying containerized applications.",
        features: environment === 'development'
          ? ["Basic orchestration", "Dev node pools", "Basic monitoring"]
          : environment === 'dr'
          ? ["Multi-region clusters", "Automated failover", "Backup and restore", "Geo-replication"]
          : ["Container orchestration", "Cluster management", "Auto-scaling", "Advanced monitoring"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Workflow className="w-5 h-5" />,
        title: "Logic Apps",
        subtitle: "Workflow Automation",
        color: "blue",
        description: "Visual workflow designer for automating business processes.",
        features: environment === 'production' || environment === 'dr'
          ? ["Visual workflow designer", "Azure service integration", "Scheduling and triggers", "Error handling"]
          : ["Basic workflows", "Azure integrations"],
        environments: ['production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Server className="w-5 h-5" />,
        title: "Functions",
        subtitle: "Serverless Compute",
        color: "blue",
        description: "Event-driven serverless compute platform.",
        features: environment === 'development'
          ? ["Event-driven execution", "Consumption plan"]
          : ["Event-driven execution", "Premium plan", "VNET integration", "Durable functions"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      }
    ],
    data: [
      {
        icon: <Database className="w-5 h-5" />,
        title: "Azure SQL Database",
        subtitle: environment === 'development' ? "Basic Tier" : environment === 'dr' ? "Geo-Replicated" : "Managed RDBMS",
        color: "green",
        description: environment === 'dr'
          ? "Geo-replicated SQL Database with automatic failover groups for disaster recovery."
          : "Fully managed relational database service.",
        features: environment === 'development'
          ? ["Basic tier", "5GB storage", "Automated backups"]
          : environment === 'dr'
          ? ["Active geo-replication", "Auto-failover groups", "99.99% SLA", "Point-in-time restore"]
          : ["Managed database", "Automatic backups", "Scaling and tuning", "Advanced security"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <DatabaseZap className="w-5 h-5" />,
        title: "Cosmos DB",
        subtitle: environment === 'dr' ? "Multi-Region Write" : "Global Distribution",
        color: "green",
        description: environment === 'dr'
          ? "Multi-region write enabled Cosmos DB for active-active disaster recovery."
          : "Globally distributed, multi-model database service.",
        features: environment === 'development'
          ? ["Single region", "Basic throughput", "Multi-model support"]
          : environment === 'dr'
          ? ["Multi-region writes", "Automatic failover", "99.999% read availability", "Conflict resolution"]
          : ["Global distribution", "Multi-model database", "Auto-scaling", "Low latency"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Database className="w-5 h-5" />,
        title: "Synapse Analytics",
        subtitle: environment === 'dr' ? "Geo-Backup" : "Data Warehouse",
        color: "green",
        description: environment === 'dr'
          ? "Synapse Analytics with geo-redundant backups and restore capabilities."
          : "Integrated analytics service for big data and data warehousing.",
        features: environment === 'dr'
          ? ["Geo-redundant backups", "Point-in-time restore", "Cross-region restore", "High availability"]
          : ["Data warehouse", "Auto-scaling", "Integrated analytics", "Azure service integration"],
        environments: ['production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Database className="w-5 h-5" />,
        title: "Data Lake Storage",
        subtitle: environment === 'dr' ? "Geo-Redundant" : "Big Data Storage",
        color: "green",
        description: environment === 'dr'
          ? "Geo-redundant storage with read access for disaster recovery scenarios."
          : "Massively scalable storage for big data analytics.",
        features: environment === 'development'
          ? ["Basic storage", "Local redundancy", "Basic access tiers"]
          : environment === 'dr'
          ? ["Geo-redundant storage (GRS)", "Read access (RA-GRS)", "Automatic replication", "Cross-region restore"]
          : ["Scalable storage", "Hierarchical namespace", "Access control", "Integration with analytics"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      }
    ],
    integration: [
      {
        icon: <Workflow className="w-5 h-5" />,
        title: "Service Bus",
        subtitle: environment === 'dr' ? "Geo-DR Enabled" : "Enterprise Messaging",
        color: "yellow",
        description: environment === 'dr'
          ? "Service Bus with geo-disaster recovery and metadata replication."
          : "Enterprise messaging service for reliable message delivery.",
        features: environment === 'development'
          ? ["Basic queues", "Topics and subscriptions"]
          : environment === 'dr'
          ? ["Geo-disaster recovery", "Paired namespaces", "Metadata replication", "Automatic failover"]
          : ["Enterprise messaging", "Queues and topics", "Dead-letter queues", "Message sessions"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Layers className="w-5 h-5" />,
        title: "Event Grid",
        subtitle: "Event-Driven Architecture",
        color: "yellow",
        description: "Event routing service for building event-driven applications.",
        features: environment === 'production' || environment === 'dr'
          ? ["Event routing", "Event subscriptions", "Event filtering", "Advanced routing"]
          : ["Basic event routing", "Event subscriptions"],
        environments: ['production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Server className="w-5 h-5" />,
        title: "API Management",
        subtitle: environment === 'dr' ? "Multi-Region" : "API Gateway",
        color: "yellow",
        description: environment === 'dr'
          ? "Multi-region API Management with automatic failover capabilities."
          : "API gateway for managing and securing your APIs.",
        features: environment === 'development'
          ? ["Developer tier", "Basic gateway", "API documentation"]
          : environment === 'dr'
          ? ["Multi-region deployment", "Automatic failover", "API caching", "Advanced security"]
          : ["API gateway", "API management", "Security policies", "Developer portal"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      }
    ],
    monitoring: [
      {
        icon: <Layers className="w-5 h-5" />,
        title: "Azure Monitor",
        subtitle: environment === 'dr' ? "Cross-Region" : "Observability Platform",
        color: "orange",
        description: environment === 'dr'
          ? "Cross-region monitoring with centralized alerting and dashboards."
          : "Comprehensive observability platform for your applications and infrastructure.",
        features: environment === 'development'
          ? ["Basic metrics", "Log collection", "Simple alerts"]
          : environment === 'dr'
          ? ["Cross-region monitoring", "Advanced alerting", "Disaster recovery dashboards", "Automated runbooks"]
          : ["Full observability", "Metrics and logs", "Advanced alerts", "Auto-actions"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Workflow className="w-5 h-5" />,
        title: "Log Analytics",
        subtitle: "Centralized Logging",
        color: "orange",
        description: "Centralized log collection and analysis service.",
        features: environment === 'production' || environment === 'dr'
          ? ["Centralized logging", "Log queries (KQL)", "Custom alerts", "Long-term retention"]
          : ["Basic log collection", "Simple queries"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Server className="w-5 h-5" />,
        title: "Application Insights",
        subtitle: "APM & Diagnostics",
        color: "orange",
        description: "Application performance management and diagnostics.",
        features: environment === 'development'
          ? ["Basic APM", "Request tracking", "Dependency tracking"]
          : environment === 'dr'
          ? ["Advanced APM", "Multi-region tracking", "Availability tests", "Smart detection"]
          : ["Application monitoring", "Performance profiling", "Exception tracking", "Usage analytics"],
        environments: ['development', 'production', 'dr'] as EnvironmentType[]
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Azure Policy",
        subtitle: "Governance & Compliance",
        color: "orange",
        description: "Governance and compliance management service.",
        features: environment === 'production' || environment === 'dr'
          ? ["Policy definitions", "Compliance reporting", "Automatic remediation", "Regulatory standards"]
          : ["Basic policies", "Compliance checks"],
        environments: ['production', 'dr'] as EnvironmentType[]
      }
    ]
  };

  // Filter services based on environment
  const filteredServices = {
    identity: allServices.identity.filter(s => s.environments.includes(environment)),
    security: allServices.security.filter(s => s.environments.includes(environment)),
    network: allServices.network.filter(s => s.environments.includes(environment)),
    application: allServices.application.filter(s => s.environments.includes(environment)),
    data: allServices.data.filter(s => s.environments.includes(environment)),
    integration: allServices.integration.filter(s => s.environments.includes(environment)),
    monitoring: allServices.monitoring.filter(s => s.environments.includes(environment))
  };

  return filteredServices;
};
