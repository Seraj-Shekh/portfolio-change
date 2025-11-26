import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
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