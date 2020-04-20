import unzipWith from 'lodash.unzipwith';

import createTagRenderer from './createTagRenderer';

const joinLineByLine = (s1: string, s2: string, sep: string) => {
  const lines1 = s1.split(/\n/g);
  const lines2 = s2.split(/\n/g);

  const padL1 = (l1: string) => l1.padEnd(Math.max(...lines1.map((line) => line.length)));
  const padL2 = (l2: string) => l2.padEnd(Math.max(...lines2.map((line) => line.length)));

  return unzipWith([lines1, lines2], (l1: string = '', l2: string = '') => `${padL1(l1)}${sep}${padL2(l2)}`).join('\n');
};

export default createTagRenderer(({ gapSize = 0 }: { gapSize?: number }, { children }) => {
  if (children.length <= 0) return '';
  return children.reduce((s1, s2) => joinLineByLine(s1, s2, ' '.repeat(gapSize)));
});
