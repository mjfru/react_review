/*
! Middleware in Next.js
* A program that sits between requests and responses.
By default, middleware works before every single route in a project but we can specify which paths using a 'matcher'.
* A 'chunk' of code that's in every page.js component, essentially.
? Only one middleware function needs to be exported from the middleware.js (or .ts) in the project root folder.
* Middleware always needs to produce a response:
  - A redirect or rewrite to a route
  OR
  - Send a response directly, usually via JSON.

! Use Cases:
  - Read and set cookies and headers
  - Authentication and authorization
  - Server-side analytics
  - Redirect based on geolocation
  - A/B testing


*/