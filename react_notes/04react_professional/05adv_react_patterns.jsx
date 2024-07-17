/*
! Resuability
Often, we need to reuse UI or stateful logic (logic with hooks)

* To reuse UI, we use components and props.
Specifically, we use props as a component API to enable custom behavior; these can be stateless, stateful, or structural components.
We also use the children prop to further customer the component's content.

* To reuse stateful logic, we use custom hooks.

? For complete control over what the component renders, we can use the render props pattern.
* By passing in a function that tells the component what to render, we gain complete control over it.
This pattern was more common before hooks but still has its place today.

? The compound component pattern is for very self-contained components that need/want to manage their own state.
These are like mega/super fancy components; knowing these will set you apart.

*/