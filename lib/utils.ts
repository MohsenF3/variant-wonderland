import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let lastNumber = 0;

export const getUniqueKey = () => {
  let currentNumber;

  do {
    currentNumber = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  } while (currentNumber === lastNumber);

  lastNumber = currentNumber;
  return currentNumber;
};

