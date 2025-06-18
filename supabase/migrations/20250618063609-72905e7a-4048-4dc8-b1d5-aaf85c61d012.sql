
-- Create a table for waitlist registrations
CREATE TABLE public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  expected_use TEXT,
  destination TEXT,
  preferred_date TEXT,
  preferred_time TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for registration)
CREATE POLICY "Anyone can register for waitlist" 
  ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading (for admin purposes later)
CREATE POLICY "Allow read access to waitlist" 
  ON public.waitlist 
  FOR SELECT 
  USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_waitlist_updated_at 
  BEFORE UPDATE ON public.waitlist 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
