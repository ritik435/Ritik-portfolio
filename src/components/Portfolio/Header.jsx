const Header = ({ theme, toggleTheme }) => (
  <header className="pf-header">
    <span className="logo-box">RA</span>
    <span className="name">Ritik Arora</span>
    <nav>
      <a href="#work" data-track="nav-work">work</a>
      <a href="#journey" data-track="nav-journey">journey</a>
      <a href="#contact" data-track="nav-contact">contact</a>
      <button className="theme-btn" onClick={toggleTheme} data-track="theme-toggle">
        {theme === 'dark' ? 'light' : 'dark'}
      </button>
    </nav>
  </header>
);

export default Header;
