import { useState } from 'react';
import { platforms, LINKS } from './data';
import TagList from './TagList';

const Work = () => (
  <section id="work" className="section-border">
    <RetailRevampSection />

    <div style={{ padding: '24px clamp(18px, 5vw, 40px) 12px' }}>
      <div className="section-label" style={{ color: 'var(--dim)' }}>Platforms I've owned before</div>
    </div>
    {platforms.map((pf, i) => (
      <PlatformCard key={i} pf={pf} />
    ))}
  </section>
);

function RetailRevampSection() {
  const [hovered, setHovered] = useState(false);
  const demoLink = LINKS.retailRevamp;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(demoLink, '_blank', 'noopener')}
      style={{
        padding: '52px clamp(18px, 5vw, 40px) 32px',
        cursor: 'pointer',
        backgroundColor: hovered ? 'color-mix(in srgb, var(--c5) 10%, transparent)' : 'transparent',
        transition: 'background-color 0.25s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <div className="section-label" style={{ color: 'var(--c5)' }}>02 · What I'm building now</div>
        <a
          href={demoLink}
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
          Demo ↗
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="checkout-btn checkout-mobile"
        >
          Demo ↗
        </a>
      </div>
      <h2 style={{ margin: '14px 0 20px', fontSize: 'clamp(28px, 3.6vw, 46px)', letterSpacing: '-0.03em', lineHeight: 1.06, fontWeight: 700, maxWidth: '26ch' }}>
        Bringing back the <span className="highlight">emotions of retail shops</span>, with a modern instant-delivery approach.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: 34, maxWidth: 1150 }}>
        <p style={{ margin: 0, fontSize: 18 }}>Retail Revamp is built for small business. Its mission is to help retail owners end to end — from finding spaces to increasing sales.</p>
        <p style={{ margin: 0, color: 'var(--dim)', fontSize: 17 }}>The current goal is to tell a business what it is worth, and to create an automated process where owners simply state what they owe or what they own.</p>
        <p style={{ margin: 0, color: 'var(--dim)', fontSize: 17 }}>Underneath it: a Java offline-first sync engine with conflict resolution — 1,000+ transactions, 20+ concurrent users at sub-500ms — a SQL schema designed for multi-device sync, and Whisper voice commands so owners can simply talk to it.</p>
      </div>
      <div style={{ marginTop: 24 }}>
        <TagList tags={['Offline-first sync', 'Conflict resolution', 'Business valuation', 'Owe / own automation', 'Whisper voice']} activeColor="var(--c5)" />
      </div>
    </div>
  );
}

function PlatformCard({ pf }) {
  const [hovered, setHovered] = useState(false);
  const hasMultipleLinks = pf.links && pf.links.length > 0;

  const handleClick = () => {
    if (pf.link) window.open(pf.link, '_blank', 'noopener');
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        display: 'flex', flexWrap: 'wrap', gap: '20px 40px',
        padding: '30px clamp(18px, 5vw, 40px)',
        borderTop: '1px solid var(--line)',
        cursor: pf.link ? 'pointer' : 'default',
        backgroundColor: hovered ? `color-mix(in srgb, ${pf.color} 10%, transparent)` : 'transparent',
        transition: 'background-color 0.25s ease',
      }}
    >
      <div className="mono" style={{ flex: '0 1 210px', fontSize: 12, color: pf.color, lineHeight: 1.9 }}>{pf.period}</div>
      <div style={{ flex: '1 1 380px', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ fontSize: 25, fontWeight: 700, letterSpacing: '-0.02em' }}>{pf.name}</div>
          {hasMultipleLinks ? (
            <>
              {/* Desktop: show on hover */}
              <div className="checkout-desktop" style={{ display: 'flex', gap: 8, opacity: hovered ? 1 : 0, pointerEvents: hovered ? 'auto' : 'none', transition: 'opacity 0.2s ease' }}>
                {pf.links.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="checkout-btn">
                    {l.label} ↗
                  </a>
                ))}
              </div>
              {/* Mobile: always visible */}
              <div className="checkout-mobile checkout-mobile-group">
                {pf.links.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="checkout-btn">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </>
          ) : pf.link ? (
            <>
              <a
                href={pf.link}
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
              <a
                href={pf.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="checkout-btn checkout-mobile"
              >
                Checkout ↗
              </a>
            </>
          ) : null}
        </div>
        <p style={{ margin: '12px 0 0', color: 'var(--dim)', fontSize: 16, maxWidth: '76ch' }}>{pf.text}</p>
        <div className="mono" style={{ marginTop: 14, fontSize: 12 }}>{pf.proof}</div>
        <div style={{ marginTop: 16 }}>
          <TagList tags={pf.tags} />
        </div>
      </div>
    </div>
  );
}

export default Work;
