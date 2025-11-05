import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CreditCard, Check, Plane } from 'lucide-react';

const BookingProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: 'Passenger Details', icon: User },
    { id: 2, title: 'Payment', icon: CreditCard },
    { id: 3, title: 'Confirmation', icon: Check },
  ];

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Booking</span>
          </h2>
          <p className="text-gray-300 text-lg">Simple steps to your next adventure</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ 
                      scale: currentStep >= step.id ? 1.1 : 0.8,
                      backgroundColor: currentStep >= step.id ? '#06b6d4' : '#374151'
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative flex items-center justify-center w-12 h-12 rounded-full border-2"
                    style={{
                      borderColor: currentStep >= step.id ? '#06b6d4' : '#6b7280'
                    }}
                  >
                    <step.icon 
                      size={24} 
                      className={currentStep >= step.id ? 'text-white' : 'text-gray-400'}
                    />
                    {currentStep > step.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-green-500 rounded-full"
                      >
                        <Check size={20} className="text-white" />
                      </motion.div>
                    )}
                  </motion.div>
                  <div className="ml-3 text-center md:text-left">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.id ? 'text-cyan-400' : 'text-gray-400'
                    }`}>
                      Step {step.id}
                    </p>
                    <p className={`text-xs ${
                      currentStep >= step.id ? 'text-white' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block w-16 h-0.5 ml-8 ${
                      currentStep > step.id ? 'bg-cyan-400' : 'bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Passenger Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Hey"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="FISAT"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="heyfisatians@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="+91 8746286723"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Payment Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="1234 5678 9101 1121"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="123"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Total</label>
                      <div className="px-4 py-3 bg-cyan-500/20 border border-cyan-400 rounded-xl text-cyan-400 font-bold text-xl">
                        $899
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-24 h-24 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <Check size={48} className="text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
                <p className="text-gray-300 text-lg mb-6">Your flight has been successfully booked.</p>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Plane className="text-cyan-400 transform rotate-45" size={24} />
                    <span className="text-white font-semibold">Booking Reference</span>
                  </div>
                  <p className="text-2xl font-bold text-cyan-400 tracking-wider">SV789123</p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <motion.button
                onClick={prevStep}
                disabled={currentStep === 1}
                whileHover={{ scale: currentStep > 1 ? 1.05 : 1 }}
                whileTap={{ scale: currentStep > 1 ? 0.95 : 1 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentStep > 1
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                Previous
              </motion.button>
              <motion.button
                onClick={nextStep}
                disabled={currentStep === 3}
                whileHover={{ scale: currentStep < 3 ? 1.05 : 1 }}
                whileTap={{ scale: currentStep < 3 ? 0.95 : 1 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentStep < 3
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                    : 'bg-green-600 text-white cursor-default'
                }`}
              >
                {currentStep === 3 ? 'Completed' : 'Next'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;