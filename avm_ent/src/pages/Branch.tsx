import React from 'react';
import { motion } from 'framer-motion';

const Branch: React.FC = () => {
  const branchData = {
    '1': {
      name: 'Main Branch',
      location: 'Chennai, Tamil Nadu',
      description: 'Our headquarters and main operational center.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070'
    },
    '2': {
      name: 'Secondary Branch',
      location: 'Coimbatore, Tamil Nadu',
      description: 'Our expanding facility serving the western region.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069'
    }
  };

  return (
    <motion.div 
      className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Our Branches
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {Object.entries(branchData).map(([id, branch], index) => (
          <motion.div 
            key={id} 
            className="backdrop-blur-md bg-white/10 rounded-lg shadow-xl p-6 sm:p-10 transform hover:scale-[1.02]"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 } 
            }}
          >
            <motion.div 
              className="relative h-48 sm:h-64 mb-6 sm:mb-8 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src={branch.image} 
                alt={branch.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {branch.name}
            </motion.h2>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center text-gray-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-base sm:text-lg">{branch.location}</p>
              </motion.div>
              <motion.p 
                className="text-gray-300 text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {branch.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Branch;