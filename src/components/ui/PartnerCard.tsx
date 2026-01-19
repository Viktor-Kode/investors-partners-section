'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Check, Star, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import type { Partner } from '@/lib/constants';
import VideoModal from './VideoModal';
import { siteConfig } from '@/lib/constants';

interface PartnerCardProps {
  partner: Partner;
  index: number;
  isPriority?: boolean;
}

export default function PartnerCard({ partner, index, isPriority = false }: PartnerCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
          isPriority
            ? 'border-2 border-[#f59e0b] bg-gradient-to-br from-white to-amber-50/30'
            : 'border border-blue-100'
        }`}
      >
        {/* Priority Badge for WeFi */}
        {isPriority && (
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3 -right-3 z-10"
          >
            <div className="flex items-center gap-1 rounded-full bg-[#f59e0b] px-3 py-1 text-xs font-semibold text-white shadow-lg">
              <Star className="h-3 w-3 fill-white" />
              <span>Top Priority</span>
            </div>
          </motion.div>
        )}

        {/* Logo Section */}
        <div className="mb-4 flex items-start justify-between">
          <div className="relative h-16 w-40">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain object-left"
              sizes="160px"
            />
          </div>
        </div>

        {/* Tagline with quotation marks */}
        {partner.tagline && (
          <div className="mb-3 flex items-center gap-2 text-sm text-[#1e40af]">
            <span className="text-lg">"</span>
            <span className="font-medium italic">{partner.tagline}</span>
            <span className="text-lg">"</span>
          </div>
        )}

        {/* Location */}
        {partner.location && (
          <div className="mb-3 flex items-center gap-2 text-sm text-[#1f2937]">
            <MapPin className="h-4 w-4 text-[#3b82f6]" />
            <span>{partner.location}</span>
          </div>
        )}

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-[#1f2937]">
          {partner.description}
        </p>

        {/* Services List */}
        {partner.services && partner.services.length > 0 && (
          <div className="mb-4 space-y-2">
            {partner.services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[#1f2937]">
                <Check className="h-4 w-4 flex-shrink-0 text-[#3b82f6]" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        )}

        {/* Video Thumbnail for WeFi */}
        {partner.hasVideo && (
          <div className="mb-4">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#1e40af] to-[#3b82f6] aspect-video"
              aria-label="Watch WeFi partnership video"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-white transition-transform group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
              <div className="absolute bottom-2 left-2 text-xs font-medium text-white">
                Watch Partnership Video
              </div>
            </button>
          </div>
        )}

        {/* Website Link */}
        {partner.website && (
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#1e40af]"
          >
            Visit Website
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

        {/* Hover gradient overlay */}
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            isPriority
              ? 'from-amber-50/50 to-amber-100/30'
              : 'from-blue-50/50 to-blue-100/30'
          }`}
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
