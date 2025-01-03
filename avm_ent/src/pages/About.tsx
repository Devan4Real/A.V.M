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
    <div className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto" // Changed from max-w-4xl to max-w-6xl
        >
          <h1 className="text-3xl sm:text-5xl font-bold -mt-12 mb-3 sm:mb-12 text-white text-center">
            About A.V.M Enterprises
          </h1>
          
          <div className="grid gap-4 w-full"> {/* Added w-full here */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full" // Added w-full
            >
              <Card className="bg-black/50 border-gray-800 backdrop-blur-sm w-full"> {/* Added w-full */}
                <CardContent className="p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Our Story</h2>
                  <p className="mb-4 text-gray-200 text-base sm:text-lg">
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
              className="w-full" // Added w-full
            >
              <Card className="bg-black/50 border-gray-800 backdrop-blur-sm w-full"> {/* Added w-full */}
                <CardContent className="p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Our Journey</h2>
                  <p className="mb-4 text-gray-200 text-base sm:text-lg">
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
              className="w-full" // Added w-full
            >
              <Card className="bg-black/50 border-gray-800 backdrop-blur-sm w-full"> {/* Added w-full */}
                <CardContent className="p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Our Vision</h2>
                  <p className="text-gray-200 text-base sm:text-lg">
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