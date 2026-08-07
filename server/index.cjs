const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

// --- Storage layer: Supabase if configured, else local JSON ---

const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
      realtime: { transport: require('ws') },
    })
  : null;

const NOTES_FILE = path.join(__dirname, 'data', 'notes.json');
const CONTACTS_FILE = path.join(__dirname, 'data', 'contacts.json');

function readJSON(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return fallback; }
}

function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// --- Notes ---

app.get('/api/notes', async (req, res) => {
  if (supabase) {
    const { data, error } = await supabase
      .from('notes')
      .select('text')
      .order('created_at', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data.map(n => n.text));
  }
  res.json(readJSON(NOTES_FILE, []));
});

app.post('/api/notes', async (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ error: 'text required' });
  }
  const note = text.trim().slice(0, 200);

  if (supabase) {
    const { error } = await supabase.from('notes').insert({ text: note });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ ok: true, note });
  }

  const notes = readJSON(NOTES_FILE, []);
  notes.push(note);
  writeJSON(NOTES_FILE, notes);
  res.status(201).json({ ok: true, note });
});

// --- Contact ---

const transporter = process.env.SMTP_USER && process.env.SMTP_PASS
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

app.post('/api/contact', async (req, res) => {
  const { name, email, role, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, message required' });
  }

  const entry = { name, email, role: role || null, message };

  if (supabase) {
    const { error } = await supabase.from('contacts').insert(entry);
    if (error) return res.status(500).json({ error: error.message });
  } else {
    const contacts = readJSON(CONTACTS_FILE, []);
    contacts.push({ ...entry, date: new Date().toISOString() });
    writeJSON(CONTACTS_FILE, contacts);
  }

  if (transporter) {
    try {
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
});

// --- Serve React build in production ---
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Storage: ${supabase ? 'Supabase PostgreSQL' : 'Local JSON files'}`);
});
