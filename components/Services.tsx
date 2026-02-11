
import React from 'react';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Services I Provide</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            I offer a wide range of digital services combining technical precision with creative flair. 
            Each service is delivered with a commitment to continuous learning and improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group glass p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-slate-800/40 hover:border-primary/50"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-900 border border-white/5 rounded-md text-[10px] font-bold text-slate-500 uppercase tracking-tighter transition-colors group-hover:text-primary group-hover:border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
