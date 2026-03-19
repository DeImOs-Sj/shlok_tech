import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import GlobalParticles from './components/GlobalParticles';

const App = () => {
  return (
    // Outer wrapper: beige bg, no overflow-hidden so fixed particles show
    <div className="bg-primary min-h-screen">
      {/* Fixed elements */}
      <ScrollProgress />
      <GlobalParticles />

      {/* Scrollable content above particles */}
      <div className="relative z-10">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
