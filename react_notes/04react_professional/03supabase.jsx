/*
! Supabase Information
* Supabase is a service that allows developers to easily create a back-end with a Postgres database.
It automatically creates a database and API so we can easily request and receive data from the server.
! No backend development is needed; perfect for front-end developers to get up and running
It's not just an API, however, it comes with an easy-to-use user authentication and file storage.

! Modeling State with DBs (for The Wild Oasis Project)
? What state "domains" / "slices" do we need to build out all our features?
* State for: bookings, cabins, guests
* Bookings state can take care of checking in and out.
* App setting requires its own state slice
* Users needs authentication

! All of this state will be global remote state, stored within Supabase
* There will be one table for each state "slice" in the database.

! The Bookings Tables
* Bookings are about a guest renting a cabin, so a booking needs information about what guest is booking which cabin.
? Our job here is to connect there two.
* Supabase uses a Postgres DB, which is SQL, so we'll be joining tables using foreign keys.

This will include storing a guestId in the Booking, as well as the cabinId in the booking.
* We connect a booking with a cabin by storing the cabin's id (primary key) inside the booking cabinId (foreign key).
*/
