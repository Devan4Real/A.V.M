import React from "react";
import Contact from "./Contact";
import About from "./About";
import Branch from "./Branch";
import Service from "./Service";
import Logo3D from "../components/Logo3D";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Home: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div id="container3D" className="bg-gradient-to-b from-[#1B2A4A] to-black text-foreground relative">
  <div className="fixed inset-0 z-10 pointer-events-none">
    <Logo3D />
  </div>

  <div className="relative z-20">
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center relative bg-black/40 backdrop-blur-xs"
    >
      <div ref={ref} className="text-center px-4 z-30 flex flex-col items-center justify-center h-full py-20 md:py-0">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 60 } : { opacity: 0, y: -50 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3 
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-30 mb-30 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        >
          Welcome to
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 10 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.5
          }}
          className="flex flex-col items-center justify-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 15 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              delay: 0.6
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight pt-20 mt-40 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
          >
            Enterprises
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              delay: 0.7
            }}
            className="max-w-2xl text-lg md:text-xl text-gray-300/90 text-center px-4 leading-relaxed mt-16 space-y-4 font-light"
          >
            <span className="block">Pioneering Construction and Infrastructure Solutions</span>
            <span className="block text-gray-400">Transforming Visions into Remarkable Realities</span>
          </motion.p>
        </motion.div>

        {/* Updated Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center space-x-6"
        >
          <div className="w-1.5 h-1.5 bg-yellow-400/80 rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-yellow-400/80 rounded-full animate-pulse delay-300"></div>
          <div className="w-1.5 h-1.5 bg-yellow-400/80 rounded-full animate-pulse delay-600"></div>
        </motion.div>

        {/* Added Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-20 left-0 right-0 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-gray-300/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-1 bg-yellow-400/80 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Rest of the sections with updated background */}
    {/* Separator */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>

    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm py-16 md:py-5 -mt-6"
    >
      <Service />
    </section>

    {/* Separator */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>

    <section
      id="branch"
      className="min-h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm py-16 md:py-5 -mt-6"
    >
      <Branch />
    </section>

    {/* Separator */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>

    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm py-16 md:py-5 -mt-6"
    >
      <About />
    </section>

    {/* Separator */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>

    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm py-16 md:py-5 -mt-6"
    >
      <Contact />
    </section>

    {/* Updated Footer */}
    <footer className="w-full py-6 bg-gradient-to-r from-[#1B2A4A] to-[#2A3B5C] text-center">
      <p className="text-sm text-gray-300/90">&copy; 2024 A.V.M Enterprises. sAll rights reserved.</p>
    </footer>
  </div>
</div>
  );
};

export default Home;