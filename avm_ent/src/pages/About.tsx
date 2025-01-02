import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen relative max-w-5xl mx-auto">
      <div 
        className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 text-white text-center">About A.V.M Enterprises</h1>
          
          <div className="grid gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Our Story</h2>
                  <p className="mb-4 text-gray-200">
                    A.V.M Enterprises is a leading company in providing innovative solutions for businesses across various industries. With our cutting-edge technology and expert team, we strive to transform the way companies operate and grow.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Our Journey</h2>
                  <p className="mb-4 text-gray-200">
                    Founded in 2005, we have consistently delivered exceptional value to our clients through our wide range of services, including software development, IT consulting, and digital transformation solutions. Our commitment to quality and customer satisfaction has made us a trusted partner for businesses of all sizes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
                  <p className="text-gray-200">
                    Our vision is to empower businesses through technology, and our mission is to provide innovative, reliable, and scalable solutions that drive growth and success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;