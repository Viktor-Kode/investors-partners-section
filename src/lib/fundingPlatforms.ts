export interface FundingPlatform {
  id: number;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  highlights: string[];
  guarantee?: {
    text: string;
    amount: string;
    terms: string;
  };
  links: {
    primary: string;
    secondary?: string;
    application?: string;
  };
  partnerId?: string;
  calendlyUrl?: string;
  calendlyPrefill?: {
    partnerName: string;
    meetingType: string;
  };
}

// ... (interfaces remain)

export const advanceFundNetwork: FundingPlatform = {
  id: 2,
  name: "Advance Fund Network",
  logo: "/images/funding/afn-logo.svg", // Will need to be added
  tagline: "Partner-Powered Funding Solutions",
  description: "Access a curated network of funding partners through our integrated platform",
  highlights: [
    "Partner network integration",
    "Streamlined application process",
    "Direct platform access"
  ],
  links: {
    primary: "https://app.advancefundsnetwork.com/partner-landing/RUM6M0A7PxYKrx88JKjMDKudc133",
    application: "https://app.advancefundsnetwork.com/application/J75Mq7P3L8TuoZwgoMIOnKWYUms2?partner=RUM6M0A7PxYKrx88JKjMDKudc133"
  },
  partnerId: "RUM6M0A7PxYKrx88JKjMDKudc133",
  calendlyUrl: "https://calendly.com/scoreupriseup/success-session",
  calendlyPrefill: {
    partnerName: "Advance Fund Network",
    meetingType: "Funding Consultation"
  }
};

export const fundingPlatforms: FundingPlatform[] = [
  advanceFundNetwork
];
