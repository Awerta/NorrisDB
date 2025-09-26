// Allowed values 0–10
export type ProgressValue = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export interface StepsProps {
	progressValue?: ProgressValue;
}
