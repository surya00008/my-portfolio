import { useEffect } from "react";
import {
  Cpu,
  Code,
  GitMerge,
  Award,
  Layers,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillGroups = [
  {
    title: "Blockchain & DeFi",
    icon: Cpu,
    colorClass: "text-blue-500 bg-blue-500/10",
    gridSpan: "lg:col-span-2",
    hoverClass: "hover:border-blue-500 hover:shadow-[0_12px_35px_rgba(59,130,246,0.15)] hover:ring-2 hover:ring-blue-500/15 dark:hover:border-blue-500 dark:hover:ring-2 dark:hover:ring-blue-500/20 dark:hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]",
    skills: [
      { name: "Solidity", logo: "/Images/solidity.svg" },
      { name: "Foundry", logo: "/Images/smart-contract.png" },
      { name: "Hardhat" },
      { name: "Ethers.js" },
      { name: "Dune Analytics" },
      { name: "Etherscan" },
    ],
  },
  {
    title: "Web3 Core",
    icon: Layers,
    colorClass: "text-indigo-500 bg-indigo-500/10",
    gridSpan: "lg:col-span-2",
    hoverClass: "hover:border-indigo-500 hover:shadow-[0_12px_35px_rgba(99,102,241,0.15)] hover:ring-2 hover:ring-indigo-500/15 dark:hover:border-indigo-500 dark:hover:ring-2 dark:hover:ring-indigo-500/20 dark:hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]",
    skills: [
      { name: "Ethereum", logo: "/Images/ethereum.svg" },
      { name: "EVM" },
      { name: "Web3.js", logo: "/Images/web3.svg" },
      { name: "DApp Development", logo: "/Images/daap.svg" },
      { name: "ERC-20/721/4337", logo: "/Images/eth.svg" },
      { name: "Token Standards" },
      { name: "Consensus Mechanisms", logo: "/Images/consensus.png" },
    ],
  },
  {
    title: "Cryptography & Security",
    icon: ShieldCheck,
    colorClass: "text-rose-500 bg-rose-500/10",
    gridSpan: "lg:col-span-1",
    hoverClass: "hover:border-rose-500 hover:shadow-[0_12px_35px_rgba(244,63,94,0.15)] hover:ring-2 hover:ring-rose-500/15 dark:hover:border-rose-500 dark:hover:ring-2 dark:hover:ring-rose-500/20 dark:hover:shadow-[0_0_35px_rgba(244,63,94,0.3)]",
    skills: [
      { name: "ZKPs" },
      { name: "SHA-256" },
      { name: "secp256k1" },
      { name: "Keccak256" },
      { name: "Modular Arithmetic" },
      { name: "Network Security" },
      { name: "IDS" },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: Code,
    colorClass: "text-purple-500 bg-purple-500/10",
    gridSpan: "lg:col-span-2",
    hoverClass: "hover:border-purple-500 hover:shadow-[0_12px_35px_rgba(168,85,247,0.15)] hover:ring-2 hover:ring-purple-500/15 dark:hover:border-purple-500 dark:hover:ring-2 dark:hover:ring-purple-500/20 dark:hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]",
    skills: [
      { name: "TypeScript", logo: "/Images/typescript_5968381.png" },
      { name: "JavaScript", logo: "/Images/js_5968292.png" },
      { name: "Next.js", logo: "/Images/icons8-next.js.svg" },
      { name: "React", logo: "/Images/molecule_10285707.png" },
      { name: "Node.js", logo: "/Images/programing_15484303.png" },
      { name: "Python", logo: "/Images/python.svg" },
      { name: "Java", logo: "/Images/Java.png" },
      { name: "C", logo: "/Images/c.svg" },
    ],
  },
  {
    title: "APIs & Integrations",
    icon: GitMerge,
    colorClass: "text-emerald-500 bg-emerald-500/10",
    gridSpan: "lg:col-span-1",
    hoverClass: "hover:border-emerald-500 hover:shadow-[0_12px_35px_rgba(16,185,129,0.15)] hover:ring-2 hover:ring-emerald-500/15 dark:hover:border-emerald-500 dark:hover:ring-2 dark:hover:ring-emerald-500/20 dark:hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]",
    skills: [
      { name: "Gemini API" },
      { name: "DefiLlama API" },
      { name: "CoinGecko API" },
    ],
  },
  {
    title: "Tools & Infrastructures",
    icon: Wrench,
    colorClass: "text-amber-500 bg-amber-500/10",
    gridSpan: "lg:col-span-2",
    hoverClass: "hover:border-amber-500 hover:shadow-[0_12px_35px_rgba(245,158,11,0.15)] hover:ring-2 hover:ring-amber-500/15 dark:hover:border-amber-500 dark:hover:ring-2 dark:hover:ring-amber-500/20 dark:hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]",
    skills: [
      { name: "Chainlink VRF" },
      { name: "Chainlink CCIP" },
      { name: "Chainlink Automation" },
      { name: "Git / GitHub", logo: "/Images/Git.png" },
      { name: "VS Code", logo: "/Images/Visual Studio Code (VS Code).png" },
    ],
  },
  {
    title: "Specializations",
    icon: Award,
    colorClass: "text-cyan-500 bg-cyan-500/10",
    gridSpan: "lg:col-span-2",
    hoverClass: "hover:border-cyan-500 hover:shadow-[0_12px_35px_rgba(6,182,212,0.15)] hover:ring-2 hover:ring-cyan-500/15 dark:hover:border-cyan-500 dark:hover:ring-2 dark:hover:ring-cyan-500/20 dark:hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]",
    skills: [
      { name: "Protocol due diligence" },
      { name: "On-chain transaction analysis" },
      { name: "AI workflow automation" },
    ],
  },
];

export const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // HTML5 Canvas DeFi Interactive Mesh Animation
  useEffect(() => {
    const canvas = document.getElementById("skills-mesh-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse coordinates relative to skills section canvas
    let mouse = { x: null, y: null, radius: 170 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const section = document.getElementById("skills");
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    // Mesh node particle definition
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Subtle floating motion
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseRadius = Math.random() * 2 + 1.5;
        this.radius = this.baseRadius;
      }

      update() {
        // Boundary bounce
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Gravitational magnetic pull toward cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Pull the nodes towards the center of gravity
            this.x += (dx / distance) * force * 1.6;
            this.y += (dy / distance) * force * 1.6;
            this.radius = this.baseRadius * (1 + force * 0.8);
          } else {
            this.radius = this.baseRadius;
          }
        } else {
          this.radius = this.baseRadius;
        }
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(99, 102, 241, 0.45)" : "rgba(59, 130, 246, 0.35)";
        ctx.fill();
      }
    }

    // Initialize particle grid based on section size
    const particleCount = Math.min(80, Math.floor((width * height) / 11000));
    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // Update & Draw nodes
      particles.forEach((p) => {
        p.update();
        p.draw(isDark);
      });

      // Render distributed mesh lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect nearby nodes
          if (dist < 110) {
            const alpha = ((110 - dist) / 110) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark ? `rgba(129, 140, 248, ${alpha})` : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Render gravitational links directly to the mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = ((mouse.radius - dist) / mouse.radius) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark ? `rgba(139, 92, 246, ${alpha})` : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 text-slate-900 border-b border-slate-200 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white dark:border-none relative overflow-hidden"
    >
      {/* Background Glowing Vector Halos */}
      <div className="absolute top-[20%] left-[5%] w-[450px] h-[450px] radial-glow-purple pointer-events-none z-0 rounded-full animate-pulse-subtle opacity-60" />
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] radial-glow-blue pointer-events-none z-0 rounded-full animate-pulse-subtle opacity-60" style={{ animationDelay: "2s" }} />

      {/* Dynamic DeFi Mesh Canvas Background */}
      <canvas
        id="skills-mesh-canvas"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      <div className="container max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base dark:text-slate-400">
            An updated list of engineering skills synced exactly with my latest professional profile.
          </p>
        </div>

        {/* Bento-Style Balanced Grid Layout */}
        <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, groupIndex) => {
            const IconComponent = group.icon;

            return (
              <div
                key={groupIndex}
                className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col space-y-5 hover:scale-[1.03] transition-all duration-300 dark:bg-slate-950 dark:border-white/5 dark:shadow-none ${group.gridSpan} ${group.hoverClass}`}
              >
                {/* Group Title and Icon */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-3 dark:border-white/5">
                  <div className={`p-2 rounded-lg ${group.colorClass}`}>
                    <IconComponent size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 tracking-wide uppercase dark:text-slate-200">
                    {group.title}
                  </h3>
                </div>

                {/* Scannable Tag Cloud Layout */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 rounded-lg text-xs font-semibold text-slate-700 transition-colors duration-200 cursor-default dark:bg-slate-900 dark:border-white/5 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt=""
                          className="h-3 w-3 object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};