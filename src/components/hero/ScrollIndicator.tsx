'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <span className="text-sm text-blue-200 font-medium">Scroll to explore</span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown className="w-6 h-6 text-blue-300" />
      </motion.div>
    </motion.div>
  );
}
