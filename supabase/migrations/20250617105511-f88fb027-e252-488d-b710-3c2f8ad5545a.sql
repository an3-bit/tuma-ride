
-- Create enum for user types
CREATE TYPE user_type AS ENUM ('sender', 'mover');

-- Create senders table
CREATE TABLE public.senders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  id_number TEXT,
  preferred_routes TEXT,
  experience_level TEXT,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create movers table  
CREATE TABLE public.movers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  id_number TEXT,
  transport_type TEXT NOT NULL,
  vehicle_details TEXT,
  license_number TEXT,
  preferred_routes TEXT,
  carrying_capacity TEXT,
  experience_level TEXT,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add Row Level Security
ALTER TABLE public.senders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.movers ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert (for registration)
CREATE POLICY "Anyone can register as sender" 
  ON public.senders 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can register as mover" 
  ON public.movers 
  FOR INSERT 
  WITH CHECK (true);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_senders_updated_at 
  BEFORE UPDATE ON public.senders 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_movers_updated_at 
  BEFORE UPDATE ON public.movers 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
