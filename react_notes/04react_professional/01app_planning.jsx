/*
! How to Plan & Build a React Application
? From the earlier 'Thinking in React' notes:
  1. Break the desired UI into components
  2. Build a static version (no state)
  3. Think about statemanagement + data flow
This works well for small apps with one page and a few features.
In real-world apps, we need to adapt this process!

* 1. Gather application requirements and features

* 2. Divide the application into pages
?   a. Think about the overall and page-level UI
?   b. Break the desired UI into components
?   c. Design and build a static version (without state)

* 3. Futher divide the application into feature categories.
?   a. Think about statemanagement + data flow

* 4. Decide on what libraries to use (technology decisions)

! Planning the first app in the 'Professional React' section

! 1. Requirements from the Business:
- Simple application, where users can order one or more pizzas from a menu
- Requires no user accounts and no login, users just input their names before using the app.
- The pizza menu change change, so it should be loaded from an API (done).
- Ordering requires just the user's name, phone number, and address.
- If possible, GPS location should also be provided
- User's can mark their order as 'priority' for an additional 20% of cart price.
- Orders are made by sending a POST request with the order data to the API.
- Payments are made on delivery, no payment processing necessary.
- Each new order gets a unique ID that should be displayed, so the user can later look up their order based on the ID.
- Users should be able to mark their orders as 'priority' even after the order has been placed.

! 2 & 3. Dividing Pages, Features, and Categories
* Feature Categories (all features can be placed in one of these categories):
  1. User
  2. Menu
  3. Cart
  4. Order

* Necessary Pages:
  1. Homepage /
  2. Pizza Menu /menu
  3. Cart /cart
  4. Placing a new order /order/new
  5. Look up an order /order/:orderID

* State Management + Technology Decisions
(State "Domains" / "Slices")
  1. User
    - Global UI State (no accounts, stays in app)
  2. Menu
    - Global Remote State (menu is fetched from API)
  3. Cart
    - Global UI state (no need for API, stored in the app)
  4. Order
    - Global remote state (fetched and submitted to API)

* Routing
Using React Router - The standard for React SPAs

* Styling
Using Tailwind CSS - Trendy way of styling applications

* State Management
Remote - React Router - Has a new way of fetching data right inside React.
UI State Management - Redux - Has many advantages for UI state
*/