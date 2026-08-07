const steps = [
  { num: '01', color: 'var(--c2)', title: 'CONTEXT', text: 'PDI started as a single-tenant service I owned end to end in Java/Spring Boot with PostgreSQL and MongoDB, config-driven pricing, and AWS Lambda report generation.' },
  { num: '02', color: 'var(--c3)', title: 'DECISION', text: 'I re-architected it into a multi-tenant system with Kafka-driven event flows and an ops dashboard for step-level tracking, so operations could unblock orders without engineering.' },
  { num: '03', color: 'var(--c4)', title: 'RESULT', text: '7,000+ orders a month across 3 platforms, code discrepancy down 8%, fewer ops escalations. A custom config CMS followed: 50% less dev involvement, iteration twice as fast.' },
];

const CaseStudy = () => (
  <section id="case" className="section-border case-section">
    <div style={{ padding: '52px 40px 30px' }}>
      <div className="section-label" style={{ color: 'var(--c3)' }}>04 · Case study · Pre-Delivery Inspection</div>
      <h2 className="section-title" style={{ maxWidth: '28ch' }}>
        One service, then a <span className="highlight">multi-tenant platform</span>.
      </h2>
    </div>
    <div className="grid-border">
      {steps.map((s, i) => (
        <div key={i} style={{ padding: '32px 40px', borderRight: '1px solid var(--line)' }}>
          <div className="mono" style={{ fontSize: 12, color: s.color, letterSpacing: '.1em' }}>{s.num} · {s.title}</div>
          <p style={{ margin: '12px 0 0', color: 'var(--dim)', fontSize: 15 }}>{s.text}</p>
        </div>
      ))}
    </div>
    <div className="mono" style={{ padding: '26px 40px', borderTop: '1px solid var(--line)', fontSize: 13, color: 'var(--dim)', display: 'flex', flexWrap: 'wrap', gap: '10px 22px' }}>
      <span>Vehicle History refactor</span>
      <span>error rate −30%</span>
      <span>order conversion +2%</span>
      <span>revenue +5%</span>
      <span>PostgreSQL tuning · S3 pricing store · Redis cache</span>
    </div>
  </section>
);

export default CaseStudy;
