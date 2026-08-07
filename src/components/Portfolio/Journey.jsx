import { jobs } from './data';

const Journey = () => (
  <section id="journey" className="section-border">
    <div style={{ padding: '52px clamp(18px, 5vw, 40px) 8px' }}>
      <div className="section-label" style={{ color: 'var(--c1)' }}>03 · The journey so far</div>
      <h2 className="section-title">
        Four years, two products, one habit: <span className="highlight">own the system end to end</span>.
      </h2>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'clamp(42px, 8vw, 92px) 1fr', padding: '34px clamp(18px, 5vw, 40px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <svg viewBox="0 0 40 74" width="40" height="74" fill="none" stroke="var(--c1)" strokeWidth="7" strokeLinecap="round" style={{ display: 'block' }}>
          <path d="M20 74 L20 52 C 20 40, 11 36, 13 26 C 15 16, 24 14, 21 4" strokeOpacity="0.95" />
        </svg>
        <div style={{ width: 7, flex: 1, minHeight: 18, background: 'repeating-linear-gradient(135deg, var(--c1) 0 5px, color-mix(in oklab, var(--c1) 45%, var(--bg)) 5px 10px)' }} />
      </div>
      <div style={{ paddingLeft: 'clamp(12px, 3vw, 28px)' }}>
        <div className="section-label" style={{ color: 'var(--c1)', letterSpacing: '.12em' }}>Loose end · what's next</div>
        <p style={{ margin: '12px 0 0', fontSize: 19, maxWidth: '56ch' }}>
          I am finding an opportunity where shipping is fast-paced and engineering problems get solved with justifiable trade-offs.
        </p>
      </div>
    </div>

    {jobs.map((j, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: 'clamp(42px, 8vw, 92px) 1fr', padding: '0 clamp(18px, 5vw, 40px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="timeline-node" style={{ borderColor: j.color }} />
          <div className="timeline-bar" />
        </div>
        <div style={{ paddingLeft: 'clamp(12px, 3vw, 28px)', display: 'flex', flexWrap: 'wrap', gap: '28px 36px' }}>
          <div style={{ flex: '0 1 210px', marginBottom: 'clamp(18px, 5vw, 40px)' }}>
            <div className="mono" style={{ fontSize: 12, color: j.color }}>{j.dates}</div>
            <div style={{ marginTop: 12, fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>{j.role}</div>
            <div style={{ marginTop: 4, color: 'var(--dim)', fontSize: 15 }}>{j.company}</div>
            <div className="mono" style={{ marginTop: 6, fontSize: 12, color: 'var(--dim)' }}>{j.context}</div>
            <div className="mono" style={{ marginTop: 16, fontSize: 12, color: 'var(--dim)', lineHeight: 1.9 }}>{j.stack}</div>
          </div>
          <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 'clamp(18px, 5vw, 40px)' }}>
            {j.bullets.map((b, bi) => (
              <div key={bi} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 14 }}>
                <span className="bullet-marker" style={{ color: j.color }}>▸</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16 }}>{b.title}</div>
                  <div style={{ color: 'var(--dim)', fontSize: 15, marginTop: 3 }}>{b.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Journey;
