export const BENEFITS_OPTIONS = [
    'Cashback',
    'Millas/viaje',
    'Descuentos locales',
    'Recompensas generales',
] as const;

export type BenefitsOption = (typeof BENEFITS_OPTIONS)[number];

