import unzipWith from 'lodash.unzipwith';

import { createTagRenderer } from './TagRenderer';
import { Alignment, align } from '../helpers/alignment';

const joinLineByLine = (lines1: string[], lines2: string[], sep: string): string[] => {
  return unzipWith([lines1, lines2], (l1: string = '', l2: string = '') => `${l1}${sep}${l2}`);
};

export default createTagRenderer(
  (
    {
      gapSize = 0,
      mainAxisAlignment = 'start',
      crossAxisAlignment = 'start',
    }: {
      gapSize?: number;
      mainAxisAlignment?: Alignment;
      crossAxisAlignment?: Alignment;
    },
    { children },
  ) => {
    if (children.length <= 0) return '';
    return children
      .map((s) => s.split('\n'))
      .map((lines) =>
        align(lines, crossAxisAlignment, Math.max(...children.map((s) => s.split('\n').length)), () => ['']),
      )
      .map((lines) => {
        const maxLength = Math.max(...lines.map(({ length }) => length));
        return lines.map((s) => align(s, mainAxisAlignment, maxLength, () => ' '));
      })
      .reduce((lines1, lines2) => joinLineByLine(lines1, lines2, ' '.repeat(gapSize)))
      .join('\n');
  },
);
