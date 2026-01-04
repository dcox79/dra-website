export const identityAccessManagement = {
  title: "Identity & Access Management",
  subtitle: "Secure identity architecture with Entra ID and zero-trust principles",
  description: "Enterprise identity design with conditional access, privileged access management, and multi-factor authentication.",

  qualificationPoints: [
    "You need to implement or modernize Azure AD (Entra ID) architecture",
    "You're required to enforce conditional access and zero-trust security",
    "You have privileged users who need just-in-time access controls",
    "You're integrating B2B partners or B2C customers into your environment",
    "You need to comply with identity-related controls in SOC 2 or HIPAA",
  ],

  scopeItems: [
    "Entra ID (Azure AD) tenant architecture and licensing strategy",
    "Conditional Access policies for risk-based authentication",
    "Privileged Identity Management (PIM) for admin access",
    "Multi-Factor Authentication (MFA) enforcement and methods",
    "Identity Protection and risky sign-in detection",
    "B2B collaboration and guest access governance",
    "Application integration with SSO and SAML/OIDC",
    "Identity governance and access reviews",
  ],

  approachPhases: [
    {
      title: "Current State Assessment",
      description: "Review existing identity infrastructure, user directory, access patterns, compliance requirements, and integration points. Identify gaps and risks in current configuration.",
    },
    {
      title: "Identity Architecture Design",
      description: "Design Entra ID architecture including conditional access policies, PIM workflows, MFA methods, identity protection rules, and B2B/B2C integration strategy.",
    },
    {
      title: "Implementation & Testing",
      description: "Configure Entra ID features, deploy conditional access policies in report-only mode, set up PIM roles, enable MFA, and pilot with test users before production rollout.",
    },
    {
      title: "Rollout & Enablement",
      description: "Phased production deployment, user communication and training, helpdesk preparation, monitoring setup, and post-deployment optimization.",
    },
  ],

  deliverables: [
    "Identity Architecture Blueprint documenting design decisions",
    "Configured Entra ID tenant with all security features enabled",
    "Conditional Access policies mapped to risk scenarios and compliance controls",
    "Privileged Identity Management workflows for admin roles",
    "MFA enforcement with phased rollout plan and user guides",
    "Identity Protection policies for risky sign-ins and users",
    "Access review processes for ongoing governance",
    "User training materials and helpdesk runbook",
    "PowerShell and Graph API scripts for automation",
  ],

  included: [
    "Entra ID P2 licensing guidance and feature mapping",
    "Unlimited conditional access policies",
    "PIM configuration for Azure AD and Azure resource roles",
    "MFA enforcement with multiple authentication methods",
    "Identity Protection risk policies and investigation workflow",
    "B2B guest access policies and governance",
    "SSO integration for up to 5 SaaS applications",
    "User training session and admin enablement workshop",
    "30-day post-deployment support",
  ],

  notIncluded: [
    "Entra ID licenses (customer procurement responsibility)",
    "Third-party identity providers or federation setup",
    "Application code changes for modern authentication",
    "Password migration from legacy systems",
    "Ongoing user provisioning or helpdesk support",
    "Identity synchronization from non-Azure environments (separate engagement)",
  ],

  outcomes: [
    "Zero-trust identity architecture aligned with Microsoft security best practices",
    "Reduced risk of account compromise through conditional access and MFA",
    "Just-in-time privileged access reducing standing admin permissions",
    "Automated detection and response to risky sign-ins",
    "Improved compliance posture with documented identity controls",
    "Foundation for future identity governance and access management",
  ],

  faqs: [
    {
      question: "Do we need Entra ID P2 licenses for everyone?",
      answer: "P2 is required for conditional access, PIM, and identity protection. Not all users need P2 - typically admins and users requiring advanced security. We'll help optimize licensing based on your requirements.",
    },
    {
      question: "Will conditional access policies disrupt user workflows?",
      answer: "We deploy policies in report-only mode first to measure impact, then roll out gradually with user communication. Policies are designed to balance security with user experience.",
    },
    {
      question: "How does PIM work for emergency access?",
      answer: "PIM provides just-in-time activation with approval workflows. We configure break-glass accounts for emergency scenarios and establish escalation procedures.",
    },
    {
      question: "Can you integrate with our on-premises Active Directory?",
      answer: "Yes, hybrid identity with Entra Connect is a common scenario. This is typically part of a broader identity modernization engagement and may extend the timeline.",
    },
    {
      question: "What MFA methods do you support?",
      answer: "We configure Microsoft Authenticator (recommended), SMS, voice, FIDO2 security keys, and Windows Hello. The choice depends on your security requirements and user population.",
    },
  ],
};
