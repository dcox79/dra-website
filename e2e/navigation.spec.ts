import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Default Route Advisory/);

    // Check main heading exists
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('navigates to services page', async ({ page }) => {
    await page.goto('/');

    // Click on services link (adjust selector based on actual implementation)
    await page.click('[href*="/services"]');

    // Verify URL changed
    await expect(page).toHaveURL(/\/services/);

    // Verify page content loaded
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigates to about page', async ({ page }) => {
    await page.goto('/');

    // Click on about link
    await page.click('[href*="/about"]');

    // Verify URL changed
    await expect(page).toHaveURL(/\/about/);

    // Verify page content loaded
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigates to contact page', async ({ page }) => {
    await page.goto('/');

    // Click on contact link
    await page.click('[href*="/contact"]');

    // Verify URL changed
    await expect(page).toHaveURL(/\/contact/);

    // Verify page content loaded
    await expect(page.locator('h1')).toBeVisible();
  });

  test('footer links are accessible', async ({ page }) => {
    await page.goto('/');

    // Check footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check LinkedIn link
    const linkedinLink = footer.locator('a[href*="linkedin.com"]');
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('aria-label', 'LinkedIn');
  });

  test('404 page handles invalid routes', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist');

    // Should show 404 content (implementation dependent)
    // This might need adjustment based on your 404 handling
    expect(response?.status()).toBe(404);
  });
});
