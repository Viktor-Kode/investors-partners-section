'use client';

import { motion } from 'framer-motion';
import { Target, Shield, TrendingUp, Infinity as InfinityIcon } from 'lucide-react';
import { useState } from 'react';

interface Principle {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const principles: Principle[] = [
  {
    id: 'strategic',
    icon: Target,
    title: 'Strategic Alignment',
    description: 'Shared vision and complementary capabilities',
    color: 'blue',
  },
  {
    id: 'transparent',
    icon: Shield,
    title: 'Transparent Collaboration',
    description: 'Open communication and trust-based relationships',
    color: 'blue',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Mutual Growth',
    description: 'Creating value for all stakeholders',
    color: 'blue',
  },
  {
    id: 'longterm',
    icon: InfinityIcon,
    title: 'Long-Term Value',
    description: 'Sustainable partnerships built to last',
    color: 'blue',
  },
];

interface CorePrinciplesProps {
  onPrincipleHover?: (id: string | null) => void;
}

export default function CorePrinciples({ onPrincipleHover }: CorePrinciplesProps) {
  const [expandedPrinciple, setExpandedPrinciple] = useState<string | null>(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  return (
    <div className="mt-8">
      <h3 className="mb-6 text-xl font-semibold text-[#0a2540]">Core Principles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          const isHovered = hoveredPrinciple === principle.id;
          const isExpanded = expandedPrinciple === principle.id;

          return (
            <motion.div
              key={principle.id}
              className="group relative p-4 rounded-lg bg-white border-2 border-blue-100 cursor-pointer transition-all hover:border-blue-400 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => {
                setHoveredPrinciple(principle.id);
                onPrincipleHover?.(principle.id);
              }}
              onHoverEnd={() => {
                setHoveredPrinciple(null);
                onPrincipleHover?.(null);
              }}
              onClick={() => setExpandedPrinciple(isExpanded ? null : principle.id)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Connection Line Indicator */}
              {isHovered && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 origin-left"
                />
              )}

              {/* Icon Container */}
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
                  animate={{
                    scale: isHovered ? [1, 1.1, 1] : 1,
                    rotate: isHovered ? [0, 5, -5, 0] : 0,
                  }}
                  transition={
                    isHovered
                      ? {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'easeInOut',
                        }
                      : {
                          duration: 2,
                          repeat: 0,
                          ease: 'easeInOut',
                        }
                  }
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <div className="flex-1">
                  <h4 className="text-base font-semibold text-[#0a2540] mb-1">
                    {principle.title}
                  </h4>
                  <motion.p
                    className="text-sm text-[#1f2937] leading-relaxed"
                    animate={{
                      height: isExpanded ? 'auto' : 'auto',
                    }}
                  >
                    {principle.description}
                  </motion.p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 rounded-lg bg-blue-50/50 -z-10 blur-sm"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
