
import React, { useState, useEffect, useRef } from 'react';
import { JAVA_TOPICS } from './data/javaContent';
import { JavaTopic } from './types';
import { 
  Terminal, 
  Layers, 
  Globe, 
  Cpu, 
  Layout, 
  Search, 
  ArrowRight,
  ChevronRight,
  BookOpen,
  Coffee,
  X,
  Filter,
  Copy,
  Check,
  Mail,
  Code2,
  Play,
  Loader2,
  Files,
  History
} from 'lucide-react';

const CATEGORIES = ['All', 'Basics', 'Modern Java', 'GUI', 'Networking', 'Enterprise', 'Architecture'];

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<JavaTopic>(JAVA_TOPICS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copied, setCopied] = useState(false);
  const [allCopied, setAllCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const contentSectionRef = useRef<HTMLElement>(null);

  const filteredTopics = JAVA_TOPICS.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Modern Java': return <Terminal className="text-orange-400" size={18} />;
      case 'GUI': return <Layout className="text-blue-400" size={18} />;
      case 'Networking': return <Globe className="text-emerald-400" size={18} />;
      case 'Enterprise': return <Layers className="text-purple-400" size={18} />;
      case 'Architecture': return <Cpu className="text-red-400" size={18} />;
      default: return <BookOpen className="text-slate-400" size={18} />;
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(selectedTopic.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyAll = async () => {
    const allCode = filteredTopics.map(t => `// ${t.title}\n${t.codeSnippet}`).join('\n\n');
    await navigator.clipboard.writeText(allCode);
    setAllCopied(true);
    setTimeout(() => setAllCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTerminalOutput(null);
    
    setTimeout(() => {
      setIsRunning(false);
      setTerminalOutput(selectedTopic.expectedOutput || "Program finished with exit code 0.");
      
      setTimeout(() => {
        terminalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }, 1200);
  };

  const handleTopicSelect = (topic: JavaTopic) => {
    setSelectedTopic(topic);
    setTerminalOutput(null);
    // Smoothly scroll the content section into view
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-300">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 text-white py-4 px-6 sticky top-0 z-30 shadow-2xl flex justify-between items-center backdrop-blur-md bg-opacity-90">
        <div className="flex items-center gap-3">
          <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-900/20">
            <Coffee size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Java Mastery Hub</h1>
            <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Production Build 2025</p>
          </div>
        </div>

        <div className="relative hidden md:block group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search core concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-950 rounded-xl py-2 pl-10 pr-10 w-80 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all border border-slate-800 placeholder:text-slate-600"
          />
          {searchQuery && (
            <button 
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white p-0.5 rounded-full hover:bg-slate-800 transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex gap-4 items-center">
          <button 
            onClick={handleCopyAll}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 transition-all border border-slate-700 active:scale-95 shadow-sm"
          >
            {allCopied ? <Check size={14} className="text-emerald-400" /> : <Files size={14} />}
            {allCopied ? 'Copied All' : 'Copy All Snippets'}
          </button>
          <a href="#" className="bg-orange-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-900/10 active:scale-95">Enroll Now</a>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 bg-slate-900/50 border-r border-slate-800 overflow-y-auto max-h-[50vh] lg:max-h-[calc(100vh-72px)] lg:sticky lg:top-[72px] flex flex-col scrollbar-thin">
          <div className="p-6 pb-0">
            <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Filter size={14} />
              Filter Path
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    selectedCategory === cat 
                      ? 'bg-orange-600 border-orange-500 text-white shadow-lg shadow-orange-900/20' 
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="h-px bg-slate-800 w-full mb-6"></div>
            <h2 id="curriculum" className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Mastery Syllabus</h2>
          </div>
          
          <nav className="flex-1 px-4 pb-6 space-y-2">
            {filteredTopics.length > 0 ? (
              filteredTopics.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic)}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-4 group border ${
                    selectedTopic.id === topic.id 
                      ? 'bg-slate-800 border-slate-700 text-white shadow-xl ring-1 ring-orange-500/30' 
                      : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-colors ${selectedTopic.id === topic.id ? 'bg-slate-900' : 'bg-slate-900/50'}`}>
                    {getCategoryIcon(topic.category)}
                  </div>
                  <div className="flex-1 truncate">
                    <div className="text-sm font-bold truncate">{topic.title}</div>
                    <div className="text-[10px] font-mono text-slate-600 tracking-wider uppercase mt-0.5">{topic.version || topic.category}</div>
                  </div>
                  <ChevronRight size={16} className={`text-slate-700 group-hover:text-slate-400 transition-all transform ${selectedTopic.id === topic.id ? 'translate-x-1 text-orange-500' : ''}`} />
                </button>
              ))
            ) : (
              <div className="py-12 text-center text-slate-600">
                <Search size={20} className="mx-auto mb-2 opacity-20" />
                <p className="text-xs">No topics found.</p>
              </div>
            )}
          </nav>
        </aside>

        {/* Content Area */}
        <section ref={contentSectionRef} className="flex-1 p-6 md:p-12 lg:p-16 bg-slate-950">
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-lg border border-indigo-500/20 uppercase tracking-widest">
                {selectedTopic.category}
              </span>
              {selectedTopic.version && (
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold rounded-lg border border-orange-500/20 uppercase tracking-widest">
                  {selectedTopic.version}
                </span>
              )}
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">{selectedTopic.title}</h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              {selectedTopic.description}
            </p>

            <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden mb-12 border border-slate-800 shadow-indigo-500/5">
              <div className="bg-slate-800/80 px-6 py-4 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <span className="h-4 w-px bg-slate-700"></span>
                  <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-orange-500" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] font-bold">Source.java</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-[10px] font-bold text-white transition-all uppercase tracking-widest active:scale-95 shadow-lg shadow-emerald-900/20 border border-emerald-500/30"
                  >
                    {isRunning ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} />}
                    {isRunning ? 'Executing...' : 'Run'}
                  </button>
                  <button 
                    onClick={handleCopyCode}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-[10px] font-bold text-slate-300 transition-all uppercase tracking-widest border border-slate-800 active:scale-95"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="relative group">
                <pre className="p-8 text-sm font-mono overflow-x-auto text-indigo-200 leading-relaxed scrollbar-thin bg-slate-900/50">
                  <code>{selectedTopic.codeSnippet}</code>
                </pre>
              </div>

              {/* Terminal Section */}
              {(terminalOutput || isRunning) && (
                <div ref={terminalRef} className="border-t border-slate-800 bg-black/80 backdrop-blur animate-in slide-in-from-top-2 duration-300">
                  <div className="px-6 py-2 bg-slate-900/50 flex items-center justify-between border-b border-slate-800/50">
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                      <Terminal size={12} />
                      Output Console
                    </span>
                    <button onClick={() => setTerminalOutput(null)} className="text-slate-600 hover:text-slate-400">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="p-6 font-mono text-sm min-h-[100px]">
                    {isRunning ? (
                      <div className="flex items-center gap-3 text-slate-500">
                        <span className="animate-pulse">_</span>
                        <span>Compiling {selectedTopic.title}...</span>
                      </div>
                    ) : (
                      <div className="space-y-1 text-emerald-400">
                        <div className="text-slate-600 mb-2 font-bold text-[10px]">EXECUTION RESULT:</div>
                        <div className="whitespace-pre-wrap leading-relaxed">{terminalOutput}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-600/10 flex items-center justify-center border border-orange-600/20">
                  <ArrowRight size={18} className="text-orange-500" />
                </div>
                Detailed Explanation
              </h3>
              <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 text-slate-400 leading-relaxed font-medium shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-600"></div>
                <p>{selectedTopic.explanation}</p>
              </div>
            </div>

            {selectedTopic.versionHistory && (
              <div className="mb-16 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/10 flex items-center justify-center border border-emerald-600/20">
                    <History size={18} className="text-emerald-500" />
                  </div>
                  Evolutionary Path
                </h3>
                <div className="space-y-4">
                  {selectedTopic.versionHistory.map((update, idx) => (
                    <div key={idx} className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-4 group hover:bg-slate-800/40 transition-all">
                      <div className="min-w-[100px]">
                        <span className="text-xs font-black text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                          {update.version}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {update.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-800/50">
              <div className="group bg-gradient-to-br from-indigo-900/20 to-slate-900 rounded-3xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all shadow-xl shadow-indigo-500/5">
                <h4 className="font-bold text-lg text-white mb-3 flex items-center gap-3">
                  <BookOpen size={20} className="text-indigo-400" />
                  Skill Test
                </h4>
                <p className="text-slate-500 text-sm mb-6">Quiz yourself on the core concepts of {selectedTopic.title}.</p>
                <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-500 transition-all active:scale-95">Take Quiz</button>
              </div>
              <div className="group bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all shadow-xl shadow-slate-950/50">
                <h4 className="font-bold text-lg text-white mb-3 flex items-center gap-3">
                  <Terminal size={20} className="text-orange-500" />
                  Code Lab
                </h4>
                <p className="text-slate-500 text-sm mb-6">Explore more complex variations of {selectedTopic.title}.</p>
                <button className="w-full bg-slate-800 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-all border border-slate-700 active:scale-95">Open Lab</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-slate-800 p-3 rounded-2xl border border-slate-700">
              <Coffee className="text-orange-500" size={32} />
            </div>
            <div>
              <span className="text-lg font-black text-white tracking-tight">Java Mastery Hub</span>
              <p className="text-sm text-slate-500 mt-1">Refining the Java ecosystem since 2025.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-sm font-semibold text-slate-400">
            <a href="#curriculum" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'})}} className="hover:text-white transition-all underline decoration-slate-700 underline-offset-8 decoration-2 hover:decoration-orange-500">Course List</a>
            <a href="mailto:gold.noam@gmail.com" className="flex items-center gap-2 hover:text-orange-500 transition-all">
              <Mail size={16} />
              Send Feedback
            </a>
          </div>

          <div className="pt-12 border-t border-slate-800 w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-mono text-slate-600 uppercase tracking-widest">
              (C) Noam Gold AI 2025 • Master of Java
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-slate-700 uppercase">Contact</span>
              <a href="mailto:gold.noam@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors font-bold">
                gold.noam@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
