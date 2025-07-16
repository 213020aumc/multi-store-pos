import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://shopwnqozbdfpalggjoy.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNob3B3bnFvemJkZnBhbGdnam95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTc5MTUsImV4cCI6MjA2Nzg5MzkxNX0.8SSBe2URMhyP5a8w5ZrdrGlfrp6agJJVVWoUqjElMYM";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
