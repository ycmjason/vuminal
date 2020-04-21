import unzipWith from 'lodash.unzipwith';

import createTagRenderer from './createTagRenderer';
import { padArrayEnd, padArrayCenter, padArrayStart } from '../helpers/array';
import { padCenter } from '../helpers/string';

type Alignment = 'start' | 'center' | 'end';

const joinLineByLine = (lines1: string[], lines2: string[], sep: string): string[] => {
  return unzipWith([lines1, lines2], (l1: string = '', l2: string = '') => `${l1}${sep}${l2}`);
};

const alignLinesHorizontally = (lines: string[], alignment: Alignment): string[] => {
  const maxLength = Math.max(...lines.map(({ length }) => length));

  return lines.map((s) =>
    ({
      start: (s: string, length: number) => s.padEnd(length),
      center: padCenter,
      end: (s: string, length: number) => s.padStart(length),
    }[alignment](s, maxLength)),
  );
};

const alignLinesVertically = (lines: string[], maxLineCount: number, alignment: Alignment): string[] => {
  return {
    start: padArrayEnd,
    center: padArrayCenter,
    end: padArrayStart,
  }[alignment](lines, maxLineCount, () => '');
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
        alignLinesVertically(lines, Math.max(...children.map((s) => s.split('\n').length)), crossAxisAlignment),
      )
      .map((lines) => alignLinesHorizontally(lines, mainAxisAlignment))
      .reduce((lines1, lines2) => joinLineByLine(lines1, lines2, ' '.repeat(gapSize)))
      .join('\n');
  },
);
