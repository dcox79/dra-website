import { Helmet } from 'react-helmet-async';
import { MDXFrontmatter } from '@/lib/mdxRoutes';

interface SEOHeadProps {
  frontmatter: MDXFrontmatter;
  path: string;
}

/**
 * Organization schema for site-wide JSON-LD
 */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Default Route Advisory',
  url: 'https://defaultrouteadvisory.com',
  logo: 'https://defaultrouteadvisory.com/images/logo/logo.png',
  description:
    'Azure and hybrid network architecture consultancy for regulated organizations. Expert services in environment assessments, design-only architecture, and advisory retainers.',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Dave Cox',
    jobTitle: 'Azure Solutions Architect',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@defaultrouteadvisory.com',
    contactType: 'Customer Service',
  },
  sameAs: ['https://www.linkedin.com/company/default-route-advisory'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
};

/**
 * Website schema
 */
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Default Route Advisory',
  url: 'https://defaultrouteadvisory.com',
  description:
    'Azure and hybrid network architecture consultancy for regulated organizations.',
  publisher: {
    '@type': 'Organization',
    name: 'Default Route Advisory',
  },
};

/**
 * Generate service schema for service pages
 */
function generateServiceSchema(frontmatter: MDXFrontmatter, path: string) {
  if (!path.startsWith('/services/')) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: frontmatter.title,
    description: frontmatter.description,
    provider: {
      '@type': 'Organization',
      name: 'Default Route Advisory',
    },
    areaServed: 'US',
    serviceType: 'Azure Architecture Consulting',
  };
}

/**
 * SEO Head Component
 * Manages all SEO-related meta tags, Open Graph, Twitter Cards, and JSON-LD schemas
 */
export function SEOHead({ frontmatter, path }: SEOHeadProps) {
  const siteUrl = 'https://defaultrouteadvisory.com';
  const canonicalUrl = `${siteUrl}${frontmatter.canonical}`;
  const ogImage = frontmatter.ogImage || `${siteUrl}/images/og-default.png`;

  // Determine if this is a draft page
  const isDraft = frontmatter.draft === true;

  // Generate service schema if applicable
  const serviceSchema = generateServiceSchema(frontmatter, path);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{frontmatter.title}</title>
      <meta name="description" content={frontmatter.description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Meta - NOINDEX for draft pages */}
      {isDraft && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:description" content={frontmatter.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Default Route Advisory" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={frontmatter.title} />
      <meta name="twitter:description" content={frontmatter.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#0a0a0a" />
    </Helmet>
  );
}
