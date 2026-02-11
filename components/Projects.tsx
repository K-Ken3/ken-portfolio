
import React from 'react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold">Recent Projects</h3>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-2 hover:underline group">
            View All Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-primary/30">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-primary/20 text-primary border border-primary/20 rounded-full uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  {project.description}
                </p>
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Explore Details</span>
                  <div className="w-10 h-10 rounded-full bg-white text-dark flex items-center justify-center font-bold">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
