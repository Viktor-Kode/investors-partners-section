"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import BankBreezyCard from "@/components/funding/BankBreezyCard";
import AdvanceFundNetworkCard from "@/components/funding/AdvanceFundNetworkCard";
import { bankBreezy, advanceFundNetwork } from "@/lib/fundingPlatforms";

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
              Alternative & Revenue-Based Funding
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* BankBreezy Card */}
          <BankBreezyCard platform={bankBreezy} />

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
              Compare Your Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">BankBreezy</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Best Offer Guarantee</li>
                  <li>• Single Application</li>
                  <li>• $500 Protection</li>
                </ul>
              </div>
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
