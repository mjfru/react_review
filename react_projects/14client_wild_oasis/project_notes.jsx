/*
! The Oasis Website (Client-side)

? The company needs a customer-facing website where guests can learn about the hotel, browse all cabins, reserve a cabin, and update their profile.
? Updating the data in the internal app should also update the website, so we use the same DB and API.

! Requirements
* Users of the app are potential guests and actual guests
? About:
* Should be able to learn all about the hotel while browsing
? Cabins:
* Can gather information about each cabin and see booked dates
* Guests should be able to filter by their max. capacity.
? Reservations:
* Guests should be able to reserve a cabin for a certain date range.
* Reservations are NOT paid online; payments will be made at the property.
* New reservations sohould be set to 'unconfirmed' (booked but not yet checked-in)
* Guests should be able to view all their past and future reservations
* Be able to update or delete a reservation
? Authentication:
* Sign up and log in before they can reserve a cabin and perform operations
* On sign up, each guest should get a profile in the DB.
? Profile:
* Guests should be able to set and update basic data abgout their profile.

! Necessary Pages:
1. Homepage - /
2. About page - /about
3. Cabin overview - /cabins/
4. Cabin detail - /cabins/:cabinId
5. Login - /login
6. Reservations - /account/reservations
7. Edit Reservations /account/reservations/edit
8. Update Profile - /account/profile

! Technology Decisions
* Framework - Next.js - Handles routing, SSR, data fetching, etc.
* UI State Management - Context API - We still might need global UI state in a Next.js app.
* Database / API - Supabase - Use the data and API we already built for the business-side of this project
* Styling - Tailwind CSS - Extremely easy to integrate into Next.js
*/