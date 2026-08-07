import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, role, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, message required' });
  }

  const { error } = await supabase
    .from('contacts')
    .insert({ name, email, role: role || null, message });
  if (error) return res.status(500).json({ error: error.message });

  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `Portfolio Contact: ${name} — ${role || 'N/A'}`,
        text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\n${message}`,
      });
    } catch (err) {
      console.error('Email send failed:', err.message);
    }
  }

  res.json({ ok: true });
}
