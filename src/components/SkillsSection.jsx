import { useState, useEffect } from "react"
import { cn } from "../lib/utils";
import { Lock, ShieldCheck, Radar } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const skills = [
    { name: "Solidity", level: 80, category: "Coding", logo: "/Images/solidity.svg" },
{ name: "Python",   level: 85, category: "Coding", logo: "/Images/python.svg" },
    { name: "C",        level: 80, category: "Coding", logo: "/Images/c.svg" },
{ name: "Java",     level: 65, category: "Coding", logo: "/Images/Java.png" },
{ name: "Go",       level: 75, category: "Coding", logo: "/Images/go.svg" },

    { name: "Blockchain Fundamentals", level: 90, category: "blockchain", logo: "/Images/blockchain.png" },
  { name: "Smart Contracts", level: 85, category: "blockchain", logo: "/Images/smart-contract.png" },
  { name: "Ethereum", level: 75, category: "blockchain", logo: "/Images/ethereum.svg" },
  { name: "DApp Development", level: 75, category: "blockchain", logo: "/Images/daap.svg" },
  { name: "Web3.js", level: 70, category: "blockchain", logo: "/Images/web3.svg" },
  { name: "Consensus Mechanisms", level: 70, category: "blockchain", logo: "/Images/consensus.png" },
  { name: "Token Standards (ERC)", level: 65, category: "blockchain", logo: "/Images/eth.svg" },

  { name: "Cryptography (SHA-256)", level: 80, category: "cybersecurity", icon: Lock },
  { name: "Network Security", level: 75, category: "cybersecurity", icon: ShieldCheck },
  { name: "Intrusion Detection Systems", level: 75, category: "cybersecurity", icon: Radar },

    {name: "HTML", level: 80, category: "frontend", logo: "/Images/html-5_5968267.png"},
    {name: "CSS", level: 80, category: "frontend", logo: "/Images/css-3_5968242.png"},
    {name: "Javascript", level: 85, category: "frontend", logo: "/Images/js_5968292.png"},
    {name: "React", level: 80, category: "frontend", logo: "/Images/molecule_10285707.png"},
    {name: "Next.js", level: 70, category: "frontend", logo: "/Images/icons8-next.js.svg"},
    {name: "Tailwind CSS", level: 85, category: "frontend", logo: "/Images/Tailwind CSS.png"},

    {name: "Node.js", level: 80, category: "backend", logo: "/Images/programing_15484303.png"},
    {name: "Express.js", level: 80, category: "backend", logo: "/Images/icons8-express-js (1).svg"},
    {name: "MongoDB", level: 60, category: "backend", logo: "/Images/MongoDB.png"},
    {name: "Java", level: 80, category: "backend", logo: "/Images/Java.png"},

    {name: "Git/Github", level: 80, category: "tools", logo: "/Images/Git.png"},
    {name: "VS Code", level: 90, category: "tools", logo: "/Images/Visual Studio Code (VS Code).png"},
]

const categories = ["Coding", "blockchain", "cybersecurity", "frontend", "backend", "tools"]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("Coding");

    const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // animation happens only once
      });
    }, []);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                        )}>
                           {category}
                    </button>
                ))}
            </div>

            <motion.div 
                className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={activeCategory}
            >
                {filteredSkills.map((skill,key) => (
                    <motion.div key={key} variants={itemVariants} className="sm:bg-card sm:p-6 sm:rounded-lg sm:shadow-sm card-hover relative overflow-hidden group border border-border/50 bg-card/60 backdrop-blur-sm" >
                        
                        <div className="flex items-center bg-card p-4 sm:bg-transparent sm:p-0 rounded-full justify-center sm:space-x-6">
                            <div className="sm:h-6 sm:w-6 sm:mb-4 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110 text-primary">
                              {skill.icon ? (
                                <skill.icon className="h-9 w-9 sm:h-6 sm:w-6" />
                              ) : (
                                <img className="h-9 sm:h-6 object-contain" src={skill.logo} alt="" />
                              )}
                            </div>

                            <div className="hidden sm:flex mb-4">
                              <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>

                        <div className="hidden sm:flex w-full bg-secondary h-2 rounded-full overflow-hidden mt-4">
                            <motion.div 
                                className="bg-primary h-2 rounded-full shadow-[0_0_10px_rgba(26,140,255,0.5)]" 
                                initial={{ width: 0 }}
                                animate={{ width: skill.level + "%" }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.1 + (key * 0.1) }}
                            />
                        </div>

                        <div className="hidden sm:flex justify-end text-right mt-2">
                            <span className="text-sm text-primary font-medium">{skill.level}%</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
}