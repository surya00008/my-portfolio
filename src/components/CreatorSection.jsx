import { Instagram, TrendingUp, Users } from "lucide-react";
import { useFollowers } from "../hooks/useFollowers";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const CreatorSection = () => {
  const { followers, isLoading } = useFollowers(18000);
  const count = useMotionValue(18000); // Start animation from 18k

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
    <section id="creator" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Content <span className="text-primary">Creator</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I share practical tech resources, Web3 insights, and career opportunities
          to help students and developers grow faster in tech.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT — Profile Card */}
          <div className="bg-card rounded-lg p-6 shadow-xs card-hover flex flex-col items-center text-center">

            <div className="relative mb-4 group">
              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <img
                src="/Images/instadp.jpg"
                alt="Surya Code Instagram"
                className="relative h-24 w-24 rounded-full object-cover border border-primary/40"
              />
            </div>

            <h3 className="text-xl font-semibold">Surya Code</h3>

            <p className="text-sm text-muted-foreground mb-4">
              Web3 • AI • Developer Resources • GitHub • Tech • Free Resources
            </p>

            <a
              href="https://www.instagram.com/surya_code/"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button inline-flex items-center gap-2"
            >
              <Instagram size={18} />
              Visit Instagram
            </a>
          </div>

          {/* RIGHT — Impact Stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-card rounded-lg p-6 text-center card-hover">
              <Users className="mx-auto mb-2 text-primary" />
              <motion.h4 className="text-3xl font-bold text-primary">{displayCount}</motion.h4>
              <p className="text-sm text-muted-foreground">
                Developer Community
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center card-hover">
              <TrendingUp className="mx-auto mb-2 text-primary" />
              <h4 className="text-3xl font-bold text-primary">30+</h4>
              <p className="text-sm text-muted-foreground">
                Educational Posts
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center card-hover col-span-2">
              <div className="mx-auto mb-2 text-primary">✨</div>
              <h4 className="text-lg font-semibold">
                Helping Students and Devs Discover Real Tech Opportunities
              </h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};