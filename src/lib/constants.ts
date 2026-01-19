export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
  priority: 'high' | 'medium' | 'low';
  category: 'lending' | 'technology';
  tagline?: string;
  location?: string;
  services?: string[];
  hasVideo?: boolean;
}

export const lendingPartners: Partner[] = [
  {
    id: 'wefi',
    name: 'WeFi',
    logo: '/images/partners/wefi-logo.svg',
    description: 'Leading financial technology partner providing primary capital access and innovative lending solutions that power ScoreUp Riseup\'s growth.',
    priority: 'high',
    category: 'lending',
    hasVideo: true,
  },
  {
    id: 'lexington',
    name: 'Lexington Capital Holdings',
    logo: '/images/Lexington.jpeg',
    description: 'Premier investment firm specializing in growth capital and strategic financial partnerships.',
    priority: 'high',
    category: 'lending',
    tagline: 'Building lasting financial partnerships',
    location: 'New York, NY',
  },
  {
    id: 'midas',
    name: 'Midas Financial',
    logo: '/images/Midas.jpeg',
    description: 'Strategic financial partner delivering comprehensive lending solutions and capital access.',
    priority: 'medium',
    category: 'lending',
    services: [
      'Capital Access Solutions',
      'Strategic Lending',
      'Financial Advisory',
      'Growth Financing',
    ],
  },
];

export const technologyPartners: Partner[] = [
  {
    id: 'vrda1',
    name: 'VRDa1',
    logo: '/images/vrda1.jpeg',
    description: 'Technology-driven investment partner focused on long-term growth through innovative platform integration and strategic technology solutions.',
    website: 'https://vrda1.com',
    priority: 'medium',
    category: 'technology',
    tagline: 'Technology integration for sustainable growth',
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
