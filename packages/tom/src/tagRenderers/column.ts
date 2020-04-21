import { createTagRenderer } from './TagRenderer';
import { Alignment, align } from '../helpers/alignment';

export default createTagRenderer(
  (
    {
      gapSize = 0,
      crossAxisAlignment = 'start',
    }: {
      gapSize?: number;
      crossAxisAlignment?: Alignment;
    },
    { children },
  ) => {
    return children
      .map((s) => s.split('\n'))
      .map((lines) => {
        const maxLength = Math.max(...children.flatMap((s) => s.split('\n').map((l) => l.length)));
        return lines.map((line) => align(line, crossAxisAlignment, maxLength, () => ' '));
      })
      .join('\n'.repeat(gapSize + 1));
  },
);
