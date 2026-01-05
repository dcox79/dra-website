import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOHead } from '../SEOHead';

describe('SEOHead', () => {
  const defaultProps = {
    title: 'Test Page | Default Route Advisory',
    description: 'Test description for SEO',
    canonical: '/test-page',
  };

  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOHead {...defaultProps} />
      </HelmetProvider>
    );
  });

  it('sets document title correctly', () => {
    render(
      <HelmetProvider>
        <SEOHead {...defaultProps} />
      </HelmetProvider>
    );

    expect(document.title).toBe(defaultProps.title);
  });

  it('sets meta description', () => {
    render(
      <HelmetProvider>
        <SEOHead {...defaultProps} />
      </HelmetProvider>
    );

    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription?.getAttribute('content')).toBe(defaultProps.description);
  });

  it('sets canonical URL correctly', () => {
    render(
      <HelmetProvider>
        <SEOHead {...defaultProps} />
      </HelmetProvider>
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute('href')).toContain(defaultProps.canonical);
  });

  it('adds NOINDEX for draft pages', () => {
    render(
      <HelmetProvider>
        <SEOHead {...defaultProps} draft={true} />
      </HelmetProvider>
    );

    const robots = document.querySelector('meta[name="robots"]');
    expect(robots?.getAttribute('content')).toBe('noindex, nofollow');
  });

  it('sets Open Graph tags', () => {
    render(
      <HelmetProvider>
        <SEOHead {...defaultProps} />
      </HelmetProvider>
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogType = document.querySelector('meta[property="og:type"]');

    expect(ogTitle?.getAttribute('content')).toBe(defaultProps.title);
    expect(ogDescription?.getAttribute('content')).toBe(defaultProps.description);
    expect(ogType?.getAttribute('content')).toBe('website');
  });

  it('sets Twitter Card tags', () => {
    render(
      <HelmetProvider>
        <SEOHead {...defaultProps} />
      </HelmetProvider>
    );

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');

    expect(twitterCard?.getAttribute('content')).toBe('summary_large_image');
    expect(twitterTitle?.getAttribute('content')).toBe(defaultProps.title);
  });

  it('includes custom OG image when provided', () => {
    const propsWithImage = {
      ...defaultProps,
      ogImage: '/images/custom-og-image.png',
    };

    render(
      <HelmetProvider>
        <SEOHead {...propsWithImage} />
      </HelmetProvider>
    );

    const ogImage = document.querySelector('meta[property="og:image"]');
    expect(ogImage?.getAttribute('content')).toContain(propsWithImage.ogImage);
  });

  it('includes Service schema for service pages', () => {
    const serviceProps = {
      ...defaultProps,
      schema: {
        '@type': 'Service',
        name: 'Azure Environment Assessment',
        description: 'Comprehensive Azure security and architecture assessment',
        provider: {
          '@type': 'Organization',
          name: 'Default Route Advisory',
        },
      },
    };

    render(
      <HelmetProvider>
        <SEOHead {...serviceProps} />
      </HelmetProvider>
    );

    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).toBeTruthy();

    if (script?.textContent) {
      const jsonLd = JSON.parse(script.textContent);
      expect(jsonLd['@type']).toContain('Service');
    }
  });
});
