create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  avatar_url text,
  created_at timestamptz default now(),
  last_login_at timestamptz default now()
);

create table if not exists public.case_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  case_id text not null,
  case_day_key date not null,
  solved boolean not null,
  attempts int not null,
  hints_used int not null,
  points int not null,
  final_answer text,
  started_at timestamptz default now(),
  finished_at timestamptz,
  unique(user_id, case_day_key)
);

create table if not exists public.activity_logs (
  id bigserial primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  case_attempt_id uuid references public.case_attempts(id) on delete cascade,
  event_type text not null,
  case_id text,
  case_day_key date,
  hint_number int,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

create table if not exists public.user_stats (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  completed_cases int not null default 0,
  total_hints_used int not null default 0,
  total_points int not null default 0,
  avg_hints_used numeric generated always as (
    case when completed_cases = 0 then 0
    else total_hints_used::numeric / completed_cases end
  ) stored,
  updated_at timestamptz default now()
);

create table if not exists public.global_stats (
  id boolean primary key default true,
  completed_cases int not null default 0,
  total_hints_used int not null default 0,
  total_points int not null default 0,
  avg_hints_used numeric generated always as (
    case when completed_cases = 0 then 0
    else total_hints_used::numeric / completed_cases end
  ) stored,
  updated_at timestamptz default now(),
  constraint only_one_global_row check (id = true)
);

alter table public.profiles enable row level security;
alter table public.case_attempts enable row level security;
alter table public.activity_logs enable row level security;
alter table public.user_stats enable row level security;
alter table public.global_stats enable row level security;

create policy "profiles select own" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles insert own" on public.profiles
  for insert with check (auth.uid() = id);

create policy "profiles update own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

create policy "case attempts select own" on public.case_attempts
  for select using (auth.uid() = user_id);

create policy "case attempts insert own" on public.case_attempts
  for insert with check (auth.uid() = user_id);

create policy "case attempts update own" on public.case_attempts
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "activity logs insert own" on public.activity_logs
  for insert with check (auth.uid() = user_id);

create policy "activity logs select own" on public.activity_logs
  for select using (auth.uid() = user_id);

create policy "user stats select own" on public.user_stats
  for select using (auth.uid() = user_id);

create policy "global stats select authenticated" on public.global_stats
  for select using (auth.role() = 'authenticated');

create or replace function public.finish_case_attempt(
  p_user_id uuid,
  p_case_id text,
  p_case_day_key date,
  p_solved boolean,
  p_attempts int,
  p_hints_used int,
  p_points int,
  p_final_answer text
) returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  existing_attempt public.case_attempts%rowtype;
  completed_delta int := 1;
  hints_delta int := greatest(p_hints_used, 0);
  points_delta int := greatest(p_points, 0);
begin
  if auth.uid() is null or auth.uid() <> p_user_id then
    raise exception 'not allowed';
  end if;

  select *
    into existing_attempt
    from public.case_attempts
    where user_id = p_user_id
      and case_day_key = p_case_day_key
    for update;

  if found and existing_attempt.finished_at is not null then
    completed_delta := 0;
    hints_delta := greatest(p_hints_used, 0) - greatest(existing_attempt.hints_used, 0);
    points_delta := greatest(p_points, 0) - greatest(existing_attempt.points, 0);
  end if;

  insert into public.case_attempts (
    user_id, case_id, case_day_key, solved, attempts, hints_used, points, final_answer, finished_at
  ) values (
    p_user_id, p_case_id, p_case_day_key, p_solved, p_attempts, p_hints_used, p_points, p_final_answer, now()
  )
  on conflict (user_id, case_day_key) do update set
    solved = excluded.solved,
    attempts = excluded.attempts,
    hints_used = excluded.hints_used,
    points = excluded.points,
    final_answer = excluded.final_answer,
    finished_at = now();

  insert into public.user_stats (user_id, completed_cases, total_hints_used, total_points)
  values (p_user_id, completed_delta, hints_delta, points_delta)
  on conflict (user_id) do update set
    completed_cases = public.user_stats.completed_cases + completed_delta,
    total_hints_used = public.user_stats.total_hints_used + hints_delta,
    total_points = public.user_stats.total_points + points_delta,
    updated_at = now();

  insert into public.global_stats (id, completed_cases, total_hints_used, total_points)
  values (true, completed_delta, hints_delta, points_delta)
  on conflict (id) do update set
    completed_cases = public.global_stats.completed_cases + completed_delta,
    total_hints_used = public.global_stats.total_hints_used + hints_delta,
    total_points = public.global_stats.total_points + points_delta,
    updated_at = now();
end;
$$;

grant execute on function public.finish_case_attempt(uuid, text, date, boolean, int, int, int, text) to authenticated;

