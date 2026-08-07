import { metrics } from './data';

const Metrics = () => (
  <section id="impact" className="section-border">
    <div style={{ padding: '46px clamp(18px, 5vw, 40px) 30px' }}>
      <div className="section-label" style={{ color: 'var(--dim)' }}>01 · The record</div>
      <h2 className="section-title">Numbers the systems moved.</h2>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'clamp(6px, 2vw, 12px)', padding: '8px clamp(8px, 2vw, 18px) 56px' }}>
      {metrics.map((m, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'clamp(14px, 3vw, 26px) 4px', minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05, color: m.color }}>{m.value}</div>
          <div style={{ marginTop: 10, fontWeight: 600, fontSize: 'clamp(13px, 1.6vw, 16px)' }}>{m.label}</div>
          <div className="metric-note" style={{ marginTop: 6, fontSize: 14, color: 'var(--dim)', maxWidth: '34ch' }}>{m.note}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Metrics;
