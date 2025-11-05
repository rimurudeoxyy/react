import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Clock, Star, Wifi, Coffee, Monitor } from 'lucide-react';

const SearchResults: React.FC = () => {
  const flights = [
    {
      id: 1,
      airline: 'Mass SkyVoyage',
      from: 'Trivandrum',
      to: 'Kochi',
      departure: '08:30',
      arrival: '20:45',
      duration: '7h 15m',
      price: '$899',
      rating: 4.9,
      amenities: ['Wifi', 'Entertainment', 'Premium Meals']
    },
    {
      id: 2,
      airline: 'Super Wings',
      from: 'Kochi',
      to: 'Texas',
      departure: '14:20',
      arrival: '02:35',
      duration: '17h 15m',
      price: '$1749',
      rating: 4.7,
      amenities: ['Wifi', 'Entertainment', 'Snacks']
    },
    {
      id: 3,
      airline: 'Minnal Air',
      from: 'New Delhi',
      to: 'Ohio',
      departure: '22:10',
      arrival: '10:25',
      duration: '7h 15m',
      price: '$699',
      rating: 4.5,
      amenities: ['Entertainment', 'Basic Meals']
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi':
        return <Wifi size={16} />;
      case 'Entertainment':
        return <Monitor size={16} />;
      case 'Premium Meals':
      case 'Basic Meals':
      case 'Snacks':
        return <Coffee size={16} />;
      default:
        return null;
    }
  };

  return (
    <section id="search" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Available <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Flights</span>
          </h2>
          <p className="text-gray-300 text-lg">Choose your perfect journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {flights.map((flight, index) => (
            <motion.div
              key={flight.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 grid md:grid-cols-3 gap-6 w-full">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Plane className="text-cyan-400 transform rotate-45" size={20} />
                      <h3 className="text-white font-semibold">{flight.airline}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{flight.from} → {flight.to}</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">{flight.departure}</p>
                        <p className="text-gray-400 text-sm">{flight.from}</p>
                      </div>
                      <div className="flex-1 relative">
                        <div className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                        <Plane className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">{flight.arrival}</p>
                        <p className="text-gray-400 text-sm">{flight.to}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                      <Clock size={14} />
                      {flight.duration}
                    </div>
                  </div>

                  <div className="text-center md:text-right">
                    <div className="flex items-center justify-center md:justify-end gap-1 mb-2">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-white font-semibold">{flight.rating}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-end gap-2 mb-3">
                      {flight.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 text-gray-400 text-xs"
                          title={amenity}
                        >
                          {getAmenityIcon(amenity)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-3xl font-bold text-white mb-2">{flight.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Select Flight
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;