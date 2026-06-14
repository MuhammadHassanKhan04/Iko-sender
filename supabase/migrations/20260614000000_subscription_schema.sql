-- Create users_db table
CREATE TABLE IF NOT EXISTS public.users_db (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  status TEXT NOT NULL DEFAULT 'none', -- 'none', 'pending_subscription', 'active', 'suspended'
  plan TEXT NOT NULL DEFAULT 'none',   -- 'none', 'starter', 'pro', 'elite', 'ultimate'
  email_limit INTEGER NOT NULL DEFAULT 0,
  emails_sent INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS for users_db
ALTER TABLE public.users_db ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations on users_db (for custom frontend-based management)
CREATE POLICY "Allow all operations on users_db"
  ON public.users_db
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create subscription_requests table
CREATE TABLE IF NOT EXISTS public.subscription_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  plan_name TEXT NOT NULL,
  plan_price TEXT NOT NULL,
  email_limit INTEGER NOT NULL,
  sender_email TEXT,
  transaction_id TEXT NOT NULL,
  payment_slip_url TEXT, -- stores the receipt image (e.g. base64 representation)
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);

-- Enable RLS for subscription_requests
ALTER TABLE public.subscription_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations on subscription_requests
CREATE POLICY "Allow all operations on subscription_requests"
  ON public.subscription_requests
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Insert default admin user if not exists
INSERT INTO public.users_db (email, name, password, role, status, plan, email_limit, emails_sent)
VALUES ('ikoteksolutions@gmail.com', 'Admin', '09876543', 'admin', 'active', 'unlimited', 99999999, 0)
ON CONFLICT (email) DO NOTHING;
