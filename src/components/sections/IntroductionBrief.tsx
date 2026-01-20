'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { siteConfig } from '@/lib/constants';
import ImagePanel from './ImagePanel';
import CorePrinciples from './CorePrinciples';
import ConnectionVisualization from './ConnectionVisualization';

export default function IntroductionBrief() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  // Position mappings for connection visualization
  const principlePositions = {
    strategic: { x: 25, y: 50 },
    transparent: { x: 75, y: 50 },
    growth: { x: 25, y: 75 },
    longterm: { x: 75, y: 75 },
  };

  const imagePosition = { x: 50, y: 50 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Panel */}
          <motion.div variants={itemVariants} className="relative z-20">
            {/* Section Heading with Gradient */}
            <motion.h2
              className="mb-6 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0a2540] via-[#1e40af] to-[#3b82f6] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Partnership Philosophy
            </motion.h2>

            {/* Philosophy Text with Decorative Quotes */}
            <div className="relative mb-8">
              {/* Large Decorative Quote */}
              <div className="absolute -left-4 -top-4 text-6xl font-serif text-blue-200/30 leading-none">
                "
              </div>
              <motion.p
                className="text-lg md:text-xl leading-relaxed text-[#1f2937] relative z-10 pl-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  staggerChildren: 0.1,
                }}
              >
                {siteConfig.partnershipPhilosophy.split('. ').map((sentence, index, array) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-block"
                  >
                    {sentence}
                    {index < array.length - 1 ? '. ' : ''}
                  </motion.span>
                ))}
              </motion.p>
              <div className="absolute -right-4 -bottom-4 text-6xl font-serif text-blue-200/30 leading-none">
                "
              </div>
            </div>

            {/* Core Principles Grid */}
            <CorePrinciples onPrincipleHover={setHoveredPrinciple} />
          </motion.div>

          {/* Image Panel */}
          <motion.div
            variants={imageVariants}
            className="relative lg:sticky lg:top-24"
          >
            <ImagePanel />
            
            {/* Connection Visualization Overlay */}
            <ConnectionVisualization
              hoveredPrinciple={hoveredPrinciple}
              principlePositions={principlePositions}
              imagePosition={imagePosition}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Progress Indicator Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] as const }}
        style={{ originX: 0 }}
      />
    </section>
  );
}
