"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  enableHover?: boolean;
  transition?: Record<string, unknown>;
}

export function AnimatedBackground({
  children,
  className,
  enableHover = false,
  transition = {
    type: 'spring',
    damping: 15,
    stiffness: 300,
  },
  ...props
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!enableHover) return;
    
    const target = e.currentTarget;
    const id = target.dataset.id;
    
    if (id) {
      setHovered(id);
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(100, 100, 255, 0.15), transparent 40%)`,
        }}
        transition={transition}
      />
      
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return React.cloneElement(child, {
          onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
            handleMouseEnter(e);
            if (child.props.onMouseEnter) child.props.onMouseEnter(e);
          },
          onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
            handleMouseLeave();
            if (child.props.onMouseLeave) child.props.onMouseLeave(e);
          },
          className: cn(
            child.props.className,
            enableHover && hovered === child.props['data-id']
              ? 'relative z-10 bg-gray-100/80 dark:bg-gray-800/80'
              : ''
          ),
        });
      })}
    </motion.div>
  );
} 