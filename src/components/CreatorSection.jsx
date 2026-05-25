import { Instagram, TrendingUp, Users, Award, Play, Link2 } from "lucide-react";
import { StarBackground } from "./StarBackground";
import { useFollowers } from "../hooks/useFollowers";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const CreatorSection = () => {
  const { followers, isLoading } = useFollowers(36400);
  const count = useMotionValue(36400); // Start animation from 36.4k

  useEffect(() => {
    if (!isLoading) {
      const controls = animate(count, followers, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [followers, isLoading, count]);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayCount = useTransform(rounded, (latest) => {
    return latest >= 1000 ? (latest / 1000).toFixed(1) + "K+" : latest;
  });

  return (
    <section id="creator" className="py-24 px-6 relative bg-slate-950 text-white overflow-hidden">
      {/* Crisp White Curved SVG Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-10" style={{ height: "40px", transform: "translateY(-1px)" }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] fill-slate-50"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13,86.19-14.39,170.88-51.72,253.9-65.24C1087.6,13.72,1148.9,23.3,1200,34.45V0Z" />
        </svg>
      </div>

      {/* Background Star Effects scoped exclusively to this section */}
      <StarBackground />
      {/* Background Glowing Vector Halos */}
      <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] radial-glow-blue pointer-events-none z-0 rounded-full animate-pulse-subtle" />

      <div className="container mx-auto max-w-5xl z-10 relative space-y-12">
        {/* Heading & Duration Badge */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Developer Content <span className="text-primary">Creator</span>
          </h2>

          <div className="flex justify-center">
            <span className="px-4 py-1.5 bg-slate-900 border border-white/10 rounded-full text-[10px] font-bold tracking-widest text-primary uppercase shadow-md animate-pulse-subtle">
              Sep 2025 – May 2026
            </span>
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            I built a fast-growing tech developer community on Instagram with posts reaching over 1M+ views and generating over 5M+ organic reach to empower the next generation of engineers.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT — Profile bento Card */}
          <div className="bg-slate-900 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-between text-center shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="space-y-6 flex flex-col items-center">
              <div className="relative mb-2">
                {/* glow ring */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 scale-125"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 animate-spin" style={{ animationDuration: "10s" }} />

                <img
                  src="/Images/instadp.jpg"
                  alt="Surya Code Instagram"
                  className="relative h-28 w-28 rounded-full object-cover border-4 border-slate-900 p-0.5"
                  onError={(e) => {
                    e.target.src = "/Images/suryaportfolio.png";
                  }}
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-white">Surya Code</h3>
                <p className="text-xs font-bold tracking-widest text-primary uppercase">@surya_code</p>
              </div>

              <div className="text-sm text-slate-400 space-y-2 border-t border-white/5 pt-6 w-full max-w-xs leading-relaxed">
                <p>⚡ AI Tools & Dev Tricks Daily</p>
                <p>🛠️ Making Devs 10x More Productive</p>
                <p>📚 Free Resources | Real Stuff That Works</p>
                <p>📧 Collab: suryacodeyt@gmail.com</p>
              </div>
            </div>

            <div className="pt-8 w-full flex gap-4">
              <a
                href="https://www.instagram.com/surya_code/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary/95 text-white font-bold tracking-widest text-[10px] uppercase rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              >
                <Instagram size={13} />
                Instagram
              </a>
              <a
                href="https://linktr.ee/suryacode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold tracking-widest text-[10px] uppercase rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/5 shadow-lg cursor-pointer"
              >
                <Link2 size={13} className="text-primary" />
                Linktree
              </a>
            </div>
          </div>

          {/* RIGHT — Impact Stats Bento Grid */}
          <div className="grid grid-cols-2 gap-6 items-stretch">
            {/* Stat Card 1 */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 text-center flex flex-col justify-center items-center shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
              <Users className="mb-3 text-primary h-6 w-6" />
              <motion.h4 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {displayCount}
              </motion.h4>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase mt-1">
                Followers
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 text-center flex flex-col justify-center items-center shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
              <Play className="mb-3 text-primary h-6 w-6" />
              <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                5M+
              </h4>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase mt-1">
                Organic Reach
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 text-center flex flex-col justify-center items-center shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
              <TrendingUp className="mb-3 text-primary h-6 w-6" />
              <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                1M+
              </h4>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase mt-1">
                Top Reel Views
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 text-center flex flex-col justify-center items-center shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
              <Award className="mb-3 text-primary h-6 w-6" />
              <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                420K+
              </h4>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase mt-1">
                Viral Reel Impact
              </p>
            </div>

            {/* Bottom wide bento card */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 text-center col-span-2 flex flex-col justify-center items-center shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              <div className="text-primary mb-2 text-xl font-bold tracking-wide">🏆 Community Scale</div>
              <h4 className="text-sm font-bold tracking-wide text-slate-200">
                Proven ability to build and engage highly technical developer audiences at scale.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};