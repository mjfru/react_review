/*
! Events in React

! DOM Refresher: Event Propagation & Delegation
* In a classic DOM tree (not a Fiber tree or React), a event is triggered on say, a button.
  By default, event handlers listen to events on the target and during the bubbling phase.
* This begins the capturing phase, finding where it was triggered in the tree until it reaches the target.
* Then it travels all the way back the entire tree in the bubbling phase.
  We can prevent bubbling with e.stopPropagation() but it's rare to have such a use-case.

! Event Delegation
* With this knowledge, we can better understand the concept of event delegation.
? This is the handling for multiple elements centrally in one single parent element.
To better performance and memory, we can put a single handler function on a parent element.
Then, we check for the target element (e.target) and if the target is one of the specific elements, handle the event.

! How React Handles Events
* React registers all event handlers on the root DOM container and is where all events are handled!
? Behind the scenes, React performs event delegation for all events in our applications.

! Synthetic Events
* In Vanilla JS, we get instant access to things like PointerEvent, MouseEvent, etc.
? In React, we get a SyntheticEvent wrapper over these native DOM event objects.
However, they have the same interface as native event objects, like stopPropagation() and preventDefault().
This fixed browser inconsistencies so that events work in the same exact way in all browsers.
* Most synthetic events bubble (including focus, blur, and change)...except for scroll!

? What are some differences between React and Vanillla?
- Attributes for event handlers are named using camelCase (onClick instead of onclick or click).
- Default behavior can not be prevented by returning false (only by using preventDefault())
- Attach 'Capture' if you need to handle during capture phase (example: onClickCapture)
*/
<input onChange={(e) => setText(e.target.value)} />