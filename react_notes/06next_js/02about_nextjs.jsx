/*
! What is Next.js? How do we leverage and use it?
* Next.js is a framework built by Vercel and is marketed as 'The React framework for the web."
Technically, it's a meta-framework built on top of React: we still use components, props, react hooks, etc.
* It adds an opinionated way of building React apps: A set of conventions and best practices regarding routing, data fetching, etc.
? Having a fixed set of rules makes building apps and full-stack web apps faster and more efficiently as a team.
It also allows us to use cutting-edge React features that need to be integrated into a framework: Suspense, Server Components, Server Actions, streaming, etc.

! The Four Next.js Key Ingredients
*   1. Server-side rendering (dynamic and static)
    - Dynamic or static can be selected for each route.
*   2. File-based routing conventions
    - Folders as routes! Special files for pages, layouts, loaders, etc.
*   3. Data fetching and mutation on the server
    - Fetching data directly in server components
    - Mutations in server actions
*   4. Optimizations
    - Images, fonts, SEO, preloading, etc.

! The Two Flavors of Next.js: "App" and "Pages" Router
* Modern Next.js: "App" Router
- Introduced in Next.js 13.4 (2023)
- Recommended for new projects
- Implements React's full-stack architecture: Server components, server actions, streaming, etc.
- Easy fetching with fetch() right in components
- Extremely easy to create layouts, loaders, etc.
- More advanced routing (parallel routing, etc.)
- Better DX (developer experience) and UX.
- The most annoying thing is the caching; it's aggressive and confusing.
- Steeper learning curve (...but it's React!)

? Legacy Next.js: "Pages" Router
- The first Next.js router since v1 (2016)
- Still supported and updated; needed for older React projects
- Overall more simple and easy to learn but simple things like layouts are confusing.
- Data fetching using Next.js-specific APIs such as getStaticProps and getServerSideProps

! Creating a new Next.js project
* From the terminal, run npx create-next-app@latest nameOfProject
Agree to proceed (y)
Yes or no to TypeScript, ESLint, Tailwind CSS, src/ directory, App Router, and import alias.

? Might need to replace the default ESLint settings with this to get rid of annoying but not fatal errors:
{
  "extends": ["next/babel","next/core-web-vitals"]
}

* The default way to run Next.js apps is: npm run dev

! To update a project to the newest version:
npm install next@latest react@latest react-dom@latest eslint-config-next@latest
*/
