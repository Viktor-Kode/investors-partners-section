'use client';

import { motion } from 'framer-motion';

interface PriorityBadgeProps {
  priority: 'high' | 'medium' | 'low';
  className?: string;
}

const priorityConfig = {
  high: {
    label: 'High Priority',
    className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  },
  medium: {
    label: 'Medium Priority',
    className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  },
  low: {
    label: 'Low Priority',
    className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  },
};

export default function PriorityBadge({ priority, className = '' }: PriorityBadgeProps) {
  const config = priorityConfig[priority];

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.className} ${className}`}
    >
      {config.label}
    </motion.span>
  );
}
