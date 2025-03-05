
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LightbulbIcon, BarChart, TrendingUp, DollarSign } from 'lucide-react';

interface InsightsItemProps {
  title: string;
  description: string;
}

const InsightsItem: React.FC<InsightsItemProps> = ({ title, description }) => {
  return (
    <motion.div 
      className="insight-card"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-2">
        <h4 className="font-medium text-brand-gray-900">{title}</h4>
        <p className="text-sm text-brand-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

interface InsightsPanelProps {
  className?: string;
}

const InsightsPanel: React.FC<InsightsPanelProps> = ({ className }) => {
  const insights = [
    {
      title: "What are my opportunities and risks",
      description: "if I want to improve my business' RDR by 20% ? Generate a plan and bridge for me."
    },
    {
      title: "Generate an E2E account summary for BOEING",
      description: "including health score, open cases, previous DSATs and any pipeline deals."
    },
    {
      title: "Summarize any customer comments",
      description: "and include overall CSAT score in the current quarter, highlighting opportunities for our team to improve."
    },
    {
      title: "Can you provide an EOY report for my team",
      description: "detailing the top and bottom quartile performers across each metric, along with a readout on opportunities for improvement?"
    }
  ];
  
  return (
    <motion.div 
      className={cn(
        "h-[calc(100vh-4rem)] w-72 border-l border-brand-gray-200 py-6 px-4",
        className
      )}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 mb-6">
        <LightbulbIcon size={20} className="text-brand-purple" />
        <h3 className="text-lg font-semibold text-brand-gray-800">Recent Insights</h3>
      </div>
      
      <div className="flex flex-col gap-4">
        {insights.map((insight, index) => (
          <InsightsItem 
            key={index}
            title={insight.title}
            description={insight.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default InsightsPanel;
