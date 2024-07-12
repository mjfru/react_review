/*
! React Query
* React Query is a powerful library for managing remote (server) state.
* Many of its features will allow us to write a lot less code and make the UX a lot better!
  - Data is stored in a cache, allowing for less API requests, less data to be downloaded, and make the whole application more responsive.
  - Provides automatic loading and error states
  - Automatically refetches data to keep state synced.
  - Pre-fetches data before its even displayed on the page (useful for pagination)
  - Easy remote state mutation (updating)
  - Offline support (data is already cached, so previously visited components can still be displayed)

* Needed because remote state is fundamentally different from regular (UI) state.

npm i @tanstack/react-query (@version number)
*/