import type { CreditCard } from '../../../../poc-apps-openai/web/src/lib/types.js';

export const CREDIT_CARDS: CreditCard[] = [
  {
    id: 'cc-basic-1',
    name: 'Tarjeta Básica Cashback',
    minIncome: 500,
    features: ['cashback'],
    description: 'Pequeños reembolsos en compras cotidianas.',
    deeplink: 'https://example.com/apply/cc-basic-1',
  },
  {
    id: 'cc-travel-1',
    name: 'Tarjeta Travel Plus',
    minIncome: 1200,
    features: ['travel', 'premium'],
    description: 'Millas y seguro de viaje.',
    deeplink: 'https://example.com/apply/cc-travel-1',
  },
  {
    id: 'cc-lowinterest-1',
    name: 'Tarjeta Low Interest',
    minIncome: 800,
    features: ['lowInterest'],
    description: 'Interés reducido para compras a plazos.',
    deeplink: 'https://example.com/apply/cc-lowinterest-1',
  },
  {
    id: 'cc-premium-1',
    name: 'Tarjeta Premium Elite',
    minIncome: 3000,
    features: ['premium', 'travel', 'cashback'],
    description: 'Beneficios exclusivos y salas VIP.',
    deeplink: 'https://example.com/apply/cc-premium-1',
  },
];

export default CREDIT_CARDS;
