const Hero = () => (
  <section className="pf-hero">
    <div className="rv section-label" style={{ color: 'var(--c1)', marginBottom: 26 }}>
      Backend engineer · ~4 years · Java, Spring Boot, distributed systems
    </div>
    <h1 className="rv">
      Backend systems built to hold — and to <span className="highlight">move the numbers</span>.
    </h1>
    <p className="rv subtitle">
      Four years shipping production backends in Core Java, Spring Boot and event-driven architecture.
      I owned Pre-Delivery Inspection at CarInfo from launch to 7,000+ orders a month, and the real-time
      socket infrastructure at 17Live that holds 50,000+ concurrent connections. The engineering is the craft.
      Conversion, revenue and returned engineering hours are how I keep score.
    </p>
    <div className="actions mono">
      <a href="#contact" className="btn primary" data-track="hero-start-conversation">Start a conversation</a>
      <a href="/uploads/Ritik_Arora_SDE2_Resume.pdf" download className="btn outline" style={{ borderColor: 'var(--c2)', color: 'var(--c2)' }} data-track="hero-resume-download">Résumé ↓</a>
      <a href="https://github.com/ritik435" target="_blank" rel="noopener noreferrer" className="btn outline" style={{ borderColor: 'var(--c4)', color: 'var(--c4)' }} data-track="hero-github">GitHub</a>
      <a href="https://www.linkedin.com/in/ritik-arora435" target="_blank" rel="noopener noreferrer" className="btn outline" style={{ borderColor: 'var(--c3)', color: 'var(--c3)' }} data-track="hero-linkedin">LinkedIn</a>
    </div>
  </section>
);

export default Hero;
