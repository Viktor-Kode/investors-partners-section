'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, Handshake } from 'lucide-react';

const priorities = [
  {
    icon: TrendingUp,
    title: 'Growth Focus',
    description: 'WeFi prioritizes partnerships that drive measurable growth and market expansion.',
  },
  {
    icon: Target,
    title: 'Strategic Alignment',
    description: 'Our partners share our vision and commitment to innovation in financial technology.',
  },
  {
    icon: Handshake,
    title: 'Long-term Partnership',
    description: 'We build lasting relationships that create value for all stakeholders involved.',
  },
];

export default function WeFiPriority() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            WeFi Partnership Priorities
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Our approach to building strategic partnerships that drive success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {priorities.map((priority, index) => {
            const Icon = priority.icon;
            return (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {priority.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {priority.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
