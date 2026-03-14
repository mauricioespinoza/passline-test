# QA Automation Submission

## Repository

https://github.com/mauricioespinoza/passline-test

---

## Tools & Stack

The following tools were used to implement the QA automation proposal:

- **Node.js**
- **Playwright**
- **JavaScript**
- **Markdown documentation**

Playwright was selected because it allows combining API testing, UI testing and E2E automation in a single framework.

---

## Project Structure

The repository is organized to separate tests by purpose and documentation by topic.
tests/
├── api
├── e2e
├── smoke
└── ui

docs/
├── TEST_STRATEGY.md
├── API_TESTS.md
├── E2E_TESTS.md
├── SMOKE_TESTS.md
├── BUG_REPORT.md
└── RUN_TESTS.md


This structure allows easy navigation and future expansion of the automation suite.

---

## Setup Instructions

Install dependencies:
npm install

Run all automated tests:
npm test

Open the HTML test report:
npx playwright show-report


---

## Key Decisions

The main focus of this MVP QA setup was to prioritize **high-value testing with minimal complexity**.

The approach included:

- API tests for fast feedback
- Smoke tests for release validation
- End-to-End tests for critical user flows
- UI tests for layout and visual validation

This combination provides a balanced testing pyramid while keeping the implementation simple and maintainable.

---

## What Was Prioritized

Due to time constraints, the following areas were prioritized:

- Critical business flows
- Fast test execution
- Clear documentation
- Maintainable test structure

---

## What Would Be Done With More Time

If additional time were available, the QA automation framework could be expanded with:

- CI/CD pipeline integration
- Expanded API coverage
- Full checkout E2E tests
- Admin flow automation
- Performance testing
- Test tagging (smoke / regression / api / e2e)

---

## Test Results

Playwright generates an HTML report after execution which includes:

- Test status
- Execution time
- Error details
- Screenshots for failures

The report can be opened using:
npx playwright show-report


---

## Notes

The test suite supports environment configuration using environment variables.
Example:
BASE_URL=http://localhost:3000


This allows the same test suite to run against local, QA or staging environments with minimal changes.