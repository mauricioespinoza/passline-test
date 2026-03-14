const { test, expect } = require('@playwright/test');

test('add to cart button visible', async ({ page }) => {

  await page.goto('/');

  const addButton = page.locator('button:has-text("Add")');

  await expect(addButton.first()).toBeVisible();

});