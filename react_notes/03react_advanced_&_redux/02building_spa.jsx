/*
! Routing & Building Single Page Applications (SPAs)
* (Client-side) Routing is the matching of different URLs to different UI views (React components), each of these matches are called a route.
www.example.com   www.example.com/login   www.example.com/app
? All of these will render different react components, enabling users to navigate between different application screens using the browser URL.
* Keeps the UI in sync with the current browser URL.

* React relies on a 3rd party library, usually React Router (merging with Remix soon!).

! Routing in a key concept in creating Single-Page Applications (SPA)
* These are applications that are executed entirely on the client-side (browsers).
Routes: different URLs correspond to different views (components)
* JavaScript (React) is used to update the page (DOM) and the page is NEVER reloaded, the entire App is on only one page.
This makes it feel like a native (mobile) application.
* Additional data might be loaded from a web API as well

User clicks router link -> URL is changed (done by React-Router) -> DOM is updated: React component corresponding to the new URL is rendered.
*/