import Hero from "@/components/sections/Hero";
import IntroductionBrief from "@/components/sections/IntroductionBrief";
import InvestmentPartnersSection from "@/components/sections/InvestmentPartnersSection";
import PartnersGrid from "@/components/sections/PartnersGrid";
import StrategicPartnersSection from "@/components/sections/StrategicPartnersSection";
import PartnershipBenefits from "@/components/sections/PartnershipBenefits";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroductionBrief />
      <InvestmentPartnersSection />
      <div id="partners">
        <PartnersGrid />
      </div>
      <StrategicPartnersSection />
      <PartnershipBenefits />
      <div id="contact">
        <CTA />
      </div>
    </>
  );
}
