const { test, expect } = require('@playwright/test');

test('homepage layout basic elements', async ({ page }) => {

  await page.goto('/');

  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();

});