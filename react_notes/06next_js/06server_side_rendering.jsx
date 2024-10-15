/*
! Server-Side Rendering in Next.js

- Next.js is a React framework, so rendering is done by React, following the rules we learned earlier.
* Remember: Both server and client components are rendered on the server on the -initial- render.
- In Next.js, the server-side rendering work is split by routes
* Each route can be either static (pre-rendered) or dynamic
- There is also Partial Pre-Rendering (PPR) which mixes dynamic and static.

! Static Rendering
? HTML is generated at build time, or periodically in the background by re-fetching data (ISR).
* Useful when data doesn't change often and is not personalized to the user (e.g. a product page)
- This is the default rendering stategy in Next.js; even when a page or component fetches data.
- When deployed to Vercel, each static route is automatically hosted on a CDN (Content Delivery Network).
- If all route of an app are static, the entire app can be exported as a static site (SSG).

! Dynamic Rendering
- HTML is generated at request time (for each new request that reaches the server)
* Makes sense if:
  1. The data changes frequently and is personalized to the user (e.g. a cart)
  2. Rendering a route requires information that depends on the request (e.g. search params)
- A route automatically switches to dynamic rendering in certain conditions.
- When deployed on Vercel, each dynamic route becomes a serverless function.

! When does Next.js switch to Dynamic Rendering?
- Usually, developers don't directly choose whether a route should be static or dynamic; Next.js will automatically switch to dynamic rendering in the following scenarios:
  1. The route has a dynamic segment (page uses params)
  2. searchParams are used in the page component /product?quantity=3
  3. headers() or cookies() are used in any of the route's server components
  4. An uncached data request is made in any of the route's server components.
* This is necessary because any of these values can not be known by Next.js at build time.
- We can also force Next.js to switch to Dynamic Rendering

! Terminology
? CDN - Content Delivery Network
  - A network of servers located around the globe that cache and deliver a website's static content (HTML, CSS, JS) from as close as possible to each user.

? Serverless Computing
  - With the serverless  computing model, we can run application code, usually back-end code, without managing the server ourselves. Instead, we can just run a single functiosn on a cloud provider: serverless functions.
  - The server is initialized and active only for the duration of the serverless function is running, unlike a traditional Node.js app where the server is constantly running.
  - Remember: Each dynamic route becomes a serverless function.

? The "Edge"
  - "As close as possible to the user", a CDN is part of an "edge" network, but there is also servless edge computer.
  - This is serverless computing that does not happen on a central server but on a network that's distributed around the globe, as close as possible to the user.
  - Important: We can select certain routes to run on the edge when deployed to Vercel.

? Incremental Static Rengeration:
  - A Next.js feature that allows developers to update the content of a static page, in the background, even after the website has already been built and deployed.
  - This happened by re-fetching the data of a component or entire route after a certain interval.
*/
