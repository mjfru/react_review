/*
! Project Notes: The Wild Oasis

- Small Boutique hotel w/ 8 luxury cabins
- Need a custom-build application to manage everything about the hotel: bookings, cabins, and guests.
* Internal Hotel Management App
- They have nothing right now, so they also need the API.
- A customer-facing website will come later using the same API.

! Planning:
? 1. Requirements & Features
* Authentication:
- Users of the app are hotel employees; they need to be logged into the application to perform tasks.
- New users can only be signed up inside the applications
- Users should be able to upload an avatar and change their name and password

* Cabins:
- App needs a table to view with all cabins, showing the photo, name, capacity, price, and current discount
- Users should be able to update or delete a cabins, as well as creating a new one and uploading new photos.

* Bookings:
- Needs a table with all bookings, showing arrival and departure dates, status, paid amouunt, and cabin and guest data
- Booking status can be 'unconfirmed', 'checked-in', or 'checked-out' and the table needs to be filterable.
- Other booking data includes: number of guests, number of nights, guest observations, meals booked

* Checking-In/Out
- Users should be able to delete, check-in, or check-out a booking as the guest arrives
- Bookings may not have been paid yet or on guest arrival, therefore, on check in, users need to accept payment (outside the app), and then confirm that payment has been received (inside the app).
- On check-in, guests should have the ability to add breakfast.

* Guests:
- Guest data should contain: full name, email, national ID, nationality, and a country flag.

* Dashboard:
- The initial app screen should be a dashboard to display information for the last 7, 30, or 90 days:
  - A list of guests checking in and out on the current day
  - Stats on recent bookings, sales, check-ins, and occupancy rates
  - A chart showing all daily hotel sales, showing both total sales and 'extras' sales.
  - A chart showing stats on stay durations, as this is an important metric for the hotel.

* Settings:
- Users should be able to define a few application-wide settings: breakfast price, min and max for nights/bookings, and max guests/bookings.
- App needs a dark mode.


? 2. Divide application into pages
* Indicated with green text above
  1. Dashboard - /dashboard
  2. Bookings - /bookings
  3. Cabins - /cabins
  4. Booking check-in - /checkin/:bookingID
  5. App settings - /settings
  6. User sign up - /users
  7. Login - /login
  8. Account settings - /account

? 3. Divide application into feature categories
  1. Bookings
  2. Cabins
  3. Guests
  4. Dashboard
  5. Check-in/out
  6. App Settings
  7. Authentication


? 4. Decide on what libraries / tech stacks to use
  Client-side Rendering or Server-side Rendering?

* CSR w/ Plain React
  - Used to build SPAs
  - All HTML is rendered on the client
  - All JS needs to be downloaded before app starts running-- bad for performance
  - One perfect use case: Apps that are used 'internally' as tools inside companies that are entirely hidden behind a login.

* SSR w/ Framework (Next.js, Remix)
  - Used to build Multi-page Applications (MPAs)
  - Some HTML is rendered to the server
  - More performant, as less JS needs to be downloaded
  - The React team is moving towards this direction.

* Routing -- React Router
* Styling -- Styled Components - A way to writing component-scoped CSS, right inside JS; used widely in the industry
* State Management -- React Query - Out-of-the-box way to manage remote state
* UI State Management -- Context API - One simple context with useState will suffice for this project
* Form Management -- React Hook Form - Handling bigger forms can be a lot of work but this tool simplifies a lot of it.
* Other -- React Icons, React Hot Toasts, Recharts, date-fns, Supabase
*/
