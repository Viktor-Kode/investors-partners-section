'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ExternalLink } from 'lucide-react';
import type { Partner } from '@/lib/constants';

interface DreamsBusinessCardProps {
  partner: Partner;
  index: number;
}

export default function DreamsBusinessCard({ partner, index }: DreamsBusinessCardProps) {
  const handleAffiliateClick = () => {
    if (partner.affiliateLink) {
      window.open(partner.affiliateLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-white border-2 border-teal-200 shadow-lg transition-all hover:border-teal-400 hover:shadow-xl"
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
          <div className="relative h-12 w-40">
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain object-left"
                sizes="160px"
              />
            ) : (
              <h3 className="text-2xl font-bold text-[#0a2540]">
                {partner.name}
              </h3>
            )}
          </div>
        </div>

        {/* Tagline */}
        {partner.tagline && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-[#0a2540] mb-2">
              {partner.tagline}
            </h3>
          </div>
        )}

        {/* Specialization Highlight */}
        {partner.services && partner.services.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-[#0a2540] mb-3">
              Specializing in flexible funding solutions including:
            </p>
            <ul className="space-y-2">
              {partner.services.map((service, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-[#6b7280]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <TrendingUp className="w-4 h-4 flex-shrink-0 text-teal-500" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Network Advantage */}
        <div className="mb-4 p-3 bg-teal-50 border border-teal-200 rounded-lg">
          <p className="text-xs text-[#065f46] leading-relaxed">
            Access to our curated network of alternative lenders with competitive rates and flexible terms.
          </p>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">
          {partner.description}
        </p>

        {/* Affiliate Link CTA */}
        {partner.affiliateLink && (
          <motion.button
            onClick={handleAffiliateClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleAffiliateClick();
              }
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Join partner network (opens in new tab)"
            role="button"
            tabIndex={0}
          >
            <span>Join Partner Network</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      {/* Hover Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        initial={false}
      />
    </motion.div>
  );
}
