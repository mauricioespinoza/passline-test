# Smoke Test Suite

## Purpose

The smoke test suite verifies that the most critical parts of the application are working after deployment.

These tests are designed to quickly answer the question:

"Is the system stable enough for further testing?"

Smoke tests focus on validating the core user journey and system availability.

---

# Smoke Test Checklist

The following checks validate the basic health of the system.

## 1. Application Startup

Scenario:

1. Start the application
2. Open the homepage

Expected Result:

The application loads successfully without errors.

Risk Covered:

Application fails to start or server is unavailable.

---

## 2. Login Functionality

Scenario:

1. Navigate to login page
2. Enter valid credentials
3. Submit login form

Expected Result:

User is authenticated and redirected to the application.

Risk Covered:

Authentication service failure.

---

## 3. Product Catalog Loads

Scenario:

1. Open the catalog page

Expected Result:

Products are displayed correctly.

Risk Covered:

Catalog API failure or frontend rendering issues.

---

## 4. Add Product to Cart

Scenario:

1. Select a product
2. Click "Add to Cart"

Expected Result:

The product is added to the shopping cart.

Risk Covered:

Cart functionality failure.

---

## 5. Admin Panel Availability

Scenario:

1. Navigate to admin panel

Expected Result:

Admin panel loads successfully.

Risk Covered:

Admin service or routing failure.

---

## 6. Critical API Endpoint

Scenario:

Send request to:

GET /api/products

Expected Result:

Response status is 200.

Risk Covered:

Backend service unavailable.

---

# Characteristics of Smoke Tests

Smoke tests are:

- Fast
- Minimal
- Focused on critical functionality
- Executed after deployments

They do not replace full regression testing.

---

# Automation

Some of these checks are automated using Playwright tests located in:

tests/smoke

Example automated validations include:

- Homepage availability
- Basic UI rendering
- API endpoint availability

More smoke scenarios could be automated in future iterations.