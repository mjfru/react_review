//! Performance in React

import { useMemo } from "react";

/*
* See tutorial 11 / 3(hooks) for memo example and pitfalls.

! useCallback
* useCallback is a hook in React that allows you to memoize a function!
It takes two arguments: the first is the function to memoize and the second is an array of dependencies.
The hook will return a memoized version of the function that only changes if one of the values in the dependency array changes.

By memoizing the function, you can avoid unnessary re-renders and improve the performance of your app.
* The function will only be re-created if one of its dependencies change, otherwise the same instance of the function will be returned.
? This is useful in situations where you have an expensive function that you only want to recompute when its dependencies change.

! useMemo
* The useMemo hook allows you to memoize a value.
It takes two arguments: the first is a function that returns the value you want to memoize, and the second is an array of dependencies.
The hook will return the memoized vlaue that will only change if one of the values in the array changes.

* By memoizing a value, you can avoid unnecessary calculations and improve the performance of your apps.
* The value will only be recalculated if one of its dependencies changes, otherwise the same instance of the value will be returned.
This can be useful in situations where you have an expensive calculation that you only want to recompute when its dependency changes.

Example:
*/

const slowFunction = () => {
	let value = 0;
	for (let i = 0; i <= 100000000; i++) {
		value += 1;
	}
	return value;
};

// Using this will make the initial render a little slow, but subsequent ones will be quick as it doesn't change.
const value = useMemo(() => slowFunction(), []);
slowFunction();
console.log(value);

/*
! useTransition
* useTransition is a React hook that allows you to update state without blocking the UI.

! Suspense API
* The Suspense API is a feature that allows you to manage the loading state of your components.
It provides a way to "suspend" rendering of a component until some data has been fetched and display a fallback UI in the meantime.
? This makes it easier to handle async data loading and provide a smooth user experience.

Example:
*/

import { lazy, Suspense } from "react";

const DataComponent = lazy(() => import("./DataComponent"));

function MyComponent() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<DataComponent />
		</Suspense>
	);
}

//* Typically, the entire return statement is wrapped in suspense so we can treat multiple components with it and have loading states all around the page.

return (
	<Suspense fallback={<div>Loading...</div>}>
		{/* Rest of the logic... */}
		<section>{show && <Component />}</section>
	</Suspense>
);
