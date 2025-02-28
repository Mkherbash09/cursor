"use client";

import React, { createContext, useContext, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MorphingDialogContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRect: DOMRect | null;
  setTriggerRect: React.Dispatch<React.SetStateAction<DOMRect | null>>;
  transition?: any;
}

const MorphingDialogContext = createContext<MorphingDialogContextValue | null>(null);

export function MorphingDialog({
  children,
  transition = {
    type: 'spring',
    damping: 25,
    stiffness: 120,
  },
}: {
  children: React.ReactNode;
  transition?: any;
}) {
  const [open, setOpen] = useState(false);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);

  return (
    <MorphingDialogContext.Provider
      value={{ open, setOpen, triggerRect, setTriggerRect, transition }}
    >
      {children}
    </MorphingDialogContext.Provider>
  );
}

export function MorphingDialogTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(MorphingDialogContext);
  const triggerRef = useRef<HTMLDivElement>(null);

  if (!context) {
    throw new Error('MorphingDialogTrigger must be used within a MorphingDialog');
  }

  const handleClick = () => {
    if (triggerRef.current) {
      context.setTriggerRect(triggerRef.current.getBoundingClientRect());
      context.setOpen(true);
    }
  };

  return (
    <div
      ref={triggerRef}
      className={cn('cursor-pointer', className)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export function MorphingDialogContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(MorphingDialogContext);

  if (!context) {
    throw new Error('MorphingDialogContainer must be used within a MorphingDialog');
  }

  const { open, triggerRect, transition } = context;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm',
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              context.setOpen(false);
            }
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MorphingDialogContent({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const context = useContext(MorphingDialogContext);

  if (!context) {
    throw new Error('MorphingDialogContent must be used within a MorphingDialog');
  }

  const { triggerRect, transition } = context;

  const initialX = triggerRect ? triggerRect.left + triggerRect.width / 2 : 0;
  const initialY = triggerRect ? triggerRect.top + triggerRect.height / 2 : 0;
  const initialWidth = triggerRect ? triggerRect.width : 0;
  const initialHeight = triggerRect ? triggerRect.height : 0;

  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      initial={{
        x: initialX,
        y: initialY,
        width: initialWidth,
        height: initialHeight,
        borderRadius: '8px',
      }}
      animate={{
        x: 0,
        y: 0,
        width: '100%',
        height: 'auto',
        borderRadius: '16px',
        position: 'relative',
        maxWidth: '90vw',
        maxHeight: '90vh',
        left: 0,
        top: 0,
        right: 0,
        margin: '0 auto',
      }}
      exit={{
        x: initialX,
        y: initialY,
        width: initialWidth,
        height: initialHeight,
        borderRadius: '8px',
      }}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MorphingDialogClose({
  children,
  className,
  variants,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  [key: string]: any;
}) {
  const context = useContext(MorphingDialogContext);

  if (!context) {
    throw new Error('MorphingDialogClose must be used within a MorphingDialog');
  }

  return (
    <motion.button
      className={cn('cursor-pointer', className)}
      onClick={() => context.setOpen(false)}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.button>
  );
} 