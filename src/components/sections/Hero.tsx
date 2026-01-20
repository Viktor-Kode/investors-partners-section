'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import AnimatedBlueprint from '@/components/hero/AnimatedBlueprint';
import FloatingIcons from '@/components/hero/FloatingIcons';
import InteractiveNetwork from '@/components/hero/InteractiveNetwork';
import TypewriterText from '@/components/hero/TypewriterText';
import ScrollIndicator from '@/components/hero/ScrollIndicator';
import VideoModal from '@/components/ui/VideoModal';
import { siteConfig } from '@/lib/constants';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-based transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a2540] via-[#1e40af] to-[#1e3a8a]"
      >
        {/* Animated Blueprint Background */}
        <AnimatedBlueprint />

        {/* Floating Partnership Icons */}
        {!prefersReducedMotion && <FloatingIcons />}

        {/* Content Container */}
        <motion.div
          className="container relative z-10 mx-auto px-4 py-20"
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Headline with Typewriter Effect */}
              <motion.h1
                variants={itemVariants}
                className="mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight"
              >
                {prefersReducedMotion ? (
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                    Investors & Partners
                  </span>
                ) : (
                  <>
                    <TypewriterText
                      text="Investors & "
                      className="text-white"
                      speed={80}
                      delay={0.5}
                    />
                    <TypewriterText
                      text="Partners"
                      className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
                      speed={80}
                      delay={1.2}
                    />
                  </>
                )}
              </motion.h1>

              {/* Subheading with Word Cascade */}
              <motion.p
                variants={itemVariants}
                className="mb-6 text-xl md:text-2xl text-white font-medium"
              >
                {prefersReducedMotion ? (
                  'Building Financial Futures Together'
                ) : (
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1.8,
                        },
                      },
                    }}
                    className="text-white"
                  >
                    {'Building Financial Futures Together'
                      .split(' ')
                      .map((word, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 10, rotateX: -90 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              rotateX: 0,
                              transition: { duration: 0.5 },
                            },
                          }}
                          className="inline-block mr-2 text-white"
                        >
                          {word}
                        </motion.span>
                      ))}
                  </motion.span>
                )}
              </motion.p>

              {/* Description with Sequential Fade */}
              <motion.p
                variants={itemVariants}
                className="mb-8 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-white leading-relaxed"
              >
                {prefersReducedMotion ? (
                  siteConfig.description
                ) : (
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 2.5,
                        },
                      },
                    }}
                    className="text-white"
                  >
                    {siteConfig.description.split('. ').map((sentence, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        className="text-white"
                      >
                        {sentence}
                        {i < siteConfig.description.split('. ').length - 1 ? '. ' : ''}
                      </motion.span>
                    ))}
                  </motion.span>
                )}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#1e40af] px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 30px rgba(59, 130, 246, 0.6)',
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.6, 1] as const,
                    },
                  }}
                >
                  <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span>Watch Partnership Video</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                <motion.a
                  href="#partners"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Partnerships</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Interactive Network Visualization */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:block relative"
            >
              <InteractiveNetwork />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        {!prefersReducedMotion && <ScrollIndicator />}
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={siteConfig.videoUrl}
        title="WeFi Partnership"
      />
    </>
  );
}
