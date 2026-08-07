import { useEffect } from 'react';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { trackPageView, initClickTracking } from './lib/analytics';

function App() {
  const location = useLocation();

  useEffect(() => { initClickTracking(); }, []);
  useEffect(() => { trackPageView(location.pathname); }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/old-portfolio" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
