'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Star, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import VideoModal from './VideoModal';
import { siteConfig } from '@/lib/constants';
import type { Partner } from '@/lib/constants';

interface PriorityPartnerCardProps {
  partner: Partner;
}

export default function PriorityPartnerCard({ partner }: PriorityPartnerCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="group relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden bg-white bg-gradient-to-br from-white via-blue-50/30 to-white shadow-xl"
        style={{
          border: '3px solid transparent',
          backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #f59e0b, #fbbf24)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.6,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8, scale: 1.01 }}
      >
        {/* Priority Badge */}
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
          role="status"
          aria-label="Top Priority Partner"
        >
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] px-4 py-2 shadow-lg">
            <Star className="w-4 h-4 text-white fill-white" aria-hidden="true" />
            <span className="text-xs font-semibold text-white uppercase tracking-wide">
              Priority Capital Partner
            </span>
          </div>
        </motion.div>

        {/* Gold Border Glow Effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f59e0b]/20 via-[#fbbf24]/20 to-[#f59e0b]/20 blur-xl -z-10"
          />
        )}

        <div className="p-6 lg:p-8">
          {/* Logo Section */}
          <div className="mb-6 flex items-center justify-between">
            {partner.id === 'wefi' ? (
              <div className="relative h-16 w-48 lg:h-20 lg:w-56">
                <Image
                  src="/images/wefi.jpeg"
                  alt="WeFi logo"
                  fill
                  className="object-contain object-left"
                  sizes="224px"
                  priority
                />
              </div>
            ) : (
              <div className="relative h-16 w-48 lg:h-20 lg:w-56">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain object-left"
                  sizes="224px"
                  priority
                />
              </div>
            )}
          </div>

          {/* Priority Label */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#f59e0b] bg-amber-50 rounded-full">
              Priority Capital Partner
            </span>
          </div>

          {/* Description */}
          <p className="mb-6 text-base leading-relaxed text-[#1f2937] lg:text-lg">
            {partner.description}
          </p>

          {/* Video Thumbnail */}
          {partner.hasVideo && (
            <div className="mb-6">
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsVideoOpen(true);
                  }
                }}
                className="group/video relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#1e40af] to-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Explore Priority Funding - Opens video modal"
                role="button"
                tabIndex={0}
              >
                {/* Video Placeholder/Thumbnail */}
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
                      Explore Priority Funding
                    </span>
                  </motion.div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/30 transition-colors" />

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-2 border-white/20 rounded-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full" />
              </motion.button>

              <p className="mt-3 text-sm text-center text-[#6b7280]">
                Click to learn about our partnership
              </p>
            </div>
          )}

          {/* CTA Link */}
          {partner.website && (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e40af] transition-colors hover:text-[#3b82f6]"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Radial Gradient Background Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
          }}
        />
      </motion.div>

      {/* Video Modal */}
      {partner.hasVideo && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc={siteConfig.videoUrl}
          title={`${partner.name} Partnership`}
        />
      )}
    </>
  );
}
