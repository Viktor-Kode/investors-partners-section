'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Handshake, Building2, TrendingUp, Shield, DollarSign, Network } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const icons = [
  { Icon: Handshake, label: 'Partnership' },
  { Icon: Building2, label: 'Financial' },
  { Icon: TrendingUp, label: 'Growth' },
  { Icon: Shield, label: 'Trust' },
  { Icon: DollarSign, label: 'Capital' },
  { Icon: Network, label: 'Connection' },
];

interface FloatingIconProps {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  index: number;
  mouseX: any;
  mouseY: any;
}

function FloatingIcon({ Icon, label, index, mouseX, mouseY }: FloatingIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Orbital motion parameters
  const radius = 80 + index * 30;
  const speed = 0.5 + index * 0.1;
  const angle = (index * 60) * (Math.PI / 180);
  
  // Base position
  const baseX = useMotionValue(50);
  const baseY = useMotionValue(50);
  
  // Parallax effect from mouse
  const x = useSpring(baseX, { stiffness: 50, damping: 20 });
  const y = useSpring(baseY, { stiffness: 50, damping: 20 });
  
  // Orbital animation
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() * 0.001 * speed;
      const newX = 50 + Math.cos(time + angle) * radius * 0.01;
      const newY = 50 + Math.sin(time + angle) * radius * 0.01;
      baseX.set(newX);
      baseY.set(newY);
    }, 16);
    
    return () => clearInterval(interval);
  }, [baseX, baseY, speed, angle, radius]);
  
  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.0005;
      const deltaY = (e.clientY - centerY) * 0.0005;
      
      baseX.set(baseX.get() - deltaX);
      baseY.set(baseY.get() - deltaY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [baseX, baseY]);
  
  const [isHovered, setIsHovered] = useState(false);
  
  const leftPercent = useTransform(x, (v) => `${v}%`);
  const topPercent = useTransform(y, (v) => `${v}%`);
  
  return (
    <motion.div
      ref={ref}
      className="absolute"
      style={{
        left: leftPercent,
        top: topPercent,
      }}
      initial={{ x: '-50%', y: '-50%' }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        y: {
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        rotate: {
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileHover={{
        scale: 1.5,
        zIndex: 10,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-blue-400/30 cursor-pointer"
        animate={{
          boxShadow: [
            '0 0 10px rgba(59, 130, 246, 0.3)',
            '0 0 20px rgba(59, 130, 246, 0.6)',
            '0 0 10px rgba(59, 130, 246, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Icon className="w-6 h-6 text-blue-300" />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs bg-blue-900/90 text-white rounded"
          >
            {label}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function FloatingIcons() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          Icon={icon.Icon}
          label={icon.label}
          index={index}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
}
