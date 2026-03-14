# 🎭 Passline QA Automation Challenge

QA automation proposal for the **Book Store Node.js application**.

This repository contains a minimal but structured testing framework designed to validate critical system functionality and demonstrate QA automation practices.

---

## 🎯 Overview- 

The objective of this project is to provide a **lightweight QA automation setup** that validates the most important flows of the application while keeping the tests maintainable and easy to execute.

The approach focuses on:

- Risk-based testing
- Fast feedback through automation
- Clear documentation
- Simple execution

---

## 🚀 Technologies Used

- Node.js
- Playwright
- JavaScript
- Markdown documentation

Playwright was selected because it allows combining **API testing, UI testing, visual testing and E2E automation** in a single framework.

---

## 🛠️ Project Structure
passline-test
│
├ docs
│ ├ TEST_STRATEGY.md
│ ├ API_TESTS.md
│ ├ E2E_TESTS.md
│ ├ SMOKE_TESTS.md
│ ├ BUG_REPORT.md
│ └ RUN_TESTS.md
│
├ tests
│ ├ api
│ ├ e2e
│ ├ smoke
│ └ ui
│
├ playwright.config.js
├ package.json
├ SUBMISSION.md
└ AI_USAGE.md

The repository separates **automation tests** from **documentation**, making it easier to review the QA approach.

---

## Test Types Implemented

### API Tests

Validate backend behavior and core endpoints.

Examples:

- Product catalog endpoint
- Login validation (negative case)

Location:


tests/api


---

### End-to-End Tests

Simulate real user interactions through the browser.

Examples:

- Catalog navigation
- Add product to cart

Location:


tests/e2e


---

### Smoke Tests

Quick validation that the system is operational after deployment.

Examples:

- Homepage loads
- Catalog visible
- Critical API endpoint responds

Location:


tests/smoke


---

### UI / Look & Feel Tests

Basic interface validation to detect layout problems and UI regressions.

Examples:

- Layout elements visibility
- Product cards rendering
- Add to cart button presence

Location:


tests/ui


---

## Installation

Install dependencies:


npm install


---

## Running Tests

Run all automated tests:


npm test


Open the Playwright HTML report:


npx playwright show-report


---

## Environment Configuration

The test suite supports environment configuration through environment variables.

Example `.env` file:


BASE_URL=http://localhost:3000


This allows running the same tests against:

- Local environments
- QA environments
- Staging environments

---

## Documentation

Detailed documentation can be found in the `docs` folder.

Includes:

- Test Strategy
- API testing approach
- E2E scenarios
- Smoke test definition
- Bug report
- Test execution instructions

---

## Notes

This project focuses on demonstrating **QA automation strategy, test organization and documentation**, rather than achieving full test coverage.

The implementation prioritizes clarity, maintainability and ease of review.

---

## Author

Mauricio Espinoza  
QA Engineer
