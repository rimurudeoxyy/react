import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Globe, Headphones, Wifi, Coffee } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Advanced security protocols and encrypted transactions for your peace of mind.',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service to assist you whenever you need help.',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to over 1000 destinations worldwide with our partner airlines.',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description: 'Dedicated support team for all your travel needs and inquiries.',
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: Wifi,
      title: 'In-Flight WiFi',
      description: 'Stay connected with high-speed internet throughout your journey.',
      color: 'from-cyan-400 to-teal-600'
    },
    {
      icon: Coffee,
      title: 'Premium Amenities',
      description: 'Enjoy luxury amenities and services designed for your comfort.',
      color: 'from-yellow-400 to-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Premium <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience unparalleled service with our comprehensive range of travel solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  style={{ boxShadow: '0 8px 32px rgba(6, 182, 212, 0.3)' }}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 w-0 group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            Learn More About Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;