/*
! React Query
* React Query is a state management library that simplifies the process of fetching, caching, and updating data.
? Its major benefits include:
  - Automatic background refetching
  - Caching & stale data management
  - Error handling
  - Easy pagination / infinite scrolling

* Compared to setting up requests with useEffect, React Query provides a more declarative and centralized apporach to managing data in React, resulting in cleaner and more efficient code.
It also reduced boilerplate code and improve performance by minimizing unnecessary re-renders and network requests.

! To Install:
npm i @tanstack/react-query

! To Setup:
(This was from an older version, consult documentation to see if anything has changed)

* main.jsx
  import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

  * Wrap the main App component in the provider:
  <QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>

! V4 / V5 Difference:
  * isLoading has changed to isPending; functionality remains the same.

! To Use:
import { useQuery } from '@tanstack/reacy-query'

* Store the use of the useQuery() hook in a variable, taking in an object as an argument with two keys, queryKey and queryFn (function).

const result = useQuery({
  queryKey: ['yourKey'], (can be a string or array)
  queryFn: () => yourFunction.HTTP-Action('/your_path') (returns a promise)
})
*/
