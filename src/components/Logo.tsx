
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  textClassName,
  showText = true
}) => {
  return (
    <motion.div 
      className={cn("flex items-center gap-2", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative w-8 h-8 rounded-full flex items-center justify-center bg-brand-purple text-white font-bold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">O</span>
      </motion.div>
      
      {showText && (
        <motion.div 
          className={cn("font-bold text-lg text-brand-gray-800", textClassName)}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          OPS-GURU
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;
