import { useState } from 'react';
import { trackClick } from '../../lib/analytics';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', role: 'Full-time backend / SDE II–III', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      trackClick('contact-form-submit', { role: form.role });
    } catch {}
    setForm({ name: '', email: '', role: 'Full-time backend / SDE II–III', message: '' });
    setSent(true);
  };

  const set = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }));

  return (
    <section id="contact">
      <div style={{ padding: '66px clamp(18px, 5vw, 40px) 88px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 52, maxWidth: 1240 }}>
        <div>
          <div className="section-label" style={{ color: 'var(--c1)' }}>08 · Contact</div>
          <h2 style={{ margin: '16px 0 16px', fontSize: 'clamp(30px, 3.4vw, 44px)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>Have a system that needs an owner?</h2>
          <p style={{ margin: '0 0 26px', color: 'var(--dim)', fontSize: 17, maxWidth: '44ch' }}>
            Backend roles, architecture problems, or a product whose numbers are stuck. Tell me the shape of it — I reply within a working day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a href="mailto:developer.ritik435@gmail.com" className="contact-pill" data-track="contact-email" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 13px', border: '1px solid var(--line)', borderRadius: 100, background: 'var(--panel)', color: 'var(--fg)', minWidth: 0 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--c1)', flex: 'none' }} />
              <span className="mono" style={{ fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>developer.ritik435@gmail.com</span>
            </a>
            <a href="tel:+919817326281" className="contact-pill" data-track="contact-phone" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 13px', border: '1px solid var(--line)', borderRadius: 100, background: 'var(--panel)', color: 'var(--fg)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--c2)', flex: 'none' }} />
              <span className="mono" style={{ fontSize: 12, whiteSpace: 'nowrap' }}>+91 98173 26281</span>
            </a>
            <a href="https://www.linkedin.com/in/ritik-arora435" target="_blank" rel="noopener noreferrer" className="contact-pill contact-desktop" data-track="contact-linkedin" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 13px', border: '1px solid var(--line)', borderRadius: 100, background: 'var(--panel)', color: 'var(--fg)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--c3)', flex: 'none' }} />
              <span className="mono" style={{ fontSize: 12, whiteSpace: 'nowrap' }}>linkedin.com/in/ritik-arora435</span>
            </a>
            <a href="https://github.com/ritik435" target="_blank" rel="noopener noreferrer" className="contact-pill contact-desktop" data-track="contact-github" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 13px', border: '1px solid var(--line)', borderRadius: 100, background: 'var(--panel)', color: 'var(--fg)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--c4)', flex: 'none' }} />
              <span className="mono" style={{ fontSize: 12, whiteSpace: 'nowrap' }}>github.com/ritik435</span>
            </a>
          </div>
        </div>
        <form className="pf-form" onSubmit={handleSubmit}>
          <label>Name
            <input required placeholder="Your name" value={form.name} onChange={set('name')} />
          </label>
          <label>Email
            <input required type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} />
          </label>
          <label>Role type / budget
            <select value={form.role} onChange={set('role')}>
              <option>Full-time backend / SDE II–III</option>
              <option>Founding engineer</option>
              <option>Contract or consulting</option>
              <option>Just saying hello</option>
            </select>
          </label>
          <label>Message
            <textarea rows={5} placeholder="What are you building?" value={form.message} onChange={set('message')} />
          </label>
          <button type="submit" className="submit-btn" disabled={sent}>
            Send message
          </button>
          {sent && (
            <div style={{ marginTop: 12, padding: '14px 16px', background: 'var(--panel2)', border: '1px solid var(--c4)', borderRadius: 3, color: 'var(--c4)', fontSize: 15, lineHeight: 1.5 }}>
              Thanks for contacting. I will reply within 24-48 hours. Have a great day!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
