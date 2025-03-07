
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { MessageSquare, FileText, Settings, Activity, Download } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const sidebarItems = [
    { 
      name: "Ask OPS-GURU", 
      icon: <MessageSquare size={18} />, 
      isActive: true 
    },
    { 
      name: "Biz Rules Config", 
      icon: <FileText size={18} /> 
    },
    { 
      name: "Workflow Config", 
      icon: <Settings size={18} /> 
    },
    { 
      name: "New Report Requests", 
      icon: <FileText size={18} /> 
    },
    { 
      name: "Persona Management", 
      icon: <Activity size={18} /> 
    },
    { 
      name: "Ops Guru Definitions", 
      icon: <Settings size={18} /> 
    },
    { 
      name: "NLP Engine", 
      icon: <Activity size={18} /> 
    },
    { 
      name: "Download Insights", 
      icon: <Download size={18} /> 
    }
  ];
  
  return (
    <motion.aside 
      className={cn(
        "w-60 h-[calc(100vh-4rem)] border-r border-brand-gray-200 py-6 px-2",
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
            className={item.isActive ? "sidebar-item-active" : "sidebar-item"}
            variants={staggerItem}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
