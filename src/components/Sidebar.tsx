
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { MessageSquare, FileText, Settings, Activity, Download, Zap, Database, Users } from 'lucide-react';

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
            className={item.isActive 
              ? "flex items-center gap-3 px-4 py-3 text-[#6747F6] bg-[#6747F6]/10 rounded-md font-medium shadow-sm" 
              : "flex items-center gap-3 px-4 py-3 text-brand-gray-600 hover:text-[#6747F6] hover:bg-[#6747F6]/5 rounded-md transition-all duration-200 cursor-pointer hover:shadow-sm"}
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
    </motion.aside>
  );
};

export default Sidebar;
