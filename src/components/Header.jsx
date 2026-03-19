import React, { useState, useEffect } from 'react';
import dalle from '../assets/shloklogo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`py-6 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/80 backdrop-blur-xl border-b border-dark/8 shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img src={dalle} alt="Shlok Jagtap" className="w-64" style={{ filter: 'invert(1) brightness(0.2)' }} />
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/DeImOs-Sj"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block text-subtle hover:text-dark transition-colors text-xs font-primary tracking-[3px]"
            >
              GITHUB
            </a>
            <a href="mailto:shlokjagtap.0608@gmail.com">
              <button className="btn btn-sm hidden sm:block">Work with Me</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
