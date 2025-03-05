
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface UserAvatarProps {
  name: string;
  image?: string;
  className?: string;
  showBadge?: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ 
  name, 
  image, 
  className,
  showBadge = false
}) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
    
  return (
    <motion.div 
      className="relative" 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Avatar className={cn("border-2 border-white", className)}>
        {image ? (
          <AvatarImage src={image} alt={name} />
        ) : null}
        <AvatarFallback className="bg-brand-purple text-white">
          {initials}
        </AvatarFallback>
      </Avatar>
      
      {showBadge && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
      )}
    </motion.div>
  );
};

export default UserAvatar;
