/*
! Partial Pre-Rendering (PPR) -- A New Way of Rendering

* Recently, the Next.js team had the idea / problem that most pages don't need to be 100% static or 100% dynamic.

? What if we have a webpage that's totally static except for one minor part: the navbar shows the user some greeting message with their own name in it.

* Solution: Partial Pre-rendering: A new rendering stategy that combines static and dynamic rendering in the same route.

1. A static shell is served as fast as possible from a CDN, leaving holes for dynamic content.
2. The slower dynamic content is streamed in as it's rendered on the server
Result: Even faster pages that can mostly be delivered from the edge (CDN) even when there are small, dynamic parts.

! This feature is not yet live (as of v14) and is highly experimental.
It will likely need to be turned on in the config file.
By default, as much as possible of any route will be statically rendered, creating a static shell.
Dynamic components should be placed inside Suspense boundaries
No new APIs to learn! (Thanks Suspense)
These boundaries tell Next.js that anything within the boundary is dynamic.
The boundary prevents the dynamic parts from spreading into the entire route.
We provide a static fallback to be shown while the dynamic part is rendering
Dynamic components or sub-trees are inserted into the static shell as they become available.
*/