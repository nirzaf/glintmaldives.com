import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Features />
        <Services />
        <Portfolio />
      </main>
    </>
  );
};

export default Home;
