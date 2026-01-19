'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { 
  Network, 
  Cloud, 
  Brain, 
  Boxes, 
  Zap,
  Database,
  Globe,
  CircuitBoard
} from 'lucide-react';

// Seeded random for consistent generation
const seededRandom = (seed: number) => {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

export default function DigitalCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [circuitPaths, setCircuitPaths] = useState<any[]>([]);
  const [nodes, setNodes] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate circuit paths
    const seed = 100;
    const paths = Array.from({ length: 15 }, (_, i) => {
      const x1 = seededRandom(seed + i * 5) * 100;
      const y1 = seededRandom(seed + i * 5 + 1) * 100;
      const x2 = seededRandom(seed + i * 5 + 2) * 100;
      const y2 = seededRandom(seed + i * 5 + 3) * 100;
      return {
        id: `path-${i}`,
        x1,
        y1,
        x2,
        y2,
        delay: i * 0.1,
      };
    });
    setCircuitPaths(paths);

    // Generate connection nodes
    const nodeSeed = 200;
    const newNodes = Array.from({ length: 12 }, (_, i) => {
      const x = seededRandom(nodeSeed + i * 3) * 100;
      const y = seededRandom(nodeSeed + i * 3 + 1) * 100;
      return {
        id: `node-${i}`,
        x,
        y,
        delay: i * 0.15,
      };
    });
    setNodes(newNodes);
  }, []);

  if (!isMounted) {
    return null;
  }

  const techIcons = [
    { Icon: Network, x: 10, y: 15, delay: 0.2 },
    { Icon: Cloud, x: 85, y: 20, delay: 0.4 },
    { Icon: Brain, x: 15, y: 80, delay: 0.6 },
    { Icon: Boxes, x: 90, y: 75, delay: 0.8 },
    { Icon: Zap, x: 50, y: 10, delay: 1.0 },
    { Icon: Database, x: 5, y: 50, delay: 1.2 },
    { Icon: Globe, x: 95, y: 45, delay: 1.4 },
    { Icon: CircuitBoard, x: 50, y: 90, delay: 1.6 },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circuit Board Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.4" />
          </linearGradient>
          <filter id="circuitGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated circuit lines */}
        {circuitPaths.map((path) => (
          <motion.line
            key={path.id}
            x1={`${path.x1}%`}
            y1={`${path.y1}%`}
            x2={`${path.x2}%`}
            y2={`${path.y2}%`}
            stroke="url(#circuitGradient)"
            strokeWidth="0.15"
            strokeDasharray="0.5,0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              pathLength: { duration: 2, delay: path.delay, ease: 'linear' },
              opacity: { duration: 3, delay: path.delay, repeat: Infinity, ease: 'easeInOut' },
            }}
            filter="url(#circuitGlow)"
          />
        ))}

        {/* Connection nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="0.6"
            fill="#00d4aa"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.9, 1],
              opacity: [0, 0.8, 0.6, 0.8],
            }}
            transition={{
              duration: 2,
              delay: node.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            filter="url(#circuitGlow)"
          />
        ))}

        {/* Animated light pulses along paths */}
        {circuitPaths.slice(0, 5).map((path, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="0.3"
            fill="#00d4aa"
            initial={{ opacity: 0 }}
            animate={{
              cx: [`${path.x1}%`, `${path.x2}%`],
              cy: [`${path.y1}%`, `${path.y2}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: 'linear',
            }}
            filter="url(#circuitGlow)"
          />
        ))}
      </svg>

      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            opacity: { duration: 3, delay, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 4, delay, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 4, delay, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5, delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#00d4aa] opacity-50" />
        </motion.div>
      ))}

      {/* Data Particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const x = seededRandom(300 + i) * 100;
        const y = seededRandom(300 + i + 1) * 100;
        const duration = 4 + seededRandom(400 + i) * 2;
        const delay = seededRandom(500 + i) * 2;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#00d4aa] rounded-full opacity-40"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              x: [
                `${seededRandom(600 + i) * 20 - 10}px`,
                `${seededRandom(700 + i) * 20 - 10}px`,
                `${seededRandom(800 + i) * 20 - 10}px`,
              ],
              y: [
                `${seededRandom(900 + i) * 20 - 10}px`,
                `${seededRandom(1000 + i) * 20 - 10}px`,
                `${seededRandom(1100 + i) * 20 - 10}px`,
              ],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Pulse Waves */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00d4aa]"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 1.5],
          }}
          transition={{
            duration: 4,
            delay: i * 1.3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
