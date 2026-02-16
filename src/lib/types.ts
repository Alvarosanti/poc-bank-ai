export type CreditCard = {
  id: string;
  name: string;
  issuer: string;
  network: 'VISA' | 'MASTERCARD' | 'AMEX' | 'OTHER';
  tier: 'Classic' | 'Gold' | 'Platinum' | 'Signature' | 'Infinite';
  annualFee: number;
  apr: string;
  highlights: string[];
  rewards: string;
  imageUrl: string;
  deeplink: string;
  promoTag?: string;
  eligibility?: string;
};

export type CreditCardList = CreditCard[];
