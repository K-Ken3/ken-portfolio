import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import AIAssistant from './components/AIAssistant.tsx';

const App: React.FC = () => {
  useEffect(() => {
    // Signal to the HTML loader that the home page has landed and is ready
    if (typeof (window as any).markAppAsLoaded === 'function') {
      (window as any).markAppAsLoaded();
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white bg-dark">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Statistics Bar */}
        <div className="bg-slate-900/50 py-12 border-y border-slate-800">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-extrabold font-display mb-2 text-primary">3+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold font-display mb-2 text-primary">30+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold font-display mb-2 text-primary">50+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold font-display mb-2 text-primary">15</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Open Source</p>
            </div>
          </div>
        </div>

        <Services />
        <Projects />
        
        {/* Testimonial Section */}
        <section className="py-24 glass border-y border-white/5">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <div className="text-6xl text-primary mb-8 opacity-20 font-serif leading-none">"</div>
            <p className="text-2xl md:text-3xl font-medium mb-12 italic leading-relaxed text-slate-200">
              Ken is a motivated and versatile tech enthusiast with strong interests in software development, networking, and digital innovation.
              You actively build real-world projects, combining technical skills in programming with creativity in design and media.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                <img src="https://picsum.photos/seed/ceo/100/100" alt="CEO" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">KARASIRA Ken</p>
                <p className="text-sm text-slate-500 font-medium">Social manager at Icyeza One Coffee Shop</p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-800/50 bg-dark">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-display font-extrabold tracking-tight">KEN<span className="text-primary">.</span>DEV</div>
          <div className="flex gap-8 text-slate-500 text-sm font-medium">
            <a 
              href="https://github.com/K-Ken3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ken-karasira-442452292/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/k.k3n.__/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Ken. Motivated by Code & Design.</p>
        </div>
      </footer>

      {/* Floating Personal AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;