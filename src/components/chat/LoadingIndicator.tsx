
import React from 'react';
import { motion } from 'framer-motion';

const LoadingIndicator: React.FC = () => {
  return (
    <motion.div 
      className="flex justify-center items-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-16 h-16 rounded-full border-4 border-[#6747F6] border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-brand-gray-600 font-medium">Processing your request...</p>
      </div>
    </motion.div>
  );
};

export default LoadingIndicator;
