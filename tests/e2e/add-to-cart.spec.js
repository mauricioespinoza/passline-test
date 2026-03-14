// NOTE: This test assumes the bookstore application is running locally.
// If the service is not available, the test will fail with connection refused.

const { test, expect } = require('@playwright/test');

test('user can add book to cart', async ({ page }) => {

  await page.goto('/');

  await page.locator('button:has-text("Add to cart")').first().click();

  await expect(page.locator('body')).toContainText('Cart');

});