import { test, expect } from '@playwright/test';

test.describe('SEO Metadata', () => {
  test('homepage has correct SEO meta tags', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Default Route Advisory/);

    // Check meta description
    const metaDescription = await page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);

    // Check canonical URL
    const canonical = await page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveCount(1);

    // Check Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveCount(1);

    const ogDescription = await page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveCount(1);

    const ogType = await page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute('content', 'website');

    // Check Twitter Card tags
    const twitterCard = await page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
  });

  test('service pages have Service schema', async ({ page }) => {
    await page.goto('/services/environment-assessment');

    // Check for JSON-LD script with Service schema
    const jsonLdScripts = await page.locator('script[type="application/ld+json"]').all();
    expect(jsonLdScripts.length).toBeGreaterThan(0);

    // Verify at least one script contains Service type
    let hasServiceSchema = false;
    for (const script of jsonLdScripts) {
      const content = await script.textContent();
      if (content && content.includes('"@type":"Service"')) {
        hasServiceSchema = true;
        break;
      }
    }
    expect(hasServiceSchema).toBe(true);
  });

  test('all pages have exactly one H1 tag', async ({ page }) => {
    const pages = ['/', '/about', '/services', '/contact'];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    }
  });

  test('draft pages have NOINDEX robots meta', async ({ page }) => {
    // This test assumes you have a draft page accessible for testing
    // You may need to adjust based on your implementation

    // For now, skip this test if no draft pages are accessible
    test.skip();

    // Example implementation:
    // await page.goto('/draft-page');
    // const robots = await page.locator('meta[name="robots"]');
    // await expect(robots).toHaveAttribute('content', 'noindex, nofollow');
  });

  test('sitemap.xml is accessible', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);

    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('xml');

    const body = await response.text();
    expect(body).toContain('<?xml');
    expect(body).toContain('<urlset');
  });

  test('robots.txt is accessible', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toContain('User-agent:');
    expect(body).toContain('Sitemap:');
  });

  test('llms.txt is accessible', async ({ request }) => {
    const response = await request.get('/llms.txt');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body.length).toBeGreaterThan(0);
  });
});
