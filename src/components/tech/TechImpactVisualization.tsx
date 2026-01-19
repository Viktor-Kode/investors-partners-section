'use client';

import { motion } from 'framer-motion';
import { Building2, ArrowRight, Sparkles } from 'lucide-react';

export default function TechImpactVisualization() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Technology Transformation
        </h3>
        <p className="text-gray-300">
          How technology transforms traditional investment
        </p>
      </motion.div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-12">
        {/* Traditional Real Estate */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-4">
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </motion.div>
            <motion.div
              className="absolute -inset-2 rounded-2xl border-2 border-gray-500 opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
          <span className="text-sm md:text-base font-semibold text-gray-300 uppercase tracking-wider">
            Traditional
          </span>
        </motion.div>

        {/* Tech Integration Animation */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-[#00d4aa] opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Middle ring */}
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-[#3b82f6] opacity-40"
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-[#00d4aa]" />
            </div>
            {/* Floating particles */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#00d4aa] rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: `${20 + i * 15}px 0`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  rotate: {
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  },
                }}
              />
            ))}
          </motion.div>
          <motion.span
            className="text-sm md:text-base font-semibold text-[#00d4aa] uppercase tracking-wider mt-4"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            + Technology
          </motion.span>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <ArrowRight className="w-8 h-8 text-[#00d4aa]" />
        </motion.div>

        {/* Future Investment */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative mb-4">
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[#00d4aa] to-[#3b82f6] flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </motion.div>
            <motion.div
              className="absolute -inset-2 rounded-2xl border-2 border-[#00d4aa]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
                boxShadow: [
                  '0 0 0px rgba(0, 212, 170, 0)',
                  '0 0 20px rgba(0, 212, 170, 0.6)',
                  '0 0 0px rgba(0, 212, 170, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
          <span className="text-sm md:text-base font-semibold text-white uppercase tracking-wider">
            Future-Forward
          </span>
        </motion.div>
      </div>

      {/* Labels Row */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
          Traditional
        </span>
        <span className="text-xs md:text-sm text-[#00d4aa] uppercase tracking-wider">
          + Technology
        </span>
        <span className="text-xs md:text-sm text-white uppercase tracking-wider">
          Future-Forward
        </span>
      </motion.div>
    </div>
  );
}
