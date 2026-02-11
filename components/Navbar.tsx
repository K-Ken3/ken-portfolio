
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-extrabold tracking-tighter">
          KEN<span className="text-primary">.</span>DEV
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="px-5 py-2.5 bg-primary hover:bg-secondary text-white rounded-full transition-all shadow-lg shadow-primary/20">
            Let's Talk
          </a>
        </div>

        <button className="md:hidden text-2xl">
          <span className="sr-only">Menu</span>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
