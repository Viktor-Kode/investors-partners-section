'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ConnectionDot {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export default function ImagePanel() {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const parallaxX = useTransform(springX, (x) => x * 0.02);
  const parallaxY = useTransform(springY, (y) => y * 0.02);

  // Connection dots positioned on image
  const connectionDots: ConnectionDot[] = [
    { id: 1, x: 25, y: 30, delay: 0 },
    { id: 2, x: 75, y: 25, delay: 0.2 },
    { id: 3, x: 50, y: 60, delay: 0.4 },
    { id: 4, x: 20, y: 70, delay: 0.6 },
    { id: 5, x: 80, y: 75, delay: 0.8 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden group"
    >
      {/* Base Image with Duotone Filter */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      >
        <Image
          src="/images/partners/partnership.jpg"
          alt="ScoreUp RiseUp partnership collaboration - Strategic business partnerships driving innovation and growth"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          onError={() => {
            // Fallback handled by parent component
          }}
        />
        
        {/* Duotone Blue Filter Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540]/60 via-[#1e40af]/40 to-[#3b82f6]/50 mix-blend-multiply" />
        
        {/* Blueprint Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Vignette Edge Effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
        }} />
      </motion.div>

      {/* Connection Dots */}
      {connectionDots.map((dot, index) => (
        <motion.div
          key={dot.id}
          className="absolute"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: dot.delay,
            duration: 0.5,
            type: 'spring',
            stiffness: 200,
          }}
          animate={{
            scale: hoveredDot === dot.id ? [1, 1.3, 1] : [0.95, 1.05, 0.95],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          onHoverStart={() => setHoveredDot(dot.id)}
          onHoverEnd={() => setHoveredDot(null)}
        >
          <div className="relative">
            {/* Outer Glow Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400 blur-md"
              animate={{
                opacity: hoveredDot === dot.id ? [0.6, 1, 0.6] : [0.3, 0.5, 0.3],
                scale: hoveredDot === dot.id ? [1, 1.5, 1] : [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Dot */}
            <div className="relative w-4 h-4 rounded-full bg-white border-2 border-blue-400 shadow-lg" />
          </div>
        </motion.div>
      ))}

      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {connectionDots.slice(0, -1).map((dot, index) => {
          const nextDot = connectionDots[index + 1];
          return (
            <motion.line
              key={`line-${dot.id}-${nextDot.id}`}
              x1={`${dot.x}%`}
              y1={`${dot.y}%`}
              x2={`${nextDot.x}%`}
              y2={`${nextDot.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{
                pathLength: hoveredDot === dot.id || hoveredDot === nextDot.id ? 1 : 0.6,
                opacity: hoveredDot === dot.id || hoveredDot === nextDot.id ? 1 : 0.4,
              }}
              viewport={{ once: true }}
              transition={{
                pathLength: { duration: 1, delay: dot.delay + 0.5 },
                opacity: { duration: 0.3 },
              }}
            />
          );
        })}
      </svg>

      {/* Light Trails (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"
          style={{
            x: useTransform(springX, (x) => x * 0.1),
            y: useTransform(springY, (y) => y * 0.1),
            left: '50%',
            top: '50%',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
