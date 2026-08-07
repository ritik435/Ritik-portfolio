import { stackGroups } from './data';

const Stack = () => (
  <section id="stack" className="section-border">
    <div className="section-pad">
      <div className="section-label" style={{ color: 'var(--c4)' }}>06 · Stack &amp; credentials</div>
      <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(24px, 2.8vw, 34px)', letterSpacing: '-0.025em', lineHeight: 1.12, fontWeight: 700 }}>What I reach for.</h2>
    </div>
    <div className="grid-border">
      {stackGroups.map((s, i) => (
        <div key={i} className="grid-cell">
          <div className="mono" style={{ fontSize: 12, letterSpacing: '.1em', color: s.color, textTransform: 'uppercase' }}>{s.group}</div>
          <div style={{ marginTop: 14, fontSize: 15, lineHeight: 1.9 }}>{s.items}</div>
        </div>
      ))}
      <div className="grid-cell">
        <div className="mono" style={{ fontSize: 12, letterSpacing: '.1em', color: 'var(--c5)', textTransform: 'uppercase' }}>Education</div>
        <div style={{ marginTop: 14, fontSize: 16, fontWeight: 600 }}>B.Tech, Computer Science</div>
        <div style={{ color: 'var(--dim)', fontSize: 15 }}>MD University, Rohtak · 2018–2022 · CGPA 8.0</div>
      </div>
    </div>
  </section>
);

export default Stack;
