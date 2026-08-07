-- Run this in Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)

create table notes (
  id bigint generated always as identity primary key,
  text varchar(200) not null,
  created_at timestamptz default now()
);

create table contacts (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  role text,
  message text not null,
  created_at timestamptz default now()
);

-- Allow anonymous inserts + reads for notes (public board)
alter table notes enable row level security;
create policy "Anyone can read notes" on notes for select using (true);
create policy "Anyone can insert notes" on notes for insert with check (true);

-- Contacts: insert only, no public reads
alter table contacts enable row level security;
create policy "Anyone can submit contact" on contacts for insert with check (true);
