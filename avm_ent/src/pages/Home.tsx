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
    <div id="container3D" className="bg-background text-foreground relative">
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Logo3D />
      </div>

      <div className="relative z-20">
        <section
          id="home"
          className="h-screen flex flex-col items-center justify-center relative"
        >
          <div ref={ref} className="text-center px-4 z-30 flex flex-col items-center justify-center h-full py-20">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3 
              }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-40"
            >
              Welcome to
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                delay: 0.5
              }}
              className="flex flex-col items-center justify-center gap-10"
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  delay: 0.6
                }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 tracking-tight mt-40"
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
                className="max-w-2xl text-lg md:text-xl text-gray-300 text-center px-4 leading-relaxed mt-13"
              >
                Pioneering Construction and Infrastructure Solutions
                <br />
                Transforming Visions into Remarkable Realities
              </motion.p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        <section
          id="services"
          className="h-screen flex flex-col items-center justify-center bg-black bg-opacity-20"
        >
          <Service />
        </section>

        <section
          id="branch"
          className="h-screen flex flex-col items-center justify-center bg-black bg-opacity-20"
        >
          <Branch />
        </section>

        <section
          id="about"
          className="h-screen flex flex-col items-center justify-center bg-black bg-opacity-20"
        >
          <About />
        </section>

        <section
          id="contact"
          className="h-screen flex flex-col items-center justify-center bg-black bg-opacity-20"
        >
          <Contact />
        </section>

        {/* Footer */}
        <footer className="w-full py-4 bg-[#1B2A4A] text-center">
          <p className="text-sm text-white">&copy; 2024 A.V.M Enterprises. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;