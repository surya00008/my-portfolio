import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ContactMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glowing Vector Halos */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] radial-glow-blue pointer-events-none z-0 rounded-full animate-pulse-subtle" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] radial-glow-purple pointer-events-none z-0 rounded-full animate-pulse-subtle" style={{ animationDelay: "3s" }} />

      <div
        data-aos="fade-up"
        className="container max-w-4xl mx-auto text-center z-10 relative space-y-12"
      >
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-none">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            If you have a protocol, dApp, smart contract architecture, or AI integration in mind, feel free to reach out. Currently my schedule books quickly, so the sooner we align, the better.
          </p>
        </div>

        {/* Dynamic Glowing Email Button */}
        <div className="pt-4 flex justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=suryacodeyt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
          >
            {/* Hover Glow Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-slate-200 group-hover:text-white transition-colors">
              Have an amazing project? Send to my email: suryacodeyt@gmail.com
            </span>
          </a>
        </div>

        {/* Grid of Social and Info Links */}
        <div className="pt-12 flex flex-col items-center gap-6 border-t border-white/5">
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/surya00008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/contactsuryasingu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://x.com/surya_singu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="mt-[2px]"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/surya_code/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram Profile"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          <span className="text-[10px] tracking-widest uppercase text-slate-600">
            Bengaluru, Karnataka, India
          </span>
        </div>
      </div>
    </section>
  );
};
