import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
              Available for New Projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] tracking-tight">
              Designing the <span className="gradient-text">Future</span> of Technology
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              I am a motivated and detail-oriented professional with a strong interest in technology, 
              combining skills in IT, software development, and digital design, and a commitment 
              to continuous learning and improvement.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-secondary text-white font-semibold rounded-2xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                View My Work
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass hover:bg-slate-800 text-white font-semibold rounded-2xl transition-all border border-slate-700 flex items-center justify-center">
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_25s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-slate-800 rounded-full"></div>
              
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl animate-float">
                <img 
                  // Change the src below to your local file path, e.g., '/my-photo.jpg'
                  src="my-photo.JPEG" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
