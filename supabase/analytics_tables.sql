-- ============================================================
-- Portfolio Analytics Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ============================================================

-- 1. Page views table
CREATE TABLE IF NOT EXISTS page_views (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  visitor_id  TEXT NOT NULL,
  page_path   TEXT NOT NULL,
  referrer    TEXT,
  user_agent  TEXT,
  screen_w    INT,
  screen_h    INT,
  country     TEXT,
  environment TEXT NOT NULL DEFAULT 'production',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Click events table
CREATE TABLE IF NOT EXISTS click_events (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  visitor_id  TEXT NOT NULL,
  button_name TEXT NOT NULL,
  page_path   TEXT NOT NULL,
  metadata    JSONB DEFAULT '{}',
  environment TEXT NOT NULL DEFAULT 'production',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_page_views_visitor    ON page_views (visitor_id);
CREATE INDEX IF NOT EXISTS idx_page_views_created    ON page_views (created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_path       ON page_views (page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_env        ON page_views (environment);
CREATE INDEX IF NOT EXISTS idx_click_events_visitor  ON click_events (visitor_id);
CREATE INDEX IF NOT EXISTS idx_click_events_created  ON click_events (created_at);
CREATE INDEX IF NOT EXISTS idx_click_events_button   ON click_events (button_name);
CREATE INDEX IF NOT EXISTS idx_click_events_env      ON click_events (environment);

-- RLS: allow anonymous inserts (anon key), restrict reads to service role
ALTER TABLE page_views  ENABLE ROW LEVEL SECURITY;
ALTER TABLE click_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert page_views"
  ON page_views FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anon insert click_events"
  ON click_events FOR INSERT
  TO anon
  WITH CHECK (true);

-- Service role can read everything (for dashboard queries)
CREATE POLICY "Service role full access page_views"
  ON page_views FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Service role full access click_events"
  ON click_events FOR ALL
  TO service_role
  USING (true);


-- ============================================================
-- ANALYTICS QUERIES
-- ============================================================

-- Unique visitors (prod only, all time)
SELECT COUNT(DISTINCT visitor_id) AS unique_visitors
FROM page_views
WHERE environment = 'production';

-- Unique visitors today (prod)
SELECT COUNT(DISTINCT visitor_id) AS unique_visitors_today
FROM page_views
WHERE environment = 'production' AND created_at >= CURRENT_DATE;

-- Unique visitors last 7 days (prod)
SELECT COUNT(DISTINCT visitor_id) AS unique_visitors_7d
FROM page_views
WHERE environment = 'production' AND created_at >= now() - INTERVAL '7 days';

-- Unique visitors last 30 days (prod)
SELECT COUNT(DISTINCT visitor_id) AS unique_visitors_30d
FROM page_views
WHERE environment = 'production' AND created_at >= now() - INTERVAL '30 days';

-- Unique visitors per day (last 30 days, prod)
SELECT
  DATE(created_at) AS day,
  COUNT(DISTINCT visitor_id) AS unique_visitors
FROM page_views
WHERE environment = 'production' AND created_at >= now() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY day DESC;

-- Events by environment (quick sanity check)
SELECT
  environment,
  COUNT(*) AS total_page_views,
  COUNT(DISTINCT visitor_id) AS unique_visitors
FROM page_views
GROUP BY environment;

-- Total page views per page (prod)
SELECT
  page_path,
  COUNT(*) AS views,
  COUNT(DISTINCT visitor_id) AS unique_visitors
FROM page_views
WHERE environment = 'production'
GROUP BY page_path
ORDER BY views DESC;

-- Most clicked buttons (prod, all time)
SELECT
  button_name,
  COUNT(*) AS clicks,
  COUNT(DISTINCT visitor_id) AS unique_clickers
FROM click_events
WHERE environment = 'production'
GROUP BY button_name
ORDER BY clicks DESC;

-- Button clicks per day (prod, last 30 days)
SELECT
  DATE(created_at) AS day,
  button_name,
  COUNT(*) AS clicks
FROM click_events
WHERE environment = 'production' AND created_at >= now() - INTERVAL '30 days'
GROUP BY DATE(created_at), button_name
ORDER BY day DESC, clicks DESC;

-- Visitor journey: pages + clicks in order (prod)
SELECT
  visitor_id,
  'page_view' AS event_type,
  page_path AS event_name,
  created_at
FROM page_views
WHERE environment = 'production'
UNION ALL
SELECT
  visitor_id,
  'click' AS event_type,
  button_name AS event_name,
  created_at
FROM click_events
WHERE environment = 'production'
ORDER BY visitor_id, created_at;

-- Referrer breakdown (prod)
SELECT
  referrer,
  COUNT(*) AS visits,
  COUNT(DISTINCT visitor_id) AS unique_visitors
FROM page_views
WHERE environment = 'production' AND referrer IS NOT NULL AND referrer != ''
GROUP BY referrer
ORDER BY visits DESC;

-- Device breakdown (prod)
SELECT
  screen_w || 'x' || screen_h AS resolution,
  COUNT(DISTINCT visitor_id) AS unique_visitors
FROM page_views
WHERE environment = 'production' AND screen_w IS NOT NULL
GROUP BY screen_w, screen_h
ORDER BY unique_visitors DESC;
