/*
! Caching in Next.js

? What even is 'caching'?
* Storing fetched or computed data in a temporary location for future access, instead of having to re-fetch or re-compute the data every time it's needed.

Next.js caches -very- aggressively: everything that is possible to cache...is cached.
* Next.js provides APIs for cache revalidation: removing data from the cache and updating it with fresh data (re-fetched or re-computed)
Makes Next.js apps more performant and saves costs (computer and data access)
Caching is always ON by default, strange and unexpected behavior in some situations...some caches cannot be turned off.
Many different Next.js APIs affect and control caching.

! The Caching Mechanisms

* 1. Request Memoization
Where?
  - Happens on the server
What data?
  - Data fetched with similar GET requests (same url and options in fetch function)
How long?
  - One page request (one render, one user)
Enables:
  - No need to fetch at the top of the tree; the same fetch in multiple components only makes one request.
How to revalidate?
  - N/A
How to opt out?
  - AbortController function

* 2. Data Cache
Where?
  - Happes on the server
What data?
  - Data fetched in a route or single fetch request
How long?
  - Indefinitely, even across de-deploys (can revalidate or opt out)
Enables:
  - Data for static pages + ISR when revalidated
How to revalidate?
  - Time-based (automatic) for all data on page:
    export const revalidate = <time>; (page.js)
  - Time-based (automatic) for one data request:
    fetch("...", { next: { revalidate: <time> } })
  - On-demand (manual):
    revalidatePath or revalidateTag
How to opt out?
  - Entire page:
    export const revalidate = 0; (page.js)
  - Entire page:
    export const dynamic = 'force-dynamic'; (page.js)
  - Individual Request:
    fetch("...", { cache: 'no-store' })
  - Individual server component: noStore();

 * 3. Full Route Cache
Where?
  - Happens on the server
What data?
  - Entire static pages (HTML and RSC payload)
How long?
  - Until the 'data cache' is invalidated (or app is re-deployed)
Enables:
  - Static pages

* 4. Router Cache
Where?
  - Happens on the client-side
What data?
  - Pre-fetched and visited pages: static and dynamic routes
How long?
  - 30 secs (Dynamic) / 5 mins (Static) throughout one user session.
Enables:
  - SPA-like navigation (instant navigation with no full reloads)
How to revalidate?
  - revalidatePath OR revalidateTag in SA
  - router.refresh
  - cookies.set OR cookies.delete
How to opt out?
  - Not possible (problematic)

! This is the behavior in production mode, caching doesn't work in development.
*/