# Bug Report

This document describes potential defects and risks identified during the exploratory review of the Book Store application repository.

The goal is to highlight areas where the application could fail or behave incorrectly.

---

## Bug 1 — Missing Email Format Validation

### Title
Login endpoint accepts invalid email format

### Description
The authentication endpoint may allow invalid email formats without validation.

### Steps to Reproduce

1. Send a login request with an invalid email format

Example request:

POST /api/auth/login

email: invalid-email  
password: 123456

### Expected Result

The API should return a validation error (400 Bad Request).

### Observed / Potential Result

The request may proceed to authentication logic without validating the email format.

### Severity
Medium

### Impact
Improper validation could lead to authentication errors or unexpected system behavior.

---

## Bug 2 — Product Price Validation Missing

### Title
Product creation may allow negative prices

### Description
When creating or updating a product, there may be no validation preventing negative prices.

### Steps to Reproduce

1. Create or update a product
2. Set price to a negative value

Example:

price = -10

### Expected Result

The system should reject invalid price values.

### Observed / Potential Result

The product could be stored with an invalid price.

### Severity
High

### Impact

Incorrect pricing data may affect business logic and customer trust.

---

## Bug 3 — Cart Quantity Not Validated

### Title
Cart may allow adding unlimited quantity of a product

### Description
Cart operations may not validate available product stock.

### Steps to Reproduce

1. Add the same product multiple times to the cart
2. Exceed realistic stock values

### Expected Result

The system should validate available inventory before allowing more items.

### Observed / Potential Result

Users may add unlimited items.

### Severity
High

### Impact

Potential overselling and inventory inconsistencies.

---

## Notes

These issues were identified through exploratory analysis of the repository structure and typical Node.js e-commerce application risks.

Further testing with a running environment would allow deeper validation.