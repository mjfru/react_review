/*
! How React Server Components Work BTS

! A Quick Review of Rendering in React
? Traditional React
- Write components into a user interface, giving us a component tree
- Then, it's time to render (call) these component functions.
- This provides us the virtual DOM, the React element tree, that becomes committed to the actual DOM (HTML elements).

? RSC Achitecture
- All server components are rendered on the server, giving us a React element.
- Client components in the component tree are given placeholders on the server, a reference to the code itself.
* - This mix is the "virtual DOM" of SC treess of CC (RSC Payload)
- Finally, they are sent to the client...the React client and is our final, complete 'virtual DOM'!

? Why RSC Payload? Why not render SCs as HTML?
  - React always wants to describe the UI as data, not as finished HTML.
  - When a SC is re-rendered, React is able to merge (reconcile) the current tree on the client with a new tree coming from the server.
  - As a result UI state can be preserved when a SC re-renders, instead of completely re-generating the page as HTML.

! SSR Review (HTML generated at runtime, dynamic SSR)
- Component Tree --> HTML --> Client's Screen
* SRR: "Just take this component tree, render it as HTML, and send that HTML to the browser"
Any JS is added back to the HTML (hydration), providing an interactive React app.
* "Also send the React code to make the HTML interactive".
* Both client and server components are initially rendered on the server when SSR is used.

! What about RSC?
* In the RSC model, 'server' just means 'the developer's computer'.
* Result: RSC does NOT require a running web server. Components could only run once at build-time (static site generation)
* "Also send the React code to make the HTML interactive"
*/