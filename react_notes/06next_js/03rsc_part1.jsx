/*
! What are React Server Components (RSC)?

? Why do we need React server components?
In React, the UI is basically a function, taking in the changing state over time.
This provides an interactive experience for users and is easy for devs to break down into components.
However, it requires a lot of JS to be downloaded on a computer / browser.
Client-server data waterfalls cause problems in larger applications.

100% server-side, like the old days of PHP, had no components but...
Allowed us to fetch data quick and easy
Close to the data source
Didn't need to ship hardly any JS at all.
And, unlike server components, the UI is essentially a function taking in the data (instead of state)

* The middle ground between these two (UI = function(data, state)) is a new React paradigm, React Server Components.
RSCs allow us to build interactive apps with components, make it easy and fast to fetch data, exist close to the data source, and without the need to ship a single kb of JavaScript.
* We write frontend code next to backend code in a natural way that 'feels' like regular React.
! RSC is NOT active by default in new React apps (e.g. Vite apps), it needs to be implemented by a framework like Next.js ('app router').

? What even are RSCs?
* A new full-stack achitecture for React apps that introduces the server as an integral part of React component trees: server components

* RSCs are components that are only rendered on the server, never the client.
They have no interactivity and do not make it to the bundled package.
This allows us to build the back-end with React.

The flip side is the 'client components', what we know as a regular components.
! These are created with 'use client' directive at the top of the module.

! Client Components ('use client' needed)
State / Hooks: Yes
Lifting State Up: Yes
Props : Yes
Data Fetching: Not preferred, but possible with a library
Can Import...: Client components only, cannot go back in the client-server boundary
Can Render...: Client components and server components passed as props.
When does it re-render?: On state change

! Server Components (default in this paradigm)
State / Hooks : No
Lifting State Up: Yes
Props: Yes-- between server and / or client components-- must be serializable
Data Fetching: Preferred, use async/await in the component
Can Import...: Client AND Server components
Can Render...: Client and server components
When does it re-render?: Each time the url changes (navigation)

! Pros and Cons of RSC Achitecture
* Can compose entire full-stack apps with React components alone (+ server actions)
* One single codebase for front-end and back-end
* Server components have more direct and secure access to the data source (no API, no exposing API keys, etc.)
* Eliminate client-server waterfalls by fetching all the data needed for a page at once before sending it to the client (not each component)
* Disappearing code: server components ship no JS, so they can import huge libraries 'for free'.

! Makes React more complex
! More things to learn and understand
! Things like the Context API don't work in server components
! More decisions to make: 'Should this be a client or server component?'
! Sometimes you'll need to build an API (for example, if you have a mobile app also)
! Can only be used within a framework
*/