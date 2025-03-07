
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { MessageSquare, FileText, Settings, Activity, Download, Zap, BarChart3, Database, Users } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const sidebarItems = [
    { 
      name: "Ask OPS-GURU", 
      icon: <MessageSquare size={18} />, 
      isActive: true,
      color: "#6747F6"
    },
    { 
      name: "Biz Rules Config", 
      icon: <Settings size={18} />,
      color: "#3B82F6"
    },
    { 
      name: "Workflow Config", 
      icon: <Activity size={18} />,
      color: "#10B981"
    },
    { 
      name: "New Report Requests", 
      icon: <FileText size={18} />,
      color: "#F59E0B"
    },
    { 
      name: "Persona Management", 
      icon: <Users size={18} />,
      color: "#8B5CF6"
    },
    { 
      name: "Ops Guru Definitions", 
      icon: <Database size={18} />,
      color: "#EC4899"
    },
    { 
      name: "NLP Engine", 
      icon: <Zap size={18} />,
      color: "#F43F5E"
    },
    { 
      name: "Download Insights", 
      icon: <Download size={18} />,
      color: "#6366F1"
    }
  ];

  const recentQueries = [
    "CSAT analysis for Q2",
    "Attrition report by region",
    "Support ticket volume trends"
  ];
  
  return (
    <motion.aside 
      className={cn(
        "w-60 h-[calc(100vh-4rem)] border-r border-brand-gray-200 py-6 px-2 bg-gradient-to-b from-white to-[#F9F8FF]",
        className
      )}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div 
        className="flex flex-col gap-1.5"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {sidebarItems.map((item, index) => (
          <motion.div
            key={item.name}
            className={item.isActive ? "flex items-center gap-3 px-4 py-3 text-[#6747F6] bg-[#6747F6]/10 rounded-md font-medium" : "flex items-center gap-3 px-4 py-3 text-brand-gray-600 hover:text-[#6747F6] hover:bg-[#6747F6]/5 rounded-md transition-all duration-200 cursor-pointer"}
            variants={staggerItem}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center" style={{ color: item.isActive ? "#6747F6" : item.color }}>
              {item.icon}
            </div>
            <span className="text-sm font-medium">{item.name}</span>
            {item.isActive && (
              <motion.div 
                className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6747F6]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 px-4">
        <h3 className="text-xs font-semibold text-brand-gray-500 uppercase tracking-wider mb-3">Recent Queries</h3>
        <div className="space-y-2">
          {recentQueries.map((query, index) => (
            <motion.div 
              key={index}
              className="text-sm text-brand-gray-600 hover:text-[#6747F6] cursor-pointer flex items-center gap-2 py-1.5"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <BarChart3 size={14} />
              <span>{query}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="mx-4 mt-10 p-4 rounded-lg bg-gradient-to-br from-[#6747F6]/10 to-[#6747F6]/5 border border-[#6747F6]/10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h4 className="text-sm font-medium text-[#6747F6] mb-1">Pro Analytics</h4>
        <p className="text-xs text-brand-gray-600 mb-3">Unlock advanced features with Pro</p>
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#6747F6] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </div>
        <p className="text-xs text-right mt-1 text-brand-gray-500">75% complete</p>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
