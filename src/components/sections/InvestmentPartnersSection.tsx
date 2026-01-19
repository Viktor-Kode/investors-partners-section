'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { investmentPartners } from '@/lib/constants';
import WeFiInvestmentCard from '@/components/ui/WeFiInvestmentCard';

export default function InvestmentPartnersSection() {
  const wefiPartner = investmentPartners.find((p) => p.id === 'wefi');

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-white" id="investment">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-3"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <TrendingUp className="h-8 w-8 text-[#f59e0b]" />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-2">
              Exclusive Investment Opportunities
            </h2>
            <p className="text-lg text-[#1f2937]">
              Access to high-growth investment vehicles
            </p>
          </div>
        </motion.div>

        {/* Investment Partner Card */}
        {wefiPartner && (
          <div className="max-w-5xl mx-auto">
            <WeFiInvestmentCard partner={wefiPartner} />
          </div>
        )}
      </div>
    </section>
  );
}
