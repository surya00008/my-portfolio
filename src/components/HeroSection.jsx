import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Premium 3D-like Lego Character with swinging arms, blocky hands, pelvis, feet, and mirrored face direction
// Includes a hover interaction: pauses walking, standing legs/arms, and rapid waving right hand!
const LegoCharacter = ({ logoUrl, svgNode, name, color, delay, walkDuration, direction, bottomLane }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLtr = direction === "ltr";

  return (
    <div
      className={`absolute -left-32 pointer-events-auto group ${isLtr ? "animate-walk-ltr" : "animate-walk-rtl"
        }`}
      style={{
        bottom: bottomLane,
        animationPlayState: isHovered ? "paused" : "running",
        animationDuration: `${walkDuration}s`,
        animationDelay: `${delay}s`,
        zIndex: Math.round(bottomLane) // Lower lanes are closer
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex flex-col items-center"
        style={{
          transform: isLtr ? "scaleX(1)" : "scaleX(-1)", // Mirror direction
          transformOrigin: "bottom center"
        }}
      >
        {/* Name Tag - Always un-mirrored */}
        <div
          className="absolute -top-9 scale-0 group-hover:scale-100 bg-slate-950/90 text-white text-[9px] font-black py-0.5 px-2 rounded-md border border-white/10 transition-transform whitespace-nowrap shadow-md pointer-events-none z-30"
          style={{ transform: isLtr ? "scaleX(1)" : "scaleX(-1)" }}
        >
          {name} Dev
        </div>

        {/* BLOCKY HEAD with Logo */}
        <div className="w-8 h-8 rounded-lg bg-slate-900 border-2 border-yellow-400 p-1 flex items-center justify-center shadow-lg z-20 relative">
          {logoUrl ? (
            <img src={logoUrl} alt={name} className="w-full h-full object-contain" />
          ) : (
            svgNode
          )}
          {/* Lego Stud */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-1 bg-yellow-400 rounded-t-xs border-t border-x border-yellow-300" />
        </div>

        {/* Neck */}
        <div className="w-2.5 h-1 bg-yellow-400 -mt-0.5 z-10 shadow-xs" />

        {/* TORSO WITH SWINGING ARMS */}
        <div className="relative flex items-center justify-center z-10">

          {/* Left Arm (Back / Swings Left) */}
          <motion.div
            className="w-1.5 h-4.5 bg-yellow-400 rounded-sm absolute -left-1.5 origin-top z-0 flex flex-col items-center justify-end"
            style={{ transformOrigin: "top center" }}
            animate={
              isHovered
                ? { rotate: 0 } // Standing rest
                : { rotate: isLtr ? [-30, 30, -30] : [30, -30, 30] } // Swinging walking
            }
            transition={{
              repeat: isHovered ? 0 : Infinity,
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            {/* C-Shape Lego Hand */}
            <div className="w-2.5 h-1.5 bg-yellow-500 rounded-b-xs border-t border-slate-700/20 shadow-xs" />
          </motion.div>

          {/* Torso Block */}
          <div className={`w-7 h-7 ${color} rounded-sm flex items-center justify-center relative shadow-md overflow-hidden z-10 border border-white/10`}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/20" />
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/10 rounded-full" />
            {/* Lego text removed completely! */}
          </div>

          {/* Right Arm (Front / Swings Right OR Waves when Hovered) */}
          <motion.div
            className="w-1.5 h-4.5 bg-yellow-400 rounded-sm absolute -right-1.5 origin-top z-20 flex flex-col items-center justify-end"
            style={{ transformOrigin: "top center" }}
            animate={
              isHovered
                ? { rotate: [120, 150, 120, 150, 120] } // Rapid waving animation!
                : { rotate: isLtr ? [30, -30, 30] : [-30, 30, -30] } // Swinging walking
            }
            transition={{
              repeat: Infinity,
              duration: isHovered ? 0.4 : 0.6,
              ease: "easeInOut"
            }}
          >
            {/* C-Shape Lego Hand */}
            <div className="w-2.5 h-1.5 bg-yellow-500 rounded-b-xs border-t border-slate-700/20 shadow-xs" />
          </motion.div>
        </div>

        {/* Pelvis Joint */}
        <div className="w-6 h-1.5 bg-slate-800 -mt-0.5 z-10 rounded-xs border-b border-slate-900" />

        {/* SWINGING LEGS WITH FEET */}
        <div className="flex gap-0.5 justify-center -mt-0.5 z-0">
          <motion.div
            className="w-2.5 h-3.5 bg-yellow-500 rounded-b-xs shadow-xs origin-top flex flex-col justify-end"
            style={{ transformOrigin: "top center" }}
            animate={
              isHovered
                ? { rotate: 0 } // Standing rest
                : { rotate: [25, -25, 25] } // Swinging walking
            }
            transition={{
              repeat: isHovered ? 0 : Infinity,
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            {/* Lego Foot */}
            <div className="w-3.5 h-1.5 bg-yellow-600 rounded-b-xs -ml-0.5 shadow-sm" />
          </motion.div>

          <motion.div
            className="w-2.5 h-3.5 bg-yellow-500 rounded-b-xs shadow-xs origin-top flex flex-col justify-end"
            style={{ transformOrigin: "top center" }}
            animate={
              isHovered
                ? { rotate: 0 } // Standing rest
                : { rotate: [-25, 25, -25] } // Swinging walking
            }
            transition={{
              repeat: isHovered ? 0 : Infinity,
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            {/* Lego Foot */}
            <div className="w-3.5 h-1.5 bg-yellow-600 rounded-b-xs -ml-0.5 shadow-sm" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden bg-background"
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] radial-glow-blue pointer-events-none z-0 rounded-full animate-pulse-subtle" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] radial-glow-purple pointer-events-none z-0 rounded-full animate-pulse-subtle" style={{ animationDelay: "2s" }} />

      <div className="container max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Copy */}
        <div className="flex-1 space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              <span className="block opacity-0 animate-fade-in">Surya Singu,</span>
              <span className="block text-gradient-indigo opacity-0 animate-fade-in-delay-1 pb-1">
                Web3 & Smart
              </span>
              <span className="block text-gradient-purple-pink opacity-0 animate-fade-in-delay-2">
                Contract Engineer
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3 leading-relaxed">
              A Web3 & Smart Contract Engineer who loves building highly secure protocols,
              automated trading engines, and state-of-the-art DApps. Turning ideas into
              secure blockchain products is my specialty.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-delay-4 pt-2">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-300 border-b border-foreground/30 pb-1"
            >
              HOW I WORK{" "}
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Right Side: Glowing Portrait */}
        <div className="flex-1 flex justify-center items-center relative opacity-0 animate-fade-in-delay-2">
          
          {/* Supercharged fluid backdrop glows directly mimicking the publications section */}
          <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] z-0 pointer-events-none">
            {/* Top-Left Vibrant Hot Pink Orb */}
            <div className="absolute top-[10%] left-[10%] w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-br from-[#ff007f] via-[#ec4899] to-[#d946ef] opacity-60 blur-[45px] md:blur-[60px] animate-pulse-subtle" />
            
            {/* Bottom-Right Soft Sky Blue/Cyan Orb */}
            <div className="absolute bottom-[10%] right-[10%] w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full bg-gradient-to-tr from-[#00f0ff] via-[#38bdf8] to-[#3b82f6] opacity-60 blur-[40px] md:blur-[50px] animate-pulse-subtle" style={{ animationDelay: "1.5s" }} />
            
            {/* Center Diagonal Violet/Fuchsia Sweep */}
            <div className="absolute top-[20%] right-[5%] w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full bg-gradient-to-tr from-[#a855f7] via-[#c084fc] to-[#e879f9] opacity-55 blur-[50px] md:blur-[65px] animate-pulse-subtle" style={{ animationDelay: "3s" }} />
          </div>

          {/* Floating Image Wrapper */}
          <motion.div
            className="relative z-10 p-4"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            {/* Outer high-glow gradient vector ring */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#ff007f] via-[#a855f7] to-[#00f0ff] opacity-30 blur-[12px] animate-pulse-subtle" />
            
            {/* Double gradient line border */}
            <div className="absolute inset-1.5 rounded-full bg-gradient-to-tr from-[#ff007f] via-[#a855f7] to-[#00f0ff] p-[2px] animate-spin" style={{ animationDuration: "12s" }}>
              <div className="w-full h-full bg-slate-950 rounded-full" />
            </div>
            <div className="absolute inset-3.5 rounded-full bg-gradient-to-br from-[#00f0ff] via-[#c084fc] to-[#ff007f] p-[1.5px] opacity-50 animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }}>
              <div className="w-full h-full bg-slate-950 rounded-full" />
            </div>

            {/* Avatar Frame with thin glowing border */}
            <div className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border border-white/20 bg-slate-950 shadow-[0_0_35px_rgba(255,0,127,0.15)] relative group">
              <img
                src="/Images/suryaportfolio.png"
                alt="Surya Singu"
                className="w-full h-full object-cover scale-[1.05] hover:scale-[1.1] transition-transform duration-700 relative z-10"
                onError={(e) => {
                  e.target.src = "/Images/instadp.jpg"; // Fallback to instadp if suryaportfolio is missing
                }}
              />
              {/* Inner glowing vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Width Lego Developer Street (Stretches from absolute left edge to absolute right edge) */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none z-20 bg-gradient-to-t from-slate-950/20 to-transparent">
        {/* Floor Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-300 dark:bg-slate-800" />

        {/* 4 Lego characters walking in a single file queue at the exact same level (no overlaps) */}
        <LegoCharacter
          name="Python"
          logoUrl="/Images/python.svg"
          color="bg-blue-600"
          delay={0}
          walkDuration={20}
          direction="ltr"
          bottomLane={2}
        />
        <LegoCharacter
          name="Solidity"
          logoUrl="/Images/solidity.svg"
          color="bg-purple-600"
          delay={5}
          walkDuration={20}
          direction="ltr"
          bottomLane={2}
        />
        <LegoCharacter
          name="Ethereum"
          logoUrl="/Images/ethereum.svg"
          color="bg-slate-700"
          delay={10}
          walkDuration={20}
          direction="ltr"
          bottomLane={2}
        />
        <LegoCharacter
          name="Bitcoin"
          svgNode={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#F7931A" className="w-4 h-4">
              <circle cx="256" cy="256" r="256" fill="#F7931A" />
              <path d="M331.062 235.071c6.516-10.457 9.87-21.737 9.87-34.908 0-41.974-29.356-62.164-77.946-68.513v-49.33h-29.742v47.284c-7.903-.79-16.197-1.185-24.891-1.185v-46.099h-29.742v47.284c-35.185 0-66.42.395-81.839 1.185l4.349 33.605c10.28.395 19.373 1.185 24.891 2.372 13.047 2.768 18.57 9.886 18.57 26.49v141.942c0 14.234-6.326 21.745-19.36 24.512-5.93 1.187-15.023 1.583-25.298 2.373L95.5 412.339c19.373.79 52.19.79 88.558.79v47.283h29.742v-46.098c8.694 0 16.988-.395 24.891-1.186v47.284h29.742v-48.47c49.027-4.745 81.503-24.513 81.503-72.748 0-33.212-18.979-54.958-48.974-67.149zM228.6 179.718h18.978c25.699 0 40.723 9.49 40.723 30.049 0 21.35-15.42 30.84-40.723 30.84H228.6v-60.889zm23.722 171.196c-27.279 0-42.7-9.489-42.7-32.025v-61.68h42.7c27.674 0 43.491 10.279 43.491 32.816 0 21.745-15.817 30.889-43.491 30.889z" fill="#FFF" />
            </svg>
          }
          color="bg-amber-500"
          delay={15}
          walkDuration={20}
          direction="ltr"
          bottomLane={2}
        />
      </div>
    </section>
  );
};