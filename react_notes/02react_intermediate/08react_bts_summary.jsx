/*
! React Behind the Scenes Takeaways & Summary

* A Component is like a blueprint for a piece of UI that will -eventually- exist on the screen.
function Question()

* When we 'use' a component, React creates a component instance, which is like an actual physical manifestation of a component, containing props, state and more.
<Question />

* When these component instances are rendered returns a React Element.

* "Rendering" only means calling component functions and calculating what DOM elements need to be inserted, deleted, or updated.
It has nothing to do with actually writing to the DOM.
* Therefore, each time a component instance is rendered and re-rendered, the function is called again.

? Only the initial app render and state updates can cause a render, which happens for the entire application, not just one single component.

When a component instance gets re-rendered, --all of its children will get re-rendered as well!--.
* This doesn't mean that all children will get updated in the DOM, thanks to reconcilation, which checks which elements have actually changed between two renders.
All of this re-rendering can still have an impact on performance.

* Diffing is how React decides which DOM elements need to be added or modified.
If, between renders, a certain React element stays at the same position in the tree, the corresponding DOM element and component state will stay the same.
If the element changed to a different position, or it's a different element type, the DOM element and state will be destroyed.

* Giving elements a key prop allows React to distinguish between multiple component instances.
! When a key stays the same across renders, the element is kept in the DOM, which is why we need to use keys in lists.
When we change the keys between renders, the DOM element will be destoryed and rebuilt; we use this trick to reset state.

! Never declare a new component inside another component!
Doing so will re-create the nested component every time and the parent component re-renders.
React will always see the nested component as new, and therefore reset its state each time the parent state is updated.

* The logic that produces JSX output for a component instance (render logic) is NOT allowed to produce any side effects: no API calls, no timers, no object or variable mutations, no state updates.
! Side effects are allowed in event handlers and useEffect.

* The DOM is updated in the commit phase, but NOT by React, but by a 'renderer' called ReactDOM.
That's why we always need to include both libraries in a React web app project.
We can use other renderers to use React on different platforms, for example to build mobile or native apps.

! State & Events
* Multiple state updates inside an event handler are batched, so they happen all at once, causing only one re-render.
This means we cannot access a state variable immediately after updating it: state updates are asynchronous.
Since React 18, batching also happens in timeouts, promises, and native event handlers.

* When using events in event handlers, we get access to a synthetic event object, not the browser's native object, so that events work the same way across all browsers.
The difference is that most synthetic events bubble, including focus, blur, and change, which do not bubble as native browser events.

! React is a LIBRARY, not a framework!
This means that you can assemble your application using your favorite third-party librarties.
The downside is that you need to find and learn all these additional libraries.
*/