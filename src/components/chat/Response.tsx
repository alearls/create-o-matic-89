
import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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

export default Response;
