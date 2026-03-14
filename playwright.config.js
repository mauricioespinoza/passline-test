// @ts-check

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]

});