import { padStart, padEnd, padToCenter, Paddable } from '../helpers/pad';

export type Alignment = 'start' | 'center' | 'end';

export const align = <X extends Paddable<X>>(x: X, alignment: Alignment, maxLength: number, getPad: () => X): X => {
  return {
    start: padEnd,
    center: padToCenter,
    end: padStart,
  }[alignment](x, maxLength, getPad);
};
