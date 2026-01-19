'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0a2540] via-[#1e40af] to-[#3b82f6]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl" style={{ color: '#ffffff' }}>
            Explore Partnership Opportunities
          </h2>
          <p className="mb-4 text-xl text-white" style={{ color: '#ffffff' }}>
            Join our network of strategic partners and investors driving innovation forward.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-lg"
          >
            <a
              href="mailto:support@lmxsolutions.info"
              className="inline-flex items-center gap-2 font-semibold text-white underline decoration-2 underline-offset-4 transition-colors hover:text-blue-200 hover:decoration-blue-200"
            >
              <Mail className="h-5 w-5" />
              support@lmxsolutions.info
            </a>
            <span className="hidden sm:inline text-white/50">|</span>
            <a
              href="tel:+18004217558"
              className="inline-flex items-center gap-2 font-semibold text-white underline decoration-2 underline-offset-4 transition-colors hover:text-blue-200 hover:decoration-blue-200"
            >
              <Phone className="h-5 w-5" />
              +1 800 421 7558
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
