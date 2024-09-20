/*
! Server-Side Rendering
* The shift to going 'back' to server-side rendering is fueled by the popularity of 'full-stack frameworks', like Next.js and Remix.
These 'frameworks' combine the best of both worlds.

? CSR (Client-Side Rendering) vs. SSR
In CSR, HTML is rendered on the client (user's computer) using JS.
In SRR, HTML is rendered on the server (the developer's end).

A downside of CSR is that it has a slower initial page load.
  - This is due to a bigger JS bundle needing to be downloaded before the app starts running.
  - Data is fetched after components mount, leading to a 'request waterfall'.
  ! This is one of the main complaints with CSR.
  * The argument FOR CSR is that it's highly interactive, all the code and content has already been loaded (except the data).
  However, SEO can be problematic.
  * CSR is perfect for building highly interactive web apps and apps that don't need SEO:
    - Apps that are used internally as tools inside companies
    - Apps that are entirely hidden behind a login.

SSR gives user's a faster initial page load:
  - This if from needing less JS to be downloaded and executed
  - Data is fetched before HTML is rendered
  - However, this is less interactive, pages might be downloaded on demand and require full page reloads
  * SEO-friendly - Content is easier for search engines to index
    - Content-driven websites or apps where SEO is essential: E-commerce, blogs, news, marketing websites, etc.

! Two subtypes of SSR:
  1. Static: HTML generated at build time (often called Static Site Generation, or SSG)
  2. Dynamic: HTML is generated each time the server receives a new request (some call only this SSR)


! Hydration
* In the context of SSR, hydration adds back the interactivity and event handlers that were lost when HTML was server-side rendered.
"Watering the 'dry' HTML with the 'water' of interactivity and event handlers."
React builds the component tree on the client and compares it with the actual SSR'd DOM: they MUST be the same so React can adopt it.
? Common hydration error causes:
  - Incorrect HTML element nesting
  - Different data used for rendering
  - Using browser-only APIs
  - Side effects
*/