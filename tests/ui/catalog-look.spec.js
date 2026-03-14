const { test, expect } = require('@playwright/test');

test('catalog should display book cards', async ({ page }) => {

  await page.goto('/');

  const books = page.locator('.book');

  await expect(books.first()).toBeVisible();

});