export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
  affiliateLink?: string;
  priority: 'high' | 'medium' | 'low';
  category: 'lending' | 'technology' | 'investment';
  tagline?: string;
  location?: string;
  services?: string[];
  hasVideo?: boolean;
  networkAccess?: string[];
  protectionStatement?: string;
  features?: string[];
  exploreLink?: string;
  calendlyUrl?: string;
  calendlyPrefill?: {
    partnerName: string;
    meetingType: string;
  };
}

export interface InvestmentPartner {
  id: string;
  name: string;
  logo: string;
  description: string;
  hasVideo?: boolean;
  videoUrl?: string;
  currentPrice: string;
  priceLabel: string;
  projection: string;
  projectionLabel: string;
  highlights: string[];
  disclaimer: string;
  tagline?: string;
  calendlyUrl?: string;
  calendlyPrefill?: {
    partnerName: string;
    meetingType: string;
  };
}

export const investmentPartners: InvestmentPartner[] = [
  {
    id: 'wefi',
    name: 'WeFi',
    logo: '/images/partners/wefi-logo.svg',
    description: 'Exclusive investment opportunity in a growing fintech platform through WeFi\'s Initial Token Offering (ITO). Early-stage access to a company positioned for significant growth in the global financial technology sector.',
    hasVideo: true,
    videoUrl: '/videos/wefi.mp4',
    currentPrice: '$0.60',
    priceLabel: 'Current Price per Coin',
    projection: 'Double Digits',
    projectionLabel: 'Projected Growth',
    tagline: 'Investment Opportunity: WeFi ITO',
    highlights: [
      'Early-stage investment in growing fintech platform',
      'ITO (Initial Token Offering) structure',
      'Projected significant appreciation potential',
      'Exclusive access through ScoreUp RiseUp',
      'Global fintech expansion opportunity',
    ],
    disclaimer: 'Note: WeFi banking solutions are not yet available in the United States. This is strictly an investment opportunity in the company\'s growth. Investment involves risk. Projections are not guarantees. Past performance does not equal future results. Consult a financial advisor before investing.',
    calendlyUrl: 'https://calendly.com/scoreupriseup/success-session',
    calendlyPrefill: {
      partnerName: 'WeFi - Lending Partner',
      meetingType: 'Funding Consultation'
    }
  },
];

export const lendingPartners: Partner[] = [
  {
    id: 'midas',
    name: 'Midas Financial',
    logo: '/images/lmx.jpeg', // Keeping original image path for now, assuming user will update or it's a placeholder
    description: 'Specializing in flexible funding solutions including revenue-based funding, lines of credit, and business expansion capital through our curated network of alternative lenders.',
    priority: 'high',
    category: 'lending',
    tagline: 'Business Loans & Financial Solutions',
    networkAccess: [
      'Major National Banks',
      'Regional Banking Institutions',
      'Credit Union Partnerships',
      'Fintech Lending Platforms',
    ],
    services: [
      'Lines of Credit',
      'SBA Loans',
      'Term Loans',
      'Equipment Financing',
      'AR Financing',
      'Asset Based Lending',
    ],
    protectionStatement: 'We secure optimal terms through volume relationships while protecting your business health.',
    calendlyUrl: 'https://calendly.com/scoreupriseup/success-session',
    calendlyPrefill: {
      partnerName: 'Midas Financial - Business Loans',
      meetingType: 'Loan Consultation'
    }
  },
  {
    id: 'lexington',
    name: 'Lexington Capital Holdings',
    logo: '/images/dreambusiness.jpeg', // Keeping original image path for now
    description: 'Providing alternative lending solutions for businesses that need quick access to capital. We focus on potential and performance, not just credit history.',
    priority: 'medium',
    category: 'lending',
    tagline: 'Alternative Lending Solutions',
    services: [
      'Revenue Based Funding (MCA)',
      'Lines of Credit',
      'SBA Loan Products',
      'Business Expansion Capital',
    ],
    affiliateLink: 'https://dreamsresources.com/join/?refid=AA3487',
    calendlyUrl: 'https://calendly.com/scoreupriseup/success-session',
    calendlyPrefill: {
      partnerName: 'Lexington Capital - Alternative Lending',
      meetingType: 'Funding Options'
    }
  },
];

export const technologyPartners: Partner[] = [
  {
    id: 'vrda1',
    name: 'VRDa1',
    logo: '/images/vrda1.jpeg',
    description: 'Technology-driven investment partner focused on long-term growth through innovative platform integration, fractional real estate investment, and strategic technology solutions.',
    website: 'https://vrda1.com',
    affiliateLink: 'https://portal.vrda1.com/auth/sign-up/6784b59a-07b0-4f8e-80a4-59f3b7a99245',
    priority: 'medium',
    category: 'technology',
    tagline: 'Where technology meets real estate.',
    features: [
      'Fractional Real Estate', // UPDATED
      'Blockchain Integration',
      'NFT-Backed Assets',
      'Crowdfunding',
      'Global Community Expansion',
      'Continual Learning Platforms',
    ],
    calendlyUrl: 'https://calendly.com/scoreupriseup/success-session',
    calendlyPrefill: {
      partnerName: 'VRDa1 - Technology Real Estate',
      meetingType: 'Tech Investment Call'
    }
  },
];

export const colors = {
  primary: {
    navy: '#0a2540',
    royal: '#1e40af',
    blue: '#3b82f6',
    light: '#60a5fa',
  },
  neutral: {
    background: '#f8fafc',
    text: '#1f2937',
    card: '#ffffff',
  },
  priority: {
    gold: '#f59e0b',
    goldLight: '#fbbf24',
  },
};

export const siteConfig = {
  name: 'ScoreUp RiseUp',
  description: 'Strategic alliances powering ScoreUp Riseup\'s growth',
  videoUrl: '/videos/wefi.mp4',
  partnershipPhilosophy: 'We believe in building strategic, long-term partnerships that drive mutual growth and innovation. Our partners are carefully selected based on shared values, complementary capabilities, and a commitment to excellence.',
};
