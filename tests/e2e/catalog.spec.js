// NOTE: This test assumes the bookstore application is running locally.
// If the service is not available, the test will fail with connection refused.

const { test, expect } = require('@playwright/test');

test('user can open catalog page', async ({ page }) => {

  await page.goto('/');

  await expect(page.locator('body')).toBeVisible();

});