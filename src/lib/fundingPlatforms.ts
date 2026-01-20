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
}

export const bankBreezy: FundingPlatform = {
  id: 1,
  name: "BankBreezy",
  logo: "/images/funding/bankbreezy-logo.svg", // Will need to be added
  tagline: "We'll Find You the Best Funding Offer-Guaranteed!",
  description: "Get the best offer from multiple top business funders through a single application",
  highlights: [
    "Single application to multiple funders",
    "Best offer guarantee",
    "$500 protection if we can't beat your offer"
  ],
  guarantee: {
    text: "Meet or Beat Guarantee",
    amount: "$500",
    terms: "if BankBreezy cannot meet or beat your best funding offer"
  },
  links: {
    primary: "https://bankbreezy.com/funding/?partner-id=DreamsBusinessResources"
  }
};

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
  partnerId: "RUM6M0A7PxYKrx88JKjMDKudc133"
};

export const fundingPlatforms: FundingPlatform[] = [
  bankBreezy,
  advanceFundNetwork
];
