
import React from 'react';
import { cn } from '@/lib/utils';
import UserAvatar from './UserAvatar';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
  className?: string;
  userName?: string;
  userImage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  className,
  userName = "Mike",
  userImage
}) => {
  const navLinks = [
    { name: "About", href: "#", hasDropdown: true },
    { name: "Training", href: "#", hasDropdown: true },
    { name: "Help", href: "#", hasDropdown: true },
  ];
  
  return (
    <motion.header 
      className={cn(
        "sticky top-0 z-50 w-full bg-[#6747F6] shadow-sm border-b border-[#5235E4]", 
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </motion.a>
            ))}
          </nav>
        </div>
        
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <UserAvatar name={userName} image={userImage} className="h-8 w-8" />
            <span className="text-white text-sm font-medium">Hi {userName}</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
