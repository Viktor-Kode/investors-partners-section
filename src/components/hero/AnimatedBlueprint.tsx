'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Fixed coordinates to prevent hydration mismatch
const generateFixedLines = () => {
  // Use a seeded approach or fixed coordinates
  const seed = 12345; // Fixed seed for consistency
  const lines = [];
  
  for (let i = 0; i < 20; i++) {
    // Simple seeded random function
    const seedValue = (seed + i * 7919) % 10000;
    const x1 = ((seedValue * 1.1) % 100);
    const y1 = ((seedValue * 1.3) % 100);
    const x2 = ((seedValue * 1.7) % 100);
    const y2 = ((seedValue * 1.9) % 100);
    
    lines.push({
      id: i,
      x1: Math.max(5, Math.min(95, x1)),
      y1: Math.max(5, Math.min(95, y1)),
      x2: Math.max(5, Math.min(95, x2)),
      y2: Math.max(5, Math.min(95, y2)),
      delay: i * 0.1,
    });
  }
  
  return lines;
};

export default function AnimatedBlueprint() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Array<{id: number; x1: number; y1: number; x2: number; y2: number; delay: number}>>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Generate lines only on client side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    setLines(generateFixedLines());
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity, scale }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated blueprint lines */}
        {isMounted && lines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              pathLength: { duration: 2, delay: line.delay, ease: 'easeInOut' },
              opacity: { duration: 0.5, delay: line.delay },
            }}
            filter="url(#glow)"
          />
        ))}

        {/* Pulsing connection nodes */}
        {Array.from({ length: 8 }, (_, i) => {
          const x = 10 + (i % 4) * 30;
          const y = 20 + Math.floor(i / 4) * 40;
          return (
            <motion.circle
              key={`node-${i}`}
              cx={`${x}%`}
              cy={`${y}%`}
              r="8"
              fill="#60a5fa"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0.95, 1],
                opacity: [0, 0.8, 0.6, 0.8],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              filter="url(#glow)"
            />
          );
        })}
      </motion.svg>

      {/* Animated light pulses traveling along paths */}
      {isMounted && lines.slice(0, 5).map((line, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            left: `${line.x1}%`,
            top: `${line.y1}%`,
          }}
          animate={{
            x: `${(line.x2 - line.x1) * 10}px`,
            y: `${(line.y2 - line.y1) * 10}px`,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
