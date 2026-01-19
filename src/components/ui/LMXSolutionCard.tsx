'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, Shield } from 'lucide-react';
import { useState } from 'react';
import type { Partner } from '@/lib/constants';

interface LMXSolutionCardProps {
  partner: Partner;
  index: number;
}

export default function LMXSolutionCard({ partner, index }: LMXSolutionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-white border-2 border-blue-200 shadow-lg transition-all hover:border-[#0a2540] hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1 + 0.3,
        duration: 0.5,
        ease: 'easeOut',
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Network Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a2540" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative p-6">
        {/* Logo */}
        <div className="mb-4">
          <div className="relative h-16 w-40 mb-2">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain object-left"
              sizes="160px"
            />
          </div>
          <p className="text-sm font-semibold text-[#1e40af] italic">
            Your Banking Gateway
          </p>
        </div>

        {/* Tagline */}
        {partner.tagline && (
          <div className="mb-4">
            <h3 className="text-xl font-bold text-[#0a2540] mb-2">
              {partner.tagline}
            </h3>
          </div>
        )}

        {/* Key Message Box */}
        {partner.networkAccess && partner.networkAccess.length > 0 && (
          <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-[#0a2540] mb-3">
              Through our LMX Solution network, we provide access to:
            </p>
            <ul className="space-y-2">
              {partner.networkAccess.map((access, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-[#1f2937]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Building2 className="w-4 h-4 flex-shrink-0 text-[#1e40af]" />
                  <span>{access}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Services Offered */}
        {partner.services && partner.services.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-[#0a2540] mb-2 uppercase tracking-wide">
              Services Offered
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {partner.services.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-[#6b7280]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Protection Statement */}
        {partner.protectionStatement && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-[#92400e] leading-relaxed">
                {partner.protectionStatement}
              </p>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <motion.button
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0a2540] to-[#1e40af] text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Apply through our network"
        >
          <span>Apply Through Our Network</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        {/* Network Visualization on Hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Animated connection lines */}
              {[0, 1, 2, 3].map((i) => (
                <motion.line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${20 + i * 20}%`}
                  y2={`${15 + i * 15}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    pathLength: { duration: 1, delay: i * 0.2 },
                    opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
              ))}
              {/* Network nodes */}
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={`node-${i}`}
                  cx={`${20 + i * 20}%`}
                  cy={`${15 + i * 15}%`}
                  r="4"
                  fill="#3b82f6"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    delay: i * 0.2,
                  }}
                />
              ))}
            </svg>
          </motion.div>
        )}
      </div>

      {/* Hover Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        initial={false}
      />
    </motion.div>
  );
}
