import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Features />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Home;
