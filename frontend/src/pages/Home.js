import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigated with a `state.scrollTo`, scroll to that section
    const scrollTo = location.state && location.state.scrollTo;
    if (scrollTo) {
      // small delay to allow the page to render
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [location]);
  return (
    <div>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;