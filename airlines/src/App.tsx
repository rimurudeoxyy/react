import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchResults from './components/SearchResults';
import BookingProcess from './components/BookingProcess';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'search', 'booking', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 mx-auto mb-6 border-4 border-cyan-400 border-t-transparent rounded-full"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            SkyVoyage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-gray-300 mt-2"
          >
            Preparing your journey...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          
          
          <main>
            <HeroSection />
            <SearchResults />
            <BookingProcess />
            <ServicesSection />
            <ContactSection />
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-900 border-t border-gray-800 py-12">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-3 mb-6"
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center transform rotate-45">
                      <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    SkyVoyage
                  </h3>
                </motion.div>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Your journey to extraordinary destinations begins with us. Experience the future of air travel.
                </p>
                <div className="flex justify-center gap-8 mb-8">
                  {['Privacy Policy', 'Terms of Service', 'About Us', 'Careers'].map((link) => (
                    <motion.a
                      key={link}
                      href="#"
                      whileHover={{ scale: 1.05, color: '#06b6d4' }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
                <div className="border-t border-gray-800 pt-8">
                  <p className="text-gray-500">
                    © 2025 SkyVoyage. All rights reserved. Crafted with ✈️ for modern travelers.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;