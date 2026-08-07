import { useState } from 'react';
import './Portfolio.css';
import Header from './Header';
import Hero from './Hero';
import Metrics from './Metrics';
import Work from './Work';
import Journey from './Journey';
import CaseStudy from './CaseStudy';
import Projects from './Projects';
import Stack from './Stack';
import Board from './Board';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className="portfolio" data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Metrics />
      <Work />
      <Journey />
      <CaseStudy />
      <Projects />
      <Stack />
      <Board />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
