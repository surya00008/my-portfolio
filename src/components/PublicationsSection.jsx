import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const publications = [
  {
    title: "The Yield Illusion: Unpacking Ethena’s USDe & Delta-Neutral Stablecoins",
    subtitle: "Delta-Neutral Basis Trade Analysis",
    preview:
      "An analytical breakdown of Ethena's USDe, the delta-neutral basis trade flywheel, and the systemic tail risks of sustained negative funding rates in bear markets.",
    link: "https://paragraph.com/@0x79b857de5401c0d79219e73911b7e2428572d45c/the-yield-illusion-unpacking-ethenas-usde-and-the-tail-risk-of-delta-neutral-stablecoins",
    date: "May 2026",
    publisher: "Paragraph",
    gradientClass: "from-rose-400 via-pink-500 to-indigo-500",
    glowColor: "rgba(244,63,94,0.15)",
    bars: [25, 45, 60, 40, 75, 90, 70, 50, 65, 35, 55, 30, 45, 20],
    metrics: { readTime: "8 min", type: "Risk Analysis", rating: "High Impact" }
  },
  {
    title: "The Cult of Liquidity: Deconstructing Berachain’s Economy and PoL",
    subtitle: "Proof of Liquidity Deconstruction",
    preview:
      "An analytical breakdown of Berachain's Proof of Liquidity (PoL), the BERA/BGT/HONEY flywheel, and the systemic risks of mercenary capital in DeFi.",
    link: "https://paragraph.com/@0x79b857de5401c0d79219e73911b7e2428572d45c/the-cult-of-liquidity-deconstructing-berachains-tri-token-economy-and-pol",
    date: "May 2026",
    publisher: "Paragraph",
    gradientClass: "from-amber-400 via-orange-500 to-red-500",
    glowColor: "rgba(249,115,22,0.15)",
    bars: [30, 55, 75, 60, 85, 95, 80, 65, 70, 45, 60, 35, 50, 25],
    metrics: { readTime: "10 min", type: "Tokenomics", rating: "Core Research" }
  },
  {
    title: "Breaking the EVM Bottleneck: Monad’s Parallel Execution Engine",
    subtitle: "High-Performance EVM Research",
    preview:
      "A deep dive into Monad's optimistic parallel execution, deferred consensus execution, MonadDb state storage, and the hardware centralization trade-offs.",
    link: "https://paragraph.com/@0x79b857de5401c0d79219e73911b7e2428572d45c/breaking-the-evm-bottleneck-monads-parallel-execution-engine",
    date: "May 2026",
    publisher: "Paragraph",
    gradientClass: "from-indigo-400 via-purple-500 to-fuchsia-500",
    glowColor: "rgba(139,92,246,0.15)",
    bars: [20, 35, 50, 45, 65, 80, 75, 55, 60, 40, 50, 30, 40, 15],
    metrics: { readTime: "7 min", type: "L1 Architecture", rating: "Deep Dive" }
  },
];

export const PublicationsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      id="publications"
      className="py-32 px-6 border-b border-zinc-200/80 relative overflow-hidden transition-all duration-700 ease-in-out text-zinc-900 bg-[#FFF9F6]"
    >
      {/* Crisp slate-50 Curved SVG Wave Divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-10" style={{ height: "40px", transform: "translateY(-1px)" }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] fill-slate-50"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13,86.19-14.39,170.88-51.72,253.9-65.24C1087.6,13.72,1148.9,23.3,1200,34.45V0Z" />
        </svg>
      </div>

      {/* Abstract Grid Wire Overlay */}
      <div
        className="absolute inset-0 bg-repeat opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Dynamic Fluid Backdrop Layer - Exact pink, blue, purple, & cream color wave from mockup */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-Left Vibrant Hot Pink Orb */}
        <div className="absolute -top-[10%] -left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#ff007f] via-[#ec4899] to-[#d946ef] opacity-95 blur-[65px]" />
        
        {/* Bottom-Left Soft Sky Blue/Cyan Orb */}
        <div className="absolute -bottom-[10%] -left-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#00f0ff] via-[#38bdf8] to-[#3b82f6] opacity-90 blur-[60px]" />
        
        {/* Center Diagonal Violet/Fuchsia Sweep */}
        <div className="absolute top-[5%] left-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#a855f7] via-[#c084fc] to-[#e879f9] opacity-90 blur-[75px]" />

        {/* Top-Right Creamy Peach Orb */}
        <div className="absolute -top-[10%] -right-[5%] w-[580px] h-[580px] rounded-full bg-gradient-to-b from-[#ffedd5] via-[#fffbeb] to-transparent opacity-95 blur-[50px]" />

        {/* Bottom-Right Soft Purple-Rose Orb */}
        <div className="absolute -bottom-[5%] -right-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#c084fc] via-[#f472b6] to-[#fb7185] opacity-90 blur-[60px]" />
      </div>

      <div className="container max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header with Premium Typography */}
        <div data-aos="fade-up" className="text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/25">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-[0.2em]">Research Stream</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 font-h1">
            Research Publications
          </h2>
          <p className="text-zinc-600 max-w-lg mx-auto text-sm md:text-base font-body-lg">
            Quantitative research, architectural breakdowns, and economic stress-testing published across the Web3 ecosystem.
          </p>
        </div>

        {/* 3-Card Grid in beautiful Auralis Glassmorphic design */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {publications.map((pub, index) => (
            <div
              key={index}
              className="relative bg-white/20 hover:bg-white/35 backdrop-blur-2xl border border-white/50 rounded-[2.25rem] p-9 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06),inset_0_0_0_1.5px_rgba(255,255,255,0.7)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 group flex flex-col justify-between h-full hover:scale-[1.03]"
            >
              {/* Soft colorful back-glow for each card on hover */}
              <div
                className="absolute inset-0 rounded-[2.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${pub.glowColor} 0%, transparent 70%)`
                }}
              />

              <div className="space-y-6">
                {/* Header: Status & Publisher */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500/80 mb-0.5">
                      {pub.publisher} • {pub.date}
                    </span>
                    <span className="text-[11px] font-bold text-zinc-800 tracking-tight">
                      {pub.subtitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-950/5 px-2.5 py-1 rounded-full border border-black/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest">Active</span>
                  </div>
                </div>

                {/* Enhanced Spectral Visualization based on card's theme */}
                <div className="flex items-end justify-between h-20 gap-1 px-1 py-1 bg-black/5 rounded-2xl border border-black/5 relative overflow-hidden">
                  {/* Subtle backgrid inside visualizer */}
                  <div className="absolute inset-0 bg-repeat opacity-[0.08]" style={{
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to top, #000 1px, transparent 1px)`,
                    backgroundSize: "6px 6px"
                  }} />
                  {pub.bars.map((height, i) => (
                    <div
                      key={i}
                      className={`w-full bg-gradient-to-t ${pub.gradientClass} rounded-full transition-all duration-500 group-hover:brightness-105`}
                      style={{
                        height: `${height}%`,
                        opacity: 0.85
                      }}
                    />
                  ))}
                </div>

                {/* Publications Text Details */}
                <div className="space-y-3 text-left">
                  <h3 className="text-lg font-bold text-zinc-900 leading-snug group-hover:text-black transition-colors line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-[12px] text-zinc-600 leading-relaxed line-clamp-4">
                    {pub.preview}
                  </p>
                </div>
              </div>

              {/* Footer: Metrics Grid & Player Button */}
              <div className="mt-8 pt-5 border-t border-black/5 flex flex-col gap-5">
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-1 text-left">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">EST. READ</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-xs font-bold text-zinc-900">{pub.metrics.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">SECTOR</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] font-extrabold text-zinc-900 uppercase tracking-tight line-clamp-1">{pub.metrics.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">IMPACT</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-tight">{pub.metrics.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Playback Button Controls Simulation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Arrow Read Link Button */}
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-115 active:scale-95 group/btn"
                    >
                      <ArrowUpRight
                        size={16}
                        className="animate-arrow-nudge transition-transform duration-300"
                      />
                    </a>
                    <span className="text-[10px] font-bold text-zinc-500 tracking-wider">
                      OPEN_NODE
                    </span>
                  </div>
                  {/* Status Indicator Pill */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-zinc-800 bg-white/70 px-2.5 py-1 rounded-lg border border-white/90 shadow-xs">
                      EST_TIME
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
