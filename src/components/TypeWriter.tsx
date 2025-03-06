
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
  phrases: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  phrases,
  typingSpeed = 80,
  deleteSpeed = 50,
  delayBetweenPhrases = 2000,
  className,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentIndex];
      
      if (isPaused) {
        timeoutRef.current = setTimeout(() => {
          setIsPaused(false);
        }, delayBetweenPhrases);
        return;
      }
      
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        
        if (currentText.length === currentPhrase.length) {
          setIsPaused(true);
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, delayBetweenPhrases);
          return;
        }
      }
      
      const nextSpeed = isDeleting ? deleteSpeed : typingSpeed;
      timeoutRef.current = setTimeout(handleTyping, nextSpeed);
    };
    
    timeoutRef.current = setTimeout(handleTyping, typingSpeed);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, currentIndex, isDeleting, isPaused, phrases, typingSpeed, deleteSpeed, delayBetweenPhrases]);
  
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </motion.div>
  );
};

export default TypeWriter;
