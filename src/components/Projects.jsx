import { ArrowUpRight, Github, Zap, Shield, Activity, Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 5,
    title: "DealFlow Intelligence",
    subtitle: "AI VC Command Center",
    description:
      "An institutional-grade, AI-powered command center designed for Crypto Venture Capital and Quantitative Trading desks. Features a real-time on-chain data pipeline via DefiLlama, a persistent AI Research Copilot, and an interactive Kanban pipeline. Boosts due diligence efficiency by 10x.",
    image: "/Projects/Dealflow.png",
    meta: [
      { label: "Core Dev", value: "Next.js 16" },
      { label: "Intelligence", value: "Gemini 2.5 Flash" },
      { label: "Data Pipeline", value: "DefiLlama API" },
    ],
    tags: ["Next.js 16", "TypeScript", "Gemini AI", "Web3", "Tailwind CSS"],
    url: "https://dealflow-intelligence-one.vercel.app/",
    git: "https://github.com/surya00008/dealflow-intelligence",
    isDark: true,
    highlight: { label: "Diligence Efficiency", value: "+1000% (10x Faster)", icon: "zap" },
  },
  {
    id: 6,
    title: "Foundry DeFi Stablecoin",
    subtitle: "Algorithmic & Exogenous Stablecoin",
    description:
      "An algorithmic, exogenously collateralized (wETH & wBTC) stablecoin system pegged to the US Dollar. Engineered with a highly secure minting/burning core engine, overcollateralized lending structures, and automated flash liquidation mechanics. Backed by 100% unit and invariant test coverage in Foundry.",
    image: "/Projects/Stablecoin.png",
    meta: [
      { label: "Language", value: "Solidity" },
      { label: "Framework", value: "Foundry" },
      { label: "Collateral", value: "wETH & wBTC" },
    ],
    tags: ["Solidity", "Foundry", "Stablecoin", "DeFi Core", "Web3"],
    url: "https://github.com/surya00008/foundry-defi-stablecoin",
    git: "https://github.com/surya00008/foundry-defi-stablecoin",
    isDark: false,
    highlight: { label: "Test Coverage Status", value: "100% Core Invariants Passed", icon: "shield" },
  },
  {
    id: 7,
    title: "Cross-Chain CCIP Rebase Token",
    subtitle: "Yield-Bearing Token Bridge",
    description:
      "A cross-chain yield-bearing rebase token system powered by Chainlink CCIP. Enables users to securely transfer rebasing tokens across multiple EVM blockchains while preserving dynamic interest-accruing balances and state synchronization across chains seamlessly.",
    image: "/Projects/CcipRebase.png",
    meta: [
      { label: "Interoperability", value: "Chainlink CCIP" },
      { label: "Token Model", value: "Rebasing ERC-20" },
      { label: "Dev Tools", value: "Foundry & Solidity" },
    ],
    tags: ["Solidity", "Chainlink CCIP", "Cross-Chain", "Foundry", "Ethers"],
    url: "https://github.com/surya00008/CCIP-Rebase-Token",
    git: "https://github.com/surya00008/CCIP-Rebase-Token",
    isDark: true,
    highlight: { label: "Bridge Sync Latency", value: "~12s Finalized Sync", icon: "activity" },
  },
  {
    id: 8,
    title: "Optimized NFT Minting Contract",
    subtitle: "Gas-Optimized ERC-721",
    description:
      "A highly optimized ERC-721 smart contract for NFT minting, featuring gas-efficient batch minting, cryptographic merkle tree-based whitelisting, metadata reveals, and secure ERC-2981 royalty standards. Built and deployed with Hardhat and IPFS.",
    image: "/Projects/NftMinting.png",
    meta: [
      { label: "Standard", value: "ERC-721 & 2981" },
      { label: "Gas Optimization", value: "Bit-packing & Merkle" },
      { label: "Framework", value: "Hardhat & IPFS" },
    ],
    tags: ["Solidity", "ERC-721", "Hardhat", "Gas Optimization", "IPFS"],
    url: "https://github.com/surya00008/NFT-Minting-Contract",
    git: "https://github.com/surya00008/NFT-Minting-Contract",
    isDark: false,
    highlight: { label: "Batch Gas Efficiency", value: "-45% vs Standard OpenZeppelin", icon: "cpu" },
  },
];

export const Projects = () => {
  const [blockNumber, setBlockNumber] = useState(20149402);
  const [gasPrice, setGasPrice] = useState(18);
  const [latency, setLatency] = useState(8);
  const [peers, setPeers] = useState(128);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const blockInterval = setInterval(() => {
      setBlockNumber((prev) => prev + 1);
    }, 12000);

    const metricsInterval = setInterval(() => {
      setGasPrice(Math.floor(Math.random() * (22 - 14 + 1)) + 14);
      setLatency(Math.floor(Math.random() * (11 - 6 + 1)) + 6);
      setPeers(Math.floor(Math.random() * (132 - 124 + 1)) + 124);
    }, 4000);

    return () => {
      clearInterval(blockInterval);
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <section id="projects" className="relative">
      {/* Active Node Portal Divider System */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/5 overflow-hidden z-20">
        {/* Left Outward Laser Comet */}
        <div className="absolute top-0 right-1/2 h-full w-[200px] bg-gradient-to-l from-transparent via-cyan-400 via-blue-500 to-transparent animate-laser-left" />
        {/* Right Outward Laser Comet */}
        <div className="absolute top-0 left-1/2 h-full w-[200px] bg-gradient-to-r from-transparent via-indigo-400 via-purple-500 to-transparent animate-laser-right" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[6px] bg-slate-955 dark:bg-slate-950 overflow-hidden pointer-events-none z-10 blur-[2px]">
        {/* Synced glows */}
        <div className="absolute top-0 right-1/2 h-full w-[250px] bg-gradient-to-l from-transparent via-cyan-500/35 via-blue-500/25 to-transparent animate-laser-left" />
        <div className="absolute top-0 left-1/2 h-full w-[250px] bg-gradient-to-r from-transparent via-indigo-500/35 via-purple-500/25 to-transparent animate-laser-right" />
      </div>

      {/* Central Glassmorphic Active Node Junction */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto flex items-center justify-center">
        <div className="relative group/node cursor-pointer">
          {/* Pulsing neon backing halo */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-lg blur-md opacity-75 group-hover/node:opacity-100 group-hover/node:scale-110 transition-all duration-500 animate-pulse-subtle" />

          {/* Active node block container */}
          <div className="relative px-3.5 py-1.5 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-lg text-[9px] font-mono font-bold tracking-widest text-slate-100 flex items-center gap-2 shadow-2xl transition-all duration-300 group-hover/node:border-cyan-500/50 group-hover/node:-translate-y-0.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-200 to-purple-300 font-extrabold uppercase">
              EVM_NODE_ACTIVE
            </span>
            <span className="text-[8px] text-slate-400 font-medium tracking-normal border-l border-white/10 pl-2">
              #{blockNumber}
            </span>
          </div>

          {/* Expanded Telemetry Console Dropdown */}
          <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 shadow-2xl pointer-events-none group-hover/node:pointer-events-auto opacity-0 scale-95 origin-top translate-y-2 group-hover/node:opacity-100 group-hover/node:scale-100 group-hover/node:translate-y-0 transition-all duration-300 ease-out z-40">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[9px] text-slate-400 font-mono">
              <span className="flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                EVM_MAINNET_NODE
              </span>
              <span className="text-slate-500">v1.4.2</span>
            </div>

            {/* Metrics Grid */}
            <div className="mt-3 space-y-2.5 font-mono text-[10px]">
              {/* Block Height */}
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Block Height</span>
                <span className="text-cyan-400 font-bold transition-all duration-300">
                  #{blockNumber.toLocaleString()}
                </span>
              </div>

              {/* Gas Price */}
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Gas Price</span>
                <span className="text-indigo-300 font-bold">
                  {gasPrice} Gwei
                </span>
              </div>

              {/* Latency */}
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Node Latency</span>
                <span className="text-emerald-400 font-bold">
                  {latency}ms
                </span>
              </div>

              {/* Peers Connected */}
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Active Peers</span>
                <span className="text-purple-300 font-bold">
                  {peers}/150
                </span>
              </div>

              {/* Node Uptime */}
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Uptime</span>
                <span className="text-slate-200">99.998%</span>
              </div>

              {/* Load Bar */}
              <div className="space-y-1.5 pt-1.5 border-t border-white/5">
                <div className="flex justify-between text-slate-500 text-[8px]">
                  <span>NETWORK LOAD</span>
                  <span>{Math.round((peers / 150) * 100)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden flex">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500 ease-out" style={{ width: `${Math.round((peers / 150) * 100)}%` }} />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3.5 pt-2 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-slate-500">
              <span>STATUS: OPERATIONAL</span>
              <span className="text-emerald-500/80 animate-pulse uppercase">Synced Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION HEADER */}
      <div className="bg-slate-950 text-white py-16 text-center border-b border-white/5">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Portfolio Exploration
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-md mx-auto">
            Deep-dives into actual live applications and highly audited smart contract systems I have engineered.
          </p>
        </div>
      </div>

      {/* DYNAMIC ALTERNATING SECTIONS */}
      {projects.map((project, index) => {
        const isLeftImage = index % 2 !== 0;
        const isLast = index === projects.length - 1;

        return (
          <div
            key={project.id}
            className={`py-24 md:py-32 px-6 flex items-center ${project.isDark
                ? `bg-slate-950 text-white ${isLast ? "" : "border-b border-white/5"}`
                : `bg-slate-50 text-slate-900 ${isLast ? "" : "border-b border-slate-200"}`
              }`}
          >
            <div
              className={`container max-w-5xl mx-auto flex flex-col ${isLeftImage ? "md:flex-row-reverse" : "md:flex-row"
                } items-center justify-between gap-12 md:gap-20`}
            >
              {/* Text Side */}
              <div
                data-aos={isLeftImage ? "fade-left" : "fade-right"}
                className="flex-1 space-y-6 text-left"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary/80">
                    {project.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p
                  className={`text-sm md:text-base leading-relaxed ${project.isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                >
                  {project.description}
                </p>

                {/* Highlight Badge */}
                {project.highlight && (
                  <div className={`p-3.5 rounded-xl border flex items-center gap-3.5 transition-all duration-300 hover:scale-[1.01] ${project.isDark
                      ? "bg-slate-900/40 border-white/5 text-slate-100"
                      : "bg-slate-100/50 border-slate-200/65 text-slate-800"
                    }`}>
                    <div className={`p-2 rounded-lg ${project.isDark ? "bg-cyan-500/10 text-cyan-400" : "bg-primary/10 text-primary"
                      }`}>
                      {project.highlight.icon === "zap" && <Zap size={16} />}
                      {project.highlight.icon === "shield" && <Shield size={16} />}
                      {project.highlight.icon === "activity" && <Activity size={16} />}
                      {project.highlight.icon === "cpu" && <Cpu size={16} />}
                    </div>
                    <div className="space-y-0.5">
                      <span className={`text-[8px] font-bold uppercase tracking-widest block ${project.isDark ? "text-slate-500" : "text-slate-400"
                        }`}>
                        {project.highlight.label}
                      </span>
                      <span className="text-xs font-black tracking-wide uppercase">
                        {project.highlight.value}
                      </span>
                    </div>
                  </div>
                )}

                {/* Tag Cloud */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all duration-300 cursor-default ${project.isDark
                          ? "bg-slate-900 border-white/5 text-slate-300 hover:border-cyan-500/30 hover:text-cyan-400"
                          : "bg-slate-100 border-slate-200/60 text-slate-600 hover:border-primary/30 hover:text-primary"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metadata badges (Mockup alignment) */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-current/10">
                  {project.meta.map((m, i) => (
                    <div key={i} className="space-y-1">
                      <span
                        className={`text-[9px] font-bold tracking-widest uppercase block ${project.isDark ? "text-slate-500" : "text-slate-400"
                          }`}
                      >
                        {m.label}
                      </span>
                      <span className="text-[11px] font-extrabold tracking-wide uppercase block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6 pt-4">
                  {project.id === 5 ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-extrabold tracking-widest text-white uppercase rounded-full transition-all duration-500 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.85)] hover:scale-105 active:scale-95 group overflow-hidden animate-glow-float"
                    >
                      {/* Shimmer sweep effect */}
                      <span className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                      {/* Core text & icon */}
                      <span className="relative z-10 flex items-center gap-1.5">
                        View Live Project
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>

                      {/* Pulsing glow ring around it */}
                      <span className="absolute -inset-px rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-70 blur-[2px] group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse" />
                    </a>
                  ) : (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase border-b border-current pb-1 transition-all duration-300 text-primary hover:text-primary/80 animate-link-pulse"
                    >
                      View Live <ArrowUpRight size={13} className="animate-arrow-nudge" />
                    </a>
                  )}
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75 transition-opacity text-current"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Graphic/Image Side wrapped in Browser Frame Mockup */}
              <div
                data-aos={isLeftImage ? "fade-right" : "fade-left"}
                className="flex-1 w-full flex justify-center"
              >
                <div
                  className={`relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border ${project.isDark ? "border-white/10 bg-slate-900" : "border-slate-300/60 bg-white"
                    } group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]`}
                >
                  {/* macOS Browser Header */}
                  <div className={`flex items-center gap-2 px-4 py-3 border-b ${project.isDark ? "bg-slate-950/80 border-white/5" : "bg-slate-100/80 border-slate-200"
                    }`}>
                    {/* Traffic Lights */}
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/85 hover:bg-rose-500 transition-colors cursor-pointer" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/85 hover:bg-amber-500 transition-colors cursor-pointer" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/85 hover:bg-emerald-500 transition-colors cursor-pointer" />
                    </div>
                    {/* Mock URL Bar */}
                    <div className={`mx-auto w-3/5 text-center text-[10px] py-0.5 rounded-md font-mono ${project.isDark ? "bg-white/5 text-slate-400 border border-white/5" : "bg-slate-200/50 text-slate-500 border border-slate-300/30"
                      }`}>
                      {project.id === 5 ? "dealflow.surya.eth" :
                        project.id === 6 ? "stablecoin.foundry.eth" :
                          project.id === 7 ? "ccip-bridge.chainlink.eth" : "gas-nft.openzeppelin.eth"}
                    </div>
                  </div>

                  {/* Image Container with Shimmer Hover Overlay */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />

                    {/* Glassmorphic border layer / sweep */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
