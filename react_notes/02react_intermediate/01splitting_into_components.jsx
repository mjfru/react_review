/*
! How to Split an App into Components
* We can classify every component based on its size, from very tiny to huge; neither of these extremes is idea.
Huge components, like functions, take on too many responsibilities.
* If it receives too many props (10+), it's way too big and should be split up, it becomes too difficult to reuse and prop drill.

? However, if we did the opposite, we're going to end up with 100s of mini-components that we have to remember/reference all the time.
* It results in a confusing codebase and it's way too abstracted.

! The goal is to find the right balance between being too specific and too broad.

! The 4 Criteria for Splitting a UI into Components are:
* 1. Logical seperation of content / layout
* 2. Reusability
* 3. Responsibilities / Complexity
* 4. Personal Coding Style

! When should we create a new component?
* When in doubt, start with a relatively big component, then split it into smaller components as it becomes necessary.
If you're sure you need to reuse something, such as a button, you don't need to focus on reusability and complexity early on.

- Does the component contain pieces of content or layout that do NOT belong together?
- Is it possible to reuse part of the component?
- Do you -want- or -need- to reuse it?
- Is the component doing too many different things?
- Does the component rely on too many props?
- Does the component have too many pieces of state and/or effects?
- Is the code, including the JSX, too complex/confusing?

? These are all reasons to make a new component but it's ultimately up to you.

* Be aware that creating a new component creates a new abstraction.
Abstractions have a cost, because more abstractions require more mental energy to switch back and forth between components.
Try not to create new components too early.
* Name a component according to what it does or what it displays. Do not be afraid of using long component names.
! Never declare a new component inside another component!
Co-locate related components inside the same file; do not seperate components into different files too early.
* It's completely normal that an app has components of many different sizes, including very small and huge ones.

! Component Categories:
? Most of your components will naturally fall in one of three different categories:

* 1. Stateless / Presentational Components
?   - Have NO state, can receive props, and simply present received data or content.
?   - Usually small and resuable (a button, a piece of data, a logo)

* 2. Stateful Components
?   - Have state but can still be reusable (a search bar, input fields)

* 3. Structural Components
?   - The 'pages', 'layout's, or 'screens' of the app; a result of composition.
?    - Can be huge and non-resuable
*/