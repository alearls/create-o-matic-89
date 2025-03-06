
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LightbulbIcon, BarChart, TrendingUp, DollarSign, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Create a Context to share state between components
import { createContext, useContext, useState } from 'react';

// Define the context type
interface ChatContextType {
  setPrompt: (text: string) => void;
}

// Create the context with a default value
export const ChatContext = createContext<ChatContextType>({
  setPrompt: () => {},
});

// Custom hook to use the chat context
export const useChatContext = () => useContext(ChatContext);

interface InsightsItemProps {
  title: string;
  description: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const InsightsItem: React.FC<InsightsItemProps> = ({ title, description, onClick, icon }) => {
  return (
    <motion.div 
      className="insight-card cursor-pointer overflow-hidden relative"
      whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(103, 71, 246, 0.1), 0 8px 10px -6px rgba(103, 71, 246, 0.05)" }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <motion.div 
        className="absolute top-0 left-0 w-1 h-full bg-[#6747F6]"
        initial={{ height: 0 }}
        whileHover={{ height: "100%" }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="flex items-start gap-3 p-4">
        <div className="p-2 rounded-full bg-[#6747F6]/10 text-[#6747F6]">
          {icon}
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-medium text-brand-gray-900">{title}</h4>
          <p className="text-sm text-brand-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface InsightsPanelProps {
  className?: string;
}

const InsightsPanel: React.FC<InsightsPanelProps> = ({ className }) => {
  const { toast } = useToast();
  const { setPrompt } = useChatContext();
  
  const insights = [
    {
      title: "What are my opportunities and risks",
      description: "if I want to improve my business' RDR by 20% ? Generate a plan and bridge for me.",
      icon: <TrendingUp size={16} />
    },
    {
      title: "Generate an E2E account summary for BOEING",
      description: "including health score, open cases, previous DSATs and any pipeline deals.",
      icon: <BarChart size={16} />
    },
    {
      title: "Summarize any customer comments",
      description: "and include overall CSAT score in the current quarter, highlighting opportunities for our team to improve.",
      icon: <LightbulbIcon size={16} />
    },
    {
      title: "Can you provide an EOY report for my team",
      description: "detailing the top and bottom quartile performers across each metric, along with a readout on opportunities for improvement?",
      icon: <DollarSign size={16} />
    }
  ];
  
  const handleInsightClick = (insightTitle: string, insightDescription: string) => {
    const fullPrompt = `${insightTitle} ${insightDescription}`;
    setPrompt(fullPrompt);
    toast({
      title: "Prompt loaded",
      description: "The insight has been loaded into the chat box",
      variant: "default",
    });
  };
  
  return (
    <motion.div 
      className={cn(
        "h-[calc(100vh-4rem)] w-72 border-l border-brand-gray-200 py-6 px-4 bg-gradient-to-b from-white to-[#F9F8FF]",
        className
      )}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Zap size={20} className="text-[#6747F6]" />
        <h3 className="text-lg font-semibold text-brand-gray-800">Recent Insights</h3>
      </div>
      
      <div className="flex flex-col gap-4">
        {insights.map((insight, index) => (
          <InsightsItem 
            key={index}
            title={insight.title}
            description={insight.description}
            icon={insight.icon}
            onClick={() => handleInsightClick(insight.title, insight.description)}
          />
        ))}
      </div>
      
      <motion.div 
        className="mt-8 p-4 rounded-lg bg-[#6747F6]/5 border border-[#6747F6]/10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <h4 className="font-medium text-[#6747F6] mb-2 flex items-center gap-2">
          <LightbulbIcon size={16} />
          <span>Pro Tip</span>
        </h4>
        <p className="text-sm text-brand-gray-600">
          Click on any insight card to automatically load it into the chat input, then press Go to analyze.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default InsightsPanel;
