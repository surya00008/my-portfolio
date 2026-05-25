import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-lg border-b border-border/20 shadow-lg"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-5xl px-6 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className="text-lg font-bold tracking-widest text-foreground hover:opacity-80 transition-opacity"
        >
          SURYA SINGU
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-widest uppercase text-foreground/80">
          <a
            href="#about"
            className="hover:text-primary transition-colors duration-300"
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className="hover:text-primary transition-colors duration-300"
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="relative py-1 text-foreground hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-100 after:transition-transform"
          >
            HIRE ME AS YOUR AWESOME PARTNER
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 cursor-pointer"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 text-sm font-bold tracking-widest uppercase transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary transition-colors"
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-center underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors"
          >
            HIRE ME AS YOUR AWESOME PARTNER
          </a>
        </div>
      </div>
    </nav>
  );
};