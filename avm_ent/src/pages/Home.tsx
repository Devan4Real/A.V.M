import React from "react";
import Contact from "./Contact";
import About from "./About";
import Branch from "./Branch";

const Home: React.FC = () => {
  return (
    <div className="bg-background text-foreground">

      {/* Sections */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-black bg-opacity-20"
      >
        <h1 className="text-5xl font-bold text-white">Welcome to AVM Enterprises</h1>
      </section>

      <section
        id="services"
        className="h-screen flex flex-col items-center justify-center bg-black bg-opacity-20"
      >
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="text-lg mt-4 text-center text-white">
          Discover the amazing services we offer.
        </p>
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
