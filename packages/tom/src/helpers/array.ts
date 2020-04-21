import { box } from '../data/Box';

export const padArrayStart = <X>(xs: X[], length: number, getPad: () => X): X[] => {
  if (xs.length >= length) return xs;
  return [...Array.from({ length: length - xs.length }, () => getPad()), ...xs];
};

export const padArrayEnd = <X>(xs: X[], length: number, getPad: () => X): X[] => {
  if (xs.length >= length) return xs;
  return [...xs, ...Array.from({ length: length - xs.length }, () => getPad())];
};

export const padArrayCenter = <X>(xs: X[], length: number, getPad: () => X): X[] => {
  if (xs.length >= length) return xs;
  return box(xs)
    .map((xs) => padArrayStart(xs, xs.length + Math.floor((length - xs.length) / 2), getPad))
    .map((xs) => padArrayEnd(xs, length, getPad)).value;
};
