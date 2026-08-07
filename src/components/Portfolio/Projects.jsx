import { projects } from './data';
import TagList from './TagList';

const Projects = () => (
  <section id="projects" className="section-border">
    <div className="section-pad">
      <div className="section-label" style={{ color: 'var(--c2)' }}>05 · Side projects</div>
      <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(24px, 2.8vw, 34px)', letterSpacing: '-0.025em', lineHeight: 1.12, fontWeight: 700 }}>Built outside work hours.</h2>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', borderTop: '1px solid var(--line)' }}>
      {projects.map((p, i) => (
        <div key={i} style={{ padding: '34px clamp(18px, 5vw, 40px)', borderRight: '1px solid var(--line)' }}>
          <div style={{ fontSize: 23, fontWeight: 700, letterSpacing: '-0.01em' }}>{p.name}</div>
          <div className="mono" style={{ marginTop: 6, fontSize: 12, color: p.color }}>{p.kind}</div>
          <p style={{ margin: '16px 0 0', color: 'var(--dim)', fontSize: 15 }}>{p.text}</p>
          <div style={{ marginTop: 18 }}>
            <TagList tags={p.tags} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
