import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useFollowers } from '../hooks/useFollowers';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export const AboutMe = () => {
    const { followers, isLoading } = useFollowers(18000);
    const count = useMotionValue(18000);

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

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);

    return <section id="about" className="py-24 px-4 relative">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Blockchain Developer</h3>

                    <p className="text-muted-foreground md:text-left">
                        🎓 I’m currently pursuing my B.Tech in Computer Science Engineering
              and have a strong passion for Blockchain development.
              I focus on building secure, scalable, and decentralized digital systems
              that solve real-world problems.
                    </p>

                    <p className="text-muted-foreground md:text-left">
                        My skill set includes Smart Contract development, DApp architecture,
              cryptography, and network security. I enjoy working in Web3, where secure code and decentralized systems
              come together to create impactful technology.
                    </p>

                    <p className="text-muted-foreground md:text-left">
                        I also run a growing technical Instagram community of <motion.span className="font-bold text-primary">{displayCount}</motion.span> followers where I share practical resources for developers and students.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>

                    <a href="/Resume/Surya Code Resume.pdf" download className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
                </div>

                <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover aspect-[4/5] max-w-sm mx-auto">
  <img
    src="/Images/suryaportfolio.png"
    alt="Surya Singu"
    className="h-full w-full object-cover"
  />
</div>


            </div>
        </div>
    </section>
}