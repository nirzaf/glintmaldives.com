import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Values from '../components/Values';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main id="main" className="overflow-hidden">
        <About />
        <Values />
        <Features />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default Home;
