export const RANGE_EARINGS_OPTIONS = [
	{ value: 'lt_1200', label: 'Menos de S/ 1200' },
	{ value: '1200_2500', label: 'S/ 1200 - S/ 2500' },
	{ value: '2501_5000', label: 'S/ 2501 - S/ 5000' },
	{ value: 'gt_5000', label: 'Más de S/ 5000' },
] as const;

export type RangeEaringsOptionValue = (typeof RANGE_EARINGS_OPTIONS)[number]['value'];

