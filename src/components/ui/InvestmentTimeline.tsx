'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface InvestmentTimelineProps {
  currentPrice: string;
  projection: string;
}

export default function InvestmentTimeline({ currentPrice, projection }: InvestmentTimelineProps) {
  return (
    <div className="relative py-6">
      {/* Timeline Container */}
      <div className="relative">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#10b981] rounded-full transform -translate-y-1/2" />
        
        {/* Animated Progress Fill */}
        <motion.div
          className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-[#f59e0b] to-[#10b981] rounded-full transform -translate-y-1/2"
          initial={{ width: '0%' }}
          whileInView={{ width: '66%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Timeline Points */}
        <div className="relative flex justify-between items-center">
          {/* Now Point */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(245, 158, 11, 0.4)',
                    '0 0 20px rgba(245, 158, 11, 0.6)',
                    '0 0 0px rgba(245, 158, 11, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-white font-bold text-sm">NOW</span>
              </motion.div>
            </div>
            <div className="mt-2 text-center">
              <div className="text-2xl font-bold text-[#f59e0b]">{currentPrice}</div>
              <div className="text-xs text-[#6b7280] mt-1">Current Entry</div>
            </div>
          </motion.div>

          {/* Short-Term Point */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center shadow-md"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
            </div>
            <div className="mt-2 text-center">
              <div className="text-sm font-semibold text-[#1f2937]">Growth</div>
              <div className="text-xs text-[#6b7280] mt-1">Short-Term</div>
            </div>
          </motion.div>

          {/* Projected Point */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(16, 185, 129, 0.4)',
                    '0 0 20px rgba(16, 185, 129, 0.6)',
                    '0 0 0px rgba(16, 185, 129, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <span className="text-white font-bold text-xs">PROJ</span>
              </motion.div>
            </div>
            <div className="mt-2 text-center">
              <div className="text-xl font-bold text-[#10b981]">{projection}</div>
              <div className="text-xs text-[#6b7280] mt-1">Projected</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
