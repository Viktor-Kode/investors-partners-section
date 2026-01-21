'use client';

import { motion } from 'framer-motion';
import Hero from './Hero';
import IntroductionBrief from './IntroductionBrief';
import InvestmentPartnersSection from './InvestmentPartnersSection';
import PartnersGrid from './PartnersGrid';
import StrategicPartnersSection from './StrategicPartnersSection';
import SmartFundingSolutions from './SmartFundingSolutions';
import PartnershipBenefits from './PartnershipBenefits';
import CTA from './CTA';
import { pageVariants } from '../animations/MotionConfig';

export default function InvestorsPartners() {
    return (
        <motion.div
            id="investors-partners"
            className="investors-section container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >
            <Hero />
            <IntroductionBrief />
            <InvestmentPartnersSection />
            <div id="partners">
                <PartnersGrid />
            </div>
            <StrategicPartnersSection />
            <PartnershipBenefits />
            <SmartFundingSolutions />
            <div id="contact">
                <CTA />
            </div>
        </motion.div>
    );
}
