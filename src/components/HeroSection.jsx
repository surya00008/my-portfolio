import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export const HeroSection = () => {
    return <section id="home" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
                <span className="opacity-0 animate-fade-in block mb-2 md:inline">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-indigo-500 opacity-0 animate-fade-in-delay-1"> Surya Singu </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
                Blockchain Developer & Solidity Smart Contract Engineer passionate about building secure, scalable, and decentralized digital solutions.
            </p>

            <motion.div 
                className="flex flex-col space-y-5 items-center justify-center opacity-0 animate-fade-in-delay-4 pt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <a href="#projects" className="cosmic-button text-lg px-8 py-3">
                    View My Work
                </a>
            </motion.div>
        </div> 

      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm text-primary/80 mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary"/>
      </motion.div>
    </section>
}