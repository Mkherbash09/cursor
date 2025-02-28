"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, MotionValue } from 'framer-motion';

interface MagneticProps {
  children: React.ReactNode;
  intensity?: number;
  springOptions?: Record<string, any>;
  className?: string;
}

export function Magnetic({
  children,
  intensity = 0.5,
  springOptions = { damping: 15, stiffness: 300 },
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 0, height: 0 });

  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);

  const transformX = useTransform(x, (val) => `translateX(${val}px)`);
  const transformY = useTransform(y, (val) => `translateY(${val}px)`);

  useEffect(() => {
    if (!ref.current) return;
    
    const { width, height } = ref.current.getBoundingClientRect();
    setSize({ width, height });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top } = ref.current.getBoundingClientRect();
    
    const center = {
      x: left + size.width / 2,
      y: top + size.height / 2,
    };
    
    const distance = {
      x: clientX - center.x,
      y: clientY - center.y,
    };
    
    x.set(distance.x * intensity);
    y.set(distance.y * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: [transformX, transformY],
        display: 'inline-block',
      }}
    >
      {children}
    </motion.div>
  );
} 