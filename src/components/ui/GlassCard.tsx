import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export { cn };

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  interactive = false,
  ...props
}) => {
  return (
    <motion.div
      className={cn('glass-card p-6', interactive && 'cursor-pointer', className)}
      whileHover={interactive ? { scale: 1.02, y: -4 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};
