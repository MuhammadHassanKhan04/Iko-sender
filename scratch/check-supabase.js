import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://omjnzdngbjmbjoikaxmn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tam56ZG5nYmptYmpvaWtheG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0ODYyOTQsImV4cCI6MjA3NzA2MjI5NH0.LffxyDfqWjQtLVDbwwhc0qkPysK6Zb4YfsHYdf8DjDI";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function check() {
  console.log("Checking users_db...");
  const { data: users, error: usersErr } = await supabase.from('users_db').select('*').limit(1);
  if (usersErr) {
    console.error("Error checking users_db:", usersErr.message, usersErr.details || "");
  } else {
    console.log("users_db table exists. First row or empty:", users);
  }

  console.log("Checking subscription_requests...");
  const { data: reqs, error: reqsErr } = await supabase.from('subscription_requests').select('*').limit(1);
  if (reqsErr) {
    console.error("Error checking subscription_requests:", reqsErr.message, reqsErr.details || "");
  } else {
    console.log("subscription_requests table exists. First row or empty:", reqs);
  }
}

check();
