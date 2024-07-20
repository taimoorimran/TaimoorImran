import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFormattedText = (row: string, delimeter: string = ":") => {
  if (!row) return row;
  const splittedStr = row.split(delimeter);
  if (splittedStr.length < 2) {
    return row;
  }
  return `<span class='text-lg'>${splittedStr[0]}:</span> ${splittedStr[1]}`;
};
