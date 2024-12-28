import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-background text-foreground">

      {/* Sections */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-background"
      >
        <h1 className="text-5xl font-bold">Welcome to Our SPA</h1>
      </section>

      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center bg-card"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4 text-center">
          Learn more about what we do and why we do it.
        </p>
      </section>

      <section
        id="services"
        className="h-screen flex flex-col items-center justify-center bg-muted"
      >
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-4 text-center">
          Discover the amazing services we offer.
        </p>
      </section>

      <section
        id="contact"
        className="h-screen flex flex-col items-center justify-center bg-accent"
      >
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4 text-center">
          Get in touch with us for more information.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-card text-center">
        <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

