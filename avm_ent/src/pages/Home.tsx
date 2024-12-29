import React from "react";
import Contact from "./Contact";
import About from "./About";
import Branch from "./Branch";
import Service from "./Service";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Home: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div className="bg-background text-foreground">

      {/* Sections */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-black bg-opacity-20"
      >
        <div ref={ref} className="flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3 
              }}
              className="text-4xl lg:text-6xl font-bold text-white whitespace-nowrap"
            >
              Welcome to
            </motion.span>
            <motion.span
              initial={{ x: 200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5 
              }}
              className="text-4xl lg:text-6xl font-bold text-white whitespace-nowrap"
            >
              A.V.M Enterprises
            </motion.span>
          </div>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.8 
            }}
            className="text-xl mt-8 text-gray-300 text-center max-w-2xl px-4"
          >
            Your trusted partner in construction and infrastructure solutions.
          </motion.p>
        </div>
      </section>

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
      <footer className="w-full py-4 bg-card text-center">
        <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
