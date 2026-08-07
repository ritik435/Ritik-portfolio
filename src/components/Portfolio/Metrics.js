import { metrics } from './data';

const Metrics = () => (
  <section id="impact" className="section-border">
    <div style={{ padding: '46px 40px 30px' }}>
      <div className="section-label" style={{ color: 'var(--dim)' }}>01 · The record</div>
      <h2 className="section-title">Numbers the systems moved.</h2>
    </div>
    <div className="grid-border">
      {metrics.map((m, i) => (
        <div key={i} className="metric-card">
          <div className="section-label" style={{ color: m.color, fontSize: 11, letterSpacing: '.12em' }}>{m.tag}</div>
          <div className="metric-val" style={{ color: m.color }}>{m.value}</div>
          <div style={{ marginTop: 12, fontWeight: 600, fontSize: 15 }}>{m.label}</div>
          <div style={{ marginTop: 5, fontSize: 14, color: 'var(--dim)' }}>{m.note}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Metrics;
