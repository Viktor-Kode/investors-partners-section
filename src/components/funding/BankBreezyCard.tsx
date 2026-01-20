"use client";

import { motion } from "framer-motion";
import { Shield, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FundingPlatform } from "@/lib/fundingPlatforms";

interface BankBreezyCardProps {
  platform: FundingPlatform;
}

export default function BankBreezyCard({ platform }: BankBreezyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-amber-500 overflow-hidden group focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
    >
      {/* Guarantee Badge */}
      {platform.guarantee && (
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="absolute top-4 right-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg z-10 guarantee-badge-pulse"
        >
          <Star className="w-4 h-4 fill-current" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            {platform.guarantee.text}*
          </span>
        </motion.div>
      )}

      {/* Logo */}
      <div className="mb-6 flex items-center justify-center h-16">
        <Image
          src="/images/bankbreezy.jpeg"
          alt="BankBreezy Logo"
          width={200}
          height={64}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      {/* Tagline */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
        {platform.tagline}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {platform.description}
      </p>

      {/* Guarantee Highlight Box */}
      {platform.guarantee && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-6 group-hover:bg-blue-100 transition-colors"
        >
          <div className="flex items-start gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Get {platform.guarantee.amount} {platform.guarantee.terms}!
              </p>
              <p className="text-xs text-gray-600 italic">
                *Terms apply
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Primary CTA */}
      <motion.a
        href={platform.links.primary}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <span>Get My Best Offer</span>
        <ArrowRight className="w-5 h-5" />
      </motion.a>
    </motion.div>
  );
}
