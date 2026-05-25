import { useEffect, useState } from "react";
import { ShieldCheck, Target, BookOpen, Terminal, Cpu, FileText, Send, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutMe = () => {
  const [terminalTab, setTerminalTab] = useState("skills");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      id="about"
      className="py-32 px-6 bg-slate-50 text-slate-900 relative overflow-hidden"
    >
      {/* Subtle tech background grids */}
      <div className="absolute inset-0 bg-repeat opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
        backgroundSize: "20px 20px"
      }} />

      <div className="container max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 text-indigo-600">
            <Sparkles size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Core Thesis & Capabilities
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base font-body-lg">
            Bridging the gap between secure EVM smart contracts, dynamic AI tools, and cryptographic research.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Core Slogan & Bio (Col-span 7) */}
          <div
            data-aos="fade-up"
            className="md:col-span-7 bg-white border border-slate-200 rounded-[2.25rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.01]"
          >
            <div className="space-y-6 text-left">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-500">The Specialty</span>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Turning Ideas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Into High-Performance Products
                </span> <br />
                is My Specialty ✨
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-lg font-body-md">
                I specialize in writing gas-optimized smart contracts, auditing EVM state variables, and building real-time data pipelines integrated with cognitive AI systems. I focus on developing clean, highly performant, and secure Web3 products.
              </p>
            </div>

            {/* Core Action Links */}
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="/wintermute_resume.pdf"
                download="Surya_Singu_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer animate-link-pulse"
              >
                <FileText size={14} />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-slate-50/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Send size={14} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Bento Card 2: Interactive Terminal Console (Col-span 5) */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="md:col-span-5 bg-slate-950 text-slate-300 border border-white/10 rounded-[2.25rem] p-6 shadow-2xl flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300 overflow-hidden relative"
          >
            {/* macOS traffic lights */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 font-bold uppercase tracking-widest">
                <Terminal size={11} />
                developer_console
              </div>
            </div>

            {/* Terminal Content Tabs */}
            <div className="flex gap-2 mb-4 text-[9px] font-mono border-b border-white/5 pb-2">
              <button
                onClick={() => setTerminalTab("skills")}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${terminalTab === "skills" ? "bg-white/10 text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
              >
                identity.json
              </button>
              <button
                onClick={() => setTerminalTab("command")}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${terminalTab === "command" ? "bg-white/10 text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
              >
                build.sh
              </button>
            </div>

            {/* Console Screen Output */}
            <div className="flex-grow font-mono text-[11px] text-left leading-relaxed py-2">
              {terminalTab === "skills" ? (
                <div className="space-y-2">
                  <p className="text-slate-500">$ cat identity.json</p>
                  <pre className="text-cyan-400 font-semibold">{`{
  "name": "Surya Singu",
  "role": "Web3 & AI Integrator",
  "core_stack": [
    "Solidity", "Foundry", 
    "React/Next.js", "CCIP"
  ],
  "testing": "100% Invariants",
  "status": "OPERATIONAL"
}`}</pre>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <p className="text-slate-500">$ ./build.sh --optimize</p>
                  <p className="text-emerald-400">✔ Foundry compiler loaded</p>
                  <p className="text-indigo-400">⚡ Invariant simulations running...</p>
                  <p className="text-purple-400">⚡ Gas optimization audit: Passed (-35%)</p>
                  <p className="text-emerald-400">✔ Output compiled successfully</p>
                </div>
              )}
            </div>

            <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-[8px] font-mono text-slate-500">
              <span>STATUS: ONLINE</span>
              <span className="text-emerald-500 animate-pulse">● syncd_node</span>
            </div>
          </div>

          {/* Bento Card 3: Smart Contract Security & Gas (Col-span 4) */}
          <div
            data-aos="fade-up"
            className="md:col-span-4 bg-white border border-slate-200 rounded-[2.25rem] p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(0,0,0,0.04)] transition-all duration-300"
          >
            <div className="space-y-4 text-left">
              <div className="p-3 w-fit rounded-2xl bg-blue-50 text-blue-500 border border-blue-100 shadow-xs">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Smart Contracts</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-body-md">
                  Focused on writing secure, gas-optimized, and audit-ready Solidity smart contracts using Foundry for intensive unit and invariant testing.
                </p>
              </div>
            </div>
            
            {/* Stats display */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">FOUNDRY RUNS</span>
                <span className="text-lg font-black text-slate-800">1.2M+ Invariants</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                100% Core Passed
              </span>
            </div>
          </div>

          {/* Bento Card 4: Web3 & AI Integration (Col-span 4) */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="md:col-span-4 bg-white border border-slate-200 rounded-[2.25rem] p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(0,0,0,0.04)] transition-all duration-300"
          >
            <div className="space-y-4 text-left">
              <div className="p-3 w-fit rounded-2xl bg-rose-50 text-rose-500 border border-rose-100 shadow-xs">
                <Cpu size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Web3 & AI Integrations</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-body-md">
                  Building cognitive Web3 platforms by merging real-time on-chain data pipelines (DefiLlama, CCIP, oracles) with artificial intelligence.
                </p>
              </div>
            </div>

            {/* Pipeline status visual representation */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">DATA FLOWS</span>
                <span className="text-lg font-black text-slate-800">DefiLlama & CCIP</span>
              </div>
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md animate-pulse">
                Synced Live
              </span>
            </div>
          </div>

          {/* Bento Card 5: Research focus (Col-span 4) */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="md:col-span-4 bg-white border border-slate-200 rounded-[2.25rem] p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(0,0,0,0.04)] transition-all duration-300"
          >
            <div className="space-y-4 text-left">
              <div className="p-3 w-fit rounded-2xl bg-purple-50 text-purple-500 border border-purple-100 shadow-xs">
                <BookOpen size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">DeFi & L1 Research</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-body-md">
                  Deep diving into delta-neutral mechanics, token bridging architectures, treasury yield simulations, and novel parallel L1 primitives.
                </p>
              </div>
            </div>

            {/* Research target block */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 block uppercase">CURRENT NODE</span>
                <span className="text-lg font-black text-slate-800">L1 Parallelized</span>
              </div>
              <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md">
                Active Research
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};