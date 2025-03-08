
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <motion.div 
      className="text-center text-brand-gray-500 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <MessageSquare size={40} className="mx-auto mb-4 text-[#6747F6]/30" />
      <p className="text-lg font-medium">Ask OPS-GURU a question</p>
      <p className="text-sm mt-2">Get insights, reports, and analytics about your operations</p>
    </motion.div>
  );
};

export default EmptyState;
