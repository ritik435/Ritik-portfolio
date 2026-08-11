import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function getGeo(ip) {
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=city,country,regionName,lat,lon`);
    return await res.json();
  } catch {
    return {};
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { visitor_id, page_path, referrer, user_agent, screen_w, screen_h, environment } = req.body;
  if (!visitor_id || !page_path) {
    return res.status(400).json({ error: 'visitor_id and page_path required' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || '';
  const geo = await getGeo(ip);

  const { error } = await supabase.from('page_views').insert({
    visitor_id,
    page_path,
    referrer: referrer || null,
    user_agent: user_agent || null,
    screen_w: screen_w || null,
    screen_h: screen_h || null,
    environment: environment || 'production',
    ip,
    city: geo.city || null,
    region: geo.regionName || null,
    country: geo.country || null,
    latitude: geo.lat || null,
    longitude: geo.lon || null,
  });

  if (error) return res.status(500).json({ error: error.message });
  return res.status(201).json({ ok: true });
}
