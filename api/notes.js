import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function getGeo(ip) {
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=city,country`);
    return await res.json();
  } catch {
    return {};
  }
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('notes')
      .select('text')
      .order('created_at', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data.map(n => n.text));
  }

  if (req.method === 'POST') {
    const { text } = req.body;
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return res.status(400).json({ error: 'text required' });
    }
    const note = text.trim().slice(0, 200);
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || '';
    const geo = await getGeo(ip);

    const { error } = await supabase.from('notes').insert({
      text: note,
      ip,
      city: geo.city || null,
      country: geo.country || null,
    });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ ok: true, note });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
