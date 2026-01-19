'use client';

import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { technologyPartners } from '@/lib/constants';
import DigitalCanvas from '@/components/tech/DigitalCanvas';
import TechPartnerCard from '@/components/tech/TechPartnerCard';

export default function StrategicPartnersSection() {
  const vrda1Partner = technologyPartners.find((p) => p.id === 'vrda1');

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Digital Canvas Background */}
      <DigitalCanvas />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Glitch Effect */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                filter: [
                  'drop-shadow(0 0 8px #00d4aa)',
                  'drop-shadow(0 0 16px #00d4aa)',
                  'drop-shadow(0 0 8px #00d4aa)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Cpu className="h-10 w-10 text-[#00d4aa]" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{
                x: [0, -2, 2, -2, 2, 0],
              }}
              transition={{
                x: { duration: 0.3, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
                opacity: { duration: 0.5 },
              }}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(0, 212, 170, 0.3)',
              }}
            >
              Strategic & Investment Technology Partners
            </motion.h2>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-white mt-4"
            style={{ color: '#ffffff' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Long-term growth & technology-driven investment partners
          </motion.p>
        </motion.div>

        {/* VRDa1 Featured Card */}
        {vrda1Partner && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              duration: 0.8,
            }}
          >
            <TechPartnerCard partner={vrda1Partner} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
