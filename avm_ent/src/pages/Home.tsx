import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import About from "./About";
import Branch from "./Branch";
import Service from "./Service";
import Logo3D from "../components/Logo3D";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { BrickWallIcon as Brick, Truck, Grid, Mountain } from 'lucide-react';

const Home: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress(currentProgress / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="container3D" className="bg-gradient-to-b from-[#1B2A4A] to-black text-foreground relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {/* Hexagonal Grid Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23FFD700' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Dynamic gradient overlay based on scroll */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to bottom, 
                rgba(27, 42, 74, ${1 - scrollProgress * 0.8}) 0%,
                rgba(0, 0, 0, ${0.4 + scrollProgress * 0.6}) 100%)`
            }}
          />
        </div>
      </div>

      <div className="relative">
        {/* Home section with 3D Logo */}
        <section id="home" className="relative h-screen">
          {/* 3D Logo Container - Only visible in home section */}
          <div className="absolute inset-0 z-10">
            <Logo3D />
          </div>

          <div className="relative z-20 h-full flex flex-col items-center justify-center pt-20">
            {/* Welcome Text */}
            <motion.div
              className="absolute top-[20%] left-0 right-0 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                  Welcome to
                </span>
              </h1>
            </motion.div>

            {/* Company name and taglines */}
            <motion.div
              ref={ref}
              className="absolute bottom-[15%] left-0 right-0 text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="space-y-6">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700]">
                    Enterprises
                  </h2>
                  <div className="absolute inset-0 blur-2xl bg-[#FFD700] opacity-20 -z-10" />
                </motion.div>

                <div className="space-y-3">
                  <motion.p
                    className="text-lg md:text-xl font-medium text-white/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Pioneering Construction and Infrastructure Solutions
                  </motion.p>
                  <motion.p
                    className="text-base md:text-lg text-white/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    Transforming Visions into Remarkable Realities
                  </motion.p>
                </div>
              </div>

              {/* Service indicators */}
              <motion.div
                className="flex justify-center gap-12 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                {[
                  { icon: Brick, label: "Hollow Bricks" },
                  { icon: Grid, label: "Interlock" },
                  { icon: Truck, label: "Fleet" },
                  { icon: Mountain, label: "Natural Tiling" }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <service.icon className="w-8 h-8 text-yellow-500" />
                    <span className="text-sm text-white/60">{service.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute bottom-8 left-0 right-0 flex justify-center"
            >
              <div className="w-6 h-10 border-2 border-yellow-500/20 rounded-full flex justify-center p-2">
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-1 h-1 bg-yellow-500/50 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other sections */}
        <div className="relative z-30">
          <section id="services" className="min-h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
            <Service />
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

          <section id="branch" className="min-h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
            <Branch />
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

          <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
            <About />
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

          <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
            <Contact />
          </section>

          <footer className="w-full py-6 bg-gradient-to-r from-[#1B2A4A] to-[#2A3B5C] text-center">
            <p className="text-sm text-gray-300/90">&copy; 2024 A.V.M Enterprises. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;