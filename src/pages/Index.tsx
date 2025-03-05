
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ChatInterface from '@/components/ChatInterface';
import InsightsPanel from '@/components/InsightsPanel';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && <Sidebar />}
        <ChatInterface className="flex-1" />
        {!isMobile && <InsightsPanel />}
      </div>
    </motion.div>
  );
};

export default Index;
