export type ProgressValue = number;

export interface CircularProgressProps {
	progressValue?: ProgressValue;
}

// runtime validator
export function clampProgressValue(v: number): ProgressValue {
	if (v < 0) return 0;
	if (v > 100) return 100;
	return v;
}
