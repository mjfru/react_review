/*
! The URL for State Management
* The URL is an excellent place to store UI state and an alternative to useState in some situations!
? Ex: Open/Closed Panels, currently selected list item, list sorting order, applied list filters.

? Why?
  1. Easy way to store state in a global place, accessible to all components in the app
  2. Good way to 'pass' data from one page into the next
  3. Makes it possible to bookmark and share the page with the exact UI state it had at the time

  www.example.com /app/cities/ lisbon?  lat=38.728&lng=9.141
!                    Path      Params  Query String

* This URL corresponds to a specific view, we can pass the city name to the next page.
* The query string sets the state to the specified lattitude and longitude
  */
