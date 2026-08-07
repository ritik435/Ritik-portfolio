import { jobs } from './data';

const Journey = () => (
  <section id="journey" className="section-border">
    <div style={{ padding: '52px 40px 8px' }}>
      <div className="section-label" style={{ color: 'var(--c1)' }}>03 · The journey so far</div>
      <h2 className="section-title">
        Four years, two products, one habit: <span className="highlight">own the system end to end</span>.
      </h2>
    </div>

    <div className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: '92px 1fr', padding: '34px 40px 6px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <svg viewBox="0 0 40 92" width="40" height="92" fill="none" stroke="var(--c1)" strokeWidth="3" strokeLinecap="round">
          <path d="M9 4 C 3 22, 33 30, 22 52 C 15 68, 20 78, 20 90" strokeDasharray="7 5" />
        </svg>
        <div className="timeline-bar" style={{ minHeight: 24 }} />
      </div>
      <div style={{ paddingLeft: 28 }}>
        <div className="section-label" style={{ color: 'var(--c1)', letterSpacing: '.12em' }}>Loose end · what's next</div>
        <p style={{ margin: '12px 0 0', fontSize: 19, maxWidth: '56ch' }}>
          I am finding an opportunity where shipping is fast-paced and engineering problems get solved with justifiable trade-offs.
        </p>
      </div>
    </div>

    {jobs.map((j, i) => (
      <div key={i} className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: '92px 1fr', padding: '0 40px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="timeline-node" style={{ borderColor: j.color }} />
          <div className="timeline-bar" />
        </div>
        <div className="job-inner" style={{ paddingLeft: 28, display: 'grid', gridTemplateColumns: '230px 1fr', gap: 36 }}>
          <div>
            <div className="mono" style={{ fontSize: 12, color: j.color }}>{j.dates}</div>
            <div style={{ marginTop: 12, fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>{j.role}</div>
            <div style={{ marginTop: 4, color: 'var(--dim)', fontSize: 15 }}>{j.company}</div>
            <div className="mono" style={{ marginTop: 6, fontSize: 12, color: 'var(--dim)' }}>{j.context}</div>
            <div className="mono" style={{ marginTop: 16, fontSize: 12, color: 'var(--dim)', lineHeight: 1.9 }}>{j.stack}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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
