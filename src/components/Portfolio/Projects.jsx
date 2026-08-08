import { useState } from 'react';
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
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  </section>
);

function ProjectCard({ project: p }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (p.link) window.open(p.link, '_blank', 'noopener');
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        padding: '34px clamp(18px, 5vw, 40px)',
        borderRight: '1px solid var(--line)',
        cursor: p.link ? 'pointer' : 'default',
        backgroundColor: hovered ? `color-mix(in srgb, ${p.color} 10%, transparent)` : 'transparent',
        transition: 'background-color 0.25s ease',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 23, fontWeight: 700, letterSpacing: '-0.01em' }}>{p.name}</div>
        {p.link && (
          <>
            {/* Desktop: show on hover */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="checkout-btn checkout-desktop"
              style={{
                opacity: hovered ? 1 : 0,
                pointerEvents: hovered ? 'auto' : 'none',
                transition: 'opacity 0.2s ease',
              }}
            >
              Checkout ↗
            </a>
            {/* Mobile: always visible */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="checkout-btn checkout-mobile"
            >
              Checkout ↗
            </a>
          </>
        )}
      </div>
      <div className="mono" style={{ marginTop: 6, fontSize: 12, color: p.color }}>{p.kind}</div>
      <p style={{ margin: '16px 0 0', color: 'var(--dim)', fontSize: 15 }}>{p.text}</p>
      <div style={{ marginTop: 18 }}>
        <TagList tags={p.tags} />
      </div>
    </div>
  );
}

export default Projects;
