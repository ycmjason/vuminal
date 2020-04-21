import { box } from '../data/Box';

export type Paddable<X> = { concat: (x: X) => X; length: number };

export const padStart = <X extends Paddable<X>>(x: X, length: number, getPad: () => X): X => {
  if (x.length >= length) return x;
  const pads = Array.from({ length: length - x.length }, () => getPad()).reduce((x1, x2) => x1.concat(x2));
  return pads.concat(x);
};

export const padEnd = <X extends Paddable<X>>(x: X, length: number, getPad: () => X): X => {
  if (x.length >= length) return x;
  const pads = Array.from({ length: length - x.length }, () => getPad()).reduce((x1, x2) => x1.concat(x2));
  return x.concat(pads);
};

export const padToCenter = <X extends Paddable<X>>(x: X, length: number, getPad: () => X): X => {
  if (x.length >= length) return x;
  return box(x)
    .map((x) => padStart(x, x.length + Math.floor((length - x.length) / 2), getPad))
    .map((x) => padEnd(x, length, getPad)).value;
};
