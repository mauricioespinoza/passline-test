// NOTE: This test assumes the bookstore application is running locally.
// If the service is not available, the test will fail with connection refused.

const { test, expect } = require('@playwright/test');

test('GET /api/products should return product list', async ({ request }) => {

  const response = await request.get(process.env.API_PRODUCTS);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBeTruthy();
});