import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ilqbkvzgsdvavaswezti.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_EfxkRiCMJX9-YcR4E0B03w_Hn3FHp5F";

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
