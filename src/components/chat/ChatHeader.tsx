
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../Logo';

const ChatHeader: React.FC = () => {
  return (
    <motion.div
      className="mb-6 flex items-start"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3">
        <Logo className="w-10 h-10" showText={false} />
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold text-[#6747F6]">OPS GURU</h1>
          <p className="text-brand-gray-500 text-lg mt-1">Your superhuman intelligent strategic advisor!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatHeader;
