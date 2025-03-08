
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
        className="relative w-[10.5rem] h-[10.5rem] rounded-full flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src="https://media-hosting.imagekit.io//fd4ff149a12845e9/og2.jpg?Expires=1835112713&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=shXJbjb7eHf8WsZiaQYXviJOQEzCJI1hFaa38MzKwLKFRtaLW7TEaBO~oUFIgA18ZBGF3hsPPlvDTQ8F4rfReWGctbB3Oydc-8ljx7TYJngl2RBSVBCFI9aKcsQOJjUWzg4N8Vl6Anp~jMecMzvQ1YfbkZi94UlRnP4J7ZCk~sNUAVUUYWgJSVULmNYgSvLdOfSBseJ5wOGd7s3F5MHVRf1BL8Bevrrdeppqn~u8lo58WFAYGRbfMXj-njcRVJ6ercSHwXsmJq5FjKyNBbTWtQS09i2Pcbk4J6t9lfRSEjGVaoBw3v1autvAI6cQc5NXGvhMUJ9Hv7yA4By7hkh51g__" 
          alt="OPS GURU Logo"
          className="w-full h-full object-cover"
        />
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
