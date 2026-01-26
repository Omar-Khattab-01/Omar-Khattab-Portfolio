import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <motion.div
      // Render immediately to avoid intersection-observer hiccups on some mobile browsers
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
}
