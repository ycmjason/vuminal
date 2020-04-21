export const padCenter = (s: string, length: number, pad?: string): string => {
  if (s.length >= length) return s;
  return s.padStart(s.length + Math.floor((length - s.length) / 2), pad).padEnd(length, pad);
};
