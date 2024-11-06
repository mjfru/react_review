/*
! The Server-Client Boundary: Front-end vs. Back-end

? Traditional:
  - Back-end (API)
  - Front-end

These have very clear server-client boundaries and communication happens between them via the API.
Typically, the backend is sending data to the front-end via JSON to work with and manipulate.
Once the JSON arrives, the front-end takes over and the back-end is not needed to alter the UI
However, the front-end may send requests (mutations) back to the API to listen for and change.

? Next.js w/ RSC and Server Actions (SA)
In Next.js apps, client components can be thought of as front-end and server components as back-end.
* However, they can all co-exist in the same tree and there is no clear seperation between front-end and back-end anymore.
* This 'knitting' as it's called is the pieces of server and client code interweaving (composability).
It allows us to build a true full-stack application in just one codebase.
! No need to build an intermediary API in many instances

*/