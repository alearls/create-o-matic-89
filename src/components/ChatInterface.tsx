
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Mail, MessageSquare, BarChart } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useChatContext } from './InsightsPanel';

interface ResponseProps {
  message: string;
}

const Response: React.FC<ResponseProps> = ({ message }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    toast.success('Copied to clipboard!');
  };

  const sendEmail = () => {
    // This would integrate with email functionality
    toast.success('Email option selected');
  };

  return (
    <motion.div
      className="mb-10 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-medium text-lg">OPS-GURU</span>
      </div>
      
      <div className="relative">
        <div className="bg-white rounded-xl p-6 mb-4 text-left shadow-md">
          <p className="text-brand-gray-800 leading-relaxed">{message}</p>
          
          {/* Sample chart visualization */}
          <div className="mt-8 flex justify-center">
            <motion.div 
              className="w-full max-w-lg h-60 bg-brand-gray-100 rounded-lg flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-full h-full p-4">
                  <div className="relative w-full h-full">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                      {[35, 65, 45, 80, 55, 30, 70, 50, 60, 40].map((height, i) => (
                        <div 
                          key={i}
                          className="w-full mx-0.5 bg-[#6747F6] opacity-80 rounded-t-sm"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300" />
                    <div className="absolute left-0 h-full w-0.5 bg-gray-300" />
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-500">RCA Failure Analysis by Type</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-1">
          <Copy size={14} />
          <span>Copy</span>
        </Button>
        <Button variant="outline" size="sm" onClick={sendEmail} className="flex items-center gap-1">
          <Mail size={14} />
          <span>Email</span>
        </Button>
      </div>
    </motion.div>
  );
};

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
        
        {/* Chatbox with solid gradient border */}
        <motion.div 
          className="mb-8 relative rounded-xl"
          whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
        >
          {/* Solid gradient border */}
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6747F6] via-[#8066F9] to-[#A78BFC]"></div>
          
          {/* White input box */}
          <div className="relative z-10 bg-white rounded-lg p-3">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
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
                  <>Go</>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
        
        {!response && !isLoading && (
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
        )}
        
        <AnimatePresence>
          {isLoading && (
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
          )}
          
          {response && !isLoading && <Response message={response} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ChatInterface;
