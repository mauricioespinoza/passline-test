# End-to-End Tests

## Overview

End-to-End tests simulate real user interactions with the application through the browser.

These tests validate that the frontend and backend work correctly together.

The tests were implemented using Playwright.

---

## Tested Scenarios

### Catalog Navigation

Scenario:

1. User opens the homepage
2. User navigates to the product catalog
3. Product list is displayed

Purpose:

Ensure users can browse available books.

---

### Add Product to Cart

Scenario:

1. User opens the catalog
2. User selects a product
3. User clicks "Add to cart"

Purpose:

Ensure users can interact with the cart functionality.

---

## Benefits of E2E Testing

E2E tests help detect issues such as:

- UI integration problems
- Broken navigation
- API and frontend integration errors

---

## Limitations

E2E tests are slower and more fragile than API tests, so only critical flows were implemented in this MVP.

Future improvements could include:

- Checkout flow
- User authentication flow
- Order confirmation process