/*
! useEffect & More about Side Effects

Reminder: A side effect is basically any 'interaction between a React component and the world outside the component.
We can also think of a side effect as 'code that actually does something'!
Examples: Data fetching, setting up subscriptions, setting up timers, manually access the DOM, etc.

? Where to create side effects?
! Not in render logic!
* The first place we can create side effects are inside of event handlers, like onClick, onSubmit, etc.
* The second is triggered by rendering and utilizing the useEffect hook.
? Effects allow us to write code that will run at different moments, mount, re-render, or unmount.

Event handlers should be used when a corresponding event happens.
Effects should be used after a component mounts (initial render) and after subsequent re-renders (according to the dependency array).
! These are the preferred way of creating side effects and should be used as to not be over-reliant on useEffect.

* Effects are used to keep a component synchronized with some external system (in our usePopcorn project, the API movie data)...we are thinking more about synchronization, not lifecycles.


! What's the useEffect dependency array?
* By default, effects run after every render.
We can prevent that by passing a dependency array to useEffect.
? Without the dependency array, React doesn't know when to run the effect!
! Each time one of the dependencies changes, the effect will be executed again.
* Every staye variable and prop used inside the effect musr be included in the dependency array.
*/

const title = props.movie.Title;
const [userRating, setUserRating] = useState("");

useEffect(function () {
  if (!title) return;
  document.title = `${title} ${userRating && `(Rated ${userRating} ⭐)`}`;

  return () => (document.title = 'usePopcorn');
  //! Dependencies, whenever these change, it will run the code again
}, [title, userRating]);

/*
! useEffect is a synchronization mechanism
* useEffect is like an event listener that is listening for one dependency to change.
* Whenever a dependency changes, it will execute the effect again.
? Effects REACT to updates to state and props used inside the effect (the dependencies); effects are 'reactive' (like state updates re-rendering the UI)
Component State / Props ---> Synchronize With ---> External System (side effect)
* We can use the dependency array to run effects when the component renders or re-renders.

When we have multiple dependencies:
useEffect(fn, [x, y, z]) --> Effect syncs with x, y, and z and in terms of a lifecycle, runs on mount and re-renders triggered by updating x,y,z

When we have no depdencies []:
Effect syncs with no state/props and runs only on mount (initial render)

When we have no array, nothing at all, it runs on every render and is generally a bad idea; it syncs with everything!

? When are effects executed?
Mount (initial render) <MovieDetails/>
Commit
Browser Paints it
* Effect! 
title changes
Re-render
Commit
Browser Paint
! Cleanup Function
* Effect!
Unmount
! Cleanup function - Sets the title (or something else) back to a default value

* The cleanup function is an optional function we can return from an effect.
? It will run on two occasions:
  1. Before the effect is executed again
  2. After a component has unmounted

* Necessary whenever the side effect keeps happening after the component has been re-rendered or unmounted.

Effect              Potential Cleanup
HTTP Request        Cancel request
API subscription    Cancel subscription
Start timer         Stop timer
Add event listener  Remove listener

* Each effect should only do ONE THING.
* Use one useEffect hook for each side effect; it makes it easier to cleanup.
*/