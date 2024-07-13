import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://irpfjpoxgxdugrzbbibd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlycGZqcG94Z3hkdWdyemJiaWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NDgyNzUsImV4cCI6MjAzNjAyNDI3NX0.1wPYZ3Ol27lw5CcCIaEjwxqlkPpYmr7KS16kC4PSX4s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
