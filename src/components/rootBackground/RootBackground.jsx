import React from 'react';
import { motion } from 'framer-motion';

const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative  h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #B794F4 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #B794F4 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, #B794F4 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, #B794F4 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
