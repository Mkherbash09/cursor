"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InfoSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  ctaText,
  ctaLink,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={cn(
        'flex flex-col gap-8 py-12',
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-800 transform transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <motion.h2
          className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mb-6"
          initial={{ width: 0 }}
          animate={isVisible ? { width: 80 } : undefined}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        <motion.p
          className="text-gray-300 mb-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {description}
        </motion.p>
        
        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            className="btn btn-primary self-start flex items-center group"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span>{ctaText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.section>
  );
};

export default InfoSection; 