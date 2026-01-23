"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import AdvanceFundNetworkCard from "@/components/funding/AdvanceFundNetworkCard";
import { advanceFundNetwork } from "@/lib/fundingPlatforms";

export default function SmartFundingSolutions() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Partner-Powered Funding Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart Funding Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Smart funding solutions for modern businesses
          </p>
        </motion.div>

        {/* Funding Cards Grid */}
        <div className="flex justify-center max-w-4xl mx-auto">
          {/* Advance Fund Network Card */}
          <AdvanceFundNetworkCard platform={advanceFundNetwork} />
        </div>

        {/* Comparison Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Feature Highlights
            </h3>
            <div className="flex justify-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Advance Fund Network</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Partner Network</li>
                  <li>• Dual Access Points</li>
                  <li>• Integrated Platform</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
