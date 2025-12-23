import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { askJavaTutor } from '../services/geminiService';
import { Send, User, Bot, X, MessageSquare, Loader2 } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm your Java Mentor. Ask me anything about Java 17/21/24, Swing, Networking, or Enterprise Java!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askJavaTutor(messages, userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-96 h-[550px] flex flex-col border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="bg-orange-600 p-4 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-none">Java AI Mentor</span>
                <span className="text-[10px] opacity-80 mt-1">v24.0.1 Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1.5 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-tr-none shadow-md shadow-orange-900/10' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Analyzing Code...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Java 24 gatherers..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 dark:text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all border border-transparent focus:border-orange-500/30"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-orange-600 text-white p-2.5 rounded-xl hover:bg-orange-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 transition-all active:scale-95 shadow-lg shadow-orange-900/20"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-3 flex justify-center">
               <p className="text-[9px] text-slate-400 dark:text-slate-600 uppercase font-bold tracking-widest">Powered by Gemini 3 Pro</p>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 text-white p-4 rounded-2xl shadow-2xl hover:bg-orange-700 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group ring-4 ring-orange-600/10"
        >
          <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
        </button>
      )}
    </div>
  );
};