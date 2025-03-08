
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatPromptProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const ChatPrompt: React.FC<ChatPromptProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  return (
    <motion.div 
      className="mb-8 relative rounded-xl"
      whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Increase border size and make it a solid gradient border */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#6747F6] via-[#8066F9] to-[#A78BFC]"></div>
      
      {/* White input box */}
      <div className="relative z-10 bg-white rounded-lg p-3">
        <form onSubmit={onSubmit} className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Ask OPS-GURU a question..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-2 bg-transparent text-base"
          />
          <Button 
            type="submit" 
            variant="default"
            className="bg-[#6747F6] hover:bg-[#5235E4] text-white"
            disabled={isLoading}
            size="sm"
          >
            {isLoading ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              </motion.div>
            ) : (
              <Send size={16} />
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ChatPrompt;
