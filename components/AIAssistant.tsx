
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAI } from '../services/gemini.ts';
import { Message } from '../types.ts';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Ken's AI twin. I'm motivated and detail-oriented. Ask me anything about my IT skills or digital design services!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const history = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' as const : 'user' as const,
      parts: [{ text: msg.content }]
    }));

    try {
      const response = await chatWithAI(userMessage, history);
      setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm processing that information. One second." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I lost my connection for a moment. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] max-w-[90vw] glass h-[550px] rounded-[32px] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white flex justify-between items-center">
            <div>
              <h4 className="font-bold tracking-tight">AI Portfolio Assistant</h4>
              <p className="text-[10px] opacity-80 uppercase tracking-widest font-extrabold">Online & Ready</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-xl"
            >
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none shadow-lg shadow-primary/10' 
                  : 'bg-slate-800 text-slate-200 rounded-bl-none border border-white/5'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-bl-none text-sm flex gap-1.5 border border-white/5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my IT experience..."
                className="w-full bg-slate-800 border border-white/5 rounded-full px-5 py-3.5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-white transition-all"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 bg-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all animate-float"
      >
        <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20 group-hover:opacity-40"></span>
        <span className="relative z-10">{isOpen ? '✕' : '🤖'}</span>
      </button>
    </div>
  );
};

export default AIAssistant;
