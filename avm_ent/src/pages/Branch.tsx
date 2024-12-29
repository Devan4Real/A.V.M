import React from 'react';

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
    <div className="min-h-screen relative px-5">
      {/* Background with black tint */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center mb-16 text-white">Our Branches</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(branchData).map(([id, branch]) => (
            <div key={id} className="backdrop-blur-md bg-white/10 rounded-lg shadow-xl p-10 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
                <img 
                  src={branch.image} 
                  alt={branch.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-white">{branch.name}</h2>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg">{branch.location}</p>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{branch.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branch;