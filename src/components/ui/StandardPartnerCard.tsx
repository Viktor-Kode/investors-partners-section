'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Check, ExternalLink, Quote } from 'lucide-react';
import type { Partner } from '@/lib/constants';

interface StandardPartnerCardProps {
  partner: Partner;
  index: number;
}

export default function StandardPartnerCard({ partner, index }: StandardPartnerCardProps) {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-white border-2 border-blue-100 shadow-sm transition-all hover:border-blue-400 hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1 + 0.3,
        duration: 0.5,
        ease: 'easeOut',
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6">
        {/* Logo */}
        <div className="mb-4">
          <div className="relative h-12 w-32">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain object-left"
              sizes="128px"
            />
          </div>
        </div>

        {/* Partner Name */}
        <h3 className="mb-3 text-xl font-bold text-[#0a2540]">
          {partner.name}
        </h3>

        {/* Tagline with Quote Marks */}
        {partner.tagline && (
          <div className="mb-3 flex items-start gap-2">
            <Quote className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
            <p className="text-sm italic text-[#4b5563] font-medium">
              {partner.tagline}
            </p>
          </div>
        )}

        {/* Location */}
        {partner.location && (
          <div className="mb-3 flex items-center gap-2 text-sm text-[#6b7280]">
            <MapPin className="w-4 h-4 text-[#3b82f6]" />
            <span>{partner.location}</span>
          </div>
        )}

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">
          {partner.description}
        </p>

        {/* Services List */}
        {partner.services && partner.services.length > 0 && (
          <div className="mb-4 space-y-2">
            {partner.services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[#6b7280]">
                <Check className="w-4 h-4 flex-shrink-0 text-[#3b82f6]" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        )}

        {/* Learn More CTA */}
        {partner.website && (
          <motion.a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e40af] transition-colors hover:text-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded group/link"
            whileHover={{ x: 4 }}
            aria-label={`Visit ${partner.name} website (opens in new tab)`}
          >
            <span>Learn More</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.span>
          </motion.a>
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
