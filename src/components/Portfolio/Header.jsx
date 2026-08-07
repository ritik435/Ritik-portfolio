const Header = ({ theme, toggleTheme }) => (
  <header className="pf-header">
    <span className="logo-box">RA</span>
    <span className="name">Ritik Arora</span>
    <nav>
      <a href="#work">work</a>
      <a href="#journey">journey</a>
      <a href="#contact">contact</a>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'dark' ? 'light' : 'dark'}
      </button>
    </nav>
  </header>
);

export default Header;
