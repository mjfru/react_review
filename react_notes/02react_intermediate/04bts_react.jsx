/*
! React Behind the Scenes
! Component vs. Instance vs. Element
* Components are what we write to DESCRIBE a piece of UI; it's a function that returns React elements, usually written as JSX.
It's a blueprint or template that React then makes one or multiple component instances.

* Instances are created when we USE components.
This happens because React calls the function our component is made out of, it becomes the 'physical' manifestation of a component.
? Each instance has its own state, props, and lifecycle.

! These are usually used interchangeably but in an interview or documentation situation, these are the key differences.

* React Elements are created by the JSX being converted to React.createElement() function calls.
* A React element is the result of these function calls.
It contains all the information necessary to create DOM elements.
The final, visual representation of the component instance in the browser.

Component 
  -> 
    Using the component (instance) returns... 
      -> 
      React Element passed on to the DOM 
        -> 
          DOM Element(s) (HTML)
          ->
            User Interface on their Browser / Screen

? How does this process actually work?
1. A render is triggered, typically by updating state somewhere.
2. We enter the Render Phase, where React calls component functions and figures out how the DOM should be updated.
! However, in React, rendering is NOT updating the DOM or displaying elements on the screen.
! Rendering only happens internally inside React, it does -not produce visual changes-.
3. We enter the commit phase, where React actually writes to the DOM, updating, inserting, and deleting elements.
? This phase is what we traditionally think of when we think of 'rendering'.
4. The last step has nothing to do with React but the Browser repaints itself, letting the user see our application's UI.

* 1. Triggering a render
  A render can be triggered in only two situations:
    1. The initial render of the application
    2. State is updated in one or more component instances (re-render)
  The process is triggered for the entire application but not everything is re-rendered.
  In practice, it looks like React only re-renders the component where the state update happens, but that's not quite how it works behind the scenes.
  Some renders are NOT triggered immediately but scheduled for when the JS engine has some 'free time. There is also batching of multiple setState calls in event handlers.

* 2. All about the Render Phase
  In the Render phase, React will go through the whole component tree, take all the component instances that triggered the re-render, and re-render them.
  This will create updated React Elements which all together, create a new virtual DOM.

  On the initial render when our app starts, React will take the component tree and transform it into one big element, the React element tree, or Virtual DOM.
  ! Virtual DOM - Tree of all React elements created from all instances in the component tree.
  ? It's cheap and fast to create multiple trees.

  Let's say there's a state update in one of the components in our App, this triggers a re-render, calling the function of that element, and placing it in a new React Element tree.
  * Rendering or re-rendering a component will cause all of its child components to be rendered as well (no matter if props changed or not).
  ? This is necessary because React doesn't know whether children components will be affected.

  The new Virtual DOM will get reconciled with the current fiber tree (fiber) and updates to an updated Fiber tree.
  ? So uh, what is reconciliation? Why not update the entire DOM whenever state changes somewhere in the app?
  * Writing to the DOM is -slow-
  * Usually only a small part of the DOM needs to be updated.
  * React reuses as much of the existing DOM as possible...but how??
  ! This is where reconciliation comes into play, the act of deciding which DOM elements actually need to be inserted, deleted, or updated in order to reflect the latest state changes.
  The reconciler, therefore, is really the heart of React, allowing us to never have to touch the DOM directly.
  * The Reconcilier: Fiber - Takes the entire React element tree and, based on it, creates a new Fiber tree
  ? This is an internal tree that has a 'fiber' for each component instance and DOM element and are NOT re-created on every render; it's a mutuable data structure that is mutated over and over again upon re-renders.
  All this work can be done asynchronously by spliting the rendering into chunks, tasks can be prioritized, work can be paused, reused, or thrown away.
    * This enables concurrent features like Suspense or transitions and long renders won't block the JS engine.

* 3. The Commit Phase
  ! This phase is actually carried out not by React but by another library, ReactDOM, a 'renderer' (Same category as React Native, Remotion, etc.)
  * Here is where React writes to the DOM: insertions, deletions, and updates (list of DOM updates are 'flushed' to the DOM).
  Committing is synchronous: DOM is updated in one go, it cannot be interrupted.
  This is necessary so that the DOM never shows partial results, ensuring a consistent UI (in sync with state at all times).
  After the commit phase completes, the workInProgress fiber tree becomes the curent tree for the next render cycle.
  With that the browser notices that the DOM has been changed and will repaint itself when it has some time.

* 4. Browser Paint

! Recap:
  1. Trigger - Happens only on initial render and state updates
  2. Render phase - No visual output, calls each component's functions, causing all children components of a parent component to rerender as well.
    Reconciliation & diffing begins now using Fiber, diffing will look at the virtual DOM and new Fiber tree to see what has changed.
    A new fiber tree and list of DOM updates is produced.
  3. Commit - A Renderer (ReactDOM) updates the DOM.
  4. Browser Paint - Updates the UI on the screen.
*/