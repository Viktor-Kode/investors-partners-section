'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ConnectionVisualizationProps {
  hoveredPrinciple: string | null;
  principlePositions: { [key: string]: { x: number; y: number } };
  imagePosition: { x: number; y: number };
}

export default function ConnectionVisualization({
  hoveredPrinciple,
  principlePositions,
  imagePosition,
}: ConnectionVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use useScroll with ref - the ref container is always rendered so it can attach
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 0]
  );

  const principlePos = hoveredPrinciple && principlePositions[hoveredPrinciple] 
    ? principlePositions[hoveredPrinciple] 
    : null;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
      {principlePos && (
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.line
          x1={`${principlePos.x}%`}
          y1={`${principlePos.y}%`}
          x2={`${imagePosition.x}%`}
          y2={`${imagePosition.y}%`}
          stroke="url(#connectionGradient)"
          strokeWidth="3"
          strokeDasharray="10,5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          exit={{ pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ opacity }}
        />

        {/* Animated pulse traveling along line */}
        <motion.circle
          r="4"
          fill="#60a5fa"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{
            cx: [`${principlePos.x}%`, `${imagePosition.x}%`],
            cy: [`${principlePos.y}%`, `${imagePosition.y}%`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ opacity }}
        />
      </svg>
      )}
    </div>
  );
}
