import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: 0,
    title: "Foundry Smart Contract Lottery | Solidity, Foundry, Web3",
    description:
      "A verifiable, decentralized smart contract lottery fully built and tested using the Foundry framework. Features automated deployment scripts, comprehensive invariant testing, Sepolia testnet readiness, and secure random number generation.",
    image: "/Projects/Lottery.png",
    tags: [
      "Solidity",
      "Foundry",
      "Smart Contract",
      "Ethereum",
      "Decentralized"
    ],
    url: "https://github.com/surya00008/foundry-smart-contract-lottery",
    git: "https://github.com/surya00008/foundry-smart-contract-lottery",
  },
  {
    id: 1,
    title: "PrestigeTowers — Real Estate Smart Contract System | Solidity, Ethereum, Web3",
    description:
      " A blockchain-based real estate booking & settlement system built using Solidity. This project demonstrates state-driven contract design, secure fund handling, and on-chain voting mechanics in an educational, interview-friendly manner.",
    image: "/Projects/Prestige.jpg",
    tags: [
      "Solidity",
      "Smart Contract",
      "Voting",
      "Contract Design",
      "Ethereum",
    ],
    url: "https://github.com/surya00008/Prestige-Towers-Smart-Contract",
    git: "https://github.com/surya00008/Prestige-Towers-Smart-Contract",
  },


  {
  id: 2,
  title: "Zero Knowledge Proof Cryptographic System",
  description:
    "A cryptographic security system implementing a Schnorr-style Zero Knowledge Proof protocol to enable passwordless authentication and file integrity verification without revealing secrets. Achieves sub-millisecond proof generation and verification using 256-bit modular arithmetic.",
  image: "/Projects/ZKP.png",
  tags: [
    "Python",
    "Cryptography",
    "Zero Knowledge Proof",
    "SHA-256",
    "Streamlit",
    "Security Engineering"
  ],
  url: "https://github.com/surya00008/zero-knowledge-proof-system",
  git: "https://github.com/surya00008/zero-knowledge-proof-system",
},

  {
  id: 3,
  title: "Network Anomaly Detection System",
  description:
    "A machine learning–based network security system that analyzes packet-level and flow-based network traffic to detect anomalies in real time. Built using Scikit-learn’s Isolation Forest, Scapy, and feature engineering on PCAP data to identify suspicious activity such as scans and abnormal traffic patterns.",
  image: "/Projects/NAD.png",
  tags: [
    "Python",
    "Machine Learning",
    "Cyber Security",
    "Network Security",
    "Scikit-learn",
    "Scapy",
    "Isolation Forest"
  ],
  url: "https://github.com/surya00008/Network-Anomalies-Detection",
  git: "https://github.com/surya00008/Network-Anomalies-Detection",
},

  {
    id: 4,
    title: "BloodBank Smart Contract",
    description:
      "Blockchain-based Blood Bank Management System, Secure • Controlled • Auditable • Educational",
    image: "/Projects/Bloodbank.jpg",
    tags: ["Solidity", "Smart Contract", "Access Control", "Solidity Fundamentals", "Smart-contract system design"],
    url: "https://github.com/surya00008/bloodbank-smart-contract",
    git: "https://github.com/surya00008/bloodbank-smart-contract",
  },


];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation happens only once
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="txet-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my approach to writing clean, maintainable code
          and building user-friendly interfaces. I’ve focused on practical
          solutions that balance performance, usability, and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card/60 backdrop-blur-md rounded-xl overflow-hidden shadow-md border border-border/50 hover:border-primary/50 transition-colors duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative bg-secondary/20 border-b border-border/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"/>
              </div>

              {/* Content Container */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2.5 py-0.5 bg-secondary/80 text-primary font-medium text-[11px] rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-0.5 bg-secondary/80 text-primary/80 font-medium text-[11px] rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2 line-clamp-1 text-foreground">
                  {project.title.split('|')[0].trim()}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/30">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-semibold flex items-center gap-1 hover:text-primary/80 transition-colors"
                  >
                    View Live <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Github size={20}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/surya00008"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
