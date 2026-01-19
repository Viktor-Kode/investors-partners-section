'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { lendingPartners } from '@/lib/constants';

interface Node {
  id: string;
  name: string;
  x: number;
  y: number;
  isPartner: boolean;
}

export default function InteractiveNetwork() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Central node (ScoreUp RiseUp)
  const centerNode: Node = {
    id: 'center',
    name: 'ScoreUp RiseUp',
    x: 50,
    y: 50,
    isPartner: false,
  };

  // Partner nodes positioned around center
  const partnerNodes: Node[] = lendingPartners.slice(0, 4).map((partner, index) => {
    const angle = (index * 90) * (Math.PI / 180);
    const radius = 30;
    return {
      id: partner.id,
      name: partner.name,
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
      isPartner: true,
    };
  });

  const allNodes = [centerNode, ...partnerNodes];

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {partnerNodes.map((node) => (
          <motion.line
            key={`line-${node.id}`}
            x1={`${centerNode.x}%`}
            y1={`${centerNode.y}%`}
            x2={`${node.x}%`}
            y2={`${node.y}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: hoveredNode === node.id || selectedNode === node.id ? 1 : 0.6,
              opacity: hoveredNode === node.id || selectedNode === node.id ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}

        {/* Animated pulse traveling along connections */}
        {partnerNodes.map((node) => (
          <motion.circle
            key={`pulse-${node.id}`}
            r="1"
            fill="#60a5fa"
            initial={{ pathLength: 0 }}
            animate={{
              cx: [`${centerNode.x}%`, `${node.x}%`],
              cy: [`${centerNode.y}%`, `${node.y}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: partnerNodes.indexOf(node) * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Interactive nodes */}
      {allNodes.map((node) => {
        const isSelected = selectedNode === node.id;
        const isHovered = hoveredNode === node.id;
        const isCenter = node.id === 'center';

        return (
          <motion.div
            key={node.id}
            className="absolute cursor-pointer"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: isSelected ? 1.3 : isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.2 }}
            onHoverStart={() => setHoveredNode(node.id)}
            onHoverEnd={() => setHoveredNode(null)}
            onClick={() => setSelectedNode(isSelected ? null : node.id)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`relative flex items-center justify-center rounded-full ${
                isCenter
                  ? 'w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700'
                  : 'w-12 h-12 bg-white/20 backdrop-blur-sm border-2 border-blue-400'
              }`}
              animate={{
                boxShadow: isHovered || isSelected
                  ? [
                      '0 0 20px rgba(59, 130, 246, 0.6)',
                      '0 0 30px rgba(59, 130, 246, 0.8)',
                      '0 0 20px rgba(59, 130, 246, 0.6)',
                    ]
                  : '0 0 10px rgba(59, 130, 246, 0.3)',
                scale: [1, 1.05, 1],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              {isCenter ? (
                <span className="text-white font-bold text-xs">SR</span>
              ) : (
                <div className="w-6 h-6 rounded-full bg-blue-400" />
              )}
            </motion.div>

            {/* Node label */}
            {(isHovered || isSelected) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap px-3 py-1.5 text-xs font-medium bg-blue-900/95 text-white rounded-lg shadow-lg"
              >
                {node.name}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
