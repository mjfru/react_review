/*
! Diffing, Its Algorithm, & The Key Prop
? How Does Diffing Work?
* Diffing uses 2 fundamental assumptions / rules:
  1. Two elements of different types will produce different trees.
  2. Elements with a stable key prop styay the same across renders.
These rules allow React to operate so much faster.

* Diffing is comparing elements step-by-step between two renders based on their position in the tree.
There are two situations that need to be considered:
?  1. Same position, different element
  An element has changed at a position in the tree, a component is replaced by another, for instance.
  React assumes the entire sub-tree is no longer valid, old components are destroyed and removed from the DOM, including state.
  The Tree might be rebuilt if children stayed the same (state is reset)

?  2. Same position, same element
  An element at a certain position is the same, then the element will be kept (as well as children), including state.
  Maybe a className attribute or a prop value changes...React simply mutates the DOM element attributes; they are not removed and state is not destroyed.

! The Key Prop
* The Key Prop is a special prop that we use to tell the diffing algorithm that an element is unique.
? This allows React to distinguish between multiple instances of the same component type.
! Whenever a key stays the same across renders, the element will be kept in the DOM (even if the position in the tree changes).
  Use case #1: Using keys in lists
! When a key changes between renders, the element will be destroyed and a new one will be created (even if the position in the tree is the same as before)
  Use case #2: Using keys to reset state

* Using keys in lists (stable key)
Not including keys results in different positions in the tree, so they are removed and recreated in the DOM which is bad for performance.
? Keys allow us to uniquely identify an element, allowing them to be kept in the DOM despite having a different position in the tree.

* Key prop to reset state (changing key)
? If we have the same element at the same position in the tree, the DOM element and state will be kept.
We can give a component instances unique keys to tell React to create a brand new React element, resetting state.
*/