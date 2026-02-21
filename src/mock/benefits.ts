export const BENEFITS_OPTIONS = [
	{ value: 'cb', label: 'Cashback' },
	{ value: 'mv', label: 'Millas/viaje' },
	{ value: 'dl', label: 'Descuentos locales' },
	{ value: 'rg', label: 'Recompensas generales' },
] as const;

export type BenefitsOption = (typeof BENEFITS_OPTIONS)[number];

