# API Tests

## Overview

API tests validate the backend behavior of the application.

These tests are designed to ensure that core endpoints return correct responses and handle invalid inputs appropriately.

API tests are implemented using Playwright.

---

## Tested Endpoints

### GET /api/products

Purpose:

Verify that the product catalog endpoint returns available products.

Validations:

- Response status is 200
- Response body contains product data
- Response format is valid JSON

Risk covered:

Users cannot browse the catalog if this endpoint fails.

---

### POST /api/auth/login (negative test)

Purpose:

Verify that the authentication endpoint properly rejects invalid credentials.

Validations:

- Invalid credentials are rejected
- Endpoint does not return success status

Risk covered:

Improper authentication handling.

---

## Benefits of API Testing

API tests provide:

- Fast feedback
- Isolation from UI changes
- Better debugging capabilities

They are an important layer in the testing pyramid.

---

## Future API Tests

With more time, the following endpoints should also be tested:

- Product creation
- Product updates
- Cart operations
- Checkout endpoints