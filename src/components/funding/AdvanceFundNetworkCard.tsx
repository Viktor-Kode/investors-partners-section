"use client";

import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";
import Image from "next/image";
import ScheduleButton from "@/components/ui/ScheduleButton";
import { FundingPlatform } from "@/lib/fundingPlatforms";

interface AdvanceFundNetworkCardProps {
  platform: FundingPlatform;
}

export default function AdvanceFundNetworkCard({ platform }: AdvanceFundNetworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-teal-500 overflow-hidden group focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2"
    >
      {/* Network Visualization Background */}
      <div className="absolute bottom-0 right-0 w-2/5 h-2/5 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <pattern id="network-pattern-afn" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-teal-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern-afn)" />
          <line x1="20" y1="20" x2="60" y2="60" stroke="currentColor" strokeWidth="1" className="text-teal-500 network-line" />
          <line x1="60" y1="60" x2="100" y2="20" stroke="currentColor" strokeWidth="1" className="text-teal-500 network-line" />
          <line x1="100" y1="20" x2="140" y2="60" stroke="currentColor" strokeWidth="1" className="text-teal-500 network-line" />
        </svg>
      </div>

      {/* Logo */}
      <div className="mb-6 flex items-center justify-center h-16">
        <Image
          src="/images/afn.jpeg"
          alt="Advance Fund Network Logo"
          width={200}
          height={64}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      {/* Tagline */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
        {platform.tagline}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {platform.description}
      </p>

      {/* Partner Integration Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-teal-50 border-2 border-teal-200 rounded-xl p-5 mb-6 group-hover:bg-teal-100 transition-colors"
      >
        <div className="flex items-start gap-3">
          <Network className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">
              ScoreUp Riseup Partner Integration
            </p>
            <p className="text-xs text-gray-600">
              Streamlined application process
            </p>
          </div>
        </div>
      </motion.div>

      {/* Schedule Button */}
      <div className="mb-3">
        <ScheduleButton
          partnerName={platform.calendlyPrefill?.partnerName || platform.name}
          meetingType={platform.calendlyPrefill?.meetingType}
          className="w-full"
          variant="outline"
        />
      </div>

      {/* Dual Action Buttons */}
      <div className="space-y-3">
        {platform.links.primary && (
          <motion.a
            href={platform.links.primary}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <span>Explore Platform</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        )}
        {platform.links.application && (
          <motion.a
            href={platform.links.application}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        )}
      </div>

      {/* Partner ID Notice */}
      {platform.partnerId && (
        <p className="text-xs text-gray-400 mt-4 text-center">
          Partner ID: {platform.partnerId}
        </p>
      )}
    </motion.div>
  );
}
