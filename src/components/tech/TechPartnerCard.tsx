'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  BookOpen
} from 'lucide-react';
import type { Partner } from '@/lib/constants';

interface TechPartnerCardProps {
  partner: Partner;
}

export default function TechPartnerCard({ partner }: TechPartnerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const techBadges = [
    'Fractional Real Estate',
    'Blockchain',
    'NFTs',
    'Crowdfunding',
    'Digital Infrastructure',
  ];

  const highlights = [
    { icon: TrendingUp, text: 'Global expansion' },
    { icon: Users, text: 'Community growth' },
    { icon: BookOpen, text: 'Continual learning' },
  ];

  return (
    <motion.div
      className="relative max-w-4xl mx-auto"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Holographic Edge Effect */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl"
        style={{
          backgroundImage: isHovered
            ? 'linear-gradient(45deg, #00d4aa, #3b82f6, #00d4aa, #3b82f6)'
            : 'none',
          backgroundSize: '400% 400%',
          backgroundColor: isHovered ? 'transparent' : 'transparent',
          filter: 'blur(8px)',
        }}
        animate={
          isHovered
            ? {
                opacity: 1,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 3,
          repeat: isHovered ? Infinity : 0,
          ease: 'linear',
        }}
      />

      <div
        className="relative rounded-2xl bg-white overflow-hidden shadow-2xl"
        style={{
          border: '2px solid transparent',
          backgroundImage: isHovered
            ? 'linear-gradient(white, white), linear-gradient(135deg, #00d4aa, #3b82f6)'
            : 'linear-gradient(white, white), linear-gradient(135deg, #00d4aa40, #3b82f640)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        {/* Tech Accent Bar */}
        <div className="relative h-1 bg-gradient-to-r from-[#00d4aa] via-[#3b82f6] to-[#00d4aa] overflow-hidden">
          <motion.div
            className="absolute inset-0 flex gap-1 items-center px-2"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-full opacity-60"
              />
            ))}
          </motion.div>
        </div>

        <div className="p-6 md:p-8">
          {/* Logo Section */}
          <div className="mb-6 flex flex-col items-center">
            <motion.div
              className="relative h-20 w-48 md:h-24 md:w-56 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
                sizes="224px"
                priority
              />
              {/* Glow Effect */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    filter: 'blur(20px)',
                    background: 'radial-gradient(circle, rgba(0, 212, 170, 0.4) 0%, transparent 70%)',
                  }}
                />
              )}
            </motion.div>

            {/* Partner Name */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-2">
              {partner.name}
            </h3>

            {/* Category Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#00d4aa] bg-teal-50 rounded-full mb-4">
              Strategic / Investment Technology Partner
            </span>

            {/* Tagline */}
            {partner.tagline && (
              <p className="text-lg md:text-xl text-[#1f2937] italic text-center mb-4">
                &ldquo;{partner.tagline}&rdquo;
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-[#1f2937] mb-8 text-center">
            {partner.description}
          </p>

          {/* Technology Integration Badges */}
          {(partner.features && partner.features.length > 0) || techBadges.length > 0 ? (
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-[#0a2540] uppercase tracking-wider mb-4 text-center">
                Technology Integration
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {(partner.features || techBadges).map((badge, index) => (
                  <motion.div
                    key={badge}
                    className="group relative"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-[#00d4aa]/10 to-[#3b82f6]/10 border border-[#00d4aa]/30 rounded-lg">
                      <span className="text-sm font-semibold text-[#0a2540] uppercase tracking-wide">
                        {badge}
                      </span>
                    </div>
                    {/* Tooltip on hover */}
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#0a2540] text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {badge} Technology
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a2540]" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Future-Focused Highlights */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[#0a2540] uppercase tracking-wider mb-4 text-center">
              Future-Focused Highlights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-[#00d4aa]/20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: '#00d4aa' }}
                >
                  <highlight.icon className="w-6 h-6 text-[#00d4aa] mb-2" />
                  <span className="text-sm font-medium text-[#0a2540] text-center">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#00d4aa] text-[#00d4aa] font-semibold rounded-lg transition-all hover:bg-[#00d4aa] hover:text-white hover:shadow-lg hover:shadow-[#00d4aa]/50 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:ring-offset-2"
              >
                Explore Platform
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {partner.affiliateLink && (
              <a
                href={partner.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00d4aa] to-[#3b82f6] text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#00d4aa]/50 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:ring-offset-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Glow Pulse Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          animate={{
            boxShadow: [
              '0 0 0px rgba(0, 212, 170, 0)',
              '0 0 30px rgba(0, 212, 170, 0.3)',
              '0 0 0px rgba(0, 212, 170, 0)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Data Streams connecting to floating icons */}
      {isHovered && (
        <svg className="absolute inset-0 pointer-events-none overflow-visible">
          <defs>
            <linearGradient id="dataStreamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {[0, 1, 2].map((i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${20 + i * 30}%`}
              y2={`${10 + i * 20}%`}
              stroke="url(#dataStreamGradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
              transition={{
                pathLength: { duration: 1, delay: i * 0.2 },
                opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          ))}
        </svg>
      )}
    </motion.div>
  );
}
