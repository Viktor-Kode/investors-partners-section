'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, TrendingUp, Target } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Trusted Partnerships',
    description: 'We build relationships based on trust, transparency, and shared values for long-term success.',
  },
  {
    icon: Handshake,
    title: 'Mutual Growth',
    description: 'Our partnerships are designed to create value for all stakeholders, driving collective growth.',
  },
  {
    icon: TrendingUp,
    title: 'Strategic Alignment',
    description: 'We partner with organizations that share our vision and commitment to innovation.',
  },
  {
    icon: Target,
    title: 'Focused Excellence',
    description: 'Every partnership is carefully curated to ensure alignment with our strategic objectives.',
  },
];

export default function PartnershipBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold text-[#0a2540]">
            Why Partner With ScoreUp RiseUp
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#1f2937]">
            We believe in creating strategic alliances that drive innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 border border-blue-100"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#1e40af] p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#0a2540]">
                  {benefit.title}
                </h3>
                <p className="text-[#1f2937] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
