// NOTE: This test assumes the bookstore application is running locally.
// If the service is not available, the test will fail with connection refused.

const { test, expect } = require('@playwright/test');

test('login should fail with invalid credentials', async ({ request }) => {

  const response = await request.post(process.env.LOGIN_ENDPOINT, {
    data: {
      email: "fake@test.com",
      password: "wrongpassword"
    }
  });

  expect(response.status()).not.toBe(200);

});