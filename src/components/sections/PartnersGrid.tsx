'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { lendingPartners } from '@/lib/constants';
import PriorityPartnerCard from '@/components/ui/PriorityPartnerCard';
import StandardPartnerCard from '@/components/ui/StandardPartnerCard';

export default function PartnersGrid() {
  const wefiPartner = lendingPartners.find((p) => p.id === 'wefi');
  const otherLendingPartners = lendingPartners.filter((p) => p.id !== 'wefi');

  return (
    <div className="bg-white">
      {/* Lending & Financial Partners Section */}
      <section className="py-20" id="partners">
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
              <Building2 className="h-8 w-8 text-[#1e40af]" />
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-2">
                Lending & Financial Partners
              </h2>
              <p className="text-lg text-[#1f2937]">
                Primary capital access providers
              </p>
            </div>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* WeFi Priority Card - Spans 2 columns on desktop */}
            {wefiPartner && (
              <PriorityPartnerCard partner={wefiPartner} />
            )}

            {/* Standard Partner Cards */}
            {otherLendingPartners.map((partner, index) => (
              <StandardPartnerCard
                key={partner.id}
                partner={partner}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
