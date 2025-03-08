
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatContext } from './InsightsPanel';

// Import our new component files
import ChatHeader from './chat/ChatHeader';
import ChatPrompt from './chat/ChatPrompt';
import Response from './chat/Response';
import LoadingIndicator from './chat/LoadingIndicator';
import EmptyState from './chat/EmptyState';

interface ChatInterfaceProps {
  className?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ className }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setPrompt: setContextPrompt } = useChatContext();
  
  // Fix the build error by properly handling the context
  useEffect(() => {
    if (setContextPrompt) {
      setContextPrompt(prompt);
    }
  }, [prompt, setContextPrompt]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResponse("The most common RCA failure issues are:\n\n1. Lack of communication/skill: This issue is often addressed through coaching and documentation. It occurs 20 times.\n\n2. Did not follow process or policy: This issue is also frequently addressed through coaching, and it occurs 19 times.\n\n3. Scale Misinterpretation: This issue is addressed through managing customer expectations, customer education, or no action taken/possible, depending on the specific case. It occurs 14 times.\n\nOther common issues include delayed contact with customers, known issues/design limitations, and agent lack of technical skill or product knowledge. These issues are addressed through various CLCAs such as coaching, training, verbal feedback, and managing customer expectations.");
      setIsLoading(false);
      setPrompt('');
    }, 1500);
  };
  
  return (
    <div className={cn("h-[calc(100vh-4rem)] overflow-y-auto p-6", className)}>
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo and Title Section */}
        <ChatHeader />
        
        {/* Chatbox with solid gradient border */}
        <ChatPrompt 
          prompt={prompt}
          setPrompt={setPrompt}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        
        {!response && !isLoading && <EmptyState />}
        
        <AnimatePresence>
          {isLoading && <LoadingIndicator />}
          
          {response && !isLoading && <Response message={response} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ChatInterface;
