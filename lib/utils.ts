import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
	const clsxResult: string = clsx(...inputs);

	return twMerge(clsxResult);
}
