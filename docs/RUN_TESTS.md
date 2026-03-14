# How to Run Tests

This document explains how to install dependencies and execute the automated test suite.

---

## Requirements

Before running the tests, ensure the following tools are installed:

- Node.js (v16 or higher recommended)
- npm

---

## Install Dependencies

Clone the repository and install the required dependencies.

Example:

git clone <repository-url>

cd passline-test

npm install

---

## Running All Tests

To execute the complete test suite:

npm test

This command will run all Playwright tests including:

- API tests
- End-to-End tests
- Smoke tests
- UI tests

---

## Running Specific Test Types

Playwright allows running specific folders.

Example:

Run API tests:

npx playwright test tests/api

Run E2E tests:

npx playwright test tests/e2e

Run Smoke tests:

npx playwright test tests/smoke

Run UI tests:

npx playwright test tests/ui

---

## Viewing Test Report

After running the tests, Playwright generates an HTML report.

To open the report:

npx playwright show-report

The report includes:

- Test results
- Execution time
- Failure details
- Screenshots (if available)

---

## Notes

The tests assume the application is running locally at:

http://localhost:3000

If the application is not running, some E2E tests may fail.