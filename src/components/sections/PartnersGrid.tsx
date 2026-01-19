'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { lendingPartners } from '@/lib/constants';
import LMXSolutionCard from '@/components/ui/LMXSolutionCard';
import DreamsBusinessCard from '@/components/ui/DreamsBusinessCard';

export default function PartnersGrid() {
  const lmxPartner = lendingPartners.find((p) => p.id === 'lmx');
  const dreamsPartner = lendingPartners.find((p) => p.id === 'dreams');

  return (
    <div className="bg-white">
      {/* Strategic Lending Solutions Section */}
      <section className="py-20" id="lending">
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
              <Shield className="h-8 w-8 text-[#1e40af]" />
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-2">
                Strategic Lending Solutions
              </h2>
              <p className="text-lg text-[#1f2937]">
                Comprehensive financing through our exclusive banking network
              </p>
            </div>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* LMX Solution Card */}
            {lmxPartner && (
              <LMXSolutionCard partner={lmxPartner} index={0} />
            )}

            {/* Dreams Business Resources Card */}
            {dreamsPartner && (
              <DreamsBusinessCard partner={dreamsPartner} index={1} />
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
