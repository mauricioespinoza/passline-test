const { test, expect } = require('@playwright/test');

test('smoke test - basic system health', async ({ page, request }) => {

  // 1️⃣ Homepage loads
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();

  // 2️⃣ Catalog visible
  const products = page.locator('.book');
  await expect(products.first()).toBeVisible();

  // 3️⃣ Add to cart button exists
  const addButton = page.locator('button:has-text("Add")');
  await expect(addButton.first()).toBeVisible();

  // 4️⃣ Critical API endpoint responds
  const response = await request.get(process.env.API_PRODUCTS);
  expect(response.status()).toBe(200);

});