
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<null | 'success' | 'loading'>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('fullName');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    // KEN: Change this number to your actual WhatsApp number (include country code, no + or spaces)
    const whatsappNumber = "250780000000"; 
    
    const text = `*New Project Inquiry* 🚀
----------------------------
*Name:* ${name}
*Email:* ${email}
*Service:* ${service}

*Message:*
${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Simulate a brief loading state for better UX before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setStatus('success');
      setTimeout(() => setStatus(null), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-tight">Ready to start a project?</h3>
            <p className="text-slate-400 mb-12">
              Currently available for freelance work and consulting. I'm always looking for interesting projects and ambitious teams.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Email me at</p>
                <p className="text-xl font-medium">karasiraken5@gmail.com</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Based in</p>
                <p className="text-xl font-medium">Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Full Name</label>
                  <input 
                    name="fullName"
                    required 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="Alex Johnson"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Email Address</label>
                  <input 
                    name="email"
                    required 
                    type="email" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Select Service</label>
                <div className="relative">
                  <select 
                    name="service"
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary appearance-none transition-colors text-white cursor-pointer"
                  >
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>AI Integration</option>
                    <option>Consulting</option>
                    <option>Graphic Design</option>
                    <option>Social Management</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    ▼
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Message</label>
                <textarea 
                  name="message"
                  required 
                  rows={4} 
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Redirecting to WhatsApp...
                  </>
                ) : status === 'success' ? (
                  'Opening WhatsApp! 💬'
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Send Message via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
