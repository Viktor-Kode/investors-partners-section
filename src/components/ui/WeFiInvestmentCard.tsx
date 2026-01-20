'use client';

import { motion } from 'framer-motion';
import { Play, Star, Info, Check, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import VideoModal from './VideoModal';
import InvestmentTimeline from './InvestmentTimeline';
import type { InvestmentPartner } from '@/lib/constants';

interface WeFiInvestmentCardProps {
  partner: InvestmentPartner;
}

export default function WeFiInvestmentCard({ partner }: WeFiInvestmentCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-white shadow-2xl"
        style={{
          border: '3px solid transparent',
          backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #f59e0b, #d97706, #fbbf24)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.8,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8, scale: 1.01 }}
      >
        {/* Premium Investment Badge */}
        <motion.div
          className="absolute top-4 right-4 z-20"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-5 py-2.5 shadow-lg">
            <Star className="w-4 h-4 text-white fill-white" />
            <span className="text-xs font-bold text-white uppercase tracking-wide">
              Exclusive Investment Opportunity
            </span>
          </div>
        </motion.div>

        {/* Gold Border Glow Effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f59e0b]/20 via-[#d97706]/20 to-[#f59e0b]/20 blur-xl -z-10"
          />
        )}

        <div className="p-6 lg:p-8">
          {/* Logo Section with Glow */}
          <div className="mb-6 flex items-center justify-center">
            <motion.div
              className="h-20 lg:h-24 flex items-center"
              animate={isHovered ? {
                filter: [
                  'drop-shadow(0 0 10px rgba(245, 158, 11, 0.5))',
                  'drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))',
                  'drop-shadow(0 0 10px rgba(245, 158, 11, 0.5))',
                ],
              } : {}}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/images/wefi.jpeg"
                alt="WeFi Logo"
                width={200}
                height={60}
                className="h-full w-auto object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Investment Opportunity Tagline */}
          {partner.tagline && (
            <div className="mb-6 text-center">
              <h4 className="text-xl lg:text-2xl font-bold text-[#0a2540] mb-2">
                {partner.tagline}
              </h4>
            </div>
          )}

          {/* Critical Information Box */}
          <div className="mb-6 p-5 rounded-xl border-2 border-[#f59e0b]/50 bg-gradient-to-br from-[#f59e0b]/10 to-[#d97706]/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-sm text-[#fbbf24] mb-1 font-semibold">
                  {partner.priceLabel}
                </div>
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-[#0a2540]"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {partner.currentPrice}
                </motion.div>
              </div>
              <div className="text-center">
                <div className="text-sm text-[#fbbf24] mb-1 font-semibold">
                  {partner.projectionLabel}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#10b981] flex items-center justify-center gap-2">
                  {partner.projection}
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-[#fbbf24] italic">
                Timeline: Now is the optimal entry point
              </p>
            </div>
          </div>

          {/* Investment Highlights */}
          <div className="mb-6">
            <h5 className="text-lg font-semibold text-[#0a2540] mb-4">Investment Highlights</h5>
            <ul className="space-y-3">
              {partner.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-[#1f2937]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm lg:text-base leading-relaxed">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Important Disclaimer */}
          <div className="mb-6 p-4 rounded-lg border border-amber-500/50 bg-amber-500/10">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-amber-200 leading-relaxed">
                  {partner.disclaimer}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="mb-6">
            <InvestmentTimeline
              currentPrice={partner.currentPrice}
              projection={partner.projection}
            />
          </div>

          {/* Video Thumbnail */}
          {partner.hasVideo && partner.videoUrl && (
            <div className="mb-6">
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsVideoOpen(true);
                  }
                }}
                className="group/video relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#f59e0b] to-[#d97706] focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Watch WeFi Investment Story - Opens video modal"
                role="button"
                tabIndex={0}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    animate={{
                      scale: isHovered ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <span className="text-sm font-medium text-white opacity-0 group-hover/video:opacity-100 transition-opacity">
                      The WeFi Investment Story
                    </span>
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/30 transition-colors" />
              </motion.button>
            </div>
          )}

          {/* CTA Button */}
          {partner.hasVideo && partner.videoUrl && (
            <motion.button
              onClick={() => setIsVideoOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#f59e0b]/50 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5" />
              <span>Watch Investment Story</span>
            </motion.button>
          )}
        </div>

        {/* Radial Gradient Background Effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.08) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Video Modal */}
      {partner.hasVideo && partner.videoUrl && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc={partner.videoUrl}
          title={`${partner.name} Investment Story`}
        />
      )}
    </>
  );
}
